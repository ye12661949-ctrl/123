import type { ArtistArchive, ArchiveImage, ArchiveRelation } from './archiveData';

const img = (url: string, title: string, credit: string, sourceUrl: string, sourceLabel: string): ArchiveImage => ({ url, title, credit, sourceUrl, sourceLabel });
const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const orjuelaHome = 'https://www.andres-orjuela.com/proyectos';
const orjuelaCv = 'https://www.andres-orjuela.com/cv';
const orjuela27 = 'https://sketchroom.co/andres-orjuela-palomas-piedras';
const orjuelaArchive = 'https://cdf.montevideo.gub.uy/system/files/luta_y_poder.pdf';
const orjuelaInterview = 'https://puntodefugabogota.com/2023/05/16/andres-orjuela-archivo-muerto-punto-de-fuga-2023/';
const orjuelaCurrent = 'https://labalsaarte.com/en/exhibiciones/alguien-nos-ha-estado-mirando_en/';

const paansHome = 'https://www.daanpaans.nl/';
const paansCv = 'https://www.daanpaans.nl/c-v-exhibitions/';
const paansFoam = 'https://www.foam.org/events/daan-paans';
const paansLetters = 'https://www.eriskayconnection.com/letters-from-utopia/';
const paansRhinoceros = 'https://fotoexpositie.nl/exposities/daan_paans_rhinoceros.html';
const paansFloating = 'https://www.eriskayconnection.com/floating-signifiers/';
const paansTree = 'https://www.overjournal.org/article/on-image-origin-and-representation';

const krijnoHome = 'https://nicokrijno.com/';
const krijnoCv = 'https://nicokrijno.com/CV';
const krijnoSynonym = 'https://aperture.org/editorial/announcing-paris-photo-aperture-foundation-photobook-awards-2014-short-list/';
const krijnoNewGestures = 'https://www.whatiftheworld.com/exhibition/new-gestures-fabricated-to-be-photographed/';
const krijnoFluid = 'https://huxleyparlour.com/exhibitions/nico-krijno-the-fluid-right-edge/';
const krijnoBook = 'https://www.bfrankbooks.com/books/nico-krijno';
const krijnoConstellation = 'https://www.theravestijngallery.com/exhibitions/141-the-constellation-nico-krijno/';

export const archiveBatch65: Record<string, ArtistArchive> = {
  'andres-felipe-orjuela': {
    artistId: 'andres-felipe-orjuela',
    projectCoverage: '5 个核心项目 / 方法节点已建立深档案',
    imageCoverage: '1 / 5 项目已建立图像档案 · 2 张 SKETCH 展览图',
    note: '本轮把 Andrés Felipe Orjuela 从 Foam 2016 名单条目扩成一条非常清楚的“暴力图像如何被重新流通”的方法线：从剪下报纸血迹、救回被丢弃的新闻照片，到手工着色、手抄报纸、幻灯投影，再到近年转向卫星 / NASA 图像。档案只写已有来源支持的制作动作，不把展名自动当成完整项目。',
    projects: [
      {
        title: 'Muestrario', cluster: 'nota roja / 分类 / 标本化 / 1011 samples', period: '2010–2012',
        summary: '从墨西哥犯罪小报中处理“血”如何被批量印刷和消费。Orjuela 把报纸中印刷出来的血迹局部剪成小圆片，像临床实验样本一样分类，把匿名化的暴力消费反过来变成一套近乎法医式的纪念系统。',
        actions: [
          '持续收集墨西哥 nota roja / 犯罪新闻报纸中的死亡与暴力图像',
          '从印刷图像中逐个剪下表示血液的红色小圆片，而不是重新拍摄暴力现场',
          '把圆形纸片放入类似实验室玻片 / specimen 的结构中，改变原图的阅读尺度',
          '累计形成 1011 个样本，对应一年中被新闻消费的大量死亡图像',
          '在书籍与档案版本中尽量补回姓名、地点和死因，使数字重新指向具体的人',
        ],
        sourceUrl: orjuelaInterview,
        images: [],
        relations: [
          rel('出版', 'Muestrario · Ed. Chaco', 'photobook'),
          rel('展览', 'Miserere: Vestigios de una Historia · Espacio El Dorado', 'Bogotá, 2016'),
        ],
      },
      {
        title: 'Archivo Muerto', cluster: 'discarded press archive / hand-colouring / narcotics & violence', period: '2011–2018+',
        summary: '2011 年，《El Espacio》旧办公室外被丢弃的新闻摄影盒子经辗转进入 Orjuela 手中。原始黑白报纸照片原本服务于哥伦比亚犯罪与暴力新闻；他没有把它们作为“珍贵历史文献”中性展示，而是重新着色、编辑和出版，直接干预它们的观看机制。',
        actions: [
          '接手原本将被当作垃圾处理的《El Espacio》原始新闻摄影档案',
          '从大量黑白照片中重新筛选犯罪、毒品、政治暴力和大众文化相关材料',
          '以手指和小画笔将油彩 / photographic pigments 施加到纤维纸照片表面',
          '借用十九世纪早期照片手工着色的方法，把“增加真实感”的旧技术反过来制造人为性',
          '通过着色、编辑、孔洞、装订等方式重新组织犯罪人物和暴力场景，不让原新闻图片继续以原来的 voyeuristic gaze 运作',
        ],
        sourceUrl: orjuelaArchive,
        images: [],
        relations: [
          rel('展览', 'FoLa · Archivo Muerto', 'Buenos Aires, 2018 · solo'),
          rel('出版', 'Archivo Muerto · Chaco', 'artist book'),
          rel('展览', 'Foam Talent / Unseen', 'Amsterdam, 2016 · archive-related practice context'),
        ],
      },
      {
        title: '27 HRS · Palomas y Piedras', cluster: 'newspaper transcription / Amate paper / slide projection', period: '2015',
        summary: '围绕 1985 年 Palacio de Justicia 占领事件，他查阅《El Espacio》当年的报纸和电子档案，再把印刷版面转换为耗时的手工抄写 / 绘制。这里“慢”是重要方法：高速消费的新闻图像被重新变成需要身体劳动的记忆材料。',
        actions: [
          '进入 hemeroteca 查阅 1985 年《El Espacio》对 Palacio de Justicia 事件的报道与版面',
          '选择新闻文字、标题、鸽子等看似边缘的报道细节，而不是只复制最血腥图像',
          '用墨水在墨西哥原住民传统的 Amate 树皮纸上手工重写 / 重画印刷版面',
          '以 10 幅绘画和空间装置构成展览，而不是只做照片展示',
          '使用两台模拟幻灯机叠投图像；观众身体制造的阴影会暂时显露被另一层遮住的新闻碎片',
        ],
        sourceUrl: orjuela27,
        images: [
          img('https://images.squarespace-cdn.com/content/v1/559aae05e4b07172a30ffedd/1461772678492-9H2L5QHTXPXONWT4M6NV/AO_4.jpg', '27 HRS · Palomas y Piedras', '© Andrés Felipe Orjuela', orjuela27, 'SKETCH'),
          img('https://images.squarespace-cdn.com/content/v1/559aae05e4b07172a30ffedd/1461772656939-MRFYMCJWG3LEJMQS536I/AO_3.jpg', '27 HRS · drawing / installation', '© Andrés Felipe Orjuela', orjuela27, 'SKETCH'),
        ],
        relations: [rel('展览', '27 HRS · Palomas y Piedras · SKETCH', 'Bogotá, 2015 · solo')],
      },
      {
        title: 'Under the Mask', cluster: 'lucha libre album / collage / Alarma! / national history', period: '2023–2024',
        summary: '把私人摔角手收藏册与《Historia General de México》、犯罪杂志 Alarma! 等材料放进同一 collage 系统，研究英雄、男子气概、娱乐、毒品暴力和童年视觉文化如何彼此污染。',
        actions: [
          '以私人收藏的 lucha libre / wrestling album 作为底层图像结构',
          '把国家历史教科书式图像与 Alarma! 犯罪新闻重新裁切并插入相册页面',
          '通过 collage 让英雄原型、流行文化偶像与犯罪人物共享同一个视觉语法',
          '不追求档案时间线完整，而通过不相称图像并置制造历史和私人记忆之间的短路',
        ],
        sourceUrl: orjuelaHome,
        images: [],
        relations: [],
      },
      {
        title: 'Alguien nos ha estado mirando', cluster: 'satellite image / Amazon / NASA archive / Cold War', period: '2026',
        summary: '近期把对“谁有权制造世界图像”的研究从犯罪新闻推向卫星和太空视觉文化：地球、亚马逊、宇宙和 NASA 早期空间探索图像被放在冷战、现代性与征服欲望的历史中重新观看。',
        actions: [
          '收集卫星图像、Earth / Amazon imagery、宇宙图像与 NASA 早期太空探索 montage',
          '把这些看似中性的技术图像放回 Cold War 的意识形态、经济和技术扩张语境',
          '把“摄影使事物可见”与 Gerald Murnane 所写“相机也能使事物不可见”的矛盾作为展览入口',
          '把早期大众媒体研究延伸到遥感 / 太空图像：不同技术仍在规定公众能怎样想象世界',
        ],
        sourceUrl: orjuelaCurrent,
        images: [],
        relations: [rel('展览', 'Alguien nos ha estado mirando · La Balsa Arte', 'Bogotá, 2026 · solo')],
      },
    ],
    awards: [
      'Foam Talent 2016',
      'LensCulture Portrait Award · Juror’s Pick, 2018',
      'Luz del Norte Latin American Photography Prize · third place',
      'Premio Botero acquisition award, 2008',
    ],
    exhibitions: [
      'Miserere: Vestigios de una Historia — Espacio El Dorado, Bogotá, 2016',
      'Foam Talent — Unseen Amsterdam, 2016 / London + New York, 2017',
      'La Vuelta — Les Rencontres d’Arles, 2017',
      'Archivo Muerto — FoLa, Buenos Aires, 2018',
      'Alguien nos ha estado mirando — La Balsa Arte, Bogotá, 2026',
    ],
    sources: [
      { label: 'Artist · Projects', url: orjuelaHome },
      { label: 'Artist · CV / statement', url: orjuelaCv },
      { label: '27 HRS · SKETCH', url: orjuela27 },
      { label: 'Archivo Muerto · Centro de Fotografía / Kim Knoppers text', url: orjuelaArchive },
      { label: 'Archivo Muerto interview', url: orjuelaInterview },
      { label: 'La Balsa · 2026 exhibition', url: orjuelaCurrent },
    ],
  },

  'daan-paans': {
    artistId: 'daan-paans',
    projectCoverage: '5 个核心项目 / 长期研究节点已建立深档案',
    imageCoverage: '0 / 5 项目已建立可靠直链图像 · 暂不以搜索图替代',
    note: '这一轮重点不是给 Daan Paans 填“摄影风格”，而是把他非常稳定的方法结构整理出来：一个历史 / 科学 / 流行文化中的形象 → 追踪它的谱系 → 制造复制、误读或推测版本 → 用摄影、雕塑、3D、AI、书籍让图像的演化过程本身可见。图像直链仍待逐项目核对，因此先不乱放。',
    projects: [
      {
        title: 'Letters from Utopia', cluster: 'immortality / documentary research / book', period: '2011–2013',
        summary: '围绕极端延长生命甚至不死的愿望进行跨群体纪实研究。他访问五种不同 movement 及其关键人物，从过去的 occult belief 一直延伸到面向未来的科学设想。',
        actions: [
          '筛选把“延长生命 / 不死”变成组织性实践的五个群体或思想 movement',
          '访问关键人物与场所，建立肖像、设备、建筑、实验与象征物的摄影记录',
          '刻意把神秘主义、个人信念、医学 / 科学和未来主义放在同一研究框架比较',
          '与 essay、文本和设计协作，把长期调查转为 160 页摄影书，而不是单一照片系列',
          '以 Cryostats、FM-2030、cryonics 等具体对象连接抽象的“未来”想象',
        ],
        sourceUrl: paansLetters,
        images: [],
        relations: [
          rel('出版', 'Letters from Utopia · The Eriskay Connection', '2013 · first edition 750'),
          rel('展览', 'Foam · book launch', 'Amsterdam, 2013'),
        ],
      },
      {
        title: 'Rhinoceros', cluster: 'deep time / representation / three case studies', period: '2014–2016',
        summary: '项目追问：我们如何为从未亲眼见过的过去或未来制造图像？三个 case studies 分别处理十九世纪史前世界想象、今天对历史碎片的复原，以及科幻对于未来的视觉模板。',
        actions: [
          '从 Dürer 犀牛式“错误表象长期成为标准”的图像史问题进入研究',
          '比较十九世纪史前图像、Lascaux / dinosaur reconstructions 与当代重建技术',
          '把科幻视觉中未来物体与科学 / 历史的证据图像放在同一结构中分析',
          '邀请不同年龄 / ethnicity 的人不看参考图，在一分钟内画 dinosaur，测试集体图像记忆',
          '通过摄影与研究性 counter-image 暴露“看似自然的形象”其实来自此前的 representation',
        ],
        sourceUrl: paansRhinoceros,
        images: [],
        relations: [
          rel('展览', 'Rhinoceros · LhGWR', 'The Hague, 2016 · solo'),
          rel('出版', 'Foam Magazine #45 · Talent Issue', '2016'),
          rel('展览', 'Foam Talent', 'London 2016 / New York 2017'),
        ],
      },
      {
        title: 'Panta Rhei', cluster: 'copy-of-copy / Golden Idol / sculpture + photography + video', period: '2017–2019',
        summary: '用 Indiana Jones 的 Golden Idol 和被误认为前哥伦布 artefact 的形象做一场真实的“文化变异实验”：一件复制品只通过照片被传给下一位制造者，连续复制把同一对象一步步改造成新的东西。',
        actions: [
          '购买 Golden Idol 的塑料 replica 并首先拍成单面照片',
          '把这张不提供尺寸、只给一侧信息的照片交给工匠制作下一件实体 replica',
          '再拍摄第二件，把照片交给下一位制造者；每位工匠都无法接触原件',
          '让来自墨西哥、中国、乌干达、希腊、意大利、荷兰的制造者依各自材料、技术、审美和文化理解继续复制',
          '把连续生成的 artefacts、摄影和 video 放进同一展览，直接显示形态如何从生产链中漂移',
        ],
        sourceUrl: paansFoam,
        images: [],
        relations: [
          rel('展览', 'Panta Rhei · Foam 3h', 'Amsterdam, 2018–2019 · first solo museum exhibition'),
          rel('策展', 'Foam 3h presentation', 'photography + sculpture + video'),
        ],
      },
      {
        title: 'The Killing of the Tree Spirit', cluster: 'oak iconography / dataset / speculative future tree', period: '2021–2023',
        summary: '把“图像变异”问题推向自然：橡树看似是自然对象，但在文化史里已经被反复赋予力量、智慧、寿命与民族性的符号。Paans 收集大量历史橡树图像，再让软件生成一个未来版本。',
        actions: [
          '建立跨时期 oak-tree representations 的图像 dataset，比较树的姿态和符号性',
          '实地关注 Wolfheze 的 Wodan Oaks：因形态与高龄而在十九世纪绘画中获得神秘 aura',
          '使用 scientific / computational software 根据文化史 dataset 推测未来橡树形象',
          '把真实树木、历史画作、摄影与生成图像并置，不让“自然 / 人工图像”保持简单二分',
        ],
        sourceUrl: paansTree,
        images: [],
        relations: [rel('展览', 'The Killing Of The Tree Spirit · Galerie dudokdegroot', '2023')],
      },
      {
        title: 'Floating Signifiers', cluster: '10-year synthesis / 3D render / 3D print / AI programming / book', period: '2025',
        summary: '把十多年对“图像、原型与变异”的 case studies 汇编成一个新阶段：灭绝原牛、pre-human paradise、未来橡树、科幻陨石、lion man、Golden Idol 等看似无关对象被放进同一套“视觉符号如何转化”的系统。',
        actions: [
          '重新编辑十年间多个研究项目，使每个 case study 都成为 image-origin-representation 的样本',
          '将 archival research 与新摄影、雕塑、3D renders 和 3D printed objects 并置',
          '在部分研究环节明确引入 AI programming，而不把 AI 当成独立主题或风格滤镜',
          '与设计、文本、翻译和制作团队协作，把研究变成 160 页实体出版物',
          '通过跨案例对读显示原型不是消失，而是在当代视觉文化里以 transmuted forms 继续存在',
        ],
        sourceUrl: paansFloating,
        images: [],
        relations: [rel('出版', 'Floating Signifiers · The Eriskay Connection', '2025 · 160 pages')],
      },
    ],
    awards: [
      'Foam Talent 2016',
      'Foam Paul Huf Award nominee, 2013',
      'Festival de la Mode et de la Photographie Hyères · longlist, 2016',
      'Dutch Doc Award · longlist, 2010 / 2014',
      'St. Joost Academy Award, 2009',
    ],
    exhibitions: [
      'Letters from Utopia — Foam book launch, 2013',
      'Rhinoceros — LhGWR The Hague, 2016',
      'Foam Talent — London 2016 / New York 2017',
      'Panta Rhei — Foam Amsterdam, 2018–2019',
      'The Killing Of The Tree Spirit — Galerie dudokdegroot, 2023',
    ],
    sources: [
      { label: 'Artist statement', url: paansHome },
      { label: 'Artist CV', url: paansCv },
      { label: 'Letters from Utopia · Eriskay', url: paansLetters },
      { label: 'Rhinoceros', url: paansRhinoceros },
      { label: 'Panta Rhei · Foam', url: paansFoam },
      { label: 'The Killing of the Tree Spirit · OVER Journal', url: paansTree },
      { label: 'Floating Signifiers · Eriskay', url: paansFloating },
    ],
  },

  'nico-krijno': {
    artistId: 'nico-krijno',
    projectCoverage: '5 个核心项目 / 编辑节点已建立深档案',
    imageCoverage: '1 / 5 项目已建立图像档案 · 2 张 Huxley-Parlour 作品图',
    note: 'Nico Krijno 自己明确说他的实践并不真正按固定 series 分段，因此这里没有强行假装存在五套彼此独立的系列，而是选择五个清楚的出版 / 展览节点来追踪同一条方法链：收集废弃物 → 临时雕塑 / 身体表演 → 拍摄 → Photoshop / paint / collage → 书籍 / 空间再编辑。',
    projects: [
      {
        title: 'Synonym Study', cluster: 'self-published book / visual synonyms / sequencing', period: '2014',
        summary: '第一本完整摄影书把 found still life、工作室构造、身体和环境图像放到“视觉同义词”的编辑逻辑里：不是主题统一，而是让形状、颜色、动作和材质在不同图像之间互相押韵。',
        actions: [
          '从日常记录、工作室实验、found objects 和身体图像中持续积累素材',
          '通过 stacking、stretching、pulling、pressing 等物理方式反复试验材料',
          '在编辑阶段寻找形状、颜色、动作与结构之间的“synonym / visual echo”',
          '让 matte / glossy pages、独立 leaflets 和 removable poster 改变观看节奏',
          '把摄影书作为决定图像关系的核心工作环节，而不是成品照片的附属目录',
        ],
        sourceUrl: krijnoSynonym,
        images: [],
        relations: [
          rel('出版', 'Synonym Study · self-published', 'Cape Town, 2014'),
          rel('奖项', 'Paris Photo–Aperture First PhotoBook Prize', 'shortlist, 2014'),
        ],
      },
      {
        title: 'New Gestures: Fabricated to be Photographed', cluster: 'ephemeral sculpture / performance / staged photography', period: '2015–2016',
        summary: '把传统 still life 变成一次高度身体化的工作室表演：废弃材料、家用物、植物、颜料甚至人体被搭成不稳定雕塑，很多结构在快门之后就倒掉，因此照片并不是“记录一个雕塑”，而是作品存在的主要理由。',
        actions: [
          '在周围环境搜集 rubbish、wood veneer、plastic baskets、clothes horses、rope、plants 等普通材料',
          '把材料喷漆、涂抹、折叠、捆绑，临时改变它们的原用途和表面',
          '在镜头前直觉式搭建极不稳定的 assemblage，并把整个搭建过程视为 private physical performance',
          '让 camera 成为这一表演的“audience”，在结构崩塌前完成曝光',
          '拍摄后继续 crop / remix，使 familiar objects 更难回到原有意义',
        ],
        sourceUrl: krijnoNewGestures,
        images: [
          img('https://huxleyparlour.com/wp-content/uploads/2021/06/Playdough-And-Bottles-2016-by-Nico-Krijno-BHC1472.jpg', 'Playdough and Bottles, 2016', '© Nico Krijno', krijnoFluid, 'Huxley-Parlour'),
          img('https://huxleyparlour.com/wp-content/uploads/2021/06/Potato-Palm-In-Full-Sun-2016-by-Nico-Krijno-BHC1480.jpg', 'Potato Palm in Full Sun, 2016', '© Nico Krijno', krijnoFluid, 'Huxley-Parlour'),
        ],
        relations: [
          rel('展览', 'New Gestures · WHATIFTHEWORLD', 'Cape Town, 2015 · solo'),
          rel('出版', 'New Gestures · L’Artiere', '2016 · first edition 500'),
          rel('展览', 'Foam Talent', '2016'),
        ],
      },
      {
        title: 'The Fluid Right Edge', cluster: 'Photoshop / perspective collapse / image surface', period: '2016–2017',
        summary: '把工作室搭建之后的数字处理推到前景：同一图像中的尺度、前后景、空白和实体都可以被重新安排。展览不是隐藏 Photoshop，而是用它继续破坏照片“应该忠实记录空间”的预期。',
        actions: [
          '从 New Gestures / Generator 等持续实践中选出 21 件作品构成展览',
          '在 Photoshop 中 splice 不同组件，把原本分离的部分强行缝进同一 picture plane',
          '改变对象 scale，让近景 / 远景失去可靠比例关系',
          '切割并重新拼接背景，把原本的 negative space 转换成 solid-looking shapes',
          '利用摄影 flattening 的天然特征制造“到底是照片、拼贴还是绘画”的不确定性',
        ],
        sourceUrl: krijnoFluid,
        images: [],
        relations: [
          rel('展览', 'The Fluid Right Edge · Huxley-Parlour', 'London, 2017 · first UK solo'),
          rel('展览', 'The Fluid Right Edge · The Ravestijn Gallery', 'Amsterdam, 2017'),
          rel('出版', 'The Fluid Right Edge · Bad Paper', '2017'),
        ],
      },
      {
        title: 'How To Leave Your Body Behind', cluster: 'discarded material / iterative reprocessing / nonlinear book', period: '2019',
        summary: '一本把他的方法明确说出来的 monograph：废弃材料被搭成雕塑、持续 rearrange、拍摄，照片又被 Photoshop、paint 或 collage 再加工，最终没有一个步骤被视为“原作”，而是持续生成新版本。',
        actions: [
          '以 discarded materials 搭建雕塑，并在拍摄过程中持续重排而不是只寻找一个最终构图',
          '将同一对象在不同阶段反复拍摄，保留制作过程的变化',
          '把既有照片重新放进 Photoshop、paint 和 collage 流程继续处理',
          '用 non-linear sequencing 让图像不按时间或主题稳定分类',
          '将过程压缩为 128 页 hardcover monograph，使书籍本身成为作品结构的一部分',
        ],
        sourceUrl: krijnoBook,
        images: [],
        relations: [
          rel('出版', 'How To Leave Your Body Behind · b.frank books', '2019 · 128 pages / edition 750'),
          rel('展览', 'Leave Your Body Behind · Elizabeth Houston Gallery', 'New York, 2019'),
        ],
      },
      {
        title: 'The Constellation', cluster: 'archive recirculation / collage rolls / installation', period: '2022–2023',
        summary: '这一阶段把“不断回到旧图像”的编辑方式直接做成空间：墙上照片之外，成串图像从天花垂下，拼贴纸卷进入展厅，旧作品里的木结构、图案、静物和喷漆痕迹再次出现。',
        actions: [
          '从多年图像档案中寻找 visual echo，而不是只拍一套全新素材',
          '重新裁切、拼贴、再格式化旧照片，使过去作品进入新的图像关系',
          '让 framed prints、collaged paper rolls 和从天花落下的照片同时占据空间',
          '用重复 motif 把不同年份的对象和动作连接成“constellation”而非线性 chronology',
          '承认 mistake、chance、limitation 和 effort 是构图生成的一部分，而不是需要清除的制作痕迹',
        ],
        sourceUrl: krijnoConstellation,
        images: [],
        relations: [rel('展览', 'The Constellation · The Ravestijn Gallery', 'Amsterdam, 2023 · solo')],
      },
    ],
    awards: [
      'Foam Talent 2016',
      'Foam Paul Huf Award nominee, 2015',
      'Paris Photo–Aperture First PhotoBook Prize · shortlist for Synonym Study, 2014',
    ],
    exhibitions: [
      'New Gestures: Fabricated to be Photographed — WHATIFTHEWORLD, Cape Town, 2015',
      'The Fluid Right Edge — Huxley-Parlour London / The Ravestijn Gallery Amsterdam, 2017',
      'Leave Your Body Behind — Elizabeth Houston Gallery, New York, 2019',
      'New Visions — Henie Onstad Triennial for Photography and New Media, 2020',
      'The Constellation — The Ravestijn Gallery, Amsterdam, 2023',
      '11th Session — Images Vevey, 2025',
    ],
    sources: [
      { label: 'Artist website / statement', url: krijnoHome },
      { label: 'Artist CV', url: krijnoCv },
      { label: 'Synonym Study · Aperture', url: krijnoSynonym },
      { label: 'New Gestures · WHATIFTHEWORLD', url: krijnoNewGestures },
      { label: 'The Fluid Right Edge · Huxley-Parlour', url: krijnoFluid },
      { label: 'How To Leave Your Body Behind · b.frank books', url: krijnoBook },
      { label: 'The Constellation · Ravestijn Gallery', url: krijnoConstellation },
    ],
  },
};
