import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const hornHarvard = 'https://harvardartmuseums.org/collections/object/351639?position=351639';
const hornVenice = 'https://www.labiennale.org/en/art/2022/seduction-cyborg/rebecca-horn';
const hornSerpentine = 'https://www.serpentinegalleries.org/whats-on/rebecca-horn-1994/';

const vasquezVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/sandra-v%C3%A1squez-de-la-horra';

const linWalker = 'https://www.walkerart.org/whats-on/candice-lin/';
const linWalkerCollection = 'https://www.walkerart.org/collections/artwork/seeping-rotting-resting-weeping/';
const linVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/candice-lin';

const solarMatadero = 'https://www.mataderomadrid.org/programacion/teresa-solar-abboud-cabalga-cabalga-cabalga';
const solarPumping = 'https://travesiacuatro.com/exposicion/pumping-station/';
const solarVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/teresa-solar';
const solarMacba = 'https://www.macba.cat/en/obra/r6377-tunnel-boring-machine/';

const marconPrada = 'https://www.fondazioneprada.org/project/programma-2/?lang=en';
const marconVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/diego-marcon';

const piotrowskaMack = 'https://www.mackbooks.us/products/frowst-br-joanna-piotrowska';
const piotrowskaMoma = 'https://www.moma.org/collection/works/229599';
const piotrowskaVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/joanna-piotrowska';

export const archiveBatch77: Record<string, ArtistArchive> = {
  'venice-rebecca-horn': {
    artistId: 'venice-rebecca-horn',
    projectCoverage: '3 个 body-extension / cyborg mechanism / kinetic ritual 关键阶段已建立深档案 · 1968–1990s',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。这里把 Horn 从“可穿戴身体延伸”一直整理到脱离人体、自行运动的机械装置：身体先被器具拉长、限制和重新测量，之后机器本身开始替身体呼吸、碰撞、展开与收缩。',
    projects: [
      {
        title: 'Personal Art / Body Extensions — Unicorn, Pencil Mask, Finger Gloves',
        cluster: 'wearable prosthesis / performance / body-space measurement',
        period: '1968–1972',
        summary: 'Horn 在长期病后隔离经验中发展出一组“身体延伸”：独角兽长锥、超长手指、铅笔面具、羽毛与布翼等结构被绑到身体上，使触摸、行走、绘画和保持平衡都必须重新学习。作品通常以 performance 再由 16mm film 保存。',
        actions: [
          '以 fabric、wood、metal、feather 等轻型材料制作可穿戴 extension，而不是独立 pedestal sculpture',
          '把装置直接绑在头、手臂、手指或躯干，使人的正常活动范围被迫改变',
          '在 Pencil Mask 中把 pencils 固定在脸部网格交叉点，让头部摆动直接在墙上留下线痕',
          '在 Unicorn / Finger Gloves 中通过过度延长身体部位重新定义人与周围空间的距离',
          '用 16mm film 记录动作，使 sculpture、performance 与 moving image 成为同一作品链条',
        ],
        sourceUrl: hornHarvard,
        images: [],
        relations: [
          rel('展览', 'documenta 5 — Kassel', '1972 · early Body Extensions brought Horn international attention'),
          rel('展览', 'The Milk of Dreams / Seduction of the Cyborg — Venice Biennale', '2022 · historical capsule contextualised early body extensions'),
        ],
      },
      {
        title: 'Kiss of the Rhinoceros',
        cluster: 'kinetic steel / electric contact / animal-machine body',
        period: '1989',
        summary: '两条巨大的 steel arms 各以 rhinoceros horn 结束，缓慢张开、合拢；当两端接触时产生电流。机器把拥抱、接吻或呼吸这样的身体节律转换成金属、马达与电的 cyborg gesture。',
        actions: [
          '制作接近完整圆环的两条大型 steel arms，并为其设置可控的机械运动',
          '在末端安装金属 rhinoceros horns，使接触点成为整个动作的高潮',
          '让两臂反复分离与合拢，形成近似 breathing / embracing 的周期',
          '在 horn tips 相遇时引入 electric discharge，使“触碰”真正产生物理事件',
          '把动物器官、人体动作与工业机构组合成无法被归入单一身体的 hybrid figure',
        ],
        sourceUrl: hornVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Seduction of the Cyborg historical capsule')],
      },
      {
        title: 'Concert for Anarchy',
        cluster: 'motorised piano / timed eruption / autonomous machine performance',
        period: '1990；major retrospective context 1993–1994',
        summary: '一架 grand piano 倒挂在天花板上，平时像失去用途的家具；定时启动后琴盖突然打开，琴键向外喷出并悬挂在钢丝上，随后又缓慢缩回。熟悉乐器被改造成有休眠、爆发和恢复节律的 autonomous performer。',
        actions: [
          '把真实 grand piano 倒置悬挂，彻底改变其正常重力和演奏姿态',
          '在内部加入 motorised mechanism 与线缆控制 keyboard / lid 的突然释放',
          '设定周期，使机器在静止与暴烈 movement 之间自动切换',
          '让 keys 悬挂、震动和回缩产生声音，而不是由 pianist 演奏固定乐曲',
          '将熟悉 instrument 的社会秩序翻转成不可预测的 mechanical ritual',
        ],
        sourceUrl: hornSerpentine,
        images: [],
        relations: [rel('展览', 'Rebecca Horn retrospective — Guggenheim / Serpentine / Tate touring context', '1993–1995')],
      },
    ],
    awards: ['Praemium Imperiale for Sculpture — 2010', 'Wilhelm Lehmbruck Prize — 2017'],
    exhibitions: ['documenta 5 — 1972', 'Rebecca Horn retrospective — Guggenheim / European tour 1993–1995', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'Harvard Art Museums · Rebecca Horn films / Performances II', url: hornHarvard },
      { label: 'La Biennale · Rebecca Horn 2022', url: hornVenice },
      { label: 'Serpentine · Rebecca Horn retrospective', url: hornSerpentine },
    ],
  },

  'venice-sandra-vasquez-de-la-horra': {
    artistId: 'venice-sandra-vasquez-de-la-horra',
    projectCoverage: '3 个 wax drawing / body-landscape / folded-paper installation 阶段已建立深档案 · 2015–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。重点不是把她笼统归为“超现实主义绘画”，而是看纸怎样被 wax 封存、身体怎样与土地和文字融合，以及平面 drawing 如何通过折纸和建筑式陈列进入空间。',
    projects: [
      {
        title: 'Der Tod und das Mädchen',
        cluster: 'graphite drawing / molten beeswax / death iconography',
        period: '2015',
        summary: '作品把 Santa Muerte 式骷髅、女性身体和死亡寓意压进小尺幅 drawing，再以 molten beeswax 封住纸面。蜡既让纸变得半透明和脆弱，也把 drawing 变成近似 votive object / preserved skin 的物质。',
        actions: [
          '以 graphite / drawing 建立女性、骷髅与边缘宗教符号的叠合图像',
          '将完成的纸张浸入或覆盖 molten beeswax，而不是仅在表面涂清漆',
          '利用 wax 改变纸张 translucency、色温、重量和触感',
          '保留小尺幅与手持尺度，使作品接近护符、遗像或私密档案',
          '让 Indigenous / marginalised imagery 与欧洲 death-and-maiden motif 发生冲突',
        ],
        sourceUrl: vasquezVenice,
        images: [],
        relations: [],
      },
      {
        title: 'Erupciones / Flotante y su genealogía',
        cluster: 'female body / volcanic-landscape fusion / genealogy',
        period: '2019–2020',
        summary: '这一阶段女性身体不再只是单独人物，而与火山、植物、地形和家谱式结构互相长入。身体可以成为 landscape，landscape 也像器官，个人史、拉丁美洲殖民暴力和 Mother Earth 图像因此被放进同一形态系统。',
        actions: [
          '把 female torso、limb 与 mountain / eruption / root 等自然形态画成连续轮廓',
          '通过重复人物、分支与 genealogy-like arrangement 建立跨代关系',
          '在 drawing 完成后继续以 beeswax 处理，使系列具有统一物质表面',
          '让身体既承担 creator / Mother Earth 角色，也保留被压迫、受伤与被观看状态',
          '把 myth、sexuality、political memory 与 everyday handwriting 放进同一纸面而不区分高低层级',
        ],
        sourceUrl: vasquezVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · works from 2019–2020 presented in Arsenale')],
      },
      {
        title: 'Saludo a Olorun / accordion-fold works',
        cluster: 'graphite + watercolour + wax / accordion fold / house display',
        period: '2021–2022',
        summary: '到 Venice 2022，部分纸上作品被折成 accordion-like structures，drawing 不再只是挂墙平面；折痕制造多个同时可见 / 不可见的面，再被放进艺术家设计的 house-like wooden structure 中，形成纸张、身体与建筑的嵌套。',
        actions: [
          '结合 graphite、watercolour 与 wax-on-paper 制作新的图像层',
          '在完成图像后把纸反复 accordion-fold，使正反面和折缝进入构图',
          '利用 fold 的厚度让 paper drawing 可以自立或以浅浮雕方式占据空间',
          '设计 house-like wooden structure 作为整组作品的观看容器，而不是使用常规白墙挂法',
          '让观众移动才能看到不同折面，使阅读文字 / 身体图像变成时间性的观看动作',
        ],
        sourceUrl: vasquezVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Sandra Vásquez de la Horra 2022', url: vasquezVenice }],
  },

  'venice-candice-lin': {
    artistId: 'venice-candice-lin',
    projectCoverage: '3 个 living-material / indigo-temple / colonial transformation 系统已建立深档案 · 2016–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Lin 的关键不是“使用奇怪材料”，而是让物质真的发生变化：silkworm 生长、植物存活、indigo 染色、mud 烧成陶、kudzu starch 变 bioplastic、药材被 copper plating，使殖民贸易史通过材料过程而不是说明文字发生。',
    projects: [
      {
        title: 'The Mountain',
        cluster: 'living silkworms / mulberry / natural-history table / multispecies archive',
        period: '2016',
        summary: '桌面装置把 paintings、living silkworms、mulberry plants、ceramic fragments 与 taxidermied iguana 等并置，像一座失控的自然史展示台。活体、标本和手工物同时存在，使 museum classification 与 commodity history 失去清楚边界。',
        actions: [
          '把 living silkworms 与其食物 mulberry plants 直接带入 exhibition system',
          '使用 table-top display 模仿 anthropology / natural-history collection 的分类语法',
          '把 ceramic fragments、painting、taxidermied animal 与活体材料放在同一层级',
          '让动物生长和植物状态带来展期内不可完全控制的变化',
          '通过 silk / botanical history 暗示商品贸易、劳动与殖民知识生产之间的联系',
        ],
        sourceUrl: linVenice,
        images: [],
        relations: [],
      },
      {
        title: 'Seeping, Rotting, Resting, Weeping',
        cluster: 'indigo textile / ceramic cat / tactile theatre / qigong animation',
        period: '2021–2022',
        summary: '一座 nomadic tent / quasi-temple 由手绘和手工印制的 indigo textiles、ceramic cats、plaster / concrete tactile theaters 与动画组成。观众被邀请坐、躺、触摸，并跟随 animated cat 进行 qigong breathing / movement，知识从“看说明牌”转向整个身体。',
        actions: [
          '学习并使用 katazome / tsutsugaki 等 indigo printing / drawing 技法制作大幅 cotton panels',
          '手塑 ceramic cats 与其他 hybrid creature，使动物角色贯穿实体和动画',
          '制作 plaster / concrete tactile theaters，让 touch 被允许进入 museum experience',
          '用 3D / video animation 让 cat figure 引导 qigong breathing 和 movement exercise',
          '按 Walker、Carpenter Center、BAMPFA 等不同 gallery site 重新调整 tent、objects 与 circulation',
        ],
        sourceUrl: linWalker,
        images: [],
        relations: [
          rel('展览', 'Walker Art Center', '2021–2022 · commissioned site-responsive installation'),
          rel('收藏', 'Walker Art Center', 'multipart installation acquired 2022'),
        ],
      },
      {
        title: 'Xternetsa',
        cluster: 'mud-to-ceramic / kudzu bioplastic / electroplated herbs / material translation',
        period: '2022',
        summary: 'Xternetsa 把前述 table system 和 textile / ritual environment重新组织成一条 material-transformation path：Saint Malo swamp mud 被烧成 ceramic，kudzu starch 被煮成 bioplastic，ginseng 与 Dong quai 被 electroplated in copper。殖民迁徙与贸易不再只是文本背景，而写进物质转化链。',
        actions: [
          '取得与 Saint Malo 这一早期 Asian settlement 历史相关的 swamp mud，并将其 firing 成 ceramic',
          '从 invasive kudzu plant 提取 starch，经过 boiling / moulding 制作 bioplastic',
          '把 ginseng、Dong quai 等 Chinese medicinal herbs 进行 copper electroplating',
          '重新使用 / 重组 The Mountain 与 Seeping 等项目中的 table / display logic',
          '让 craft、botany、lab-like transformation 与 colonial trade histories 在一条参观路径中连续发生',
        ],
        sourceUrl: linVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: ['Louis Comfort Tiffany Award — 2017', 'Joan Mitchell Foundation Painters & Sculptors Grant — 2019'],
    exhibitions: ['Seeping, Rotting, Resting, Weeping — Walker / Carpenter Center / BAMPFA 2021–2022', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'Walker Art Center · Seeping, Rotting, Resting, Weeping', url: linWalker },
      { label: 'Walker collection · material record', url: linWalkerCollection },
      { label: 'La Biennale · Candice Lin 2022', url: linVenice },
    ],
  },

  'venice-teresa-solar': {
    artistId: 'venice-teresa-solar',
    projectCoverage: '3 个 comparative-anatomy / tactile-language / excavation-machine 阶段已建立深档案 · 2018–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Solar 的形态不是凭空“奇幻”：她反复把 anatomy museum、amusement ride、speech organ、ceramic hand memory 与 tunnelling machine 混合，让同一 arch / mouth / fin / claw 在不同项目中不断变体。',
    projects: [
      {
        title: 'Cabalga, cabalga, cabalga / Ride, Ride, Ride',
        cluster: 'comparative anatomy / repeated arch / site-specific sculptural family',
        period: '2018',
        summary: '在 Matadero Madrid 的旧冷库中，Solar 排列大量彼此相似但尺度、颜色和用途不同的 arch-like sculptures。结构参考 Paris Comparative Anatomy Museum 中大批骨骼向前“行走”的展示，同时混入 amusement-park storage 的碎片感和 Egyptian goddess Nut 的拱形身体。',
        actions: [
          '研究 comparative anatomy museum 中不同 vertebrate skeleton 被并排比较的展示方式',
          '抽取 arch 作为基础语法，并在尺寸、厚度、颜色、材质和指涉上反复变形',
          '将 marine animal、fairground horse、canoe、teeth 等来源不同的形态转译成“同族”对象',
          '把 sculptures 按旧 slaughterhouse cold-room 的 dark site 组织成连续 procession',
          '使用高饱和色与空间黑暗形成对抗，使物件像从暗处浮现的 evolving morphology',
        ],
        sourceUrl: solarMatadero,
        images: [],
        relations: [rel('展览', 'Abierto x Obras — Matadero Madrid', '16 Feb–29 Jul 2018')],
      },
      {
        title: 'Pumping Station',
        cluster: 'ceramic hand-memory / language organ / pump-tunnel anatomy',
        period: '2019',
        summary: 'Pumping Station 把语言想成一种器官：glazed ceramic、metal、fiberglass、bronze 和 automotive paint 被反复做成 tunnel、mouth、pump、cut、desert、static 等组合。展览强调“手如何听、皮肤如何看”的非语言知识，让制作动作本身成为 communication system。',
        actions: [
          '以 throwing / modelling ceramic 的手部动作保留 fingerprints、curve 与 hollow 的制作记忆',
          '将 glazed ceramic 与 metal structure 组合成 pump / tunnel / anatomical-model-like objects',
          '同时使用 fiberglass + automotive paint 制作更光滑、工业化的同族形体',
          '把作品标题拆成“Tunnel / Mouth / Pumping machinery / Static / Desert”等词块，像不断重组的语言系统',
          '以整场 installation 而非单件 sculpture 组织材料之间的“对话”，比较 verbal language 与 tactile knowledge',
        ],
        sourceUrl: solarPumping,
        images: [],
        relations: [rel('展览', 'Pumping Station — Travesía Cuatro CDMX', 'May–Jul 2019')],
      },
      {
        title: 'Tunnel Boring Machine',
        cluster: 'high-temperature clay / resin fins-claws / industrial biomimicry',
        period: '2021–2022',
        summary: '系列从真实 tunnel-boring machinery 的切削结构出发：粗粝、高温烧制的 hand-shaped clay base 上长出光滑的 resin beaks、fins、claws、oars，像 prehistoric animal 与 excavation equipment 同时从地层中出现。',
        actions: [
          '研究 TBM 切削 soil / rock 的机械结构，并从中抽取 radial / blade / fin 形式',
          '用 high-temperature clay 手工塑造沉重基座，刻意保留手指和压力痕迹',
          '制作 elongated resin appendages，再以 bright acrylic / automotive finish 抛到近工业产品表面',
          '以 metal shaft 把 ceramic base 与 resin extensions 连接，制造 organic / engineered material contrast',
          '在 Venice 2022 以三件大型 sister sculptures 并列，让单一 machine idea 像生物物种一样分化',
        ],
        sourceUrl: solarVenice,
        images: [],
        relations: [
          rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale'),
          rel('收藏', 'MACBA Foundation', 'Tunnel Boring Machine works acquired 2022'),
        ],
      },
    ],
    awards: ['XV Premio ARCO / Comunidad de Madrid para Jóvenes Artistas — 2018'],
    exhibitions: ['Cabalga, cabalga, cabalga — Matadero Madrid 2018', 'Pumping Station — Travesía Cuatro CDMX 2019', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'Matadero Madrid · Cabalga, cabalga, cabalga', url: solarMatadero },
      { label: 'Travesía Cuatro · Pumping Station', url: solarPumping },
      { label: 'La Biennale · Teresa Solar 2022', url: solarVenice },
      { label: 'MACBA · Tunnel Boring Machine', url: solarMacba },
    ],
  },

  'venice-diego-marcon': {
    artistId: 'venice-diego-marcon',
    projectCoverage: '3 个 structural-horror / animation hybrid / prosthetic uncanny film 阶段已建立深档案 · 2017–2021',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Marcon 的恐怖感不是“题材阴暗”而已，而来自形式系统：结构电影的重复、CGI threat、traditional cartoon aesthetic、人工 prosthetic face、musical monologue 与精确灯光被组合成一种看起来熟悉却失去生命感的 cinema。',
    projects: [
      {
        title: 'Monelle',
        cluster: '16mm / rationalist architecture / structural cinema + horror CGI',
        period: '2017',
        summary: '小女孩们睡在 Giuseppe Terragni 的 Casa del Fascio 黑暗空间里，CGI 制作的威胁性形体与她们共享建筑。Marcon 把 structural cinema 的冷静重复和 horror cinema 的期待机制并置，使 rationalist architecture 本身像一台产生不安的装置。',
        actions: [
          '选择 Casa del Fascio 这一高度编码的 rationalist architecture 作为真实拍摄空间',
          '安排 sleeping girls 处在空间中，压低传统叙事动作',
          '在 live-action footage 中加入 CGI threatening figures，而不追求完全自然的融合',
          '用 repetition / duration 等 structural-film technique 延长“什么都没发生”的紧张感',
          '让 architecture、child body 与 digital intruder 共同制造 uncanny，而不是依赖 jump scare',
        ],
        sourceUrl: marconPrada,
        images: [],
        relations: [rel('展览', 'Fondazione Prada Cinema Godard — Diego Marcon programme', 'retrospective film programme 2023')],
      },
      {
        title: 'Ludwig',
        cluster: 'child song / storm set / fragile flame / theatrical cinema',
        period: '2018',
        summary: '一个孩子坐在暴风雨中船舱的箱子上唱歌，同时努力不让火柴熄灭。作品把童谣式声音、灾难环境和极小的 survival task 压在一起，儿童娱乐的形式因此被推向持续焦虑。',
        actions: [
          '搭建 / 控制 stormy ship-hold environment，使天气和空间都成为 staged cinematic device',
          '让 child performer 保持近静止姿势，把 dramatic event 压缩到一根 match 的火焰',
          '以 song / repetitive vocal rhythm 代替普通对白推进时间',
          '精确控制 light 与 darkness，使火柴成为画面内部的脆弱照明源',
          '把 children’s entertainment 的形式与死亡 / instability 的情绪故意错配',
        ],
        sourceUrl: marconPrada,
        images: [],
        relations: [rel('展览', 'Fondazione Prada Cinema Godard — Diego Marcon programme', 'film shown in programme')],
      },
      {
        title: 'The Parents’ Room',
        cluster: '35mm / facial prosthetics / CGI bird / musical family murder',
        period: '2021',
        summary: '父亲坐在床边，以 choir-backed song 描述自己杀死妻子与孩子后自杀；人物都由真人演员扮演，却戴着从自身面部翻模的 synthetic prostheses，结果像逼真 stop-motion doll。开头和结尾的 CGI blackbird 把整段暴力封进无尽 loop。',
        actions: [
          '从 actors faces 取 mould / cast，制作贴合真人的 synthetic prosthetic doubles',
          '让真人 performer 戴上近乎自身复制品的假脸，故意进入 uncanny valley',
          '以 35mm film 拍摄，并精确控制 set、lighting、costume、sound 与 script',
          '把父亲的 murder-suicide confession 写成 musical monologue，并以 choir / orchestration 支撑',
          '制作 CGI blackbird 作为 loop 的 opening / closing marker，使影片在展览中没有真正终点',
        ],
        sourceUrl: marconVenice,
        images: [],
        relations: [
          rel('展览', 'Directors’ Fortnight — Cannes', 'world premiere 2021'),
          rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale loop installation'),
        ],
      },
    ],
    awards: [],
    exhibitions: ['The Parents’ Room — Cannes Directors’ Fortnight 2021', 'The Milk of Dreams — Venice Biennale 2022', 'Fondazione Prada Cinema Godard programme 2023'],
    sources: [
      { label: 'Fondazione Prada · Diego Marcon film programme', url: marconPrada },
      { label: 'La Biennale · Diego Marcon 2022', url: marconVenice },
    ],
  },

  'venice-joanna-piotrowska': {
    artistId: 'venice-joanna-piotrowska',
    projectCoverage: '3 个 staged-family / self-defense / domestic-shelter 摄影阶段已建立深档案 · 2013–2019',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Piotrowska 的照片看起来像“家庭纪实”，但关键动作其实是 staging：她给亲属、女性或住户明确动作任务，再拍摄身体如何在亲密、保护、服从和防御之间卡住。',
    projects: [
      {
        title: 'FROWST',
        cluster: 'staged family / Family Constellations / sculptural intimacy',
        period: '2013–2014',
        summary: 'Piotrowska 邀请真实家庭成员重新摆出亲密动作，黑白照片中的拥抱、依赖和身体重叠因此既熟悉又不舒服。部分 pose 受到 Bert Hellinger 的 Family Constellations therapy 启发，让家庭关系被转成可观察的身体结构。',
        actions: [
          '进入不同家庭，但不以 candid documentary 方式等待“自然瞬间”',
          '要求 family members 重新 enact tenderness / closeness，把 spontaneous gesture 转成有意识 pose',
          '参考 Family Constellations 中通过站位、身体方向和距离暴露 family dynamics 的方法',
          '使用 black-and-white gelatin silver photography 消除日常生活的彩色情境提示',
          '在 book sequence 中让多组家庭互相映照，使 cosy / claustrophobic 两种感受持续切换',
        ],
        sourceUrl: piotrowskaMack,
        images: [],
        relations: [
          rel('出版', 'FROWST — MACK', '2014'),
          rel('奖项', 'MACK First Book Award', 'winner 2014'),
          rel('收藏', 'Museum of Modern Art, New York', 'FROWST works in collection'),
        ],
      },
      {
        title: 'Self-Defense',
        cluster: 'manual-derived gesture / bedroom staging / structural violence',
        period: '2014–2015',
        summary: '年轻女性多在自己的 bedroom 中摆出从 self-defense manuals 提取的动作。姿势本来为攻击发生时准备，但在安静室内被单独冻结，既像 rehearsal、submission，也像潜在反击，使“家是安全空间”的假设失效。',
        actions: [
          '从 self-defense manuals 中挑选 blocking / escaping / defensive gestures 作为 pose instruction',
          '在 subjects 自己的 bedroom / domestic room 中拍摄，而不是在 gym 或街头模拟袭击',
          '让动作脱离 attacker，使身体姿态本身成为 structural violence 的证据',
          '维持 black-and-white、静态 frontal / spatial clarity，让 viewer 能读出 limb 与 room 的张力',
          '避免戏剧性 fight reenactment，把防御变成长期潜伏在日常空间中的准备状态',
        ],
        sourceUrl: piotrowskaVenice,
        images: [],
        relations: [],
      },
      {
        title: 'Frantic',
        cluster: 'makeshift shelter / domestic objects / care-control ambiguity',
        period: '2016–2019',
        summary: 'Piotrowska 要住户用家中已有家具、枕头、床单和物件搭临时 shelter，再让身体进入其中。儿童堡垒般的游戏同时变成成人的防御结构：comfort objects 既保护人，也显示家庭空间中无形的焦虑、记忆和权力。',
        actions: [
          '要求 participant 只使用自己家中 readily available objects 搭建 shelter',
          '让 blanket、pillow、chair、table 等 comfort / domestic objects 改变成 wall、roof 与 barrier',
          '让建造者本人进入 shelter 并选择 crouch / lie / hide 等身体位置',
          '拍摄结构与人物的尺寸关系，使“保护”同时显得逼仄或无法真正遮蔽',
          '跨多个家庭重复同一 instruction，用不同建造结果比较 private anxiety 如何转成空间形式',
        ],
        sourceUrl: piotrowskaVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale presentation of Frantic / Self-Defense works')],
      },
    ],
    awards: ['MACK First Book Award — 2014', 'Jerwood / Photoworks Award — 2015'],
    exhibitions: ['Being: New Photography — MoMA 2018', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'MACK · FROWST', url: piotrowskaMack },
      { label: 'MoMA · FROWST collection', url: piotrowskaMoma },
      { label: 'La Biennale · Joanna Piotrowska 2022', url: piotrowskaVenice },
    ],
  },
};
