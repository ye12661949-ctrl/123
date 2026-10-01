import type { ArtistArchive } from './archiveData';

type ArchiveBatch = Record<string, ArtistArchive>;
type ArchiveBatchModule = Record<string, unknown>;

const modules = import.meta.glob('./archiveBatch*.ts', { eager: true }) as Record<string, ArchiveBatchModule>;

const deepArchiveBatches: ArchiveBatch[] = Object.entries(modules)
  .map(([path, module]) => {
    const match = path.match(/archiveBatch(\d+)\.ts$/);
    if (!match) return null;
    const number = Number(match[1]);
    const exportName = `archiveBatch${number}`;
    const batch = module[exportName] as ArchiveBatch | undefined;
    return batch ? { number, batch } : null;
  })
  .filter((entry): entry is { number: number; batch: ArchiveBatch } => entry !== null)
  .sort((a, b) => b.number - a.number)
  .map(({ batch }) => batch);

export function getDeepArtistArchive(artistId: string): ArtistArchive | undefined {
  for (const batch of deepArchiveBatches) {
    const archive = batch[artistId];
    if (archive) return archive;
  }
  return undefined;
}
