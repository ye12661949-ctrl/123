import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const boninFatigue = 'https://www.kunsthaus-bregenz.at/en/exhibitions/cosima-von-bonin';
const boninVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/cosima-von-bonin';
const boninPetzel = 'https://www.petzel.com/collect/cosima-von-bonin4';

const budorOrigin = 'https://collection.qagoma.qld.gov.au/index.php/page/dora-budor';
const budorGong = 'https://www.contemporaryartlibrary.org/project/dora-budor-at-kunsthalle-basel-11847';
const budorVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/dora-budor';

const cameronHenry = 'https://henryart.org/exhibitions/elaine-cameron-weir';
const cameronJtt = 'https://www.jttnyc.com/exhibitions/2021/statements';
const cameronVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/elaine-cameron-weir';

const cenciIron = 'https://www.museonovecento.it/en/mostre/giulia-cenci-tallone-di-ferro/';
const cenciVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/giulia-cenci';
const cenciHollow = 'https://www.palazzostrozzi.org/en/archivio/exhibitions/giulia-cenci/';

const levyThreads = 'https://caseykaplangallery.com/?exhibitions=where-the-threads-are-worn';
const levyRetainer = 'https://www.fondazionehenraux.it/projects/hannah-levy/';
const levyVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/hannah-levy';

const upsonHammer = 'https://hammer.ucla.edu/exhibitions/2007/hammer-projects-kaari-upson';
const upsonLouisiana = 'https://louisiana.dk/en/exhibition/kaari-upson/';
const upsonVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/kaari-upson';

export const archiveBatch74: Record<string, ArtistArchive> = {
  'venice-cosima-von-bonin': {
    artistId: 'venice-cosima-von-bonin',
    projectCoverage: '3 个 textile / fatigue / sea-creature installation 节点已建立深档案 · 2010–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。重点不是“可爱的布偶”，而是 von Bonin 如何把 found fabric、soft sculpture、流行音乐、readymade 与懒惰 / 疲劳的姿态组织成对劳动、资本和艺术生产的反讽系统。',
    projects: [
      {
        title: 'THE FATIGUE EMPIRE',
        cluster: 'institutional solo / textile painting / idleness + exhaustion',
        period: '2010',
        summary: 'Kunsthaus Bregenz 的大型个展把布料绘画、巨型 textile mushrooms、stuffed animals 和重构物件密集并置。标题“疲劳帝国”主动削弱大型机构个展对“生产力”的期待，把退出、休息和不合作变成形式立场。',
        actions: [
          '从 found fabrics、cloths 和既有图像中制作大型 textile paintings',
          '把 mushroom、animal、domestic motif 放大成近建筑尺度的 soft sculpture',
          '在同一空间并置 sewing / domestic craft 与工业制作的刚性结构',
          '通过标题、音乐引用和反复出现的懒散角色建立 idleness / fatigue 叙事',
          '让展览整体像一个不愿高效工作的“系统”，而不是作品逐件独立陈列',
        ],
        sourceUrl: boninFatigue,
        images: [],
        relations: [rel('展览', 'THE FATIGUE EMPIRE — Kunsthaus Bregenz', '2010')],
      },
      {
        title: 'WHAT IF THEY BARK 01–07',
        cluster: 'plastic sea creatures / music props / Central Pavilion façade',
        period: '2018–2022；Venice 2022 version',
        summary: '七只鲨鱼和鱼形角色占据 Central Pavilion 外立面，手持 surfboard、guitar、ukulele、sarong 与 stuffed gingham missiles。亲切海洋卡通与军事 / 消费道具并置，把 leisure、资本、生态和 self-performance 压进一组荒谬角色。',
        actions: [
          '使用 glass-reinforced plastic 制作硬质鲨鱼 / mackerel 身体',
          '为不同角色配置 guitar、ukulele、surfboard、scarves 和 chains',
          '制作 gingham-patterned stuffed missiles，让家居纺织与武器外形直接冲突',
          '按 Central Pavilion façade 的柱列尺度重新安排七个角色',
          '让公共入口先被一组“玩乐 / 威胁”两义角色占据，再进入主展',
        ],
        sourceUrl: boninVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Central Pavilion façade')],
      },
      {
        title: 'SCALLOPS / HERMIT CRAB / VENICE 1984',
        cluster: 'readymade satire / cement mixer + boat / sea-creature ensemble',
        period: '2022',
        summary: 'Central Pavilion 内外继续用 sea creatures 攻击 readymade 的严肃历史：scallops 被挂上 trapeze，胖大的 crab claws 披在 cement mixer 上，另一组海洋生物围住一艘 Venetian boat。',
        actions: [
          '以 epoxy resin、wood、rope 等制作 oversized scallop forms',
          '把 crab claws 与真实 steel cement mixer 直接组合',
          '使用 painted steel、boat motor 与 GRP sea creatures 组成 VENICE 1984',
          '保留 readymade 原有工业 / 交通用途的可辨识性，同时让卡通身体侵入',
          '把 craft、domestic humour、art-historical readymade 与 Venice tourist imagery 放在同一物件系统',
        ],
        sourceUrl: boninVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Central Pavilion')],
      },
    ],
    awards: [],
    exhibitions: ['THE FATIGUE EMPIRE — Kunsthaus Bregenz 2010', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'Kunsthaus Bregenz · THE FATIGUE EMPIRE', url: boninFatigue },
      { label: 'La Biennale · Cosima von Bonin 2022', url: boninVenice },
      { label: 'Petzel · WHAT IF THEY BARK', url: boninPetzel },
    ],
  },

  'venice-dora-budor': {
    artistId: 'venice-dora-budor',
    projectCoverage: '3 个 reactive architecture / dust chamber / resonant machine 节点已建立深档案 · 2018–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Budor 的核心不是“科幻感装置”，而是把建筑残片、实时数据、dust、sound、工业模具和 pleasure device 组合成会响应外部环境的系统。',
    projects: [
      {
        title: 'Origin I–III',
        cluster: 'environmental chamber / construction noise / moving dust',
        period: '2019',
        summary: '三座密闭环境舱像实验室 / terrarium：内部 pigment、diatomaceous earth 与 FX dust 被 compressor 和 valves 吹动，系统读取附近施工噪声并据此改变空气输出。Turner 的大气绘画因此被重新做成真实运动的尘雾。',
        actions: [
          '制作 custom environmental chamber，内含 reactive electronic system、compressor 与 valves',
          '填入 organic / synthetic pigments、diatomaceous earth、FX dust 等细颗粒材料',
          '把附近 construction-site noise 转成控制空气输出的实时信号',
          '让外部施工越活跃，舱内尘雾越快速循环；安静时运动减缓',
          '分别依据 Turner paintings 的色调和工业时代大气作为视觉参照',
        ],
        sourceUrl: budorOrigin,
        images: [],
        relations: [rel('收藏', 'Queensland Art Gallery | Gallery of Modern Art', 'Origin I–III · purchased 2021')],
      },
      {
        title: 'I am Gong / The Preserving Machine',
        cluster: 'museum architecture / debris / biomimetic robot bird',
        period: '2018–2019',
        summary: 'Kunsthalle Basel 个展把建筑历史、拆建现场和实时环境当作一套“score”。The Preserving Machine 使用 biomimetic robot bird、建筑残片与 Musiksaal façade mock-up，让展览不是静态物件集合，而像受周围时间层驱动的 organism。',
        actions: [
          '调查 Kunsthalle Basel 及周边 Musiksaal 的建筑改造历史',
          '收集 1886、1905、1930 等时期的 building remains',
          '加入 biomimetic robot bird 与 custom audio-to-motion navigation system',
          '把 detritus、historic fragments 和 architectural mock-up 组合成可变化环境',
          '用 sound、dust 和实时事件共同控制展览中的“score”',
        ],
        sourceUrl: budorGong,
        images: [],
        relations: [rel('展览', 'Dora Budor: I am Gong — Kunsthalle Basel', '24 May–11 Aug 2019')],
      },
      {
        title: 'Autophones',
        cluster: 'acoustic wood / sex toy / industrial-machine mould',
        period: '2022',
        summary: 'Autophones 把工业权力外形和看不见的 libidinal vibration 合在一起：木质 resonant sculptures 内嵌 sex toys，外壳来自工业机械铸模，并直接回应 Arsenale 作为旧军工船厂的历史。',
        actions: [
          '与 musical-instrument workshop 协作制作 resonant wooden bodies',
          '按 acoustic properties 挑选具体木材',
          '从 industrial-machine casting moulds 派生外壳几何',
          '在木质腔体中嵌入 vibrating pleasure devices，使声音 / 震动从内部产生',
          '把附近停用的 20th-century air hammer 与新作形成现场工业参照',
        ],
        sourceUrl: budorVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: ['Guggenheim Fellowship for Creative Arts — 2019'],
    exhibitions: ['I am Gong — Kunsthalle Basel 2019', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'QAGOMA · Origin I–III', url: budorOrigin },
      { label: 'Kunsthalle Basel / Contemporary Art Library · I am Gong', url: budorGong },
      { label: 'La Biennale · Dora Budor 2022', url: budorVenice },
    ],
  },

  'venice-elaine-cameron-weir': {
    artistId: 'venice-elaine-cameron-weir',
    projectCoverage: '3 个 military-body / industrial-object / funerary-display 节点已建立深档案 · 2021–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Cameron-Weir 会直接使用 conveyor belt、military transfer case、funerary backdrop、lab hardware、theatrical lighting 等真实系统物件，让身体、国家、仪式与工业的关系通过材料重量和支撑方式发生。',
    projects: [
      {
        title: 'STAR CLUB REDEMPTION BOOTH',
        cluster: 'military remains case / conveyor belt / double-height installation',
        period: '2021',
        summary: 'Henry Art Gallery commission 在双层高空间中把用于运输美军人体遗骸的 metal cases 与 factory conveyor belts 连接。遗体运输容器既是重量，也变成控制生产线张力的 counterweight。',
        actions: [
          '取得 / 使用 military cases designed for transporting bodily remains',
          '将 cases 与 real factory conveyor belts 组合成受重力牵引的结构',
          '利用 Henry Art Gallery double-height space 让垂直张力可见',
          '把军事后勤和工业生产系统放进同一个 load-bearing mechanism',
          '通过灯光与金属表面强化物件同时像 memorial、machine 和 restraint device 的多义性',
        ],
        sourceUrl: cameronHenry,
        images: [],
        relations: [rel('展览', 'STAR CLUB REDEMPTION BOOTH — Henry Art Gallery', 'Apr–Sep 2021')],
      },
      {
        title: 'Statements',
        cluster: 'found industrial objects / mirror / imperfect symmetry',
        period: '2021',
        summary: 'Art Basel Statements presentation 以三组“不完全对称”雕塑与镜面组织空间。repurposed industrial objects、construction materials、lab hardware 和 theatrical lighting 被处理成一种既像身体装备又像展示制度的人工结构。',
        actions: [
          '从 industrial / construction / laboratory systems 搜集既有硬件',
          '成对或成组三次建立 imperfectly symmetrical arrangements',
          '加入 mirror 使对称看似完整但实际持续错位',
          '使用 theatrical lighting 主动制造 spectacle，而不是隐藏展示技术',
          '让 material wear、hardware function 和 staged display 共同暴露 belief / authority 如何被制造',
        ],
        sourceUrl: cameronJtt,
        images: [],
        relations: [rel('展览', 'Statements — Art Basel / JTT', '2021')],
      },
      {
        title: 'Low Relief Icon / Right Hand Left Hand, Grinds a Fantasizer’s Dust',
        cluster: 'conveyor + casket / funerary portal / Venice',
        period: '2021；exhibited 2022',
        summary: 'Venice 展示把前一年的两条材料线并置：Low Relief Icon 用 conveyor belts 和美军遗体箱形成受力结构；Right Hand Left Hand 则把 repurposed funerary backdrop、neon 和 spotlights 组成一扇承诺救赎却不可真正通过的 portal。',
        actions: [
          '让 conveyor belts 由 military caskets 作为 counterweights 保持张力',
          '在 casket 周边加入 flicker light，使军事物流容器具有 memorial / devotional ambiguity',
          '在 conveyor pewter disks 上重复 crucifix image，质疑 heroic sacrifice narrative',
          '把 funerary backdrop 重新竖立成 portal-like architecture',
          '用 neon / spotlights 制造“救赎入口”的视觉吸引，再以结构封闭其承诺',
        ],
        sourceUrl: cameronVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Central Pavilion')],
      },
    ],
    awards: [],
    exhibitions: ['STAR CLUB REDEMPTION BOOTH — Henry Art Gallery 2021', 'Art Basel Statements 2021', 'The Milk of Dreams — Venice 2022'],
    sources: [
      { label: 'Henry Art Gallery · Elaine Cameron-Weir', url: cameronHenry },
      { label: 'JTT · Statements 2021', url: cameronJtt },
      { label: 'La Biennale · Elaine Cameron-Weir 2022', url: cameronVenice },
    ],
  },

  'venice-giulia-cenci': {
    artistId: 'venice-giulia-cenci',
    projectCoverage: '3 个 agricultural-machine / hybrid-body / industrial-ruin 节点已建立深档案 · 2021–2025',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Cenci 的“后人类混种”来自很具体的 casting / recasting：农业机械、汽车零件、人和动物身体先被拆成模具和残件，再用铝、橡胶、金属、graphite、marble dust、ash 重新混成没有明确等级的身体。',
    projects: [
      {
        title: 'Tallone di ferro / Iron Heel',
        cluster: 'agricultural machinery / mechanical limbs / site-specific anatomy',
        period: '2021',
        summary: 'Museo Novecento 项目以农业机械和汽车部件形成机械臂 / 骨架式结构，既像 assembly line，又像工业文明失败后留下的解剖残骸。',
        actions: [
          '收集 agricultural-machine parts、car components 与废弃工业材料',
          '通过切割、焊接、casting 让 machine parts 变成近似 limbs / skeleton 的单元',
          '按展览建筑重新安排结构，使 sculpture 与 architecture 共同形成 anatomy',
          '保留零件原有磨损和功能接口，而不是把废料完全去历史化',
          '把 mechanised agriculture 与身体劳动的关系落实到真实机器残件',
        ],
        sourceUrl: cenciIron,
        images: [],
        relations: [rel('展览', 'Giulia Cenci: Tallone di ferro — Museo Novecento', '2021 · Florence')],
      },
      {
        title: 'dead dance',
        cluster: '150-metre walk / industrial farming / recycled aluminium bodies',
        period: '2021–2022',
        summary: 'Arsenale 户外空间变成约 150 米长的行进环境：industrial farming equipment 残骸构成 armature，人和动物身体碎片则由汽车零件回收铝铸成，并以重复迭代方式附着其上。',
        actions: [
          '从 industrial farming equipment 提取管道、支架、机械臂等 armature material',
          '制作 human / animal body-part moulds，再反复改造成 wolves、horses 与无法稳定命名的 fragments',
          '回收 auto parts 的 aluminium 重新熔铸身体单元',
          '让部分身体 cast 在路径中重复出现，而非每个形象唯一',
          '把整个安装扩展成 150-metre walk，使 industrial food production 转成观众的身体行进经验',
        ],
        sourceUrl: cenciVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale / Giardino delle Vergini route')],
      },
      {
        title: 'the hollow men',
        cluster: 'reclaimed material / human-animal hybrids / post-industrial habitat',
        period: '2025',
        summary: 'Palazzo Strozzi 延续废料与 hybrid figures 的方法：scraps、reclaimed industrial material、身体 cast 和动物形态构成一个没有清晰“人 / 机器 / 动物”分界的 habitat。',
        actions: [
          '继续收集 industrial scraps 与 reclaimed material 作为结构起点',
          '重复使用和改造既有人 / 动物 moulds，而不是为每次展览重新塑造完整人物',
          '通过 fragmentation 让 limbs、animal heads、pipes、frames 在同一结构中互换角色',
          '利用 exhibition architecture 把单件雕塑扩展成整体 habitat',
          '以材料循环本身反驳“作品完成后材料历史结束”的线性生产模式',
        ],
        sourceUrl: cenciHollow,
        images: [],
        relations: [rel('展览', 'Giulia Cenci: the hollow men — Palazzo Strozzi', '2025 · Florence')],
      },
    ],
    awards: [],
    exhibitions: ['Tallone di ferro — Museo Novecento 2021', 'The Milk of Dreams — Venice 2022', 'the hollow men — Palazzo Strozzi 2025'],
    sources: [
      { label: 'Museo Novecento · Tallone di ferro', url: cenciIron },
      { label: 'La Biennale · Giulia Cenci 2022', url: cenciVenice },
      { label: 'Palazzo Strozzi · the hollow men', url: cenciHollow },
    ],
  },

  'venice-hannah-levy': {
    artistId: 'venice-hannah-levy',
    projectCoverage: '3 个 silicone-skin / steel-furniture / body-design 节点已建立深档案 · 2021–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Levy 的方法建立在“身体与设计物”的摩擦：nickel-plated steel 像家具 / 安全栏，silicone 像皮肤 / 食物，marble 则把小型身体装置放大到公共建筑尺度。',
    projects: [
      {
        title: 'Where the threads are worn',
        cluster: 'silicone + nickel steel / uncanny furnishing / group context',
        period: '2021',
        summary: '这一阶段的 Untitled 等作品已经明确使用 polished nickel-plated steel 与 cast silicone，把家具 / 工业设计的精密框架和下垂、柔软、近皮肤的有机体贴在一起。',
        actions: [
          '先以细而高抛光的 steel rod 设计近 furniture / railing 的线性骨架',
          '使用 cast silicone 制作肉质、蔬果或皮肤般的柔软 form',
          '让 silicone 不是包裹金属，而是下垂、穿过、被 metal talons 托住',
          '通过重量、拉伸与接触点制造“不舒服但精致”的 bodily tension',
          '避免隐藏 join / support，使 functional-design language 与 fleshy body 同时可读',
        ],
        sourceUrl: levyThreads,
        images: [],
        relations: [rel('展览', 'Where the threads are worn — Casey Kaplan', '18 Mar–24 Apr 2021')],
      },
      {
        title: 'Retainer',
        cluster: 'orthodontics / marble + stainless steel / class marker',
        period: '2021–2022',
        summary: 'High Line commission 把原本可以放进口腔的 retainer 放大到接近公园长椅 / 栏杆尺度：mouth-cast form 用白色 Arabescato Altissimo marble 雕刻，wire 则放大成 stainless steel 公共设施般的硬结构。',
        actions: [
          '从自己更早的 alabaster retainer sculptures 发展为 public-scale version',
          '与 Henraux 使用 Apuan Alps Cervaiole quarry 的 Arabescato Altissimo marble 制作主体',
          '放大 orthodontic wire，使其粗细与 High Line railings 发生视觉对应',
          '让 mouth architecture 与 park architecture 直接共享尺度',
          '把 straight teeth 与昂贵 orthodontic treatment 作为 class marker 纳入物件含义',
        ],
        sourceUrl: levyRetainer,
        images: [],
        relations: [rel('展览', 'High Line Commission: Hannah Levy, Retainer', 'Apr 2021–Mar 2022')],
      },
      {
        title: 'Three new sculptures for The Milk of Dreams',
        cluster: 'silicone membrane / arthropod steel / marble peach pit',
        period: '2022',
        summary: 'Venice 三件新作把日常设计和身体异化推进到三种材料冲突：下垂 silicone sac 站在 arthropod-like metal legs 上；薄 silicone membrane 拉伸成 bat-wing / tent；peach pit 则被放大成 marble object。',
        actions: [
          '把 slumped silicone sac 与四条 polished metal arthropod legs 配对',
          '把 thin silicone membrane 拉伸在 winged steel structure 上，使它同时像 bat wing、tent 和 skin',
          '将 peach pit 放大并转译为 stone carving / marble facsimile',
          '保留 peach pit 含 cyanide 的物质联想，让工艺对象与毒性共存',
          '让每件作品都停在 functional furniture 与 aesthetic object 之间，不给出明确使用方式',
        ],
        sourceUrl: levyVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Central Pavilion')],
      },
    ],
    awards: [],
    exhibitions: ['Where the threads are worn — Casey Kaplan 2021', 'Retainer — High Line 2021–2022', 'The Milk of Dreams — Venice 2022'],
    sources: [
      { label: 'Casey Kaplan · Where the threads are worn', url: levyThreads },
      { label: 'Fondazione Henraux · Retainer', url: levyRetainer },
      { label: 'La Biennale · Hannah Levy 2022', url: levyVenice },
    ],
  },

  'venice-kaari-upson': {
    artistId: 'venice-kaari-upson',
    projectCoverage: '3 个 psycho-archive / domestic cast / bodily portrait 节点已建立深档案 · 2007–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Upson 的家庭 / 心理主题始终通过具体物质方法推进：陌生人的废弃私人物件先变成调查档案，童年 dollhouse 再被 3D scan 到真人尺度，晚期 portraits 则从厚重绘画经过 3D modelling、mould、urethane / resin casting 反复转译。',
    projects: [
      {
        title: 'The Larry Project',
        cluster: 'found personal archive / fictional biography / drawing + video + object',
        period: '2007–2012',
        summary: 'Upson 进入父母社区一栋废弃房屋，取得陌生男性“Larry”留下的私人物件与照片，再围绕这些残留材料制造一个可能真实、也可能投射自我的复杂人物。',
        actions: [
          '收集 abandoned house 中被丢弃的 photographs、notes 与 personal effects',
          '对 found photographs 进行分类、钉贴、再拍摄、绘画、扫描和放大',
          '以 drawings、videos、paintings、sculptures 分别测试同一人物的互相矛盾版本',
          '不做事实 biography 核验，而主动把 conjecture、desire 与心理投射加入 archive',
          '让“了解一个陌生人”逐渐变成对 observer 自身欲望结构的调查',
        ],
        sourceUrl: upsonHammer,
        images: [],
        relations: [rel('展览', 'Hammer Projects: Kaari Upson', '27 Nov 2007–17 Feb 2008')],
      },
      {
        title: 'THERE IS NO SUCH THING AS OUTSIDE',
        cluster: 'dollhouse 3D scan / enlarged domestic cast / childhood interior',
        period: '2017–2019',
        summary: 'Upson 把童年 dollhouse 连同内部物件 3D 扫描，再将玩具住宅放大到接近真人 1:1 尺度。一个原本能从外部俯视的 miniature domestic world 因此反过来包围观众。',
        actions: [
          '取出 childhood dollhouse 及其 miniature contents 作为扫描对象',
          '对小型房屋和家具进行 3D scanning',
          '把 digital model 大幅放大到 human-like / room-like scale',
          '通过 casting、surface processing 让复制体保留既像玩具又像建筑的比例错乱',
          '让私人 childhood object 从“可掌控模型”转成观众无法从外部一次看清的环境',
        ],
        sourceUrl: upsonLouisiana,
        images: [],
        relations: [rel('展览', 'Louisiana Museum retrospective context', 'THERE IS NO SUCH THING AS OUTSIDE shown as major work')],
      },
      {
        title: 'Portrait (Vain German)',
        cluster: 'miniature impasto → 3D mould → urethane / resin cast',
        period: '2020–2021；exhibited Venice 2022',
        summary: '晚期 portrait series 从 miniature canvas 上的厚重 impasto faces 开始，再经 3D modelling 制作 mould / cast，最后叠加 urethane、resin、pigment。portrait 因此不再只是“画脸”，而是一个不断被复制、鼓起、破坏和覆盖的物质身体。',
        actions: [
          '先在 miniature canvases 上以 thick impasto 与其他材料制造 faces',
          '将这些 painted reliefs 转换成 3D digital models',
          '依据模型制作 moulds 和 dimensional casts',
          '反复叠加 urethane、resins、pigments 使表面从 fleshy pink 到 fluorescent / skeletal 状态变化',
          '让面孔在 recognisable、fragmented、ghoulish、abstract 与 obliterated 之间连续滑动',
        ],
        sourceUrl: upsonVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · posthumous presentation')],
      },
    ],
    awards: [],
    exhibitions: ['Hammer Projects — 2007–2008', 'Louisiana Museum retrospective context', 'The Milk of Dreams — Venice 2022'],
    sources: [
      { label: 'Hammer Museum · Kaari Upson', url: upsonHammer },
      { label: 'Louisiana Museum · Kaari Upson', url: upsonLouisiana },
      { label: 'La Biennale · Kaari Upson 2022', url: upsonVenice },
    ],
  },
};
