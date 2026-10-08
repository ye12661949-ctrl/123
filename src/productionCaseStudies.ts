/** 逐件作品的制作证据档案。来源分级、未知项和版本信息不得省略。
 * 资料核查：2026-10-08。图像均引用原站；未获得单张直链时提供原始图版链接。
 */
export type ProductionSourceKind = 'artist' | 'institution' | 'gallery' | 'interview' | 'independent';
export interface ProductionSource {
  kind: ProductionSourceKind;
  label: string;
  url: string;
  evidence: string;
}
export interface ProductionFrame {
  title: string;
  imageUrl?: string;
  sourceUrl: string;
  credit: string;
  seen: string;
  actions: string;
  materialTechnique: string;
  transformation: string;
  function: string;
  relation: string;
  uncertainty: string;
}
export interface ProductionCase {
  title: string;
  researchedOn: string;
  projectScope: string;
  methodChain: string[];
  specifications: string[];
  exhibition: string;
  unresolved: string[];
  frames: ProductionFrame[];
  sources: ProductionSource[];
}
const studio = 'https://www.lebohangkganye.co.za/mohlokomedi-wa-tora-2018';
const imageSheet = 'https://thephotographersgallery.org.uk/sites/default/files/attachments/Reduced%20size%20DBPFP24%20final%20image%20sheet.pdf';
const interview = 'https://mmutleak.com/2018/10/01/intraparadox-interview-with-lebohang-kganye/';
export const productionCaseStudies: Record<string, Record<string, ProductionCase>> = {
  'lebohang-kganye': {
    'Haufi nyana? I’ve come to take you home': {
      title: 'Mohlokomedi wa Tora（2018）｜四幕纸板剧场的实际制作',
      researchedOn: '2026-10-08',
      projectScope: '此处分析的是2018年独立装置 Mohlokomedi wa Tora，2023年作为 Haufi nyana? 展览中的作品之一展出；不要把2018年的四幕作品误记为2023年才制作。',
      methodChain: [
        '资料采集：走访不同地区的家人，翻看家族相册；根据原件状况及亲属意愿，重拍或扫描旧照片；同时采访姑母、祖母，搜集家族迁徙与生活记忆。',
        '编辑与场景：从两位女性长辈讲述的四个故事中提取人物、牛群、房屋、车辆、室内陈设；将档案照片与重构的场景组合成四幕。具体每一张底图是否均出自家族相册，尚不能逐件确认。',
        '实体输出：把黑白/褐色摄影人物、动物和背景放大成近真人尺度的平面剪影；艺术家官网将安装材料记为 Xanita board on wood，其他机构使用 cardboard cut-outs / photographic prints on wood。不能据此倒推出纸板厚度、印刷机或喷墨型号。',
        '支撑与布置：将平面图像安装在木质三角支架/底座上，四组场景围绕中心布置，形成可穿行的四条入口；从照片的二维构图转为真实空间的景深和遮挡。',
        '光与观看：中心灯具转动，依次照亮不同组场景并投下移动阴影；观众在各幕之间穿行，近似倒置走马灯的空间体验。艺术家2018年访谈明确说，早期曾希望让纸板人物本身机械运动，但当时尚未实现，不能把愿望写成既成装置机制。'
      ],
      specifications: [
        '年份：2018；媒介：摄影图像的真人尺度裁切、Xanita board on wood（艺术家官网）；其他展览描述为 photographic prints on wood / cardboard cut-outs。',
        '展陈：四幕围绕中心旋转灯具，观众可从四个通道进入；2018 Pretoria Art Museum，2023 Foam，后续 Kunsthal KAdE 与2025布鲁塞尔画廊均有展陈/安装图。',
        '精确总尺寸、每块板厚度、支架木材种类、灯具型号/转速、打印工艺、相机/镜头/扫描仪/软件：尚无可靠一手规格，统一标记未知。'
      ],
      exhibition: '四幕为同一装置的不同方向，不是四张可互换的独立照片。2018年比勒陀利亚初展有评论指出空间狭窄、木支架显眼；后续展陈可能改变观众通行距离。不能把不同展览视图当作同一时间、同一尺寸的固定版本。',
      unresolved: [
        '艺术家官网使用 Xanita board on wood；采访和机构文本使用 cardboard / photographic prints on wood。可能涉及不同结构层或不同版本，但没有足够证据精确还原每层材料。',
        '没有逐件核实相机、镜头、重拍/扫描仪、图像合成软件、印刷设备、材料厚度、切割工具、灯具功率与转速。',
        '以下四幕排列按官方 Scene 1–4 编号，不能推断它们是固定参观顺序或事件发生的年代顺序。',
        '仅 Scene 1 和安装视图提供可核实的直接图像链接；Scene 2、3、4 的馆方 PDF 有标号图版，页面以来源链接引导，不伪造图片地址。'
      ],
      frames: [
        {
          title: 'Scene 1｜牛群、田地与婚姻聘礼记忆',
          imageUrl: 'https://images.squarespace-cdn.com/content/v1/598b795cbebafb9c49bc5860/1558481291840-GULFQETC1DYUEXYE9EU3/Lebo_Mohlokomedi-wa-tora_Scene-1_3D.jpg',
          sourceUrl: studio,
          credit: '© Lebohang Kganye / 艺术家官网；馆方2024年图版亦标注 Scene 1',
          seen: '黑白田地和通向远方的土路前，牛群以明显的白色裁切轮廓聚集；右侧站立两个人物，远处有小屋/农舍。牛与人像不是同一自然透视的连续现场。',
          actions: '艺术家从姑母口述中提取婚姻聘礼时十五头牛进入院子的记忆，将牛、农场和人物分别组织为可以裁切、放大的图像层，并转为实体布景。',
          materialTechnique: '摄影图像、裁切平面、Xanita 板与木支撑；具体图像拼接软件和裁切设备未知。',
          transformation: '口述中“牛多得让她跑开”的动作 → 牛群的密集前景和白边分层 → 观众首先感知数量、堆叠与被重演的记忆，而非单一纪实瞬间。',
          function: '四幕中的乡村/家族婚姻记忆锚点；为后续城市住宅和另一处农场场景建立地理与时间对照。',
          relation: '与 Scene 3 同为田野场景，但 Scene 1 以牛群数量为中心，Scene 3 以车辆与马的运动事故为中心；不能用任意农场照片替代。',
          uncertainty: '姑母的具体原话由2018年访谈确认；哪些牛和人物分别来自哪张底片尚未知。'
        },
        {
          title: 'Scene 2｜房屋、街灯、人物与院落',
          sourceUrl: imageSheet,
          credit: '© Lebohang Kganye / The Photographers’ Gallery 2024 官方图版第3页',
          seen: '平房立面前有院门、围栏、树和街灯；前景分散站着妇女、儿童、坐着的成年人及日常物件。景物以不同平面叠置，明显保留剪影白边。',
          actions: '从相册、重拍/扫描与口述资料中选取居住空间和人物线索，按街区布景排列；展厅版本将平面景物置于独立木支架上。',
          materialTechnique: '黑白摄影剪影、板材、木架与光照；具体照片来源逐张未知。',
          transformation: '原本扁平的家庭住宅记录 → 有前后层次、可绕行的街道场景；观众需要改变站位才能分辨谁处在门、树、街灯之前。',
          function: '把家族叙事从农田带到居住空间，呈现生活场景而不是抽象迁徙箭头。',
          relation: '与 Scene 4 的室内形成“街区外部—家庭内部”的空间对照；四幕没有已证实的固定叙事顺序。',
          uncertainty: '官方图版可确认物件与场景，但不能逐人确认姓名及具体年份。'
        },
        {
          title: 'Scene 3｜马、送奶车辆与田野',
          sourceUrl: imageSheet,
          credit: '© Lebohang Kganye / The Photographers’ Gallery 2024 官方图版第3页',
          seen: '田地与树林前景中出现一匹马、几个人物和一辆老式车辆，另有小屋、器物与不同比例的剪影；图像保留拼贴的平面接缝感。',
          actions: '艺术家把姑母讲述的送奶男孩开车惊扰马匹、马挣脱并拖拽人的事件，转为可辨认的马、车辆、田野与人物组合。',
          materialTechnique: '档案/再摄影图像的裁切与实体布景，板材及木质支架；马和车辆的具体底图来源待核实。',
          transformation: '一段带有危险动作的口述故事 → 静止的马和车在同一空间并置 → 观众必须借助叙述才知道事故，静态装置本身不展示完整动作过程。',
          function: '以可能发生的动作和意外区别于 Scene 1 的婚姻牛群，也让乡村生活不被简化为田园怀旧。',
          relation: '与 Scene 1 重复乡村场域却更换叙事重心；和 Scene 2、4 的日常住宅共同形成迁徙前后不同生活经验。',
          uncertainty: '事故与姑母口述来自艺术家2018年访谈；无法仅凭图像验证事件经过。'
        },
        {
          title: 'Scene 4｜棋盘格地面的家庭室内',
          sourceUrl: imageSheet,
          credit: '© Lebohang Kganye / The Photographers’ Gallery 2024 官方图版第3页',
          seen: '黑白棋盘格地面上排列桌子、柜子、坐着或站立的成年人及儿童；家具和人物比例、阴影不完全一致，保留剧场式拼贴感。',
          actions: '将家庭照片与家具、地板等居家线索组织成室内布景，输出为可立起的平面物件，围绕观众可穿行的路径摆放。',
          materialTechnique: '黑白/褐色照片裁切、Xanita/纸板及木支撑、展览照明；室内具体器物是否为旧相册原景待核实。',
          transformation: '相册中的家庭空间 → 观众身体可进入的“家”的尺度；棋盘格地面强化透视，而平面人物又故意暴露记忆的建构性。',
          function: '从公共乡村、街道场景收束到亲密家庭内部；艺术家2018年访谈谈到以 Katlehong 祖母家的空间作为叙事终点，但单凭此不能逐一确定画面中每个人身份。',
          relation: '与 Scene 2 形成外/内对照；和 Scene 1 的乡村聘礼及 Scene 3 的乡村事故形成时间与地点上的跨度。',
          uncertainty: '艺术家访谈确认 Katlehong 家庭空间重要，但未能独立核对室内每件家具的实物来源。'
        },
        {
          title: '展览安装视图｜四幕与中心光柱如何工作',
          imageUrl: 'https://images.squarespace-cdn.com/content/v1/5534a426e4b0ed810ce8f891/1748431365320-B3KIWAF36MJD3N8VC0VD/Lebohang%2BKganye%2C%2BMohlokomedi%2Bwa%2BTora%2C%2B2018%2C%2BInstallation%2Bwith%2Bphotographic%2Bprints%2Bon%2Bwood%2C%2Blight.png',
          sourceUrl: 'https://nataal.com/the-work-of-shadows',
          credit: '展览安装照片 / Nataal 2025；摄影作者未在所引页面确认',
          seen: '木地板上密集竖立三角形木架，支撑房屋、牛群、人物等黑白剪影；中央一根黑色立柱顶部装有灯具，一侧布景被照亮、另一侧较暗。',
          actions: '放大并裁切摄影平面，固定到板材及木架，沿环形路径摆放；中心灯具照亮不同侧面并投射阴影，观众从四处开口穿过。',
          materialTechnique: 'Xanita 板/摄影输出、木架、中心灯光。已证实转动的是中心光源；艺术家曾计划让人物机械运动，但2018访谈并未确认已实现。',
          transformation: '静态档案照片 → 多平面空间剪影 → 随灯光与观众位置改变的阴影；“摄影如何变成戏剧”可从木架、光束与人物尺度直接观察。',
          function: '这是单张场景图无法替代的证据：证明作品不是四张数字拼贴照片，而是可走入的空间装置。',
          relation: '将 Scene 1–4 在同一现场并置，揭示四幕的结构关系；也暴露支架的可见性和展厅尺度限制。',
          uncertainty: '该照片为后续展览版本；不能据此断定2018 Pretoria 初展的灯具和场地尺寸完全相同。'
        }
      ],
      sources: [
        { kind: 'artist', label: '艺术家官网｜作品与材料', url: studio, evidence: '2018年；Xanita board on wood；四幕及Kunsthal KAdE安装视图。' },
        { kind: 'artist', label: '艺术家工作室｜2024作品说明PDF', url: 'https://static1.squarespace.com/static/598b795cbebafb9c49bc5860/t/6605d1858737d53d3b4e2272/1711657349513/LebohangKganye_MohlokomediWaTora_March2024.pdf', evidence: '四条入口、家族姓氏/光、Katlehong空间结构。' },
        { kind: 'interview', label: '2018年艺术家访谈｜材料、扫描、四个故事', url: interview, evidence: '重拍/扫描家族照片；纸板结构稳定性；姑母牛群和马车故事；运动机械化尚属计划。' },
        { kind: 'institution', label: 'The Photographers’ Gallery｜四幕编号图版', url: imageSheet, evidence: 'Scene 1–4准确画面及图像署名；PDF第3页。' },
        { kind: 'institution', label: 'Foam｜2023展览', url: 'https://www.foam.org/events/lebohang-kganye', evidence: '确认作品纳入2023年跨媒介个展，而非该年新创作。' },
        { kind: 'gallery', label: 'La Patinoire Royale Bach｜展览作品说明', url: 'https://prvbgallery.com/exhibitions/66-the-work-of-shadows-lebohang-kganye/', evidence: '四幕环形装置、光与家族迁徙主题。' },
        { kind: 'independent', label: '2018年展评｜空间拥挤与木支架', url: 'https://mmutleak.com/2018/08/28/mohlokomedi-wa-tora/', evidence: '独立评论提出初展空间不足与支架过于突出，作为版本批评而非艺术家自述。' }
      ]
    }
  }
};
