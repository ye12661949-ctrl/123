import type { Artist } from './data';
import { artistBatch70 } from './expansionBatch70';

export const artistBatch69: Artist[] = [
  ...artistBatch70,
  {
    id:'candida-hofer', name:'Candida Höfer', born:'1944', base:'Germany',
    intro:'以大型彩色摄影持续研究图书馆、博物馆、剧院等公共文化空间，常在人物缺席时拍摄，使建筑、秩序与制度本身成为肖像。',
    methods:['类型学摄影','建筑摄影','系列摄影','大型彩色摄影'], subjects:['公共空间','文化机构','建筑','秩序','观看制度'], outputs:['摄影'], institutions:['MoMA','Venice Biennale'], achievements:['MoMA collection','German Pavilion · Venice Biennale 2003'],
    whyImportant:'Höfer把杜塞尔多夫摄影的类型学方法从工业对象转向文化机构内部，是理解当代建筑摄影、制度空间与客观摄影的重要节点。',
    projects:[{year:'1997',title:'Deutsche Bucherei Leipzig IX',type:'彩色摄影',facts:['作品为chromogenic print。','进入MoMA摄影收藏。'],reading:'空置的公共文化空间被处理成关于知识分类、建筑秩序和制度权威的视觉结构。'}], images:[], sourceLabel:'MoMA · Candida Höfer', sourceUrl:'https://www.moma.org/artists/34220-candida-hofer'
  },
  {
    id:'thomas-struth', name:'Thomas Struth', born:'1954', base:'Germany',
    intro:'从无人街景、家庭肖像到博物馆观众与高科技设施，以大画幅摄影研究城市历史、观看行为、亲属关系和技术系统。',
    methods:['大画幅摄影','类型学','长期系列','客观摄影'], subjects:['城市','建筑','家庭','博物馆','技术','观看'], outputs:['摄影'], institutions:['MoMA'], achievements:['MoMA collection'],
    whyImportant:'Struth把杜塞尔多夫学派的系统观察扩展到城市、家庭、博物馆与科技基础设施，是战后欧洲摄影转向大型当代艺术展示体系的关键人物。',
    projects:[{year:'1978',title:'Unconscious Places / street photographs',type:'黑白城市摄影',facts:['MoMA收藏包括Sixth Avenue at 50th Street, New York/Midtown (1978)。','系列关注战后城市环境与社会历史。'],reading:'看似中性的街道记录被转化为城市历史、权力与集体记忆的空间肖像。'}], images:[], sourceLabel:'MoMA · Thomas Struth', sourceUrl:'https://www.moma.org/artists/7825-thomas-struth'
  },
  {
    id:'hiroshi-sugimoto', name:'Hiroshi Sugimoto', born:'1948', base:'Japan / United States',
    intro:'以高度控制的摄影和长曝光处理海景、电影院、自然史模型与建筑，把摄影作为测量时间、知觉和图像真实性的装置。',
    methods:['长曝光','系列摄影','观念摄影','大型相机'], subjects:['时间','海洋','电影','建筑','知觉','摄影真实性'], outputs:['摄影','建筑'], institutions:['MoMA'], achievements:['MoMA collection'],
    whyImportant:'Sugimoto把摄影的技术条件直接变成哲学问题，在极简视觉语言中持续测试时间如何被压缩进单张照片。',
    projects:[{year:'1980–',title:'Seascapes',type:'黑白摄影系列',facts:['MoMA收藏多件Sugimoto海景，包括Adriatic Sea, Gargano I (1990)与Ionian Sea, Santa Cesarea (1993)。'],reading:'几乎不变的海平线削弱地点差异，使摄影成为跨越历史时间的知觉实验。'}], images:[], sourceLabel:'MoMA · Hiroshi Sugimoto', sourceUrl:'https://www.moma.org/artists/5721-hiroshi-sugimoto'
  },
  {
    id:'bouchra-khalili', name:'Bouchra Khalili', born:'1975', base:'Morocco / France / Germany',
    intro:'以录像、地图、口述与档案研究迁徙者如何用自己的声音叙述跨境路线，并讨论公民身份、国家边界与政治主体性。',
    methods:['口述史','单镜头录像','地图绘制','档案研究'], subjects:['迁徙','边界','公民身份','国家','语言','政治主体'], outputs:['录像','装置','摄影','文本'], institutions:['MoMA','Venice Biennale','documenta','Palais de Tokyo'], achievements:['The Mapping Journey Project · MoMA 2016','55th Venice Biennale 2013','documenta 14'],
    whyImportant:'Khalili把迁徙者从被摄影的对象转化为主动叙述路线与政治经验的主体，是当代影像中讨论边境、语言和公民身份的重要人物。',
    projects:[{year:'2008–2011',title:'The Mapping Journey Project',type:'八频道录像',facts:['由八个长镜头录像组成。','2016年在MoMA展出。'],reading:'手在地图上重新画出真实迁徙路线，个人声音与永久记号笔共同抵抗国家地图规定的边界。'}], images:[], sourceLabel:'MoMA · The Mapping Journey Project', sourceUrl:'https://www.moma.org/audio/playlist/29/508'
  },
  {
    id:'teresa-margolles', name:'Teresa Margolles', born:'1963', base:'Mexico / Spain',
    intro:'以法医经验、现场残留物、纺织物与装置面对死亡、毒品暴力、国家失职、劳动和强迫迁徙，使暴力留下的物质痕迹进入展览空间。',
    methods:['现场研究','物质证据','社会调查','装置','法医视角'], subjects:['死亡','毒品暴力','迁徙','边境','国家暴力','劳动'], outputs:['装置','雕塑','摄影','纺织'], institutions:['Venice Biennale'], achievements:['Venice Biennale 2019','Biennale Arte 2024 · Nucleo Contemporaneo'],
    whyImportant:'Margolles把暴力的物质残余而非新闻图像本身带入艺术现场，建立了拉丁美洲当代艺术中极具影响力的证据、身体与社会暴力实践。',
    projects:[{year:'2019',title:'Tela Venezolana',type:'纺织 / 物质证据',facts:['作品源于对委内瑞拉—哥伦比亚边境劳动与迁徙的多年研究。','2024年进入威尼斯双年展Nucleo Contemporaneo。'],reading:'带有遇害迁徙者血迹的布成为匿名肖像、地图与证据，迫使观看面对暴力的物质存在。'}], images:[], sourceLabel:'La Biennale di Venezia · Teresa Margolles', sourceUrl:'https://www.labiennale.org/en/art/2024/nucleo-contemporaneo/teresa-margolles'
  }
];
