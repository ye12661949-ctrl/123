import type { Artist } from './data';

// Source audit: research/updates/2026-10-07-broadening8.md
export const broadeningBatch8: Artist[] = [
  {
    id: 'sarah-amrani', name: 'Sarah Amrani', born: '1994', base: 'Rotterdam / 荷兰',
    intro: '以摄影、录像、纺织和数字图像研究社交媒体、技术与女性身份之间的关系。她把脸视为审美标准竞争的场域，尤其关注算法滤镜、整形预览与北非文化符号如何影响自我观看。',
    methods: ['数字拼贴', 'AI 美颜滤镜研究', '摄影', '录像装置', '纺织'],
    subjects: ['女性身份', '美貌标准', '社交媒体', '面部', '穆斯林经验', '算法'],
    outputs: ['摄影', '录像装置', '纺织作品', '多媒体展览'],
    institutions: ['Foam Fotografiemuseum Amsterdam'],
    achievements: ['Florentine Riem Vis Grant 2024', 'Foam 3h 首次博物馆个展 2024–2025'],
    whyImportant: '关注理由：她把平台化审美与北非女性的文化经验相连，能为目录中的面部识别、自拍、AI 图像与身份研究建立更具体的交叉参照。',
    projects: [{
      year: '2018–2025', title: 'Terror of Beauty', type: '摄影／录像／纺织多媒体展览',
      facts: ['研究社交媒体与技术如何塑造女性身份及面部审美。', '展览讨论可预览整形效果的 AI 美颜滤镜，并包括摄影、录像装置和纺织作品。', '2024 年 12 月 7 日至 2025 年 3 月 16 日在 Foam 3h 展出，为其首次博物馆个展。'],
      reading: '解读：作品把滤镜从轻巧的消费工具还原为训练观看、规范脸部的基础设施，同时保留文化符号被重新使用的可能。'
    }], images: [], sourceLabel: 'Foam — Sarah Amrani: Terror of Beauty', sourceUrl: 'https://www.foam.org/events/sarah-amrani'
  },
  {
    id: 'jasmijn-vermeeren', name: 'Jasmijn Vermeeren', born: '1996', base: 'The Netherlands / 荷兰',
    intro: '以镜头媒介、自画像拼贴、录像和雕塑处理慢性疼痛与不可见残障。她以 crip 作为主动的身份和政治语言，讨论“看起来没生病”这一社会判断怎样规定正常、功能与归属。',
    methods: ['自画像', '摄影拼贴', '录像', '雕塑化自我模型', '个人经验转译'],
    subjects: ['不可见残障', '慢性疼痛', '身体规范', '身份', '归属'],
    outputs: ['摄影', '移动影像', '雕塑', '空间展览'],
    institutions: ['Foam Fotografiemuseum Amsterdam', 'KABK The Hague', 'Verbloemd collective'],
    achievements: ['Florentine Riem Vis Stipendium 2025', 'Foam 3h 首次个展 2025–2026'],
    whyImportant: '关注理由：她不把疾病经验压缩成纪实说明，而是用不同媒介处理身体感受与外界判断之间的落差，补充目录对残障艺术及身体政治的覆盖。',
    projects: [{
      year: '2025–2026', title: 'You Don’t Look Sick', type: '摄影拼贴／录像／雕塑装置',
      facts: ['以个人慢性疼痛经验和社会对健康、功能的假设为起点。', '包括放大的自画像拼贴、录像和雕塑化自我模型。', '2025 年 12 月 5 日至 2026 年 5 月 25 日在 Foam 3h 展出。'],
      reading: '解读：作品让不能被外观看见的身体经验通过媒介层次获得形式，重点不是证明疾病，而是暴露“正常身体”如何被观看规则制造。'
    }], images: [], sourceLabel: 'Foam — Jasmijn Vermeeren: You Don’t Look Sick', sourceUrl: 'https://www.foam.org/en/events/jasmijn-vermeeren-you-don-t-look-sick'
  },
  {
    id: 'karim-el-maktafi', name: 'Karim El Maktafi', born: '1992', base: 'Milan / Italy',
    intro: '出生于意大利摩洛哥家庭的摄影艺术家，以长期纪实和肖像研究双重文化、家庭记忆与归属。他在意大利与摩洛哥之间工作，使第二代移民的身份不再被处理为单一国籍选择。',
    methods: ['长期纪实', '肖像', '家庭档案', '跨地域田野'],
    subjects: ['第二代移民', '意大利—摩洛哥身份', '家庭', '归属', '文化记忆'],
    outputs: ['摄影系列', '摄影书'],
    institutions: ['CAMERA Centro Italiano per la Fotografia', 'FUTURES Photography', 'PHmuseum'],
    achievements: ['PHmuseum New Generation Prize 2017', 'Kassel Dummy Award 二等奖 2018', 'FUTURES Photography／CAMERA 提名 2022'],
    whyImportant: '关注理由：他用家庭与日常关系处理欧洲第二代移民经验，提供一种不依赖新闻事件、而从亲密空间展开身份政治的摄影方法。',
    projects: [{
      year: '2017–ongoing research', title: 'They Call Us Second Generation', type: '长期纪实摄影／身份研究',
      facts: ['围绕在意大利成长、具有移民家庭背景的一代展开。', '通过肖像和日常环境讨论文化继承、归属及“第二代”标签。', '项目被 FUTURES Photography 收录；艺术家于 2022 年由 CAMERA 提名加入 FUTURES。'],
      reading: '解读：系列把抽象的移民分类拉回人物、家庭与空间，使身份呈现为持续协商而非固定标签。'
    }], images: [], sourceLabel: 'FUTURES Photography — They Call Us Second Generation', sourceUrl: 'https://www.futures-photography.com/artist-projects/they-call-us-second-generation'
  },
  {
    id: 'kelani-abass', name: 'Kelani Abass', born: '1979', base: 'Lagos / Nigeria',
    intro: '尼日利亚艺术家，以家庭印刷厂留下的活字字盘、金属字符和档案照片制作摄影雕塑与拼贴。作品把私人相册、印刷劳动和历史记忆放进同一物质结构。',
    methods: ['档案摄影', '活字字盘', '拼贴', '现成物', '印刷材料'],
    subjects: ['家庭记忆', '历史', '印刷劳动', '代际传承', '档案'],
    outputs: ['摄影雕塑', '混合媒介装置', '绘画'],
    institutions: ['MoMA', 'Tate Modern', 'Wereldmuseum Rotterdam', 'Gropius Bau'],
    achievements: ['MoMA New Photography 2023', 'A World in Common — Tate Modern 2023', 'James Barnor Foundation Photography Award 入围 2022'],
    whyImportant: '关注理由：他让档案照片的承载物和生产历史进入作品本身，适合与单纯扫描、放大旧照片的档案艺术进行方法上的区分。',
    projects: [{
      year: '2022', title: 'Casing History, Spilling Memories', type: '活字字盘与喷墨照片／摄影雕塑',
      facts: ['把喷墨照片置入 letterpress type-case（活字字盘）中。', '系列前两件于 2023 年参加 MoMA New Photography，并进入 MoMA 摄影部收藏。', '作品 1 的馆藏尺寸为 70 × 90 × 6.5 厘米。'],
      reading: '解读：旧字盘既是构图网格，也是家族印刷劳动的真实遗物，照片因此不只是图像，更被嵌入具体的生产史。'
    }], images: [], sourceLabel: 'MoMA — Casing History, Spilling Memories 1', sourceUrl: 'https://www.moma.org/collection/works/434635'
  },
  {
    id: 'khashayar-javanmardi', name: 'Khashayar Javanmardi', born: '1991', base: 'Lausanne / Switzerland（出生于伊朗）',
    intro: '波斯镜头艺术家，以长期非虚构摄影记录里海南岸的生态退化，以及污染、区域治理、经济与沿岸日常生活之间的关系。除摄影外，他也把档案、声音和生成影像带入展览。',
    methods: ['长期环境纪实', '肖像', '档案材料', '声音协作', '生成影像'],
    subjects: ['里海', '生态危机', '污染', '区域治理', '地方生活', '记忆'],
    outputs: ['摄影', '摄影书', '档案装置', '声音与影像展览'],
    institutions: ['Foam Fotografiemuseum Amsterdam', 'Prix Elysée', 'PhMuseum', 'Hayaat Art Space'],
    achievements: ['Prix Elysée 评审特别提及 2023', 'PhMuseum Photography Grant 二等奖 2024', 'Foam 3h 首次个展 2025'],
    whyImportant: '关注理由：他把气候危机落到沿岸人物、经济与治理结构，而不是只追求灾难景观；长期在地拍摄也为环境摄影提供了更具关系性的路径。',
    projects: [{
      year: '2014–ongoing', title: 'The Caspian ‘Lake’ / Caspian: A Southern Reflection', type: '长期摄影／档案与多媒体展览',
      facts: ['持续记录伊朗一侧里海南岸的生态退化、污染、经济衰退和当地生活。', 'Foam 展览结合摄影、档案材料、Maziar Shirchi 的声音设计，以及想象未受破坏里海景观的 AI 生成录像。', '摄影书 Caspian: A Southern Reflection 于 2024 年由 Loose Joints 出版；Foam 3h 展览于 2025 年 7 月 25 日至 11 月 30 日举行。'],
      reading: '解读：档案、声音与生成的理想景观让现实记录获得时间对照，但项目最有力的部分仍来自长期拍摄与沿岸社区之间的关系。'
    }], images: [], sourceLabel: 'Foam — Khashayar Javanmardi: The Caspian ‘Lake’', sourceUrl: 'https://www.foam.org/press/foam-3h-khashayar-javanmardi'
  },
  {
    id: 'citra-sasmita', name: 'Citra Sasmita', born: '1990', base: 'Bali / Indonesia',
    intro: '印度尼西亚艺术家，以巴厘 Kamasan 绘画传统为基础，扩展到长卷、装置、刺绣、气味与声音。她重新书写长期由男性主导的神话图像，让女性成为后父权世界的行动主体。',
    methods: ['Kamasan 绘画再造', '长卷', '多感官装置', '女性工艺协作', '神话改写'],
    subjects: ['祖先记忆', '仪式', '迁移', '殖民史', '女性主义', '巴厘文化'],
    outputs: ['绘画', '装置', '刺绣', '气味与声音环境'],
    institutions: ['Barbican Centre', 'Delfina Foundation', 'Bagri Foundation'],
    achievements: ['Into Eternal Land — Barbican 首次英国个展 2025'],
    whyImportant: '关注理由：她对传统媒介的处理不是形式借用，而是同时改变叙事主体、制作协作与展览感官结构，为东南亚绘画和女性主义实践提供重要参照。',
    projects: [{
      year: '2024–2025', title: 'Into Eternal Land', type: '绘画／刺绣／气味／声音装置',
      facts: ['2025 年 1 月 30 日至 4 月 21 日在 Barbican The Curve 展出，为首次英国个展。', '以多段长卷、蟒蛇皮绘画、与西巴厘女性工艺者合作的刺绣、姜黄曼陀罗及环境声音构成。', '内容连接印度尼西亚群岛迁移史、祖先记忆、仪式及女性转化。'],
      reading: '解读：对 Kamasan 的再造同时发生在人物权力、材料和空间观看上，传统绘画因此变成可进入的叙事环境。'
    }], images: [], sourceLabel: 'Barbican — Citra Sasmita: Into Eternal Land', sourceUrl: 'https://www.barbican.org.uk/whats-on/2025/event/citra-sasmita-into-eternal-land'
  }
];
