import type { ArtistArchive, ArchiveProject, ArchiveRelation } from './archiveData';

const rel=(kind:ArchiveRelation['kind'],label:string,detail?:string):ArchiveRelation=>({kind,label,detail});
const project=(p:ArchiveProject)=>p;

export const archiveBatch277:Record<string,ArtistArchive>={
  'walid-raad':{
    artistId:'walid-raad',
    projectCoverage:'本批建立 Walid Raad 作品级研究档案，集中拆解 The Atlas Group 与 Scratching on things I could disavow 的 6 个作品/展览版本节点；优先记录作品如何被制作、打印、搭台、讲述与重新空间化。',
    imageCoverage:'6 / 6 均记录 MoMA、Walker Art Center、SFMOMA 等机构的对应作品或安装图入口；机构明确要求另行申请 reproduction 的图片不复制入仓库，保留摄影者/版权状态并标记本地图片暂缺。',
    note:'作品级深化批次。Raad 的实践不能只概括成“战争、档案与虚构”：关键在于他怎样把真实研究、虚构作者、数字打印、出版物、建筑尺度模型、舞台地面和现场讲述组织成一个不断改变证据身份的系统。',
    projects:[
      project({
        title:'Scratching on things I could disavow: Walkthrough — MoMA Marron Atrium version',cluster:'lecture-performance / staged installation / institutional architecture',period:'2015–2016',
        summary:'MoMA 版本把 Raad 自2007年开始研究“阿拉伯世界”艺术基础设施的项目变成一场必须由艺术家本人启动的55分钟现场表演。Raad 没有把作品简单挂成一列：他在 Marron Atrium 搭建五个平台舞台，每个平台的地面复制一种真实艺术机构的空间语言，从当代画廊的浇筑混凝土到纽约大都会艺术博物馆式人字木拼地板。作品被放置在这些平台上，既是可看的对象，也是讲述中的道具。观众在规定时间进入，由 Raad 逐段带领，在他的口述、虚构遭遇、机构史与实体作品之间移动；没有 Walkthrough，展品故意保留大量无法自行解开的叙事关系。',
        actions:['在大型中庭内搭建五个彼此区分的平台/舞台。','为每个平台复制不同艺术空间的地面材料与视觉语汇，包括浇筑混凝土和人字拼木地板。','把系列中的照片、模型和对象布置为表演道具，而不是只作为自治的墙面作品。','由艺术家执行约55分钟现场 Walkthrough，把作品、阿布扎比/迪拜/贝鲁特艺术基础设施和战争后的文化“withdrawal”串联。','限制迟到观众进入，使表演的时间顺序成为作品观看机制的一部分。'],
        sourceUrl:'https://www.moma.org/calendar/events/1465',images:[],
        relations:[rel('展览','MoMA Marron Atrium, 2015–16','MoMA 明确记录55分钟表演、五个平台及不同机构地面原型。'),rel('展览','官方图片 / reproduction','MoMA 页面提供 Piet Janssens 摄影的早期 Walkthrough 图；MoMA 安装图另由 Thomas Griesel 摄影。未确认开放仓库再发布，故本地图片暂缺。')]
      }),
      project({
        title:'Scratching on things I could disavow — project structure: Walkthrough / Les Louvres',cluster:'research installation / museum history / fictional narrative',period:'2007–ongoing',
        summary:'Raad 在2007年启动该项目时，研究对象不是单一博物馆，而是海湾与中东城市快速出现的基金会、画廊、艺术学校、杂志、奖项、博览会和西方品牌博物馆。他把长期研究拆成两个主要章节。Walkthrough 从 Artist Pension Trust Dubai、Saadiyat Island、贝鲁特 Sfeir-Semler Gallery 等具体制度遭遇出发，再加入作品缩小、失去影子/反射、与未来艺术家沟通等虚构事件；Les Louvres 则来自他对卢浮宫新成立伊斯兰艺术部门、档案和新展厅约两年的研究，并与 Louvre Abu Dhabi 的出现并置。作品最终不是研究报告，而是把事实、建筑、对象与不可靠叙述制作成可展陈、可表演的复合档案。',
        actions:['持续调查中东新艺术机构、市场和博物馆基础设施。','把制度研究与真实政治/军事历史并置，同时写入故意无法完全验证的遭遇和对象史。','用约两年时间研究 Louvre Département des Arts de l’Islam、其档案和新展览空间。','把研究拆为 Walkthrough 与 Les Louvres 等章节，再转换为展览对象与现场叙事。'],
        sourceUrl:'https://assets.moma.org/d/pdfs/W1siZiIsIjIwMTgvMDYvMTMvMnJrM3o0MGFzaF9Nb01BX1dhbGlkUmFhZF9QUkVWSUVXLnBkZiJdXQ/MoMA_WalidRaad_PREVIEW.pdf?sha=bee6f4decb2b2dd3',images:[],
        relations:[rel('出版','MoMA exhibition publication preview','艺术家本人说明项目启动背景、两个主要章节及 Les Louvres 的两年研究。'),rel('展览','图片状态','MoMA 展览与出版物有对应图；版权未确认开放再发布，本地图片暂缺。')]
      }),
      project({
        title:'My neck is thinner than a hair: Engines — MoMA installation context',cluster:'The Atlas Group / photographic archive / car-bomb documentation',period:'1996–2001; shown 2015–16',
        summary:'该组作品属于 The Atlas Group 对黎巴嫩战争影像档案的处理。作品把汽车炸弹事件相关的车辆发动机图像组织成一套看似调查档案的视觉系统：爆炸后发动机往往被冲击抛离车体，因此发动机成为暴力现场中一种异常具体的残余物。Raad 的关键动作不是只拍摄一台发动机，而是借助报刊/档案研究，把不同事件的图像、日期与地点重新编排，使新闻摄影从一次性事件图变成可比较的系列。2015–16 MoMA 回顾展又把这一系列放进 The Atlas Group 与后期 Scratching 项目的连续空间中，安装现场由 Thomas Griesel 摄影记录。',
        actions:['围绕黎巴嫩战争中的汽车炸弹建立事件与图像档案。','从新闻/档案材料中提取爆炸后被抛离车辆的发动机这一重复视觉母题。','将不同事件重新组织成系列，使单张新闻图像转为可比较的档案结构。','在 MoMA 回顾展中把该系列与其他 Atlas Group 文献、录像和后期装置重新并置。'],
        sourceUrl:'https://www.moma.org/calendar/exhibitions/1493/installation_images/11392',images:[],
        relations:[rel('展览','MoMA Walid Raad, 2015–16','MoMA 安装图明确识别 My neck is thinner than a hair: Engines 1996–2001。'),rel('展览','图片版权','安装图编号 IN2337.20，Photograph by Thomas Griesel；MoMA 指明 reproduction 需经 Art Resource / Scala Archives 申请，故不复制。')]
      }),
      project({
        title:'Oh God, he said, talking to a tree',cluster:'digital print series / Lebanon 2006 / serial image archive',period:'2004/2008',
        summary:'MoMA 馆藏把这件作品明确登记为31张数字打印组成的系列，每张纸幅约43.1 × 55.9 cm，由 AG_Publishers 在 New York / Beirut 出版并印制，edition 7。系列内部不是抽象标题的重复：在线目录保留 Beirut、Tyre、Khiyam、Sidon 等地点和2006年7–8月的具体日期，使观看者必须在重复版式与不同地点/日期之间来回读取。作品因此把战争时期的图像经验压缩成一套有出版、印刷和版次规则的实体序列，而不是把“战争档案”停留在数据库层面。',
        actions:['将与黎巴嫩2006年战争时空相关的图像组织为31张连续数字打印。','在标题层面保留 Beirut、Tyre、Khiyam、Sidon 等地点与具体日期，使每张图成为系列中的事件节点。','由 AG_Publishers 在纽约与贝鲁特完成出版/打印。','以 edition 7 的实体版次进入收藏与展览，使档案序列转成可安装的墙面作品。'],
        sourceUrl:'https://www.moma.org/collection/works/119114',images:[],
        relations:[rel('收藏','MoMA','Series of 31 digital prints；each sheet 16 15/16 × 22 in (43.1 × 55.9 cm)；edition 7。'),rel('展览','图片/版权','MoMA 在线提供31件系列图像并标注 © 2026 Walid Raad；未获本地再发布许可，故仅记录入口。')]
      }),
      project({
        title:'Oh God, he said, talking to a tree — 2015 MoMA spatial re-installation',cluster:'installation version / serial prints / retrospective',period:'2015–2016',
        summary:'同一31件数字打印系列在2015 MoMA 回顾展中获得了新的空间语境。机构安装图把作品识别为 2004/2008 系列，并与 The Atlas Group 的其他档案式作品共同出现。这里的版本差异不在作品纸张本身，而在观看尺度：原本可以逐张阅读地点和日期的版画被放回一个由摄影、录像、笔记本、讲座/表演和后期装置共同构成的回顾展中，观众必须在“单件图像证据”和 Raad 故意制造的不稳定档案权威之间切换。',
        actions:['保留31件数字打印的系列身份与固定版次。','在回顾展空间中重新安排其与 The Atlas Group 其他媒介的邻接关系。','让观众从逐张读日期/地点转向在整个虚构档案机构语境中判断图像可信度。'],
        sourceUrl:'https://www.moma.org/calendar/exhibitions/1493/installation_images/11399',images:[],
        relations:[rel('展览','MoMA Walid Raad retrospective','12 Oct 2015–31 Jan 2016；MoMA 强调 The Atlas Group 与 Scratching 两个长期项目及 performance/storytelling。'),rel('展览','安装图版权','MoMA installation photographs by Thomas Griesel；机构要求 reproduction licensing，故不复制入仓库。')]
      }),
      project({
        title:'Better Be Watching the Clouds',cluster:'artist book / digital print / paper object',period:'2019',
        summary:'Walker Art Center 馆藏显示，这件后期作品以书/纸面对象而非大型装置存在：digital print on paper，并配 cardboard covers，闭合尺寸约27.9 × 21.6 × 0.6 cm。把它单列的意义在于补足 Raad 实践中的物质尺度变化：同一位艺术家既会搭建需要观众进入的表演平台，也会把图像与叙事压缩进可以手持、翻阅和收藏的纸本结构。作品的观看不再依赖投影或大型建筑，而由封面、纸页、装订厚度和阅读顺序控制。',
        actions:['以数字方式输出图像到纸张。','使用 cardboard covers 把纸面序列组织成可闭合的书/档案对象。','通过翻页和阅读顺序替代大型装置中的身体移动。'],
        sourceUrl:'https://www.walkerart.org/collections/artwork/better-be-watching-the-clouds/',images:[],
        relations:[rel('收藏','Walker Art Center Library','2019；digital print on paper; cardboard covers；11 × 8 1/2 × 1/4 in closed；Rosemary Furtak Collection。'),rel('展览','图片状态','Walker 页面提供2张对应图并设 reproduction request；未确认自由再发布，本地图片暂缺。')]
      })
    ]
  }
};
