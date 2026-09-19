import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

export const archiveBatch41: Record<string, ArtistArchive> = {
  'harley-weir': {
    artistId: 'harley-weir',
    projectCoverage: '7 个时尚 / 边境 / 暗房 / 手工纸节点已建立深档案 · 2013–2025',
    imageCoverage: '0 / 7 节点已有代表图像',
    note: 'Weir 最值得拆的是“触感怎么被制造出来”。她既使用非常靠近皮肤的相机距离，也会让照片在暗房中被血液、激素、香水、香料等材料重新破坏；到 The Garden 又进一步把私人信件、干花、蝴蝶翅膀直接压进手工纸。',
    projects: [
      {
        title: 'Fashion / editorial practice as visual laboratory', cluster: 'fashion / close distance / analogue + digital', period: '2013–现在',
        summary: 'Weir 的商业时尚与个人作品并不是两套完全分离语言。她长期使用近距离、身体裁切、强烈肤色 / 材质和不稳定构图，把服装委托变成测试 intimacy、female gaze 和视觉触感的现场。',
        actions: ['在人物与相机之间保持极近距离', '大量裁切脸 / 身体而非给完整全身信息', '同时使用 analogue 与 digital workflow', '在现场追求皮肤、布料、湿度和闪光之间的材质差异', '在暗房与 post-production 继续实验而非只做标准商业修图'],
        sourceUrl: 'https://hannahbarry.com/reopening/', images: [], relations: []
      },
      {
        title: 'Boundaries', cluster: 'first solo / intimacy / political + personal border', period: '2016–2017',
        summary: 'Foam 首个个展把时尚、私人身体和政治边境语境放在同一展览。标题并不是指一条具体国界，而是她反复缩短摄影师与对象之间距离，使私人 / 公共、时尚 / 纪实、身体 / 环境边界变得不稳定。',
        actions: ['从商业与个人档案中跨语境选图', '保持 close-to-the-skin 的拍摄距离', '并置模特空间与 politically charged border zone 图像', '不以文字替观众规定政治结论', '以视觉诗式 sequence 组织展览'],
        sourceUrl: 'https://www.foam.org/events/harley-weir', images: [],
        relations: [rel('展览', 'Boundaries — Foam Amsterdam', '2016–2017')]
      },
      {
        title: 'Homes', cluster: 'Calais / refugee camp / domestic detail / fast photobook production', period: '2016–2018',
        summary: '2016 年 10 月在 Calais “Jungle” 营地拆除前后约十天拍摄。她没有主要把相机对准宏观人群，而靠近临时住宅、室内和生活痕迹。项目随后几乎同步被编辑、设计和印成书，用于募款与提高关注。',
        actions: ['在 2016 年 10 月 17–28 日于 Calais 营地拍摄', '记录拆除前和拆除过程', '优先拍 domestic / intimate details', '与 Loose Joints 在约十天内同步编辑、排版和印刷首版', '初版 500 本迅速售出并用于募款', '2018 展览将 16 张图像印到 scaffolding fabric', '让临时建筑材料进入展览表面'],
        sourceUrl: 'https://loosejoints.studio/projects/homes', images: [],
        relations: [rel('出版', 'Homes — Loose Joints', '2016 / second edition 2018'), rel('展览', 'Brighton Photo Biennial — Fabrica', '2018')]
      },
      {
        title: 'Sins of a daughter', cluster: 'mother / daughter / womanhood / gallery edit', period: '2022',
        summary: '这一阶段把家庭、女儿 / 母亲位置、身体和性别经验进一步拉进个人实践，和她在时尚里生产的理想化身体形成反差。',
        actions: ['从私人身体 / 家庭经验出发选图', '跨既有档案与新作建立展览 sequence', '把身体局部与家庭关系并置', '在 Hannah Barry Gallery 的空间中以不同尺度组合'],
        sourceUrl: 'https://hannahbarry.com/exhibition/harley-weir-sins-of-a-daughter-9-april-7-may-2022/', images: [],
        relations: [rel('展览', 'Sins of a daughter — Hannah Barry Gallery', '2022')]
      },
      {
        title: 'Sickos', cluster: 'darkroom alchemy / bodily fluids / chemicals / abstraction', period: '2020–现在',
        summary: '疫情期间的暗房实验把“摄影后期”变成真正的化学破坏：血液、精液、维生素、健康补充剂、冻卵激素、避孕药、香水、香料、蝴蝶翅膀等材料与传统显影药液一起接触影像，原图被腐蚀、溶解或转成抽象结构。',
        actions: ['先制作 / 选择已有摄影图像', '在暗房中引入传统显影化学以外材料', '加入 blood / sperm / vitamins / hormones / contraceptive pill / perfume / spices 等', '让液体和颗粒直接作用于乳剂 / print surface', '接受不可预测的腐蚀和色彩变化', '不修复原始构图被吞噬的部分', '将 figurative image 逐步推向 abstraction'],
        sourceUrl: 'https://hannahbarry.com/wp-content/uploads/2025/06/PRESS-RELEASE-Harley-Weir-The-Garden.pdf', images: [], relations: []
      },
      {
        title: 'love at first sight', cluster: 'handmade paper / adolescent archive / embedded objects', period: '2025',
        summary: 'The Garden 楼上部分由 28 件新作构成。Weir 使用古老造纸技术，把数十年积累的干花、蝴蝶翅膀、青春期 memorabilia、90 年代末 / 2000 年代初写给朋友和恋人的信直接嵌入 handmade paper。',
        actions: ['回看青春期私人档案', '筛选 letters、dry flowers、butterfly wings 等实物', '制作 handmade paper pulp', '把旧照片 / 信件 / 物件压入纸纤维', '让 archive 不再只是被拍摄，而成为纸张内部材料', '形成 28 件独立新作'],
        sourceUrl: 'https://hannahbarry.com/wp-content/uploads/2025/06/PRESS-RELEASE-Harley-Weir-The-Garden.pdf', images: [], relations: []
      },
      {
        title: 'The Garden', cluster: 'new + archive / handmade paper / darkroom / life-cycle exhibition', period: '2025',
        summary: 'The Garden 把成年、照护、身体老化、青春期回忆和 Sickos 的化学图像放进同一展览。这里“花园”不是一个被拍摄的地点，而是组织生长、腐败、照料、记忆和身体周期的结构。',
        actions: ['并置新作与多年 archive', '楼下组织 adulthood / mother-daughter / aging body 线索', '楼上集中 love at first sight 手工纸作品', '重新呈现 Sickos 暗房实验', '让 photography、paper object、archive material 与 chemistry 共存'],
        sourceUrl: 'https://hannahbarry.com/exhibition/harley-weir-the-garden-5-june-13-september/', images: [],
        relations: [rel('展览', 'The Garden — Hannah Barry Gallery', '2025')]
      }
    ],
    awards: [],
    exhibitions: ['Boundaries — Foam 2016–2017', 'Homes — Brighton Photo Biennial 2018', 'Sins of a daughter — 2022', 'The Garden — 2025'],
    sources: [
      { label: 'Foam — Boundaries', url: 'https://www.foam.org/events/harley-weir' },
      { label: 'Loose Joints — Homes', url: 'https://loosejoints.studio/projects/homes' },
      { label: 'Hannah Barry Gallery — The Garden', url: 'https://hannahbarry.com/exhibition/harley-weir-the-garden-5-june-13-september/' }
    ]
  },

  'corinne-vionnet': {
    artistId: 'corinne-vionnet',
    projectCoverage: '7 个网络图像 / 群体观看 / 旅游图像项目已建立深档案 · 2005–2026',
    imageCoverage: '0 / 7 节点已有代表图像',
    note: 'Vionnet 的核心不是“Photoshop 叠加很好看”，而是先把 Web 当成一种社会摄影数据库：关键词、游客站位、重复构图和分享平台决定原始材料，然后通过对齐与叠加把“集体平均视点”显影出来。',
    projects: [
      {
        title: 'Photo Opportunities — collection rule', cluster: 'web search / tourist snapshots / crowd-sourced archive', period: '2005–2014 / ongoing research',
        summary: '从著名旅游地标关键词开始，在 photo-sharing websites 收集成千上万游客快照。她首先发现大家并非随机站位，而是不断复制已经流通的“正确景观角度”。',
        actions: ['选择 Taj Mahal、Eiffel Tower、Pyramids 等高频地标', '在网络图像分享平台按关键词搜索', '下载大量 anonymous tourist snapshots', '排除完全偏离主体的照片', '比较机位、焦段和地平线的重复程度', '把网络搜索过程建立为图像档案'],
        sourceUrl: 'https://corinnevionnet.com/Photo-Opportunities', images: [], relations: []
      },
      {
        title: 'Photo Opportunities — compositing method', cluster: 'alignment / opacity / collective average image', period: '2005–2014',
        summary: '每件最终作品通常使用约一百张相近角度快照。Vionnet 对齐地标主体并叠加透明图层：建筑因为拍摄位置高度一致而变得相对清晰，游客、云和边缘则变成鬼影。',
        actions: ['从几百 / 几千张素材中选约 100 张相似 framing', '以建筑核心轮廓为 registration point', '逐张缩放 / 旋转 / 对齐', '降低各层 opacity 并进行叠加', '保留周边机位差异形成 blur / ghost', '输出为 pigment print'],
        sourceUrl: 'https://corinnevionnet.com/Photo-Opportunities', images: [],
        relations: [rel('出版', 'Photo Opportunities', 'Kehrer Verlag 2011')]
      },
      {
        title: 'Scenic Views', cluster: 'American landscape / canonical viewpoint / appropriation', period: '2006–现在',
        summary: '将同样方法从建筑地标推向 American landscapes。约百张不同游客照片被叠成一个画面，使“自然景观”也暴露为被摄影史 / 旅游业规定的标准机位。',
        actions: ['从网络收集同一 landscape 的大量照片', '寻找反复出现的 canonical viewpoint', '按地平线 / 山体 / 岩层对齐', '叠加约 100 个不同经验', '让自然景观看似稳定、观看者位置变成模糊'],
        sourceUrl: 'https://corinnevionnet.com/Scenic-Views', images: [], relations: []
      },
      {
        title: 'ME. Here Now', cluster: 'tourist body / selfie / location / collective behavior', period: '2010s',
        summary: '她开始不只研究人们拍什么，也研究游客如何把自己放进景点图像。身体姿势、自拍和“我在这里”的证明行为成为另一种可归类模板。',
        actions: ['从在线旅游照片中筛选人物与景点同框图', '比较重复 pose / body position', '重新分类而不是按拍摄者身份整理', '通过 collage / sequence 呈现“到此一游”行为模式'],
        sourceUrl: 'https://corinnevionnet.com/About', images: [], relations: []
      },
      {
        title: 'Paris Paris Paris', cluster: 'city image flow / crowdsourcing / double printing / book', period: '2024',
        summary: '把方法集中到巴黎这一超高频图像城市。书籍进一步用人群 silhouette 堆叠、同一纸张 double printing 等图像设计，让社交网络中过度生产的巴黎直接变成纸面“视觉拥堵”。',
        actions: ['搜索巴黎高频地标的 standardized snapshots', '执行 archive research / crowdsourcing', '继续 collage / alignment', '在书中叠加人物 silhouette', '在同一纸张上 double print 强化混乱', '用 85 张图像组织 110 页书籍'],
        sourceUrl: 'https://corinnevionnet.com/', images: [],
        relations: [rel('出版', 'Paris Paris Paris — RVB Books', '2024')]
      },
      {
        title: 'Écran total', cluster: '20-year survey / mass tourism / screen culture', period: '2025',
        summary: 'Musée de Pont-Aven 首次大型个展把约二十年实践整理为 100 件左右作品，Photo Opportunities、ME. Here Now、Scenic Views、Total Palm Tree 等一起显示网络图片如何反过来规定现场游客的观看。',
        actions: ['跨二十年档案选约 100 件作品', '将网络 appropriated image 与艺术家现场观察并置', '为 Total Palm Tree 等项目重新设计 installation', '通过展览对照“屏幕中看过的景点”与实际拍照行为'],
        sourceUrl: 'https://corinnevionnet.com/', images: [],
        relations: [rel('展览', 'Écran total — Musée de Pont-Aven', '2025')]
      },
      {
        title: 'Going Nowhere', cluster: 'anonymous web images / Rolodex / circular book-object', period: '2026',
        summary: '最新项目把 anonymous Internet images 放进被改造的 Rolodex：书不再有明确开头 / 结尾，而形成循环翻动结构，对应当代图像流不断刷新、重复又没有出口的感觉。',
        actions: ['从 Internet 收集 anonymous images', '围绕逃离 / 运动 / 光线等主题重新编辑', '改造 Rolodex 作为 book-object', '将图像装进可连续翻动卡片', '让 sequence 首尾相接形成 endless loop'],
        sourceUrl: 'https://corinnevionnet.com/', images: [],
        relations: [rel('展览', 'Going Nowhere — Photo Elysée', '2026')]
      }
    ],
    awards: [],
    exhibitions: ['From Here On contexts', 'Snap+Share — SFMOMA', 'Écran total — Musée de Pont-Aven 2025', 'Going Nowhere — Photo Elysée 2026'],
    sources: [
      { label: 'Corinne Vionnet — Photo Opportunities', url: 'https://corinnevionnet.com/Photo-Opportunities' },
      { label: 'Corinne Vionnet — About / current projects', url: 'https://corinnevionnet.com/About' },
      { label: 'Corinne Vionnet current site', url: 'https://corinnevionnet.com/' }
    ]
  },

  'broomberg-chanarin': {
    artistId: 'broomberg-chanarin',
    projectCoverage: '7 个战争图像 / 档案 / 机器肖像项目已建立深档案 · 2003–2015',
    imageCoverage: '0 / 7 节点已有代表图像',
    note: '两人的合作最重要的是不断把“摄影师应该拍什么”拆开：在战场上故意不用相机、用互联网战争图覆盖 Brecht 的旧书、用国家人脸识别机器自动生成肖像。拍摄、挪用、编辑、出版和技术制度都被当成摄影的一部分。',
    projects: [
      {
        title: 'Ghetto / early collaborative documentary', cluster: 'fieldwork / typology / documentary convention', period: '2003–2006',
        summary: '早期合作仍保留较强现场摄影属性，但已经通过书、分类与跨地域并置来测试“ghetto”等政治 / 地理标签怎样把不同人群压进同一个概念。',
        actions: ['跨多个地点进行 fieldwork', '拍摄人物与空间', '将不同语境按同一标签并置', '通过出版物而非新闻单图建立比较关系', '开始质疑 documentary category 自身'],
        sourceUrl: 'https://www.broombergchanarin.com/hometest', images: [], relations: []
      },
      {
        title: 'The Day Nobody Died', cluster: 'Afghanistan / no camera / direct paper exposure / performance', period: '2008',
        summary: '两人以“摄影记者”身份随英国军队进入 Afghanistan Helmand，却携带一卷 50m 长、76.2cm 宽的感光纸。每遇到新闻事件，他们不拍事件，而展开约 6m 相纸在太阳下曝光 20 秒。',
        actions: ['申请 embedded journalist 身份进入 British Army', '把 13.5kg lightproof box 运到前线', '携带 50m × 76.2cm photographic paper', '遇到死亡、记者会、王室访问等事件时不用相机', '每次展开约 6m 纸', '直接太阳曝光约 20 秒', '重新卷起 / 保存 / 显影', '同时把军方运输这只箱子的过程作为 performance 拍摄'],
        sourceUrl: 'https://www.broombergchanarin.com/the-day-nobody-died-1-1/', images: [], relations: []
      },
      {
        title: 'People in Trouble Laughing Pushed to the Ground', cluster: 'Belfast archive / contact sheet / redaction / editing', period: '2011',
        summary: '转向 Belfast Exposed 等影像档案，把原本由社会冲突产生的大量图像重新通过接触表、裁切和选择处理。关注的不只是照片内容，而是 archive 如何保存 / 忽略某些历史。',
        actions: ['进入既有冲突摄影 archive', '查看 contact sheets 而非只用已选成片', '重新选择边缘 / 非主事件画面', '通过裁切和出版重写档案 sequence', '把 archive management 当成作者行为'],
        sourceUrl: 'https://www.broombergchanarin.com/hometest', images: [],
        relations: [rel('出版', 'People in Trouble Laughing Pushed to the Ground — MACK', '2011')]
      },
      {
        title: 'War Primer 2', cluster: 'Brecht / internet war image / physical book appropriation', period: '2011',
        summary: '直接使用 Bertolt Brecht 1955 英文版 War Primer 作为宿主书，在原页上覆盖来自 Internet 的 War on Terror 图像。新战争图片经过压缩、上传、下载、重格式化，其数字流通痕迹成为新版战争图像的一部分。',
        actions: ['取得 / 复制 Brecht War Primer 原书页面', '从互联网搜集 War on Terror 图像', '保留 compressed / uploaded / anonymous 网络来源特征', '根据 Brecht 原有 photo-epigram 重新配对', '把新图片物理覆盖到旧书页面上', '以 limited-edition book 形式发布'],
        sourceUrl: 'https://www.broombergchanarin.com/war-primer-3-2', images: [],
        relations: [rel('奖项', 'Deutsche Börse Photography Prize', 'Winner 2013'), rel('收藏', 'MoMA', 'War Primer 2')]
      },
      {
        title: 'Holy Bible / Divine Violence', cluster: 'archive / scripture / violence taxonomy', period: '2013',
        summary: '进一步完全转向 archive image management：暴力图像被放进圣经文字与哲学文本结构，使宗教、灾难、国家和媒体如何分类暴力彼此碰撞。',
        actions: ['从大型图像 archive 中筛选 violence-related material', '以文本概念建立选择规则', '把图像插入 / 覆盖现成书籍结构', '通过并置而不是原始 caption 重新赋义', '以书和墙面 archive 双重形式展示'],
        sourceUrl: 'https://www.broombergchanarin.com/text-divine-violence-walter', images: [], relations: [rel('出版', 'Holy Bible', 'MACK / AMC 2013')]
      },
      {
        title: 'Spirit is a Bone', cluster: 'facial recognition / machine portrait / profession taxonomy', period: '2013–2015',
        summary: '使用 Moscow 为公共安全与边境控制开发的 facial-recognition system 生成肖像。四个镜头共同构建可旋转的三维 face facsimile，即使被摄者不看镜头，机器也会强制输出“正面脸”。',
        actions: ['获得 facial-recognition / surveillance camera 使用机会', '让四个镜头同时获取人脸', '由系统自动重建 frontal 3D face', '保留 low-resolution / fragmented machine output', '按职业把 Moscow citizens 分类', '故意把 machine identification 与 August Sander 式类型学比较', '出版为 240 页书'],
        sourceUrl: 'https://www.broombergchanarin.com/spirit/', images: [],
        relations: [rel('出版', 'Spirit is a Bone — MACK', '2015')]
      },
      {
        title: 'From taking pictures to managing image systems', cluster: 'meta-method / post-photography / authorship', period: '2008–2015',
        summary: '从 The Day Nobody Died 之后，两人越来越故意放弃“自己按快门”的传统作者位置，转向直接曝光、档案、互联网图像与机器自动成像。作者性没有消失，而转移到进入权限、规则、选择、排序和出版设计。',
        actions: ['把摄影师进入制度的方式纳入作品', '有意拒绝 conventional photojournalistic image', '把 existing images 视为原始材料', '通过 editing / categorization / book design 建立作者结构', '使用 state / military imaging systems 反向生产作品'],
        sourceUrl: 'https://www.broombergchanarin.com/hometest', images: [], relations: []
      }
    ],
    awards: ['Deutsche Börse Photography Prize 2013 — Winner'],
    exhibitions: ['The Day Nobody Died — Barbican context 2008', 'British Art Show 8 — Spirit is a Bone 2015–2017'],
    sources: [
      { label: 'The Late Estate Broomberg & Chanarin — archive', url: 'https://www.broombergchanarin.com/hometest' },
      { label: 'The Day Nobody Died', url: 'https://www.broombergchanarin.com/the-day-nobody-died-1-1/' },
      { label: 'War Primer 2', url: 'https://www.broombergchanarin.com/war-primer-3-2' },
      { label: 'Spirit is a Bone', url: 'https://www.broombergchanarin.com/spirit/' }
    ]
  },

  'max-pinckers': {
    artistId: 'max-pinckers',
    projectCoverage: '7 个实验纪实 / 重演 / 媒体图像项目已建立深档案 · 2011–2024',
    imageCoverage: '0 / 7 节点已有代表图像',
    note: 'Pinckers 不把“staged”看作 documentary 的反面。他反而故意把闪光灯、演员、重演、found footage 和布景痕迹放出来，提醒观众所有纪实影像都有修辞。真正的研究对象往往是一个事件如何被媒体变成固定视觉公式。',
    projects: [
      {
        title: 'The Fourth Wall', cluster: 'India / cinema / documentary + fiction / flash', period: '2011–2012',
        summary: '在印度电影文化与现实空间之间工作，把 documentary subjects 与明显的 artificial lighting / staging 混合。作品不试图隐藏摄影师的介入，而让“电影式现实”与现实中的表演行为互相污染。',
        actions: ['在印度进行现场 research', '寻找现实中已经受到电影文化影响的人 / 场景', '使用强烈 artificial flash', '部分场面进行 staging / directing', '并置真实事件、表演和 found image', '通过书籍让 fiction/documentary 边界持续摇摆'],
        sourceUrl: 'https://www.maxpinckers.be/', images: [], relations: []
      },
      {
        title: 'Will They Sing Like Raindrops or Leave Me Thirsty', cluster: 'Love Commandos / romance / text + documentary + fiction', period: '2013–2014',
        summary: '围绕印度帮助跨阶级 / 跨种姓情侣的 Love Commandos 展开。项目同时使用新闻剪报、web log、真实情侣、found footage、明显虚构和抽象图片，不让任何一种材料独占“真相”。',
        actions: ['进入 Love Commandos 网络', '采访 / 拍摄真实情侣', '收集 newspapers / weblog / found footage', '加入 staged / fictional image', '使用明显 flash 破坏自然主义', '把粗粝证据与极度诗意 / kitsch 图像并置', '编辑成摄影书'],
        sourceUrl: 'https://www.maxpinckers.be/files/DOWNLOADS/Max_Pinckers-Will_They_Sing_Like_Raindrops_or_Leave_Me_Thirsty_%282014%29.pdf', images: [], relations: []
      },
      {
        title: 'Two Kinds of Memory and Memory Itself', cluster: 'Japan / memory / staged documentary', period: '2014–2015',
        summary: '继续将 documentary encounter 与 artificial lighting、重演和记忆结构结合。相比“找到一个象征日本的画面”，更关注记忆本身如何通过现成视觉模板被重新制造。',
        actions: ['在日本进行 fieldwork', '收集现实 encounter 与 visual cliché', '通过 staging / flash 强调介入', '使用出版 sequence 把个人记忆与社会图像并置'],
        sourceUrl: 'https://www.maxpinckers.be/', images: [], relations: []
      },
      {
        title: 'Margins of Excess', cluster: 'United States / media hoax / reenactment / stock photojournalism', period: '2016–2018',
        summary: '研究六个曾被美国媒体判为“说谎 / 造假”的人物故事。除了访谈真实人物，Pinckers 还请演员在纽约和洛杉矶制作类似新闻灾难图的模板照片，测试 photojournalistic tropes 怎样先于具体事件存在。',
        actions: ['与 Victoria Gonzalez-Figueras 共同 research', '寻找被 media discredited 的具体人物', '进行采访与现场摄影', '收集 family archive / police / press found images', '在 Brooklyn / LA 与演员制作 staged performance', '重演 news-image formula 作为 stock photojournalism', '在 Las Vegas 加入 site-specific installation', '将所有材料编辑为 318+ 页自出版书'],
        sourceUrl: 'https://www.maxpinckers.be/files/DOWNLOADS/Max%20Pinckers%20-%20Margins%20of%20Excess%20%282018%29.pdf', images: [], relations: []
      },
      {
        title: 'Red Ink', cluster: 'North Korea / controlled access / commissioned journalism / visible flash', period: '2017',
        summary: '为 The New Yorker 关于朝鲜核风险报道拍摄。在高度受控制的访问环境里，他没有假装获得“幕后真相”，而利用明显 flash 与受限场景，使“只能看到被允许看到的东西”直接变成照片形式。',
        actions: ['在受官方路线限制的访问条件中拍摄', '接受无法自由选择地点 / 对象这一条件', '持续使用 visible artificial flash', '不把官方表演场景伪装成 spontaneous access', '与文章文本共同发布', '之后独立编辑为 Red Ink 出版物'],
        sourceUrl: 'https://maxpinckers.be/files/DOWNLOADS/Max%20Pinckers%20-%20Red%20Ink%20%282018%29.pdf', images: [], relations: []
      },
      {
        title: 'State of Emergency', cluster: 'Mau Mau / colonial archive / testimony / collaboration', period: '2014–2024',
        summary: '围绕 Kenya Mau Mau 紧急状态及英国殖民暴力开展十年长期研究。除艺术家照片和访谈，还纳入 British Colonial Office Information Service 文件 / 图像，并在后期重新向参与者确认自己是否应该继续制作此项目。',
        actions: ['长期往返 Kenya / UK 进行 research', '访问殖民 archive', '收集 British Colonial Office documents / photographs', '采访幸存者与相关人物', '制作 contemporary portraits / staged photographs', '邀请 historians 撰写短文', '2022 返回 Kenya 向参与者重新征询项目伦理与继续方式', '以多作者 book / exhibition 形式组织'],
        sourceUrl: 'https://www.maxpinckers.be/files/DOWNLOADS/PRESS%20KIT_State%20of%20Emergency%20%282014-2024%29%20-%20Max%20Pinckers%20et%20al.pdf', images: [], relations: []
      },
      {
        title: 'Documentary tropes as a working material', cluster: 'meta-method / flash / reenactment / media literacy', period: '2011–现在',
        summary: '贯穿所有项目的不是某种固定色调，而是对 documentary visual formula 的持续拆解：灾难后的背影、证据式构图、英雄人物、自然光“真实性”等都可以被故意重演，说明照片的说服力来自文化习惯而非天然客观。',
        actions: ['先识别 photojournalism 中重复 visual trope', '把 trope 与具体事实拆开研究', '使用 actor / staging 重新制造模板', '故意保留强闪光和摄影师介入', '并置 found image 与新拍图像', '用出版 / 文字暴露不同证据等级'],
        sourceUrl: 'https://www.maxpinckers.be/files/DATA/001-136_UnravelingPersuasion%20-%20PINCKERS.pdf', images: [], relations: []
      }
    ],
    awards: ['Edward Steichen Award Luxembourg context / residency support'],
    exhibitions: ['Multiple international documentary / photobook contexts', 'State of Emergency presentations 2024–'],
    sources: [
      { label: 'Max Pinckers official', url: 'https://www.maxpinckers.be/' },
      { label: 'Margins of Excess', url: 'https://www.maxpinckers.be/files/DOWNLOADS/Max%20Pinckers%20-%20Margins%20of%20Excess%20%282018%29.pdf' },
      { label: 'Red Ink', url: 'https://maxpinckers.be/files/DOWNLOADS/Max%20Pinckers%20-%20Red%20Ink%20%282018%29.pdf' },
      { label: 'State of Emergency press kit', url: 'https://www.maxpinckers.be/files/DOWNLOADS/PRESS%20KIT_State%20of%20Emergency%20%282014-2024%29%20-%20Max%20Pinckers%20et%20al.pdf' }
    ]
  }
};