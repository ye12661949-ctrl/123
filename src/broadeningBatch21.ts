import type { Artist } from './data';

// Source audit: research/updates/2026-10-08-broadening21.md
export const broadeningBatch21: Artist[] = [
  {
    id: 'gery-georgieva', name: 'Gery Georgieva', born: '1986', base: 'London / Varna, Bulgaria',
    intro: '出生于 Varna、常驻 London 的保加利亚艺术家，以录像、行为、音乐、装置和雕塑处理流行文化、娱乐工业、民间传统与神话之间的迁移。她频繁扮演夸张的“文化迁徙 diva”，将身体、口音、编舞、服饰和媒体角色作为可拆装材料，研究后社会主义记忆、商业性别角色和国家身份如何共同塑造主体。',
    methods: ['自我扮演与替身角色', '流行文化挪用', '民俗动作重编', '语言作为现成物', '音乐—影像表演'],
    subjects: ['后社会主义记忆', '性别表演', '民族身份', '预言与神话', '娱乐工业', '文化迁移'],
    outputs: ['单频道录像', '行为表演', '音乐', '装置', '雕塑'],
    institutions: ['La Biennale di Venezia', 'Bulgaria Pavilion', 'Royal Academy Schools', 'Palais de Tokyo', 'Whitechapel Gallery'],
    achievements: ['Biennale Arte 2026 · Bulgaria Pavilion artist', 'Gaudenz B. Ruf Award 2017'],
    whyImportant: '关注理由：Georgieva 不把民俗与流行文化设置成传统／现代的简单对立，而让两者在同一具表演身体中互相污染；“预言者—新闻主播—diva”的重叠也揭示媒体真相如何依靠姿态、声线和角色可信度生产。',
    projects: [{
      year: '2020–2026', title: 'UWU Channel Radiance (Sybil’s Noon Shower of Stones)', type: '单频道录像与表演性装置／Bulgaria Pavilion',
      facts: ['艺术家扮演现代 Sibyl，以新闻主播般克制的语调播报一系列预言。', '影像并置洞穴中的编舞、理想化女性喷泉雕像与艺术家青少年时期常去的 Varna 夜店中的年轻女性。', '作品在 The Federation of Minor Practices 中借数字神话和预言质疑身份、欲望与媒介真相的制度。'],
      reading: '解读：预言并未被呈现成古老神秘知识，而借主播口吻进入当代信息格式；民俗、夜店和网络语言之间的跳接，使权威不是来自事实本身，而来自身体如何熟练地占据传播界面。'
    }], images: [], sourceLabel: 'Gery Georgieva — CV and pavilion essay', sourceUrl: 'https://gerygeorgieva.com/cv'
  },
  {
    id: 'maria-nalbantova', name: 'Maria Nalbantova', born: '1990', base: 'Sofia / Bulgaria',
    intro: 'Sofia 艺术家，以雕塑、自制生物材料、录像、绘画和混合媒介装置回应具体地点的历史、社会政治与生态关系。她将口述故事、档案、跨学科研究和想象结合为推测性现实，尤其关注人类社会与湿地、生物和维护劳动之间的共存、照护与责任。',
    methods: ['长期场域研究', 'DIY 生物材料', '生态维护实践', '口述叙事收集', '推测性故事建构'],
    subjects: ['湿地生态', '共存与照护', '地方记忆', '环境责任', '修复与维护', '人类—非人关系'],
    outputs: ['混合媒介装置', '录像', '雕塑', '生物材料作品', '绘画'],
    institutions: ['La Biennale di Venezia', 'Bulgaria Pavilion', 'WaterLANDS', 'Manifesta 14', 'Sofia National Gallery', 'European Parliament Art Collection'],
    achievements: ['Biennale Arte 2026 · Bulgaria Pavilion artist', 'BAZA Award for Contemporary Art 2020', 'WaterLANDS Artistic Engagement Residency 2023–2026'],
    whyImportant: '关注理由：Nalbantova 把生态艺术从短期“取材”转向维护、在场和地方叙事的长期劳动；她的工作提醒观看者，修复湿地不仅需要景观图像，也需要重复、琐碎且不易成为艺术奇观的照护。',
    projects: [{
      year: '2023–2026', title: 'Dragoman Marsh / Swamping', type: '长期生态研究、维护、录像与混合媒介装置／Bulgaria Pavilion',
      facts: ['项目源于 WaterLANDS 四年艺术参与驻留，Dragoman Marsh 是该计划六个湿地行动地点之一。', '实践结合研究、维护工作和地方叙事，并在保加利亚馆中作为持续发展的生态照护档案呈现。', '相关作品延伸至雕塑、自制生物材料、录像和绘画，而非把湿地简化成单一纪录片对象。'],
      reading: '解读：作品最重要的转换是把“照护”落实为时间结构：艺术家需要反复返回、维护和听取地方经验。若只观看最终物件，这部分劳动容易再次隐形，因此资料卡保留驻留周期与行动地点。'
    }], images: [], sourceLabel: 'Maria Nalbantova — official biography', sourceUrl: 'https://marianalbantova.com/about-contact.html'
  },
  {
    id: 'rayna-teneva', name: 'Rayna Teneva', born: '出生年份未公开', base: 'Sofia / Vienna',
    intro: '往返 Sofia 与 Vienna 工作的保加利亚艺术家，以影像、研究和空间叙事探索记忆、身份、迁移以及个人经验与地缘政治的交叉。她关注看似平静的地方景观如何同时组织劳动、照护和暴力，并通过相邻产业、家庭经验和区域历史之间的连接拆解单一地方身份。',
    methods: ['场域影像研究', '产业地理并置', '个人—政治叙事连接', '地方档案', '劳动关系追踪'],
    subjects: ['迁移与身份', 'Rose Valley', '农业劳动', '照护劳动', '军工生产', '地方与命运'],
    outputs: ['电影', '录像装置', '研究型影像', '空间叙事'],
    institutions: ['La Biennale di Venezia', 'Bulgaria Pavilion', 'National Gallery of Bulgaria', 'RAVNIKAR Projects'],
    achievements: ['Biennale Arte 2026 · Bulgaria Pavilion artist'],
    whyImportant: '关注理由：Teneva 把“玫瑰之乡”的文化品牌与同一区域的武器生产放进一条地理链中，使浪漫景观不能再脱离照护、季节劳动与暴力经济；这种方法适合纠正国家形象只展示可消费传统的倾向。',
    projects: [{
      year: '2026', title: 'Geography Is Destiny', type: '研究型电影／Bulgaria Pavilion',
      facts: ['电影聚焦保加利亚 Rose Valley，追踪玫瑰采摘与军工生产在同一区域的并存。', '项目把劳动、照护与暴力视为相互缠绕的地方结构，而不是三个分离主题。', '作品作为 The Federation of Minor Practices 的四部电影之一，被纳入电脑游戏式互动展馆环境。'],
      reading: '解读：片名并非宣称地理机械地决定命运，而是暴露“玫瑰谷”这类地方称谓如何遮蔽产业分工；香气、照护与武器在同一地图中出现后，景观的无辜性被取消。'
    }], images: [], sourceLabel: 'La Biennale di Venezia — Bulgaria Pavilion 2026', sourceUrl: 'https://www.labiennale.org/en/art/2026/bulgaria'
  },
  {
    id: 'veneta-androva', name: 'Veneta Androva', born: '1985', base: 'Berlin / Sofia',
    intro: '往返 Berlin 与 Sofia 的视觉艺术家、电影作者，以动态影像、装置和推测性纪录片研究技术基础设施、虚假信息网络与自动化媒体如何塑造感知、政治想象和社会现实。她结合调查材料、档案痕迹、数据和计算机生成图像，使宣传经济、人机劳动安排与算法治理的隐蔽结构变得可感。',
    methods: ['推测性纪录片', '虚假信息网络调查', '机器学习辅助分析', '档案与 CGI 混合', '媒介基础设施映射'],
    subjects: ['虚假信息', '自动化宣传', '算法偏差', '微型数字劳动', '身份政治', '广告技术经济'],
    outputs: ['动画纪录片', '录像装置', '计算机生成影像', '研究档案'],
    institutions: ['La Biennale di Venezia', 'Bulgaria Pavilion', 'Ars Electronica', 'Visions du Réel', 'GATE Institute Sofia'],
    achievements: ['Biennale Arte 2026 · Bulgaria Pavilion artist', 'Prix Ars Electronica 2026 Honorary Mention', 'Prix Ars Electronica 2021 Award of Distinction'],
    whyImportant: '关注理由：Androva 不用几张“假新闻截图”代替系统分析，而追踪域名运营者、链接扩散微劳动、广告中介和算法放大之间的经济链；她同时把机器学习输出视为不稳定读数，避免将检测模型包装成中立裁判。',
    projects: [{
      year: '2026', title: 'Spray and Pray', type: '15 分钟推测性动画纪录片／Bulgaria Pavilion',
      facts: ['作品研究以广告收益为目标、自动生产并传播虚假信息的“mushroom websites”。', '艺术家与计算语言学者合作，以 Bulgarian-language 模型分析收集的标题和文章，涉及机器文本检测、虚假信息可能性和情感分析。', '模型结果不被当作最终证据，而作为暴露自动解释局限、偏差与含混性的材料。'],
      reading: '解读：影片的关键不是把算法可视化成炫目的数据图，而是让责任在人工点击、站群经营、广告技术和自动分发之间不断漂移；推测性动画对应的正是事实被持续重建的媒介环境。'
    }], images: [], sourceLabel: 'Veneta Androva — Spray and Pray', sourceUrl: 'https://venetaandrova.com/spray-and-pray/'
  },
  {
    id: 'adrian-mm-abela', name: 'Adrian MM Abela', born: '1989', base: 'Los Angeles / Malta',
    intro: '出生于 Malta、常驻 Los Angeles 的艺术家，拥有建筑、土木工程与雕塑训练。他在雕塑、舞台装置、软件、游戏引擎、表演和偶然机制之间工作，从遭遇的材料、清醒或梦境中的叙事出发，以诗性隐喻讨论身份、自我、知识与系统之间的递归关系。',
    methods: ['建筑式舞台编排', '游戏引擎叙事', '偶然与占卜机制', '互动触发', '显露—遮蔽结构'],
    subjects: ['Malta 身份', '依赖与自治', '时间经验', '知识悖论', '历史与未来', '后殖民自决'],
    outputs: ['互动装置', '游戏引擎影像', '雕塑', '绘画', '表演与声音'],
    institutions: ['La Biennale di Venezia', 'Malta Pavilion', 'Arts Council Malta', 'UCLA'],
    achievements: ['Biennale Arte 2026 · Malta Pavilion artist'],
    whyImportant: '关注理由：Abela 将国家拟人 Melita 放入游戏引擎，不让身份停留在固定寓言，而由脚步、随机宣言、现场保管者和口耳传播持续改写；数字系统因此与舞台劳动、秘密和身体接触共同构成作品。',
    projects: [{
      year: '2026', title: 'Declaration of Dependence (A Game of Surrender)', type: '游戏引擎、舞台、硬币、绘画与互动装置／Malta Pavilion',
      facts: ['舞台分为三个时间区域：八枚旋转硬币代表未来，绘画指向过去，中央游戏引擎中出现 Malta 的拟人形象 Melita。', '观众踏上地毯后，Melita 会以偶然机制给出一份针对当下访客的独特宣言。', '部分元素只有通过现场 custodian 才能接近，另一些内容则依靠口耳相传。'],
      reading: '解读：随机生成没有被设定为更客观的机器答案，而与占卜、保管者和传闻共同制造不确定性；所谓国家“宣言”从权威文本变成一次性的关系事件，依赖观看者主动交出控制。'
    }], images: [], sourceLabel: 'Arts Council Malta — Malta Pavilion 2026', sourceUrl: 'https://artscouncilmalta.gov.mt/en/malta-at-the-venice-biennale-2026/'
  },
  {
    id: 'charlie-cauchi', name: 'Charlie Cauchi', born: '1980', base: 'Valletta / Malta',
    intro: '出生于 London、常驻 Valletta 的 Maltese 跨学科艺术家、电影作者与研究者，以录像、声音、文本、档案和建构环境结合纪录实践、学术研究与幻想叙事。她从个人与家族经验出发，研究 Malta 作为现实拍摄地与心理地景时如何承载性别、文化遗产、离散身份和小国电影的再现问题。',
    methods: ['自传式影像研究', '电影史重组', '档案与幻想混合', '场景化建构', '酷儿文化保存'],
    subjects: ['Maltese 身份', '性别与离散', '殖民残余', '电影表演', '家族关系', '奇观与欲望'],
    outputs: ['4K 录像', '声音', '文本', '档案装置', '混合媒介雕塑'],
    institutions: ['La Biennale di Venezia', 'Malta Pavilion', 'Arts Council Malta', 'Rosa Kwir', 'Queen Mary University of London'],
    achievements: ['Biennale Arte 2026 · Malta Pavilion artist', 'Co-founder of Rosa Kwir LGBTQI+ gallery and archive'],
    whyImportant: '关注理由：Cauchi 把 Malta 既当作电影工业可替代别处的外景地，也当作无法轻易替换的私人心理地景；她通过巧克力、电影引用和自传线索研究复制、欲望和国家形象，而不是把岛屿身份还原为风景。',
    projects: [{
      year: '2026', title: 'Dolce', type: '单频道 4K 录像、巧克力与混合媒介雕塑／Malta Pavilion',
      facts: ['装置由单频道 4K 录像及巧克力和混合材料雕塑元素组成。', '作品借用 Fellini 的 La Dolce Vita 与 Ridley Scott 的 Gladiator 等电影史参照，处理表演、媒介与文化转型中的身份。', '梦境般影像把殖民残余、变化中的 Maltese 身份、模仿和奇观欲望保持在刻意未解决的状态。'],
      reading: '解读：巧克力的甜、可塑与易融化属性让“复制的古典奇观”显得不稳定；电影引用不是致敬清单，而成为 Malta 被全球影像工业不断扮演成其他地方时的身份压力。'
    }], images: [], sourceLabel: 'Malta Pavilion 2026 — artist team and project', sourceUrl: 'https://maltapavilion2026.com/team/'
  }
];
