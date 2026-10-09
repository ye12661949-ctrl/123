import type { Artist } from './data';

// Source audit: research/updates/2026-10-09-broadening52.md
export const broadeningBatch52: Artist[] = [
  {
    id: 'tom-fecht', name: 'Tom Fecht', born: '1952', base: 'Berlin, Germany / Geneva, Switzerland',
    intro: '德国跨学科艺术家，早年学习物理、热力学与控制论，长期把科学成像、摄影技术与环境现象连接起来。他在布列塔尼大西洋海岸以低光摄影记录冷水浮游生物的天然生物发光，让肉眼几乎不可见的电光成为海洋升温与生态临界点的可视信号。',
    methods: ['科学成像实验', '低光夜景摄影', '长期海岸田野', '技术专利与摄影结合', '不可见环境现象可视化'],
    subjects: ['bioluminescent plankton', 'Atlantic coast', 'ocean warming', 'twilight', 'environmental thresholds', 'fear and the sublime'],
    outputs: ['低光摄影', '海景系列', '摄影装置', '技术实验', '展览'],
    institutions: ['Prix Pictet', 'Documenta IX', 'Nationalgalerie Berlin', 'Museum Folkwang', 'New York Public Library', 'CERN'],
    achievements: ['Prix Pictet Storm shortlist 2025', 'Documenta IX participation 1992', 'CERN exhibition 2023'],
    whyImportant: '关注理由：Fecht 让微小浮游生物的短暂放电承担尺度巨大的气候叙事，把科学可见性与海洋崇高经验放在同一画面。作品的幽暗和发光具有强烈吸引力，但这种美感也可能把生态危机转化为宇宙式奇观；物种、温度变化与拍摄条件必须留在解读中。',
    projects: [{ year: '2015–2025', title: 'Luciferines — entre chien et loup', type: '布列塔尼海岸天然生物发光的长期低光摄影', facts: ['系列在布列塔尼大西洋海岸拍摄冷水浮游生物 Luciferines；它们在满月繁殖并接触分子氧时产生电光。', '艺术家选择月光反射与最初蓝色晨光交汇的暮光时段，使肉眼几乎不可见的放电留下摄影痕迹。', '项目把这些受海水升温威胁的生物视为海洋接近临界点的信号，并延续 Fecht 对夜景、海景和科学成像的研究。'], reading: '解读：黑暗海面中的旋涡和微光既像天体图像，也来自极小尺度的生命活动，制造宏观与微观的错位。摄影把不可见现象变成证据；若只强调神秘光效，它也会弱化海洋变暖的具体因果。' }],
    images: [], sourceLabel: 'Prix Pictet — Tom Fecht: Luciferines — entre chien et loup', sourceUrl: 'https://prix.pictet.com/cycles/storm/tom-fecht'
  },
  {
    id: 'balazs-gardi', name: 'Balazs Gardi', born: '1975', base: 'Oakland, California, USA',
    intro: '匈牙利出生的纪实摄影师与长期项目作者，从战地报道出发，持续研究人类与环境之间的紧张关系。他以时间标记和现场沉浸方式拍摄 2020 年美国大选至 2021 年 1 月 6 日国会大厦袭击，把政治宣传、街头动员与民主制度滑坡组织成一场逐渐逼近的“风暴”。',
    methods: ['沉浸式新闻摄影', '长期事件跟踪', '精确时间地点标注', '冲突现场近距离拍摄', '历史经验对照'],
    subjects: ['January 6 Capitol attack', 'political extremism', 'demagoguery', 'democratic erosion', 'crowd violence', 'propaganda'],
    outputs: ['纪实摄影', '新闻报道', '长期项目', '展览', '视觉证言'],
    institutions: ['Prix Pictet', 'World Press Photo', 'Magnum Foundation', 'Museum of Fine Arts Houston', 'European Parliament', 'Saatchi Gallery'],
    achievements: ['Prix Pictet Storm shortlist 2025', 'Bayeux Calvados Award 2008', 'three World Press Photo first prizes'],
    whyImportant: '关注理由：Gardi 把“风暴”从自然灾害转向政治气候，并以自己在后社会主义匈牙利观察宣传政治的经验读取美国极端化。贴近冲突能保存制度危机的身体强度；同样需要警惕最激烈的画面把复杂政治过程缩减为暴民奇观。',
    projects: [{ year: '2020–2021', title: 'The Storm', type: '从美国大选到国会大厦袭击的沉浸式政治纪实', facts: ['系列从 2020 年美国总统大选后的集会展开，并在 2021 年 1 月 6 日国会大厦袭击现场达到高潮。', '作品逐张保留拍摄时间与地点，记录催泪化学剂、眩晕弹、橡胶子弹、路障及近距离肢体冲突。', 'Gardi 将这段美国经历与自己在匈牙利目睹恶意宣传侵蚀新民主制度的记忆并置。'], reading: '解读：精确时间标题让图像成为连续证词，而烟雾、奔跑和身体挤压把抽象制度危机拉回现场。系列若只保留戏剧高潮，会使政治组织与传播机制消失，因此前后时间线与文字语境不可缺位。' }],
    images: [], sourceLabel: 'Prix Pictet — Balazs Gardi: The Storm', sourceUrl: 'https://prix.pictet.com/cycles/storm/balazs-gardi'
  },
  {
    id: 'hannah-modigh', name: 'Hannah Modigh', born: '1980', base: 'Stockholm, Sweden',
    intro: '瑞典摄影艺术家，以社会参与和自传性纪实研究遗产、记忆与时间。她使用模拟胶片与摄影装置，在路易斯安那州把年度飓风威胁、贫困、种族历史与日常压抑并置，借风暴作为社会情绪濒临爆发的隐喻，同时保持人物和地方经验的具体性。',
    methods: ['模拟胶片摄影', '长期社会纪实', '环境肖像', '自传性观察', '摄影装置'],
    subjects: ['southern Louisiana', 'racial inheritance', 'poverty', 'hurricane threat', 'fear and anger', 'intergenerational memory'],
    outputs: ['模拟摄影', '摄影书', '摄影装置', '展览', '长期组照'],
    institutions: ['Prix Pictet', 'Moderna Museet', 'Deichtorhallen', 'Rencontres d’Arles', 'Gallery of Photography Dublin', 'Münchner Stadtmuseum'],
    achievements: ['Prix Pictet Storm shortlist 2025', 'Swedish Photo Book Prize 2010', 'Lars Tunbjörk Prize 2017'],
    whyImportant: '关注理由：Modigh 不把飓风仅当作灾害景观，而将它与代际恐惧、种族历史和贫困造成的持续压力并置。她的模拟摄影保留南方湿热环境与人物脆弱感，但气象隐喻也可能把制度性不平等自然化；作品需要明确区分自然威胁与人为结构。',
    projects: [{ year: '2012–2016', title: 'Hurricane Season', type: '路易斯安那飓风气候与社会压抑的模拟摄影研究', facts: ['系列拍摄于路易斯安那南部，年度飓风威胁与家庭、社区和个人内部长期积累的恐惧并行。', '艺术家最初由当地暴力历史出发，追问种族偏见与攻击性如何跨代传递。', '项目以人物、住宅、积水、雨势和日常细节构成一片看似平静却濒临爆发的心理地景。'], reading: '解读：胶片的柔和色调和缓慢观看与标题中的灾难预期形成张力，人物并非风暴新闻的配角，而是处在多重历史压力中的主体。隐喻只有在贫困、种族与地方历史保持可辨时才有效，否则会把结构暴力误写成天气。' }],
    images: [], sourceLabel: 'Prix Pictet — Hannah Modigh: Hurricane Season', sourceUrl: 'https://prix.pictet.com/cycles/storm/hannah-modigh'
  },
  {
    id: 'camille-seaman', name: 'Camille Seaman', born: '1969', base: 'Ølgod, Denmark',
    intro: '美国摄影师与电影作者，长期以人物肖像般的方式拍摄冰山、超级单体雷暴等自然系统，强调人类并不与自然分离。她从极地冰融问题转向美国大平原的追风实践，在科学学习、身体感知和当地居民经验之间处理风暴同时具有的创造、毁灭与崇高。',
    methods: ['长期追风摄影', '自然对象肖像化', '气象科学学习', '多感官现场观察', '气候议题叙事'],
    subjects: ['supercell thunderstorms', 'climate change', 'Great Plains', 'ice and weather systems', 'human-nature interconnection', 'the sublime'],
    outputs: ['大型彩色摄影', '电影', '摄影书', '展览', '演讲'],
    institutions: ['Prix Pictet', 'National Geographic', 'TED', 'Stanford Knight Fellowship', 'National Academy of Sciences', 'University of Delaware Museum'],
    achievements: ['Prix Pictet Storm shortlist 2025', 'TED Senior Fellow 2011–2015', 'Stanford Knight Fellow 2014'],
    whyImportant: '关注理由：Seaman 把冰山与超级单体雷暴放进同一气候系统，结合科学学习和长期现场经验，而不是将风暴仅作为视觉刺激。她的宏大画面能重新建立敬畏，也最容易被消费为壮观风景；当地损失、追风文化和气候关系必须与审美经验并读。',
    projects: [{ year: '2008–2014', title: 'The Big Cloud', type: '美国大平原超级单体雷暴的长期追风摄影', facts: ['项目始于艺术家完成十年冰山拍摄后提出的问题：极地融冰会如何影响温带地区的天气。', '她从 2008 年开始追踪可宽达约八十公里、伸展至约两万米高空的超级单体雷暴，并逐步学习气象技术、术语与追风文化。', '系列刻意不以灾后破坏为中心，而在承认居民损失的同时讨论风暴中创造与毁灭并存的崇高经验。'], reading: '解读：巨型云体压低地平线，农田、公路和微小建筑提供尺度，使自然力量几乎成为有身体的肖像。这样的崇高视觉能促成气候感知，也会把风险变成景观；具体时间、地点和当地生活是抵抗奇观化的关键。' }],
    images: [], sourceLabel: 'Prix Pictet — Camille Seaman: The Big Cloud', sourceUrl: 'https://prix.pictet.com/cycles/storm/camille-seaman'
  },
  {
    id: 'patrizia-zelano', name: 'Patrizia Zelano', born: '1964', base: 'Verucchio, Emilia-Romagna, Italy',
    intro: '意大利摄影艺术家，具有前哥伦布考古与博物馆研究背景，以摄影作为自我分析和隐喻建构。2019 年威尼斯特大潮后，她抢救被水浸泡的百科全书、科学论文与文学书籍，把卷曲、锈蚀、开裂的书页编排为遗物、浪潮、静物与短暂雕塑。',
    methods: ['受损物件摄影', '自然光静物', '艺术史图像引用', '考古式序列编排', '书籍转化为临时雕塑'],
    subjects: ['Venice acqua alta', 'flood-damaged books', 'cultural memory', 'fragility of knowledge', 'regeneration', 'climate threat'],
    outputs: ['静物摄影', '摄影序列', '书籍雕塑', '展览', '艺术家书'],
    institutions: ['Prix Pictet', 'EMST Athens', 'Boca Raton Museum of Art', 'Galleria dell’Immagine Rimini', 'Centro Italiano della Fotografia d’Autore', 'Zamagni Galleria d’Arte'],
    achievements: ['Prix Pictet Storm shortlist 2025', 'SI Fest first prizes 2006 and 2009', 'Fondo Malerba award 2015'],
    whyImportant: '关注理由：Zelano 让灾害证据从城市全景缩进被水改变的知识载体，建立气候损失与文化记忆之间的物质联系。她以自然光和艺术史构图恢复残书的尊严，但精致的静物化也可能美化损坏；洪水日期、抢救行动和书籍来源应持续可见。',
    projects: [{ year: '2019', title: 'Acqua Alta a Venezia', type: '威尼斯洪水残书的摄影与临时雕塑序列', facts: ['项目源自 2019 年 11 月 13 日威尼斯特大潮；艺术家从洪水中抢救百科全书、科学论文和文学书籍。', '十幅核心图像被组织为四段艺术史旅程，从古代遗物、彩饰手稿和 vanitas 静物延伸到当代建筑意象。', '受潮卷曲的书页只用自然光拍摄，并被临时编排为波浪、地层和雕塑，使知识的脆弱与再生同时出现。'], reading: '解读：水渍、锈色与纸页褶皱既是洪水的物理索引，也通过静物传统获得纪念性。艺术史引用扩大文化损失的时间尺度；若脱离灾害现场信息，优雅构图也可能把受损书籍变成去政治化的美物。' }],
    images: [], sourceLabel: 'Prix Pictet — Patrizia Zelano: Acqua Alta a Venezia', sourceUrl: 'https://prix.pictet.com/cycles/storm/patrizia-zelano'
  }
];
