import type { ArtistArchive, ArchiveProject, ArchiveRelation } from './archiveData';

const rel=(kind:ArchiveRelation['kind'],label:string,detail?:string):ArchiveRelation=>({kind,label,detail});
const project=(p:ArchiveProject)=>p;

export const archiveBatch271:Record<string,ArtistArchive>={
  'taryn-simon':{
    artistId:'taryn-simon',
    projectCoverage:'本批新增 4 个作品/具体版本节点，重点补足制作动作、材料、展陈和观看机制。',
    imageCoverage:'4 / 4 均记录权威机构/艺术家图像入口与版权状态；未确认开放再发布许可的图片不复制。',
    note:'作品级深化批次。优先采用艺术家官网、Whitney、MoMA、Smithsonian American Art Museum、Steidl 与 Lever House Art Collection。图片若仅可在机构页面浏览，则保留 sourceUrl/credit 并明确暂缺本地文件。',
    projects:[
      project({
        title:'CONTRABAND — JFK five-day capture / Lever House version',cluster:'customs / taxonomy / photographic inventory',period:'2009–2010',
        summary:'Simon 没有在工作室里寻找“违禁品”道具，而是在 2009 年 11 月 16–20 日直接驻留纽约 JFK 国际机场的 U.S. Customs and Border Protection Federal Inspection Site 与 U.S. Postal Service International Mail Facility。她连续五天拍摄从海外旅客和国际邮件中被扣留或没收的物件，最终形成 1,075 张照片。人的身体被排除在画面之外，物件被从原本的旅行、贸易或犯罪情境中抽离，成为近似海关标本的统一视觉条目。最终大量小幅照片以密集、重复的网格/陈列结构出现，观看从单件物品的奇异性转向边境制度如何分类全球商品、食物、药物、仿冒品与自然物。',
        actions:['2009-11-16 至 11-20 驻留 JFK 海关检查与国际邮件设施。','持续接收并拍摄当班被 detained/seized 的入境物件，而不是事后挑选象征性道具。','排除人物，把物件转成统一的摄影记录单位。','累计制作 1,075 张照片，使五天的边境截留物流变成可浏览的视觉数据库。','在展览中通过大量小幅图像的连续排列，让观众在单件辨认与总体分类系统之间切换。'],
        sourceUrl:'https://www.leverhouseartcollection.com/commissions/taryn-simon',images:[],
        relations:[rel('展览','CONTRABAND — Lever House','该机构为系列首展，并确认 1,075 张照片及两处 JFK 拍摄地点。'),rel('收藏','图片状态','Lever House 官方项目页提供作品/安装图入口；作品版权归 Taryn Simon/相关权利方，未确认开放仓库再发布，故本地图片暂缺。')]
      }),
      project({
        title:'An American Index of the Hidden and Unfamiliar — 70-plate system',cluster:'access / hidden infrastructure / annotated photography',period:'2006–2007',
        summary:'Simon 从美国境内通常不向公众开放或极少被看见的地点出发，主动申请进入科学、政府、医学、娱乐、自然、安全和宗教等系统内部。Whitney 说明她在条件允许时使用 large-format view camera；Steidl 确认最终书籍/系列由 70 张彩色图版构成。她拍摄的对象包括核废料储存设施中的放射性胶囊、死刑犯活动场、冬眠黑熊等。关键制作动作并不止于获得罕见照片：每张图像与说明文字共同工作，文字补足摄影无法显示的制度、地点与功能信息。展览中的观看因此在“诱人的大画幅图像”和“解释其不可见制度的文字”之间来回切换。',
        actions:['根据“公众通常无法进入/观看”的条件研究并筛选美国境内地点。','与机构协商访问权限，进入科学、政府、医疗、安全、宗教等受限环境。','条件允许时使用 large-format view camera 进行控制式彩色摄影。','将约 70 个图像节点编辑成跨领域索引，而非按单一地理旅行叙事排序。','为照片配置说明文字，明确地点、对象及其制度背景，使 text/image 的信息差成为作品结构。'],
        sourceUrl:'https://whitney.org/exhibitions/taryn-simon',images:[],
        relations:[rel('展览','Whitney Museum of American Art','9 Mar–24 Jun 2007；官方页面含 installation view，摄影 Sheldan C. Collins。'),rel('出版','Steidl — An American Index of the Hidden and Unfamiliar','152页，70 colour plates；large-format view camera except when prohibited。'),rel('收藏','图片状态','Whitney/Steidl 均提供可靠作品图入口，但不推定其网页图片可自由复制，故本地图片暂缺。')]
      }),
      project({
        title:'A Living Man Declared Dead — Chapter X',cluster:'bloodline / archive / portrait-text-evidence',period:'2008–2011',
        summary:'Chapter X 把系列的抽象“血缘”方法落实到一个具体家族：Simon 追踪 Cabrera Antero 的后代。Antero 曾作为菲律宾 Igorot 社群成员在 1904 年 St. Louis Louisiana Purchase Exposition 被展示；他在赴美途中认识妻子，后来留在美国并育有 11 名子女。Simon 寻找并拍摄其子女和孙辈，再把这些人物按照血缘关系排成系统肖像。Smithsonian 馆藏版由六个 archival inkjet print components 组成；肖像之外的面板加入家族成员传记、博览会历史与相关图像，因此个人面孔、殖民展示史和档案证据被强制放进同一观看结构。',
        actions:['研究 Cabrera Antero 与 1904 Louisiana Purchase Exposition 的历史关系。','追踪其后代并逐一拍摄子女、孙辈，将人物按血缘秩序标准化排列。','编辑家族成员的传记与历史说明。','搜集/制作与博览会叙事相关的 footnote evidence images。','把肖像、annotation 与 evidence 组织为六个 archival inkjet print components。'],
        sourceUrl:'https://americanart.si.edu/artwork/chapter-x-living-man-declared-dead-and-other-chapters-i-xviii-86425',images:[],
        relations:[rel('收藏','Smithsonian American Art Museum','Object 2014.26.1A-F；medium: archival inkjet prints comprised of six components。'),rel('收藏','图片状态','Smithsonian 官方作品页为可靠图像/对象入口；未确认开放用于本仓库再发布的具体作品文件，故不复制。')]
      }),
      project({
        title:'A Living Man Declared Dead and Other Chapters I–XVIII — MoMA installation logic',cluster:'bloodline / archive / installation version',period:'2012 MoMA version',
        summary:'MoMA 2012 美国首展把十八章中的九章放入 Robert and Joyce Menschel Photography Gallery。每章不是单张照片，而是固定的三段信息机器：左侧 portrait panel 系统排列同一血缘的在世成员；中央 annotation panel 由 Simon 写作并组织事件叙事；右侧 footnote panel 放置她为故事碎片制作或搜集的摄影证据。无法拍摄的在世成员并不会被删掉，而以空白肖像位置进入结构，原因包括监禁、服役、登革热以及宗教/社会限制不允许女性被摄影。MoMA 所示 Chapter XVII 细节为 pigmented inkjet prints，整体约 213.4 × 614.4 cm。观众必须横向移动，在脸孔、缺席、文字和证据之间反复校对，作品因此把“档案的秩序”与故事本身的暴力、偶然和混乱并置。',
        actions:['四年间跨国研究并记录 18 条血缘及其相关政治/社会故事。','用一致的肖像规则拍摄血缘成员，并把无法拍摄者保留为空位而非从数据库删除。','为每章撰写 annotation panel，整理身份、事件与缺席原因。','拍摄或搜集 footnote evidence，使碎片化物证与人物系统并置。','MoMA 版本从十八章中选择九章，在展厅中按横向三段结构展开；观众通过身体移动逐章阅读。'],
        sourceUrl:'https://www.moma.org/calendar/exhibitions/1231',images:[],
        relations:[rel('展览','MoMA, New York','2 May–3 Sep 2012；U.S. premiere，展出 18 章中的 9 章。'),rel('收藏','Chapter XVII dimensions','MoMA: pigmented inkjet prints, 84 × 241 7/8 in (213.4 × 614.4 cm)。'),rel('收藏','图片状态','MoMA 页面提供 39 张 selected works 与 17 张 installation images；版权 © Taryn Simon，故仅记录官方入口，不复制受限图。')]
      })
    ],
    exhibitions:['An American Index of the Hidden and Unfamiliar — Whitney Museum — 2007','CONTRABAND — Lever House — 2010','A Living Man Declared Dead and Other Chapters I–XVIII — MoMA — 2012'],
    sources:[
      {label:'Taryn Simon — A Living Man Declared Dead',url:'https://tarynsimon.com/works/almdd/'},
      {label:'MoMA — A Living Man Declared Dead and Other Chapters I–XVIII',url:'https://www.moma.org/calendar/exhibitions/1231'},
      {label:'Smithsonian American Art Museum — Chapter X',url:'https://americanart.si.edu/artwork/chapter-x-living-man-declared-dead-and-other-chapters-i-xviii-86425'},
      {label:'Whitney — An American Index of the Hidden and Unfamiliar',url:'https://whitney.org/exhibitions/taryn-simon'},
      {label:'Steidl — An American Index',url:'https://steidl.de/Books/An-American-Index-of-the-Hidden-and-Unfamiliar-0310222632.html'},
      {label:'Lever House Art Collection — CONTRABAND',url:'https://www.leverhouseartcollection.com/commissions/taryn-simon'}
    ]
  }
};
