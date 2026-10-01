import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const jacobsVenice = 'https://www.labiennale.org/en/art/2022/leaf-gourd-shell-net-bag-sling-sack-bottle-pot-box-container/aletta-jacobs';
const malloVenice = 'https://www.labiennale.org/en/art/2022/leaf-gourd-shell-net-bag-sling-sack-bottle-pot-box-container/maruja-mallo';
const merianVenice = 'https://www.labiennale.org/en/art/2022/leaf-gourd-shell-net-bag-sling-sack-bottle-pot-box-container/maria-sibylla-merian';
const taeuberVenice = 'https://www.labiennale.org/en/art/2022/leaf-gourd-shell-net-bag-sling-sack-bottle-pot-box-container/sophie-taeuber-arp';
const takaezuVenice = 'https://www.labiennale.org/en/art/2022/leaf-gourd-shell-net-bag-sling-sack-bottle-pot-box-container/toshiko-takaezu';
const tichenorVenice = 'https://www.labiennale.org/en/art/2022/leaf-gourd-shell-net-bag-sling-sack-bottle-pot-box-container/bridget-tichenor';

export const archiveBatch95: Record<string, ArtistArchive> = {
  'venice-aletta-jacobs': {
    artistId: 'venice-aletta-jacobs',
    projectCoverage: '1 个 historical knowledge / anatomical-education 核心节点已建立档案 · 1897',
    imageCoverage: '0 / 1 项目暂不使用不稳定外链图像',
    note: 'Aletta Jacobs 并非职业艺术家，而是医生、女权活动家与历史知识人物。本站保留她是因为 Venice 2022 把她的手绘女性解剖图与生殖知识生产纳入历史 capsule；这里明确不把她伪装成艺术家。',
    projects: [
      {
        title: 'De Vrouw. Haar bouw en haar inwendige organen',
        cluster: 'medical illustration / reproductive anatomy / feminist education',
        period: '1897',
        summary: 'Jacobs 出版面向女性的身体与生殖系统说明书，并亲自绘制 folding anatomical plates。目标不是艺术展览，而是把当时被男性医学体系垄断的 reproductive knowledge 转成女性可直接理解的公共教育。',
        actions: [
          '基于 medical training 整理 female anatomy / reproductive-system knowledge',
          '亲自绘制 anatomical plates 而不是仅使用既有教科书图像',
          '以 folding-plate format 展开身体内部结构',
          '将 scientific illustration 与 plain-language explanation 组合',
          '把 birth control / sexuality knowledge 从专业医学语境转向女性公共教育',
        ],
        sourceUrl: jacobsVenice,
        images: [],
        relations: [rel('展览', 'A Leaf a Gourd a Shell… — Venice Biennale 2022', 'historical capsule · Arsenale')],
      },
    ],
    awards: [], exhibitions: ['A Leaf a Gourd a Shell… — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Aletta Jacobs 2022', url: jacobsVenice }],
  },

  'venice-maruja-mallo': {
    artistId: 'venice-maruja-mallo',
    projectCoverage: '1 个 shell-body / magical-realism still-life 系列已建立深档案 · 1942',
    imageCoverage: '0 / 1 项目暂不使用不稳定外链图像',
    note: '当前先把 Naturaleza viva 做深。Mallo 把 still life 的 shell、flower、fruit 重新组织成 female-body anatomy；容器、贝壳与身体不再是隐喻附注，而是构图本身。',
    projects: [
      {
        title: 'Naturaleza viva',
        cluster: 'shell / flower / female-body morphology / Magical Realism',
        period: '1942',
        summary: '流亡 Argentina 后，Mallo 从 Surrealism 转向更接近 Latin American Magical Realism 的语言。大型 shells 形成胸腹，floral elements 对应头发，concavity 又直接指向 female sexual anatomy。',
        actions: [
          '从 shell / flower / organic object 提取与 female anatomy 相似的轮廓',
          '以 bold colour 和 hypnotic pattern 代替传统静物的暗色调',
          '将多个自然物重新组合成 eccentric female silhouette',
          '利用 shell concavity 同时表达 container、womb 与 erotic desire',
          '让 still-life object 与 body representation 无法清楚分开',
        ],
        sourceUrl: malloVenice,
        images: [],
        relations: [rel('展览', 'A Leaf a Gourd a Shell… — Venice Biennale 2022', 'Arsenale historical capsule')],
      },
    ],
    awards: [], exhibitions: ['A Leaf a Gourd a Shell… — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Maruja Mallo 2022', url: malloVenice }],
  },

  'venice-maria-sibylla-merian': {
    artistId: 'venice-maria-sibylla-merian',
    projectCoverage: '1 个 field-science / metamorphosis illustration 核心节点已建立档案 · 1699–1705',
    imageCoverage: '0 / 1 项目暂不使用不稳定外链图像',
    note: 'Merian 同时是 naturalist 与 artist。她的关键贡献是把 insect 不再画成孤立标本，而是把 caterpillar、chrysalis、adult insect 与 host plant 放进同一 life-cycle image，让 transformation 成为画面的组织逻辑。',
    projects: [
      {
        title: 'Metamorphosis Insectorum Surinamensium',
        cluster: 'field observation / hand-coloured plate / insect-plant life cycle',
        period: '1699–1705',
        summary: 'Merian 前往 Dutch Suriname 两年观察 tropical insects，最终制作六十张 hand-coloured plates，记录约九十种昆虫及其宿主植物与 metamorphosis stages。',
        actions: [
          '进行长期 field observation，而非仅研究 museum specimen',
          '向当地 communities 学习植物与昆虫关系知识',
          '同时记录 caterpillar、chrysalis、adult insect 与 host plant',
          '将不同生命阶段安排在同一 composition 内形成 temporal diagram',
          '通过 hand-colouring 保留植物、翅膀与身体表面的细微差异',
        ],
        sourceUrl: merianVenice,
        images: [],
        relations: [rel('展览', 'A Leaf a Gourd a Shell… — Venice Biennale 2022', 'Arsenale historical capsule')],
      },
    ],
    awards: [], exhibitions: ['A Leaf a Gourd a Shell… — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Maria Sibylla Merian 2022', url: merianVenice }],
  },

  'venice-sophie-taeuber-arp': {
    artistId: 'venice-sophie-taeuber-arp',
    projectCoverage: '2 个 textile-grid / Dada marionette 节点已建立深档案 · 1915–1920',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Taeuber-Arp 的重要性在于她从不接受 fine art / applied art 边界：textile grid、bead embroidery、painting、dance、costume 和 marionette 都使用同一 geometric vocabulary。',
    projects: [
      {
        title: 'Concrete textile works / beaded bag',
        cluster: 'textile design / geometric abstraction / glass beads',
        period: '1915–1920',
        summary: '她将 circles、squares、diagonals 等 nonrepresentational geometry 同 textile design 直接连接。1920 的 small cloth bag 以 glass beads 绣出与其 paintings 相同的 geometric pattern。',
        actions: [
          '从 textile-design training 建立重复 grid / motif system',
          '将 geometric pattern 同时用于 weaving、embroidery 与 painting',
          '在 cloth bag 上逐颗缝入 glass beads 形成硬质反光 pattern',
          '拒绝将 wearable / decorative object 排除在 serious art 之外',
        ],
        sourceUrl: taeuberVenice,
        images: [], relations: [],
      },
      {
        title: 'Cabaret Voltaire costumes and marionettes',
        cluster: 'Dada performance / puppet / robotic geometry',
        period: '1916–1920s',
        summary: '在 Zürich Dada 环境中，她参与舞蹈并设计 set、costume 与小型 marionettes；简化几何身体让 puppet 呈现 robotic / cyborgian appearance。',
        actions: [
          '将 painted geometric forms 转译成 costume / puppet volumes',
          '为 performance 制作 set 与 wearable elements',
          '以 articulated small marionette 连接 abstract form 与 bodily movement',
          '让 dance 与 visual design 共同构成作品而非分离专业',
        ],
        sourceUrl: taeuberVenice,
        images: [],
        relations: [rel('展览', 'A Leaf a Gourd a Shell… / Seduction of the Cyborg — Venice Biennale 2022', 'appeared across historical capsule logic')],
      },
    ],
    awards: [], exhibitions: ['A Leaf a Gourd a Shell… — Venice Biennale 2022', 'Seduction of the Cyborg — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Sophie Taeuber-Arp 2022', url: taeuberVenice }],
  },

  'venice-toshiko-takaezu': {
    artistId: 'venice-toshiko-takaezu',
    projectCoverage: '3 个 closed-vessel / moon / earth-mother ceramic 节点已建立深档案 · 1960s–1999',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Takaezu 的 pot 逐渐失去容器功能：opening 被缩到几乎封闭，内部空腔不可见，却成为作品真正的“内在空间”；glaze drip 与 volcanic surface 又把 vessel 推向 cosmic body。',
    projects: [
      {
        title: 'Closed forms',
        cluster: 'wheel-thrown / nearly sealed vessel / inaccessible interior',
        period: '1960s–ongoing',
        summary: 'wheel-thrown 或 hand-shaped ceramics 保留 pot silhouette，却几乎封死 opening，使 hollow interior 无法使用也难以观看。',
        actions: [
          '以 wheel throwing 或 hand shaping 建立 rounded hollow form',
          '逐步缩小 vessel opening，取消正常 storage function',
          '在 firing 前保留 tiny aperture，使内部仍存在但不可进入',
          '使用 multiple glazes 叠加 drip / cloud-like surface',
        ],
        sourceUrl: takaezuVenice,
        images: [], relations: [],
      },
      {
        title: 'Moons',
        cluster: 'stoneware sphere / cosmic glaze / sealed interior',
        period: 'c. 1980–2000',
        summary: '球形 stoneware 仅在底部保留小孔，以 blue、gold、pearl、ochre 等多层 glaze 形成 planetary surface。',
        actions: [
          '制作近完整 spherical stoneware body',
          '仅在 base 保留 tiny hole',
          '叠加多种 glaze 并允许 firing 中自然流淌',
          '通过 group installation 形成 planetary / celestial constellation',
        ],
        sourceUrl: takaezuVenice,
        images: [], relations: [],
      },
      {
        title: 'Gaea (Earth Mother)',
        cluster: 'ceramic sphere / hammock installation / fertility + womb',
        period: '1990',
        summary: 'closed ceramic forms 被放进悬挂于树间的 hammocks，硬质 ceramic body 像被 cradle 包裹，产生 womb / fertility / Earth-body 联想。',
        actions: [
          '将 individual ceramic forms 从 pedestal 移入 textile hammock',
          '把 hammocks 悬挂在 trees 之间建立 outdoor relational installation',
          '利用 suspended cradle 改变陶瓷的重量感与观看高度',
          '将 closed vessel 同 Earth / womb / fertility 的容器逻辑连接',
        ],
        sourceUrl: takaezuVenice,
        images: [],
        relations: [rel('展览', 'A Leaf a Gourd a Shell… — Venice Biennale 2022', 'Arsenale historical capsule')],
      },
    ],
    awards: [], exhibitions: ['A Leaf a Gourd a Shell… — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Toshiko Takaezu 2022', url: takaezuVenice }],
  },

  'venice-bridget-tichenor': {
    artistId: 'venice-bridget-tichenor',
    projectCoverage: '1 个 shell-body / egg-tempera mystical landscape 节点已建立深档案 · 1964',
    imageCoverage: '0 / 1 项目暂不使用不稳定外链图像',
    note: '当前先把 Dueto solitario 做深。Tichenor 的奇异生物来自 egg-tempera 的高度精细制作与 Mexico 后形成的 pre-Columbian / mystical imagery，而不是随意 surreal fantasy。',
    projects: [
      {
        title: 'Dueto solitario',
        cluster: 'egg tempera / giant shell / moon-anthropomorph / volcanic landscape',
        period: '1964',
        summary: '荒凉 volcanic landscape 中有两枚巨大 speckled shells：一枚闭合并明显指向 female genital form，另一枚敞开，内部容纳一张 anthropomorphic moon face。',
        actions: [
          '使用 Paul Cadmus 传授的 traditional egg-tempera technique 精细分层上色',
          '以 scientific-like precision 描绘 shell texture 和 speckles',
          '把 shells 放大到远超自然尺度，使其成为 landscape architecture',
          '利用 closed / open shell 建立 concealment / womb / exposure 对照',
          '将 moon、pre-Columbian mythology 与 female-body symbolism 叠入同一 image',
        ],
        sourceUrl: tichenorVenice,
        images: [],
        relations: [rel('展览', 'A Leaf a Gourd a Shell… — Venice Biennale 2022', 'Arsenale historical capsule')],
      },
    ],
    awards: [], exhibitions: ['A Leaf a Gourd a Shell… — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Bridget Tichenor 2022', url: tichenorVenice }],
  },
};
