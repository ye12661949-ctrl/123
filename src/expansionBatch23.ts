import type { Artist } from './data';
import type { ArtistArchive, ArchiveProject } from './archiveData';

type ArtistRecord = Omit<Artist, 'projects' | 'images' | 'sourceUrl' | 'sourceLabel'> & {
  projects: ArchiveProject[];
};

const records: ArtistRecord[] = [
  {
    id: 'lisa-oppenheim',
    name: 'Lisa Oppenheim',
    born: '1975',
    base: 'New York',
    intro: '从摄影史档案与已失落的图像线索出发，把暗房、染料转印、纺织和生成式 AI 作为重新制造历史图像的不同工具。',
    methods: ['档案研究', '染料转印', '暗房实验', '生成式 AI', '摄影史重演', '纺织'],
    subjects: ['摄影史', '植物', '复制', '技术史', '档案缺失', '图像再生产'],
    outputs: ['摄影', '染料转印', '纺织', '展览装置', '出版'],
    institutions: ['MoMA', 'Mudam Luxembourg', 'Les Rencontres d’Arles'],
    achievements: ['New Photography · MoMA 2013', 'Monsieur Steichen · Les Rencontres d’Arles 2026'],
    whyImportant: '她不是简单把 AI 当作新工具，而是把 AI 放进摄影史已有的复制技术旁边：档案照片、暗房、染料转印和算法生成都在回答同一个问题——缺失的图像怎样被重新制造。',
    projects: [
      {
        title: 'Monsieur Steichen',
        period: '2024–2026',
        cluster: '摄影史档案 / 染料转印 / AI / 纺织',
        summary: '围绕 Edward Steichen 较少被讨论的园艺与摄影实践展开。艺术家利用已灭绝鸢尾花的亲本图像，通过 AI 生成假设性的杂交花，再以染料转印等方式把这种“推测图像”重新变成物质摄影。',
        actions: ['研究 Steichen 的植物、摄影与纺织档案', '收集已灭绝鸢尾花及其亲本的历史图像', '用 AI 组合亲本图像生成假设性花朵', '把生成结果转成染料转印摄影', '与 Zoe Latta 合作把 Steichen 图像转译为纺织图案'],
        sourceUrl: 'https://www.rencontres-arles.com/en/expositions/2026/lisa-oppenheim',
        images: [],
        relations: [{ kind: '展览', label: 'Monsieur Steichen — Les Rencontres d’Arles', detail: '2026' }]
      }
    ]
  },
  {
    id: 'ayana-v-jackson',
    name: 'Ayana V. Jackson',
    born: '1977',
    base: 'New York / Johannesburg',
    intro: '通过自我表演、摄影棚肖像和档案研究进入殖民时期的视觉类型，让自己的身体占据历史影像里长期被排除、扭曲或匿名化的位置。',
    methods: ['自我表演', '档案研究', '编排式摄影', '服装', '历史重演', '肖像'],
    subjects: ['殖民视觉史', '黑人女性', '离散', '权力', '休息', '身体'],
    outputs: ['摄影', '影像', '展览装置'],
    institutions: ['MFA Boston', 'Studio Museum in Harlem', 'Smithsonian National Museum of African Art', 'Les Rencontres d’Arles'],
    achievements: ['The Good News Is Delivered Not on Mountaintops but in Clearings · Les Rencontres d’Arles 2026'],
    whyImportant: '她和普通“历史人物 cosplay”不同：先研究殖民摄影、骑马肖像和档案中的缺席，再通过服装、姿势、背景与自身身体逐项改写原来的权力结构。',
    projects: [
      {
        title: 'You Forgot to See Me Coming',
        period: '2020s',
        cluster: '骑马肖像 / 档案缺席 / 自我表演',
        summary: '借骑马肖像这一长期与权力相连的视觉类型，重新进入 Mary Fields、Amelio Robles、Adelitas 与 Selika Lazevski 等人物所代表的历史。',
        actions: ['研究历史人物与现存档案碎片', '重构骑马肖像的服装和身体姿态', '由艺术家本人进入镜头', '把多个历史身份组织成连续肖像群'],
        sourceUrl: 'https://www.rencontres-arles.com/en/expositions/2026/ayana-v-jackson',
        images: [],
        relations: [{ kind: '展览', label: 'Les Rencontres d’Arles', detail: '2026' }]
      },
      {
        title: 'Intimate Justice in the Stolen Moment',
        period: '2020s',
        cluster: '休息 / 黑人女性 / 被遗漏的私人时刻',
        summary: '构造黑人女性独处、休息、沉思与失重的场景，把历史档案中常被忽略的非劳动、非展示性身体状态置于中心。',
        actions: ['从档案缺席而不是单张原图出发', '搭建服装与场景', '自我表演', '以安静和休息姿态替代殖民影像中的劳动或被观看姿态'],
        sourceUrl: 'https://www.rencontres-arles.com/en/expositions/2026/ayana-v-jackson',
        images: [],
        relations: []
      }
    ]
  },
  {
    id: 'sammy-baloji',
    name: 'Sammy Baloji',
    born: '1978',
    base: 'Lubumbashi, DRC',
    intro: '把殖民档案、家族史、矿业基础设施、城市空间与当代摄影叠在一起，持续追踪刚果加丹加地区的资源开采如何塑造图像与地景。',
    methods: ['档案研究', '摄影', '蒙太奇', '田野调查', '家族档案', '空间研究'],
    subjects: ['殖民', '采掘', '矿业', '家族史', '城市', '边界'],
    outputs: ['摄影', '影像', '装置', '出版'],
    institutions: ['Les Rencontres d’Arles', 'Twenty Nine Studio'],
    achievements: ['Landscape Lens: A Katangese Crossing · Les Rencontres d’Arles 2026'],
    whyImportant: '他的档案使用不是把旧照片当背景素材，而是让殖民者拍摄的图像、当地人的私人档案、家族记忆与今天的地景互相冲突，从而看见同一地点被不同权力系统怎样描述。',
    projects: [
      {
        title: 'Landscape Lens: A Katangese Crossing',
        period: '2017–2026',
        cluster: 'Katanga / 家族史 / 殖民档案 / 地景',
        summary: '以 2017 年与 Filip De Boeck 重走加丹加的旅程为入口，把 Hotel Impala、家族史、加丹加分离时期、欧洲媒体档案和今天的地景重新并置。',
        actions: ['重走与加丹加历史有关的路线', '追踪艺术家家族与 Hotel Impala 的关系', '搜集家族和欧洲媒体档案', '拍摄当代地点与基础设施', '把历史图像、当地声音与新摄影并置'],
        sourceUrl: 'https://www.rencontres-arles.com/en/expositions/2026/sammy-baloji',
        images: [],
        relations: [{ kind: '展览', label: 'Landscape Lens: A Katangese Crossing — Les Rencontres d’Arles', detail: '2026' }]
      }
    ]
  },
  {
    id: 'jordan-beal',
    name: 'Jordan Beal',
    born: '1991',
    base: 'Martinique',
    intro: '一边直接腐蚀、浸泡、切割摄影底片，一边研究 AI 如何重复热带天堂、殖民历史与异域想象，使“图像材料被侵蚀”和“历史表象被侵蚀”互相对应。',
    methods: ['底片腐蚀', '化学处理', '埋藏', '双重曝光', '直接切割', '生成式 AI'],
    subjects: ['马提尼克', '殖民', '热带想象', '岛屿', '土地', '图像偏见'],
    outputs: ['摄影', '实验底片', '影像', '声音', '展览装置'],
    institutions: ['Les Rencontres d’Arles', 'Hangar'],
    achievements: ['Discovery Award selection · Les Rencontres d’Arles 2026'],
    whyImportant: '他把两个很容易被分开的方向放到一起：摄影材料本身可以被海水、化学物和土地改变；生成模型中的“热带”同样被历史数据改变。两者都把图像看成被环境和权力加工过的表面。',
    projects: [
      {
        title: 'Corrosion',
        period: '2025',
        cluster: '底片 / 腐蚀 / 岛屿材料',
        summary: '通过浸泡、化学反应与对底片的直接干预，让摄影负片在成像之后继续发生物理变化。',
        actions: ['对摄影负片进行浸泡或化学处理', '让腐蚀留下不可完全控制的表面变化', '结合双重曝光、埋藏或切割等直接干预', '把受损负片转成最终图像与空间呈现'],
        sourceUrl: 'https://www.rubismecenat.fr/en/p/programmes/create-support/grant-to-support-french-caribbean-and-amazonian-contemporary-creation/',
        images: [],
        relations: [{ kind: '展览', label: 'Corrosion — Hangar', detail: '2025' }]
      },
      {
        title: 'Lineaments',
        period: '2024–2026',
        cluster: 'AI / 殖民视觉代码 / 马提尼克',
        summary: '把生成式 AI 与摄影放在同一研究中，追踪“热带天堂”、殖民历史与废奴等题材怎样被继承下来的视觉范式重新编码。',
        actions: ['研究殖民时期与当代热带视觉类型', '使用 AI 生成历史与岛屿相关图像', '比较生成结果与既有摄影图像', '把算法的提取逻辑与殖民资源提取并置'],
        sourceUrl: 'https://www.rencontres-arles.com/en/expositions/2026/jordan-beal',
        images: [],
        relations: [{ kind: '展览', label: 'Discovery Award — Les Rencontres d’Arles', detail: '2026' }]
      }
    ]
  },
  {
    id: 'katia-kameli',
    name: 'Katia Kameli',
    born: '1973',
    base: 'France / Algeria',
    intro: '长期从阿尔及利亚影像、明信片、电影、新闻照片和流行物件中重新组织国家历史，让档案不再是固定证据，而成为可以被不同声音重新讲述的材料。',
    methods: ['档案研究', '影像论文', '再摄影', '访谈', '重演', '蒙太奇'],
    subjects: ['阿尔及利亚', '殖民', '国家叙事', '记忆', '图像传播', '口述史'],
    outputs: ['影像', '摄影', '装置', '出版'],
    institutions: ['Les Rencontres d’Arles'],
    achievements: ['The Algerian Novel (A New Chapter) · Les Rencontres d’Arles 2026'],
    whyImportant: '她把档案研究从“找到一张旧照片”推进到“旧照片曾怎样被观看、出售、转述和记忆”。因此同一图像会在明信片摊、电影、新闻与口述中拥有不同生命。',
    projects: [
      {
        title: 'The Algerian Novel / Le Roman algérien',
        period: '2016–',
        cluster: '阿尔及利亚 / 图像档案 / 多声部影像论文',
        summary: '持续研究阿尔及利亚公共记忆中的图像流通，把明信片、新闻照片、电影、艺术品和大众物件放进多章节结构，由不同人物重新观看和讲述。',
        actions: ['从明信片、新闻照片、电影与大众物件中建立图像档案', '在阿尔及尔的图像摊等公共场景中观察图像流通', '邀请不同讲述者阅读同一历史材料', '通过拍摄、重演和蒙太奇形成多章节影像'],
        sourceUrl: 'https://www.rencontres-arles.com/en/expositions/2026/katia-kameli-1',
        images: [],
        relations: [{ kind: '展览', label: 'The Algerian Novel (A New Chapter) — Les Rencontres d’Arles', detail: '2026' }]
      }
    ]
  },
  {
    id: 'aman-alam',
    name: 'Aman Alam',
    born: '—',
    base: 'India / international',
    intro: '把家庭档案、雕塑、摄影与 AI 放在一起研究记忆如何被损耗、补写和误认，让私人图像与认知研究在同一项目中相互校正。',
    methods: ['家庭档案', '摄影', 'AI', '雕塑', '研究型艺术', '图像重构'],
    subjects: ['记忆', '遗忘', '身份', '家庭', '认知', '时间'],
    outputs: ['摄影', '雕塑', '影像', '装置'],
    institutions: ['Les Rencontres d’Arles'],
    achievements: ['Serendipity × Les Rencontres d’Arles Grant · 2025'],
    whyImportant: '这个项目很适合网站里的“记忆并不等于档案”脉络：家庭照片看似是证据，但当记忆衰退、描述改变或算法介入后，照片和人的回忆之间会不断出现缝隙。',
    projects: [
      {
        title: 'Ozymandias',
        period: '2020–',
        cluster: '家庭档案 / 记忆损耗 / AI / 雕塑',
        summary: '长期研究身份与记忆在时间中的侵蚀，以家庭档案为重要材料，并让摄影、雕塑与 AI 参与对缺失记忆的重构。',
        actions: ['整理私人和家庭影像', '研究记忆、遗忘与认知变化', '把档案图像转译到摄影与雕塑', '使用 AI 测试图像补写和记忆重构', '在艺术与科学研究之间建立对应关系'],
        sourceUrl: 'https://www.rencontres-arles.com/en/agenda/2026/aman-alam',
        images: [],
        relations: [{ kind: '奖项', label: 'Serendipity × Les Rencontres d’Arles Grant', detail: '2025' }, { kind: '展览', label: 'Les Rencontres d’Arles', detail: '2026' }]
      }
    ]
  },
  {
    id: 'farah-al-qasimi',
    name: 'Farah Al Qasimi',
    born: '1991',
    base: 'Brooklyn / Dubai',
    intro: '把海湾地区与阿拉伯离散社群的家庭空间、消费表面、女性身体和流行视觉拍成介于纪实、时尚与虚构之间的高密度图像，同时持续扩展到影像。',
    methods: ['彩色摄影', '编排式摄影', '观察摄影', '影像', '时尚视觉语法', '虚构叙事'],
    subjects: ['海湾地区', '阿拉伯离散', '消费', '女性空间', '家庭', '身份'],
    outputs: ['摄影', '影像', '公共艺术', '展览'],
    institutions: ['Guggenheim', 'MoMA', 'Tate', 'Whitney Museum'],
    achievements: ['TAILSPIN · Whitney Museum 2027（已公布）'],
    whyImportant: '她能补足网站里“高度漂亮的商业式视觉并不等于商业摄影”这一支：闪光、装饰、商品和艳丽色彩同时可以承担家庭结构、迁移和消费文化的社会信息。',
    projects: [
      {
        title: 'TAILSPIN',
        period: '2026–2027',
        cluster: '影像 / 石油与汽车文化 / 阿拉伯迁移 / 虚构纪录',
        summary: '在密歇根、西德州和美国东海岸等地拍摄，把石油与汽车文化、阿拉伯移民经验、口述材料和精灵视角的虚构叙事编进同一影像。',
        actions: ['跨地区拍摄与田野访问', '记录石油和汽车相关地景与文化', '收集迁移与家族叙事', '把纪录材料与虚构视角结合', '以影像装置组织多地材料'],
        sourceUrl: 'https://whitney.org/exhibitions/farah-al-qasimi',
        images: [],
        relations: [{ kind: '展览', label: 'TAILSPIN — Whitney Museum', detail: 'opens January 2027' }]
      }
    ]
  },
  {
    id: 'akinbode-akinbiyi',
    name: 'Akinbode Akinbiyi',
    born: '1946',
    base: 'Berlin / Lagos',
    intro: '以长期步行和黑白胶片反复返回城市街道、海滩与公共空间；拍摄不是寻找决定性瞬间，而是让身体在漫游中逐渐学习一个地方。',
    methods: ['步行', '黑白胶片', '街头摄影', '长期回访', '接触印样', '暗房'],
    subjects: ['城市', '公共空间', '社会变化', '海岸', '殖民遗产', '日常生活'],
    outputs: ['银盐摄影', '摄影书', '展览'],
    institutions: ['MoMA', 'Berlinische Galerie'],
    achievements: ['New Photography · MoMA 2023', 'Hannah-Höch-Preis · 2024'],
    whyImportant: '他提醒网站里“方法”不一定是复杂材料：持续数十年的步行、返回、观察和手工处理本身就可以形成非常严格的创作系统。',
    projects: [
      {
        title: 'Sea Never Dry',
        period: '1982–',
        cluster: 'Lagos / Bar Beach / 漫游 / 黑白胶片',
        summary: '从 1982 年开始长期拍摄拉各斯 Bar Beach 及周边公共生活；随着海岸、城市和社会结构改变，同一地点在几十年中不断变成新的摄影对象。',
        actions: ['长期步行经过 Bar Beach 与城市公共空间', '使用黑白模拟胶片拍摄', '手工冲洗、剪切并制作接触印样', '通过多年返回观察地点结构的变化', '以序列而不是单张决定性瞬间组织作品'],
        sourceUrl: 'https://www.moma.org/audio/4412',
        images: [],
        relations: [{ kind: '展览', label: 'New Photography — MoMA', detail: '2023' }]
      }
    ]
  }
];

export const artistBatch23: Artist[] = records.map(record => ({
  ...record,
  projects: record.projects.map(project => ({
    year: project.period,
    title: project.title,
    type: project.cluster,
    facts: project.actions,
    reading: project.summary,
  })),
  images: record.projects.flatMap(project => project.images),
  sourceUrl: record.projects[0].sourceUrl,
  sourceLabel: '艺术家 / 机构资料',
}));

export const archiveBatch23: Record<string, ArtistArchive> = Object.fromEntries(
  records.map(record => {
    const imagedProjects = record.projects.filter(project => project.images.length > 0).length;
    return [record.id, {
      artistId: record.id,
      projectCoverage: `${record.projects.length} 个精选项目 / 作品群已索引`,
      imageCoverage: `${imagedProjects} / ${record.projects.length} 项目配图`,
      note: '以可核查项目为单位记录制作动作、材料、时间与机构节点；当前为研究型精选档案，不把未核实作品补成“全集”。',
      projects: record.projects,
      awards: record.achievements.filter(item => /Award|Grant|Preis|奖/.test(item)),
      exhibitions: record.achievements.filter(item => !/Award|Grant|Preis|奖/.test(item)),
      sources: record.projects.map(project => ({ label: project.title, url: project.sourceUrl })),
    }];
  })
);

export const archiveExtensions23: Record<string, ArchiveProject[]> = {
  'meghann-riepenhoff': [
    {
      title: 'Upwelling',
      period: '2020–2026',
      cluster: '无相机蓝晒 / 地景直接接触 / 持续变化',
      summary: '把大型蓝晒材料直接带入雨、海浪、冰、风、沉积物与地形之中，让环境直接在感光表面留下痕迹；作品并不被完全化学固定，因此展出之后仍会缓慢响应周围条件。',
      actions: ['准备大型蓝晒感光材料', '让雨、波浪、冰、风或沉积物直接接触表面', '以地景本身的运动形成图像', '不把所有作品完全化学固定', '在展览中保留材料继续变化的可能'],
      sourceUrl: 'https://www.hainesgallery.com/news/268-meghann-riepenhoff-solo-exhibition-upwelling-rencontres-darles-arles-france-july-6/',
      images: [],
      relations: [{ kind: '展览', label: 'Upwelling — Les Rencontres d’Arles', detail: '2026' }]
    }
  ]
};
