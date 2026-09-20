import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

export const archiveBatch54: Record<string, ArtistArchive> = {
  'jeremy-deller': {
    artistId: 'jeremy-deller',
    projectCoverage: '8 个 music / reenactment / social organisation / archive / public participation 节点已建立深档案 · 1997–2013',
    imageCoverage: '0 / 8 项目已有代表图像',
    note: 'Deller 最关键的材料不是某种雕塑，而是人群与社会关系：乐队、矿工、警察、历史重演社团、乐迷、退伍军人、路人。作品常先设定一种真实协作机制，再让事件本身、电影、口述史、档案或出版成为残留物。',
    projects: [
      {
        title: 'Acid Brass', cluster: 'brass band / acid house / class history / live performance', period: '1997–',
        summary: 'Deller 邀请 Williams Fairey Brass Band 把 acid house / rave tracks 改编成 brass band repertoire。两个都与英国工人阶级密切相关、却通常被划分成不同年代与文化圈的音乐系统在真人演奏中真正碰面。',
        actions: ['选择 acid house / rave tracks', '联系传统 British brass band', '与编曲者把 electronic tracks 转为 brass score', '组织现场排练', '以 concert 而非 gallery object 首先呈现', '录音并继续巡演', '用真实音乐劳动连接两种社会史'],
        sourceUrl: 'https://www.artangel.org.uk/artist/jeremy-deller/', images: [], relations: []
      },
      {
        title: 'The Uses of Literacy', cluster: 'fan culture / delegated content / exhibition / Manic Street Preachers', period: '1999',
        summary: 'Deller 搜集 Manic Street Preachers 乐迷自己制作的 writing、drawing、poetry 和 memorabilia，再把“fan production”作为展览主体。艺术家不生产统一物件，而负责建立进入机构的渠道和编辑关系。',
        actions: ['通过乐迷网络发出征集', '收集 letters、writing、drawing 与 handmade material', '保留不同作者原有形式', '不把 fan objects 重做成统一设计', '以 exhibition editing 建立关联', '将作品 authorship 分散到参与者'],
        sourceUrl: 'https://www.artangel.org.uk/artist/jeremy-deller/', images: [], relations: []
      },
      {
        title: 'The Battle of Orgreave — research and trust building', cluster: '1984 miners strike / oral history / community research / reenactment planning', period: '1999–2001',
        summary: '在重演前，制作团队花约一年与 South Yorkshire former miners 建立信任、收集亲历记忆并研究 1984 冲突。项目并非先有 spectacle 再找群众，而是由仍在世参与者的历史记忆决定 reconstruction 的基础。',
        actions: ['研究1984 Orgreave clash 新闻 /历史资料', '联系 former miners 与 former police', '进行 oral-history / testimony gathering', '与 community 反复讨论是否应重演', '邀请 reenactment expert Howard Giles 设计大规模行动', '把真实记忆与历史 reenactment technique 结合'],
        sourceUrl: 'https://www.artangel.org.uk/project/the-battle-of-orgreave/', images: [], relations: []
      },
      {
        title: 'The Battle of Orgreave — live reenactment', cluster: '1000+ participants / social history / film / public event', period: '2001',
        summary: '2001 年 Orgreave 重演动员 former miners、少数 former policemen 和 battle reenactment societies。Artangel 资料称超过 800 人直接参加重演，Deller 自述整个项目涉及超过 1000 人；Mike Figgis 同时拍成 Channel 4 film。',
        actions: ['组织数百名 reenactors 与亲历者', '分配 miners / police / cavalry 等角色', '制作服装与行动路线', '在真实 Orgreave location 进行现场 event', '由多机位 film crew 记录', '将1984 archival stills、2001 reenactment footage 与 testimonies 重新剪辑', '保存 archive 供后续机构重展'],
        sourceUrl: 'https://www.artangel.org.uk/project/the-battle-of-orgreave/', images: [], relations: [rel('展览', 'The Battle of Orgreave — Artangel', '2001')]
      },
      {
        title: 'Folk Archive', cluster: 'vernacular creativity / collecting / co-curation / British social life', period: '2000–',
        summary: '与 Alan Kane 合作收集 gurning competitions、morris dancing、政治 demonstration、手工牌匾等 vernacular cultural material。项目把“谁有资格成为 folk art / contemporary art”变成持续 collection problem。',
        actions: ['跨英国寻找 local festivals / hobbies / community objects', '摄影 / 收集 vernacular artefacts', '记录 makers 与事件背景', '与 Alan Kane 共同分类', '在不同 venue 重新编辑', '拒绝用 high-art taste 把材料统一美化'],
        sourceUrl: 'https://www.britishcouncil.org/contact/press/jeremy-deller-english-magic', images: [], relations: []
      },
      {
        title: 'It Is What It Is: Conversations About Iraq', cluster: 'destroyed car / road trip / public conversation / veterans and Iraqis', period: '2009',
        summary: '一辆在 Baghdad 爆炸中被毁的汽车被带到美国多地，作为公开谈话触发器；Iraqi citizens、US veterans、experts 与路人围绕 Iraq War 直接交流。car 不是纪念雕塑，而是制造 conversation 的移动装置。',
        actions: ['取得 Iraq bomb-damaged car', '设计 cross-country US route', '每站选择 public space', '邀请 Iraqi participants、US veterans 与 experts 同行 / 对谈', '不预设单一政治结论', '记录沿途 conversations', '让 object 只承担开启讨论的功能'],
        sourceUrl: 'https://www.themoderninstitute.com/artists/jeremy-deller', images: [], relations: []
      },
      {
        title: 'Sacrilege', cluster: 'inflatable Stonehenge / monument / public play / touch', period: '2012',
        summary: 'Deller 制作真人尺度 inflatable Stonehenge，并允许公众脱鞋进入、跳跃和触摸。国家遗产由不可触碰 monument 变成 collective physical game。',
        actions: ['测量 / 转译 Stonehenge recognizable form', '使用 inflatable structure 取代石材', '保持近似 full-scale spatial experience', '安排 public access 与安全规则', '允许跳跃、躺卧、碰撞', '让 monument 的 symbolic authority 通过身体使用被改写'],
        sourceUrl: 'https://www.themoderninstitute.com/artists/jeremy-deller', images: [], relations: []
      },
      {
        title: 'English Magic', cluster: 'British Pavilion / film / banner / archive / social montage', period: '2013',
        summary: 'British Pavilion 将 wall painting、film、banner、music、political image 与 British popular / folk references 混合。国家馆不是统一 national image，而是一组关于权力、自然、战争、音乐与民间想象的冲突 montage。',
        actions: ['搜集当代 British political / popular references', '委托 / 制作大型 mural 与 banner', '制作 film 与 soundtrack', '把 folk / pop / institutional imagery 同场安装', '用 room-by-room montage 代替单一叙事', '让 national pavilion 成为社会矛盾编辑器'],
        sourceUrl: 'https://www.britishcouncil.org/contact/press/jeremy-deller-english-magic', images: [], relations: [rel('展览', 'British Pavilion — Venice Biennale', '2013')]
      }
    ],
    awards: ['Turner Prize 2004'],
    exhibitions: ['The Battle of Orgreave — Artangel 2001', 'Turner Prize / Tate Britain 2004', 'Sacrilege 2012', 'British Pavilion — Venice Biennale 2013'],
    sources: [
      { label: 'Artangel — The Battle of Orgreave', url: 'https://www.artangel.org.uk/project/the-battle-of-orgreave/' },
      { label: 'Artangel — Jeremy Deller', url: 'https://www.artangel.org.uk/artist/jeremy-deller/' },
      { label: 'British Council — English Magic', url: 'https://www.britishcouncil.org/contact/press/jeremy-deller-english-magic' }
    ]
  },

  'charlotte-prodger': {
    artistId: 'charlotte-prodger',
    projectCoverage: '7 个 queer autobiography / device-specific image / landscape / naming 节点已建立深档案 · 2012–2019',
    imageCoverage: '0 / 7 项目已有代表图像',
    note: 'Prodger 的重点不是“用手机拍很私密”。她会明确区分 smartphone、industry camera、camera trap、drone 等设备的身体关系和观看权力：谁拿着设备、设备离身体多近、它是否自动监测、它怎样记录 location。自传因此不是内容，而是被不同成像机器重新格式化。',
    projects: [
      {
        title: 'Percussion Biface / early object-video works', cluster: 'device / sculpture / video playback / material support', period: '2012–2014',
        summary: '早期 practice 已经把 screen、playback device、speaker、support structure 当成作品一部分，而不是隐藏展示设备。moving image 与雕塑的物理载体从一开始就同时被观看。',
        actions: ['选择具体 playback / display equipment', '保留 cable、speaker、support 可见', '让 screen scale 对应观众身体', '把录像与承载录像的 object 同时设计', '测试技术 equipment 如何改变图像亲密性'],
        sourceUrl: 'https://scotlandandvenice.com/project/charlotte-prodger/', images: [], relations: []
      },
      {
        title: 'Stoneymollan Trail', cluster: 'autobiographical trilogy I / travel / place-name / mixed devices', period: '2015',
        summary: '三部曲第一部用旅行、地名、声音碎片与不同设备拍摄的画面组织 autobiographical memory。它拒绝完整 life story，而让 place-name、路线和 technology 作为记忆触发器。',
        actions: ['从个人旅行 / 地方经验写 voice fragments', '拍摄 road、landscape、ordinary detail', '混合不同 recording devices', '保留不同设备图像质量差异', '以 place-name / journey 组织 non-linear sequence', '让 voice-over 与当前画面保持松散关系'],
        sourceUrl: 'https://scotlandandvenice.com/project/charlotte-prodger/', images: [], relations: []
      },
      {
        title: 'BRIDGIT', cluster: 'smartphone / queer autobiography / voice-over / landscape / Turner Prize', period: '2016',
        summary: 'BRIDGIT 大量使用 smartphone，个人 voice-over 穿过 standing stones、JD Sports、1970s lesbian separatism、Jimi Hendrix sound recordist 等看似离散信息。手机的日常、随身与垂直 / 手持属性成为 autobiographical thinking 的结构。',
        actions: ['使用 smartphone 随身拍摄 landscape / room / incidental detail', '记录 first-person voice-over', '搜集 queer history / art-history / music references', '避免拍摄完整 talking-head confession', '让 image 与 narration 间保持时间错位', '通过长段 ordinary footage 建立思考节奏'],
        sourceUrl: 'https://scotlandandvenice.com/news/congratulations-charlotte-prodger-2018-turner-prize-winner/', images: [], relations: [rel('奖项', 'Turner Prize', '2018 winner')]
      },
      {
        title: 'BRIDGIT / Stoneymollan Trail — exhibition architecture', cluster: 'two-screen histories / seating / playback / Bergen Kunsthall', period: '2017–2018',
        summary: '两部作品在 Bergen Kunsthall 等展览中被空间化。影像并非只“投上墙”，座椅、screen、sound 和观看 duration 共同决定自传如何被身体接收。',
        actions: ['为不同 film 设定独立 viewing zone', '控制 seating orientation', '处理相邻 sound bleed', '让技术 equipment 保持 visible sculptural presence', '通过展场移动区分两个 autobiographical time-system'],
        sourceUrl: 'https://scotlandandvenice.com/project/charlotte-prodger/', images: [], relations: []
      },
      {
        title: 'SaF05 — lioness database and autobiographical cipher', cluster: 'trilogy III / camera trap database / queer attachment / animal tracking', period: '2019',
        summary: 'SaF05 得名于 Okavango Delta 一只长鬃母狮。Prodger 从未亲自拍到它，只通过多年 camera-trap / behaviour database 认识它；animal monitoring record 与自身 queer attachment / desire fragments 被交叉。',
        actions: ['研究 SaF05 lioness behavioural database', '使用 existing camera-trap traces', '把 animal tracking index 与 personal memory fragments 对照', '避免把 lioness 变成自然纪录片主角', '用 voice-over 将距离、欲望、命名和 missing body 连接'],
        sourceUrl: 'https://scotlandandvenice.com/project/charlotte-prodger/', images: [], relations: [rel('展览', 'Scotland + Venice — 58th Venice Biennale', '2019')]
      },
      {
        title: 'SaF05 — camera systems as different gazes', cluster: 'film camera / camera trap / drone / smartphone / surveillance vs intimacy', period: '2019',
        summary: '作品同时使用 film-industry cameras、static camera traps、drones 与 smartphone。不同 machine 不是追求视觉丰富度，而是分别对应 cinematic framing、automated wildlife monitoring、territorial overview 和 intimate handheld record。',
        actions: ['为不同 scene 选择不同 imaging device', '保留 camera trap 自动监测逻辑', '用 drone 处理 territory / distance', '用 smartphone 处理身体近处 / diary moment', '不统一所有 footage 的 technical texture', '让 device difference 成为观看伦理差异'],
        sourceUrl: 'https://scotlandandvenice.com/project/charlotte-prodger/', images: [], relations: []
      },
      {
        title: 'Autobiography through technical mediation', cluster: 'meta-method / place / naming / equipment / fragmented self', period: '2015–2019',
        summary: '三部曲真正连贯的是“自我从不直接出现”。self 被分散到地名、声音、动物数据库、设备 metadata、landscape 与引用里；technical mediation 不是把私人经验隔开，而是私人经验存在的方式。',
        actions: ['避免线性 childhood-to-present biography', '把 self 分配给 places / names / devices / voices', '保留引用来源的异质性', '用不同设备制造不同 intimacy distance', '让 absence 与 indirect trace 成为 portrait 方法'],
        sourceUrl: 'https://scotlandandvenice.com/project/charlotte-prodger/', images: [], relations: []
      }
    ],
    awards: ['Turner Prize 2018'],
    exhibitions: ['Stoneymollan Trail 2015', 'BRIDGIT 2016', 'Subtotal — SculptureCenter 2017', 'BRIDGIT / Stoneymollan Trail — Bergen Kunsthall', 'SaF05 — Scotland + Venice 2019'],
    sources: [
      { label: 'Scotland + Venice — Charlotte Prodger / SaF05', url: 'https://scotlandandvenice.com/project/charlotte-prodger/' },
      { label: 'Scotland + Venice — Turner Prize 2018', url: 'https://scotlandandvenice.com/news/congratulations-charlotte-prodger-2018-turner-prize-winner/' }
    ]
  },

  'lawrence-abu-hamdan': {
    artistId: 'lawrence-abu-hamdan',
    projectCoverage: '8 个 acoustic evidence / earwitness / border listening / sound-object 节点已建立深档案 · 2012–现在',
    imageCoverage: '0 / 8 项目已有代表图像',
    note: 'Abu Hamdan 的作品不是“声音很有氛围”。他把声学当调查技术：accent 能被边境机构分类，gunshot 可以被重新分析，survivor 对 door、footstep、silence 的记忆可以重建不可进入监狱，物件又能被制作成 earwitness testimony 的 playback / memory tool。',
    projects: [
      {
        title: 'The Freedom of Speech Itself / Conflicted Phonemes', cluster: 'accent analysis / asylum / border technology / speech map', period: '2012–2013',
        summary: '项目研究 migration / asylum procedures 中 language analysis for determination of origin。accent 被国家技术当作地理证据，而 Abu Hamdan 将 phoneme、voice 和 mapping 重新公开，使“声音属于哪里”成为政治问题。',
        actions: ['研究 asylum accent-analysis procedure', '与 linguists / legal cases 接触', '拆分 speech 中 phoneme / accent markers', '绘制 conflicting language / geography map', '制作 audio / graphic presentation', '展示国家如何把 speaking body 转成 border evidence'],
        sourceUrl: 'https://lawrenceabuhamdan.com/', images: [], relations: []
      },
      {
        title: 'Earshot', cluster: 'gunshot / acoustic reconstruction / West Bank / forensic counter-evidence', period: '2016',
        summary: '围绕 2014 West Bank 两名 Palestinian teenagers 被枪杀事件，Abu Hamdan 分析 recorded gunshots，比较 live ammunition 与 rubber-bullet sound signature，质疑官方关于使用非致命弹药的说法。',
        actions: ['取得现场 / media gunshot recordings', '分离 waveform / sonic signature', '比较不同 ammunition recordings', '与 forensic / human-rights investigation 协作', '制作可公开解释的 sound comparison', '将 acoustic analysis 转成 installation / public evidence'],
        sourceUrl: 'https://lawrenceabuhamdan.com/earshot', images: [], relations: []
      },
      {
        title: 'Saydnaya (the Missing 19dB)', cluster: 'survivor earwitness / prison reconstruction / silence as violence', period: '2016–2017',
        summary: '与 Amnesty International、Forensic Architecture 合作调查 inaccessible Saydnaya prison。幸存者长期被蒙眼 / 置于黑暗，因此声音记忆成为少数可用证据。项目量化 prison after 2011 变得约低 19 dB 的 speaking level，将 enforced silence 作为 violence condition。',
        actions: ['与 former detainees 进行 earwitness interviews', '让 survivors 通过熟悉 sounds 比较 loudness', '重建 door、footstep、beating、whisper 等 sound memories', '协助推测 prison architecture / spatial relation', '把 testimony 转成 sound piece', '制作 chromogenic lightbox + automated mixing deck installation', '用 dB difference 呈现 silence 的制度化'],
        sourceUrl: 'https://lawrenceabuhamdan.com/saydnaya', images: [], relations: []
      },
      {
        title: 'Earwitness Inventory', cluster: '95 objects / legal testimony / sonic analogy / database', period: '2018–现在',
        summary: '95 件 sourced / custom-designed objects 来自 legal cases 中 contested sonic evidence。witness 会说 collapse “像 popcorn”、gunshot “像一排 trays 掉下”；Abu Hamdan 将这些比喻变成真实 object inventory。',
        actions: ['搜集全球 legal earwitness testimonies', '提取“sounds like…”比喻', '寻找 / 定制能重现对应声音的 objects', '制作95件 object / instrument inventory', '建立 testimony database', '通过现场触发 / video / text 连接 object 与原案件', '让 sound-effects industry 与 traumatic memory 对照'],
        sourceUrl: 'https://lawrenceabuhamdan.com/earwitness-inventory', images: [], relations: []
      },
      {
        title: 'Walled Unwalled', cluster: 'wall permeability / legal cases / Cold War studio / spoken essay', period: '2018',
        summary: 'Abu Hamdan 站在 former East Berlin Cold War-era recording studio 玻璃后，讲述 thermal imaging、Oscar Pistorius trial、Saydnaya survivors 等“穿墙获得声音 / 信息”的案件。wall 从物理边界变成 evidence medium。',
        actions: ['选择 acoustically charged historical recording studio', '研究 wall-permeability legal / forensic cases', '编写 spoken essay', '将 speaker 置于多层 glass / wall architecture 中', '加入 increasingly tense percussion', '通过 camera framing 让 recording room 本身成为 argument'],
        sourceUrl: 'https://lawrenceabuhamdan.com/walled-unwalled', images: [], relations: []
      },
      {
        title: 'After SFX', cluster: 'sound-effect library / testimony / Foley / memory reconstruction', period: '2018–',
        summary: 'Saydnaya / Earwitness 研究进一步进入 sound-effect production。作品比较真实 traumatic testimony 与 Foley / cinema sound effects，追问我们为什么用另一个熟悉声音去记住一次从未被录下的暴力。',
        actions: ['从 earwitness testimony 提取 sonic analogy', '研究 Foley / SFX libraries', '制作 custom sound reproduction', '比较 memory description 与 media sound convention', '让观众意识到“记住声音”也依赖文化素材库'],
        sourceUrl: 'https://lawrenceabuhamdan.com/', images: [], relations: []
      },
      {
        title: 'Air Pressure', cluster: 'Lebanon airspace / sonic archive / aircraft / long-term listening', period: '2021–',
        summary: '项目记录 Lebanon sky 中 military aircraft / drones 等持续性空中声音，把通常无法进入画面的 sovereignty violation 转成长期 acoustic archive。',
        actions: ['长期收集 / 记录 aircraft sound', '核对飞行 / airspace context', '按时间建立 sonic archive', '将 ordinary daily listening 与 geopolitical intrusion 连接', '以 installation / publication 形式重新组织'],
        sourceUrl: 'https://lawrenceabuhamdan.com/air-pressure', images: [], relations: []
      },
      {
        title: 'Private ear as working model', cluster: 'meta-method / investigation / testimony / object / public evidence', period: '2010s–现在',
        summary: '他所谓 private ear 的核心流程是：先判断影像缺失处是否仍有 acoustic trace，再访谈 / 测量 / comparison，最后把调查转成可以被公众理解的 sound-object / moving-image form。',
        actions: ['从 image gap / inaccessible site 寻找 sound evidence', '与 witnesses / lawyers / investigators 合作', '把 subjective memory 与 measurable acoustics 对照', '保留 uncertainty 而不假装完全复原', '设计可让非专家理解的 installation', '让 artwork 与 evidence discussion 同时成立'],
        sourceUrl: 'https://lawrenceabuhamdan.com/', images: [], relations: []
      }
    ],
    awards: ['Abraaj Group Art Prize 2018', 'Turner Prize 2019 joint winner'],
    exhibitions: ['Earshot 2016', 'Saydnaya / Earwitness works 2017–', 'Venice Biennale 2019', 'Turner Prize 2019'],
    sources: [
      { label: 'Lawrence Abu Hamdan — official archive', url: 'https://lawrenceabuhamdan.com/' },
      { label: 'Saydnaya', url: 'https://lawrenceabuhamdan.com/saydnaya' },
      { label: 'Earwitness Inventory', url: 'https://lawrenceabuhamdan.com/earwitness-inventory' },
      { label: 'Walled Unwalled', url: 'https://lawrenceabuhamdan.com/walled-unwalled' }
    ]
  },

  'helen-marten': {
    artistId: 'helen-marten',
    projectCoverage: '7 个 assemblage / language-object / installation syntax 节点已建立深档案 · 2012–2025',
    imageCoverage: '0 / 7 项目已有代表图像',
    note: 'Marten 的作品不能只说“材料很多”。她把物件看成语言：shoe sole、ceramic、steel、wood、rubber、graphic sign、furniture fragment 都像词，真正的创作发生在这些词怎样互相修饰、遮挡、造成误读。她的展览通常不是几个独立雕塑，而是一个高密度句法环境。',
    projects: [
      {
        title: 'Almost the Exact Shape of Florida / Plank Salad', cluster: 'early installation / object grammar / sculpture-wall-floor relation', period: '2012–2013',
        summary: 'Kunsthalle Zürich 与 Chisenhale 等早期展览已经确立 comprehensive installation 方式：sculpture、wall piece、floor work 被当作同一句法系统，而不是各自独立作品。',
        actions: ['制作多种 material objects', '同时设计 wall / floor / free-standing elements', '重复日常 recognizable fragments', '改变 objects 的正常使用尺度', '通过展场距离让物件互相“解释 / 误解释”', '不设置单一中心 sculpture'],
        sourceUrl: 'https://www.sadiecoles.com/exhibitions/no-borders-in-wok-that-cant-be-crossed', images: [], relations: []
      },
      {
        title: 'No Borders in a Wok That Can’t Be Crossed', cluster: 'CCS Bard / comprehensive installation / media heterogeneity', period: '2013',
        summary: 'CCS Bard 首个美国 museum solo 汇集 sculpture、wall piece、floor work 与为场地制作的新作。作品标题本身像错误 proverb，语言和物件都维持“似乎熟悉但无法完整解释”的状态。',
        actions: ['根据 gallery architecture 制作 site-responsive works', '混合 sculpture / wall / floor media', '使用日常 object fragments 但取消其完整功能', '以 pun / broken phrase 命名', '保持展示密度让观众不断重新识别'],
        sourceUrl: 'https://www.sadiecoles.com/exhibitions/no-borders-in-wok-that-cant-be-crossed', images: [], relations: []
      },
      {
        title: 'Oreo St James / Parrot Problems', cluster: 'consumer fragments / graphics / sculpture syntax', period: '2014',
        summary: '这一阶段继续把 consumer packaging、mechanical part、ceramic / textile 与 graphic surface 混成无法直接命名的 assemblage。熟悉商品语言被拆掉品牌完整性后只剩可疑语义碎片。',
        actions: ['搜集 consumer / mechanical visual vocabulary', '重新制作而非简单展示 found object', '用 ceramic、metal、wood、fabric 改变 material status', '把 printed / graphic sign 嵌入 sculpture', '通过 title 制造额外语言岔路'],
        sourceUrl: 'https://www.sadiecoles.com/artists/helen-marten', images: [], relations: []
      },
      {
        title: 'Lunar Nibs', cluster: 'Venice 2015 / multi-part sculpture / material overload / semantic instability', period: '2015',
        summary: 'Venice Biennale period 的 Lunar Nibs 将 wood、steel、ceramic、rubber、shoe sole、fabric 等压入多部件 structure。材料彼此没有被归一成某个象征，而像一长串 mutually modifying clauses。',
        actions: ['为每个 component 选择不同 material process', '同时使用 fabricated 与 everyday-derived forms', '控制 object overlap / support / hanging', '让 functional-looking parts 失去明确用途', '通过 close material adjacency 生产多义关系'],
        sourceUrl: 'https://www.sadiecoles.com/artists/helen-marten', images: [], relations: [rel('展览', 'All the World’s Futures — Venice Biennale', '2015')]
      },
      {
        title: 'Drunk Brown House', cluster: 'Serpentine / architecture-within-architecture / furniture / pseudo-function', period: '2016',
        summary: 'Serpentine Sackler Gallery 展览把 furniture-like structures、tools、small architectures 与 sculpture 组成一个仿佛可用、实际不断失灵的 house / workshop。空间像一份没有正确操作方式的 instruction manual。',
        actions: ['在 gallery 内制造 architecture-like zones', '制作 furniture / tool / utility fragments', '保留 hinges、supports、surface graphics 等功能暗示', '让 objects 之间形成 pseudo-domestic routes', '避免完整房间重建', '通过观众绕行形成阅读顺序'],
        sourceUrl: 'https://www.sadiecoles.com/artists/helen-marten', images: [], relations: [rel('展览', 'Drunk Brown House — Serpentine Sackler Gallery', '2016')]
      },
      {
        title: 'Eucalyptus, Let Us In / Turner Prize', cluster: 'dense installation / drawing-sculpture relation / 2016 prize context', period: '2016',
        summary: 'Turner Prize exhibition 延续高密度 installation：drawing / image / sculpture / everyday-material reference 彼此穿插。她同年获得 Turner Prize 与 Hepworth Prize for Sculpture。',
        actions: ['为 prize space 重新编辑 sculpture groups', '让 wall-based image 与 object 相互连接', '控制材料重复形成内在 vocabulary', '使用 title 继续制造语言层', '不把作品简化为少量“代表作”孤立陈列'],
        sourceUrl: 'https://www.sadiecoles.com/artists/helen-marten', images: [], relations: [rel('奖项', 'Turner Prize', '2016 winner'), rel('奖项', 'Hepworth Prize for Sculpture', '2016')]
      },
      {
        title: 'Language-object grammar as method', cluster: 'meta-method / semantic density / fabrication / recognition failure', period: '2012–2025',
        summary: 'Marten 的稳定方法是让每件 object 处在“能认出一点但无法完成命名”的边缘，再用其它物件继续修改它。作品因此更接近 paragraph / syntax，而不是 symbol collection。',
        actions: ['从 recognizable object fragment 开始', '通过 fabrication 改写 material / scale', '避免保留完整商品或工具功能', '重复 motif 形成作品内部词汇', '利用 title、graphic、text 增加 semantic layer', '通过 exhibition layout 把多个作品组织成连续 syntax'],
        sourceUrl: 'https://www.sadiecoles.com/artists/helen-marten', images: [], relations: [rel('展览', 'Almost the Exact Shape of Florida — Kunsthalle Zürich', '2025 iteration listed by gallery')]
      }
    ],
    awards: ['Turner Prize 2016', 'Hepworth Prize for Sculpture 2016'],
    exhibitions: ['Kunsthalle Zürich / Chisenhale / CCS Bard 2012–2013', 'Venice Biennale 2015', 'Drunk Brown House — Serpentine 2016', 'Turner Prize — Tate Britain 2016'],
    sources: [
      { label: 'Sadie Coles HQ — Helen Marten', url: 'https://www.sadiecoles.com/artists/helen-marten' },
      { label: 'Sadie Coles — No borders in a wok that can’t be crossed', url: 'https://www.sadiecoles.com/exhibitions/no-borders-in-wok-that-cant-be-crossed' }
    ]
  }
};