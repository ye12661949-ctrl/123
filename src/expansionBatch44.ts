import type { Artist } from './data';

const p = (year:string,title:string,type:string,facts:string[],reading:string) => ({year,title,type,facts,reading});

export const artistBatch44: Artist[] = [
  {
    id:'moyra-davey', name:'Moyra Davey', born:'1958', base:'New York',
    intro:'加拿大出生的艺术家，以摄影、电影与写作为核心，并把照片的折叠、邮寄、阅读与流通过程变成作品结构。',
    methods:['摄影','写作','电影','邮寄图像','档案 / 阅读研究'], subjects:['阅读','日常生活','记忆','公共与私人空间','图像流通'], outputs:['摄影','电影','文本','装置'], institutions:['MoMA','Tate Modern','National Gallery of Canada','Toronto Biennial of Art'], achievements:['MoMA New Photography 2011','Toronto Biennial of Art 2019','Guggenheim Fellowship 2020'],
    whyImportant:'她把摄影从“拍摄对象”推进到阅读、写作、通信和物质流通的系统中，是理解摄影如何与文本、书籍和展示机制结合的重要节点。',
    projects:[p('2011','The Coffee Shop, The Library','摄影 / 邮寄装置',['照片被折成信封邮寄，保留邮票、邮戳和折痕。','作品连接图书馆、咖啡馆以及公共空间中的私人经验。'],'重点看照片经历邮寄后留下的物理痕迹如何成为图像的一部分。')],
    images:[], sourceLabel:'MoMA · Moyra Davey', sourceUrl:'https://www.moma.org/artists/39770-moyra-davey'
  },
  {
    id:'yto-barrada', name:'Yto Barrada', born:'1971', base:'Tangier / New York',
    intro:'法裔摩洛哥艺术家，以摄影、电影、纺织、出版、档案和公共项目研究丹吉尔、迁徙、边境、殖民历史与日常抵抗。',
    methods:['研究型摄影','电影','档案','纺织','公共介入','出版'], subjects:['迁徙','边境','丹吉尔','殖民历史','抵抗','教育'], outputs:['摄影','电影','装置','纺织','书籍'], institutions:['MoMA','MoMA PS1','Tate Modern','Centre Pompidou','La Biennale di Venezia'], achievements:['Venice Biennale 2007 / 2011','MoMA Artist’s Choice: A Raft 2021–22','Mario Merz Prize 2022'],
    whyImportant:'她把北非的边境经验与摄影、档案机构和公共文化基础设施连接起来，使“艺术家建立机构”本身成为实践的一部分。',
    projects:[p('1998–','The Strait Project','长期摄影研究',['围绕直布罗陀海峡以及申根制度之后摩洛哥边境的社会与心理影响展开。','摄影同时观察迁徙限制、城市空间与日常生活。'],'适合研究地缘政治如何通过低强度的日常景观进入摄影。'),p('2006–','Cinémathèque de Tanger','公共机构 / 档案',['参与将 Cinéma Rif 转变为非营利电影资料与放映机构。','机构提供北非与中东电影档案的公共入口。'],'艺术实践在这里超出作品生产，进入文化基础设施建设。')],
    images:[], sourceLabel:'MoMA · Yto Barrada', sourceUrl:'https://www.moma.org/collection/artists/42323'
  },
  {
    id:'awoiska-van-der-molen', name:'Awoiska van der Molen', born:'1972', base:'Netherlands',
    intro:'荷兰摄影艺术家，以长期独处式拍摄和手工银盐放大制作深黑、低照度的单色自然景观。',
    methods:['模拟摄影','长期观察','暗房','手工银盐放大'], subjects:['自然','孤独','时间','黑暗','感知'], outputs:['银盐摄影','摄影书','展览'], institutions:['Foam','The Photographers’ Gallery','Huis Marseille','Victoria and Albert Museum'], achievements:['Deutsche Börse Photography Prize 2017 入围','Prix Pictet 2019 入围','Paris Photo–Aperture PhotoBook of the Year 2024 入围'],
    whyImportant:'她代表当代摄影中与高速数字图像相反的一条路线：以缓慢拍摄、暗房和银盐材料把风景转化为关于时间与感知的物质经验。',
    projects:[p('2014','Sequester','摄影书 / 风景系列',['长期进入偏远自然环境拍摄。','作品以深黑单色和手工暗房印相建立观看节奏。'],'重点不是地点识别，而是黑暗、尺度和观看时间如何改变风景经验。'),p('2016','Blanco','Foam 个展',['Foam 首次为其举办大型博物馆个展。','展出大量手工制作的大尺幅银盐照片。'],'可把展览与 Sequester 对照，观察书与墙面尺度如何改变同类图像。')],
    images:[], sourceLabel:'Foam · Awoiska van der Molen', sourceUrl:'https://www.foam.org/events/awoiska-van-der-molen'
  },
  {
    id:'mame-diarra-niang', name:'Mame-Diarra Niang', born:'1982', base:'Paris',
    intro:'法国摄影艺术家，以“领土的可塑性”为核心，从城市与地方研究逐渐转向模糊、失真和非肖像，讨论黑人身体、记忆、遗忘与流动身份。',
    methods:['摄影','再摄影','模糊 / 失真','系列编辑','摄影书'], subjects:['黑人身体','身份','记忆','遗忘','地方','感知'], outputs:['摄影','摄影书','展览'], institutions:['Fondation Henri Cartier-Bresson','Zeitz MOCAA','MoMA','Sharjah Biennial','Berlin Biennale','São Paulo Biennial'], achievements:['Sharjah Biennial 2023','São Paulo Biennial 2018','Berlin Biennale 2018','Fondation HCB 首次法国机构个展 2024'],
    whyImportant:'她把摄影常被视为失败的模糊、失真和低解析度转化为反固定身份的语言，同时把非洲城市经验与当代黑人身体再现问题连接起来。',
    projects:[p('2022','The Citadel: A Trilogy','艺术家书 / 摄影研究',['三卷本由 MACK 出版。','项目围绕艺术家与地方之间既个人又分析性的关系展开。'],'适合从摄影书结构观察“地方”如何被拆成多个视觉章节。'),p('2024','Remember to Forget','机构个展 / 非肖像',['Fondation Henri Cartier-Bresson 举办其首个法国机构个展。','通过再拍数字屏幕、模糊、变形和光晕建立所谓 non-portraits。'],'图像不再证明一个稳定身份，而把身体处理成持续变化的投射表面。')],
    images:[], sourceLabel:'Fondation Henri Cartier-Bresson · Mame-Diarra Niang', sourceUrl:'https://www.henricartierbresson.org/en/expositions/mame-diarra-niang/'
  }
];
