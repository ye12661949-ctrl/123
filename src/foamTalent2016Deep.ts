import type { Artist } from './data';

const andreaErbgericht = 'https://andreagruetzner.de/erbgericht';
const andreaWorks = 'https://andreagruetzner.de/works/';
const andreaAbout = 'https://andreagruetzner.de/about';
const maximeAircraft = 'https://maximeguyon.com/aircraft';
const maximeMast = 'https://mastphotogrant.com/artisti/maxime-guyon/';
const maximeSwiss = 'https://www.schweizerkulturpreise.ch/en/maxime-guyon-3';
const stefanieWork = 'https://stefaniemoshammer.com/work/';
const stefanieLand = 'https://stefaniemoshammer.com/work/land-of-black-milk/';

export const foamTalent2016DeepArtists: Artist[] = [
  {
    id: 'andrea-grutzner',
    name: 'Andrea Grützner',
    born: '1984',
    base: 'Dresden, Germany',
    intro: '把真实建筑当成可被光重新绘制的空间：她以模拟摄影、彩色闪光、极端取景、双重曝光与拼贴，把熟悉的旅馆、校园和城市建筑推向绘画般的抽象，同时保留建筑内部积累的社会记忆。',
    methods: ['模拟大画幅摄影', '彩色闪光', '建筑摄影', '极端取景', '数字双重曝光', '拼贴'],
    subjects: ['建筑', '空间记忆', '地方身份', '现代主义', '集体生活', '视觉错觉'],
    outputs: ['摄影', '摄影书', '拼贴', '大型摄影装置'],
    institutions: ['Foam', 'Berlinische Galerie', 'ING Collection', 'DZ Bank Art Collection'],
    achievements: ['Foam Talent 2016', 'Pfalzpreis Kunst · Talent Award 2016', 'ING Unseen Talent Award 2017', 'Stiftungspreis Fotokunst 2020', 'Erbgericht · Best German Photobooks Bronze 2025'],
    whyImportant: '她很适合研究“现场效果如何直接在相机前完成”。Erbgericht 看起来像后期拼贴，但核心方法是先在真实空间布置滤色闪光，让阴影在曝光瞬间把建筑拆成新的平面结构。',
    projects: [
      {
        year: '2014–2024',
        title: 'Erbgericht',
        type: '建筑 / 彩色闪光 / 记忆',
        facts: ['长期回到祖父母所在村庄 Polenz 的历史旅馆 Erbgericht，以模拟相机逐步扫描室内。', '在现场安装带滤色片的闪光灯，让彩色阴影遮挡、复制和拆解墙面、家具与装饰，而不是靠后期制造拼贴感。', '把旅馆跨越多个政治时代的物质痕迹与个人童年记忆放进同一组空间图像。'],
        reading: '重点不是把老旅馆拍得怀旧，而是用灯光制造短暂的“第二空间”，测试摄影怎样改变人对真实建筑和记忆的方向感。'
      },
      {
        year: '2017',
        title: 'Hive',
        type: '校园建筑 / 双重曝光 / 数字拼贴',
        facts: ['在 RMIT 墨尔本校园拍摄高度设计化、相互嵌套的学习与公共空间。', '使用数字双重曝光和拼贴进一步叠加空间，让校园像游戏关卡、虚拟迷宫或科幻布景。'],
        reading: '这里不再追求建筑“正确透视”，而是故意把实体空间推向虚拟界面，观察设计环境怎样影响行为和感知。'
      },
      {
        year: '2015–2016',
        title: 'das Eck',
        type: '城市建筑 / 图形化取景',
        facts: ['在 Koblenz 城市摄影驻留期间持续拍摄战后城市建筑。', '通过极近局部、边角、表面与几何关系，把建筑从功能空间转成颜色、平面和结构的组合。'],
        reading: '它展示了“建筑摄影”不一定要交代建筑全貌，也可以靠裁切和图形关系研究一座城市的历史审美。'
      },
      {
        year: '2016–2017',
        title: 'Tanztee',
        type: '身体细节 / 舞会 / 连续安装',
        facts: ['在 Erbgericht 的周日下午舞会观察主要由年长女性组成的本地社群。', '回避完整脸部和场景说明，只拍鲜艳衣料、皱纹、手、首饰和贴近运动中的身体细节。', '展览时让照片彼此紧贴形成连续色彩与动作场。'],
        reading: '与 Erbgericht 的空建筑相反，这里由身体碎片产生空间；连续悬挂又把单张照片变成舞蹈节奏。'
      }
    ],
    images: [
      {
        url: 'https://andreagruetzner.de/system/files/665116/b6342b820ace000009/w_medium_Gruetzner-Erbgericht-2024_36.jpg',
        title: 'Erbgericht · 彩色闪光与室内阴影',
        credit: '© Andrea Grützner',
        sourceUrl: andreaErbgericht,
        sourceLabel: 'Andrea Grützner · 官方项目'
      },
      {
        url: 'https://andreagruetzner.de/system/files/665116/6e342b824de5000007/w_medium_Gruetzner-Erbgericht-2024_35.jpg',
        title: 'Erbgericht · interior study',
        credit: '© Andrea Grützner',
        sourceUrl: andreaErbgericht,
        sourceLabel: 'Andrea Grützner · 官方项目'
      }
    ],
    sourceLabel: 'Andrea Grützner · 官方作品档案',
    sourceUrl: andreaWorks
  },
  {
    id: 'maxime-guyon',
    name: 'Maxime Guyon',
    born: '1990',
    base: 'Paris, France',
    intro: '把航空、工业设计和技术产品拍得像没有尺度与时间的数字物体。他一方面严格控制照明、清晰度与构图，另一方面又让真实摄影主动接近 3D 渲染和商业图像的“过度完美”。',
    methods: ['大画幅数字摄影', '工业现场摄影', '控制照明', '超清晰成像', '商业图像语言', '技术研究'],
    subjects: ['航空工业', '技术', '工业物件', '图像去物质化', '人工制品', '未来感'],
    outputs: ['摄影', '摄影书', '展览', '研究型项目'],
    institutions: ['Foam', 'MAST Foundation', 'ECAL', 'Images Vevey'],
    achievements: ['Foam Talent 2016', 'MAST Photography Grant on Industry and Work 2020 · finalist', 'Swiss Design Awards 2025 · nomination'],
    whyImportant: '他适合研究商业摄影语言怎样进入当代艺术：不是靠把商品拍“丑”，而是把清晰、无尘、无背景、极度可控的工业美学推到近乎虚拟渲染的程度，让真实机器反而显得不真实。',
    projects: [
      {
        year: '2017–2020',
        title: 'Aircraft / Aircraft: The New Anatomy',
        type: '航空工业 / 大画幅数字摄影',
        facts: ['进入多个重要航空制造场所，持续拍摄飞机骨架、涡轮、液压活塞、电气连接和机舱等部件。', '使用大画幅数字摄影并保持从整体到最小铆钉都高度清晰，主动消除工厂噪音、人物与环境背景。', '把零部件组织成近乎无天空、无时间、无尺度的超真实图像，并于 2020 年形成摄影书 Aircraft: The New Anatomy。'],
        reading: '作品同时借用产品摄影和 3D 渲染的视觉代码：机器是真实存在的，但观看方式像面对一套尚未装配完成的数字模型。'
      },
      {
        year: '2025',
        title: 'Technological Exaptation',
        type: '技术 / 摄影研究',
        facts: ['以“Technological Exaptation”作为新的摄影研究项目，并进入 2025 Swiss Design Awards 提名。', '继续把技术对象及其功能演化作为摄影研究入口，关注一个为特定用途制造的人工物如何被重新解释、迁移或获得新功能。'],
        reading: '项目仍处在继续公开资料的阶段，本站只保留目前由 Swiss Design Awards 明确确认的项目名称、媒介与提名关系，不用推测性文本补齐作品。'
      }
    ],
    images: [],
    sourceLabel: 'Maxime Guyon / MAST · Aircraft',
    sourceUrl: maximeMast
  },
  {
    id: 'stefanie-moshammer',
    name: 'Stefanie Moshammer',
    born: '1988',
    base: 'Vienna, Austria',
    intro: '在纪实观察和主观编排之间来回切换：她把陌生城市、青年社交媒体、家庭旧物、文字、视频与摄影书编辑混在一起，让“真实地点”逐渐变成带有欲望、记忆和虚构成分的视觉叙事。',
    methods: ['田野摄影', '主观纪实', '编排摄影', '档案与社交媒体', '文字', '影像', '摄影书编辑', '装置'],
    subjects: ['城市', '欲望', '女性经验', '青年身份', '家庭记忆', '阶层', '地方想象'],
    outputs: ['摄影', '摄影书', '视频', '装置', '展览'],
    institutions: ['Foam', 'C/O Berlin', 'KUNST HAUS WIEN', 'Villa Noailles'],
    achievements: ['Foam Talent 2016', 'ING Unseen Talent Award · nomination', 'C/O Berlin Talent Award 2018', 'Florentine Riem Vis Grant'],
    whyImportant: '她的项目非常适合研究“纪实摄影为什么不必假装中立”：现场观察、当事人自我呈现、文学文本、色彩和摄影书顺序都被明确承认为叙事工具。',
    projects: [
      {
        year: '2014–2015',
        title: 'Vegas and She',
        type: '城市 / 女性 / 欲望 / 摄影书',
        facts: ['在 Las Vegas 长期接触并拍摄当地女性，尤其关注以舞蹈、性别表演和人工身份维系城市欲望经济的人。', '把人物肖像与粉色汽车、植物、纹身、金色室内、沙漠和城市碎片混编，让现实记录与人工幻想互相污染。', '自己完成摄影书的设计与概念，加入文学引用、粉红色文本页、酒店账单和保释文件等非摄影材料。'],
        reading: '项目不是一组“脱衣舞者纪实”，而是把女性的自我塑造、城市景观和书籍编辑共同变成 Las Vegas 人工欲望机制的模型。'
      },
      {
        year: '2015',
        title: 'Young Gods',
        type: '青年 / 社交媒体 / 自我呈现',
        facts: ['在丹麦拍摄年轻男性与青春期生活。', '同时收集男孩自己发布在社交媒体上的图像，与艺术家拍摄的照片并置。', '让“他们怎样展示自己”和“摄影师怎样观看他们”两套视觉权力在同一系列发生冲突。'],
        reading: '作品把社交媒体图像直接纳入作者结构，因此肖像不再只是摄影师单方面定义被摄者。'
      },
      {
        year: '2016',
        title: 'Land of Black Milk',
        type: 'Rio / 城市矛盾 / 主观纪实',
        facts: ['在 Rio de Janeiro 穿行富裕城区、favela 与城市边缘，把人物、建筑、静物和偶遇共同拍摄。', '不按传统新闻摄影分类，而以诱惑 / 腐败、欲望 / 枪声、脆弱 / 强大等矛盾关系进行图像编排。', '2017 年将项目扩成 112 页摄影书，以彩色与黑白图像、文字和不同纸张节奏重新编辑。'],
        reading: '她不试图给 Rio 一个统一结论，而是让同一城市的互相冲突的现实在摄影书中并存。'
      },
      {
        year: '2016–2019',
        title: 'Tomorrow of Yesterday',
        type: 'Haiti / 摄影 + 视频 / 主观叙事',
        facts: ['项目在 Haiti 的现场经验中发展，以高温、水、植物、傍晚等反复出现的感官线索组织图像。', '摄影之外制作 5 分 05 秒 Full HD 彩色有声视频，使地点经验通过时间和声音继续展开。', '随后以 Foam Amsterdam 与 Shanghai 的个展形式发展为不同空间版本。'],
        reading: '项目说明她不是把旅行地点“说明清楚”，而是把感觉、时间和图像之间的距离本身作为作品。'
      },
      {
        year: '2014–2026',
        title: "Grandmother said it's okay",
        type: '家庭旧物 / 再利用 / 编排 / 装置',
        facts: ['长期回到上奥地利祖父母乡间住宅，持续整理被保存、改造和重复使用的布料、衣物与日常物件。', '把屋中旧物重新编排为摄影构图，并让祖母穿上屋内找到的服装参与拍摄。', '进一步把废弃床单、桌布、石头等真实材料发展成悬挂织物与装置，使“物如何继续被使用”进入展览空间。'],
        reading: '家庭记忆在这里不是靠旧照片怀旧，而是通过继续使用、重新穿戴、重新摆放这些物件被生产出来。'
      }
    ],
    images: [
      {
        url: 'https://stefaniemoshammer.com/site/assets/files/2172/moshammer_lobm_4061.300x0.1690402962.jpg',
        title: 'Land of Black Milk · Rio de Janeiro',
        credit: '© Stefanie Moshammer',
        sourceUrl: stefanieLand,
        sourceLabel: 'Stefanie Moshammer · 官方项目'
      },
      {
        url: 'https://stefaniemoshammer.com/site/assets/files/2177/stefanie-moshammer_ostlicht_1001.300x0.1690402963.jpg',
        title: 'Land of Black Milk · exhibition / work view',
        credit: '© Stefanie Moshammer',
        sourceUrl: stefanieLand,
        sourceLabel: 'Stefanie Moshammer · 官方项目'
      }
    ],
    sourceLabel: 'Stefanie Moshammer · 官方作品档案',
    sourceUrl: stefanieWork
  }
];

export const foamTalent2016DeepSources = {
  andreaAbout,
  maximeAircraft,
  maximeSwiss,
};
