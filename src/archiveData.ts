import { foamResearchArchives } from './foamResearchBatch';
import { foamFocusArchives } from './foamFocusBatch';
import { archiveBatch25 } from './biennaleExpansion25';
import { archiveBatch24 } from './expansionBatch24';
import { archiveBatch23, archiveExtensions23 } from './expansionBatch23';
import { archiveBatch22, archiveExtensions22 } from './expansionBatch22';
import { archiveBatch21 } from './expansionBatch21';
import { archiveBatch20 } from './expansionBatch20';
import { archiveBatch19 } from './expansionBatch19';
import { additionalArtistArchives } from './archiveBatch2';
import { circuitArtistArchives } from './archiveBatch3';
import { circuitArtistArchives2 } from './archiveBatch4';
import { archiveBatch5 } from './archiveBatch5';
import { archiveImagePatches } from './archiveImagePatches';
import { researchArchives } from './researchExpansion';
import { archiveBatch6 } from './archiveBatch6';
import { archiveBatch7 } from './archiveBatch7';
import { newResearchArchives } from './researchExpansion2';
import { archiveBatch9New } from './expansionBatch9';
import { archiveBatch9 } from './archiveBatch9';
import { archiveBatch10New } from './expansionBatch10';
import { archiveBatch10Existing } from './archiveBatch10';
import { archiveBatch11New } from './expansionBatch11';
import { archiveBatch11Existing } from './archiveBatch11';
import { archiveBatch12New } from './expansionBatch12';
import { archiveBatch13 } from './archiveBatch13';
import { archiveBatch14, archiveExtensions14 } from './expansionBatch14';
import { archiveBatch15 } from './expansionBatch15';
import { archiveBatch16, wearingExtension16 } from './expansionBatch16';
import { archiveBatch17, archiveExtensions17 } from './expansionBatch17';
import { archiveBatch18 } from './expansionBatch18';

export type ArchiveImage = {
  url: string;
  title: string;
  credit: string;
  sourceUrl: string;
  sourceLabel: string;
};

export type ArchiveRelation = {
  kind: '展览' | '出版' | '奖项' | '收藏' | '策展';
  label: string;
  detail?: string;
};

export type ArchiveProject = {
  title: string;
  cluster: string;
  period: string;
  summary: string;
  actions: string[];
  sourceUrl: string;
  images: ArchiveImage[];
  relations: ArchiveRelation[];
};

export type ArtistArchive = {
  artistId: string;
  projectCoverage: string;
  imageCoverage: string;
  note: string;
  projects: ArchiveProject[];
  awards: string[];
  exhibitions: string[];
  sources: Array<{ label: string; url: string }>;
};

const img = (url: string, title: string, credit: string, sourceUrl: string, sourceLabel: string): ArchiveImage => ({ url, title, credit, sourceUrl, sourceLabel });
const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const baseArtistArchives: Record<string, ArtistArchive> = {
  'laia-abril': {
    artistId: 'laia-abril',
    projectCoverage: '17 / 17 项目目录',
    imageCoverage: '7 / 17 项目已建立图像档案',
    note: '“完整”在这里分成两层：项目目录按艺术家官网当前 Projects 全部收录；单件作品图像只使用可追溯来源，正在逐项目补充，不把零散网络图冒充全集。',
    projects: [
      {
        title: 'Manoli. Political Prisoner. Woman.', cluster: 'New', period: 'current',
        summary: '艺术家官网当前列为新项目；进入完整档案后应继续追踪项目文本、展览与图像版本。',
        actions: ['研究政治囚禁与女性经验', '以研究材料组织视觉叙事'], sourceUrl: 'https://www.laiaabril.com/project/', images: [], relations: []
      },
      {
        title: 'Luto', cluster: 'New', period: '2025–2026',
        summary: '围绕哀悼与记忆展开的新项目，并进入 2026 年威尼斯 Conservatorio di Musica Benedetto Marcello 的展览语境。',
        actions: ['把哀悼经验转换为研究型作品', '项目与展览同步发展'], sourceUrl: 'https://www.laiaabril.com/project/', images: [],
        relations: [rel('展览', 'Lorca-Catalunya, Conservatorio di Musica, Venezia', '2026')]
      },
      {
        title: 'On Abortion', cluster: 'A History of Misogyny', period: '2016–',
        summary: 'A History of Misogyny 第一章：通过历史与当代案例、物件、摄影、音频和文字证据研究无法获得安全合法堕胎的后果。',
        actions: ['调查历史与当代案例', '拍摄物件与场所', '组织视觉 / 音频 / 文本证据', '把研究转为摄影书与空间装置'],
        sourceUrl: 'https://www.laiaabril.com/project/on-abortion/',
        images: [
          img('https://www.1854.photography/wp-content/uploads/2018/11/03_-Press-Images-l-DBPFP-2019-Laia-Abril-Illegal-Instrument-Kit-2018-.jpg', 'Illegal Instrument Kit', '© Laia Abril', 'https://www.1854.photography/2018/11/on-abortion-by-laia-abril/', 'British Journal of Photography'),
          img('https://media.internazionale.it/images/2016/09/05/128774-md.jpg', 'On Abortion — exhibition view', '© Laia Abril / exhibition view', 'https://www.internazionale.it/opinione/rosy-santella/2016/09/21/aborto-foto-laia-abril', 'Internazionale')
        ],
        relations: [
          rel('展览', 'Les Rencontres d’Arles', '2016 首展'),
          rel('出版', 'On Abortion, Dewi Lewis', '2018 · 196 pages / 114 plates'),
          rel('奖项', 'Paris Photo–Aperture PhotoBook of the Year', 'Winner 2018'),
          rel('奖项', 'Deutsche Börse Photography Prize', 'Shortlisted 2019'),
          rel('展览', 'The Photographers’ Gallery, London', '2019'),
          rel('展览', 'MoCP, Chicago', '2021'),
          rel('展览', 'Corps à Corps, Centre Pompidou', '2023–2024 · curated by Julie Jones'),
          rel('展览', 'Västerbottens Museum', '2025')
        ]
      },
      {
        title: 'On Rape', cluster: 'A History of Misogyny', period: '2020–',
        summary: '第二章把视觉叙事从受害者转向制度，研究法律、信念与权力机制如何保护、正常化或延续性暴力。',
        actions: ['历史研究', '概念肖像', '证词与制度文本', '声音 / 文字 / 视觉装置'], sourceUrl: 'https://www.laiaabril.com/project/on-rape/',
        images: [
          img('https://www.modernamuseet.se/app/uploads/stockholm/2025/08/laia-abril_ala-kachuu_on-rape_2022_-military-rape_on-rape_2022_church-rape_on-rape_2022.jpg', 'Ala Kachuu / Military Rape / Church Rape', '© Laia Abril', 'https://www.modernamuseet.se/sv/stockholm/program/vernissage-laia-abril-moter-emily-jacir-och-teresa-margolles/', 'Moderna Museet')
        ],
        relations: [
          rel('展览', 'Les Filles du Calvaire, Paris', '2020'), rel('展览', 'Foam, Amsterdam', '2021'), rel('展览', 'V&A + Photoworks, London', '2022'),
          rel('出版', 'On Rape and Institutional Failure', 'Dewi Lewis, 2022'), rel('展览', 'C/O Berlin', '2024 · curated by Sophia Greiff'),
          rel('展览', 'What remains, Moderna Museet', '2025'), rel('收藏', 'Museo Reina Sofía permanent collection', '2026 · display curated by Manuel Segade'),
          rel('展览', 'ICP, New York', 'opening Oct 15, 2026')
        ]
      },
      {
        title: 'On Mass Hysteria', cluster: 'A History of Misogyny', period: '2023–2024',
        summary: '从全球群体性心因性疾病案例出发，讨论年轻女性的身体症状、社会压力、医学偏见、殖民解释和“身体作为抗议语言”。',
        actions: ['跨国案例研究', '医学与社会史对读', '视觉与文本装置', '摄影书'], sourceUrl: 'https://www.laiaabril.com/project/on-mass-hysteria/',
        images: [img('https://no-niin.com/images/w0ddcm2ls6snwpxudpm9-800w.jpeg', 'On Mass Hysteria — installation view', '© Laia Abril / exhibition view', 'https://no-niin.com/issue-24/our-bodies-protest-on-our-behalf-a-review-of-laia-abril-on-mass-hysteria/index.html', 'NO NIIN')],
        relations: [rel('展览', 'Photo Elysée, Lausanne', '2023'), rel('展览', 'Finnish Museum of Photography', '2024'), rel('出版', 'On Mass Hysteria', 'Dewi Lewis + Delpire &Co, 2024'), rel('展览', 'Le Bal, Paris', '2025'), rel('展览', 'Paris Photo', '2025')]
      },
      {
        title: 'Menstruation Myths', cluster: 'A History of Misogyny', period: '2016–2023',
        summary: '围绕月经污名、禁忌与民间信念展开，并成为后来 On Mass Hysteria 研究的触发点之一。',
        actions: ['田野研究', '民间神话与制度文本收集', '出版物 / 展览'], sourceUrl: 'https://www.laiaabril.com/project/', images: [],
        relations: [rel('出版', 'Menstruation Myths portfolio box', 'Setanta Books, 2023'), rel('展览', 'RPS Gallery, Bristol', '2021'), rel('展览', 'L’Appartement, Vevey', '2023')]
      },
      {
        title: 'Feminicides', cluster: 'A History of Misogyny', period: '2018–2026',
        summary: '围绕针对女性的系统性杀害与社会结构展开的研究项目。', actions: ['研究 femicide 案例与结构', '档案 / 证据编排'], sourceUrl: 'https://www.laiaabril.com/project/', images: [],
        relations: [rel('展览', 'CCCB, Barcelona', '2025–2026')]
      },
      {
        title: 'Endometriosis', cluster: 'A History of Misogyny / health', period: '2026',
        summary: '把长期被低估、误诊的女性疼痛与医疗制度问题转成新的研究项目。', actions: ['医疗史研究', '患者经验与制度叙事并置'], sourceUrl: 'https://www.laiaabril.com/project/', images: [],
        relations: [rel('展览', 'Museo del Romanticismo / PhotoEspaña, Madrid', 'Jun–Sep 2026')]
      },
      {
        title: 'A Song I Cannot Hear', cluster: 'Inaudible', period: 'current',
        summary: '官网当前项目之一；后续图像与展览资料将按官方发布补入。', actions: ['研究不可听见 / 不可传达经验'], sourceUrl: 'https://www.laiaabril.com/project/', images: [], relations: []
      },
      {
        title: 'Harm Reduction', cluster: 'Research / commission', period: '2024–2025',
        summary: '进入 MACBA 关于 Barcelona neighborhoods 的展览语境，以 harm reduction 作为城市与社会研究入口。', actions: ['城市研究', '公共议题与图像证据组合'], sourceUrl: 'https://www.laiaabril.com/project/', images: [],
        relations: [rel('展览', 'Una ciudad desconocida bajo la niebla, MACBA', '2024–2025')]
      },
      {
        title: 'The Right to Choose', cluster: 'Research / rights', period: '—',
        summary: '官网项目目录中的独立项目，继续围绕身体自主权与制度展开。', actions: ['权利议题研究', '视觉叙事'], sourceUrl: 'https://www.laiaabril.com/project/', images: [], relations: []
      },
      {
        title: 'Suyay', cluster: 'Memory / disappearance', period: '2018–2019',
        summary: '围绕秘鲁内部冲突中的失踪者与长期等待他们的家庭，处理无法完成的哀悼与缺席。', actions: ['肖像', '失踪者档案与家庭记忆', '长期等待作为主题'], sourceUrl: 'https://www.laiaabril.com/project/',
        images: [img('https://www.icrc.org/sites/default/files/styles/desktop_full/public/document_new/image/suyay1.jpg.webp?h=2413fafe&itok=DB52VdFI', 'Suyay — families of the disappeared', '© Laia Abril', 'https://www.icrc.org/es/document/suyay-los-desaparecidos-los-que-esperan-los-afligidos', 'ICRC')],
        relations: [rel('展览', 'Centre de la Photographie, Geneva', '2018'), rel('展览', 'LUM Museum, Lima', '2019')]
      },
      {
        title: 'Femme Love', cluster: 'On Sexuality', period: 'early practice',
        summary: '艺术家早期关于女性、亲密与性经验的项目之一。', actions: ['亲密关系摄影', '女性主体性'], sourceUrl: 'https://www.laiaabril.com/project/', images: [], relations: []
      },
      {
        title: 'The Haunted Island', cluster: 'Research / place', period: '2016',
        summary: '进入地方、叙事与记忆的研究线。', actions: ['地方研究', '叙事摄影'], sourceUrl: 'https://www.laiaabril.com/project/', images: [],
        relations: [rel('展览', 'Nuevos relatos fotográficos, Arts Santa Mònica', '2016')]
      },
      {
        title: 'The Epilogue', cluster: 'On Eating Disorders', period: '2013–2014',
        summary: '通过 Robinson 家庭与 Cammy Robinson 因 bulimia 去世后的生活，研究饮食障碍的“间接受害者”。', actions: ['家庭档案', '本人摄影', '文件 / 笔记 / 证词', '摄影书 sequence'], sourceUrl: 'https://www.laiaabril.com/project/',
        images: [img('https://assets.bigcartel.com/product_images/392681475/IMG_1597.JPG?auto=format&fit=max&w=2000', 'The Epilogue — photobook', '© Laia Abril / Dewi Lewis', 'https://www.information-party.com/product/the-epilogue-laia-abril', 'Information Party')],
        relations: [rel('出版', 'The Epilogue', 'Dewi Lewis, 2014'), rel('奖项', 'Paris Photo–Aperture First PhotoBook', 'Shortlisted 2014'), rel('展览', 'Ivorypress, Madrid', 'solo / project presentation')]
      },
      {
        title: 'Thinspiration', cluster: 'On Eating Disorders', period: '2010–2012',
        summary: '研究 Pro-Ana 网络社群如何使用自拍和“thinspiration”图像维持、表演并传播饮食障碍文化。', actions: ['从网络社区获取既有图像', '重新摄影 / taxonomy', '研究自拍文化与社交网络', '自出版 fanzine'], sourceUrl: 'https://www.laiaabril.com/project/thinspiration/',
        images: [img('https://thephotobook.files.wordpress.com/2013/01/laia_abril_thinspiration_cover.jpg', 'Thinspiration fanzine', '© Laia Abril', 'https://www.laiaabril.com/book/thinspiration-fanzine/', 'Laia Abril / project book source')],
        relations: [rel('出版', 'Thinspiration Fanzine', 'self-published, 2012'), rel('展览', 'Fotografía 2.0, Círculo de Bellas Artes', '2014 · curated by Joan Fontcuberta'), rel('展览', 'The Post-Photographic Condition, Montréal', '2015')]
      },
      {
        title: 'Lobismuller', cluster: 'Research / sexuality / history', period: '2016',
        summary: '以历史人物 Manuel Blanco Romasanta 为入口，在犯罪史、性别 / 身体历史与叙事重构之间工作。', actions: ['历史档案研究', '摄影与文本并置', '摄影书作为主要形态'], sourceUrl: 'https://www.laiaabril.com/project/',
        images: [img('https://s.turbifycdn.com/aah/artbook/laia-abril-lobismuller-90.gif', 'Lobismuller — book cover', '© Laia Abril / RM Verlag', 'https://www.artbook.com/9788416282647.html', 'ARTBOOK / D.A.P.')],
        relations: [rel('出版', 'Lobismuller', 'RM Verlag, 2016'), rel('奖项', 'Festival Images Book Award', 'recipient'), rel('展览', 'Festival Images, Vevey', '2016')]
      }
    ],
    awards: [
      '2023 National Photography Award of Spain', '2022 Honorary Fellowship, Royal Photographic Society', '2022 Sphillman Photography Prize',
      '2020 Foam Paul Huf Award', '2019 Magnum Foundation Grant', '2019 Hood Medal, RPS', '2019 Deutsche Börse Photography Prize nominee',
      '2019 Prix Elysée nominee', '2018 Paris Photo–Aperture PhotoBook of the Year', '2018 ICP Infinity Awards shortlists',
      '2016 Prix de la Photo Madame Figaro–Rencontres Arles', '2016 Fotopres Grant', '2016 PHotoEspaña Revelación Award',
      '2015 Festival Images Book Award', '2014 Aperture First Book Award shortlist', '2013 Kassel Dummy Award shortlist'
    ],
    exhibitions: [
      'On Abortion — Les Rencontres d’Arles 2016', 'On Abortion — The Photographers’ Gallery 2019', 'On Rape — Foam 2021',
      'On Rape — V&A / Photoworks 2022', 'On Mass Hysteria — Photo Elysée 2023', 'On Abortion — Centre Pompidou 2023–2024',
      'On Rape — C/O Berlin 2024', 'On Mass Hysteria — Finnish Museum of Photography 2024', 'What remains — Moderna Museet 2025',
      'On Rape — Museo Reina Sofía permanent collection display 2026', 'Endometriosis — Museo del Romanticismo / PhotoEspaña 2026', 'On Rape — ICP New York 2026'
    ],
    sources: [
      { label: 'Official projects archive', url: 'https://www.laiaabril.com/project/' },
      { label: 'Official exhibitions archive', url: 'https://www.laiaabril.com/exhibition/' },
      { label: 'Official awards & grants', url: 'https://www.laiaabril.com/about/awards-grants/' },
      { label: 'Official monographs', url: 'https://www.laiaabril.com/about/monographics/' }
    ]
  }
};

const combinedArtistArchives: Record<string, ArtistArchive> = {
  ...baseArtistArchives,
  ...additionalArtistArchives,
  ...circuitArtistArchives,
  ...circuitArtistArchives2,
  ...archiveBatch5,
  ...researchArchives,
  ...archiveBatch6,
  ...archiveBatch7,
  ...newResearchArchives,
  ...archiveBatch9New,
  ...archiveBatch9,
  ...archiveBatch10New,
  ...archiveBatch10Existing,
  ...archiveBatch11New,
  ...archiveBatch11Existing,
  ...archiveBatch12New,
  ...archiveBatch13,
  ...archiveBatch14,
  ...archiveBatch15,
  ...archiveBatch16,
  ...archiveBatch17,
  ...archiveBatch18,
  ...archiveBatch19,
  ...archiveBatch20,
  ...archiveBatch21,
  ...archiveBatch22,
  ...archiveBatch23,
  ...archiveBatch24,
  ...archiveBatch25,
  ...foamFocusArchives,
  ...foamResearchArchives,
};

export const artistArchives: Record<string, ArtistArchive> = Object.fromEntries(
  Object.entries(combinedArtistArchives).map(([artistId, archive]) => {
    const patches = archiveImagePatches[artistId] ?? {};
    const additions = [...(archiveExtensions23[artistId] ?? []), ...(archiveExtensions22[artistId] ?? []), ...(archiveExtensions17[artistId] ?? []), ...(archiveExtensions14[artistId] ?? []), ...(artistId === 'gillian-wearing' ? [wearingExtension16] : [])].filter(item => !archive.projects.some(project => project.title === item.title));
    const projects = [...archive.projects, ...additions].map(project => ({
      ...project,
      images: [...project.images, ...(patches[project.title] ?? [])],
    }));
    const imagedProjects = projects.filter(project => project.images.length > 0).length;
    return [
      artistId,
      {
        ...archive,
        projects,
        projectCoverage: additions.length ? `${projects.length} 个精选项目已索引` : archive.projectCoverage,
        note: additions.length ? '各项目整理制作动作、材料、年份与逐项来源。当前为精选项目档案，尚非作品全集。' : archive.note,
        sources: [...archive.sources, ...additions.map(project => ({ label: project.title, url: project.sourceUrl }))].filter((item, index, items) => items.findIndex(other => other.url === item.url) === index),
        exhibitions: [...new Set([...archive.exhibitions, ...additions.flatMap(project => project.relations.filter(relation => relation.kind === '展览').map(relation => `${relation.label} — ${relation.detail ?? project.period}`))])],
        imageCoverage: `${imagedProjects} / ${projects.length} 项目已建立图像档案`,
      },
    ];
  })
) as Record<string, ArtistArchive>;
