import type { Artist } from './data';

// Source audit: research/updates/2026-10-08-broadening23.md
export const broadeningBatch23: Artist[] = [
  {
    id: 'ranti-bam', name: 'Ranti Bam', born: '1982', base: 'Paris / Lagos',
    intro: '出生于 Lagos、往返 Paris 与 Lagos 工作的陶艺家，以手工塑造的大型陶土容器、雕塑和装置研究身体、祖先连续性、Yoruba 精神观与材料能动性。她把陶土理解为共同创作的有灵物质，而非被动媒介；空腔、指痕、黑色表面和近似身体的尺度共同构成生者与精神相遇的入口。',
    methods: ['手工陶土塑形', '容器—身体互喻', 'Ifa 精神观转译', '指痕与劳动保留', '建筑材料对话'],
    subjects: ['祖先连续性', 'Yoruba 宇宙观', '身体与容器', '精神与物质', '照护与守护', '劳动历史'],
    outputs: ['大型陶土雕塑', '陶瓷容器', '场域装置'],
    institutions: ['La Biennale di Venezia', 'Arsenale', 'James Cohan Gallery', 'Yorkshire Sculpture Park'],
    achievements: ['Biennale Arte 2026 invited artist', 'Yorkshire Sculpture Park solo presentation 2023'],
    whyImportant: '关注理由：Bam 不把“祖先性”停留在装饰符号，而让手塑、空腔、黑土和建筑砖墙发生具体物质关系；她的作品把陶艺从器物类别扩展为需要身体绕行、同时包含脆弱与守护功能的空间存在。',
    projects: [{
      year: '2026', title: 'Ifa Ile Oja – Black Ifa', type: '五件大型黑色陶土雕塑／Biennale Arte 2026',
      facts: ['五件共享标题的雕塑在 Arsenale 中作为近似图腾的守护者出现。', '作品以 Ifa 的“占卜”与“拉近”双重含义为起点，把陶土视为精神寄居并参与创作的物质。', '黑色陶土与 Arsenale 由手工塑造的前工业砖墙并置，使祖传制作方式与资本主义生产机制发生对话。'],
      reading: '解读：容器内部的空并非缺失，而是作品将身体、孕育和精神关系集中起来的场所；手塑陶土与旧砖的对应，也让“祖传劳动”在展场材料中获得可见支点。'
    }], images: [], sourceLabel: 'La Biennale di Venezia — Ranti Bam', sourceUrl: 'https://www.labiennale.org/en/art/2026/ranti-bam'
  },
  {
    id: 'adebunmi-gbadebo', name: 'Adebunmi Gbadebo', born: '1992', base: 'Philadelphia / Newark, USA',
    intro: '出生于 Livingston、工作于 Philadelphia 与 Newark 的跨媒介艺术家，以来自美国南方种植园墓地的红土、非洲侨民头发、靛蓝、稻米和手工颜料制作陶器、纸张、版画与装置。她从自身被奴役祖先的土地和档案出发，将材料采集、盘筑与纪念实践结合，研究土地、身体、亲属关系和记忆如何互相保存。',
    methods: ['祖源材料采集', '手工盘筑陶艺', '头发嵌入', '档案与族谱研究', '手制颜料与纸张'],
    subjects: ['美国奴隶制历史', '祖先与墓地', '土地记忆', 'African diaspora', '丧葬与修复', 'Black craft traditions'],
    outputs: ['陶土容器', '雕塑', '丝网版画', '手工纸', '装置'],
    institutions: ['La Biennale di Venezia', 'Smithsonian National Museum of African Art', 'Metropolitan Museum of Art', 'The Clay Studio Philadelphia', 'Biennale of Sydney'],
    achievements: ['Biennale Arte 2026 invited artist', 'Maxwell/Hanrahan Fellow 2023', 'Pew Fellow 2022'],
    whyImportant: '关注理由：Gbadebo 的材料不是对历史的泛化隐喻：红土有明确墓地来源，头发来自非洲侨民身体，盘筑方法同时联系 South Carolina 的 Old Edgefield potters 与西非传统；作品因此把家族史、土地权与制作伦理压在同一物体中。',
    projects: [{
      year: '2025–2026', title: 'Hole it Dere Till da Brick Done Dry Out', type: '红土陶器、头发、稻米、纸上作品与丝网版画／Biennale Arte 2026',
      facts: ['陶土来自 South Carolina 的 True Blue plantation 墓地，即艺术家祖先曾被迫劳动之地。', '艺术家以手工盘筑方法制作容器，并在部分作品中嵌入稻米、人发和 afro locs。', '周围的版画与纸上作品使用相似来源的手制油墨和颜料，并唤起种植园周边水域景观。'],
      reading: '解读：土地不再只是作品的题材，而真正进入器物结构；然而材料的伦理重量也要求观看者知道来源，因此作品有意依赖可核实的谱系和地点，而不是让视觉形式独自代替历史。'
    }], images: [], sourceLabel: 'La Biennale di Venezia — Adebunmi Gbadebo', sourceUrl: 'https://www.labiennale.org/en/art/2026/adebunmi-gbadebo'
  },
  {
    id: 'temitayo-ogunbiyi', name: 'Temitayo Ogunbiyi', born: '1984', base: 'Lagos / Nigeria',
    intro: '出生于 Rochester、常驻 Lagos 的跨媒介艺术家，将植物形态、发型几何、导航图、家庭器具与游乐设施连接到绘画、雕塑和参与式环境。她关注移动系统如何引导人和物，也把 Yoruba 编发、跨文化发饰、植物知识和儿童游戏视为身体保存身份、照护与交流史的方式。',
    methods: ['跨文化形态比较', '发型几何转译', '功能性游乐结构', '日常材料改造', '参与式空间设计'],
    subjects: ['植物知识', '头发与身体档案', '游戏与照护', '迁移路线', '跨代知识传递', '社会参与'],
    outputs: ['参与式雕塑', '游乐场装置', '绘画', '纸上作品', '环境装置'],
    institutions: ['La Biennale di Venezia', 'The Noguchi Museum', 'Museum Tinguely', 'Wexner Center for the Arts', 'Lagos Biennial'],
    achievements: ['Biennale Arte 2026 invited artist', 'Created fourteen functional playground projects since 2018'],
    whyImportant: '关注理由：Ogunbiyi 的跨文化比较不是图案拼贴，而通过弯曲金属、绳索、家具和可攀爬结构把发型线条与导航、玩耍和照护动作重新落到身体尺度；观众参与成为知识关系的一部分。',
    projects: [{
      year: '2026', title: 'Hair-threading and Play Structures', type: '参与式雕塑、绘画与装置／Biennale Arte 2026',
      facts: ['作品把植物形态、发型技术、游乐设施与导航图的图解逻辑交织起来。', '研究参照 Victorian hairwork、Coastal Wari 假发、Yoruba Ogun Pari 编发和 Maasai Oldeka warrior style，将发型理解为保护、力量与身体档案。', '可参与的雕塑延续艺术家自 2018 年起对低规定性、可接近游乐结构的研究。'],
      reading: '解读：线条从纸上图示变成可触摸和绕行的结构后，文化比较才不只是相似性列表；儿童与成人不同的运动路径也使“知识传递”成为现场发生的身体协商。'
    }], images: [], sourceLabel: 'La Biennale di Venezia — Temitayo Ogunbiyi', sourceUrl: 'https://www.labiennale.org/en/art/2026/temitayo-ogunbiyi'
  },
  {
    id: 'eustaquio-neves', name: 'Eustáquio Neves', born: '1955', base: 'Diamantina / Brazil',
    intro: '出生于 Juatuba、常驻 Diamantina 的巴西自学摄影家，自 1980 年代末持续研究巴西 Afro-diasporic 社群在奴隶制历史、亲属网络与当代社会之间的断裂和延续。他通过长期进入社区、暗房遮挡与叠印、负片刮擦、旧相纸乳剂和档案再加工，使摄影同时承担见证、删除、哀悼与抵抗遗忘的功能。',
    methods: ['长期社区关系建立', '暗房操控', '档案图像重印', '叠印与遮蔽', '旧乳剂纸实验'],
    subjects: ['Afro-Brazilian 社群', '奴隶贸易记忆', '亲属与共同体', 'Valongo Wharf', '匿名与哀悼', '历史裂缝'],
    outputs: ['银盐摄影', '实验暗房作品', '档案摄影系列', '手工处理照片'],
    institutions: ['La Biennale di Venezia', 'Museu Afro Brasil', 'Galeria Vermelho', 'Galeria Cavalo', 'Instituto Moreira Salles'],
    achievements: ['Biennale Arte 2026 invited artist', 'Prêmio Marc Ferrez de Fotografia 1994'],
    whyImportant: '关注理由：Neves 对档案的介入并非为旧照片添加复古质感：在一个系列中他通过亲密关系确认共同体的生活力量，在另一个系列中主动抹去可识别人脸，以避免用新拍摄再次占有创伤地点；可见与不可见承担不同伦理任务。',
    projects: [{
      year: '1993–2016', title: 'Arturos / Cartas ao mar', type: '长期纪实摄影、暗房操控与档案再加工／Biennale Arte 2026',
      facts: ['Arturos（1993–1995）源于艺术家与 Minas Gerais 一个数百年历史 Black community 长期建立关系，既是社会生活档案，也使用早期暗房操控策略。', 'Cartas ao mar（2016）研究 Valongo Wharf 后没有在遗址现场拍新照片，而回到个人档案并把七幅人像处理到无法辨认个体。', '这些肖像叠加于墓碑照片，并印在旧的乳剂涂布纸上，使其具有受损档案的时间表面。'],
      reading: '解读：两个系列构成一组伦理反差：共同体生活需要具体关系和可见性，奴隶贸易遗址则以遮蔽抵抗消费式辨认；技术处理因此改变了摄影对人物负有的责任。'
    }], images: [], sourceLabel: 'La Biennale di Venezia — Eustáquio Neves', sourceUrl: 'https://www.labiennale.org/en/art/2026/eust%C3%A1quio-neves'
  },
  {
    id: 'rana-elnemr', name: 'rana elnemr', born: '1974', base: 'Cairo / Egypt',
    intro: '出生于 Hanover、常驻 Cairo 的艺术家，以摄影、印刷、雕塑、声音、文字和长期研究观察城市边缘、植物材料、节律与空间经验。她把探索和仪式作为进入材料的方式，常通过重力、悬挂、对齐、重复路径与集体发声，使图像不再是孤立平面，而成为连接建筑、劳动和听觉的路线。',
    methods: ['椭圆路径编排', '摄影印于织物', '悬挂与重力结构', '材料声学研究', '协作式现场事件'],
    subjects: ['城市边缘', '糖蔗与芦苇', '避难空间', 'Sufi maqamat', '开放与保护', '集体聆听'],
    outputs: ['摄影', '织物印刷', '雕塑', '声音作品', '场域装置与现场事件'],
    institutions: ['La Biennale di Venezia', 'Contemporary Image Collective Cairo', 'Sharjah Art Foundation', 'Kunsthalle Wien', 'Zeitz MOCAA'],
    achievements: ['Biennale Arte 2026 invited artist', 'Co-founder of Contemporary Image Collective Cairo'],
    whyImportant: '关注理由：elnemr 把摄影从“观看对象”改造成行进和聆听的引导装置：织物印刷随悬挂产生运动，糖蔗与芦苇的孔隙、风声和传统管乐又把植物结构转成声学模型，使场域研究真正进入展示机制。',
    projects: [{
      year: '2020–2026', title: 'The Sugarcane Choir', type: '摄影、织物印刷、雕塑、声音与四条椭圆路径／Biennale Arte 2026',
      facts: ['装置跨越 Arsenale 室内外空间，并以四条椭圆路径组织观看。', '印在织物并由金属线悬挂的 the tachograph records（2020）贯穿全部路径，连接雕塑、版画、装置与照片。', '糖蔗和芦苇被制作成传统管乐器，以 maqamat 组织声音；项目最终汇聚到展期最后一周的合唱现场事件。'],
      reading: '解读：糖蔗地“越密越有缝隙”的结构同时成为空间和声音原则；作品最有力之处不在象征边缘者，而在让开放／保护的矛盾通过路径、悬挂和气流被身体感知。'
    }], images: [], sourceLabel: 'La Biennale di Venezia — rana elnemr', sourceUrl: 'https://www.labiennale.org/en/art/2026/rana-elnemr'
  },
  {
    id: 'leonilda-gonzalez', name: 'Leonilda González', born: '1923–2017', base: 'Montevideo / Uruguay',
    intro: '出生于 Minuano、后工作于 Montevideo 的乌拉圭版画家、教育者与组织者，以木刻的可复制性和低门槛传播社会批评、女性处境与反独裁立场。她共同创办 Club de Grabado de Montevideo，将版画工坊、集体学校和会员支持的独立文化网络结合，在艺术生产与公共组织之间建立长期基础设施。',
    methods: ['木刻复制传播', '软刀面渐层雕刻', '活字印刷协作', '讽刺性人物塑造', '集体工坊组织'],
    subjects: ['女性婚姻制度', '社会变革', '独立文化运动', '乌拉圭独裁', '公共传播', '艺术教育'],
    outputs: ['木刻版画', '大批量原作印刷', '平面出版物', '教育与集体项目'],
    institutions: ['La Biennale di Venezia', 'Club de Grabado de Montevideo', 'Museo Nacional de Artes Visuales Uruguay', 'Dirección Nacional de Cultura Uruguay'],
    achievements: ['Biennale Arte 2026 historical artist', 'Co-founder of Club de Grabado de Montevideo'],
    whyImportant: '关注理由：González 的政治性不仅存在于图像主题，也存在于生产和分发制度：木刻、活字机与会员制集体让原作能够成千印制并进入更广泛公众；她由此把“可复制”从技术属性变成独立文化行动。',
    projects: [{
      year: '1968–1970s', title: 'Novias revolucionarias (Revolutionary Brides)', type: '高反差黑白木刻与活字印刷传播',
      facts: ['系列以 Byzantine-inspired 的身体与面孔描绘愤怒的新娘，结合讽刺、反讽与政治怒意。', '艺术家以刀的柔软一侧逐层移除木材获得细微明暗，并借活字印刷机与 Club de Grabado 大量生产原作。', '作品最初批判婚姻制度对女性的“囚禁”，随后也被理解为对 Uruguay 1973–1985 军事独裁的反对图像。'],
      reading: '解读：新娘不是被塑造成纯粹受害者，而以强烈正面姿态把婚庆图像转成抗议面孔；大量印制进一步破坏“唯一原作”的稀缺逻辑，使愤怒能够流通。'
    }], images: [], sourceLabel: 'La Biennale di Venezia — Leonilda González', sourceUrl: 'https://www.labiennale.org/en/art/2026/leonilda-gonz%C3%A1lez'
  }
];
