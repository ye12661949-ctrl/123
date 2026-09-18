import type { Artist, ArtworkImage, Project } from './data';

const image = (url: string, title: string, credit: string, sourceUrl: string, sourceLabel: string): ArtworkImage => ({ url, title, credit, sourceUrl, sourceLabel });
const project = (year: string, title: string, type: string, facts: string[], reading: string): Project => ({ year, title, type, facts, reading });

export const circuitArtists: Artist[] = [
  {
    id: 'lubaina-himid', name: 'Lubaina Himid', born: '1954', base: 'Preston / UK',
    intro: '以绘画、真人尺寸 cut-out、装置、声音和策展重写被欧洲艺术史匿名化的黑人主体，并长期推动英国 Black Arts Movement。',
    methods: ['绘画', '装置', 'cut-out', '文本', '声音', '档案研究'], subjects: ['殖民历史', '黑人身份', '迁移', '劳动', '艺术史', '命名'], outputs: ['绘画', '大型装置', '声音装置', '纸上作品'], institutions: ['Tate', 'Turner Prize', 'Venice Biennale'],
    achievements: ['Turner Prize 2017 winner', 'British Pavilion, Venice Biennale 2026', 'Royal Academician'],
    whyImportant: '她把“补充被忽略的人”推进成更具体的形式问题：一个被历史绘画当作背景的人如何重新获得名字、职业、声音和占据空间的身体。',
    projects: [
      project('1986–87', 'A Fashionable Marriage', 'cut-out installation / satire', ['借用 Hogarth 的构图和戏剧空间。', '把艺术机构、政治和种族权力转成真人尺度的讽刺场景。'], '重点在于她很早就把绘画从墙面拆出来，让人物进入观众所在的真实空间。'),
      project('2004', 'Naming the Money', '100 life-size cut-outs + soundtrack', ['制作 100 个真人尺寸绘画 cut-out。', '为每个人重新命名并写出职业和个人故事。', '声音与人物背后的文字共同构成作品。'], '这不是“关于奴隶制的100张肖像”，而是一套用命名、空间和声音抵抗历史匿名化的系统。'),
      project('2016–18', 'Le Rodeur', 'painting cycle', ['以1819年法国奴隶船 Le Rodeur 的历史为入口。', '同一组人物关系在多幅绘画中不断变化。'], '她没有重现一个历史事件，而是借重复构图讨论恐惧、观看和群体关系。'),
      project('2021–', 'Old Boat / New Money and later work', 'painting / institutional survey', ['继续把海洋、贸易、金钱和殖民经济放进绘画。', '大型展览把1980年代至今的作品重新连成长期政治实践。'], '把早期 Black Arts Movement 与今天的博物馆语境并读，可以看到主题持续而形式不断变化。'),
    ],
    images: [
      image('https://www.uni-potsdam.de/fileadmin/_processed_/e/b/csm_2022-05-18-online-lecture-trauma-transgenerational_da5edbabd1.jpg', 'Le Rodeur: The Exchange', '© Lubaina Himid', 'https://lubainahimid.com/portfolio/le-rodeur/', 'Artist website / University of Potsdam'),
      image('https://cdn.shopify.com/s/files/1/0711/5292/6820/files/3468-395878306127-anatomy-of-an-artwork-le-rodeur-the-pulley-2017-by-lubaina-himid-ORIG.jpg', 'Le Rodeur: The Pulley', '© Lubaina Himid', 'https://www.phaidon.com/agenda/art/articles/2021/november/29/anatomy-of-an-artwork-le-rodeur-the-pulley-2017-by-lubaina-himid/', 'Phaidon'),
    ], sourceLabel: '艺术家官网', sourceUrl: 'https://lubainahimid.com/'
  },
  {
    id: 'steve-mcqueen', name: 'Steve McQueen', born: '1969', base: 'London / Amsterdam',
    intro: '在电影、录像、摄影与大型社会参与项目之间工作，把身体、制度、历史与观看机制压缩进高度精确的时间结构。',
    methods: ['影像装置', '电影', '摄影', '参与式项目', '长时段研究'], subjects: ['身体', '制度', '种族', '英国社会', '战争', '记忆'], outputs: ['电影', '影像装置', '摄影装置', '公共项目'], institutions: ['Tate', 'MoMA', 'Turner Prize', 'Venice Biennale', 'Berlin Biennale'],
    achievements: ['Turner Prize 1999 winner', 'British Pavilion, Venice Biennale 2009', 'Academy Award-winning filmmaker'],
    whyImportant: 'McQueen 的艺术实践说明 gallery moving image 与电影工业并不是两条互斥路径。他持续把观看者的身体、持续时间和历史制度放在作品结构中心。',
    projects: [
      project('1997', 'Deadpan', '16mm film / performance', ['艺术家重演 Buster Keaton 房屋倒塌镜头。', '摄影机从不同角度重复记录同一动作。'], '一个简单 stunt 被拆成关于身体、危险、视角与电影史的空间实验。'),
      project('2002', 'Caribs’ Leap / Western Deep', 'two-film installation', ['一边处理格林纳达殖民历史中的集体跳崖。', '另一边进入南非金矿极深地下劳动环境。'], '两个地点通过黑身体、重力和制度暴力形成关系，而不是靠线性叙事解释。'),
      project('2019', 'Year 3', 'school portrait archive / public project', ['邀请伦敦 Year 3 班级拍集体照。', '最终集合数千张班级照片并覆盖 Tate Britain 展厅墙面。', '项目同时进入伦敦广告牌公共空间。'], '它把传统学校照从私人纪念物转成一代城市儿童的集体肖像。'),
      project('2023', 'Grenfell', 'single-channel film', ['以长时间航拍和地面移动逼近 Grenfell Tower。', '刻意延迟发布，围绕纪念、证据与灾难观看伦理展开。'], '适合和新闻影像对照：艺术家怎样通过延迟、距离和持续时间改变灾难图像的伦理。'),
    ],
    images: [
      image('https://www.moma.org/wp/inside_out/wp-content/uploads/2015/03/Image_5_McQueen_.jpg', 'Deadpan — installation / film still context', '© Steve McQueen', 'https://www.moma.org/artists/8048-steve-mcqueen', 'MoMA'),
      image('https://cdn.sanity.io/images/cxgd3urn/production/d7be4d268ba94583e9fdee786e4133330ff67599-931x620.jpg?auto=format&fit=crop&h=1279&q=85&w=1920', 'Year 3 — Tate Britain installation', '© Steve McQueen / installation view', 'https://www.tate.org.uk/whats-on/tate-britain/steve-mcqueen-year-3', 'Tate / The Art Newspaper'),
    ], sourceLabel: 'MoMA artist archive', sourceUrl: 'https://www.moma.org/artists/8048-steve-mcqueen'
  },
  {
    id: 'mark-leckey', name: 'Mark Leckey', born: '1964', base: 'London',
    intro: '从英国 club culture、found footage、互联网图像、声音系统和童年记忆出发，研究模拟文化怎样变成数字幽灵。',
    methods: ['found footage', '影像装置', '声音', '网络图像', '自传档案'], subjects: ['青年文化', '阶级', '技术', '记忆', '音乐', '英国文化'], outputs: ['录像', '声音装置', '雕塑', '沉浸式展览'], institutions: ['Tate', 'Turner Prize'],
    achievements: ['Turner Prize 2008 winner', 'Major Tate Britain exhibition 2019'],
    whyImportant: 'Leckey 把低清 VHS、网络找到的碎片和亚文化记忆当成严肃艺术史材料。他尤其适合研究“劣质图像”和私人记忆如何被重新编排。',
    projects: [
      project('1999', 'Fiorucci Made Me Hardcore', 'found-footage video', ['采样1970–90年代英国舞厅与 club 录像。', '通过剪辑、速度与声音把不同年代拼成连续舞蹈记忆。'], '核心不是复古，而是影像复制如何制造一个并不存在的共同记忆。'),
      project('2008', 'Industrial Light and Magic', 'installation / sound / sculpture', ['把声音、物件与消费技术结合。', 'Turner Prize 时期的核心语境。'], 'Leckey 的“技术”始终带着欲望和迷恋，而不是冷静的新媒体演示。'),
      project('2015', 'Dream English Kid, 1964–1999 AD', 'internet-found autobiography', ['在网上寻找可以替代自己童年记忆的图像和声音。', '将公共网络档案重组为虚构自传。'], '这是理解 post-internet 记忆很好的案例：私人记忆可以由别人上传的公共碎片重建。'),
      project('2019', 'O’ Magic Power of Bleakness', 'immersive installation / performance', ['围绕 M53 高速公路桥与青少年经历搭建环境。', '影像、声音、剧场与雕塑合成一个半真实空间。'], '“回忆一个地点”被转成观众可以走进去的舞台，而不只是讲述。'),
    ],
    images: [
      image('https://static.frieze.com/files/styles/frieze_teaser/public/article/thumbnail/mark-leckey-fiorucci-made-me-hardcore-1999-t.jpg?VersionId=h7D1spvcWeeV64i4pFjB5X_GMxxzM.Cn&itok=yPtsbRdS', 'Fiorucci Made Me Hardcore — installation', '© Mark Leckey', 'https://www.frieze.com/tags/mark-leckey', 'Frieze'),
      image('https://contemporaryartsociety.org/sites/default/files/images/2025-JSF-ML-088.jpg', 'Dream English Kid / Mark Leckey exhibition context', '© Mark Leckey', 'https://contemporaryartsociety.org/artists/mark-leckey', 'Contemporary Art Society'),
    ], sourceLabel: 'Tate', sourceUrl: 'https://shop.tate.org.uk/mark-leckey-o-magic-power-of-bleakness-exhibition-book/23034.html'
  },
  {
    id: 'laure-prouvost', name: 'Laure Prouvost', born: '1978', base: 'Brussels / London',
    intro: '用故意出错的语言、影像、物件和沉浸式布景制造滑动叙事，让翻译、误解和身体感知本身成为材料。',
    methods: ['影像装置', '沉浸式装置', '文本', '雕塑', '虚构叙事'], subjects: ['语言', '误译', '记忆', '家庭神话', '迁移', '感官'], outputs: ['录像', '大型装置', '雕塑', '空间叙事'], institutions: ['Turner Prize', 'Venice Biennale', 'São Paulo Biennial'],
    achievements: ['Turner Prize 2013 winner', 'French Pavilion, Venice Biennale 2019', '36th São Paulo Biennial 2025 participant'],
    whyImportant: '她的作品不是先有一个清楚故事再配图，而是让字幕、声音、图像和物件互相误译。意义就在这种失配里产生。',
    projects: [
      project('2011', 'The Wanderer', 'film / installation', ['从 Rory Macbeth 对 Kafka 文本的错误翻译衍生。', '语言错误成为影像叙事发动机。'], '“误译”不是问题，而是生产新现实的方法。'),
      project('2013', 'Wantee', 'video installation', ['围绕一个虚构的艺术家祖父与茶会叙事。', '录像、家具、茶具和展览空间连在一起。'], 'Turner Prize 获奖作品可以看成“家庭档案”的反面：她主动制造一个不可靠的家庭神话。'),
      project('2019', 'Deep See Blue Surrounding You / Vois Ce Bleu Profond Te Fondre', 'French Pavilion installation', ['观众穿过雕塑、影像、海洋色调空间。', '围绕边界、旅行、语言和非线性身份展开。'], '国家馆被变成一个湿润、流动、难以固定身份的旅程，而不是代表某种单一法国形象。'),
      project('2025', 'São Paulo Biennial participation', 'installation / biennial context', ['进入第36届圣保罗双年展的跨地域语境。', '持续发展身体、语言和共同生活的非线性叙事。'], '适合观察一个已经制度化的艺术家如何在大型双年展中维持个人语言，而不是迎合主题。'),
    ],
    images: [
      image('https://cdn.artobserved.com/artimages/2013/11/Laure-Prouvost-Wantee-Installation-View-via-Turner-Prize-1.jpg', 'Wantee — installation view', '© Laure Prouvost', 'https://www.tate.org.uk/art/artists/laure-prouvost-21175', 'Turner Prize / Tate context'),
      image('https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI1MjgyNjc3L29yaWdpbmFsX2FjNzRhZTQ2YjYyZGUyNTRlMDM1YzYyMTczMTYxNjRlLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTIwMCwiaGVpZ2h0IjoxMjAwLCJmaXQiOiJpbnNpZGUiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOnRydWV9LCJ3ZWJwIjp7InF1YWxpdHkiOjc1fSwianBlZyI6eyJxdWFsaXR5Ijo3NX0sInJvdGF0ZSI6bnVsbH19', 'Deep See Blue Surrounding You — French Pavilion', '© Laure Prouvost', 'https://www.are.na/block/5282677', 'Venice Biennale documentation'),
    ], sourceLabel: 'Artist / Venice archive', sourceUrl: 'https://www.laureprouvost.com/'
  },
  {
    id: 'jesse-darling', name: 'Jesse Darling', born: '1981', base: 'Berlin',
    intro: '用弯曲的金属、破损围栏、廉价塑料、绘画、文字和表演把“脆弱身体”与国家、宗教、边界和基础设施并置。',
    methods: ['雕塑', '装置', '绘画', '文本', '表演', '现成物'], subjects: ['身体', '脆弱性', '权力', '边界', '帝国', '照护'], outputs: ['空间装置', '雕塑', '绘画', '影像'], institutions: ['Turner Prize', 'Tate', 'Venice Biennale', 'Sharjah Biennial'],
    achievements: ['Turner Prize 2023 winner', 'Venice Biennale 2019 participant', 'Art Now, Tate Britain 2018'],
    whyImportant: 'Darling 的材料经常看起来“坏了”：栏杆下垂、支架像骨头、塑料像受伤皮肤。脆弱不是主题标签，而被直接做进结构。',
    projects: [
      project('2018', 'The Ballad of Saint Jerome', 'Art Now installation', ['在 Tate Britain 以雕塑、墙面与物件组织空间。', '宗教符号、基础设施和身体支撑互相转换。'], '看作品怎样把“制度也会受伤”变成材料的弯曲和不稳定。'),
      project('2020', 'Gravity Road', 'large steel sculpture', ['巨型钢结构像损坏过山车或骨架。', '把工程材料做成失去功能的身体。'], '工业材料通常意味着力量，这里却被做成疲惫、脆弱和失效。'),
      project('2022', 'No Medals No Ribbons', 'survey installation', ['把十年作品重新分组。', '安装、绘画、文字和雕塑共同讨论政府、宗教、帝国和技术。'], '“回顾展”被拒绝为胜利史，而被组织成一套失败、临时支撑和持续适应的身体史。'),
      project('2022', 'Enclosures', 'ceramic / installation research', ['围绕 clay、开采、祖先身体与地质展开。', '装置同时处理 enclosure、extraction 和身体边界。'], '材料地质史和政治 enclosure 被放在同一层面，而不是只做形式雕塑。'),
    ],
    images: [
      image('https://images.ctfassets.net/my3e36632gpy/7IElLnyj67bxQsHaywO0A1/c9b17bc7c569dbda1f58a6c8e6cb7c5e/JD_MAO_Installation_52.jpg?q=80&w=800', 'No Medals No Ribbons — installation', '© Jesse Darling / photo Ben Westoby', 'https://www.modernartoxford.org.uk/whats-on/jesse-darling-no-medals-no-ribbons', 'Modern Art Oxford'),
      image('https://static.frieze.com/files/inline-images/jesse-darling-enclosures.jpeg', 'Enclosures — installation', '© Jesse Darling', 'https://camdenartcentre.org/whats-on/jesse-darling-2', 'Camden Art Centre / Frieze'),
    ], sourceLabel: 'Modern Art Oxford', sourceUrl: 'https://www.modernartoxford.org.uk/whats-on/jesse-darling-no-medals-no-ribbons'
  },
  {
    id: 'jasleen-kaur', name: 'Jasleen Kaur', born: '1986', base: 'London / Glasgow',
    intro: '从苏格兰旁遮普家庭、宗教声音、改装汽车、地毯、食物和政治传单出发，把日常物件变成会唱歌和移动的社会档案。',
    methods: ['装置', '声音', '动力雕塑', '家庭档案', '现成物'], subjects: ['迁移', '家庭', '宗教', '劳动', '社区', '声音记忆'], outputs: ['大型装置', '声音作品', '雕塑', '出版'], institutions: ['Turner Prize', 'Istanbul Biennial'],
    achievements: ['Turner Prize 2024 winner', '18th Istanbul Biennial 2025 participant'],
    whyImportant: 'Kaur 很适合研究“个人文化背景怎样避免变成身份说明”。她把文化放进物件的使用方式、声音、改装和空间关系里。',
    projects: [
      project('2019', 'Be Like Teflon', 'publication / oral histories', ['收集女性与非二元者的声音、物件和经验。', '以出版和展览组织多声部材料。'], '身份不是一个人的自白，而是被拆成许多相互矛盾的声音。'),
      project('2021', 'Gut Feelings Meri Jaan', 'sound / sculptural research', ['从食物、身体和家庭语言进入。', '声音与物件承担记忆。'], '日常感官材料可以比直接的“文化符号”更准确地处理迁移经验。'),
      project('2023–24', 'Alter Altar', 'kinetic / sound installation', ['Axminster 地毯、blessed Irn Bru、足球围巾、政治传单和家庭照片被重新组合。', '动力雕塑和声音形成临时聚集空间。'], '她不把宗教与流行文化分开，而是在同一个家庭/城市经验中让它们并存。'),
      project('2025', 'Boomerang', 'installation / biennial development', ['继续研究物件如何携带迁移与回返。', '进入第18届伊斯坦布尔双年展语境。'], '“回返”既是物件运动，也是离散身份长期反复重新定位。'),
    ],
    images: [
      image('https://hollybushgardens.co.uk/files/img-9199-large-2560x1707.jpg', 'Alter Altar — installation view', '© Jasleen Kaur', 'https://www.tramway.org/news/tramway-hosts-first-major-scottish-exhibition-from-jasleen-kaur/', 'Tramway / Hollybush Gardens'),
      image('https://ichef.bbci.co.uk/news/1024/cpsprodpb/fb86/live/6d96f340-0216-11ef-a9f7-4d961743aa47.jpg', 'Alter Altar — Ford Escort / textile installation context', '© Jasleen Kaur', 'https://www.tate.org.uk/art/turner-prize/2024', 'Tate / BBC'),
    ], sourceLabel: 'Artist website', sourceUrl: 'https://jasleenkaur.com/'
  },
  {
    id: 'john-akomfrah', name: 'John Akomfrah', born: '1957', base: 'London',
    intro: '通过档案影像、多屏电影和声音把殖民史、迁移、黑人英国经验与气候危机组织成非线性蒙太奇。',
    methods: ['多屏影像', '档案影像', '声音', '电影', '蒙太奇'], subjects: ['殖民', '迁移', '黑人历史', '生态', '记忆', '海洋'], outputs: ['多屏装置', '电影', '声音装置'], institutions: ['Venice Biennale', 'Sharjah Biennial', 'Tate'],
    achievements: ['British Pavilion, Venice Biennale 2024', 'Knighthood 2023', 'Black Audio Film Collective co-founder'],
    whyImportant: 'Akomfrah 的规模很大，但方法并不神秘：档案片段、当代景观、声音和文本被并列，而不是用旁白把历史解释完。',
    projects: [
      project('1986', 'Handsworth Songs', 'essay film / Black Audio Film Collective', ['重组新闻、档案和社区影像。', '回应1985年英国城市骚乱。'], '这是反新闻报道结构的经典案例：不追求一个统一解释，而让历史碎片保持冲突。'),
      project('2015', 'Vertigo Sea', 'three-screen installation', ['鲸捕、海洋、移民与战争档案和新拍景观并置。', '三屏同时运作。'], '海洋既是自然景观，也是奴隶贸易、迁移和资源暴力的历史媒介。'),
      project('2017', 'Purple', 'six-channel video installation', ['在多个国家拍摄气候变化现场。', '档案与新拍摄、声音并置。'], '生态项目不是“拍灾难”，而是把工业史、个人记忆和环境变化做成时间结构。'),
      project('2024', 'Listening All Night To The Rain', 'British Pavilion / eight-part installation', ['由八组相互交叠的多屏影像和声音构成。', '水、倾听、殖民史和离散经验贯穿全馆。'], '国家馆被做成一个需要慢慢听和穿行的系统，而不是一部单一主屏电影。'),
    ],
    images: [
      image('https://media.showstudio.com/images/John_Akomfrah_Canto_V_Listening_All_Night_To_.width-2880_SX3JwgNJtYT4rzpD.jpg', 'Listening All Night To The Rain — British Pavilion', '© John Akomfrah', 'https://www.labiennale.org/en/art/2024/great-britain', 'Venice Biennale / British Council'),
      image('https://images.e-flux-systems.com/195727_15b246f346b891565025c84c7abe6f51.jpg%2C2000x2000', 'Purple — installation view', '© Smoking Dogs Films / John Akomfrah', 'https://www.lissongallery.com/artists/john-akomfrah', 'Lisson Gallery / e-flux'),
    ], sourceLabel: 'British Council', sourceUrl: 'https://venicebiennale.britishcouncil.org/history/2020s/2024-sir-john-akomfrah-ra'
  },
  {
    id: 'archie-moore', name: 'Archie Moore', born: '1970', base: 'Queensland / Australia',
    intro: '以家庭记忆、语言、气味、建筑重建和庞大族谱把个人经验与澳大利亚殖民国家档案正面相撞。',
    methods: ['沉浸式装置', '建筑重建', '绘画', '文本', '档案研究'], subjects: ['原住民历史', '家庭', '殖民', '记忆', '语言', '国家制度'], outputs: ['大型装置', '雕塑', '绘画', '文本墙'], institutions: ['Venice Biennale'],
    achievements: ['Golden Lion for Best National Participation, Venice Biennale 2024', 'Australia Pavilion 2024'],
    whyImportant: 'Moore 把“家族身份”做成尺度问题：一边是非常私人的童年房间，一边是覆盖墙面的数万年亲属关系和国家死亡记录。',
    projects: [
      project('2013', 'Black Dog', 'sculpture / self-portrait', ['以黑色狗的形象和材料替代直接自画像。', '种族化语言、宠物形象和自我表征互相折叠。'], '自画像不一定需要脸；一个物件也可以承担被观看和被命名的历史。'),
      project('2010–22', 'Dwelling', 'serial immersive installation', ['多次重建童年家庭内部空间。', '每次根据展场、记忆和地方语境改变。', '视觉、气味、声音和生活物件共同工作。'], '记忆被明确承认为真实、错误、缺失和重构的混合物。'),
      project('2024', 'kith and kin', 'genealogy / archive installation', ['在黑墙上手绘庞大家谱。', '中央长桌放置与澳大利亚原住民拘押死亡相关文件。', '私人谱系与国家制度档案并置。'], '这是把“家族树”从私人身份材料推到殖民历史尺度的极端案例。'),
      project('2026', 'Remnants of My Father', 'memory / installation', ['继续处理父亲、残留物与记忆。', '将私人纪念与更大的历史缺席连接。'], '可以和 Dwelling 对看：同样是私人经验，但空间策略与材料密度继续变化。'),
    ],
    images: [
      image('https://www.datocms-assets.com/36179/1663637502-22-8_gertrude_preston_4.jpg?auto=format', 'Dwelling (Victorian Issue) — bedroom', 'Photo Christian Capurro / © Archie Moore', 'https://gertrude.org.au/article/archie-moore-in-discussion-with-paris-lettau/', 'Gertrude Contemporary'),
      image('https://thecommercialgallery.com/images/thumbed/780_650_r_f6542107ce4a283ad6b1109ff85b2bf6.jpg', 'Black Dog', '© Archie Moore / photo Carl Warner', 'https://thecommercialgallery.com/artist/archie-moore/exhibition/394/black-dog/installation_view/6862', 'The Commercial'),
      image('https://creative.gov.au/sites/creative-australia/files/styles/hd/public/images/2025-03/Archie-kith-and-kin-yoast-2-1200x630-1-997x523.jpg.webp?itok=8B3o0aGZ', 'kith and kin — Australia Pavilion', '© Archie Moore', 'https://creative.gov.au/advocacy-and-research/events/archie-moore-kith-and-kin/', 'Creative Australia'),
    ], sourceLabel: 'Creative Australia', sourceUrl: 'https://creative.gov.au/advocacy-and-research/events/archie-moore-kith-and-kin/'
  },
  {
    id: 'mataaho-collective', name: 'Mataaho Collective', born: '2012', base: 'Aotearoa New Zealand',
    intro: '四位 Māori 女性艺术家以工业绑带、网、绳和纺织结构制作巨大空间织物，把 Māori weaving knowledge 与当代建筑尺度连接。',
    methods: ['大型纤维装置', '编织', '集体创作', '场域特定', '材料研究'], subjects: ['Māori知识', '女性劳动', '互助', '出生', '空间', '殖民'], outputs: ['大型装置', '纤维雕塑', '场域特定作品'], institutions: ['Venice Biennale', 'Gwangju Biennale', 'Biennale of Sydney', 'documenta'],
    achievements: ['Golden Lion for Best Participant, Venice Biennale 2024', '14th Gwangju Biennale 2023', 'documenta 14 participant'],
    whyImportant: 'Mataaho 的作品说明传统知识并不等于传统材料。她们用货运绑带、塑料网等工业材料重新推演 Māori weaving 的结构逻辑。',
    projects: [
      project('2013', 'Te Whare Pora', 'textile installation', ['以 faux mink blanket、satin、cotton 等材料工作。', '把女性编织空间与当代安装联系。'], '这是后来巨大纤维建筑的早期基础。'),
      project('2017', 'Kiko Moana', 'large-scale fibre installation', ['使用蓝色塑料防水布 / 网状材料。', '将海洋、亲属与织物结构联系。'], '廉价工业材料不是替代传统，而是把知识结构迁移到今天。'),
      project('2020', 'Atapō', 'mesh / steel / muka installation', ['钢、网、羊毛与 muka 共同形成悬挂结构。', '进入 Walters Prize 2021 语境。'], '材料之间的张力和共同承重本身就是 interdependence 的形式。'),
      project('2022', 'Takapau', 'woven cargo tie-down installation', ['使用反光货运绑带建立巨型悬挂网格。', '图案参照 takapau ceremonial mat。', '2024 在威尼斯 Arsenale 形成巨大空间覆盖。'], '技术知识、劳动工具、出生仪式和建筑空间被压在一个非常直接的材料动作里。'),
      project('2023', 'Tuakirikiri', 'Gwangju Biennale installation', ['为第14届光州双年展发展。', '继续以拉力、结和重复构造空间。'], '跨国双年展并没有让作品变成“全球化视觉”，核心仍是具体 Māori 结构知识。'),
      project('2025', 'Hautāmiro', 'new fibre work', ['延续共同制作与大型纤维空间实践。'], '适合连续看她们如何在十多年里让一个材料语言扩张，而不是每次换风格。'),
    ],
    images: [
      image('https://media.rnztools.nz/rnz/image/upload/s--xK7cXYK8--/t_kt-lifestyle-article-photo/w_7008/f_auto/q_auto%3Aeco/4KRKDAG_EP_06_NZatVenice_Mataaho_Collective_Takapau_ep_5_jpg', 'Takapau — Venice installation', '© Mataaho Collective / photo Ben Stewart', 'https://www.labiennale.org/en/art/2024/nucleo-contemporaneo/mataaho-collective', 'Venice Biennale / RNZ'),
      image('https://www.tepapa.govt.nz/assets/76067/1691036815-slideshow-te-whare-pora.jpg', 'Te Whare Pora', '© Mataaho Collective', 'https://mataahocollective.com/artworks', 'Mataaho Collective / Te Papa'),
      image('https://images.squarespace-cdn.com/content/v1/658220e996f1885a5bb3dac0/ecda1ed3-028a-4414-aeb0-a960f02f028f/gwang1.JPG', 'Tuakirikiri — Gwangju Biennale', '© Mataaho Collective', 'https://mataahocollective.com/artworks', 'Mataaho Collective'),
    ], sourceLabel: 'Mataaho Collective official', sourceUrl: 'https://mataahocollective.com/artworks'
  },
  {
    id: 'lorna-simpson', name: 'Lorna Simpson', born: '1960', base: 'New York',
    intro: '从无脸黑人女性肖像与冷静文字出发，逐渐扩展到录像、拼贴和绘画，持续拆解性别、种族、身体和档案观看。',
    methods: ['摄影 + 文本', '拼贴', '录像', '绘画', '档案挪用'], subjects: ['黑人女性', '身份', '身体', '记忆', '凝视', '媒体图像'], outputs: ['摄影装置', '录像', '拼贴', '绘画'], institutions: ['MoMA', 'Whitney Biennial', 'Sharjah Biennial'],
    achievements: ['MoMA collection', 'Sharjah Biennial 16 participant', 'Major museum survey exhibitions'],
    whyImportant: 'Simpson 很早就证明肖像可以通过“拒绝给脸”来工作。文字也不是说明照片，而是故意让图像变得更不稳定。',
    projects: [
      project('1989', 'Guarded Conditions', 'photo-text installation', ['重复拍摄黑人女性背部。', '身体被切分并与短语并置。'], '重复并没有加强身份识别，反而暴露我们如何自动给身体套上种族与性别解释。'),
      project('1994', 'Wigs', 'lithographs / text-image grid', ['假发图像与文字碎片形成档案式排列。', '身体缺席但身份编码仍然非常强。'], '这是“没有人像的人像”：身份通过替代物被生产。'),
      project('2001', 'Easy to Remember', 'video / sound installation', ['15 个嘴部特写哼唱同一首歌。', '声音和碎片身体组成集体记忆。'], '声音让身份从视觉分类转向呼吸、记忆和共同旋律。'),
      project('2010s–', 'Ebony / Jet archive collages', 'found-image collage', ['使用 Ebony、Jet 等黑人杂志历史图像。', '把头发、身体和地质/宇宙图像重新拼合。'], '档案不只被“展示”，而是通过切割产生新的身体。'),
    ],
    images: [
      image('https://d7hftxdivxxvm.cloudfront.net/?height=1431&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FUZlRYWd5xCxXtngW-4DnYQ%2Flarge.jpg&width=1919', 'Guarded Conditions', '© Lorna Simpson', 'https://www.moma.org/collection/artists/6602', 'MoMA / artist archive'),
      image('https://www.moma.org/d/c/installation_images/W1siZiIsIjUzMjgyMCJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA3MCAtcmVzaXplIDU5NHgzOTleIC1ncmF2aXR5IENlbnRlciAtY3JvcCA1OTR4Mzk5KzArMCJdXQ.jpg?sha=b6e3c10044632ba5', 'Wigs — installation', '© Lorna Simpson', 'https://www.moma.org/collection/artists/6602', 'MoMA'),
      image('https://static.livebooks.com/a5fe42e308a84253b5c69b5cb36cbd24/i/d84d73252bb64353814be722b9a38075/1/GCuCv726gZycFxatXh9yJ4/EasyToRemember_2001_LSimpson_UndergroundMuseumInstallation_Wide_PhotoCredit_JamesWang_72dpi_2560px.jpg', 'Easy to Remember — installation', '© Lorna Simpson / photo James Wang', 'https://lsimpsonstudio.com/films/easy-to-remember-2001', 'Lorna Simpson Studio'),
    ], sourceLabel: 'MoMA', sourceUrl: 'https://www.moma.org/collection/artists/6602'
  },
  {
    id: 'martha-rosler', name: 'Martha Rosler', born: '1943', base: 'Brooklyn / New York',
    intro: '把家庭内部、战争新闻、女性劳动、城市空间和纪录摄影本身变成批判对象，跨越 photomontage、录像、文本与社会项目。',
    methods: ['photomontage', '录像', '摄影 + 文本', '行为', '社会实践'], subjects: ['战争', '家庭', '女性劳动', '媒体', '城市', '纪录伦理'], outputs: ['拼贴', '录像', '摄影装置', '社会项目'], institutions: ['MoMA'],
    achievements: ['MoMA collection — 59 works online', 'Seminal feminist media-art practice'],
    whyImportant: 'Rosler 的关键不是“政治题材”，而是她总在拆观看系统：战争怎样通过家居杂志进入生活、纪录照片为什么仍然描述失败、厨房语言怎样变成暴力动作。',
    projects: [
      project('1967–72', 'House Beautiful: Bringing the War Home', 'photomontage', ['把越战新闻照片剪进美国理想家居广告。', '杂志图像成为原材料。'], '政治不是加在家庭生活外面；作品让两套媒体图像本来就依赖的意识形态直接碰撞。'),
      project('1974–75', 'The Bowery in two inadequate descriptive systems', 'photo-text grid', ['拍摄 Bowery 店面而不拍“典型流浪者”。', '与表示醉酒的词汇并置。'], '作品直接批判社会纪实摄影“代表别人”的权力。'),
      project('1975', 'Semiotics of the Kitchen', 'video performance', ['艺术家按字母顺序展示厨房工具。', '动作逐渐从示范变成攻击性表演。'], '教学录像格式被反转成关于女性家务角色的语言暴力。'),
      project('1989', 'If You Lived Here…', 'exhibition / social project', ['围绕住房、无家可归与城市政策组织艺术家、活动者和社区材料。', '展览本身成为公共论坛。'], '艺术家从“制作物件”推进到设计一个可以交换知识和政治行动的制度空间。'),
    ],
    images: [
      image('https://images.squarespace-cdn.com/content/v1/5eca6d601a267019b81cfd61/1630404611937-KABEBQT8IWQBQT7MZ0UN/Screenshot%2B2021-08-31%2B11.05.35.png', 'Red Stripe Kitchen — Bringing the War Home', '© Martha Rosler', 'https://www.moma.org/artists/6833-martha-rosler', 'MoMA / artist archive'),
      image('https://smarthistory.org/wp-content/uploads/2022/01/95.117.A-X_01_a02-Large-TIFF_4000-pixels-long-scaled.jpg', 'The Bowery in two inadequate descriptive systems', '© Martha Rosler', 'https://smarthistory.org/martha-rosler-the-bowery-in-two-inadequate-descriptive-systems/', 'Smarthistory'),
      image('https://www.moma.org/d/c/installation_images/W1siZiIsIjQ3NDEwNSJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA3MCAtcmVzaXplIDU5NHgzOTleIC1ncmF2aXR5IENlbnRlciAtY3JvcCA1OTR4Mzk5KzArMCJdXQ.jpg?sha=25c6c6fe42f9caa5', 'Semiotics of the Kitchen — MoMA installation context', '© Martha Rosler', 'https://www.moma.org/artists/6833-martha-rosler', 'MoMA'),
    ], sourceLabel: 'MoMA', sourceUrl: 'https://www.moma.org/artists/6833-martha-rosler'
  },
  {
    id: 'walid-raad', name: 'Walid Raad', born: '1967', base: 'New York / Beirut',
    intro: '用虚构档案、照片、笔记本、讲演和机构叙事研究黎巴嫩战争、艺术史与博物馆如何制造“可信历史”。',
    methods: ['虚构档案', '摄影', '文本', 'lecture-performance', '装置'], subjects: ['战争', '档案', '记忆', '博物馆', '事实与虚构', '中东艺术史'], outputs: ['摄影装置', '档案装置', '表演讲演', '书籍'], institutions: ['MoMA'],
    achievements: ['MoMA collection — 49 works online', 'MoMA solo exhibition 2015'],
    whyImportant: 'Raad 不是“伪造档案来骗人”，而是通过极其可信的格式迫使观众意识到：档案、博物馆和历史叙述本来就依靠选择、命名和权威。',
    projects: [
      project('1989–2004', 'The Atlas Group', 'fictional archive / research platform', ['建立一个虚构研究机构。', '创造档案人物、笔记本、录像和照片。', '真实战争资料与虚构叙述混在一起。'], '作品真正研究的是“什么格式会让我们相信历史是真的”。'),
      project('1999–2003', 'My Neck Is Thinner Than a Hair', 'car-bomb archive', ['收集并重构黎巴嫩内战汽车炸弹记录。', '照片、笔记和技术数据以档案样式展示。'], '灾难照片被从新闻刺激转成分类、重复和机构记忆问题。'),
      project('2004/08', 'Oh God, he said, talking to a tree', 'digital print series', ['从爆炸新闻图像中抽离烟尘形状。', '去掉原始场景，只留下爆炸云。'], '证据被削减之后，图像同时变得更抽象也更政治。'),
      project('2007–', 'Scratching on things I could disavow', 'installation / lecture-performance', ['研究阿拉伯现代艺术史、海湾博物馆和艺术市场。', '建筑模型、颜色、物件和表演讲演共同构造不稳定历史。'], '从战争档案转向“艺术机构本身怎样制造历史”。'),
    ],
    images: [
      image('https://www.christies.com/img/LotImages/2023/CKS/2023_CKS_22002_0036_000%28walid_raad_traders_81090011207%29.jpg?mode=max', 'Traders 8.10.90 — The Atlas Group', '© Walid Raad', 'https://www.moma.org/artists/8193-walid-raad', 'MoMA / Atlas Group context'),
      image('https://www.moma.org/d/assets/W1siZiIsIjIwMTUvMTEvMTkvMnA1aTdjc3d5bF8xMjg3NDEuanBnIl0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDkwIC1yZXNpemUgMjAwMHgyMDAwXHUwMDNlIl1d/128741.jpg?sha=5f84644622183fcb', 'The Atlas Group / car-bomb archive — MoMA exhibition', '© Walid Raad', 'https://www.moma.org/calendar/exhibitions/1493', 'MoMA'),
      image('https://www.icaboston.org/wp-content/uploads/2023/03/160223icawalidraad-850.png', 'Scratching on things I could disavow — installation', '© Walid Raad', 'https://www.icaboston.org/exhibitions/walid-raad/', 'ICA Boston'),
    ], sourceLabel: 'MoMA', sourceUrl: 'https://www.moma.org/artists/8193-walid-raad'
  },
  {
    id: 'boris-mikhailov', name: 'Boris Mikhailov', born: '1938', base: 'Kharkiv / Berlin',
    intro: '以手工染色、叠片、文本、快照和直接肖像持续记录苏联及后苏联社会，同时不断破坏“严肃纪实”的形式规范。',
    methods: ['纪实摄影', '手工染色', '叠片', '摄影书', '文本 + 图像'], subjects: ['苏联', '后苏联', '贫困', '身体', '日常生活', '国家'], outputs: ['摄影系列', '摄影书', '装置'], institutions: ['MoMA'],
    achievements: ['MoMA collection — 43 works online', 'MoMA Case History exhibition 2011', 'Hasselblad Award 2000'],
    whyImportant: 'Mikhailov 的作品很难被简单归为“社会纪实”：他反复用染色、双重投影、私人笔记和表演破坏摄影的中立感。',
    projects: [
      project('1968–75', 'Red Series', 'street / color motif archive', ['在苏联日常生活中追踪红色。', '政治色彩符号与普通场景并置。'], '一个颜色可以成为观察国家意识形态如何渗入生活的分类方法。'),
      project('1960s–70s', 'Yesterday’s Sandwich', 'slide superimposition', ['把两张彩色幻灯片叠在一起。', '私人、社会与身体图像发生偶然碰撞。'], '这是一种模拟时代的“图层”：不靠 Photoshop 就让两个现实互相污染。'),
      project('1984–85', 'Unfinished Dissertation', 'photo + handwritten text book', ['在照片之间加入手写笔记。', '普通日常影像被哲学化、讽刺化。'], '书不是承载照片的容器，而是文字和图像一起形成思想节奏。'),
      project('1997–98', 'Case History', 'staged / documentary portrait series', ['与 Kharkiv 无家者和边缘人群合作拍摄。', '许多姿势带有明确表演和交易关系。'], '这个项目的伦理争议本身值得研究：摄影的社会批判与权力不平等可以同时存在。'),
    ],
    images: [
      image('https://www.juliet-artmagazine.com/wp-content/uploads/2022/12/3_Yesterdays-Sandwich-1-1-scaled.jpeg', 'Yesterday’s Sandwich', '© Boris Mikhailov', 'https://www.juliet-artmagazine.com/en/boris-mikhailovs-ukraine/', 'Juliet Art Magazine'),
      image('https://www.moma.org/d/c/installation_images/W1siZiIsIjIxNTY0NCJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=fa1472f0507ec054', 'Case History — MoMA installation', '© Boris Mikhailov', 'https://www.moma.org/artists/8168-boris-mikhailov', 'MoMA'),
      image('https://www.christies.com/img/LotImages/2016/CKS/2016_CKS_13794_0055_000%28boris_mikhailov_case_history_1998013056%29.jpg?mode=max', 'Case History — individual work', '© Boris Mikhailov', 'https://www.moma.org/calendar/exhibitions/1165', 'MoMA / Christie’s documentation'),
    ], sourceLabel: 'MoMA', sourceUrl: 'https://www.moma.org/artists/8168-boris-mikhailov'
  },
  {
    id: 'armin-linke', name: 'Armin Linke', born: '1966', base: 'Berlin / Milan',
    intro: '用摄影、录像、访谈与档案研究科学机构、资源开采、图像基础设施和国家空间，把摄影变成调查复杂系统的工具。',
    methods: ['研究型摄影', '档案', '录像', '访谈', '空间装置'], subjects: ['基础设施', '科学', '海洋', '资源开采', '图像经济', '国家'], outputs: ['摄影', '多屏影像', '档案装置', '研究展览'], institutions: ['Berlin Biennale', 'Centre Pompidou'],
    achievements: ['13th Berlin Biennale 2025 participant', 'Image Capital — Centre Pompidou 2023–24'],
    whyImportant: 'Linke 特别适合研究“看不见的系统怎么拍”：他往往进入控制室、科学机构、海底采矿会议和档案后台，而不是寻找一个象征性的景观。',
    projects: [
      project('1999–2004', 'Alpi', 'photography / film research', ['跨阿尔卑斯地区拍摄旅游、技术、国家与景观。', '自然景观被作为基础设施和政治空间观察。'], '景观不是“自然风光”，而是一套被旅游、工程和国家管理的系统。'),
      project('2015–17', 'The Appearance of That Which Cannot Be Seen', 'archive + expert readings', ['邀请科学家、理论家和专家重新阅读照片档案。', '同一图像因专业知识而获得不同解释。'], '把“摄影意义”从作者手中部分交给不同知识系统。'),
      project('2017–25', 'Prospecting Ocean', 'multimedia research installation', ['进入海洋科研机构、联合国会议、深海采矿与行动者网络。', '摄影、录像、档案与访谈并置。'], '拍海洋真正重要的可能不是海面，而是决定海洋未来的会议室、机器人和法律文本。'),
      project('2022–24', 'Image Capital', 'research exhibition with Estelle Blaschke', ['研究图像如何成为工业、科学和自动化基础设施。', '历史档案与当代计算视觉系统并置。'], '把“图片太多”推进到更具体的问题：谁存储图像、谁计算图像、图像如何产生经济价值。'),
      project('2025', 'Negotiation Tables / Berlin Biennale context', 'installation / institutional research', ['进入第13届柏林双年展。', '围绕谈判、制度与政治空间继续发展研究型展示。'], '这条线适合观察研究摄影怎样在大型当代艺术双年展里转化为空间和文件系统。'),
    ],
    images: [
      image('https://d37vpt3xizf75m.cloudfront.net/api/file/zuHEXECdQoSNnOTvZCEP/convert?compress=true&fit=max&w=750', 'Prospecting Ocean — Columbia GSAPP', '© Armin Linke / installation view', 'https://www.arch.columbia.edu/exhibitions/147-prospecting-ocean', 'Columbia GSAPP'),
      image('https://medienwissenschaft.philhist.unibas.ch/fileadmin/user_upload/medienwissenschaft/Aktuelles/Image_Capital_im_Centre_Pompidou__2023_.jpeg', 'Image Capital — Centre Pompidou', '© Armin Linke / Estelle Blaschke', 'https://www.arminlinke.com/', 'Centre Pompidou / University of Basel'),
      image('https://www.studiointernational.com/images/articles/l/060-linke-armin-2021/AL_Appearance_1387.jpg', 'The Appearance of That Which Cannot Be Seen', '© Armin Linke', 'https://www.studiointernational.com/index.php/armin-linke-interview-we-have-to-look-at-different-categories-of-photography-artistic-practice-reframing-them', 'Studio International'),
    ], sourceLabel: 'Artist website', sourceUrl: 'https://www.arminlinke.com/'
  },
];
