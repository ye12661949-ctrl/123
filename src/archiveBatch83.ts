import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const enzoVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/chiara-enzo';
const enzoSite = 'https://www.chiaraenzo.it/';

const eradzeVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/andro-eradze';
const eradzeSpazioA = 'https://www.spazioa.it/andro-eradze/';
const eradzeArtissima = 'https://www.artissima.art/en/special-projects-in-town/';

const esbellVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/jaider-esbell';
const esbellCartier = 'https://www.fondationcartier.com/en/collection/artists/jaider-esbell';
const esbellMakunaima = 'https://www.jaideresbell.com.br/site/2019/02/26/passo-a-passo-makunaima/';
const esbellPiatai = 'https://www.jaideresbell.com.br/site/2019/08/01/piatai-datai-no-tempo-de-makunaimi/';

const fanVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/jes-fan';
const fanMother = 'https://emptygallery.com/exhibitions/eg10motherisawoman/';
const fanSites = 'https://www.andrewkreps.com/exhibitions/jes-fan3/press-release';
const fanTiffany = 'https://www.louiscomforttiffanyfoundation.org/2024/jes-fan';

const elsaVenice = 'https://www.labiennale.org/en/art/2022/seduction-cyborg/elsa-von-freytag-loringhoven';
const finiVenice = 'https://www.labiennale.org/en/art/2022/witchs-cradle/leonor-fini';
const finiEstate = 'https://www.leonor-fini.com/en/paintings/';
const finiParis = 'https://parismusees.paris.fr/en/exposition/leonor-fini';

export const archiveBatch83: Record<string, ArtistArchive> = {
  'venice-chiara-enzo': {
    artistId: 'venice-chiara-enzo',
    projectCoverage: '1 个完整 installation / painting method 节点已建立深档案 · 2022',
    imageCoverage: '0 / 1 项目暂不使用不稳定外链图像',
    note: '当前先把资料最稳定的 Conversation Piece 做深，不为了数量把零散单幅误写成独立长期系列。后续继续从艺术家作品档案补早期项目。',
    projects: [
      {
        title: 'Conversation Piece',
        cluster: 'small-scale painting / fragmented skin / spatialised ensemble',
        period: '2022',
        summary: '超过二十幅小尺幅绘画被当作一个 total environment。Enzo 从真人观察、杂志、社交媒体与历史医学书中提取皮肤、腹部、肋骨、颈背等局部，以极近距离细密描绘，再通过空间化悬挂迫使观众在“贴近看单幅”与“退后看整体”之间来回移动。',
        actions: [
          '同时从 life observation、magazine、social media 与 historical medical books 建立身体图像库',
          '裁取 freckled skin、neck、ribcage、belly、tight-clothing impressions 等局部，主动去掉完整身体身份',
          '在小画面上用 dense textured marks 放大 bump、nick、hair、crease 等表面细节',
          '制作 20+ works 后不按单幅中心作品排列，而把整组设计成 spatialised installation',
          '利用小尺寸迫使 viewer 靠近，让 skin 同时显得 intimate、tactile 与 threatening',
        ],
        sourceUrl: enzoVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Central Pavilion · 21+ works')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'La Biennale · Chiara Enzo 2022', url: enzoVenice },
      { label: 'Chiara Enzo · official archive', url: enzoSite },
    ],
  },

  'venice-andro-eradze': {
    artistId: 'venice-andro-eradze',
    projectCoverage: '3 个 ominous-landscape / fenced-image / interspecies-film 节点已建立深档案 · 2019–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Eradze 的关键不是“黑暗电影感”，而是把动物、植物、火、洪水、风与人类设施安排在事件即将发生但尚未发生的过渡状态；soundtrack 与 installation support 共同制造这种悬置。',
    projects: [
      {
        title: 'Sails',
        cluster: 'HD video / transitional landscape / suspended event',
        period: '2019',
        summary: '早期录像已经形成 Eradze 后来的核心语法：景观不是背景，而像在等待某个不可见事件。camera 停留在风、暗光和环境变化上，使叙事始终处于“即将发生”的状态。',
        actions: [
          '以 HD video 拍摄 ordinary landscape / environmental movement，而不设置完整角色剧情',
          '延长 wind、light、vegetation 等 transition shots，使它们从过场变成主体',
          '通过 ambient / haunting sound 连接彼此分离的镜头',
          '保留 narrative ambiguity，不解释画外事件发生了什么',
        ],
        sourceUrl: eradzeSpazioA,
        images: [],
        relations: [],
      },
      {
        title: 'Mouth of Darkness / fenced photographic works',
        cluster: 'digital print / metal fence + spikes / image as enclosure',
        period: '2020',
        summary: '摄影图像被装在真实 metal fence 与 spikes 中。展示结构不再中性：边界、保护、囚禁和危险被变成照片本身的物理条件。',
        actions: [
          '输出 digital photographs 后，不用传统 frame，而固定到 metal fence structure',
          '加入 metal spikes，使作品支撑同时具有防御 / 排除功能',
          '让 animal / landscape image 与 human-built barrier 直接发生材料冲突',
          '通过 repeated fence format 把观看变成“隔着障碍看”的身体关系',
        ],
        sourceUrl: eradzeSpazioA,
        images: [],
        relations: [rel('展览', 'Mouth of darkness — Tbilisi public space', '2020')],
      },
      {
        title: 'Raised in the dust',
        cluster: 'forest film / taxidermy / fireworks / interspecies disturbance',
        period: '2022',
        summary: '受 Vazha-Pshavela《The Snake Eater》结尾启发，影片把 taxidermized animals 逐一置入森林，并让 New Year fireworks 的轰鸣侵入环境。庆典从人类视角的欢乐转成动物世界中的 toxic / fatal disturbance。',
        actions: [
          '在 forest 中拍摄，而不是搭建完全人工 set',
          '逐一放置 taxidermized animals，使死亡动物像幽灵般重新进入 habitat',
          '以 fireworks sound / light 作为人类存在的主要痕迹，不必出现 crowds',
          '组织 smouldering fire、wind-whipped trees、animal stillness 等 transitional images',
          '与 cinematography、colour grading、sound design、special-effects 团队协作完成 film installation',
        ],
        sourceUrl: eradzeVenice,
        images: [],
        relations: [
          rel('奖项', 'Biennale College Arte grant', 'inaugural edition · 2021–2022'),
          rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Arsenale · participation out of competition'),
          rel('展览', 'Raised in the Dust — Artissima / former Zoo of Torino', '2024'),
        ],
      },
    ],
    awards: ['Biennale College Arte grant — 2021/22'],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022 · out of competition', 'Raised in the Dust — Artissima 2024'],
    sources: [
      { label: 'La Biennale · Andro Eradze 2022', url: eradzeVenice },
      { label: 'SpazioA · artist works / exhibitions', url: eradzeSpazioA },
      { label: 'Artissima · Raised in the Dust', url: eradzeArtissima },
    ],
  },

  'venice-jaider-esbell': {
    artistId: 'venice-jaider-esbell',
    projectCoverage: '3 个 Makunaimî / artivism / Indigenous-curating 节点已建立深档案 · 2017–2021',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Esbell 的实践不能只按 paintings 理解：Makuxi oral history、writing、gallery-building、education、curating 与 land-rights activism 都属于他所谓的 artivism。',
    projects: [
      {
        title: 'Transmakunaimî: o buraco é mais embaixo',
        cluster: 'Makuxi cosmology / colonial encounter / acrylic painting',
        period: '2017–2018',
        summary: '系列以 Makunaimî——Makuxi 祖先与变形者——为核心。A vaca、A luta do boi com Makunaimî 等作品把 cattle / colonial invasion 与 Caribbean-Amazon living forces 放在同一 cosmological field，抽象形态仍指向具体领土冲突。',
        actions: [
          '从祖父辈口述的 Makunaimî stories 而非 Mario de Andrade 的现代主义改写作为主要知识来源',
          '使用 acrylic painting 建立高度抽象但持续可追溯到 animal / ancestor / territory 的 forms',
          '把 cattle、colonial invasion 与 Indigenous cosmology 放在同一画面，而非把殖民史留作外部说明',
          '以系列重复 Makunaimî 的 transformation，使形态不断改变而不固定为单一 icon',
        ],
        sourceUrl: esbellVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · posthumous Arsenale presentation')],
      },
      {
        title: 'Passo a Passo Makunaima / Piatai Datai — No tempo de Makunaimî',
        cluster: 'travelling research / writing / education / gallery network',
        period: '2018–2019',
        summary: 'Esbell 将 Makunaimî 研究扩展成 travelling, writing, exhibition 和 education project，主动追踪 Indigenous oral narrative 如何被 Brazilian modernism appropriation，再把祖先故事重新带回 Makuxi contemporary authorship。',
        actions: [
          '在不同城市展开 Passo a Passo Makunaima travelling / research route',
          '写作 essays 将 Makunaimî、Makunaíma、Makunaima 三种拼写对应到不同知识 / appropriation histories',
          '利用自己 2013 年创办的 Boa Vista gallery 展示作品、library 并开展 free education',
          '与 Makuxi / other Indigenous artists、students、researchers 共同组织 actions，而非个人 studio-only practice',
          '把 modernist canon 中“Macunaíma”重新与 living Makuxi territory 和 descendants 连接',
        ],
        sourceUrl: esbellMakunaima,
        images: [],
        relations: [rel('策展', 'Piatai Datai — No tempo de Makunaimî', '2019 · Boa Vista / Sesc-RR')],
      },
      {
        title: 'Makunaimî cria o espelho universal / Moquêm_Surarî',
        cluster: 'painting + Indigenous-curatorial platform / artivism',
        period: '2021',
        summary: '晚期 Esbell 同时继续 Makunaimî 绘画，并在 São Paulo Biennial context 组织 Indigenous contemporary-art visibility。艺术家、writer、educator 与 curator 的身份被主动合并成 land / culture advocacy 的公共实践。',
        actions: [
          '继续以 Makunaimî 为 living ancestor 创作大尺幅 acrylic painting，而不是 folklore illustration',
          '组织 / 支持 Brazilian Indigenous artists 的 collective visibility 与 exhibition-making',
          '将 independent curating 称为 piya’san / shaman-curating，把 Indigenous knowledge authority 带入 institution',
          '把 gallery、writing、public speaking 与 painting 共同定义为 artivism',
        ],
        sourceUrl: esbellCartier,
        images: [],
        relations: [
          rel('策展', 'Moquêm_Surarî — Indigenous contemporary art exhibition / São Paulo Biennial context', '2021'),
          rel('收藏', 'Fondation Cartier', 'Makunaimî cria o espelho universal · 2021'),
          rel('奖项', 'PIPA Prize', '2016 · enabled full-time art practice'),
        ],
      },
    ],
    awards: ['PIPA Prize — 2016'],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022 · posthumous presentation'],
    sources: [
      { label: 'La Biennale · Jaider Esbell 2022', url: esbellVenice },
      { label: 'Fondation Cartier · Jaider Esbell collection profile', url: esbellCartier },
      { label: 'Jaider Esbell · Passo a Passo Makunaima', url: esbellMakunaima },
      { label: 'Jaider Esbell · Piatai Datai', url: esbellPiatai },
    ],
  },

  'venice-jes-fan': {
    artistId: 'venice-jes-fan',
    projectCoverage: '3 个 hormone-material / blown-glass biology / wounded-ecology 节点已建立深档案 · 2018–2024',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Fan 的关键不是把 hormone 当主题，而是让 melanin、testosterone、oestrogen、soy、urine、glass、resin 与 later Agarwood / oyster research 真实进入材料链，从“身份生物标记”逐步转向受伤生态系统。',
    projects: [
      {
        title: 'Mother Is A Woman / Systems II',
        cluster: 'biopolitics / hormone material / hand-blown glass',
        period: '2018',
        summary: 'Mother Is A Woman 阶段把 soy、depo-testosterone、mother’s urine 等 biological substances 纳入 sculpture / video；Systems II 则让 melanin、testosterone、oestrogen 被封在 hand-blown glass globules 中，再悬挂于 rigid resin / metal armature。',
        actions: [
          '以 expanded sculpture 而非 illustration 处理 gender / race 的 biological markers',
          '手工吹制 transparent glass globules，使容器本身具有 bulging / bodily form',
          '向玻璃中注入或封存 melanin、testosterone、oestrogen 等真实 substances',
          '将柔软下垂的 glass forms 与 rigid resin / metal structure 组合',
          '在 Mother Is A Woman 中把 maternal urine、soy / testosterone materials 与 moving image 并置，拆解“biology = stable identity”的假设',
        ],
        sourceUrl: fanMother,
        images: [],
        relations: [rel('展览', 'Mother Is A Woman — Empty Gallery', '2018 · first solo exhibition in Asia')],
      },
      {
        title: 'Wounding / Apparatus / Fragrant Harbour',
        cluster: 'gland-like sculpture / prolactin / body-technology interiority',
        period: '2022',
        summary: 'Venice 的新作将此前 hormone / glass language 扩展成类似 gland、nesting organ 和 technological apparatus 的大型雕塑，继续处理身体内部、分泌与技术支架之间的纠缠。',
        actions: [
          '将 blown glass、aqua resin、metal、wood、silicone 等材料组合成 multi-part organ-like structures',
          '继续让 glass 作为可容纳 biological substance 的 transparent membrane，而非纯装饰',
          '把 sculpture 组织成 gland / interior-body analogy，但拒绝制作准确 anatomical model',
          '以 rigid armature 承托 soft / bulbous forms，使 technology 与 organism 互相依赖',
          '将 2018 的 identity-marker research 汇总成更大尺度的 animistic body-machine system',
        ],
        sourceUrl: fanVenice,
        images: [],
        relations: [
          rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale'),
          rel('奖项', 'Pollock-Krasner Grant', '2022'),
        ],
      },
      {
        title: 'Sites of Wounding',
        cluster: 'Agarwood / pearl-oyster / CT body scan / wound as material production',
        period: '2023–2024',
        summary: '后续项目把 focus 从 human biological essentialism 推向 wounded ecosystems：Agarwood 受伤后产生香脂，pearl oysters 因异物进入生成珍珠。Fan 将这些“伤口生产价值”的过程与殖民 extraction 和自己身体的 CT scan 并置。',
        actions: [
          '与 biologists、farmers、medical institutions 合作研究 wound-induced material production',
          '研究 Hong Kong native Agarwood 与 pearl-oyster species 的 contamination / healing process',
          '3D print 自己 musculature 的 CT scans，并与 traditional glass-blowing 组合',
          '制作 homemade endoscopy video，把身体内部影像投到 boiling soy milk / skin-like surface',
          '把 colonial extraction 与 psychosomatic trauma 从 metaphor 转成材料如何因 injury 发生真实变化的机制',
        ],
        sourceUrl: fanSites,
        images: [],
        relations: [rel('展览', 'Sites of Wounding: Interchapter — Andrew Kreps Gallery', '2024')],
      },
    ],
    awards: ['Pollock-Krasner Grant — 2022', 'Louis Comfort Tiffany Foundation Award — 2024'],
    exhibitions: ['Mother Is A Woman — Empty Gallery 2018', 'The Milk of Dreams — Venice Biennale 2022', 'Sites of Wounding — 2023–2024'],
    sources: [
      { label: 'La Biennale · Jes Fan 2022', url: fanVenice },
      { label: 'Empty Gallery · Mother Is A Woman', url: fanMother },
      { label: 'Andrew Kreps Gallery · Sites of Wounding', url: fanSites },
      { label: 'Louis Comfort Tiffany Foundation · Jes Fan', url: fanTiffany },
    ],
  },

  'venice-elsa-von-freytag-loringhoven': {
    artistId: 'venice-elsa-von-freytag-loringhoven',
    projectCoverage: '3 个 self-adornment / readymade assemblage / erotic-cyborg 节点已建立深档案 · 1910s–1920',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选历史档案，尚非作品全集。Elsa 的身体装扮、found-object assemblage 与 Dada persona 不能拆开看：她把垃圾、日用品、服装与性别表演全部并入一个会在街上移动的“作品身体”。',
    projects: [
      {
        title: 'Street / studio self-adornment performances',
        cluster: 'found objects / body assemblage / gender performance',
        period: '1910s',
        summary: '摄影留下她在 Greenwich Village 以 feathered helmet、striped leotard、stolen / found objects 装饰身体的形象。persona 不是作品外部生活方式，而是将 identity、garbage culture 与 erotic display 直接转成可移动 assemblage。',
        actions: [
          '从 street / garbage / everyday environment 拾取或挪用 objects 作为 wearable adornment',
          '将 found objects 与 leotard、helmet、jewellery 等穿戴在自己身体上',
          '在 club、street、studio portrait 中持续表演自创 Baroness persona',
          '利用 exaggerated pose 与 cross-gender / hybrid styling 拒绝稳定“respectable femininity”',
          '让 body 本身成为 readymade support，使 sculpture 与 performance 无法分开',
        ],
        sourceUrl: elsaVenice,
        images: [],
        relations: [rel('展览', 'Seduction of the Cyborg — Venice Biennale historical capsule', '2022 · Arsenale')],
      },
      {
        title: 'God',
        cluster: 'plumbing readymade / assemblage / industrial-body satire',
        period: 'c. 1917',
        summary: '与 Morton Schamberg 相关的 God 将 twisted plumbing / pipe form 转成具有性暗示与机械身体感的 assemblage。industrial utility 不再服务功能，而被命名和重新定位成矛盾的 sacred / erotic object。',
        actions: [
          '直接采用 industrial plumbing / pipe-like found object，而非雕刻仿造工业造型',
          '通过 orientation / presentation 移除原本 utility context',
          '以 God 这一标题把 mundane mechanism 与宗教崇高强行叠合',
          '让 mechanical joint / pipe 形态同时具有 sexual / bodily reading',
        ],
        sourceUrl: elsaVenice,
        images: [],
        relations: [rel('策展', 'Associated with Morton Schamberg in Dada histories', 'c. 1917')],
      },
      {
        title: 'Portrait of Marcel Duchamp',
        cluster: 'wine glass / feather bouquet / portrait as assemblage',
        period: '1920',
        summary: '她不用 face likeness 肖像化 Duchamp，而把 wine glass 与 feathers 组合成替身。portrait 因此从 likeness 变成 object-character：日常器物既像身体，也像 camp / erotic decoration。',
        actions: [
          '用 wine glass 取代 conventional head / bust support',
          '在 glass 上组合 feather bouquet，使 object 获得 hybrid organic silhouette',
          '通过 found-object substitution 将 portrait identity 从“长相”转成 material persona',
          '把自己 body-adornment 的 extravagance 转移到独立 assemblage object',
        ],
        sourceUrl: elsaVenice,
        images: [],
        relations: [rel('展览', 'Seduction of the Cyborg — Venice Biennale', '2022 historical capsule context')],
      },
    ],
    awards: [],
    exhibitions: ['Seduction of the Cyborg — Venice Biennale 2022 · historical capsule'],
    sources: [{ label: 'La Biennale · Elsa von Freytag-Loringhoven 2022', url: elsaVenice }],
  },

  'venice-leonor-fini': {
    artistId: 'venice-leonor-fini',
    projectCoverage: '3 个 gender-reversal / sphinx / theatrical-masquerade 节点已建立深档案 · 1939–1942',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选历史档案，尚非作品全集。Fini 与 Surrealist 圈子关系紧密却拒绝正式加入；她通过 self-masquerade、androgynous male nude、female dominance 与 sphinx 反复重写观看权力和性别角色。',
    projects: [
      {
        title: 'Autoportrait avec Chimère / La Bergère des Sphinx',
        cluster: 'self-portrait / chimera-sphinx / empowered hybrid femininity',
        period: '1939–1941',
        summary: 'Fini 把自己与 chimera / sphinx 置于同一谱系。hybrid female-feline creature 不是传统男性 Surrealism 中被观看的怪物，而成为 empowered New Woman 与 transformation 的主体。',
        actions: [
          '在 self-portrait 中将 human body 与 chimera / sphinx iconography 并置',
          '以 oil painting 保持 luxurious fabric、skin、animal body 的触觉密度',
          '反复让 female figure 占据主动 gaze / guardian position，而非被动 muse',
          '把 childhood disguise / masquerade experience 转化为长期 gender-transformation language',
        ],
        sourceUrl: finiEstate,
        images: [],
        relations: [rel('收藏', 'La Bergère des Sphinx · museum collection record noted by estate', '1941')],
      },
      {
        title: "L'Alcôve",
        cluster: 'androgynous male nude / boudoir / reversed gaze',
        period: '1941',
        summary: 'Nico Papatakis 的弯曲男性裸体在卧室中安静躺卧，Fini 坐在床边观看。传统 painting 中“男性观看 / 女性裸体”的分工被翻转，male body 被处理成柔软、androgynous、可凝视的对象。',
        actions: [
          '以真实 companion Nico Papatakis 为 nude sitter',
          '将 male nude 安排在 soft curved reclining pose，主动削弱 power / virility / stoicism',
          '把 artist-self / female figure 放在 active observing position',
          '以 boudoir、voluptuous drapery 与 still body 制造 sensual but non-heroic atmosphere',
        ],
        sourceUrl: finiVenice,
        images: [],
        relations: [rel('展览', "The Milk of Dreams / The Witch's Cradle — Venice Biennale", '2022 · Central Pavilion historical capsule')],
      },
      {
        title: 'Femme assise sur un homme nu',
        cluster: 'female dominance / sleeping male body / role reversal',
        period: '1942',
        summary: 'Fini 以厚重 velvet clothing 坐在 sleeping naked man 上方，身体等级被极其直接地倒置： clothed active woman / naked passive man。dominance、submission 与 gender role 不靠象征解释，而由人物姿态本身完成。',
        actions: [
          '将 clothed female figure 与 fully nude sleeping male 直接叠置成上下关系',
          '用 velvet / costume 的视觉重量强化女性主体的 physical authority',
          '让 male figure 保持 sleep / passivity，拒绝传统 heroic nude posture',
          '通过 landscape backdrop 把看似 private erotic arrangement 放大成近 mythic scene',
        ],
        sourceUrl: finiVenice,
        images: [],
        relations: [rel('展览', "The Milk of Dreams / The Witch's Cradle — Venice Biennale", '2022 historical context')],
      },
    ],
    awards: [],
    exhibitions: ["The Witch's Cradle — Venice Biennale 2022 · historical capsule", 'Leonor Fini retrospective — Schirn / Musée d’Art Moderne de Paris 2026–2027'],
    sources: [
      { label: 'La Biennale · Leonor Fini 2022', url: finiVenice },
      { label: 'Leonor Fini estate · paintings archive', url: finiEstate },
      { label: 'Paris Musées · Leonor Fini retrospective', url: finiParis },
    ],
  },
};