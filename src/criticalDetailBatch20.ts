import type { CriticalProject } from './criticalDetailBatch';

/** 2026-10-10｜Sheung Yiu 逐图批评：公开图像可追溯，事实/机构/推论分层。 */
export const criticalDetailBatch20: Record<string, Record<string, CriticalProject>> = {
  "sheung-yiu": {
    "(Inter)Faces of Predictions — image-by-image / 2023–2026": {
      "title": "(Inter)Faces of Predictions（2023–2026）｜17幅公开图像与展览版本的批评审计",
      "auditedOn": "2026-10-10",
      "centralQuestion": "以同一张脸跨越面相术、颅相/相貌分类、面部识别与生成式技术，究竟在图像、材料与展陈中证明了什么？哪些只是相似的视觉语法？",
      "thesis": "本轮建立艺术家官网16项项目/出版入口的可核对总目录，集中推进(Inter)Faces of Predictions的17个可定位图像/展览视图，不冒充艺术家全部作品。面部标记、硅胶拉扯、扫描现场、网格面罩、古籍文本覆脸与展览框选都让‘脸被处理’成为可见动作；但它们不能自动证明古代相术与现代机器识别在训练数据、预测对象、准确性与社会部署上是同一机制。",
      "conceptChain": [
        "【文字概念·艺术家自述】东方面相、西方相术、现代面部识别都将脸当成可读取的符号，可能带来偏见与自动化信任。",
        "【研究方法·可核对】艺术家官网列出相术、面部识别、表型与合成脸等研究范围；Foam展出研究笔记、自拍、面部扫描设备与硅胶面模。",
        "【具体动作·画面可证】给脸画点、拉扯硅胶复制脸、站进多机位装置、把网格戴在脸上、将文字覆盖肖像、排列古籍图板。",
        "【材料技术·证据边界】硅胶面模、实验室多机位采集设备、白色网格面罩（Foam注明Gilles Mustar）、数字图像/视频和印刷档案可核对；具体算法、模型版本、数据集、误差统计未核实。",
        "【图像结构/展陈】侧脸与正脸、原脸与复制脸、有人/无人、蓝色英文与红色中文、展厅档案板与圆环/影片构成重复和差异。",
        "【观众实际看到】可见脸被标记、复制、拉扯、框选和书写；不可仅凭图像得出‘机器会预测性格’或‘两套系统技术等价’。"
      ],
      "statementOff": "遮掉说明后最有效的是02/03双手扭曲面模、05/06扫描设备有人与无人、12/13两种文字直接覆盖面孔、14/15环形物框住档案板；观众仍能识别‘分类/规训/替身/观看装置’。最依赖statement的是‘东方占卜与西方算法的历史同一性’、具体偏见发生机制、某个面罩是否由扫描数据直接生成，以及九宫格热图到底表示什么。",
      "strongest": "艺术家反复用自己的脸做材料，使不同系统在同一身体上碰撞；05/06把技术生产现场呈现出来，14/15把‘谁通过何种框架观看谁’转为观众身体的实际移动。",
      "weakest": "系列容易以网格、黑点、热图、神秘灯光和密集档案文本组成‘技术/古老知识’的统一美学，但相似视觉符号不是机制证明。真正重要的技术断点——原始输入、特征抽取、预测标签、错误与责任——仍很少在单张图像中被展示。",
      "judgment": "独立判断：作品在‘分析行为如何塑造被分析者’层面成立，在‘面相术与现代机器学习是同一种知识机制’层面需要更严格的比较。面部识别用于身份匹配，与从面孔预测性格、命运或犯罪倾向的任务必须严格区分。把所有‘读脸’都称作同一件事，会造成批评对象的概念膨胀。当前档案依据公开图像进行跨图论证，不假称这是艺术家原始展陈或摄影书的完整顺序。",
      "versionNotes": [
        "【作品清单范围】艺术家官网导航目前列出Scia-graphy、(Inter)faces of Predictions、Between Two Trees、Everything is a Projection: The Book、Everything Is A Projection、Common Objects in Context、Ground Truth: The Book、Ground Truth、Para-images、The Twinkling of An Eye、Human Audits Machine Office、I was there but you didn't see me、The Poetics of Science、Inverse Problem、Common Properties、A Cup of Dirt、The Aleph共17个入口；此外还有Hyperimage Atlas及博士论文入口。导航是项目/出版混合清单，不是独立单件全集。",
        "【本轮范围】逐图审计17幅，均对应Foam或艺术家官网可定位的公开图像；仍未覆盖Foam所有笔记页、官网所有C/O Berlin安装照及影片全部时间帧；其余项目待逐个建立图像清单。",
        "【出版版本】2026年Spector Books同名书为640页、12×16厘米；SIPF描述书页为莫比乌斯式翻转阅读。书的结构可被核对，但本轮未逐页检视，不把网上图像顺序冒充书的原始排序。",
        "【展览版本】Foam Talent 2024–25与C/O Berlin 2026的呈现媒介、场地和观众路径不同；2026年C/O Berlin展期2月7日至6月10日。官网展览照片可见档案板、蓝色环形物、肖像墙和视频，不能据此推断2024年Foam使用相同装置。",
        "【术语与出处】艺术家系列声明为作者解释；Foam与C/O Berlin为机构阐释；Musée Magazine为独立评论；本站对形式强弱的判断是批评推论。未见技术论文、原始数据集和算法评测时，均标注未知。",
        "【视觉顺序】以下01–17为本站研究排序，绝非艺术家确认的摄影书页码、视频镜头顺序或展览动线。"
      ],
      "frames": [
        {
          "title": "01｜Facial landmarks（2023）｜把面部转成坐标",
          "imageUrl": "https://a.storyblok.com/f/113697/2000x3000/19a94b1299/shooting_20230403_face-studio_023.jpeg",
          "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
          "credit": "© Sheung Yiu；Foam Talent 2024–25，具名图像",
          "visible": "亮绿色背景前，艺术家侧脸朝左，戴黑色针织帽，眉上、鼻梁、眼下、嘴角、颊部与下巴分布大小近似但并不均匀的黑点。点并非数字屏幕上浮动的HUD，而是出现在皮肤表面的标记；眼睛仍是一个具体人的眼睛。",
          "interpretation": "【艺术家自述·系列级】以自己的脸接受面相、面部识别、表型预测等不同分析制度；【Foam机构】称其扫描、筛查和分析自身面部。尚无逐点坐标和具体检测器对应表，不应把每个点当作某一模型实际输出。",
          "function": "全系列的零度参照：尚未发生明显变形，先把自然面孔改造成待测对象；随后硅胶、扫描设备和网格面具才有可对照的原型。",
          "transformation": "研究中对面部可测性的迷恋→在皮肤上人为标记→摄影让脸与数据点同时占据一张图。形式转换真实存在；但照片没有证明这些点来自实际训练或推理。",
          "withoutStatement": "可读到被标记、被测量、被准备扫描的身体；读不到面相学与机器学习之间的历史同构。",
          "relation": "与《Old and new moles》都使用黑点，但此图侧面且点相对规整；后者正面、不规则点更多，强化了‘自然痣/人工标签’的歧义。",
          "necessity": "不能用一张普通绿幕肖像代替：皮肤上的黑点把‘分析’落实为实际可见的操作；侧脸使鼻梁、下颌和耳前的立体分布成为关键。",
          "verdict": "强在动作直观、概念进入皮肤；弱在若声称这些点就是算法特征向量则证据不足。特征点、身份识别、性格预测是三种不同任务，不能因外观相似而混同。"
        },
        {
          "title": "02｜Twisted face（2023）｜作者与替身同框",
          "imageUrl": "https://a.storyblok.com/f/113697/2000x2667/098018113d/shooting_20230519__ground-truth_face-vare-studio_088.jpg",
          "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
          "credit": "© Sheung Yiu；Foam Talent 数字展",
          "visible": "画面右侧是真人戴圆框眼镜的半张脸，左侧两只手抓住粉红色硅胶面模的上下缘；面模鼻梁、眼睑和嘴唇完整却被拉扯成扁斜形状，绿色背景让二者分开。",
          "interpretation": "【艺术家自述·系列级】将自己的脸置于多种预测程序；【Foam机构】明确将该图标为被艺术家扭曲的粉色硅胶面模。无法确认该面模由哪种3D扫描、模具或算法制成。",
          "function": "从‘脸可被测量’推进到‘脸可被物理变形’：替身被拉坏，原脸却留在旁边，形成一个清晰的实验与对照。",
          "transformation": "脸的复制物→柔软硅胶面模→双手牵拉→鼻眼嘴的关系发生肉眼可见的形变。‘预测可能改变我们对人的定义’在此被做成身体动作，但不是对算法偏差的实测。",
          "withoutStatement": "能看到自我复制、可塑身份、脸的变形与本人对照；看不出哪一种预测模型造成了变形。",
          "relation": "承接Facial landmarks的面部标记；与下一张面模特写对照，这里保留作者半张真实脸，使‘谁是原件’的问题成立。",
          "necessity": "两只手和真实脸必须同框；只展示一块扭曲硅胶，会退化为普通超现实面具静物，失去作者对自己动手的关系。",
          "verdict": "视觉层面强，身体替身的动作有必要性；但‘机器学习如何扭曲人’只是类比。若将此图说成AI计算过程的可视化，属于技术名词借用。"
        },
        {
          "title": "03｜Twisted Face：双手挤压特写（2023）｜变形作为过程",
          "imageUrl": "https://a.storyblok.com/f/113697/900x1200/529c02c6e1/shooting_20230519__ground-truth_face-vare-studio_060.jpeg",
          "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
          "credit": "© Sheung Yiu；Foam 同系列另一张公开图",
          "visible": "绿色背景前，粉红面模居中，顶部一只手压向额头，底部另一只手托住下颌；右侧轮廓被挤向内侧，鼻翼和嘴角的比例发生明显变化，真人面孔退出画面。",
          "interpretation": "【Foam机构】同样标为Twisted Face。它是动作的近景证据，不等于硅胶成型的工作室过程纪录；原模具材料与复制次数仍待核。",
          "function": "将上一张的‘本人/复制脸对照’改成‘手/材料/形变’三者的因果链；动作成为画面主角。",
          "transformation": "抓握位置→软性材料受力→面孔局部扭曲→固定成可观看的摄影瞬间。此图能让观众直接追踪力从哪里来。",
          "withoutStatement": "只凭图像能判断人正在捏压一张软面具；无法知道‘西方面相学’或‘东方面相学’。",
          "relation": "与02构成同一动作的远近两种证据：02提供身份对照，03提供变形细节。不能误写成先后两次技术实验。",
          "necessity": "若删去这张，‘变形是手的作用而非软件滤镜’的证据会减弱；若删去02，失去原脸与复制脸之间的对照。",
          "verdict": "制作动作最清楚的画面之一；不过重复展出这两张时应说明二者分别承担什么，否则会变成同一概念的冗余展示。"
        },
        {
          "title": "04｜Faceless（2023）｜识别条件被抽空",
          "imageUrl": "https://a.storyblok.com/f/113697/2000x2667/9509b3e588/anonymous-copy.jpeg",
          "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
          "credit": "© Sheung Yiu；Foam 具名图像",
          "visible": "酸绿色背景中是一颗几乎纯黑的人头剪影；帽子、耳朵、眼镜框边缘和肩线尚可辨认，面部五官完全吞没在暗部，轮廓内部只留下极少反光。",
          "interpretation": "【艺术家自述·系列级】质疑从面部读取身份与命运的欲望；【Foam机构】将此图命名为Faceless。无法确认其曝光、遮光、后期阈值的具体方法。",
          "function": "给‘人脸可被读取’的系列提供反向试验：保留人存在的证据，却撤走用于面相和识别的主要细节。",
          "transformation": "可识别的身体轮廓→通过光照/影像处理形成无五官黑面→观众只能根据帽子和眼镜等外部线索猜测身份。操作方式未确认，视觉结果可确认。",
          "withoutStatement": "能读到匿名、隐藏、拒绝被辨认；无法推断面部识别系统实际识别失败，因为系统可能使用不同传感器。",
          "relation": "与01直接相反：01在脸上添加可测点，04删除可见特征；与Face Mesh对照，一个抹掉表面，一个保留表面的几何替身。",
          "necessity": "这张不能换成模糊脸的普通照片：黑面与鲜绿色背景构成极端二值对照，强化‘有轮廓而无可读特征’。",
          "verdict": "不依赖文字也能成立的图像，但批评仍要指出：让人类看不见五官≠证明机器不可识别。"
        },
        {
          "title": "05｜Scan：无人状态的CIVIT实验室（2023）",
          "imageUrl": "https://a.storyblok.com/f/113697/2000x2997/b1fbd6ff49/shooting_20230219_civit-lab-and-glass-textures_021_photographer-sheung-yiu.jpeg",
          "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
          "credit": "© Sheung Yiu；Foam 说明为Tampere University CIVIT实验室",
          "visible": "暗色室内，金属杆搭成环绕结构，多组白色相机/传感器盒固定在不同高度，竖直灯管密集发亮；中央有一块圆形站台，但此帧无人站立。",
          "interpretation": "【Foam机构】确认这是坦佩雷大学CIVIT实验室的3D扫描设备；【艺术家自述·系列级】曾接受扫描。设备型号、传感器种类、扫描输出是否直接用于其他每件作品未知。",
          "function": "从人物自拍跳到生产设施本身，让‘计算机观看’不是一个抽象名词，而是有杆件、灯、镜头、空间和站位的系统。",
          "transformation": "实验室真实设备→直接摄影→装置的环绕结构被压成密集竖线；人不在场时，机器仍占据图像中心。",
          "withoutStatement": "观众可读出影像采集、环绕测量和工业化观看；难以知道这些传感器究竟生成何种三维文件。",
          "relation": "与06有/无人形成最清楚的成对结构；和Face Mesh则是‘采集设备/抽象输出’的概念邻接，不可无证据宣称二者是同一文件的前后工序。",
          "necessity": "空场图不可被作者站在装置中的照片替代：它揭露机器的布置方式，不被人物肖像遮挡。",
          "verdict": "证据密度高，强于抽象网格装饰；但从拍到设备跳到‘揭示算法偏见’仍缺训练集、识别目标和错误输出。"
        },
        {
          "title": "06｜Scan：作者站在设备中央（2023）",
          "imageUrl": "https://a.storyblok.com/f/113697/2000x2997/72cff82dc5/shooting_20230219_civit-lab-and-glass-textures_030_photographer-sheung-yiu.jpeg",
          "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
          "credit": "© Sheung Yiu；Foam 具名图像",
          "visible": "与05相同的灯管、杆件和白色盒状设备包围一名背向摄影机站立的人；人物处在装置中心附近，身体尺度使采集装置的体量清楚可见。",
          "interpretation": "【Foam机构】说明艺术家站在扫描装置的台座中央。未见此张对应的原始扫描文件、校准图或结果对比。",
          "function": "把05中抽象的设备变成‘身体被围住’的具体关系，观众由此知道谁是测量对象。",
          "transformation": "真实人物进入设备站位→被不同角度相机/灯管围绕→展出一张关于采集现场的摄影，而非扫描输出。",
          "withoutStatement": "能读到身体在仪器中被采集或检查；读不到算法对人的性格做出了什么判断。",
          "relation": "05先看装置，06再看被装置包围的人；此顺序是本站分析顺序，不冒充艺术家摄影书原始排序。",
          "necessity": "需要人物站位才能建立‘谁在观看谁’；若只展示空场，机器可能被误认成普通摄影棚。",
          "verdict": "有效地把权力关系空间化，但‘被拍摄’与‘被算法分类’之间尚有未展示的步骤。"
        },
        {
          "title": "07｜Old and new moles（2023）｜自然痣与人工点的混合",
          "imageUrl": "https://a.storyblok.com/f/113697/2000x3000/d56c7e6208/shooting_20230403_face-studio_047.jpeg",
          "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
          "credit": "© Sheung Yiu；Foam 具名图像",
          "visible": "正面特写，黑色针织帽下的额头、鼻尖、嘴边和下巴布满形状大小不同的黑斑；眼睛直视镜头，脸上真实皮肤质地仍清晰。",
          "interpretation": "【Foam机构】命名为Old and new moles；【艺术家自述·系列级】把东方面相与西方机器面部测量的视觉语言混合。不能凭照片区分每一颗原有痣和每一处新画标记。",
          "function": "与01的较均匀测量点形成一种分类危机：所谓‘天然的征兆’与‘人为的数据标注’在同一表面无法稳定区分。",
          "transformation": "原有皮肤痕迹+人工黑点（Foam的标题与画面支持混合）→正面高解析摄影→不同来源的‘标记’被统一为可观看的斑点。",
          "withoutStatement": "能看到被涂写的脸、类似痣的点和人类判断欲望；无法读出任何预测结果。",
          "relation": "01把脸侧面转成坐标；07让坐标与‘痣’互相污染。与Between Two Charts中图表投射进一步衔接。",
          "necessity": "必须保留点的大小不齐、眉间与嘴周的密集分布，才能让痣/标注混淆；用普通面部关键点网格无法替代。",
          "verdict": "概念进入图像表面较成功；但没有展示任何预测输出，论证停在‘符号相似’而非‘机制相同’。"
        },
        {
          "title": "08｜Face Mesh（2023）｜佩戴网格并面对数字侧脸",
          "imageUrl": "https://a.storyblok.com/f/113697/900x1200/5fec4595a9/shooting_20230511__ground-truth_face-mask_030-copy.jpg",
          "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
          "credit": "© Sheung Yiu；Foam 具名图像",
          "visible": "蓝色背景下右侧真人侧脸贴着白色镂空网格面罩，左侧有一块悬浮的数字侧脸，边缘呈折线并有橙色线框；两张脸相对，中间有细小间隔。",
          "interpretation": "【Foam机构】说明真人佩戴白色网格面罩并面对自己的3D扫描像；【艺术家自述·系列级】研究面部生成、表型和识别的视觉机制。白色面罩的制作算法与左侧模型是否同源仍未知。",
          "function": "将真人皮肤、可佩戴物和屏幕/合成的数字表面压在同一画面中，展示脸可以有多个物质版本。",
          "transformation": "真人面孔→几何网格作为物件覆盖→数字化侧脸置于对面→形成两个‘计算版本’相互凝视的结构。",
          "withoutStatement": "能看出数字模型、实体面罩和真实皮肤三者不同；不能知道它们是否来自同一套计算流水线。",
          "relation": "对照05/06的采集设施：此图看起来像‘输出’，但必须注明中间数据链未核实；与09的独立面罩静物又构成佩戴/陈列对照。",
          "necessity": "两个相向的侧脸和实体网格必须同时存在；仅有一张3D网格渲染图不能让‘人面对自己的替身’成立。",
          "verdict": "构图与形式转换强；‘计算机理解人’仍是过大命题。作品没有展示分类结果、置信度或错误率。"
        },
        {
          "title": "09｜Ancient Prediction（2023）｜网格面罩成为祭祀物",
          "imageUrl": "https://a.storyblok.com/f/113697/2000x2666/d37edf8eab/starface-copy.jpg",
          "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
          "credit": "© Sheung Yiu；Foam 标注面罩由 Gilles Mustar 制作",
          "visible": "深黑背景中，一只发亮的白色网格脸罩摆在金色装饰底座上；底座产生星芒般强反光，面罩内部空无一人，少量红点散布于前景。",
          "interpretation": "【Foam机构】标注‘white mesh face mask (By Gilles Mustar)’；【艺术家自述·系列级】比较占卜与科学面部分析。具体面罩制造工艺、底座来源与红点功能未知。",
          "function": "把08贴在人脸上的网格移到独立底座上：从工具/覆盖物转为仿佛值得崇拜的物件，直接制造‘科技占卜’的视觉修辞。",
          "transformation": "实体网格面罩→从身体剥离→放置于金色底座并强烈照明→生成类似圣物或未来文物的观看方式。",
          "withoutStatement": "可读到仪式性、神秘科技、面具崇拜；无法知道面罩与真实算法是否有关。",
          "relation": "08面罩依附活人，09面罩独立成物；这两张之间的转换比重复两个面罩近景更有逻辑。",
          "necessity": "必须看见金色底座与白网格的冲突；换成一张白面具产品照，宗教式陈列语法就会消失。",
          "verdict": "形式转译成立但较依赖现成‘神秘高科技’视觉套路；若没有具体历史材料的对应，‘古代预测’更像美学暗示而非研究结论。"
        },
        {
          "title": "10｜研究笔记展开页：九宫格热图",
          "imageUrl": "https://a.storyblok.com/f/113697/1270x925/e12b30fec6/notebook-sheung-yiu-21.jpg",
          "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
          "credit": "© Sheung Yiu；Foam 标为研究笔记页面",
          "visible": "摊开的白色厚笔记本左页几乎空白，右页贴有三行三列共九张蓝绿黄热图，部分图块中央出现类似人脸的亮斑或边缘轮廓，周围留白很多。",
          "interpretation": "【Foam机构】确认是项目研究笔记的书页图像；未说明九张图由哪种模型、数据集或特征可视化方法产生，也未提供图注中的具体指标。",
          "function": "从最终人像跳到研究中间物：让观众看见‘图像被排列成比较对象’的过程，但这不是模型正确性的证明。",
          "transformation": "未知来源的九张可视化图→被打印/贴入笔记本→摄影为书页图像→从计算界面转化为人工研究编排。",
          "withoutStatement": "能识别实验图表/热图/人脸轮廓；无法判定它们代表注意力、温度、深度还是某种特征强度。",
          "relation": "与01的黑点形成‘面部标注/可视化输出’的松散呼应；与Scan的设备形成‘采集/显示’的可能关系，但不是已确认的一条数据链。",
          "necessity": "九宫格的重复使‘比较’可见；若只选一张彩色热图，就看不到它作为分类/筛选资料的用途。",
          "verdict": "研究痕迹真实进入展览材料；最弱的是缺少每格的输入、输出和图例，技术美学可能掩盖证据空缺。"
        },
        {
          "title": "11｜Prediction Regime XIII（2024）｜密集字典包围童年肖像",
          "imageUrl": "https://images.squarespace-cdn.com/content/v1/51a94856e4b08b27fbbeb60a/1758061037988-FNFC52W0AVVD9BXIPIWC/Prediction%2BRegime%2BXIII%2B%282024%29.jpeg",
          "sourceUrl": "https://www.sheungyiu.com/interfaces-of-predictions",
          "credit": "© Sheung Yiu；艺术家官网具名图版",
          "visible": "画面几乎被黑白与红色的密集汉字栏目填满，排版像古旧术数书或索引；正中一张穿白衬衫的儿童肖像被留出小矩形窗口，周围文字与人物比例悬殊。",
          "interpretation": "【艺术家自述·系列级】研究面相预测制度及其跨文化重复；【独立观察】文字框架包围童年肖像的效果直接可见。儿童身份、文字具体出处及图像权属没有逐项一手注释，不能自行断言。",
          "function": "从作者成人身体推进到童年肖像与庞大分类文本的关系：一个人被包围在远大于自身的解释系统中。",
          "transformation": "既有文字图像/排版与儿童照片→平面并置→缩小人物尺度、扩大符号环境→‘先有制度，后有个体’的观看结构。",
          "withoutStatement": "能读出占卜/古书/分类与个人肖像之间的压迫感；不知所引文字是否真实指向这名儿童。",
          "relation": "与12/13把文本直接压在成人面孔上的肖像形成递进：11是‘人被制度包围’，12/13是‘制度贴上脸’。",
          "necessity": "不能换成任何一张单纯儿童肖像；此图关键在文本密度与极小肖像窗口之间的尺寸悬殊。",
          "verdict": "图像构图有力量；但如果文字出处未核实，密集的历史符号也可能成为‘古老知识’的权威外观，存在研究与视觉之间的断裂。"
        },
        {
          "title": "12｜Rules to Judge Eyes I（2024）｜英文相貌判断覆盖蓝色人像",
          "imageUrl": "https://images.squarespace-cdn.com/content/v1/51a94856e4b08b27fbbeb60a/1758061034231-BHWHBLS5U8WAU4TV8FEY/Rules%2Bto%2BJudge%2BEyes%2BI%282024%29.jpeg",
          "sourceUrl": "https://www.sheungyiu.com/interfaces-of-predictions",
          "credit": "© Sheung Yiu；艺术家官网具名图版",
          "visible": "深蓝人像中一只眼被横向强光照亮；英文文字分栏漂浮在面部与背景上，能辨认出‘eyes’及人格判断类句式，局部文字与眼睛互相遮挡。",
          "interpretation": "【艺术家自述·系列级】把西方相术与当代算法预测并置；【独立观察】图像实际使用了英文关于眼睛性格的判断句，但未逐条核实文字原典。",
          "function": "把‘如何从眼睛判断人’的规则从旁白移到人像表面，使语言真的成为观看障碍。",
          "transformation": "人像摄影→蓝色低照度处理→英文规则叠印→观众在读文字与看眼睛之间切换。",
          "withoutStatement": "仍能直接看到文字在判断眼睛；不一定能判断是19世纪相术还是现代AI输出。",
          "relation": "与13红色中文文本版本形成跨语言/跨传统的可见并列；但两者是否真的具有相同社会机制需要另外论证。",
          "necessity": "照亮的单只眼与围绕它的文字必须同时出现，才能让‘读眼睛’成为实际观看动作。",
          "verdict": "概念进入版面结构很强；比较的弱点在于相似排版不等于不同预测技术在数据、权力与准确率上等价。"
        },
        {
          "title": "13｜Rules to Judge Eyes II（2024）｜中文规则覆盖红色人像",
          "imageUrl": "https://images.squarespace-cdn.com/content/v1/51a94856e4b08b27fbbeb60a/1758061039626-LYIPQ83AFSB7Z3ZNHPIJ/Rules%2Bto%2BJudge%2BEyes%2BII%2B%282024%29.jpeg",
          "sourceUrl": "https://www.sheungyiu.com/interfaces-of-predictions",
          "credit": "© Sheung Yiu；艺术家官网具名图版",
          "visible": "同一类半身肖像被红光染色；竖排繁体中文条文从头顶延伸至衣服，眼睛和鼻梁被细密文字覆盖，人物面部几乎成为可供书写的页面。",
          "interpretation": "【艺术家自述·系列级】使用东方面相学视觉语言与西方识别语言交叉；【独立观察】竖排中文与红光共同制造古籍/占卜的视觉联想，但具体引文仍需逐字核对。",
          "function": "与12构成镜像式二联：不是换掉被研究的人，而是换掉读人的制度与文字界面。",
          "transformation": "同类型人像→红光与竖排文字覆盖→观众被迫透过语言阅读脸；图像的媒介从肖像转向文字—身体混合页面。",
          "withoutStatement": "可读出脸与汉字的重叠、类似命理文本的气氛；不能直接推出面相术实际预测了什么。",
          "relation": "12是英文、横向、蓝色；13是中文、竖向、红色。形式对照清晰，但可能把‘西方/东方’简化成色彩与书写方向的二元表演。",
          "necessity": "不可用任意红色人像替代：中文竖排条文穿过眼睛，是作品作为‘阅读面孔’的具体动作。",
          "verdict": "视觉系统高度统一，且不靠statement也能感知‘文本支配脸’；最弱处是两套传统可能被风格化成对称图案，复杂历史差异被压平。"
        },
        {
          "title": "14｜2026 C/O Berlin 展厅：双档案板与蓝色圆环",
          "imageUrl": "https://images.squarespace-cdn.com/content/v1/51a94856e4b08b27fbbeb60a/1773257241618-SAO2QLTNLAFPMW5RSLY9/shooting_20260206_CO%2BBerlin%2Bexhibition_008.jpg",
          "sourceUrl": "https://www.sheungyiu.com/interfaces-of-predictions",
          "credit": "© Sheung Yiu；艺术家官网2026展览记录",
          "visible": "黑色展厅内，左右各有一面装框图像板，密集排列古旧面相图、轮廓、肖像和分类资料；中央是一只竖立的深蓝色高光椭圆环，内部空洞可以看见后方。",
          "interpretation": "【C/O Berlin机构】称展览连接东方面相、西方相术与现代面部识别；【独立观察】圆环位于两面历史图像板之间，但该雕塑的官方标题、材料与制作过程未在所核对页面逐项确认。",
          "function": "把两类分类档案变成空间中的两侧，把空洞/镜面形态放在中间，观众必须通过一个没有面孔的框架看另一边。",
          "transformation": "历史图像资料→两块密集编排板；独立环形物→空间中心；三者构成‘分类—观看装置—分类’的路径。",
          "withoutStatement": "能读到档案比较与被空心物件引导的观看；看不出精确的算法或任何性能差异。",
          "relation": "与15环形物的近景构成‘整体位置/观看通道’对照；与16三幅人像墙形成研究材料与肖像结果的空间分区。",
          "necessity": "这一视图必须同时看到两块档案板和中央空环；只看雕塑特写无法证明展览如何组织历史比较。",
          "verdict": "展陈转换强，观众身体进入比较结构；但若将环形循环直接等同机器学习反馈回路，属于比喻而非已验证的技术机制。"
        },
        {
          "title": "15｜2026 C/O Berlin：通过圆环看历史图板",
          "imageUrl": "https://images.squarespace-cdn.com/content/v1/51a94856e4b08b27fbbeb60a/1773257308083-F7JEMASLTTGNSNSIBKFZ/shooting_20260206_CO%2BBerlin%2Bexhibition_042.jpg",
          "sourceUrl": "https://www.sheungyiu.com/interfaces-of-predictions",
          "credit": "© Sheung Yiu；艺术家官网2026展览记录",
          "visible": "光滑蓝色椭圆环占据画面四周，环孔中央正好框住一块由剪影、脸部图表和古老文字组成的历史资料板；环的内缘有复杂反光。",
          "interpretation": "【独立观察】从这个机位，环成为一个取景器。其具体材料、是否镜面金属/涂层树脂等未核实；不能凭反光推断工艺。",
          "function": "把14的中央雕塑从陈列物变成主动组织视线的‘观看机器’；这张比14更能验证展陈动作。",
          "transformation": "观众移动到特定视角→通过环孔观察图板→本来并列的历史材料被一个新框架二次选择。",
          "withoutStatement": "可见取景、框选、反射与档案图像；不需要文字就能感到观看不是中性的。",
          "relation": "14说明物件在展厅中的位置；15展示它如何改变某一条视线。两张不是重复，而是从空间总图推进到身体观看。",
          "necessity": "只有这个穿孔视角才能证明‘环是取景装置’；随便一张展览全景不足以显示被框住的资料板。",
          "verdict": "本轮展陈图里最成功的单张之一。批评边界：视觉框选机制成立，环形结构象征‘技术循环’的哲学解释仍是策展隐喻。"
        },
        {
          "title": "16｜2026 C/O Berlin：三幅并置肖像墙",
          "imageUrl": "https://images.squarespace-cdn.com/content/v1/51a94856e4b08b27fbbeb60a/1773257232517-HEHTXEXQ7JWRXC202Z2I/shooting_20260206_CO%2BBerlin%2Bexhibition_001.jpg",
          "sourceUrl": "https://www.sheungyiu.com/interfaces-of-predictions",
          "credit": "© Sheung Yiu；艺术家官网2026展览记录",
          "visible": "黑墙上三幅等距装框图像：左边红色人像覆有竖排中文，中央一张人像被绿色光照亮且文字较少，右边深色人像覆有红色英文句子。三个‘被阅读的脸’构成一个展墙句子。",
          "interpretation": "【艺术家自述·系列级】让不同预测制度在同一张脸上交错；【独立观察】展墙通过文字覆盖/不覆盖的交替制造比较，不等于已核实三幅的精确标题与先后制作顺序。",
          "function": "把12/13在单幅中完成的‘文字压脸’放进实际展墙节奏：左右是规则，中间是面孔，观看者自己成为比较者。",
          "transformation": "单张肖像→按颜色、文字密度和版面逻辑并列→展览空间制造对照关系。",
          "withoutStatement": "能读到中文/英文/绿光三种观看方式；不知道各张使用的具体分类数据或预测结论。",
          "relation": "承接12与13；与14的档案板构成‘历史研究图板/当代自拍实验’两种材料层。",
          "necessity": "三张同时入镜，才能检验‘两端的文字如何挤压中间的人脸’；孤立其中一张会丢失空间对照。",
          "verdict": "形式比较清晰，展示设计强化了作品；但东西方文化的差异被红/绿、汉字/英文的形式二分简化，需要更多具体案例来抵抗符号化。"
        },
        {
          "title": "17｜2026 C/O Berlin：影片与档案板的同室展陈",
          "imageUrl": "https://images.squarespace-cdn.com/content/v1/51a94856e4b08b27fbbeb60a/1773257286185-39HLRG86N9ZWDM8EVOB9/shooting_20260206_CO%2BBerlin%2Bexhibition_031.jpg",
          "sourceUrl": "https://www.sheungyiu.com/interfaces-of-predictions",
          "credit": "© Sheung Yiu；艺术家官网2026展览记录",
          "visible": "左侧悬挂大屏播放一张被几何片状结构切割的脸，字幕可辨‘Modeled after the human brains neural network’；右侧墙上两块档案图板被小范围照亮，观众必须转头才能同时看影片与资料。",
          "interpretation": "【C/O Berlin机构】将项目界定为跨摄影、档案与影像的研究；【Musée独立评论】讨论视频《It's a Face-Eat-Face World》的历史与算法类比。字幕属于影片陈述，不应作为神经网络具体架构的制作证据。",
          "function": "把历史图表、数字动画/影像与观众的身体转向放进一个空间；这比只在statement里并列‘历史与AI’更进一步。",
          "transformation": "研究图像→实体档案板；动态数字脸→大屏播放；并置让观众反复往返，而不是观看一条单向历史进步叙事。",
          "withoutStatement": "仍可见历史资料与被数字切割的面孔之间的视觉联系；无法从字幕推出特定模型的神经元结构。",
          "relation": "与14的档案板全景、16的肖像墙互补：三者分别是资料/静态肖像/动态屏幕的展示逻辑。",
          "necessity": "必须同时看见屏幕与档案板，才能证明不同媒介在现场构成对话；单独截一帧影片无法验证空间关系。",
          "verdict": "展陈层面的概念转换较强；理论风险是‘神经网络像人脑’这种常见类比被视觉化后显得比实际技术证据更坚实。"
        }
      ],
      "sources": [
        {
          "kind": "artist",
          "label": "Sheung Yiu｜(Inter)Faces of Predictions 官方项目与2026展览图",
          "url": "https://www.sheungyiu.com/interfaces-of-predictions",
          "note": "系列自述、项目概念、具名2024图版与2026展览摄影；并未披露逐件模型参数。"
        },
        {
          "kind": "institution",
          "label": "Foam Talent Digital｜逐图标题、面模、CIVIT实验室、研究笔记",
          "url": "https://www.foam.org/talent-2024/artist/sheung-yiu",
          "note": "可核实2023年各具名作品与图像说明；图像说明不等于每项技术的详细实验记录。"
        },
        {
          "kind": "institution",
          "label": "C/O Berlin｜2026展览与策展说明",
          "url": "https://co-berlin.org/en/program/exhibitions/sheung-yiu",
          "note": "2026-02-07至2026-06-10，确认展览机构、研究主题及Megan Williams的理论语境。"
        },
        {
          "kind": "independent",
          "label": "Devon Carter｜Musée Magazine评论",
          "url": "https://museemagazine.com/culture/2026/3/12/sheung-yiu-interfaces-of-predictions-co-berlin",
          "note": "2026年独立评论，提及视频、循环观看与历史图表；其比喻性解释不当作制作事实。"
        },
        {
          "kind": "institution",
          "label": "Singapore International Photography Festival｜同名摄影书介绍",
          "url": "https://sipf.sg/interfaces-of-predictions/",
          "note": "说明莫比乌斯翻页结构及2026年新加坡展期；展览尚未开始时不冒充现场核验。"
        },
        {
          "kind": "artist",
          "label": "Sheung Yiu｜艺术家项目总目录",
          "url": "https://www.sheungyiu.com/",
          "note": "导航列出17个项目/出版入口；本轮清单不是作品全集。"
        },
        {
          "kind": "institution",
          "label": "Perimeter Books｜Spector Books出版规格",
          "url": "https://www.perimeterbooks.com/collections/spector-books/products/sheung-yiu-interfaces-of-predictions",
          "note": "640页、12×16厘米；尚未完成逐页研究。"
        }
      ]
    }
  }
};
