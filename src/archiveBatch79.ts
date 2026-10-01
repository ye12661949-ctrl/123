import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const qadiriAlien = 'https://www.moniraalqadiri.com/alien-technology/';
const qadiriSpectrum = 'https://www.moniraalqadiri.com/spectrum/';
const qadiriVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/monira-al-qadiri';

const altinIstanbul = 'https://bienal.iksv.org/en/bienal-artists/ozlem-altin';
const altinVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/%C3%B6zlem-alt%C4%B1n';
const altinPill = 'https://www.thepill.co/exhibitions/65-sing-it-back-ozlem-altin/';

const abuarafehMemory = 'https://www.qattanfoundation.org/sites/default/files/yaya_final_for_print.pdf';
const abuarafehEarth = 'https://westspace.org.au/offsite/work/only-the-earth-doesn-t-tell-its-secrets/';
const abuarafehVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/noor-abuarafeh';

const krugerVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/barbara-kruger';
const krugerMoma = 'https://www.moma.org/calendar/exhibitions/5394';
const krugerLacma = 'https://www.lacma.org/art/exhibition/barbara-kruger';

const hsuCell = 'https://www.moma.org/collection/works/420803?artist_id=133262&page=1&sov_referrer=artist';
const hsuHammer = 'https://hammer.ucla.edu/exhibitions/2020/tishan-hsu-liquid-circuit';
const hsuWorks = 'https://miguelabreugallery.com/artists/tishan-hsu/works/';
const hsuVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/tishan-hsu';

const machnevaGallery = 'https://www.galerie-vallois.com/en/artiste/zhenya-machneva/';
const machnevaVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/zhenya-machneva';

export const archiveBatch79: Record<string, ArtistArchive> = {
  'venice-monira-al-qadiri': {
    artistId: 'venice-monira-al-qadiri',
    projectCoverage: '3 个 pearl-oil / drill-bit / levitating petro-culture 节点已建立深档案 · 2014–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Al Qadiri 的油井钻头并不是简单“石油符号”：她把 Gulf 的珍珠贸易、油田机械、汽车漆的虹彩和科幻物体外观绑在一起，让旧珍珠经济与现代 petro-economy 在同一个表面上互相映照。',
    projects: [
      {
        title: 'Alien Technology',
        cluster: 'public sculpture / giant drill bit / pearl-oil iridescence',
        period: '2014–2019',
        summary: '系列把 industrial oil drill bit 放大成约 3×3×3 米的公共雕塑，并以 automotive paint 做出类似珍珠母、深海生物和科幻机器的虹彩。形态来自石油开采工具，表面却召回石油出现前支撑 Gulf 经济的 pearl-diving 海洋世界。',
        actions: [
          '从真实 industrial drill-bit geometry 提取多翼、齿状切削结构作为 sculptural form',
          '用 fiberglass 放大到 monument / public-art scale，使通常隐藏地下的 extraction tool 被迫可见',
          '以 automotive paint 建立强烈 dichroic / pearlescent surface，而非模拟生锈工业机械',
          '让色谱同时指向 pearl nacre 与 oil sheen，把两段 Gulf resource economy 接到同一表面',
          '在 Dubai、Minneapolis、Venice 等公共场景中重新安装，使 extraction infrastructure 变成超现实城市纪念碑',
        ],
        sourceUrl: qadiriAlien,
        images: [],
        relations: [rel('展览', 'Future Generation Art Prize collateral presentation — Venice', '2019 iteration')],
      },
      {
        title: 'Spectrum',
        cluster: '3D print / miniature drill heads / dichroic petro-pearl spectrum',
        period: '2016',
        summary: '六件小型 3D-printed drill-head sculptures 将同一个资源逻辑压到桌面尺度。珍珠与石油处在 dichroic spectrum 的两端，汽车漆使机器头像 alien organism，也让“旧海洋财富 / 新地下财富”变成可旋转比较的 colour system。',
        actions: [
          '依据不同 oil-drill heads 建立 digital 3D models',
          '将模型 3D print 成六件约 20 cm 的 sculptural objects',
          '以 automotive paint 分别赋予不同 iridescent colours',
          '让每件 object 保持工业工具的切削结构，同时削弱其功能 scale',
          '把 pearl / oil 的历史替代关系转换成一套可并列观看的颜色与机器形态',
        ],
        sourceUrl: qadiriSpectrum,
        images: [],
        relations: [rel('展览', 'Sursock Museum commission — Beirut', '2016')],
      },
      {
        title: 'OR-BIT 1–8 / ORBITAL',
        cluster: 'levitating drill heads / magnetic rotation / monumental petro-spectacle',
        period: '2016–2018；2022 monumental version',
        summary: 'OR-BIT 先把彩虹钻头放上 commercial magnetic rotation platform，使工业切削头像无重力 alien relic；到 ORBITAL，尺度被进一步放大，悬浮和旋转制造 wonder，同时把这种魅力反转成 oil extraction 与 environmental devastation 的恐怖。',
        actions: [
          '继续用 3D fabrication / automotive finish 保留超光滑 machine-organic surface',
          '在小型版本底座内加入 commercial magnetic rotation platform，使 object 真正悬浮并缓慢旋转',
          '通过 movement 让 drill bit 从静态工业零件变成近 ritual / celestial object',
          '在 ORBITAL 中把同一逻辑放大到更 monumental scale，改变观众身体与物体的比例',
          '利用 spectacle 的吸引力与 oil extraction 的破坏性制造 deliberate contradiction，而不是以废墟视觉直接谴责',
        ],
        sourceUrl: qadiriVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: [],
    exhibitions: ['Alien Technology — public iterations 2014–2019', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'Monira Al Qadiri · Alien Technology', url: qadiriAlien },
      { label: 'Monira Al Qadiri · Spectrum', url: qadiriSpectrum },
      { label: 'La Biennale · Monira Al Qadiri 2022', url: qadiriVenice },
    ],
  },

  'venice-ozlem-altin': {
    artistId: 'venice-ozlem-altin',
    projectCoverage: '3 个 image-archive / portal installation / birth-death canvas collage 方法阶段已建立深档案 · 2016–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选方法 / 项目档案，尚非作品全集。Altın 的核心不是某一种固定摄影风格，而是持续扩张私人图像库：书、杂志、网络、博物馆、自己拍摄的照片和绘画被复制、叠放、重印，再通过身体之间的 proximity 生成新的叙事。',
    projects: [
      {
        title: 'Processing / Lens — archive recombination phase',
        cluster: 'found-image archive / photography + painting / associative sequencing',
        period: '2016–2019',
        summary: '从 Untitled (Touch or Melancholy)、Processing 到 Lens，Altın 建立起稳定的方法：来源完全不同的 found images、museum reproductions、自摄照片和 paintings 被取消等级后并置。身体不被当成单独 portrait subject，而是作为传递、触碰、反馈和 transformation 的节点。',
        actions: [
          '长期收集 books、magazines、Internet 与 museum collections 中的 images，并与 self-made photographs 共存于同一 archive',
          '对既有图像进行复制、裁切、重印和尺度变化，而不强调 original / copy 的等级',
          '把 painting、photo、text 与 reproduction 在 wall / floor / support 上重新组合成 site-specific sequence',
          '通过 hand、skin、eyes、sleeping body、gesture 等重复 motif 在异质来源之间建立视觉回声',
          '允许同一 image 在不同展览被再次使用并改变邻接关系，使 archive 持续产生新叙事而非成为封闭系列',
        ],
        sourceUrl: altinIstanbul,
        images: [],
        relations: [
          rel('展览', 'Processing — Camera Austria, Graz', '2017 solo exhibition'),
          rel('展览', 'Lens — Merano Arte', '2019 solo exhibition'),
        ],
      },
      {
        title: 'Each Moment is a Portal (Jurema)',
        cluster: 'site-specific installation / body as portal / passage',
        period: '2019',
        summary: 'Istanbul Biennial commission 将“身体本身是 portal”这一概念推到空间层面。Altın 与 Ali Altın、Jochen Goerlach 合作，把图像、painting / photographic fragments 与 passage 的概念组织成可穿行 installation；touch 和 surrender 不只是图像主题，也成为观众通过空间的身体条件。',
        actions: [
          '从既有 image archive 中选择与 transition、touch、opening、body threshold 相关的图像',
          '与 Ali Altın、Jochen Goerlach 协作，根据 venue 重新规划 installation dimensions',
          '把不同 image supports 安排成 portal / passage-like spatial relation，而非单排墙面 hanging',
          '利用身体穿过、靠近和转身才能看完整图像的观看条件强化“passage”',
          '让 found image 与 artist-made material 保持同等地位，使 portal 同时发生在 material、narrative 和 viewer movement 层面',
        ],
        sourceUrl: altinIstanbul,
        images: [],
        relations: [rel('展览', '16th Istanbul Biennial — The Seventh Continent', '2019 commission')],
      },
      {
        title: 'Translucent shield (calling)',
        cluster: 'canvas photo-collage / childbirth documentation / transparent white overprint',
        period: '2022',
        summary: '作品把 found black-and-white photographs 与艺术家陪伴朋友分娩时自己拍摄的照片一起印在 white canvas 上；birth、death 与 state transition 的图像被透明白墨覆盖，像过曝、瓷屏或半透膜，使 inside / outside 和出现 / 消失同时发生。',
        actions: [
          '将 found archival images 与亲自拍摄的 childbirth photographs 放进同一 collage，不区分 public / intimate source',
          '先在 digital / compositional stage 中重叠身体、手势与 transition motifs',
          '把 composite image 输出到 white canvas，而不是常规 photographic paper',
          '再以 transparent white ink 覆盖部分图像，制造 overexposure / porcelain-screen effect',
          '利用半透明遮蔽使 birth / death 不被直接说明，而成为身体跨越状态时的 liminal diagram',
        ],
        sourceUrl: altinVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: ['Hannah-Höch-Förderpreis — 2024', 'Tiemann Prize — 2024'],
    exhibitions: ['Processing — Camera Austria 2017', 'Lens — Merano Arte 2019', '16th Istanbul Biennial 2019', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'Istanbul Biennial · Özlem Altın', url: altinIstanbul },
      { label: 'La Biennale · Özlem Altın 2022', url: altinVenice },
      { label: 'THE PILL · artist exhibition history / method context', url: altinPill },
    ],
  },

  'venice-noor-abuarafeh': {
    artistId: 'venice-noor-abuarafeh',
    projectCoverage: '3 个 absent archive / buried art / museum-zoo-cemetery 节点已建立深档案 · 2014–2018',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Abuarafeh 的研究重点不是简单“保存巴勒斯坦记忆”，而是追踪保存机制本身的漏洞：没有 archive 时怎样写史、作品被埋在地下时怎样证明存在、museum / zoo / cemetery 又怎样把活物与历史转成可展示对象。',
    projects: [
      {
        title: 'Observational Desire on a Memory that Remains',
        cluster: 'Palestinian art archive / interviews / five-channel memory reconstruction',
        period: '2014',
        summary: '项目从一张 1985 Jerusalem group exhibition photograph 开始。由于当时 Palestinian art institutions 尚未形成完整 archive，艺术家通过访问艺术家、阅读文章、查个人档案和追问照片中人物，尝试以明确承认“单一视角”的方式重建一段缺失的艺术史。',
        actions: [
          '从一张 1985 年 Palestinian artists group photograph 作为 investigation trigger',
          '采访图中 / 同时期艺术家，并把 oral recollection 与 existing written articles 互相比对',
          '寻找 personal archives，而不是假设国家 / institution 已保存完整记录',
          '把互相矛盾或缺失的记忆保留下来，不用统一 chronology 强行修补',
          '将材料组织成 five-video / five-LCD installation，并借 parrhesia 概念公开“讲述者立场”对历史书写的影响',
        ],
        sourceUrl: abuarafehMemory,
        images: [],
        relations: [rel('奖项', 'Young Artist of the Year Award context — A.M. Qattan Foundation', '2014 project documentation')],
      },
      {
        title: 'Only the Earth Doesn’t Tell its Secrets / The Earth Doesn’t Tell Its Secrets',
        cluster: 'buried artworks / absent museum / publication as counter-archive',
        period: '2013–2017',
        summary: '在研究 Palestinian art archive 时，Abuarafeh 了解到 prisoner-made artworks 常被访客偷偷带出监狱并埋在地下保存。她拍摄的不是作品本身，而是埋藏地点的土地；随后出版项目又追问“第一座 Palestinian museum”反复出现却无法稳定落地的神话。',
        actions: [
          '跟随 former prisoner / guide 前往被埋藏 artworks 的具体地点',
          '只拍摄 covering earth 与 landscape，不挖出对象来证明真实性',
          '将 absence 当作 archive evidence：照片证明的是“无法看到”而不是 object appearance',
          '继续访问 institutions / private collections，追踪“Palestine first museum”不同版本的传闻和计划',
          '把 research 写成 publication / novel-like form，使 fiction、rumour 与 factual fragment 被并置而不假装拥有 definitive museum history',
        ],
        sourceUrl: abuarafehEarth,
        images: [],
        relations: [rel('出版', 'The Earth Doesn’t Tell Its Secrets — His Father Once Said', 'Sharjah Art Foundation · 2017')],
      },
      {
        title: 'Am I the Ageless Object at the Museum?',
        cluster: 'zoo-museum-cemetery comparison / live-taxidermied animals / voice-over essay film',
        period: '2018；Venice 2022',
        summary: '影片穿行 Palestine、Switzerland、Egypt 的 zoos，并剪入 natural-history museum 的 stuffed animals 与 pinned insects。活体动物在笼内逐渐像 museum object；museum、zoo、cemetery 都被重新读成“保存 / 分类 / 展示”的制度机器。',
        actions: [
          '在 Palestine、Switzerland、Egypt 多地 zoos 实拍 live animals 与 visitor environment',
          '另外拍摄 natural-history museum 中 stuffed animals、insects 和 specimen display',
          '通过 editing 把 live / dead、cage / vitrine 的视觉结构互相匹配',
          '加入关于 childhood zodiac memories、hippo evolution、whale mythology 的 voice-over，使 personal memory 与 institutional classification 交错',
          '由艺术家本人负责 writing / directing / production，并与 editor / sound designer 协作保持 essay-film 的非线性推理',
        ],
        sourceUrl: abuarafehVenice,
        images: [],
        relations: [
          rel('展览', '11th Berlin Biennale', '2020'),
          rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale'),
        ],
      },
    ],
    awards: [],
    exhibitions: ['11th Berlin Biennale — 2020', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'A.M. Qattan Foundation · Observational Desire documentation', url: abuarafehMemory },
      { label: 'West Space · Only the Earth Doesn’t Tell its Secrets', url: abuarafehEarth },
      { label: 'La Biennale · Noor Abuarafeh 2022', url: abuarafehVenice },
    ],
  },

  'venice-barbara-kruger': {
    artistId: 'venice-barbara-kruger',
    projectCoverage: '3 个 editorial appropriation / architecture wrap / multichannel address 方法阶段已建立深档案 · late 1970s–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选方法 / 项目档案，尚非作品全集。Kruger 的关键不是“红白黑字体风格”，而是将 magazine editing 中的 crop、caption、scale 与 direct address 逐步扩展到 room wrap、moving image、audio 和整栋建筑，让权力语言从图像表面进入观众身体所在的空间。',
    projects: [
      {
        title: 'Untitled image-text works / We Will No Longer Be Seen and Not Heard',
        cluster: 'mass-media photograph / Futura-Helvetica text / direct address',
        period: 'late 1970s–1980s',
        summary: 'Kruger 将 graphic design / picture editing 经验转成艺术方法：从 magazine / mass-media 找到 black-and-white photographs，裁切后叠加极短的 pronoun-heavy statements。文字不是图注，而像广告、命令和政治标语同时向 viewer 发话。',
        actions: [
          '从 magazines / mass-media image culture 中选择已有 black-and-white photographs',
          '通过 cropping、reframing 和 scale 改变原图的叙事位置',
          '使用 Futura Bold Oblique / Helvetica Ultra Condensed 等 editorial typography 构造高强度 headline',
          '以 I / you / we 等 pronouns 和 command structure 让 viewer 被直接卷入句子',
          '把 image + text 输出成 print / poster / photograph 等可复制 formats，故意贴近 advertising distribution language',
        ],
        sourceUrl: krugerVenice,
        images: [],
        relations: [rel('收藏', 'MoMA', 'multiple Untitled / We Will No Longer Be Seen and Not Heard works in collection')],
      },
      {
        title: 'Thinking of You. I Mean Me. I Mean You.',
        cluster: 'room wrap / re-editing iconic works / architecture as page',
        period: '2019–2022',
        summary: '这场跨 LACMA、Art Institute Chicago、MoMA 的 survey 不是把旧作按年代挂墙，而是让 Kruger 重新编辑自己的 iconic phrases，并将 floor、wall、atrium、video 和 sound 全部当作 publishing surface。观众必须在文字内部行走。',
        actions: [
          '重做 / rephrase 既有 canonical slogans，而不是把历史作品只做 archival display',
          '以 large-scale vinyl wrap 覆盖 walls / floor / architectural planes，使 typography 服从具体 site dimensions',
          '加入 single- / multi-channel digital video，使 text 能移动、重播、打断和覆盖',
          '在 museum circulation 中安排不同 statements，使 viewer 走路本身决定阅读顺序',
          '加入 audio soundscape，把 visual address 扩展到无法移开视线来逃离的声场',
        ],
        sourceUrl: krugerMoma,
        images: [],
        relations: [
          rel('展览', 'Art Institute of Chicago / LACMA / MoMA', '2021–2023 touring survey'),
        ],
      },
      {
        title: 'Untitled (Beginning/Middle/End) / PLEASE CARE, PLEASE MOURN',
        cluster: 'site-specific Corderie / three-channel video / word-object environment',
        period: '2022',
        summary: '为 Venice Corderie 尽端空间定制的新 installation 将 slogans、poetry、word-objects 和 three-channel video 按现场尺度铺开。PLEASE CARE / PLEASE MOURN 等请求式命令通过巨大文字包围观众，把看似 disembodied media address 重新逼回真实身体、viscera 与 excreta。',
        actions: [
          '根据 Corderie endpoint 的 specific dimensions 先测量并 mapping graphic / video layout',
          '同时制作 large-scale static text surfaces 与 three-channel moving-image component',
          '将 slogans、poetry fragments 与 physical word-objects 分布在不同观看高度和方向',
          '使用 direct imperative phrases 让观众无法保持“旁观者”语法位置',
          '把 room scale、sound / moving text 与身体移动结合，使信息过载成为作品 experience 而不仅是视觉风格',
        ],
        sourceUrl: krugerVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Corderie, Arsenale')],
      },
    ],
    awards: ['Golden Lion for Lifetime Achievement — Venice Biennale 2005'],
    exhibitions: ['Thinking of You. I Mean Me. I Mean You. — Art Institute / LACMA / MoMA 2021–2023', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'La Biennale · Barbara Kruger 2022', url: krugerVenice },
      { label: 'MoMA · Thinking of You. I Mean Me. I Mean You.', url: krugerMoma },
      { label: 'LACMA · Barbara Kruger survey', url: krugerLacma },
    ],
  },

  'venice-tishan-hsu': {
    artistId: 'venice-tishan-hsu',
    projectCoverage: '3 个 screen-flesh / tiled body / medical-surveillance hybrid 阶段已建立深档案 · 1980s–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Hsu 在 1980s 就把 computer-screen texture 与肉身混在一起；到 2020s，这个逻辑进一步加入 UV inkjet、silicone、medical thermometer、phone / bed / breath 等具体接口。不是“科技感绘画”，而是长期研究身体被屏幕化以后会变成什么。',
    projects: [
      {
        title: 'Cell',
        cluster: 'bulging panel / alkyd-rubber-aluminium / screen-flesh architecture',
        period: '1987',
        summary: '四块大型 panel 以 oil、alkyd、enamel、acrylic、rubber、aluminium 和 vinyl cement compound 堆出厚重表面。作品既像 tiled wall / machine housing，又出现孔洞、器官和 screen static 的暗示，把 Minimalist object 的工业冷静变成近乎身体组织的建筑皮肤。',
        actions: [
          '在 wood panels 上结合 oil / alkyd / enamel / acrylic，建立接近 industrial finish 的多层表面',
          '加入 rubber、aluminium 与 vinyl cement compound，使平面真正产生 bulge / relief 而非仅画出立体感',
          '以 four-panel 结构扩展到约 8×16 feet，让 viewer 面对近 architectural scale 的“身体屏幕”',
          '将 geometric grid / screen texture 与 orifice / flesh-like form 同时存在，拒绝纯抽象或具象分类',
          '把自己早期 word-processor / computer exposure 的 visual memory 转译成 surface，而不是直接描绘电脑',
        ],
        sourceUrl: hsuCell,
        images: [],
        relations: [rel('收藏', 'Museum of Modern Art, New York', 'Cell · 1987')],
      },
      {
        title: 'Liquid Circuit — early technology/body survey',
        cluster: '1980s techno-body / screen texture / sculptural painting',
        period: '1980s；survey 2020',
        summary: 'Hammer 的首个美国 museum survey 重新显示 Hsu 1980s 的核心问题：在大众尚未普遍接触电脑时，他已经把 screen、digital data、static、body opening 和 synthetic architectural surface 融在一起。系列价值在于预见技术不再是外部工具，而会进入身体知觉本身。',
        actions: [
          '持续从 emerging information-age display / screen aesthetics 抽取 grid、pixel-like noise、industrial colour',
          '将 Minimalist reduced form 改造成 bulging / porous / bodily object，破坏纯几何中性',
          '使用 synthetic resin、tile-like modularity、rubber / metal 等材料强调“manufactured flesh”',
          '让 work 同时占据 painting 和 low-relief sculpture 的位置，使 screen 不再只是窗口而像器官表面',
          '在 2020 survey 中按历史脉络重新并置早期作品，凸显 AI / digital-body 问题早于今天的技术语境',
        ],
        sourceUrl: hsuHammer,
        images: [],
        relations: [rel('展览', 'Tishan Hsu: Liquid Circuit — Hammer Museum', '2020 US museum survey')],
      },
      {
        title: 'Phone-Breath-Bed / Watching / Breath',
        cluster: 'UV inkjet + silicone / medical apparatus / emotional surveillance',
        period: '2021–2022',
        summary: '近期作品把早期 screen-flesh 进一步物质化：Phone-Breath-Bed 由 polycarbonate、silicone、stainless steel wire cloth、UV-cured inkjet、wood、steel、plastic 组成；Watching 将 nipple、navel、thermometer-gun display 与 emotional-surveillance imagery 压在 raster pattern 中；Breath 系列则让 silicone growth 像呼吸器官从图像表面凸出。',
        actions: [
          '用 UV-cured inkjet 将 digital image 直接输出到非传统 sculptural support / panel 上',
          '加入 silicone 形成真实柔软凸起，使 screen image 与 skin-like material 在同一表面接触',
          '在 Phone-Breath-Bed 中组合 polycarbonate、steel wire cloth、plastic 等接近 medical / furniture apparatus 的工业材料',
          '将 thermometer-gun display、nipple、belly button、emotional surveillance visual data 重新采样到 Watching 的 raster field',
          '通过 protrusion / hole / breath motif 让 digital connection、medical life-support 与 bodily vulnerability 互相重叠',
        ],
        sourceUrl: hsuVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: [],
    exhibitions: ['Tishan Hsu: Liquid Circuit — Hammer Museum 2020', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'MoMA · Cell', url: hsuCell },
      { label: 'Hammer Museum · Liquid Circuit', url: hsuHammer },
      { label: 'Miguel Abreu Gallery · recent works/materials', url: hsuWorks },
      { label: 'La Biennale · Tishan Hsu 2022', url: hsuVenice },
    ],
  },

  'venice-zhenya-machneva': {
    artistId: 'venice-zhenya-machneva',
    projectCoverage: '3 个 disappearing-industry / machine-animal tapestry / human-machine hybrid 阶段已建立深档案 · 2012–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Machneva 的关键反差是：她用极慢的 manual loom 去描绘现代工业曾经追求的高速、高效和机械秩序。织造劳动本身因此既复制工厂纪律，也抵抗数字图像的即时生产。',
    projects: [
      {
        title: 'Houses that are disappearing',
        cluster: 'manual loom / disappearing architecture / long-duration series',
        period: '2012–2021',
        summary: '长期系列以手工 tapestry 记录不断消失、废弃或被更新的工业 / 城市建筑。织毯需要极长时间逐纬建立图像，因此建筑可能在作品完成前已经改变或消失，手工时间与 redevelopment speed 形成直接冲突。',
        actions: [
          '在城市与 industrial periphery 持续拍摄 / 记录即将消失的 houses、factories 与 structures',
          '将 photographic / observed architecture 转译成可在 manual loom 上执行的 colour / shape plan',
          '用 cotton 与 synthetic yarn 逐线 hand-weave，而不使用高速 jacquard / digital textile production',
          '允许 tapestry 的低分辨率结构简化窗、管线和机械细节，使工业图像变成 memory texture',
          '让多年重复制作本身记录 urban disappearance 的速度差',
        ],
        sourceUrl: machnevaGallery,
        images: [],
        relations: [],
      },
      {
        title: 'Elephant Head / Portrait / Totem / A Dog',
        cluster: 'industrial machine portrait / animal-human analogy / woven uncanny',
        period: '2020–2021',
        summary: '在访问祖父工作四十年的 Leningrad telephone-equipment factory 后，Machneva 开始让 obsolete machinery 看起来像 face、animal 或 totem。Elephant Head、Portrait、Totem、A Dog 都从 bolts、pipes、panels 等 mechanical forms 中提取拟人 / 拟兽轮廓。',
        actions: [
          '以 grandfather’s factory memory 与 abandoned industrial sites 作为 machine-image archive 来源',
          '从真实 equipment 中寻找 elephant head、dog、face、totem 等 pareidolia-like resemblance',
          '把硬质 steel / mechanical form 转译成 cotton / linen / synthetic yarn 的柔软 woven surface',
          '在 manual loom 中简化 tonal gradients，使 machine portrait 更接近图标 / mask',
          '借 human / animal analogy 打破“technology = purely rational”想象，使废弃机器重新获得 character',
        ],
        sourceUrl: machnevaVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Arsenale presentation included 2020–2021 works')],
      },
      {
        title: 'Echo / A Girl',
        cluster: 'abandoned furnace / machine mask / avant-garde human-machine body',
        period: '2021–2022',
        summary: 'Echo 来自在 Budapest 郊区 abandoned train depot 发现的 furnace：bolts、gaskets、wires 在 tapestry 中变成 mask-like automaton；A Girl 则进一步把 early-20th-century avant-garde 的 human-machine hybrid 想象重新织回当代。',
        actions: [
          '实地观察 abandoned train depot / furnace 等过时设备，而非从 generic machine image 出发',
          '选择 bolts、gaskets、snaking wires 等局部构成 frontal face / mask structure',
          '以 cotton、linen 与 synthetic fibres 手工织出金属光泽和阴影，同时保留 thread softness',
          '在 A Girl 中有意识引入 human-machine hybrid silhouette，使工业物不再只作为 landscape fragment',
          '将 manual weaving 的缓慢劳动与被描绘机器曾代表的 efficiency / automation 形成 material contradiction',
        ],
        sourceUrl: machnevaGallery,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'GP & N Vallois · Zhenya Machneva works', url: machnevaGallery },
      { label: 'La Biennale · Zhenya Machneva 2022', url: machnevaVenice },
    ],
  },
};
