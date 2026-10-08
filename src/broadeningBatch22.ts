import type { Artist } from './data';

// Source audit: research/updates/2026-10-08-broadening22.md
export const broadeningBatch22: Artist[] = [
  {
    id: 'dubravka-losic', name: 'Dubravka Lošić', born: '1964', base: 'Dubrovnik / Croatia',
    intro: '出生并工作于 Dubrovnik 的克罗地亚艺术家，以绘画、纺织、金属铸造、拼贴和空间装置持续改造“画面”的物质边界。她把储存、折叠、包裹、腐蚀与缝合转化为造型方法，使私人记忆、战争创伤、城市历史与身体经验通过颜料、织物和工业材料在场。',
    methods: ['绘画向物件转化', '纺织层叠与包裹', '系列长期重做', '场域式编排', '储存痕迹转化'],
    subjects: ['记忆与创伤', 'Dubrovnik 城市经验', '恐惧与美', '自由与独立', '身体性', '物质时间'],
    outputs: ['油画', '纺织绘画—物件', '金属雕塑', '拼贴', '场域装置'],
    institutions: ['La Biennale di Venezia', 'Croatia Pavilion', 'National Museum of Modern Art Zagreb', 'UNESCO Venice Office', 'Croatian Association of Visual Artists'],
    achievements: ['Biennale Arte 2026 · Croatia Pavilion artist', 'Croatian Association of Visual Artists Award for Best Exhibition 2024', '30th Zagreb Salon award'],
    whyImportant: '关注理由：Lošić 的四十年实践没有把绘画史、家族纺织经验和战争后的城市记忆分开，而让材料的包裹、磨损与重新展开承担记忆工作；她也把“仓储”这一通常隐形的条件转化为作品结构。',
    projects: [{
      year: '1986–2026', title: 'Compelled by Fright and Beauty', type: '场域装置、绘画—物件、纺织与金属雕塑／Croatia Pavilion',
      facts: ['展览为 Palazzo Zorzi 的建筑重新编排 Tondo、Libertas Bells、Rosary、Sharks、Imago Anima、Alba Albula 与 Rains Paris 等跨四十年的系列。', '庭院部分并置腐蚀铁、青铜雕塑与彩木、织物构成的绘画—物件，室内则以手势性颜料、织物和形体回应威尼斯空间。', '项目把 Dubrovnik 的自由传统、个人与集体创伤，以及绘画从平面走向环境的过程连在一起。'],
      reading: '解读：旧系列在新建筑中并非回顾展式排列，而被再次切开、缝合和定向；材料保存过往压力的同时也拒绝把创伤固定成纪念碑式结论。'
    }], images: [], sourceLabel: 'Croatia Pavilion 2026 — Compelled by Fright and Beauty', sourceUrl: 'https://losic.nmmu.hr/losic/'
  },
  {
    id: 'sinisa-radulovic', name: 'Siniša Radulović', born: '1983', base: 'Podgorica / Montenegro',
    intro: '出生并工作于 Podgorica 的黑山艺术家，横跨绘画、录像、摄影、声音、雕塑和环境装置。他常从日常居住空间与个人经验出发，把受控的建筑模型、流动影像和感知错位结合起来，研究社会秩序、心理状态、脆弱性与想象如何互相塑造。',
    methods: ['生活空间模型化', '录像—雕塑并置', '感知尺度错位', '玻璃界面建构', '环境声音编排'],
    subjects: ['控制与自由', '脆弱性', '个人—集体经验', '社会秩序', '疗愈', '想象空间'],
    outputs: ['多媒体空间装置', '录像投影', '声音', '雕塑', '绘画与摄影'],
    institutions: ['La Biennale di Venezia', 'Montenegro Pavilion', 'Museum of Contemporary Art of Montenegro', 'October Salon', 'MuseumsQuartier Vienna'],
    achievements: ['Biennale Arte 2026 · Montenegro Pavilion artist', 'Milčik Young Visual Artist Award 2017', 'Herceg Novi Winter Art Salon Grand Prix 2016'],
    whyImportant: '关注理由：Radulović 不把“控制”仅当作政治口号，而将它落实为观众脚下透明、分割且仿佛无菌的空间；与上方流动影像的张力，使社会结构和心理恢复成为一种需要身体穿越的尺度关系。',
    projects: [{
      year: '2025–2026', title: 'Out of the Blue, I’m Swept Away', type: '玻璃地面、微型空间、巨幅录像投影与声音／Montenegro Pavilion',
      facts: ['玻璃覆盖的地面下方形成被分割的地下世界，其构造源自艺术家的个人生活空间。', '巨幅投影与声音强调流动、开放和漂移，与地面结构的洁净、均质和控制形成对照。', '作品以雕塑、录像和声音交织个人与集体经验，并把疗愈理解为不稳定的移动过程。'],
      reading: '解读：观众站在透明表面之上，既能观察秩序也被秩序承托；投影中的流动不是轻易的逃离，而是在严密分区上方持续争取松动的感知练习。'
    }], images: [], sourceLabel: 'Museum of Contemporary Art of Montenegro — Venice Biennale 2026', sourceUrl: 'https://msucg.me/en/the-project-out-of-blue-i-m-swept-away-by-artist-sinisa-radulovic-and-curator-dr-svetlana-racanovic-will-represent-montenegro-at-the-61st-venice-bi/'
  },
  {
    id: 'predrag-djakovic', name: 'Predrag Djaković', born: '1964', base: 'Prague / Czech Republic',
    intro: '出生于 Derventa、长期生活于 Prague 的塞尔维亚—捷克艺术家，以绘画、素描、壁画、雕塑、装置和音乐处理前南斯拉夫历史、迁徙、暴力、神话与记忆。他在诗性表现主义和新立体主义之间建立象征形体，并把个人档案、行政文件、旧物和即兴音乐组织成跨媒介见证。',
    methods: ['表现性绘画', '迁徙档案组装', '历史碎片蒙太奇', '旧物证词化', '绘画—音乐互译'],
    subjects: ['流亡与驱逐', '巴尔干战争', 'Holocaust 记忆', '失败的归返', '神话与历史', '爵士与即兴'],
    outputs: ['绘画', '档案装置', '雕塑', '录像', '钢琴即兴'],
    institutions: ['La Biennale di Venezia', 'Serbia Pavilion', 'Museum of Contemporary Art Belgrade', 'Gallery of Matica Srpska', 'Academy of Fine Arts Prague'],
    achievements: ['Biennale Arte 2026 · Serbia Pavilion artist', 'Serbia Gold Medal for Extraordinary Achievements in Art 2022', 'Salvador Dalí Prize 1996'],
    whyImportant: '关注理由：Djaković 把二十世纪历史从单线叙事拆成可搬运、可遗失的物证网络；当行政文件、地图、家族照片、旧旅行箱与本人演奏同时出现，历史既是制度留下的记录，也是身体不断尝试携带的残片。',
    projects: [{
      year: '2023–2026', title: 'Through Golgotha to Resurrection', type: '档案装置、百余只旧旅行箱、录像与钢琴声音／Serbia Pavilion',
      facts: ['装置汇集照片、个人档案、地图和行政文件，以非线性碎片追问二十世纪记忆如何在废墟中继续存在。', '一百余只旧旅行箱构成可移动档案，指向流亡、驱逐、迁移与未能实现的归返。', '艺术家创作并演奏的 A 小调钢琴即兴作为录像和空间声音的一部分。'],
      reading: '解读：旅行箱既是私人容器也是大规模人口移动的重复单位；A 小调即兴拒绝为档案提供封闭结论，使观看在哀悼、见证和继续生活之间保持未完成。'
    }], images: [], sourceLabel: 'La Biennale di Venezia — Serbia Pavilion 2026', sourceUrl: 'https://www.labiennale.org/en/art/2026/serbia'
  },
  {
    id: 'brilant-milazimi', name: 'Brilant Milazimi', born: '1994', base: 'Prishtina / Kosovo',
    intro: '出生于 Gjilan、常驻 Prishtina 的科索沃画家，将无意识逻辑、虚构景观与社会观察压缩进苦涩、温柔、黑色幽默并存的图像。他以变形面孔、动物、咬紧的牙齿和不安的人群，把日常心理压力、未解决的冲突、等待与生存韧性转化为介于梦境和威胁之间的绘画空间。',
    methods: ['心理景观建构', '形体夸张', '梦境逻辑', '重复母题', '尺度沉浸化'],
    subjects: ['等待', '悬置的主权', '社会紧张', '伤害与生存', '乡村地景', '未解决的冲突'],
    outputs: ['大型绘画', '纸上作品', '沉浸式绘画装置'],
    institutions: ['La Biennale di Venezia', 'Kosovo Pavilion', 'National Gallery of Kosovo', 'Manifesta 14', 'Autostrada Biennale', 'Ludwig Museum Budapest'],
    achievements: ['Biennale Arte 2026 · Kosovo Pavilion artist', 'Artist of Tomorrow Award Kosovo 2020', 'Art Explora × Cité internationale des arts residency 2024'],
    whyImportant: '关注理由：Milazimi 以具象绘画处理通常由行政和法律语言垄断的“等待”，让排队、紧咬的牙齿和崎岖地貌承载主权不确定性；他的图像既可读为具体区域经验，也保留梦境般的开放与不可靠。',
    projects: [{
      year: '2026', title: 'Hard Teeth (Dhëmbë të Fortë)', type: '17 米长绘画与沉浸式装置／Kosovo Pavilion',
      facts: ['核心作品是一幅 17 米长的风景画，队列中的人物沿着类似 Kosovo 乡村的山地紧密站立。', '队列没有清楚起点、终点或等待对象，使排队成为政治与心理悬置的结构。', '画面延续艺术家反复出现的紧咬牙齿、变形身体与动物性暗示，把伤害和坚持置于同一视觉气候中。'],
      reading: '解读：队列将每个身体变成行政次序中的一格，但山地和夸张形体又不断破坏秩序；“硬牙齿”既像自我保护，也像压力被迫停留在身体内部的痕迹。'
    }], images: [], sourceLabel: 'Kosovo Pavilion 2026 — Brilant Milazimi', sourceUrl: 'https://hardteeth.pavilionofkosovo.com/artist'
  },
  {
    id: 'raphael-vella', name: 'Raphael Vella', born: '1967', base: 'Malta',
    intro: '出生于 Sliema、常驻 Malta 的艺术家、策展人和教育者，以素描、拼贴、逐格动画、装置和社会参与项目研究政治、医学、文本与知识制度。他擅长把密集手绘劳动转译为移动影像，再以压缩档案、口号、工业物件和声音追问公共表达如何被保存、重演或失去效力。',
    methods: ['逐格手绘动画', '抗议档案重组', '文本—图像转译', '工业压缩', '教育与社会参与'],
    subjects: ['抗议与革命', '公共记忆', '政治失效', '身体与医学', '文本性', '艺术教育'],
    outputs: ['双频道动画', '素描', '拼贴', '装置', '公共与教育项目'],
    institutions: ['La Biennale di Venezia', 'Malta Pavilion', 'University of Malta', 'Modern Art Oxford', 'Arts Council Malta'],
    achievements: ['Biennale Arte 2026 · Malta Pavilion artist', 'Commonwealth Art and Craft Award 1998', 'Fulbright Scholar 2001'],
    whyImportant: '关注理由：Vella 不把抗议图像浪漫化为自动有效的政治力量，而同时展示口号的生成、循环与被压扁；成千上万张手绘画面的出现和消失，让“革命”既是共同记忆，也是随时可能被消费和遗忘的媒介劳动。',
    projects: [{
      year: '2026', title: 'Praying for a Revolution That Will Never Come', type: '双频道逐格动画、声音与压缩抗议物／Malta Pavilion',
      facts: ['作品从一个世纪的 Maltese 抗议与公民示威中提取档案影像、口号、现场声音和艺术家自行拍摄的材料。', '成千上万张手绘图像在双频道动画中形成又消散，把历史画面从固定档案转为反复生成的视觉劳动。', '工业压缩的抗议海报与横幅成为实体装置，回应 Malta Constitution Article 42 所保障的集会和结社权。'],
      reading: '解读：动画的连续性来自大量短暂图像，而压缩物则把公共语言变成几乎不可读的块体；两者之间的落差提示抗议既需重复行动，也可能被纪念机制去活化。'
    }], images: [], sourceLabel: 'Arts Council Malta — Malta Pavilion 2026', sourceUrl: 'https://artscouncilmalta.gov.mt/en/malta-at-the-venice-biennale-2026/'
  },
  {
    id: 'zadik-zadikian', name: 'Zadik Zadikian', born: '1948', base: 'Los Angeles / United States',
    intro: '出生于 Yerevan、常驻 Los Angeles 的亚美尼亚裔雕塑家，以砖块和模块单元、石膏、颜料、金箔及大尺度空间转换探究最基本形体如何生成纪念性结构。他曾协助 Beniamino Bufano 与 Richard Serra，随后以高强度重复劳动在极简与奢华、单体与整体、工坊与展览之间建立自己的物质语言。',
    methods: ['模块重复与重组', '铸造与手工生产', '表面统一化', '持续现场制作', '尺度累积'],
    subjects: ['一与多', '劳动纪律', '基本结构', '永恒与时间', '生产过程', '离散身份'],
    outputs: ['雕塑', '石膏铸件', '金箔装置', '颜料浸染结构', '现场工作室'],
    institutions: ['La Biennale di Venezia', 'Armenia Pavilion', 'Art Academy of Yerevan', 'Tony Shafrazi Gallery'],
    achievements: ['Biennale Arte 2026 · Armenia Pavilion artist', 'Richard Serra studio assistant in the 1970s'],
    whyImportant: '关注理由：Zadikian 让重复劳动本身成为可见内容：砖块不再只是象征性“基本单元”，而是铸造、着色、搬运和组合的事实。将国家馆变成持续工作的工坊，也扰动了双年展通常只展示完成品的时间制度。',
    projects: [{
      year: '2026', title: 'The Studio', type: '持续生产的工坊、石膏铸件与颜料浸染模块结构／Armenia Pavilion',
      facts: ['展期六个月内，国家馆作为持续运作的 atelier，公开呈现研究、铸造、组装和成形过程。', '基础单元是砖块般的石膏铸件，经变化和重组形成与人体尺度相关、渗入颜料的结构。', '展场同时具有工作间、工厂和实验室属性，作品在观看期间持续演变而非固定完成。'],
      reading: '解读：把生产留在展场并不只是“幕后公开”，而是让每个最小单元同时携带个体劳动和集体结构；纪念性由累积关系产生，不依赖预先设定的象征。'
    }], images: [], sourceLabel: 'La Biennale di Venezia — Armenia Pavilion 2026', sourceUrl: 'https://www.labiennale.org/en/art/2026/armenia-republic'
  }
];
