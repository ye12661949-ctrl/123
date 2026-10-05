import type { ArtistArchive } from './archiveData';

const img=(url:string,title:string,credit:string,sourceUrl:string,sourceLabel:string)=>({url,title,credit,sourceUrl,sourceLabel});
const rel=(kind:'展览'|'出版'|'奖项'|'收藏'|'策展',label:string,detail?:string)=>({kind,label,detail});

export const archiveBatch327: Record<string, ArtistArchive> = {
  'francis-alys': {
    artistId:'francis-alys', projectCoverage:'3 个核心项目深档案', imageCoverage:'3 / 3 项目含可追溯图像入口',
    note:'把 Alÿs 从“步行艺术家”深化为以行动、重复、档案和寓言测试城市、现代化与集体劳动的实践；项目不是一次事件，而由行动、记录、绘画/地图和传播共同构成。',
    projects:[
      {title:'When Faith Moves Mountains',cluster:'Collective action / progress',period:'2002',summary:'500名志愿者在利马郊外排成队，用铲子同步把沙丘移动约几英寸；MoMA把作品概括为“最大努力、最小结果”，并将其与拉丁美洲社会中巨大集体努力只换来微小改革的经验联系起来。',actions:['招募500名志愿者','制定同步铲沙规则','以16mm录像、照片、绘画、地图和文字记录行动','让口述、传闻和都市神话继续传播作品'],sourceUrl:'https://www.moma.org/collection/works/109922',images:[img('https://www.moma.org/media/W1siZiIsIjQwODg1MSJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg','When Faith Moves Mountains','© Francis Alÿs / MoMA','https://www.moma.org/collection/works/109922','MoMA')],relations:[rel('展览','MoMA / MoMA PS1: A Story of Deception','2011'),rel('收藏','MoMA collection','installation includes films, drawings, photographs, maps and prints')]},
      {title:'The Modern Procession',cluster:'Institution / public space',period:'2002',summary:'为 MoMA 搬迁至 Queens 而设计的城市游行：约100人从曼哈顿旧馆出发，携带馆藏作品复制品、横幅、乐队和“活的偶像”Kiki Smith，步行至 MoMA QNS。',actions:['把博物馆搬迁转成公共仪式','借用宗教 procession 的形式','复制馆藏并让其穿越城市','拍摄并剪辑行动的多个版本'],sourceUrl:'https://www.moma.org/calendar/exhibitions/151',images:[img('https://www.moma.org/media/W1siZiIsIjE2NzM4MyJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg','The Modern Procession','© Francis Alÿs / MoMA','https://www.moma.org/calendar/exhibitions/151','MoMA')],relations:[rel('展览','Projects 76: Francis Alÿs, MoMA','2002'),rel('策展','Public Art Fund','commission / collaboration')]},
      {title:'Re-enactments',cluster:'Rehearsal / documentation',period:'2001',summary:'Alÿs 在墨西哥城持枪行走直到被警察逮捕；第二天在警方合作下重演同一行动。MoMA指出原始事件与重演并置后，真实性、媒体戏剧化和“记录”本身成为作品问题。',actions:['制造一次真实但短暂的公共行动','保留原始新闻式记录','与警方合作重演','并置两次事件以扰动真实性'],sourceUrl:'https://www.moma.org/interactives/exhibitions/2011/francisalys/',images:[],relations:[rel('展览','Francis Alÿs: A Story of Deception, MoMA','2011'),rel('收藏','MoMA collection','video installation')]},
    ],
    awards:['MoMA / MoMA PS1 retrospective, 2011'], exhibitions:['Projects 76, MoMA, 2002','Francis Alÿs: A Story of Deception, MoMA / MoMA PS1, 2011'], sources:[{label:'MoMA artist page',url:'https://www.moma.org/artists/8383-francis-alys'},{label:'MoMA When Faith Moves Mountains',url:'https://www.moma.org/collection/works/109922'},{label:'MoMA Modern Procession',url:'https://www.moma.org/calendar/exhibitions/151'}]
  },
  'yto-barrada': {
    artistId:'yto-barrada',projectCoverage:'3 个核心项目深档案',imageCoverage:'1 / 3 项目含可追溯图像入口',
    note:'Barrada 的关键不是“拍丹吉尔”，而是把城市、边境、迁移、现代主义历史与文化基础设施放在同一套抵抗策略中；她同时拍摄、剪辑、印刷、缝制、出版并运营电影机构。',
    projects:[
      {title:'The Strait Project',cluster:'Tangier / border',period:'1998–',summary:'从丹吉尔出发长期研究直布罗陀海峡如何作为地理、政治和心理边界进入日常生活；迁移限制、等待、城市景观和地方现代性成为反复出现的结构。',actions:['街头摄影','电影记录','城市观察','把个人经验连接到申根与迁移政治'],sourceUrl:'https://www.moma.org/collection/artists/42323',images:[],relations:[rel('收藏','MoMA','photography and film in collection')]},
      {title:'Cinémathèque de Tanger',cluster:'Institution building',period:'2006–',summary:'参与把丹吉尔一座1930年代电影院转化为非营利电影资料馆与公共文化空间；机构收藏并放映北非及中东电影，使文化生产从作品进入基础设施。',actions:['参与建筑与机构改造','建立电影档案与放映体系','通过公共节目保存区域电影文化'],sourceUrl:'https://www.moma.org/collection/artists/42323',images:[],relations:[rel('收藏','MoMA','artist profile and collection context')]},
      {title:'Artist’s Choice: A Raft',cluster:'Museum / archive',period:'2021–2022',summary:'Barrada 为 MoMA 选择和编排作品，把个人艺术史、迁移、城市与抵抗策略带入博物馆收藏的重新观看。',actions:['选择馆藏','重组展示关系','把艺术史与个人/区域历史并置'],sourceUrl:'https://www.moma.org/collection/artists/42323',images:[],relations:[rel('展览','Artist’s Choice: Yto Barrada—A Raft, MoMA','2021–2022')]},
    ],awards:['MoMA Artist’s Choice, 2021–22'],exhibitions:['Artist’s Choice: A Raft, MoMA, 2021–22'],sources:[{label:'MoMA artist profile',url:'https://www.moma.org/collection/artists/42323'}]
  },
  'wangechi-mutu': {
    artistId:'wangechi-mutu',projectCoverage:'3 个核心项目深档案',imageCoverage:'2 / 3 项目含可追溯图像入口',
    note:'Mutu 从拼贴中的身体切割与重组发展到大型雕塑和公共建筑介入；她借用非洲与欧洲艺术史中的身体类型，同时让女性身体脱离被观看、被承重和被消费的位置。',
    projects:[
      {title:'The NewOnes, will free Us',cluster:'Caryatid / public sculpture',period:'2019',summary:'为 Met 首个立面年度委托创作四件青铜女性雕塑 The Seated I–IV。Mutu重新解释 caryatid：传统上承担建筑重量的女性形象在她这里成为自主、守护和自我定义的主体。',actions:['研究 Met 的非洲、希腊和欧洲馆藏','设计四个独立女性形体','铸造青铜并加入线圈、镜面圆盘等装饰','直接介入新古典主义建筑立面'],sourceUrl:'https://www.metmuseum.org/de/press/exhibitions/2019/wangechi-mutu',images:[img('https://collectionapi.metmuseum.org/api/collection/v1/iiif/830456/1955579/main-image','The Seated III','© Wangechi Mutu / The Met','https://www.metmuseum.org/art/collection/search/830456','The Metropolitan Museum of Art')],relations:[rel('展览','The Met Facade Commission','2019–2020'),rel('策展','Kelly Baum / Sheena Wagstaff, The Met','commission curatorial team'),rel('收藏','The Met','The Seated I and III acquired 2020')]},
      {title:'My Strength Lies',cluster:'Collage / hybrid body',period:'2006',summary:'大型混合媒介拼贴以墨水、亮片和杂志图像碎片构成混合身体；女性身体同时成为种族、消费文化、科技和未来想象的视觉战场。',actions:['剪裁杂志图像','叠加绘画与装饰材料','拼接人体、机械与有机形态'],sourceUrl:'https://www.metmuseum.org/de/press/exhibitions/2019/wangechi-mutu',images:[],relations:[rel('收藏','The Met','Mutu represented in contemporary collection')]},
      {title:'A Fantastic Journey',cluster:'Survey / transformation',period:'2013–2014',summary:'大型巡回个展把绘画、拼贴、雕塑和影像放在一起，呈现 Mutu 如何从二维身体拼贴扩展到沉浸式和三维混合形体。',actions:['跨媒介编排','把长期视觉母题扩展到空间','让身体成为连续实验而非固定图像'],sourceUrl:'https://www.metmuseum.org/de/press/exhibitions/2019/wangechi-mutu',images:[],relations:[rel('展览','A Fantastic Journey','Brooklyn Museum / Nasher / MCA North Miami / Block Museum')]},
    ],awards:['Deutsche Bank Artist of the Year','Joan Mitchell Foundation Painters & Sculptors Award','American Federation of Arts Leadership Award'],exhibitions:['Whitney Biennial, 2019','The Met Facade Commission, 2019–20'],sources:[{label:'The Met commission',url:'https://www.metmuseum.org/de/press/exhibitions/2019/wangechi-mutu'},{label:'The Seated III collection record',url:'https://www.metmuseum.org/art/collection/search/830456'}]
  },
  'otobong-nkanga': {
    artistId:'otobong-nkanga',projectCoverage:'2 个核心项目深档案',imageCoverage:'0 / 2 项目图像待补',
    note:'Nkanga 的实践把土地从“景观”转成资源、劳动、身体、所有权和资本流动的物质网络；绘画、纺织、摄影、表演和装置之间的转换对应资源被开采、切割、运输和再商品化。',
    projects:[
      {title:'From Where I Stand',cluster:'Land / extraction',period:'2019–2020',summary:'跨媒介展览把绘画、摄影、挂毯、装置、录像与表演组织在一起，围绕土地获取、所有权、资源和身体之间的关系展开。',actions:['绘制地图与土地关系','制作挂毯和绘画','把摄影与录像作为调查记录','通过表演把身体放进资源政治'],sourceUrl:'https://www.tate.org.uk/',images:[],relations:[rel('展览','From Where I Stand, Tate St Ives','2019–2020')]},
      {title:'Carved to Flow',cluster:'Commodity / resource chain',period:'2017',summary:'以香皂为具体商品入口，追踪原料、生产、贸易和消费之间的全球链条，把一个日常物件变成资源政治的可触摸模型。',actions:['研究香皂生产与原料','连接不同地区的生产和流通','把商品作为社会关系的载体'],sourceUrl:'https://www.tate.org.uk/',images:[],relations:[rel('展览','documenta 14','2017')]},
    ],awards:['documenta 14 participant, 2017'],exhibitions:['From Where I Stand, Tate St Ives, 2019–20','documenta 14, 2017'],sources:[{label:'Tate',url:'https://www.tate.org.uk/art/artists/otobong-nkanga-13080'}]
  },
  'theaster-gates': {
    artistId:'theaster-gates',projectCoverage:'3 个核心项目深档案',imageCoverage:'1 / 3 项目含可追溯图像入口',
    note:'Gates 最重要的转向是把“艺术对象”扩展成照护、收藏、建筑修复和社区基础设施；废弃建筑、被丢弃的档案与黑人文化材料被重新赋予公共价值。',
    projects:[
      {title:'Dorchester Projects',cluster:'Architecture / community',period:'2009–',summary:'在芝加哥 South Side 把废弃住宅改造成图书馆、档案馆、艺术家空间、住宅和公共文化场所；建筑修复本身就是长期社会实践。',actions:['购买并修复废弃建筑','建立图书馆和档案','组织表演、聚会和驻留','把收藏放回社区使用'],sourceUrl:'https://www.walkerart.org/whats-on/theaster-gates/',images:[],relations:[rel('机构','Rebuild Foundation','long-term community infrastructure')]},
      {title:'Stony Island Arts Bank',cluster:'Archive / building',period:'2012–',summary:'修复废弃银行建筑并将其变成艺术、档案和社区空间，保存数以千计的物件，包括原本可能被淘汰的玻璃幻灯片等知识材料。',actions:['建筑修复','收藏被丢弃的档案','建立公共研究与展示空间','让物件通过照护重新获得社会生命'],sourceUrl:'https://www.walkerart.org/reader/curatorial-perspective-victoria-sung-on-theaster-gates-assembly-hall/',images:[],relations:[rel('机构','Rebuild Foundation','Stony Island Arts Bank')]},
      {title:'Assembly Hall',cluster:'Museum / archive',period:'2019–2020',summary:'Walker Art Center 将 Gates 的收藏和工作室环境转入四个沉浸式房间；包括 University of Chicago 约60,000张玻璃幻灯片等被淘汰知识材料。',actions:['把个人收藏转成空间','保存玻璃幻灯片与黑人文化档案','在博物馆内重建社区式观看和交谈环境'],sourceUrl:'https://www.walkerart.org/whats-on/theaster-gates/',images:[],relations:[rel('展览','Theaster Gates: Assembly Hall, Walker Art Center','2019–2020'),rel('策展','Victoria Sung','curatorial perspective')]},
    ],awards:['Guggenheim Fellowship, 2025'],exhibitions:['Assembly Hall, Walker Art Center, 2019–20'],sources:[{label:'Walker Art Center',url:'https://www.walkerart.org/whats-on/theaster-gates/'},{label:'Walker curatorial essay',url:'https://www.walkerart.org/reader/curatorial-perspective-victoria-sung-on-theaster-gates-assembly-hall/'}]
  },
  'zineb-sedira': {
    artistId:'zineb-sedira',projectCoverage:'2 个核心项目深档案',imageCoverage:'0 / 2 项目图像待补',
    note:'Sedira 不是单纯把家庭记忆摄影化，而是把家庭、电影史、阿尔及利亚独立与移民经历重新编成可被共同观看的历史舞台；她常通过重演、布景、档案和表演让私人记忆进入公共历史。',
    projects:[
      {title:'Dreams Have No Titles',cluster:'Film / decolonisation',period:'2022',summary:'代表法国参加第59届威尼斯双年展；以激进电影、家庭移民经历和阿尔及利亚去殖民历史为材料，重建电影场景与家庭文化记忆。',actions:['研究激进电影史','重建电影场景','调用家庭照片与物件','通过表演和装置把私人记忆公共化'],sourceUrl:'https://shop.tate.org.uk/zineb-sedira-when-words-fall-silent%E2%80%A6-2026/ed1161.html',images:[],relations:[rel('展览','59th Venice Biennale, France Pavilion','2022')]},
      {title:'WHEN WORDS FALL SILENT…',cluster:'History / archive',period:'2026–2027',summary:'Tate Britain Duveen Commission，以20世纪60–70年代非洲独立与去殖民历史为背景继续研究历史记忆、档案与沉默。',actions:['研究去殖民档案','在博物馆建筑中构造大型叙事环境','把历史材料与当代观看连接'],sourceUrl:'https://shop.tate.org.uk/zineb-sedira-when-words-fall-silent%E2%80%A6-2026/ed1161.html',images:[],relations:[rel('展览','Tate Britain Duveen Commission','2026–27')]},
    ],awards:['France Pavilion, Venice Biennale 2022'],exhibitions:['Dreams Have No Titles, Venice Biennale, 2022','Tate Britain Duveen Commission, 2026–27'],sources:[{label:'Tate',url:'https://shop.tate.org.uk/zineb-sedira-when-words-fall-silent%E2%80%A6-2026/ed1161.html'}]
  },
  'samia-halaby': {
    artistId:'samia-halaby',projectCoverage:'2 个核心项目深档案',imageCoverage:'2 / 2 项目含可追溯图像入口',
    note:'Halaby 是很值得单独建立技术谱系的艺术家：她不是后来把绘画“数字化”，而是在 Commodore Amiga 时代就把编程当作绘画工具，自己写程序生成连续变化的颜色和形状。',
    projects:[
      {title:'Kinetic Painting Program',cluster:'Code / painting',period:'1980s–1990s–',summary:'自学 Commodore Amiga 编程并开发自己的程序，与音乐家 Kevin Nathaniel Hylton、Hasan Bakr 合作；程序生成抽象形状，Halaby 用键盘实时操纵，使计算机成为数字绘画仪器。',actions:['学习早期个人计算机编程','编写生成视觉的程序','实时键盘操控颜色和形状','把动画中的单帧发展为可打印作品'],sourceUrl:'https://shop.tate.org.uk/samia-halaby-yafa-2024/ed1122.html',images:[img('https://shop.tate.org.uk/media/catalog/product/cache/8d6d8d6f0b4b3f7a8f4c7d3c2f3a4e1a/s/a/samia_halaby_yafa_2024.jpg','Yafa, 2024','© Samia Halaby / Tate','https://shop.tate.org.uk/samia-halaby-yafa-2024/ed1122.html','Tate')],relations:[rel('展览','Electric Dreams, Tate Modern','28 Nov 2024–1 Jun 2025')]},
      {title:'Yafa / City',cluster:'Digital stills / animation',period:'2024',summary:'Tate为 Electric Dreams 制作的限量版来自 Halaby 称为“kinetic painting”的动态抽象动画；单张数字颜料印刷把连续运动中的一帧重新物质化。',actions:['从运动动画中截取单帧','数字颜料印刷在纸上','把屏幕时间转换为静态作品'],sourceUrl:'https://shop.tate.org.uk/samia-halaby-city-2024/ed1120.html',images:[img('https://shop.tate.org.uk/media/catalog/product/cache/8d6d8d6f0b4b3f7a8f4c7d3c2f3a4e1a/s/a/samia_halaby_city_2024.jpg','City, 2024','© Samia Halaby / Tate','https://shop.tate.org.uk/samia-halaby-city-2024/ed1120.html','Tate')],relations:[rel('展览','Electric Dreams, Tate Modern','2024–25'),rel('出版','Tate limited editions','2024')]},
    ],awards:['Early digital-art innovator, 1980s–90s'],exhibitions:['Electric Dreams, Tate Modern, 2024–25'],sources:[{label:'Tate / Yafa',url:'https://shop.tate.org.uk/samia-halaby-yafa-2024/ed1122.html'},{label:'Tate / City',url:'https://shop.tate.org.uk/samia-halaby-city-2024/ed1120.html'}]
  }
};