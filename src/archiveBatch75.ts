import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const rafaEye = 'https://www.eyefilm.nl/en/programme/janis-rafa/1045238';
const rafaKala = 'https://www.moma.org/calendar/events/6611';
const rafaVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/janis-rafa';

const homerVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/jessie-homer-french';

const kiwangaShady = 'https://www.norvalfoundation.org/exhibitions/kapwani-kiwanga-shady/';
const kiwangaVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/kapwani-kiwanga';

const fritschAward = 'https://www.labiennale.org/en/news/katharina-fritsch-and-cecilia-vicu%C3%B1a-golden-lions-lifetime-achievement-biennale-arte-2022';
const fritschVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/katharina-fritsch';
const fritschWork = 'https://katharinafritsch.de/en/work';

const humeauMist = 'https://margueritehumeau.com/exhibitions/mist/';
const humeauHighTide = 'https://margueritehumeau.com/exhibitions/high-tide-prix-marcel-duchamp/';
const humeauVenice = 'https://margueritehumeau.com/exhibitions/migrations-the-milk-of-dreams/';

const bonnetVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/louise-bonnet';

export const archiveBatch75: Record<string, ArtistArchive> = {
  'venice-janis-rafa': {
    artistId: 'venice-janis-rafa',
    projectCoverage: '3 个 animal-death / ritual / cinematic violence 关键阶段已建立深档案 · 2013–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Rafa 的电影不是把动物当象征，而是让埋葬、火化、尸体、照护和共居成为人与非人关系的具体动作；她常用 staged cinematic scene 把家庭暴力、死亡与生态危机绕开直白叙事。',
    projects: [
      {
        title: 'Three Farewells: Father Gravedigger',
        cluster: 'burial / gravedigger / human-animal farewell',
        period: '2013',
        summary: 'Three Farewells 系列围绕死亡后的处理仪式展开。Father Gravedigger 以挖掘、土壤和埋葬作为核心动作，把“离别”从情绪主题变成身体劳动。',
        actions: [
          '以 burial / digging 等真实告别动作作为影像结构',
          '减少对白和解释，让土、工具、身体与等待承担叙事',
          '把 human death ritual 与后续动物尸体项目放在同一视觉谱系',
          '使用 single-channel video 让动作时长保持完整，而不剪成情节高潮',
          '让观看者面对 dead being 的物质存在，而不是仅以象征替代死亡',
        ],
        sourceUrl: rafaEye,
        images: [],
        relations: [rel('展览', 'Eye Filmmuseum retrospective context', 'Three Farewells shown in artist programme')],
      },
      {
        title: 'Kala azar',
        cluster: 'feature film / pet cremation / multispecies cohabitation',
        period: '2020',
        summary: '首部长片跟随一对为宠物遗体提供火化服务的年轻伴侣。他们进入不同家庭接走死去的狗、猫、鱼，同时与自己的动物共同生活；影片将 tactile surfaces、尸体和日常照护置于传统戏剧情节之前。',
        actions: [
          '以 pet-cremation service 作为主角日常工作框架',
          '反复拍摄 house call、搬运尸体、与活体动物共居等低戏剧动作',
          '使用长镜头和触感表面取代传统 plot-driven editing',
          '让人类伴侣关系的裂缝与动物死亡并行发生而不互相解释',
          '在 post-industrial / semi-rural landscape 中持续强调不同 species 共享同一脆弱环境',
        ],
        sourceUrl: rafaKala,
        images: [],
        relations: [rel('展览', 'International Film Festival Rotterdam / New Directors-New Films', '2020 circulation')],
      },
      {
        title: 'Lacerate',
        cluster: 'domestic violence / decaying mansion / dogs + meat',
        period: '2020；exhibited Venice 2022',
        summary: '为关于针对女性的 domestic / gender-based violence 项目创作。影片不直接重演暴力，而是在衰败豪宅里让 restless dogs、散落肉块、家具与人体痕迹形成 memento mori 式场景。',
        actions: [
          '选择 decaying opulent house 作为 domestic violence 的间接空间证据',
          '在室内安排大量 dogs 自由移动、喘息和啃咬',
          '散置 hunks of meat、household objects、furniture 形成不稳定食物 / 身体联想',
          '以 carefully staged mise-en-scène 取代事件重演或受害者肖像',
          '让 animal appetite、domestic decay 与 gender violence 在同一视觉环境中互相摩擦',
        ],
        sourceUrl: rafaVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: [],
    exhibitions: ['Kala azar — international film circuit 2020', 'The Milk of Dreams — Venice 2022', 'Eye Filmmuseum — Feed me. Cheat me. Eat me. 2023–2024'],
    sources: [
      { label: 'Eye Filmmuseum · Janis Rafa', url: rafaEye },
      { label: 'MoMA · Kala azar', url: rafaKala },
      { label: 'La Biennale · Janis Rafa 2022', url: rafaVenice },
    ],
  },

  'venice-jessie-homer-french': {
    artistId: 'venice-jessie-homer-french',
    projectCoverage: '3 个 regional narrative painting / cemetery / wildfire-military landscape 节点已建立深档案 · 2013–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选主题 / 项目组档案，尚非作品全集。Homer French 自称“regional narrative painter”，她的小尺幅画并不追求当代绘画的抽象语言，而是用故意扁平、清晰、近民间绘画的空间把死亡、墓地、野火和军事设施嵌进美国西部日常风景。',
    projects: [
      {
        title: 'Mojave Stealth Bombers',
        cluster: 'military landscape / wind farm / desert regional painting',
        period: '2013',
        summary: '隐形轰炸机从 Mojave airfield / wind-farm 地景上方飞过。作品把“自然风景”直接与 military technology、能源基础设施并列，使沙漠不再是无人 wilderness。',
        actions: [
          '以 American West / Mojave 的具体地形和基础设施作为绘画地点',
          '保持 aircraft、runway、wind turbines 等可识别物体的叙事清晰度',
          '使用 flattened perspective 和 bright colour 弱化传统景深',
          '让 stealth bomber 不作为戏剧事件，而像 landscape 中普通常驻物一样出现',
          '把 regionalist painting 的地方性转成对军事 / 能源占地的长期观察',
        ],
        sourceUrl: homerVenice,
        images: [],
        relations: [],
      },
      {
        title: 'Bridgeport Cemetery / Bitterbrush and Sagebrush / Island Deer',
        cluster: 'cemetery / coffin landscape / winter stillness',
        period: '2020',
        summary: '2020 多幅 cemetery paintings 让棺木、墓碑与冬季 landscape 保持几乎同等视觉权重。死亡没有被表现成事件，而像 stone、snow、sagebrush 一样成为地方环境的稳定组成。',
        actions: [
          '反复绘制具体 cemetery / burial ground 而不是抽象 death allegory',
          '把 coffins、graves、stones 与 snow / brush 用同样清晰、扁平的轮廓处理',
          '使用明亮但克制的色块避免 gothic drama',
          '让 small-scale canvas 保持类似民间记忆图 / local record 的观看距离',
          '通过系列并置使“burial as landscape”成为持续 motif',
        ],
        sourceUrl: homerVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale presentation included 2020 works')],
      },
      {
        title: 'Burning / ON FIRE',
        cluster: 'wildfire / disaster image / West Coast ecology',
        period: '2020；exhibited 2022',
        summary: '野火系列把 West Coast fire 画成几乎过于清楚、安静的图景。明亮火焰和扁平地形让灾难看起来既真实又像一种无法逃离的重复地方图案。',
        actions: [
          '从 West Coast wildfire 这一长期地方现实而非单次新闻事件出发',
          '将 smoke、flame、vegetation 和 built environment 压缩为清晰色块',
          '拒绝英雄式消防或灾难高潮，把燃烧处理成持续 landscape condition',
          '与 cemetery、dead animal、military scenes 同时编辑，使死亡和破坏成为 regional narrative 的多种日常形式',
        ],
        sourceUrl: homerVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Jessie Homer French 2022', url: homerVenice }],
  },

  'venice-kapwani-kiwanga': {
    artistId: 'venice-kapwani-kiwanga',
    projectCoverage: '3 个 architecture-of-control / sand politics / transparent environment 节点已建立深档案 · 2018–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Kiwanga 常把看起来很“抽象”的颜色、帘幕、植物和沙拆回具体权力技术：shade cloth 如何改造农业环境、Wardian case 如何运输殖民植物、fracking sand 如何进入油气开采。',
    projects: [
      {
        title: 'Shady',
        cluster: 'agricultural shade cloth / visibility / colonial farming technology',
        period: '2018；later large-scale presentations',
        summary: 'Shady 使用农业专用 polyethylene shade cloth。材料本来通过过滤太阳改变植物生长条件；Kiwanga 将它放大成建筑尺度，使“控制多少光能进入”同时成为 visibility / invisibility 的政治结构。',
        actions: [
          '直接采用 agriculture-grade polyethylene shade cloth，而不是模拟其纹理',
          '按 atrium / architecture 尺度悬挂，让织物既是墙又保持半透明',
          '保留材料过滤 light / heat 的原功能，使观众身体真实处在被调节的环境中',
          '研究 colonial / industrial agriculture 如何通过技术重新塑造土地条件',
          '用 visibility / invisibility 连接物理遮光与社会权力',
        ],
        sourceUrl: kiwangaShady,
        images: [],
        relations: [rel('展览', 'Kapwani Kiwanga: Shady — Norval Foundation', 'large-scale atrium presentation 2022 context')],
      },
      {
        title: 'Plot / Dune',
        cluster: 'Wardian-case history / living plants / fracking sand',
        period: '2020–2021',
        summary: 'Plot 在 Haus der Kunst 以三块大型半透明织物改变中央大厅，并容纳 hybrid metal sculptures、inflatable volumes 与 living plants；Dune 则直接使用 southern Texas fracking 所需的 sand，把常见自然材料变成 extraction infrastructure。',
        actions: [
          '从邻近 Englischer Garten 提取色彩制作 large semitransparent fabric paintings',
          '让 curtain 同时充当 architecture divider 和 sculpture container',
          '研究 19th-century Wardian glass cases 如何服务欧洲殖民植物运输',
          '在 Plot 中加入 living plants 与 hybrid metal / inflatable forms',
          '在 Dune 中使用与 southern Texas fracking extraction 相关的具体 sand material',
        ],
        sourceUrl: kiwangaVenice,
        images: [],
        relations: [rel('展览', 'Plot — Haus der Kunst', '2020'), rel('展览', 'Dune', '2021 project')],
      },
      {
        title: 'Terrarium',
        cluster: 'desert sunset palette / glass + sand / climate + extraction',
        period: '2022',
        summary: 'Terrarium 将 Plot 的半透明 architecture 和 Dune 的沙合并：desert-sunset palette 的大型织物与装有 sand 的 glass sculptures 形成干旱环境，使沙同时指向 fracking commodity 和全球 aridification。',
        actions: [
          '以 desert sunset 颜色设计 large semitransparent hanging fields',
          '制作 glass containers / sculptures 并填入 sand',
          '让透明玻璃、半透明织物和散射光共同控制观众视线',
          '明确把 sand 作为 oil / gas extraction 的 political material',
          '同时让干燥色彩与颗粒环境指向 climate-driven aridity，而不是只做地质展示',
        ],
        sourceUrl: kiwangaVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: ['Prix Marcel Duchamp — 2020'],
    exhibitions: ['Plot — Haus der Kunst 2020', 'The Milk of Dreams — Venice 2022'],
    sources: [
      { label: 'Norval Foundation · Shady', url: kiwangaShady },
      { label: 'La Biennale · Kapwani Kiwanga 2022', url: kiwangaVenice },
    ],
  },

  'venice-katharina-fritsch': {
    artistId: 'venice-katharina-fritsch',
    projectCoverage: '3 个 scale / mould / monochrome-icon 关键节点已建立深档案 · 1987–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选关键作品档案，尚非作品全集。Fritsch 的“怪异”来自极端受控的生产流程：先手塑 / 找原型，再 mould、cast、rework、再次 cast，最后以吸光的 matte monochrome 覆盖技术痕迹，让雕塑像现实物件的完美幽灵。',
    projects: [
      {
        title: 'Elefant / Elephant',
        cluster: 'taxidermy mould / polyester cast / dark-green monochrome',
        period: '1987；Venice 2022 recontextualisation',
        summary: 'Elefant 直接从 stuffed elephant 取模，以 dark-green polyester 重制。尺寸和皮肤褶皱极度写实，但统一单色和哑光表面让一个真实动物变成近乎不可触碰的“图像”。',
        actions: [
          '以 taxidermied elephant 作为 mould reference，保留身体 folds 与 anatomical detail',
          '进行 mould → cast → reworking → recast 的多阶段复制',
          '选用 polyester 形成高度稳定、无生命痕迹的复制身体',
          '以 dark green matte paint 统一覆盖表面并吸收反光',
          '通过精确 naturalism + 不可能的 colour 让熟悉动物变成 uncanny apparition',
        ],
        sourceUrl: fritschVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Central Pavilion')],
      },
      {
        title: 'Rattenkönig / Rat King',
        cluster: 'giant multiple / circle ritual / scale distortion',
        period: '1993；Venice 1999 historical anchor',
        summary: '一圈巨型老鼠蹲伏并把尾巴结成中心 knot，把欧洲传说中的 rat king 放大成近建筑尺度仪式。它也是 Cecilia Alemani 解释为何授予 Fritsch 2022 终身成就金狮的重要早期 Venice 记忆。',
        actions: [
          '将普通 rat body 放大到超出人类身体的尺度',
          '使用重复 mould / cast 生成近乎 identical figures',
          '把多只老鼠排成闭合 circle，并让 tails 在中央缠结',
          '以统一 dark surface 压低个体差异，强化群体 icon',
          '把 folk superstition 的小型怪谈转成观众可进入 / 绕行的大型 ritual image',
        ],
        sourceUrl: fritschAward,
        images: [],
        relations: [rel('展览', '48th Venice Biennale', '1999 · Central Pavilion major presentation')],
      },
      {
        title: 'Hahn / Cock',
        cluster: 'public monument / giant blue rooster / Trafalgar Square',
        period: '2013',
        summary: 'Fourth Plinth commission 把 rooster 放大成高饱和蓝色公共 monument，在 Trafalgar Square 的军事 / 帝国纪念体系中插入一只既滑稽又高度自信的动物。',
        actions: [
          '从 familiar rooster form 开始进行大尺度 sculptural modelling',
          '通过 cast / finish 消除制作过程的手工偶然性',
          '选择 bright ultramarine-like blue 使自然动物彻底脱离 natural colour',
          '按 Trafalgar Square memorial architecture 调整 public scale',
          '让 gendered “cock”、animal icon 与历史男性 monument 产生公共空间冲突',
        ],
        sourceUrl: fritschAward,
        images: [],
        relations: [rel('展览', 'Fourth Plinth — Trafalgar Square', '2013')],
      },
    ],
    awards: ['Golden Lion for Lifetime Achievement — Venice Biennale 2022'],
    exhibitions: ['Venice Biennale 1999 — Rattenkönig', 'Fourth Plinth — Hahn 2013', 'The Milk of Dreams — Venice 2022'],
    sources: [
      { label: 'La Biennale · Katharina Fritsch 2022', url: fritschVenice },
      { label: 'La Biennale · Lifetime Achievement statement', url: fritschAward },
      { label: 'Katharina Fritsch official work archive', url: fritschWork },
    ],
  },

  'venice-marguerite-humeau': {
    artistId: 'venice-marguerite-humeau',
    projectCoverage: '3 个 animal-spirituality / respiratory system / climate ritual 节点已建立深档案 · 2019–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Humeau 的 speculative sculpture 建立在大量跨学科协作上：pulmonologist、animal cognition researcher、mythologist、conservation biologist 与 cetacean anatomist 都会改变最终材料和机械系统。',
    projects: [
      {
        title: 'Mist',
        cluster: 'animal spirituality / moon-programmed water / respiratory sculpture',
        period: '2019',
        summary: 'Mist 假设 mass extinction 可能让动物意识到自己的死亡。展厅里 flood-water imagination、breathing-organ sculptures、synthetic voice 与真实海水 / whale tears 共同构成濒死生态系统。',
        actions: [
          '与 animal cognition、biology、mythology 等研究者讨论非人死亡意识',
          '把 field trip 取得的 water 放入 acrylic container',
          '用 air pump 按实时 moon gravitational rhythm 搅动水体',
          '依据 marine respiratory organs 设计 The Dead、The Prayer、The Breathers 等形体',
          '使用 cetacean anatomist 获取的 whale “tears” 与 ocean water 进入喷吐 / 呼吸系统',
          '用 spatialised synthetic voice 制作 The Mythteller 的洪水叙事',
        ],
        sourceUrl: humeauMist,
        images: [],
        relations: [rel('展览', 'Mist — Clearing Brussels', '6 Sep–19 Oct 2019')],
      },
      {
        title: 'High Tide',
        cluster: 'Prix Marcel Duchamp / marine dancers / flooded floor',
        period: '2019',
        summary: 'High Tide 把 Mist 的问题扩展成一群 marine mammals 的宗教舞蹈。gallery floor 被处理成静水面，serpentine dancers 从其中升起，形态来自肺部 anatomy 与海洋动物 respiratory systems。',
        actions: [
          '研究 animals adopting religious-like behaviours 的 ethological accounts',
          '与 pulmonologist / respiratory research 共同推导 marine body forms',
          '将 gallery floor 设计成 placid plane of water',
          '把 lung / fin / wing-like anatomy 融合成多座 serpentine dancer sculptures',
          '继续以 synthetic Mythteller voice 讲述由 humanity 引发的 future deluge',
        ],
        sourceUrl: humeauHighTide,
        images: [],
        relations: [rel('奖项', 'Prix Marcel Duchamp', '2019 shortlisted presentation · Centre Pompidou')],
      },
      {
        title: 'Migrations (El Niño, Kuroshio, La Niña)',
        cluster: 'marine mammal ritual / algae + ocean plastic / climate currents',
        period: '2022',
        summary: '三座 giant marine mammals 在 cresting waves 中做月亮仪式舞蹈。每个身体以 ocean current / climate oscillation 命名，并带着发光 mermaid’s purse，直接回应 Venice flooding 与未来气候迫迁。',
        actions: [
          '将 Mist / High Tide 的 marine ritual research 扩大到 monumental scale',
          '使用 biological + synthetic resin、algae、bone、ocean plastic、glass、mineral dust 组合身体',
          '把三座雕塑分别命名为 El Niño、Kuroshio、La Niña',
          '为每个 body 配置 glowing travelling sac / mermaid’s purse',
          '在 Arsenale shipyard 以 raised platform 与 wave forms 形成 collective moon dance',
          '把 ocean currents 同时理解成 climatic、spiritual、political、economic invisible forces',
        ],
        sourceUrl: humeauVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '23 Apr–27 Nov 2022 · Arsenale')],
      },
    ],
    awards: ['Prix Marcel Duchamp — shortlisted 2019'],
    exhibitions: ['Mist — Clearing Brussels 2019', 'High Tide — Centre Pompidou 2019', 'The Milk of Dreams — Venice 2022'],
    sources: [
      { label: 'Marguerite Humeau · Mist', url: humeauMist },
      { label: 'Marguerite Humeau · High Tide', url: humeauHighTide },
      { label: 'Marguerite Humeau · Migrations', url: humeauVenice },
    ],
  },

  'venice-louise-bonnet': {
    artistId: 'venice-louise-bonnet',
    projectCoverage: '3 个 illustration-to-oil / swollen body / excretion landscape 节点已建立深档案 · 2008–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选方法节点，尚非作品全集。Bonnet 从 illustration / graphic design 进入 painting，真正关键的转换是 2013 年转向 oil：油画让她通过光、体积和缓慢堆叠制造那些过度膨胀、被自己身体拖累的 figures。',
    projects: [
      {
        title: 'Early acrylic figure paintings',
        cluster: 'illustration-to-painting / celebrity + film figures / acrylic',
        period: '2008–2012',
        summary: 'Bonnet 从 graphic design / illustration 转向绘画时，先以 acrylic 画 Yoko Ono 等人物或电影角色。这一阶段仍保留 graphic silhouette、clean contour 与平面色块。',
        actions: [
          '从既有 celebrity / film imagery 选择人物作为绘画起点',
          '使用 acrylic 保持快速干燥和 graphic flatness',
          '夸张身体轮廓但仍保留 illustration-like clarity',
          '逐步把人物从具体身份移向更普遍的 bodily predicament',
          '通过 artist peers 的鼓励最终测试更慢、更可塑形的 oil paint',
        ],
        sourceUrl: bonnetVenice,
        images: [],
        relations: [],
      },
      {
        title: 'Oil-body paintings',
        cluster: 'volume / strained pose / bodily betrayal',
        period: '2013–',
        summary: '转向 oil 之后，人物逐渐变成 jewel-toned、过度膨胀的 imagined figures：头、手、腿和乳房常大到几乎挤出画布，身体不是自我表达工具，而像 constantly failing / cramping / leaking 的负担。',
        actions: [
          '以 oil paint 反复叠加光线和体积，而不是平面 acrylic silhouette',
          '故意放大 hands、feet、breasts、limbs 形成无法轻松行动的重心',
          '把 crouch、crawl、clamber 等 strained poses 作为构图骨架',
          '让 canvas edge 挤压身体，使画框像物理容器而非中性边界',
          '持续围绕 urine、saliva、blood、milk 等身体失控物质建立题材',
        ],
        sourceUrl: bonnetVenice,
        images: [],
        relations: [],
      },
      {
        title: 'Pisser Triptych',
        cluster: 'altarpiece format / urination / consumption–waste cycle',
        period: '2021–2022',
        summary: 'Venice 新作采用大型 triptych / altarpiece 格式，却让中心身体进行排尿。消费、代谢、排泄和环境污染被压进宗教画般庄重的结构，液体既可能污染，也可能作为肥料重新进入 landscape。',
        actions: [
          '采用 monumental three-panel triptych 建立 devotional / altarpiece expectation',
          '在中心 figure 中明确表现 urination 而不是隐喻 bodily fluid',
          '使用 oil painting 的体积与高光让 swollen body 占满多块 canvas',
          '把 intake → bodily transformation → excretion 组织成 material cycle',
          '让 urine 同时指向 pollution 与 fertilisation，拒绝单纯 disgust reading',
        ],
        sourceUrl: bonnetVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Louise Bonnet 2022', url: bonnetVenice }],
  },
};
