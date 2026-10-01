import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const ayonVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/belkis-ay%C3%B3n';
const ayonNkame = 'https://elmuseo.org/exhibition/nkame-a-retrospective-of-cuban-printmaker-belkis-ayon/';
const ayonMet = 'https://www.metmuseum.org/art/collection/search/920616';

const vicunaVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/cecilia-vicu%C3%B1a';
const vicunaAward = 'https://www.labiennale.org/en/news/katharina-fritsch-and-cecilia-vicu%C3%B1a-golden-lions-lifetime-achievement-biennale-arte-2022';

const bennaniCaps = 'https://renaissancesociety.org/exhibitions/546/meriem-bennani-life-on-the-caps/';
const bennaniNottingham = 'https://www.nottinghamcontemporary.org/whats-on/meriem-bennani/';
const bennaniBampfa = 'https://bampfa.org/program/collection-focus-meriem-bennani-life-caps';

const zvavahera2021 = 'https://www.davidzwirner.com/exhibitions/2021/portia-zvavahera-ndakaoneswa-murima';
const zvavaheraVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/portia-zvavahera';
const zvavaheraExhibitions = 'https://www.davidzwirner.com/artists/portia-zvavahera/exhibitions';

const talbotVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/emma-talbot';
const talbotWhitechapel = 'https://www.whitechapelgallery.org/exhibitions/emma-talbot/';
const talbotHome = 'https://www.emmatalbot.org.uk/';

const quarlesSlg = 'https://www.southlondongallery.org/exhibitions/christina-quarles-in-likeness/';
const quarlesVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/christina-quarles';
const quarlesBerlin = 'https://www.smb.museum/en/exhibitions/detail/christina-quarles/';

export const archiveBatch73: Record<string, ArtistArchive> = {
  'venice-belkis-ayon': {
    artistId: 'venice-belkis-ayon',
    projectCoverage: '3 个 Abakuá / monumental collagraph / historical-recovery 节点已建立深档案 · 1991–2022',
    imageCoverage: '0 / 3 项目暂不使用版权受限图像外链',
    note: '精选作品与历史重估节点，尚非作品全集。Ayón 的核心不是“黑白版画风格”，而是她用 collagraph 的物质结构重新编写 Abakuá 神话，并通过无口人物、巨型多联幅与极细灰阶建立女性在封闭男性仪式体系中的视觉位置。',
    projects: [
      {
        title: 'Nlloro',
        cluster: 'monumental collagraph / Abakuá / multi-panel print',
        period: '1991',
        summary: 'Nlloro 是一件约 2.16 × 3 米的大型九联 collagraph，把通常与版画相关的小尺度彻底放大成壁画式场面。人物被压进高密度黑白灰纹理，面部几乎只剩眼睛。',
        actions: [
          '在 cardboard matrix 上拼贴不同吸墨性和纹理的材料制作 collograph plate',
          '用多个独立版块组合成接近建筑尺度的九联作品',
          '通过不同表面材料而不是彩色油墨制造细密 blacks、whites、greys',
          '从 Abakuá founding myth 提取人物和仪式关系，但重新安排女性 Sikán 的视觉中心性',
          '把 mouthless faces 与 oversized eyes 变成关于沉默、观看和排除的持续视觉规则',
        ],
        sourceUrl: ayonMet,
        images: [],
        relations: [rel('收藏', 'The Metropolitan Museum of Art', 'Nlloro · acquired 2025')],
      },
      {
        title: 'Abakuá / Sikán collagraph cycle',
        cluster: 'secret society myth / female protagonist / textured printmaking',
        period: 'late 1980s–1999',
        summary: 'Ayón 几乎整个成熟创作都反复进入 Afro-Cuban Abakuá fraternal society 的 founding myth。作为自称 atheist 的女性，她并不复制宗教图像，而是借 Sikán 的背叛、牺牲和沉默处理现实中的伦理、性别和精神困境。',
        actions: [
          '长期研究 Abakuá oral codes、symbols 与 founding narrative',
          '把 Judeo-Christian scenes、个人梦境和 Abakuá characters 交叉使用',
          '让 Sikán 反复成为构图中心，而现实 Abakuá 仪式排除女性',
          '以 heterogeneous plate materials 生成皮肤、衣物、背景之间不同触感',
          '坚持几乎完全 monochrome palette，使光泽、吸墨和纹理差异承担颜色功能',
        ],
        sourceUrl: ayonVenice,
        images: [],
        relations: [],
      },
      {
        title: 'Nkame → The Milk of Dreams historical return',
        cluster: 'retrospective reconstruction / archive / canon recovery',
        period: '2016–2022',
        summary: '艺术家 1999 年去世后，Nkame 巡回回顾展重新整理其大型版画、矩阵与创作脉络；2022 Venice 又将她放进身体变形、神话和被遗漏女性谱系的历史对话中。这一节点记录作品如何被重新进入国际艺术史。',
        actions: [
          '由 Estate 与 curator Cristina Vives 系统整理散布作品与历史文件',
          '用 retrospective format 重新建立早期到晚期 collagraph 的方法连续性',
          '跨美国多家机构巡回而非只做一次纪念展',
          '2022 Venice 将 Ayón 与当代艺术家并置，作为 transhistorical exhibition structure 的历史锚点',
          '把艺术家生前受经济与交通限制的 Venice 1993 经历与 2022 historical return 形成时间回路',
        ],
        sourceUrl: ayonNkame,
        images: [],
        relations: [
          rel('展览', 'Nkame: A Retrospective of Cuban Printmaker Belkis Ayón', 'Fowler Museum 2016 onward · touring'),
          rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale'),
        ],
      },
    ],
    awards: [],
    exhibitions: ['Biennale Arte — 1993 participation', 'Nkame retrospective — 2016 onward', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'La Biennale · Belkis Ayón 2022', url: ayonVenice },
      { label: 'El Museo del Barrio · Nkame', url: ayonNkame },
      { label: 'The Met · Nlloro', url: ayonMet },
    ],
  },

  'venice-cecilia-vicuna': {
    artistId: 'venice-cecilia-vicuna',
    projectCoverage: '3 个 precario / decolonial painting / Venice ecology 关键节点已建立深档案 · 1966–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选方法节点，尚非作品全集。Vicuña 的关键是让“作品不稳定”本身成为政治方法：precarios 可以被潮水和天气改变；绘画把被殖民宗教图像反向改写；语言、绳、垃圾和海岸共同形成临时结构。',
    projects: [
      {
        title: 'Precarios',
        cluster: 'anti-monument / found material / weather + tide',
        period: '1966–',
        summary: '自 1966 年开始的 precarios 是持续数十年的反纪念碑实践：用羽毛、木枝、线、石、塑料或现场碎片搭出极小、脆弱的结构，常直接留在原地接受风、潮汐和消失。',
        actions: [
          '在海岸、荒地和城市现场拾取低价值 found materials',
          '只用最少绑扎、平衡和排列形成临时结构',
          '避免把作品加固成永久 monument',
          '允许 wind、water、tide、decay 和人的移动改变或彻底带走作品',
          '通过现场摄影 / 文字留下部分痕迹，但不把 documentation 当成完整替代物',
        ],
        sourceUrl: vicunaVenice,
        images: [],
        relations: [],
      },
      {
        title: 'Leoparda de Ojitos / early decolonial paintings',
        cluster: 'Indigenous imagination / painting / colonial icon reversal',
        period: '1971–1977',
        summary: 'Vicuña 研究殖民时期 Cuzco Indigenous painters 被迫绘制和崇拜西班牙宗教图像的历史，再把本土女性想象、动物身体与显露的性别身体置于中心，使 portrait tradition 从内部反向工作。',
        actions: [
          '回看 16th-century Cuzco colonial religious painting 的 forced-conversion context',
          '保留 icon / frontal portrait 的视觉权威感，同时替换其主体',
          '让 leopard、eyes、tree、genitals 等元素公开占据画面',
          '以 Indigenous woman imagination 而不是殖民宗教规范决定象征关系',
          '把个人 exile / political rupture 与更长殖民视觉史并置',
        ],
        sourceUrl: vicunaVenice,
        images: [],
        relations: [],
      },
      {
        title: 'NAUfraga',
        cluster: 'Venice debris / rope / sinking city / new precario',
        period: '2022',
        summary: '为 Venice 制作的新 precario 使用城市周边拾得的 ropes 与 debris。标题把 navis（船）和 frangere（破裂）结合成“shipwreck”，同时把全球资源开发与 Venice 正在下沉的物质现实连接。',
        actions: [
          '在 Venice 周边收集真实 ropes、debris 与被丢弃材料',
          '沿用 precario 的轻量、可变与非永久结构',
          '根据水城环境让绳索、漂浮 / 船难意象进入安装',
          '通过词源拼接建立 NAUfraga 这一语言结构',
          '把 climate / extractive crisis 落到现场垃圾与城市下沉，而不是抽象生态图像',
        ],
        sourceUrl: vicunaVenice,
        images: [],
        relations: [
          rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Central Pavilion'),
          rel('奖项', 'Golden Lion for Lifetime Achievement', 'Venice Biennale 2022'),
        ],
      },
    ],
    awards: ['Golden Lion for Lifetime Achievement — Venice Biennale 2022'],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'La Biennale · Cecilia Vicuña 2022', url: vicunaVenice },
      { label: 'La Biennale · Lifetime Achievement announcement', url: vicunaAward },
    ],
  },

  'venice-meriem-bennani': {
    artistId: 'venice-meriem-bennani',
    projectCoverage: '3 个 CAPS sci-fi trilogy 节点已建立深档案 · 2018–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，聚焦 Life on the CAPS 三部曲。Bennani 的方法不是“用搞笑动画谈移民”，而是先建立一整套未来岛屿制度，再让 documentary、phone footage、music video、reality TV 与 CG animation 在这个制度里不断互相污染。',
    projects: [
      {
        title: 'Party on the CAPS',
        cluster: '8-channel video / teleportation border / fictional detention island',
        period: '2018–2019',
        summary: 'CAPS 世界的第一章：未来 air travel 已被 teleportation 取代，试图非法瞬移进入美国的人被拦截到大西洋中央的磁封岛。拘留区逐渐长成具有自身音乐、语言和抵抗文化的城市。',
        actions: [
          '先写出 teleportation、border interception 与 island detention 的制度规则',
          '把 live-action Moroccan / diaspora social footage 与 bright CG animation 混合',
          '使用 smartphone、reality-TV 和 music-video 式快速剪辑形成虚构纪录片感',
          '与 vernacular / Chaabi music 建立高密度节奏',
          '以 eight-channel installation 让 CAPS 不只是影片地点，而变成同时发生的社会空间',
        ],
        sourceUrl: bennaniNottingham,
        images: [],
        relations: [],
      },
      {
        title: 'Guided Tour of a Spill (CAPS Interlude)',
        cluster: 'interlude / spill / guided-tour fiction / world expansion',
        period: '2021',
        summary: '三部曲中间章节以“导览”形式扩展 CAPS 的物理和政治世界，把 migration、biotechnology、state control 与岛上逐渐形成的抵抗网络继续向外推。',
        actions: [
          '不重新解释世界观，而是假设观众已经进入 CAPS 制度内部',
          '采用 guided-tour / informational-video 的叙述语法扩展岛屿设施',
          '继续把 documentary footage 与 cartoon / CG overlay 无缝切换',
          '用幽默和视觉过量抵消 dystopia 常见的冷硬科幻语气',
          '作为 interlude 为 final chapter 的世代与政治结构补充中间信息',
        ],
        sourceUrl: bennaniBampfa,
        images: [],
        relations: [],
      },
      {
        title: 'Life on the CAPS',
        cluster: 'final chapter / migrant generations / live action + CG + music',
        period: '2022',
        summary: '最终章把最初 detention camp 推进到三代之后的 megalopolis：被拦截移民的后代已经建立城市、rituals 与 resistance。影片在 DNA 微观尺度、global surveillance 与集体政治之间反复缩放。',
        actions: [
          '研究 island societies、biotechnology 与 vernacular music 并写入 fictional world',
          '与 Fatima Al Qadiri 等音乐合作形成贯穿影片的 sonic identity',
          '把 live-action、computer-generated animation、phone footage、documentary、science-fiction、reality-TV 语言混剪',
          '通过 cartoon crocodile avatars 等角色让代际历史可以直接叙述',
          '在个人经验与 state / border system 的宏观尺度之间持续快速切换',
        ],
        sourceUrl: bennaniCaps,
        images: [],
        relations: [
          rel('展览', 'Life on the CAPS — The Renaissance Society', '2022 · debut'),
          rel('展览', 'Nottingham Contemporary', '7 May–4 Sep 2022'),
        ],
      },
    ],
    awards: [],
    exhibitions: ['Life on the CAPS trilogy — 2018–2022', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'The Renaissance Society · Life on the CAPS', url: bennaniCaps },
      { label: 'Nottingham Contemporary · Life on the CAPS', url: bennaniNottingham },
      { label: 'BAMPFA · CAPS trilogy', url: bennaniBampfa },
    ],
  },

  'venice-portia-zvavahera': {
    artistId: 'venice-portia-zvavahera',
    projectCoverage: '3 个 dream-painting / stencil-print / Venice catharsis 节点已建立深档案 · 2020–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目 / 展览节点，尚非作品全集。Zvavahera 的梦不是题材素材库，而是工作流程：梦境先作为尚未理解的警告出现，再通过 oil-based printing ink、oil bar、stencil / batik-like pattern 与重复绘画慢慢被“读懂”。',
    projects: [
      {
        title: 'Ndakavata pasi ndikamutswa nekuti anonditsigira',
        cluster: 'dream / spiritual rescue / London solo',
        period: '2020',
        summary: '这一阶段把梦中被压倒、被救起、家庭与 spiritual presence 的体验转成大尺幅人物绘画，为之后更明确的 dark-side visions 建立语言。',
        actions: [
          '从醒后仍有强烈情绪和图像残留的 dreams 开始画面',
          '使用 oil-based printing ink 与 oil bar 建立透明 / 覆盖层',
          '把 Zimbabwean textile / block-print-like pattern 转译为 stencil rhythm',
          '让 family members、protective figures 与 threatening presences 在同一画面互相包裹',
          '不先解释梦的意义，而让反复绘画过程逐渐生成个人解释',
        ],
        sourceUrl: zvavaheraExhibitions,
        images: [],
        relations: [rel('展览', 'David Zwirner London solo presentation', '15 Sep–31 Oct 2020')],
      },
      {
        title: 'Ndakaoneswa murima',
        cluster: 'recurring nightmare / owl spirits / pattern layering',
        period: '2021',
        summary: '“I was made to see the dark side”来自反复梦境。cave、water、owl-like beings、女性 apparition 与家庭救援者成为 recurring cast；颜色与 layered batik-like designs 则区分危险、保护和逃离路径。',
        actions: [
          '记录 recurring dreams 并追踪同一 creatures 在多幅作品中的再次出现',
          '用 stencil / dotted batik-like pattern 区分 water、night sky、cocoon 等不同空间状态',
          '使用 oil-based printing ink 与 oil bar 反复覆盖 linen / canvas',
          '让 owl-like spirits 既像威胁又像 message carriers，而不固定成单一符号',
          '通过多幅画之间的角色重复，让个人梦境形成连续 visual mythology',
        ],
        sourceUrl: zvavahera2021,
        images: [],
        relations: [rel('展览', 'Ndakaoneswa murima — David Zwirner New York', '4 Nov–17 Dec 2021')],
      },
      {
        title: 'The Milk of Dreams — four new paintings',
        cluster: 'spiritual catharsis / cloak-like colour / Venice',
        period: '2022',
        summary: 'Venice 的四幅新作继续把 painting 当作 spiritual catharsis。Kudonhedzwa kwevanhu 等画面里人物像被旋转色彩构成的 cloak / vessel 包裹，在存在平面之间漂浮，owl-like creatures 继续作为警告或引导者出现。',
        actions: [
          '从新的 disturbing visions 中选择四组最需要处理的 dream images',
          '用 painting + stencilling 形成多层 pattern 与 luminous colour',
          '以 oil stick 和 fine brushwork 区分 ghostly bodies 与 surrounding vessel',
          '把 natural fragments、animals 与 spiritual figures 组织为同一感知空间',
          '让创作过程承担面对 subconscious warning、寻找 lesson / release 的功能',
        ],
        sourceUrl: zvavaheraVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: [],
    exhibitions: ['David Zwirner London — 2020', 'Ndakaoneswa murima — New York 2021', 'The Milk of Dreams — Venice 2022'],
    sources: [
      { label: 'David Zwirner · Ndakaoneswa murima', url: zvavahera2021 },
      { label: 'La Biennale · Portia Zvavahera 2022', url: zvavaheraVenice },
      { label: 'David Zwirner · exhibitions', url: zvavaheraExhibitions },
    ],
  },

  'venice-emma-talbot': {
    artistId: 'venice-emma-talbot',
    projectCoverage: '3 个 silk painting / aging / ecological future 关键阶段已建立深档案 · 2021–2023',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Talbot 的丝绸不是普通绘画支撑物：没有硬画框的垂挂、可穿行性、文字和 simplified figure 共同构成一种反 monumental、偏向 feminist writing / drawing 的空间语言。',
    projects: [
      {
        title: 'Where Do We Come From? What Are We? Where Are We Going?',
        cluster: 'acrylic on silk / Gauguin reversal / ecological escape',
        period: '2021–2022',
        summary: 'Talbot 借用 Gauguin 1897–98 画作标题，但将“逃离文明、返回自然”的殖民幻想反转成当代生态问题：人在环境灾难中是否还能宣称回到一个纯粹自然？',
        actions: [
          '在大幅 unstretched silk 上直接使用 acrylic 形成 curtain-like hanging',
          '用 calligraphic text 让问题句和人物在同一表面共同阅读',
          '保留 simplified figure 与 mythological motif 而不追求写实空间',
          '明确以 Gauguin self-exile / colonial Tahiti context 作为需要批判的艺术史前提',
          '把 technology、nature、urbanism、ecopolitics 与 personal interior experience 写进同一长幅绘画',
        ],
        sourceUrl: talbotVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
      {
        title: 'The Age / L’Età',
        cluster: 'older woman / Twelve Labours / silk + animation + sculpture',
        period: '2022',
        summary: 'Max Mara Art Prize commission 从 Klimt《The Three Ages of Woman》里低头羞耻的老妇人出发，把她重新写成具有 agency 的主角，通过类似 Hercules 十二项劳动的 trials 处理 power、nature、care 和社会重建。',
        actions: [
          '用 six-month Italian residency 调研 textile、permaculture、animation 等不同制作技术',
          '重看 Klimt 对 ageing female body 的既有艺术史位置',
          '把 older woman 从被观看对象改写成执行 trials 的行动者',
          '混合 acrylic on silk、mixed-media sculpture 与 animation',
          '让每项 trial 对应 contemporary society / ecology 的具体危机与重建可能',
        ],
        sourceUrl: talbotWhitechapel,
        images: [],
        relations: [
          rel('奖项', 'Max Mara Art Prize for Women', 'winner / commission'),
          rel('展览', 'The Age / L’Età — Whitechapel Gallery', '30 Jun–4 Sep 2022'),
        ],
      },
      {
        title: '21st Century Herbal',
        cluster: '28-metre silk hanging / contemporary herbal / healing knowledge',
        period: '2022–2023',
        summary: '项目把 medieval / early-modern herbal 的植物知识形式转写到 21 世纪：长达约 28 米的 silk hanging 通过植物、身体、文字和生态关系寻找新的 healing / survival vocabulary。',
        actions: [
          '以 historical herbal / plant-knowledge format 作为长篇叙事结构',
          '在约 28-metre acrylic-on-silk hanging 上连续组织图像与文字',
          '利用柔软丝绸让阅读成为沿空间移动而非正面看一张画',
          '把 contemporary ecological crisis 与 healing knowledge 连接',
          '在 Frieze special project 后继续发展为 museum installation',
        ],
        sourceUrl: talbotHome,
        images: [],
        relations: [
          rel('展览', '21st Century Herbal — Frieze London Special Project', '2022'),
          rel('展览', 'Beiqiu Museum, Nanjing', '2023'),
        ],
      },
    ],
    awards: ['Max Mara Art Prize for Women — winner / commission 2020–2022'],
    exhibitions: ['The Milk of Dreams — Venice 2022', 'The Age / L’Età — Whitechapel 2022', '21st Century Herbal — Frieze 2022 / Beiqiu 2023'],
    sources: [
      { label: 'La Biennale · Emma Talbot 2022', url: talbotVenice },
      { label: 'Whitechapel Gallery · The Age / L’Età', url: talbotWhitechapel },
      { label: 'Emma Talbot official archive', url: talbotHome },
    ],
  },

  'venice-christina-quarles': {
    artistId: 'venice-christina-quarles',
    projectCoverage: '3 个 ambiguous-body / digital-stencil / spatial-installation 节点已建立深档案 · 2021–2023',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目 / 展览节点，尚非作品全集。Quarles 的身体扭曲不是自由即兴：她把 dripping 与 digital manipulation、laser-cut stencil、combs、dry brushes 等高度设计的程序并置，让身体一直处在“看得懂但无法稳定归类”的状态。',
    projects: [
      {
        title: 'In Likeness',
        cluster: 'institutional survey / embodied ambiguity / paintings + works on paper',
        period: '2021',
        summary: 'South London Gallery 首次大型伦敦机构个展把 paintings 与 works on paper 并置，集中呈现她所谓“living in a body rather than looking at a body”的观看差异：人物既亲密又难以被固定为单一性别、种族或姿势。',
        actions: [
          '让 limbs、torsos、faces 在同一画面互相穿插、压扁和合并',
          '使用 vivid colour 与 textured paint 让 foreground / background 难以稳定分离',
          '把 domestic objects 画得熟悉但空间关系故意失准',
          '同时展示 drawings 与 large-scale paintings，让身体语法从线条到画布可比较',
          '以 institutional survey 重新编排多个年份作品之间的重复 gesture',
        ],
        sourceUrl: quarlesSlg,
        images: [],
        relations: [rel('展览', 'Christina Quarles: In Likeness — South London Gallery', '18 Jun–29 Aug 2021')],
      },
      {
        title: 'The Milk of Dreams — 2021 body paintings',
        cluster: 'drip + laser stencil / geometric planes / unstable bodies',
        period: '2021 works · exhibited 2022',
        summary: 'Venice 展出 Hangin’ There, Baby、Gone on Too Long、Just a Lil’ Longer 等 2021 作品。身体被 curtain、tablecloth、flat plane 等几何表面切断或穿透，既像困在画里又不断越过画框。',
        actions: [
          '先允许 paint drips、lines、smears 产生偶然形态',
          '再使用 graphic-design background 的 digital manipulation 调整空间关系',
          '制作 laser-cut stencils 生成过于整齐的 geometric / domestic pattern',
          '用 combs、dry brushes、scrapes 破坏光滑图层',
          '让 limbs 穿过 depthless planes，使一具身体无法被单一轮廓封闭',
        ],
        sourceUrl: quarlesVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Central Pavilion')],
      },
      {
        title: 'Collapsed Time',
        cluster: 'full-room installation / gauze scrims / reveal + obscure',
        period: '2023',
        summary: 'Hamburger Bahnhof 的机构个展把绘画进一步推到空间：半透明 gauze panels 像 theatre scrims 一样切开整个展厅，使作品会随着观众位置被遮挡、透视或重叠，二维身体的不稳定性扩大成真实建筑经验。',
        actions: [
          '不把 paintings 仅按墙面顺序悬挂，而先设计整个 exhibition-space choreography',
          '用 translucent gauze panels 切分展厅视线',
          '借 theatre scrim 的 reveal / obscure 机制改变不同作品的同时可见性',
          '让观众走动时不断生成新的 painting-to-painting overlaps',
          '把画中被平面切割的 bodies 转译成观众身体被真实隔断 / 透视的空间关系',
        ],
        sourceUrl: quarlesBerlin,
        images: [],
        relations: [rel('展览', 'Christina Quarles: Collapsed Time — Hamburger Bahnhof', '24 Mar–17 Sep 2023')],
      },
    ],
    awards: [],
    exhibitions: ['In Likeness — South London Gallery 2021', 'The Milk of Dreams — Venice 2022', 'Collapsed Time — Hamburger Bahnhof 2023'],
    sources: [
      { label: 'South London Gallery · In Likeness', url: quarlesSlg },
      { label: 'La Biennale · Christina Quarles 2022', url: quarlesVenice },
      { label: 'Hamburger Bahnhof · Collapsed Time', url: quarlesBerlin },
    ],
  },
};
