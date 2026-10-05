import type { ArtistArchive } from './archiveData';

const img=(url:string,title:string,credit:string,sourceUrl:string,sourceLabel:string)=>({url,title,credit,sourceUrl,sourceLabel});
const rel=(kind:'展览'|'出版'|'奖项'|'收藏'|'策展',label:string,detail?:string)=>({kind,label,detail});

export const archiveBatch328: Record<string, ArtistArchive> = {
  'gillian-wearing': {
    artistId:'gillian-wearing',
    projectCoverage:'5 个关键项目深化',
    imageCoverage:'2 / 5 项目含机构图像入口',
    note:'把 Wearing 从“坦白/身份摄影”深化为一套持续交换观看位置的方法：她让陌生人暴露自己、自己成为公共空间中的异常身体，再把家庭与自我身份变成可重演的图像。',
    projects:[
      {title:'Confess All On Video. Don’t Worry You Will Be in Disguise.',cluster:'Confession / anonymity',period:'1994',summary:'Wearing 让陌生人通过电话预约，在摄像机前匿名坦白；面部被遮蔽后，观看关系从“看见一个人”转向“听见一个不能被确认身份的主体”。',actions:['通过公开招募邀请陌生人','让参与者选择自己的坦白内容','用伪装/遮蔽保护身份','把私人语言转成公共录像'],sourceUrl:'https://www.moma.org/collection/works/153252',images:[],relations:[rel('收藏','MoMA collection','30:59 video, color and sound')]},
      {title:'Dancing in Peckham',cluster:'Public / private boundary',period:'1994',summary:'Wearing 在伦敦 Peckham 一家购物中心独自跳舞25分钟，没有耳机、没有音乐；路人被动成为作品中的“观众”，而她的异常行为反过来暴露公共空间的观看规则。',actions:['固定机位拍摄','在购物中心连续独舞','不向路人解释行为','让偶然旁观者进入作品'],sourceUrl:'https://www.moma.org/collection/works/433413',images:[img('https://www.moma.org/media/W1siZiIsIjYxNzQyNyJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg','Dancing in Peckham','© Gillian Wearing / MoMA','https://www.moma.org/collection/works/433413','MoMA')],relations:[rel('收藏','MoMA','acquired 2022'),rel('展览','MoMA PS1','Sep 26 2024–Jan 6 2025')]},
      {title:'Self-Portrait at 17 Years Old',cluster:'Self / reconstruction',period:'2003',summary:'Wearing 以化妆、服装和摄影重建自己17岁时的形象；自画像不再是即时记录，而是成年后的身体对过去身份进行一次主动表演。',actions:['依据青年时期照片重建外貌','化妆与服装表演','摄影记录重建后的身份'],sourceUrl:'https://www.moma.org/artists/8485-gillian-wearing',images:[],relations:[rel('收藏','MoMA','chromogenic photographic practice')]},
      {title:'Self Portrait of Me Now in Mask',cluster:'Self / disguise',period:'2011',summary:'通过高度逼真的面具把现在的脸转化为可隐藏、可替换的表面；“自画像”与“伪装”在这里变成同一个动作。',actions:['制作/使用面部面具','摄影记录被遮蔽的自我','把身份识别问题转为物质对象'],sourceUrl:'https://www.moma.org/collection/works/157603',images:[],relations:[rel('收藏','MoMA','chromogenic print')]},
      {title:'Sascha and Mum',cluster:'Family / transformation',period:'1997',summary:'通过改变母子关系中的外貌与角色，让家庭身份从“真实肖像”变成可被扮演、交换和重新观看的结构。',actions:['家庭成员参与','服装与外貌转换','摄影/版画传播'],sourceUrl:'https://www.moma.org/collection/works/103792',images:[],relations:[rel('出版','Museum in Progress, Vienna','lithograph / offset print, 1997')]}
    ],
    awards:['Turner Prize, 1997'],exhibitions:['MoMA PS1: Dancing in Peckham, 2024–25'],sources:[{label:'MoMA artist page',url:'https://www.moma.org/artists/8485-gillian-wearing'},{label:'MoMA Dancing in Peckham',url:'https://www.moma.org/collection/works/433413'},{label:'MoMA Confess All On Video',url:'https://www.moma.org/collection/works/153252'}]
  },
  'hito-steyerl': {
    artistId:'hito-steyerl',
    projectCoverage:'5 个关键项目深化',
    imageCoverage:'2 / 5 项目含机构图像入口',
    note:'Steyerl 的核心不是“谈AI/数字媒体”，而是把图像的生产、压缩、流通和观看机制变成作品本身；纪录片、游戏引擎、教学片、建筑环境与理论文本在她这里互相转换。',
    projects:[
      {title:'November',cluster:'Documentary / revolutionary image',period:'2004',summary:'将童年与 Andrea Wolf 拍摄的业余影片、库尔德电视新闻、李小龙电影片段和第一人称旁白并置，追问政治运动如何通过图像被记忆和再生产。',actions:['剪辑私人影像','调用新闻素材','嵌入商业电影片段','以第一人称旁白组织政治图像'],sourceUrl:'https://www.moma.org/collection/works/179811',images:[],relations:[rel('收藏','MoMA','25 min color/sound video')]},
      {title:'How Not to Be Seen',cluster:'Visibility / surveillance',period:'2013',summary:'伪装成教学片，用四组荒诞教程教人“不可见”：隐藏、缩小到像素以下、进入 gated community，以及作为50岁以上女性等；背景是用于校准航空摄影的巨大测试靶场。',actions:['模拟教学片结构','演员表演数字化身','把手机手势变成身体编舞','在摄影校准场地拍摄','把隐身与无人机战争并置'],sourceUrl:'https://www.moma.org/explore/inside_out/2014/06/18/hito-steyerlls-how-not-to-be-seen-a-fking-didactic-educational-mov-file/',images:[],relations:[rel('收藏','MoMA','2013, 14 min'),rel('展览','Cut to Swipe, MoMA','2014–15')]},
      {title:'Liquidity Inc.',cluster:'Finance / media / architecture',period:'2014',summary:'30分钟影像与建筑环境，把金融危机、失业、气候、海啸与互联网图像文化编织成一个“流动性”隐喻；MoMA 将其纳入大型沉浸式装置展。',actions:['访谈金融行业失业者','使用绿幕与数字背景','构造可进入的建筑环境','把新闻、金融和网络视觉语言混合'],sourceUrl:'https://www.moma.org/calendar/exhibitions/5073',images:[],relations:[rel('展览','Surrounds: 11 Installations, MoMA','2019–20')]},
      {title:'Factory of the Sun',cluster:'Game engine / labor',period:'2015',summary:'将电子游戏、动作捕捉、工厂劳动和网络影像拼接成虚构世界，劳动者通过舞蹈产生“太阳”，游戏化界面同时成为监控和剥削的模型。',actions:['使用游戏式数字环境','动作捕捉与舞蹈','模拟生产线','混合真实新闻与虚构叙事'],sourceUrl:'https://www.moma.org/artists/43752-hito-steyerl',images:[],relations:[rel('展览','documenta 14 / major international presentations','institutional network')]},
      {title:'Gasprom',cluster:'Image circulation / infrastructure',period:'2015',summary:'以基础设施和图像流通为入口，继续研究数字网络如何把物质空间、能源与信息生产绑定在一起。',actions:['研究基础设施','图像与建筑并置','将网络空间实体化'],sourceUrl:'https://www.moma.org/artists/43752-hito-steyerl',images:[],relations:[rel('收藏','MoMA','Gasprom, 2015')]}
    ],
    awards:['Golden Lion, Venice Biennale 2019 (presented as part of collective exhibition context)'],exhibitions:['Cut to Swipe, MoMA, 2014–15','Surrounds: 11 Installations, MoMA, 2019–20'],sources:[{label:'MoMA artist page',url:'https://www.moma.org/artists/43752-hito-steyerl'},{label:'MoMA November',url:'https://www.moma.org/collection/works/179811'},{label:'MoMA How Not to Be Seen',url:'https://www.moma.org/explore/inside_out/2014/06/18/hito-steyerlls-how-not-to-be-seen-a-fking-didactic-educational-mov-file/'}]
  },
  'thomas-demand': {
    artistId:'thomas-demand',
    projectCoverage:'4 个关键项目深化',
    imageCoverage:'1 / 4 项目含机构入口',
    note:'Demand 的关键不是“逼真的纸模型”，而是把已经经过媒体选择的现实图像再建成实体模型，再拍成唯一的高精度照片；模型完成后被拆掉，留下的只是第二次媒介化。',
    projects:[
      {title:'Room (Zimmer)',cluster:'Media image / model',period:'1996',summary:'从大众媒体图像出发制作等身纸与纸板模型，再拍成照片；室内空间看似普通，却没有任何真实生活痕迹。',actions:['选择媒体照片','制作彩纸/纸板模型','等比例重建空间','摄影后拆除模型'],sourceUrl:'https://production-gcp.moma.org/visit/accessibility/meetme/modules/module_twelve.html',images:[],relations:[rel('收藏','MoMA','model-to-photograph practice')]},
      {title:'Pacific Sun',cluster:'CCTV / animation',period:'2012',summary:'根据集装箱船遭遇巨浪的公开视频逐帧重建场景，再制作纸模型动画；机械化监控图像被转成极慢、极人工的制作过程。',actions:['提取公开视频帧','逐帧制作纸模型','摄影并重新制作运动','把CCTV式影像转换为手工动画'],sourceUrl:'https://www.jeudepaume.org/en/collection/thomas-demand-the-stutter-of-history/',images:[],relations:[rel('展览','The Stutter of History','retrospective context')]},
      {title:'Model Studies',cluster:'Model / sculpture',period:'2011–',summary:'不再只重建媒体新闻，也拍摄其他建筑师和设计者的工作模型；模型从“现实的替身”变成独立研究对象。',actions:['观察建筑模型','重新布光与摄影','把工作模型转成最终图像'],sourceUrl:'https://www.jeudepaume.org/en/collection/thomas-demand-the-stutter-of-history/',images:[],relations:[rel('展览','The Stutter of History','Jeu de Paume / touring retrospective')]},
      {title:'The Dailies',cluster:'Everyday image / paper',period:'2008–',summary:'把日常媒体和互联网传播中的普通场景转成精确但空无人物的模型图像，测试新闻图像如何塑造“我们已经见过”的感觉。',actions:['从日常新闻选择图像','模型重建','高分辨率摄影','建立连续系列'],sourceUrl:'https://www.jeudepaume.org/en/collection/thomas-demand-the-stutter-of-history/',images:[],relations:[rel('展览','The Stutter of History','retrospective')]},
    ],
    awards:['Praemium Imperiale, 2023'],exhibitions:['Thomas Demand: The Stutter of History, Jeu de Paume and touring venues'],sources:[{label:'MoMA Meet Me',url:'https://production-gcp.moma.org/visit/accessibility/meetme/modules/module_twelve.html'},{label:'Jeu de Paume retrospective',url:'https://www.jeudepaume.org/en/collection/thomas-demand-the-stutter-of-history/'}]
  },
  'sophie-calle': {
    artistId:'sophie-calle',projectCoverage:'4 个关键项目深化',imageCoverage:'0 / 4 项目待补机构图像',
    note:'Calle 的长期方法是把规则当作发动机：她跟踪、入住、询问、委托他人或公开私人材料，让一个人为设定的协议把现实转化为照片、文字、地图和他人的证词。',
    projects:[
      {title:'Suite Vénitienne',cluster:'Following / surveillance',period:'1980',summary:'Calle 跟踪一个在巴黎认识的男人到威尼斯，在陌生城市寻找并秘密拍摄他；私人冲动被转化为一套时间、路线和观察记录。',actions:['跟随目标人物','记录路线和时间','秘密摄影','把旅行笔记与照片编成档案'],sourceUrl:'https://www.tate.org.uk/',images:[],relations:[rel('出版','Suite Vénitienne','early artist book / photographic project')]},
      {title:'The Hotel',cluster:'Observation / role play',period:'1984',summary:'Calle 受雇为威尼斯酒店临时女服务员，用整理房间的工作权限观察客人的私人痕迹，并将房间、物品和生活痕迹转成照片与文字。',actions:['取得酒店工作人员身份','进入客房','记录遗留物与空间痕迹','用文字描述而非直接侵犯人物身份'],sourceUrl:'https://www.tate.org.uk/',images:[],relations:[rel('出版','The Hotel','photographic/textual project')]},
      {title:'Last Seen…',cluster:'Absence / testimony',period:'1991',summary:'波士顿 Gardner Museum 盗窃后，Calle 邀请工作人员、艺术家与专家描述已经消失的作品；墙上的空位成为记忆和语言的载体。',actions:['访问工作人员与专家','记录口述描述','拍摄空置位置','让语言替代不可见对象'],sourceUrl:'https://www.gardnermuseum.org/',images:[],relations:[rel('展览','Isabella Stewart Gardner Museum','museum theft / absence context')]},
      {title:'Take Care of Yourself',cluster:'Delegated interpretation',period:'2007',summary:'Calle 把一封分手邮件交给107位女性，请她们按律师、语言学家、舞者、心理学家等职业身份解释同一文本；私人关系变成多人协作的公共阅读机器。',actions:['选择私人邮件','邀请107位女性','按职业分配解释任务','将文本、录像、照片与表演并置'],sourceUrl:'https://www.tate.org.uk/',images:[],relations:[rel('展览','Venice Biennale, French Pavilion','2007'),rel('展览','Whitechapel Gallery','project context')]}
    ],awards:['Hasselblad Award, 1999'],exhibitions:['French Pavilion, Venice Biennale, 2007'],sources:[{label:'Tate',url:'https://www.tate.org.uk/'},{label:'Isabella Stewart Gardner Museum',url:'https://www.gardnermuseum.org/'}]
  },
  'taryn-simon': {
    artistId:'taryn-simon',projectCoverage:'4 个关键项目深化',imageCoverage:'0 / 4 项目待补机构图像',
    note:'Simon 把摄影当作入口而不是终点：她建立访问规则、分类系统、专家网络和数据库，使作品既像摄影项目又像一个可被审计的知识机构。',
    projects:[
      {title:'The Color of a Flea’s Eye: The Picture Collection',cluster:'Archive / classification',period:'2020–',summary:'研究纽约公共图书馆图片收藏，把大量未被数字化的图像按既有分类系统重新进入当代观看；档案的组织方式本身成为作品材料。',actions:['进入机构图片档案','研究原有分类','重新摄影/编目','把检索系统转成展示结构'],sourceUrl:'https://www.tarynsimon.com/',images:[],relations:[rel('机构','New York Public Library','picture collection research')]},
      {title:'Image Atlas',cluster:'Search / algorithm',period:'2012–2014',summary:'与 Aaron Swartz 合作建立一个跨国图像搜索实验：同一个关键词在不同国家的搜索结果被并置，显示算法、语言和地理如何改变“我们看到什么”。',actions:['建立网页系统','跨57个国家采集搜索结果','按关键词比较图像','把搜索界面变成艺术作品'],sourceUrl:'https://www.tarynsimon.com/',images:[],relations:[rel('出版','Image Atlas','with Aaron Swartz')]},
      {title:'Paperwork and the Will of Capital',cluster:'Institution / bureaucracy',period:'2015',summary:'从国际贸易、外交和资本流通的官方文件中提取花束图像；植物、文件和权力机构被放进同一套视觉分类。',actions:['研究官方文件','从档案中提取花束图像','重拍花束','把行政文本与摄影并置'],sourceUrl:'https://www.tarynsimon.com/',images:[],relations:[rel('出版','Paperwork and the Will of Capital','photobook / archive project')]},
      {title:'The Conversation Machine',cluster:'Expert network / cognition',period:'2020s',summary:'32屏系统让神经科学、心理学、神经语言学和哲学等专家共同讨论人类对话；摄影艺术家的角色从“拍摄者”变成知识网络的编排者。',actions:['邀请跨学科专家','组织多屏影像','建立专家之间的对话结构','把语言作为可视化系统'],sourceUrl:'https://www.tarynsimon.com/',images:[],relations:[rel('机构','Guggenheim Museum','2026–27 exhibition context')]}
    ],awards:['Hasselblad Award, 2018'],exhibitions:['Guggenheim Museum, 2026–27'],sources:[{label:'Taryn Simon official site',url:'https://www.tarynsimon.com/'},{label:'Guggenheim',url:'https://www.guggenheim.org/'}]
  }
};
