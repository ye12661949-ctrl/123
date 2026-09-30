import type { Artist } from './data';

const felicityHome = 'https://www.felicityhammond.com/';
const felicityBio = 'https://www.felicityhammond.com/bio';
const felicityProperty = 'https://www.felicityhammond.com/property-artist-book-spbh-editions-2019/';
const felicityRemains = 'https://www.felicityhammond.com/remains-in-development';
const felicityHidden = 'https://www.felicityhammond.com/hidden-gems';
const felicityDeposits = 'https://www.felicityhammond.com/deposits/';
const felicityVariations = 'https://photoworks.org.uk/whats-on/felicity-hammond/';

const huntsHome = 'https://www.alexandrahunts.com/';
const huntsMatter = 'https://www.meer.com/en/33808-alexandra-hunts';
const huntsDrum = 'https://www.alexandrahunts.com/index.php/can-you-hear-the-shape-of-the-drum/';
const huntsSomfy = 'https://2018.somfyphotographyaward.com/en/';
const huntsArtHub = 'https://arthubcopenhagen.net/en/profile/alexandra-hunts/';
const huntsManyBody = 'https://www.uni-heidelberg.de/en/transfer/communication/science-and-the-arts/sciart-residency-at-crc-1225-isoquant';
const huntsRijks = 'https://rijksakademie.nl/en/open-archive?filters%5Bfilter_tag_ids%5D%5B%5D=c6d04b94-92f5-49f1-afa3-027aca6e7267&filters%5Btag_list_option%5D=selected';

const yokotaFoam = 'https://www.foam.org/artists/daisuke-yokota';
const yokotaSite = 'https://www.foam.org/events/daisuke-yokota-site-cloud';
const yokotaCanon = 'https://global.canon/en/newcosmos/interview/daisuke-yokota/index.html';
const yokotaVertigo = 'https://newfavebooks.com/interviews/daisuke-yokota/';
const yokotaColor = 'https://www.harpersgallery.com/exhibitions/daisuke-yokota';
const yokotaMatter = 'https://www.lensculture.com/projects/327830-matter-burn-out';

export const foamTalent2016DeepArtists7: Artist[] = [
  {
    id: 'felicity-hammond',
    name: 'Felicity Hammond',
    born: '1988',
    base: 'South London, United Kingdom',
    intro: '把房地产效果图、建筑工地、矿产、数据基础设施和生成式 AI 放进同一条图像生产链。她经常先挪用无摩擦的商业渲染，再把它们与自己拍摄的城市废墟、工业材料和展览现场碰撞，让摄影从平面图像扩展成物体、舞台和可变空间。',
    methods: ['found renderings', '摄影拼贴', '场域特定装置', 'C-type / inkjet', '建筑材料', '生成式 AI', '档案与过程材料'],
    subjects: ['房地产资本', '城市更新', '矿产开采', '数据开采', 'AI 基础设施', '图像与土地'],
    outputs: ['摄影', '摄影书', '大型装置', '公共艺术', '雕塑 / 展示结构'],
    institutions: ['Foam', 'C/O Berlin', 'The Photographers’ Gallery', 'Photoworks', 'Stills Centre for Photography'],
    achievements: ['Foam Talent 2016', 'British Journal of Photography International Photography Award · single image winner 2016', 'Lumen Art Prize · Rapoport Award for Women 2018', 'Deutsche Börse Photography Foundation Prize · longlist 2019', 'Ampersand/Photoworks Fellowship 2023'],
    whyImportant: '她的关键不是“拍建筑”，而是追踪建筑和数字经济先以什么图像承诺未来、再如何消耗土地与材料。尤其是 Variations，把上一站展览的照片直接拿来训练下一站，作品本身变成一个会自我反馈的图像系统。',
    projects: [
      {
        year: '2015–2019',
        title: 'Property',
        type: '房地产渲染 / found image / 摄影书 + photo-sculpture',
        facts: [
          '收集房地产开发商与建筑视觉化系统生产的光滑数字 renderings。',
          '把这些“未来城市”与自己拍摄的施工现场、垃圾、灰尘和未完成空间并置。',
          '在 2019 年摄影书中使用 collage 与 cut-out pages，让纸张开孔和翻页直接模拟虚拟图像如何侵入真实空间。',
          '书中同时放入 photo-sculpture 与 installation view，使“照片”和“承载照片的物体”彼此混淆。'
        ],
        reading: '它不是简单批判地产广告，而是研究一张 render 如何提前替未来空间分配价值。'
      },
      {
        year: '2020–2021',
        title: 'Remains in Development',
        type: 'real-estate collage / site-responsive installation / public display',
        facts: [
          '把 glossy real-estate brochure 的 found images 与自己拍摄的城市和施工材料合成为大幅 collage。',
          '把轮胎、木托盘、石膏袋、construction debris 等广告图像会主动删除的材料重新带回作品。',
          '作品不固定成标准墙面照片，而会依据 C/O Berlin / Kunsthal Extra City 等具体空间改变尺寸、支撑结构和摆放方式。',
          '部分图像重新回到 Berlin 的 advertising columns，使地产视觉再次进入其原本影响的公共城市表面。'
        ],
        reading: '这里最值得学的是“展示方式也属于图像批评”：数字 render 看似无重量，她就强迫它重新拥有支撑、灰尘和体量。'
      },
      {
        year: '2022–ongoing',
        title: 'Hidden Gems',
        type: 'planetary mine / photographic collage / extraction research',
        facts: [
          '把 mined landscapes、矿物、被隐藏的劳动以及 toxic-waste disposal 放进同一组拼贴。',
          '以“planetary mine”为入口，把开采出来的原材料与工业废弃物重新埋回地下的循环并置。',
          '利用 collage 压缩地质深时与未来废物存储的时间尺度，形成不可能但逻辑相关的 speculative landscape。'
        ],
        reading: '从这里开始，她的城市研究明显扩张到“屏幕之前”：一张数字图像首先是矿物、能源和劳动。'
      },
      {
        year: '2023',
        title: 'Deposits',
        type: 'data mining + mineral extraction / gallery-specific installation',
        facts: [
          '继续研究 data mining、mineral extraction 与电子设备之间的材料关系。',
          '为 Galleria Piu 的具体空间设计安装框架，而不是只把既有照片挂墙。',
          '把 technological growth 的工业废料想象成一种未来地质材料，并通过倒置 / 翻转的空间结构让观众在其中移动。'
        ],
        reading: '项目把“数据”重新变成材料问题：服务器、设备和所谓云端都要落回矿石、废物与地层。'
      },
      {
        year: '2024–2026',
        title: 'Variations — V1 Content Aware / V2 Rigged / V3 Model Collapse / V4 Repository',
        type: 'evolving installation / AI feedback loop / four-venue system',
        facts: [
          'V1 把 mining landscapes 的数字图像直接贴到 shipping container 上，并让容器同时承担 image capture / data gathering。',
          '每一站都被摄影记录，这些记录成为下一站生成与训练逻辑的一部分，让作品模拟 AI dataset 的反馈循环。',
          'V2 用钢、铝、PVC banner、镜子、camera、PLA prints 等材料把人类与土地的 extraction system 物质化。',
          'V3 专门处理 model collapse：机器生成数据反复喂回机器后出现的不可能结构、错误和退化。',
          'V4 把 final works 与 props、tests、contact strips、raw files、邮件和物流痕迹共同展示，反问所谓 digital repository 是否真的“无物质”。'
        ],
        reading: '这可能是她目前最完整的方法模型：采矿 → 设备 → 图像 → AI 数据 → 再生成图像 → 存储，整条链被拆成四个互相喂数据的展览。'
      }
    ],
    images: [],
    sourceLabel: 'Felicity Hammond · official / Photoworks',
    sourceUrl: felicityHome,
  },
  {
    id: 'alexandra-hunts',
    name: 'Alexandra Hunts',
    born: '1990',
    base: 'Amsterdam, Netherlands',
    intro: '把摄影当成测量和实验工具，而不是现实的透明记录。她会从 kilogram、光色、共振、量子多体问题等不可见概念出发，与科学家合作，再把数学模型、摄影图像、钢、混凝土、玻璃绝缘子等转成装置。',
    methods: ['跨学科研究', '测量与重复', '摄影作为实验工具', '科学家协作', '雕塑 / 装置', 'performative lecture'],
    subjects: ['测量标准', '知识系统', '量子物理', '边界', '光', '政治系统与不确定性'],
    outputs: ['摄影', '雕塑', '大型装置', '表演 / lecture', '研究出版'],
    institutions: ['Foam', 'Rijksakademie', 'Heidelberg University / IsoQuant', 'Art Hub Copenhagen', 'Norton Museum of Art'],
    achievements: ['Foam Talent 2016', 'Rudin Photography Prize · nominee 2016', 'ING / New Talent Photography Award · selected 2016', 'Hermine van Bers Prize 2018/2019', 'Somfy Photography Award 2019', 'Rijksakademie residency 2023–2025'],
    whyImportant: '她特别适合研究“概念怎样真的变成制作规则”：不是先拍一张看起来像科学的照片，而是先定义 measurement problem，再通过称重、重复、材料选择、与研究者对话把问题变成物体。',
    projects: [
      {
        year: '2016–2017',
        title: 'Mass. Sublime Measurement / Matter of Knowledge',
        type: 'kilogram standard / repetition / photography-installation',
        facts: [
          '为了接近“真正的一公斤”，在果园把一批批苹果称到 1 kg，并重复拍摄。',
          '制作 Search for the Kilogram：1000 张“一公斤苹果”的独立照片，使抽象单位通过大量重复显形。',
          '进入 Netherlands Measurement Institute，拍摄荷兰国家 kilogram prototype #53。',
          '把 Artefact #53 的图像放在一摞约一公斤重的纸上，让图像、纸张和测量单位相互校准。'
        ],
        reading: '她把最普通的单位重新变成问题：所谓客观标准不是自然存在，而由制度、物体和不断校准共同维持。'
      },
      {
        year: '2018–2019',
        title: 'Color of Light',
        type: 'light temperature / photography + solar shading',
        facts: [
          '把光的色温当作社会感知变量，而不只是摄影参数。',
          '研究冷暖光如何改变人在空间里的归属感与舒适度。',
          '把摄影与 solar shading 结合：一种既过滤光、又划分 inside / outside 与 private / public 的建筑工具。'
        ],
        reading: '这一项目把“摄影就是用光书写”从比喻变成空间实验：光同时决定图像，也决定社会边界。'
      },
      {
        year: '2019',
        title: 'Can You Hear the Shape of the Drum?',
        type: 'quantum / mathematics / steel + photographic mesh + concrete',
        facts: [
          '从 Mark Kac 的问题“能否从鼓声听出鼓的形状”出发，研究不同形状可能共享同一 eigenfrequency set。',
          '与 Niels Bohr Institute 的 Charles M. Marcus 对话 wave-particle duality 与边界概念。',
          '不把公式画成说明图，而是使用 steel、photographic print on mesh PVC、concrete 与 found materials 搭成可进入的结构。',
          '用“同一声音不唯一对应一个形状”讨论 borderless existence、identity / multi-identity 与信息过载。'
        ],
        reading: '科学概念在这里不是主题装饰，而成为作品结构：可测量的数据与不可唯一反推的形态之间存在缺口。'
      },
      {
        year: '2022–2023',
        title: 'many-body problem',
        type: 'IsoQuant residency / quantum states + political systems',
        facts: [
          '进入 Heidelberg University CRC 1225 IsoQuant 进行数月 SciArt residency，并直接与量子物理研究者交流。',
          '从 many-body problem——大量相互作用粒子的状态——转向 order / disorder、collapse / restructuring。',
          '随着 Ukraine 战争升级，把 quantum states 的脆弱平衡与政治系统的崩塌、重组并置。',
          '最终形成多件 installation，而不是把 residency 只作为理论背景。'
        ],
        reading: '这条线显示她的方法如何从“科学作为知识对象”转向“科学模型能否帮助思考现实政治结构”。'
      },
      {
        year: '2023–2025',
        title: 'Freedom Trapped in Avalanche / Caution: Live Wires',
        type: 'Ukraine / found infrastructure / embroidery + glass insulators + steel',
        facts: [
          '在 Rijksakademie 阶段把科学研究继续拉回战争、能源与基础设施。',
          'Freedom Trapped in Avalanche 使用旧 Soviet linen、embroidery 与 PET print，让历史材料和当下图像叠在一起。',
          'Caution: Live Wires 使用 Ukrainian glass insulators、stainless steel、neon 与 found window grill。',
          '不把乌克兰只做成新闻影像，而通过电力绝缘、导电 / 阻断、旧材料与保护结构讨论 power。'
        ],
        reading: '从 kilo 到量子再到电网，她始终在追问“力量怎样被测量、传导、限制”；媒介变化很大，但问题结构是一致的。'
      }
    ],
    images: [
      { url: 'https://www.alexandrahunts.com/files/gimgs/th-55_DSCF4855.jpg', title: 'Can You Hear the Shape of the Drum — installation view', credit: '© Alexandra Hunts', sourceUrl: huntsDrum, sourceLabel: 'Alexandra Hunts · official' },
      { url: 'https://www.alexandrahunts.com/files/gimgs/th-55_DSCF4857.jpg', title: 'Can You Hear the Shape of the Drum — installation detail', credit: '© Alexandra Hunts', sourceUrl: huntsDrum, sourceLabel: 'Alexandra Hunts · official' }
    ],
    sourceLabel: 'Alexandra Hunts · official / institutional sources',
    sourceUrl: huntsHome,
  },
  {
    id: 'daisuke-yokota',
    name: 'Daisuke Yokota',
    chineseName: '横田大辅',
    born: '1983',
    base: 'Japan',
    intro: '把“摄影”从一次按快门拆成可以无限继续的处理链：拍摄、打印、再摄影、过热显影、扫描、Photoshop 叠层、透明片重组、无相机彩色胶片实验，再到十万张纸、蜡和燃烧。对他而言，原始对象会逐渐退场，摄影材料自身成为事件。',
    methods: ['再摄影', '过热 / 非标准显影', '扫描与数字叠层', 'photocopy', '无相机胶片实验', 'photobook sequencing', 'wax / burn installation'],
    subjects: ['摄影物质性', '记忆', '时间错位', '复制与噪声', '图像过量', '媒介转译'],
    outputs: ['摄影书', '摄影', '大型装置', '胶片 / 印相实验', '现场材料过程'],
    institutions: ['Foam', 'Tate Modern', 'Centre Pompidou-Metz', 'Aichi Triennale', 'KYOTOGRAPHIE'],
    achievements: ['1_WALL Photography Competition · Grand Prize 2010', 'Foam Talent 2013', 'Foam Talent 2016', 'Foam Paul Huf Award 2016', 'Kimura Ihei Photography Award 2019', 'Paris Photo–Aperture PhotoBook Awards · VERTIGO shortlist 2014'],
    whyImportant: '他是理解 post-photography / material photography 很清楚的案例：不是“后期很重”，而是每一次复制、错误、热、化学反应、扫描和毁坏都继续生成新的摄影。',
    projects: [
      {
        year: '2012–2013',
        title: 'Nocturnes',
        type: 'rephotography / altered development / layered scan',
        facts: [
          '从已有照片出发而不是把原始拍摄当最终图像。',
          '重新拍摄 print，并在胶片处理时改变显影时间。',
          '把处理后的胶片扫描，再在 Photoshop 中继续 layer。',
          '反复复制产生 grain、shadow、匿名人物与难以定位的夜间空间。'
        ],
        reading: '这里已经出现他的核心：复制不是降低原作质量，而是制造下一张照片的工具。'
      },
      {
        year: '2013–2014',
        title: 'Site / Cloud',
        type: 'digital + film + photocopy + darkroom / solo exhibition',
        facts: [
          '把 digital photography 与传统 film 交叉使用，再反复 shoot / re-shoot。',
          '加入 photocopy、Photoshop 和 apartment improvised darkroom 的化学实验。',
          '允许 chance、划痕、化学残留和技术错误进入最终图像。',
          '受 Aphex Twin 等 electronic music 中 echo、delay、reverberation 的时间结构影响，把视觉处理理解成回声。'
        ],
        reading: 'Site / Cloud 不是“拍模糊”，而是让图像经过足够多次回声，以至于来源变成无法完全追回的记忆。'
      },
      {
        year: '2014',
        title: 'VERTIGO / TORANSUPEARENTO',
        type: 'photobook as temporal sequence / transparency remix',
        facts: [
          'VERTIGO 不用单张照片说明眩晕，而用约 90 张黑白图像的连续顺序制造身体与时间失衡。',
          '编辑围绕昼夜错乱、旅行时差、梦与旧记忆像刚发生一样返回的个人时间感。',
          'TORANSUPEARENTO 直接把 VERTIGO 的既有图像重新制作，并全部印在 transparency film。',
          '读者一次会看到多张透明片叠在一起，书页本身成为 image layering device。'
        ],
        reading: '摄影书不是装照片的容器，而是另一台处理机器：翻页、透明叠层和顺序会继续改写旧图像。'
      },
      {
        year: '2014–2015',
        title: 'Color Photographs',
        type: 'camera-less color film / darkroom alchemy',
        facts: [
          '主动尝试“不拍照”，把未曝光的大画幅彩色胶片本身当材料。',
          '把多层 unused large-format color film 叠放，再使用非标准显影方法。',
          '之后扫描化学和物理反应留下的抽象色块与透明结构。',
          '摄影对象从外部世界彻底转为 film 的材料反应。'
        ],
        reading: '这一步最适合用来理解“无相机摄影”：照片仍然依赖感光材料和处理，只是不再需要一个被镜头记录的对象。'
      },
      {
        year: '2015–2017',
        title: 'MATTER / BURN OUT',
        type: '100,000 prints / wax / destruction + re-imaging',
        facts: [
          '把大量照片印在纸卷 / 纸张上，最终发展成约 100,000 张 photographic prints 的巨大物质堆积。',
          '在 Aichi Triennale 版本中给大量 prints 上蜡，使可无限复制的数据重新拥有重量、体积和处理成本。',
          'Xiamen 的 Matter 展示结束后直接烧毁作品，并用约 4,000 张照片记录燃烧过程。',
          '把燃烧记录再次处理、操控，复活成新的 MATTER / BURN OUT 图像与摄影书。',
          'Foam 2017 的 Matter 继续以三维装置把摄影的 volume / tactility 推到展厅尺度。'
        ],
        reading: '这是他最极端的一条循环：照片 → 物体 → 废墟 → 再拍摄 → 新照片。毁坏不是终点，而是下一次曝光。'
      }
    ],
    images: [
      { url: 'https://www.foam.org/_next/image?q=80&url=https%3A%2F%2Fa.storyblok.com%2Ff%2F113697%2F1772x1181%2Fd1624c1bfc%2Flr_daisuke_yokota_foam_by_cvdk_01.jpg&w=1920', title: 'Matter — installation view', credit: 'Photo Christian van der Kooy / Foam', sourceUrl: yokotaFoam, sourceLabel: 'Foam' }
    ],
    sourceLabel: 'Foam / Canon / Newfave / institutional sources',
    sourceUrl: yokotaFoam,
  }
];

export const foamTalent2016Deep7Sources = {
  felicityHome, felicityBio, felicityProperty, felicityRemains, felicityHidden, felicityDeposits, felicityVariations,
  huntsHome, huntsMatter, huntsDrum, huntsSomfy, huntsArtHub, huntsManyBody, huntsRijks,
  yokotaFoam, yokotaSite, yokotaCanon, yokotaVertigo, yokotaColor, yokotaMatter,
};
