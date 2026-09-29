import type { Artist } from './data';

const jackHome = 'https://www.jackdavison.co.uk/';
const jackPhotographs = 'https://loosejoints.biz/products/photographs';
const jackSongFlowers = 'https://loosejoints.biz/products/song-flowers';
const jackOlPejeta = 'https://loosejoints.biz/products/ol-pejeta';
const jackEtchings = 'https://www.cobgallery.com/exhibitions/97-photographic-etchings-jack-davison/';
const jackAnt = 'https://publicknowledgebooks.com/products/jack-davison-a-is-for-ant';

const samFoam = 'https://www.foam.org/events/samuel-gratacap';
const samAperture = 'https://aperture.org/editorial/cover-conversation-samuel-gratacap/';
const samEmpire = 'https://www.filigranes.com/livre/empire/';
const samBilateral = 'https://www.fotografiaeuropea.it/archivio/mostre/samuel-gratacap/';
const samElysee = 'https://prixelysee.ch/en/nomine/samuel-gratacap';

const louiseLens = 'https://www.lensculture.com/louise-parker';
const louiseDazed = 'https://www.dazeddigital.com/photography/article/35935/1/louise-parker-reclaiming-identity-through-found-photos-of-yourself';
const louiseFoam = 'https://www.foam.org/events/foam-talent-2017-new-york';

export const foamTalent2016DeepArtists6: Artist[] = [
  {
    id: 'jack-davison',
    name: 'Jack Davison',
    born: '1990',
    base: 'Essex, United Kingdom',
    intro: '把肖像、静物、街头碎片和编辑委托放进同一套视觉语法：强烈明暗、遮挡、紧裁切、反射与再摄影不断把熟悉对象变得陌生。近年的 photogravure 又把这种“图像谜题”进一步转成手工印刷的物质过程。',
    methods: ['强烈明暗 / chiaroscuro', '紧裁切', '遮挡与反射', '再摄影', '模拟曝光控制', '摄影书编辑', 'polymer photogravure'],
    subjects: ['肖像', '身体碎片', '动物', '日常物件', '摄影史', '观看与触觉'],
    outputs: ['摄影', '摄影书', '手工凹版印刷', '编辑摄影', '短片 / 协作出版'],
    institutions: ['Foam', 'Cob Gallery', 'Loose Joints', 'The New York Times Magazine'],
    achievements: ['Foam Talent 2016'],
    whyImportant: '他特别适合研究“方法先于题材”：同一套光线、遮挡、裁切和再摄影逻辑可以横跨人物、动物、商业委托和私人照片；而 Photographic Etchings 又证明最终成像并不止发生在快门瞬间。',
    projects: [
      {
        year: '2007–2019',
        title: 'Photographs',
        type: '长期图像实验 / 肖像 + 静物 + 地景 / 摄影书',
        facts: [
          '从 2007 年开始持续累积个人图像，2019 年由 Loose Joints 编辑成首本同名摄影书。',
          '在肖像、地景、静物之间反复使用手、眼睛、反射、遮挡和身体碎片等视觉母题。',
          '通过高反差明暗、紧裁切和局部信息制造“看见但无法完全解释”的图像。',
          '不按单一项目或委托分类，而依靠书籍顺序让不同年代、不同来源的图像互相产生形式回声。'
        ],
        reading: '值得研究的是他如何把长期杂散拍摄变成稳定视觉语言：不是靠一个宏大主题，而是靠反复出现的观看规则。'
      },
      {
        year: '2020',
        title: 'Song Flowers',
        type: '西南中国 / 苗族文化 / 委托转摄影书',
        facts: [
          '在中国西南与苗族社群相遇，拍摄服饰、身体、节庆与地方环境。',
          '项目讨论当代速度、节奏与地方性如何和延续中的传统同时存在。',
          '与 Marni 合作产生，但最终由 Loose Joints 编辑成独立摄影书，而不是只停留在时尚委托语境。',
          '书中混合黑白与彩色图像，使手工服饰、动作与地景的节奏成为主要编辑线索。'
        ],
        reading: '这一项目能看出商业合作与作者摄影并不必然分开：关键在于委托素材后来怎样被重新编辑成自己的视觉系统。'
      },
      {
        year: '2021',
        title: 'Ol Pejeta',
        type: '濒危物种 / 近距离肖像 / 人与动物关系',
        facts: [
          '在 Kenya 的 Ol Pejeta Conservancy 拍摄 Najin 与 Fatu——最后两只仍存活的 northern white rhinos。',
          '同时拍摄长期照护它们的 Zacharia 与其他保护人员，而不是把动物从保护系统中孤立出来。',
          '避免经典远距离野生动物摄影，主动靠近皮肤、身体轮廓、触摸与照护动作。',
          '项目由 New York Times 相关报道延伸为 Loose Joints 摄影书，并连接到 IVF / genetic rescue 与物种灭绝议题。'
        ],
        reading: '项目最有效的地方不是“罕见动物”，而是把庞大身体、脆弱处境与照护者的触觉关系压进同一个近距离观看尺度。'
      },
      {
        year: '2022–ongoing',
        title: 'Photographic Etchings',
        type: 'monochrome archive / polymer photogravure / hand printing',
        facts: [
          '从既有黑白摄影档案中重新选图，再通过 polymer photogravure 转成金属版。',
          '艺术家亲自给版面上墨并手工擦除不同区域的墨量，由擦拭力度控制亮部、暗部与绘画感。',
          '允许 thumbprints、墨迹、色调不均等印刷差异保留下来，让每张照片带有具体手工痕迹。',
          '2022 Cob Gallery 个展按尺寸和印刷过程而不是题材组织作品，并同步出版 148 页、32 个 gatefold 的图录。'
        ],
        reading: '这里摄影不再被理解为可以无限复制的透明图像；印刷动作重新把“作者的手”带回照片。'
      },
      {
        year: '2024–2025',
        title: 'A is for Ant',
        type: 'alphabet / animal costume / book collaboration',
        facts: [
          '以儿童 alphabet book 为结构，为 A–Z 建立一组动物图像。',
          '与 Shona Heath 合作 costume / set imagination，并与 Matt Willey 合作书籍设计。',
          '把摄影、服装、排版和游戏性并列，让图像既面向成人观看，也保留儿童可进入的简单规则。',
          '形成大开本摄影书与儿童向 newspaper edition，使同一项目通过不同纸张和尺度获得不同使用方式。'
        ],
        reading: '它说明极简规则也能产生完整项目：26 个字母就是框架，剩下的创造力发生在角色、服装与图像之间。'
      }
    ],
    images: [],
    sourceLabel: 'Jack Davison · official / publisher sources',
    sourceUrl: jackHome,
  },
  {
    id: 'samuel-gratacap',
    name: 'Samuel Gratacap',
    born: '1982',
    base: 'Paris / Marseille, France',
    intro: '以长期驻留和反复返回代替一次性新闻摄影，持续研究地中海迁徙路线中的拘留中心、难民营、边境与等待空间。他把照片、视频、证词、文件、地图和书籍放进同一套调查结构。',
    methods: ['长期田野 / immersion', '纪实摄影', '视频', '口述与证词', 'found documents', '地图 / 路线追踪', '摄影书'],
    subjects: ['迁徙', '边境', '拘留与等待', '流亡', '公民援助', '地中海政治'],
    outputs: ['摄影', '视频', '摄影书', '档案装置', '公共展览'],
    institutions: ['Foam', 'LE BAL', 'Mudam', 'Centre Pompidou', 'Institut du Monde Arabe'],
    achievements: ['CNAP documentary photography grant 2012', 'Prix LE BAL–ADAGP de la jeune création 2013', 'Foam Talent 2016', 'Prix Arendt 2017', 'CNAP FLUX commission 2018'],
    whyImportant: '他的价值不在于“拍难民”，而在于持续改变进入现场的时间尺度：先理解制度和地理，再建立人与人关系，最后才决定图像、证词或地图应该承担什么信息。',
    projects: [
      {
        year: '2007–2016',
        title: 'La Chance / Castaways',
        type: '拘留中心 + Lampedusa + Mediterranean transit archive',
        facts: [
          '2007 年从 Marseille 的 administrative detention center 开始接触无证移民与司法系统。',
          '2010 年进入 Lampedusa，把旅游岛与移民登陆地这两种现实同时放进项目。',
          '制作一组 postcard-like 图像去反转“地中海度假胜地”的明信片观看习惯。',
          '同时再摄影被海水冲上岸、属于迁徙者的文件和私人照片，并结合证词、地图与影像材料。',
          '后续把多个拘留 / 过境地点连接成 Castaways 的长期路线，而不是将每个国家视为孤立事件。'
        ],
        reading: '这里已经形成他后来的核心方法：把“路线”而不是“单张灾难照片”作为作品的基本单位。'
      },
      {
        year: '2012–2014',
        title: 'Empire',
        type: 'Choucha refugee camp / long immersion / still + video',
        facts: [
          '多次返回 Tunisia–Libya 边境附近的 Choucha 难民营，持续约两年。',
          '初到现场时前两个月很少拍照，先观察食物、供水、援助与等待怎样组织日常。',
          '同时参与 Danish Refugee Council 项目，并给 16–18 岁青年教授约五个月的 analogue photography 入门课程。',
          '以摄影和视频记录一个原本临时、后来长期化、最终关闭的营地所产生的特殊时间感。',
          '2015 年形成 LE BAL 个展与 Filigranes 摄影书，书中包含 70 张彩色照片和难民证词。'
        ],
        reading: 'Empire 最重要的不是规模，而是他刻意把“拍得慢”变成伦理方法：先进入时间，再进入图像。'
      },
      {
        year: '2017–2019 · book 2023',
        title: 'Bilateral',
        type: 'France–Italy border / landscape + portraits + solidarity',
        facts: [
          '围绕 Montgenèvre Pass 多次往返法国与意大利边境，冬夏都进入同一山地路线。',
          '拍摄越境者经过的雪地、树林、路径和山体，使风景本身承担政治信息。',
          '同时拍摄或聆听越境者与当地提供援助的人，把“流亡”与“接待 / solidarity”放在同一图像系统。',
          '不只记录人穿越边境，也寻找鞋、路径、夜间行动等留下的痕迹。',
          '2023 年由 Poursuite 出版 Bilateral 摄影书。'
        ],
        reading: '同一座山白天可以是徒步风景，夜晚却成为危险边境；项目用这种视觉反差解释法律如何改变地景意义。'
      },
      {
        year: 'ongoing',
        title: 'Welcome Europa',
        type: 'Mediterranean + Western Balkans / migration + civil solidarity',
        facts: [
          '把十五年以上地中海迁徙研究继续延伸到 Western Balkans 路线。',
          '持续记录进入 EU 前后的 border crossings、relegation spaces 与人物肖像。',
          '除暴力、阻碍和制度性排斥外，明确把 local solidarity initiatives 作为同等重要的拍摄对象。',
          '把不同国家与路线连接成一张持续扩展的视觉地图，而不是以单次新闻危机为项目终点。'
        ],
        reading: '这一步让他的工作从“迁徙的受害图像”进一步转向“谁在制造可通行条件”，因此公民社会也成为作品主体。'
      }
    ],
    images: [],
    sourceLabel: 'Foam / Aperture / institutional sources',
    sourceUrl: samFoam,
  },
  {
    id: 'louise-parker',
    name: 'Louise Parker',
    born: '1989',
    base: 'Los Angeles / New York, United States',
    intro: '从自己作为时装模特的工作现场出发，一边拍后台和日常劳动，一边重新拿回杂志中已经被摄影师、造型师和品牌生产过的“自己”，通过剪贴和重新组合讨论作者权、身份与时尚图像如何制造身体。',
    methods: ['后台纪实', '视觉日记', 'appropriation', '手工 collage', '自我肖像', '摄影书编辑'],
    subjects: ['时尚劳动', '身体', '作者权', '女性身份', '图像所有权', '美的生产机制'],
    outputs: ['摄影', '拼贴', '摄影书项目', '展览'],
    institutions: ['Foam', 'Bard College', 'LensCulture'],
    achievements: ['Foam Talent 2016', 'Work Pictures · MACK First Book Award nomination 2016'],
    whyImportant: '她把“既是模特又是摄影者”变成结构问题：同一个身体在商业杂志里是他人生产的图像，在她的项目里又被剪回、拍回、重新排序，因此作者权本身变成作品材料。',
    projects: [
      {
        year: '2012–2016',
        title: 'Work Pictures',
        type: 'fashion backstage / diary / book-sequence',
        facts: [
          '从 2012 年开始，在自己的模特工作过程中持续拍摄后台、等待、交通、化妆与其他模特。',
          '刻意记录时尚行业不光鲜、重复和日常的一面，用以拆除行业制造出的 exclusivity。',
          '从一开始就把项目想象成一本书，因此照片不是单张“幕后花絮”，而按 diary / storytelling 的连续结构累积。',
          '通过其他模特的直接肖像补充自己的第一人称经验，不把整个行业抽象成匿名系统。',
          '2016 年该项目由 Stephen Shore 提名 MACK First Book Award。'
        ],
        reading: '它把“工作照片”从副产品变成主体：真正的内容是等待、重复、移动和劳动，而不是最终登上杂志的完美成片。'
      },
      {
        year: '2015–2016',
        title: 'Pieces of Me',
        type: 'self-appropriation / magazine collage / reclaimed authorship',
        facts: [
          '只使用自己曾作为模特出现在 magazine editorials 中的印刷图像作为原材料。',
          '把这些商业照片重新剪开、折叠、覆盖和拼合，制造身体比例错位与纸张平面感。',
          '通过重新拍摄 / 展示 collage，把原本属于摄影师、杂志和品牌生产链的“Louise Parker 图像”重新纳入自己的作者结构。',
          '刻意夸张 fashion imagery 中已经存在的姿势、身体碎片和 beauty conventions，而不是做新的“更漂亮”自画像。',
          '2016 年以该系列进入 Foam Talent，并在之后的 Foam Talent 巡展中展出。'
        ],
        reading: '最关键的动作不是自拍，而是“拿回已经流通的自己”：appropriation 在这里既是形式方法，也是所有权和身份问题。'
      }
    ],
    images: [],
    sourceLabel: 'LensCulture / Dazed / Foam',
    sourceUrl: louiseDazed,
  }
];

export const foamTalent2016Deep6Sources = {
  jackHome, jackPhotographs, jackSongFlowers, jackOlPejeta, jackEtchings, jackAnt,
  samFoam, samAperture, samEmpire, samBilateral, samElysee,
  louiseLens, louiseDazed, louiseFoam,
};
