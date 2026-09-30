import type { ArtistArchive, ArchiveImage, ArchiveRelation } from './archiveData';

const img = (url: string, title: string, credit: string, sourceUrl: string, sourceLabel: string): ArchiveImage => ({ url, title, credit, sourceUrl, sourceLabel });
const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const felicityHome = 'https://www.felicityhammond.com/';
const felicityBio = 'https://www.felicityhammond.com/bio';
const felicityProperty = 'https://www.felicityhammond.com/property-artist-book-spbh-editions-2019/';
const felicityRemains = 'https://www.felicityhammond.com/remains-in-development';
const felicityHidden = 'https://www.felicityhammond.com/hidden-gems';
const felicityDeposits = 'https://www.felicityhammond.com/deposits/';
const felicityVariations = 'https://photoworks.org.uk/whats-on/felicity-hammond/';
const felicityV4 = 'https://photoworks.org.uk/v4-repository-felicity-hammond/';

const huntsHome = 'https://www.alexandrahunts.com/';
const huntsMatter = 'https://www.meer.com/en/33808-alexandra-hunts';
const huntsDrum = 'https://www.alexandrahunts.com/index.php/can-you-hear-the-shape-of-the-drum/';
const huntsSomfy = 'https://2018.somfyphotographyaward.com/en/';
const huntsArtHub = 'https://arthubcopenhagen.net/en/profile/alexandra-hunts/';
const huntsManyBody = 'https://www.uni-heidelberg.de/en/transfer/communication/science-and-the-arts/sciart-residency-at-crc-1225-isoquant';
const huntsRijks = 'https://rijksakademie.nl/en/open-archive?filters%5Bfilter_tag_ids%5D%5B%5D=c6d04b94-92f5-49f1-afa3-027aca6e7267&filters%5Btag_list_option%5D=selected';

const yokotaFoam = 'https://www.foam.org/artists/daisuke-yokota';
const yokotaSite = 'https://www.foam.org/events/daisuke-yokota-site-cloud';
const yokotaCanon = 'https://global.canon/en/newcosmos/interview/daisuke-yokota/index.html';
const yokotaVertigo = 'https://newfavebooks.com/interviews/daisuke-yokota/';
const yokotaTransparent = 'https://newfavebooks.com/toransupearento-daisuke-yokota-html/';
const yokotaColor = 'https://www.harpersgallery.com/exhibitions/daisuke-yokota';
const yokotaMatter = 'https://www.lensculture.com/projects/327830-matter-burn-out';
const yokotaKyoto = 'https://www.kyotographie.jp/en/programs/2025/daisuke-yokota/';

const huntsDrumImages = [
  img('https://www.alexandrahunts.com/files/gimgs/th-55_DSCF4855.jpg', 'Can You Hear the Shape of the Drum — installation view', '© Alexandra Hunts', huntsDrum, 'Alexandra Hunts · official'),
  img('https://www.alexandrahunts.com/files/gimgs/th-55_DSCF4857.jpg', 'Can You Hear the Shape of the Drum — installation detail', '© Alexandra Hunts', huntsDrum, 'Alexandra Hunts · official'),
];

const yokotaMatterImage = img(
  'https://www.foam.org/_next/image?q=80&url=https%3A%2F%2Fa.storyblok.com%2Ff%2F113697%2F1772x1181%2Fd1624c1bfc%2Flr_daisuke_yokota_foam_by_cvdk_01.jpg&w=1920',
  'Matter — installation view',
  'Photo Christian van der Kooy / Foam',
  yokotaFoam,
  'Foam'
);

export const archiveBatch70: Record<string, ArtistArchive> = {
  'felicity-hammond': {
    artistId: 'felicity-hammond',
    projectCoverage: '5 个核心项目 / 方法阶段已建立深档案',
    imageCoverage: '0 / 5 项目已建立稳定直链图像 · 当前优先保留艺术家官网与机构项目页',
    note: '这轮把 Felicity Hammond 从“建筑 / 数字图像”进一步拆成一条连续的生产链：地产效果图如何制造未来价值 → 施工现场和废料如何被删除 → 矿产与数据基础设施如何支撑屏幕 → AI 图像怎样反复训练自身 → 所谓云端最终仍需要仓库、物流与实体存储。项目图像暂不使用不稳定外链，避免为了填图牺牲来源可靠性。',
    projects: [
      {
        title: 'Property',
        cluster: '房地产渲染 / found image / photo-sculpture / artist book',
        period: '2015–2019',
        summary: '从房地产与建筑可视化系统的完美 renderings 出发，把尚未存在的未来空间与真实城市中的施工、垃圾、磨损和未完成状态碰撞。2019 年摄影书把这种冲突进一步变成翻页、开孔与纸张对象。',
        actions: [
          '系统收集房地产 brochure 与 architectural visualisation 中的 found renderings',
          '自己拍摄建设中的城市、construction site、遗留材料与不光滑的现实表面',
          '用 collage 把“已经完成的虚拟未来”与“仍在施工的现实”拼接到同一图像',
          '制作 photo-sculpture / installation，使照片从墙面延伸成支撑物、舞台和物体',
          '在 Property 摄影书中切割页面，让下一层图像通过孔洞显现，使 book structure 直接参与空间关系',
        ],
        sourceUrl: felicityProperty,
        images: [],
        relations: [
          rel('出版', 'Property · SPBH Editions', '2019 · 64 pages · edition 500'),
          rel('展览', 'World Capital · Arebyte, London', '2019 · 延伸其地产 / 虚拟城市研究'),
        ],
      },
      {
        title: 'Remains in Development',
        cluster: '城市开发 / large-scale collage / site-responsive installation',
        period: '2020–2021',
        summary: '把 glossy real-estate brochures 与 Hammond 自己拍摄的城市图像拼成无明确地理位置的巨大开发景观；轮胎、托盘、石膏袋和建筑废料被重新带回原本会被广告图像删除的“未来城市”。',
        actions: [
          '从开发商宣传图中提取无人物、无摩擦、已经完成的未来建筑表面',
          '把 car tyres、construction debris、bags of plaster、wooden pallets 等现场材料拍入自己的图像库',
          '制作大尺度 collage，使 plan / execution、utopia / dystopia 无法再被分开观看',
          '依据每个展场改变作品材料、尺寸、支撑与空间关系，不把数字图像固定成唯一实体版本',
          '在 C/O Berlin 同期把 5 个作品放回城市 advertising columns，让地产式视觉回到公共广告基础设施',
        ],
        sourceUrl: felicityRemains,
        images: [],
        relations: [
          rel('展览', 'Remains in Development · C/O Berlin', '2020–2021 · curated by Kathrin Schönegg'),
          rel('展览', 'Kunsthal Extra City, Antwerp', 'co-produced exhibition'),
          rel('出版', 'Property', 'exhibition accompanied by SPBH artist book'),
        ],
      },
      {
        title: 'Hidden Gems',
        cluster: 'planetary mine / extraction / speculative photographic collage',
        period: '2022–ongoing',
        summary: '从“planetary mine”概念出发，把矿区、矿物、隐藏劳动与 toxic-waste disposal 组合成新的地下图景；开采与废弃不再是两个阶段，而成为同一循环经济在地下留下的镜像。',
        actions: [
          '收集 / 拍摄 mined landscapes、minerals、labour 与 industrial waste disposal',
          '把原材料被挖出与废料再次被埋入地下的两条路线并置',
          '使用 photographic collage 折叠 geological deep time 与未来废物储存时间',
          '通过中央大型拼贴制造并不存在但由真实 extraction system 推导出的 speculative image',
        ],
        sourceUrl: felicityHidden,
        images: [],
        relations: [rel('展览', 'Entanglements · Center for Visual Art Denver', '2023')],
      },
      {
        title: 'Deposits',
        cluster: 'data mining / mineral extraction / gallery-specific installation',
        period: '2023',
        summary: '把 data mining、矿物开采与电子设备之间的关系压缩到一个专为空间制作的装置里，并把 technological growth 的工业副产品想象成未来的地质层。',
        actions: [
          '研究 digital devices 所需矿物与数据经济之间常被界面隐藏的材料联系',
          '继续使用 photographic collage，但不把它当独立平面作品',
          '为 Galleria Piu 的 gallery architecture 设计 installation framework',
          '以 upturned worlds / 翻转结构改变观众的身体方向，使地下、地表、屏幕之间的层级失稳',
        ],
        sourceUrl: felicityDeposits,
        images: [],
        relations: [rel('展览', 'Deposits · Galleria Piu, Bologna', '2023 · with PhMuseum / PhMuseum Days')],
      },
      {
        title: 'Variations — V1 Content Aware / V2 Rigged / V3 Model Collapse / V4 Repository',
        cluster: 'AI feedback loop / mining-to-pixel / evolving four-part installation',
        period: '2024–2026',
        summary: '四站巡回不只是同一展览换场地，而是一个会把上一阶段 documentation 重新喂给下一阶段的系统。Hammond 用 shipping container、camera、镜子、PLA、raw files、邮件和档案碎片把“mineral → pixel → AI image → repository”完整展开。',
        actions: [
          'V1 把 mining landscape 的 pixelated image 贴到 shipping container 表面，同时让 container 拍摄 / 收集现场图像数据',
          '每一站都进行 photographic documentation，并把这些图像作为下一版本的训练 / 生成材料',
          'V2 使用 powder-coated steel / aluminium、PVC banner、camera、mirrors、PLA prints 等暴露 AI 的物质基础',
          'V3 研究 model collapse，让 AI-generated errors、impossible architecture 与图像退化成为摄影和雕塑结构',
          'V4 把 finished works 与 props、equipment、tests、contact strips、raw files、物流邮件和数字痕迹同场归档',
          '通过四站迭代，把“数据中心 / 云端”重新解释为依赖土地、物流、劳工、矿物和存储设备的实体系统',
        ],
        sourceUrl: felicityVariations,
        images: [],
        relations: [
          rel('奖项', 'Ampersand/Photoworks Fellowship', '2023 · research / production support'),
          rel('展览', 'V1: Content Aware · Photoworks Weekender, Brighton', '2024'),
          rel('展览', 'V2: Rigged · QUAD / FORMAT, Derby', '2025'),
          rel('展览', 'V3: Model Collapse · The Photographers’ Gallery', '2025'),
          rel('展览', 'V4: Repository · Stills Centre for Photography', '2025–2026'),
        ],
      },
    ],
    awards: [
      'Foam Talent 2016',
      'British Journal of Photography International Photography Award · single image winner 2016',
      'Lumen Art Prize · Rapoport Award for Women · winner 2018',
      'Deutsche Börse Photography Foundation Prize · longlist 2019',
      'Ampersand/Photoworks Fellowship · winner 2023',
      'MAST Photography Grant · shortlist 2025',
    ],
    exhibitions: [
      'Public Protection, Private Collection — Space In Between, London, 2016',
      'In Defence of Industry — Signal Film and Media, 2017',
      'Arcades — CONTACT Gallery, Toronto, 2018',
      'World Capital — Arebyte, London, 2019',
      'Remains in Development — C/O Berlin / Kunsthal Extra City, 2020–2021',
      'V3: Model Collapse — The Photographers’ Gallery, 2025',
      'V4: Repository — Stills Centre for Photography, 2025–2026',
    ],
    sources: [
      { label: 'Felicity Hammond · projects', url: felicityHome },
      { label: 'Felicity Hammond · CV', url: felicityBio },
      { label: 'Property · official', url: felicityProperty },
      { label: 'Remains in Development · official', url: felicityRemains },
      { label: 'Hidden Gems · official', url: felicityHidden },
      { label: 'Deposits · official', url: felicityDeposits },
      { label: 'Photoworks · Variations', url: felicityVariations },
      { label: 'Photoworks · V4 Repository', url: felicityV4 },
    ],
  },

  'alexandra-hunts': {
    artistId: 'alexandra-hunts',
    projectCoverage: '5 个核心项目 / 研究节点已建立深档案',
    imageCoverage: '1 / 5 项目已建立图像档案 · 2 张艺术家官网图像',
    note: '本轮不再把 Alexandra Hunts 简化成“数字图像 / 科学”。档案按她真正反复使用的方法组织：先把不可见概念变成可操作问题，再通过重复、测量、材料实验与科学家对话生产作品。后期 Ukraine 相关作品也不是突然改做政治艺术，而是延续“power / transmission / collapse / boundary”这套问题结构。',
    projects: [
      {
        title: 'Mass. Sublime Measurement / Matter of Knowledge',
        cluster: 'measurement standard / kilogram / obsessive repetition',
        period: '2016–2017',
        summary: '用一公斤苹果、国家 kilogram prototype 和一公斤纸反复测试“标准”到底是什么。摄影在这里不是证明现实，而是帮助暴露一个看似自然的单位实际上依赖物体、机构和校准系统。',
        actions: [
          '在果园反复称苹果，每一组都逼近 1 kilogram',
          '制作 Search for the Kilogram：1000 张独立的“一公斤苹果”照片',
          '把 1000 次重复汇成 metric tonne 的视觉 / 概念对应关系',
          '进入 Netherlands Measurement Institute 拍摄国家 prototype kilogram #53',
          '把 Artefact #53 放在约 1.0003 kg 的纸堆上，让照片支撑物本身也加入测量',
        ],
        sourceUrl: huntsMatter,
        images: [],
        relations: [
          rel('展览', 'Rudin Prize for Emerging Photographers · Norton Museum of Art', '2016'),
          rel('展览', 'Matter of Knowledge · Galerie Bart, Amsterdam', '2017–2018'),
        ],
      },
      {
        title: 'Color of Light',
        cluster: 'colour temperature / social space / photography + solar shading',
        period: '2018–2019',
        summary: '把 color temperature 从摄影技术参数转成社会空间变量：冷暖光如何改变安全感、亲近感与归属，并由 solar shading 进一步连接 private / public、inside / outside。',
        actions: [
          '把不同 colour prism / temperature 作为实际感知变量，而非后期风格',
          '研究冷光和暖光怎样影响人在空间里的情绪与社会关系',
          '把 photography 与 solar-shading system 组合，让控制光线的建筑设备成为作品材料',
          '利用遮阳装置本身同时划分 indoor / outdoor 与 private / public 的双重功能',
        ],
        sourceUrl: huntsSomfy,
        images: [],
        relations: [rel('奖项', 'Somfy Photography Award', 'project / award context')],
      },
      {
        title: 'Can You Hear the Shape of the Drum?',
        cluster: 'mathematics / wave-particle duality / sculptural photography',
        period: '2019',
        summary: '从 Mark Kac 的数学问题进入：如果不同形状的鼓可以拥有相同的频率集合，那么数据并不能唯一反推出形状。Hunts 把这一“不唯一性”转成钢、摄影网布、混凝土和 found material 的空间结构。',
        actions: [
          '阅读 / 转译“Can one hear the shape of a drum?” 的数学问题',
          '与 Niels Bohr Institute 的 Charles M. Marcus 就 quantum physics / wave-particle duality 对话',
          '把 photographic print 输出在 mesh PVC 上，而不是传统相纸',
          '让钢结构、concrete 与 found materials 决定摄影图像在空间中的张力和边界',
          '用 eigenfrequency 无法唯一指认形状的问题讨论 identity / multi-identity 与 borderless existence',
        ],
        sourceUrl: huntsDrum,
        images: huntsDrumImages,
        relations: [
          rel('展览', 'Life in the Future of Science and Technology · Art Hub Copenhagen', '2019'),
          rel('展览', 'Art Rotterdam · New Art Section', '2019'),
        ],
      },
      {
        title: 'many-body problem',
        cluster: 'quantum states / SciArt residency / political collapse',
        period: '2022–2023',
        summary: '在 Heidelberg 的 IsoQuant residency 中把多体量子系统的 order / disorder、collapse / restructuring 与 Ukraine 战争后政治系统的脆弱性并置，并通过与研究人员的长期对话形成多件安装作品。',
        actions: [
          '进入 CRC 1225 IsoQuant 数月 residency，与量子物理研究团队持续交流',
          '研究 many-body problem 中大量 interacting particles 产生的不可简化整体状态',
          '把 quantum state collapse / restructuring 与政治制度崩塌、重组建立结构类比',
          '依据科学对话制作多件 installation，而不是仅引用科学视觉符号',
          '把 Ukraine 战争带来的现实经验纳入原先对不确定性、边界与系统的研究',
        ],
        sourceUrl: huntsManyBody,
        images: [],
        relations: [
          rel('展览', 'many-body problem · EINC / Heidelberg University', '2023 solo exhibition'),
          rel('展览', 'La Box / ENSA Bourges', '2024 context'),
        ],
      },
      {
        title: 'Freedom Trapped in Avalanche / Caution: Live Wires',
        cluster: 'Ukraine / energy infrastructure / found material / power',
        period: '2023–2025',
        summary: 'Rijksakademie 阶段把“力与传导”从物理学问题进一步连接到 Ukraine 的历史、战争和基础设施：旧 Soviet linen、PET print、玻璃绝缘子、钢、霓虹与窗栅共同承担记忆与电力系统。',
        actions: [
          '使用 old Soviet linen 与 embroidery，让旧纺织材料本身携带历史时间',
          '把 PET print 与纺织表面叠加，制造数字图像与旧材料之间的时代错层',
          '收集 / 使用 Ukrainian glass electrical insulators，而不是仿造电力系统道具',
          '以 stainless steel、neon 与 found window grill 建立导电、绝缘、保护和阻隔的空间结构',
          '把“power”同时保持为物理力量、电力、制度权力三个互相切换的含义',
        ],
        sourceUrl: huntsRijks,
        images: [],
        relations: [rel('展览', 'Rijksakademie Open', '2024 · Caution: Live Wires')],
      },
    ],
    awards: [
      'Foam Talent 2016',
      'Rudin Photography Prize · nominee 2016',
      'ING / New Talent Photography Award · selected 2016',
      'Hermine van Bers Prize · 2018/2019',
      'Somfy Photography Award · 2019',
      'Rijksakademie residency · 2023–2025',
    ],
    exhibitions: [
      'Foam Talent — Red Hook Labs, New York / Beaconsfield Vauxhall, London, 2017',
      'Matter of Knowledge — Galerie Bart, Amsterdam, 2017–2018',
      'Life in the Future of Science and Technology — Art Hub Copenhagen, 2019',
      'Cosmic Radiation: #11 Cobalt Blue — KUNSTEN Aalborg, 2020',
      'many-body problem — EINC / Heidelberg University, 2023',
      'Rijksakademie Open — Amsterdam, 2024–2025',
    ],
    sources: [
      { label: 'Alexandra Hunts · official', url: huntsHome },
      { label: 'Matter of Knowledge · exhibition text', url: huntsMatter },
      { label: 'Can You Hear the Shape of the Drum? · official', url: huntsDrum },
      { label: 'Somfy Photography Award · Color of Light', url: huntsSomfy },
      { label: 'Art Hub Copenhagen · research profile', url: huntsArtHub },
      { label: 'Heidelberg University · many-body problem', url: huntsManyBody },
      { label: 'Rijksakademie · open archive', url: huntsRijks },
    ],
  },

  'daisuke-yokota': {
    artistId: 'daisuke-yokota',
    projectCoverage: '5 个关键项目 / 转译阶段已建立深档案',
    imageCoverage: '1 / 5 项目已建立图像档案 · 1 张已核对 Foam installation image',
    note: 'Daisuke Yokota 的作品很容易被简化成“粗颗粒日本摄影”。这一轮按照图像真正经历的处理链来建档：再摄影与改显影 → 数字 / 模拟回声 → 摄影书时间结构 → 无相机彩色胶片 → 十万张纸、蜡、燃烧与再摄影。重点不是表面风格，而是同一图像如何在不同物质状态之间不断迁移。',
    projects: [
      {
        title: 'Nocturnes',
        cluster: 'rephotography / altered development / layered scan',
        period: '2012–2013',
        summary: '黑白夜景与匿名身体只是视觉表层；真正的生成发生在已有照片被再次拍摄、胶片显影时间被改变、再扫描和 Photoshop 叠加之后。',
        actions: [
          '从已有 print / image 而非全新的拍摄对象开始',
          '对原图进行 rephotography，让第二次拍摄继承第一次图像的信息与损失',
          '在 film processing 中改变 development time，主动引入 grain、density 与不可预测变化',
          '扫描处理后的胶片，再在 Photoshop 中继续 layering',
          '把处理造成的噪声保留为最终图像的一部分，而不是修复成干净文件',
        ],
        sourceUrl: yokotaFoam,
        images: [],
        relations: [rel('出版', 'Nocturnes · AM Projects / Dienacht Publishing', 'early photobook context')],
      },
      {
        title: 'Site / Cloud',
        cluster: 'digital + film / photocopy / improvised darkroom / visual echo',
        period: '2013–2014',
        summary: '通过 digital photography、traditional film、re-shooting、photocopy、Photoshop 与自建暗房的化学实验不断增加图层，使 site 的稳定空间逐渐溶解成 cloud 式的不确定图像。',
        actions: [
          '在 digital file 与 film 之间来回转换同一图像',
          '重复 shoot / re-shoot，把每次复制的失真继续带到下一次',
          '在公寓中搭 improvised darkroom，允许热、化学、偶然痕迹进入 process',
          '加入 photocopy 与 Photoshop，而不区分“模拟纯度”和“数字后期”',
          '借鉴 electronic music 的 echo / delay / reverberation，把时间上的重复变成视觉层',
        ],
        sourceUrl: yokotaSite,
        images: [],
        relations: [
          rel('奖项', 'Outset | Unseen Exhibition Fund', '2013 · led to Foam solo exhibition'),
          rel('展览', 'Site / Cloud · Foam Amsterdam', '2014'),
        ],
      },
      {
        title: 'VERTIGO / TORANSUPEARENTO',
        cluster: 'photobook sequencing / personal time / transparency remix',
        period: '2014',
        summary: 'VERTIGO 让约九十张图像通过书籍顺序制造眩晕与时间错乱；随后 TORANSUPEARENTO 直接重做这些既有图像并印在透明薄膜上，让多页叠加再次生成新图像。',
        actions: [
          '把 vertigo 当成身体 / 时间状态，不试图用单张照片说明它',
          '通过 intermittent sequencing 让梦、旧记忆、时差与昼夜颠倒在阅读中互相插入',
          '与 Kohei Oyama 共同编辑 VERTIGO 的 photobook sequence',
          '把 VERTIGO 图像再次修改，转为以 colour 为主的 TORANSUPEARENTO',
          '将图像全部打印到 transparency film，并用彩色透明片、白页和重叠阅读制造实时 layering',
        ],
        sourceUrl: yokotaVertigo,
        images: [],
        relations: [
          rel('出版', 'VERTIGO · Newfave', '2014 · edition 500'),
          rel('奖项', 'Paris Photo–Aperture PhotoBook of the Year', 'shortlist 2014'),
          rel('奖项', 'Rencontres d’Arles Book Awards', 'shortlist 2015'),
          rel('出版', 'TORANSUPEARENTO · Newfave / Kominek Books', '2014 · transparency-film book'),
        ],
      },
      {
        title: 'Color Photographs',
        cluster: 'camera-less colour film / physical film experiment',
        period: '2014–2015',
        summary: 'Yokota 明确尝试“不拍照”：不用相机记录外界，而把 unused large-format colour film 叠起来，以非标准显影直接抽取胶片自身的物理和化学特性。',
        actions: [
          '放弃 camera exposure，把未使用的 large-format colour film 作为起始材料',
          '叠放多张 4×5 / 8×10 等大画幅彩色胶片',
          '采用 unorthodox developing methods，使化学反应而不是外部景物决定形态',
          '扫描显影后的 film material，把透明、色块、液态痕迹转为最终 print',
          '让 chance 取代传统摄影中对焦、取景和决定性瞬间的控制逻辑',
        ],
        sourceUrl: yokotaColor,
        images: [],
        relations: [
          rel('展览', 'Color Photographs · Harper’s East Hampton', '2015 · first US exhibition'),
          rel('出版', 'Color Photographs · Harper’s Books / Flying Books', '2015'),
        ],
      },
      {
        title: 'MATTER / BURN OUT',
        cluster: 'mass printing / wax / destruction / rephotography / installation',
        period: '2015–2017',
        summary: '把可无限复制的 image data 变成十万张纸和蜡，再把作品烧掉、用约四千张照片记录燃烧，最后把毁坏过程处理成新的大尺度作品和摄影书。作品的死亡本身成为下一轮图像生产。',
        actions: [
          '从个人 archive 与大量日常图像中进行 mass printing，使图像首先成为纸张数量',
          '发展出约 100,000 photographic prints 的安装尺度，并逐张 / 大量使用 wax 处理',
          '让纸张、蜡、搬运、占地和保存成本反击数字图像“无重量”的假象',
          '在 Xiamen 展览结束后烧毁 Matter，而不是将其完整保存',
          '以约 4,000 个 frames 记录 burn-out process',
          '再次 process / manipulate 燃烧记录，生成新的 MATTER / BURN OUT 图像与出版物',
          '2017 Foam Matter 继续把摄影的 volume、material 和触觉扩展为三维展厅经验',
        ],
        sourceUrl: yokotaMatter,
        images: [yokotaMatterImage],
        relations: [
          rel('展览', 'Matter · Jimei x Arles, Xiamen', '2015 · subsequent burn-out action'),
          rel('展览', 'Aichi Triennale', '2016 · approximately 100,000 wax-coated prints'),
          rel('出版', 'MATTER / BURN OUT · artbeat publishers', '2016'),
          rel('奖项', 'Foam Paul Huf Award', 'winner 2016'),
          rel('展览', 'Matter · Foam Amsterdam', '2017'),
        ],
      },
    ],
    awards: [
      'Canon New Cosmos of Photography · Honorable Mention 2008',
      '1_WALL Photography Competition · Grand Prize 2010',
      'Outset | Unseen Exhibition Fund · 2013',
      'Foam Talent · 2013',
      'Foam Talent · 2016',
      'Foam Paul Huf Award · winner 2016',
      'Kimura Ihei Photography Award · 2019',
    ],
    exhibitions: [
      'Site / Cloud — Foam Amsterdam, 2014',
      'Color Photographs — Harper’s East Hampton, 2015',
      'Aichi Triennale — Matter, 2016',
      'Matter — Foam Amsterdam, 2017',
      'Shape of Light — Tate Modern, 2018',
      'Painting the Night — Centre Pompidou-Metz, 2018–2019',
      'Daisuke Yokota x Another Man — KYOTOGRAPHIE, 2025',
    ],
    sources: [
      { label: 'Foam · Daisuke Yokota artist archive', url: yokotaFoam },
      { label: 'Foam · Site / Cloud', url: yokotaSite },
      { label: 'Canon · process interview', url: yokotaCanon },
      { label: 'Newfave · VERTIGO interview', url: yokotaVertigo },
      { label: 'Newfave · TORANSUPEARENTO', url: yokotaTransparent },
      { label: 'Harper’s · Color Photographs', url: yokotaColor },
      { label: 'LensCulture · MATTER / BURN OUT', url: yokotaMatter },
      { label: 'KYOTOGRAPHIE · artist profile', url: yokotaKyoto },
    ],
  },
};
