import type { Artist } from './data';

const ottomanelliCollateral = 'https://www.domusweb.it/en/photo-essays/2013/05/14/collateral_landscape_0.html';
const ottomanelliMapping = 'https://www.abitare.it/en/archive/2011/12/22/why-mapping-identity/';
const ottomanelliBigEye = 'https://www.domusweb.it/en/art/2018/07/26/assisi-the-photography-of-antonio-ottomanelli-in-dialogue-with-ghirri-and-matta-clark.html';
const ottomanelliThirdIsland = 'https://www.artribune.com/mostre-evento-arte/the-third-island-4/';

const strokinsHome = 'https://strokins.info/';
const strokinsPeople = 'https://www.lensculture.com/articles/andrejs-strokins-people-in-the-dunes';
const strokinsPalladium = 'https://strokins.info/art-projects/palladium/';
const strokinsCosmic = 'https://cphmag.com/conv-strokins/';
const strokinsFire = 'https://artviewer.org/riga-international-biennial-of-contemporary-art/';

const szwarcHome = 'https://www.ilonaszwarc.com/';
const szwarcAmerican = 'https://www.ilonaszwarc.com/projects/american-girls/';
const szwarcRodeo = 'https://www.ilonaszwarc.com/projects/rodeo-girls/';
const szwarcTriptych = 'https://www.lensculture.com/articles/ilona-szwarc-i-am-a-woman-and-i-feast-on-memory';
const szwarcUnsex = 'https://www.makeroom.la/exhibitions/8-ilona-szwarc-unsex-me-here';
const szwarcVirgin = 'https://www.ilonaszwarc.com/projects/virgin-soap/';

export const foamTalent2016DeepArtists3: Artist[] = [
  {
    id: 'antonio-ottomanelli', name: 'Antonio Ottomanelli', born: '1982', base: 'Milan / Bari, Italy',
    intro: '以建筑和城市研究训练进入摄影，把冲突地区的公共空间、监控技术、移动边界和重建过程当作一套可被重新测绘的系统。作品经常把摄影与地图、手写说明、参与式工作坊和可被观众重新组合的展览结构并置。',
    methods: ['研究型摄影', '城市测绘', '参与式工作坊', '地图', '文字档案', '公共空间研究', '策展 / 出版'],
    subjects: ['冲突与重建', '公共空间', '监控', '城市身份', '自由移动', '技术与权力'],
    outputs: ['摄影', '地图', '出版', '展览装置', '研究平台'],
    institutions: ['Foam', 'Triennale Milano', 'CAMERA Torino', 'MART / VAF Stiftung'],
    achievements: ['Foam Talent 2016', 'Lucie Foundation International Photography Awards · two honorable mentions'],
    whyImportant: '他很适合研究“摄影如何像建筑学那样分析空间”。真正重要的不是战区视觉奇观，而是他如何把检查站、监控飞艇、住房、道路和居民自己的记忆地图变成理解权力结构的工具。',
    projects: [
      { year: '2009–2014', title: 'Collateral Landscape', type: '冲突地景 / 调查 / 可重排展览', facts: ['在 Kabul、Baghdad、Sadr City、Herat、Dokan、New York 与 Gaza 等地持续记录冲突之后的城市结构，而不是追逐爆炸瞬间。', '拍摄 gated communities、议会建筑、道路、重建区等“普通”空间，并同时做现场笔记和路线观察。', '部分照片与当地向导手写的地景说明并置；展览中图像位置不是固定的，观众可以重新建立不同地理关系。'], reading: '他把战争从“事件摄影”移到空间层面：冲突如何长期改变人能去哪里、怎样经过一座城市，以及什么东西会被当成新的日常。' },
      { year: '2011–2012', title: 'Mapping Identity — Baghdad', type: '参与式地图 / 记忆 / 城市工作坊', facts: ['与 Baghdad University Fine Arts Faculty 的学生共同工作，让参与者依靠日常经验而不是官方地图重新画出城市。', '学生用不同颜色区分战前记忆与之后新增 / 改变的街区、障碍和路线。', '最终把多个局部、主观地图重新组合成一张由居民经验构成的 Baghdad。'], reading: '项目把地图从权威俯视图变成生活者的证词：一座城市不是只有坐标，还由“哪里不能走、哪里曾经是什么”构成。' },
      { year: '2012–2014', title: 'Big Eye Kabul', type: '监控 / 城市天际线 / 反向观看', facts: ['在 Kabul 持续拍摄美国军方悬浮在城市上空、装有电子传感器的 surveillance blimps。', '不去模拟它们所看到的影像，而是从地面反过来观察这些“正在观察所有人”的装置。', '把飞艇作为城市地景的一部分，研究军事监控如何从异常设施变成每天可见的基础设施。'], reading: '方法非常直接：摄影师不去“获得更多情报”，而是让监控机器本身进入公众视野。' },
      { year: '2014–2016', title: 'The Third Island', type: '集体调查 / 基础设施 / 出版与策展', facts: ['以 Calabria 的大型基础设施与地域转型为研究对象，组织多位摄影师和研究者进行摄影调查。', '把摄影、技术资料、社会研究与地方经验并入同一观察框架，而不是把摄影当成最终插图。', '项目形成展览与跨学科出版物，并作为 International Observatory of Major Works 的首个章节。'], reading: '这里 Ottomanelli 从单一作者进一步转向“如何建立研究机制”：他设计的是一套让不同作者共同读取地区变化的方法。' }
    ],
    images: [], sourceLabel: 'Domus / project sources', sourceUrl: ottomanelliCollateral,
  },
  {
    id: 'andrejs-strokins', name: 'Andrejs Strokins', born: '1984', base: 'Riga, Latvia',
    intro: '从长期纪实摄影逐渐转向手机图像、苏联时期 found archives、拼贴和混合媒介装置。他经常给自己设置非常具体的规则，再通过编辑与再语境化让“普通图像”暴露出历史、媒介和观看习惯。',
    methods: ['长期纪实', '手机摄影', 'found photography', '档案编辑', '拼贴', 'Photoshop', '混合媒介装置', '摄影书'],
    subjects: ['后苏联日常', '城市边缘', '私人影像', '媒介记忆', '历史碎片', '火与毁坏'],
    outputs: ['摄影', '摄影书', '档案项目', '拼贴', '装置'],
    institutions: ['Foam', 'ISSP', 'Riga International Biennial', 'Fotomuseum Winterthur'],
    achievements: ['Foam Talent 2016', 'Kaunas Photo Star 2013', 'LensCulture Emerging Talent 2014'],
    whyImportant: '他特别适合用来研究“方法规则如何改变摄影”：同一个作者既能做多年慢速纪实，也能规定自己只用手机、固定滤镜和 4×5 比例，或者完全不拍新照片、只编辑被遗弃的旧档案。',
    projects: [
      { year: '2011–2014+', title: 'People in the Dunes', type: '城市边缘 / 长期纪实', facts: ['长期进入 Riga 外缘的 Bolderāja 与 Daugavgrīva，记录沙丘、海岸、苏联军事遗迹、住宅区与俄语居民的日常。', '把人物、废弃 barracks、交通、海滩、维修广告和工业环境放进同一地理叙事，而不是只拍“典型居民”。', '通过多年重复进入，让地景变化与居民生活同时成为项目内容。'], reading: '它是他较传统的一条线：先建立人与地方的长期关系，再靠编辑让“边缘地带”成为复杂社会空间，而不是贫困标签。' },
      { year: '2017', title: 'Palladium', type: 'found archive / Soviet cinema / photobook', facts: ['发现并整理 Riga Palladium 电影院的一整批苏联时期内部摄影档案。', '原作者可能是影院员工，既拍官方活动，也拍后台工作、庆祝和日常。', 'Strokins 不补拍“今天的影院”，而是通过筛选、排序和书籍结构让一个匿名工作档案获得新的公共历史。'], reading: '这里作者身份从拍摄者变成编辑者：重要动作是决定什么被保留、什么相邻，以及私人工作记录怎样成为社会史。' },
      { year: '2014–2019', title: 'Cosmic Sadness', type: '手机摄影 / 固定规则 / Instagram diary', facts: ['使用 Android 的 Vignette app，自定义一套蓝色、低饱和、颗粒化滤镜。', '规定自己只拍竖幅、固定 4×5 比例，并尽量不做后期，直接把日常观察变成连续手机日记。', '作品最初在 Instagram 实时发布，把私人观看与公共流通合并为同一制作过程。'], reading: '他用“技术限制”代替复杂后期：规则越简单，注意力越集中在偶然、时机和每天怎样看东西。' },
      { year: '2015–2016', title: 'Disorders and Obstacles / Collages', type: '苏联印刷物 / 扫描 / Photoshop 拼贴', facts: ['收集被丢弃的苏联时期杂志和书籍，并把其中图像扫描成数字素材。', '在 Photoshop 中将不同年代、不同用途的印刷图像重新组合。', '把过去的宣传、教育和大众视觉材料放入当下新闻 / 媒介过载的语境中重新阅读。'], reading: '与 Palladium 相同，他关心的不是怀旧，而是“旧信息如何在新流通环境里重新变得有意义”。' },
      { year: '2018', title: 'A Boy Who Set a House on Fire', type: '消防档案 / found objects / installation', facts: ['从 Soviet Latvia 消防部门保存的火灾档案照片进入研究。', '加入被烧黑的 found objects、剪报和其他与火相关的 artefacts，而不是把档案照片单独挂墙。', '在 Riga Biennial 的旧 Bolshevichka textile factory 中把材料组织成近似“火的博物馆”的空间，并加入 artist book。'], reading: '作品把一种自然 / 技术现象拆成视觉文化史：火既是灾害、工具、象征，也是行政机构长期拍摄和分类的对象。' }
    ],
    images: [], sourceLabel: 'Andrejs Strokins · official / project sources', sourceUrl: strokinsHome,
  },
  {
    id: 'ilona-szwarc', name: 'Ilona Szwarc', born: '1984', base: 'Los Angeles, United States',
    intro: '以肖像为起点，但不断把“被摄者是谁”变成可操作的问题：look-alike dolls、doppelgängers、stage makeup、硅胶翻模、雕塑和自我表演都被用来研究女性身份、移民经验与身体如何被塑造。',
    methods: ['编排肖像', '自我表演', 'doppelgänger casting', 'stage makeup', 'silicone / plaster casting', '雕塑', '摄影书'],
    subjects: ['身份', '女性身体', '移民', '双重 / 替身', '成长', '性别表演', '观看权力'],
    outputs: ['摄影', '艺术家书', '雕塑', '装置', '表演'],
    institutions: ['Foam', 'Fotografiska', 'Diane Rosenstein Gallery', 'Fahrenheit Madrid'],
    achievements: ['Foam Talent 2016', 'Richard Benson Prize for Excellence in Photography 2015', 'Arnold Newman Prize for New Directions in Photographic Portraiture 2014', 'World Press Photo · Third Prize, Observed Portraits 2013'],
    whyImportant: '她很适合研究“肖像并不是找到一个人然后拍下来”。她会先找相似者、安排空间、改变身体表面、制作模具甚至制造第三个身体，让身份在拍摄前就被拆解和重组。',
    projects: [
      { year: '2011–2013', title: 'American Girls', type: '女孩 + look-alike doll / 环境肖像', facts: ['先在 New York 街头注意到女孩与 American Girl look-alike dolls 的重复组合，之后进入女孩家庭进行正式环境肖像。', '让女孩和可按肤色、发型等定制的“迷你替身”同时出现在画面中，观察消费品牌怎样提供一种标准化自我模型。', '主动选择 upper-middle-class 家庭环境，把玩具的价格、家庭空间与身份想象放在同一张肖像里。'], reading: '双重身体并不是视觉噱头：真正的问题是一个商品如何帮助儿童学习“像谁”“怎样成为女孩”。' },
      { year: '2013–2015', title: 'Rodeo Girls', type: '青年女性 / rodeo / 身体力量', facts: ['跟随 Texas Panhandle 与 Oklahoma 一带的女孩参加 rodeo events，并到 ranch 和偏远乡村环境中拍摄。', '把骑马、控制大型动物、训练和比赛中的身体力量与传统 American West 的男性神话放在一起。', '有意把它与 American Girls 中室内、静态、像玩偶一样的女性化姿态形成对照。'], reading: '她不是换了一个“美国女孩题材”，而是用第二个项目直接反驳第一个项目里的身体模型。' },
      { year: '2015', title: 'I am a woman and I feast on memory', type: '三部艺术家书 / 替身 / stage-makeup tutorial', facts: ['制作由三个部分组成的 artist-book triptych，并以 look-alike women 代替艺术家本人进入图像。', '把 23 幅连续肖像组织成类似 stage makeup tutorial 的过程：身份不是稳定结果，而是一连串被制作、覆盖和拆除的步骤。', '三部分包括 I am a woman and I feast on memory、I am a woman and I cast no shadow、I am a woman and I play the horror of my flesh。'], reading: '这里“自画像”已经不需要出现艺术家的脸；替身、化妆教程和出版顺序一起承担自我表演。' },
      { year: '2019', title: 'Unsex me here', type: 'doppelgänger / special effects / cinematic staging', facts: ['在 Palm Springs 的 Hollywood Regency-style house 内完成整个系列，把单一建筑当成戏剧舞台。', '继续 casting 与自己相似的女性，并使用 special-effects makeup、服装与高度控制的场景让身体进入逐步变形。', '作品借 Lady Macbeth 的“unsex me here”把 femininity、野性、恐惧和身体改变写成一个不完全说明的寓言。'], reading: '她把摄影进一步推向电影式 production：角色、布景、化妆和动作先构成世界，快门只负责截取其中阶段。' },
      { year: '2020–2021', title: 'Virgin Soap', type: 'life casting / silicone + plaster / photography + sculpture', facts: ['在电蓝色工作室场景中记录自己给模特制作 torso life-cast 的全过程。', '先用鞋带测量 / 约束胸部，再涂 Vaseline、覆盖绿色 silicone，加入 burlap / plaster 等支撑层并脱模。', '把制模步骤同时当作被摄影的 performance；完成的 torso cast 继续成为雕塑和后续照片中的“第三个身体”。'], reading: '最值得看的不是最终雕塑，而是制作关系：艺术家、模特、模具、照片之间谁在观看谁、谁在塑造谁。' }
    ],
    images: [], sourceLabel: 'Ilona Szwarc · official projects', sourceUrl: szwarcHome,
  },
];
