import type { Artist } from './data';

// Source audit: research/updates/2026-10-08-broadening27.md
export const broadeningBatch27: Artist[] = [
  {
    id: 'sean-cham', name: 'Sean Cham', born: '出生年份未公开', base: 'London / Singapore',
    intro: '常驻 London 的 Singaporean 艺术家与历史研究者，以摄影、表演、空间介入和档案研究追问历史叙事如何被权力生产。面对殖民影像中被匿名化的华人侍者，他不把缺失档案当成可被直接复原的事实，而以自己的身体、重演、投影、拼接与生成式 AI 排练多种可能叙事。',
    methods: ['殖民档案研究', '身体重演', '摄影与表演', '空间投影', '生成式 AI 推演'],
    subjects: ['British colonial Singapore', '华人移民劳工', '档案缺失', '权力与命名', '历史推测', '迁移身份'],
    outputs: ['摄影', '表演', '空间介入', '动画 GIF', '玻璃印刷', '摄影装置'],
    institutions: ['Foam', 'Foam Magazine', 'Singapore Art Museum', 'Guangzhou Image Triennial', 'KITLV'],
    achievements: ['Foam Talent 2026', 'Singapore Art Museum commission 2025', 'Guangzhou Image Triennial participating artist'],
    whyImportant: '关注理由：Cham 不以虚构填平档案空白，而把“无法知道”本身做成方法；身体重演与生成式 AI 同时暴露历史学和模型都只能从被权力筛选过的材料推断，使殖民影像的缺失、当代技术偏差与个人迁移经验进入同一张工作台。',
    projects: [{
      year: '2025–2026', title: 'Rehearsal for 302', type: '档案摄影、身体重演、投影与生成式 AI／Foam Talent 2026',
      facts: ['项目从约 1890 年 G. R. Lambert studio 拍摄、编号 303 且题为 Chinese boy serving his master 的殖民照片出发；图中侍者没有留下姓名、年龄或出身。', '艺术家随后在 Royal Netherlands Institute of Southeast Asian and Caribbean Studies 档案发现同一人物独自端托盘的 301 号照片，并围绕缺失的 302 号图像展开推测。', '艺术家以自身身体扮演侍者，结合重演、重复、拼接、投影与生成式 AI；成品包括古董相册中的喷墨印刷、循环 GIF 和玻璃 UV 印刷。'],
      reading: '解读：作品最关键的不是给出“302 应该是什么”，而是让每一种补缺方法都显露自己的立场；艺术家的身体把抽象档案暴力转成姿势与劳动，而 AI 的流畅猜测反而提醒观众，缺失不能被可信外观自动修复。'
    }], images: [], sourceLabel: 'Foam — Sean Cham: Rehearsal for 302', sourceUrl: 'https://www.foam.org/articles/foam-talent-sean-cham'
  },
  {
    id: 'yiding-chen', name: 'Yiding Chen', born: '2001', base: 'Shanghai / London',
    intro: '往返 Shanghai 与 London 工作的中国艺术家，以摄影、装置与图像物件研究视觉文化如何规训身体、制造社会偏见并塑造集体经验。他从左撇子的历史污名切入，调动犯罪学、科学图解、宗教雕像、新闻与纠正左手习惯的教材，把看似中性的手势重新组装成一套无法完成定罪的反常档案。',
    methods: ['研究型摄影', '异常档案建构', '现成图像改写', '摄影雕塑', '博物馆式陈列'],
    subjects: ['左利手污名', '身体规训', '视觉分类', '犯罪学历史', '社会偏见', '图像证据'],
    outputs: ['摄影', '装置', '图像物件', '雕塑介入', '档案陈列'],
    institutions: ['Foam', 'Foam Magazine', 'Royal College of Art', 'Jimei x Arles International Photo Festival', 'Top 20 Chinese Contemporary Photography Exhibition'],
    achievements: ['Foam Talent 2026', 'Top 20·2025 Chinese Contemporary Photography Exhibition selection', 'Jimei x Arles participant'],
    whyImportant: '关注理由：Chen 把偏见定位在图像、工具和陈列制度如何共同把普通姿势变成“证据”。他本人是右撇子，这一距离使项目不落入身份见证，而是更精确地拆解摄影怎样借科学与档案的外观制造可疑身体。',
    projects: [{
      year: '2025–ongoing', title: 'Natural Born Left-Handed Killer', type: '研究型摄影、现成图像、雕塑介入与装置／Foam Talent 2026',
      facts: ['项目追溯 19 世纪欧洲将左利手与偏差、犯罪倾向相连的视觉分类，包括 Cesare Lombroso 依据身体特征和惯用手划分囚犯的理论。', '作品从科学研究、新闻、艺术史、宗教雕像的博物馆记录、技术器材及纠正左撇子的教材抽取材料，并以反转雕像、孤立手势、机械装置和装框图像物件重新编排。', 'Foam 2026 展览使用作品 Shutter and Grenade（2024）作为项目图像；完整系列并不寻找左撇子人物，而研究图像如何把左手生产为可读的异常符号。'],
      reading: '解读：摄影与雕塑在这里共同扮演证物，却始终无法形成决定性结论；这种故意不闭合的证据链把观众从“谁有问题”推回“谁建立了分类、怎样让分类看起来可信”。'
    }], images: [], sourceLabel: 'Foam — Chen Yiding: Natural Born Left-Handed Killer', sourceUrl: 'https://www.foam.org/articles/foam-talent-chen-yiding'
  },
  {
    id: 'nad-e-ali', name: 'Nad E Ali', born: '出生年份未公开', base: 'Lahore, Pakistan',
    intro: '常驻 Lahore 的巴基斯坦艺术家，在摄影、声音与档案材料之间处理个人和集体记忆。他多年从 Ashura 游行内部拍摄 Zuljanah——象征 Imam Hussein 在 Karbala 遇难后独自归来的无骑手之马——让父亲曾把幼年的他举过人群看马的记忆，延伸成对照护、哀悼与仪式持续性的长期观察。',
    methods: ['长期参与式摄影', '仪式内部观察', '个人记忆写作', '声音与档案并置', '摄影书编辑'],
    subjects: ['Ashura procession', 'Zuljanah', 'Karbala memory', 'Shia ritual', '父子记忆', '集体哀悼'],
    outputs: ['摄影', '摄影书', '声音作品', '档案装置'],
    institutions: ['Foam', 'Foam Magazine', 'Lumenvisum', 'Platforms Project', 'Printed Matter NY Art Book Fair'],
    achievements: ['Foam Talent 2026', 'Lumenvisum Hong Kong presentation 2024', 'Platforms Project Athens 2025'],
    whyImportant: '关注理由：Nad E Ali 拒绝在仪式外围寻找一张概括性新闻照片，而让面孔、手、马与器物在拥挤运动中反复出现和消失；观看由“解释宗教事件”转向体会共同体如何通过照护与行走让历史在当下持续。',
    projects: [{
      year: '2010s–2026', title: 'Horse / Men', type: '长期摄影、声音与摄影书研究／Foam Talent 2026',
      facts: ['系列在 Lahore 的 Ashura 游行中长期拍摄，并发展为摄影书 Maqtal；艺术家回忆幼年因人群密集看不见 Zuljanah，直到父亲把他举到肩上。', '照片从游行内部而非远处制作，面孔、手、物件与马的碎片跨画面出现，人群保持为连续在场。', 'Zuljanah 被准备、装饰并由照护者引导，无骑手的缺席指向 Hussein 遇难后马独自返回营地的传统；游行终点 Karbala Gamay Shah 又把 Iraq 的 Karbala 在 Lahore 重新建立。'],
      reading: '解读：破碎近景没有削弱叙事，反而把事件的意义交给人与马之间不断发生的让路、触摸和陪同行动；作品因此不把仪式冻结为异域景观，而呈现记忆如何被身体协作维持。'
    }], images: [], sourceLabel: 'Foam — Nad E Ali: Horse / Men', sourceUrl: 'https://www.foam.org/articles/foam-talent-nad-e-ali'
  },
  {
    id: 'ali-monis-naqvi', name: 'Ali Monis Naqvi', born: '1995', base: 'Goa / Kanpur, India',
    intro: '出生于 Kanpur、常驻 Goa 的印度摄影师，从日常生活中常被忽略的细节追踪印度次大陆政治气候的暗流。《Jahan》以献给已故祖母的想象花园为核心，将 Chamanganj 拥挤而受忽视的穆斯林社区、家族哀悼、植物、鸟与逐渐加剧的政治压迫编织在一起。',
    methods: ['亲密纪实摄影', '日常细节观察', '家族书信写作', '诗性序列', '政治环境侧写'],
    subjects: ['祖母与哀悼', 'Chamanganj', 'Indian Muslim neighbourhoods', '花园想象', '家与迁移', '政治压迫'],
    outputs: ['摄影', '摄影书', '展览序列', '文本与书信'],
    institutions: ['Foam', 'Foam Magazine', 'British Journal of Photography', 'PhMuseum'],
    achievements: ['Foam Talent 2026', 'British Journal of Photography Ones to Watch nomination 2023'],
    whyImportant: '关注理由：Naqvi 不把社区的拥挤与压迫压缩成灾难景观，而以祖母未能看见的花、鸟、水与屋顶花园组织观看；温柔不是政治现实的回避，而成为对被剥夺生活空间的反向想象。',
    projects: [{
      year: '2019–2026', title: 'Jahan / جہان', type: '长期摄影、家族书信与诗性序列／Foam Talent 2026',
      facts: ['项目是献给已故祖母的礼物，想象她位于 Kanpur Chamanganj 的屋顶花园，并把花园延伸到现实社区的物理边界之外。', '系列在家庭、植物、鸟、火、水与街区微小景象之间移动，选择祖母可能喜爱的、却未曾亲眼看到的事物。', '艺术家写给祖母的信指出 Chamanganj 名称暗示美丽花园，但社区现实已几乎没有 chaman；项目由此把穆斯林社区的命名、愿望与被忽视环境并置。'],
      reading: '解读：序列以亲密哀悼抵抗宏观政治把人变成统计对象；花园作为未实现空间，让家既是失去的具体地址，也是可以通过图像继续扩张的关系。'
    }], images: [], sourceLabel: 'Foam — Ali Monis Naqvi: Jahan', sourceUrl: 'https://www.foam.org/articles/foam-talent-ali-monis-naqvi'
  },
  {
    id: 'farren-van-wyk', name: 'Farren van Wyk', born: '1993', base: 'Netherlands / South Africa',
    intro: '出生于 South Africa、六岁移居 Netherlands 的 South African–Dutch 摄影师与教育者，以黑白模拟摄影、编排肖像和家庭协作处理混合身份、殖民史、apartheid 记忆及 African diaspora。她把成长的荷兰农场改造成舞台，让家人、服装、发型、木屐和祖辈物件共同重写白人化的荷兰家庭图景。',
    methods: ['模拟黑白摄影', '家族协作肖像', '场景编排', '视觉人类学研究', '历史图像反写'],
    subjects: ['mixed identity', 'South Africa / Netherlands relations', 'apartheid legacy', 'African diaspora', '家庭与归属', '殖民观看'],
    outputs: ['摄影', '摄影书', '展览', '研究型肖像'],
    institutions: ['Foam', 'Foam Magazine', 'Aperture', 'Fotomuseum Den Haag', 'PhMuseum', 'FUTURES Photography'],
    achievements: ['Foam Talent 2026', 'Aperture Portfolio Prize shortlist 2026', 'PhMuseum Women Photographers Grant Main Prize 2022', 'Fotomuseum Den Haag solo exhibition'],
    whyImportant: '关注理由：Van Wyk 不把 mixedness 当成两种身份的平均值，而把它发展成观看方法；历史上将有色身体客体化的黑白人类学摄影，被她转化为与家人共同导演、能够保留温柔和反抗的肖像。',
    projects: [{
      year: '2021–ongoing', title: 'Mixedness is my Mythology', type: '模拟黑白摄影、编排肖像与家庭档案／Foam Talent 2026',
      facts: ['项目在疫情隔离期间启动，以艺术家成长的传统 Dutch farm 为主要舞台，拍摄她自己、兄弟和父母，让被视为白人空间的农场承载家庭真实的跨文化生活。', '艺术家以祖父工作服、Dutch clogs、发型、饰品和姿势构成 South African、Dutch 与全球 Black diasporic references 的交叉。', '使用模拟黑白摄影是对视觉人类学档案的自觉回应：她在旧肖像中看到自己的身体，却拒绝延续伴随那些图像的非人化叙述。'],
      reading: '解读：道具并非身份标签清单，而在同一身体上制造彼此干扰的历史时间；黑白影像的档案权威感被亲属之间的合作与亲密重新占用，使“在两者之间”成为可以主动建构的空间。'
    }], images: [], sourceLabel: 'Aperture — Between Histories, a Photographer Creates Her Own', sourceUrl: 'https://aperture.org/editorial/between-histories-a-photographer-creates-her-own/'
  },
  {
    id: 'sasha-velichko', name: 'Sasha Velichko', born: '出生年份未公开', base: 'Warsaw, Poland / Belarus',
    intro: '因政治迫害于 2021 年离开 Belarus、现常驻 Warsaw 的研究型艺术家，具有 radiophysics 背景，在摄影、档案、装置与新媒体之间研究宣传、后真相和集体／个人创伤。她把和平示威者因说 Belarusian、祈祷、喝茶或穿白红白衣物而被捕的案例转译为克制的编排摄影，再让同日新闻标题驱动 AI 生成图像，分析信息噪音如何转移注意。',
    methods: ['政治案件档案研究', '编排摄影', 'AI 图像生成', '新闻标题采样', '网格与对照编辑'],
    subjects: ['Belarus political repression', '国家宣传', 'post-truth', '政治流亡', '注意力操控', '集体创伤'],
    outputs: ['摄影', 'AI 图像', '档案装置', '新媒体', '摄影书'],
    institutions: ['Foam', 'Foam Magazine', 'Fotofestiwal Łódź', 'FUTURES Photography', 'Singapore International Photography Festival', 'Zachęta National Gallery of Art'],
    achievements: ['Foam Talent 2026', 'Fotofestiwal Grant 2026', 'FUTURES nomination 2026', 'Konrad Pustoła Award 2023'],
    whyImportant: '关注理由：Velichko 没有简单用 AI 模拟政治创伤，而把模型的荒诞图像放在被捕事实旁边，精确再现宣传如何用无关、娱乐化内容制造注意力竞争；网格和单张图像的冲突让“转头不看”成为可分析的视觉结构。',
    projects: [{
      year: '2023–ongoing', title: 'State of Denial', type: '编排摄影、案件文本与 AI 生成图像／Foam Talent 2026',
      facts: ['第一部分研究 Belarus 和平抗议者因说本国语言、祈祷、穿白红白服装、携带鲜花或日常聚会而被拘押的案例，并为每个事件制作编排摄影与说明文字。', '第二部分选取每次拘押或审判当日发布的十二条新闻标题作为神经网络输入，让无关且怪异的生成图像组成紧密网格。', '系列把核心案件图像与 AI 新闻噪音并置，以图像尺度和排列模拟政府媒体在危机时刻分散注意、掩盖政治暴力的机制。'],
      reading: '解读：独幅编排摄影要求停留，AI 小图网格则不断诱导跳转；两种观看节奏的竞争，使宣传不再只是内容真假问题，而显露为对有限注意力的空间组织。'
    }], images: [], sourceLabel: 'Foam — Sasha Velichko: State of Denial', sourceUrl: 'https://www.foam.org/articles/foam-talent-sasha-velichko'
  }
];
