import { directoryEntries } from './directoryExpansion18';
import { artists, type Artist } from './data';
import { artistArchives, type ArtistArchive, type ArchiveRelation } from './archiveData';

const normalizeName = (value: string) => value
  .normalize('NFKD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[’']/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, ' ')
  .trim();
const slug = (value: string) => normalizeName(value).replace(/\s+/g, '-');
const findArtist = (name: string) => artists.find(artist => normalizeName(artist.name) === normalizeName(name));

const ICP = 'https://www.icp.org/';
const ICP_ABOUT = 'https://www.icp.org/about';
const ICP_EXHIBITIONS = 'https://www.icp.org/exhibitions/past-exhibitions';
const ICP_EXPLORE = 'https://www.icp.org/explore';
const ICP_RESEARCH = 'https://www.icp.org/facilities/museum/conducting-research-collections';
const ICP_SCHOOL = 'https://www.icp.org/school';
const ICP_INFINITY = 'https://www.icp.org/infinity-awards';
const ICP_INFINITY_PAST = 'https://www.icp.org/infinity-awards/past-recipients';
const ICP_50 = 'https://www.icp.org/exhibitions/selections-from-icp-at-50-from-the-collection-1845%E2%80%932019';

// Turn the old single exhibition card into an institution hub.
const icpEntry = directoryEntries.find(entry => entry.id === 'icp');
if (icpEntry) {
  icpEntry.name = 'International Center of Photography · ICP';
  icpEntry.summary = '1974 年由 Cornell Capa 创立的纽约摄影机构。本站把 ICP 拆成 Museum / Exhibitions、Collection & Archives、School、Research、Infinity Awards 与公共项目，避免把“在 ICP 出现过”全部混成一种履历。';
  icpEntry.tokens = ['International Center of Photography', 'ICP', 'ICP Museum', 'ICP Collection', 'ICP School', 'Infinity Awards'];
  icpEntry.track = '美国 · 纽约 · Museum + School + Collection';
  icpEntry.focus = '先判断一个名字与 ICP 的关系属于展览、馆藏 / 档案、Infinity Awards、教育还是研究资源。ICP 从“concerned photography”出发，但今天已经覆盖新闻摄影、纪实、艺术摄影、时尚、出版、数字图像与视觉文化；不同制度节点的含金量和意义并不相同。';
  delete icpEntry.kind;
  icpEntry.sections = [
    { name: 'About / Timeline · 1974–', summary: 'Cornell Capa 于 1974 年创立 ICP；官方时间线记录机构、馆藏、学校与重要展览的发展。', url: ICP_ABOUT },
    { name: 'Past Exhibitions · 700+', summary: '官方展览档案：自 1974 年以来超过 700 场展览，可按艺术家和项目继续核实。', url: ICP_EXHIBITIONS },
    { name: 'Collections · 200,000+', summary: 'ICP 的摄影收藏、档案与相关材料超过 20 万件；可按摄影家浏览。', url: ICP_EXPLORE },
    { name: 'Research / Print Study Room', summary: '馆藏研究入口；Robert Capa、Gerda Taro、Cornell Capa、Weegee、Chim、Susan Meiselas、W. Eugene Smith 等档案可沿此核实。', url: ICP_RESEARCH },
    { name: 'The School at ICP', summary: 'ICP School 的课程与全日制项目入口；Museum 与 School 在 2020 年重新合并到 Lower East Side 的同一地点。', url: ICP_SCHOOL },
    { name: 'Infinity Awards · 1985–', summary: '自 1985 年起的年度奖项，覆盖当代摄影、新闻摄影、艺术、时尚、出版与新媒体。', url: ICP_INFINITY },
    { name: 'Infinity Awards · Past Recipients', summary: '历届获奖者官方档案；站内对 2023–2026 建立精确类别关系，并为重要历史获奖者建立索引。', url: ICP_INFINITY_PAST },
    { name: 'ICP at 50 · Collection 1845–2019', summary: '50 周年馆藏展，适合观察 ICP 如何从 concerned photography 扩展到更广泛的摄影史与视觉文化。', url: ICP_50 }
  ];
}

const infinityEntry = directoryEntries.find(entry => entry.id === 'infinity');
if (infinityEntry) {
  infinityEntry.summary = 'ICP 自 1985 年举办的年度摄影奖项，覆盖 Lifetime Achievement、当代摄影 / 新媒体、新闻摄影 / 纪实、商业 / 编辑摄影、写作研究、出版等不同类别；类别与年份必须分开记录。';
  infinityEntry.focus = '不要把 Infinity Awards 当成一个单一“摄影奖”。先看获奖年份和具体类别，再比较获奖者是因长期职业成就、艺术实践、新闻摄影、商业编辑还是理论 / 出版获得认可。';
  infinityEntry.sections = [
    { name: 'Infinity Awards', summary: '当前奖项与年度活动总入口。', url: ICP_INFINITY },
    { name: 'Past Recipients', summary: '历届获奖者官方档案。', url: ICP_INFINITY_PAST }
  ];
}

function makeInstitutionArtist(name: string, intro: string, sourceUrl = ICP): Artist {
  return {
    id: `icp-${slug(name)}`,
    name,
    born: '—',
    base: '—',
    intro,
    methods: ['摄影 / 图像实践'],
    subjects: ['摄影史', '视觉文化'],
    outputs: ['摄影', '展览'],
    institutions: ['International Center of Photography (ICP)'],
    achievements: [],
    whyImportant: '本站先建立其与 ICP 的准确制度关系；完整个人项目、制作动作与材料脉络继续按艺术家和机构一手来源补充。',
    projects: [],
    images: [],
    sourceLabel: 'International Center of Photography',
    sourceUrl
  };
}

function ensureArtist(name: string, intro = '与 International Center of Photography 的馆藏、展览、档案或奖项存在已核实关系。', sourceUrl = ICP) {
  let artist = findArtist(name);
  if (!artist) {
    artist = makeInstitutionArtist(name, intro, sourceUrl);
    artists.push(artist);
  }
  if (!artist.institutions.includes('International Center of Photography (ICP)')) artist.institutions.push('International Center of Photography (ICP)');
  return artist;
}

function ensureArchive(artist: Artist): ArtistArchive {
  let archive = artistArchives[artist.id] as ArtistArchive | undefined;
  if (!archive) {
    archive = {
      artistId: artist.id,
      projectCoverage: 'ICP 机构节点已核实；完整项目目录待继续补充',
      imageCoverage: '图像按一手来源逐项补充',
      note: '此档案优先建立 ICP 的展览 / 馆藏 / 奖项关系，不把单个机构节点冒充完整艺术家研究。',
      projects: [], awards: [], exhibitions: [],
      sources: [{ label: 'International Center of Photography', url: ICP }]
    };
    artistArchives[artist.id] = archive;
  }
  return archive;
}

function addProjectRelation(name: string, options: {
  title: string;
  period: string;
  cluster: string;
  summary: string;
  relation: ArchiveRelation;
  sourceUrl: string;
  action?: string;
  achievement?: string;
}) {
  const artist = ensureArtist(name, `与 ICP 的“${options.title}”节点已核实。`, options.sourceUrl);
  const archive = ensureArchive(artist);
  const uniqueKey = `${options.title}|${options.period}|${options.relation.kind}|${options.relation.label}`;
  const exists = archive.projects.some(project => `${project.title}|${project.period}|${project.relations[0]?.kind ?? ''}|${project.relations[0]?.label ?? ''}` === uniqueKey);
  if (!exists) {
    archive.projects.push({
      title: options.title,
      cluster: options.cluster,
      period: options.period,
      summary: options.summary,
      actions: [options.action ?? '建立艺术家与 ICP 的机构关系'],
      sourceUrl: options.sourceUrl,
      images: [],
      relations: [options.relation]
    });
  }
  if (options.relation.kind === '展览' && !archive.exhibitions.some(item => item.includes(options.title))) archive.exhibitions.push(`ICP · ${options.title}`);
  if (options.relation.kind === '奖项') {
    const award = options.achievement ?? `${options.period} · ${options.relation.label}${options.relation.detail ? ` · ${options.relation.detail}` : ''}`;
    if (!archive.awards.includes(award)) archive.awards.push(award);
    if (!artist.achievements.includes(award)) artist.achievements.push(award);
  }
  if (options.relation.kind === '收藏') {
    const achievement = options.achievement ?? 'ICP Collection / Archives';
    if (!artist.achievements.includes(achievement)) artist.achievements.push(achievement);
  }
  if (!archive.sources.some(source => source.url === options.sourceUrl)) archive.sources.push({ label: options.title, url: options.sourceUrl });
  return artist;
}

// Collection / archive backbone, based on ICP's official Explore and research pages.
const collectionArtists = [
  'Ansel Adams', 'Diane Arbus', 'Eugène Atget', 'Margaret Bourke-White', 'Robert Capa', 'Cornell Capa',
  'Henri Cartier-Bresson', 'Chim (David Seymour)', 'Robert Frank', 'Deana Lawson', 'Sally Mann', 'Cindy Sherman',
  'Lorna Simpson', 'Gerda Taro', 'Mickalene Thomas', 'Weegee', 'Susan Meiselas', 'Martin Munkacsi', 'W. Eugene Smith'
];
for (const name of collectionArtists) {
  addProjectRelation(name, {
    title: 'ICP Collection / Archives',
    period: 'Collection',
    cluster: 'ICP · Collection & Archives',
    summary: 'ICP 官方馆藏 / 研究入口列出的摄影家或重要档案节点。收藏关系与一次性展览分开记录。',
    relation: { kind: '收藏', label: 'ICP Collection / Archives', detail: 'Official collection / research holdings' },
    sourceUrl: ICP_EXPLORE,
    action: '作品或档案进入 ICP 的收藏 / 研究体系',
    achievement: 'ICP Collection / Archives'
  });
}

// Founding history and landmark exhibitions from ICP's official timeline.
const landmarkExhibitions = [
  { name: 'Henri Cartier-Bresson', year: '1974', title: 'Apropos USSR (1954 and 1973)', detail: 'ICP inaugural exhibition program' },
  { name: 'Alexander Liberman', year: '1989', title: 'The Artist in His Studio', detail: 'ICP Midtown opening exhibition' },
  { name: 'James Nachtwey', year: '1989', title: 'Deeds of War', detail: 'ICP Midtown opening exhibition' },
  { name: 'Barbara Kasten', year: '1989', title: 'Architectural Sites', detail: 'ICP Midtown opening exhibition' },
  { name: 'Annie Leibovitz', year: '1991', title: 'Photographs 1970–1990', detail: 'Record-setting ICP exhibition' }
];
for (const item of landmarkExhibitions) {
  addProjectRelation(item.name, {
    title: item.title,
    period: item.year,
    cluster: 'ICP · Historical Exhibitions',
    summary: `${item.detail}；用于建立 ICP 展览史上的关键艺术家节点。`,
    relation: { kind: '展览', label: 'International Center of Photography (ICP)', detail: `${item.year} · ${item.title}` },
    sourceUrl: ICP_ABOUT,
    action: '在 ICP 展览项目中呈现作品'
  });
}

// Current 2026 exhibition nodes from ICP's official exhibition archive.
const current2026 = [
  { name: 'Haruka Sakaguchi', title: 'The Camps America Built', period: '2026', summary: 'ICP Incubator Space 展览，2026-03-26 至 2026-06-21。' },
  { name: 'Nuits Balnéaires', title: 'Latitudes', period: '2026', summary: '与 François-Xavier Gbré 的双人展，2026-01-29 至 2026-05-04。' },
  { name: 'François-Xavier Gbré', title: 'Latitudes', period: '2026', summary: '与 Nuits Balnéaires 的双人展，2026-01-29 至 2026-05-04。' },
  { name: 'Eugène Atget', title: 'The Making of a Reputation', period: '2026', summary: '围绕 Atget 的作品、传播与声誉建构展开，2026-01-29 至 2026-05-04。' }
];
for (const item of current2026) {
  addProjectRelation(item.name, {
    title: item.title,
    period: item.period,
    cluster: 'ICP · 2026 Exhibitions',
    summary: item.summary,
    relation: { kind: '展览', label: 'International Center of Photography (ICP)', detail: `2026 · ${item.title}` },
    sourceUrl: ICP_EXHIBITIONS,
    action: '参加 ICP 2026 展览项目'
  });
}

// Exact recent Infinity Awards categories, 2023–2026.
const infinityRecent = [
  { year: '2023', name: 'Ming Smith', category: 'Lifetime Achievement' },
  { year: '2023', name: 'Poulomi Basu', category: 'Contemporary Photography and New Media' },
  { year: '2023', name: 'Zora J Murff', category: 'Documentary Practice and Visual Journalism' },
  { year: '2023', name: 'Ariella Aïsha Azoulay', category: 'Critical Writing, Research, and Theory' },
  { year: '2024', name: 'Shirin Neshat', category: 'Lifetime Achievement' },
  { year: '2024', name: 'Lynsey Addario', category: 'Documentary Practice and Visual Journalism' },
  { year: '2024', name: 'Wendy Red Star', category: 'Contemporary Photography and New Media' },
  { year: '2024', name: 'Renell Medrano', category: 'Commercial and Editorial Photography' },
  { year: '2025', name: 'Susan Meiselas', category: 'Lifetime Achievement' },
  { year: '2025', name: 'Lebohang Kganye', category: 'Contemporary Photography and New Media' },
  { year: '2025', name: 'Jack Davison', category: 'Editorial and Commercial Photography' },
  { year: '2025', name: 'Samar Abu Elouf', category: 'Documentary Practice and Photojournalism' },
  { year: '2025', name: 'Nanna Heitmann', category: 'Documentary Practice and Photojournalism' },
  { year: '2025', name: 'Ziv Koren', category: 'Documentary Practice and Photojournalism' },
  { year: '2025', name: 'Aldo Fallai', category: 'Special Recognition Award' },
  { year: '2026', name: 'Joel Meyerowitz', category: 'Lifetime Achievement Award' },
  { year: '2026', name: 'Haruka Sakaguchi', category: 'Documentary Practice and Photojournalism' },
  { year: '2026', name: 'Collier Schorr', category: 'Commercial and Editorial Photography Award' },
  { year: '2026', name: 'Tarrah Krajnak', category: 'Photographic Art and New Media Award' }
];
for (const item of infinityRecent) {
  addProjectRelation(item.name, {
    title: `ICP Infinity Awards ${item.year}`, period: item.year, cluster: 'ICP · Infinity Awards',
    summary: `${item.name} 获得 ${item.year} ICP Infinity Awards · ${item.category}。`,
    relation: { kind: '奖项', label: 'ICP Infinity Awards', detail: `${item.year} · ${item.category}` },
    sourceUrl: item.year === '2026' ? ICP_INFINITY : ICP_INFINITY_PAST,
    action: '获得 ICP Infinity Awards 对应年度类别',
    achievement: `ICP Infinity Awards ${item.year} · ${item.category}`
  });
}

// Important historical Infinity recipients explicitly named by ICP in its 40th-anniversary award history.
const historicalInfinityRecipients = [
  'Berenice Abbott', 'Richard Avedon', 'David Bailey', 'Roy DeCarava', 'Elliott Erwitt', 'Robert Frank',
  'Adam Fuss', 'David Goldblatt', 'Paul Graham', 'David Guttenfelder', 'Mishka Henner', 'André Kertész',
  'Steven Klein', 'Annie Leibovitz', 'Helen Levitt', 'Mary Ellen Mark', 'Ryan McGinley', 'Duane Michals',
  'Daidō Moriyama', 'Zanele Muholi', 'Gordon Parks', 'Gilles Peress', 'Sebastião Salgado', 'Malick Sidibé',
  'Lorna Simpson', 'Cindy Sherman', 'Ai Weiwei', 'LaToya Ruby Frazier', 'James Nachtwey', 'Walid Raad',
  'Eugene Richards', 'Peter van Agtmael'
];
for (const name of historicalInfinityRecipients) {
  const artist = ensureArtist(name, 'ICP 官方 Infinity Awards 历史页面点名的历届重要获奖者之一。', ICP_INFINITY_PAST);
  const archive = ensureArchive(artist);
  const achievement = 'ICP Infinity Awards · historical recipient';
  if (!artist.achievements.includes(achievement)) artist.achievements.push(achievement);
  if (!archive.awards.includes(achievement)) archive.awards.push(achievement);
  if (!archive.projects.some(project => project.title === 'ICP Infinity Awards · historical recipient')) {
    archive.projects.push({
      title: 'ICP Infinity Awards · historical recipient',
      cluster: 'ICP · Infinity Awards', period: 'historical',
      summary: 'ICP 官方在 Infinity Awards 历史中明确列出的重要获奖者；具体年份与类别继续以官方 Past Recipients 档案为准。',
      actions: ['获得 ICP Infinity Awards'], sourceUrl: ICP_INFINITY_PAST, images: [],
      relations: [{ kind: '奖项', label: 'ICP Infinity Awards', detail: 'Historical recipient · see official archive for category/year' }]
    });
  }
}

// Founder / archive history markers.
for (const [name, text] of [
  ['Cornell Capa', 'ICP founder · 1974 · concerned photography'],
  ['Robert Capa', 'Robert Capa Archive · foundational ICP collection'],
  ['Gerda Taro', 'Major ICP archive / research holding'],
  ['Weegee', 'Major ICP archive / collection'],
  ['Chim (David Seymour)', 'Major ICP archive / collection']
] as const) {
  const artist = ensureArtist(name, text, ICP_ABOUT);
  const archive = ensureArchive(artist);
  if (!archive.note.includes('ICP')) archive.note += ` ${text}.`;
}
