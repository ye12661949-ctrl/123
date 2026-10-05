import type { ArtistArchive } from './archiveData';

const img=(url:string,title:string,credit:string,sourceUrl:string,sourceLabel:string)=>({url,title,credit,sourceUrl,sourceLabel});
const rel=(kind:'展览'|'出版'|'奖项'|'收藏'|'策展',label:string,detail?:string)=>({kind,label,detail});

export const archiveBatch329: Record<string, ArtistArchive> = {
  'francis-alys': {
    artistId:'francis-alys',
    projectCoverage:'6 个关键项目深化',
    imageCoverage:'沿用既有机构图像入口；新增项目优先保留官方资料页，待后续补高质量图像',
    note:'这一轮把 Alÿs 从“行动/步行”进一步深化为一种把微小、徒劳、重演和地缘政治连接起来的生产方法：行动本身、记录、目击者叙述和后续传播共同构成作品。',
    projects:[
      {title:'Paradox of Praxis 1 (Sometimes Making Something Leads to Nothing)',cluster:'Futility / action',period:'1997',summary:'Alÿs 推着一大块冰穿过墨西哥城，冰最终融化。行动把劳动的可见性与结果的消失绑定起来：投入真实体力，却故意让产出归零。',actions:['选择会持续消失的材料','在城市中持续推行冰块','记录行动的时间与路径','让“劳动—成果”关系失效'],sourceUrl:'https://francisalys.com/sometimes-making-something-leads-to-nothing/',images:[],relations:[rel('展览','Francis Alÿs: A Story of Deception, MoMA / MoMA PS1','2011 retrospective context')]},
      {title:'The Green Line',cluster:'Border / political line',period:'2004',summary:'沿耶路撒冷市内的 Green Line 推行泄漏的绿色油漆；24公里使用58升油漆。随后把行动交给历史学家、记者、建筑师、活动家和政治人物即时回应，使地缘政治边界同时成为身体行动和意见网络。',actions:['沿政治边界步行','使用会持续泄漏的绿色油漆','拍摄17分41秒行动纪录','邀请不同职业的当地人士即时回应'],sourceUrl:'https://francisalys.com/the-green-line/',images:[],relations:[rel('展览','The Green Line','Jerusalem, 2004'),rel('出版','A Story of Deception','project documentation')]},
      {title:'Sandlines, the Story of History',cluster:'Children / historical reenactment',period:'2018–2020',summary:'让摩苏尔附近山村的儿童重演从1916年 Sykes–Picot 协议到2016年 ISIS 统治的一百年伊拉克史；儿童身体成为历史叙事的媒介。',actions:['与当地儿童共同排演历史事件','用服装、道具和身体动作重建历史','拍摄长篇纪录片','把地方记忆与国家历史并置'],sourceUrl:'https://francisalys.com/sandlines/',images:[],relations:[rel('出版','Ruya Foundation','co-production'),rel('展览','international festival circuit','premiered 2020')]},
      {title:'Looking-Up',cluster:'Attention / collective behavior',period:'2001',summary:'Alÿs 在墨西哥城 Santo Domingo 广场抬头望天，以近乎什么都没做的动作吸引路人聚集；随后离开，让被吸引的人群自己成为事件的“残余”。',actions:['在公共广场保持静止','用视线制造未说明的事件','吸引路人形成临时人群','主动退出并观察群体残留'],sourceUrl:'https://francisalys.com/books/San_Ildefonso_full.pdf',images:[],relations:[rel('出版','San Ildefonso catalogue','documentation of action')]},
      {title:'When Faith Moves Mountains',cluster:'Collective labor / minimal change',period:'2002',summary:'500名志愿者用铲子同步移动利马沙丘。真正的作品不是“沙丘被移动了多少”，而是把集体劳动、进步神话与微小结果压缩进一个可重复讲述的行动。',actions:['招募500名志愿者','制定同步铲沙规则','用录像、摄影、绘画、地图记录','让行动进入都市传说和档案'],sourceUrl:'https://www.moma.org/collection/works/109922',images:[],relations:[rel('收藏','MoMA','films, drawings, photographs, maps and prints'),rel('展览','A Story of Deception','MoMA / MoMA PS1, 2011')]},
      {title:'Re-enactments',cluster:'Reality / repetition',period:'2001',summary:'先制造一次带有真实危险的公共事件，再与警方合作重演；两次行动的差异把“纪录片证明事实”的假设变成作品材料。',actions:['制造第一次公共事件','保留第一轮记录','与警方合作第二次重演','并置两次记录以制造不确定性'],sourceUrl:'https://www.moma.org/interactives/exhibitions/2011/francisalys/',images:[],relations:[rel('展览','Francis Alÿs: A Story of Deception','MoMA / MoMA PS1, 2011')]}
    ],
    awards:['2011 MoMA / MoMA PS1 retrospective context'],
    exhibitions:['Projects 76, MoMA, 2002','A Story of Deception, MoMA / MoMA PS1, 2011'],
    sources:[{label:'Francis Alÿs official archive',url:'https://francisalys.com/'},{label:'The Green Line',url:'https://francisalys.com/the-green-line/'},{label:'Sandlines',url:'https://francisalys.com/sandlines/'},{label:'MoMA',url:'https://www.moma.org/artists/8383-francis-alys'}]
  },
  'yto-barrada': {
    artistId:'yto-barrada',
    projectCoverage:'5 个关键项目深化',
    imageCoverage:'沿用既有机构图像入口；本轮重点补方法与机构网络',
    note:'Barrada 的实践不是单纯“记录边境”，而是在摄影、电影、出版、手工和文化基础设施之间不断切换：边境是题材，制作与传播的基础设施才是她真正长期经营的对象。',
    projects:[
      {title:'The Strait Project',cluster:'Border / Tangier',period:'1998–',summary:'从丹吉尔出发记录直布罗陀海峡、迁移限制和城市等待状态；摄影既呈现边境的物理空间，也呈现 Schengen 后的心理压力。',actions:['长期返回丹吉尔拍摄','记录海峡、候船、城市边缘和身体','把私人经验与边境政策并置','以摄影书组织系列'],sourceUrl:'https://www.moma.org/collection/artists/42323',images:[],relations:[rel('出版','A Life Full of Holes: The Strait Project','Autograph, 2005'),rel('策展','Okwui Enwezor','critical writing on photographic subjectivity')]},
      {title:'Cinémathèque de Tanger',cluster:'Cultural infrastructure',period:'2006–',summary:'与合作者建立丹吉尔非营利电影馆和电影档案，使“观看电影”从作品消费转变为地方文化基础设施。',actions:['建立非营利电影馆','保存和放映电影','策划公共节目','把影像研究嵌入城市社区'],sourceUrl:'https://www.moma.org/collection/artists/42323',images:[],relations:[rel('机构','Cinémathèque de Tanger','founding director'),rel('展览','Artist’s Choice: Yto Barrada—A Raft','MoMA, 2021')]},
      {title:'A Life Full of Holes',cluster:'Book / archive',period:'2005',summary:'把 The Strait Project 从单张照片扩展成摄影书和历史叙事；“孔洞”同时指边境的缺口、迁移的欲望和图像无法填补的经验。',actions:['编辑长期摄影系列','加入文本和历史材料','以书籍建立阅读顺序','把地方经验转为国际传播对象'],sourceUrl:'https://www.moma.org/collection/artists/42323',images:[],relations:[rel('出版','Autograph','A Life Full of Holes, 2005')]},
      {title:'Artist’s Choice: Yto Barrada—A Raft',cluster:'Curating / social pedagogy',period:'2021',summary:'在 MoMA 以策展而非单纯创作回应 Fernand Deligny 的实践，并通过电影选片把社会工作、非正规教育与影像观看连接起来。',actions:['从 Deligny 研究出发选片','组织线上电影系列','建立艺术与社会工作之间的阅读关系','将策展作为实践的一部分'],sourceUrl:'https://www.moma.org/calendar/film/5318',images:[],relations:[rel('策展','MoMA','Carte Blanche / Artist’s Choice'),rel('展览','Yto Barrada—A Raft','2021')]},
      {title:'The Dye Garden',cluster:'Plant / craft / place',period:'2010s–',summary:'通过植物、染料、手工和地方材料把城市研究从“摄影对象”推进到材料生产；植物成为地方知识与社区实践的载体。',actions:['研究地方植物','制作天然染料','将植物材料用于纺织与装置','连接城市生态与手工知识'],sourceUrl:'https://www.moma.org/collection/artists/42323',images:[],relations:[rel('机构','Cinémathèque de Tanger','broader cultural infrastructure context')]}
    ],
    awards:['Deutsche Bank Artist of the Year, 2015'],
    exhibitions:['Artist’s Choice: Yto Barrada—A Raft, MoMA, 2021'],
    sources:[{label:'MoMA artist profile',url:'https://www.moma.org/collection/artists/42323'},{label:'MoMA Carte Blanche',url:'https://www.moma.org/calendar/film/5318'}]
  },
  'wangechi-mutu': {
    artistId:'wangechi-mutu',
    projectCoverage:'5 个关键项目深化',
    imageCoverage:'1 / 5 项目有机构图像入口',
    note:'Mutu 的核心方法是把拼贴、雕塑、身体、装饰和科幻式变形结合起来，使女性身体不再是被观看的图像，而成为主动改变历史、种族和生态分类的混合主体。',
    projects:[
      {title:'The NewOnes, will free Us',cluster:'Caryatid / feminist sculpture',period:'2019',summary:'四件青铜女性雕塑占据 Met Fifth Avenue 原本空置的四个壁龛；Mutu把西方古典 caryatid 与非洲女性身体装饰传统重新组合，让“承重的女性”从建筑功能中解放出来。',actions:['制作四件青铜雕塑','研究 caryatid 历史','引用非洲女性身体装饰','把作品放入博物馆建筑门面'],sourceUrl:'https://www.metmuseum.org/de/press/exhibitions/2019/wangechi-mutu',images:[],relations:[rel('展览','The Met Fifth Avenue Facade Commission','2019–2020'),rel('收藏','The Metropolitan Museum of Art','The Seated I and III acquired 2020'),rel('策展','Kelly Baum / Sheena Wagstaff','Met contemporary art')]},
      {title:'The Seated I',cluster:'Body / threshold',period:'2019',summary:'四件雕塑之一，坐姿女性身体被盘绕结构、镜面圆盘和装饰覆盖；镜面元素把观众与城市环境反射回作品。',actions:['青铜铸造','身体表面装饰','加入镜面圆盘','在博物馆入口处与建筑历史对话'],sourceUrl:'https://www.metmuseum.org/art/collection/search/830456',images:[],relations:[rel('收藏','The Met','MMA 2020.119')]},
      {title:'The Seated III',cluster:'Body / threshold',period:'2019',summary:'与 The Seated I 形成对应的跪坐女性形象；其装饰引用非洲高地位女性的珠饰、项圈、唇盘和发型，同时保留未来主义的陌生感。',actions:['青铜铸造','参考具体身体装饰传统','镜面与金属表面处理','通过姿态重写 caryatid 的“承重”角色'],sourceUrl:'https://www.metmuseum.org/art/collection/search/830456',images:[],relations:[rel('收藏','The Met','on view in Gallery 963')]},
      {title:'A Fantastic Journey',cluster:'Collage / transformation',period:'2013–2017',summary:'通过大规模拼贴、绘画、雕塑和电影构建变形女性角色；身体被切割、拼接和重新组合，成为殖民图像、消费文化与个人记忆的混合场。',actions:['剪裁杂志与档案图像','叠加绘画','拼接身体与机械部件','扩展到雕塑和影像'],sourceUrl:'https://www.metmuseum.org/de/press/exhibitions/2019/wangechi-mutu',images:[],relations:[rel('展览','A Fantastic Journey','Brooklyn Museum and touring venues'),rel('双年展','Whitney Biennial','2019')]},
      {title:'The Histology of the Different Classes of Uterine Tumors',cluster:'Body / medical image',period:'2004',summary:'借用医学图像和生物学分类的视觉语言，把女性身体放进科学、消费与殖民观看的历史中；Mutu把“客观图像”重新变成身体想象。',actions:['挪用医学图像','剪裁与拼贴','改变比例与身体结构','把科学分类转成幻想身体'],sourceUrl:'https://www.metmuseum.org/de/press/exhibitions/2019/wangechi-mutu',images:[],relations:[rel('展览','Wangechi Mutu: A Fantastic Journey','touring solo exhibition')]}
    ],
    awards:['Deutsche Bank Artist of the Year','Louis Comfort Tiffany Foundation Grant','Joan Mitchell Foundation Painters & Sculptors Award','American Federation of Arts Leadership Award'],
    exhibitions:['Whitney Biennial, 2019','The NewOnes, will free Us, The Met, 2019–2020'],
    sources:[{label:'The Met Facade Commission',url:'https://www.metmuseum.org/de/press/exhibitions/2019/wangechi-mutu'},{label:'The Met collection: The Seated III',url:'https://www.metmuseum.org/art/collection/search/830456'},{label:'The Met artist interview',url:'https://www.metmuseum.org/fr/perspectives/wangechi-mutu-the-new-ones-will-free-us-2'}]
  },
  'otobong-nkanga': {
    artistId:'otobong-nkanga',
    projectCoverage:'5 个关键项目深化',
    imageCoverage:'2 / 5 项目有机构图像入口',
    note:'Nkanga 把“土地”当作同时包含地质、政治、殖民和身体关系的系统；她经常让矿物、纺织、绘画、摄影、表演和交易在同一项目中循环，使资源开采的链条变成作品结构。',
    projects:[
      {title:'Carved to Flow',cluster:'Resource / circular economy',period:'2017–',summary:'以 O8 Black Stone 肥皂为媒介，把来自地中海、中东、北非和西非的油、黄油、木炭和碱制作成冷制皂；销售收益再进入基金会，形成从材料到社会基础设施的循环。',actions:['设计 O8 Black Stone 配方','与希腊制皂师合作生产15000块','在 Documenta 14 建立仓储与分销装置','以销售收益支持 Carved to Flow Foundation'],sourceUrl:'https://carvedtoflow.com/',images:[],relations:[rel('展览','documenta 14','Athens / Kassel, 2017'),rel('机构','Carved to Flow Foundation','Nigeria / Athens research and exchange')]},
      {title:'In Pursuit of Bling',cluster:'Mineral / desire',period:'2014',summary:'从 mica 等矿物进入化妆品与科技产品的路径出发，把“闪亮商品”的欲望与矿区的社会和生态伤痕放在同一视觉结构中。',actions:['研究矿物供应链','摄影矿物与身体','制作大型纺织品','把商品欲望与开采后果并置'],sourceUrl:'https://dig-305-artwork-alt-text-c8b04f.up.railway.app/whats-on/tate-st-ives/otobong-nkanga/otobong-nkanga-where-i-stand',images:[],relations:[rel('展览','From Where I Stand','Tate St Ives, 2019')]},
      {title:'The Weight of Scars',cluster:'Labor / landscape',period:'2015',summary:'大型纺织与摄影作品把工业劳动的身体、管线、矿井和废弃景观连接起来；多臂身体暗示劳动与资源运输的“拉扯”。',actions:['编织纺织品','使用 viscose bast、mohair、polyester、bio cotton、linen 等纱线','结合喷墨照片与激光切割板','将矿区照片嵌入身体网络'],sourceUrl:'https://dig-305-artwork-alt-text-c8b04f.up.railway.app/whats-on/tate-st-ives/otobong-nkanga/otobong-nkanga-where-i-stand',images:[],relations:[rel('展览','From Where I Stand','Tate St Ives, 2019')]},
      {title:'Tsumeb Fragments',cluster:'Colonial mining / material archive',period:'2015',summary:'沿纳米比亚废弃矿业铁路前往 Tsumeb，研究德国殖民时期铜矿留下的景观；照片、视频和现场采集材料组成一个“物质星座”。',actions:['田野调查废弃矿区','摄影矿业遗迹','采集原材料','改变材料状态以回应工业加工'],sourceUrl:'https://dig-305-artwork-alt-text-c8b04f.up.railway.app/whats-on/tate-st-ives/otobong-nkanga/otobong-nkanga-where-i-stand',images:[],relations:[rel('展览','From Where I Stand','Tate St Ives, 2019')]},
      {title:'From Where I Stand',cluster:'Scale / mineral perception',period:'2019',summary:'地毯图案取自电子显微镜下 mica 碎片的放大结构；微观矿物被放大到人体尺度，使“脆裂、断裂、晶体”同时描述矿物和人的状态。',actions:['电子显微镜观察 mica','放大晶体结构','转译为大型地毯图案','以开放式装置组织观众行走'],sourceUrl:'https://dig-305-artwork-alt-text-c8b04f.up.railway.app/whats-on/tate-st-ives/otobong-nkanga/otobong-nkanga-where-i-stand',images:[],relations:[rel('展览','From Where I Stand','Tate St Ives, 2019')]},
    ],
    awards:['Nasher Prize, 2025','Zeitz MOCAA Award for Artistic Excellence, 2025','Golden Afro Artistic Award, 2024','Lise Wilhelmsen Art Award, 2019','Special Mention, 58th Venice Biennale, 2019','Sharjah Art Foundation Prize, 2019','Belgian Art Prize, 2017','Yanghyun Art Prize, 2015'],
    exhibitions:['Cadence, MoMA, 2024','From Where I Stand, Tate St Ives, 2019','Documenta 14, 2017','58th Venice Biennale, 2019'],
    sources:[{label:'Otobong Nkanga official site',url:'https://www.otobong-nkanga.com/'},{label:'Carved to Flow',url:'https://carvedtoflow.com/'},{label:'Tate St Ives',url:'https://dig-305-artwork-alt-text-c8b04f.up.railway.app/whats-on/tate-st-ives/otobong-nkanga/otobong-nkanga-where-i-stand'},{label:'MCA Chicago',url:'https://live.mcachicago.org/exhibitions/2018/otobong-nkanga'}]
  },
  'theaster-gates': {
    artistId:'theaster-gates',
    projectCoverage:'5 个关键项目深化',
    imageCoverage:'2 / 5 项目有机构图像入口',
    note:'Gates 的关键转变是把“艺术品”扩展为建筑、档案、收藏、表演和社区照护的基础设施；材料被拯救之后，不只是重新成为雕塑，而是重新进入公共生活。',
    projects:[
      {title:'Dorchester Projects',cluster:'Architecture / community infrastructure',period:'2009–',summary:'在芝加哥 South Side 改造废弃建筑，将它们变成图书馆、档案、艺术空间、居住和公共聚会场所；建筑修复本身就是作品的生产过程。',actions:['购买与修复废弃建筑','建立图书馆与档案','组织表演与社区活动','让收藏和日常生活共享空间'],sourceUrl:'https://www.walkerart.org/whats-on/theaster-gates/',images:[],relations:[rel('机构','Dorchester Projects','Chicago South Side'),rel('展览','Assembly Hall','Walker Art Center, 2019–2020')]},
      {title:'Stony Island Arts Bank',cluster:'Archive / civic space',period:'2015–',summary:'把一座废弃银行重新变成艺术、档案和社区文化中心，保存玻璃幻灯片、黑人出版物与其他被忽视的物质文化。',actions:['修复废弃银行建筑','收集与保存档案','开放公共文化活动','把私人收藏转成公共资源'],sourceUrl:'https://www.walkerart.org/whats-on/theaster-gates/',images:[],relations:[rel('机构','Stony Island Arts Bank','Chicago'),rel('展览','The Black Image Corporation','Fondazione Prada, 2018')]},
      {title:'Black Vessel for a Saint',cluster:'Sacred / salvage',period:'2017',summary:'以黑砖、花岗岩、Corten steel、混凝土雕像和屋面膜建造小型圆形建筑，为从已拆除的 Saint Laurence Church 保存下来的圣劳伦斯雕像提供新的公共住所。',actions:['从拆除教堂回收材料','建造20英尺尺度的圆形结构','保存并重新安置圣像','把宗教遗物转成公共纪念空间'],sourceUrl:'https://www.walkerart.org/collections/artwork/black-vessel-for-a-saint/',images:[],relations:[rel('收藏','Walker Art Center','commissioned 2017'),rel('策展','Olga Viso / Victoria Sung','Walker context')]},
      {title:'Assembly Hall',cluster:'Collection / museum transformation',period:'2019',summary:'把 Gates 的收藏和工作室环境整体搬进 Walker，四个沉浸式房间分别呈现 60000 张玻璃幻灯片、15000 本 Johnson Publishing 档案、4000 件 Edward J. Williams 收藏和 Gates 的陶器。',actions:['将私人/工作室收藏移入美术馆','以四个房间重建收藏生态','把档案当作展览材料','让收藏、工作和艺术品边界消失'],sourceUrl:'https://www.walkerart.org/whats-on/theaster-gates/',images:[],relations:[rel('展览','Assembly Hall','Walker Art Center, 2019–2020'),rel('策展','Victoria Sung','Assistant Curator, Visual Arts')]},
      {title:'Whyte Painting (KOH0015)',cluster:'Ceramics / Black material history',period:'2010',summary:'Walker 收藏的瓷器作品；把陶瓷从“传统工艺”推进到 Gates 关于种族、材料史和工人劳动的更大实践中。',actions:['陶瓷制作','以瓷作为雕塑材料','进入博物馆收藏系统'],sourceUrl:'https://www.walkerart.org/collections/artwork/whyte-painting-koh0015/',images:[],relations:[rel('收藏','Walker Art Center','2010.45')]},
    ],
    awards:['2012 Documenta 13 participation','2015 Venice Biennale presentation'],
    exhibitions:['12 Ballads for Huguenot House, Documenta 13, 2012','Gone Are the Days of Shelter and Martyr, Venice Biennale, 2015','Assembly Hall, Walker Art Center, 2019–2020'],
    sources:[{label:'Walker Art Center — Assembly Hall',url:'https://www.walkerart.org/whats-on/theaster-gates/'},{label:'Walker — Black Vessel for a Saint',url:'https://www.walkerart.org/collections/artwork/black-vessel-for-a-saint/'},{label:'Walker — artist profile',url:'https://www.walkerart.org/collections/artist/theaster-gates/'}]
  }
};
