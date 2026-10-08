import type { Artist } from './data';

// Source audit: research/updates/2026-10-09-broadening41.md
export const broadeningBatch41: Artist[] = [
  {
    id: 'julio-bittencourt', name: 'Julio Bittencourt', born: '1981', base: 'São Paulo, Brazil',
    intro: '巴西摄影师，以长期城市纪实、建筑立面、窗框肖像和固定观察点研究土地分配、住房权与都市密度。他从邻楼拍摄 São Paulo 被占用的 Prestes Maia 大楼，让数百个家庭通过破损窗框出现，既呈现建筑材料的衰败，也保留居民在不稳定居所中形成的尊严与共同体。',
    methods: ['长期城市纪实', '窗框肖像', '固定对面机位', '建筑立面', '社区观察'],
    subjects: ['housing rights', 'urban occupation', 'São Paulo', 'gentrification', 'homeless families', 'community'],
    outputs: ['摄影系列', '摄影书', '新闻摄影', '展览'],
    institutions: ['Aperture', 'Foto8', 'ZoneZero'],
    achievements: ['Aperture Portfolio Prize winner 2007', 'Aperture institutional feature', 'international publication and exhibition record'],
    whyImportant: '关注理由：Bittencourt 用统一窗框把住房运动转化为可比较的社会结构，却没有把居民压缩成匿名建筑模块。每个窗口既是肖像边界、交流通道，也是把人隔离于城市系统之外的物理障碍；形式秩序与居住不稳定因此在同一画面中冲突。',
    projects: [{
      year: '2006–2007', title: 'In a Window', type: '住房占用、窗框肖像与都市共同体／Aperture Portfolio Prize 2007 winner',
      facts: ['项目拍摄 São Paulo 市中心 911 Prestes Maia Avenue 的二十二层大楼；该楼长期空置后于 2003 年由 Movement of the Homeless from Downtown 组织数百户无家家庭进入。', '居民清理建筑后形成约 1,630 人、468 个家庭及 315 名儿童的社区，并建立图书馆、workshops 与教育活动空间；2006 年收到短期驱逐通知。', 'Bittencourt 从 adjacent building 拍摄居民出现在 weathered window frames 中，利用 São Paulo 高密度建筑中通过窗口交流的习惯，呈现材料衰败、人的尊严与制度排斥。'],
      reading: '解读：重复窗格容易被看成漂亮的网格，但人物姿态、花盆、亲子关系和不同房间不断打破整齐分类。作品脱离背景仍能传达密度与隔离；住房运动史则把立面从都市奇观转成土地权与公共政策的证据。'
    }], images: [], sourceLabel: 'Aperture — Julio Bittencourt: In a Window', sourceUrl: 'https://aperture.org/portfolio-prize/2007-portfolio-prize-winner-julio-bittencourt/'
  },
  {
    id: 'richard-gilles', name: 'Richard Gilles', born: '出生年份未公开', base: 'Folsom, California',
    intro: '美国摄影艺术家，以横幅全景、无人地景和中性观看研究被改造成住所的车辆、临时居住与社会边缘空间。他在 California 拍摄停于郊区缝隙、工业带与荒地的 trailers，不展示居住者面孔，以车辆个体差异和停放环境讨论接近无家可归但通常不可见的人群。',
    methods: ['全景摄影', '无人社会地景', '中性类型学', '道路观察', '隐私保护'],
    subjects: ['vehicular dwelling', 'near homelessness', 'rootlessness', 'California', 'leftover space', 'precarious housing'],
    outputs: ['全景摄影系列', '限量版画', '展览', '社会地景档案'],
    institutions: ['Aperture', 'Axis Gallery', 'San Francisco State University'],
    achievements: ['Aperture Portfolio Prize runner-up 2007', 'Almost Home-Less solo exhibition at Axis Gallery 2007', 'US group exhibition record'],
    whyImportant: '关注理由：Gilles 让车辆代替人物进入肖像位置，既保护脆弱居住者，也记录住宅如何缩减为可移动外壳。图像借用 New Topographics 的克制语法，但拖车旁的道路、围栏与空地仍暴露社会分配；中性并非没有立场，而是拒绝用苦难面孔完成情感消费。',
    projects: [{
      year: '2006–2007', title: 'Almost Home-Less', type: '车辆居住、全景社会地景与临界无家状态／Aperture Portfolio Prize 2007',
      facts: ['系列在 California 拍摄被用作 dwellings 的 trailers and vehicles，它们停放于 suburban leftovers、industrial zones 或 wide-open wasteland。', 'Gilles 使用 panoramic format，并参考 1970s–80s New Topographics and New Color 的视觉中性；画面不展示 occupants，以避免侵入 precarious privacy。', '每辆车保留独特改装和周边痕迹，系列借此指出 abundant society 中以车辆替代 fixed address 的 almost homeless 现象。'],
      reading: '解读：缺少人物使车辆成为身体代理，窗帘、附着物和停靠位置透露生活却不替主人讲完整故事。作品可能把贫困转成冷静形式，但全景中的剩余空间明确显示：所谓流动并不总是自由，而可能是住房体系留下的被迫状态。'
    }], images: [], sourceLabel: 'Aperture — Richard Gilles: Almost Home-Less', sourceUrl: 'https://aperture.org/portfolio-prize/2007-portfolio-prize-runner-up-richard-gilles/'
  },
  {
    id: 'hynek-alt-aleksandra-vajd', name: 'Hynek Alt & Aleksandra Vajd', born: '1976 / 1971', base: 'Berlin / Prague / Ljubljana',
    intro: '由捷克艺术家 Hynek Alt 与斯洛文尼亚艺术家 Aleksandra Vajd 组成的合作实践，以相互拍摄、双联画、动作配对与持续家庭记录研究伴侣凝视、共同创作与亲密关系中的责任。他们在得知将成为父母后开始项目，使摄影者和被摄者的位置不断互换，打破摄影史中男性单向拍摄妻子或情人的传统。',
    methods: ['伴侣协作肖像', '相互拍摄', '双联画', '动作与色调配对', '长期家庭记录'],
    subjects: ['couplehood', 'mutual gaze', 'parenthood', 'intimacy', 'shared responsibility', '摄影者与被摄者'],
    outputs: ['摄影双联画', '长期肖像系列', '展览', '合作档案'],
    institutions: ['Aperture', 'FAMU Prague', 'SUNY New Paltz', 'Fulbright Program'],
    achievements: ['Aperture Portfolio Prize runner-up 2007', 'Fulbright Scholarships 2004–2006', 'European and US exhibition record'],
    whyImportant: '关注理由：两位艺术家让镜头权力在伴侣之间来回移动，使每幅肖像同时是观察、回应和被观察。双联配对不是简单展示相似动作，而把情绪、色彩和时间差压成一场三方对峙：两位作者彼此观看，观众也被迫意识到自己的窥视位置。',
    projects: [{
      year: '2001–ongoing', title: 'manwomanunfinished', type: '伴侣共同肖像、相互凝视与家庭责任／Aperture Portfolio Prize 2007',
      facts: ['Alt 与 Vajd 在得知即将拥有孩子后自发开始项目，最初来自 curiosity and playfulness，随后发展为持续的 intimate confession。', '两位创作者同时充当 photographer and subject，使观众夹在拍摄者目光、被摄者回应与自身观看之间。', '作品以 diptychs 组织，配对依据 gesture、emotional tone 与 palette，而非仅靠相同场景；项目被描述为对共同生活、责任和分享关系的 mutual examination。'],
      reading: '解读：镜头交换把“谁定义谁”从单向权力改成持续协商，但亲密关系并不会因此自动平等。双联中的对应和失配让这种协商可见；即使不读说明，交叉目光与身体回应也足以提示两张图在互相追问。'
    }], images: [], sourceLabel: 'Aperture — Hynek Alt and Aleksandra Vajd: manwomanunfinished', sourceUrl: 'https://aperture.org/portfolio-prize/2007-portfolio-prize-runner-up-hynek-alt-and-aleksandra-vajd/'
  },
  {
    id: 'delphine-diallo', name: 'Delphine Diallo', born: '1977', base: 'New York City / Senegal',
    intro: '法国与塞内加尔背景的摄影艺术家、设计师与插画家，以肖像、手绘、图案提取、拼贴和图像分层研究家族身份及非洲视觉传统。她前往 Senegal 的 Saint-Louis 寻找家庭脉络，把纺织纹样、图腾动物和植物直接叠入人物肖像，使照相馆传统与漫画、涂鸦和个人记号发生碰撞。',
    methods: ['肖像摄影', '手绘叠加', '纹样提取', '数字拼贴', '图像与文字记号'],
    subjects: ['Senegalese-French identity', 'family heritage', 'studio portraiture', 'African visual culture', 'totemic imagery', 'diaspora'],
    outputs: ['摄影系列', '插画', '拼贴', '平面设计', '展览'],
    institutions: ['Aperture', 'Académie Charpentier', 'Yossi Milo Gallery'],
    achievements: ['Aperture Portfolio Prize runner-up 2007', 'New York institutional and gallery exhibitions', 'international editorial and design practice'],
    whyImportant: '关注理由：Diallo 没有把寻根项目做成纯粹纪实访问，而让设计和插画训练直接改变肖像表面。图案既可能强化“非洲性”的视觉期待，也因来自具体纺织物、植物和家庭人物而形成私人语法；作品的价值正在这种文化符号与个人建构之间的摩擦。',
    projects: [{
      year: '2005–2007', title: 'Magic Photo Studio', type: '塞内加尔家族身份、照相馆传统与图像叠绘／Aperture Portfolio Prize 2007',
      facts: ['Diallo 2005 年前往 Senegal 的 Saint-Louis 寻找 family heritage；她出生于 Paris，父母分别具有 Senegalese and French 背景。', '项目受 Malick Sidibé 在 Bamako 的 studio portraiture 启发，同时将 textiles、totemic animals 与 plants 的图案提取并直接叠到 portraits 上。', '作品混合 painting、sketching and notation，也借用艺术家作为 graphic designer and illustrator 的经验，使摄影与 graphic-novel、graffiti-influenced drawing 相连。'],
      reading: '解读：纹样不只是装饰边框，而覆盖、穿透和重新分割人物，使文化身份表现为后期组织出来的复合表面。风险是图腾与纺织符号容易被异国化；具体人物的凝视与手绘痕迹能否抵抗这种类型化，决定单张作品的力度。'
    }], images: [], sourceLabel: 'Aperture — Delphine Diallo: Magic Photo Studio', sourceUrl: 'https://aperture.org/portfolio-prize/2007-portfolio-prize-runner-up-delphine-diallo/'
  },
  {
    id: 'caleb-charland', name: 'Caleb Charland', born: '出生年份未公开', base: 'United States',
    intro: '美国摄影艺术家，以自制实验、长曝光、明胶银盐静物和可见操作者研究物理规律如何转化为摄影事件。他把火、水、磁力、火花和人造化合物置入精确装置，在科学演示、家庭危险实验与诗意静物之间制造既可解释又带魔术感的图像。',
    methods: ['自制科学实验', '长曝光', '明胶银盐摄影', '静物编排', '动作轨迹记录'],
    subjects: ['physics', 'fire and water', 'magnetism', 'chemical reaction', 'wonder', '科学与魔术'],
    outputs: ['黑白摄影系列', '实验装置', '限量版画', '展览'],
    institutions: ['Aperture', 'Massachusetts College of Art', 'Susan Maasch Fine Art'],
    achievements: ['Aperture Portfolio Prize runner-up 2007', 'US juried exhibition record', 'gallery representation'],
    whyImportant: '关注理由：Charland 把物理现象变成摄影的共同作者：磁力决定钉子悬停，旋转钻头和烟火决定光轨，水的相态决定静物结构。概念真正进入制作过程，而不是事后贴在图像上；但作品也需要超越“漂亮实验结果”，让装置中的脆弱、危险和不可触碰关系继续产生意义。',
    projects: [{
      year: '2005–2007', title: 'Demonstrations', type: '物理实验、长曝光与炼金式静物／Aperture Portfolio Prize 2007',
      facts: ['系列以 laws of physics 为起点，把 fire、water 与 man-made compounds 置入静物和高速动作实验，并参考 Harold Edgerton 的瞬间摄影。', '作品包括 WD-40 喷向火焰形成包围蜡烛的 chemical cloud、装上 sparkler 的 drill 旋转出对称光螺旋，以及用细绳固定 horseshoe magnet 使 nails 被吸引却不接触。', 'Solid Liquid Gas 以三只容器同时呈现水的液态、固态与气态；艺术家也引用儿童科学实验书与 Fischli/Weiss 的 kinetic art。'],
      reading: '解读：实验装置的因果关系能从光轨、磁力距离和相态差异中直接读出，因此无需长篇 statement 才成立。被保留在画面边缘的手和绳子拆穿魔术，也提醒所谓自然奇观始终经过人为搭建与风险控制。'
    }], images: [], sourceLabel: 'Aperture — Caleb Charland: Demonstrations', sourceUrl: 'https://aperture.org/portfolio-prize/2007-portfolio-prize-runner-up-caleb-charland/'
  },
  {
    id: 'hiroshi-watanabe', name: 'Hiroshi Watanabe', born: '出生年份未公开', base: 'Japan / Los Angeles',
    intro: '日本出生、长期在 Los Angeles 工作的摄影师，以彩色肖像、受控旅行纪实和制度化场景研究国家意识形态、媒体叙事与日常正常感。他在严密陪同下拍摄 Pyongyang 的儿童、舞者和公共表演，让鲜艳色彩与社会主义现实主义式构图同时呈现生活魅力和封闭政权的舞台性。',
    methods: ['受控旅行纪实', '彩色肖像', '公共表演摄影', '新闻叙事对照', '制度场景观察'],
    subjects: ['North Korea', 'state ideology', 'normality', 'surveillance', 'media narrative', 'public performance'],
    outputs: ['摄影系列', '摄影书', '展览', '彩色肖像'],
    institutions: ['Aperture', 'Photolucida Critical Mass', 'Nihon University', 'UCLA'],
    achievements: ['inaugural Aperture Portfolio Prize winner 2006', 'Photolucida Critical Mass top book award 2006', 'international publication record'],
    whyImportant: '关注理由：Watanabe 的朝鲜图像不靠偷拍揭露隐藏真相，而研究被允许看见的“正常”如何运作。少女、舞者、旗帜和领袖图像具有真实吸引力，同时又像精心搭建的 diorama；作品承认摄影师受监控和行程限制，使可见性本身成为政治材料。',
    projects: [{
      year: '2005–2006', title: 'Ideology in Paradise', type: '平壤、受控可见性与国家表象／Aperture Portfolio Prize 2006 winner',
      facts: ['系列在 Democratic People’s Republic of Korea 拍摄，艺术家旅行期间由 two guides and assigned driver 持续陪同与监控。', '画面包括弹 accordion 的女孩、穿鲜艳传统服装的 dancers、DPRK flag 与 leader image，视觉效果近似 Social Realist painting。', 'Watanabe 将亲历的表面 normality 与 Japan、United States 媒体中的 kidnapping、military posturing and famine 报道并置，但没有声称照片能揭示封闭社会的完整真相。'],
      reading: '解读：图像最有效之处不是证明官方场景虚假，而是让“真实人物”和“被组织的可见性”无法分开。鲜艳肖像可能被宣传结构吸收，也可能让观众看见被政治标签遮蔽的个体；这种不可解决性正是项目的核心。'
    }], images: [], sourceLabel: 'Aperture — Hiroshi Watanabe: Ideology in Paradise', sourceUrl: 'https://aperture.org/portfolio-prize/2006-portfolio-prize-winner-hiroshi-watanabe/'
  }
];
