/** 2026-10-10：Sheung Yiu 制作证据逐图审计，非独立作品计数。 */
export interface ProductionEvidenceFrame24 {
 id: string; title: string; imageUrl: string; sourceUrl: string; credit: string;
 seen: string; making: string; materials: string; visualEffect: string;
 roleAndRelation: string; evidenceLimit: string;
}
export interface ProductionEvidenceProject24 {
 artistId: string; project: string; period: string; auditedOn: string; scope: string;
 evidencePolicy: string; phases: string[]; frames: ProductionEvidenceFrame24[];
 exhibitionNotes: string[]; sources: {kind:string;label:string;url:string;claim:string}[];
}
export const productionEvidenceBatch24: Record<string, ProductionEvidenceProject24> = {
  "sheung-yiu": {
    "artistId": "sheung-yiu",
    "project": "Between Two Trees, There Are Many Worlds",
    "period": "2023–2024",
    "auditedOn": "2026-10-10",
    "scope": "艺术家官网8张影片帧、2张Anna Autio署名展陈照、5张925_OV系列展陈照，共15个不同公开图位；不是15件独立作品。影片完整镜头、不同场馆版本与全部物件尚未穷尽。",
    "evidencePolicy": "艺术家确认项目使用高光谱成像与激光扫描，并转成多种视觉形式；单张图片的算法、传感器、打印方式与设备型号，除明确可见者外一律不推断。图像观察与作者自述分开。",
    "phases": [
      "原始现场：赫尔辛基中央公园的两棵树（一棵存活、一棵死亡）及欧洲树皮甲虫相关环境；两树具体坐标和标本采样记录未公开。",
      "采集：艺术家自述使用高光谱成像、激光扫描捕捉森林；影片中可见无人机及仪器特写，但无法证明它们各自输出了哪一帧。",
      "数据转换：将测量数据转成不同可视形式，并与甲虫、鸟、人类及传感器的感知尺度论述并置；点云、低分辨率像素与虫体图形的逐帧管线未公开。",
      "编辑：将森林实景、仪器、虫体、点状树形、抽象影像及英文字幕组织成视频论文；完整时间轴、配音、软件和时长待核。",
      "实体/展陈：至少可见视频暗室、桌面书籍与透明板组合、黑白森林框画和五块树皮状物件的展示槽；各场馆版本的材料清单与对应关系未确认。"
    ],
    "frames": [
      {
        "id": "between-two-trees-01",
        "title": "影片01｜林间裸地、树桩与新生植被",
        "imageUrl": "https://images.squarespace-cdn.com/content/v1/51a94856e4b08b27fbbeb60a/1759661781277-6Q116H6EOYHKDWZLA0XX/BetweenTwoTrees_202308_3.jpeg",
        "sourceUrl": "https://www.sheungyiu.com/between-two-trees-there-are-many-worlds",
        "credit": "© Sheung Yiu / 艺术家官网",
        "seen": "阴影下的林间裸地，右侧有断裂树桩，背景是成片树木；英文字幕谈遥感监测虫害。",
        "making": "现场森林影像与字幕并置；无法从该帧确认是否由3D场景渲染、实拍或两者混合。",
        "materials": "森林/树桩；影像拍摄或生成设备、软件均未知。",
        "visualEffect": "先让观众辨认一个可见的林地现场，再以字幕提出传感器能否检测病害的问题。",
        "roleAndRelation": "它是环境入口而非检测结果；下一帧航拍无人机引入测量行动。",
        "evidenceLimit": "图像无法证明具体树木已被虫害侵染；裸地不等于病害的因果证据。"
      },
      {
        "id": "between-two-trees-02",
        "title": "影片02｜无人机位于林冠之上",
        "imageUrl": "https://images.squarespace-cdn.com/content/v1/51a94856e4b08b27fbbeb60a/1759661804576-Z6G0D8HCEOJRQ8DQ85R7/BetweenTwoTrees_202308_0.jpg",
        "sourceUrl": "https://www.sheungyiu.com/between-two-trees-there-are-many-worlds",
        "credit": "© Sheung Yiu / 艺术家官网",
        "seen": "密集深绿树冠中悬着白色四旋翼飞行器，构图把设备置于林冠中央。",
        "making": "镜头记录无人机与森林的空间关系；无人机确实入画，但它是否搭载高光谱传感器不能由照片判断。",
        "materials": "可见四旋翼无人机；品牌、相机型号、飞行高度、数据用途未知。",
        "visualEffect": "把抽象的遥感研究具体化为可见的飞行设备，使测量的距离和尺度成为问题。",
        "roleAndRelation": "与下一帧近距离传感器镜头对照：远距离观测与局部仪器视角。",
        "evidenceLimit": "不能因为出现无人机就推断全部高光谱数据由无人机采集。"
      },
      {
        "id": "between-two-trees-03",
        "title": "影片03｜测量仪器窗口与精度字幕",
        "imageUrl": "https://images.squarespace-cdn.com/content/v1/51a94856e4b08b27fbbeb60a/1759661800355-8TV2VZBRSSU6BIWTOH4X/BetweenTwoTrees_202308_1.jpg",
        "sourceUrl": "https://www.sheungyiu.com/between-two-trees-there-are-many-worlds",
        "credit": "© Sheung Yiu / 艺术家官网",
        "seen": "两侧灰色设备外壳围住中央模糊蓝色圆形区域，左侧有黄色警告三角形；字幕提到毫米精度与数据点。",
        "making": "摄制者将仪器局部特写与技术叙述剪接；艺术家确认项目采用激光扫描，但这一镜头无法识别具体型号。",
        "materials": "灰色测量设备的可见外壳；激光扫描是项目层面已证实的方法，仪器品牌/参数未知。",
        "visualEffect": "把点云的数学精度与一个具体物理仪器连接起来，提醒观众数据不是无媒介的。",
        "roleAndRelation": "与影片06/07白色点状树木图像构成“装置—数据可视化”的可能联系，但不能逐帧证明同一数据源。",
        "evidenceLimit": "字幕中的毫米精度不是本镜头所示设备的独立校准报告。"
      },
      {
        "id": "between-two-trees-04",
        "title": "影片04｜白色点状甲虫",
        "imageUrl": "https://images.squarespace-cdn.com/content/v1/51a94856e4b08b27fbbeb60a/1759661809085-A44EOZ092UDGX5YBRL06/BetweenTwoTrees_202308_5.jpg",
        "sourceUrl": "https://www.sheungyiu.com/between-two-trees-there-are-many-worlds",
        "credit": "© Sheung Yiu / 艺术家官网",
        "seen": "黑色背景中由密集白点构成一只甲虫的侧面形体，周围还有向上散逸的点；字幕称甲虫视觉较弱。",
        "making": "艺术家将甲虫形态转成点状数字视觉；其来源可能是建模或扫描，但现有资料不能确认哪一种。",
        "materials": "点状图形/数字动画帧；甲虫是否被实际3D扫描、模型软件和渲染器未知。",
        "visualEffect": "从林冠尺度跳到虫体尺度，点状形体借用了点云语言，却不应自动被当作真实测量数据。",
        "roleAndRelation": "与下一张重复小甲虫矩阵形成单体—群体的视觉转换。",
        "evidenceLimit": "点云风格是视觉效果，不能充当虫体实测数据的证据。"
      },
      {
        "id": "between-two-trees-05",
        "title": "影片05｜甲虫矩阵",
        "imageUrl": "https://images.squarespace-cdn.com/content/v1/51a94856e4b08b27fbbeb60a/1759661808532-UOAO8EM5DIEV8X4NXP43/BetweenTwoTrees_202308_6.jpg",
        "sourceUrl": "https://www.sheungyiu.com/between-two-trees-there-are-many-worlds",
        "credit": "© Sheung Yiu / 艺术家官网",
        "seen": "黑底上五行重复的细小灰白甲虫形体，各行数量和间距略有变化；字幕谈化学交流对光学传感器不可见。",
        "making": "把单个甲虫形象缩小、重复、排列成阵列；是否为同一3D模型多次实例化尚未证实。",
        "materials": "数字排布/重复图形；生成软件、数量控制与数据映射未知。",
        "visualEffect": "重复与缩放强调虫体数量及视觉不可见的化学交流；画面没有可见的化学信号。",
        "roleAndRelation": "与上一张单只甲虫构成尺度递进，与后面的森林点状图形成物种/场所的类比。",
        "evidenceLimit": "这张图提出“光学看不见什么”，而不是让观众真正看见化学通讯。"
      },
      {
        "id": "between-two-trees-06",
        "title": "影片06｜低分辨率蓝色像素块",
        "imageUrl": "https://images.squarespace-cdn.com/content/v1/51a94856e4b08b27fbbeb60a/1759661809978-EDW6WLY9AXQGUISGG7X1/BetweenTwoTrees_202308_7.jpg",
        "sourceUrl": "https://www.sheungyiu.com/between-two-trees-there-are-many-worlds",
        "credit": "© Sheung Yiu / 艺术家官网",
        "seen": "暗蓝色与青色的粗大方块拼成几乎无法辨认的画面；字幕提到卫星和地面激光扫描。",
        "making": "影像被展示为粗颗粒网格，可能涉及像素化或低分辨率数据放大；没有一手证据指明具体处理算法。",
        "materials": "数字像素画面；原始传感器、降采样比例和色彩映射规则未知。",
        "visualEffect": "让低分辨率成为观众直接经历的可见障碍，视觉上承接作品关于距离与细节丢失的论点。",
        "roleAndRelation": "与树木高密度点状图对照：不是所有“计算影像”都意味着同等可辨识性。",
        "evidenceLimit": "不能把这些色块直接读作高光谱波段图或特定卫星产品。"
      },
      {
        "id": "between-two-trees-07",
        "title": "影片07｜两株树的白色点状轮廓",
        "imageUrl": "https://images.squarespace-cdn.com/content/v1/51a94856e4b08b27fbbeb60a/1759661818398-TF38E5XA4Z3B8WYDEFDN/BetweenTwoTrees_202308_9.jpg",
        "sourceUrl": "https://www.sheungyiu.com/between-two-trees-there-are-many-worlds",
        "credit": "© Sheung Yiu / 艺术家官网",
        "seen": "黑色背景上两株高树及底部灌木以白色细点/细线构成；左侧一株较稀疏，右侧更茂密。",
        "making": "艺术家确认采集森林激光扫描数据并转成不同视觉形式；该帧与点云呈现一致，但单帧无法验证精确扫描位置和渲染管线。",
        "materials": "森林扫描数据（项目层面已证实）、点状数字显示；配准、过滤、渲染软件未知。",
        "visualEffect": "剥去彩色照片的树皮/叶色信息，只保留空间采样的可见结构，使树木差异成为密度差异。",
        "roleAndRelation": "与影片01实景林地、影片08稠密网状层形成自然表面—结构采样—抽象细节的转换。",
        "evidenceLimit": "白点疏密不能直接诊断树木健康，扫描遮挡与距离也可能改变点密度。"
      },
      {
        "id": "between-two-trees-08",
        "title": "影片08｜灰白纤维状空间网络",
        "imageUrl": "https://images.squarespace-cdn.com/content/v1/51a94856e4b08b27fbbeb60a/1759661820856-DWPE4JF67659LZ9QANID/BetweenTwoTrees_202308_10.jpg",
        "sourceUrl": "https://www.sheungyiu.com/between-two-trees-there-are-many-worlds",
        "credit": "© Sheung Yiu / 艺术家官网",
        "seen": "黑底上叠着细密灰白弧线、网状结构和近透明平面；字幕谈不同尺度观看的交换。",
        "making": "艺术家将结构数据处理为高密度抽象层；原始对象、是否真实点云以及具体变换步骤均待核实。",
        "materials": "数字线网影像；源数据和渲染算法未知。",
        "visualEffect": "在结尾削弱树木的可识别性，迫使观众注意采样尺度与显示方式。",
        "roleAndRelation": "紧接影片07可辨认的两株树，构成从形象到难辨网络的断裂。",
        "evidenceLimit": "抽象化本身不能证明新的非人类感知已被准确模拟。"
      },
      {
        "id": "between-two-trees-09",
        "title": "展陈09｜Artsi暗室总览（Anna Autio）",
        "imageUrl": "https://images.squarespace-cdn.com/content/v1/51a94856e4b08b27fbbeb60a/1759662215319-SVMFXMWT1WATVG3YBNKS/Kaksi%2Bpuuta%2C%2Bmonta%2Bmaailmaa%2B%28Between%2Btwo%2Btrees%2C%2Bthere%2Bare%2Bmany%2Bworlds%29%2C%2B2023%2C%2Bkokeellinen%2Belokuva_01_kuvaaja%2BAnna%2BAutio%2Bcopy.jpg",
        "sourceUrl": "https://www.sheungyiu.com/between-two-trees-there-are-many-worlds",
        "credit": "© Sheung Yiu / 展陈摄影：Anna Autio（艺术家官网文件名）",
        "seen": "暗室左侧长桌上陈列书、透明板和小物件，右侧墙面屏幕显示灰白甲虫；中间有低矮座凳。",
        "making": "把线性视频与桌面物件安排在同一观看空间，观众可在屏幕叙述和近距离材料之间切换。",
        "materials": "视频屏幕、桌、书、透明板、灯光、座凳；设备型号和布展尺寸未知。",
        "visualEffect": "影片时间与桌面物件的空间并置形成两种不同的观看节奏。",
        "roleAndRelation": "下一张近景显示桌上投射与透明板细节，不能以总览替代。",
        "evidenceLimit": "这张是展陈照片而非电影静帧；摄影署名Anna Autio，具体展厅日期待核。"
      },
      {
        "id": "between-two-trees-10",
        "title": "展陈10｜Artsi桌面投影与透明片（Anna Autio）",
        "imageUrl": "https://images.squarespace-cdn.com/content/v1/51a94856e4b08b27fbbeb60a/1759662216578-WJB1V4906TA4AS2GESO0/Kaksi%2Bpuuta%2C%2Bmonta%2Bmaailmaa%2B%28Between%2Btwo%2Btrees%2C%2Bthere%2Bare%2Bmany%2Bworlds%29%2C%2B2023%2C%2Bkokeellinen%2Belokuva_02_kuvaaja%2BAnna%2BAutio%2Bcopy.jpg",
        "sourceUrl": "https://www.sheungyiu.com/between-two-trees-there-are-many-worlds",
        "credit": "© Sheung Yiu / 展陈摄影：Anna Autio（艺术家官网文件名）",
        "seen": "黑色桌面上摊开大书，彩色光影落在书页；两块直立透明板显现绿色树形影像，木块支撑透明板，左端有双目状物件。",
        "making": "书页、透明支架与投射影像共同布置；可见叠影，但不能确认投影机位置或图像是否直接印在板上。",
        "materials": "书籍、透明板、木支座、投射光/显示光、桌面；投影系统规格未知。",
        "visualEffect": "实体书页承载图像的同时成为投射表面，透明片使数字森林获得分层的物理深度。",
        "roleAndRelation": "补充总览中看不清的装置层次；与黑暗中的影片屏幕形成光源与材质的对照。",
        "evidenceLimit": "不要把透明片上的树形图称为全息成像；其技术链条未核实。"
      },
      {
        "id": "between-two-trees-11",
        "title": "展陈11｜窄廊尽端的黑白森林照片",
        "imageUrl": "https://images.squarespace-cdn.com/content/v1/51a94856e4b08b27fbbeb60a/1759662307214-03OD1PRTMHGSNHQVINSN/925_OV_22.jpeg",
        "sourceUrl": "https://www.sheungyiu.com/between-two-trees-there-are-many-worlds",
        "credit": "© Sheung Yiu / 艺术家官网",
        "seen": "狭长走廊尽头深色墙上挂一幅带浅木框的黑白森林图像，中央有强亮斑，右墙可见文字标签。",
        "making": "将森林图像单独框装于走廊终端，用空间透视迫使观众正面观看。",
        "materials": "黑白摄影/印相、木色框、墙面照明；图像来源、打印方式、尺寸未知。",
        "visualEffect": "走廊把复杂森林压缩为单一正面图像，与电影中移动/变形的森林形成对照。",
        "roleAndRelation": "属于官网925_OV展陈图组；与其余四张可能同一场地，但馆名和日期未从图片核实。",
        "evidenceLimit": "不能把中心亮斑判为摄影曝光缺陷或特殊打印工艺。"
      },
      {
        "id": "between-two-trees-12",
        "title": "展陈12｜黑白树冠影像投射",
        "imageUrl": "https://images.squarespace-cdn.com/content/v1/51a94856e4b08b27fbbeb60a/1759662307262-6X4QZ5JNT8X21NIJ1YZ0/925_OV_23.jpeg",
        "sourceUrl": "https://www.sheungyiu.com/between-two-trees-there-are-many-worlds",
        "credit": "© Sheung Yiu / 艺术家官网",
        "seen": "黑色放映室墙面出现巨大白色树冠/点状树形，底部英文字幕提到Jakob von Uexküll；前方留有观看空地。",
        "making": "将影片以大尺度放映到黑色墙面，字幕与抽象树形同步显示。",
        "materials": "视频投影/大幅显示、黑墙与遮光帘；投影机、声道、银幕材质未知。",
        "visualEffect": "树冠图像从小型电脑画面变为几乎包围身体的空间视觉，改变观众的尺度感。",
        "roleAndRelation": "与下一张蓝色四色块帧共享展厅，却展示不同电影时刻。",
        "evidenceLimit": "这是同一放映空间的不同时间帧，不能算两个独立装置。"
      },
      {
        "id": "between-two-trees-13",
        "title": "展陈13｜蓝色四色块的放映时刻",
        "imageUrl": "https://images.squarespace-cdn.com/content/v1/51a94856e4b08b27fbbeb60a/1759662309130-9H3XDCB2AKFV7CQD36L1/925_OV_24.jpeg",
        "sourceUrl": "https://www.sheungyiu.com/between-two-trees-there-are-many-worlds",
        "credit": "© Sheung Yiu / 艺术家官网",
        "seen": "同一黑暗放映室中，画面分成四块深浅不同的蓝色矩形；字幕讨论相机、激光扫描、望远镜与卫星各自的感知方式。",
        "making": "把不同时间的影像和文字送入同一投影设备；四象限视觉结构可确认，是否映射四类传感器尚无一手说明。",
        "materials": "投影屏幕/画面与字幕；颜色映射规则未知。",
        "visualEffect": "观众在同一空间从树形转到近抽象色块，体验视觉信息可读性的突变。",
        "roleAndRelation": "与上一张形成动态时间差，而不是展厅布局的版本差异。",
        "evidenceLimit": "四块蓝色不等于四种仪器的科学测量输出。"
      },
      {
        "id": "between-two-trees-14",
        "title": "展陈14｜五块树皮的斜向近景",
        "imageUrl": "https://images.squarespace-cdn.com/content/v1/51a94856e4b08b27fbbeb60a/1759662313517-NRSJ8WP7F0U8151ZRRTK/925_OV_25.1.jpeg",
        "sourceUrl": "https://www.sheungyiu.com/between-two-trees-there-are-many-worlds",
        "credit": "© Sheung Yiu / 艺术家官网",
        "seen": "灯带围绕的黑色展示槽内有五块大小不同的棕褐色粗糙树皮，透视使它们从近处向远处排列。",
        "making": "将五块可见树皮碎片分离并放入有边框、带光源的水平展台；采集位置、保存处理未知。",
        "materials": "树皮状天然材料、黑色底盘与边缘灯光；树种、固定方式、材料来源未知。",
        "visualEffect": "真实表面和阴影提供影片点云无法传递的粗糙触觉线索，但观众在照片中只能视觉接近。",
        "roleAndRelation": "与下一张正面全景同为同一展台的不同角度，不是另五件作品。",
        "evidenceLimit": "未经标本来源证实，不能声称每片都来自艺术家拍摄的两棵树。"
      },
      {
        "id": "between-two-trees-15",
        "title": "展陈15｜五块树皮的正面全景",
        "imageUrl": "https://images.squarespace-cdn.com/content/v1/51a94856e4b08b27fbbeb60a/1759662312877-2UW6QOAI45Y3O7SGHMZ9/925_OV_25.jpeg",
        "sourceUrl": "https://www.sheungyiu.com/between-two-trees-there-are-many-worlds",
        "credit": "© Sheung Yiu / 艺术家官网",
        "seen": "长方形黑色托盘内五块树皮状碎片横向排成一列，边缘灯带形成高对比度亮框。",
        "making": "将自然碎片按尺寸和间距重新排布为可比较的五个对象，灯带突出外轮廓与阴影。",
        "materials": "五块树皮状物件、矩形托盘、灯带；保存材料、灯具和固定工艺未知。",
        "visualEffect": "正面视角让观众比较各片大小与裂隙，而上一张斜视角强调空间纵深。",
        "roleAndRelation": "两张图必须并读才能理解展台的观看机制；不应重复计数为十块标本。",
        "evidenceLimit": "不能推断树皮碎片被高光谱扫描或用于真实虫害鉴定。"
      }
    ],
    "exhibitionNotes": [
      "Artsi暗室照片：影片与桌面投影/书籍/透明板并置，已确认两张官网展陈图，但没有设备型号或空间尺寸。",
      "925_OV系列五张图：显示黑白森林框画、暗室投影和五块树皮状物件；官网未在图片旁逐张标出馆名、拍摄日期，不把它们擅自归为2025年波尔图展览。",
      "波尔图摄影双年展官方确认2025-05-15至06-28项目在Casa Comum展出，但不能据此反推925_OV五张一定摄于波尔图。"
    ],
    "sources": [
      {
        "kind": "artist",
        "label": "Sheung Yiu — Between Two Trees 官方项目与15张图",
        "url": "https://www.sheungyiu.com/between-two-trees-there-are-many-worlds",
        "claim": "项目起点、技术总述、图像顺序与展览名单"
      },
      {
        "kind": "institution",
        "label": "Bienal'25 Porto — 项目与展览",
        "url": "https://bienal25.bienalfotografiaporto.pt/en/projects/between-two-trees-there-are-many-worlds",
        "claim": "2025年展期、地点、视频论文"
      },
      {
        "kind": "research",
        "label": "Bark beetles as lidar targets（科学研究背景，非本作技术证明）",
        "url": "https://onlinelibrary.wiley.com/doi/10.1002/jbio.202000420",
        "claim": "昆虫激光雷达测量在科学上存在；不能据此推断艺术家采用同样仪器"
      }
    ]
  }
};
