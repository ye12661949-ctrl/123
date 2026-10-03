import type { ArchiveProject, ArchiveRelation } from './archiveData';

const rel=(kind:ArchiveRelation['kind'],label:string,detail?:string):ArchiveRelation=>({kind,label,detail});

export const archiveExtensions267:Record<string,ArchiveProject[]>={
  'laia-abril':[
    {
      title:'On Abortion — Museum of Sex, New York installation version',
      cluster:'A History of Misogyny / abortion / evidence installation',
      period:'2020',
      summary:'纽约 Museum of Sex 的美国首次个展版本把《On Abortion》明确做成“视觉、声音与文字证据”的空间系统，而不是把摄影作品按系列挂墙。Abril 将历史与当代的堕胎限制、危险方法、医疗伦理、污名与法律环境组织成相互参照的材料；这一版本又加入 The Burns Archive & Collection 提供的古董堕胎相关医疗器具，使艺术家制作的摄影/文本/声音材料与真实医学史物件发生直接并置。观众因此不是沿单一叙事读图，而是在照片、档案证据、器具与制度史之间移动，把身体经验与医疗/法律基础设施放在同一观看框架中。',
      actions:['以长期跨国研究收集无法获得安全合法堕胎所产生的历史与当代案例。','把摄影、档案图像、文字证词、研究文本与声音材料编排为多媒介证据网络。','纽约版本额外选择并陈列 The Burns Archive & Collection 的古董医学器具，使真实历史物件进入作品语境。','通过展墙、物件陈列与多种信息载体让观众在案例、制度文本和身体技术之间往返阅读。','不把危险堕胎方法处理成猎奇图像，而是将其放回医疗可及性、法律与社会强迫的因果结构中。'],
      sourceUrl:'https://www.museumofsex.com/exhibitions/laia-abril-on-abortion/',
      images:[],
      relations:[rel('展览','Laia Abril: On Abortion — Museum of Sex, New York','7 Feb–15 Oct 2020；Abril 首次美国个展。'),rel('收藏','The Burns Archive & Collection loans','展览加入 abortion-related antique medical tools。'),rel('收藏','图片 / reproduction 状态','Museum of Sex 官方页面提供多张展览图，但未确认开放本地再发布许可；不复制受限图，保留官方图像入口。')]
    },
    {
      title:'On Mass Hysteria — Photo Elysée installation version',
      cluster:'A History of Misogyny / psychogenic illness / multimedia archive',
      period:'2023',
      summary:'Photo Elysée 版本把《On Mass Hysteria》作为《A History of Misogyny》第三章展开。Abril 将摄影、档案材料和多媒体与社会学、历史学、人类学研究结合，追踪女性在极端压力、压抑或无法表达处境中出现的群体性心因症状，并把从 Salem、欧洲“附魔修女”等历史叙事到近现代病例放在同一研究框架中。展览不是单张照片说明“歇斯底里”，而是让历史表述、医学命名、女性身体症状与当代研究彼此校正。Photo Elysée 的安装现场由 Khashayar Javanmardi 拍摄，官方页面提供多张 exhibition views，因此这一节点同时记录作品内容和2023洛桑版本的空间证据。',
      actions:['跨时期收集女性群体性心因症状及其社会、医学和宗教解释。','把摄影与历史档案材料并置，而不是用新摄影替代历史证据。','引入社会学、历史学与人类学研究，让“症状”与造成压力、压抑和失语的环境同时可见。','在展厅中将图像、文字与多媒体组织为章节式研究路径，使观众需要在不同证据类型之间移动。','把群体性症状理解为可能的集体、无意识抗议语言，并同时暴露“hysteria”一词长期用于贬低女性痛苦的历史。'],
      sourceUrl:'https://elysee.ch/expositions/laia-abril/',
      images:[],
      relations:[rel('展览','Laia Abril: On Mass Hysteria — Photo Elysée, Lausanne','30 Jun–1 Oct 2023；与 LE BAL、Finnish Museum of Photography 联合制作。'),rel('收藏','Installation-view credit','官方展览现场摄影：© Khashayar Javanmardi / Photo Elysée / Plateforme 10。'),rel('收藏','图片 / reproduction 状态','Photo Elysée 官方页提供 installation views；馆方另设 reproduction request，未据此推定可自由再发布，本地图片暂缺。')]
    },
    {
      title:'Menstruation Myths — L’Appartement, Vevey installation version',
      cluster:'menstruation / visual metaphor / research installation',
      period:'2023',
      summary:'与 Photo Elysée《On Mass Hysteria》同期，Images Vevey 在 L’Appartement 展出《Menstruation Myths》。这一系列以文字和图像逐项研究不同文化围绕月经形成的神话、禁忌和信念，并把关于女孩与女性经期生活的统计资料与视觉隐喻并置。作品因此不是简单拍摄经期生活，而是先搜集社会信念、错误知识和量化资料，再为这些难以直接可视化的制度性后果寻找图像对应物。空间版本让研究文本和视觉隐喻共同承担论证：观众既读取“某种信念是什么”，也看到 Abril 如何把抽象的污名和知识缺失转译为具体视觉对象。',
      actions:['跨文化收集围绕月经的神话、禁忌、民间信念和社会规范。','整理女孩与女性在经期所面对处境的统计和研究资料。','为难以直接摄影的污名、误解和社会后果制作视觉隐喻，而不是把抽象议题停留在说明文字。','将文本研究与图像并置，使每个视觉节点能够回到具体社会信念和事实材料。','在 L’Appartement 的展览版本中把系列转为可步行阅读的空间安装，与同期《On Mass Hysteria》形成研究上的前后关联。'],
      sourceUrl:'https://elysee.ch/expositions/laia-abril/',
      images:[],
      relations:[rel('展览','Laia Abril: Menstruation Myths — L’Appartement / Images Vevey','28 Jun–5 Nov 2023。'),rel('展览','Parallel presentation with On Mass Hysteria','Photo Elysée 官方资料明确将两展作为同期项目介绍。'),rel('收藏','图片状态','可靠机构页面确认项目与展览，但当前未取得可稳定、合法本地再发布的单件作品图；明确暂缺，不使用替代图。')]
    }
  ]
};
