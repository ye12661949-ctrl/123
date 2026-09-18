export type TrendLink = {
  label: string;
  url: string;
};

export type TrendYear = {
  year: string;
  signal: string;
};

export type TrendInstitution = {
  id: string;
  name: string;
  kind: string;
  window: string;
  entryMode: string;
  scale: string;
  trajectory: TrendYear[];
  hardSignals: string[];
  synthesis: string[];
  reality: string[];
  watchNames: string[];
  sources: TrendLink[];
};

export type MacroTrend = {
  title: string;
  status: string;
  evidence: string;
  interpretation: string;
  caution: string;
};

export type RealityStat = {
  label: string;
  value: string;
  note: string;
};

export type CuratorProfile = {
  id: string;
  name: string;
  role: string;
  geography: string;
  focus: string[];
  trackRecord: string[];
  reading: string;
  practical: string;
  caution: string;
  sources: TrendLink[];
};

export const realityStats: RealityStat[] = [
  { label: 'Foam Talent 2026', value: '15 / 2,892', note: '正式 Talent 约占 0.52%；若含 15 位 runners-up，则约 1.04%。公开征集，但竞争极高。' },
  { label: 'Paris Photo–Aperture 2025', value: '37 / 1,000+', note: 'shortlist 低于约 3.7%。这不是“把 portfolio 做成书就行”，而是对编辑、设计、出版完整性的竞争。' },
  { label: 'Venice Biennale 2026', value: '110 invited', note: '国际展核心名单为邀请制；另有 100 个国家参与。它更像职业生态的结果，不是适合新人直接“投稿”的 open call。' },
  { label: 'Prix Pictet', value: '350+ nominators', note: '由全球提名网络进入评审，2025 Storm 最终 12 人 shortlist。职业网络与长期实践成熟度非常重要。' }
];

export const macroTrends: MacroTrend[] = [
  { title: '私人经验仍然强，但必须能向外连接', status: '强势 / 持续', evidence: 'Deutsche Börse 2024–2026 连续出现家庭档案、亲密关系、身份、阶级、记忆；Foam 2026 反复出现 home / belonging。', interpretation: '“我自己的故事”没有过时。近年的强项目通常会把私人经验转化成社会结构、历史断层、材料系统或共同体关系。', caution: '仅有创伤、自述或身份标签，不等于项目成立。评审更容易区分“真实经历”与“被转化成作品结构的经历”。' },
  { title: '摄影正在从单张图退向“系统”', status: '明显上升', evidence: '近期奖项和展览同时容纳摄影书、档案、视频、声音、装置、AI、表演、found image 与经典纪实。', interpretation: '当代摄影越来越像一种组织图像和证据的方式，而不是某一种固定的相机技术。', caution: '跨媒介不是自动加分。加声音、装置、AI 如果没有必要性，只会让项目看起来更像学生式“媒介拼盘”。' },
  { title: '档案从“怀旧材料”变成主动重写历史', status: '强势 / 成熟', evidence: 'Venice、Arles、Deutsche Börse、Aperture PhotoBook Awards 都持续出现家庭档案、殖民档案、公共档案与 intergenerational conversations。', interpretation: '现在更受重视的不是把旧照片展示出来，而是重新分类、补写空缺、质疑来源、改变展示权力或让档案与现在的身体发生冲突。', caution: '“我找到一箱老照片”只是材料发现，不是作品方法。真正的项目从你如何处理它开始。' },
  { title: '去殖民 / Global South 没有退潮，但语言在变化', status: '结构性', evidence: 'Venice 2024 明确聚焦 Global South、移民、原住民、queer 与 popular art；2026 继续以关系地理和多中心实践组织展览。Arles 2026 特别强调非洲与地中海。', interpretation: '机构已经不满足于简单“增加非西方艺术家比例”，而更关注谁建立历史、谁拥有档案、地方知识如何进入展示机制。', caution: '不要为了国际趋势把自己的作品强行包装成“去殖民”。如果作品没有真实历史关系，这类语言反而最容易显得空。' },
  { title: 'AI 从新奇工具进入“图像制度”讨论', status: '上升但分化', evidence: 'Foam 2026 明确称 AI 同时作为工具和研究对象出现；Deutsche Börse 2026 shortlisted work 包含 AI-generated images；Arles 2026 多个项目直接讨论生成式 AI、记忆和殖民数据逻辑。', interpretation: '单纯“用 AI 生成一组怪图”已经不新。更有力的项目在问：训练数据来自哪里、描述如何塑造身体、记忆如何被合成、AI 延续什么旧的图像权力。', caution: 'AI 是目前最容易迅速显得过时的形式之一。工具本身不能替代问题。' },
  { title: '生态议题从灾难景观转向关系、照护与材料', status: '持续上升', evidence: 'Prix Pictet Storm 直接围绕气候、政治与社会动荡；Arles 2026 把 living world、污染、植物、照护纳入多个展览。Venice 2026 使用 repair、oasis、garden 等关系性语言。', interpretation: '“拍污染”正在让位给更复杂的方法：科学图像、材料实验、地方知识、长期环境史和人与非人关系。', caution: '宏大的气候题材不会自动产生宏大作品。越大的题材，越需要具体入口。' },
  { title: '摄影书重新变得更重要，而不是被屏幕取代', status: '非常稳定', evidence: 'Paris Photo–Aperture 2023–2025 每年约 940–1,000+ 本投稿；2025 评委直接强调在图像去物质化时代，书的物质形式仍然关键。', interpretation: 'sequence、纸张、尺寸、文本、设计和翻页节奏已经是作品的一部分。对于还没有大型机构展览资源的人，书也是相对现实的国际进入路径。', caution: '昂贵印刷不是关键。很多 shortlist 包含小出版社和 self-published 项目，但编辑结构必须成熟。' },
  { title: '“好看”没有消失，但视觉必须和方法绑定', status: '稳定', evidence: '近年 shortlist 同时出现强视觉、日记式、黑白纪实、抽象、表演和概念项目，没有统一视觉风格。', interpretation: '机构没有集体转向“概念大于视觉”。真正变化是视觉效果越来越需要能解释为创作动作的结果，而不是单独的审美包装。', caution: '不要为了“当代”故意把作品做丑，也不要以为视觉强就等于时尚摄影、视觉弱就等于观念艺术。' }
];

export const trendInstitutions: TrendInstitution[] = [
  {
    id: 'venice', name: 'Venice Biennale / 威尼斯双年展', kind: '双年展', window: '2022 → 2026', entryMode: '国际展核心名单：策展邀请；国家馆：各国独立机制', scale: '2026 国际展 110 个参与者 / 100 个国家参与',
    trajectory: [
      { year: '2022', signal: 'The Milk of Dreams：身体变形、人/非人、技术与身体、身体与地球；以历史“时间胶囊”连接被忽略的谱系。' },
      { year: '2024', signal: 'Foreigners Everywhere：移民、离散、Global South ↔ Global North、queer、outsider、indigenous、popular art 与去殖民。' },
      { year: '2026', signal: 'In Minor Keys：关系地理、共振而非分类、repair / listening / psychic condition、感官经验、艺术家组织与多中心网络。' }
    ],
    hardSignals: ['2024 官方文本把 migration 与 decolonization 明确列为关键主题。', '2026 Koyo Kouoh 的项目包含 110 个参与者，并强调来自不同地域的 practices 之间的 resonance / affinity。', '2026 有 7 个国家首次参加国家馆体系，地域结构继续扩张。'],
    synthesis: ['从“谁被代表”进一步转向“历史和关系如何被组织”。', 'Global South 已经不是临时热点，而是大型机构重新写艺术史的结构性方向。', '2026 的语气比 2024 更少口号式身份分类，更强调感受、修复、关系、材料和长期对话。'],
    reality: ['这不是新人应当直接当作投稿目标的比赛。主展通常是职业网络、机构展览、策展研究长期积累后的结果。', '如果你想靠近这类语境，更现实的路径是先进入区域机构、艺术节、驻留、摄影书和策展人网络。', '“题材政治正确”远远不够；成熟作品往往同时有视觉语言、历史位置和展示能力。'],
    watchNames: ['Adriano Pedrosa', 'Koyo Kouoh', 'Pio Abad', 'Akinbode Akinbiyi', 'Sammy Baloji', 'Zoe Leonard'],
    sources: [{ label: 'Venice 2024 — Adriano Pedrosa statement', url: 'https://www.labiennale.org/en/art/2024/introduction-adriano-pedrosa' }, { label: 'Venice 2026 — In Minor Keys', url: 'https://www.labiennale.org/en/art/2026/61st-exhibition' }, { label: 'Venice 2026 — invited artists', url: 'https://www.labiennale.org/en/news/biennale-arte-2026-invited-artists' }]
  },
  {
    id: 'arles', name: 'Les Rencontres d’Arles / 阿尔勒摄影节', kind: '摄影节', window: '2024 → 2026', entryMode: '主展以策展与机构合作为主；Discovery / book / dummy 等部分项目开放或经机构提名', scale: '大型国际摄影节 + 多类奖项、出版和 curatorial research',
    trajectory: [{ year: '2024', signal: '女性摄影史、日系摄影重估、摄影书与大型单人展并置；档案和被忽略谱系持续进入主舞台。' }, { year: '2025', signal: '教育项目集中讨论 group / memory，并把 AI 与记忆、档案、false memories 放进摄影教育。' }, { year: '2026', signal: 'Worlds in View：非洲与地中海、档案、身份与历史、living world；同时出现 AI、生态、care、殖民数据、科学与信仰图像。' }],
    hardSignals: ['2026 官方总述强调 Africa / Mediterranean、archives、identity、stories、representations 与 living world。', '2026 Lisa Oppenheim 结合 dye-transfer 与 AI；Jordan Beal 直接讨论 AI 与殖民式数据抽取。', '2026 Sammy Baloji、Ayana V. Jackson 等项目用档案、表演和家庭史重写殖民叙事。'],
    synthesis: ['阿尔勒非常能看出“摄影边界扩大”后的现实：经典纪实仍在，但它和档案、AI、装置、科学图像、摄影史研究并排。', '新项目越来越常把“摄影史本身”当材料，而不只是把现实世界当题材。', '它同时保留出版、书奖、Discovery 等相对现实的入口，比威尼斯更适合年轻摄影师研究路径。'],
    reality: ['阿尔勒主展不是单纯靠网上投稿就能进入，策展人、机构合作、出版社和既有项目曝光非常重要。', '对年轻人最现实的入口通常是 Discovery、dummy/book awards、合作机构、驻留或先在别的节展形成可见度。', '能否被展览化很重要：只在 PDF 里成立的系列，和能在空间中形成观看经验的项目差距越来越明显。'],
    watchNames: ['Sammy Baloji', 'Ayana V. Jackson', 'Lisa Oppenheim', 'Jordan Beal', 'Katia Kameli', 'Aman Alam'],
    sources: [{ label: 'Arles 2026 — Worlds in View', url: 'https://www.rencontres-arles.com/en/editions/2026' }, { label: 'Arles 2026 — Lisa Oppenheim', url: 'https://www.rencontres-arles.com/en/expositions/2026/lisa-oppenheim' }, { label: 'Arles 2026 — Jordan Beal', url: 'https://www.rencontres-arles.com/en/expositions/2026/jordan-beal' }]
  },
  {
    id: 'dbpf', name: 'Deutsche Börse Photography Foundation Prize', kind: '摄影奖项', window: '2024 → 2026', entryMode: '专家提名体系 → 国际评审选 4 位 finalist；非一般 open call', scale: '每年 4 位 finalist；winner £30,000',
    trajectory: [{ year: '2024', signal: 'Lebohang Kganye 获奖：家庭档案 + 表演 + 雕塑 + theatre + moving image。' }, { year: '2025', signal: 'Lindokuhle Sobekwa 获奖：家庭照片、手写文字、scrapbook 式出版；shortlist 同时含 constructed image、performance 与 documentary。' }, { year: '2026', signal: 'Rene Matić 获奖：日记式快照 + 安装 + 声音，围绕 identity、belonging、subculture、class、family；shortlist 同时出现 AI stock-image critique 与长期调查纪实。' }],
    hardSignals: ['连续三年 winner 都不是靠“单张摄影风格”成立，而是依靠项目结构与媒介组合。', '2026 官方总结明确说 shortlist 包含 collaborative photography、investigative documentary、installation、video/sound、experimental conceptual photography。', '2026 评委 Shoair Mavlian 用 intimate / investigative / imaginative 概括 shortlist。'],
    synthesis: ['这是目前观察“当代摄影机构究竟还认不认摄影”的很好指标：答案是认，但摄影已经扩展到书、档案、声音、装置和 AI。', '私人经验与社会结构的连接极强，尤其是家庭、阶级、迁移、记忆、归属。', '经典纪实没有被淘汰；真正下降的是“只是完成度高但方法上没有新问题”的摄影。'],
    reality: ['它看的是过去 12 个月已经在欧洲展出或出版、被专家提名的项目，所以先有机构可见度，再有奖项。', '不要把 Deutsche Börse 当第一站；把入围者过去 3–5 年的展览、出版和代理路径倒推，才有现实参考价值。', '书籍可以和美术馆展览一样成为入围入口，这对资源有限的摄影师很重要。'],
    watchNames: ['Rene Matić', 'Lindokuhle Sobekwa', 'Lebohang Kganye', 'Weronika Gęsicka', 'Amak Mahmoodian', 'Cristina De Middel'],
    sources: [{ label: '2026 winner — Rene Matić', url: 'https://www.deutsche-boerse.com/dbg-en/media/news-stories/press-releases/Rene-Mati-wins-the-Deutsche-B-rse-Photography-Foundation-Prize-2026-5130514' }, { label: '2026 shortlist', url: 'https://www.deutsche-boerse.com/dbg-en/media/news-stories/press-releases/Deutsche-B-rse-Photography-Foundation-Prize-2026-shortlist-revealed-Jane-Evelyn-Atwood-Weronika-G-sicka-Amak-Mahmoodian-Rene-Mati--4737478' }, { label: '2025 shortlist', url: 'https://www.deutsche-boerse.com/dbg-en/media/news-stories/press-releases/Deutsche-B-rse-Photography-Foundation-Prize-2025-shortlist-announced-Cristina-De-Middel-Rahim-Fortune-Tarrah-Krajnak-Lindokuhle-Sobekwa-4151622' }]
  },
  {
    id: 'foam', name: 'Foam Talent / Foam Magazine', kind: '杂志 / Open Call', window: '2024 → 2026', entryMode: '国际 open call；2026 起取消年龄限制，强调 early career', scale: '2026：2,892 submissions / 107 countries / 15 Talents + 15 runners-up',
    trajectory: [{ year: '2024–25', signal: '约 2,500 位申请者、106 国、20 位 Talent；官方强调 storytelling、cultural critique、personal expression 与 empathy。' }, { year: '2026', signal: '2,892 submissions、5,784 projects、55,303 images；political oppression、mental health、religion、displacement、identity、AI、belonging/home。' }],
    hardSignals: ['2026 正式 Talent 15 人，约占提交人数 0.52%；含 runners-up 30 人约 1.04%。', '官方明确称 AI 同时作为 artistic tool 与 subject of examination 出现。', 'home / family / community / sense of place 被官方称为跨项目反复出现的 underlying thread。'],
    synthesis: ['Foam 仍然非常重视完整叙事能力，但“摄影类型”已经非常开放。', '新一代项目的共同点更像 belonging、home、trauma、faith、technology 这些彼此交叉的问题，而不是某个统一的视觉潮流。', '2026 去年龄限制后，竞争从“年轻摄影师”扩成“职业早期摄影师”，成熟度门槛实际更高。'],
    reality: ['这是你真正可以直接投的国际入口之一，但 0.5% 左右的 Talent 比例意味着必须把它当高波动机会，而不是职业计划本身。', 'Foam 很适合用来检测项目是否有清晰视觉语言和完整叙事，但不能从入选题材倒推“拍什么更容易中”。', '评委每届变化很大；连续研究 3 届比只研究今年 winners 更有意义。'],
    watchNames: ['Adam Rouhana', 'Ramona Jingru Wang', 'Sara De Brito Faustino', 'Yiding Chen', 'Nad E Ali', 'Paola Jimenez'],
    sources: [{ label: 'Foam Talent 2026 press release', url: 'https://www.foam.org/press/foam-talent-2026' }, { label: 'Foam Talent 2026 exhibition', url: 'https://www.foam.org/events/foam-talent-2026' }, { label: 'Foam Talent 2024–2025', url: 'https://www.foam.org/press/foam-talent-2024' }]
  },
  {
    id: 'pictet', name: 'Prix Pictet', kind: '摄影奖项', window: '2021 → 2026', entryMode: '全球提名人网络 nomination；非普通 open call', scale: '350+ nominators / 12 位 Storm shortlist / CHF 100,000',
    trajectory: [{ year: '2021', signal: 'Fire：环境危机被处理为生态、社会和政治问题。' }, { year: '2023', signal: 'Human：Gauri Gill 凭长期 Notes from the Desert 获奖，长期共同体实践得到突出认可。' }, { year: '2025', signal: 'Storm：Alfredo Jaar 以 Great Salt Lake 项目 The End 获奖；shortlist 从 daguerreotype、photogram 到 frontline documentary。' }],
    hardSignals: ['Prix Pictet 每一周期围绕 sustainability 主题，但 shortlist 的媒介范围并不窄。', 'Storm 官方把自然灾害同时连接政治、经济、社会动荡与 displacement。', '2025 winner Jaar 刻意使用小尺寸、低调的“visual whisper”，说明灾难议题并不等于视觉必须宏大。'],
    synthesis: ['可持续议题正在从“环保摄影”扩成 extractivism、迁移、核历史、战争、城市风险、社会脆弱性。', '长期研究和清晰伦理位置比单次灾难拍摄更有优势。', '视觉美与灾难并非互斥，关键是美感有没有成为问题本身的一部分。'],
    reality: ['Prix Pictet 更适合用来观察成熟项目方向，不适合作为新人直接投稿路线。', '它有强提名网络，因此先进入策展人、机构和出版生态是前提。', '如果你做生态议题，不要只学“题材”，要研究 shortlisted artist 如何把技术和历史嵌进项目。'],
    watchNames: ['Alfredo Jaar', 'Gauri Gill', 'Roberto Huarcaya', 'Takashi Arai', 'Marina Caneve', 'Belal Khaled'],
    sources: [{ label: 'Prix Pictet — Storm cycle', url: 'https://prixpictet.com/cycles/storm' }, { label: 'Storm shortlist', url: 'https://prixpictet.com/news/storm-shortlist-announced' }, { label: 'Alfredo Jaar wins Storm', url: 'https://prixpictet.com/news/alfredo-jaar-wins-eleventh-prix-pictet' }]
  },
  {
    id: 'aperture-books', name: 'Paris Photo–Aperture PhotoBook Awards', kind: '出版 / 赛事', window: '2023 → 2025', entryMode: '全球书籍 submission；First PhotoBook / PhotoBook of the Year / Catalog', scale: '2023：961 / 2024：940 / 2025：1,000+ submissions',
    trajectory: [{ year: '2023', signal: '35 shortlist / 61 countries；评审强调 form 与 content 同时判断。' }, { year: '2024', signal: '35 shortlist / 59 countries；self-published、小型出版社、档案研究与 protest / Black photographic history 并存。' }, { year: '2025', signal: '37 shortlist / 55 countries；评委明确提到 archive、intergenerational conversations、政治极端处境与书作为物质形式的重要性。' }],
    hardSignals: ['连续三年 submission 维持约千本规模，国际竞争稳定且成熟。', '2025 shortlist jury 强调 design innovation 与从 digital-image culture 到政治、自由的多样叙事。', '2025 final jury 明确把 archive / intergenerational conversation 视为跨书目出现的现象。'],
    synthesis: ['摄影书不是“把照片装订”，而是独立媒介。', '现在很强的一条路径是：档案 + 文本 + sequencing + 设计，共同制造时间和叙事。', 'self-publishing 并没有被排除，反而让资源少的作者保留现实路径，但编辑判断要求更高。'],
    reality: ['如果你目前难以做大型装置，做一本真正成熟的 dummy / book 可能比硬做展览更现实。', '但获奖书普遍有很强的设计、编辑或 publisher 协作；单靠摄影师个人“选 30 张照片”通常不够。', 'First PhotoBook 是职业早期相对可瞄准的入口，但三年 shortlist rate 都只有几个百分点。'],
    watchNames: ['Eleonora Agostini', 'Widline Cadet', 'Hady Barry', 'Genesis Báez', 'Lindokuhle Sobekwa', 'Pia-Paulina Guilmoth'],
    sources: [{ label: '2025 shortlist', url: 'https://aperture.org/press-release/announcing-the-shortlist-for-the-2025-paris-photoaperture-photobook-awards/' }, { label: '2025 winners', url: 'https://aperture.org/press-release/announcing-the-winners-of-the-2025-paris-photo-aperture-photobook-awards/' }, { label: '2024 shortlist', url: 'https://aperture.org/editorial/announcing-the-2024-photobook-awards-shortlist/' }]
  },
  {
    id: 'bjp', name: 'British Journal of Photography — Ones to Watch', kind: '杂志 / 人才观察', window: '2025 → 2026', entryMode: '由全球 curators / editors / artists nomination；编辑选择', scale: '年度人才观察，不是简单 open call ranking',
    trajectory: [{ year: '2025 cohort', signal: '出现 sexuality / repression、motherhood / trauma、banlieue representation、trans community、place / identity、memory 等高度具体的长期项目。' }, { year: '2026 coverage', signal: 'BJP 持续回访 2025 cohort，并由策展人、编辑、艺术家说明 nomination 理由。' }],
    hardSignals: ['该栏目由全球策展人、编辑和艺术家网络提名，说明作品之外的专业可见度也是机制的一部分。', '被提名项目差异很大，视觉并没有统一风格，但普遍有明确作者位置与具体社会/地理入口。'],
    synthesis: ['BJP Ones to Watch 更像行业“谁正在被专业网络谈论”的温度计。', '地方性很重要：项目往往不是讲抽象大词，而是从一个社区、家庭、城市边缘、身体经验深入。', '作者声音和长期接触常常比技术新奇更重要。'],
    reality: ['这是典型“network matters”机制。你不能只研究入选作品，还要研究是谁提名、艺术家之前在哪发表和展览。', '这并不意味着要社交投机，而是需要让项目进入编辑、策展人、portfolio review、festival 和 publication 的可见循环。', '对于职业早期，BJP 这类媒体曝光通常比直接想象进入顶级美术馆更现实。'],
    watchNames: ['Linda Zhengová', 'Jade Joannès', 'Arhant Shrestha', 'Jaisingh Nageswaran', 'Atefe Moeini', 'Shahria Sharmin'],
    sources: [{ label: 'BJP — Linda Zhengová', url: 'https://www.1854.photography/2026/04/ones-to-watch-2025-linda-zhengova/' }, { label: 'BJP — Arhant Shrestha', url: 'https://www.1854.photography/2026/05/ones-to-watch-2025-arhant-shrestha/' }, { label: 'BJP — Jaisingh Nageswaran', url: 'https://www.1854.photography/?p=79007' }]
  }
];

export const curatorProfiles: CuratorProfile[] = [
  { id: 'adriano-pedrosa', name: 'Adriano Pedrosa', role: 'Artistic Director, MASP; curator of Venice Biennale 2024', geography: 'São Paulo / Global South', focus: ['plural histories', 'decolonial art history', 'Global South', 'indigenous / popular art', 'queer histories'], trackRecord: ['MASP “Histories” 系列持续把单一艺术史拆成多个开放、冲突的 histories。', 'Venice 2024 把 foreigner、diaspora、Global South、indigenous、queer、outsider 与 popular art 放到中心。'], reading: 'Pedrosa 的关键不只是“喜欢非西方艺术家”，而是改变艺术史的组织方法：从单线 canonical history 转向多个并置、冲突和未完成的 histories。', practical: '如果你的项目涉及家乡、家族、地方文化或非主流视觉，不要只把它当“个人身份”。更有力的方式是展示它如何和已有历史分类发生冲突。', caution: '不要机械复制 decolonial 术语。Pedrosa 的策展通常建立在具体历史材料、机构收藏与长期研究上。', sources: [{ label: 'MASP profile', url: 'https://masp.com.br/pt-br/pessoas/adriano-pedrosa' }, { label: 'Venice 2024 statement', url: 'https://www.labiennale.org/en/art/2024/introduction-adriano-pedrosa' }] },
  { id: 'koyo-kouoh', name: 'Koyo Kouoh', role: 'Curator of Venice Biennale 2026; founder of RAW Material Company', geography: 'Dakar / transnational Africa', focus: ['relational geography', 'African contemporary art', 'artist-led ecosystems', 'repair / listening', 'material experimentation'], trackRecord: ['In Minor Keys 以 110 个参与者构成关系网络，不按传统章节硬分，而从 practices 之间提取 motifs。', '她把 Dakar 的关系型研究方法带进 Venice，并邀请 artist-led organisations 与 collective practices。'], reading: 'Kouoh 的方向比“代表非洲”复杂得多：她把策展理解为长期关系、相遇和共振，强调艺术如何在危机中维持精神和社会生活。', practical: '对艺术家来说，这提示“项目怎样和别人、地方、材料形成关系”可能比单独声明一个宏大主题更重要。', caution: '“care / repair / listening”很容易变成柔软口号。真正有说服力的项目必须让这些词落实到制作方法和合作关系里。', sources: [{ label: 'Venice 2026 exhibition', url: 'https://www.labiennale.org/en/art/2026/61st-exhibition' }, { label: 'In Minor Keys curatorial text', url: 'https://static.labiennale.org/files/arte/Documenti/biennale-arte-2026a.pdf' }] },
  { id: 'cecilia-alemani', name: 'Cecilia Alemani', role: 'Director & Chief Curator, High Line Art; curator of Venice Biennale 2022', geography: 'New York / Italy', focus: ['body transformation', 'human / nonhuman', 'technology', 'Earth', 'historical constellations'], trackRecord: ['The Milk of Dreams 围绕身体变形、人和技术、人和地球三组问题组织。', '用历史 capsule 把被忽略的女性、超现实、实验和身体谱系插进当代展览。'], reading: 'Alemani 很擅长把“当代问题”与被忽略的历史前辈连接，而不是把新艺术家放在真空里。', practical: '作品集里如果能清楚知道自己的历史参照，而不是只列当代热门艺术家，会更成熟。', caution: '历史参照不是 moodboard。要说明你继承、反驳或改变了什么方法。', sources: [{ label: 'The Milk of Dreams', url: 'https://www.ceciliaalemani.com/projects/the-milk-of-dreams' }, { label: 'Venice 2022 statement', url: 'https://www.labiennale.org/en/art/2022/statement-cecilia-alemani' }] },
  { id: 'thelma-golden', name: 'Thelma Golden', role: 'Ford Foundation Director and Chief Curator, Studio Museum in Harlem', geography: 'New York / African Diaspora', focus: ['Black contemporary art', 'canon formation', 'community institution', 'race / representation', 'emerging artists'], trackRecord: ['从 1993 Whitney Biennial、Black Male 到长期领导 Studio Museum，她持续改变黑人艺术家进入主流机构的方式。', 'Studio Museum 同时是 exhibition institution、artist development platform 和 Harlem 社区文化节点。'], reading: 'Golden 的影响不只是选了哪些艺术家，而是证明“机构生态本身”可以改变谁进入艺术史。', practical: '如果你想进入国际艺术生态，不应只盯奖项；寻找真正会持续培养艺术家的机构、residency、museum program 同样重要。', caution: '不要把 Black art / identity art 简化成视觉类型。她的核心更接近文化位置、机构建设和长期支持。', sources: [{ label: 'Studio Museum leadership', url: 'https://www.studiomuseum.org/leadership' }] },
  { id: 'roxana-marcoci', name: 'Roxana Marcoci', role: 'David Dechman Senior Curator, Photography, MoMA', geography: 'New York / transnational photography', focus: ['expanded photography', 'feminist histories', 'diaspora', 'performance / image', 'photobook / film'], trackRecord: ['长期策划 Tillmans、LaToya Ruby Frazier、An-My Lê、Taryn Simon、Zoe Leonard、Carrie Mae Weems 等跨纪录、观念、装置与社会实践的摄影。', 'MoMA Forums on Contemporary Photography 持续讨论 image-making 的边界。'], reading: 'Marcoci 的轨迹显示大型美术馆的“摄影部门”早已不是只收藏纯摄影：performance、film、photobook、装置和社会历史都可以进入摄影框架。', practical: '想走 contemporary photography，不必把自己的项目修剪成传统 photography portfolio；关键是你能不能说明图像在整个作品系统里的作用。', caution: 'expanded field 不等于 photography 不重要。她策展的项目往往仍然对图像本身有非常高的形式和历史要求。', sources: [{ label: 'MoMA profile', url: 'https://www.moma.org/about/senior-staff/roxana-marcoci' }, { label: 'MoMA Photography perspectives', url: 'https://www.moma.org/magazine/authors/80' }] },
  { id: 'shoair-mavlian', name: 'Shoair Mavlian', role: 'Director, The Photographers’ Gallery', geography: 'London / international photography', focus: ['expanded photography', 'conflict / memory', 'emerging practice', 'digital / AI', 'institutional accessibility'], trackRecord: ['曾在 Tate Modern 策划 Conflict, Time, Photography 与 Shape of Light，并参与建立摄影收藏。', '现领导 The Photographers’ Gallery，同时参与 Deutsche Börse Prize；2026 shortlist 明确包含 AI、sound、installation、long-form documentary。'], reading: '她的路径很适合观察摄影专业机构怎么面对“摄影已经不只是一张照片”这件事：不是放弃 medium，而是扩大 medium。', practical: '如果你的项目跨图像、声音或材料，仍然要让 photography 的问题清楚，而不是为了进入 contemporary art 把摄影隐藏掉。', caution: 'The Photographers’ Gallery 同时有历史摄影和新技术项目，因此不存在一种单一“TPG 风格”。', sources: [{ label: 'TPG appointment / profile', url: 'https://thephotographersgallery.org.uk/shoair-mavlian-appointed-new-director-photographers-gallery' }, { label: '2026 Prize jury', url: 'https://thephotographersgallery.org.uk/deutsche-borse-photography-foundation-prize-jury-2026' }] },
  { id: 'mark-sealy', name: 'Mark Sealy', role: 'Executive Director, Autograph; scholar of decolonising photography', geography: 'London / global photography histories', focus: ['decolonising photography', 'race / representation', 'human rights', 'archives', 'social change'], trackRecord: ['自 1991 年起领导 Autograph，长期 commissioning 和 advocating Black photographic practices。', 'Decolonising the Camera 把摄影的观看、机构和 racial time 作为核心问题。'], reading: 'Sealy 不只是要求“增加黑人摄影师”，而是追问相机、档案、博物馆和观看制度本身怎样带有殖民历史。', practical: '做身份或家族题材时，可以把问题从“我是谁”推进到“谁有权描述我、这些图像由谁保存和分类、观看者处在什么位置”。', caution: '理论密度不能替代作品。最有力的去殖民摄影仍然需要具体图像、历史证据和展示策略。', sources: [{ label: 'Autograph profile', url: 'https://autograph.org.uk/events/faisal-abdu-allah-with-mark-sealy' }, { label: 'Paul Mellon Centre profile', url: 'https://www.paul-mellon-centre.ac.uk/about/mark-sealy' }] },
  { id: 'hans-ulrich-obrist', name: 'Hans Ulrich Obrist', role: 'Artistic Director, Serpentine', geography: 'London / global contemporary art', focus: ['artist conversations', 'long-term research', 'interdisciplinary practice', 'commissions', 'digital-native generation'], trackRecord: ['curated 300+ exhibitions and developed long-running formats such as Do It。', '89plus 等项目把策展变成跨地域、跨媒介的人才和研究网络。'], reading: 'Obrist 的重要性在于“关系与对话本身就是策展基础设施”。他常通过长期 conversation 和 commissioning 让艺术家发展尚未完成的想法。', practical: '国际艺术生态不是只有提交 PDF；artist talk、research conversation、studio visit、residency 和持续关系都会改变项目被理解的方式。', caution: '不要把 networking 理解成认识名人。真正有效的是长期让别人知道你在研究什么、你下一步在推进什么。', sources: [{ label: 'MCA profile', url: 'https://mcachicago.org/About/Who-We-Are/Friends/Hans-Ulrich-Obrist' }, { label: 'Serpentine programmes', url: 'https://www.serpentinegalleries.org/watch/' }] },
  { id: 'charlotte-cotton', name: 'Charlotte Cotton', role: 'Writer and curator of photography', geography: 'UK / US / contemporary photography', focus: ['photography as contemporary art', 'staged photography', 'fashion image', 'private / public image', 'post-photography'], trackRecord: ['The Photograph as Contemporary Art 长期影响艺术摄影教育和分类方式。', '在 V&A、The Photographers’ Gallery、LACMA 等机构长期处理摄影和 contemporary art 的交叉。'], reading: 'Cotton 的价值在于她提供了一套“按艺术家怎样使用摄影”而不是按摄影技术分类的框架，这和本网站的方法非常接近。', practical: '研究作品时，先问摄影被拿来做什么：记录、编排、档案、表演、物件、互联网、概念，而不是先问属于哪种风格。', caution: '她的重要文本是框架，不是最新趋势排行榜；使用时应和 2024–2026 的真实 shortlist / exhibition 对照。', sources: [{ label: 'Thames & Hudson profile', url: 'https://www.thamesandhudsonusa.com/contributors/charlotte-cotton' }] }
];
