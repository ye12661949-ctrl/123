import type { Artist } from './data';

// Source audit: research/updates/2026-10-08-broadening25.md
export const broadeningBatch25: Artist[] = [
  {
    id: 'mohammed-joha', name: 'Mohammed Joha', born: '1978', base: 'Marseille, France',
    intro: '出生于 Gaza、常驻 Marseille 的巴勒斯坦艺术家，以绘画、拼贴和装置处理被摧毁的居所、强迫迁徙、记忆与继续生存的能力。他把纸张、纸板、布料等废弃材料层叠到画布上，将 Gaza 日常生活中反复拆除与重建的物质经验转成图像结构；水彩则以较轻的笔触保存地景和难以熄灭的生命迹象。',
    methods: ['废弃材料拼贴', '画布层叠', '水彩地景', '碎片化构图', '毁坏材料再利用'],
    subjects: ['Gaza', '被迫迁徙', '居所毁坏', '集体记忆', '照护与坚持', '拒绝消失'],
    outputs: ['混合媒介拼贴', '绘画', '水彩', '装置'],
    institutions: ['La Biennale di Venezia', 'Al-Aqsa University', 'Darat al-Funun', 'A. M. Qattan Foundation'],
    achievements: ['Biennale Arte 2026 invited artist', 'A. M. Qattan Foundation Young Artist Award 2004'],
    whyImportant: '关注理由：Joha 没有把废料仅作为战争的象征，而让纸板、布片和断裂边缘直接承担“拆毁—重组”的形式逻辑；拼贴的物质阻力与水彩的克制并置，使创伤记录不只依赖新闻图像，也保留照护、坚持和日常重建的尺度。',
    projects: [{
      year: '2024–2026', title: 'No Shelter', type: '废弃材料拼贴与 Gaza 水彩地景／Biennale Arte 2026',
      facts: ['艺术家在屏幕上目睹 Gaza 近乎全面毁灭期间创作该系列。', '拼贴把纸、纸板和布料等废弃材料覆盖于画布，鲜明色块和不规则边缘对应持续毁坏与重建的循环。', '系列同时包含以简练笔触描绘 Gaza 地景的水彩，画面常出现较亮色点，如未被熄灭的生命脉冲。'],
      reading: '解读：拼贴不是替灾难制造视觉奇观，而通过反复接合暴露“没有完整表面可返回”的现实；水彩与厚重拼贴之间的媒介落差，则避免作品只停留在废墟美学。'
    }], images: [], sourceLabel: 'La Biennale di Venezia — Mohammed Joha', sourceUrl: 'https://www.labiennale.org/en/art/2026/mohammed-joha'
  },
  {
    id: 'mohammed-z-rahman', name: 'Mohammed Z. Rahman', born: '1997', base: 'London, UK',
    intro: '出生并工作于 London 的 British Bangladeshi 艺术家，以绘画、雕塑、素描和 zine 连接酷儿、工人阶级与侨民主体经验。早期人类学训练无法容纳其多层身份后，绘画成为把梦境、民间故事、历史事件和亲密情绪并置的方法；作品常在小尺度物件、运输箱和开放木架中流动，使私人哀伤进入公共政治史。',
    methods: ['微型绘画', '民间故事重组', '现成运输箱再利用', '正反面展示', '绘画与 zine 叙事'],
    subjects: ['British Bangladeshi identity', '酷儿亲密关系', '工人阶级经验', 'AIDS history', '心碎与哀悼', '政治动荡'],
    outputs: ['绘画', '雕塑', '素描', 'zine', '开放结构装置'],
    institutions: ['La Biennale di Venezia', 'Central Pavilion'],
    achievements: ['Biennale Arte 2026 invited artist'],
    whyImportant: '关注理由：Rahman 把情绪尺度和历史尺度放在同一展示系统中：火柴盒上的花与烛光、AIDS 纪念性的运输箱和社会动荡中的火彼此邻接，却不把个人经验简化为政治案例；开放木架也让画背笔记与运输痕迹成为作品证据。',
    projects: [{
      year: '2024–2026', title: 'Rolling Heart', type: '绘画、火柴盒、运输箱、雕塑与开放木架装置／Biennale Arte 2026',
      facts: ['装置使用简单松木组成开放框架，绘画朝内或朝外悬挂，使背面的图像和笔记也能被观看。', 'Lovers’ Vigil（2024）由六十四幅火柴盒绘画组成，以花、蜡烛等物件处理心碎。', 'Memento Vivere（2024）把运输箱画成安全套包装，纪念 AIDS epidemic 中的工人、照护者、爱人和行动者；其他运输箱同时成为画面和观众座位。'],
      reading: '解读：火柴盒的亲密尺度要求靠近，木箱座位则让身体进入展示结构；两种观看距离把私人失落与集体危机连接起来，而不是只靠文字声明它们相互关联。'
    }], images: [], sourceLabel: 'La Biennale di Venezia — Mohammed Z. Rahman', sourceUrl: 'https://www.labiennale.org/en/art/2026/mohammed-z-rahman'
  },
  {
    id: 'wardha-shabbir', name: 'Wardha Shabbir', born: '1987', base: 'Lahore, Pakistan',
    intro: '出生并常驻 Lahore 的巴基斯坦艺术家，以南亚细密画训练为基础，将花园记忆、卫星影像、迁徙路径和环境压力转化为密集的植物几何、绘画与雕塑。她反复使用 Urdu 中称为 mukhi 的花蕾中心形态，使其同时像俯瞰火山、子宫和向外伸展的多臂结构，讨论母职、适应、成为与城市生态的脆弱性。',
    methods: ['当代细密画', '植物几何编码', '卫星影像转译', '路径与导向构图', '绘画向雕塑扩展'],
    subjects: ['Lahore garden city', '环境退化', '母系记忆', '迁徙与寻路', '女性多重劳动', '植物适应'],
    outputs: ['细密绘画', '纸上作品', '雕塑', '沉浸式植物环境'],
    institutions: ['La Biennale di Venezia', 'Central Pavilion', 'Arsenale', 'Sabrina Amrani Gallery'],
    achievements: ['Biennale Arte 2026 invited artist'],
    whyImportant: '关注理由：Shabbir 没有把细密画作为固定传统样式保存，而用卫星俯瞰、地图路径和耐极端植物改变其空间逻辑；装饰性叶片因迁徙、环境压力与母职劳动获得方向和张力，使生态主题真正进入构图。',
    projects: [{
      year: '2025–2026', title: 'The Symphony of Silence / A Home Is Where My Leaves Are', type: '当代细密画与植物研究雕塑／Biennale Arte 2026',
      facts: ['The Symphony of Silence（2025）让 mukhi 形态穿越参考卫星影像、寻路、迁徙和个人旅程的构图。', '作品中的 mukhi 是花蕾中心，也被处理为俯瞰火山、子宫和多臂形态，指向成为与女性承担多重责任。', 'A Home Is Where My Leaves Are（2026）源于对能适应极端环境的植物研究，把想象生态系统推进到雕塑空间。'],
      reading: '解读：细密叶片不是自然的被动再现，而像导航网络一样分配观看路径；从绘画到雕塑的转变进一步检验“适应”能否成为空间结构，而不只是象征性植物题材。'
    }], images: [], sourceLabel: 'La Biennale di Venezia — Wardha Shabbir', sourceUrl: 'https://www.labiennale.org/en/art/2026/wardha-shabbir'
  },
  {
    id: 'vera-tamari', name: 'Vera Tamari', born: '1944', base: 'Ramallah, Palestine',
    intro: '出生于 Jerusalem、长期常驻 Ramallah 的巴勒斯坦艺术家、教师和机构建设者，四十余年持续扩展陶土与绘画、摄影、录像装置、公共雕塑和行为的关系。她通过研究、绘图、材料测试、分块、烧制、打磨、收缩与重新拼合制作纪念性陶土浮雕，使漫长协作劳动、窑烧风险和材料时间承载毁坏、剥夺、植物韧性与集体技艺。',
    methods: ['纪念性陶土浮雕', '分块烧制与重组', '长期材料测试', '集体手工协作', '陶瓷与影像跨媒介'],
    subjects: ['Palestinian dispossession', '树木与种子', '毁坏与韧性', '集体劳动', '材料时间', '艺术教育与制度建设'],
    outputs: ['陶土浮雕', '陶瓷装置', '布面绘画', '摄影与录像装置', '公共雕塑与行为'],
    institutions: ['La Biennale di Venezia', 'Birzeit University', 'Zawyeh Gallery', 'Teiger Foundation'],
    achievements: ['Biennale Arte 2026 invited artist', 'Long-term arts educator and institution builder in Ramallah'],
    whyImportant: '关注理由：Tamari 的作品把陶土易裂、收缩和必须分块的限制保留下来，而不是用技术掩盖；重新拼合因此既是制作事实，也是面对剥夺与断裂的形式伦理。她同时以教学和协作将个人工作室方法转化为地方艺术基础设施。',
    projects: [{
      year: '2002–2019', title: 'Tale of a Tree / Mantra', type: '数百件陶土组件与旋转陶瓷种子装置',
      facts: ['Tale of a Tree（2002）由数百块陶土组件构成，纪念性表面需经分块、烧制收缩后重新组合。', 'Mantra（2019）让陶瓷种子旋转，使重复运动和观看时长成为雕塑的一部分。', '两组作品建立在研究、预备绘图、材料测试、硬化、打磨与窑烧等劳动密集阶段上，并始终承担破裂风险。'],
      reading: '解读：树与种子的生命象征并不单独支撑作品；更关键的是陶土经历不可逆烧制后仍要被逐块接回整体，材料过程让毁坏、延续与集体修复获得具体时间。'
    }], images: [], sourceLabel: 'La Biennale di Venezia — Vera Tamari', sourceUrl: 'https://www.labiennale.org/en/art/2026/vera-tamari'
  },
  {
    id: 'yo-e-ryou', name: 'Yo-E Ryou', born: '1987', base: 'Seoul / Jeju Island, South Korea',
    intro: '出生于 Seoul、工作于 Seoul 与 Jeju Island 的韩国艺术家，以声音、录像、绘画、行为和协作研究水、身体记忆及非文字化知识如何流动。移居 Jeju 后，她与无需氧气设备下潜的 haenyeo 女性潜水者长期相处，将调息、下潜、屏息劳动和恢复呼吸转写为多声道声学结构，同时明确区分自己因欲望进入海洋与海女因劳动进入海洋的差异。',
    methods: ['呼吸谱记写', '多声道声音装置', '身体知识协作研究', '长时行为', '水下经验转译'],
    subjects: ['Jeju haenyeo', '呼吸与劳动', '水与身体记忆', 'hydrofeminism', '共同体聆听', '恢复与修复'],
    outputs: ['声音装置', '录像', '绘画', '行为', '研究型装置'],
    institutions: ['La Biennale di Venezia', 'Musée du quai Branly – Jacques Chirac', 'SONGEUN Art and Cultural Foundation', 'Arts Council Korea'],
    achievements: ['Biennale Arte 2026 invited artist', 'Musée du quai Branly sound residency laureate 2025'],
    whyImportant: '关注理由：Ryou 将海女知识从可消费的壮观水下影像转向呼吸长度、沉默和恢复次数，迫使观众用时间与听觉接近劳动；她又主动标注参与者与职业潜水者之间的不对等，避免协作研究把他者经验直接据为己有。',
    projects: [{
      year: '2024–2026', title: 'Breath Orchestra', type: '绘画、双频道录像、多声道声音、行为与 bulteok 式座席／Biennale Arte 2026',
      facts: ['项目的座席参照 haenyeo 聚集休息的露天围合空间 bulteok，作品同时包含绘画、两件录像、多声道声音和行为。', '呼吸谱由四种长度构成：准备下潜的调节呼吸、提供能量的强力呼吸、水下劳动的长时间静默，以及浮出后的恢复呼吸。', '完整循环可持续三至四小时，恢复呼吸有时重复二十余次，时长由身体恢复需要决定。'],
      reading: '解读：呼吸既是作品声音，也是测量劳动与风险的时间单位；长循环拒绝把海女压缩成单一英雄形象，并使“修复”表现为反复、缓慢且无法预设长度的身体过程。'
    }], images: [], sourceLabel: 'La Biennale di Venezia — Yo-E Ryou', sourceUrl: 'https://www.labiennale.org/en/art/2026/yo-e-ryou'
  },
  {
    id: 'sawangwongse-yawnghwe', name: 'Sawangwongse Yawnghwe', born: '1971', base: 'Zutphen / Chiang Mai',
    intro: '出生于 Burma Shan State、工作于 Netherlands Zutphen 与 Thailand Chiang Mai 的艺术家，以绘画、陶土雕塑、殖民地图和档案照片研究军政统治、土地掠夺、少数民族历史与种族灭绝经济。他把 Rohingya、Karen、Kachin 和 Shan peoples 的被迫迁移放入 Myanmar 长期内战与资源剥夺结构，也通过重绘地图和挪用档案收回土地叙事、历史解释与图像版权。',
    methods: ['殖民地图重绘', '档案照片再占有', '政治绘画', '群体陶土塑像', '图表与编码色彩'],
    subjects: ['Myanmar military rule', 'Rohingya genocide', 'Shan minority history', '土地与资源掠夺', '革命与自我暴力', '跨地域战争'],
    outputs: ['绘画', '陶土装置', '雕塑', '档案与地图作品'],
    institutions: ['La Biennale di Venezia', 'Tina Keng Gallery', 'Mondriaan Fund'],
    achievements: ['Biennale Arte 2026 invited artist'],
    whyImportant: '关注理由：Yawnghwe 把暴力从单一事件追溯到地图、资源、版权和行政分类组成的经济结构；粗塑人物的数量压力与殖民地图的再书写互相补充，使抽象制度与被迫迁移的身体后果同时可见。',
    projects: [{
      year: '2018–2025', title: 'People’s Desire / Which Way to Land? / Parallax', type: '2,500 件陶土人物、殖民地图重绘与政治绘画／Biennale Arte 2026',
      facts: ['People’s Desire（2018）是一件约六米长、包含 2,500 个粗塑陶土人物的装置，家庭步行或乘船形成大规模出走。', 'Which Way to Land? An Open Question about Burma’s Fate（2023）与 The Bed of Gold Stream（2024）重绘 Shan minority 的殖民地图和照片，重新主张土地、历史、资源与版权。', '两幅 Parallax 绘画把 Burma 的结构性暴力与 Ukraine、Gaza、West Bank 联系；The Idiot’s Parallax（2025）借用程序员配色讨论去殖民化暴力向内回转的风险。'],
      reading: '解读：陶偶的粗糙并非个体刻画不足，而让数量与迁移方向首先压迫观看；地图作品再解释造成这种出走的制度坐标，两类媒介共同阻止“难民群像”脱离资源政治被消费。'
    }], images: [], sourceLabel: 'La Biennale di Venezia — Sawangwongse Yawnghwe', sourceUrl: 'https://www.labiennale.org/en/art/2026/sawangwongse-yawnghwe'
  }
];
