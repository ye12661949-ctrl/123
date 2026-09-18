import { useState } from 'react';
import type { Artist } from './data';
import { artists } from './data';
import './lineages.css';

type Node = {
  id: string; artistId: string; name: string; year: number; period: string;
  title: string; action: string; material: string; rule: string;
  question: string; result: string; source: string;
};
type Topic = { id: string; title: string; subtitle: string; nodes: Node[]; note: string };

const topics: Topic[] = [
  {
    id: 'duration',
    title: '时间与重复行动',
    subtitle: '都在重复，但“日期、计数、打卡、档案”其实是四套完全不同的时间机器。',
    nodes: [
      {
        id: 'opalka-counting', artistId: 'roman-opalka', name: 'Roman Opałka', year: 1965, period: '1965–2011',
        title: 'OPALKA 1965 / 1–∞',
        action: '从数字 1 开始连续书写，每张新画布承接上一张；同时留下计数声音和固定条件下的正面肖像。',
        material: '画布、丙烯、声音录音、摄影', rule: '数字只能向前，规则持续到生命结束',
        question: '如何把不可逆的生命时间变成连续可见的规则', result: '终身绘画系列 + 声音 + 自画像系统',
        source: 'https://lesoeuvres.pinaultcollection.com/en/artwork/opalka-19651'
      },
      {
        id: 'kawara-today', artistId: 'on-kawara', name: '河原温', year: 1966, period: '1966 起',
        title: 'Today / Date Paintings', action: '手绘当天日期，保留当天报纸。',
        material: '画布、颜料、纸盒、报纸', rule: '以制作当天为单位', question: '日期如何成为存在的痕迹',
        result: '日期绘画及其保存盒', source: 'https://www.moma.org/collection/works/79067'
      },
      {
        id: 'hsieh-clock', artistId: 'tehching-hsieh', name: '谢德庆', year: 1980, period: '1980–1981',
        title: 'Time Clock Piece', action: '按每小时一次的规则打卡并记录影像，持续一年。',
        material: '打卡钟、卡片、电影、声明', rule: '每小时一次，持续一年', question: '生活被规则切分后如何经历时间',
        result: '行为及卡片、电影等档案', source: 'https://artsandculture.google.com/story/tehching-hsieh-one-year-performance-1980-1981-ullens-center-for-contemporary-art/DgUxBdmGZBUA8A?hl=en'
      },
      {
        id: 'darboven-kulturgeschichte', artistId: 'hanne-darboven', name: 'Hanne Darboven', year: 1980, period: '1980–1983',
        title: 'Kulturgeschichte 1880–1983',
        action: '汇集明信片、杂志封面、照片与文字，把 1,590 张装框纸本和 19 件物件组织成密集墙面档案。',
        material: '纸本、照片、印刷品、文字、物件', rule: '通过日期、数字和网格化编排组织长时段材料',
        question: '历史时间如何被书写、分类和展示结构重新组织', result: '大型墙面档案装置',
        source: 'https://www.diaart.org/exhibition/exhibitions-projects/hanne-darboven-kulturgeschichte-18801983-exhibition'
      },
      {
        id: 'kawara-million', artistId: 'on-kawara', name: '河原温', year: 1999, period: '1999 馆藏书籍版本',
        title: 'One Million Years', action: '将年份排列成两卷书，部分内容被公开朗读。',
        material: '书籍、文字、声音', rule: '连续排列过去与未来的年份', question: '个人生命面对超长时间尺度',
        result: '艺术家书与朗读', source: 'https://www.moma.org/collection/works/88213'
      }
    ],
    note: '按作品制作或版本年份排列。这里把 Opałka、河原温、谢德庆与 Darboven 放在一起比较“规则怎样生产时间”，不据此宣称彼此存在直接影响。'
  },
  {
    id: 'self',
    title: '自拍、角色与身份模型',
    subtitle: '从社会角色、电影类型、艺术史原作，到社群身份与 Instagram 人格：同一个身体怎样被当成不同的图像工具？',
    nodes: [
      {
        id: 'cahun-training', artistId: 'claude-cahun', name: 'Claude Cahun', year: 1927, period: '1927',
        title: 'I am in training, don’t kiss me', action: '化妆并安排自己的装扮与姿态。',
        material: '化妆、服装、摄影', rule: '改变自我形象的呈现', question: '身份与性别如何被表演',
        result: '自画像', source: 'https://www.npg.org.uk/collections/search/portrait/mw308918/Gillian-Wearing-Me-as-Cahun-Holding-a-Mask-of-My-Face'
      },
      {
        id: 'wilson-models', artistId: 'martha-wilson', name: 'Martha Wilson', year: 1974, period: '1974',
        title: 'A Portfolio of Models',
        action: '本人扮演六种被社会提供给女性的身份模型，并为每个角色配写文字。',
        material: '服装、化妆、黑白摄影、文字面板', rule: '逐一试穿并命名六种社会角色',
        question: '女性身份有多少部分来自预先存在的社会模板', result: '六组摄影 + 文本',
        source: 'https://www.moma.org/collection/works/165440'
      },
      {
        id: 'sherman-stills', artistId: 'cindy-sherman', name: 'Cindy Sherman', year: 1977, period: '1977–1980',
        title: 'Untitled Film Stills', action: '扮演熟悉的女性电影类型，制造看似剧照的摄影。',
        material: '服装、场景、黑白摄影', rule: '制造电影类型角色而非复刻某一真实人物', question: '大众影像中的女性形象',
        result: '摆拍的黑白照片系列', source: 'https://www.moma.org/collection/works/56618'
      },
      {
        id: 'lee-projects', artistId: 'nikki-s-lee', name: 'Nikki S. Lee', year: 1997, period: '1997–2001',
        title: 'Projects',
        action: '进入不同社群生活数周或数月，学习外观和行为，再让社群成员或路人替她按下快门。',
        material: '服装、社群参与、傻瓜相机、快照', rule: '每个项目先进入一个社群，再从内部制造日常快照',
        question: '身份是个人属性，还是与周围群体共同生产的表面', result: '社群快照系列',
        source: 'https://www.metmuseum.org/art/collection/search/284362'
      },
      {
        id: 'morimura-sherman', artistId: 'yasumasa-morimura', name: 'Yasumasa Morimura', year: 1998, period: '1998',
        title: 'To My Little Sister / For Cindy Sherman',
        action: '把自身装扮放进对 Cindy Sherman 的明确回应中；作品标题直接点名对方。',
        material: '艺术家原作参照、化妆、服装、摄影', rule: '以具体艺术家和既有图像作为回应对象',
        question: '自画像如何成为艺术家之间的公开对话', result: '引用并偏移前作的摄影自画像',
        source: 'https://www.luhringaugustine.com/artists/yasumasa-morimura/artworks/actresses?view=slider'
      },
      {
        id: 'fosso-spirits', artistId: 'samuel-fosso', name: 'Samuel Fosso', year: 2008, period: '2008',
        title: 'African Spirits', action: '参照非洲及非洲离散群体重要人物的肖像，重建服装与外形。',
        material: '历史肖像、服装、黑白摄影', rule: '以可识别的历史人物肖像为模板', question: '黑人历史与政治文化记忆',
        result: '大尺幅自我扮演肖像', source: 'https://www.moma.org/collection/works/214684'
      },
      {
        id: 'wearing-cahun', artistId: 'gillian-wearing', name: 'Gillian Wearing', year: 2012, period: '2012',
        title: 'Me as Cahun Holding a Mask of My Face', action: '重构 Cahun 的自画像，同时加入自己面孔的面具。',
        material: '原作参照、装扮、面具、银盐照片', rule: '保留可辨认的原作，同时加入自身面具', question: '艺术前辈与自身身份的重叠',
        result: '引用原作的摄影自画像', source: 'https://www.npg.org.uk/collections/search/portrait/mw308918/Gillian-Wearing-Me-as-Cahun-Holding-a-Mask-of-My-Face'
      },
      {
        id: 'ulman-instagram', artistId: 'amalia-ulman', name: 'Amalia Ulman', year: 2014, period: '2014',
        title: 'Excellences & Perfections',
        action: '在 Instagram 上连续数月发布自拍、商品图和生活片段，按脚本表演一条女性人格弧线。',
        material: 'Instagram、自拍、商品图、文字、评论互动', rule: '让角色在真实社交账号中按时间持续发展，最后才揭示其表演性质',
        question: '当身份通过平台发布节奏与观众反馈形成，自拍还是私人图像吗', result: '社交媒体行为及其档案',
        source: 'https://www.tate.org.uk/art/artworks/ulman-excellences-perfections-t14593'
      }
    ],
    note: '这条脉络同时包含明确引用与方法并置。Cahun → Wearing、Sherman → Morimura 有具体作品依据；Wilson、Lee、Fosso、Ulman 与其他节点的相似主要用于方法比较，不自动等于师承。'
  },
  {
    id: 'appropriation',
    title: '现成图像、再摄影与平台挪用',
    subtitle: '摄影师不再寻找“新的对象”时，选择、复制、裁切、搜索和重新命名会不会成为真正的拍摄动作？',
    nodes: [
      {
        id: 'levine-evans', artistId: 'sherrie-levine', name: 'Sherrie Levine', year: 1981, period: '1981',
        title: 'After Walker Evans', action: '从展览图录中的 Walker Evans 照片进行复制和再摄影，再作为自己的系列展示。',
        material: '艺术史图录、再摄影、银盐打印', rule: '选择既有名作并以“After…”重新署名呈现',
        question: '复制之后，原创性和作者身份还剩在哪里', result: '统一呈现的再摄影系列',
        source: 'https://whitney.org/artists/2978'
      },
      {
        id: 'prince-cowboy', artistId: 'richard-prince', name: 'Richard Prince', year: 1989, period: '1980s–1990s',
        title: 'Cowboys', action: '从 Marlboro 等广告中抽取牛仔图像，裁切、再摄影并放大输出。',
        material: '杂志广告、相机、彩色打印', rule: '移除广告版面与文字，让商业图像单独进入艺术展示',
        question: '大众媒体图像被重新框取后，谁拥有它、谁制造它的欲望', result: '大尺幅再摄影作品',
        source: 'https://www.guggenheim.org/exhibition/richard-prince-spiritual-america'
      },
      {
        id: 'schmid-street', artistId: 'joachim-schmid', name: 'Joachim Schmid', year: 1990, period: '1980s 起',
        title: 'Pictures from the Street / found photography practice',
        action: '从街头、二手来源和大众照片中收集匿名影像，再分类、命名与出版。',
        material: '匿名照片、found image、出版', rule: '不以新增拍摄为中心，而以找到—分类—编辑建立系列',
        question: '摄影作者是否可以主要通过编辑既有图像产生', result: '照片组合、档案与摄影书',
        source: 'https://ocula.com/artists/joachim-schmid/'
      },
      {
        id: 'umbrico-suns', artistId: 'penelope-umbrico', name: 'Penelope Umbrico', year: 2006, period: '2006 起',
        title: 'Suns from Sunsets from Flickr', action: '搜索 Flickr 中的 sunset 图像，只裁取其中的太阳，再把大量结果组成网格。',
        material: 'Flickr、用户照片、下载、裁切、打印', rule: '以平台关键词检索作为采样方法，并随平台数量更新标题',
        question: '当数百万人拍摄同一种景象，单张照片的独特性还重要吗', result: '海量太阳图像网格装置',
        source: 'https://www.penelopeumbrico.net/index.php/project/suns/'
      },
      {
        id: 'henner-no-mans-land', artistId: 'mishka-henner', name: 'Mishka Henner', year: 2011, period: '2011–2012',
        title: 'No Man’s Land', action: '使用 Google Street View 的道路影像，并借网络线索定位欧洲偏远道路上的性工作场景。',
        material: 'Street View、网络检索、现成平台图像', rule: '摄影师不去现场，由平台相机完成采集，艺术家负责定位、筛选与编辑',
        question: '自动采集图像中的观看权力与伦理责任属于谁', result: '打印与摄影书',
        source: 'https://edcat.net/item/no-mans-land/'
      }
    ],
    note: '按代表项目年代排列；“挪用”在这里不是一个风格，而是一组从复制名作、广告再摄影、匿名照片分类到平台搜索和机器采集的不同操作。'
  },
  {
    id: 'material-photo',
    title: '摄影材料：从图像到物体',
    subtitle: '当摄影师折叠、曝光、溶解、氧化、运输或反复复制照片时，作品的核心从“拍了什么”转向“材料经历了什么”。',
    nodes: [
      {
        id: 'beshty-folds', artistId: 'walead-beshty', name: 'Walead Beshty', year: 2006, period: '2006 起',
        title: 'Travel Pictures / Fold works', action: '让感光材料经历机场 X-ray、折叠、展开和曝光，使运输与操作留下的痕迹直接进入图像。',
        material: '感光纸、胶片、机场 X-ray、折叠痕迹', rule: '不把损伤当作需要消除的错误，而把流通和处理过程记录成作品表面', question: '摄影材料能否记录自身经历，而不只是记录外部对象', result: '抽象摄影与材料痕迹',
        source: 'https://www.petzel.com/artists/walead-beshty'
      },
      {
        id: 'deschenes-tilt', artistId: 'liz-deschenes', name: 'Liz Deschenes', year: 2009, period: '2009–2011',
        title: 'Tilt / Swing', action: '以无相机方式制作银色 photogram，并把多块反射摄影表面分布在建筑空间中。',
        material: '银盐感光材料、环境光、铝板、建筑空间', rule: '照片既接受光也继续反射观众与空间；安装位置参与作品生成', question: '照片何时不再是窗口，而成为与观众共享空间的物体', result: '多面摄影装置',
        source: 'https://www.moma.org/collection/works/161348'
      },
      {
        id: 'yokota-matter', artistId: 'daisuke-yokota', name: 'Daisuke Yokota', year: 2016, period: '2016–2017',
        title: 'Matter / Burn Out', action: '通过无相机曝光、化学处理、蜡封、现场打印和投影，把摄影拆回感光材料、化学反应与体积。',
        material: '胶片、印相纸、化学药剂、蜡、投影', rule: '持续处理材料，让制作过程和损耗比单一原始图像更重要', question: '当摄影不断被复制和处理后，图像与材料谁是主体', result: '摄影物件、装置与现场制作',
        source: 'https://www.foam.org/events/daisuke-yokota'
      },
      {
        id: 'goudal-decantation', artistId: 'noemie-goudal', name: 'Noémie Goudal', year: 2021, period: '2021',
        title: 'Décantation', action: '把山景打印在水溶纸上，将纸重新置入风景并逐步冲洗，再摄影记录图像的消解。',
        material: '风景照片、水溶纸、水、再摄影', rule: '打印—放回现场—冲洗—再次拍摄，让照片的物理变化成为连续动作', question: '风景照片能否通过自身消失来模拟地貌变化和时间', result: '记录纸面消解过程的摄影系列',
        source: 'https://www.grandcafe-saintnazaire.fr/en/expositions/post-atlantica/'
      }
    ],
    note: '这条线不是“实验摄影风格史”。Beshty 让物流和折叠写入材料，Deschenes 让感光表面进入建筑，Yokota 反复处理摄影材料，Goudal 则让打印图像在水中实际消解；共同点只是作品都把照片的物质状态推到前台。'
  },
  {
    id: 'constructed-truth',
    title: '伪档案、证据与被制造的真实',
    subtitle: '照片看起来像证据，并不意味着它记录了真实发生的对象；命名、说明、档案格式和展示制度同样会制造可信度。',
    nodes: [
      {
        id: 'fontcuberta-fauna', artistId: 'joan-fontcuberta', name: 'Joan Fontcuberta', year: 1985, period: '1985 起',
        title: 'Fauna', action: '与 Pere Formiguera 构造虚构动物和虚构科学家档案，再用照片、分类说明和研究材料模拟自然史证据。',
        material: '编排摄影、文字、分类学格式、档案装置', rule: '让虚构内容严格借用科学记录的可信外壳', question: '我们相信照片，是因为图像本身，还是因为它被放进了熟悉的证据制度', result: '大型伪科学档案装置',
        source: 'https://www.macba.cat/en/obra/r1659-fauna/'
      },
      {
        id: 'raad-atlas', artistId: 'walid-raad', name: 'Walid Raad', year: 1989, period: '1989–2004',
        title: 'The Atlas Group', action: '建立虚构研究机构与人物，把虚构文件、摄影、笔记本和录像同黎巴嫩战争历史的真实语境交织。',
        material: '摄影、录像、笔记本、档案标签、lecture', rule: '借档案机构的格式生产材料，同时让事实与虚构的边界保持不稳定', question: '历史档案的权威来自事件本身，还是来自保存、署名与陈列的制度', result: '虚构机构及其跨媒介档案',
        source: 'https://www.moma.org/artists/8193-walid-raad'
      },
      {
        id: 'simon-innocents', artistId: 'taryn-simon', name: 'Taryn Simon', year: 2002, period: '2002',
        title: 'The Innocents', action: '拍摄被错误定罪后获释者，并把肖像与案件中摄影辨认、地点和错误证据的机制联系起来。',
        material: '大画幅摄影、文字、司法档案与地点', rule: '让肖像回到误认发生的制度语境，而不是把人物孤立成一般纪实肖像', question: '摄影既能证明清白，也曾参与制造错误识别时，证据的可靠性如何判断', result: '肖像、地点与案件文本组成的系列',
        source: 'https://tarynsimon.com/works/innocents/'
      }
    ],
    note: 'Fontcuberta 与 Raad 主动构造虚构档案；Simon 的 The Innocents 研究的则是真实司法系统中照片作为证据时如何发生误认。因此三者是“证据机制”的并行比较，不是同一种虚构方法。'
  },
  {
    id: 'family-memory',
    title: '家族档案、迁移与被重建的记忆',
    subtitle: '家庭照片可以是证据，也可以有巨大缺口；艺术家怎样用重演、替身、口述、书籍与布景处理那些无法被一张旧照片完整证明的过去？',
    nodes: [
      {
        id: 'kganye-herstory', artistId: 'lebohang-kganye', name: 'Lebohang Kganye', year: 2013, period: '2013',
        title: 'Ke Lefa Laka: Her-story', action: '进入母亲的家庭旧照，以自己的身体重演母亲曾经占据的位置，再把新旧影像叠置。',
        material: '家庭相册、自我表演、摄影、叠置', rule: '不修复旧照，而让现在的身体直接进入家族影像', question: '后代能否通过表演与已逝亲人的影像共同存在', result: '新旧时间层叠加的摄影系列',
        source: 'https://www.lebohangkganye.co.za/ke-lefa-laka-herstory-2013-all'
      },
      {
        id: 'sim-one-day', artistId: 'sim-chi-yin', name: 'Sim Chi Yin', year: 2015, period: '2015–',
        title: 'One Day We’ll Understand', action: '调查家族长期沉默的祖父历史，把殖民档案、口述史、地景、录像和现场表演不断转换成新版本。',
        material: '殖民档案、家庭口述、摄影、录像、表演', rule: '让档案事实和无法确认的家族记忆同时保留，不把研究压成唯一结论', question: '家族沉默与国家历史重叠时，谁能决定哪一种叙述有效', result: '跨摄影、影像、书籍与现场表演的长期项目',
        source: 'https://chiyinsim.com/projects/'
      },
      {
        id: 'cadet-ritual', artistId: 'widline-cadet', name: 'Widline Cadet', year: 2019, period: '2019–2025',
        title: 'Ritual [Dis]Appearance', action: '把稀少家庭旧照与自拍、亲属及具有视觉亲缘感的陌生女性并置，用“替身”补写没有照片的家族位置。',
        material: '家庭旧照、自拍、肖像、录像、摄影书', rule: '允许假设和替身进入家庭档案，同时保留其被构造的痕迹', question: '当家族没有足够影像证据时，想象能否成为记忆方法而不是伪装成事实', result: '开放式家族档案、摄影书与装置',
        source: 'https://huismarseille.nl/en/exhibitions/widline-cadet/'
      },
      {
        id: 'soleimani-ghostwriter', artistId: 'sheida-soleimani', name: 'Sheida Soleimani', year: 2021, period: '2021–',
        title: 'Ghostwriter', action: '根据父母流亡叙述，把家庭遗物、旧照、网络地景、手工道具和父母本人搭成摄影棚场景，再一次性拍回二维。',
        material: '家庭遗物、网络图像、打印背景、道具、中画幅摄影', rule: '把记忆先重建成真实立体 tableau，再通过摄影压缩为一张新图像', question: '幸存者记忆怎样在不把创伤猎奇化的前提下获得可见形式', result: '高度压缩的摄影棚 tableau 与墙面装置',
        source: 'https://www.icp.org/exhibitions/sheida-soleimani-panjereh'
      },
      {
        id: 'her-paradise', artistId: 'pao-houa-her', name: 'Pao Houa Her', year: 2024, period: '2024',
        title: 'Pictures from Paradise', action: '根据家人逃离老挝的口述，四十年后用 Google Maps 追踪可能路线，并把今天的地景与母亲花园中的罂粟叠成可变图像。',
        material: '家庭口述、Google Maps、地景摄影、植物、lenticular print', rule: '不宣称准确复原路线，而用地图和替代植物构造一个可能的故乡', question: '无法返回的故乡如何依靠地图、植物和家庭叙述继续存在', result: '随观看角度变化的立体光栅图像',
        source: 'https://www.moma.org/calendar/exhibitions/5749'
      },
      {
        id: 'barry-mother', artistId: 'hady-barry', name: 'Hady Barry', year: 2024, period: '2023–2024',
        title: 'i am (not) your mother', action: '将少女时期日记、家庭照片、当下黑白摄影和与母亲的新对话穿插编入一本手工 Risograph 摄影书。',
        material: '日记、家庭档案、黑白摄影、访谈、Risograph、手工装订', rule: '让过去的自己、今天的自己和母亲的回应在书页中直接互相打断', question: '家庭记忆有冲突时，摄影书能否容纳彼此不一致的版本', result: '100 本手工首版摄影书',
        source: 'https://www.hadybarry.com/i-am-not-your-mother-1'
      },
      {
        id: 'baez-holding-water', artistId: 'genesis-baez', name: 'Genesis Báez', year: 2025, period: '2015–2025',
        title: 'Holding Water / Blue Sun · Sol Azul', action: '与母亲、亲属和社区成员共同摆拍，以线、水、织物、影子等元素把亲缘与迁移关系转成身体可以实际完成的动作。',
        material: '彩色摄影、家庭表演、线、水、织物、摄影书', rule: '通过合作动作和重复元素连接两个故乡，而不是按年代讲述家族史', question: '亲缘与离散这种看不见的关系怎样被摄影转成可触摸的结构', result: '跨十年的摄影序列、展览与专著',
        source: 'https://www.dashwoodprojects.com/genesis-b%C3%A1ez'
      }
    ],
    note: '这条脉络不宣称艺术家之间存在直接影响。它比较的是面对“不完整的家庭历史”时采用的不同方法：进入旧照、研究沉默、使用替身、搭建记忆场景、追踪迁移路线、让日记与访谈对话、以及通过合作摆拍把关系变成身体动作。'
  },
  {
    id: 'data-body',
    title: '脸、身体与机器读取',
    subtitle: '镜子、DNA、训练数据和医学扫描都能生产“身体图像”，但它们制造的身体并不是同一种东西。',
    nodes: [
      {
        id: 'dewey-stranger', artistId: 'heather-dewey-hagborg', name: 'Heather Dewey-Hagborg', year: 2012, period: '2012–2013',
        title: 'Stranger Visions', action: '从公共空间遗留物提取 DNA，用算法推测面部特征，再建模并 3D 打印人头像。',
        material: 'DNA、计算模型、3D 建模、全彩打印', rule: '从生物样本进入概率性面部推测，再把概率结果做成实体脸',
        question: '算法把概率外观变成“像真的脸”时，会制造怎样的监控权力', result: '真人尺度 3D 肖像与装置',
        source: 'https://deweyhagborg.com/projects/stranger-visions'
      },
      {
        id: 'oleary-spitting', artistId: 'eva-oleary', name: 'Eva O’Leary', year: 2017, period: '2017',
        title: 'Spitting Image', action: '让青春期女孩面对自己的镜像，再从双面镜另一侧记录她们观察自身时的身体反应。',
        material: '双面镜、大画幅摄影、统一拍摄装置', rule: '先制造“看自己”的条件，再拍摄这个反馈过程',
        question: '在机器识别之前，身体怎样已经被自我检查和理想形象塑造', result: '统一观看条件下的肖像系列',
        source: 'https://www.evaoleary.com/interviews/being-truthful-with-yourself'
      },
      {
        id: 'paglen-feret', artistId: 'trevor-paglen', name: 'Trevor Paglen', year: 2017, period: '2017',
        title: 'It Began as a Military Experiment', action: '进入 FERET 人脸识别数据库，筛选训练肖像并加入算法读取的人脸关键点。',
        material: '训练数据、人脸照片、算法标记、大尺幅输出', rule: '把原本供机器学习的图像重新组织给人观看',
        question: '一张肖像首先被机器而不是人观看时，摄影发生了什么变化', result: '数据集图像与算法标记的展示',
        source: 'https://www.moma.org/collection/works/275173'
      },
      {
        id: 'jes-fan-cross-section', artistId: 'jes-fan', name: 'Jes Fan', year: 2023, period: '2023',
        title: 'Cross Section (Right Leg Muscle III)', action: '把自身 CAT 扫描中的右腿肌肉截面转成三维结构，再以 PLA、玻璃纤维、树脂、颜料与玻璃制造。',
        material: 'CAT 扫描、3D 打印、PLA、树脂、玻璃', rule: '将医学影像中的身体内部数据转译为可触摸的雕塑',
        question: '身体数据离开医学界面后还能成为怎样的形体和身份材料', result: '基于身体扫描的雕塑',
        source: 'https://whitney.org/exhibitions/2024-biennial/art?section=10'
      }
    ],
    note: '这不是线性技术进步史。O’Leary 的镜像反馈、Dewey-Hagborg 的 DNA 概率脸、Paglen 的训练数据库和 Jes Fan 的医学扫描分别在不同层面处理“身体被读取”。'
  }
];

const dimensions: { key: 'action' | 'material' | 'rule' | 'question' | 'result'; label: string }[] = [
  { key: 'action', label: '具体动作' },
  { key: 'material', label: '材料 / 媒介' },
  { key: 'rule', label: '操作规则' },
  { key: 'question', label: '讨论的问题' },
  { key: 'result', label: '最终呈现' },
];

function defaultPair(topicId: string): [string, string] {
  if (topicId === 'self') return ['cahun-training', 'wearing-cahun'];
  if (topicId === 'appropriation') return ['levine-evans', 'prince-cowboy'];
  if (topicId === 'data-body') return ['dewey-stranger', 'paglen-feret'];
  if (topicId === 'material-photo') return ['deschenes-tilt', 'yokota-matter'];
  if (topicId === 'constructed-truth') return ['fontcuberta-fauna', 'raad-atlas'];
  if (topicId === 'family-memory') return ['kganye-herstory', 'cadet-ritual'];
  return ['kawara-today', 'hsieh-clock'];
}

export function PracticeLineages({ onOpenArtist }: { onOpenArtist: (artist: Artist) => void }) {
  const [topicId, setTopicId] = useState('duration');
  const [view, setView] = useState<'timeline' | 'parallel'>('timeline');
  const [pair, setPair] = useState<[string, string]>(['kawara-today', 'hsieh-clock']);
  const topic = topics.find(item => item.id === topicId)!;
  const left = topic.nodes.find(item => item.id === pair[0]) ?? topic.nodes[0];
  const right = topic.nodes.find(item => item.id === pair[1]) ?? topic.nodes[1];
  const hasPair = (a: string, b: string) => [left.id, right.id].includes(a) && [left.id, right.id].includes(b);
  const cahunWearing = hasPair('cahun-training', 'wearing-cahun');
  const shermanMorimura = hasPair('sherman-stills', 'morimura-sherman');
  const direct = cahunWearing || shermanMorimura;
  const sameArtist = left.artistId === right.artistId;
  const relation = direct ? '有据可查的明确回应' : sameArtist ? '同一艺术家的方法变化' : '并行比较 · 不认定直接影响';
  const comparison = cahunWearing
    ? '原作、装扮与面部处理高度对应。Wearing 新增自己的面具，让“扮演前辈”同时变成“展示自己的脸”。这条关系由 NPG 馆藏说明确认。'
    : shermanMorimura
      ? 'Morimura 的作品标题直接点名 Cindy Sherman，因此这里不是仅凭视觉相似推断关系。Sherman 制造虚构电影类型，Morimura 则把自己的身体放进对具体艺术家图像的回应。'
      : sameArtist
        ? '两件作品属于同一艺术家的不同阶段。比较时重点看规则、材料和输出怎样变化，而不是把“同一个作者”当成两件作品天然相同的理由。'
        : topic.id === 'duration'
          ? '它们都以重复规则组织时间，但计数、日期、打卡与档案编排不能互换。重点比较每套规则的最小单位，以及身体是否必须亲自承受规则。'
          : topic.id === 'self'
            ? '都使用身体或人格扮演，但对象不同：社会模板、电影类型、社群身份、具体历史人物、艺术前辈和平台人格应分开判断。'
            : topic.id === 'appropriation'
              ? '共同点是作品从既有图像出发；差异在于图像从哪里来，以及艺术家具体做的是复制、再摄影、收集、平台检索还是机器采集后的筛选。'
              : topic.id === 'material-photo'
                ? '共同点是照片的物理状态成为作品的一部分；但折叠和运输、无相机曝光、化学再处理与水溶纸消解是四种不同操作，不能笼统归成“实验效果”。'
                : topic.id === 'constructed-truth'
                  ? '三者都让观众重新判断“证据”，但 Fontcuberta 和 Raad 主动构造虚构档案，Simon 处理的是真实司法系统里摄影误认造成的后果。这里比较的是可信度如何被生产，而非宣称直接影响。'
                  : topic.id === 'family-memory'
                    ? '这些项目都面对家庭或迁移记忆，但操作完全不同：进入旧照、口述调查、替身、摄影棚重构、地图追踪、日记与访谈、合作摆拍。比较重点是每位艺术家如何标记“已知事实”和“后来重建”的边界。'
                    : '都把身体放进某种读取系统，但镜像反馈、生物样本、训练数据与医学扫描生成的是不同种类的“身体证据”，不能只因为都涉及技术就视为同一种方法。';

  function openArtist(id: string) {
    const artist = artists.find(item => item.id === id);
    if (artist) onOpenArtist(artist);
  }

  return (
    <section className="lineages" id="lineages" aria-labelledby="lineages-title">
      <header className="lineages-head">
        <div><span className="lineages-kicker">PRACTICE LINEAGES</span><h2 id="lineages-title">创作脉络与并行比较</h2></div>
        <p>先看艺术家具体做了什么，再追踪哪些方法相似、哪些变化有来源支持。</p>
      </header>
      <div className="lineage-topics" aria-label="选择研究专题">
        {topics.map(item => <button key={item.id} aria-pressed={topicId === item.id} onClick={() => {
          setTopicId(item.id);
          setPair(defaultPair(item.id));
        }}>{item.title}<small>{item.nodes.length} 个作品节点</small></button>)}
      </div>
      <div className="lineage-toolbar">
        <p>{topic.subtitle}</p>
        <div aria-label="专题查看方式">
          <button aria-pressed={view === 'timeline'} onClick={() => setView('timeline')}>按年梳理</button>
          <button aria-pressed={view === 'parallel'} onClick={() => setView('parallel')}>并行比较</button>
        </div>
      </div>
      {view === 'timeline' ? (
        <div>
          <p className="lineage-note">{topic.note}</p>
          {topic.id === 'self' && <aside className="lineage-evidence">
            <strong>目前标记两条可直接核查的回应关系</strong>
            <p>Cahun（1927）→ Wearing（2012）；Sherman（1977–1980）→ Morimura（1998）。其余节点保持“方法并置”，不把相似自动写成影响。</p>
            <a href="https://www.npg.org.uk/collections/search/portrait/mw308918/Gillian-Wearing-Me-as-Cahun-Holding-a-Mask-of-My-Face" target="_blank" rel="noreferrer">Cahun / Wearing · NPG ↗</a>
            {' · '}
            <a href="https://www.luhringaugustine.com/artists/yasumasa-morimura/artworks/actresses?view=slider" target="_blank" rel="noreferrer">Sherman / Morimura · 作品档案 ↗</a>
          </aside>}
          <ol className="lineage-timeline">
            {topic.nodes.map(node => <li key={node.id}>
              <div className="lineage-date">{node.period}</div>
              <article>
                <span className="lineage-artist">{node.name}</span>
                <h3>{node.title}</h3>
                <p>{node.action}</p>
                <div className="lineage-meta"><span>材料：{node.material}</span><span>呈现：{node.result}</span></div>
                <footer><button onClick={() => openArtist(node.artistId)}>打开艺术家档案</button><a href={node.source} target="_blank" rel="noreferrer">作品依据 ↗</a></footer>
              </article>
            </li>)}
          </ol>
        </div>
      ) : (
        <div className="lineage-parallel">
          <div className="lineage-selectors">
            {([0, 1] as const).map(index => <label key={index}>比较作品 {index === 0 ? 'A' : 'B'}
              <select value={pair[index]} onChange={event => {
                const next: [string, string] = [...pair];
                next[index] = event.target.value;
                setPair(next);
              }}>
                {topic.nodes.map(node => <option key={node.id} value={node.id} disabled={node.id === pair[index === 0 ? 1 : 0]}>{node.name} · {node.title}</option>)}
              </select>
            </label>)}
          </div>
          <aside className="lineage-evidence">
            <strong>{relation}</strong><p>{comparison}</p>
            <small>相似度按维度作研究判断，不设未经测量的百分比分数。</small>
          </aside>
          <div className="lineage-comparison">
            <div className="lineage-compare-head"><span>比较维度</span><strong>A · {left.name}</strong><strong>B · {right.name}</strong></div>
            {dimensions.map(dimension => <div className="lineage-compare-row" key={dimension.key}>
              <b>{dimension.label}</b><p><small>A · {left.name}</small>{left[dimension.key]}</p><p><small>B · {right.name}</small>{right[dimension.key]}</p>
            </div>)}
          </div>
          <div className="lineage-pair-links">{[left, right].map((node, index) => <div key={node.id}><button onClick={() => openArtist(node.artistId)}>打开 {index === 0 ? 'A' : 'B'} 的艺术家档案</button><a href={node.source} target="_blank" rel="noreferrer">核查作品来源 ↗</a></div>)}</div>
        </div>
      )}
    </section>
  );
}
