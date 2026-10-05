import type { ArtistArchive } from './archiveData';

const rel=(kind:'展览'|'出版'|'奖项'|'收藏'|'策展',label:string,detail?:string)=>({kind,label,detail});

export const archiveExtensions342: Record<string, Partial<ArtistArchive> & { projects?: ArtistArchive['projects'] }> = {
  'allan-sekula': {
    note:'继续把 Sekula 从“批判性纪录摄影”拆成一种摄影—文本—田野研究方法：他既反对把劳动者简化成社会类型，也反对把港口与海洋浪漫化；拍摄限制、长期驻留、工人叙述、物流路径与论文写作共同构成作品。与传统纪实不同，摄影不是透明证据，而是需要被文本、制度史和生产关系持续校正的证据。',
    projects:[
      {title:'Methane for All',cluster:'Energy infrastructure / port / constrained viewpoint',period:'2007',summary:'受 MACBA 都市研究项目委托，Sekula 追踪液化天然气从卡塔尔、利比亚、阿尔及利亚等气田进入巴塞罗那港，再经海底管线通往 Besòs 电厂的基础设施。项目最关键的制作事实之一是拍摄位置受工业安全规则直接限制：甲烷运输船只能从船首或船尾拍摄，因为机械快门可能产生静电火花。于是作品的视点不是摄影师自由选择的“构图”，而被能源工业的风险制度共同生产。',actions:['追踪甲烷跨国运输路线','进入港口与易燃品终端进行田野拍摄','服从工业安全规则，只从获准位置摄影','拍摄船舶、码头、Gas Natural 建筑与能源基础设施','把局部港口景观放回全球商品与能源网络'],sourceUrl:'https://www.macba.cat/en/collectables/allan-sekula-in-barcelona/',images:[],relations:[rel('策展','Jorge Ribalta / Joan Roca','2007 Metropolitan Images of the New Barcelona commission'),rel('展览','Universal Archive','MACBA · 2008'),rel('收藏','MACBA Collection','Methane for All works')]},
      {title:'Fish Story — nine-chapter research architecture',cluster:'Maritime labor / logistics / photography + essay',period:'1988–1995',summary:'历时七年的九章研究项目，从洛杉矶 San Pedro 港扩展至韩国、苏格兰、波兰等港口城市。Sekula 长期与当地劳动者共同生活和工作，最终以105张照片、幻灯投影和文本构成展览/书籍双重形式。九章结构让单张照片不再承担“代表全球化”的不可能任务，而让港口、工人、船舶、城市空间与海洋神话在序列和论文中相互校正。',actions:['在多个国际港口长期田野工作','与码头及海运劳动者共同生活并记录其经验','拍摄劳动者、社区、建成环境与自然环境','把105张照片组织成九章而非单幅英雄图像','并置幻灯投影与长篇文字','同时把项目设计成展览与书籍'],sourceUrl:'https://www.walkerart.org/whats-on/allan-sekula-fish-story/',images:[],relations:[rel('展览','Allan Sekula: Fish Story','Walker Art Center · 2023–2024'),rel('收藏','Walker Art Center','holds chapters from Fish Story')]}
    ],
    exhibitions:['Allan Sekula: Fish Story, Walker Art Center, 2023–24','Universal Archive, MACBA, 2008'],
    sources:[{label:'Walker Art Center — Fish Story',url:'https://www.walkerart.org/whats-on/allan-sekula-fish-story/'},{label:'Walker — Fish Story research and nine chapters',url:'https://www.walkerart.org/press-releases/walker-art-center-to-present-influential-photographer-and-writer-allan-sekulas-seminal-work-fish-story/'},{label:'MACBA — Allan Sekula in Barcelona / Methane for All',url:'https://www.macba.cat/en/collectables/allan-sekula-in-barcelona/'},{label:'MACBA — Allan Sekula artist record',url:'https://www.macba.cat/en/actor/allan-sekula/'}]
  },
  'an-my-le': {
    note:'把 Lê 的核心方法从“战争景观”进一步区分为侧视（side-glance）策略：她常避开战斗高潮，转向训练、重演、后勤、边境、纪念碑、电影布景和军事劳动，使战争显现为一种被排练、表演、管理并沉积进景观的制度。她借用大型风景摄影的距离与细节，不等于政治中立，而是拒绝新闻摄影即时高潮的观看方式。',
    projects:[
      {title:'Viêt Nam',cluster:'Return / memory / landscape',period:'1994–1998',summary:'Lê 在1975年撤离越南、成年后返回出生地进行长期拍摄。她没有重建童年战争场景，而以黑白风景重新面对记忆与现实之间的落差；这一阶段建立了她后来持续使用的策略：让政治历史以地形、距离和日常空间的形式出现。',actions:['成年后返回越南进行多次拍摄','以黑白大画幅式风景语言工作','避免直接重演个人创伤','把战争记忆与当下地景并置','通过系列而非新闻事件建立时间跨度'],sourceUrl:'https://carnegieart.org/resource/an-my-les-viet-nam/',images:[],relations:[rel('展览','An-My Lê: On Contested Terrain','Carnegie Museum of Art · 2020–2021')]},
      {title:'Silent General',cluster:'Civil War afterlives / monuments / border / film set',period:'2015–',summary:'受 Walt Whitman《Specimen Days》启发形成开放式系列，把南北战争遗产、纪念碑争议、美国—墨西哥边境和战争电影布景放入同一当代景观。作品包括《Free State of Jones》拍摄现场、New Orleans 的 Beauregard 纪念碑以及 Presidio–Ojinaga 国际桥的边境执法人员；“历史”因此不是过去事件，而是不断被电影、纪念制度与边境治理重新制作的现在。',actions:['以 Whitman 文本作为松散结构而非图解脚本','拍摄战争电影制作现场并让摄影器材/工作人员进入画面','记录争议纪念碑及其城市环境','进入美墨边境拍摄治理空间','以并置方式连接不同历史冲突的当代余波'],sourceUrl:'https://carnegieart.org/exhibition/an-my-le/',images:[],relations:[rel('展览','An-My Lê: On Contested Terrain','Carnegie Museum of Art · organized by Dan Leers'),rel('出版','An-My Lê: On Contested Terrain','Aperture + Carnegie Museum of Art · 2020')]}
    ],
    exhibitions:['An-My Lê: On Contested Terrain, Carnegie Museum of Art, 2020–21'],
    sources:[{label:'Carnegie Museum of Art — On Contested Terrain',url:'https://carnegieart.org/exhibition/an-my-le/'},{label:'Carnegie + Aperture — On Contested Terrain publication',url:'https://carnegieart.org/resource/an-my-le-on-contested-terrain/'},{label:'Carnegie — An-My Lê’s Viêt Nam',url:'https://carnegieart.org/resource/an-my-les-viet-nam/'}]
  },
  'zanele-muholi': {
    note:'进一步强调 Muholi 的“visual activism”不是把政治主题加到肖像上，而是建设一个反复拍摄、命名、保存和公开展示 Black LGBTQIA+ 个体的长期可见性机制。与一次性的新闻见证不同，持续回访同一参与者、让姓名与主体性进入档案，改变了谁能够成为历史图像主体。',
    projects:[
      {title:'Faces and Phases — longitudinal archive method',cluster:'Portrait / community archive / visual activism',period:'2006–',summary:'长期肖像计划把 Black lesbian、trans、gender-nonconforming 等参与者置于正式肖像传统中。方法的关键不是累积“类型”，而是持续回访：同一个人可以在不同人生阶段再次出现，使档案记录年龄、身份表达、教育、工作、关系与生活条件的变化。系列因此同时是肖像、社群关系和反对历史性不可见的持续档案。',actions:['与 Black LGBTQIA+ 社群建立长期合作关系','以正式黑白肖像建立被摄者的视觉尊严','记录参与者姓名与个体身份而非匿名类型','多年后重复拍摄部分参与者','通过展览与出版让私人关系进入公共历史档案'],sourceUrl:'https://www.moma.org/collection/artists/42455',images:[],relations:[rel('收藏','The Museum of Modern Art','Muholi works in collection')]},
      {title:'Visual activism as archive infrastructure',cluster:'Representation / archive / political practice',period:'2000s–',summary:'Muholi 自称 visual activist，摄影实践直接回应南非 Black queer 群体在公共文化中的不可见。其训练背景也连接 Market Photo Workshop——David Goldblatt 于1989年创办、强调摄影作为社会变化与再现工具的机构。把这层教育与社群关系加入档案后，可以更准确地区分 Muholi 与时尚式身份肖像：图像的目标不仅是风格化身体，而是建立谁被保存、命名和进入制度收藏的条件。',actions:['在 Market Photo Workshop 的社会纪录传统中训练','把摄影作为政治可见性工具而非中性记录','持续建立 Black queer 社群影像档案','让肖像进入博物馆、出版与公共讨论','通过自我命名 visual activist 明确实践位置'],sourceUrl:'https://www.moma.org/collection/artists/42455',images:[],relations:[rel('机构','Market Photo Workshop','photographic training; founded by David Goldblatt in 1989')]}
    ],
    sources:[{label:'MoMA — Zanele Muholi',url:'https://www.moma.org/collection/artists/42455'}]
  }
};