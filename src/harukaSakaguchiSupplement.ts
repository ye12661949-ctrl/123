import { artists } from './data';
import { artistArchives, type ArtistArchive, type ArchiveProject } from './archiveData';

const normalize = (value: string) => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const artist = artists.find(item => normalize(item.name) === normalize('Haruka Sakaguchi'));

if (artist) {
  artist.born = '1990 · Osaka, Japan';
  artist.base = 'New York City / Tokyo';
  artist.intro = '以长期纪实、肖像、手写文本、口述史与历史材料处理文化记忆、代际创伤、移民身份和美国社会中的族裔经验。她经常让被摄者直接写信或提供第一人称叙述，再把肖像、场所、文件与文字组织成多层证据系统。';
  artist.methods = ['长期纪实', '肖像', '场所摄影', '手写信件', '口述史', '历史材料', '双联画', '远程肖像', '影像 / 短片', '编辑摄影'];
  artist.subjects = ['文化记忆', '代际创伤', '日裔美国人拘禁史', '原爆记忆', '族裔身份', '移民与归属', '反亚裔种族主义', '城市绅士化', '原住民身份', '媒介刻板印象'];
  artist.outputs = ['摄影系列', '多媒体项目', '手写文本 + 肖像', '短片', '杂志专题', '展览', '教育资源'];
  artist.institutions = Array.from(new Set([
    ...artist.institutions,
    'International Center of Photography (ICP)',
    'National Geographic Society',
    'Nobel Peace Center',
    'Fondazione Prada',
    'Photoville',
    'Duke Archive of Documentary Arts'
  ]));
  artist.achievements = Array.from(new Set([
    ...artist.achievements,
    'ICP Infinity Award 2026 · Documentary Practice and Photojournalism',
    'CENTER Socially Engaged Award 2025',
    'National Geographic Society Level I Storytelling Grant 2023',
    'Duke Archive of Documentary Arts Collection Award 2021',
    'Pictures of the Year International · finalist 2021',
    'Newswomen’s Club of New York Front Page Award · Photo Essay 2020'
  ]));
  artist.whyImportant = '她的价值不主要在单张视觉风格，而在“怎么让历史进入当下”。她反复使用一个很清楚的结构：先找到被官方叙事压缩或遗漏的历史，再让具体个人以肖像、手写信、地点和第一人称证词重新占据叙事中心。对研究型摄影很有参考价值，因为她把纪实拍摄、参与者文本、档案与展示组织成一套可验证的叙事方法。';
  artist.projects = [
    {
      year: '2021–2026',
      title: 'The Camps America Built',
      type: '长期多媒体纪实 / 肖像 / 历史场所',
      facts: [
        '持续拍摄美国二战时期 10 个日裔美国人集中拘禁营遗址及返回现场的前被拘禁者与后代。',
        '拍摄超过 80 位前被拘禁者及其后代，并把人物肖像与遗址景观并置。',
        '要求前被拘禁者写信给当年被拘禁的年轻自己；后代则写信给自己纪念的前被拘禁亲人。',
        '把手写信件、肖像、场所照片、历史资料与家族故事组合成多媒体项目。',
        '项目获得 National Geographic Society 支持，2026 年在 ICP Incubator Space 展出。'
      ],
      reading: '核心动作不是“拍历史遗址”，而是让今天的人重新进入历史地点，再用手写信把当下、家族记忆和过去的人连接起来。'
    },
    {
      year: '2025',
      title: 'Loyal American',
      type: '短纪录片 / The Camps America Built 延伸',
      facts: [
        '跟随 Henry Kaku 返回其父亲 Keige 曾被拘禁的营地。',
        '围绕 Keige 曾服役美军、随后被强制拘禁、拒绝忠诚问卷并最终放弃美国国籍的经历展开。',
        '由 Sakaguchi 执导，与 National Geographic Society 合作制作。',
        '把原本以摄影和书信为主的长期项目扩展到运动影像、口述回忆和现场行程。'
      ],
      reading: '这是她从静态纪实进入电影的关键节点，但方法没有变：仍然依赖具体家庭、具体地点和一段被制度塑造的个人选择。'
    },
    {
      year: '2017–',
      title: '1945',
      type: '多媒体肖像 / 口述史 / 手写信件',
      facts: [
        '采访并记录广岛、长崎原爆幸存者 hibakusha 及其后代。',
        '收集 50 多位幸存者和后代的信件与证词。',
        '邀请被摄者亲笔写信给未来世代，讨论辐射疾病、幸存者负罪感、后代健康焦虑与持续歧视。',
        '把肖像与个人信件组合，而不是只用摄影师自己的旁白解释人物。',
        '2017–2018 年在 Nobel Peace Center 展出，2024 年被改编为该机构的教学资源。'
      ],
      reading: '这里已经出现她后来反复使用的方法：肖像只是入口，真正承担历史信息的是参与者自己写下的文本。'
    },
    {
      year: '2020',
      title: 'I Will Not Stand Silent',
      type: '远程肖像 / 第一人称证词 / 合成图像',
      facts: [
        '与图片编辑 Sangsuk Sylvia Kang 合作，记录疫情期间纽约亚裔遭遇的种族主义。',
        '采访 10 位纽约亚裔，让他们提供第一人称经历与对 Black Lives Matter 的思考。',
        '在封城条件下通过 Zoom 或 FaceTime 制作远程肖像。',
        '把远程肖像叠加到他们遭遇骚扰或攻击的具体地点照片上。',
        '项目发表于 TIME，并于 2021 年获得 Duke Archive of Documentary Arts Collection Award。'
      ],
      reading: '技术限制直接变成形式：无法面对面拍摄，于是“远程脸部 + 真实事发地点”制造出一种人在场又不在场的结构。'
    },
    {
      year: '2019–2022',
      title: 'Typecast',
      type: '协作肖像 / 角色扮演 / 讽刺性摄影',
      facts: [
        '与摄影记者 Griselda San Martin 合作。',
        '邀请有色人种演员分别扮演两种角色：行业常让他们饰演的刻板角色，以及他们真正希望出演的角色。',
        '把同一位演员的两种角色形象并置，直接比较类型化分配与个人愿望。',
        '2020 年发表于 The Washington Post Magazine。',
        '2022 年进入 Fondazione Prada Osservatorio 与 Prada Aoyama 的 Role Play 展览。'
      ],
      reading: '作品不是泛泛讨论“刻板印象”，而是让同一个身体在两个具体角色模板之间切换，使行业分配机制直接可见。'
    },
    {
      year: '2017',
      title: 'The Original New Yorkers',
      type: '肖像 + 手写信双联画 / 社区合作',
      facts: [
        '拍摄受纽约绅士化影响的本地居民。',
        '被摄者在自己的家或工作场所被拍摄。',
        '每位参与者写一封未经编辑的手写信，谈绅士化如何影响自己，或直接写给新搬入纽约的人。',
        '每张肖像与对应手写信以 diptych 双联形式展示。',
        '与 Lower East Side 的 Perfect City 艺术与公民行动网络合作，并在 Abrons Arts Center / Henry Street Settlement 展出。'
      ],
      reading: '她把“解释权”部分交给被摄者：照片负责身体与环境，信件负责立场和经验，二者互不替代。'
    },
    {
      year: '2020',
      title: 'Quarantine Diary',
      type: '日记摄影 / 自我观察',
      facts: [
        '从 2020 年 3 月 20 日纽约 shelter-in-place 开始，连续约 30 天进行每日一张的拍摄。',
        '把一张照片与当天的文字日记绑定，记录隔离、焦虑、抑郁、种族歧视经历与街道变化。',
        '拍摄规则本身被用作维持日常结构的方式。',
        '部分内容后由 The New Yorker 发布，并于 2022 年在 Ferragamo Museo 展出。'
      ],
      reading: '这是她少见的强烈第一人称项目：不是调查别人，而是把固定拍摄规则变成对自身精神状态和城市时间的记录。'
    },
    {
      year: '2019',
      title: 'I Am Taíno',
      type: '身份肖像 / 社区合作 / 口述史',
      facts: [
        '围绕 Taíno 身份被官方人口分类抹除的“paper genocide”展开。',
        '与 Taíno Chief Jorge Baracutei Estévez 及纽约社区组织 Higuayagua 合作。',
        '拍摄自我认同为 Taíno 的参与者，并保留其年龄、认同年限与个人身份叙述。',
        '通过肖像与第一人称文本反驳“Taíno 已经灭绝”的主流历史叙述。',
        '2019 年发表于 National Geographic。'
      ],
      reading: '项目把人口统计和档案中的“被删除身份”重新还给具体个人；摄影承担的是重新使人可见，而不是替他们定义身份。'
    },
    {
      year: '2016',
      title: 'Dorf USA',
      type: '公路摄影 / 个人视觉日记',
      facts: [
        '在 2016 美国总统大选前夕，与当时伴侣驾驶 1978 Ford Econoline 进行约四个月美国公路旅行。',
        '以一个日本出生、在美国长大的移民视角拍摄美国景观与地方生活。',
        '艺术家后来主动反思这批照片中过度依赖经典 Americana 视觉传统的问题。'
      ],
      reading: '这组早期作品很重要，因为它能看出她后来为何逐渐从“寻找美国形象”转向“寻找谁有权定义美国”。'
    }
  ];
  artist.sourceLabel = 'Haruka Sakaguchi · official website';
  artist.sourceUrl = 'https://www.harukasakaguchi.com/';

  const existing = artistArchives[artist.id] as ArtistArchive | undefined;
  const archive: ArtistArchive = existing ?? {
    artistId: artist.id,
    projectCoverage: '',
    imageCoverage: '',
    note: '',
    projects: [],
    awards: [],
    exhibitions: [],
    sources: []
  };

  const detailedProjects: ArchiveProject[] = [
    {
      title: 'The Camps America Built', cluster: 'Memory / incarceration / belonging', period: '2021–2026',
      summary: '记录美国二战时期日裔美国人集中拘禁的后续影响：10 个营地现状、前被拘禁者与后代的回访、家族记忆和手写书信共同构成项目。',
      actions: ['前往 10 个拘禁营遗址拍摄现状', '拍摄 80+ 位前被拘禁者及后代', '拍摄家庭返回营地的 pilgrimage 行程', '要求前被拘禁者写信给年轻时的自己', '要求后代写信给被其纪念的亲人', '拍摄遗址景观', '整合历史材料与家族叙述', '制作独立项目网站与家庭 / 营地图库', '扩展为短片 Loyal American', '进入 ICP Incubator Space 展览'],
      sourceUrl: 'https://www.harukasakaguchi.com/the-camps-america-built', images: [],
      relations: [
        { kind: '奖项', label: 'CENTER Socially Engaged Award', detail: 'Winner 2025' },
        { kind: '展览', label: 'International Center of Photography (ICP)', detail: '2026 · ICP Incubator Space' },
        { kind: '出版', label: 'National Geographic Magazine', detail: '2026' }
      ]
    },
    {
      title: 'Loyal American', cluster: 'The Camps America Built / moving image', period: '2025',
      summary: '短片跟随 Henry Kaku 返回其父亲 Keige 的拘禁营历史，通过家族行程重新讨论“忠诚”与美国身份。',
      actions: ['跟拍 Henry Kaku 的营地 pilgrimage', '围绕父亲 Keige 的军旅、拘禁、忠诚问卷和放弃国籍经历建立叙事', '把现场行程与口述记忆剪辑为短纪录片', '与 National Geographic Society 合作制作'],
      sourceUrl: 'https://www.harukasakaguchi.com/loyal-american', images: [],
      relations: [
        { kind: '展览', label: 'Oakland Asian Cultural Center', detail: 'Film premiere · 2025' },
        { kind: '展览', label: 'Japanese American National Museum', detail: 'Screening · 2025' },
        { kind: '出版', label: 'National Geographic Education', detail: '2025' }
      ]
    },
    {
      title: '1945', cluster: 'Memory / hibakusha / testimony', period: '2017–',
      summary: '以广岛、长崎原爆幸存者及后代为核心，把肖像、50+ 封手写信和个人证词组织成长期记忆档案。',
      actions: ['采访 hibakusha 与后代', '制作人物肖像', '邀请参与者写给未来世代的手写信', '记录辐射疾病、幸存者负罪感、代际创伤与歧视', '将肖像和原始文字配对', '把项目转成展览和教学资源'],
      sourceUrl: 'https://www.harukasakaguchi.com/1945', images: [],
      relations: [
        { kind: '展览', label: 'Nobel Peace Center', detail: 'Ban the Bomb · 2017–2018' },
        { kind: '出版', label: 'TIME', detail: '2017' },
        { kind: '出版', label: 'National Geographic Magazine', detail: '2023' }
      ]
    },
    {
      title: 'I Will Not Stand Silent', cluster: 'Anti-Asian racism / pandemic', period: '2020',
      summary: '疫情封城期间的协作纪实：10 位纽约亚裔通过第一人称叙述和远程肖像讲述遭遇的种族主义。',
      actions: ['采访 10 位纽约亚裔', '收集第一人称种族主义经历', '通过 Zoom / FaceTime 制作远程肖像', '另行拍摄事件发生地点', '将远程肖像叠加到地点照片上', '与图片编辑 Sangsuk Sylvia Kang 协作编辑'],
      sourceUrl: 'https://www.harukasakaguchi.com/i-will-not-stand-silent', images: [],
      relations: [
        { kind: '出版', label: 'TIME Magazine', detail: '2020-07-06 issue' },
        { kind: '奖项', label: 'Duke Archive of Documentary Arts Collection Award', detail: 'Winner 2021' },
        { kind: '展览', label: 'Columbia University Graduate School of Journalism', detail: '2023' }
      ]
    },
    {
      title: 'Typecast', cluster: 'Representation / entertainment industry', period: '2019–2022',
      summary: '让有色人种演员在“经常被分配的刻板角色”和“希望扮演的角色”之间进行成对表演，以肖像直接暴露类型化机制。',
      actions: ['与 Griselda San Martin 合作', '邀请演员列出 typecast role 与 wish role', '为同一演员分别制作两套角色肖像', '把两张图成对比较', '配合演员身份与角色名称进行编辑', '将系列进入杂志和展览版本'],
      sourceUrl: 'https://www.harukasakaguchi.com/typecast', images: [],
      relations: [
        { kind: '出版', label: 'The Washington Post Magazine', detail: '2020-03-19 issue' },
        { kind: '展览', label: 'Photoville', detail: 'New York 2019 / Los Angeles 2019' },
        { kind: '展览', label: 'Osservatorio Fondazione Prada', detail: 'Role Play · 2022' },
        { kind: '展览', label: 'Prada Aoyama', detail: 'Role Play · 2022' }
      ]
    },
    {
      title: 'The Original New Yorkers', cluster: 'Gentrification / community', period: '2017',
      summary: '纽约本地居民肖像与未经编辑的手写信形成双联画，直接记录绅士化对住房、工作和社区归属的影响。',
      actions: ['在参与者家中或工作地点拍摄肖像', '邀请每人写一封关于绅士化或写给新居民的信', '保留手写文本原貌和原始措辞', '将肖像与信件做成 diptych', '与 Perfect City 社区网络合作', '在社区机构中展示'],
      sourceUrl: 'https://www.harukasakaguchi.com/the-original-new-yorkers', images: [],
      relations: [{ kind: '展览', label: 'Abrons Arts Center / Henry Street Settlement', detail: '2017' }]
    },
    {
      title: 'Quarantine Diary', cluster: 'Personal / pandemic diary', period: '2020-03-20–04-20',
      summary: '纽约疫情封城最初一个月的每日摄影与文字日记，以固定规则同时记录城市状态与个人精神状态。',
      actions: ['设定“一天一张”连续拍摄规则', '同步写下每天的个人文字', '记录封城街景、工作状态、种族主义与孤独经验', '保留缺拍和无法起床的日子作为项目的一部分', '把日记转为社交媒体发布与展览'],
      sourceUrl: 'https://www.harukasakaguchi.com/quarantine-diary', images: [],
      relations: [
        { kind: '出版', label: 'The New Yorker Instagram', detail: '2020-05-06–13' },
        { kind: '展览', label: 'Ferragamo Museo', detail: '2022' }
      ]
    },
    {
      title: 'I Am Taíno', cluster: 'Indigenous identity / paper genocide', period: '2019',
      summary: '与 Taíno 社区协作，以肖像和第一人称身份叙述回应 census 与殖民分类造成的官方身份抹除。',
      actions: ['与 Taíno Chief Jorge Baracutei Estévez 合作', '与纽约 Higuayagua 社群合作', '拍摄自我认同为 Taíno 的参与者', '记录年龄、认同年限与个人身份故事', '把肖像和文字并列呈现', '通过 National Geographic 发布'],
      sourceUrl: 'https://www.harukasakaguchi.com/i-am-taino', images: [],
      relations: [{ kind: '出版', label: 'National Geographic', detail: '2019-10-14' }]
    },
    {
      title: 'Dorf USA', cluster: 'Personal / America / road trip', period: '2016',
      summary: '以移民视角进行的美国公路摄影日记；后来被艺术家重新反思为自己早期对经典 Americana 视觉语言的模仿与寻找。',
      actions: ['进行约四个月美国公路旅行', '驾驶 1978 Ford Econoline 穿越美国', '拍摄地方景观和生活细节', '多年后重新编辑并公开反思这批照片的视觉传统与局限'],
      sourceUrl: 'https://www.harukasakaguchi.com/dorf', images: [], relations: []
    }
  ];

  const retainedInstitutionProjects = archive.projects.filter(project => !detailedProjects.some(detail => normalize(detail.title) === normalize(project.title)));
  archive.projectCoverage = '官网当前核心项目已建立完整动作档案 · 9 个项目 + ICP / 奖项制度节点';
  archive.imageCoverage = '项目来源已核实；图像仅在取得稳定可追溯直链后继续补，不用不明网络图替代';
  archive.note = '优先记录“艺术家实际做了什么”：被摄者如何参与、文字如何产生、地点怎样进入作品、不同媒介之间如何转换。商业委托与 reportage 不逐条混入核心项目档案。';
  archive.projects = [...detailedProjects, ...retainedInstitutionProjects];
  archive.awards = Array.from(new Set([
    ...archive.awards,
    'ICP Infinity Award 2026 · Documentary Practice and Photojournalism',
    'CENTER Socially Engaged Award 2025',
    'National Geographic Society Level I Storytelling Grant 2023',
    'Duke Archive of Documentary Arts Collection Award 2021',
    'Pictures of the Year International · POY78 finalist 2021 · COVID-19 Personal Expression',
    'Newswomen’s Club of New York Front Page Award 2020 · Photo Essay'
  ]));
  archive.exhibitions = Array.from(new Set([
    ...archive.exhibitions,
    'ICP · The Camps America Built · 2026',
    'Griffin Museum of Photography · Vision(ary): Raising Our Voices · 2026',
    'Fondazione Prada Osservatorio · Role Play · 2022',
    'Prada Aoyama · Role Play · 2022',
    'Photoville · Keeping Love Close · 2021',
    'Photoville · Asian Americans on Race and the Pandemic · 2020',
    'Photoville New York / Los Angeles · Typecast · 2019',
    'Nobel Peace Center · Ban the Bomb · 2017–2018',
    'Abrons Arts Center / Henry Street Settlement · The Original New Yorkers · 2017'
  ]));
  const extraSources = [
    { label: 'Artist official website', url: 'https://www.harukasakaguchi.com/' },
    { label: 'The Camps America Built', url: 'https://www.harukasakaguchi.com/the-camps-america-built' },
    { label: 'Loyal American', url: 'https://www.harukasakaguchi.com/loyal-american' },
    { label: '1945', url: 'https://www.harukasakaguchi.com/1945' },
    { label: 'I Will Not Stand Silent', url: 'https://www.harukasakaguchi.com/i-will-not-stand-silent' },
    { label: 'Typecast', url: 'https://www.harukasakaguchi.com/typecast' },
    { label: 'The Original New Yorkers', url: 'https://www.harukasakaguchi.com/the-original-new-yorkers' },
    { label: 'Quarantine Diary', url: 'https://www.harukasakaguchi.com/quarantine-diary' },
    { label: 'I Am Taíno', url: 'https://www.harukasakaguchi.com/i-am-taino' },
    { label: 'ICP · Infinity Award 2026', url: 'https://www.icp.org/news/2026-infinity-award-documentary-practice-and-photojournalism-haruka-sakaguchi' },
    { label: 'ICP · The Camps America Built', url: 'https://www.icp.org/exhibitions/icp-incubator-space-haruka-sakaguchi-the-camps-america-built' }
  ];
  for (const source of extraSources) if (!archive.sources.some(item => item.url === source.url)) archive.sources.push(source);
  artistArchives[artist.id] = archive;
}
