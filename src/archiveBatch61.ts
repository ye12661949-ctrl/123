import type { ArtistArchive, ArchiveImage, ArchiveRelation } from './archiveData';

const img = (url: string, title: string, credit: string, sourceUrl: string, sourceLabel: string): ArchiveImage => ({
  url,
  title,
  credit,
  sourceUrl,
  sourceLabel,
});

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const cristobalFoam = 'https://www.foam.org/talent-2024/artist/cristobal-ascencio';
const cristobalFlowers = 'https://cristobalascencio.com/las-flores-mueren-dos-veces-2';
const cristobalPalimpsest = 'https://cristobalascencio.com/PALIMPSEST';
const cristobalFossils = 'https://cristobalascencio.com/instant-fossils-desktop';
const cristobalMaiz = 'https://cristobalascencio.com/maiz-2';
const cristobalHerbarium = 'https://cristobalascencio.com/herbarium-1';
const cristobalAbout = 'https://cristobalascencio.com/about';

const sheungFoam = 'https://www.foam.org/talent-2024/artist/sheung-yiu';
const sheungInterfaces = 'https://www.sheungyiu.com/interfaces-of-predictions';
const sheungGroundTruth = 'https://www.sheungyiu.com/ground-truth';
const sheungProjection = 'https://www.sheungyiu.com/everything-is-a-projection';
const sheungTrees = 'https://www.sheungyiu.com/between-two-trees-there-are-many-worlds';
const sheungAbout = 'https://www.sheungyiu.com/about';
const coBerlin = 'https://co-berlin.org/en/program/exhibitions/sheung-yiu';

export const archiveBatch61: Record<string, ArtistArchive> = {
  'photo-cristobal-ascencio': {
    artistId: 'photo-cristobal-ascencio',
    projectCoverage: '5 个项目已建立制作方法档案',
    imageCoverage: '1 / 5 项目已建立图像档案 · 2 张已核对作品图',
    note: '本轮从 Foam 单一项目条目扩展到艺术家本人项目档案。重点不是增加项目名，而是记录每个项目具体如何制作：数据弯折、删除与恢复文件、摄影测量、Jacquard 织造、360°影像与 3D 植物扫描。图像只保留已有可追溯直链；其余项目不使用不明来源占位图。',
    projects: [
      {
        title: 'Las flores mueren dos veces',
        cluster: '家庭档案 / 数据弯折 / 摄影测量 / VR',
        period: '2021–2024',
        summary: '在得知父亲真实死因后重新进入家庭相册与父亲工作过的花园，把“记忆被改写”落实为图像文件被破坏、植物被三维扫描、花园被重新建模并进入 VR 的连续制作链。',
        actions: [
          '重新翻检家庭相册、父亲留下的植物线索与最后工作过的花园',
          '直接修改照片的结构数据，以 glitch / 数字错误破坏原图并生成“corrupted memories”',
          '寻找父亲曾种植且仍然存活的植物，并用摄影测量建立数字植物与三维花园',
          '把项目组织为三个视觉章节：被代码改变的模拟家庭照、数字植物、可进入的虚拟花园',
          '将原本二维的植物和景观信息扩展为 Oculus Quest 2 可进入的 VR 经验',
        ],
        sourceUrl: cristobalFlowers,
        images: [
          img('https://a.storyblok.com/f/113697/2000x3029/d0d35d4d8a/margarito.jpg', 'MARGARITO · code-altered family archive', '© Cristóbal Ascencio', cristobalFoam, 'Foam · Digital Talent'),
          img('https://a.storyblok.com/f/113697/6693x4681/2ff7bb4fb4/wedding.jpg', 'WEDDING · code-altered family archive', '© Cristóbal Ascencio', cristobalFoam, 'Foam · Digital Talent'),
        ],
        relations: [
          rel('展览', 'Getxophoto', '2022'),
          rel('展览', 'Foam Talent 2024–2025', 'Foam Amsterdam, 2024'),
          rel('展览', 'PhotoEspaña · Valladolid', '2024'),
          rel('展览', 'Verzasca Foto', '2025'),
        ],
      },
      {
        title: 'PALIMPSEST',
        cluster: '数据删除 / 恢复 / 文本写入 / Jacquard 织造',
        period: '2023–2025',
        summary: '以《奥德赛》中 Penelope 白天织、夜晚拆的循环为方法模型，把数码照片也置于“生成—删除—恢复—再编织”的循环中，使记忆的损坏成为可见工艺。',
        actions: [
          '在 Ithaca 岛拍摄原始数码照片',
          '主动删除图像，再使用数据恢复软件尝试找回文件',
          '保留恢复后发生损坏、错位与不完整的图像，而不是修复回原貌',
          '把《奥德赛》中直接提到 Penelope 的文本片段写入恢复图像的源代码',
          '最后把受损数字图像交给电脑控制的 Jacquard 提花织机织成实体挂毯',
        ],
        sourceUrl: cristobalPalimpsest,
        images: [],
        relations: [],
      },
      {
        title: 'Instant Fossils',
        cluster: '景观 / 结构数据操作 / 后自然',
        period: '2019',
        summary: '在 Baja California Sur 荒漠拍摄被弃置的人工物和建筑，再修改照片结构数据，使人类痕迹像已经嵌入地质层的“即时化石”。',
        actions: [
          '在 Baja California Sur 偏远荒漠寻找失去原功能的人工物与建筑',
          '以摄影记录这些对象和其所处景观',
          '改变照片的结构数据，对被摄对象和环境进行数字介入',
          '把失效的人造物重新理解为后自然景观的一部分，而非浪漫自然中的异物',
        ],
        sourceUrl: cristobalFossils,
        images: [],
        relations: [
          rel('展览', 'Luminic Festival', '2023'),
          rel('展览', 'Las Cigarreras · Alicante', '2024'),
        ],
      },
      {
        title: 'MAÍZ',
        cluster: '视觉研究 / 纪实摄影 / 摄影测量 / 360°影像',
        period: 'work in progress · 2025–',
        summary: '与 Alba Serra 合作，把墨西哥原生玉米理解为“活档案”，从 64 个公认品种出发追踪种子、社区、生态系统与农业知识之间的依存网络。',
        actions: [
          '围绕墨西哥 64 个公认原生玉米品种建立研究结构',
          '以纪录摄影进入种植社区与农业现场',
          '使用摄影测量记录玉米与相关对象的三维形态',
          '使用 360° 视频记录环境与空间关系',
          '把生物多样性、地方知识、单一种植和工业现代性放在同一视觉研究框架中',
        ],
        sourceUrl: cristobalMaiz,
        images: [],
        relations: [rel('展览', 'Fundación MARSO · Madrid', '2025')],
      },
      {
        title: 'HERBARIUM',
        cluster: '数字植物志 / 摄影测量 / 3D 扫描',
        period: '2025–',
        summary: '把传统 herbarium 从压平、干燥和分类植物的二维保存方式，转换为通过摄影测量保存形状、纹理与空间存在的三维数字植物档案。',
        actions: [
          '选择植物作为持续增长的数字档案对象',
          '通过摄影测量从多角度记录植物',
          '把摄影数据转成 3D 扫描 / 三维模型',
          '在“活的植物”与“数字记忆”之间建立对应关系',
        ],
        sourceUrl: cristobalHerbarium,
        images: [],
        relations: [],
      },
    ],
    awards: [
      'Foam Talent 2024–2025',
      'FotoCanal Photography Book Award · First Prize, 2024',
      'Fundación ENAIRE Photography Award · Third Prize, 2023',
      'British Journal of Photography · Ones to Watch, 2022',
    ],
    exhibitions: [
      'Getxophoto — Las flores mueren dos veces, 2022',
      'Foam Talent 2024–2025 — Foam Amsterdam, 2024',
      'Athens Photo Festival — Benaki Museum, 2024',
      'Deutsche Börse Photography Foundation — Foam Talent 2024, 2025',
      'Instituto Cultural de México en España — Estrategias de recuperación, 2025',
      'Fundación MARSO — MAÍZ, 2025',
    ],
    sources: [
      { label: 'Cristóbal Ascencio · About / CV', url: cristobalAbout },
      { label: 'Las flores mueren dos veces', url: cristobalFlowers },
      { label: 'PALIMPSEST', url: cristobalPalimpsest },
      { label: 'Instant Fossils', url: cristobalFossils },
      { label: 'MAÍZ', url: cristobalMaiz },
      { label: 'HERBARIUM', url: cristobalHerbarium },
      { label: 'Foam Talent Digital', url: cristobalFoam },
    ],
  },

  'photo-sheung-yiu': {
    artistId: 'photo-sheung-yiu',
    projectCoverage: '4 个核心项目已建立制作方法档案',
    imageCoverage: '4 / 4 项目已建立图像档案 · 9 张已核对作品 / 展览图',
    note: '本轮把 Sheung Yiu 从单一“人脸识别”项目扩展为完整的方法链：面部预测、遥感、摄影作为 3D 数据、森林的多物种感知。每个项目都记录输入数据、成像技术、转换过程和最终输出，避免只用“算法影像”概括。',
    projects: [
      {
        title: '(Inter)Faces of Predictions, or How To Read a Face',
        cluster: '面相 / 人脸识别 / 自画像 / found footage',
        period: '2023–ongoing',
        summary: '把自己的脸同时交给东亚面相、西方 physiognomy、人脸识别、facial phenotyping、生成式面孔与 synthetic facial data，比较“神秘预测”与“科学预测”如何共享相似的分类冲动。',
        actions: [
          '把自己的脸作为跨系统比较的共同测试样本',
          '分别进入东亚 face reading、西方 physiognomy、facial recognition、facial phenotyping 等预测体系',
          '收集历史面相材料、found footage 与机器视觉参考图，建立视觉考古式研究板',
          '制作自画像、图表、物件装置与 video essay，把不同预测制度放在同一观看空间',
          '让“科学”标注与“神秘”符号在视觉上互相借用，暴露自动化判断的偏见结构',
        ],
        sourceUrl: sheungInterfaces,
        images: [
          img('https://a.storyblok.com/f/113697/2000x3000/19a94b1299/shooting_20230403_face-studio_023.jpeg', 'Facial Landmarks, 2023', '© Sheung Yiu', sheungFoam, 'Foam · Digital Talent'),
          img('https://a.storyblok.com/f/113697/2000x2667/098018113d/shooting_20230519__ground-truth_face-vare-studio_088.jpg', 'Twisted Face, 2023', '© Sheung Yiu', sheungFoam, 'Foam · Digital Talent'),
          img('https://a.storyblok.com/f/113697/1270x925/3f0ef675d5/notebook-sheung-yiu-2.jpg', '(Inter)Faces of Predictions · research notebook', '© Sheung Yiu', sheungFoam, 'Foam · Digital Talent'),
        ],
        relations: [
          rel('奖项', 'C/O Berlin Talent Award', 'Artist winner, 2025'),
          rel('展览', 'Foam Talent 2024–2025', 'Foam Amsterdam, 2024'),
          rel('展览', 'Riga Photography Biennale', '2025'),
          rel('展览', 'C/O Berlin · solo exhibition', '2026'),
          rel('出版', 'Spector Books / C/O Berlin monograph', '2026'),
        ],
      },
      {
        title: 'Ground Truth, or How To Resurrect a Tree',
        cluster: '遥感 / hyperspectral imaging / 科研协作 / 数据集',
        period: '2019–2022',
        summary: '进入芬兰森林遥感研究现场，追踪科学家如何用实地测量、光谱数据和预测模型从卫星像素中“重新得到一棵树”，并把科学数据、档案影像与摄影重新编成观看系统。',
        actions: [
          '与 Aalto University 的森林遥感研究者合作，进入 ground-truth 数据采集过程',
          '记录树木的物理结构与光谱属性等现场测量',
          '对照卫星影像、hyperspectral imaging 与地面数据如何进入预测模型',
          '把档案图像、纪录摄影、实验数据、point cloud 与艺术图像混合编排',
          '将复杂材料转成 video essay、展览与摄影书，而不是只展示科学数据',
        ],
        sourceUrl: sheungGroundTruth,
        images: [
          img('https://images.squarespace-cdn.com/content/v1/51a94856e4b08b27fbbeb60a/1654603119329-Y1NCJK0KOI53IW3C4UVN/Ground%2BTruth_001.JPG', 'Ground Truth_001', '© Sheung Yiu', sheungGroundTruth, 'Artist website'),
          img('https://images.squarespace-cdn.com/content/v1/51a94856e4b08b27fbbeb60a/1654607561477-BBDFPTMOA41B6ALPR0SF/Ground%2BTruth_007.JPG', 'Ground Truth_007', '© Sheung Yiu', sheungGroundTruth, 'Artist website'),
        ],
        relations: [
          rel('展览', 'MAA-tila Project Space · Helsinki', '2022'),
          rel('展览', 'Titanik Gallery · Turku', '2022'),
          rel('展览', 'Circulation(s) Festival · Paris', '2022'),
          rel('出版', 'Ground Truth · The Eriskay Connection', '2021'),
        ],
      },
      {
        title: 'Everything Is A Projection, or How To Digitize Light',
        cluster: 'projective texturing / 3D object dataset / 摄影作为数据',
        period: '2020–2024',
        summary: '疫情期间从自己的桌面开始，把 81 件日常物逐一数字化。摄影在这里不再是最终图像，而是 texture map、normal map、bump map 等用于计算三维物体表面的数据。',
        actions: [
          '从个人桌面选择日常物件作为受控数据集',
          '从多个视角拍摄对象，为 3D 建模提供形状与纹理参考',
          '使用 projective texturing 把照片投射 / 映射到三维模型表面',
          '从摄影数据生成 texture maps、normal maps、bump maps 等渲染输入',
          '把物理桌面转换为可共享、可继续处理甚至可 3D 打印的数字对象集合',
          '最终以 3D 模型、雕塑、摄影、展览和摄影书多种形态输出',
        ],
        sourceUrl: sheungProjection,
        images: [
          img('https://images.squarespace-cdn.com/content/v1/51a94856e4b08b27fbbeb60a/f6ba5461-f22a-40ca-864d-1714e1343378/Screen%2BShot%2B2021-12-05%2Bat%2B6.02.44%2BPM.png', 'Everything Is A Projection · projective-texturing process', '© Sheung Yiu', sheungProjection, 'Artist website'),
          img('https://images.squarespace-cdn.com/content/v1/51a94856e4b08b27fbbeb60a/836ada93-97b1-450d-a92a-f7db94cb64d1/Exhibition%2BDocumentation_20240124_WMA_Home_034.jpg', 'Everything Is A Projection · WMA Space installation', '© Sheung Yiu', sheungProjection, 'Artist website'),
        ],
        relations: [rel('展览', 'WMA Space · Hong Kong', '2024')],
      },
      {
        title: 'Between Two Trees, There Are Many Worlds',
        cluster: 'hyperspectral imaging / laser scanning / posthuman sensing',
        period: '2023–2024',
        summary: '从赫尔辛基中央森林里一棵存活树与一棵死树出发，在 bark beetle 蔓延背景下比较人类、鹰、甲虫和技术传感器各自能够感知的“世界”。',
        actions: [
          '选择一棵存活树与一棵死亡树作为固定观察起点',
          '使用 hyperspectral imaging 捕获超出普通可见光摄影的森林信息',
          '使用 laser scanning 建立树木与环境的空间数据',
          '把传感器数据转换成多种视觉形式，并与算法观看的文字研究并置',
          '在 video essay 中比较人类、鹰、bark beetle 与机器传感器不同的可见范围、分辨率与尺度',
        ],
        sourceUrl: sheungTrees,
        images: [
          img('https://images.squarespace-cdn.com/content/v1/51a94856e4b08b27fbbeb60a/1759661781277-6Q116H6EOYHKDWZLA0XX/BetweenTwoTrees_202308_3.jpeg', 'Between Two Trees · video essay still', '© Sheung Yiu', sheungTrees, 'Artist website'),
          img('https://images.squarespace-cdn.com/content/v1/51a94856e4b08b27fbbeb60a/1759661804576-Z6G0D8HCEOJRQ8DQ85R7/BetweenTwoTrees_202308_0.jpg', 'Between Two Trees · aerial forest view', '© Sheung Yiu', sheungTrees, 'Artist website'),
        ],
        relations: [
          rel('展览', 'Galleri Format · Malmö', '2024'),
          rel('展览', 'Porto Photography Biennale', '2025'),
        ],
      },
    ],
    awards: [
      'C/O Berlin Talent Award · Artist winner, 2025',
      'Foam Talent 2024–2025',
      'Best Finnish Photo Book · Ground Truth, 2021',
      'Most Beautiful Book in Finland · Ground Truth, 2021',
    ],
    exhibitions: [
      'Ground Truth — Mai Manó House, Budapest, 2021–2022',
      'Ground Truth — MAA-tila Project Space, Helsinki, 2022',
      'Everything Is A Projection — WMA Space, Hong Kong, 2024',
      'Between Two Trees, There Are Many Worlds — Galleri Format, 2024',
      'Foam Talent 2024–2025 — Foam Amsterdam, 2024',
      '(Inter)Faces of Predictions — Riga Photography Biennale, 2025',
      '(Inter)Faces of Predictions — C/O Berlin, 2026',
    ],
    sources: [
      { label: 'Sheung Yiu · Bio / CV', url: sheungAbout },
      { label: '(Inter)Faces of Predictions', url: sheungInterfaces },
      { label: 'Ground Truth', url: sheungGroundTruth },
      { label: 'Everything Is A Projection', url: sheungProjection },
      { label: 'Between Two Trees, There Are Many Worlds', url: sheungTrees },
      { label: 'C/O Berlin exhibition', url: coBerlin },
      { label: 'Foam Talent Digital', url: sheungFoam },
    ],
  },
};
