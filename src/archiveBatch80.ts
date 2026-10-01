import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const lawlerMoma = 'https://www.moma.org/calendar/exhibitions/1646';
const lawlerVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/louise-lawler';

const trockelVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/rosemarie-trockel';
const trockelMoma = 'https://www.moma.org/artists/5933-rosemarie-trockel';
const trockelMade = 'https://www.moma.org/collection/works/116287';
const trockelPrint = 'https://www.moma.org/collection/works/61347';

const sillmanVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/amy-sillman';
const sillmanMoma = 'https://www.moma.org/artists/28808-amy-sillman';
const sillmanZines = 'https://www.amysillman.com/zines/';

const accardiVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/carla-accardi';
const accardiTent = 'https://www.moma.org/calendar/exhibitions/4721';
const accardiMoma = 'https://www.moma.org/artists/41715-carla-accardi';

const ursutaVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/andra-ursu%C5%A3a';
const ursutaVoid = 'https://www.davidzwirner.com/exhibitions/2021/andra-ursuta-void-fill';
const ursutaPredator = 'https://www.davidzwirner.com/artworks/andra-ursuta-predators-r-us-a3bb8';
const ursutaVeniceZwirner = 'https://www.davidzwirner.com/news/2022/andra-ursuta-in-venice-biennale-2022';

const humphriesVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/jacqueline-humphries';
const humphriesMet = 'https://www.metmuseum.org/art/collection/search/889021';
const humphriesMoma = 'https://www.moma.org/collection/works/130778';
const humphriesPompidou = 'https://www.centrepompidou.fr/fr/ressources/oeuvre/KQMAEDF';

export const archiveBatch80: Record<string, ArtistArchive> = {
  'venice-louise-lawler': {
    artistId: 'venice-louise-lawler',
    projectCoverage: '3 个 institutional photograph / adjusted-to-fit / dark-museum installation 节点已建立深档案 · 1972–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Lawler 的核心不是简单“拍别人的作品”，而是追踪艺术品怎样被收藏、装箱、拍卖、照明、裁切、重印和重新安置；图像的制度位置本身就是她真正的 subject。',
    projects: [
      {
        title: 'Birdcalls',
        cluster: 'sound work / male-artist names / institutional gender critique',
        period: '1972/1981',
        summary: 'Lawler 把一长串男性艺术家的姓名念成夸张鸟叫，原本来自一次深夜搬运艺术品时对“女性在艺术世界里如何被听见”的反应。作品把姓名、声望和 canonical masculinity 从严肃文化资本变成荒诞声响。',
        actions: [
          '收集当时艺术世界中高度可见的 male artist names 作为 script',
          '不用正常朗读，而把每个名字拆成 whistle、squawk、chirp 等 bird-call-like vocalisation',
          '以 artist voice 直接录音，使 institutional critique 不依赖 photographic image',
          '保留 repeated names 与 vocal rhythm，让 canon 本身听起来像群体动物叫声',
          '在后来的 exhibition / publication 中反复重放，使 early gender critique 与 Lawler 的 institutional photography 形成方法上的连续性',
        ],
        sourceUrl: lawlerMoma,
        images: [],
        relations: [rel('展览', 'Louise Lawler: WHY PICTURES NOW — MoMA', '2017 survey context')],
      },
      {
        title: 'Pictures / adjusted to fit',
        cluster: 'art-in-context photography / digital stretch / site-responsive image',
        period: '1980s–ongoing',
        summary: 'Lawler 长期拍摄 collectors homes、museum storage、auction previews 与 installation crews 中的艺术品，随后又把既有照片按新墙面比例数字拉伸成 adjusted-to-fit images。作品不再拥有固定“正确构图”，而持续服从下一次展示制度。',
        actions: [
          '进入 private collection、museum storage、auction house、installation site 拍摄 artworks 在非理想展示状态中的位置',
          '把 artwork 与 socket、label、sofa、crate、guard rail、wall edge 等 surrounding infrastructure 同框',
          '在后续展览中重新调取自己的旧 photograph，而不是不断生产全新 image',
          '按具体 wall / architecture dimensions 对 digital file 非等比 stretch / crop，使图像主动变形',
          '允许同一 source image 被做成 print、vinyl、paperweight、tracing 等不同载体，强调 meaning 随 circulation 改变',
        ],
        sourceUrl: lawlerMoma,
        images: [],
        relations: [rel('展览', 'Louise Lawler: WHY PICTURES NOW — MoMA', '2017')],
      },
      {
        title: 'No Exit / Hair (adjusted to fit)',
        cluster: 'dark museum photography / Donald Judd retrospective / room-scale vinyl',
        period: '2020–2022',
        summary: 'No Exit 源自 MoMA 2020 Donald Judd retrospective 闭馆后的夜间拍摄：灯光关闭，只剩展厅、作品与残余亮度。Venice 2022 中，这些照片又被放在铺满房间的 Hair (adjusted to fit) 图像之上，使 Lawler 的再摄影、institutional display 与建筑级数字变形重叠。',
        actions: [
          '在 MoMA Donald Judd retrospective 结束营业、gallery lights 关闭后进入空间拍摄',
          '保留 low-light condition，使 Judd objects 从 canonical presentation 退回幽暗的夜间物体',
          '选择既有 Hair photograph 并按 Venice room dimensions 进行 adjusted-to-fit stretch',
          '将 Hair 作为 floor / wall scale environment，再把 No Exit prints 放置其中',
          '使 Judd、MoMA、Lawler 自己旧作与 Venice display system 形成多重“作品在谁的作品里”嵌套',
        ],
        sourceUrl: lawlerVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Central Pavilion')],
      },
    ],
    awards: [],
    exhibitions: ['Louise Lawler: WHY PICTURES NOW — MoMA 2017', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'MoMA · WHY PICTURES NOW', url: lawlerMoma },
      { label: 'La Biennale · Louise Lawler 2022', url: lawlerVenice },
    ],
  },

  'venice-rosemarie-trockel': {
    artistId: 'venice-rosemarie-trockel',
    projectCoverage: '3 个 book-draft / computer-knit painting / yarn-print 方法阶段已建立深档案 · late 1970s–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Trockel 的 wool work 不是“把手工艺带进美术馆”这么简单：她故意用 commercial computerized knitting machine 生产本应与女性手工劳动关联的 wool image，再把成品绷成现代主义 painting 的格式，持续攻击 craft / fine art 与 handmade / industrial 的二分。',
    projects: [
      {
        title: 'Book Drafts',
        cluster: 'folded-paper archive / title-drawing-collage / unrealised book logic',
        period: 'late 1970s–ongoing',
        summary: '持续三十多年制作的 Book Drafts 使用折叠纸张模仿 book cover / spread：标题、手写字、drawing、collage、found photograph 和图表被快速放在同一小型结构中。它们既像未出版书籍的模型，也像储存未来作品的私人 thinking archive。',
        actions: [
          '把普通纸张折成可开合、接近 book cover / spread 的基本结构',
          '在单张 draft 中混用 handwriting、drawing、photo clipping、diagram 与 printed text',
          '不强求每个 draft 发展成正式出版物，允许 idea 维持未完成状态',
          '长期保存并累计，使三十多年不同议题在同一 archive format 中并列',
          '把 small paper thinking 与 later knitting / sculpture / installation 并置，显示 concept 并不从 medium 单向发展',
        ],
        sourceUrl: trockelMoma,
        images: [],
        relations: [rel('收藏', 'Museum of Modern Art, New York', 'Book Drafts represented in artist collection/archive context')],
      },
      {
        title: 'Knitting Pictures / Made in Western Germany',
        cluster: 'computerised knitting machine / wool / painting stretcher',
        period: 'early 1980s–1987',
        summary: 'Trockel 将 geometric motif、logos、political signs 与短语输入 commercial knitting machine，让 wool fabric 机械生产后再像 painting 一样绷在 stretcher 上。Made in Western Germany 甚至把产地标签本身织进 wool，直接碰撞女性手工、工业复制与德国商品身份。',
        actions: [
          '先设计可被 machine knitting 转译的 repeat pattern、logo、text 或 political symbol',
          '将图案交给 commercial computerized knitting machine，而不是由艺术家手工逐针编织',
          '长期与 skilled collaborator / technician Helga Szentpétery 等合作完成 machine translation',
          '将完成的 wool textile 拉伸并固定在 painting stretcher，使柔软 fabric 被迫进入“高艺术绘画”展示格式',
          '保留 mechanical repetition 和 edge tension，让 production method 与 domestic craft expectation 发生冲突',
        ],
        sourceUrl: trockelMade,
        images: [],
        relations: [rel('收藏', 'Museum of Modern Art, New York', 'Untitled / Made in Western Germany · 1987')],
      },
      {
        title: 'Wool works / yarn etchings — machine image translated again',
        cluster: 'wool surface / etching plate / Venice historical-contemporary bridge',
        period: '1990s–2022',
        summary: 'Trockel 并未把 wool 固定为 knitting-picture 技术。1996 的 prints 直接把 yarn 压在 prepared etching plates 上留下痕迹；到 Venice 2022，既有与此前未公开的 wool works 被重新并置，使 textile、machine code、gesture 和 painting history 继续互相转换。',
        actions: [
          '把 actual yarn 压入 prepared etching plate，让 textile material 转成 printmaking trace',
          '在不同年代的 wool works 中改变 machine pattern、scale、colour 与 stretcher relation',
          '把政治符号、geometry 与近 organic pattern 放在同一生产系统中，不形成单一 signature motif',
          '重新调用 historical wool works 与 unseen pieces，使同一种 material 在不同 institutional context 中重新解释',
          '在 Venice 2022 与 machine-code / language-based painting 同场，使 knitting technology 被明确放进“人与技术”主题中',
        ],
        sourceUrl: trockelVenice,
        images: [],
        relations: [
          rel('收藏', 'Museum of Modern Art, New York', '1996 yarn-based prints in collection'),
          rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Central Pavilion'),
        ],
      },
    ],
    awards: ['Wolf Prize in Arts — Painting 2011'],
    exhibitions: ['Rosemarie Trockel: A Cosmos — New Museum / Serpentine 2012–2013', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'La Biennale · Rosemarie Trockel 2022', url: trockelVenice },
      { label: 'MoMA · Rosemarie Trockel', url: trockelMoma },
      { label: 'MoMA · Made in Western Germany', url: trockelMade },
      { label: 'MoMA · yarn prints', url: trockelPrint },
    ],
  },

  'venice-amy-sillman': {
    artistId: 'venice-amy-sillman',
    projectCoverage: '3 个 process painting / zine-animation / film-strip installation 方法阶段已建立深档案 · 2009–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选方法 / 项目档案，尚非作品全集。Sillman 的关键不是“抽象和具象之间”，而是让图像持续变：painting 被刮掉、覆盖、重做，drawing 进入 zine，zine 的 sequence 又转成 iPhone / iPad animation，最后再回到整面墙的身体尺度 painting sequence。',
    projects: [
      {
        title: 'Process painting — change and change again',
        cluster: 'oil painting / overpainting / figure-ground instability',
        period: '1990s–ongoing',
        summary: 'Sillman 的油画长期通过反复覆盖、擦除、重画和局部重新组织生成。身体、cartoon-like fragment 与抽象色块不是先确定好再执行，而是在制作过程中互相推翻，因此“完成”更像暂时停止变化。',
        actions: [
          '从 drawing / colour block / bodily fragment 等松散起点开始，而不是执行固定 composition',
          '反复 overpaint、scrape、cover、redraw，让前一阶段仍以痕迹残留在 surface 中',
          '允许 figure 和 ground 在制作中互换，使人体局部可能在下一层退回 abstraction',
          '利用 humour、awkward shape 与 deliberately unresolved passage 抵抗 painting mastery 的稳定姿态',
          '把 studio revision 当作作品的时间结构，因此同一 canvas 经历多次 near-finished state',
        ],
        sourceUrl: sillmanMoma,
        images: [],
        relations: [rel('收藏', 'Museum of Modern Art, New York', 'multiple works and artist archive context')],
      },
      {
        title: 'The O-G / iPhone–iPad animations',
        cluster: 'zine / drawing sequence / digital animation / writing',
        period: '2009–ongoing',
        summary: '2009 起的 The O-G zine 把 cartoons、essays、charts、found image 与 artist writing 变成低成本 sequence；同时 Sillman 发展 iPhone / iPad animations，把一张 drawing 的变化逐帧保留下来。静态 painting 中不可见的 revision history 因此变成 literal time. ',
        actions: [
          '定期自行编辑 The O-G，将 drawing、cartoon、text、quotation、diagram 和 collaborators material 组合成 stapled zine',
          '使用 cheap / small-format publication 让 painting studio 的旁支 thinking 可以快速流通',
          '在 phone / tablet 上逐帧 drawing、erase、redraw，把图像变形直接记录成 animation sequence',
          '把同一类 shape / body joke 在 paper、screen 和 canvas 之间往返，不把 digital animation 当独立媒介分支',
          '通过 Metamorphoses、SHAPES、Elements for a conversation 等 zine issues 让长期概念以可重复编辑的出版结构出现',
        ],
        sourceUrl: sillmanZines,
        images: [],
        relations: [rel('出版', 'The O-G', 'artist zine · 2009–ongoing')],
      },
      {
        title: 'The Milk of Dreams horizontal painting sequence',
        cluster: 'film-strip hanging / human-animal fragments / viewer-scale movement',
        period: '2022',
        summary: 'Venice 2022 新作将多幅横向、紧密排列的 painting 组织得像 film strip / home movie。断开的 human / animal limbs、formal shapes 与 narrative fragments 在 viewer 行走时逐步变化；墙面 sequence 把 animation 的时间重新转成实体观看路径。',
        actions: [
          '制作多幅 horizontally oriented paintings，并将单幅尺度与 standing viewer body 对齐',
          '在不同 canvas 中重复 / 改写 human、animal、limb 与 abstract shape，使 motif 像 frame-to-frame mutation',
          '按紧密间距连续 hanging，削弱单幅 painting 的独立边界',
          '让 viewer 必须沿墙移动才能获得 sequence，模拟 film strip / home movie 的 temporal reading',
          '将 painting、drawing、animation 中长期存在的 change / metamorphosis 方法压回同一个 physical installation',
        ],
        sourceUrl: sillmanVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Central Pavilion')],
      },
    ],
    awards: ['Guggenheim Fellowship — 2001'],
    exhibitions: ['One Lump or Two — ICA Boston / Aspen Art Museum 2013–2014', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'La Biennale · Amy Sillman 2022', url: sillmanVenice },
      { label: 'MoMA · Amy Sillman', url: sillmanMoma },
      { label: 'Amy Sillman · The O-G zine archive', url: sillmanZines },
    ],
  },

  'venice-carla-accardi': {
    artistId: 'venice-carla-accardi',
    projectCoverage: '3 个 sign-painting / transparent Sicofoil / inhabitable tent 关键阶段已建立深档案 · 1956–1969',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选历史档案，尚非作品全集。Accardi 从 postwar abstract signs 出发，逐渐让符号像语言一样覆盖画面；到 1960s，她甚至把 canvas 换成透明 Sicofoil 塑料，使 stretcher、墙和观众空间穿过 painting，最终发展成可以进入的 transparent tent。',
    projects: [
      {
        title: 'Assedio rosso n.3 / sign paintings',
        cluster: 'postwar abstraction / invented graphemes / black-red field',
        period: '1956',
        summary: 'Accardi 用短促弯曲、近似字母却不可读的 marks 组成 dense field。符号没有固定词义，却像 handwriting / code 一样反复增殖，把 postwar abstraction 从纯 gesture 推向一种私人视觉语言。',
        actions: [
          '在 paper / canvas 上发展一组可反复使用但不对应真实 alphabet 的 grapheme-like signs',
          '以 repeated loops、hooks、tendrils 建立整幅 all-over rhythm，而非中心构图',
          '通过 limited black / red 或高对比色强化 sign 与 ground 的读写关系',
          '让 individual mark 保持手工差异，使“语言系统”不会完全机械化',
          '把 signs 在系列中不断变体，使 abstraction 同时接近 writing、ornament 与 organism',
        ],
        sourceUrl: accardiVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · historical presentation')],
      },
      {
        title: 'Senza titolo — Sicofoil paintings',
        cluster: 'transparent plastic / fluorescent casein / exposed stretcher',
        period: '1965–1967',
        summary: 'Accardi 将传统 canvas 换成透明包装塑料 Sicofoil，在 clear surface 上绘制 fluorescent / coloured signs。因为 support 可透视，wooden stretcher、墙面和背后的空间不再被 painting 隐藏，图像从实体“窗口”变成一层浮在建筑里的 membrane。',
        actions: [
          '采购工业透明包装材料 Sicofoil 作为 painting support，而不是 primed canvas',
          '把 plastic 拉伸到 wooden stretcher 上，同时故意保留 stretcher 可从正面透视',
          '以 casein / fluorescent green 等鲜艳 pigment 只绘制局部 signs，让大量透明区域维持开放',
          '让 wall colour / light / viewer movement 通过 clear plastic 参与每次观看',
          '利用 cheap synthetic packaging material 挑战 painting support 的永久性与“高贵材料”传统',
        ],
        sourceUrl: accardiVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · included 1967 Sicofoil work')],
      },
      {
        title: 'Triplice Tenda',
        cluster: 'clear-plastic tent / painted membrane / viewer inside image',
        period: '1969',
        summary: 'Triplice Tenda 将 Sicofoil 从平面 support 变成 full-size circular tent：三个同心 transparent chambers 由 clear plastic 与 pale-pink marks 组成，观众可以实际进入。painting 的 front/back、public/private、inside/outside 都因此失去稳定边界。',
        actions: [
          '从 1965 第一座 homemade clear-plastic Tenda 继续发展可进入 architecture',
          '制作 three concentric circular chambers，使每层 transparent wall 同时是 image surface 和 physical boundary',
          '在 clear Sicofoil 上重复 pale-pink signs，让多层图案在视线中自动叠加',
          '按 human body scale 留出 entrance / passage，要求 viewer 进入而非站在 painting 前',
          '通过 tent / domestic / nomadic association 将 abstract painting 与 feminist public-private spatial question 连接',
        ],
        sourceUrl: accardiTent,
        images: [],
        relations: [rel('展览', 'Carla Accardi: Triplice Tenda — MoMA', '2018 presentation')],
      },
    ],
    awards: [],
    exhibitions: ['Forma 1 — postwar Italian abstraction context', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'La Biennale · Carla Accardi 2022', url: accardiVenice },
      { label: 'MoMA · Triplice Tenda', url: accardiTent },
      { label: 'MoMA · Carla Accardi', url: accardiMoma },
    ],
  },

  'venice-andra-ursuta': {
    artistId: 'venice-andra-ursuta',
    projectCoverage: '3 个 self-cast / lead-crystal monster / constrained cyborg body 阶段已建立深档案 · 2019–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Ursuţa 近年不是直接“雕一个怪物”，而是先对自己的身体做 direct cast / 3D scan，再把 everyday trash、film monster props、corset、bone、container 等结构嫁接进去，最后以 lost-wax / crystal casting 将临时拼装冻结成透明而沉重的身体。',
    projects: [
      {
        title: 'Nobodies / self-body cast process',
        cluster: 'direct body cast / salvaged props / lost-wax + 3D scan hybrid',
        period: '2019–2020',
        summary: 'Ursuţa 在 Nobodies 前后开始稳定发展一条新的 self-body process：自己的身体被直接翻模或 3D scan，再与 everyday object、trash、container、costume / prop 连接。传统 lost-wax casting 与 digital fabrication 同时参与，使“自画像”变成可拆装、可变异的 mold system。',
        actions: [
          '对自己身体的 torso / limb / pose 做 direct casting 和 / 或 3D scanning',
          '把 cast body fragment 与 salvaged trash、consumer container、costume prop 等临时拼装',
          '在 digital stage 对部分身体 / object geometry 进行重新组合或 printing',
          '通过 lost-wax / mould-making 将临时 hybrid 重新转换成可浇铸结构',
          '故意保留 swirl、join、surface texture 等 process marks，使 finished crystal 仍能读出身体与物件碰撞的位置',
        ],
        sourceUrl: ursutaVeniceZwirner,
        images: [],
        relations: [rel('展览', 'Andra Ursuţa: Nobodies — Ramiken, Brooklyn', '2019')],
      },
      {
        title: "Predators 'R Us / Impersonal Growth",
        cluster: 'lead crystal / missing limbs / alien appendages',
        period: '2019–2021',
        summary: "Predators 'R Us 将 reclining female body 做成 hollow lead-crystal shell：身体缺失 limbs，却长出受 Predator 启发的 tentacled slippers；Impersonal Growth 则吸收 Alien 的 Xenomorph anatomy。流行电影 monster 不被直接复制，而变成身体 prosthesis。",
        actions: [
          '从自己的 reclining / twisted body pose 建立 life-size cast basis',
          '有意删除 / 截断部分 limbs，使 body silhouette 先失去完整人体逻辑',
          '从 Predator / Alien film creatures 提取 tentacle、spike、exoskeleton 等局部，再嫁接到 feet / torso',
          '使用 lead crystal 铸造 hollow figure，让沉重材料呈现透明、近液态 coloured flesh',
          '允许内部 liquid / colour / bubble 与 cast surface 共同形成看似污染、冰冻或器官化的视觉状态',
        ],
        sourceUrl: ursutaPredator,
        images: [],
        relations: [
          rel('收藏', 'Tate', "Predators 'R Us · 2020 · acquired 2025"),
          rel('展览', 'Andra Ursuţa: Void Fill — David Zwirner Paris', '2021'),
        ],
      },
      {
        title: 'Phantom Mass / Terminal Figure',
        cluster: 'constrained body / corset-buckle-bone / cyborg technical anatomy',
        period: '2021；Venice 2022',
        summary: 'Phantom Mass 与 Terminal Figure 让身体越来越受自己的结构约束：spiky corset、buckles、bones 与 protrusions 不再只是附加装饰，而逐渐变成支撑 / 限制动作的 technical components。cyborg 在这里不是升级身体，而是让身体被自己生成的装置卡住。',
        actions: [
          '从 body scan / cast 出发选择 deliberately constrained / contorted poses',
          '将 corset、buckle、bone、spike 等物件结构化，使其承担 frame / brace / cage 功能',
          '把 organic anatomy 与 mechanical support 在 mould stage 合并，避免后期简单“贴配件”',
          '以 purple-white-green / acid-green 等 lead crystal 让 rigid body 同时显得有机、冷冻和人工',
          '在 Venice 2022 并置多件同族 figures，使 appendage 从怪物特征逐步读成 evolving cyborg technology',
        ],
        sourceUrl: ursutaVenice,
        images: [],
        relations: [
          rel('展览', 'Andra Ursuţa: Void Fill — David Zwirner Paris', '2021'),
          rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale'),
        ],
      },
    ],
    awards: [],
    exhibitions: ['Nobodies — Ramiken 2019', 'Void Fill — David Zwirner Paris 2021', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'La Biennale · Andra Ursuţa 2022', url: ursutaVenice },
      { label: 'David Zwirner · Void Fill', url: ursutaVoid },
      { label: "David Zwirner · Predators 'R Us", url: ursutaPredator },
      { label: 'David Zwirner · Venice 2022 process context', url: ursutaVeniceZwirner },
    ],
  },

  'venice-jacqueline-humphries': {
    artistId: 'venice-jacqueline-humphries',
    projectCoverage: '3 个 monitor-glow / ASCII-stencil / white-noise painting 阶段已建立深档案 · 2000s–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Humphries 的问题一直是：painting 怎样真正吸收 screen culture，而不是只“画电脑”。她把 metallic silver、non-reflective black、ASCII、CAPTCHA、emoji 和 white noise 都转成 stencil、oil surface 与 physical pattern，使数字语言重新变成厚重物质。',
    projects: [
      {
        title: 'Silver / black monitor-glow paintings',
        cluster: 'metallic oil / non-reflective black / screen attraction',
        period: 'early 2000s–2010s',
        summary: 'Humphries 以 metallic silver 与 non-reflective black 制作大尺幅抽象 painting，目标不是模拟 monitor 图标，而是重现人在黑暗中面对 screen artificial glow 时既被吸引又无法真正触摸的光感。',
        actions: [
          '在 large canvas 上结合 metallic silver paint 与吸光 black paint，主动制造反射 / 吸收差异',
          '改变 viewer angle 时让 silver surface 亮度发生变化，使画面不能被单张 reproduction 稳定记录',
          '以 tape、stencil、rotation of canvas 与 gestural brushwork 共同制作，避免 metallic surface 变成单纯装饰',
          '让 reflective layer 像 screen light，但坚持由 oil / physical pigment 真实产生而不是背光设备',
          '通过 viewing distance 与 gallery lighting 使 painting 的“开 / 关屏”感觉随身体移动变化',
        ],
        sourceUrl: humphriesMoma,
        images: [],
        relations: [rel('收藏', 'Museum of Modern Art, New York', 'Beat the Devil · 2008')],
      },
      {
        title: 'ASCII / CAPTCHA / emoji paintings',
        cluster: 'scan-to-code / laser-cut stencil / digital language rematerialised',
        period: 'mid-2010s–2022',
        summary: 'Humphries 将自己的旧 painting scan 成 digital image，再翻译为 ASCII characters，制作 custom laser-cut stencil 后重新刷回 canvas；同时把 emoticon、emoji、CAPTCHA 等 everyday screen language 和 expressive brushwork 重叠。digital conversion 不是终点，而是下一轮 analog painting 的模板。',
        actions: [
          '扫描自己既有 paintings / images，生成可被重新处理的 digital file',
          '把 tonal / image data 转译成 ASCII character field 或相关 computer-text pattern',
          '根据 character map 制作 custom laser-cut stencils',
          '通过 stencil 将 ASCII / emoticon / CAPTCHA pattern 物理刷回 oil painting surface',
          '再叠加 gestural paint、scrape 与手工修正，使 mechanical code 与 painterly error 同时存在',
        ],
        sourceUrl: humphriesMet,
        images: [],
        relations: [rel('收藏', 'The Metropolitan Museum of Art', 'Untitled · 2022')],
      },
      {
        title: 'JH179 :-| / white-noise pattern paintings',
        cluster: 'white-noise stencil / data stream / dense physical screen',
        period: '2022',
        summary: 'Venice 2022 前后，Humphries 将 typographic marks 和 white-noise-like pattern 推得更密。JH179 :-| 等作品把 keyboard emoticon 与 abstract field 合并：远看近 digital static，近看却是厚重 oil、stencil edge 与手工 surface，强调 screen culture 并不“非物质”。',
        actions: [
          '从 computer keyboard signs / emoticons 选取极简符号作为可放大的 visual unit',
          '制作 repeated stencil pattern，形成接近 digital white noise / data saturation 的 dense field',
          '在 oil layer 中反复覆盖 / interrupt stencil，使 pattern 不成为无误差 printed wallpaper',
          '按 monumental canvas scale 放大 normally tiny interface signs，使 viewer 失去轻松读取文本的距离',
          '在 Venice Central Pavilion 与 Carla Accardi、Rosemarie Trockel 等 code / sign practices 并置，强调 digital language 的 material history',
        ],
        sourceUrl: humphriesVenice,
        images: [],
        relations: [
          rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Central Pavilion'),
          rel('收藏', 'Centre Pompidou', 'JH179 :-| · 2022 · acquired 2023'),
        ],
      },
    ],
    awards: [],
    exhibitions: ['Whitney Biennial — 2014', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'La Biennale · Jacqueline Humphries 2022', url: humphriesVenice },
      { label: 'The Met · Untitled 2022', url: humphriesMet },
      { label: 'MoMA · Beat the Devil', url: humphriesMoma },
      { label: 'Centre Pompidou · JH179 :-|', url: humphriesPompidou },
    ],
  },
};
