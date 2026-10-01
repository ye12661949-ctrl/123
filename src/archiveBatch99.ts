import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const wiggenVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/ulla-wiggen';
const hansenVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/sidsel-meineche-hansen';
const perezVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/elle-p%C3%A9rez';
const liVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/shuang-li';
const grzeszykowskaVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/aneta-grzeszykowska';
const crespoVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/june-crespo';

export const archiveBatch99: Record<string, ArtistArchive> = {
  'venice-ulla-wiggen': {
    artistId: 'venice-ulla-wiggen',
    projectCoverage: '3 个 circuit-board / machine-interior / iris-body 节点已建立深档案 · 1964–ongoing',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Wiggen 从“机器内部”一路画到“人体视觉器官”：早期把电路板像肖像一样精密描绘，后期则把 iris 变成新的 circuitry。技术与身体不是对立，而是两种复杂系统。',
    projects: [
      {
        title: 'Förstärkare / Kretsfamilj',
        cluster: 'gouache / medical gauze ground / circuit-board portrait',
        period: '1964',
        summary: '早期 circuit paintings 将电子元件极精确地画在 woven medical gauze ground 上。gauze 的真实织纹使 flat image 带有物理厚度，也让电路像被放大的组织切片。',
        actions: [
          '选择 amplifier / circuit-board interiors 作为观察对象',
          '在 wooden support 上铺 woven medical gauze 作为 ground',
          '用 gouache 分层描绘 wires、resistors、boards 等零件',
          '保持 frontal / diagram-like composition，减少外部机器壳体',
          '利用 gauze texture 让电子 circuitry 获得近似 bodily tissue 的物质感',
        ],
        sourceUrl: wiggenVenice,
        images: [],
        relations: [],
      },
      {
        title: 'TRASK / Vägledare',
        cluster: 'acrylic + gouache / electronic interior / cybernetic culture',
        period: '1967',
        summary: '精密 acrylic / gouache paintings 将电子设备内部结构放大为几乎无人的技术 landscape；1968 年进入 Cybernetic Serendipity，使 circuit 成为早期艺术-科学想象的图像。',
        actions: [
          '把 electronic-device casing 移除，专注内部 circuitry',
          '以 acrylic + gouache 建立清晰、冷静的 component layers',
          '放大 wires / boards / modules，使微型内部变成完整 pictorial field',
          '避免科幻式夸张，保持实际工程构造的可识别度',
        ],
        sourceUrl: wiggenVenice,
        images: [],
        relations: [rel('展览', 'Cybernetic Serendipity — ICA London', '1968')],
      },
      {
        title: 'Iris Paintings',
        cluster: 'round panel / months-long observation / biological circuitry',
        period: '2016–ongoing',
        summary: '圆形 panels 上逐层描绘蓝、绿、hazel 等 iris。每件可能耗费数月；作品从 cataract treatment 前的模糊视觉经验出发，把 clarity / ambiguity 与 consciousness / sleep 的边界变成眼睛内部图像。',
        actions: [
          '以 close-up human iris 取代早期 electronic circuitry',
          '使用 circular support 对应 eye geometry',
          '逐层缓慢绘制 radial fibres 与 colour variation',
          '允许单件制作持续数月，保持高度 observation-based process',
          '把 cataract 前后 clarity / blur 经验转成 perceptual subject',
        ],
        sourceUrl: wiggenVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale 2022', 'Central Pavilion')],
      },
    ],
    awards: [], exhibitions: ['Cybernetic Serendipity — ICA London 1968', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Ulla Wiggen 2022', url: wiggenVenice }],
  },

  'venice-sidsel-meineche-hansen': {
    artistId: 'venice-sidsel-meineche-hansen',
    projectCoverage: '3 个 sex-doll maintenance / mould / marionette commodity-body 节点已建立深档案 · 2018–2019',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Hansen 不把 digital body 只当虚拟问题，而是追踪身体如何被制造、维护、商品化：sex doll brothel 的维护劳动、空 mould、wooden sex robot 都把“理想身体”还原成生产系统。',
    projects: [
      {
        title: 'Maintenancer',
        cluster: 'digital video / sex-doll brothel / maintenance labour',
        period: '2018',
        summary: '与 Therese Henningsen 合作拍摄德国 doll brothel，关注 silicon sex dolls 被清洁、修复、保养和维持“理想外貌”的劳动，而不是以 erotic spectacle 为主体。',
        actions: [
          '进入 German doll brothel 进行现场拍摄',
          '把 camera 对准 cleaning / repair / maintenance process',
          '记录 artificial female body 如何被持续恢复为可消费状态',
          '以 digital video + sound 保留空间和劳动节奏',
          '让 pornography economy、gendering 与 conservation labour 出现在同一影像',
        ],
        sourceUrl: hansenVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale 2022', 'Central Pavilion')],
      },
      {
        title: 'Daddy Mould',
        cluster: 'fibreglass mould / negative body / commodity production',
        period: '2018',
        summary: '一件 silicon sex doll 的空 fibreglass mould。身体没有真正出现，只剩制造身体的 negative shell；商品化人体因此以生产工具而非成品呈现。',
        actions: [
          '保留 sex-doll manufacturing 中的 fibreglass mould',
          '不填充 silicon body，使 negative cavity 成为作品主体',
          '展示 manufacturing seam / shell structure',
          '把理想化身体从 erotic object 转成 production infrastructure',
        ],
        sourceUrl: hansenVenice,
        images: [], relations: [],
      },
      {
        title: 'Untitled (Sex Robot)',
        cluster: 'wooden ball-jointed marionette / human functionality / product-body',
        period: '2018–2019',
        summary: 'ball-jointed wooden marionette 引用 digital / silicone sex-doll logic，却以木质 articulation 直接暴露关节和操控结构；看起来能“像人一样运动”，仍然明确是商品/物件。',
        actions: [
          '制作 articulated wooden body',
          '保留 ball joints 使 physical functionality 可见',
          '采用 sex-robot / doll proportion 而不追求自然人体 illusion',
          '让 puppet mechanics 与 commodity-body status 同时暴露',
        ],
        sourceUrl: hansenVenice,
        images: [], relations: [],
      },
    ],
    awards: [], exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Sidsel Meineche Hansen 2022', url: hansenVenice }],
  },

  'venice-elle-perez': {
    artistId: 'venice-elle-perez',
    projectCoverage: '1 个 photographic configuration / diasporic surface 核心节点已建立深档案 · 2022',
    imageCoverage: '0 / 1 项目暂不使用不稳定外链图像',
    note: '当前先把 Venice configuration 做深。Pérez 不把单张照片当独立结论，而把 Puerto Rico landscape、flood water、bodega Plexiglas、MMA clinch 等不同场景并置成“configuration”，意义来自照片之间的回声。',
    projects: [
      {
        title: 'Venice photographic configuration — caves, flood, bodega, clinch',
        cluster: 'photographic configuration / surface + fluidity / diaspora',
        period: '2022',
        summary: 'Cabachuelas Caves、Vega Baja floodwater、New York bodega 的 weathered Plexiglas，以及朋友 Kenny / José 进行 MMA clinch 的身体被并置。看似无关的图像通过 surface、pressure、fluid movement 形成 diasporic history 的抽象合唱。',
        actions: [
          '在 Puerto Rico 拍摄被 Atlantic ocean 长期塑形的 cave surfaces',
          '记录 historic flooding 后 street water 的聚集与反光',
          '在 New York 拍摄 bodega Plexiglas 上时间与身体留下的磨损',
          '拍摄两位朋友执行 mixed-martial-arts clinch 的紧密身体接触',
          '不按地点或题材分组，而将照片编辑成 configuration',
          '让 viewer 通过相似 texture / fluidity / control 自己建立跨图像关系',
        ],
        sourceUrl: perezVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale 2022', 'Central Pavilion')],
      },
    ],
    awards: [], exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Elle Pérez 2022', url: perezVenice }],
  },

  'venice-shuang-li': {
    artistId: 'venice-shuang-li',
    projectCoverage: '1 个 eclipse / ring-light / digitised-desire video 节点已建立深档案 · 2021',
    imageCoverage: '0 / 1 项目暂不使用不稳定外链图像',
    note: '当前先把 ÆTHER (Poor Objects) 做深。Li 将 pirated-media childhood、platform image culture 和 bodily desire 连接起来；太阳 eclipse 与 influencer ring light 被剪成同一种“光环”，让自然 spectacle 与 digital-consumer spectacle 滑入彼此。',
    projects: [
      {
        title: 'ÆTHER (Poor Objects)',
        cluster: '18-min video / eclipse + ring light / virtual-physical slippage',
        period: '2021',
        summary: '18 分 28 秒 video 将 solar eclipse footage 与被 influencer ring lights 照亮的图像、animation 和其他 disparate footage 混合。自然与人工的圆形光源互为替身，身体欲望与平台消费空间彼此渗透。',
        actions: [
          '收集 / 制作 solar-eclipse footage 与 social-media ring-light imagery',
          '把来源不同的 moving images 剪成非线性 montage',
          '加入 Linyou Xie / Ren Du animation layers',
          '与 Labour 合作制作 music / sound environment',
          '利用 eclipse / ring-light 的 formal rhyme 连接 natural / artificial spectacle',
          '把 biopolitics、digitised desire 与 intimacy 放在同一 media environment 中',
        ],
        sourceUrl: liVenice,
        images: [],
        relations: [rel('展览', 'Commissioned by Rockbund Art Museum, Shanghai', '2021'), rel('展览', 'The Milk of Dreams — Venice Biennale 2022', 'Central Pavilion')],
      },
    ],
    awards: [], exhibitions: ['Rockbund Art Museum commission — 2021', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Shuang Li 2022', url: liVenice }],
  },

  'venice-aneta-grzeszykowska': {
    artistId: 'venice-aneta-grzeszykowska',
    projectCoverage: '1 个 silicone-self / daughter-as-mother photographic series 节点已建立深档案 · 2018',
    imageCoverage: '0 / 1 项目暂不使用不稳定外链图像',
    note: '当前先把 Mama 做深。Grzeszykowska 不是简单“用娃娃谈母职”，而是先制作一个与自己高度相似的 silicone double，再让女儿对这个“母亲尸体/玩具”执行照顾、涂画、埋葬等互相矛盾的动作。',
    projects: [
      {
        title: 'Mama',
        cluster: 'silicone self-double / mother-daughter role reversal / staged photography',
        period: '2018',
        summary: '艺术家的女儿与一个根据艺术家本人制作的 lifelike silicone doll 相处：给它洗澡、拥抱，也画脸、埋进泥土、放进推车。daughter 同时成为 caregiver、owner 与 child，mother-body 则在 animate / corpse / toy 之间摇摆。',
        actions: [
          '制作与艺术家自身外貌高度对应的 lifelike silicone doll',
          '让真实女儿进入 staged / semi-directed interaction',
          '拍摄 bathing、embracing 等 care gestures',
          '同时拍摄 face-painting、burying、wagon-carrying 等 object-treatment actions',
          '通过 photographic sequence 而非单张肖像比较 contradictory roles',
          '让 motherhood、ownership、subjectivity 与 self-alienation 同时进入画面',
        ],
        sourceUrl: grzeszykowskaVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale 2022', 'Central Pavilion')],
      },
    ],
    awards: [], exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Aneta Grzeszykowska 2022', url: grzeszykowskaVenice }],
  },

  'venice-june-crespo': {
    artistId: 'venice-june-crespo',
    projectCoverage: '2 个 cast-torso / industrial-body architecture 节点已建立深档案 · 2020–2022',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Crespo 的方法是切、铸、放大、嵌入：fibreglass、resin、ceramic、bronze、rebar、concrete 与 clothing 被重新拼成既像人体又像建筑支撑物的 composite cyborg。',
    projects: [
      {
        title: 'HELMETS',
        cluster: 'cast aluminium torso / stacking / visible casting spout',
        period: '2020',
        summary: '两对 cast-aluminium torsos 垂直堆叠，连铸造时液态金属进入模具的 spouts 都被保留。人体形体因此和生产流程的 technical appendage 同时可见。',
        actions: [
          '从 torso / mannequin-like body form 制作 casting mould',
          '浇铸 aluminium body components',
          '保留 casting spouts 而不打磨隐藏',
          '把多个 torso 垂直 stack 成新的 architectural body',
          '让 human form 与 foundry-production evidence 同时成为 sculpture',
        ],
        sourceUrl: crespoVenice,
        images: [], relations: [],
      },
      {
        title: 'The Milk of Dreams new sculptures',
        cluster: 'concrete / shipping-barrel relief / clothing + industrial material',
        period: '2022',
        summary: 'Venice 新作延续 HELMETS：cast-concrete forms 暴露 shipping barrels 的 relief，身体/容器/建筑之间继续混合；clothing 等 intimate material 又被嵌入硬质工业结构。',
        actions: [
          '使用 concrete casting 获取 shipping-barrel surface relief',
          '切割 / fragment industrial forms 后重新组合',
          '把 clothing 等自身或他人穿过的 soft material 嵌入 rigid mass',
          '并置 fibreglass、resin、ceramic、bronze、rebar 等不同 construction logic',
          '把 sculpture 处理成既支撑身体又限制身体的 armature',
        ],
        sourceUrl: crespoVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale 2022', 'Central Pavilion')],
      },
    ],
    awards: [], exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · June Crespo 2022', url: crespoVenice }],
  },
};
