import type { Artist } from './data';
import type { ArtistArchive } from './archiveData';

const image = (url: string, title: string, credit: string, sourceUrl: string, sourceLabel: string): Artist['images'][number] => ({ url, title, credit, sourceUrl, sourceLabel });
const project = (year: string, title: string, type: string, facts: string[], reading: string): Artist['projects'][number] => ({ year, title, type, facts, reading });

export const artistBatch21: Artist[] = [
  {
    id: 'roman-opalka',
    name: 'Roman Opałka',
    chineseName: '罗曼·奥帕尔卡',
    born: '1931–2011',
    base: 'France / Poland',
    intro: '把从 1 开始、永远只向前推进的数字书写变成终身规则，并用声音与每日正面肖像把同一段生命时间继续记录下来。',
    methods: ['长期项目', '规则系统', '计数', '绘画', '声音记录', '自画像'],
    subjects: ['时间', '寿命', '重复', '不可逆性', '身体老化'],
    outputs: ['绘画', '声音', '摄影', '出版'],
    institutions: ['MoMA', 'Centre Pompidou', 'Pinault Collection'],
    achievements: ['MoMA 馆藏', 'Centre Pompidou 馆藏', 'Pinault Collection 馆藏'],
    whyImportant: '他把“重复”推到一生的尺度：每张画不是独立构图，而是前一张的继续。和河原温、谢德庆并置时，可以非常清楚地区分日期记录、按时打卡与连续计数三种完全不同的时间规则。',
    projects: [
      project('1965–2011', 'OPALKA 1965 / 1–∞', '终身计数 / 绘画 / 声音 / 自画像', ['1965 年从数字 1 开始在画布上连续书写，后续画布接续前一幅的最后数字。', '1970 年代起逐步让背景变亮，使白色数字最终趋向白底。', '工作过程中以波兰语朗读数字，并持续拍摄条件相近的正面肖像。'], '不要把数字画当作极简构图；真正的作品是“规则不中断”以及画布、声音、面孔共同积累的时间。')
    ],
    images: [image('https://levygorvy.com/wp-content/uploads/2020/06/Opalka_OPALKA-1965-1-0-D%C3%A9tail-2806353-2828874_1965-scale-scaled.jpg', 'OPALKA 1965 / 1–∞ — Détail', '© Roman Opałka', 'https://lesoeuvres.pinaultcollection.com/en/artwork/opalka-19651', 'Pinault Collection')],
    sourceLabel: 'Pinault Collection / Centre Pompidou',
    sourceUrl: 'https://lesoeuvres.pinaultcollection.com/en/artwork/opalka-19651'
  },
  {
    id: 'yasumasa-morimura',
    name: 'Yasumasa Morimura',
    chineseName: '森村泰昌',
    born: '1951',
    base: 'Osaka',
    intro: '把自己的脸和身体嵌入艺术史、电影史与名人图像，重做既有经典，而不是只创造一个新的虚构角色。',
    methods: ['自我表演', '艺术史挪用', '角色扮演', '编排式摄影', '化妆 / 服装', '再摄影'],
    subjects: ['身份', '性别', '艺术史', '名人形象', '观看权力'],
    outputs: ['摄影', '影像', '装置', '表演'],
    institutions: ['MoMA', 'SFMOMA'],
    achievements: ['MoMA 馆藏', 'SFMOMA 馆藏', '2026 Anamneses — Luhring Augustine'],
    whyImportant: '和 Cindy Sherman 放在一起尤其有用：Sherman 常制造“像电影剧照但并不存在的类型角色”，Morimura 则更直接进入已有名作和具体艺术家图像。1998 年的 For Cindy Sherman 使这种对话成为可核查的作品关系。',
    projects: [
      project('1988', 'Portrait (Futago)', '艺术史挪用 / 自我扮演', ['以马奈《奥林匹亚》的构图为明确参照。', '通过布景、服装、身体与后期处理把自己置入经典图像的位置。'], '这里的关键不是“模仿名画”，而是由谁占据被艺术史固定下来的身体位置。'),
      project('1998', 'To My Little Sister / For Cindy Sherman', '艺术家回应 / 摄影自画像', ['作品标题直接点名 Cindy Sherman。', '把自我扮演变成艺术家之间的公开对话，而不是泛泛的风格相似。'], '这条关系可以在“自拍 / 角色扮演”的脉络里标记为明确回应，而不是推测影响。'),
      project('2007–2010', 'A Requiem: Art on Top of the Battlefield', '历史人物重演 / 影像', ['持续扮演二十世纪政治与文化人物。', '把摄影、录像与表演放入战争和历史记忆的框架。'], '当具体名人图像进入作品，自画像也同时成为历史图像的再编辑。')
    ],
    images: [image('https://d1hhug17qm51in.cloudfront.net/www-media/2022/05/02110502/97.563.A-C_01_H02-Large-TIFF_4000-pixels-long.jpg', 'Portrait (Shonen 1, 2, 3), 1988', '© Yasumasa Morimura', 'https://www.sfmoma.org/artist/Yasumasa_Morimura/', 'SFMOMA')],
    sourceLabel: 'MoMA / Luhring Augustine',
    sourceUrl: 'https://www.moma.org/artists/7631-yasumasa-morimura'
  },
  {
    id: 'richard-prince',
    name: 'Richard Prince',
    born: '1949',
    base: 'New York',
    intro: '从杂志广告和大众文化中抽取已有图像，再摄影、裁切和重新展示，把“作者是谁”变成作品本身的问题。',
    methods: ['再摄影', '挪用', '广告图像', '编辑', '文本', '绘画'],
    subjects: ['原创性', '大众媒体', '男性气质', '欲望', '作者身份'],
    outputs: ['摄影', '绘画', '装置', '艺术家书'],
    institutions: ['Guggenheim', 'MoMA', 'SFMOMA'],
    achievements: ['Richard Prince: Spiritual America — Guggenheim 2007–2008', 'MoMA 馆藏', 'SFMOMA 馆藏'],
    whyImportant: '他让摄影中的“拍摄对象”退到第二层：真正的动作发生在选择广告、重新取景、再摄影和移除原有商业语境。和 Sherrie Levine、Joachim Schmid、Penelope Umbrico 连起来，可以看到挪用从图录复制走到平台检索。',
    projects: [
      project('1977–', 'Rephotography', '广告挪用 / 再摄影', ['在杂志出版环境中接触大量广告图像。', '将选中的商业图像重新拍摄，使原来的文字、版面和商品语境被削弱或移除。'], '“按快门”并没有消失，但相机转向了一张已经存在的图像。'),
      project('1980s–1990s', 'Cowboys', 'Marlboro 广告挪用 / 再摄影', ['从香烟广告中提取牛仔形象。', '通过裁切、放大和重新输出，让商业男性神话脱离原广告版面。'], '可以追踪同一图像在广告与美术馆之间移动后，作者性和欲望结构如何改变。')
    ],
    images: [image('https://d1hhug17qm51in.cloudfront.net/www-media/2022/05/17232007/92.45_01_FTD02-Large-TIFF_4000-pixels-long.jpg', 'Untitled (Cowboy), 1991–1992', '© Richard Prince', 'https://www.sfmoma.org/artwork/92.45/', 'SFMOMA')],
    sourceLabel: 'Guggenheim / MoMA',
    sourceUrl: 'https://www.guggenheim.org/exhibition/richard-prince-spiritual-america'
  },
  {
    id: 'martha-wilson',
    name: 'Martha Wilson',
    born: '1947',
    base: 'New York',
    intro: '在 1970 年代初就把自己的身体、化妆、服装、姿势与文字说明组合起来，测试社会如何把女性身份压成一组可扮演的模型。',
    methods: ['自我表演', '摄影 + 文本', '角色扮演', '化妆', '行为'],
    subjects: ['性别', '身份', '女性主义', '社会角色', '观看'],
    outputs: ['摄影', '文本', '录像', '行为'],
    institutions: ['MoMA', 'Franklin Furnace'],
    achievements: ['Franklin Furnace 创办人 · 1976', 'WACK! Art and the Feminist Revolution · MoMA PS1 2008', 'MoMA 馆藏'],
    whyImportant: '她能把“Cahun—Sherman”之间常被讲得过于简化的自拍史补得更细：身份表演并不是只靠服装和脸，文字、社会角色名称和行为说明也可以成为自画像的一部分。',
    projects: [
      project('1972–1973', 'Posturing / Transformations', '身体表演 / 摄影 + 文本', ['使用妆容、姿势和身体呈现改变年龄、性别或社会身份。', '照片与文字共同说明角色转换，而不是让单张肖像承担全部含义。'], '可以把“变成另一个人”拆成脸、姿势、服装和文字四种操作。'),
      project('1974', 'A Portfolio of Models', '六种女性角色 / 摄影 + 文本', ['由艺术家本人扮演 Goddess、Housewife、Working Girl、Professional、Earth Mother、Lesbian 六种社会角色。', '每张黑白肖像配合文字面板，使“身份模型”被明确命名。'], '不是寻找真实自我，而是逐个试穿社会已经提供的身份模板。')
    ],
    images: [image('https://scma.smith.edu/sites/default/files/wilson%20in%20text%203.jpg', 'A Portfolio of Models — The Housewife, 1974', '© Martha Wilson', 'https://scma.smith.edu/blog/martha-wilson-portfolio-models', 'Smith College Museum of Art')],
    sourceLabel: 'MoMA',
    sourceUrl: 'https://www.moma.org/collection/works/165440'
  },
  {
    id: 'heather-dewey-hagborg',
    name: 'Heather Dewey-Hagborg',
    born: '—',
    base: 'New York',
    intro: '把街头遗留的头发、口香糖和烟头中的 DNA 转成算法推测的人脸，再以 3D 打印暴露生物识别和遗传决定论中的偏差。',
    methods: ['DNA 分析', '算法生成', '3D 打印', '生物艺术', '研究型艺术', '数据批判'],
    subjects: ['生物监控', '身份', '数据偏差', '隐私', '遗传决定论'],
    outputs: ['3D 打印肖像', '装置', '研究项目', '影像'],
    institutions: ['Centre Pompidou', 'V&A', 'SFMOMA'],
    achievements: ['Ars Electronica Honorary Mention · 2015', 'Centre Pompidou / V&A / SFMOMA 馆藏'],
    whyImportant: '她把“肖像像不像一个人”变成技术政治问题：一张脸不再先由镜头得到，而是从生物样本、概率模型、建模和打印中被制造出来。非常适合连接 Trevor Paglen 的训练数据和 Jes Fan 的身体扫描。',
    projects: [
      project('2012–2013', 'Stranger Visions', 'DNA / 算法肖像 / 3D 打印', ['从纽约公共空间收集头发、口香糖、烟头等遗留物。', '提取 DNA 并用计算模型推测可见面部特征。', '把概率性结果建模并打印为真人尺度的彩色三维人头像。'], '关键不是证明 DNA 可以“还原真实脸”，而是展示技术如何把概率结果伪装成确定的肖像。'),
      project('2015–2017', 'Probably Chelsea', 'DNA / 多重算法肖像', ['根据 Chelsea Manning 的 DNA 生成一组不同但都可能成立的面孔。', '以多张可能肖像反驳“基因只能对应一张确定的脸”的想象。'], '同一份数据产生多个身体，是对算法肖像确定性的直接拆解。')
    ],
    images: [image('https://deweyhagborg.com/media/pages/projects/stranger-visions/c8b5331653-1643025606/unadjustednonraw_thumb_4db.jpg', 'Stranger Visions — installation', '© Heather Dewey-Hagborg', 'https://deweyhagborg.com/projects/stranger-visions', 'Artist website')],
    sourceLabel: 'Artist website',
    sourceUrl: 'https://deweyhagborg.com/projects/stranger-visions'
  },
  {
    id: 'eva-oleary',
    name: 'Eva O’Leary',
    born: '1989',
    base: 'United States',
    intro: '以大画幅肖像、双面镜和拍摄装置观察青春期女孩如何面对自己的镜像，以及社交媒体时代“理想自我”如何进入身体反应。',
    methods: ['肖像', '双面镜', '大画幅摄影', '参与式拍摄', '系列编排'],
    subjects: ['青春期', '自我凝视', '女性形象', '社交媒体', '完美主义', '身份'],
    outputs: ['摄影', '影像', '展览'],
    institutions: ['Foam', 'Hyères', 'Pier 24'],
    achievements: ['Foam Talent · 2014', 'Hyères Festival Photographie Grand Prix · 2018', 'Outset | Unseen Exhibition Fund · 2018', 'Happy Valley — Foam 2019'],
    whyImportant: '她不是让被摄者“摆一个关于青春期的姿势”，而是先制造一个观看自己镜像的条件，再记录反应。这个方法可以与自拍、化妆、算法人脸放在同一条“脸如何被反馈系统塑造”的脉络中。',
    projects: [
      project('2017', 'Spitting Image', '双面镜 / 青春期肖像', ['与约 120 名 11–14 岁女孩合作。', '让参与者面对镜面观看自己，摄影机从双面镜另一侧记录她们对自身反射的反应。', '统一的观看条件使细微的紧张、检查和姿势变化成为系列主体。'], '作品真正搭建的是一个反馈回路：被摄者先看自己，摄影再记录“正在看自己的身体”。'),
      project('2014–2019', 'Happy Valley', '家乡 / 青年 / 大画幅肖像', ['回到成长环境持续拍摄年轻人、家庭空间与地方视觉文化。', '使用大画幅摄影保留表面细节，并把“完美”外观与裂缝、焦虑并置。'], '可以和 Spitting Image 对照：一个从地方社会环境进入，一个把观看机制压缩到镜子前。')
    ],
    images: [image('https://cdn.prod.website-files.com/66a8941beee6e2bb59ba04ca/670d1f5237b5e60dcc608873_5eb2ac83352c8e7b51c4fbe0_evaoleary_014.jpeg', 'Spitting Image', '© Eva O’Leary', 'https://www.futures-photography.com/artist-projects/spitting-image', 'FUTURES Photography')],
    sourceLabel: 'Artist website / Foam',
    sourceUrl: 'https://www.evaoleary.com/'
  }
];

export const archiveBatch21: Record<string, ArtistArchive> = {
  'roman-opalka': {
    artistId: 'roman-opalka',
    projectCoverage: '1 个终身核心项目已建立完整方法索引',
    imageCoverage: '1 / 1 项目配图',
    note: '将绘画、计数声音与每日肖像作为同一终身规则读取；不同机构对系列命名和阶段划分略有差异。',
    projects: [{
      title: 'OPALKA 1965 / 1–∞', cluster: 'lifetime rule / counting / painting', period: '1965–2011',
      summary: '从 1 开始连续书写数字，之后的每张画布都承接上一张；声音和固定条件下的自画像把同一时间规则延伸到身体。',
      actions: ['连续书写数字且不重新开始', '逐步提高背景亮度', '朗读并录下数字', '持续拍摄正面自画像'],
      sourceUrl: 'https://lesoeuvres.pinaultcollection.com/en/artwork/opalka-19651',
      images: [{ url: 'https://levygorvy.com/wp-content/uploads/2020/06/Opalka_OPALKA-1965-1-0-D%C3%A9tail-2806353-2828874_1965-scale-scaled.jpg', title: 'OPALKA 1965 / 1–∞ — Détail', credit: '© Roman Opałka', sourceUrl: 'https://lesoeuvres.pinaultcollection.com/en/artwork/opalka-19651', sourceLabel: 'Pinault Collection' }],
      relations: [{ kind: '收藏', label: 'Centre Pompidou / MoMA / Pinault Collection', detail: '系列相关作品进入重要机构收藏' }]
    }],
    awards: [], exhibitions: [],
    sources: [{ label: 'Pinault Collection — OPALKA 1965 / 1–∞', url: 'https://lesoeuvres.pinaultcollection.com/en/artwork/opalka-19651' }, { label: 'Centre Pompidou — Roman Opalka', url: 'https://www.centrepompidou.fr/en/ressources/oeuvre/c6bX9kr' }, { label: 'MoMA — Roman Opalka', url: 'https://www.moma.org/artists/4413-roman-opalka' }]
  },
  'yasumasa-morimura': {
    artistId: 'yasumasa-morimura',
    projectCoverage: '3 个关键转折已索引 · 1988–2010',
    imageCoverage: '1 / 3 项目配图',
    note: '重点区分“进入艺术史原作”“回应具体当代艺术家”“进入政治历史人物”三类自我扮演。',
    projects: [
      { title: 'Portrait (Futago)', cluster: 'art-history reenactment', period: '1988', summary: '把自身身体放进马奈《奥林匹亚》的既有构图，使艺术史图像成为可被重新占据的舞台。', actions: ['经典图像研究', '服装 / 布景重构', '自我表演', '摄影与后期合成'], sourceUrl: 'https://www.moma.org/artists/7631-yasumasa-morimura', images: [{ url: 'https://d1hhug17qm51in.cloudfront.net/www-media/2022/05/02110502/97.563.A-C_01_H02-Large-TIFF_4000-pixels-long.jpg', title: 'Portrait (Shonen 1, 2, 3), 1988', credit: '© Yasumasa Morimura', sourceUrl: 'https://www.sfmoma.org/artist/Yasumasa_Morimura/', sourceLabel: 'SFMOMA' }], relations: [{ kind: '收藏', label: 'MoMA / SFMOMA', detail: '作品进入机构收藏' }] },
      { title: 'To My Little Sister / For Cindy Sherman', cluster: 'artist-to-artist response', period: '1998', summary: '作品标题明确点名 Cindy Sherman，使角色扮演从并行方法变成可核查的艺术家回应。', actions: ['选择 Sherman 作为明确参照', '自我装扮', '重演与偏移既有图像'], sourceUrl: 'https://www.luhringaugustine.com/artists/yasumasa-morimura/artworks/actresses?view=slider', images: [], relations: [] },
      { title: 'A Requiem: Art on Top of the Battlefield', cluster: 'history / political reenactment', period: '2007–2010', summary: '通过扮演二十世纪历史、政治与文化人物，把自画像扩展为历史图像的再表演。', actions: ['历史影像研究', '角色造型', '摄影 / 录像', '系列化编排'], sourceUrl: 'https://www.luhringaugustine.com/artists/yasumasa-morimura', images: [], relations: [] }
    ],
    awards: [], exhibitions: ['Anamneses — Luhring Augustine · 2026'],
    sources: [{ label: 'MoMA — Yasumasa Morimura', url: 'https://www.moma.org/artists/7631-yasumasa-morimura' }, { label: 'Luhring Augustine — artworks', url: 'https://www.luhringaugustine.com/artists/yasumasa-morimura/artworks/actresses?view=slider' }]
  },
  'richard-prince': {
    artistId: 'richard-prince',
    projectCoverage: '2 个核心方法群已索引 · 1977–1990s',
    imageCoverage: '1 / 2 项目配图',
    note: '重点记录“从哪里拿图—怎样裁切 / 再摄影—如何重新输出”，而不是把挪用只当概念标签。',
    projects: [
      { title: 'Rephotography', cluster: 'magazine advertising / appropriation', period: '1977–', summary: '将杂志中的商业图像重新拍摄并从版面语境中抽离，作者性转移到选择、裁切和再呈现。', actions: ['筛选杂志广告', '再摄影', '移除原版面文本', '重新打印与展示'], sourceUrl: 'https://www.guggenheim.org/exhibition/richard-prince-spiritual-america', images: [], relations: [{ kind: '展览', label: 'Richard Prince: Spiritual America — Guggenheim', detail: '2007–2008' }] },
      { title: 'Cowboys', cluster: 'advertising / masculinity / rephotography', period: '1980s–1990s', summary: '从 Marlboro 广告中抽取牛仔形象，经裁切、放大和再摄影重新进入艺术语境。', actions: ['广告图像选择', '裁切', '再摄影', '放大输出'], sourceUrl: 'https://www.moma.org/collection/works/107923', images: [{ url: 'https://d1hhug17qm51in.cloudfront.net/www-media/2022/05/17232007/92.45_01_FTD02-Large-TIFF_4000-pixels-long.jpg', title: 'Untitled (Cowboy), 1991–1992', credit: '© Richard Prince', sourceUrl: 'https://www.sfmoma.org/artwork/92.45/', sourceLabel: 'SFMOMA' }], relations: [{ kind: '收藏', label: 'MoMA / SFMOMA', detail: 'Cowboy works in museum collections' }] }
    ],
    awards: [], exhibitions: ['Richard Prince: Spiritual America — Guggenheim · 2007–2008'],
    sources: [{ label: 'Guggenheim — Spiritual America', url: 'https://www.guggenheim.org/exhibition/richard-prince-spiritual-america' }, { label: 'MoMA — Richard Prince', url: 'https://www.moma.org/artists/4741-richard-prince' }, { label: 'SFMOMA — Untitled (Cowboy)', url: 'https://www.sfmoma.org/artwork/92.45/' }]
  },
  'martha-wilson': {
    artistId: 'martha-wilson',
    projectCoverage: '2 个 1970s 身份表演项目群已索引',
    imageCoverage: '1 / 2 项目配图',
    note: '把照片与文字视为同一作品结构，并把社会角色名称视为艺术家主动使用的材料。',
    projects: [
      { title: 'Posturing / Transformations', cluster: 'performance for camera / text', period: '1972–1973', summary: '通过妆容、姿势与文字改变自身年龄、性别和社会身份的呈现。', actions: ['化妆', '改变姿势与服装', '摄影记录', '加入文字说明'], sourceUrl: 'https://www.artbasel.com/catalog/artwork/85825/Martha-Wilson-Halifax-Collection', images: [], relations: [] },
      { title: 'A Portfolio of Models', cluster: 'six social roles / photo + text', period: '1974', summary: '艺术家本人扮演六种被社会提供给女性的身份模型，并用文字面板逐一命名和分析。', actions: ['设定六种角色', '服装 / 发型 / 化妆', '统一工作室肖像', '为每个角色配写文字'], sourceUrl: 'https://www.moma.org/collection/works/165440', images: [{ url: 'https://scma.smith.edu/sites/default/files/wilson%20in%20text%203.jpg', title: 'A Portfolio of Models — The Housewife', credit: '© Martha Wilson', sourceUrl: 'https://scma.smith.edu/blog/martha-wilson-portfolio-models', sourceLabel: 'Smith College Museum of Art' }], relations: [{ kind: '收藏', label: 'MoMA', detail: 'A Portfolio of Models' }] }
    ],
    awards: [], exhibitions: ['WACK! Art and the Feminist Revolution — MoMA PS1 · 2008'],
    sources: [{ label: 'MoMA — A Portfolio of Models', url: 'https://www.moma.org/collection/works/165440' }, { label: 'Smith College Museum of Art — A Portfolio of Models', url: 'https://scma.smith.edu/blog/martha-wilson-portfolio-models' }]
  },
  'heather-dewey-hagborg': {
    artistId: 'heather-dewey-hagborg',
    projectCoverage: '2 个生物识别核心项目已索引 · 2012–2017',
    imageCoverage: '1 / 2 项目配图',
    note: '项目中的人脸是算法概率推测，不应写成由 DNA 精确还原出的真实肖像。',
    projects: [
      { title: 'Stranger Visions', cluster: 'forensic DNA phenotyping / 3D portrait', period: '2012–2013', summary: '从公共空间遗留物中提取 DNA，经计算模型推测面部特征，再制造真人尺度三维肖像。', actions: ['收集头发 / 口香糖 / 烟头', 'DNA 提取与分析', '计算面部特征概率', '3D 建模与全彩打印'], sourceUrl: 'https://deweyhagborg.com/projects/stranger-visions', images: [{ url: 'https://deweyhagborg.com/media/pages/projects/stranger-visions/c8b5331653-1643025606/unadjustednonraw_thumb_4db.jpg', title: 'Stranger Visions — installation', credit: '© Heather Dewey-Hagborg', sourceUrl: 'https://deweyhagborg.com/projects/stranger-visions', sourceLabel: 'Artist website' }], relations: [{ kind: '奖项', label: 'Ars Electronica Honorary Mention', detail: '2015' }] },
      { title: 'Probably Chelsea', cluster: 'multiple possible faces / DNA', period: '2015–2017', summary: '以 Chelsea Manning 的 DNA 数据生成三十个可能面孔，用复数结果反驳算法肖像的确定性。', actions: ['DNA 数据分析', '改变算法参数', '生成多种可能面孔', '三维输出与群组展示'], sourceUrl: 'https://deweyhagborg.com/projects/probably-chelsea', images: [], relations: [] }
    ],
    awards: ['Ars Electronica Honorary Mention · 2015'], exhibitions: [],
    sources: [{ label: 'Artist — Stranger Visions', url: 'https://deweyhagborg.com/projects/stranger-visions' }, { label: 'Artist — Probably Chelsea', url: 'https://deweyhagborg.com/projects/probably-chelsea' }, { label: 'Artist bio', url: 'https://deweyhagborg.com/bio' }]
  },
  'eva-oleary': {
    artistId: 'eva-oleary',
    projectCoverage: '2 个关键项目已索引 · 2014–2019',
    imageCoverage: '1 / 2 项目配图',
    note: 'Spitting Image 的关键不是普通镜面自拍，而是艺术家预先搭建双面镜观看条件，再从另一侧记录参与者。',
    projects: [
      { title: 'Spitting Image', cluster: 'two-way mirror / adolescent self-image', period: '2017', summary: '让 11–14 岁女孩面对镜中自己，再从双面镜另一侧拍摄她们观察自身的反应。', actions: ['搭建双面镜装置', '邀请约 120 名女孩参与', '让参与者先观看自己的反射', '从镜后以统一条件拍摄'], sourceUrl: 'https://www.evaoleary.com/interviews/being-truthful-with-yourself', images: [{ url: 'https://cdn.prod.website-files.com/66a8941beee6e2bb59ba04ca/670d1f5237b5e60dcc608873_5eb2ac83352c8e7b51c4fbe0_evaoleary_014.jpeg', title: 'Spitting Image', credit: '© Eva O’Leary', sourceUrl: 'https://www.futures-photography.com/artist-projects/spitting-image', sourceLabel: 'FUTURES Photography' }], relations: [] },
      { title: 'Happy Valley', cluster: 'hometown / large-format portrait', period: '2014–2019', summary: '回到成长环境拍摄青年、家庭空间和地方表面，把完美主义与日常裂缝放进同一套大画幅图像。', actions: ['长期返回家乡', '大画幅肖像', '人物与环境交替编排', '展览输出'], sourceUrl: 'https://www.foam.org/events/public-opening-and-artist-talk-eva-o-leary', images: [], relations: [{ kind: '展览', label: 'Happy Valley — Foam', detail: '2019' }, { kind: '奖项', label: 'Hyères Festival Photographie Grand Prix', detail: '2018' }] }
    ],
    awards: ['Foam Talent · 2014', 'Hyères Festival Photographie Grand Prix · 2018', 'Outset | Unseen Exhibition Fund · 2018'], exhibitions: ['Happy Valley — Foam · 2019'],
    sources: [{ label: 'Eva O’Leary — official website', url: 'https://www.evaoleary.com/' }, { label: 'Artist interview — Spitting Image', url: 'https://www.evaoleary.com/interviews/being-truthful-with-yourself' }, { label: 'Foam — Happy Valley', url: 'https://www.foam.org/events/public-opening-and-artist-talk-eva-o-leary' }]
  }
};
