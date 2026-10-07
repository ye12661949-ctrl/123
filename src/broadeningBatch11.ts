import type { Artist } from './data';

// Source audit: research/updates/2026-10-07-broadening11.md
export const broadeningBatch11: Artist[] = [
  {
    id: 'p-staff', name: 'P. Staff', born: '1987', base: 'Los Angeles / London',
    intro: '英国出生、往返洛杉矶与伦敦工作的跨媒介艺术家，以影像、表演、雕塑、光和声音研究纪律、照护、疾病、欲望与酷儿身体。其装置常把建筑处理成类似皮肤、骨骼或监控系统的环境，使观看者以身体感受权力。',
    methods: ['沉浸式影像装置', '表演', '空间改造', '灯光与声音', '乳胶雕塑'],
    subjects: ['酷儿与跨性别身体', '监控', '疾病', '纪律', '照护', '建筑与控制'],
    outputs: ['影像装置', '雕塑', '表演', '单频道电影', '沉浸式展览'],
    institutions: ['MoMA', 'Whitney Museum', 'Tate', 'Serpentine Galleries', 'La Biennale di Venezia'],
    achievements: ['Whitney Biennial 2024', '第59届威尼斯双年展参展 2022', 'Louis Comfort Tiffany Foundation Award 2019'],
    whyImportant: '关注理由：Staff 不只用影像说明身体政治，而是借刺眼光线、低频声音、建筑尺度和紧绷材料让观众在空间中遭遇压迫、渗透与失衡；概念由身体经验承载，而非停留在身份陈述。',
    projects: [{
      year: '2025', title: 'Possessive', type: '建筑介入／影像与雕塑装置',
      facts: ['展览于 2025 年 9 月 18 日至 10 月 25 日在 David Zwirner 纽约一栋原住宅空间举行。', '循环影像跨三层投射在中央立柱上：赤裸上身人物呼吸时，一束绿色激光穿过腹部；声音包含呼吸、心跳、谈话与破损钢琴声。', '空间被黄色光线浸透；灰色半透明乳胶覆盖尖锐支架，支架尺寸取自书架、楼梯和门洞等建筑构件。'],
      reading: '解读：身体没有被独立陈列，而被投影、激光、建筑测量和乳胶表面反复穿透；“占有”因此成为观众可感到的空间关系，而不只是标题中的理论词。'
    }], images: [], sourceLabel: 'David Zwirner — P. Staff: Possessive', sourceUrl: 'https://www.davidzwirner.com/exhibitions/2025/p-staff-possessive'
  },
  {
    id: 'shuruq-harb', name: 'Shuruq Harb', born: '1980', base: 'Ramallah / Palestine',
    intro: '常驻拉马拉的巴勒斯坦艺术家、电影作者与写作者。她以风景影像、碎片化叙事、档案和非人声旁白处理领土、流动、加速、生存与逃逸，让巴勒斯坦经验避开单一新闻事件或固定受害者框架。',
    methods: ['实验电影', '碎片化叙事', '地景摄影', '机器人旁白', '写作与出版'],
    subjects: ['巴勒斯坦', '领土', '边界与移动', '生存', '逃逸', '未来叙事'],
    outputs: ['短片', '影像装置', '写作', '出版与策展项目'],
    institutions: ['Museu Tàpies', 'Han Nefkens Foundation', 'WIELS', 'Jameel Arts Centre', 'Museo Reina Sofía'],
    achievements: ['Han Nefkens Foundation–Fundació Antoni Tàpies Video Art Production Award 2019', 'Busan Biennale 2024'],
    whyImportant: '关注理由：她以断裂、推测和不可靠叙事对抗地缘政治影像要求“解释清楚”的压力；地景既是具体的约旦河谷，也是关于跳跃、消失与未来能动性的心理装置。',
    projects: [{
      year: '2021', title: 'The Jump', type: '实验短片／地景与推测叙事',
      facts: ['影片设于约旦河谷的地质断裂带，以机器人声音串联多个故事，围绕一名巴勒斯坦男子跃入地中海的条件展开推测。', '作品讨论跳入虚空的心理地形，并以碎片化故事触及加速、历史、生存与逃逸。', '由 2019 Han Nefkens Foundation–Fundació Antoni Tàpies 影像艺术制作奖促成，并联合 MCAD Manila、NTU CCA Singapore、WIELS 与 Jameel Arts Centre。'],
      reading: '解读：机器人声拒绝替人物提供可信证词，眩晕地景也拒绝成为领土说明图；这种缺口迫使观看者面对“关于巴勒斯坦的故事由谁组织”的问题。'
    }], images: [], sourceLabel: 'Museu Tàpies — Shuruq Harb: The Jump', sourceUrl: 'https://museutapies.org/en/exposicio/shuruq-harb-the-jump/'
  },
  {
    id: 'na-chainkua-reindorf', name: 'Na Chainkua Reindorf', born: '1991', base: 'Ghana / international',
    intro: '加纳跨媒介艺术家，以西非民间故事、Vodún 宗教与希腊神话构造个人神话世界。她将绘画、纸张、棉线、尼龙线、玻璃珠、拉菲草和染线组合成大型挂毯与沉浸式装置，重新想象仪式、伪装与女性能动性。',
    methods: ['世界建构', '混合媒介挂毯', '编织与串珠', '虚构档案', '仪式物件制作'],
    subjects: ['西非神话', '伪装节庆', '女性劳动', '仪式', '殖民历史', '解放叙事'],
    outputs: ['大型挂毯', '沉浸式装置', '绘画', '虚构仪式物件'],
    institutions: ['La Biennale di Venezia', 'ANO Institute of Arts & Knowledge', 'KINDL Centre for Contemporary Art', 'Frac MÉCA', 'Fondation H'],
    achievements: ['第59届威尼斯双年展加纳馆代表艺术家 2022'],
    whyImportant: '关注理由：她不把传统图案直接复制为当代装饰，而以虚构仪式体系重新分配传统中的参与资格；缓慢串珠与编织把长期被隐形的女性劳动变成作品的结构与时间。',
    projects: [{
      year: '2018–2019', title: 'Shrine: At the Intersection of Object and Spectacle', type: '挂毯与仪式装置',
      facts: ['项目借鉴加纳 Winneba 每年元旦举行的 Fancy Dress 伪装节，其服装传统源于对殖民生活的讽刺。', '作品虚构一名伪装表演者的工作室和物件收藏，以棉纱、尼龙线、棉布及手工抛光玻璃珠制作。', '系列强调织造与串珠的缓慢劳动，并回应女性历史上常被排除在伪装服装制作和表演之外。'],
      reading: '解读：作品保留节庆的华丽，却拆去完整服装和表演者，把颜色、质地、尺度与悬垂劳动暴露出来；女性进入传统的方式因此不是被“加入”图像，而是重新制作传统的物质条件。'
    }], images: [], sourceLabel: 'Na Chainkua Reindorf — Shrine', sourceUrl: 'https://www.ncreindorf.com/6431741-shrine'
  },
  {
    id: 'salih-basheer', name: 'Salih Basheer', born: '1995', base: 'Denmark / Sudan',
    intro: '出生于苏丹 Omdurman、现居丹麦的摄影师，以纪实摄影、家庭档案、自画像、绘画和双语文字处理童年记忆、失亲、迁移及战争流离。他把摄影书视为可携带的记忆结构，而非单纯的图片集合。',
    methods: ['家庭档案', '自画像', '双语写作', '绘画与摄影并置', '摄影书编辑'],
    subjects: ['失亲', '童年记忆', '苏丹', '哀悼', '迁移', '战争与流离'],
    outputs: ['摄影书', '摄影系列', '文字与绘画', '展览'],
    institutions: ['Les Rencontres d’Arles', 'Magnum Photos', 'W. Eugene Smith Memorial Fund', 'AFAC', 'Disko Bay'],
    achievements: ['Les Rencontres d’Arles Photo-Text Book Award 2023', 'Magnum Photos nominee 2024', 'W. Eugene Smith Student Grant 2021'],
    whyImportant: '关注理由：他不以重演填补童年记忆，而允许档案、文字、自画像和幼儿式绘画保持不一致；摄影书的口袋尺度与碎片结构让私人创伤获得形式，而不被宏大叙事吞没。',
    projects: [{
      year: '2021–2023', title: '22 Days in Between', type: '摄影书／家庭记忆与哀悼',
      facts: ['项目收集艺术家对父母仅存的少量记忆；父母在他三岁时相隔二十二天去世。', '全书以家庭档案、当代影像、自画像、绘画及英文和阿拉伯文文字构成，共 112 页、46 幅黑白和彩色图版。', 'Disko Bay 于 2023 年出版该书；同年获得 Les Rencontres d’Arles Photo-Text Book Award。'],
      reading: '解读：作品不声称恢复失去的过去，而让图像和文字的空缺持续存在；形式上的小、碎、双语和不稳定记忆比完整传记更接近儿童经验。'
    }], images: [], sourceLabel: 'Les Rencontres d’Arles — The Book Awards 2023', sourceUrl: 'https://www.rencontres-arles.com/en/the-book-awards-2023-1'
  },
  {
    id: 'mhammed-kilito', name: 'M’hammed Kilito', born: '1981', base: 'Casablanca / Morocco',
    intro: '常驻摩洛哥的纪实摄影师与 National Geographic Explorer，以长期田野、肖像和地景摄影讨论当代摩洛哥的青年身份与绿洲生态危机。他关注气候变化如何同时改变水资源、迁徙、地方文化和居民的日常选择。',
    methods: ['长期纪实', '环境肖像', '地景摄影', '跨地区田野', '文字采访'],
    subjects: ['绿洲退化', '气候危机', '水资源', '迁徙', '摩洛哥青年', '身份差异'],
    outputs: ['长期摄影系列', '杂志专题', '展览', '摄影书'],
    institutions: ['World Press Photo', 'National Geographic Society', 'Wellcome Collection', 'Fondation Louis Roederer', 'Centre Pompidou'],
    achievements: ['World Press Photo 2023 非洲区长期项目奖', 'National Geographic Explorer 2020', 'Louis Roederer Photography Prize for Sustainability 2023'],
    whyImportant: '关注理由：他把生态危机从无人地景重新拉回居住者的身体、劳动与被迫迁徙，同时维持跨年田野尺度；作品既能作为环境证词，也保留普通生活对灾难叙事的抵抗。',
    projects: [{
      year: '2018–ongoing', title: 'Before It’s Gone', type: '长期环境纪实／绿洲生态',
      facts: ['长期记录摩洛哥绿洲退化及其对居民的多层影响，后续田野扩展至其他北非与中东地区。', '系列结合干涸水井、棕榈疾病、农业与居民生活，讨论全球升温及破坏性人类活动。', '项目获得 2023 World Press Photo 非洲区长期项目奖，并获 National Geographic Society 支持；部分作品进入 Wellcome Collection 的 Thirst 展览。'],
      reading: '解读：人物与地景并列避免把干旱仅呈现为视觉奇观；但其长期价值仍取决于是否持续让不同社区的具体适应策略进入图像，而非重复“消失前记录”的挽歌模式。'
    }], images: [], sourceLabel: 'World Press Photo — Before It’s Gone', sourceUrl: 'https://www.worldpressphoto.org/collection/photo-contest/2023/M-hammed-Kilito/19'
  },
  {
    id: 'hailun-ma', name: 'Hailun Ma', born: '出生年份未公开', base: 'China / Xinjiang-focused practice',
    intro: '中国新一代摄影师，以时尚摄影作为社会观察方法，长期拍摄新疆的家庭、青年、日常穿着和多元文化社群。她在编排与偶遇之间工作，使服装不只是造型，而成为地方身份、亲属关系与全球视觉文化交汇的表面。',
    methods: ['时尚摄影', '编排肖像', '街头观察', '长期返乡拍摄', '编辑与商业语言再利用'],
    subjects: ['新疆', '青年亚文化', '家庭', '日常穿着', '多元族群', '地方与全球时尚'],
    outputs: ['摄影系列', '时尚影像', '摄影书', '机构展览'],
    institutions: ['Foam Fotografiemuseum Amsterdam', 'Lannoo', 'Vogue China', 'i-D'],
    achievements: ['Foam 首个中国以外大型个展 Hometown 2026–2027', 'BoF 500 2024'],
    whyImportant: '关注理由：她把商业时尚摄影的色彩、姿态和造型能力转用于地方社会观察，使新疆年轻人的自我呈现摆脱纯民俗或新闻框架；其关键价值在于展示文化如何被当代人穿着和重新组合。',
    projects: [{
      year: '2018–2026', title: 'Hometown', type: '时尚肖像／家庭与地方文化长期项目',
      facts: ['项目汇集围绕新疆家庭、青年与日常风格的多个近年系列，在编排和自发场景之间切换。', 'Foam 于 2026 年 9 月 18 日至 2027 年 1 月 20 日举办同名展览，是艺术家在中国以外首个大型个展。', '展览包含 Kashi Youth、Uruklyn 等作品，并由 Foam 与 Lannoo 出版同名国际摄影书。'],
      reading: '解读：服装、姿势和街区关系让身份通过可见的日常选择出现，而非被摄影师归纳成单一族群符号；同时，作品也值得继续检验时尚语言是否会抹平地区内部的不平等。'
    }], images: [], sourceLabel: 'Foam — Hailun Ma: Hometown', sourceUrl: 'https://www.foam.org/events/hailun-ma'
  }
];
