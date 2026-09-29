import type { Artist } from './data';
import type { ArtistArchive } from './archiveData';

// Foam records were first checked on 2026-09-25; Ascencio and Yiu were expanded against their official project archives on 2026-09-29.
export const foamResearchArtists: Artist[] = [
  {
    "id": "photo-cristobal-ascencio",
    "name": "Cristóbal Ascencio",
    "born": "1988",
    "base": "Madrid",
    "intro": "从家庭旧照与数字记忆出发，将数据弯折、摄影测量、VR、Jacquard 织造与 3D 植物扫描接入摄影，持续研究图像如何保存、损坏和重建记忆。",
    "methods": [
      "家庭档案",
      "数据弯折",
      "摄影测量",
      "三维建模",
      "虚拟现实",
      "Jacquard 织造"
    ],
    "subjects": [
      "家庭记忆",
      "哀悼",
      "数字图像",
      "植物",
      "生态"
    ],
    "outputs": [
      "摄影",
      "数字环境",
      "VR",
      "织物",
      "3D 模型"
    ],
    "institutions": [
      "Foam",
      "Deutsche Börse Photography Foundation",
      "PhotoEspaña"
    ],
    "achievements": [
      "Foam Talent 2024–2025",
      "FotoCanal Photography Book Award 2024 · First Prize",
      "Fundación ENAIRE Photography Award 2023 · Third Prize",
      "British Journal of Photography · Ones to Watch 2022"
    ],
    "whyImportant": "他的作品很适合研究数字处理如何从“效果”变成真正的方法：删文件、恢复文件、改源数据、扫描植物、建模花园、织成挂毯，每一步都对应记忆如何被保存或改写。",
    "projects": [
      {
        "year": "2021–2024",
        "title": "Las flores mueren dos veces",
        "type": "家庭档案 / 数据弯折 / 摄影测量 / VR",
        "facts": [
          "重新翻检父亲留下的家庭图像与植物线索，直接修改照片结构数据制造 glitch。",
          "以摄影测量扫描父亲种植过的植物和花园，并将二维材料继续发展为可进入的 VR 花园。"
        ],
        "reading": "项目的关键不是“关于父亲”，而是把记忆的损坏、重建和继续生长分别变成数据、植物和虚拟空间中的具体动作。"
      },
      {
        "year": "2023–2025",
        "title": "PALIMPSEST",
        "type": "删除 / 数据恢复 / 源代码 / Jacquard 织造",
        "facts": [
          "在 Ithaca 拍摄照片后主动删除，再用数据恢复软件找回受损文件。",
          "把《奥德赛》中 Penelope 的文本写入图像源代码，最后把受损图像用电脑控制的 Jacquard 织机织成实体挂毯。"
        ],
        "reading": "把 Penelope 的“织—拆”循环翻译成数码图像的生成—删除—恢复—再织造，让记忆变成可执行工艺。"
      },
      {
        "year": "2019",
        "title": "Instant Fossils",
        "type": "景观 / 结构数据操作",
        "facts": [
          "在 Baja California Sur 荒漠拍摄失去原功能的人造物与建筑。",
          "修改照片结构数据，使这些人类痕迹在图像中进一步变形为后自然景观的一部分。"
        ],
        "reading": "这里的数据破坏不是装饰，而是在视觉上把人工残留物推成一种已经进入地质层的“即时化石”。"
      },
      {
        "year": "2025– · work in progress",
        "title": "MAÍZ",
        "type": "视觉研究 / 纪录摄影 / 摄影测量 / 360°影像",
        "facts": [
          "与 Alba Serra 围绕墨西哥 64 个公认原生玉米品种开展视觉研究。",
          "使用纪录摄影、摄影测量与 360° 视频连接种子、种植社区、生态系统与农业知识。"
        ],
        "reading": "把玉米当成“活档案”，使生态多样性、文化记忆与工业农业的压力在同一图像系统里出现。"
      },
      {
        "year": "2025–",
        "title": "HERBARIUM",
        "type": "数字植物志 / 摄影测量 / 3D 扫描",
        "facts": [
          "持续选择植物并通过摄影测量进行多角度记录。",
          "把植物转成 3D 扫描 / 模型，以保存形状、纹理与空间存在。"
        ],
        "reading": "传统植物标本把植物压平成二维对象；这里则把摄影转成三维数据，讨论活体与数字记忆之间的差异。"
      }
    ],
    "images": [
      {
        "url": "https://a.storyblok.com/f/113697/2000x3029/d0d35d4d8a/margarito.jpg",
        "title": "MARGARITO · 家庭档案的数据弯折",
        "credit": "© Cristóbal Ascencio",
        "sourceUrl": "https://www.foam.org/talent-2024/artist/cristobal-ascencio",
        "sourceLabel": "Foam · 数字展览"
      },
      {
        "url": "https://a.storyblok.com/f/113697/6693x4681/2ff7bb4fb4/wedding.jpg",
        "title": "WEDDING · 家庭档案的数据弯折",
        "credit": "© Cristóbal Ascencio",
        "sourceUrl": "https://www.foam.org/talent-2024/artist/cristobal-ascencio",
        "sourceLabel": "Foam · 数字展览"
      }
    ],
    "sourceLabel": "Cristóbal Ascencio · 官方项目档案",
    "sourceUrl": "https://cristobalascencio.com/"
  },
  {
    "id": "photo-sheung-yiu",
    "name": "Sheung Yiu",
    "chineseName": "姚尚勤",
    "born": "1991",
    "base": "Helsinki",
    "intro": "把摄影放进大型计算、机器视觉、遥感与 3D 图形系统中，研究照片何时从最终图像变成训练、预测、测量或建模所使用的数据。",
    "methods": [
      "自画像",
      "面部扫描",
      "机器视觉研究",
      "遥感",
      "高光谱成像",
      "激光扫描",
      "projective texturing",
      "影像论文"
    ],
    "subjects": [
      "人脸识别",
      "面相",
      "技术偏见",
      "计算摄影",
      "森林",
      "机器观看"
    ],
    "outputs": [
      "摄影",
      "影像",
      "研究笔记",
      "摄影书",
      "3D 模型",
      "装置"
    ],
    "institutions": [
      "Foam",
      "C/O Berlin"
    ],
    "achievements": [
      "C/O Berlin Talent Award 2025 · Artist winner",
      "Foam Talent 2024–2025",
      "Best Finnish Photo Book 2021 · Ground Truth",
      "Most Beautiful Book in Finland 2021 · Ground Truth"
    ],
    "whyImportant": "他特别适合用来理解“摄影进入计算系统后发生了什么”：同一张照片可以是面部预测样本、遥感验证材料、3D 纹理贴图或森林模型的输入，而不只是供人观看的成片。",
    "projects": [
      {
        "year": "2023–ongoing",
        "title": "(Inter)Faces of Predictions",
        "type": "自画像 / 面部预测 / 机器视觉",
        "facts": [
          "把自己的脸交给东亚面相、西方 physiognomy、人脸识别、facial phenotyping、生成式面孔与 synthetic facial data 等不同预测体系。",
          "将历史资料、found footage、自画像、图表、物件和 video essay 组织成一套关于“如何读脸”的视觉考古。"
        ],
        "reading": "重点不是比较哪套方法更准确，而是看民间面相与算法预测为什么都依赖把复杂的人压缩成可读特征。"
      },
      {
        "year": "2019–2022",
        "title": "Ground Truth, or How To Resurrect a Tree",
        "type": "遥感 / 高光谱成像 / 科研协作",
        "facts": [
          "进入芬兰森林遥感研究，与科学家的实地测量、光谱数据和卫星影像工作流程并行。",
          "把档案影像、纪录摄影、实验数据与 point cloud 重新编排成 video essay、展览与摄影书。"
        ],
        "reading": "项目追问的不是机器是否“看见树”，而是一个遥感像素如何通过现场数据、模型和算法被重新解释为一棵具体的树。"
      },
      {
        "year": "2020–2024",
        "title": "Everything Is A Projection, or How To Digitize Light",
        "type": "projective texturing / 3D 对象 / 摄影数据",
        "facts": [
          "疫情期间从自己的桌面开始，用 projective texturing 将日常物件逐一数字化。",
          "摄影不作为终稿，而被拆成 texture map、normal map、bump map 等供 3D 渲染系统使用的数据。"
        ],
        "reading": "这个项目最适合拿来理解照片如何从“图像”变成“说明虚拟物体表面应该如何反光和起伏的指令”。"
      },
      {
        "year": "2023–2024",
        "title": "Between Two Trees, There Are Many Worlds",
        "type": "高光谱成像 / 激光扫描 / 多物种感知",
        "facts": [
          "以赫尔辛基中央森林的一棵存活树和一棵死亡树作为固定观察起点。",
          "使用 hyperspectral imaging 与 laser scanning，再把数据转为影像，比较人类、鹰、bark beetle 与技术传感器的感知范围。"
        ],
        "reading": "作品把“看见”拆成不同物种和设备各自的世界，提醒我们传感器得到的信息从来不是完整自然本身。"
      }
    ],
    "images": [
      {
        "url": "https://a.storyblok.com/f/113697/2000x3000/19a94b1299/shooting_20230403_face-studio_023.jpeg",
        "title": "Facial landmarks, 2023",
        "credit": "© Sheung Yiu",
        "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
        "sourceLabel": "Foam · 数字展览"
      },
      {
        "url": "https://a.storyblok.com/f/113697/2000x2667/098018113d/shooting_20230519__ground-truth_face-vare-studio_088.jpg",
        "title": "Twisted face, 2023",
        "credit": "© Sheung Yiu",
        "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
        "sourceLabel": "Foam · 数字展览"
      },
      {
        "url": "https://a.storyblok.com/f/113697/1270x925/3f0ef675d5/notebook-sheung-yiu-2.jpg",
        "title": "(Inter)Faces of Predictions · 研究笔记",
        "credit": "© Sheung Yiu",
        "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
        "sourceLabel": "Foam · 数字展览"
      }
    ],
    "sourceLabel": "Sheung Yiu · 官方项目档案",
    "sourceUrl": "https://www.sheungyiu.com/"
  },
  {
    "id": "biennale-rehab-eldalil",
    "name": "Rehab Eldalil",
    "born": "—",
    "base": "—",
    "intro": "与埃及南西奈圣凯瑟琳的贝都因社群长期合作，将摄影与当地诗歌、刺绣、声音和植物知识共同组织为土地与归属的叙事。",
    "methods": [
      "社群协作",
      "田野摄影",
      "刺绣",
      "声音记录"
    ],
    "subjects": [
      "土地",
      "归属",
      "贝都因社群"
    ],
    "outputs": [
      "摄影",
      "声音",
      "影像",
      "刺绣"
    ],
    "institutions": [
      "Foam",
      "Sharjah Biennial"
    ],
    "achievements": [
      "Foam Talent 2024–2025",
      "Sharjah Biennial 15 · 2023"
    ],
    "whyImportant": "对照照片与刺绣，观察社群知识怎样进入图像制作，而不仅成为被拍摄的题材。",
    "projects": [
      {
        "year": "约十年协作 / 2024–2025 展出；起止年待核",
        "title": "The Longing of the Stranger Whose Path Has Been Broken",
        "type": "社群协作 / 田野摄影",
        "facts": [
          "与圣凯瑟琳当地居民长期协作，将人物、土地与日常经验纳入摄影。",
          "将照片与当地诗歌、刺绣、声音、影像和植物知识并置。"
        ],
        "reading": "对照照片与刺绣，观察社群知识怎样进入图像制作，而不仅成为被拍摄的题材。"
      }
    ],
    "images": [
      {
        "url": "https://a.storyblok.com/f/113697/2000x1333/fcc412677f/the-longing_rehab-eldalil_5.jpeg",
        "title": "The Longing · 南西奈的牧羊女性",
        "credit": "© Rehab Eldalil",
        "sourceUrl": "https://www.foam.org/talent-2024/artist/rehab-eldalil",
        "sourceLabel": "Foam · 数字展览"
      },
      {
        "url": "https://a.storyblok.com/f/113697/3120x4679/f5dd5e84c9/the-longing_rehab-eldalil_26.jpg",
        "title": "The Longing · 刺绣覆盖的植物图像",
        "credit": "© Rehab Eldalil",
        "sourceUrl": "https://www.foam.org/talent-2024/artist/rehab-eldalil",
        "sourceLabel": "Foam · 数字展览"
      }
    ],
    "sourceLabel": "Foam · 数字展览",
    "sourceUrl": "https://www.foam.org/talent-2024/artist/rehab-eldalil"
  }
];

export const foamResearchArchives: Record<string, ArtistArchive> = Object.fromEntries(
  foamResearchArtists.map(artist => {
    const project = artist.projects[0];
    return [artist.id, {
      artistId: artist.id,
      projectCoverage: '1 个已核对重点项目 · 其余作品待补',
      imageCoverage: `1 / 1 重点项目已建立图像档案 · ${artist.images.length} 张图像`,
      note: '2026-09-25 按 Foam 数字展览核对。展出年份与创作年份分别标注；本条不代表作品全集。',
      projects: [{ title: project.title, cluster: project.type, period: project.year,
        summary: project.reading, actions: project.facts, sourceUrl: artist.sourceUrl,
        images: artist.images, relations: [{ kind: '展览' as const, label: 'Foam Talent 2024–2025' }] }],
      awards: [], exhibitions: artist.achievements,
      sources: [{ label: artist.sourceLabel, url: artist.sourceUrl }],
    }];
  })
);
