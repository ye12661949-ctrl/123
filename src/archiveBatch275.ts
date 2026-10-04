import type { ArtistArchive, ArchiveProject, ArchiveRelation } from './archiveData';

const rel=(kind:ArchiveRelation['kind'],label:string,detail?:string):ArchiveRelation=>({kind,label,detail});
const project=(p:ArchiveProject)=>p;

export const archiveBatch275:Record<string,ArtistArchive>={
  'cao-fei':{
    artistId:'cao-fei',
    projectCoverage:'本批新增 6 个 RMB City / Second Life 作品级与展览版本节点，补足虚拟城市从建设、在线运营、录像记录到实体展厅转换的具体生产机制。',
    imageCoverage:'6 / 6 均记录 Guggenheim、MoMA PS1、Serpentine、UCCA 等权威作品/安装图入口；未确认开放再发布许可者不复制入仓库，并明确版权/来源状态。',
    note:'作品级深化批次。重点不是泛谈“虚拟与现实”，而是记录曹斐如何注册 avatar、购买/筹措 Second Life 虚拟土地、搭建城市、组织用户活动、录屏/拍摄虚拟空间，以及项目如何被重新物质化为录像、版画、电脑终端和展厅安装。',
    projects:[
      project({
        title:'RMB City: A Second Life City Planning by China Tracy (aka: Cao Fei) — virtual-city construction',cluster:'Second Life / virtual architecture / urbanism / online community',period:'2007–2011',
        summary:'曹斐在2006年接触 Second Life 后，以 avatar “China Tracy”进入平台并长期活动。她不是简单截取游戏画面，而是在 Second Life 的可建造世界中规划并发展一座名为 RMB City 的虚拟都市。Guggenheim 的教学档案说明，为筹措城市建设，她把想象中的虚拟地块出售给艺术界参与者，以现实艺术市场的购买力反向购买虚拟房地产。城市把中国高速城市化的标志压缩、错置成数字拼贴：天安门广场被改造成兼作市政厅和市民会面的游泳池，北京国家体育场变成 People’s Park，上海东方明珠被重新命名/改造成 People’s Tower；毛像、熊猫、购物中心、奥运建筑等彼此并置。项目因此不是预先渲染好的“未来城市图片”，而是一套能够被 avatar 进入、占用、交易和继续变化的在线空间。',
        actions:['以 China Tracy 身份长期进入 Second Life，学习平台的 avatar、土地、建筑与经济系统。','规划并搭建一座可被用户实际进入的虚拟都市，而不是只制作城市概念图。','把天安门、鸟巢、东方明珠、毛像、熊猫等现实中国符号拆解后重新组合为数字建筑/景观。','通过向艺术界利益相关者出售想象地块等方式，为 Second Life 内的虚拟土地与建设筹资。','让机构、收藏者和普通 Second Life 用户以 avatar 进入城市，使作品在后续运营中继续变化。'],
        sourceUrl:'https://www.guggenheim.org/teaching-materials/teaching-modern-and-contemporary-asian-art/cao-fei-%E6%9B%B9-%E6%96%90',images:[],
        relations:[rel('收藏','Guggenheim — Cao Fei / RMB City','官方艺术家与教学页面提供多张 RMB City still，并说明城市结构、China Tracy、Second Life经济与虚拟土地筹资机制。'),rel('展览','图片状态','Guggenheim 页面有对应作品图；未确认允许仓库内再发布，故仅记录官方入口，不复制。')]
      }),
      project({
        title:'RMB City — Serpentine commission / public-space operating phase',cluster:'online commission / public programme / participatory virtual city',period:'2008–2010',
        summary:'Serpentine 委任阶段把 RMB City 从个人搭建的 Second Life 场景推进成持续运营的公共艺术社区。机构资料说明，曹斐完成建设后，虚拟建筑在约两年时间里由合作机构与个人收藏者占用，他们在其中主持展览和文化活动，并向所有 Second Life 用户开放。这里“观众参与”不是展厅里的按钮互动：观众必须以 avatar 进入网络城市，在同一虚拟地产和公共空间中移动、会面和参加活动。作品的内容因此部分由城市后续发生的社会关系生成，而不是由艺术家一次性封闭完成。',
        actions:['接受 Serpentine 委任，继续建设并公开呈现 RMB City。','完成城市主要建筑后，把部分虚拟建筑交由合作机构/收藏者在约两年运营期中使用。','协调在线展览、文化活动与用户访问，使城市成为持续运行的艺术社区。','让 Second Life 用户通过 avatar 在空间中行走、会面和参加项目，使参与行为成为作品的一部分。'],
        sourceUrl:'https://shop.serpentinegalleries.org/products/cao-fe-rmb-city-sketch',images:[],
        relations:[rel('展览','Serpentine Gallery commission','官方资料说明2008年委任、秋季完成建设，以及随后约两年的机构/收藏者入驻与公共活动。'),rel('展览','图片状态','Serpentine 官方页面含 RMB City 相关视觉资料；版权未确认开放再发布，仓库图片暂缺。')]
      }),
      project({
        title:'RMB City — Serpentine lobby: translating an online city into a physical gallery',cluster:'installation / computer terminal / 2D-3D visualisation / virtual viewing platform',period:'2008',
        summary:'RMB City 进入 Serpentine 实体空间时，并没有假装把整座虚拟城市“实体复刻”。官方资料明确指出，画廊 lobby 同时陈列城市的二维与三维 visualisations，并设置电脑，让观众连接到可俯瞰施工现场的 virtual viewing platform；平台还持续提供城市建设过程的视频更新。于是实体展厅承担的是入口、索引和监控站功能：墙面/对象提供规划视觉材料，电脑屏幕则把伦敦现场重新接回仍在 Second Life 中建设和变化的城市。这个版本值得与纯在线阶段分开记录，因为观看方式从 avatar 内部漫游增加了“站在实体画廊观看虚拟施工”的第二层。',
        actions:['从 Second Life 城市中输出二维与三维 visualisations，在实体 lobby 中展示。','在展厅配置电脑终端，使没有预先登录 Second Life 的现场观众也能接触项目。','建立俯瞰城市施工现场的 virtual viewing platform，并加入施工过程 video updates。','同时通过 Serpentine 网站提供远程访问，使实体展厅和网络入口并行。'],
        sourceUrl:'https://shop.serpentinegalleries.org/products/cao-fe-rmb-city-sketch',images:[],
        relations:[rel('展览','Serpentine Gallery lobby, London','官方项目说明明确列出2D/3D visualisations、computer access、virtual viewing platform与construction video updates。'),rel('展览','版本差异','相较 Second Life 原生版本，此版本增加实体画廊入口与电脑终端，把“作为居民进入”与“作为展览观众观察建设”两种观看位置并置。')]
      }),
      project({
        title:'RMB City Sketch — print translation of the virtual plan',cluster:'print / virtual-city plan / edition',period:'2008',
        summary:'RMB City 同时被转换为可收藏的平面版画。Serpentine 的官方 edition 记录为 giclée on Somerset Velvet 225 gsm，45 × 57 cm，edition of 120，并由艺术家亲笔签名编号。这个对象说明虚拟城市并不只存在于服务器和录像中：曹斐把其城市规划/视觉构成压缩成固定纸面图像，通过高精度喷墨输出在有明确克重与表面特性的 Somerset Velvet 纸上。与 Second Life 中可漫游、持续变化的城市相比，这一版本取消互动和时间性，成为固定视角的版次对象，因此适合在网站里作为同一项目的媒介转换单独研究。',
        actions:['从 RMB City 的数字城市规划/视觉材料中选择固定平面构图。','以 giclée 高精度喷墨方式输出到 Somerset Velvet 225 gsm 纸张。','制作120版，逐张签名与编号，把无限可复制的数字城市转成有限版实体对象。'],
        sourceUrl:'https://shop.serpentinegalleries.org/products/cao-fe-rmb-city-sketch',images:[],
        relations:[rel('出版','Serpentine Editions','RMB City Sketch (2008), giclée on Somerset Velvet 225 gsm, 45 × 57 cm, edition 120, signed and numbered。'),rel('展览','图片状态','Serpentine 官方商店有该版画对应图；仅记录来源，未确认自由再发布。')]
      }),
      project({
        title:'RMB City / China Tracy — MoMA PS1 retrospective installation context',cluster:'retrospective / installation / video-photography-sculpture context',period:'2016',
        summary:'2016 MoMA PS1 个展把 RMB City 放回曹斐更长的媒介谱系中。MoMA 说明艺术家以 China Tracy 身份花费数年发展 Second Life 虚拟城市，并将其描述为把“过量的中国现实符号”与对未来的快速想象混合起来的 Technicolor playground。重要的是，这次展览并非网页展示：PS1 First Floor Main Galleries 同时组织 video、photography、sculpture 与 installation，机构保存63张 installation images。对作品档案而言，这一版本证明 RMB City 在 Second Life 原平台之外，会与实体物件、屏幕和艺术家其他影像项目共同被重新编排；观看者在真实展厅移动，通过不同媒介片段重新进入已经存在多年的虚拟城市。',
        actions:['从长期 Second Life 项目中选择可在回顾展中呈现的影像/视觉材料。','把 RMB City 与摄影、录像、雕塑和装置共同编入 PS1 一层主展厅。','通过实体展览动线让观众把虚拟城市与 Whose Utopia 等现实工业题材作品进行并置阅读。'],
        sourceUrl:'https://www.moma.org/calendar/exhibitions/4945',images:[],
        relations:[rel('展览','MoMA PS1 — Cao Fei, 2016','官方展览页明确记录 RMB City 2008–11、China Tracy、First Floor Main Galleries，并保存63张 installation images。'),rel('展览','图片版权/来源','MoMA PS1 installation images 有官方入口；版权状态未确认开放本地复制，故仅保存来源。')]
      }),
      project({
        title:'RMB City — UCCA “Staging the Era” retrospective recontextualisation',cluster:'retrospective / simulation / installation history',period:'2021',
        summary:'UCCA 2021大型回顾展再次把 RMB City 从已经结束的 Second Life 历史平台带回实体机构。UCCA 的作品音频说明：曹斐2007年创建 China Tracy，并开始建设一座把多个中国城市特征压缩到一起的虚拟 metropolis，之后数年继续参与城市运营。回顾展整体由 Beau Architects 设计，并以 The South、The City、The Workshop、The Simulation 四个板块组织；因此 RMB City 不再只作为早期“互联网艺术”孤立观看，而被放进曹斐从珠三角现实观察、工厂、城市到模拟世界的连续方法中。这个空间版本的重要差异在于，观众已无法把 Second Life 当成当下新平台，而是在实体回顾展里把城市作为一段技术史、社会史和艺术家长期世界建构方法的档案来阅读。',
        actions:['从历史 RMB City 项目中重新组织材料进入2021职业回顾展。','由整体展陈设计把作品纳入 The City / The Simulation 等主题脉络，而非恢复原始在线生活世界。','通过作品、文献和展览空间让观众回看虚拟城市从2007建设到多年运营的时间跨度。'],
        sourceUrl:'https://ucca.org.cn/en/exhibition/cao-fei/',images:[],
        relations:[rel('展览','UCCA — Cao Fei: Staging the Era','12 Mar–6 Jun 2021；UCCA称其为曹斐在中国首个大型个展及当时最全面回顾展，展览设计 Beau Architects。'),rel('展览','UCCA RMB City audio','官方音频页确认2007创建 China Tracy、建设虚拟都市，并在之后数年继续运营。'),rel('展览','图片状态','UCCA 页面有 Stefen Chow 拍摄的安装现场；未确认开放仓库再发布许可，故图片暂缺并保留 credit。')]
      })
    ]
  }
};
