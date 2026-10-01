import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const cherriNg = 'https://alicherri.com/projects/national-gallery';
const cherriVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/ali-cherri';
const cherriDam = 'https://alicherri.com/projects/the-dam';

const ashoonaIca = 'https://icamiami.org/exhibition/shuvinai-ashoona/';
const ashoonaVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/shuvinai-ashoona';
const veniceAwards = 'https://www.labiennale.org/en/news/biennale-arte-2022-official-awards';

const hershmanRoberta = 'https://www.lynnhershman.com/project/roberta-breitmore/';
const hershmanShadow = 'https://www.lynnhershman.com/project/shadow-stalker/';
const hershmanLogic = 'https://www.lynnhershman.com/project/logic-paralyzes-the-heart/';

const leighBrick = 'https://www.nga.gov/stories/articles/simone-leigh-acts-transformation';
const leighSovereignty = 'https://simoneleighvenice2022.org/sovereignty/';
const leighLoophole = 'https://simoneleighvenice2022.org/loophole-of-retreat/';

const baezMoma = 'https://www.moma.org/calendar/exhibitions/5028';
const baezCleveland = 'https://www.clevelandart.org/exhibitions/firelei-baez-vast-ocean-all-possibilities-19deg36169n-72deg13070w-41deg30323n';
const baezVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/firelei-b%C3%A1ez';

const baezaTmr = 'https://www.tmr.la/efelipebaeza2020';
const baezaPaley = 'https://www.maureenpaley.com/exhibitions/felipe-baeza-unruly-suspension';
const baezaVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/felipe-baeza';

export const archiveBatch72: Record<string, ArtistArchive> = {
  'venice-ali-cherri': {
    artistId: 'venice-ali-cherri',
    projectCoverage: '3 个档案 / 水坝 / 影像叙事关键阶段已建立深档案 · 2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。2022 是 Cherri 方法非常集中显现的一年：一边从博物馆破坏档案追踪“伤口”，一边在苏丹 Merowe Dam 现场把泥砖劳动、现代基础设施与神话怪物连接，再将同一地理继续发展成长片。',
    projects: [
      {
        title: 'If you prick us, do we not bleed?',
        cluster: 'museum archive / vandalism / relic-like assemblage',
        period: '2022',
        summary: '作为 National Gallery Artist in Residence，Cherri 研究馆藏中曾在公开展示时遭破坏的五幅绘画，不把 vandalism 当边缘事件，而是追踪报纸如何把画作描述成“受伤身体”、修复师如何像外科医生一样处理损伤。',
        actions: [
          '进入 National Gallery archive 寻找五起针对展出绘画的破坏记录',
          '比较新闻报道、保存档案与修复文件对同一损伤的不同语言',
          '提取“伤口、手术、康复”等身体隐喻作为项目结构',
          '把档案碎片、仿遗物式物件与展示柜组织成 cabinets of curiosity',
          '让博物馆如何制造作品的脆弱性、神圣性与修复权力成为观看对象',
        ],
        sourceUrl: cherriNg,
        images: [],
        relations: [rel('展览', 'National Gallery Artist in Residence presentation', '2022 · London')],
      },
      {
        title: 'Of Men and Gods and Mud',
        cluster: 'Merowe Dam / mud labour / 3-channel installation',
        period: '2022',
        summary: '三频道影像在苏丹北部 Merowe Dam 周边展开：季节性制砖工白天持续把泥塑成砖，夜间秘密用泥和废料建造一个逐渐获得身体的怪物。基础设施暴力、被迫迁移与泥土神话由此叠在一起。',
        actions: [
          '在 Nile River 的 Merowe Dam 周边调查水坝建设与搬迁历史',
          '跟随季节性 brickmaker 重复取泥、塑砖、晾晒等劳动',
          '编排夜间秘密建造泥与 scrap creature 的虚构叙事',
          '以三频道影像并置日常劳动、巨型工程与怪物生成',
          '将 Nile flood、golem、Noah’s Ark 等关于泥与洪水的神话作为结构参照',
        ],
        sourceUrl: cherriVenice,
        images: [],
        relations: [
          rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022'),
          rel('奖项', 'Silver Lion for a Promising Young Participant', 'Venice Biennale 2022'),
        ],
      },
      {
        title: 'The Dam',
        cluster: 'feature film / Sudan uprising / brick field + fiction',
        period: '2022',
        summary: '把 Merowe 一带的实地研究继续扩展为长片：主角 Maher 在传统砖场工作，同时在沙漠中建造神秘泥结构；现实中的苏丹政治动荡与虚构怪物逐步靠近。',
        actions: [
          '延续在 Merowe Dam 周边建立的地点与劳动关系',
          '以传统 brickyard 作为主角的真实工作环境',
          '把纪录性地景与编排式 fictional narrative 混合',
          '让 mud structure 在影片中逐渐从物件变成具有行动力的存在',
          '以 84 分钟长片把基础设施、革命时间与神话结构压进同一叙事',
        ],
        sourceUrl: cherriDam,
        images: [],
        relations: [rel('展览', 'Cannes Directors’ Fortnight', '2022 · feature film premiere context')],
      },
    ],
    awards: ['Silver Lion for a Promising Young Participant — Venice Biennale 2022'],
    exhibitions: ['National Gallery residency presentation — 2022', 'The Milk of Dreams — Venice Biennale 2022', 'The Dam — Cannes Directors’ Fortnight 2022'],
    sources: [
      { label: 'Ali Cherri · National Gallery project', url: cherriNg },
      { label: 'La Biennale · Ali Cherri 2022', url: cherriVenice },
      { label: 'Ali Cherri · The Dam', url: cherriDam },
    ],
  },

  'venice-shuvinai-ashoona': {
    artistId: 'venice-shuvinai-ashoona',
    projectCoverage: '3 个 Kinngait drawing / museum / Venice 方法节点已建立深档案 · 1996–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目 / 方法阶段档案，尚非作品全集。Ashoona 的作品不应只被归为“奇幻 Inuit 图像”：核心在于她自 1990 年代中期持续在 Kinngait Studios 的日常绘画实践，把社区生活、动物、人类、混种生物与宇宙观放在同一连续世界中。',
    projects: [
      {
        title: 'Kinngait daily drawing practice',
        cluster: 'community studio / pen + coloured pencil / daily accumulation',
        period: '1996–',
        summary: 'Ashoona 自 1996 年开始在 Kinngait Studios 持续绘画，并在 West Baffin Eskimo Cooperative 的共同工作环境中形成日常积累。作品常从熟悉社区生活出发，再让人、动物、海洋生物和想象体自然共存。',
        actions: [
          '长期在 Kinngait Studios 的共同工作空间持续绘画',
          '以 pen、pencil、coloured pencil 等直接媒介建立高密度线性图像',
          '从家庭、室内、海冰、狩猎与社区日常提取场景',
          '把 mermaids、human-animal hybrids、sea creatures 直接放入现实生活而不区分幻想与纪录',
          '通过每日重复而非一次项目调研累积几十年的社区视觉世界',
        ],
        sourceUrl: ashoonaIca,
        images: [],
        relations: [],
      },
      {
        title: 'Shuvinai Ashoona: Drawings — ICA Miami survey',
        cluster: 'museum survey / drawings + prints / Arctic change',
        period: '2021–2022',
        summary: 'ICA Miami 的首次美国美术馆个展将多年 drawings 与 prints 放在一起，使其作品如何记录 Indigenous Arctic life 的变化、同时不断生成超现实生物与关系网络变得可见。',
        actions: [
          '从多年 drawing practice 中选择不同阶段作品，而非只展示最新系列',
          '把 drawings 与 prints 并置，呈现图像从工作室到 cooperative print culture 的关系',
          '让社区现实、环境变化和 fantastical world-building 在同一展览中互相解释',
          '通过 museum survey 把单张图像重新组织成长期方法史',
        ],
        sourceUrl: ashoonaIca,
        images: [],
        relations: [rel('展览', 'Shuvinai Ashoona: Drawings — ICA Miami', '30 Nov 2021–1 May 2022')],
      },
      {
        title: 'The Milk of Dreams — two new drawings',
        cluster: 'species interdependence / hybrid bodies / Venice',
        period: '2021 works · exhibited 2022',
        summary: 'Venice 展出的两件 2021 新作把人和动物从“并列”推进到真正互相融合：webbed fingers、platypus mouth、tentacled walrus 与 chimerical beings 进入同一社会场景，使物种边界成为可变关系。',
        actions: [
          '继续使用 pen-and-pencil drawing 维持极高线条密度',
          '把人类身体直接改造成具有动物器官的 hybrid form',
          '让 animal figures 与家庭 / 社区人物共享同一空间而非作为象征背景',
          '通过镜像、包裹、服装和身体连接让“谁是人、谁是动物”保持模糊',
          '以两幅新作把 Inuit cosmogony 与当代社区生活共同带进 Venice 国际展',
        ],
        sourceUrl: ashoonaVenice,
        images: [],
        relations: [
          rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Central Pavilion'),
          rel('奖项', 'Special Mention', 'Venice Biennale 2022'),
        ],
      },
    ],
    awards: ['Royal Canadian Academy of Arts — appointed 2017', 'Gershon Iskowitz Prize — 2018', 'Special Mention — Venice Biennale 2022'],
    exhibitions: ['Shuvinai Ashoona: Drawings — ICA Miami 2021–2022', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'ICA Miami · Shuvinai Ashoona: Drawings', url: ashoonaIca },
      { label: 'La Biennale · Shuvinai Ashoona 2022', url: ashoonaVenice },
      { label: 'La Biennale · official awards 2022', url: veniceAwards },
    ],
  },

  'venice-lynn-hershman-leeson': {
    artistId: 'venice-lynn-hershman-leeson',
    projectCoverage: '3 个身份表演 / surveillance / AI-cyborg 关键阶段已建立深档案 · 1973–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。这里把 Hershman Leeson 的技术实践拉成一条长线：先在现实制度里制造一个虚构身份，再让数据库实时反向读取观众，最后把 AI、cyborg 与军事技术历史写进影像。',
    projects: [
      {
        title: 'Roberta Breitmore',
        cluster: 'fictional persona / real bureaucracy / performance archive',
        period: '1973–1978；archive continues',
        summary: 'Hershman Leeson 不是“扮演角色拍照”，而是在现实社会系统里制造 Roberta Breitmore：她住酒店、开户、办信用卡、租房、看心理医生、登报找室友，并形成一套真实可验证的身份文件和监控图像。',
        actions: [
          '为 Roberta 设计固定衣着、妆容、步态、语言、签名与书写方式',
          '让她真实进入银行、租房、医疗与消费系统',
          '申请 checking account、credit cards、driver’s license 等制度文件',
          '刊登 roommate ads 并与真实回应者见面',
          '以 drawings、surveillance photographs、checks、licenses 等 144+ 件材料形成身份档案',
          '后期让其他表演者也以 Roberta 身份出现，使一个人扩散成多个现实主体',
        ],
        sourceUrl: hershmanRoberta,
        images: [],
        relations: [],
      },
      {
        title: 'Shadow Stalker',
        cluster: 'predictive policing / live data / interactive projection',
        period: '2018–2021',
        summary: '三部分互动装置把 predictive policing、digital identity theft 与 data mining 直接作用到现场观众身上：输入一个 email，系统即可从网络数据库抓取私人信息，并把观众变成带数据的“数字影子”。',
        actions: [
          '制作解释 predictive policing、data mining 与 racial profiling 的影片',
          '让观众主动输入 email address 触发数据库检索',
          '把抓取到的旧地址、电话、关联人物等资料投射成 digital shadow',
          '建立按 ZIP code 显示 predicted crime percentage 的网站组件',
          '让 physical shadow 与 database identity 在同一现场重叠，使 surveillance 不再是抽象议题',
        ],
        sourceUrl: hershmanShadow,
        images: [],
        relations: [
          rel('展览', 'Manual Override — The Shed', '2019'),
          rel('奖项', 'Prix Ars Electronica Award of Distinction', '2020'),
        ],
      },
      {
        title: 'Logic Paralyzes the Heart',
        cluster: 'AI script / cyborg / warfare + surveillance history',
        period: '2022',
        summary: 'Joan Chen 饰演一位 65 岁 cyborg，回看 AI 与战争、控制和 surveillance 的历史。项目把生成式模型直接纳入剧本生产，而不是只把 AI 当成画面题材。',
        actions: [
          '与 GPT-3 协作生成 / 修改影片 script',
          '让 Joan Chen 同时承担 cyborg 与 human avatar 的双重位置',
          '把 AI、military systems、surveillance 与 body-data transformation 编入叙事',
          '结合 archival research、拍摄影像、compositing 与 installation presentation',
          '以 cyborg 的第一人称视角把技术史转成身体经验',
        ],
        sourceUrl: hershmanLogic,
        images: [],
        relations: [
          rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022'),
          rel('奖项', 'Special Mention / Jury recognition', 'Venice Biennale 2022'),
        ],
      },
    ],
    awards: ['Prix Ars Electronica Award of Distinction — Shadow Stalker, 2020', 'Special Mention — Venice Biennale 2022'],
    exhibitions: ['Roberta Breitmore — ongoing historical presentations', 'Manual Override — The Shed 2019', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'Lynn Hershman Leeson · Roberta Breitmore', url: hershmanRoberta },
      { label: 'Lynn Hershman Leeson · Shadow Stalker', url: hershmanShadow },
      { label: 'Lynn Hershman Leeson · Logic Paralyzes the Heart', url: hershmanLogic },
    ],
  },

  'venice-simone-leigh': {
    artistId: 'venice-simone-leigh',
    projectCoverage: '3 个 monument / pavilion / Black feminist convening 关键阶段已建立深档案 · 2019–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。这里不只收雕塑对象，也把 Leigh 的 collective / convening practice 作为正式方法：建筑身体、公共纪念碑、国家馆改造与 Black women 的知识生产共同构成同一实践。',
    projects: [
      {
        title: 'Brick House',
        cluster: 'monumental bronze / woman-house / Anatomy of Architecture',
        period: '2019',
        summary: 'Leigh 首件 monumental sculpture 将黑人女性上身与建筑体直接融合：16 英尺高的 bronze figure 把 Mousgoum teleuk 等非洲建筑形式、美国南方建筑记忆与女性身体压成一个 woman-house。',
        actions: [
          '先以大量 clay 塑造接近建筑尺度的女性头部与 bell-shaped body',
          '把 human bust 与 house / vessel 的轮廓融合而不做写实肖像',
          '研究 African architecture、African American material history 与 roadside vernacular forms',
          '将 clay model 转为大型 bronze casting',
          '把作品安装在 High Line Plinth，使黑女性形态真正进入城市 monument 尺度',
        ],
        sourceUrl: leighBrick,
        images: [],
        relations: [rel('展览', 'High Line Plinth — inaugural commission', '2019 · New York')],
      },
      {
        title: 'Sovereignty',
        cluster: 'U.S. Pavilion / façade transformation / bronze + ceramic',
        period: '2022',
        summary: '美国馆被改造成一件整体空间作品：Façade 以 thatch、steel、wood 改写原有新古典建筑，24 英尺 bronze Satellite 站在馆外，内部 bronzes 与 glazed stoneware 继续把女性身体、器皿和建筑合并。',
        actions: [
          '以 thatch、steel 与 wood 覆盖 / 重写 pavilion façade',
          '制作 24-foot bronze Satellite 作为馆外尺度锚点',
          '在室内配置 Last Garment、Jug、Anonymous、Sentinel、Sharifa、Martinique、Sphinx 等新作',
          '把 Baga ritual、Edgefield District Black material culture 与 1931 Paris Colonial Exposition 等历史材料并置研究',
          '通过 bronzes、ceramics 与 architecture 把 self-determination 从主题转成空间控制权',
        ],
        sourceUrl: leighSovereignty,
        images: [],
        relations: [
          rel('展览', 'United States Pavilion — 59th Venice Biennale', '2022 · commissioned by ICA/Boston'),
          rel('奖项', 'Golden Lion for Best Participant', 'Venice Biennale 2022'),
        ],
      },
      {
        title: 'Loophole of Retreat: Venice',
        cluster: 'convening / Black women intellectual labour / performance + dialogue',
        period: '2022',
        summary: '作为 Sovereignty 的扩展，Leigh 没有把国家馆实践限制在物件展示，而是将来自多地的 scholars、artists 与 activists 带到 Venice，围绕 Black women 的 intellectual and creative labour 组织三天对话、表演和呈现。',
        actions: [
          '把 2019 Guggenheim 一日 convening 扩展成三天 Venice project',
          '与 curator Rashida Bumbray 及 advisors Saidiya Hartman、Tina Campt 建立知识框架',
          '邀请跨艺术、学术、activism 的参与者共同生产议程',
          '混合 dialogue、performance、presentation，而非只采用 panel discussion',
          '把 collective knowledge production 作为国家馆作品系统的组成部分',
        ],
        sourceUrl: leighLoophole,
        images: [],
        relations: [rel('展览', 'Loophole of Retreat: Venice — Fondazione Giorgio Cini', '7–9 Oct 2022')],
      },
    ],
    awards: ['Hugo Boss Prize — 2018', 'Golden Lion for Best Participant — Venice Biennale 2022'],
    exhibitions: ['Brick House — High Line, 2019', 'Sovereignty — U.S. Pavilion, Venice 2022', 'Loophole of Retreat: Venice — 2022'],
    sources: [
      { label: 'National Gallery of Art · Brick House context', url: leighBrick },
      { label: 'U.S. Pavilion · Sovereignty', url: leighSovereignty },
      { label: 'U.S. Pavilion · Loophole of Retreat', url: leighLoophole },
    ],
  },

  'venice-firelei-baez': {
    artistId: 'venice-firelei-baez',
    projectCoverage: '3 个 erased history / architectural ruin / map-painting 关键阶段已建立深档案 · 2018–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。重点看 Báez 如何让 erased Afro-Caribbean histories 重新获得身体：没有历史肖像时主动制造图像；面对殖民地图时直接在地图上覆盖新的身体与植物；面对废墟时把建筑变成可迁移的、带声音的生态身体。',
    projects: [
      {
        title: 'For Améthyste and Athénaïre (Exiled Muses Beyond Jean Luc Nancy’s Canon), Anacaonas',
        cluster: 'site-specific portrait / erased Haitian history / Modern Window',
        period: '2018–2019',
        summary: '围绕 Haiti 第一任国王与王后的女儿 Améthyste、Athénaïre Christophe 展开。由于没有已知历史肖像，Báez 不用替身“复原”她们，而是制造一种允许观众共同想象其 presence 的公共纪念图像。',
        actions: [
          '研究 Haitian Revolution 后两位女性的流亡历史',
          '确认历史记录中缺乏她们的已知 painting / photograph',
          '避免用别人的脸替代历史人物，而通过 direct gaze 等方式构造心理 presence',
          '依据 MoMA Modern Window 的玻璃建筑界面制作 site-specific installation',
          '让被历史擦除的 Afro-Caribbean women 以城市公共窗口尺度重新出现',
        ],
        sourceUrl: baezMoma,
        images: [],
        relations: [rel('展览', 'The Modern Window: Firelei Báez — MoMA', '17 Nov 2018–15 Jun 2019')],
      },
      {
        title: 'To breathe full and free / the vast ocean of all possibilities',
        cluster: 'Sans-Souci ruins / mixed-media architecture / 32-channel sound',
        period: '2021–2022',
        summary: '持续重想 Haiti Sans-Souci Palace ruins：大型 mixed-media structure 仿佛从地板破出，West African indigo pattern、Caribbean marine plants 与现代海洋垃圾共同覆盖废墟，并由 32 条 audio tracks 形成循环声场。',
        actions: [
          '研究 Sans-Souci Palace 的建筑、革命史与废墟状态',
          '使用 acrylic、polystyrene foam、plywood、aluminum、rubber、perforated tarp 搭出大型建筑残体',
          '把 West African indigo printing、Caribbean marine plants 与 ocean waste 图像覆盖到表面',
          '制作 32-track、约 48 分钟 looped sound component',
          '让“废墟”像可跨越时间和地点的身体一样从美术馆地板中重新生长',
        ],
        sourceUrl: baezCleveland,
        images: [],
        relations: [rel('展览', 'the vast ocean of all possibilities — Cleveland Museum of Art / FRONT', '16 Jul 2022–15 Jan 2023')],
      },
      {
        title: 'The Milk of Dreams — map-layered paintings',
        cluster: 'historical maps / paint drips / Afro-diasporic memory',
        period: '2022',
        summary: 'Venice 新作继续把 female avatars、plants、landscape 与 bodies of water 叠在放大的历史 maps、trade routes 和 travelogues 上，并让 paint drips 超出画布边缘，使绘画表面像记忆和身体继续外溢。',
        actions: [
          '放大 historical maps、trade routes、travelogues 作为绘画底层',
          '在既有权力图像之上绘制 hybrid female / plant / water forms',
          '通过 drips 与 calligraphic gestures 让图像延伸到 canvas 边界之外',
          '让 marks 同时暗示 nautical body 与 hair tendrils，而不固定成单一形象',
          '用实际手势覆盖地图分类，把 Afro-diasporic cultural memory 变成画面生成过程',
        ],
        sourceUrl: baezVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: [],
    exhibitions: ['The Modern Window — MoMA 2018–2019', 'The Milk of Dreams — Venice 2022', 'the vast ocean of all possibilities — Cleveland 2022–2023'],
    sources: [
      { label: 'MoMA · The Modern Window: Firelei Báez', url: baezMoma },
      { label: 'Cleveland Museum of Art · the vast ocean of all possibilities', url: baezCleveland },
      { label: 'La Biennale · Firelei Báez 2022', url: baezVenice },
    ],
  },

  'venice-felipe-baeza': {
    artistId: 'venice-felipe-baeza',
    projectCoverage: '3 个 print history / fragmented body / metamorphosis 关键阶段已建立深档案 · 2020–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Baeza 的“混种身体”不是单纯奇幻图像，而建立在 printmaking 历史上：蚀刻、丝网、photogravure 曾服务殖民分类，他把同样技术重新用于拆解被固定的 racialized / queer body。',
    projects: [
      {
        title: 'Through the Flesh to Elsewhere',
        cluster: 'printmaking history / Othering / decade survey',
        period: '2020',
        summary: 'The Mistake Room 首次机构个展汇集十年六十余件作品，把 Baeza 作为 printmaker 的起点放到前台：etching、print、silkscreen、photogravure 既是材料，也被当作曾参与殖民“他者化”生产的历史技术。',
        actions: [
          '系统回看 etching、silkscreen、photogravure 等不同 print technologies 的历史用途',
          '把 historically racialized / queer bodies 的图像重新剪切和组合',
          '通过 layering、擦除与重复印刷破坏单一稳定肖像',
          '把十年作品按“身体如何被权力塑造 / 逃逸”重新编辑成机构展览',
          '让技术史成为作品论证的一部分，而不只是个人形式偏好',
        ],
        sourceUrl: baezaTmr,
        images: [],
        relations: [rel('展览', 'Through the Flesh to Elsewhere — The Mistake Room', '15 Feb–12 Mar 2020')],
      },
      {
        title: 'Unruly Suspension',
        cluster: 'pre-Columbian archive / cut paper / embroidery + twine',
        period: '2021',
        summary: '系列把人体碎片与 1946 年《Arte Precolombino Del Occidente de México》中的 pre-Columbian objects 重新连接，并把标题中的 Arte 改成 Gente，使被民族志 / 国家文化分类的“物”重新返回为复杂主体。',
        actions: [
          '从 1946 年 pre-Columbian art publication 中截取 historical object images',
          '把 human body fragments 与 archaeological imagery 重新组合',
          '使用 ink、embroidery、acrylic、graphite、varnish、cut paper、twine / yarn 建立多层表面',
          '让身体保持透明、碎裂和悬置，拒绝完整稳定轮廓',
          '通过把 Arte 改为 Gente 直接质疑 museum / nationalist gaze 如何把人转成文化对象',
        ],
        sourceUrl: baezaPaley,
        images: [],
        relations: [rel('展览', 'Unruly Suspension — Maureen Paley', '2021 · London')],
      },
      {
        title: 'I open against my will dreaming of other planets / Venice works',
        cluster: 'egg tempera + collage / sanding + carving / human-flora body',
        period: '2018–2022；Venice 2022',
        summary: '自 2018 年持续发展的 body-transformation 系列在 Venice 进一步放大：人物处在 half-human / half-flora 状态，植物从头部、躯干与口部生长；形式上则通过不断加层、打磨、雕刻和改写产生真正的表面厚度。',
        actions: [
          '同时使用 collage、mixed media、egg tempera 与 printmaking',
          '在 panel、canvas、paper 上反复增加 material layers',
          '再通过 sanding、carving、cutting 改写已经完成的表面',
          '把 foliage 直接长入 head、torso、limbs、mouth，使身体不再有稳定物种边界',
          '用制作中的“加层—破坏—再生”对应 migration、desire 与身份 metamorphosis',
        ],
        sourceUrl: baezaVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: [],
    exhibitions: ['Through the Flesh to Elsewhere — The Mistake Room 2020', 'Unruly Suspension — Maureen Paley 2021', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'The Mistake Room · Through the Flesh to Elsewhere', url: baezaTmr },
      { label: 'Maureen Paley · Unruly Suspension', url: baezaPaley },
      { label: 'La Biennale · Felipe Baeza 2022', url: baezaVenice },
    ],
  },
};
