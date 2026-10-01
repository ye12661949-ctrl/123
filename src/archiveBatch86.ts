import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const ismailovaVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/saodat-ismailova';
const parraVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/violeta-parra';
const hakihiiweVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/sheroanawe-hakihiiwe';
const gaupVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/aage-gaup';
const zhengVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/zheng-bo';
const pessoaVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/solange-pessoa';

export const archiveBatch86: Record<string, ArtistArchive> = {
  'venice-saodat-ismailova': {
    artistId: 'venice-saodat-ismailova',
    projectCoverage: '2 个 Central Asian memory / ritual-space video 节点已建立深档案 · 2017–2022',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Ismailova 把 Central Asian ancestral knowledge、women-centred folklore、ritual architecture 与 moving image 结合；真实地点、宗教实践和虚构人物会同时进入影片，而不是被拆成 documentary / fiction 两类。',
    projects: [
      {
        title: 'Two Horizons',
        cluster: 'two-channel video / memory / Central Asian cosmology',
        period: '2017',
        summary: 'Two Horizons 延续 Ismailova 对 Central Asian memory、spirituality 与 landscape 的长期研究。双频道结构让不同地点、时间与叙述并行，而不要求观众把它们还原成唯一线性历史。',
        actions: [
          '以 two-channel HD video 让两个影像时间并置，而非单屏顺序解释',
          '从 Central Asian landscape、ritual memory 与 women-centred oral histories 取材',
          '通过并置真实地点与寓言性画面制造 real / imagined space 的重叠',
          '让 sound、gesture 与 landscape 承担记忆线索，而非依赖 explanatory text',
        ],
        sourceUrl: ismailovaVenice,
        images: [],
        relations: [],
      },
      {
        title: 'Chillahona',
        cluster: 'three-channel video / underground ritual cell / embroidery',
        period: '2022',
        summary: 'Chillahona 在 Tashkent 同名地下修行空间拍摄。建筑有三层，影片也分三频道：访客、祈祷仪式、以及一名年轻女性的自我隔离分别对应三个观看层级；旁边悬挂女性 cosmology 的传统刺绣。',
        actions: [
          '进入 Tashkent 真实 underground chillahona cell 拍摄，而不是复制 ritual set',
          '用 three-channel video 对应建筑 three levels，使空间结构直接转成影片结构',
          '分别记录 visitors、devotees rituals / prayers 与 young woman self-isolation',
          '引用 Elyor Ishmuhamedov 1988 film Shok 的影像片段，并加入 animation / sound design',
          '与 Madina Kasimbaeva 等协作制作 2.5×4m traditional embroidery，以 white fabric + coloured light 连接 female cosmology、protection、healing、fertility',
        ],
        sourceUrl: ismailovaVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Arsenale · new commission')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Saodat Ismailova 2022', url: ismailovaVenice }],
  },

  'venice-violeta-parra': {
    artistId: 'venice-violeta-parra',
    projectCoverage: '2 个 canciones-que-se-pintan / arpillera 代表节点已建立深档案 · 1961–1964',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选历史档案，尚非作品全集。Parra 在成熟 singer-songwriter 生涯中发展“songs that paint themselves”：painting、sculpture 与 embroidery 延伸音乐叙事；arpillera 以粗 wool stitch、macramé 与 knitted braid 直接塑造人物和历史场景。',
    projects: [
      {
        title: 'El circo',
        cluster: 'arpillera / music-to-image / festive collective scene',
        period: '1961',
        summary: '彩色人物围绕中央巨大 pitcher 唱歌、跳舞，场面既像庆典又带着 Pandora-box 式不确定性。Parra 用 thick wool、macramé 和 knitted braid 让人物从 textile surface 中凸起。',
        actions: [
          '以 arpillera / embroidery 而非 painting 组织完整 narrative scene',
          '使用 thick wool stitches、macramé 与 knitted braid 增加 figure 的三维厚度',
          '将 music / performance world 中的 collective rhythm 转成反复 stitch rhythm',
          '让 festive everyday scene 与 spiritual / ominous ambiguity 同时存在',
        ],
        sourceUrl: parraVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · historical presentation')],
      },
      {
        title: 'Combate naval I',
        cluster: 'arpillera / War of the Pacific / popular-history textile',
        period: '1964',
        summary: '作品以 arpillera 叙述 War of the Pacific，Captain Arturo Prat 挥舞 Chilean flag，而 Esmeralda 正在下沉。国家历史被转成手工 textile storytelling，而不是学院式 historical painting。',
        actions: [
          '用 ancestral / pre-Columbian-inspired textile imagery 处理 19th-century national-history episode',
          '通过 coloured wool 与 raised stitching 区分 ship、flag、figures 与 sea',
          '保留 folk-art-like frontal storytelling，不模仿 academic battle painting perspective',
          '把 private / shared cultural memory 与 high / low culture 之间界限主动打散',
        ],
        sourceUrl: parraVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · historical presentation')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022 · historical presentation'],
    sources: [{ label: 'La Biennale · Violeta Parra 2022', url: parraVenice }],
  },

  'venice-sheroanawe-hakihiiwe': {
    artistId: 'venice-sheroanawe-hakihiiwe',
    projectCoverage: '2 个 handmade-paper / Yanomami graphic-compendium 节点已建立深档案 · 1990s–2021',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Hakihiiwe 的图像从材料开始：先以 local plant fibres 自制纸，再以 dotted lines、grids、curves 与 monoprint 建立不断扩张的 Yanomami graphic compendium；符号同时来自 ancestral pattern 与对 jungle / community 的新观察。',
    projects: [
      {
        title: 'Yanomami handmade-paper practice',
        cluster: 'local plant fibre / papermaking / Indigenous knowledge carrier',
        period: '1990s–ongoing',
        summary: 'Hakihiiwe 在 1990s 向 Laura Anderson Barbata 学习 papermaking 后，以当地植物 fibre 自制 sheets。paper 不是中性 support，而把 jungle labour、植物知识与社区材料直接带入 drawing / print。',
        actions: [
          '从当地可获得 plant fibres 收集 / 处理造纸原料',
          '学习并在 Yanomami community context 中发展 handmade papermaking',
          '让 sheet colour、fibre texture 与 irregularity 保持可见，不追求 industrial paper uniformity',
          '在自制纸上发展 dotted line、circle、grid、curve、web、squiggle 等图形词汇',
        ],
        sourceUrl: hakihiiweVenice,
        images: [],
        relations: [],
      },
      {
        title: 'Iri mamiki / Yaro shinaki / Omawe / Hahoshi',
        cluster: 'monoprint / jungle observation / Yanomami symbols',
        period: '2021',
        summary: '近期 monoprints 将 ancestral signs 与新观察的 insects、plants、animals、celestial rhythms 合并：budding branches、yaro leaves、dragonfly 与 waxing / waning bodies 被压成重复 lines 与 triangles。',
        actions: [
          '从 Yanomami existing patterns / symbols 中选择可被 print 重新组织的 elements',
          '同时观察 surrounding jungle / community，创造新的 personal signs，而非只复制传统图案',
          '通过 monoprint 的 rhythmic repetition 建立图形序列',
          '让 Iri mamiki、Yaro shinaki、Omawe、Hahoshi 等各自保留具体 natural / cosmological reference',
          '把多个作品共同组织成 growing graphic compendium，而非孤立 abstract prints',
        ],
        sourceUrl: hakihiiweVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Sheroanawe Hakihiiwe 2022', url: hakihiiweVenice }],
  },

  'venice-aage-gaup': {
    artistId: 'venice-aage-gaup',
    projectCoverage: '1 个 Sámi abstraction / Alta-Action context 代表节点已建立深档案 · 1979',
    imageCoverage: '0 / 1 项目暂不使用不稳定外链图像',
    note: '当前先把 Venice 官方资料明确的 Sculpture I & II 做深，并保留 Máze Group / Alta Action 的政治语境；其他 theatre-set / sculpture 项目后续逐项核名。',
    projects: [
      {
        title: 'Sculpture I & II',
        cluster: 'suspended wave / joik structure / river-land-sky abstraction',
        period: '1979',
        summary: '两件雕塑像被悬停在空中的 wave。底部 blue、中部 yellow、顶部 orange 的 painted stripe 可读成 river、bank、sky / sunrise；Gaup 也从 Sámi joik 的音乐结构理解作品节奏。',
        actions: [
          '把 sculpture 设计成悬浮 / 波浪般连续形体，而非传统 pedestal mass',
          '以 blue-yellow-orange 三段 painted colour 暗示 river / land / sky 的层级',
          '将 formal rhythm 与 Sámi joik 的结构建立类比，而不是只把颜色当 landscape illustration',
          '把作品放在 1978 Máze Group 与 Alta Action 的 Indigenous political mobilisation 时间背景中理解',
        ],
        sourceUrl: gaupVenice,
        images: [],
        relations: [
          rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Arsenale · historical presentation'),
          rel('策展', 'Máze Group', 'co-founded 1978 · artists / activists around Alta Action'),
        ],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022 · historical presentation'],
    sources: [{ label: 'La Biennale · Aage Gaup 2022', url: gaupVenice }],
  },

  'venice-zheng-bo': {
    artistId: 'venice-zheng-bo',
    projectCoverage: '2 个 eco-sexual / forest-choreography 节点已建立深档案 · 2016–2022',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Zheng Bo 把 botany study、queer ecology、performance 与 daily ritual 合并；植物不是舞台道具，而作为 erotic / political partner 参与 choreography。',
    projects: [
      {
        title: 'Pteridophilia',
        cluster: 'fern / queer men / eco-sexual performance + video',
        period: '2016–ongoing',
        summary: 'ongoing series 让 queer men 与 ferns 发生触摸、亲密和明确 erotic interaction。作品故意越过“植物作为象征”阶段，直接测试 human-plant coexistence、pleasure 与 consent imagination 的边界。',
        actions: [
          '长期学习 biology / botany，并把 plant knowledge 纳入 performance preparation',
          '选择 ferns 作为 nonhuman partners，而不只拍摄 decorative vegetation',
          '邀请 queer male performers 在真实 vegetation 中进行 touch / movement / erotic choreography',
          '以 performance + video 记录人与植物关系，保持身体和植物材质的真实接触',
          '把 ecological care 与 queer desire 放在同一 ethics / imagination frame 中',
        ],
        sourceUrl: zhengVenice,
        images: [],
        relations: [],
      },
      {
        title: 'Le Sacre du printemps (Tandvärkstallen)',
        cluster: 'five dancers / Nordic forest / pine-moss interspecies choreography',
        period: '2021–2022',
        summary: '在 Dalarna forest 中，五名 Nordic male dancers 从 fern 扩展到 pine trees、moss 与彼此，通过 touch 和 movement 建立 collective desire。16 分钟 4K film 将 human choreography 嵌入森林生态。',
        actions: [
          '与 five dancers 在 Dalarna, Sweden forest 现场排练 / 拍摄',
          '把触摸对象从 fern 扩展到 pine、moss、soil 与其他 performers',
          '以 4K colour / sound film 记录，保留 forest texture 与 body movement 的共同节奏',
          '让 choreography 模拟 interspecies care / desire，而非人类征服自然',
          '与 cinematographer、producers、postproduction team 完成 16-minute moving-image work',
        ],
        sourceUrl: zhengVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Zheng Bo 2022', url: zhengVenice }],
  },

  'venice-solange-pessoa': {
    artistId: 'venice-solange-pessoa',
    projectCoverage: '2 个 metamorphic-drawing / soapstone landscape-sculpture 节点已建立深档案 · 2019–2021',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Pessoa 从 1980s 起把 organic material 与 south-eastern Brazil landscape 带入 sculpture / installation；body 与 nature 不是两个题材，而经常被压成同一种 primordial / ritual form。',
    projects: [
      {
        title: 'Sonhíferas',
        cluster: 'black-and-white drawing / insect-creature metamorphosis',
        period: '2020–2021',
        summary: '大胆黑白 drawings 描绘 sinuous creatures 与 insects 正处于 metamorphosis。形体既像动物、植物，也像身体器官，让 biological transformation 成为 drawing 本身的结构。',
        actions: [
          '以强烈 black-and-white drawing 语言建立高对比的 organic silhouettes',
          '从 insects / creatures 的 metamorphic state 提取 curving / hybrid body forms',
          '避免 natural-history accuracy，使 species identity 保持不稳定',
          '将 drawing 与后续 soapstone installation 共同作为 body-nature transformation 的不同媒介',
        ],
        sourceUrl: pessoaVenice,
        images: [],
        relations: [],
      },
      {
        title: 'Nihil Novi Sub Sole',
        cluster: 'soapstone / 50-sculpture botanical field / visitor pathways',
        period: '2019–2021',
        summary: '近五十件 carved soapstone sculptures 被密集组织成 botanical groups，形成观众可以穿行的路径。soapstone 的柔软可雕性让 material process、landscape geology 与 body-like tactility 同时可见。',
        actions: [
          '使用 pedra-sabão / soapstone 雕刻多个不同尺度 organic forms',
          '保留 stone 的重量、纹理和柔软可雕性，使 material history 参与形态',
          '生产约 50 件单体后按 botanical grouping 重新编排，而不是以单件 masterpiece 为中心',
          '在 installation 中留出 pathways，让 viewer 身体从石质“植物群落”中穿行',
          '通过 tactile rounded forms 将 process / fabrication、nature / culture、life / death 并置',
        ],
        sourceUrl: pessoaVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Arsenale / outdoor sequence context')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Solange Pessoa 2022', url: pessoaVenice }],
  },
};