import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const ottomanelliCollateral = 'https://www.domusweb.it/en/photo-essays/2013/05/14/collateral_landscape_0.html';
const ottomanelliMapping = 'https://www.abitare.it/en/archive/2011/12/22/why-mapping-identity/';
const ottomanelliBigEye = 'https://www.domusweb.it/en/art/2018/07/26/assisi-the-photography-of-antonio-ottomanelli-in-dialogue-with-ghirri-and-matta-clark.html';
const ottomanelliThirdIsland = 'https://www.artribune.com/mostre-evento-arte/the-third-island-4/';
const ottomanelliCamera = 'https://www.fpmagazine.eu/eng/news/Kabul_Baghdad-558/?lang=eng';
const ottomanelliCollection = 'https://www.imagopress.it/chi-siamo/';

const strokinsHome = 'https://strokins.info/';
const strokinsAbout = 'https://www.strokins.info/about/';
const strokinsPeople = 'https://www.lensculture.com/articles/andrejs-strokins-people-in-the-dunes';
const strokinsPalladium = 'https://strokins.info/art-projects/palladium/';
const strokinsCosmic = 'https://cphmag.com/conv-strokins/';
const strokinsArchiveInterview = 'https://www.new-east-archive.org/features/show/6907/new-east-photo-prize-strokins-latvia-photography-documentary-collage';
const strokinsFire = 'https://artviewer.org/riga-international-biennial-of-contemporary-art/';
const strokinsFireContext = 'https://app.frieze.com/article/1st-riga-international-biennial-contempoary-art';

const szwarcHome = 'https://www.ilonaszwarc.com/';
const szwarcAbout = 'https://www.ilonaszwarc.com/about/';
const szwarcAmerican = 'https://www.ilonaszwarc.com/projects/american-girls/';
const szwarcRodeo = 'https://www.ilonaszwarc.com/projects/rodeo-girls/';
const szwarcTriptych = 'https://www.lensculture.com/articles/ilona-szwarc-i-am-a-woman-and-i-feast-on-memory';
const szwarcCast = 'https://www.ilonaszwarc.com/projects/ilona-szwarc-i-am-a-woman-and-i-cast-no-shadow/';
const szwarcUnsex = 'https://www.makeroom.la/exhibitions/8-ilona-szwarc-unsex-me-here';
const szwarcVirgin = 'https://www.ilonaszwarc.com/projects/virgin-soap/';
const szwarcVirginGallery = 'https://dianerosenstein.com/exhibitions/77-ilona-szwarc-virgin-soap/';

export const archiveBatch66: Record<string, ArtistArchive> = {
  'antonio-ottomanelli': {
    artistId: 'antonio-ottomanelli',
    projectCoverage: '4 个核心研究项目 / 平台已建立深档案',
    imageCoverage: '0 / 4 项目已建立可靠直链图像 · 当前优先保留机构 / 出版来源',
    note: '本轮把 Antonio Ottomanelli 从“研究型建筑摄影”一句话展开成四种不同的空间方法：跨城市地景调查、居民记忆地图、反向观察军事监控设备，以及组织集体基础设施调查。重点记录他如何改变“摄影师站在哪里、谁来提供信息、图像怎样被重新组合”，而不是把战区题材本身当成方法。',
    projects: [
      {
        title: 'Collateral Landscape', cluster: '冲突地景 / 城市调查 / 可重排安装', period: '2009–2014',
        summary: '从 Kabul 开始，随后进入 Baghdad、Sadr City、Herat、Dokan、New York 与 Gaza 等地，追踪 9/11 后冲突、重建与安全机制如何长期写进城市表面。项目不把战斗瞬间当中心，而把道路、住宅、政府建筑、公共空间与重建区视为真正的“冲突现场”。',
        actions: [
          '在多个城市进行地面 reconnaissance，以步行 / 移动路线而不是新闻事件时间线建立观察框架',
          '拍摄 gated communities、议会建筑、道路、住宅、商业区与重建空间，把“新建”也作为冲突后果',
          '同时保留现场书写与观察笔记，使摄影不是唯一证据形式',
          '邀请当地向导为部分图像手写地景说明，让外部摄影师的观看与内部经验发生并置',
          '在 Triennale 展览中让照片位置保持可变，观众能够重新建立城市之间的对应关系',
          '把图像重新带回 / 分发给相关居民，让档案不只停留在欧洲展览系统',
        ],
        sourceUrl: ottomanelliCollateral,
        images: [],
        relations: [
          rel('展览', 'Collateral Landscape · Triennale Milano', '2013 · curated by Joseph Grima'),
          rel('出版', 'Domus · Collateral Landscape', '2013 photo essay / research text'),
        ],
      },
      {
        title: 'Mapping Identity — Baghdad', cluster: '参与式制图 / 记忆 / Baghdad workshop', period: '2011–2012',
        summary: '与 Baghdad University Fine Arts Faculty 学生共同进行的城市制图项目。官方地图在这里被降到次要位置：参与者根据每天真正经过的路线、无法进入的区域和战前记忆重新画城市，使地图成为身体经验与冲突边界的记录。',
        actions: [
          '与 Baghdad Fine Arts Faculty 学生共同建立工作坊，而不是独自从外部完成城市调查',
          '要求参与者凭借记忆与日常路线绘制自己实际生活的 Baghdad 局部',
          '以黑色 / 红色等区分战前结构与战争后改变、补充的城市信息',
          '把 checkpoint、爆炸墙、绕行路线与居民习惯加入通常的抽象街道图中',
          '把多个个人地图重新拼接为一张不追求统一比例、但更接近生活经验的城市图',
          '将制图过程拍摄 / 记录并转为 film、展览和后续出版材料',
        ],
        sourceUrl: ottomanelliMapping,
        images: [],
        relations: [
          rel('展览', 'Kabul + Baghdad · CAMERA Torino', '2015–2016'),
          rel('出版', 'Big Eye Kabul – Mapping Identity · Artphilein Editions', '2022 exhibition catalogue'),
        ],
      },
      {
        title: 'Big Eye Kabul', cluster: 'persistent surveillance / blimps / reverse gaze', period: '2012–2014',
        summary: 'Kabul 上空的美国军事 surveillance blimps 装有电子传感器，被当地称为“Big Eyes”。Ottomanelli 没有尝试获得机器所掌握的视角，而是在城市地面持续拍这些监控设备，把通常隐形的权力关系转成可见的地景对象。',
        actions: [
          '沿 Kabul 城市移动并不断寻找 surveillance blimps 在不同街区和天际线中的位置',
          '从地面拍摄正在从高空监视地面的人造物，形成“观察观察者”的反向观看',
          '避免用戏剧化战争场景解释飞艇，让它像路灯、山体、建筑一样进入普通城市构图',
          '通过重复出现强调监控设施怎样从异常军事设备变成城市居民每天可见的基础设施',
          '在后续展览与出版中把 Big Eye 与 Mapping Identity 并置：一边是自上而下的机器视野，一边是居民自下而上的经验地图',
        ],
        sourceUrl: ottomanelliBigEye,
        images: [],
        relations: [
          rel('出版', 'Big Eye Kabul · Endless Delight Publishing', 'early publication with Joseph Grima introduction'),
          rel('展览', 'Kabul + Baghdad · CAMERA Torino', '2015–2016'),
          rel('出版', 'Artphilein Cahier nr.2 · Big Eye Kabul', '2022'),
        ],
      },
      {
        title: 'The Third Island', cluster: 'Calabria / infrastructure / collective observatory', period: '2014–2016',
        summary: '以 Calabria 的大型基础设施和地域转型作为“International Observatory of Major Works”的首个调查章节。这里 Ottomanelli 不再只是拍摄者，同时成为项目设计者和策展人：他邀请多位作者共同进入同一地区，让摄影、技术资料和社会研究互相校正。',
        actions: [
          '把大型基础设施、道路工程与区域经济 / 社会变化设为共同研究问题',
          '邀请多位摄影师在 Calabria 开展并行 field campaigns，而不是要求统一视觉风格',
          '将摄影与技术、历史和社会材料汇总成跨学科 publication',
          '通过展览重新排列多位作者的观察，使“地区”而不是个人风格成为共同对象',
          '把项目建立为可继续扩展的 observatory 模型，而不是一次性摄影委托',
        ],
        sourceUrl: ottomanelliThirdIsland,
        images: [],
        relations: [
          rel('展览', 'The Third Island · CRAC Lamezia Terme', '2016'),
          rel('出版', 'The Third Island · Planar', '2016 interdisciplinary book'),
        ],
      },
    ],
    awards: [
      'Foam Talent 2016',
      'Lucie Foundation International Photography Awards · Honorable Mentions in Architecture and Art',
    ],
    exhibitions: [
      'Collateral Landscape — Triennale Milano, 2013',
      'Kabul + Baghdad — CAMERA, Torino, 2015–2016',
      'Eye-Hand Span — Montrasio Arte, Milano, 2016',
      'The Third Island — CRAC, Lamezia Terme, 2016',
      'The Distribution of the Sensible — UniversoAssisi, 2018',
    ],
    sources: [
      { label: 'Domus · Collateral Landscape', url: ottomanelliCollateral },
      { label: 'Abitare · Mapping Identity', url: ottomanelliMapping },
      { label: 'Domus · Big Eye Kabul', url: ottomanelliBigEye },
      { label: 'Artribune · The Third Island', url: ottomanelliThirdIsland },
      { label: 'CAMERA · Kabul + Baghdad', url: ottomanelliCamera },
      { label: 'ImagoPress · bio / collections', url: ottomanelliCollection },
    ],
  },

  'andrejs-strokins': {
    artistId: 'andrejs-strokins',
    projectCoverage: '5 个核心项目 / 方法节点已建立深档案',
    imageCoverage: '0 / 5 项目已建立可靠直链图像 · 暂不以转载缩略图冒充作品档案',
    note: 'Andrejs Strokins 的价值在于方法跨度很大，但每一条都非常清楚：多年慢速纪实、给手机摄影设定硬规则、编辑匿名档案、扫描苏联印刷品做数字拼贴、再到把消防照片和烧毁物件组织成空间。本站把这些方法分开记录，避免把所有作品都归成“后苏联摄影”。',
    projects: [
      {
        title: 'People in the Dunes', cluster: 'Bolderāja / long-term documentary / urban periphery', period: '2011–2014+',
        summary: '围绕 Riga 外缘 Bolderāja 与 Daugavgrīva 展开的长期纪实。这里曾有渔村、军事区域、Soviet blockhouses 和港口工业；Strokins 把人物、海岸、森林、铁路、废弃 barracks 和日常商业共同放入系列，建立“地方与居民如何互相塑造”的慢速观察。',
        actions: [
          '多年反复前往 Bolderāja 与 Daugavgrīva，而不是一次性完成新闻式拍摄',
          '同时拍人、住宅、海滩、森林、工业设施、交通和废弃军事建筑，保持地理结构完整',
          '进入 predominantly Russian-speaking 社群的日常场景，但不强迫人物承担“代表某一族群”的功能',
          '让 abandoned barracks 中的儿童书、维修广告、塑料雕塑等小物件与正式人物肖像具有同等叙事重量',
          '通过年份与地点 caption 保留地理和时间信息，让系列能作为城市边缘长期变化档案',
        ],
        sourceUrl: strokinsPeople,
        images: [],
        relations: [
          rel('奖项', 'Kaunas Photo Star', '2013'),
          rel('展览', 'People in the Dunes · Kaunas Photo Gallery', '2014 · solo'),
          rel('展览', 'Latvian Museum of Photography', '2015'),
          rel('奖项', 'LensCulture Emerging Talent', '2014'),
        ],
      },
      {
        title: 'Palladium', cluster: 'found archive / Soviet cinema / editing as authorship', period: 'archive 1957–1963 · book 2017',
        summary: '项目来自 Riga Palladium 电影院被发现的一整批匿名档案。照片由影院内部工作人员在 1957 年重开到 1963 年再次失火之间拍摄：既有官方活动，也有舞台、员工和庆祝。Strokins 的创作动作主要发生在寻找、筛选、排序与出版，而非重新拍摄。',
        actions: [
          '接手 / 研究 Palladium cinema 的匿名摄影档案，并确认其机构与时间背景',
          '从大量工作记录中区分官方 agenda、宣传活动、后台劳动和非正式庆祝',
          '保留 unknown photographer 的匿名性，让档案内部视角本身成为历史证据',
          '以 sequence 而不是 explanatory chronology 组织照片，让日常和 propaganda 在书中彼此碰撞',
          '与 Orbita 合作把档案整理为 96 页、500 册的摄影书',
        ],
        sourceUrl: strokinsPalladium,
        images: [],
        relations: [rel('出版', 'Palladium · Orbita', '2017 · 96 pages / edition 500')],
      },
      {
        title: 'Cosmic Sadness', cluster: 'smartphone / custom filter / Instagram / fixed rule', period: '2014–2019',
        summary: '把手机摄影变成一套明确的自我约束实验：固定竖幅、4×5、同一套蓝灰颗粒滤镜，并直接在日常移动中拍摄。图像最初随着生活实时出现在 Instagram，因此“发布”不是项目结束后的宣传，而是生成机制的一部分。',
        actions: [
          '使用 Android app Vignette 并自行调整出固定滤镜参数',
          '规定只拍竖构图与 4×5 aspect ratio，减少每次拍摄重新选择的变量',
          '尽量取消后期，把判断集中在现场的时机、距离与偶然关系',
          '把每天看见的 ordinary scenes 连续上传 Instagram，使 private visual diary 立即进入公共空间',
          '后续再从大量实时图像中重新编辑展览 / print 版本，形成与社交媒体不同的观看节奏',
        ],
        sourceUrl: strokinsCosmic,
        images: [],
        relations: [
          rel('展览', 'Riga Photography Biennial Award Exhibition', '2016'),
          rel('展览', 'Cosmic Sadness · ISSP Gallery', '2020'),
        ],
      },
      {
        title: 'Disorders and Obstacles / Collages', cluster: 'discarded Soviet print / scan / Photoshop', period: '2015–2016',
        summary: '在长期新闻摄影经验之后，他开始从被丢弃的 Soviet-era books 和 magazines 里取图。旧图不被原样保存，而被扫描、切割并在 Photoshop 里重新组合，形成对“旧信息被遗忘、新信息不断覆盖”的视觉回应。',
        actions: [
          '收集被丢弃的 Soviet-era magazines 与 books，把原本准备消失的印刷物转为素材库',
          '扫描页面、人物、物件和图形，而不是仅以原书作为展览 object',
          '在 Photoshop 中重新缩放、叠加和拼接不同来源图像，制造新的不连续空间',
          '利用自己曾在 news agency 工作的经验，把旧宣传 / 大众媒体与当代新闻信息过载放在一起思考',
          '继续保留 documentary practice，使 collage 并非“风格转型”，而是并行的第二种信息处理方法',
        ],
        sourceUrl: strokinsArchiveInterview,
        images: [],
        relations: [rel('展览', 'Disorders and Obstacles · LCCA Office Gallery', 'Riga, 2015 · solo')],
      },
      {
        title: 'A Boy Who Set a House on Fire', cluster: 'fire archive / found objects / artist book / installation', period: '2018',
        summary: '为首届 Riga International Biennial 制作的新委托。作品从 Soviet Latvia 消防部门档案进入“火”的历史：行政记录照片、被烧黑的物体、剪报和书籍一起被放进旧纺织厂中的小型空间，形成一座兼具档案室和怪异博物馆性质的安装。',
        actions: [
          '研究消防部门在 Soviet Latvia 长期积累的 fire documentation photographs',
          '从 institutional archive 中筛选火灾现场图，而不把它们按事故统计简单陈列',
          '加入 charred / blackened found objects、clippings 与其他火相关材料，建立物质证据层',
          '制作 artist book，让平面出版与现场 installation 形成两个不同阅读尺度',
          '把所有材料安装在 former Bolshevichka textile factory 的特定空间中，使废弃工业建筑也进入作品语境',
        ],
        sourceUrl: strokinsFire,
        images: [],
        relations: [
          rel('展览', 'RIBOCA1 · Everything Was Forever, Until It Was No More', 'Riga, 2018 · new commission'),
        ],
      },
    ],
    awards: [
      'Foam Talent 2016',
      'Kaunas Photo Star, 2013',
      'LensCulture Emerging Talent, 2014',
    ],
    exhibitions: [
      'People in the Dunes — Kaunas Photo Gallery, 2014',
      'Disorders and Obstacles — Latvian Centre for Contemporary Art Office Gallery, 2015',
      'Riga Photography Biennial Award Exhibition, 2016',
      'A Boy Who Set a House on Fire — RIBOCA1, 2018',
      'Cosmic Sadness — ISSP Gallery, 2020',
    ],
    sources: [
      { label: 'Artist website', url: strokinsHome },
      { label: 'Artist · About', url: strokinsAbout },
      { label: 'People in the Dunes · LensCulture', url: strokinsPeople },
      { label: 'Palladium · artist project', url: strokinsPalladium },
      { label: 'Cosmic Sadness · interview', url: strokinsCosmic },
      { label: 'Found archives / collages · New East Archive', url: strokinsArchiveInterview },
      { label: 'RIBOCA installation', url: strokinsFire },
      { label: 'Frieze · RIBOCA context', url: strokinsFireContext },
    ],
  },

  'ilona-szwarc': {
    artistId: 'ilona-szwarc',
    projectCoverage: '5 个核心项目 / 身份方法节点已建立深档案',
    imageCoverage: '0 / 5 项目已建立稳定直链图像 · 当前项目页均可回源查看完整作品',
    note: '本轮把 Ilona Szwarc 的脉络从“女性身份 / 编排肖像”拆成一条非常具体的制作链：女孩与商品化替身、rodeos 中的身体力量、look-alike casting + stage makeup、电影式场景中的变形，再到 silicone / plaster life casting。这样可以看到她不是靠同一视觉风格重复主题，而是在不断改造“肖像中的身体究竟是谁”。',
    projects: [
      {
        title: 'American Girls', cluster: 'look-alike dolls / girlhood / environmental portrait', period: '2011–2013',
        summary: 'Szwarc 初到美国后在 New York 注意到女孩与 American Girl dolls 频繁以“缩小版双胞胎”出现。她从街头观察逐渐进入家庭，以正式环境肖像记录女孩和可定制玩偶，并把玩具消费、阶层和“如何学会成为美国女孩”连接起来。',
        actions: [
          '先在 Fifth Avenue 等街头以日常摄影发现女孩 + doll 的重复现象，再将观察转成长期项目',
          '寻找拥有可按肤色、发型等进行 look-alike customization 的 American Girl dolls 的女孩',
          '从街拍转入 upper-middle-class homes，在女孩自己的 bedroom / living room / yard 中完成 formal portrait',
          '让女孩与娃娃同时占据画面，使“真实身体”和“商品化替身”在比例、姿态和服装上发生对应',
          '通过家庭空间和品牌 accessories 保留消费阶层线索，不把娃娃只当作抽象象征',
        ],
        sourceUrl: szwarcAmerican,
        images: [],
        relations: [
          rel('展览', 'American Girls · Foley Gallery', 'New York, 2013 · solo'),
          rel('奖项', 'World Press Photo · Observed Portraits', 'Third Prize, 2013'),
        ],
      },
      {
        title: 'Rodeo Girls', cluster: 'American West / femininity / physical strength', period: '2013–2015',
        summary: '作为 American Girls 的反向镜像，Szwarc 转向 Texas Panhandle、Oklahoma 等地的 rodeo girls。这里女性身体不是室内、静态和“像玩偶”，而是在男性传统占主导的活动中训练、骑乘、控制大型动物并参与竞赛。',
        actions: [
          '从 Amarillo / Canadian, Texas 出发，跟随 rodeo circuit 到不同小镇和乡村地点',
          '在比赛现场、ranch、trailer、动物圈舍和女孩私人房间之间移动拍摄',
          '同时记录正式 rodeo attire、肌肉动作、动物控制、训练和家庭生活，让“女性化”具有多个身体模型',
          '有意识地与 American Girls 的 indoors / doll / stiffness 建立编辑对照',
          '把 cowgirl 置于 American West myth 中，观察女孩怎样进入原本偏男性化的国家视觉传统',
        ],
        sourceUrl: szwarcRodeo,
        images: [],
        relations: [rel('展览', 'Rodeo Girls · Amerikahaus Munich', '2015 · solo')],
      },
      {
        title: 'I am a woman and I feast on memory', cluster: 'look-alikes / stage makeup / artist-book triptych', period: '2015',
        summary: '三部 artist books 以“我”作为标题，却不断用与艺术家相似的女性代替本人。每部分以连续肖像模拟 stage-makeup tutorial：脸被测量、标记、覆盖、变形和拆除，使“身份”成为不断被制作的动作，而不是脸本身。',
        actions: [
          '通过 casting 寻找与自己 general appearance 相似的 women / doppelgängers',
          '用 stage makeup / prosthetic-style procedures 对替身的脸与皮肤进行逐步干预',
          '把过程拍成连续 portraits，使每一张承担“教程中的一步”而非独立 hero image',
          '把项目分成 I am a woman and I feast on memory、I am a woman and I cast no shadow、I am a woman and I play the horror of my flesh 三部分',
          '制作三册一组、limited edition 500 的 artist books，通过出版顺序控制观看的时间性',
        ],
        sourceUrl: szwarcTriptych,
        images: [],
        relations: [
          rel('出版', 'I am a woman and I feast on memory · three artist books', '2015 · edition 500'),
          rel('展览', 'Leica Gallery Warsaw', '2016'),
        ],
      },
      {
        title: 'Unsex me here', cluster: 'doppelgänger / cinematic staging / bodily transformation', period: '2019',
        summary: '整个项目在 Palm Springs 一栋 Hollywood Regency-style house 中完成。Szwarc 把建筑变成封闭电影布景，让与自己相似的女性在 makeup、服装、动作和室内装饰中经历逐步变形；项目借 Lady Macbeth 的“unsex me here”讨论 femininity、repressed wildness 与身体变化。',
        actions: [
          '继续以 casting call 找与艺术家外形近似的女性，使 doppelgänger 成为自画像代理',
          '把单一 Palm Springs house 当作完整 production set，不通过多个地点制造叙事变化',
          '结合 special-effects makeup、服装、props 与 cinematic lighting 建立身体转化过程',
          '以 sequence 而非单张肖像组织角色变化，让照片像未被完整解释的电影 stills',
          '把 Shakespeare / Lady Macbeth 的文字引用作为心理脚本，而不是直接插图化文学场景',
        ],
        sourceUrl: szwarcUnsex,
        images: [],
        relations: [rel('展览', 'Unsex me here · Make Room', 'Los Angeles, 2019 · solo')],
      },
      {
        title: 'Virgin Soap', cluster: 'silicone + plaster casting / performance / sculpture', period: '2020–2021',
        summary: '项目把 life casting 的制作程序直接变成摄影内容。艺术家在电蓝色背景中给模特制作 torso mold：测量、束缚、涂抹 release agent、覆盖绿色 silicone、加固、脱模，再把完成的 cast 作为雕塑重新展示。制作关系因此比最终肖像更重要。',
        actions: [
          '选择与自己经验相近的 immigrant doppelgänger / model，使 casting 同时具有身份映照关系',
          '先以 laces 测量和约束胸部，并对身体表面做 casting 前准备',
          '将绿色 silicone 覆盖胸部、肩膀与嘴部，再以 burlap / plaster 等建立支撑层',
          '完整拍摄 artist 对 model 进行 casting 的过程，把 studio labour 变成 staged performance',
          '脱模后继续修整、上色并拍摄 mold，使它从身体索引变成独立 sculpture / third body',
          '在展览中把 photographs 与 cast sculpture 并置，模糊 maker、model、object、subject 的边界',
        ],
        sourceUrl: szwarcVirgin,
        images: [],
        relations: [
          rel('展览', 'Virgin Soap · Diane Rosenstein Gallery', 'Los Angeles, 2021 · solo'),
          rel('收藏', 'de la Cruz Collection', 'suite of photographs and sculpture acquired 2021'),
          rel('展览', 'Fahrenheit Madrid', '2023'),
        ],
      },
    ],
    awards: [
      'Foam Talent 2016',
      'Richard Benson Prize for Excellence in Photography, 2015',
      'Arnold Newman Prize for New Directions in Photographic Portraiture, 2014',
      'World Press Photo · Third Prize, Observed Portraits, 2013',
    ],
    exhibitions: [
      'American Girls — Foley Gallery, New York, 2013',
      'Rodeo Girls — Amerikahaus Munich, 2015',
      'I am a woman and I feast on memory — Leica Gallery Warsaw, 2016',
      'Foam Talent — Unseen Amsterdam, 2016',
      'Unsex me here — Make Room, Los Angeles, 2019',
      'Virgin Soap — Diane Rosenstein Gallery, Los Angeles, 2021',
      'Mother Mould — Fahrenheit Madrid, 2023',
    ],
    sources: [
      { label: 'Artist website / project index', url: szwarcHome },
      { label: 'Artist bio / CV', url: szwarcAbout },
      { label: 'American Girls', url: szwarcAmerican },
      { label: 'Rodeo Girls', url: szwarcRodeo },
      { label: 'Triptych · LensCulture', url: szwarcTriptych },
      { label: 'I am a woman and I cast no shadow', url: szwarcCast },
      { label: 'Unsex me here · Make Room', url: szwarcUnsex },
      { label: 'Virgin Soap · artist project', url: szwarcVirgin },
      { label: 'Virgin Soap · Diane Rosenstein Gallery', url: szwarcVirginGallery },
    ],
  },
};
