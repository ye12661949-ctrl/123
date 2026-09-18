import type { Artist } from './data';
import type { ArtistArchive, ArchiveImage, ArchiveProject, ArchiveRelation } from './archiveData';

const img = (url: string, title: string, credit: string, sourceUrl: string, sourceLabel: string): ArchiveImage => ({ url, title, credit, sourceUrl, sourceLabel });
const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

type ResearchSpec = {
  id: string;
  name: string;
  chineseName?: string;
  born: string;
  base: string;
  intro: string;
  methods: string[];
  subjects: string[];
  outputs: string[];
  institutions: string[];
  achievements: string[];
  whyImportant: string;
  note: string;
  projects: ArchiveProject[];
  awards: string[];
  exhibitions: string[];
  sources: Array<{ label: string; url: string }>;
};

const specs: ResearchSpec[] = [
  {
    id: 'anne-collier', name: 'Anne Collier', born: '1970', base: 'New York',
    intro: '把旧杂志、唱片封面、摄影器材广告与印刷图像重新放到工作室里拍摄，研究观看、性别与摄影媒介如何互相制造。',
    methods: ['挪用', '再摄影', '工作室静物', 'found image', '摄影史研究'],
    subjects: ['女性形象', '凝视', '摄影史', '媒体', '图像生产', '性别'],
    outputs: ['摄影', '幻灯装置', '展览'], institutions: ['MoMA', 'Whitney Museum', 'Anton Kern Gallery'],
    achievements: ['MoMA New Photography 2012'],
    whyImportant: '她不是简单展示旧图片，而是重新拍摄“图片作为物件”的状态，让纸张、裁切、翻页、摄影器材和女性身体的观看制度同时进入画面。',
    note: '第一轮覆盖她最核心的“图片中的摄影”方法：眼睛、相机、书页与女性被观看的既有图像。',
    projects: [
      { title: 'Cut', cluster: 'rephotography / eye / photographic apparatus', period: '2009–2010', summary: '把自己的眼睛照片放入裁纸刀下重新摄影，让观看器官与图像加工工具直接相遇。', actions: ['先制作眼睛照片', '置入裁纸刀', '工作室灯光', '大画幅再摄影'], sourceUrl: 'https://www.moma.org/collection/works/147155', images: [img('https://artlogic-res.cloudinary.com/w_600%2Cc_limit%2Cf_auto%2Cfl_lossy%2Cq_auto/artlogicstorage/antonkern/images/view/b45c06a5e4e1be5fd70f5c6eb19b9e7bj/antonkerngallery-anne-collier-cut-color-2010.jpg', 'Cut Color', '© Anne Collier', 'https://www.antonkerngallery.com/artists/46-anne-collier/', 'Anton Kern Gallery')], relations: [rel('收藏', 'MoMA', 'Cut, 2009')] },
      { title: 'Woman with a Camera', cluster: 'gendered image culture / slide installation', period: '2009–2012', summary: '从杂志、书籍和商业图像中重新拍摄“女性拿相机”的既有模板，拆解摄影文化里的性别角色。', actions: ['收集印刷品', '再摄影', '裁切与比例控制', '照片 / 幻灯装置'], sourceUrl: 'https://whitney.org/collection/works/36848', images: [img('https://static-assets.artlogic.net/w_1200%2Cc_limit%2Cf_auto%2Cfl_lossy%2Cq_auto/artlogicstorage/antonkern/images/view/b7d17aa40dfb277483d592e8ffd7cea5j/antonkerngallery-anne-collier-open-book-8-prints-2012.jpg', 'Open Book #8', '© Anne Collier', 'https://www.antonkerngallery.com/exhibitions/157-anne-collier/', 'Anton Kern Gallery')], relations: [rel('展览', 'New Photography 2012 — MoMA', '2012–2013')] },
      { title: 'Woman Crying / Eyes', cluster: 'mass-media emotion / gender', period: '2014–2022', summary: '持续从广告、漫画和印刷图像中截取眼睛、哭泣女性等视觉模板，以极冷静的再摄影放大其文化编码。', actions: ['大众媒体搜集', '局部裁切', '工作室再摄影', '系列化'], sourceUrl: 'https://www.antonkerngallery.com/artists/46-anne-collier/', images: [], relations: [] }
    ],
    awards: [], exhibitions: ['Greater New York — MoMA PS1 2005', 'New Photography — MoMA 2012', 'Anne Collier survey — CCS Bard / MCA Chicago 2014–2015'], sources: [{ label: 'MoMA', url: 'https://www.moma.org/artists/39651-anne-collier' }, { label: 'Anton Kern Gallery', url: 'https://www.antonkerngallery.com/artists/46-anne-collier/' }]
  },
  {
    id: 'louise-lawler', name: 'Louise Lawler', born: '1947', base: 'New York',
    intro: '拍摄艺术品在私人住宅、拍卖场、美术馆和储藏系统里的实际处境，把展示、拥有和流通本身变成作品。',
    methods: ['制度批判', '挪用', '再语境化', '摄影装置', '文本'], subjects: ['艺术制度', '收藏', '展示', '市场', '观看机制', '权力'],
    outputs: ['摄影', '墙面图像', 'tracing', '声音', '物件'], institutions: ['MoMA', 'MOCA Los Angeles', 'The Met'], achievements: ['MoMA survey WHY PICTURES NOW 2017'],
    whyImportant: '她把注意力从“作品本身”移到作品进入谁家、挂在什么墙、旁边是什么、怎样被拍卖或收藏。这是理解艺术圈作为制度系统的核心实践。',
    note: '第一轮重点放在图片离开原始尺寸后如何被重新使用，以及艺术品所处环境如何改变其意义。',
    projects: [
      { title: 'Why Pictures Now', cluster: 'institutional context / text-image', period: '1981', summary: '一张极小的照片把印有 WHY PICTURES NOW 的火柴盒置于烟灰缸旁，成为她对图像制度持续追问的标志性节点。', actions: ['日常物件布置', '摄影', '文本作为画面材料'], sourceUrl: 'https://www.moma.org/collection/works/204109', images: [], relations: [rel('收藏', 'MoMA', 'Why Pictures Now, 1981')] },
      { title: 'Museum / collector / auction photographs', cluster: 'art circulation / institutional critique', period: '1980s–', summary: '拍摄别人的艺术品在收藏家住宅、博物馆、拍卖预展中的位置，把价值与展示环境一起记录。', actions: ['进入收藏 / 展示空间', '现场摄影', '保留墙面与家具关系', '重新命名'], sourceUrl: 'https://www.metmuseum.org/art/collection/search/897889', images: [], relations: [] },
      { title: 'Adjusted to Fit / Tracings', cluster: 'reformatting / site-responsive display', period: '2006–', summary: '把既有摄影拉伸或转换为 tracing，使图像精确适应新的墙面和机构条件。', actions: ['重用旧图像', '根据墙面尺寸拉伸', '壁纸 / vinyl 输出', '线描转换'], sourceUrl: 'https://www.moma.org/calendar/exhibitions/1646', images: [img('https://www.moma.org/d/c/installation_images/W1siZiIsIjM5NzUwNCJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=565836909b5ee74a', 'WHY PICTURES NOW — installation view', '© Louise Lawler / MoMA', 'https://www.moma.org/calendar/exhibitions/1646', 'MoMA')], relations: [rel('展览', 'Louise Lawler: WHY PICTURES NOW — MoMA', '2017'), rel('策展', 'Roxana Marcoci', '2017')] }
    ],
    awards: [], exhibitions: ['Projects: Louise Lawler — MoMA 1987', 'WHY PICTURES NOW — MoMA 2017'], sources: [{ label: 'MoMA', url: 'https://www.moma.org/artists/7928-louise-lawler' }]
  },
  {
    id: 'ahlam-shibli', name: 'Ahlam Shibli', born: '1970', base: 'Palestine',
    intro: '以克制的纪实摄影研究“家”如何同时意味着归属、失去、抵抗和限制，并长期处理巴勒斯坦及其他迁徙社群。',
    methods: ['纪实摄影', '长期研究', '系列编排', '文本 + 摄影'], subjects: ['家', '巴勒斯坦', '殖民', '迁徙', '身份', '纪念'], outputs: ['摄影系列', '展览', '出版'], institutions: ['MACBA', 'Jeu de Paume', 'Serralves'], achievements: ['Phantom Home retrospective 2013'],
    whyImportant: '她的照片本身经常很平静，但系列结构会不断追问：谁被允许拥有家、谁只能纪念家、一个共同体怎样在日常环境里保存政治记忆。',
    note: '按艺术家长期主题“home”组织，而不把巴勒斯坦经验简化为冲突新闻摄影。',
    projects: [
      { title: 'Death', cluster: 'martyr images / domestic memorial', period: '2004', summary: '拍摄纳布卢斯家庭和公共空间中的烈士肖像、海报与纪念物，观察死亡图像如何进入日常室内。', actions: ['家庭与公共空间拍摄', '纪念图像记录', '系列编排'], sourceUrl: 'https://www.afterall.org/articles/and-my-shrine-is-my-mothers-salon-on-ahlam-shiblis-death-2/', images: [img('https://afterall-wp.imgix.net/sites/13468/2024/01/670187-8.jpg?auto=format&crop=faces%2Centropy&dpr=1&fit=crop&q=60&w=1125', 'Death — domestic memorial context', '© Ahlam Shibli', 'https://www.afterall.org/articles/and-my-shrine-is-my-mothers-salon-on-ahlam-shiblis-death-2/', 'Afterall')], relations: [] },
      { title: 'Trauma', cluster: 'memory / resistance / local history', period: '2008–2009', summary: '在法国 Corrèze 追踪抵抗运动、殖民战争与地方记忆如何通过纪念结构连接。', actions: ['地方档案研究', '纪念地拍摄', '口述历史线索', '系列编辑'], sourceUrl: 'https://www.macba.cat/en/exhibitions/ahlam-shibli-phantom-home/', images: [], relations: [] },
      { title: 'Heimat / Belonging', cluster: 'migration / imagined community', period: '2016–2023', summary: '从德国迁徙史到 Arles 的不同共同体，比较归属如何由历史、劳动、家庭与地方制度共同制造。', actions: ['跨地点研究', '纪实摄影', '社群关系', '长期编排'], sourceUrl: 'https://www.ahlamshibli.com/biography.htm', images: [], relations: [rel('展览', 'Phantom Home — MACBA / Jeu de Paume / Serralves', '2013–2014')] }
    ],
    awards: [], exhibitions: ['Phantom Home — MACBA 2013', 'Jeu de Paume 2013', 'Serralves 2013–2014'], sources: [{ label: 'Artist website', url: 'https://www.ahlamshibli.com/biography.htm' }, { label: 'MACBA', url: 'https://www.macba.cat/en/exhibitions/ahlam-shibli-phantom-home/' }]
  },
  {
    id: 'allan-sekula', name: 'Allan Sekula', born: '1951–2013', base: 'Los Angeles',
    intro: '把摄影、写作、劳动史、港口与全球物流连接起来，反对把纪实照片当成脱离经济关系的独立图像。',
    methods: ['研究型摄影', '纪实摄影', '文本 + 摄影', '档案', '长期项目'], subjects: ['劳动', '物流', '资本主义', '海洋', '阶级', '全球化'], outputs: ['摄影系列', '摄影书', '影像', 'essay'], institutions: ['Tate', 'documenta', 'Taipei Biennial'], achievements: ['Fish Story, 1989–1995'],
    whyImportant: '他对今天研究物流、平台、供应链和全球资本仍然极关键：照片永远和说明、路线、劳动关系、港口制度一起工作。',
    note: '第一轮从家庭阶级结构到海运全球化，再到抗议现场，突出摄影与社会经济研究的结合。',
    projects: [
      { title: 'Aerospace Folktales', cluster: 'family / labour / class', period: '1973', summary: '以失业的父亲、家庭空间、录音与文本构成关于航空工业劳动和中产家庭脆弱性的作品。', actions: ['家庭摄影', '录音', '文本', '空间陈列'], sourceUrl: 'https://www.tate.org.uk/art/artists/allan-sekula-2325', images: [], relations: [] },
      { title: 'Fish Story', cluster: 'ports / shipping / global labour', period: '1989–1995', summary: '跨多个港口长期拍摄海运、工人、容器和沿海空间，以摄影与长文本研究全球化的物质基础。', actions: ['跨国港口田野', '工人 / 基础设施摄影', '长文本写作', '摄影书 / 展览编排'], sourceUrl: 'https://www.taipeibiennial.org/2018/information/115', images: [img('https://www.taipeibiennial.org/2018/uploads/enbiennial/images/large/59e828cd-edd0-4451-aad2-b289ac0594a8.jpg', 'Fish Story — Message in a Bottle', '© Allan Sekula', 'https://www.taipeibiennial.org/2018/information/115', 'Taipei Biennial')], relations: [rel('出版', 'Fish Story', '1995')] },
      { title: 'Waiting for Tear Gas', cluster: 'protest / anti-spectacle documentary', period: '1999–2000', summary: '在西雅图 WTO 抗议现场以广角、不用闪光的方式贴近参与者，拒绝远距新闻奇观。', actions: ['进入抗议人群', '广角近距离拍摄', '拒绝闪光', '序列编辑'], sourceUrl: 'https://www.tate.org.uk/art/artists/allan-sekula-2325', images: [], relations: [] }
    ],
    awards: [], exhibitions: ['documenta 11 — 2002', 'Taipei Biennial archive presentation — 2018'], sources: [{ label: 'Tate', url: 'https://www.tate.org.uk/art/artists/allan-sekula-2325' }]
  },
  {
    id: 'sophie-ristelhueber', name: 'Sophie Ristelhueber', born: '1949', base: 'Paris',
    intro: '长期拍摄战争和创伤留下的痕迹，却经常避开战斗瞬间，把地表、建筑、伤口与修补视为同一类“表面”。',
    methods: ['战争后摄影', '大尺幅摄影', '航空摄影', '档案挪用', '序列'], subjects: ['战争', '伤痕', '地景', '身体', '记忆', '创伤'], outputs: ['摄影', '摄影书', '装置'], institutions: ['MoMA', 'Centre Pompidou', 'Jeu de Paume'], achievements: ['Deutsche Börse Photography Prize 2010 winner'],
    whyImportant: '她避免把战争变成事件新闻，而是拍“战争之后还剩什么”：沙漠裂痕、手术缝线、废墟。身体与土地因此在形式上互相映照。',
    note: '第一轮突出 Fait 与 Every One：一个把战争写在地表，一个把手术痕迹变成巨大身体地形。',
    projects: [
      { title: 'Beyrouth', cluster: 'ruins / war aftermath', period: '1984', summary: '在贝鲁特内战后的建筑内部拍摄破坏痕迹，以空间代替战斗场面。', actions: ['进入战后建筑', '废墟细节摄影', '系列编辑'], sourceUrl: 'https://www.sophieristelhueber.com/', images: [], relations: [] },
      { title: 'Fait', cluster: 'Gulf War / terrain / aerial view', period: '1992', summary: '拍摄海湾战争后的科威特沙漠，从地面和空中呈现壕沟、弹坑、残骸与地表划痕。', actions: ['战后田野', '航空 / 地面摄影', '大尺幅打印', '尺度混淆'], sourceUrl: 'https://www.centrepompidou.fr/en/ressources/oeuvre/cLa6bG', images: [img('https://www.centrepompidou.fr/media/picture/13/a4/13a4aaa689382e2a2afc79fb84250d3c/thumb_large.jpg', 'Fait', '© Sophie Ristelhueber', 'https://www.centrepompidou.fr/en/ressources/oeuvre/cLa6bG', 'Centre Pompidou'), img('https://buffaloakg.org/sites/default/files/artwork/P1997_009_002_o2.jpg', 'Untitled from Fait', '© Sophie Ristelhueber', 'https://buffaloakg.org/artworks/p199792-untitled-series-fait', 'Buffalo AKG')], relations: [] },
      { title: 'Every One', cluster: 'surgery / scar / body-landscape', period: '1994', summary: '把手术后的缝合伤口极度放大，令身体表面像战后地景。', actions: ['医疗伤口摄影', '局部裁切', '巨大放大', '网格式展示'], sourceUrl: 'https://www.sophieristelhueber.com/', images: [], relations: [rel('奖项', 'Deutsche Börse Photography Prize', 'Winner 2010')] }
    ],
    awards: ['Deutsche Börse Photography Prize 2010 — winner'], exhibitions: ['New Photography 12 — MoMA 1996', 'Theater of Operations — MoMA PS1 2019–2020'], sources: [{ label: 'MoMA', url: 'https://www.moma.org/artists/72944-sophie-ristelhueber' }, { label: 'Centre Pompidou', url: 'https://www.centrepompidou.fr/en/ressources/oeuvre/cLa6bG' }]
  },
  {
    id: 'clare-strand', name: 'Clare Strand', born: '1973', base: 'Brighton / UK',
    intro: '把档案图像、机器传输、编织、随机系统和摄影研究混在一起，经常故意让信息在转换中损失。',
    methods: ['档案', '图像传输', '规则系统', '再摄影', '随机过程'], subjects: ['信息', '摄影史', '分类', '错误', '传播', '控制'], outputs: ['摄影', '装置', '编织', '机器装置', '出版'], institutions: ['The Photographers’ Gallery', 'Victoria and Albert Museum', 'Landesmuseum'], achievements: ['The Discrete Channel with Noise, 2018'],
    whyImportant: '她适合研究“图像转译的错误能不能成为作品”。照片经过编码、传输、织造或机器规则后产生的损失，不是故障，而是核心内容。',
    note: '第一轮覆盖她从传统摄影系列走向机器、数据与随机系统的变化。',
    projects: [
      { title: 'Gone Astray Details', cluster: 'studio portrait / Victorian reference', period: '2001–2002', summary: '让人物与巨大城市物件同场出现，借用早期工作室肖像与社会分类的视觉语言。', actions: ['工作室搭景', '人物与道具编排', '黑白摄影'], sourceUrl: 'https://www.clarestrand.co.uk/works/', images: [], relations: [] },
      { title: 'The Entropy Pendulum', cluster: 'machine / image destruction / chance', period: '2015', summary: '让机械和时间不断作用于图像，使作品在展览过程中持续变化。', actions: ['机械结构', '重复运动', '图像磨损', '现场变化'], sourceUrl: 'https://clarestrand.co.uk/', images: [], relations: [] },
      { title: 'The Discrete Channel with Noise', cluster: 'image coding / transmission / weaving', period: '2018', summary: '图像被转换成数字信息、通过有噪声的传输规则再重建，故意保留数据损失。', actions: ['图像编码', '传输', '噪声引入', '重新输出 / 编织'], sourceUrl: 'https://www.clarestrand.co.uk/works/', images: [img('https://thephotographersgallery.org.uk/sites/default/files/styles/original/public/images/ClareStrand_KElliott_01.jpg.webp?itok=FOH44w5F', 'The Discrete Channel with Noise — installation', '© Clare Strand', 'https://thephotographersgallery.org.uk/whats-on/slow-looking-clare-strand', 'The Photographers’ Gallery')], relations: [] }
    ],
    awards: [], exhibitions: ['The Photographers’ Gallery collection / programmes', 'Landesmuseum — New Perspectives collection'], sources: [{ label: 'Artist website', url: 'https://clarestrand.co.uk/' }]
  },
  {
    id: 'alison-rossiter', name: 'Alison Rossiter', born: '1953', base: 'New York',
    intro: '不使用相机，直接显影过期摄影纸，让几十年储存造成的光漏、霉斑、氧化和化学变化自己形成图像。',
    methods: ['无相机摄影', '暗房', '过期相纸', '材料档案', '分类'], subjects: ['摄影材料', '时间', '保存', '化学', '偶然性'], outputs: ['银盐摄影', '网格装置', '材料档案'], institutions: ['Yossi Milo', 'National Gallery of Canada', 'High Museum of Art'], achievements: ['Camera-less expired-paper practice'],
    whyImportant: '她既显现相纸储存期间积累的痕迹，也通过局部浸泡和倾倒显影液主动组织图形。要区分材料已有的历史与艺术家新增的操作，不能把所有作品都说成自然留下的潜影。',
    note: '重点区分完整显影（Density）、不同角度局部浸泡（Fours）和倾倒显影液（Pools）；纸张年代与作品制作年代分别读取。',
    projects: [
      { title: 'Expired photographic papers', cluster: 'camera-less / material time', period: '2007–', summary: '收集十九至二十世纪的过期相纸，在暗房中不经相机直接显影，显出储存期间积累的潜在痕迹。', actions: ['收集老相纸', '记录品牌 / 日期', '直接显影', '按历史顺序编排'], sourceUrl: 'https://yossimilo.com/artists/30-alison-rossiter/biography/', images: [img('https://images.squarespace-cdn.com/content/v1/5702ab9d746fb9634796c9f9/7a39a5f5-6273-419c-befa-cec1b518a67c/ar.25580-1.jpg', 'Semblance — expired paper grid', '© Alison Rossiter', 'https://museemagazine.com/culture/2026/1/26/alison-rossiter-semblance-yossi-milo-gallery', 'Musée Magazine')], relations: [] },
      { title: 'Lament', cluster: 'historical paper / serial composition', period: '2015–', summary: '把不同年代纸张形成的化学痕迹按组合关系并置，强调材料自身历史。', actions: ['过期纸显影', '切割 / 并置', '系列命名'], sourceUrl: 'https://yossimilo.com/artists/30-alison-rossiter/biography/', images: [], relations: [] },
      { title: 'Semblance', cluster: 'grid / latent image / 2026 exhibition', period: '2025–2026', summary: '以网格和相邻色阶展示相纸因时间、包装与化学状态产生的差异。', actions: ['材料分类', '显影', '网格编排'], sourceUrl: 'https://museemagazine.com/culture/2026/1/26/alison-rossiter-semblance-yossi-milo-gallery', images: [], relations: [rel('展览', 'Semblance — Yossi Milo', '2026')] }
    ],
    awards: [], exhibitions: ['Semblance — Yossi Milo 2026'], sources: [{ label: 'Yossi Milo', url: 'https://yossimilo.com/artists/30-alison-rossiter/biography/' }]
  },
  {
    id: 'marco-breuer', name: 'Marco Breuer', born: '1966', base: 'United States',
    intro: '直接折、刮、烧、压、切感光纸和相纸表面，让摄影不依靠镜头，而依靠物理动作在乳剂层留下痕迹。',
    methods: ['无相机摄影', '材料实验', '刮擦', '燃烧', '折叠'], subjects: ['摄影材料', '痕迹', '动作', '表面', '时间'], outputs: ['独版摄影', '相纸物件', '装置'], institutions: ['Amon Carter Museum', 'Yossi Milo', 'Morgan Library'], achievements: ['Camera-less photographic material practice'],
    whyImportant: '如果要研究“摄影能不能像版画或雕塑一样直接做在材料上”，Breuer 是核心案例：画面中的每条线几乎都能追溯到具体物理动作。',
    note: '项目不强行按传统系列切割，而按物理动作和相纸类型记录。',
    projects: [
      { title: 'Cameraless photographic paper interventions', cluster: 'burn / scratch / fold', period: '1990s–', summary: '在相纸乳剂上直接进行热、摩擦、折叠和刮擦，省略相机与底片。', actions: ['折叠相纸', '加热 / 燃烧', '刮擦乳剂', '暗房显影'], sourceUrl: 'https://yossimilo.com/artists/27-marco-breuer/', images: [img('https://static-assets.artlogic.net/w_1200%2Cc_limit%2Cf_auto%2Cfl_lossy%2Cq_auto/ws-artlogicwebsite0091/usr/images/news/main_image/43/bronx-documentary-center-untitled-c-1365-2013.-mabr.13045-chromogenic-paper-folded-burned.-14-1-2-x-11-1-2-inches.jpg', 'Untitled (C-1365), 2013', '© Marco Breuer', 'https://yossimilo.com/news/43-marco-breuer-at-amon-carter-museum-of-american-group-exhibition-beauty-and-life-the-finis-welch/', 'Yossi Milo')], relations: [] },
      { title: 'Chromogenic burn / abrasion works', cluster: 'colour paper / direct action', period: '2000s–2010s', summary: '把彩色相纸作为可被破坏和重构的表面，动作与显色层发生直接关系。', actions: ['彩色相纸', '烧灼', '打磨', '局部曝光'], sourceUrl: 'https://yossimilo.com/artists/27-marco-breuer/', images: [], relations: [] },
      { title: 'Exhibition-scale material sequences', cluster: 'installation / object photography', period: '2010s–', summary: '通过墙面间距和材料差异把独版作品组织成观看动作序列。', actions: ['独版选择', '墙面编排', '不同纸张并置'], sourceUrl: 'https://yossimilo.com/artists/27-marco-breuer/', images: [], relations: [] }
    ],
    awards: [], exhibitions: ['Amon Carter Museum group presentations'], sources: [{ label: 'Yossi Milo', url: 'https://yossimilo.com/artists/27-marco-breuer/' }]
  },
  {
    id: 'amalia-ulman', name: 'Amalia Ulman', born: '1989', base: 'New York / Los Angeles',
    intro: '用社交媒体账号、自拍、文字、消费品与角色表演制造真假难辨的在线身份，并进一步进入电影与办公室制度。',
    methods: ['网络表演', '自我表演', '社交媒体', '编排摄影', '影像'], subjects: ['身份', '女性形象', '平台', '消费主义', '阶级', '网络文化'], outputs: ['Instagram performance', '摄影', '影像', '装置', '电影'], institutions: ['Tate', 'New Museum', 'Whitechapel Gallery'], achievements: ['Excellences & Perfections, 2014'],
    whyImportant: '她把平台本身当作展览空间和表演机制：粉丝评论、算法时间线、自拍套路和品牌消费不是传播渠道，而是作品结构。',
    note: '从 Excellences & Perfections 到 Privilege，再到电影，观察她如何从社交媒体人格扩展到阶级和劳动结构。',
    projects: [
      { title: 'Excellences & Perfections', cluster: 'Instagram performance / identity construction', period: '2014', summary: '在 Instagram 上连续数月扮演经过设计的女性人格弧线，让观众在不知情状态下参与判断。', actions: ['角色脚本', '自拍 / 商品图', '定时发布', '评论互动', '后续揭示为表演'], sourceUrl: 'https://www.tate.org.uk/art/artworks/ulman-excellences-perfections-t14593', images: [img('https://d7hftxdivxxvm.cloudfront.net/?height=1920&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FHu-WRtNHUgf43OxTnetc3A%2Flarge.jpg&width=1920', 'Excellences & Perfections', '© Amalia Ulman', 'https://www.artsy.net/artwork/amalia-ulman-excellences-and-perfections-episode-03-13th-september-2014', 'Artsy')], relations: [rel('收藏', 'Tate', 'Excellences & Perfections')] },
      { title: 'Privilege', cluster: 'office / gender / social-media performance', period: '2016', summary: '以办公室、鸽子、职业女性形象与社交媒体更新继续测试工作和性别角色。', actions: ['角色表演', '办公室场景', 'Instagram发布', '物件 / 视频'], sourceUrl: 'https://www.newmuseum.org/exhibitions/view/amalia-ulman-privilege', images: [], relations: [rel('展览', 'New Museum', '2016')] },
      { title: 'El Planeta', cluster: 'feature film / precarity / mother-daughter performance', period: '2021', summary: '与母亲共同出演黑白长片，把家庭经济困境、阶级表演和时尚消费带入电影。', actions: ['编剧 / 导演', '母女共同表演', '黑白摄影', '长片叙事'], sourceUrl: 'https://www.filmlinc.org/films/el-planeta/', images: [], relations: [] }
    ],
    awards: [], exhibitions: ['New Museum — Privilege 2016'], sources: [{ label: 'Tate', url: 'https://www.tate.org.uk/art/artworks/ulman-excellences-perfections-t14593' }]
  },
  {
    id: 'roe-ethridge', name: 'Roe Ethridge', born: '1969', base: 'New York',
    intro: '让商业委托、杂志废片、家庭照片、网络图像和艺术摄影在同一序列中并置，故意取消“商业 / 私人 / 艺术”的边界。',
    methods: ['编辑 / sequence', '商业摄影挪用', '再语境化', '肖像', '静物'], subjects: ['图像流通', '消费', '家庭', '时尚', '摄影制度'], outputs: ['摄影', '摄影书', '展览'], institutions: ['MoMA', 'Gagosian', 'MACK'], achievements: ['MoMA New Photography 2010'],
    whyImportant: '他不是用同一视觉风格统一系列，而是用编辑把来源极不一致的图像编成“视觉赋格”。这对研究 sequence 和时尚/艺术跨界特别有用。',
    note: '第一轮重点看他如何把 editorial outtakes、商品图、家庭图与艺术史引用重新组合。',
    projects: [
      { title: 'Le Luxe', cluster: 'editorial mode / nonlinear sequence', period: '2011', summary: '把时尚、食物、人物、商业废片和私人图像编成一本不按传统叙事推进的摄影书。', actions: ['商业 / 私人图像混用', '非线性编辑', '摄影书设计'], sourceUrl: 'https://www.moma.org/interactives/exhibitions/2010/newphotography/roe-ethridge/', images: [img('https://saint-martin-bookshop.com/cdn/shop/files/Roe-Ethridge-Le-Luxe-MACK-2011_-73214331.jpg?v=1727552316', 'Le Luxe — book spread', '© Roe Ethridge', 'https://saint-martin-bookshop.com/products/roe-ethridge-le-luxe-mack-2011', 'Saint-Martin Bookshop')], relations: [rel('展览', 'New Photography — MoMA', '2010')] },
      { title: 'Sacrifice Your Body', cluster: 'Florida / family / commercial image collision', period: '2014', summary: '将佛罗里达地方图像、家庭线索、广告式静物和怪异人物并置成更不稳定的心理叙事。', actions: ['多来源拍摄', '商业视觉语法', '摄影书 sequence'], sourceUrl: 'https://www.mackbooks.us/products/sacrifice-your-body-br-roe-ethridge', images: [], relations: [] },
      { title: 'American Polychronic', cluster: 'long-term archive / retrospective editing', period: '2022', summary: '把二十余年不同来源图像重新放进同一时间结构，强调摄影档案可以被反复重编。', actions: ['跨年代选片', '重新排序', '出版 / 展览'], sourceUrl: 'https://www.mackbooks.us/products/american-polychronic-br-roe-ethridge', images: [], relations: [] }
    ],
    awards: [], exhibitions: ['New Photography — MoMA 2010'], sources: [{ label: 'MoMA', url: 'https://www.moma.org/artists/38029-roe-ethridge' }]
  },
  {
    id: 'torbjorn-rodland', name: 'Torbjørn Rødland', born: '1970', base: 'Los Angeles',
    intro: '使用模拟摄影和高度编排的肖像、静物与身体局部，把商业摄影的清晰度转成既诱人又令人不适的心理场景。',
    methods: ['编排式摄影', '模拟摄影', '静物', '肖像', '暗房'], subjects: ['欲望', '身体', '物件', '亲密关系', '不适感', '观看'], outputs: ['摄影', '摄影书', '影像', '展览'], institutions: ['Serpentine', 'Fondazione Prada', 'Whitney Museum'], achievements: ['The Touch That Made You — Serpentine 2017'],
    whyImportant: '他很适合研究“商业感很强的图为什么仍然能很复杂”。控制和偶然同时存在：布景被精确安排，但模拟胶片与人物关系又保留不可预测性。',
    note: '按 staged analogue practice 组织，而不是把食物、身体、人物分成单纯题材。',
    projects: [
      { title: 'White Planet Black Heart', cluster: 'portrait / landscape / ambiguous staging', period: '2003', summary: '早期作品群已明确形成过度清晰、心理暧昧的模拟摄影语言。', actions: ['模拟摄影', '人物 / 物件编排', '暗房打印'], sourceUrl: 'https://www.serpentinegalleries.org/whats-on/torbjorn-rodland-touch-made-you/', images: [], relations: [] },
      { title: '132 BPM', cluster: 'video / body / repetition', period: '2005', summary: '以持续节拍组织人物动作，让摄影式姿态进入时间。', actions: ['录像', '节拍结构', '人物表演'], sourceUrl: 'https://www.serpentinegalleries.org/whats-on/torbjorn-rodland-touch-made-you/', images: [], relations: [] },
      { title: 'The Touch That Made You', cluster: 'survey / staged analogue photography', period: '2017–2018', summary: 'Serpentine 与 Fondazione Prada 汇集近二十年的肖像、静物、风景和录像，显示商业清晰度、黏稠物质和身体关系的持续方法。', actions: ['模拟 staged photography', '跨年代重编', '木结构展墙', '摄影 + 录像'], sourceUrl: 'https://www.serpentinegalleries.org/whats-on/torbjorn-rodland-touch-made-you/', images: [img('https://shop.serpentinegalleries.org/cdn/shop/products/TR-Cover_002_1200x1200.jpg?v=1505755381', 'The Touch That Made You', '© Torbjørn Rødland', 'https://shop.serpentinegalleries.org/products/torbjorn-rodland-the-touch-that-made-you', 'Serpentine')], relations: [rel('展览', 'Serpentine Galleries', '2017'), rel('展览', 'Fondazione Prada', '2018')] }
    ],
    awards: [], exhibitions: ['The Touch That Made You — Serpentine 2017', 'Fondazione Prada 2018'], sources: [{ label: 'Serpentine', url: 'https://www.serpentinegalleries.org/whats-on/torbjorn-rodland-touch-made-you/' }]
  }
];

export const newResearchArtists: Artist[] = specs.map(spec => ({
  id: spec.id,
  name: spec.name,
  chineseName: spec.chineseName,
  born: spec.born,
  base: spec.base,
  intro: spec.intro,
  methods: spec.methods,
  subjects: spec.subjects,
  outputs: spec.outputs,
  institutions: spec.institutions,
  achievements: spec.achievements,
  whyImportant: spec.whyImportant,
  projects: spec.projects.map(project => ({ year: project.period, title: project.title, type: project.cluster, facts: project.actions, reading: project.summary })),
  images: spec.projects.flatMap(project => project.images).slice(0, 3),
  sourceLabel: spec.sources[0]?.label ?? 'Research source',
  sourceUrl: spec.sources[0]?.url ?? '#',
}));

export const newResearchArchives: Record<string, ArtistArchive> = Object.fromEntries(specs.map(spec => [
  spec.id,
  {
    artistId: spec.id,
    projectCoverage: `${spec.projects.length} 个关键项目 / 方法节点已完成第一轮`,
    imageCoverage: '',
    note: spec.note,
    projects: spec.projects,
    awards: spec.awards,
    exhibitions: spec.exhibitions,
    sources: spec.sources,
  },
])) as Record<string, ArtistArchive>;
