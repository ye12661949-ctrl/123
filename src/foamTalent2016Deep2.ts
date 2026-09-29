import type { Artist, ArtworkImage } from './data';

const artwork = (url: string, title: string, credit: string, sourceUrl: string, sourceLabel: string): ArtworkImage => ({ url, title, credit, sourceUrl, sourceLabel });

const orjuelaHome = 'https://www.andres-orjuela.com/proyectos';
const orjuelaCv = 'https://www.andres-orjuela.com/cv';
const orjuela27 = 'https://sketchroom.co/andres-orjuela-palomas-piedras';
const orjuelaArchive = 'https://cdf.montevideo.gub.uy/system/files/luta_y_poder.pdf';
const orjuelaInterview = 'https://puntodefugabogota.com/2023/05/16/andres-orjuela-archivo-muerto-punto-de-fuga-2023/';

const paansHome = 'https://www.daanpaans.nl/';
const paansFoam = 'https://www.foam.org/events/daan-paans';
const paansLetters = 'https://www.eriskayconnection.com/letters-from-utopia/';
const paansRhinoceros = 'https://fotoexpositie.nl/exposities/daan_paans_rhinoceros.html';
const paansFloating = 'https://www.eriskayconnection.com/floating-signifiers/';

const krijnoHome = 'https://nicokrijno.com/';
const krijnoNewGestures = 'https://www.whatiftheworld.com/exhibition/new-gestures-fabricated-to-be-photographed/';
const krijnoFluid = 'https://huxleyparlour.com/exhibitions/nico-krijno-the-fluid-right-edge/';
const krijnoBook = 'https://www.bfrankbooks.com/books/nico-krijno';
const krijnoConstellation = 'https://www.theravestijngallery.com/exhibitions/141-the-constellation-nico-krijno/';

export const foamTalent2016DeepArtists2: Artist[] = [
  {
    id: 'andres-felipe-orjuela', name: 'Andrés Felipe Orjuela', born: '1985', base: 'Mexico City / Bogotá',
    intro: '把报纸、犯罪新闻和被丢弃的新闻摄影档案重新分类、手工着色、抄写和再出版，研究暴力图像如何被大众媒体消费、麻木化并进入集体记忆。',
    methods: ['档案挪用', '新闻图像', '手工着色', '分类', '拼贴', '书籍', '投影装置'],
    subjects: ['暴力图像', '大众媒体', '记忆', '哥伦比亚历史', '犯罪新闻', '观看伦理'],
    outputs: ['摄影', '档案装置', '绘画 / 手工介入', '摄影书', '投影'],
    institutions: ['Foam', 'Les Rencontres d’Arles', 'Centro de la Imagen', 'FoLa'],
    achievements: ['Foam Talent 2016', 'LensCulture Portrait Award · Juror’s Pick 2018', 'Luz del Norte Latin American Photography Prize · third place'],
    whyImportant: '他的核心不是“拍暴力”，而是改变暴力照片的流通方式：从垃圾箱、报纸版面和 nota roja 中取出图像，再通过分类、着色、抄写和重新装订让观看行为本身变得可疑。',
    projects: [
      { year: '2010–2012', title: 'Muestrario', type: '犯罪新闻 / 分类 / 标本化', facts: ['持续从墨西哥 nota roja 报刊中提取血迹图像。', '将印刷品中表示鲜血的红色小圆片剪下，放入类似实验室载玻片的结构中。', '最终形成 1011 个“样本”，同时尽可能恢复受害者姓名、地点与死因。'], reading: '最关键的转换是把新闻消费中的“血腥刺激”变成数量巨大、近乎法医档案的分类系统。' },
      { year: '2011–2018', title: 'Archivo Muerto', type: '被丢弃新闻档案 / 手工着色 / 再出版', facts: ['从 Bogotá《El Espacio》被当作废物丢弃的原始黑白新闻照片进入项目。', '用手指和细小画笔把油彩与摄影颜料重新施加到纤维纸照片表面。', '通过着色改变原先的 voyeuristic gaze，并重新组织毒品、犯罪和国家暴力的历史材料。'], reading: '这里的“修复”并不是还原原貌，而是让已经被媒体消费过的暴力图像重新获得物质阻力。' },
      { year: '2015', title: '27 HRS · Palomas y Piedras', type: '报纸抄写 / Amate 纸 / 幻灯投影', facts: ['查阅《El Espacio》关于 1985 年 Palacio de Justicia 占领事件的历史报纸与电子资料。', '以墨水在墨西哥 Amate 树皮纸上手工抄写 / 重画报纸片段，让印刷劳动由艺术家的手取代。', '使用两台模拟幻灯机叠加图像；观众以身体投下阴影时，部分新闻图像才被显露。'], reading: '从“媒体替公众看见历史”转成“观众必须用自己的身体决定什么被看见”。' },
    ],
    images: [
      artwork('https://images.squarespace-cdn.com/content/v1/559aae05e4b07172a30ffedd/1461772678492-9H2L5QHTXPXONWT4M6NV/AO_4.jpg', '27 HRS · Palomas y Piedras', '© Andrés Felipe Orjuela', orjuela27, 'SKETCH'),
      artwork('https://images.squarespace-cdn.com/content/v1/559aae05e4b07172a30ffedd/1461772656939-MRFYMCJWG3LEJMQS536I/AO_3.jpg', '27 HRS · installation / drawing', '© Andrés Felipe Orjuela', orjuela27, 'SKETCH'),
    ],
    sourceLabel: 'Artist website / project sources', sourceUrl: orjuelaHome,
  },
  {
    id: 'daan-paans', name: 'Daan Paans', born: '1985', base: 'Utrecht',
    intro: '从历史叙事和科学 / 流行文化中的“想象图像”出发，以摄影、雕塑、视频、3D 打印和研究出版追踪一个形象如何在复制、误读和技术变化中不断变形。',
    methods: ['长期艺术研究', '摄影', '档案', '雕塑', '复制链', '3D 打印', 'AI / 计算生成', '摄影书'],
    subjects: ['图像史', '时间', '复制', '未来想象', '考古 / 史前想象', '生态符号'],
    outputs: ['摄影', '雕塑', '视频', '摄影书', '研究装置'],
    institutions: ['Foam', 'Fotomuseum Winterthur', 'Mondriaan Fund'],
    achievements: ['Foam Talent 2016', 'Foam Paul Huf Award nominee 2013', 'Hyères Photography longlist 2016'],
    whyImportant: '他很适合放进“图像如何塑造我们对未曾亲眼见过之物的理解”这条线：史前、未来、宗教 artefact、自然符号都通过复制和再现慢慢获得一种看似理所当然的形状。',
    projects: [
      { year: '2013', title: 'Letters from Utopia', type: '长生 / 乌托邦 / 纪实研究', facts: ['访问五个试图极端延长寿命甚至追求不死的群体与关键人物。', '把从神秘主义到科学主义的不同“未来”并置。', '最终形成 160 页摄影书，并以照片、文本和研究材料构成纪实系统。'], reading: '不是验证“永生是否可能”，而是比较不同年代的人如何用图像和制度把未来做成一种可相信的现实。' },
      { year: '2015–2016', title: 'Rhinoceros', type: 'deep time / 表象史 / 三个 case studies', facts: ['以三个 case studies 比较十九世纪对史前世界的想象、当代对历史碎片的重建以及科幻中的未来再现。', '将 Lascaux、恐龙等“没有现代人直接见过原貌”的对象作为表象问题。', '通过摄影反图像与研究材料，质疑集体视觉记忆依赖了哪些早期模型。'], reading: '项目名提示 Dürer 犀牛式的机制：一个有误差的早期图像，可以长期变成后人心中的“标准形象”。' },
      { year: '2018–2019', title: 'Panta Rhei', type: '复制链 / artefact / 摄影 + 雕塑 + 视频', facts: ['从 Indiana Jones 的 Golden Idol 及其前哥伦布文化原型 / 误读出发。', '购买塑料复制品并拍照，把照片交给另一位工匠制作下一件复制品。', '每位工匠只能看到前一件复制品的单面照片，不知道尺寸；来自墨西哥、中国、乌干达、希腊、意大利和荷兰的连续制作造成形态突变。'], reading: '复制不是忠实传递，而是一条包含文化背景、商业、技术和个人判断的进化链。' },
      { year: '2023–2025', title: 'The Killing of the Tree Spirit / Floating Signifiers', type: '生态图像 / 数据集 / 3D / AI / 出版', facts: ['收集文化史中大量橡树形象，研究橡树作为力量、智慧与长寿符号的视觉谱系。', '以科学 / 计算软件生成一棵“未来橡树”的推测性版本，并研究 Wolfheze 的 Wodan Oaks。', '2025 年出版 Floating Signifiers，汇总十余年的多个 case studies，并明确纳入 3D renders、3D printing 与 AI programming。'], reading: '这条线把他的复制研究从文物推进到生态：连“自然”在视觉文化中也不断被版本化。' },
    ],
    images: [], sourceLabel: 'Artist website', sourceUrl: paansHome,
  },
  {
    id: 'nico-krijno', name: 'Nico Krijno', born: '1981', base: 'Cape Town',
    intro: '把废弃物、家庭用品、植物、颜料和身体先搭成短暂雕塑，再拍摄、裁切、扫描、拼贴和 Photoshop 重组，让摄影在物体、表演和数字图像之间不断变形。',
    methods: ['编排摄影', '临时雕塑', '表演', '拼贴', '扫描', 'Photoshop', '摄影书', 'moving image'],
    subjects: ['静物传统', '视觉代码', '物体意义', '数字图像', '观看错觉', '图像物质性'],
    outputs: ['摄影', '拼贴', '雕塑', '摄影书', '装置', 'moving image'],
    institutions: ['Foam', 'Huxley-Parlour', 'The Ravestijn Gallery', 'Images Vevey'],
    achievements: ['Foam Talent 2016', 'Foam Paul Huf Award nominee 2015', 'Paris Photo–Aperture First PhotoBook Prize shortlist 2014'],
    whyImportant: '他不是把静物“拍漂亮”，而是把摄影拆成连续操作：找材料—搭—倒塌—拍—剪—缩放—拼—再出版。最后的照片是这一连串变化的暂时停顿。',
    projects: [
      { year: '2014', title: 'Synonym Study', type: '摄影书 / 视觉同义词 / 编辑', facts: ['把 found still life、工作室构造、身体和环境图像放进同一本书。', '通过相似形状、颜色、动作和节奏让不同照片形成“视觉同义词”。', '书籍使用哑光 / 光面纸、插页与可拆海报，让编辑结构参与意义生成。'], reading: '它说明 Krijno 的作品不是严格分系列，而是通过相邻图像之间的回声来组织。' },
      { year: '2015–2016', title: 'New Gestures: Fabricated to be Photographed', type: '临时雕塑 / 摄影表演 / 工作室实验', facts: ['收集垃圾、木皮、晾衣架、塑料篮、绳子、植物、颜料等低价值材料。', '在镜头前搭出不稳定、甚至快要倒塌的临时结构；艺术家把这一过程视为只有相机观看的私人表演。', '拍摄之后继续裁切、混合自然与人造材料，使 familiar objects 脱离原有功能。'], reading: '雕塑不是终点；很多结构存在的唯一理由就是“被拍下来”。' },
      { year: '2017', title: 'The Fluid Right Edge', type: '数字解构 / still life / 展览 + 书', facts: ['展览呈现 21 件作品，并连接 New Gestures 与 Generator。', '拍摄后在 Photoshop 中 splice 图像组件、改变比例、切开 / 重组背景并把 negative space 变成实体形状。', '通过 flattening 与 perspective confusion 故意破坏照片看似稳定的空间。'], reading: '这里的数字后期不是修饰，而是继续完成工作室里尚未结束的雕塑。' },
      { year: '2019–2023', title: 'How To Leave Your Body Behind / The Constellation', type: '循环重组 / artist book / 空间装置', facts: ['反复重排废弃材料并持续拍摄，同一物体可在多个图像中获得新角色。', '再以 Photoshop、颜料和 collage 处理照片，形成非线性的图像叙事。', 'The Constellation 将照片从墙面延伸到垂落纸卷与空间中的大规模 collage，让图像之间的关系变成展览本体。'], reading: '这阶段最明显的是：旧图像不会“完成”，而会被下一次编辑重新吸收。' },
    ],
    images: [
      artwork('https://huxleyparlour.com/wp-content/uploads/2021/06/Playdough-And-Bottles-2016-by-Nico-Krijno-BHC1472.jpg', 'Playdough and Bottles, 2016', '© Nico Krijno', krijnoFluid, 'Huxley-Parlour'),
      artwork('https://huxleyparlour.com/wp-content/uploads/2021/06/Potato-Palm-In-Full-Sun-2016-by-Nico-Krijno-BHC1480.jpg', 'Potato Palm in Full Sun, 2016', '© Nico Krijno', krijnoFluid, 'Huxley-Parlour'),
    ],
    sourceLabel: 'Artist website', sourceUrl: krijnoHome,
  },
];

export const foamTalent2016Deep2Sources = { orjuelaCv, orjuelaArchive, orjuelaInterview, paansFoam, paansLetters, paansRhinoceros, paansFloating, krijnoNewGestures, krijnoBook, krijnoConstellation };
