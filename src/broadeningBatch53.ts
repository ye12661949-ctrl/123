import type { Artist } from './data';

// Source audit: research/updates/2026-10-09-broadening53.md
export const broadeningBatch53: Artist[] = [
  {
    id: 'fabrice-monteiro', name: 'Fabrice Monteiro', born: '1972', base: 'Dakar, Senegal',
    intro: '比利时—贝宁裔摄影艺术家，成长于贝宁、现居达喀尔，曾从事职业模特，因而把时尚摄影的灯光、姿态与服装制作带入环境叙事。他与塞内加尔设计师 Doulsy 合作，以垃圾和天然材料制作受西非面具与万物有灵论启发的角色，把污染现场转化为面向未来世代的生态寓言。',
    methods: ['环境编排摄影', '时尚摄影灯光', '废弃物服装制作', '跨专业协作', '神话角色建构'],
    subjects: ['pollution in Senegal', 'forest fires', 'plastic waste', 'oil spills', 'West African masquerade', 'ecological responsibility'],
    outputs: ['编排摄影', '大型彩色照片', '服装与道具', '展览', '环境教育图像'],
    institutions: ['Prix Pictet', 'ADAGP', 'Doulsy'],
    achievements: ['Prix Pictet Fire shortlist 2021', 'The Prophecy expanded from Senegal to multiple continents'],
    whyImportant: '关注理由：Monteiro 把环境数据转化为具有西非视觉谱系的角色，而不是复制西方灾难新闻。他的跨文化构图能让污染议题进入大众传播，但也有把具体政策、企业责任和地方生态压缩成“垃圾女神”奇观的风险；合作作者与污染地点必须明确。',
    projects: [{ year: '2013–2020', title: 'The Prophecy', type: '以西非面具角色承载污染警示的编排摄影', facts: ['项目 2013 年始于塞内加尔，最初围绕森林火灾、塑料废物、石油泄漏等九类环境问题展开。', '人物借鉴西非及其他地区的面具传统与万物有灵论，从垃圾场、油污、干旱和烧焦地景中出现。', '塞内加尔设计师 Doulsy 使用垃圾与天然材料制作近似高级定制服装的造型，项目随后扩展至更多国家和大陆。'], reading: '解读：服装把现场废弃物重新集中到人体尺度，人物的正面姿态像预言者而非被动受害者。视觉转化清晰，却容易让材料的精致制作盖过污染的制度来源；地点说明和协作署名决定寓言是否仍扎根现实。' }],
    images: [], sourceLabel: 'Prix Pictet — Fabrice Monteiro: The Prophecy', sourceUrl: 'https://prix.pictet.com/cycles/fire/fabrice-monteiro'
  },
  {
    id: 'carla-rippey', name: 'Carla Rippey', born: '1950', base: 'Mexico City, Mexico',
    intro: '美国出生、长期居住墨西哥的视觉艺术家，以挪用、选择、编辑和版画工艺扩展绘画与图形艺术的边界。她从照片、明信片、家庭相册、报刊、书籍和网络建立图像档案，再以溶剂转印、蚀刻机、缝线、金属箔和烧灼边缘制作艺术家书。',
    methods: ['图像档案采集', '激光复印溶剂转印', '蚀刻机压印', '拼贴与缝线', '烧灼和金属箔干预'],
    subjects: ['fire and immolation', 'violence against women', 'political desperation', 'volcanoes', 'internet image categories', 'feminist history'],
    outputs: ['艺术家书', '版画', '绘画', '拼贴', '金属盒装置'],
    institutions: ['Prix Pictet', 'Museo de Arte Moderno Mexico', 'Brooklyn Museum', 'Hammer Museum', 'La Esmeralda', 'Academia de Artes Mexico'],
    achievements: ['Prix Pictet Fire shortlist 2021', 'La Esmeralda director 2013–2017', 'Mexican National Academy of Arts member since 2018'],
    whyImportant: '关注理由：Rippey 将搜索引擎结果、新闻暴力图像和旧印刷品拆解为可触摸的书籍结构，显示档案分类如何把女性、火与危险绑定。材料上的烧灼让主题真正进入物体，但重复使用受害图像也触及再伤害与图像消费问题，来源与观看尺度不可省略。',
    projects: [{ year: '2009–2019', title: 'Immolation', type: '围绕火、女性与暴力图像的档案艺术家书系列', facts: ['艺术家将激光复印图像以溶剂和蚀刻机转印到日本纸，并从约 2010 年起集中制作火主题艺术家书。', '系列并置火山、私刑、投掷火焰、自焚及网络搜索“women, fire”“dangerous objects”所得图像。', '书页通过拼贴、缝线和金属箔加工，书口被烧灼；部分作品装入金属盒，使火同时成为图像、制作动作与物体痕迹。'], reading: '解读：焦黑书口把火从再现变为材料事件，页面编排则暴露搜索词如何制造性别化暴力档案。作品最强之处是分类与物质处理相互支撑；风险在于强烈新闻图像被形式化后，个体事件可能沦为抽象符号。' }],
    images: [], sourceLabel: 'Prix Pictet — Carla Rippey: Immolation', sourceUrl: 'https://prix.pictet.com/cycles/fire/carla-rippey'
  },
  {
    id: 'brent-stirton', name: 'Brent Stirton', born: 'Durban, South Africa', base: 'United States',
    intro: '南非纪实摄影师、Getty Images 特约记者与《国家地理》长期撰稿人，工作集中在人与环境、公共卫生和人权交叉处。他以长期跟拍和医疗过程摄影记录印度贫困烧伤患者从家庭、交通到手术和恢复的路径，把日常燃料风险、性别压力与医疗不平等连接起来。',
    methods: ['长期纪实摄影', '公共卫生调查', '医疗过程跟拍', '个案回访', '机构与家庭双线叙事'],
    subjects: ['burn injuries in India', 'kerosene poverty', 'girls and women', 'medical access', 'reconstructive surgery', 'environment and public health'],
    outputs: ['纪实摄影', '杂志报道', '医疗影像叙事', '展览', '新闻图片'],
    institutions: ['Prix Pictet', 'Getty Images', 'National Geographic', 'Human Rights Watch', 'World Press Photo', 'United Nations'],
    achievements: ['Prix Pictet Fire shortlist 2021', 'multiple World Press Photo awards', 'Overseas Press Club and National Magazine Awards recognition'],
    whyImportant: '关注理由：Stirton 把“火灾”从壮观事件转为能源贫困、住房材料、性别制度和医疗费用组成的慢性系统。他对患者治疗前后持续回访，使照片超出单次苦难图像；但烧伤身体极易被视觉消费，人物同意、姓名与医疗过程必须优先于冲击力。',
    projects: [{ year: '2013', title: 'Burns Capital Of The World', type: '印度贫困烧伤患者与免费重建手术的长期纪实', facts: ['系列拍摄印度乡村石蜡灯、燃气事故造成的烧伤风险，以及当地烧伤医疗资源短缺。', '艺术家跟随 Ragini Kumari 与家人乘火车前往瓦拉纳西，并记录 Subodh Singh 医生为贫困患者提供免费重建手术。', '他在两年内三次拍摄 Kumkum Chowdhary，从 12 岁到 14 岁记录多层手术、身体活动与未来生活压力。'], reading: '解读：家庭、旅途、候诊、手术和屋顶肖像构成一条医疗时间线，避免把患者固定在受伤瞬间。摄影仍处在不对等观看关系中；只有长期回访和具体人物叙事能抵抗“创伤奇观”。' }],
    images: [], sourceLabel: 'Prix Pictet — Brent Stirton: Burns Capital Of The World', sourceUrl: 'https://prix.pictet.com/cycles/fire/brent-stirton'
  },
  {
    id: 'david-uzochukwu', name: 'David Uzochukwu', born: '1998', base: 'Germany / Belgium',
    intro: '奥地利—尼日利亚裔艺术家，从十三岁开始自拍并发展出以数字合成、编排肖像和幻想叙事为核心的实践。他把黑人身体、烟尘、火焰与地景无缝融合，借后灾难世界追问“自然／文明”和“完整／受伤”等二元划分如何参与黑人身份的建构。',
    methods: ['数字合成摄影', '编排自画像', '幻想角色塑造', '地景与身体融合', '后期去地域化'],
    subjects: ['Blackness', 'destruction and rebirth', 'nature-culture divide', 'vulnerability', 'belonging', 'post-apocalyptic fantasy'],
    outputs: ['数字摄影', '自画像', '短片', '电影装置', '时尚合作'],
    institutions: ['Prix Pictet', 'Bozar', 'Rencontres d’Arles', 'ICP', 'Photo Vogue Festival', 'CPH:DOX'],
    achievements: ['Prix Pictet Fire shortlist 2021', 'ICP Infinity Award nomination 2019', 'British Journal of Photography One to Watch 2020'],
    whyImportant: '关注理由：Uzochukwu 将数字后期明确用作世界建构，而非隐藏式修饰，让身体与环境互相渗透成为关于黑人身份和脆弱性的视觉论证。华丽效果可能落入时尚化科幻美学，但烟尘、皮肤和去地域化空间之间的具体连接，使概念确实进入图像结构。',
    projects: [{ year: '2015–2020', title: 'In The Wake', type: '黑人身体与灾后地景融合的数字编排肖像', facts: ['项目从自画像出发，通过数字后期去除明确历史和地理标记，构造火灾之后的幻想空间。', '人物身体被烟尘、火焰、岩石和天空包围或穿透，用视觉合成取消身体内外与人类环境的清晰边界。', '作品讨论“未经文化触碰的自然”这一概念如何协助制造他者与黑人性，并同时保留受伤和完整两种状态。'], reading: '解读：合成并非附加特效，而是让皮肤、烟和地景在像素层面连续，从而把相互依存变成可见形式。若人物只剩精致超现实形象，政治问题会被弱化；系列依赖重复的身体—环境变形维持其论证。' }],
    images: [], sourceLabel: 'Prix Pictet — David Uzochukwu: In The Wake', sourceUrl: 'https://prix.pictet.com/cycles/fire/david-uzochukwu'
  },
  {
    id: 'mark-ruwedel', name: 'Mark Ruwedel', born: '1954', base: 'Long Beach, California, USA',
    intro: '美国地景摄影师，以长期、类型学式观察研究自然史和社会史如何共同写入土地。他把洛杉矶视为大型城市—荒野交界面，持续拍摄河流、滑坡、峡谷、沙漠边缘及野火痕迹，强调土地与环境力量并非城市背景，而是主动塑造城市历史的因素。',
    methods: ['长期地景摄影', '地点类型学', '灾后痕迹观察', '自然史与社会史并读', '摄影书序列'],
    subjects: ['Los Angeles wildland-urban interface', 'wildfires', 'climate change', 'fire suppression', 'urban ecology', 'landscape memory'],
    outputs: ['黑白地景摄影', '双联画', '摄影书', '档案', '展览'],
    institutions: ['Prix Pictet', 'Tate Modern', 'J. Paul Getty Museum', 'Metropolitan Museum of Art', 'National Gallery of Canada', 'Stanford Libraries'],
    achievements: ['Prix Pictet Fire shortlist 2021', 'Guggenheim Fellowship 2014', 'Scotiabank Photography Award 2014'],
    whyImportant: '关注理由：Ruwedel 把洛杉矶野火放进百年城市扩张、火灾压制政策与气候变化共同生成的地景，而不追逐燃烧高潮。其克制图像能显露慢变量，却也可能把政治经济关系隐藏在优雅空景中；系列结构和地点历史承担关键解释责任。',
    projects: [{ year: '2017–2020', title: 'LA Fires', type: '洛杉矶城市—荒野交界野火痕迹的长期地景摄影', facts: ['系列来自四部分长期项目 Los Angeles: Landscapes of Four Ecologies，覆盖河流、西部滑坡带、山丘峡谷和东部沙漠边缘。', '艺术家拍摄 La Tuna Canyon、Tujunga、Sepulveda、Verdugo Mountains 等火灾地点及烧毁树木、山坡和建筑痕迹。', '项目把火灾频率和强度上升与气候变化、长期压制自然火以及人为疏忽共同联系。'], reading: '解读：焦树、空地与成对画面压低新闻戏剧性，让“已经发生过”与“还会再发生”同时存在。空无地景具有预言性，但若没有火灾名称、年份和城市生态结构，照片也可能退回普遍的荒凉美学。' }],
    images: [], sourceLabel: 'Prix Pictet — Mark Ruwedel: LA Fires', sourceUrl: 'https://prix.pictet.com/cycles/fire/mark-ruwedel'
  },
  {
    id: 'mak-remissa', name: 'Mak Remissa', born: '1970', base: 'Phnom Penh, Cambodia',
    intro: '柬埔寨摄影师与新闻摄影记者，童年亲历红色高棉占领金边及强制撤城，家庭成员因杀戮、饥饿、过劳与酷刑死亡。他以编排场景、家族口述和象征性道具重建 1975 年 4 月的记忆，在幸存者不愿回忆与下一代需要历史之间建立视觉纪念。',
    methods: ['童年记忆重建', '编排式历史摄影', '家族口述整合', '象征性道具使用', '个人证言与国家史并置'],
    subjects: ['Khmer Rouge', 'evacuation of Phnom Penh', 'genocide memory', 'family loss', 'forced displacement', 'intergenerational transmission'],
    outputs: ['编排摄影', '新闻摄影', '纪念性组照', '展览', '收藏级照片'],
    institutions: ['Prix Pictet', 'European Pressphoto Agency', 'Musée de l’Elysée', 'Musée Guimet', 'National Gallery of Victoria', 'Singapore Art Museum'],
    achievements: ['Prix Pictet Fire shortlist 2021', 'Left 3 Days in NGV and Musée Guimet collections', 'National Photojournalism competition awards 1997'],
    whyImportant: '关注理由：Remissa 不假装拥有 1975 年撤城的现场影像，而以明确重建承认记忆断裂，使个人童年、家族死亡和国家暴力共同进入画面。象征化能帮助传播，也可能把复杂历史简化为舞台符号；作品的第一人称文字与具体日期因此不可替代。',
    projects: [{ year: '2014', title: 'Left 3 Days', type: '红色高棉强制撤离金边的童年记忆重建', facts: ['项目回忆 1975 年 4 月 17 日红色高棉占领金边，并以“只离开三天”的命令作为标题。', '画面重建病人离开医院、家人搬运行李、吊床和人力车运送、货币散落及道路上不准停歇等记忆。', '作品献给艺术家的父亲、祖父、三位叔叔及所有遇难者，并被 NGV、Musée de l’Elysée 与 Musée Guimet 收藏。'], reading: '解读：道具、动作和简化背景让记忆像舞台片段逐幕出现，主动区别于未经反思的伪纪实。重建的伦理力量来自第一人称证言；若只保留戏剧造型而抽去日期、路线和亲属关系，图像会失去历史锚点。' }],
    images: [], sourceLabel: 'Prix Pictet — Mak Remissa: Left 3 Days', sourceUrl: 'https://prix.pictet.com/cycles/fire/mak-remissa'
  }
];
