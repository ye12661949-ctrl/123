import type { Artist } from './data';

// Expansion Batch 46 — canonical figures across staged photography, Düsseldorf photography,
// conceptual time/image practices and politically engaged installation.
export const artistBatch46: Artist[] = [
  {
    id:'thomas-ruff', name:'Thomas Ruff', born:'1958', base:'Germany',
    intro:'德国当代摄影的重要人物，以肖像、夜视图像、互联网图像与数字处理持续测试摄影的真实性、分辨率与技术条件。',
    methods:['类型学摄影','图像挪用','数字图像处理','系列研究'], subjects:['摄影真实性','技术图像','肖像','互联网与传播'], outputs:['摄影','数字图像','摄影书'],
    institutions:['MoMA'], achievements:['作品进入 MoMA 收藏与展览体系'],
    whyImportant:'把杜塞尔多夫摄影传统从客观记录推进到对数字图像、监控视觉和图像流通机制的研究，是后摄影讨论中的核心人物。',
    projects:[{year:'1986–1991',title:'Portraits',type:'摄影系列',facts:['以正面、近乎证件式的大尺幅肖像削弱表情叙事。','MoMA 收藏其 1989 年 Portrait。'],reading:'重点不是人物性格，而是肖像摄影如何制造“可识别的人”。'},{year:'1992–',title:'Nacht',type:'摄影系列',facts:['借用夜视技术形成绿色低照度城市图像。'],reading:'将军事/监控成像技术带入艺术摄影。'}],
    images:[], sourceLabel:'MoMA · Thomas Ruff', sourceUrl:'https://www.moma.org/artists/6982-thomas-ruff'
  },
  {
    id:'thomas-struth', name:'Thomas Struth', born:'1954', base:'Germany',
    intro:'德国摄影艺术家，从城市街道、家庭肖像、博物馆观看到高科技设施，以大型摄影研究人与制度化空间的关系。',
    methods:['大型摄影','类型学观察','长期系列','空间研究'], subjects:['城市','家庭','博物馆','技术与制度空间'], outputs:['摄影','摄影书','展览'],
    institutions:['MoMA'], achievements:['MoMA 收藏大量作品并多次纳入摄影与当代艺术展览'],
    whyImportant:'杜塞尔多夫学派最关键的扩展者之一，把冷静的类型学语言用于城市、家庭、观看制度与复杂技术基础设施。',
    projects:[{year:'1970s–',title:'Unconscious Places',type:'城市摄影系列',facts:['持续拍摄不同城市的街道与建筑结构。'],reading:'把城市作为历史与社会关系留下的可见结构。'},{year:'1989–',title:'Museum Photographs',type:'摄影系列',facts:['拍摄观众在博物馆面对经典艺术作品的状态。'],reading:'把观看者本身重新放进艺术史与博物馆制度。'}],
    images:[], sourceLabel:'MoMA · Thomas Struth', sourceUrl:'https://www.moma.org/artists/7825-thomas-struth'
  },
  {
    id:'hiroshi-sugimoto', name:'Hiroshi Sugimoto', born:'1948', base:'Japan / United States',
    intro:'日本摄影艺术家，以极度控制的长曝光与系列方法研究时间、记忆、历史和摄影作为记录装置的边界。',
    methods:['长曝光','系列摄影','观念摄影','模拟摄影'], subjects:['时间','海洋与地平线','电影','历史与再现'], outputs:['摄影','建筑 / 装置','摄影书'],
    institutions:['MoMA'], achievements:['作品进入 MoMA 收藏并持续出现在重要摄影展览中'],
    whyImportant:'将摄影最基本的曝光过程直接变成关于时间和存在的观念工具，对当代观念摄影影响深远。',
    projects:[{year:'1976–',title:'Theaters',type:'长曝光摄影系列',facts:['以整部电影的放映时长作为单张照片曝光时间，使银幕最终成为白色发光面。'],reading:'一张照片压缩整部电影的时间。'},{year:'1980–',title:'Seascapes',type:'摄影系列',facts:['以近乎恒定的海平线构图拍摄世界各地海域。','MoMA 收藏 Adriatic Sea, Gargano I 等作品。'],reading:'通过最少视觉元素比较时间、地点与人类观看的连续性。'}],
    images:[], sourceLabel:'MoMA · Hiroshi Sugimoto', sourceUrl:'https://www.moma.org/artists/5721-hiroshi-sugimoto'
  },
  {
    id:'jeff-wall', name:'Jeff Wall', born:'1946', base:'Canada',
    intro:'加拿大艺术家，以精密编排的电影式摄影和大型灯箱著称，将绘画史、电影、街头观察与摄影的纪实传统重新组合。',
    methods:['编排摄影','电影式制作','艺术史引用','近纪实'], subjects:['日常生活','城市','阶级与社会关系','观看与再现'], outputs:['大型摄影','灯箱透明片','摄影'],
    institutions:['MoMA'], achievements:['2007 年 MoMA 举办 Jeff Wall 个展'],
    whyImportant:'重新确立了大型编排摄影作为当代艺术核心语言的地位，并深刻影响之后的摄影、电影与广告视觉。',
    projects:[{year:'1978',title:'The Destroyed Room',type:'大型灯箱摄影',facts:['借鉴 Delacroix 的构图并以人工搭建场景呈现破坏后的房间。'],reading:'让摄影同时具有绘画构图、电影布景和商业灯箱的属性。'},{year:'1999–2000',title:'After “Invisible Man” by Ralph Ellison, the Prologue',type:'编排摄影',facts:['依据 Ralph Ellison 小说序言构造高度细节化场景。','作品进入 MoMA 收藏。'],reading:'文学文本被重新制造为一个可见但明确人工构造的现实。'}],
    images:[], sourceLabel:'MoMA · Jeff Wall', sourceUrl:'https://www.moma.org/artists/7826-jeff-wall'
  },
  {
    id:'mona-hatoum', name:'Mona Hatoum', born:'1952', base:'Palestine / Lebanon / United Kingdom',
    intro:'巴勒斯坦家庭出身、出生于贝鲁特并长期在英国工作的艺术家，以身体、家居物件和空间装置制造熟悉与危险并存的经验。',
    methods:['装置','雕塑','行为','日常物件转化'], subjects:['流离失所','身体','权力与暴力','家与不安'], outputs:['装置','雕塑','行为','录像'],
    institutions:['Tate'], achievements:['2016 年 Tate Modern 举办大型回顾展'],
    whyImportant:'她把政治经验从直接叙事转化为空间、尺度、材料和身体感受，是后殖民与装置艺术的重要节点。',
    projects:[{year:'1985',title:'Performance Still',type:'行为 / 摄影',facts:['早期实践直接使用身体与城市空间。'],reading:'身体成为政治和公共空间之间的摩擦界面。'},{year:'1990s–',title:'Domestic-object installations',type:'装置 / 雕塑',facts:['反复把厨房、家具等熟悉物件改造成具有威胁感的对象。'],reading:'家的安全感被翻转成控制、危险和流离失所经验。'}],
    images:[], sourceLabel:'Tate · Mona Hatoum', sourceUrl:'https://www.tate.org.uk/whats-on/tate-modern/mona-hatoum'
  },
  {
    id:'thomas-hirschhorn', name:'Thomas Hirschhorn', born:'1957', base:'Switzerland / France',
    intro:'瑞士艺术家，以纸板、胶带、印刷图片、文字和廉价材料构造高密度装置，把哲学、战争图像、媒体与公共空间并置。',
    methods:['临时性装置','拼贴','文本与图像并置','公共空间介入'], subjects:['政治','战争与媒体','哲学','公共性'], outputs:['装置','拼贴','公共项目','雕塑'],
    institutions:['MoMA','MoMA PS1'], achievements:['作品进入 MoMA 收藏并参与 MoMA PS1 多项政治主题展览'],
    whyImportant:'以刻意非精致的材料语言挑战纪念碑、博物馆和“高质量艺术”的等级，是政治装置和参与式公共艺术的重要人物。',
    projects:[{year:'2002',title:'Bataille Monument',type:'公共 / 参与式装置',facts:['以临时建筑、档案与社区活动构成哲学家 Georges Bataille 的非传统纪念碑。'],reading:'纪念碑不再是永久雕塑，而成为社区使用中的知识与关系网络。'},{year:'2003',title:'Provide Ruins II',type:'装置',facts:['作品被 MoMA 收录并用于其馆藏研究。'],reading:'通过材料过量和视觉密度对抗洁净的展示逻辑。'}],
    images:[], sourceLabel:'MoMA · Thomas Hirschhorn', sourceUrl:'https://www.moma.org/artists/8276-thomas-hirschhorn'
  }
];
