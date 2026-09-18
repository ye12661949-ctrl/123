import type { Artist } from './data';

const source2024 = 'https://www.deutsche-boerse.com/dbg-en/media/news-stories/press-releases/Lebohang-Kganye-wins-the-Deutsche-B-rse-Photography-Foundation-Prize-2024-3968426';

const records = [
  ['valie-export', 'VALIE EXPORT', 'Vienna / Austria', '入围'],
  ['rajesh-vangad', 'Rajesh Vangad', 'Maharashtra / India', '入围'],
  ['hrair-sarkissian', 'Hrair Sarkissian', 'London / Damascus', '入围']
] as const;

export const photoRosterImmediateArtists: Artist[] = records.map(([id, name, base, status]) => ({
  id,
  name,
  born: '—',
  base,
  intro: `Deutsche Börse Photography Foundation Prize 2024 ${status}艺术家。先建立可点击名单档案，详细项目与作品图随后逐条核实。`,
  methods: ['摄影 / 当代图像实践'],
  subjects: ['摄影', '记忆', '社会与历史'],
  outputs: ['摄影', '展览'],
  institutions: ['The Photographers’ Gallery', 'Deutsche Börse Photography Foundation Prize'],
  achievements: [`Deutsche Börse Photography Foundation Prize 2024 ${status}`],
  whyImportant: '先保证摄影奖项目录中的官方入围者真正进入主艺术家数据库，而不是只留下一个空的奖项目录入口。',
  projects: [],
  images: [],
  sourceLabel: 'Deutsche Börse Photography Foundation · 2024',
  sourceUrl: source2024
}));
