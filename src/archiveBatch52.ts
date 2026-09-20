import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

export const archiveBatch52: Record<string, ArtistArchive> = {
  'jesse-darling': {
    artistId: 'jesse-darling',
    projectCoverage: '7 个脆弱基础设施 / 身体支撑 / 陶土与 enclosure 节点已建立深档案 · 2016–2023',
    imageCoverage: '0 / 7 项目已有代表图像',
    note: 'Darling 的“脆弱”不是主题说明，而是被直接做进材料结构：栏杆弯掉、支撑架疲惫、roller coaster 失去功能、clay 像身体 / 地质同时开裂。最值得研究的是他们怎样让 government、religion、technology、empire 这些看起来坚硬的系统获得和身体一样会坏、会衰败的物质状态。',
    projects: [
      {
        title: 'Saint Batman / support-object works', cluster: 'everyday support / disability / saint-icon / altered ready-made', period: '2016–2018',
        summary: 'Darling 常从 walking aid、barrier、chair、strap 等支撑身体或管理身体的普通物件出发，再通过弯折、包扎、悬挂与拟人化让它们介于圣像、伤员和失效基础设施之间。',
        actions: ['寻找用于支撑 / 限制身体的现成物', '保留原物使用痕迹', '弯折或削弱其原功能', '加入 bandage、textile、标签或拟人部件', '通过标题连接 saint / pop culture /制度语言', '让物件以需要被照护的姿态进入展厅'],
        sourceUrl: 'https://www.modernartoxford.org.uk/whats-on/jesse-darling-no-medals-no-ribbons', images: [], relations: []
      },
      {
        title: 'The Ballad of Saint Jerome', cluster: 'Tate Art Now / religion / infrastructure / body-support', period: '2018',
        summary: 'Tate Britain Art Now 项目将宗教、基础设施和身体支撑混在同一空间。Jerome / saint figure 不以传统宗教图像出现，而通过 bent barriers、支撑结构、图像和文字形成一个“制度也需要拐杖”的环境。',
        actions: ['以 Saint Jerome 等宗教叙事作为松散框架', '使用 crowd-control / support-like industrial materials', '把金属结构弯曲成近似身体姿态', '加入 drawing、text 和 found object', '利用展场墙角与通道让作品像临时支撑系统', '让观众在结构之间穿行而非面对单一雕塑'],
        sourceUrl: 'https://www.tate.org.uk/whats-on/tate-britain/art-now-jesse-darling', images: [], relations: [rel('展览', 'Art Now: Jesse Darling — Tate Britain', '2018')]
      },
      {
        title: 'Gravity Road', cluster: 'broken roller coaster / labour / leisure / anti-monument', period: '2020',
        summary: '巨型钢结构借用 roller coaster 的工程语言，但被缩小、弯曲并做成失灵状态。通常象征速度、娱乐、工程掌控的结构在这里像疲惫骨架，成为现代性“加速与进步”神话的 anti-monument。',
        actions: ['研究 roller coaster 的轨道与支架形式', '使用工业 steel / engineering vocabulary', '缩小与扭曲正常轨道比例', '故意让结构无法完成实际娱乐功能', '把支撑和坠落感同时保留', '将观众置于失效工程结构附近以产生身体尺度判断'],
        sourceUrl: 'https://www.modernartoxford.org.uk/mao-studio/blog/jesse-darling-reading-list', images: [], relations: [rel('展览', 'Gravity Road — Kunstverein Freiburg', '2020')]
      },
      {
        title: 'No Medals No Ribbons', cluster: 'survey / anti-triumphalism / fragile systems / re-editing', period: '2022',
        summary: 'Modern Art Oxford 的十年 survey 拒绝传统“胜利回顾展”姿态。既有作品与新作按 power systems、mortality、failure 重新组合；标题本身拒绝 medal / ribbon 式的成功史。',
        actions: ['从十年作品中重新选择 sculpture、drawing、text、installation', '不按年代线性排列', '用脆弱 / 权力 / 失效主题重组', '让旧作在新邻接关系中改变含义', '保留 temporary support 和 improvised installation 的视觉', '将 survey 做成 anti-retrospective'],
        sourceUrl: 'https://www.modernartoxford.org.uk/whats-on/jesse-darling-no-medals-no-ribbons', images: [], relations: [rel('展览', 'No Medals No Ribbons — Modern Art Oxford', '2022'), rel('奖项', 'Turner Prize nomination basis', '2023')]
      },
      {
        title: 'Enclosures', cluster: 'clay / extraction / geology-body / death and survival', period: '2022',
        summary: 'Camden Art Centre 项目把 clay 当成地质、祖先、建筑和身体的共同材料。研究从 extraction / exhumation 开始，陶土的硬化、破裂和矿物性用来质疑 body 与 environment 之间的边界。',
        actions: ['通过 residency 进行两年 ceramics / extraction research', '研究 clay 作为地质与身体物质的双重属性', '手工塑形并允许干燥 / 烧制中的裂缝存在', '将 ceramic 与工业支撑、文本和空间结构并置', '把 enclosure 理解为空间边界也理解为身体边界', '用材料衰败讨论什么被允许生存 / 死亡'],
        sourceUrl: 'https://camdenartcentre.org/whats-on/jesse-darling-2', images: [], relations: [rel('展览', 'Enclosures — Camden Art Centre', '2022')]
      },
      {
        title: 'Towner Eastbourne / Turner Prize 2023', cluster: 'barriers / flags / institutional fragility / prize installation', period: '2023',
        summary: 'Turner Prize 展示继续使用弯曲 barrier、旗帜、支撑与损坏式结构，让国家 / 制度的视觉语汇表现得不稳定。作品最终获得 2023 Turner Prize。',
        actions: ['把公共管理物件转换成失效雕塑', '用 bent metal 强化疲惫身体感', '把 flag / institutional sign 置于不稳定支撑上', '通过密集空间安装迫使观众绕行', '拒绝 monument 的垂直、坚固姿态'],
        sourceUrl: 'https://www.tate.org.uk/art/artists/jesse-darling-26770', images: [], relations: [rel('奖项', 'Turner Prize', '2023 winner')]
      },
      {
        title: 'Fallibility as construction rule', cluster: 'meta-method / failure / care / infrastructure-body equivalence', period: '2010s–现在',
        summary: 'Darling 最稳定的结构原则是：任何系统都可以被当成身体。栏杆会疲惫、帝国会骨折、技术会需要支撑；“failure”不是作品坏掉，而是设计阶段就被保留的工作条件。',
        actions: ['选择原本象征秩序 / 安全 / 工程稳定性的材料', '主动削弱直线、垂直和功能完整性', '使用临时固定、bandage、tie 等照护语言', '避免把修复痕迹隐藏', '把结构性 failure 变成可见形式', '通过材料状态替代抽象政治口号'],
        sourceUrl: 'https://www.modernartoxford.org.uk/whats-on/jesse-darling-no-medals-no-ribbons', images: [], relations: []
      }
    ],
    awards: ['Turner Prize 2023'],
    exhibitions: ['Art Now — Tate Britain 2018', 'Gravity Road — Kunstverein Freiburg 2020', 'No Medals No Ribbons — Modern Art Oxford 2022', 'Enclosures — Camden Art Centre 2022', 'Turner Prize — Towner Eastbourne 2023'],
    sources: [
      { label: 'Modern Art Oxford — No Medals No Ribbons', url: 'https://www.modernartoxford.org.uk/whats-on/jesse-darling-no-medals-no-ribbons' },
      { label: 'Camden Art Centre — Enclosures', url: 'https://camdenartcentre.org/whats-on/jesse-darling-2' }
    ]
  },

  'jasleen-kaur': {
    artistId: 'jasleen-kaur',
    projectCoverage: '7 个口述史 / 家庭物件 / 声音记忆 / kinetic sculpture / political community 节点已建立深档案 · 2019–2025',
    imageCoverage: '0 / 7 项目已有代表图像',
    note: 'Kaur 的优势在于不把“Punjabi / Sikh / Glasgow identity”变成说明性符号，而是追踪文化怎样藏在物件使用、声音、食物、车辆改装、地毯和社区政治里。她经常先听、收集、访谈，再把 oral history 转成 publication、motorised object 或 surround sound。',
    projects: [
      {
        title: 'Be Like Teflon', cluster: 'oral history / women of Indian heritage / food / publication', period: '2019',
        summary: '项目由 Kaur 与英国印度裔女性的多次对话构成。劳动、责任、食物、损失和照护通过餐桌 / tava 旁的谈话累积，最终成为 128 页出版物，而不是把受访者压缩成肖像。',
        actions: ['邀请不同年龄 / 经历的印度裔女性对话', '以吃饭、烹饪和非正式相处降低正式采访结构', '录音 / 记录 labour、duty、sustenance、loss 等主题', '与 Amanprit Sandhu 等共同编辑文本', '保留不同声音之间的矛盾', '与 Glasgow Women’s Library / Panel 制作出版物', '把 listening 作为主要创作动作'],
        sourceUrl: 'https://jasleenkaur.co.uk/be-like-teflon/', images: [], relations: [rel('出版', 'Be Like Teflon — Glasgow Women’s Library / Dent-De-Leone', '2019')]
      },
      {
        title: 'Gut Feelings Meri Jaan', cluster: 'food / body / language / sound / family knowledge', period: '2021',
        summary: '项目从 gut、食物、家庭语言和身体知识出发，继续让 everyday materials 与声音承担迁移 / 家庭记忆。重点不是呈现一个文化符号，而是文化如何通过身体反应、饮食和口头语言传递。',
        actions: ['从家庭食物与身体经验搜集素材', '记录跨语言表达与声音记忆', '把普通厨房 / 身体物件转换成 sculpture', '利用 sound 让不可见的家族经验进入空间', '避免按民族学分类展示物件'],
        sourceUrl: 'https://jasleenkaur.co.uk/about-2/', images: [], relations: [rel('展览', 'Gut Feelings Meri Jaan — Touchstones Rochdale', '2021')]
      },
      {
        title: 'Alter Altar — object archive', cluster: 'Axminster carpet / blessed Irn Bru / flyers / family photographs', period: '2023',
        summary: 'Alter Altar 把 Glasgow / Punjab / Sikh / Muslim / protest / domestic memories压进同一物件系统。Axminster carpet、blessed Irn Bru、football scarves、political flyers、family photographs 不被分为“宗教”和“流行文化”，而作为同一生活世界材料。',
        actions: ['从家庭和社区收集 / 借用 vernacular objects', '保留物件既有文化使用语境', '把地毯铺成聚集区域', '将 family photograph 与 protest photograph 并置', '把普通饮料重新置入 blessed / ritual 语境', '通过空间邻接而非解释牌制造跨文化关系'],
        sourceUrl: 'https://jasleenkaur.co.uk/alter-altar/', images: [], relations: [rel('展览', 'Alter Altar — Tramway, Glasgow', '2023')]
      },
      {
        title: 'Alter Altar — kinetic and sonic system', cluster: 'motor / harmonium / chorus hands / surround sound / Sociomobile', period: '2023',
        summary: '展览真正关键的是物件会动、会发声：automated harmonium、DMX motors 驱动的 hands、6:1 surround sound，以及装有 sound system 的 red Ford Escort Cabriolet 共同把 gallery 变成一个临时聚会和政治声场。',
        actions: ['为 harmonium 加装 automated motor', '制作由 DMX motor 驱动的 hands / jingles', '制作 6:1 surround sound work Yearnings', '改装 red Ford Escort 为 Sociomobile', '加入 cotton doily 与 car sound system', '把机械循环与宗教 / 社区音乐记忆并置', '让不同声源在观众移动中互相覆盖'],
        sourceUrl: 'https://www.tramway.org/media/u0mf0ehp/jasleen-kaur_-alter-altar-exhibition-programme.pdf', images: [], relations: []
      },
      {
        title: 'Turner Prize 2024 — Alter Altar recontextualised', cluster: 'prize installation / inherited myths / political mysticism', period: '2024',
        summary: 'Turner Prize 展示把 Alter Altar 的方法带到 Tate Britain：文化物件不是身份陈列，而是 kinetic / sonic network。Kaur 因该实践获得 2024 Turner Prize。',
        actions: ['从原 Tramway 展览选择关键 objects / sounds', '根据 Tate 展场重新安排物件距离', '保留非等级式的宗教 / 流行 / 政治材料混合', '让观众以行走方式建立自己的关联', '用重复声音强化记忆而非线性说明'],
        sourceUrl: 'https://www.tate.org.uk/art/turner-prize/2024', images: [], relations: [rel('奖项', 'Turner Prize', '2024 winner')]
      },
      {
        title: 'Boomerang / Was. Is. Will be.', cluster: 'return / public work / ongoing object-memory', period: '2025',
        summary: '2025 solo show Boomerang 与 public work Was. Is. Will be. 延续“物件带着记忆返回”的逻辑。她不把前期家庭材料封存，而持续让相同声音 / 日常物在新的公共空间发生不同关系。',
        actions: ['从旧项目抽取可继续流通的物件 /声音', '在新展览重新制作邻接关系', '将 gallery practice 扩展到 public artwork', '继续测试“return”作为迁移经验与物件运动'],
        sourceUrl: 'https://jasleenkaur.co.uk/about-2/', images: [], relations: [rel('展览', 'Boomerang — Hollybush Gardens', '2025'), rel('展览', 'Was. Is. Will be. — Thamesmead public artwork', '2025')]
      },
      {
        title: '18th Istanbul Biennial', cluster: 'biennial circulation / community memory / translocal context', period: '2025',
        summary: 'Kaur 进入 18th Istanbul Biennial，使 Glasgow / Punjab 起源的物件—声音方法进入另一座拥有复杂宗教、迁移与商业历史的城市。重要的是方法可迁移，但并不因此抽空具体社区出处。',
        actions: ['保留原作品的具体家庭 / 社区来源', '根据 biennial venue 重新安装', '让当地观众通过声音和日常物进入作品', '避免为了国际展览将材料变成泛化“diaspora aesthetic”'],
        sourceUrl: 'https://bienal.iksv.org/en/18th-istanbul-biennial/artists', images: [], relations: [rel('展览', '18th Istanbul Biennial', '2025')]
      }
    ],
    awards: ['Paul Hamlyn Artist Award 2021', 'Turner Prize 2024'],
    exhibitions: ['Be Like Teflon — Glasgow Women’s Library 2019', 'Alter Altar — Tramway 2023', 'Turner Prize — Tate Britain 2024', 'Boomerang — Hollybush Gardens 2025', '18th Istanbul Biennial 2025'],
    sources: [
      { label: 'Jasleen Kaur — official site', url: 'https://jasleenkaur.co.uk/about-2/' },
      { label: 'Jasleen Kaur — Alter Altar', url: 'https://jasleenkaur.co.uk/alter-altar/' },
      { label: 'Tramway — Alter Altar', url: 'https://www.tramway.org/event/f4240085-b7df-4a53-bd35-af7300c18676' },
      { label: 'Istanbul Biennial — artists', url: 'https://bienal.iksv.org/en/18th-istanbul-biennial/artists' }
    ]
  },

  'john-akomfrah': {
    artistId: 'john-akomfrah',
    projectCoverage: '8 个 archival essay film / multi-screen ecology / listening-as-activism 节点已建立深档案 · 1982–2026',
    imageCoverage: '0 / 8 项目已有代表图像',
    note: 'Akomfrah 的巨大多屏装置不是“把很多档案拼起来”。他的核心操作是先建立历史与主题研究池，再让 archive footage、新拍 landscape、voice、music、ambient sound 和 text 通过 montage 同时存在。屏幕数量越多，不是信息越多，而是让不同时间无法被一条旁白统一解释。',
    projects: [
      {
        title: 'Black Audio Film Collective — collective production method', cluster: 'collective / archive / anti-broadcast language / Black British history', period: '1982–1998',
        summary: '1982 共同创立 Black Audio Film Collective。小组把电视新闻、摄影档案、声音、理论文本和新拍素材重新组织，主动反对 broadcast news 把黑人英国经验缩成骚乱 / 社会问题的单一解释。',
        actions: ['建立集体作者而非单人导演模式', '搜集 broadcast news 与 community archive', '录制 oral testimony 与 ambient sound', '阅读后殖民 / diaspora 理论作为剪辑参考', '将 archive 与新拍 footage 并置', '避免 authoritative voice-over 给出最终解释'],
        sourceUrl: 'https://venicebiennale.britishcouncil.org/history/2020s/2024-sir-john-akomfrah-ra', images: [], relations: []
      },
      {
        title: 'Handsworth Songs', cluster: 'essay film / 1985 uprisings / archive montage / counter-news', period: '1986',
        summary: '回应 Handsworth 与 London 1985 uprisings。作品不按“原因—冲突—结果”新闻结构展开，而让新闻、历史档案、街道影像、声音和诗性旁白互相冲突，强调事件拥有更长的殖民 / 移民历史。',
        actions: ['搜集骚乱新闻 footage', '调取更早期 immigration / colonial archive', '拍摄 Handsworth 当代街道与居民', '剪辑不同年代的声音 / 图像', '拒绝把 uprising 解释成单一即时原因', '以 essay-film 结构保存矛盾和断裂'],
        sourceUrl: 'https://www.tate.org.uk/art/artworks/akomfrah-handsworth-songs-t14702', images: [], relations: []
      },
      {
        title: 'The Nine Muses', cluster: 'migration / Homeric structure / archive-landscape montage', period: '2010',
        summary: '以 Homeric journey / muse 结构处理英国 postwar migration，把 migration archive 与 Alaska 等空旷雪景并置。历史人物没有被直接“复原”，而像 ghosts 一样通过档案声像进入冷峻当代 landscape。',
        actions: ['搜集 postwar Britain migration archive', '选择文学 / Homeric structure 作为章节骨架', '新拍极端 landscape', '将 archive speech 与无人景观交叉剪辑', '使用 music / ambient sound 建立不同时间之间的情绪桥', '避免逐个解释档案人物'],
        sourceUrl: 'https://www.lissongallery.com/artists/john-akomfrah', images: [], relations: []
      },
      {
        title: 'Vertigo Sea', cluster: 'three-screen ocean / migration / whaling / colonial violence / BBC archive', period: '2015',
        summary: '三屏 installation 将鲸捕、奴隶贸易、战争、当代 migration、海洋自然史和新拍风景同时放在“海”这个媒介中。三个屏幕让观众不断比较，而无法只跟一条 narrative。',
        actions: ['搜集 maritime / whaling / migration / war archives', '拍摄 contemporary ocean landscapes', '设计 three-channel timeline', '让三个画面既同步又异步', '以声音统一空间但不统一含义', '通过 animals 与 human migration 交叉剪辑扩大历史尺度'],
        sourceUrl: 'https://www.lissongallery.com/artists/john-akomfrah', images: [], relations: [rel('展览', '56th Venice Biennale — All the World’s Futures', '2015')]
      },
      {
        title: 'Purple', cluster: 'six-channel climate / industrial history / family memory', period: '2017',
        summary: '六屏作品把 climate change 从未来灾难转成长期 industrial history。不同国家的冰川、工业设施、海岸和 archive footage 与 personal / social memory 并置。',
        actions: ['跨国拍摄 climate-sensitive landscapes', '搜集工业 /环境历史 archive', '设计 six-channel image relationships', '用不同屏幕同时呈现原因、结果与记忆', '将 personal memory 与 planetary history 并置', '使用长时段 immersion 替代“灾难高潮”'],
        sourceUrl: 'https://www.lissongallery.com/artists/john-akomfrah', images: [], relations: []
      },
      {
        title: 'Listening All Night To The Rain — archive system', cluster: 'hundreds of archives / new footage / audiophonic objects / eight Cantos', period: '2024',
        summary: '英国馆项目从数百个 international archives / libraries 调取 still images、video、audio、text，再与新拍素材组合成 8 个相互重叠的 multimedia / sound installations。Canto III 甚至包含 400+ archival audiophonic objects。',
        actions: ['从数百国际 archive / library 搜集 visual + audio materials', '拍摄新 footage 与档案建立时间碰撞', '将整体拆成八个 Cantos', '每个空间分配独立 colour field', '组合多屏 video、sound、text 与 archival audio objects', '让不同 Cantos 声音互相渗透', '用 water motif 穿过全馆建立连接'],
        sourceUrl: 'https://venicebiennale.britishcouncil.org/listening-all-night-to-the-rain/explore', images: [], relations: []
      },
      {
        title: 'Listening All Night To The Rain — listening as activism', cluster: 'British Pavilion / acoustemology / water / non-linear history', period: '2024',
        summary: '项目把“listening”从声音效果升级为政治方法：观众要在八个互相重叠的空间中持续听，历史不再被一段说明控制。水成为 diaspora、记忆、殖民航路和 ecology 的 connective tissue。',
        actions: ['利用 British Pavilion architecture 分割 / 连接 Cantos', '让不同房间音轨彼此泄漏', '以 sound 迫使观众停留更长时间', '将 water image 在不同历史语境中重复', '采用 open-ended collage 替代线性 chronology', '把观众移动设计成主动连接历史的动作'],
        sourceUrl: 'https://www.labiennale.org/en/art/2024/great-britain', images: [], relations: [rel('展览', 'British Pavilion — Venice Biennale', '2024')]
      },
      {
        title: 'UK tour / site translation', cluster: 'touring multi-screen installation / re-siting / 2025–2027', period: '2025–2027',
        summary: '英国馆之后，Listening All Night To The Rain 进入 UK tour。多屏 / 多声道作品必须在 Cardiff、Liverpool、Dundee 等不同建筑重新配置，说明大型 installation 的“作品”也包含每次重新测量声场和屏幕关系。',
        actions: ['保留八个 Cantos 的整体结构', '针对新 venue 重新计算 screen placement', '重新调整 sound bleed / acoustic separation', '保持观众移动路径的非线性', '根据建筑尺度重设 colour / projection environment'],
        sourceUrl: 'https://arts.britishcouncil.org/get-involved/events/listening-all-night-rain-uk-tour', images: [], relations: [rel('展览', 'UK tour — National Museum Cardiff / Liverpool / Dundee', '2025–2027')]
      }
    ],
    awards: ['Knighthood 2023'],
    exhibitions: ['Handsworth Songs 1986', 'Vertigo Sea — Venice Biennale 2015', 'Purple — major international presentations 2017–', 'British Pavilion — Venice Biennale 2024', 'Listening All Night To The Rain UK tour 2025–2027'],
    sources: [
      { label: 'British Council — Listening All Night To The Rain', url: 'https://venicebiennale.britishcouncil.org/listening-all-night-to-the-rain' },
      { label: 'British Council — Explore the exhibition', url: 'https://venicebiennale.britishcouncil.org/listening-all-night-to-the-rain/explore' },
      { label: 'La Biennale — Great Britain 2024', url: 'https://www.labiennale.org/en/art/2024/great-britain' },
      { label: 'Lisson Gallery — John Akomfrah', url: 'https://www.lissongallery.com/artists/john-akomfrah' }
    ]
  },

  'archie-moore': {
    artistId: 'archie-moore',
    projectCoverage: '6 个 self / dwelling / language / genealogy / state archive 节点已建立深档案 · 2013–2024',
    imageCoverage: '0 / 6 项目已有代表图像',
    note: 'Moore 的强项是把 identity 从肖像问题变成尺度与空间问题：一只 taxidermy black dog 可以代替 self-portrait，一间 childhood home 可以通过气味与错误记忆重建，而 kith and kin 则把私人 genealogy 扩大到 65,000+ 年，并在中心压上国家 coronial archive。',
    projects: [
      {
        title: 'Black Dog', cluster: 'taxidermy / self-representation / racist naming / substitute portrait', period: '2013',
        summary: '作品以 black taxidermy dog 替代直接 self-portrait。Moore 把肤色如何成为社会身份识别与 racist slur 的历史压进一个“动物替身”，故意触碰被去人化的语言。',
        actions: ['选择 dog 作为身体替身', '使用 taxidermy 真实物质感', '强化黑色皮毛', '让 collar / animal status 与 racial naming 发生关系', '避免展示艺术家脸部', '用 object portrait 承担个人与社会历史'],
        sourceUrl: 'https://thecommercialgallery.com/artists/archie-moore/black-dog', images: [], relations: [rel('收藏', 'National Gallery of Australia', 'acquired 2014')]
      },
      {
        title: 'United Neytions', cluster: 'flags / invented nations / identity systems / public commission', period: '2014–2018',
        summary: '大型 public commission 使用大量重新设计 / 虚构 flag，借 nation-state 最熟悉的视觉系统讨论 identity、belonging 与被国家分类。与后来 family tree 一样，作品把命名 / 归属制度变成可见图表。',
        actions: ['研究 flag 的 colour / emblem conventions', '设计大量 invented national flags', '让熟悉的国家视觉语言产生微妙错误', '在 airport 国际移动语境安装', '通过重复旗帜建立“很多国家但无固定归属”的环境'],
        sourceUrl: 'https://gertrude.org.au/exhibition/archie-moore-dwelling-victorian-issue', images: [], relations: [rel('展览', 'United Neytions — Sydney Airport T1 public commission', '2014–2018')]
      },
      {
        title: 'Dwelling series', cluster: 'architectural reconstruction / childhood memory / smell / speculative accuracy', period: '2010s–2022',
        summary: 'Dwelling 不是复刻建筑模型，而是反复重建艺术家 childhood home 与 family environments。Moore 明确承认记忆 simultaneously accurate、false、vague、absent，因此墙洞、烟熏厨房、床、地面、气味等细节既真实又推测。',
        actions: ['从 childhood memory 绘制空间结构', '采访家人 / 调取地方记忆补充细节', '重建 full-scale domestic interiors', '放入 ordinary objects 与生活损耗', '加入 auditory、haptic、olfactory cues', '不修正记忆矛盾', '每次 iteration 根据地点 / 新记忆重新搭建'],
        sourceUrl: 'https://gertrude.org.au/exhibition/archie-moore-dwelling-victorian-issue', images: [], relations: [rel('展览', 'Dwelling (Victorian Issue) — Gertrude Contemporary', '2022')]
      },
      {
        title: 'Dwelling — personal history vs official history', cluster: 'home / intergenerational trauma / colonial record / immersive installation', period: '2022',
        summary: 'Victorian Issue 把 childhood home、祖母的 corrugated-iron hut、schoolroom 与 colonial imagery 放在同一 installation。私人 memory 因此直接撞上 Anglo-Celtic-centred official history，而不是在作品说明里后贴殖民主题。',
        actions: ['将多个 family spaces 并置到同一 gallery', '重建 grandmother hut 的“感觉”而非建筑测绘', '加入 mining propaganda / colonial image 等 public-history materials', '让 viewer 实际穿过家庭与制度空间', '用材料贫乏 / 房屋缺陷呈现 intergenerational condition'],
        sourceUrl: 'https://gertrude.org.au/article/archie-moore-in-discussion-with-paris-lettau/', images: [], relations: []
      },
      {
        title: 'kith and kin — 65,000+ year genealogy', cluster: 'chalk family tree / 2,400 generations / black pavilion / everywhen', period: '2024',
        summary: 'Australia Pavilion 五米高黑墙与 ceiling 被 white chalk genealogy 覆盖，延伸超过 60 米、约 2,400 generations / 65,000+ years。谱系来自 family、community 与 archivists research，同时允许 speculative / missing ancestors 存在。',
        actions: ['进行 family / community / archive genealogical research', '把 lineage 扩展到 First Nations deep time', '将 pavilion 墙面和 ceiling 全部涂黑', '两个月左右手工以 white chalk 绘写 names / relations', '保留 unknown / broken genealogical links', '让 family tree 像 celestial map 覆盖观众'],
        sourceUrl: 'https://creative.gov.au/news-events/news/archie-moore-presents-kith-and-kin-australia-pavilion-60th-exhibition-la-0', images: [], relations: []
      },
      {
        title: 'kith and kin — coronial archive / missing records / reflective pool', cluster: 'state documents / deaths in custody / family vs statistics / memorial', period: '2024',
        summary: '谱系中心的白桌上堆叠 Aboriginal deaths in custody 相关 coronial reports 与艺术家家族遭遇政策 / 法律的文件；无法取得的 records 用 blank paper stacks 表示，下方 reflective water 将 family tree 映回国家文件。',
        actions: ['搜集 publicly available coronial reports', '加入与艺术家 family encounters 相关的 official documents', '对 unavailable records 使用 blank paper 作为缺席标记', '将 documents 堆放于中央白桌', '在桌下 / 周围设置 reflective black water', '让 genealogy reflection 与 state archive 直接重叠', '把统计数字重新放回亲属关系'],
        sourceUrl: 'https://creative.gov.au/news-events/news/archie-moore-presents-kith-and-kin-australia-pavilion-60th-exhibition-la-0', images: [], relations: [rel('奖项', 'Golden Lion for Best National Participation — Venice Biennale', '2024'), rel('收藏', 'Australian Government acquisition; gifted to QAGOMA with Tate acquisition partnership', '2024')]
      }
    ],
    awards: ['Golden Lion for Best National Participation — Venice Biennale 2024'],
    exhibitions: ['Dwelling (Victorian Issue) — Gertrude Contemporary 2022', 'Australia Pavilion — Venice Biennale 2024'],
    sources: [
      { label: 'Creative Australia — kith and kin', url: 'https://creative.gov.au/news-events/news/archie-moore-presents-kith-and-kin-australia-pavilion-60th-exhibition-la-0' },
      { label: 'Gertrude — Dwelling (Victorian Issue)', url: 'https://gertrude.org.au/exhibition/archie-moore-dwelling-victorian-issue' },
      { label: 'The Commercial — Black Dog', url: 'https://thecommercialgallery.com/artists/archie-moore/black-dog' }
    ]
  },

  'mataaho-collective': {
    artistId: 'mataaho-collective',
    projectCoverage: '7 个 Māori weaving knowledge / industrial fibre / collective authorship 节点已建立深档案 · 2013–2025',
    imageCoverage: '0 / 7 项目已有代表图像',
    note: 'Mataaho Collective 的重点不是“用现代材料做传统编织”。四人坚持 single authorship，以 four-brain / eight-hand 的工作方式，把 wānanga、whakapapa、Māori weaving knowledge 与 tarpaulin、marine rope、insect mesh、truck strops、fencing components 等工业材料结合。传统在这里不是图案引用，而是结构知识如何迁移。',
    projects: [
      {
        title: 'Te Whare Pora', cluster: 'early textile space / women’s weaving knowledge / collective authorship', period: '2013',
        summary: '早期作品已确立共同作者与大型 textile environment 的方向。作品把 whare pora / weaving space 的女性知识带进 contemporary installation，而不是复制传统 object。',
        actions: ['四人共同研究与制作', '从 Māori women’s weaving knowledge 提取空间逻辑', '使用 contemporary textile materials', '扩大身体尺度的织物结构', '以 collective single authorship 署名'],
        sourceUrl: 'https://www.mataahocollective.com/art-works', images: [], relations: []
      },
      {
        title: 'Kiko Moana', cluster: 'blue tarpaulin / sewing / taniwha narratives / documenta 14', period: '2017',
        summary: '11×5m 左右的 blue tarpaulin installation 由多层 tarp 缝合、切割成重复 pattern，表面既像 water ripple 也关联 taniwha。团队同时收集 whānau / friends 的 taniwha stories，形成 Taniwha Tales 网站。',
        actions: ['观察 communities 中 tarpaulin 的日常用途', '记录“tarps in the wild”', '与 pūkenga 进行 wānanga 学习 sewing / customary knowledge', '将 blue tarpaulin 层叠缝合', '切割重复 motif', '搜集 family / friends taniwha narratives', '将实体 installation + website + Instagram documentation 共同作为项目生态'],
        sourceUrl: 'https://www.mataahocollective.com/art-works/kiko-moana', images: [], relations: [rel('展览', 'documenta 14, Kassel', '2017'), rel('收藏', 'Museum of New Zealand Te Papa Tongarewa', 'Kiko Moana + Taniwha Tales + Instagram documentation')]
      },
      {
        title: 'Tauira', cluster: 'marine rope / whatu / architecture penetration / knowledge transfer', period: '2018',
        summary: '团队在 mentor Maureen Lander 等知识传递中学习 muka / whatu，作品以约 2000m marine-grade rope 扩大 finger-twining 结构，并穿过 gallery wall，让 weaving 从表面变成建筑动作。',
        actions: ['通过 tuakana / teina knowledge exchange 学习 whatu', '选用 marine-grade rope 替代传统纤维', '以 single / double paired finger twining 重复制作', '将纺织体扩大至建筑尺度', '切开 gallery wall 让 woven rope 穿越内部 infrastructure', '在另一侧让 rope unravel 成 waterfall 状态'],
        sourceUrl: 'https://nzhistory.govt.nz/women-together/mata-aho-collective', images: [], relations: []
      },
      {
        title: 'Atapō', cluster: 'insect mesh / steel / wool / muka / mourning-protection motif', period: '2020',
        summary: '与 Maureen Lander 合作，围绕 Hinenuitepō / Hinetītama、night-to-dawn 与 regeneration。12 条长黑 mesh screen 中切出 diamond papaki rango/ngaro motif，产生贯穿多层的 sightlines。',
        actions: ['共同 wānanga refining narrative / form', '使用 insect mesh、steel、wool、muka', '制作12条悬挂 black screens', '切割 diamond papaki rango/ngaro motif', '在 layers 之间控制 light / visibility', '根据 exhibition space 重新想象两组 deity forms 的关系'],
        sourceUrl: 'https://www.mataahocollective.com/art-works/atapo', images: [], relations: [rel('奖项', 'Walters Prize', '2021 winner')]
      },
      {
        title: 'Takapau', cluster: 'reflective truck strops / ceremonial mat / tension / 200 sqm installation', period: '2022–2024',
        summary: 'Takapau 使用约 200 sqm reflective truck tie-down straps 编织巨大悬挂结构，研究 fine ceremonial takapau mats。货运固定工具的 tension / load-bearing 性能被转成出生、保护与 collective support 的空间形式。',
        actions: ['研究 Te Papa 收藏中的 ceremonial mats', '结合 Dr Ngahuia Murphy research 与 Kura Te Waru Rewiri legacy', '选择 reflective truck strops / cargo tie-downs', '建立重复 interlaced pattern', '由四人共同拉紧、固定和校正 tension', '根据建筑跨度悬挂形成 overhead threshold', '让观众从织物下方穿过'],
        sourceUrl: 'https://www.mataahocollective.com/', images: [], relations: [rel('展览', 'Te Papa Tongarewa commission', '2022'), rel('奖项', 'Golden Lion for Best Participant — Venice Biennale', '2024')]
      },
      {
        title: 'Tuakirikiri', cluster: 'tubular webbing / hooks / cam buckles / Gwangju Biennale', period: '2023',
        summary: '8×8×4m installation 使用 hi-vis orange / grey tubular webbing、S hooks、Cam Buckles，dedicated to Hinetuakirikiri。工业 fastening system 本身成为编织结构的一部分。',
        actions: ['选择 hi-vis tubular webbing', '利用 S hooks 和 Cam Buckles 作为真实连接件', '建立大型 repeated tension network', '将 small-rock ancestor narrative 转成空间结构', '针对 Gwangju exhibition hall 调整悬挂和受力'],
        sourceUrl: 'https://www.mataahocollective.com/', images: [], relations: [rel('展览', '14th Gwangju Biennale — soft and weak like water', '2023')]
      },
      {
        title: 'Hautāmiro', cluster: 'wall-based fibre / harakeke / wool / fencing / wind and pastoral history', period: '2025',
        summary: '首件 wall-based installation 使用 harakeke、wool 与 fencing components，研究 wind、material innovation 与 Aotearoa wool legacy。作品说明 collective 的结构知识并不依赖“巨大悬挂”一种格式。',
        actions: ['研究 local wind / wool history', '组合 harakeke 与 wool', '把 fencing hardware 纳入 textile structure', '由 free-hanging form 转成 wall-based system', '保持 Māori knowledge 与 industrial agricultural material 的并置'],
        sourceUrl: 'https://www.mataahocollective.com/', images: [], relations: [rel('展览', 'Hautāmiro — Dunedin Public Art Gallery commission', '2025')]
      }
    ],
    awards: ['Walters Prize 2021 (Atapō with Maureen Lander)', 'Golden Lion for Best Participant — Venice Biennale 2024'],
    exhibitions: ['documenta 14 — Kiko Moana 2017', 'Te Papa major exhibition 2022', 'Gwangju Biennale 2023', 'Venice Biennale 2024', 'Dunedin Public Art Gallery 2025'],
    sources: [
      { label: 'Mataaho Collective — official site', url: 'https://www.mataahocollective.com/' },
      { label: 'Mataaho — Kiko Moana', url: 'https://www.mataahocollective.com/art-works/kiko-moana' },
      { label: 'Mataaho — Atapō', url: 'https://www.mataahocollective.com/art-works/atapo' },
      { label: 'Te Papa — Golden Lion / Takapau', url: 'https://blog.tepapa.govt.nz/2024/05/20/mataaho-collective-win-the-golden-lion/' }
    ]
  }
};