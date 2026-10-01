import type { Artist } from './data';

const project = (year: string, title: string, type: string, facts: string[], reading: string) => ({ year, title, type, facts, reading });

export const artistBatch29: Artist[] = [
  {
    id:'hito-steyerl', name:'Hito Steyerl', born:'1966', base:'Berlin',
    intro:'以影像论文、纪录片方法、数字图像和空间装置研究图像流通、战争、监控、资本与网络社会。',
    methods:['影像论文','档案研究','纪录片','数字图像','批判理论','多屏装置'], subjects:['图像流通','战争','监控','资本','技术','可见性'], outputs:['录像','电影','装置','文本'], institutions:['MoMA','Venice Biennale','Documenta'], achievements:['German Pavilion · Venice Biennale 2015','Skulptur Projekte Münster 2017'],
    whyImportant:'她把当代图像不仅当成内容，也当成基础设施来研究：分辨率、复制、平台传播和观看设备本身都成为政治问题，是理解“后互联网图像”与影像论文的核心人物。',
    projects:[project('2013','How Not to Be Seen: A Fucking Didactic Educational .MOV File','影像论文 / 监控与可见性',['借用教学视频形式讨论数字时代如何消失与被看见。','把绿幕、分辨率标靶、动画与表演混合。'],'作品的关键不是单纯批判监控，而是把图像分辨率、屏幕和识别机制本身变成叙事材料。')], images:[], sourceLabel:'MoMA', sourceUrl:'https://www.moma.org/artists/43752-hito-steyerl'
  },
  {
    id:'cao-fei', name:'Cao Fei', chineseName:'曹斐', born:'1978', base:'Beijing',
    intro:'以录像、电影、虚拟世界、网络项目与装置观察中国快速城市化、工厂劳动、青年亚文化和数字生活。',
    methods:['影像研究','虚拟世界','参与式项目','纪录与虚构混合','数字媒介'], subjects:['城市化','劳动','青年文化','虚拟身份','中国社会','技术'], outputs:['录像','电影','装置','网络项目','虚拟空间'], institutions:['MoMA','MoMA PS1','Guggenheim','Tate Modern','Venice Biennale','Yokohama Triennale'], achievements:['Hugo Boss Prize 2010 finalist','56th Venice Biennale · 2015'],
    whyImportant:'她很早就把中国制造业、城市化和网络虚拟生活放进同一实践中；作品不是简单记录社会变化，而是让现实劳动者和虚拟身份共同参与对另一种生活的想象。',
    projects:[project('2006','Whose Utopia','录像 / 工厂研究',['在珠三角灯具工厂拍摄劳动环境。','邀请工人在生产空间中表演自己的舞蹈、音乐与个人梦想。'],'工厂既是现实生产线，也是被暂时改写的舞台；“乌托邦”来自劳动者在制度空间中的短暂自我表达。'),project('2007–2011','RMB City','Second Life / 虚拟城市',['以 China Tracy 身份进入 Second Life。','构建虚拟城市并持续组织线上活动。'],'虚拟世界不是展示工具，而直接成为作品发生的社会空间。')], images:[], sourceLabel:'MoMA', sourceUrl:'https://www.moma.org/artists/35159-cao-fei'
  },
  {
    id:'walid-raad', name:'Walid Raad', born:'1967', base:'New York / Beirut',
    intro:'通过摄影、录像、虚构档案、讲演表演和装置研究黎巴嫩战争、记忆、证据真实性以及阿拉伯艺术史如何被建构。',
    methods:['虚构档案','讲演表演','摄影研究','影像档案','制度批判'], subjects:['战争','黎巴嫩','记忆','历史书写','档案','艺术制度'], outputs:['摄影','录像','装置','表演','出版'], institutions:['MoMA','Documenta','Venice Biennale','Whitney Museum'], achievements:['The Atlas Group 1989–2004','MoMA retrospective · 2015–2016'],
    whyImportant:'他是理解“档案不等于事实”的关键艺术家：作品故意混合真实材料、虚构人物和精确的档案语言，让观众意识到历史证据本身也由叙事制度生产。',
    projects:[project('1989–2004','The Atlas Group','虚构档案 / 战争记忆',['建立围绕黎巴嫩战争的档案项目。','混合照片、录像、笔记、虚构人物与事件。'],'重点不是让观众猜真假，而是暴露我们为什么会相信某种档案格式和历史叙述。')], images:[], sourceLabel:'MoMA', sourceUrl:'https://www.moma.org/artists/35285-walid-raad'
  },
  {
    id:'dayanita-singh', name:'Dayanita Singh', born:'1961', base:'New Delhi',
    intro:'以摄影书、可移动木结构和不断重组的照片档案，把摄影从固定墙面与单一本书转化成可以编辑、搬运和重新策展的“博物馆”。',
    methods:['摄影档案','摄影书','序列编辑','模块化展示','自我策展'], subjects:['印度社会','家庭','档案','建筑','记忆','摄影展示'], outputs:['摄影','摄影书','模块化装置','档案'], institutions:['MoMA','Hayward Gallery','Art Institute of Chicago','K20 Düsseldorf'], achievements:['Museum of Chance · MoMA collection','Hasselblad Award 2022'],
    whyImportant:'她的重要性不只在拍什么，而在重新设计照片如何存在：书、柜体、折页和展览不断改变同一批图像之间的关系，非常适合研究摄影编辑和展示结构。',
    projects:[project('2013','Museum of Chance','摄影 / 模块化博物馆',['把大量照片组织为可重新排列的结构。','同名摄影书也以不同顺序和物理形式重新编辑图像。'],'作品把策展权从固定展墙转移到持续变化的图像组合。')], images:[], sourceLabel:'MoMA', sourceUrl:'https://www.moma.org/artists/48057-dayanita-singh'
  },
  {
    id:'wolfgang-tillmans', name:'Wolfgang Tillmans', born:'1968', base:'Berlin / London',
    intro:'从青年文化、肖像和日常观察扩展到无相机抽象、政治材料与展览编排，以不同尺寸和输出方式重新定义摄影墙面。',
    methods:['日常摄影','肖像','无相机摄影','编辑','非层级展示','实验暗房'], subjects:['青年文化','亲密关系','身体','政治','抽象','观看'], outputs:['摄影','喷墨打印','杂志页','暗房抽象','装置'], institutions:['MoMA','Tate','MoMA PS1'], achievements:['Turner Prize 2000','MoMA retrospective · To look without fear 2022'],
    whyImportant:'他把新闻式、私人式、抽象和实验摄影放在同一套非层级展示系统里；真正值得研究的不只是单张照片，而是尺寸、纸张、墙面位置和图像关系如何共同形成观看。',
    projects:[project('2022','To look without fear','回顾展 / 摄影安装',['展览覆盖肖像、静物、抽象和政治材料。','作品以不同尺度、装裱方式和直接贴墙方式共同出现。'],'Tillmans 的“作品单位”常常不是单张照片，而是整面墙上不同图像之间临时形成的关系。')], images:[], sourceLabel:'MoMA', sourceUrl:'https://www.moma.org/artists/8044-wolfgang-tillmans'
  }
];
