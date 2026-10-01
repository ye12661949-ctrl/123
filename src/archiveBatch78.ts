import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const kudoVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/tetsumi-kudo';
const kudoMoma = 'https://www.moma.org/artists/3281-tetsumi-kudo';
const kudoPollution = 'https://www.moma.org/collection/works/143670';

const simnettUdder = 'https://mariannasimnett.com/works/the-udder';
const simnettNeedle = 'https://www.mariannasimnett.com/works/the-needle-and-the-larynx';
const simnettVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/marianna-simnett';
const simnettBlood = 'https://www.mariannasimnett.com/works/blood-in-my-milk';

const lazardSupport = 'https://www.pewcenterarts.org/fellow/carolyn-lazard';
const lazardCrip = 'https://www.moca.org/events/moca-artist-film-series-carolyn-lazard';
const lazardExtended = 'https://whitney.org/exhibitions/2019-Biennial/art?section=41';
const lazardVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/carolyn-lazard';

const perryResident = 'https://sondraperry.com/Resident-Evil';
const perryGraft = 'https://sondraperry.com/Graft-and-Ash-for-a-Three-Monitor-Workstation';
const perryLineage = 'https://www.fondationbeyeler.ch/en/exhibitions/past-exhibitions/sondra-perry';
const perryVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/sondra-perry';

const papaHome = 'https://www.elisagiardinapapa.org/';
const papaWhitney = 'https://whitney.org/exhibitions/labor-of-sleep';
const papaVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/elisa-giardina-papa';
const papaMambo = 'https://www.mambogota.com/en/exposicion/technologies-of-care-elisa-giardina-papa/';

const jeongWork = 'https://www.geumhyungjeong.com/work.html';
const jeongToy = 'https://www.geumhyungjeong.com/work/toy.html';
const jeongVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/geumhyung-jeong';

export const archiveBatch78: Record<string, ArtistArchive> = {
  'venice-tetsumi-kudo': {
    artistId: 'venice-tetsumi-kudo',
    projectCoverage: '3 个 anti-art / boxed ecology / pollution-cultivation 关键阶段已建立深档案 · 1959–1973',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。这里不把 Kudo 简化成“核污染主题艺术家”，而是追踪他如何把战后身体、消费品、荧光塑料、植物和技术元件锁进实验箱式环境，让人类本身成为被培养、被污染、被重新分类的对象。',
    projects: [
      {
        title: 'From White Mecha to Black Mecha — Your Portrait',
        cluster: 'Anti-Art / human fragment / consumer display box',
        period: '1959–1966',
        summary: '从日本“Anti-Art”阶段到巴黎时期，Kudo 将人体碎片、机械形式和商品陈列语言逐渐压缩进盒状装置。Your Portrait 中，人眼被固定在 pegboard box 内部，观看者面对的不是“肖像再现”，而是一个被技术环境封装、分类和展示的身体器官。',
        actions: [
          '从 postwar Anti-Art 的废料、机械与身体意象出发，拒绝传统独立雕塑的完整人体',
          '将 eye / phallic fragment / organic form 等身体部件与 plastic、wire、pegboard 等工业材料组合',
          '使用 box / cage / display case 结构，把观看者的位置转成观察实验样本的位置',
          '以荧光和人工色削弱“自然身体”的可信度，使器官看起来像消费品或技术零件',
          '反复使用 Your Portrait 标题，把观看者本人卷入“这也是你的未来身体”这一交换关系',
        ],
        sourceUrl: kudoVenice,
        images: [],
        relations: [rel('收藏', 'Museum of Modern Art, New York', 'From White Mecha to Black Mecha / Your Portrait works represented in collection')],
      },
      {
        title: 'Cultivation',
        cluster: 'fluorescent cage / cactus garden / artificial ecology',
        period: '1972',
        summary: 'Cultivation 把 cactus 这类真实/仿生植物形态囚禁在 DayGlo pink cage 中，使“培养”同时意味着照料、实验和控制。自然不再是技术之外的纯净背景，而成为被人工环境、消费色彩和人类管理重新制造的生态。',
        actions: [
          '使用 cage / greenhouse-like enclosure 把“自然”限制在人工边界中',
          '选择 cactus 等生命力强、又容易被作为异域消费对象展示的植物形态',
          '以 DayGlo / fluorescent colour 建立近实验室与广告陈列混合的视觉气候',
          '将 cultivation 从园艺动作改写成对生命进行管理、观察和驯化的系统',
          '把 human / plant / commodity 的位置故意混淆，使“谁在培养谁”保持不确定',
        ],
        sourceUrl: kudoVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · historical presentation in Arsenale')],
      },
      {
        title: 'Pollution - Cultivation - New-Ecology Underground',
        cluster: 'closed ecosystem / electric system / postnatural body',
        period: '1972–1973',
        summary: '这件大型环境把木、塑料、树脂、棉、金属丝、温度计、头发和电气系统组织成地下生态箱。Kudo 的“New Ecology”不是回归自然，而是假设污染已经不可逆，人、植物、技术和欲望只能在同一受污染系统中继续共生。',
        actions: [
          '用 wood / plastic / resin / plexiglass 建造封闭或半封闭的展示环境',
          '加入 cotton、wire、hair 与类似器官 / 植物的手工形体，使生物与人工材料难以分开',
          '嵌入 thermometer 与 electric system，让装置带有可测量、可运行的 laboratory character',
          '以荧光色和酸性色调覆盖内部，使“生态”显得人工、毒性和商品化',
          '将污染理解为新的常态条件，因此作品不是环境灾难插图，而是一台 postnatural survival model',
        ],
        sourceUrl: kudoPollution,
        images: [],
        relations: [rel('收藏', 'Museum of Modern Art, New York', 'Pollution - Cultivation - New-Ecology Underground · 1972–73')],
      },
    ],
    awards: [],
    exhibitions: ['Yomiuri Indépendant Exhibition — Tokyo, late 1950s–early 1960s', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'La Biennale · Tetsumi Kudo 2022', url: kudoVenice },
      { label: 'MoMA · Tetsumi Kudo artist archive', url: kudoMoma },
      { label: 'MoMA · Pollution - Cultivation - New-Ecology Underground', url: kudoPollution },
    ],
  },

  'venice-marianna-simnett': {
    artistId: 'venice-marianna-simnett',
    projectCoverage: '3 个 dairy-body / surgical voice / multispecies fetish film 阶段已建立深档案 · 2014–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Simnett 的“身体变形”不是只靠幻想影像：她会进入真实奶牛场、接受 Botox 声带注射、训练演员与动物、制作 prosthetics 和空间装置，让医疗、农业和 fetish 的控制机制真正参与作品生产。',
    projects: [
      {
        title: 'The Udder',
        cluster: 'dairy farm / automated milking / purity-corruption fable',
        period: '2014',
        summary: '影片在真实 dairy farm 拍摄，把自动化乳业中的清洗、挤奶、感染与“纯净牛奶”标准转成 magic-realist fable。农场工人和当地人物不是背景采访对象，而作为表演者进入一套关于身体边界、污染和技术管理的叙事。',
        actions: [
          '进入实际 dairy farm，观察 automated milk production、清洁、挤奶与感染控制流程',
          '让真实生活 / 工作在农场的人参与 staged performance，而不是只拍 observational documentary',
          '把 udder、milk、wound、purification 等具体农业动作重组为 fairy-tale narrative',
          '以近距离身体和机器影像制造人 / animal / production system 的形态对应',
          '通过剪辑让“纯净 / 污染”从卫生标准扩展成社会对身体的规训语言',
        ],
        sourceUrl: simnettUdder,
        images: [],
        relations: [rel('奖项', 'Jerwood/FVU Awards commission', 'The Udder commissioned in 2014')],
      },
      {
        title: 'The Needle and the Larynx',
        cluster: 'real medical procedure / Botox / gendered voice transformation',
        period: '2016',
        summary: 'Simnett 接受医生向自己的 larynx 注射 Botox——一种可让声音降低的医疗操作。影片用极慢速度直视针头进入喉部，并把手术说明、流行歌曲和艺术家变低后的声音混在一起，使“改变性别化声音”不再只是表演，而成为真实身体介入。',
        actions: [
          '实际接受 laryngeal Botox injection，而不是由演员模拟手术',
          '以 close-up / slow motion 记录 needle 进入、探查和退出 throat 的完整过程',
          '保留术后 voice change，并用新声线录制 confession / narration',
          '将 clinical description、Botox pop-song 与个人叙述叠成多层 soundtrack',
          '把 normally private medical procedure 公开为 gender、voice 与 self-modification 的 material event',
        ],
        sourceUrl: simnettNeedle,
        images: [],
        relations: [],
      },
      {
        title: 'The Severed Tail',
        cluster: 'three-channel film / animal tail docking / fetish + species transformation',
        period: '2022',
        summary: '三频道影片从动物 tail docking 出发，让 piglet 进入由 puppy、killifish、seahorse、mouse、horse、wolf 等人类/动物角色交错组成的 fetish world。三块不同步的 screen 和一条巨大 plush tail seating 把“失去的尾巴”同时变成影像叙事和观众身体接触的空间结构。',
        actions: [
          '研究 partially outlawed animal tail-docking procedure，并将其作为 species / body modification 的现实入口',
          '组织真人 performers、trained animals、costume、prosthetic makeup 与 handmade tails 共同拍摄',
          '由艺术家亲自编剧、导演和剪辑，并与 choreography、sound design、VFX 团队协作',
          '将成片拆成 three asynchronous screens，使 focal point 持续移动而无法固定观看',
          '在展厅中加入 oversized plush tail seating，让观众身体坐在“被切掉 / 被找回”的器官形态上',
        ],
        sourceUrl: simnettVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: ['Jerwood/FVU Awards — commission 2014'],
    exhibitions: ['Blood in My Milk — New Museum / related presentations 2018', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'Marianna Simnett · The Udder', url: simnettUdder },
      { label: 'Marianna Simnett · The Needle and the Larynx', url: simnettNeedle },
      { label: 'Marianna Simnett · Blood in My Milk', url: simnettBlood },
      { label: 'La Biennale · The Severed Tail', url: simnettVenice },
    ],
  },

  'venice-carolyn-lazard': {
    artistId: 'venice-carolyn-lazard',
    projectCoverage: '4 个 care / crip time / medical infrastructure / access 关键节点已建立深档案 · 2016–2021',
    imageCoverage: '0 / 4 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Lazard 的重要性在于把 accessibility 从“作品完成后的辅助服务”推进成作品最初的生产条件：药盒、病床时间、医院电视、升降躺椅、空气净化器和字幕都可以成为重新设计劳动与观看关系的基础设施。',
    projects: [
      {
        title: 'Support System (for Park, Tina, and Bob)',
        cluster: 'care exchange / one-to-one performance / collaborative flower sculpture',
        period: '2016',
        summary: '在 residency 中，观众以一束花作为进入一对一 performance 的“门票”；花不是象征性道具，而被持续收集并组成共同雕塑。交换关系将 admission、gift、care 与 artist labour 从货币逻辑移开。',
        actions: [
          '将 one-to-one performance 设置在 domestic / intimate context，而不是常规舞台',
          '要求参与者带 bouquet 进入，使 admission cost 变成可分享和可继续使用的材料',
          '在每次 encounter 后保留花束，逐步累积为 collaborative sculpture',
          '把自身 chronic illness 与 care needs 作为 production condition，而不是隐藏在作品背后',
          '通过 residency 结构测试“作品能否同时照顾制作者和参与者”而不是要求艺术家超负荷输出',
        ],
        sourceUrl: lazardSupport,
        images: [],
        relations: [rel('展览', 'Room & Board residency — New York', '2016')],
      },
      {
        title: 'CRIP TIME',
        cluster: 'pill organiser / durational video / illness temporality',
        period: '2018',
        summary: '十分钟影片从上方持续观看双手将大量药片分装进一周 pill organiser。重复、分类和响声把“病中时间”从抽象概念变成日复一日的 maintenance labour，也反驳只有向前生产才算有效时间的资本主义尺度。',
        actions: [
          '以真实日常 medication routine 作为录像动作，而不是为镜头设计戏剧行为',
          '固定 overhead framing，让 hand、pill bottle、organiser 与 tablecloth 成为主要视觉结构',
          '保留药片从 child-proof bottle 倾倒和分类时的具体声音',
          '以 10-minute duration 接近任务自身节奏，不剪成“高效教程”',
          '让 weekly organiser 成为另一种 clock：时间由服药、护理和身体状态而非工作产出计量',
        ],
        sourceUrl: lazardCrip,
        images: [],
        relations: [],
      },
      {
        title: 'Extended Stay',
        cluster: 'hospital television / autonomous channel surfing / patient time',
        period: '2019',
        summary: 'Lazard 直接采用 infusion / chemotherapy centre 常见的单人 hospital TV 与 articulating arm，并要求 Whitney 接入 cable television。屏幕自动换台，使美术馆观众暂时共享长期接受治疗者面对电视和等待时间的观看结构。',
        actions: [
          '采购 / 使用真实 medical television monitor 与 wall-mounted articulating armature',
          '要求 museum infrastructure 实际接入 cable TV，而不是播放预录艺术视频',
          '设置系统自动 channel surf，取消观众对节目选择的控制',
          '保留 hospital object 为单人、躺卧状态设计的 scale 和 angle',
          '把 museum visitor 的身体位置重新组织成 patient-oriented viewing position',
        ],
        sourceUrl: lazardExtended,
        images: [],
        relations: [rel('展览', 'Whitney Biennial', '2019')],
      },
      {
        title: 'SYNC — Privatization / Cinema 1 & 2 / Half Life / workers’ comp',
        cluster: 'care infrastructure / HEPA / steam-fire / toxic dust / recliner support',
        period: '2020–2021；Venice 2022 presentation',
        summary: 'SYNC 将看似普通的照护设备拆成一组制度对象：空气净化器按展厅体积配置；蒸汽和投影制造火焰幻象；hourglass 让工业毒尘落下；power-lift recliner 持续调整和支撑身体。照护、污染与劳动因此成为空间工程问题。',
        actions: [
          '在 Privatization 中按 exhibition space proportions 计算并配置 HEPA air purifiers',
          '在 Cinema 1 / Cinema 2 中以 steam + projected light 生成无燃烧的 fire illusion',
          '在 Half Life 中将 toxic industrial dust 放入 hourglass，以缓慢下降表现环境暴露时间',
          '在 workers’ comp 中使用 power lift recliner，让支撑 / 调姿机制处于持续 active state',
          '把这些 device 与 Carolyn Working 的卧床劳动图像并置，使制作劳动本身也被重新定义',
        ],
        sourceUrl: lazardVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: ['Pew Fellowship — 2019'],
    exhibitions: ['Whitney Biennial — 2019', 'SYNC — Essex Street / Maxwell Graham 2020', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'Pew Center · Carolyn Lazard', url: lazardSupport },
      { label: 'MOCA · CRIP TIME programme', url: lazardCrip },
      { label: 'Whitney Biennial · Extended Stay', url: lazardExtended },
      { label: 'La Biennale · Carolyn Lazard 2022', url: lazardVenice },
    ],
  },

  'venice-sondra-perry': {
    artistId: 'venice-sondra-perry',
    projectCoverage: '3 个 workstation / chroma-key-blackness / family-memory immersive 节点已建立深档案 · 2016–2021',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Perry 的数字作品始终把“图像由什么工具生产”暴露出来：健身器械、廉价 3D 软件、avatar、chroma-key blue、YouTube found footage 和不完美扫描都不被藏起来，而成为讨论黑人身体如何被技术捕捉、替代和商品化的方法。',
    projects: [
      {
        title: 'Graft and Ash for a Three Monitor Workstation',
        cluster: 'exercise-bike workstation / 3D avatar / Black body + labour',
        period: '2016',
        summary: '三屏 workstation 与 stationary bicycle 组合，数字 avatar 作为艺术家的替身出现。观众面对一件看似可锻炼 / 工作的设备，但座位关系故意使其难以正常使用，从而把“健康、自我优化、劳动生产率”与黑人身体被数字化的经验压在一起。',
        actions: [
          '将 three-monitor video setup 与 physical bicycle workstation 合成一件不可分离的 sculpture',
          '使用 accessible 3D modelling / avatar tools 制作替代自身的数字身体',
          '让 workstation 的人体工学处于不舒服或无法顺畅使用的状态',
          '在视频中保留数字模型的 low-cost / DIY texture，而不追求商业 CGI 完美度',
          '将 online found media、理论文本与第一人称数字形象编辑进同一视频结构',
        ],
        sourceUrl: perryGraft,
        images: [],
        relations: [rel('收藏', 'MoMA / MOCA / Walker collection contexts', 'Graft and Ash entered major media-art collections')],
      },
      {
        title: 'Resident Evil / Wet and Wavy Looks—Typhon coming on',
        cluster: 'blue-screen installation / rowing machine / hair gel / digital fluidity',
        period: '2016',
        summary: 'Resident Evil 个展把 chroma-key blue、workstation、used furniture 与数字视频做成完整空间。Wet and Wavy Looks 直接把 rowing-machine workstation 与 Eco Styler hair gel 并置，数字蓝屏、黑人发型产品和“运动机器”共同讨论身体表面怎样被技术与消费系统处理。',
        actions: [
          '以 chroma-key blue 作为 gallery environment 的实际综合色，而不是仅在后期抠像',
          '将 rowing machine 改造成 three-monitor workstation 的结构基础',
          '把 Eco Styler gel 等 Black hair-care product 作为实体材料带入作品',
          '混合 YouTube / found footage、数字变形与自制 graphics，使网络图像来源保持可见',
          '让观众在被设备包围的身体位置上观看关于 race / technology / liquidity 的视频，而非站在远处看单屏',
        ],
        sourceUrl: perryResident,
        images: [],
        relations: [rel('展览', 'Resident Evil — The Kitchen, New York', '2016 solo exhibition')],
      },
      {
        title: 'Lineage for a Phantom Zone',
        cluster: 'immersive audiovisual / erased family land / dream reconstruction',
        period: '2020–2021；Venice 2022',
        summary: 'Perry 从一个“希望自己能梦到”的祖母之梦出发，寻找祖母曾作为 sharecropper 出生和劳动的土地。作品用影像、数字空间、声音和气味重建现实中被抹除或无法抵达的家族地理，使 dream space 成为进入缺失历史的 passage。',
        actions: [
          '从 grandmother / sharecropping family history 中确定现实中难以定位的 land research target',
          '将 archival / geographic absence 转换成 dream-based moving-image narrative，而不是虚构为完整史实',
          '制作 immersive audiovisual installation，使影像不局限于单一正面屏幕',
          '加入 orange scent 这一来自祖母家庭传说的嗅觉线索，把记忆从视觉延伸到身体感官',
          '在 Venice 版本中将个人 genealogy 与 Black history erasure 的更大结构并置',
        ],
        sourceUrl: perryLineage,
        images: [],
        relations: [
          rel('奖项', 'Inaugural Dream Commission', 'winner 2020'),
          rel('展览', 'Fondation Beyeler', '2022 immersive commission presentation'),
          rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale'),
        ],
      },
    ],
    awards: ['Inaugural Dream Commission — winner 2020'],
    exhibitions: ['Resident Evil — The Kitchen 2016', 'Lineage for a Phantom Zone — Fondation Beyeler 2022', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'Sondra Perry · Resident Evil', url: perryResident },
      { label: 'Sondra Perry · Graft and Ash', url: perryGraft },
      { label: 'Fondation Beyeler · Lineage for a Phantom Zone', url: perryLineage },
      { label: 'La Biennale · Sondra Perry 2022', url: perryVenice },
    ],
  },

  'venice-elisa-giardina-papa': {
    artistId: 'venice-elisa-giardina-papa',
    projectCoverage: '4 个 platform care / quantified sleep / AI microwork / Sicilian counter-archive 节点已建立深档案 · 2016–2021',
    imageCoverage: '0 / 4 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Giardina Papa 的方法线非常适合研究 AI：她不是泛泛批判“算法”，而是亲自进入平台劳动、睡眠优化和 human-in-the-loop 微任务，再把被自动化叙事隐藏的人类劳动重新做成可见的档案。',
    projects: [
      {
        title: 'Technologies of Care',
        cluster: 'platform labour / emotional service / downloadable web archive',
        period: '2016',
        summary: '项目采访并呈现通过网络平台出售 care / affective services 的劳动者，包括 ASMR performer、online dating coach、virtual assistant、fan-for-hire 与 fetish-video performer 等。作品以可下载文件夹 / HTML portraits 进入观众电脑，把“云端服务”重新连回分散的真人劳动。',
        actions: [
          '通过 digital platforms 寻找并与提供 care / emotional service 的 workers 交流',
          '记录不同劳动者如何按需求出售 attention、companionship、coaching 或 customised performance',
          '将每位 worker 的 portrait 制作成独立 digital folder / HTML file，而不是统一剪成纪录片',
          '通过 ZIP download 让 exhibition space 直接变成用户 desktop',
          '突出 automated interface 背后由大量可互换人类时间维持“智能 / 陪伴”的劳动结构',
        ],
        sourceUrl: papaHome,
        images: [],
        relations: [rel('策展', 'Rhizome · The Download commission', '2016')],
      },
      {
        title: 'Labor of Sleep, Have you been able to change your habits??',
        cluster: 'sunrise/sunset intervention / quantified self / sleep data extraction',
        period: '2017–2018',
        summary: '连续九天，Whitney 网站在 sunrise / sunset 自动播放短视频，模仿 self-improvement apps 对睡眠习惯的提醒。作品把休息揭示成新的 data extraction frontier：身体本应停止工作的时间仍被传感器、软件和优化逻辑转成可生产数据。',
        actions: [
          '设计九天时间结构，并让 video clips 按真实 sunrise / sunset 时间出现',
          '模仿 habit-tracking / self-improvement app 的提示、教程和友好语气',
          '把 work 部署在 Whitney website 而非实体 gallery，使浏览器本身成为行为干预界面',
          '收集 / 重演与 sleep tracking、bio-data、productivity optimisation 相关的日常动作',
          '利用“改善睡眠”的语言揭示 rest 被重新定义为提高生产率的数据劳动',
        ],
        sourceUrl: papaWhitney,
        images: [],
        relations: [rel('展览', 'Whitney Sunrise/Sunset Commission', 'Oct 2017–Apr 2018')],
      },
      {
        title: 'Cleaning Emotional Data',
        cluster: 'human-in-the-loop AI / emotion annotation / embroidered algorithm diagrams',
        period: '2019–2020',
        summary: '2019 年冬，艺术家亲自为多家北美 human-in-the-loop 公司远程做 microwork：给情绪分类、标注 facial expression、录制自己的脸去 animate 3D characters。三频道影像把这些任务与 emotion-recognition 的心理学史并置，并用刺绣把算法识别线和难以翻译的 Sicilian 情绪词缝在一起。',
        actions: [
          '以真实 microworker 身份加入 North American human-in-the-loop platforms',
          '完成 emotion taxonomy、facial-expression annotation、self-image recording 等训练数据任务',
          '截取 / 记录任务界面与操作过程，保留 piece-rate labour 的碎片化结构',
          '研究 emotion mapping 背后的心理学 / facial-expression classification history',
          '与 Michael Graham / Savant Studios 协作刺绣，把 algorithmic facial micro-expression lines 与 Sicilian vernacular 情绪词并置',
        ],
        sourceUrl: papaHome,
        images: [],
        relations: [rel('展览', 'La Kunsthalle Mulhouse / Aksioma commission', '2020')],
      },
      {
        title: '“U Scantu”: A Disorderly Tale',
        cluster: 'Sicilian oral history / Inquisition archive / sound-system bikes',
        period: '2021；Venice 2022',
        summary: '作品重写 Sicilian donne di fora 传说：这些“outside women”在历史叙事中可男可女、人兽混合、善恶不定，后来又在宗教裁判记录中被犯罪化。影片让 teenage tuners 骑着装有强力 sound systems 的自行车穿过 Gibellina Nuova，以声音、口述史和档案重新夺回被规训的性别与民间知识。',
        actions: [
          '收集祖母口述歌曲 / stories 与童年 fragment，不把 family memory 冒充完整民族志',
          '阅读 19th-century Sicilian fairy-tale collections 与 16–17th-century Inquisition trial records',
          '在 Gibellina Nuova 的 postmodern architecture 中拍摄 teenage bicycle “tuners”',
          '改装 bicycles 加入 powerful sound systems，使民间叙事通过移动声音占领空间',
          '将 archive text、oral memory、music 与 queer / hybrid bodies 交叉剪辑，制造 deliberately disorderly history',
        ],
        sourceUrl: papaVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: [],
    exhibitions: ['Whitney Sunrise/Sunset Commission — 2017–2018', 'Cleaning Emotional Data — La Kunsthalle Mulhouse 2020', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'Elisa Giardina Papa · official project archive', url: papaHome },
      { label: 'Whitney · Labor of Sleep', url: papaWhitney },
      { label: 'La Biennale · U Scantu 2022', url: papaVenice },
      { label: 'MAMBO · Technologies of Care survey', url: papaMambo },
    ],
  },

  'venice-geumhyung-jeong': {
    artistId: 'venice-geumhyung-jeong',
    projectCoverage: '3 个 DIY robot / assembly choreography / fragile-machine care 节点已建立深档案 · 2019–2021',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Jeong 的“机器人”并不追求高科技完成度：她自学电路、马达和机械结构，把组装、遥控、维修、失败和照顾都保留下来，使机器身体像需要长期护理的脆弱伙伴。',
    projects: [
      {
        title: 'Homemade RC Toy',
        cluster: 'DIY robot / installation-performance / remote bodily relation',
        period: '2019',
        summary: '在 Kunsthalle Basel commission 中，Jeong 制作第一批明确进入自制机器人谱系的 remote-control “toy”。作品既以散开的机器身体、零件和控制器陈列，又在 performance 中由艺术家实际操作，使操纵、依赖、欲望和笨拙运动同时可见。',
        actions: [
          '从容易获得的 mechanical / electronic parts 出发自己学习并构造 remote-control sculpture',
          '保留 exposed frame、wire、wheel、motor 与连接点，不用完整外壳隐藏结构',
          '自行制作 / 修改 controller，使身体手势直接对应 machine movement',
          '在 gallery 同时呈现 robot、parts 与 performance，而不是只保留“完成品”',
          '允许 movement 保持 clumsy / unstable，使控制失败成为人机关系的一部分',
        ],
        sourceUrl: jeongWork,
        images: [],
        relations: [rel('展览', 'Homemade RC Toy — Kunsthalle Basel', '2019 · commission and performance')],
      },
      {
        title: 'Small Upgrade / Making Show',
        cluster: 'robot anatomy / assembly video / construction as choreography',
        period: '2019–2021',
        summary: 'Small Upgrade 用四频道录像近距离追踪艺术家组装机器人，hands assembling parts 被处理成细致 choreography；Making Show 则进一步把“如何重做一个已经做过的 robot”变成现场 demonstration，暴露 rehearsal、错误、预先准备和跳步。',
        actions: [
          '以 close-up video 拍摄每个小零件如何连接成 machine body',
          '将 robot frame 作为 anatomy specimen 阅读，强调 joint、wire、motor 与支撑结构',
          '把手部 assembly rhythm 当成 choreography，而不把制作过程剪成幕后花絮',
          '在 Making Show 中选择既有 robot model，于观众前尝试完整重建',
          '为了限定 performance 时长主动 rehearsal、预制部分步骤并决定哪些动作展示 / 略过，从而把“教学节目格式”本身变成作品',
        ],
        sourceUrl: jeongWork,
        images: [],
        relations: [
          rel('展览', 'Ural Industrial Biennial — Small Upgrade', '2019'),
          rel('展览', 'Making Show — Obscene Festival / MMCA-supported context', '2021'),
        ],
      },
      {
        title: 'Toy Prototype / Under Maintenance',
        cluster: 'aluminium + DC motors / medical-simulator controllers / machine care',
        period: '2021；Venice 2022',
        summary: 'Toy Prototype 将 aluminium profiles、DC motors 和以 medical simulators + joysticks 改装的控制器做成一群 DIY robots，并用九块视频屏展示互动过程。Under Maintenance 则把组装、修理、接线、充电和性能测试本身变成影像，机器的“生命”来自持续照顾而不是自主智能神话。',
        actions: [
          '以 aluminium profiles 作为可拆装 skeleton，安装 DC motors、wheel / linkage 与 exposed wiring',
          '把 medical simulator parts 与 joysticks 改造成 remote controllers，让护理设备与控制器发生功能转译',
          '通过 self-taught programming / electronic circuits 逐台调试 movement，而非使用商业 robot platform',
          '在 Venice 版本加入 9 video screens，显示艺术家与 machines 的实际 testing / interaction',
          '在 Under Maintenance 中持续记录 assembling、repairing、connecting、charging、testing，把 maintenance 明确作为 nurturing action',
        ],
        sourceUrl: jeongToy,
        images: [],
        relations: [
          rel('展览', 'National Museum of Modern and Contemporary Art, Korea', 'Toy Prototype commission 2021'),
          rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale'),
        ],
      },
    ],
    awards: [],
    exhibitions: ['Homemade RC Toy — Kunsthalle Basel 2019', 'Toy Prototype — MMCA 2021', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'Geumhyung Jeong · official work archive', url: jeongWork },
      { label: 'Geumhyung Jeong · Toy Prototype', url: jeongToy },
      { label: 'La Biennale · Geumhyung Jeong 2022', url: jeongVenice },
    ],
  },
};
