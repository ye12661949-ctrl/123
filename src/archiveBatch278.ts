import type { ArtistArchive, ArchiveProject, ArchiveRelation } from './archiveData';
const rel=(kind:ArchiveRelation['kind'],label:string,detail?:string):ArchiveRelation=>({kind,label,detail});
const project=(p:ArchiveProject)=>p;

export const archiveBatch278:Record<string,ArtistArchive>={
  'taryn-simon':{
    artistId:'taryn-simon',
    projectCoverage:'深化 Taryn Simon 的分类系统研究：补足 Birds of the West Indies 两部分生产机制、Image Atlas 的算法/跨国检索结构，以及 A Living Man Declared Dead 的三面板信息架构。',
    imageCoverage:'优先链接艺术家官网、MoMA 与 Gagosian 的作品/安装入口；版权未确认开放再发布的作品图不复制入仓库。',
    note:'Simon 的关键并非泛泛的“档案美学”，而是先找到一个既有分类制度，再通过摄影、文本、数据库、缺席、随机排序或界面设计暴露该制度如何制造事实、幻想与权力。',
    projects:[
      project({
        title:'Birds of the West Indies — Part I: women, weapons and vehicles as franchise taxonomy',
        cluster:'taxonomy / cinema / substitution / gender / franchise infrastructure',period:'2013',
        summary:'作品借用鸟类学家 James Bond 1936年同名分类学著作的标题，反向研究 Ian Fleming 借名后形成的电影神话。第一部分不是电影剧照汇编，而是把1962–2012年 Bond 电影中反复替换的女性、武器和车辆制作成摄影清单，分析一个“永远不老”的男性英雄如何依赖不断更新但结构恒定的配件维持幻想。Simon 邀请57位女性参与，其中10位拒绝；她没有删除这些空缺，而把原本用于装裱肖像的黑色矩形重新放回系统，让拒绝本身成为可见数据。作品排序又使用 Mersenne Twister 随机数生成器，主动破坏年代顺序，让“新鲜感”与结构重复之间的矛盾进入安装逻辑。',
        actions:['建立1962–2012 Bond电影中女性、武器、车辆的视觉数据库','重新拍摄/组织现实中的参与者与对象，而非仅复制电影剧照','把10位拒绝参与女性的位置以黑色装裱矩形表示','使用 Mersenne Twister 随机数生成器决定作品顺序','把商业电影中的替换机制转译成分类学与展览系统'],
        sourceUrl:'https://tarynsimon.com/works/botwi/',images:[],relations:[rel('展览','Carnegie International 56th Edition','Carnegie Museum of Art, Pittsburgh, 2013–14。'),rel('展览','Gagosian Beverly Hills','Birds of the West Indies, 27 Feb–12 Apr 2014。'),rel('出版','Taryn Simon: Birds of the West Indies','Hatje Cantz, 2013；含 Daniel Baumann 文章。')]
      }),
      project({
        title:'Birds of the West Indies — Part II: finding accidental birds inside fiction',
        cluster:'forensic viewing / ornithology / moving image / reality-fiction boundary',period:'2014',
        summary:'第二部分把观看方向从 Bond 电影的英雄、性、暴力和奢侈品彻底移向背景。Simon 把自己置于鸟类学家 James Bond 的位置，逐场检查24部 Bond 电影，寻找原本几乎无人注意、偶然飞入镜头的鸟，再识别、摄影并分类。每只鸟按照出现时间码、地点与年份登记；地点同时包含 Switzerland、Afghanistan、North Korea 等现实国家和 Republic of Isthmus、San Monique、SPECTRE Island 等虚构地理。作品由此制造一种怪异的证据状态：鸟确实进入过摄影机记录，但其“栖息地”可能只存在于电影叙事。',
        actions:['逐场检查24部 James Bond 电影','定位作为背景噪声偶然进入画面的鸟','识别、摄影并分类这些鸟','记录时间码、地点与年份','把现实国家和虚构电影地理放进同一分类体系','把电影边缘信息提升为作品主体'],
        sourceUrl:'https://tarynsimon.com/works/botwi/',images:[],relations:[rel('展览','George Eastman Museum','艺术家官网记录的 Birds of the West Indies 机构展览。'),rel('展览','Brooklyn Botanic Garden','Conservatory Gallery, 7 Jun–23 Oct 2022；以植物园语境重新激活鸟类分类结构。')]
      }),
      project({
        title:'Image Atlas — search engines as cultural classification machines',
        cluster:'web / algorithm / search engine / comparative image culture',period:'2012',
        summary:'Simon 与程序员 Aaron Swartz 合作建立在线作品 Image Atlas。用户输入同一检索词后，系统并置不同国家本地搜索引擎返回的顶部图像结果；艺术家官网记录当前比较范围为57个国家，并允许按GDP或字母顺序重新排列。作品没有假设搜索引擎只是透明窗口，而是把搜索结果本身当作文化和算法共同生产的图像样本，借跨国并置检验所谓“普遍视觉语言”是否存在，同时质疑算法的中立性。这里摄影作者进一步从拍摄者变成界面、规则与比较条件的设计者。',
        actions:['与 Aaron Swartz 共同设计在线比较系统','让同一关键词进入不同国家的本地搜索引擎','索引各地顶部图像结果并横向并置','允许按GDP或字母顺序重排国家','把搜索算法的差异转化为可直接观看的比较结构'],
        sourceUrl:'https://tarynsimon.com/works/image_atlas/',images:[],relations:[rel('展览','C/O Berlin','艺术家官网记录 Image Atlas 安装版本。'),rel('出版','Seven on Seven 2012','项目与 Simon / Aaron Swartz 的合作及对谈相关。')]
      }),
      project({
        title:'A Living Man Declared Dead and Other Chapters I–XVIII — three-panel knowledge architecture',
        cluster:'bloodline / genealogy / text-image system / state records / inheritance',period:'2008–2011',
        summary:'Simon 用四年跨国研究血缘及其相关故事，最终形成18章。每章并不是传统摄影故事，而由三个互相牵制的组件构成：portrait panel 按系统规则排列血缘成员；text panel 建立事件叙事；footnote panel 则放入更碎片、直觉和失序的图像材料。Simon 明确把 photography、text、graphic design 视为同等重要的媒介。Chapter I 来自印度 Uttar Pradesh：一名男子的四个后代在村庄登记中被亲属宣布死亡，以便侵占祖传土地；这些现实中活着、纸面上却不存在的人，使国家登记、血缘事实和摄影证据发生冲突，并成为整个项目标题来源。',
        actions:['用四年时间跨国研究并记录不同血缘系统','把每章固定拆为 portrait / text / footnote 三个信息面板','系统排列血缘肖像，同时让脚注图像保持更碎片化结构','调查领土、权力、宗教、战争与制度记录如何介入生物继承','让摄影证据与官方文件可能互相矛盾'],
        sourceUrl:'https://www.moma.org/calendar/exhibitions/1231',images:[],relations:[rel('展览','MoMA','2 May–3 Sep 2012，美国首展；展出18章中的9章。'),rel('展览','Tate Modern','艺术家官网记录该系列机构展览。'),rel('展览','Neue Nationalgalerie, Berlin','艺术家官网记录该系列机构展览。'),rel('展览','UCCA, Beijing','艺术家官网记录该系列机构展览。')]
      })
    ],
    awards:[],
    exhibitions:['Carnegie International 56th Edition — 2013–14','Birds of the West Indies — Gagosian Beverly Hills — 2014','A Living Man Declared Dead and Other Chapters I–XVIII — MoMA — 2012','A Living Man Declared Dead and Other Chapters I–XVIII — Tate Modern','Image Atlas — C/O Berlin'],
    sources:[{label:'Taryn Simon — Birds of the West Indies',url:'https://tarynsimon.com/works/botwi/'},{label:'Taryn Simon — Image Atlas',url:'https://tarynsimon.com/works/image_atlas/'},{label:'MoMA — A Living Man Declared Dead and Other Chapters I–XVIII',url:'https://www.moma.org/calendar/exhibitions/1231'},{label:'MoMA — Chapter I audio / artist explanation',url:'https://www.moma.org/audio/playlist/257/3311'},{label:'Gagosian — Birds of the West Indies',url:'https://gagosian.com/exhibitions/2014/taryn-simon-birds-of-the-west-indies/'}]
  }
};
