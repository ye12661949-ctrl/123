import { artists, type Artist } from './data';
import { artistArchives, type ArtistArchive } from './archiveData';
import { directoryEntries } from './directoryExpansion18';
import { institutions, curatorNetworks } from './ecosystemData';

const normalizeName = (value: string) => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[’']/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const slug = (value: string) => normalizeName(value).replace(/\s+/g, '-');
const TPG = 'The Photographers’ Gallery';
const prizeSource = 'https://thephotographersgallery.org.uk/deutsche-borse-photography-foundation-prize';
const prizeArchive = 'https://thephotographersgallery.org.uk/past-deutsche-borse-photography-foundation-prize-exhibitions';
const historySource = 'https://thephotographersgallery.org.uk/about-us/our-history';
const fiftySource = 'https://thephotographersgallery.org.uk/about-us/50-exhibitions-50-years';
const tnt23Source = 'https://thephotographersgallery.org.uk/tpg-new-talent-23';
const tntOpenSource = 'https://thephotographersgallery.org.uk/whats-on/open-call-tpg-new-talent-23';

const tpgEntry = directoryEntries.find(entry => entry.id === 'tpg-shows');
if (tpgEntry) {
  tpgEntry.summary = '英国第一家专门面向摄影的公共画廊，1971 年成立。本站把 TPG 拆成主展览档案、Deutsche Börse Photography Foundation Prize、TPG New Talent、Soho Photography Quarter 与数字 / 公共项目，不把所有“出现于 TPG”混成同一种履历。';
  tpgEntry.focus = '研究 TPG 时先区分主馆个展 / 群展、Deutsche Börse Prize、TPG New Talent 与公共空间项目。对艺术家职业路径而言，这些节点代表完全不同的制度强度：历史性主展览 ≠ 新人 open call ≠ 年度国际大奖。';
  tpgEntry.sections = [
    { name: 'Our history', summary: '机构历史与官方点名的重要摄影家；用于理解 TPG 在英国摄影制度中的位置。', url: historySource },
    { name: '50 Exhibitions for 50 Years', summary: 'TPG 50 周年选出的 50 个关键展览，可按年代追踪 1970s–2010s 的策展转向。', url: fiftySource },
    { name: 'Deutsche Börse Photography Foundation Prize', summary: '1996 年由 TPG 创立、1997 年开始颁发的年度国际摄影奖。', url: prizeSource },
    { name: 'TPG New Talent', summary: '面向英国居住的新兴摄影 / 图像艺术家的 open call、导师制与展示计划。', url: tntOpenSource },
    { name: 'Soho Photography Quarter', summary: '2022 年启动的免费户外摄影公共空间，把策展从主馆延伸到 Soho 街区。', url: 'https://thephotographersgallery.org.uk/soho-photography-quarter' },
    { name: 'Digital Archive', summary: '官方数字档案；用于核实具体艺术家、展览标题与年份。', url: 'https://thephotographersgallery.org.uk/archive' }
  ];
}

const deutscheEntry = directoryEntries.find(entry => entry.id === 'deutsche');
if (deutscheEntry) {
  deutscheEntry.summary = 'TPG 于 1996 年创立的国际年度摄影奖，后与 Deutsche Börse Photography Foundation 长期合作；本站已补 1997–2026 历届冠军，并为 2005–2026 建立 shortlist / winner 关系。';
  deutscheEntry.focus = '不要只看赢家。优先比较同届四位 shortlisted artists 的媒介方法、入围依据（展览 / 摄影书）与之后 3–5 年机构路径，能更清楚看到当代摄影真正被奖励的方向。';
  deutscheEntry.sections = [
    { name: 'Prize overview + winners 1997–2026', summary: '官方奖项总页与完整历届冠军。', url: prizeSource },
    { name: 'Past Prize Exhibitions', summary: '2005–2025 可直接核实冠军与其他 shortlisted artists。', url: prizeArchive },
    { name: '2026 edition', summary: 'Jane Evelyn Atwood、Weronika Gęsicka、Amak Mahmoodian、Rene Matić；Rene Matić 获奖。', url: 'https://thephotographersgallery.org.uk/whats-on/deutsche-borse-photography-foundation-prize-2026' }
  ];
}

const extraEntries = [
  {
    id: 'tpg-new-talent', domain: 'photo', category: 'exhibitions', name: 'TPG New Talent',
    summary: 'The Photographers’ Gallery 的新兴艺术家支持计划。2019、2021、2023 三届通过 open call 选择 UK-based emerging artists，结合 bursary、mentorship、线上 / 户外展示。',
    url: tntOpenSource, tokens: ['TPG New Talent', 'TNT', 'The Photographers Gallery New Talent'], kind: '展览', track: '英国 · 新人 / Open Call',
    focus: '这比大型机构个展更接近现实职业入口。研究时重点看入选艺术家的作品成熟度、项目文本、媒介扩展与“尚未拥有重要个展 / 商业画廊代理”这一 eligibility。'
  },
  {
    id: 'tpg-archive', domain: 'photo', category: 'exhibitions', name: 'The Photographers’ Gallery · Archive',
    summary: 'TPG 自 1971 年以来的展览历史与数字档案入口；50 周年项目选出 50 个关键展览，可按年代研究摄影观念与展示方式的变化。',
    url: fiftySource, tokens: ['The Photographers Gallery', 'TPG', '50 Exhibitions for 50 Years'], kind: '展览', track: '伦敦 · 历史档案',
    focus: '适合按年代做“机构如何改变摄影定义”的研究：纪实、女性摄影、时尚 / 身份、观念摄影、数字图像、摄影书与跨媒介如何依次进入主展览体系。'
  },
  {
    id: 'soho-photography-quarter', domain: 'photo', category: 'exhibitions', name: 'Soho Photography Quarter',
    summary: 'TPG 于 2022 年启动的户外公共摄影空间，在 Ramillies Place 周边免费、全天候展示当代摄影。',
    url: 'https://thephotographersgallery.org.uk/soho-photography-quarter', tokens: ['Soho Photography Quarter', 'SPQ', 'The Photographers Gallery'], kind: '展览', track: '伦敦 · 公共空间',
    focus: '重点观察摄影如何脱离白盒子：巨幅外墙、公共通道、街区尺度和长周期展示如何改变作品的观看方式。'
  }
] as const;
for (const entry of extraEntries) if (!directoryEntries.some(existing => existing.id === entry.id)) directoryEntries.push({ ...entry, tokens: [...entry.tokens] });

if (!institutions.some(item => item.id === 'tpg')) {
  institutions.push({
    id: 'tpg', name: TPG, type: '摄影专业公共画廊', geography: 'London',
    scale: '1971 年成立，为英国第一家专门致力于摄影的公共画廊；兼具历史展览、当代策展、摄影书 / 出版、新人支持、国际摄影奖与公共空间项目。',
    whyItMatters: 'TPG 是判断摄影何时从“摄影圈内部”进入国际策展与机构体系的关键节点。Deutsche Börse Prize 提供国际年度判断，TPG New Talent 提供新人入口，而主馆展览与 50 年档案则构成摄影史与当代摄影之间的制度连续性。',
    signals: ['主馆个展 / 群展代表机构策展认可。', 'Deutsche Börse Prize 是高强度国际摄影奖节点。', 'TPG New Talent 是 emerging artist 的现实开放入口。', 'Soho Photography Quarter 把摄影展示扩展到公共空间。'],
    people: ['Shoair Mavlian — Director', 'Karen McQuaid — Senior Curator'],
    exhibitions: ['Deutsche Börse Photography Foundation Prize', 'TPG New Talent', '50 Exhibitions for 50 Years', 'Soho Photography Quarter'],
    connectedAwards: ['Deutsche Börse Photography Foundation Prize'],
    sources: [{ label: 'TPG history', url: historySource }, { label: 'Deutsche Börse Prize', url: prizeSource }, { label: '50 Exhibitions for 50 Years', url: fiftySource }]
  });
}

const existingShoair = curatorNetworks['shoair-mavlian'];
if (existingShoair) {
  const extra = [
    { year: '2025', title: 'Deutsche Börse Photography Foundation Prize 2025', artists: ['Lindokuhle Sobekwa', 'Cristina De Middel', 'Rahim Fortune', 'Tarrah Krajnak'] },
    { year: '2026', title: 'Deutsche Börse Photography Foundation Prize 2026', artists: ['Rene Matić', 'Jane Evelyn Atwood', 'Weronika Gęsicka', 'Amak Mahmoodian'] }
  ];
  for (const item of extra) if (!existingShoair.exhibitions.some(e => e.title === item.title)) existingShoair.exhibitions.push(item);
}

const winners: Array<[string, string]> = [
  ['1997','Richard Billingham'],['1998','Andreas Gursky'],['1999','Rineke Dijkstra'],['2000','Anna Gaskell'],['2001','Boris Mikhailov'],['2002','Shirana Shahbazi'],['2003','Juergen Teller'],['2004','Joel Sternfeld'],['2005','Luc Delahaye'],['2006','Robert Adams'],['2007','Walid Raad'],['2008','Esko Männikkö'],['2009','Paul Graham'],['2010','Sophie Ristelhueber'],['2011','Jim Goldberg'],['2012','John Stezaker'],['2013','Adam Broomberg & Oliver Chanarin'],['2014','Richard Mosse'],['2015','Mikhael Subotzky & Patrick Waterhouse'],['2016','Trevor Paglen'],['2017','Dana Lixenberg'],['2018','Luke Willis Thompson'],['2019','Susan Meiselas'],['2020','Mohamed Bourouissa'],['2021','Cao Fei'],['2022','Deana Lawson'],['2023','Samuel Fosso'],['2024','Lebohang Kganye'],['2025','Lindokuhle Sobekwa'],['2026','Rene Matić']
];

const shortlists: Record<string, string[]> = {
  '2005':['Luc Delahaye','JH Engström','Jörg Sasse','Stephen Shore'],
  '2006':['Robert Adams','Yto Barrada','Phil Collins','Alec Soth'],
  '2007':['Walid Raad','Philippe Chancel','Anders Petersen','Fiona Tan'],
  '2008':['Esko Männikkö','John Davies','Jacob Holdt','Fazal Sheikh'],
  '2009':['Paul Graham','Emily Jacir','Tod Papageorge','Taryn Simon'],
  '2010':['Sophie Ristelhueber','Anna Fox','Zoe Leonard','Donovan Wylie'],
  '2011':['Jim Goldberg','Thomas Demand','Roe Ethridge','Elad Lassry'],
  '2012':['John Stezaker','Pieter Hugo','Rinko Kawauchi','Christopher Williams'],
  '2013':['Adam Broomberg & Oliver Chanarin','Mishka Henner','Chris Killip','Cristina De Middel'],
  '2014':['Richard Mosse','Alberto García-Alix','Jochen Lempert','Lorna Simpson'],
  '2015':['Mikhael Subotzky & Patrick Waterhouse','Nikolai Bakharev','Zanele Muholi','Viviane Sassen'],
  '2016':['Trevor Paglen','Laura El-Tantawy','Erik Kessels','Tobias Zielony'],
  '2017':['Dana Lixenberg','Sophie Calle','Awoiska van der Molen','Taiyo Onorato & Nico Krebs'],
  '2018':['Luke Willis Thompson','Mathieu Asselin','Rafał Milach','Batia Suter'],
  '2019':['Susan Meiselas','Mark Ruwedel','Arwed Messmer','Laia Abril'],
  '2020':['Mohamed Bourouissa','Anton Kusters','Mark Neville','Clare Strand'],
  '2021':['Cao Fei','Poulomi Basu','Alejandro Cartagena','Zineb Sedira'],
  '2022':['Deana Lawson','Anastasia Samoylova','Jo Ractliffe','Gilles Peress'],
  '2023':['Samuel Fosso','Bieke Depoorter','Arthur Jafa','Frida Orupabo'],
  '2024':['Lebohang Kganye','VALIE EXPORT','Gauri Gill & Rajesh Vangad','Hrair Sarkissian'],
  '2025':['Lindokuhle Sobekwa','Cristina De Middel','Rahim Fortune','Tarrah Krajnak'],
  '2026':['Rene Matić','Jane Evelyn Atwood','Weronika Gęsicka','Amak Mahmoodian']
};

function findArtist(name: string) { return artists.find(artist => normalizeName(artist.name) === normalizeName(name)); }
function createArtist(name: string, context: string, year: string, source: string): Artist {
  return {
    id: `tpg-${slug(name)}`, name, born: '—', base: '—',
    intro: `${TPG} 的 ${context} 艺术家。本站先建立准确机构关系，个人完整项目档案继续从艺术家与一手机构来源补充。`,
    methods: ['摄影 / 图像实践'], subjects: ['当代摄影'], outputs: ['摄影', '展览'], institutions: [TPG],
    achievements: [`${TPG} · ${context}`],
    whyImportant: '先把该艺术家放回 TPG 的具体制度节点，再研究其具体作品、材料、制作动作与后续机构路径。',
    projects: [{ year, title: context, type: TPG, facts: [`与 ${TPG} 的 ${context} 发生明确关系。`], reading: '该条是机构履历节点，不替代艺术家完整实践研究。' }],
    images: [], sourceLabel: TPG, sourceUrl: source
  };
}
function ensureArchive(artist: Artist, title: string, year: string, source: string, relationKind: '展览'|'奖项' = '展览') {
  let archive = artistArchives[artist.id] as ArtistArchive | undefined;
  if (!archive) {
    archive = { artistId: artist.id, projectCoverage: 'TPG 机构节点已核实；完整项目目录待补', imageCoverage: '待按项目补图', note: '先建立 TPG 关系，不把 roster 条目冒充完整艺术家档案。', projects: [], awards: [], exhibitions: [], sources: [] };
    artistArchives[artist.id] = archive;
  }
  if (!archive.projects.some(project => project.title === title && project.period === year)) {
    archive.projects.push({ title, cluster: TPG, period: year, summary: `${TPG} 的 ${title} 节点。`, actions: ['进入 TPG 项目 / 展览体系', '由本站建立具体年份与项目关系'], sourceUrl: source, images: [], relations: [{ kind: relationKind, label: title, detail: year }] });
  }
  if (relationKind === '奖项') {
    if (!archive.awards.some(item => item.includes(title) && item.includes(year))) archive.awards.push(`${title} · ${year}`);
  } else if (!archive.exhibitions.some(item => item.includes(title) && item.includes(year))) archive.exhibitions.push(`${TPG} · ${title} · ${year}`);
  if (!archive.sources.some(item => item.url === source)) archive.sources.push({ label: title, url: source });
}
function ensureInstitution(artist: Artist) { if (!artist.institutions.includes(TPG)) artist.institutions.push(TPG); }

for (const [year, winner] of winners) {
  let artist = findArtist(winner);
  if (!artist) { artist = createArtist(winner, `Deutsche Börse Photography Foundation Prize ${year} · Winner`, year, prizeSource); artists.push(artist); }
  ensureInstitution(artist);
  const achievement = `Deutsche Börse Photography Foundation Prize ${year} · Winner`;
  if (!artist.achievements.includes(achievement)) artist.achievements.push(achievement);
  ensureArchive(artist, 'Deutsche Börse Photography Foundation Prize · Winner', year, prizeSource, '奖项');
}

for (const [year, names] of Object.entries(shortlists)) {
  const winner = winners.find(item => item[0] === year)?.[1];
  for (const name of names) {
    let artist = findArtist(name);
    if (!artist) { artist = createArtist(name, `Deutsche Börse Photography Foundation Prize ${year} · Shortlist`, year, year === '2026' ? 'https://thephotographersgallery.org.uk/whats-on/deutsche-borse-photography-foundation-prize-2026' : prizeArchive); artists.push(artist); }
    ensureInstitution(artist);
    const status = normalizeName(name) === normalizeName(winner ?? '') ? 'Winner' : 'Shortlisted';
    const achievement = `Deutsche Börse Photography Foundation Prize ${year} · ${status}`;
    if (!artist.achievements.includes(achievement)) artist.achievements.push(achievement);
    ensureArchive(artist, `Deutsche Börse Photography Foundation Prize · ${status}`, year, year === '2026' ? 'https://thephotographersgallery.org.uk/whats-on/deutsche-borse-photography-foundation-prize-2026' : prizeArchive, '奖项');
  }
}

const tntEditions: Record<string, string[]> = {
  '2019':['Rhiannon Adam','Chiara Avagliano','Alberto Feijóo','Adama Jalloh','Seungwon Jung','Alice Myers','Giovanna Petrocchi','Miguel Proença'],
  '2021':['Heather Agyepong','Jessica Bernard','Ollie Gapper','Mariam Sholaja','RAKE Collective','Wing Ka Ho Jimmi'],
  '2023':['Igor Chekachkov','Weiyi (Margaret) Liang','Cynthia MaiWa Sitei','Cian Oba-Smith','Robbie Spotswood','Ruudu Ulas']
};
for (const [year, names] of Object.entries(tntEditions)) {
  const source = year === '2023' ? tnt23Source : year === '2019' ? 'https://thephotographersgallery.org.uk/whats-on/tpg-new-talent' : tntOpenSource;
  for (const name of names) {
    let artist = findArtist(name);
    if (!artist) { artist = createArtist(name, `TPG New Talent ${year}`, year, source); artists.push(artist); }
    ensureInstitution(artist);
    const achievement = `TPG New Talent ${year} · Selected artist`;
    if (!artist.achievements.includes(achievement)) artist.achievements.push(achievement);
    ensureArchive(artist, 'TPG New Talent · Selected artist', year, source, '展览');
  }
}

const historicalNames = ['Juergen Teller','Sally Mann','Sebastião Salgado','Weegee','Cindy Sherman','Roman Vishniac','Gordon Parks','VALIE EXPORT','Andreas Gursky','Francesca Woodman','Helen Levitt','Taryn Simon','Colin Jones','Shirley Baker','Martin Parr','Tish Murtha','Zineb Sedira','Corinne Day'];
for (const name of historicalNames) {
  let artist = findArtist(name);
  if (!artist) { artist = createArtist(name, 'TPG historical exhibition programme', 'historical', historySource); artists.push(artist); }
  ensureInstitution(artist);
  const achievement = `${TPG} · historical programme (official history)`;
  if (!artist.achievements.includes(achievement)) artist.achievements.push(achievement);
  ensureArchive(artist, 'TPG historical exhibition programme', 'historical', historySource, '展览');
}
