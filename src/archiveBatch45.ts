import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

export const archiveBatch45: Record<string, ArtistArchive> = {
  'daido-moriyama': {
    artistId: 'daido-moriyama',
    projectCoverage: '8 个街头 / 印刷 / 摄影书方法节点已建立深档案 · 1968–现在',
    imageCoverage: '0 / 8 项目已有代表图像',
    note: '森山大道不能只被概括成“粗颗粒、高反差”。真正持续几十年的方法，是让小型相机、身体移动、街头快拍、翻拍、印刷网点、摄影书和反复再编辑一起工作。颗粒与失焦是这套生产链留下的结果，不是后期滤镜。',
    projects: [
      {
        title: 'Japan: A Photo Theater', cluster: 'street / magazine work / performance culture / photobook', period: '1968',
        summary: '第一本重要摄影书把战后街头、剧场、表演者和城市边缘混合起来。森山并不把街道当成清晰可解释的社会调查，而是以近距离、突然切入和不稳定构图建立身体性的城市观看。',
        actions: ['在街头与剧场环境中高频移动拍摄', '使用便携相机降低拍摄准备时间', '允许运动模糊、强烈裁切和曝光差异进入成片', '把不同场景按视觉冲击而非完整事件说明进行编辑', '与寺山修司文本共同进入摄影书结构'],
        sourceUrl: 'https://www.moriyamadaido.com/en/biography/publication/', images: [], relations: [rel('出版', 'Japan: A Photo Theater', '1968')]
      },
      {
        title: 'Provoke / are-bure-boke', cluster: 'magazine / rough-blurred-out-of-focus / anti-documentary language', period: '1968–1969',
        summary: '在 Provoke 语境中，粗粒子、晃动、失焦、倾斜和极端反差被系统化为反对“摄影可以透明传递现实”的语言。森山的工作因此从题材转向摄影本身怎样制造感知。',
        actions: ['快速移动中拍摄而不追求水平稳定', '接受焦点偏移和高颗粒负片', '在暗房 / 印刷中强化黑白反差', '通过杂志页面裁切再次改变原始画面', '让图像在连续页面里以节奏而非叙事因果连接'],
        sourceUrl: 'https://www.moriyamadaido.com/en/biography/', images: [], relations: []
      },
      {
        title: 'Farewell Photography', cluster: 'photobook / reproduction / image destruction / printing noise', period: '1972',
        summary: '《写真よさようなら》把“摄影失败”推到极端：已有照片、翻拍、印刷网点、污点、过曝和难以辨认的表面一起进入书中。作品不再承诺原始负片对应一个稳定现场，而让复制过程不断侵蚀图像。',
        actions: ['混合街头新拍、既有图像与翻拍材料', '主动接受极端曝光与失焦', '把印刷网点和复制噪点保留为画面结构', '在书页中使用高密度黑白和突然裁切', '让“原图—翻拍—印刷—再观看”的损耗链成为内容'],
        sourceUrl: 'https://www.moriyamadaido.com/en/biography/publication/', images: [], relations: [rel('出版', 'Farewell Photography', '1972')]
      },
      {
        title: 'Stray Dog / Misawa', cluster: 'street encounter / icon / circulation', period: '1971',
        summary: '著名的流浪犬图像来自一次快速街头遭遇，但它后来通过杂志、摄影书和展览反复被重印。重要的不只是“拍到一只狗”，而是一个偶然街头瞬间如何被复制系统制造成摄影史图标。',
        actions: ['街头即时发现并快速拍摄', '使用低视点与近距离把犬的身体压向画面', '保留粗颗粒与背景信息缺失', '在后续出版与展览中反复再编辑 / 再印', '让同一图像跨媒介不断获得新语境'],
        sourceUrl: 'https://www.moma.org/collection/works/52359', images: [], relations: [rel('收藏', 'MoMA', 'Stray Dog, Misawa')]
      },
      {
        title: 'Light & Shadow', cluster: 'return to photography / surfaces / high contrast', period: '1981–1982',
        summary: '经历创作危机后，森山通过日常物表面、广告、身体碎片和光影重新建立摄影动作。与早期城市叙事相比，这一阶段更接近“看见什么就拍什么”，让光线与表面本身重新成为启动摄影的理由。',
        actions: ['在日常行走中寻找高反差表面', '减少复杂叙事预设', '使用黑白快拍记录墙面、物件、身体和标志', '暗房中强化明暗边界', '通过系列编辑让无关对象因光影结构发生联系'],
        sourceUrl: 'https://www.moriyamadaido.com/en/biography/', images: [], relations: [rel('展览', 'Light & Shadow — Nagai Photo Salon', '1981'), rel('出版', 'Light & Shadow', '1982')]
      },
      {
        title: 'Record / Kiroku', cluster: 'serial publication / diary / continuous shooting', period: '1972–现在',
        summary: '《Record》不是一次性完成的系列，而是一套持续出版机制。摄影、旅行、街头片段不断被送入新的 issue；作品价值来自长期积累和重新排序，而不是每册都提出全新主题。',
        actions: ['持续随身拍摄城市与旅行片段', '定期从新旧底片中选择材料', '按 issue 形成短篇摄影序列', '允许旧图在后续册中重新出现', '让出版频率成为持续创作节奏的一部分'],
        sourceUrl: 'https://www.moriyamadaido.com/en/biography/publication/', images: [], relations: [rel('出版', 'Record', '1972–ongoing')]
      },
      {
        title: 'Printing Show / silkscreen circulation', cluster: 'printing / audience production / image circulation', period: '1974–',
        summary: '森山多次把摄影从固定版数作品转向现场印刷与丝网复制。图像可以被观众选择、印在纸张或其他载体上，强调摄影并不只存在于珍贵原作，也存在于大量复制和流通。',
        actions: ['从既有照片中建立可再印图像库', '将照片转换成适合丝网 / 印刷的高反差图版', '在现场允许图像被重复生产', '弱化唯一原作概念', '让观众选择和印刷行为进入作品生成'],
        sourceUrl: 'https://www.moriyamadaido.com/en/biography/solo-exhibition/', images: [], relations: [rel('展览', 'Daido Moriyama Printing Show', '1974')]
      },
      {
        title: 'Shinjuku / Tokyo ongoing', cluster: 'city as inexhaustible archive / digital-analogue continuity', period: '1990s–现在',
        summary: '新宿与东京不是被“完成”的项目，而是可无限返回的图像矿区。胶片、Polaroid、数码相机和不同印刷媒介可以替换，但核心动作保持一致：移动、遭遇、快拍、累积、再编辑。',
        actions: ['反复返回同一城区而不追求完整地图', '在不同年代切换胶片 / Polaroid / digital 设备', '以步行决定拍摄路线', '高频捕捉广告、身体、玻璃反射与街道碎片', '跨年代混编图像使城市时间折叠'],
        sourceUrl: 'https://www.moriyamadaido.com/en/biography/', images: [], relations: [rel('展览', 'Moriyama Daido’s Tokyo: Ongoing', 'Tokyo Photographic Art Museum 2020')]
      }
    ],
    awards: ['ICP Infinity Award — Lifetime Achievement 2012', 'Hasselblad Award 2019'],
    exhibitions: ['New Japanese Photography — MoMA 1974', 'Daido Tokyo — Fondation Cartier 2016', 'Moriyama Daido’s Tokyo: Ongoing — TOP Museum 2020'],
    sources: [
      { label: 'Daido Moriyama Photo Foundation', url: 'https://www.moriyamadaido.com/en/biography/' },
      { label: 'Publication chronology', url: 'https://www.moriyamadaido.com/en/biography/publication/' },
      { label: 'MoMA — Stray Dog', url: 'https://www.moma.org/collection/works/52359' }
    ]
  },

  'rinko-kawauchi': {
    artistId: 'rinko-kawauchi',
    projectCoverage: '8 个日常感知 / 地景 / sequence 节点已建立深档案 · 2001–2022',
    imageCoverage: '0 / 8 项目已有代表图像',
    note: '川内伦子的关键不是“柔和色调”。她长期把非常轻的日常图像通过摄影书 sequence 连接起来；后来又逐渐扩大尺度，用 4×5 相机、火山 / 野烧、冰川、影像和建筑式展览处理更长的自然时间。需要同时看拍摄距离和编辑结构。',
    projects: [
      {
        title: 'Utatane', cluster: 'everyday fragments / photobook / associative sequence', period: '2001',
        summary: '《うたたね》把水、食物、人体、动物、闪光、事故等极轻碎片放在同一书中。单张往往没有完整故事，意义主要来自相邻图片之间的颜色、形状和生命状态跳接。',
        actions: ['长期随身拍摄微小日常事件', '使用自然光与柔和色彩保持低戏剧性', '同时保留愉悦、死亡和突发事件', '按视觉 / 情绪关联而非时间顺序编辑', '通过跨页让无关对象建立形态呼应'],
        sourceUrl: 'https://rinkokawauchi.com/en/works/', images: [], relations: [rel('出版', 'Utatane', '2001')]
      },
      {
        title: 'Hanabi', cluster: 'festival / light / darkness / book rhythm', period: '2001',
        summary: '烟火并不是作为壮观事件被完整记录，而是与人群、黑暗和瞬时光点一起被拆成片段。它显示川内很早就把“明亮—熄灭”当作生命节奏而非单纯题材。',
        actions: ['在烟火环境中交替拍亮部与暗部', '避免只保留最大烟花瞬间', '加入观看者与周边碎片', '通过书页节奏重复出现光点与黑场'],
        sourceUrl: 'https://rinkokawauchi.com/en/works/', images: [], relations: [rel('出版', 'Hanabi', '2001')]
      },
      {
        title: 'Cui Cui', cluster: 'family / thirteen-year archive / life cycle', period: '1992–2005',
        summary: '长时间拍摄自己的家庭，把出生、成长、衰老、葬礼和普通日常放在一起。它不是一组“家庭肖像”，而是以十余年跨度让家庭生命周期自身成为编辑结构。',
        actions: ['多年持续拍摄同一家庭成员', '保留极普通饭桌 / 房间 / 身体细节', '不回避疾病、死亡和葬礼', '跨年份重新编辑材料', '用生命阶段而非事件新闻性建立节奏'],
        sourceUrl: 'https://rinkokawauchi.com/en/works/', images: [], relations: [rel('出版', 'Cui Cui', '2005')]
      },
      {
        title: 'Illuminance', cluster: 'ten-year image pool / light / non-linear sequence', period: '2009–2011',
        summary: '这一系列进一步把不同国家、不同时间拍摄的图像混合成无地点的感知流。水滴、婴儿、食物、伤口、光线和动物并列，书籍结构使“生命正在发生”成为核心，而不是地理记录。',
        actions: ['从多年拍摄中跨地点选择图像', '优先寻找光线、圆形、液体和皮肤等视觉回声', '压低地点说明', '通过双页与翻页制造突然的生死切换', '让同一系列可在书和展览中采用不同 sequence'],
        sourceUrl: 'https://rinkokawauchi.com/en/works/', images: [], relations: [rel('出版', 'Illuminance', '2011')]
      },
      {
        title: 'Light and Shadow', cluster: 'post-2011 disaster / slideshow / duality', period: '2011',
        summary: '2011 年东日本大地震后，她在石卷、女川、气仙沼、陆前高田一带行走时遇到一黑一白两只鸽子。系列没有直接制作灾难全景，而以光 / 暗、生命 / 死亡的并置回应灾后经验，并以 slideshow 呈现。',
        actions: ['在灾后地区移动与观察', '从直接灾难记录转向微小生命与环境迹象', '以黑 / 白、光 / 暗作为重复母题', '编辑为 slideshow 而非静态墙面组照'],
        sourceUrl: 'https://rinkokawauchi-me.exhibit.jp/en/works/', images: [], relations: []
      },
      {
        title: 'Ametsuchi', cluster: '4x5 film / controlled burn / prayer / deep time', period: '2013',
        summary: '在熊本阿苏使用 4×5 胶片相机拍摄传统野烧，并把以色列哭墙等与祈祷、献祭有关的图像纳入系列。相机速度变慢后，项目从“日常瞬间”扩展到土地与仪式的长期时间。',
        actions: ['研究并跟随阿苏野烧周期', '改用4×5 film camera进行慢速拍摄', '记录火焰、烧后地表和劳动过程', '加入祈祷 / 献祭相关地点形成跨文化关联', '以摄影书和展览重新组织自然时间'],
        sourceUrl: 'https://rinkokawauchi-me.exhibit.jp/en/works/', images: [], relations: [rel('出版', 'Ametsuchi', '2013')]
      },
      {
        title: 'Halo', cluster: 'ritual / flock / fire / darkness / poetic text', period: '2017',
        summary: '延续 Ametsuchi 对光、祈祷与自然现象的兴趣，但进一步强调黑暗、群鸟、火与仪式之间的关联。图像并不解释一个地点，而把多个母题编织成近似诗歌的结构。',
        actions: ['跨地点积累围绕群体移动 / 火 / 光的图像', '寻找自然形态的重复节奏', '强化暗部和夜间摄影', '用短诗 / 短文本而非说明性论文进入书中', '以非线性 sequence 连接多个文化场景'],
        sourceUrl: 'https://rinkokawauchi.com/en/video_works/308/', images: [], relations: [rel('出版', 'Halo', '2017')]
      },
      {
        title: 'M/E', cluster: 'glacier / pandemic everyday / installation / micro-macro scale', period: '2019–2022',
        summary: '从冰岛冰川、火山到北海道雪景，再到疫情期间家附近的家庭与生物，M/E 把宏大地质时间和微小日常放在同一结构。2022 大型个展进一步通过建筑式展陈和影像让 sequence 变成空间体验。',
        actions: ['2019起在冰岛、北海道等地拍摄冰川与寒地景观', '疫情期间持续拍摄家附近人物和生物', '以micro / macro并置压缩尺度差', '从多年档案中加入旧作建立十年回看', '与建筑师协作把摄影 / 影像组织成整体展览空间', '为展览与出版分别重新设计 sequence'],
        sourceUrl: 'https://rinkokawauchi-me.exhibit.jp/en/', images: [], relations: [rel('展览', 'M/E — Tokyo Opera City Art Gallery', '2022')]
      }
    ],
    awards: ['Kimura Ihei Photography Award 2002', 'ICP Infinity Award — Art 2009'],
    exhibitions: ['Illuminance / Ametsuchi — Tokyo Metropolitan Museum of Photography 2012', 'M/E — Tokyo Opera City 2022 / Shiga Museum of Art 2023'],
    sources: [
      { label: 'Rinko Kawauchi — Works', url: 'https://rinkokawauchi.com/en/works/' },
      { label: 'M/E exhibition', url: 'https://rinkokawauchi-me.exhibit.jp/en/' },
      { label: 'M/E works', url: 'https://rinkokawauchi-me.exhibit.jp/en/works/' }
    ]
  },

  'gauri-gill': {
    artistId: 'gauri-gill',
    projectCoverage: '8 个长期社群 / 合作摄影节点已建立深档案 · 1999–现在',
    imageCoverage: '0 / 8 项目已有代表图像',
    note: 'Gill 的核心不是“替农村社群拍照”，而是让长期返回、共同表演、儿童拍摄、Warli 绘画、纸浆面具和展览材料都改变摄影师单一作者的位置。不同项目中的“合作”程度也不同：有时她最终编辑，有时与另一位艺术家真正共同署名。',
    projects: [
      {
        title: 'Notes from the Desert', cluster: 'long-term archive / Rajasthan / return / multiple sub-series', period: '1999–现在',
        summary: '1999 年起反复访问拉贾斯坦西部边缘化乡村社群，逐渐形成由多个子系列组成的长期档案。摄影形式并不固定：既有直接肖像、共同摆拍、学校墙画、墓地，也包含由他人拍摄的底片。',
        actions: ['多年反复返回同一地区和朋友群体', '在长期关系中拍家庭、学校、迁徙、仪式和日常', '允许同一人物跨年份重复出现', '根据项目需要切换观察式 / staged / tent studio 等方式', '将大档案拆成独立子系列和书籍'],
        sourceUrl: 'https://gaurigill.com/works/', images: [], relations: [rel('展览', 'Notes from the Desert — Smithsonian National Museum of Asian Art', '2016')]
      },
      {
        title: 'Balika Mela', cluster: 'temporary studio / adolescent girls / self-fashioning', period: '2003–2010',
        summary: '在偏远农村女孩集会中搭建临时肖像工作室。参与者可以选择朋友、服装、姿势与简单道具，摄影因此成为年轻女性试验“我想怎样被看见”的共同表演。',
        actions: ['在集会现场搭建简易布景 / studio', '邀请女孩自行决定与谁合影', '让参与者选择姿势、衣服与道具', '以相对正式的肖像方式拍摄', '把完成照片带回 / 分享给参与者', '将临时照相馆习俗转成长期档案'],
        sourceUrl: 'https://gaurigill.com/books/', images: [], relations: [rel('出版', 'Balika Mela', 'photobook')]
      },
      {
        title: 'Birth Series / Jannat', cluster: 'intimate documentary / women / family relationship', period: '2000s–',
        summary: 'Notes from the Desert 内部也存在极亲密的观察式作品。分娩、家庭空间与长期朋友 Jannat 的生命变化依靠关系持续性获得，而不是一次进入后迅速完成报道。',
        actions: ['在长期友谊基础上进入私人家庭时刻', '使用轻量观察式摄影降低场面控制', '跨年份持续记录同一人物', '将极私密事件与普通日常并列', '避免把单一仪式变成异域奇观'],
        sourceUrl: 'https://gaurigill.com/works/', images: [], relations: []
      },
      {
        title: 'Ruined Rainbow', cluster: 'children photographs / failed negatives / re-authorship', period: '2010',
        summary: '项目来自村中儿童学习摄影时认为“拍坏”而丢弃的底片。多年后 Gill 重新发现这些曝光错误、漏光和偶然画面，并将它们重新编辑为系列，改变“失败照片”的作者与价值判断。',
        actions: ['让儿童自行使用相机拍摄村庄生活', '保留他们因漏光 / 错误而丢弃的底片', '多年后重新查看 contact sheets', '不修复技术错误而保留漏光和偶然曝光', '以新的编辑结构重新公开这些图像', '明确原始拍摄者来自儿童而非摄影师本人'],
        sourceUrl: 'https://gaurigill.com/works/', images: [], relations: []
      },
      {
        title: 'Fields of Sight', cluster: 'photograph + Warli drawing / co-authorship / landscape knowledge', period: '2013–现在',
        summary: 'Gill 与 Warli 艺术家 Rajesh Vangad 共同创作。Gill 先拍 Ganjad 地景，Vangad 再直接在黑白照片表面以 Warli 绘画补入神话、劳动、动物、历史与经验信息；两人共同决定最终图像。',
        actions: ['Gill 在 Ganjad 拍摄当地景观', '共同查看 contact sheets 并讨论相机遗漏的信息', 'Vangad 在摄影表面直接绘制 Warli 图像', '通过绘画补入看不见的故事 / 历史 / 路径', '双方共同决定构图与最终版本', '以共同作者身份出版 / 展示'],
        sourceUrl: 'https://gaurigill.com/books/', images: [], relations: [rel('出版', 'Fields of Sight — Edition Patrick Frey', '2022')]
      },
      {
        title: 'Acts of Appearance', cluster: 'papier-mâché masks / community performance / collaborative staging', period: '2015–现在',
        summary: '与 Kokna / Warli 社群的 papier-mâché 面具艺术家和数十位村民共同完成。传统 Bohada 神圣面具的工艺被用于制作“当代面具”——普通人、动物、日常物件——参与者戴着它们在真实村庄中执行普通劳动与生活动作。',
        actions: ['与当地 papier-mâché 艺术家共同讨论新面具题材', '由面具艺术家制作非传统日常角色', '邀请村民作为表演者', '在教室、街道、家庭、农田等真实环境中即兴构造情境', 'Gill 根据现场不断接受参与者 / 旁观者意见并调整画面', '最终由 Gill 完成摄影选择与编辑，同时明确面具作者身份'],
        sourceUrl: 'https://gaurigill.com/works/', images: [], relations: [rel('展览', 'Projects 108 — MoMA PS1', '2018'), rel('出版', 'Acts of Appearance — Edition Patrick Frey', '2022')]
      },
      {
        title: 'The Americans', cluster: 'diaspora / migration / domestic portrait / community network', period: '2000–2007',
        summary: '在美国拍印度侨民与移民家庭，不以“成功移民肖像”单线叙述，而让住宅、社区活动、工作和代际差异进入画面。她依靠熟人网络不断扩展拍摄对象。',
        actions: ['沿印度移民社群的人际网络寻找被摄者', '进入家庭、宗教和社区空间', '用环境肖像保留阶层 / 地域线索', '跨州持续拍摄多个家庭', '把私人内部空间与迁移身份并置'],
        sourceUrl: 'https://gaurigill.com/bio/', images: [], relations: []
      },
      {
        title: 'The Village on the Highway / farmers’ protest works', cluster: 'protest / temporary architecture / material installation', period: '2021–2025',
        summary: '围绕印度农民抗议形成的新工作延续她对 precarious communities 的长期关注。临时道路营地、厨房、植物种植和 communal food sharing 被拍下；展览又把抗议现场使用的材料带入画框 / 展场，使基础设施本身进入展示。',
        actions: ['进入长期占据道路的抗议营地', '记录临时住房、厨房、种植和共享食物系统', '关注维持生活的结构而不只拍口号 / 冲突', '保留现场使用的普通建材 / 物料', '在展览中用相关材料重新框定照片', '将影像档案与抗议现场的物质性连接'],
        sourceUrl: 'https://gaurigill.com/works/', images: [], relations: []
      }
    ],
    awards: ['Grange Prize 2011', 'Prix Pictet 2023'],
    exhibitions: ['Notes from the Desert — Smithsonian 2016', 'Projects 108: Gauri Gill — MoMA PS1 2018', 'Deutsche Börse Photography Foundation Prize exhibition 2024'],
    sources: [
      { label: 'Gauri Gill — Works', url: 'https://gaurigill.com/works/' },
      { label: 'Gauri Gill — Books', url: 'https://gaurigill.com/books/' },
      { label: 'Gauri Gill — Bio', url: 'https://gaurigill.com/bio/' }
    ]
  },

  'samuel-fosso': {
    artistId: 'samuel-fosso',
    projectCoverage: '7 个工作室自画像 / 历史角色节点已建立深档案 · 1974–2017',
    imageCoverage: '0 / 7 项目已有代表图像',
    note: 'Fosso 的工作不是简单“cosplay”。他从商业照相馆自拍开始，把同一身体逐步变成流行青年、政治领袖、祖辈角色、毛泽东、教宗和纯粹情绪容器。服装、背景、姿势、相机自拍机制与历史照片的再演共同构成方法。',
    projects: [
      {
        title: '70’s Lifestyle', cluster: 'commercial studio / private self-portrait / fashion performance', period: '1974–1978',
        summary: '13 岁在 Bangui 开商业照相馆后，Fosso 会在一天工作结束剩余胶片上给自己拍照，再把照片寄给在尼日利亚的祖母。服装和姿势吸收当时青年流行文化，使商业 studio 在夜间变成私人角色实验室。',
        actions: ['白天经营商业人像照相馆', '利用卷尾 / 剩余胶片进行自拍', '更换西装、喇叭裤、泳装等当代服饰', '在固定 studio backdrop 前设计姿势', '使用定时 / 自拍方式独立完成', '将照片寄给祖母并长期保存为私人档案'],
        sourceUrl: 'https://samuelfosso.com/', images: [], relations: []
      },
      {
        title: 'Tati', cluster: 'commission / archetype / consumer studio / role construction', period: '1997',
        summary: '为法国 Tati 百货相关项目制作一组高度表演化角色。与70年代自我时尚相比，这次角色更接近社会类型和公共形象，服装、道具与彩色背景共同把身体变成可识别的“人物模板”。',
        actions: ['根据不同社会角色选择服装和道具', '使用工作室彩色背景和商业肖像灯光', '通过表情 / 姿势快速建立角色身份', '由艺术家本人连续扮演多种人物', '保留商业广告式清晰度同时让身份显得夸张'],
        sourceUrl: 'https://samuelfosso.com/', images: [], relations: [rel('展览', 'Tati commission', '1997')]
      },
      {
        title: 'Mémoire d’un ami', cluster: 'mourning / self-performance / personal history', period: '2000',
        summary: 'Fosso 将自我表演从时尚角色转向哀悼和暴力记忆，以身体重新承担朋友死亡的经验。自拍不再只负责制造身份，而成为替无法再出现的人承担历史的方式。',
        actions: ['从个人失去经验建立角色状态', '减少戏剧性 costume', '通过身体姿势和表情制造哀悼', '保持工作室化控制让情绪不依赖新闻现场', '将个人记忆转换成可重复观看的肖像'],
        sourceUrl: 'https://samuelfosso.com/', images: [], relations: []
      },
      {
        title: 'Le rêve de mon grand-père', cluster: 'ancestry / masquerade / inherited identity', period: '2003',
        summary: '通过服装与造型召回祖辈和 Igbo 文化中表演 / masquerade 的继承关系。项目强调 Fosso 的角色扮演并不只来自西方时尚摄影，也与家庭和祖先表演传统有关。',
        actions: ['从祖辈记忆与 Igbo 传统提取服装线索', '在摄影棚重建仪式感造型', '由本人扮演祖辈 / 想象角色', '使用肖像正面性保持纪念碑感'],
        sourceUrl: 'https://samuelfosso.com/', images: [], relations: []
      },
      {
        title: 'African Spirits', cluster: 'historical reenactment / iconic photograph / Black political memory', period: '2008',
        summary: 'Fosso 精确重演 Angela Davis、Patrice Lumumba、Martin Luther King Jr.、Malcolm X 等黑人政治 / 文化人物的经典影像。不是简单模仿本人，而是模仿“他们已经被历史照片固定下来的样子”。',
        actions: ['研究广泛传播的历史人物肖像', '识别发型、眼镜、衣服和姿势等视觉符号', '制作 / 寻找对应 costume 与 props', '以大尺幅正式肖像灯光重演原图', '由同一身体连续进入不同历史角色', '把原始新闻 / 官方肖像转成自我表演摄影'],
        sourceUrl: 'https://www.moma.org/collection/works/214686', images: [], relations: [rel('收藏', 'MoMA', 'African Spirits works')]
      },
      {
        title: 'Emperor of Africa', cluster: 'Mao iconography / Africa-China politics / monumental persona', period: '2013',
        summary: 'Fosso 把自己变成毛泽东式领袖形象，通过制服、手势和宣传肖像语言处理非洲—中国关系与政治图像崇拜。角色的力量来自观众已经认识那套政治肖像代码。',
        actions: ['研究毛泽东官方 / 宣传肖像的姿势与服装', '制作领袖式制服与背景', '使用居中、纪念碑式构图', '通过手势和目光复制政治权威语法', '以系列而非单张测试同一形象的不同权力姿态'],
        sourceUrl: 'https://samuelfosso.com/', images: [], relations: []
      },
      {
        title: 'SIXSIXSIX / Black Pope', cluster: 'serial emotion / Polaroid / religious archetype', period: '2015–2017',
        summary: 'SIXSIXSIX 在巴黎工作室以统一背景连续制作 666 张大尺幅 Polaroid 自拍，每张只改变身体与表情；随后 Black Pope 又回到高度 costume 化的公共权力角色。两者一减一加，分别测试“没有角色”与“角色过强”时自画像如何工作。',
        actions: ['在小团队协助下搭建固定 Polaroid studio', '保持同一背景和机位', '连续制作666张不同身体 / 面部表达', '不用服装变化而只用表演差异建立图像', '之后在Black Pope中重新加入完整宗教服饰与权力姿势', '以极端重复和极端角色化形成方法对照'],
        sourceUrl: 'https://samuelfosso.com/', images: [], relations: [rel('出版', 'SIXSIXSIX — Steidl / The Walther Collection', '2020')]
      }
    ],
    awards: [],
    exhibitions: ['Samuel Fosso retrospective — Maison Européenne de la Photographie 2021–2022'],
    sources: [
      { label: 'Samuel Fosso Studio', url: 'https://samuelfosso.com/' },
      { label: 'MoMA — African Spirits', url: 'https://www.moma.org/collection/works/214686' },
      { label: 'The Walther Collection — SIXSIXSIX', url: 'https://www.walthercollection.com/en/collection/publications/samuel-fosso-sixsixsix' }
    ]
  },

  'ishiuchi-miyako': {
    artistId: 'ishiuchi-miyako',
    projectCoverage: '8 个城市表面 / 身体 / 遗物节点已建立深档案 · 1976–现在',
    imageCoverage: '0 / 8 项目已有代表图像',
    note: '石内都的长期线索可以很清楚地读成“表面如何保存时间”：早期是横须贺的墙、街道与旧建筑，随后转向同龄女性的手脚、身体伤痕，再转向母亲衣物、广岛遗物和 Frida Kahlo 用品。她始终通过非常近的表面摄影处理不可见历史。',
    projects: [
      {
        title: 'Yokosuka Story', cluster: 'postwar city / grain / monochrome / personal trauma', period: '1976–1977',
        summary: '成年后重新返回成长地横须贺，以粗颗粒黑白拍摄基地城市、旧街区、墙面和空间痕迹。她没有用“故乡纪实”的方式完整介绍城市，而是把个人排斥感与战后军事城市表面叠在一起。',
        actions: ['返回青年时期强烈排斥的横须贺', '步行进入旧街区和基地周边', '使用高颗粒黑白材料拍摄', '贴近墙面、门、地面和破损建筑', '压低说明性地标', '以高反差印相强化触觉表面'],
        sourceUrl: 'https://asia-archive.si.edu/exhibition/ishiuchi-miyako/', images: [], relations: []
      },
      {
        title: 'Apartment / Endless Night', cluster: 'interior trace / red-light district / disappearing architecture', period: '1970s–1980s',
        summary: '早期系列持续拍被拆除前的公寓、旧红灯区和室内残留。空房、污渍、磨损和建筑细节被作为曾经有人生活 / 工作过的物理证据。',
        actions: ['寻找即将消失的老旧建筑', '进入室内记录墙面、楼梯和生活磨损', '使用黑白高颗粒压低“建筑摄影”的清洁感', '以近距离细节替代全景说明', '在拆除前建立时间表面档案'],
        sourceUrl: 'https://gallery.shiseido.com/en/exhibition/1791/', images: [], relations: []
      },
      {
        title: '1·9·4·7', cluster: 'same-age women / hands and feet / body surface', period: '1987–1990',
        summary: '拍摄与自己同为 1947 年出生的女性的手和脚。去掉脸与姓名后，皱纹、指甲、血管、磨损成为年龄与劳动的替代肖像。',
        actions: ['寻找与自己同年出生的女性', '只记录职业等有限身份信息', '以近距离拍手、脚与皮肤表面', '排除完整脸部以降低传统肖像判断', '通过统一年龄建立可比较组照'],
        sourceUrl: 'https://www.sfmoma.org/artist/Miyako_Ishiuchi/', images: [], relations: []
      },
      {
        title: 'Scars', cluster: 'wound / close-up / body as photographic surface', period: '1991–2003',
        summary: '把手术、疾病与伤害留下的疤痕极近距离拍摄。石内把 scar 理解成身体上的过去痕迹，几乎等同于摄影自身“留下印记”的逻辑。',
        actions: ['邀请不同人物展示身体疤痕', '使用极近距离机位压低完整身体身份', '强化皮肤纹理与伤痕边界', '让不同伤痕以系列重复出现', '避免重演创伤事件本身，只记录留下的表面证据'],
        sourceUrl: 'https://www.sfmoma.org/artist/Miyako_Ishiuchi/', images: [], relations: []
      },
      {
        title: 'Mother’s 2000–2005: Traces of the Future', cluster: 'mother / belongings / posthumous portrait / scale', period: '2000–2005',
        summary: '母亲去世前后，石内从身体细节转向她留下的衣服、内衣、口红、鞋和照片。物件以不同尺寸、黑白与彩色被重新拍摄，使用痕迹成为“没有身体的肖像”。',
        actions: ['先拍母亲晚年身体和伤痕', '母亲去世后整理其个人用品', '选择直接接触身体的衣物 / 化妆品', '使用近距离光线记录磨损和残留', '在不同作品中改变放大尺度', '将物件从遗物变成可观看的身体替身'],
        sourceUrl: 'https://www.metmuseum.org/art/collection/search/789564', images: [], relations: [rel('展览', 'Japan Pavilion — Venice Biennale', '2005')]
      },
      {
        title: 'ひろしま / hiroshima', cluster: 'atomic-bomb belongings / lightbox / color / annual return', period: '2007–现在',
        summary: '持续拍 Hiroshima Peace Memorial Museum 收藏的原爆遇难者衣物与个人物件。她不拍爆炸地点，而在灯箱上展开连衣裙、衬衣等，让颜色、缝线、破损和使用者个性重新出现。',
        actions: ['每年持续进入博物馆遗物收藏', '从大量物件中选择保留身体形状 / 色彩的衣物', '在 light box 等均匀透光条件上展开', '以彩色近距离摄影保留纤维、烧痕与手工缝线', '避免复原爆炸现场', '通过多年累积建立个人物件档案'],
        sourceUrl: 'https://yokohama.art.museum/eng/exhibition/201712_ishiuchimiyako/', images: [], relations: []
      },
      {
        title: 'Silken Dreams / textile memory', cluster: 'meisen / clothing / modern Japanese women / textile history', period: '2012–',
        summary: '以 Meisen 等近代日本织物为对象，把衣服视为女性身体的“第二层皮肤”。图案、褪色、折痕与织物工业共同连接个人使用史和现代化历史。',
        actions: ['选择具有具体时代特征的旧织物 / kimono', '平铺或展开衣物', '使用近距离彩色摄影保留纤维结构', '将图案审美与穿着痕迹同时呈现', '按纺织史 / 身体记忆重新编辑'],
        sourceUrl: 'https://gallery.shiseido.com/en/exhibition/1791/', images: [], relations: []
      },
      {
        title: 'Frida is', cluster: 'Frida Kahlo belongings / commissioned archive / intimate object portrait', period: '2012–2016',
        summary: '受 Frida Kahlo Museum 邀请，在 Casa Azul 拍摄 Kahlo 的衣物、药品、假肢、化妆品与个人用品。她延续 Mother’s 方法，却面对一个从未亲自认识、已被全球图像神话化的人。',
        actions: ['进入 Casa Azul 未公开 / 典藏物件', '从大量名人遗物中选择直接触及身体的用品', '以中性背景 / 近距离方式拍摄', '保留磨损、污渍与身体适配痕迹', '避免重拍 Kahlo 著名肖像', '通过物件建立与公众神话不同的身体性肖像'],
        sourceUrl: 'https://gallery.shiseido.com/en/exhibition/1791/', images: [], relations: [rel('展览', 'Frida is — Shiseido Gallery', '2016')]
      }
    ],
    awards: ['Hasselblad Award 2014'],
    exhibitions: ['Japan Pavilion — Venice Biennale 2005', 'Postwar Shadows — J. Paul Getty Museum 2015', 'Grain and Image — Yokohama Museum of Art 2017–2018'],
    sources: [
      { label: 'Smithsonian — Ishiuchi Miyako', url: 'https://asia-archive.si.edu/exhibition/ishiuchi-miyako/' },
      { label: 'SFMOMA — Miyako Ishiuchi', url: 'https://www.sfmoma.org/artist/Miyako_Ishiuchi/' },
      { label: 'Yokohama Museum of Art — Grain and Image', url: 'https://yokohama.art.museum/eng/exhibition/201712_ishiuchimiyako/' }
    ]
  },

  'lieko-shiga': {
    artistId: 'lieko-shiga',
    projectCoverage: '7 个地方 / 仪式 / 社群图像节点已建立深档案 · 2002–2026',
    imageCoverage: '0 / 7 项目已有代表图像',
    note: '志贺理江子不能只以 Rasen Kaigan 概括。她从早期 Lilly / CANARY 的夜间实验，逐步进入北釜长期居住与社群关系，再把地方记忆、表演、强闪光、灾难和身体仪式扩展到 Blind Date、Human Spring 和近作。她的图像一直处在真实关系与高度人工场景之间。',
    projects: [
      {
        title: 'Lilly', cluster: 'early portrait / night / flash / fiction', period: '2002–2005',
        summary: '早期作品已经建立她后来持续使用的强人工光、夜间环境和不稳定人物关系。被摄者并非被动“记录”，而常在拍摄中进入带表演性的状态。',
        actions: ['在夜间 / 低照度环境工作', '使用强闪光把人物从环境中突然切出', '鼓励人物以非日常姿势面对相机', '接受过曝、色偏和背景黑化', '通过书籍 sequence 让肖像接近虚构叙事'],
        sourceUrl: 'https://www.liekoshiga.com/works', images: [], relations: [rel('出版', 'Lilly', '2007')]
      },
      {
        title: 'CANARY', cluster: 'travel / request-based image making / staged documentary', period: '2007',
        summary: 'CANARY 汇集多个地点完成的实验摄影。她常从与陌生人交流、接受请求或交换故事开始，再通过现场摆布、闪光与夜景把现实遭遇推向近似梦境的视觉。',
        actions: ['在旅行中与当地人物建立短期关系', '从对话 / 请求中寻找拍摄动作', '使用夜间闪光与长曝光改变现场光线', '让人物参与姿势 / 场景制造', '将不同国家图像按情绪 / 视觉而非地理分类编辑'],
        sourceUrl: 'https://www.liekoshiga.com/works', images: [], relations: [rel('出版', 'CANARY', '2007'), rel('奖项', 'Kimura Ihei Photography Award', '2008')]
      },
      {
        title: 'Rasen Kaigan / Spiral Coast', cluster: 'Kitakama / community / local myths / staged image', period: '2008–2012',
        summary: '移居宫城县北釜后长期参与当地生活，收集居民故事、地方地景和个人记忆，并把它们转成夜间表演、场景介入与强闪光照片。2011 海啸后，项目又不可避免地承载灾难前后的社区时间。',
        actions: ['移居北釜而不是短期驻留', '长期访问居民并收集地方故事 / 口述记忆', '建立地点地图与人物关系', '将故事转成可执行的摄影动作 / 表演', '在海岸、田地、住宅使用闪光和环境介入', '让真实居民参与高度人工的场景', '海啸后继续面对地点消失与记忆断裂', '最终以 album + notebook 双出版整理'],
        sourceUrl: 'https://www.liekoshiga.com/works', images: [], relations: [rel('展览', 'Lieko Shiga RASEN KAIGAN — Sendai Mediatheque', '2012'), rel('出版', 'RASEN KAIGAN album / notebook', '2013')]
      },
      {
        title: 'Blind Date', cluster: 'seeing / blindness / body / sculptural installation', period: '2009–2017',
        summary: '系列围绕观看、失明、身体接近和影像关系展开，并在 2017 MIMOCA 个展中成为大型空间项目。作品不是只靠平面摄影，而通过不同尺度和装置关系制造身体性观看。',
        actions: ['长期累积有关视线 / 遮挡 / 身体接触的照片', '利用闪光与黑暗制造视觉断裂', '放大部分照片至接近身体 / 建筑尺度', '在展场中控制图像高度与间距', '让观众移动成为读取 sequence 的条件'],
        sourceUrl: 'https://www.mimoca.jp/en/exhibitions/lieko-shiga-blind-date/', images: [], relations: [rel('展览', 'Lieko Shiga: Blind Date — MIMOCA', '2017'), rel('出版', 'Blind Date', '2017')]
      },
      {
        title: 'Human Spring', cluster: 'body / political atmosphere / performance / exhibition environment', period: '2019',
        summary: '在东京写真美术馆的大型个展中，身体、社会秩序、欲望与不稳定情绪被组织成更具压迫感的图像环境。她继续使用表演与现实人物，但作品从地方社群扩展到更广泛的人体 / 社会状态。',
        actions: ['与多位人物共同设计身体动作', '拍摄极端近距离 / 倒置 / 非日常姿势', '使用强闪光把皮肤从环境切离', '将照片以不同尺度铺展于展场', '通过展场路径制造接近 / 退后 / 被包围的身体感'],
        sourceUrl: 'https://www.liekoshiga.com/works', images: [], relations: [rel('展览', 'Human Spring — Tokyo Photographic Art Museum', '2019'), rel('出版', 'Human Spring', '2019')]
      },
      {
        title: 'Waiting for the Wind / Dialog in the Fog', cluster: 'post-disaster memory / fog / landscape / continued local work', period: '2023–2024',
        summary: '近作继续处理地方、看不见的关系和灾后时间。相比 Rasen Kaigan 的强烈闪光戏剧性，新的项目进一步把雾、等待和不可清晰识别的空间状态当作记忆结构。',
        actions: ['持续返回与地方记忆相关的地景', '在低能见度 / 雾等条件中拍摄', '降低单一人物叙事', '把不可见和等待作为画面条件', '通过展览 / 出版将旧地方经验与当前时间并置'],
        sourceUrl: 'https://www.liekoshiga.com/works', images: [], relations: []
      },
      {
        title: 'Nanumokanumo', cluster: 'new cycle / local cosmology / photography and philosophy', period: '2025–2026',
        summary: '官网列出的最新周期延续她将摄影与地方宇宙观、身体经验和关系哲学相连的方向。相比早期单纯“实验摄影”，她现在更明显把长期生活关系本身视为图像发生的条件。',
        actions: ['从长期地方关系和口述经验中生成拍摄问题', '继续在真实人物 / 地点与人工动作之间往返', '使用摄影、文本与展览构建关系网络', '让新作与过去北釜经验产生非线性回声'],
        sourceUrl: 'https://www.liekoshiga.com/works', images: [], relations: []
      }
    ],
    awards: ['Kimura Ihei Photography Award 2008', 'Prix Pictet Japan Award 2017', 'Tokyo Contemporary Art Award 2021', 'Takeshi Umehara Human Philosophy Award 2026'],
    exhibitions: ['RASEN KAIGAN — Sendai Mediatheque 2012', 'Ocean of Images: New Photography 2015 — MoMA', 'Blind Date — MIMOCA 2017', 'Human Spring — Tokyo Photographic Art Museum 2019'],
    sources: [
      { label: 'Lieko Shiga — Works', url: 'https://www.liekoshiga.com/works' },
      { label: 'Lieko Shiga — Biography', url: 'https://www.liekoshiga.com/biography' },
      { label: 'MoMA — Lieko Shiga', url: 'https://www.moma.org/artists/47214-lieko-shiga' }
    ]
  }
};