import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const berhanuVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/merikokeb-berhanu';

const braetschVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/kerstin-br%C3%A4tsch';
const braetschGladstone = 'https://gladstonegallery.com/artist/kerstin-braetsch/';
const braetschBonn = 'https://www.kunstmuseum-bonn.de/en/ausstellungen/kerstin-braetsch/';

const budvytyteVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/egl%C4%97-budvytyt%C4%97-collaboration-marija-ol%C5%A1auskait%C4%97-and-julija-steponaityt%C4%97';
const budvytyteSongs = 'https://www.eglebudvytyte.lt/songs-from-the-compost-mutating-bodies-imploding-stars/';
const budvytyteLndm = 'https://www.lndm.lt/egle-budvytyte-tender-tremble/';

const buggeVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/liv-bugge';
const buggeBook = 'https://www.lespressesdureel.com/ouvrage.php?id=7823';
const buggeKhio = 'https://khio.no/en/staff/liv-bugge/';

const buhlunguVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/simnikiwe-buhlungu';
const buhlunguShowroom = 'https://theshowroom.org/projects/the-showroom-mural-commission-simnikiwe-buhlungu-notes-to-self-intimate-1';
const buhlunguKite = 'https://www.museoreinasofia.es/en/linternationale/artists-quarantine/simnikiwe-buhlungu/';
const buhlunguMixtape = 'https://theshowroom.org/resources/simnikiwe-buhlungu-notes-to-self-mixtapenyana-side-c';

const cahnVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/miriam-cahn';
const cahnMcba = 'https://www.mcba.ch/en/collection/schiff/';
const cahnWar = 'https://www.nmn.de/files/load/Sammlungen/Kunst/2022/cahn/NMN-Handout_Cahn_war.pdf';
const cahnReina = 'https://www.museoreinasofia.es/en/exhibition/miriam-cahn/';

export const archiveBatch81: Record<string, ArtistArchive> = {
  'venice-merikokeb-berhanu': {
    artistId: 'venice-merikokeb-berhanu',
    projectCoverage: '3 个 cellular-cosmology / technology-organism 绘画节点已建立深档案 · 2010s–2021',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Berhanu 的抽象并不是纯形式：细胞、种子、胚胎、脑组织、输卵管、树木年轮与电路板被放进同一无透视空间，使生命繁殖与技术城市化被看成共享结构。',
    projects: [
      {
        title: 'Cellular Universe',
        cluster: 'cellular biology / cosmology / reproductive morphology',
        period: '2010s–ongoing',
        summary: 'Cellular Universe 将不同物种共享的细胞与繁殖形态转成无景深的绘画宇宙：tree rings、embryos、orange seed pods、brain、Fallopian tubes 等结构漂浮、叠压并互相转化。',
        actions: [
          '从显微 / 生物形态与日常植物结构中提取圆形、管状、胚胎式轮廓',
          '放弃传统透视，把 figures 与 single-tone geometric fields 直接叠加在 depthless space 中',
          '让同一种形态同时可以被读成 cell、seed、organ、planet 或 landscape',
          '用重复、嵌套和环形结构把个体身体扩展为跨物种 cosmology',
        ],
        sourceUrl: berhanuVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Central Pavilion')],
      },
      {
        title: 'Untitled LXX',
        cluster: 'cow-womb / motherboard / techno-organic painting',
        period: '2021',
        summary: '一头小牛漂浮在椭圆 womb 内，另一头牛从外部注视；绿色 motherboard / wiring 位于胚胎下方，像数字化羊水。作品把 reproduction、animal care 与电子基础设施直接叠在同一生命场景。',
        actions: [
          '以 cow / calf relationship 建立可辨识的 maternal scene',
          '把 womb 画成独立 ellipse，使 reproductive interior 成为画面中的空间容器',
          '将 motherboard 与 green wiring 置入生物内部，而不是作为外部科技背景',
          '保持 natural organism 与 circuit-board geometry 同等清晰，使两种系统无法被主次区分',
        ],
        sourceUrl: berhanuVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 presentation')],
      },
      {
        title: 'Cellular Universe — circuit-board / microchip works',
        cluster: 'rapid urbanisation / consumer electronics / organic topography',
        period: '2020–2021',
        summary: '近期 Cellular Universe 逐渐加入 circuit boards 与 microchips。技术物并不取代自然形态，而像新器官一样嵌入 landscape / cell field，用来回应 Ethiopia 与非洲城市快速扩张以及全球消费电子系统。',
        actions: [
          '从 microchip / printed circuit board 提取网格、线路和 component pattern',
          '把 technological motif 与 embryo、brain、seed、tree-ring 等 organic forms 重叠',
          '保留 Ethiopian Modernism 的 flat field 与强色块传统，同时引入 contemporary device imagery',
          '通过同一绘画空间比较 biological reproduction 与 technological replication 两种增长模式',
        ],
        sourceUrl: berhanuVenice,
        images: [],
        relations: [],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Merikokeb Berhanu 2022', url: berhanuVenice }],
  },

  'venice-kerstin-bratsch': {
    artistId: 'venice-kerstin-bratsch',
    projectCoverage: '3 个 stained-glass / stucco-marmo / painting-as-architecture 节点已建立深档案 · 2012–2021',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Brätsch 的关键不是“扩展绘画”这个抽象标签，而是把 brushstroke 反复翻译成 stained glass、agate、stucco marmo、lead、steel frame 等工艺，让一笔颜料逐步变成可以挡光、承重和占据建筑的物体。',
    projects: [
      {
        title: 'Wächter (life is Beautifool _heiliger Johannes)',
        cluster: 'stained glass / sliced agate / steel armature',
        period: '2012–2021',
        summary: '作品由 stained glass、切片 agate 与艺术家设计的 steel armature 组成。传统 painting support 被替换成可透光的矿物和玻璃，再由可见支架把“画面”推入三维建筑空间。',
        actions: [
          '把 colour field 转译成 stained-glass segments，而不是在 canvas 上模拟玻璃效果',
          '插入 sliced agate rock，让天然 mineral pattern 与人工图形并置',
          '设计并保留 visible steel armature，不隐藏支撑结构',
          '利用展场自然 / 人工光穿过 glass 与 agate，使颜色随观看环境变化',
          '把平面 painting 转成同时具有 window、screen 与 sculpture 功能的 architecture-like object',
        ],
        sourceUrl: braetschVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Arsenale')],
      },
      {
        title: 'Brushstroke Fossils for Christa',
        cluster: 'stucco marmo / fossilised gesture / modular painting fragments',
        period: '2019–2021',
        summary: 'Brätsch 与 stucco-marmo 工艺合作，把原本短暂、柔软的 brushstroke 变成 plaster、pigment、glue、wax 与 oil 的坚硬碎片。绘画动作因此像化石一样被切开、保存，再重新组装成墙面身体。',
        actions: [
          '与传统 stucco-marmo craft knowledge 合作，将 pigment 混入 plaster mass',
          '把 painterly stroke 从表面图像改造成有厚度的 physical fragment',
          '使用 honeycomb backing 与 felt 支撑不同形状的模块',
          '把 17 个或更多 fragments 重新组合成 FACE / MAN 等整体结构',
          '让“brushstroke”经历 paint → plaster → object 的材料翻译，而不是维持唯一媒介',
        ],
        sourceUrl: braetschGladstone,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2019–2021 works shown 2022')],
      },
      {
        title: 'Fossil Psychic / MƎTA',
        cluster: 'psychic reading / recurring motif / material metamorphosis',
        period: '2020–ongoing',
        summary: 'Fossil Psychic 与后续 MƎTA 系列继续让同一 motif 在 plaster、oil、glass、wallpaper 与空间结构之间迁移。图像不被当作完成的原创符号，而像 organism 一样不断 mimic、复制和换材料。',
        actions: [
          '反复调用自己早期 painting motifs，而不是追求每件作品全新图像',
          '将 motif 迁移到 stucco marmo、wallpaper、glass 与 conventional painting 等不同载体',
          '通过 mirroring / Rorschach-like symmetry 测试观众在抽象图形中自动识别形象的倾向',
          '在展览中把 colour、light、sound 与 architectural circulation 合并成整体 painting environment',
        ],
        sourceUrl: braetschBonn,
        images: [],
        relations: [rel('展览', 'MƎTAATEM — MUNCH / Kunstmuseum Bonn', '2025–2026')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022', 'MƎTAATEM — MUNCH / Kunstmuseum Bonn 2025–2026'],
    sources: [
      { label: 'La Biennale · Kerstin Brätsch 2022', url: braetschVenice },
      { label: 'Gladstone Gallery · works archive', url: braetschGladstone },
      { label: 'Kunstmuseum Bonn · MƎTAATEM', url: braetschBonn },
    ],
  },

  'venice-egle-budvytyte-in-collaboration-with-marija-olsauskaite-and-julija-steponaityte': {
    artistId: 'venice-egle-budvytyte-in-collaboration-with-marija-olsauskaite-and-julija-steponaityte',
    projectCoverage: '3 个 choreography / symbiosis / posthuman-film 节点已建立深档案 · 2020–2026',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。这里把 Songs from the Compost 视作核心合作项目，再沿 Budvytytė 后续 film practice 追踪“水平身体—共生—非人主体”怎样继续演变；2022 条目明确保留 Marija Olšauskaitė 与 Julija Lukas Steponaitytė 的艺术指导合作。',
    projects: [
      {
        title: 'Songs from the Compost: Mutating Bodies, Imploding Stars',
        cluster: '4K video / horizontal choreography / symbiosis song',
        period: '2020',
        summary: '影片在 Curonian Spit 的 pine forest、sand dunes 与水边拍摄。performers 经常贴地、横卧、成群移动，歌曲文本引用 Lynn Margulis 的 endosymbiosis 与 Octavia Butler 的 hybridity，拒绝把人类直立身体放在生态层级顶端。',
        actions: [
          '在 Curonian Spit 的真实 forest / dune / water landscape 中拍摄，而非 studio green-screen',
          '由 Mami Kang 编排 solo dance，并让青年 performers 发展大量 horizontal / ground-oriented movement',
          '由 Eglė Budvytytė 写作并演唱 specially conceived song，将歌词作为 film narration',
          '由 Marija Olšauskaitė 与 Julija Lukas Steponaitytė负责 art direction / visual environment',
          '将 bacteria、fungi、decay、gender mutation 与 interspecies dependence 通过身体动作而非 diagram 表达',
        ],
        sourceUrl: budvytyteSongs,
        images: [],
        relations: [
          rel('展览', 'Riga International Biennial / Nida Art Colony', '2020'),
          rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Arsenale'),
        ],
      },
      {
        title: 'Warmblooded and Earthbound',
        cluster: 'film / interdependence / life-after-life',
        period: '2024',
        summary: '后续影片继续处理 collective body、interdependence 与 death / afterlife，让人类身体不再作为独立主体，而成为 landscape、other species 和时间循环中的临时节点。',
        actions: [
          '延续 choreography + landscape + song 的组合，而不是回到传统 character narrative',
          '让 performers 的 movement 与地面、植物和其他身体保持持续 physical contact',
          '通过 film editing 弱化 linear chronology，使生命 / 死亡转换不按单一方向发生',
          '把 collectivity 作为动作结构，而不仅是影片主题',
        ],
        sourceUrl: budvytyteLndm,
        images: [],
        relations: [rel('出版', 'Tender Tremble', '2026 publication includes Warmblooded and Earthbound')],
      },
      {
        title: 'animism sings anarchy',
        cluster: 'three-channel film / animism / landscape choreography',
        period: '2026',
        summary: '为 Lithuania Pavilion 2026 创作的三频道 film installation 延续“身体不是封闭个体”的方法，把 animism、collectivity 与 non-linear time 推到更完整的多屏空间。',
        actions: [
          '将 single-channel / linear viewing 扩展成 three-channel installation',
          '继续用 song lyrics、performance documentation 与 choreographed body 构成叙事',
          '把 landscape 视为共同 performer，而不是背景',
          '通过多屏并置打散单一 chronological time，让不同生命状态并行出现',
        ],
        sourceUrl: budvytyteLndm,
        images: [],
        relations: [rel('展览', 'Lithuanian Pavilion — 61st Venice Biennale', '2026')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022', 'Lithuanian Pavilion — Venice Biennale 2026'],
    sources: [
      { label: 'La Biennale · Eglė Budvytytė collaboration 2022', url: budvytyteVenice },
      { label: 'Artist site · Songs from the Compost', url: budvytyteSongs },
      { label: 'Lithuanian National Museum of Art · Tender Tremble', url: budvytyteLndm },
    ],
  },

  'venice-liv-bugge': {
    artistId: 'venice-liv-bugge',
    projectCoverage: '3 个 colonial-reading / artistic-research / multispecies-film 节点已建立深档案 · 2011–2019',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Bugge 的核心不是“动物题材”，而是通过 reading、research、touch 和共同生活去拆解 human / nonhuman、civilised / wild、control / collaboration 等二元结构。',
    projects: [
      {
        title: 'You Make Me Want to Die in the Countryside',
        cluster: 'artist book / Heart of Darkness / postcolonial reading',
        period: '2011',
        summary: '这本 artist book 不是为 Conrad 的 Heart of Darkness 配图，而是把 reading notes、extracts、documentation、works 与 interviews 组织成一套对阅读过程本身的记录，追问后殖民暴力如何在远距离时间和教育体系中被理解。',
        actions: [
          '长期阅读 Joseph Conrad 的 Heart of Darkness，并保留 notes / excerpts 而非只写总结',
          '收集与殖民史、远距离暴力和自身观看位置相关的 documentation',
          '把 interviews 与已有 artworks 混入同一 book sequence',
          '让 artist book 同时承担 research archive 和 finished artwork 的角色',
        ],
        sourceUrl: buggeBook,
        images: [],
        relations: [rel('出版', 'You Make Me Want To Die In The Country Side — Torpedo Press', '2011 · 152 pages')],
      },
      {
        title: 'The Other Wild: Touching Art as Confrontation',
        cluster: 'artistic PhD / touch / human-nature dichotomy',
        period: '2012–2019',
        summary: 'Bugge 的 PhD 将 artistic practice 与研究直接合并，追问社会机制如何被身体内化，并维持 life / non-life、human / nature 等规范性二分。touch 在这里既是方法也是冲突：接触会暴露谁有权定义“野性”。',
        actions: [
          '以 artistic research 而不是单纯 theoretical dissertation 组织多年实践',
          '围绕 touch / confrontation 测试人与物、动物、环境发生关系的方式',
          '从 queer / feminist perspective 检查 normative concepts 如何被身体和制度重复',
          '把 human / nature、life / non-life 等 dichotomies 当作可被作品操作的结构，而非固定分类',
        ],
        sourceUrl: buggeKhio,
        images: [],
        relations: [rel('出版', 'The Other Wild: Touching Art as Confrontation', 'PhD completed 2019 · Oslo National Academy of the Arts')],
      },
      {
        title: 'PLAY',
        cluster: '16mm film / sled-dog pack / projection on dog houses',
        period: '2019',
        summary: 'PLAY 用 16mm film 拍摄一群 Siberian huskies 的日常：坐、跳、玩、闻。影像被投在改造后的 wooden dog houses 上，狗而非人类成为构图中心，survival 被理解为协作与非语言交流，而不是竞争性力量。',
        actions: [
          '与 family、Vargevass Kennel 和真实 sled-dog pack 在雪地 dog yard 共同拍摄',
          '使用 16mm film 记录 dogs 的 ordinary gestures，不安排戏剧化捕猎 / aggression 情节',
          '把 Pippi、Puak、Pamuk、Amur 等具体 dogs 作为 named participants 而非匿名素材',
          '将 projection equipment 嵌入 wooden dog houses，使 display architecture 延续犬舍环境',
          '让 human collaborators 退到 production background，使犬群关系决定主要画面内容',
        ],
        sourceUrl: buggeVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'La Biennale · Liv Bugge 2022', url: buggeVenice },
      { label: 'Les presses du réel · artist book', url: buggeBook },
      { label: 'Oslo National Academy of the Arts · research profile', url: buggeKhio },
    ],
  },

  'venice-simnikiwe-buhlungu': {
    artistId: 'venice-simnikiwe-buhlungu',
    projectCoverage: '3 个 walking-knowledge / displaced-play / electromagnetic-conversation 节点已建立深档案 · 2019–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Buhlungu 的“知识生产”不是理论口号：walking、recording、mixtape、kite、theremin 与 audience body 都被当成知识如何被制造、传递和遗漏的具体媒介。',
    projects: [
      {
        title: 'Notes to Self (Intimate 1) / A Mixtapenyana',
        cluster: 'walking / mural / community recording / mixtape',
        period: '2019–2022',
        summary: '项目从 strolling 作为 knowledge production 出发，把 facade mural、textile、interactive sound 与 community call-and-response 结合。路人的“notes to self”可被录下、聆听并积累成 living archive。',
        actions: [
          '以 walking / strolling 记录与环境、人物、叙事相遇形成的 personal notes',
          '将 notes 编辑进 ongoing Mixtapenyana，而不是封闭成一次性文本作品',
          '在 The Showroom facade 设计 site-specific mural / textile intervention',
          '设置可供 passers-by 留下声音 / notes 的互动机制',
          '把 local responses 保存为不断增长的 archive，使“谁生产知识”由艺术家扩展到公众',
        ],
        sourceUrl: buhlunguShowroom,
        images: [],
        relations: [rel('展览', 'The Showroom Mural Commission — Notes to Self (Intimate 1)', '2019–2022')],
      },
      {
        title: "My Dear Kite (You Can But You Can't) - Late Yawnings 01h43",
        cluster: 'video / kite movement / lockdown displacement',
        period: '2020',
        summary: '疫情期间，原本属于 outdoor play 的 kite 被转成在室内 / 屏幕中移动的影像。作品同时处理 Johannesburg → Netherlands 的个人迁移、creative productivity 的压力与 lockdown 中 in/outdoor 边界失效。',
        actions: [
          '把 kite 这一依赖 wind / outdoor space 的玩具作为 lockdown 条件下的核心动作对象',
          '录制约 4分54秒 video，并让声音包含 repetitive / searching narration',
          '将 artist 的 geographic displacement 与 pandemic social restriction 放在同一时间结构',
          '在 installation version 中利用 projection / fabric / fan 等材料模拟 kite movement',
          '把“不能出去玩”转成对 creative labour 和 productivity 要求的反思',
        ],
        sourceUrl: buhlunguKite,
        images: [],
        relations: [rel('展览', "L'Internationale · Artists in Quarantine", 'commissioned 2020')],
      },
      {
        title: 'And the Other Thing I Was Saying Was: A Conver-something',
        cluster: 'five theremins / electromagnetic body / sampled conversation',
        period: '2022',
        summary: '五台 theremin 通过观众身体进入 electromagnetic fields 才会发声。Pink noise、Miriam Makeba、Binyavanga Wainaina、hadeda birds 与 percussion 被分配到不同声音源；conversation 因而发生在身体距离、电磁场和 archive sample 之间，而非单纯口语。',
        actions: [
          '配置 five theremins、speakers、floor rug、plastic crates 与 coloured light 构成可进入的 sound field',
          '把 Pink noise、Mam’ Miriam Makeba、Binyavanga Wainaina、Hadedas、percussive rhythm 分成多组 recorded sources',
          '让 audience body 靠近 / 远离 theremin antenna 改变声音，使观看直接成为演奏动作',
          '把 dream / pause / mistake / adlib / biological communication 等“非清晰语言”视为同等有效的信息',
          '用 electromagnetic interaction 取代 button / screen interface，让 knowledge exchange 保持不可完全控制',
        ],
        sourceUrl: buhlunguVenice,
        images: [],
        relations: [
          rel('奖项', 'Biennale College Arte inaugural grant', 'one of four recipients · 2021/22'),
          rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · out of competition'),
        ],
      },
    ],
    awards: ['Biennale College Arte grant — 2021/22'],
    exhibitions: ['The Showroom Mural Commission — 2019–2022', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'La Biennale · Simnikiwe Buhlungu 2022', url: buhlunguVenice },
      { label: 'The Showroom · Notes to Self', url: buhlunguShowroom },
      { label: 'The Showroom · Mixtapenyana', url: buhlunguMixtape },
      { label: 'Museo Reina Sofía / L’Internationale · My Dear Kite', url: buhlunguKite },
    ],
  },

  'venice-miriam-cahn': {
    artistId: 'venice-miriam-cahn',
    projectCoverage: '3 个 bodily-charcoal / anti-war room / current-event painting installation 节点已建立深档案 · 1981–2021',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Cahn 的政治性不靠新闻照片复制，而靠身体劳动、日期、安装顺序和对当下事件的即时反应：她从跪在地面画大型 charcoal，到把战争按生成日期排成 room，再到把 painting、drawing、notebook 组成整体时间场。',
    projects: [
      {
        title: 'Morgen Grauen / early floor drawings',
        cluster: 'charcoal / full-body drawing / feminist public gesture',
        period: '1979–1984',
        summary: 'Cahn 早期以 chalk / charcoal 在大纸、墙面甚至公共建筑表面作画，并经常把纸铺在地面工作。drawing 因而记录整个身体的速度、重心和手臂范围，而不是只留下手腕控制的线。',
        actions: [
          '将 oversized paper 平铺地面，在 kneeling / bending 状态下用 charcoal 与 chalk 快速作画',
          '让 hand movement、body reach 和 pressure 直接成为线条尺度的物理来源',
          '在 mein frausein ist mein öffentlicher teil 等行动中进入 public wall / bridge surface，挑战 drawing 被限制在私人 studio 的位置',
          '使用 eyes-closed / rapid gesture 等方式削弱学院式精确控制',
          '把 feminist body 作为 drawing tool 本身，而不仅是画面 subject',
        ],
        sourceUrl: cahnMcba,
        images: [],
        relations: [rel('收藏', 'Musée cantonal des Beaux-Arts Lausanne', 'Schiff 1984 / related early charcoal practice')],
      },
      {
        title: 'war',
        cluster: '20-painting room / Yugoslav wars / dated chronology',
        period: '1999',
        summary: 'war room 在 Yugoslav wars 媒体报道背景下，于 1999 年 2–5 月间完成 20 幅油画。每件作品保留精确日期，并按封闭序列组成房间，使创作时间本身形成 dramaturgy。',
        actions: [
          '持续观看当时 Yugoslav wars 的新闻与媒体图像，但不直接复制 documentary photograph',
          '在数月内连续完成 20 oil paintings，并为每件标注 precise date',
          '以 isolated figures、flowers、everyday objects 等间接形象处理战争身体经验',
          '把 20 件按 chronology 安装成 single room，而不是允许任意分散悬挂',
          '借 installation sequence 让观众经历持续积累的战争时间，而非单一高潮事件',
        ],
        sourceUrl: cahnWar,
        images: [],
        relations: [rel('收藏', 'Neues Museum Nürnberg', 'war room / cycle')],
      },
      {
        title: 'unser süden sommer 2021, 5.8.2021',
        cluster: 'room installation / painting + mixed-media drawing + notebooks',
        period: '2021',
        summary: 'Venice 2022 的完整 room installation 由 28 件新作组成：13 paintings、9 mixed-media drawings、6 artist notebooks。gender-bending bodies、birth imagery、sexuality 与 contemporary crises 被组织为单一环境，而不是按媒介分区。',
        actions: [
          '在同一时间段并行制作 oil paintings、mixed-media drawings 与 notebooks',
          '把 current events 与长期 motifs——war、birth、sexuality、family、death——在新作中即时交错',
          '不按 painting / drawing / notebook 分类陈列，而由艺术家本人决定 room-wide rhythm',
          '通过作品尺度、眼神方向和空隙控制观众在房间中的移动速度',
          '避免 heroic / spectacular trauma imagery，让 ambiguity 与 emotive mark-making 保持主导',
        ],
        sourceUrl: cahnVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Central Pavilion')],
      },
    ],
    awards: [],
    exhibitions: ['documenta 7 — 1982', 'Swiss Pavilion — Venice Biennale 1984', 'Miriam Cahn: everything is equally important — Museo Reina Sofía 2019', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'La Biennale · Miriam Cahn 2022', url: cahnVenice },
      { label: 'MCBA · early charcoal practice', url: cahnMcba },
      { label: 'Neues Museum Nürnberg · war', url: cahnWar },
      { label: 'Museo Reina Sofía · retrospective', url: cahnReina },
    ],
  },
};