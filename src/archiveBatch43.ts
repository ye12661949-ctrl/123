import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

export const archiveBatch43: Record<string, ArtistArchive> = {
  'hiroshi-sugimoto': {
    artistId: 'hiroshi-sugimoto',
    projectCoverage: '8 个时间 / 观看 / 光学实验节点已建立深档案 · 1976–现在',
    imageCoverage: '0 / 8 项目已有代表图像',
    note: 'Sugimoto 的作品看起来极简，但制作规则非常严格。最值得学习的是：他常先给摄影建立一个物理实验条件——整部电影一次曝光、海平线固定比例、建筑故意失焦、高压放电直接作用于感光材料、棱镜把太阳光拆成色谱——再让结果自己生成形式。',
    projects: [
      {
        title: 'Dioramas', cluster: 'museum display / artificial nature / large-format photography', period: '1976–',
        summary: '在自然史博物馆拍摄动物 diorama。原场景本来就是人工布景，Sugimoto 再用大画幅黑白摄影、机位和景深把玻璃柜中的模型重新拍得像真实野外，从而让“假的东西被摄影再次认证为真实”。',
        actions: ['进入自然史博物馆选择 diorama', '避开展柜边缘和博物馆线索', '用大画幅相机重新构图', '控制曝光与景深让绘制背景和标本连续起来', '输出高细节黑白银盐照片', '让观众先相信场景再发现其人工来源'],
        sourceUrl: 'https://hirshhorn.si.edu/exhibitions/hiroshi-sugimoto/', images: [], relations: []
      },
      {
        title: 'Theaters / Drive-Ins', cluster: 'entire-film exposure / cinema / compressed time', period: '1978–',
        summary: '每张 Theater 照片通常以一整部电影的放映时长完成一次曝光。银幕上数十万帧影像累积成纯白矩形，而剧院内部被银幕持续发出的光照亮。作品把“电影的时间”压缩成一张照片。',
        actions: ['选择有明确建筑特征的电影院 / drive-in', '在放映前架设大画幅相机', '电影开始时打开快门', '让快门保持开启直至整部电影结束', '所有电影画面在同一负片上累积为白色银幕', '利用银幕反射光同时记录剧院室内', '以单张长曝光替代逐帧记录'],
        sourceUrl: 'https://hirshhorn.si.edu/explore/the-hirshhorn-presents-the-first-career-survey-for-hiroshi-sugimoto/', images: [], relations: []
      },
      {
        title: 'Seascapes', cluster: 'fixed horizon / serial rule / deep time', period: '1980–',
        summary: '在世界不同海域反复使用接近一致的海天比例与正面地平线构图。地点信息被压到最低，只保留空气、海面、雾和曝光差异，使不同年代 / 地点的海看起来像同一个最早的人类视野。',
        actions: ['寻找视野中没有陆地 / 建筑的海岸位置', '固定海天接近一比一的水平构图', '使用大画幅黑白相机', '控制长曝光与灰阶细节', '避免人物和明确时代线索', '跨数十年在不同海域重复同一拍摄规则', '以组照比较极小的气象和光线差异'],
        sourceUrl: 'https://hirshhorn.si.edu/exhibitions/hiroshi-sugimoto/', images: [], relations: [rel('展览', 'Time Exposed', '1990s– multiple sites')]
      },
      {
        title: 'Portraits', cluster: 'wax figure / historical portrait / photographic truth', period: '1999–',
        summary: '拍摄 Madame Tussauds 等机构中的历史人物蜡像，并使用接近古典肖像的灯光和背景，使摄影看起来像真的让 Henry VIII、Rembrandt 等历史人物重新坐到镜头前。',
        actions: ['选择历史人物 wax figure', '从博物馆娱乐语境中移出视觉线索', '重新布置黑色 / 中性背景', '使用古典肖像式侧前方灯光', '用大画幅相机记录蜡像皮肤细节', '通过黑白输出进一步消除当代展陈信息'],
        sourceUrl: 'https://hirshhorn.si.edu/explore/the-hirshhorn-presents-the-first-career-survey-for-hiroshi-sugimoto/', images: [], relations: []
      },
      {
        title: 'Architecture', cluster: 'deliberate defocus / modernism / visual erosion test', period: '1997–',
        summary: 'Sugimoto 故意把旧式大画幅相机的焦点推过无限远，使现代建筑严重失焦。他把这称作对建筑的“erosion test”：如果一个建筑在模糊后仍能保留基本形态，它的形式才足够强。',
        actions: ['选择20世纪现代主义代表建筑', '架设旧式大画幅相机', '先将镜头推至无限远', '继续推动 bellows 超过正常无限远位置', '主动让建筑失焦', '保持整体轮廓而消除窗框 / 材料等细节', '以模糊程度测试建筑形式的辨识度'],
        sourceUrl: 'https://www.sugimotohiroshi.com/new-page-5', images: [], relations: []
      },
      {
        title: 'Lightning Fields', cluster: 'electric discharge / cameraless photography / scientific reenactment', period: '2006–',
        summary: '不再使用镜头拍外界，而是在暗房中让高压电直接在 photographic dry plate / 感光材料上放电。电流路径留下类似闪电、神经、河网或植物的分叉痕迹，把“光”进一步替换成电能本身。',
        actions: ['研究 Franklin、Faraday 与 Talbot 的电学 / 摄影史', '在暗室中准备感光干板', '搭建高压放电装置', '让电流直接作用于感光表面', '控制电压 / 接触条件但保留放电随机性', '显影得到无相机电痕图像', '继续发展 illuminated / composed 等安装版本'],
        sourceUrl: 'https://www.sugimotohiroshi.com/new-page-28', images: [], relations: []
      },
      {
        title: 'Opticks / Polarized Color', cluster: 'Newton prism / sunlight / Polaroid / color as light', period: '2000s–2018',
        summary: 'Sugimoto 长期重做 Newton 的 prism experiment。冬季太阳光经过棱镜被拆成色谱，再投到白色墙面；经过多年实验，他用 Polaroid 捕捉极细微的颜色区段，并把它们放大成几乎纯色的图像。',
        actions: ['根据冬季太阳角度建立固定观察装置', '让自然太阳光通过 prism', '将分光投射到白色 plaster wall', '等待颜色在时间中移动和融合', '用 Polaroid 对局部色谱进行摄影', '从小型 instant image 选择细微色块', '扩大为沉浸式色彩照片', '把摄影理解成以光作 pigment 的绘画'],
        sourceUrl: 'https://www.sugimotohiroshi.com/polarized-color-1', images: [], relations: []
      },
      {
        title: 'Enoura Observatory / site-specific architecture', cluster: 'architecture / solstice alignment / time instrument', period: '2017–',
        summary: '摄影中的“测量时间”进一步扩展为真实建筑。Enoura Observatory 用长廊、海面视线、石材与冬至 / 夏至日出方向建立大型时间仪器，建筑本身像一架无需胶片的摄影装置。',
        actions: ['研究场地海岸方向与太阳运行', '用建筑轴线对准特定季节日出', '选择古材 / 石材并重新组合', '设计长视线与海平线关系', '把观众步行路径纳入时间体验', '让一年中的太阳位置成为作品持续变化的“曝光”'],
        sourceUrl: 'https://www.sugimotohiroshi.com/architecture-1', images: [], relations: [rel('展览', 'Enoura Observatory / Odawara Art Foundation', 'opened 2017')]
      }
    ],
    awards: ['Hasselblad Award 2001'],
    exhibitions: ['Movie Theaters — Sonnabend Gallery 1981', 'Dioramas / Theaters / Seascapes — 1988–1989', 'Hiroshi Sugimoto survey — Hirshhorn / Mori Art Museum 2005–2006', 'Time Machine — touring retrospective 2020s'],
    sources: [
      { label: 'Hiroshi Sugimoto Studio', url: 'https://www.sugimotohiroshi.com/' },
      { label: 'Hirshhorn career survey', url: 'https://hirshhorn.si.edu/exhibitions/hiroshi-sugimoto/' },
      { label: 'Lightning Fields', url: 'https://www.sugimotohiroshi.com/new-page-28' },
      { label: 'Opticks', url: 'https://www.sugimotohiroshi.com/polarized-color-1' }
    ]
  },

  'penelope-umbrico': {
    artistId: 'penelope-umbrico',
    projectCoverage: '8 个平台图像 / 屏幕 / 集体摄影节点已建立深档案 · 2006–现在',
    imageCoverage: '0 / 8 项目已有代表图像',
    note: 'Umbrico 的摄影动作经常发生在浏览器里，但不是“下载几张图做拼贴”。她会先设定搜索词和平台规则，再记录搜索结果数量、裁切特定部位、送到消费级冲印店、重新安装；作品标题、规模和图像数量会随着平台数据库变化而更新。她把搜索、crop、download、consumer print 和平台计数都当作摄影技术。',
    projects: [
      {
        title: 'Suns from Sunsets from Flickr', cluster: 'search engine / crowd photography / crop / mass print', period: '2006–',
        summary: '2006 年搜索 Flickr 的 sunset 标签得到 541,795 个结果。Umbrico 从这些照片中只裁出清晰的太阳，再送到普通消费级 photo lab 印成 4×6 英寸 machine c-print。每次展览都重新搜索，所以标题中的数字持续变化。',
        actions: ['在 Flickr 搜索 sunset / sunsets', '记录搜索当天的结果总数', '下载大量用户照片', '只裁出照片中的太阳圆盘', '把裁切图上传到普通消费级 photo lab', '统一输出 4×6 英寸 machine c-print', '以数百 / 数千张密集网格安装', '每次展览重新搜索并更新标题数字'],
        sourceUrl: 'https://www.penelopeumbrico.net/index.php/project/suns-from-sunsets-from-flickr/', images: [], relations: [rel('展览', 'SFMOMA installation', '2009')]
      },
      {
        title: 'Suns / Airmail', cluster: 'digital image / postcard / postal trace', period: '2009–',
        summary: '她把 Suns 安装后剩余的 4×6 照片交给策展人、朋友和观众，请他们像明信片一样寄回。原本从网络下载的太阳重新进入真实天空下的邮政运输，并在表面累积邮票、邮戳和磨损。',
        actions: ['保留展览后剩余的 sunset c-print', '交给不同国家的朋友 / 策展人 / 观众', '要求直接在照片背面书写地址', '以普通 airmail 邮寄', '让邮戳 / 折痕 / 污迹留在照片上', '收回后以邮政痕迹重新编排'],
        sourceUrl: 'https://www.penelopeumbrico.net/index.php/project/suns-from-sunsets-from-flickr/', images: [], relations: []
      },
      {
        title: 'TVs from Craigslist', cluster: 'classified ad / reflection / accidental self-portrait / screen', period: '2008–',
        summary: '下载 Craigslist 上卖家拍摄的二手电视照片，再只保留屏幕。黑色、关闭或反光的屏幕经常意外映出卖家的房间、身体、闪光灯和相机，于是一个为出售物品而拍的功能图像变成无意识自画像。',
        actions: ['持续浏览 Craigslist 电视出售广告', '下载卖家自行拍摄的商品照片', '裁切掉电视机壳只保留 screen area', '按屏幕实际比例重新放大', '保留卖家身体 / 房间 / camera flash 的偶然反射', '每次展览继续抓取新广告更新技术年代', '通过组图比较 CRT / LCD / 高分辨率手机时代的变化'],
        sourceUrl: 'https://collections.lacma.org/object/199035', images: [], relations: [rel('收藏', 'LACMA', 'TVs From Craigslist, 35 prints')]
      },
      {
        title: 'Broken Sets (eBay)', cluster: 'broken LCD / technological failure / abstraction / metallic print', period: '2008–2011',
        summary: '从 eBay 上出售零件的坏 LCD 电视广告取图。卖家为了证明机器仍通电会打开屏幕，碎裂液晶于是生成偶然的彩色几何图案。Umbrico 只裁屏幕并放大到 30×40 英寸左右，打印在 metallic paper 上。',
        actions: ['搜索 eBay broken LCD / broken television listings', '下载卖家证明机器通电的照片', '裁掉电视外壳与环境', '保留裂屏生成的 RGB 色块', '旋转 / 重新定向部分图像', '放大为大尺幅 c-print', '使用 metallic paper 强化显示器光泽', '以网格把技术故障重新编码成现代主义抽象'],
        sourceUrl: 'https://kochgallery.com/artists/penelope-umbrico/', images: [], relations: [rel('收藏', 'Guggenheim / other museum collections', 'Broken Sets represented in collections')]
      },
      {
        title: 'Signals Still / Signal to Ink', cluster: 'screen / signal / newsprint / material transfer', period: '2011–2013',
        summary: '从 Craigslist 的电视图像出发，作品沿“屏幕侧面—无图像信号—反射—坏屏”建立 narrative。最后把屏幕图像印成高油墨密度 newsprint，使观众翻阅时油墨会蹭到手上，屏幕的非物质信号重新变成有污迹的材料。',
        actions: ['按 screen physicality 给网络图片分类', '从电视侧面、反射、空信号、坏屏建立 sequence', '重新输出为 photographic prints', '制作 offset newsprint book', '把印刷 ink density 提高到约125%', '允许油墨在手上和页面间转移', '把触摸造成的新痕迹纳入图像传播链'],
        sourceUrl: 'https://www.artsy.net/artwork/penelope-umbrico-signals-still-tvs-from-craigslist-2008-2011', images: [], relations: []
      },
      {
        title: 'Sunset Portraits', cluster: 'camera exposure / silhouette / collective self-image', period: '2010–',
        summary: '仍来自 Flickr sunset 搜索，但这次保留整张游客照片。相机为明亮太阳曝光后，人物往往变成黑色 silhouette；成千上万个人都在宣告“我在这里”，最后却被同一种拍照机制抹平成高度相似的姿势。',
        actions: ['从同一 sunset 数据源筛选有人物的照片', '选择因对太阳测光而人物欠曝的图像', '保留整幅而不只裁太阳', '统一输出 4×6 machine c-print', '以千张级网格安装', '每次展览重新更新搜索结果数字和标题'],
        sourceUrl: 'https://www.penelopeumbrico.net/index.php/project/sunset-portraits/', images: [], relations: []
      },
      {
        title: 'Range: of Masters of Photography', cluster: 'canonical landscape / smartphone app / filter recursion', period: '2012–',
        summary: '重新拍摄 Ansel Adams、Edward Weston 等“摄影大师”的山岳图像，再通过大量 smartphone photo-filter apps 反复处理。经典黑白山景被变成荧光、过饱和、扭曲的消费软件效果，讨论摄影史权威如何被手机平台重新加工。',
        actions: ['选择摄影史经典 mountain image reproduction', '用手机 / 相机重新拍摄既有印刷图', '将图像导入大量 consumer photo apps', '连续套用滤镜 / 色彩 / distortion', '保留 app 对经典照片的压缩和再编码', '把不同版本组成山脉式 sequence'],
        sourceUrl: 'https://mam.org/info/pressroom/2016/03/milwaukee-art-museum-debuts-penelope-umbrico-future-perfect-may-5/', images: [], relations: [rel('展览', 'Penelope Umbrico: Future Perfect — Milwaukee Art Museum', '2016')]
      },
      {
        title: 'Sun/Screen / Neverending Sunset / screen-light works', cluster: 'screen capture / Second Life / moiré / simulated sun', period: '2011–2014',
        summary: 'Umbrico 把 sunset 从 Flickr 进一步送进 Second Life、screensaver、slideshow 和手机再拍。Sun/Screen 中，不同分辨率的太阳图在电脑屏幕上 dissolve，再用 iPhone 拍屏，手机 sensor 与 monitor pixel grid 发生冲突生成 moiré。',
        actions: ['把网络 sunset 图做成 slideshow / animation', '在 Second Life 强制维持永不落下的虚拟 sunset', '将 sunset 数据转换为 screensaver', '让不同分辨率图像在屏幕上相互 dissolve', '用 iPhone 再拍电脑显示器', '利用 sensor 与 pixel grid 冲突生成 moiré', '把自然光→用户照片→屏幕光→手机再摄影的转译链本身作为作品'],
        sourceUrl: 'https://www.penelopeumbrico.net/index.php/project/suns-from-sunsets-from-flickr/', images: [], relations: []
      }
    ],
    awards: ['Guggenheim Fellowship', 'Anonymous Was a Woman Award', 'NYFA Fellowship'],
    exhibitions: ['SFMOMA 2009', 'MoMA PS1 2010', 'Future Perfect — Milwaukee Art Museum 2016', 'international museum / photography festival presentations'],
    sources: [
      { label: 'Penelope Umbrico Studio', url: 'https://www.penelopeumbrico.net/' },
      { label: 'Milwaukee Art Museum — Future Perfect', url: 'https://mam.org/info/pressroom/2016/03/milwaukee-art-museum-debuts-penelope-umbrico-future-perfect-may-5/' },
      { label: 'LACMA — TVs from Craigslist', url: 'https://collections.lacma.org/object/199035' },
      { label: 'Robert Koch Gallery — Broken Sets', url: 'https://kochgallery.com/artists/penelope-umbrico/' }
    ]
  },

  'katja-novitskova': {
    artistId: 'katja-novitskova',
    projectCoverage: '8 个网络图像 / 科学数据 / AI / 生态节点已建立深档案 · 2012–2026',
    imageCoverage: '0 / 8 项目已有代表图像',
    note: 'Novitskova 对你现在的 DETR / 热力图项目尤其值得看，因为她不是把“AI”作为图像风格，而是持续跟踪图像怎样从社交媒体注意力经济迁移到科学数据库、自动 wildlife camera、蛋白质结构、训练数据和生成模型。她最稳定的方法是“re-platforming”：截取一个已经在某系统里工作的图像，再改变尺度、材料与平台，让它在艺术空间里暴露原先的功能。',
    projects: [
      {
        title: 'Approximations', cluster: 'internet animal image / cutout / attention economy / re-platforming', period: '2012–',
        summary: '从网络找到构图高度有效、极易吸引注意力的动物照片，去掉背景并放大成几乎广告立牌尺度，再用商业 banner / sign-making 技术打印到 aluminium Dibond 上并切成轮廓。展览照片随后又被上传回网络，形成平台循环。',
        actions: ['在社交媒体 / 网络搜索高传播动物图像', '筛选具有强 attention signal 的姿势与构图', '数字去除原图背景', '大幅放大低成本网络图', '以 UV-resistant digital print 输出到 aluminium Dibond', '按动物轮廓 CNC / 商业制作切割', '用 acrylic stand 让二维图独立站立', '拍摄展览 documentation 并重新上传网络'],
        sourceUrl: 'https://www.katjanovitskova.com/serie/approximation', images: [], relations: []
      },
      {
        title: 'Patterns of Activation', cluster: 'attention / biology / scientific imaging / photographic sculpture', period: '2014–',
        summary: '从单纯互联网动物图进一步转向科学图像：C. elegans、胚胎发育、野外红外相机、生态研究影像等。作品仍然是大型 cutout，但图像来源从 media content 逐步转成 data / research signal。',
        actions: ['从科学数据库 / wildlife camera / lab imagery 获取图像', '筛选能显示生物行为或检测状态的 frame', '保留 night vision / thermal / scientific imaging 痕迹', '放大并打印到 aluminium', '与 polyurethane resin、镜面、机械件组合', '使用 ceiling motor / rotating hook 让图像运动', '把数据图像转成吸引人类注意力的 gallery device'],
        sourceUrl: 'https://www.katjanovitskova.com/serie/pattern-of-activation', images: [], relations: []
      },
      {
        title: 'Mamaroo works', cluster: 'baby technology / robotics / biology / automated care', period: '2015–',
        summary: '把商业自动婴儿摇椅 Mamaroo、robotic bugs、树脂生物形态和科学图像组合在一起。原本用于照料婴儿的自动运动设备变成展示 biological pattern 的底座，使“育儿自动化”和生命科学数据处于同一机械节奏。',
        actions: ['购买现成 Mamaroo baby swing', '保留产品自带电机和摇摆程序', '加入 UV print / polyurethane resin / epoxy clay', '安装 robotic bugs / sound / cable', '让现成消费技术驱动生物图像运动', '通过循环 motion 把 care device 变成展览 kinetic sculpture'],
        sourceUrl: 'https://www.katjanovitskova.com/', images: [], relations: []
      },
      {
        title: 'If Only You Could See What I’ve Seen with Your Eyes', cluster: 'Venice Pavilion / big data / ecology / machine vision', period: '2017',
        summary: '爱沙尼亚馆把 Approximations、Patterns of Activation、robotic sculptures、broken silicon wafers、sound 和 video 组织成一个数据生态环境。标题来自 Blade Runner，把“谁的眼睛在看”从人类观看扩展到软件、传感器和数据库。',
        actions: ['把动物 / 胚胎 / model organism 图像按展场重新组合', '制作 aluminium cutout 与 acrylic support', '加入 robotic bugs、speaker、baby swing components', '使用 broken silicon wafer 暗示计算硬件基础', '用 video projection 和 sound 建立持续运行环境', '让作品之间像一个异质数据系统而非独立雕塑'],
        sourceUrl: 'https://www.katjanovitskova.com/exhibition/venice-biennale-2017', images: [],
        relations: [rel('展览', 'Estonian Pavilion — 57th Venice Biennale', '2017')]
      },
      {
        title: 'Protein Data Bank / Earthwares / PDB Mutants', cluster: 'molecular model / database / biological abstraction', period: 'late 2010s–',
        summary: '进一步进入蛋白质数据库与 biomolecular structure。这里的抽象形态并非艺术家凭空画出，而是来自科学建模系统；她把它们从科研可视化中抽出，转换成树脂、陶瓷或打印对象。',
        actions: ['从 Protein Data Bank 等结构数据库选取 molecular model', '截取 / 旋转数字三维结构', '把 scientific render 转成实体轮廓或图案', '使用 resin / ceramic / print 等材料输出', '把数据库里的功能模型放进装饰性 / 地质性展示语境'],
        sourceUrl: 'https://www.katjanovitskova.com/', images: [], relations: []
      },
      {
        title: 'Soft Approximations', cluster: 'generative AI / exhibition documentation / recursive mutation', period: '2022',
        summary: '她把自己 2012 年首次个展的 documentation 喂给 image-generating AI，让模型重新生成十年前的 Approximations。算法不是生成一个全新动物，而是把“原始网络动物→艺术品→展览照片”再次变异，形成图像生命周期的下一代。',
        actions: ['选择2012年原始展览 documentation', '把已有作品照片作为 AI input', '让 image-generating algorithm 生成 mutated output', '观察模型偏好和 apophenia', '从输出中选择具有结构性错误的图像', '把 AI image 再转成实体 sculpture / cutout', '把生成作品再次摄影并进入网络'],
        sourceUrl: 'https://www.katjanovitskova.com/exhibition/soft-approximation', images: [], relations: []
      },
      {
        title: 'Pattern of Activation (Random Forest)', cluster: 'algorithmic ecology / dataset / machine classification', period: '2024',
        summary: '在 Manifesta 15 语境中，自动 wildlife photographs、实验生物和算法分类进一步结合。Random Forest 的标题直接借用 machine-learning classifier，使生态照片不仅是“自然影像”，也是被模型处理的数据。',
        actions: ['调用自动相机 / scientific dataset', '保留机器采集的重复 frame 结构', '依据数据分类 / model logic 编辑影像', '以 video loop 显示人眼难以逐张处理的大量图像', '用音乐 / 展场尺度把高速数据流转成身体观看'],
        sourceUrl: 'https://www.katjanovitskova.com/exhibition/manifesta-15', images: [],
        relations: [rel('展览', 'Manifesta 15 Barcelona Metropolitana', '2024')]
      },
      {
        title: 'TOXIC MATTER / Pattern of Activation (plankton)', cluster: 'AI training data / plankton / microplastics / smell / computational vision', period: '2026',
        summary: '2026 的 TOXIC MATTER 把深海自动相机拍摄的 plankton open dataset 转成高速灰阶 video。这套数据本来就用于训练算法处理成千上万张生态图；Novitskova 手工加入绿色 target mark 去识别物种，而无法辨认的碎屑、微生物和 microplastic 像损坏胶片一样闪烁。另一个作品 Plastivore Potential 与 Sissel Tolaas 合作，用气味和通风系统把 post-plastic ecology 从视觉扩展到嗅觉。',
        actions: ['获取自动 deep-sea camera 生成的 plankton open dataset', '逐帧人工尝试标注 / index plankton species', '保留绿色 target mark 作为 human-in-the-loop 痕迹', '不清理无法分类的 debris / microorganism / microplastic specks', '把大量灰阶 frame 编辑成高速 loop 模拟 computational vision speed', '与 Ghost Lemurs 合作 sound', '与 Sissel Tolaas 制作特定“post-plastic” smell', '用 ventilation tubing / fan / filter 把气味送入展厅'],
        sourceUrl: 'https://www.katjanovitskova.com/exhibition/toxic-matter', images: [],
        relations: [rel('展览', 'TOXIC MATTER — CC Strombeek', '2026')]
      }
    ],
    awards: ['Young Cultural Figure Award, Estonia 2017'],
    exhibitions: ['Estonian Pavilion — Venice Biennale 2017', 'Soft Approximation — 2022', 'Manifesta 15 — 2024', 'TOXIC MATTER — CC Strombeek 2026'],
    sources: [
      { label: 'Katja Novitskova Studio', url: 'https://www.katjanovitskova.com/' },
      { label: 'Approximations', url: 'https://www.katjanovitskova.com/serie/approximation' },
      { label: 'Patterns of Activation', url: 'https://www.katjanovitskova.com/serie/pattern-of-activation' },
      { label: 'TOXIC MATTER', url: 'https://www.katjanovitskova.com/exhibition/toxic-matter' }
    ]
  }
};