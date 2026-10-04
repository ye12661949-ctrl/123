import type { ArtistArchive, ArchiveProject, ArchiveRelation } from './archiveData';

const rel=(kind:ArchiveRelation['kind'],label:string,detail?:string):ArchiveRelation=>({kind,label,detail});
const project=(p:ArchiveProject)=>p;

export const archiveBatch279:Record<string,ArtistArchive>={
  'hito-steyerl':{
    artistId:'hito-steyerl',
    projectCoverage:'本批建立 Hito Steyerl 作品级研究档案，连续拆解 How Not to Be Seen、Factory of the Sun、Power Plants / Power PlantsOS、Actual RealityOS、Red Alert 与 November 六个具体作品/展览节点，重点记录视频文件、拍摄现场、显示设备、AI/AR 开发、数据采集、空间安装与观众操作方式。',
    imageCoverage:'6 / 6 均记录 MoMA、Walker Art Center、Serpentine Galleries、Whitney/SJMA 等官方作品或安装图来源。机构图像未确认可自由复制进仓库时不下载，保留摄影者、courtesy 与 reproduction 状态，并明确标记本地图片暂缺。',
    note:'作品级深化批次。Steyerl 的作品不能只概括成“数字图像、监控与资本主义”：她经常把特定文件格式、低/高清分辨率、屏幕、LED、投影、蓝色网格、手机摄像头、AR marker、训练模型、社区数据与观众身体组织成具体的观看机器。',
    projects:[
      project({
        title:'HOW NOT TO BE SEEN: A Fucking Didactic Educational .MOV File',cluster:'single-channel video / resolution target / instructional parody',period:'2013',
        summary:'这件作品最终是一个单屏 1080p .mov 文件，约14分钟。Steyerl 把“如何不被看见”制作成故意笨拙的教学录像：自动化感很强的男声逐条念出指令，她本人和没有面孔的建筑模型式人物实际表演缩小、隐藏、滑动和拍照等动作。关键拍摄地点是美国沙漠中的航空摄影 calibration target——地面巨大的线条与标记原本用于测试飞机摄影机的清晰度。Steyerl 又把电脑桌面、数字背景和绿衣人物叠加到这一真实军事/摄影基础设施上，因此作品不是对监控的抽象评论，而是把“分辨率如何把世界变成可测量图像”直接变成布景、动作和文件格式。',
        actions:['前往带有航空摄影分辨率/校准标记的沙漠现场拍摄。','由艺术家本人及无面孔的模拟人物按照教学片结构表演隐藏、缩小、滑动和拍照等动作。','把真实沙漠、绿幕式人物、电脑桌面和数字合成图层剪辑到同一影像空间。','以单屏 1080p .mov 文件而非胶片对象完成作品；Walker 馆藏登记载体为 hard disk。','在展厅中以单屏动态图像观看；MoMA 2014 Cut to Swipe 保存了对应安装现场。'],
        sourceUrl:'https://www.moma.org/explore/inside_out/2014/06/18/hito-steyerls-how-not-to-be-seen-a-fucking-didactic-educational-mov-file/',images:[],
        relations:[rel('收藏','Walker Art Center','2013；single 1080p .mov file on hard disk；馆藏页面提供5张对应图，reproduction 需另行申请。'),rel('展览','MoMA Cut to Swipe, 2014–15','MoMA 安装图 IN2300.24，Photograph by Jonathan Muzikar；未确认自由再发布，故本地图片暂缺。')]
      }),
      project({
        title:'Factory of the Sun — German Pavilion / later museum installation',cluster:'immersive video installation / motion capture / gaming space',period:'2015',
        summary:'Factory of the Sun 不是把一段影片投到白墙上，而是把观众放进一个模拟动作捕捉/电子游戏坐标空间的黑暗房间。核心影像为彩色有声视频，约21分钟循环；展厅墙面、地面与天花由发光的蓝色网格线贯穿，前方设置大屏幕，观众坐/躺在低矮座椅上观看。影片把新闻、YouTube式图像、舞蹈动作、游戏界面与虚构叙事剪在一起，身体动作被转换为数据和光。作品2015年在第56届威尼斯双年展德国馆出现，后来进入 SJMA/Hammer/MCA Chicago 联合收藏并可重新安装；因此档案把固定视频文件与可随建筑改变尺寸的 environment 分开记录。',
        actions:['制作约21分钟循环的彩色有声数字视频，把舞蹈、游戏界面、网络/新闻视觉和虚构叙事剪辑在一起。','在黑暗展厅的墙、顶、地面建立连续蓝色发光网格，使实体房间近似 motion-capture / computer-generated coordinate space。','把大屏幕置于网格尽端，并配置低矮躺椅/座位，让观众身体进入影像环境而非站在单一屏幕前。','在不同机构重装时保留视频与蓝色网格的核心逻辑，但 environment 尺寸随展厅变化。'],
        sourceUrl:'https://artguide.artforum.com/uploads/guide.005/id31815/press_release.pdf',images:[],
        relations:[rel('展览','German Pavilion, 56th Venice Biennale, 2015','官方传播资料记录首展安装；installation photograph by Manuel Reinartz，courtesy artist / Andrew Kreps Gallery。'),rel('收藏','SJMA / Hammer Museum / MCA Chicago','2017联合购藏；SJMA资料登记 video, color, sound; 21 min., looped; with environment, dimensions variable。图片版权未确认开放仓库再发布。')]
      }),
      project({
        title:'Power Plants / Power PlantsOS — Serpentine Galleries version',cluster:'AI video sculpture / augmented reality / predictive imagery',period:'2019',
        summary:'Serpentine 的 Power Plants 把AI生成/预测影像做成一组视频雕塑，并另外开发 Power PlantsOS 手机AR层。官方说明这些新视频装置使用人工智能“预测未来”；观众在实体展厅看到动态植物影像和雕塑结构，同时可打开手机应用，寻找分布在展厅中的15个 animated LED sigils。摄像头扫描 sigil 后，屏幕叠加未来预测、植物学描述以及艺术家与住房、残障和家政劳动等研究伙伴对话的引文。也就是说，同一个作品同时存在于实体LED/视频装置、手机摄像头取景画面、3D数据可视化和研究文本之间。',
        actions:['制作以植物/未来预测为核心的AI视频装置，并在Serpentine实体空间布置为video sculptures。','与设计、AR开发和3D建模团队共同开发 Power PlantsOS。','在展厅分布15个 animated LED sigils，作为手机摄像头识别的空间锚点。','观众打开应用并扫描 sigil，触发 predictions、botanical descriptions 与研究伙伴谈话引文的AR叠加。','将展厅外的社会研究和数据重新写入看似“未来植物”的机器预测系统。'],
        sourceUrl:'https://www.serpentinegalleries.org/whats-on/hito-steyerl-power-plants/',images:[],
        relations:[rel('展览','Serpentine Galleries, 11 Apr–6 May 2019','AR design Ayham Ghraowi；development Ivaylo Getov/Luxloop；3D data visualisation United Futures；官方安装图 Photograph © 2019 readsreads.info。'),rel('展览','图片状态','Serpentine提供多张对应安装图并明确 courtesy/photographer；未确认开放本地再发布，故不复制。')]
      }),
      project({
        title:'Actual RealityOS — Serpentine exterior / mobile AR version',cluster:'open-source AR / community data / spatial data visualisation',period:'2019–2020',
        summary:'Actual RealityOS 是与社区研究伙伴共同生产的数据可视化工具，而不是一段预制视频。团队收集财富、社会住房、紧缩政策、低薪劳动和无障碍等资料；观众在 Serpentine Sackler Gallery 外打开手机/平板应用，允许摄像头与定位后，根据地图寻找建筑周围三个实体 concrete sigils。扫描其中一个 sigil 后，AR 中出现被社会数据扭曲、抽象化的美术馆模型；继续扫描虚拟 sigil 可展开更多数据。项目还把数据映射到 harmonic scales，再通过 Behringer DeepMind synthesiser 生成声音。官方明确把工具设为 open source，可由公众换入其他数据、地点和建筑重新制作。',
        actions:['与 The Voice of Domestic Workers、Architects for Social Housing、Unite Hotel Workers、Disabled People Against Cuts 等伙伴共同收集数据与证词。','开发手机/平板 AR 应用，并把数据映射为建筑变形、文字信息和沉浸声音。','在美术馆外部制作并放置三个 concrete sigils 作为物理识别标记。','要求观众携带设备在建筑周围移动、寻找标记、用摄像头扫描，再在屏幕中查看被数据改变的虚拟建筑。','用自动工具把数据点映射为 harmonic scales，并通过 Behringer DeepMind synthesiser生成声音。','以open-source方式发布，使公众可替换数据集、地点和建筑重新部署。'],
        sourceUrl:'https://www.serpentinegalleries.org/whats-on/hito-steyerl-actual-reality-os/',images:[],
        relations:[rel('展览','Serpentine, 11 Apr 2019–31 Jan 2020','AR design/production Ayham Ghraowi团队；development Ivaylo Getov/Luxloop等；marker production Philipp Von Frankenberg / Jamie Bracken Lobb。'),rel('展览','官方图像','Serpentine提供应用界面、AR data visualisation、concrete sigil对应图；部分 Photograph © 2019 readsreads.info，部分 © 2019 Serpentine Galleries；不擅自复制。')]
      }),
      project({
        title:'Red Alert',cluster:'three-screen digital video / display hardware / monochrome signal',period:'2007',
        summary:'Red Alert 把“红色警报”压缩成极少的视觉材料，同时把显示硬件本身变成雕塑。Walker Art Center 的馆藏记录明确列出 digital video (color, silent)、flat screen monitors 与 Mac minis。作品以并列显示设备持续呈现强烈红色场域，观众面对的不只是一个红色影像，而是一组由屏幕、播放器和数字信号组成的实体系统；2013年 Walker 的 9 Artists 展览保存了对应 installation view，可用于研究设备间距、观看距离与红光如何扩散到周围空间。',
        actions:['生成无声彩色数字视频信号，以红色视觉场作为主要图像。','使用 flat-screen monitors 与 Mac minis 作为作品规定媒介，而不是把显示器视为可忽略的播放工具。','将多个显示面并置，使观众同时感知红色信号和屏幕硬件的物质边界。','在不同展览中按空间重新安装显示设备；Walker 2013 installation view 保留具体展陈证据。'],
        sourceUrl:'https://www.walkerart.org/collections/artwork/red-alert/',images:[],
        relations:[rel('收藏','Walker Art Center','2007；digital video (color, silent), flat screen monitors, Mac minis；accession 2012.31.1-.2。'),rel('展览','9 Artists, Walker, 2013–14','官方展览页有 Red Alert installation view；Walker要求出版/商业reproduction另行申请，本地图片暂缺。')]
      }),
      project({
        title:'November',cluster:'essay video / archival footage / first-person narration',period:'2004',
        summary:'November 是25分钟彩色有声录像，也是理解 Steyerl 后来“图像如何改变身份”的关键节点。她重新调用自己早年拍摄朋友 Andrea Wolf 的影像；Wolf 后来成为库尔德武装成员并在1998年被杀，旧影像在不同政治语境中又转成纪念、宣传和媒体图像。Steyerl 没有把材料整理成中性的传记纪录片，而是把旧录像、政治图像与第一人称反思重新剪辑，使同一人的身体在私人朋友、电影角色、政治符号之间转换。MoMA 的馆藏媒介与时长可作为稳定版本参数。',
        actions:['重新取用艺术家早年拍摄 Andrea Wolf 的既有录像材料。','把私人影像与后来围绕 Wolf 出现的政治/媒体图像重新并置和剪辑。','加入第一人称论述，使作品同时检查影像来源、政治身份与记忆，而不是伪装成中性新闻记录。','最终制作为25分钟彩色有声视频，并以媒体艺术作品进入展览/收藏系统。'],
        sourceUrl:'https://www.moma.org/collection/works/179811',images:[],
        relations:[rel('收藏','MoMA','2004；Video (color, sound)；25 min；Committee on Media and Performance Art Funds。'),rel('展览','图片/版权','MoMA页面标注 © 2026 Hito Steyerl, Courtesy Wilfried Lentz, Rotterdam；未确认自由再发布，本地图片暂缺。')]
      })
    ]
  }
};
