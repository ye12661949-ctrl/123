import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const okoyomonEarthseed = 'https://www.mmk.art/de/mmk_collection/publications/precious-okoyomon-earthseed';
const okoyomonVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/precious-okoyomon';
const okoyomonLuma = 'https://luma.org/en/arles/video/entretien-avec-precious-okoyomon-2025';

const chailePatricia = 'https://museomoderno.org/exposiciones/gabriel-chaile-patricia/';
const chaileGenealogy = 'https://www.barro.cc/en/exhibitions/1088/genealogia-de-la-forma';
const chaileVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/gabriel-chaile';

const leeCarriers = 'https://mirelee.com/en/works/carriers';
const leeVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/mire-lee';
const leeOpenWound = 'https://www.hyundai.com/worldwide/en/newsroom/detail/0000000844';

const lewis2021 = 'https://taulewis.com/exhibitions-2021';
const lewisVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/tau-lewis';
const lewisVox = 'https://www.52walker.com/exhibitions/tau-lewis-vox-populi-vox-dei';

const adamsKickingDust = 'https://www.southbankcentre.co.uk/magazine/5-things-to-know-about-igshaan-adams-kicking-dust/';
const adamsSkarrelbaan = 'https://blankprojects.com/skarrelbaan';
const adamsVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/igshaan-adams';

const orupaboTrondheim = 'https://kunsthalltrondheim.no/en/utstillinger/frida-orupabo';
const orupaboWorks = 'https://nordenhake.com/artists/frida-orupabo';
const orupaboSing = 'https://nordenhake.com/exhibitions/2022/frida-orupabo';
const orupaboArles = 'https://www.rencontres-arles.com/fr/expositions/2022/frida-orupabo';

export const archiveBatch71: Record<string, ArtistArchive> = {
  'venice-precious-okoyomon': {
    artistId: 'venice-precious-okoyomon',
    projectCoverage: '3 个生态 / 活体装置关键阶段已建立深档案 · 2020–2023',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。这里重点追踪 Okoyomon 如何把植物、土壤、水、动物、腐烂与生长直接变成作品材料，并让殖民史、奴隶制与生态史进入同一套活体系统。',
    projects: [
      {
        title: 'Earthseed',
        cluster: '活体生态 / kudzu / 殖民生态史',
        period: '2020',
        summary: '在 ZOLLAMT MMK 把展厅转成持续变化的生态环境，以 kudzu 等活体植物处理“入侵物种”语言、迁移、奴隶制后遗留的土地损耗与适应性。项目标题取自 Octavia E. Butler 小说中的 Earthseed 信仰。',
        actions: [
          '把真实植物、土壤和环境条件带入展厅，而不是用植物图像代表自然',
          '围绕 kudzu 在美国南方的历史研究侵入、修复与殖民农业之间的矛盾',
          '允许植物在展期继续生长、缠绕和改变空间',
          '把诗歌、阅读与活体环境放在同一展览系统中',
          '让“自然”本身携带迁移、种族化和劳动史，而不是作为中性背景',
        ],
        sourceUrl: okoyomonEarthseed,
        images: [],
        relations: [
          rel('展览', 'Precious Okoyomon: Earthseed — ZOLLAMT MMK', '2020 · Frankfurt'),
        ],
      },
      {
        title: 'To See the Earth before the End of the World',
        cluster: 'Venice / kudzu + sugar cane / ecological revolt',
        period: '2022',
        summary: '为 The Milk of Dreams 制作的活体地景把 kudzu、野生植物、河流和甘蔗组织在同一环境中。甘蔗既连接艺术家的家庭记忆，也直接连接跨大西洋奴隶贸易的经济史。',
        actions: [
          '在 Arsenale 内建立可生长、衰败和变化的 field，而不是固定雕塑场景',
          '再次使用 kudzu，并将它与野生植物和水系统并置',
          '加入 sugar cane，把私人童年记忆与种植园经济史连接',
          '以 Ed Roberson 的诗句作为标题结构',
          '借 Édouard Glissant 的思想把生态变化理解成 revolt / revolution，而不是自然装饰',
        ],
        sourceUrl: okoyomonVenice,
        images: [],
        relations: [
          rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale'),
        ],
      },
      {
        title: 'the sun eats her children',
        cluster: '毒性花园 / 蝴蝶 / animatronic bear / memory',
        period: '2023；2025 LUMA 版本',
        summary: '以有毒植物和蝴蝶构成既漂亮又危险的花园，中央的 Beloved 熊闭着眼睛并周期性发出尖叫。作品把 Toni Morrison《Beloved》中的奴隶制创伤与 Etel Adnan 的诗连接到生命、暴力和再生循环。',
        actions: [
          '选择 poisonous plants 让“花园”同时具有吸引力和危险性',
          '让真实蝴蝶进入活体生态系统，使作品状态持续变化',
          '制作名为 Beloved 的熊形角色并加入机械 / 声音行为',
          '让熊在安静环境中周期性发出突发尖叫，打破自然作为疗愈空间的预期',
          '依据展览地点重新调整植物、温室 / 花园尺度和观众路径',
        ],
        sourceUrl: okoyomonLuma,
        images: [],
        relations: [
          rel('展览', 'Dance With Daemons — LUMA Arles', '2025 presentation'),
        ],
      },
    ],
    awards: ['Frieze Artist Award · 2021', 'CHANEL Next Prize · 2021'],
    exhibitions: ['Earthseed — MMK, 2020', 'The Milk of Dreams — Venice Biennale, 2022', 'Dance With Daemons — LUMA Arles, 2025'],
    sources: [
      { label: 'MMK · Earthseed', url: okoyomonEarthseed },
      { label: 'La Biennale · Precious Okoyomon 2022', url: okoyomonVenice },
      { label: 'LUMA · the sun eats her children', url: okoyomonLuma },
    ],
  },

  'venice-gabriel-chaile': {
    artistId: 'venice-gabriel-chaile',
    projectCoverage: '3 个泥土 / 炉体 / 形式谱系关键阶段已建立深档案 · 2017–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。重点不是把 Chaile 简化成“陶艺家”，而是看他怎样把 adobe、炉子、建筑临时结构、家族口述和前哥伦布形式变成关于食物、住房、劳动和社群记忆的功能性雕塑语言。',
    projects: [
      {
        title: 'Patricia',
        cluster: '泥炉 / 基本需求 / devotional form',
        period: '2017',
        summary: '在 Museo Moderno 的首个大型美术馆个展中，Chaile 把泥炉与前哥伦布式 devotional figure 合在一起，同时把施工用 formwork 转成睡眠空间，把泥瓦匠留下的施工记号处理成不可读的文字。',
        actions: [
          '使用 adobe、brick 等廉价建筑材料而不是贵重雕塑材料',
          '把可烹饪 / 供热的泥炉形态扩展成人体与祭祀性外观',
          '将 construction formwork 与 mattress 等生活需求连接',
          '观察并转译工匠在现场留下的施工痕迹',
          '让 nourishment、housing、work 三种基本需求成为展览结构，而不是作品外部主题说明',
        ],
        sourceUrl: chailePatricia,
        images: [],
        relations: [rel('展览', 'Gabriel Chaile: Patricia — Museo de Arte Moderno de Buenos Aires', '2017')],
      },
      {
        title: 'Genealogía de la forma',
        cluster: 'adobe / mud / metal / material genealogy',
        period: '2019',
        summary: '以 adobe、泥、金属、烟、热与运动继续发展“形式的谱系”：同一种器物形式在历史中被重复制作，每次表面变化都留下技术、用途与社群经验，而不是只有一个固定的原型。',
        actions: [
          '研究器物表面在长期使用、烧制和修补中产生的变化',
          '用 adobe、mud、metal 组织大型可进入结构',
          '让 smoke、heat、movement 作为作品真实状态参与观看',
          '从前哥伦布形态提取结构，但不做考古复制',
          '通过重新置入当代空间改变历史器物原有用途和权力位置',
        ],
        sourceUrl: chaileGenealogy,
        images: [],
        relations: [rel('展览', 'Genealogía de la forma — BARRO, Buenos Aires', '2019')],
      },
      {
        title: 'Rosario Liendro / family oven sculptures',
        cluster: '家族口述 / 五座炉体 / Venice',
        period: '2022',
        summary: '在 Venice 2022 展出五座近似大型 clay oven 的人物雕塑，把自己的父母与祖父母变成一组家族形态。中央 Rosario Liendro 对应外祖母；对不曾直接认识的亲人，则根据家庭口述和想象补出形态。',
        actions: [
          '把传统 clay oven 的体量继续扩展为 anthropomorphic sculpture',
          '以五位具体家族成员建立群像，而不是抽象“祖先”主题',
          '从 oral stories 中提取未亲见长辈的性格和身体暗示',
          '让每座炉体既像建筑、容器、身体又保留家庭烹饪的功能记忆',
          '将 genealogy of form 从物件历史推进到家庭 genealogy',
        ],
        sourceUrl: chaileVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: [],
    exhibitions: ['Patricia — Museo Moderno, 2017', 'Genealogía de la forma — BARRO, 2019', 'The Milk of Dreams — Venice Biennale, 2022'],
    sources: [
      { label: 'Museo Moderno · Patricia', url: chailePatricia },
      { label: 'BARRO · Genealogía de la forma', url: chaileGenealogy },
      { label: 'La Biennale · Gabriel Chaile 2022', url: chaileVenice },
    ],
  },

  'venice-mire-lee': {
    artistId: 'venice-mire-lee',
    projectCoverage: '3 个机械身体 / 渗漏系统关键阶段已建立深档案 · 2020–2025',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。这里把“低技术机械”拆成具体动作：泵送、滴漏、旋转、浸湿、干燥、开裂与悬挂。Lee 的机器并非科技未来主义，而是故意像器官、创口、工厂和脆弱身体。',
    projects: [
      {
        title: 'Carriers',
        cluster: 'peristaltic pump / silicone / PVC / bodily machine',
        period: '2020',
        summary: 'Carriers 用 silicone、PVC hoses、泵、金属板、glycerine 等材料构成会输送液体、拖拽和渗漏的装置，使不同材料像互相喂养的身体系统。',
        actions: [
          '使用 peristaltic pump 让液体持续在软管和结构中循环',
          '组合 silicone、PVC hose、steel / metal plates 与旧 formwork',
          '加入 pigmented glycerine 等黏稠液体，让重力和流动留下痕迹',
          '让软材料被硬结构牵引、挤压和悬挂',
          '保留低技术机械的裸露状态，不把泵、管和连接点隐藏在雕塑外壳里',
        ],
        sourceUrl: leeCarriers,
        images: [],
        relations: [rel('展览', 'Carriers — Art Sonje Center / later presentations', '2020 onward')],
      },
      {
        title: 'The Milk of Dreams — carrier extension',
        cluster: '液态陶泥 / 漏孔 / bench-sculpture / Venice',
        period: '2022',
        summary: 'Venice 新作没有另造一个干净“雕塑”，而是继续扩展 carrier：泵连接带孔陶瓷，液态 clay 从孔洞渗出，逐渐干燥、堆积和开裂；旁边长椅本身也像身体一样流出黏液。',
        actions: [
          '把 pump 接入带有多处 openings 的 ceramic sculptures',
          '持续输送 liquid clay，让作品表面在展期自然干燥、分层和龟裂',
          '制作既是 bench 又是 sculpture 的支撑体',
          '让部分长椅继续渗出 viscous liquid',
          '把整组装置组织成具有洞口、液体和内部功能的 affective landscape / house with holes',
        ],
        sourceUrl: leeVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
      {
        title: 'Open Wound',
        cluster: 'Turbine Hall / living factory / skins + turbine',
        period: '2024–2025',
        summary: '把 Tate Modern Turbine Hall 的发电站历史反转成一座“活的工厂 / 工业子宫”。布质 skins 在金属链上悬挂，机械 turbine 将黏稠液体经 silicone tentacles 排入托盘，新 skins 被浸湿、晾硬，再由工作人员吊起。',
        actions: [
          '把 Turbine Hall 既有工业尺度和吊装系统当作作品的一部分',
          '制作 fabric skins 并以 metal chains 悬挂',
          '设置 motorised turbine 让装置持续旋转工作',
          '通过 silicone tentacles 排出 viscous liquid',
          '由现场 technicians 周期性把 skins 浸湿、移到架上硬化，再吊升到空间高处',
          '让生产、护理、机械重复与材料衰败持续发生，而不是开幕时即完成',
        ],
        sourceUrl: leeOpenWound,
        images: [],
        relations: [rel('展览', 'Hyundai Commission: Mire Lee: Open Wound — Tate Modern', '9 Oct 2024–16 Mar 2025')],
      },
    ],
    awards: [],
    exhibitions: ['Carriers — 2020 onward', 'The Milk of Dreams — Venice Biennale, 2022', 'Open Wound — Tate Modern, 2024–2025'],
    sources: [
      { label: 'Mire Lee · Carriers', url: leeCarriers },
      { label: 'La Biennale · Mire Lee 2022', url: leeVenice },
      { label: 'Hyundai / Tate · Open Wound', url: leeOpenWound },
    ],
  },

  'venice-tau-lewis': {
    artistId: 'venice-tau-lewis',
    projectCoverage: '3 个回收纺织 / 神话世界建构关键阶段已建立深档案 · 2020–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。重点看 Lewis 如何把旧衣、废皮革、布料、线和拾得物通过长期手工缝制转成具有名字、性格和世界观的生命体，而不是把 recycled textile 仅仅当环保材料。',
    projects: [
      {
        title: 'Symphony',
        cluster: 'reclaimed textile / soft portrait / mutable body',
        period: '2020–2021',
        summary: '大型 soft sculpture 由回收与手染布料、旧皮革、填充物、珠子、金属和贝壳等构成，被艺术家描述为可变、无固定性别并能转化为花朵的生命体。',
        actions: [
          '回收衣物、旧皮革和边角纺织物作为主要表皮材料',
          '以 hand sewing、patching 和 stuffing 慢速累积体量',
          '加入 beads、wire、seashells 与 hoop-skirt structure 支撑身体',
          '根据 National Gallery of Canada rotunda 重新调整悬挂与展开方式',
          '让 craft labour 本身承担 memory、trauma 与 healing 的时间感',
        ],
        sourceUrl: lewis2021,
        images: [],
        relations: [rel('收藏', 'National Gallery of Canada', 'Symphony acquired / installed 2021')],
      },
      {
        title: 'Divine Giants Tribunal',
        cluster: '巨型面具 / Yoruba mask drama / hand stitching',
        period: '2021；Venice 2022 展出',
        summary: '一组接近建筑尺度的面具式人物，从 Yoruba mask dramas、Wole Soyinka 与 Lewis 自己建立的神话人物系统出发。被丢弃的布、毛皮和皮革经手工缝合后变成具有祖先、法庭和仪式意味的存在。',
        actions: [
          '从 scrap fabrics、fur、leather 等旧材料开始，不追求材料统一',
          '以大量 hand stitching 连接不同材料和既有磨损',
          '研究 Yoruba mask drama 中面具被表演者与观众共同“激活”的关系',
          '为每个 anthropomorphic figure 建立身份、叙事和彼此关系',
          '在 Venice 将这些巨大身体作为群体而非独立雕塑布置',
        ],
        sourceUrl: lewisVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022')],
      },
      {
        title: 'Vox Populi, Vox Dei',
        cluster: '六座雕塑 / polygonal stage / inaudible conversation',
        period: '2022',
        summary: '在 52 Walker 制作六座约 7–13 英尺高的新人物雕塑，并把它们围成多边形舞台，形成一场观众听不见的对话。项目继续 Divine Giants 的人物谱系，但把 world-building 发展成完整空间关系。',
        actions: [
          '继续使用 salvaged textiles 与 found materials 构造大型身体',
          '制作六个彼此不同的角色而不是重复同一模板',
          '将雕塑组织成 polygonal installation，让角色彼此面对',
          '把展示空间当成 stage，使观看者进入角色之间的“无声对话”',
          '继续融合 Yoruba mask drama、Soyinka、神话、science fiction 与 angelology 的叙事资源',
        ],
        sourceUrl: lewisVox,
        images: [],
        relations: [rel('展览', 'Tau Lewis: Vox Populi, Vox Dei — 52 Walker', '28 Oct 2022–7 Jan 2023')],
      },
    ],
    awards: [],
    exhibitions: ['Symphony — National Gallery of Canada, 2021', 'The Milk of Dreams — Venice Biennale, 2022', 'Vox Populi, Vox Dei — 52 Walker, 2022–2023'],
    sources: [
      { label: 'Tau Lewis · 2021 installations', url: lewis2021 },
      { label: 'La Biennale · Tau Lewis 2022', url: lewisVenice },
      { label: '52 Walker · Vox Populi, Vox Dei', url: lewisVox },
    ],
  },

  'venice-igshaan-adams': {
    artistId: 'venice-igshaan-adams',
    projectCoverage: '3 个 weaving / desire line / dust-cloud 关键节点已建立深档案 · 2021–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。这里把 Adams 的材料语言拆成三层：家庭 linoleum floor 的“身体地图”、apartheid 城市中被脚走出的 desire lines，以及 rieldans 踢起的 dust cloud。织物、珠子与金属因此都对应具体移动经验。',
    projects: [
      {
        title: 'Kicking Dust',
        cluster: 'Cape Flats / desire lines / immersive weaving',
        period: '2021',
        summary: 'Hayward Gallery 个展把 Cape Flats 的地景按近似 1:1 的方式转进展厅，地面织物模拟 Bonteheuwel 与 Langa 之间人们自行踩出的 desire lines；空中的 wire-and-bead clouds 来自 rieldans 踢起的尘土。',
        actions: [
          '长期记录 Bonteheuwel 家庭 linoleum flooring 的磨损路径并把它们称为 documents',
          '把居民长期行走形成的非官方路径转成 floor-based weavings',
          '使用 rope、fabric、beads 等不同纹理区分路径和地表',
          '以 spiralled wire 与 beads 制作悬挂 dust-cloud sculptures',
          '与 Cape Town 的编织者以及 migrant / refugee crafters 协作完成部分制作',
          '让观众在展厅中实际选择路径，从而重复“走出路线”的动作',
        ],
        sourceUrl: adamsKickingDust,
        images: [],
        relations: [rel('展览', 'Igshaan Adams: Kicking Dust — Hayward Gallery', '19 May–25 Jul 2021')],
      },
      {
        title: 'skarrelbaan',
        cluster: 'tapestry / station + work routes / prayer clouds',
        period: '2022',
        summary: 'blank projects 个展汇集 Langa、Vanguard Drive、Bonteheuwelstasie、Skarrelbaan 等大型织物和 Gebedswolke。作品用木、塑料、玻璃、石与骨珠、贝壳、绳、布、链条和金属线把地点、通勤和祈祷压进材料表面。',
        actions: [
          '以具体地点和日常路线命名大尺度 tapestry，而不是抽象编号',
          '将 wood、plastic、glass、stone / bone beads、shells、rope、fabric、chain 等低价值与装饰材料共同编织',
          '让织物边缘保持不规则，模拟路径分叉和地表侵蚀',
          '制作 Gebedswolke，将 gold / silver chain、copper wire 与 cotton twine 组织成悬浮云团',
          '在同一展览中把 floor / wall weaving 与 suspended sculpture 作为连续空间语言',
        ],
        sourceUrl: adamsSkarrelbaan,
        images: [],
        relations: [rel('展览', 'skarrelbaan — blank projects, Cape Town', '12 Feb–19 Mar 2022')],
      },
      {
        title: 'The Milk of Dreams — Bonteheuwel–Epping desire lines',
        cluster: '通勤路线 / apartheid geography / Venice',
        period: '2022',
        summary: 'Venice 展示进一步聚焦 Bonteheuwel train station 到 Epping 工业区之间的 desire lines：这些非正式路径由寻找工作的人长期踩出，跨过 apartheid planning 曾试图强制分开的城市结构。',
        actions: [
          '研究 Bonteheuwel station 到 Epping industrial neighbourhood 的实际通勤路径',
          '把 foot-traffic erosion 形成的路线转译成 tapestry 的线与边界',
          '使用 locally sourced wood、plastic、beads、shells、string 与 rope 构成表面',
          '把 desire-line weaving 与 twisting-wire dust clouds 并置',
          '让“为了生计走出的临时路径”与 riel dance 的集体快乐同时进入一个装置系统',
        ],
        sourceUrl: adamsVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: [],
    exhibitions: ['Kicking Dust — Hayward Gallery, 2021', 'skarrelbaan — blank projects, 2022', 'The Milk of Dreams — Venice Biennale, 2022'],
    sources: [
      { label: 'Hayward Gallery · Kicking Dust', url: adamsKickingDust },
      { label: 'blank projects · skarrelbaan', url: adamsSkarrelbaan },
      { label: 'La Biennale · Igshaan Adams 2022', url: adamsVenice },
    ],
  },

  'venice-frida-orupabo': {
    artistId: 'venice-frida-orupabo',
    projectCoverage: '3 个档案挖掘 / 切割拼贴关键节点已建立深档案 · 2021–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。重点不是泛称“拼贴”，而是追踪她怎样从殖民、民族志、医学、流行文化、家庭和网络平台搜集图像，再把黑人身体打印、切开、重新拼接并用 paper pins 保留明显的伤口式连接。',
    projects: [
      {
        title: 'How did you feel when you come out of the wilderness',
        cluster: 'colonial archive / internet mining / collage + video',
        period: '2021',
        summary: 'Kunsthall Trondheim 个展把 Orupabo 的图像搜集机制完整展开：她进入殖民档案，也持续从 Instagram、YouTube 等网络平台抓取图像，将 found digital / physical material 重新编成拼贴和视频。',
        actions: [
          '检索带有殖民、种族化观看历史的 archive images',
          '同时从 Instagram、YouTube 等当代平台持续抓取和保存图像',
          '把不同年代、来源和观看目的的身体图像放进同一个私人 digital archive',
          '将图像打印、裁切并重组为破碎的黑人身体',
          '把部分 material 再编辑成 video，并重新投放到与素材来源相似的网络环境',
        ],
        sourceUrl: orupaboTrondheim,
        images: [],
        relations: [rel('展览', 'How did you feel when you come out of the wilderness — Kunsthall Trondheim', '23 Sep–21 Nov 2021')],
      },
      {
        title: 'Limbs',
        cluster: 'paper collage / split pins / fragmented body',
        period: '2021',
        summary: 'Limbs 把人物身体拆成多个独立纸片，再用明显的 paper pins 重新连接。连接点没有被修饰掉，因此“图像被暴力拆解”和“主体重新取得组合权”同时可见。',
        actions: [
          '从既有 archive / found-image collection 中选择身体部位',
          '把 digital image 输出为实体纸张而不是只在屏幕上合成',
          '沿手臂、腿、躯干和关节等位置进行实际切割',
          '用 paper / split pins 重新铰接各身体片段',
          '保留切边、错位和连接件，让拼接过程成为最终图像的一部分',
        ],
        sourceUrl: orupaboWorks,
        images: [],
        relations: [],
      },
      {
        title: 'How fast shall we sing',
        cluster: 'Strong Black Woman / Black Spirituals / archive collage',
        period: '2022',
        summary: 'Stockholm 个展从 1957 年教会刊物中的一句话取得标题，并借 Black Spirituals 进入“Strong Black Woman”这一既是力量形象、又可能遮蔽种族创伤的矛盾表征。',
        actions: [
          '从宗教、历史与大众图像中继续挑选黑人女性身体素材',
          '围绕“强大”形象如何同时造成第二次异化建立作品群',
          '将不同来源图像放大为接近真人身体尺度的 pigment prints',
          '继续以 mounting tape、split pins 等可见连接方式组织身体',
          '通过展场中多件碎片化人物的彼此朝向形成集体观看关系',
        ],
        sourceUrl: orupaboSing,
        images: [],
        relations: [
          rel('展览', 'How fast shall we sing — Galerie Nordenhake Stockholm', '31 Mar–14 May 2022'),
          rel('展览', 'How Fast Shall We Sing — Les Rencontres d’Arles', '2022 presentation'),
        ],
      },
    ],
    awards: [],
    exhibitions: ['Kunsthall Trondheim solo exhibition, 2021', 'How fast shall we sing — Nordenhake, 2022', 'Les Rencontres d’Arles, 2022', 'The Milk of Dreams — Venice Biennale, 2022'],
    sources: [
      { label: 'Kunsthall Trondheim · Frida Orupabo', url: orupaboTrondheim },
      { label: 'Galerie Nordenhake · works archive', url: orupaboWorks },
      { label: 'Nordenhake · How fast shall we sing', url: orupaboSing },
      { label: 'Rencontres d’Arles · Frida Orupabo 2022', url: orupaboArles },
    ],
  },
};
