import type { ArtistArchive, ArchiveProject } from './archiveData';

type ArchiveBatch = Record<string, ArtistArchive>;
type ArchiveBatchModule = Record<string, unknown>;

const modules = import.meta.glob('./archiveBatch*.ts', { eager: true }) as Record<string, ArchiveBatchModule>;

const deepArchiveBatches: Array<{ number: number; batch: ArchiveBatch }> = Object.entries(modules)
  .map(([path, module]) => {
    const match = path.match(/archiveBatch(\d+)\.ts$/);
    if (!match) return null;
    const number = Number(match[1]);
    const exportName = `archiveBatch${number}`;
    const batch = module[exportName] as ArchiveBatch | undefined;
    return batch ? { number, batch } : null;
  })
  .filter((entry): entry is { number: number; batch: ArchiveBatch } => entry !== null)
  .sort((a, b) => b.number - a.number);

const unique = <T,>(items: T[], key: (item: T) => string): T[] => {
  const seen = new Set<string>();
  return items.filter((item) => {
    const value = key(item);
    if (seen.has(value)) return false;
    seen.add(value);
    return true;
  });
};

/**
 * Work-level research is intentionally additive. New hourly batches can deepen an
 * artist without erasing projects documented by earlier parallel batches.
 * Metadata from the newest batch leads; projects, exhibitions and sources are
 * accumulated newest-first and de-duplicated.
 */
export function getDeepArtistArchive(artistId: string): ArtistArchive | undefined {
  const matches = deepArchiveBatches
    .map(({ batch }) => batch[artistId])
    .filter((archive): archive is ArtistArchive => Boolean(archive));

  if (!matches.length) return undefined;
  const newest = matches[0];
  const projects = unique<ArchiveProject>(matches.flatMap((archive) => archive.projects ?? []), (project) => `${project.title}::${project.period}`);
  const sources = unique(matches.flatMap((archive) => archive.sources ?? []), (source) => source.url);

  return {
    ...newest,
    projectCoverage: matches.map((archive) => archive.projectCoverage).filter(Boolean).join(' · '),
    imageCoverage: matches.map((archive) => archive.imageCoverage).filter(Boolean).join(' · '),
    note: matches.map((archive) => archive.note).filter(Boolean).join('\n\n'),
    projects,
    awards: unique(matches.flatMap((archive) => archive.awards ?? []), (item) => item),
    exhibitions: unique(matches.flatMap((archive) => archive.exhibitions ?? []), (item) => item),
    sources,
  };
}
