import type { ArtistArchive, ArchiveProject, ArchiveRelation } from './archiveData';

const rel=(kind:ArchiveRelation['kind'],label:string,detail?:string):ArchiveRelation=>({kind,label,detail});
const project=(p:ArchiveProject)=>p;

export const archiveBatch269:Record<string,ArtistArchive>={
  'laia-abril':{
    artistId:'laia-abril',
    projectCoverage:'6 个作品/展览版本完成作品级深化（本批）',
    imageCoverage:'6 / 6 均建立权威图像来源或明确版权/暂缺状态',
    note:'本批把此前只作为 extension 保存、无法进入前端动态 registry 的 Laia Abril 作品级资料改为标准 archiveBatch 导出，因此会被 archiveRegistry 的 import.meta.glob 自动接入艺术家详情页。图片仅记录机构/艺术家官方来源与版权状态；未确认开放再发布的图像不复制、不伪造替代。',
    projects:[
      project({
        title:'On Abortion — Museum of Sex, New York installation version',cluster:'A History of Misogyny / evidence installation',period:'2020',
        summary:'纽约版本把《On Abortion》从摄影系列扩展成摄影、档案、文字、声音与真实医学史物件共同构成的证据空间。Abril 长期调查无法获得安全合法堕胎的案例，再把危险方法、法律限制、医疗伦理与个人证词拆成可并行阅读的材料。Museum of Sex 版本又加入 The Burns Archive & Collection 的古董堕胎相关医疗器具，使艺术家制作的图像与文本和真实历史器械处于同一展陈系统。观众必须在墙面材料、器具和不同案例之间移动，而不是按单一照片序列观看。',
        actions:['跨国调查安全堕胎不可及所造成的历史与当代案例。','拍摄人物、地点和与堕胎实践有关的物件，并搜集档案图像、制度文本和证词。','把摄影、声音、研究文字和历史材料编排为多媒介证据网络。','纽约版本借入 The Burns Archive & Collection 的古董医学器具，与摄影/文本材料共同陈列。','通过展墙、物件陈列和多种信息载体让观众在身体经验、法律和医疗基础设施之间往返阅读。'],
        sourceUrl:'https://www.museumofsex.com/exhibitions/laia-abril-on-abortion/',images:[],
        relations:[rel('展览','Laia Abril: On Abortion — Museum of Sex, New York','7 Feb–15 Oct 2020；美国首次个展。'),rel('收藏','The Burns Archive & Collection loans','展览加入 abortion-related antique medical tools。'),rel('收藏','图片状态','官方展览页有作品/安装图；未确认开放本地再发布许可，故不复制，保留来源入口。')]
      }),
      project({
        title:'On Mass Hysteria — Photo Elysée installation version',cluster:'A History of Misogyny / psychogenic illness / multimedia archive',period:'2023',
        summary:'Photo Elysée 版本将摄影、历史档案、多媒体与社会学、历史学和人类学研究放进同一空间，追踪女性群体性心因症状如何被宗教、医学和社会权力命名。Abril 不以新摄影替代历史证据，而是让不同年代的表述与身体症状相互校正；因此作品的实际制作动作既包括跨时期案例研究，也包括图像选择、文本编辑、声音/多媒体组织与空间编排。',
        actions:['跨时期搜集女性群体性心因症状及其社会、医学与宗教解释。','把本人摄影与历史档案材料并置。','将社会学、历史学、人类学材料编辑成可与图像互证的研究文本。','在展厅中把图像、文字和多媒体组织成章节式路径。','以空间阅读方式暴露 hysteria 这一命名如何长期贬低或消解女性痛苦。'],
        sourceUrl:'https://elysee.ch/expositions/laia-abril/',images:[],relations:[rel('展览','Laia Abril: On Mass Hysteria — Photo Elysée, Lausanne','30 Jun–1 Oct 2023；与 LE BAL、Finnish Museum of Photography 联合制作。'),rel('收藏','Installation-view credit','© Khashayar Javanmardi / Photo Elysée / Plateforme 10。'),rel('收藏','图片状态','Photo Elysée 官方页提供 installation views；馆方另设 reproduction request，故不推定可自由再发布。')]
      }),
      project({
        title:'Menstruation Myths — L’Appartement, Vevey installation version',cluster:'menstruation / research installation',period:'2023',
        summary:'该系列不是直接记录经期生活，而是先搜集不同文化中的月经神话、禁忌、错误知识与统计材料，再为难以直接摄影的污名和制度性后果寻找视觉隐喻。L’Appartement 版本把研究文字和图像转成可步行阅读的空间安装，与同期《On Mass Hysteria》形成方法上的连续关系。',
        actions:['跨文化搜集月经神话、禁忌、民间信念和社会规范。','整理女孩与女性经期生活的统计和研究资料。','为抽象污名、误解和社会后果制作视觉隐喻。','将文本研究与图像并置，使每个视觉节点回到具体信念和事实材料。','在 L’Appartement 将系列转成空间阅读路径。'],
        sourceUrl:'https://elysee.ch/expositions/laia-abril/',images:[],relations:[rel('展览','Laia Abril: Menstruation Myths — L’Appartement / Images Vevey','28 Jun–5 Nov 2023。'),rel('收藏','图片状态','可靠机构页面确认项目与展览；未取得稳定、合法的本地再发布许可，明确暂缺。')]
      }),
      project({
        title:'Illegal Instrument Kit — On Abortion',cluster:'On Abortion / object evidence',period:'2016–2018',
        summary:'《Illegal Instrument Kit》把非法或不安全堕胎中可能出现的器具作为证据对象处理。Abril 的方法不是把器具做成戏剧化道具，而是通过研究案例、辨认器具用途、控制式拍摄和文字说明，把“方法”与造成这些方法出现的法律/医疗条件重新连接。作品进入《On Abortion》的整体证据系统后，器具图像与人物故事、档案、声音和制度文本并置，因此观众看到的不是孤立物件，而是一套被政策迫使出现的身体技术。',
        actions:['从堕胎史、医疗史和具体案例中研究不安全/非法操作使用的器具。','将器具作为证据对象进行控制式摄影，而非用无关象征图替代。','为图像配置研究文字，使器具的用途与法律、医疗可及性建立因果联系。','在书籍和展览中与案例、证词、档案图像和声音共同编排。'],
        sourceUrl:'https://www.laiaabril.com/project/on-abortion/',images:[],relations:[rel('出版','On Abortion','Dewi Lewis, 2018；项目以摄影书形成重要版本。'),rel('奖项','Paris Photo–Aperture PhotoBook of the Year','Winner, 2018。'),rel('收藏','图片状态','艺术家官网及权威摄影机构可见对应作品图；版权 © Laia Abril，未确认开放仓库再发布，故不复制。')]
      }),
      project({
        title:'On Rape — C/O Berlin spatial version',cluster:'A History of Misogyny / institutional violence / installation',period:'2024',
        summary:'《On Rape》把叙事重心从“再现受害者”转向允许性暴力持续发生的法律、宗教、军事和社会制度。C/O Berlin 版本将概念摄影、证词、制度文本、声音和档案材料展开为可行走的研究空间；不同材料不是装饰性拼贴，而是分别承担证词、规则、历史和视觉证据的功能。空间版本尤其重要，因为作品的意义来自观众在不同制度节点之间移动并建立关联。',
        actions:['研究法律、军事、宗教和社会制度如何定义、忽略或正常化强奸。','避免把暴力本身做成猎奇再现，转而制作概念图像并编辑证词与制度文本。','将摄影、档案、声音和文字组织为多个证据节点。','依据展厅尺度重新安排墙面密度、文本位置与观众动线，使观看成为逐步读取制度结构的过程。'],
        sourceUrl:'https://www.co-berlin.org/en/program/exhibitions/laia-abril-on-rape',images:[],relations:[rel('展览','Laia Abril. On Rape — C/O Berlin','2024；curated by Sophia Greiff。'),rel('收藏','Installation-view credit','C/O Berlin 官方展览资料/安装现场；相关现场摄影版权依机构页面标注。'),rel('收藏','图片状态','保留 C/O Berlin 官方图像入口；未确认开放本地再发布许可。')]
      }),
      project({
        title:'On Mass Hysteria — book / exhibition translation',cluster:'photobook / installation translation',period:'2023–2024',
        summary:'这一节点专门记录同一研究如何在展览与摄影书之间改变结构。Photo Elysée 的空间版允许图像、档案、文字和多媒体分散在真实空间中，观众用身体决定阅读顺序；2024 年 Dewi Lewis 与 Delpire &Co 出版的书籍版本则必须把跨国案例、历史材料和研究文本压缩成线性页序。作品因此不是把墙面简单缩印成书，而是针对媒介重新编辑证据关系：空间版本依赖距离、并置和动线，书籍版本依赖翻页、前后顺序与跨页关系。',
        actions:['将同一批跨国案例、档案和研究材料分别编辑为空间版与书籍版。','空间版通过墙面距离、并置、多媒体和观众移动组织材料。','书籍版重新建立页序、跨页关系与文本节奏，使研究可在线性阅读中成立。','保留两种版本差异，避免把 photobook 与 exhibition installation 当成同一对象。'],
        sourceUrl:'https://elysee.ch/expositions/laia-abril/',images:[],relations:[rel('展览','Photo Elysée, Lausanne','2023 空间版本。'),rel('出版','On Mass Hysteria','Dewi Lewis + Delpire &Co, 2024。'),rel('收藏','图片状态','展览图由 Photo Elysée / Khashayar Javanmardi 等权利方控制；书籍图像版权亦未视为开放授权。')]
      })
    ],
    awards:['2023 National Photography Award of Spain','2020 Foam Paul Huf Award','2018 Paris Photo–Aperture PhotoBook of the Year'],
    exhibitions:['On Abortion — Museum of Sex, New York — 2020','On Mass Hysteria — Photo Elysée, Lausanne — 2023','Menstruation Myths — L’Appartement / Images Vevey — 2023','On Rape — C/O Berlin — 2024'],
    sources:[
      {label:'Laia Abril — On Abortion',url:'https://www.laiaabril.com/project/on-abortion/'},
      {label:'Photo Elysée — Laia Abril',url:'https://elysee.ch/expositions/laia-abril/'},
      {label:'Museum of Sex — On Abortion',url:'https://www.museumofsex.com/exhibitions/laia-abril-on-abortion/'},
      {label:'C/O Berlin — On Rape',url:'https://www.co-berlin.org/en/program/exhibitions/laia-abril-on-rape'}
    ]
  }
};
