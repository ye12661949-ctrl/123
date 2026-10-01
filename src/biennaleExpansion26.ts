import type { Artist } from './data';
import type { ArtistArchive } from './archiveData';

const source = 'https://www.labiennale.org/en/art/2024/artists';

const records = [
  ['lauren-halsey','Lauren Halsey','1987','Los Angeles','以建筑、雕塑、现成图像与社区视觉档案把南洛杉矶的招牌、壁画、街头文字和黑人流行文化转译成纪念碑式空间。',['建筑性装置','社区档案','图像采集'],['黑人城市经验','社区','公共空间'],['装置','雕塑'],'Nucleo Contemporaneo'],
  ['claire-fontaine','Claire Fontaine','2004–','Paris / Palermo','以现成品、文字、霓虹、雕塑和挪用策略研究主体性、劳动、政治语言与集体身份；2024 双年展标题取自其 Foreigners Everywhere 系列。',['挪用','现成品','文字霓虹'],['迁移','政治语言','身份'],['装置','雕塑','文字'],'Nucleo Contemporaneo'],
  ['leilah-babirye','Leilah Babirye','1985','New York / Kampala','使用木雕、陶瓷、金属和回收材料塑造酷儿非洲人物与谱系，将被贬抑的材料和身份重新赋予尊严。',['木雕','陶瓷','回收材料'],['酷儿身份','乌干达','社群'],['雕塑','装置'],'Nucleo Contemporaneo'],
  ['agnes-questionmark','Agnes Questionmark','1995','New York / Rome','通过表演、雕塑、医学空间和身体改造想象身体分类、性别、生殖与跨物种身份的不稳定边界。',['行为','身体介入','医学场景'],['身体','性别','生殖'],['行为','装置','雕塑'],'Nucleo Contemporaneo'],
  ['manauara-clandestina','Manauara Clandestina','1993','Brazil','以时装、表演、影像和身体造型连接亚马孙原住民/城市经验、跨性别身份与流行视觉文化。',['时装','表演','身体造型'],['亚马孙','跨性别','城市身份'],['表演','服装','影像'],'Nucleo Contemporaneo'],
  ['sandra-poulson','Sandra Poulson','1995','Luanda / London','从罗安达日常物、服装、基础设施与城市记忆出发，通过软雕塑、装置和表演研究后殖民城市生活。',['软雕塑','日常物采集','装置'],['罗安达','后殖民城市','日常生活'],['装置','雕塑','表演'],'Nucleo Contemporaneo'],
  ['kang-seung-lee','Kang Seung Lee','1978','Los Angeles / Seoul','通过素描、刺绣、摄影与档案研究保存酷儿艺术家、行动者和艾滋病历史中容易消失的身体记忆。',['档案研究','刺绣','素描'],['酷儿档案','艾滋病史','记忆'],['绘画','纺织','装置'],'Nucleo Contemporaneo'],
  ['kudzanai-chiurai','Kudzanai Chiurai','1981','Harare / international','使用摄影、电影、绘画、海报和装置重构非洲政治权力、媒介形象与虚构国家叙事。',['编排摄影','电影','海报'],['政治权力','非洲','媒介'],['摄影','电影','装置'],'Nucleo Contemporaneo'],
  ['nazira-karimi','Nazira Karimi','1996','Vienna / Almaty','以装置和跨媒介实践处理迁移、语言、家庭记忆与中亚身份，在材料和空间中组织私人历史。',['装置','材料研究','空间叙事'],['中亚','迁移','家庭记忆'],['装置','混合媒介'],'Nucleo Contemporaneo'],
  ['taylor-nkomo','Taylor Nkomo','1997','Zimbabwe / South Africa','以绘画和混合媒介构造人物、土地与精神性之间的关系，将个人经验连接到南部非洲的社会环境。',['绘画','混合媒介'],['人物','土地','精神性'],['绘画'],'Nucleo Contemporaneo'],
  ['beatriz-cortez','Beatriz Cortez','1970','Los Angeles / El Salvador','以钢铁雕塑、建筑结构和植物性想象讨论迁移、时间、原住民知识与未来考古。',['金属制作','建筑性雕塑','研究'],['迁移','时间','原住民知识'],['雕塑','装置'],'Nucleo Contemporaneo']
] as const;

const rosterArtists: Artist[] = records.map(([id,name,born,base,intro,methods,subjects,outputs,section]) => ({
  id,name,born,base,intro,methods:[...methods],subjects:[...subjects],outputs:[...outputs],institutions:['La Biennale di Venezia'],achievements:[`Venice Biennale 2024 · ${section}`],whyImportant:'作为 2024 威尼斯双年展官方国际主展索引的一部分补入；先建立可靠制度节点，再继续深化代表项目、材料和制作步骤。',projects:[{year:'2024',title:`Venice Biennale 2024 · ${section}`,type:'威尼斯双年展参展节点',facts:['依据 La Biennale di Venezia 官方 2024 艺术家名单与展场资料建立参展记录。'],reading:'用于把双年展从少量样本扩展为可逐届追踪的艺术家索引。'}],images:[],sourceUrl:source,sourceLabel:'La Biennale di Venezia'
}));

const expansionArtists: Artist[] = [
  {
    id:'arthur-jafa',name:'Arthur Jafa',born:'1960',base:'Los Angeles',
    intro:'以电影、录像、摄影与 found footage 建立黑人视觉经验的高强度蒙太奇，把流行文化、网络图像、历史暴力、音乐和日常身体并置。',
    methods:['found footage','蒙太奇','影像装置','图像档案'],subjects:['黑人经验','媒介再现','音乐','暴力','美国历史'],outputs:['录像','影像装置','摄影','雕塑'],institutions:['La Biennale di Venezia','MoMA','Serpentine'],achievements:['Golden Lion — Venice Biennale 2019'],
    whyImportant:'Jafa 把“图像档案如何被重新剪辑”推到当代影像艺术核心：意义并不只来自单个镜头，而来自不同历史、情绪与传播等级的图像被迫相邻时产生的节奏和冲突。',
    projects:[{year:'2016',title:'Love Is the Message, The Message Is Death',type:'found-footage video montage',facts:['把新闻、网络视频、体育、音乐表演、历史影像与私人/流行文化材料剪入同一短片。','以 Kanye West 的 Ultralight Beam 组织强烈的音乐—图像节奏。'],reading:'可把它当成“蒙太奇即研究方法”的典型：黑人生命中的狂喜、创造力、身体能力与结构性暴力不被分开归档，而在同一时间轴上互相冲撞。'},{year:'2019',title:'The White Album',type:'影像装置',facts:['以白人身份、亲密性、恐惧与种族结构为核心组织 found / recorded material。','在第 58 届威尼斯双年展展出并获金狮奖。'],reading:'它把 Jafa 的档案方法从黑人图像的内部复杂性转向“白性如何被影像建构和感知”。'}],images:[],sourceLabel:'La Biennale di Venezia',sourceUrl:'https://www.labiennale.org/en/art/2019/partecipants/arthur-jafa'
  },
  {
    id:'tania-bruguera',name:'Tania Bruguera',born:'1968',base:'Havana / Cambridge, MA',
    intro:'以行为、社会实践和长期公共项目研究国家权力、迁移、公民身份与言论自由，并提出 Arte Útil（有用艺术）把艺术从象征表达推进到现实社会机制。',
    methods:['行为艺术','社会实践','参与式艺术','制度介入','长期研究'],subjects:['权力','迁移','公民身份','言论自由','政治'],outputs:['行为','公共项目','装置','机构平台'],institutions:['Tate','MoMA','Guggenheim'],achievements:['Tate Turbine Hall Hyundai Commission 2018'],
    whyImportant:'她适合放在“作品是否能真正改变现实规则”这条线上：参与者、法律身份、公共机构和社会服务不是作品的背景，而可能直接成为作品材料。',
    projects:[{year:'2008',title:"Tatlin’s Whisper #5",type:'行为 / 权力结构',facts:['由骑警进入展场，以控制人群的专业动作驱赶和重新组织观众。','观众并非观看权力的图像，而是在身体上被权力技术直接编排。'],reading:'作品把通常发生在示威或公共秩序管理中的动作移入美术馆，测试制度空间是否会让同一种强制变得可接受。'},{year:'2018',title:'10,148,451 — Tate Turbine Hall',type:'参与式 / 社会实践',facts:['项目围绕迁移、邻里与制度信任展开。','Turbine Hall 被转成需要观众身体参与和集体行动的公共场域。'],reading:'重点不是“关于移民的展览”，而是让博物馆承担社会关系生产的责任。'}],images:[],sourceLabel:'Tate',sourceUrl:'https://www.tate.org.uk/art/artists/tania-bruguera-11982'
  },
  {
    id:'deana-lawson',name:'Deana Lawson',born:'1979',base:'Los Angeles / New York',
    intro:'以大画幅、精密布置的肖像摄影研究黑人家庭、亲密关系、身体、精神性与自我呈现；画面常看似私人瞬间，实际经过严格选址、摆姿和物件组织。',
    methods:['大画幅摄影','编排式肖像','室内布景','长期肖像研究'],subjects:['黑人生活','亲密关系','家庭','身体','精神性'],outputs:['摄影','大型装裱照片','展览装置'],institutions:['Guggenheim','MoMA PS1','Whitney Museum'],achievements:['Hugo Boss Prize 2020'],
    whyImportant:'她把纪实摄影与 staged photography 的边界变得非常复杂：真实人物、真实住宅与高度编排同时存在，因此“真实性”来自关系和细节，而不等于抓拍。',
    projects:[{year:'2013–',title:'Domestic / diasporic portrait practice',type:'编排式大画幅肖像',facts:['常在住宅内部寻找人物与空间。','通过家具、墙面照片、织物、饰品、身体姿势和直视镜头建立密集画面。','拍摄对象来自美国及非洲、加勒比等黑人离散语境。'],reading:'观看时应同时追踪人物与房间：背景物件不是装饰，而是身份、欲望、阶级与家庭历史的第二套肖像。'},{year:'2021',title:'Centropy',type:'博物馆个展 / 摄影装置',facts:['在 Guggenheim 展出大型摄影作品。','把不同地点和年份的肖像组织为关于亲密、秩序与宇宙关联的整体。'],reading:'她的单张照片具有强烈自主性，但展览编排进一步说明这些肖像并非互不相干的“人物图库”。'}],images:[],sourceLabel:'Guggenheim',sourceUrl:'https://www.guggenheim.org/artwork/artist/deana-lawson'
  },
  {
    id:'dayanita-singh',name:'Dayanita Singh',born:'1961',base:'New Delhi',
    intro:'把摄影书、档案、可移动木结构和展览编排结合起来，持续重新组合自己的照片，使摄影作品同时像书、博物馆、家具和不断改版的档案。',
    methods:['摄影档案','摄影书','模块化展示','编辑','序列'],subjects:['档案','家庭','印度社会','记忆','观看制度'],outputs:['摄影书','摄影','模块化装置','移动博物馆'],institutions:['Hayward Gallery','Art Institute of Chicago','Kiran Nadar Museum of Art'],achievements:['Hasselblad Award 2022'],
    whyImportant:'Singh 对摄影最关键的贡献之一，是把“照片怎样被编辑、储存、搬运和重新排列”变成作品本体；摄影不再以固定墙面序列作为最终状态。',
    projects:[{year:'2013–',title:'Museum Bhavan',type:'移动摄影博物馆 / 模块化档案',facts:['制作可开启、折叠、移动的木制结构存放与展示照片。','多个“museum”从庞大个人档案中按主题不断重新编排。','同一批照片可以因展场和编辑关系产生不同版本。'],reading:'它把摄影展从固定挂墙改造成可重写的数据库：展示家具、档案逻辑与照片内容具有同等重要性。'},{year:'2008',title:'Sent a Letter',type:'摄影书 / book-object',facts:['以一组小型 accordion books 组织旅行和私人观察。','书的尺寸、折叠与阅读顺序直接控制图像关系。'],reading:'适合与 Museum Bhavan 对读：Singh 很早就把“书如何让照片移动”视为摄影实践的一部分。'}],images:[],sourceLabel:'Dayanita Singh studio',sourceUrl:'https://dayanitasingh.net/'
  },
  {
    id:'forensic-architecture',name:'Forensic Architecture',born:'2010–',base:'London',
    intro:'跨建筑、影像、开源调查、3D 建模、地理定位与证词分析，对国家暴力、战争、警务与环境破坏进行空间取证，并把调查结果同时带入法庭、媒体与美术馆。',
    methods:['开源调查','3D 建模','影像验证','空间分析','证词同步'],subjects:['国家暴力','战争','警务','人权','环境'],outputs:['调查平台','视频','3D 模型','地图','展览装置'],institutions:['Tate','Whitney Museum','ICA London'],achievements:['Turner Prize 2018 shortlisted'],
    whyImportant:'它把“研究型艺术”推进到证据生产：图像不只是批判对象，而能与建筑模型、卫星图、手机视频、声音和证词互相校验，形成可公开审查的事件模型。',
    projects:[{year:'2014–',title:'Forensic investigations',type:'空间取证 / open-source investigation',facts:['汇集公开视频、卫星影像、照片、声音与目击证词。','将不同来源按时间与空间重新同步。','使用建筑/3D 模型测试视线、爆炸、枪击、移动路径等事件关系。'],reading:'最值得研究的是“证据链”：每一种媒介都不被单独相信，而需要与其他来源互相约束。'},{year:'2017',title:'The Grenfell Tower Fire investigation',type:'公众证据平台 / 空间调查',facts:['围绕 Grenfell Tower 火灾收集居民与公众影像材料。','通过空间模型定位火势、建筑表皮与事件时间线。'],reading:'项目说明 crowdsourced image 可以从社交媒体碎片转化为公共调查基础设施。'}],images:[],sourceLabel:'Forensic Architecture',sourceUrl:'https://forensic-architecture.org/'
  },
  {
    id:'walid-raad',name:'Walid Raad',born:'1967',base:'New York / Beirut',
    intro:'通过摄影、录像、虚构档案、讲演表演和机构研究处理黎巴嫩战争、记忆与阿拉伯当代艺术基础设施，持续扰乱事实、文件和叙述者之间的稳定关系。',
    methods:['虚构档案','摄影','讲演表演','机构研究','文本'],subjects:['战争','记忆','档案','黎巴嫩','艺术制度'],outputs:['摄影','录像','档案装置','讲演表演','书'],institutions:['MoMA','Louvre','Documenta'],achievements:['Hasselblad Award 2011'],
    whyImportant:'Raad 是理解“档案不等于事实仓库”的关键艺术家：他故意让可信文件、虚构作者、真实战争与不可靠叙述混在一起，迫使观看者检查自己为什么相信某种证据形式。',
    projects:[{year:'1989–2004',title:'The Atlas Group',type:'虚构档案 / 黎巴嫩战争',facts:['以 The Atlas Group 名义建立关于黎巴嫩内战的照片、录像、笔记和文件。','部分材料、人物与归属被有意虚构或重新署名。','档案以展览、书和讲演等不同方式出现。'],reading:'核心不是猜“哪一件是假的”，而是观察档案权威怎样通过格式、署名、编号和叙述被制造。'},{year:'2007–',title:'Scratching on Things I Could Disavow',type:'艺术制度研究 / 装置与讲演',facts:['研究海湾地区新博物馆、收藏、艺术市场与文化基础设施。','把机构事实与超现实/虚构叙事并置。'],reading:'项目把战争记忆的问题扩展到“艺术史和机构本身如何制造可见性”。'}],images:[],sourceLabel:'The Atlas Group / Walid Raad project archive',sourceUrl:'https://www.theatlasgroup.org/'
  }
];

export const artistBatch26: Artist[] = [...rosterArtists, ...expansionArtists];

export const archiveBatch26: Record<string, ArtistArchive> = Object.fromEntries(artistBatch26.map(artist => [artist.id,{artistId:artist.id,projectCoverage:`${artist.projects.length} 个代表项目 / 制度节点已索引`,imageCoverage:`0 / ${artist.projects.length} 项目配图`,note:artist.id.startsWith('arthur-')||['tania-bruguera','deana-lawson','dayanita-singh','forensic-architecture','walid-raad'].includes(artist.id)?'本条已建立方法、题材、媒介、制度关系与代表项目入口；仍是精选项目档案，不冒充作品全集。':'本批优先完成 2024 国际主展人物索引；代表项目与具体制作动作后续继续深化。',projects:artist.projects.map(p=>({title:p.title,period:p.year,cluster:p.type,summary:p.reading,actions:p.facts,sourceUrl:artist.sourceUrl,images:[],relations:artist.institutions.map(label=>({kind:'展览' as const,label}) )})),awards:artist.achievements,exhibitions:artist.institutions,sources:[{label:artist.sourceLabel,url:artist.sourceUrl}]}]));
