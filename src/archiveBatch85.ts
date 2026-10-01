import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const ficreVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/ficre-ghebreyesus';
const brittaVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/britta-marakatt-labba';
const thaoVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/thao-nguyen-phan';
const odundoVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/magdalene-odundo';
const odundoMet = 'https://www.metmuseum.org/art/collection/search/487064';
const farhatVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/safia-farhat';
const gilVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/roberto-gil-de-montes';
const gilAsac = 'https://asac.labiennale.org/attivita/arti-visive/509961';

export const archiveBatch85: Record<string, ArtistArchive> = {
  'venice-ficre-ghebreyesus': {
    artistId: 'venice-ficre-ghebreyesus',
    projectCoverage: '2 个 diaspora-landscape / cross-cultural iconography 关键节点已建立深档案 · c.2011',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Ghebreyesus 的绘画把 Asmara 现代主义建筑、Eritrean basketry / embroidery、Kongolese bottle-tree custom 与 Yoruba horse-and-rider 等视觉记忆放进同一幻想地景；diaspora 不是单一怀乡图像，而是多个世界同时存在。',
    projects: [
      {
        title: 'City with a River Running Through',
        cluster: 'Asmara memory / basketry grid / unstretched monumental canvas',
        period: '2011',
        summary: '巨大 unstretched canvas 把 Asmara 的 modernist stucco houses 转成橙、桃色 checkerboard cityscape；建筑表面同时像 Eritrean basketry 与 embroidery pattern，使城市记忆与手工纹样共享同一构图结构。',
        actions: [
          '从童年 Asmara architectural memory 提取 modernist stucco-house silhouettes',
          '将城市块面重新组织成 orange / peach checkerboard 而非透视写实街景',
          '把 Eritrean basketry / embroidery pattern 作为 architecture 的内部结构，而非边缘装饰',
          '使用 large unstretched canvas 保留近 textile-like hanging quality',
          '让 imagined river 穿过城市，使真实地点与 diaspora fantasy 共同构成画面',
        ],
        sourceUrl: ficreVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Arsenale · posthumous presentation')],
      },
      {
        title: 'Nude with Bottle Tree',
        cluster: 'diaspora crossroads / Kongolese ritual / Yoruba reference',
        period: 'c. 2011',
        summary: '裸体人物站在密集 pattern landscape 中，附近 bottle tree 引用 Kongolese 将废弃容器挂在树上驱邪的传统；另一侧持乐器的人物让人联想到 Yoruba horse-and-rider sculpture。作品像把多个迁徙文化记忆压在同一十字路口。',
        actions: [
          '把 bottle-tree ritual、Yoruba sculptural memory 与 East African colour / pattern 放进同一 painting',
          '保持 motifs 可辨识但不写成 ethnographic diagram，让它们在 fantasy landscape 中互相转译',
          '通过 densely patterned ground 弱化 foreground / background，让人物、植物和 symbol 处于同一视觉层',
          '以个人 diaspora experience 连接不同 African visual traditions，而不宣称它们属于同一文化系统',
        ],
        sourceUrl: ficreVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022 · posthumous presentation'],
    sources: [{ label: 'La Biennale · Ficre Ghebreyesus 2022', url: ficreVenice }],
  },

  'venice-britta-marakatt-labba': {
    artistId: 'venice-britta-marakatt-labba',
    projectCoverage: '2 个 Sámi embroidery / map-cosmology 节点已建立深档案 · 2003–2021',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Marakatt-Labba 的 embroidery 以极细 wool、silk、linen thread 在白布上叙述 Sámi history、reindeer-herding landscape、protest 与 cosmology；针线既是 image-making，也是对 women’s textile labour 与 Indigenous oral history 的长期承接。',
    projects: [
      {
        title: 'Historja',
        cluster: 'long-form embroidery / Sámi history / land memory',
        period: '2003–2007',
        summary: 'Historja 是其长卷式代表作之一，将 Sámi everyday life、myth、reindeer herding、political conflict 与 Nordic landscape 连成连续刺绣叙事。时间不按西方历史画单一事件组织，而在同一布面上循环。',
        actions: [
          '在 long white textile ground 上持续以 fine embroidery thread 工作多年',
          '将 reindeer、camp、landscape、protest、mythic figure 等小尺度形象按行进 / 流动节奏连接',
          '用 thread density 与 colour 差异而非大面积绘画制造远近和事件强度',
          '把 oral history 与 personal memory 转成可连续阅读的 textile sequence',
          '让作品尺度接近 landscape panorama，但保留 needlework 的亲密劳动痕迹',
        ],
        sourceUrl: brittaVenice,
        images: [],
        relations: [],
      },
      {
        title: 'Milky Way / In the Footsteps of the Stars',
        cluster: 'elliptical map projection / ladjogáhpir / flora-fauna-stars',
        period: '2021',
        summary: '两件新刺绣把 landscape 压入类似眼球 / 椭圆地图投影的边界，内部出现 flora、fauna、stars 与佩戴红色 ladjogáhpir horn hat 的人物；被基督教权威历史禁止的帽饰在 Sámi autonomy movement 中重新获得能见度。',
        actions: [
          '以 fine wool、silk、linen threads 在 white fabric ground 上建立极细图像',
          '将 landscape 压入 elliptical / orb-like border，借用二维世界地图 projection 的视觉逻辑',
          '把 plants、animals、stars 与 human figure 放在同一 cosmological field',
          '明确绣入 red ladjogáhpir，使被压制的 Sámi women’s clothing history 进入当代图像',
          '通过 embroidery 把 cultural history 与 present-day self-determination movement 连接起来',
        ],
        sourceUrl: brittaVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: [],
    exhibitions: ['documenta 14 — 2017', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Britta Marakatt-Labba 2022', url: brittaVenice }],
  },

  'venice-thao-nguyen-phan': {
    artistId: 'venice-thao-nguyen-phan',
    projectCoverage: '3 个 Mekong / postcolonial-memory / film-painting 节点已建立深档案 · 2017–ongoing',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Phan 受过 painter 训练，但把 watercolor、moving image、folklore、archival history 与 Mekong ecology 编成多层叙事；真实历史与虚构角色往往同时出现，用来处理 colonialism、food security、dam construction 与 historical amnesia。',
    projects: [
      {
        title: 'Tropical Siesta',
        cluster: 'two-channel video / rural children / postwar memory',
        period: '2017',
        summary: '影片通过 Vietnam rural children 的游戏与表演重新进入国家暴力和历史记忆，让 child play、folklore 与 postwar history 互相穿透。现实证据不被独立讲解，而通过寓言性动作进入日常。',
        actions: [
          '以 staged / semi-staged children’s play 构成叙事，而不采用传统 documentary interview',
          '将 folklore、local landscape 与 historical violence 在同一 moving-image sequence 中交错',
          '利用 painterly framing 和慢节奏摄影保留图像的寓言性',
          '通过多频道 / installation display 让事件不依赖唯一线性故事',
        ],
        sourceUrl: thaoVenice,
        images: [],
        relations: [],
      },
      {
        title: 'Becoming Alluvium',
        cluster: 'Mekong River / ecology / historical layering',
        period: '2019–ongoing',
        summary: '项目把 Mekong River 当成会不断沉积、改道和携带记忆的主体，处理 climate change、overfishing、dam construction 与 colonial aftermath。河流既是 ecological infrastructure，也是叙事组织方式。',
        actions: [
          '沿 Mekong social / ecological history 收集环境、生产与历史材料',
          '将 moving image 与 painterly / literary references 结合，而非只用 environmental footage',
          '让 river flow / sedimentation 成为 montage 模型，使不同年代和故事层叠出现',
          '把 infrastructure、food security 与 local myth 放在同一 narrative ecology 中',
        ],
        sourceUrl: thaoVenice,
        images: [],
        relations: [],
      },
      {
        title: 'First Rain, Brise Soleil',
        cluster: 'Mekong / Vietnamese-Cambodian history / architecture + folklore',
        period: '2021–ongoing',
        summary: '影片第一部分借 Vietnamese-Khmer construction worker 与 brise-soleil concrete lattice 讨论 US imperialism 和 1977–1991 越柬战争；第二部分转入 18 世纪 folkloric love story，以 durian / thouren 连接 Mekong Delta 的农业、语言与跨境历史。',
        actions: [
          '以 brise-soleil 建筑构件连接 traditional Vietnamese ventilation technique 与 US-linked modern material history',
          '编写 fictional Vietnamese-Khmer worker narrative，将 architecture 作为 historical witness',
          '把第二部分转到 18th-century healer / Khmer woman love story，使 political history 与 folklore 并行',
          '以 durian / thouren fruit 作为 Mekong agricultural commodity 和 linguistic symbol',
          '对照 Saigon urban solitude 与 Mekong lush landscape，使 river-like shifting narrative 成为影片结构',
        ],
        sourceUrl: thaoVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Thao Nguyen Phan 2022', url: thaoVenice }],
  },

  'venice-magdalene-odundo': {
    artistId: 'venice-magdalene-odundo',
    projectCoverage: '2 个 vessel-making / firing 关键节点已建立深档案 · 1970s–2022',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Odundo 的 vessel 不是 wheel-thrown functional pottery：她以 hand-coiling / hollowing、gourd scraping、terra sigillata、stone burnishing 与 multiple firings 建立 anthropomorphic body；每次烧成的 oxygen condition 都会改变红、橙、灰、黑表面。',
    projects: [
      {
        title: 'Abuja / global vessel research — early formation',
        cluster: 'hand-built earthenware / women potters / global ceramic research',
        period: 'early 1970s',
        summary: '1971 移居英国后 Odundo 才开始深入 pottery，并前往 Nigeria Pottery Training Centre, Abuja 学习。Abuja 主要由女性延续的 rounded earthenware、linear geometric marking 与手工建造方法成为她后续 vessel language 的重要基础。',
        actions: [
          '从 graphic-art training 转向 clay，并主动回到 Nigeria / Kenya 调研不同 pottery traditions',
          '观察 women potters 以 hand-building / coil 而非 wheel 构造 full-bodied vessel',
          '研究 geometric surface marking、rounded volume 与 vessel-as-body 的关系',
          '同时吸收 ancient Greek、African 与其他 global craft histories，不把某一种传统宣称为唯一来源',
        ],
        sourceUrl: odundoVenice,
        images: [],
        relations: [],
      },
      {
        title: 'Untitled vessels — coiling / terra sigillata / reduction firing',
        cluster: 'red clay / hand-coiling / burnishing / multiple firing',
        period: '1997–2022',
        summary: '成熟 vessel 以 clay ball 为起点，逐步 hollow out 并向上拉出 neck；表面不用常规 glaze，而用 ultra-refined terra sigillata slip、stone / polishing tool burnish，再多次 firing。oxygen reduction 造成灰黑色，结果并不完全可控。',
        actions: [
          '从 solid / thick clay mass 开始逐步 hollow out，并以 hand-coiling / pulling 建立 body 和 neck',
          '使用 gourd scraping 工具修整曲面，不依赖 potter’s wheel',
          '覆盖 ultra-refined terra sigillata slip，再以 stones / polishing tools 反复 burnish',
          '先 firing 获得 red-orange surface，再通过 oxygen-reduced firing 产生灰 / 黑变化',
          '保留 firing 不可完全控制的色带，使每件 vessel 的表面成为 heat / oxygen 的记录',
        ],
        sourceUrl: odundoMet,
        images: [],
        relations: [
          rel('收藏', 'The Metropolitan Museum of Art', 'Untitled · 1997'),
          rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Arsenale'),
        ],
      },
    ],
    awards: ['Dame Commander of the Order of the British Empire — 2020'],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'La Biennale · Magdalene Odundo 2022', url: odundoVenice },
      { label: 'The Met · Untitled 1997', url: odundoMet },
    ],
  },

  'venice-safia-farhat': {
    artistId: 'venice-safia-farhat',
    projectCoverage: '1 个 postcolonial textile masterpiece 已建立深档案 · 1983',
    imageCoverage: '0 / 1 项目暂不使用不稳定外链图像',
    note: '当前先把官方资料最完整的 Gafsa & ailleurs 做深；Farhat 的教育、设计与更多 tapestry 以后再补，不把职业履历硬拆成假项目。',
    projects: [
      {
        title: 'Gafsa & ailleurs',
        cluster: 'monumental tapestry diptych / women’s weaving / postcolonial modernism',
        period: '1983',
        summary: '大型绿色 tapestry diptych 以 handspun dyed wool 混合 geometric pattern、figurative motif 与不同 pile height；Southern Tunisian women’s craft traditions 被重新用于 post-independence modernist art，而不是被当作匿名民俗装饰。',
        actions: [
          '以 dyed, handspun wool 织造 monumental two-part textile work',
          '混合 bold geometric pattern 与 horse / landscape 等 figurative motif',
          '主动改变 pile height 和 fibre texture，使平面 tapestry 获得 collage-like relief',
          '从 Tunisia southern interior women’s craft traditions 借用 / 转译 weaving language',
          '将 natural landscape 与 imaginary abstract terrain 编入同一 postcolonial composition',
        ],
        sourceUrl: farhatVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Arsenale · historical presentation')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022 · historical presentation'],
    sources: [{ label: 'La Biennale · Safia Farhat 2022', url: farhatVenice }],
  },

  'venice-roberto-gil-de-montes': {
    artistId: 'venice-roberto-gil-de-montes',
    projectCoverage: '3 个 queer-art-history / inverted-space / watery-vision painting 节点已建立深档案 · 2020–2021',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Gil de Montes 把 Chicano experience、pre-Columbian / Huichol iconography、Mexican modernism 与 queer everyday life 放在极 frontal、色彩浓烈而近 naïve 的画面中；视觉逻辑常故意倒置或被水面破坏。',
    projects: [
      {
        title: 'El Pescador',
        cluster: 'queer art-history remake / Botticelli inversion / fisherman body',
        period: '2020',
        summary: '作品戏仿 Botticelli《Birth of Venus》：从 giant shell 中出现的不再是 Venus，而是一名 reclining young fisherman。canonical female nude / beauty icon 被替换成 coastal male body，经典构图因此被轻柔地 queer 化。',
        actions: [
          '保留 Birth of Venus 中 giant shell / emergence 的可识别构图线索',
          '以 reclining young fisherman 替换 Venus，而不把 parody 处理成夸张漫画',
          '使用 oil on linen 与 saturated colour 保持 traditional painting materiality',
          '把 Mexican coastal everyday figure 与 European canonical art history 放进同一 frontal scene',
        ],
        sourceUrl: gilVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Arsenale')],
      },
      {
        title: 'UP',
        cluster: 'vertical inversion / suspended narrative / dream logic',
        period: '2021',
        summary: '人物与空间被垂直倒置，观看方向失去稳定地面。Gil de Montes 用非常清楚的描绘制造不合逻辑场景，使 dream / quotidian image 同时保持可信。',
        actions: [
          '以 figurative painting 建立可识别人物与空间，再将 spatial orientation 直接 inverted',
          '保持 extreme frontal composition，避免使用夸张 perspective 来解释倒置',
          '让 narrative action 悬置，使 viewer 无法判断 figure 是 falling、floating 还是世界本身翻转',
          '使用 lush colour 将不稳定空间维持在 deceptively naïve visual register',
        ],
        sourceUrl: gilVenice,
        images: [],
        relations: [],
      },
      {
        title: 'El monje',
        cluster: 'oil painting / rippling-water vision / layered field of sight',
        period: '2021',
        summary: 'El monje 通过 rippling-water-like visual layers 干扰人物视野，主体似乎隔着水面 / 反射被观看。水不只是题材，而成为破坏 image fidelity 的光学层。',
        actions: [
          '以 oil on canvas 建立 figure，再叠加 water-ripple / reflection-like distortion',
          '通过 layered field of vision 让人物既可识别又无法被清晰固定',
          '保持 Huichol / pre-Columbian animal-symbol vocabulary 与 personal dream imagery 在同一画面世界',
          '利用 colour 和 frontal composition 使 optical disruption 保持平静而不戏剧化',
        ],
        sourceUrl: gilAsac,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Arsenale map no.19')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'La Biennale · Roberto Gil de Montes 2022', url: gilVenice },
      { label: 'ASAC · El monje', url: gilAsac },
    ],
  },
};