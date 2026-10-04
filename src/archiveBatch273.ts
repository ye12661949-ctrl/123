import type { ArtistArchive, ArchiveProject, ArchiveRelation } from './archiveData';

const rel=(kind:ArchiveRelation['kind'],label:string,detail?:string):ArchiveRelation=>({kind,label,detail});
const project=(p:ArchiveProject)=>p;

export const archiveBatch273:Record<string,ArtistArchive>={
  'sophie-calle':{
    artistId:'sophie-calle',
    projectCoverage:'本批新增 6 个作品/具体版本节点，集中补足早期跟踪、酒店调查、出版转换与大型多媒体委任的实际制作方法。',
    imageCoverage:'6 / 6 均建立 Guggenheim / Centre Pompidou / The Met / SFMOMA / LACMA / Mudam / Paula Cooper Gallery / NGA 权威图像或对象入口；受版权限制者仅记录来源与 credit，不复制。',
    note:'作品级深化批次。重点记录 Calle 如何制定规则、进入现场、跟踪/检查/采访、拍摄与书写，再把调查材料转换为 photo-text、书籍、版画或多媒体空间。',
    projects:[
      project({
        title:'Suite Vénitienne — Venice pursuit / later photographic installation',cluster:'surveillance / pursuit / photo-text / rule-based action',period:'1979–1980; later installation versions',
        summary:'Calle 在巴黎偶遇一个她几乎不认识的男人后，得知他即将前往威尼斯，于是把偶遇转成一套自定规则的行动：她前往威尼斯，在城市里寻找并尾随他，持续约十三天，以远距离黑白照片、路线信息和近似侦探报告的日记记录追踪过程。作品并不是“拍一个陌生人”这么简单：大量时间其实用于失去目标、重新寻找、询问线索和记录自己的等待。Mudam 指出该项目后来由1980年的出版形态进一步转为1994年的摄影系列；地图、模糊偷拍照片和带私人感受的侦探式文本共同制造悬念。观看者因此必须像阅读案件卷宗一样，在不完整图像与文字之间重建一次永远无法完全确认的追踪。',
        actions:['把巴黎偶遇转化为“跟随陌生人到威尼斯”的自定行动规则。','在威尼斯连续寻找、尾随目标，并在不暴露自己的情况下拍摄远距离黑白照片。','记录日期、路线、等待、失踪和再次发现目标等过程，使失败时间也进入作品。','把摄影、地图和侦探式日记组织为连续叙事，而不是挑选单张决定性照片。','从早期书籍形态继续转换为可在展厅展开的摄影/文字系列。'],
        sourceUrl:'https://www.mudam.com/fr/collection/sophie-calle',images:[],
        relations:[rel('收藏','Mudam Luxembourg','官方收藏页说明追踪行动、地图/摄影/文本结构以及1980出版到1994摄影系列的转换。'),rel('展览','图片状态','Mudam 与 White Cube 均有对应项目/展览入口；© Sophie Calle / 相关权利方，未确认可在仓库自由再发布，故本地图片暂缺。')]
      }),
      project({
        title:'L’Hôtel — three-week chambermaid investigation',cluster:'hotel / trespass / forensic photo-text / intimacy',period:'1981–1983',
        summary:'1981年2月16日，Calle 在威尼斯一家酒店获得为期三周的替班女服务员工作。她利用清洁房间、住客不在场的时间观察十二间客房留下的生活痕迹：拍摄床铺、浴室、衣物和私人物件，也会打开未上锁的行李、阅读信件和日记，并写下详细观察笔记。The Met 说明这些调查最终形成21件统称 L’Hôtel 的作品。Centre Pompidou 的馆藏版本进一步显示，每个房间并不是一张纪实照片，而是将房间彩色照片、黑白细节照片与警察报告式文字组合成面板；其馆藏组每个面板约102 × 142 cm，edition 3/4。观看者先被整洁的彩色房间图吸引，再通过黑白物证和文字进入住客不知道自己已被读取的私人生活。',
        actions:['经过申请/等待后取得威尼斯酒店替班女服务员身份，工作三周。','在清洁时进入住客暂时空置的房间并系统观察生活痕迹。','拍摄房间整体与床、浴室、衣物、行李等细节；检查未上锁行李并阅读可见信件/日记。','同步写下日期、物件、行为推断和个人反应，形成近似调查报告的文本。','把彩色房间图、黑白细节图和文字重新编辑为双联/多面板 photo-text 对象。'],
        sourceUrl:'https://www.centrepompidou.fr/en/ressources/oeuvre/cqr9Md',images:[],
        relations:[rel('收藏','Centre Pompidou — L’Hôtel','AM 2000-9 (1-8)；每面板102 × 142 cm；edition 3/4；官方页面含作品图。'),rel('收藏','The Met — The Hotel, Room 12','1983；silver dye bleach print + gelatin silver print；每件框装105.4 × 144.8 cm；© Sophie Calle 1983。')]
      }),
      project({
        title:'The Hotel, Room 25 — SFMOMA object version',cluster:'hotel / room-specific evidence / print object',period:'1981–1983',
        summary:'Room 25 是 L’Hôtel 从长期调查转成单件收藏对象的具体例子。SFMOMA 将作品记录为 chromogenic print 与 gelatin silver print，整体104.9 × 145.0 × 3.8 cm。这个媒介组合很关键：彩色图承担房间总体环境，银盐黑白照片把观看压到物件和痕迹细节，两种摄影再与 Calle 的文字调查结构共同构成“房间档案”。因此系列不是简单把酒店照片挂成墙，而是把每个房间处理成一个独立案件单元；观众面对的是艺术家已经筛选、分类、重写后的证据。',
        actions:['从三周酒店调查中把 Room 25 独立编辑为房间级作品。','以 chromogenic colour print 呈现总体视觉信息，并以 gelatin silver print 处理细节证据。','把不同图像层级压入统一框装对象，使单间客房成为可收藏/巡展的调查单元。'],
        sourceUrl:'https://www.sfmoma.org/artwork/FC.431.A-B/',images:[],
        relations:[rel('收藏','SFMOMA','L’hotel, chambre 25, 1981–1983；chromogenic print and gelatin silver print；104.9 × 145.0 × 3.8 cm。'),rel('收藏','图片版权','© Artists Rights Society (ARS), New York / ADAGP, Paris；SFMOMA明确要求高分辨率图像另行申请，故不复制。')]
      }),
      project({
        title:'The Hotel, Room 47 — LACMA two-panel evidence structure',cluster:'hotel / diptych / text-image evidence',period:'2 March 1983',
        summary:'LACMA 的 Room 47 把 Calle 的“整体—细节—叙述”结构保存得非常清楚：上部/一面板可见带床铺的彩色房间照片与 ROOM 47 标题下的多栏日记文字；另一面板由九张 gelatin silver 黑白照片组成，记录镜子、床、拖鞋、浴缸里的书、凌乱床单、浴室用品、厕所、雨伞和衣物等。LACMA 将媒介列为 dye coupler print、gelatin silver print、text，单组总体约203.2 × 142.24 × 2.54 cm。也就是说，Calle 并不依赖一张“揭露隐私”的照片，而通过九个细节、一个房间总览和文字时间线让观众自己进行推断。',
        actions:['将 Room 47 的房间总体彩色图与文字报告组合为一个视觉层。','从调查照片中选择九个黑白细节，组成规则网格。','让物件细节与文字记录互相验证/冲突，使观看成为证据阅读。','以两面板总体结构把现场调查转成大型墙面 photo-text object。'],
        sourceUrl:'https://collections.lacma.org/object/123441',images:[],
        relations:[rel('收藏','LACMA','Dye coupler print, gelatin silver print, text；overall 203.2 × 142.24 × 2.54 cm；accession M.2003.132a-b。'),rel('收藏','图片版权','LACMA 页面有对应两面板图；© Sophie Calle / ARS New York / ADAGP Paris，故仅记录官方入口。')]
      }),
      project({
        title:'Take Care of Yourself — French Pavilion / 107-response system',cluster:'breakup letter / delegated interpretation / multimedia installation',period:'2007; 2009 New York version',
        summary:'作品起点是一封结束关系的电子邮件，末尾写着“Take care of yourself”。Calle 没有自己回复，而是把这句话当作操作指令：邀请107位依据职业或技能选择的女性（项目描述还包括两个木偶和一只鹦鹉）替她读取、分析、评论、演唱、舞蹈、表演或重新解释同一封信。最终不是一篇关于失恋的自传文字，而是由 photographic portraits、textual analyses 和 filmed performances 组成的大型多媒体合唱。作品最初为2007 Venice Biennale French Pavilion制作；2009 Paula Cooper Gallery 的美国版本证明其空间可重新编排，贡献者的照片、文本和屏幕/录像在不同建筑中形成新的观看路径。观众无法一次读完“正确答案”，只能在语言学、精神分析、法律、表演、音乐等互不一致的专业阅读之间移动。',
        actions:['把私人分手邮件复制并转交给107位按职业/技能挑选的女性参与者。','要求参与者使用各自专业方法分析、评论、朗读、歌唱、舞蹈或表演这封信。','为参与者制作/组织 photographic portraits，并收集文字分析与 filmed performances。','把大量异质回应编排成可穿行的多媒体安装，而不是压缩为单一作者结论。','在 Venice French Pavilion 与后续纽约等空间重新适配照片、文字和视频的布局。'],
        sourceUrl:'https://www.paulacoopergallery.com/exhibitions/take-care-of-yourself',images:[],
        relations:[rel('展览','French Pavilion — Venice Biennale','2007；作品为法国馆创作。'),rel('展览','Paula Cooper Gallery, New York','9 Apr–6 Jun 2009；官方页面保存安装图。'),rel('展览','图片版权','安装图 credit: © 2009 Sophie Calle / Artists Rights Society (ARS), New York / ADAGP, Paris; Courtesy Sophie Calle and Paula Cooper Gallery。')]
      }),
      project({
        title:'Address Book — 2009 Gemini G.E.L. print / binder translation',cluster:'address book / publication / printmaking / archive translation',period:'2009',
        summary:'Calle 早年的 Address Book 项目建立在一个偶然捡到的通讯录以及通过联系人侧写通讯录主人这一方法上。2009年与 Gemini G.E.L. 的版本则把这一历史项目再次物质化为复杂版画/档案对象，而不是简单重印旧报纸。National Gallery of Art 保存的对象包括：28张 color screenprints 与 inkjet prints、mylar sleeves、cloth-covered three-ring binder、title page、colophon 和 reproduction newspaper；同组还有 blind-embossed print、带 gold leaf 的 etching，以及把 color lithograph / screenprint 与 cloth-covered board 结合的独立版画。作品因此展示 Calle 的调查项目如何跨越报纸连载、档案册与精细版画工艺持续改变物质形态。',
        actions:['把早期 Address Book 的联系人调查/报纸传播历史重新编辑为2009版画项目。','与 Gemini G.E.L. 印刷团队合作，将图像和文本分别转换为 screenprint、inkjet、lithograph、etching 与 blind embossing。','把28张彩色丝网/喷墨页面放入 mylar sleeves，再装入布面三孔活页夹。','加入 title page、colophon 与 reproduction newspaper，使原始大众传播媒介成为新版档案的一部分。','另制作 gold-leaf etching、blind embossment 和 cloth-board mounted lithograph/screenprint，让同一项目出现多个对象层级。'],
        sourceUrl:'https://www.nga.gov/artworks/220799-address-book',images:[],
        relations:[rel('收藏','National Gallery of Art','2009；Gemini G.E.L. publisher；NGA保存binder及关联版画对象。'),rel('出版','材料记录','28 color screenprints and inkjet prints with mylar sleeves in cloth-covered three-ring binder；另含 etching with gold leaf、blind embossment、color lithograph and screenprint。'),rel('收藏','图片状态','NGA部分 Address Book 对象显示 media unavailable；无对应开放图时明确保持暂缺，不使用替代图。')]
      })
    ],
    exhibitions:['Suite Vénitienne — early publication 1980 / later photographic installation','Take Care of Yourself — French Pavilion, Venice Biennale — 2007','Take Care of Yourself — Paula Cooper Gallery, New York — 2009'],
    sources:[
      {label:'Guggenheim — Sophie Calle artist overview',url:'https://www.guggenheim.org/artwork/artist/Sophie-Calle'},
      {label:'Centre Pompidou — L’Hôtel',url:'https://www.centrepompidou.fr/en/ressources/oeuvre/cqr9Md'},
      {label:'The Met — The Hotel, Room 12',url:'https://www.metmuseum.org/art/collection/search/284364'},
      {label:'SFMOMA — L’hôtel, chambre 25',url:'https://www.sfmoma.org/artwork/FC.431.A-B/'},
      {label:'LACMA — The Hotel, Room 47',url:'https://collections.lacma.org/object/123441'},
      {label:'Mudam — Sophie Calle / Suite Vénitienne',url:'https://www.mudam.com/fr/collection/sophie-calle'},
      {label:'Paula Cooper Gallery — Take Care of Yourself',url:'https://www.paulacoopergallery.com/exhibitions/take-care-of-yourself'},
      {label:'National Gallery of Art — Address Book',url:'https://www.nga.gov/artworks/220799-address-book'}
    ]
  }
};
