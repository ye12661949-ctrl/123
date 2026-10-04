import type { ArtistArchive, ArchiveProject, ArchiveRelation } from './archiveData';

const rel=(kind:ArchiveRelation['kind'],label:string,detail?:string):ArchiveRelation=>({kind,label,detail});
const project=(p:ArchiveProject)=>p;

export const archiveBatch280:Record<string,ArtistArchive>={
  'martha-rosler':{
    artistId:'martha-rosler',
    projectCoverage:'本批深化 Martha Rosler：把 Bringing the War Home、The Bowery in Two Inadequate Descriptive Systems 与 Semiotics of the Kitchen 从主题标签推进到生产方法、媒介结构、传播路径和制度关系。重点补足她如何在摄影、文字、拼贴、录像与公共传播之间持续质疑“纪录”是否天然等于政治有效性。',
    imageCoverage:'优先记录 MoMA 官方作品与安装图入口；MoMA 明确要求 installation view reproduction 另行授权，因此不复制受限图片入仓库。',
    note:'Rosler 与传统社会纪实摄影的差异不只是更“观念化”。她反复拒绝让单张照片承担透明见证功能：越战拼贴把两个媒体系统硬接在一起；Bowery 故意让照片和文字都失败；Semiotics 则把身体、语言和厨房工具变成一套攻击性的符号表演。',
    projects:[
      project({
        title:'House Beautiful: Bringing the War Home — original antiwar photomontage system',
        cluster:'photomontage / Vietnam War / mass media / domestic ideology',period:'c. 1967–1972',
        summary:'Rosler 从 Life 等新闻媒体取得越南战争、伤亡与战场图像，再从 House Beautiful 等美国居家杂志取得富裕家庭的室内、家具与消费广告，把原本由大众传媒分隔在“远方战争”和“美国舒适生活”两个频道中的材料手工切割、拼接到同一画面。MoMA 保存的原始组为12件 cut-and-pasted printed paper on board。Rosler 当时并不把它首先当作美术馆艺术，而曾以复印件形式在反越战示威中传播；因此作品的政治方法同时包括图像来源、剪接冲突和复制/流通方式。',
        actions:['从新闻摄影中截取越南战争、士兵、伤亡与战场材料。','从美国室内设计和消费杂志截取富裕家庭、家具、广告与理想住宅。','用手工剪切与拼贴取消“战争在远方、家庭在此处”的媒体空间分隔。','将部分作品以复印件形式带入反越战示威，而不是只进入画廊。','后来把历史拼贴重新制作为摄影/inkjet版本进入摄影与版画收藏，使agitational image获得第二种机构生命。'],
        sourceUrl:'https://www.moma.org/collection/works/152791',images:[],relations:[rel('收藏','MoMA','原始组登记为12件 cut-and-pasted printed paper on board；另收藏2011年印制的多件 inkjet photomontage。'),rel('传播','anti–Vietnam War demonstrations','MoMA记录 Rosler 曾在反战示威中分发该系列复印件。'),rel('出版','Life / House Beautiful','战争新闻图与美国室内/消费图像是拼贴的两套主要视觉来源。')]
      }),
      project({
        title:'Red Stripe Kitchen / Beauty Rest — the living room war as montage operation',
        cluster:'photomontage / domestic space / media circulation / here-there collapse',period:'c. 1967–1972; printed 2011',
        summary:'把 Red Stripe Kitchen、Beauty Rest 等单件从系列中抽出来，可以看清 Rosler 的具体剪接逻辑：她不是给战争照片添加评论文字，而是让越南平民、士兵或暴力痕迹直接侵入现代厨房、卧室与设计杂志的光洁空间。MoMA 将这组方法与“living-room war”联系起来——越战通过电视进入美国住宅，但屏幕仍允许观看者把暴力保持为远方事件；Rosler 的拼贴则取消屏幕边界，让战争和消费生活共享同一透视空间。2011年的 inkjet prints 又把早期纸面拼贴转换为可被摄影部门收藏、展示的版本。',
        actions:['选择具有强烈透视和设计秩序的现代住宅图像作为空间骨架。','把战争新闻人物/事件按尺度嵌入厨房、卧室等内部空间，使两个来源在视觉上近似同处一室。','利用拼贴接缝制造政治冲突，而不是追求无痕合成。','2011年将历史 photomontage 印为 inkjet prints，使早期行动主义图像进入新的收藏和展览语境。'],
        sourceUrl:'https://www.moma.org/collection/works/150129',images:[],relations:[rel('收藏','MoMA Photography','Red Stripe Kitchen: inkjet print (photomontage), printed 2011, 60.3 × 46 cm。'),rel('收藏','MoMA Photography','Beauty Rest: inkjet print (photomontage), printed 2011, 50.9 × 50.1 cm。'),rel('展览','The Shaping of New Visions: Photography, Film, Photobook','MoMA 2012–13；相关作品进入摄影史/媒介史语境。')]
      }),
      project({
        title:'The Bowery in Two Inadequate Descriptive Systems',
        cluster:'photography / text / documentary critique / urban representation',period:'1974–1975',
        summary:'这件作品由45张 gelatin silver prints 的文字与图像组成，安装在24块 backing boards 上。Rosler 在纽约 Bowery 拍摄街道、店面、建筑细节与酒瓶等痕迹，却有意不拍醉酒者；另一套面板列出关于醉酒的俚语和语言表达。标题已经给出方法论结论：摄影与文字是“两种不充分的描述系统”。她既拒绝传统社会纪实把贫困者身体变成可消费的证据，也不声称语言能够替代摄影提供完整真相；作品让两个系统并置、互相暴露不足。',
        actions:['在 Bowery 拍摄环境、建筑表面、店面和与饮酒有关的物质痕迹，而不直接把醉酒者身体作为主体。','搜集并排列与醉酒相关的俚语/文字表达，建立第二套描述系统。','把文字照片与地点照片按面板结构并置，而不是用caption解释照片。','通过缺席的人体主动阻断传统社会纪实摄影的同情/窥视结构。','让观众在两套都无法充分描述社会现实的系统之间来回阅读。'],
        sourceUrl:'https://www.moma.org/audio/playlist/263/3396',images:[],relations:[rel('收藏/作品结构','MoMA','45 gelatin silver prints of text and images on 24 backing boards；each sheet 30 × 60 cm。'),rel('方法','documentary critique','摄影与文字都不被赋予透明再现现实的权力；“inadequate”是作品结构而非失败。')]
      }),
      project({
        title:'Semiotics of the Kitchen',
        cluster:'video / performance / feminism / language / domestic labor',period:'1975',
        summary:'Rosler 把电视烹饪节目熟悉的固定机位、桌面、围裙与厨房器具转成一套反教学表演。她按字母顺序拿起厨房工具、命名并做出越来越夸张和攻击性的动作，使“女性—厨房—服务”的日常符号系统发生短路。作品的重要性不只在女性主义主题，而在媒介转换：Bringing the War Home 通过剪接既有媒体图像工作，Bowery 通过照片/文字并置工作，而这里语言、身体动作、工具和录像时间本身组成符号系统。观看者面对的不是一个被纪录的家庭劳动者，而是艺术家主动操纵摄影机前的角色、节奏与姿态。',
        actions:['借用电视烹饪示范的正面固定观看结构。','按字母序逐件展示并命名厨房工具。','把本应服务于烹饪的规范动作改造成夸张、突兀甚至攻击性的身体动作。','让口语、字母顺序、器具形状和身体手势共同承担意义，而不是依赖旁白解释。','以录像保存一次时间性的表演，使女性主义批评进入电视/视频语言内部。'],
        sourceUrl:'https://www.moma.org/artists/6832',images:[],relations:[rel('机构','MoMA','Rosler 作品长期进入 MoMA 摄影、媒体与版画收藏/展览语境。'),rel('方法','feminist video / performance','把厨房从题材转为一套由器具、语言、动作和媒体角色共同构成的符号制度。')]
      })
    ],
    awards:[],
    exhibitions:['The Shaping of New Visions: Photography, Film, Photobook — MoMA — 2012–13','415: Divided States of America — MoMA — 2021–2026'],
    sources:[
      {label:'MoMA — House Beautiful: Bringing the War Home (12-work original group)',url:'https://www.moma.org/collection/works/152791'},
      {label:'MoMA — Red Stripe Kitchen',url:'https://www.moma.org/collection/works/150129'},
      {label:'MoMA — Beauty Rest',url:'https://www.moma.org/collection/works/150120'},
      {label:'MoMA — The Bowery in Two Inadequate Descriptive Systems',url:'https://www.moma.org/audio/playlist/263/3396'},
      {label:'MoMA — Martha Rosler artist record',url:'https://www.moma.org/artists/6832'}
    ]
  }
};
