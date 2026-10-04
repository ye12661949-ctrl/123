import type { ArtistArchive, ArchiveProject, ArchiveRelation } from './archiveData';

const rel=(kind:ArchiveRelation['kind'],label:string,detail?:string):ArchiveRelation=>({kind,label,detail});
const project=(p:ArchiveProject)=>p;

export const archiveBatch281:Record<string,ArtistArchive>={
  'hito-steyerl':{
    artistId:'hito-steyerl',
    projectCoverage:'在 Batch279 基础上继续下钻 Hito Steyerl，新增 This is the Future、SocialSim、Animal Spirits、Hell Yeah We Fuck Die 四个作品/展陈节点。重点补足作品文件格式、屏幕/LED/钢架/玻璃植物容器等实体媒介、循环时长、收藏保存方式、空间搭建以及观众如何进入装置。',
    imageCoverage:'4 / 4 均找到博物馆或权威机构的对应作品图/安装图入口。Centre Pompidou、Kunstsammlung NRW、Kunstmuseum Bonn、Kunsthalle Mannheim 均提供明确作品或安装图；版权未确认允许仓库本地再发布时保持 images 为空，并在关系字段记录摄影者、copyright/courtesy 与图像申请状态。',
    note:'作品级深化批次。尤其把“AI作品”拆成算法生成内容、数字母版、播放硬件、钢架/LED/玻璃器皿等实体层，避免只用“讨论人工智能”概括。',
    projects:[
      project({
        title:'This is the Future / Power Plants — Centre Pompidou collection configuration',cluster:'HD video / LED environment / steel scaffolding / digital preservation',period:'2019',
        summary:'Centre Pompidou 的馆藏记录把这件作品拆成两个互相依赖的层次：核心影像 This is the Future 是16分钟彩色有声 HD video，以 smart screen 背投；与它共同构成环境的 Power Plants 则由不锈钢脚手架结构、3.9 mm LED panels、11个无声彩色多通道循环影像 motif、LED text panels，以及4个无声循环文字视频 motif 组成。因此观众不是只观看一段“关于未来的AI影片”，而是在钢架、发光植物影像、文字屏和主视频之间移动。馆藏保存方式也很关键：Pompidou 接收的是数字文件 USB，文件随后复制进博物馆保存服务器，USB实体进入库房，说明作品的“原件”同时包含可迁移数字文件与必须重建的显示/空间规范。',
        actions:['制作16分钟单通道HD彩色有声影像，并以smart screen背投形成核心观看面。','另外搭建不锈钢脚手架式结构，将3.9 mm LED panels嵌入其中，形成可进入/环绕观看的视频雕塑环境。','为Power Plants制作11个彩色无声多通道循环影像motif，并加入LED文字面板与4个循环文字视频motif。','不同展厅可重新适配钢架与屏幕的组合，但主视频时长、LED内容与结构逻辑保持。','作品以数字文件形式进入Pompidou：USB交付后复制到博物馆保存服务器，物理USB另行入库保存。'],
        sourceUrl:'https://www.centrepompidou.fr/en/ressources/oeuvre/EDuB1yQ',images:[],
        relations:[rel('收藏','Centre Pompidou','AM 2021-1028；HD video + smart-screen rear projection；Power Plants含stainless-steel scaffolding、3.9 mm LED panels、多通道循环影像与LED文字。官方馆藏页有对应作品图，版权未确认开放仓库再发布。'),rel('展览','K21 / Kunstsammlung Nordrhein-Westfalen, 2020','官方页面保存 This is the Future / Power Plants 安装图，摄影 Achim Kukulies，© VG Bild-Kunst；用于核对空间版本，不擅自复制。')]
      }),
      project({
        title:'SocialSim — K21 collection / three-channel Dancing Mania loop',cluster:'multi-channel video installation / simulation / choreographed screens',period:'2020',
        summary:'SocialSim 是多通道视频装置而不是单一屏幕影片。Kunstsammlung Nordrhein-Westfalen 的馆藏记录给出18分19秒时长，并明确其中 Dancing Mania 为三通道循环视频安装。作品把社会模拟、警察/群体行为、舞蹈与计算模型放进多屏关系中；观众必须在空间里同时面对多个动态图像面，而不是按照电影院式线性叙事从头看到尾。K21 在2020回顾展及2022馆藏展示中留下安装现场，可用于确认屏幕彼此的空间关系和作品在不同展厅中的重装方式。',
        actions:['制作由多个同步/并置动态图像通道组成的装置，而不是把材料压缩为单屏。','将Dancing Mania组织为三通道循环，使舞蹈、群体运动和模拟视觉在不同显示面之间互相参照。','以18分19秒为馆藏登记时长；循环播放使观众可从任意时间点进入。','根据展厅重新布置显示面和观看距离，K21 2020与2022安装图保留了不同展示阶段的空间证据。'],
        sourceUrl:'https://sammlung.kunstsammlung.de/en/works/29141',images:[],
        relations:[rel('收藏','Kunstsammlung Nordrhein-Westfalen','Accession 0739，2021购藏；Material/Technique: multi-channel video installation；Duration 0:18:19；Dancing Mania为three-channel loop。'),rel('展览','K21 installation views, 2020/2022','官方图摄影 Achim Kukulies；© VG Bild-Kunst, Bonn。馆方要求图像权利另行联系，故本地图片暂缺。')]
      }),
      project({
        title:'Animal Spirits — Kunstmuseum Bonn ZOOM IN installation',cluster:'immersive installation / AI animation / film / plants in illuminated glass vessels',period:'2022; Bonn version 2026–2027',
        summary:'Animal Spirits 在Kunstmuseum Bonn的版本把影像从屏幕扩张到整个房间。墙面出现被投影的洞穴绘画，天花/空间中悬挂装有植物并被照亮的玻璃容器，整体被机构形容为类似陌生星球或钟乳石洞穴。Steyerl 使用人工智能使历史洞穴绘画产生动画化运动；装置中心则播放同名影片，把reality TV、documentary与animation混合，讨论加密货币、疫情时期文化生产、农业系统等。观众因此同时面对“史前图像经AI重新运动”的墙面环境、真实植物/玻璃器皿与中心影片，技术图像和生物材料不再被分开。',
        actions:['取历史洞穴绘画图像并借助AI处理，使静态历史图像在装置中被动画化/重新运动。','把洞穴绘画作为投影扩散到展厅墙面，使房间本身成为图像载体。','制作并悬挂带照明的玻璃容器，在其中放置植物，使真实生物材料进入数字影像环境。','在空间中心配置同名影片，剪接reality-TV、纪录片和动画材料。','通过房间尺度布置让观众走入投影、玻璃植物容器和影片之间，而非仅在单一屏幕前观看。'],
        sourceUrl:'https://www.kunstmuseum-bonn.de/en/ausstellungen/zoom-in/',images:[],
        relations:[rel('展览','Kunstmuseum Bonn, ZOOM IN, 30 Apr 2026–31 Dec 2027','当前具体空间版本；机构页面提供对应video still与展览图，credit: courtesy the artist, Andrew Kreps Gallery and Esther Schipper；© Hito Steyerl / VG Bild-Kunst, Bonn 2026。'),rel('收藏','KiCo Collection','Kunstmuseum Bonn说明该装置以KiCo Collection永久借展形式呈现；未确认图像可自由再发布，故不复制。')]
      }),
      project({
        title:'Hell Yeah We Fuck Die — Kunsthalle Mannheim installation version',cluster:'multi-screen video / illuminated text / concrete enclosures',period:'2016; Mannheim version 2024–2025',
        summary:'Hell Yeah We Fuck Die 把2010年代英语流行榜中高频出现的五个词变成空间中的实体语言。Kunsthalle Mannheim 的版本明确显示文字不是普通墙贴：五个词以发光字形式嵌/围在混凝土构件中，同时又作为动画标题出现在多块播放视频的屏幕开头。也就是说，观众先在建筑尺度上遭遇 YES/HELL/FUCK/DIE 等语言—物体，再在多屏动态图像里看到它们作为数字文字重新出现；沉重混凝土、发光文字与屏幕影像共同构成作品，而不是“几段关于机器人或战争的视频”。',
        actions:['从英语流行音乐榜单的高频词统计中提取标题的五个词，并把统计语言转成作品标题。','制作发光文字，并用/置于混凝土构件中，使语言成为具有重量和尺度的实体。','在多个屏幕播放视频，并让同一组词作为动画文字出现在视频开头。','通过多屏、发光字和混凝土在展厅中形成分散式环境，观众需在各构件之间移动观看。','Mannheim 2024版本重新适配Kubus 2空间，机构安装照保留具体位置和尺度关系。'],
        sourceUrl:'https://www.kuma.art/en/exhibitions/hito-steyerl',images:[],
        relations:[rel('展览','Kunsthalle Mannheim, 6 Jun 2024–4 May 2025','Leihgabe Sammlung LBBW；官方安装图明确标记 © Hito Steyerl，摄影 Kunsthalle Mannheim / Elmar Witt。'),rel('展览','图片状态','机构提供作品对应安装图，但未给出自由再发布许可；档案记录credit与入口，本地images保持暂缺。')]
      })
    ]
  }
};
