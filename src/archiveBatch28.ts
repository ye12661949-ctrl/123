import type { ArtistArchive, ArchiveImage, ArchiveRelation } from './archiveData';

const img = (url: string, title: string, credit: string, sourceUrl: string, sourceLabel: string): ArchiveImage => ({ url, title, credit, sourceUrl, sourceLabel });
const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

export const archiveBatch28: Record<string, ArtistArchive> = {
  'walead-beshty': {
    artistId: 'walead-beshty',
    projectCoverage: '6 个核心项目群已建立深度档案 · 2001–现在',
    imageCoverage: '3 / 6 项目已有代表图像',
    note: '按“材料进入一个真实系统后发生什么”整理：机场安检、X 光、折叠曝光、FedEx 运输、展览劳动与生产记录都不是作品外部背景，而是直接生成作品形式的机制。',
    projects: [
      {
        title: 'Travel Pictures', cluster: 'airport security / x-ray / photographic material', period: '2001–2008',
        summary: 'Beshty 携带未显影的大画幅胶片穿越机场，让机场安检 X 光在胶片上留下不可控的雾化、色偏和曝光痕迹；旅行与安全基础设施直接参与图像生产。',
        actions: ['携带未显影胶片旅行', '让胶片通过机场安检系统', '接受 X 光对感光材料的非预期曝光', '返回暗房正常显影', '把安全系统造成的损伤保留为最终图像'],
        sourceUrl: 'https://www.artic.edu/artworks/229513/travel-picture-sanssouci-potsdam-july-12-2006-laxfra-txl-july-26-2006-txl-fra-lax',
        images: [img('https://www.artic.edu/iiif/2/08cb235b-5980-f6b4-10d5-875bb15500ed/full/843,/0/default.jpg', 'Travel Picture', '© Walead Beshty', 'https://www.artic.edu/artworks/229513/travel-picture-sanssouci-potsdam-july-12-2006-laxfra-txl-july-26-2006-txl-fra-lax', 'Art Institute of Chicago')],
        relations: [rel('收藏', 'Art Institute of Chicago', 'Travel Picture')]
      },
      {
        title: 'Multi-Sided Picture Works', cluster: 'folded photogram / color exposure / dimensional translation', period: '2006–2012',
        summary: '将彩色感光纸折成三维体，让不同面分别接受不同颜色与方向的光，再展开成二维照片；折痕既是制作动作，也是三维曝光历史的索引。',
        actions: ['在全黑环境处理彩色感光纸', '将纸折成三维结构', '让各个面接受不同方向 / 颜色的光', '展开感光纸', '进行彩色显影', '保留折痕、色块与曝光边界'],
        sourceUrl: 'https://www.actionstakenunderthefictitiousnamewaleadbeshtystudiosinc.com/multisided-picture-works-20062012',
        images: [img('https://images.squarespace-cdn.com/content/v1/5614520ce4b0241f53ed4809/1462491880372-ES7ZZ7NDUI71YPK6UN1M/WB23808.jpg?format=1500w', 'Black and White Directional Folds', '© Walead Beshty', 'https://www.actionstakenunderthefictitiousnamewaleadbeshtystudiosinc.com/black-and-white-directional-folds-2006-2014', 'Walead Beshty Studios Inc.')],
        relations: []
      },
      {
        title: 'FedEx Works', cluster: 'shipping / glass / damage index', period: '2007–',
        summary: '制作与 FedEx 标准运输箱尺寸相对应的玻璃或铜制物件，直接通过快递系统寄往展览地点。裂纹、刮痕、指纹和碰撞不是运输事故，而是物流网络在作品表面留下的记录。',
        actions: ['按标准 FedEx 包装尺寸制作透明玻璃体 / 铜制物件', '不使用传统艺术品木箱隔离运输过程', '通过 FedEx 正常运输', '到达后直接展示运输造成的裂纹、刮痕与污迹', '继续运输时让痕迹累积'],
        sourceUrl: 'https://www.moma.org/artists/30983',
        images: [img('https://www.moma.org/media/W1siZiIsIjI3OTYyMSJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=86bd24a44315dcdd', 'FedEx work / glass sculpture', '© Walead Beshty', 'https://www.moma.org/artists/30983', 'MoMA')],
        relations: [rel('收藏', 'MoMA', 'works represented in collection')]
      },
      {
        title: 'Copper Surrogates / polished copper works', cluster: 'touch / handling / exhibition labor', period: '2010s–',
        summary: '高度抛光的铜表面在制作、搬运、安装和观看中不断接收手印与氧化痕迹，使通常被隐藏的艺术品劳动链显现。',
        actions: ['制作高反射抛光铜表面', '允许工作室、运输与安装人员正常接触', '不抹除全部手印和氧化', '将接触史作为表面变化持续保留'],
        sourceUrl: 'https://www.petalumaartscenter.org/walead-beshty', images: [], relations: []
      },
      {
        title: 'A Partial Disassembling of an Invention Without a Future', cluster: 'production archive / exhibition labor / transparency', period: '2014–2015',
        summary: '在 Barbican 的 Curve 空间中把工作室生产、物件、照片、运输与劳动记录以巨大连续档案展开，试图让艺术作品背后的生产关系与通常不可见的工作变得可见。',
        actions: ['汇集多年工作室生产材料与作品', '保留日期、生产和流通信息', '沿弧形展厅连续排列', '让成品与生产记录处在同一观看层级'],
        sourceUrl: 'https://www.barbican.org.uk/whats-on/2014/event/walead-beshty-a-partial-disassembling-of-an-invention-without-a-future', images: [],
        relations: [rel('展览', 'Barbican Curve, London', '2014–2015')]
      },
      {
        title: 'Transparencies / glass and photographic works', cluster: 'transparency / display / institutional circulation', period: '2000s–现在',
        summary: '持续利用透明材料、摄影透明片、玻璃和展示结构，让观看者同时意识到图像、支撑体、展厅和自己的位置。',
        actions: ['使用透明 / 半透明材料', '让支撑结构进入视野', '根据具体展览空间组织作品', '把展示与流通条件视为作品的一部分'],
        sourceUrl: 'https://www.actionstakenunderthefictitiousnamewaleadbeshtystudiosinc.com/', images: [], relations: []
      }
    ],
    awards: [],
    exhibitions: ['A Partial Disassembling of an Invention Without a Future — Barbican, London 2014–2015', 'Venice Biennale 2015'],
    sources: [
      { label: 'Walead Beshty Studios Inc.', url: 'https://www.actionstakenunderthefictitiousnamewaleadbeshtystudiosinc.com/' },
      { label: 'MoMA', url: 'https://www.moma.org/artists/30983' },
      { label: 'Art Institute of Chicago', url: 'https://www.artic.edu/artists/113329/walead-beshty' },
      { label: 'Barbican', url: 'https://www.barbican.org.uk/whats-on/2014/event/walead-beshty-a-partial-disassembling-of-an-invention-without-a-future' }
    ]
  },
  'hito-steyerl': {
    artistId: 'hito-steyerl',
    projectCoverage: '7 个核心影像 / 装置节点已建立深度档案 · 2007–2023',
    imageCoverage: '3 / 7 项目已有代表图像',
    note: '不把 Steyerl 简化成“讨论互联网的影像艺术家”。逐项目拆解她实际拿什么图像、使用什么技术界面、怎样布置屏幕 / 建筑 / 观众，以及这些动作怎样对应图像政治。',
    projects: [
      {
        title: 'Red Alert', cluster: 'monochrome screens / information threshold', period: '2007',
        summary: '三个竖直显示器只显示红色，将美国国土安全系统的最高警戒颜色从信息符号变成占据空间的纯色光场。',
        actions: ['使用三台竖直 LCD 屏幕', '移除新闻、文字和叙事内容', '只保留红色警报色', '把信息等级转换成身体面对的光与尺度'],
        sourceUrl: 'https://www.tate.org.uk/art/artworks/steyerl-red-alert-t12994',
        images: [img('https://media.tate.org.uk/art/images/work/T/T12/T12994_10.jpg', 'Red Alert, 2007', '© Hito Steyerl', 'https://www.tate.org.uk/art/artworks/steyerl-red-alert-t12994', 'Tate')],
        relations: [rel('收藏', 'Tate', 'Red Alert, 2007')]
      },
      {
        title: 'In Free Fall', cluster: 'object biography / circulation / essay film', period: '2010',
        summary: '以飞机的制造、坠毁、废弃、拆解和材料再循环为线索，把物件的生命周期与资本、战争、电影工业和图像流通并置。',
        actions: ['在飞机废弃场拍摄', '结合采访、表演与 found footage', '追踪飞机零件从交通工具到废料 / 商品的变化', '用蒙太奇把物质循环与图像循环对应'],
        sourceUrl: 'https://www.moma.org/collection/works/181784', images: [],
        relations: [rel('收藏', 'MoMA', 'In Free Fall')]
      },
      {
        title: 'How Not to Be Seen: A Fucking Didactic Educational .MOV File', cluster: 'resolution target / tutorial / surveillance', period: '2013',
        summary: '在废弃的美国空军分辨率测试靶场拍摄，以荒诞教学视频的章节结构演示“如何不可见”，把分辨率、像素、卫星成像和监控系统变成表演规则。',
        actions: ['进入加州沙漠中的航空分辨率测试靶场', '使用绿幕、CG 与低成本数字合成', '模仿软件教程 / 教学视频的语气与字幕', '让演员与测试图案发生尺度关系', '把“成为小于一个像素”等技术条件转成身体动作'],
        sourceUrl: 'https://www.moma.org/collection/works/181784',
        images: [img('https://www.moma.org/media/W1siZiIsIjIxNzU1MiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=77e6a7d97b696c37', 'How Not to Be Seen', '© Hito Steyerl', 'https://www.moma.org/artists/43726', 'MoMA')],
        relations: [rel('收藏', 'MoMA', 'video work represented in collection')]
      },
      {
        title: 'Liquidity Inc.', cluster: 'finance / weather / martial arts / architectural screen', period: '2014',
        summary: '以金融危机、天气预报、Bruce Lee 的“be water”与一位金融从业者转向 MMA 的经历交叉剪辑；展场被改造成蓝色倾斜看台 / 波浪结构，让观看身体进入“流动性”隐喻。',
        actions: ['采访真实人物', '混合新闻、天气图、网络素材和动画', '制作长篇 essay film', '用蓝色倾斜建筑结构承载屏幕和观众', '让观看姿势成为装置的一部分'],
        sourceUrl: 'https://www.ica.art/exhibitions/hito-steyerl-power-plants', images: [], relations: []
      },
      {
        title: 'Factory of the Sun', cluster: 'motion capture / gaming / labor / immersive installation', period: '2015',
        summary: '把动作捕捉、电子游戏界面、舞蹈和虚构的数据劳动系统组合成大型沉浸式装置；观众位于发光网格地面中，如同进入 motion-capture studio。',
        actions: ['拍摄舞者与动作捕捉式身体运动', '构建游戏 / 新闻 / YouTube 式影像界面', '在展厅铺设发光网格', '设置躺椅让观众停留在系统内部', '把屏幕叙事与实际空间坐标对应'],
        sourceUrl: 'https://www.german-pavilion.com/en/2015/',
        images: [img('https://www.german-pavilion.com/wp-content/uploads/2015/05/Hito-Steyerl_Factory-of-the-Sun_2015_Installation-view-German-Pavilion-2015_Photo-Julia-Stoschek-Collection.jpg', 'Factory of the Sun — German Pavilion', '© Hito Steyerl / installation view', 'https://www.german-pavilion.com/en/2015/', 'German Pavilion')],
        relations: [rel('展览', 'German Pavilion — 56th Venice Biennale', '2015')]
      },
      {
        title: 'Power Plants', cluster: 'AI prediction / generated plants / future', period: '2019',
        summary: '利用神经网络生成不断变化的植物影像，并把“预测下一帧”与社会政治意义上的预测、未来和权力联系起来。',
        actions: ['使用神经网络生成 / 预测植物图像序列', '将生成影像分布在多块屏幕', '把算法预测机制作为作品主题而非隐藏工具', '用 AR / 数据层扩展展览信息'],
        sourceUrl: 'https://www.serpentinegalleries.org/whats-on/hito-steyerl-power-plants/', images: [],
        relations: [rel('展览', 'Serpentine Sackler Gallery, London', '2019')]
      },
      {
        title: 'This is the Future / Animal Spirits / recent AI works', cluster: 'AI / prediction / simulation / ecology', period: '2019–2023',
        summary: '后续作品继续把 AI 预测、模拟图像、金融和生态系统放进沉浸式影像环境，关注模型如何不只是描述现实，而是参与制造可行动的未来。',
        actions: ['使用 AI / 模拟生成影像', '把屏幕与空间装置组合', '并置真实数据、虚构叙事与合成图像', '暴露预测系统中的政治和经济前提'],
        sourceUrl: 'https://www.e-flux.com/announcements/449497/hito-steyerli-will-survive/', images: [],
        relations: [rel('展览', 'I Will Survive — Centre Pompidou / K21', '2020–2021')]
      }
    ],
    awards: [],
    exhibitions: ['German Pavilion — Venice Biennale 2015', 'Power Plants — Serpentine 2019', 'I Will Survive — K21 / Centre Pompidou 2020–2021'],
    sources: [
      { label: 'MoMA', url: 'https://www.moma.org/artists/43726' },
      { label: 'Tate', url: 'https://www.tate.org.uk/art/artworks/steyerl-red-alert-t12994' },
      { label: 'German Pavilion 2015', url: 'https://www.german-pavilion.com/en/2015/' },
      { label: 'Serpentine — Power Plants', url: 'https://www.serpentinegalleries.org/whats-on/hito-steyerl-power-plants/' }
    ]
  },
  'anouk-kruithof': {
    artistId: 'anouk-kruithof', projectCoverage: '6 个核心项目群已建立深度档案 · 2009–现在', imageCoverage: '2 / 6 项目已有代表图像',
    note: '重点记录数字图像怎样被搜集、打印、裁切、覆膜、弯折、堆叠并进入空间；“摄影雕塑”在这里是一条具体材料链，不是抽象标签。',
    projects: [
      { title: 'Becoming Blue', cluster: 'performance / portrait / color condition', period: '2009', summary: '通过设置具体颜色与行为条件，把肖像从人物描述变成被规则触发的身体反应。', actions: ['设置蓝色视觉条件', '邀请参与者进入规则', '拍摄身体 / 表情变化', '将重复图像组织成系列'], sourceUrl: 'https://www.anoukkruithof.com/', images: [], relations: [] },
      { title: 'Happy Birthday to You', cluster: 'archive / repetition / vernacular photography', period: '2011', summary: '从大量生日影像与日常摄影惯例出发，研究一种高度重复的私人图像类型如何形成集体视觉模板。', actions: ['搜集既有日常图像', '按重复姿势 / 仪式分类', '重新编辑与出版 / 展示'], sourceUrl: 'https://www.anoukkruithof.com/', images: [], relations: [] },
      { title: 'Pixel Stress', cluster: 'digital image / labor / physical stress', period: '2013', summary: '将屏幕图像、像素与身体劳动关联，把看似无重量的数字图像重新变成需要搬运、挤压和占据空间的材料。', actions: ['选择数字图像', '打印并转移到实体材料', '通过堆叠 / 压迫 / 空间安装制造体积', '保留材料变形'], sourceUrl: 'https://www.anoukkruithof.com/', images: [], relations: [] },
      { title: '#EVIDENCE', cluster: 'internet images / selection / photographic sculpture', period: '2015–2017', summary: '从互联网视觉文化中提取既有图像，通过打印、透明材料和空间支撑将图像从屏幕信息变成有重量、有边缘的雕塑。', actions: ['在线搜集 / 筛选图像', '打印到柔性或透明材料', '切割、折叠、悬挂或包覆', '让图像正反面与支撑结构同时可见'], sourceUrl: 'https://casemoregallery.com/exhibitions/26-evidence-anouk-kruithof/installation_shots/', images: [img('https://static-assets.artlogic.net/w_1200%2Cc_limit%2Cf_auto%2Cfl_lossy%2Cq_auto/ws-artlogicwebsite0019/usr/exhibitions/images/exhibitions/26/evidence-highresjpg-8.jpg', '#EVIDENCE — installation', '© Anouk Kruithof', 'https://casemoregallery.com/exhibitions/26-evidence-anouk-kruithof/installation_shots/', 'Casemore Gallery')], relations: [rel('展览', 'Casemore Kirkeby, San Francisco', '2017')] },
      { title: 'Trans Human Nature', cluster: 'screens / bodies / image ecology', period: '2019–2021', summary: '把人体、自然、屏幕和数字图像的混合状态转成装置与出版物，关注图像消费与身体 / 生态的纠缠。', actions: ['建立跨网络与自摄图像档案', '将图像打印到不同支撑体', '与雕塑材料组合', '以展览和书的不同 sequence 重组'], sourceUrl: 'https://www.anoukkruithof.com/', images: [], relations: [] },
      { title: 'Universal Tongue', cluster: 'online video archive / dance / taxonomy', period: '2018–2021', summary: '与团队从网络收集世界各地舞蹈视频，建立跨地域舞蹈类型数据库，再通过多屏装置把网络动作重新分类和同步。', actions: ['团队在线搜集数千段舞蹈视频', '研究并建立舞蹈类型分类', '剪辑短视频片段', '按动作 / 类型而非上传者身份重新组织', '以多屏同步装置呈现'], sourceUrl: 'https://www.universaltongue.com/', images: [img('https://images.squarespace-cdn.com/content/v1/54b9064ce4b09bfcb728f41a/1613065304298-66GRPVG8FRCE9OK7DJ0J/UT_installation.jpg?format=1500w', 'Universal Tongue — installation', '© Anouk Kruithof', 'https://www.universaltongue.com/', 'Universal Tongue')], relations: [] }
    ],
    awards: [], exhibitions: ['#EVIDENCE — Casemore Kirkeby 2017'], sources: [{ label: 'Artist website', url: 'https://www.anoukkruithof.com/' }, { label: 'Universal Tongue', url: 'https://www.universaltongue.com/' }, { label: 'Casemore Gallery', url: 'https://casemoregallery.com/exhibitions/26-evidence-anouk-kruithof/' }]
  },
  'mishka-henner': {
    artistId: 'mishka-henner', projectCoverage: '6 个网络 / 卫星 / 自动摄影核心项目已建立深度档案 · 2010–现在', imageCoverage: '2 / 6 项目已有代表图像',
    note: '每个项目都把“谁实际按下快门”拆开：Google 车、卫星、公开数据库、平台和自动成像系统先生产图像，艺术家的动作发生在检索、定位、筛选、裁切、编排和再出版。',
    projects: [
      { title: 'Dutch Landscapes', cluster: 'Google Earth / censorship / landscape', period: '2011', summary: '收集荷兰政府在 Google Earth 中以彩色马赛克遮蔽军事与敏感设施的卫星图像，让国家保密行为意外产生类似抽象现代主义的视觉形式。', actions: ['在 Google Earth 搜索被遮蔽区域', '截取彩色像素化 / 马赛克区域', '保留周围地理环境作为尺度参照', '重新输出为摄影作品 / 书'], sourceUrl: 'https://mishkahenner.com/Dutch-Landscapes', images: [], relations: [] },
      { title: 'No Man’s Land', cluster: 'Street View / geolocation / sex work', period: '2011–2013', summary: '依据网络论坛提供的地点线索，在 Google Street View 中定位欧洲道路旁的性工作者；最终图像由 Google 自动采集系统拍摄，Henner 负责搜索、定位与选择。', actions: ['读取网络论坛中的地理线索', '在 Street View 沿道路逐段寻找', '筛选包含人物与道路环境的自动摄影帧', '保留 Google 视角与平台痕迹', '以书、打印和网络形式重新编排'], sourceUrl: 'https://mishkahenner.com/No-Man-s-Land', images: [img('https://cdn.edcat.net/media/items/MH-NML_Ia.jpg', 'No Man’s Land', '© Mishka Henner / source imagery Google Street View', 'https://edcat.net/item/no-mans-land/', 'edcat')], relations: [rel('奖项', 'Deutsche Börse Photography Prize', 'Shortlisted 2013')] },
      { title: 'Feedlots', cluster: 'satellite / industrial agriculture / aerial abstraction', period: '2012–2013', summary: '利用卫星影像寻找美国大规模牛只饲养场；从高空看，动物、粪污池、道路与土地变成抽象几何，但图像结构来自真实工业农业系统。', actions: ['研究美国 feedlot 地点', '通过卫星平台定位', '选择高密度工业农业区域', '裁切并统一俯视尺度', '以大幅打印强化细节与抽象之间的冲突'], sourceUrl: 'https://mishkahenner.com/Feedlots', images: [img('https://images.squarespace-cdn.com/content/v1/5c65c57811f78414e9a61c46/1551450673154-PFHEHZBTPR41BSLFN8AZ/Mishka-Henner-Feedlots-Tascosa-Feedyard-Texas-2013.jpg?format=1500w', 'Feedlots — Tascosa Feedyard, Texas', '© Mishka Henner', 'https://mishkahenner.com/Feedlots', 'Artist website')], relations: [] },
      { title: 'Oil Fields', cluster: 'satellite / extraction / infrastructure', period: '2013–', summary: '从卫星图像中提取石油开采基础设施，以俯视视角显示钻井、道路和土地改造如何形成大尺度人工图案。', actions: ['定位石油开采区域', '浏览卫星图像', '按基础设施密度选择画面', '统一裁切与输出'], sourceUrl: 'https://mishkahenner.com/Oil-Fields', images: [], relations: [] },
      { title: 'Astronomical', cluster: 'scale model / book / planetary distance', period: '2011', summary: '把太阳系按书页尺度重新计算并印成多卷书：绝大多数页面几乎为空，阅读者通过翻页身体性地经历天体之间的距离。', actions: ['确定太阳系比例尺', '将天体距离换算为页面数量', '生成大量近乎空白页面', '把行星位置嵌入书页序列', '通过翻页时间表现尺度'], sourceUrl: 'https://mishkahenner.com/Astronomical', images: [], relations: [] },
      { title: '51 US Military Outposts', cluster: 'satellite / military / publication', period: '2010', summary: '利用公开卫星图像汇集美国海外军事设施，以标准化俯视图和书籍编排把分散全球的军事网络转成可比较的视觉目录。', actions: ['建立军事设施地点列表', '从卫星平台获取俯视图', '统一画幅 / 视点', '按目录逻辑出版'], sourceUrl: 'https://mishkahenner.com/51-US-Military-Outposts', images: [], relations: [] }
    ],
    awards: ['Deutsche Börse Photography Prize — shortlisted 2013'], exhibitions: ['Deutsche Börse Photography Prize — The Photographers’ Gallery 2013'], sources: [{ label: 'Artist website', url: 'https://mishkahenner.com/' }, { label: 'The Photographers’ Gallery', url: 'https://thephotographersgallery.org.uk/' }]
  },
  'alma-haser': {
    artistId: 'alma-haser', projectCoverage: '5 个肖像 / 纸张 / 重构项目已建立深度档案 · 2012–现在', imageCoverage: '2 / 5 项目已有代表图像',
    note: '重点保留她的实际工作链：先拍肖像 → 打印 → 切割 / 折纸 / 重新组合 → 放回原图或重新拍摄。这样可以区分真实纸张加工与纯数字变形。',
    projects: [
      { title: 'Cosmic Surgery', cluster: 'portrait / origami / rephotography', period: '2012–', summary: '先拍摄正面肖像，再打印脸部，将其折成复杂 origami 几何结构，最后把纸结构放回肖像并重新摄影。', actions: ['拍摄标准肖像', '单独打印面部区域', '手工折叠打印纸', '将折纸面部放回原始肖像位置', '重新摄影形成最终平面图像'], sourceUrl: 'https://printsales.thephotographersgallery.org.uk/artists/43-alma-haser/series/cosmic-surgery/', images: [img('https://static-assets.artlogic.net/w_1200%2Cc_limit%2Cf_auto%2Cfl_lossy%2Cq_auto/artlogicstorage/tpgallery/images/view/9819c7b76a8b5ecb56988a43fb5d0cc4j/printsalesgallery-thephotographers-gallery-alma-haser-patient-no.-31-2017.jpg', 'Patient No. 31 — Cosmic Surgery', '© Alma Haser', 'https://printsales.thephotographersgallery.org.uk/artists/43-alma-haser/series/cosmic-surgery/', 'The Photographers’ Gallery')], relations: [rel('奖项', 'Taylor Wessing Photographic Portrait Prize', 'shortlisted 2012')] },
      { title: 'I Always Have To Repeat Myself', cluster: 'portrait / paper duplication / repetition', period: '2010s', summary: '利用重复的人像打印、切割和纸张层叠，把同一张脸变成多个相互遮挡的版本。', actions: ['重复打印同一肖像', '切割不同面部区域', '错位叠加纸张', '再次摄影 / 输出'], sourceUrl: 'https://www.almahaser.com/', images: [], relations: [] },
      { title: 'Twins', cluster: 'genetics / portrait / paper reconstruction', period: '2010s', summary: '以双胞胎为对象，把相似面孔进一步通过折叠和图像置换打乱，讨论遗传相似性与个体差异。', actions: ['拍摄双胞胎肖像', '打印并分割面部', '在两张脸之间交换 / 折叠局部', '重新组装'], sourceUrl: 'https://www.almahaser.com/', images: [], relations: [] },
      { title: 'Pseudo', cluster: 'portrait / identity / constructed face', period: '2010s', summary: '继续使用实体打印、切割与面部重组，让“脸”从身份凭证变成可以被物理编辑的表面。', actions: ['肖像摄影', '打印', '切割', '手工重组', '最终再摄影'], sourceUrl: 'https://www.almahaser.com/', images: [], relations: [] },
      { title: 'Cosmic Surgery — installations / sculptural extensions', cluster: 'paper object / installation', period: '2010s–', summary: '将原本为最终摄影服务的折纸面部进一步作为实体物与展览材料呈现，使第一次肖像、纸雕塑和最终照片形成三种状态。', actions: ['保留折纸面部实体', '与平面肖像并置', '通过展示暴露中间制作步骤'], sourceUrl: 'https://www.almahaser.com/', images: [img('https://images.squarespace-cdn.com/content/v1/5a1d78307131a5c92b242c19/1512116907739-FN2B0LQWX5OEK0ITJYI4/CosmicSurgeryAlmaHaser.jpg?format=1500w', 'Cosmic Surgery — paper portrait', '© Alma Haser', 'https://www.almahaser.com/', 'Artist website')], relations: [] }
    ],
    awards: ['Taylor Wessing Photographic Portrait Prize — shortlisted 2012'], exhibitions: ['The Photographers’ Gallery contexts'], sources: [{ label: 'Artist website', url: 'https://www.almahaser.com/' }, { label: 'The Photographers’ Gallery', url: 'https://printsales.thephotographersgallery.org.uk/artists/43-alma-haser/' }]
  },
  'thomas-demand': {
    artistId: 'thomas-demand', projectCoverage: '6 个模型—摄影核心项目已建立深度档案 · 1994–现在', imageCoverage: '2 / 6 项目已有代表图像',
    note: '所有项目都按“来源图像 / 记忆 → 1:1 纸模型 → 摄影 → 模型销毁”这一基础链条展开，同时标明不同项目如何改变来源、尺度和展示方式。',
    projects: [
      { title: 'Room', cluster: 'model / memory / reconstructed space', period: '1994', summary: 'Demand 早期确立方法：根据既有空间 / 图像制作纸与卡纸模型，再拍摄模型；摄影成为模型唯一长期留下的状态。', actions: ['选择既有空间 / 图像作为来源', '用纸和卡纸搭建模型', '去掉文字、磨损等过度具体细节', '用大画幅相机拍摄', '完成后销毁模型'], sourceUrl: 'https://www.thomasdemand.info/', images: [], relations: [] },
      { title: 'Bathroom', cluster: 'media image / crime / reconstruction', period: '1997', summary: '根据媒体流通的浴室图像重新搭建空间；观众面对的是“照片—模型—照片”的二次甚至三次转译，而不是犯罪现场本身。', actions: ['从媒体图像获取空间信息', '按图像可见信息重建模型', '删除难以确认 / 过度具体的表面细节', '重新摄影'], sourceUrl: 'https://www.moma.org/artists/28625', images: [], relations: [] },
      { title: 'Control Room', cluster: 'news image / nuclear disaster / paper model', period: '2011', summary: '依据福岛核事故相关控制室图像制作等比例纸模型；按钮、面板与桌椅被重建，但文字和材质痕迹被抽空。', actions: ['研究新闻 / 现场来源图像', '用纸与卡纸搭建控制室', '将复杂设备简化为无文字纸表面', '精确布光与大画幅摄影', '销毁模型'], sourceUrl: 'https://www.thomasdemand.info/', images: [img('https://files.ocula.com/anzax/80/80b4c4c7-f114-45aa-b7e0-ba52347c57c3_720_720.jpg', 'Control Room', '© Thomas Demand', 'https://ocula.com/magazine/art-news/thomas-demand-to-build-house-of-card-at-moca/', 'Ocula')], relations: [] },
      { title: 'Pacific Sun', cluster: 'found video / stop-motion / paper animation', period: '2012', summary: '以 YouTube 上邮轮遭遇风浪、家具在室内滑动的视频为来源，制作纸模型并逐帧动画化；人物被移除，只留下物体运动。', actions: ['选择网络 found footage', '分析物体运动轨迹', '搭建纸模型室内', '逐帧移动桌椅等模型', '拍摄 stop-motion 动画', '移除原视频中的人物'], sourceUrl: 'https://www.thomasdemand.info/', images: [], relations: [] },
      { title: 'The Dailies', cluster: 'everyday phone image / model / dye transfer', period: '2008–', summary: '从艺术家手机拍摄的日常微小场景出发，不再依赖重大新闻；先把随手图转成纸模型，再以染料转印等方式输出。', actions: ['用手机记录日常场景', '选择容易被忽略的空间片段', '制作纸模型', '重新摄影', '以高控制印相方式输出'], sourceUrl: 'https://www.thomasdemand.info/', images: [img('https://www.moma.org/media/W1siZiIsIjM3MjU0NSJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=ffca6bb97ecf957c', 'The Dailies — related work', '© Thomas Demand', 'https://www.moma.org/artists/28625', 'MoMA')], relations: [rel('收藏', 'MoMA', 'works represented in collection')] },
      { title: 'Model Studies', cluster: 'architectural model / close-up / found model', period: '2011–', summary: '与他通常自己搭模型不同，这一系列直接拍摄建筑师已有的工作模型，例如 John Lautner / SANAA 等，将模型的切口、胶带、泡沫和临时性推到前台。', actions: ['进入建筑工作室 / 模型档案', '选择他人制作的工作模型', '近距离拍摄材料接缝与临时结构', '不把模型伪装成真实建筑'], sourceUrl: 'https://www.thomasdemand.info/', images: [], relations: [] }
    ],
    awards: [], exhibitions: ['MoMA retrospective 2005', 'House of Card — Museum Leuven / MOCA contexts'], sources: [{ label: 'Artist website', url: 'https://www.thomasdemand.info/' }, { label: 'MoMA', url: 'https://www.moma.org/artists/28625' }]
  }
};