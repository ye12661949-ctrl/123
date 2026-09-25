import { foamResearchArtists } from './foamResearchBatch';
import { foamFocusArtists } from './foamFocusBatch';
import { artistBatch26, archiveBatch26 } from './biennaleExpansion26';
import { venice2026Artists } from './venice2026Complete';
import { veniceHistoricalArtists } from './veniceHistoricalComplete';
import { bindPhotoEditionCanonicalIds, photoEditionArtists } from './photoEditionRosters';
import { photoRosterImmediateArtists } from './photoRosterImmediate';
import { otherBiennaleArtists } from './otherBiennaleComplete';
import { foamTalent2016Artists } from './foamTalent2016';
import { artistBatch25, archiveBatch25 } from './biennaleExpansion25';
import { artistBatch24, archiveBatch24 } from './expansionBatch24';
import { artistBatch23, archiveBatch23, archiveExtensions23 } from './expansionBatch23';
import { artistBatch22, archiveBatch22, archiveExtensions22 } from './expansionBatch22';
import { artistBatch21, archiveBatch21 } from './expansionBatch21';
import { artistBatch20, archiveBatch20 } from './expansionBatch20';
import { artistBatch19 } from './expansionBatch19';
import { expandedArtists } from './expandedData';
import { globalArtists } from './globalData';
import { circuitArtists } from './circuitArtists';
import { circuitArtists2 } from './circuitArtists2';
import { researchArtists, researchArchives } from './researchExpansion';
import { biennaleArtists } from './biennaleArtists';
import { newResearchArtists } from './researchExpansion2';
import { artistBatch9 } from './expansionBatch9';
import { artistBatch10 } from './expansionBatch10';
import { artistBatch11 } from './expansionBatch11';
import { artistBatch12 } from './expansionBatch12';
import { artistBatch13 } from './expansionBatch13';
import { artistBatch14 } from './expansionBatch14';
import { artistBatch15, archiveBatch15 } from './expansionBatch15';
import { artistBatch16, archiveBatch16, wearingExtension16 } from './expansionBatch16';
import { artistBatch18 } from './expansionBatch18';
import { artistBatch17, archiveBatch17, archiveExtensions17 } from './expansionBatch17';
import { archiveBatch5 } from './archiveBatch5';

export type Project = {
  year: string;
  title: string;
  type: string;
  facts: string[];
  reading: string;
};

export type ArtworkImage = {
  url: string;
  title: string;
  credit: string;
  sourceUrl: string;
  sourceLabel: string;
};

export type Artist = {
  id: string;
  name: string;
  chineseName?: string;
  born: string;
  base: string;
  intro: string;
  methods: string[];
  subjects: string[];
  outputs: string[];
  institutions: string[];
  achievements: string[];
  whyImportant: string;
  projects: Project[];
  images: ArtworkImage[];
  sourceLabel: string;
  sourceUrl: string;
};

const image = (url: string, title: string, credit: string, sourceUrl: string, sourceLabel: string): ArtworkImage => ({ url, title, credit, sourceUrl, sourceLabel });
const project = (year: string, title: string, type: string, facts: string[], reading: string): Project => ({ year, title, type, facts, reading });

const coreArtists: Artist[] = [
  {
    id: 'laia-abril', name: 'Laia Abril', born: '1986', base: 'Barcelona',
    intro: '以长期研究为核心，把摄影、写作、声音、档案与展览装置组织成一个证据系统。',
    methods: ['研究型摄影', '档案', '文本', '声音', '装置', '摄影书'], subjects: ['身体', '性别', '制度', '暴力', '医疗', '记忆'], outputs: ['摄影书', '展览装置', '影像', '文本档案'], institutions: ['Foam', 'Aperture', 'Centre Pompidou', 'Deutsche Börse'],
    achievements: ['Foam Paul Huf Award 2020', '西班牙国家摄影奖 2023', 'Paris Photo–Aperture Book of the Year 2018', 'Deutsche Börse Prize 2019 入围'],
    whyImportant: '她不是先拍出一组图再寻找主题，而是先建立问题、证据和材料关系，再决定哪些内容应当以照片、文字、声音、书或空间出现。很适合研究“摄影如何变成研究系统”。',
    projects: [project('2016', 'On Abortion', 'A History of Misogyny · Chapter One', ['围绕无法获得安全合法堕胎所造成的后果展开长期研究。', '把历史材料、当代案例、摄影、文字与音频证据放在同一项目中。', '2018 年出版同名摄影书，并形成可进入展览空间的版本。'], '重点不是某一张“代表作”，而是不同证据如何相互校正、补充甚至制造冲突。'), project('2022', 'On Rape', 'A History of Misogyny · Chapter Two', ['把视觉叙事从受害者身体转向法律、制度与社会结构。', '结合概念肖像、证词、历史材料与制度性文本。'], '她主动改变“应该拍谁”的问题：不再把创伤视觉化，而是追踪生产创伤的制度。'), project('2024', 'On Mass Hysteria', 'A History of Misogyny · Chapter Three', ['延续长期章节式研究。', '项目同时进入摄影书和机构展览语境。'], '三个章节可以连起来看：她的核心方法不是风格一致，而是研究结构一致。')],
    images: [image('https://media.internazionale.it/images/2016/09/05/128774-md.jpg', 'On Abortion — exhibition installation', '© Laia Abril / exhibition view', 'https://www.internazionale.it/opinione/rosy-santella/2016/09/21/aborto-foto-laia-abril', 'Internazionale')],
    sourceLabel: '艺术家官网', sourceUrl: 'https://www.laiaabril.com/'
  },
  {
    id: 'daisuke-yokota', name: 'Daisuke Yokota', chineseName: '横田大辅', born: '1983', base: 'Tokyo',
    intro: '不断复制、重拍、冲洗、扫描和叠加图像，让摄影的生成过程本身成为作品。',
    methods: ['实验摄影', '无相机摄影', '再摄影', '暗房', '扫描', '数字叠加'], subjects: ['图像生产', '记忆', '物质性', '时间'], outputs: ['摄影书', '照片', '装置', '现场实验'], institutions: ['Foam'], achievements: ['Foam Talent 2013', 'Foam Talent 2016', 'Foam Paul Huf Award 2016'],
    whyImportant: '他特别适合被放在“摄影不是拍摄，而是处理”这条线上。观看时应追踪图像经历了几次转译，而不是只判断最终画面像不像某种风格。',
    projects: [project('2013', 'Nocturnes', '实验摄影系列', ['重拍已有照片。', '在胶片冲洗阶段改变显影时间。', '之后扫描，再在 Photoshop 中进行图层叠加。'], '原始拍摄只是入口；真正的作品发生在反复复制和损耗中。'), project('2014', 'Site / Cloud', '展览 / 图像实验', ['将高度处理后的图像带入展览空间。', '图像的颗粒、失真和物质变化成为观看对象。'], '可以和传统“拍摄对象—照片”逻辑对照：这里对象逐渐退场，处理链条成为主体。'), project('2017', 'Matter', '材料 / 空间实验', ['三组装置围绕摄影的触觉和体量展开。', '作品把胶片、印相纸、化学过程和空间本身推到前台。'], '理解无相机摄影时很有用：不是没有摄影，而是把摄影拆回材料、化学和时间。')],
    images: [image('https://www.foam.org/_next/image?q=80&url=https%3A%2F%2Fa.storyblok.com%2Ff%2F113697%2F1772x1181%2Fd1624c1bfc%2Flr_daisuke_yokota_foam_by_cvdk_01.jpg&w=1920', 'Matter — installation view', 'Photo Christian van der Kooy / Foam', 'https://www.foam.org/artists/daisuke-yokota', 'Foam')],
    sourceLabel: 'Foam 艺术家档案', sourceUrl: 'https://www.foam.org/artists/daisuke-yokota'
  },
  {
    id: 'lebohang-kganye', name: 'Lebohang Kganye', born: '1990', base: 'Johannesburg',
    intro: '从家庭相册、口述史和南非历史出发，把照片变成表演、剪影、纸偶、舞台和空间装置。',
    methods: ['家庭档案', '拼贴', '表演摄影', '装置', '剪影', '动态图像'], subjects: ['家庭', '记忆', '殖民', '身份', '地方', '口述史'], outputs: ['摄影', '空间装置', '动画', '拼贴', '纺织 / patchwork'], institutions: ['Foam', 'Images Vevey', 'Camera Austria'], achievements: ['Foam Paul Huf Award 2022', 'Grand Prix Images Vevey 2021/22', 'Camera Austria Award 2019'],
    whyImportant: '她展示了家庭档案并不只能“被展示”。旧照片可以被重新表演、切割、立起来、投影、变成舞台，使私人记忆进入更大的殖民与国家历史。',
    projects: [project('2013', 'Ke Lefa Laka: Her-Story', '家庭档案 / 自我表演', ['以家庭照片和母亲形象为重要入口。', '艺术家通过身体进入过去的家庭影像与记忆结构。'], '关键不是“复原母亲”，而是让现在的身体和旧图像处在同一个不稳定的时间层里。'), project('2023', 'Haufi nyana? I’ve come to take you home', 'Foam 个展 / 多媒介装置', ['展览同时出现摄影蒙太奇、空间装置、动画与 patchwork。', '家庭微观史被放进南非殖民与种族隔离的更大历史中。'], '她的脉络不是从摄影走向“别的媒介”，而是持续追问：一张家庭照片还能变成什么。')],
    images: [image('https://www.designindaba.com/sites/default/files/styles/scaledlarge/public/node/news/23677/gallery/1lebohang-kganyenailcutter.jpg?itok=L1gD4aFD', 'Ke Lefa Laka', '© Lebohang Kganye', 'https://www.designindaba.com/articles/creative-work/lebohang-kganye-unpacks-her-familys-journey-migration', 'Design Indaba')],
    sourceLabel: 'Foam 艺术家档案', sourceUrl: 'https://www.foam.org/artists/lebohang-kganye'
  },
  {
    id: 'liz-deschenes', name: 'Liz Deschenes', born: '1966', base: 'New York',
    intro: '研究摄影、建筑与展示空间之间的关系，把照片从“图像窗口”变成会反光、占据空间的物体。',
    methods: ['无相机摄影', 'Photogram', '场域特定', '装置', '银盐材料'], subjects: ['观看机制', '摄影史', '时间', '建筑', '图像生产'], outputs: ['Photogram', '墙面装置', '空间介入'], institutions: ['Whitney Biennial'], achievements: ['Whitney Biennial 2012'],
    whyImportant: '如果你想理解“摄影装置”和“无相机摄影”为什么不只是形式实验，她是非常清楚的案例：作品尺寸、墙面、建筑和观众移动共同决定照片是什么。',
    projects: [project('2009', 'Tilt / Swing', 'Photogram / 场域特定', ['以无相机曝光形成银色摄影表面。', '作品被置于墙、地面与空间不同位置。'], '照片不再只是承载图像的平面，而成为建筑里的反射体。'), project('2012', 'Untitled — Whitney Biennial', '四联 Photogram', ['作品与 Whitney Breuer 建筑直接发生关系。', '不以再现某个外部对象为目标。'], '重点从“照片里有什么”转到“照片在哪里、怎样反射你、你如何经过它”。')],
    images: [image('https://whitneymedia.org/assets/image/821813/small_deschenesweb_938.jpg', 'Tilt / Swing — installation view', '© Liz Deschenes', 'https://whitney.org/exhibitions/2012-biennial/Liz-Deschenes', 'Whitney Museum')],
    sourceLabel: 'Whitney Museum 艺术家档案', sourceUrl: 'https://whitney.org/artists/9359'
  },
  {
    id: 'trevor-paglen', name: 'Trevor Paglen', born: '1974', base: 'New York / San Francisco',
    intro: '把监控、军事基础设施、训练数据集和机器视觉转化成可见的研究对象。',
    methods: ['研究型摄影', '数据集', '机器视觉', '档案', '算法', '装置'], subjects: ['AI', '监控', '军事', '权力', '不可见系统', '图像生产'], outputs: ['摄影', '数据图像', '装置', '研究项目'], institutions: ['Pace', 'MoMA', 'de Young Museum'], achievements: ['Uncanny Valley, de Young Museum 2020'],
    whyImportant: '他把“图像给谁看”这个问题推到机器层面：很多当代图像首先是给算法读取，而不是给人观看。摄影因此和数据基础设施、军事与分类权力连接起来。',
    projects: [project('2017', 'It Began as a Military Experiment', '训练数据 / 面部识别', ['从 FERET 人脸数据库中筛选图像。', '对肖像进行修饰与色彩校正，再使用算法标记人脸关键点。'], '真正的创作动作是进入一个原本为机器训练而存在的图像系统，并重新组织它的可见性。'), project('2019', 'They Took the Faces from the Accused and the Dead…', '训练图像 / 机构档案', ['追踪面部识别研发中使用的囚犯与被告 mugshot 数据。', '以大尺幅输出和墙面组合重新呈现训练图像。'], '作品把“数据集”从技术背景转成政治材料。')],
    images: [image('https://www.moma.org/d/c/installation_images/W1siZiIsIjQ1MjEwMiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA3MCAtcmVzaXplIDU5NHgzOTleIC1ncmF2aXR5IENlbnRlciAtY3JvcCA1OTR4Mzk5KzArMCJdXQ.jpg?sha=2cf9063de074fd7a', 'It Began as a Military Experiment — installation', '© Trevor Paglen', 'https://www.moma.org/collection/works/275173', 'MoMA')],
    sourceLabel: 'Paglen Studio', sourceUrl: 'https://paglen.studio/2020/04/09/it-began-as-a-military-experiment/'
  },
  {
    id: 'tyler-mitchell', name: 'Tyler Mitchell', born: '1995', base: 'New York',
    intro: '以精心组织的肖像、服装、自然环境与群体场景，构造关于黑人休闲、亲密、青春和可能未来的图像。',
    methods: ['编排式摄影', '肖像', '时尚摄影', '场景建构', '编辑 / sequence'], subjects: ['亲密关系', '黑人生活', '青春', '休闲', '身体', '想象未来'], outputs: ['摄影', '展览', '出版', '悬挂式装置'], institutions: ['Foam', 'ICP', 'Gagosian'], achievements: ['I Can Make You Feel Good, Foam 2019', 'I Can Make You Feel Good Pt. 2, ICP 2020'],
    whyImportant: '他适合研究“时尚摄影何时进入当代艺术语境”。不能只看光线和颜色，而要看人物被安排在怎样的社会空间里、动作有多日常、系列如何共同构造一种原本稀缺的生活图景。',
    projects: [project('2019', 'I Can Make You Feel Good', 'Foam 个展 / 长期图像脉络', ['将肖像、群体场景、自然环境与服装共同组织。', '画面反复出现休息、游戏、亲密与户外空间。'], '不要只把“柔和、梦幻”当风格词；更关键的是这些视觉条件在允许什么样的身体状态出现。'), project('2020', 'I Can Make You Feel Good Pt. 2', 'ICP 个展 / 展示实验', ['大尺幅图像以悬挂、布面与空间路径被重新组织。'], '比较杂志单图、摄影书和美术馆展览之间，同一批图像如何改变意义。')],
    images: [image('https://images.squarespace-cdn.com/content/v1/5702ab9d746fb9634796c9f9/1580248318573-NJ3T9K2NAGPKK45ZXG0I/IMG_0615.jpg?format=1000w', 'I Can Make You Feel Good — ICP installation', '© Tyler Mitchell / installation view', 'https://museemagazine.com/culture/2020/1/28/art-out-contact-high-at-icp-5c2gm-3nc85', 'Musée Magazine')],
    sourceLabel: 'Gagosian 艺术家档案', sourceUrl: 'https://gagosian.com/artists/tyler-mitchell/'
  },
  {
    id: 'adam-rouhana', name: 'Adam Rouhana', born: '1991', base: 'Jerusalem / London',
    intro: '在巴勒斯坦日常生活、记忆与再现政治之间工作，强调普通生活本身的主体性。',
    methods: ['纪实摄影', '长期项目', '肖像', '编辑 / sequence'], subjects: ['家庭', '地方', '巴勒斯坦', '日常生活', '占领', '童年'], outputs: ['摄影', '摄影书', '展览'], institutions: ['Foam', 'Venice Biennale', 'Rencontres d’Arles', 'V&A'], achievements: ['Foam Talent 2026', '60th Venice Art Biennale 参展', 'V&A Jameel Fellow'],
    whyImportant: '如果只把政治题材拍成“事件证据”，很容易让人物再次成为符号。Rouhana 更值得看的是他怎样把游戏、家庭、身体和景观的普通瞬间留在政治结构内部，而不让它们被政治完全吞掉。',
    projects: [project('2022–', 'Before Freedom', '长期纪实 / 再现政治', ['在巴勒斯坦持续拍摄日常生活。', '图像在亲密经验、空间限制与历史符号之间切换。'], '研究时可以问：政治现实进入作品的方式，是通过“发生了什么”，还是通过人物仍然如何生活？')],
    images: [image('https://static.frieze.com/files/inline-images/Adam%20Rouhana%20Before%20Freedom%202.jpeg?VersionId=BBLWiqhSEBfNZP8BtM3qvYyWufAUAhyc', 'A Lion’s Watermelon', '© Adam Rouhana', 'https://www.frieze.com/no9-cork-street/freedom-adam-rouhana-curated-amah-rose-abrams', 'Frieze')],
    sourceLabel: 'Foam Talent 2026', sourceUrl: 'https://www.foam.org/nl/articles/foam-talent-adam-rouhana'
  },
  {
    id: 'ramona-jingru-wang', name: 'Ramona Jingru Wang', born: '—', base: 'China / United States',
    intro: '把青年身体、卧室、网络文化、身份表演与“赛博格”想象连在一起。',
    methods: ['编排式摄影', '纪实摄影', '肖像', '摄影书'], subjects: ['亲密关系', '青年文化', '身体', '科技', '身份', '网络文化'], outputs: ['摄影', '摄影书', '展览'], institutions: ['Foam', 'PhMuseum'], achievements: ['Foam Talent 2026'],
    whyImportant: '她提供了一种适合研究“当代亲密关系”的方法：技术并不是抽象议题，而是直接混进卧室、身体习惯、性别表达和朋友关系。',
    projects: [project('2020s', 'My friends are cyborgs, but that’s okay.', '青年文化 / 亲密关系', ['在私人空间与日常场景中拍摄年轻人。', '身体、设备、妆容、衣物与房间共同成为身份线索。'], '比起把“赛博格”理解成科幻视觉，更值得看技术怎样悄悄改变日常身体。')],
    images: [image('https://img.phmuseum.com/eyJidWNrZXQiOiJpbWcucGhtdXNldW0uY29tIiwia2V5IjoidXNlcnMvUWUxM1FqYi9wcm9qZWN0cy85YXZFVjhlL2Jsb2Nrcy9hTUJEUUdiLTIiLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJ3aWR0aCI6NjAwfSwiYW8iOjEsInJvdGF0ZSI6bnVsbH19', 'My friends are cyborgs, but that’s okay.', '© Ramona Jingru Wang', 'https://phmuseum.com/projects/my-friends-are-cyborgs-but-thats-okay', 'PhMuseum')],
    sourceLabel: 'Foam Talent 2026', sourceUrl: 'https://www.foam.org/events/foam-talent-2026'
  },
  {
    id: 'sara-de-brito-faustino', name: 'Sara De Brito Faustino', born: '—', base: 'Switzerland / Portugal',
    intro: '把“家”处理成不稳定的心理与物质结构，摄影和雕塑、模型、日常物件之间不断互换。',
    methods: ['摄影雕塑', '装置', '模型', '静物', '材料实验'], subjects: ['家', '脆弱性', '记忆', '安全感', '身体经验'], outputs: ['摄影', '雕塑', '装置'], institutions: ['Foam', 'ECAL'], achievements: ['Foam Talent 2026'],
    whyImportant: '她适合被放进“照片之外怎么做作品”的路线：概念不是靠说明文字完成，而是通过房屋模型、材料的软硬关系和空间感被直接制造。',
    projects: [project('2020s', 'A Home With No Roof', '摄影 / 雕塑 / 家的隐喻', ['使用房屋模型、陶质感结构与日常材料。', '把“家”从稳定容器变成会漏、会塌、会缠绕的物体。'], '可以研究抽象概念怎样通过很具体的材料动作被压到作品里。')],
    images: [image('https://ecal-media.sos-ch-gva-2.exo.io/filer_public_thumbnails/filer_public/3a/64/3a64943a-6c5b-43af-883a-1862e9fc7fed/un_endroit__ou_je_me_sens_toute_petite_et_vilaine__ecal_sara-de-brito-faustino_3_1.jpg__800x800_q85_ALIAS-feed-thumbs_subsampling-2_upscale.jpg', 'A Home With No Roof', '© Sara De Brito Faustino', 'https://ecal.ch/en/school/network/people/sara-de-brito-faustino/', 'ECAL')],
    sourceLabel: 'Foam Talent 2026', sourceUrl: 'https://www.foam.org/press/foam-talent-2026'
  },
  {
    id: 'juno-calypso', name: 'Juno Calypso', born: '1989', base: 'London',
    intro: '通过高度编排的自我表演，把女性身体、美容仪式、独处和欲望放入粉色而人工的空间。',
    methods: ['编排式摄影', '自我表演', '自画像', '场景建构', '时尚摄影'], subjects: ['女性身体', '孤独', '亲密关系', '美容', '欲望', '身份表演'], outputs: ['摄影', '摄影书', '展览'], institutions: ['Foam', 'TJ Boulting'], achievements: ['Foam Talent 2016'],
    whyImportant: '她的画面很容易被当成“视觉风格很强”，但真正值得拆的是：空间、服装、姿势和道具怎样共同制造一个女性角色，而摄影师本人又怎样成为这个角色的表演者。',
    projects: [project('2015–16', 'The Honeymoon / Joyce', '编排式自画像', ['艺术家独自在情趣酒店和人工空间中扮演虚构人格 Joyce。', '美容用品、镜子、浴缸与身体姿势构成重复符号。'], '适合研究“强视觉”怎样不靠宏大概念，而靠持续一致的角色与空间系统成立。')],
    images: [image('https://storage.googleapis.com/s8partner-pm_wp/1/2016/10/7-4.jpg', 'The Honeymoon — heart-shaped bath', '© Juno Calypso', 'https://www.port-magazine.com/art-photography/juno-return-to-the-love-hotel/', 'PORT Magazine')],
    sourceLabel: 'Foam Talent archive', sourceUrl: 'https://www.foam.org/talent/foam-talent-call-2026'
  },
  {
    id: 'sara-cwynar', name: 'Sara Cwynar', born: '1985', base: 'New York',
    intro: '使用广告、商品图、旧杂志和工作室静物，把消费图像重新拍摄、堆叠和制造成新的视觉机器。',
    methods: ['挪用', '再摄影', '拼贴', '静物', '档案', '视频'], subjects: ['消费主义', '女性形象', '图像循环', '颜色', '商品', '摄影史'], outputs: ['摄影', '视频', '装置', '摄影书'], institutions: ['Foam', 'MoMA', 'AGO'], achievements: ['Foam Talent 2015'],
    whyImportant: '她很适合研究“图像已经存在之后，摄影还能做什么”。她不是去找新的对象，而是让旧商业图像在重新摆放、重拍和叠加中暴露其欲望结构。',
    projects: [project('2017', 'Tracy', '再摄影 / 消费图像拼贴', ['透明板、商品、旧广告、身体和摄影复制同时出现在画面中。', '画面主动保留拼贴与重拍的层级。'], '不要只看颜色搭配；更重要的是每一层图像来自哪里、谁在消费谁。')],
    images: [image('https://ago.ca/sites/default/files/styles/max_2600x2600/public/2018-01/Tracy%28Cezanne%29-web.jpg?itok=lcaW02cU', 'Tracy (Cezanne)', '© Sara Cwynar', 'https://ago.ca/artist-residence-sara-cwynar', 'Art Gallery of Ontario')],
    sourceLabel: 'Foam Talent archive', sourceUrl: 'https://www.foam.org/talent/foam-talent-call-2026'
  },
  {
    id: 'carmen-winant', name: 'Carmen Winant', born: '1983', base: 'Columbus / United States',
    intro: '收集大量既有照片并以墙面、书籍和密集编排重新组织女性身体、劳动与生育经验。',
    methods: ['档案', 'found image', '墙面编排', '摄影装置', '艺术家书'], subjects: ['女性身体', '生育', '劳动', '女性主义', '集体经验'], outputs: ['摄影装置', '艺术家书', '拼贴'], institutions: ['Foam', 'MoMA', 'Guggenheim'], achievements: ['Foam Talent 2016', 'MoMA Being: New Photography 2018', 'Guggenheim Fellowship 2019'],
    whyImportant: '她能回答一个很实际的问题：如果材料全是“别人拍的”，艺术家到底做了什么？答案在选择、分类、数量、空间密度和观看路径里。',
    projects: [project('2018', 'My Birth', 'found image / 大型墙面装置', ['由数千张关于分娩和生育的既有照片构成。', '图像使用日常胶带直接密集铺满墙面。', '作品与同名书籍同时发展。'], '这里“编排”不是排版装饰，而是让私人经验通过数量变成集体身体。')],
    images: [image('https://patrongallery.com/media/PatronGallery-13075-1749666079.jpg', 'My Birth — installation view', '© Carmen Winant / MoMA installation', 'https://patrongallery.com/press/item751/Carmen-Winants-Embodied-Archives', 'Patron Gallery')],
    sourceLabel: 'MoMA collection', sourceUrl: 'https://www.moma.org/collection/works/222741'
  },
  {
    id: 'vasantha-yogananthan', name: 'Vasantha Yogananthan', born: '1985', base: 'Paris',
    intro: '把长期旅行、纪实摄影、表演与印度史诗叙事混合，让现实场景与神话结构彼此渗透。',
    methods: ['长期项目', '纪实摄影', '编排式摄影', '手工上色', '摄影书'], subjects: ['神话', '家庭', '地方', '儿童', '文化记忆'], outputs: ['摄影书', '摄影', '系列出版'], institutions: ['Foam'], achievements: ['作品进入 Foam Collection'],
    whyImportant: '他适合研究“纪实”和“编排”不是二选一：同一个长期项目可以在真实地点、真实人物与神话角色之间不断改变摄影的可信度。',
    projects: [project('2013–21', 'A Myth of Two Souls', '七册摄影书 / 长期项目', ['以《罗摩衍那》为结构线索横跨印度多地拍摄。', '使用纪实、表演与手工上色等多种方式。'], '关键不是复述史诗，而是让一个古老叙事重新穿过当代地点和身体。')],
    images: [image('https://a.storyblok.com/f/113697/2480x3143/4b4d0b1e3a/foa001000538.jpg', 'Boy Playing Girl, Janakpur, Nepal, 2016', '© Vasantha Yogananthan', 'https://www.foam.org/artworks/boy-playing-girl-janakpur-nepal-2016', 'Foam Collection')],
    sourceLabel: 'Foam Collection', sourceUrl: 'https://www.foam.org/artworks/boy-playing-girl-janakpur-nepal-2016'
  },
  {
    id: 'joachim-schmid', name: 'Joachim Schmid', born: '1955', base: 'Berlin',
    intro: '长期拒绝“再拍更多照片”，转而收集、分类、编辑匿名照片与网络图像。',
    methods: ['found image', '挪用', '档案', '分类学', '摄影书'], subjects: ['大众摄影', '图像过剩', '匿名影像', '摄影习惯'], outputs: ['摄影书', '照片组合', '档案项目'], institutions: ['Fotomuseum Winterthur', 'San Francisco Museum of Modern Art'], achievements: ['found photography 重要方法论艺术家'],
    whyImportant: '如果你在做现成图像、家庭相册或互联网图片，他几乎是绕不开的参照：他的创作动作主要发生在“找到—分类—重新命名—出版”的链条中。',
    projects: [project('1980s–', 'Pictures from the Street / found photography practice', '现成照片 / 分类', ['从公共空间、二手来源和大众图像中收集照片。', '通过系列化与分类建立新的观看关系。'], '要问的不是“照片是不是他拍的”，而是为什么这些图被放在一起之后变成另一种知识。')],
    images: [image('https://files.ocula.com/anzax/5e/5ed8d679-aa73-427d-ac88-7eac0367b2ee_1200_1200.jpg', 'Found-image portrait grid', '© Joachim Schmid', 'https://ocula.com/artists/joachim-schmid/', 'Ocula')],
    sourceLabel: '艺术家研究入口', sourceUrl: 'https://ocula.com/artists/joachim-schmid/'
  },
  {
    id: 'lucas-blalock', name: 'Lucas Blalock', born: '1978', base: 'Brooklyn',
    intro: '故意把 Photoshop 的粗糙痕迹、3D 工具和“错误”留在摄影表面，让数字修改本身成为图像内容。',
    methods: ['数字修图', 'Photoshop', '再加工', '编排式摄影', '3D 工具'], subjects: ['图像生产', '技术', '日常物件', '数字观看'], outputs: ['摄影', '公共图像', 'AR'], institutions: ['Whitney Biennial'], achievements: ['Whitney Biennial 2019'],
    whyImportant: '他能帮助区分“把照片修得更好”和“把修图本身当语言”。他的痕迹故意不隐形，所以数字处理不再服务于真实感。',
    projects: [project('2017–19', 'The Nonconformist / 2019 Biennial works', '数字加工摄影', ['使用 Photoshop 3D 工具把图像局部虚拟“鼓起来”。', '修改痕迹被故意保留。'], '研究时可以把每个 Photoshop 动作当成和暗房动作一样具体的材料步骤。')],
    images: [image('https://www.christies.com/img/LotImages/2022/AMS/2022_AMS_21972_0325_001%28lucas_blalock_rocking_chair120319%29.jpg?mode=max', 'Rocking Chair', '© Lucas Blalock', 'https://onlineonly.christies.com/s/le-jeune-collecting-legacy-amsterdam-no-reserve-edit/lucas-blalock-b-1978-325/170438', 'Christie’s')],
    sourceLabel: 'Whitney Biennial 2019', sourceUrl: 'https://whitney.org/exhibitions/2019-Biennial/art?section=10'
  },
  {
    id: 'myriam-boulos', name: 'Myriam Boulos', born: '1992', base: 'Beirut',
    intro: '在黎巴嫩的政治动荡、夜生活、身体和私人关系之间移动，让公共事件与非常近距离的亲密图像并置。',
    methods: ['纪实摄影', '日记式摄影', '近距离肖像', '摄影书'], subjects: ['亲密关系', '政治', '身体', '抗议', '贝鲁特', '性'], outputs: ['摄影书', '摄影', '展览'], institutions: ['Aperture', 'Magnum Photos'], achievements: ['What’s Ours, Aperture 2023'],
    whyImportant: '她很适合研究“私人和政治怎么同时出现”。不是先拍政治、再插入几张亲密照，而是让身体本身成为社会局势的一部分。',
    projects: [project('2019–21', 'What’s Ours', '摄影书 / 私人与公共并置', ['在抗议、城市空间、朋友与身体之间快速切换。', '摄影书的 sequence 让公共事件和私密经验互相污染。'], '阅读重点要落到相邻两张图之间，而不是只挑最强单张。')],
    images: [image('https://aperture.org/wp-content/uploads/2023/02/Boulos_Spread_108-109-scaled.jpg', 'What’s Ours — book spread', '© Myriam Boulos', 'https://aperture.org/books/myriam-boulos-whats-ours/', 'Aperture')],
    sourceLabel: 'Aperture', sourceUrl: 'https://aperture.org/books/myriam-boulos-whats-ours/'
  },
  {
    id: 'anouk-kruithof', name: 'Anouk Kruithof', born: '1981', base: 'Brussels / New York',
    intro: '把网络图像、打印物、塑料与数字图像的流通方式转成具有体积的摄影装置。',
    methods: ['网络图像', '挪用', '摄影装置', '打印', '雕塑', '档案'], subjects: ['图像过剩', '网络', '信息流', '观看机制', '图像生产'], outputs: ['装置', '摄影雕塑', '摄影书'], institutions: ['Foam', 'Casemore Gallery'], achievements: ['长期参与国际摄影与当代艺术机构展览'],
    whyImportant: '她特别适合放在“摄影如何变成立体材料”这条线上：图像不是只挂墙，而是被打印到柔性材料、堆叠、折叠和变形成空间物。',
    projects: [project('2017', '#EVIDENCE', '网络图像 / 摄影雕塑', ['大量既有数字图像进入打印与空间结构。', '图像表面被拉伸到雕塑性体积上。'], '可以把每一步从屏幕到实体的转换都当成作品，而不是把装置只当展示方式。')],
    images: [image('https://static-assets.artlogic.net/w_1200%2Cc_limit%2Cf_auto%2Cfl_lossy%2Cq_auto/ws-artlogicwebsite0019/usr/exhibitions/images/exhibitions/26/evidence-highresjpg-8.jpg', '#EVIDENCE — installation', '© Anouk Kruithof', 'https://casemoregallery.com/exhibitions/26-evidence-anouk-kruithof/installation_shots/', 'Casemore Gallery')],
    sourceLabel: 'Casemore Gallery', sourceUrl: 'https://casemoregallery.com/exhibitions/26-evidence-anouk-kruithof/installation_shots/'
  },
  {
    id: 'mishka-henner', name: 'Mishka Henner', born: '1976', base: 'Manchester',
    intro: '大量使用 Google Street View、卫星图像和网络现成图，把平台生产的视觉数据重新编辑为作品。',
    methods: ['网络挪用', 'Google Street View', '卫星图像', 'found image', '摄影书'], subjects: ['监控', '平台', '性工作', '景观', '图像权力'], outputs: ['摄影书', '打印', '网络项目'], institutions: ['Deutsche Börse'], achievements: ['Deutsche Börse Photography Prize 2013 入围'],
    whyImportant: '如果摄影师根本不到现场，作品还能不能叫摄影？Henner 的价值就在于迫使你把“拍摄”拆成平台采集、算法路径、筛选和再编辑。',
    projects: [project('2011–12', 'No Man’s Land', 'Street View 挪用', ['使用 Google Street View 中的道路影像。', '通过网络线索定位欧洲偏远道路上的性工作场景。'], '重点不是猎奇，而是平台相机、自动采集与观看者之间的伦理关系。')],
    images: [image('https://cdn.edcat.net/media/items/MH-NML_Ia.jpg', 'No Man’s Land', '© Mishka Henner', 'https://edcat.net/item/no-mans-land/', 'edcat')],
    sourceLabel: '项目资料', sourceUrl: 'https://edcat.net/item/no-mans-land/'
  },
  {
    id: 'alma-haser', name: 'Alma Haser', born: '1989', base: 'London',
    intro: '把拍好的肖像打印、切割、折纸、重新拼回脸部，再次摄影，使“修图”变成真实纸张上的手工操作。',
    methods: ['肖像', '拼贴', '折纸', '再摄影', '纸张加工'], subjects: ['身份', '脸', '身体', '复制', '变形'], outputs: ['摄影', '纸雕塑', '立体肖像'], institutions: ['The Photographers’ Gallery'], achievements: ['Taylor Wessing Portrait Prize 2012 入围', 'The Photographers’ Gallery 英国个展 2016'],
    whyImportant: '她与你关心的“数字脸如何被转成实体动作”非常接近：这里不是用软件把脸扭曲，而是把一张脸打印出来、折叠、再拍，转译链条本身一眼可见。',
    projects: [project('2012–', 'Cosmic Surgery', '肖像 / 折纸 / 再摄影', ['先拍摄标准肖像。', '打印脸部，再通过复杂折纸形成新的几何面部。', '把处理后的纸结构重新放回肖像并再摄影。'], '非常适合用“第一次摄影—实体操作—第二次摄影”的流程图来分析。')],
    images: [image('https://static-assets.artlogic.net/w_1200%2Cc_limit%2Cf_auto%2Cfl_lossy%2Cq_auto/artlogicstorage/tpgallery/images/view/9819c7b76a8b5ecb56988a43fb5d0cc4j/printsalesgallery-thephotographers-gallery-alma-haser-patient-no.-31-2017.jpg', 'Patient No. 31 — Cosmic Surgery', '© Alma Haser', 'https://printsales.thephotographersgallery.org.uk/artists/43-alma-haser/series/cosmic-surgery/', 'The Photographers’ Gallery')],
    sourceLabel: 'The Photographers’ Gallery', sourceUrl: 'https://thephotographersgallery.org.uk/'
  },
  {
    id: 'wolfgang-tillmans', name: 'Wolfgang Tillmans', born: '1968', base: 'Berlin / London',
    intro: '把日常、亲密关系、政治、抽象无相机图像与极不统一的尺寸和装裱方式放进同一面墙。',
    methods: ['摄影装置', '编辑 / sequence', '无相机摄影', '纪实摄影', '抽象摄影'], subjects: ['亲密关系', '青年文化', '政治', '日常生活', '观看机制'], outputs: ['摄影', '墙面装置', '摄影书'], institutions: ['MoMA', 'Tate', 'Turner Prize'], achievements: ['Turner Prize 2000', 'MoMA: To look without fear 2022'],
    whyImportant: '如果要研究“展览编排本身是不是作品”，Tillmans 是核心案例。大图、小图、胶带、框、复印纸和空白之间的关系，决定观看节奏。',
    projects: [project('1990s–', 'Installation practice', '非等级化墙面编排', ['不同尺寸、题材、装裱状态的照片共同出现。', '作品之间没有传统“主图—辅图”的稳定等级。'], '看展览照时要把墙当成一张巨大的 sequence，而不是把每张照片单独裁出来。')],
    images: [image('https://www.crousel.com/media/uploads/artists/Wolfgang-Tillmans/exhibitions/Wolfgang-Tillm/web/Wolfgang-Tillmans-To-look-_vIYIu1h.jpg', 'Wolfgang Tillmans — installation view', '© Wolfgang Tillmans', 'https://www.crousel.com/cn/zhanlan/wolfgang-tillmans-2021-4xy63s/', 'Galerie Chantal Crousel')],
    sourceLabel: 'MoMA / artist exhibition history', sourceUrl: 'https://www.moma.org/calendar/exhibitions/5449'
  },
  {
    id: 'walead-beshty', name: 'Walead Beshty', born: '1976', base: 'Los Angeles',
    intro: '直接折叠感光纸、让运输过程损伤雕塑，关注作品在制作、物流与制度系统中留下的物理痕迹。',
    methods: ['无相机摄影', 'Photogram', '折叠', '材料实验', '系统过程'], subjects: ['物质性', '物流', '制度', '摄影史', '生产过程'], outputs: ['Photogram', '雕塑', '装置'], institutions: ['Venice Biennale', 'SFMOMA', 'Art Jameel'], achievements: ['Venice Biennale 2015 参展'],
    whyImportant: '他的摄影特别适合研究“过程能不能自己生成形式”：不需要先设计一个图案，折叠感光纸、曝光和运输本身就会留下最终结构。',
    projects: [project('2006–12', 'Multi-Sided Picture Works', '折叠感光纸 Photogram', ['把感光纸折成三维结构。', '不同表面分别接受不同颜色的光。', '展开之后，三维曝光关系被压回二维纸面。'], '这是非常清楚的“动作—痕迹”作品：每个折痕都有工艺来源。')],
    images: [image('https://images.squarespace-cdn.com/content/v1/5614520ce4b0241f53ed4809/1462491880372-ES7ZZ7NDUI71YPK6UN1M/WB23808.jpg?format=750w', 'Black and White Directional Folds', '© Walead Beshty', 'https://www.actionstakenunderthefictitiousnamewaleadbeshtystudiosinc.com/black-and-white-directional-folds-2006-2014', 'Walead Beshty Studios Inc.')],
    sourceLabel: 'Artist studio archive', sourceUrl: 'https://www.actionstakenunderthefictitiousnamewaleadbeshtystudiosinc.com/multisided-picture-works-20062012'
  },
  {
    id: 'thomas-demand', name: 'Thomas Demand', born: '1964', base: 'Berlin / Los Angeles',
    intro: '先根据新闻图像或记忆中的场所搭出等比例纸模型，拍摄模型后销毁模型，只留下照片。',
    methods: ['模型建构', '编排式摄影', '纸雕塑', '再摄影'], subjects: ['新闻图像', '记忆', '真实性', '空间', '媒体'], outputs: ['大尺幅摄影', '纸模型', '展览'], institutions: ['MoMA', 'MOCA Toronto'], achievements: ['国际大型美术馆个展与收藏'],
    whyImportant: '他几乎是“摄影前面的制作动作”最典型的案例之一。最终看起来像普通空间，但摄影之前已经发生了大量雕塑劳动。',
    projects: [project('2011', 'Control Room', '纸模型 / 摄影', ['依据控制室图像制作纸和卡纸模型。', '模型细节刻意去掉可读文字和人类痕迹。', '最终以大尺幅照片呈现。'], '如果只看成片很容易误判；必须把“搭模型—拍摄—销毁模型”一起看。')],
    images: [image('https://files.ocula.com/anzax/80/80b4c4c7-f114-45aa-b7e0-ba52347c57c3_720_720.jpg', 'Control Room', '© Thomas Demand', 'https://ocula.com/magazine/art-news/thomas-demand-to-build-house-of-card-at-moca/', 'Ocula')],
    sourceLabel: '艺术家 / 机构资料', sourceUrl: 'https://www.thomasdemand.info/'
  },
  {
    id: 'hito-steyerl', name: 'Hito Steyerl', born: '1966', base: 'Berlin',
    intro: '把低清图像、监控、机器视觉、网络传播与政治经济放入影像和大型装置。',
    methods: ['影像装置', 'found footage', '机器视觉', '文本', '网络图像'], subjects: ['图像政治', 'AI', '监控', '战争', '网络', '可见性'], outputs: ['影像', '大型装置', '文本', '讲演表演'], institutions: ['Venice Biennale', 'MoMA', 'Pace'], achievements: ['Venice Biennale 2015 德国馆参展'],
    whyImportant: '她把“图片长什么样”进一步推成“图片在什么系统里流通、谁能看见、谁被机器识别”。对于研究后摄影和 AI 图像特别重要。',
    projects: [project('2013', 'How Not to Be Seen', '影像 / 分辨率 / 可见性', ['借用分辨率测试图、绿幕和教学视频语气。', '讨论在数字监控环境中“不可见”的悖论。'], '形式上的幽默和教程感不是包装，而是模仿技术系统说话的方式。')],
    images: [image('https://www.pacegallery.com/media/images/897903keyUBiV5QfnSEM_ANkgPPBs6w.width-2000.jpg', 'Hiding in Plain Sight / How Not to Be Seen related installation', '© Hito Steyerl', 'https://www.pacegallery.com/hiding-in-plain-sight-hito-steyerl-1/', 'Pace Gallery')],
    sourceLabel: 'Pace Gallery', sourceUrl: 'https://www.pacegallery.com/artists/hito-steyerl/'
  },
  {
    id: 'sophie-calle', name: 'Sophie Calle', born: '1953', base: 'Paris',
    intro: '把跟踪、私人信件、失恋、规则游戏、照片和文字结合起来，让生活行动成为作品结构。',
    methods: ['文本 + 摄影', '行为', '档案', '规则系统', '委托回应'], subjects: ['亲密关系', '隐私', '失恋', '凝视', '身份', '叙事'], outputs: ['摄影装置', '文本', '视频', '书'], institutions: ['Venice Biennale', 'Centre Pompidou'], achievements: ['Venice Biennale 2007 法国馆代表艺术家'],
    whyImportant: '她非常适合研究“概念如何变成一套可执行动作”。她的作品往往可以写成规则：收到一封信—交给多人解析—记录回答—重新布置；概念因此不是一句话，而是一台生产作品的机器。',
    projects: [project('2007', 'Take Care of Yourself', '私人信件 / 107 位女性回应 / 装置', ['把一封分手邮件交给 107 位不同职业的女性分析和回应。', '回应以文本、视频、表演与图像等形式组成大型装置。'], '私人经历被转换成一个多人协作的规则系统，重点是“如何转译”，不只是失恋主题。')],
    images: [image('https://cdn.tatlerasia.com/tatlerasia/i/2024/02/11011439-e000061-014_cover_1600x698.jpg', 'Take Care of Yourself — installation', '© Sophie Calle', 'https://www.tatlerasia.com/lifestyle/arts/sophie-calle-take-care-of-yourself-art', 'Tatler Asia')],
    sourceLabel: '艺术家项目资料', sourceUrl: 'https://www.perrotin.com/artists/Sophie_Calle/1'
  }
];

const allArtists: Artist[] = [...foamResearchArtists, ...foamFocusArtists, ...photoRosterImmediateArtists, ...otherBiennaleArtists, ...veniceHistoricalArtists, ...venice2026Artists, ...foamTalent2016Artists, ...artistBatch26, ...artistBatch25, ...artistBatch24, ...artistBatch23, ...artistBatch22, ...artistBatch21, ...artistBatch20, ...artistBatch19, ...artistBatch18, ...coreArtists, ...expandedArtists, ...globalArtists, ...circuitArtists, ...circuitArtists2, ...researchArtists, ...biennaleArtists, ...newResearchArtists, ...artistBatch9, ...artistBatch10, ...artistBatch11, ...artistBatch12, ...artistBatch13, ...artistBatch14, ...artistBatch15, ...artistBatch16, ...artistBatch17, ...photoEditionArtists];
const normalizeArtistName = (name: string) => name.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9\u3040-\u30ff\u3400-\u9fff]+/g, '');
const uniqueArtists = allArtists.filter((artist, index, list) => list.findIndex(candidate => candidate.id === artist.id || normalizeArtistName(candidate.name) === normalizeArtistName(artist.name)) === index);
bindPhotoEditionCanonicalIds(uniqueArtists);

export const artists: Artist[] = uniqueArtists.map(artist => {
  const baseArchive = archiveBatch26[artist.id] ?? archiveBatch25[artist.id] ?? archiveBatch24[artist.id] ?? archiveBatch23[artist.id] ?? archiveBatch22[artist.id] ?? archiveBatch21[artist.id] ?? archiveBatch20[artist.id] ?? (archiveExtensions17[artist.id] ? archiveBatch5[artist.id] : artist.id === 'gillian-wearing' ? { ...researchArchives[artist.id], projects: [...researchArchives[artist.id].projects, wearingExtension16] } : archiveBatch17[artist.id] ?? archiveBatch16[artist.id] ?? archiveBatch15[artist.id] ?? researchArchives[artist.id]);
  const archive = baseArchive && archiveExtensions17[artist.id] ? { ...baseArchive, projects: [...baseArchive.projects, ...archiveExtensions17[artist.id]] } : baseArchive;
  const extensionProjects = [...(archiveExtensions23[artist.id] ?? []), ...(archiveExtensions22[artist.id] ?? [])];
  const extraProjects = extensionProjects.map(project => ({ year: project.period, title: project.title, type: project.cluster, facts: project.actions, reading: project.summary }));
  if (!archive) return extraProjects.length ? { ...artist, projects: [...artist.projects, ...extraProjects.filter(project => !artist.projects.some(existing => existing.title === project.title))] } : artist;
  return {
    ...artist,
    images: ['cindy-sherman', 'cao-fei', 'broomberg-chanarin'].includes(artist.id)
      ? archive.projects.flatMap(project => project.images)
      : artist.images,
    projects: [...archive.projects, ...extensionProjects.filter(project => !archive.projects.some(existing => existing.title === project.title))].map(project => ({
      year: project.period,
      title: project.title,
      type: project.cluster,
      facts: project.actions,
      reading: project.summary,
    })),
  };
});

export const filterGroups = {
  methods: Array.from(new Set(artists.flatMap(artist => artist.methods))).sort(),
  subjects: Array.from(new Set(artists.flatMap(artist => artist.subjects))).sort(),
  outputs: Array.from(new Set(artists.flatMap(artist => artist.outputs))).sort(),
  institutions: Array.from(new Set(artists.flatMap(artist => artist.institutions))).sort()
};
