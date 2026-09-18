import type { Artist, ArtworkImage, Project } from './data';

const image = (url: string, title: string, credit: string, sourceUrl: string, sourceLabel: string): ArtworkImage => ({
  url,
  title,
  credit,
  sourceUrl,
  sourceLabel,
});

const project = (year: string, title: string, type: string, facts: string[], reading: string): Project => ({
  year,
  title,
  type,
  facts,
  reading,
});

export const artistBatch13: Artist[] = [
  {
    id: 'aida-muluneh',
    name: 'Aïda Muluneh',
    chineseName: '阿伊达·穆鲁内',
    born: '1974',
    base: 'Addis Ababa / Côte d’Ivoire',
    intro: '以高度编排的身体、面部彩绘、服装、道具和强烈色块，把非洲女性经验、迁移、记忆与水资源问题压缩进象征性场景。',
    methods: ['编排式摄影', '肖像', '场景建构', '身体绘画', '色彩系统'],
    subjects: ['非洲女性', '迁移', '记忆', '水资源', '身份', '未来'],
    outputs: ['摄影系列', '大型彩色摄影', '公共委托', '展览'],
    institutions: ['Smithsonian National Museum of African Art', 'Somerset House', 'WaterAid'],
    achievements: ['European Union Africa Photography Encounters Prize 2010', 'Water Life — Somerset House 2019'],
    whyImportant: '她适合研究强视觉怎样承担社会议题：颜色、身体涂绘和道具不是装饰，而是一套可反复使用的叙事语法。',
    projects: [
      project('2018', 'Water Life', '委托 / 水资源 / 编排肖像', ['在埃塞俄比亚 Afar 地区拍摄。', '使用身体彩绘、服装、容器和管道等道具。', '以十二幅编排肖像回应女性取水负担。'], '要同时看现场问题和画面规则：项目没有复制新闻摄影，而是把水资源结构转换成可读的颜色与姿势。'),
    ],
    images: [
      image('https://cdn.media.amplience.net/i/canon/canon-pro-aida-muluneh-wateraid-project-8?bg=rgb%28255%2C255%2C255%29&fmt=jpg&fmt.options=interlaced&w=1200', 'Access, Water Life', '© Aïda Muluneh', 'https://www.canon-europe.com/pro/stories/aida-muluneh-wateraid-project/', 'Canon Europe / WaterAid project'),
    ],
    sourceLabel: 'Aïda Muluneh Studio',
    sourceUrl: 'https://aidamuluneh.com/collections/',
  },
  {
    id: 'asako-narahashi',
    name: 'Asako Narahashi',
    chineseName: '楢桥朝子',
    born: '1959',
    base: 'Tokyo',
    intro: '从水中面向陆地拍摄，让熟悉的日本海岸、机场和富士山在浪涌、倾斜地平线与瞬间遮挡中变得不稳定。',
    methods: ['景观摄影', '水中拍摄', '快照', '长期项目', '摄影书'],
    subjects: ['水', '岛屿', '日本景观', '距离', '身体感知', '灾难之后'],
    outputs: ['彩色摄影', '摄影书', '杂志', '展览'],
    institutions: ['SFMOMA', 'Tokyo Photographic Art Museum', 'Images Vevey'],
    achievements: ['Photography Society of Japan Newcomer Award 1998', 'Higashikawa New Photographer Award 2008'],
    whyImportant: '她没有依靠复杂后期制造陌生感，而是改变摄影师身体的位置。站在水里、等待浪把相机推高或遮住镜头，观看方式就被重新组织。',
    projects: [
      project('2001–2008', 'half awake and half asleep in the water', '水中景观 / 身体位置', ['从海水或湖水中朝陆地拍摄。', '让相机贴近水面，保留浪涌造成的偶然遮挡和倾斜。', '把机场、城市与富士山从岸外重新观看。'], '制作方法很具体：先改变身体和相机的位置，再让水的运动参与构图。'),
    ],
    images: [
      image('https://static-assets.artlogic.net/w_1200%2Cc_limit%2Cf_auto%2Cfl_lossy%2Cq_auto/ws-ibashogallery/usr/images/exhibitions/main_image_override/55/045.jpg', 'Mount Fuji from the water', '© Asako Narahashi', 'https://ibashogallery.com/artists/65-asako-narahashi/', 'IBASHO Gallery'),
    ],
    sourceLabel: 'SFMOMA',
    sourceUrl: 'https://www.sfmoma.org/artist/Asako_Narahashi/',
  },
  {
    id: 'kikuji-kawada',
    name: 'Kikuji Kawada',
    chineseName: '川田喜久治',
    born: '1933',
    base: 'Tokyo',
    intro: '把战争遗迹、污迹、国家符号、天象和都市表面编进高反差摄影与复杂摄影书，持续处理战后记忆如何附着于物质表面。',
    methods: ['摄影书', '档案摄影', '类型化摄影', '黑白摄影', '序列编辑'],
    subjects: ['战争记忆', '日本', '国家符号', '时间', '天象', '历史痕迹'],
    outputs: ['摄影书', '黑白摄影', '彩色摄影', '展览'],
    institutions: ['SFMOMA', 'Museum of Fine Arts Boston', 'Tokyo Photographic Art Museum'],
    achievements: ['The Map / Chizu first edition 1965', 'Higashikawa Domestic Photographer Award 2011'],
    whyImportant: '《地图》说明摄影书的意义来自图像、折页、纸张、顺序与尺度的共同工作。单张照片只是材料，书的结构才是作品的完整语法。',
    projects: [
      project('1959–1965', 'Chizu / The Map', '战争遗迹 / 摄影书', ['拍摄广岛原爆圆顶馆的污迹与墙面。', '加入遗物、军人肖像、堡垒、垃圾和国旗等图像。', '与设计师杉浦康平以折页和高密度印刷组织成摄影书。'], '阅读重点是图像如何被书籍结构压迫、遮蔽和反复打开，而不只是把它当作广岛纪实。'),
    ],
    images: [
      image('https://d1hhug17qm51in.cloudfront.net/www-media/2018/08/25113730/2002.65.10_01_b02-Large-TIFF_4000-pixels-long-scaled.jpg', 'Hinomaru — The Japanese National Flag, The Map', '© Kikuji Kawada', 'https://www.sfmoma.org/artwork/2002.65.10/', 'SFMOMA'),
    ],
    sourceLabel: 'Museum of Fine Arts Boston',
    sourceUrl: 'https://www.mfa.org/exhibition/kawada-kikuji-chizu-the-map',
  },
  {
    id: 'yinka-shonibare',
    name: 'Yinka Shonibare',
    born: '1962',
    base: 'London / Lagos',
    intro: '以荷兰蜡染布、无头人体模型、艺术史场景、图书与电影重演殖民史，追问“非洲”“欧洲”和文化真实性是怎样被制造的。',
    methods: ['历史重演', '挪用', '场景建构', '纺织', '装置', '雕塑'],
    subjects: ['殖民', '文化身份', '阶级', '迁移', '全球化', '艺术史'],
    outputs: ['雕塑装置', '摄影', '电影', '图书馆装置', '公共艺术'],
    institutions: ['Tate', 'Venice Biennale', 'Smithsonian National Museum of African Art'],
    achievements: ['Turner Prize 2004 shortlisted', 'Venice Biennale 2007 African Pavilion'],
    whyImportant: '他的关键不只是“使用非洲布”，而是让一种本身横跨印尼、荷兰和西非贸易史的材料进入欧洲经典图像，使所谓文化来源变得无法被简单归类。',
    projects: [
      project('2001', 'The Swing (after Fragonard)', '艺术史重演 / 雕塑装置', ['制作等身无头玻璃钢人体模型。', '依据 Fragonard 的洛可可绘画重新设计姿势和秋千。', '用荷兰蜡染棉布制作服装并加入人工植物。'], '作品通过材料来源、无头身体和经典绘画姿势，让阶级享乐与殖民贸易进入同一空间。'),
    ],
    images: [
      image('https://cdn.kastatic.org/ka-perseus-images/b4d59520442a9b606fcbee9a274b3f8236694679.jpg', 'The Swing (after Fragonard), 2001', '© Yinka Shonibare', 'https://yinkashonibare.com/artwork/the-swing-after-fragonard-2001/', 'Artist website / installation documentation'),
    ],
    sourceLabel: 'Yinka Shonibare Studio',
    sourceUrl: 'https://yinkashonibare.com/',
  },
];
