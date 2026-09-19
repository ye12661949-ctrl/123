import type { Artist } from './data';
import type { ArtistArchive, ArchiveProject } from './archiveData';

type ArtistRecord = Omit<Artist, 'projects' | 'images' | 'sourceUrl' | 'sourceLabel'> & {
  projects: ArchiveProject[];
};

const records: ArtistRecord[] = [
  {
    id: 'john-houck',
    name: 'John Houck',
    born: '1977',
    base: 'Los Angeles',
    intro: '把程序生成、打印、折纸、再摄影和再次打印串成反馈回路，让同一张纸上的真实折痕与过去折痕的影像彼此叠加。',
    methods: ['程序生成', '再摄影', '折纸', '数字打印', '反馈回路', '摄影装置'],
    subjects: ['图像生产', '数字摄影', '记忆', '错觉', '材料性', '重复'],
    outputs: ['摄影', '摄影装置', '绘画 / 摄影混合'],
    institutions: ['MoMA', 'Whitney Museum', 'Hammer Museum', 'Guggenheim', 'LACMA'],
    achievements: ['MoMA · Ocean of Images: New Photography 2015', 'Made in L.A. 2018 · Hammer Museum'],
    whyImportant: '他的价值在于把“后期”变成一个可以被拆解的实体流程：软件先生成规则，纸张再通过折叠和光线打断规则，随后每次再摄影都把旧的三维痕迹压回二维。非常适合用来理解“处理动作本身就是摄影内容”。',
    projects: [
      {
        title: 'Aggregates',
        period: '2011–',
        cluster: '程序生成 / 折叠 / 再摄影 / 反馈回路',
        summary: '从有限色彩与像素组合的程序索引开始，将网格打印到纸上、折叠、拍摄、再打印，再继续折叠与再摄影；最终画面同时包含真实折痕、被摄影记录的旧折痕以及数码再生产产生的误差。',
        actions: ['编写程序生成有限色彩和网格的全部组合', '把组合索引打印到纸上', '手工折叠纸张引入真实光影', '重新拍摄已折叠的打印物', '再次打印并重复折叠—再摄影', '保留接缝、摩尔纹、色边和错觉深度'],
        sourceUrl: 'https://www.johnhouck.com/work/aggregates/',
        images: [],
        relations: [{ kind: '收藏', label: 'MoMA / Whitney / Guggenheim / LACMA', detail: '作品进入多家公共收藏' }]
      },
      {
        title: 'Made in L.A. works',
        period: '2018',
        cluster: '层叠摄影 / 绘画痕迹 / 记忆',
        summary: '继续以“拍摄—打印—再拍摄”的反馈回路制作层叠图像，并把绘画、物件与心理记忆带入原本高度系统化的摄影结构。',
        actions: ['编排纸张、物件与绘画痕迹', '拍摄并打印', '继续折叠或覆盖前一层图像', '再次拍摄让不同时间层压在同一平面'],
        sourceUrl: 'https://hammer.ucla.edu/exhibitions/2018/made-in-la-2018/john-houck',
        images: [],
        relations: [{ kind: '展览', label: 'Made in L.A. — Hammer Museum', detail: '2018' }]
      }
    ]
  },
  {
    id: 'eileen-quinlan',
    name: 'Eileen Quinlan',
    born: '1972',
    base: 'New York',
    intro: '用烟雾、镜子、彩色灯片、反射和模拟相机搭出摄影棚场景，把商业摄影的工具反过来生产近乎绘画性的抽象图像。',
    methods: ['摄影棚搭建', '镜面反射', '烟雾', '彩色滤片', '模拟摄影', '胶片处理'],
    subjects: ['摄影材料性', '抽象', '商业摄影语言', '观看错觉', '图像表面'],
    outputs: ['摄影', '摄影装置'],
    institutions: ['Whitney Museum', 'SFMOMA', 'MOCA Los Angeles', 'Centre Pompidou'],
    achievements: ['Undone · Whitney Museum 2007–2008', '作品进入 Whitney / SFMOMA / MOCA LA 收藏'],
    whyImportant: '她是理解“抽象摄影不是 Photoshop 滤镜”的关键人物：抽象来自真实摄影棚里的烟、镜子、灯光和反射关系，成片却刻意让观众难以还原现场。制作过程非常物理，结果却高度不可判定。',
    projects: [
      {
        title: 'Smoke & Mirrors',
        period: '2005–2009',
        cluster: '烟雾 / 镜子 / 灯光 / 摄影棚抽象',
        summary: '把烟、镜子、彩色灯片与商业产品摄影常用的布光工具组合在摄影棚中，通过镜面多重反射把简单材料变成复杂抽象空间。',
        actions: ['在棚内摆放镜子与反光材料', '释放或控制烟雾', '加入彩色 lighting gels 与定向灯光', '用中画幅 / 大画幅相机拍摄反射结构', '保留画面中无法被轻易还原的空间混淆'],
        sourceUrl: 'https://whitney.org/media/1297',
        images: [],
        relations: [{ kind: '展览', label: 'Undone — Whitney Museum', detail: '2007–2008' }, { kind: '收藏', label: 'Smoke & Mirrors #68 — SFMOMA', detail: '2009' }]
      },
      {
        title: 'Doll Parts',
        period: '2023',
        cluster: '镜面支撑 / 打印 / 反射 / 观看者进入图像',
        summary: '把镜子从被拍摄的道具推进为照片的物质支撑，使打印图像、镜面反射、观众身体和展厅空间同时存在。',
        actions: ['把摄影图像转印或安装到镜面材料', '让镜面继续反射观众与现场', '利用图像与反射之间的不稳定叠加改变作品边界'],
        sourceUrl: 'https://www.eileenquinlan.com/2023',
        images: [],
        relations: []
      }
    ]
  },
  {
    id: 'penelope-umbrico',
    name: 'Penelope Umbrico',
    born: '1957',
    base: 'New York',
    intro: '从 Flickr、eBay、Craigslist 等平台搜集海量既有图像，通过搜索词、裁切、计数和重新打印，把平台图像的重复性本身变成作品。',
    methods: ['网络挪用', '搜索引擎', '图像采样', '裁切', '分类 / 计数', '再打印'],
    subjects: ['图像过剩', '平台', '大众摄影', '屏幕', '技术故障', '重复'],
    outputs: ['摄影装置', '打印', '摄影书', '网络项目'],
    institutions: ['SFMOMA', 'Aperture'],
    achievements: ['5,377,183 Suns (from Sunsets) from Flickr (Partial) · SFMOMA collection', 'Penelope Umbrico: Photographs · Aperture 2011'],
    whyImportant: '她把“搜图”变成非常严格的创作动作：关键词决定样本池，平台决定原始图像的生产方式，艺术家再通过裁切和数量把单张照片的作者性压低。对于研究 AI 训练集、平台视觉和现成图像尤其重要。',
    projects: [
      {
        title: 'Suns (from Sunsets) from Flickr',
        period: '2006–',
        cluster: '平台图像 / 搜索 / 裁切 / 大规模安装',
        summary: '从 Flickr 上以“sunset”等关键词检索海量照片，只截取其中最明确的太阳，再把这些高度相似但来源不同的太阳打印成密集墙面。作品标题随平台搜索结果数量变化。',
        actions: ['在 Flickr 以固定关键词搜索', '记录搜索结果总数', '从用户上传照片中筛选有明确太阳的画面', '只裁切太阳区域', '把裁切图以小幅照片密集安装', '用搜索结果数量更新作品标题'],
        sourceUrl: 'https://www.sfmoma.org/artist/Penelope_Umbrico/',
        images: [],
        relations: [{ kind: '收藏', label: 'SFMOMA', detail: '5,377,183 Suns (from Sunsets) from Flickr (Partial) 4/28/09' }]
      },
      {
        title: 'Broken Sets / eBay',
        period: '2008–',
        cluster: '故障屏幕 / eBay / 抽象裁切',
        summary: '从 eBay 卖家展示“损坏但仍通电”的 LCD 电视照片中裁出故障屏幕，使交易图片里的技术失败转成类似现代主义抽象画的色块。',
        actions: ['搜索 eBay 的损坏 LCD 电视商品图', '筛选仍亮屏的故障画面', '裁掉商品环境只保留屏幕区域', '以金属纸等材料重新输出'],
        sourceUrl: 'https://kochgallery.com/artists/penelope-umbrico/',
        images: [],
        relations: [{ kind: '展览', label: 'Web on the Wall — Robert Koch Gallery', detail: '2014' }]
      }
    ]
  },
  {
    id: 'sara-cwynar',
    name: 'Sara Cwynar',
    born: '1985',
    base: 'Brooklyn, New York',
    intro: '把广告、百科全书、eBay 商品、旧杂志与自己拍摄的物件反复扫描、摆拍、打印、拼贴和再摄影，研究消费图像如何制造欲望与价值。',
    methods: ['档案图像', '拼贴', '摆拍', '再摄影', '扫描', '影像论文'],
    subjects: ['消费主义', '欲望', '颜色', '女性形象', '价值', '图像流通'],
    outputs: ['摄影', '16mm / 数字影像', '装置', '摄影书', '表演'],
    institutions: ['MoMA', 'MoMA PS1', 'Guggenheim', 'SFMOMA', 'Centre Pompidou', 'MOCA Toronto'],
    achievements: ['Greater New York · MoMA PS1 2015–2016', 'Red Film · MoMA collection', 'Baby Blue Benzo Beta · MOCA Toronto 2026'],
    whyImportant: '她把平面设计式图像操作重新物质化：很多“像 Photoshop”的画面其实经历了搜集、打印、摆台、重拍、再拼贴。她特别适合和 Lucas Blalock 对照——一个故意留下软件动作，一个把数字图像循环拉回实体摄影棚。',
    projects: [
      {
        title: 'Soft Film / Rose Gold / Red Film',
        period: '2016–2018',
        cluster: '消费图像 / 影像论文 / 颜色与价值',
        summary: '把二手物件、广告图像、艺术史复制品、摄影棚表演与旁白组织成三部影片，讨论图像、商品、颜色与欲望如何共同生产价值。',
        actions: ['从 eBay、旧书与档案中搜集物件和图像', '在摄影棚重新摆拍和拍摄', '将静物、表演与理论文字编入影片', '用颜色与重复物件作为跨镜头结构', '在模拟与数字影像之间切换'],
        sourceUrl: 'https://www.moma.org/magazine/articles/578',
        images: [],
        relations: [{ kind: '收藏', label: 'Red Film — MoMA', detail: '2018 / acquired 2019' }]
      },
      {
        title: 'Baby Blue Benzo',
        period: '2024–2026',
        cluster: '汽车 / 药物 / AI 图像 / 价值系统',
        summary: '从 Mercedes-Benz 300 SLR 的拍卖价值出发，把汽车、苯二氮卓类药物、库存图像、AI 生成图像和消费文化并入研究性影像。',
        actions: ['建立跨汽车、药物与广告的图像研究档案', '混合原创、库存和 AI 生成图像', '通过正放 / 倒放与滚动图像模拟信息流', '把影片扩展为展览空间中的摄影棚 / showroom 结构'],
        sourceUrl: 'https://moca.ca/exhibitions/sara-cwynar/',
        images: [],
        relations: [{ kind: '展览', label: 'Baby Blue Benzo Beta — MOCA Toronto', detail: '2026' }]
      }
    ]
  },
  {
    id: 'aspen-mays',
    name: 'Aspen Mays',
    born: '1980',
    base: 'United States',
    intro: '借用科学研究中的采样、分类、目录与废弃档案，把看似客观的记录系统转成关于知识边界和摄影失败的作品。',
    methods: ['分类学', '系统采样', '档案', '科学图像', '摄影装置', '研究型摄影'],
    subjects: ['知识生产', '科学', '天文学', '分类', '失败图像', '尺度'],
    outputs: ['摄影', '摄影装置', '档案项目', '艺术家书'],
    institutions: ['Museum of Contemporary Art Chicago'],
    achievements: ['UBS 12 x 12: New Artists/New Work · MCA Chicago 2010', 'Fulbright Fellow · Chile 2009–2010'],
    whyImportant: '她很适合你的网站“方法”维度：项目可以被直接写成规则，例如“一棵树的每一片叶子都拍下来”或“把科学机构判定为失败的天文底片重新拿出来”。作品的核心是系统如何决定什么算信息、什么算废片。',
    projects: [
      {
        title: 'Every leaf on a tree',
        period: '2009–2010',
        cluster: '穷尽式采样 / 分类 / 装置',
        summary: '拍摄工作室外一棵树上的每一片叶子，形成 900 多张独立彩色照片；与 Every book 项目并置，比较“把部分穷尽”是否真的能接近整体知识。',
        actions: ['选择一棵具体的树作为封闭样本', '逐片采集并摄影每一片叶子', '保持独立图像而非合成一张总图', '将 900 多张照片按系统方式安装'],
        sourceUrl: 'https://mcachicago.org/exhibitions/2010/aspen-mays',
        images: [],
        relations: [{ kind: '展览', label: 'UBS 12 x 12 — MCA Chicago', detail: '2010' }]
      },
      {
        title: 'Observatory archive works',
        period: '2009–2010',
        cluster: '天文档案 / 被拒绝图像 / 科学与摄影',
        summary: '在智利天文研究环境中接触被科学工作流程淘汰的打印物、底片与其他材料，把“无科学价值”的图像重新作为摄影档案研究。',
        actions: ['进入天文台研究环境', '接触被拒绝或废弃的科学图像与材料', '重新筛选和编排失败图像', '把科学判断标准与艺术观看并置'],
        sourceUrl: 'https://mcachicago.org/exhibitions/2010/aspen-mays',
        images: [],
        relations: [{ kind: '奖项', label: 'Fulbright Fellowship', detail: 'Chile · 2009–2010' }]
      }
    ]
  },
  {
    id: 'taisuke-koyama',
    name: 'Taisuke Koyama',
    chineseName: '小山泰介',
    born: '1978',
    base: 'Tokyo',
    intro: '从广告海报上的人工彩虹出发，通过微距、浸水、再摄影、屏幕与数字设备反复转译同一图像，研究后数字时代摄影如何不断生成变体。',
    methods: ['微距摄影', '再摄影', '数字转译', '实验摄影', '扫描 / 屏幕', '过程实验'],
    subjects: ['图像生成', '颜色', '自然 / 人工', '表面', '后数字摄影', '重复'],
    outputs: ['摄影', '影像', '摄影书', '装置'],
    institutions: ['Foam', 'Aichi Triennale'],
    achievements: ['Foam Talent 2009', '15th Japan Media Arts Festival · Jury Selection / Special Jury recognition', 'AIMIA | AGO Photography Prize 2017 Finalist'],
    whyImportant: '他和你近期做的“同一图像不断经过算法 / 材料处理变成抽象图”很接近，但他的关键是每次都规定一个具体转译动作：拍海报、把前一次照片放进水里、再拍、再进入数字设备。抽象不是一次效果，而是版本链。',
    projects: [
      {
        title: 'Rainbow Variations',
        period: '2009–',
        cluster: '人工彩虹 / 迭代 / 再摄影 / 后数字摄影',
        summary: '最初微距拍摄东京广告海报中的人工彩虹，之后不断把已有彩虹图像通过水、屏幕、打印与再摄影等不同过程重新生成，形成彼此相关但不可还原到单一“原图”的变体。',
        actions: ['微距拍摄广告海报上的印刷彩虹', '把已有照片作为下一轮拍摄对象', '将打印图浸入海水并再次微距拍摄', '利用折射、波纹、屏幕与数字设备制造新的图像状态', '持续把上一次结果作为下一次实验输入'],
        sourceUrl: 'https://landscapestories.net/en/archive/2016/japan/projects/koyama-taisuke',
        images: [],
        relations: [{ kind: '奖项', label: 'Foam Talent', detail: '2009' }]
      }
    ]
  },
  {
    id: 'katja-novitskova',
    name: 'Katja Novitskova',
    born: '1984',
    base: 'Amsterdam',
    intro: '从搜索引擎、社交媒体和科学成像中提取动物与生物图像，把它们放大打印成铝板切割物或数据化装置，追踪网络注意力、机器视觉与生态之间的关系。',
    methods: ['网络挪用', '图像搜索', '大型打印', '铝板切割', '数据图像', '装置'],
    subjects: ['注意力经济', '动物图像', '大数据', '生态', '机器视觉', '生物技术'],
    outputs: ['摄影雕塑', '装置', '数字图像', '艺术家书'],
    institutions: ['Venice Biennale', 'MoMA', 'Kumu Art Museum', 'Whitechapel Gallery'],
    achievements: ['Estonian Pavilion · 57th Venice Biennale 2017', 'MoMA · Ocean of Images: New Photography 2015'],
    whyImportant: '她把“网络图片”当成有流量权重的信号，而不是普通素材。动物照片先在平台里作为注意力驱动器流通，再被裁掉背景、放大、印到铝板进入白盒子，之后又通过展览照片重新回到网络——这个循环对机器视觉和平台图像研究非常关键。',
    projects: [
      {
        title: 'Approximations / Patterns of Activation',
        period: '2012–',
        cluster: '网络动物图像 / 切割打印 / 注意力循环',
        summary: '从网络上选择构图高度“可传播”的动物照片，移除背景并放大，使用商业广告牌式工艺打印到铝板切割物上；作品在展厅被再次拍摄并上传，形成平台—实体—平台的循环。',
        actions: ['从搜索引擎和网络平台选择动物图像', '去除原始背景并保留主体轮廓', '把图像放大为接近或超过真人尺度', '以 UV 数码打印输出到铝板 / Dibond', '切割轮廓并用商业展示支架立起', '通过展览记录让图像重新进入网络'],
        sourceUrl: 'https://www.katjanovitskova.com/serie/pattern-of-activation',
        images: [],
        relations: []
      },
      {
        title: "If Only You Could See What I've Seen with Your Eyes",
        period: '2017',
        cluster: '大数据 / 生态 / 生物成像 / 国家馆',
        summary: '把宏观生态、微观生物成像和大数据产业放进同一展览系统，关注人和非人生命如何被持续记录、建模和可视化。',
        actions: ['搜集科学和机器生成的生物图像', '把显微、扫描与网络图像转成空间装置', '让尺度从细胞、动物身体扩展到行星表面', '将数据产业与生态危机放在同一视觉系统中'],
        sourceUrl: 'https://www.katjanovitskova.com/exhibition/venice-biennale-2017',
        images: [],
        relations: [{ kind: '展览', label: 'Estonian Pavilion — 57th Venice Biennale', detail: '2017' }]
      }
    ]
  }
];

export const artistBatch27: Artist[] = records.map(record => ({
  ...record,
  projects: record.projects.map(project => ({
    year: project.period,
    title: project.title,
    type: project.cluster,
    facts: project.actions,
    reading: project.summary,
  })),
  images: record.projects.flatMap(project => project.images),
  sourceUrl: record.projects[0].sourceUrl,
  sourceLabel: '艺术家 / 机构资料',
}));

export const archiveBatch27: Record<string, ArtistArchive> = Object.fromEntries(
  records.map(record => {
    const imagedProjects = record.projects.filter(project => project.images.length > 0).length;
    return [record.id, {
      artistId: record.id,
      projectCoverage: `${record.projects.length} 个精选项目 / 作品群已索引`,
      imageCoverage: `${imagedProjects} / ${record.projects.length} 项目配图`,
      note: '优先记录可核查的制作动作、材料、转译步骤与展示关系；当前为精选研究档案，不把零散信息冒充作品全集。',
      projects: record.projects,
      awards: record.achievements.filter(item => /Award|Prize|Grant|Fellow|奖|Finalist|Talent/.test(item)),
      exhibitions: record.achievements.filter(item => !/Award|Prize|Grant|Fellow|奖|Finalist|Talent/.test(item)),
      sources: record.projects.map(project => ({ label: project.title, url: project.sourceUrl })),
    }];
  })
);