import type { Artist } from './data';

// Expansion Batch 47 — documentary critique, feminist media practice, post-Soviet photography,
// Latin American photography and reconstructed histories.
export const artistBatch47: Artist[] = [
  {
    id:'martha-rosler', name:'Martha Rosler', born:'1943', base:'United States',
    intro:'美国艺术家，以摄影蒙太奇、录像、文本、行为与社会介入研究战争、家庭空间、媒体、性别与日常政治。',
    methods:['摄影蒙太奇','媒介批判','文本与图像','社会介入'], subjects:['战争与媒体','女性主义','家庭空间','消费与公共生活'], outputs:['摄影蒙太奇','录像','装置','行为 / 社会项目'],
    institutions:['MoMA'], achievements:['MoMA 收藏大量作品并举办 Meta-Monumental Garage Sale'],
    whyImportant:'她把大众媒体图像、家庭意识形态与战争政治直接连接，是女性主义艺术、批判摄影和录像艺术的重要基础人物。',
    projects:[{year:'c. 1967–72',title:'House Beautiful: Bringing the War Home',type:'摄影蒙太奇系列',facts:['把越战新闻摄影与美国室内设计、消费广告图像拼接。','原作曾以复印件形式在反战示威中传播，MoMA 收藏该系列。'],reading:'不是把战争作为远方新闻，而是把战争嵌入美国中产家庭的视觉消费空间。'},{year:'1973–',title:'Garage Sale',type:'参与式装置 / 社会项目',facts:['以真实旧货交易、物品与公共互动持续形成不同版本。','2012 年 MoMA 呈现 Meta-Monumental Garage Sale。'],reading:'把消费、价值判断和社会交换本身转化为作品结构。'}],
    images:[], sourceLabel:'MoMA · Martha Rosler', sourceUrl:'https://www.moma.org/artists/6832-martha-rosler'
  },
  {
    id:'boris-mikhailov', name:'Boris Mikhailov', born:'1938', base:'Ukraine / Germany',
    intro:'乌克兰摄影艺术家，以苏联及后苏联社会中的日常生活、贫困、身体和私人图像实验形成高度主观的社会摄影。',
    methods:['长期纪实','彩色摄影实验','系列编辑','私人 / 社会档案'], subjects:['后苏联社会','身体','贫困与边缘群体','日常生活'], outputs:['摄影','摄影书','系列装置'],
    institutions:['MoMA'], achievements:['2011 年 MoMA 举办 Boris Mikhailov: Case History'],
    whyImportant:'他打破传统纪实摄影的中性姿态，以粗粝、主观甚至不稳定的图像处理苏联解体前后的社会现实，是东欧当代摄影核心人物。',
    projects:[{year:'1997–98',title:'Case History',type:'摄影系列',facts:['聚焦苏联解体后哈尔科夫社会边缘与无家可归者。','2011 年 MoMA 以该项目举办个展。'],reading:'作品的重要性同时来自社会现实、摄影者与被摄者之间不舒适的权力关系。'},{year:'1960s–80s',title:'Early Soviet-era series',type:'摄影 / 系列实验',facts:['长期在苏联制度环境中以私人拍摄、染色与系列编排实验摄影。'],reading:'摄影既是社会记录，也是对官方可见性制度的私人偏移。'}],
    images:[], sourceLabel:'MoMA · Boris Mikhailov', sourceUrl:'https://www.moma.org/artists/8168-boris-mikhailov'
  },
  {
    id:'graciela-iturbide', name:'Graciela Iturbide', born:'1942', base:'Mexico',
    intro:'墨西哥摄影艺术家，以长期进入社区、建立关系的方式拍摄原住民文化、女性、仪式、死亡与墨西哥社会的日常象征。',
    methods:['长期摄影','参与式观察','黑白摄影','摄影随笔'], subjects:['原住民社群','女性','仪式与日常','墨西哥文化'], outputs:['摄影','摄影书','摄影随笔'],
    institutions:['MoMA'], achievements:['作品进入 MoMA 摄影收藏与多项展览'],
    whyImportant:'她把拉丁美洲纪实传统从外部民族志观看转向长期关系与诗性观察，对墨西哥及全球纪实摄影影响深远。',
    projects:[{year:'1978–',title:'Seri / Sonoran Desert photographs',type:'长期摄影',facts:['受墨西哥 National Indigenous Institute 委托，与 Seri 社群共同生活并拍摄。','1979 年 Mujer ángel, Desierto de Sonora 进入其代表作谱系。'],reading:'关键是摄影关系先于“抓到好照片”，弱化外来者式民族志观看。'},{year:'1979–1980s',title:'Juchitán de las mujeres',type:'长期摄影 / 摄影书',facts:['多年往返 Oaxaca 的 Juchitán，与当地 Zapotec 女性共同生活和拍摄。','1989 年出版同名摄影书。'],reading:'女性权力、社区生活与象征性图像在长期交往中形成，而非一次性报道。'}],
    images:[], sourceLabel:'MoMA · Graciela Iturbide', sourceUrl:'https://www.moma.org/artists/2844-graciela-iturbide'
  },
  {
    id:'stan-douglas', name:'Stan Douglas', born:'1960', base:'Canada',
    intro:'加拿大艺术家，以摄影、电影和多屏装置重构被遗漏或失败的历史时刻，持续研究记忆、种族、音乐、技术与历史叙事。',
    methods:['历史重演','编排摄影','多屏影像','档案研究'], subjects:['历史与记忆','种族与政治','音乐文化','技术与媒介'], outputs:['摄影','电影 / 录像','多屏装置'],
    institutions:['MoMA'], achievements:['作品进入 MoMA 收藏并参与 Open Ends、XL 等展览'],
    whyImportant:'他将电影制作、摄影重演和档案研究结合，使“历史如何被重新制造”成为作品本身，是当代影像装置与编排摄影的重要节点。',
    projects:[{year:'2012',title:'Disco Angola',type:'编排摄影系列',facts:['以演员和重建场景模拟 1970 年代安哥拉内战与纽约地下 disco 场景。','MoMA 收藏 A Luta Continua, 1974。'],reading:'作品借用新闻摄影的可信外观，却明确在当代重新制造历史。'},{year:'1995',title:'Der Sandmann',type:'影像装置',facts:['以电影布景、重复结构和历史空间处理记忆与现代化。'],reading:'历史不是稳定过去，而是可以被媒介不断重演和分叉的结构。'}],
    images:[], sourceLabel:'MoMA · Stan Douglas', sourceUrl:'https://www.moma.org/artists/8153-stan-douglas'
  }
];
