import type { Artist, ArtworkImage, Project } from './data';
import type { ArtistArchive, ArchiveImage, ArchiveRelation } from './archiveData';

const image = (url: string, title: string, credit: string, sourceUrl: string, sourceLabel: string): ArtworkImage => ({ url, title, credit, sourceUrl, sourceLabel });
const project = (year: string, title: string, type: string, facts: string[], reading: string): Project => ({ year, title, type, facts, reading });
const img = (url: string, title: string, credit: string, sourceUrl: string, sourceLabel: string): ArchiveImage => ({ url, title, credit, sourceUrl, sourceLabel });
const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

export const artistBatch10: Artist[] = [
  {
    id: 'simone-leigh', name: 'Simone Leigh', born: '1967', base: 'New York',
    intro: '以陶瓷、青铜、建筑形态、表演与社会实践处理黑人女性主体性、照护、主权与被历史遗漏的知识。',
    methods: ['雕塑', '陶瓷', '青铜铸造', '建筑形态', '社会实践'], subjects: ['黑人女性', '主权', '照护', '历史', '非洲离散'], outputs: ['雕塑', '大型装置', '影像', '公共项目'],
    institutions: ['Venice Biennale', 'ICA Boston', 'Guggenheim'], achievements: ['Venice Biennale 2022 美国馆', 'Golden Lion for Best Participant 2022'],
    whyImportant: 'Leigh 把身体、器皿和建筑压到同一个雕塑语法中，并通过档案空白与“critical fabulation”重新构造黑人女性历史。',
    projects: [project('2022', 'Sovereignty', '美国馆 / 雕塑与建筑', ['为美国馆制作一整套新作。', '用青铜、陶瓷和茅草改造建筑外观。', '将黑人女性身体、器皿和非洲建筑形式结合。'], '国家馆不是若干单件作品的集合，而是一套完整空间叙事。')],
    images: [image('https://imagenes.elpais.com/resizer/v2/PN3RUXKQAACDZSGRO5XSPU4FBM.jpg?auth=c115db4216b4151e0626decedeabac2474743f48dbf6828cc8d4a2268d50c4ce&height=1470&smart=true&width=1960', 'Sovereignty — U.S. Pavilion', '© Simone Leigh / installation view', 'https://simoneleighvenice2022.org/sovereignty/', 'U.S. Pavilion project site')],
    sourceLabel: 'U.S. Pavilion / Venice 2022', sourceUrl: 'https://simoneleighvenice2022.org/sovereignty/'
  },
  {
    id: 'sonia-boyce', name: 'Sonia Boyce', born: '1962', base: 'London',
    intro: '通过绘画、摄影、参与式表演、录像和声音，把创作从单一作者转成多人即兴、互相聆听和共同生成。',
    methods: ['参与式艺术', '合作表演', '录像', '声音', '档案'], subjects: ['黑人女性', '声音', '合作', '英国身份', '表演'], outputs: ['多屏影像', '装置', '声音', '摄影'],
    institutions: ['Tate', 'Venice Biennale', 'Hauser & Wirth'], achievements: ['Turner Prize 1994 shortlist', 'Golden Lion for Best National Participation 2022'],
    whyImportant: '她适合研究“艺术家不必控制所有结果”。很多作品先设计参与条件，再让歌唱、谈话和即兴在现场生成。',
    projects: [project('2022', 'Feeling Her Way', '英国馆 / 多屏声音装置', ['邀请五位黑人英国女性歌手分别即兴。', '将录像、壁纸、金色几何结构和声音组织成沉浸空间。'], '作品核心不是歌手肖像，而是“如何一起工作”的过程被变成空间。')],
    images: [image('https://d2csxpduxe849s.cloudfront.net/media/7F8951FF-19D4-45D4-B982D6125B7E7BD3/947D6646-F621-48A1-807E7AD6CA9DE214/9136B01C-9CC4-49AD-B9F43485DFC7AD6B/web%20hires%20jpg%2072dpi-06.02.2023_Sonia_Boyce_Feeling_Her_Way_121.jpg', 'Feeling Her Way', '© Sonia Boyce / installation view', 'https://www.hauserwirth.com/artists/sonia-boyce/', 'Hauser & Wirth')],
    sourceLabel: 'Venice Biennale 2022', sourceUrl: 'https://www.labiennale.org/en/art/2022/national-participations/great-britain'
  },
  {
    id: 'stan-douglas', name: 'Stan Douglas', born: '1960', base: 'Vancouver / Los Angeles',
    intro: '用复杂摄影重演、电影、双频道影像和音乐系统重新构造历史事件，让过去以“可能发生的另一版本”回到现在。',
    methods: ['历史重演', '编排式摄影', '多频道影像', '数字合成', '研究型艺术'], subjects: ['城市', '历史', '政治', '骚乱', '音乐'], outputs: ['大型摄影', '双频道影像', '装置'],
    institutions: ['Venice Biennale', 'MoMA', 'Tate'], achievements: ['Canada Pavilion Venice 2022'],
    whyImportant: 'Douglas 的照片看似新闻瞬间，实际上常经过选角、搭景、群众调度与数字合成；“纪实感”因此是被精密制造出来的。',
    projects: [project('2022', '2011 ≠ 1848', '加拿大馆 / 历史重演', ['重演 2011 年伦敦、纽约、突尼斯、温哥华的社会动荡。', '使用大型编排摄影和双频道音乐影像。'], '他不把历史当成过去完成的事件，而是比较不同时代的政治形式怎样互相回声。')],
    images: [image('https://files.ocula.com/anzax/Content/Insights/2022/April/Venice%20Main%20Pavilions/MRC1851Canada.jpg', '2011 ≠ 1848 — Canada Pavilion', '© Stan Douglas / installation view', 'https://www.labiennale.org/en/art/2022/canada', 'Venice / Ocula documentation')],
    sourceLabel: 'Venice Biennale 2022', sourceUrl: 'https://www.labiennale.org/en/art/2022/canada'
  },
  {
    id: 'maria-eichhorn', name: 'Maria Eichhorn', born: '1962', base: 'Berlin / Zurich',
    intro: '以所有权、劳动制度、建筑历史、法律文件和机构结构作为材料，经常让“行政动作”本身成为作品。',
    methods: ['制度研究', '法律 / 所有权介入', '档案', '建筑介入', '概念艺术'], subjects: ['制度', '所有权', '劳动', '法西斯历史', '记忆'], outputs: ['装置', '档案', '建筑介入', '出版'],
    institutions: ['Venice Biennale', 'documenta', 'Chisenhale Gallery'], achievements: ['Germany Pavilion Venice 2022', 'documenta 14'],
    whyImportant: '她的创作往往不是制造一个“漂亮对象”，而是改变工作制度、产权状态或建筑可见性，让制度本身露出来。',
    projects: [project('2022', 'Relocating a Structure', '德国馆 / 建筑考古', ['揭开德国馆 1938 年改建所覆盖的早期建筑痕迹。', '挖开地面、暴露墙体，并组织反法西斯记忆路线。'], '她把国家馆建筑本身当作作品材料，直接追问国家代表制度的历史。')],
    images: [image('https://www.ifa.de/fileadmin/Content/images/kalender/ausstellungen/Biennale/biennale_venedig/7_DPV_MariaEichhorn.jpg', 'Relocating a Structure — German Pavilion', '© Maria Eichhorn / VG Bild-Kunst, photo Jens Ziehe', 'https://www.ifa.de/en/art/german-pavilion-venice-biennale/', 'ifa')],
    sourceLabel: 'German Pavilion 2022', sourceUrl: 'https://2022.deutscher-pavillon.org/en/'
  },
  {
    id: 'latifa-echakhch', name: 'Latifa Echakhch', born: '1974', base: 'Vevey / Martigny',
    intro: '用被烧毁、拆解、浸湿或逐渐消失的日常材料制造诗性装置，让政治符号通过物质变化而不是口号出现。',
    methods: ['装置', '材料转化', '现成物', '场域特定', '声音'], subjects: ['记忆', '政治符号', '时间', '音乐', '集体经验'], outputs: ['大型装置', '雕塑', '声音环境'],
    institutions: ['Venice Biennale', 'Tate', 'Kaufmann Repetto'], achievements: ['Switzerland Pavilion Venice 2022', 'Marcel Duchamp Prize 2013 winner'],
    whyImportant: '她经常让作品在展览期间呈现耗损、坍塌或消失，因此时间本身成为一种材料。',
    projects: [project('2022', 'The Concert', '瑞士馆 / 时间与声音环境', ['制作一组像演出结束后残留的雕塑与舞台。', '通过灯光和打击乐结构组织观众移动。'], '展览像一场已经发生或尚未发生的音乐会，观众面对的是事件的残影。')],
    images: [image('https://kaufmannrepetto.com/site/web/app/uploads/2022/04/latifa_echakhch-the_concert-venice_biennale-kaufmann_repetto-2022-13-1920x1280.jpg', 'The Concert — Swiss Pavilion', '© Latifa Echakhch / installation view', 'https://kaufmannrepetto.com/artist/latifa-echakhch/', 'Kaufmann Repetto')],
    sourceLabel: 'Venice Biennale 2022', sourceUrl: 'https://www.labiennale.org/en/art/2022/switzerland'
  },
  {
    id: 'francis-alys', name: 'Francis Alÿs', born: '1959', base: 'Mexico City',
    intro: '以步行、微小行为、绘画和录像把城市政治变成简单但精确的规则实验，长期拍摄不同地区儿童游戏。',
    methods: ['行为', '录像', '步行', '规则系统', '长期观察'], subjects: ['城市', '边界', '劳动', '儿童', '冲突'], outputs: ['录像', '行为记录', '绘画', '装置'],
    institutions: ['Venice Biennale', 'Tate Modern', 'MoMA'], achievements: ['Belgium Pavilion Venice 2022'],
    whyImportant: '很多作品可以被一句规则说清楚，但真正的复杂度来自规则进入现实后产生的阻力、偶然和时间。',
    projects: [project('1999–', 'Children’s Games', '长期录像档案', ['在全球不同地方持续拍摄儿童自发游戏。', '使用相对简洁的固定或跟随式录像。'], '游戏成为一种跨文化但高度地方化的身体知识，不需要成人解释才能成立。')],
    images: [image('https://www.arshake.com/wp-content/uploads/2022/07/DSC_8891.jpg', 'The Nature of the Game — Belgian Pavilion', '© Francis Alÿs / installation view', 'https://www.labiennale.org/en/art/2022/belgium', 'Venice / installation documentation')],
    sourceLabel: 'Venice Biennale 2022', sourceUrl: 'https://www.labiennale.org/en/art/2022/belgium'
  },
  {
    id: 'yuki-kihara', name: 'Yuki Kihara', born: '1975', base: 'Sāmoa',
    intro: '从 Fa’afafine 身份、殖民摄影和高更图像出发，通过自我表演、摄影 tableau、档案和录像重写太平洋视觉历史。',
    methods: ['自我表演', '编排式摄影', '档案挪用', '录像', '重演'], subjects: ['萨摩亚', 'Fa’afafine', '殖民', '气候', '性别'], outputs: ['摄影', '录像', '装置', '档案'],
    institutions: ['Venice Biennale', 'Metropolitan Museum of Art', 'Queensland Art Gallery'], achievements: ['New Zealand Pavilion Venice 2022'],
    whyImportant: '她不是简单“模仿高更”，而是让被殖民观看的太平洋身体重新控制服装、姿势、叙事和解释权。',
    projects: [project('2022', 'Paradise Camp', '新西兰馆 / tableau + 录像', ['制作十二幅饱和色 tableau 重新表演高更绘画。', '加入 Fa’afafine talk-show 录像与个人研究档案。'], '国家馆同时是摄影系列、影像节目和档案室。')],
    images: [image('https://artav.co.uk/wp-content/uploads/2023/06/Venice-Biennale-2022-New-Zealand-Pavilion-scaled.jpeg', 'Paradise Camp — New Zealand Pavilion', '© Yuki Kihara / installation view', 'https://www.labiennale.org/en/art/2022/national-participations/new-zealand', 'Venice / ArtAV documentation')],
    sourceLabel: 'Venice Biennale 2022', sourceUrl: 'https://www.labiennale.org/en/art/2022/national-participations/new-zealand'
  },
  {
    id: 'jonathas-de-andrade', name: 'Jonathas de Andrade', born: '1982', base: 'Recife',
    intro: '以摄影、录像、档案、参与式行动和博物馆式陈列研究巴西东北部的劳动、身体、语言和现代化神话。',
    methods: ['研究型艺术', '参与式摄影', '录像', '档案', '博物馆式陈列'], subjects: ['巴西', '劳动', '身体', '语言', '现代化'], outputs: ['摄影', '录像', '大型装置', '出版'],
    institutions: ['Venice Biennale', 'New Museum', 'Museu de Arte de São Paulo'], achievements: ['Brazil Pavilion Venice 2022'],
    whyImportant: '他常把社会研究变成非常具体的游戏、表演或物件系统，让“研究”不会只停在墙上文字。',
    projects: [project('2022', 'with the heart coming out of the mouth', '巴西馆 / 身体语言装置', ['从葡萄牙语中关于身体部位的俗语出发。', '把耳朵、嘴、心等语言隐喻做成巨型雕塑和影像。'], '语言不是说明文字，而被直接变成可以穿过和绕行的物体。')],
    images: [image('https://universes.art/fileadmin/_processed_/5/0/csm_14-Bra-1-DSC_2141-A_795c2db413.jpg', 'with the heart coming out of the mouth — Brazil Pavilion', '© Jonathas de Andrade / installation view', 'https://www.labiennale.org/en/art/2022/brazil', 'Venice / Universes.art documentation')],
    sourceLabel: 'Venice Biennale 2022', sourceUrl: 'https://www.labiennale.org/en/art/2022/brazil'
  }
];

export const archiveBatch10New: Record<string, ArtistArchive> = {
  'simone-leigh': { artistId: 'simone-leigh', projectCoverage: '4 个雕塑 / 社会实践 / 国家馆节点已完成第一轮 · 2014–2024', imageCoverage: '', note: '从社会实践到大型公共雕塑和 Venice 国家馆，先建立方法主线；后续继续补 individual sculptures。', projects: [
    { title: 'Free People’s Medical Clinic', cluster: 'social practice / care', period: '2014', summary: '以历史上的黑人女性照护组织为背景，把免费健康服务、讲座和艺术项目组织成临时社会空间。', actions: ['社区合作', '健康服务', '公共项目', '历史研究'], sourceUrl: 'https://creativetime.org/projects/free-peoples-medical-clinic/', images: [], relations: [] },
    { title: 'Anatomy of Architecture / Brick House', cluster: 'body / vessel / architecture', period: '2016–2019', summary: '将黑人女性身体、器皿和非洲建筑形态融合成大型雕塑。', actions: ['陶瓷与青铜', '建筑形态研究', '大型公共雕塑'], sourceUrl: 'https://www.thehighline.org/art/projects/simoneleigh/', images: [], relations: [rel('展览', 'High Line Plinth', 'Brick House, 2019')] },
    { title: 'Sovereignty', cluster: 'U.S. Pavilion / sculpture / historical gaps', period: '2022', summary: '为美国馆制作青铜与陶瓷新作，并以茅草结构改造馆舍外观，围绕黑人女性自我决定与历史空白。', actions: ['青铜铸造', '陶瓷', '建筑改造', '展览级整体编排'], sourceUrl: 'https://simoneleighvenice2022.org/sovereignty/', images: [img('https://imagenes.elpais.com/resizer/v2/PN3RUXKQAACDZSGRO5XSPU4FBM.jpg?auth=c115db4216b4151e0626decedeabac2474743f48dbf6828cc8d4a2268d50c4ce&height=1470&smart=true&width=1960', 'Sovereignty', '© Simone Leigh', 'https://simoneleighvenice2022.org/sovereignty/', 'U.S. Pavilion')], relations: [rel('展览', 'U.S. Pavilion — Venice Biennale', '2022'), rel('奖项', 'Golden Lion for Best Participant', '2022')] },
    { title: 'Loophole of Retreat / museum survey', cluster: 'collectivity / public program / survey', period: '2022–2024', summary: 'Venice 的三日 convening 与随后巡回 survey 把雕塑和黑人女性知识生产放在同一公共框架。', actions: ['学术与艺术 convening', '跨年代作品重编', '巡回展览'], sourceUrl: 'https://simoneleighvenice2022.org/loophole-of-retreat/', images: [], relations: [rel('展览', 'ICA Boston / Hirshhorn / LACMA', '2022–2024')] }
  ], awards: ['Golden Lion for Best Participant 2022'], exhibitions: ['U.S. Pavilion — Venice 2022', 'ICA Boston survey 2023'], sources: [{ label: 'Simone Leigh Venice 2022', url: 'https://simoneleighvenice2022.org/' }] },
  'sonia-boyce': { artistId: 'sonia-boyce', projectCoverage: '4 个绘画 / 声音档案 / 合作表演节点已完成第一轮 · 1980s–2022', imageCoverage: '', note: '重点追踪她从自我表征绘画转向参与式声音与合作创作。', projects: [
    { title: 'Early self-representation works', cluster: 'Black British identity / drawing', period: '1980s', summary: '早期大型粉彩和绘画以黑人女性形象、家庭和英国日常为核心。', actions: ['绘画', '自我表征', '家庭 / 流行文化图像'], sourceUrl: 'https://www.tate.org.uk/art/artists/sonia-boyce-794', images: [], relations: [] },
    { title: 'Devotional Collection', cluster: 'archive / Black British women in music', period: '1999–', summary: '持续收集黑人英国女性音乐人的唱片、海报、磁带和相关记忆，形成开放式流行音乐档案。', actions: ['口述 / 收藏', '唱片与印刷物档案', '长期扩充'], sourceUrl: 'https://www.soniaboyce.com/', images: [], relations: [] },
    { title: 'We Move in Her Way', cluster: 'participation / movement / improvisation', period: '2016–2017', summary: '通过工作坊和共同动作，让参与者在没有预设结果的条件下生成表演和影像。', actions: ['参与式工作坊', '录像', '共同即兴'], sourceUrl: 'https://www.soniaboyce.com/', images: [], relations: [] },
    { title: 'Feeling Her Way', cluster: 'voice / collaboration / national pavilion', period: '2022', summary: '五位歌手在不同录音空间即兴，影像和声音被重新组合成英国馆的多屏环境。', actions: ['歌手邀请', '即兴录音', '多屏剪辑', '壁纸与金色结构'], sourceUrl: 'https://www.labiennale.org/en/art/2022/national-participations/great-britain', images: [img('https://d2csxpduxe849s.cloudfront.net/media/7F8951FF-19D4-45D4-B982D6125B7E7BD3/947D6646-F621-48A1-807E7AD6CA9DE214/9136B01C-9CC4-49AD-B9F43485DFC7AD6B/web%20hires%20jpg%2072dpi-06.02.2023_Sonia_Boyce_Feeling_Her_Way_121.jpg', 'Feeling Her Way', '© Sonia Boyce', 'https://www.hauserwirth.com/artists/sonia-boyce/', 'Hauser & Wirth')], relations: [rel('展览', 'Great Britain Pavilion — Venice', '2022'), rel('奖项', 'Golden Lion for Best National Participation', '2022')] }
  ], awards: ['Golden Lion for Best National Participation 2022'], exhibitions: ['Great Britain Pavilion — Venice 2022'], sources: [{ label: 'Venice 2022 Great Britain', url: 'https://www.labiennale.org/en/art/2022/national-participations/great-britain' }] },
  'stan-douglas': { artistId: 'stan-douglas', projectCoverage: '4 个摄影重演 / 多频道影像节点已完成第一轮 · 2001–2022', imageCoverage: '', note: '按历史重演、电影系统和音乐同步结构整理。', projects: [
    { title: 'Every Building on 100 West Hastings', cluster: 'urban survey / panoramic photography', period: '2001', summary: '以连续街景记录 Vancouver Downtown Eastside 一个街区，把城市更新与建筑表面压成横向图像。', actions: ['多张街景拍摄', '数字拼接', '城市档案'], sourceUrl: 'https://www.moma.org/artists/7027-stan-douglas', images: [], relations: [rel('收藏', 'MoMA', 'collection context')] },
    { title: 'Inconsolable Memories', cluster: 'film / repetition / history', period: '2005', summary: '使用双重叙事和循环结构把古巴历史、电影记忆和重复场景交织。', actions: ['电影拍摄', '双循环结构', '历史研究'], sourceUrl: 'https://www.davidzwirner.com/artists/stan-douglas', images: [], relations: [] },
    { title: 'Luanda-Kinshasa', cluster: 'music / fictive recording session', period: '2013', summary: '搭建仿 Columbia 30th Street Studio 的空间，让音乐家演奏一场不存在的 1970 年代跨大西洋录音。', actions: ['历史录音室重建', '多机位拍摄', '音乐表演', '循环剪辑'], sourceUrl: 'https://www.davidzwirner.com/artists/stan-douglas', images: [], relations: [] },
    { title: '2011 ≠ 1848', cluster: 'staged unrest / national pavilion', period: '2022', summary: '四张巨型照片重演 2011 年四地抗争，双频道录像连接 Cairo 与 London 的音乐表演。', actions: ['群众选角', '历史地点研究', '大型编排摄影', '数字合成', '双频道视频'], sourceUrl: 'https://www.labiennale.org/en/art/2022/canada', images: [img('https://files.ocula.com/anzax/Content/Insights/2022/April/Venice%20Main%20Pavilions/MRC1851Canada.jpg', '2011 ≠ 1848', '© Stan Douglas', 'https://www.labiennale.org/en/art/2022/canada', 'Venice / Ocula documentation')], relations: [rel('展览', 'Canada Pavilion — Venice', '2022')] }
  ], awards: [], exhibitions: ['Canada Pavilion — Venice 2022'], sources: [{ label: 'Venice 2022 Canada', url: 'https://www.labiennale.org/en/art/2022/canada' }] },
  'maria-eichhorn': { artistId: 'maria-eichhorn', projectCoverage: '4 个制度 / 劳动 / 产权 / 建筑节点已完成第一轮 · 2001–2022', imageCoverage: '', note: '把行政、法律与建筑操作视为具体创作动作。', projects: [
    { title: 'Money at Kunsthalle Bern', cluster: 'institution / money / redistribution', period: '2001', summary: '围绕艺术机构经费、货币和资源分配，把经济结构本身纳入作品。', actions: ['机构财务研究', '货币 / 行政操作'], sourceUrl: 'https://www.maria-eichhorn.de/', images: [], relations: [] },
    { title: '5 weeks, 25 days, 175 hours', cluster: 'labour / institutional closure', period: '2016', summary: 'Chisenhale Gallery 在展期关闭，员工仍获薪，作品通过停止劳动与公共开放显露文化机构的工作制度。', actions: ['机构协商', '展期关闭', '带薪不工作', '制度文本'], sourceUrl: 'https://chisenhale.org.uk/exhibition/maria-eichhorn/', images: [], relations: [rel('展览', 'Chisenhale Gallery', '2016')] },
    { title: 'Rose Valland Institute', cluster: 'documenta / expropriated property / archive', period: '2017–', summary: '研究纳粹时期被剥夺的犹太财产及其今天的所有权状态，建立持续开放的研究机构。', actions: ['档案调查', '产权追踪', '公众征集', '长期研究平台'], sourceUrl: 'https://www.documenta14.de/en/artists/13576/maria-eichhorn', images: [], relations: [rel('展览', 'documenta 14', '2017')] },
    { title: 'Relocating a Structure', cluster: 'German Pavilion / architectural history', period: '2022', summary: '揭开德国馆 1909 与 1938 两层建筑结构，保留开挖痕迹并把城市反法西斯记忆路线纳入项目。', actions: ['建筑勘查', '拆除表层', '地面开挖', '历史导览', '出版'], sourceUrl: 'https://2022.deutscher-pavillon.org/en/exhibition/', images: [img('https://www.ifa.de/fileadmin/Content/images/kalender/ausstellungen/Biennale/biennale_venedig/7_DPV_MariaEichhorn.jpg', 'Relocating a Structure', '© Maria Eichhorn / VG Bild-Kunst', 'https://www.ifa.de/en/art/german-pavilion-venice-biennale/', 'ifa')], relations: [rel('展览', 'Germany Pavilion — Venice', '2022')] }
  ], awards: [], exhibitions: ['documenta 14', 'Germany Pavilion — Venice 2022'], sources: [{ label: 'German Pavilion 2022', url: 'https://2022.deutscher-pavillon.org/en/' }] },
  'latifa-echakhch': { artistId: 'latifa-echakhch', projectCoverage: '4 个政治符号 / 消失材料 / 声音环境节点已完成第一轮', imageCoverage: '', note: '重点追踪材料如何被浸湿、破坏、烧毁或逐渐失效。', projects: [
    { title: 'À chaque stencil une révolution', cluster: 'political poster / dissolved pigment', period: '2007', summary: '以复写纸 / 墙面颜料与政治印刷的历史联系制造逐渐溶解的蓝色表面。', actions: ['墙面覆盖', '水 / 颜料处理', '政治印刷史引用'], sourceUrl: 'https://www.tate.org.uk/art/artists/latifa-echakhch-15092', images: [], relations: [] },
    { title: 'Fantasia', cluster: 'ritual / aftermath / installation', period: '2010s', summary: '使用庆典与仪式结束后的残留物，使集体事件以“之后”的状态进入展场。', actions: ['现成物', '地面散落', '空间编排'], sourceUrl: 'https://kaufmannrepetto.com/artist/latifa-echakhch/', images: [], relations: [] },
    { title: 'Falling, Lovely and Beautiful', cluster: 'destruction / suspended fragments', period: '2010s', summary: '把被破坏、烧灼或悬挂的物质残片组织成关于坠落和失去的空间。', actions: ['材料破坏', '悬挂', '场域特定安装'], sourceUrl: 'https://kaufmannrepetto.com/artist/latifa-echakhch/', images: [], relations: [] },
    { title: 'The Concert', cluster: 'Swiss Pavilion / sound / temporal installation', period: '2022', summary: '观众经过一个逐渐进入黑暗、再像音乐会结束般留下残骸的环境。', actions: ['雕塑场景', '灯光时间线', '打击乐合作', '碎屑 / 临时材料'], sourceUrl: 'https://www.labiennale.org/en/art/2022/switzerland', images: [img('https://kaufmannrepetto.com/site/web/app/uploads/2022/04/latifa_echakhch-the_concert-venice_biennale-kaufmann_repetto-2022-13-1920x1280.jpg', 'The Concert', '© Latifa Echakhch', 'https://kaufmannrepetto.com/artist/latifa-echakhch/', 'Kaufmann Repetto')], relations: [rel('展览', 'Switzerland Pavilion — Venice', '2022')] }
  ], awards: ['Prix Marcel Duchamp 2013'], exhibitions: ['Switzerland Pavilion — Venice 2022'], sources: [{ label: 'Venice 2022 Switzerland', url: 'https://www.labiennale.org/en/art/2022/switzerland' }] },
  'francis-alys': { artistId: 'francis-alys', projectCoverage: '5 个步行 / 行为 / 儿童游戏节点已完成第一轮 · 1997–2022', imageCoverage: '', note: '按“简单规则进入复杂现实”的方法线整理。', projects: [
    { title: 'Paradox of Praxis 1', cluster: 'walking / melting ice', period: '1997', summary: '在 Mexico City 推着一大块冰行走直到它完全融化。', actions: ['设定单一规则', '城市步行', '录像记录'], sourceUrl: 'https://www.moma.org/artists/16842-francis-alys', images: [], relations: [] },
    { title: 'When Faith Moves Mountains', cluster: 'collective action / landscape', period: '2002', summary: '数百名志愿者在 Lima 郊外共同铲动沙丘，使山体只移动极小距离。', actions: ['大规模参与者组织', '统一工具', '录像 / 摄影记录'], sourceUrl: 'https://www.tate.org.uk/art/artworks/alys-when-faith-moves-mountains-t12193', images: [], relations: [rel('收藏', 'Tate', 'collection')] },
    { title: 'The Green Line', cluster: 'border / walking / paint', period: '2004', summary: '沿 1948 年耶路撒冷停火边界行走，让漏漆罐在地面留下绿色线。', actions: ['历史边界研究', '步行', '滴漆', '录像'], sourceUrl: 'https://francisalys.com/the-green-line/', images: [], relations: [] },
    { title: 'Children’s Games', cluster: 'global video archive / play', period: '1999–', summary: '持续二十多年拍摄不同国家儿童自己发明或继承的游戏。', actions: ['长期旅行观察', '简洁录像', '按游戏编号归档'], sourceUrl: 'https://francisalys.com/childrens-games/', images: [], relations: [] },
    { title: 'The Nature of the Game', cluster: 'Belgian Pavilion / distributed video', period: '2022', summary: '把 Children’s Games 扩展成多个大小不同的屏幕，让游戏在国家馆空间中同时发生。', actions: ['多屏装置', '跨地域影像编辑', '空间声音'], sourceUrl: 'https://www.labiennale.org/en/art/2022/belgium', images: [img('https://www.arshake.com/wp-content/uploads/2022/07/DSC_8891.jpg', 'The Nature of the Game', '© Francis Alÿs', 'https://www.labiennale.org/en/art/2022/belgium', 'Venice / installation documentation')], relations: [rel('展览', 'Belgium Pavilion — Venice', '2022')] }
  ], awards: [], exhibitions: ['Belgium Pavilion — Venice 2022'], sources: [{ label: 'Francis Alÿs official projects', url: 'https://francisalys.com/' }] },
  'yuki-kihara': { artistId: 'yuki-kihara', projectCoverage: '4 个 Fa’afafine / 殖民图像 / tableau 节点已完成第一轮 · 2004–2022', imageCoverage: '', note: '从工作室自我表演到高更再演，重点看谁控制太平洋身体的图像。', projects: [
    { title: 'Fa’afafine: In the Manner of a Woman', cluster: 'self-performance / studio portrait', period: '2004–2005', summary: '以工作室肖像和连续姿势处理 Fa’afafine 身体、观看与西方分类。', actions: ['自我表演', '工作室灯光', '连续肖像'], sourceUrl: 'https://www.metmuseum.org/art/collection/search?q=Yuki%20Kihara', images: [], relations: [] },
    { title: 'A Study of a Samoan Savage', cluster: 'colonial ethnography / reenactment', period: '2015', summary: '挪用十九世纪殖民人体测量和民族志姿势，让艺术家身体反演“科学观看”。', actions: ['殖民图像研究', '姿势重演', '摄影 / 录像'], sourceUrl: 'https://www.yukikihara.ws/', images: [], relations: [] },
    { title: 'Where do we come from? What are we? Where are we going?', cluster: 'Gauguin / climate / Samoa', period: '2013–', summary: '把高更的太平洋想象与当代萨摩亚环境和身份经验并置。', actions: ['艺术史挪用', 'tableau 摄影', '地方合作'], sourceUrl: 'https://www.yukikihara.ws/', images: [], relations: [] },
    { title: 'Paradise Camp', cluster: 'New Zealand Pavilion / tableau + talk show', period: '2022', summary: '十二幅 tableau 重新表演高更图像，并由 Fa’afafine 参与者在五集 talk show 中评论作品与档案。', actions: ['tableau staged photography', '服装 / 布景', '录像访谈', '档案展示'], sourceUrl: 'https://www.labiennale.org/en/art/2022/national-participations/new-zealand', images: [img('https://artav.co.uk/wp-content/uploads/2023/06/Venice-Biennale-2022-New-Zealand-Pavilion-scaled.jpeg', 'Paradise Camp', '© Yuki Kihara', 'https://www.labiennale.org/en/art/2022/national-participations/new-zealand', 'Venice / ArtAV documentation')], relations: [rel('展览', 'New Zealand Pavilion — Venice', '2022')] }
  ], awards: [], exhibitions: ['New Zealand Pavilion — Venice 2022'], sources: [{ label: 'Venice 2022 New Zealand', url: 'https://www.labiennale.org/en/art/2022/national-participations/new-zealand' }] },
  'jonathas-de-andrade': { artistId: 'jonathas-de-andrade', projectCoverage: '5 个劳动 / 参与 / 博物馆批判节点已完成第一轮 · 2012–2022', imageCoverage: '', note: '按摄影、参与行动、录像和博物馆式分类之间的切换整理。', projects: [
    { title: 'O Levante / The Uprising', cluster: 'horses / city / collective action', period: '2012–2013', summary: '组织马车进入 Recife 市区，借一次真实公共行动碰撞现代城市规则与劳动现实。', actions: ['参与者组织', '公共空间行动', '摄影 / 录像记录'], sourceUrl: 'https://www.jonathasdeandrade.com.br/', images: [], relations: [] },
    { title: '40 Nego Bom É Um Real', cluster: 'labour / portrait / popular game', period: '2013', summary: '从东北部糖果包装和俗语出发，以四十位男性肖像及劳动动作重新组织阶级、身体与语言。', actions: ['肖像', '文字', '分类展示'], sourceUrl: 'https://www.jonathasdeandrade.com.br/', images: [], relations: [] },
    { title: 'Museu do Homem do Nordeste', cluster: 'fictional museum / regional identity', period: '2013–', summary: '借用真实博物馆名称和分类逻辑，重新审视“东北男性”被制度化描述的方式。', actions: ['档案', '物件', '摄影', '博物馆陈列模拟'], sourceUrl: 'https://www.jonathasdeandrade.com.br/', images: [], relations: [] },
    { title: 'O Peixe / The Fish', cluster: 'fishermen / ritual / video', period: '2016', summary: '渔民捕到鱼后把它抱在胸前直到死亡，纪录动作介于真实劳动、导演和仪式之间。', actions: ['渔民合作', '35mm film / video', '重复仪式动作'], sourceUrl: 'https://www.newmuseum.org/exhibitions/view/jonathas-de-andrade-the-fish', images: [], relations: [rel('展览', 'New Museum', '2017')] },
    { title: 'with the heart coming out of the mouth', cluster: 'Brazil Pavilion / idiom / body', period: '2022', summary: '把葡萄牙语身体俗语变成巨型耳朵、舌、心脏等物件和影像，构造一个荒诞的国家身体。', actions: ['语言采集', '巨型雕塑', '影像', '空间编排'], sourceUrl: 'https://www.labiennale.org/en/art/2022/brazil', images: [img('https://universes.art/fileadmin/_processed_/5/0/csm_14-Bra-1-DSC_2141-A_795c2db413.jpg', 'Brazil Pavilion', '© Jonathas de Andrade', 'https://www.labiennale.org/en/art/2022/brazil', 'Venice / Universes.art documentation')], relations: [rel('展览', 'Brazil Pavilion — Venice', '2022')] }
  ], awards: [], exhibitions: ['Brazil Pavilion — Venice 2022'], sources: [{ label: 'Venice 2022 Brazil', url: 'https://www.labiennale.org/en/art/2022/brazil' }] }
};
