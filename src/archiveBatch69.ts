import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const jackHome = 'https://www.jackdavison.co.uk/';
const jackPhotographs = 'https://loosejoints.biz/products/photographs';
const jackSongFlowers = 'https://loosejoints.biz/products/song-flowers';
const jackOlPejeta = 'https://loosejoints.biz/products/ol-pejeta';
const jackEtchings = 'https://www.cobgallery.com/exhibitions/97-photographic-etchings-jack-davison/';
const jackAnt = 'https://publicknowledgebooks.com/products/jack-davison-a-is-for-ant';

const samFoam = 'https://www.foam.org/events/samuel-gratacap';
const samAperture = 'https://aperture.org/editorial/cover-conversation-samuel-gratacap/';
const samEmpire = 'https://www.filigranes.com/livre/empire/';
const samBilateral = 'https://www.fotografiaeuropea.it/archivio/mostre/samuel-gratacap/';
const samElysee = 'https://prixelysee.ch/en/nomine/samuel-gratacap';

const louiseLens = 'https://www.lensculture.com/louise-parker';
const louiseDazed = 'https://www.dazeddigital.com/photography/article/35935/1/louise-parker-reclaiming-identity-through-found-photos-of-yourself';
const louiseFoam = 'https://www.foam.org/events/foam-talent-2017-new-york';

export const archiveBatch69: Record<string, ArtistArchive> = {
  'jack-davison': {
    artistId: 'jack-davison',
    projectCoverage: '5 个核心项目 / 方法节点已建立深档案',
    imageCoverage: '0 / 5 项目已建立可靠直链图像 · 官方站与出版社项目页已接入',
    note: '本轮把 Jack Davison 从“个人风格型摄影师”拆成可研究的方法链：长期图像库如何靠书籍编辑成形、委托如何被再编辑为作者作品、动物摄影如何转向近距离触觉关系、以及 photogravure 如何把作者的手重新带回照片。为了避免不稳定外链，本轮暂不填作品图。',
    projects: [
      {
        title: 'Photographs', cluster: 'long-term archive / portraits + still life + landscape / photobook', period: '2007–2019',
        summary: 'Davison 自 2007 年持续积累的个人图像在 2019 年被编辑成首本同名摄影书。作品跨越肖像、地景和静物，但通过手、眼睛、反射、遮挡、强烈明暗与紧裁切等重复母题建立统一语言。',
        actions: [
          '把十余年不同时间、不同委托与私人场景中的图像放回同一 archive 重新观看',
          '反复使用手、眼睛、反射、遮挡和身体碎片作为跨题材视觉母题',
          '利用高反差明暗、controlled exposure 与紧裁切让日常对象失去完整解释',
          '不按拍摄年份或商业 / 私人来源分类，而通过 photobook sequencing 制造形式回声',
        ],
        sourceUrl: jackPhotographs,
        images: [],
        relations: [
          rel('出版', 'Photographs · Loose Joints', '2019 · 136 pages'),
          rel('展览', 'Foam Talent', '2016 · earlier personal-work context'),
        ],
      },
      {
        title: 'Song Flowers', cluster: 'Southwest China / Miao communities / commission → photobook', period: '2020',
        summary: '在中国西南与苗族社群相遇后形成的项目，把服饰、节庆、身体与地方环境放进同一组图像；原始合作语境来自 Marni，但最终经 Loose Joints 编辑成独立摄影书。',
        actions: [
          '进入中国西南拍摄 Miao cultural groups 的人物、服饰、节庆与地方环境',
          '把高速当代生活与延续中的传统工艺 / 仪式放在同一视觉节奏中',
          '混合黑白和彩色照片，让动作、织物纹样与地景形成编辑上的节奏关系',
          '把 fashion collaboration 中产生的素材重新组织为作者性的摄影书而非 campaign archive',
        ],
        sourceUrl: jackSongFlowers,
        images: [],
        relations: [rel('出版', 'Song Flowers · Loose Joints × Marni', '2020 · 88 pages')],
      },
      {
        title: 'Ol Pejeta', cluster: 'extinction / rhinos / caretaker relationship / close-range photography', period: '2021',
        summary: '在 Kenya 的 Ol Pejeta Conservancy 拍摄最后两只 northern white rhinos Najin 与 Fatu，以及长期照护它们的 Zacharia 和保护体系。项目避免传统“壮观野生动物摄影”，改用近距离身体、触摸与照护关系建立观看。',
        actions: [
          '围绕 Najin 与 Fatu 两只 northern white rhinos 建立持续近距离观察',
          '把 caretaker Zacharia 和其他保护者纳入主体，而不是把动物从照护关系中孤立出来',
          '主动靠近皮肤、身体轮廓、触摸与休息等低戏剧性动作',
          '把 New York Times 报道委托扩展成摄影书，并将 IVF / genetic rescue 与 extinction context 放进项目背景',
        ],
        sourceUrl: jackOlPejeta,
        images: [],
        relations: [rel('出版', 'Ol Pejeta · Loose Joints', '2021 · 44 pages')],
      },
      {
        title: 'Photographic Etchings', cluster: 'monochrome archive / polymer photogravure / hand printing', period: '2022–ongoing',
        summary: '从既有黑白档案选图，再用 polymer photogravure 转成金属版，由艺术家亲自上墨、擦版和压印。影像最终效果由手的力度继续决定，使可复制的摄影重新获得版画式的差异和物质性。',
        actions: [
          '从 monochrome archive 重新挑选适合进入版画过程的摄影图像',
          '将摄影图像转换为 polymer photogravure / photopolymer intaglio plate',
          '手工给金属版上墨，再以布擦除不同区域的墨量来控制明暗和 painterly effect',
          '保留 thumbprints、ink smudges、tone inconsistencies 等印刷差异作为作品痕迹',
          '2022 Cob Gallery 展览按尺寸与过程组织作品，并同步制作含 32 个 gatefold 的 148 页图录',
        ],
        sourceUrl: jackEtchings,
        images: [],
        relations: [
          rel('展览', 'Photographic Etchings · Cob Gallery', 'London, 2022'),
          rel('出版', 'Photographic Etchings · Cob Gallery / Jack Davison', '2022'),
        ],
      },
      {
        title: 'A is for Ant', cluster: 'alphabet rule / animal costume / book collaboration', period: '2024–2025',
        summary: '把儿童 alphabet book 的 A–Z 直接设为项目规则，与 Shona Heath 的 costume / set imagination、Matt Willey 的平面设计共同构造一套动物图像。项目证明极简分类规则也可以支撑完整世界建构。',
        actions: [
          '用 A–Z 作为不可变的 26 个单元，为每个字母建立一个 animal image',
          '与 Shona Heath 合作角色服装与视觉造型，使“动物”由人物、服装与布景共同完成',
          '与 Matt Willey 合作书籍结构，把摄影与排版视作同一项目的一部分',
          '制作大开本版本与可供儿童折叠、涂画的 newspaper edition，使同一内容获得两种使用方式',
        ],
        sourceUrl: jackAnt,
        images: [],
        relations: [rel('出版', 'A is for Ant · Helions', '2024 / 2025 circulation')],
      },
    ],
    awards: ['Foam Talent 2016'],
    exhibitions: [
      'Foam Talent — Amsterdam / New York / London, 2016–2017',
      'Photographic Etchings — Cob Gallery, London, 2022',
      'Jack Davison at Photo London — Cob Gallery, 2023',
    ],
    sources: [
      { label: 'Jack Davison · official works', url: jackHome },
      { label: 'Loose Joints · Photographs', url: jackPhotographs },
      { label: 'Loose Joints · Song Flowers', url: jackSongFlowers },
      { label: 'Loose Joints · Ol Pejeta', url: jackOlPejeta },
      { label: 'Cob Gallery · Photographic Etchings', url: jackEtchings },
      { label: 'A is for Ant', url: jackAnt },
    ],
  },

  'samuel-gratacap': {
    artistId: 'samuel-gratacap',
    projectCoverage: '4 个长期项目 / 调查阶段已建立深档案',
    imageCoverage: '0 / 4 项目已建立可靠直链图像 · Foam / Aperture / 机构来源已接入',
    note: 'Samuel Gratacap 的作品最容易被简化成“移民纪实”。本轮改为记录他真正的方法：进入制度现场、长期驻留、先观察后拍摄、收集证词与文件、把边境作为地景而非抽象线条，以及把民间援助者纳入迁徙叙事。',
    projects: [
      {
        title: 'La Chance / Castaways', cluster: 'detention + Lampedusa + found documents / Mediterranean route', period: '2007–2016',
        summary: '从 Marseille 的行政拘留中心出发，逐步扩展到 Lampedusa、Libya 与其他 Mediterranean transit spaces。项目不以一次危机为边界，而把 detention、shipwreck、tourism、anonymous documents 和 testimonies 连接成一条迁徙路线。',
        actions: [
          '2007 年进入 Marseille detention center，先理解 undocumented migrants 面对的司法与拘留条件',
          '2010 年在 Lampedusa 同时拍摄旅游岛景观与移民抵达 / 船只遗迹',
          '制作 postcard-like image sequence，利用明信片语法反转“地中海天堂”的既定想象',
          '再摄影从海滩找回的 migrants personal documents 与私人照片',
          '把照片、视频、证词、地图与日记式材料连接成跨地点 archive',
        ],
        sourceUrl: samAperture,
        images: [],
        relations: [rel('展览', 'La Chance · CRAC Languedoc-Roussillon', 'Sète, 2014')],
      },
      {
        title: 'Empire', cluster: 'Choucha refugee camp / immersion / photography + video', period: '2012–2014',
        summary: '在 Tunisia–Libya 边境附近 Choucha refugee camp 持续工作约两年。与即时新闻摄影不同，他在最初阶段很少拍照，先把食物、供水、援助、沙尘、等待与 asylum procedure 理解为这个临时空间的日常结构。',
        actions: [
          '反复进入 Choucha camp，并以接近整年的现场生活建立关系和空间理解',
          '初期前两个月极少拍照，先观察营地如何运作以及等待怎样改变时间感',
          '同时作为 Danish Refugee Council 志愿者参与 psychosocial / education project',
          '为 16–18 岁青年教授约五个月 analogue photography 入门课程，将相机作为 memory tool',
          '结合 still photography 与 video，记录营地从临时设施变成长期空间再到关闭的过程',
        ],
        sourceUrl: samEmpire,
        images: [],
        relations: [
          rel('奖项', 'Prix LE BAL–ADAGP de la jeune création', '2013'),
          rel('展览', 'Empire · LE BAL', 'Paris, 2015'),
          rel('出版', 'Empire · LE BAL / Filigranes', '2015 · 116 pages / 70 colour photographs'),
          rel('展览', 'Empire · Mudam', 'Luxembourg, 2017'),
        ],
      },
      {
        title: 'Bilateral', cluster: 'France–Italy border / landscape / portraits / solidarity', period: '2017–2019 · book 2023',
        summary: '围绕 Montgenèvre Pass 的法国—意大利边境长期往返，让山地风景、越境者、援助者和路径痕迹共同构成“边境”。同一座山对游客是风景，对夜间越境的人却是危险地带。',
        actions: [
          '在不同季节多次返回 Montgenèvre Pass 两侧，避免一次性边境报道',
          '拍摄雪地、树林、山路和 crossing traces，使 landscape 成为政治信息',
          '拍摄 / 聆听试图越境的人以及 local solidarity actors，而不只把 migrants 当作唯一主体',
          '把人的缺席也作为图像：鞋、路径、夜间痕迹与环境本身都进入叙事',
          '最终把跨年度材料编辑成 2023 年 Poursuite 出版的 Bilateral 摄影书',
        ],
        sourceUrl: samBilateral,
        images: [],
        relations: [
          rel('研究', 'CNAP · FLUX photographic commission', '2018'),
          rel('出版', 'Bilateral · Poursuite', '2023 · 112 pages'),
          rel('展览', 'Bilateral · Fotografia Europea', '2023'),
        ],
      },
      {
        title: 'Welcome Europa', cluster: 'Mediterranean + Western Balkans / migration + civil society', period: 'ongoing',
        summary: '把十五年以上地中海研究继续推进到 Western Balkans，追踪进入 EU 的两条活跃路线，同时把边境暴力与 civil-society reception / vital assistance 放进同一框架。',
        actions: [
          '继续沿 Mediterranean 与 Western Balkans 两条路线进入 border crossings 和 relegation spaces',
          '收集人物肖像和 individual trajectories，而不是只记录大规模“flow”',
          '同步拍摄制度造成的障碍与 local solidarity initiatives 提供的具体援助',
          '把多个国家和阶段连接成一张持续增长的 visual story / migration map',
        ],
        sourceUrl: samElysee,
        images: [],
        relations: [rel('奖项', 'Prix Elysée · nominated project', 'Welcome Europa')],
      },
    ],
    awards: [
      'CNAP documentary photography grant, 2012',
      'Prix LE BAL–ADAGP de la jeune création, 2013',
      'Fotomuseum Winterthur Plat(t)form · special mention, 2015',
      'Foam Talent 2016',
      'Prix Arendt, 2017',
      'CNAP FLUX commission, 2018',
    ],
    exhibitions: [
      'La Chance — CRAC Languedoc-Roussillon, 2014',
      'Empire — LE BAL, Paris, 2015',
      'Les Naufragé(e)s — Institut du Monde Arabe, 2015',
      'Empire — Mudam Luxembourg, 2017',
      'Fifty Fifty — Rencontres d’Arles, 2017',
      'Les Invisibles — Foam, 2018',
      'Bilateral — Fotografia Europea, 2023',
    ],
    sources: [
      { label: 'Foam · Samuel Gratacap', url: samFoam },
      { label: 'Aperture · Samuel Gratacap interview', url: samAperture },
      { label: 'Filigranes · Empire', url: samEmpire },
      { label: 'Fotografia Europea · Bilateral', url: samBilateral },
      { label: 'Prix Elysée · Welcome Europa', url: samElysee },
    ],
  },

  'louise-parker': {
    artistId: 'louise-parker',
    projectCoverage: '2 个已确认摄影项目已建立深档案',
    imageCoverage: '0 / 2 项目已建立可靠直链图像 · LensCulture / Dazed / Foam 来源已接入',
    note: '公开资料明确支持的摄影项目主要是 Work Pictures 与 Pieces of Me。本轮不为了项目数量把之后的电影作品或商业经历强行并入摄影档案，而是把这两组作品的制作逻辑做深：一组把模特工作变成第一人称劳动日记，另一组直接把商业杂志里的“自己”剪回来。',
    projects: [
      {
        title: 'Work Pictures', cluster: 'fashion backstage / diary / photobook logic', period: '2012–2016',
        summary: '从自己的模特职业内部持续拍摄后台、等待、交通、化妆和其他模特。与时尚行业最终发布的 polished image 相反，项目把重复劳动、碎片时间和不光鲜日常变成真正主体。',
        actions: [
          '从 2012 年开始随工作持续携带相机，在 show / fitting / travel / backstage 中拍摄',
          '把等待、化妆、交通、休息等不进入 fashion campaign 的时间保留下来',
          '拍摄其他模特的直接肖像，让作者自己的工作经验通过同事关系被扩展',
          '从项目起点就以 photobook 为目标，因此用 diary / episodic sequencing 而不是单张 highlights 组织图像',
        ],
        sourceUrl: louiseLens,
        images: [],
        relations: [rel('奖项', 'MACK First Book Award · nominated by Stephen Shore', '2016')],
      },
      {
        title: 'Pieces of Me', cluster: 'self-appropriation / magazine collage / authorship', period: '2015–2016',
        summary: '只从自己过去作为 fashion model 出现过的 magazine editorials 取材，将被摄影师、杂志、造型师和品牌生产出的 Louise Parker 图像重新剪开和组合，从商业表象中夺回作者权。',
        actions: [
          '搜集自己出现在 magazine editorials 中的既有印刷图像，并将其视为 found material',
          '剪开、覆盖、折叠和重新组合身体、脸、手与服装，使比例与身体连续性故意失真',
          '利用纸张平面感和 collage seams 破坏 fashion production 制造的无缝“完美身体”',
          '把现成的商业肖像重新定义为 self-portrait：图像来源仍是别人拍摄，但新的作者结构由 Parker 决定',
          '通过夸张 fashion conventions 与身体碎片，讨论 image ownership、beauty construction 与 identity',
        ],
        sourceUrl: louiseDazed,
        images: [],
        relations: [
          rel('奖项', 'Foam Talent 2016', 'Pieces of Me'),
          rel('出版', 'Foam Magazine #45 · Talent Issue', '2016'),
          rel('展览', 'Foam Talent touring exhibition', 'Amsterdam / New York / London, 2016–2017'),
        ],
      },
    ],
    awards: [
      'Foam Talent 2016',
      'Work Pictures · MACK First Book Award nomination, 2016',
    ],
    exhibitions: [
      'Foam Talent — Amsterdam, 2016',
      'Foam Talent — Red Hook Labs, New York, 2017',
      'Foam Talent — Beaconsfield Vauxhall, London, 2017',
    ],
    sources: [
      { label: 'LensCulture · Louise Parker', url: louiseLens },
      { label: 'Dazed · Pieces of Me interview', url: louiseDazed },
      { label: 'Foam Talent roster / tour', url: louiseFoam },
    ],
  },
};
