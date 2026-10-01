import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const groschVenice = 'https://www.labiennale.org/en/art/2022/seduction-cyborg/karla-grosch';
const lijnVenice = 'https://www.labiennale.org/en/art/2022/seduction-cyborg/liliane-lijn';
const nevelsonVenice = 'https://www.labiennale.org/en/art/2022/seduction-cyborg/louise-nevelson';
const poderVenice = 'https://www.labiennale.org/en/art/2022/seduction-cyborg/anu-p%C3%B5der';
const schulzVenice = 'https://www.labiennale.org/en/art/2022/seduction-cyborg/lavinia-schulz-e-walter-holdt';
const vassilieffVenice = 'https://www.labiennale.org/en/art/2022/seduction-cyborg/marie-vassilieff';

export const archiveBatch94: Record<string, ArtistArchive> = {
  'venice-karla-grosch': {
    artistId: 'venice-karla-grosch',
    projectCoverage: '2 个 Bauhaus material-dance / constrained-body 节点已建立深档案 · 1929',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Grosch 的身体并不是在服装中自由表演，而是被 metal / glass costume 主动限制、改造，再从限制中发展新的 movement vocabulary。',
    projects: [
      {
        title: 'Metalltanz',
        cluster: 'sheet metal / athletic movement / body-machine tension',
        period: '1929',
        summary: '在 Oskar Schlemmer 的 Materialtänze 环境中，Grosch 与 sheet-metal components 一起运动，身体必须在硬质材料的阻碍下完成强烈、几何化动作。',
        actions: [
          '将 sheet-metal elements 直接加入 costume / stage environment',
          '利用金属重量和刚性改变 dancer 的正常 movement range',
          '采用 dramatic、geometric、athletic gestures 适应材料阻力',
          '让 costume 不再是 decoration，而成为动作生成器',
        ],
        sourceUrl: groschVenice,
        images: [],
        relations: [rel('展览', 'Seduction of the Cyborg — Venice Biennale 2022', 'Arsenale historical capsule')],
      },
      {
        title: 'Glastanz',
        cluster: 'crystal rods / constrained costume / half-human half-robot figure',
        period: '1929',
        summary: '长而细的 crystal rods 构成 skirt-like costume，严重限制身体移动，Grosch 反而通过这种被束缚状态形成近似 divine / robotic being 的新姿态。',
        actions: [
          '用 long thin crystal rods 扩大并硬化 lower-body silhouette',
          '接受 costume 对步幅与转身的限制而不是隐藏限制',
          '把受限 movement 发展成新的 geometric pose',
          '通过透明 / 反光材料制造 human / machine hybrid appearance',
        ],
        sourceUrl: groschVenice,
        images: [],
        relations: [],
      },
    ],
    awards: [], exhibitions: ['Seduction of the Cyborg — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Karla Grosch 2022', url: groschVenice }],
  },

  'venice-liliane-lijn': {
    artistId: 'venice-liliane-lijn',
    projectCoverage: '3 个 word-machine / feathered hybrid / spring-body 节点已建立深档案 · 1960s–1984',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Lijn 从 Poem Machines 开始，把文字、旋转、光与机械运动结合；后来又把女性身体想象成 feather / synthetic fibre / steel / prism 组成的 posthuman hybrid。',
    projects: [
      {
        title: 'Poem Machines',
        cluster: 'rotating cylinder / printed language / kinetic vibration',
        period: '1960s',
        summary: '印有文字的 cylinders 高速旋转，单词因速度失去稳定可读性，变成 vibration / light-like optical event。',
        actions: [
          '把 printed words 排布到 rotating cylinder surface',
          '使用 motor 让 cylinder 高速持续旋转',
          '让 language 从 semantic reading 转成 optical vibration',
          '把 sculpture、poetry 与 machine timing 合为一个系统',
        ],
        sourceUrl: lijnVenice,
        images: [], relations: [],
      },
      {
        title: 'Feathered Lady / Heshe',
        cluster: 'feather + synthetic fibre / steel / ambiguous female machine-body',
        period: '1979–1980',
        summary: '软质 feather dusters 与 synthetic fibres 同 piano wire、steel、optical glass prism 并置，形成 part-machine / part-animal / part-plant 的 ambiguous female figure。',
        actions: [
          '将 feather / synthetic fibre 与 steel / wire 等工业材料直接并置',
          '利用 optical prisms redirect light，使身体表面参与光学变化',
          '让 soft / hard、organic / industrial 材料维持冲突',
          '避免固定 binary gender silhouette，发展 ambiguous humanoid form',
        ],
        sourceUrl: lijnVenice,
        images: [],
        relations: [rel('展览', 'Seduction of the Cyborg — Venice Biennale 2022', 'Arsenale historical capsule')],
      },
      {
        title: 'Gemini',
        cluster: 'metal spring / tension-release / kinetic feminine form',
        period: '1984',
        summary: '通过 metal spring 的 tension / release 建立 kinetic structure，把机械弹性本身转成新的 body logic。',
        actions: [
          '以 spring tension 作为 formal structure 而不是隐藏 mechanism',
          '让 release / compression 直接决定 sculpture posture',
          '把 kinetic response 与 female-form investigation 结合',
        ],
        sourceUrl: lijnVenice,
        images: [], relations: [],
      },
    ],
    awards: [], exhibitions: ['Seduction of the Cyborg — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Liliane Lijn 2022', url: lijnVenice }],
  },

  'venice-louise-nevelson': {
    artistId: 'venice-louise-nevelson',
    projectCoverage: '2 个 salvaged-wood / monochrome modular-wall 节点已建立深档案 · 1950s–1968',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Nevelson 把纽约街头废弃木件、家具零件和建筑 ornament 放进 modular crates，再用单一颜色抹去来源差异，让废料变成一个整体性的 architectural field。',
    projects: [
      {
        title: 'Monochrome wood environments',
        cluster: 'salvaged wood / modular crate / black-white-gold unification',
        period: '1950s–1960s',
        summary: '她长期收集 discarded wood parts，塞入 stacked crates，再统一刷成 black、white 或 gold，使原本可识别的 household fragments 变成整体 sculptural architecture。',
        actions: [
          '从 New York City streets 回收 furniture parts / architectural ornament / wood scraps',
          '按形状、深度与节奏把废木组织进 modular boxes',
          '将 boxes 堆叠成 room-scale wall / environment',
          '用 single monochrome coating 消除原始物件色彩差异',
          '依靠 shadow depth 保留内部复杂性',
        ],
        sourceUrl: nevelsonVenice,
        images: [], relations: [],
      },
      {
        title: 'Homage to the Universe',
        cluster: 'matte black / monumental wall / celestial homage',
        period: '1968',
        summary: '大型 stacked wood wall 被统一涂成 matte black，远看像整块黑色平面，近看才显出大量回收构件与空腔。',
        actions: [
          '继续以 salvaged wood 建立 modular compartments',
          '扩大为 room-scale / monumental wall',
          '统一覆盖 matte black，使不同 objects 合并成单一 visual mass',
          '利用 recessed spaces 和 projection 制造光影层次',
          '以 Homage 标题把日常废料尺度提升到 cosmic / memorial register',
        ],
        sourceUrl: nevelsonVenice,
        images: [],
        relations: [rel('展览', 'Seduction of the Cyborg — Venice Biennale 2022', 'Arsenale historical capsule')],
      },
    ],
    awards: [], exhibitions: ['Seduction of the Cyborg — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Louise Nevelson 2022', url: nevelsonVenice }],
  },

  'venice-anu-poder': {
    artistId: 'venice-anu-poder',
    projectCoverage: '2 个 fragmented-body / ephemeral-material 节点已建立深档案 · 1981–1990s',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Põder 用 mannequin、doll、textile、plastic 等 fragile material 处理 incomplete female body；身体不是完整雕塑，而是被测量、分区、切割、衰败的 uncanny double。',
    projects: [
      {
        title: 'Before Performance',
        cluster: 'headless mannequin / body measurement / butcher-map anatomy',
        period: '1981',
        summary: 'life-sized headless mannequin 由 textile 与 plastic 制成，表面覆盖与 ideal body proportion 有关的 measurements，并被划分成类似 butcher carcass 的身体区域。',
        actions: [
          '以 textile / plastic 制作 life-size female mannequin',
          '故意取消 head，使 identity 不完整',
          '在表面标记 measurement / idealised body proportion',
          '将身体切分成 zones，借用 butchered animal 的视觉逻辑',
          '用 fragile material 对抗传统雕塑的永久性',
        ],
        sourceUrl: poderVenice,
        images: [],
        relations: [rel('展览', 'Seduction of the Cyborg — Venice Biennale 2022', 'Arsenale historical capsule')],
      },
      {
        title: 'Fragmented female-body sculptures',
        cluster: 'doll / cut body / decay + hybridisation',
        period: '1980s–1990s',
        summary: 'Põder 持续使用 dolls / mannequin fragments，让身体以 cut-up、wounded、abject、incomplete 状态出现，并允许材料老化和 decay 成为作品的一部分。',
        actions: [
          '组合 mannequin / doll / textile fragments 而不修复为完整 anatomy',
          '保留 cut edge、soft filling、damaged surface 等脆弱痕迹',
          '接受 aging / decay，而不是追求 conservation-like finish',
          '通过 duplicate / uncanny double 讨论 desire 与 body projection',
        ],
        sourceUrl: poderVenice,
        images: [], relations: [],
      },
    ],
    awards: [], exhibitions: ['Seduction of the Cyborg — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Anu Põder 2022', url: poderVenice }],
  },

  'venice-lavinia-schulz': {
    artistId: 'venice-lavinia-schulz',
    projectCoverage: '2 个 expressionist-dance / animal-hybrid costume 节点已建立深档案 · 1919–1924',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Schulz 与 Walter Holdt 把 costume 做成完整 bodily architecture；creeping、stamping、crouching、leaping 等动作与笨重 hybrid costume 相互生成。',
    projects: [
      {
        title: 'Expressionist dance vocabulary',
        cluster: 'creeping / stamping / diagonal spiral / intensity-based movement',
        period: '1919–1924',
        summary: '舞蹈建立在不同 intensity 的 crawling、stamping、squatting、kneeling、arching、striding、lunging 与 leaping 上，并大量采用 diagonal / spiralling path。',
        actions: [
          '将动作拆成低位、重踏、弓背、跨步、跃起等不同 intensity 单元',
          '以 diagonal / spiral floor path 替代中心对称舞台走位',
          '让 movement vocabulary 与 costume resistance 一起发展',
          '强调身体重量和冲撞感，而非优雅连续线条',
        ],
        sourceUrl: schulzVenice,
        images: [], relations: [],
      },
      {
        title: 'Mask dances / hybrid costumes',
        cluster: 'animal-nature form / sculptural costume / body transformation',
        period: '1920s',
        summary: 'Schulz 与 Holdt 制作幻想 costume，把 dancer 变成 animal / natural-world hybrid artwork。与 Bauhaus 更几何机械的 costume 不同，他们的形态更多来自生物和自然。',
        actions: [
          '共同手工制作 full-body costume / mask',
          '从 animal / natural forms 而非纯 geometric machine 取形',
          '让 costume weight / extension 改变 dancer balance',
          '把舞者、服装、动作视为单一 hybrid sculpture',
        ],
        sourceUrl: schulzVenice,
        images: [],
        relations: [rel('展览', 'Seduction of the Cyborg — Venice Biennale 2022', 'Arsenale historical capsule')],
      },
    ],
    awards: [], exhibitions: ['Seduction of the Cyborg — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Lavinia Schulz & Walter Holdt 2022', url: schulzVenice }],
  },

  'venice-marie-vassilieff': {
    artistId: 'venice-marie-vassilieff',
    projectCoverage: '2 个 handmade marionette / robotic-costume 节点已建立深档案 · 1910s–1924',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Vassilieff 用 recycled fabric、sawdust、papier-mâché 与 wire 手工制作大量 dolls / marionettes，再把同样的 cubist geometry 延伸到自己穿戴的 costume 与 mask。',
    projects: [
      {
        title: 'Handcrafted marionettes',
        cluster: 'recycled fabric / sawdust / papier-mâché / avant-garde dummy',
        period: '1910s–1920s',
        summary: '在 Montparnasse atelier 中，她制作大量并非为剧场演出的 marionettes，把 dummy 本身当独立 sculptural object。',
        actions: [
          '回收 fabric、sawdust、papier-mâché、wire 等低成本材料',
          '手工缝制、填充、塑形并连接 limbs',
          '保留 simplified / geometric face 与 body proportion',
          '取消 theatrical function，让 doll 作为 autonomous sculpture 存在',
        ],
        sourceUrl: vassilieffVenice,
        images: [], relations: [],
      },
      {
        title: 'Bal Banal Harlequin costume and metal mask',
        cluster: 'cubist dress / metal mask / robotic self-performance',
        period: '1924',
        summary: '为 Russian émigré party “Bal Banal” 设计并穿戴 Harlequin costume；geometric dress 与 metal mask 让艺术家本人呈现出近似 robot / doll 的 pose。',
        actions: [
          '以 Cubist geometry 设计 full-body dress pattern',
          '加入 metal mask 遮蔽 facial identity',
          '通过 akimbo arms / legs 强化 puppet-like pose',
          '将自己的 body 与长期 marionette practice 直接重叠',
        ],
        sourceUrl: vassilieffVenice,
        images: [],
        relations: [rel('展览', 'Seduction of the Cyborg — Venice Biennale 2022', 'Arsenale historical capsule')],
      },
    ],
    awards: [], exhibitions: ['Seduction of the Cyborg — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Marie Vassilieff 2022', url: vassilieffVenice }],
  },
};
