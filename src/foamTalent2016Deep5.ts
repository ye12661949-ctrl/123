import type { Artist } from './data';

const samHome = 'https://samcontis.com/information';
const samRecent = 'https://samcontis.com/recent-work';
const samDeep = 'https://www.mackbooks.us/products/deep-springs-br-sam-contis';
const samDay = 'https://www.mackbooks.us/products/day-sleeper-dorothea-lange-sam-contis-ed';
const samOverpass = 'https://store.aperture.org/products/sam-contis-overpass';
const samFca = 'https://www.foundationforcontemporaryarts.org/recipients/sam-contis/';
const samPhases = 'https://www.wissenschaftskolleg.berlin/en/fellows/academic-year/2026/contis-sam';

const degiorgisHome = 'https://www.nicolodegiorgis.com/';
const degiorgisCv = 'https://www.nicolodegiorgis.com/cv/';
const degiorgisAbout = 'https://www.nicolodegiorgis.com/about/';
const degiorgisHidden = 'https://artsandculture.google.com/asset/hidden-islam-islamic-makeshift-places-of-worship-in-north-east-italy/6gGYbmuhy6ROkw';
const degiorgisPrison = 'https://www.nicolodegiorgis.com/prison-museum/';

const goldbergGallery = 'https://buergallery.no/artists/katinka-goldberg/';
const goldbergSurfacing = 'https://journal-photobooks.com/products/katinka-goldberg-surfacing';
const goldbergBristningar = 'https://www.kongsbergkunst.no/utstilling/katinka-goldberg';
const goldbergShtumer = 'https://trondheimkunstmuseum.no/en/katinka-goldberg-shtumer-alef';
const goldbergNjp = 'https://njp.no/2017/katinka-goldberg-2/';

export const foamTalent2016DeepArtists5: Artist[] = [
  {
    id: 'sam-contis',
    name: 'Sam Contis',
    born: '1982',
    base: 'New York',
    intro: '以摄影、moving image、声音、表演与书籍研究身体怎样在地景、制度和历史图像中被塑造。她常把自己拍摄的照片与档案图像、长期协作和现场表演放在一起，让“谁在移动、谁能通过、谁定义身体”成为作品结构。',
    methods: ['长期摄影', '档案编辑', 'moving image', '声音', '表演协作', '摄影书编辑'],
    subjects: ['身体与运动', '性别', '美国西部神话', '地景边界', '声音与呼吸', '档案再观看'],
    outputs: ['摄影', 'moving image', '声音 / 表演', '摄影书', '装置'],
    institutions: ['MoMA', 'Art Gallery of Western Australia', 'BAMPFA', 'Carré d’Art', 'Foam'],
    achievements: ['Foam Talent 2016', 'Nancy Graves Grant for Visual Artists 2016', 'Aaron Siskind Foundation Fellowship 2016', 'Guggenheim Fellowship 2022', 'Foundation for Contemporary Arts Grants to Artists Award 2024'],
    whyImportant: '她特别适合研究“摄影如何通过编辑和身体动作重写既有神话”。Deep Springs 不只拍男性学校，Day Sleeper 甚至不拍新照片，而是通过重新编辑 Lange 档案；Overpass 与 Phases 又把步行、奔跑和时间本身变成作品方法。',
    projects: [
      {
        year: '2013–2018',
        title: 'Deep Springs',
        type: '美国西部 / 男性制度 / 新摄影 + 历史档案',
        facts: [
          '长期进入 Sierra Nevada 以东荒漠谷地中的 Deep Springs College，一所 1917 年创办的男子文理学院。',
          '拍摄青年身体、劳动、动物、岩石、衣物和地景，让身体与西部地貌在形式上互相呼应。',
          '把自己拍摄的新照片与学院最早学生在约一百年前留下的照片共同编辑。',
          '通过摄影书顺序重新组织“牛仔、西部、男性气质”这些早已被电影与摄影史固定的视觉代码。'
        ],
        reading: '重点不是记录一所学校，而是把一个真实制度当成舞台，测试美国西部神话和男性身份是怎样被图像不断重演的。'
      },
      {
        year: '2020',
        title: 'Day Sleeper',
        type: 'Dorothea Lange 档案 / 选图 / 重新编辑',
        facts: [
          '进入 Dorothea Lange 的大型档案，不以“代表作全集”方式选图，而寻找家庭、工作室肖像、San Francisco 与 East Bay 街头等较少被看见的材料。',
          '从既有照片中建立“day sleeper”这一新的观看线索，把休息、遗忘、身体姿态和日常细节重新串联。',
          '不通过新增摄影解释 Lange，而用选图、相邻关系和书籍节奏让一位历史摄影师出现陌生的一面。',
          '项目以 MACK 摄影书出版，并进入 MoMA 的 Dorothea Lange: Words & Pictures 展览语境。'
        ],
        reading: '这是很典型的“编辑本身就是作者行为”：材料属于 Lange，但新的结构、节奏和意义来自 Contis 的观看。'
      },
      {
        year: '2020–2022',
        title: 'Overpass',
        type: '英国乡野 / 步行 / stile / 边界',
        facts: [
          '沿英国乡村持续步行在延续数百年的公共 footpaths 上。',
          '反复拍摄 stile——跨越墙、篱笆和私人土地边界的小型通行结构，而不是追求传统壮阔风景。',
          '把“经过地景”的身体动作与土地所有权、公共通行权和生态边界联系起来。',
          '最终以 Aperture 书籍把结构物、植物、路径和身体通过版面顺序重新组织。'
        ],
        reading: '她把一个很小的物件变成规则入口：只要持续追踪“人怎样越过边界”，地景摄影就会从风景转成政治空间。'
      },
      {
        year: '2016–2022',
        title: 'Duet',
        type: '长期协作 / 声音 / 摄影 / live performance',
        facts: [
          '与 vocalist Inbal Hever 持续约六年合作，从近距离观察发声时面部、颈部和呼吸的微小运动开始。',
          '通过摄影与 video 把“声音”转成可以看见的肌肉、皮肤、气息和动作。',
          '2022 年展览同时使用照片、录音与 Hever 的现场演出，使表演不是开幕活动而成为作品本身。',
          '演出采用 Chaya Czernowin 的 Adiantum Capillus-Veneris，在没有现场演出的时段继续以录音填满空间。'
        ],
        reading: '项目把肖像从“脸长什么样”推进到“身体怎样产生声音”；摄影、录音和表演承担的是同一个研究问题。'
      },
      {
        year: '2018–2026',
        title: 'Cross Country / Phases',
        type: '跑步 / 时间测量 / 三通道电影 + 黑白肖像',
        facts: [
          '持续多年拍摄年轻越野跑者，尤其关注接近或越过终点线时脸部和身体进入极限状态的瞬间。',
          '黑白肖像跨越约五年累积，不把运动员处理成体育英雄，而观察身体如何在时间与疲劳中改变。',
          'Phases 的三通道影片让三位年轻女性分别在早晨、中午和傍晚跑同一段 5 公里乡野路线。',
          '每位跑者占据独立画面，每次跑完全由一个不间断镜头完成，让“距离本身”成为计时工具。'
        ],
        reading: '从快门的一瞬到五公里的完整时长，她把摄影 / 电影最基本的能力——测量时间——直接变成项目结构。'
      }
    ],
    images: [],
    sourceLabel: 'Sam Contis · official / MACK / Aperture',
    sourceUrl: samHome,
  },
  {
    id: 'nicolo-degiorgis',
    name: 'Nicoló Degiorgis',
    born: '1985',
    base: 'Schio, Italy',
    intro: '把社会地理、权力结构和摄影书设计连接起来。他经常先建立非常明确的分类或路线规则，再通过折页、正负片、色彩顺序、共同作者和空间装置，让“一个地方从外部看起来如何”与“内部真实如何运作”发生视觉短路。',
    methods: ['社会地理调查', '建筑类型学', '摄影书设计', '档案再编辑', '正负片转换', '共同创作'],
    subjects: ['宗教可见性', '迁移', '边界', '监狱制度', '欧洲身份', '阿尔卑斯与地方认同'],
    outputs: ['摄影', '摄影书', '视频', '拼贴', '装置', '共同作者作品'],
    institutions: ['Foam', 'Museion', 'Fondazione Sandretto Re Rebaudengo', 'MAXXI'],
    achievements: ['Paris Photo–Aperture First PhotoBook Award 2014', 'German Photobook Award · Gold 2014', 'Rencontres d’Arles · Author Book of the Year 2014', 'Foam Talent 2016', 'Rencontres d’Arles Historical Book Award 2018', 'Premio Piero Siena 2022'],
    whyImportant: '他的价值不只在“题材重要”，而在于形式和研究问题严格对应：Hidden Islam 用折页制造隐藏 / 显露；Oasis Hotel 用颜色和时间模拟旅程；Blue as Gold 用正负片把欧盟蓝色变成金色。',
    projects: [
      {
        year: '2009–2014',
        title: 'Hidden Islam',
        type: '临时清真寺 / 建筑类型学 / gatefold book',
        facts: [
          '长期调查意大利东北部缺乏正式清真寺的现实，并建立约 100 处临时礼拜空间的“cadastral catalogue”。',
          '拍摄仓库、地下室、商店、车库和旧工厂等被社区临时改造成宗教空间的建筑。',
          '在摄影书中先呈现外部建筑，读者必须打开 gatefold 才能看到内部彩色礼拜场景。',
          '把每个地点作为类型学记录，同时加入具体社区历史，让统计结构与个案经验并存。'
        ],
        reading: '书籍结构直接模拟政治现实：宗教空间从街上几乎不可见，必须“打开”建筑 / 页面才能看到其内部社会。'
      },
      {
        year: '2014',
        title: 'Oasis Hotel',
        type: 'Xinjiang / hitchhiking / 公路摄影书 / 色彩顺序',
        facts: [
          '沿新疆塔克拉玛干沙漠 Cross-Desert Highway 搭便车行进，这条道路原本服务于石油开采基础设施。',
          '途中拍摄卡车司机、棉农、油井工人、性工作者与公路空间，而不是只拍“沙漠风景”。',
          '按照真实旅程的时间和颜色共同排序图像。',
          '书从沙漠中的蓝色白昼逐步进入越来越红的室内，最终抵达给予书名的 brothel / Oasis Hotel。'
        ],
        reading: '色彩不是装饰，而是导航系统：读者通过蓝到红的变化，重新走一遍被石油经济组织起来的公路旅程。'
      },
      {
        year: '2015',
        title: 'Peak',
        type: 'Dolomites / 双页配对 / 季节循环',
        facts: [
          '持续拍摄 Bolzano、Trento、Belluno 一带 Dolomites 山体，从夜间暗面到积雪强光保持明显光照差异。',
          '摄影书每个 spread 把两座山峰“夹”在一起，通过相邻图像而不是单张名山肖像建立节奏。',
          '利用黑暗、积雪、季节和天气的变化，让山体成为循环时间而不是固定纪念碑。',
          '后续展览继续把书籍的配对逻辑转入墙面和空间。'
        ],
        reading: '这组最适合研究“摄影书如何制造时间”：同一类山不是重复，而是季节变化的视觉计量器。'
      },
      {
        year: '2017',
        title: 'Blue as Gold',
        type: 'EU / migration / archive / positive-negative conversion',
        facts: [
          '项目起于 Paris 的 Italian Cultural Institute 驻留，从窗外欧洲联盟旗帜进入对共同政策与价值的怀疑。',
          '主要使用既有 archive material，而不是继续生产新的移民“苦难照片”。',
          '把图像以 positive / negative 成对或转换处理，使海洋的蓝色变成其反相的金色，并指向 EU flag 的蓝与金。',
          '把材料转为 installations、videos、collages、books 与 photographs，多媒介讨论 migration imagery 如何被政治视觉语言预先规定。'
        ],
        reading: '他选择不再“替移民制造新形象”，而是处理已经存在的视觉材料及其政治编码，这是项目伦理最重要的转向。'
      },
      {
        year: '2017–2021+',
        title: 'Prison Museum',
        type: '监狱 / 博物馆 / 共同作者 / institution comparison',
        facts: [
          '从 Bolzano prison 与 Museion 仅约 100 米的物理距离出发，把两个制度放在同一条空间轴线上比较。',
          '对照一个十九世纪、长期过度拥挤的监狱与一个二十一世纪透明铝制当代美术馆。',
          '项目不是只从外部拍摄囚犯，而产生多个与 prison inmates 共同署名 / 共同完成的作品。',
          '结合其长期在 Bolzano penitential institute 的教学经验，把出版、摄影与机构关系持续发展。'
        ],
        reading: '这里最重要的是作者位置发生变化：被研究的人不再只是被摄对象，而能够进入作品的生产与署名结构。'
      }
    ],
    images: [],
    sourceLabel: 'Nicolò Degiorgis · official archive',
    sourceUrl: degiorgisHome,
  },
  {
    id: 'katinka-goldberg',
    name: 'Katinka Goldberg',
    born: '1981',
    base: 'Oslo',
    intro: '以摄影、拼贴和摄影书处理亲密关系、家庭记忆与“距离”。她经常把照片剪开、重组、做成近似雕塑的身体，再把私人档案、家庭绘画、日记和重新行走过的地景放进书籍与展览。',
    methods: ['亲密摄影', '家庭档案', '拼贴', '摄影雕塑', '自我表演', '摄影书编辑', '路线重访'],
    subjects: ['母女关系', '自我形象', '亲密与距离', '犹太家族记忆', '迁徙', '代际创伤'],
    outputs: ['摄影', '拼贴', '摄影书', '雕塑式摄影', '展览'],
    institutions: ['Foam', 'Trondheim Kunstmuseum', 'Hasselblad Center', 'Norwegian Journal of Photography'],
    achievements: ['Foam Talent 2016', 'Leica Oskar Barnack Award · nominated 2020', 'Bristningar · gold in Årets vakreste bøker 2022'],
    whyImportant: '她适合研究私人题材如何避免变成“家庭快照”：第一本书靠非线性编辑处理母女关系，第二本把身体照片真正剪开再重建，第三本沿祖母逃亡路线重新行走，让记忆从照片扩展成身体路线。',
    projects: [
      {
        year: '2011',
        title: 'Surfacing',
        type: '母女关系 / 非线性摄影书 / 记忆',
        facts: [
          '从自己与母亲之间既亲密又令人窒息的关系出发，拍摄两人之间“发生和没有发生”的气氛。',
          '把母亲肖像、身体近景、地景与记忆图像交叉，而不是按家庭时间线排序。',
          '明确拒绝传统 beginning-middle-end narrative，让图像像水一样来回摆动。',
          '通过 76 页硬壳摄影书的编辑与两块封面建立唯一明确的开始 / 结束边界。'
        ],
        reading: '形式和关系非常一致：当亲密经验没有清楚时间线时，她让书的结构也保持不稳定，而不是强行编成“成长故事”。'
      },
      {
        year: '2014–2022',
        title: 'Bristningar',
        type: '身体拼贴 / self-image / photography-sculpture',
        facts: [
          '主要使用自己作为身体素材，把摄影从“外部现实记录”转成对内部自我形象的处理。',
          '直接剪开、截断身体照片，再以 collage 重建，使 amputated body 成为 fragmented identity 的视觉模型。',
          '加入三维物件和雕塑式展示，让形状在摄影平面与真实空间之间碰撞。',
          '项目持续追问“拿走多少还不会消失”“靠得多近时亲密会反而变成距离”。',
          '摄影书继续混入童年照片、文字与家庭绘画，使重建自我成为一套编辑行为。'
        ],
        reading: '这里“碎片化身份”不是解释文字，而被落实成物理动作：剪掉身体—重新拼—让照片离开平面。'
      },
      {
        year: '2017–2021',
        title: 'Shtumer Alef',
        type: '祖母逃亡路线 / diary archive / landscape re-walk',
        facts: [
          '围绕外祖母 Assne Kahn 在二战期间从 Trondheim 逃往 Sweden 的经历研究家族犹太记忆。',
          '2018 年在 Jewish Museum Trondheim 找到祖母逃亡期间写下的 diary。',
          '同年亲自沿祖母当年的逃亡路线重新行走，并在沿途拍摄地景。',
          '用于祖母肖像中的植物与石头也来自这条路线，使“路”以材料形式重新进入肖像。',
          '把新拍地景、历史家庭 / archive photographs 与祖母日记共同组织，处理记忆、沉默、归属与代际传递。'
        ],
        reading: '她没有只把祖母的档案展示出来，而是让自己的身体重新走一遍那条路；历史因此从“别人留下的资料”变成当代行动。'
      }
    ],
    images: [],
    sourceLabel: 'Buer Gallery / Trondheim Kunstmuseum / Journal',
    sourceUrl: goldbergGallery,
  },
];

// Explicit source anchors kept here so future archive batches can reuse verified project-level URLs.
export const foamTalent2016Deep5Sources = {
  sam: { samRecent, samDeep, samDay, samOverpass, samFca, samPhases },
  degiorgis: { degiorgisCv, degiorgisAbout, degiorgisHidden, degiorgisPrison },
  goldberg: { goldbergSurfacing, goldbergBristningar, goldbergShtumer, goldbergNjp },
};
