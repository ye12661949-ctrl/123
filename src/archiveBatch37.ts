import type { ArtistArchive, ArchiveImage, ArchiveRelation } from './archiveData';

const img = (url: string, title: string, credit: string, sourceUrl: string, sourceLabel: string): ArchiveImage => ({ url, title, credit, sourceUrl, sourceLabel });
const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

export const archiveBatch37: Record<string, ArtistArchive> = {
  'sophie-calle': {
    artistId: 'sophie-calle',
    projectCoverage: '8 个规则型 / 跟踪 / 委托项目已建立深档案 · 1979–2007',
    imageCoverage: '3 / 8 项目已有代表图像',
    note: '按“先制定规则，再让现实填充规则”的方法整理。重点不是把 Calle 概括成叙事摄影，而是看她怎样通过跟踪、雇佣、委托、调查、重复讲述和文本—图像并置，把私人生活转成可执行的作品结构。',
    projects: [
      {
        title: 'The Sleepers', cluster: 'invitation / time rule / serial portrait', period: '1979',
        summary: 'Calle 邀请陌生人、朋友与朋友的朋友轮流到自己的床上睡觉，以连续的时间规则拍摄并记录他们。床不是背景，而是把陌生人组织进同一套时间和行为协议的装置。',
        actions: ['邀请参与者进入私人卧室', '安排轮班式睡眠时段', '固定观察并拍摄睡眠状态', '记录参与者身份、时间与行为', '把照片与文字说明组合成连续档案'],
        sourceUrl: 'https://www.moma.org/collection/artists/6655', images: [], relations: []
      },
      {
        title: 'Suite Vénitienne', cluster: 'following / disguise / diary', period: '1980',
        summary: '从巴黎跟踪一名男子到威尼斯，通过假发、帽子等伪装、电话查找旅馆、向当地人询问等方式维持尾随，并把失败、等待和偏离都记录在作品中。',
        actions: ['选择陌生人作为行动触发点', '从巴黎追踪到威尼斯', '使用伪装避免被认出', '打电话 / 询问 / 在街道搜索其行踪', '拍摄远距离黑白照片', '以日期、时间和第一人称日记与照片并置'],
        sourceUrl: 'https://www.moma.org/collection/artists/6655', images: [],
        relations: [rel('出版', 'Suite Vénitienne', 'artist book / 1983 publication context')]
      },
      {
        title: 'The Hotel', cluster: 'chambermaid / surveillance / trace reading', period: '1981',
        summary: 'Calle 在威尼斯一家酒店担任房务员三周，利用工作权限进入十二个房间，拍摄未在场住客留下的衣物、床铺、垃圾、信件和私人物件，同时做详细笔记。',
        actions: ['以房务员身份进入客房', '在住客不在场时查看房间', '拍摄物件与空间状态', '阅读 / 记录部分文字痕迹', '按房间与日期建立连续笔记', '将照片和观察文本组织成作品单元'],
        sourceUrl: 'https://www.metmuseum.org/art/collection/search/284364',
        images: [img('https://wahooart.com/media/artworks/images/full/e3/30/e3302a075bd0419296364fd721d83449.jpg', 'The Hotel, Room 47', '© Sophie Calle', 'https://www.metmuseum.org/art/collection/search/284364', 'The Met / project documentation')],
        relations: [rel('收藏', 'The Metropolitan Museum of Art', 'The Hotel, Room 12 / 1983 work')]
      },
      {
        title: 'The Address Book', cluster: 'found object / indirect portrait / interviews', period: '1983',
        summary: '捡到一本通讯录后，Calle 复制其中联系人信息，再逐个联络这些人，请他们描述通讯录主人。作品由“本人缺席、他人描述其存在”的方法组成。',
        actions: ['拾得陌生人的通讯录', '复制联系人资料', '逐一联络通讯录中的人', '进行关于主人的访谈', '把不同人口述编辑成间接肖像', '在 Libération 连载后再以书籍形式整理'],
        sourceUrl: 'https://www.walkerart.org/collections/artwork/the-address-book/',
        images: [img('https://walker-col.imgix.net/wac_43774.tif?fit=fit&fm=jpg&h=1800&w=1800', 'The Address Book', '© Sophie Calle', 'https://www.walkerart.org/collections/artwork/the-address-book/', 'Walker Art Center')],
        relations: [rel('出版', 'Libération / The Address Book', '1983 serial; later artist-book editions')]
      },
      {
        title: 'The Blind', cluster: 'delegated description / image-text mismatch', period: '1986',
        summary: '邀请失明者描述“美是什么”，再把他们的文字、肖像与对应物件 / 场景照片并置，使语言、想象和视觉再现无法完全重合。',
        actions: ['访问失明参与者', '询问对“美”的定义', '拍摄参与者肖像', '根据回答寻找 / 制作对应图像', '将肖像、文本和物象组成三段结构'],
        sourceUrl: 'https://www.perrotin.com/artists/Sophie_Calle/1', images: [], relations: []
      },
      {
        title: 'Exquisite Pain', cluster: 'breakup / countdown / repetition', period: '1984–2003',
        summary: '把一次感情破裂前的旅行日记、照片与倒计时组织成前半部；后半部则反复讲述自己的痛苦，并把他人讲述的痛苦故事并置，直到自己的叙述逐渐缩短。',
        actions: ['保存旅行照片与私人材料', '建立“距离痛苦还有多少天”的倒计时', '反复书写 / 讲述同一事件', '邀请他人讲述最痛苦经历', '把两套叙事并排', '通过重复让文本长度与强度发生变化'],
        sourceUrl: 'https://www.paulacoopergallery.com/exhibitions/sophie-calle4',
        images: [img('https://static-assets.artlogic.net/w_1800%2Ch_1000%2Cc_limit/exhibit-e/5f5a43b313a837455d8b4567/da5236d2ba9b8b49d10398943b07abac.jpeg', 'Exquisite Pain (Day 5)', '© Sophie Calle', 'https://www.paulacoopergallery.com/exhibitions/sophie-calle4', 'Paula Cooper Gallery')],
        relations: [rel('出版', 'Douleur Exquise / Exquisite Pain', '2003–2004')]
      },
      {
        title: 'Take Care of Yourself', cluster: 'delegation / breakup email / multi-professional reading', period: '2007',
        summary: '收到以“Take care of yourself”结尾的分手邮件后，Calle 把邮件交给 107 位女性，按她们各自的职业与技能来分析、翻译、表演或解释。私人邮件被拆成一套大型委托系统。',
        actions: ['把私人分手邮件设定为共同输入材料', '选择 107 位不同职业 / 技能的女性', '分别委托法律、语言、舞蹈、音乐、心理等解读', '拍摄 / 录像参与者的回应', '收集文本、表演、声音与影像结果', '将大量回应组织为墙面与多屏装置'],
        sourceUrl: 'https://phi.ca/en/events/sophie-calle-take-care-of-yourself/', images: [],
        relations: [rel('展览', 'French Pavilion — Venice Biennale', '2007')]
      },
      {
        title: 'True Stories', cluster: 'autobiography / staged evidence / short text', period: '1988–ongoing',
        summary: '以极短第一人称文本搭配照片或物件，让“真实经历、表演、再叙述”之间保持不确定。很多条目后来不断新增、重排和再出版。',
        actions: ['选择私人经历', '把事件压缩成短文本', '搭配既有照片 / 新拍图像 / 物件', '在不同出版与展览中重新排序'],
        sourceUrl: 'https://www.sophiecalle.com/', images: [], relations: []
      }
    ],
    awards: ['Hasselblad Award 2010'],
    exhibitions: ['French Pavilion — Venice Biennale 2007', 'Talking to Strangers — Whitechapel Gallery 2009'],
    sources: [
      { label: 'MoMA — Sophie Calle', url: 'https://www.moma.org/collection/artists/6655' },
      { label: 'The Met — The Hotel', url: 'https://www.metmuseum.org/art/collection/search/284364' },
      { label: 'Paula Cooper Gallery', url: 'https://www.paulacoopergallery.com/artists/sophie-calle' },
      { label: 'PHI — Take Care of Yourself', url: 'https://phi.ca/en/events/sophie-calle-take-care-of-yourself/' }
    ]
  },

  'laia-abril': {
    artistId: 'laia-abril',
    projectCoverage: '10 个长期研究项目 / 章节已建立深档案 · 2010–2026',
    imageCoverage: '1 / 10 项目已有代表图像',
    note: '不把 Abril 只归纳成“女性议题摄影”。按她真正的研究方法拆：确定问题 → 建立历史 / 当代证据库 → 采访与案例 → 决定哪些内容用照片、声音、物件、文本或书 → 再转成展览系统。',
    projects: [
      {
        title: 'Thinspiration', cluster: 'online communities / eating disorders / appropriation', period: '2010–2012',
        summary: '研究网络中与厌食症相关的自我影像和“thinspiration”文化，把本来在社交平台中流通的身体图像重新组织成可被批判观看的材料。',
        actions: ['追踪线上社群与图像语言', '保存和分类网络图像', '研究自我拍摄与身体规训', '以编辑 / 出版方式重新组织材料'],
        sourceUrl: 'https://www.laiaabril.com/project/thinspiration/', images: [], relations: [rel('出版', 'Thinspiration Fanzine', 'self-published 2012')]
      },
      {
        title: 'The Epilogue', cluster: 'eating disorders / family archive / aftermath', period: '2012–2014',
        summary: '从一位因饮食障碍去世的年轻女性及其家人出发，把家庭相册、访谈、日常物件和缺席后的生活组织为一本关于“死亡之后”的研究型摄影书。',
        actions: ['与家庭长期接触', '使用家庭档案照片', '拍摄遗留物与生活空间', '记录家庭成员证词', '将不同材料编排为书籍叙事'],
        sourceUrl: 'https://www.laiaabril.com/project/the-epilogue/', images: [], relations: [rel('出版', 'The Epilogue', 'Dewi Lewis 2014')]
      },
      {
        title: 'Menstruation Myths', cluster: 'ritual / taboo / field research', period: '2016–2023',
        summary: '研究不同地域围绕月经形成的禁忌、仪式和制度性限制，通过田野调查、肖像、物件与文本建立跨文化对照。',
        actions: ['搜集历史与当代月经禁忌资料', '进行地区性田野调查', '拍摄人物 / 场所 / 相关物件', '记录口述和制度规则', '将案例按主题并列'],
        sourceUrl: 'https://www.laiaabril.com/project/menstruation-myths/', images: [], relations: [rel('出版', 'Menstruation Myths Portfolio Box', 'Setanta 2023')]
      },
      {
        title: 'On Abortion', cluster: 'law / medical history / evidence system', period: '2016–',
        summary: 'A History of Misogyny 第一章。研究无法获得安全、合法、免费堕胎所产生的伤害，把历史器具、医疗案例、法律文本、当代证词、摄影与音频证据编织成一个跨时间证据系统。',
        actions: ['研究不同国家法律与历史案例', '寻找历史堕胎器具和自制方法', '采访当事人与专家', '拍摄物件、空间和概念性场景', '收集文本与音频证词', '把证据转成摄影书与空间装置'],
        sourceUrl: 'https://www.laiaabril.com/project/on-abortion/',
        images: [img('https://media.internazionale.it/images/2016/09/05/128774-md.jpg', 'On Abortion — exhibition view', '© Laia Abril / exhibition documentation', 'https://www.laiaabril.com/project/on-abortion/', 'Laia Abril / Internazionale')],
        relations: [rel('展览', 'Les Rencontres d’Arles', '2016'), rel('出版', 'On Abortion', 'Dewi Lewis 2018'), rel('奖项', 'Paris Photo–Aperture PhotoBook of the Year', 'Winner 2018'), rel('奖项', 'Deutsche Börse Photography Prize', 'Shortlisted 2019')]
      },
      {
        title: 'On Rape', cluster: 'institutional violence / law / conceptual portrait', period: '2016–2026',
        summary: '第二章从“受害者身体”转向法律、司法、家庭与社会制度，追踪强奸文化如何被法律条文、证据标准、婚姻制度和日常防卫习惯维持。',
        actions: ['从具体司法案件进入研究', '比较不同国家与历史时期的法律制度', '搜集证词与制度文本', '制作概念肖像而非直接再现创伤', '加入音频与文字装置', '将受害者缺席转化为对制度的视觉指认'],
        sourceUrl: 'https://www.laiaabril.com/project/on-rape/', images: [],
        relations: [rel('出版', 'On Rape', 'Dewi Lewis 2022'), rel('展览', 'FOAM, Amsterdam', '2021'), rel('展览', 'C/O Berlin', '2024'), rel('展览', 'Museo Reina Sofía', '2026')]
      },
      {
        title: 'On Mass Hysteria', cluster: 'mass psychogenic illness / gender / audiovisual research', period: '2016–2025',
        summary: '从尼泊尔学校女孩集体昏厥的报道出发，追踪历史与全球范围内主要发生于女孩和女性群体的 mass psychogenic illness，并把医学解释不足与社会压力并置。',
        actions: ['从新闻报道建立初始案例', '检索跨时代群体性症状记录', '比较医学、宗教与社会解释', '访问地点 / 相关群体', '组织影像、声音、文字和案例档案', '制作摄影书与视频版本'],
        sourceUrl: 'https://www.laiaabril.com/project/on-mass-hysteria-copy/', images: [],
        relations: [rel('出版', 'On Mass Hysteria', 'Dewi Lewis + Delpire &Co, 2024'), rel('展览', 'Photo Elysée', '2023'), rel('展览', 'Le Bal, Paris', '2025')]
      },
      {
        title: 'Feminicides', cluster: 'gendered killing / statistics / memorial research', period: '2010s–',
        summary: '围绕针对女性的系统性杀害建立案例、地点和制度环境的研究，避免只把事件呈现为单个犯罪，而是将重复结构并列。',
        actions: ['建立案件与统计资料库', '追踪地点和制度环境', '结合文本、档案与摄影', '通过重复和比较显示结构性暴力'],
        sourceUrl: 'https://www.laiaabril.com/project/feminicides/', images: [], relations: []
      },
      {
        title: 'The Right to Choose', cluster: 'reproductive rights / legal comparison', period: '2010s–',
        summary: '通过不同法律与社会情境中的生育选择案例，把“个人选择”放回制度允许与禁止的具体条件中。',
        actions: ['比较法律环境', '采集个案与证词', '摄影与文本并置', '以研究结构替代单一新闻事件'],
        sourceUrl: 'https://www.laiaabril.com/project/the-right-to-choose/', images: [], relations: []
      },
      {
        title: 'Endometriosis', cluster: 'medical invisibility / diagnosis / chronic pain', period: '2020s–',
        summary: '把子宫内膜异位症作为医学中长期被低估、误诊和延迟诊断的问题，继续 Abril 对“不可见身体经验如何被制度处理”的研究。',
        actions: ['医学与病史研究', '患者经验与诊断路径收集', '寻找可视化和不可视化之间的矛盾', '把医学文本、身体经验和视觉材料并置'],
        sourceUrl: 'https://www.laiaabril.com/project/', images: [], relations: []
      },
      {
        title: 'Luto', cluster: 'mourning / memory / new research', period: '2025–2026',
        summary: '近期项目继续把个人与社会层面的哀悼经验转成研究型视觉结构；目前处于持续展览和资料扩展阶段。',
        actions: ['围绕哀悼建立材料档案', '结合摄影、文本与空间', '根据展览语境继续扩展项目'],
        sourceUrl: 'https://www.laiaabril.com/project/', images: [], relations: []
      }
    ],
    awards: ['Foam Paul Huf Award 2020', 'Spanish National Photography Award 2023', 'Paris Photo–Aperture PhotoBook of the Year 2018'],
    exhibitions: ['Les Rencontres d’Arles — On Abortion 2016', 'FOAM — On Rape 2021', 'Photo Elysée — On Mass Hysteria 2023', 'Centre Pompidou — On Abortion 2024', 'Le Bal — On Mass Hysteria 2025'],
    sources: [
      { label: 'Laia Abril — Projects', url: 'https://www.laiaabril.com/project/' },
      { label: 'On Abortion', url: 'https://www.laiaabril.com/project/on-abortion/' },
      { label: 'On Rape', url: 'https://www.laiaabril.com/project/on-rape/' },
      { label: 'Books', url: 'https://www.laiaabril.com/book/' }
    ]
  },

  'carmen-winant': {
    artistId: 'carmen-winant',
    projectCoverage: '7 个 found-image / feminist archive 项目节点已建立深档案 · 2010s–现在',
    imageCoverage: '0 / 7 项目已有代表图像',
    note: 'Winant 的关键不是“收集很多旧照片”，而是把被丢弃、退藏、廉价流通的纸本图像重新分类、贴墙、拆书和编排，让女性身体与劳动如何被视觉文化记录 / 忽略本身成为作品。',
    projects: [
      {
        title: 'My Birth', cluster: 'found images / childbirth / wall installation', period: '2018',
        summary: '由 3,059 张 found papers 与 photographic prints 构成。她从旧书、杂志、妇女健康出版物、旧书店、garage / estate sales 以及助产士和女性健康工作者网络中收集分娩图像，再把数千张纸本材料直接贴到墙面。',
        actions: ['从旧书、杂志、健康手册与二手市场收集纸本图像', '联系女性健康工作者和助产士获取材料', '在工作室按类别先行整理', '从书页中拆取 / 保留纸本图像', '使用胶带直接把数千张图像安装到墙面', '让图像之间形成非单一路径的密集阅读'],
        sourceUrl: 'https://www.moma.org/collection/works/222741', images: [],
        relations: [rel('展览', 'Being: New Photography — MoMA', '2018'), rel('收藏', 'MoMA', '3,059 found papers and photographic prints with tape')]
      },
      {
        title: 'Looking Forward to Being Attacked', cluster: 'self-defense / found archive / feminist pedagogy', period: '2018',
        summary: '围绕女性自卫训练和身体防护图像建立档案，把通常被当作说明图、训练资料或边缘出版物的影像转成关于恐惧、身体自治与训练的装置。',
        actions: ['搜集女性自卫与训练相关出版物', '按动作 / 姿势 / 身体接触方式分类', '拆取和复制既有图像', '以密集墙面或序列重新编排'],
        sourceUrl: 'https://www.sculpture-center.org/exhibitions/3680/looking-forward-to-being-attacked', images: [], relations: [rel('展览', 'SculptureCenter, New York', '2018')]
      },
      {
        title: 'Arrangements', cluster: 'archive editing / book dismantling / re-sequencing', period: '2010s',
        summary: '将既有出版物中的图像从原有说明和版面中解放出来，通过拆页、聚类与重新排列制造新的身体和政治关系。',
        actions: ['采购 / 收集旧出版物', '拆解书页', '按形式和主题建立临时分类', '把原本不相邻的图像并置', '通过墙面 / 书籍重新 sequence'],
        sourceUrl: 'https://carmenwinant.com/', images: [], relations: []
      },
      {
        title: 'Notes on Fundamental Joy', cluster: 'lesbian feminist archive / community / publication', period: '2019',
        summary: '从 Oregon Women’s Land Army 等女性 / 女同性恋社群档案进入，把劳动、共同生活与身体经验重新组织成摄影书和展览。',
        actions: ['进入社群 / 历史档案', '选择未被主流摄影史强调的日常图像', '保留档案照片的纸本与年代差异', '将私人 / 社群影像重新编成公共叙事'],
        sourceUrl: 'https://carmenwinant.com/', images: [], relations: []
      },
      {
        title: 'Instructional Photography / feminist manuals', cluster: 'how-to image / body / pedagogy', period: 'ongoing',
        summary: '持续关注“教人如何做某件事”的摄影：生育、自卫、身体训练、健康教育等。图像既传递知识，也规定什么身体可以被看见、怎样被摆放。',
        actions: ['搜集 instructional manuals 与健康教育材料', '按身体动作分类', '比较说明图的标准姿势', '把教育图像从功能语境移入艺术展示'],
        sourceUrl: 'https://carmenwinant.com/', images: [], relations: []
      },
      {
        title: 'The Last Safe Abortion', cluster: 'abortion care / clinic archive / reproductive labor', period: '2020s',
        summary: '继续把生殖健康与女性照护的现实劳动纳入作品，不仅呈现政策争议，而是聚焦诊所、照护者和具体工作过程留下的视觉材料。',
        actions: ['与生殖健康 / 照护网络建立联系', '搜集机构与私人视觉材料', '研究图像如何记录照护劳动', '以安装和出版重新编排'],
        sourceUrl: 'https://carmenwinant.com/', images: [], relations: []
      },
      {
        title: 'Found-image installations as working method', cluster: 'collecting / sorting / taping / spatial editing', period: 'ongoing',
        summary: '跨项目的核心工作方法：她把编辑工作直接暴露在展墙上。分类不是最终答案，安装时会故意让不同类别互相碰撞，使观看者在密集图像中自己建立关系。',
        actions: ['长期收集被淘汰的纸本图像', '建立临时工作室分类', '反复移动和重新分组', '不隐藏胶带、纸边和来源差异', '根据每个展厅重新编辑墙面'],
        sourceUrl: 'https://www.moma.org/collection/works/222741', images: [], relations: []
      }
    ],
    awards: [],
    exhibitions: ['Being: New Photography — MoMA 2018', 'Looking Forward to Being Attacked — SculptureCenter 2018'],
    sources: [
      { label: 'MoMA — My Birth', url: 'https://www.moma.org/collection/works/222741' },
      { label: 'Carmen Winant', url: 'https://carmenwinant.com/' },
      { label: 'SculptureCenter', url: 'https://www.sculpture-center.org/exhibitions/3680/looking-forward-to-being-attacked' }
    ]
  },

  'joachim-schmid': {
    artistId: 'joachim-schmid',
    projectCoverage: '8 个 vernacular / found photography 项目节点已建立深档案 · 1982–2016',
    imageCoverage: '0 / 8 项目已有代表图像',
    note: 'Schmid 的工作核心不是“挪用老照片”，而是把摄影社会本身当作素材库：街上丢弃的照片、照相馆废片、网络上传、快照类型、印刷错误都进入分类、再编辑与出版系统。',
    projects: [
      {
        title: 'Bilder von der Straße / Pictures from the Street', cluster: 'found photographs / street archive / chronology', period: '1982–2012',
        summary: '长期在街道上捡拾被丢弃或遗失的私人照片，并按发现顺序编号归档。作品把偶然拾得、损坏、脚印、撕裂和背面信息都保留下来。',
        actions: ['在公共空间持续捡拾照片', '记录发现时间 / 地点或编号', '不修复照片上的损伤', '保留正反面和物理痕迹', '把长期积累编成系列 / 书籍'],
        sourceUrl: 'https://schmid.wordpress.com/works/', images: [], relations: []
      },
      {
        title: 'Archiv', cluster: 'studio waste / rejected portraits / classification', period: '1986–1999',
        summary: '从照相馆与商业摄影流程产生的废片、失败肖像和被抛弃图像中建立档案，关注“摄影系统认为不值得保留的图像”如何反而暴露标准化规则。',
        actions: ['获取照相馆 / 商业摄影废弃材料', '按失败类型和视觉特征分类', '把原本无价值的图像转成系列', '通过重复显示摄影行业的规范'],
        sourceUrl: 'https://schmid.wordpress.com/works/', images: [], relations: []
      },
      {
        title: 'Photographic Garbage Survey Project', cluster: 'urban survey / discarded photographs / mapping', period: '1996–1997',
        summary: '将“街上被丢弃的照片”从偶然收藏扩展成调查项目，通过不同城市的拾得情况观察照片如何进入垃圾与公共空间。',
        actions: ['设定城市调查范围', '系统收集被遗弃照片', '记录数量与位置', '比较不同城市中的摄影垃圾', '以报告 / 出版形式组织结果'],
        sourceUrl: 'https://schmid.wordpress.com/works/artistsbooks/', images: [], relations: []
      },
      {
        title: 'Statutes / Statics', cluster: 'printing error / mechanical image / abstraction', period: '1995–2003',
        summary: '关注印刷、复制和机械传输中产生的错误，把原本应被排除的故障纹理和随机图像当作作品。',
        actions: ['收集印刷或复制故障图像', '选择非人为构图的纹理', '重新放大 / 出版', '把技术错误从废品转为视觉材料'],
        sourceUrl: 'https://schmid.wordpress.com/works/artistsbooks/', images: [], relations: []
      },
      {
        title: 'Netzerscheinungen', cluster: 'internet vernacular / early web / typology', period: '2006–2007',
        summary: '转向互联网中大量用户上传的日常图像，对人物、物件、地点、商品和梦想等网络影像进行类型化编辑。',
        actions: ['在线搜集用户生成图像', '按人物 / 物件 / 地点等类别分类', '脱离原始网页语境保存', '以书籍序列重排'],
        sourceUrl: 'https://schmid.wordpress.com/works/artistsbooks/', images: [], relations: []
      },
      {
        title: 'Other People’s Photographs', cluster: 'Flickr / taxonomy / print-on-demand', period: '2008–2011',
        summary: '从网络照片平台的大规模公共图像池中选择图像，制作 96 本主题册，共 3,072 张照片；每一册围绕一种反复出现的日常摄影类型，如机场、食物、狗、影子、镜子自拍等。',
        actions: ['从网络平台搜集海量用户照片', '识别重复出现的摄影习惯', '建立 96 个主题类别', '每类选择并 sequence 图像', '使用 print-on-demand 生产 96 本书', '把整套书作为一个分类系统展示'],
        sourceUrl: 'https://otherpeoplesphotographs.wordpress.com/', images: [],
        relations: [rel('出版', 'Other People’s Photographs', '96 print-on-demand books, 2008–2011')]
      },
      {
        title: 'The Joachim Schmid Collection at the Pitt Rivers Museum', cluster: 'museum taxonomy / vernacular image / institutional mirror', period: '2000',
        summary: '借用博物馆“收藏—分类—命名”的权威结构来处理日常摄影，使私人快照与民族志 / 博物馆分类逻辑发生碰撞。',
        actions: ['选择 vernacular photographs', '模拟 / 借用博物馆式分类', '以收藏命名制造制度语境', '让日常影像与机构分类学互相解释'],
        sourceUrl: 'https://schmid.wordpress.com/works/artistsbooks/', images: [], relations: []
      },
      {
        title: 'The Artist’s Model', cluster: 'vernacular repetition / found pose / book', period: '2016',
        summary: '延续对摄影中重复姿势与类型的研究，通过现成照片构成一个关于“模特姿态如何在日常摄影中被复制”的小型图像系统。',
        actions: ['搜集现成照片', '寻找重复动作与姿势', '按形式相似性配对 / 排序', '以艺术家书固定 sequence'],
        sourceUrl: 'https://schmid.wordpress.com/works/artistsbooks/', images: [], relations: []
      }
    ],
    awards: [],
    exhibitions: [],
    sources: [
      { label: 'Joachim Schmid — Works', url: 'https://schmid.wordpress.com/works/' },
      { label: 'Artist’s Books', url: 'https://schmid.wordpress.com/works/artistsbooks/' },
      { label: 'Other People’s Photographs', url: 'https://otherpeoplesphotographs.wordpress.com/' }
    ]
  }
};