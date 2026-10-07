import type { Artist } from './data';

// Source audit: research/updates/2026-10-08-broadening17.md
export const broadeningBatch17: Artist[] = [
  {
    id: 'aline-bouvy', name: 'Aline Bouvy', born: '1974', base: 'Brussels / Luxembourg',
    intro: '出生于比利时、活跃于 Brussels 与 Luxembourg 的跨媒介艺术家，以雕塑、装置、摄影、绘画和空间编排挑战身体、欲望与社会规范。她把展览本身视为媒介，借放大、复制、低俗材料和不稳定的性别符号，拆解“合宜”与“失范”之间被制度维护的边界。',
    methods: ['展览作为媒介', '雕塑与现成物重组', '身体尺度转换', '摄影与图像挪用', '建筑空间干预'],
    subjects: ['身体政治', '社会规范', '女性主义', '欲望与羞耻', '越界', '公共空间'],
    outputs: ['空间装置', '雕塑', '摄影', '绘画', '声音与文字'],
    institutions: ['La Biennale di Venezia', 'Luxembourg Pavilion', 'MACS Grand-Hornu', 'Casino Luxembourg', 'Jan van Eyck Academie'],
    achievements: ['Biennale Arte 2026 · Luxembourg Pavilion solo artist', 'MACS Grand-Hornu major solo exhibition Cruising Bye 2022'],
    whyImportant: '关注理由：Bouvy 不把规范批判停留在图像主题，而通过展厅尺度、身体姿态和令人不适的材料关系，让观众实际进入“得体”规则的压力场；幽默、冒犯与脆弱在同一空间并存。',
    projects: [{
      year: '2026', title: 'La Merde', type: '跨媒介空间装置／Luxembourg Pavilion',
      facts: ['代表 Luxembourg 参加 Biennale Arte 2026，由 Laura Amann 策展。', '项目延续艺术家对身体、空间和社会规范的女性主义研究。', '雕塑、图像与展览建筑被组织成相互牵制的整体，而非彼此独立的作品陈列。'],
      reading: '解读：标题把通常应被排除的废物直接置于国家代表机制中央；它既拒绝国家馆的体面修辞，也迫使观看者面对价值判断如何依附于身体、阶级与空间秩序。'
    }], images: [], sourceLabel: 'e-flux — Aline Bouvy at the 2026 Venice Biennale', sourceUrl: 'https://www.e-flux.com/announcements/6784509/aline-bouvy-at-the-2026-venice-biennale'
  },
  {
    id: 'jenna-sutela', name: 'Jenna Sutela', born: '1983', base: 'Berlin / Finland',
    intro: '芬兰艺术家，以声音、活体微生物、人工智能、计算系统与雕塑研究人类之外的智能和交流。她常让机器学习、细菌、风与不可见信号成为共同作者，把技术从封闭工具改写为会受环境、偶然与非人生命扰动的感知系统。',
    methods: ['生物艺术', '生成式声音', '气象数据转译', '机器学习协作', '动力雕塑'],
    subjects: ['非人智能', '微生物', '语言与信号', '气候系统', '偶然性', '跨物种交流'],
    outputs: ['多声道声音', '动力装置', '雕塑', '影像', '现场表演'],
    institutions: ['La Biennale di Venezia', 'Frame Contemporary Art Finland', 'Serpentine Galleries', 'Kiasma', 'New Museum'],
    achievements: ['Biennale Arte 2026 · Finland Aalto Pavilion solo artist', 'Serpentine General Ecology commission'],
    whyImportant: '关注理由：Sutela 把“人工智能”放回风、微生物和材料噪声构成的更大生态里；她的系统不是追求无误输出，而是用不可预测性削弱人类对技术与自然的控制想象。',
    projects: [{
      year: '2026', title: 'Aeolian Suite', type: '气象数据、声音与动力雕塑环境／Finland Aalto Pavilion',
      facts: ['项目以 Venice、Helsinki 等地的气象数据、乐器和风声录音构成多感官环境。', '带羽毛的动力雕塑环形排列，形态呼应麦克风防风罩与风玫瑰。', '由 Stefanie Hessler 策展，风被视为携带粒子、微生物和信息的主动媒介。'],
      reading: '解读：作品反转降噪技术的逻辑，不再消除环境干扰，而让干扰成为作曲者；声音只在风与物体相遇时出现，因此“倾听”被重新定义为对非人力量的开放。'
    }], images: [], sourceLabel: 'La Biennale di Venezia — Finland Aalto Pavilion 2026', sourceUrl: 'https://www.labiennale.org/en/art/2026/finland-aalto'
  },
  {
    id: 'henrike-naumann', name: 'Henrike Naumann', born: '1984–2026', base: 'Berlin / Zwickau',
    intro: '德国装置艺术家，以二手家具、家居装饰、录像与声音研究政治意识形态如何潜入日常审美。她从东德成长经验、统一后的社会断裂及极右翼视觉文化出发，把客厅、卖场和展示柜重组为具有心理压力的政治剧场。',
    methods: ['二手家具编排', '室内设计语汇挪用', '档案与田野研究', '录像—声音嵌入', '沉浸式政治装置'],
    subjects: ['德国统一后社会', '极右翼文化', '怀旧与激进化', '家庭空间', '意识形态美学', '历史断裂'],
    outputs: ['大型装置', '家具环境', '录像', '声音作品', '舞台式展陈'],
    institutions: ['La Biennale di Venezia', 'German Pavilion', 'SculptureCenter', 'documenta fifteen', 'Bundestag'],
    achievements: ['Biennale Arte 2026 · German Pavilion artist', 'international installations across New York, Warsaw, Kyiv and Luxembourg'],
    whyImportant: '关注理由：Naumann 揭示政治并不只存在于口号和政党符号中，也沉积在沙发轮廓、木纹贴皮与客厅摆设里；她让家具成为识别激进化、失落感和历史否认的证据。',
    projects: [{
      year: '2026', title: 'Ruin', type: '家具、录像与声音装置／German Pavilion',
      facts: ['与 Sung Tieu 共同代表 Germany 参加 Biennale Arte 2026，由 Kathleen Reinhardt 策展。', '项目基于对 DDR 及 1990 年统一后转型时期的研究，追踪政治、社会和建筑结构中的断裂与空白。', 'Naumann 生前完成概念，她的工作室在其 2026 年逝世后依照艺术愿景落实作品。'],
      reading: '解读：“Ruin”既指物质遗迹，也指社会和道德崩塌；日常室内空间因此成为国家历史的缩小模型，观众无法把极端政治安全地留在公共广场之外。'
    }], images: [], sourceLabel: 'La Biennale di Venezia — National Participations 2026', sourceUrl: 'https://www.labiennale.org/en/news/national-participations-and-collateral-events-biennale-arte-2026'
  },
  {
    id: 'sung-tieu', name: 'Sung Tieu', born: '1987', base: 'Berlin / Hai Duong',
    intro: '出生于 Vietnam、成长并工作于 Germany 的艺术家，以雕塑、声音、文字、档案与建筑环境研究官僚制度、移民劳动和国家暴力。她把条约、表格、测量标准、平面图与行政语言转化为冷静而压迫的形式，使制度如何塑造身体与记忆变得可感。',
    methods: ['档案研究', '行政文件转译', '声音空间化', '制度建筑复现', '极简雕塑'],
    subjects: ['官僚暴力', '越南合同工', '移民与同化', '冷战遗产', '国家记忆', '标准化'],
    outputs: ['空间装置', '声音作品', '雕塑', '文字与档案', '公共艺术'],
    institutions: ['La Biennale di Venezia', 'German Pavilion', 'Haus der Kulturen der Welt', 'Hamburger Bahnhof', 'Tate'],
    achievements: ['Biennale Arte 2026 · German Pavilion artist', 'Frieze Artist Award 2021'],
    whyImportant: '关注理由：Tieu 用合同、建筑立面和格式化语言取代移民叙事中惯常的情感肖像；这种形式上的冷硬迫使观众看到个体经验背后可复制、可执行的国家系统。',
    projects: [{
      year: '2026', title: 'Ruin', type: '建筑介入、马赛克与档案装置／German Pavilion',
      facts: ['与 Henrike Naumann 共同代表 Germany 参加 Biennale Arte 2026。', '作品借约三百万块马赛克重构 Berlin Gehrenseestraße 越南合同工宿舍的灰色立面。', '项目连接 DDR 劳工协议、统一后的制度遗弃、移民居住史与 German Pavilion 自身的国家主义建筑。'],
      reading: '解读：她选择给展馆“增加”一层移民建筑身份，而不是继续以破坏表现德国历史；附加的立面把国家馆从纪念性外壳变成合同工生活史的证据表面。'
    }], images: [], sourceLabel: 'La Biennale di Venezia — National Participations 2026', sourceUrl: 'https://www.labiennale.org/en/news/national-participations-and-collateral-events-biennale-arte-2026'
  },
  {
    id: 'andreas-angelidakis', name: 'Andreas Angelidakis', born: '1968', base: 'Athens / Greece',
    intro: '雅典艺术家与建筑师，以装置、写作、展览设计、数字模拟和柔软雕塑研究废墟、互联网、消费文化及空间意识形态。他常从虚拟模型出发，把古典柱式、家具与网络图像转成可移动、可坐卧的环境，检验建筑如何反过来设计人的身份与行为。',
    methods: ['数字模拟到实体转译', '柔软模块雕塑', '展览建筑', '建筑史挪用', '沉浸式叙事'],
    subjects: ['废墟与记忆', '国家身份', '互联网文化', '酷儿历史', '消费与纪念物', '空间意识形态'],
    outputs: ['沉浸式装置', '软雕塑', '影像', '写作', '展览设计'],
    institutions: ['La Biennale di Venezia', 'documenta 14', 'Onassis Foundation', 'DESTE Foundation', 'Museum of Contemporary Art Chicago'],
    achievements: ['Biennale Arte 2026 · Greece Pavilion solo artist', 'documenta 14 participant'],
    whyImportant: '关注理由：Angelidakis 把建筑从稳定权威变成可拖动、可倚靠甚至可扮演的道具；古典遗产、网络幻象与酷儿流行文化相撞，使国家身份显露为不断更新的空间表演。',
    projects: [{
      year: '2026', title: 'ESCAPE ROOM', type: '沉浸式建筑、灯光与软雕塑环境／Greece Pavilion',
      facts: ['项目把 Greece Pavilion 改造成由灯光舞池、悬挂古典柱、LED 镜像、纪念品和充气物组成的逃脱空间。', 'Plato 洞穴、国家馆历史、互联网图像、queer nightlife 与当代民族主义被置于同一环境。', '软柱与镜像回路削弱纪念性建筑的稳定身份，观众必须在装置内部移动和选择路径。'],
      reading: '解读：逃脱并不是找到唯一出口，而是识别“国家”如何像布景般被建造和重复；camp 的轻盈并未取消历史暴力，反而让纪念性建筑失去庄严保护层。'
    }], images: [], sourceLabel: 'Onassis Foundation — Andreas Angelidakis', sourceUrl: 'https://www.onassis.org/people/andreas-angelidakis'
  },
  {
    id: 'nilbar-gures', name: 'Nilbar Güreş', born: '1977', base: 'Vienna / Istanbul / Naples',
    intro: '出生于 Istanbul 的土耳其跨媒介艺术家，以摄影、录像、拼贴、纺织、表演和雕塑研究女性、酷儿社群与少数群体如何在家庭、宗教和公共空间中生活。她运用手工艺、幽默和精心摆拍，把日常照护与细小抵抗转化为挑战父权和异性恋规范的图像。',
    methods: ['摆拍摄影', '纺织与刺绣', '社区协作', '表演性录像', '日常物件拟人化'],
    subjects: ['女性与酷儿身份', '文化多样性', '家庭权力', '宗教与地理', '少数群体', '日常抵抗'],
    outputs: ['摄影', '录像', '拼贴', '纺织作品', '雕塑与表演'],
    institutions: ['La Biennale di Venezia', 'Türkiye Pavilion', 'Arter', 'LENTOS Kunstmuseum Linz', 'Istanbul Modern'],
    achievements: ['Biennale Arte 2026 · Türkiye Pavilion solo artist', 'Arter institutional solo exhibition Velvet Gaze 2025'],
    whyImportant: '关注理由：Güreş 将刺绣、编织和家庭布置从“装饰性女性劳动”转为政治语言，同时保留参与者的幽默、欲望与主体性；她避免把边缘群体固定成受害者形象。',
    projects: [{
      year: '2026', title: 'A KISS ON THE EYES', type: '摄影、录像、纺织与雕塑／Türkiye Pavilion',
      facts: ['代表 Türkiye 参加 Biennale Arte 2026，由 Başak Doğa Temür 策展。', '项目延续艺术家对文化符号、社会不平等和身份问题的诗性、批判性与幽默处理。', '摄影、录像、拼贴、纺织及近年扩展的三维形式共同构成展览。'],
      reading: '解读：亲吻双眼既像祝福，也强调观看关系中的亲密与权力；多种手工和影像媒介让身份不被压缩成单一标签，而表现为持续协商的生活网络。'
    }], images: [], sourceLabel: 'e-flux — Nilbar Güreş: A Kiss on the Eyes', sourceUrl: 'https://www.e-flux.com/announcements/6787065/nilbar-g-re-a-kiss-on-the-eyes'
  }
];
