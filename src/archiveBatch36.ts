import type { ArtistArchive, ArchiveImage, ArchiveRelation } from './archiveData';

const img = (url: string, title: string, credit: string, sourceUrl: string, sourceLabel: string): ArchiveImage => ({ url, title, credit, sourceUrl, sourceLabel });
const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

export const archiveBatch36: Record<string, ArtistArchive> = {
  'rosana-paulino': {
    artistId: 'rosana-paulino',
    projectCoverage: '6 个核心档案 / 身体 / 殖民科学项目已建立深度档案 · 1994–2026',
    imageCoverage: '3 / 6 项目已有代表图像',
    note: '按“家庭照片与殖民档案如何被转成实体材料”整理。Paulino 的关键不只是挪用旧图，而是转印、切割、缝合、刺绣、装订和植物 / 科学图谱并置，让图像表面真正发生伤口、连接和分类。',
    projects: [
      {
        title: 'Parede da Memória', cluster: 'family archive / amulet / multiplication', period: '1994–2015',
        summary: '从家庭相册中的黑人亲属肖像出发，把小幅面孔复制、转印到类似护身符 / 小布包的柔性支撑体上，再以大量重复单元组成墙面。私人家庭影像由单张纪念物变成集体记忆结构。',
        actions: ['从家庭相册挑选亲属肖像', '复制 / 放大并转印图像', '把肖像转移到柔性织物或小型对象上', '重复同一面孔形成多单元系统', '以密集墙面而非线性相册方式安装'],
        sourceUrl: 'https://www.moma.org/artists/133407-rosana-paulino', images: [], relations: []
      },
      {
        title: 'Bastidores', cluster: 'portrait / embroidery hoop / silencing', period: '1997',
        summary: '把黑人女性肖像转印到织物并绷在刺绣框中，再以粗重线迹缝住眼睛、嘴、喉咙等区域。刺绣从装饰性手工艺转为直接作用于肖像身体的动作。',
        actions: ['选择家庭 / 既有女性肖像', '将肖像转印到布面', '把布绷入圆形刺绣框', '用粗线覆盖或刺穿眼、嘴、喉部', '将多个圆形单元并列安装'],
        sourceUrl: 'https://www.moma.org/artists/133407-rosana-paulino', images: [],
        relations: [rel('收藏', 'MoMA', 'Rosana Paulino works represented in collection')]
      },
      {
        title: 'Assentamento', cluster: 'racial science / archival portrait / cut-and-stitch', period: '2012–2014',
        summary: '使用十九世纪种族科学摄影中的黑人女性身体图像，将档案照片放大后切开，再以明显缝线重新接合；被科学分类系统固定的身体因此出现真实的断裂、错位和重新连接。',
        actions: ['检索殖民 / 种族科学档案中的人体摄影', '放大并重新打印历史照片', '沿身体区域切割打印物', '以粗线将切开的身体重新缝合', '与植物、解剖 / 生物学图像和其他材料并置', '以大型装置而非单张照片呈现'],
        sourceUrl: 'https://www.moma.org/artists/133407-rosana-paulino',
        images: [img('https://www.moma.org/media/W1siZiIsIjQ0NDY5NSJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg', 'Assentamento — work from the series', '© Rosana Paulino', 'https://www.moma.org/artists/133407-rosana-paulino', 'MoMA')],
        relations: [rel('收藏', 'MoMA', 'Assentamento #1–#4')]
      },
      {
        title: '¿História Natural?', cluster: 'artist book / natural history / classification critique', period: '2016',
        summary: '把植物学、动物学、地图、殖民摄影和黑人身体图像压进一本仿自然史 / 科学图谱结构的艺术家书，让看似客观的分类法暴露其殖民与种族化观看。',
        actions: ['搜集自然史和殖民图像', '使用版画 / 印刷 / 拼贴方式重组图版', '模仿科学图谱的页面秩序', '让植物、动物、地图与黑人身体处在同一分类系统', '通过翻页 sequence 建立历史论证'],
        sourceUrl: 'https://www.moma.org/artists/133407-rosana-paulino',
        images: [img('https://www.moma.org/media/W1siZiIsIjQ0NDY5NCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg', '¿História Natural?, 2016', '© Rosana Paulino', 'https://www.moma.org/artists/133407-rosana-paulino', 'MoMA')],
        relations: [rel('收藏', 'MoMA', '¿História Natural?, 2016')]
      },
      {
        title: 'Geometria à Brasileira / recent collage works', cluster: 'modernism / collage / racialized image', period: '2010s–2020s',
        summary: '把巴西现代主义式几何、植物图形与黑人身体 / 历史档案重新叠加，使抽象几何不再被视为与殖民历史无关的“纯形式”。',
        actions: ['选择历史摄影与身体图像', '加入几何色块 / 图形结构', '拼贴植物与科学图形', '通过遮挡和切割改变原图权力关系', '以纸本和系列化方式输出'],
        sourceUrl: 'https://www.moma.org/artists/133407-rosana-paulino', images: [], relations: []
      },
      {
        title: 'Comigo ninguém pode', cluster: 'Brazil Pavilion / colonial history / cross-series installation', period: '2026',
        summary: 'Paulino 与 Adriana Varejão 共同代表巴西参加 2026 威尼斯双年展。国家馆语境把她长期关于黑人身体、植物、殖民科学和图像分类的研究推到更大规模的跨系列展示中。',
        actions: ['从既有长期项目中选择核心图像和材料', '在国家馆尺度重新编排作品关系', '把身体 / 植物 / 殖民档案并置', '让不同年代作品形成历史连续性而非单一新系列'],
        sourceUrl: 'https://www.labiennale.org/en/news/national-participations-and-collateral-events-biennale-arte-2026',
        images: [img('https://static.labiennale.org/files/styles/seo_thumbnail/public/arte/2022/600x600/rosana_paulino_biennale_arte_2022_600x600.jpg?itok=s7J4sDzn', 'Rosana Paulino — Venice context', '© Rosana Paulino / La Biennale di Venezia', 'https://www.labiennale.org/en/news/national-participations-and-collateral-events-biennale-arte-2026', 'La Biennale di Venezia')],
        relations: [rel('展览', 'Brazil Pavilion — Venice Biennale', '2026')]
      }
    ],
    awards: [],
    exhibitions: ['Venice International Exhibition 2022', 'Brazil Pavilion — Venice Biennale 2026'],
    sources: [
      { label: 'MoMA — Rosana Paulino', url: 'https://www.moma.org/artists/133407-rosana-paulino' },
      { label: 'La Biennale di Venezia — 2026 national participations', url: 'https://www.labiennale.org/en/news/national-participations-and-collateral-events-biennale-arte-2026' }
    ]
  },
  'abbas-akhavan': {
    artistId: 'abbas-akhavan',
    projectCoverage: '6 个场域 / 花园 / 战争遗产项目已建立深度档案 · 2013–2027',
    imageCoverage: '3 / 6 项目已有代表图像',
    note: '按“研究一个地点 → 抽取其中的建筑 / 植物 / 文化遗产元素 → 以临时或版本化装置重新组织”整理。Akhavan 常把作品称为 study / variation，强调每次展示都不是固定终稿。',
    projects: [
      {
        title: 'Study for a Monument', cluster: 'plants / war / bronze / anti-monument', period: '2013–ongoing',
        summary: '研究底格里斯—幼发拉底河流域原生、因战争与环境破坏而受到威胁的植物，将植物形态制作成粗糙青铜铸件，并直接散置在白色棉布上，替代传统英雄式纪念碑。',
        actions: ['研究美索不达米亚地区植物与战争生态史', '选择特定植物形态作为对象', '将植物转换成青铜铸件', '保留断裂 / 标本式状态', '不用基座，将铸件直接放在棉布和地面上', '根据不同场地重新排列'],
        sourceUrl: 'https://www.guggenheim.org/map/abbas-akhavan',
        images: [img('https://dza2a2ql7zktf.cloudfront.net/binaries-cdn/dqzqcuqf9/image/fetch/q_auto%2Ch_920%2Cw_920%2Cdpr_auto%2Cc_fit/https%3A/d2u3kfwd92fzu7.cloudfront.net/catalog/artwork/gallery/1663/THETHRIDLINE_BASEL15_026-1.jpg', 'Study for a Monument', '© Abbas Akhavan', 'https://www.guggenheim.org/map/abbas-akhavan', 'Guggenheim')],
        relations: [rel('收藏', 'Solomon R. Guggenheim Museum', 'Guggenheim UBS MAP Purchase Fund')]
      },
      {
        title: 'cast for a folly', cluster: 'museum ruin / documentary reconstruction / plaster cast', period: '2019–2023',
        summary: '从一张记录 2003 年伊拉克战争后巴格达伊拉克国家博物馆被洗劫景象的新闻 / 纪录照片出发，重建照片中可见的受损建筑与展陈残骸。作品把单张证据图像扩展成观众可进入的物质空间。',
        actions: ['选择一张具体纪录照片作为唯一主要视觉来源', '分析照片中的墙面、碎片、家具和建筑关系', '以铸模 / 仿制方式制作照片中可见元素', '在展厅重新搭建被破坏空间', '保留复制品与原始历史之间的差距'],
        sourceUrl: 'https://www.walkerart.org/press-releases/abbas-akhavan/',
        images: [img('https://walkerart.org/media/2026/07/Abbas-Akhavan-cast-for-a-folly-2019-2023.jpg', 'cast for a folly — installation view', '© Abbas Akhavan', 'https://www.walkerart.org/press-releases/abbas-akhavan/', 'Walker Art Center')],
        relations: [rel('收藏', 'Walker Art Center', 'acquired 2025')]
      },
      {
        title: 'curtain call, variations on a folly', cluster: 'Palmyra / architectural reconstruction / site-responsive', period: '2021–',
        summary: '围绕叙利亚 Palmyra 古城被毁遗产展开，把曾通向纪念性建筑的柱廊 / 建筑元素转成可以随展场重新配置的装置版本，强调文化遗产在战争、复制和展示中的不稳定状态。',
        actions: ['研究 Palmyra 的建筑与破坏史', '抽取柱廊 / 废墟等建筑语汇', '制作可移动、可重组的建筑复制物', '根据展厅尺度重新安装', '把复制与缺失同时保留'],
        sourceUrl: 'https://www.walkerart.org/press-releases/abbas-akhavan/', images: [], relations: []
      },
      {
        title: 'Variations on a Garden', cluster: 'garden / recurring site method / survey structure', period: '2015–2027',
        summary: '“花园”不是单一作品，而是贯穿 Akhavan 实践的工作模型：植物、庭院、围栏、遗迹与建筑环境根据每个展览地点重新组合。2026–2027 Walker 中期回顾以此为题，集中展示二十年场域实践。',
        actions: ['把花园理解为政治 / 建筑结构而非风景主题', '进入具体场地长期观察', '研究场地的历史、经济与非人生命', '选择植物、建筑材料和遗迹作为媒介', '每到新场地重新调整作品'],
        sourceUrl: 'https://www.walkerart.org/press-releases/abbas-akhavan/', images: [],
        relations: [rel('展览', 'Abbas Akhavan: Variations on a Garden — Walker Art Center', '2026–2027')]
      },
      {
        title: 'Entre chien et loup', cluster: 'Canada Pavilion / Wardian case / living plants', period: '2026',
        summary: '把加拿大馆整体重新理解为 Wardian case——十九世纪英国帝国运输植物的玻璃容器前身。在馆内设置定制水池、grow lights 和 Victoria 属巨型睡莲，把殖民植物运输史、Crystal Palace 与加拿大作为英联邦国家的历史叠加。',
        actions: ['研究 Canada Pavilion 建筑', '把建筑概念转换为大型植物运输容器', '建造定制水池', '安装植物生长灯', '在馆内培养 / 展示 Victoria 巨型睡莲', '让活体植物随展期变化成为作品时间'],
        sourceUrl: 'https://www.labiennale.org/en/art/2026/canada',
        images: [img('https://static.labiennale.org/files/styles/full_screen_slide/public/arte/2026/national_participations/canada/01-canada.jpg', 'Entre chien et loup — Canada Pavilion', '© Abbas Akhavan / Canada Pavilion', 'https://www.labiennale.org/en/art/2026/canada', 'La Biennale di Venezia')],
        relations: [rel('展览', 'Canada Pavilion — Venice Biennale', '2026'), rel('策展', 'Kim Nguyen', '2026')]
      },
      {
        title: 'Site-responsive working method', cluster: 'research / architecture / organic matter', period: '2000s–现在',
        summary: 'Akhavan 的项目通常始于与场地的长期对话：建筑结构、经济、使用者、动物和植物共同决定最终材料，因此同一作品经常以 study / variation 的形式继续变化。',
        actions: ['现场勘察与历史研究', '记录建筑和使用方式', '关注人类与非人生命', '从场地中抽取材料 / 图像 / 植物逻辑', '避免把第一次版本当成固定终稿'],
        sourceUrl: 'https://www.labiennale.org/en/art/2026/canada', images: [], relations: []
      }
    ],
    awards: ['Abraaj Group Art Prize 2014', 'Sobey Art Award 2015', 'Fellbach Triennial Award 2017', 'Hnatyshyn Foundation Mid-Career Award 2025'],
    exhibitions: ['But a Storm Is Blowing from Paradise — Guggenheim 2016', 'Canada Pavilion — Venice Biennale 2026', 'Variations on a Garden — Walker Art Center 2026–2027'],
    sources: [
      { label: 'Guggenheim — Abbas Akhavan', url: 'https://www.guggenheim.org/map/abbas-akhavan' },
      { label: 'Walker Art Center — Variations on a Garden', url: 'https://www.walkerart.org/press-releases/abbas-akhavan/' },
      { label: 'La Biennale di Venezia — Canada 2026', url: 'https://www.labiennale.org/en/art/2026/canada' }
    ]
  },
  'doruntina-kastrati': {
    artistId: 'doruntina-kastrati',
    projectCoverage: '6 个城市 / 劳动 / 身体研究节点已建立深度档案 · 2017–2025',
    imageCoverage: '3 / 6 项目已有代表图像',
    note: '从 Manifesta 的废墟环境到威尼斯国家馆，Kastrati 的变化很清楚：先研究城市开发与遗弃，再把劳动者的身体损耗、口述经验和工业材料变成可进入的雕塑 / 声音环境。',
    projects: [
      {
        title: 'Ring the Bells My Land', cluster: 'urban decay / environment / rubble', period: '2017–2022',
        summary: '在 Manifesta 14 的 Grand Hotel 中制造近似荒废行星的环境：红砖瓦砾、类似山羊的雕塑与卫星天线构成“被遗弃的岛屿”，对应 Prishtina 的城市开发、衰败和后人类想象。',
        actions: ['研究 Prishtina 的城市转型与废弃空间', '把建筑废料 / 红砖铺成可踩踏地景', '制作动物雕塑', '加入卫星天线等技术物件', '利用 Grand Hotel 现有窗景把城市纳入装置'],
        sourceUrl: 'https://manifesta14.org/participant/doruntina-kastrati/',
        images: [img('https://manifesta14.org/wp-content/uploads/2022/07/Doruntina-Kastrati-Ring-the-Bells-My-Land-2017-2022-photo-Atdhe-Mulla.jpg', 'Ring the Bells My Land', '© Doruntina Kastrati', 'https://manifesta14.org/participant/doruntina-kastrati/', 'Manifesta 14')],
        relations: [rel('展览', 'Manifesta 14 Prishtina', '2022')]
      },
      {
        title: 'Public Heroes and Secrets', cluster: 'public memory / sculpture / research', period: '2020',
        summary: '围绕公共纪念与私人 / 被隐藏记忆之间的差异发展雕塑和空间工作，继续把公共城市空间视为社会权力的物质记录。',
        actions: ['调查公共纪念与城市叙事', '收集当地历史 / 口述线索', '转换成雕塑与空间元素', '让纪念性与脆弱材料产生冲突'],
        sourceUrl: 'https://doruntinakastrati.com/', images: [], relations: []
      },
      {
        title: 'The Echoing Silences of Metal and Skin — research', cluster: 'female labour / oral history / bodily injury', period: '2023–2024',
        summary: '项目来自对 Prizren 一家土耳其软糖工厂十二位女性工人的研究。长期站立劳动导致部分工人接受膝关节置换；劳动造成的身体损耗成为国家馆的结构核心。',
        actions: ['访问 / 研究十二位女性工人的劳动经验', '记录长期站立、低工资和身体损耗', '关注膝关节置换手术与金属植入物', '把第一人称叙事转为雕塑与声音结构', '避免直接把工人身体当作图像消费'],
        sourceUrl: 'https://www.labiennale.org/en/art/2024/kosovo-republic', images: [], relations: []
      },
      {
        title: 'The Echoing Silences of Metal and Skin — sculptural system', cluster: 'metal / nut shells / industrial labour', period: '2024',
        summary: '最终装置中的金属雕塑依据制作 lokum 时使用的不同坚果外壳形态建模；“坚果壳”和膝关节中的金属植入物两条材料线被并置，使食品生产、女性身体和工业劳动发生直接关联。',
        actions: ['选择 lokum 原料中的坚果壳形态', '把有机外壳放大 / 转译为金属雕塑', '用金属材料呼应人体植入物', '把雕塑布置为观众可绕行 / 接近的空间系统', '加入声音 / 叙事层'],
        sourceUrl: 'https://www.labiennale.org/en/art/2024/kosovo-republic',
        images: [img('https://resources.koha.net/images/2024/April/19/c24abd6a-dda4-4797-b478-4ef494ee040b.webp?h=550&q=90&r=fill&w=860', 'The Echoing Silences of Metal and Skin', '© Doruntina Kastrati', 'https://www.labiennale.org/en/art/2024/kosovo-republic', 'Kosovo Pavilion / exhibition documentation')],
        relations: [rel('展览', 'Kosovo Pavilion — Venice Biennale', '2024'), rel('奖项', 'Special Mention for National Participation', '2024')]
      },
      {
        title: 'Venice Special Mention and institutional context', cluster: 'national pavilion / labour politics', period: '2024',
        summary: '威尼斯双年展评审特别提及该国家馆，理由集中在女性工业劳动对身体的磨损，以及坚果壳与人工膝关节金属部件之间形成的精准雕塑关联。',
        actions: ['将长期田野调查压缩为单一国家馆结构', '通过少量材料建立清晰的劳动—身体对应', '让观众通过尺度 / 行走而非说明文字先接触作品'],
        sourceUrl: 'https://www.labiennale.org/en/news/biennale-arte-2024-official-awards', images: [],
        relations: [rel('奖项', 'Biennale Arte 2024 — Special Mention for National Participation', 'Republic of Kosovo')]
      },
      {
        title: 'A Horn That Swallows Songs / later labour research', cluster: 'sound / sculpture / continuing labour research', period: '2025',
        summary: '后续双年展项目继续使用声音与雕塑处理劳动、身体和工业结构，把威尼斯国家馆建立的方法从单一工厂经验扩展到更广泛的社会环境。',
        actions: ['延续劳动与社会权利研究', '使用声音作为不可见劳动的载体', '与雕塑 / 建筑空间结合', '根据双年展场地重新组织'],
        sourceUrl: 'https://doruntinakastrati.com/', images: [],
        relations: [rel('展览', 'Sharjah Biennial 16', '2025'), rel('展览', '18th Istanbul Biennial', '2025')]
      }
    ],
    awards: ['Special Mention — Venice Biennale 2024 National Participation'],
    exhibitions: ['Manifesta 14 Prishtina 2022', 'Kosovo Pavilion — Venice Biennale 2024', 'Sharjah Biennial 16 — 2025', '18th Istanbul Biennial — 2025'],
    sources: [
      { label: 'Manifesta 14 — Doruntina Kastrati', url: 'https://manifesta14.org/participant/doruntina-kastrati/' },
      { label: 'La Biennale di Venezia — Kosovo 2024', url: 'https://www.labiennale.org/en/art/2024/kosovo-republic' },
      { label: 'La Biennale di Venezia — official awards 2024', url: 'https://www.labiennale.org/en/news/biennale-arte-2024-official-awards' }
    ]
  },
  'gliceria-tupinamba': {
    artistId: 'gliceria-tupinamba',
    projectCoverage: '6 个 Manto / 社群知识 / 返还政治节点已建立深度档案 · 2000s–2024',
    imageCoverage: '3 / 6 项目已有代表图像',
    note: '这里不把 Manto Tupinambá 当成普通纺织艺术品。档案按“博物馆研究 → 社群知识恢复 → 共同制作 → 旅行 / 探访欧洲馆藏 → 威尼斯国家馆”整理，作品本身同时是祖先、使者、知识载体与政治行动者。',
    projects: [
      {
        title: 'Researching historical Mantos Tupinambá', cluster: 'museum archive / indigenous knowledge / restitution', period: '长期',
        summary: 'Glicéria Tupinambá 持续研究自十七世纪起散落欧洲博物馆的历史 Tupinambá mantles，不只记录物件形式，而是把博物馆档案与 Serra do Padeiro、Olivença 社群中的知识重新连接。',
        actions: ['调查欧洲博物馆中的历史 mantles', '阅读档案 / 图像 / 收藏记录', '与 Tupinambá elders 和社群成员讨论制作知识', '比较博物馆分类与社群对祖先物的理解', '把研究转回当代共同制作'],
        sourceUrl: 'https://kaapuera.bienal.org.br/contribuicoes/cartas-a-instituicoes/', images: [], relations: []
      },
      {
        title: 'Manto Tupinambá — contemporary making', cluster: 'community making / sacred object / feather work', period: '2010s–2024',
        summary: '当代 mantle 由 Glicéria 与 Tupinambá 社群共同恢复制作知识。它不是历史复制品，而被理解为祖先、使者与发言者；制作过程因此与领土、精神世界和社群关系不可分。',
        actions: ['与 Serra do Padeiro 与 Olivença 社群共同工作', '恢复 / 延续传统编织与材料知识', '围绕 mantle 的社会和精神角色组织制作', '让成品继续参与社群与公共行动而非封闭为博物馆复制物'],
        sourceUrl: 'https://bienal.org.br/en/walking-birds/',
        images: [img('https://bienal.org.br/wp-content/uploads/2024/01/Gliceria-Tupinamba_Manto-tupinamba_2023_Cortesia-da-artista_Foto-Gliceria-Tupinamba.jpg', 'Manto Tupinambá, 2023', '© Glicéria Tupinambá', 'https://bienal.org.br/en/walking-birds/', 'Fundação Bienal de São Paulo')],
        relations: []
      },
      {
        title: 'Manto em movimento / institutional visits', cluster: 'travel / restitution dialogue / living archive', period: '2024',
        summary: '为威尼斯双年展前后，mantle 被带往保存 Tupinambá 相关祖先物的欧洲机构进行探访。艺术家向多个博物馆发函，使作品的“移动”本身成为与失散祖先、返还与机构责任建立关系的行动。',
        actions: ['列出保存 Tupinambá mantles / 祖先物的欧洲机构', '以社群与 mantle 的名义发送正式访问函', '协调艺术家与社群代表的移动', '让 contemporary mantle 与馆藏祖先物发生实体会面', '把机构回应和旅行过程纳入项目文档'],
        sourceUrl: 'https://kaapuera.bienal.org.br/contribuicoes/cartas-a-instituicoes/',
        images: [],
        relations: [rel('展览', 'Hãhãwpuá Pavilion related institutional journey', '2024')]
      },
      {
        title: 'Okará Assojaba', cluster: 'council / listening / elders / pavilion structure', period: '2024',
        summary: '在 Hãhãwpuá Pavilion 中，Glicéria 通过 mantles 召集 Okará Assojaba——一个“倾听长者”的议会式结构，把展览从个人艺术家展示转成社群知识和关系的公共空间。',
        actions: ['以 mantle 为核心召集社群 / 长者关系', '把倾听而非个人表达设为展示逻辑', '在国家馆语境中改变作者身份结构', '让作品、社群与政治主体性同时可见'],
        sourceUrl: 'https://www.labiennale.org/en/art/2024/brazil', images: [], relations: []
      },
      {
        title: 'Dobra do tempo infinito', cluster: 'video installation / fishing nets / weave relation', period: '2024',
        summary: '在与由 Tupinambá 青年和长者组成的 Grupo Atã 会面后形成的录像装置。作品使用拖网 / 渔网，将网的编织结构与传统服饰、时间和社群关系连接。',
        actions: ['与 Grupo Atã 的青年与长者会面', '记录 / 形成录像材料', '在空间中使用拖网 / 渔网', '把网的 weave 与传统服饰的织造关系并置', '用视频与实体网共同构成安装'],
        sourceUrl: 'https://www.labiennale.org/en/art/2024/brazil',
        images: [img('https://static.labiennale.org/files/styles/full_screen_slide/public/arte/2024/national_participations/brazil/01-brasil.jpg', 'Ka’a Pûera / Hãhãwpuá Pavilion installation', '© La Biennale di Venezia / artists', 'https://www.labiennale.org/en/art/2024/brazil', 'La Biennale di Venezia')],
        relations: [rel('展览', 'Hãhãwpuá Pavilion — Venice Biennale', '2024')]
      },
      {
        title: 'Ka’a Pûera: we are walking birds', cluster: 'national pavilion / indigenous resurgence / collective authorship', period: '2024',
        summary: '2024 巴西馆被重新命名为 Hãhãwpuá Pavilion，以祖先领土而非殖民国家名称组织展示。Glicéria 与 Olinda Tupinambá、Ziel Karapotó 及 Tupinambá 社群共同参展；展览发生在一件自 1699 年留在欧洲的历史 mantle 返回巴西的同一年。',
        actions: ['以 Hãhãwpuá 重命名国家馆语境', '把个人作品放进原住民集体作者结构', '并置 mantle、录像、社群知识与政治文本', '把历史返还事件与当代制作并置', '强调持续的领土 / 权利斗争而非“失落文化”叙事'],
        sourceUrl: 'https://www.labiennale.org/en/art/2024/brazil',
        images: [img('https://riff.media/cdn-cgi/image/width%3D3840%2Cquality%3D75/images/gliceria-tupinamba-federmantel-brasilianischer-pavillon-biennale-venezia-2024.jpg?s=a36a7700f4eecd00aa4d99eb48390dd9&w=1701', 'Manto Tupinambá — Hãhãwpuá Pavilion', '© Glicéria Tupinambá', 'https://www.labiennale.org/en/art/2024/brazil', 'Hãhãwpuá Pavilion documentation')],
        relations: [rel('展览', 'Hãhãwpuá Pavilion — 60th Venice Biennale', '2024')]
      }
    ],
    awards: [],
    exhibitions: ['Hãhãwpuá Pavilion — Venice Biennale 2024'],
    sources: [
      { label: 'La Biennale di Venezia — Brazil 2024', url: 'https://www.labiennale.org/en/art/2024/brazil' },
      { label: 'Fundação Bienal de São Paulo — Walking Birds', url: 'https://bienal.org.br/en/walking-birds/' },
      { label: 'Hãhãwpuá Pavilion — Letters to institutions', url: 'https://kaapuera.bienal.org.br/contribuicoes/cartas-a-instituicoes/' }
    ]
  }
};