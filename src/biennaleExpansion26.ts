import type { Artist } from './data';
import type { ArtistArchive } from './archiveData';

const source = 'https://www.labiennale.org/en/art/2024/artists';

const records = [
  ['lauren-halsey','Lauren Halsey','1987','Los Angeles','以建筑、雕塑、现成图像与社区视觉档案把南洛杉矶的招牌、壁画、街头文字和黑人流行文化转译成纪念碑式空间。',['建筑性装置','社区档案','图像采集'],['黑人城市经验','社区','公共空间'],['装置','雕塑'],'Nucleo Contemporaneo'],
  ['claire-fontaine','Claire Fontaine','2004–','Paris / Palermo','以现成品、文字、霓虹、雕塑和挪用策略研究主体性、劳动、政治语言与集体身份；2024 双年展标题取自其 Foreigners Everywhere 系列。',['挪用','现成品','文字霓虹'],['迁移','政治语言','身份'],['装置','雕塑','文字'],'Nucleo Contemporaneo'],
  ['leilah-babirye','Leilah Babirye','1985','New York / Kampala','使用木雕、陶瓷、金属和回收材料塑造酷儿非洲人物与谱系，将被贬抑的材料和身份重新赋予尊严。',['木雕','陶瓷','回收材料'],['酷儿身份','乌干达','社群'],['雕塑','装置'],'Nucleo Contemporaneo'],
  ['agnes-questionmark','Agnes Questionmark','1995','New York / Rome','通过表演、雕塑、医学空间和身体改造想象身体分类、性别、生殖与跨物种身份的不稳定边界。',['行为','身体介入','医学场景'],['身体','性别','生殖'],['行为','装置','雕塑'],'Nucleo Contemporaneo'],
  ['manauara-clandestina','Manauara Clandestina','1993','Brazil','以时装、表演、影像和身体造型连接亚马孙原住民/城市经验、跨性别身份与流行视觉文化。',['时装','表演','身体造型'],['亚马孙','跨性别','城市身份'],['表演','服装','影像'],'Nucleo Contemporaneo'],
  ['sandra-poulson','Sandra Poulson','1995','Luanda / London','从罗安达日常物、服装、基础设施与城市记忆出发，通过软雕塑、装置和表演研究后殖民城市生活。',['软雕塑','日常物采集','装置'],['罗安达','后殖民城市','日常生活'],['装置','雕塑','表演'],'Nucleo Contemporaneo'],
  ['kang-seung-lee','Kang Seung Lee','1978','Los Angeles / Seoul','通过素描、刺绣、摄影与档案研究保存酷儿艺术家、行动者和艾滋病历史中容易消失的身体记忆。',['档案研究','刺绣','素描'],['酷儿档案','艾滋病史','记忆'],['绘画','纺织','装置'],'Nucleo Contemporaneo'],
  ['kudzanai-chiurai','Kudzanai Chiurai','1981','Harare / international','使用摄影、电影、绘画、海报和装置重构非洲政治权力、媒介形象与虚构国家叙事。',['编排摄影','电影','海报'],['政治权力','非洲','媒介'],['摄影','电影','装置'],'Nucleo Contemporaneo'],
  ['nazira-karimi','Nazira Karimi','1996','Vienna / Almaty','以装置和跨媒介实践处理迁移、语言、家庭记忆与中亚身份，在材料和空间中组织私人历史。',['装置','材料研究','空间叙事'],['中亚','迁移','家庭记忆'],['装置','混合媒介'],'Nucleo Contemporaneo'],
  ['taylor-nkomo','Taylor Nkomo','1997','Zimbabwe / South Africa','以绘画和混合媒介构造人物、土地与精神性之间的关系，将个人经验连接到南部非洲的社会环境。',['绘画','混合媒介'],['人物','土地','精神性'],['绘画'],'Nucleo Contemporaneo'],
  ['beatriz-cortez','Beatriz Cortez','1970','Los Angeles / El Salvador','以钢铁雕塑、建筑结构和植物性想象讨论迁移、时间、原住民知识与未来考古。',['金属制作','建筑性雕塑','研究'],['迁移','时间','原住民知识'],['雕塑','装置'],'Nucleo Contemporaneo']
] as const;

export const artistBatch26: Artist[] = records.map(([id,name,born,base,intro,methods,subjects,outputs,section]) => ({
  id,name,born,base,intro,methods:[...methods],subjects:[...subjects],outputs:[...outputs],institutions:['La Biennale di Venezia'],achievements:[`Venice Biennale 2024 · ${section}`],whyImportant:'作为 2024 威尼斯双年展官方国际主展索引的一部分补入；先建立可靠制度节点，再继续深化代表项目、材料和制作步骤。',projects:[{year:'2024',title:`Venice Biennale 2024 · ${section}`,type:'威尼斯双年展参展节点',facts:['依据 La Biennale di Venezia 官方 2024 艺术家名单与展场资料建立参展记录。'],reading:'用于把双年展从少量样本扩展为可逐届追踪的艺术家索引。'}],images:[],sourceUrl:source,sourceLabel:'La Biennale di Venezia'
}));

export const archiveBatch26: Record<string, ArtistArchive> = Object.fromEntries(artistBatch26.map(artist => [artist.id,{artistId:artist.id,projectCoverage:'1 个威尼斯双年展节点已索引',imageCoverage:'0 / 1 项目配图',note:'本批优先完成 2024 国际主展人物索引；代表项目与具体制作动作后续继续深化。',projects:[{title:artist.projects[0].title,period:'2024',cluster:'威尼斯双年展 / Nucleo Contemporaneo',summary:artist.intro,actions:['核对威尼斯双年展官方艺术家名单','建立艺术家与 60th International Art Exhibition 的关联'],sourceUrl:source,images:[],relations:[{kind:'展览',label:'Foreigners Everywhere',detail:'Venice Biennale 2024'}]}],awards:[],exhibitions:artist.achievements,sources:[{label:'Biennale Arte 2024 official artists',url:source}]}]));
