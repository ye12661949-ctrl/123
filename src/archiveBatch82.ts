import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const davisVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/noah-davis';
const davisUnderground = 'https://www.moca.org/exhibitions/the-underground-museum';

const deBarrosVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/lenora-de-barros';
const deBarrosPina = 'https://pinacoteca.org.br/programacao/exposicoes/lenora-de-barros-minha-lingua/';

const delaunayVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/sonia-delaunay';
const delaunayMoma = 'https://www.moma.org/collection/artists/1480';
const delaunayProse = 'https://www.moma.org/collection/works/273447';
const delaunayRobe = 'https://www.moma.org/collection/works/36107';

const denesVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/agnes-denes';
const denesState = 'https://art.state.gov/personnel/agnes_denes/';

const salahiVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/ibrahim-el-salahi';
const salahiPrison = 'https://www.moma.org/collection/works/218219';
const salahiPain = 'https://drawingcenter.org/exhibitions/ibrahim-el-salahi';

const enricoVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/sara-enrico';
const enricoJumpsuit = 'https://www.saraenrico.net/the-jumpsuit-theme/';
const enricoOuverture = 'https://www.saraenrico.net/ouverture-2024/';
const enricoUnearth = 'https://www.saraenrico.net/unearth-desires/';

export const archiveBatch82: Record<string, ArtistArchive> = {
  'venice-noah-davis': {
    artistId: 'venice-noah-davis',
    projectCoverage: '4 个 Black life / historical allegory / surreal domestic painting 节点已建立深档案 · 2007–2014',
    imageCoverage: '0 / 4 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Davis 的方法不是简单“黑人具象绘画”：他把家庭成员、Los Angeles 社区、美国土地承诺与超现实 / magical-realist 场景放进同一低饱和绘画语言，让日常、历史和想象世界可以同时成立。',
    projects: [
      {
        title: '40 Acres and a Unicorn',
        cluster: 'Reconstruction history / magical realism / broken land promise',
        period: '2007',
        summary: '标题扭转美国内战后“forty acres and a mule”的土地承诺，把 mule 换成 unicorn。Davis 不画历史场景复原，而用看似荒诞的魔幻替换暴露 Black land rights 承诺最终落空。',
        actions: [
          '从 Reconstruction-era “forty acres and a mule” 这一历史承诺提取作品标题和政治框架',
          '用 unicorn 替换历史叙事中的 mule，使承诺的虚幻性直接进入画面逻辑',
          '以 figurative painting 保留人物 / 地景可识别性，同时避免 documentary reconstruction',
          '让 historical memory 与 magical realism 同时存在，不把政治内容压成文字说明',
        ],
        sourceUrl: davisVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · posthumous Arsenale presentation')],
      },
      {
        title: 'Isis',
        cluster: 'family portrait / mythic costume / intimate icon',
        period: '2009',
        summary: 'Davis 将妻子 Karon Davis 画成埃及魔法女神 Isis，金色扇形翼把真实亲密关系与神话形象叠合。私人肖像因此既保持家庭关系，也被抬升为神话性 icon。',
        actions: [
          '以妻子 Karon Davis 为明确 sitter，而非匿名象征人物',
          '通过 golden fan-winged costume 引入 Egyptian goddess iconography',
          '保持人物姿态和身体存在的日常亲密感，不把神话元素处理成纯历史再现',
          '以 muted / melancholic painterly surface 抵消 costume 的戏剧性，使 myth 与 domestic portrait 同时成立',
        ],
        sourceUrl: davisVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022')],
      },
      {
        title: "The Future's Future",
        cluster: 'VR-like apparatus / projected nature / speculative Black future',
        period: '2010',
        summary: '人物被固定在类似 virtual-reality simulator 的椅具中，周围植物像来自数字投影。Davis 在没有依赖真实科技装置的情况下，把 Black figure 放进一个既疗愈又被控制的未来机器场景。',
        actions: [
          '将 seated figure 与 restraint / simulator-like apparatus 组合成不稳定的人机关系',
          '用 leafy plants 建立可能属于 projection / virtual environment 的第二空间',
          '让 painting 在 realism 与 speculative image 之间保持模糊，不解释机器实际功能',
          '把“future”处理成当下可进入但同样可能令人不安的心理空间',
        ],
        sourceUrl: davisVenice,
        images: [],
        relations: [],
      },
      {
        title: 'The Conductor / Pueblo del Rio paintings',
        cluster: 'Los Angeles garden-city housing / surreal public life',
        period: '2014',
        summary: 'Pueblo del Rio 系列以 Los Angeles 的 garden-city housing community 为背景。《The Conductor》让穿礼服的指挥者面对不可见乐团，社区现实被轻微推离纪实，进入荒诞而克制的超现实状态。',
        actions: [
          '把 Pueblo del Rio 这一真实 Los Angeles housing community 作为系列地理锚点',
          '在社区环境中加入 tuxedoed conductor 这种与场所不完全匹配的角色',
          '刻意省略 orchestra，使 gesture 的对象缺席并产生 narrative gap',
          '通过熟悉城市环境 + improbable action 形成低强度 surrealism，而不是夸张幻想',
        ],
        sourceUrl: davisVenice,
        images: [],
        relations: [rel('收藏', 'Noah Davis / Underground Museum context', 'Davis later co-founded The Underground Museum to widen access to contemporary art')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022 · posthumous presentation'],
    sources: [
      { label: 'La Biennale · Noah Davis 2022', url: davisVenice },
      { label: 'MOCA LA · The Underground Museum collaboration', url: davisUnderground },
    ],
  },

  'venice-lenora-de-barros': {
    artistId: 'venice-lenora-de-barros',
    projectCoverage: '3 个 body-language / typewriter / clay-video 节点已建立深档案 · 1979–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Lenora de Barros 从 concrete poetry 出发，但她不断把“语言”从纸面文字变成 tongue、typewriter、breath、photographic sequence 和 clay；读 / 写的器官与机器发生真实碰撞。',
    projects: [
      {
        title: 'POEMA (POEM)',
        cluster: 'photographic sequence / tongue + typewriter / wordless poem',
        period: '1979',
        summary: '六段黑白摄影特写记录嘴与打字机的冲突：舌头舔键盘、钻进 type bars，最后机器零件粘在舌面。诗不再由可读文字组成，而由身体器官与文字机器发生的动作生成。',
        actions: [
          '将 mouth / tongue 与 typewriter 置于同一极近距离摄影框架',
          '按动作顺序拍摄 tongue licking keys、entering type bars、machine parts adhering to tongue',
          '不输出传统 poem text，让 photographic sequence 本身承担诗句的时间结构',
          '利用 typewriter 的重复机械结构讨论 professional / domestic gendered labour 的机械化',
          '把 concrete poetry 对 typography 的兴趣转成真正的 body-machine confrontation',
        ],
        sourceUrl: deBarrosVenice,
        images: [],
        relations: [
          rel('收藏', 'Pinacoteca de São Paulo', 'POEMA · 1979'),
          rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Central Pavilion'),
        ],
      },
      {
        title: 'Minha Língua / language-as-body installation practice',
        cluster: 'language / photography-video-installation / retrospective constellation',
        period: '1970s–2022',
        summary: 'Pinacoteca 的 Minha Língua 把数十年摄影、录像、装置与 performance 放在一起，显示“舌头 / 语言”不是单一 motif，而是贯穿作品的方法：文字可被身体化，身体动作也可成为语法。',
        actions: [
          '将 photography、video、installation、performance 等不同媒介按 language / body 关系重新编辑',
          '反复调用 tongue、mouth、sound、blank page 与 typography，而不是按媒介分阶段展示',
          '利用 museum retrospective 把早期 concrete-poetry context 与当代身体作品建立长期连续性',
          '让“Minha Língua / 我的舌头 / 我的语言”同时保持 anatomical 与 linguistic 双重意义',
        ],
        sourceUrl: deBarrosPina,
        images: [],
        relations: [rel('展览', 'Lenora de Barros: Minha Língua — Pinacoteca de São Paulo', '2022–2023')],
      },
      {
        title: 'O ventre',
        cluster: 'three-act video / clay / body dialogue',
        period: '2022',
        summary: '三幕录像让艺术家身体与 clay 发生连续互动。黏土不是被完成为稳定雕塑，而是在按压、贴合和变形中成为临时语言，使身体与可塑材料互相塑造。',
        actions: [
          '将作品组织成 three-act video structure，而非单次 performance documentation',
          '用 clay 与自己身体直接接触、压合、挤压和重新塑形',
          '保留材料在动作中的 temporary state，不追求最后固定的 clay sculpture',
          '把 tongue / language 的身体逻辑扩展到 belly、skin 与 malleable matter 的触觉对话',
        ],
        sourceUrl: deBarrosPina,
        images: [],
        relations: [rel('展览', 'Minha Língua — Pinacoteca de São Paulo', '2022 · new video work')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022', 'Minha Língua — Pinacoteca de São Paulo 2022–2023'],
    sources: [
      { label: 'La Biennale · Lenora de Barros 2022', url: deBarrosVenice },
      { label: 'Pinacoteca · Minha Língua', url: deBarrosPina },
    ],
  },

  'venice-sonia-delaunay': {
    artistId: 'venice-sonia-delaunay',
    projectCoverage: '3 个 simultanism / accordion-book / wearable-textile 节点已建立深档案 · 1913–1930',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Delaunay 的关键不只是彩色抽象：她让 simultaneous contrast 从绘画跨到 book、dress、fabric 和 loom-woven pattern，使颜色成为可展开、可穿、可生产的空间结构。',
    projects: [
      {
        title: 'La Prose du Transsibérien et de la Petite Jehanne de France',
        cluster: 'accordion book / poem + colour / simultaneity',
        period: '1913',
        summary: '与 Blaise Cendrars 合作的“第一本 simultaneous book”不是传统逐页阅读：近七英尺长的纸张 accordion-fold 展开，右侧诗文与左侧色彩几何可被同时观看，把铁路旅行的时间、排版与颜色压进一张连续长幅。',
        actions: [
          '与 poet Blaise Cendrars 协作，让文字与 visual composition 同时生成而非插图后加',
          '采用 accordion-fold / map-like format，使整张长纸可以一次性展开',
          '在 poem 左侧组织 cascading colour geometries，并以 stencil colour 进入文字周围空白',
          '利用不同 typeface、colour 与 spatial gap 打乱线性阅读顺序',
          '让 physical unfolding 本身模拟 Trans-Siberian journey 的空间 / 时间延展',
        ],
        sourceUrl: delaunayProse,
        images: [],
        relations: [rel('收藏', 'Museum of Modern Art, New York', 'La Prose du Transsibérien · 1913')],
      },
      {
        title: 'Robe Poème / Simultaneous Dress',
        cluster: 'wearable abstraction / fashion / colour contrast',
        period: '1913–1923',
        summary: 'Delaunay 把 simultanism 从 canvas 移到身体：拼布、gouache dress studies 与实际服装让 contrasting colours 随穿着者移动。抽象不再是静态观看对象，而成为 social space 中会行走的 colour structure。',
        actions: [
          '用 brightly coloured fabric scraps 制作 quilt、curtain、lampshade 与 wearable garment',
          '将 simultaneous contrast 原理转成 dress panels，使相邻颜色通过身体运动持续改变视觉强度',
          '制作 Robe Poème 系列 watercolor / gouache studies，将文字、服装轮廓与色块结合',
          '让服装进入 Paris social life，使 abstract colour 不再只存在于 studio / gallery',
        ],
        sourceUrl: delaunayRobe,
        images: [],
        relations: [rel('收藏', 'Museum of Modern Art, New York', 'Robe Poème No. 688 · 1922')],
      },
      {
        title: 'Textile gouaches / Gouache no. 1230',
        cluster: 'loom-oriented design / simultaneous contrast / textile pattern',
        period: '1920s–1930',
        summary: '她将 painterly abstraction 进一步转译为能被 loom-woven thread 实现的 textile composition。Gouache no. 1230 通过 concentric circles 与 offset tones 制造 rhythm、motion 与 depth，使绘画单元变成可重复生产的 chromatic information。',
        actions: [
          '先以 gouache-on-paper 测试可以被 textile production 转译的 colour modules',
          '使用 concentric circles、offset tones 和 adjacent complementary colours 制造 simultaneous contrast',
          '把图形设计限制在可由 weaving / printed textile 生产的 repeat logic 中',
          '让 abstract painting 与 applied design 共用同一色彩研究，不再区分“纯艺术 / 工艺”层级',
        ],
        sourceUrl: delaunayVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Central Pavilion historical presentation')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022 · historical presentation'],
    sources: [
      { label: 'La Biennale · Sonia Delaunay 2022', url: delaunayVenice },
      { label: 'MoMA · Sonia Delaunay archive', url: delaunayMoma },
      { label: 'MoMA · La Prose du Transsibérien', url: delaunayProse },
      { label: 'MoMA · Robe Poème No. 688', url: delaunayRobe },
    ],
  },

  'venice-agnes-denes': {
    artistId: 'venice-agnes-denes',
    projectCoverage: '3 个 systems-diagram / ecological land action / knowledge-mapping 节点已建立深档案 · 1968–1982',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Denes 的生态艺术并非只有“种麦子”：她先用 diagram、taxonomy 与 engineering drawing 重组知识，再把同一系统思维扩大到土地、食物、房地产价值与公共行动。',
    projects: [
      {
        title: 'Rice/Tree/Burial',
        cluster: 'site-specific ecology / planting / burial ritual',
        period: '1968',
        summary: '被视为早期大型 ecological site-specific work 之一，作品把 rice planting、tree 与 burial 这些生命、增长、死亡动作放进同一土地系统，先于后来更著名的 Wheatfield 建立其生态方法。',
        actions: [
          '选择 Sullivan County, New York 的真实土地作为工作场域，而非制作 landscape representation',
          '把 rice、tree 与 burial 三种具有不同时间尺度的生态 / 仪式动作组织成同一项目',
          '让种植、成长与埋葬本身构成作品过程，而不是用永久雕塑替代环境变化',
          '通过 site-specific action 将生命循环、土地使用和人类介入直接并置',
        ],
        sourceUrl: denesState,
        images: [],
        relations: [],
      },
      {
        title: 'Introspection I—Evolution / Introspection II—Machines, Tools & Weapons',
        cluster: 'six-metre monoprint / taxonomy / evolution + technology diagram',
        period: '1968–1972',
        summary: '两件超过六米的 monoprints 用医学、工程学插图与 taxonomic table 的语言绘制人类 evolution 与 tool / machine history。Denes 将科学图解作为新的视觉语法，用来重新组织而不是简单说明知识。',
        actions: [
          '收集 / 模拟 medical、engineering 与 encyclopaedic illustration 的图解语言',
          '在超长 monoprint 中按系统关系而非传统透视组织 anatomy、taxonomy 与 technological development',
          '一件追踪 ape → contemporary human 的 evolutionary chain，另一件追踪 first tools → 20th-century machines',
          '把 science、linguistics、philosophy 与 visual art 压入同一 mapping surface',
        ],
        sourceUrl: denesVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Central Pavilion historical presentation')],
      },
      {
        title: 'Wheatfield — A Confrontation',
        cluster: 'two-acre wheat field / landfill / finance-city confrontation',
        period: '1982',
        summary: 'Denes 在距 Wall Street 和 World Trade Center 极近的垃圾填埋地上种植约两英亩小麦。四个月的播种、维护与收割，把食物生产、城市土地价值、资本中心和被废弃土地放进同一真实场景。',
        actions: [
          '在 lower Manhattan rubble-strewn landfill 清理并准备约 two acres 土地',
          '真实播种 wheat，而不是用 artificial grass / symbolic installation 替代',
          '在数月内维护、灌溉和照料作物，使作品遵循植物生长时间',
          '让成熟金色麦田与 Wall Street / World Trade Center skyline 同时进入现场视觉关系',
          '最终收割，让 food production 与高地价金融区形成物质而非比喻性的 confrontation',
        ],
        sourceUrl: denesState,
        images: [],
        relations: [rel('展览', 'Public Art Fund commission — Battery Park landfill, New York', '1982')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022 · historical presentation'],
    sources: [
      { label: 'La Biennale · Agnes Denes 2022', url: denesVenice },
      { label: 'U.S. Department of State · Agnes Denes / Wheatfield / Rice Tree Burial', url: denesState },
    ],
  },

  'venice-ibrahim-el-salahi': {
    artistId: 'venice-ibrahim-el-salahi',
    projectCoverage: '3 个 prison-drawing / medicine-packet / pandemic-mask 节点已建立深档案 · 1976–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。El-Salahi 的 drawing 语言把 Arabic calligraphy、Sudanese ornament、Islamic spirituality 与 modernist abstraction 连起来；更重要的是，纸张来源本身持续改变——监狱碎纸、药盒、信封都直接规定构图边界。',
    projects: [
      {
        title: 'Prison Notebook',
        cluster: 'political imprisonment / secret drawing / Arabic prose + image',
        period: '1976',
        summary: '1975 年被无审判关押六个月后，El-Salahi 在 house arrest 期间完成 38 幅 ink drawings 与 Arabic prose / poetry 的 notebook，既记录 Kober Prison 经验，也以线条和文字消化被拘禁带来的精神压力。',
        actions: [
          '将 prison experience 转成 notebook-scale pen-and-ink drawings，而非大型历史绘画',
          '把 Arabic prose / poetry 与 image 直接放在同一页，使 writing 与 drawing 相互生长',
          '反复使用 face、window、bird、tree、cell-like enclosure 等形态处理 confinement 与 freedom',
          '通过 page-by-page sequence 保存 prison memory 的碎片化时间，而非重建连续叙事',
        ],
        sourceUrl: salahiPrison,
        images: [],
        relations: [rel('收藏', 'Museum of Modern Art, New York', 'Prison Notebook · 38 ink drawings')],
      },
      {
        title: 'Pain Relief Drawings',
        cluster: 'medicine packets / daily drawing / chronic pain',
        period: '2016–ongoing',
        summary: '因 sciatica 与 Parkinson’s 限制行动后，他开始在止痛药包装、pill labels、信封和纸屑背面每天画小型 ink drawings。药物容器从被丢弃包装变成“疼痛—绘画—缓解”的直接支撑。',
        actions: [
          '保留 daily medication 的 packets、labels、envelopes 和 scrap paper 作为 drawing supports',
          '不裁掉包装原有折痕和版面，让既有边界决定新图像布局',
          '以 fine pen-and-ink line 发展 face、plant、bird 与 calligraphic abstraction',
          '把 drawing 作为 chronic pain 中可持续的 meditative activity，而非单次疗愈主题',
          '持续积累 hundreds of small works，使身体受限反而生成高频率小尺度实践',
        ],
        sourceUrl: salahiPain,
        images: [],
        relations: [rel('展览', 'Ibrahim El-Salahi: Pain Relief Drawings — The Drawing Center', '2022–2023 · over 100 drawings')],
      },
      {
        title: 'Behind the Mask',
        cluster: 'pandemic drawing / folded envelopes / claustrophobic framing',
        period: '2020–2022',
        summary: 'Covid-19 pandemic 期间的新系列继续使用 medicine packets 与 envelopes。折痕被直接当作内部 frame，夸张面孔、线性抽象和 knotty landscapes 被压进狭小格子，把 pandemic claustrophobia 转成纸张本身的构图约束。',
        actions: [
          '继续使用已有 folds 的 medicine packaging / envelopes 而非 blank fine-art paper',
          '把 fold lines 当成预先存在的 compositional frames，不消除包装历史',
          '在狭窄分区中绘制 exaggerated faces、linear abstraction 与 knotty landscapes',
          '让 pandemic isolation 与纸面 cramped composition 形成直接结构对应',
          '保持 Arabic-calligraphic / Sudanese ornamental / modernist line language 的长期连续性',
        ],
        sourceUrl: salahiVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: [],
    exhibitions: ['Ibrahim El-Salahi retrospective — Tate Modern 2013', 'The Milk of Dreams — Venice Biennale 2022', 'Pain Relief Drawings — The Drawing Center 2022–2023'],
    sources: [
      { label: 'La Biennale · Ibrahim El-Salahi 2022', url: salahiVenice },
      { label: 'MoMA · Prison Notebook', url: salahiPrison },
      { label: 'The Drawing Center · Pain Relief Drawings', url: salahiPain },
    ],
  },

  'venice-sara-enrico': {
    artistId: 'venice-sara-enrico',
    projectCoverage: '3 个 textile-formwork / concrete-body / horizontal-rest 节点已建立深档案 · 2017–2024',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Enrico 的雕塑从服装打版开始：technical fabric 先被缝成 jumpsuit-like soft formwork，pigmented concrete 再灌入其中；衣服的缝线、拉链和柔软折痕因此被永久转译成混凝土“皮肤”。',
    projects: [
      {
        title: 'The Jumpsuit Theme — early modules',
        cluster: 'garment pattern / soft formwork / concrete casting',
        period: '2017–2021',
        summary: '系列从 Thayaht 1919 的 T-shaped tuta 与 Vionnet 的裁剪逻辑出发。Enrico 先把简单圆柱转换为 sewing patterns，再缝制 technical-fabric mould；流动混凝土在软模内膨胀，产生近人体 limb / resting body 的体积。',
        actions: [
          '从 cylindrical modules 推导 garment-like paper patterns，而不是先雕刻硬模',
          '将 pattern 缝成 laboratory-made technical fabric soft formwork',
          '在 fabric suit 内灌注 concrete mixed with pigment',
          '利用 wet concrete 的重量与膨胀主动拉扯 seam、zip 和 fold，使 garment construction 记录在表面',
          '待混凝土固化后移除 / 处理柔软 mould，使 rigid sculpture 保留 cloth-like wrinkles',
        ],
        sourceUrl: enricoJumpsuit,
        images: [],
        relations: [],
      },
      {
        title: 'The Jumpsuit Theme — Venice installation',
        cluster: 'pigmented concrete / reclining bodies / refusal of hyperfunction',
        period: '2022',
        summary: 'Venice 版本将多件 concrete bodies 直接摊放地面，像在午睡、倒下或拒绝工作。jumpsuit 的工人制服、prison clothing 与 gender-neutral garment 历史被转成“不再高效运作的身体”。',
        actions: [
          '继续以 pigmented concrete + technical-fabric casting 生产 elongated anthropomorphic bodies',
          '将作品低置或直接 sprawled on floor，而非立于 pedestal 展示力量',
          '利用 used-clothes / jumpsuit proportion 保持近人体尺度，同时让 limbs 拉长和扭曲',
          '把 seam、zip、crease 等 clothing details 固化进硬质 surface，使 concrete 看起来像 vulnerable skin',
          '通过群体 horizontal placement 把 inactivity、rest 与 non-use 变成安装结构',
        ],
        sourceUrl: enricoVenice,
        images: [],
        relations: [
          rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Central Pavilion'),
          rel('收藏', 'Castello di Rivoli Museo d’Arte Contemporanea', 'The Jumpsuit Theme · 2022 acquisition/display'),
        ],
      },
      {
        title: 'The Jumpsuit Theme — Unearth Desires',
        cluster: 'collective reclining installation / skin politics / sculpture-body encounter',
        period: '2023–2024',
        summary: '后续版本继续生产 concrete / pigment bodies，并在 Unearth Desires 中将 stretched horizontal sculptures 编成群体。观众自身身体在其间移动，衣服—皮肤—建筑表面的关系被进一步变成 spatial choreography。',
        actions: [
          '继续使用 soft textile mould → pigmented concrete 的同一制作逻辑，而不是将系列改成复制模具量产',
          '通过每次浇注的 flow / fold 差异保留单件身体的不可完全重复性',
          '将多个 reclining forms 按 exhibition architecture 重新排列，建立 body-to-body / viewer-to-object 距离',
          '以 surface seam、crease 与 stretched posture 讨论 dress、skin、vulnerability 与 desire',
        ],
        sourceUrl: enricoUnearth,
        images: [],
        relations: [rel('展览', 'Unearth Desires — Vistamare Milano', '2024')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022', 'Ouverture 2024 — Castello di Rivoli', 'Unearth Desires — Vistamare Milano 2024'],
    sources: [
      { label: 'La Biennale · Sara Enrico 2022', url: enricoVenice },
      { label: 'Sara Enrico · The Jumpsuit Theme', url: enricoJumpsuit },
      { label: 'Sara Enrico / Castello di Rivoli · Ouverture 2024', url: enricoOuverture },
      { label: 'Sara Enrico · Unearth Desires', url: enricoUnearth },
    ],
  },
};