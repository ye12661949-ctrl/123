import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

export const archiveBatch51: Record<string, ArtistArchive> = {
  'lubaina-himid': {
    artistId: 'lubaina-himid',
    projectCoverage: '8 个 cut-out / painting / naming / curatorial practice 节点已建立深档案 · 1980s–2026',
    imageCoverage: '0 / 8 项目已有代表图像',
    note: 'Himid 的核心不是“在绘画里补上黑人主体”，而是把历史绘画、戏剧设计、真人尺寸 cut-out、命名、声音和策展组合成一套让被匿名者重新占据空间的机制。她早年受 theatre design 训练影响，反复把人物从矩形画框中拆出来，让他们与观众处在同一房间。',
    projects: [
      {
        title: 'Five Black Women / The Thin Black Line — curatorial groundwork', cluster: 'curating / Black women artists / institution building', period: '1983–1985',
        summary: '在个人作品之外，Himid 很早就通过策展建立黑人女性艺术家的可见网络。Five Black Women、Black Woman Time Now 与 The Thin Black Line 把被主流机构忽略的实践放进共同语境，也构成她此后“命名、重新放置、建立位置”的方法基础。',
        actions: ['寻找被英国主流艺术机构低估的黑人女性艺术家', '组织群展而非只推进个人作品', '通过展览标题建立共同历史语境', '处理场地、作品选择与公共讨论', '把策展视为重新分配艺术史可见度的创作行为'],
        sourceUrl: 'https://lubainahimid.com/about/full-cv/', images: [], relations: [rel('策展', 'Five Black Women — Africa Centre, London', '1983'), rel('策展', 'The Thin Black Line — ICA, London', '1985')]
      },
      {
        title: 'A Fashionable Marriage', cluster: 'Hogarth / life-size cut-outs / art-world satire / theatre space', period: '1986–1987',
        summary: '作品借用 Hogarth 的 The Countess’s Morning Levee，但把画面拆成真人尺寸 painted cut-outs，让艺术家、评论家、资助者、政治人物和艺术机构权力变成可走入的讽刺舞台。',
        actions: ['研究 Hogarth 原作的角色与空间结构', '将平面人物转写为真人尺寸 cut-out', '用绘画而非雕塑方式处理每块人物板', '重新设计人物之间的视线与权力关系', '让观众进入人物之间而非站在画框外', '借剧场布景训练控制整体空间节奏'],
        sourceUrl: 'https://lubainahimid.com/portfolio/a-fashionable-marriage/', images: [], relations: [rel('展览', 'Pentonville Gallery, London', '1987')]
      },
      {
        title: 'Vernet’s Studio', cluster: 'women artists / cut-outs / studio mythology / Havana Biennial', period: '1994',
        summary: 'Himid 制作 24 个 cut-outs，以“女性艺术家的工作室会是什么样”为问题，把历史上女性艺术家的图像、代表方式与艺术家身份变成一个可进入的知识游戏。',
        actions: ['搜集历史女性艺术家及其自我 / 他者再现', '把人物转换为 cut-out', '不直接在正面标出身份', '让观众在空间中移动并猜测人物来源', '用群体安装替代单一英雄式艺术家肖像'],
        sourceUrl: 'https://lubainahimid.com/portfolio/vernets-studio/', images: [], relations: [rel('展览', 'Transmission Gallery, Glasgow', '1994'), rel('展览', '5th Havana Biennial', '1994')]
      },
      {
        title: 'Naming the Money', cluster: '100 cut-outs / names / occupations / soundtrack / slavery and migration', period: '2004',
        summary: '作品由 100 个真人尺寸 painted cut-outs 构成，分为 ceramicists、herbalists、toy makers、dog trainers、drummers、musicians、dancers、shoemakers、map makers、painters 等职业。每个人同时拥有原名与被强加的新名字 / 新劳动，声音和背后的文字让他们重新说出自己是谁。',
        actions: ['从奴隶制肖像、纺织史与人物职业研究开始', '制作100个真人尺寸 wooden cut-outs', '给每个人建立原名、被改名后的名字、原职业和被迫职业', '在人物背面粘贴 invoice-like text', '录制 soundtrack 让人物以第一人称发声', '按职业与社会关系在空间中分组', '让观众可以穿行于人群内部'],
        sourceUrl: 'https://lubainahimid.com/portfolio/naming-the-money/', images: [], relations: [rel('展览', 'Hatton Gallery, Newcastle', '2004'), rel('收藏', 'International Slavery Museum, Liverpool', 'work held in collection')]
      },
      {
        title: 'Le Rodeur', cluster: 'painting cycle / slave ship history / repeated characters / fear and relation', period: '2016–2018',
        summary: '绘画组以 1819 年法国奴隶船 Le Rodeur 的历史为入口，但没有重演具体船难。Himid 让相似人物在不同画面中持续出现，以海、绳索、交换、凝视和不确定关系处理失明、交易与群体恐惧。',
        actions: ['研究 Le Rodeur 历史记录', '抽离人物关系而非按史料复原事件', '建立可跨多幅画重复出现的人物群', '反复改变人物距离、方向和手中物件', '用鲜明色彩抵抗历史图像常见的灰暗悲情模板', '通过系列比较关系变化'],
        sourceUrl: 'https://lubainahimid.com/portfolio/le-rodeur/', images: [], relations: []
      },
      {
        title: 'Naming / text / sound as recurring devices', cluster: 'meta-method / language / voice / anti-anonymity', period: '1980s–现在',
        summary: '“给人名字”在 Himid 的实践里不是说明文字，而是持续的政治形式。人物职业、名字、对话、菜单、海报和声音常直接进入作品，使观众无法只把黑人身体当作视觉符号。',
        actions: ['为历史中被匿名的人建立具体名字或职业', '将文字直接写入绘画 / cut-out 背面 / soundtrack', '让人物以第一人称表达', '把语言与观看位置绑定', '拒绝用抽象“受害者”概念替代个体差异'],
        sourceUrl: 'https://lubainahimid.com/', images: [], relations: []
      },
      {
        title: 'Turner Prize and institutional survey period', cluster: 'painting / sound / survey / Black Arts Movement history', period: '2017–2025',
        summary: '2017 Turner Prize 之后，Himid 的大型机构展览把早期 Black Arts Movement、cut-outs、绘画和声音作品重新放在一条长期谱系中。重要的不是“晚成名”，而是早期政治 / 展览实践怎样在几十年后被重新读入主流机构。',
        actions: ['从数十年档案中重新选择早期与新作', '将 painting、cut-out、sound 并置', '重新校准历史作品与当代政治语境的关系', '让回顾展不按风格统一，而按持续问题串联'],
        sourceUrl: 'https://lubainahimid.com/about/full-cv/', images: [], relations: [rel('奖项', 'Turner Prize', '2017 winner')]
      },
      {
        title: 'Predicting History: Testing Translation — British Pavilion', cluster: 'Venice 2026 / belonging / multi-panel painting / sound / viewer as performer', period: '2026',
        summary: '2026 英国馆项目围绕“如何在新地方建立归属”展开。大型多联画中出现 architects、boatbuilders、chefs、tailors、gardeners 等劳动者，声音、文字和画面共同形成近似剧场的场景；观众被明确放进“表演者”位置。',
        actions: ['以迁移、归属和共同劳动为研究核心', '建立不同职业角色群体', '制作大型 multi-panel paintings', '利用英国馆新古典建筑作为空间条件', '加入声音与文字制造未解决的紧张感', '按剧场逻辑设计角色对话与观众移动', '让观众自身成为画面关系的一部分'],
        sourceUrl: 'https://www.labiennale.org/en/art/2026/great-britain', images: [], relations: [rel('展览', 'British Pavilion — 61st Venice Biennale', '2026 · Predicting History: Testing Translation')]
      }
    ],
    awards: ['Turner Prize 2017', 'Royal Academician'],
    exhibitions: ['Naming the Money — Hatton Gallery 2004', 'Tate Modern / major survey contexts', 'British Pavilion — Venice Biennale 2026'],
    sources: [
      { label: 'Lubaina Himid Studio', url: 'https://lubainahimid.com/' },
      { label: 'Naming the Money — artist archive', url: 'https://lubainahimid.com/portfolio/naming-the-money/' },
      { label: 'La Biennale di Venezia — Great Britain 2026', url: 'https://www.labiennale.org/en/art/2026/great-britain' }
    ]
  },

  'steve-mcqueen': {
    artistId: 'steve-mcqueen',
    projectCoverage: '8 个身体 / 投影 / 殖民与劳动 / 公共参与 / 纪念影像节点已建立深档案 · 1993–2023',
    imageCoverage: '0 / 8 项目已有代表图像',
    note: 'McQueen 的 gallery work 不能只被 feature films 遮盖。他从很早开始就把 film projection 当作身体装置：摄影机位置、循环、声音、黑暗空间和观众站在哪里都参与作品。后来这套对身体与制度的控制扩展到矿井、监狱、伦敦学校与 Grenfell 纪念影像。',
    projects: [
      {
        title: 'Bear', cluster: '16mm / two bodies / gaze / projection', period: '1993',
        summary: '两名黑人男性赤裸身体在近距离摄影机前移动、对视、搏斗与游戏，关系始终无法被固定为暴力或亲密。作品依靠投影尺度让观众身体也进入这种不确定观看。',
        actions: ['在简化空间中只保留两具身体', '使用黑白16mm film', '让动作介于游戏、舞蹈和搏斗之间', '以近距离摄影弱化环境信息', '循环放映而不提供传统叙事结局', '用大投影让身体接近 / 超过观众尺度'],
        sourceUrl: 'https://www.moma.org/artists/8048-steve-mcqueen', images: [], relations: []
      },
      {
        title: 'Deadpan', cluster: 'Buster Keaton reenactment / multiple viewpoints / danger / 16mm', period: '1997',
        summary: 'McQueen 重演 Buster Keaton 房屋外墙倒塌的经典 stunt：墙面直接砸下，艺术家恰好站在窗洞位置。动作被不同角度重复观看，把电影史笑料变成关于黑人身体、危险和镜头位置的极简实验。',
        actions: ['研究 Buster Keaton 原始 stunt', '搭建可真实倒下的建筑立面', '测量窗洞与身体位置', '由艺术家本人站在危险轨迹中', '从多个摄影角度记录同一动作', '通过 montage / loop 反复观看倒塌瞬间'],
        sourceUrl: 'https://www.moma.org/artists/8048-steve-mcqueen', images: [], relations: [rel('奖项', 'Turner Prize', '1999 · work from this period central to recognition')]
      },
      {
        title: 'Caribs’ Leap', cluster: 'Grenada / colonial history / falling body / sky projection', period: '2002',
        summary: '作品回应 1651 年 Grenada 原住民在法国殖民追捕下从悬崖跃海的历史。画面中坠落人体在明亮天空中缓慢出现，与岛上当代日常片段共同构成殖民记忆和重力之间的关系。',
        actions: ['研究 Grenada 殖民历史与 Leapers’ Hill 事件', '在当地拍摄当代生活与海岸', '以极简天空画面拍摄坠落身体', '避免历史 costume reenactment', '把历史事件转化为反复下坠的身体动作', '与 Western Deep 构成双片 installation'],
        sourceUrl: 'https://www.artangel.org.uk/artist/steve-mcqueen/', images: [], relations: [rel('展览', 'Documenta 11 / Artangel context', '2002')]
      },
      {
        title: 'Western Deep', cluster: 'South African gold mine / darkness / labour / sensory cinema', period: '2002',
        summary: 'McQueen 将摄影机带入 South Africa TauTona 深金矿。极暗环境、矿工运动、机器噪音和训练 / 医疗动作使作品几乎通过身体感受而非说明文字传递劳动制度。',
        actions: ['获得深矿井进入许可', '随矿工进入极深地下工作区', '在低光环境拍摄并接受画面信息不足', '记录机器震动、灯光和呼吸声', '不使用传统采访解释劳动', '通过大尺度黑暗放映让观众身体承受视觉 / 声音压力'],
        sourceUrl: 'https://www.artangel.org.uk/artist/steve-mcqueen/', images: [], relations: [rel('展览', 'Caribs’ Leap / Western Deep — Artangel / Documenta 11', '2002')]
      },
      {
        title: 'Ashes', cluster: 'Grenada / Super 8 image / voice testimony / two-sided screen', period: '2002–2015',
        summary: '作品从 2002 年在 Grenada 偶然拍到年轻人 Ashes 的 Super 8 影像开始，十多年后加入他遭枪杀的口述记录。活力身体和死亡叙述被放在同一作品中，时间差本身成为结构。',
        actions: ['保存早期偶然拍摄的 Super 8 footage', '多年后重新追踪人物命运', '录制相关人物口述', '将早期影像与后来的死亡叙述组合', '使用双面 / 空间化 projection 让观众在两种时间之间移动'],
        sourceUrl: 'https://shop.tate.org.uk/steve-mcqueen-exhibition-book/24730.html', images: [], relations: []
      },
      {
        title: 'Weight', cluster: 'Reading Prison / sculpture / confinement / gold mosquito net', period: '2016',
        summary: 'McQueen 在 Reading Prison 空牢房中将一张 prison bed 与 24-carat-gold mosquito net 组合。柔软、近乎漂浮的金色网罩与拘禁环境形成直接物质冲突，把自由 / 囚禁问题从 moving image 转成雕塑。',
        actions: ['实地进入废弃 Reading Prison cell', '保留原有 prison bed', '制作 24-carat-gold mosquito netting', '将轻盈网罩悬在硬质牢床上方', '利用原牢房而非白盒作为作品空间', '让材料价值 / 脆弱与制度性拘禁对撞'],
        sourceUrl: 'https://www.artangel.org.uk/media/filer_public/2a/4f/2a4f9421-b04d-41d6-9c80-3a648b2cc91e/artists_for_artangel_catalogue.pdf', images: [], relations: [rel('展览', 'Inside: Artists and Writers in Reading Prison — Artangel', '2016')]
      },
      {
        title: 'Year 3', cluster: 'London schools / class portrait / distributed authorship / billboards', period: '2019–2020',
        summary: '项目邀请 London Year 3 的七八岁儿童以传统班级照形式被拍摄。最终数千张班级照片覆盖 Tate Britain 展墙，并同步扩散到伦敦 billboard；统一格式与巨大数量把私人学校纪念照转成一代城市儿童的集体肖像。',
        actions: ['与 Tate、Artangel、A New Direction 建立全市学校合作', '邀请 Year 3 班级参与', '组织多名摄影师使用统一 class-photo protocol', '编辑 / 设计数千张照片', '以密集矩阵覆盖 Tate Britain 墙面', '把同一照片系统扩展到伦敦公共广告牌', '将儿童当前身份与未来公民想象连接'],
        sourceUrl: 'https://www.artangel.org.uk/project/year-3/', images: [], relations: [rel('展览', 'Steve McQueen Year 3 — Tate Britain', '2019–2020'), rel('展览', 'Outdoor billboard exhibition across London', '2019')]
      },
      {
        title: 'Grenfell', cluster: 'memorial film / aerial approach / silence / delayed public viewing', period: '2017–2023',
        summary: '2017 年火灾后六个月，McQueen 在塔楼被遮挡前从直升机拍摄 Grenfell。24 分钟影片无对白、无配乐，从伦敦远景逐步逼近建筑；作品在公开展出前优先为 survivors、bereaved families 与 community 私下放映。',
        actions: ['在建筑被覆盖前决定制作视觉记录', '2017年12月从 helicopter 拍摄', '从城市远景逐渐接近 tower', '保留长时段连续逼近而非新闻式快速剪辑', '不添加对白或音乐', '延迟多年公开展出', '公开展前优先与 bereaved families / survivors / community 协商并安排 private viewings', '展出后进入 Tate 与 Museum of London 收藏'],
        sourceUrl: 'https://d37zoqglehb9o7.cloudfront.net/uploads/2023/03/Steve-McQueen-Grenfell-Exhibition-Guide.pdf', images: [], relations: [rel('展览', 'Grenfell — Serpentine South', '2023'), rel('收藏', 'Tate and Museum of London', 'after 2023 presentation')]
      }
    ],
    awards: ['Turner Prize 1999', 'Caméra d’Or 2008', 'Academy Award for Best Picture 2014'],
    exhibitions: ['British Pavilion — Venice Biennale 2009', 'Art Institute of Chicago / Schaulager survey 2012–2013', 'Year 3 — Tate Britain 2019–2020', 'Steve McQueen — Tate Modern 2020', 'Grenfell — Serpentine 2023'],
    sources: [
      { label: 'Artangel — Steve McQueen', url: 'https://www.artangel.org.uk/artist/steve-mcqueen/' },
      { label: 'Artangel — Year 3', url: 'https://www.artangel.org.uk/project/year-3/' },
      { label: 'Tate — Steve McQueen exhibition book', url: 'https://shop.tate.org.uk/steve-mcqueen-exhibition-book/24730.html' }
    ]
  },

  'mark-leckey': {
    artistId: 'mark-leckey',
    projectCoverage: '7 个 found footage / sound system / internet-memory / autobiographical installation 节点已建立深档案 · 1999–现在',
    imageCoverage: '0 / 7 项目已有代表图像',
    note: 'Leckey 的方法不是“怀旧英国亚文化”。他反复把已经流通过、画质低、来源不稳定的图像和声音重新剪辑，使 collective memory、consumer technology 与私人记忆互相感染。重要动作经常是找素材、采样、重新赋予声音、把数字文件做成物体或沉浸空间。',
    projects: [
      {
        title: 'Fiorucci Made Me Hardcore', cluster: 'found footage / British dance culture / VHS / sound montage', period: '1999',
        summary: '作品采样 1970s–1990s 英国舞厅、Northern Soul、rave 与 club footage，把不同来源、不同画质的录像拼成仿佛连续存在的一场集体舞蹈记忆。',
        actions: ['搜集旧 VHS / broadcast / amateur club footage', '按舞蹈动作而非原始年代重新分类', '剪掉大部分语境说明', '改变速度与重复节奏', '重新制作连续 soundtrack', '保留 VHS 噪点和复制损耗', '将数十年亚文化压缩成单一 moving-image flow'],
        sourceUrl: 'https://shop.tate.org.uk/mark-leckey-fiorucci-made-me-hardcore-2019-edition-no.-29/24340.html', images: [], relations: []
      },
      {
        title: 'Sound systems / speaker sculptures', cluster: 'audio object / subculture / bodily vibration / sculpture', period: '2000s–',
        summary: 'Leckey 长期把 speaker、subwoofer、stack 和音响设备当雕塑。声音不是配合录像的附属物，而是直接作用在观众身体上的物理材料；club culture 的集体经验因此被搬进展厅。',
        actions: ['研究 club / PA sound system 结构', '使用真实 speaker cabinets 或仿制结构', '制作低频 sound composition', '在展场控制声音传播方向', '让观众身体通过震动接收作品', '把 consumer / music technology 转成雕塑对象'],
        sourceUrl: 'https://markleckey.com/BIO', images: [], relations: []
      },
      {
        title: 'Industrial Light and Magic / Felix-related object logic', cluster: 'consumer object / image-object / technology desire', period: '2008–2014',
        summary: '这一阶段把工业设计、商品图像、卡通角色和数字 object representation 结合起来。Leckey 不仅挪用图像，而是持续问：一个网络 / 商品图像能否通过扫描、声音、3D 输出或展览重新获得“灵魂”和实体重量。',
        actions: ['选择带强大众识别度的商品 / 卡通对象', '收集网络图像和广告 representation', '将 image file 与实体 replica 并置', '通过 projection / 3D / sound 改变对象可见方式', '制造对技术物件近似迷信式的凝视'],
        sourceUrl: 'https://markleckey.com/BIO', images: [], relations: [rel('奖项', 'Turner Prize', '2008 winner')]
      },
      {
        title: 'Dream English Kid, 1964–1999 AD', cluster: 'internet-found autobiography / found memory / personal history', period: '2015',
        summary: 'Leckey 试图在互联网中寻找能够替代自己童年与青年记忆的公共图像与声音。私人经历因此不由家庭档案证明，而由陌生人上传的广告、电视、街景、音乐和网络碎片“重建”。',
        actions: ['列出个人记忆中的地点、物件、节目、音乐和情绪', '用网络搜索寻找可能对应的公共图像', '接受并非真实属于自己的素材', '把图像、广告、声音和录像重新剪辑', '按人生时间建立虚构自传', '让搜索结果成为 memory surrogate'],
        sourceUrl: 'https://shop.tate.org.uk/mark-leckey-o-magic-power-of-bleakness-exhibition-book/23034.html', images: [], relations: []
      },
      {
        title: 'Containers and Their Drivers', cluster: 'survey installation / digital circulation / object-image relations', period: '2016',
        summary: 'MoMA PS1 展览把 moving image、sculpture、sound 与 digital object 逻辑集中展示，标题本身把“容器”和“驱动它的系统”并置，强调图像如何在网络、设备与实体之间来回转换。',
        actions: ['从不同年份选择 image / object / sound works', '通过展览把 digital files 与实体 objects 对照', '设计 projection 与雕塑的空间距离', '让同一消费 / 技术符号跨媒介重复出现', '把 retrospective editing 变成关于流通系统的新作品关系'],
        sourceUrl: 'https://markleckey.com/BIO', images: [], relations: [rel('展览', 'Containers and Their Drivers — MoMA PS1', '2016')]
      },
      {
        title: 'O’ Magic Power of Bleakness', cluster: 'M53 bridge / childhood memory / reconstruction / immersive theatre', period: '2019',
        summary: 'Tate Britain 个展围绕 Leckey 青少年时期在 M53 motorway bridge 下的一段神秘经验展开。桥的 concrete underpass 被重构进展厅，影像、声音、performance 与 autobiographical narration 把一个私人地点放大成可进入的心理舞台。',
        actions: ['从童年 / 青少年记忆定位真实地点', '研究 M53 bridge 的建筑形态', '在 gallery 内重建 motorway-underpass 环境', '制作多声道声音与 moving image', '将个人 narrative 与 supernatural / folklore 语气混合', '让观众走进记忆结构而非只看一段回忆录像'],
        sourceUrl: 'https://shop.tate.org.uk/mark-leckey-o-magic-power-of-bleakness-exhibition-book/23034.html', images: [], relations: [rel('展览', 'O’ Magic Power of Bleakness — Tate Britain', '2019')]
      },
      {
        title: 'Analogue-to-digital memory as method', cluster: 'meta-method / poor image / sampling / technological haunting', period: '1990s–现在',
        summary: 'Leckey 的长期主线是：模拟时代留下的低质量残片进入互联网后，会如何被新一代重新拥有。画质损失、错误压缩、重复上传和来源模糊都不是需要修复的问题，而是记忆被技术不断重写的证据。',
        actions: ['主动使用低清 / 多次复制素材', '不统一不同来源的分辨率', '以 sampling 连接本来不相干的年代', '重新设计 soundtrack 形成情绪连续性', '将网络文件再次变成 projection / print / sculpture', '让技术错误成为历史感的一部分'],
        sourceUrl: 'https://markleckey.com/BIO', images: [], relations: []
      }
    ],
    awards: ['Turner Prize 2008'],
    exhibitions: ['Containers and Their Drivers — MoMA PS1 2016', 'O’ Magic Power of Bleakness — Tate Britain 2019'],
    sources: [
      { label: 'Mark Leckey — official biography / exhibitions', url: 'https://markleckey.com/BIO' },
      { label: 'Tate — O’ Magic Power of Bleakness', url: 'https://shop.tate.org.uk/mark-leckey-o-magic-power-of-bleakness-exhibition-book/23034.html' },
      { label: 'Tate — Fiorucci Made Me Hardcore', url: 'https://shop.tate.org.uk/mark-leckey-fiorucci-made-me-hardcore-2019-edition-no.-29/24340.html' }
    ]
  },

  'laure-prouvost': {
    artistId: 'laure-prouvost',
    projectCoverage: '7 个误译 / 虚构祖父 / film-installation / communal journey 节点已建立深档案 · 2010–2026',
    imageCoverage: '0 / 7 项目已有代表图像',
    note: 'Prouvost 的作品不是“荒诞小故事 + 可爱装置”。她把语言错误当作 production tool：字幕故意对不上声音，英文 / 法文不断误译，影像又与展厅里的茶具、泥土、织物、植物和雕塑互相矛盾。故事因此不是先存在再被展示，而是在观众努力纠正这些失配时不断生成。',
    projects: [
      {
        title: 'The Wanderer', cluster: 'mis-translation / Kafka / film / narrative engine', period: '2011',
        summary: '项目源于艺术家 Rory Macbeth 对 Kafka 文本的错误 / 无德语基础翻译，Prouvost 再把这种 translation drift 转为 film 和 installation。错误不被纠正，而成为新的角色、场景和叙事连接。',
        actions: ['取得 / 阅读被故意误译的文本', '把语言错误当作 scene prompt', '将文字转成影像、物件与旁白', '保留逻辑断裂而不补全', '通过 montage 让误译产生新的空间关系', '在展场加入实体 objects 继续扰乱文字与图像对应'],
        sourceUrl: 'https://www.maxmaraartprizeforwomen.com/6-laure-prouvost', images: [], relations: []
      },
      {
        title: 'Wantee', cluster: 'fictional grandfather / tea ritual / video installation / Turner Prize', period: '2013',
        summary: '作品围绕一个虚构艺术家祖父展开：他被叙述为 Kurt Schwitters 的朋友，后来在工作室地板挖 tunnel 并失踪。录像、家具、茶具、旧物和祖父作品碎片构成一个看似有档案依据、其实不断自我推翻的家庭神话。',
        actions: ['建立虚构祖父 biography', '借用 Schwitters 等真实艺术史作为可信锚点', '制作 / 搜集家具、茶具和“遗留作品”', '拍摄带艺术家 voice-over 的 video', '让观众坐入近似客厅 / 茶会空间', '用重复 “want tea?” 的语音和物件制造亲密但不可靠的叙事'],
        sourceUrl: 'https://www.tate.org.uk/art/artists/laure-prouvost-17766', images: [], relations: [rel('奖项', 'Turner Prize', '2013 winner')]
      },
      {
        title: 'Grandfather tunnel mythology', cluster: 'recurring fiction / excavation / absence / cross-project narrative', period: '2010s–',
        summary: '虚构祖父和 tunnel 并非单个作品故事，而是跨多个项目持续变形的 narrative infrastructure。祖父“失踪”留下的洞、工具、作品和祖母叙述不断被新展览重新解释。',
        actions: ['保持同一虚构人物跨项目出现', '故意修改前一版本故事细节', '用洞、泥土、工具等实体线索制造“证据”', '让文本与物证互相矛盾', '把观众变成试图拼回故事的调查者'],
        sourceUrl: 'https://www.tate.org.uk/art/artists/laure-prouvost-17766', images: [], relations: []
      },
      {
        title: 'Deep See Blue Surrounding You / They Parlaient Idéale', cluster: 'road movie / French Pavilion / multilingual group / sculptural environment', period: '2019',
        summary: '法国馆项目由一段穿越法国、最终抵达 Venice 的 fictional road trip 生成。不同年龄、文化与技能的参与者共同出现在 film 中；法语、英语、阿拉伯语、意大利语不断交错，字幕有时缺失、有时错位，film 又延伸成水、树脂、雕塑与建筑组成的现场环境。',
        actions: ['组织不同年龄 / 背景 / 技能的参与者', '从法国不同地点进行 road trip 拍摄', '让参与者以自身技能进入表演', '混合多语言讲话 / 歌唱', '故意让 subtitles 与声音错位或缺席', '将 film 之外继续制作 sculptural in-situ installation', '利用 Venice 水城与 national representation 语境重新组织作品'],
        sourceUrl: 'https://www.labiennale.org/en/art/2019/national-participations/france', images: [], relations: [rel('展览', 'French Pavilion — 58th Venice Biennale', '2019')]
      },
      {
        title: 'They Parlaient Idéale — film as mobile component', cluster: 'film circulation / collection / language / recontextualisation', period: '2019–2026',
        summary: 'Venice 之后，核心 film They Parlaient Idéale 可以脱离原 pavilion 继续进入不同机构。2025–26 Marseille 展示说明她的 installation 并非一次性场景：film、voice、subtitle 和空间组件可以被拆开后重新组合。',
        actions: ['从大型 pavilion 中抽离核心 film component', '在新机构重新配置 projection / viewing condition', '保留多语言 voice-over 与字幕错位', '通过新展览与当地新作形成对话', '让同一 film 在不同空间获得新的环境关系'],
        sourceUrl: 'https://musees.marseille.fr/macroom-they-parlaient-ideale-laure-prouvost', images: [], relations: [rel('展览', 'They Parlaient Idéale — Musée d’Art Contemporain de Marseille', '2025–2026')]
      },
      {
        title: 'Mère, We Sea', cluster: 'site-specific installation / Marseille / oral testimony / children voices / participation', period: '2025–2026',
        summary: '在 Marseille Vieille Charité chapel 制作 site-specific monumental installation，把水下 / 海洋想象与当地居民口述、儿童声音和公共参与连接。作品继续把“空间本身说话”推进到具体社区声音。',
        actions: ['针对 chapel 建筑制作 site-specific installation', '收集当地居民 oral testimonies', '与 Marseille Conservatoire 合作收集 children voices', '把声音嵌入雕塑 / 环境', '用水与海洋意象连接地方迁移和共同生活', '设计观众参与而非只观看'],
        sourceUrl: 'https://musees.marseille.fr/laure-prouvost-mere-we-sea', images: [], relations: [rel('展览', 'Mère, We Sea — Centre de la Vieille Charité, Marseille', '2025–2026')]
      },
      {
        title: 'Language slippage as material', cluster: 'meta-method / subtitles / voice / object mismatch / multilingualism', period: '2010–现在',
        summary: 'Prouvost 最稳定的方法是主动破坏“说明关系”：画面说一件事，字幕说另一件事，物件又提供第三个证据。观众为了理解而不断修正，而这个修正过程本身就是作品。',
        actions: ['混用法语与英语等多语言', '制造发音 / 拼写 / 翻译错误', '让 subtitle 故意落后或提前', '让 voice-over 指向画外不存在的对象', '在展厅加入与画面相似但不完全对应的 objects', '利用误解激活观众主动解释'],
        sourceUrl: 'https://musees.marseille.fr/macroom-they-parlaient-ideale-laure-prouvost', images: [], relations: [rel('展览', '36th Bienal de São Paulo participant', '2025–2026')]
      }
    ],
    awards: ['Max Mara Art Prize for Women 2011', 'Turner Prize 2013'],
    exhibitions: ['French Pavilion — Venice Biennale 2019', 'Mère, We Sea / They Parlaient Idéale — Marseille 2025–2026', '36th Bienal de São Paulo 2025–2026'],
    sources: [
      { label: 'La Biennale di Venezia — France 2019', url: 'https://www.labiennale.org/en/art/2019/national-participations/france' },
      { label: 'Musées de Marseille — They Parlaient Idéale', url: 'https://musees.marseille.fr/macroom-they-parlaient-ideale-laure-prouvost' },
      { label: 'Musées de Marseille — Mère, We Sea', url: 'https://musees.marseille.fr/laure-prouvost-mere-we-sea' },
      { label: '36th Bienal de São Paulo', url: 'https://bienal.org.br/en/get-to-know-the-participating-artists-of-the-36th-bienal-de-sao-paulo/' }
    ]
  }
};