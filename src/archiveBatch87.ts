import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const pachputeVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/prabhakar-pachpute';
const overtonVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/virginia-overton';
const tsangVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/wu-tsang';
const tourmalineVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/tourmaline';
const sasamotoVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/aki-sasamoto';
const vitaleVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/marianne-vitale';

export const archiveBatch87: Record<string, ArtistArchive> = {
  'venice-prabhakar-pachpute': {
    artistId: 'venice-prabhakar-pachpute',
    projectCoverage: '1 个 mining-history / charcoal panorama 核心节点已建立深档案 · 2022',
    imageCoverage: '0 / 1 项目暂不使用不稳定外链图像',
    note: '当前先把官方资料最完整的 Unfolding of the Remains-II 做深。Pachpute 的 charcoal 不是中性绘画材料：它直接连接其煤矿家庭史、矿区劳动与土地破坏，因此材料选择本身已经是研究方法。',
    projects: [
      {
        title: 'Unfolding of the Remains-II',
        cluster: 'coal-mining landscape / ten-metre canvas / charcoal-washed wall',
        period: '2022',
        summary: '作品部分受塞尔维亚东部矿区发现一艘被埋约 1300 年的 Roman-era warship 启发。十米宽 canvas 展开在 charcoal-washed wall 上，观众像站在 mining pit 边缘；传统矿业劳役动物、机械 / 生物混合体和 exhaust-tube scarecrow 穿行在被开采破坏的地景中。',
        actions: [
          '从自身 coal-mining family history 与 Sasti / Chandrapur mining landscape 建立长期视觉素材',
          '研究 Roman-era warship 被现代 mining excavation 意外发现这一跨时代事件',
          '先以 charcoal wash 处理整面 exhibition wall，使墙体本身像煤尘环境',
          '在约 ten-metre-wide canvas 上组织 mining pit、labour animals 与机械 / biomorphic forms',
          '把 scarecrow 的手臂变成 exhaust tubes，让 agriculture / industry / body 在同一形体中重叠',
          '将不同历史时期压进单一 panoramic field，而不是用线性 chronology 讲矿业史',
        ],
        sourceUrl: pachputeVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Prabhakar Pachpute 2022', url: pachputeVenice }],
  },

  'venice-virginia-overton': {
    artistId: 'venice-virginia-overton',
    projectCoverage: '2 个 lagoon-infrastructure / cast-concrete site-specific 节点已建立深档案 · 2022',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Overton 直接使用 rope、cement、car parts、lumber、truss、crane 等基础设施材料；材料原本的承重、漂浮、吊装与阻隔功能会继续在作品中运行。',
    projects: [
      {
        title: 'Venice buoy / glass-float work',
        cluster: 'lagoon tide / hand-knotted rope / pink glass spheres',
        period: '2022',
        summary: '一组类似传统 fishing-net glass floats 的球体被包进 hand-knotted rope netting 并悬于水中，颜色取自 Venetian streetlamps 的粉色光。作品不是固定雕塑，而会随 lagoon tide 上下移动。',
        actions: [
          '从 seamen 用来使 fishing nets / longlines 漂浮的 glass-float 结构提取 form',
          '制作 luminous pink spheres，将 Venetian streetlamp hue 带入工业 / 海事物件',
          '手工打结 rope netting 包裹球体，使 rope 保留真实承托与束缚功能',
          '把作品直接安装在 Arsenale waterfront 水体中，而不是模拟水面',
          '允许 tide 改变作品高度和角度，使 lagoon variability 成为实时运动机制',
        ],
        sourceUrl: overtonVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Arsenale waterfront')],
      },
      {
        title: 'Tulip-like concrete tunnel-mould sculpture',
        cluster: 'tunnel mould / three concrete segments / pink-glass aperture',
        period: '2022',
        summary: '三段从 architectural tunnel mould 翻制出的 concrete segments 垂直互锁成巨大 tulip-like structure。圆形 pink-glass “windows” 与顶部 triangular aperture 让重型基础设施模具获得像花 / 天窗一样的身体。',
        actions: [
          '直接使用原本服务 architectural tunnel construction 的既有 mould 作为 casting source',
          '浇筑三个大型 concrete segments，并以 vertically interlocked 方式组装',
          '在 concrete body 中嵌入 circular pink glass windows',
          '利用三个 segment 交汇形成 triangular opening，让真实天空成为 sculpture 内部图像',
          '沿 waterfront 增加 bench-like elements，使基础设施雕塑同时承担休息功能',
        ],
        sourceUrl: overtonVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Giardino delle Vergini approach')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Virginia Overton 2022', url: overtonVenice }],
  },

  'venice-wu-tsang': {
    artistId: 'venice-wu-tsang',
    projectCoverage: '1 个 XR ocean / real-time cinema / postcolonial Moby-Dick 核心节点已建立深档案 · 2022',
    imageCoverage: '0 / 1 项目暂不使用不稳定外链图像',
    note: '当前先把 Of Whales 做深。Wu Tsang 的实践强调 collaboration 与“in-betweenness”，因此这里把 VFX、XR、sound spatialisation、music 与 literary adaptation 全部视作作品生产链，而不是技术附属。',
    projects: [
      {
        title: 'Of Whales',
        cluster: 'XR ocean / six-hour real-time video / multi-channel spatial audio',
        period: '2022',
        summary: 'Of Whales 从其 Moby Dick feature adaptation 延伸出 psychedelic ocean installation。作品从 whale 与 Pequod “motley crew” 的角度重新观看 Melville，把 exoticism、eroticism、maritime capitalism 与 colonial history 放进不断生成的数字海洋。',
        actions: [
          '以 Herman Melville《Moby Dick》为 literary source，但主动改写观看位置到 whale / mixed crew',
          '使用 XR extended-reality technologies 生成可持续变化的 psychedelic ocean environment',
          '制作长达约 six hours 的 real-time video，而不是固定短循环',
          '与 3D artists、VFX artists、creative technologist、animators 协作构建 ocean / cosmos sequences',
          '与 composers / musicians 制作 multi-channel audio，并进行 spatialisation',
          '把 postcolonial reading、mid-19th-century maritime history 与现代资本主义诞生叠加到 immersive environment 中',
        ],
        sourceUrl: tsangVenice,
        images: [],
        relations: [
          rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale'),
          rel('策展', 'Co-commissioned by VIVE ARTS and VIA Art Fund', '2022 production context'),
        ],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Wu Tsang 2022', url: tsangVenice }],
  },

  'venice-tourmaline': {
    artistId: 'venice-tourmaline',
    projectCoverage: '3 个 Black trans history / archive-fiction film 节点已建立深档案 · 2016–2021',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Tourmaline 的核心方法是面对被压平、病理化或遗漏的 Black queer / trans history，以口述、archive footage、fictional reconstruction、period costume 与当代 performer 重新制造人物拥有尊严、快乐和行动力的历史空间。',
    projects: [
      {
        title: 'The Personal Things / Atlantic Is a Sea of Bones',
        cluster: 'trans elder portrait / oral history / intergenerational film',
        period: '2016–2017',
        summary: 'The Personal Things 以 activist Miss Major Griffin-Gracy 为中心；Atlantic Is a Sea of Bones 则围绕 legendary drag queen Egyptt LaBeija。两者都不是单纯 biopic，而把 living testimony 与 stylised moving image 结合，重新建立 trans lineage。',
        actions: [
          '邀请 Black trans / queer elders 与 performers 作为叙事主体，而非只引用机构档案',
          '将 interview / oral-history material 与 staged cinematic portrait 结合',
          '保留人物自身 speech、gesture、style 与 chosen self-presentation',
          '通过 editing 把 personal memory 与 broader queer liberation history 并置',
        ],
        sourceUrl: tourmalineVenice,
        images: [],
        relations: [],
      },
      {
        title: 'Happy Birthday, Marsha!',
        cluster: 'Marsha P. Johnson + Sylvia Rivera / speculative history / street liberation',
        period: '2018',
        summary: '影片围绕 Marsha P. Johnson 与 Sylvia Rivera 展开，用 fictionalised historical reconstruction 填补 Stonewall-era archive 的空白。重点不是宣称“重现真相”，而是为被忽略人物创造能够拥有情感、日常与政治能动性的 cinematic time。',
        actions: [
          '从 queer / trans liberation archives 与已有 historical record 建立人物背景',
          '邀请 performers 以 period costume / staged scenes 重建并想象 Stonewall-era everyday life',
          '将 documentary traces 与 speculative scenes 混合，明确承认 archive 不完整',
          '避免只把 Marsha / Sylvia 定格为 protest icon，让 intimacy、friendship 与 ordinary time 进入影片',
        ],
        sourceUrl: tourmalineVenice,
        images: [],
        relations: [],
      },
      {
        title: 'Mary of Ill Fame',
        cluster: '1830s Black trans history / Seneca Village / prison vs freedom fiction',
        period: '2020–2021',
        summary: '作品围绕 1830s Black trans woman / sex worker Mary Jones 创造 fictional story。影片在 brutal confinement 与一个本应属于她的 Seneca Village home 之间切换，为历史档案中的惩罚性形象主动补出 pleasure、freedom 与 community。',
        actions: [
          '从 Mary Jones 的 historical court / incarceration record 出发，但不把刑事档案视为人物完整生命',
          '由 Rowin Amone 饰演 Mary Jones，并以 full cast、costume、production design 进行 period reconstruction',
          '在 Wyckoff House Museum、Castle Williams Prison、Governors Island、Seneca Village / present-day Central Park 实景拍摄',
          '将 prison images 与 gracious Seneca Village domestic scenes 交叉剪辑',
          '使用 archival footage / stock from NYPL、Prelinger Archives 等，并明确区分 archive 与 fictional scenes',
          '通过 fantasy of power / freedom / pleasure 对抗历史记录只留下 criminalisation 的结构',
        ],
        sourceUrl: tourmalineVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Tourmaline 2022', url: tourmalineVenice }],
  },

  'venice-aki-sasamoto': {
    artistId: 'venice-aki-sasamoto',
    projectCoverage: '1 个 structured-improvisation / levitation-machine 核心节点已建立深档案 · 2022',
    imageCoverage: '0 / 1 项目暂不使用不稳定外链图像',
    note: '当前先把 Sink or Float 做深。Sasamoto 所谓“performance-slash-installation”不是先搭装置再表演：objects 被设计成 score / tools，身体、故事与物件运动在现场互相触发。',
    projects: [
      {
        title: 'Sink or Float',
        cluster: 'air-float tables / commercial sinks / HVAC-lightbox score',
        period: '2022',
        summary: '作品位于 Giardino delle Vergini 一座独立建筑内。多张 table 由 stainless-steel commercial sinks 改造，表面打入数千 air-blowing holes，使用工业 air-float-table 技术让物件漂浮和乱动；另一端的 rotisserie oven 与 commercial cooler 被改造成 light boxes。',
        actions: [
          '以 commercial stainless-steel sinks 作为 table body，而不是雕刻仿真厨房物件',
          '在 table surfaces 加工 thousands of small air-blowing holes',
          '移植 industrial air-float-table technology，使 placed objects 真正产生 floating / chaotic movement',
          '用 HVAC air ducts 搭出 framing structure，把 ventilation infrastructure 变成空间构图',
          '将 rotisserie oven 与 commercial cooler 改造成 light boxes，保留原物件识别度',
          '把整个 installation 设计成 performance score，使 Sasamoto 的 structured improvisation 可在物件系统中展开',
        ],
        sourceUrl: sasamotoVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Giardino delle Vergini')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Aki Sasamoto 2022', url: sasamotoVenice }],
  },

  'venice-marianne-vitale': {
    artistId: 'venice-marianne-vitale',
    projectCoverage: '2 个 burned-infrastructure / bronze-microbial monument 节点已建立深档案 · 2007–2021',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Vitale 长期从 bridges、railroad tracks、freight engines、dams、factories 等美国工业扩张遗迹取材；她不是保存工业遗产，而是烧毁、撞伤、重建，再把残骸铸成新的纪念碑。',
    projects: [
      {
        title: 'Burned Bridges',
        cluster: 'scale bridge model / outdoor burning / bronze cast ruin',
        period: 'c. 2007–2022',
        summary: '约十五年间，Vitale 持续在 studio 制作 North American bridge scale models，再把它们带到户外烧毁并展出 charred skeleton。Venice 版本将其中七座烧毁桥梁铸成 bronze，使一次性毁坏被永久化为“未来工业遗迹”。',
        actions: [
          '根据 North American industrial bridge typologies 制作 scale architectural models',
          '完成模型后主动搬到 outdoor site 进行 burning，而不是模拟烧焦表面',
          '保留 charred beams / collapsed geometry 作为后续形态来源',
          '将七件 burned bridge remains 翻铸成 bronze，使脆弱木炭状态转成沉重永久材料',
          '在 Giardino delle Vergini garden 中分散安装，让 ruined infrastructure 与 vegetation 并存',
        ],
        sourceUrl: vitaleVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Giardino delle Vergini')],
      },
      {
        title: 'Bottle People',
        cluster: 'liquor bottle / wrapped fabric / bronze cast bestiary',
        period: '2020–2021',
        summary: 'liquor bottles 被 fabric 包裹后铸成 bronze，形成大量 gesturing figures。普通消费容器被转成像 ancient microbial phantasm 的群体，悬离墙面如同漂浮，表情姿态在 agony、despair、hope 与 amusement 之间变化。',
        actions: [
          '以 ordinary liquor bottles 作为内部 found-object form',
          '用 fabric swaddle / wrap 改变瓶身轮廓，使其获得 torso / limb-like folds',
          '将 wrapped bottle forms 进行 bronze casting，把柔软布料折痕固化',
          '制作 dozens of variants，而非单一 iconic figure',
          '将 bronze figures 悬离 wall / ground，使重质材料获得 levitating swarm 效果',
        ],
        sourceUrl: vitaleVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Giardino delle Vergini')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Marianne Vitale 2022', url: vitaleVenice }],
  },
};