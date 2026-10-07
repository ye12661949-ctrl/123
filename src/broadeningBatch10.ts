import type { Artist } from './data';

// Source audit: research/updates/2026-10-07-broadening10.md
export const broadeningBatch10: Artist[] = [
  {
    id: 'janna-ireland', name: 'Janna Ireland', born: '出生年份未公开', base: 'Los Angeles, California / USA',
    intro: '出生于费城、现居洛杉矶的摄影艺术家，实践横跨建筑摄影、家族档案与暗房实验。她通过再摄影、放大、接触印相和物件感光，把黑人家庭影像从私人纪念物转化为关于作者、记忆与自我表述的研究。',
    methods: ['家族档案再工作', '暗房实验', '建筑摄影', '再摄影', '摄影史研究'],
    subjects: ['黑人家庭影像', '代际记忆', '建筑', '哀悼', '作者性', '自我表述'],
    outputs: ['摄影系列', '摄影装置', '建筑摄影', '出版物'],
    institutions: ['Aperture', 'Occidental College'],
    achievements: ['Aperture Portfolio Prize 亚军 2024', 'Regarding Paul R. Williams 2016–2020'],
    whyImportant: '关注理由：她把黑人建筑史与家族相册放在同一条研究线上，既讨论谁有权设计空间，也讨论谁能生产和保存自身形象；暗房中的复制、遮挡与叠加让档案成为可被继续书写的材料。',
    projects: [{
      year: '2023', title: 'Pauline', type: '家族档案／暗房摄影装置',
      facts: ['项目源自艺术家祖母 Pauline 于 2022 年去世后留下的数百张照片，是一件非线性的家族纪念作品。', '艺术家以 35mm 放大、接触印相、物影照片及祖母首饰和葬礼植物等元素组成二十一块面板。', '项目获 2024 Aperture Portfolio Prize 亚军。'],
      reading: '解读：作品保留复制痕迹、边缘重叠和手写的不完美，使家庭照片不再只是身份凭证，而成为私人记忆与黑人视觉自主之间的开放接口。'
    }], images: [], sourceLabel: 'Aperture — Janna Ireland’s Pauline', sourceUrl: 'https://aperture.org/editorial/janna-irelands-pauline-is-a-passport-into-a-past-life/'
  },
  {
    id: 'abhishek-khedekar', name: 'Abhishek Khedekar', born: '出生年份未公开', base: 'Delhi / India',
    intro: '成长于印度西海岸 Dapoli、现居德里的摄影艺术家。他以当代摄影回应小镇照相馆的地方史，把家庭相册、新闻图片、科学图像与个人返乡经验并置，追踪一个地点如何被不同代摄影者共同塑造。',
    methods: ['地方档案研究', '返乡摄影', '再演与重构', '肖像摄影', '长期地景观察'],
    subjects: ['印度小镇', '照相馆史', '地方记忆', '家庭相册', '达利特表演者', '城市化'],
    outputs: ['摄影系列', '摄影书', '肖像与地景'],
    institutions: ['Aperture', 'National Institute of Design Ahmedabad', 'Loose Joints'],
    achievements: ['Aperture Portfolio Prize 亚军 2024', '首本摄影书 Tamasha 由 Loose Joints 出版 2023'],
    whyImportant: '关注理由：他把常被摄影史忽视的小镇照相馆视为社会基础设施，并以自己的图像接续前辈摄影师散落在家庭和机构中的档案，扩展了印度摄影史的地域与阶层尺度。',
    projects: [{
      year: '2018–ongoing', title: 'DAPOLI, Lost and Found', type: '地方摄影史／返乡长期项目',
      facts: ['围绕艺术家故乡 Dapoli 展开，将童年记忆、快速变化的城镇和地方摄影史连接起来。', '项目追索 1960 年代曾为当地重要摄影者的 Subhash Kolekar；其照片散见家庭相册、报纸、警方档案与大学科学资料。', '艺术家重构 Kolekar 的肖像及科学、教学图像语言；项目获 2024 Aperture Portfolio Prize 亚军。'],
      reading: '解读：作品不是复原一个完整档案，而是让档案缺口、模仿关系和返乡者的陌生感共同显形，由此质疑摄影史只围绕少数名家书写的方式。'
    }], images: [], sourceLabel: 'Aperture — In India, an Artist Revives the Legacy of a Small-Town Photo Studio', sourceUrl: 'https://aperture.org/editorial/in-india-an-artist-revives-the-legacy-of-a-small-town-photo-studio/'
  },
  {
    id: 'laila-stevens', name: 'Laila Stevens', born: '出生年份未公开', base: 'Brooklyn, New York / USA',
    intro: '出生于纽约皇后区、现居布鲁克林的摄影艺术家，以黑白肖像和家庭场景建立黑人女性、女孩及酷儿亲属关系的视觉档案。她把美国南方地景、土地所有权与家庭内部的安全空间并置，强调被摄者的凝视与共同塑造。',
    methods: ['黑白肖像', '家庭协作', '场景编排', '长期社群摄影', '南方地景观察'],
    subjects: ['黑人女性', '姐妹关系', '酷儿家庭', '土地与家园', '代际关系', '美国南方'],
    outputs: ['摄影系列', '肖像', '展览'],
    institutions: ['Aperture', 'Fashion Institute of Technology'],
    achievements: ['Aperture Portfolio Prize 亚军 2024'],
    whyImportant: '关注理由：她让“姐妹”同时成为题材和拍摄方法，以柔和光线、正面凝视和室内聚会修正黑人女性在历史影像中的缺席与被动位置，也把家居空间与土地权力联系起来。',
    projects: [{
      year: '2021–ongoing', title: 'The Clayton Sisterhood Project', type: '黑白肖像／家庭与社群长期项目',
      facts: ['项目始于艺术家 2021 年前往北卡罗来纳探访大家庭，包含沼泽、住宅及黑人女性和女孩的肖像。', '“姐妹”从血缘亲属扩展至认同为女性或 femme 的朋友及酷儿、女同性恋社群。', '项目受 Gordon Parks、Carrie Mae Weems 及 1980 年代黑人女性作家肖像影响，并获 2024 Aperture Portfolio Prize 亚军。'],
      reading: '解读：人物直视镜头、家中陈设与南方地景共同建立一种主权感；亲密并非去政治化，而是对土地、家庭和可见性历史的具体回应。'
    }], images: [], sourceLabel: 'Aperture — Laila Stevens Seeks Sisterhood in Her Portraits of Black Women', sourceUrl: 'https://aperture.org/editorial/laila-stevens-seeks-sisterhood-in-her-portraits-of-black-women/'
  },
  {
    id: 'nengi-omuku', name: 'Nengi Omuku', born: '出生年份未公开', base: 'Lagos / Nigeria',
    intro: '出生于尼日利亚 Warri、现居拉各斯的画家。她在拼接并打底的尼日利亚 sanyan 手织布上作油画，以幽灵般的人物、花园和梦境地景处理自然、疗愈、集体生活与生态关怀。',
    methods: ['油画', 'sanyan 手织布拼接', '梦境式人物', '园艺经验转译', '艺术史研究'],
    subjects: ['自然与疗愈', '生态关怀', '集体生活', '尼日利亚纺织传统', '身体', '记忆'],
    outputs: ['大型绘画', '纺织基底作品', '装置式展陈'],
    institutions: ['Hastings Contemporary', 'Slade School of Fine Art'],
    achievements: ['首个英国公共美术馆大型个展 The Dance of People and the Natural World 2023–2024'],
    whyImportant: '关注理由：她不是把传统织物当作装饰性背景，而让 sanyan 的材料史、拼接结构与当代人物绘画共同工作；对花园和安宁的描绘也把心理照护与生态伦理连接起来。',
    projects: [{
      year: '2021–2023', title: 'The Dance of People and the Natural World', type: '绘画系列／机构个展',
      facts: ['展览于 2023 年 10 月 7 日至 2024 年 3 月 3 日在 Hastings Contemporary 举行，是艺术家首个英国公共美术馆大型个展。', '展出十余件 2021 至 2023 年作品，聚焦自然带来的安全、宁静与重新连接。', '代表作包括 Lighthouse、Welcome Home、Still Life、Repose、Swing 与大型绘画 Eden；媒介为油彩与经石膏处理的 sanyan 拼接布。'],
      reading: '解读：半透明人物似乎与风景相互渗透，削弱人物和环境的主从关系；手织布的接缝则把宁静图景保留在具体劳动与物质历史之中。'
    }], images: [], sourceLabel: 'Hastings Contemporary — Nengi Omuku: The Dance of People and the Natural World', sourceUrl: 'https://www.hastingscontemporary.org/events/nengi-omuku/'
  },
  {
    id: 'kubra-khademi', name: 'Kubra Khademi', born: '出生年份未公开', base: 'Paris / France',
    intro: '阿富汗出生、现居巴黎的跨媒介艺术家与行为表演者。她从难民与女性经验出发，通过公共行为、绘画和水粉画回应父权暴力，并借女性口述、幽默、性与苏菲诗歌建立不由男性观看定义的女性空间。',
    methods: ['公共空间行为', '身体政治', '水粉画', '女性口述传统', '讽刺与夸张'],
    subjects: ['父权暴力', '女性空间', '难民经验', '性与身体', '阿富汗社会', '自由'],
    outputs: ['行为艺术', '水粉画', '素描', '混合媒介装置'],
    institutions: ['Biennale of Sydney', 'UNSW Galleries', 'Kabul University', 'Beaconhouse University'],
    achievements: ['第24届悉尼双年展 Ten Thousand Suns 参展 2024', '法国公民 2020'],
    whyImportant: '关注理由：她把高风险公共行为与看似轻快、露骨的纸上作品放在同一实践中，让反抗既表现为身体占领公共空间，也表现为女性之间隐秘、幽默而复杂的语言世界。',
    projects: [{
      year: '2015–2024', title: 'Armor 及悉尼双年展纸上作品', type: '行为／绘画与女性身体政治',
      facts: ['2015 年在喀布尔实施公共行为 Armor 后被迫离开阿富汗，随后定居巴黎。', '在第24届悉尼双年展 Ten Thousand Suns 中展出 The birth giving #4（2021，混合媒介）及 Sans titre (Hole) 系列（2022，纸上水粉）。', '纸上作品排除男性人物，以正面、夸张身体和女性口述中的隐喻、讽刺与性讨论回应父权秩序。'],
      reading: '解读：从 Armor 的防御外壳到纸上人物毫不遮掩的身体，作品把“被观看”的危险转化为主动控制可见性的策略。'
    }], images: [], sourceLabel: 'Biennale of Sydney — Kubra Khademi', sourceUrl: 'https://www.biennaleofsydney.art/participants/kubra-khademi/'
  },
  {
    id: 'sin-wai-kin', name: 'Sin Wai Kin', born: '1991', base: 'London / United Kingdom',
    intro: '出生于多伦多、现居伦敦的影像与表演艺术家，以虚构角色、妆容、服装和叙事电影检验性别、欲望与文化故事如何塑造现实。他们把粤语家庭经验、变装、流行文化、科幻和西方艺术史放入同一影像语法。',
    methods: ['角色扮演', '叙事电影', '变装与妆容', '艺术史挪用', '世界建构'],
    subjects: ['性别', '身份叙事', '家庭与传承', '流行文化', '艺术史', '现实建构'],
    outputs: ['单频道与多频道影像', '表演', '装置', '移动肖像'],
    institutions: ['Frans Hals Museum', 'Tate', 'British Museum', 'Lahore Biennale Foundation', 'MOCA Toronto'],
    achievements: ['Turner Prize 提名 2022', 'Frans Hals Museum 首个荷兰个展 Still Life 2026'],
    whyImportant: '关注理由：他们把身份问题从自传式陈述推进到“故事怎样制造现实”的结构层面，并通过角色、类型片和艺术史经典让性别的可变性与博物馆的分类权力正面相遇。',
    projects: [{
      year: '2026', title: 'Still Life', type: '影像委任／馆藏对话个展',
      facts: ['Frans Hals Museum 于 2026 年 5 月 22 日至 8 月 30 日举办艺术家首个荷兰个展，将移动肖像与馆藏的十七世纪绘画并置。', '同名新作由博物馆委任，以艺术家的父母围绕粤式餐食交谈为核心，讨论连接与无常。', '展览把变装、科幻与静物、虚空画传统相连；艺术家作品已进入 Tate Modern、British Museum 与 Frans Hals Museum 收藏。'],
      reading: '解读：父母的日常交谈进入古典静物和肖像的制度空间，使家庭记忆不仅是身份素材，也成为重写艺术史叙事和人物可见性的方式。'
    }], images: [], sourceLabel: 'Frans Hals Museum — Sin Wai Kin: Still Life', sourceUrl: 'https://franshalsmuseum.nl/en/news/sin-wai-kin'
  }
];
