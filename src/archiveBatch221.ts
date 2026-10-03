import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel=(kind:ArchiveRelation['kind'],label:string,detail?:string):ArchiveRelation=>({kind,label,detail});

export const archiveBatch221:Record<string,ArtistArchive>={
  'trevor-paglen':{
    artistId:'trevor-paglen',
    projectCoverage:'作品级深化：Autonomy Cube / From “Apple” to “Anomaly” / Sight Machine / Image Operations. Op.10。重点补足网络基础设施、训练数据物质化、实时机器视觉与录像装置的具体生产链，并记录可核验的巡展版本差异。',
    imageCoverage:'艺术家工作室、Barbican 与 SFMOMA 均提供对应作品或安装图；本批记录官方图像入口与版权/授权路径。因这些页面未提供可确认的开放再发布许可，不把网页图像复制为本站资产，作品图片字段明确暂缺，避免以搜索缩略图替代。',
    note:'Paglen 的作品不只是“讨论监控/AI”。他经常把原本隐藏在后台的基础设施直接变成作品材料：Tor 节点真的转发流量，训练集照片真的被打印钉上墙，摄像机真的把现场演奏送入计算机视觉算法。理解他的关键是追踪系统实际运行了什么，而不是只读主题。',
    projects:[
      {
        title:'Autonomy Cube — sculpture as a functioning Tor relay',
        cluster:'network infrastructure / sculpture / surveillance / privacy',
        period:'2014–2015 onward',
        summary:'Autonomy Cube 是一个约 19 5/8 × 19 5/8 × 19 5/8 英寸的 Plexiglas 透明立方体，内部放置联网计算机组件。它不是网络主题的象征模型：安装后会建立名为 “Autonomy Cube” 的开放 Wi‑Fi，观众连接后，其互联网流量经 Tor 网络路由；作品自身同时加入 Tor 基础设施并转发其他 Tor 用户的流量。2015 Edith-Russ-Haus 版本首次被配置为 exit node，并通过展厅中的 repeaters 扩展信号，使整座美术馆在网络意义上成为作品的一部分。',
        actions:[
          '以 Plexiglas 制作透明立方体，把通常隐藏的计算机与网络硬件直接暴露给观看者。',
          '在内部部署联网计算机组件并建立开放 Wi‑Fi hotspot，允许现场观众真实接入。',
          '把使用者的网络流量路由进 Tor，而不是提供普通机构 Wi‑Fi；作品同时承担 Tor relay 功能。',
          '在 2015 Oldenburg 展览中把作品配置为 exit node，并用 repeaters 穿过展览空间扩大覆盖范围。',
          '因此观看方式有两层：观众既可以站在雕塑前看硬件，也可以拿出自己的设备连接网络并成为系统使用者。',
          '作品把 host institution 也卷入其政治结构：美术馆不只是陈列物件，而是在运行隐私导向的志愿网络基础设施。'
        ],
        sourceUrl:'https://paglen.studio/2020/04/09/autonomy-cube/',
        images:[],
        relations:[
          rel('展览','Edith-Russ-Haus für Medienkunst, Oldenburg','2015：首次配置为 exit node；repeaters 扩展至整个建筑'),
          rel('收藏','SFMOMA','馆藏记录包含 Autonomy Cube、custom pedestal 与 power brick；高分辨率图像需向 SFMOMA copyright 部门申请')
        ]
      },
      {
        title:'From “Apple” to “Anomaly” (Pictures and Labels) — ImageNet made physical',
        cluster:'training data / taxonomy / installation / machine vision',
        period:'2019–2020',
        summary:'为 Barbican The Curve 制作的委任项目。Paglen 从 ImageNet——超过 1,400 万张图像、两万余分类的训练数据集——抽取并组织约 30,000 张照片，把原本供机器训练的数字图像逐张打印、逐张钉到弧形展墙。展览从 apple 等相对无争议类别逐步进入 debtor、bad person、failure、loser 等对人的判断性分类，使 taxonomy 本身成为可步行阅读的空间结构。Barbican 的艺术家访谈进一步确认，约 35,000 张图像在制作中经历了 individually printed / individually pinned 的人工劳动。',
        actions:[
          '进入 ImageNet 的分类系统，不只研究图像内容，还研究标签如何预先规定机器可以“看见”什么。',
          '从庞大训练集中选择一组类别和对应训练图像，形成由物件分类逐渐进入人物判断的观看路径。',
          '把数万张原本存在于数据库中的小图像单独打印，再由人工逐张钉到 Barbican The Curve 的长弧墙面。',
          '利用 Curve 的连续建筑长度把 taxonomy 变成空间序列：观众必须边走边从一个类别进入另一个类别。',
          '同时暴露训练数据背后的 click-work：ImageNet 图像曾由网络劳工标注，展览又以大量打印、钉墙的实体劳动镜像这种隐藏劳动。',
          '项目中的 The Treachery of Object Recognition 以 Magritte 图像及机器 bounding-box/标签逻辑提出“谁有权决定图像是什么意思”的问题。'
        ],
        sourceUrl:'https://www.barbican.org.uk/whats-on/2019/event/trevor-paglen-from-apple-to-anomaly',
        images:[],
        relations:[
          rel('展览','Barbican Centre, The Curve, London','26 Sep 2019–16 Feb 2020；约30,000张 individually printed photographs'),
          rel('出版','Trevor Paglen: From “Apple” to “Anomaly”','Barbican Gallery, 2019；展览出版物，48页')
        ]
      },
      {
        title:'Sight Machine — live concert processed by machine vision',
        cluster:'live performance / computer vision / projection / AI',
        period:'2017–2019',
        summary:'Paglen 与 Kronos Quartet 合作的现场多媒体表演。乐手真实演奏时，多台摄像机持续拍摄，video feeds 被送入一组计算机视觉/AI 算法；软件对现场画面进行 face detection、object detection、年龄/性别/情绪估计等不同机器解释，再把这些“机器所见”实时投影到乐手身后的屏幕。作品因此不是预制 AI 影像，而是演奏、摄影机、计算机、算法与投影同步运行的 feedback system。艺术家工作室明确指出每次演出都会明显演化。',
        actions:[
          '把多台摄像机布置在 Kronos Quartet 周围，从不同角度持续获取现场演奏视频。',
          '将 live feeds 输入定制计算机视觉系统，调用从消费级人脸检测到自动驾驶、监控和武器制导语境中的算法。',
          '实时生成机器识别后的图像层、分类与判断，并投影到乐手背后的大型屏幕。',
          '让观众同时看见同一个事件的两种版本：人的现场音乐经验，以及机器把身体压缩为可计算特征后的视觉输出。',
          '不同演出并非复制同一固定装置：2017 San Francisco Pier 70、2018 Holland Festival / Smithsonian、2019 Barbican 均属于持续调整的版本。',
          'Barbican 版本约 75 分钟无中场；观看方式保留音乐厅正面观看，但背屏不断把现场重新编码。'
        ],
        sourceUrl:'https://paglen.studio/2019/07/01/sight-machine/',
        images:[],
        relations:[
          rel('展览','Pier 70, San Francisco','2017：首次版本，在旧造船仓库演出'),
          rel('展览','Holland Festival, Amsterdam','2018 演出版本'),
          rel('展览','Smithsonian American Art Museum, Washington, DC','2018 演出版本'),
          rel('展览','Barbican Centre, London','11 Jul 2019；约75分钟，无中场')
        ]
      },
      {
        title:'Image Operations. Op.10 — computer vision edited into a 4K video score',
        cluster:'video installation / computer vision / surveillance / machine learning',
        period:'2018',
        summary:'在 Berlin Funkhaus 拍摄的单频道 4K UHD 彩色录像投影，5.0 Dolby Surround Sound，23分钟。弦乐四重奏演奏 Debussy String Quartet in G Minor, Op.10；影像开始近似普通摄影机视角，随后逐步切换为不同计算机视觉系统的“解释”：从简单人脸检测到自动驾驶、guided missile、drone，以及估计年龄、性别和情绪状态的 AI。与 Sight Machine 的实时演出相比，它把同一研究压缩为有固定时长、声画剪辑和投影规格的录像装置。',
        actions:[
          '在 Berlin Funkhaus 组织弦乐四重奏演奏 Debussy Op.10 并进行受控拍摄。',
          '把拍摄画面依次送入多类 computer-vision systems，让同一身体/动作被不同技术协议重新描述。',
          '通过剪辑让视角从普通 camera image 缓慢过渡到 face detection、自驾系统、导弹/无人机视觉及人口属性估计。',
          '最终输出为 single-channel 4K UHD color video projection，而不是把算法界面当静态截图展示。',
          '以 5.0 Dolby surround sound 保留音乐的空间性，使机器视觉的量化结果与无法完全量化的音乐经验并置。',
          '固定 23 分钟时长使观众经历一条被编排的“机器视觉史/观看谱”，区别于 Sight Machine 每场变化的实时反馈结构。'
        ],
        sourceUrl:'https://paglen.studio/2020/04/23/image-operations/',
        images:[],
        relations:[rel('展览','Image Operations. Op.10','2018；single-channel 4K UHD color video projection, 5.0 Dolby surround, 23 min')]
      }
    ],
    awards:[],
    exhibitions:[
      'Edith-Russ-Haus für Medienkunst — Autonomy Cube, 2015',
      'Barbican Centre, The Curve — From “Apple” to “Anomaly”, 2019–2020',
      'Pier 70 / Holland Festival / Smithsonian American Art Museum / Barbican — Sight Machine, 2017–2019'
    ],
    sources:[
      {label:'Trevor Paglen Studio · Autonomy Cube',url:'https://paglen.studio/2020/04/09/autonomy-cube/'},
      {label:'SFMOMA · Trevor Paglen collection',url:'https://www.sfmoma.org/artist/Trevor_Paglen/'},
      {label:'Barbican · From “Apple” to “Anomaly”',url:'https://www.barbican.org.uk/whats-on/2019/event/trevor-paglen-from-apple-to-anomaly'},
      {label:'Barbican · Paglen on From Apple to Anomaly',url:'https://www.barbican.org.uk/s/trevorpaglen'},
      {label:'Trevor Paglen Studio · Sight Machine',url:'https://paglen.studio/2019/07/01/sight-machine/'},
      {label:'Barbican · Sight Machine',url:'https://www.barbican.org.uk/whats-on/2019/event/kronos-quartet-trevor-paglen-sight-machine'},
      {label:'Trevor Paglen Studio · Image Operations',url:'https://paglen.studio/2020/04/23/image-operations/'}
    ]
  }
};