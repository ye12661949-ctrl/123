import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const jurgenssenVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/birgit-ju%CC%88rgenssen';
const yilmazVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/m%C3%BCge-yilmaz';
const staffVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/p-staff';
const castagnettiVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/ambra-castagnetti';
const schwartzVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/lillian-schwartz';
const molnarVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/vera-moln%C3%A1r';
const molnarGlass = 'https://www.labiennale.org/en/art/2022/collateral-events/vera-moln%C3%A1r-ic%C3%B4ne-2020';

export const archiveBatch100: Record<string, ArtistArchive> = {
  'venice-birgit-jurgenssen': {
    artistId: 'venice-birgit-jurgenssen',
    projectCoverage: '2 个 animal-body / wearable-bone feminist-surreal 节点已建立深档案 · 1974–1977',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Jürgenssen 用 drawing、photography、wearable object 把女性身体接到 animal / crustacean / bone / fetish object 上；这些混合不是奇幻装饰，而是对固定 femininity 的拆解。',
    projects: [
      {
        title: 'Fehlende Glieder / animal-body drawings',
        cluster: 'surreal drawing / crustacean-body / erotic metamorphosis',
        period: '1974–1977',
        summary: 'well-dressed figure 可以突然长出 crustacean body，裸体人物也可拥有 black-cat head / back。Jürgenssen 让 bourgeois femininity 与 animal anatomy 无缝连接，使 identity 始终处于可变状态。',
        actions: [
          '以 drawing 建立 recognisable female / clothed figure 作为起点',
          '将 limbs / head / torso 局部替换成 crustacean、cat 等 animal forms',
          '保留 clothing / pose 的社会识别，同时破坏 human anatomy',
          '利用 Freudian / Surreal association 连接 erotic drive 与 bodily mutation',
        ],
        sourceUrl: jurgenssenVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale 2022', 'Central Pavilion')],
      },
      {
        title: 'Froschschultergürtel (Ergänzung zum menschlichen Bewegungsapparat)',
        cluster: 'wearable bone shield / bikini body / prosthetic ambiguity',
        period: '1974',
        summary: '一块类似骨骼/护甲的结构被绑在 wearing swim cap and bikini 的女性身体外部。它既像保护装置，也像外置骨骼，使内在心理与外部身体边界变得模糊。',
        actions: [
          '制作 bone-like shoulder-girdle / shield object',
          '把结构直接 strap 到真人身体外侧',
          '让 ordinary bikini / swimming-cap body 与 uncanny prosthesis 并置',
          '通过 photography 固定 wearable sculpture 与 body 的关系',
          '保持 object 功能不确定：既可能支撑、限制，也可能保护',
        ],
        sourceUrl: jurgenssenVenice,
        images: [], relations: [],
      },
    ],
    awards: [], exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Birgit Jürgenssen 2022', url: jurgenssenVenice }],
  },

  'venice-muge-yilmaz': {
    artistId: 'venice-muge-yilmaz',
    projectCoverage: '1 个 feminist-sci-fi studiolo / carved-totem library 核心节点已建立深档案 · 2022',
    imageCoverage: '0 / 1 项目暂不使用不稳定外链图像',
    note: '当前先把 The Adventures of Umay Ixa Kayakızı 做深。Yilmaz 把 feminist science-fiction archive、Anatolian glyph、amulet、animal-head totem 和保护 ritual 合成一个退休女宇航员的 fictional life-work。',
    projects: [
      {
        title: 'The Adventures of Umay Ixa Kayakızı',
        cluster: 'fictional astronaut / feminist sci-fi library / hand-carved totems',
        period: '2022',
        summary: 'installation 是退休 astronaut Umay 的秘密 studiolo：她毕生阅读/书写女性 science fiction。手工雕刻、蓝绿上色的 totemic sculptures 同时是 shelves、动物/神灵 figure，也是她所收藏书籍与 artefacts 的“后代”。',
        actions: [
          '建立 fictional retired-astronaut biography 作为整个 installation 的 narrative container',
          '搜集 women-authored feminist science fiction，包括以 male pseudonym 出版的作品',
          '从 Anatolian glyph、hamsa、traditional tattoo 等符号系统提取形态',
          '手工 carve animal-headed / hand-glyph totemic sculptures',
          '使用 vivid blue / green paint 统一 sculptural family',
          '把 sculptures 直接设计成 library shelves / display supports',
          '以 island-ship / secret studiolo 结构把 archive、ritual 与 speculative future 合并',
        ],
        sourceUrl: yilmazVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale 2022', 'Giardini')],
      },
    ],
    awards: [], exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Müge Yilmaz 2022', url: yilmazVenice }],
  },

  'venice-p-staff': {
    artistId: 'venice-p-staff',
    projectCoverage: '1 个 industrial-farming / radioactive-yellow / queer near-death video 节点已建立深档案 · 2019',
    imageCoverage: '0 / 1 项目暂不使用不稳定外链图像',
    note: '当前先把 On Venus 做深。Staff 将 queer / trans / disabled body 被制度规训的问题扩展到 industrial farming、commodity body 和 near-death ecology；影像、黄色光场、镜面地板和诗共同构成一个不稳定环境。',
    projects: [
      {
        title: 'On Venus',
        cluster: 'video installation / industrial farming / queer near-death ecology',
        period: '2019',
        summary: 'warped footage 记录 urine、semen、meat、skins、fur 等工业化生产/养殖 commodity，展场则被 radioactive-yellow light 与 mirrored floor 改造成不适的身体环境。后半段诗歌把 Venus 描写成 non-life / near-death 的 volatile queer state。',
        actions: [
          '收集 / 拍摄 industrial farming 中 body-derived commodities 的生产影像',
          '对 footage 进行 warp / distortion，破坏 documentary neutrality',
          '将 video 安装在 mirrored-floor environment 上方',
          '用 radioactive yellow illumination 覆盖观看空间',
          '在 second half 加入描述 Venus near-death ecology 的诗性 voice/text',
          '把 necropolitics、transpoetics 与 ecological violence 放进同一 sensory system',
        ],
        sourceUrl: staffVenice,
        images: [],
        relations: [rel('展览', 'Commissioned by Serpentine Galleries', '2019'), rel('展览', 'The Milk of Dreams — Venice Biennale 2022', 'Central Pavilion')],
      },
    ],
    awards: [], exhibitions: ['Serpentine Galleries commission — 2019', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · P. Staff 2022', url: staffVenice }],
  },

  'venice-ambra-castagnetti': {
    artistId: 'venice-ambra-castagnetti',
    projectCoverage: '1 个 operating-table / wearable-bondage / interspecies ritual 核心节点已建立深档案 · 2022',
    imageCoverage: '0 / 1 项目暂不使用不稳定外链图像',
    note: 'Biennale College Arte 2021/22 项目，2022 以 out-of-competition 身份呈现。这里明确保留其制度位置，不把 College grant project 混写成普通受邀主展席位。',
    projects: [
      {
        title: 'Dependency',
        cluster: 'brushed-aluminium table / ceramic serpent / wearable ritual sculpture',
        period: '2022',
        summary: '带轮 base 顶部包覆 brushed aluminium，像 operating table；上面堆放 ceramic serpents 与 Medusa-like head，类似被遗弃的 scientific specimens。墙上 wearable sculptures 会在 performance 中被穿戴，动作介于 BDSM bondage 与 interspecies ritual。',
        actions: [
          '制作 wheeled bases 并以 brushed aluminium 覆盖表面',
          '手工制作 ceramic serpents 与 Medusa-like head',
          '把 ceramic forms 像 scientific specimens 一样堆放于 table',
          '另制可被 performers 穿戴的 wearable sculptures',
          '通过 live activation 将 bondage gesture 与 ritual action 重叠',
          '以 mindful body / Paleolithic fluidity 概念组织 human-animal-plant transformation',
        ],
        sourceUrl: castagnettiVenice,
        images: [],
        relations: [rel('奖项', 'Biennale College Arte grant', '2021/22 · €25,000 production grant'), rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · out of competition')],
      },
    ],
    awards: ['Biennale College Arte 2021/22 recipient'], exhibitions: ['The Milk of Dreams — Venice Biennale 2022 · out of competition'],
    sources: [{ label: 'La Biennale · Ambra Castagnetti 2022', url: castagnettiVenice }],
  },

  'venice-lillian-schwartz': {
    artistId: 'venice-lillian-schwartz',
    projectCoverage: '2 个 responsive-light dome / Bell Labs algorithm-film 节点已建立深档案 · 1968–1972',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Schwartz 从 calligraphy / painting 进入 E.A.T. 与 Bell Labs，真正把 engineer、programmer、algorithm、hand-tinted photo 和 moving image 接到同一生产流程。',
    projects: [
      {
        title: 'Proxima Centauri',
        cluster: 'translucent plastic dome / responsive red light sculpture / E.A.T.',
        period: '1968',
        summary: '与 Danish engineer Per Biorn 合作的 translucent plastic dome 内产生不断变化的 red light sculptures；viewer position 改变时，动态 visual configuration 也随之改变。',
        actions: [
          '与 engineer Per Biorn 协作开发 physical / light system',
          '制作 translucent plastic dome 作为光学 enclosure',
          '在内部生成 shifting red-light forms',
          '让 viewing position 改变 visible configuration',
          '把 installation 作为 E.A.T. art-technology collaboration 的实际工程产物',
        ],
        sourceUrl: schwartzVenice,
        images: [],
        relations: [rel('展览', 'The Machine as Seen at the End of the Mechanical Age — MoMA', '1968')],
      },
      {
        title: 'Googolplex / Enigma / Mis-Takes',
        cluster: 'Bell Labs / algorithm drawing / hand-tinted photo / computer animation',
        period: '1972',
        summary: '在 Bell Labs，Schwartz 将 algorithm-generated geometric drawings 与 hand-tinted photographs 叠加，再制成持续变形的短片，并以强烈 music 推动 psychedelic disorientation。',
        actions: [
          '与 Bell Labs engineers / programmers 协作生成 algorithmic geometry',
          '保留 hand-tinted photographic material 作为 analogue layer',
          '将 computer-generated forms 与 photographic imagery superimpose',
          '通过 frame sequence 制作 continuously mutating moving image',
          '加入 driving music / sound 强化 sensory disorientation',
        ],
        sourceUrl: schwartzVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale 2022', 'Central Pavilion')],
      },
    ],
    awards: [], exhibitions: ['MoMA — The Machine as Seen at the End of the Mechanical Age 1968', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Lillian Schwartz 2022', url: schwartzVenice }],
  },

  'venice-vera-molnar': {
    artistId: 'venice-vera-molnar',
    projectCoverage: '3 个 imaginary-algorithm / computer drawing / glass translation 节点已建立深档案 · 1950s–2021',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Molnár 的关键不是“用了电脑”，而是先在没有电脑时就把艺术变成规则系统；1968 后才让真实 machine 执行部分参数，并持续在 human error / algorithm order 之间寻找偏差。',
    projects: [
      {
        title: 'Machines imaginaires',
        cluster: 'pre-computer algorithm / codified geometry / manual execution',
        period: '1950s–1968',
        summary: '在真正接触计算机之前，Molnár 已经设定预先规则并像 imaginary machine 一样严格执行，以 repetition / permutation 生成 geometric compositions。',
        actions: [
          '选择有限 geometric signs 作为 visual vocabulary',
          '预先写下 combination / permutation rules',
          '手工逐步执行规则而不临场自由构图',
          '在系统内部加入 controlled deviation / “1% disorder”式偏差',
          '把 manual process 当作模拟 algorithm 的 imaginary machine',
        ],
        sourceUrl: molnarVenice,
        images: [], relations: [],
      },
      {
        title: 'Computer Drawings',
        cluster: 'algorithm parameters / plotter drawing / human-machine dialogue',
        period: 'c.1970–1975',
        summary: '真实 computer / plotter 接管部分执行：segments、dots、shapes 只响应输入参数，每张结果都不同。Molnár 通过改变规则与参数测试 machine precision 与 human decision 之间的平衡。',
        actions: [
          '把 geometric system 转写成 computer-readable parameters',
          '使用 plotter / computer 输出 line-based drawings',
          '改变 segment、dot、shape 的数量 /位置 /偏差范围',
          '保留 serial outputs 之间的差异，而不挑唯一“完美”结果',
          '把 authorial role 转为 rule design + machine dialogue',
        ],
        sourceUrl: molnarVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale 2022', 'Central Pavilion')],
      },
      {
        title: 'Icône 2020',
        cluster: 'computational drawing → Murano glass / 24K gold',
        period: '2021',
        summary: 'career 中首件 glass sculpture：把 computational-art logic 转译成 Murano glass 与 24K gold leaf；展览同时呈现 preparatory sketches、plotter drawings 和制作 documentation。',
        actions: [
          '从 preparatory sketches / plotter drawings 提取 geometric structure',
          '与 Murano glass production process 协作转译二维 rule system',
          '使用 glass 与 24K gold leaf 制作 60×60 cm object',
          '保留从 algorithmic draft 到 material sculpture 的 production archive',
        ],
        sourceUrl: molnarGlass,
        images: [],
        relations: [rel('展览', 'Vera Molnár: Icône 2020 — Venice collateral event', '2022 · Atelier Muranese, Murano; distinct from International Exhibition presentation')],
      },
    ],
    awards: [], exhibitions: ['The Milk of Dreams — Venice Biennale 2022', 'Icône 2020 — Venice collateral event 2022'],
    sources: [{ label: 'La Biennale · Vera Molnár 2022', url: molnarVenice }, { label: 'La Biennale · Icône 2020 collateral event', url: molnarGlass }],
  },
};
