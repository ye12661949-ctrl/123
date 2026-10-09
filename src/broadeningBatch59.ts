import type { Artist } from './data';

// Source audit: research/updates/2026-10-09-broadening59.md
export const broadeningBatch59: Artist[] = [
  {
    id: 'michael-schmidt', name: 'Michael Schmidt', born: '1945–2014', base: 'Berlin, Germany',
    intro: '德国摄影艺术家，以长周期项目、克制的黑白与彩色摄影和精确序列研究战后德国社会。他在 Lebensmittel 中进入面包厂、鱼类养殖场、屠宰和包装等食品生产节点，把标准化食物、机械、劳动空间与自然残片编成没有英雄中心的供应链图谱。',
    methods: ['长期项目研究', '食品供应链田野', '黑白与彩色摄影并置', '图像配对与序列编辑', '摄影书和展览分别编排'],
    subjects: ['industrial food', 'mass consumption', 'agriculture', 'standardisation', 'labour and machinery', 'nature and commodity'],
    outputs: ['摄影系列', '摄影书', '展览序列', '黑白摄影', '彩色摄影'],
    institutions: ['Prix Pictet', 'Museum of Modern Art New York', '55th Venice Biennale', 'Berlin Biennale', 'New Museum', 'Fotomuseum Winterthur'],
    achievements: ['Prix Pictet Consumption winner 2014', '55th Venice Biennale participant 2013', 'major presentation at Martin-Gropius-Bau Berlin'],
    whyImportant: '关注理由：Schmidt 不用广告、购物者或垃圾直接说明消费，而追踪食物变成标准化商品之前的工业基础设施。他提出相邻两张图像会生成第三张“不可见图像”，因此批评不在单张奇观，而在面包、鱼、机器、身体和包装的关系中发生；若拆散序列，作品容易被误读为中性的工厂摄影。',
    projects: [{ year: '2006–2010', title: 'Lebensmittel', type: '以生产节点与图像序列研究工业食品体系的摄影项目', facts: ['艺术家在四年间拍摄面包篮、鱼类养殖网箱、苹果清洗设备及其他食品生产、处理与包装环节。', '系列同时使用黑白和彩色图像，并通过成对、重复和中断的编辑，让客观记录与主观判断保持张力。', 'Schmidt 将展览墙面与摄影书视为两种不同的序列空间，并以“一加一等于三”概括相邻图像生成第三种心理图像的方式。'], reading: '解读：食品不是孤立静物，而是被设备、分类和尺度不断重写的工业对象。序列把消费的上游结构变得可见，同时拒绝用单张灾难图像替观众下结论；这种克制要求观看者主动在图像之间建立因果。' }],
    images: [], sourceLabel: 'Prix Pictet — Michael Schmidt: Lebensmittel', sourceUrl: 'https://prix.pictet.com/cycles/consumption/michael-schmidt'
  },
  {
    id: 'adam-bartos', name: 'Adam Bartos', born: '1953', base: 'New York, United States',
    intro: '美国摄影师，以清晰、安静的彩色观察日常物件和被忽视的社会空间。他把院子旧货摊上的延长线、车轮、床垫、玩具与工具逐件框取，将这种家庭尺度的转售视为物品寿命的延长机制，也让地方循环与全球零售、廉价生产和运输体系形成对照。',
    methods: ['日常物件观察', '彩色静物式取景', '地方旧货市场田野', '物件分类与序列', '循环使用与全球零售对照'],
    subjects: ['yard sales', 'reuse', 'household objects', 'overconsumption', 'local economies', 'global retail'],
    outputs: ['彩色摄影', '摄影书', '物件系列', '博物馆收藏', '展览'],
    institutions: ['Prix Pictet', 'Museum of Modern Art New York', 'Whitney Museum of American Art', 'SFMOMA', 'J. Paul Getty Museum', 'Stedelijk Museum Amsterdam'],
    achievements: ['Prix Pictet Consumption shortlist 2014', 'Yard Sale Photographs published by Damiani 2009', 'German Photobook Awards Gold for Darkroom 2013'],
    whyImportant: '关注理由：Bartos 把不起眼的院子旧货摊读成消费系统的逆向物流：物品在家庭之间继续流通，而非立即进入废物流。画面的整洁与怀旧感也可能美化二手经济，因此必须同时看到经济衰退、全球零售和化石燃料密集运输构成的背景。',
    projects: [{ year: '2008', title: 'Yard Sale', type: '从院子旧货摊观察家庭物品再流通与过度消费的摄影系列', facts: ['系列在美国院子旧货摊拍摄延长线、鱼竿、粉色眼镜、汽车轮毂、床垫、袋子、键盘、吸尘器及其他家庭物件。', '官方项目说明把 yard sale 视为负担得起的地方循环方式：它延长物品寿命、减少浪费，并在经济衰退期间增长。', '作品将这种面对面的再使用网络，与依赖全球生产、长距离运输和资源消耗的大型零售体系对照。'], reading: '解读：被单独框取的旧物既像商品目录，也带着磨损、临时标价和前任主人的痕迹。系列最有力之处是把消费后的去向拉回住宅尺度；但人物与劳动多在画外，循环经济背后的贫困和必要性仍需文本补足。' }],
    images: [], sourceLabel: 'Prix Pictet — Adam Bartos: Yard Sale', sourceUrl: 'https://prix.pictet.com/cycles/consumption/adam-bartos'
  },
  {
    id: 'motoyuki-daifu', name: 'Motoyuki Daifu', born: '1985', base: 'Kanagawa, Japan',
    intro: '日本摄影艺术家，以贴近日常的彩色快照记录多代同堂家庭。Project Family 让剩饭、垃圾袋、衣物、猫、熟睡的母亲、做家务的父亲和争吵的兄弟同时挤入画面，把通常被家居广告清除的混乱重新定义为亲密关系和消费沉积的真实环境。',
    methods: ['家庭内部长期拍摄', '贴身彩色快照', '日常混乱累积', '亲属关系参与式记录', '反理想家居构图'],
    subjects: ['family life', 'domestic clutter', 'food remains', 'multigenerational home', 'intimacy', 'consumption residue'],
    outputs: ['彩色摄影', '家庭日记式系列', '展览', '摄影书项目', '快照档案'],
    institutions: ['Prix Pictet', 'Nikon Salon Tokyo', 'Lombard-Freid Projects', 'Vacant Tokyo', 'Aichi Triennale'],
    achievements: ['Prix Pictet Consumption shortlist 2014', 'Family presented at Nikon Salon Tokyo 2008', 'Lovesody solo exhibition New York 2012'],
    whyImportant: '关注理由：Daifu 不把消费理解为购物行为，而拍它留在餐桌、地板和家庭关系中的物质沉积。密集快照抵抗“整洁之家”的商业范本，却也可能把亲人和混乱变成可消费的异域奇观；项目的伦理张力就在亲密参与和公开暴露之间。',
    projects: [{ year: '2007–2011', title: 'Project Family', type: '记录多代同堂家庭、家务与消费残余的亲密快照系列', facts: ['艺术家持续拍摄自己的家庭：母亲睡觉、父亲做家务、兄弟争吵，以及猫、垃圾袋、吃剩的晚餐和堆积衣物。', '拥挤室内没有被整理成理想化家庭场景，人物、食物、包装和生活废物在同一画面争夺空间。', '艺术家把这些景象称为可爱的日常生活，并把它们与自己对日本家庭经验的理解联系起来。'], reading: '解读：画面的视觉噪声不是偶然背景，而是家庭劳动、消费速度和空间条件共同生成的形式。摄影既证明亲密关系可以容纳失序，也让观众面对一个问题：谁有权把家庭成员和私人混乱转换成公共图像？' }],
    images: [], sourceLabel: 'Prix Pictet — Motoyuki Daifu: Project Family', sourceUrl: 'https://prix.pictet.com/cycles/consumption/motoyuki-daifu'
  },
  {
    id: 'hong-hao', name: 'Hong Hao', born: '1965', base: 'Beijing, China',
    intro: '中国当代艺术家，毕业于中央美术学院版画系，以扫描、数字归档和拼贴研究物质文化。他把每天消费或接触的物品逐件放上扫描仪，按类别存入电脑文件夹，再组合为高密度平面，让个人生活成为一套可检索、可计数却无法真正穷尽的消费数据库。',
    methods: ['日常物件扫描', '数字文件夹分类', '数据库式归档', '高密度数字拼贴', '个人消费长期记账'],
    subjects: ['personal consumption', 'material culture', 'digital archive', 'classification', 'development ideology', 'everyday objects'],
    outputs: ['扫描图像', '数字拼贴', '大型摄影输出', '系列档案', '博物馆展览'],
    institutions: ['Prix Pictet', 'Metropolitan Museum of Art', 'UCCA', 'Shanghai Biennale', 'Asia Pacific Triennial', 'Rencontres d’Arles'],
    achievements: ['Prix Pictet Consumption shortlist 2014', 'works presented at the Metropolitan Museum of Art', 'Shanghai Biennale participant 2000'],
    whyImportant: '关注理由：Hong Hao 的方法把“消费”直接转成图像生产规则：每件物品既是生活证据，也是数据库单元。扫描提供近似客观的表面，却由分类、保留与删选重新编码；作品因此能同时讨论个人欲望、发展叙事和数字归档并不真正中立。',
    projects: [{ year: '2001–2009', title: 'My Things', type: '将日常消费品逐件扫描、分类并拼贴成个人物质档案的长期项目', facts: ['项目始于 2001 年；艺术家把每天使用或消费的对象逐件扫描，作为视觉日记保存。', '数字文件随后按物品类别收入电脑文件夹，再被重新排列为高密度拼贴，使物品的尺度、邻接和数量成为画面结构。', '官方说明把扫描视为建立人与物关系、留下证据的方式，并指出项目借个人清单追问消费及发展意识形态。'], reading: '解读：扫描仪消除透视并平等呈现物体表面，分类系统却暴露每种“平等”背后的编辑权。观看者既被庞大数量吸引，也会意识到个人身份正被收据般的对象集合替代；图像是自传，也是消费制度的微型统计。' }],
    images: [], sourceLabel: 'Prix Pictet — Hong Hao: My Things', sourceUrl: 'https://prix.pictet.com/cycles/consumption/hong-hao'
  },
  {
    id: 'abraham-oghobase', name: 'Abraham Oghobase', born: '1979', base: 'Toronto, Canada',
    intro: '尼日利亚摄影与行为艺术家，出生于拉各斯，常把自己的身体作为图像材料。他在城市墙面密集的分类广告、手写信息和商业招贴前行动、跃起或占据画面，让身体与文字共同争夺有限空间，把非正规经济、游击营销和都市可见性的压力转化为表演性摄影。',
    methods: ['自我身体表演', '城市空间介入', '黑白摄影', '广告文字与身体并置', '非正规经济现场观察'],
    subjects: ['Lagos', 'classified advertising', 'informal economy', 'public space', 'commercial visibility', 'urban competition'],
    outputs: ['行为摄影', '黑白摄影', '城市系列', '博物馆展览', '自画像'],
    institutions: ['Prix Pictet', 'Museum of Modern Art New York', 'Kiasma', 'Art Gallery of Ontario', 'Okwui Enwezor Prize', 'Bamako Encounters'],
    achievements: ['Prix Pictet Consumption shortlist 2014', 'Okwui Enwezor Prize inaugural recipient 2019', 'included in MoMA New Photography 2023'],
    whyImportant: '关注理由：Oghobase 把广告墙从背景变成一种空间制度：信息、商品和身体都必须争夺注意力。自我表演避免把城市居民当成被动样本，但跳跃姿态也可能把复杂的非正规经济压缩成单一视觉符号，因此文字细节、地点和系列关系仍是判断作品的关键。',
    projects: [{ year: '2012', title: 'Untitled', type: '在拉各斯分类广告墙前以身体表演研究商业信息与公共空间竞争的摄影系列', facts: ['项目面对拉各斯墙面与招牌上密集的传单、海报和手写分类广告；这些信息服务于非正规经济，却常因内容零散而难以核实。', '艺术家在其中一面分类广告墙前以自己的身体行动，把人与商业文字对有限可见空间的竞争置于同一画面。', '官方项目说明以拉各斯超过千万人口和从住房到广告的空间竞争为背景，并追问这种游击营销是否有效。'], reading: '解读：身体的动作切断文字墙的平面连续性，让广告不再只是可读信息，而成为需要穿越、抵抗和表演的城市表皮。作品将消费者是否能验证信息的问题留在画外，也提醒我们注意非正规市场中的信任结构。' }],
    images: [], sourceLabel: 'Prix Pictet — Abraham Oghobase: Untitled', sourceUrl: 'https://prix.pictet.com/cycles/consumption/abraham-oghobase'
  },
  {
    id: 'laurie-simmons', name: 'Laurie Simmons', born: '1949', base: 'New York, United States',
    intro: '美国摄影与影像艺术家，Pictures Generation 代表人物之一，自 1970 年代起以玩偶、微缩场景和编排式摄影拆解家庭、性别与欲望。她把从日本订购的真人尺寸 Love Doll 带入家中，持续为其安排衣服、甜食、饮料和日常动作，使商品化女性身体逐渐获得又不稳定又被操控的人格。',
    methods: ['玩偶编排式摄影', '家庭空间舞台化', '时间顺序日记', '服装与道具角色塑造', '商品身体批判'],
    subjects: ['commodified femininity', 'desire', 'domesticity', 'fetish', 'isolation', 'consumer fantasy'],
    outputs: ['彩色摄影', '摄影书', '影像', '编排场景', '博物馆展览'],
    institutions: ['Prix Pictet', 'Museum of Modern Art New York', 'Metropolitan Museum of Art', 'Whitney Museum of American Art', 'Guggenheim Museum', 'Walker Art Center'],
    achievements: ['Prix Pictet Consumption shortlist 2014', 'Guggenheim Fellowship 1997', 'National Endowment for the Arts Fellowship 1984', 'American Academy in Rome residency 2005'],
    whyImportant: '关注理由：Simmons 让消费对象不只是被拍摄，而成为一段被购买、装扮、叙述和情感投射的关系。项目揭示女性形象如何被制造为可定制商品，但摄影对玩偶的持续迷恋也可能重演其物化机制；这种共谋性正是作品需要被批判观看的部分。',
    projects: [{ year: '2010', title: 'The Love Doll', type: '以真人尺寸定制玩偶、家庭舞台和日记结构研究商品化欲望的摄影项目', facts: ['艺术家于 2009 年从日本订购一件高端真人尺寸 Love Doll，并从开箱开始按时间顺序记录它在家中的日常动作和关系。', '玩偶从正式、羞怯的姿态逐渐进入由夸张首饰、糖果、品牌服装和绿色汽水瓶构成的消费场景；一年后第二个玩偶加入。', '项目把住宅转化为真人尺度的 dollhouse，并以摄影书和日记式文字延伸对欲望、孤立与商品身体的讨论。'], reading: '解读：箱装到货首先宣布身体是一件可购买商品，连续摄影又诱使观众把人格投射给它。衣服、糖果和饮料不仅是道具，而是角色被生产出来的消费语法；同情与物化因此无法被干净分开。' }],
    images: [], sourceLabel: 'Prix Pictet — Laurie Simmons: The Love Doll', sourceUrl: 'https://prix.pictet.com/cycles/consumption/laurie-simmons'
  }
];
