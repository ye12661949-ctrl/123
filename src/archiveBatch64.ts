import type { ArtistArchive, ArchiveImage, ArchiveRelation } from './archiveData';

const img = (url: string, title: string, credit: string, sourceUrl: string, sourceLabel: string): ArchiveImage => ({ url, title, credit, sourceUrl, sourceLabel });
const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const andreaHome = 'https://andreagruetzner.de/';
const andreaAbout = 'https://andreagruetzner.de/about';
const andreaWorks = 'https://andreagruetzner.de/works/';
const andreaErbgericht = 'https://andreagruetzner.de/erbgericht';
const andreaHive = 'https://andreagruetzner.de/works/hive/';
const andreaExhibitions = 'https://andreagruetzner.de/exhibitions/';
const andreaBook = 'https://andreagruetzner.de/books/';
const foam2016 = 'https://www.foam.org/events/foam-talent-2016';

const maximeHome = 'https://maximeguyon.com/';
const maximeAircraft = 'https://maximeguyon.com/aircraft';
const maximeMast = 'https://mastphotogrant.com/artisti/maxime-guyon/';
const maximeImages = 'https://www.images.ch/archives/en/artiste/maxime-guyon/';
const maximePublisher = 'https://www.lars-mueller-publishers.com/maxime-guyon';
const maximeSwiss = 'https://www.schweizerkulturpreise.ch/en/maxime-guyon-3';
const maximeTokyo = 'https://tokyophotographicresearch.jp/en/project/x_change-vol-02/';

const stefanieHome = 'https://stefaniemoshammer.com/';
const stefanieInfo = 'https://stefaniemoshammer.com/information/';
const stefanieVegas = 'https://stefaniemoshammer.com/work/vegas-and-she/';
const stefanieYoung = 'https://stefaniemoshammer.com/work/young-gods/';
const stefanieLand = 'https://stefaniemoshammer.com/work/land-of-black-milk/';
const stefanieTomorrow = 'https://stefaniemoshammer.com/work/tomorrow-of-yesterday/';
const stefanieGrandmother = 'https://stefaniemoshammer.com/work/grandmother-said-its-okay/';
const stefanieBooks = 'https://stefaniemoshammer.com/books/';
const stefanieCoBerlin = 'https://co-berlin.org/en/program/exhibitions/stefanie-moshammer-not-just-your-face-honey';

export const archiveBatch64: Record<string, ArtistArchive> = {
  'andrea-grutzner': {
    artistId: 'andrea-grutzner',
    projectCoverage: '5 个核心项目 / 方法节点已建立深档案',
    imageCoverage: '1 / 5 项目已建立图像档案 · 2 张官方作品图',
    note: '这一轮把 Andrea Grützner 从 Foam 2016 的名单条目升级为“空间如何被摄影重新制造”的方法档案。重点不是只写她拍建筑，而是区分现场彩色闪光、模拟大画幅、数字双重曝光、拼贴、局部裁切和连续安装分别怎样改变空间感。图像只使用艺术家官网可追溯的直接文件。',
    projects: [
      {
        title: 'Erbgericht',
        cluster: '模拟大画幅 / 彩色闪光 / 建筑 / 记忆',
        period: '2014–2024',
        summary: '在祖父母所在的 Polenz 村历史旅馆 Erbgericht 进行十年拍摄。旅馆自 1898 年起承载多个政治时代与本地社群记忆；她并不把它拍成传统建筑档案，而是在真实房间里安装滤色闪光，让阴影在曝光瞬间重组墙面、家具和装饰。',
        actions: [
          '反复回到同一旅馆的走廊、楼梯、包间、墙角与陈设，逐步建立空间观察',
          '使用模拟 / 大画幅摄影而不是把空间直接交给后期合成',
          '在现场安装带彩色滤片的闪光灯，精确控制光向与阴影形状',
          '让影子复制、遮挡、折断原有建筑结构，使真实房间在单次曝光中产生看似 collage 的几何平面',
          '保留墙面裂纹、旧材料和装饰细节，让抽象图形仍能回到具体历史空间',
          '把摄影理解为与记忆类似的“不完整再现”，让观看者根据碎片重新推测一个并未被完整展示的地方',
        ],
        sourceUrl: andreaErbgericht,
        images: [
          img('https://andreagruetzner.de/system/files/665116/b6342b820ace000009/w_medium_Gruetzner-Erbgericht-2024_36.jpg', 'Erbgericht · 2024 interior', '© Andrea Grützner', andreaErbgericht, 'Artist website'),
          img('https://andreagruetzner.de/system/files/665116/6e342b824de5000007/w_medium_Gruetzner-Erbgericht-2024_35.jpg', 'Erbgericht · 2024 interior study', '© Andrea Grützner', andreaErbgericht, 'Artist website'),
        ],
        relations: [
          rel('奖项', 'Source-Cord Prize', 'Second prize with Erbgericht, 2014'),
          rel('展览', 'Robert Morat Gallery / Julie Saul Gallery', '2016 solo presentations'),
          rel('展览', 'Horsham Regional Gallery, Australia', '2018'),
          rel('展览', 'Robert Morat Gallery · Neue Räume', '2021'),
          rel('出版', 'Erbgericht · hartmann books', '2024 artist book'),
          rel('奖项', 'Rencontres d’Arles Book Award', 'Author Book Award shortlist, 2025'),
          rel('奖项', 'Best German Photobooks', 'Bronze, 2025'),
        ],
      },
      {
        title: 'Hive',
        cluster: 'RMIT / 数字双重曝光 / 拼贴 / 虚拟空间',
        period: '2017–2020',
        summary: '以 RMIT Melbourne 校园的建筑与室内设计为原料，把真实教育空间推成类似电子游戏关卡和线上界面的视觉迷宫。实体拍摄之后，她进一步使用数字双重曝光与 collage，让“建筑是否真实存在”变得越来越不确定。',
        actions: [
          '在 RMIT 校园拍摄相互嵌套的楼层、公共区、教学区与高度图形化的室内设计',
          '寻找原本就接近 comic / science-fiction set / theme park 的建筑局部',
          '将不同摄影画面进行 digital double exposure，使原本可辨认的空间产生重叠',
          '使用 collage techniques 继续制造不可能的入口、界面和层级关系',
          '把最终空间编排成需要“从一层进入下一层”的视觉路径，借此对应网络与游戏式导航',
        ],
        sourceUrl: andreaHive,
        images: [],
        relations: [
          rel('展览', 'RMIT Intersect · lightscapes', 'Melbourne, 2017'),
          rel('展览', 'Hive · Schierke Seineke Gallery', 'Frankfurt/Main, 2020'),
        ],
      },
      {
        title: 'das Eck',
        cluster: 'Koblenz / 战后建筑 / 图形化裁切',
        period: '2015–2016',
        summary: '在 Koblenz 城市摄影驻留中，她把战后城市建筑处理成近乎绘画和 graphic design 的结构研究。不是用广角建立建筑全貌，而是反复寻找墙角、边缘、反射、表面和几何对位。',
        actions: [
          '以 Koblenz 的公共空间和战后建筑作为固定城市研究对象',
          '放弃“建筑全景说明”，转而靠近边角、立面、接缝与材质',
          '利用摄影取景框把三维城市裁成二维图形关系',
          '让颜色、塑性和时期性设计细节成为辨认城市历史的线索',
          '把系列进一步整理成 2016 年摄影书 das Eck',
        ],
        sourceUrl: andreaWorks,
        images: [],
        relations: [
          rel('展览', 'Koblenzer Stadtfotografin exhibition', 'Koblenz, 2016'),
          rel('出版', 'das Eck · Kerber Verlag', '2016'),
          rel('展览', 'Museum Pfalzgalerie Kaiserslautern', '2017'),
        ],
      },
      {
        title: 'Tanztee',
        cluster: '舞会 / 身体碎片 / 色彩图案 / 连续安装',
        period: '2016–2017',
        summary: '仍然发生在 Erbgericht，但焦点从空房间转向周日下午舞会。她不以完整肖像记录年长参与者，而是用衣服、手、皱纹、珠宝与身体靠近的局部建立一个几乎抽象的社群肖像。',
        actions: [
          '进入 Erbgericht 定期举行的 Tanztee / afternoon dance，观察当地年长女性社群',
          '避免给出完整面孔和场景全景，使观看者不能依赖身份说明阅读人物',
          '抓取鲜艳衬衫、图案布料、手、珠宝、皱纹和身体接触等局部',
          '让运动中的线条和高饱和颜色成为画面主要结构',
          '展览时将照片边缘相接，形成连续的 movement-and-colour field，而不是一张张孤立肖像',
        ],
        sourceUrl: andreaExhibitions,
        images: [],
        relations: [
          rel('奖项', 'Pfalzpreis Kunst · Talent Award', '2016'),
          rel('展览', 'Mittelrhein-Museum Koblenz', '2016'),
          rel('展览', 'Center for Contemporary Photography · Melbourne', '2017'),
        ],
      },
      {
        title: 'Arkadia',
        cluster: '草地 / dichroic film / 生态 / 视觉变形',
        period: '2025–2026',
        summary: '近期把研究从人工建筑转向草地和生态系统。她在真实干草叶之间放置 dichroic film，使普通植物在拍摄现场产生分光、反射与颜色变异，让自然本身变成一种不稳定的光学空间。',
        actions: [
          '选择草地、枯草和细小植物作为近距离观察对象',
          '把 dichroic film 实际放置在干草叶之间，而不是后期套用彩色滤镜',
          '利用材料随视角改变反射 / 透射色彩的特性，让真实植物产生类似 chimera 的光学形态',
          '把历史性的“Arcadia / 理想自然”想象与当代脆弱生态并置',
          '通过摄影保留“真实草叶 + 人工光学材料”无法彻底分开的状态',
        ],
        sourceUrl: andreaWorks,
        images: [],
        relations: [
          rel('展览', 'Paris Photo · Robert Morat Gallery', '2025'),
          rel('展览', 'Arkadia · Robert Morat Galerie', 'Berlin, 2026'),
          rel('展览', 'Rasenstücke · TU Dresden', '2026'),
        ],
      },
    ],
    awards: [
      'Foam Talent 2016',
      'Pfalzpreis Kunst · Talent Award, 2016',
      'ING Unseen Talent Award, 2017',
      'Stiftungspreis Fotokunst / Foundation Award for Photographic Art, 2020',
      'Peter S. Reed Grant, 2020',
      'Best German Photobooks · Bronze for Erbgericht, 2025',
      'Rencontres d’Arles Book Award · Author Book Award shortlist, 2025',
    ],
    exhibitions: [
      'Erbgericht — Robert Morat Gallery / Julie Saul Gallery, 2016',
      'Erbgericht + Tanztee + das Eck — Galerie Rundgaenger, 2017',
      'Tanztee + Erbgericht — Center for Contemporary Photography Melbourne, 2017',
      'Hive — Schierke Seineke Gallery, 2020',
      'Erbgericht · Neue Räume — Robert Morat Gallery, 2021',
      'Arkadia — Paris Photo, 2025 / Robert Morat Galerie, 2026',
    ],
    sources: [
      { label: 'Artist · About / CV', url: andreaAbout },
      { label: 'Artist · Works', url: andreaWorks },
      { label: 'Erbgericht', url: andreaErbgericht },
      { label: 'Hive', url: andreaHive },
      { label: 'Exhibitions', url: andreaExhibitions },
      { label: 'Books', url: andreaBook },
      { label: 'Foam Talent 2016', url: foam2016 },
    ],
  },

  'maxime-guyon': {
    artistId: 'maxime-guyon',
    projectCoverage: '2 个已公开确认的核心摄影项目 + 1 个研究节点',
    imageCoverage: '0 / 3 节点已建立直链图像档案 · 来源页面已核对',
    note: 'Maxime Guyon 的公开作品结构比前两位更集中。本轮不为了“项目数量”把商业委托假装成独立艺术系列：只把 Aircraft、Swiss Design Awards 明确确认的 Technological Exaptation，以及 2024 Tokyo X_CHANGE 研究驻留作为三个可复查节点。作品图待找到稳定且可追溯的直接图像链接后再入库。',
    projects: [
      {
        title: 'Aircraft / Aircraft: The New Anatomy',
        cluster: '航空工业 / 大画幅数字摄影 / 超真实',
        period: '2017–2020',
        summary: '历时数年进入重要航空制造现场，近距离拍摄飞机结构和零件。图像严格遵守摄影的照明、构图与清晰度控制，却主动逼近 CGI / rendering 的视觉逻辑，使真实工业对象反而像“尚未落地的虚拟产品”。',
        actions: [
          '2017–2020 进入多个航空制造工厂并与行业参与者接触，持续建立航空器图像档案',
          '选择 aerodynamic structures、turboprops、hydraulic pistons、electrical connections、cabin skeleton 等结构部件',
          '使用 large-format digital photography，使整体结构到最小铆钉都保持极高可辨认度',
          '通过精确光线和构图去除工厂的声音感、气味感、人物和杂乱背景',
          '把部件从具体生产线中剥离，悬置在无天空、无时间、几乎无尺度的视觉空间',
          '将严格摄影控制与 virtual / post-production aesthetics 并置，使图像同时像真实照片与 3D 工业可视化',
          '最终编辑为 126 页、约 70 幅图像的 Aircraft: The New Anatomy 摄影书',
        ],
        sourceUrl: maximeMast,
        images: [],
        relations: [
          rel('奖项', 'MAST Photography Grant on Industry and Work', 'Finalist, 2019/2020'),
          rel('出版', 'Aircraft: The New Anatomy · Lars Müller Publishers', '2020'),
          rel('展览', 'Espace Images Vevey · Aircraft: The New Anatomy', '2021–2022'),
        ],
      },
      {
        title: 'Technological Exaptation',
        cluster: '摄影 / 技术功能 / 人工物演化',
        period: '2025',
        summary: 'Swiss Design Awards 2025 明确列出的摄影项目。当前公开资料确认了项目名称与提名关系，但尚未公开足够的逐件作品说明，因此档案刻意停在“已确认事实”层级，不用推测性描述假装完整。',
        actions: [
          '继续把 technological functions 与人工物的功能变化作为摄影研究对象',
          '以“exaptation / 原有结构被重新用于新功能”作为技术观察框架',
          '将摄影项目提交 Swiss Design Awards 并进入 2025 nomination',
          '当前档案等待艺术家或机构进一步公开完整制作说明与作品图后再扩写',
        ],
        sourceUrl: maximeSwiss,
        images: [],
        relations: [rel('奖项', 'Swiss Design Awards', 'Nomination, 2025')],
      },
      {
        title: 'X_CHANGE Vol.02 · Tokyo urban research',
        cluster: '城市研究 / 驻留 / 摄影调查',
        period: '2024',
        summary: '作为 YAU International Urban Exchange Program 第二期艺术家进入东京有乐町，以 Urban Survey and Expression 为框架进行短期研究、创作与交流。这里作为研究节点收录，而不把尚未形成稳定独立标题的产出强行命名成新系列。',
        actions: [
          '2024 年 9 月进入 YAU STUDIO 短期驻留',
          '以当代城市景观与艺术表达之间的关系作为 research brief',
          '与 Tokyo Photographic Research 及当地项目成员进行城市观察和图像交换',
          '将该节点记录为 ongoing practice context，而不是虚构一个艺术家未正式命名的项目',
        ],
        sourceUrl: maximeTokyo,
        images: [],
        relations: [rel('展览', 'X_CHANGE Vol.02 · YAU STUDIO', 'Tokyo, Sep 2024 · research residency / presentation')],
      },
    ],
    awards: [
      'Foam Talent 2016',
      'MAST Photography Grant on Industry and Work · Finalist, 2019/2020',
      'Swiss Design Awards · Nomination for Technological Exaptation, 2025',
    ],
    exhibitions: [
      'Foam Talent 2016 / travelling programme',
      'MAST Photography Grant on Industry and Work — Fondazione MAST, 2020',
      'Aircraft: The New Anatomy — Espace Images Vevey, 2021–2022',
      'X_CHANGE Vol.02 — YAU STUDIO, Tokyo, 2024',
    ],
    sources: [
      { label: 'Artist website', url: maximeHome },
      { label: 'Aircraft · artist page', url: maximeAircraft },
      { label: 'MAST Photography Grant · Aircraft', url: maximeMast },
      { label: 'Images Vevey · Aircraft', url: maximeImages },
      { label: 'Lars Müller Publishers · Maxime Guyon', url: maximePublisher },
      { label: 'Swiss Design Awards · Technological Exaptation', url: maximeSwiss },
      { label: 'Tokyo Photographic Research · X_CHANGE Vol.02', url: maximeTokyo },
    ],
  },

  'stefanie-moshammer': {
    artistId: 'stefanie-moshammer',
    projectCoverage: '5 个核心长期项目已建立制作方法档案',
    imageCoverage: '1 / 5 项目已建立图像档案 · 2 张官方作品 / 展览图',
    note: '本轮把 Stefanie Moshammer 从“Foam Talent 2016 + 地方 / 欲望”泛标签，扩成五种很不同的生产机制：陌生城市田野、女性与都市欲望、社交媒体自我呈现、摄影 + 视频的感官叙事，以及祖父母旧物的长期再编排。项目之间保留差异，不用一个“主观纪实”概念抹平。',
    projects: [
      {
        title: 'Vegas and She',
        cluster: 'Las Vegas / 女性 / 人工身份 / 摄影书',
        period: '2014–2015',
        summary: '以 Las Vegas 为“由欲望维持运转的机器”来拍摄城市与女性。她与当地女性相处、听取故事并建立信任，再把人物肖像同沙漠、酒店、粉色汽车、装饰、纹身等碎片混在一起；摄影书继续加入文学引用、账单和法律文件，使纪实与虚构无法彻底分开。',
        actions: [
          '在 Las Vegas 停留并接触当地女性，尤其关注舞者与通过人工身份参与城市欲望经济的人',
          '通过相处、对话和拍摄建立人物关系，而不是只在街头快速抓取“城市类型”',
          '同时拍摄 strip / downtown / suburbs / desert，让女性经验与城市空间结构并置',
          '收集粉色 Cadillac、植物、纹身、金色室内等“人工幻想”视觉符号，同时保留荒漠与逃离感',
          '由艺术家自己负责 photobook design & concept，把照片用不同尺寸、粉红边框与文字页重新排序',
          '将 Lewis Carroll、Nabokov 与艺术家文字加入书中，并用 hotel bill 和 inmate bail bond receipt 作为 endpapers',
        ],
        sourceUrl: stefanieVegas,
        images: [],
        relations: [
          rel('出版', 'Vegas and She · Fotohof edition', '2015 · 112 pages / 57 colour plates'),
          rel('展览', 'Fotohof Salzburg', '2015'),
          rel('展览', 'Gallery OstLicht · Vienna', '2016 solo'),
          rel('展览', 'Lothringer13 Halle · Munich', '2017'),
        ],
      },
      {
        title: 'Young Gods',
        cluster: '丹麦青年 / 社交媒体 / self-representation',
        period: '2015',
        summary: '以丹麦年轻男性和 adolescence 为对象，但把传统作者视角拆成两套材料：一套是 Moshammer 拍摄的照片，另一套是男孩自己在社交媒体上发布的图像。系列因此让“我怎么看他”与“他想怎样被看见”同时出现。',
        actions: [
          '在丹麦跟随和拍摄年轻男性的日常、游荡、冒险与身体状态',
          '从参与者自己的 social media 中选择他们主动发布的自我图像',
          '把 artist observation 与 self-representation 放进同一视觉序列',
          '避免把青年身份写成一个固定社会学类型，而是让两套观看方式互相矛盾',
          '同时制作 1分31秒 HD 有声视频 purity is the sharpest sound，使项目不只依赖静态照片',
        ],
        sourceUrl: stefanieYoung,
        images: [],
        relations: [rel('展览', 'The Body Politic · Gallery of Photography Dublin', '2016')],
      },
      {
        title: 'Land of Black Milk',
        cluster: 'Rio de Janeiro / favela / 主观纪实 / 摄影书',
        period: '2016–2017',
        summary: '以 Rio de Janeiro 作为互相冲突的多重世界，而不是一个可以被单一“城市主题”概括的地点。她混合建筑、favela 内部、人物、静物和偶遇，通过 seductive / violent、vulnerable / powerful 等矛盾来编辑视觉叙事。',
        actions: [
          '在 Rio 不同城区与 favela 之间移动，避免只拍海滩、嘉年华等既定城市符号',
          '混合 architecture、unexpected still life、local portraits 与微小观察，不建立单一新闻事件主线',
          '通过颜色和画面之间的反差，让富裕城市 / favela、诱惑 / 暴力等现实同时存在',
          '把项目从展览扩成 2017 Skinnerboox 摄影书',
          '摄影书使用 48 张彩色图像与 15 张黑白图像，并以不同纸张 / 法式折页封套建立阅读节奏',
        ],
        sourceUrl: stefanieLand,
        images: [
          img('https://stefaniemoshammer.com/site/assets/files/2172/moshammer_lobm_4061.300x0.1690402962.jpg', 'Land of Black Milk · exhibition / work image', '© Stefanie Moshammer', stefanieLand, 'Artist website'),
          img('https://stefaniemoshammer.com/site/assets/files/2177/stefanie-moshammer_ostlicht_1001.300x0.1690402963.jpg', 'Land of Black Milk · OstLicht presentation', '© Stefanie Moshammer', stefanieLand, 'Artist website'),
        ],
        relations: [
          rel('展览', 'Foam Talent · Gallery Mercatorplein / Unseen', 'Amsterdam, 2016'),
          rel('展览', 'Galerie OstLicht · Vienna', '2016 solo'),
          rel('展览', 'Foam Talent · Red Hook Labs', 'New York, 2017'),
          rel('展览', 'Foam Talent · Beaconsfield Gallery Vauxhall', 'London, 2017'),
          rel('出版', 'Land of Black Milk · Skinnerboox', '2017 · edition 350'),
          rel('展览', 'Nuremberg House · Krakow', '2019 solo'),
        ],
      },
      {
        title: 'Tomorrow of Yesterday',
        cluster: 'Haiti / 摄影 + 视频 / 感官叙事',
        period: '2016–2019',
        summary: '在 Haiti 的经验被她处理成关于水、热、风、植物和傍晚的感官结构。项目不是把地点转成新闻说明，而是在照片之外加入有声视频，通过持续时间和诗性文本让地点经验保持不可完全翻译。',
        actions: [
          '在 Haiti 现场持续记录环境、人物与日常片段',
          '用 water、heat、wind、plants、evening 等感官线索而不是新闻事件标题组织项目',
          '制作 5分05秒 full-HD colour sound video，使运动、环境声与静态摄影互补',
          '把个人文字与视觉材料并置，明确保留作者主观感受',
          '在不同城市个展中重新调整照片、视频与空间之间的节奏',
        ],
        sourceUrl: stefanieTomorrow,
        images: [],
        relations: [
          rel('展览', 'Flying High for Haiti fundraising exhibition · Miami', '2017'),
          rel('展览', 'Foam Photography Museum · Amsterdam', '2018 solo'),
          rel('展览', 'Modern Art Base · Shanghai', '2019 solo'),
        ],
      },
      {
        title: "Grandmother said it's okay",
        cluster: '家庭住宅 / reused objects / 织物 / 合作者',
        period: '2014–2026',
        summary: '长期围绕上奥地利祖父母的乡间住宅展开。祖父母保存和重新利用布料、衣服与物件的习惯成为项目方法；Moshammer 不只是记录这些东西，而是重新穿、重新摆、重新悬挂，并让祖母成为合作者。',
        actions: [
          '多年回到同一家庭住宅，持续梳理被祖父母保存、改造和重复使用的日常物',
          '从房屋中取出 fabrics、clothing、household objects，并重新组织成 deliberate photographic compositions',
          '让祖母穿上房中找到的服装参与拍摄，把她从“被记录的老人”变成 collaborator',
          '将照片之外的 textile pieces 直接悬挂到展览空间',
          '使用 discarded bed sheets、tablecloths 与 stones 发展 Heavy (s)layers 等实体装置',
          '用重复使用和重新配置的动作对照当代 throwaway culture，而不是仅依靠文字进行消费批评',
        ],
        sourceUrl: stefanieGrandmother,
        images: [],
        relations: [
          rel('展览', 'Villa Noailles · Hyères', '2020'),
          rel('展览', 'Fotohof Salzburg', '2025 solo'),
          rel('展览', 'Foto Forum Bozen', '2025 solo'),
          rel('展览', 'Museo Civico d’Arte Palazzo Ricchieri & MCP · Pordenone', '2026 solo'),
        ],
      },
    ],
    awards: [
      'Foam Talent 2016',
      'ING Unseen Talent Award · nomination',
      'C/O Berlin Talent Award, 2018',
      'Florentine Riem Vis Grant · first recipient',
    ],
    exhibitions: [
      'Land of Black Milk — Foam Talent / Unseen Amsterdam, 2016',
      'Land of Black Milk — Foam Talent travelling exhibitions, London + New York, 2017',
      'Tomorrow of Yesterday — Foam Photography Museum, Amsterdam, 2018',
      'Not just your face honey — C/O Berlin, 2018',
      'Grandmother said it’s okay — Villa Noailles, 2020',
      'Each Poison, A Pillow — Musée Jenisch Vevey, 2022',
      'We Love Our Customers — KUNST HAUS WIEN, 2023',
      'Grandmother said it’s okay — Fotohof Salzburg / Foto Forum Bozen, 2025',
    ],
    sources: [
      { label: 'Artist website', url: stefanieHome },
      { label: 'Artist · Information / exhibitions', url: stefanieInfo },
      { label: 'Vegas and She', url: stefanieVegas },
      { label: 'Young Gods', url: stefanieYoung },
      { label: 'Land of Black Milk', url: stefanieLand },
      { label: 'Tomorrow of Yesterday', url: stefanieTomorrow },
      { label: "Grandmother said it's okay", url: stefanieGrandmother },
      { label: 'Books', url: stefanieBooks },
      { label: 'C/O Berlin · Not just your face honey', url: stefanieCoBerlin },
    ],
  },
};
