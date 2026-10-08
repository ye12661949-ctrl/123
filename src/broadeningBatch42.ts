import type { Artist } from './data';

// Source audit: research/updates/2026-10-09-broadening42.md
export const broadeningBatch42: Artist[] = [
  {
    id: 'alexander-gronsky', name: 'Alexander Gronsky', born: '1980', base: 'Estonia / Latvia',
    intro: '爱沙尼亚出生的摄影艺术家，以大画幅彩色地景、远距离人物和城市边缘调查研究自然、休闲与都市扩张之间的暧昧关系。他把莫斯科郊缘拍成既开阔又受基础设施包围的空间：人在雪地、河滩和荒地中游戏或休息，却始终被远处楼群、施工吊臂和地形边界保持为孤立的小尺度形体。',
    methods: ['大画幅地景摄影', '城市边缘调查', '远距离人物', '季节性重复观察', '绘画式构图'],
    subjects: ['Moscow periphery', 'urban expansion', 'leisure', 'nature and infrastructure', 'human isolation', '边界与过渡地带'],
    outputs: ['摄影系列', '摄影书', '大尺幅彩色照片', '机构展览', '限量版画'],
    institutions: ['Aperture', 'Foam Fotografiemuseum Amsterdam', 'Musée de l’Élysée', 'MAPFRE Foundation', 'Centre national des arts plastiques'],
    achievements: ['Aperture Portfolio Prize winner 2009', 'Foam Paul Huf Award 2010', 'Prix Levallois 2009', 'international museum exhibitions and collections'],
    whyImportant: '关注理由：Gronsky 没有把城市边缘简化为贫困、污染或浪漫荒野，而让同一地景同时容纳休闲、疏离和持续建设。人物在精密构图中被缩小，既显示宏观空间如何限制行动，也避免把单个居民变成说明社会问题的象征；他的影响在于把新地形摄影的冷静结构转化为后社会主义都市经验。',
    projects: [{
      year: '2008–2012', title: 'Pastoral / The Edge', type: '莫斯科城市边缘、休闲地景与自然边界／Aperture Portfolio Prize 2009 winner',
      facts: ['系列拍摄 Moscow 既非完全城市、也非乡村的外围地区；居民在雪地、河岸、林地和荒地中寻找休息空间，背景仍可见 skyline、construction cranes 与住宅体量。', 'Gronsky 常从远处固定视点组织人物，使人在宽阔地景中成为分离的小形体；积雪覆盖表面，却通过脚印、杂草和身体轮廓进一步强调个体之间的距离。', '图像把人工空间与野生空间同时处理为抽象、难以掌握的尺度，并反复出现临时庇护、半冻水面、非正式路径与城市地平线。'],
      reading: '解读：画面的力量来自比例而非事件——人物确实进入了地景，却无法占有它。精致、平衡的构图容易把都市不平等审美化，但道路、吊臂和边缘地带的持续出现阻止它彻底变成田园画；脱离说明后，人与环境互不相称的关系仍清楚成立。'
    }], images: [], sourceLabel: 'Aperture — Alexander Gronsky: Pastoral and The Edge', sourceUrl: 'https://aperture.org/editorial/2009-portfolio-prize-winner-alexander-gronsky/'
  },
  {
    id: 'alejandro-cartagena', name: 'Alejandro Cartagena', born: '1977', base: 'Monterrey, Mexico',
    intro: '多米尼加出生、在墨西哥工作的摄影艺术家，以长期地景调查、俯拍通勤者、档案拼贴和摄影书研究 Monterrey 的郊区扩张、劳动迁移与土地政策。他在河道、住宅区和交通路径之间建立连续观察，让城市增长不只是天际线变化，而是水系被切断、工人被长距离运输和家庭生活被开发逻辑重新安排的过程。',
    methods: ['长期城市地景调查', '高架俯拍', '类型学', '档案拼贴', '摄影书编辑'],
    subjects: ['Monterrey', 'suburban expansion', 'commuting labor', 'water systems', 'housing policy', 'urban ecology'],
    outputs: ['摄影系列', '摄影书', '拼贴', '限量版画', 'AI与档案实验'],
    institutions: ['Aperture', 'San Francisco Museum of Modern Art', 'George Eastman Museum', 'Fototeca de Nuevo León', 'Museum of Contemporary Photography Chicago'],
    achievements: ['Aperture Portfolio Prize shortlist 2009', 'SFMOMA mid-career survey Ground Rules 2025', 'more than thirty photobooks', 'international museum collections'],
    whyImportant: '关注理由：Cartagena 把郊区化拆成互相依赖的水系、住房、道路与劳动身体，而不是只拍摄壮观的新城或破败遗址。《Carpoolers》的俯视方法尤其直接：工人像货物般躺在皮卡车斗里，车辆结构与阶级结构在同一画面重合；他的摄影书实践又让单张图像进入可被重新排序、比较和传播的城市档案。',
    projects: [{
      year: '2006–2009', title: 'Lost Rivers / Suburbia Mexicana', type: '郊区扩张、水系破坏与城市政策／Aperture Portfolio Prize 2009 shortlist',
      facts: ['Lost Rivers 属于更大的 Suburbia Mexicana: Cause and Effect，调查 Monterrey 快速住房开发中人类与环境的相互依赖。', '艺术家拍摄被道路、住宅和废弃物改变的河道及周边地景，把 botched urban development 与 inadequate economic policy 留下的痕迹置于画面中心。', '形式上使用正面、开阔且具纪念碑感的地景构图，使受损环境仍显出视觉吸引力；这种美感与政策失败的证据并置。'],
      reading: '解读：河流并未以灾难奇观出现，而以断裂、干涸和被开发包围的日常地形出现。作品可能因大画幅式秩序把破坏变得过于优美，但被截断的水路与郊区网格在没有文字时仍能产生冲突；真正的批评来自系列间因果关系，而非单张照片的道德宣告。'
    }], images: [], sourceLabel: 'Aperture — Alejandro Cartagena: Lost Rivers', sourceUrl: 'https://aperture.org/editorial/2009-portfolio-prize-runner-up-alejandro-cartagena/'
  },
  {
    id: 'cara-barer', name: 'Cara Barer', born: '1956', base: 'Houston, Texas',
    intro: '美国摄影艺术家，以浸水、喷湿、卷曲和重新塑形的废弃书籍制作雕塑性静物。她从一本沾污的黄页开始，把百科全书、小说和手册的书页变成根系、漩涡、花朵或解剖组织般的结构，再以数字摄影固定短暂形态，从物质层面讨论纸质知识、阅读习惯与过时媒介。',
    methods: ['书籍浸水与喷湿', '雕塑性摆布', 'hair rollers与Velcro定形', '数字静物摄影', '单色与低彩度控制'],
    subjects: ['obsolete books', 'material transformation', 'knowledge systems', 'reading culture', 'decay and beauty', '纸张与媒介史'],
    outputs: ['摄影系列', '书籍雕塑', '喷墨版画', '机构展览'],
    institutions: ['Aperture', 'Museum of Fine Arts Houston / Glassell School of Art', 'Art Institute of Houston', 'Wright State University Art Galleries'],
    achievements: ['Aperture Portfolio Prize shortlist 2006', 'Photography Now: One Hundred Portfolios 2006', 'international gallery and collection record'],
    whyImportant: '关注理由：Barer 的主题不是在 statement 中附着于“书”的怀旧，而进入了实际制作：水破坏可读文字，同时赋予书页新的体积、阴影和动作。摄影把一次性纸雕转为可流通图像，也制造矛盾——作品哀悼印刷品消失，却依靠数字复制保存它；这种媒介转换比单纯拍摄旧书更有结构性。',
    projects: [{
      year: '2004–ongoing', title: 'The Book Project', type: '废弃书籍、水处理与雕塑性摄影／Aperture Portfolio Prize 2006 shortlist',
      facts: ['项目源于一本被丢弃并沾污的 Yellow Pages；后续书籍来自拾得、折扣购买或朋友捐赠。', 'Barer 将书浸入或喷洒水分，并用 hair rollers、Velcro 等材料控制页面卷曲，把 volumes 转化为临时雕塑。', '她以数字方式拍摄，根据纸张与背景控制 sepia、黑白或低彩度效果；页面的卷曲既像快速翻页，也形成 Rorschach 式的植物、根系和建筑联想。'],
      reading: '解读：水既是毁坏知识载体的动作，也是生产新形态的工具；概念与材料因而紧密相连。风险在于书页很容易沦为漂亮花朵式装饰，但书脊、页码和破损边缘保留可读媒介的残余，使图像仍能指向知识对象被重新消费的过程。'
    }], images: [], sourceLabel: 'Aperture — Cara Barer: The Book Project', sourceUrl: 'https://aperture.org/portfolio-prize/2006-portfolio-prize-runner-up-cara-barer/'
  },
  {
    id: 'michael-fisher-aperture', name: 'Michael Fisher', born: '出生年份未公开', base: 'United States',
    intro: '美国摄影艺术家，以正面、克制的室内摄影记录空置房间、受损墙面、遗留物和建筑痕迹。他不依赖人物或戏剧性事件，而让窗帘透入的光、被撕裂的灯罩、污渍、划痕与孤立家具构成近似犯罪现场的视觉线索，使居住空间在使用者消失后仍保留时间和行为的压力。',
    methods: ['无人室内摄影', '正面记录', '自然光观察', '建筑痕迹类型学', '低戏剧性叙事'],
    subjects: ['vacant interiors', 'domestic traces', 'detritus', 'abandonment', 'memory without figures', '建筑表面'],
    outputs: ['摄影系列', '彩色照片', '机构线上展览'],
    institutions: ['Aperture'],
    achievements: ['Aperture Portfolio Prize shortlist 2006', 'Aperture institutional feature'],
    whyImportant: '关注理由：Fisher 把“缺席”建立在可核查的物理痕迹上，而非用模糊焦点或超现实布景制造廉价幽灵感。空房间里的光和遗留物既不足以恢复完整故事，又强迫观众推测此前发生的生活；这种节制使作品成为早期 Aperture 新锐名单中偏向空间考古的一条重要路径。',
    projects: [{
      year: '2004–2006', title: 'Untitled Interiors', type: '空置室内、遗留物与居住痕迹／Aperture Portfolio Prize 2006 shortlist',
      facts: ['Aperture 将系列描述为 devoid of glamour 的 straightforward photographs，画面集中于 detritus、traces、markings 与 stained walls。', '一幅图让光穿过空房间的窗帘，另一幅以异常照明的 chandelier 制造不安；被撕裂的 lampshade 独自落在粗糙 concrete floor 上。', '系列不出现居住者，也不提供明确事件说明，而让表面损伤、物件位置和光线承担叙事。'],
      reading: '解读：作品最有效之处是拒绝替痕迹命名——灯罩可以像证物，却没有被证实为任何案件。单张图像能够依靠材质和空间关系成立；但若构图只追求“闹鬼”气氛，社会背景会被抽空，因此系列价值取决于痕迹的具体性是否持续压过风格化阴郁。'
    }], images: [], sourceLabel: 'Aperture — Michael Fisher: 2006 Portfolio Prize', sourceUrl: 'https://aperture.org/portfolio-prize/2006-portfolio-prize-runner-up-michael-fisher/'
  },
  {
    id: 'tomas-van-houtryve', name: 'Tomas van Houtryve', born: '1975', base: 'Paris / United States',
    intro: '比利时出生、在巴黎与美国工作的摄影艺术家，以长期纪实、冲突区域进入、无人机航拍和机器视觉研究权力如何决定谁能观看、谁被观看。他早期深入尼泊尔毛派控制区，记录叛乱者、警察、平民和公共抗议；后期则转向军事无人机的俯视语法，让普通美国日常被算法式高空视角重新编码。',
    methods: ['长期冲突纪实', '受限区域进入', '无人机航拍', '红外与黑白影像', '监控视角转译'],
    subjects: ['Nepal Maoist conflict', 'state violence', 'surveillance', 'drone warfare', 'civilian visibility', '观看权力'],
    outputs: ['摄影系列', '新闻纪实', '无人机影像', '摄影书', '展览'],
    institutions: ['Aperture', 'VII Photo Agency', 'International Center of Photography', 'Open Society Foundations'],
    achievements: ['Aperture Portfolio Prize shortlist 2006', 'ICP Infinity Award 2015', 'World Press Photo awards', 'Bay Area residency and international exhibitions'],
    whyImportant: '关注理由：Van Houtryve 的实践横跨传统冲突摄影与自动化监控图像，能够检验纪实摄影伦理如何随着设备改变。尼泊尔项目依靠身体进入与长期接触，无人机项目却故意采用遥远、去个体化的观看；两者放在一起，使技术不再是中性工具，而成为决定同情、怀疑和可见性的政治位置。',
    projects: [{
      year: '2004–2006', title: 'Nepal: Maoist Rebellion', type: '毛派叛乱、国家暴力与受限进入／Aperture Portfolio Prize 2006 shortlist',
      facts: ['Van Houtryve 1997 年首次前往 Nepal，随后长期关注持续十年的 Maoist rebellion；冲突造成全国破坏与超过 thirteen thousand deaths。', '2004 年他进入 rebel-controlled territory，随 Maoist forces 行动并记录训练、村庄生活、死亡与国家警察系统。', '项目延伸到 2006 年公共抗议和政治转折：不同党派群众违反宵禁、焚烧君主像，迫使国王恢复 parliament。'],
      reading: '解读：项目的核心材料是进入权限和摄影者所处位置，而非战斗视觉的刺激。Britney Spears T-shirt 与武装队列等细节让全球消费文化与地方革命叠在一起；但被准许进入也意味着图像可能受叛军自我展示控制，作品必须连同这种接近的条件一起阅读。'
    }], images: [], sourceLabel: 'Aperture — Tomas van Houtryve: Nepal Maoist rebellion', sourceUrl: 'https://aperture.org/portfolio-prize/2006-portfolio-prize-runner-up-thomas-van-houtry/'
  },
  {
    id: 'max-miechowski', name: 'Max Miechowski', born: '1989', base: 'London, United Kingdom',
    intro: '英国摄影艺术家，以中画幅胶片、长期沿海行走、自然光肖像和细部地景研究社区、时间与英格兰东海岸的土地流失。他避开风暴和房屋坠海的即时奇观，转而拍摄每天醒来检查悬崖的人、被切去一半的住宅、裂开的道路、花朵和残余庭院，让侵蚀作为缓慢生活条件而非单次灾害进入图像。',
    methods: ['长期地景纪实', '中画幅胶片', '清晨与傍晚自然光', '社区肖像', '沿海路线调查'],
    subjects: ['British east coast', 'coastal erosion', 'land ownership', 'community resilience', 'impermanence', 'climate anxiety'],
    outputs: ['摄影系列', '摄影书', '展览', '编辑摄影'],
    institutions: ['Aperture', 'Photo London', 'National Portrait Gallery London', 'Open Doors Gallery', 'The Photographers’ Gallery'],
    achievements: ['Aperture Portfolio Prize longlist 2024', 'Photo London x Nikon Emerging Photographer Award 2022', 'LensCulture Emerging Talent Award 2019', 'Taylor Wessing Prize shortlist 2022'],
    whyImportant: '关注理由：Miechowski 把气候与地质变化从新闻灾难图像转换为居住者的时间经验。房契、道路和花园在海水面前失去稳定含义，土地所有权因此暴露为暂时约定；柔和自然光可能把危险浪漫化，但人物的等待、修补和继续居住又让作品超出简单的末日景观。',
    projects: [{
      year: '2020–2023', title: 'Land Loss', type: '英格兰东海岸侵蚀、社区生活与时间地景／Photo London 2022 award',
      facts: ['项目沿 England east coast 从 Isle of Sheppey、Hemsby 到 Spurn Point、Withernsea 与 Skipsea，记录欧洲侵蚀速度最快的海岸之一。', 'Miechowski 在疫情封锁间隙多次驾车并睡在车中，清晨观察居民检查夜间塌陷；他用 1980s Japanese medium-format analogue camera 和低角度自然光拍摄。', '画面包括被主人切去后半部分、只保留 front door 的 Half Way House，通向已消失村庄的裂路，以及失去房屋后仍把 caravan 留在海边的居民。'],
      reading: '解读：侵蚀通过重复返回和微小差异进入制作过程，而不是靠一次壮观崩塌。柔和逆光确实容易美化临界生活，但残缺建筑、产权失效和人物对海的依恋让这种美感持续受到反驳；图像在没有说明时仍能传达“家正在接近边缘”，具体政策原因则需要文本补充。'
    }], images: [], sourceLabel: 'Photo London — Max Miechowski: Land Loss', sourceUrl: 'https://photolondon.org/book-club/land-loss/'
  }
];
