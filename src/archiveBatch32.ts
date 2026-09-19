import type { ArtistArchive, ArchiveImage, ArchiveRelation } from './archiveData';

const img = (url: string, title: string, credit: string, sourceUrl: string, sourceLabel: string): ArchiveImage => ({ url, title, credit, sourceUrl, sourceLabel });
const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

export const archiveBatch32: Record<string, ArtistArchive> = {
  'andreas-gursky': {
    artistId: 'andreas-gursky',
    projectCoverage: '8 个关键项目 / 图像方法节点已建立深度档案 · 1990–2018',
    imageCoverage: '2 / 8 项目已有代表图像',
    note: '不再把 Gursky 简化成“高机位 + 巨幅”。档案按他的真实制作变化整理：现场观察 → 多视点拍摄 → 电脑拼接 / 删除 / 重组 → 巨幅输出；同时追踪他如何把交易所、超市、住宅、河流、仓库和赛车场压成既可远观成整体、又能近看细节的图像系统。',
    projects: [
      {
        title: 'Tokyo Stock Exchange', cluster: 'finance / elevated viewpoint / crowd as system', period: '1990',
        summary: 'Gursky 早期全球化主题的重要节点。交易员被高视点压缩成密集的人群单元，个体身份退到金融系统的整体秩序之后；此时数字合成尚不是作品的核心，主要依赖现场机位、空间层次与大尺幅。',
        actions: ['进入东京证券交易所现场', '选择高于交易大厅的俯视位置', '让人物密度与建筑结构共同形成画面', '保持大量可近距离辨认的细节', '以大型彩色照片输出，使远观与近看产生两套阅读'],
        sourceUrl: 'https://www.moma.org/interactives/exhibitions/2001/gursky/', images: [],
        relations: [rel('展览', 'Andreas Gursky — MoMA', '2001')]
      },
      {
        title: 'Paris, Montparnasse', cluster: 'architecture / two viewpoints / digital merge', period: '1993',
        summary: '由于巨型住宅立面无法从一个位置完整拍下，Gursky 分别从两个视点拍摄建筑左右部分，再在电脑中合成为连续正立面。MoMA 的研究指出，这是他早期明确把多张底片数字合成为一个“看似单一视点”空间的关键作品。',
        actions: ['寻找正面观看巨型住宅立面的机位', '分别拍摄建筑左半与右半', '从不同位置获得两张底片', '在电脑中校正并合并两部分', '消除两张照片之间的明显断裂', '以约 4 米宽的巨幅照片输出'],
        sourceUrl: 'https://www.moma.org/interactives/exhibitions/2001/gursky/montparnasse_pop.html',
        images: [img('https://www.moma.org/media/W1siZiIsIjIwMTU0NSJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg', 'Paris, Montparnasse, 1993 — related MoMA presentation', '© Andreas Gursky', 'https://www.moma.org/interactives/exhibitions/2001/gursky/montparnasse_pop.html', 'MoMA')],
        relations: [rel('展览', 'Andreas Gursky — MoMA', '2001')]
      },
      {
        title: '99 Cent', cluster: 'retail / commodity density / all-over composition', period: '1999',
        summary: '从略高视点拍摄折扣商店，货架、价格牌、商品包装和消费者被压成几乎没有视觉中心的“all-over”平面。它仍可读为真实超市，但远距离时又接近色彩密集的抽象画。',
        actions: ['进入折扣零售空间', '选择能同时覆盖多排货架的高视点', '让水平货架与价格牌形成重复格网', '控制画面使边缘同样充满商品信息', '使用数字后期加强整体秩序与细节可读性', '巨幅 chromogenic print 输出'],
        sourceUrl: 'https://www.moma.org/interactives/exhibitions/2001/gursky/99cent_pop.html',
        images: [img('https://loveincorporated.blob.core.windows.net/contentimages/largesize/39834064-1d1f-43dc-a1ad-d6d63efd144e-Y%2099%20gursky%20Uli%20Deck%20DPA%20PA%20Images.jpg', '99 Cent', '© Andreas Gursky', 'https://www.moma.org/interactives/exhibitions/2001/gursky/99cent_pop.html', 'MoMA / exhibition reference')],
        relations: [rel('展览', 'Andreas Gursky — MoMA', '2001')]
      },
      {
        title: 'Rhine II', cluster: 'landscape / digital subtraction / horizontal abstraction', period: '1999',
        summary: 'MoMA 明确说明：Gursky 通过数字技术删除了背景中的工业建筑等元素。现实河岸因此被压缩成草地、道路、河流、远岸和天空几条水平带，在可辨认风景与极简抽象之间摇摆。',
        actions: ['在莱茵河沿岸拍摄现实景观', '选择高度水平化的构图', '数字删除背景中的工业建筑与干扰元素', '简化空间层次但保留水面真实纹理', '大尺幅 chromogenic print 输出'],
        sourceUrl: 'https://www.moma.org/collection/works/88067', images: [],
        relations: [rel('收藏', 'MoMA', 'Rhine II, 1999')]
      },
      {
        title: 'Chicago Board of Trade I–III', cluster: 'finance / crowd / elevated viewpoint / constructed panorama', period: '1997–2009',
        summary: '连续多年回到芝加哥期货交易大厅。中央八角形交易区、环绕看台和密集交易员共同形成近似竞技场的结构；2009 版本也成为一个即将消失的“人工喊价”金融时代记录。',
        actions: ['进入交易大厅并寻找高视点', '从楼上向中央交易区拍摄', '在不同年份重复返回同一制度空间', '通过数字后期强化空间整体性与局部密度', '以巨幅输出让人物既成为“群体纹理”又保持可辨'],
        sourceUrl: 'https://www.andreasgursky.com/en/works/1999/chicago-board-of-trade-2', images: [], relations: []
      },
      {
        title: 'Bahrain I', cluster: 'raceway / multiple shots / digital construction', period: '2005',
        summary: 'MoMA 明确指出该图由多张拍摄拼接，并删除特定细节，形成无缝但实际上被建构过的赛道网络。这里数字后期不只是“修干净”，而是重新组织一个现实空间。',
        actions: ['拍摄赛车场多个局部 / 视点', '将多个画面拼接为统一地貌', '删除特定不需要的细节', '让赛道线路在沙漠中形成抽象网络', '保持最终图像看似连续真实'],
        sourceUrl: 'https://www.moma.org/collection/works/109917', images: [],
        relations: [rel('收藏', 'MoMA', 'Bahrain I, 2005')]
      },
      {
        title: 'Amazon', cluster: 'warehouse / logistics / digital montage / commodity system', period: '2016',
        summary: '在亚利桑那 Phoenix 的 Amazon 配送中心拍摄。相关展览资料明确说明，为获得最终效果，Gursky 将货架画面逐一蒙太奇组合；巨量无序商品被重新组织成一个几乎无尽的物流表面。',
        actions: ['通过机构许可进入平时持续运作的仓库', '从高处 / 正面拍摄货架系统', '拍摄大量局部货架图像', '在后期中逐一拼接 / 蒙太奇货架', '统一透视与整体空间', '输出约 4 米宽巨幅照片'],
        sourceUrl: 'https://www.andreasgursky.com/de/works/2016/amazon', images: [], relations: []
      },
      {
        title: 'Scale as viewing mechanism', cluster: 'meta-method / near-far reading / global systems', period: '1990s–现在',
        summary: 'Gursky 本人曾概括其图像“从极近距离可以读到最小细节，从远处则成为巨大的符号”。巨幅不是单纯炫技：它允许同一张照片同时把人、商品、建筑当作具体事实和系统性模式来观看。',
        actions: ['选择能代表制度 / 全球系统的场所', '建立远观时清楚的整体构图', '同时保留近看时大量局部信息', '必要时通过数字拼接 / 删除重建秩序', '用巨幅展示迫使观众在远近之间移动'],
        sourceUrl: 'https://www.andreasgursky.com/en/downloads/2015/udo-kittelmann', images: [], relations: []
      }
    ],
    awards: [],
    exhibitions: ['Andreas Gursky — MoMA 2001', 'Andreas Gursky — Hayward Gallery 2018'],
    sources: [
      { label: 'Andreas Gursky official website', url: 'https://www.andreasgursky.com/en/works' },
      { label: 'MoMA — Andreas Gursky 2001', url: 'https://www.moma.org/interactives/exhibitions/2001/gursky/' },
      { label: 'MoMA — Rhine II', url: 'https://www.moma.org/collection/works/88067' },
      { label: 'MoMA — Bahrain I', url: 'https://www.moma.org/collection/works/109917' }
    ]
  },
  'candida-hofer': {
    artistId: 'candida-hofer',
    projectCoverage: '7 个关键空间 / 方法节点已建立深度档案 · 1968–2003+',
    imageCoverage: '2 / 7 项目已有代表图像',
    note: '不再把 Höfer 简化成“拍空房间”。档案追踪她从 1968 年街头与报刊摄影、土耳其移民项目，逐渐转向长期拍摄图书馆、博物馆、剧院、宫殿等公共文化空间；核心问题是这些空间在人物缺席后如何仍然显示社会秩序。',
    projects: [
      {
        title: 'Liverpool street photographs', cluster: 'street / newspaper work / architecture', period: '1968',
        summary: '在进入杜塞尔多夫学院以前，Höfer 曾在 Liverpool 从事报刊摄影并拍摄街道、建筑外部和城市表面。Met 的馆藏资料将这一时期视为她后来关注“建成环境”的早期来源。',
        actions: ['在 Liverpool 城市街道行走', '拍摄建筑、广告、壁画与公共空间', '使用黑白摄影', '以相对直接的街头观察保存城市表面变化'],
        sourceUrl: 'https://www.metmuseum.org/art/collection/search/838214', images: [],
        relations: [rel('收藏', 'The Metropolitan Museum of Art', 'Liverpool works, 1968')]
      },
      {
        title: 'Türken in Deutschland', cluster: 'migration / portrait / social space', period: '1973–1979',
        summary: '长期拍摄生活在德国的土耳其移民，是她职业早期仍有人物的核心系列。它既记录人，也记录餐馆、商店、家与工作环境，为后来“社会空间如何塑造行为”埋下方法基础。',
        actions: ['长期进入土耳其移民生活与工作环境', '拍摄人物及其周围空间', '保留室内陈设与社会环境信息', '以系列而非单张代表一个群体经验'],
        sourceUrl: 'https://www.candidahoefer.com/', images: [], relations: []
      },
      {
        title: 'Libraries', cluster: 'library / knowledge architecture / empty public interior', period: '1980s–现在',
        summary: '图书馆成为她最典型的长期主题之一。书架、桌椅、灯具、楼梯和阅读动线在没有读者时更加清楚，空间本身显示“知识如何被分类、存放和允许进入”。',
        actions: ['向机构申请进入许可', '等待或选择接近无人的时段', '寻找能显示空间秩序的正面 / 轴线视点', '使用自然光与现场照明而非把空间改造成摄影棚', '长曝光 / 大尺幅保持建筑细节', '以建筑或机构名称 + 编号命名'],
        sourceUrl: 'https://www.metmuseum.org/art/collection/search/848589',
        images: [img('https://assets.phillips.com/auctions/UK040118/37_001.jpg', 'Biblioteca de la Real Academia de la Lengua Madrid I', '© Candida Höfer', 'https://www.phillips.com/detail/candida-hofer/UK040118/37', 'Phillips')],
        relations: [rel('收藏', 'The Metropolitan Museum of Art', 'Juristische Bibliothek München II, 2000')]
      },
      {
        title: 'Museums / study rooms', cluster: 'museum / display / absent viewer / institutional interior', period: '1980s–现在',
        summary: 'Met 将她持续三十余年的公共室内摄影概括为对“social architecture 的心理学”研究。博物馆研究室、画廊、储藏 / 观看空间在没有观众时暴露展示、保存与观看的制度规则。',
        actions: ['进入博物馆公共或半公共空间', '避开参观者高峰', '保留画框、展墙、空画架、灯具等制度性细节', '采用稳定、克制的正面构图', '不通过人物制造叙事情节'],
        sourceUrl: 'https://www.metmuseum.org/art/collection/search/838975', images: [],
        relations: [rel('收藏', 'The Metropolitan Museum of Art', 'Kunsthalle Karlsruhe VIII, 1999')]
      },
      {
        title: 'Theatres / opera houses / concert halls', cluster: 'spectatorship / architecture / empty audience structure', period: '1990s–现在',
        summary: '剧院、歌剧院与音乐厅本来围绕“有人观看 / 有人表演”设计，但 Höfer 往往在空场时拍摄。座位、包厢、舞台和轴线因人物缺席反而更直接地显示观看制度。',
        actions: ['申请进入剧院与演出空间', '在无演出 / 无观众状态拍摄', '寻找舞台—观众席的轴线关系', '控制曝光保留深部空间与装饰细节', '使用大型彩色照片强化空间尺度'],
        sourceUrl: 'https://www.candidahoefer.com/', images: [], relations: []
      },
      {
        title: 'Palaces / historic interiors', cluster: 'palace / historic representation / public access', period: '1990s–现在',
        summary: '宫殿、历史厅堂和权力建筑把社会等级写进装饰、门、地毯与空间序列。Höfer 不靠人物说明权力，而让建筑自身成为一种“制度肖像”。',
        actions: ['选择历史建筑与权力空间', '拍摄无人的礼仪性室内', '保持装饰、家具与空间层级清楚', '以高细节彩色输出呈现材料与尺度'],
        sourceUrl: 'https://www.metmuseum.org/art/collection/search/285478',
        images: [img('https://collectionapi.metmuseum.org/api/collection/v1/iiif/285478/1692470/main-image', 'Palazzo Pisani Moretta Venezia III, 2003', '© Candida Höfer', 'https://www.metmuseum.org/art/collection/search/285478', 'The Met')],
        relations: [rel('收藏', 'The Metropolitan Museum of Art', 'Palazzo Pisani Moretta Venezia III, 2003')]
      },
      {
        title: 'German Pavilion — Innenraum-Fotografien', cluster: 'national pavilion / interior photographs / place', period: '2003',
        summary: '2003 年由 Julian Heynen 策展，Höfer 与 Martin Kippenberger 共同构成德国馆。官方 ifa 资料指出，Höfer 展出的是 1997–2003 年间的室内摄影，并加入与 Venice 场所相关的图像；作品被放入德国馆这一高度政治化的建筑中，进一步强化“地点如何参与艺术事件”的问题。',
        actions: ['从 1997–2003 室内摄影中选择作品', '加入 Venice 相关空间图像', '将照片作为一个整体与德国馆建筑对应', '与 Kippenberger 的 METRO-Net 项目形成空间上的并置'],
        sourceUrl: 'https://www.ifa.de/en/art/german-pavilion-venice-biennale/', images: [],
        relations: [rel('展览', 'German Pavilion — 50th Venice Biennale', '2003 · with Martin Kippenberger · curated by Julian Heynen')]
      }
    ],
    awards: [],
    exhibitions: ['documenta 11 — Kassel 2002', 'German Pavilion — Venice Biennale 2003'],
    sources: [
      { label: 'Candida Höfer official website', url: 'https://www.candidahoefer.com/' },
      { label: 'The Met — Photography in Düsseldorf', url: 'https://www.metmuseum.org/essays/photography-in-dusseldorf' },
      { label: 'The Met — Kunsthalle Karlsruhe VIII', url: 'https://www.metmuseum.org/art/collection/search/838975' },
      { label: 'ifa — German Pavilion 2003', url: 'https://www.ifa.de/en/art/german-pavilion-venice-biennale/' }
    ]
  },
  'paul-mpagi-sepuya': {
    artistId: 'paul-mpagi-sepuya',
    projectCoverage: '7 个镜面工作室 / 肖像方法节点已建立深度档案 · 2010s–现在',
    imageCoverage: '2 / 7 项目已有代表图像',
    note: '不把 Sepuya 的镜子理解成视觉特效。档案重点记录：临时摄影棚、朋友网络、打印照片再次入镜、摄影师与被摄者互换、相机 / 手 / 镜面边缘被故意保留，使肖像同时显示“谁在拍、谁被拍、谁又在看”。',
    projects: [
      {
        title: 'Studio portraits / intimacy as method', cluster: 'queer portrait / intimacy / studio network', period: '2010s–现在',
        summary: 'Sepuya 在 Whitney 2019 的访谈中明确说，“亲密性”一直是肖像的起点，并以“把每个人都当成现在、过去或未来的恋人来拍”作为一种关系规则。朋友、艺术家与摄影同行构成持续回返的被摄网络。',
        actions: ['从真实朋友 / 情感 / 艺术社群中邀请被摄者', '在固定或临时工作室中拍摄', '不把人物当匿名模特，而保留双方关系', '反复拍摄同一网络中的人物', '让身体距离与相机距离成为构图的一部分'],
        sourceUrl: 'https://whitney.org/media/42357', images: [],
        relations: [rel('展览', 'Whitney Biennial', '2019')]
      },
      {
        title: 'Self-Portrait Study with Roses at Night (1709)', cluster: 'self-portrait / studio / camera-body relation', period: '2015',
        summary: '早期关键自画像之一。人物、摄影设备与工作室之间的关系已开始取代传统“脸部识别”式肖像；身体常被遮挡、切割或通过反射重新组织。',
        actions: ['搭建简化摄影棚', '艺术家本人进入画面', '使用相机 / 镜面 / 局部遮挡形成身体碎片', '保留摄影行为本身的线索'],
        sourceUrl: 'https://whitney.org/artists/17621', images: [],
        relations: [rel('收藏', 'Whitney Museum', 'Self-Portrait Study with Roses at Night (1709), 2015')]
      },
      {
        title: 'Darkroom Mirror Portraits', cluster: 'mirror / camera / body fragment / printed image', period: '2016–2018',
        summary: '镜面把相机、摄影师的手、被摄者身体、工作室和已打印照片折叠进一个平面。画面不是通过 Photoshop 合成“碎片”，而是在真实镜面前通过位置、遮挡和反射现场构成。',
        actions: ['在工作室竖立镜面', '将相机放在镜面前并允许相机入镜', '让人物身体部分进入镜面边缘', '把已有打印照片贴 / 放在镜面周围', '通过镜头、镜面和真实身体反复校准位置', '拍摄最终组合而非后期无缝合成'],
        sourceUrl: 'https://whitney.org/collection/works/62091',
        images: [img('https://www.1854.photography/wp-content/uploads/2019/10/bjp-paulsepuya-mirrorstudy-02.jpg', 'Darkroom / mirror study', '© Paul Mpagi Sepuya', 'https://whitney.org/collection/works/62091', 'Whitney / project context')],
        relations: [rel('收藏', 'Whitney Museum', 'Darkroom Mirror Portrait (_1000510), 2018')]
      },
      {
        title: 'Camera Lesson', cluster: 'shared authorship / photographer as subject / teaching image', period: '2018',
        summary: 'Whitney 的说明强调，这些照片有的由 Sepuya 拍，有的由同为摄影师的朋友拍；有时照片中的“被摄者”同时正在拍另一张照片。因此传统的作者—被摄者二分被主动打乱。',
        actions: ['邀请摄影师朋友进入临时工作室', '交换相机 / 拍摄位置', '让人物既作为被摄者又作为摄影者', '记录手、相机、镜面和正在发生的另一张照片', '保留多重作者关系而不强行归于单一视点'],
        sourceUrl: 'https://whitney.org/media/42357', images: [],
        relations: [rel('收藏', 'Whitney Museum', 'Camera Lesson (_2210485), 2018')]
      },
      {
        title: 'Printed photographs re-entering the studio', cluster: 'rephotography / fragment / archive of relationships', period: '2010s–现在',
        summary: '旧照片不是作品完成后的档案，而会被重新打印、切割或贴在镜面附近，随后进入新照片。过去的身体、现在的身体和摄影设备因此同时出现在一个画面中。',
        actions: ['从既有肖像中选择打印图', '裁切 / 重新摆放打印照片', '把旧图贴在镜面、墙面或手持入镜', '让旧照片遮挡 / 替代当前身体局部', '重新拍摄形成新的关系网络'],
        sourceUrl: 'https://whitney.org/artists/17621', images: [], relations: []
      },
      {
        title: 'Whitney Biennial installation', cluster: 'network display / multiple photographers / authorship', period: '2019',
        summary: '2019 Whitney Biennial 中，Sepuya 的作品与 Dicko Chan、James Garcia、Ariel Goldberg、A.L. Steiner 等朋友 / 摄影师作品共同出现。艺术家本人把这个项目描述为一种还难以命名的合作关系，展示结构本身扩展了照片内部的社交网络。',
        actions: ['选择自己与朋友共同生成的照片', '把不同摄影者作品并置', '保留作品署名中的双重 / 多重作者', '通过展墙 sequence 显示社群内互相拍摄关系'],
        sourceUrl: 'https://whitney.org/exhibitions/2019-Biennial',
        images: [img('https://ccp.org.au/app/uploads/2022/03/PHOTO.2022_CCP_DOCO_270422_JF.014-scaled.jpg', 'Paul Mpagi Sepuya — installation view', '© Paul Mpagi Sepuya / CCP', 'https://ccp.org.au/exhibition/paul-mpagi-sepuya/', 'Centre for Contemporary Photography')],
        relations: [rel('展览', 'Whitney Biennial', '2019')]
      },
      {
        title: 'Mirror as production apparatus', cluster: 'meta-method / gaze / fragmented body / queer studio', period: '2010s–现在',
        summary: '镜子在 Sepuya 这里真正改变的是生产关系：摄影师可以看见自己、被摄者可以看到摄影行为、相机被迫进入画面，身体也可由真实局部与旧照片共同组成。作品因此把摄影棚从隐藏的后台变成肖像主题。',
        actions: ['把镜子作为工作台而非装饰背景', '主动让相机与摄影师进入画面', '利用镜面边缘切割身体', '通过反射建立多个同时存在的视点', '让拍摄关系和酷儿亲密网络成为形式来源'],
        sourceUrl: 'https://whitney.org/media/42357', images: [], relations: []
      }
    ],
    awards: [],
    exhibitions: ['Whitney Biennial 2019', 'Paul Mpagi Sepuya — Centre for Contemporary Photography 2022'],
    sources: [
      { label: 'Whitney — Paul Mpagi Sepuya', url: 'https://whitney.org/artists/17621' },
      { label: 'Whitney — 2019 artist audio / transcript', url: 'https://whitney.org/media/42357' },
      { label: 'Whitney — Darkroom Mirror Portrait', url: 'https://whitney.org/collection/works/62091' },
      { label: 'Centre for Contemporary Photography', url: 'https://ccp.org.au/exhibition/paul-mpagi-sepuya/' }
    ]
  },
  'liz-deschenes': {
    artistId: 'liz-deschenes',
    projectCoverage: '7 个摄影材料 / 光 / 建筑节点已建立深度档案 · 1997–2022',
    imageCoverage: '2 / 7 项目已有代表图像',
    note: '按“光、纸、化学、曝光时间、安装位置”整理，而不是把她归为一般抽象摄影。她持续把摄影拆回最基础的条件，并让照片对具体建筑和观众位置作出反应。',
    projects: [
      {
        title: 'Green Screen', cluster: 'color / screen / photography-film apparatus', period: '2001',
        summary: '早期系列已经把通常属于影像制作后台的“绿幕”推到图像前景。摄影不再负责再现某个场景，而开始研究颜色、背景、屏幕与摄影 / 电影装置本身。',
        actions: ['以绿色屏幕 / 色面作为核心对象', '减少传统叙事与主体信息', '通过摄影输出讨论影像制作中的背景条件'],
        sourceUrl: 'https://whitney.org/artists/9359', images: [],
        relations: [rel('收藏', 'Whitney Museum', 'Green Screen #7, 2001')]
      },
      {
        title: 'Black & White', cluster: 'photographic material / tonal limit / serial work', period: '2003',
        summary: '以最基础的黑 / 白和摄影材料测试图像边界。系列化呈现使差异来自光、表面和处理，而不是被拍对象。',
        actions: ['减少可识别对象', '控制黑白摄影表面的反差与反射', '以多个相近作品并列比较', '把观看注意力转到纸面和光线上'],
        sourceUrl: 'https://whitney.org/artists/9359', images: [],
        relations: [rel('收藏', 'Whitney Museum', 'Black & White works, 2003')]
      },
      {
        title: 'Moiré', cluster: 'double exposure / enlarger / optical interference', period: '2007–',
        summary: 'MoMA 对 Moiré #25 的制作说明非常具体：Deschenes 先获得两次曝光，再在放大机中把两张底片稍微错位叠加，从而生成干涉纹。抽象结构直接来自两个摄影网格的物理偏移。',
        actions: ['制作两次相关曝光', '保留各自底片', '在暗房放大机中叠放两张底片', '故意让两层稍微错位', '通过光学干涉产生 moiré 纹', '将“误差”作为最终结构保留'],
        sourceUrl: 'https://www.moma.org/explore/inside_out/2012/07/12/surface-and-light-liz-deschenes/', images: [],
        relations: [rel('收藏', 'MoMA', 'Moiré #25')]
      },
      {
        title: 'Tilt / Swing (360° field of vision, version 1)', cluster: 'moonlight photogram / silver toner / spatial installation', period: '2009',
        summary: '六块无相机 photogram 环绕观众安装。MoMA 说明这些感光纸直接暴露于月光，再在室内以银色调色处理；安装参考 Herbert Bayer 1935 年“360° field of vision”图，让照片从墙面转为围绕身体的空间装置。',
        actions: ['使用未经过相机的感光纸', '在夜间直接暴露于月光', '将纸带回室内显影 / 固定', '使用 silver toner 形成反射性表面', '制作六块独立 photogram', '按 360° 观看结构在空间中环绕安装'],
        sourceUrl: 'https://www.moma.org/explore/inside_out/2012/07/12/surface-and-light-liz-deschenes/',
        images: [img('https://whitneymedia.org/assets/image/821813/small_deschenesweb_938.jpg', 'Tilt / Swing (360° field of vision, version 1) — installation', '© Liz Deschenes', 'https://whitney.org/exhibitions/2012-biennial/Liz-Deschenes', 'Whitney Museum')],
        relations: [rel('收藏', 'MoMA', 'Tilt / Swing (360° field of vision, version 1)')]
      },
      {
        title: 'Untitled — Whitney Biennial', cluster: 'site-specific photogram / Breuer architecture / reflection', period: '2012',
        summary: '为 Whitney Breuer building 现场制作。感光纸在室外无物体遮挡地曝光，记录环境光本身；四块银色 / 黑色 photogram 的角度与 Breuer 建筑的阶梯立面、斜窗和大画幅相机 bellows / tilt-shift 结构建立对应。',
        actions: ['根据 Breuer building 的体量和窗角设计面板关系', '将感光纸直接暴露于室外环境光', '不放置传统 photogram 物体', '显影并制造 matte silver / glossy black 表面差异', '把面板按建筑角度安装', '让作品反射现场建筑和观众，而不是提供再现图像'],
        sourceUrl: 'https://whitney.org/media/796',
        images: [img('https://whitneymedia.org/assets/image/821813/small_deschenesweb_938.jpg', '2012 Whitney Biennial — photogram installation', '© Liz Deschenes', 'https://whitney.org/exhibitions/2012-biennial/Liz-Deschenes', 'Whitney Museum')],
        relations: [rel('展览', 'Whitney Biennial', '2012')]
      },
      {
        title: 'Photogram as reflective object', cluster: 'camera-less photography / architecture / viewer reflection', period: '2009–现在',
        summary: 'Whitney 将她的方法概括为持续研究摄影的 materials, equipment and processes。很多作品没有传统图像，银色表面会反射展厅和观众，使“观看当下发生的现场”替代“过去被拍摄的事件”。',
        actions: ['直接使用感光纸与环境光', '通过显影和调色控制反射性', '避免固定再现对象', '根据展厅墙、角落、窗与观众动线调整安装', '让实时反射成为每次观看中变化的图像'],
        sourceUrl: 'https://whitney.org/artists/9359', images: [], relations: []
      },
      {
        title: 'Works 1997–2022 / site-responsive practice', cluster: 'survey / site response / exhibition history', period: '1997–2022',
        summary: '后续实践不断在不同展览地点重新测试摄影表面与建筑关系。她并不固定使用一种技术，而是把 light、paper、chemistry、time 和 display 作为可以被重新组合的基本参数。',
        actions: ['针对具体展览空间选择 / 制作作品', '在相机摄影、双重曝光和 photogram 间切换', '把安装位置视为制作步骤', '通过反射与观众移动让作品在现场持续变化'],
        sourceUrl: 'https://fraenkelgallery.com/exhibitions/works-1997-2022', images: [],
        relations: [rel('展览', 'Works 1997–2022 — Fraenkel Gallery', '2022')]
      }
    ],
    awards: ['Rappaport Prize 2014'],
    exhibitions: ['Whitney Biennial 2012', 'Works 1997–2022 — Fraenkel Gallery 2022'],
    sources: [
      { label: 'Whitney — Liz Deschenes', url: 'https://whitney.org/artists/9359' },
      { label: 'Whitney Biennial 2012', url: 'https://whitney.org/exhibitions/2012-biennial/Liz-Deschenes' },
      { label: 'MoMA — Surface and Light', url: 'https://www.moma.org/explore/inside_out/2012/07/12/surface-and-light-liz-deschenes/' },
      { label: 'Fraenkel Gallery — Works 1997–2022', url: 'https://fraenkelgallery.com/exhibitions/works-1997-2022' }
    ]
  }
};