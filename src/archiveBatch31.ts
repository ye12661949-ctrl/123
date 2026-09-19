import type { ArtistArchive, ArchiveImage, ArchiveRelation } from './archiveData';

const img = (url: string, title: string, credit: string, sourceUrl: string, sourceLabel: string): ArchiveImage => ({ url, title, credit, sourceUrl, sourceLabel });
const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

export const archiveBatch31: Record<string, ArtistArchive> = {
  'john-houck': {
    artistId: 'john-houck',
    projectCoverage: '6 个关键项目 / 方法节点已建立深度档案 · 2011–现在',
    imageCoverage: '2 / 6 项目已有代表图像',
    note: '按“程序生成 → 打印 → 折叠 / 叠放 → 再摄影 → 再打印”的反馈链整理，并补出他从系统化颜色组合逐渐转向记忆、心理分析和私人对象的变化。',
    projects: [
      {
        title: 'Aggregates', cluster: 'computation / color permutations / fold / rephotography', period: '2011–2013',
        summary: 'Houck 先用自编程序生成有限颜色在网格中的所有组合，再把这些组合打印、折叠、重新拍摄并再次打印。最终照片同时包含真实折痕与前一轮折痕的图像，因此二维表面不断积累多个时间层。',
        actions: ['编写程序枚举颜色组合', '生成规则化 index / grid', '打印到纸上', '手工折叠打印物', '重新摄影折叠后的纸张', '再次打印并继续折叠 / 再摄影', '保留真实折痕与旧折痕影像之间的混淆'],
        sourceUrl: 'https://www.johnhouck.com/work/aggregates/',
        images: [img('https://media.architecturaldigest.com/photos/55e77e40302ba71f30174970/master/pass/dam-images-art-2014-artists-to-watch-john-houck-john-houck-01-aggregates-series.jpg', 'Aggregates — folded / rephotographed prints', '© John Houck', 'https://www.johnhouck.com/work/aggregates/', 'John Houck / project documentation')],
        relations: []
      },
      {
        title: 'The Anthologist', cluster: 'memory / personal objects / recursive still life', period: '2013–2015',
        summary: '系统网格开始与个人记忆发生关系。Houck 把家人留下的物件、收藏或带有私人历史的对象带入摄影棚，先拍摄，再让打印物与真实对象一起进入下一轮构图，形成“物件—图像—物件”的递归。',
        actions: ['选择带私人记忆的物件', '在摄影棚安排对象与纸张', '拍摄第一层静物', '打印照片', '把照片重新放回摄影棚与真实对象叠放', '继续重拍，让真实物体与其旧图像难以区分'],
        sourceUrl: 'https://www.johnhouck.com/work/the-anthologist/', images: [], relations: []
      },
      {
        title: 'Playing and Reality', cluster: 'relational psychoanalysis / memory painting / layered photograph', period: '2015–2018',
        summary: '这一阶段明显引入关系精神分析和记忆工作。Hammer 对 Made in L.A. 2018 的说明指出，他把代表性绘画、丝网印刷、彩纸与网格共同层叠进照片，故意让系统化结构与主观记忆并存。',
        actions: ['根据记忆制作绘画或图形', '把绘画、丝网印刷和彩纸作为实体材料摆放', '折叠 / 叠放材料', '拍摄并打印', '把前一轮图像再次带入下一轮构图', '保留纸边、接缝与透视冲突'],
        sourceUrl: 'https://hammer.ucla.edu/exhibitions/2018/made-in-la-2018/john-houck', images: [],
        relations: [rel('展览', 'Made in L.A. 2018 — Hammer Museum', '2018')]
      },
      {
        title: 'Accumulator', cluster: 'diptych / crease / repetition / memory', period: '2010s–',
        summary: 'Accumulator 延续反复打印与折痕逻辑，但常以配对 / diptych 形式强调微小差异。图像看似几何抽象，实际是多轮物理折叠、光影和摄影累积的结果。',
        actions: ['生成 / 选择受限颜色结构', '打印', '制造折痕', '重新拍摄纸张与其阴影', '把变化后的图像组成配对或系列', '利用重复让差异显现'],
        sourceUrl: 'https://hammer.ucla.edu/exhibitions/2018/made-in-la-2018/john-houck', images: [], relations: []
      },
      {
        title: 'Holding Environment', cluster: 'crease / painted passage / photography-object', period: '2018',
        summary: '在 Holding Environment 中，折叠摄影与绘画性段落更加接近。作品仍通过摄影生产，但画面里出现明显色块、阴影与折痕，使照片像同时包含纸张、绘画和雕塑空间。',
        actions: ['制作 / 选择色块与纸张结构', '折叠或压出 crease', '控制光线让阴影成为图像组成', '多轮摄影与打印', '以 framed archival pigment print 呈现'],
        sourceUrl: 'https://www.johnhouck.com/work/holding-environment/',
        images: [img('https://www.johnhouck.com/img/holding-environment/-lv9CJzIRQ-3000.jpeg', 'Holding Environment — installation view', '© John Houck', 'https://www.johnhouck.com/work/holding-environment/', 'John Houck official website')],
        relations: []
      },
      {
        title: 'Recursion / ongoing feedback method', cluster: 'meta-method / image-memory loop', period: '2010s–现在',
        summary: 'Houck 官网直接将 Recursion 作为独立作品群。其方法可以理解为整个实践的核心：每一轮输出不作为终点，而成为下一轮的输入，使照片不断携带自己的过去。',
        actions: ['把上一轮摄影结果当作下一轮实体材料', '重复打印与重拍', '引入新的折痕、物件、绘画或阴影', '让每次变化留下不可逆痕迹', '通过递归关系讨论记忆并非复制而是重构'],
        sourceUrl: 'https://www.johnhouck.com/', images: [], relations: []
      }
    ],
    awards: ['Hallie Ford Family Foundation Fellowship 2022'],
    exhibitions: ['Made in L.A. 2018 — Hammer Museum'],
    sources: [
      { label: 'John Houck official website', url: 'https://www.johnhouck.com/' },
      { label: 'Hammer Museum — Made in L.A. 2018', url: 'https://hammer.ucla.edu/exhibitions/2018/made-in-la-2018/john-houck' },
      { label: 'Whitney Museum — John Houck', url: 'https://whitney.org/artists/16635' }
    ]
  },
  'eileen-quinlan': {
    artistId: 'eileen-quinlan',
    projectCoverage: '5 个关键摄影 / 材料阶段已建立深度档案 · 2005–2023',
    imageCoverage: '2 / 5 项目已有代表图像',
    note: '按摄影棚物理操作整理：镜子、烟雾、滤色片、反射、相机、打印材料与镜面支撑。重点区分真实摄影棚制造的抽象与纯数字特效。',
    projects: [
      {
        title: 'Smoke & Mirrors', cluster: 'studio abstraction / mirrors / smoke / lighting gels', period: '2005–2009',
        summary: 'Whitney 明确记录：这一系列用烟雾、镜子、lighting gels 以及广告 / 产品摄影常见的棚拍工具搭建真实场景。复杂抽象不是后期生成，而是光线在镜面和烟雾之间多重反射后被中 / 大画幅相机记录。',
        actions: ['在摄影棚搭建镜面结构', '引入烟雾', '加入彩色 lighting gels 与人工灯光', '调整镜面角度制造重复反射', '使用中画幅 / 大画幅相机拍摄', '保留灰尘、划痕与反光等表面信息'],
        sourceUrl: 'https://whitney.org/media/1297',
        images: [img('https://whitneymedia.org/assets/artwork/40718/P_2011_342_cropped.jpeg', 'Smoke & Mirrors #12, 2005', '© Eileen Quinlan', 'https://whitney.org/collection/works/40718', 'Whitney Museum')],
        relations: [rel('展览', 'Undone — Whitney Museum at Altria', '2007–2008'), rel('收藏', 'Whitney Museum', 'multiple Smoke & Mirrors works')]
      },
      {
        title: 'Fahrenheit', cluster: 'studio still life / heat / abstraction', period: '2008',
        summary: 'Fahrenheit 延续她对摄影棚抽象的研究，但进一步把热、色彩、光泽和表面推到前景。摄影的“对象”变成拍摄装置内部发生的光学状态。',
        actions: ['使用摄影棚静物与反光材料', '控制人工灯光与彩色效果', '以相机记录材料表面与反射', '通过系列编号保持实验性连续'],
        sourceUrl: 'https://whitney.org/artists/11047', images: [],
        relations: [rel('收藏', 'Whitney Museum', 'Fahrenheit #25B, 2008')]
      },
      {
        title: 'Failed Portrait and 2013 works', cluster: 'portrait failure / surface / photographic ambiguity', period: '2013',
        summary: '2013 年的 Failed Portrait、A Record、Ghost 等作品把“失败”从技术事故变成作品条件。人像、物体和抽象表面不再稳定地区分，摄影是否成功再现对象本身成为问题。',
        actions: ['拍摄人物 / 物体 / 反射表面', '让焦点、遮挡与反光削弱对象识别', '保留摄影表面的不透明性', '用统一尺幅形成并列系列'],
        sourceUrl: 'https://www.eileenquinlan.com/2013', images: [],
        relations: [rel('收藏', 'Whitney Museum', 'Failed Portrait, 2013')]
      },
      {
        title: 'Mirror as photographic support', cluster: 'print / reflection / viewer / object', period: '2020s–',
        summary: '她早期把镜子当摄影棚道具，后期则把镜面推进为作品的物质支撑。这样打印图像、观众倒影和展厅环境会在同一件作品表面同时出现。',
        actions: ['制作摄影图像', '把图像安装 / 转移到镜面支撑', '保留镜子未被图像覆盖的反射区域', '让观众身体和展厅进入作品', '使“照片里”和“照片外”在观看时不断切换'],
        sourceUrl: 'https://www.eileenquinlan.com/2023', images: [], relations: []
      },
      {
        title: 'Doll Parts', cluster: 'body fragments / mannequin / mirror support / unstable image', period: '2023',
        summary: 'Doll Parts 把压缩、抽象化的身体、人体模型碎片、酸性色彩景观与镜面支撑组合起来。艺术家官网说明镜子在这里不再只是反射工具，而成为照片材料本身，使打印、投射与反射纠缠。',
        actions: ['拍摄身体局部和 mannequin fragments', '制造高压缩 / 抽象化身体图像', '把照片与镜面材料结合', '让镜面反射观众和展览空间', '将不同身体 / 景观图像在空间中非稳定排列'],
        sourceUrl: 'https://www.eileenquinlan.com/2023',
        images: [img('https://d2u3kfwd92fzu7.cloudfront.net/catalog/artwork/gallery/1055/photo/EQuinlan_SmokeAndMirrors202_2007_40x30in_EQ1052.jpg', 'Smoke & Mirrors #202, 2007 — related mirror vocabulary', '© Eileen Quinlan', 'https://www.artbasel.com/catalog/artwork/44897/Eileen-Quinlan-Smoke-Mirrors-202', 'Art Basel')],
        relations: [rel('展览', 'Doll Parts — Emanuela Campoli, Paris', '2023–2024')]
      }
    ],
    awards: [],
    exhibitions: ['Undone — Whitney Museum at Altria 2007–2008', 'Doll Parts — Emanuela Campoli 2023–2024'],
    sources: [
      { label: 'Eileen Quinlan official website', url: 'https://www.eileenquinlan.com/' },
      { label: 'Whitney — Smoke & Mirrors #12', url: 'https://whitney.org/collection/works/40718' },
      { label: 'Whitney — artist record', url: 'https://whitney.org/artists/11047' },
      { label: 'SFMOMA — artist record', url: 'https://www.sfmoma.org/artist/Eileen_Quinlan/' }
    ]
  },
  'penelope-umbrico': {
    artistId: 'penelope-umbrico',
    projectCoverage: '5 个平台图像 / 再摄影核心项目已建立深度档案 · 2006–现在',
    imageCoverage: '2 / 5 项目已有代表图像',
    note: '按“平台先生产海量图像 → 固定搜索词建立样本池 → 裁切 / 重新摄影 / 过滤 → 大规模实体编排”的流程整理。她的核心不是挪用某张名图，而是研究平台上成千上万张相似图为何会出现。',
    projects: [
      {
        title: 'Suns (from Sunsets) from Flickr', cluster: 'Flickr / search / crop / mass installation', period: '2006–现在',
        summary: '从 Flickr 搜索 sunset，下载用户上传的日落照片，只裁出太阳。标题随着搜索结果数量变化；安装时大量 4×6 英寸打印随机组成密集网格。SFMOMA 的保存说明也确认作品每次可重新打印并重新安装。',
        actions: ['在 Flickr 使用固定关键词 sunset 搜索', '记录当天搜索结果总数', '下载大量用户日落照片', '只裁切每张照片中的太阳', '输出普通快照尺寸照片', '随机 / 规则混合密集贴墙', '每次展出根据平台数量更新标题'],
        sourceUrl: 'https://www.sfmoma.org/read/sunsets-umbrico/',
        images: [img('https://d7hftxdivxxvm.cloudfront.net/?height=675&quality=85&resize_to=fill&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2FPr_qJPnuMaCmgDFluhgUqA%252FUmbrico_011.jpg&width=1200', 'Suns (from Sunsets) from Flickr — installation', '© Penelope Umbrico', 'https://www.sfmoma.org/read/sunsets-umbrico/', 'SFMOMA / installation context')],
        relations: [rel('收藏', 'SFMOMA', '5,377,183 Suns (from Sunsets) from Flickr (Partial), 2009')]
      },
      {
        title: 'TVs from Craigslist', cluster: 'Craigslist / accidental self-portrait / screen reflection', period: '2008–现在',
        summary: '从 Craigslist 二手电视商品图中选择屏幕反光里出现卖家身体、房间或相机的照片。卖家本来想证明电视状态，却意外留下自己的“无意自拍”和私人空间。',
        actions: ['浏览 Craigslist 二手电视商品列表', '筛选屏幕中出现反射的卖家 / 房间图像', '保存平台商品图片', '裁切电视屏幕与反射区域', '将无意自拍重新组织为摄影系列'],
        sourceUrl: 'https://mam.org/info/pressroom/2016/03/milwaukee-art-museum-debuts-penelope-umbrico-future-perfect-may-5/', images: [], relations: []
      },
      {
        title: 'Broken Sets / eBay', cluster: 'eBay / broken LCD / technological failure / abstraction', period: '2008–现在',
        summary: '从 eBay 卖家展示损坏 LCD 电视的商品照片中截取“仍通电但显示异常”的屏幕。裂屏、像素故障与彩色条带变成近似现代主义抽象，同时明确来自消费电子失效。',
        actions: ['在 eBay 搜索损坏 / 待售 LCD 电视', '筛选仍通电且屏幕故障明显的商品图', '裁掉房间与商品环境', '只保留故障屏幕', '输出到 metallic paper / chromogenic print', '以系列方式比较不同故障图案'],
        sourceUrl: 'https://kochgallery.com/artists/penelope-umbrico/',
        images: [img('https://d1hhug17qm51in.cloudfront.net/www-media/2026/08/17213659/2009.115.1-2_01_b02.jpg', 'Suns installation / SFMOMA collection context', '© Penelope Umbrico', 'https://www.sfmoma.org/artwork/2009.115.1-2/', 'SFMOMA')],
        relations: [rel('展览', 'Web on the Wall — Robert Koch Gallery', '2014')]
      },
      {
        title: 'Range: of Masters of Photography / Moving Mountains', cluster: 'canonical photography / smartphone filters / rephotography', period: '2012–现在',
        summary: '从经典摄影出版物中重拍 Ansel Adams、Edward Weston 等人的山岳图像，再通过大量手机滤镜反复处理。经典“自然景观”因此被当前消费级 app 的预设美学覆盖。',
        actions: ['从摄影史书籍中选择经典山岳照片', '用手机 / 数码设备重新拍摄印刷复制品', '连续套用不同 camera app filters', '保留预设滤镜产生的颜色与失真', '把同一经典图像生成大量版本', '重新打印 / 展示'],
        sourceUrl: 'https://aperture.org/editorial/inside-spring-party-penelope-umbrico/', images: [], relations: []
      },
      {
        title: 'Platform-image method', cluster: 'meta-method / search engine / collective authorship', period: '2006–现在',
        summary: 'Umbrico 的持续方法是把搜索框当成摄影工具。她并不需要亲自拍摄原始场景，而是把关键词、平台排序、卖家行为和用户重复拍摄视为图像生产系统。',
        actions: ['确定一个平台与关键词', '观察平台如何产生重复视觉模板', '建立大量样本而非挑一张名图', '裁切 / 重新摄影 / 滤镜处理', '通过数量、网格和标题把平台统计纳入作品', '让个人作者性退到集体图像行为之后'],
        sourceUrl: 'https://mam.org/info/pressroom/2016/03/milwaukee-art-museum-debuts-penelope-umbrico-future-perfect-may-5/', images: [],
        relations: [rel('展览', 'Future Perfect — Milwaukee Art Museum', '2016')]
      }
    ],
    awards: [],
    exhibitions: ['Future Perfect — Milwaukee Art Museum 2016', 'Web on the Wall — Robert Koch Gallery 2014'],
    sources: [
      { label: 'SFMOMA — Suns', url: 'https://www.sfmoma.org/read/sunsets-umbrico/' },
      { label: 'Milwaukee Art Museum — Future Perfect', url: 'https://mam.org/info/pressroom/2016/03/milwaukee-art-museum-debuts-penelope-umbrico-future-perfect-may-5/' },
      { label: 'Robert Koch Gallery — Penelope Umbrico', url: 'https://kochgallery.com/artists/penelope-umbrico/' },
      { label: 'Aperture — Moving Mountains', url: 'https://aperture.org/editorial/inside-spring-party-penelope-umbrico/' }
    ]
  },
  'sara-cwynar': {
    artistId: 'sara-cwynar',
    projectCoverage: '7 个摄影 / 影像 / 档案项目已建立深度档案 · 2013–2024',
    imageCoverage: '2 / 7 项目已有代表图像',
    note: '按“搜集商品和旧图像 → 分类 / 摆拍 → 再摄影 → 电影剪辑 → 多屏安装”的链条整理。她的关键不是复古视觉，而是研究颜色、广告、美术史和平台图像怎样共同生产欲望与价值。',
    projects: [
      {
        title: 'Flat Death / early archive photographs', cluster: 'archive / studio collage / rephotography', period: '2013–2014',
        summary: '早期作品已经形成其核心逻辑：旧杂志、百科全书、设计图、商品和自己拍摄的对象被摊在桌面重新组合，再拍成高密度平面，让档案、实物和图像复制品失去明确层级。',
        actions: ['收集旧书、杂志、广告与商品图', '在工作室分类并铺陈', '加入真实物件或再次打印的图片', '从上方或正面重新摄影', '通过复制和再摄影压平真实物与图像的区别'],
        sourceUrl: 'https://saracwynar.com/home-content.html', images: [], relations: []
      },
      {
        title: 'Soft Film', cluster: 'eBay objects / value / 16mm film', period: '2016',
        summary: '从一只 velveteen jewelry box 开始，连续出现 eBay、二手与被丢弃的物品。电影把实物、商品图、手、旁白和工作室摆拍变成一条关于“为什么某些东西曾经有价值、后来又失去价值”的流水线。',
        actions: ['从 eBay / 二手市场购买和搜集物件', '建立商品与图像档案', '在摄影棚逐件摆拍', '用 16mm / 数字方式记录', '把商品、手部动作、文字和旁白快速剪辑', '让物件价值变化成为 sequence'],
        sourceUrl: 'https://www.theicala.org/en/exhibitions/88-sara-cwynar-apple-red-grass-green-sky-blue', images: [], relations: []
      },
      {
        title: 'Rose Gold', cluster: 'color / advertising / desire / film', period: '2017',
        summary: '以“玫瑰金”这种被营销出来的颜色欲望为入口，研究颜色如何成为消费选择和身份想象。作品同时复制广告的诱惑力，又让这种诱惑显得人为和短暂。',
        actions: ['研究商业色名与消费语境', '搜集广告 / 商品 / 历史颜色资料', '摄影棚摆拍物件与身体', '把颜色作为跨镜头连接器', '使用旁白和文字拆解广告语言'],
        sourceUrl: 'https://www.theicala.org/en/exhibitions/88-sara-cwynar-apple-red-grass-green-sky-blue', images: [], relations: []
      },
      {
        title: 'Tracy', cluster: 'portrait / art-history reproduction / design / layered image', period: '2017–',
        summary: '以设计师 Tracy Ma 为反复出现的模特，将人物、艺术史复制品、色卡、网点和商业图像叠在同一平面。肖像不再只是描述某个人，而是测试“人如何被已有图像语言包围”。',
        actions: ['反复拍摄同一模特 Tracy Ma', '准备艺术史 / 广告 / 设计复制品', '在摄影棚将人物与印刷物层叠', '重新摄影', '使用 dye sublimation 等实体输出方式固定图层关系'],
        sourceUrl: 'https://mam.org/exhibitions/sara-cwynar/', images: [],
        relations: [rel('展览', 'Image Model Muse — Milwaukee Art Museum', '2019')]
      },
      {
        title: 'Red Film', cluster: 'consumerism / color / beauty / 16mm', period: '2018',
        summary: 'Soft Film、Rose Gold 三部曲的第三部。MoMA 说明它通过摄影棚 staging 把化妆品、汽车、古典绘画和工业生产并置，以红色作为连接器研究美、价值与消费主义如何相互转译。',
        actions: ['搜集红色商品、化妆品、汽车与艺术史图像', '在摄影棚搭建场景', '拍摄人物 / 物件 / 工业生产画面', '以红色作为剪辑中的视觉连接器', '混合 John Berger 等理论与旁白', '16mm 转高清影像'],
        sourceUrl: 'https://www.moma.org/magazine/articles/578', images: [],
        relations: [rel('收藏', 'MoMA', 'Red Film, 2018')]
      },
      {
        title: 'Glass Life', cluster: 'six-channel film / surveillance capitalism / image stream', period: '2021',
        summary: '六通道影像装置把广告、艺术、时尚、设计、政治和哲学图像铺成并行信息流。作品标题来自 Shoshana Zuboff 对 surveillance capitalism 的讨论，观众身处多个同时运行的屏幕之间。',
        actions: ['从长期图像档案中选择广告 / 艺术 / 网络素材', '拍摄新的工作室影像', '将静态与动态素材并行剪辑', '制作六个同步 / 互相回应的视频通道', '使用不同尺寸投影和显示屏', '以红色环境光把观众包入图像流'],
        sourceUrl: 'https://foxyproduction.com/exhibitions/sara-cwynar-2021-09-01/',
        images: [img('https://cdn.sanity.io/images/y7df71pe/production/aae4d6148dd6dfa47f1a2e1233ad14c033c66de0-3500x2333.jpg', 'Glass Life — installation view', '© Sara Cwynar', 'https://foxyproduction.com/exhibitions/sara-cwynar-2021-09-01/', 'Foxy Production')],
        relations: [rel('展览', 'Glass Life — Foxy Production, New York', '2021'), rel('展览', 'Apple Red/Grass Green/Sky Blue — ICA LA', '2022')]
      },
      {
        title: 'Baby Blue Benzo', cluster: 'car / color / historical costume / found image / AI', period: '2024',
        summary: '围绕 1955 Mercedes-Benz 300 SLR 及“baby blue / Ferrari red”等颜色价值系统展开。艺术家在洛杉矶摄影棚搭建圆形轨道、巨大道具和历史服装，同时混合自摄与档案 / found images，让汽车的拍卖价值成为图像价值的模型。',
        actions: ['研究 Mercedes-Benz 300 SLR 的商品 / 拍卖神话', '搭建两组圆形 camera tracks', '制作大型汽车复制品与道具', '安排模特、服装和摄影棚表演', '混合新拍视频、照片与 found images', '让同一汽车以复制品、cutout、照片和博物馆原车等多个状态反复出现'],
        sourceUrl: 'https://www.saracwynar.com/page-content/works/baby-blue-benzo.html',
        images: [img('https://cdn.sanity.io/images/y7df71pe/production/11ee59ef0d345eac542f06c7c740c49183bfd93f-3500x2333.jpg', 'Glass Life — multi-screen installation detail', '© Sara Cwynar', 'https://foxyproduction.com/exhibitions/sara-cwynar-2021-09-01/', 'Foxy Production')],
        relations: [rel('展览', 'Baby Blue Benzo — 52 Walker', '2024')]
      }
    ],
    awards: ['Louis Comfort Tiffany Foundation Award 2019'],
    exhibitions: ['Image Model Muse — Milwaukee Art Museum 2019', 'Glass Life — Foxy Production 2021', 'Apple Red/Grass Green/Sky Blue — ICA LA 2022', 'Baby Blue Benzo — 52 Walker 2024'],
    sources: [
      { label: 'Sara Cwynar official website', url: 'https://saracwynar.com/home-content.html' },
      { label: 'MoMA — Red Film', url: 'https://www.moma.org/magazine/articles/578' },
      { label: 'ICA LA — Apple Red/Grass Green/Sky Blue', url: 'https://www.theicala.org/en/exhibitions/88-sara-cwynar-apple-red-grass-green-sky-blue' },
      { label: 'Foxy Production — Glass Life', url: 'https://foxyproduction.com/exhibitions/sara-cwynar-2021-09-01/' }
    ]
  }
};