import type { ArtistArchive, ArchiveImage, ArchiveRelation } from './archiveData';

const img = (url: string, title: string, credit: string, sourceUrl: string, sourceLabel: string): ArchiveImage => ({
  url,
  title,
  credit,
  sourceUrl,
  sourceLabel,
});

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const shweHome = 'https://www.shwewutthmone.com/';
const shweAbout = 'https://www.shwewutthmone.com/about';
const shweHospital = 'https://www.shwewutthmone.com/i-do-miss-hospital-visit';
const shwePortraits = 'https://www.shwewutthmone.com/through-her-eyes';
const shweNoise = 'https://www.shwewutthmone.com/dear-virus';
const shweForever = 'https://www.shwewutthmone.com/forever-young';
const shweExhibitions = 'https://www.shwewutthmone.com/exhibitions';
const shweFoam = 'https://www.foam.org/talent-2024/artist/shwe-wutt-hmon';
const shweListening = 'https://thecubespace.com/en/appendix_en/2025-listening-biennial-list-of-works-en/';

const danielFoam = 'https://www.foam.org/articles/foam-talent-daniel-mebarek';
const danielStudio = 'https://www.foam.org/articles/studio-visit-daniel-mebarek';
const danielArles = 'https://www.rencontres-arles.com/en/expositions/2025/daniel-mebarek';

const nazaninFoam = 'https://www.foam.org/nl/articles/foam-talent-nazanin-hafez';
const nazaninStudio = 'https://www.foam.org/articles/studio-visit-nazanin-hafez';

export const archiveBatch63: Record<string, ArtistArchive> = {
  'photo-shwe-wutt-hmon': {
    artistId: 'photo-shwe-wutt-hmon',
    projectCoverage: '5 个核心项目 / 长期方法节点已建立深档案',
    imageCoverage: '1 / 5 项目已建立图像档案 · 2 张已核对 Foam 图像',
    note: '本轮把 Shwe Wutt Hmon 从单一“身体扫描”条目扩展为五条方法线：身体与医疗、自我修复、女性影像工作者与政治记录、心理创伤的协作表达、匿名化政治肖像，以及把环境污染与内在噪音并置的声音 / 影像装置。优先记录具体制作动作，不把“个人经验”写成泛泛主题。',
    projects: [
      {
        title: 'I Do Miss Hospital Visit',
        cluster: '家用扫描 / 身体 / 医疗记录 / Saa 纸 / 缝合',
        period: '2021–2024',
        summary: '疫情封锁使她无法按时做医院检查，于是把普通家用扫描仪变成一种自我检查工具；后来迁居泰国后，又把扫描图像印在脆弱的 Saa 纸上，通过裁切和缝合把“身体被医疗程序反复处理”的经验转成手工修补。',
        actions: [
          '在无法接受 CT / 定期医疗检查的状态下，用家用平板扫描仪直接扫描自己的身体和手术疤痕',
          '同时扫描枯萎花朵与医疗记录，让身体、疾病文件和衰败植物进入同一图像系统',
          '迁居泰国后把图像改印到当地 Saa 纸上，利用纸张薄、脆、近似皮肤的触感改变作品的物质性',
          '受限于纸张强度和家庭打印条件，将作品缩小打印，再手工裁切、缝合、拼接',
          '把“打印—切开—缝回去”的过程作为身体被打开、治疗和重新愈合的对应动作',
        ],
        sourceUrl: shweHospital,
        images: [
          img('https://www.foam.org/_next/image?q=80&url=https%3A%2F%2Fa.storyblok.com%2Ff%2F113697%2F2000x1385%2F87d517da89%2Fscan2022-10-08_120003-shwe-wutt-hmon.jpg&w=3840', 'I Do Miss Hospital Visit · Saa-paper work', '© Shwe Wutt Hmon', shweFoam, 'Foam'),
          img('https://www.foam.org/_next/image?q=80&url=https%3A%2F%2Fa.storyblok.com%2Ff%2F113697%2F2000x1391%2Fbc3ceebbb3%2Fscanned-portrait-vertical_17_-shwe-wutt-hmon.jpg&w=3840', 'I Do Miss Hospital Visit · scanned self-portrait', '© Shwe Wutt Hmon', shweFoam, 'Foam'),
        ],
        relations: [
          rel('展览', 'Shi Exhibition · Yangon', '2022–2023'),
          rel('展览', 'Foam Talent 2024–2025 · Amsterdam', '2024'),
        ],
      },
      {
        title: 'Portraits of the Anonymous',
        cluster: '女性影像工作者 / 政变 / 叠印肖像 / 证词',
        period: '2021',
        summary: '在 2021 年缅甸军事政变后的街头抗议与镇压中，作品把“谁在记录历史”本身变成主题：她拍摄参与记录抗议的女性摄影师、电影人、记者与艺术家，并把她们自己拍摄的政变图像叠回肖像背景。',
        actions: [
          '寻找并邀请在 2021 年政变期间进行影像记录的女性摄影师、电影人、记者与艺术家',
          '让每位参与者以其专业身份进入肖像，同时保留相机、工作姿态等职业线索',
          '把每位被摄者自己拍下的政变 / 抗议图像叠入她的肖像背景，使作者与历史现场同时存在',
          '把参与者的 testimony 与肖像并置，记录女性在影像行业中的可见性、风险和劳动',
          '用群体肖像构成一份关于缅甸“春季革命”中女性影像生产者的集体历史',
        ],
        sourceUrl: shwePortraits,
        images: [],
        relations: [
          rel('展览', 'Angkor Photo Festival', '2023'),
          rel('展览', 'Counihan Gallery · Melbourne', '2023 · solo exhibition'),
        ],
      },
      {
        title: 'Noise And Cloud And Us',
        cluster: '心理健康 / 姐妹协作 / 摄影 + mixed media',
        period: '2020–2021',
        summary: '与姐姐 Kyi Kyi Thar 合作，从照料亲近家人心理疾病的经历出发，不把精神疾病简化成可识别症状，而是把 trauma、empathy、kinship 和“难以公开谈论”本身转成摄影与混合媒介结构。',
        actions: [
          '从家庭内部长期照料心理疾病亲人的经验进入，而不是从外部采访开始',
          '与 Kyi Kyi Thar 共同讨论并筛选可以被视觉化的记忆、情绪和家庭材料',
          '把摄影与 mixed-media presentation 并置，避免形成单一“病人肖像”',
          '通过模糊、缺席、碎片和非线性材料表达 trauma，而不追求诊断式清晰',
          '将作品理解为 empathic response：重点是关系如何承受与修复，而不是替当事人下结论',
        ],
        sourceUrl: shweNoise,
        images: [],
        relations: [
          rel('奖项', 'Objectifs Documentary Award', 'Open Category, 2020'),
          rel('展览', 'Objectifs Centre for Photography and Film · Singapore', '2021 · solo exhibition'),
          rel('展览', 'Aichi Triennale 2022', 'Aichi Arts Center'),
          rel('展览', 'ArtScience Museum Singapore · MENTAL: Colours of Wellbeing', '2022–2023'),
        ],
      },
      {
        title: 'Forever Young',
        cluster: '政治抗议 / 青年 / collage / 匿名化肖像',
        period: '2021–2022',
        summary: '在缅甸 Spring Revolution 中制作双联式青年肖像，但又主动隐藏被摄者身份；花、枪、子弹、红色层叠和年龄数字共同承担“既要留下历史，又不能暴露人”的矛盾。',
        actions: [
          '在参与 2021 年反政变抗议的同时，记录 Gen Z 抗议者及他们使用的语言、姿态和视觉符号',
          '把真实抗议者的肖像转为 photo collage，而不是直接发布可识别的纪实面孔',
          '使用花朵、枪支、子弹、红色色块等覆盖、遮挡、包裹人物面部与身体',
          '通过 masking / shielding / shrouding 保护身份，同时让“消失的脸”成为国家暴力压制表达的象征',
          '在背景保留年龄数字，让匿名者仍以“非常年轻的人”被记住',
        ],
        sourceUrl: shweForever,
        images: [],
        relations: [rel('展览', 'Kochi-Muziris Biennale · In Our Veins Flow Ink And Fire', '2022–2023')],
      },
      {
        title: 'Noises Are Quite Loud Here',
        cluster: '生态 / analogue photography / scanner imagery / soundscape',
        period: '2023–ongoing',
        summary: '从城市迁到更接近自然的环境后，她把“安静”拆开：一边是自然中的植物、动物、死亡昆虫，一边是幻听、社会噪音和清迈烟霾。作品把慢速模拟摄影、扫描物、环境档案与声音并成一套生态与心理感知装置。',
        actions: [
          '在 Kuala Lumpur 附近 Rimbun Dahan 的 14 英亩热带花园进行日常、缓慢的模拟摄影',
          '收集落花、树叶、死亡昆虫，并用扫描仪把这些小型自然材料转换成平面图像',
          '加入关于环境破坏、空气污染与社会噪音的档案材料，使个人感知与外部生态问题交叉',
          '同时保留彩色与黑白模拟照片，不用统一视觉滤镜把材料抹平',
          '把照片、扫描图像、video installation 与 sonic soundscape 共同安装，让“噪音”既是声音也是心理和环境状态',
        ],
        sourceUrl: shweListening,
        images: [],
        relations: [
          rel('展览', 'Thailand Biennale Chiang Rai · Zomia Pavilion', '2023–2024'),
          rel('展览', 'The Listening Biennial', '2025'),
        ],
      },
    ],
    awards: [
      'Foam Talent 2024–2025',
      'British Journal of Photography · Ones to Watch, 2021',
      'Julius Baer Next Generation Art Prize · First prize, still image category, 2021',
      'Objectifs Documentary Award · Open Category, 2020',
    ],
    exhibitions: [
      'Noise And Cloud And Us — Objectifs, Singapore, 2021',
      'Noise And Cloud And Us — Aichi Triennale, 2022',
      'Forever Young — Kochi-Muziris Biennale, 2022–2023',
      'Portraits of the Anonymous — Counihan Gallery, Melbourne, 2023',
      'Noises Are Quite Loud Here — Thailand Biennale Chiang Rai / Zomia Pavilion, 2023–2024',
      'I Do Miss Hospital Visit — Foam Talent, Amsterdam, 2024',
    ],
    sources: [
      { label: 'Artist website / About', url: shweAbout },
      { label: 'I Do Miss Hospital Visit', url: shweHospital },
      { label: 'Portraits of the Anonymous', url: shwePortraits },
      { label: 'Noise And Cloud And Us', url: shweNoise },
      { label: 'Forever Young', url: shweForever },
      { label: 'Selected exhibitions', url: shweExhibitions },
      { label: 'Noises Are Quite Loud Here · Listening Biennial', url: shweListening },
      { label: 'Foam Talent', url: shweFoam },
    ],
  },

  'photo-daniel-mebarek': {
    artistId: 'photo-daniel-mebarek',
    projectCoverage: '4 个制作节点已建立深档案（1 个主项目 + 3 个关键组成部分 / 当前研究）',
    imageCoverage: '1 / 4 节点已建立图像档案 · 2 张已核对 Foam 图像',
    note: 'Daniel Mebarek 当前公开资料最完整的是 Fotos Gratis，因此本档案不虚构“多个系列”。改为把同一主项目拆成移动照相馆、Super-8 影像、contact-sheet / process archive 三个组成节点，并另列 2026 正在进行的玻璃底片 photogram 研究。这样更接近他实际的工作结构。',
    projects: [
      {
        title: 'Fotos Gratis — mobile portrait studio',
        cluster: '公共空间 / itinerant studio / 中画幅肖像 / 照片交换',
        period: '2022–2025',
        summary: '在玻利维亚 El Alto 的 Feria 16 de Julio 市集四次搭建临时“免费照片”摊位，用 Pentax 6×7 为路人拍肖像、现场打印并送回，把摄影从“取走图像”改成一项公共服务与短暂交换。',
        actions: [
          '在 Feria 16 de Julio 选择开放式市场作为工作现场，而非把居民带入艺术机构或摄影棚',
          '搭建凳子、手绘 Illimani 山背景、三脚架、两台相机、扩音器、Fotos Gratis 招牌与便携打印机',
          '使用 Pentax 6×7 模拟中画幅拍摄，让被摄者独自或与家人、宠物、私人物件共同决定如何进入肖像',
          '保留背景布边缘、夹子等 Pentax 取景差异意外带入的“摄影棚破绽”，不在后期裁掉',
          '现场打印并免费交还照片；艺术家同时保留影像，形成双方都得到东西的交换结构',
          '把等待、交谈、调整头发衣物、围观和送出照片等过程视为作品，而不仅是最终肖像',
        ],
        sourceUrl: danielFoam,
        images: [
          img('https://www.foam.org/_next/image?q=80&url=https%3A%2F%2Fa.storyblok.com%2Ff%2F113697%2F1128x1414%2Fd4158392f0%2Ffotos-gratis_03.png&w=3840', 'Fotos Gratis · market portrait', '© Daniel Mebarek', danielFoam, 'Foam'),
          img('https://www.foam.org/_next/image?q=80&url=https%3A%2F%2Fa.storyblok.com%2Ff%2F113697%2F1122x1402%2Fa757554dda%2Ffotos-gratis_09.png&w=3840', 'Fotos Gratis · second market portrait', '© Daniel Mebarek', danielFoam, 'Foam'),
        ],
        relations: [
          rel('展览', 'Les Rencontres d’Arles · Discovery Award Louis Roederer Foundation', 'Finalist / exhibition, 2025'),
          rel('展览', 'Foam Talent 2026', 'Foam Amsterdam'),
          rel('收藏', 'Victoria and Albert Museum', 'work in collection'),
        ],
      },
      {
        title: 'Mirar',
        cluster: 'Super-8 / moving image / encounter',
        period: '2022–2025',
        summary: 'Fotos Gratis 的移动影像部分不重复展示肖像，而是延长“拍照之前和之后”的时间：艺术家与被摄者如何交谈、周围群众如何围观、衣服和姿势如何被调整。',
        actions: [
          '使用 Super-8mm film 记录临时照相馆工作过程，而不是只拍摄最终肖像',
          '把镜头对准艺术家与 sitters 的互动、等待、围观人群与微小身体动作',
          '允许移动影像比静态照片更晃、更直觉、更容易出现“错误”，不强迫两种媒介共享同一构图标准',
          '把 moving image 在展场中作为有时间长度的对象，让观众停留并经历摄影关系的展开过程',
        ],
        sourceUrl: danielFoam,
        images: [],
        relations: [],
      },
      {
        title: 'Fotos Gratis — contact sheets / process archive',
        cluster: 'contact sheet / logbook / documentary process',
        period: '2022–2025',
        summary: '项目把 contact sheets 当成工作日志，而不是幕后废料。它们保留一次次拍摄中的选择、重复、失败和边缘信息，从而把摄影的“过程性”显露出来。',
        actions: [
          '保留整卷胶片的 contact sheets，而不是只留下精选成片',
          '把 contact sheets 与独立肖像、Super-8 影像共同进入展览',
          '让连续帧显示被摄者如何改变姿势以及摄影师如何调整，而不是制造一张看似自然的“决定性瞬间”',
          '通过展陈主动暴露 staging、拍摄设备与工作流程，反对纪录摄影把自己伪装成透明观看',
        ],
        sourceUrl: danielArles,
        images: [],
        relations: [rel('展览', 'Les Rencontres d’Arles · Fotos Gratis', 'Espace Monoprix, 2025')],
      },
      {
        title: 'Found glass-plate photogram research',
        cluster: 'found archive / photogram / contact print / 手部介入',
        period: '2026 · work in progress',
        summary: '在玻利维亚跳蚤市场获得二十世纪上半叶拍摄原住民的旧玻璃底片后，他没有直接“再出版”档案，而是在社区暗房用 photogram 与 contact print 重新处理，并把自己的手也放进图像中，让观看历史档案的身体关系变得可见。',
        actions: [
          '从 Bolivia flea market 获得拍摄 Indigenous people 的旧 studio glass plates',
          '在社区暗房以 photogram 与 contact-print 方式直接接触、曝光这些脆弱的玻璃底片',
          '研究历史肖像如何制造 exoticising / reductive 的 Andean identity',
          '将自己的手与玻璃底片一起制作成 photogram，使“谁在触摸、读取、重新使用档案”进入图像',
          '把这组实验维持为开放研究，不强行在尚未完成时包装成固定系列',
        ],
        sourceUrl: danielStudio,
        images: [],
        relations: [],
      },
    ],
    awards: [
      'Foam Talent 2026',
      'Les Rencontres d’Arles · Discovery Award Louis Roederer Foundation finalist, 2025',
      'Support from Centre national des arts plastiques (France)',
      'Support from PhMuseum and Photolucida',
    ],
    exhibitions: [
      'Fotos Gratis — Les Rencontres d’Arles, 2025',
      'Fotos Gratis — Foam Talent, Amsterdam, 2026',
    ],
    sources: [
      { label: 'Foam Talent · Fotos Gratis', url: danielFoam },
      { label: 'Foam Studio Visit · process / glass plates', url: danielStudio },
      { label: 'Les Rencontres d’Arles · Fotos Gratis', url: danielArles },
    ],
  },

  'photo-nazanin-hafez': {
    artistId: 'photo-nazanin-hafez',
    projectCoverage: '3 个方法节点已建立深档案（Spectators 两种实体处理 + 早期声音装置）',
    imageCoverage: '1 / 3 节点已建立图像档案 · 2 张已核对 Foam 图像',
    note: 'Nazanin Hafez 的核心不是“用拼贴表现暴力”，而是主动拒绝重播暴力本身。本轮把 Spectators 中的模拟拼贴、玻璃表面绘画，以及更早的声音装置 9 Minutes and 16 Seconds 分开记录，显示她如何在图像、物件和声音中反复处理“观看者的责任”。',
    projects: [
      {
        title: 'Spectators — analogue photo collages',
        cluster: '网络档案 / 模拟拼贴 / 公共处刑 / 观看伦理',
        period: 'ongoing · Foam Talent 2026',
        summary: '从网络与新闻流通的伊朗公共处刑图像中取材，但刻意不重现处刑动作本身。她剪切人群、围栏、建筑、机器、地图和现场边缘，把这些碎片重组为看似超现实的场景，让暴力在观看过程中慢慢显现。',
        actions: [
          '收集网上流通的公共处刑照片、围观者手机影像及相关现场视觉材料',
          '主动排除 / 遮蔽处刑动作和受害者最后一刻，不把创伤图像再次消费',
          '把人脸、围栏、建筑、椅子、机器、地图和现场细节打印出来后手工剪切',
          '通过 analogue photo collage 重新组合尺度与空间，使观众需要靠近、停留和寻找细节',
          '把 scissors cutting 当作身体性的 resistance：不是接受既有图像，而是切开并重新规定它的阅读方式',
          '让观看者意识到自己也是 spectator，作品的问题因此从“发生了什么”转向“你如何观看他人的苦难”',
        ],
        sourceUrl: nazaninFoam,
        images: [
          img('https://www.foam.org/_next/image?q=80&url=https%3A%2F%2Fa.storyblok.com%2Ff%2F113697%2F1969x1596%2F22bb5156ab%2F13-at-the-threshold-of-a-bloody-rain.jpg&w=3840', 'Spectators · analogue photo collage', '© Nazanin Hafez', nazaninFoam, 'Foam'),
          img('https://www.foam.org/_next/image?q=80&url=https%3A%2F%2Fa.storyblok.com%2Ff%2F113697%2F906x1003%2F95e31a67ef%2F11-evil-arrived-in-the-village.jpg&w=3840', 'Spectators · constructed scene', '© Nazanin Hafez', nazaninFoam, 'Foam'),
        ],
        relations: [
          rel('奖项', 'Wüstenrot Foundation · Documentary Photography Grant', '2024'),
          rel('展览', 'Foam Talent 2026', 'Foam Amsterdam'),
          rel('收藏', 'Museum Folkwang · photographic collection', 'Essen'),
          rel('奖项', 'Schloss Balmoral Residency Prize', '2026'),
        ],
      },
      {
        title: 'Spectators — painted-glass works',
        cluster: '照片物件 / 玻璃绘画 / 遮挡 / 身体观看',
        period: 'ongoing',
        summary: 'Spectators 的另一部分不把拼贴当唯一语言，而是在覆盖照片的玻璃表面直接绘画。图像与观众之间因此多出一层实体屏障，使“遮挡”成为作品结构，而不是后期数字处理。',
        actions: [
          '选择已经存在的暴力相关照片，而不是重新进入现场拍摄',
          '在覆盖图像的玻璃表面进行绘画 / 遮挡，使材料层位于观众和原照片之间',
          '让遮挡既保护受害者不被再次暴露，也迫使观众意识到视觉信息被有意限制',
          '利用物件厚度、反光和观看距离，把屏幕上快速滑过的暴力图像重新变成需要身体停留的对象',
        ],
        sourceUrl: nazaninStudio,
        images: [],
        relations: [],
      },
      {
        title: '9 Minutes and 16 Seconds',
        cluster: 'sound installation / 手机录音 / 公共处刑 / 抽象化',
        period: '2014',
        summary: '早在 Spectators 之前，她已处理同一伦理问题：作品取自伊朗 Karaj 一次公共处刑现场的手机录音，但通过声音抽象化避免把事件变成直白再现。',
        actions: [
          '以公共处刑现场由手机记录的真实音频作为素材来源',
          '保留 spoken words 与 distorted voices，同时避免依赖可识别的暴力图像',
          '将记录性声音转成空间中的 sound installation，使观众通过听觉进入事件',
          '以抽象、噩梦般的声场替代“证据图像”的直接展示，延长观众对现场关系的想象',
        ],
        sourceUrl: nazaninFoam,
        images: [],
        relations: [],
      },
    ],
    awards: [
      'Foam Talent 2026',
      'Wüstenrot Foundation · Documentary Photography Grant, 2024',
      'Schloss Balmoral · Residency Prize, 2026',
    ],
    exhibitions: ['Spectators — Foam Talent, Amsterdam, 2026'],
    sources: [
      { label: 'Foam Talent · Spectators', url: nazaninFoam },
      { label: 'Foam Studio Visit · material process', url: nazaninStudio },
    ],
  },
};
