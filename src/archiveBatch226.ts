import type { ArtistArchive, ArchiveRelation } from './archiveData';
const rel=(kind:ArchiveRelation['kind'],label:string,detail?:string):ArchiveRelation=>({kind,label,detail});

export const archiveBatch226:Record<string,ArtistArchive>={
  'taryn-simon':{
    artistId:'taryn-simon',
    projectCoverage:'深化 A Living Man Declared Dead and Other Chapters I–XVIII：补足四年跨国研究、18章结构、血缘/法律身份/国家记录之间的冲突，以及 portrait / text / footnote 三面板如何共同制造而非仅说明证据。',
    imageCoverage:'MoMA 提供 Chapter I–III、IX 馆藏记录及2012展览安装图；图像受版权限制，本站保留官方研究入口而不复制。',
    note:'Simon 的关键不是“调查后拍照”，而是把摄影、文字和图形设计设为同等媒介。A Living Man 把人的生物血缘与国家登记、土地权、暴力和历史叙事放进同一分类框架，让档案秩序本身成为作品。',
    projects:[{
      title:'A Living Man Declared Dead and Other Chapters I–XVIII',cluster:'archive / bloodline / classification / photography + text',period:'2008–2011',
      summary:'Simon 用四年时间在全球追踪并拍摄不同血缘系统及其相关故事，共形成18章。MoMA 的艺术家讲述明确指出，摄影、文字与 graphic design 在作品中同等重要。每章通常由 portrait panel、text panel 与 footnote panel 构成：前者系统排列血缘成员，文字板建立事件叙事，脚注板则以更碎片化的图像提供旁支证据。',
      actions:['跨国研究具体 bloodlines，而不是先确定抽象主题再寻找说明性人物。','以一致的肖像规则系统排列家族成员，让缺席、拒绝拍摄或无法出现者也成为结构信息。','将法律文件、土地纠纷、战争、疾病、暴力和公民身份等制度事实写入 text panel。','用 footnote panel 保存更直觉、碎片和非线性的图像材料，使证据不被单一叙事完全封闭。','把三种阅读系统并排，使观众在分类秩序与故事之间来回移动。'],
      sourceUrl:'https://www.moma.org/audio/playlist/257/3311',images:[],relations:[rel('展览','Museum of Modern Art','Taryn Simon: A Living Man Declared Dead and Other Chapters I–XVIII, 2012'),rel('策展','Roxana Marcoci','MoMA Photography; exhibition and public discussion'),rel('收藏','Museum of Modern Art','Chapters I, II, III and IX represented in collection')]
    },{
      title:'Chapter I — legal death versus biological life',cluster:'law / land / identity / archive',period:'2011',
      summary:'标题来自印度 Uttar Pradesh 的土地纠纷：一名男子去世后，原应继承祖地的四名后代被其他亲属在村庄登记系统中申报为死亡，以夺取土地。四人现实中仍活着，却在官方纸面上“不存在”，并持续争取恢复法律上的生者身份。作品由此把 bloodline 与 state record 直接对撞。',
      actions:['拍摄血缘成员并按亲属结构组织 portrait panel。','把“活着的人在文件中死亡”作为法律身份与身体事实的冲突核心。','以文字说明土地继承和登记机制，使肖像无法脱离制度背景被消费。','将个案扩展为整套18章的入口：谁有权决定一个人在档案里是否存在。'],
      sourceUrl:'https://www.moma.org/collection/works/155734',images:[],relations:[rel('收藏','Museum of Modern Art','inkjet prints; 213.4 × 301.6 cm'),rel('方法','portrait + text + footnote','three-component evidence architecture')]
    }],
    awards:[],exhibitions:['MoMA — A Living Man Declared Dead and Other Chapters I–XVIII, May 2–Sep 3 2012'],
    sources:[{label:'MoMA · artist audio / Chapter I',url:'https://www.moma.org/audio/playlist/257/3311'},{label:'MoMA · Chapter I collection',url:'https://www.moma.org/collection/works/155734'},{label:'MoMA · exhibition essay',url:'https://www.moma.org/explore/inside_out/2012/05/25/taryn-simon-a-living-man-declared-dead-and-other-chapters-i-xviii/'}]
  },
  'cao-fei':{
    artistId:'cao-fei',
    projectCoverage:'深化 Haze and Fog → La Town → HX / Nova / Blueprints：补出曹斐从现实城市观察转向类型片、微缩模型与地方工业史研究的中段演变，避免档案只集中在工厂、Second Life 与自动化物流。',
    imageCoverage:'MoMA 与 Serpentine 提供官方影片/展览入口；本站记录来源，不复制未确认授权 still。',
    note:'这条线显示曹斐并非简单追逐新技术。她持续把“现实怎样被另一套世界模型重新理解”作为方法：僵尸片、虚构城市、复古科幻和展览空间都成为社会研究的替代模型。',
    projects:[{
      title:'Haze and Fog → La Town — genre fiction as social observation',cluster:'film / urban alienation / speculative city',period:'2013–2014',
      summary:'MoMA 将 Haze and Fog 描述为47分钟影片：新富商人、音乐人、保安、家政人员、美甲师与性工作者在封闭、疏离的住宅社区交错，并逐渐进入 undead 的类型片逻辑。次年的 La Town 则进一步制造一个灾后虚构城市，把政治丑闻、情感关系与环境灾难压进 neo-noir / post-apocalyptic 模型。',
      actions:['从现实都市职业和住宅空间提取人物关系。','不以采访解释异化，而借 zombie / neo-noir 等类型片规则重新组织社会经验。','把真实中国城市变化转译为不存在的城市，使观众无法把问题局限为单一地点的纪实事件。'],
      sourceUrl:'https://www.moma.org/calendar/events/1987',images:[],relations:[rel('展览','MoMA PS1','2016 first comprehensive solo museum show in the U.S.'),rel('策展','Klaus Biesenbach','MoMA PS1 / MoMA conversation context')]
    },{
      title:'HX research → Nova → Blueprints',cluster:'local history / retro sci-fi / installation / virtuality',period:'2015–2020',
      summary:'Nova 是曹斐围绕北京酒仙桥（Hong Xia）地区约五年研究的结果之一。Serpentine 将其置于 Blueprints 的核心：展览把新旧作品组织成沉浸式、site-specific installation，并把 automation、virtuality、technology 与该地区的社会史和城市转型叠在一起。',
      actions:['长期研究自己生活和工作的酒仙桥地区社会史与城市变化。','将地方工业/城市历史转译成 feature-length retro-Sci-Fi，而非制作线性地方史纪录片。','在 Blueprints 中把影片、数字媒体、摄影和物件组织成现场空间，使 physical / virtual / cinematic 三层现实互相穿透。'],
      sourceUrl:'https://www.serpentinegalleries.org/whats-on/cao-fei/',images:[],relations:[rel('展览','Serpentine South Gallery','Blueprints, 4 Aug–13 Sep 2020'),rel('策展','Hans Ulrich Obrist','Artistic Director'),rel('策展','Joseph Constable','Associate Curator'),rel('展览','Kunsthal Charlottenborg','touring presentation, 2021–2022')]
    }],
    awards:[],exhibitions:['Serpentine — Blueprints, 2020','Kunsthal Charlottenborg — Blueprints touring presentation, 2021–2022'],
    sources:[{label:'MoMA · An Evening with Cao Fei',url:'https://www.moma.org/calendar/events/1987'},{label:'MoMA · Haze and Fog / i.Mirror',url:'https://www.moma.org/calendar/events/868'},{label:'Serpentine · Blueprints',url:'https://www.serpentinegalleries.org/whats-on/cao-fei/'}]
  },
  'pierre-huyghe':{
    artistId:'pierre-huyghe',
    projectCoverage:'深化 Untitled (Human Mask) 与2015 Met Roof Garden Commission：补足 Fukushima 后灾难空间、训练/模仿行为、非人主体，以及博物馆建筑与生物系统被组织成动态环境的方法。',
    imageCoverage:'The Met 提供官方馆藏页与展览资料；Human Mask 图像受版权限制，因此只保存研究入口。',
    note:'这两件作品是理解 Huyghe 从“制作对象”转向“设置条件”的关键节点：作品不再主要表达作者预设的意义，而让动物、植物、建筑、气候、行为和时间在系统中持续产生不可完全控制的状态。',
    projects:[{
      title:'Untitled (Human Mask)',cluster:'nonhuman / learned behavior / catastrophe / film',period:'2014',
      summary:'19分钟单频道彩色有声录像，灵感来自真实情境。影片从2011灾难后的 Fukushima 周边废墟进入一间废弃餐馆，一只戴着年轻女孩面具和服装的猴子继续执行过去通过观察餐馆员工而学会的工作动作。灾难移除了原本的人类社会，却留下训练、模仿与劳动行为继续运转。',
      actions:['以灾难后的真实地理语境作为影片环境。','让非人动物而非演员承担核心行为主体。','保留猴子既有的 learned / mimetic restaurant tasks，使动作不是导演完全编造的表演。','通过面具制造“像人但不是人”的持续认知冲突，把劳动、仪式、灾难与非人智能叠合。'],
      sourceUrl:'https://www.metmuseum.org/art/collection/search/684796',images:[],relations:[rel('收藏','The Metropolitan Museum of Art + LACMA','jointly owned; acquired 2017'),rel('材料','single-channel video, color, sound','19 min'),rel('展览','The Met','New York premiere, 2015')]
    },{
      title:'The Roof Garden Commission — cultural and biological systems as one environment',cluster:'site-specific / living systems / museum / ecology',period:'2015',
      summary:'The Met Roof Garden 委约把来自博物馆收藏、建筑与周围环境的组成部分汇入同一动态系统。官方说明强调 Huyghe 长期使用 living animals、plants 和自然元素，并在此研究 cultural 与 biological systems 的 transformation。作品因此不是给屋顶摆一件独立雕塑，而是重新组织场地中的关系。',
      actions:['从博物馆 collection、architecture 与 surroundings 提取组成元素。','把通常被美术馆分开的文化对象与生命/自然过程放进同一现场。','允许环境变化成为作品时间的一部分，使 site-specific 不等于固定造型适配场地。'],
      sourceUrl:'https://www.metmuseum.org/exhibitions/listings/2015/pierre-huyghe',images:[],relations:[rel('展览','The Metropolitan Museum of Art','Roof Garden Commission, May 12–Nov 1 2015'),rel('方法','cultural + biological systems','dynamic gathering rather than autonomous object')]
    }],
    awards:[],exhibitions:['The Met — Roof Garden Commission, 2015','The Met — Human Mask New York premiere, 2015'],
    sources:[{label:'The Met · Untitled (Human Mask)',url:'https://www.metmuseum.org/art/collection/search/684796'},{label:'The Met · Roof Garden Commission',url:'https://www.metmuseum.org/exhibitions/listings/2015/pierre-huyghe'}]
  }
};
