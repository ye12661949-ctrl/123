import type { Artist } from './data';

const source = 'https://www.foam.org/events/foam-talent-2016';
const rosterSource = 'https://www.foam.org/nl/events/foam-talent-2017-new-york';

const records = [
  ['sofia-ayarzagoitia','Sofia Ayarzagoitia','Mexico','纪实与亲密摄影','身体、亲密关系、日常'],
  ['bubi-canal','Bubi Canal','Spain / New York','编排摄影、雕塑、色彩','身份、想象、流行文化'],
  ['paolo-ciregia','Paolo Ciregia','Italy','纪实摄影、档案','战争、政治、媒介'],
  ['sam-contis','Sam Contis','United States','长期摄影、肖像、档案','性别、美国西部、身体'],
  ['jack-davison','Jack Davison','United Kingdom','肖像、街头摄影、实验摄影','身体、光线、摄影史'],
  ['nicolo-degiorgis','Nicoló Degiorgis','Italy','纪实摄影、出版、档案','宗教、迁移、社会空间'],
  ['katinka-goldberg','Katinka Goldberg','Sweden / Norway','家庭档案、肖像、拼贴','家庭、记忆、亲密关系'],
  ['andrea-grutzner','Andrea Grützner','Germany','建筑摄影、色彩、抽象','空间、记忆、建筑'],
  ['samuel-gratacap','Samuel Gratacap','France','长期纪实、肖像','迁移、边境、等待'],
  ['maxime-guyon','Maxime Guyon','France / Switzerland','静物、商业图像研究','商品、技术、消费'],
  ['alexandra-hunts','Alexandra Hunts','Ukraine / Netherlands','观念摄影、数字图像','技术、现实、图像生产'],
  ['taejoong-kim','Taejoong Kim','South Korea','摄影、观察、系列编辑','城市、日常、空间'],
  ['nico-krijno','Nico Krijno','South Africa','工作室静物、拼贴、雕塑','物件、颜色、形式'],
  ['leo-maguire','Leo Maguire','United Kingdom','纪实摄影、长期观察','社群、身份、地方'],
  ['stefanie-moshammer','Stefanie Moshammer','Austria','长期项目、编排与纪实混合','地方、欲望、暴力、想象'],
  ['andres-felipe-orjuela','Andrés Felipe Orjuela','Colombia','档案、挪用、再摄影','历史、暴力、图像记忆'],
  ['antonio-ottomanelli','Antonio Ottomanelli','Italy','研究型摄影、建筑与地景','冲突、城市、权力'],
  ['daan-paans','Daan Paans','Netherlands','研究型摄影、静物、档案','知识、科学、想象'],
  ['louise-parker','Louise Parker','United States','摄影、肖像、日常观察','身体、青年、亲密关系'],
  ['andrejs-strokins','Andrejs Strokins','Latvia','档案、found photography、编辑','城市记忆、苏联遗产、日常'],
  ['ilona-szwarc','Ilona Szwarc','Poland / United States','编排肖像、自我表演','女性身份、身体、角色']
] as const;

export const foamTalent2016ArtistIds = [
  'sofia-ayarzagoitia','juno-calypso','bubi-canal','paolo-ciregia','sam-contis','jack-davison','nicolo-degiorgis','katinka-goldberg','andrea-grutzner','samuel-gratacap','maxime-guyon','felicity-hammond','alexandra-hunts','taejoong-kim','nico-krijno','leo-maguire','stefanie-moshammer','andres-felipe-orjuela','antonio-ottomanelli','daan-paans','louise-parker','andrejs-strokins','ilona-szwarc','daisuke-yokota'
];

export const foamTalent2016Artists: Artist[] = records.map(([id,name,base,method,subject]) => ({
  id,
  name,
  born:'—',
  base,
  intro:`2016 Foam Talent 入选艺术家。本站先把其纳入完整届次目录，并继续补具体项目、制作动作与作品图。`,
  methods:method.split('、'),
  subjects:subject.split('、'),
  outputs:['摄影','摄影书 / 展览'],
  institutions:['Foam'],
  achievements:['Foam Talent 2016'],
  whyImportant:'先作为 Foam Talent 2016 的完整制度节点建立档案，避免目录只显示数据库里偶然已有的少数艺术家。',
  projects:[{year:'2016',title:'Foam Talent 2016',type:'人才计划 / 群展 / Foam Magazine #45',facts:['入选 2016 Foam Talent。','作品进入 Foam Magazine #45 Talent Issue，并参与该届 Foam Talent 展览与巡展体系。'],reading:'从这一届开始可直接按完整名单进入艺术家，而不是依赖关键词反向匹配。'}],
  images:[],
  sourceLabel:'Foam · 2016 Talent roster',
  sourceUrl:rosterSource
}));

export const foamTalent2016Source = source;
