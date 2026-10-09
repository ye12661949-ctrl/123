import type { CriticalProject } from './criticalDetailBatch';

/**
 * Automatically include all criticalDetailBatch*.ts files, newest overrides
 * earlier entries only when artistId + project key are identical.
 * This fixes older research batches being committed but invisible in the UI.
 */
type CriticalBatch = Record<string, Record<string, CriticalProject>>;
type BatchModule = Record<string, unknown>;
const modules = import.meta.glob('./criticalDetailBatch*.ts', { eager: true }) as Record<string, BatchModule>;

const batches = Object.entries(modules)
  .map(([path, module]) => {
    const match = path.match(/criticalDetailBatch(\d*)\.ts$/);
    if (!match) return null;
    const suffix = match[1];
    const exportName = suffix ? `criticalDetailBatch${suffix}` : 'criticalDetailBatch';
    const batch = module[exportName] as CriticalBatch | undefined;
    return batch ? { number: suffix ? Number(suffix) : 0, batch } : null;
  })
  .filter((entry): entry is { number: number; batch: CriticalBatch } => entry !== null)
  .sort((a, b) => a.number - b.number);

export function getArtistCriticalProjects(artistId: string): Record<string, CriticalProject> {
  return Object.assign({}, ...batches.map(({ batch }) => batch[artistId] ?? {})) as Record<string, CriticalProject>;
}
