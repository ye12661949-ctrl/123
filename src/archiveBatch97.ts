import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const tolraVenice = 'https://www.labiennale.org/en/art/2022/corps-orbite/josefa-tolr%C3%A0';
const garnierVenice = 'https://www.labiennale.org/en/art/2022/corps-orbite/ilse-garnier';
const houghtonVenice = 'https://www.labiennale.org/en/art/2022/corps-orbite/georgiana-houghton';
const loyVenice = 'https://www.labiennale.org/en/art/2022/corps-orbite/mina-loy';
const mansourVenice = 'https://www.labiennale.org/en/art/2022/corps-orbite/joyce-mansour';
const morganVenice = 'https://www.labiennale.org/en/art/2022/corps-orbite/sister-gertrude-morgan';

export const archiveBatch97: Record<string, ArtistArchive> = {
  'venice-josefa-tolra': {
    artistId: 'venice-josefa-tolra',
    projectCoverage: '2 个 trance-writing / fluidic drawing 节点已建立深档案 · 1944–1954',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Tolrà 在丧子后进入长期 trance sessions，drawing 与 writing 同步产生。这里重点记录自动书写如何在页面上与人物、energy flow、landscape 融成连续结构。',
    projects: [
      {
        title: 'Llibreta',
        cluster: 'trance notebook / writing-drawing fusion / spiritual dictation',
        period: '1944',
        summary: 'Tolrà 在 trance 状态中持续书写和绘图；文字不是说明图像，而是与人物、符号、能量线共同生成页面结构。',
        actions: [
          '在 prolonged trance state 中连续书写与绘图',
          '不先分隔 text / image 区域，让两者共享同一 page field',
          '记录被她理解为来自 spirits 的 poetry、aphorism 与 knowledge stream',
          '用 dense line 将 figure、landscape 与 verbal fragment 连接',
        ],
        sourceUrl: tolraVenice,
        images: [],
        relations: [rel('展览', 'Corps Orbite — Venice Biennale 2022', 'Central Pavilion historical capsule')],
      },
      {
        title: 'Dibujo escritura fluídica',
        cluster: 'fluidic writing / occult-Christian syncretism / automatic image',
        period: '1954',
        summary: 'verbal and visual components 在同一 page 上彼此流入，Christian iconography 与 occult symbols 同时出现，形成近似 continuous energetic notation 的图像。',
        actions: [
          '以 unbroken flowing line 连接 text 与 image',
          '将 Christian symbols 与 occult / theosophic signs 叠置',
          '允许 handwriting 在局部转成 texture / contour',
          '把 automatic process 本身保留为可见的 compositional logic',
        ],
        sourceUrl: tolraVenice,
        images: [], relations: [],
      },
    ],
    awards: [], exhibitions: ['Corps Orbite — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Josefa Tolrà 2022', url: tolraVenice }],
  },

  'venice-ilse-garnier': {
    artistId: 'venice-ilse-garnier',
    projectCoverage: '1 个 concrete-poetry female-body atlas 核心节点已建立深档案 · 1979',
    imageCoverage: '0 / 1 项目暂不使用不稳定外链图像',
    note: '当前先把 Blason du corps féminin 做深。Garnier 把 letter o 当作 female-body unit，通过 multiply、expand、erase 等操作描述不同女性身体，文字因此成为 variable body diagram。',
    projects: [
      {
        title: 'Blason du corps féminin',
        cluster: '46-sheet concrete poem / body as grapheme / feminist spatial poetry',
        period: '1979',
        summary: '四十六页 concrete-poetry sequence，每页针对不同女性，通过 adjective、line、geometric form 和 letter o 的变化构造身体。',
        actions: [
          '以 corps 中的 letter o 作为 recurring body sign',
          '根据不同 subject 让 o multiply / expand / disappear',
          '用 line / spacing / geometry 替代传统 sentence flow',
          '把 forty-six sheets 组织成可逐页比较的 female-body atlas',
          '通过 sign freedom 对抗 heraldic / patriarchal fixed image',
        ],
        sourceUrl: garnierVenice,
        images: [],
        relations: [rel('展览', 'Materializzazione del linguaggio — Venice Biennale', '1978 context'), rel('展览', 'Corps Orbite — Venice Biennale 2022', 'Central Pavilion')],
      },
    ],
    awards: [], exhibitions: ['Materializzazione del linguaggio — Venice 1978', 'Corps Orbite — Venice 2022'],
    sources: [{ label: 'La Biennale · Ilse Garnier 2022', url: garnierVenice }],
  },

  'venice-georgiana-houghton': {
    artistId: 'venice-georgiana-houghton',
    projectCoverage: '2 个 spirit-drawing / automatic-watercolour 节点已建立深档案 · 1866–1867',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Houghton 在 1860s–70s 将 Spiritualist séance 转成 automatic pencil / watercolour practice；重要的不是“像抽象画”，而是她把作画理解为与 unseen guides 协同生产。',
    projects: [
      {
        title: 'The Flower of William Stringer',
        cluster: 'automatic drawing / spiralling line / spirit communication',
        period: '1866',
        summary: '红、sepia、蓝色 spiralling / straight lines 纠缠成 dense abstract knot，Houghton 将其视为 spiritual communication 的 visual record。',
        actions: [
          '在 séance / spirit-contact framework 下开始 drawing',
          '让 pencil / watercolour line 连续推进而不服从写实轮廓',
          '叠加 spiral 与 straight trajectories',
          '使用 colour layer 区分不同 energetic passages',
          '把 finished work 视为 received instruction 的 documentation',
        ],
        sourceUrl: houghtonVenice,
        images: [],
        relations: [rel('展览', 'Corps Orbite — Venice Biennale 2022', 'Central Pavilion historical capsule')],
      },
      {
        title: 'The Spiritual Crown of Annie Mary Howitt Watts',
        cluster: 'layered curls / spiritual portrait / nonfigurative identity',
        period: '1867',
        summary: 'white、cranberry、orange curls 层层叠加，portrait identity 不通过 face 呈现，而通过 colour / rhythm / energetic pattern 建立。',
        actions: [
          '以 repeated curl 取代 face / body likeness',
          '通过 colour bands 与 overlap 建立“spiritual portrait”',
          '让 rhythmic density 暗示不可见关系，而不转回象征人物画',
        ],
        sourceUrl: houghtonVenice,
        images: [], relations: [],
      },
    ],
    awards: [], exhibitions: ['Corps Orbite — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Georgiana Houghton 2022', url: houghtonVenice }],
  },

  'venice-mina-loy': {
    artistId: 'venice-mina-loy',
    projectCoverage: '2 个 feminist free-word / assemblage-body 节点已建立深档案 · 1914–c.1950',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Loy 同时写 poetry / manifesto，也做 Dada-like assemblage。她的语言与物件实践都围绕女性 emancipation：从 “words in freedom” 到 house / laundry / domestic-object assemblage。',
    projects: [
      {
        title: 'Aphorisms on Futurism / Feminist Manifesto',
        cluster: 'free-word writing / feminist address / anti-patriarchal manifesto',
        period: '1914',
        summary: 'Loy 借 Futurist “words in freedom” 的冲击力，但把对象改成女性读者，明确推动 intellectual、emotional、sexual emancipation。',
        actions: [
          '以 fragmented aphorism / manifesto 代替 conventional lyric poem',
          '主动借用 avant-garde typographic freedom',
          '将 text address 指向 women 而非 Futurist masculine collective',
          '把 sexuality 与 intellectual autonomy 放进同一 emancipatory argument',
        ],
        sourceUrl: loyVenice,
        images: [], relations: [],
      },
      {
        title: 'Househunting',
        cluster: 'assemblage / domestic stereotype / female independence',
        period: 'c. 1950',
        summary: '不同材料拼成 female figure，周围十座 buildings；头饰中装有 teapot、yarn、food、laundry line，把 domestic stereotypes 与 freedom desire 同时压在女性身体上。',
        actions: [
          '组合 found / heterogeneous materials 形成 female figure',
          '以 ten buildings 建立 surrounding spatial frame',
          '把 teapot、yarn、food、laundry 等 domestic objects 放进 headdress',
          '让 burden / stereotype 直接成为 wearable body architecture',
        ],
        sourceUrl: loyVenice,
        images: [],
        relations: [rel('展览', 'Corps Orbite — Venice Biennale 2022', 'Central Pavilion')],
      },
    ],
    awards: [], exhibitions: ['Corps Orbite — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Mina Loy 2022', url: loyVenice }],
  },

  'venice-joyce-mansour': {
    artistId: 'venice-joyce-mansour',
    projectCoverage: '2 个 erotic-surreal poetry / text-image book 节点已建立深档案 · 1953–1966',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Mansour 把 Surrealist eroticism 从 femme-enfant 位置翻转成主动、危险、粗粝的 female voice；book collaboration 又把 text 与 etched body imagery 直接并排。',
    projects: [
      {
        title: 'Cris',
        cluster: 'poetry / scream / erotic female voice',
        period: '1953',
        summary: '第一本诗集就以 Screams 为题，语言故意远离传统 lyricism，以 sex、desire、danger 与 bodily impulse 建立不顺从的女性说话位置。',
        actions: [
          '使用短促、直接、非礼貌化的 erotic language',
          '避免 idealised romance / femme-enfant framing',
          '让 female speaker 同时具有 desire 与 threat',
          '通过 verbal intensity 接近 howl / scream 的身体效果',
        ],
        sourceUrl: mansourVenice,
        images: [], relations: [],
      },
      {
        title: 'Les Damnations',
        cluster: 'poetry + etching / Roberto Matta collaboration / rebellious body',
        period: '1966',
        summary: '第一版将 Mansour text 与 Roberto Matta 的十一幅 etching 交替编排；chaotic dream image 中的 nude female bodies 与 proud rebellious voice 相互放大。',
        actions: [
          '以 alternating text / image sequence 设计 book rhythm',
          '让 Matta 制作 eleven etched illustrations',
          '保留 Surrealist dream-space，但让 female voice 拒绝被动 erotic role',
          '通过 book object 将 poetry 与 visual body politics 合成单一 reading experience',
        ],
        sourceUrl: mansourVenice,
        images: [],
        relations: [rel('展览', 'Corps Orbite — Venice Biennale 2022', 'Central Pavilion')],
      },
    ],
    awards: [], exhibitions: ['Corps Orbite — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Joyce Mansour 2022', url: mansourVenice }],
  },

  'venice-sister-gertrude-morgan': {
    artistId: 'venice-sister-gertrude-morgan',
    projectCoverage: '2 个 preaching-painting / found-surface scripture 节点已建立深档案 · 1960s–1970s',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Morgan 把 painting、poetry、street preaching 与 self-mythology 合在一起；任何可找到的表面都能成为 scripture-image carrier。',
    projects: [
      {
        title: 'Bride of Christ / Sabbath Day works',
        cluster: 'white nurse uniform / self-mythology / preaching image',
        period: '1960s–1970s',
        summary: 'Morgan 认为自己受到 divine calling 成为 Bride of Christ，因此长期穿 white nurse uniform，并在作品里把自己画成等待 divine wedding 的人物。',
        actions: [
          '把 daily white uniform 变成长期 self-performance costume',
          '将 self-portrait 与 Jesus / scripture 放进同一 pictorial field',
          '在 image 中加入 handwritten religious text',
          '让 personal mythology 与 public preaching 相互支撑',
        ],
        sourceUrl: morganVenice,
        images: [], relations: [],
      },
      {
        title: 'Revelation / New Jerusalem works on found supports',
        cluster: 'cardboard / fan / tray / scripture-text painting',
        period: 'c.1960–1970',
        summary: '她在 cardboard scraps、window blinds、paper fans、Styrofoam trays、guitar case 等 surfaces 上画 daily / sacred scenes，并写入 Bible quotations。',
        actions: [
          '使用 cardboard、blind、fan、Styrofoam tray 等 found supports',
          '以 bright colour 画 dense figures / sacred scenes',
          '把 scripture quotation 直接手写进 image field',
          '反复加入 white-uniform self-portrait 与 Jesus figure',
          '让 object support 的日常用途继续可见，而不隐藏成传统 canvas',
        ],
        sourceUrl: morganVenice,
        images: [],
        relations: [rel('展览', 'Corps Orbite — Venice Biennale 2022', 'Central Pavilion')],
      },
    ],
    awards: [], exhibitions: ['Corps Orbite — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Sister Gertrude Morgan 2022', url: morganVenice }],
  },
};
