import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

export const archiveBatch44: Record<string, ArtistArchive> = {
  'juno-calypso': {
    artistId: 'juno-calypso',
    projectCoverage: '6 个自我表演 / 场景建构节点已建立深档案 · 2011–2018',
    imageCoverage: '0 / 6 项目已有代表图像',
    note: 'Calypso 的强项不是“粉色审美”，而是低成本、单人完成的角色生产系统：先找一个已经带有强烈社会幻想的真实地点，再带着服装、假发、美容装置和相机独自入住；她既是导演、摄影师、灯光、造型，也是镜头里的 Joyce。地点和道具不是装饰，而是女性身份规则的现成剧本。',
    projects: [
      {
        title: 'Joyce', cluster: 'alter ego / self-portrait / domestic performance', period: '2011–2014',
        summary: 'Calypso 在大学阶段开始用自己作为测试模特，后来发展出虚构人物 Joyce。角色被放在办公室、浴室和家居空间中，反复使用美容设备、加工食品、化妆与身体矫正工具，像一个被“理想女性”操作说明困住的人。',
        actions: ['先用自己替代外部模特进行测试拍摄', '建立 Joyce 这一无固定传记的 alter ego', '在线上和二手店持续寻找美容 / 性感 / 粉色 / 面具类道具', '选择带有过时消费视觉的室内空间', '独自拍摄并同时控制造型、表情、道具与机位', '让 Joyce 很少直接建立传统魅力型眼神交流', '通过多张作品让同一角色累积而非靠单张解释故事'],
        sourceUrl: 'https://www.junocalypso.com/about', images: [], relations: []
      },
      {
        title: 'The Honeymoon', cluster: 'couples-only hotel / solo performance / marriage ritual', period: '2015–2016',
        summary: 'Calypso 在网上发现宾夕法尼亚一座仍营业的 1960s 风格 couples-only honeymoon resort，独自住进去一周。她带着相机、假发和 bridal lingerie，让本应由两个人完成的 honeymoon ritual 只剩 Joyce 一人执行。',
        actions: ['先在互联网搜寻具有时间错位感的 honeymoon hotel', '以旅行写作者身份获得不同房间的进入机会', '带整箱相机设备、假发、婚纱 / lingerie 和美容道具独自入住', '利用酒店原有心形浴缸、镜顶、粉色浴室与灯光作为现成布景', '使用遥控 / 自拍方式在没有团队的情况下反复试拍', '一张图通常经过数小时微调姿势、灯位和道具', '把“蜜月准备—等待—失望”的双人仪式改成单人表演'],
        sourceUrl: 'https://www.junocalypso.com/honeymoon', images: [],
        relations: [rel('展览', 'The Honeymoon — Golden Thread Gallery', '2017'), rel('奖项', 'British Journal of Photography International Photography Award', '2015')]
      },
      {
        title: 'Beauty devices as props', cluster: 'beauty technology / body correction / still life-performance hybrid', period: '2013–2016',
        summary: '电子 anti-wrinkle mask、Slendertone、seaweed wrap、乳液和其他 body-improvement devices 在作品里既像商品摄影对象，也实际被 Joyce 穿戴 / 使用。它们把抽象的“女性必须不断改善自己”变成具体机械动作。',
        actions: ['在 eBay / 美容用品渠道寻找过时或怪异美容机器', '保留产品设计本身的时代感', '将装置真实绑在脸 / 身体上', '使用正面或近距离机位让机器与皮肤同时可见', '把美容产品照的干净灯光与角色疲惫状态并置', '重复出现镜子强化自我监控结构'],
        sourceUrl: 'https://photomonitor.co.uk/interview/the-honeymoon/', images: [], relations: []
      },
      {
        title: 'A Girl’s Guide to Egg Freezing', cluster: 'fertility / instruction / future body / publication', period: '2017',
        summary: '项目继续处理女性身体被时间、技术和人生阶段管理的问题。相比 honeymoon 对婚姻脚本的处理，这里把 fertility preservation 和未来规划纳入同一套美容 / 医疗 / 自我管理视觉逻辑。',
        actions: ['研究 egg-freezing / fertility 的消费与医疗图像', '继续使用自我表演和高度人工场景', '把身体管理与“为未来做准备”的语言并置', '通过书 / 编辑形式形成 guide-like 阅读结构'],
        sourceUrl: 'https://www.junocalypso.com/about', images: [], relations: [rel('奖项', 'Creative Review Best in Book', '2017')]
      },
      {
        title: 'What To Do With A Million Years', cluster: 'underground bunker / immortality / artificial daylight / self-portrait', period: '2017–2018',
        summary: '在 Las Vegas 一座由 Avon cosmetics 高管于 1960s 建造、位于地下约 26 英尺的大型防核 bunker 中拍摄。场地保留 swimming pool、kitchen、dancefloor 和 artificial daylight garden，时间像停在冷战消费主义内部；Calypso 用它处理延寿、抗衰老与“永远保存自己”的欲望。',
        actions: ['寻找具有极端人工环境与时间胶囊属性的真实场地', '进入完整保留的地下 bunker', '利用 artificial daylight、假花园、泳池和地下厨房原有布景', '继续由艺术家本人出演', '将美容 / 永生意象换成 bunker 的 survival technology', '通过长时间独处和少量道具重构原空间', '把照片和展览装置组织成关于 ageing / immortality 的连续环境'],
        sourceUrl: 'https://www.junocalypso.com/millionyears', images: [],
        relations: [rel('展览', 'What To Do With A Million Years — TJ Boulting, London', '2018'), rel('奖项', 'Creative Review Best in Book', '2018')]
      },
      {
        title: 'Solo production as method', cluster: 'meta-method / location first / self-directed production', period: '2011–现在',
        summary: '她的生产方式本身值得作为独立方法看：很多图像不是先画精密 storyboard 再搭景，而是先找到“已经足够奇怪”的地点和道具，再独自进入，边试边调整。这让商业摄影式精致表面与私人、低预算的制作条件形成反差。',
        actions: ['长期保存可能的 location wish list', '优先从地点而不是主题论文开始', '独自携带轻量数字设备以方便自拍', '一个机位反复测试数小时', '现场调整 props / costume / pose 而非完全预先锁死', '同时承担 director / photographer / performer 角色', '后期保持颜色人工感但不抹掉真实房间的时代质感'],
        sourceUrl: 'https://www.junocalypso.com/about', images: [], relations: []
      }
    ],
    awards: ['BJP International Photography Award 2015', 'Foam Talent 2016', 'Royal Photographic Society Vic Odden Award 2018'],
    exhibitions: ['BJP IPA Winners Show — TJ Boulting 2016', 'The Honeymoon — Golden Thread Gallery 2017', 'What To Do With A Million Years — TJ Boulting 2018'],
    sources: [
      { label: 'Juno Calypso Studio', url: 'https://www.junocalypso.com/' },
      { label: 'The Honeymoon', url: 'https://www.junocalypso.com/honeymoon' },
      { label: 'What To Do With A Million Years', url: 'https://www.junocalypso.com/millionyears' }
    ]
  },

  'vasantha-yogananthan': {
    artistId: 'vasantha-yogananthan',
    projectCoverage: '7 个长期旅行 / 编排 / 摄影书节点已建立深档案 · 2009–2024',
    imageCoverage: '0 / 7 项目已有代表图像',
    note: 'Yogananthan 的方法不应简化成“用《罗摩衍那》拍印度”。他会用多年旅行让项目慢慢找到形式，再在纪实、编排、大画幅胶片、手工上色、collage、文本委托和摄影书设计之间改变媒介。A Myth of Two Souls 的七册书不是同一组照片拆成七本，而是每一章都有不同视觉策略与协作者。',
    projects: [
      {
        title: 'Piémanson', cluster: 'long-term documentary / beach community / analogue photography', period: '2009–2013',
        summary: '最早的长期项目在法国 Piémanson 海滩持续多年完成。这里形成了他后来的基本工作观：不是预设一套风格快速收集图像，而是反复回到同一地点，让时间决定人物关系和项目真正关心的问题。',
        actions: ['多年反复回到同一海滩社区', '使用 analogue photography 降低即时查看', '与常住 / 重复出现的人建立长期关系', '同时记录人物、临时建筑和日常仪式', '跨数年编辑而非按单次旅行成组', '与 Chose Commune 出版成书'],
        sourceUrl: 'https://vasanthayogananthan.com/about/biography/', images: [],
        relations: [rel('出版', 'Piémanson — Chose Commune', '2014'), rel('展览', 'Bibliothèque Nationale de France', '2013')]
      },
      {
        title: 'A Myth of Two Souls — fieldwork system', cluster: 'Ramayana / 13 journeys / large-format staging / documentary-fiction', period: '2013–2021',
        summary: '七年间以《罗摩衍那》路线为松散结构，完成 13 次印度、尼泊尔与斯里兰卡旅行。大部分核心场景用 large-format analogue camera 制作；真实地点和居民进入镜头，但人物可能被安排成神话角色，纪实与舞台不被分开。',
        actions: ['研究 Ramayana 的多版本图像与地理路线', '沿史诗路线进行13次长期旅行', '在现实地点寻找与文本产生关系的人 / 环境', '使用 large-format analogue camera 进行慢速编排', '部分场景直接观察、部分明确 staged', '不通过服装完全复原古代，而让当代环境持续可见', '每次旅行后根据新材料重新决定下一章方法'],
        sourceUrl: 'https://vasanthayogananthan.com/personal-projects/a-myth-of-two-souls/', images: [], relations: []
      },
      {
        title: 'Early Times / The Promise', cluster: 'chapter book / hand-painted photograph / illustration / collaboration', period: '2016–2017',
        summary: '前两章已经确立“每本书用不同视觉语言”的原则。黑白照片会交给印度传统画师手工上色，另有插画、文本和普通彩色摄影，共同制造既属于现实又像旧神话印刷品的视觉层。',
        actions: ['从旅行负片中选择黑白与彩色图像', '将部分黑白照片交给传统手工上色者', '允许画师以 pigment 改写现实色彩', '与不同作家 / 插画师协作', '为每章重新设计书籍纸张与 sequence', '让摄影、绘画和文本保持来源差异而非统一成单一风格'],
        sourceUrl: 'https://vasanthayogananthan.com/books/early-times/', images: [],
        relations: [rel('出版', 'Early Times', '2016'), rel('出版', 'The Promise', '2017')]
      },
      {
        title: 'Afterlife', cluster: 'Dussehra / trance / collage / war chapter / commissioned poem', period: '2020',
        summary: '第六章围绕 Rama 与 Ravana 战争以及死亡 / reincarnation。照片拍于 Rajasthan 和 Tamil Nadu 两届 Dussehra，但他不把节庆当新闻事件记录，而是寻找夜间 trance、身体转换和“成为另一个人”的状态；书中同时出现 collage，并由 Meena Kandasamy 写诗。',
        actions: ['在两届 Dussehra 节庆期间长期拍摄', '避开完整仪式说明式画面', '集中寻找夜间 trance / costume / 身体转换', '把不同年份 / 地区影像重新剪接', '制作 photographic collage', '委托 Meena Kandasamy 写作并与影像并置', '用不同长度页面控制战争章节的阅读节奏'],
        sourceUrl: 'https://vasanthayogananthan.com/books/afterlife/', images: [],
        relations: [rel('出版', 'Afterlife — Chose Commune', '2020')]
      },
      {
        title: 'Amma', cluster: 'Sita / purity / 60 tipped-in photographs / book object', period: '2021',
        summary: '最后一章转向 Sita 和“purity”。项目跨 Sri Lanka 海岸、Ayodhya 与 Bihar jungle，色彩逐渐从现实文明空间转向更空旷的 metaphysical landscape。书中 60 张照片全部手工 tipped-in，摄影书的物质制作成为七年项目的结尾。',
        actions: ['从最终阶段旅行中选择围绕 Sita 的图像', '用 chromatic scale 控制从城市到自然的过渡', '将437张七册项目材料压缩成最后章的60张', '每张照片单独打印并手工 tipped-in 到书页', '与 Jatinder Singh Durhailay 合作 cover artwork', '把书籍装订和插图劳动作为最终作品的一部分'],
        sourceUrl: 'https://vasanthayogananthan.com/books/amma/', images: [],
        relations: [rel('出版', 'Amma — Chose Commune', '2021'), rel('奖项', 'Paris Photo–Aperture PhotoBook Award Juror’s Special Mention', '2021')]
      },
      {
        title: 'Mystery Street', cluster: 'Louisiana / portrait / documentary fable / kinship', period: '2022–2023',
        summary: '项目在 Louisiana 完成，标志他回到 documentary photography，但拒绝把 New Orleans 做成“城市画像”。人物肖像是主体，地点和时间线索被故意压低，使现实场景像寓言；作品关心 kinship、身体与环境，而不是完整地理说明。',
        actions: ['在 Louisiana 进行驻留 / 委托拍摄', '以 portrait 作为主要类型', '与被摄者共同决定身体状态和环境位置', '避免地标式城市说明图', '在真实观察中允许轻微编排', '用 sequence 降低地点信息并提高人物之间的关系', '出版独立摄影书'],
        sourceUrl: 'https://vasanthayogananthan.com/personal-projects/mystery-street/', images: [],
        relations: [rel('展览', 'Fondation Henri Cartier-Bresson', '2023'), rel('展览', 'International Center of Photography', '2023'), rel('奖项', 'Prix Pictet shortlist', '2023')]
      },
      {
        title: 'Images Imaginaires / Le Passé Composé', cluster: 'south of France / memory / imaginary image / new cycle', period: '2020–2024',
        summary: '完成七册史诗后，他在法国南部开启 Images Imaginaires 新周期。第一部分 Le Passé Composé 于 Arles 2024 展出，继续把现实摄影与记忆 / 想象之间的间隙作为核心，但不再依赖外部神话文本作为结构。',
        actions: ['长期在法国南部重复拍摄', '从现实场景中寻找触发私人 / 集体记忆的细节', '继续使用 analogue photography 的慢节奏', '在几年材料积累后形成第一章节', '以展览 sequence 而非史诗章节重新组织'],
        sourceUrl: 'https://vasanthayogananthan.com/about/biography/', images: [],
        relations: [rel('展览', 'Le Passé Composé — Rencontres d’Arles', '2024')]
      }
    ],
    awards: ['ICP Infinity Award — Emerging Photographer 2017', 'Foam Talent 2017', 'Rencontres d’Arles Photo-Text Book Award 2019', 'Prix Pictet shortlist 2023'],
    exhibitions: ['Piémanson — BnF 2013', 'A Myth of Two Souls — Musée de l’Elysée / Chanel Nexus Hall 2019', 'Mystery Street — HCB Foundation / ICP 2023', 'Le Passé Composé — Rencontres d’Arles 2024'],
    sources: [
      { label: 'Vasantha Yogananthan Studio', url: 'https://vasanthayogananthan.com/' },
      { label: 'Biography / method', url: 'https://vasanthayogananthan.com/about/biography/' },
      { label: 'A Myth of Two Souls', url: 'https://vasanthayogananthan.com/personal-projects/a-myth-of-two-souls/' },
      { label: 'Mystery Street', url: 'https://vasanthayogananthan.com/personal-projects/mystery-street/' }
    ]
  },

  'sara-de-brito-faustino': {
    artistId: 'sara-de-brito-faustino',
    projectCoverage: 'A Home With No Roof 已按 6 个制作 / 展示节点建立深档案 · 2020s–2026',
    imageCoverage: '0 / 6 节点已有代表图像',
    note: '她目前最成熟、公开资料最完整的是 A Home With No Roof，所以这里不虚构多个独立项目，而把同一个项目真正的生产链拆开：童年住宅记忆 → 1:12 模型重建 → 微缩家具和日常物件 → 不按比例的身体雕塑 → 自拍 / reenactment → 摄影平面。她的“摄影”其实从模型制作很早就开始了。',
    projects: [
      {
        title: 'A Home With No Roof — memory map', cluster: 'domestic memory / trauma / dramaturgy', period: '2020s–',
        summary: '项目以童年家庭空间和 domestic abuse 经验为底层，但不是去原址纪实。她先把梦、记忆、日常细节和不能直接复原的身体经验转成一组空间 / 物件线索，再通过 construction 和 dramaturgy 重新制造“家”。',
        actions: ['回忆童年住宅的房间结构与日常物件', '记录梦境 / 碎片化记忆而非追求准确证词地图', '把高频出现的物件和身体感受列成制作清单', '决定哪些记忆用房间、哪些用物件、哪些用身体雕塑表达', '拒绝直接返回原址做传统纪实'],
        sourceUrl: 'https://www.foam.org/articles/foam-talent-sara-de-brito-faustino', images: [], relations: []
      },
      {
        title: '1:12 childhood-home reconstruction', cluster: 'miniature architecture / model building / controlled stage', period: '2020s–',
        summary: '核心物理动作是按 1:12 比例重建童年住宅。房间因此从真实生活空间变成可完全操控的 tabletop stage，艺术家可以改变墙、家具、光源、物体位置，而不用服从真实建筑。',
        actions: ['按1:12比例规划住宅模型', '制作墙体、门窗与房间连接', '缩小家具和家庭用品', '保留抽屉、衣柜、熨衣板、餐桌等普通生活结构', '在模型内安装 / 安排单一灯泡等可控光源', '通过模型相机视点重新选择“人在房间中的尺度”'],
        sourceUrl: 'https://www.foam.org/articles/foam-talent-sara-de-brito-faustino', images: [], relations: []
      },
      {
        title: 'Domestic debris as narrative device', cluster: 'miniature object / everyday life / uncanny displacement', period: '2020s–',
        summary: '项目最有效的并不是戏剧性大场面，而是普通物件被轻微改坏：长红发落在 ironing board、带牙根的 adult tooth、spill coffee、叠放餐具。日常性让异常更加可信。',
        actions: ['制作 / 搜集可缩小的家庭日用品', '在房间里制造凌乱而非“美术指导式整洁”', '将咖啡、餐具、衣柜等普通物件作为观看锚点', '只在少数位置加入明显异常物', '用物件尺度差而不是说明文字制造不安'],
        sourceUrl: 'https://www.foam.org/articles/foam-talent-sara-de-brito-faustino', images: [], relations: []
      },
      {
        title: 'Body fragments and scale breaks', cluster: 'sculpture / oversized body / clay / violence', period: '2020s–',
        summary: '身体不会以统一比例完整出现：巨大手脚、空瘪身体、黏土人体或插入大叉子的腿突然进入 miniature home。住宅保持 1:12 规则，但身体故意破坏规则，于是心理记忆的强度直接表现为比例错误。',
        actions: ['用 clay / sculpture 制作身体片段', '故意不遵守1:12住宅比例', '让巨大身体塞进过小房间', '在部分雕塑加入 fork 等现实物造成身体威胁', '让身体有时 solid、有时 hollow / deflated', '以尺度不一致代替数字后期变形'],
        sourceUrl: 'https://www.foam.org/articles/foam-talent-sara-de-brito-faustino', images: [], relations: []
      },
      {
        title: 'Self-performance inside the constructed world', cluster: 'self-portrait / reenactment / image-performance-installation', period: '2020s–',
        summary: 'Foam 将她的方法描述为 image、performance 和 installation 之间的 elaborate tableaux。艺术家本人不是站在真实童年房间里“重演”，而是在模型和身体替身组成的新空间中反复切换角色：有时是巨人，有时只留下碎片和痕迹。',
        actions: ['决定真实身体何时进入图像', '使用 self-portrait / reenactment 处理无法由模型单独承担的记忆', '在人物与 miniature architecture 之间控制视线和比例', '通过摄影压平 sculpture、model 和真实身体的来源差异', '避免把暴力直接重演成新闻式情节'],
        sourceUrl: 'https://www.foam.org/articles/foam-talent-sara-de-brito-faustino', images: [], relations: []
      },
      {
        title: 'From constructed tableau to photographic series', cluster: 'camera / flattening / Foam Talent / exhibition', period: '2025–2026',
        summary: '最终作品看起来仍然是摄影，但照片是模型、雕塑、布光和表演劳动的最后一次转换。2025 年项目获得 DIOR Photography Award for Young Talent，2026 入选 Foam Talent，并在 Foam 展览中以完整系列进入机构语境。',
        actions: ['在模型中反复移动相机寻找接近真实房间的视角', '控制景深和光线避免模型只被读作 dollhouse', '将模型 / sculpture / performance 压成单一摄影平面', '按系列编辑正常日常与暴力异常之间的节奏', '以大幅输出让 miniature 重新获得接近身体的尺度', '将作品从学校 / 奖项语境推进到 Foam Talent 展览'],
        sourceUrl: 'https://www.foam.org/articles/foam-talent-sara-de-brito-faustino', images: [],
        relations: [rel('奖项', 'DIOR Photography Award for Young Talent', '2025'), rel('展览', 'Foam Talent 2026 — Foam Amsterdam', '6 June–26 August 2026')]
      }
    ],
    awards: ['DIOR Photography Award for Young Talent 2025', 'Foam Talent 2026'],
    exhibitions: ['Foam Talent 2026 — Foam, Amsterdam'],
    sources: [
      { label: 'Foam — A Home With No Roof', url: 'https://www.foam.org/articles/foam-talent-sara-de-brito-faustino' },
      { label: 'Foam Talent 2026', url: 'https://www.foam.org/events/foam-talent-2026' },
      { label: 'ECAL — Sara De Brito Faustino', url: 'https://ecal.ch/en/school/network/people/sara-de-brito-faustino/' }
    ]
  }
};