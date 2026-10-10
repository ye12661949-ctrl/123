import type { Artist } from './data';

// Source audit: research/updates/2026-10-10-broadening72.md
export const broadeningBatch72: Artist[] = [
  {
    id: 'willem-popelier', name: 'Willem Popelier', born: '1982', base: 'Netherlands',
    intro: '荷兰摄影艺术家，研究网络自我呈现、公共数据与图像挪用的伦理边界。Showroom Girls 源于一台商店展示电脑：两名女孩在一小时内拍摄约两百张自拍，遗留的姓名线索又让艺术家在 Hyves、Facebook 与 Twitter 找到地址、推文和学校成绩，并把这条合法但侵入性的检索链本身变成展览。',
    methods: ['网络拾得图像', '公开信息检索', '数据归档', '挪用摄影', '伦理争议作为展览结构'],
    subjects: ['online identity', 'privacy', 'social media', 'self-portraiture', 'public data', 'consent'],
    outputs: ['摄影装置', '拾得影像档案', '录像', '摄影书', '公共讨论'],
    institutions: ['Foam 3h', 'KABK', 'AKV St. Joost', 'Steenbergen Stipendium', 'Dutch Doc Award', 'Best Designed Books Netherlands'],
    achievements: ['Foam 3h exhibition Showroom Girls 2011', 'Steenbergen Stipendium public choice award 2008', 'Rejected Identities nominated for Dutch Doc Award 2010'],
    whyImportant: '关注理由：Popelier 很早就把“公开可访问”与“被同意用于艺术”之间的断裂暴露出来，适合研究平台数据、作者权与观看暴力。作品的批判对象也包括艺术家自己：若女孩的可识别资料被再次放大，项目可能复制它声称质疑的侵犯，因此匿名、通知和后续撤回机制比概念声明更关键。',
    projects: [{ year: '2010–2011', title: 'Showroom Girls', type: '以展示电脑遗留自拍和社交平台公开资料构成的网络身份调查装置', facts: ['艺术家在公共展示电脑中发现两名女孩留下的91张照片和2段影片，并推断她们约一小时拍摄了两百张图像。', '其中一人的姓名项链成为检索入口，艺术家在社交平台进一步找到推文、地址与学校成绩；过程未入侵受保护账户。', '材料于 2011 年 7 月 1 日至 8 月 31 日在 Foam 3h 展出，伦理与法律边界被明确列为作品的一部分。'], reading: '解读：检索步骤而非自拍本身构成作品的核心动作；每增加一条资料，观众都会感到“技术上公开”与“伦理上可用”的距离扩大。它的危险不只是窥私，而是以批判名义重新集中未成年人的可识别数据；如果展示没有实质保护，形式上的自我反省不足以抵消伤害。' }],
    images: [], sourceLabel: 'Foam — Willem Popelier: Showroom Girls', sourceUrl: 'https://www.foam.org/events/willem-popelier'
  },
  {
    id: 'breno-rotatori', name: 'Breno Rotatori', born: '1988', base: 'São Paulo, Brazil',
    intro: '巴西摄影师与影像作者，从日常环境和个人经验出发，以颜色、光线和直觉编辑把现实、记忆与虚构叠在一起。Habitar o tempo 同时呈现摄影系列 Bloco de Notas 与录像 Multiverso：前者像视觉日记保存经验被回忆重新着色的间隙，后者借用诗歌的隐喻与韵律建构新的影像叙事。',
    methods: ['直觉拍摄', '视觉日记', '色彩与光线塑形', '诗性蒙太奇', '摄影与录像并置'],
    subjects: ['memory', 'daily surroundings', 'fiction', 'personal experience', 'time', 'dream state'],
    outputs: ['摄影', '录像', '视觉日记', '展览序列', '杂志发表'],
    institutions: ['Foam 3h', 'Foam Magazine', 'Foam Paul Huf Award', 'Senac University', 'Porto Seguro Photography Award'],
    achievements: ['Foam 3h exhibition Habitar o tempo 2011', 'Foam Paul Huf Award selection 2010', 'Porto Seguro Photography Award Revelation category 2009'],
    whyImportant: '关注理由：Rotatori 把摄影与录像放进同一诗性语法，以节奏而非线性故事处理记忆。但“梦境、诗意、怀旧”也是最容易遮蔽制作判断的词；真正值得追踪的是色温、剪辑间隔和画面重复如何改变时间感，否则项目会停在可互换的抒情氛围。',
    projects: [{ year: '2011', title: 'Habitar o tempo', type: '由摄影视觉日记 Bloco de Notas 与诗性录像 Multiverso 构成的双媒介展览', facts: ['Bloco de Notas 将个人经历及其伴随感受组织为视觉日记，而非对某一瞬间的写实再现。', 'Multiverso 借鉴诗歌中的隐喻语言和节拍，从直觉性图像搜索发展出新的视觉叙事。', '展览于 2011 年 9 月 2 日至 10 月 26 日在 Foam 3h 举行。'], reading: '解读：摄影中的静止片段承担回忆的凝固，录像中的节奏则把它重新推入流动；两种媒介的差异比“梦幻”标签更有分析价值。若观看者只剩色彩与柔光印象，记忆如何被具体重构仍不够可见。' }],
    images: [], sourceLabel: 'Foam — Breno Rotatori: Habitar o tempo', sourceUrl: 'https://www.foam.org/events/breno-rotatori'
  },
  {
    id: 'sara-lena-maierhofer', name: 'Sara-Lena Maierhofer', born: '1982', base: 'Germany',
    intro: '德国摄影与媒体艺术家，以档案调查逼近身份、伪装和摄影真实性。Dear Clark 研究长期使用化名的诈骗者 Christian Karl Gerhartsreiter（“Clark Rockefeller”）；在对方面谈失败后，她改用拾得照片、自摄图像、录像和文件远距离重建其人格，并将材料分成“介绍、承诺、谎言”等章节。',
    methods: ['档案调查', '拾得照片', '文件与录像并置', '章节式叙事', '远距离人物研究'],
    subjects: ['fraud', 'aliases', 'constructed identity', 'photographic truth', 'deception', 'recognition'],
    outputs: ['摄影装置', '档案文件', '录像', '章节化展览', '研究型叙事'],
    institutions: ['Foam 3h', 'Bielefeld University of Applied Sciences', 'Gute Aussichten', 'Süddeutsche Zeitung'],
    achievements: ['Foam 3h exhibition Dear Clark 2011–2012', 'Gute Aussichten Award for New Photography 2011/2012'],
    whyImportant: '关注理由：Maierhofer 没有把无法接近主体视为项目失败，而是让距离、缺席与代理材料成为方法，从而把诈骗者的身份构造和摄影的证据幻觉放在同一结构中。局限是章节化叙事仍可能把复杂案件整理成过度顺滑的侦探故事；艺术家推断与可验证事实必须清楚分层。',
    projects: [{ year: '2011–2012', title: 'Dear Clark,', type: '以拾得照片、自摄影像、录像和文件调查化名诈骗者身份的档案装置', facts: ['项目对象是使用多个化名、曾以 Clark Rockefeller 身份生活的 Christian Karl Gerhartsreiter。', '在本人拒绝会面后，艺术家从远距离研究其外貌、习惯和动机，并将不同来源材料分为“介绍、承诺、谎言”等章节。', '作品于 2011 年 12 月 16 日至 2012 年 2 月 5 日在 Foam 3h 展出，明确把摄影自身的虚构性纳入主题。'], reading: '解读：主体的缺席迫使观众不断在照片、文书与作者叙述之间换证，材料之间的不一致正对应假身份的生成方式。作品若成立，依靠的不是最后“揭穿真相”，而是让每一种证据都暴露其可被编排的一面。' }],
    images: [], sourceLabel: 'Foam — Sara-Lena Maierhofer: Dear Clark,', sourceUrl: 'https://www.foam.org/events/sara-lena-maierhofer'
  },
  {
    id: 'mylou-oord', name: 'Mylou Oord', born: '1987', base: 'Netherlands',
    intro: '荷兰自学摄影师，在时尚、肖像与私人纪录之间工作。It would be so nice 用一年多时间持续拍摄朋友兼缪斯、时尚记者 Aynouk Tan，以粗粝、直觉和极近距离的关系模糊摆拍肖像与快照、委托工作与个人生活之间的界线。',
    methods: ['长期亲密肖像', '直觉快照', '摆拍与抓拍混合', '时尚语境内的私人纪录', '朋友协作'],
    subjects: ['friendship', 'fashion identity', 'muse relationship', 'creative scene', 'intimacy', 'generation'],
    outputs: ['肖像摄影', '时尚摄影', '纪实序列', '杂志发表', '报刊专栏图像'],
    institutions: ['Foam 3h', 'Amsterdam Fashion Week', 'Mediamatic', 'NRC Handelsblad', 'Vice', 'Blend'],
    achievements: ['Foam 3h exhibition It would be so nice 2010', 'Amsterdam Biennale at Mediamatic 2009', 'regular image contribution to Aynouk Tan column in NRC Handelsblad'],
    whyImportant: '关注理由：Oord 的价值不在于把商业时尚与艺术简单混合，而在于亲密关系让拍摄现场、委托和私人记忆难以分开。与此同时，“缪斯”结构可能把双向友谊再次变成单方作者品牌；被摄者对选择、发表和长期流通的参与程度需要被看见。',
    projects: [{ year: '2009–2010', title: 'It would be so nice', type: '持续一年拍摄朋友 Aynouk Tan、模糊时尚委托与私人快照的亲密肖像系列', facts: ['艺术家持续一年多拍摄朋友和缪斯 Aynouk Tan，人物关系成为整个系列的主线。', '照片在摆拍肖像与快照式观看之间移动，委托摄影和自由创作的差异也被故意弱化。', '系列于 2010 年 1 月 24 日至 3 月 23 日在 Foam 3h 展出。'], reading: '解读：距离近、反应快和不抛光的画面让观众像被允许进入两人的生活，但这种“自然”仍是关系与编辑共同制造的效果。脱离说明后，序列能否超越青年时尚圈的时代风格，取决于人物关系是否在动作和时间变化中真正留下痕迹。' }],
    images: [], sourceLabel: 'Foam — Mylou Oord: It would be so nice', sourceUrl: 'https://www.foam.org/events/mylou-oord'
  },
  {
    id: 'linus-bill', name: 'Linus Bill', born: '1982', base: 'Switzerland',
    intro: '瑞士艺术家，以无差别的日常拍摄、尺度变化和雕塑装置重组摄影世界。The Greatest Hits Vol. 1 没有直接占满 Foam 墙面，而是先制作一座 1:10 美术馆模型，再把约二十幅照片和作为“三维抽象绘画”的黏土雕塑全部按比例缩小，使展览本身成为可被观看和操纵的图像。',
    methods: ['日常图像采集', '尺度变换', '美术馆模型', '摄影与黏土雕塑并置', '抽象化重组'],
    subjects: ['scale', 'exhibition architecture', 'everyday images', 'form and colour', 'model worlds', 'photographic origin'],
    outputs: ['摄影', '模型装置', '黏土雕塑', '艺术家书', '空间实验'],
    institutions: ['Foam 3h', 'Zürich University of the Arts', 'Festival International de Photographie Hyères', 'Rollo Press', 'Foam Collection'],
    achievements: ['Foam 3h exhibition The Greatest Hits Vol. 1 2010', 'Grand Prix du Jury at Hyères photography festival 2009', 'included in Foam collection and 15 Years of Talent exhibition'],
    whyImportant: '关注理由：Bill 把“展览如何决定照片意义”压缩成一个可见的模型，尺寸不再是输出参数，而是概念和观看距离。其弱点也在模型的吸引力：如果所有异质照片都被统一成精巧小世界，内容差异可能让位于策展玩具感。',
    projects: [{ year: '2010', title: 'The Greatest Hits Vol. 1', type: '把美术馆及摄影、雕塑展品整体缩至 1:10 的模型化展览', facts: ['艺术家平时同时拍摄熟人、陌生人、内外空间、生物和物件，也混用快照与摆拍。', '为 Foam 制作 1:10 展览模型，约二十幅摄影与黏土雕塑均按比例缩小；雕塑被处理为三维抽象绘画。', '项目于 2010 年 3 月 26 日至 6 月 2 日在 Foam 3h 呈现。'], reading: '解读：观众先看见完整展览的“缩略图”，再意识到墙面、作品尺寸和动线都已被重新摄影化；机构空间由容器变成材料。概念真正进入了比例和制作，但模型若只有精致感，空间批评仍会被形式趣味吸收。' }],
    images: [], sourceLabel: 'Foam — Linus Bill: The Greatest Hits Vol. 1', sourceUrl: 'https://www.foam.org/events/linus-bill'
  },
  {
    id: 'simon-wald-lasowski', name: 'Simon Wald-Lasowski', born: '—', base: 'Netherlands',
    intro: '荷兰摄影师与艺术指导，以幽默、视觉双关和参与式策展重新安排观看权力。For your eyes only 围绕艺术史与宗教反复出现的“眼睛”展开，将全视之眼、恶眼、Medusa 与 Cyclops 转成让观众感到被作品回看的装置，并邀请艺术家、设计师和作家在展期内持续加入回应。',
    methods: ['视觉双关', '反向凝视装置', '参与式策展', '展期内累积作品', '摄影与文本协作'],
    subjects: ['the eye', 'being watched', 'mythology', 'religion', 'observer reversal', 'humour'],
    outputs: ['摄影', '装置', '文本回应', '动态群展结构', '编辑肖像'],
    institutions: ['Foam 3h', 'Foam Collection', 'Gerrit Rietveld Academie', 'W139', 'KesselsKramer', 'Subbacultcha'],
    achievements: ['Foam 3h exhibition For your eyes only 2010', 'work held in Foam Collection', 'Foam and Subbacultcha Music &Foam presentation'],
    whyImportant: '关注理由：Wald-Lasowski 不只把“眼睛”当可识别图案，而是通过观众被观看、他人回应不断加入的机制改变展览权力关系。这一机制若缺少具体视线、镜面或空间阻挡，也可能主要靠神话说明成立；因此应区分真正改变身体感受的装置与只是引用眼睛符号的作品。',
    projects: [{ year: '2010', title: 'For your eyes only', type: '围绕眼睛、监视与神话建立并在展期持续扩展的参与式装置', facts: ['项目重新解释艺术史和宗教中的眼睛主题，引用全视之眼、恶眼、Medusa 与 Cyclops。', '展览反转观众作为观察者的角色，使其感到被展品注视。', '艺术家在 2010 年 6 月 4 日至 8 月 25 日展期中邀请艺术家、设计师和作家回应，并依次加入装置或文字。'], reading: '解读：作品将凝视从图像题材转为展览行为——观看者同时成为被看者，展览也不是开幕时即固定完成。最有效的部分应能在没有神话标签时仍让身体感到视线压力；若效果只来自“眼睛”图案，反转机制就会退成插图式符号。' }],
    images: [], sourceLabel: 'Foam — Simon Wald-Lasowski: For your eyes only', sourceUrl: 'https://www.foam.org/events/simon-wald-lasowski'
  }
];
