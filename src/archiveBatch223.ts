import type { ArtistArchive, ArchiveRelation } from './archiveData';
const rel=(kind:ArchiveRelation['kind'],label:string,detail?:string):ArchiveRelation=>({kind,label,detail});

export const archiveBatch223:Record<string,ArtistArchive>={
'laia-abril':{
 artistId:'laia-abril',
 projectCoverage:'作品级深化：On Abortion。把长期研究拆成资料采集、摄影/文本/声音证据、展览空间版本与摄影书四个物质层，并记录 Arles 2016、Ljubljana 2017、Chicago 2021、Centre Pompidou 2023–24 等版本。',
 imageCoverage:'Laia Abril 官网为项目与各展览版本提供官方作品/安装图；本站记录这些官方图像入口。页面未声明开放再发布许可，因此不把网页图像复制进仓库；需要原图时应向艺术家/展览机构确认授权。',
 note:'On Abortion 的关键不是“拍摄堕胎”这一单一动作，而是 Abril 把无法被一张照片直接呈现的制度性暴力拆成图像、证词、历史材料、物件与文本证据，再重新编排为展览和书。不同场馆的墙面、桌面、声音与图像密度会改变阅读节奏。',
 projects:[{
  title:'On Abortion — evidence system rather than a single photographic series',cluster:'research photography / reproductive rights / archive / testimony',period:'2016–ongoing circulation',
  summary:'A History of Misogyny 的第一章。Abril 从历史与当代案例出发，研究当安全、合法、免费的终止妊娠途径被法律、宗教和社会压力阻断后，人们实际采用的危险方法以及随之产生的死亡、刑事追诉和污名。作品不是一组统一风格肖像，而是把摄影、写作、声音和视觉证据编织成研究网络；艺术家官网明确将其描述为 visual, audio and textual evidence 的集合。',
  actions:['跨国家与历史时期搜集因堕胎受限而产生的案例、制度材料与个人叙述。','把摄影与文字、声音、历史资料并列，避免让单张“强照片”代替复杂因果链。','在展厅中把不同证据单元分布于墙面和观看路径，让观众通过逐项阅读建立制度关联。','把项目从2016 Arles首展持续适配到不同场馆；每次展陈不是简单复制，而是在既有空间重新组织证据密度与阅读顺序。'],
  sourceUrl:'https://www.laiaabril.com/project/on-abortion/',images:[],relations:[rel('展览','Les Rencontres d’Arles','4 Jul–25 Sep 2016；项目首次以装置形式推出，curated by Sam Stourdzé'),rel('展览','Galerija Kresija, Ljubljana','6 Oct–2 Nov 2017；curated by Teja Reba'),rel('展览','Museum of Contemporary Photography, Chicago','19 Jan–23 May 2021；curated by Karen Irvine and Kristin Taylor'),rel('展览','Centre Pompidou — Corps à Corps','6 Sep 2023–25 Mar 2024；curated by Julie Jones')]},{
  title:'On Abortion — photobook as a fixed research sequence',cluster:'photobook / editing / text-image sequence / publishing',period:'2018',
  summary:'Dewi Lewis 2018出版版本把可变的空间装置重新压缩为196页固定阅读序列，含114幅 colour / duotone plates，245 × 188 mm，hardback。艺术指导由 Laia Abril 与 Ramon Pez 完成。书的物质结构使照片、ephemera 与文字必须通过翻页而非展厅移动被阅读，因此它不是展览目录，而是项目的另一种编辑版本。',
  actions:['从开放式研究材料中选择114幅彩色/双色调图版进入书。','与 Ramon Pez 共同进行 art direction，把图像、文字和 ephemera 固定为196页顺序。','把展览中可并行观看的证据转化为逐页阅读，使因果关系通过版面与翻页节奏建立。'],
  sourceUrl:'https://www.laiaabril.com/book/on-abortion-book/',images:[],relations:[rel('出版','Dewi Lewis Publishing','2018；hardback；196 pages；114 colour and duotone plates；245 × 188 mm'),rel('奖项','Paris Photo/Aperture Photobook of the Year','winner, 2018'),rel('设计','Laia Abril + Ramon Pez','art direction')]
 }],awards:['Paris Photo/Aperture Photobook of the Year — On Abortion, 2018'],exhibitions:['Les Rencontres d’Arles — On Abortion, 2016','Galerija Kresija — On Abortion, 2017','MoCP Chicago — On Abortion, 2021','Centre Pompidou — Corps à Corps, 2023–2024'],sources:[{label:'Laia Abril · On Abortion',url:'https://www.laiaabril.com/project/on-abortion/'},{label:'Laia Abril · On Abortion book',url:'https://www.laiaabril.com/book/on-abortion-book/'},{label:'Laia Abril · Centre Pompidou version',url:'https://www.laiaabril.com/exhibition/abortion-centre-pompidou/'}]
},
'hito-steyerl':{
 artistId:'hito-steyerl',projectCoverage:'作品级深化：Hell Yeah We Fuck Die!。补足标题数据来源、机器人测试影像、战争图像、混凝土/light-box 字块、双空间布局、声音和观众坐席功能，并记录 Castello di Rivoli 的 site-specific 版本。',
 imageCoverage:'Castello di Rivoli 官方页面提供作品/展陈图及专门的无障碍空间描述；未确认开放再发布许可，因此本站只保存官方图像入口和机构来源，不复制受限原图。',note:'这件作品的标题不是随意的挑衅句，而来自2010–2014美国榜单歌曲标题中最常见的五个词。Steyerl 把流行文化统计、机器人暴力测试、战争影像、建筑障碍与可坐的发光文字块压进同一个空间，使“娱乐/技术进步/暴力”在身体层面发生碰撞。',
 projects:[{
  title:'Hell Yeah We Fuck Die! — pop-data words turned into architecture',cluster:'video installation / robotics / war / pop culture / architecture',period:'2016–2017',
  summary:'大型多媒体装置把 HELL / YEAH / WE / FUCK / DIE 五个词做成粗糙混凝土体块，内部嵌发光 light boxes；这些字块既是雕塑也可成为观众座位。Castello di Rivoli 的版本针对城堡空间重新布置在两个相邻房间，并加入金属 parapets / partitions、录像与雕塑，观众需要在障碍物和屏幕之间移动。标题五词来自2010–2014年美国排行榜热门歌曲标题中最常见词汇的统计。',
  actions:['把流行歌曲标题的统计结果转译成五个实体文字雕塑，而不是只作为影片字幕。','以粗糙混凝土包围内部发光 light box，让语言同时成为照明、建筑和坐具。','剪入 humanoid robots 被踢、推、击打等耐受测试的影像，并与战争地区图像并置。','设计具有侵略性的声音节奏，使声音不只是背景，而成为观众身体感受到的压力。','在 Castello di Rivoli 将作品适配为两个相邻房间，以金属护栏/隔断制造不稳定、受阻的行走路径。','允许观众坐在字块上观看，但座位的粗粝材质和不安定空间使“舒适观看”本身受到破坏。'],
  sourceUrl:'https://www.castellodirivoli.org/accessibilita/sinestesie-il-museo-in-tutti-i-sensi/hito-steyerl/',images:[],relations:[rel('展览','Castello di Rivoli','site-specific layout across two adjacent rooms'),rel('材料','rough concrete + internally illuminated light boxes','word blocks also function as seating'),rel('影像','humanoid robot stress tests + war-zone footage','technology and normalized violence are edited together')]
 }],awards:[],exhibitions:['Castello di Rivoli — Hell Yeah We Fuck Die!'],sources:[{label:'Castello di Rivoli · Hito Steyerl / Hell Yeah We Fuck Die!',url:'https://www.castellodirivoli.org/accessibilita/sinestesie-il-museo-in-tutti-i-sensi/hito-steyerl/'}]
},
'cao-fei':{
 artistId:'cao-fei',projectCoverage:'作品级深化：RMB City。把 Second Life 中真正发生的建城、虚拟地产筹资、avatar 活动、城市符号重组与后续多媒介输出拆开记录，不再只把它概括成“虚拟城市”。',
 imageCoverage:'Guggenheim 官方教学档案提供 RMB City 多张作品 still、China Tracy avatar 与相关城市符号图像，并可逐图查看 caption/source；本站保存官方图像入口。作品图版权未声明为开放许可，因此不直接复制。',note:'RMB City 的关键是它真的作为 Second Life 中的社会空间运行：曹斐不只是渲染一段未来城市动画，而是筹资购买虚拟土地、建设城市、以 China Tracy 身份组织活动，并让其他 avatar 进入、交易和社交。',
 projects:[{
  title:'RMB City: A Second Life City Planning by China Tracy (aka: Cao Fei)',cluster:'Second Life / virtual city / avatar / social participation',period:'2007–2011',
  summary:'曹斐2006年接触 Second Life 后，以 avatar “China Tracy” 设计并建设 RMB City。Guggenheim 资料明确记录，为了在平台中完成城市建设，她向艺术界 stakeholder 出售虚拟土地以筹资购买 Second Life real estate；城市随后成为 avatar 可进入、互动、交易并参加活动的运行空间。视觉上，她把天安门、鸟巢、东方明珠等中国城市/政治符号重新拼装：天安门被转成 swimming pool / city hall / meeting place，Beijing National Stadium 成为 People’s Park，Oriental Pearl TV Tower 成为 People’s Tower。',
  actions:['先进入 Second Life 学习平台的建造、土地、avatar 与经济机制，而不是把游戏界面仅当影像素材。','以 China Tracy 身份制定城市规划，把现实中国不同城市、时代和政治/商业符号做成数字 collage。','向艺术界参与者出售想象中的 plots，借现实艺术市场资金购买虚拟地产，令“虚拟城市”依赖真实资本流。','在平台中真正建设可进入的城市空间，并组织 events、photo shoots 与 virtual-gallery collaborations。','把 Tiananmen / Bird’s Nest / Oriental Pearl 等现实地标改写用途，让国家象征、消费、娱乐和乌托邦规划混杂。','城市建成后继续转化为视频、截图和其他展览媒介，因此作品既是在线社会过程，也是可进入美术馆的档案/影像。'],
  sourceUrl:'https://www.guggenheim.org/teaching-materials/teaching-modern-and-contemporary-asian-art/cao-fei-%E6%9B%B9-%E6%96%90',images:[],relations:[rel('平台','Second Life','city exists and operates inside the virtual-world platform'),rel('身份','China Tracy','Cao Fei avatar; organizes events, photo shoots and collaborations'),rel('经济机制','virtual land / art-world stakeholders','fundraising for Second Life real estate becomes part of production'),rel('城市元素','Tiananmen / Beijing National Stadium / Oriental Pearl TV Tower','real landmarks are digitally recombined and reassigned new functions')]
 }],awards:[],exhibitions:['RMB City — Second Life, from 2007'],sources:[{label:'Guggenheim · Cao Fei teaching archive / RMB City',url:'https://www.guggenheim.org/teaching-materials/teaching-modern-and-contemporary-asian-art/cao-fei-%E6%9B%B9-%E6%96%90'},{label:'Guggenheim · Cao Fei artist archive',url:'https://www.guggenheim.org/artwork/artist/cao-fei'}]
}
};
