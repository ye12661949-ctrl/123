import type { ArtistArchive } from './archiveData';

export const archiveBatch58: Record<string, ArtistArchive> = {
  'anne-collier': {
    artistId: 'anne-collier',
    projectCoverage: '6 个核心项目 / 方法节点已建立深档案',
    imageCoverage: '以 MoMA / Anton Kern 等机构来源为主；不确定直链暂不硬填',
    note: '重点不是把 found image 当素材库，而是追踪她怎样把书页、杂志、唱片封面和摄影器材广告重新变成“可被再观看的物件”。每个节点都拆到搜集、摆放、工作室再摄影、裁切、放大和展示。',
    projects: [
      {
        title: 'Cut', cluster: '眼睛 / 摄影装置 / 再摄影', period: '2009–2010',
        summary: '把自己的眼睛照片置入裁纸刀中重新摄影，让“观看”与“切割图像”的工具直接发生关系。',
        actions: ['先制作眼睛的摄影图像', '把照片作为纸张物件放入裁纸刀', '在中性背景上进行工作室布光', '保持裁纸刀、照片边缘和眼睛同时清晰', '放大输出，使原本小型物件获得接近雕塑的尺度'],
        sourceUrl: 'https://www.moma.org/collection/works/147155', images: [],
        relations: [{ kind: '收藏', label: 'MoMA', detail: 'Cut, 2009' }]
      },
      {
        title: 'Veterans Day', cluster: '博物馆日历 / 摄影史 / 书页物件', period: '2011',
        summary: '重新拍摄 MoMA 1972 年摄影日历中的 Edward Weston 裸体图像，让旧摄影史、日历日期与今天的观看发生碰撞。',
        actions: ['寻找已经存在的摄影出版物', '选择具体页码与日期', '将日历摊开放在工作室平面', '控制纸张折痕、页边与图像比例', '再摄影并大尺幅输出'],
        sourceUrl: 'https://www.moma.org/interactives/exhibitions/2012/newphotography/anne-collier/', images: [],
        relations: [{ kind: '展览', label: 'New Photography 2012 — MoMA', detail: '2012–2013' }]
      },
      {
        title: 'Woman With Cameras #1', cluster: '广告 / 性别 / 摄影器材文化', period: '2012',
        summary: '从 1970 年代摄影行业出版物中提取“女性身体被用来销售相机”的视觉模板，再以冷静商品摄影方式放大。',
        actions: ['从二手书刊与摄影行业出版物中搜集图像', '选择女性身体与相机同时出现的页面', '保持杂志页作为物件而不是裁掉全部边缘', '工作室再摄影', '大幅彩色输出，让广告模板变成被审视的对象'],
        sourceUrl: 'https://www.moma.org/interactives/exhibitions/2012/newphotography/anne-collier/collier-3-2/index.html', images: [],
        relations: [{ kind: '展览', label: 'New Photography 2012 — MoMA', detail: '2012–2013' }]
      },
      {
        title: 'Open Book', cluster: '书页 / 图像物质性 / 展开结构', period: '2012–',
        summary: '持续把打开的书、杂志和摄影出版物作为静物重新拍摄，让书脊、页缝和纸面进入最终画面。',
        actions: ['选择旧书与印刷图像', '固定打开角度', '保留书脊和页边', '用近似商品摄影的均匀光线拍摄', '通过放大强化纸张与复制痕迹'],
        sourceUrl: 'https://www.antonkerngallery.com/artists/46-anne-collier/', images: [], relations: []
      },
      {
        title: 'Woman Crying', cluster: '情绪模板 / 女性形象 / 媒体裁切', period: '2014–',
        summary: '从漫画、杂志与商业图像中不断提取哭泣女性，把高度编码的情绪表情从原始故事中抽离出来。',
        actions: ['搜集大众媒体中的哭泣女性图像', '截取眼睛、泪水和脸部局部', '去掉原有叙事上下文', '工作室再摄影', '以系列并置比较相似情绪模板'],
        sourceUrl: 'https://www.antonkerngallery.com/artists/46-anne-collier/', images: [], relations: []
      },
      {
        title: 'Eyes / ongoing found-image practice', cluster: '眼睛 / 凝视 / 图像数据库', period: '2010s–',
        summary: '把“眼睛”作为跨广告、艺术史、摄影书与流行媒体反复出现的视觉单元，持续建立可比较的再摄影图像。',
        actions: ['跨不同印刷媒介收集眼睛图像', '按相似构图与观看关系选择', '保留原物件的纸张与版面信息', '重新拍摄而非扫描', '通过重复系列让“凝视”成为结构而不是单张象征'],
        sourceUrl: 'https://www.moma.org/artists/39651-anne-collier', images: [], relations: []
      }
    ],
    awards: [],
    exhibitions: ['Greater New York — MoMA PS1, 2005', 'New Photography — MoMA, 2012–2013', 'Anne Collier survey — CCS Bard / MCA Chicago, 2014–2015'],
    sources: [
      { label: 'MoMA — New Photography 2012', url: 'https://www.moma.org/interactives/exhibitions/2012/newphotography/anne-collier/' },
      { label: 'Anton Kern Gallery', url: 'https://www.antonkerngallery.com/artists/46-anne-collier/' }
    ]
  },

  'louise-lawler': {
    artistId: 'louise-lawler',
    projectCoverage: '7 个核心项目 / 展示机制节点已建立深档案',
    imageCoverage: '重点保留 MoMA 可核验机构来源；避免把不稳定拍卖图当主图',
    note: 'Lawler 的关键不是“拍别人的艺术品”，而是把艺术品如何被收藏、运输、拍卖、挂墙、缩放、重新印刷全部当成作品的一部分。档案按“流通与展示动作”而不是按传统风格分期。',
    projects: [
      {
        title: 'Birdcalls', cluster: '声音 / 艺术制度 / 性别', period: '1972/1981',
        summary: '把著名男性艺术家的名字转成鸟叫式声音，直接把艺术史权威名单变成荒诞声响。',
        actions: ['列出男性艺术家姓名', '把姓名按发音拆解', '以鸟叫般的方式朗读和录音', '在展览空间循环播放', '让声音取代传统艺术物件'],
        sourceUrl: 'https://www.moma.org/calendar/exhibitions/1646', images: [],
        relations: [{ kind: '展览', label: 'Louise Lawler: WHY PICTURES NOW — MoMA', detail: '2017 展出于雕塑花园' }]
      },
      {
        title: 'Why Pictures Now', cluster: '文本 / 日常物件 / 图像制度', period: '1981',
        summary: '把写有 WHY PICTURES NOW 的火柴盒与烟灰缸并置拍摄，让问题本身成为图像。',
        actions: ['选择廉价日常物件', '让文字直接进入物件表面', '用摄影固定临时摆放关系', '通过标题与画面形成循环提问'],
        sourceUrl: 'https://www.moma.org/artists/7928-louise-lawler', images: [], relations: []
      },
      {
        title: 'Collector / Museum / Auction Photographs', cluster: '收藏 / 市场 / 展示语境', period: '1980s–',
        summary: '进入收藏家住宅、博物馆和拍卖预展，拍摄名作与家具、墙面、标签和其他作品共同存在的真实环境。',
        actions: ['获取私人住宅与机构空间进入权限', '不隔离单件名作，而是保留其周边环境', '现场记录艺术品与家具、标签和建筑关系', '用标题强化地点或拥有关系', '在新的机构中再次展示这些关于旧机构的照片'],
        sourceUrl: 'https://www.moma.org/calendar/exhibitions/1646', images: [], relations: []
      },
      {
        title: 'Pollock and Tureen', cluster: '家居 / 现代主义 / 所有权', period: '1984',
        summary: '把 Jackson Pollock 绘画与前景中的汤碗同时纳入画面，使艺术史名作重新落回具体私人生活与财富结构。',
        actions: ['在收藏环境中寻找画面关系', '让名作不再占据完整画幅', '保留家居物件作为同等视觉信息', '以摄影把价值层级压到同一个二维平面'],
        sourceUrl: 'https://www.moma.org/artists/7928-louise-lawler', images: [], relations: []
      },
      {
        title: 'Adjusted to Fit', cluster: '拉伸 / 墙面适配 / 可变尺寸', period: '2006–',
        summary: '把已有摄影根据新展墙比例水平或垂直拉伸，使同一图像在每个展场变成不同形态。',
        actions: ['从既有作品中选择图像', '测量新展墙尺寸', '数字拉伸图像而不保持原始比例', '以壁纸 / vinyl 等方式输出', '让建筑比例直接决定最终作品形态'],
        sourceUrl: 'https://www.moma.org/calendar/exhibitions/1646', images: [],
        relations: [{ kind: '展览', label: 'WHY PICTURES NOW — MoMA', detail: '2017 大量使用 adjusted-to-fit 图像' }]
      },
      {
        title: 'Tracings', cluster: '线描 / 去图像化 / 墙面 vinyl', period: '2013–',
        summary: '把已有摄影转换成黑白线描，再直接作为 vinyl 安装到墙面，让“照片”进一步脱离原来的摄影对象与尺寸。',
        actions: ['选取已有摄影', '提取轮廓线', '去掉连续色调和大部分摄影细节', '转成黑白 tracing', '按建筑墙面比例输出 vinyl'],
        sourceUrl: 'https://www.moma.org/calendar/exhibitions/1646', images: [], relations: []
      },
      {
        title: 'WHY PICTURES NOW', cluster: '回顾展 / 非线性重排 / 自我再语境化', period: '2017',
        summary: 'MoMA 回顾展把不同时期照片、Adjusted to Fit、Tracings、Birdcalls 和 ephemera 放到同一空间，展示她如何不断重用自己的旧图像。',
        actions: ['从四十年作品中跨年代选择', '不按线性时间排列', '让摄影与声音、海报、壁纸、线描并置', '根据 MoMA 展墙重新拉伸部分图像', '把历史档案再次转化成当下的展示关系'],
        sourceUrl: 'https://www.moma.org/calendar/exhibitions/1646', images: [],
        relations: [{ kind: '策展', label: 'Roxana Marcoci', detail: 'MoMA, 2017' }, { kind: '出版', label: 'Louise Lawler: Receptions', detail: 'MoMA, 2017' }]
      }
    ],
    awards: [], exhibitions: ['Projects: Louise Lawler — MoMA, 1987', 'Louise Lawler: WHY PICTURES NOW — MoMA, 2017'],
    sources: [{ label: 'MoMA — WHY PICTURES NOW', url: 'https://www.moma.org/calendar/exhibitions/1646' }, { label: 'MoMA artist archive', url: 'https://www.moma.org/artists/7928-louise-lawler' }]
  },

  'ahlam-shibli': {
    artistId: 'ahlam-shibli',
    projectCoverage: '7 个长期项目节点已建立深档案',
    imageCoverage: '机构资料充分；以 MACBA Phantom Home 档案为主要骨架',
    note: '不把她压成“巴勒斯坦冲突摄影”。档案围绕 home / body / belonging 展开，并保留每组作品的长期接触、文字 caption 和社会关系。',
    projects: [
      {
        title: 'Goter', cluster: '贝都因社区 / 家 / 国家结构', period: '2002–2003',
        summary: '围绕以色列境内贝都因社区的居住与生存条件，观察“家”如何同时是生活空间与被国家制度持续限制的政治条件。',
        actions: ['长期进入具体社区', '拍摄住宅、家庭成员与周边环境', '保留日常生活而非只寻找冲突瞬间', '为图像标注地点与时间', '以系列而非新闻单图建立语义'],
        sourceUrl: 'https://www.macba.cat/en/exhibitions/ahlam-shibli-phantom-home/', images: [], relations: []
      },
      {
        title: 'Eastern LGBT', cluster: '身体 / 身份政治 / 生存空间', period: '2004–2006',
        summary: '拍摄来自东方社会的 LGBT 个体，让身体本身成为“最初的家”，同时显示身体也如何成为身份政治首先攻击的对象。',
        actions: ['与被摄者建立长期接触', '在私人和日常空间拍摄', '避免把人物压成单一身份标签', '将人物与生活环境一并纳入系列', '用 caption 固定具体关系与地点'],
        sourceUrl: 'https://www.macba.cat/en/exhibitions/ahlam-shibli-phantom-home/', images: [], relations: []
      },
      {
        title: 'Trackers', cluster: '军事服务 / 巴勒斯坦身份 / 殖民关系', period: '2005',
        summary: '研究在以色列军队服役的巴勒斯坦贝都因人，呈现身份、经济需要和殖民权力之间的矛盾关系。',
        actions: ['接触具体服役者与家庭', '拍摄军人、制服和家庭环境', '同时记录公共与私人身份', '以文字说明保持个体差异', '通过系列让矛盾而非单一判断出现'],
        sourceUrl: 'https://www.macba.cat/en/exhibitions/ahlam-shibli-phantom-home/', images: [], relations: []
      },
      {
        title: 'Dependence', cluster: '移民劳动 / 雇主关系 / 巴塞罗那', period: '2007',
        summary: '在巴塞罗那拍摄移民家庭劳动者与雇主之间的具体日常关系，把照护、经济依赖与归属放在同一画面系统中。',
        actions: ['进入雇主与劳动者共同活动的日常空间', '拍摄购物、宗教活动与家务关系', '保留双方身体关系而非只拍劳动者', '精确记录地点、人物关系和日期'],
        sourceUrl: 'https://www.macba.cat/en/actor/ahlam-shibli/', images: [], relations: []
      },
      {
        title: 'Dom Dziecka. The house starves when you are away', cluster: '孤儿院 / 群体生活 / 家的替代物', period: '2008',
        summary: '在波兰儿童院拍摄共同生活，研究机构是否能够提供“家”，以及儿童如何在制度空间中制造自己的亲密关系。',
        actions: ['长期进入儿童院', '记录寝室、公共空间和儿童互动', '拍摄制度结构与私人动作的交界', '用系列展示群体内部差异'],
        sourceUrl: 'https://www.macba.cat/en/exhibitions/ahlam-shibli-phantom-home/', images: [], relations: []
      },
      {
        title: 'Trauma', cluster: '法国地方史 / 反纳粹抵抗 / 殖民战争', period: '2008–2009',
        summary: '在法国 Corrèze / Tulle 追踪同一地方如何纪念反纳粹抵抗者，又如何纪念后来参与法国殖民战争的人。',
        actions: ['研究地方纪念史', '拍摄纪念碑、仪式与家庭环境', '追踪相同人物或家族在不同战争中的位置', '把公共纪念与私人记忆并置', '通过 caption 把看似普通地点重新连接到历史'],
        sourceUrl: 'https://www.macba.cat/en/exhibitions/ahlam-shibli-phantom-home/', images: [], relations: []
      },
      {
        title: 'Death', cluster: '烈士图像 / 家庭空间 / 纪念系统', period: '2011–2012',
        summary: '拍摄巴勒斯坦社会中死者如何通过海报、照片、墓地、涂鸦和家庭摆设持续“在场”；系列共形成大规模图像档案。',
        actions: ['进入家庭与公共空间', '拍摄墙面海报、纪念照片、墓地与涂鸦', '同时记录图像如何被摆放和使用', '精确记录时间地点', '以大量图片形成重复结构', '让私人纪念和公共政治图像在同一系列中互相解释'],
        sourceUrl: 'https://www.macba.cat/en/exhibitions/ahlam-shibli-phantom-home/', images: [],
        relations: [{ kind: '展览', label: 'Phantom Home — MACBA / Jeu de Paume / Serralves', detail: '2013–2014' }, { kind: '出版', label: 'Ahlam Shibli: Phantom Home', detail: '2013' }]
      }
    ],
    awards: [], exhibitions: ['Phantom Home — MACBA, 2013', 'Jeu de Paume, 2013', 'Serralves, 2013–2014'],
    sources: [{ label: 'MACBA — Phantom Home', url: 'https://www.macba.cat/en/exhibitions/ahlam-shibli-phantom-home/' }, { label: 'MACBA artist archive', url: 'https://www.macba.cat/en/actor/ahlam-shibli/' }]
  },

  'allan-sekula': {
    artistId: 'allan-sekula',
    projectCoverage: '6 个核心研究 / 影像节点已建立深档案',
    imageCoverage: '优先使用 Reina Sofía 等公共机构档案；重点放在照片、文本与研究流程关系',
    note: 'Sekula 的方法不能被缩成“港口摄影”。他持续把摄影、写作、档案、访谈和劳动史组合起来，真正对象是图像背后的经济关系。',
    projects: [
      {
        title: 'Aerospace Folktales', cluster: '家庭 / 劳动 / 阶级 / 图文装置', period: '1973',
        summary: '以自己家庭和父亲失业经验为起点，把家庭肖像、录音、文字与阶级分析组合成早期研究型摄影装置。',
        actions: ['拍摄家庭成员和家庭空间', '记录父亲失业后的日常', '加入录音与文字材料', '把私人家庭问题连接到产业劳动结构', '以照片序列而非单张肖像展示'],
        sourceUrl: 'https://www.museoreinasofia.es/en/collections/artist/sekula-allan', images: [], relations: []
      },
      {
        title: 'School is a Factory', cluster: '教育 / 劳动 / 图文面板', period: '1978–1980',
        summary: '把学校理解为训练劳动力和社会角色的制度，通过照片与图文面板建立结构性批判。',
        actions: ['拍摄学校和学生环境', '组合银盐照片', '加入文字与图表式材料', '把单张照片安装到面板结构中', '让教育制度和工厂生产逻辑形成可比较关系'],
        sourceUrl: 'https://ladigitaldelreina.museoreinasofia.es/search/item/25588-school-is-a-factory-la-escuela-es-una-fabrica', images: [],
        relations: [{ kind: '收藏', label: 'Museo Reina Sofía', detail: 'School is a Factory 组作' }]
      },
      {
        title: 'Fish Story', cluster: '海洋 / 港口 / 全球物流 / 摄影与论文', period: '1989–1995',
        summary: '跨港口、船舶、海员和货运系统拍摄，并与长篇论文结合，把海洋重新定义为全球资本主义最关键却最少被看见的基础设施。',
        actions: ['跨多个港口长期旅行与拍摄', '记录船舶、码头、集装箱与劳动者', '研究海运历史与政治经济', '把图片与长篇文本共同编辑', '展览与书籍同时作为最终形式'],
        sourceUrl: 'https://www.museoreinasofia.es/en/activity/forgotten-space-film-essay-allan-sekula-and-noel-burch/', images: [], relations: []
      },
      {
        title: 'Waiting for Tear Gas', cluster: '抗议 / 身体参与 / 反新闻摄影', period: '1999–2000',
        summary: '围绕西雅图 WTO 抗议，以身处人群内部的拍摄反对远距离新闻奇观，把等待、混乱和参与者身体重新放进政治摄影。',
        actions: ['进入抗议人群内部', '避免长焦式远距离取景', '连续拍摄等待和行动过程', '把普通参与者而非冲突高潮作为主要对象', '以序列恢复事件的持续时间'],
        sourceUrl: 'https://www.museoreinasofia.es/en/collections/artist/sekula-allan', images: [], relations: []
      },
      {
        title: 'Black Tide', cluster: 'Prestige 漏油 / 劳动 / 环境灾难', period: '2002–2003',
        summary: '围绕西班牙 Prestige 漏油事故拍摄志愿者、渔民、军队和受污染海岸，把环境灾难重新放回劳动与能源经济。',
        actions: ['进入受污染海岸和清理现场', '拍摄志愿者、渔民、军队与油污', '记录具体日期和地点', '同时拍摄劳动过程与疲劳状态', '按系列编辑成社会和环境关系而非灾难奇观'],
        sourceUrl: 'https://www.museoreinasofia.es/en/collections/artist/sekula-allan', images: [],
        relations: [{ kind: '收藏', label: 'Museo Reina Sofía', detail: '多件 Black Tide 作品' }]
      },
      {
        title: 'The Forgotten Space', cluster: '电影论文 / 海运物流 / 全球资本', period: '2010',
        summary: '与 Noël Burch 合作，把 Fish Story 的二十年海洋研究推进为电影，从 Bilbao、Rotterdam、Los Angeles 到 Hong Kong 追踪国际贸易和劳动关系。',
        actions: ['沿全球港口路线拍摄', '结合描述性纪录片', '使用档案研究与旧素材重剪', '采访港口和物流相关人物', '加入旁白、环境声与劳动者声音', '把摄影研究扩展为电影论文'],
        sourceUrl: 'https://www.museoreinasofia.es/en/activity/forgotten-space-film-essay-allan-sekula-and-noel-burch/', images: [],
        relations: [{ kind: '展览', label: 'Museo Reina Sofía screening / discussion', detail: '2011' }]
      }
    ],
    awards: [], exhibitions: ['Fish Story — international exhibition / book project, 1990s', 'The Forgotten Space — Museo Reina Sofía, 2011'],
    sources: [{ label: 'Museo Reina Sofía — Allan Sekula', url: 'https://www.museoreinasofia.es/en/collections/artist/sekula-allan' }, { label: 'Museo Reina Sofía — The Forgotten Space', url: 'https://www.museoreinasofia.es/en/activity/forgotten-space-film-essay-allan-sekula-and-noel-burch/' }]
  }
};
