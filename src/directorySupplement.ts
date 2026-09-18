import { directoryEntries, type DirectoryEntry } from './directoryExpansion18';

const additions: DirectoryEntry[] = [
  {
    id: 'deck-singapore', domain: 'photo', category: 'exhibitions',
    name: 'DECK Photography Art Centre',
    summary: '新加坡非营利摄影艺术机构，也是 Singapore International Photography Festival（SIPF）的组织者；重点关注亚洲当代摄影、策展研究、驻留与实验性图像实践。',
    url: 'https://deck.sg/', tokens: ['DECK', 'DECK Photography Art Centre', 'Singapore International Photography Festival', 'SIPF'],
    kind: '展览', track: '新加坡 · 摄影机构 / SIPF',
    focus: '不要把 DECK 当成杂志。重点沿展览、驻留、研究项目和 SIPF 继续追踪亚洲摄影实践，尤其适合观察摄影如何进入装置、档案、影像和 AI 图像。'
  },
  {
    id: 'gup-magazine', domain: 'photo', category: 'magazines',
    name: 'GUP Magazine',
    summary: '国际当代摄影杂志与平台，覆盖概念摄影、摄影书、评论与当代摄影写作，并同时经营纸刊、在线内容和出版。',
    url: 'https://www.gupnew.com/gup', tokens: ['GUP', 'GUP Magazine'], kind: '出版', track: '荷兰 / 国际 · 杂志',
    focus: '适合从专题、portfolio 与书评观察当代摄影项目怎样被编辑成杂志叙事；刊载记录与奖项、展览履历分开看。'
  },
  {
    id: 'der-greif', domain: 'photo', category: 'magazines',
    name: 'Der Greif',
    summary: '以年度纸刊为核心的当代摄影出版平台，每期与不同 guest editor 合作，从开放投稿中重新编辑、组合图像形成新的视觉叙事。',
    url: 'https://dergreif.org/', tokens: ['Der Greif'], kind: '出版', track: '德国 · 杂志 / 开放征集',
    focus: '特别适合研究“编辑本身如何制造意义”：同一批图像经 guest editor 选择、排序和并置后怎样改变原项目语境。'
  },
  {
    id: 'phmuseum-editorial', domain: 'photo', category: 'magazines',
    name: 'PhMuseum · Editorial',
    summary: '独立摄影平台的编辑板块，持续刊登摄影项目、访谈、摄影书评论以及 open call / 展览指南；与其 grants、奖项和教育项目分开记录。',
    url: 'https://phmuseum.com/', tokens: ['PhMuseum', 'PHmuseum'], kind: '出版', track: '国际 · 在线编辑平台',
    focus: '把 Editorial 与 PhMuseum Grants 分开：前者看项目如何被编辑和讨论，后者才是奖项 / 资助信号。'
  },
  {
    id: 'the-eyes-magazine', domain: 'photo', category: 'magazines',
    name: 'The Eyes',
    summary: '法国独立摄影出版平台与双语杂志，围绕当代摄影和视觉思考出版杂志、专著、艺术家书与图像研究项目。',
    url: 'https://theeyes.eu/en/', tokens: ['The Eyes', 'The Eyes Publishing'], kind: '出版', track: '法国 · 双语杂志 / 出版',
    focus: '除了作品本身，重点看它如何把摄影与文本、策展议题、摄影书设计和 Paris Photo / Arles 等现场连接起来。'
  },
  {
    id: 'source-review', domain: 'photo', category: 'magazines',
    name: 'SOURCE Photographic Review',
    summary: '以当代摄影批评、portfolio、展览与摄影书评论为核心的摄影期刊，长期覆盖英国与爱尔兰，同时讨论摄影在更广文化中的位置。',
    url: 'https://www.source.ie/', tokens: ['SOURCE Photographic Review', 'Source Photographic Review', 'SOURCE'], kind: '出版', track: '英国 / 爱尔兰 · 摄影评论',
    focus: '适合补足只看作品网站缺少的批评层：比较 portfolio 呈现、长文分析、展评与书评如何给同一实践建立语境。'
  },
  {
    id: 'blind-magazine', domain: 'photo', category: 'magazines',
    name: 'Blind Magazine',
    summary: '法英双语在线摄影杂志，从摄影新闻延伸到文化、社会与环境议题，并持续报道艺术家、展览和摄影书。',
    url: 'https://www.blind-magazine.com/', tokens: ['Blind Magazine'], kind: '出版', track: '法国 / 国际 · 在线杂志',
    focus: '更适合做广域扫描和发现入口；进入具体艺术家后仍应回到艺术家、机构和出版物的一手来源。'
  },
  {
    id: 'lenscratch', domain: 'photo', category: 'magazines',
    name: 'LENSCRATCH',
    summary: '面向摄影艺术的在线平台，长期发布艺术家专题、访谈、教育内容、展览与开放征集，也特别支持 emerging photographers。',
    url: 'https://lenscratch.com/', tokens: ['LENSCRATCH', 'Lenscratch'], kind: '出版', track: '美国 · 在线平台',
    focus: '适合作为发现新项目和新人入口，但站内研究时把“被专题报道”与“进入重要机构 / 馆藏”区分开。'
  },
  {
    id: 'camera-austria-magazine', domain: 'photo', category: 'magazines',
    name: 'Camera Austria International',
    summary: '1980 年创办的德英双语摄影杂志，以摄影作为当代艺术媒介与实践的长期批评讨论为核心，并持续发表重要艺术家与年轻国际实践。',
    url: 'https://camera-austria.at/en/', tokens: ['Camera Austria', 'Camera Austria International'], kind: '出版', track: '奥地利 · 当代艺术 / 摄影理论',
    focus: '这本对你的研究尤其有用：不要只按“摄影杂志”读，而要看摄影如何在当代艺术、理论和长期批评语境里被定位。'
  }
];

for (const entry of additions) {
  if (!directoryEntries.some(existing => existing.id === entry.id)) directoryEntries.push(entry);
}
