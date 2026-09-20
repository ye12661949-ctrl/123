import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

export const archiveBatch46: Record<string, ArtistArchive> = {
  'chen-wei': {
    artistId: 'chen-wei',
    projectCoverage: '6 个搭景摄影 / 城市装置节点已建立深档案 · 2009–现在',
    imageCoverage: '0 / 6 项目已有代表图像',
    note: '陈维不是去夜店或街头“抓”青年文化，而是把城市记忆拆成灯光、地面、门、舞池、遗留物和空场，再在工作室或展厅中重新搭出来。理解他的关键是追踪“观察现实 → 搭建等身布景 → 布光 → 摄影 → 再把摄影空间反向扩成装置”的循环。',
    projects: [
      {
        title: 'Early staged interiors', cluster: 'mise-en-scène / studio construction / solitary room', period: '2009–2012',
        summary: '早期作品已经把真实房间感与人工搭景混在一起。床、桌面、灯、门、垃圾和人体缺席后的痕迹被精确安排，使画面像刚刚有人离开，但实际空间常由艺术家重新制造。',
        actions: ['从现实生活收集房间、家具与灯光记忆', '在工作室选择性重建而非完整复制原空间', '使用真实家具、廉价建材和生活残留物搭景', '精确控制单一灯源或局部亮区', '拍摄时隐藏大部分布景边界', '让最终照片保留“刚发生过什么”的时间感'],
        sourceUrl: 'https://www.shanghartgallery.com/galleryarchive/feeds/detail/3655', images: [], relations: []
      },
      {
        title: 'Night Club', cluster: 'club culture / staged photography / light design', period: '2010s',
        summary: '夜店系列最容易被误读成现场摄影。实际上舞池、人物位置、聚光灯、烟雾与黑暗区域都经过控制，真实青年文化被转换成摄影棚里的舞台。',
        actions: ['观察真实 club / rave 空间的灯光与人群行为', '在可控空间重新搭建舞池结构', '安排演员 / 参与者的位置和动作', '使用聚光灯、暗部和烟雾重建俱乐部视觉', '让多人场景保持孤立感而非热闹纪录', '通过多次拍摄选择最像“偶然瞬间”的人工结果'],
        sourceUrl: 'https://www.dazeddigital.com/art-photography/article/46502/1/chen-wei-photographs-of-raves-in-china-are-not-what-they-seem', images: [], relations: []
      },
      {
        title: 'New City', cluster: 'urbanisation / life-size set / imagined city', period: '2013–现在',
        summary: 'New City 从现实城市与郊区的观察出发，但不直接把街道当成纪录对象。艺术家把记忆中的站台、门口、舞厅、招牌、灯光和空置空间重新变成等身布景，以虚构场景处理真实城市化。',
        actions: ['往返城市与郊区积累视觉片段', '把现实中不同地点的细节拆开记录', '在工作室重组为不存在的“新城市”空间', '搭建 life-size stage set', '人工控制门、通道、台阶、灯管与色温', '摄影时压平真实建筑与虚构布景的差异', '在长期项目中持续加入新的城市碎片'],
        sourceUrl: 'https://aleijournal.com/chenwei', images: [], relations: [rel('展览', 'CHEN Wei — ShanghART Beijing', '2017')]
      },
      {
        title: 'Drunken Dance Hall / installation turn', cluster: 'stage-set installation / nightclub memory / spatial extension', period: 'mid-2010s',
        summary: '陈维逐渐不满足于让布景只在照片里存在，而把舞厅、灯、镜球、水面等元素直接扩展为展览空间。摄影中的“假空间”因此重新变成观众可以进入的实体空间。',
        actions: ['从既有摄影布景提取灯光和物件元素', '在展厅重新搭建舞厅式环境', '加入镜球、反光材料、霓虹 / 彩色灯等', '让观众身体进入原先只存在于照片中的空间', '在摄影与装置之间复用同一组视觉材料'],
        sourceUrl: 'https://www.shanghartgallery.com/galleryarchive/feeds/detail/3655', images: [], relations: []
      },
      {
        title: 'Goodbye', cluster: 'departure / double space / photography + installation', period: '2019',
        summary: 'Goodbye 延续 New City，把“离开”具体化为门、候车式空间、行李、明暗相邻房间等结构。ShanghART 特别说明作品从等身搭景开始，并用摄影与现场装置构成两个相互对应的空间。',
        actions: ['围绕离开 / 分离选择城市空间原型', '搭建等身室内 / 通道结构', '并置一个较暗和一个较亮的单元', '拍摄布景形成摄影作品', '保留部分布景或重建为展览现场装置', '让照片与实体空间互相证明又互相怀疑'],
        sourceUrl: 'https://www.shanghartgallery.com/galleryarchive/exhibition.htm?exbId=13484', images: [], relations: [rel('展览', 'Goodbye — ShanghART Shanghai', '2019')]
      },
      {
        title: 'Constructed city as method', cluster: 'meta-method / observation → reconstruction → image → installation', period: '2010s–现在',
        summary: '陈维的稳定方法不是某种蓝紫色灯光，而是把城市现实先拆碎，再重新建成一个比现实更可控的“记忆模型”。摄影不是流程起点，而是布景劳动的中间环节。',
        actions: ['现实观察时只收集局部而非完整地点', '将局部转换为尺寸 / 材料 / 灯光清单', '先搭景再拍摄', '根据成片继续修改布景', '让装置版本重新返回真实空间', '通过多媒介重复同一城市碎片'],
        sourceUrl: 'https://www.shanghartgallery.com/galleryarchive/feeds/detail/3655', images: [], relations: []
      }
    ],
    awards: [],
    exhibitions: ['CHEN Wei — ShanghART Beijing 2017', 'Goodbye — ShanghART Shanghai 2019', 'Paris Photo Curiosa — 2022'],
    sources: [
      { label: 'ShanghART — Chen Wei 2017', url: 'https://www.shanghartgallery.com/galleryarchive/feeds/detail/3655' },
      { label: 'ShanghART — Goodbye', url: 'https://www.shanghartgallery.com/galleryarchive/exhibition.htm?exbId=13484' },
      { label: 'ALEI Journal interview', url: 'https://aleijournal.com/chenwei' },
      { label: 'Dazed — Night Club', url: 'https://www.dazeddigital.com/art-photography/article/46502/1/chen-wei-photographs-of-raves-in-china-are-not-what-they-seem' }
    ]
  },

  'rongrong-inri': {
    artistId: 'rongrong-inri',
    projectCoverage: '6 个伴侣合作 / 家庭 / 环境 / 机构节点已建立深档案 · 2000–现在',
    imageCoverage: '0 / 6 项目已有代表图像',
    note: '荣荣&映里的核心不是“情侣自拍”，而是共同生活本身成为长期生产系统。两个人的身体、怀孕、孩子、房屋、拆迁、季节、雪地和暗房都在同一时间线上变化；他们同时把私人实践外扩成三影堂这一摄影机构。',
    projects: [
      {
        title: 'In Fujisan / Mt. Fuji', cluster: 'couple performance / nature / black-and-white darkroom', period: '2001',
        summary: '合作初期，他们把自己的身体置于富士山等自然环境中。两人既是摄影者也是被摄者，黑白摄影和暗房处理让身体、云雾、雪与山体形成近乎仪式性的关系。',
        actions: ['共同选择自然场景', '轮流 / 协同完成自拍或互拍', '以裸体 / 简化服装减少时代信息', '使用黑白胶片记录身体与地貌关系', '在暗房中控制灰阶和局部反差', '把伴侣关系作为持续重复的拍摄条件'],
        sourceUrl: 'https://www.threeshadows.cn/jimei-arles/exhibitions/2020/zhihelijiangzi/', images: [], relations: []
      },
      {
        title: 'Liulitun', cluster: 'home / demolition / couple and family / urban change', period: '2000s',
        summary: '居住空间、伴侣身体与北京城市拆迁进入同一系列。家并不是背景，而是会被城市发展直接改变、拆除和重新定位的共同生活场所。',
        actions: ['长期在居住地及周边反复拍摄', '让两人身体直接进入院落 / 废墟 / 建筑场景', '记录家庭状态与建筑变化同步发生', '继续使用黑白摄影保持时间连续性', '通过组照把私人生活和城市变化并置'],
        sourceUrl: 'https://photographyofchina.com/author/rong-rong-and-inri', images: [], relations: []
      },
      {
        title: 'Caochangdi', cluster: 'pregnancy / domestic life / new home / family performance', period: '2004–',
        summary: 'Caochangdi 阶段把怀孕、家庭扩张和新居环境直接放进作品。伴侣合作从二人关系逐渐变成家庭影像，但仍保持高度表演性的身体安排。',
        actions: ['在新居和院落持续拍摄', '将怀孕身体作为时间尺度', '让家具、植物、动物和建筑共同进入画面', '以重复机位 / 环境形成生活时间线', '继续在共同暗房工作中统一灰阶语言'],
        sourceUrl: 'https://photographyofchina.com/author/rong-rong-and-inri', images: [], relations: []
      },
      {
        title: 'Three Shadows Photography Art Centre', cluster: 'institution building / archive / exhibition infrastructure', period: '2007–',
        summary: '2007 年他们在北京曹场地共同创办三影堂摄影艺术中心，把自身实践延展为摄影展示、出版、教育、奖项和国际交流基础设施。这个机构行为本身改变了中国当代摄影的生态。',
        actions: ['共同建立独立摄影机构', '持续策划展览 / 出版 / 公共项目', '建立面向年轻摄影师的奖项与平台', '把个人国际网络转为机构交流资源', '在北京之外继续扩展厦门空间与集美·阿尔勒合作'],
        sourceUrl: 'https://www.threeshadows.cn/about/', images: [], relations: [rel('策展', 'Three Shadows Photography Art Centre', 'co-founded 2007'), rel('奖项', 'Sony World Photography Awards — Outstanding Contribution to Photography', '2016')]
      },
      {
        title: 'Tsumari Story', cluster: 'snow / family / seasonal return / darkroom / book', period: '2012–2014',
        summary: '受越后妻有邀请后，他们在两年间反复进入当地，并带三个孩子参与。项目从最初想象一对男女在严酷自然中的故事，逐渐转向对家庭、季节、水与生活状态的重新理解。',
        actions: ['两年内频繁返回越后妻有', '在四季尤其雪季中长期拍摄', '带三个孩子进入拍摄过程', '在自然环境中安排家庭身体而非单纯拍景观', '使用黑白暗房控制不同雪地灰阶', '根据拍摄过程改变最初叙事方向', '将项目编辑为80页摄影书并制作收藏版银盐照片'],
        sourceUrl: 'https://www.threeshadows.cn/library/self-publishing/rongrong-and-inri-tsumari-story/', images: [],
        relations: [rel('展览', 'Echigo-Tsumari Art Triennale', '2012'), rel('出版', 'Tsumari Story — Three Shadows Press / Saneido', '2014')]
      },
      {
        title: 'Black-and-white darkroom as shared language', cluster: 'meta-method / couple authorship / darkroom', period: '2000–现在',
        summary: '他们的共同作者身份不仅发生在相机前。三影堂资料明确强调两人的作品不断推进传统黑白暗房技术边界，暗房灰阶、纸张和输出方式是合作语言的一部分。',
        actions: ['共同决定负片与最终打印的对应关系', '在暗房反复测试曝光和反差', '让不同年代作品维持可比较的黑白语言', '把共同生活的变化留给题材而非靠风格突变表现', '在书与展览中按家庭时间线重新编辑旧作'],
        sourceUrl: 'https://www.threeshadows.cn/jimei-arles/exhibitions/2020/zhihelijiangzi/', images: [], relations: []
      }
    ],
    awards: ['Sony World Photography Awards — Outstanding Contribution to Photography 2016'],
    exhibitions: ['Tsumari Story — Echigo-Tsumari / Mizuma / Three Shadows 2012–2014', '长期作品进入 MoMA、Tate、Getty 等机构收藏'],
    sources: [
      { label: 'Three Shadows — artist overview', url: 'https://www.threeshadows.cn/jimei-arles/exhibitions/2020/zhihelijiangzi/' },
      { label: 'Three Shadows — Tsumari Story', url: 'https://www.threeshadows.cn/library/self-publishing/rongrong-and-inri-tsumari-story/' },
      { label: 'Three Shadows — About', url: 'https://www.threeshadows.cn/about/' },
      { label: 'Photography of China', url: 'https://photographyofchina.com/author/rong-rong-and-inri' }
    ]
  },

  'takashi-homma': {
    artistId: 'takashi-homma',
    projectCoverage: '7 个城市 / 建筑 / 摄影装置节点已建立深档案 · 1990s–现在',
    imageCoverage: '0 / 7 项目已有代表图像',
    note: 'ホンマタカシ的核心不是“冷淡日系”。他反复改变摄影装置：4×5城市观察、儿童肖像、野生动物GPS轨迹、camera obscura、建筑窗口、书籍结构。不同项目外观差异很大，但始终在研究“一个视角是怎样被建筑、媒介和制度制造出来的”。',
    projects: [
      {
        title: 'Tokyo Suburbia', cluster: 'suburban landscape / children / detached observation', period: '1995–1998',
        summary: '在东京快速开发的郊区拍新住宅、停车场、商业设施和儿童。摄影刻意保持距离，不用戏剧性街拍把郊区浪漫化，而让建成环境和人的尺度处在同等位置。',
        actions: ['在东京周边新开发区长期寻找普通住宅和公共设施', '使用克制的正面 / 中距离视点', '同时拍建筑与生活在其中的儿童', '避免强烈瞬间和过度情绪化构图', '以 chromogenic print 输出', '通过摄影书把不同郊区当作同一城市系统比较'],
        sourceUrl: 'https://collection.topmuseum.jp/Publish/search?aate=%E3%83%9B%E3%83%B3%E3%83%9E+%E3%82%BF%E3%82%AB%E3%82%B7&aaty=contains', images: [],
        relations: [rel('奖项', '24th Kimura Ihei Award', '1999 — for Tokyo Suburbia')]
      },
      {
        title: 'Tokyo Children', cluster: 'portrait / city generation / serial observation', period: '1999–',
        summary: '儿童不被当作家庭纪念，而与东京郊区空间并列成为城市代际的观察对象。相对平静的肖像形式使服装、姿态和环境比“可爱瞬间”更重要。',
        actions: ['在城市 / 郊区寻找年轻被摄者', '使用稳定距离进行肖像拍摄', '降低成人对儿童戏剧性的导演', '与城市空间作品交替编辑', '通过系列积累观察代际变化'],
        sourceUrl: 'https://collection.topmuseum.jp/Publish/search?aate=%E3%83%9B%E3%83%B3%E3%83%9E+%E3%82%BF%E3%82%AB%E3%82%B7&aaty=contains', images: [], relations: []
      },
      {
        title: 'Together / Trails', cluster: 'wildlife trace / GPS / absence / documentary puzzle', period: '2006–2010',
        summary: 'Together 根据装有发射器的洛杉矶山狮 GPS 数据拍摄其经过的城市边缘；Trails 则跟随知床鹿猎人拍与猎杀有关的痕迹，却不让鹿本身成为主角。两个项目把“缺席的动物”转成地点和痕迹。',
        actions: ['使用野生动物 GPS / ranger 数据定位地点', '前往动物曾经过但此刻空无一物的城市边缘', '拍摄高速公路 / 灌木 / 空地等普通景观', '跟随猎人进入雪地', '记录血迹 / 脚印 / 狩猎后环境而非动物肖像', '在图像与说明之间保留不确定性'],
        sourceUrl: 'https://www.operacity.jp/ag/exh129/e/exhibition.html', images: [], relations: [rel('展览', 'New Documentary — traveling museum exhibition', '2011–2012')]
      },
      {
        title: 'The Narcissistic City', cluster: 'camera obscura / pinhole / metropolitan architecture', period: '2013–现在',
        summary: 'Homma 把酒店房间和室内空间整体变成 camera obscura：封住窗户，只留下小孔，让外部城市倒置投影到房间内部，再用感光材料记录。城市因此通过建筑自身的窗 / 孔来“给自己拍照”。',
        actions: ['选择可以面对重要建筑的房间', '完全遮光窗户', '只留下小孔作为 aperture', '让外部城市倒置投影进室内', '在长时间曝光中记录投影', '允许建筑、房间尺寸和天气共同决定成像', '将不同城市的 camera obscura 图像编辑成书'],
        sourceUrl: 'https://www.cca.qc.ca/en/73940/takashi-hommas-point-of-view-on-windows', images: [], relations: [rel('出版', 'The Narcissistic City — MACK', '2016')]
      },
      {
        title: 'Camera Obscura Study — Aoyama→Roppongi', cluster: 'room-as-camera / collective optical experiment', period: '2014',
        summary: '这一项目强调 camera obscura 不是摄影师独自从取景器看的工具，而是多人可共同进入的光学空间；房间本身就是相机。',
        actions: ['与他人一起封闭房间', '在窗面设置小孔', '等待城市影像在墙面显现', '使用特殊胶片 / 感光材料记录', '保留纸张卷曲和不平整', '在展览中让影像保留装置实验属性'],
        sourceUrl: 'https://madoken.jp/en/series/951/', images: [], relations: []
      },
      {
        title: 'Looking Through: Le Corbusier Windows', cluster: 'architecture / window / frame / long-term research', period: '2002–2018',
        summary: 'Homma 长期拍 Le Corbusier 建筑时不只做完成式建筑照，而把窗理解为建筑与摄影共同的 framing device。项目跨欧洲与亚洲持续十多年。',
        actions: ['进入不同 Le Corbusier 建筑', '优先寻找窗而非建筑整体正立面', '从室内向外拍摄被建筑预先裁好的风景', '比较不同尺度 / 形状窗洞如何组织视野', '把摄影构图与建筑师的 framing 决策叠合', '以书籍和 CCA 展览重新组织多年材料'],
        sourceUrl: 'https://www.cca.qc.ca/en/73940/takashi-hommas-point-of-view-on-windows', images: [],
        relations: [rel('出版', 'Looking Through: Le Corbusier Windows', '2019 / later editions'), rel('展览', 'Eye Camera Window — CCA', '2020–2021')]
      },
      {
        title: 'Photobook / re-editing as method', cluster: 'book / sequence / classification of images', period: '1990s–现在',
        summary: 'Homma 的作品大量通过摄影书形成最终结构。城市、建筑、人物或光学实验并不只靠单张完成，书的翻页、重复、间隔和分类决定不同图片被理解为纪录、商品图、私人图像还是艺术作品。',
        actions: ['长期保留跨委托 / 私人拍摄图像档案', '按照新的问题重新调用旧图', '把摄影书当成独立作品而非展览目录', '通过顺序和版式改变图像类别关系', '让同一图像在书、杂志和美术馆中承担不同功能'],
        sourceUrl: 'https://topmuseum.jp/upload/2/4713/e_pressrelease_HOMMA_1005.pdf', images: [], relations: []
      }
    ],
    awards: ['Kimura Ihei Award 1999'],
    exhibitions: ['New Documentary — 2011–2012', 'Revolution 9: Homma Takashi — Tokyo Photographic Art Museum 2023–2024', 'Eye Camera Window — CCA 2020–2021'],
    sources: [
      { label: 'Tokyo Photographic Art Museum', url: 'https://topmuseum.jp/upload/2/4713/e_pressrelease_HOMMA_1005.pdf' },
      { label: 'Tokyo Museum Collection — Tokyo Suburbia', url: 'https://collection.topmuseum.jp/Publish/search?aate=%E3%83%9B%E3%83%B3%E3%83%9E+%E3%82%BF%E3%82%AB%E3%82%B7&aaty=contains' },
      { label: 'Tokyo Opera City — New Documentary', url: 'https://www.operacity.jp/ag/exh129/e/exhibition.html' },
      { label: 'CCA — window research', url: 'https://www.cca.qc.ca/en/73940/takashi-hommas-point-of-view-on-windows' }
    ]
  },

  'chen-ronghui': {
    artistId: 'chen-ronghui',
    projectCoverage: '6 个城市化 / 大画幅 / 青年肖像节点已建立深档案 · 2010s–现在',
    imageCoverage: '0 / 6 项目已有代表图像',
    note: '陈荣辉的重要变化是从新闻摄影转向长期艺术项目后，开始主动减慢拍摄：8×10大画幅、三脚架、等待、社交平台寻找被摄者、环境肖像和摄影书。宏观“城市化”并不直接被拍成数据，而是落到年轻人的房间、职业选择、废弃设施和身体状态。',
    projects: [
      {
        title: 'Theme-park / early large-format transition', cluster: 'urbanisation / theme park / large-format observation', period: 'mid-2010s',
        summary: '从新闻摄影转向艺术摄影阶段，他开始用大画幅拍长三角主题乐园，并逐渐把兴趣转向自己身处的上海与城市现代性。',
        actions: ['从新闻现场切换到自主长期项目', '携带8×10大画幅与三脚架', '寻找人工娱乐景观和城市边缘', '使用高机位 / 梯子拉开观察距离', '减少即时抓拍而增加构图前等待', '从题材项目逐渐转向“城市如何被想象”'],
        sourceUrl: 'https://www.thepaper.cn/newsDetail_forward_6950763', images: [], relations: []
      },
      {
        title: 'Freezing Land — road / landscape system', cluster: 'shrinking city / northeast China / landscape', period: '2016–2019',
        summary: '项目横跨中国东北多个衰退 / 收缩城市，以道路式长期拍摄把工业遗迹、空置空间、雪地与青年肖像交替组织。',
        actions: ['跨东北多地公路式移动', '使用8×10大画幅相机', '拍摄废弃或人口流失后的城市景观', '在零下环境中保持慢速架机和构图', '把景观与人物肖像作为同一社会结构的两端', '用多年拍摄而非单次报道形成系列'],
        sourceUrl: 'https://photographyofchina.com/author/chen-ronghui-freezing-land', images: [], relations: [rel('奖项', 'Hou Dengke Documentary Photography Award', '2017'), rel('奖项', 'Three Shadows / ALPA Award', '2018')]
      },
      {
        title: 'Freezing Land — Kuaishou portraits', cluster: 'social-media casting / environmental portrait / youth', period: '2016–2019',
        summary: '严寒让街头偶遇人物非常困难，他因此直接使用快手寻找愿意被拍摄的东北年轻人。平台不是题材装饰，而是实际改变了选角与接触方式。',
        actions: ['打开快手附近的人寻找当地年轻用户', '私信说明拍摄意图并约见', '与被摄者交谈其工作 / 离开或留下的选择', '选择其真实工作或生活空间', '与人物共同重新选择房间中的位置', '用大画幅完成环境肖像', '把线上高活跃度与现实孤独感同时保留在画面背景中'],
        sourceUrl: 'https://www.lensculture.com/articles/ronghui-chen-freezing-land', images: [], relations: []
      },
      {
        title: 'Freezing Land — photobook', cluster: 'photobook / long-term edit / shrinking-city narrative', period: '2019–2020',
        summary: '项目最终不以新闻专题版面收束，而通过摄影书把景观、人物和城市细节重新编辑，使“东北衰退”从事件报道变成更慢的代际经验。',
        actions: ['回看多年8×10负片与人物记录', '筛选环境肖像与空城景观的比例', '避免按城市地理顺序做说明式排版', '让冷色景观与人物内部空间形成节奏', '出版独立摄影书', '将书继续带入展览语境'],
        sourceUrl: 'https://ronghuichen.com/cv/', images: [],
        relations: [rel('出版', 'Freezing Land — Jiazazhi', 'photobook'), rel('奖项', 'Paris Photo–Aperture First PhotoBook shortlist', '2020')]
      },
      {
        title: 'Modern Shanghai / urban ambition', cluster: 'Shanghai / aspiration / elevated viewpoint / large format', period: 'late-2010s–2024',
        summary: '从东北“离开还是留下”的问题转向上海这一吸引小镇青年前往的城市。他用大画幅、高机位和城市公共空间观察成功、欲望与城市身份。',
        actions: ['在上海长期寻找消费 / 娱乐 /公共空间', '使用可升高到约3米的折叠梯提高机位', '携带8×10大画幅控制细节', '在高机位下把个人压进城市结构', '避免新闻式事件中心构图', '通过长期项目分析“小镇青年进入大城市”的个人经验'],
        sourceUrl: 'https://www.thepaper.cn/newsDetail_forward_6950763', images: [], relations: [rel('展览', 'Modern Shanghai — UP Gallery', '2024')]
      },
      {
        title: 'Urbanisation as personal research', cluster: 'meta-method / journalism → art / slow camera / social research', period: '2010s–现在',
        summary: '他的稳定工作链是：先从社会结构问题出发，再寻找可进入的地理区域和具体人群；大画幅相机迫使拍摄减速，采访 / 社交平台 / 场景选择则把“研究”真正放到按快门之前。',
        actions: ['从城市化 / 工业化问题建立项目框架', '进行文本 / 地方史和新闻资料研究', '寻找具体城市与人群入口', '通过聊天 / 社交平台建立人物联系', '用8×10相机减慢决定速度', '让环境细节承担社会信息', '通过摄影书 / 展览而非单条新闻完成项目'],
        sourceUrl: 'https://www.art.yale.edu/ronghui-chen', images: [], relations: [rel('奖项', 'Richard Benson Prize — Yale', '2021')]
      }
    ],
    awards: ['World Press Photo prize', 'Hou Dengke Documentary Photography Award 2017', 'Three Shadows / ALPA Award 2018', 'Richard Benson Prize 2021'],
    exhibitions: ['Les Rencontres d’Arles 2017', 'An Ordinary Evening in New Haven — Three Shadows +3 Gallery 2022', 'Modern Shanghai — UP Gallery 2024'],
    sources: [
      { label: 'Chen Ronghui — artist site', url: 'https://ronghuichen.com/' },
      { label: 'Photography of China — Freezing Land', url: 'https://photographyofchina.com/author/chen-ronghui-freezing-land' },
      { label: 'The Paper interview', url: 'https://www.thepaper.cn/newsDetail_forward_6950763' },
      { label: 'Yale School of Art', url: 'https://www.art.yale.edu/ronghui-chen' }
    ]
  },

  'tomoko-yoneda': {
    artistId: 'tomoko-yoneda',
    projectCoverage: '7 个历史研究 / 地点 / 物件观看节点已建立深档案 · 1990s–现在',
    imageCoverage: '0 / 7 项目已有代表图像',
    note: '米田知子的作品看起来安静，但创作动作往往非常“重”：先在图书馆和档案中研究历史，再寻找没有纪念碑、没有戏剧性痕迹的地点或物件，以极克制摄影让“看不见的历史”依靠标题、文本和观看装置重新出现。',
    projects: [
      {
        title: 'Between Visible and Invisible', cluster: 'spectacles / historical figure / text / optical device', period: '1998–',
        summary: '使用 Freud、Gandhi、Brecht、Le Corbusier 等历史人物真实使用过的眼镜，通过镜片拍与人物相关的手稿 / 文本。眼镜既是遗物，也是实际改变景深与可见范围的光学装置。',
        actions: ['研究20世纪历史人物与其档案所在地', '申请接触人物真实使用过的眼镜', '选择与其人生 / 思想相关的手稿或文本', '把眼镜置于镜头与文本之间', '通过真实镜片拍摄而非后期模拟', '让镜片内局部清晰、外围失焦', '用标题补充人物与文本关系'],
        sourceUrl: 'https://shugoarts.com/wp/wp-content/uploads/media/2019/04/text_yoneda_atsuo_yasuda_e.pdf', images: [], relations: []
      },
      {
        title: 'Scene', cluster: 'historical site / invisible event / landscape + caption', period: '2000s–',
        summary: '拍看似普通的海滩、树林、道路和城市空间，但这些地点曾发生战争、政治冲突或其他历史事件。照片本身故意不提供“历史证据”，意义在读到标题后才出现。',
        actions: ['先从历史文献确定重大事件具体地点', '实地寻找今天仍可进入的视点', '避开纪念碑和过度明显的历史标记', '使用安静、日常化的彩色景观摄影', '保留现实中“什么都没发生”的表面', '以精确标题 / 说明重新激活历史层'],
        sourceUrl: 'https://shugoarts.com/wp/wp-content/uploads/media/2019/04/text_yoneda_atsuo_yasuda_e.pdf', images: [], relations: []
      },
      {
        title: 'After the Thaw / post-socialist Europe', cluster: 'political transition / place memory / field research', period: '2004',
        summary: '在东欧政治转型后的地点拍摄“历史之后的普通空间”。她不是寻找残酷事件的视觉奇观，而是研究意识形态转变后地点如何继续被日常使用。',
        actions: ['在 British Library 等机构进行前期历史研究', '寻找政治转型后的具体地点', '前往东欧实地调查', '以平静景观 / 建筑照片记录当下状态', '把历史资料与现状照片分开保持', '依靠展览文本建立时间差'],
        sourceUrl: 'https://shugoarts.com/en/exhibitions/e00436/', images: [], relations: []
      },
      {
        title: 'A Decade After', cluster: 'earthquake memory / hometown / reconstruction', period: '1995/2004',
        summary: '围绕阪神地区与大地震后的十年时间差工作。重点不是灾难现场，而是重建后的普通空间怎样承载已经不可见的创伤。',
        actions: ['回到成长地区进行长期观察', '对照灾害记忆与十年后的城市表面', '避免灾难新闻摄影式废墟图像', '选择重建后看似正常的地点', '通过标题 / 时间信息让消失的事件重新出现'],
        sourceUrl: 'https://shugoarts.com/en/exhibitions/e00436/', images: [], relations: []
      },
      {
        title: 'Cumulus / Fukushima–Hiroshima–Tokyo', cluster: 'modern Japan / catastrophe / ideology / landscape', period: '2011–2012',
        summary: '在东日本大震灾后，她把 Fukushima、Hiroshima 与 Tokyo 等地点放入同一历史阅读，重新考察现代日本灾难、国家叙事和个人记忆。',
        actions: ['研究灾难地点的历史与制度背景', '实地进入多个具有不同时间层的城市', '使用相近冷静视觉语言拍摄', '避免将不同灾难简化成同一象征', '通过系列编辑建立跨年代关联'],
        sourceUrl: 'https://shugoarts.com/en/exhibitions/e00606/', images: [], relations: []
      },
      {
        title: 'Dialogue with A.C.', cluster: 'Albert Camus / archive research / place / literature', period: '2018–2019',
        summary: '项目以 Albert Camus 的文本和20世纪政治思想为研究入口，再回到与战争、抵抗和意识形态相关地点。文学不是插图来源，而是寻找场地与问题的方法。',
        actions: ['在图书馆阅读 Camus 与相关历史文本', '从文本抽取政治 / 道德问题', '寻找与这些问题关联的具体地点', '进行实地摄影', '把书页 / 引文与地点照片并置', '在展览中让阅读与观看互相触发'],
        sourceUrl: 'https://shugoarts.com/en/exhibitions/e00436/', images: [], relations: [rel('展览', 'Dialogue with A.C. — ShugoArts', '2019')]
      },
      {
        title: 'Crystals', cluster: 'natural micro-event / Finland / duration / peace', period: '2013–2023',
        summary: '近年来她把“历史痕迹”扩展到自然时间。Crystals 在严寒芬兰拍摄短暂冰晶，把极易消失的自然形态视为更大循环中的微小生命。',
        actions: ['在芬兰严寒环境长期观察地表冰晶', '寻找极短暂且受温湿度影响的形态', '以小幅 chromogenic print 保持尺度克制', '跨十年持续拍摄并重新编辑', '将自然脆弱性与其长期和平 / 生命主题连接'],
        sourceUrl: 'https://shugoarts.com/en/exhibitions/e01129/', images: [], relations: [rel('展览', 'Crystals — ShugoArts', '2024')]
      }
    ],
    awards: [],
    exhibitions: ['Venice Biennale 2007', 'We shall meet in the place where there is no darkness — Tokyo Photographic Art Museum 2013', 'Fundación MAPFRE solo exhibition 2021', 'Crystals — ShugoArts 2024'],
    sources: [
      { label: 'ShugoArts — artist / history overview', url: 'https://shugoarts.com/en/exhibitions/e00436/' },
      { label: 'ShugoArts — Between Visible and Invisible essay', url: 'https://shugoarts.com/wp/wp-content/uploads/media/2019/04/text_yoneda_atsuo_yasuda_e.pdf' },
      { label: 'ShugoArts — Crystals', url: 'https://shugoarts.com/en/exhibitions/e01129/' }
    ]
  },

  'claudia-andujar': {
    artistId: 'claudia-andujar',
    projectCoverage: '7 个 Yanomami 长期合作 / 实验摄影 / 行动节点已建立深档案 · 1971–现在',
    imageCoverage: '0 / 7 项目已有代表图像',
    note: 'Andujar 的实践不能拆成“艺术摄影”和“政治行动”两半。她先通过多年共同生活寻找不等同于传统新闻纪实的摄影语言，随后在疫情、道路和采矿威胁下把摄影直接转入领土权利、健康行动与公共倡议。后来的展览又把这几十年重新组织为一个同时包含美学、档案和政治文件的系统。',
    projects: [
      {
        title: 'First encounters / Catrimani fieldwork', cluster: 'long-term immersion / daily life / low-light photography', period: '1971–1977',
        summary: '1971 年首次到 Catrimani 后，她多年反复返回，与 Yanomami 社群共同生活。热带雨林湿度、低光和设备失灵迫使她改变技术条件，高感光胶片、广角和身体接近成为工作现实。',
        actions: ['从杂志报道进入 Yanomami 地区', '多年反复返回 Catrimani', '与家庭共同生活和参与日常行动', '在极暗森林中提高胶片感光度', '设备受湿度影响时改用更直接的曝光判断', '使用广角在近距离工作', '从短期报道逐渐转成长期关系'],
        sourceUrl: 'https://ims.com.br/2019/10/25/claudia-andujar-the-yanomami-struggle-exhibition-texts/', images: [], relations: []
      },
      {
        title: 'A Floresta / shamanic-experience experiments', cluster: 'experimental documentary / motion / light / altered perception', period: '1970s',
        summary: '为了接近她所理解的森林与 shamanic experience，她没有坚持“中性纪实”，而使用长曝光、闪光、运动、滤镜和其他实验方法，让视觉失真成为体验翻译的一部分。',
        actions: ['观察仪式 / 森林环境中的低光状态', '测试长曝光与相机运动', '使用闪光制造局部身体显现', '允许失焦 / 运动模糊进入结果', '使用不同胶片与光线处理', '把实验形式与具体共同生活经验关联，而非独立做视觉特效'],
        sourceUrl: 'https://www.fondationcartier.com/en/collection/artists/claudia-andujar', images: [], relations: []
      },
      {
        title: 'Yanomami drawings / self-representation', cluster: 'collaboration / drawing / cosmology / non-photographic archive', period: '1970s–',
        summary: '她也向 Yanomami 提供纸、笔和彩色材料，让对方自行描绘其 metaphysical universe。项目因此拒绝摄影师垄断“谁来表示这个世界”。',
        actions: ['向社群提供纸张、笔和 felt-tip materials', '不规定必须画成写实民族志图像', '保留 Yanomami 自己的宇宙 / 经验表达', '将这些图像与摄影分开署名和呈现', '在后来的展览中与历史文件共同出现'],
        sourceUrl: 'https://www.fondationcartier.com/en/collection/artists/claudia-andujar', images: [], relations: []
      },
      {
        title: 'Marcados', cluster: 'health campaign / numbered portrait / archive / identity', period: '1981–1984',
        summary: '在健康行动中，为便于医疗登记，她拍摄佩戴编号牌的 Yanomami 肖像。编号本来是行政工具，但照片后来形成 Marcados：同时令人想到身份证、病历、档案与历史暴力中的“被编号身体”。',
        actions: ['参与 Yanomami 健康 / 疫情应对行动', '为医疗登记建立编号系统', '让被摄者佩戴编号牌', '以相对一致的正面方式拍摄', '把功能性医疗照片保留进个人档案', '多年后重新编辑为艺术 / 历史系列', '让原本行政图像转化为身份政治问题'],
        sourceUrl: 'https://www.fondationcartier.com/en/collection/artists/claudia-andujar', images: [], relations: []
      },
      {
        title: 'CCPY / territorial campaign', cluster: 'activism / land rights / photography as political tool', period: '1978–1992',
        summary: '1978 年她与 Carlo Zacquini、Bruce Albert 等共同建立 Comissão Pró-Yanomami，随后近十五年围绕领土划界、健康和反侵害进行公共行动。此阶段摄影从艺术实践直接进入倡议工具。',
        actions: ['共同建立 Yanomami 权利组织', '整理照片作为公共传播材料', '参与健康 / 土地调查', '与 Yanomami 领导者和人类学者协作', '向巴西国内外传播道路 / 疫病 / 采矿造成的威胁', '持续推动领土 demarcation', '将摄影档案用于政治说服而非只进入美术馆'],
        sourceUrl: 'https://www.fondationcartier.com/programme/exposition/claudia-andujar-la-lutte-yanomami', images: [],
        relations: [rel('奖项', 'Yanomami territory legally recognized', '1992 — collective political outcome, not an art prize')]
      },
      {
        title: 'The Yanomami Struggle — archival reconstruction', cluster: 'retrospective / archive / drawings / documents / audiovisual installation', period: '2018–2024',
        summary: 'Thyago Nogueira 从 Andujar 超过 40,000 张图像的档案研究出发，将三百余张照片、Yanomami 绘画、书籍、历史文件和 audiovisual installation 重新组织成长期斗争史。',
        actions: ['系统整理数万张历史底片 / 图像', '按年代与政治阶段重新分类', '把艺术照片与行动文件放进同一展览', '加入 Yanomami 艺术家绘画', '使用声音 / 影像装置扩展单张照片', '让巡展版本根据地点更新', '与 Yanomami 机构持续合作修订展示语境'],
        sourceUrl: 'https://ims.com.br/exposicao/claudia-andujar-the-yanomami-struggle/', images: [],
        relations: [rel('展览', 'Instituto Moreira Salles', '2018–2019'), rel('展览', 'Fondation Cartier', '2020'), rel('展览', 'The Shed', '2023'), rel('展览', 'KYOTOGRAPHIE', '2024')]
      },
      {
        title: 'Aesthetic + political practice as one system', cluster: 'meta-method / relation / representation / advocacy', period: '1971–现在',
        summary: 'Andujar 最重要的方法是关系优先：形式实验建立在长期共同生活上，档案建立在健康 / 政治行动中，后来的美术馆展示又必须把这些关系重新放回作品。',
        actions: ['先建立长期关系再持续拍摄', '根据环境现实改变摄影技术', '允许社群通过非摄影媒介自我表达', '在危机阶段把艺术生产让位给政治行动', '把行政 / 健康材料保存为历史档案', '后来重新编辑时同时展示照片、文件、绘画和声音', '让“谁在代表谁”始终保持可见'],
        sourceUrl: 'https://www.fondationcartier.com/en/collection/artists/claudia-andujar', images: [], relations: []
      }
    ],
    awards: [],
    exhibitions: ['Claudia Andujar: The Yanomami Struggle — IMS 2018–2019', 'Fondation Cartier 2020', 'Barbican 2021', 'The Shed 2023', 'KYOTOGRAPHIE / Kyoto 2024'],
    sources: [
      { label: 'Instituto Moreira Salles — The Yanomami Struggle', url: 'https://ims.com.br/exposicao/claudia-andujar-the-yanomami-struggle/' },
      { label: 'IMS — exhibition texts', url: 'https://ims.com.br/2019/10/25/claudia-andujar-the-yanomami-struggle-exhibition-texts/' },
      { label: 'Fondation Cartier — Claudia Andujar', url: 'https://www.fondationcartier.com/en/collection/artists/claudia-andujar' },
      { label: 'Fondation Cartier — The Yanomami Struggle', url: 'https://www.fondationcartier.com/programme/exposition/claudia-andujar-la-lutte-yanomami' }
    ]
  }
};
