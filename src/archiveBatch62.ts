import type { ArtistArchive, ArchiveImage, ArchiveRelation } from './archiveData';

const img = (url: string, title: string, credit: string, sourceUrl: string, sourceLabel: string): ArchiveImage => ({
  url,
  title,
  credit,
  sourceUrl,
  sourceLabel,
});

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const akshayHome = 'https://akshaymahajan.in/';
const akshayAbout = 'https://akshaymahajan.in/about';
const akshayClay = 'https://akshaymahajan.in/people-of-clay';
const akshayInvisible = 'https://akshaymahajan.in/archivio-del%E2%80%99-invisibile';
const akshayGold = 'https://akshaymahajan.in/to-die-is-to-be-turned-to-gold';
const akshayFoam = 'https://www.foam.org/artists/akshay-mahajan';
const akshayFoamDigital = 'https://www.foam.org/talent-2024/artist/akshay-mahajan';

const aminHome = 'https://aminyousefi.com/';
const aminAbout = 'https://aminyousefi.com/about';
const aminFoam = 'https://www.foam.org/talent-2024/artist/amin-yousefi';
const aminBook = 'https://luhz.press/blogs/press/announcing-eyes-dazzle-as-they-search-for-the-truth-by-amin-yousefi';
const aminCoBerlin = 'https://co-berlin.org/en/program/talent-award';

const rehabFoam = 'https://www.foam.org/talent-2024/artist/rehab-eldalil';
const rehabArtist = 'https://www.foam.org/artists/rehab-eldalil';
const rehabWorldPress = 'https://www.worldpressphoto.org/collection/photocontest/2022/winners';
const rehabCortona = 'https://www.cortonaonthemove.com/en/exhibit/rehab-eldalil/';
const rehabCatchLight = 'https://www.catchlight.io/rehab-eldalil';
const rehabMfs = 'https://prezly.msf.org.uk/msf-to-highlight-war-wounded-patients-resilience-at-photo-exhibition-in-london';

export const archiveBatch62: Record<string, ArtistArchive> = {
  'photo-akshay-mahajan': {
    artistId: 'photo-akshay-mahajan',
    projectCoverage: '3 个核心项目已建立制作方法档案',
    imageCoverage: '1 / 3 项目已建立图像档案 · 2 张 Foam 展场图',
    note: '本轮把 Akshay Mahajan 从单一 People of Clay 条目扩展为三条清楚的方法线：民歌与殖民档案如何进入拼贴；社区如何共同建立“看不见的考古档案”；城市建筑如何通过高度编排的摄影 sequence 被读成失败未来。只使用可追溯来源，不用无来源作品图补空位。',
    projects: [
      {
        title: 'People of Clay',
        cluster: '民歌 / 田野 / 殖民档案 / 拼贴',
        period: '2017–2022 · 2023–2025 持续展出',
        summary: '从妻子所唱的 Rajbanshi 民歌出发，把歌曲当作地图进入 Assam 与 Bengal 边境地区，再把当代拍摄、十九世纪殖民民族志图像、文字与歌词重新拼成一则关于身份如何被制造和遗忘的视觉民间故事。',
        actions: [
          '把妻子反复唱的 Rajbanshi 民歌作为田野路线和项目入口',
          '沿 Assam 与 Bengal、靠近 Bangladesh 的地区寻找人物、河流、仪式和地方叙事',
          '查阅殖民时期《The People of India》等民族志图像与分类文本，追踪 Rajbanshi 身份如何被行政语言误认和重命名',
          '将新拍照片、历史材料、地图、歌词与文本以 collage / assemblage 的方式组合，而不是做单一纪实序列',
          '让拼贴的可见断裂对应“身份是持续被拆开、重组的结构”这一项目命题',
        ],
        sourceUrl: akshayClay,
        images: [
          img('https://www.foam.org/_next/image?q=80&url=https%3A%2F%2Fa.storyblok.com%2Ff%2F113697%2F2000x1334%2Fc8205cd745%2Fakshay-mahajan-installation-shot-foam-talent.jpg&w=3840', 'People of Clay · Foam installation view', '© Akshay Mahajan / Photo Christian van der Kooy', akshayFoam, 'Foam'),
          img('https://www.foam.org/_next/image?q=80&url=https%3A%2F%2Fa.storyblok.com%2Ff%2F113697%2F2000x1334%2F75e8be91d7%2Fakshay-mahajan-installation-shot-foam-talent.jpg&w=3840', 'People of Clay · exhibition sequence', '© Akshay Mahajan / Photo Christian van der Kooy', akshayFoam, 'Foam'),
        ],
        relations: [
          rel('奖项', 'Aperture Portfolio Prize', 'Runner-up, 2023'),
          rel('展览', 'Foam Talent 2024–2025', 'Foam Amsterdam'),
          rel('展览', 'Singapore International Photography Festival', '2024'),
          rel('展览', 'Bristol Photo Festival', '2026'),
        ],
      },
      {
        title: 'Archivio del’ Invisibile',
        cluster: '考古 / 社区档案 / 分类 / 集体编辑',
        period: '2023',
        summary: '在意大利 Amendolara 的考古语境中，把注意力从被修复的古物转向匿名修复者、技术人员、学生、工人和居民，邀请社区共同分类图像、地图、笔记和当代记录，重新制作一个“博物馆形式”的反档案。',
        actions: [
          '从 San Nicola necropolis 出土并被修复的陶器进入项目，追踪“物件被保存下来、但修复劳动者被抹去”的矛盾',
          '把匿名修复者、低薪工人、技术员、学生、业余参与者和博物馆工作人员列为档案主体',
          '在 Amendolara 发起社区介入，邀请当地居民共同查看、筛选和分类图片、图纸、地图、笔记与当代记录',
          '模仿博物馆档案的表格、文具与分类形式，同时改变它原本只突出权威考古知识的结构',
          '让“共同分类”本身生成新的地方考古知识，而不是由艺术家独自替社区写历史',
        ],
        sourceUrl: akshayInvisible,
        images: [],
        relations: [
          rel('展览', 'In-ruins residency · Cosenza, Calabria', '2023'),
          rel('策展', 'Community intervention with Associazione Archeofuturo / Museo Nazionale della Sibaritide / Commune di Amendolara', '2023'),
        ],
      },
      {
        title: 'To die is to be turned to gold',
        cluster: '城市 / 建筑 / 编排式摄影 / 后殖民叙事',
        period: 'ongoing',
        summary: '借一个年轻商业雕塑制作者的视点阅读 Bombay / Mumbai：人物、街景、废弃现代主义建筑和临时材料建筑像雕塑一样被观察，再通过强烈编排的 sequence 组成城市“曾经可能成为怎样”的视觉读法。',
        actions: [
          '为项目建立一个年轻商业雕塑制作者式的叙事视点，而不是采用无主观位置的城市纪录',
          '在街头、咖啡馆、住宅与旧商业区持续观察人物、建筑和材料细节',
          '把 Nehruvian functionalism、殖民遗存、投资银行和城市贫民使用的铁皮、木板、砖、石棉等材料放在同一城市雕塑框架中',
          '在街景、肖像、景观与细节之间快速切换，通过 sequence 模拟在城市中不断改变的感知',
          '把建筑的位置、损耗、替代关系和遮蔽物理解为历史记录，而不只把建筑当视觉造型',
        ],
        sourceUrl: akshayGold,
        images: [],
        relations: [],
      },
    ],
    awards: [
      'Nera di Verzasca Prize · Winner, 2024',
      'Foam Talent 2024–2025',
      'Aperture Portfolio Prize · Runner-up, 2023',
    ],
    exhibitions: [
      'Foam Talent 2024–2025 — Foam Amsterdam',
      '13th Bamako Encounters',
      'Cairo Biennale',
      'Athens Photo Festival',
      'Singapore International Photography Festival — People of Clay, 2024',
    ],
    sources: [
      { label: 'Akshay Mahajan · official works index', url: akshayHome },
      { label: 'Akshay Mahajan · about', url: akshayAbout },
      { label: 'People of Clay', url: akshayClay },
      { label: 'Archivio del’ Invisibile', url: akshayInvisible },
      { label: 'To die is to be turned to gold', url: akshayGold },
      { label: 'Foam artist profile', url: akshayFoam },
      { label: 'Foam Talent Digital', url: akshayFoamDigital },
    ],
  },

  'photo-amin-yousefi': {
    artistId: 'photo-amin-yousefi',
    projectCoverage: '3 个核心项目已建立制作方法档案',
    imageCoverage: '1 / 3 项目已建立图像档案 · 2 张 Foam 图像',
    note: '本轮把 Amin Yousefi 从“用放大镜重拍革命照片”扩展为更完整的三段方法：历史图像中的回望、暴力照片的负片反转、国家教材的批注与身体 3D 扫描。重点记录照片在几十年后如何被重新观看、改写和再次制度化。',
    projects: [
      {
        title: 'Eyes Dazzle as They Search for the Truth',
        cluster: '伊朗革命档案 / 放大镜再摄影 / gaze',
        period: '2023 · book 2026',
        summary: '从 1978–1979 伊朗革命的摄影图像中寻找那些在大规模人群里直接看向摄影机的人，再通过 magnifying loupe 重新摄影，使原本只是历史群众中的细小目光变成新的肖像。',
        actions: [
          '浏览 1978–1979 伊朗革命相关摄影书和历史图像',
          '建立一个严格筛选规则：只寻找在人群中直接转向摄影机、回望镜头的人',
          '用 magnifying loupe 放大旧印刷图像中的面孔，再对放大后的局部进行重新摄影',
          '保留半色调网点、放大镜边缘和原始印刷物的物质痕迹，而不把档案“修复干净”',
          '把原摄影者—被摄者的单向关系反转为历史人物对当代观看者的主动回望',
        ],
        sourceUrl: aminHome,
        images: [
          img('https://www.foam.org/_next/image?q=80&url=https%3A%2F%2Fa.storyblok.com%2Ff%2F113697%2F1600x2000%2F98a16e448c%2Fimg_7327.jpg&w=3840', 'Eyes Dazzle as They Search for the Truth', '© Amin Yousefi', aminFoam, 'Foam'),
          img('https://www.foam.org/_next/image?q=80&url=https%3A%2F%2Fa.storyblok.com%2Ff%2F113697%2F1600x2000%2F87c5ec970c%2Fimg_7362.jpg&w=3840', 'Eyes Dazzle · rephotographed archival gaze', '© Amin Yousefi', aminFoam, 'Foam'),
        ],
        relations: [
          rel('展览', 'Fotografisk Centre · Denmark', '2023'),
          rel('展览', 'Foam Talent 2024–2025', '2024'),
          rel('展览', 'Vilnius Photography Gallery', '2025'),
          rel('出版', 'Eyes Dazzle as They Search for the Truth · Luhz Press', '2026 · text by David Campany'),
        ],
      },
      {
        title: 'Ashes and Snow',
        cluster: 'found archive / 负片反转 / 暴力图像伦理',
        period: '2022–2023',
        summary: '从一批在伊朗档案市场流通的医院伤亡照片出发，又在 David Burnett 的 1979 革命照片中发现同一批图像曾被一名男子穿戴在身上。面对无法直接展示的暴力，艺术家把影像反转为负片，让黑发变成白发，并把视觉变化连接到“未能变老的人”。',
        actions: [
          '接收朋友从伊朗书籍 / 档案商处购买的 123 张约 10 × 15 cm 照片，并继续补充相关图像',
          '在网络研究中比对 David Burnett 的 1979 革命照片，确认其中男子衣服上悬挂的快照与手中档案来自同一组',
          '因为原始暴力图像过于直接，将照片转换为 negative，使血迹与身体的可见方式发生变化',
          '利用负片反转使年轻死者的黑发视觉上转白，将图像处理与“他们本应老去”这一时间问题相连',
          '把档案来源、历史照片、神话人物 Zāl 与无法确认身份的死者共同编入对摄影证据和历史重建的追问',
        ],
        sourceUrl: aminHome,
        images: [],
        relations: [],
      },
      {
        title: 'Defensive Readiness: Revised Edition',
        cluster: '国家教材 / 批注 / 身体重演 / 3D 扫描',
        period: '2025–',
        summary: '使用曾发给伊朗高中生的军事与民防教材，分析国家如何通过示范照片和图表训练身体。项目一方面复制并批注教材页面，另一方面由艺术家亲自重演姿势，再把身体转为三维扫描。',
        actions: [
          '收集和研究国家发行的军事 / 民防教材，追踪其如何教学生站立、瞄准、救援和响应威胁',
          '复制选定页面，并添加修正符号、暗房笔记和手写标记，把成品教材重新想象为尚处制作阶段的工作稿',
          '把原本命令式语言转成类似临床护理与身体矫正的视觉语汇，突出制度如何把身体测量、稳定和标准化',
          '用自己的身体重演教材中的标准姿势',
          '把这些姿势制作成 3D scans，让重量、疲劳、微小调整和肉身脆弱性重新进入原本理想化的二维示范图',
        ],
        sourceUrl: aminHome,
        images: [],
        relations: [
          rel('奖项', 'C/O Berlin Talent Award · Artist category', 'Winner, 2026'),
          rel('展览', 'Fonderia 20.9 · Verona', '2026'),
          rel('展览', 'Backlight · Tampere', '2026'),
          rel('展览', 'C/O Berlin', '2027 announced'),
          rel('出版', 'Defensive Readiness: Revised Edition · Shift Books / C/O Berlin', '2027 announced'),
        ],
      },
    ],
    awards: [
      'C/O Berlin Talent Award · Artist winner, 2026',
      'Royal Photographic Society Award for Achievement in the Art of Photography, 2024',
      'Foam Talent 2024–2025',
      'Belfast Photo Festival, 2024',
      'Paris Photo Carte Blanche Awards, 2022',
    ],
    exhibitions: [
      'Eyes Dazzle — Fotografisk Centre, Denmark, 2023',
      'Foam Talent 2024–2025 — Foam Amsterdam',
      'Eyes Dazzle — Vilnius Photography Gallery, 2025',
      'Defensive Readiness — Fonderia 20.9, Verona, 2026',
      'Defensive Readiness — Backlight, Tampere, 2026',
      'Defensive Readiness — C/O Berlin, 2027 announced',
    ],
    sources: [
      { label: 'Amin Yousefi · official projects', url: aminHome },
      { label: 'Amin Yousefi · about / CV', url: aminAbout },
      { label: 'Foam Talent Digital', url: aminFoam },
      { label: 'Luhz Press · Eyes Dazzle photobook', url: aminBook },
      { label: 'C/O Berlin Talent Award', url: aminCoBerlin },
    ],
  },

  'biennale-rehab-eldalil': {
    artistId: 'biennale-rehab-eldalil',
    projectCoverage: '2 个长期协作项目已建立深档案',
    imageCoverage: '1 / 2 项目已建立图像档案 · 2 张 Foam 图像',
    note: 'Rehab Eldalil 的核心不是“把纪实摄影做成混合媒介”，而是把被拍摄者真正变成共同作者。这里重点记录肖像之后发生的刺绣、诗歌、植物知识、绘画和 craft intervention，以及这些动作如何改变传统纪录摄影中摄影师单方面控制再现的关系。',
    projects: [
      {
        title: 'The Longing of the Stranger Whose Path Has Been Broken',
        cluster: 'South Sinai / 社群协作 / 刺绣 / 诗歌 / 声音 / 植物知识',
        period: '2012–2022 · book 2023',
        summary: '历时十年与 South Sinai、St. Catherine 的 Bedouin 社群合作，从艺术家自身 Bedouin 家族根源出发，把土地、归属、迁移压力和社群知识组织成照片、诗歌、声音、影像、药用植物记录与刺绣照片。',
        actions: [
          '长期返回 St. Catherine，与当地 Bedouin 社群建立持续关系，而不是一次性进入拍摄',
          '邀请社区成员用传统诗歌讲述土地、离开与归属，使文字和声音成为作品主体材料',
          '与不愿被公开影像完全控制的女性共同工作：先拍摄肖像，再把照片印在织物上，由被摄者本人或亲属通过刺绣选择遮盖或显露身体与面部区域',
          '记录当地药用植物及其使用知识，并让手写说明、植物图像与摄影共同进入项目',
          '把摄影、embroidered photographs、artifacts、sound、video 与文字并置，使社群成员的制作行为不再只是“被摄影师记录”',
        ],
        sourceUrl: rehabFoam,
        images: [
          img('https://a.storyblok.com/f/113697/2000x1333/fcc412677f/the-longing_rehab-eldalil_5.jpeg', 'The Longing · South Sinai pastoral scene', '© Rehab Eldalil', rehabFoam, 'Foam'),
          img('https://a.storyblok.com/f/113697/3120x4679/f5dd5e84c9/the-longing_rehab-eldalil_26.jpg', 'The Longing · embroidered botanical image', '© Rehab Eldalil', rehabFoam, 'Foam'),
        ],
        relations: [
          rel('奖项', 'World Press Photo · Africa Open Format', 'Winner, 2022'),
          rel('奖项', 'FotoEvidence W Award', '2022'),
          rel('出版', 'The Longing of the Stranger Whose Path Has Been Broken', 'FotoEvidence / Trobades Premi Albert Camus, 2023'),
          rel('展览', 'Foam Talent 2024–2025', 'Foam Amsterdam'),
        ],
      },
      {
        title: 'From the Ashes, I Rose',
        cluster: 'MSF / war survivors / participatory mixed media / Polaroid craft interventions',
        period: '2024–ongoing',
        summary: '在 Médecins Sans Frontières 位于 Amman 的 reconstructive surgery hospital 与来自 Palestine、Syria、Iraq、Yemen 等地的伤者合作，不把患者固定为战争受害者，而是让他们通过绘画、文字、Polaroid 与 craft interventions 一起决定作品如何讲述身体、康复与抵抗。',
        actions: [
          '在 MSF Amman 医院与患者建立参与式拍摄关系，并把患者视为项目 protagonist / co-creator',
          '拍摄肖像与康复过程，同时邀请参与者通过绘画、文字和手工材料回应自己的图像',
          '在 Polaroid photographs 上加入由参与者制作的 craft intervention，而不是由摄影师单方面后期装饰',
          '使用 diamond painting 等医院治疗 / 康复环境中已有的手工方式，使制作过程与患者实际经验相连',
          '把摄影与混合媒介共同组织为关于“创伤后成长、重新获得身体能动性”的叙事，主动反对只强调受苦和受害的新闻视觉模板',
        ],
        sourceUrl: rehabCatchLight,
        images: [],
        relations: [
          rel('展览', 'Cortona On The Move', '2024 · original production with MSF'),
          rel('奖项', 'Lucie Foundation Photojournalism / Documentary Professional Scholarship', '2024'),
          rel('奖项', 'CatchLight Global Fellowship', '2025'),
          rel('奖项', 'Tasweer Project Award', '2025'),
          rel('展览', 'Oxo Gallery · London with MSF UK', '2025'),
        ],
      },
    ],
    awards: [
      'CatchLight Global Fellowship, 2025',
      'Tasweer Project Award, 2025',
      'Lucie Foundation Photojournalism / Documentary Professional Scholarship, 2024',
      'Foam Talent 2024–2025',
      'World Press Photo · Africa Open Format winner, 2022',
      'FotoEvidence W Award, 2022',
      'Premi Mediterrani Albert Camus Award, 2022',
      'Creative Activism Award, 2021',
      'National Geographic Emergency Grant for Journalists, 2020',
    ],
    exhibitions: [
      'The Longing — Foam Talent 2024–2025, Amsterdam',
      'From the Ashes, I Rose — Cortona On The Move, 2024',
      'From the Ashes, I Rose — Fabbrica del Vapore, Milan, 2024',
      'From the Ashes, I Rose — Oxo Gallery, London, 2025',
    ],
    sources: [
      { label: 'Foam · Rehab Eldalil', url: rehabArtist },
      { label: 'Foam Talent Digital · The Longing', url: rehabFoam },
      { label: 'World Press Photo 2022', url: rehabWorldPress },
      { label: 'Cortona On The Move · From the Ashes, I Rose', url: rehabCortona },
      { label: 'CatchLight · Rehab Eldalil', url: rehabCatchLight },
      { label: 'MSF UK · From the Ashes, I Rose', url: rehabMfs },
    ],
  },
};
