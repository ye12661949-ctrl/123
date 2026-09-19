import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

export const archiveBatch42: Record<string, ArtistArchive> = {
  'john-houck': {
    artistId: 'john-houck',
    projectCoverage: '7 个递归摄影 / 记忆 / 绘画节点已建立深档案 · 2011–2024',
    imageCoverage: '0 / 7 项目已有代表图像',
    note: 'Houck 的关键不是“看起来像 Photoshop”。他的核心动作长期是把一个已经完成的摄影平面重新变回现实中的物体：打印、折叠、摆放物件、再次拍摄，再把下一代打印继续送回镜头。作品因此是一个物理 feedback loop，而不是单次数字合成。2016 年后绘画、记忆和心理分析进一步进入这套递归系统。',
    projects: [
      {
        title: 'Aggregates', cluster: 'algorithm / color grid / fold / rephotography', period: '2011–2013',
        summary: 'Houck 早期以自己编写的程序生成颜色组合和网格，再把这些数字结构打印出来、折叠、重新拍摄。看似纯数字的几何图像其实不断经过纸张、灯光、透视和相机的物理阻力。',
        actions: ['编写程序生成有限颜色组合', '输出为规则色块 / 网格', '将打印纸折叠或改变平面角度', '在摄影棚重新布光和拍摄', '保留折痕、阴影和透视误差', '把成片再次输出并作为下一轮现实物体', '通过多代重拍让规则系统逐渐积累材料偏差'],
        sourceUrl: 'https://www.johnhouck.com/work/aggregates', images: [], relations: []
      },
      {
        title: 'A History of Graph Paper', cluster: 'childhood objects / recursion / still life / memory', period: '2013–2015',
        summary: '他把父母陆续归还的童年物件、祖父留下的工具、邮票和制图用品置入摄影流程。先拍物件，再把照片打印出来，把原物压在自身影像上重新拍摄，如此反复，使现实对象、旧记忆和照片副本逐层失去清晰边界。',
        actions: ['收集父母保存并重新交还的童年物件', '以网格 / 色纸建立初始静物背景', '第一次拍摄物件和背景', '打印第一次摄影结果', '把真实物件放到其打印影像上', '再次布光并重新摄影', '重复“照片变物体—物体再变照片”数轮', '有意留下纸边、接缝、折痕和阴影'],
        sourceUrl: 'https://www.johnhouck.com/work/history-of-graph-paper', images: [],
        relations: [rel('展览', 'A History of Graph Paper — On Stellar Rays, New York', '2013'), rel('展览', 'Ocean of Images: New Photography 2015 — MoMA', '2015')]
      },
      {
        title: 'Peg and Jon / relational-object works', cluster: 'gift / third entity / object portrait', period: '2013–2016',
        summary: '从只处理父母返还的物件转向朋友、熟人赠予的对象。Houck 把一张照片理解为他与另一个人之间形成的“第三实体”：对象不仅是静物，也携带给予关系和记忆关系。',
        actions: ['选择由具体他人赠予的个人物件', '记录物件与给予者关系', '把物件放进既有递归摄影流程', '反复打印、叠放和再摄影', '让标题或构图只保留部分人物线索', '通过表面层叠把关系记忆变成空间错觉'],
        sourceUrl: 'https://marianneboeskygallery.com/press/101-the-brooklyn-rail-john-houck-with-charlie/', images: [], relations: []
      },
      {
        title: 'Playing and Reality', cluster: 'psychoanalysis / painting / rephotography / memory', period: '2016',
        summary: '这一阶段绘画开始进入摄影。Houck 会依据记忆制作画面或绘画片段，再与折纸、网格和对象一起被重新拍摄；有些油漆直接落在最终照片表面，有些“笔触”其实只是上一代照片里被重拍的笔触。',
        actions: ['从心理分析和记忆叙述生成图像线索', '画出具象或半具象记忆片段', '把绘画 / 丝网印刷 / 色纸组合进静物结构', '摄影并打印', '在打印物上再折叠或继续绘画', '重新拍摄形成真假笔触叠层', '故意让实体油漆与“照片中的油漆”难以区分'],
        sourceUrl: 'https://www.johnhouck.com/work/playing-and-reality', images: [],
        relations: [rel('展览', 'Playing and Reality — On Stellar Rays, New York', '2016')]
      },
      {
        title: 'Playing and Reality — Made in L.A. works', cluster: 'memory painting / visible seams / layered photograph', period: '2018',
        summary: '在 Made in L.A. 2018 中，过去的童年纪念物进一步让位给从记忆制作的绘画与丝网印刷片段。画面仍保留纸边、缝隙和折痕，让观众可以逆向追踪“这一层究竟是现实材料还是前一代照片”。',
        actions: ['依据记忆制作绘画 / 丝网印刷图像', '与彩纸和已打印照片组成多层平面', '折叠部分照片制造明确物理折线', '重新拍摄整个结构', '保留边缘与接缝而不修掉', '用最终大尺幅输出压平所有真实空间层'],
        sourceUrl: 'https://hammer.ucla.edu/exhibitions/2018/made-in-la-2018/john-houck', images: [],
        relations: [rel('展览', 'Made in L.A. 2018 — Hammer Museum', '2018')]
      },
      {
        title: 'Accumulator', cluster: 'feedback loop / recto-verso / color system', period: '2018–',
        summary: 'Accumulator 延续颜色系统和重拍反馈循环，但把“正面 / 背面”和空间安装纳入作品。Made in L.A. 的作品以互为反向的色块打印形成 diptych，并背靠背安装，让本来只能在照片中发生的层叠进入真实展场。',
        actions: ['确定有限颜色组合', '制作互为反向 / 对应的色块结构', '通过打印与再摄影累积多代图像', '在纸面制造明显折痕打断无限递归感', '将成对作品背靠背或双面安装', '让观众必须移动身体才能读取 recto / verso'],
        sourceUrl: 'https://hammer.ucla.edu/exhibitions/2018/made-in-la-2018/john-houck', images: [], relations: []
      },
      {
        title: 'Recent shadow / psychological landscape works', cluster: 'shadow / painting / photography / psychological space', period: '2018–2024',
        summary: '近年的绘画与摄影越来越直接围绕 shadow、心理景观和记忆的不可靠性。折叠和再摄影仍存在，但不再只是技术谜题；阴影成为“真实物体存在过”和“我们只能通过反射光认识它”之间的连接。',
        actions: ['从个人关系 / 心理经验提炼场景', '制作绘画或色彩平面', '把现实物件压入画面结构', '利用强定向光生成阴影', '摄影、打印并重新摄影', '在最终图像中并置真实阴影、绘制阴影和被重拍的旧阴影'],
        sourceUrl: 'https://www.johnhouck.com/info/', images: [],
        relations: [rel('展览', 'Holding Environment — Marianne Boesky Gallery', '2018'), rel('展览', 'Perfect Temperature Lava — Candice Madey', '2024')]
      }
    ],
    awards: ['Hallie Ford Family Foundation Fellowship 2022'],
    exhibitions: ['A History of Graph Paper — On Stellar Rays 2013', 'Ocean of Images: New Photography 2015 — MoMA', 'Playing and Reality — 2016', 'Made in L.A. — Hammer Museum 2018', 'Perfect Temperature Lava — 2024'],
    sources: [
      { label: 'John Houck Studio', url: 'https://www.johnhouck.com/' },
      { label: 'Hammer Museum — Made in L.A. 2018', url: 'https://hammer.ucla.edu/exhibitions/2018/made-in-la-2018/john-houck' },
      { label: 'Hammer Collection — A History of Graph Paper', url: 'https://collections.hammer.ucla.edu/artwork/AH.2021.60.3' }
    ]
  },

  'eileen-quinlan': {
    artistId: 'eileen-quinlan',
    projectCoverage: '8 个工作室摄影 / 图像破坏 / 身体节点已建立深档案 · 2005–2026',
    imageCoverage: '0 / 8 项目已有代表图像',
    note: 'Quinlan 的抽象不是把照片后期“做糊”。她经常先在摄影棚真实搭建镜子、烟雾、彩色滤片、布、反光板和廉价背景，再拍这些本来属于商业商品摄影的工具；之后又持续引入扫描、刮擦、破坏、数字处理和身体图像。她的主线是：摄影棚如何从制造清楚商品的机器，变成制造不稳定图像的机器。',
    projects: [
      {
        title: 'Smoke & Mirrors', cluster: 'studio setup / mirrors / smoke / gels / abstraction', period: '2005–2009',
        summary: '系列直接使用“smoke and mirrors”字面材料：破碎或倾斜的镜子、烟、彩色 lighting gels 和商品摄影棚工具被搭在镜头前。真实装置非常简单，经过反射和折射后却产生难以辨认空间。',
        actions: ['在摄影棚摆放多块镜面', '加入破镜 / 倾斜镜片改变反射方向', '释放烟雾形成短暂体积', '使用彩色 lighting gels 改变光色', '移动灯位让同一物件出现多重反射', '使用相机直接记录而非后期绘制抽象', '保留商业产品摄影的光泽感但取消可出售商品'],
        sourceUrl: 'https://whitney.org/media/1297', images: [],
        relations: [rel('展览', 'Undone — Whitney Museum at Altria', '2007'), rel('收藏', 'Whitney Museum', 'Smoke & Mirrors works')]
      },
      {
        title: 'Nature Morte', cluster: 'still life / studio debris / photographic convention', period: '2010',
        summary: 'Quinlan 把静物摄影和摄影棚残余物本身变成对象。与早期烟雾镜面相比，图像更直接暴露布景、支撑、反射面与“拍完之后”的残片，使 still life 同时像产品照和摄影生产现场。',
        actions: ['保留 / 收集摄影棚中的背景材料和残片', '搭建近似商品静物的构图', '让支撑物、布景边缘和瑕疵可见', '通过近距离机位压缩空间', '输出为大尺幅 chromogenic print'],
        sourceUrl: 'https://miguelabreugallery.com/artists/quinlan/', images: [], relations: [rel('展览', 'Nature Morte — Miguel Abreu Gallery', '2010')]
      },
      {
        title: 'Curtains', cluster: 'fabric / screen / analog-digital surface', period: '2013',
        summary: 'Curtains 把帘布、屏幕和遮挡理解为摄影条件：它们既是现实中的布，也像图像软件里的 layer。作品继续以摄影棚搭景为起点，但视觉表面越来越接近扫描、屏幕或数字噪点。',
        actions: ['悬挂布料 / 半透明材料作为真实屏幕', '从前后改变光线透过方式', '拍摄褶皱、阴影和遮挡', '将图像扫描 / 数字化后再输出', '让布的物理纹理与像素 / 印刷纹理互相混淆'],
        sourceUrl: 'https://miguelabreugallery.com/artists/quinlan/', images: [],
        relations: [rel('展览', 'Curtains — Miguel Abreu Gallery', '2013'), rel('展览', 'New Photography 2013 — MoMA', '2013')]
      },
      {
        title: 'MoMA 2013 works — Brooks Brother / Passing Through / Sister / Tulips', cluster: 'studio image / recognizability / photographic object', period: '2013',
        summary: '这些作品显示她没有停留在纯抽象。花、身体线索、布料或对象偶尔重新出现，但始终被摄影棚反射、裁切和表面处理打断，使“看出是什么”和“只看到摄影表面”不断来回切换。',
        actions: ['选择可识别对象作为锚点', '通过镜面 / 裁切破坏完整轮廓', '控制浅空间与正面平面感', '让对象与背景材料共享同样光泽', '以成组方式让可识别与不可识别图像交替'],
        sourceUrl: 'https://www.moma.org/artists/43050-eileen-quinlan', images: [], relations: [rel('展览', 'New Photography 2013 — MoMA', '2013')]
      },
      {
        title: 'Mind Craft', cluster: 'image manipulation / body / studio / digital pressure', period: '2016',
        summary: 'Mind Craft 阶段，Quinlan 对摄影表面的处理进一步扩大。身体、日常图像和抽象摄影被混合，模拟与数字修改都不再被隐藏，图像被当成可以持续被压、切、翻转和再输出的材料。',
        actions: ['从工作室照片与既有个人图像中选材', '扫描 / 重新输入数字环境', '裁切、翻转、压缩或改变色彩', '重新打印为物理照片', '将不同处理强度作品并置', '保留明显的操作痕迹而不追求无缝后期'],
        sourceUrl: 'https://miguelabreugallery.com/artists/quinlan/', images: [], relations: [rel('展览', 'Mind Craft — Miguel Abreu Gallery', '2016')]
      },
      {
        title: 'Too Much', cluster: 'overproduction / body / degraded image / material excess', period: '2018',
        summary: '标题本身指向图像与材料的过量。Quinlan 将抽象工作室照片、身体、色彩和带有损坏感的表面放在一起，让“漂亮摄影表面”被噪点、刮痕和过度处理持续破坏。',
        actions: ['混合摄影棚抽象与具象身体图像', '对部分图像进行强烈数字 / 扫描处理', '保留颗粒、破损、摩尔纹或表面污染', '使用不同尺寸与方向打印', '通过展墙编排制造密度差异'],
        sourceUrl: 'https://miguelabreugallery.com/artists/quinlan/', images: [], relations: [rel('展览', 'Too Much — Miguel Abreu Gallery', '2018')]
      },
      {
        title: 'Dawn Goes Down / Displacements and Dead Trees', cluster: 'archive / damaged image / domestic-body fragments', period: '2020',
        summary: '2020 年两组展览把摄影表面的不稳定和更私人、日常的图像并置。相片看起来不再像封闭的“作品类型”，而像在不同时间被扫描、重印、损坏后重新回到档案里的东西。',
        actions: ['调用旧工作室图像和新拍图像', '对图像进行重扫 / 重印 / 再处理', '让物理损坏或数字破坏留在最终表面', '把家庭 / 身体碎片与抽象表面并列', '通过成对展览让不同来源图像互相污染'],
        sourceUrl: 'https://miguelabreugallery.com/artists/quinlan/', images: [],
        relations: [rel('展览', 'Dawn Goes Down — Miguel Abreu Gallery', '2020'), rel('展览', 'Displacements and Dead Trees — Miguel Abreu Gallery', '2020')]
      },
      {
        title: 'The Waves / Line Call', cluster: 'archive reopening / snapshot / processed vs untouched image', period: '2023–2026',
        summary: '近年实践开始更明确地打开个人档案。2026 的 Line Call 把横跨二十年的作品与朋友、家人、亲密空间的 snapshot 并置；这些“私人照”反而以几乎未处理方式打印，让它们与高度加工图像形成强烈反差。',
        actions: ['回看约二十年的个人图像档案', '选择过去高度处理的作品重新进入新语境', '加入朋友、家庭和亲密空间快照', '对快照采用较少修改的直接打印 / mounting', '让“保存记忆的照片”和“主动破坏稳定性的照片”面对面', '用跨年代展墙替代单系列线性叙事'],
        sourceUrl: 'https://miguelabreugallery.com/exhibitions/line-call/', images: [],
        relations: [rel('展览', 'The Waves — Miguel Abreu Gallery', '2023'), rel('展览', 'Line Call — Miguel Abreu Gallery', '2026')]
      }
    ],
    awards: [],
    exhibitions: ['Undone — Whitney 2007', 'New Photography 2013 — MoMA', 'Venice Biennale 2017', 'Too Much — 2018', 'Dawn Goes Down — 2020', 'The Waves — 2023', 'Line Call — 2026'],
    sources: [
      { label: 'Miguel Abreu Gallery — Eileen Quinlan', url: 'https://miguelabreugallery.com/artists/quinlan/' },
      { label: 'Whitney — Smoke & Mirrors', url: 'https://whitney.org/media/1297' },
      { label: 'MoMA — Eileen Quinlan', url: 'https://www.moma.org/artists/43050-eileen-quinlan' }
    ]
  },

  'sara-cwynar': {
    artistId: 'sara-cwynar',
    projectCoverage: '9 个摄影 / 电影 / 图像档案节点已建立深档案 · 2011–2024',
    imageCoverage: '0 / 9 项目已有代表图像',
    note: 'Cwynar 的方法不是简单“拼贴广告图”。她长期建立自己的 found-image / object archive，再把档案重新变成摄影棚：打印、扫描、摆放旧商品、让模特与图像互动、拍 16mm、配旁白、引用理论文本，再把同一材料继续变成书、静态照片与展览装置。理解她要追踪“图像进入下一张图像”的生产链。',
    projects: [
      {
        title: 'Kitsch Encyclopedia / early archive practice', cluster: 'archive / taxonomy / obsolete image / design history', period: '2011–2014',
        summary: '早期实践已经建立后来全部工作的基础：大量收集旧杂志、百科全书、设计书、商业目录和过时商品，再按颜色、类型、年代与视觉母题重排。档案不是研究后端，而是作品的原材料仓库。',
        actions: ['从旧书店 / 跳蚤市场 / 网络持续收集印刷品和对象', '拆页并建立个人图像档案', '按颜色、图形、产品类型重新分类', '扫描印刷图像保留网点 / 老化痕迹', '将不同来源图像重新拼成平面组合', '把 taxonomy 本身转成摄影 / 艺术家书'],
        sourceUrl: 'https://saracwynar.com/home-content.html', images: [], relations: [rel('出版', 'Kitsch Encyclopedia', 'artist book')]
      },
      {
        title: 'Flat Death', cluster: 'tabletop collage / rephotography / analog-digital flattening', period: '2013–2015',
        summary: 'Flat Death 将旧印刷图、对象、色纸与扫描图在桌面上重新布置后摄影。三维对象、二次印刷图和数字文件最后被压进同一摄影平面，让来源与尺度难以区分。',
        actions: ['从个人档案选出旧图片与对象', '打印 / 扫描部分图像改变尺度', '在桌面建立多层 still-life collage', '让真实物件压住或遮挡印刷图', '从正面重新摄影整个组合', '输出后让所有层变成同一平面'],
        sourceUrl: 'https://saracwynar.com/home-content.html', images: [], relations: [rel('展览', 'Flat Death — Foxy Production / MoMA PS1 contexts', '2010s')]
      },
      {
        title: 'Soft Film', cluster: 'eBay objects / film / value / tactile archive', period: '2016',
        summary: '第一部重要电影以 eBay 等渠道获得的廉价、过时商品和收藏物为主角。镜头反复触摸、搬运和分类物件，并用旁白讨论价值如何附着在物品和图像上。',
        actions: ['在 eBay / 二手市场购买过时对象', '把对象按颜色、材质或视觉联想布置进摄影棚', '以 16mm / moving image 方式近距离拍摄', '让手进入镜头搬运 / 抚摸 / 重排对象', '录制并剪辑理论 / 个人旁白', '把不同对象以快速 montage 串联', '让商品的实体重量与屏幕流通图像形成反差'],
        sourceUrl: 'https://saracwynar.com/home-content.html', images: [], relations: [rel('展览', 'Soft Film — MMK Frankfurt', '2017')]
      },
      {
        title: 'Rose Gold', cluster: 'color / smartphone / commodity desire / staged film', period: '2017–2018',
        summary: '以“rose gold”这种被科技公司、化妆品和消费品反复包装的颜色为连接器，把商品、身体、历史设计和品牌欲望卷进同一影像。颜色不只是审美，而是商品价值如何被视觉化的工具。',
        actions: ['搜集 rose-gold 商品 / 广告 / 印刷图', '在摄影棚搭建对应色彩场景', '拍摄模特、物件和既有图片', '将静态摄影与 moving image 混用', '用旁白连接设计史、消费与性别', '在剪辑中让同一颜色跨越不同商品类别'],
        sourceUrl: 'https://saracwynar.com/home-content.html', images: [], relations: [rel('展览', 'Rose Gold — The Approach / Foxy Production contexts', '2017–2018')]
      },
      {
        title: 'Red Film', cluster: '16mm / red commodity / choice / capitalism / studio staging', period: '2018',
        summary: '三部曲第三部用“红色”作为结构线索，把汽车、化妆品、艺术史、广告和舞者连接起来。拍摄本身高度编排，但剪辑故意制造图像与价值的过量，模拟被消费选择包围的视觉状态。',
        actions: ['收集红色商品 / 广告 / 艺术史图像', '搭建红色主导的摄影棚 still life', '安排舞者 / 模特与对象互动', '使用 16mm 拍摄并转为 HD video', '在剪辑阶段把 red 作为跨场景 visual connector', '叠加 John Berger 等视觉文化文本 / 旁白', '保留商品图像在不同价值系统间反复跳转'],
        sourceUrl: 'https://www.moma.org/magazine/articles/578', images: [],
        relations: [rel('收藏', 'MoMA', 'Red Film, 2018')]
      },
      {
        title: 'Image Model Muse / Modern in Your Life', cluster: 'design archive / female image / installation / museum collection', period: '2018–2020',
        summary: 'Cwynar 把设计史、博物馆档案与女性广告形象重新放进摄影和装置。她并不只复制经典设计，而是把“现代设计如何教人想象更好生活”与女性身体如何被商品化放在同一平面。',
        actions: ['研究博物馆设计档案 / 广告史', '挑选经典现代主义商品图与女性形象', '扫描并改变原图尺寸', '与新拍模特 / 对象共同在 studio 重演', '将静态照片、物件和文本共同安装', '通过展览墙面把历史设计与当代消费图像并列'],
        sourceUrl: 'https://saracwynar.com/home-content.html', images: [], relations: [rel('展览', 'Image Model Muse — Minneapolis Institute of Art / Milwaukee Art Museum', '2018–2019')]
      },
      {
        title: 'Glass Life', cluster: 'film / image circulation / archive / book / installation', period: '2021',
        summary: 'Glass Life 将此前多年积累的视觉档案进一步变成关于“图像如何替我们生活”的电影和书。私人拍摄、商品、艺术史、广告、互联网图与文字同时出现，档案在 film、publication 和 installation 之间迁移。',
        actions: ['从多年个人档案重新抽取图像', '补拍模特 / 对象 / 工作室场景', '混合 found image 与 original footage', '加入引用、字幕和双重旁白', '通过密集 montage 建立视觉过载', '把电影 frame / transcript 再编辑成书', '在展览中将 still image 与 moving image 并置'],
        sourceUrl: 'https://saracwynar.com/home-content.html', images: [],
        relations: [rel('展览', 'Glass Life — Foxy Production', '2021'), rel('出版', 'Sara Cwynar: Glass Life', '2021')]
      },
      {
        title: 'Apple / Apple Red, Grass Green, Sky Blue', cluster: 'color standard / commercial image / nature / product logic', period: '2022',
        summary: '这一阶段继续研究颜色名称如何把自然经验转成可销售标准。apple red、grass green、sky blue 看似来自世界，却也早已成为印刷、设计、屏幕和商品系统中的分类语言。',
        actions: ['从色名与标准化色彩出发搜集图像', '拍摄真实水果 / 植物 / 天空和商品', '把自然色与设计色卡 / 广告色并置', '使用扫描与 studio lighting 统一不同来源', '通过展览 sequence 让同名颜色不断改变语境'],
        sourceUrl: 'https://saracwynar.com/home-content.html', images: [],
        relations: [rel('展览', 'Apple — Cooper Cole', '2022'), rel('展览', 'Apple Red/Grass Green/Sky Blue — ICA LA', '2022')]
      },
      {
        title: 'Baby Blue Benzo', cluster: 'AI / car / assembly line / insomnia / panoramic scroll', period: '2024',
        summary: 'Cwynar 用两年收集档案、stock footage 和新素材，并把 AI-generated text / visuals 引入制作。核心物是 1955 Mercedes-Benz 300 SLR 的复制品；汽车从实体 replica、纸板 cutout、历史照片到博物馆原车不断变形。最终影像在超宽屏幕上水平滚动，模拟生产线与所谓技术进步。',
        actions: ['两年持续收集 stock / archival / internet imagery', '使用 AI 生成部分文本与视觉材料', '制作 1955 Mercedes-Benz 300 SLR 的大型 replica', '在洛杉矶 studio 搭建两套圆形 camera track', '使用大型 props 与历史服装拍摄模特和工作人员', '实拍 Mercedes-Benz Museum 原车及城市 / 罢工 / superbloom 等素材', '与剪辑师开发 continuous horizontal scroll', '故意保留 tape、glitch、拼接 seam 暴露图像构造', '用双重旁白把汽车生产、失眠、社交媒体和自动化连起来'],
        sourceUrl: 'https://www.saracwynar.com/page-content/works/baby-blue-benzo.html', images: [],
        relations: [rel('展览', 'Baby Blue Benzo — 52 Walker, New York', '2024')]
      }
    ],
    awards: [],
    exhibitions: ['Soft Film — MMK 2017', 'Image Model Muse — 2018–2019', 'Glass Life — 2021', 'Apple / ICA LA — 2022', 'S/S 23 — Foam 2023', 'Baby Blue Benzo — 52 Walker 2024'],
    sources: [
      { label: 'Sara Cwynar Studio', url: 'https://saracwynar.com/home-content.html' },
      { label: 'MoMA — Red Film', url: 'https://www.moma.org/magazine/articles/578' },
      { label: 'Baby Blue Benzo', url: 'https://www.saracwynar.com/page-content/works/baby-blue-benzo.html' }
    ]
  },

  'liz-deschenes': {
    artistId: 'liz-deschenes',
    projectCoverage: '8 个摄影材料 / 建筑 / 展示系统节点已建立深档案 · 2001–2023',
    imageCoverage: '0 / 8 项目已有代表图像',
    note: 'Deschenes 不是“做银色抽象照片”这么简单。她反复把摄影拆成光、感光纸、化学、时间、观看角度和展览建筑：有时完全不用相机，把纸在夜里暴露给环境光；有时引用 green screen、moiré、stereograph、frame rate 等图像技术。照片的位置、角度和观众的移动与曝光过程同等重要。',
    projects: [
      {
        title: 'Green Screen', cluster: 'chroma key / monochrome / background as subject', period: '2001–2002',
        summary: '以影视工业用于抠像和替换背景的 green screen 为出发点。原本应该“消失”的背景色被单独留下，摄影不再呈现前景对象，而把图像生产中通常被删除的技术底层变成主体。',
        actions: ['研究影视 chroma-key / green-screen 技术', '把背景色从合成流程中抽离', '制作近似单色摄影平面', '以摄影输出的物质表面替代“被替换的背景”', '通过系列展示让技术背景成为可见前景'],
        sourceUrl: 'https://whitney.org/artists/9359', images: [], relations: [rel('收藏', 'Whitney Museum', 'Green Screen #7, 2001')]
      },
      {
        title: 'Black & White / Kodak / color-system works', cluster: 'photographic standard / industrial color / material code', period: '2002–2008',
        summary: '这一阶段持续把摄影工业自身的标准、黑白 / 彩色系统和 Kodak 等技术语言拿来做图像。作品并不记录外部事件，而是在问：一种“颜色”或“黑白”在摄影系统里到底由什么材料和规则产生。',
        actions: ['从摄影工业标准 / 产品语言选择结构', '制作控制色彩或灰阶的摄影输出', '比较不同打印 / 显影材料产生的表面差异', '以系列方式并排观看而非追求单张叙事'],
        sourceUrl: 'https://miguelabreugallery.com/artists/deschenes/works/', images: [], relations: []
      },
      {
        title: 'Moiré / Registration', cluster: 'printing error / screen interference / registration', period: '2007',
        summary: 'Moiré 和 Registration 把印刷与图像复制里通常应被校正的套准、网屏干涉和视觉噪点变成作品。她不是模拟一个“故障滤镜”，而是在摄影与印刷系统本身的重复频率中制造结构。',
        actions: ['引用印刷 registration / screen 机制', '让两个规律网屏发生轻微错位', '保留由错位产生的 moiré interference', '放大技术误差到观看尺度', '通过 UV laminated chromogenic print 等材料固定表面'],
        sourceUrl: 'https://miguelabreugallery.com/artists/deschenes/works/', images: [], relations: [rel('展览', 'Registration — Miguel Abreu Gallery', '2007')]
      },
      {
        title: 'Left/Right / Center', cluster: 'binocular vision / spatial orientation / photographic plane', period: '2008',
        summary: '标题直接调用左右眼、中心和空间定位。照片不再像窗户指向别处，而被当成能在建筑里改变观看方向的平面；观众身体相对于作品的位置成为图像的一部分。',
        actions: ['制作左右 / 中心对应的摄影平面', '控制作品尺度与悬挂高度', '利用表面反射让观众与空间进入图像', '让观看者通过移动比较不同位置关系'],
        sourceUrl: 'https://whitney.org/artists/9359', images: [], relations: []
      },
      {
        title: 'Tilt / Swing (360° field of vision)', cluster: 'cameraless photogram / moonlight / architecture / 360 vision', period: '2009–2012',
        summary: '六块大型无相机 photogram 依据 Herbert Bayer 1935 年“360° field of vision”图式组成浅门廊。Deschenes 把未遮挡的感光纸带到夜间，以月光、星光和附近建筑环境光曝光，再在室内用 silver toner 固定。银色表面同时继续反射展场和观众。',
        actions: ['准备大尺幅感光纸而不使用相机', '夜间把纸直接暴露在环境光中', '让月光 / 星光 / 建筑余光形成细微曝光差', '天亮前带回室内处理', '使用 silver toner 固定并形成镜面般表面', '将六块 photogram 按 Bayer 360° 视野图式分布', '让作品继续因氧化 / 环境条件累积时间痕迹', '用反射把观众和展厅实时纳入作品'],
        sourceUrl: 'https://www.moma.org/collection/works/161348', images: [],
        relations: [rel('展览', 'Tilt / Swing — Miguel Abreu Gallery', '2009'), rel('展览', 'Whitney Biennial', '2012')]
      },
      {
        title: 'Stereographs', cluster: 'stereoscopy / photogram / camera-as-room / architecture', period: '2012–2014',
        summary: 'Stereographs 参考 19 世纪 stereoscopy：两张近似图像通过机械装置产生立体错觉。Deschenes 不制作传统双眼风景，而把细长 photogram 成对连接成有角度的结构，像 view camera 的 bellows，也重新切割展厅本身。',
        actions: ['研究 stereoscopic 双图观看原理', '制作细长银调 photogram', '将两块 / 多块作品以角度连接', '引用大型 view camera bellows 结构', '根据具体展厅入口 / 转角设计安装', '让作品框出空白空间而不是外部景物', '让 photogram 在展览中继续氧化变化'],
        sourceUrl: 'https://miguelabreugallery.com/exhibitions/stereographs-1-4-risefall/', images: [],
        relations: [rel('展览', 'Secession, Vienna', '2012'), rel('展览', 'Stereographs #1–4 (Rise/Fall) — Miguel Abreu Gallery', '2014')]
      },
      {
        title: 'Gallery 7', cluster: 'site-specific / Blue Wool Scale / analog-digital / museum history', period: '2014–2015',
        summary: 'Walker 的一年期项目把摄影过程、展厅建筑史和机构记忆合在一起。一组银调 gelatin silver prints 与数字 pigment print / acrylic 并置；颜色来自用于测试颜料耐光性的 Blue Wool Scale，同时恢复旧式 picture rail，让作品像测量装置一样校准空间。',
        actions: ['研究 Walker 第七层展厅的建筑 / 展览历史', '引用 Blue Wool Scale 的耐光标准选择色彩', '制作 silver-toned gelatin silver prints', '制作 translucent / acrylic digital pigment elements', '按 Edward Larrabee Barnes 建筑角度重新布置面板', '恢复类似旧馆使用的 picture-rail hanging system', '让模拟反射面与数字吸收 / 折射面同时存在', '让展览持续一年以强调时间和现场光变化'],
        sourceUrl: 'https://www.walkerart.org/whats-on/liz-deschenes/', images: [],
        relations: [rel('展览', 'Liz Deschenes: Gallery 7 — Walker Art Center', '2014–2015'), rel('收藏', 'Walker Art Center', 'Gallery 7, 2014')]
      },
      {
        title: 'Rates (Frames per Second) / Gravity’s Pull', cluster: 'proto-cinema / frame rate / perception / recent installation', period: '2018–2023',
        summary: '后期继续把摄影放进运动影像史。Rates 从 Étienne-Jules Marey 的 chronophotography 与 frame rate 出发，研究静态照片怎样产生运动错觉；Gravity’s Pull 则继续利用反射、序列与安装角度，让重力、观看路线和表面变化成为作品组成。',
        actions: ['研究 Marey 等 19 世纪运动摄影技术', '将 frame-per-second 概念转译为静态作品序列', '以重复间距 / 面板关系模拟时间间隔', '在两个展厅之间建立不同观看速率', '继续使用反光摄影表面记录观众移动', '依据建筑重力方向和墙面关系决定安装角度'],
        sourceUrl: 'https://miguelabreugallery.com/exhibitions/rates-frames-per-second/', images: [],
        relations: [rel('展览', 'Rates (Frames per Second) — Miguel Abreu Gallery', '2018'), rel('展览', 'Gravity’s Pull — Miguel Abreu Gallery', '2023–2024')]
      }
    ],
    awards: ['Rappaport Prize 2014'],
    exhibitions: ['Tilt / Swing — 2009', 'Whitney Biennial 2012', 'Secession 2012', 'Gallery 7 — Walker 2014–2015', 'ICA Boston survey 2016', 'Rates (Frames per Second) — 2018', 'Gravity’s Pull — 2023–2024'],
    sources: [
      { label: 'Whitney — Liz Deschenes', url: 'https://whitney.org/artists/9359' },
      { label: 'Walker — Gallery 7', url: 'https://www.walkerart.org/whats-on/liz-deschenes/' },
      { label: 'Miguel Abreu Gallery — Liz Deschenes', url: 'https://miguelabreugallery.com/artists/deschenes/' },
      { label: 'ICA Boston survey', url: 'https://www.icaboston.org/articles/first-comprehensive-survey-artist-liz-deschenes-opens-june-29-2016/' }
    ]
  }
};