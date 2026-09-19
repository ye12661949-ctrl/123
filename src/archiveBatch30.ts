import type { ArtistArchive, ArchiveImage, ArchiveRelation } from './archiveData';

const img = (url: string, title: string, credit: string, sourceUrl: string, sourceLabel: string): ArchiveImage => ({ url, title, credit, sourceUrl, sourceLabel });
const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

export const archiveBatch30: Record<string, ArtistArchive> = {
  'thomas-ruff': {
    artistId: 'thomas-ruff',
    projectCoverage: '8 个关键图像系统已建立深度档案 · 1979–现在',
    imageCoverage: '2 / 8 项目已有代表图像',
    note: '按“摄影图像从哪里来、经过什么技术系统、最后如何被重新定义”整理。Ruff 的关键不是固定风格，而是不断更换图像来源：自己拍、科学档案、新闻图、色情 JPEG、NASA 数据、软件生成 photogram。',
    projects: [
      {
        title: 'Porträts', cluster: 'portrait / typology / scale', period: '1981–1991 / 1998–2001',
        summary: '以近似证件照的正面规则拍摄朋友和同代人，早期先做小尺幅，之后把同样中性的人脸放大到超过真人尺度，使“无表情”和“客观”本身变成一种高度人工的观看制度。',
        actions: ['选择相对普通的熟人 / 同代人作为被摄者', '使用正面机位与均匀照明', '要求中性表情和直接目光', '尽量降低背景与姿势信息', '把小幅肖像进一步放大为巨幅彩色照片'],
        sourceUrl: 'https://www.thomasruff.com/en/works/portraits/',
        images: [img('https://www.thomasruff.com/site/assets/files/1130/038_fries_p__druck.jpg', 'Portrait (P. Fries)', '© Thomas Ruff', 'https://www.thomasruff.com/en/works/portraits/', 'Thomas Ruff official website')],
        relations: []
      },
      {
        title: 'Sterne', cluster: 'astronomy archive / appropriation / enlargement', period: '1989–1992',
        summary: '当普通相机无法满足他对夜空细节的要求后，Ruff 转而使用欧洲南方天文台拍摄的高质量天文底片。艺术家的动作从“拍星空”转向选择、裁切、旋转和放大科学图像。',
        actions: ['获取欧洲南方天文台的天文摄影资料', '从科学底片中选择具体天区', '重新确定画面方向与裁切', '将原本服务科研的图像放大为大型艺术摄影', '保留星空的匿名性而不制造浪漫叙事'],
        sourceUrl: 'https://www.davidzwirner.com/artists/thomas-ruff/survey',
        images: [img('https://cdn.sanity.io/images/juzvn5an/release-adp/77f13b14cd1448e8aedb15d54e91a7b1a7a1708a-2269x3000.jpg?w=3840', 'Stern 13h 32m/-45°, 1992', '© Thomas Ruff', 'https://www.davidzwirner.com/artworks/thomas-ruff-stern-13h-32m-45--f1d79', 'David Zwirner')],
        relations: []
      },
      {
        title: 'nudes', cluster: 'internet image / JPEG / digital blur', period: '1999–',
        summary: '从互联网色情图像中寻找低分辨率 JPEG，不把其还原成“清晰照片”，而是放大压缩痕迹、模糊和像素结构，使网络图像的技术贫乏本身成为形式。',
        actions: ['从互联网获取现成色情 JPEG', '筛选构图与身体关系', '放大低分辨率源文件', '通过数字模糊和色彩调整压低细节', '以大型喷墨 / 摄影输出重新物质化屏幕图像'],
        sourceUrl: 'https://www.davidzwirner.com/artists/thomas-ruff/survey', images: [], relations: []
      },
      {
        title: 'jpegs', cluster: 'compressed internet image / catastrophe / abstraction', period: '2004–',
        summary: '把互联网中的新闻、灾难、战争和景观 JPEG 极度放大，让压缩算法产生的 8×8 像素块从本来应被忽略的技术副作用变成画面的主要结构。',
        actions: ['从互联网搜集不同主题的 JPEG', '保留低分辨率与压缩状态', '大幅放大图像', '不修复压缩伪影', '让可识别场景与抽象像素格同时成立'],
        sourceUrl: 'https://www.davidzwirner.com/artists/thomas-ruff/survey', images: [], relations: []
      },
      {
        title: 'ma.r.s. / Cassini', cluster: 'space data / NASA / digital remapping', period: '2008–2014',
        summary: '继续使用科学机构公开的太空图像数据。通过颜色、尺度、视角和数字处理把原本服务于行星研究的图像改造成新的“风景摄影”，同时明确暴露它来自机器而非人的视点。',
        actions: ['获取 NASA / 太空任务公开图像', '选择火星与土星数据', '调整色彩、视角和尺度', '将科学记录重新转为大型摄影', '把无人探测器的图像生产纳入摄影史'],
        sourceUrl: 'https://www.davidzwirner.com/artists/thomas-ruff/survey', images: [], relations: []
      },
      {
        title: 'Fotogramme', cluster: 'software-generated photogram / virtual camera-less photography', period: '2012–',
        summary: '不用暗房把物体真正放到相纸上，而是在 3D 软件中模拟透明物体、虚拟光源和感光平面，再把计算生成的结果输出成大型摄影。它把“无相机摄影”推进到完全虚拟的摄影棚。',
        actions: ['在 3D 软件中建立虚拟物体', '设置虚拟透明度、材质与光源', '模拟传统 photogram 中光穿过物体的效果', '由计算机渲染最终图像', '以大型摄影输出把虚拟曝光重新实体化'],
        sourceUrl: 'https://www.davidzwirner.com/exhibitions/2013/photograms-and-mars/press-release', images: [],
        relations: [rel('展览', 'photograms and ma.r.s. — David Zwirner, New York', '2013')]
      },
      {
        title: 'press++', cluster: 'press archive / front-back scan / image-text montage', period: '2015–',
        summary: '使用 1920s–1970s 美国报刊原始新闻照片，同时扫描纸张正面与背面，再数字叠合。记者标记、印章、说明文字、裁切线和图像被压进同一平面，新闻照片不再被当作纯图像。',
        actions: ['收集报刊使用过的原始新闻照片', '分别扫描照片正面与背面', '保留背后的文字、印章、签名与污迹', '数字叠合正反两面', '让图像与编辑 / 流通信息互相遮挡'],
        sourceUrl: 'https://www.davidzwirner.com/artists/thomas-ruff/survey/press-series', images: [], relations: []
      },
      {
        title: 'Working principle: source systems', cluster: 'meta-method / image source / technical apparatus', period: '1979–现在',
        summary: '从 Porträts 到 press++，Ruff 的连续性并不是视觉风格，而是每次先选择一种图像生产系统，再把它推到极限：证件照、科学摄影、互联网 JPEG、新闻档案、3D 渲染都成为新的“相机”。',
        actions: ['先确定一种图像来源 / 技术系统', '研究该系统默认的观看规则', '改变尺度、裁切、清晰度或颜色', '保留技术系统原本应被隐藏的特征', '通过打印重新讨论“摄影是谁拍的”'],
        sourceUrl: 'https://www.davidzwirner.com/artists/thomas-ruff/survey', images: [], relations: []
      }
    ],
    awards: [],
    exhibitions: ['photograms and ma.r.s. — David Zwirner, New York 2013'],
    sources: [
      { label: 'Thomas Ruff official website', url: 'https://www.thomasruff.com/' },
      { label: 'David Zwirner — Thomas Ruff survey', url: 'https://www.davidzwirner.com/artists/thomas-ruff/survey' },
      { label: 'David Zwirner — press++', url: 'https://www.davidzwirner.com/artists/thomas-ruff/survey/press-series' }
    ]
  },
  'moyra-davey': {
    artistId: 'moyra-davey',
    projectCoverage: '7 个摄影 / 邮寄 / 影像节点已建立深度档案 · 1990s–2022',
    imageCoverage: '2 / 7 项目已有代表图像',
    note: '把 Davey 的三个动作系统分开：拍摄日常表面、把打印折成信封真实邮寄、把阅读和私人经验写成 essay film。她的“流通痕迹”不是展示效果，而是作品真正经历过的时间。',
    projects: [
      {
        title: 'Copperheads', cluster: 'macro photography / money / circulation', period: '1990s–',
        summary: '把大量流通过的一美分硬币极近距离放大。磨损、氧化、划痕和林肯头像不是静物细节，而是物品被交换和触摸的累积记录。',
        actions: ['搜集普通一美分硬币', '使用近距离 / 微距摄影放大表面', '把不同硬币重复拍摄成类型', '以网格或系列观看差异', '让流通痕迹取代“漂亮静物”'],
        sourceUrl: 'https://www.moma.org/artists/39770-moyra-davey', images: [], relations: []
      },
      {
        title: 'Mailers / mailed photographs', cluster: 'fold / tape / postal circulation / photographic object', period: '2000s–现在',
        summary: '把摄影打印本身折成信封，用胶带固定、写地址、贴邮票，然后经过真实邮政系统寄给亲友或展览场所。作品到达后再展开上墙，因此折痕、邮戳、污迹和胶带都是实际运输留下的结构。',
        actions: ['打印 C-print / 摄影图像', '把照片正面朝内或按既定方式折叠', '用胶带封合', '写地址并贴邮票', '通过正常邮政寄送', '到达后展开并把邮寄痕迹作为作品表面展示'],
        sourceUrl: 'https://whitney.org/exhibitions/2012-biennial/moyra-davey',
        images: [img('https://storage.googleapis.com/rail-legacy-media/production/content/article_image/image/17241/Moyra_Davey_Dust_Amp_Trees_Grid.jpg', 'Mailed photographs — folded, taped and stamped surfaces', '© Moyra Davey', 'https://brooklynrail.org/2016/06/artseen/moyra-davey-7-albums', 'The Brooklyn Rail')],
        relations: [rel('展览', 'Whitney Biennial', '2012')]
      },
      {
        title: 'The Coffee Shop, The Library', cluster: 'mailers / public-private spaces / grid', period: '2011',
        summary: '为 MoMA New Photography 2011 制作。她在图书馆与咖啡馆拍摄书、桌面和细节，再把照片折叠邮寄。最终网格同时保留“阅读空间”和“运输过的照片物件”两个层次。',
        actions: ['在 MoMA 图书馆、公共图书馆与咖啡馆拍摄', '选择书、杂志、咖啡杯和阅读空间细节', '将模拟照片打印', '把照片折叠成邮件并寄送', '展开后按网格重组', '保留邮票、地址、胶带与折痕'],
        sourceUrl: 'https://www.moma.org/interactives/exhibitions/2011/newphotography/moyra-davey/',
        images: [img('https://www.moma.org/media/W1siZiIsIjIzNjcxNyJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=33185a6f21ed5d2a', 'The Coffee Shop, The Library, 2011', '© Moyra Davey', 'https://www.moma.org/collection/works/147668', 'MoMA')],
        relations: [rel('展览', 'New Photography 2011 — MoMA', '2011–2012'), rel('收藏', 'MoMA', 'The Coffee Shop, The Library')]
      },
      {
        title: 'Les Goddesses', cluster: 'essay film / sisters / Mary Wollstonecraft / reading', period: '2011',
        summary: '从姐妹关系、家庭历史与 Mary Wollstonecraft 的文字出发，以第一人称旁白、静态图像、录像和引用构成 essay film。个人史不是“自传素材库”，而是不断被阅读和他人文本改写。',
        actions: ['先写作并组织第一人称旁白', '阅读并引用 Mary Wollstonecraft 等文本', '拍摄家庭与日常环境', '使用静态照片与动态影像交错', '通过剪辑让家庭史和文学史相互跳接'],
        sourceUrl: 'https://www.moma.org/calendar/film/5495', images: [], relations: []
      },
      {
        title: 'Hemlock Forest', cluster: 'essay film / Akerman / grief / reenactment', period: '2016',
        summary: '在制作期间遭遇 Chantal Akerman 去世，Davey 将姐妹故事、儿子成年、疾病、哀悼与对 Akerman 电影的重演交织起来。作品强调引用不是注脚，而是可以通过身体重新演一次。',
        actions: ['写第一人称文本', '拍摄自然、家庭与儿子', '引用并讨论 Chantal Akerman', '重演 Akerman 电影中的具体镜头 / 姿势', '把私人损失与电影史放进同一剪辑结构'],
        sourceUrl: 'https://www.moma.org/calendar/events/8135', images: [], relations: []
      },
      {
        title: 'Portrait/Landscape / Skeletal Buddha', cluster: 'documenta / mailed grid / expanded photo installation', period: '2017',
        summary: '在 documenta 14 中继续扩大 Mailers 的数量与尺度。数十到上百张经过折叠、邮寄的 C-print 被组织成巨型网格，让单张照片的内容退到“流通系统 + 墙面 sequence”之后。',
        actions: ['制作大量 C-print', '折叠、贴胶带并邮寄', '保留邮戳与地址', '到达展场后重新展开', '根据墙面把几十 / 上百张照片组织成大型网格'],
        sourceUrl: 'https://www.documenta14.de/en/artists/13703/moyra-davey', images: [],
        relations: [rel('展览', 'documenta 14 — Athens / Kassel', '2017')]
      },
      {
        title: 'Horse Opera and later films', cluster: 'essay film / music / youth / archive', period: '2019–2022',
        summary: '后续影像继续将个人经验、音乐、引用、现场观察和档案式材料混合。MoMA 2022 的电影项目把这种方法作为她 15 年影像实践的主线：写作、摄影和电影互相嵌套。',
        actions: ['积累文字笔记与引用', '拍摄日常 / 人物 / 场所', '将既有照片与新录像混合', '以 voice-over 建立非线性论述', '通过放映而非单纯墙面展示形成时间结构'],
        sourceUrl: 'https://www.moma.org/calendar/film/5495', images: [],
        relations: [rel('展览', 'Moyra Davey film retrospective — MoMA', '2022')]
      }
    ],
    awards: ['Scotiabank Photography Award 2018'],
    exhibitions: ['New Photography 2011 — MoMA', 'Whitney Biennial 2012', 'documenta 14 — 2017', 'Moyra Davey film retrospective — MoMA 2022'],
    sources: [
      { label: 'MoMA — Moyra Davey', url: 'https://www.moma.org/artists/39770-moyra-davey' },
      { label: 'MoMA — New Photography 2011', url: 'https://www.moma.org/interactives/exhibitions/2011/newphotography/moyra-davey/' },
      { label: 'Whitney Biennial 2012', url: 'https://whitney.org/exhibitions/2012-biennial/moyra-davey' },
      { label: 'documenta 14', url: 'https://www.documenta14.de/en/artists/13703/moyra-davey' }
    ]
  },
  'wolfgang-tillmans': {
    artistId: 'wolfgang-tillmans',
    projectCoverage: '7 个摄影 / 暗房 / 展示节点已建立深度档案 · 1980s–现在',
    imageCoverage: '1 / 7 项目已有代表图像',
    note: '不把 Tillmans 简化成“日常摄影 + 随意挂墙”。档案按三条同时发展的线整理：直接摄影、无相机暗房实验、展览编排 / 桌面研究。关键是不同图像等级被故意放在同一观看系统中。',
    projects: [
      {
        title: 'Early social / intimate photographs', cluster: 'youth culture / intimacy / everyday photography', period: 'late 1980s–1990s',
        summary: '朋友、夜生活、青年文化、衣服、身体和私人空间构成早期核心。画面常像快照，但输出大小、纸张、墙面关系与相邻图像都经过反复决定。',
        actions: ['长期拍摄朋友、俱乐部、日常房间与社会场景', '同时使用不同相机与画幅', '保留抓拍式姿态和环境信息', '以不同尺寸打印', '在展览中重新决定每张图的邻接关系'],
        sourceUrl: 'https://www.moma.org/calendar/exhibitions/5449', images: [], relations: []
      },
      {
        title: 'paper drop', cluster: 'paper / photographic object / curved surface', period: '2001–',
        summary: '把相纸本身卷曲后重新拍摄。作品看似抽象，但对象就是摄影纸；“照片的支撑体”被折回镜头前，摄影同时拍摄自己的物质基础。',
        actions: ['使用光面摄影纸', '让纸张形成自然卷曲 / 弧面', '在工作室布光', '近距离拍摄纸面与反射', '把最终照片再次输出到纸上形成自指循环'],
        sourceUrl: 'https://www.moma.org/calendar/exhibitions/5449', images: [], relations: []
      },
      {
        title: 'Silver works', cluster: 'darkroom chemistry / paper feed / contamination', period: '1990s–现在',
        summary: '通过让未曝光相纸经过显影化学过程、故意保留设备中的残留与污染生成抽象表面。图像不是相机记录外部对象，而是暗房机器、银盐和化学时间直接留下的痕迹。',
        actions: ['使用未通过相机曝光的感光纸', '让纸张经过显影 / 冲洗设备', '不完全清理机器中的残留物', '允许银盐、化学污染和机械痕迹生成图像', '选择并放大具体结果'],
        sourceUrl: 'https://www.moma.org/momaorg/shared/pdfs/docs/visitor-guide-wolfgang-tillmans-to-look-without-fear.pdf', images: [], relations: []
      },
      {
        title: 'Freischwimmer', cluster: 'camera-less photography / light drawing / chemical trace', period: '2000s–',
        summary: '无相机制作的大幅抽象图像。MoMA 的资料强调其通过感光纸、开发剂与未被完全清洁的处理条件制造不可预测的化学反应，使污迹、银盐和流动感成为图像。',
        actions: ['不使用相机拍摄外部对象', '直接处理光敏摄影纸', '控制光、显影液和化学反应', '允许污染与不可控痕迹进入', '以大尺度 chromogenic print 输出'],
        sourceUrl: 'https://www.moma.org/collection/works/164471', images: [],
        relations: [rel('收藏', 'MoMA', 'Freischwimmer 199, 2012')]
      },
      {
        title: 'Truth Study Center', cluster: 'table installation / media / politics / epistemology', period: '2005–现在',
        summary: '把报纸、杂志剪页、科研材料、政治文本、自己的照片和抽象色彩图放进玻璃覆盖的木桌。这里不是“摄影展陈”，而是一个持续更新的视觉研究桌，讨论何种东西被称为事实。',
        actions: ['持续收集新闻、科学和政治印刷材料', '把自己的照片与外部文本并置', '在低矮木桌上平铺材料', '用玻璃压住但保留阅读关系', '在不同展览中重新编辑内容与桌面顺序'],
        sourceUrl: 'https://www.stedelijk.nl/nl/collectie/89698-wolfgang-tillmans-truth-study-centre-%28stedelijk%29',
        images: [img('https://s3-eu-west-1.amazonaws.com/production-static-stedelijk/images/adlib/fotografie/2009.1.00011992941-1646193644613.jpg', 'truth study centre (Stedelijk)', '© Wolfgang Tillmans / Stedelijk Museum', 'https://www.stedelijk.nl/nl/collectie/89698-wolfgang-tillmans-truth-study-centre-%28stedelijk%29', 'Stedelijk Museum')],
        relations: [rel('收藏', 'Stedelijk Museum Amsterdam', 'truth study centre')]
      },
      {
        title: 'Installation practice', cluster: 'wall editing / non-hierarchical display / sequence', period: '1990s–现在',
        summary: '照片可以被贴墙、装框、夹住、以巨大或极小尺寸出现，旁边也可能是复印纸或桌面材料。决定作品的不是一张“主图”，而是不同图像、空白、尺度和安装高度构成的临时语法。',
        actions: ['为具体展厅重新选择作品', '同时使用巨大、小幅、装框与无框打印', '用胶带 / 图钉 / 夹具等不同方式固定', '通过空白与间距控制观看速度', '把题材不同的照片放在同一墙面建立非等级关系'],
        sourceUrl: 'https://www.moma.org/calendar/exhibitions/5449', images: [],
        relations: [rel('展览', 'To look without fear — MoMA', '2022–2023')]
      },
      {
        title: 'Astronomy / transit of Venus', cluster: 'telescope / visibility / scientific observation', period: '2004 / 2012',
        summary: '天文学从少年时期就贯穿他的观看经验。2004 与 2012 年金星凌日时，他把相机接到望远镜观看太阳，以极具体的科学事件继续追问“可见性的边界”。',
        actions: ['使用望远镜观察天体', '将相机与望远镜视野连接', '连续记录金星在太阳前移动', '将科学观察与个人摄影实践并置'],
        sourceUrl: 'https://www.moma.org/momaorg/shared/pdfs/docs/visitor-guide-wolfgang-tillmans-to-look-without-fear.pdf', images: [], relations: []
      }
    ],
    awards: ['Turner Prize 2000'],
    exhibitions: ['To look without fear — MoMA 2022–2023'],
    sources: [
      { label: 'MoMA — To look without fear', url: 'https://www.moma.org/calendar/exhibitions/5449' },
      { label: 'MoMA visitor guide', url: 'https://www.moma.org/momaorg/shared/pdfs/docs/visitor-guide-wolfgang-tillmans-to-look-without-fear.pdf' },
      { label: 'Stedelijk — Truth Study Centre', url: 'https://www.stedelijk.nl/nl/collectie/89698-wolfgang-tillmans-truth-study-centre-%28stedelijk%29' }
    ]
  },
  'trevor-paglen': {
    artistId: 'trevor-paglen',
    projectCoverage: '8 个监控 / 机器视觉 / 数据集节点已建立深度档案 · 2000s–现在',
    imageCoverage: '2 / 8 项目已有代表图像',
    note: '按“隐藏基础设施 → 人类难以看见的图像 → 机器自己看的图像 → 训练数据和分类系统”这条变化线整理。重点放实际研究动作：定位、远距拍摄、数据集挖掘、训练模型、打印标签与搭建交互系统。',
    projects: [
      {
        title: 'Drones / Limit Telephotography', cluster: 'military infrastructure / extreme distance / visibility', period: '2000s–',
        summary: '使用极长焦和天文观测式摄影方法拍摄远距离军事设施、无人机和秘密基础设施。画面常模糊、细小，因为作品保留了“这个对象在现实中本来就被安排得难以看见”的物理距离。',
        actions: ['研究公开文件、地图和军事基础设施位置', '前往可合法观察的远距离地点', '使用长焦 / 天文观测设备', '等待无人机或设施进入可见范围', '不把大气扰动和超远距离造成的模糊完全修复'],
        sourceUrl: 'https://paglen.studio/posts/', images: [], relations: []
      },
      {
        title: 'The Last Pictures', cluster: 'satellite / archival images / deep time', period: '2012',
        summary: '选择一组代表人类视觉文化的图像，把它们蚀刻到超耐久介质并送入地球同步轨道卫星，使图像理论上能在太空中停留极长时间。',
        actions: ['研究地球同步卫星寿命', '建立图像选择与编辑框架', '选择 100 张图像', '把图像蚀刻到超耐久介质', '将图像盘安装到通信卫星并送入轨道'],
        sourceUrl: 'https://paglen.studio/posts/', images: [], relations: []
      },
      {
        title: 'Autonomy Cube', cluster: 'network infrastructure / Tor / usable sculpture', period: '2014–',
        summary: '把联网计算机和 Tor 节点放进透明雕塑中，同时向展览空间提供实际可用的开放 Wi‑Fi。网络基础设施不再是作品背后的技术，而是作品本身。',
        actions: ['在透明结构内安装联网计算机', '运行 Tor relay / privacy infrastructure', '建立公开 Wi‑Fi 热点', '允许现场观众实际连接网络', '让网络流量成为雕塑持续发生的功能'],
        sourceUrl: 'https://paglen.studio/posts/', images: [], relations: []
      },
      {
        title: 'Behold these Glorious Times!', cluster: 'training images / neural network activations / video', period: '2017',
        summary: '把训练 AI 识别物体、表情和人物关系的图像，与神经网络处理中间层“看到”的特征图并置。视频不是模拟机器视觉，而是直接展示训练图像与网络内部响应之间的关系。',
        actions: ['搜集实际机器学习训练图像', '让神经网络处理这些图像', '导出网络内部层 / 特征响应', '把训练图像与机器响应剪辑到同一视频', '与 Holly Herndon 合作使用神经网络参与声音制作'],
        sourceUrl: 'https://paglen.studio/2020/04/09/behold-these-glorious-times/', images: [],
        relations: []
      },
      {
        title: 'From “Apple” to “Anomaly” (Pictures and Labels)', cluster: 'ImageNet / taxonomy / mass printing', period: '2019',
        summary: '以 ImageNet 为对象，把约 30,000 张训练图像及其分类关系实体化铺满 Barbican Curve。原本隐藏在数据结构中的图像—标签关系被转成需要身体走过的巨型墙面。',
        actions: ['研究 ImageNet 的类别与层级', '从大型训练集中选择大量图像', '逐张打印约 30,000 张照片', '按类别 / 标签关系组织', '沿 Barbican 弧形墙面密集安装'],
        sourceUrl: 'https://paglen.studio/2020/04/09/from-apple-to-anomaly-pictures-and-labels-selections-from-the-imagenet-dataset-for-object-recognition/',
        images: [img('https://barbican-sites-cncmbjdqaygzhfd0.a03.azurefd.net/trevorpaglen/assets/dFHnJ83ZTo/20-trevor-paglen-from-apple-to-anomaly-c-tim-p-whitby-getty-images-2560x1707.jpeg', 'From “Apple” to “Anomaly” — installation view', '© Trevor Paglen / photo Tim P. Whitby', 'https://www.barbican.org.uk/s/trevorpaglen', 'Barbican')],
        relations: [rel('展览', 'The Curve, Barbican, London', '2019')]
      },
      {
        title: 'ImageNet Roulette', cluster: 'interactive classifier / biased labels / public interface', period: '2019',
        summary: '与 Kate Crawford 的研究相关。系统使用 ImageNet 的“Person”类别训练分类器，用户上传或现场拍摄的人脸会被分配到数据集中已有的标签，以暴露训练集本身的种族、性别、阶级和道德偏见。',
        actions: ['抽取 ImageNet 中 Person 类别', '使用这些图像与标签训练分类模型', '建立上传 / 摄像头界面', '先检测人脸再进行分类', '把模型返回的标签直接叠加到人物图像上', '随后下线公共在线版本，只保留展览版本'],
        sourceUrl: 'https://paglen.studio/2020/04/29/imagenet-roulette/',
        images: [img('https://www.pacegallery.com/media/images/20image-roulette-jumbo.original.jpg', 'ImageNet Roulette — installation context', '© Trevor Paglen / Kate Crawford', 'https://www.pacegallery.com/journal/trevor-paglens-imagenet-roulette-featured-new-york-times/', 'Pace Gallery')],
        relations: [rel('展览', 'Training Humans — Fondazione Prada', '2019')]
      },
      {
        title: 'They Took the Faces from the Accused and the Dead…', cluster: 'facial recognition history / mugshot dataset / prints', period: '2019',
        summary: '追溯早期人脸识别研究所使用的囚犯 / 被告 mugshot 数据，把技术系统背后被当作“训练材料”的具体脸重新作为大型摄影作品呈现。',
        actions: ['研究人脸识别早期基准数据', '追踪来自囚犯 / 被告档案的脸部图像', '把原本服务算法评估的小型数据图像重新放大', '以成组 pigment print 呈现', '把数据集历史和监控技术关系写入展览语境'],
        sourceUrl: 'https://paglen.studio/2020/04/09/they-took-the-faces-from-the-accused-and-the-dead/', images: [],
        relations: [rel('展览', 'Uncanny Valley — de Young Museum', '2020')]
      },
      {
        title: 'Machine vision as material', cluster: 'meta-method / datasets / algorithms / hidden images', period: '2010s–现在',
        summary: 'Paglen 后期工作的核心转变是：摄影不只是给人看。训练图、特征图、识别框、标签和算法内部表示同样是图像。作品因此从“拍隐藏对象”推进到“研究机器之间流通、通常不会被人观看的图像”。',
        actions: ['获取训练数据与技术文献', '与计算机科学 / AI 研究者合作', '直接运行分类 / 识别系统', '导出机器中间表示和标签', '把数据结构转成打印、视频或交互装置', '同时保留技术系统的政治来源与使用场景'],
        sourceUrl: 'https://paglen.studio/category/training-images/', images: [], relations: []
      }
    ],
    awards: [],
    exhibitions: ['A Study of Invisible Images — Metro Pictures 2017', 'From “Apple” to “Anomaly” — Barbican 2019', 'Training Humans — Fondazione Prada 2019', 'Uncanny Valley — de Young Museum 2020'],
    sources: [
      { label: 'Trevor Paglen Studio', url: 'https://paglen.studio/' },
      { label: 'Behold these Glorious Times!', url: 'https://paglen.studio/2020/04/09/behold-these-glorious-times/' },
      { label: 'ImageNet Roulette', url: 'https://paglen.studio/2020/04/29/imagenet-roulette/' },
      { label: 'From Apple to Anomaly', url: 'https://paglen.studio/2020/04/09/from-apple-to-anomaly-pictures-and-labels-selections-from-the-imagenet-dataset-for-object-recognition/' }
    ]
  }
};