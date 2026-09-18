export type FieldId = 'contemporary-art' | 'contemporary-photography' | 'expanded-image';

export type FieldCategory = {
  id: FieldId;
  label: string;
  shortLabel: string;
  description: string;
  secondary: string[];
};

export type InstitutionTier = 1 | 2 | 3;

export type InstitutionHierarchyItem = {
  id: string;
  name: string;
  field: FieldId;
  secondaryType: string;
  tier: InstitutionTier;
  geography: string;
  note: string;
};

export type CuratorGraphNode = {
  id: string;
  label: string;
  shortLabel: string;
  type: 'curator' | 'institution';
  x: number;
  y: number;
};

export type CuratorGraphEdge = {
  from: string;
  to: string;
  kind: 'direct' | 'shared';
  label: string;
};

export type CuratorVisualRecord = {
  curatorId: string;
  institutions: string[];
  exhibitions: Array<{ year: string; title: string; context: string }>;
};

export const fieldCategories: FieldCategory[] = [
  {
    id: 'contemporary-art',
    label: '当代艺术 Contemporary Art',
    shortLabel: '当代艺术',
    description: '以现代 / 当代艺术博物馆、双年展、综合艺术奖项和大型策展体系为主要职业语境。',
    secondary: ['博物馆 / 美术馆', '双年展 / 周期展', '综合艺术奖项', '公共艺术 / 委托'],
  },
  {
    id: 'contemporary-photography',
    label: '当代摄影 Contemporary Photography',
    shortLabel: '当代摄影',
    description: '以摄影博物馆、摄影节、摄影奖项、杂志、出版与摄影专业策展体系为主要语境。',
    secondary: ['摄影博物馆 / 中心', '摄影节', '摄影奖项 / 人才计划', '杂志 / 出版'],
  },
  {
    id: 'expanded-image',
    label: '跨领域 Expanded Image',
    shortLabel: '跨领域影像',
    description: '摄影与影像、装置、表演、档案、AI、研究型实践互相穿透的中间地带。',
    secondary: ['影像 / 新媒体', '研究 / 档案', '摄影装置', '跨媒介机构'],
  },
];

export const institutionHierarchy: InstitutionHierarchyItem[] = [
  { id: 'moma', name: 'MoMA', field: 'contemporary-art', secondaryType: '博物馆 / 美术馆', tier: 1, geography: 'New York', note: '全球现代与当代艺术核心机构；摄影部门同时具有独立历史与跨媒介影响力。' },
  { id: 'tate', name: 'Tate', field: 'contemporary-art', secondaryType: '博物馆 / 美术馆', tier: 1, geography: 'UK', note: '英国国家级现代 / 当代艺术网络；Turner Prize 与摄影策展都与其生态高度相关。' },
  { id: 'pompidou', name: 'Centre Pompidou', field: 'contemporary-art', secondaryType: '博物馆 / 美术馆', tier: 1, geography: 'Paris', note: '欧洲现代与当代艺术核心馆之一，对摄影、影像与跨媒介实践影响很强。' },
  { id: 'venice', name: 'Venice Biennale', field: 'contemporary-art', secondaryType: '双年展 / 周期展', tier: 1, geography: 'Venice', note: '全球当代艺术最具象征性的大型周期展之一；主展与国家馆共同形成国际可见度。' },
  { id: 'documenta', name: 'documenta', field: 'contemporary-art', secondaryType: '双年展 / 周期展', tier: 1, geography: 'Kassel', note: '五年一届的大型当代艺术研究型展览，对策展史与艺术史叙事影响巨大。' },
  { id: 'whitney', name: 'Whitney Museum / Biennial', field: 'contemporary-art', secondaryType: '博物馆 / 双年展', tier: 2, geography: 'New York', note: '美国当代艺术的重要制度节点；Whitney Biennial 是观察美国艺术现场的长期指标。' },
  { id: 'gwangju', name: 'Gwangju Biennale', field: 'contemporary-art', secondaryType: '双年展 / 周期展', tier: 2, geography: 'Gwangju', note: '亚洲最重要的国际双年展之一，政治、历史与区域网络影响显著。' },
  { id: 'sao-paulo', name: 'São Paulo Biennial', field: 'contemporary-art', secondaryType: '双年展 / 周期展', tier: 2, geography: 'São Paulo', note: '全球历史最悠久的双年展之一，是拉美当代艺术的重要国际接口。' },
  { id: 'sharjah', name: 'Sharjah Biennial', field: 'contemporary-art', secondaryType: '双年展 / 周期展', tier: 2, geography: 'Sharjah', note: '在西亚、非洲、南亚与全球南方策展网络中具有很高影响力。' },
  { id: 'serpentine', name: 'Serpentine', field: 'contemporary-art', secondaryType: '美术馆 / 委托', tier: 2, geography: 'London', note: '国际当代艺术、公共委托、数字与跨学科项目的重要节点。' },
  { id: 'masp', name: 'MASP', field: 'contemporary-art', secondaryType: '博物馆 / 美术馆', tier: 2, geography: 'São Paulo', note: '巴西与全球南方艺术史重写的重要机构，近年策展影响力非常强。' },
  { id: 'studio-museum', name: 'Studio Museum in Harlem', field: 'contemporary-art', secondaryType: '博物馆 / 艺术家发展', tier: 2, geography: 'New York', note: '黑人艺术家发展、机构支持与美国当代艺术史的重要节点。' },
  { id: 'foam', name: 'Foam', field: 'contemporary-photography', secondaryType: '摄影博物馆 / 人才计划', tier: 1, geography: 'Amsterdam', note: '国际当代摄影的重要专业机构；Foam Talent 对职业早期艺术家影响很大。' },
  { id: 'tpg', name: 'The Photographers’ Gallery', field: 'contemporary-photography', secondaryType: '摄影馆 / 奖项', tier: 1, geography: 'London', note: '英国摄影专业机构核心节点；Deutsche Börse Prize 与其长期绑定。' },
  { id: 'aperture', name: 'Aperture', field: 'contemporary-photography', secondaryType: '杂志 / 出版 / 展览', tier: 1, geography: 'New York', note: '出版、杂志、摄影书奖与人才计划共同构成国际摄影话语网络。' },
  { id: 'icp', name: 'ICP', field: 'contemporary-photography', secondaryType: '摄影中心 / 教育 / 奖项', tier: 1, geography: 'New York', note: '展览、教育、档案与 Infinity Awards 共同构成国际摄影职业生态。' },
  { id: 'arles', name: 'Les Rencontres d’Arles', field: 'contemporary-photography', secondaryType: '摄影节', tier: 1, geography: 'Arles', note: '全球最重要的摄影节之一，连接展览、出版、发现奖与策展网络。' },
  { id: 'dbpf', name: 'Deutsche Börse Photography Foundation Prize', field: 'contemporary-photography', secondaryType: '摄影奖项', tier: 1, geography: 'London / Europe', note: '观察摄影进入装置、声音、AI、档案和长期纪实的关键奖项。' },
  { id: 'prix-pictet', name: 'Prix Pictet', field: 'contemporary-photography', secondaryType: '摄影奖项', tier: 2, geography: 'International', note: '成熟摄影项目与可持续议题的重要国际奖项，依赖提名网络。' },
  { id: 'photo-elysee', name: 'Photo Elysée', field: 'contemporary-photography', secondaryType: '摄影博物馆', tier: 2, geography: 'Lausanne', note: '摄影史、当代摄影、出版与奖项生态的重要欧洲节点。' },
  { id: 'co-berlin', name: 'C/O Berlin', field: 'contemporary-photography', secondaryType: '摄影机构 / 展览', tier: 2, geography: 'Berlin', note: '欧洲摄影展览、人才与公众项目的重要中型机构。' },
  { id: 'autograph', name: 'Autograph', field: 'contemporary-photography', secondaryType: '摄影机构 / 档案', tier: 2, geography: 'London', note: '黑人摄影、去殖民摄影史、档案与社会正义研究的关键机构。' },
  { id: 'images-vevey', name: 'Images Vevey', field: 'contemporary-photography', secondaryType: '摄影节 / 委托', tier: 2, geography: 'Vevey', note: '强调公共空间、委托和大型展示的国际摄影节。' },
  { id: 'v-and-a', name: 'V&A Photography', field: 'expanded-image', secondaryType: '跨媒介博物馆 / 摄影收藏', tier: 1, geography: 'London', note: '摄影收藏与设计、时尚、视觉文化交叉，是摄影进入更广文化史的重要节点。' },
  { id: 'sfmoma', name: 'SFMOMA', field: 'expanded-image', secondaryType: '现代 / 当代艺术博物馆', tier: 2, geography: 'San Francisco', note: '摄影、媒体艺术与当代艺术收藏之间的边界较为开放。' },
  { id: 'bjp', name: 'British Journal of Photography', field: 'contemporary-photography', secondaryType: '杂志 / 行业观察', tier: 3, geography: 'UK / international', note: '行业影响力高，但职业信号更多来自编辑曝光、提名与人才观察，而非博物馆级制度权力。' },
  { id: 'phmuseum', name: 'PhMuseum', field: 'contemporary-photography', secondaryType: '在线平台 / 奖项', tier: 3, geography: 'International', note: '对职业早期摄影师较现实的曝光、奖项和项目传播平台。' },
];

export const curatorGraphNodes: CuratorGraphNode[] = [
  { id: 'adriano-pedrosa', label: 'Adriano Pedrosa', shortLabel: 'Pedrosa', type: 'curator', x: 125, y: 70 },
  { id: 'koyo-kouoh', label: 'Koyo Kouoh', shortLabel: 'Kouoh', type: 'curator', x: 125, y: 140 },
  { id: 'cecilia-alemani', label: 'Cecilia Alemani', shortLabel: 'Alemani', type: 'curator', x: 125, y: 210 },
  { id: 'thelma-golden', label: 'Thelma Golden', shortLabel: 'Golden', type: 'curator', x: 125, y: 280 },
  { id: 'roxana-marcoci', label: 'Roxana Marcoci', shortLabel: 'Marcoci', type: 'curator', x: 125, y: 350 },
  { id: 'shoair-mavlian', label: 'Shoair Mavlian', shortLabel: 'Mavlian', type: 'curator', x: 125, y: 420 },
  { id: 'mark-sealy', label: 'Mark Sealy', shortLabel: 'Sealy', type: 'curator', x: 125, y: 490 },
  { id: 'hans-ulrich-obrist', label: 'Hans Ulrich Obrist', shortLabel: 'Obrist', type: 'curator', x: 125, y: 560 },
  { id: 'charlotte-cotton', label: 'Charlotte Cotton', shortLabel: 'Cotton', type: 'curator', x: 125, y: 630 },
  { id: 'masp-node', label: 'MASP', shortLabel: 'MASP', type: 'institution', x: 630, y: 55 },
  { id: 'venice-node', label: 'Venice Biennale', shortLabel: 'Venice', type: 'institution', x: 630, y: 115 },
  { id: 'raw-node', label: 'RAW Material Company', shortLabel: 'RAW Material', type: 'institution', x: 630, y: 175 },
  { id: 'highline-node', label: 'High Line Art', shortLabel: 'High Line', type: 'institution', x: 630, y: 235 },
  { id: 'studio-node', label: 'Studio Museum in Harlem', shortLabel: 'Studio Museum', type: 'institution', x: 630, y: 295 },
  { id: 'moma-node', label: 'MoMA', shortLabel: 'MoMA', type: 'institution', x: 630, y: 355 },
  { id: 'tpg-node', label: 'The Photographers’ Gallery', shortLabel: 'TPG', type: 'institution', x: 630, y: 415 },
  { id: 'tate-node', label: 'Tate Modern', shortLabel: 'Tate', type: 'institution', x: 630, y: 475 },
  { id: 'autograph-node', label: 'Autograph', shortLabel: 'Autograph', type: 'institution', x: 630, y: 535 },
  { id: 'serpentine-node', label: 'Serpentine', shortLabel: 'Serpentine', type: 'institution', x: 630, y: 595 },
  { id: 'va-node', label: 'V&A / LACMA', shortLabel: 'V&A / LACMA', type: 'institution', x: 630, y: 655 },
];

export const curatorGraphEdges: CuratorGraphEdge[] = [
  { from: 'adriano-pedrosa', to: 'masp-node', kind: 'direct', label: 'Artistic Director' },
  { from: 'adriano-pedrosa', to: 'venice-node', kind: 'direct', label: 'Venice 2024 curator' },
  { from: 'koyo-kouoh', to: 'raw-node', kind: 'direct', label: 'Founder / ecosystem' },
  { from: 'koyo-kouoh', to: 'venice-node', kind: 'direct', label: 'Venice 2026 curatorial framework' },
  { from: 'cecilia-alemani', to: 'highline-node', kind: 'direct', label: 'Director / Chief Curator' },
  { from: 'cecilia-alemani', to: 'venice-node', kind: 'direct', label: 'Venice 2022 curator' },
  { from: 'thelma-golden', to: 'studio-node', kind: 'direct', label: 'Director / Chief Curator' },
  { from: 'roxana-marcoci', to: 'moma-node', kind: 'direct', label: 'Senior Curator, Photography' },
  { from: 'shoair-mavlian', to: 'tpg-node', kind: 'direct', label: 'Director' },
  { from: 'shoair-mavlian', to: 'tate-node', kind: 'direct', label: 'former photography curator' },
  { from: 'mark-sealy', to: 'autograph-node', kind: 'direct', label: 'Executive Director' },
  { from: 'hans-ulrich-obrist', to: 'serpentine-node', kind: 'direct', label: 'Artistic Director' },
  { from: 'charlotte-cotton', to: 'tpg-node', kind: 'direct', label: 'former programming / curatorial context' },
  { from: 'charlotte-cotton', to: 'va-node', kind: 'direct', label: 'V&A / LACMA photography roles' },
  { from: 'adriano-pedrosa', to: 'koyo-kouoh', kind: 'shared', label: 'Venice curatorial lineage / Global South histories' },
  { from: 'adriano-pedrosa', to: 'cecilia-alemani', kind: 'shared', label: 'Venice curatorial lineage' },
  { from: 'roxana-marcoci', to: 'shoair-mavlian', kind: 'shared', label: 'expanded photography / museum institutions' },
  { from: 'shoair-mavlian', to: 'charlotte-cotton', kind: 'shared', label: 'London photography institutional ecology' },
];

export const curatorVisualRecords: Record<string, CuratorVisualRecord> = {
  'adriano-pedrosa': { curatorId: 'adriano-pedrosa', institutions: ['MASP', 'Venice Biennale'], exhibitions: [{ year: '2024', title: 'Foreigners Everywhere', context: '60th Venice Biennale' }, { year: '2022', title: 'Brazilian Histories', context: 'MASP' }, { year: '2020', title: 'Histories of Dance', context: 'MASP' }] },
  'koyo-kouoh': { curatorId: 'koyo-kouoh', institutions: ['RAW Material Company', 'Venice Biennale'], exhibitions: [{ year: '2026', title: 'In Minor Keys', context: 'Venice Biennale curatorial framework' }, { year: 'long-term', title: 'RAW Material Company programmes', context: 'Dakar artist-led research ecology' }] },
  'cecilia-alemani': { curatorId: 'cecilia-alemani', institutions: ['High Line Art', 'Venice Biennale'], exhibitions: [{ year: '2022', title: 'The Milk of Dreams', context: '59th Venice Biennale' }, { year: 'ongoing', title: 'High Line Art commissions', context: 'New York public art' }] },
  'thelma-golden': { curatorId: 'thelma-golden', institutions: ['Studio Museum in Harlem', 'Whitney Museum'], exhibitions: [{ year: '1994–95', title: 'Black Male', context: 'Whitney Museum' }, { year: '2001', title: 'Freestyle', context: 'Studio Museum in Harlem' }, { year: 'long-term', title: 'Studio Museum artist development programme', context: 'Harlem / Black contemporary art' }] },
  'roxana-marcoci': { curatorId: 'roxana-marcoci', institutions: ['MoMA'], exhibitions: [{ year: '2026', title: 'Taking Back Our Space: Photographic Perspectives', context: 'MoMA' }, { year: '2024', title: 'LaToya Ruby Frazier: Monuments of Solidarity', context: 'MoMA' }, { year: '2023', title: 'An-My Lê: Between Two Rivers', context: 'MoMA' }, { year: '2022', title: 'Wolfgang Tillmans: To look without fear', context: 'MoMA' }, { year: '2015', title: 'Zoe Leonard: Analogue', context: 'MoMA' }] },
  'shoair-mavlian': { curatorId: 'shoair-mavlian', institutions: ['The Photographers’ Gallery', 'Tate Modern', 'Deutsche Börse Photography Foundation Prize'], exhibitions: [{ year: 'Tate period', title: 'Conflict, Time, Photography', context: 'Tate Modern' }, { year: 'Tate period', title: 'Shape of Light', context: 'Tate Modern' }, { year: '2026', title: 'Deutsche Börse Photography Foundation Prize', context: 'jury / institutional context' }] },
  'mark-sealy': { curatorId: 'mark-sealy', institutions: ['Autograph'], exhibitions: [{ year: '1991–', title: 'Autograph commissions and exhibitions', context: 'Black photographic practices / archives / representation' }, { year: 'research', title: 'Decolonising the Camera', context: 'curatorial and scholarly framework' }] },
  'hans-ulrich-obrist': { curatorId: 'hans-ulrich-obrist', institutions: ['Serpentine'], exhibitions: [{ year: 'ongoing', title: 'Serpentine commissions and programmes', context: 'London / global contemporary art' }, { year: 'long-term', title: 'Do It', context: 'instruction-based travelling curatorial format' }, { year: '2010s', title: '89plus', context: 'research / emerging generation network' }] },
  'charlotte-cotton': { curatorId: 'charlotte-cotton', institutions: ['V&A', 'The Photographers’ Gallery', 'LACMA'], exhibitions: [{ year: 'career', title: 'V&A photography programmes', context: 'London' }, { year: 'career', title: 'The Photographers’ Gallery programming', context: 'London' }, { year: 'career', title: 'LACMA photography department', context: 'Los Angeles' }] },
};

const artTokens = ['MoMA', 'Tate', 'Centre Pompidou', 'Venice Biennale', 'Whitney Biennial', 'Berlin Biennale', 'Gwangju Biennale', 'São Paulo', 'Sharjah', 'documenta', 'Serpentine', 'MASP'];
const photoTokens = ['Foam', 'Aperture', 'ICP', 'Deutsche Börse', 'The Photographers’ Gallery', 'Photo Elysée', 'C/O Berlin', 'Images Vevey', 'Camera Austria', 'Rencontres', 'PhMuseum', 'Magnum'];

export function getArtistFieldTags(
  artist: { institutions: string[]; methods: string[]; outputs: string[] },
  circuits: string[]
) {
  const joined = [...artist.institutions, ...circuits].join(' ');
  const hasArt = artTokens.some(token => joined.includes(token));
  const hasPhotoInstitution = photoTokens.some(token => joined.includes(token));
  const hasPhotoPractice = [...artist.methods, ...artist.outputs].some(item => /摄影|photograph|photobook|肖像|暗房|相机/i.test(item));
  const hasExpanded = artist.outputs.some(item => /装置|影像|录像|电影|雕塑|声音|表演|installation|video|film/i.test(item));
  const tags: string[] = [];
  if (hasArt) tags.push(fieldCategories[0].label);
  if (hasPhotoInstitution || hasPhotoPractice) tags.push(fieldCategories[1].label);
  if ((hasArt && (hasPhotoInstitution || hasPhotoPractice)) || hasExpanded) tags.push(fieldCategories[2].label);
  return tags;
}
