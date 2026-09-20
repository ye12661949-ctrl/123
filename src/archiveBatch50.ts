import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

export const archiveBatch50: Record<string, ArtistArchive> = {
  'deana-lawson': {
    artistId: 'deana-lawson',
    projectCoverage: '7 个编排式黑人肖像 / diaspora / collage / hologram 节点已建立深档案 · 2004–2023',
    imageCoverage: '0 / 7 项目已有代表图像',
    note: 'Lawson 的照片常被误读成“亲密生活抓拍”。实际生产恰恰高度控制：她会在街上或旅行中寻找陌生人，进入或借用真实住宅，移动家具、选择衣服、规定身体姿势、控制闪光和相机高度，再用 medium / large-format camera 把空间细节压进画面。后来她继续把 found family photographs、collage、hologram 和宇宙学装置放进同一视觉系统。',
    projects: [
      {
        title: 'Early staged domestic portraits', cluster: 'stranger / real home / pose / medium-large format', period: '2004–2013',
        summary: '早期方法已经非常稳定：寻找并邀请陌生人合作，在真实卧室、客厅、旅馆或借来的住宅里制作画面。环境看起来像人物自己生活的房间，但实际会经过移动家具、处理衣物和精确姿势设计。',
        actions: ['在街头、社区或旅行中寻找潜在被摄者', '与陌生人建立短时间但高强度合作', '优先进入真实住宅或有生活痕迹的室内', '移动床、沙发、电视、桌面物件和墙饰', '与人物共同决定裸体 / 衣着与身体接触方式', '使用 medium / large-format camera 和直接闪光保持皮肤、织物与房间细节', '拍摄时要求人物持续面对镜头而不是表演抓拍动作'],
        sourceUrl: 'https://warholfoundation.org/grants/archive/deana-lawson/', images: [], relations: []
      },
      {
        title: 'Black diaspora fieldwork', cluster: 'travel / diaspora / staged portrait / comparative domestic space', period: '2013–2018',
        summary: '2013 Guggenheim Fellowship 后，她在 Dominican Republic、DRC、Haiti、Jamaica、Ethiopia、South Africa 等地继续同一套编排方法。项目不是传统旅行纪实，而是让不同地点的黑人家庭空间、身体姿态和肖像传统互相产生连续性。',
        actions: ['通过长期旅行扩大被摄地点', '继续寻找普通居民而非只找职业模特', '在不同国家保留相近的正面凝视和室内控制方法', '让当地家具、墙纸、宗教物、塑料花和家庭照片保留在画面中', '通过组照跨地点比较而不以国家章节完全分隔', '将 diaspora 理解为视觉关系而非地图分类'],
        sourceUrl: 'https://aperture.org/gala-2026/', images: [], relations: [rel('奖项', 'Guggenheim Fellowship', '2013')]
      },
      {
        title: 'Planes', cluster: 'domestic portrait / found photographs / spiritual register / installation', period: '2018',
        summary: 'Planes 在 The Underground Museum 呈现她成熟阶段的照片与 found-image 逻辑。真实人物的大尺幅肖像与匿名家庭快照、宗教 / 灵性暗示共同出现，使“家庭相册”从私人记录变成一种跨时间的黑人图像宇宙。',
        actions: ['从多年肖像中选取大尺幅作品', '把艺术家本人拍摄与 found family snapshots 并置', '通过画框 / 墙面密度建立家庭相册式关系', '让人物身体、家居物和 spiritual imagery 不分主次地共存', '用展场 sequence 形成跨地域 diaspora 网络'],
        sourceUrl: 'https://theunderground.museum/past-exhibitions/', images: [],
        relations: [rel('展览', 'Deana Lawson: Planes — The Underground Museum', '2018–2019')]
      },
      {
        title: 'Nation', cluster: 'staged portrait / collaged archive / historical violence', period: '2018',
        summary: 'Nation 把她原本高度完整的摄影平面直接打破：两位男子被安排在借来的公寓中，其中一人戴着被喷成金色的 orthodontic device；画面角落又贴入 George Washington 假牙的 archival image，把黑人身体、牙齿、奴隶制历史和当代室内肖像压进同一照片。',
        actions: ['借用具体公寓并重新组织沙发与人物位置', '为人物配置改造过的 orthodontic apparatus', '使用正面闪光强化金属 / 皮肤质地', '寻找 Washington dentures 的历史图像', '将 archival photograph 直接 collage 到最终摄影平面', '让拼贴遮挡部分人物而不是隐藏其外来来源'],
        sourceUrl: 'https://gagosian.com/artists/deana-lawson/', images: [], relations: []
      },
      {
        title: 'Centropy — photographs and holograms', cluster: 'Hugo Boss Prize / hologram / cosmic order / installation', period: '2020–2021',
        summary: 'Centropy 把 Lawson 的肖像系统推向空间装置。Guggenheim 展览同时出现 large-scale photographs、holograms 与 torus 形态；“家庭室内”不再只是背景，而被连接到能量、再生、宇宙秩序和 spiritual communion。',
        actions: ['继续制作高度编排的大尺幅肖像', '制作 silver-halide coated glass hologram', '将摄影和 holographic image 置于同一展场', '用密集 constellation 式墙面关系替代线性挂法', '在空间中心引入 torus / centropy 概念结构', '让观众移动时图像反射与 hologram 可见度变化'],
        sourceUrl: 'https://www.guggenheim.org/wp-content/uploads/2021/05/guggenheim-press-kit-hugo-boss-prize-2020-deana-lawson-centropy-20210506.pdf', images: [],
        relations: [rel('奖项', 'Hugo Boss Prize', '2020 · first photographer to receive the prize'), rel('展览', 'The Hugo Boss Prize 2020: Deana Lawson, Centropy — Guggenheim', '2021')]
      },
      {
        title: 'Survey / twenty-year archive', cluster: 'museum survey / long-term editing / Black self-representation', period: '2021–2023',
        summary: 'ICA Boston、MoMA PS1 等机构的首个大型 survey 将约二十年作品并置，使单张照片后面的长期结构更清楚：陌生人合作、真实住宅、家庭图像语法、跨 diaspora 旅行和越来越复杂的装置逻辑一直连续。',
        actions: ['从约2004年以来档案中重新选择作品', '跨年份并置相似姿势 / 家居空间', '不按国家简单分类', '让 found images 与 artist-made portraits 同场出现', '通过大尺度打印建立人物与观众的身体对峙', '用展览重新定义单张照片之间的“家族关系”'],
        sourceUrl: 'https://warholfoundation.org/grants/archive/deana-lawson/', images: [], relations: [rel('展览', 'Deana Lawson survey — ICA Boston / MoMA PS1', '2021–2022')]
      },
      {
        title: 'Staging intimacy as method', cluster: 'meta-method / collaboration / family-album syntax / direct gaze', period: '2004–现在',
        summary: 'Lawson 的方法可以归纳成“制造看起来早已存在的亲密关系”。她很少依赖复杂电影布景，而是对真实家庭空间进行有限但精确的重排，再通过人物正面凝视让观众无法安全地处在偷拍式旁观位置。',
        actions: ['用真实生活空间而非完全搭景作为起点', '保留房间的社会阶层和生活痕迹', '只移动足以改变关系的关键物件', '将人物身体姿势精确化但保留其自我呈现', '让人物直视镜头反向观看观众', '使用高细节输出让背景信息与脸同等重要'],
        sourceUrl: 'https://www.smjny.com/deana-lawson-2018', images: [], relations: []
      }
    ],
    awards: ['Guggenheim Fellowship 2013', 'Hugo Boss Prize 2020'],
    exhibitions: ['Planes — The Underground Museum 2018–2019', 'Centropy — Kunsthalle Basel 2020', 'Hugo Boss Prize: Centropy — Guggenheim 2021', 'Deana Lawson survey — ICA Boston / MoMA PS1 2021–2022'],
    sources: [
      { label: 'Guggenheim — Centropy', url: 'https://www.guggenheim.org/wp-content/uploads/2021/05/guggenheim-press-kit-hugo-boss-prize-2020-deana-lawson-centropy-20210506.pdf' },
      { label: 'Gagosian — Deana Lawson works', url: 'https://gagosian.com/artists/deana-lawson/' },
      { label: 'Andy Warhol Foundation — Deana Lawson survey', url: 'https://warholfoundation.org/grants/archive/deana-lawson/' }
    ]
  },

  'taryn-simon': {
    artistId: 'taryn-simon',
    projectCoverage: '8 个制度调查 / 分类 / 档案 / performance-system 节点已建立深档案 · 2000–现在',
    imageCoverage: '0 / 8 项目已有代表图像',
    note: 'Simon 的核心不是“拍别人看不到的地方”，而是把调查、许可、分类规则、文本、摄影和展示设计组合成完整知识系统。很多项目真正困难的部分发生在按下快门之前：找到制度入口、获得许可、建立分类、核对文本；照片只是研究链条的一环。',
    projects: [
      {
        title: 'The Innocents', cluster: 'wrongful conviction / reenactment / testimony / site return', period: '2000–2003',
        summary: '她与被错误定罪、后来通过 DNA 等证据获释的人合作，让他们回到案件中具有关键意义的地点——犯罪现场、错误识别地点、被捕处——重新站在摄影机前。摄影因此同时处理司法证据与摄影识别曾造成的错误。',
        actions: ['研究 wrongful-conviction case files', '与获释者进行长期访谈', '确认错误证词 / photographic identification 在案件中的作用', '选择案件关键地点', '让当事人重新返回并面对相机', '将肖像与精确案件文本并置', '出版 / 展览中保持事实说明与图像同等权重'],
        sourceUrl: 'https://tarynsimon.com/', images: [], relations: [rel('出版', 'The Innocents', '2003')]
      },
      {
        title: 'An American Index of the Hidden and Unfamiliar', cluster: 'restricted access / institutional permission / text-image index', period: '2004–2007',
        summary: '项目进入核废料设施、政府设施、科学实验、隔离空间和其他通常不可公开观看的美国系统。每张图都依赖具体许可，照片旁的文本解释机构功能、限制与进入条件。',
        actions: ['列出通常不可进入 / 不可见的制度空间', '向机构逐一申请摄影许可', '经历拒绝、谈判与安保审查', '进入后以克制、近似档案的方式摄影', '记录地点官方名称与功能', '撰写并核对说明文本', '按 index 逻辑而不是视觉风格分类'],
        sourceUrl: 'https://tarynsimon.com/', images: [], relations: []
      },
      {
        title: 'Contraband', cluster: 'JFK customs / 24-hour system / taxonomy / seized goods', period: '2009–2010',
        summary: 'Simon 在 JFK 国际机场海关检查区连续拍摄被扣押 / 禁止进入美国的物品，把一天内的香肠、药品、盗版商品、动物制品等统一置于白色背景，最终形成巨大分类系统。',
        actions: ['获得 JFK customs 检查区进入许可', '连续约一周在现场工作', '按海关扣押物流实时接收物件', '为每件物品使用近似一致的白色背景和光线', '记录物件类别 / 来源 / 扣押原因', '积累上千个对象后按 taxonomy 重新排序', '通过大规模 installation 强调国家边界的物质细节'],
        sourceUrl: 'https://tarynsimon.com/', images: [], relations: []
      },
      {
        title: 'A Living Man Declared Dead and Other Chapters I–XVIII', cluster: 'bloodline / genealogy / fate / bureaucracy / global fieldwork', period: '2008–2011',
        summary: '四年间在全球追踪不同血缘故事：土地纠纷、政治权力、疾病、失踪、宗教和行政错误。每一 chapter 由严格格式的家族肖像、文本与 footnote images 组成，个人脸孔被置于巨大血缘 / 制度结构中。',
        actions: ['先研究具有政治 / 法律意义的 bloodline stories', '追踪家族成员和缺席者', '搭建统一肖像背景', '按家谱位置逐一拍摄人物', '为空位保留缺席 / 拒绝 / 死亡信息', '撰写长篇案件 / 家族说明', '另拍 footnote images 补充无法进入主肖像的信息', '将18章保持同一视觉模板以便比较'],
        sourceUrl: 'https://tarynsimon.com/', images: [], relations: [rel('展览', 'A Living Man Declared Dead and Other Chapters I–XVIII — Neue Nationalgalerie / Tate Modern / MoMA', '2011–2012')]
      },
      {
        title: 'Image Atlas', cluster: 'search engine / national filtering / comparative algorithm', period: '2012',
        summary: '与程序员 Aaron Swartz 合作，把同一个搜索词送入不同国家 / 地区的本地搜索引擎结果，横向排列图像。作品不试图找“正确图片”，而把算法、文化与国家过滤造成的差异变成可见。',
        actions: ['建立跨地区 image-search interface', '输入同一个词到不同国家结果源', '抓取并并排显示 top image results', '保持搜索词一致而只改变地理 / 算法来源', '让用户自己比较国家间视觉差异', '把 search engine 视作当代图像分类制度'],
        sourceUrl: 'https://tarynsimon.com/', images: [], relations: []
      },
      {
        title: 'Birds of the West Indies', cluster: 'film prop archive / taxonomy / fiction-reality loop', period: '2013',
        summary: '项目从 James Bond 电影中的鸟类与人物命名系统出发，系统追踪电影里出现的真实鸟、道具、女性角色和虚构分类，模仿自然史 field guide 的权威形式来展示流行文化如何制造分类。',
        actions: ['逐部研究 James Bond films', '识别画面中真实 / 人工鸟类出现', '研究角色命名与 Ian Fleming 鸟类学来源', '重新摄影相关标本 / 对象', '以 field-guide 分类格式排版', '让虚构电影和科学 taxonomy 共用同一种权威展示语言'],
        sourceUrl: 'https://tarynsimon.com/', images: [], relations: []
      },
      {
        title: 'Paperwork and the Will of Capital', cluster: 'diplomatic archive / flower arrangements / reenactment / political stagecraft', period: '2015',
        summary: 'Simon 搜集重大国际协议签署仪式的档案照片，发现政治领导人桌前反复出现精密花艺。她与植物学家研究并重新制作这些 arrangement，再将花材压制成 herbarium specimens，把外交舞台装饰转换为另一种档案。',
        actions: ['搜集国际 treaty / agreement signing press photographs', '裁取并研究桌面花艺', '识别照片中的植物品种', '在可取得条件下重新采购花材', '由 florist 重建 archival arrangement', '在中性背景重新摄影', '将花材压制 / 干燥成为 specimen', '把政治照片、花艺重演和植物档案组合展示'],
        sourceUrl: 'https://tarynsimon.com/', images: [],
        relations: [rel('展览', '56th Venice Biennale — Arsenale', '2015')]
      },
      {
        title: 'An Occupation of Loss', cluster: 'professional mourners / architecture / performance / bureaucracy', period: '2016–',
        summary: '项目邀请来自不同文化传统的 professional mourners 到纽约，在大型建筑装置中同时进行哀悼仪式。作品的生产包含签证、跨境人员移动、声音、建筑和观众进入规则——行政本身成为 performance 的一部分。',
        actions: ['研究不同国家职业哀悼传统', '邀请具体 practitioners 而非演员模拟', '处理国际签证与旅行限制', '设计观众需要进入的建筑 / 声学结构', '让多种 mourning sound 同时发生', '记录制度阻碍如何改变谁能真正到场', '将行政过程纳入作品文本和档案'],
        sourceUrl: 'https://tarynsimon.com/', images: [], relations: []
      }
    ],
    awards: [],
    exhibitions: ['The Innocents — MoMA PS1', 'A Living Man Declared Dead — Neue Nationalgalerie / Tate Modern / MoMA', 'Paperwork and the Will of Capital — Venice Biennale 2015', 'Taryn Simon — Guggenheim New York 2026–2027'],
    sources: [
      { label: 'Taryn Simon Studio — Works', url: 'https://tarynsimon.com/' },
      { label: 'Taryn Simon — installation archive', url: 'https://tarynsimon.com/installviews/2012_moca/' }
    ]
  },

  'carrie-mae-weems': {
    artistId: 'carrie-mae-weems',
    projectCoverage: '8 个家庭叙事 / 固定舞台 / 档案批判 / 权力建筑节点已建立深档案 · 1978–现在',
    imageCoverage: '0 / 8 项目已有代表图像',
    note: 'Weems 的跨度很大，但方法一直有一条连续线：先找到一种既有视觉制度——家庭相册、厨房桌、奴隶制档案、博物馆建筑、历史重演——再用自己的身体、文字和重新编排把“谁有权制造图像”翻转过来。她非常适合研究怎样用有限规则持续扩展几十年，而不是追求统一视觉风格。',
    projects: [
      {
        title: 'Family Pictures and Stories', cluster: 'family album / oral history / Black everyday life', period: '1978–1984',
        summary: 'Weems 从自己的家庭与朋友开始，使用摄影和口述 / 文本建立另一种黑人家庭相册。项目反驳主流媒体把黑人生活缩减为危机、贫困或社会问题的叙事。',
        actions: ['长期拍摄家人和亲密朋友', '记录家庭日常而非只拍重大仪式', '搜集家庭成员讲述和故事', '把文本 / 声音与照片并置', '保留普通生活中的幽默、亲密、劳动和冲突', '用系列而非单张“代表黑人家庭”'],
        sourceUrl: 'https://www.hasselbladfoundation.org/en/portfolio_page/carrie-mae-weems-2/', images: [], relations: []
      },
      {
        title: 'Kitchen Table Series', cluster: 'fixed set / self-performance / relationship narrative / text', period: '1990',
        summary: '20 张 gelatin-silver prints 几乎全部围绕同一厨房桌与同一盏吊灯完成。Weems 自己扮演核心女性角色，不同男人、孩子、朋友与物件进出同一固定舞台，关系权力仅靠姿势和微小布景变化推进。',
        actions: ['锁定同一张桌、墙面与单盏吊灯', '固定近似相机位置', '艺术家本人持续出演同一中心角色', '分场邀请伴侣 / 朋友 / 孩子进入', '用镜子、扑克牌、香烟、报纸、鸟笼等少量道具改变关系', '以黑白统一时间感', '将照片与文本 panel 共同组成叙事'],
        sourceUrl: 'https://art21.org/gallery/carrie-mae-weems-artwork-survey-1990s/', images: [], relations: []
      },
      {
        title: 'Sea Islands Series', cluster: 'Gullah Geechee / oral history / landscape / vernacular spirituality', period: '1991–1992',
        summary: '项目进入 Sea Islands 的 Gullah Geechee 历史、语言与地方记忆，把 landscape、vernacular architecture、人物与口述材料组织起来。她没有只做民族志纪录，而是持续强调历史不可见层如何停留在地点里。',
        actions: ['进行地方历史与口述研究', '拍摄 Sea Islands landscape 与建筑', '记录地方语言 / 故事 / spiritual memory', '把地点照片与文字并置', '避免单纯以人物肖像替代社群历史', '把奴隶制历史与当代地点连续起来'],
        sourceUrl: 'https://www.clevelandart.org/about/press/carrie-mae-weems-three-decades-photography-and-video-opens-june-30', images: [], relations: []
      },
      {
        title: 'From Here I Saw What Happened and I Cried', cluster: 'archive appropriation / red tint / sandblasted text / racial science', period: '1995–1996',
        summary: 'Weems 从博物馆 / 大学档案中取得奴隶制时期 daguerreotypes 与其他黑人历史照片，重新裁切、统一染成血红色，并在覆盖玻璃上 sandblast 文字。她不是“展示受害者档案”，而是直接在图像制度上加一层反向叙述。',
        actions: ['研究博物馆 / 大学保存的奴隶制与黑人肖像档案', '复制并重新裁切既有历史照片', '将图像统一转为红色调 C-print', '为每张照片写第二人称 / 历史性短句', '将文字 sandblast 到覆盖玻璃', '用文字遮挡 / 框定观看方式', '按连续序列安装使观看成为历史阅读'],
        sourceUrl: 'https://www.moma.org/momaorg/shared/pdfs/docs/learn/courses/Among-Others-Gallun-on-Weems.pdf', images: [], relations: []
      },
      {
        title: 'Roaming', cluster: 'self-performance / Rome / architecture / body vs power', period: '2006',
        summary: 'Weems 身穿长黑裙、背对镜头站在 Rome 的古典、法西斯与现代建筑前。固定人物姿态像一把测量尺，把黑人女性身体与国家纪念性建筑放进同一透视结构，直接测试“谁被允许属于历史空间”。',
        actions: ['选择带有帝国 / 国家权力历史的罗马建筑', '统一使用长黑裙造型', '人物多以背面或侧面对建筑', '控制人物与建筑的尺度关系', '使用重复姿态跨地点形成比较', '避免游客式地标构图而强调建筑轴线', '通过组照把身体变成权力空间的测量单位'],
        sourceUrl: 'https://art21.org/watch/extended-play/carrie-mae-weems-roaming-short/', images: [], relations: []
      },
      {
        title: 'Constructing History: A Requiem to Mark the Moment', cluster: 'reenactment / students / iconic history photographs / classroom', period: '2008',
        summary: '她与学生合作重新表演20世纪政治暴力与社会运动的 iconic images。与直接 appropriation 不同，这里重新搭景、选角、摆姿势，使历史照片被当作一套可以重新进入的剧本。',
        actions: ['选择已经进入大众记忆的历史新闻照片', '分析原图人物位置和姿势', '与学生 / 表演者重新选角', '搭建简化背景与道具', '按原图关系重新布置身体', '摄影重演后的 tableau', '让“记得历史”变成一次身体实践而非观看档案'],
        sourceUrl: 'https://www.hasselbladfoundation.org/en/portfolio_page/carrie-mae-weems-2/', images: [], relations: []
      },
      {
        title: 'Slow Fade to Black / Blue Notes', cluster: 'celebrity archive / blur / erasure / Black cultural memory', period: '2010–2015',
        summary: 'Weems 使用黑人音乐、电影与文化人物的历史图像，通过模糊、色彩和图像退化处理“被记住 / 被忘记”的机制。与早期红色档案不同，这里图像本身开始逐渐不可辨认。',
        actions: ['搜集黑人文化人物 archival portraits', '重新复制并放大', '主动引入 blur / soft focus / image degradation', '部分作品加入蓝色等单色处理', '用系列比较哪些名字仍能被识别', '让图像消失程度对应文化记忆的不稳定性'],
        sourceUrl: 'https://www.hasselbladfoundation.org/en/portfolio_page/carrie-mae-weems-2/', images: [], relations: []
      },
      {
        title: 'Four-decade expanded practice', cluster: 'photography / text / fabric / audio / video / installation', period: '1980s–现在',
        summary: '后期实践继续扩展到 video、fabric、audio、public intervention 和 installation，但并不是“离开摄影”。她反复把摄影放进更大的叙事装置中，用空间、声音和文本重新规定观众怎样读取历史图像。',
        actions: ['根据项目决定照片是否需要文本 / 声音 / video', '把 archival image 与 artist performance 交替使用', '将固定摄影系列扩展为空间 installation', '在不同机构重新编辑几十年材料', '持续用自身身体作为历史空间中的代理人物', '把展览本身当作叙事媒介'],
        sourceUrl: 'https://fraenkelgallery.com/artists/carrie-mae-weems', images: [], relations: []
      }
    ],
    awards: ['MacArthur Fellowship 2013', 'Hasselblad Award 2023'],
    exhibitions: ['Carrie Mae Weems: Three Decades of Photography and Video — retrospective tour 2012–2014', 'Guggenheim retrospective context 2014', 'A Great Turn in the Possible / The Evidence of Things Not Seen — 2021–2022', 'Hasselblad Center 2023'],
    sources: [
      { label: 'Hasselblad Foundation — Carrie Mae Weems', url: 'https://www.hasselbladfoundation.org/en/portfolio_page/carrie-mae-weems-2/' },
      { label: 'Art21 — Carrie Mae Weems', url: 'https://art21.org/gallery/carrie-mae-weems-artwork-survey-1990s/' },
      { label: 'Fraenkel Gallery — Carrie Mae Weems', url: 'https://fraenkelgallery.com/artists/carrie-mae-weems' }
    ]
  }
};