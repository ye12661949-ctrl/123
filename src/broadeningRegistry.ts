import type { Artist } from './data';

type BroadeningModule = Record<string, unknown>;

const modules = import.meta.glob('./broadeningBatch*.ts', { eager: true }) as Record<string, BroadeningModule>;

export const broadeningArtists: Artist[] = Object.entries(modules)
  .map(([path, module]) => {
    const match = path.match(/broadeningBatch(\d+)\.ts$/);
    if (!match) return null;
    const number = Number(match[1]);
    const exportName = `broadeningBatch${number}`;
    const artists = module[exportName] as Artist[] | undefined;
    return artists ? { number, artists } : null;
  })
  .filter((entry): entry is { number: number; artists: Artist[] } => entry !== null)
  .sort((a, b) => a.number - b.number)
  .flatMap(({ artists }) => artists);
