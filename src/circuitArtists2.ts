import type { Artist, ArtworkImage, Project } from './data';

const image = (url: string, title: string, credit: string, sourceUrl: string, sourceLabel: string): ArtworkImage => ({ url, title, credit, sourceUrl, sourceLabel });
const project = (year: string, title: string, type: string, facts: string[], reading: string): Project => ({ year, title, type, facts, reading });

export const circuitArtists2: Artist[] = [
  {
    id: 'jeremy-deller', name: 'Jeremy Deller', born: '1966', base: 'London',
    intro: '把重演、音乐、游行、群众协作、档案和公共空间变成作品，让英国阶级史、流行文化和政治记忆通过真实的人际组织发生。',
    methods: ['社会实践', '参与式艺术', '重演', '档案', '影像', '公共艺术'], subjects: ['阶级', '劳动', '英国历史', '流行文化', '战争', '共同体'], outputs: ['行为 / 重演', '电影', '公共项目', '装置', '出版'], institutions: ['Turner Prize', 'Tate', 'Venice Biennale'],
    achievements: ['Turner Prize 2004 winner', 'British Pavilion, Venice Biennale 2013', 'Skulptur Projekte Münster 2017'],
    whyImportant: 'Deller 的作品常常没有传统意义上的“艺术物件”。真正的创作动作是组织谁参与、怎样重演、把什么社会记忆带回公共空间，以及如何留下电影、口述史或档案。',
    projects: [
      project('1997', 'Acid Brass', '音乐 / 社会关系', ['邀请 Williams Fairey Brass Band 演奏 acid house 与 rave 曲目。', '把英国北方工人阶级铜管传统和 1980–90 年代舞曲文化并置。'], '这里“挪用”不是拿一张图，而是让两种社会群体和音乐历史真正碰面。'),
      project('2001', 'The Battle of Orgreave', '历史重演 / 电影', ['组织约千名参与者重演 1984 年矿工罢工冲突。', '邀请矿工、警察与 historical reenactment societies 参与。', '事件同时被拍成电影并留下口述与档案。'], '作品不是复制历史现场，而是让仍在世的参与者重新进入一段尚未结束的社会记忆。'),
      project('2009', 'It Is What It Is', '公共对话 / 路演', ['把在巴格达炸毁的汽车拖行美国。', '由伊拉克公民、美国退伍军人等参与公开谈话。'], '物件只是触发器，真正作品是它沿途制造的对话。'),
      project('2012', 'Sacrilege', '公共雕塑 / 参与', ['制作真人尺度充气 Stonehenge。', '允许公众进入、跳跃和使用。'], '把国家遗产从不可触碰纪念物变成集体身体游戏。'),
      project('2013', 'English Magic', 'British Pavilion / 多媒介展览', ['为英国馆制作电影、壁画、横幅与档案式并置。', '高低文化、政治新闻、音乐和英国民间想象被压进同一个展览。'], '国家馆不是“代表英国最好的一面”，而成为英国社会矛盾的蒙太奇。'),
    ],
    images: [
      image('https://publicdelivery.org/wp-content/uploads/2013/07/jeremy-deller-the-battle-of-orgreave-31.jpg', 'The Battle of Orgreave — reenactment', '© Jeremy Deller / photo Martin Jenkinson', 'https://publicdelivery.org/jeremy-deller-the-battle-of-orgreave/', 'Public Delivery'),
      image('https://www.themoderninstitute.com/img/66d88b79cd9db-large.jpg', 'I searched for form and land; For years and years I roamed', '© Jeremy Deller / banner by Ed Hall', 'https://www.themoderninstitute.com/artists/jeremy-deller/works/i-searched-for-form-and-land-for-years-and-years-i-roamed-2013/1821/', 'The Modern Institute'),
    ], sourceLabel: 'The Modern Institute / British Council', sourceUrl: 'https://www.themoderninstitute.com/artists/jeremy-deller'
  },
  {
    id: 'helen-marten', name: 'Helen Marten', born: '1985', base: 'London',
    intro: '把雕塑、绘画、文字、视频和日常物件压成高度密集的语法系统，反复追问物体为什么会被我们理解成某种东西。',
    methods: ['雕塑', '装置', 'assemblage', '绘画', '文本', '现成物'], subjects: ['语言', '物件', '消费', '身体', '技术', '意义生产'], outputs: ['雕塑', '大型装置', '绘画', '视频'], institutions: ['Turner Prize', 'Tate', 'Venice Biennale'],
    achievements: ['Turner Prize 2016 winner', 'Hepworth Prize for Sculpture 2016', '56th Venice Biennale participant 2015'],
    whyImportant: 'Marten 最值得研究的不是“奇怪物件很多”，而是她怎样让材料、文字和图像像句子一样互相修饰。作品经常处在熟悉与不可读之间。',
    projects: [
      project('2012', 'No Borders in a Wok that Can’t Be Crossed', '雕塑 / 展览', ['把消费物、机械结构与手工材料混成难以命名的复合物。'], '她让我们意识到“认出一个东西”本身就是一种语言习惯。'),
      project('2015', 'Lunar Nibs', 'Venice installation', ['木材、钢、陶瓷、鞋底、橡胶、织物等被组合成多部件雕塑。', '作品进入第56届威尼斯双年展。'], '大量材料没有被统一成一个象征，而是维持一种过度信息的状态。'),
      project('2015', 'Drunk Brown House', '沉浸式装置', ['小型建筑、家具、工具和半功能结构被拼成像工作台又像住宅的环境。'], '空间像一个无法完成的使用说明书。'),
      project('2016', 'Eucalyptus, Let Us In', 'Turner Prize exhibition', ['把绘画、雕塑和日常材料组织成复杂展场。', '同年获得 Turner Prize。'], '奖项语境里最重要的仍不是主题标签，而是她让材料之间持续发生语言关系的能力。'),
    ],
    images: [
      image('https://static.a-n.co.uk/wp-content/uploads/2016/03/FENT__1458544342_HQ18-HM11169S_Lunar_Nibs_01.jpg', 'Lunar Nibs', '© Helen Marten / photo Annik Wetter', 'https://www.a-n.co.uk/media/52443786/', 'a-n'),
      image('https://news.artnet.com/app/news-upload/2016/09/Helen-Marten-2016-1.jpg', 'Turner Prize 2016 — installation view', '© Helen Marten', 'https://news.artnet.com/art-world/turner-prize-2016-exhibition-review-671120', 'Artnet News'),
    ], sourceLabel: 'Sadie Coles HQ', sourceUrl: 'https://www.sadiecoles.com/artists/helen-marten/'
  },
  {
    id: 'charlotte-prodger', name: 'Charlotte Prodger', born: '1974', base: 'Glasgow',
    intro: '使用手机录像、声音、文字、风景和不同摄影设备，把酷儿身份、自传、命名和技术媒介本身编进缓慢的影像。',
    methods: ['手机影像', '录像', '声音', '文本', '档案', '设备研究'], subjects: ['酷儿身份', '风景', '记忆', '语言', '技术', '亲密关系'], outputs: ['单频道录像', '影像装置', '雕塑', '文本'], institutions: ['Turner Prize', 'Venice Biennale', 'Bergen Kunsthall'],
    achievements: ['Turner Prize 2018 winner', 'Scotland + Venice 2019'],
    whyImportant: 'Prodger 把“用 iPhone 拍”从低成本工具变成作品结构：设备的便携性、定位、亲密距离和画幅都会改变自传如何被讲述。',
    projects: [
      project('2015', 'Stoneymollan Trail', '录像 / 自传三部曲 I', ['以旅行、地名和声音片段组织个人记忆。', '不同设备拍摄的图像被保留其差异。'], '自传不是按年份讲故事，而是由地点、技术和身体记忆断裂地连接。'),
      project('2016', 'BRIDGIT', '单频道录像 / 自传三部曲 II', ['大量素材由智能手机拍摄。', 'voice-over 穿过 queer history、地质、命名和私人经验。'], '手机图像的“普通”与复杂文本形成很重要的张力。'),
      project('2017', 'Subtotal', 'survey / video installation', ['多个影像作品被放进 SculptureCenter 空间重新组织。'], '可以观察影像作品如何通过座椅、屏幕、音箱和建筑成为空间作品。'),
      project('2019', 'SaF05', 'Scotland + Venice / 自传三部曲 III', ['使用电影摄影机、camera trap、drone 和手机。', '以一只长鬃母狮的数据库记录连接 queer attachment、土地和自传。'], '不同成像机器对应不同观看权力：监测动物、记录自我、测绘土地不是同一种观看。'),
    ],
    images: [
      image('https://dailyartfair.com/upload/large/5727_5-Charlotte-Prodger-Hollybush-Gardens.jpg', 'BRIDGIT — installation view', '© Charlotte Prodger', 'https://dailyartfair.com/exhibition/5727/charlotte-prodger-hollybush-gardens', 'Daily Art Fair / Hollybush Gardens'),
      image('https://d7hftxdivxxvm.cloudfront.net/?height=900&quality=80&resize_to=fill&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FyK1-SfvypVdYnuEPgggJNg%2Flarger.jpg&width=1200', 'Subtotal — installation view', '© Charlotte Prodger', 'https://www.artsy.net/show/sculpturecenter-charlotte-prodger-subtotal', 'SculptureCenter / Artsy'),
    ], sourceLabel: 'Scotland + Venice', sourceUrl: 'https://scotlandandvenice.com/project/charlotte-prodger/'
  },
  {
    id: 'lawrence-abu-hamdan', name: 'Lawrence Abu Hamdan', born: '1985', base: 'Beirut / Dubai',
    intro: '把听觉证词、法庭证据、监狱记忆、口音与建筑声学转化成影像、装置和研究，常把自己称作“private ear”。',
    methods: ['声音艺术', '法证研究', '影像装置', 'field recording', 'lecture-performance', '档案'], subjects: ['证据', '边界', '监狱', '国家暴力', '倾听', '人权'], outputs: ['声音装置', '录像', '研究档案', '雕塑'], institutions: ['Turner Prize', 'Tate', 'Venice Biennale'],
    achievements: ['Turner Prize 2019 joint winner', 'Abraaj Group Art Prize 2018', 'Venice Biennale 2019 participant'],
    whyImportant: 'Abu Hamdan 把“声音”从氛围变成证据系统。作品中的录音、回声、物件和证词都有非常具体的调查任务。',
    projects: [
      project('2012', 'The Freedom of Speech Itself', '口音分析 / 法证声音', ['研究移民程序中的 accent analysis。', '把语音学与政治边界连接。'], '声音不是身份的自然证据，而可能被国家技术加工成分类工具。'),
      project('2016', 'Earshot', '声音证据 / 调查', ['研究 2014 年约旦河西岸两名青少年遭枪击事件。', '通过枪声声学分析质疑官方弹药叙述。'], '艺术与调查在这里真正重叠：声音分析进入公共证据讨论。'),
      project('2016', 'Saydnaya (The Missing 19db)', '监狱 / 耳证词', ['与幸存者合作重建叙利亚 Saydnaya 监狱的声音记忆。', '声音降低被量化成暴力条件。'], '无法拍摄的场所可以通过听觉记忆被部分重建，但作品同时保留记忆的不确定性。'),
      project('2018', 'Walled Unwalled', '录像 / 建筑声学', ['在前东德录音棚中讲述穿墙获得证据的法律案件。', '玻璃、墙体与录音空间成为叙事的一部分。'], '“墙”同时是建筑、国境和法律定义。'),
      project('2018–', 'Earwitness Inventory / After SFX', '声音物件档案', ['根据法律证词中描述的声音制造、寻找和分类物件。'], '把抽象的听觉比喻转成可摆放、可比较的实体档案。'),
    ],
    images: [
      image('https://files.ocula.com/anzax/Content/Conversations/Abu%20Hamdan/WalledUnwalled2018LawrenceAbuHamdanAbraajGroupArtPrizeWinner2018CourtesyofPhotoSolutions_1200_0.jpg', 'Walled Unwalled — installation', '© Lawrence Abu Hamdan', 'https://ocula.com/magazine/conversations/lawrence-abu-hamdan/', 'Ocula'),
      image('https://www.dreamideamachine.com/web/wp-content/uploads/2018/09/02.-Lawrence-Abu-Hamdan_Earshot_2016-1618x1080.jpg', 'Earshot — installation', '© Lawrence Abu Hamdan', 'https://www.dreamideamachine.com/?p=40205', 'Dream Idea Machine'),
    ], sourceLabel: 'Artist / Venice research archive', sourceUrl: 'https://lawrenceabuhamdan.com/'
  },
  {
    id: 'tai-shani', name: 'Tai Shani', born: '1976', base: 'London',
    intro: '把女性主义科幻、神话、舞台、写作、雕塑和表演融合成高饱和度的世界建构，用虚构社会测试另一种性别与权力秩序。',
    methods: ['表演', '沉浸式装置', '雕塑', '写作', '影像', '世界建构'], subjects: ['女性主义', '神话', '欲望', '性别', '后父权社会', '科幻'], outputs: ['大型装置', '表演', '文本', '影像'], institutions: ['Turner Prize', 'Somerset House'],
    achievements: ['Turner Prize 2019 joint winner'],
    whyImportant: 'Shani 的“幻想”不是逃离现实，而是用另一套角色、身体和制度重新排练现实。舞台、灯光、文本和表演共同组成政治想象。',
    projects: [
      project('2014–19', 'DC: Semiramis', '长期表演 / 装置世界', ['受 Christine de Pizan《The Book of the City of Ladies》启发。', '创造多个女性角色并由表演、雕塑、文本持续扩展。'], '长期项目不是一个固定系列，而是一个不断增殖的世界。'),
      project('2019', 'Our Fatal Magic', '小说 / 项目文本', ['把项目角色和宇宙延伸为写作。'], '文本不是作品说明，而是和装置平行生产世界的媒介。'),
      project('2021', 'The Neon Hieroglyph', '五部影像 / 沉浸式装置', ['以 ergot fungus、集体幻觉、历史和气候想象为线索。', '影像、布景、声音和雕塑共同工作。'], '历史研究可以通过极端感官形式出现，而不一定长成档案墙。'),
      project('2023–', 'The Blue Figure', '绘画 / 装置 /写作', ['继续发展身体、死亡、政治和幻想世界。'], '她并不依赖一种媒介维持作者性，而靠世界观和叙事逻辑维持。'),
    ],
    images: [
      image('https://rca-media2.rca.ac.uk/images/00_tai-shani-dc-semiramis-2019-ins.2ef68361.fill-880x660.png', 'DC: Semiramis — Turner Prize installation', '© Tai Shani', 'https://www.rca.ac.uk/news-and-events/news/turner-prize-2019-rca-staff-and-alumni-create-bold-commentary-on-turbulent-times/', 'Royal College of Art'),
      image('https://media.somersethouse.org.uk/images/Installation_view_of_Tai_Shanis_The_Neon_Heiro.width-800_uCuKKcoBYUmv9ryE.jpg', 'The Neon Hieroglyph — installation', '© Tai Shani', 'https://www.somersethouse.org.uk/whats-on/tai-shani-the-neon-hieroglyph', 'Somerset House'),
    ], sourceLabel: 'Royal College of Art / artist archive', sourceUrl: 'https://www.rca.ac.uk/more/staff/tai-shani/'
  },
  {
    id: 'tacita-dean', name: 'Tacita Dean', born: '1965', base: 'Berlin / Los Angeles',
    intro: '坚持使用 16mm/35mm 胶片、黑板画、摄影和印刷，在消失、偶然、时间与媒介物质性之间建立极慢的观看。',
    methods: ['16mm胶片', '35mm胶片', '绘画', '摄影', 'found image', '装置'], subjects: ['时间', '消失', '偶然', '电影媒介', '海洋', '记忆'], outputs: ['胶片装置', '大型绘画', '摄影', '版画'], institutions: ['Turner Prize', 'Tate'],
    achievements: ['Turner Prize 1998 nominee', 'Tate Modern Turbine Hall: FILM 2011', 'Hugo Boss Prize 2006'],
    whyImportant: 'Dean 特别适合研究“媒介为什么必须是这个媒介”。她坚持 photochemical film 不是怀旧，而是因为曝光、剪辑、放映和物理胶片本身决定作品时间。',
    projects: [
      project('1996', 'Disappearance at Sea', '16mm film', ['从海上失踪者 Donald Crowhurst 的故事出发。', '在灯塔等地点拍摄，依靠真实光线和胶片。'], '叙事被压到极少，灯光和等待本身变成时间经验。'),
      project('1999', 'Banewl', '长时段胶片 / 日食', ['在英国农场拍摄 1999 年日食当天。', '事故与等待被保留。'], '偶然不是要被剪掉的失败，而是作品的时间结构。'),
      project('2011', 'FILM', 'Turbine Hall 35mm installation', ['为 Tate Modern Turbine Hall 制作大型垂直胶片投影。', '直接回应建筑与数字化时代的胶片媒介。'], '作品把“电影屏幕”变成建筑尺度的光学物体。'),
      project('2014', 'Event for a Stage', '剧场 / 影像', ['让表演者在剧场、文本与摄像机之间不断改变角色。'], '舞台和记录之间的边界本身成为作品。'),
      project('2018', 'Antigone', '双幅 35mm anamorphic film', ['使用 masking、multiple exposure 等模拟胶片技术。', '两条画面像物理胶片带并行。'], '复杂视觉并非后期特效，而是直接写入胶片曝光流程。'),
    ],
    images: [
      image('https://static-assets.artlogic.net/w_1680%2Ch_1680%2Cc_limit%2Cf_auto%2Cfl_lossy%2Cq_auto/artlogicstorage/mariangoodman/images/view/944ee30632d0d6d1155e77d570b82aeaj.jpg', 'Disappearance at Sea — film still', '© Tacita Dean', 'https://www.mariangoodman.com/artists/39-tacita-dean/works/39446/', 'Marian Goodman'),
      image('https://static-assets.artlogic.net/w_1600%2Ch_1600%2Cc_limit%2Cf_auto%2Cfl_lossy%2Cq_auto/artlogicstorage/frithstreetgallery/images/view/031548a5dd2b12ac111b6dae3570d36dj/frithstreetgallery-tacita-dean-antigone-2018.jpg', 'Antigone — installation', '© Tacita Dean', 'https://www.frithstreetgallery.com/artworks/18315-tacita-dean-antigone-2018/', 'Frith Street Gallery'),
    ], sourceLabel: 'Marian Goodman', sourceUrl: 'https://www.mariangoodman.com/artists/39-tacita-dean/'
  },
  {
    id: 'isaac-julien', name: 'Isaac Julien', born: '1960', base: 'London / Santa Cruz',
    intro: '以多屏电影、档案与精密布景处理黑人酷儿历史、迁移、奴隶制记忆和影像政治，把电影剪辑扩展到整个展览空间。',
    methods: ['多屏影像', '电影', '档案', '重演', '编排式影像', '空间装置'], subjects: ['黑人历史', '酷儿身份', '迁移', '离散', '废奴', '记忆'], outputs: ['多屏装置', '电影', '摄影', '出版'], institutions: ['MoMA', 'Tate', 'Turner Prize'],
    achievements: ['Turner Prize 2001 nominee', 'Tate Britain major survey 2023', 'MoMA collection'],
    whyImportant: 'Julien 不是把电影放进美术馆而已；他通过多块屏幕把剪辑从时间关系变成观众在空间中的移动关系。',
    projects: [
      project('1989', 'Looking for Langston', 'film / Black queer archive', ['重构 Harlem Renaissance 与 Langston Hughes 周围的黑人酷儿想象。', '档案、编排场景和诗歌并置。'], '历史不是被复原，而是被当代欲望重新观看。'),
      project('2007', 'Western Union: Small Boats', 'migration / multi-screen film', ['围绕地中海迁移与危险海路。', '诗性风景和现实迁移历史并置。'], '视觉美感与政治暴力被故意放在同一画面系统中。'),
      project('2010', 'Ten Thousand Waves', '九屏影像装置', ['从 2004 年 Morecambe Bay 中国拾贝工人死亡事件出发。', '中国历史、神话、电影与迁移记忆交错。'], '多个时间层不是通过解释文字，而是通过屏幕之间的同步与错位连接。'),
      project('2019', 'Lessons of the Hour', '十屏 Frederick Douglass project', ['重演 Frederick Douglass 的演说、摄影和旅行。', '十块屏幕同时处理历史肖像、演讲与今天的观看。'], '历史人物不是“传记片对象”，而被做成一套关于摄影、自由和公众形象的媒介研究。'),
      project('2022', 'Once Again… (Statues Never Die)', '多屏影像 / 博物馆史', ['围绕 Alain Locke、Albert Barnes 与非洲艺术进入西方博物馆的历史。'], '作品把“谁有权收藏和命名”直接变成影像叙事结构。'),
    ],
    images: [
      image('https://www.domusweb.it/content/dam/domusweb/en/art/2012/02/09/ten-thousand-waves/big_373862_4615_02_web_3-TEN-THOUSAND-WAVES1.jpg.foto.rmedium.jpg', 'Ten Thousand Waves — installation', '© Isaac Julien', 'https://www.domusweb.it/en/art/2012/02/09/ten-thousand-waves.html', 'Domus'),
      image('https://ids.si.edu/ids/deliveryService?id=SAAM-2023.42_3&max=640', 'Lessons of the Hour — installation', '© Isaac Julien', 'https://americanart.si.edu/artwork/lessons-hour-120652', 'Smithsonian American Art Museum'),
    ], sourceLabel: 'Isaac Julien Studio / MoMA', sourceUrl: 'https://www.isaacjulien.com/'
  },
  {
    id: 'zoe-leonard', name: 'Zoe Leonard', born: '1961', base: 'New York',
    intro: '从 AIDS 哀悼、城市小店、全球旧货流通到边境河流，以摄影、系列编排和缓慢材料变化研究观看、失去与全球化。',
    methods: ['长期摄影', '序列', 'found object', '装置', '档案', '模拟摄影'], subjects: ['哀悼', '全球化', '城市变化', '劳动', '边境', '摄影媒介'], outputs: ['摄影装置', '雕塑', '摄影书', '大型序列'], institutions: ['MoMA', 'Whitney Museum'],
    achievements: ['MoMA: Analogue 2015', 'Whitney Museum retrospective 2018'],
    whyImportant: 'Leonard 展示了长期摄影如何从“记录一个地方”逐渐变成物流、全球化和摄影技术本身的研究；同时她也能用极简单材料处理死亡与照护。',
    projects: [
      project('1992–97', 'Strange Fruit', '缝合果皮 / 哀悼装置', ['保存吃剩的果皮并以针线、金属等缝合。', '允许有机材料继续腐败。'], '修复动作注定无法阻止腐烂，因此照护与失去同时存在。'),
      project('1998–2009', 'Analogue', '412张照片 / 25章节', ['用 Rolleiflex 长期拍摄纽约小店与商品。', '追踪旧衣和商品进入非洲、东欧、古巴、墨西哥和中东的再流通。', '最终 412 张照片组成 25 章。'], '从街头摄影出发，却逐渐变成全球商品循环与模拟摄影消失的双重档案。'),
      project('2008', 'You see I am here after all', '明信片档案装置', ['收集数千张 Niagara Falls 明信片。', '以巨大墙面阵列展示复制景观。'], '景观被重复到几乎消失，重点变成大众图像工业。'),
      project('2016–22', 'Al río / To the River', '边境河流 / 长期摄影', ['沿 Rio Grande / Río Bravo 长期拍摄。', '河流同时是生态体、国界和政治想象。'], '不把边境缩成新闻事件，而让水、土地、警戒和日常持续共存。'),
    ],
    images: [
      image('https://burlington.org.uk/media/w1200/bc_general/quabeck-strangefruit-fig01.jpg?auto=format&fit=crop&ixid=eyJhcHBfaWQiOjEyMDd9&ixlib=rb-0.3.5&q=80&s=3566466d76117e29ffb4160a639748fb&w=1502', 'Strange Fruit — installation', '© Zoe Leonard', 'https://contemporary.burlington.org.uk/journal/journal/intent-in-the-making-the-life-of-zoe-leonards-strange-fruit', 'Burlington Contemporary'),
      image('https://images.squarespace-cdn.com/content/v1/68d15644d62f4574834551a4/ab62d869-6fb5-49a3-878a-e533517406d0/Screenshot%2B2025-10-02%2Bat%2B9.57.21%E2%80%AFAM.png', 'You see I am here after all — installation', '© Zoe Leonard', 'https://www.girlfriendfund.org/exhibitions/zoe-leonard-exhibition', 'Exhibition documentation'),
    ], sourceLabel: 'MoMA', sourceUrl: 'https://www.moma.org/artists/3533-zoe-leonard'
  },
  {
    id: 'an-my-le', name: 'An-My Lê', born: '1960', base: 'New York',
    intro: '以大画幅摄影处理战争、军事训练、国家景观和越南离散经验，常在真实军事活动、战争重演和普通风景之间保持故意的不确定性。',
    methods: ['大画幅摄影', '长期项目', '景观摄影', '战争重演', '纪实摄影'], subjects: ['战争', '军事', '离散', '景观', '国家', '再现'], outputs: ['大型摄影', '摄影书', '展览装置'], institutions: ['MoMA'],
    achievements: ['MoMA: Between Two Rivers 2023–2024', 'MacArthur Fellowship 2012'],
    whyImportant: 'Lê 不去追逐战场“决定性瞬间”，而是研究战争如何被训练、想象、重演、纪念并嵌入普通景观。',
    projects: [
      project('1994–98', 'Viêt Nam', '返乡 / 景观', ['在离开越南多年后重新返回拍摄。', '以大画幅观察乡村、城市与记忆。'], '返乡项目避免简单自传，通过景观距离处理记忆与陌生感。'),
      project('1999–2002', 'Small Wars', '战争重演摄影', ['跟随美国越战 reenactors。', '艺术家既观察也参与部分重演。'], '虚构战争和历史记忆在摄影里变得难以分开。'),
      project('2003–04', '29 Palms', '美军训练 / 景观', ['进入加州军事基地拍摄伊拉克战争训练。', '真实军队在美国景观中模拟另一地区战争。'], '“战争前的排练”让摄影避开新闻现场，却更直接揭示战争的生产机制。'),
      project('2005–14', 'Events Ashore', '全球军事 / 海岸线', ['长期跟随美国海军活动与全球港口。'], '军力通过物流、基础设施和海岸风景出现，而不只通过战斗。'),
      project('2015–', 'Silent General', '美国政治景观 / 长期项目', ['以报纸式章节结构处理纪念碑、抗议、军事与美国地方。'], '作品把当代政治拆成彼此不完全相连的视觉“报道章节”。'),
      project('2023', 'Fourteen Views', '墙面摄影 / MoMA commission', ['14 组 wallpaper / panel 结构在 MoMA 展览中连接多个项目。'], '回顾展不只是按年份挂照片，而是让不同时间的战争景观在同一空间互相回应。'),
    ],
    images: [
      image('https://images.squarespace-cdn.com/content/v1/5b918ae2ee1759aa80ba1ba5/1701801969977-V8W0K55JVAERRKPHBBT4/IN2544_014_CCCR-Press%2BSite.jpeg?format=1000w', 'Between Two Rivers — MoMA installation', '© An-My Lê / installation view', 'https://anmyle.com/exhibitions', 'An-My Lê Studio'),
      image('https://d7hftxdivxxvm.cloudfront.net/?height=553&quality=50&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F7drgwkbRBYWvms05SAo7WQ%2Fnormalized.jpg&width=800', 'Small Wars — work', '© An-My Lê', 'https://www.moma.org/artists/7901-an-my-le', 'MoMA / collection context'),
    ], sourceLabel: 'MoMA', sourceUrl: 'https://www.moma.org/artists/7901-an-my-le'
  },
  {
    id: 'akram-zaatari', name: 'Akram Zaatari', born: '1966', base: 'Beirut',
    intro: '以摄影档案、录像、found media 和研究型装置处理黎巴嫩战争、私人照片、影像保存与记忆如何被机构化。',
    methods: ['档案', '摄影', '录像', 'found image', '研究型装置', '文本'], subjects: ['记忆', '战争', '摄影史', '黎巴嫩', '私人影像', '档案制度'], outputs: ['录像装置', '摄影', '档案装置', '书籍'], institutions: ['MoMA', 'Venice Biennale'],
    achievements: ['Lebanon Pavilion, Venice Biennale 2013', 'Arab Image Foundation co-founder', 'MoMA Projects 100, 2013'],
    whyImportant: 'Zaatari 最值得研究的是“保存照片”如何本身变成创作问题：谁收集、谁描述、私人照片离开家庭后发生什么、档案是否真的能保存记忆。',
    projects: [
      project('2003', 'This Day (Al Yaoum)', '影像 / 战争记忆', ['把 1982 年战争与多年后的个人、电视和城市影像重新联系。'], '“某一天”被处理成不断被后来图像改写的记忆节点。'),
      project('2005', 'In This House', '调查 / buried document', ['追踪一封在战争期间埋入花园的信。', '采访、挖掘与录像共同构成调查。'], '私人纸张成为战争历史与土地所有关系的实物证据。'),
      project('2010', 'On Photography, People and Modern Times', '双频道摄影档案研究', ['重新组织 Arab Image Foundation 早期收集的摄影档案。'], '档案保存不是中性的，重新分类会改变照片的社会意义。'),
      project('2010', 'Tomorrow Everything Will Be Alright', '录像 / typewriter dialogue', ['以老式打字机打出一段关于分离与重逢的对话。'], '极少视觉信息让机械输入、时间和语言本身承担情感。'),
      project('2013', 'Letter to a Refusing Pilot', 'Lebanon Pavilion installation', ['从一个关于以色列飞行员拒绝轰炸学校的传闻与艺术家童年记忆出发。', '录像、照片、建筑模型和阅读空间共同组成。'], '事实、传闻、个人记忆和国家战争史被故意保持在无法完全验证的关系中。'),
    ],
    images: [
      image('https://listart.mit.edu/sites/default/files/styles/open_graph_image/public/media/images/exhibitions/2012_akram_zaatari_tomorrow_install.jpg.webp?h=5f675219&itok=aATD6Gww', 'Tomorrow Everything Will Be Alright — installation', '© Akram Zaatari', 'https://listart.mit.edu/exhibitions/akram-zaatari-tomorrow-everything-will-be-alright', 'MIT List Visual Arts Center'),
      image('https://www.klatmagazine.com/wp-content/uploads/2013/07/Klat_LEBANON_PAVILLION_259_2.jpg', 'Letter to a Refusing Pilot — Lebanon Pavilion', '© Akram Zaatari', 'https://www.klatmagazine.com/art/biennale-arte-2013-diario-06-libano/9472', 'Venice documentation / Klat'),
    ], sourceLabel: 'MoMA', sourceUrl: 'https://www.moma.org/artists/41278-akram-zaatari'
  },
  {
    id: 'arthur-jafa', name: 'Arthur Jafa', born: '1960', base: 'Los Angeles',
    intro: '以高速 found-footage 蒙太奇、电影、摄影拼贴和大型影像处理 Black visuality，追问视觉媒介能否拥有黑人音乐那样的情感强度。',
    methods: ['found footage', '蒙太奇', '录像', '影像装置', '拼贴', '档案'], subjects: ['Blackness', '音乐', '媒体', '暴力', '历史', '情感'], outputs: ['录像', '大型装置', '摄影拼贴', '书 / binder'], institutions: ['MoMA', 'Venice Biennale', 'Tate'],
    achievements: ['Golden Lion for Best Participant, Venice Biennale 2019', 'MoMA collection — 6 works online', 'Artist’s Choice: Less Is Morbid, MoMA 2025–2026'],
    whyImportant: 'Jafa 的核心不只是“剪很多网络视频”，而是把图像的情感电荷当作材料，通过极端并置测试黑人经验如何在主流视觉文化里被生产、消费和重新拥有。',
    projects: [
      project('2013', 'APEX', 'found-image montage', ['大量静态图像以快速节奏连续出现。', '宗教、流行文化、历史暴力、身体和黑人视觉材料并置。'], '意义不来自一张图，而来自下一张图出现时对上一张的重新解释。'),
      project('2016', 'Love Is the Message, The Message Is Death', '7分25秒录像蒙太奇', ['把新闻、手机视频、体育、音乐录像和历史图像剪成高强度序列。'], '观看者的情绪被速度、音乐和图像冲突直接组织。'),
      project('2018', 'The White Album', '29分55秒录像', ['收集关于 whiteness、网络文化、暴力与自我表述的影像。', '2019 威尼斯展出并获金狮奖。'], '作品不是对“白人”的单一论断，而是让互相矛盾的自我影像彼此暴露。'),
      project('2021', 'AGHDRA', 'CGI landscape / video', ['生成黑色岩石海与数字太阳的持续景观。', '从快速 found footage 转向几乎无人物的缓慢 CGI。'], '作者性没有依赖一种剪辑风格；同一问题可以从信息过载转到极慢景观。'),
      project('2025–26', 'Artist’s Choice: Less Is Morbid', 'MoMA collection exhibition / artist-curated', ['从 MoMA 馆藏选择 80 多件作品重新建立关系。'], '艺术家开始直接重排博物馆艺术史，这也是其 montage 方法向机构尺度的扩张。'),
    ],
    images: [
      image('https://images.ctfassets.net/cmz556ev1x99/4T75gQuGV0wECrlEG2n4Jr/eb14a95aca492bd4af93de2513c468c7/AJ_TWA_Venice_Biennale_2019_p.jpg?fl=progressive&fm=jpg&h=1333&q=100&w=2000', 'The White Album / Venice Biennale installation context', '© Arthur Jafa', 'https://gladstonegallery.com/artist/arthur-jafa/', 'Gladstone Gallery'),
      image('https://cdn.sanity.io/images/syotmk9q/production/1d625d5f12b2902b4dc166c14e4ed558222f2b2b-1280x853.jpg?auto=format&fit=clip&q=70&w=1080', 'AGHDRA — installation', '© Arthur Jafa', 'https://www.spikeartmagazine.com/articles/the-downward-spiral-five-years', 'Spike Art Magazine'),
    ], sourceLabel: 'MoMA / Gladstone Gallery', sourceUrl: 'https://www.moma.org/artists/69635-arthur-jafa'
  },
];
