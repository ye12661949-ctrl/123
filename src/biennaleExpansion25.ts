import type { Artist } from './data';
import type { ArtistArchive } from './archiveData';

const source2024 = 'https://www.labiennale.org/en/art/2024/artists';
const source2026 = 'https://www.labiennale.org/en/art/2026/artists';

const records = [
  ['pio-abad', 'Pio Abad', '1983', 'London / Manila', '以物件、档案图像、纺织、绘画与复制品追踪殖民史、独裁政治、收藏与失落物的流通。', ['档案研究','挪用','物件复制'], ['殖民史','政治记忆','收藏'], ['装置','纺织','绘画'], 'Venice Biennale 2026 · In Minor Keys', source2026],
  ['pacita-abad', 'Pacita Abad', '1946–2004', 'Philippines / international', '以高度饱和的绘画和 trapunto 缝制、填充与装饰画布，把迁移经验、社会现实与全球民间视觉文化连接起来。', ['绘画','缝制','拼贴'], ['迁移','社会现实','跨文化'], ['绘画','纺织'], 'Venice Biennale 2024 · Foreigners Everywhere', source2024],
  ['ivan-argote', 'Iván Argote', '1983', 'Paris / Bogotá', '通过雕塑、电影、公共介入与纪念碑操作研究权力如何写入城市空间、历史符号和日常行为。', ['公共介入','雕塑','影像'], ['纪念碑','权力','殖民史'], ['装置','电影','雕塑'], 'Venice Biennale 2024 · Foreigners Everywhere', source2024],
  ['karimah-ashadu', 'Karimah Ashadu', '1985', 'Hamburg / Lagos', '以录像和装置观察劳动、身体、非正式经济与社会结构，常从具体工作动作和物质环境进入。', ['录像','观察','装置'], ['劳动','身体','经济'], ['录像','装置'], 'Venice Biennale 2024 · Silver Lion', source2024],
  ['beatriz-milhazes', 'Beatriz Milhazes', '1960', 'Rio de Janeiro', '以层叠的圆形、花卉、装饰图案与高密度色彩建立绘画和拼贴系统，并扩展到建筑尺度装置。', ['绘画','拼贴','图案叠加'], ['装饰','色彩','现代主义'], ['绘画','装置'], 'Venice Biennale 2024 · Pavilion of Applied Arts', source2024],
  ['anna-maria-maiolino', 'Anna Maria Maiolino', '1942', 'São Paulo', '跨越素描、版画、摄影、电影、表演和黏土装置，以重复手工动作处理身体、语言、劳动与迁移。', ['重复动作','黏土塑形','版画'], ['身体','劳动','迁移'], ['雕塑','摄影','电影'], 'Venice Biennale 2024 · Golden Lion for Lifetime Achievement', source2024],
  ['nil-yalter', 'Nil Yalter', '1938', 'Paris', '从女性主义、迁移与劳动政治出发，在录像、摄影、文字、绘画和装置之间组织社会调查与身体经验。', ['录像','社会调查','文字'], ['迁移','女性主义','劳动'], ['录像','摄影','装置'], 'Venice Biennale 2024 · Golden Lion for Lifetime Achievement', source2024],
  ['samia-halaby', 'Samia Halaby', '1936', 'New York / Palestine', '以抽象绘画和数字实验发展颜色、运动与空间关系，同时长期书写和研究巴勒斯坦艺术史。', ['抽象绘画','数字实验','艺术史研究'], ['色彩','巴勒斯坦','运动'], ['绘画','数字作品'], 'Venice Biennale 2024 · Special Mention', source2024],
  ['la-chola-poblete', 'La Chola Poblete', '1989', 'Argentina', '通过水彩、绘画、表演和装置重新处理原住民身份、宗教图像、性别与殖民视觉传统。', ['水彩','表演','图像挪用'], ['原住民身份','性别','殖民史'], ['绘画','表演','装置'], 'Venice Biennale 2024 · Special Mention', source2024],
  ['kader-attia', 'Kader Attia', '1970', 'Berlin / Paris', '以雕塑、档案、摄影、电影与建筑性装置研究殖民创伤、修复观念以及现代制度如何塑造身体与文化。', ['档案研究','雕塑','影像'], ['殖民史','修复','创伤'], ['装置','雕塑','电影'], 'Venice Biennale 2026 · In Minor Keys', source2026]
] as const;

export const artistBatch25: Artist[] = records.map(([id,name,born,base,intro,methods,subjects,outputs,achievement,sourceUrl]) => ({
  id,name,born,base,intro,methods:[...methods],subjects:[...subjects],outputs:[...outputs],institutions:['La Biennale di Venezia'],achievements:[achievement],whyImportant:'作为威尼斯双年展节点补入数据库；后续继续扩展完整项目档案与跨机构关系。',projects:[{year:achievement.includes('2026')?'2026':'2024',title:achievement,type:'威尼斯双年展参展节点',facts:['依据威尼斯双年展官方艺术家名单建立参展记录。'],reading:'先建立制度节点，再逐步补充代表项目、材料与制作方法。'}],images:[],sourceUrl,sourceLabel:'La Biennale di Venezia'
}));

export const archiveBatch25: Record<string, ArtistArchive> = Object.fromEntries(artistBatch25.map(artist => [artist.id,{artistId:artist.id,projectCoverage:'1 个威尼斯双年展节点已索引',imageCoverage:'0 / 1 项目配图',note:'本轮优先补齐双年展人物索引；代表项目与制作动作将在后续批次继续深化。',projects:[{title:artist.projects[0].title,period:artist.projects[0].year,cluster:'威尼斯双年展 / 制度节点',summary:artist.intro,actions:['核对威尼斯双年展官方参展名单','建立艺术家与具体届次的关联'],sourceUrl:artist.sourceUrl,images:[],relations:[{kind:'展览',label:artist.projects[0].title,detail:artist.projects[0].year}]}],awards:artist.achievements.filter(x=>/Lion|Mention/.test(x)),exhibitions:artist.achievements,sources:[{label:'La Biennale di Venezia official artist list',url:artist.sourceUrl}]}]));
