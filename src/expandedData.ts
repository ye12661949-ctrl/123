import type { Artist, ArtworkImage, Project } from './data';

const image = (url: string, title: string, credit: string, sourceUrl: string, sourceLabel: string): ArtworkImage => ({ url, title, credit, sourceUrl, sourceLabel });
const project = (year: string, title: string, type: string, facts: string[], reading: string): Project => ({ year, title, type, facts, reading });

export const expandedArtists: Artist[] = [
  {
    id: 'deana-lawson',
    name: 'Deana Lawson',
    born: '1979',
    base: 'New York / Los Angeles',
    intro: '通过高度控制的姿势、室内空间、身体和家庭式关系，制造介于陌生人与“家人”之间的黑人肖像。',
    methods: ['编排式摄影', '肖像', '场景建构', '大画幅摄影', '家庭影像语法'],
    subjects: ['家庭', '黑人生活', '亲密关系', '身体', '身份', '自我再现'],
    outputs: ['摄影', '大型展览', '影像装置'],
    institutions: ['MoMA PS1', 'ICA Boston', 'Studio Museum Harlem'],
    achievements: ['Hugo Boss Prize 2020', 'Guggenheim Fellowship 2013'],
    whyImportant: '她非常适合拿来区分“看起来像生活抓拍”和真正的编排式摄影：人物、房间、家具、光线甚至身体距离都被仔细组织，但画面又保留家庭照片的亲密感。',
    projects: [
      project('2009–', 'Staged portraits', '编排式黑人肖像', ['经常在真实住宅中与陌生人合作。', '拍摄前共同处理姿势、服装、房间与物件。', '使用大画幅相机让身体和室内细节同时保持高密度。'], '不要先问“人物是谁”，先拆人物与空间的关系：床、沙发、墙面装饰和身体姿势如何共同制造一个家庭神话。')
    ],
    images: [image('https://www.moma.org/media/W1siZiIsIjM4MjE3NSJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=f82146ceb1da01b4', 'Roxie and Raquel, New Orleans, Louisiana', '© Deana Lawson', 'https://www.moma.org/collection/works/143022', 'MoMA')],
    sourceLabel: 'MoMA',
    sourceUrl: 'https://www.moma.org/artists/38858-deana-lawson'
  },
  {
    id: 'zanele-muholi',
    name: 'Zanele Muholi',
    born: '1972',
    base: 'South Africa',
    intro: '以“视觉活动家”的方式长期建立南非黑人 LGBTQIA+ 社群肖像档案，同时通过自画像重新控制黑人身体的可见方式。',
    methods: ['长期肖像', '自画像', '类型化编排', '社区档案', '黑白摄影'],
    subjects: ['酷儿身份', '黑人身体', '社群', '性别', '可见性', '南非'],
    outputs: ['摄影', '档案式展览', '出版'],
    institutions: ['Tate Modern', 'Stedelijk Museum', 'Autograph'],
    achievements: ['Tate Modern 大型回顾展 2020 / 2024'],
    whyImportant: 'Muholi 的核心不是“拍少数群体”，而是建立一个持续多年、由被摄者主动参与的视觉档案。Faces and Phases 的重复格式让个体差异与集体身份同时出现。',
    projects: [
      project('2006–', 'Faces and Phases', '社区肖像档案', ['持续拍摄黑人女同性恋、跨性别者与非二元社群成员。', '使用相对一致的黑白肖像形式形成长期档案。'], '形式的重复不是单调，而是一种政治策略：先给予所有人同等视觉位置，再让差异从表情、衣着和身体中出现。'),
      project('2012–', 'Somnyama Ngonyama', '自画像 / 自我表演', ['艺术家本人进入镜头。', '常用日常材料作为服饰与头饰，并强化肤色反差。'], '自画像在这里不是私人表达，而是把被凝视的黑人身体重新变成主动制造图像的人。')
    ],
    images: [image('https://fadmagazine.com/wp-content/uploads/Zanele-Muholi-at-Tate-Modern-Installation-view-Photo-Mark-Westall-2-800x600.jpg', 'Faces and Phases / Somnyama Ngonyama — installation', '© Zanele Muholi / installation view', 'https://fadmagazine.com/2024/06/05/zanele-muholi-opens-at-tate-modern-a-must-see-exhibition/', 'FAD Magazine')],
    sourceLabel: 'Tate',
    sourceUrl: 'https://www.tate.org.uk/whats-on/tate-modern/zanele-muholi'
  },
  {
    id: 'taryn-simon',
    name: 'Taryn Simon',
    born: '1975',
    base: 'New York',
    intro: '把摄影、调查、分类、文字和机构权限组合起来，专门进入通常不可见、不可进入或被行政系统遮蔽的空间。',
    methods: ['研究型摄影', '分类学', '文本 + 摄影', '制度调查', '档案'],
    subjects: ['制度', '权力', '不可见系统', '国家', '分类', '知识生产'],
    outputs: ['摄影', '大型系列', '出版', '装置'],
    institutions: ['Gagosian', 'Whitney Museum', 'Louisiana Museum'],
    achievements: ['An American Index of the Hidden and Unfamiliar 成为研究型摄影代表项目'],
    whyImportant: '她的项目非常适合学习“研究成果如何变成视觉结构”。图片本身往往克制，真正的力量来自图片、标题、说明、进入许可和分类逻辑之间的组合。',
    projects: [
      project('2007', 'An American Index of the Hidden and Unfamiliar', '制度空间 / 分类研究', ['进入核废料、隔离设施、政府空间等通常无法公开观看的场所。', '每张照片配以精确文字说明。'], '研究时要把“获得进入权限”也算作创作动作；摄影只是这条行政与调查链条的最后一步。')
    ],
    images: [image('https://tarynsimon.com/installviews/2021_louisiana/images/2021_louisiana_1.jpg', 'An American Index of the Hidden and Unfamiliar — installation', '© Taryn Simon', 'https://tarynsimon.com/installviews/2021_louisiana/', 'Artist website')],
    sourceLabel: '艺术家官网',
    sourceUrl: 'https://tarynsimon.com/'
  },
  {
    id: 'jeff-wall',
    name: 'Jeff Wall',
    born: '1946',
    base: 'Vancouver',
    intro: '把街头观察、文学、绘画构图和电影制作方法转化为大型、精密搭建的摄影场景。',
    methods: ['编排式摄影', '场景建构', '电影式制作', '大画幅摄影', '灯箱'],
    subjects: ['日常生活', '文学', '社会关系', '城市', '观看机制'],
    outputs: ['大型灯箱摄影', '大尺幅照片'],
    institutions: ['MoMA', 'Tate', 'SFMOMA'],
    achievements: ['Hasselblad Award 2002'],
    whyImportant: '如果要追编排式摄影的谱系，Wall 几乎无法绕开。他把“拍一张照片”变成类似电影制作：搭景、选角、排练、灯光、摄影、后期共同完成一个看似瞬间的画面。',
    projects: [
      project('1999–2000', 'After “Invisible Man” by Ralph Ellison, the Prologue', '文学转译 / 大型灯箱', ['依据 Ralph Ellison 小说中的文字搭建完整地下室场景。', '由演员、助手和大型摄影系统协作完成。', '最终以背光透明片灯箱展示。'], '这不是给小说“配图”，而是把阅读产生的心理空间重新实体搭建，再转换成摄影。')
    ],
    images: [image('https://www.moma.org/media/W1siZiIsIjM4ODkwNiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=9f9e6bddd7ff4639', 'After “Invisible Man” by Ralph Ellison, the Prologue', '© Jeff Wall', 'https://www.moma.org/collection/works/88085', 'MoMA')],
    sourceLabel: 'MoMA',
    sourceUrl: 'https://www.moma.org/artists/7826-jeff-wall'
  },
  {
    id: 'rineke-dijkstra',
    name: 'Rineke Dijkstra',
    born: '1959',
    base: 'Amsterdam',
    intro: '以极简背景、正面姿势和缓慢拍摄，把青少年、士兵、产后女性等处于身份转换期的人放到镜头前。',
    methods: ['肖像', '长期项目', '大画幅摄影', '正面摄影', '视频肖像'],
    subjects: ['青春期', '身份转变', '身体', '脆弱性', '成长'],
    outputs: ['摄影', '视频', '系列展览'],
    institutions: ['Guggenheim', 'SFMOMA', 'Stedelijk Museum'],
    achievements: ['Hasselblad Award 2017', 'Guggenheim retrospective 2012'],
    whyImportant: '她证明了“几乎不做什么”的肖像也可以高度编排。海滩、相机高度、身体正面性和等待时间共同制造一种介于证件照与心理肖像之间的状态。',
    projects: [
      project('1992–96', 'Beach Portraits', '大画幅肖像 / 青少年', ['在不同国家海滩拍摄青少年与年轻人。', '人物通常正面站立，背景保持极简。'], '最值得看的是姿势里的不确定：人物不是被抓拍，而是在被看见的几分钟里努力决定“怎么站”。')
    ],
    images: [image('https://www.guggenheim.org/wp-content/uploads/2016/03/installation-rineke-dijkstra-retrospective-srgm-2012-2.jpg', 'Beach Portraits — retrospective installation', '© Rineke Dijkstra / installation view', 'https://www.guggenheim.org/exhibition/rineke-dijkstra-a-retrospective', 'Guggenheim')],
    sourceLabel: 'SFMOMA',
    sourceUrl: 'https://www.sfmoma.org/artist/Rineke_Dijkstra/'
  },
  {
    id: 'carrie-mae-weems',
    name: 'Carrie Mae Weems',
    born: '1953',
    base: 'Syracuse / New York',
    intro: '把自我表演、家庭空间、档案图像与文字组合起来，长期处理种族、性别、权力和谁有资格被观看。',
    methods: ['自我表演', '文本 + 摄影', '编排式摄影', '档案挪用', '影像'],
    subjects: ['家庭', '黑人身份', '女性主义', '权力', '历史', '亲密关系'],
    outputs: ['摄影系列', '装置', '影像', '文本'],
    institutions: ['Guggenheim', 'MoMA', 'The Kitchen'],
    achievements: ['MacArthur Fellow 2013', 'Guggenheim retrospective 2014'],
    whyImportant: 'Kitchen Table Series 是理解“一个固定空间如何产生完整叙事”的关键案例：桌子、吊灯、人物进出和文本就像舞台规则，有限元素可以生产复杂社会关系。',
    projects: [
      project('1990', 'Kitchen Table Series', '固定场景 / 自我表演 / 文本', ['所有照片围绕同一张厨房桌与同一盏吊灯。', '艺术家本人出演，不同人物按场景进入。', '照片与文字共同构成关系叙事。'], '可以把它当成一部只用一个机位和一个场景拍完的电影，研究每次人物、手势和物件变化如何改变权力关系。')
    ],
    images: [image('https://images.squarespace-cdn.com/content/v1/5a9044e5af209610a9b46705/2acd2fcd-93aa-45aa-94bc-dc52109d8ad5/1000-750-agamymevesa6y9ybagy3abu8azeja6apa8uhyhy3ehutysunu4upavuzymasypy5aqutuduru9y3e6a7a2u9ujyvu2y3aru6y5u31663587726.jpg', 'Kitchen Table Series', '© Carrie Mae Weems', 'https://sichtbar.art/events/a-great-turn-in-the-possible-carrie-mae-weems-fundacin-foto-colectania-barcelona', 'sichtbar.art')],
    sourceLabel: 'Carrie Mae Weems Studio',
    sourceUrl: 'https://carriemaeweems.net/'
  },
  {
    id: 'cindy-sherman',
    name: 'Cindy Sherman',
    born: '1954',
    base: 'New York',
    intro: '通过服装、化妆、假发、姿势和摄影语言把自己不断变成“媒体里已经存在过”的女性角色。',
    methods: ['自我表演', '编排式摄影', '化妆造型', '角色扮演', '自拍'],
    subjects: ['女性形象', '身份', '媒体', '性别', '刻板印象', '表演'],
    outputs: ['摄影', '大型彩色肖像', '系列'],
    institutions: ['MoMA', 'MOCA Los Angeles', 'SFMOMA'],
    achievements: ['MacArthur Fellowship 1995', 'Hasselblad Award 1999'],
    whyImportant: '她的作品不是传统意义上的“自拍”。真正的创作对象是图像类型：职业女性、电影女主角、时尚人物、历史肖像。她用自己的身体去测试这些模板。',
    projects: [
      project('1977–80', 'Untitled Film Stills', '角色扮演 / 虚构电影剧照', ['艺术家扮演大量不同女性角色。', '场景模仿 1950–60 年代电影、黑色电影和宣传剧照的视觉语法。', '没有对应的真实电影。'], '最有意思的是“熟悉却说不出出处”：她制造的不是角色，而是我们已经内化的角色模板。')
    ],
    images: [image('https://www.christies.com/img/LotImages/2024/NYR/2024_NYR_23118_0097_002%28cindy_sherman_untitled_film_still_81_1980125239%29.jpg?mode=max', 'Untitled Film Still #81', '© Cindy Sherman', 'https://www.christies.com/en/lot/lot-6498015', 'Christie’s')],
    sourceLabel: 'MoMA',
    sourceUrl: 'https://www.moma.org/artists/5392-cindy-sherman'
  },
  {
    id: 'gillian-wearing',
    name: 'Gillian Wearing',
    born: '1963',
    base: 'London',
    intro: '通过街头委托、文字牌、面具、家庭照片和角色扮演，让“一个人怎么看起来”和“他怎么描述自己”发生冲突。',
    methods: ['参与式摄影', '文本 + 摄影', '街头委托', '面具', '自我表演'],
    subjects: ['身份', '匿名性', '自我陈述', '家庭', '社会角色'],
    outputs: ['摄影', '视频', '装置'],
    institutions: ['Tate', 'National Portrait Gallery'],
    achievements: ['Turner Prize 1997'],
    whyImportant: '她的创作常从一个非常简单的规则开始，例如让陌生人写下他们真正想说的话。规则一旦设定，摄影师对内容的控制反而降低，作品由参与者和规则共同生成。',
    projects: [
      project('1992–93', 'Signs that say what you want them to say…', '街头参与 / 文字牌肖像', ['邀请街头陌生人在纸上写下他们想说的话。', '再让他们拿着手写文字面对镜头。'], '关键不是“牌子内容很有趣”，而是外表、社会身份和私人语言之间突然出现的裂缝。')
    ],
    images: [image('https://d7hftxdivxxvm.cloudfront.net/?height=1920&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FTpqfe911HgOYoOoR3VZg2Q%2Flarge.jpg&width=1240', 'I’M DESPERATE — Signs series', '© Gillian Wearing', 'https://www.artsy.net/artwork/gillian-wearing-signs-that-say-what-you-want-them-to-say-and-not-signs-that-say-what-someone-else-wants-you-to-say-im-desperate', 'Artsy')],
    sourceLabel: 'Tate',
    sourceUrl: 'https://www.tate.org.uk/art/artists/gillian-wearing-2677'
  },
  {
    id: 'dayanita-singh',
    name: 'Dayanita Singh',
    born: '1961',
    base: 'New Delhi',
    intro: '把摄影书、木制结构、可移动屏风和不断重排的照片组合成“会改变形状的博物馆”。',
    methods: ['摄影书', '模块化展示', '档案', '编辑 / sequence', '摄影装置'],
    subjects: ['档案', '印度', '家庭', '空间', '记忆', '展示机制'],
    outputs: ['摄影书', '移动式摄影博物馆', '装置'],
    institutions: ['Hayward Gallery', 'Art Institute of Chicago', 'Kiran Nadar Museum'],
    achievements: ['Hasselblad Award 2022'],
    whyImportant: '她特别适合研究“摄影书和展览能不能是一件作品”。照片并没有一个最终顺序，而是在木制模块里不断被重新排列、打开、关闭和携带。',
    projects: [
      project('2013–', 'Museum Bhavan', '模块化摄影博物馆', ['把不同照片系列放进可折叠、可搬运的木制结构。', '每次展出都能改变照片数量和组合。'], '这里编排不再是出版前的一次决定，而是作品持续发生的机制。')
    ],
    images: [image('https://assets.gqindia.com/photos/5cdc2db7700a77e493aa17db/master/w_1024%2Cc_limit/GQ-India-musuem-bhavan-dayanti-singh.jpg', 'Museum Bhavan', '© Dayanita Singh', 'https://www.gqindia.com/galleries/the-landscape', 'GQ India')],
    sourceLabel: '艺术家官网',
    sourceUrl: 'https://dayanitasingh.net/'
  },
  {
    id: 'thomas-ruff',
    name: 'Thomas Ruff',
    born: '1958',
    base: 'Düsseldorf',
    intro: '从冷静正面肖像到低清网络 JPEG、新闻图和天文图像，不断测试摄影信息在放大、复制和再处理后如何变化。',
    methods: ['类型学', '肖像', '网络图像', '再摄影', '数字处理', '挪用'],
    subjects: ['图像生产', '身份', '分辨率', '网络', '摄影真实性'],
    outputs: ['大尺幅摄影', '系列', '数字图像'],
    institutions: ['Düsseldorf School', 'Haus der Kunst', 'Whitechapel Gallery'],
    achievements: ['杜塞尔多夫摄影学派核心人物之一'],
    whyImportant: 'Ruff 的关键不是固定风格，而是每个系列更换一种“图像机器”：证件式肖像、JPEG 压缩、夜视技术、色情网络图、天文底片。摄影媒介本身成为研究对象。',
    projects: [
      project('1980s', 'Porträts', '类型化大尺幅肖像', ['朋友和同代人以正面、无表情方式出现。', '使用统一背景和近似证件照的照明。', '最终放大到远超证件照的尺寸。'], '把“小型身份照片”的视觉制度放大以后，人物反而变得更难读。'),
      project('2000s', 'jpegs', '网络低清图像 / 巨幅放大', ['从互联网获取压缩严重的 JPEG 图像。', '把数字压缩块放大到巨幅打印。'], '不再修复低清，而是让压缩错误成为图像的物质表面。')
    ],
    images: [image('https://yeux-coccinelle.fr/blog/wp-content/uploads/2021/08/2017-10-02125271-1170x655-1.jpg', 'Porträts — installation view', '© Thomas Ruff', 'https://yeux-coccinelle.fr/blog/curation-thomas-ruff/', 'Yeux Coccinelle')],
    sourceLabel: '艺术家官网',
    sourceUrl: 'https://www.thomasruff.com/'
  },
  {
    id: 'thomas-struth',
    name: 'Thomas Struth',
    born: '1954',
    base: 'Berlin',
    intro: '从无人街道到家庭肖像、博物馆观看者和高科技设施，长期研究人如何在建筑与制度中被组织。',
    methods: ['大画幅摄影', '城市摄影', '类型学', '观察式摄影'],
    subjects: ['建筑', '博物馆', '家庭', '科技', '公共空间', '观看机制'],
    outputs: ['大尺幅摄影', '系列展览'],
    institutions: ['Düsseldorf School', 'Metropolitan Museum', 'Prado'],
    achievements: ['杜塞尔多夫摄影学派重要人物'],
    whyImportant: 'Museum Photographs 把两层观看叠在一起：观众看名画，我们又看观众。摄影不是记录展览，而是把观看行为本身变成对象。',
    projects: [
      project('1989–', 'Museum Photographs', '博物馆 / 观看机制', ['在著名美术馆中拍摄观众与经典绘画共处的场景。', '相机位置和画面构图让真实观众与画中人物发生关系。'], '重点不只是“人在看画”，而是艺术史、展览制度和现实身体如何落在同一个平面上。')
    ],
    images: [image('https://people.brandeis.edu/~teuber/struth_chicago.jpg', 'Museum Photograph — Art Institute of Chicago', '© Thomas Struth', 'https://people.brandeis.edu/~teuber/struthkk.html', 'Brandeis')],
    sourceLabel: '艺术家官网',
    sourceUrl: 'https://www.thomasstruth32.com/'
  },
  {
    id: 'andreas-gursky',
    name: 'Andreas Gursky',
    born: '1955',
    base: 'Düsseldorf',
    intro: '使用高视点、大尺幅和数字调整，把全球资本、消费空间、自然景观与人群压缩成高度结构化的表面。',
    methods: ['大尺幅摄影', '高视点', '数字合成', '景观摄影', '类型化观察'],
    subjects: ['资本主义', '消费', '人群', '建筑', '景观', '全球化'],
    outputs: ['巨幅摄影', '展览'],
    institutions: ['Düsseldorf School', 'Hayward Gallery', 'Louisiana Museum'],
    achievements: ['杜塞尔多夫摄影学派重要人物'],
    whyImportant: 'Gursky 的作品常常第一眼像“宏大场景”，但真正的方法是把现实整理成极强的二维结构。数字删除、拼接和高视点共同消除偶然性。',
    projects: [
      project('1999', 'Rhein II', '景观 / 数字清理', ['拍摄莱茵河岸。', '通过数字处理移除干扰元素，让画面变成几乎纯粹的水平带。'], '这是理解“数字修改不一定为了造假，也可能为了把现实变成结构”的好例子。')
    ],
    images: [image('https://img.zeit.de/kultur/kunst/2021-08/deutsches-fotoinstitut-fotografie-nrw-monika-gruetters-duesseldorf-teaserfoto/wide__1000x562', 'Rhein II — installation view', '© Andreas Gursky', 'https://www.zeit.de/kultur/kunst/2021-08/deutsches-fotoinstitut-fotografie-nrw-monika-gruetters-duesseldorf', 'DIE ZEIT')],
    sourceLabel: '艺术家官网',
    sourceUrl: 'https://www.andreasgursky.com/'
  },
  {
    id: 'bernd-hilla-becher',
    name: 'Bernd & Hilla Becher',
    born: '1931 / 1934',
    base: 'Düsseldorf',
    intro: '几十年以几乎完全一致的天气、角度、镜头和构图拍摄工业建筑，再按功能组成严格网格。',
    methods: ['类型学', '系列摄影', '正面摄影', '分类学', '工业考察'],
    subjects: ['工业建筑', '分类', '现代化', '消失的基础设施', '形式比较'],
    outputs: ['网格摄影组', '摄影书', '档案'],
    institutions: ['Düsseldorf School', 'MoMA', 'SFMOMA'],
    achievements: ['战后摄影类型学关键方法来源'],
    whyImportant: '他们真正发明的是“比较装置”：单张照片故意克制，只有当十几座水塔并排时，结构差异才突然变得可见。这条方法直接影响后来大量当代摄影。',
    projects: [
      project('1960s–', 'Industrial Typologies', '工业建筑类型学', ['使用大画幅黑白摄影。', '尽可能选择阴天、正面、无人和一致视点。', '按水塔、矿井、冷却塔等功能分组为网格。'], '拍摄条件被严格标准化，是为了把摄影师的“风格”压低，让比较本身成为观看机制。')
    ],
    images: [image('https://cdn.mos.cms.futurecdn.net/ezFniuKsnnb5TpuiqMGouV.jpg', 'Water Towers — typology', '© Estate Bernd & Hilla Becher', 'https://www.wallpaper.com/art/photographers-bernd-and-hilla-bechers-iconic-industrial-scenes-go-on-show-at-sprth-magers-london', 'Wallpaper*')],
    sourceLabel: 'MoMA',
    sourceUrl: 'https://www.moma.org/collection/works/49624'
  },
  {
    id: 'candida-hofer',
    name: 'Candida Höfer',
    born: '1944',
    base: 'Cologne',
    intro: '以极端清晰、几乎无人出现的方式拍摄图书馆、剧院、博物馆等公共文化空间。',
    methods: ['建筑摄影', '类型学', '大画幅摄影', '正面摄影'],
    subjects: ['公共空间', '建筑', '制度', '文化记忆', '空场'],
    outputs: ['大尺幅摄影', '系列'],
    institutions: ['Düsseldorf School', 'German Pavilion', 'Hermitage'],
    achievements: ['Venice Biennale 德国馆 2003'],
    whyImportant: '她拍的不是“漂亮建筑”。人物被拿掉以后，桌椅、书架、装饰和通道开始显出制度如何组织人的身体，即使人此刻并不在场。',
    projects: [
      project('1990s–', 'Libraries / Theatres / Museums', '公共室内空间类型学', ['常使用居中或高度秩序化的视点。', '画面中通常没有人物。', '高细节让空间结构和装饰同时被读取。'], '可以把空空间当成“人的行为说明书”：建筑已经预设了你站哪里、坐哪里、朝哪里看。')
    ],
    images: [image('https://assets.phillips.com/auctions/UK040118/37_001.jpg', 'Biblioteca de la Real Academia de la Lengua Madrid I', '© Candida Höfer', 'https://www.phillips.com/detail/candida-hofer/UK040118/37', 'Phillips')],
    sourceLabel: '艺术家官网',
    sourceUrl: 'https://www.candidahoefer.com/'
  },
  {
    id: 'hiroshi-sugimoto',
    name: 'Hiroshi Sugimoto',
    born: '1948',
    base: 'Tokyo / New York',
    intro: '用极端长曝光、严格重复的地平线与固定观看条件，把摄影变成关于时间、光和认知的实验。',
    methods: ['长曝光', '系列摄影', '黑白摄影', '观念摄影', '大画幅摄影'],
    subjects: ['时间', '海', '电影', '记忆', '观看机制'],
    outputs: ['银盐摄影', '建筑', '装置'],
    institutions: ['Hayward Gallery', 'Hirshhorn', 'Mori Art Museum'],
    achievements: ['Hasselblad Award 2001'],
    whyImportant: 'Sugimoto 的方法看似古典，但非常观念化。比如 Theaters 用整部电影的时间完成一张照片：银幕变成纯白，而电影时长被压进一次曝光。',
    projects: [
      project('1980–', 'Seascapes', '固定地平线 / 长期系列', ['在世界不同海域保持接近一致的海天比例。', '使用黑白大画幅摄影和长曝光。'], '地点差异被压低后，观看会转向极细微的光、雾、海面和时间差。')
    ],
    images: [image('https://artblart.com/wp-content/uploads/2023/11/installation-view-of-hiroshi-sugimoto-seascapes-series.-gelatin-silver-prints.-photo_-mark-blower.-courtesy-the-artist-and-the-hayward-gallery.jpg', 'Seascapes — installation view', '© Hiroshi Sugimoto / Photo Mark Blower', 'https://artblart.com/tag/hiroshi-sugimoto-seascapes/', 'Art Blart')],
    sourceLabel: '艺术家官网',
    sourceUrl: 'https://www.sugimotohiroshi.com/'
  },
  {
    id: 'paul-mpagi-sepuya',
    name: 'Paul Mpagi Sepuya',
    born: '1982',
    base: 'Los Angeles',
    intro: '在工作室里使用镜子、相机、照片碎片和朋友的身体，把肖像制作过程本身拍进照片。',
    methods: ['工作室摄影', '镜像', '自我表演', '拼贴式构图', '肖像'],
    subjects: ['酷儿亲密关系', '身体', '摄影观看', '欲望', '工作室'],
    outputs: ['摄影', '展览'],
    institutions: ['Whitney Museum', 'CCP Melbourne', 'MOCA Los Angeles'],
    achievements: ['当代酷儿工作室肖像的重要实践者'],
    whyImportant: 'Sepuya 最值得学的是他把摄影设备暴露出来：镜子边缘、三脚架、相机、手和照片碎片都不藏。肖像因此同时是“一个人”和“这张照片是怎么被制造的”。',
    projects: [
      project('2010s–', 'Darkroom Mirror / Studio works', '镜面工作室肖像', ['在镜子前组织相机、身体与打印照片碎片。', '常让摄影师、被摄者和相机彼此进入画面。'], '镜子不是为了制造奇观，而是把摄影中通常在画面外的关系全部折回画面里。')
    ],
    images: [image('https://ccp.org.au/app/uploads/2022/03/PHOTO.2022_CCP_DOCO_270422_JF.014-scaled.jpg', 'Paul Mpagi Sepuya — installation view', '© Paul Mpagi Sepuya / CCP', 'https://ccp.org.au/exhibition/paul-mpagi-sepuya/', 'Centre for Contemporary Photography')],
    sourceLabel: 'CCP',
    sourceUrl: 'https://ccp.org.au/exhibition/paul-mpagi-sepuya/'
  },
  {
    id: 'pixy-liao',
    name: 'Pixy Liao',
    chineseName: '廖逸君',
    born: '1979',
    base: 'New York',
    intro: '长期与伴侣 Moro 合作，通过姿势、裸体、家居物件和幽默的权力倒置重新编排异性亲密关系。',
    methods: ['编排式摄影', '伴侣合作', '自我表演', '肖像', '日常物件'],
    subjects: ['亲密关系', '性别', '权力', '情侣', '身体', '欲望'],
    outputs: ['摄影', '摄影书', '装置'],
    institutions: ['Fotomuseum Antwerp', 'Rencontres d’Arles', 'Jimei x Arles'],
    achievements: ['Experimental Relationship 长期系列形成鲜明方法谱系'],
    whyImportant: '她很适合拿来研究“亲密关系如何被编排，而不只是被记录”。两个人的真实关系是材料，但每张照片仍然经过明确的姿势设计、道具安排和权力角色倒置。',
    projects: [
      project('2007–', 'Experimental Relationship', '伴侣表演 / 编排摄影', ['艺术家与日本伴侣 Moro 共同出演。', '经常通过身体位置和道具改变传统异性关系里的男女角色。'], '关键不在于“搞怪姿势”，而是每次姿势都在测试谁主动、谁被看、谁成为支撑物。')
    ],
    images: [image('https://images.squarespace-cdn.com/content/v1/57119e0d22482eca2d327d36/1467261236553-1V1HCFLYG6IW30K7E5HF/scarf.jpg?format=2500w', 'Experimental Relationship', '© Pixy Liao', 'https://www.xibtmagazine.com/2022/03/interview-with-pixy-liao/', 'XIBT Magazine')],
    sourceLabel: '艺术家官网',
    sourceUrl: 'https://pixyliao.com/'
  },
  {
    id: 'latoya-ruby-frazier',
    name: 'LaToya Ruby Frazier',
    born: '1982',
    base: 'Chicago / United States',
    intro: '把自己的家庭、工业衰退、医疗与环境问题放在同一长期纪实结构里，让私人身体成为社会基础设施变化的证据。',
    methods: ['长期纪实', '家庭档案', '自画像', '黑白摄影', '合作肖像'],
    subjects: ['家庭', '工业衰退', '阶级', '环境', '医疗', '黑人社区'],
    outputs: ['摄影书', '摄影系列', '展览'],
    institutions: ['Whitney Museum', 'MoMA', 'Carnegie Museum'],
    achievements: ['MacArthur Fellow 2015'],
    whyImportant: '她把“家族项目”做成社会研究，但没有牺牲家庭关系本身。母亲、祖母、自己和工业城市不是四个题材，而是一条互相作用的因果链。',
    projects: [
      project('2001–14', 'The Notion of Family', '家庭 / 城市 / 工业长期项目', ['长期拍摄自己、母亲、祖母和宾夕法尼亚州 Braddock。', '家庭身体状况与工业环境变化被并置。'], '如果做家庭项目，可以学她怎样让私人材料向外连接社会结构，而不是靠一段宏大文字硬贴概念。')
    ],
    images: [image('https://d7hftxdivxxvm.cloudfront.net/?quality=80&resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2FaAmCaMyvL8x5oHTMLVsrzQ%252FLRF%2B059_cg.jpg&width=1820', 'The Notion of Family', '© LaToya Ruby Frazier', 'https://www.artsy.net/article/artsy-editorial-latoya-ruby-fraziers-photographs-stories-forgotten-americans', 'Artsy')],
    sourceLabel: '艺术家官网',
    sourceUrl: 'https://latoyarubyfrazier.com/'
  },
  {
    id: 'richard-mosse',
    name: 'Richard Mosse',
    born: '1980',
    base: 'New York / Ireland',
    intro: '使用原本用于军事、监控或科学用途的成像技术拍摄战争、迁移和生态危机，让技术本身成为政治问题。',
    methods: ['红外摄影', '热成像', '技术挪用', '大尺幅摄影', '影像装置'],
    subjects: ['战争', '迁移', '监控', '气候', '军事技术'],
    outputs: ['摄影', '多屏影像', '大型装置'],
    institutions: ['Venice Biennale', 'Louisiana Museum', 'Barbican'],
    achievements: ['Deutsche Börse Photography Prize 2014'],
    whyImportant: 'Mosse 不是单纯用“奇怪颜色”拍战争。他把本来为军方和监控设计的成像系统反过来用于艺术，于是你看到的不只是冲突，也看到观看冲突的技术。',
    projects: [
      project('2010–15', 'Infra', '军事红外胶片 / 战争景观', ['使用已停产的 Kodak Aerochrome 红外胶片。', '该胶片原本用于军事侦察与植被识别。', '刚果景观被转换成强烈粉红与红色。'], '颜色不是后期风格，而是技术历史留下的结果；所以分析它时必须把胶片用途一起算进去。')
    ],
    images: [image('https://artlogic-res.cloudinary.com/w_1200%2Cc_limit%2Cf_auto%2Cfl_lossy%2Cq_auto/ws-altmansiegel/usr/exhibitions/images/artists/68/2015_louisiana_040215_mosse_02.jpg', 'Infra — installation view', '© Richard Mosse', 'https://altmansiegel.com/artists/68-richard-mosse/installation_shots/image3760/', 'Altman Siegel')],
    sourceLabel: '艺术家官网',
    sourceUrl: 'https://www.richardmosse.com/'
  },
  {
    id: 'penelope-umbrico',
    name: 'Penelope Umbrico',
    born: '1957',
    base: 'New York',
    intro: '从 Flickr、Craigslist 等平台收集海量用户图片，以搜索结果和图片数量本身研究网络图像的重复。',
    methods: ['网络挪用', 'found image', '众包图像', '分类学', '摄影装置'],
    subjects: ['互联网', '图像过剩', '大众摄影', '重复', '平台'],
    outputs: ['大型图像网格', '摄影装置', '摄影书'],
    institutions: ['SFMOMA', 'Aperture Foundation', 'ICP'],
    achievements: ['网络时代 found photography 的代表实践之一'],
    whyImportant: '她的问题非常直接：当互联网上已经有几百万张夕阳，艺术家为什么还要再拍一张？她把搜索、截取和重新排列变成摄影实践。',
    projects: [
      project('2006–', 'Suns from Sunsets from Flickr', '平台图像 / 海量网格', ['在 Flickr 搜索 sunset。', '从用户照片中裁出太阳部分。', '根据当时搜索结果数量不断改变作品标题和规模。'], '作品的真正材料不是太阳，而是数百万用户重复做同一种摄影动作这件事。')
    ],
    images: [image('https://miro.medium.com/v2/resize%3Afit%3A1400/1%2A6n8boPhQ3ia8Gmr500qu5A.jpeg', 'Suns from Sunsets from Flickr', '© Penelope Umbrico', 'https://medium.com/@lingyij701/sun-collector-penelope-umbrico-24-hours-of-endless-sunsets-c6cef1a12d61', 'Medium')],
    sourceLabel: '艺术家官网',
    sourceUrl: 'https://www.penelopeumbrico.net/'
  },
  {
    id: 'viviane-sassen',
    name: 'Viviane Sassen',
    born: '1972',
    base: 'Amsterdam',
    intro: '用强烈影子、色块、人体切割和雕塑式姿势，把时尚、抽象和身体摄影混合在一起。',
    methods: ['编排式摄影', '时尚摄影', '色彩摄影', '身体抽象', '阴影构图'],
    subjects: ['身体', '身份', '阴影', '非洲记忆', '欲望', '抽象'],
    outputs: ['摄影', '时尚影像', '摄影书', '展览'],
    institutions: ['Foam', 'MoMA', 'Maison Européenne de la Photographie'],
    achievements: ['Prix de Rome 2007'],
    whyImportant: '她能帮助理解“时尚视觉语言”和“艺术摄影”之间不是硬边界。身体经常被切成几何形，阴影甚至比人物身份更重要。',
    projects: [
      project('2014', 'Umbra', '阴影 / 身体 / 抽象摄影', ['以影子、身体与强烈色彩为核心。', '人物经常被阴影遮挡或切割。'], '如果只说“配色高级”会漏掉关键：阴影在这里像第二个身体，负责改变人物可读性。')
    ],
    images: [image('https://images-prod.anothermag.com/480/azure/another-prod/290/0/290472.JPG', 'Umbra', '© Viviane Sassen', 'https://www.anothermag.com/art-photography/3319/umbra-by-viviane-sassen', 'AnOther')],
    sourceLabel: '艺术家官网',
    sourceUrl: 'https://www.vivianesassen.com/'
  },
  {
    id: 'harley-weir',
    name: 'Harley Weir',
    born: '1991',
    base: 'London',
    intro: '在时尚委托、身体特写、材料实验和非常私人化的视觉片段之间移动，强调皮肤、触感和图像的不稳定性。',
    methods: ['时尚摄影', '近距离摄影', '暗房实验', '身体抽象', '日记式摄影'],
    subjects: ['身体', '亲密关系', '皮肤', '欲望', '时尚', '物质性'],
    outputs: ['摄影', '摄影书', '展览', '时尚影像'],
    institutions: ['Hannah Barry Gallery', 'Aperture', 'Barbican'],
    achievements: ['商业时尚与独立艺术实践长期并行'],
    whyImportant: '她适合研究“时尚摄影师如何不被商业语言完全定义”。很多图像从身体局部和材料开始，不需要完整人物身份，却仍然保持强烈情绪。',
    projects: [
      project('2020s', 'The Garden', '身体 / 植物 / 材料实验', ['身体特写、植物、表面痕迹和实验性影像并置。', '展览中不同尺寸照片形成松散的身体—自然关系。'], '可以关注她怎样把“触感”拍出来：不是靠说明，而是靠距离、闪光、颗粒和身体裁切。')
    ],
    images: [image('https://cdn.prod.website-files.com/5d70caf362d15d860bedae09/69c77edd3104062c1cf06071_6846eef048b97a969e3a6f4d_thisispaper-the-garden-harley-weir-hannah-barry-gallery-london-guide-art-09.webp', 'The Garden — installation view', '© Harley Weir', 'https://www.thisispaper.com/mag/the-garden-harley-weir-hannah-barry-gallery', 'Thisispaper')],
    sourceLabel: '艺术家官网',
    sourceUrl: 'https://harleyweir.com/'
  },
  {
    id: 'corinne-vionnet',
    name: 'Corinne Vionnet',
    born: '1969',
    base: 'Switzerland',
    intro: '把互联网上成百上千张游客拍摄的同一地标叠加，让“大家几乎站在同一个位置拍照”这件事变成可见。',
    methods: ['网络挪用', '图像叠加', 'found image', '数字合成', '众包图像'],
    subjects: ['旅游', '集体观看', '互联网', '地标', '摄影习惯'],
    outputs: ['数字合成摄影', '大型打印', '装置'],
    institutions: ['Fotomuseum Winterthur', 'Musée de l’Elysée'],
    achievements: ['Photo Opportunities 成为网络图像叠加的经典案例'],
    whyImportant: '她几乎不需要自己去地标现场。创作发生在搜索、筛选、对齐和透明度叠加中，最后出现的是“集体摄影姿势”的平均图像。',
    projects: [
      project('2005–', 'Photo Opportunities', '游客图像 / 数字叠加', ['从网络收集同一旅游地标的大量照片。', '对齐相似构图并降低透明度叠加。'], '作品看起来像模糊印象派风景，但真正对象其实是游客站位和构图习惯的高度一致。')
    ],
    images: [image('https://elektron-prod.imgix.net/images/Vues-dexpo/DSC0370.jpg?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&q=75w%3D3000', 'Photo Opportunities — Pyramids', '© Corinne Vionnet', 'https://www.elektron.lu/en/exhibitions/photo-opportunities', 'Elektron')],
    sourceLabel: '艺术家官网',
    sourceUrl: 'https://www.corinnevionnet.com/'
  },
  {
    id: 'broomberg-chanarin',
    name: 'Adam Broomberg & Oliver Chanarin',
    born: '1970 / 1971',
    base: 'London',
    intro: '合作时期不断拆解新闻摄影、战争摄影与档案权力，经常故意绕开“拍出事件”的传统期待。',
    methods: ['档案挪用', '实验摄影', '战争影像批判', '无相机摄影', '文本'],
    subjects: ['战争', '新闻摄影', '档案', '权力', '证据', '媒体'],
    outputs: ['摄影', '摄影书', '装置', '档案项目'],
    institutions: ['Tate', 'The Photographers’ Gallery', 'ICP'],
    achievements: ['Deutsche Börse Photography Prize winner'],
    whyImportant: '他们特别适合研究“摄影师到了战场却不拍战场”意味着什么。作品常把胶片、档案管理、军方嵌入机制和媒体制度本身变成拍摄对象。',
    projects: [
      project('2008', 'The Day Nobody Died', '战争 / 感光纸直接曝光', ['随英国军队进入阿富汗，但不使用相机记录战斗。', '将大卷感光纸在事件发生时直接暴露于光线。'], '作品拒绝提供可消费的战争画面，留下的只有光、时间和“摄影在场但没有图像证据”的矛盾。')
    ],
    images: [image('https://i.pinimg.com/originals/45/aa/66/45aa66138ed510ff662bdc44398a7e3d.jpg', 'The Day Nobody Died', '© Adam Broomberg & Oliver Chanarin', 'https://www.tate.org.uk/art/artists/adam-broomberg-and-oliver-chanarin-11745', 'Tate')],
    sourceLabel: 'Tate',
    sourceUrl: 'https://www.tate.org.uk/art/artists/adam-broomberg-and-oliver-chanarin-11745'
  },
  {
    id: 'max-pinckers',
    name: 'Max Pinckers',
    born: '1988',
    base: 'Brussels',
    intro: '在纪实语境中主动使用闪光、表演、重演和可见的摄影介入，拒绝把 documentary 等同于“未经加工”。',
    methods: ['实验纪实', '编排式摄影', '闪光', '重演', '摄影书'],
    subjects: ['纪实真实性', '媒体', '政治', '身份', '国家叙事'],
    outputs: ['摄影书', '摄影系列', '研究项目'],
    institutions: ['KASK', 'Rencontres d’Arles', 'FOMU Antwerp'],
    achievements: ['当代实验纪实摄影的重要实践者'],
    whyImportant: 'Pinckers 非常适合解决“编排是不是就不纪实”的问题。他经常故意让闪光和导演痕迹很明显，因为他认为纪录影像本来就包含选择和建构。',
    projects: [
      project('2017', 'Red Ink', '朝鲜 / 媒体限制 / 摄影书', ['在严格控制的访问条件下拍摄朝鲜。', '使用明显闪光与强烈色彩。', '摄影书把受限观看条件本身纳入项目。'], '与其假装摄影师可以突破限制，不如把“只能看到这些”直接做成作品结构。')
    ],
    images: [image('https://images.lensculture.com/image/9cc30883-77c6-4ff7-027b-9ce13e1abd00/large', 'Red Ink', '© Max Pinckers', 'https://www.lensculture.com/articles/max-pinckers-the-only-thing-you-can-t-get-is-red-ink', 'LensCulture')],
    sourceLabel: '艺术家官网',
    sourceUrl: 'https://www.maxpinckers.be/'
  },
  {
    id: 'moyra-davey',
    name: 'Moyra Davey',
    born: '1958',
    base: 'New York',
    intro: '拍书、灰尘、咖啡馆、地铁乘客等日常材料，再把照片折成信件邮寄，让邮戳、胶带和折痕成为作品的一部分。',
    methods: ['邮寄摄影', '摄影装置', '日记式摄影', '文本', '系列网格'],
    subjects: ['阅读', '日常生活', '图像流通', '书籍', '时间', '私人空间'],
    outputs: ['摄影网格', '邮件作品', '影像', '写作'],
    institutions: ['MoMA', 'Camden Art Centre', 'National Gallery of Canada'],
    achievements: ['Scotiabank Photography Award 2018'],
    whyImportant: '她能帮你理解“照片作为物件”不一定需要复杂装置技术。最简单的折叠、胶带、地址、邮票和运输痕迹，就足以让照片从图像变成经历过路径的东西。',
    projects: [
      project('2011', 'The Coffee Shop, The Library', '照片网格 / 邮寄痕迹', ['拍摄图书馆、书籍、咖啡馆等私人阅读经验的公共空间。', '照片被折叠、贴胶带、邮寄，再带着邮戳与折痕展出。'], '运输不是作品完成后的物流，而是图像生产的一部分。')
    ],
    images: [image('https://www.moma.org/media/W1siZiIsIjIzNjcxNyJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=33185a6f21ed5d2a', 'The Coffee Shop, The Library', '© Moyra Davey', 'https://www.moma.org/collection/works/147668', 'MoMA')],
    sourceLabel: 'MoMA',
    sourceUrl: 'https://www.moma.org/artists/39770-moyra-davey'
  }
];
