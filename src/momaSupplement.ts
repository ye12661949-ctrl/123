import { artists, type Artist } from './data';
import { artistArchives, type ArtistArchive } from './archiveData';

const normalizeName = (value: string) => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[’']/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const slug = (value: string) => normalizeName(value).replace(/\s+/g, '-');

const editions = [
  {
    year: '1985',
    title: 'New Photography 1985',
    source: 'https://www.moma.org/calendar/exhibitions/1599',
    names: ['Zeke Berman', 'Antonio Mendoza', 'Judith Joy Ross', 'Michael Spano']
  },
  {
    year: '2012',
    title: 'New Photography 2012',
    source: 'https://www.moma.org/calendar/exhibitions/1259',
    names: ['Michele Abeles', 'Birdhead', 'Anne Collier', 'Zoe Crosher', 'Shirana Shahbazi']
  },
  {
    year: '2018',
    title: 'Being: New Photography 2018',
    source: 'https://www.moma.org/calendar/exhibitions/3886',
    names: ['Sofia Borges', 'Matthew Connors', 'Sam Contis', 'Shilpa Gupta', 'Adelita Husni-Bey', 'Yazan Khalili', 'Harold Mendez', 'Aïda Muluneh', 'Hương Ngô', 'Hồng-Ân Trương', 'B. Ingrid Olson', 'Joanna Piotrowska', 'Em Rooney', 'Paul Mpagi Sepuya', 'Andrzej Steinbach', 'Stephanie Syjuco', 'Carmen Winant']
  },
  {
    year: '2023',
    title: 'New Photography 2023',
    source: 'https://www.moma.org/calendar/exhibitions/5525',
    names: ['Kelani Abass', 'Akinbode Akinbiyi', 'Yagazie Emezi', 'Amanda Iheme', 'Abraham Oghobase', 'Karl Ohiri', 'Logo Oluwamuyiwa']
  },
  {
    year: '2025',
    title: 'New Photography 2025: Lines of Belonging',
    source: 'https://www.moma.org/calendar/exhibitions/5757',
    names: ['Sandra Blow', 'Tania Franco Klein', 'Lake Verea', 'Gabrielle Goliath', 'Lebohang Kganye', 'Sabelo Mlangeni', 'Lindokuhle Sobekwa', 'Nepal Picture Library', 'Sheelasha Rajbhandari', 'Prasiit Sthapit', 'L. Kasimu Harris', 'Renee Royale', 'Gabrielle Garcia Steib']
  }
] as const;

const findArtist = (name: string) => artists.find(artist => normalizeName(artist.name) === normalizeName(name));

function newArtist(name: string, year: string, title: string, source: string): Artist {
  return {
    id: `moma-${slug(name)}`,
    name,
    born: '—',
    base: '—',
    intro: `${title} 参展艺术家。本站先建立其与 MoMA New Photography 的准确届次关系，个人完整项目档案继续按一手来源补充。`,
    methods: ['摄影 / 图像实践'],
    subjects: ['当代摄影', '图像文化'],
    outputs: ['摄影', '展览'],
    institutions: ['MoMA'],
    achievements: [`MoMA · ${title}`],
    whyImportant: `这里的收录目的首先是补齐 MoMA New Photography ${year} 的机构关系，不用一段泛化文字替代艺术家的完整实践。进入个人研究时应继续追踪具体项目、材料、制作动作与其他机构节点。`,
    projects: [{
      year,
      title,
      type: 'MoMA · New Photography',
      facts: [`参加 MoMA 的 ${title}。`, '该记录用于建立准确的届次—艺术家关系。'],
      reading: '先把这一节点当作机构履历，再回到艺术家的具体作品与制作方法，不把一次参展等同于完整实践。'
    }],
    images: [],
    sourceLabel: 'MoMA',
    sourceUrl: source
  };
}

function ensureArchive(artist: Artist, year: string, title: string, source: string) {
  const relationLabel = 'MoMA · New Photography';
  let archive = artistArchives[artist.id] as ArtistArchive | undefined;
  if (!archive) {
    archive = {
      artistId: artist.id,
      projectCoverage: 'MoMA 节点已核实；完整项目目录待补',
      imageCoverage: '使用 MoMA 官方展览页作为当前来源',
      note: '这一档案先补机构关系，不把简略 roster 记录冒充完整艺术家研究。',
      projects: [], awards: [], exhibitions: [],
      sources: [{ label: title, url: source }]
    };
    artistArchives[artist.id] = archive;
  }
  if (!archive.projects.some(project => project.relations.some(relation => relation.label.includes('New Photography') && relation.detail?.includes(year)))) {
    archive.projects.push({
      title,
      cluster: 'MoMA / New Photography',
      period: year,
      summary: `MoMA New Photography ${year} 的参展节点；用于把艺术家放回该系列的具体历史届次。`,
      actions: ['参加 MoMA New Photography', '由本站建立届次、机构与艺术家关系'],
      sourceUrl: source,
      images: [],
      relations: [{ kind: '展览', label: relationLabel, detail: `${year} · ${title}` }]
    });
  }
  if (!archive.exhibitions.some(item => item.includes(title))) archive.exhibitions.push(`MoMA · ${title}`);
  if (!archive.sources.some(item => item.url === source)) archive.sources.push({ label: title, url: source });
}

for (const edition of editions) {
  for (const name of edition.names) {
    let artist = findArtist(name);
    if (!artist) {
      artist = newArtist(name, edition.year, edition.title, edition.source);
      artists.push(artist);
    } else {
      if (!artist.institutions.includes('MoMA')) artist.institutions.push('MoMA');
      const achievement = `MoMA · ${edition.title}`;
      if (!artist.achievements.includes(achievement)) artist.achievements.push(achievement);
      if (!artist.projects.some(project => project.title === edition.title)) {
        artist.projects.push({
          year: edition.year,
          title: edition.title,
          type: 'MoMA · New Photography',
          facts: [`参加 MoMA 的 ${edition.title}。`],
          reading: '作为机构节点记录；具体实践仍以艺术家项目档案为主。'
        });
      }
    }
    ensureArchive(artist, edition.year, edition.title, edition.source);
  }
}

const collectionPathway = {
  source: 'https://www.moma.org/interactives/moma_through_time/1980/new-photography/',
  names: ['Thomas Demand', 'Rineke Dijkstra', 'Philip-Lorca diCorcia', 'Paul Graham', 'Boris Mikhailov', 'Vik Muniz']
};

for (const name of collectionPathway.names) {
  let artist = findArtist(name);
  if (!artist) {
    artist = {
      id: `moma-${slug(name)}`,
      name, born: '—', base: '—',
      intro: 'MoMA 在回顾 New Photography 历史时明确列出的代表性艺术家之一；其作品在 New Photography 参展后进入 MoMA 馆藏。',
      methods: ['摄影 / 图像实践'], subjects: ['当代摄影'], outputs: ['摄影', '展览'],
      institutions: ['MoMA'],
      achievements: ['MoMA · New Photography → Collection pathway'],
      whyImportant: '这个节点用于研究 New Photography 如何不仅提供展览可见度，还实际连接到博物馆收藏机制。完整个人实践需要继续从具体项目展开。',
      projects: [{ year: 'historical', title: 'MoMA · New Photography → Collection', type: '机构路径', facts: ['MoMA 将其列为经 New Photography 展示并进入馆藏的代表艺术家之一。'], reading: '重点看展览系列如何转化为收藏与长期艺术史位置。' }],
      images: [], sourceLabel: 'MoMA Through Time', sourceUrl: collectionPathway.source
    };
    artists.push(artist);
  } else {
    if (!artist.institutions.includes('MoMA')) artist.institutions.push('MoMA');
    if (!artist.achievements.some(item => item.includes('New Photography → Collection'))) artist.achievements.push('MoMA · New Photography → Collection pathway');
  }
  let archive = artistArchives[artist.id] as ArtistArchive | undefined;
  if (!archive) {
    archive = {
      artistId: artist.id,
      projectCoverage: 'MoMA 收藏路径已核实；完整项目目录待补',
      imageCoverage: '待按项目补图',
      note: '先记录 MoMA New Photography 与馆藏之间的制度关系。',
      projects: [], awards: [], exhibitions: [],
      sources: [{ label: 'MoMA Through Time · New Photography', url: collectionPathway.source }]
    };
    artistArchives[artist.id] = archive;
  }
  if (!archive.projects.some(project => project.relations.some(relation => relation.kind === '收藏' && relation.label.includes('MoMA')))) {
    archive.projects.push({
      title: 'New Photography → MoMA Collection', cluster: 'Institutional pathway', period: 'historical',
      summary: 'MoMA 在 New Photography 系列历史中点名的“参展后进入馆藏”代表案例。',
      actions: ['参加 New Photography', '作品随后进入 MoMA Collection'],
      sourceUrl: collectionPathway.source, images: [],
      relations: [{ kind: '收藏', label: 'MoMA Collection · via New Photography', detail: 'MoMA historical overview' }]
    });
  }
}
