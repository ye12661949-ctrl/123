import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

export const archiveBatch53: Record<string, ArtistArchive> = {
  'lorna-simpson': {
    artistId: 'lorna-simpson',
    projectCoverage: '7 个 photo-text / body refusal / archive collage / painting transition 节点已建立深档案 · 1980s–现在',
    imageCoverage: '0 / 7 项目已有代表图像',
    note: 'Simpson 的作品不能只被总结成“黑人女性 + 文字”。她真正持续研究的是观看如何自动替身体命名。早期用背部、碎片和冷静 caption 拒绝肖像识别；后来让 wigs、voice、Ebony / Jet magazine archives、geology 与 painting 接管身体。身份因此始终通过替代物和观看习惯被生产。',
    projects: [
      {
        title: 'Guarded Conditions', cluster: 'photo-text / repeated back / fragmentation / racialised gaze', period: '1989',
        summary: '同一黑人女性背部被重复拍摄并切分为多个 panel，文字 fragments 与身体 fragments 同时出现。观众无法通过脸确认身份，却仍会自动从皮肤、头发、性别符号推断人物，这正是作品要暴露的观看机制。',
        actions: ['使用统一 studio 条件拍摄人物背部', '避免脸部和直接身份信息', '重复同一身体并切分为多个 vertical panels', '在图像之间加入极短文字', '让文字不是 caption 而是增加歧义', '以 serial repetition 强化分类冲动又让分类失败'],
        sourceUrl: 'https://www.moma.org/collection/artists/6602', images: [], relations: []
      },
      {
        title: 'Wigs', cluster: 'body substitute / lithograph grid / hair / gender-race coding', period: '1994',
        summary: '作品几乎没有身体，只留下假发图像与文字。不同 hair style 像档案 specimen 被并列；观众仍能迅速给它们附加 race、gender、class 和年代想象，说明身份编码不需要真实人物出现。',
        actions: ['收集 / 摄影不同 wigs', '将假发从佩戴者身体中完全移除', '统一背景与印刷方式', '以 grid / archive-like arrangement 展示', '加入短文字但不提供完整人物故事', '让 object 代替 portrait 承担社会分类'],
        sourceUrl: 'https://www.moma.org/collection/artists/6602', images: [], relations: []
      },
      {
        title: 'Easy to Remember', cluster: 'video / mouths / humming / collective memory / fragmented body', period: '2001',
        summary: '15 个嘴部 close-up 共同哼唱 Rodgers and Hart 的 Easy to Remember。脸继续缺席，但 breath、voice、lip movement 形成另一种集体 portrait；身份由声音关系而不是视觉面貌建立。',
        actions: ['邀请15位 performers', '只拍 mouth / lower-face fragment', '统一 close-up framing', '让每个人哼唱同一 melody', '将不同声音叠成 collective humming', '循环播放让声音先于完整人物身份进入空间'],
        sourceUrl: 'https://lsimpsonstudio.com/films/easy-to-remember-2001', images: [], relations: []
      },
      {
        title: 'Ebony / Jet archive collages', cluster: 'Black magazine archive / cut body / geological-cosmic replacement', period: '2010–2018',
        summary: 'Simpson 从 Ebony、Jet 等黑人杂志历史图像中剪取女性 faces / hair / bodies，再与 ink wash、geology、ice、cosmic textures 拼合。熟悉的 beauty / lifestyle archive 被重新做成不可能身体。',
        actions: ['收集 vintage Ebony / Jet magazine pages', '裁切人物 face / hair / fashion fragments', '扫描 / 复制 historical printed texture', '加入 ink、found landscape、geology 或 ice imagery', '让拼贴接缝明显存在', '通过大量 series 比较 archive 中黑人女性身体的重复编码'],
        sourceUrl: 'https://lsimpsonstudio.com/collages', images: [], relations: []
      },
      {
        title: 'Ice / Riunite / geological body works', cluster: 'collage / cold material / landscape-body fusion', period: '2014–2018',
        summary: '冰层、岩石、烟雾与 magazine bodies 被不断融合。Landscape 不再是人物背景，而替换头发、皮肤和身体内部，进一步把 portrait 从“一个人的脸”转成物质状态。',
        actions: ['搜集冰川 / rock / water textures', '将 texture 切入 portrait fragment', '以 monochrome / blue-black palette 统一', '扩大 hair 与 geological form 的形态相似', '把人物 archive 转为 landscape-body hybrid'],
        sourceUrl: 'https://lsimpsonstudio.com/collages', images: [], relations: []
      },
      {
        title: 'Painting transition', cluster: 'ink / acrylic / photographic source / monumental figure', period: '2015–现在',
        summary: 'Simpson 逐渐把 collage 中产生的身体 / landscape hybrids 转成大型 painting。摄影 source 仍然在底层，但不再作为最终表面；ink、acrylic、wash 让图像变得更像天气、冰层或精神空间。',
        actions: ['从 archive / collage 选择 photographic source', '放大并转译到 large-scale support', '加入 ink wash / acrylic layers', '保留 figure fragment 但破坏清楚轮廓', '通过重复蓝黑、ice、smoke 形成跨画面环境', '让 photographic archive 变成 painting 的起始材料'],
        sourceUrl: 'https://lsimpsonstudio.com/collages', images: [], relations: []
      },
      {
        title: 'Refusal of the complete portrait', cluster: 'meta-method / withholding / text-image instability', period: '1980s–现在',
        summary: '从 Guarded Conditions 到 Wigs、mouth video、magazine collage，Simpson 持续拒绝提供一个可以被迅速“读懂”的完整 portrait。她不是隐藏身份，而是让观众意识到自己如何靠很少的视觉线索就制造身份。',
        actions: ['删除 face / name / biography 等直接确认信息', '用 back、hair、mouth、object 替代完整身体', '加入不稳定文字而非解释性 caption', '让 series repetition 暴露 stereotype', '通过 archive / collage 继续改变同一观看问题'],
        sourceUrl: 'https://www.moma.org/collection/artists/6602', images: [], relations: []
      }
    ],
    awards: [],
    exhibitions: ['Whitney Biennial contexts', 'Major museum surveys', 'Sharjah Biennial 16 context'],
    sources: [
      { label: 'MoMA — Lorna Simpson', url: 'https://www.moma.org/collection/artists/6602' },
      { label: 'Lorna Simpson Studio — Collages', url: 'https://lsimpsonstudio.com/collages' },
      { label: 'Lorna Simpson Studio — Easy to Remember', url: 'https://lsimpsonstudio.com/films/easy-to-remember-2001' }
    ]
  },

  'martha-rosler': {
    artistId: 'martha-rosler',
    projectCoverage: '8 个 photomontage / video / documentary critique / social-project 节点已建立深档案 · 1967–现在',
    imageCoverage: '0 / 8 项目已有代表图像',
    note: 'Rosler 的政治性不是“拍政治题材”，而是反复破坏既有图像系统：家居广告如何遮蔽战争、documentary 如何把穷人变成视觉类型、instructional video 如何训练女性角色、exhibition 如何排除真正受影响的社区。她经常直接拿媒体格式本身做材料。',
    projects: [
      {
        title: 'House Beautiful: Bringing the War Home', cluster: 'cut-and-paste photomontage / Vietnam War / domestic advertising', period: '1967–1972',
        summary: 'Rosler 把 Vietnam War 新闻照片手工剪进 House Beautiful 等理想美国家居广告。战争与富裕 interior 被做成同一透视空间，直接攻击电视时代“living-room war”中远方暴力如何被消费。',
        actions: ['搜集战争新闻照片', '搜集 glossy home / lifestyle magazine advertising', '手工 cut-and-paste 而非隐藏拼贴痕迹', '匹配门窗、家具与战场人物的透视', '制作 photocopy versions', '在 anti-war demonstrations 等非艺术场合流通', '把作品首先当 agitational material 而非珍贵 art object'],
        sourceUrl: 'https://www.moma.org/collection/works/152791', images: [], relations: []
      },
      {
        title: 'The Bowery in two inadequate descriptive systems', cluster: 'photo-text / documentary refusal / Bowery / language taxonomy', period: '1974–1975',
        summary: '作品拍摄 Bowery storefronts，却拒绝拍“典型 homeless / alcoholic person”；旁边不是社会调查数据，而是大量表示 drunk 的 slang。摄影与语言都被明确标记为“不充分的描述系统”。',
        actions: ['步行拍摄 Bowery storefronts', '刻意不把边缘人物作为视觉 spectacle', '统一黑白正面 street photographs', '搜集表示 intoxication 的 slang / euphemism', '让词与照片成对但不一一说明', '通过 grid 揭示 documentary 与 language 都无法完整代表他人'],
        sourceUrl: 'https://www.moma.org/artists/6832-martha-rosler', images: [], relations: []
      },
      {
        title: 'Semiotics of the Kitchen', cluster: 'video performance / alphabet / domestic tools / violent instruction', period: '1975',
        summary: '6分19秒黑白录像中，Rosler 像电视 cooking instructor 一样按字母顺序展示 kitchen tools，但动作越来越攻击性。字母表、工具名称和标准示范被转成关于家务角色约束的身体语言。',
        actions: ['建立 A–Z kitchen-tool list', '固定 camera 与台面位置', '采用 instructional TV 的正面表演格式', '逐件举起 / 使用 kitchen implement', '逐渐夸大、扭曲示范动作', '保持 deadpan 表情与直接 eye contact', '用最后身体 gestures 替代缺少的 letters'],
        sourceUrl: 'https://www.moma.org/collection/works/159788', images: [], relations: []
      },
      {
        title: 'Vital Statistics of a Citizen, Simply Obtained', cluster: 'measurement performance / female body / bureaucratic classification', period: '1977',
        summary: '女性身体被不断测量、朗读数字和分类，模拟 medical / bureaucratic / scientific procedure。作品把看似中性的 measurement 展示成对身体价值进行规范化的权力动作。',
        actions: ['搭建 measurement / examination setting', '由 assistants 使用量具反复测量身体', '公开朗读 / 记录尺寸', '让 camera 观察整个制度动作', '通过重复时间制造不适感', '把“客观数字”与身体被控制直接连接'],
        sourceUrl: 'https://www.moma.org/artists/6832-martha-rosler', images: [], relations: []
      },
      {
        title: 'If You Lived Here…', cluster: 'housing / exhibition as social platform / activists / documents', period: '1989',
        summary: 'Dia 项目把 housing、homelessness 与 urban policy 变成 exhibition / discussion platform。Rosler 不只陈列艺术家作品，而把 activists、community groups、maps、statistics、posters 与 public meetings 纳入展览。',
        actions: ['与 housing activists / community groups 建立合作', '搜集政策文件、地图与 grassroots materials', '邀请不同作者进入同一展览', '组织 public meetings / discussions', '改变 white-cube 展览的信息密度', '让 institution 成为现实政治协作地点而非只展示政治主题'],
        sourceUrl: 'https://www.diaart.org/exhibition/exhibitions-projects/martha-rosler-if-you-lived-here-exhibition', images: [], relations: [rel('展览', 'If You Lived Here… — Dia Art Foundation', '1989')]
      },
      {
        title: 'Bringing the War Home: House Beautiful, New Series', cluster: 'Iraq War / digital media / remake / historical recurrence', period: '2004–2008',
        summary: 'Iraq War 期间，Rosler 重新启动早期 photomontage protocol。技术环境从 Vietnam-era print media 转向 digital news，但核心动作不变：把国外战争与国内消费 interior 做成同一张“正常”生活图。',
        actions: ['搜集 Iraq War digital news imagery', '搜集 contemporary luxury interiors / advertising', '使用 digital montage 取代早期纯手工 collage', '保持 domestic-war spatial collision', '与1960s作品并置显示媒体机制重复', '让 remake 本身成为历史比较方法'],
        sourceUrl: 'https://www.moma.org/artists/6832-martha-rosler', images: [], relations: []
      },
      {
        title: 'Meta-Monumental Garage Sale', cluster: 'garage sale / value / transaction / museum performance', period: '1973–2012',
        summary: 'Rosler 多次把真实 garage sale 搬进艺术机构，出售二手物并与观众讨价还价。消费、家庭物件、劳动与 museum value 被放进同一交易现场。',
        actions: ['收集普通二手 household objects', '给物件安排可协商价格', '搭建真实 garage-sale display', '由艺术家 / 工作人员与观众交易', '保留杂乱而非 museum shop aesthetics', '让 exchange / bargaining 成为作品时间', '每次重演根据当地物件更新'],
        sourceUrl: 'https://www.moma.org/artists/6832-martha-rosler', images: [], relations: [rel('展览', 'Meta-Monumental Garage Sale — MoMA', '2012')]
      },
      {
        title: 'Media format as political material', cluster: 'meta-method / magazine / television / documentary / exhibition', period: '1960s–现在',
        summary: 'Rosler 长期不追求固定 visual style，而是根据权力运行方式选择媒体格式：战争进入 magazine，就剪 magazine；性别角色通过 TV instruction 传播，就模拟 TV；housing 被政策 / exhibition 语言管理，就直接重做 exhibition。',
        actions: ['先识别议题通过哪种 media / institution 被正常化', '挪用该媒介原始语法', '只改变关键关系使其暴露', '在 circulation 上保持政治目的', '避免用一种签名风格处理所有问题'],
        sourceUrl: 'https://www.moma.org/artists/6832-martha-rosler', images: [], relations: []
      }
    ],
    awards: [],
    exhibitions: ['If You Lived Here… — Dia 1989', 'Meta-Monumental Garage Sale — MoMA 2012', 'MoMA collection / video and photography contexts'],
    sources: [
      { label: 'MoMA — Martha Rosler', url: 'https://www.moma.org/artists/6832-martha-rosler' },
      { label: 'MoMA — House Beautiful', url: 'https://www.moma.org/collection/works/152791' },
      { label: 'MoMA — Semiotics of the Kitchen', url: 'https://www.moma.org/collection/works/159788' }
    ]
  },

  'walid-raad': {
    artistId: 'walid-raad',
    projectCoverage: '8 个 fictional archive / car-bomb index / lecture-performance / museum infrastructure 节点已建立深档案 · 1989–现在',
    imageCoverage: '0 / 8 项目已有代表图像',
    note: 'Raad 的关键不是“真假混合”，而是精确制造一个会让人相信的 institutional format：foundation、archive category、inventory number、technical caption、lecture、museum floor。虚构只有放进这些可信格式后才真正工作，所以形式上的行政 / 档案细节比故事奇怪程度更重要。',
    projects: [
      {
        title: 'The Atlas Group — fictional institution', cluster: 'fictional foundation / Lebanon wars / archive taxonomy', period: '1989–2004',
        summary: 'The Atlas Group 以真实研究机构口吻出现，声称保存 Lebanese wars 文档。档案被分成 cat. A、FD、AGP 等类别，documents 既有真实 found material，也有 Raad 制作并 attributed 给 imagined / historical figures 的内容。',
        actions: ['建立虚构 nonprofit research organisation 名称与 mission', '设计 archive categories / labels', '研究真实 Lebanese war archives', '制作 photo、video、notebook、text documents', '将文件 attributed 给 imaginary / historical authors', '在 exhibition / lecture 中不直接标明真假层级', '让 archive format 本身生产可信度'],
        sourceUrl: 'https://www.moma.org/calendar/exhibitions/1493', images: [], relations: []
      },
      {
        title: 'My neck is thinner than a hair: Engines', cluster: 'car-bomb archive / newspaper backs / scanning / evidence critique', period: '1996–2001',
        summary: '100 张 inkjet prints 来自 Lebanon newspaper archives 中 car bomb 爆炸后 engine 的照片。Raad 扫描照片正反面，并加入 date、photographer、背面 notation translation，把“炸弹证据”变成对新闻 photo opportunity 和无效 forensic clue 的档案。',
        actions: ['进入 Lebanese newspaper archives', '收集 car-bomb aftermath engine photos', '扫描照片正面与背面', '记录爆炸日期 / photographer', '翻译背面 handwritten notations', '统一输出为100张 inkjet prints', '让 engine 的“evidence”与 politicians pose / press circulation 同时可见'],
        sourceUrl: 'https://www.moma.org/collection/works/91530', images: [], relations: [rel('收藏', 'MoMA', '100 inkjet prints')]
      },
      {
        title: 'Hostage: The Bachar Tapes', cluster: 'fictional testimony / videotape / hostage archive / translation', period: '2001',
        summary: '作品构造 Lebanese hostage Souheil Bachar 的 videotaped testimony，并借真实西方 hostage history 与 invented perspective 重新分配谁有资格讲述事件。录像的 translation、editing 和 institutional attribution 都参与“证词可信度”。',
        actions: ['研究1980s Lebanon hostage history', '建立 Souheil Bachar narrator persona', '制作 direct-address video testimony', '使用 subtitle / translation 结构', '将虚构 narrator 与真实历史人物并置', '把 work 归入 Atlas Group archive category'],
        sourceUrl: 'https://www.moma.org/artists/35285-walid-raad', images: [], relations: []
      },
      {
        title: 'Oh God, he said, talking to a tree', cluster: 'war image / smoke cloud / abstraction / digital print', period: '2004–2008',
        summary: 'Raad 从 2006 Lebanon war 爆炸图像等材料中处理烟云 / 爆炸痕迹。地点和新闻现场被大幅抽离后，战争证据变得接近形式主义抽象，但 titles 又把它重新钉回具体日期 / 地点。',
        actions: ['搜集 war / explosion photographs', '数字裁切 smoke / cloud forms', '弱化人物和原现场 context', '保留 date / location title', '以 series 比较不同爆炸痕迹', '让抽象观看与历史证据阅读发生冲突'],
        sourceUrl: 'https://www.moma.org/artists/35285-walid-raad', images: [], relations: []
      },
      {
        title: 'Scratching on things I could disavow', cluster: 'Arab art infrastructure / museums / fairs / geopolitical conflict', period: '2007–现在',
        summary: '项目从 Lebanese wars archive 转向 Arab-world contemporary art infrastructure：new museums、art fairs、galleries、collections 如何在资本、战争和 geopolitical shifts 中建立“Arab art history”。',
        actions: ['研究 Gulf / Middle East museum and market development', '追踪 artworks、institutions、collections circulation', '制作 architectural model / miniature / colour panel', '把真实机构史与 impossible stories 混合', '持续修改作品随新机构发展而更新', '通过 exhibition + lecture 同时运行'],
        sourceUrl: 'https://www.moma.org/calendar/exhibitions/1493', images: [], relations: []
      },
      {
        title: 'Walkthrough', cluster: '55-minute lecture-performance / five platform stages / museum floor replicas', period: '2011–',
        summary: 'Walkthrough 把 research project 转成现场讲演。Raad 在五个 platform stage 之间移动，每个平台 floor 模仿不同 art space，从 poured concrete 到 Met parquet；讲述、建筑 surface 与虚构 history 共同制造权威。',
        actions: ['制作五个不同 museum / gallery floor platforms', '编排约55分钟 lecture-performance', '在平台间移动改变 narrator authority', '同步展示 image / model / object', '把 personal anecdote、institutional fact 与 impossible event 交织', '让 audience 无法只靠表演口吻区分真假'],
        sourceUrl: 'https://www.moma.org/calendar/events/1465', images: [], relations: [rel('展览', 'Walid Raad — MoMA', '2015–2016')]
      },
      {
        title: 'Museum architecture as evidence system', cluster: 'floor / wall / scale model / institution critique', period: '2010s–现在',
        summary: '后期作品不断把 museum floor、wall dimension、miniature gallery 和 display protocol 直接做进作品。机构不再只是作品展出的容器，而成为判断什么算 art history 的证据机器。',
        actions: ['测量 /复制真实 museum architectural details', '将 floor pattern 变成 performance stage', '缩小 gallery / artwork scale', '用 display hardware 制造 authority', '让观众注意 institution 的“中性背景”其实是主动结构'],
        sourceUrl: 'https://www.moma.org/calendar/events/1530', images: [], relations: []
      },
      {
        title: 'Archival credibility as construction material', cluster: 'meta-method / metadata / attribution / narrative authority', period: '1989–现在',
        summary: 'Raad 的长期方法可以拆成：事件研究 → metadata → authority format → document → attribution → public narration。虚构不是从无到有讲故事，而是把可信制度的生产步骤本身转成媒介。',
        actions: ['先研究真实 historical record', '学习 archive catalog / museum caption 语言', '制作高度具体 metadata', '设计 fictional attribution', '让 image / text / performance 同时支持 archive identity', '故意留下少量矛盾供观众发现'],
        sourceUrl: 'https://www.moma.org/calendar/exhibitions/1493', images: [], relations: []
      }
    ],
    awards: [],
    exhibitions: ['The Atlas Group 1989–2004', 'Walid Raad — MoMA 2015–2016', 'ICA Boston / international survey contexts'],
    sources: [
      { label: 'MoMA — Walid Raad exhibition', url: 'https://www.moma.org/calendar/exhibitions/1493' },
      { label: 'MoMA — My neck is thinner than a hair', url: 'https://www.moma.org/collection/works/91530' },
      { label: 'MoMA — Walkthrough', url: 'https://www.moma.org/calendar/events/1465' }
    ]
  },

  'boris-mikhailov': {
    artistId: 'boris-mikhailov',
    projectCoverage: '7 个 Soviet everyday / hand-colour / slide superimposition / photo-text book / staged documentary 节点已建立深档案 · 1960s–1998',
    imageCoverage: '0 / 7 项目已有代表图像',
    note: 'Mikhailov 的摄影不是一种“粗粝纪实风格”。他不断更换图像生产机制：按颜色分类街拍、手工染色、两张 slide 叠加、照片加 handwriting、支付被摄者进行 staged portrait。理解他最重要的是看每个系列如何改变“纪实照片凭什么可信”。',
    projects: [
      {
        title: 'Red Series', cluster: 'colour motif / Soviet ideology / street taxonomy', period: '1968–1975',
        summary: 'Mikhailov 在 Soviet everyday life 中持续追踪 red：旗帜、衣物、墙面、公共 decoration 与普通生活偶然同框。颜色成为一种分类 protocol，用来观察 ideology 如何以最日常方式进入视觉环境。',
        actions: ['日常携带相机拍摄 Kharkiv', '把出现 red element 的照片持续保留', '不要求事件具有新闻价值', '跨年份按 colour motif 重新分类', '将 political symbol 与 ordinary gesture 并置', '通过 series accumulation 而非单张象征建立含义'],
        sourceUrl: 'https://www.moma.org/artists/8168-boris-mikhailov', images: [], relations: []
      },
      {
        title: 'Luriki / hand-coloured family-photo logic', cluster: 'hand colour / kitsch / family portrait / Soviet visual norm', period: '1970s',
        summary: '受 Soviet household hand-coloured photographs 影响，Mikhailov 对黑白照片进行人工 colouring，故意保留俗艳、不自然色彩。私人家庭审美与官方 photographic realism 因此相互污染。',
        actions: ['拍摄 / 选取 ordinary black-and-white photographs', '手工加入 transparent / opaque colour', '不追求 colour accuracy', '模拟 vernacular family-photo beautification', '把 kitsch surface 当成时代社会视觉证据'],
        sourceUrl: 'https://www.moma.org/artists/8168-boris-mikhailov', images: [], relations: []
      },
      {
        title: 'Yesterday’s Sandwich', cluster: 'slide superimposition / analogue layer / accidental collision', period: '1960s–1970s',
        summary: '两张 colour slides 同时投影 / superimpose，让原本无关的 body、street、landscape、private images 产生怪异透明 overlap。它像模拟时代的 Photoshop layer，但偶然关系比精确控制更重要。',
        actions: ['从既有 slide archive 选择两张图', '在 projector 中同时 superimpose', '测试不同 pairing', '保留意外 colour / scale collision', '重新摄影 / 固定 overlap 结果', '按新的视觉 / social association 编辑 series'],
        sourceUrl: 'https://www.moma.org/artists/8168-boris-mikhailov', images: [], relations: []
      },
      {
        title: 'Unfinished Dissertation', cluster: 'photo book / handwritten text / ordinary snapshot / philosophical diary', period: '1984–1985',
        summary: '普通快照被贴在纸页上，周围写满手写 notes、哲学碎片和讽刺评论。照片不再自主提供意义，page layout、handwriting 和阅读节奏共同成为作品。',
        actions: ['从 ordinary snapshot archive 选图', '把小照片贴到 manuscript-like paper', '围绕图像手写 notes / quotation / reflection', '允许文字覆盖 / 偏离照片内容', '按 book sequence 组织思想节奏', '保留“未完成论文”而非正式学术论文外观'],
        sourceUrl: 'https://www.moma.org/artists/8168-boris-mikhailov', images: [], relations: []
      },
      {
        title: 'By the Ground', cluster: 'low camera / post-Soviet street / brown tone / bodily viewpoint', period: '1991',
        summary: 'Soviet collapse 前后，他把 camera 压低到接近地面，街道人物和城市空间由异常低位出现。视角改变比题材更直接地制造“社会秩序失去稳定高度”的感觉。',
        actions: ['在 Kharkiv streets 快速拍摄', '将 camera 持在 waist / ground-like low level', '不通过 viewfinder 精确 control 所有 frame', '接受倾斜 / 截断身体', '统一 earthy / brown tonality', '按身体高度差形成 series'],
        sourceUrl: 'https://www.moma.org/artists/8168-boris-mikhailov', images: [], relations: []
      },
      {
        title: 'Case History', cluster: 'paid collaboration / staged documentary / homelessness / post-Soviet capitalism', period: '1997–1998',
        summary: '回到 Kharkiv 后，Mikhailov 面对 Soviet collapse 后显著增多的 homeless / marginalized population。他支付被摄者并与其共同安排裸体、religious / historical painting-like poses，再以接近 life-size chromogenic prints 呈现。document 与 staging 被故意放在一起。',
        actions: ['在 Kharkiv 与 homeless / marginalized people 接触', '明确支付 models', '与人物共同决定 pose / undressing / performance', '借用 religious / art-historical pose language', '在街道 / 临时 interior 拍摄', '使用 saturated colour', '以大尺幅接近 life-size print 强迫近距离观看', '不隐藏 payment / power relation 的伦理争议'],
        sourceUrl: 'https://www.moma.org/calendar/exhibitions/1125', images: [], relations: [rel('展览', 'Boris Mikhailov: Case History — MoMA', '2011')]
      },
      {
        title: 'Documentary instability as method', cluster: 'meta-method / manipulation / text / performance / ethics', period: '1960s–1990s',
        summary: 'Mikhailov 一贯不把 manipulation 与 documentary 对立：手工染色、叠片、文字、支付表演都公开存在。现实的社会条件仍真实，但“摄影师如何制造现实可见形式”从不被伪装成透明。',
        actions: ['每个系列更换一套 image-making rule', '公开保留 intervention traces', '让 staged 与 observed image 共存', '把 book / sequence 作为意义生产而非存档', '将 ethical discomfort 纳入作品阅读'],
        sourceUrl: 'https://www.moma.org/artists/8168-boris-mikhailov', images: [], relations: []
      }
    ],
    awards: ['Hasselblad Award 2000'],
    exhibitions: ['Case History — MoMA 2011', 'Major retrospectives across Europe'],
    sources: [
      { label: 'MoMA — Boris Mikhailov', url: 'https://www.moma.org/artists/8168-boris-mikhailov' },
      { label: 'MoMA — Case History', url: 'https://www.moma.org/calendar/exhibitions/1125' },
      { label: 'MoMA — Case History work', url: 'https://www.moma.org/collection/works/83336' }
    ]
  },

  'armin-linke': {
    artistId: 'armin-linke',
    projectCoverage: '7 个 infrastructure photography / expert re-reading / ocean governance / image economy 节点已建立深档案 · 1999–2026',
    imageCoverage: '0 / 7 项目已有代表图像',
    note: 'Linke 最适合研究“复杂系统怎么拍”。他很少寻找一张 symbolic hero image，而是进入控制室、实验室、UN negotiation、museum storage、deep-sea-mining research、image archive，让摄影和录像成为 infrastructure research。之后再邀请 experts 重新解释档案，主动削弱摄影师自己的最终解释权。',
    projects: [
      {
        title: 'Alpi', cluster: 'Alps / infrastructure / tourism / state-space / photography-film archive', period: '1999–2004',
        summary: '跨 Alpine region 拍摄 tourism、hydropower、transport、military / state boundary、leisure 与 mountain landscape。作品拒绝“自然 Alps”视角，而把 mountains 看成由 engineering、tourism 和 governance 持续制造的 territory。',
        actions: ['跨多个 Alpine countries 长期移动', '同时拍摄 landscape 与后台 infrastructure', '进入 cable-car、dam、tourism / science spaces', '记录人造系统如何管理自然', '将 still photography 与 film material 共同积累', '通过 archive / exhibition 重新分类空间关系'],
        sourceUrl: 'https://www.arminlinke.com/', images: [], relations: []
      },
      {
        title: 'The Appearance of That Which Cannot Be Seen', cluster: 'photo archive / expert interpretation / multiple epistemologies', period: '2015–2017',
        summary: 'Linke 邀请 scientists、architects、theorists 等不同专家进入他的 photo archive，针对同一图像作专业解读。摄影意义因此不由 artist caption 一次决定，而成为不同 knowledge systems 之间的 negotiation。',
        actions: ['从多年 archive 选择 system-related photographs', '邀请不同领域 experts', '让 expert 自主选择 / 排列图像', '录制其口头 interpretation', '将 same photograph 在不同专家语境中重复出现', '把 exhibition version 随邀请者改变', '将 authorial interpretation 部分交给外部知识'],
        sourceUrl: 'https://www.arminlinke.com/', images: [], relations: []
      },
      {
        title: 'Prospecting Ocean — field research', cluster: 'deep-sea mining / science / industry / UN governance / activist network', period: '2017–2025',
        summary: '项目追踪 deep-sea mining 从 oceanographic research、robotics、mining industry 到 international law / negotiation 的整套 technocratic network。真正被拍摄的“海洋”大量存在于 meeting room、machine、lab、screen 和 treaty process。',
        actions: ['联系 marine science institutions', '进入 deep-sea mining technology / research sites', '拍摄 robot、sample、control interface', '旁听 / 记录 governance / negotiation spaces', '采访 scientist、industry、law / activist actors', '搜集1960s–70s deep-sea-mining archive', '将 film、photo、document、interview 组合为空间 research installation'],
        sourceUrl: 'https://www.arminlinke.com/', images: [], relations: [rel('展览', 'Prospecting Ocean — Columbia GSAPP', '2025')]
      },
      {
        title: 'Image Capital — image as infrastructure', cluster: 'Estelle Blaschke collaboration / storage / computation / industrial image', period: '2022–2024',
        summary: '与 photo historian Estelle Blaschke 合作研究 image 不只是文化内容，而是工业、science、automation 的 operational resource：如何 capture、store、retrieve、measure、monetise 大规模图像。',
        actions: ['研究 historic microfilm / archive technologies', '进入 scientific / industrial image-management systems', '拍摄 storage、scanner、database interfaces', '搜集 archival documents', '与 Blaschke 共同建立 research chapters', '将 old image infrastructure 与 computer vision / automation 并置', '制作 exhibition + open-access publication / website'],
        sourceUrl: 'https://www.arminlinke.com/', images: [], relations: [rel('展览', 'Image Capital — Centre Pompidou', '2023–2024')]
      },
      {
        title: 'Into the Deep / extraction research', cluster: 'aluminium / deep-sea mining / deep-space mining / colonial extraction', period: '2023',
        summary: '在 Zeppelin Museum 等 context 中，Prospecting Ocean 与 aluminium / extraction history、deep space mining 被并置。资源开采不再按“地球 vs 太空”分开，而作为同一技术 / colonial extraction imagination。',
        actions: ['把海底采矿 research 与 aluminium industrial history 对读', '加入 archive material 与 new documentation', '将 activist resistance 纳入展示', '比较 sea / space mining 的 shared technical language', '通过 museum context 连接 local industrial history 与 global extraction'],
        sourceUrl: 'https://www.arminlinke.com/', images: [], relations: [rel('展览', 'Into the Deep. Mines of the Future — Zeppelin Museum', '2023')]
      },
      {
        title: 'The City as Archive. Florence', cluster: 'city archive / historical photothek / contemporary re-reading', period: '2025–2026',
        summary: '在曾长期容纳 Kunsthistorisches Institut Photothek 的 Palazzo Grifoni Budini Gattai，Linke 的新照片与 historical documentary photos 对话，把 Florence 从“城市景观”转成 museums、collections、archives 和 knowledge sedimentation 的系统。',
        actions: ['进入 historical Photothek context', '研究 institution / collection 在城市中的位置', '拍摄 archive、museum、storage 与 civic spaces', '将 contemporary photographs 与 historic documentary archive 并置', '用 building history 作为 exhibition layer', '让 city image 通过保存 / 分类机构而非 landmark 建立'],
        sourceUrl: 'https://www.arminlinke.com/', images: [], relations: [rel('展览', 'The City as Archive. Florence', '2025–2026')]
      },
      {
        title: 'System photography as method', cluster: 'meta-method / access / interview / archive / institution / re-reading', period: '1990s–现在',
        summary: 'Linke 的通用流程是：先判断一个系统在哪里真正运转，再争取 access；拍摄后台 / interface；同步做 interview / archive research；最终让不同专家和文件重新改变照片含义。摄影不是结论，而是进入系统的一个证据节点。',
        actions: ['先画 actor / institution network', '优先拍 backstage 而非 iconic front stage', '同步收集 documents / interviews', '不依赖一张 symbolic landscape', '允许 exhibition 由 external experts 重新编辑', '把 research process 保持为可继续更新的 archive'],
        sourceUrl: 'https://www.arminlinke.com/', images: [], relations: []
      }
    ],
    awards: [],
    exhibitions: ['The Appearance of That Which Cannot Be Seen 2015–2017', 'Image Capital — Centre Pompidou 2023–2024', 'Prospecting Ocean — Columbia GSAPP 2025', 'The City as Archive. Florence 2025–2026'],
    sources: [
      { label: 'Armin Linke — official archive', url: 'https://www.arminlinke.com/' },
      { label: 'Columbia GSAPP — Prospecting Ocean', url: 'https://www.arch.columbia.edu/exhibitions/147-prospecting-ocean' }
    ]
  }
};