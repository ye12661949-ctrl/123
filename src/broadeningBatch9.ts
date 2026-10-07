import type { Artist } from './data';

// Source audit: research/updates/2026-10-07-broadening9.md
export const broadeningBatch9: Artist[] = [
  {
    id: 'alana-perino', name: 'Alana Perino', born: '1988', base: 'Providence, Rhode Island / USA',
    intro: '以摄影、雕塑、表演和自我虚构处理家庭、归属、衰老与死亡。其影像常从照护关系和家庭空间出发，让日常物件、宗教象征与亲人的身体共同承担记忆。',
    methods: ['家庭摄影', '长期拍摄', '自我虚构', '表演性肖像', '空间观察'],
    subjects: ['照护', '阿尔茨海默病', '家庭', '死亡', '记忆', '归属'],
    outputs: ['摄影系列', '摄影书', '雕塑', '表演'],
    institutions: ['Aperture', 'Leica Gallery New York', 'RISD', 'Johnson & Wales University'],
    achievements: ['Aperture Portfolio Prize 2025', 'Pictures of Birds — Leica Gallery New York 2025'],
    whyImportant: '关注理由：他们将家庭照护拍成持续变化的关系，而不是疾病图解；私人空间中的鸟、天使和幽灵意象为纪实材料保留了暧昧、非线性的记忆结构。',
    projects: [{
      year: '2017–2024', title: 'Pictures of Birds', type: '长期家庭摄影／记忆与照护',
      facts: ['围绕佛罗里达 Longboat Key 的家庭生活，记录继母早发性阿尔茨海默病、家庭角色改写及其身后记忆。', '艺术家于 2020 年搬去与父亲和继母共同生活，继母于 2021 年去世后仍持续拍摄至 2024 年。', '项目获得 2025 Aperture Portfolio Prize，并于 2025 年 8 月 21 日至 9 月 15 日在 Leica Gallery New York 展出。'],
      reading: '解读：作品没有把照护简化成事件记录，而以反复出现的人、动物和宗教物件组织一个介于家庭相册、哀悼与梦境之间的空间。'
    }], images: [], sourceLabel: 'Aperture — Pictures of Birds', sourceUrl: 'https://aperture.org/exhibitions/alana-perino-pictures-of-birds-2025-aperture-portfolio-prize-winner/'
  },
  {
    id: 'sara-abbaspour', name: 'Sara Abbaspour', born: '出生年份未公开', base: 'Iran / United States',
    intro: '伊朗摄影艺术家，具有城市规划背景，往返美国与伊朗工作。她通过黑白肖像、城市边缘和空间过渡状态，避开媒体对伊朗的固定视觉标志，观察政治变化如何沉入人物与日常。',
    methods: ['黑白摄影', '肖像协作', '心理地理', '城市观察', '序列编辑'],
    subjects: ['当代伊朗', '城市转型', '女性', '公共与私人空间', '政治气候'],
    outputs: ['摄影系列', '展览'],
    institutions: ['Aperture', 'Yale School of Art', 'University of New Mexico', 'PhMuseum'],
    achievements: ['PhMuseum Women Photographers Grant 一等奖 2024', 'Aperture Portfolio Prize 入围 2025'],
    whyImportant: '关注理由：她不靠新闻式符号证明“这是伊朗”，而通过距离、灰阶和人物协作抵抗单一国家形象，适合与显性政治纪实进行比较。',
    projects: [{
      year: '2019–2024', title: 'Floating Ocean', type: '黑白肖像与地景摄影',
      facts: ['在伊朗拍摄人物与环境，刻意回避常见的国家视觉陈词。', '艺术家使用黑白摄影弱化具体地点的纪录信息，把注意力集中在人物、姿态和过渡空间。', '项目获 2024 PhMuseum Women Photographers Grant 一等奖，并入围 2025 Aperture Portfolio Prize。'],
      reading: '解读：去除颜色和明显地理标记扩大了图像的开放性，同时也把判断政治语境的责任更多交给影像序列和观看者。'
    }], images: [], sourceLabel: 'Aperture — A Shimmering Portrait of Contemporary Iran', sourceUrl: 'https://aperture.org/editorial/a-shimmering-portrait-of-contemporary-iran/'
  },
  {
    id: 'emma-ressel', name: 'Emma Ressel', born: '出生年份未公开', base: 'Albuquerque, New Mexico / USA',
    intro: '以大画幅胶片、再摄影和档案材料制作人造自然场景。她在自然史博物馆、标本库与工作室中组合动物标本、放大的背景照片和档案物，研究保存制度如何制造人类对“自然”的想象。',
    methods: ['大画幅胶片', '动物标本摆拍', '再摄影', '摄影背景制作', '自然史档案研究'],
    subjects: ['生态危机', '博物馆', '动物', '保存制度', '自然观念', '气候焦虑'],
    outputs: ['大型摄影', '灯箱与幻灯片', '墙纸装置', '档案装置'],
    institutions: ['Aperture', 'Houston Center for Photography', 'University of New Mexico', 'Bard College'],
    achievements: ['Film Photo Student Award 2022', 'Aperture Portfolio Prize 入围 2025'],
    whyImportant: '关注理由：她不是直接拍受损环境，而是拆解博物馆布景和标本保存背后的视觉制度，使生态问题同时成为摄影如何构造自然的问题。',
    projects: [{
      year: '2019–ongoing', title: 'Glass Eyes Stare Back', type: '大画幅摄影／标本与人造布景',
      facts: ['在自然史博物馆和生态收藏中拍摄，并在工作室中组合动植物标本与自行打印的大型摄影背景。', '项目借“基线漂移”讨论每代人如何把已经退化的生态误认为正常状态。', '作品包括 Deep Time Storage、Shifting Baseline Syndrome 与 Surrender the Decomposers 等图像。'],
      reading: '解读：标本与假背景之间明显的接缝拒绝自然主义幻觉，使保存、分类和展示行为本身进入画面。'
    }], images: [], sourceLabel: 'Aperture — A Transfixing Look at Nature at Its Most Unnatural', sourceUrl: 'https://aperture.org/editorial/a-transfixing-look-at-nature-at-its-most-unnatural/'
  },
  {
    id: 'daria-svertilova', name: 'Daria Svertilova', born: '1996', base: 'Kyiv / Paris',
    intro: '出生于乌克兰敖德萨的摄影艺术家，以朋友、艺术家工作室、夜间城市和静物构成战争中的同代人肖像。她避免直接新闻摄影，把停电、疲惫、失所与抵抗转化为低照度、印象式图像。',
    methods: ['低照度摄影', '朋友与同代人肖像', '日记式观察', '象征性静物', '战争中的长期记录'],
    subjects: ['乌克兰战争', '同代人', '失所', '抵抗', '停电', '青年'],
    outputs: ['摄影系列', '肖像', '出版与展览'],
    institutions: ['Aperture', 'ENSAD Paris', 'MOKSOP', 'Fotomuseum Winterthur'],
    achievements: ['Palm Photo Prize 入围 2022', 'Hyères 摄影节入围 2024', 'Aperture Portfolio Prize 入围 2025'],
    whyImportant: '关注理由：她提供了战争影像的另一条路径——不依靠前线行动或暴力瞬间，而以长期心理位移、黑暗空间和朋友圈呈现一代人的改变。',
    projects: [{
      year: '2022–ongoing', title: 'Irreversibly Altered', type: '战争中的同代人肖像／日记式摄影',
      facts: ['始于 2022 年俄军全面入侵后，核心对象是艺术家的朋友、熟人及在寒冷工作室中继续工作的艺术家。', '系列以 Protector of Kyiv 为锚点，并记录停电街道、疲惫青年、凋谢花朵和暗处人物。', '入围 2025 Aperture Portfolio Prize。'],
      reading: '解读：低照度和象征物让战争以持续情绪而非单次冲突进入图像，但项目仍由具体人物与城市生活支撑，而非纯粹抒情。'
    }], images: [], sourceLabel: 'Aperture — How the War in Ukraine Altered Life for a Lost Generation', sourceUrl: 'https://aperture.org/editorial/how-the-war-in-ukraine-altered-life-for-a-lost-generation/'
  },
  {
    id: 'avion-pearce', name: 'Avion Pearce', born: '出生年份未公开', base: 'Brooklyn, New York / USA',
    intro: '出生于布鲁克林 Guyanese 家庭的摄影艺术家，使用 8×10 与中画幅相机、暗房及模拟摄影方法，拍摄布鲁克林黑人酷儿与跨性别社群。作品在现实、梦境、夜间身体和城市转型之间建立联系。',
    methods: ['8×10 大画幅', '中画幅', '模拟摄影', '夜间拍摄', '诗性社群肖像'],
    subjects: ['黑人酷儿社群', '跨性别', '布鲁克林', '夜晚', '身体', '城市转型'],
    outputs: ['摄影系列', '展览', '杂志发表'],
    institutions: ['Aperture', 'Baxter St at the Camera Club of New York', 'Yale School of Art', 'Parsons'],
    achievements: ['NYSCA/NYFA Fellowship', 'Aperture Portfolio Prize 2024'],
    whyImportant: '关注理由：他们把政治目的放入光线、时间和模拟工艺，而不是只依赖身份说明；夜间肖像既保留社群亲密性，也回应城市空间的不安全与变化。',
    projects: [{
      year: '2022–2024', title: 'In the Hours Between Dawn', type: '模拟摄影／社群肖像',
      facts: ['题名取自 Audre Lorde 的诗 A Litany for Survival。', '以 8×10 和中画幅相机拍摄布鲁克林黑人酷儿与跨性别社群，研究时间、身体和城市转型。', '项目获得 2024 Aperture Portfolio Prize，并在 Baxter St 展出。'],
      reading: '解读：大画幅的缓慢协作与夜间光线让被摄者不只是城市变迁的例证，而成为共同塑造影像氛围的人。'
    }], images: [], sourceLabel: 'Aperture — Avion Pearce Creates a World between Reality and Dreams', sourceUrl: 'https://aperture.org/editorial/avion-pearce-creates-a-world-between-reality-and-dreams/'
  },
  {
    id: 'river-claure', name: 'River Claure', born: '出生年份未公开', base: 'Cochabamba / Bolivia',
    intro: '玻利维亚摄影艺术家，以编排肖像、表演性场景和社区协作研究身份、迁移与领土。他把家族矿工史、安第斯采掘地景和殖民历史编织成介于纪实、神话与推想未来之间的图像。',
    methods: ['编排摄影', '社区工作坊', '长期田野', '家族口述', '表演性肖像'],
    subjects: ['采矿', '殖民历史', '安第斯', '领土', '家族迁移', '身份'],
    outputs: ['摄影系列', '社区协作项目', '展览'],
    institutions: ['Aperture', 'Magnum Foundation', 'La Biennale di Venezia', 'EXPOSED Torino Foto Festival'],
    achievements: ['PhotoVogue Grant 2021', 'Magnum Foundation Fellowship 2023', 'Aperture Portfolio Prize 亚军 2024', 'EXPOSED Grant 2025'],
    whyImportant: '关注理由：他把殖民采掘史转译为可被共同表演和重新想象的场景，并通过社区工作坊避免仅从外部把矿区当作末日景观。',
    projects: [{
      year: '2022–ongoing', title: 'MITA', type: '编排摄影／社区田野与殖民采掘史',
      facts: ['在玻利维亚安第斯的 Llallagua、Uncia 和 Catavia 等旧矿区拍摄，追问五百年殖民采掘如何改变身份、历史和领土。', '艺术家的两位祖父都曾在当地银矿工作；项目结合家庭口述与每次约三个月的社区驻留。', '通过面向当地高中生的摄影、艺术工作坊建立合作；获 2024 Aperture Portfolio Prize 亚军。'],
      reading: '解读：编排和游戏把矿区从被动受害地转为居民参与想象的舞台，家族史则为宏大殖民叙述提供具体尺度。'
    }], images: [], sourceLabel: 'Aperture — A Playful Investigation of Community and Territory', sourceUrl: 'https://aperture.org/editorial/a-playful-investigation-of-community-and-territory-in-bolivia/'
  }
];
