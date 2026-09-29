import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const sofiaLens = 'https://www.lensculture.com/projects/354420-every-night-temo-ser-la-dinner';
const sofiaSpotlight = 'https://www.lensculture.com/articles/sofia-ayarzagoitia-every-night-temo-ser-la-dinner-foam-talent-spotlight';
const sofiaBienal = 'https://repositorio.ci.cultura.gob.mx/exposiciones/xvii-bienal-de-fotografia-2/';
const sofiaPhmuseum = 'https://phmuseum.com/projects/every-night-temo-ser-la-dinner';
const sofiaDalpine = 'https://www.dalpine.com/en-es/products/sofia-ayarzagoitia';
const sofiaMadrid = 'https://www.comunidad.madrid/cultura/proceso-seleccion-fotocanal-libro-fotografia';

const bubiAbout = 'https://www.bubicanal.com/about';
const bubiSpecial = 'https://www.bubicanal.com/special-moment-munch-gallery-new-york';
const bubiMagic = 'https://www.bubicanal.com/magic-garden-munch-gallery-new-york';
const bubiGloaming = 'https://www.bubicanal.com/contemporary-arts-center-cac';
const bubiHorizon = 'https://www.bubicanal.com/horizon-nave-sotoliva';
const bubiFoam = 'https://www.bubicanal.com/foam-2016';

const ciregiaHome = 'https://www.paolociregia.eu/';
const ciregiaPerestrojka = 'https://phmuseum.com/projects/perestrojka?f=f';
const ciregiaInterview = 'https://urbanautica.com/interview/paolo-ciregia-perestrojka/870';
const ciregiaGfi = 'https://gfi.comune.re.it/en/archive/2017-loop/';
const ciregia125 = 'https://www.paolociregia.eu/portfolio-selected-2018-20.pdf';
const ciregiaDefensive = 'https://www.unive.it/pag/36677/?L=1';
const ciregiaQuadriennale = 'https://quadriennalediroma.org/paolo-ciregia/';

export const archiveBatch67: Record<string, ArtistArchive> = {
  'sofia-ayarzagoitia': {
    artistId: 'sofia-ayarzagoitia',
    projectCoverage: '2 个已确认的核心长期项目已建立深档案',
    imageCoverage: '0 / 2 项目已建立可靠直链图像 · 当前保留项目页 / 出版来源',
    note: '这位艺术家的公开项目数量不宜人为扩充。本轮只保留目前有稳定一手 / 机构来源的两条主线，并把“拍谁”进一步拆成关系、闪光、文字、日记和书籍编辑等具体动作。重点是避免把亲密摄影误写成纯粹私人快照。',
    projects: [
      {
        title: 'Every night temo ser la dinner',
        cluster: '视觉日记 / 11 encounters / performative documentary',
        period: '2015–2016',
        summary: '在 Madrid 生活期间形成的视觉日记，由与 11 位不同国籍男性朋友 / 情人的亲密相遇构成。Ayarzagoitia 并不把自己拍进绝大多数画面，但作品始终通过对方为镜头做出的动作、直接闪光、第一人称文本和非线性编辑指回作者本人。',
        actions: [
          '把长期生活中的亲密相遇作为拍摄场景，而不是先设置社会学式样本',
          '要求 / 接受被摄者为镜头做出动作，使 documentary observation 与 performance 交叠',
          '大量使用 frontal flash，把夜间人物、皮肤和房间从黑暗中突然抽离出来',
          '把照片与 sketches、私人日记、记忆片段和 Spanglish 文本混合，不建立完整时间顺序',
          '把 11 段关系编辑成摄影书，使书的顺序承担“自我叙事”功能',
        ],
        sourceUrl: sofiaLens,
        images: [],
        relations: [
          rel('奖项', 'La Fábrica Photobook Dummy Award', 'winner, 2016'),
          rel('出版', 'Every night temo ser la dinner · La Fábrica', 'first monograph, 2016'),
          rel('奖项', 'XVII Bienal de Fotografía · Centro de la Imagen', 'First Prize / Premio de Adquisición Arca, 2016'),
          rel('展览', 'Foam Talent 2016 / New York / London', '2016–2017'),
          rel('奖项', 'PHmuseum Photography Grant', 'Honourable Mention, 2017'),
        ],
      },
      {
        title: 'El menso metió la cabeza en un hormiguero',
        cluster: 'travel diary / albinism / genetics / photobook',
        period: '2025–2026',
        summary: '与患有白化症的伴侣共同穿行多个拉丁美洲国家所形成的第二本摄影书。它继续使用亲密日记，但将身体差异与遗传学、基因编辑、社会“纠正身体”的冲动联系起来，使私人关系进入更广的政治与科技问题。',
        actions: [
          '在跨国旅行过程中持续拍摄伴侣、两人共享的生活场景与沿途地景',
          '让 close portrait 与陌生环境交替出现，使身体不被固定成医学 specimen',
          '把“白化症”从视觉差异推进到 genetics / DNA intervention 的讨论',
          '将私人关系、旅行经验、科学问题和身体政治重新编排为 photobook sequence',
          '最终编辑为 124 页、105 张照片的双语摄影书版本',
        ],
        sourceUrl: sofiaDalpine,
        images: [],
        relations: [
          rel('奖项', 'FotoCanal · IX edition', 'winning project, 2025'),
          rel('出版', 'Dalpine / Comunidad de Madrid', 'photobook, 2026'),
          rel('展览', 'PhotoEspaña · Espacio Fotolibros', '2026'),
        ],
      },
    ],
    awards: [
      'Foam Talent 2016',
      'La Fábrica Photobook Dummy Award · winner, 2016',
      'XVII Bienal de Fotografía · First Prize, 2016',
      'PHmuseum Photography Grant · Honourable Mention, 2017',
      'FotoCanal · winning project, 2025',
    ],
    exhibitions: [
      'XVII Bienal de Fotografía — Centro de la Imagen, 2016',
      'Foam Talent — Red Hook Labs New York / Beaconsfield London, 2017',
      'PhotoEspaña · Espacio Fotolibros — 2026',
    ],
    sources: [
      { label: 'LensCulture · project', url: sofiaLens },
      { label: 'LensCulture · Foam Talent Spotlight', url: sofiaSpotlight },
      { label: 'Centro de la Imagen · XVII Bienal', url: sofiaBienal },
      { label: 'PHmuseum · project', url: sofiaPhmuseum },
      { label: 'Dalpine · second book', url: sofiaDalpine },
      { label: 'Comunidad de Madrid · FotoCanal', url: sofiaMadrid },
    ],
  },

  'bubi-canal': {
    artistId: 'bubi-canal',
    projectCoverage: '4 个核心项目 / 展览节点已建立方法档案',
    imageCoverage: '0 / 4 项目已建立稳定直链图像 · 先保留艺术家官网来源',
    note: '本轮重点把 Bubi Canal 从“高饱和、超现实”这种风格标签里拉出来，改写成一套具体的世界建构方法：亲密人物、手工道具、现成塑料、服装、真实地景、黄昏时间窗口与 choreography。图像暂不抓取不稳定网页资源。',
    projects: [
      {
        title: 'Special Moment / Chrystelle',
        cluster: 'photography / objects / video / close collaborators',
        period: '2013',
        summary: 'Canal 在第一场纽约个展中同时展示摄影、物件与 video。角色和图像来源并不是专业制作团队，而是身边亲密的人、个人梦想、80 年代玩具 / pop references 与他自己制作的奇异物件。',
        actions: [
          '优先邀请身边亲友而非职业模特进入拍摄',
          '为人物制作 / 组合高饱和服装、几何造型与玩具感道具',
          '让真实身体与人工物件在同一布景中产生 hybrid character',
          '在 Chrystelle 中把高度人工 costume 带回 Santander 自然地景拍摄 moving image',
          '不区分“作品物件”和“拍摄道具”，同一 object 可以同时存在于照片与展场',
        ],
        sourceUrl: bubiSpecial,
        images: [],
        relations: [rel('展览', 'Special Moment · Munch Gallery', 'New York, 2013')],
      },
      {
        title: 'Beautiful Mystery / Magic Garden',
        cluster: 'still life → portrait / found plastic / sculpture',
        period: '2013–2015',
        summary: 'Beautiful Mystery 原本从 still life 出发，却在制作中逐渐把无生命物件当作“角色”处理。Magic Garden 则把彩色 found plastic 直接组装为雕塑；两者共同证明 Canal 的虚构世界往往先被物理搭建，再被摄影。',
        actions: [
          '使用典型美国 suburban den 的木纹墙、地毯等真实室内作为固定舞台',
          '从 still-life logic 出发搭放物件，但根据制作过程改变计划，最终把物体当作 portrait subject',
          '回收 / 购买彩色塑料并现场拼接成临时图腾式 sculpture',
          '用强烈颜色和人形暗示让日常 plastic 获得 anthropomorphic quality',
          '把照片、雕塑和 video 一起安装，避免媒介被分成互不相干的系列',
        ],
        sourceUrl: bubiMagic,
        images: [],
        relations: [rel('展览', 'Magic Garden · Munch Gallery', 'New York, 2015')],
      },
      {
        title: 'Hologram',
        cluster: 'video / choreography / subconscious landscape',
        period: '2015–2016',
        summary: '一组角色从黑暗与恐惧走向光与爱的 moving-image narrative。Canal 把外部环境视为角色潜意识的显现，并让人物用 choreography 交换信息。',
        actions: [
          '建立从 dark / fear 到 light / love 的明确视觉转场规则',
          '依靠姿态、身体距离和 choreography 组织角色关系',
          '用 costume 与场景变化替代大量对白和传统剧情解释',
          '让摄影式 tableau 在时间轴中展开成 moving image',
        ],
        sourceUrl: bubiMagic,
        images: [],
        relations: [
          rel('展览', 'Magic Garden · Munch Gallery', '2015'),
          rel('展览', 'Hologram · Digitaliseum', 'Malmö, 2016'),
          rel('展览', 'Foam Talent', '2016–2017'),
        ],
      },
      {
        title: 'Into the Gloaming / Cosmovision',
        cluster: 'dusk portraits / folklore / landscape signs',
        period: '2019',
        summary: '18 张肖像及 accompanying video 均围绕“gloaming”——白昼与夜晚之间的过渡时刻。Canal 把黄昏作为统一拍摄协议，再将 Cantabrian mythology、Japanese TV、pop imagery 与亲密人物混合成新的私人 folklore。',
        actions: [
          '在 New York 与 Santander 都坚持选择黄昏时段拍摄，统一自然光状态',
          '继续使用亲友和艺术家本人作为角色基础',
          '通过服装和道具为真实人物创造 fictional identity',
          '将真实 landscape 作为世界构建的一部分，而不是后期替换背景',
          '在 Cosmovision video 中跟随地景里的 signs 移动，以寻找 / 解码符号作为镜头路线',
        ],
        sourceUrl: bubiGloaming,
        images: [],
        relations: [
          rel('展览', 'Into the Gloaming · Contemporary Arts Center', 'Cincinnati, 2019'),
          rel('展览', 'Horizon · Nave Sotoliva', 'Santander, 2023–2024 · later survey context'),
        ],
      },
    ],
    awards: ['Foam Talent 2016', 'Silver Art Projects residency · World Trade Center'],
    exhibitions: [
      'Special Moment — Munch Gallery, New York, 2013',
      'Magic Garden — Munch Gallery, New York, 2015',
      'Foam Talent — Red Hook Labs / Beaconsfield, 2017',
      'Into the Gloaming — Contemporary Arts Center Cincinnati, 2019',
      'Horizon — Nave Sotoliva, Santander, 2023–2024',
    ],
    sources: [
      { label: 'Artist · About', url: bubiAbout },
      { label: 'Special Moment', url: bubiSpecial },
      { label: 'Magic Garden', url: bubiMagic },
      { label: 'Into the Gloaming / CAC', url: bubiGloaming },
      { label: 'Horizon', url: bubiHorizon },
      { label: 'Foam 2016 · artist archive', url: bubiFoam },
    ],
  },

  'paolo-ciregia': {
    artistId: 'paolo-ciregia',
    projectCoverage: '5 个核心项目已建立从摄影到材料 / 装置的方法链',
    imageCoverage: '0 / 5 项目已建立稳定直链图像 · 当前来源以官方 portfolio 与机构页为主',
    note: 'Paolo Ciregia 的关键不是“战争题材”，而是媒介如何随研究改变：先破坏自己的战地照片，再处理宣传杂志，之后让旧收音机、军用头盔、防暴盾牌、玻璃石块和城市障碍承担证据功能。本档案按这种方法迁移组织。',
    projects: [
      {
        title: 'Perestrojka',
        cluster: 'war-reportage archive / removal / cut / corrosion',
        period: '2014–2015',
        summary: '以自己在 Ukraine 约八个月的 conflict reportage archive 为原料。面对战争图像被高速消费的问题，他停止继续复制同类“震撼照片”，转而破坏已经拍到的图像。',
        actions: [
          '从 Maidan、Crimea 到 Donbass 进行现场报道并建立私人摄影档案',
          '在打印 / 图像材料上进行 cutting、trimming、erasure、corrosion 与 burning',
          '主动从图像中移除 dead bodies / weapons 等最容易触发即时情绪的符号',
          '用空白、缺损和重叠取代原先完整新闻叙事',
          '把 reportage 的“再现战争”改造成对 war-image consumption 的反思',
        ],
        sourceUrl: ciregiaPerestrojka,
        images: [],
        relations: [
          rel('展览', 'Perestrojka · MC2 Gallery / Officine Fotografiche', '2015–2016'),
          rel('奖项', 'Foam Talent', '2016'),
        ],
      },
      {
        title: 'Exeresi',
        cluster: 'propaganda magazines / image extraction / close-up',
        period: '2016–2017',
        summary: '从具体的 Ukraine 冲突退到更广的 propaganda visual language。Ciregia 把不同政治阵营的宣传图像放在一起，通过切割和 close-up 抽掉它们的历史安全感。',
        actions: [
          '收集 Fascist / Communist / Nazi 等宣传杂志和 historical imagery',
          '切割与 manipulates found magazine photographs，使 artifact message 被扭转',
          '用 tight close-up 强化制服、身体、符号和暴力细节',
          '刻意移除原政治阵营上下文，使不同 ideologies 显露共同的宣传形式',
        ],
        sourceUrl: ciregiaInterview,
        images: [],
        relations: [rel('展览', 'Giovane Fotografia Italiana #5 · LOOP', 'Reggio Emilia, 2017 · selected / winning context')],
      },
      {
        title: 'Ideological Loop',
        cluster: 'sound / historical devices / installation / repetition',
        period: '2016–2017',
        summary: '把“宣传重复”从平面图像推进到物理空间。旧 radio、record player、carpet、helmets、bird cage 与 megaphone 组成一个会持续输出意识形态回声的装置。',
        actions: [
          '使用 Nazi VE301 radio 与改造 record player 作为真实历史媒介器材',
          '让 Lenin 等政治演说 opening fragments 循环播放，而不是完整重播一段历史录音',
          '以 parrot / megaphone 视觉化“被动复述”机制',
          '并列不同国家与时期的 military helmets，削弱阵营差异，突出战争的形式重复',
          '利用 carpets / furniture 划定观看空间，让意识形态“边界”变成观众实际经过的空间',
        ],
        sourceUrl: ciregiaInterview,
        images: [],
        relations: [
          rel('展览', 'Foam Talent · Red Hook Labs', 'New York, 2017'),
          rel('展览', 'Foam Talent · Beaconsfield Gallery', 'London, 2017'),
        ],
      },
      {
        title: '125',
        cluster: 'anti-monument / scanned shield / glass cobblestone / coded light',
        period: '2017–2018',
        summary: '由 Maidan 冲突留下的物件而不是事件照片重建记忆。防暴盾牌、街头石块和 Morse light 被转成 anti-monument，重点从“谁是英雄”转向暴力在材料表面留下了什么。',
        actions: [
          '取得 / 研究 Ukraine police riot shield，并只扫描表面几厘米的划痕区域',
          '将微小 scratch macro-enlarge 成大型黑色图像表面，使盾牌像“皮肤”一样显露伤口',
          '把 sanpietrino / thrown stone 转制成 glass object，让原本坚硬武器变得脆弱',
          '将 Historia magistra vitae 编码成多数观众无法直接阅读的 Morse-light sequence',
          '拒绝建立英雄纪念碑，而用难以归属阵营的 material trace 构成 anti-monument',
        ],
        sourceUrl: ciregia125,
        images: [],
        relations: [rel('展览', '125 · SI FEST', 'Savignano, 2018')],
      },
      {
        title: 'The Defensive City / You are (NOT) welcome',
        cluster: 'participatory archive / hostile architecture / brass alphabet',
        period: '2019',
        summary: '与 Ca’ Foscari 的学生一起把研究从战争装置推进到日常城市权力。学生先拍摄会排斥 / 阻挡身体的 urban barriers，Ciregia 再把这些图像转换成二维黄铜符号。',
        actions: [
          '让约 30 名学生在城市中共同收集 architectural / urban barriers，而不是艺术家独自拍摄',
          '建立 student-generated digital image archive',
          '从照片中提取 barrier silhouette，将三维结构压平为几何符号',
          '以 brass 制作二维形状，并组合成类似 archaic alphabet 的视觉系统',
          '把“不可进入 / 不受欢迎”的身体经验从抽象议题变成具体空间装置',
        ],
        sourceUrl: ciregiaDefensive,
        images: [],
        relations: [
          rel('奖项', 'Sustainable Art Prize', '2018 · project development context'),
          rel('展览', 'You are (NOT) welcome · Ca’ Foscari', 'Venice, 2019'),
        ],
      },
    ],
    awards: [
      'Foam Talent 2016',
      'Giovane Fotografia Italiana #5, 2017',
      'PHmuseum Grant · second prize, 2018',
      'Sustainable Art Prize, 2018',
      'Premio Francesco Fabbri per l’arte contemporanea, 2021',
    ],
    exhibitions: [
      'Perestrojka — MC2 Gallery / Officine Fotografiche, 2015–2016',
      'Foam Talent — New York / London, 2017',
      'Exeresi — Giovane Fotografia Italiana #5, Reggio Emilia, 2017',
      '125 — SI FEST, 2018',
      'You are (NOT) welcome — Ca’ Foscari, Venice, 2019',
    ],
    sources: [
      { label: 'Artist · official archive', url: ciregiaHome },
      { label: 'PHmuseum · Perestrojka', url: ciregiaPerestrojka },
      { label: 'Urbanautica · interview', url: ciregiaInterview },
      { label: 'Giovane Fotografia Italiana · Exeresi', url: ciregiaGfi },
      { label: 'Artist portfolio · 125', url: ciregia125 },
      { label: 'Ca’ Foscari · The Defensive City', url: ciregiaDefensive },
      { label: 'Quadriennale di Roma · artist profile', url: ciregiaQuadriennale },
    ],
  },
};
