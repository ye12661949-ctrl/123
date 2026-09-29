import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const samHome = 'https://samcontis.com/information';
const samRecent = 'https://samcontis.com/recent-work';
const samDeep = 'https://www.mackbooks.us/products/deep-springs-br-sam-contis';
const samDay = 'https://www.mackbooks.us/products/day-sleeper-dorothea-lange-sam-contis-ed';
const samOverpass = 'https://store.aperture.org/products/sam-contis-overpass';
const samFca = 'https://www.foundationforcontemporaryarts.org/recipients/sam-contis/';
const samPhases = 'https://www.wissenschaftskolleg.berlin/en/fellows/academic-year/2026/contis-sam';

const degiorgisHome = 'https://www.nicolodegiorgis.com/';
const degiorgisCv = 'https://www.nicolodegiorgis.com/cv/';
const degiorgisAbout = 'https://www.nicolodegiorgis.com/about/';
const degiorgisHidden = 'https://artsandculture.google.com/asset/hidden-islam-islamic-makeshift-places-of-worship-in-north-east-italy/6gGYbmuhy6ROkw';
const degiorgisPrison = 'https://www.nicolodegiorgis.com/prison-museum/';

const goldbergGallery = 'https://buergallery.no/artists/katinka-goldberg/';
const goldbergSurfacing = 'https://journal-photobooks.com/products/katinka-goldberg-surfacing';
const goldbergBristningar = 'https://www.kongsbergkunst.no/utstilling/katinka-goldberg';
const goldbergShtumer = 'https://trondheimkunstmuseum.no/en/katinka-goldberg-shtumer-alef';
const goldbergNjp = 'https://njp.no/2017/katinka-goldberg-2/';

export const archiveBatch68: Record<string, ArtistArchive> = {
  'sam-contis': {
    artistId: 'sam-contis',
    projectCoverage: '5 个核心项目 / 方法节点已建立深档案',
    imageCoverage: '0 / 5 项目已建立可靠直链图像 · 当前优先保留官方 / 出版来源',
    note: '本轮把 Sam Contis 从“美国西部 / 性别摄影”扩成一条更完整的方法链：制度现场 + 历史档案、纯档案编辑、步行地景、声音协作，以及用长镜头和连续多年肖像直接测量时间。图像暂不以不稳定外链占位，先确保每个项目的方法与来源可核对。',
    projects: [
      {
        title: 'Deep Springs', cluster: '美国西部 / 男性制度 / new photographs + archive', period: '2013–2018',
        summary: '在 Sierra Nevada 以东荒漠谷地中的 Deep Springs College 长期工作，以青年身体、劳动、动物与地景重看美国西部和男性气质，同时把新摄影与学院最早学生留下的历史照片共同编辑。',
        actions: [
          '长期进入一所 1917 年创办的 all-male liberal arts college，而不是短期新闻式拍摄',
          '拍摄身体、劳动、牲畜、岩石、衣物和荒漠细节，使人体与地貌在形式上互相对应',
          '调取并编辑学院早期学生约一百年前留下的照片，与当代图像同置',
          '通过摄影书顺序拆解 Hollywood、mass media 与摄影史已经固定的“American West”视觉模板',
        ],
        sourceUrl: samDeep,
        images: [],
        relations: [
          rel('出版', 'Deep Springs · MACK', '2017'),
          rel('展览', 'MATRIX 266 · BAMPFA', '2017'),
          rel('展览', 'Deep Springs · Klaus von Nichtssagend Gallery', '2017'),
        ],
      },
      {
        title: 'Day Sleeper', cluster: 'Dorothea Lange archive / selection / photobook editing', period: '2020',
        summary: '不拍新照片，而是在 Dorothea Lange 庞大档案中寻找家庭、工作室肖像与街头照片，围绕“day sleeper”重新编出一套陌生、碎片化的 Lange。',
        actions: [
          '进入 Lange archive，从远离经典纪实代表作的材料中重新选择照片',
          '把家庭照片、studio portrait、San Francisco / East Bay 街头等未被充分展示的图像放在一起',
          '以休息、遗忘、身体姿态和日常细节作为新的视觉线索，而不是按拍摄年代编年',
          '通过书籍相邻关系和节奏完成作者性，让 archive editing 本身成为创作行为',
        ],
        sourceUrl: samDay,
        images: [],
        relations: [
          rel('出版', 'Day Sleeper · Dorothea Lange / Sam Contis · MACK', '2020'),
          rel('展览', 'Dorothea Lange: Words & Pictures · MoMA', '2020'),
        ],
      },
      {
        title: 'Overpass', cluster: 'walking / public footpaths / stile / land boundary', period: '2020–2022',
        summary: '沿英国乡村延续数百年的公共 footpaths 步行，持续把镜头对准 stile——允许行人跨过墙和围栏的微型结构，由此把风景摄影变成公共通行权、土地所有权与生态边界研究。',
        actions: [
          '以持续步行为调查方法，沿 countryside path 而不是驾车寻找景观',
          '反复拍摄 stile、围栏、路径、植物和身体经过后的痕迹',
          '把“跨越”作为统一动作规则，连接 public access 与 privately owned land',
          '通过 Aperture 摄影书将小型结构物与大地景重新排序，使边界问题在翻页中累积',
        ],
        sourceUrl: samOverpass,
        images: [],
        relations: [
          rel('出版', 'Overpass · Aperture', '2022 · Aperture JGS Book Award publication'),
          rel('展览', 'OVERPASS · Klaus von Nichtssagend Gallery', '2023'),
        ],
      },
      {
        title: 'Duet', cluster: 'vocal body / six-year collaboration / sound + performance', period: '2016–2022',
        summary: '与 vocalist Inbal Hever 持续约六年的协作，把“声音怎样由身体产生”拆成摄影、video、录音和 live performance；面部、颈部、呼吸与肌肉的微小变化成为真正的肖像内容。',
        actions: [
          '从 2016 年近距离观看 Hever rehearsal 开始，建立长期而非一次性的被摄关系',
          '以 close-up 摄影观察发声时脸、颈部、口腔周围和呼吸的物理变化',
          '同时制作 video 与 audio，使不可见的声音通过不同媒介获得身体尺度',
          '2022 展览让 Hever 现场演唱 Chaya Czernowin 作品；无现场演出时由录音继续占据展厅',
        ],
        sourceUrl: samFca,
        images: [],
        relations: [rel('展览', 'Duet · Klaus von Nichtssagend Gallery', 'New York, 2022')],
      },
      {
        title: 'Cross Country / Phases', cluster: 'runners / time measurement / three-channel film', period: '2018–2026',
        summary: '从长期拍摄年轻越野跑者推进到 Phases：黑白终点肖像记录多年累积的瞬时极限状态，三通道影片则让三位跑者以完整 5 公里、不间断镜头把距离本身转成时间单位。',
        actions: [
          '连续约五年拍摄 teenage runners 接近 / 越过 finish line 时的脸与身体',
          '避免体育英雄式动作高潮，把疲劳、呼吸和转瞬即逝的表情作为肖像',
          '三通道影片让三位年轻女性分别在 morning / midday / evening 跑同一类乡野 5K',
          '每位跑者占一个独立 frame，每一次 run 都使用 single uninterrupted take',
          '把摄影快门的一瞬与影片中完整距离的持续时间并列，直接研究 camera 如何 measure time',
        ],
        sourceUrl: samPhases,
        images: [],
        relations: [
          rel('展览', 'PHASES · Arts and Letters', 'New York, 2025–2026'),
          rel('研究', 'Wissenschaftskolleg zu Berlin', '2026/27 project'),
        ],
      },
    ],
    awards: [
      'Foam Talent 2016',
      'Nancy Graves Grant for Visual Artists, 2016',
      'Aaron Siskind Foundation Fellowship, 2016',
      'Guggenheim Fellowship, 2022',
      'Foundation for Contemporary Arts Grants to Artists Award, 2024',
    ],
    exhibitions: [
      'MATRIX 266 — Berkeley Art Museum and Pacific Film Archive, 2017',
      'Being: New Photography 2018 — MoMA, New York',
      'Masculinities: Liberation through Photography — Barbican, 2020',
      'Transit — Carré d’Art, Nîmes, 2022',
      'Sam Contis: Moving Landscape — Art Gallery of Western Australia, 2025',
      'Phases — Arts and Letters, New York, 2025–2026',
    ],
    sources: [
      { label: 'Sam Contis · information', url: samHome },
      { label: 'Sam Contis · recent work', url: samRecent },
      { label: 'MACK · Deep Springs', url: samDeep },
      { label: 'MACK · Day Sleeper', url: samDay },
      { label: 'Aperture · Overpass', url: samOverpass },
      { label: 'Foundation for Contemporary Arts · Sam Contis', url: samFca },
      { label: 'Wissenschaftskolleg · Phases', url: samPhases },
    ],
  },

  'nicolo-degiorgis': {
    artistId: 'nicolo-degiorgis',
    projectCoverage: '5 个核心项目已建立深档案',
    imageCoverage: '0 / 5 项目已建立可靠直链图像 · 官方项目页已逐项接入',
    note: '本轮重点把 Nicoló Degiorgis 从“社会纪实 / 出版”扩成非常具体的形式系统：建筑类型学与折页、搭便车路线与色彩排序、山峰双页配对、正负片 archive transformation、以及与囚犯共同作者。这里特别记录“研究问题怎样进入书籍 / 展览形式”。',
    projects: [
      {
        title: 'Hidden Islam', cluster: 'makeshift mosques / cadastral typology / gatefold book', period: '2009–2014',
        summary: '调查意大利东北部穆斯林社区缺少正式清真寺后的临时礼拜空间，并将约 100 处仓库、车库、商铺和地下室组织成建筑类型学；书的折页动作本身模拟“隐藏 / 显露”。',
        actions: [
          '长期寻找并登记约 100 个被 Islamic communities 使用的非正式礼拜建筑',
          '先把 warehouse、garage、shop、basement 等外部空间按类型拍摄和归档',
          '同时制作 specific community case studies，避免类型学把个体历史全部抹平',
          '在 artist book 中让外部建筑先出现，读者打开 gatefold 后才看到内部彩色礼拜场景',
        ],
        sourceUrl: degiorgisHidden,
        images: [],
        relations: [
          rel('出版', 'Hidden Islam · Rorhof', '2014'),
          rel('奖项', 'Paris Photo–Aperture First PhotoBook Award', '2014'),
          rel('奖项', 'German Photobook Award · Gold', '2014'),
          rel('奖项', 'Rencontres d’Arles · Author Book of the Year', '2014'),
        ],
      },
      {
        title: 'Oasis Hotel', cluster: 'Taklamakan / hitchhike / oil road / chromatic sequencing', period: '2014',
        summary: '沿 Xinjiang Cross-Desert Highway 搭便车，记录依附于石油基础设施的人和空间，并把真实路线进一步转成从蓝色白昼逐步进入红色室内的摄影书旅程。',
        actions: [
          '以 hitchhiking 作为移动方法，沿为石油开采而建设的跨沙漠公路行进',
          '拍摄 truck drivers、cotton pickers、oil workers、sex workers 与沿线空间',
          '把照片同时按照 chronology 与 chromatic progression 编辑',
          '让书籍从 blue desert daylight 逐渐变成 red interiors，最终抵达标题所指的 brothel',
        ],
        sourceUrl: degiorgisHome,
        images: [],
        relations: [
          rel('出版', 'Oasis Hotel · Rorhof', '2014'),
          rel('展览', 'Oasis Hotel · Prisma Gallery', 'Bolzano, 2014'),
        ],
      },
      {
        title: 'Peak', cluster: 'Dolomites / paired spreads / seasonal cycle', period: '2015',
        summary: '持续记录 Dolomites 山体，但不把单座山峰做成英雄式风景。摄影书把两座山在每个 spread 中彼此挤压，从夜间黑影到雪面高光，让季节和光线循环成为真正的叙事。',
        actions: [
          '在 Bolzano、Trento、Belluno 一带持续拍摄 pale mountains / Dolomites',
          '保留 nocturnal darkness、snow glare、weather 与 season 的大幅变化',
          '每个 book spread 将两座山峰并置，让相邻关系代替单张“名山照片”',
          '后续展览把书籍中的 pairing / rhythm 继续转成墙面安装',
        ],
        sourceUrl: degiorgisHome,
        images: [],
        relations: [
          rel('出版', 'Peak · Rorhof', '2015'),
          rel('展览', 'Peak · Dolomiti Contemporanee / Museion contexts', '2017 onward'),
        ],
      },
      {
        title: 'Blue as Gold', cluster: 'EU / migration / archive positive-negative', period: '2017',
        summary: '从 Paris 驻留时窗外的 EU flag 出发，不继续制造新的 migration documentary，而处理既有 archive images：positive / negative 转换让海洋蓝色成为金色，把 EU 的蓝金视觉语言变成批判工具。',
        actions: [
          '以 European Union flag 作为形式起点，研究共同政策与共同价值为何难以兑现',
          '主要调用 pre-existing archive material，而不是新增 migrant suffering imagery',
          '把图像处理成 positive / negative，使 sea blue 在反相中转为 gold',
          '把材料扩展为 installations、videos、collages、books 与 photographs',
        ],
        sourceUrl: degiorgisHome,
        images: [],
        relations: [
          rel('出版', 'Blue as Gold · Rorhof', '2017'),
          rel('奖项', 'Premio Piero Siena', '2022'),
        ],
      },
      {
        title: 'Prison Museum', cluster: 'Bolzano prison / Museion / collective authorship', period: '2017–2021+',
        summary: '以 Bolzano prison 与 Museion 仅约 100 米的距离为结构，把一个十九世纪、长期拥挤的惩罚机构与一个二十一世纪透明当代美术馆并列；部分作品直接与囚犯共同完成。',
        actions: [
          '把 prison 与 contemporary art museum 放在同一条街道 / spatial axis 中比较',
          '记录两种 architecture、access、visibility 与 institutional value 的强烈反差',
          '在长期 prison teaching context 中发展项目，而不是只做一次外部拍摄',
          '让 inmates 进入多个 works 的共同生产 / authorship，改变“摄影师研究他人”的单向结构',
        ],
        sourceUrl: degiorgisPrison,
        images: [],
        relations: [
          rel('出版', 'Prison Museum · Rorhof', '2021'),
          rel('机构', 'Casa Circondariale di Bolzano / Museion', 'project context'),
        ],
      },
    ],
    awards: [
      'PDN30, 2011',
      'Paris Photo–Aperture First PhotoBook Award, 2014',
      'German Photobook Award · Gold, 2014',
      'Rencontres d’Arles · Author Book of the Year, 2014',
      'Foam Talent 2016',
      'Rencontres d’Arles · Historical Book Award, 2018',
      'Premio Piero Siena, 2022',
    ],
    exhibitions: [
      'Hidden Islam — ar/ge kunst, Bolzano, 2011',
      'Oasis Hotel — Prisma Gallery, Bolzano, 2014',
      'Foam Talent — Amsterdam / New York / London, 2016–2017',
      'Museion — Nicolò Degiorgis, 2017',
      'Farms, Flakes & Peaks — Lumen Museum, 2022',
      'E se l’orizzonte non fosse il confine? — Galleria Eugenia Delfini, 2023',
    ],
    sources: [
      { label: 'Nicolò Degiorgis · official project index', url: degiorgisHome },
      { label: 'Nicolò Degiorgis · biography', url: degiorgisAbout },
      { label: 'Nicolò Degiorgis · CV', url: degiorgisCv },
      { label: 'Hidden Islam · Google Arts & Culture', url: degiorgisHidden },
      { label: 'Prison Museum · official', url: degiorgisPrison },
    ],
  },

  'katinka-goldberg': {
    artistId: 'katinka-goldberg',
    projectCoverage: '3 个摄影书三部曲核心项目已建立深档案',
    imageCoverage: '0 / 3 项目已建立可靠直链图像 · 当前保留出版 / 美术馆来源',
    note: 'Katinka Goldberg 的核心公开脉络本来就是三部曲，不需要为了“数量”拆成更多假项目。本轮直接按 Surfacing → Bristningar → Shtumer Alef 建立方法演变：从母女关系的非线性编辑，到物理切割身体照片，再到沿祖母逃亡路线重新行走。',
    projects: [
      {
        title: 'Surfacing', cluster: 'mother-daughter / non-linear photobook / intimacy', period: '2011',
        summary: '以母女之间既亲密又窒息的关系为核心，不按家庭史时间线讲故事，而用肖像、身体、地景和记忆建立来回摆动的情绪结构。',
        actions: [
          '长期拍摄母亲以及两人共同生活的氛围，而不是制作单次 portrait session',
          '把 close-up portrait、landscape、body detail 与 memory image 混编',
          '主动拒绝 beginning-middle-end 的线性 narrative，让图像关系像水一样往返',
          '以摄影书两块实体封面作为唯一明确的 beginning / end，形式上回应关系的无定形状态',
        ],
        sourceUrl: goldbergSurfacing,
        images: [],
        relations: [
          rel('出版', 'Surfacing · Journal', '2011'),
          rel('出版', 'Included in The Photobook: A History Vol. III', 'Parr / Badger'),
          rel('展览', 'Published · Hasselblad Center', '2018'),
        ],
      },
      {
        title: 'Bristningar', cluster: 'body collage / self-image / photography-sculpture', period: '2014–2022',
        summary: '第二部从“我怎样看母亲”转向“我怎样把自己重新做出来”。Goldberg 把自己的身体照片切开、截断、重组，并加入三维物件，让 fragmented identity 变成真实的材料操作。',
        actions: [
          '大部分以自己的身体作为 photographic source material',
          '实际剪开 / amputate 身体图像，再通过 collage 重建新的 self-image',
          '加入 three-dimensional objects 与 sculptural presentation，使摄影跨出平面',
          '把 intimacy / distance 转译成材料问题：靠得越近，完整身体反而越容易碎裂',
          '摄影书继续混入 childhood photographs、texts 与家庭绘画，建立主观 memory work',
        ],
        sourceUrl: goldbergBristningar,
        images: [],
        relations: [
          rel('展览', 'Bristningar · Fotogalleriet / Foam Talent context', '2016'),
          rel('展览', 'Bristningar · Buer Gallery / Kongsberg Kunstforening', '2021–2022'),
          rel('出版', 'Bristningar · Journal', '2021'),
          rel('奖项', 'Årets vakreste bøker · Gold', '2022'),
        ],
      },
      {
        title: 'Shtumer Alef', cluster: 'Jewish family memory / diary / re-walking escape route', period: '2017–2021',
        summary: '第三部围绕祖母 Assne Kahn 在二战期间从 Trondheim 逃往 Sweden 的经历。2018 年找到祖母日记后，Goldberg 亲自重走这条路线，并让沿路的地景、植物和石头进入新的肖像与档案结构。',
        actions: [
          '从 Norwegian Journal of Photography 项目开始调查母系 Jewish family history',
          '2018 年在 Jewish Museum Trondheim 找到祖母逃亡期间留下的 diary',
          '同年沿 grandmother’s escape route 重新步行，并拍摄沿途 landscapes',
          '把路线上收集 / 观察到的 plants 与 stones 放入对祖母的再现中',
          '将新摄影与 historical family / archive photographs、日记共同组织，处理 silence、belonging 与 intergenerational memory',
        ],
        sourceUrl: goldbergShtumer,
        images: [],
        relations: [
          rel('研究', 'Norwegian Journal of Photography', 'selected project, 2017'),
          rel('展览', 'Shtumer Alef · Trondheim Kunstmuseum', '2020–2021'),
          rel('机构', 'Jewish Museum Trondheim / Jødisk Kulturfestival', 'collaboration context'),
        ],
      },
    ],
    awards: [
      'Foam Talent 2016',
      'Leica Oskar Barnack Award · nominated, 2020',
      'Bristningar · Årets vakreste bøker Gold, 2022',
    ],
    exhibitions: [
      'Surfacing — Circulation(s), Paris, 2012',
      'Bristningar — Fotogalleriet, Oslo, 2016',
      'Foam Talent — Amsterdam / New York / London, 2016–2017',
      'Published — Hasselblad Center, 2018',
      'Shtumer Alef — Trondheim Kunstmuseum, 2020–2021',
      'Bristningar — Buer Gallery / Kongsberg Kunstforening, 2021–2022',
    ],
    sources: [
      { label: 'Buer Gallery · Katinka Goldberg', url: goldbergGallery },
      { label: 'Journal · Surfacing', url: goldbergSurfacing },
      { label: 'Kongsberg Kunstforening · Bristningar', url: goldbergBristningar },
      { label: 'Trondheim Kunstmuseum · Shtumer Alef', url: goldbergShtumer },
      { label: 'Norwegian Journal of Photography · Katinka Goldberg', url: goldbergNjp },
    ],
  },
};
