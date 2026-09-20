import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

export const archiveBatch49: Record<string, ArtistArchive> = {
  'alessandra-sanguinetti': {
    artistId: 'alessandra-sanguinetti',
    projectCoverage: '7 个长期合作 / 农村生命 / 成长与摄影书节点已建立深档案 · 1996–现在',
    imageCoverage: '0 / 7 项目已有代表图像',
    note: 'Sanguinetti 最值得研究的不是“童年感”或“乡村诗意”，而是她怎样把非常长的关系变成摄影结构。她会先长期进入真实生活，再和被摄者共同编排、借用道具和游戏，让纪实、表演、成长和时间无法被简单拆开。Guille 与 Belinda 不是一次拍摄的模特，而是持续二十多年的共同作者 / 合作者。',
    projects: [
      {
        title: 'On the Sixth Day', cluster: 'farm / animal perspective / low viewpoint / life-death cycle', period: '1996–2005',
        summary: '项目从阿根廷乡村农场开始。Sanguinetti 把家养动物当作主体而不是农业环境中的配角：鸡、猪、马、牛从出生、游戏、觅食直到死亡都被持续拍摄。很多画面接近地面，让人的身体只作为局部或压力进入。',
        actions: ['长期进入布宜诺斯艾利斯省乡村农场', '反复拍摄同一批家养动物和日常劳动', '降低机位靠近动物身体高度', '避免把动物只当田园风景装饰', '记录出生、饲养、疾病、死亡和屠宰之间的连续过程', '用彩色胶片保持泥土、皮毛和血肉的现实触感', '最终通过摄影书把单个事件组织成完整生命循环'],
        sourceUrl: 'https://store.magnumphotos.com/products/on-the-sixth-day', images: [],
        relations: [rel('出版', 'On the Sixth Day — Nazraeli Press', '2005')]
      },
      {
        title: 'The Adventures of Guille and Belinda — beginning', cluster: 'two cousins / collaboration / play / staging', period: '1999–2004',
        summary: '在拍摄农场动物时，她注意到住在附近的九岁表姐妹 Guillermina Aranciaga 与 Belinda Stutz。两人开始和摄影师一起创造场景：死亡、婚礼、成年、怀孕、家庭等未来角色常由女孩自己通过游戏先演出来。',
        actions: ['从既有农场关系中认识两位表姐妹', '长期返回而非安排一次肖像拍摄', '先观察两人的真实游戏和家庭生活', '让女孩主动提出想扮演的人物 / 情节', '共同寻找衣服、床单、花、动物和家中物件作为道具', '摄影师调整机位和画面但不完全接管角色', '把直接观察与共同编排的照片混入同一序列'],
        sourceUrl: 'https://www.henricartierbresson.org/en/expositions/alessandra-sanguinetti/', images: [], relations: []
      },
      {
        title: 'The Adventures of Guille and Belinda and the Enigmatic Meaning of Their Dreams', cluster: 'first book / childhood-adolescence / sequence', period: '1999–2010',
        summary: '最初五年的合作最终形成第一册摄影书。书不是按事件时间线简单排列，而在梦、游戏、死亡想象、姐妹关系和真实乡村劳动之间跳接，使“成长纪录”同时保持寓言性。',
        actions: ['从多年负片中反复编辑', '把明确 staged 图像与日常观察照片并置', '避免用文字替每个场景说明真假', '通过身体姿态、颜色和重复物件连接跨年份图像', '让童年对未来的想象与后来真实发生的成年生活互相照见', '以摄影书作为第一阶段关系的阶段性封存'],
        sourceUrl: 'https://www.henricartierbresson.org/en/rencontres/the-feuilletage-4-alessandra-sanguinetti-guillermina-aranciaga-and-belinda-stutz/', images: [],
        relations: [rel('出版', 'The Adventures of Guille and Belinda and the Enigmatic Meaning of Their Dreams', '2010')]
      },
      {
        title: 'The Illusion of an Everlasting Summer', cluster: 'adolescence-adulthood / return / motherhood / second volume', period: '2004–2020',
        summary: '摄影继续跟随两位表姐妹进入青春期、伴侣关系、婚姻与母职。童年时曾被表演的“成年角色”开始真实发生，因此旧照片里的游戏与新照片里的现实形成非常罕见的时间折返。',
        actions: ['持续跨国返回阿根廷拍摄两人生活', '不因成年后角色变化而重新更换“主题”', '记录伴侣、怀孕、孩子、家庭空间和乡村劳动', '保留被摄者对是否拍摄及如何出现的主动性', '重新调取童年图像与成年照片对照编辑', '让“曾经扮演过的未来”成为后续真实生活的视觉前史'],
        sourceUrl: 'https://www.henricartierbresson.org/en/rencontres/the-feuilletage-4-alessandra-sanguinetti-guillermina-aranciaga-and-belinda-stutz/', images: [],
        relations: [rel('出版', 'The Adventures of Guille and Belinda and the Illusion of an Everlasting Summer', 'MACK, 2020')]
      },
      {
        title: 'The Adventures of Guille and Belinda — living archive', cluster: 'ongoing project / 52 photographs / films / relationship as method', period: '1999–现在',
        summary: '2024 Fondation Henri Cartier-Bresson 展览将项目更新为 52 张照片与 3 部影片，明确说明这不是已经结束的“童年系列”，而是一套会随着三人关系继续变化的 living archive。',
        actions: ['持续保留和整理跨二十多年影像', '把早期未发表照片重新纳入新编辑', '增加 moving image 补充静态摄影无法覆盖的关系', '由 Guille、Belinda 与 Sanguinetti 共同回顾作品生成过程', '每次展览重新编辑而非固定唯一终版', '把作者—被摄者关系本身公开为项目内容'],
        sourceUrl: 'https://www.henricartierbresson.org/en/expositions/alessandra-sanguinetti/', images: [],
        relations: [rel('展览', 'The Adventures of Guille and Belinda — Fondation Henri Cartier-Bresson', '2024 · 52 photographs + 3 films'), rel('出版', 'Over Time: Conversations about Documents and Dreams — MACK', '2024')]
      },
      {
        title: 'Some Say Ice', cluster: 'Wisconsin / historical image memory / mortality / contemporary rural America', period: '2014–2022',
        summary: '项目转向 Wisconsin 的 Black River Falls。她童年时通过 Michael Lesy 的 Wisconsin Death Trip 首次意识到照片能够让死去的人重新“看回来”；成年后真正进入这个地方，以当代居民、动物、空房间和冬季景观回应旧影像留下的死亡意识。',
        actions: ['追踪童年影响她的摄影书对应真实地点', '从2014年开始多次返回 Black River Falls', '拍摄居民、动物、室内和冬季环境', '不直接复制 Wisconsin Death Trip 的历史照片', '通过空房、死亡动物和人物凝视保留历史照片造成的心理回声', '以多年累积形成一个当代但难以确定年代的农村世界', '编辑为独立摄影书与展览'],
        sourceUrl: 'https://www.magnumphotos.com/arts-culture/some-say-ice-at-the-magnum-gallery-in-paris/', images: [],
        relations: [rel('出版', 'Some Say Ice — Delpire & Co', '2022'), rel('展览', 'Some Say Ice — Magnum Gallery Paris', '2023–2024')]
      },
      {
        title: 'Long-term collaboration as documentary method', cluster: 'meta-method / consent / co-authorship / time', period: '1999–现在',
        summary: '她的核心方法可以单独抽出来：纪实不是“等真实发生”，编排也不是“替别人演戏”。关系先持续足够久，摄影师与被摄者才共同决定什么时候观察、什么时候表演、什么时候不拍。时间因此不是背景，而是摄影生产条件。',
        actions: ['把重复返回作为项目基本单位', '允许被摄者提出角色、场景和拒绝', '不按新闻节点强迫生产图片', '让 staged 与 unstaged 共存且不做真假等级', '保留旧照片供后续年份重新理解', '将摄影书 / 展览作为阶段性编辑而非项目终点'],
        sourceUrl: 'https://www.henricartierbresson.org/en/publications/alessandra-sanguinetti-over-time-conversations-about-documents-and-dreams/', images: [], relations: []
      }
    ],
    awards: ['Guggenheim Foundation Fellowship', 'Hasselblad Foundation grant', 'Rencontres d’Arles Discovery Award'],
    exhibitions: ['The Adventures of Guille and Belinda — Rencontres d’Arles 2006', 'Le BAL Paris 2011', 'Fondation Henri Cartier-Bresson 2024', 'Some Say Ice — Magnum Gallery Paris 2023–2024'],
    sources: [
      { label: 'Fondation Henri Cartier-Bresson — The Adventures of Guille and Belinda', url: 'https://www.henricartierbresson.org/en/expositions/alessandra-sanguinetti/' },
      { label: 'Magnum — On the Sixth Day', url: 'https://store.magnumphotos.com/products/on-the-sixth-day' },
      { label: 'Magnum — Some Say Ice', url: 'https://www.magnumphotos.com/arts-culture/some-say-ice-at-the-magnum-gallery-in-paris/' }
    ]
  },

  'manit-sriwanichpoom': {
    artistId: 'manit-sriwanichpoom',
    projectCoverage: '7 个 Pink Man / 历史档案 / 政治摄影节点已建立深档案 · 1997–现在',
    imageCoverage: '0 / 7 项目已有代表图像',
    note: 'Manit 的关键不是“一个粉色胖男人反复出现”。Pink Man 是一个可以像检测探针一样被放入不同政治、消费和历史图像中的角色机制。Sompong Thawee 的身体、粉色西装和购物车保持相对稳定，而背景语境不断变化，因此同一个角色可以检测金融危机、消费主义、历史失忆和国家叙事。',
    projects: [
      {
        title: 'Pink Man Begins', cluster: 'performance / Bangkok / consumerism / pre-crisis city', period: '1997',
        summary: 'Pink Man 最初在亚洲金融危机前夕的曼谷出现。Sompong Thawee 穿刺眼粉色西装、推同色购物车，在商业区进行表演。作品发生在泰铢浮动和金融危机爆发前约两个月，因此消费繁荣与即将崩溃的经济现实同时存在。',
        actions: ['与表演者 Sompong Thawee 建立固定角色', '确定粉色西装与粉色购物车作为重复视觉标记', '把角色带入曼谷商业 / 金融区真实空间', '以摄影和录像同时记录行为', '保留路人和城市现场反应', '让角色不解释自身身份，只以夸张消费姿态行动'],
        sourceUrl: 'https://www.bacc.or.th/upload/RIFTS_Caption_B8_final.pdf', images: [], relations: []
      },
      {
        title: 'Pink Man', cluster: 'serial character / shopping cart / globalization / social satire', period: '1997–',
        summary: '角色随后成为长期系列。Pink Man 以近乎不变的服装和购物车进入商场、城市、宗教和公共空间，让“粉色”从时尚颜色变成一种过度消费、暴发户趣味和全球资本的可移动符号。',
        actions: ['保持同一角色造型跨年份重复', '根据新社会议题选择不同场所', '让购物车作为消费行为的固定道具', '现场表演后再从摄影中选择最能显出语境冲突的画面', '在照片、video 和 installation 之间切换呈现'],
        sourceUrl: 'https://www.bacc.or.th/en/events/61200', images: [], relations: [rel('展览', 'Pink Man Story — Bangkok Art and Culture Centre', '2021')]
      },
      {
        title: 'Horror in Pink', cluster: 'press archive / digital insertion / political violence / collective amnesia', period: '2001',
        summary: 'Manit 从泰国政治暴力历史的新闻照片出发，把 Pink Man 和购物车数字插入旧黑白事件图像。消费角色因此像穿越到 1973、1976、1992 等政治记忆中，故意制造“现在的消费失忆”与过去死亡现场之间的伦理冲突。',
        actions: ['搜集国家暴力 / 民主运动历史新闻照片', '核对事件时间和新闻来源', '保留原始黑白新闻图像的证据感', '重新拍摄 / 提取 Pink Man 表演姿态', '通过数字合成将粉色人物插入历史现场', '故意保留鲜艳粉色与黑白档案的视觉不协调', '以系列方式重新触发被压低的历史记忆'],
        sourceUrl: 'https://artsandculture.google.com/asset/horror-in-pink-manit-sriwanichpoom/_AGwIMUJW8l9zA?hl=en', images: [], relations: []
      },
      {
        title: 'Pink Man Opera', cluster: 'proverb / staged tableau / Thai social allegory', period: '2009',
        summary: 'Pink Man Opera 把角色进一步放进类似舞台剧 / 寓言的 tableaux，用泰国谚语、象征动作和夸张姿势制造社会评论。角色从街头 intervention 转为更明确的剧场化图像。',
        actions: ['从泰国谚语和社会寓言提取场景', '预先设计 Pink Man 的身体动作', '使用固定粉色服装维持系列识别', '将人物与象征性道具组织成舞台式 tableau', '输出为 Lambda / pigment prints', '让标题中的谚语与画面形成第二层解释'],
        sourceUrl: 'https://www.bacc.or.th/upload/Artmove_E-Catalogue%202P%20for%20website.pdf', images: [], relations: []
      },
      {
        title: 'Political memory outside Pink Man', cluster: 'documentary archive / counter-history / Thai politics', period: '2000s–',
        summary: '他的政治摄影并不完全依赖 Pink Man。长期对泰国政治事件、媒体图像与历史叙事的关注，使档案、纪实和再表演经常互相切换；Pink Man 只是其中最可见的一套机制。',
        actions: ['持续保存政治新闻与历史图像', '区分国家官方叙事与民间记忆', '根据项目决定直接纪实还是再加工档案', '把摄影作为 counter-memory 而非只作为事件报道', '在展览中将不同年代作品并置形成历史连续性'],
        sourceUrl: 'https://www.asianarthistories.com/site/history-and-memory-in-thai-contemporary-art/', images: [], relations: []
      },
      {
        title: 'Pink Man as reusable protocol', cluster: 'meta-method / fixed avatar / changing context', period: '1997–现在',
        summary: '如果把 Pink Man 当成方法而不是角色，结构很清楚：固定 avatar + 固定色彩 + 固定消费道具，再不断改变社会语境。这样艺术家不需要每次重新发明视觉风格，意义由角色与新背景的碰撞生成。',
        actions: ['锁定角色视觉规范', '只改变地点 / 事件 / 历史背景', '用重复制造观众记忆', '让新作品自动携带旧作品历史', '通过同一角色比较不同政治阶段', '把角色延伸到摄影、video、performance、installation'],
        sourceUrl: 'https://www.bacc.or.th/en/events/61200', images: [], relations: []
      },
      {
        title: 'Institutional circulation and collection', cluster: 'Southeast Asian contemporary photography / museum circulation', period: '2000s–现在',
        summary: 'Pink Man 已从泰国本地政治讽刺进入国际当代艺术和摄影收藏体系。作品被多家亚洲、欧洲和澳大利亚机构收藏，说明其阅读已从地方消费批判扩展到全球化、政治记忆和角色摄影。',
        actions: ['持续重编不同 Pink Man 系列进入回顾展', '以 editions 方式进入摄影收藏体系', '通过跨媒介展览保持 performance 原始语境', '在国际展览中补充泰国政治史背景而不改变角色核心'],
        sourceUrl: 'https://www.bacc.or.th/wp-content/uploads/2025/10/BACC-GALA-2026-Borderless_E-Catalogue__.pdf', images: [], relations: []
      }
    ],
    awards: ['Higashikawa Overseas Photographer Prize 2007', 'Chevalier de l’Ordre des Arts et des Lettres 2014'],
    exhibitions: ['Pink Man Story — BACC 2021', 'Horror in Pink — international exhibitions including Chennai Photo Biennale context'],
    sources: [
      { label: 'BACC — Pink Man Story', url: 'https://www.bacc.or.th/en/events/61200' },
      { label: 'BACC — Pink Man Begins', url: 'https://www.bacc.or.th/upload/RIFTS_Caption_B8_final.pdf' },
      { label: 'Google Arts & Culture — Horror in Pink', url: 'https://artsandculture.google.com/asset/horror-in-pink-manit-sriwanichpoom/_AGwIMUJW8l9zA?hl=en' }
    ]
  },

  'zhang-kechun': {
    artistId: 'zhang-kechun',
    projectCoverage: '6 个黄河 / 山水 / 中国基础设施景观节点已建立深档案 · 2010s–现在',
    imageCoverage: '0 / 6 项目已有代表图像',
    note: '张克纯的照片最容易被误读成“淡色中国风景”。真正的方法是长期移动 + 4×5 大画幅 + 很远的观看距离 + 极小人物尺度。他借用了传统山水中“人在天地中非常小”的空间关系，却把水坝、矿山、污染、旅游设施、房地产和普通生活塞进同一结构，因此古典山水比例变成观察现代中国的工具。',
    projects: [
      {
        title: 'The Yellow River — field journey', cluster: 'Yellow River / long-distance travel / large-format / modernization', period: '2010s–2014',
        summary: '项目沿黄河流域长期移动完成。张克纯以河流作为地理骨架，在不同省份拍摄工业设施、建设、污染、旅游、宗教活动和普通居民，使“母亲河”既是文化符号也是现代化基础设施现场。',
        actions: ['以黄河流域作为路线而非单一城市', '长期跨省旅行和重复返回', '携带4×5大画幅相机', '寻找能同时容纳自然地貌与人造设施的远距离机位', '让人物保持极小但可辨认', '等待人物动作进入预先选好的空间结构', '用低饱和 / 淡色输出压低戏剧性', '把跨地点图像编辑成同一条河流社会切片'],
        sourceUrl: 'https://www.lensculture.com/articles/zhang-kechun-the-yellow-river', images: [],
        relations: [rel('奖项', 'Les Rencontres d’Arles Discovery Award', '2014')]
      },
      {
        title: 'The Yellow River — scale as narrative', cluster: 'tiny human / monumental landscape / infrastructure', period: '2010s–',
        summary: '很多照片最关键的不是“景观很大”，而是人物与工程尺度被精确放在一起：游泳者、游客、工人、钓鱼者与堤坝、矿山、桥梁、泥滩同框。社会信息直接通过比例出现。',
        actions: ['先寻找具有明显尺度差的地形 / 工程', '将相机拉远避免人物成为传统肖像主体', '等待一两个普通人进入结构性位置', '避免夸张广角造成视觉奇观', '通过大画幅细节确保远处人物仍能被发现', '在组照中交替安排无人景观与有人景观'],
        sourceUrl: 'https://www.fondationfrancoisschneider.org/en/oeuvres/the-yellow-river-en/', images: [], relations: []
      },
      {
        title: 'Between the Mountains and Water', cluster: 'nationwide travel / shanshui / contemporary China', period: '2013–现在',
        summary: '第二阶段从单一黄河路线扩展到全国山水。项目持续十余年旅行，重点不再是河流地理，而是传统“山水”观看如何与当代中国的旅游、工业、道路、采矿和城市扩张发生碰撞。',
        actions: ['从黄河路线扩展为全国长期旅行', '寻找仍与山 / 水共同生活的人', '沿用大画幅与远距离构图', '把矿山、道路、旅游设施和宗教造像纳入传统山水视野', '保持人物 / 建筑在巨大自然形态中的小尺度', '跨十年持续增加新图而不封闭项目'],
        sourceUrl: 'https://www.lagalerie.hk/zhang-kechun', images: [],
        relations: [rel('奖项', 'Magnum Photography Awards — Fine Art Finalist', '2017')]
      },
      {
        title: 'Subject-participation / exchanged shutter', cluster: 'photographer inside landscape / shared authorship / self-position', period: '2010s–',
        summary: '在部分拍摄中，他会和被摄者交换位置，让对方替他按下快门，自己进入画面。动作并非自拍噱头，而是把摄影师从不可见观察者变成同样处在巨大山水中的普通人。',
        actions: ['先与现场人物交流', '固定好大画幅相机与构图', '向被摄者说明快门操作', '与对方交换镜头前后位置', '让摄影师自己进入原本为他人预留的尺度位置', '保留共同按快门带来的偶然性'],
        sourceUrl: 'https://www.lensculture.com/articles/zhang-kechun-between-the-mountains-and-water', images: [], relations: []
      },
      {
        title: 'Landscape supply / transplanted nature', cluster: 'urban landscaping / trees-rocks / construction economy', period: '2010s–2020s',
        summary: '后续作品把视线放到中国城市建设对树木、山石和景观材料的大量需求。自然不只是被破坏，也被挖走、运输、重新配置成城市“自然景观”，使山水成为供应链。',
        actions: ['调查四川、江苏、浙江、广东等 landscaping supply centres', '拍摄被移植 / 堆放 / 运输的树木与石材', '继续以远距离和大画幅处理', '把自然物与卡车、道路、工地同时放入画面', '通过系列比较“自然景观”与“被商品化的自然材料”'],
        sourceUrl: 'https://www.lagalerie.hk/zhang-kechun', images: [], relations: []
      },
      {
        title: 'Large-format restraint as method', cluster: 'meta-method / 4×5 / pale palette / slow observation', period: '2010s–现在',
        summary: '他的视觉一致性来自一套工作方式而非滤镜：4×5 相机迫使拍摄变慢；远距离压低现场冲突；淡色调降低新闻摄影的戏剧高潮。结果让污染、开发和荒诞日常以“看起来几乎平静”的方式出现。',
        actions: ['使用4×5 large-format camera', '优先选择远 / 中远景而非贴身纪实', '三脚架构图后等待细小事件发生', '保留阴霾、雾和低对比空气', '后期避免高饱和和强 HDR', '以大尺寸打印保留远处信息', '通过冷静视觉让观众自己发现社会冲突'],
        sourceUrl: 'https://nasher.duke.edu/stories/second-nature-inhumane-geographies-artist-bios/', images: [], relations: []
      }
    ],
    awards: ['Daylight Photo Award 2014', 'Les Rencontres d’Arles Discovery Award 2014', 'Magnum Photography Awards Fine Art Finalist 2017'],
    exhibitions: ['Rencontres d’Arles 2014', 'Photoquai Paris', 'Beijing Photo Biennale', 'Between the Mountains and Water — La Galerie'],
    sources: [
      { label: 'La Galerie — Zhang Kechun', url: 'https://www.lagalerie.hk/zhang-kechun' },
      { label: 'LensCulture — The Yellow River', url: 'https://www.lensculture.com/articles/zhang-kechun-the-yellow-river' },
      { label: 'LensCulture — Between the Mountains and Water', url: 'https://www.lensculture.com/articles/zhang-kechun-between-the-mountains-and-water' }
    ]
  },

  'birdhead': {
    artistId: 'birdhead',
    projectCoverage: '7 个快照积累 / 照片矩阵 / 手工装裱 / 空间化节点已建立深档案 · 2004–2025',
    imageCoverage: '0 / 7 项目已有代表图像',
    note: '鸟头的核心不是“上海快照很多”，而是把拍摄、积累、重新分类、手工装裱、矩阵、拼贴、书和场景设计连成一个不断更新的图像生态。单张照片通常不承担完整意义；真正的作品发生在数量、重复、邻接关系和展场结构中。',
    projects: [
      {
        title: 'Welcome to Birdhead World', cluster: 'snapshot accumulation / Shanghai / collective practice', period: '2004–2005',
        summary: '宋涛与季炜煜在2004年组成 Birdhead 后，以高频率拍摄上海、朋友、街道、身体、夜生活与非常普通的瞬间。最早的“Birdhead World”就把个人生活和城市经验混成一个持续增长的摄影池。',
        actions: ['两人都长期携带相机高频拍摄', '不先为单张图片设主题', '把朋友、街道、室内、身体和偶然事件放入同一图像池', '定期把新旧底片 / 数码文件混合重新编辑', '以大量图片而非少数hero image构成展览', '把双人作者身份弱化为共同数据库'],
        sourceUrl: 'https://www.birdheadart.com/', images: [],
        relations: [rel('展览', 'Welcome to Bird Head World — ShanghART H-Space', '2005')]
      },
      {
        title: 'Birdhead 2006+2007 / early matrices', cluster: 'photo matrix / dense wall / non-linear sequence', period: '2006–2007',
        summary: '早期展览已经开始把照片从单张墙面作品转成密集矩阵。观看者无法按一本书的线性顺序阅读，而是在几十 / 上百张图之间自己建立连接。',
        actions: ['从海量日常图像中选择不同尺度和节奏的照片', '取消传统等距单张展陈', '以矩阵 / 群落方式把图片压到同一墙面', '允许不同年份照片相邻', '利用重复人物 / 地点 / 手势形成非线性链接', '根据展场墙面重新计算整体矩阵'],
        sourceUrl: 'https://www.birdheadart.com/en/%E7%AE%80%E5%8E%86', images: [], relations: []
      },
      {
        title: 'New Village / Xin Cun', cluster: 'residency / temporary place / local image database', period: '2011–2012',
        summary: '在驻留和异地项目中，Birdhead 把原本针对上海的高频快照方法移植到临时生活环境。重点不是做传统“某地纪实”，而是测试 Birdhead 的图像生产机制进入一个新地点后会生成怎样的局部世界。',
        actions: ['在驻留期间保持日常高频拍摄', '把临时居住空间和当地街道纳入同一图像池', '不追求完整地方志', '持续混入两位作者的不同观看', '用矩阵 / 书 / 墙面重新生成临时“Birdhead World”'],
        sourceUrl: 'https://www.birdheadart.com/en/%E7%AE%80%E5%8E%86', images: [],
        relations: [rel('展览', 'Birdhead: New Village — EX3 Florence', '2011'), rel('展览', 'Xin Cun — Swatch Art Peace Hotel', '2012')]
      },
      {
        title: 'Welcome to Birdhead World Again', cluster: 'self-renewing exhibition system / photo matrix / collage / mounting', period: '2010s–现在',
        summary: '“Welcome to Birdhead World Again”并不是一场展览标题重复使用，而是一套可以不断更新的展示系统。每到新地点，旧照片、新照片、矩阵、拼贴和特殊装裱都会根据空间重新组合。',
        actions: ['把既有图像库与最新拍摄混合', '根据建筑尺度决定矩阵密度', '同时使用单张、拼贴、密集照片墙与特殊框架', '允许同一照片在不同展览获得不同邻接关系', '把展场设计视为重新编辑摄影数据库', '每次展览都生成新版本而非复制巡展'],
        sourceUrl: 'https://www.birdheadart.com/en', images: [],
        relations: [rel('展览', 'Welcome to Birdhead World Again — multiple cities', '2010s–2025')]
      },
      {
        title: 'Hand mounting / material frame systems', cluster: 'mounting / craftsmanship / photo-object / Chinese visual references', period: '2010s–',
        summary: '鸟头逐渐强化照片的物件属性，使用特殊装裱、手工框架和材料系统。摄影不是印出来以后才“找框”，框、边界和组合方式在展览前就参与图像意义。',
        actions: ['为不同照片设计非标准装裱', '把手工框、照片边缘和墙面关系作为整体构图', '混合传统视觉 / 工艺引用与当代快照', '通过框架改变观看距离和单张权重', '把装裱从保护结构变成图像的一部分'],
        sourceUrl: 'https://www.shanghartgallery.com/galleryarchive/artists/name/birdhead', images: [], relations: []
      },
      {
        title: 'MoMA New Photography / international circulation', cluster: 'photography institution / expanded photography / installation', period: '2011–2013',
        summary: '进入 Venice Biennale、MoMA New Photography 2012 和 Hugo Boss Asia Art Award finalist 语境后，Birdhead 被放进“摄影如何从单张图像扩展成空间系统”的国际讨论中，而不是只作为中国城市快照组合。',
        actions: ['把高密度矩阵适配国际机构展场', '在英文语境中保留“Birdhead World”整体结构', '让 installation property 与单张摄影同等重要', '通过大型群展比较不同摄影扩展方式'],
        sourceUrl: 'https://www.birdheadart.com/en/%E7%AE%80%E5%8E%86', images: [],
        relations: [rel('展览', '54th Venice Biennale — ILLUMInations', '2011'), rel('展览', 'New Photography 2012 — MoMA', '2012'), rel('奖项', 'Hugo Boss Asia Art Award finalist', '2013')]
      },
      {
        title: 'Recent Birdhead World — scene design and evolving image ecology', cluster: '2024 exhibitions / scene design / self-updating archive', period: '2024–2025',
        summary: '2024 Kyoto 与“云云”等近期展览继续强调场景设计。此时作品已经不是把照片挂进现成 white cube，而是连观看路径、墙面密度、框架与空间节奏一起设计，使十多年累积的图像成为可进入的环境。',
        actions: ['从二十年图像库重新选择历史照片', '加入最新拍摄形成跨年代并置', '与策展 / 场景设计协作重新规划空间', '控制观看路径中的密—疏节奏', '允许照片矩阵、独立框、文本和装置同时存在', '通过每次重新安装继续改变档案内部关系'],
        sourceUrl: 'https://www.birdheadart.com/', images: [],
        relations: [rel('展览', 'Welcome to Birdhead World Again — KYOTOGRAPHIE', '2024'), rel('展览', 'Birdhead: 云云 — UCCA Dune', '2024')]
      }
    ],
    awards: ['Hugo Boss Asia Art Award finalist 2013'],
    exhibitions: ['54th Venice Biennale 2011', 'MoMA New Photography 2012', '9th Shanghai Biennale 2012', 'Living Cities — Tate Modern 2017', 'Diriyah Biennale 2021', 'KYOTOGRAPHIE 2024'],
    sources: [
      { label: 'Birdhead Studio', url: 'https://www.birdheadart.com/en' },
      { label: 'Birdhead — Biography / exhibitions', url: 'https://www.birdheadart.com/en/%E7%AE%80%E5%8E%86' },
      { label: 'ShanghART — Birdhead', url: 'https://www.shanghartgallery.com/galleryarchive/artists/name/birdhead' }
    ]
  }
};