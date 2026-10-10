import type { Artist } from './data';

// Source audit: research/updates/2026-10-10-broadening69.md
export const broadeningBatch69: Artist[] = [
  {
    id: 'philippe-vogelenzang', name: 'Philippe Vogelenzang', born: '1982', base: 'Netherlands',
    intro: '荷兰摄影师，以简洁、图标化的人像语言横跨时尚委托与自主创作。在 Foam 3h 的 PS 展览中，他回应 Helmut Newton 的 Big Nudes：不再让女性以带有男性气质的威慑姿态俯视观众，而选择通常因阳刚形象被选角的男性模特，转向柔软、亲近且脆弱的身体呈现。',
    methods: ['人物导演', '黑白肖像', '时尚类型改写', '极简布光', '商业与自主实践交叉'],
    subjects: ['masculinity', 'vulnerability', 'fashion archetypes', 'iconic portraiture', 'gendered gaze', 'body'],
    outputs: ['时尚摄影', '肖像', '杂志委托', '展览系列', '编辑影像'],
    institutions: ['Foam 3h', 'Royal Academy of Art The Hague', 'Vogue', 'V Magazine', 'GQ', 'Jet Root Group'],
    achievements: ['Foam 3h exhibition PS 2016', 'featured in Foam exhibition Don’t Stop Now: Fashion Photography Next 2014', 'international editorial commissions for Vogue, V Magazine and GQ'],
    whyImportant: '关注理由：Vogelenzang 通过替换性别和姿态重写经典时尚图像，使“男性身体也可柔软”直接进入造型与观看关系。不过模仿 Newton 仍把作品锁在一个既有典范内；若只有人物性别变化而摄影权力结构不变，反转容易停留在优雅的视觉置换。',
    projects: [{ year: '2016', title: 'Big Nudes response in PS', type: '以男性模特的柔软与亲密姿态改写 Helmut Newton 经典裸体类型的黑白肖像系列', facts: ['项目为 Foam 3h 的 PS 展览制作，与 Carlijn Jacobs、Elizaveta Porodina 的作品共同回应 Helmut Newton。', 'Vogelenzang 选择通常因阳刚气质被选角的男性模特，对照 Newton 照片中高踞、威慑且被赋予男性化姿态的女性。', '展览于 2016 年 6 月 17 日至 9 月 4 日举行，并强调摄影师在商业与自主实践中持续寻找图标化人物形象。'], reading: '解读：替换后的身体不再靠俯视、硬直和权力感成立，柔和姿势及较少道具把观看压力退回摄影者与模特之间。它脱离说明仍能作为克制的男性裸体成立，但与 Newton 的批评关系需要并置语境才能被识别。' }],
    images: [], sourceLabel: 'Foam — PS: Philippe Vogelenzang', sourceUrl: 'https://www.foam.org/events/ps'
  },
  {
    id: 'felix-van-dam', name: 'Felix van Dam', born: '1986', base: 'Netherlands',
    intro: '荷兰艺术家，与 Jaya Pelupessy 合作研究摄影如何制造而非透明记录图像。两人开发一台结合相机与丝网印刷的装置，使最终印刷在照片和网印之间摇摆；同时把工具、流程和分层结构拍成近似考古发现的抽象图像，让制作步骤与成品获得同等地位。',
    methods: ['相机改造', '丝网印刷', '分层曝光', '过程摄影', '摄影史再实验'],
    subjects: ['image construction', 'photographic truth', 'printing process', 'camera translation', 'medium archaeology', 'fiction and reality'],
    outputs: ['混合摄影印刷', '丝网作品', '装置', '过程图像', '合作研究'],
    institutions: ['Foam 3h', 'Jaya Pelupessy collaboration', 'Gieskes-Strijbis Fund', 'Van Bijlevelt Foundation', 'Dutch experimental photography network'],
    achievements: ['Foam 3h duo exhibition Traces of the Familiar 2016', 'co-developed a camera combining photography and silkscreen printing', 'expanded process-based photographic display across prints and tools'],
    whyImportant: '关注理由：Van Dam 与 Pelupessy 的合作把“摄影是建构”落实到一台具体机器、分层印刷与可见工具，而不是只靠理论声明。风险在于把过程本身神秘化：若观众无法理解相机—网版—印刷之间真正发生的转换，技术装置可能只作为漂亮的黑箱。',
    projects: [{ year: '2016', title: 'Traces of the Familiar', type: '与 Jaya Pelupessy 合作、使用摄影—丝网混合相机追踪图像建构过程的实验项目', facts: ['两位艺术家开发一项把摄影与丝网印刷结合的相机技术，最终图像在照片和丝网版画之间摆动。', '展览同时呈现工具的风格化过程图与分层成品，把探索步骤视为与最终输出同等重要。', '项目于 2016 年 3 月 18 日至 4 月 24 日在 Foam 3h 展出，围绕摄影与现实之间的虚构关系展开。'], reading: '解读：作品的核心不是抽象纹理，而是同一现实痕迹经过相机、网版和多层印刷后逐步失去完整代表性。若展示能让层次和工具一一对应，概念进入了物质结构；若只有神秘机器和结果，观众仍需 statement 才能补齐因果链。' }],
    images: [], sourceLabel: 'Foam — Jaya Pelupessy & Felix van Dam: Traces of the Familiar', sourceUrl: 'https://www.foam.org/events/jaya-pelupessy-felix-van-dam'
  },
  {
    id: 'vincent-delbrouck', name: 'Vincent Delbrouck', born: '1975', base: 'Brussels, Belgium',
    intro: '比利时摄影师，以旅行中的日常物、植物、身体和强烈色彩建立介于摄影、绘画与私人日记之间的联想结构。New Paintings 把古巴、尼泊尔等地的观察与个人记忆、文字及拼贴直觉地组合，拒绝固定故事，让展览和摄影书成为不同地点经验彼此传导的色彩场。',
    methods: ['旅行沉浸', '直觉编辑', '摄影拼贴', '文字与图像组合', '绘画式色彩组织'],
    subjects: ['travel', 'everyday beauty', 'nature', 'memory', 'body', 'uncertainty'],
    outputs: ['摄影', '拼贴', '艺术家书', '文字', '展览装置'],
    institutions: ['Foam 3h', 'Outset | Unseen Exhibition Fund', 'Unseen Amsterdam', 'Gieskes-Strijbis Fund', 'Van Bijlevelt Foundation'],
    achievements: ['Outset | Unseen Exhibition Fund recipient 2015', 'Foam 3h exhibition New Paintings 2016', 'long-term photographic work developed through repeated travel in Cuba and Nepal'],
    whyImportant: '关注理由：Delbrouck 以编辑、拼贴和出版把旅行摄影从地点说明转成感知节奏，补充站内偏研究型项目之外的主观路径。但“流动生命”“美与神秘”容易成为无法证伪的作者语言；若地点、人物和关系都被色彩同化，沉浸也可能退化为旅行者的视觉占有。',
    projects: [{ year: '2016', title: 'New Paintings', type: '将旅行观察、强烈色彩、拼贴与文字组织为绘画式摄影装置的项目', facts: ['作品使用旅行中遇见的简单物体、植物与人体，通过鲜明色彩思考自然之美和所谓“生命流动”。', '艺术家结合图像、拼贴与文字，把个人、情境和虚构视角带入摄影书及展览，而非讲述固定故事。', '项目因艺术家获 2015 Outset | Unseen Exhibition Fund 而在 Foam 展出，展期为 2016 年 2 月 5 日至 3 月 13 日。'], reading: '解读：连续色块和局部身体使不同地点在形式上互相押韵，摄影因此像颜料被重新调度。形式在无说明时依然成立，但具体历史被主动削弱；批评判断应追问联想编辑是否产生新关系，还是只把远方经验统一成作者风格。' }],
    images: [], sourceLabel: 'Foam — Vincent Delbrouck: New Paintings', sourceUrl: 'https://www.foam.org/events/vincent-delbrouck'
  },
  {
    id: 'regine-petersen', name: 'Regine Petersen', born: '1976', base: 'Germany',
    intro: '德国摄影师，以陨石坠落事件连接科学档案、地方记忆与口述历史。Find a Fallen Star 追踪击穿阿拉巴马住宅并击中女性的陨石、战后德国儿童的发现及印度事件，实地访问地点和目击者，再把新摄影、历史图片、文本、访谈与太空相关物件编成章节式叙事。',
    methods: ['口述史访谈', '科学档案研究', '地点重访', '拾得图像编辑', '章节式摄影叙事'],
    subjects: ['meteorites', 'memory and history', 'eyewitness testimony', 'science and myth', 'ordinary and inexplicable', 'time capsule'],
    outputs: ['摄影', '档案图像', '采访文本', '艺术家书', '物件装置'],
    institutions: ['Foam 3h', 'Outset | Unseen Exhibition Fund', 'Royal College of Art', 'Rencontres d’Arles', 'UA Lunar & Planetary Lab', 'Alfried Krupp Foundation'],
    achievements: ['Outset | Unseen Exhibition Fund winner 2014', 'Foam 3h exhibition Find a Fallen Star 2015', 'Alfried Krupp Prize for Contemporary German Photography 2012'],
    whyImportant: '关注理由：Petersen 不把科学事实与神话对立，而研究一个天体事件如何在文件、物件和多人记忆中分裂成不同版本。项目结构清晰，但陨石天然具有奇观吸引力；若普通人的经验只用来为宇宙主题增加诗意，口述史会被降为美学素材。',
    projects: [{ year: '2012–2015', title: 'Find a Fallen Star', type: '围绕三起陨石事件组合实地摄影、目击访谈、历史档案与物件的长期项目', facts: ['项目包含阿拉巴马陨石击穿屋顶并击中女性、战后德国儿童发现陨石，以及印度较近事件等章节。', 'Petersen 访问相关地点和目击者，以自己的照片补充历史及拾得图像、文本、访谈和太空物件。', '同名出版物与展览同步呈现；项目于 2015 年 3 月 20 日至 5 月 3 日在 Foam 3h 展出。'], reading: '解读：陨石像时间胶囊提供物质中心，而照片和证词显示记忆围绕同一物体持续偏移。概念确实进入档案结构；最需要警惕的是把证人故事剪成神秘气氛，必须保留叙述者的时间、语境与矛盾。' }],
    images: [], sourceLabel: 'Foam — Regine Petersen: Find a Fallen Star', sourceUrl: 'https://www.foam.org/events/regine-petersen'
  },
  {
    id: 'bruno-zhu', name: 'Bruno Zhu', born: '1991', base: 'Amsterdam, Netherlands / Portugal',
    intro: '葡萄牙艺术家，以摄影、装饰、家具和空间改造研究消费文化中的欲望。New Arrivals 把 Foam 3h 图书馆改造成失灵的阅读室：从家居目录和生活方式杂志取出家具图像，扫描后按原物尺寸印成贴纸，制造扁平书架、地毯和灯具，让图像同时像物体、表面、幽灵替身与无法使用的商品承诺。',
    methods: ['目录图像挪用', '等比例扫描再印', '空间改造', '装饰作为批评', '摄影物件化'],
    subjects: ['consumer desire', 'domestic interiors', 'lifestyle magazines', 'representation', 'appropriation', 'private and public space'],
    outputs: ['装置', '摄影贴纸', '雕塑家具', '声音与文本', '空间干预'],
    institutions: ['Foam 3h', 'Sandberg Instituut', 'Central Saint Martins', 'Van Bijlevelt Foundation', 'Dutch contemporary art network'],
    achievements: ['first solo museum exhibition New Arrivals at Foam 3h', 'MFA study at Sandberg Instituut', 'Fashion Design degree from Central Saint Martins'],
    whyImportant: '关注理由：Zhu 让商品摄影从目录页面膨胀到原物尺寸，却剥夺其功能，消费欲望因此以“像家具但不能使用”的物质矛盾出现。装饰的幽默感可能掩盖批评：若观众只把空间当成怪诞布景，挪用图像与消费回路之间的关系仍需更明确。',
    projects: [{ year: '2015', title: 'New Arrivals', type: '把家居目录图像按原物尺寸重印为空间贴纸、重塑 Foam 图书馆的摄影装置', facts: ['艺术家从目录和生活方式杂志取用风格化家具图像，扫描并按家具原始尺寸打印成贴纸。', 'Foam 3h 图书馆被扁平且无实用功能的地毯、书架和灯具表征占据，同时加入镜子、桌子、摄影、枕边书、文字与音乐。', '项目研究摄影作为表面与物体、再现与挪用的双重性，并把私人空间母题移入公共阅读室。'], reading: '解读：等比例不是复制真实家具，而是把广告承诺压成薄膜；观众身体能测量尺寸，却无法使用物件，欲望与功能因此分离。作品脱离说明仍具明确矛盾，但 Beyoncé 等私人符号若没有结构作用，可能只是增加作者化趣味。' }],
    images: [], sourceLabel: 'Foam — Bruno Zhu: New Arrivals', sourceUrl: 'https://www.foam.org/events/bruno-zhu'
  },
  {
    id: 'ola-lanko', name: 'Ola Lanko', born: '1985', base: 'Amsterdam, Netherlands',
    intro: '乌克兰出生的摄影艺术家，以自动化拍摄、海量排序和空间安装研究时间。All year round 从阿姆斯特丹住所窗口固定观看 IJ 水道，相机每日自动拍摄约两千张，一年影像按时间排列成 365 条全景色带；远看是天气和昼夜生成的色谱，近看才出现船只、事件与细节。',
    methods: ['固定机位自动拍摄', '大规模图像排序', '时间序列', '全景色带', '线上档案'],
    subjects: ['time', 'IJ waterway', 'weather', 'shipping', 'repetition', 'mechanical observation'],
    outputs: ['365件摄影作品', '空间装置', '在线档案', '数据统计', '连续全景'],
    institutions: ['Foam 3h', 'Gerrit Rietveld Academie', 'Royal Academy of Art The Hague', 'Steenbergen Stipend', 'ING New Talent Photography Award'],
    achievements: ['Foam 3h exhibition All year round 2014', 'Steenbergen Stipend recipient', 'ING New Talent Photography Award 2013'],
    whyImportant: '关注理由：Lanko 让自动相机、图像数量和排序规则直接生成最终形式，把一年从抽象持续转成可步行观看的色带与细节档案。项目也暴露数据化观看的限制：固定窗口把“全年”限定为一个有特权的视点，统计天气与航运不能代表城市时间的全部。',
    projects: [{ year: '2013–2014', title: 'All year round', type: '每天约两千次自动曝光、将 IJ 水道一年压缩为 365 条时间全景的摄影装置', facts: ['相机从艺术家住所窗口每天自动拍摄 IJ 水道约 2,000 张，影像依时间顺序组织，每件作品以一天开始和结束为边界。', '365 件作品合计展开约 21.9 公里；远观呈现受天气和时段影响的色带，近看可辨认船只与经过镜头的事件。', '艺术家统计仅女王节没有商业航运、阴天约为晴天 2.5 倍并记录 1,610 次降雨；全部图像亦保存于在线档案。'], reading: '解读：自动曝光把“等待”外包给机器，编辑规则再把不可观看的数量压缩为身体可比较的日序列，方法—形式链条非常完整。但统计结论容易赋予固定视角虚假总体性；它准确描述的是这扇窗和这台相机的一年。' }],
    images: [], sourceLabel: 'Foam — Ola Lanko: All year round', sourceUrl: 'https://www.foam.org/events/ola-lanko'
  }
];
