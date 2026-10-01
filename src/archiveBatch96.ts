import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const tofanoVenice = 'https://www.labiennale.org/en/art/2022/leaf-gourd-shell-net-bag-sling-sack-bottle-pot-box-container/tecla-tofano';
const barnesVenice = 'https://www.labiennale.org/en/art/2022/corps-orbite/djuna-barnes';
const bentivoglioVenice = 'https://www.labiennale.org/en/art/2022/corps-orbite/mirella-bentivoglio-collaboration-annalisa-alloatti';
const bingaVenice = 'https://www.labiennale.org/en/art/2022/corps-orbite/tomaso-binga';
const evansVenice = 'https://www.labiennale.org/en/art/2022/corps-orbite/minnie-evans';
const soltVenice = 'https://www.labiennale.org/en/art/2022/corps-orbite/mary-ellen-solt';

export const archiveBatch96: Record<string, ArtistArchive> = {
  'venice-tecla-tofano': {
    artistId: 'venice-tecla-tofano',
    projectCoverage: '2 个 hand-moulded feminist ceramic / nonbinary figure 节点已建立深档案 · 1964–1978',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Tofano 故意反着当时委内瑞拉主流走：抽象盛行时做 figuration，绘画走红时做陶塑，Pop Art 兴起时坚持 handmade。粗糙、非对称、身体化的 ceramic 是她对 machismo 的直接反击。',
    projects: [
      {
        title: 'On the Way to Liberation / Of the Female Gender',
        cluster: 'pregnant ceramic body / snake / inverted female symbol',
        period: '1975',
        summary: '孕妇双手抱头，蛇从腹部钻出并缠绕倒置的女性符号/十字。作品同时处理 maternity sacrifice 与社会对母职顺从性的要求。',
        actions: [
          '以 hand-moulding 代替 potter’s wheel 构成不规则人体',
          '保留 rough surface 和 asymmetry，不追求光滑 finish',
          '把 pregnant belly、snake、female symbol 直接组合成 bodily-political icon',
          '将 domestic / reproductive role 转成大型 sculptural confrontation',
        ],
        sourceUrl: tofanoVenice,
        images: [],
        relations: [rel('展览', 'A Leaf a Gourd a Shell… — Venice Biennale 2022', 'Arsenale historical capsule')],
      },
      {
        title: 'Ella, él… ellos',
        cluster: 'large ceramic figures / woman-man-genderless triad',
        period: '1978',
        summary: '大型 ceramic figures 分别呈现 woman、man 与 genderless person，把 binary gender 之外的身体直接带入国家级艺术机构。',
        actions: [
          '制作 life-scale / large-scale ceramic bodies',
          '通过 three-figure grouping 建立 woman / man / genderless relation',
          '维持 hand-built、rough、non-Pop finish',
          '以 exhibition structure 本身提出 nonbinary social alternative',
        ],
        sourceUrl: tofanoVenice,
        images: [],
        relations: [rel('展览', 'Galería de Arte Nacional, Caracas', 'Ella, él… ellos · 1978')],
      },
    ],
    awards: [], exhibitions: ['Ella, él… ellos — Caracas 1978', 'A Leaf a Gourd a Shell… — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Tecla Tofano 2022', url: tofanoVenice }],
  },

  'venice-djuna-barnes': {
    artistId: 'venice-djuna-barnes',
    projectCoverage: '1 个 prose-poetry-drawing hybrid book 核心节点已建立档案 · 1928',
    imageCoverage: '0 / 1 项目暂不使用不稳定外链图像',
    note: 'Barnes 是 writer / journalist，不按职业艺术家处理。她进入 Corps Orbite 的原因是文字、插图、音乐符号与 queer 社群叙事被做成同一个 expanded-text object。',
    projects: [
      {
        title: 'Ladies Almanack',
        cluster: 'prose + poetry + drawing + music / lesbian satire',
        period: '1928',
        summary: '自费出版的 experimental book 混合 prose、poetry、drawings 与 musical bars，围绕 Dame Evangeline Musset 和一群公开享受同性欲望的女性展开。',
        actions: [
          '把 prose、verse、illustration 与 music notation 放进同一 book object',
          '按月份 / almanac structure 组织 satirical vignettes',
          '以 astrological symbols 与 dense word-image network 破坏线性阅读',
          '通过 caricature / adventurous female figures 建立 queer collective mythology',
        ],
        sourceUrl: barnesVenice,
        images: [],
        relations: [rel('展览', 'Corps Orbite — Venice Biennale 2022', 'Central Pavilion historical capsule')],
      },
    ],
    awards: [], exhibitions: ['Corps Orbite — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Djuna Barnes 2022', url: barnesVenice }],
  },

  'venice-mirella-bentivoglio': {
    artistId: 'venice-mirella-bentivoglio',
    projectCoverage: '2 个 visual-poetry / feminist-language institution 节点已建立深档案 · 1968–1978',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Bentivoglio 不只做 visual poetry，也通过策展把女性语言实验变成制度事实；她的重要性在于“作品”和“建立女性语言网络”两条线同时进行。',
    projects: [
      {
        title: 'Storia del monumento',
        cluster: 'silkscreen / word mutation / anti-monument language',
        period: '1968',
        summary: '与 Annalisa Alloatti 合作的六张 silkscreen portfolio 不断拆解 monumento 一词，从中抽出 nume、me non tu、muto、temo 等 fragment，让 monumental authority 在语言内部自行崩解。',
        actions: [
          '选择单一 Italian word 作为 visual-material source',
          '通过 subtraction / segmentation 提取内部词素',
          '以 six-sheet silkscreen sequence 呈现 mutation',
          '让 semantic shift 与 graphic rearrangement 同步发生',
        ],
        sourceUrl: bentivoglioVenice,
        images: [],
        relations: [rel('展览', 'Corps Orbite — Venice Biennale 2022', 'Central Pavilion')],
      },
      {
        title: 'Materializzazione del linguaggio',
        cluster: 'feminist curating / language art / institutional network',
        period: '1978',
        summary: 'Bentivoglio 在第 38 届威尼斯双年展策划 Materializzazione del linguaggio，集中呈现八十位以语言为媒介的女性艺术家。',
        actions: [
          '跨国搜集 women artists working with verbal-visual experimentation',
          '把 poetry、performance、textile、typewriting、visual poem 放进同一 exhibition frame',
          '通过 curatorial selection 建立女性语言实践的 genealogy',
          '把原本被边缘化的 language work 推入 Biennale institutional history',
        ],
        sourceUrl: bentivoglioVenice,
        images: [],
        relations: [rel('策展', 'Materializzazione del linguaggio — Venice Biennale', '1978 · 80 women artists')],
      },
    ],
    awards: [], exhibitions: ['Materializzazione del linguaggio — Venice 1978', 'Corps Orbite — Venice 2022'],
    sources: [{ label: 'La Biennale · Mirella Bentivoglio 2022', url: bentivoglioVenice }],
  },

  'venice-tomaso-binga': {
    artistId: 'venice-tomaso-binga',
    projectCoverage: '3 个 living-alphabet / desemantic writing / typewriter-code 节点已建立深档案 · 1972–1977',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Binga 通过 male pseudonym、body alphabet 和 typewriter code 把 patriarchal language 从内部拆开；写字在她这里不是描述，而是身体和图像生成系统。',
    projects: [
      {
        title: 'Scrittura desemantizzata',
        cluster: 'obsessive inscription / loss of meaning / surface writing',
        period: '1972–1974',
        summary: '在 panels、notebooks、clothing、wallpaper 上反复写入失去正常语义的 signs，让 language 从 communication 退回到 rhythm / pattern。',
        actions: [
          '在不同 surfaces 持续重复 handwritten signs',
          '主动取消 lexical readability',
          '让 writing density 取代 sentence structure',
          '把 text 变成 bodily labour 与 visual texture',
        ],
        sourceUrl: bingaVenice,
        images: [], relations: [],
      },
      {
        title: 'Scrittura vivente',
        cluster: 'body alphabet / performance photography / carnal primer',
        period: '1976',
        summary: 'Binga 用自己的身体摆出 alphabet letters，把 independent woman 的叙事直接嵌进身体字母表。',
        actions: [
          '以 body pose 构成 individual alphabet letters',
          '通过 photographic sequence 保存 transient gesture',
          '让 female body 从被书写对象变成 writing instrument',
          '把 alphabet primer 与 feminist self-performance 合并',
        ],
        sourceUrl: bingaVenice,
        images: [],
        relations: [rel('展览', 'Corps Orbite — Venice Biennale 2022', 'Central Pavilion')],
      },
      {
        title: 'Dattilocodici',
        cluster: 'typewriter / overprinted grapheme / concrete poetry',
        period: 'late 1970s',
        summary: '把 i 与 9、7、j 等 graphemes 重叠打字，形成失去原身份的 coloured ideograms，再按 regular intervals 排成 squares。',
        actions: [
          '用 typewriter 重复 overprint 两个 graphemes',
          '通过 two-colour registration 强化 overlapping code',
          '将 ideogram 按规则间距排成 square field',
          '取消 original letter / number identity，让 reader 自行投射意义',
        ],
        sourceUrl: bingaVenice,
        images: [], relations: [],
      },
    ],
    awards: [], exhibitions: ['Materializzazione del linguaggio — Venice 1978', 'Corps Orbite — Venice 2022'],
    sources: [{ label: 'La Biennale · Tomaso Binga 2022', url: bingaVenice }],
  },

  'venice-minnie-evans': {
    artistId: 'venice-minnie-evans',
    projectCoverage: '2 个 visionary-botanical / symmetrical-face drawing 阶段已建立深档案 · 1940s–later work',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Evans 没有学院训练，她把 dreams、visions、Baptist cosmology 与 Airlie Gardens 的植物观察合成高度对称、密集的 personal image system。',
    projects: [
      {
        title: 'Untitled botanical drawings',
        cluster: 'garden observation / flower bands / visionary image',
        period: '1940s',
        summary: '早期 drawing 将 leaves、flowers、bee 等 botanical forms 排成细密装饰带，同时保持 vision-like symmetry。',
        actions: [
          '在 Airlie Gardens gatekeeper 工作期间观察并绘制植物',
          '把 leaves / flowers / insects 组合成 repeated ornamental bands',
          '将 waking visions 与实际 garden observation 混合',
          '使用 colour 与 symmetry 建立 devotional intensity',
        ],
        sourceUrl: evansVenice,
        images: [], relations: [],
      },
      {
        title: 'Dense symmetrical visionary compositions',
        cluster: 'face / butterfly / rainbow / spiritual symmetry',
        period: 'later decades',
        summary: '后期作品颜色更浓、结构更密，face 成为 symmetry anchor，四周被 vegetation、butterflies、rainbows 与 chimerical creatures 包围。',
        actions: [
          '以 central face 作为 bilateral symmetry anchor',
          '围绕核心层层叠加 curvilinear botanical motifs',
          '提高 pigment density 与 colour saturation',
          '把 religious symbol、dream creature 与 garden form 放进同一 visual cosmology',
        ],
        sourceUrl: evansVenice,
        images: [],
        relations: [rel('展览', 'Corps Orbite — Venice Biennale 2022', 'Central Pavilion')],
      },
    ],
    awards: [], exhibitions: ['Corps Orbite — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Minnie Evans 2022', url: evansVenice }],
  },

  'venice-mary-ellen-solt': {
    artistId: 'venice-mary-ellen-solt',
    projectCoverage: '1 个 concrete-poetry herbarium 核心节点已建立深档案 · 1965–1966',
    imageCoverage: '0 / 1 项目暂不使用不稳定外链图像',
    note: '当前先把 Flowers in Concrete 做深。Solt 不是把 poem 配成花，而是直接用 grapheme 构造 botanical form，让 language 同时承担词义、形状和生长结构。',
    projects: [
      {
        title: 'Flowers in Concrete',
        cluster: 'concrete poetry / verbal herbarium / grapheme-botany',
        period: '1965–1966',
        summary: '以 botanical guide 的 plate 形式组织 concrete poems，通过 juxtapose、superimpose、reverse graphemes 构造 lobelia、zinnia、lilac、forsythia 等花朵。',
        actions: [
          '选择 flower name / related words 作为 letter-material source',
          '通过 repetition、reversal、superimposition 让 grapheme 形成 stem / petal / branch',
          '采用 herbarium / botanical plate 的页面结构',
          '让 lexical reading 与 visual reading 同时成立但不互相锁死',
          '把 reader 变成解释关系的 co-author',
        ],
        sourceUrl: soltVenice,
        images: [],
        relations: [rel('展览', 'Corps Orbite — Venice Biennale 2022', 'Central Pavilion'), rel('展览', 'Materializzazione del linguaggio — Venice Biennale', '1978')],
      },
    ],
    awards: [], exhibitions: ['Materializzazione del linguaggio — Venice 1978', 'Corps Orbite — Venice 2022'],
    sources: [{ label: 'La Biennale · Mary Ellen Solt 2022', url: soltVenice }],
  },
};
