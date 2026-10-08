import type { Artist } from './data';

// Source audit: research/updates/2026-10-08-broadening32.md
export const broadeningBatch32: Artist[] = [
  {
    id: 'mark-mcknight', name: 'Mark McKnight', born: '1984', base: 'Los Angeles, United States',
    intro: '出生于 Los Angeles、具有 New Mexican Hispana 家族背景的 queer mixed-race 摄影艺术家，以银盐黑白、暗房过印、身体局部与荒漠物质研究欲望、脆弱、失落和 male beauty。他借用 twentieth-century modernist photography 的高反差、肌理和形式纪律，却将 hirsute、soft-bodied、often nonwhite male bodies 放进曾排除这些身体的视觉传统。',
    methods: ['银盐黑白摄影', '暗房过印', '身体局部抽象', '亲密关系协作', '现代主义摄影反写'],
    subjects: ['queer male desire', 'mixed-race identity', '非欧洲中心男性美', '身体与地景', '脆弱与熵', '摄影史修订'],
    outputs: ['摄影系列', '暗房印相', '摄影书', '展览', '讲座'],
    institutions: ['Aperture', 'Light Work', 'Storm King Art Center', 'Fulbright Program', 'James Harris Gallery'],
    achievements: ['Aperture Portfolio Prize 2019 winner', 'Fulbright Scholarship 2009', 'Light Work residency 2019', 'Storm King Art Center residency 2017'],
    whyImportant: '关注理由：McKnight 不以简单的“多元身体代表性”替换旧范本，而从 Weston 式 modernist print 的内部改写其观看规则。过印使皮肤、沙、混凝土和金属互相失去边界，queer desire 因此进入影调和物质结构，而不只停留在被摄者身份说明。',
    projects: [{
      year: '2017–2019', title: 'Decreation', type: '银盐黑白、暗房过印与 queer modernism／Aperture Portfolio Prize 2019 winner',
      facts: ['艺术家拍摄亲密伴侣或朋友中 hirsute、softer-bodied、often people of color 的男性身体，并有意遮蔽身份，使其承载 loss、desire、vulnerability 与 entropy。', '系列以黑白银盐传统连接皮肤、沙地、砖和 tar，回应 Edward Weston 等 twentieth-century modernists 对“事物本质”的摄影观。', 'McKnight 在暗房中过印，埋没部分细节并强化另一些部分，使身体逐渐像 concrete、metal 或 landscape，而不再只是可辨识的人体。'],
      reading: '解读：作品最关键的政治动作不是让不同身体进入镜头，而是让传统黑白摄影赖以确认形体、质感和“纯粹美”的技术失去稳定对象。身体被抽象也可能重新抹除人物，但亲密拍摄关系与对欲望来源的公开承认，使这种抽象不同于现代主义的普遍化占有。'
    }], images: [], sourceLabel: 'Aperture — Mark McKnight: Decreation', sourceUrl: 'https://aperture.org/editorial/2019-portfolio-prize-mark-mcknight/'
  },
  {
    id: 'teresa-eng', name: 'Teresa Eng', born: '1977', base: 'London, United Kingdom / Vancouver and China',
    intro: '出生于 Vancouver、现居 London 的 Chinese Canadian 摄影师，以竖幅彩色地景、重复返回和梦境般的视觉对应研究 diaspora 对 ancestral homeland 的想象与快速城市更新之间的落差。她把头发、立交桥、盆景、仿古建筑和被刻字的植物组织成记忆碎片，检验“中国梦”如何在发展、拆除和复制历史中不断重写。',
    methods: ['竖幅彩色摄影', '重复返回拍摄', '地景与身体对应', '朦胧视觉叙事', '时间距离研究'],
    subjects: ['Chinese diaspora', 'China Dream', '城市更新', '文化记忆', '祖籍想象', '复制与拆除'],
    outputs: ['摄影系列', '摄影书', '展览', '杂志发表'],
    institutions: ['Aperture', 'Paris Photo–Aperture PhotoBook Awards', 'Hyères Festival', 'Photoworks', 'British Journal of Photography'],
    achievements: ['Aperture Portfolio Prize 2019 runner-up', 'Paris Photo–Aperture First PhotoBook Award 2013 shortlist', 'Hyères Photography Grand Prix 2018 finalist'],
    whyImportant: '关注理由：Eng 没有把 diasporic return 拍成身份寻根的完成，而以不断消失、仿建和重组的城市表面证明“故乡”本身也没有固定原型。她的视觉类比有滑向诗意泛化的风险，但重复访问与具体拆建速度让梦境感始终受物质变化约束。',
    projects: [{
      year: '2013–2018', title: 'China Dream', type: '彩色地景、侨民记忆与城市转型／Aperture Portfolio Prize 2019',
      facts: ['Eng 的父母在 1950s Communist revolution 时期由 Mainland China 前往 Hong Kong，后来移民 Canada；她在 2013 年首次前往 China 时，现实与童年形成的文化想象发生冲突。', '系列标题取自 Xi Jinping 使用的 China Dream 口号，关注快速开发、拆除，以及 Cultural Revolution 中被毁历史建筑以复制品形式仓促重建。', '竖幅图像将盘旋长发、弯曲现代建筑、盆景、植物上的中文刻字和交叠立交桥并置，制造处于现实与梦境之间的记忆片段。'],
      reading: '解读：相似曲线和垂直画幅把不相连的身体、植物与基础设施暂时缝合，又让这种缝合像梦一样不可靠。项目没有提供“中国真相”，而准确呈现 diasporic imagination 在高速重建面前不断失效和重写。'
    }], images: [], sourceLabel: 'Aperture — Teresa Eng: China Dream', sourceUrl: 'https://aperture.org/editorial/2019-portfolio-prize-teresa-eng/'
  },
  {
    id: 'jack-latham', name: 'Jack Latham', born: '1989', base: 'United Kingdom / United States field research',
    intro: '出生于 Cardiff 的 Welsh photographer，以 large-format photography、档案调查、环境肖像和 photobook sequencing 研究社会叙事如何在证据空缺中形成。他围绕 Northern California 的 Bohemian Club、反对者、周边城镇与 Alex Jones 影像政治展开调查，不假装揭开秘密，而追踪秘密组织如何同时生产精英权力、新闻调查和 conspiracy culture。',
    methods: ['大画幅摄影', '档案与地点调查', '环境肖像', '间接证据链', '摄影书叙事'],
    subjects: ['Bohemian Club', 'secrecy and elite networks', 'conspiracy theories', 'Alex Jones', 'evidence gaps', 'Northern California'],
    outputs: ['摄影系列', '摄影书', '大画幅照片', '展览'],
    institutions: ['Aperture', 'Paris Photo–Aperture PhotoBook Awards', 'Kraszna-Krausz Awards', 'Images Vevey', 'Here Press'],
    achievements: ['Aperture Portfolio Prize 2019 runner-up', 'Sugar Paper Theories Paris Photo–Aperture shortlist', 'Sugar Paper Theories Kraszna-Krausz shortlist'],
    whyImportant: '关注理由：Latham 的对象并不是某个阴谋是否为真，而是 context void 如何吸引互相竞争的叙事。由于无法进入 Bohemian Grove，他拍摄远距离会员、周边场所、袭击者和象征物；这种限制真正进入了图像形式，但照片的电影感也可能继续放大神秘，因此作品必须依靠可追踪的地点与事件链抵抗自身的诱惑力。',
    projects: [{
      year: '2016–2019', title: 'Parliament of Owls', type: '大画幅调查摄影、档案与阴谋论研究／Aperture Portfolio Prize 2019',
      facts: ['项目调查 1872 年成立的 Bohemian Club 及其位于 Monte Rio redwood forest、面积约 2,700 acres 的 Bohemian Grove retreat。', '非会员不能进入核心区域，Latham 因而拍摄周边城镇、与会员有关的地点、远距离 viewing platform，以及 Richard McCaslin 等受阴谋叙事影响的人物。', '系列追踪 Alex Jones 2000 年发布 Cremation of Care 仪式影像后如何获得反建制知名度，以及该影像与 2002 年 Phantom Patriot attempted attack 的关联。'],
      reading: '解读：远距离人物、空舞台和 owl 标本既是调查受阻的证据，也主动制造悬疑。作品的批评难点正在这里：它揭示阴谋叙事由信息空白生长，却也用漂亮图像扩大空白；读者必须在摄影书的事件顺序中才能判断它是在分析神秘感还是消费神秘感。'
    }], images: [], sourceLabel: 'Aperture — Jack Latham: Parliament of Owls', sourceUrl: 'https://aperture.org/editorial/2019-portfolio-prize-jack-latham/'
  },
  {
    id: 'zora-j-murff', name: 'Zora J Murff', born: '1987', base: 'United States',
    intro: '出生于 Des Moines、结合 psychology、human services 与 photography 的美国艺术家，以肖像、空置地景、地图、档案材料和被切开的暴力影像研究 redlining、incarceration、anti-Black violence 及摄影作为证据与伤害机制的双重角色。他避免完整重播警察枪击与 lynching spectacle，转而用碎片把身体和被政策塑造的城市地景连接起来。',
    methods: ['肖像与空景并置', '住房档案重编', '暴力影像切分', '摄影书序列', '快慢暴力关联'],
    subjects: ['redlining', 'anti-Black violence', 'North Omaha', 'juvenile incarceration', '摄影与白人至上结构', '身体和城市地景'],
    outputs: ['摄影系列', '摄影书', '档案装置', '展览', '写作'],
    institutions: ['Aperture', 'Museum of Modern Art', 'Baxter St at the Camera Club of New York', 'Light Work', 'Rencontres d’Arles'],
    achievements: ['Aperture Portfolio Prize 2019 runner-up', 'Aperture–Baxter St Next Step Award 2020', 'MoMA New Photography 2020', 'Daylight Photo Award 2019'],
    whyImportant: '关注理由：Murff 不把 visible police killing 与 invisible housing policy 分成两个议题，而通过影像裂口、空地和居民叙述把 sudden violence 与 slow violence 连在一起。他同时怀疑摄影的证据功能：不完整呈现创伤既降低 spectacle，也要求观众主动补足结构关系。',
    projects: [{
      year: '2017–2019', title: 'At No Point In Between', type: '肖像、地景、档案与 redlining 研究／Aperture Portfolio Prize 2019',
      facts: ['项目集中于 Nebraska 的 historically Black neighborhood North Omaha，研究 redlining 与其他 prejudicial housing policies 对城市空间和居民生活的持续塑造。', 'Murff 将情感肖像、vacant landscapes、surveying imagery 与 fraught archival materials 并置，并把身体和地景对应为 fast 与 slow violence。', '艺术家受 viral police-shooting videos 影响，却避免完整再现创伤；摄影书切分 Walter Scott 被枪杀前的视频静帧，使图像同时作为 evidence、archive 和暴力 spectacle 被检验。'],
      reading: '解读：空地并不是“没有事件”的背景，而是政策暴力经过多年后留下的形状；被切开的警察影像则拒绝给观看者完整消费死亡的机会。系列脱离文字仍能传达断裂，但 redlining 的制度链必须通过档案序列才能准确显现。'
    }], images: [], sourceLabel: 'Aperture — Zora J Murff: At No Point In Between', sourceUrl: 'https://aperture.org/editorial/2019-portfolio-prize-zora-murff/'
  },
  {
    id: 'guanyu-xu', name: 'Guanyu Xu', born: '1993', base: 'Chicago / Beijing, China',
    intro: '出生于 Beijing、现居 Chicago 的摄影与装置艺术家，以临时家庭空间介入、摄影覆盖、尺度冲突和拆除后的再摄影研究 queer identity、censorship 与跨国观看。他在父母不知情时，把 family albums、teenage magazine images、self-portraits 和 gay male portraits 铺满保守家庭住宅，再迅速恢复原状，只留下装置的照片。',
    methods: ['家庭空间秘密介入', '摄影装置再摄影', '图像覆盖与尺度冲突', '临时搭建和拆除', '个人与流行档案混编'],
    subjects: ['queer Chinese identity', 'family secrecy', 'censorship', 'heteronormative home', 'China and United States', '自我表征'],
    outputs: ['摄影装置', '再摄影图像', '摄影书', '展览'],
    institutions: ['Aperture', 'Museum of Fine Arts Houston', 'Art Institute of Chicago', 'Foam Talent', 'Chicago photography networks'],
    achievements: ['Aperture Portfolio Prize 2019 runner-up', 'Foam Talent 2020 selection', 'Aperture editorial feature'],
    whyImportant: '关注理由：Xu 的 queer reclamation 不仅由图像内容完成，更由冒险进入、覆盖、限时拆除和父母日常空间被阻断的制作过程完成。最终照片把一次不可长期存在的行动压回平面；它既证明介入发生过，也暴露公开艺术世界与家庭现实之间仍未解决的距离。',
    projects: [{
      year: '2018–2019', title: 'Temporarily Censored Home', type: '家庭空间摄影装置与再摄影／Aperture Portfolio Prize 2019',
      facts: ['Xu 在父母不知其 gay identity 的情况下，秘密在其 Beijing 家中搭建 queer installations，并在父母返回前拆除。', '材料包含 family albums、少年时期收集的广告与 editorial tearsheets、艺术家自画像和其他 gay men 的肖像；图像铺满墙、地板、家具、抽屉与 computer desktop。', '装置使 doorway、bedroom 与 office 的日常功能暂时失效，再由最终摄影把 layered and multidimensional intervention 固定下来，比较 China 的 censorship 与 United States 的 intersectional experience。'],
      reading: '解读：密集图像不是装饰性 collage，而是用物理覆盖迫使原本排除 queer self 的家庭空间暂时承认他。项目的矛盾也很清楚：父母仍未进入协商，公开成果依赖秘密行动；“reclamation”因此是短暂占领而非关系和解。'
    }], images: [], sourceLabel: 'Aperture — Guanyu Xu: Temporarily Censored Home', sourceUrl: 'https://aperture.org/editorial/2019-portfolio-prize-guanyu-xu/'
  },
  {
    id: 'fabiola-cedillo', name: 'Fabiola Cedillo', born: '出生年份未公开', base: 'Cuenca, Ecuador',
    intro: 'Ecuador 摄影艺术家、教育者与出版组织者，以家庭长期协作、diptych、彩色日常图像、超现实对应和当事人绘画研究 disability、communication barriers 与姐妹关系。她围绕患 rare brain disorder 的姐姐 Tita 展开，但拒绝把对方缩减为诊断对象，让 Tita 的猫、动作、房间、家庭幽默和亲笔绘画共同构成可表达而不必被完全解释的世界。',
    methods: ['家庭长期协作', '彩色双联画', '超现实视觉对应', '家庭成员文字介入', '当事人绘画纳入'],
    subjects: ['disability representation', '姐妹关系', '沟通障碍', '照护劳动', '现实与幻想', '家庭亲密与界限'],
    outputs: ['摄影系列', '摄影书', '绘画与摄影组合', '教育项目', '展览'],
    institutions: ['Aperture', 'AULA analogue laboratory', 'FOTO-ALBUM Ecuador', 'World Press Photo Joop Swart Masterclass network', 'Copenhagen Photo Festival'],
    achievements: ['Aperture Portfolio Prize 2018 runner-up', 'Joop Swart Masterclass 2018 nominee', 'New Generation Prize 2017', 'Los mundos de TITA photobook award shortlists'],
    whyImportant: '关注理由：Cedillo 让 Tita 的表达方式真正改变作品结构，而不是把 drawing 当成病理证据或温情附件。双联画用相似形状建立推测性的沟通，却保留暗部、背影和信息缺失；这种“不完全理解”比替 Tita 解释内心更负责任，同时仍需警惕亲属摄影天然拥有的代表权不对等。',
    projects: [{
      year: '2013–2016', title: 'Los mundos de TITA', type: '家庭协作、彩色双联画与 disability representation／Aperture Portfolio Prize 2018',
      facts: ['系列围绕艺术家姐姐 Tita 展开；Tita 儿时被诊断 rare brain disorder，成年后仍需要 family full-time care，家庭主要通过拥抱和凝视沟通。', 'Cedillo 以 diptychs 将粉色卧室、塑料浴盆中的成年男性、马厩白马、Tita 的背影和家庭日常组合，在 girlhood fragments 与 surreal visions 之间建立联系。', '系列主动纳入 Tita 自己的 drawings，并与她抱猫的肖像并置；作品由此让 Tita 成为图像作者之一，而不仅是被拍摄的对象。'],
      reading: '解读：双联画不会证明 Tita “真正看见什么”，而把姐姐试图理解她时产生的联想公开出来。最有效的部分是 Tita 的绘画打断摄影师单一视角；最需要保持警惕的则是爱与长期照护并不能自动解决谁选择、编辑和出版形象的问题。'
    }], images: [], sourceLabel: 'Aperture — Fabiola Cedillo: Los mundos de TITA', sourceUrl: 'https://aperture.org/editorial/2018-portfolio-prize-runner-up-fabiola-cedillo/'
  }
];
