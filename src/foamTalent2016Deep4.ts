import type { Artist } from './data';

const sofiaLens = 'https://www.lensculture.com/projects/354420-every-night-temo-ser-la-dinner';
const sofiaBienal = 'https://repositorio.ci.cultura.gob.mx/exposiciones/xvii-bienal-de-fotografia-2/';
const sofiaDalpine = 'https://www.dalpine.com/en-es/products/sofia-ayarzagoitia';
const sofiaMadrid = 'https://www.comunidad.madrid/cultura/proceso-seleccion-fotocanal-libro-fotografia';

const bubiHome = 'https://www.bubicanal.com/';
const bubiAbout = 'https://www.bubicanal.com/about';
const bubiSpecial = 'https://www.bubicanal.com/special-moment-munch-gallery-new-york';
const bubiMagic = 'https://www.bubicanal.com/magic-garden-munch-gallery-new-york';
const bubiGloaming = 'https://www.bubicanal.com/contemporary-arts-center-cac';
const bubiHorizon = 'https://www.bubicanal.com/horizon-nave-sotoliva';

const ciregiaHome = 'https://www.paolociregia.eu/';
const ciregiaPerestrojka = 'https://phmuseum.com/projects/perestrojka?f=f';
const ciregiaInterview = 'https://urbanautica.com/interview/paolo-ciregia-perestrojka/870';
const ciregia125 = 'https://www.paolociregia.eu/portfolio-selected-2018-20.pdf';
const ciregiaDefensive = 'https://www.unive.it/pag/36677/?L=1';

export const foamTalent2016DeepArtists4: Artist[] = [
  {
    id: 'sofia-ayarzagoitia',
    name: 'Sofia Ayarzagoitia',
    chineseName: '索菲娅·阿亚尔萨戈伊蒂亚',
    born: '1987',
    base: 'Monterrey / Madrid',
    intro: '从纪实摄影出发，但把亲密关系、日记、文字和被摄者为镜头做出的动作放进同一个自传性结构。她并不追求“客观记录亲密关系”，而是让摄影成为与他人共同发生的一场表演。',
    methods: ['表演性纪实', '亲密肖像', '视觉日记', '直接闪光', '文字 / 日记', '摄影书编辑'],
    subjects: ['亲密关系', '欲望', '身体', '记忆与虚构', '差异', '身份'],
    outputs: ['摄影', '摄影书', '文字 / 日记', '展览'],
    institutions: ['Foam', 'Centro de la Imagen', 'PhotoEspaña', 'FotoFest'],
    achievements: ['Foam Talent 2016', 'XVII Bienal de Fotografía · First Prize 2016', 'La Fábrica Photobook Dummy Award 2016', 'PHmuseum Photography Grant · Honourable Mention 2017', 'FotoCanal · winning project 2025'],
    whyImportant: '她的核心不是把私人生活当题材，而是把摄影关系本身变成作品：她不一定出现在画面里，但文字、闪光、拍摄动作和被摄者对她的回应不断证明摄影师也在现场。',
    projects: [
      {
        year: '2015–2016',
        title: 'Every night temo ser la dinner',
        type: '视觉日记 / 11 次亲密相遇 / 表演性纪实',
        facts: [
          '以在 Madrid 生活期间与 11 位男性朋友 / 情人的相遇构成非线性的视觉日记。',
          '让被摄者为相机做动作，而不是只在远处观察；作者本人通常不进入画面，却通过关系和文字持续存在。',
          '使用直接正面闪光，把夜晚、房间和身体从黑暗里突然“揭露”出来。',
          '把照片、sketches、私人日记和 Spanglish 文本共同编辑进项目与摄影书。',
          '2016 年由 La Fábrica 出版，并获得 Centro de la Imagen 第 XVII 届摄影双年展第一奖。'
        ],
        reading: '真正值得研究的是“作者如何不露面却仍然是作品的一部分”：摄影不是旁观，而是一段关系留下的痕迹。'
      },
      {
        year: '2025–2026',
        title: 'El menso metió la cabeza en un hormiguero',
        type: '拉丁美洲旅行 / 亲密关系 / 身体差异 / 摄影书',
        facts: [
          '与患有白化症的伴侣一起穿行多个拉丁美洲国家，以旅行日记结构拍摄人物与地景。',
          '从两个人的亲密经验出发，把“被社会视为差异”的身体逐渐连接到遗传学、基因技术和身体可被修改的问题。',
          '让亲密肖像与陌生地景、科学问题和身份政治并置，而不是把白化症处理成医学纪实专题。',
          '2025 年获 FotoCanal 摄影书项目，2026 年由 Dalpine / Comunidad de Madrid 出版为 124 页、105 张照片的摄影书。'
        ],
        reading: '与第一本书相比，她仍从亲密关系进入，但问题已经从“我和他人的关系”推进到“社会为什么想纠正某些身体”。'
      }
    ],
    images: [],
    sourceLabel: 'Centro de la Imagen / LensCulture / Dalpine',
    sourceUrl: sofiaBienal,
  },
  {
    id: 'bubi-canal',
    name: 'Bubi Canal',
    born: '1980',
    base: 'New York',
    intro: '把摄影、雕塑和 moving image 组织成一个持续生长的私人神话系统。他从身边亲密的人、流行文化、童年记忆和手工道具出发，先在现实空间制造角色与物件，再用镜头把它们推向介于玩具、图腾与未知生物之间的世界。',
    methods: ['编排摄影', '手工道具', '临时雕塑', '服装 / 角色设计', 'moving image', '身体表演', '高饱和色彩'],
    subjects: ['混合神话', '身份', '童年记忆', '流行文化', '希望与想象', '亲密社群'],
    outputs: ['摄影', '雕塑', '视频', '装置', '摄影书'],
    institutions: ['Foam', 'Contemporary Arts Center Cincinnati', 'Aperture Foundation', 'Benaki Museum'],
    achievements: ['Foam Talent 2016', 'Silver Art Projects residency · World Trade Center'],
    whyImportant: '他的图像看起来像数字幻想，但大量效果其实先在现实中完成：找身边的人、做服装和道具、搭物体、选黄昏地景、排动作，再摄影。它非常适合研究“世界建构不是后期特效，而是一套拍摄前的规则系统”。',
    projects: [
      {
        year: '2013',
        title: 'Special Moment / Chrystelle',
        type: '摄影 + object + video / 私人神话',
        facts: [
          '第一场纽约个展同时呈现摄影、物件和 video，而不是把不同媒介拆成独立系列。',
          '以最亲近的人而非职业模特作为角色，让朋友与自身生活直接进入虚构世界。',
          '服装、玩具感物件、饱和色和几何造型都先被制作 / 放置在镜头前。',
          '视频 Chrystelle 回到 Santander 的自然地景，让高度人工的服装与真实海岸 / 植物发生冲突。'
        ],
        reading: '他的“超现实”不是逃离现实，而是不断把现实中的亲友、故乡和日常物件重新编码。'
      },
      {
        year: '2013–2015',
        title: 'Beautiful Mystery / Magic Garden',
        type: '静物转肖像 / found plastic sculpture / 摄影 + 雕塑',
        facts: [
          '最初计划制作 still life，但工作过程中把物件理解成有性格的角色，系列最终转向“portrait”。',
          '使用典型美国家庭地下室 / den 作为固定背景，把熟悉空间改造成陌生舞台。',
          '以彩色 found plastic 组装 Magic Garden 雕塑，使廉价现成材料获得图腾式形态。',
          '2015 年 Munch Gallery 个展把摄影、雕塑和 Hologram video 放在同一世界观中。'
        ],
        reading: '这里可以直接看到他的工作方式：先搭建物体，再允许物体反过来改变原先的项目计划。'
      },
      {
        year: '2015–2016',
        title: 'Hologram',
        type: 'moving image / choreography / 心理空间',
        facts: [
          '让角色从黑暗 / 恐惧逐渐走向光与爱，把外部场景设定为角色潜意识的物质化。',
          '人物之间主要通过 choreography 与姿态而不是对白进行交流。',
          '服装、身体和场景变化承担叙事，而不是依靠传统剧情解释。',
          '该阶段作品进入 Foam Talent 2016 的国际展示语境。'
        ],
        reading: '视频进一步证明他的摄影角色不是固定 pose：身体动作本身就是世界观的一部分。'
      },
      {
        year: '2019',
        title: 'Into the Gloaming / Cosmovision',
        type: '黄昏肖像 / 地景 / semiotic journey',
        facts: [
          '在 New York 与 Santander 的黄昏时段拍摄 18 张肖像，把自然光最不稳定的过渡时间设为统一视觉规则。',
          '拍摄对象仍以亲密关系中的人以及艺术家本人为主，并为他们设计虚构身份和场景。',
          '把 Cantabrian mythology、vintage Japanese television 与 pop culture 混合成新的个人 folklore。',
          '配套 video Cosmovision 通过追踪地景中的 signs 建立一条半符号学式的探索路线。'
        ],
        reading: '这组作品最清楚地显示“规则”如何产生世界：固定黄昏时段 + 熟人 + 服装 + 神话引用，就足以构成高度一致的宇宙。'
      }
    ],
    images: [],
    sourceLabel: 'Bubi Canal · official archive',
    sourceUrl: bubiAbout,
  },
  {
    id: 'paolo-ciregia',
    name: 'Paolo Ciregia',
    born: '1987',
    base: 'Italy',
    intro: '从俄乌冲突中的摄影报道经验出发，逐渐主动放弃“更多战地照片”的逻辑，转而切割、烧蚀、删除自己的照片，扫描真实物件的伤痕，再把宣传设备、声音、雕塑和城市障碍转成装置。',
    methods: ['档案再加工', '切割 / 擦除 / 腐蚀', '扫描', 'mixed media', '声音装置', '雕塑', '参与式研究'],
    subjects: ['战争', '宣传', '意识形态', '集体记忆', '权力', '城市排斥'],
    outputs: ['摄影', 'mixed-media print', '雕塑', '声音装置', '空间装置'],
    institutions: ['Foam', 'Museo Pecci', 'Fotografia Europea', 'Ca’ Foscari University'],
    achievements: ['Foam Talent 2016', 'Giovane Fotografia Italiana #5 winner 2017', 'PHmuseum Grant · second prize 2018', 'Sustainable Art Prize 2018', 'Premio Francesco Fabbri 2021'],
    whyImportant: '他的关键转变是从“拍摄冲突”转向“处理冲突留下的痕迹”。照片、盾牌、石块、旧收音机甚至城市障碍都可以成为证据；作品方法从图像编辑逐渐转成材料和空间。',
    projects: [
      {
        year: '2014–2015',
        title: 'Perestrojka',
        type: '私人战地档案 / 切割 / 擦除 / 腐蚀',
        facts: [
          '在乌克兰冲突期间约 8 个月拍摄 Maidan、Crimea 与 Donbass，并积累个人报道档案。',
          '回到工作室后不再继续生产同类战争图像，而是在自己拍摄的照片上切割、裁除、覆盖和腐蚀。',
          '主动删除尸体、武器和最具煽情性的部分，以白色空缺迫使观看者自己填补缺失信息。',
          '把传统 reportage 的“证明现场”改造成对观看战争图像本身的质疑。'
        ],
        reading: '不是用艺术美化战争，而是通过破坏自己拍到的“证据”来反对战争摄影被快速消费。'
      },
      {
        year: '2016–2017',
        title: 'Exeresi',
        type: '宣传档案 / magazine image manipulation / close-up',
        facts: [
          '收集 Fascist、Communist、Nazi 等不同阵营的宣传杂志 / 历史图像。',
          '对现成图像进行切割、重组和局部放大，使原本完整的宣传叙事失去上下文。',
          '通过极近 close-up 把制服、身体、符号和暴力细节从英雄叙事中分离出来。',
          '项目进入 2017 Giovane Fotografia Italiana #5 · LOOP，并获得该届项目认可。'
        ],
        reading: '他并不比较哪一种宣传“更坏”，而是抽掉阵营标签，寻找它们共同使用的视觉机制。'
      },
      {
        year: '2016–2017',
        title: 'Ideological Loop',
        type: '旧媒介设备 / sound loop / installation',
        facts: [
          '把旧 Nazi VE301 radio、改造过的 record player、地毯、军用头盔、鸟笼和 megaphone 等物体带入装置。',
          '让 Lenin 等政治演说片段在装置中不断循环，使历史声音变成物理空间里的重复。',
          '以鹦鹉 / megaphone 作为“重复宣传”的象征，同时让不同国家和时期的军用头盔并列。',
          '作品进入 Foam Talent 在 New York / London 的巡展。'
        ],
        reading: '摄影在这里已经退到一旁；真正的“图像”由物件、声音和观众身体共同生成。'
      },
      {
        year: '2017–2018',
        title: '125',
        type: 'anti-monument / 盾牌扫描 / 玻璃石块 / Morse light',
        facts: [
          '从 2014 Maidan 冲突中真实留下的防暴盾牌表面提取几厘米区域进行数字扫描。',
          '将微小划痕放大成大型黑色表面，使示威者与警方留下的痕迹变成无法区分阵营的“伤口”。',
          '把街头投掷的 sanpietrino / 石块转化为易碎玻璃版本，冻结“投掷”这一暴力动作的痕迹。',
          '将“Historia magistra vitae”转换成多数观众无法即时解码的 Morse code 灯光。'
        ],
        reading: '它不是纪念某一方的英雄，而是故意制造 anti-monument：只留下冲突物件的伤痕和无法被轻易解释的信号。'
      },
      {
        year: '2019',
        title: 'The Defensive City / You are (NOT) welcome',
        type: '参与式城市调查 / hostile architecture / brass sculpture',
        facts: [
          '与 Ca’ Foscari 学生共同收集城市中不易察觉的建筑障碍 / hostile architecture 图像，先建立数字档案。',
          '从学生拍到的 barrier 轮廓中提取几何形状，把三维障碍压扁成二维符号。',
          '将这些形状制作成 brass silhouettes，组织成类似古老字母表的“排斥语言”。',
          '项目把战争与宣传研究扩展到日常城市空间：权力也可以通过座椅、栏杆和通行方式作用于身体。'
        ],
        reading: '这一阶段最重要的是从个人档案走向集体采集：观看权力不再只靠艺术家自己的相机。'
      }
    ],
    images: [],
    sourceLabel: 'Paolo Ciregia · official / institutional sources',
    sourceUrl: ciregiaHome,
  }
];

export const foamTalent2016Deep4Sources = {
  sofia: [sofiaLens, sofiaBienal, sofiaDalpine, sofiaMadrid],
  bubi: [bubiHome, bubiAbout, bubiSpecial, bubiMagic, bubiGloaming, bubiHorizon],
  ciregia: [ciregiaHome, ciregiaPerestrojka, ciregiaInterview, ciregia125, ciregiaDefensive],
};
