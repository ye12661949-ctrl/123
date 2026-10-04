import type { ArtistArchive, ArchiveProject, ArchiveRelation } from './archiveData';

const rel=(kind:ArchiveRelation['kind'],label:string,detail?:string):ArchiveRelation=>({kind,label,detail});
const project=(p:ArchiveProject)=>p;

export const archiveBatch285:Record<string,ArtistArchive>={
  'trevor-paglen':{
    artistId:'trevor-paglen',
    projectCoverage:'继续下钻 Trevor Paglen 的机器视觉/训练数据实践：本批把 From Apple to Anomaly、Sight Machine、Training Humans、ImageNet Roulette 与 Even the Dead Are Not Safe 拆成具体生产动作、算法/数据、印刷与现场版本。',
    imageCoverage:'5 / 5 节点均找到 Barbican、Fondazione Prada、Pace 等机构的对应作品或安装图入口。机构图片均有版权/摄影限制，未确认允许仓库再发布，因此 images 保持暂缺；关系字段逐项记录官方图片入口与已知摄影 credit，不用无关图替代。',
    note:'作品级研究批次。重点记录 Paglen 如何把原本在服务器、数据集与机器视觉管线中不可见的图像劳动转成可观看的墙面、实时演出、互动网页和摄影对象。',
    projects:[
      project({
        title:"From 'Apple' to 'Anomaly' — Barbican Curve commission",cluster:'training dataset / installation / ImageNet / taxonomy',period:'26 Sep 2019–16 Feb 2020',
        summary:'Paglen 把机器学习训练集从屏幕后台搬到 Barbican 的弧形展廊。他从 ImageNet 等训练数据中抽取图像和标签，把约30,000–35,000张小幅照片逐张打印、逐张钉到墙上，沿 Curve 形成巨大的分类学图像流。作品不是简单把网络图片做成墙纸：它让观众身体沿着标签体系行走，直接看到“apple”等看似普通类别如何逐渐进入人物、身份、偏见和异常分类。Paglen 在 Barbican 访谈中明确说，约35,000张图由10个人连续约2.5周安装，这种人工劳动痕迹有意对应训练数据背后常被隐藏的 click-work。',
        actions:['研究 ImageNet 等计算机视觉训练集的 taxonomy、标签与图像样本。','从数据集中选择并组织数万张训练图像，而不是重新拍摄现实场景。','把约30,000–35,000张图像分别打印成实体小图。','由安装团队逐张把图钉到 Curve 长墙；Paglen 特别强调10人约2.5周的人工安装劳动。','让观众沿弧形展廊步行阅读类别变化，把通常不可见的数据集结构转换为空间尺度。'],
        sourceUrl:'https://www.barbican.org.uk/s/trevorpaglen',images:[],relations:[rel('展览',"Barbican — From 'Apple' to 'Anomaly'",'Curve commission；官方页面提供安装图，摄影 credit Tim P. Whitby/Getty Images；版权受限，故仅记录入口。'),rel('制作','dataset → physical wall','Barbican 记录约30,000张展出图；艺术家访谈谈及约35,000张逐张打印/钉墙及10人2.5周安装劳动。')]
      }),
      project({
        title:'Sight Machine — Kronos Quartet / Barbican performance version',cluster:'live performance / computer vision / AI / projection',period:'2017–2019',
        summary:'Sight Machine 把机器视觉变成一场实时观看实验。Kronos Quartet 在台上演奏时，摄影机持续拍摄四位乐手；视频流立即送入一组不同用途的 computer-vision algorithms，包括消费级人脸检测、监控系统使用的识别技术以及与自动驾驶/制导武器相关的视觉算法。软件把识别框、分类、特征与其他机器输出重新转成图像，再实时投到乐手背后的大屏。观众因此同时看到同一场演出的人类经验与算法化版本。Barbican 2019版本运行约1小时15分钟；作品最早于2017年在 Stanford/Cantor residency 中向受邀观众展示，2018 Holland Festival 获 world premiere。',
        actions:['在舞台周围布置摄像机，持续采集 Kronos Quartet 的现场演奏。','把实时视频送入多种 computer-vision / AI 算法，而不是预先剪好固定影像。','使用从消费级 facial detection 到 surveillance、autonomous vehicle、guided-missile 相关视觉技术的不同识别逻辑。','将算法输出重新可视化，并投影到演奏者背后的屏幕。','让观众在同一时间比较肉眼看到/听到的音乐表演与机器生成的数值化观看结果。'],
        sourceUrl:'https://www.barbican.org.uk/kronos-quartet-trevor-paglen-sight-machine',images:[],relations:[rel('展览','Barbican Hall performance','2019；官方页面有作品视觉图，版权未标示为开放再发布。'),rel('版本','Stanford 2017 → Holland Festival 2018 → Barbican 2019','从 residency 中的受邀展示发展为巡演式实时多媒体演出；算法和现场空间随演出版本重新配置。')]
      }),
      project({
        title:'Training Humans — Fondazione Prada Osservatorio',cluster:'training images / archival exhibition / AI history',period:'12 Sep 2019–24 Feb 2020',
        summary:'Paglen 与 Kate Crawford 没有制作一个关于“未来AI”的想象展，而是直接研究自1960年代以来用于教计算机识别人类的 training-image collections。他们搜集、筛选并重新编排机器视觉研究中的人脸、身体、情绪和人物分类数据，让原本作为技术基础设施的训练照片成为展览主体。展览通过不同历史时期的数据集并置，显示分类标准并非机器自然产生，而是由研究者、机构、标注者和既有社会分类共同建构。观看方式因此接近一座训练图像考古档案：观众比较不同年代的人如何被拍摄、切割、命名和归类。',
        actions:['与 Kate Crawford 长期调查用于 computer vision / AI 的人物训练数据集。','把研究范围拉回1960年代，追踪训练图像和人物分类技术的历史变化。','从技术数据基础设施中提取训练照片、标签和分类逻辑，转成实体展览材料。','按历史/分类关系重新编排，使观众能比较机器视觉中的“人”如何被制度化定义。','以机构展览而非单一摄影作品呈现，强调 dataset 本身就是具有政治和视觉历史的文化对象。'],
        sourceUrl:'https://www.fondazioneprada.org/project/training-humans/',images:[],relations:[rel('展览','Fondazione Prada Osservatorio, Milan','官方页面保存展览现场图；摄影 Marco Cappelletti，图片版权受限。'),rel('合作','Kate Crawford + Trevor Paglen','展览由两人共同构思，研究重点是训练图像史，而非把AI拟人化。')]
      }),
      project({
        title:'ImageNet Roulette — public web application / Training Humans context',cluster:'interactive web / ImageNet / classification / dataset critique',period:'2019',
        summary:'ImageNet Roulette 把 ImageNet 人物类别的偏见直接暴露给普通用户。参与者上传自己的照片后，应用把图像送入依据 ImageNet 人物类别工作的分类系统，再返回机器给出的标签；这些标签可能带有种族主义、厌女或侮辱性。Paglen 明确说明这种冒犯并非故障，而是作品要暴露的训练集问题，网页甚至直接警告用户会产生“racist, misogynistic and horrible results”。应用迅速传播，艺术家在 Barbican 访谈中称高峰达到约120万张图/日；随后 ImageNet 团队宣布删除大量人物类别并开展去偏见工作。',
        actions:['针对 ImageNet 的 person categories 建立可供公众访问的图像分类应用。','让参与者主动上传自己的肖像，而不是只观看艺术家预选的训练样本。','把上传图像输入分类管线，并把系统给出的类别/标签直接反馈给用户。','保留令人不适的错误和偏见输出作为批判证据，同时在界面明确警告结果可能冒犯。','通过大规模公众使用把抽象的数据集伦理问题转成第一人称经验；高峰流量约120万张图/日。'],
        sourceUrl:'https://www.barbican.org.uk/s/trevorpaglen',images:[],relations:[rel('研究','ImageNet person categories','项目直接针对训练集人物分类及其历史偏见。'),rel('影响','ImageNet category review','Barbican 访谈中 Paglen 记录项目传播后 ImageNet 方宣布删除大量人物类别并开展去偏见工作。'),rel('图片','official contextual images','Training Humans / Barbican 均有项目相关视觉资料；未确认可再发布，故本地暂缺。')]
      }),
      project({
        title:'“de Beauvoir” (Even the Dead Are Not Safe) Eigenface (colorized)',cluster:'custom software / eigenface / dye sublimation print',period:'2019',
        summary:'这件作品不是普通的 Simone de Beauvoir 肖像。Paglen 使用自行开发的软件，把机器识别人脸时产生的抽象数学数据重新转换成一种“eigenface”图像，再把这一机器表征着色并制作成方形实体摄影。Pace 记录的版本为 dye sublimation print，48 × 48 in（121.9 × 121.9 cm）。因此制作链是历史人物的人脸资料 → 机器视觉的数学表征 → custom software 反向可视化 → colorization → dye-sublimation 实体输出；作品让观众看到监控系统中的“脸”并不是人类意义上的肖像，而是可运算的特征空间。',
        actions:['选择已去世的 Simone de Beauvoir 作为机器肖像研究对象。','使用 custom-developed software 处理机器算法中的抽象人脸数学数据。','把数据转换成 eigenface，而非直接修饰一张既有肖像照片。','对生成的机器脸进行 colorization，使数学表征成为可观看图像。','以 dye sublimation 工艺输出为121.9 × 121.9 cm方形实体作品。'],
        sourceUrl:'https://www.pacegallery.com/artfairs/paris-photo/',images:[],relations:[rel('展览','Trevor Paglen: The Shape of Clouds, Pace Geneva, 2019','Pace 说明该作曾展于该展。'),rel('材料','dye sublimation print','48 × 48 in / 121.9 × 121.9 cm；Pace 官方作品图可见，© Trevor Paglen，未确认开放再发布。')]
      })
    ],
    awards:['LG Guggenheim Award 2026'],
    exhibitions:["Barbican — From 'Apple' to 'Anomaly', 2019–2020",'Fondazione Prada — Training Humans, 2019–2020','Barbican — Sight Machine, 2019'],
    sources:[{label:"Barbican — From 'Apple' to 'Anomaly' / artist interview",url:'https://www.barbican.org.uk/s/trevorpaglen'},{label:'Barbican — Sight Machine',url:'https://www.barbican.org.uk/kronos-quartet-trevor-paglen-sight-machine'},{label:'Fondazione Prada — Training Humans',url:'https://www.fondazioneprada.org/project/training-humans/'},{label:'Pace — Paris Photo / de Beauvoir eigenface',url:'https://www.pacegallery.com/artfairs/paris-photo/'},{label:'Pace — LG Guggenheim Award 2026',url:'https://www.pacegallery.com/journal/trevor-paglen-selected-as-the-2026-lg-guggenheim-award-recipient/'}]
  }
};
