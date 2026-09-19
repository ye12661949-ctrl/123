import type { ArtistArchive, ArchiveImage, ArchiveRelation } from './archiveData';

const img = (url: string, title: string, credit: string, sourceUrl: string, sourceLabel: string): ArchiveImage => ({ url, title, credit, sourceUrl, sourceLabel });
const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

export const archiveBatch39: Record<string, ArtistArchive> = {
  'adam-rouhana': {
    artistId: 'adam-rouhana',
    projectCoverage: '7 个长期项目 / 展览节点已建立深档案 · 2022–2026',
    imageCoverage: '1 / 7 节点已有代表图像',
    note: 'Rouhana 的核心并不是把巴勒斯坦“拍得更漂亮”，而是把摄影本身当作再现政治的一部分：他主动对抗新闻摄影里反复出现的受难 / 暴力模板，以非常普通的日常、儿童、家庭、植物、游泳、理发和水果重新建立当代巴勒斯坦视觉文化。',
    projects: [
      {
        title: 'Before Freedom — core method', cluster: 'long-term documentary / decolonial representation', period: '2022–现在',
        summary: 'Rouhana 长期在历史巴勒斯坦不同城市拍摄日常生活。项目并不否认占领、检查站和军事存在，而是拒绝让这些成为巴勒斯坦人的唯一视觉定义。',
        actions: ['长期往返 Jerusalem、Haifa、Akka、Hebron、Nablus、Bethlehem 等地', '以家庭访问和真实日常生活为进入方式', '使用自然光和柔和色彩而非典型新闻硬光', '在同一系列中并置儿童游戏、游泳、家庭聚会、理发与检查站 / 士兵', '持续积累而非围绕单一新闻事件拍摄', '通过编辑建立一种由巴勒斯坦主体自身出发的视觉叙事'],
        sourceUrl: 'https://adamrouhana.com/',
        images: [img('https://static.frieze.com/files/inline-images/Adam%20Rouhana%20Before%20Freedom%202.jpeg', 'Before Freedom', '© Adam Rouhana', 'https://www.frieze.com/no9-cork-street/freedom-adam-rouhana-curated-amah-rose-abrams', 'Frieze')],
        relations: []
      },
      {
        title: 'Everyday motifs: orchard, watermelon, water, olive trees', cluster: 'memory / landscape / recurring motifs', period: '2022–现在',
        summary: '系列反复出现祖母果园记忆、橄榄树、罂粟、水、西瓜等地方性对象。它们不是装饰性“巴勒斯坦符号”，而是把土地、家庭记忆、抵抗史和普通生活压进同一个画面系统。',
        actions: ['从个人童年和家庭记忆筛选视觉母题', '在长期拍摄中让同一母题反复出现', '将植物 / 水果与人物身体放在同一观看层级', '避免把象征物单独拍成宣传式图标', '通过跨地点重复建立项目内部节奏'],
        sourceUrl: 'https://www.kunsthal.nl/en/plan-your-visit/exhibitions/adam-rouhana/', images: [], relations: []
      },
      {
        title: 'A Lion’s Watermelon', cluster: 'Venice / single image / ordinary joy', period: '2022–2024',
        summary: '一个孩子闭眼吃西瓜的近距离画面成为 Rouhana 最广泛传播的图像之一。它在 2024 威尼斯的 South West Bank 展览中出现，把普通愉悦直接放进高度政治化的国际展览现场。',
        actions: ['在日常场景中近距离拍摄儿童', '使用浅景深将注意力集中在身体动作而非环境冲突', '保留西瓜这一兼具普通食物与历史象征的双重状态', '在展览中将单张图像从私人日常转入政治语境'],
        sourceUrl: 'https://news.artnet.com/art-world/a-powerful-collateral-show-in-venice-highlights-palestinians-lived-experiences-2467834', images: [],
        relations: [rel('展览', 'South West Bank — Venice 2024', '60th Venice Art Biennale collateral context')]
      },
      {
        title: 'Before Freedom / Before Freedom Pt. 2 — first solo presentations', cluster: 'solo exhibition / sequencing / gallery translation', period: '2024',
        summary: '2024 年系列从网络和编辑传播转向完整空间展示。Frieze No.9 Cork Street 与 TJ Boulting 的连续个展迫使长期摄影档案第一次形成墙面级 sequence。',
        actions: ['从长期档案中筛选图像', '把单张社交媒体传播重新组织成空间 sequence', '通过人物、景观、军事痕迹和日常细节交替控制观看节奏', '使用不同尺寸强化亲密图像与环境图像的关系'],
        sourceUrl: 'https://www.1854.photography/2024/06/adam-rouhana-before-freedom-palestine-tj-boulting/', images: [],
        relations: [rel('展览', 'Frieze No.9 Cork Street, London', '2024'), rel('展览', 'TJ Boulting, London', 'Before Freedom Pt. 2, 2024')]
      },
      {
        title: 'Before Freedom — Kunsthal Rotterdam', cluster: 'museum exhibition / documentary critique', period: '2024–2025',
        summary: 'Kunsthal 的博物馆展览明确把项目放在“西方媒体如何塑造巴勒斯坦视觉形象”的问题上。城市日常和占领基础设施被并置，但项目不会让后者吞没前者。',
        actions: ['从三年持续拍摄中编辑博物馆版本', '将不同城市的照片放入同一视觉地图', '保持自然光、低戏剧化的总体影调', '让士兵 / 监控与家庭 / 儿童图像在同一序列中发生张力'],
        sourceUrl: 'https://www.kunsthal.nl/en/plan-your-visit/exhibitions/adam-rouhana/', images: [],
        relations: [rel('展览', 'Kunsthal Rotterdam', '21 Dec 2024 – 23 Mar 2025')]
      },
      {
        title: 'The Logic of Truth', cluster: 'curated exhibition / truth / scenography / sound', period: '2025',
        summary: 'KYOTOGRAPHIE 个展把 Before Freedom 放进“摄影是否能够客观呈现真相”这一更大的问题中，并加入专门 scenography 与声音设计，使观看不再只是墙上一组照片。',
        actions: ['由 Taous Dahmani 策展重新编辑系列', '与 Spinning Plates 合作空间设计', '加入 Juline Hadaya 的声音设计', '在传统町屋建筑中控制照片尺度与观看路径', '把摄影的再现问题与展览空间本身结合'],
        sourceUrl: 'https://www.kyotographie.jp/en/programs/2025/adam-rouhana/', images: [],
        relations: [rel('展览', 'KYOTOGRAPHIE, Kyoto', '2025'), rel('策展', 'Taous Dahmani', 'The Logic of Truth')]
      },
      {
        title: 'Foam Talent 2026 — Before Freedom', cluster: 'emerging photography / institutional framing', period: '2026',
        summary: 'Foam 将 Rouhana 纳入 2026 Talent，把项目明确放在 memory、representation 与 ethics of seeing 的交叉处。此时作品已从个人长期计划进入国际新摄影人才体系。',
        actions: ['从长期系列中再次筛选 Foam 展示版本', '保持日常生活与历史意识并存', '以 Talent 杂志和群展的方式重新压缩项目脉络'],
        sourceUrl: 'https://www.foam.org/nl/articles/foam-talent-adam-rouhana', images: [],
        relations: [rel('展览', 'Foam Talent 2026, Amsterdam', '2026'), rel('出版', 'Foam Magazine #68 Talent', '2026')]
      }
    ],
    awards: ['Belfast Photo Festival Open Submission / Spotlight recognition 2024', 'Foam Talent 2026'],
    exhibitions: ['South West Bank — Venice 2024', 'Frieze No.9 Cork Street 2024', 'TJ Boulting 2024', 'Kunsthal Rotterdam 2024–2025', 'KYOTOGRAPHIE 2025', 'Foam Talent 2026'],
    sources: [
      { label: 'Adam Rouhana official', url: 'https://adamrouhana.com/' },
      { label: 'Kunsthal Rotterdam', url: 'https://www.kunsthal.nl/en/plan-your-visit/exhibitions/adam-rouhana/' },
      { label: 'KYOTOGRAPHIE', url: 'https://www.kyotographie.jp/en/programs/2025/adam-rouhana/' },
      { label: 'Foam Talent', url: 'https://www.foam.org/nl/articles/foam-talent-adam-rouhana' }
    ]
  },

  'ramona-jingru-wang': {
    artistId: 'ramona-jingru-wang',
    projectCoverage: '7 个摄影 / 出版 / 影像 / 社群项目节点已建立深档案 · 2020–2026',
    imageCoverage: '0 / 7 节点已有代表图像',
    note: 'Wang 的方法不是靠“赛博格造型”制造科幻感。她反而用柔光、卧室、朋友、触摸、衣服和照护关系去瓦解人 / 机器、东方 / 西方、自然 / 技术这些二分。她同时持续把照片转成书、报纸、录像和社群项目。',
    projects: [
      {
        title: 'wish you were not here', cluster: 'video / image reality / early moving-image work', period: '2020',
        summary: '早期录像已经把她后来的核心问题提出来：图像不是现实之外的记录，而会反过来介入关系、记忆和身体经验。',
        actions: ['使用 moving image 而非单张摄影', '围绕在场 / 缺席与图像关系进行编辑', '把个人影像与设计语言结合', '让录像本身成为摄影实践的延伸'],
        sourceUrl: 'https://www.mcny.org/artists-v-z', images: [],
        relations: [rel('奖项', 'BARON Prize', '2020 — video work')]
      },
      {
        title: '7-11', cluster: 'photobook / everyday archive / design', period: '2020s',
        summary: 'Wang 自行设计和制作摄影书，把日常图像通过出版物重新组织。她同时以设计师身份工作，因此书并不是作品的“包装”，而是图像之间关系的第二次创作。',
        actions: ['积累日常摄影档案', '筛选并建立页面 sequence', '自行参与版式 / 书籍设计', '通过跨页与纸张把照片重新组织为物件'],
        sourceUrl: 'https://www.mcny.org/artists-v-z', images: [], relations: []
      },
      {
        title: 'Family Album', cluster: 'newspaper / family / distribution', period: '2023',
        summary: '以自出版报纸形式处理家庭影像，并进入 Museum of the City of New York 首届摄影三年展。廉价、可折叠的 newspaper format 让家庭档案不同于传统精装摄影书。',
        actions: ['编辑私人 / 家庭照片', '把图像排成报纸页面', '使用可折叠、可传播的印刷形式', '让私人档案进入公共展览语境'],
        sourceUrl: 'https://www.mcny.org/artists-v-z', images: [],
        relations: [rel('展览', 'New York Now: Home — Museum of the City of New York', '2023')]
      },
      {
        title: 'My friends are cyborgs, but that’s okay', cluster: 'mockumentary / Asian diaspora / posthuman intimacy', period: '2020s–2026',
        summary: '项目假设亚洲身体在主导“人类社会”中被视为 cyborg。Wang 不用金属义肢和冷色科幻视觉，而是拍朋友在卧室、街道和私人空间中的柔软身体关系，把 posthuman 想象变成亲密日常。',
        actions: ['以朋友和亚洲 diaspora 身体为长期被摄对象', '借 Donna Haraway 的 cyborg 概念建立虚构世界规则', '使用 mockumentary 而非传统纪实的叙事位置', '以柔和漫射光、近距离、温和色彩拍摄', '强调皮肤、织物、手势与空间纹理', '避免视觉上把 cyborg 做成机械装扮', '通过多张人物关系建立“radically happy posthuman world”'],
        sourceUrl: 'https://www.foam.org/articles/foam-talent-ramona-jingru-wang', images: [],
        relations: [rel('展览', 'Foam Talent 2026', 'Amsterdam'), rel('出版', 'Foam Magazine #68 Talent', '2026')]
      },
      {
        title: 'Brenda & Clara / edition translation', cluster: 'edition / print material / intimacy', period: '2026',
        summary: 'Foam Editions 将系列中的图像转成有限版实体作品。这里可以具体看到作品离开屏幕后的物质参数：satin gloss paper、固定尺寸和 edition 结构。',
        actions: ['从系列中选择独立成立的双人图像', '输出为 inkjet print', '使用 satin gloss paper', '控制 43 × 35.6 cm 尺寸', '进入 edition of 10 + 2 AP 的艺术品流通结构'],
        sourceUrl: 'https://shop.foam.org/products/ramona-jingru-wang', images: [],
        relations: [rel('出版', 'Foam Editions', '2026 limited edition')]
      },
      {
        title: 'We Carry Each Other Home', cluster: 'Cantonese diaspora / care / long-term documentary', period: '2026–',
        summary: 'Magnum Foundation Fellowship 支持的新项目转向纽约粤语移民家庭，以代际照护作为“基础设施”来拍摄迁徙、劳动、排斥历史如何沉积在家庭内部。',
        actions: ['与 Manhattan Chinatown、Sunset Park、Flushing 的 3–4 个家庭长期合作', '进入家庭空间记录日常照护实践', '把当代生活与 19 世纪以来粤语移民劳动 / 排斥历史并置', '以 sustained documentary 而非一次性肖像完成项目'],
        sourceUrl: 'https://www.magnumfoundation.org/news/announcing-spring-2026-new-york-city-fellows', images: [],
        relations: [rel('奖项', 'Magnum Foundation New York City Fellowship', '2026')]
      },
      {
        title: 'Twin Cities: Held Together', cluster: 'community / exhibition / collective documentary', period: '2026',
        summary: '在 ICP Photobook Fest 相关展览中，Wang 的图像与其他摄影师共同处理邻里、互助与公共生活，延续她将“照护”从私人关系推向社会结构的方向。',
        actions: ['从社区与公共生活图像中编辑展览版本', '与多位摄影师形成群体叙事', '把个人作者视角放入共同社会议题框架'],
        sourceUrl: 'https://www.magnumfoundation.org/events/twin-cities-held-together-icp', images: [],
        relations: [rel('展览', 'Twin Cities: Held Together — ICP context', '2026')]
      }
    ],
    awards: ['BARON Prize 2020', 'Capture Writing Prize 2021', 'Magnum Foundation New York City Fellowship 2026', 'Foam Talent 2026'],
    exhibitions: ['New York Now: Home — Museum of the City of New York 2023', 'Foam Talent 2026', 'Twin Cities: Held Together 2026'],
    sources: [
      { label: 'Foam — My friends are cyborgs', url: 'https://www.foam.org/articles/foam-talent-ramona-jingru-wang' },
      { label: 'Museum of the City of New York', url: 'https://www.mcny.org/artists-v-z' },
      { label: 'Magnum Foundation Fellowship', url: 'https://www.magnumfoundation.org/news/announcing-spring-2026-new-york-city-fellows' }
    ]
  },

  'aspen-mays': {
    artistId: 'aspen-mays',
    projectCoverage: '8 个科学分类 / 天文 / 无相机摄影节点已建立深档案 · 2008–2024',
    imageCoverage: '1 / 8 节点已有代表图像',
    note: 'Mays 的作品最好不要只写成“科学 + 摄影”。她经常先拿一个极其具体、甚至荒诞的实验规则，然后真的把它执行到底：拍完一棵树所有叶子、订来所有 Einstein 图书、把萤火虫关进相机、使用天文台废弃材料、把天气雷达色彩转成 photogram。',
    projects: [
      {
        title: 'Map of the World (after Buckminster Fuller)', cluster: 'found object / model / epistemology', period: '2008',
        summary: 'Mays 拆开 Magic 8-Ball 内部的 20 面骰子，把它展开成二维结构，使一个用于“回答问题”的玩具和 Buckminster Fuller 的 Dymaxion Map 发生关系。',
        actions: ['拆解 Magic 8-Ball', '取出内部 20 面骰子', '把三维骰子结构展开为二维', '重新摄影 / 展示为知识模型', '借玩具占卜与地图系统并置“如何获得答案”'],
        sourceUrl: 'https://mocp.emuseum.com/objects/10474/map-of-the-world-after-buckminster-fuller', images: [], relations: []
      },
      {
        title: 'Untitled (Fireflies inside body of my camera)', cluster: 'camera experiment / living light / exposure', period: '2008–2009',
        summary: '她真的把萤火虫放进中画幅相机内部，让昆虫发出的光直接作用于胶片。相机从记录外界的设备变成装有活体光源的实验容器。',
        actions: ['捕捉萤火虫', '将其暂时放入 medium-format camera body', '让昆虫自身发光而非镜头成像', '曝光胶片', '显影并保留不可预测的化学 / 光学结果'],
        sourceUrl: 'https://www.hydeparkart.org/exhibition-archive/aspen-mays-from-the-offices-of-scientists/', images: [], relations: []
      },
      {
        title: 'Every leaf on a tree', cluster: 'exhaustive catalog / site-specific photography', period: '2009–2010',
        summary: '不是“拍很多叶子”，而是设定几乎不可能的全量规则：把工作室外一棵树上的每一片叶子都逐一拍摄。最终超过 900 张彩色照片形成一个由个体逼近整体的档案。',
        actions: ['选定一棵具体树作为封闭样本', '逐片取下 / 处理叶片并单独摄影', '维持相近的拍摄尺度', '完成 900+ 张 individual color photographs', '在 MCA 现场以密集系统方式安装'],
        sourceUrl: 'https://mcachicago.org/exhibitions/2010/aspen-mays',
        images: [img('https://media.mcachicago.org/image/IBI5OUKI/original.jpg', 'Every leaf 0339, 2009', '© Aspen Mays', 'https://mcachicago.org/exhibitions/2010/aspen-mays', 'MCA Chicago')],
        relations: [rel('展览', 'MCA Chicago — UBS 12 × 12', '2010')]
      },
      {
        title: 'Every book / Einstein Rainbows', cluster: 'library system / color classification / scientific archive', period: '2009–2010',
        summary: '她通过 Illinois Collegiate Inter-Library Loan 把能够借到的所有 Einstein 相关书籍集中起来，再按书脊颜色排成光谱并摄影。知识分类系统被重新转换为色彩分类。',
        actions: ['通过馆际互借系统检索 Einstein 图书', '尽可能订来全部可获得书目', '按书脊颜色而不是学术主题排序', '把书排列成弧形 / 彩虹结构', '逐组摄影形成 Einstein Rainbow 系列'],
        sourceUrl: 'https://mcachicago.org/exhibitions/2010/aspen-mays', images: [], relations: []
      },
      {
        title: 'From the Offices of Scientists', cluster: 'office installation / sculpture / knowledge production', period: '2010',
        summary: '她第一次大规模把摄影扩展成雕塑装置，把科学知识生产想象成办公室 / cubicle 环境：文件柜、法律便笺、桌子、陨石式巨石和伪科学物件共同构成现场。',
        actions: ['访问 / 研究科学家的办公室文化', '收集常见办公材料和科学视觉符号', '搭建 cubicle 式展览空间', '制作 Boulder Desk 等超现实雕塑', '让摄影、道具、文本和办公室家具处于同一系统'],
        sourceUrl: 'https://www.hydeparkart.org/exhibition-archive/aspen-mays-from-the-offices-of-scientists/', images: [],
        relations: [rel('展览', 'Hyde Park Art Center', '2010')]
      },
      {
        title: 'Sun Ruins / Punched Out Stars', cluster: 'observatory archive / rejected images / astronomy', period: '2010–2012',
        summary: 'Fulbright 在智利与天文学家工作期间，她进入天文机构中被拒绝、废弃的 prints、negatives 与 ephemera 档案。原本因为“不够科学”而退出知识系统的图像被重新作为作品材料。',
        actions: ['进入天文台与科研机构', '查看 rejected prints / negatives / ephemera', '从被排除的科研图像中进行选择', '重新裁切、打孔、编排和摄影', '让“失败科学图像”获得新的观看价值'],
        sourceUrl: 'https://mocp.emuseum.com/objects/10613/punched-out-stars-10', images: [], relations: []
      },
      {
        title: 'Hugo / California Dreaming', cluster: 'weather radar / photogram / dye', period: '2018–2021',
        summary: 'Mays 研究 Hurricane Hugo 的卫星 / 雷达图像，再用无相机 photogram collage 和高饱和 fabric dyes 重新制造天气视觉。颜色来自 coded emergency alerts 与 Doppler radar 的 false color 逻辑。',
        actions: ['研究 Hurricane Hugo 卫星图 / 天气雷达', '把天气图形转译成暗房形状', '制作 gelatin silver photogram collage', '使用 fabric dye 上色', '将预警系统中的人工色彩转成实体摄影材料'],
        sourceUrl: 'https://sfcamerawork.org/auction-2021-aspen-mays', images: [], relations: []
      },
      {
        title: 'Webs, Windows and Templates / Acorn Studies', cluster: 'darkroom process / environment / conditional visibility', period: '2023–2024',
        summary: '近期实践进一步把时间、环境和暗房过程绑在一起。Webs 系列把 taped web 带入暗房，每次曝光后逐步拆掉一部分，直到模板消失，因此每件作品无法重复。',
        actions: ['制作 taped web / template', '带入暗房进行第一次曝光', '每次曝光后拆除一部分结构', '反复曝光直到原模板完全消失', '使用 silver gelatin 与 fabric dye', '并行发展 oak / acorn、3D scan 与环境时间尺度研究'],
        sourceUrl: 'https://www.euqinomgallery.com/aspen-mays', images: [],
        relations: [rel('展览', 'Headlands Project Space / related research', '2024')]
      }
    ],
    awards: ['Fulbright Fellowship 2009–2010', 'American Academy of Arts and Letters Purchase Prize 2021'],
    exhibitions: ['MCA Chicago 2010', 'Hyde Park Art Center 2010', 'Sun Ruins 2011', 'Light Work / Newspaper Rock 2014', 'Headlands 2024'],
    sources: [
      { label: 'MCA Chicago', url: 'https://mcachicago.org/exhibitions/2010/aspen-mays' },
      { label: 'Hyde Park Art Center', url: 'https://www.hydeparkart.org/exhibition-archive/aspen-mays-from-the-offices-of-scientists/' },
      { label: 'Headlands Center for the Arts', url: 'https://www.headlands.org/artist/aspen-mays/' },
      { label: 'EUQINOM Gallery', url: 'https://www.euqinomgallery.com/aspen-mays' }
    ]
  },

  'taisuke-koyama': {
    artistId: 'taisuke-koyama',
    projectCoverage: '8 个城市表面 / 虹 / sensing 项目节点已建立深档案 · 2006–2023',
    imageCoverage: '1 / 8 节点已有代表图像',
    note: '小山泰介的重要性在于同一个图像不断成为下一次图像生成的材料：广告印刷虹 → 接写 → 水中浸泡 → 再摄影 → 折射 / 波纹 → 出版 / 扫描 / sensing。作品不是一次按快门，而是一串不断反馈的 translation。',
    projects: [
      {
        title: 'entropix', cluster: 'urban surface / macro / entropy', period: '2006–',
        summary: '他在东京步行时接近施工、拆除、贴纸、墙面等人工表面，把城市理解成不断代谢的 organism。标题把 entropy、picture、pixel 合成一个词。',
        actions: ['在东京持续步行观察城市表面', '靠近 construction / demolition / redevelopment 的临时表面', '使用 close-up / macro 视角切断地点识别', '偏好晴天以获得更强颜色、纹理和反光', '把划痕、材料老化、印刷点和黏着物当作主体'],
        sourceUrl: 'https://www.shift.jp.org/en/archives/2010/07/taisuke_koyama.html', images: [], relations: []
      },
      {
        title: 'Rainbow Form', cluster: 'printed rainbow / macro / halftone', period: '2009',
        summary: '起点是一张城市广告中的印刷彩虹。小山不是寻找自然虹，而是接近印刷表面，看贴纸残片、划痕、阴影、露珠如何放大 halftone dots，让“自然现象的图像”重新变成材料。',
        actions: ['在城市广告中发现印刷 rainbow graphic', '近距离拍摄印刷点阵', '刻意寻找表面受损 / 异常区域', '让露珠、阴影和刮痕进入图像', '通过微距把商业图像抽象化'],
        sourceUrl: 'https://www.shift.jp.org/en/archives/2010/07/taisuke_koyama.html',
        images: [img('https://www.designboom.com/cms/images/fiona02/koyama001.jpg', 'Rainbow Form / Rainbow Variations', '© Taisuke Koyama', 'https://www.shift.jp.org/en/archives/2010/07/taisuke_koyama.html', 'SHIFT / project documentation')],
        relations: [rel('奖项', 'Foam Talent', '2009')]
      },
      {
        title: 'Melting Rainbows', cluster: 'image feedback / material transformation', period: '2010',
        summary: 'Rainbow Form 之后，原来的照片不再只是最终作品，而成为新的物理对象与输入。彩虹图像被进一步处理、变形和再摄影，形成反馈回路。',
        actions: ['打印前一阶段 Rainbow Form 图像', '对打印物进行物理变化', '重新靠近表面摄影', '把上一次输出作为下一次拍摄对象', '保留失真而不恢复“原始彩虹”'],
        sourceUrl: 'https://granta.com/rainbow/', images: [], relations: []
      },
      {
        title: 'Rainbow Waves', cluster: 'seawater / refraction / rephotography', period: '2013',
        summary: '小山把此前的 Rainbow Form 照片浸入海水，再用 macro lens 重新拍摄。水面的波动和折射使原来的固定印刷点阵变成不断变化的光学结构。',
        actions: ['选择早期 Rainbow Form 打印物', '把照片浸入海水', '让水波覆盖图像表面', '通过 macro lens 再摄影', '利用 refracted light 与 rippling water 生成新结构'],
        sourceUrl: 'https://granta.com/rainbow/', images: [], relations: []
      },
      {
        title: 'Rainbow Variations', cluster: 'iterative system / publication / image generations', period: '2009–2015',
        summary: 'Rainbow 系列逐渐成为总项目：同一个最初来自广告的彩虹图像经过多轮拍摄、印刷、浸泡、再摄影和编辑，被不断放大和偏离来源。2015 摄影书第一次把这些 generations 系统整理。',
        actions: ['把多个 Rainbow 子系列汇总', '比较同一来源图像经过不同物理过程后的差异', '从大量 variation 中编辑约 70 件', '与 Maximage 合作书籍编辑 / 设计', '用出版物把反馈过程转成可翻阅 sequence'],
        sourceUrl: 'https://www.shashasha.co/jp/book/rainbow-variations', images: [],
        relations: [rel('出版', 'RAINBOW VARIATIONS', '2015')]
      },
      {
        title: 'LIGHT FIELD / PHOTONS', cluster: 'light / digital sensing / experimental photography', period: '2014–2015',
        summary: '驻留伦敦前后，他把兴趣从城市“表面”进一步推向摄影设备如何 sensing 光本身。摄影对象不再稳定地位于镜头前，而是由传感、噪声与设备响应共同生成。',
        actions: ['研究数字相机对光的 sensing', '从具体物体转向 light field / photon 层面的图像', '将实验结果整理为摄影与出版物', '弱化传统取景中的地点识别'],
        sourceUrl: 'https://www.shashasha.co/en/artist/taisuke-koyama', images: [],
        relations: [rel('出版', 'LIGHT FIELD / PHOTONS', '2015')]
      },
      {
        title: 'VESSEL / POST BODY–NATURE', cluster: 'post-digital / body / nature / technology', period: '2017',
        summary: '2017 前后的项目把摄影技术、身体与自然的关系重新混合。重点从“城市中发现的抽象”转向成像装置怎样参与定义身体和自然。',
        actions: ['将摄影与视频 / 实验图像并用', '把身体与自然视作 sensing 对象而不是稳定实体', '通过出版物形成跨项目对照', '延续图像在不同媒介之间的 translation'],
        sourceUrl: 'https://www.shashasha.co/en/artist/taisuke-koyama', images: [], relations: []
      },
      {
        title: 'PHASE TRANS / recent sensing works', cluster: 'hand scanner / 3D / sensing / extended photography', period: '2018–2023',
        summary: '近期实践明确转向 hand scanner、3D technology 等成像设备，把摄影理解为更广义的 sensing。设备怎样接触、扫描和重建对象，成为画面结构本身。',
        actions: ['使用 hand scanner 获取非传统相机图像', '引入 3D technology / scanning', '研究设备移动与对象表面之间的误差', '把扫描、摄影和视频结果共同输出', '以 TOKYO PHOTOGRAPHIC RESEARCH 延伸到城市与社会研究'],
        sourceUrl: 'https://www.shashasha.co/jp/artist/taisuke-koyama', images: [],
        relations: [rel('出版', 'PHASE TRANS', '2023')]
      }
    ],
    awards: ['Foam Talent 2009', 'Japanese Government Overseas Study Program for Artists — London residency 2014–2016'],
    exhibitions: ['Rainbow Variations — multiple exhibition contexts', 'International Color Science and Art Center 2019'],
    sources: [
      { label: 'SHIFT interview', url: 'https://www.shift.jp.org/en/archives/2010/07/taisuke_koyama.html' },
      { label: 'Granta — Rainbow', url: 'https://granta.com/rainbow/' },
      { label: 'shashasha artist profile', url: 'https://www.shashasha.co/en/artist/taisuke-koyama' },
      { label: 'RAINBOW VARIATIONS publication', url: 'https://www.shashasha.co/jp/book/rainbow-variations' }
    ]
  }
};