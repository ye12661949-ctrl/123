import type { ArtistArchive } from './archiveData';
/** 2026-10-10: Sheung Yiu — primary-source production audit, image-by-image. */
export const archiveBatch1011: Record<string, ArtistArchive> = {
  "photo-sheung-yiu": {
    "artistId": "photo-sheung-yiu",
    "projectCoverage": "2026-10-10｜(Inter)Faces of Predictions：摄影标记、CIVIT扫描、硅胶翻模、网格面罩、历史笔记、数字视频及2026展陈",
    "imageCoverage": "13张具名图版或可溯源展陈图；制作链按单件/系列/展览三级证据区分",
    "note": "【制作审计】Foam提供2023具名图与CIVIT实验室、硅胶面模、Gilles Mustar网格面罩的具体说明；AV-arkki登记11分钟视频及真实创作分工；C/O Berlin提供2026书法纸、石刻字、反光材料和环形动线的展览级资料。严禁把照片里的三角网格、颜料点、硅胶翻模误称为已经证实的某种算法输出；3D采集、网格制作、数字动画之间的文件传递关系仍需逐件核实。所有图像为来源站外链，可能受原站加载限制。",
    "projects": [
      {
        "title": "Facial landmarks｜面部点位侧像",
        "cluster": "身体标记→肖像取景→点位视觉化",
        "period": "2023",
        "summary": "绿背景前，艺术家戴黑帽侧脸朝左，额头、鼻翼、唇周、下颌及脸颊有大小不同的黑点；点位覆盖面部特征但没有编号和连线。",
        "actions": [
          "【可见】黑点分布在真实皮肤表面，脸的连续轮廓被切成离散标记；此图本身不是机器输出的可读坐标表。",
          "【已证实动作】Foam将其登记为2023年Facial landmarks，说明作者把自己的脸拿来扫描、筛选、分析；摄影呈现经过标点的侧面肖像。具体点由手绘还是贴附、按何种标准布置未说明。",
          "【材料/设备】黑色标记、绿色背景、肖像摄影可见；标记颜料、相机/镜头、布光、软件、打印尺寸、版数均未查到。",
          "【视觉转译】将可供面相判断的五官变成被定位的点，面孔不再只承担肖像身份，也承担可量化对象的外观。",
          "【系列位置】与Old and new moles的散点正面像比较，可见点位从相对整齐的定位语汇转向更不规则的痣相符号；与Scan的真实采集设备形成标记/采集之别。",
          "【待核】Foam没有公开点位坐标、使用的landmark模型或算法输出文件；不得把照片上的黑点称为某模型的真实预测结果。"
        ],
        "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
        "images": [
          {
            "url": "https://a.storyblok.com/f/113697/2000x3000/19a94b1299/shooting_20230403_face-studio_023.jpeg",
            "title": "Facial landmarks (2023)｜黑点侧面肖像",
            "credit": "© Sheung Yiu；来源页面署名以原站为准",
            "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
            "sourceLabel": "Foam Talent 2024–25｜具名作品图版"
          }
        ],
        "relations": []
      },
      {
        "title": "Scan I｜CIVIT实验室空扫描架",
        "cluster": "采集设备→研究现场→图像档案",
        "period": "2023",
        "summary": "暗室里竖直发光灯条围绕圆形台面，多台白色盒形摄影/采集设备安装在金属框架上，中央无人。",
        "actions": [
          "【可见】多机位装置、金属支架、线缆、灯条和圆形台面清晰；并非只有一个抽象的3D模型图。",
          "【来源确认】Foam将图注明确写为Tampere University的CIVIT lab中的3D扫描装置，作品名Scan (2023)。",
          "【实际动作】作者到实验室记录用于3D采集的设备，先拍摄空场地，使采集条件本身成为一张作品图。",
          "【设备】多台可见摄影/传感器单元、照明灯条、金属框架与旋转/站立台面；无法从图确认设备品牌、是否同步快门、传感器型号、扫描软件或深度计算方案。",
          "【视觉转换】观众看到包围式机位而非算法代码；技术从幕后进入前景，空间结构解释多视角采集的物理前提。",
          "【图间关系】与下一张作者站在装置中央的Scan II构成空设备/有人体的前后对照；不能证明空机位图就是3D扫描的某个输出阶段。",
          "【待核】CIVIT具体采集协议、相机数量、光源参数、标定、重建网格、精度、输出格式、后期软件均未知。"
        ],
        "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
        "images": [
          {
            "url": "https://a.storyblok.com/f/113697/2000x2997/b1fbd6ff49/shooting_20230219_civit-lab-and-glass-textures_021_photographer-sheung-yiu.jpeg",
            "title": "Scan (2023)｜CIVIT空设备",
            "credit": "© Sheung Yiu；来源页面署名以原站为准",
            "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
            "sourceLabel": "Foam Talent 2024–25｜具名作品图版"
          }
        ],
        "relations": []
      },
      {
        "title": "Scan II｜作者站入CIVIT采集架",
        "cluster": "真人进入采集系统",
        "period": "2023",
        "summary": "艺术家穿深色上衣站在多台相机/传感器与竖灯条围成的区域中；人体被金属支架遮挡，画面仍以机器为主体。",
        "actions": [
          "【可见】同一类多机位采集架内出现人体，人物被照明设备和金属横杆分割。",
          "【已证实】Foam明确称此图为作者站在Tampere University CIVIT实验室3D扫描设备中央的Scan (2023)。",
          "【制作动作】身体进入扫描环境；现场照片把被采集者与设备同时保留。可确认进行扫描相关的现场布置，不能仅凭静帧证明具体3D数据成功生成。",
          "【材料/设备】多相机/传感器、灯条、圆台、金属架可见；相机型号、快门同步方式、重建算法、计算硬件未公布。",
          "【动作→视觉】身体成为采集系统中心，设备的体量遮蔽肖像，让人脸被测量的条件成为主角。",
          "【系列作用】与Scan I构成明确的实验场景对照，并为Face Mesh、2025视频中三维面孔的存在提供背景，但无法证明这些后续作品都由这一次采集直接导出。",
          "【待核】扫描结果的点云/网格是否进入后续某张图、拓扑修补、纹理映射、软件与设备参数均待艺术家核实。"
        ],
        "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
        "images": [
          {
            "url": "https://a.storyblok.com/f/113697/2000x2997/72cff82dc5/shooting_20230219_civit-lab-and-glass-textures_030_photographer-sheung-yiu.jpeg",
            "title": "Scan (2023)｜作者站在采集架内",
            "credit": "© Sheung Yiu；来源页面署名以原站为准",
            "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
            "sourceLabel": "Foam Talent 2024–25｜具名作品图版"
          }
        ],
        "relations": []
      },
      {
        "title": "Twisted face｜粉色硅胶面模与真人并置",
        "cluster": "柔性面模→手部变形→摄影",
        "period": "2023",
        "summary": "绿背景前，作者右半张真实面孔与手中被拉伸的粉色面模并列；硅胶面模的眼、鼻、口因受力而变形。",
        "actions": [
          "【可见】粉红色柔性面模被两只手拉住，真人面孔仍保留眼镜和皮肤细节，真假面孔处在同一拍摄空间。",
          "【机构已确认】Foam明确称其为艺术家面部的pink silicone cast，作品Twisted face (2023)；因此可确认材料类别是硅胶面部翻模。",
          "【动作】先获得面部硅胶翻模，再由双手拉伸、扭转并与真人并置拍摄；翻模制作是否由作者本人完成、是否来自3D扫描/实体模具仍未知。",
          "【材料/设备】粉色硅胶面模、摄影棚绿背景、摄影器材；硅胶型号、模具制作方式、补光、相机、印相工艺与尺寸均未知。",
          "【动作→视觉】手部施力造成面容的物理畸变，观众无需了解软件即可看见‘可变形的脸’与原脸之间的距离。",
          "【系列功能】与Face Mesh的几何网格、Scan的机器采集形成软物质/数字表面/硬设备三种不同的面部转译。",
          "【待核】不要把粉色面模称为AI生成或3D打印；Foam只证实硅胶翻模，没有披露模具和软件。"
        ],
        "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
        "images": [
          {
            "url": "https://a.storyblok.com/f/113697/2000x2667/098018113d/shooting_20230519__ground-truth_face-vare-studio_088.jpg",
            "title": "Twisted face (2023)｜真人与被扭曲面模",
            "credit": "© Sheung Yiu；来源页面署名以原站为准",
            "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
            "sourceLabel": "Foam Talent 2024–25｜具名作品图版"
          }
        ],
        "relations": []
      },
      {
        "title": "Twisted Face｜双手直接挤压硅胶面模",
        "cluster": "手工动作→形变特写",
        "period": "2023",
        "summary": "绿色背景中，双手上下挤压一张粉色面模，眼窝、鼻梁和嘴部发生拉扯，真人面孔退出画面。",
        "actions": [
          "【可见】双手抓住面模上沿与下缘，受力方向使额头、鼻和嘴的比例变形。",
          "【Foam登记】Twisted Face (2023)另一张具名图版，说明同一硅胶物体可由不同手势产生不同形态。",
          "【实际动作】手指挤压、扭转面模并重新摄影；无法从单帧断言使用多张合成或某种变形软件。",
          "【材料】粉色硅胶面模、绿色背景；具体摄影设备、相纸、输出规格未公开。",
          "【转换】第一张是真人/替身并置，第二张把制作动作本身变成主体；图像中的畸变来自可见的物理受力。",
          "【系列关系】与前张构成并置/独立物体的剪辑递进；不能用普通面具照片替换，因为必须看到手势施力。",
          "【待核】硅胶厚度、浇铸/翻模流程、表面涂层、后期修饰均未知。"
        ],
        "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
        "images": [
          {
            "url": "https://a.storyblok.com/f/113697/900x1200/529c02c6e1/shooting_20230519__ground-truth_face-vare-studio_060.jpeg",
            "title": "Twisted Face (2023)｜硅胶受力特写",
            "credit": "© Sheung Yiu；来源页面署名以原站为准",
            "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
            "sourceLabel": "Foam Talent 2024–25｜具名作品图版"
          }
        ],
        "relations": []
      },
      {
        "title": "Old and new moles｜黑色颜料点的正面像",
        "cluster": "身体涂绘→痣相标记→正面肖像",
        "period": "2023",
        "summary": "作者正面直视镜头，额头、鼻、眼周、双颊与下巴分布形状不规则的黑色涂点，部分有明显涂抹边缘。",
        "actions": [
          "【Foam具名图注】明确描述face marked by black paint dots of different shapes and sizes，标题Old and new moles (2023)。这是黑色颜料点，而非天然痣的全部可核记录。",
          "【实际动作】在脸上施加大小不同的黑色涂点并进行正面拍摄；颜料由谁涂、哪些点代表原有痣/新增痣，未见逐点说明。",
          "【材料/设备】可确认黑色颜料、真实皮肤、正面肖像；颜料配方、皮肤标注图、相机、灯光、输出尺寸均未知。",
          "【转换】涂绘使原本可能被视为生理细节的‘痣’变成可人工增删的符号，位置和数量取代传统肖像表情成为观看重点。",
          "【图间关系】与Facial landmarks同样在皮肤标点，但这里的形状更不规则；与研究笔记中的旧图形成身体试验/历史文献的对应。",
          "【系列作用】把痣相知识研究变成可见的面部制作动作；不等于艺术家使用了真实面相算法或证实某个命运预测。",
          "【待核】单个痣的历史出处、面相术分类、涂绘顺序和是否进行后期点位增删均未知。"
        ],
        "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
        "images": [
          {
            "url": "https://a.storyblok.com/f/113697/2000x3000/d56c7e6208/shooting_20230403_face-studio_047.jpeg",
            "title": "Old and new moles (2023)｜黑色颜料点正面像",
            "credit": "© Sheung Yiu；来源页面署名以原站为准",
            "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
            "sourceLabel": "Foam Talent 2024–25｜具名作品图版"
          }
        ],
        "relations": []
      },
      {
        "title": "Faceless｜绿底黑色剪影",
        "cluster": "曝光/遮挡→脸部信息消失",
        "period": "2023",
        "summary": "亮绿色背景前，一张戴眼镜的人像只剩黑色头肩轮廓；眼镜镜腿边缘仍隐约可辨，脸部细节几乎消失。",
        "actions": [
          "【Foam登记】Faceless (2023)，图注称仅显示面部轮廓的自画像。",
          "【可见动作结果】人像以强烈的亮背景/暗主体关系呈现，观看者失去可用于辨认表情和五官的面部纹理。",
          "【材料/设备】背景和眼镜可见；究竟通过逆光拍摄、曝光控制、数字遮罩还是多种方式实现，原始来源未说明。",
          "【制作链可核边界】可以确认最终图像呈现脸部细节被消除的结果，不能从结果倒推具体软件操作或遮罩参数。",
          "【系列作用】与Facial landmarks及Old and new moles的密集标记相反：前者过度提供分类标记，此图删除可被分类的视觉信息。",
          "【图间关系】与Face Mesh中的结构网格构成‘无纹理/有几何’的比较。",
          "【待核】照明位置、相机参数、是否数字抠像、输出材料、尺寸和版数未知。"
        ],
        "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
        "images": [
          {
            "url": "https://a.storyblok.com/f/113697/2000x2667/9509b3e588/anonymous-copy.jpeg",
            "title": "Faceless (2023)｜黑色轮廓与绿底",
            "credit": "© Sheung Yiu；来源页面署名以原站为准",
            "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
            "sourceLabel": "Foam Talent 2024–25｜具名作品图版"
          }
        ],
        "relations": []
      },
      {
        "title": "Face Mesh｜实体网格与数字面片相向",
        "cluster": "三维形态→面部网格→摆拍",
        "period": "2023",
        "summary": "蓝色背景前，艺术家侧脸戴白色网格面罩，与左侧一片棕橙色数字脸部侧面相对；数字脸边缘呈锯齿，内部有橙色三角网格。",
        "actions": [
          "【Foam图注】Face Mesh (2023)，描述作者戴白色mesh face mask、面对自己脸的3D scan；同一展页另注明面罩由Gilles Mustar制作。",
          "【实际动作】让实体网格面罩贴合真人脸部，同时把数字三维面部图形放在同一视觉平面进行比较；数码面片与真人是否现场同拍或后期合成未公开。",
          "【材料/技术】白色实体网格面罩、数字三维面部表示、摄影；未证实面罩是3D打印，也未证实数字面片具体由CIVIT那次扫描生成。",
          "【视觉转换】面部的连续皮肤被转换成可见网格，观众同时看到实体几何线条与屏幕/合成三角面。",
          "【系列作用】将Scan的采集装置转到可见的模型表面；与Twisted face的硅胶变形对照，网格强调拓扑，硅胶强调受力。",
          "【制作归属】Foam注明面罩by Gilles Mustar，不能把面罩设计或制造全部归功于Sheung Yiu。",
          "【待核】扫描数据、网格生成算法、面数、打印/切割材质、建模软件、后期合成、输出尺寸均未知。"
        ],
        "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
        "images": [
          {
            "url": "https://a.storyblok.com/f/113697/900x1200/5fec4595a9/shooting_20230511__ground-truth_face-mask_030-copy.jpg",
            "title": "Face Mesh (2023)｜实体网格与数字脸部",
            "credit": "© Sheung Yiu；来源页面署名以原站为准",
            "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
            "sourceLabel": "Foam Talent 2024–25｜具名作品图版"
          }
        ],
        "relations": []
      },
      {
        "title": "Ancient Prediction｜Gilles Mustar网格面罩与金色基座",
        "cluster": "道具制作→物件摄影→象征性陈列",
        "period": "2023",
        "summary": "黑背景中，一只白色线状面罩置于闪耀的金色基座上，面罩网孔呈不规则曲线，周围出现星芒般反射点。",
        "actions": [
          "【Foam图注】Ancient Prediction (2023)，明确称white mesh face mask (By Gilles Mustar) on a golden pedestal。",
          "【制作动作】将由Gilles Mustar制作的网格面罩置于金色底座，在暗背景与高反光条件下摄影；金色基座具体是金属、塑料还是其他材料未知。",
          "【材料/设备】白色网格面罩、金色基座、暗背景、反光/星芒效果可见；光源数量、滤镜、后期软件、基座材质均未公布。",
          "【视觉转换】同一几何面罩从Face Mesh中的佩戴工具变成陈列的准仪式物，底座和星芒将技术对象视觉上圣物化。",
          "【系列关系】与Face Mesh形成‘贴脸测量/独立陈列’的功能变化；与2026展览的反光环形物形成材料表面上的呼应。",
          "【制作归属】面罩明确署名Gilles Mustar，不能误写为Sheung Yiu独立制作。",
          "【待核】面罩尺寸、工艺、底座尺寸、光学星芒来自滤镜还是后期均未知。"
        ],
        "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
        "images": [
          {
            "url": "https://a.storyblok.com/f/113697/2000x2666/d37edf8eab/starface-copy.jpg",
            "title": "Ancient Prediction (2023)｜网格面罩与金色基座",
            "credit": "© Sheung Yiu；来源页面署名以原站为准",
            "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
            "sourceLabel": "Foam Talent 2024–25｜具名作品图版"
          }
        ],
        "relations": []
      },
      {
        "title": "研究笔记图版｜双侧脸旧插图的再编排",
        "cluster": "史料选择→扫描/复制→书页编辑",
        "period": "2023–2024（研究笔记，单页未具名）",
        "summary": "打开的笔记本右页粘贴/印有一幅黄褐色双侧脸历史插图，头部分区可读EARTH/HELL与DIVINE/HUMAN/ANIMAL，左页几乎空白。",
        "actions": [
          "【Foam说明】作品包含大量visual references的研究笔记；本图由Foam标为研究笔记扫描页，未赋予独立作品名。",
          "【实际动作可见】选择旧图、缩放/复制并置入白色书页，保留大幅空白，让两张相似侧脸的分类文字成为唯一阅读对象。",
          "【材料/技术】可确认最终以书页/扫描图形式呈现；旧插图的原始出版物、复印/打印工艺、装订、页面尺寸均未知。",
          "【视觉转换】将历史面相或颅相分类图从原始语境移入作者的视觉档案，制造图像与空白的比例关系。",
          "【系列功能】为Facial landmarks的点位肖像提供历史比较对象；并非证明古代分类与现代人脸识别采用同一数学方法。",
          "【图间关系】与另一笔记图版的面部假体/眼镜比较形成‘分类图表/面部装置’的档案跨度。",
          "【待核】不可把EARTH/HELL等字样的出处与年份从画面猜成事实；没有逐页参考文献不能核对原始文献。"
        ],
        "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
        "images": [
          {
            "url": "https://a.storyblok.com/f/113697/1270x925/3f0ef675d5/notebook-sheung-yiu-2.jpg",
            "title": "研究笔记｜双侧脸历史图版",
            "credit": "© Sheung Yiu；来源页面署名以原站为准",
            "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
            "sourceLabel": "Foam Talent 2024–25｜具名作品图版"
          }
        ],
        "relations": []
      },
      {
        "title": "Between Two Charts｜白色面部翻模与投影痕迹",
        "cluster": "面模→文字/图表投影→摄影",
        "period": "2023",
        "summary": "灰白色面部翻模置于褐色平面上，鼻梁与眼窝凸起，面模表面有明暗斑纹，后方地面出现近似头部的暗影/图形。",
        "actions": [
          "【Foam图注】Between Two Charts (2023)，称白色face cast上投射了Chinese face reading；图版可见翻模与投影/阴影关系。",
          "【实际动作】制作或使用白色面部翻模，把面相图/文字作为投射内容映射到立体表面后拍摄；具体翻模制造者、投影设备和图表来源未公开。",
          "【材料/设备】白色面模、投影/光照、地面或台面；无法确认面模是石膏、树脂或其他材料，也不能将Foam对另一件Twisted face的硅胶材料直接套用本件。",
          "【视觉转换】图表不再是平面纸张，而依附于起伏面部与真实投影阴影，投影角度决定文字/斑纹如何跨越鼻眼结构。",
          "【系列功能】处于研究笔记中的二维图表与Face Mesh三维表面之间，演示知识符号向脸部物体的投射。",
          "【图间关系】与Ancient Prediction的实体面罩对照：一个强调图表投射，一个强调几何线条和物件陈列。",
          "【待核】逐字图表、投影设备、曝光方式、白模材质、具体尺寸与输出形式未证实。"
        ],
        "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
        "images": [
          {
            "url": "https://a.storyblok.com/f/113697/900x1200/9e89405ce6/shooting_20230519__ground-truth_face-vare-studio_095.jpeg",
            "title": "Between Two Charts (2023)｜白色面部翻模与投影",
            "credit": "© Sheung Yiu；来源页面署名以原站为准",
            "sourceUrl": "https://www.foam.org/talent-2024/artist/sheung-yiu",
            "sourceLabel": "Foam Talent 2024–25｜具名作品图版"
          }
        ],
        "relations": []
      },
      {
        "title": "It's a Face-eat-face World｜2025视频与2026展陈帧",
        "cluster": "三维扫描→数字寓言→视频/装置",
        "period": "2025（AV-arkki作品年）；2026（C/O Berlin展览图版）",
        "summary": "2026年展厅悬挂屏幕中可见碎片化的侧脸数字地形，英文字幕叠加其上；画面后方还可见研究资料板。",
        "actions": [
          "【AV-arkki作品登记】片名It's a Face-eat-face World，制作年2025，时长11分钟，芬兰/德国制作，类型installations，含对白和声音；视频从艺术家自己脸部的数字扫描开始。",
          "【署名分工】Sheung Yiu任导演、编剧、制片、表演并参与摄影/剪辑；Bela Moritz参与摄影和剪辑；Marija Šumarac负责作曲和声音设计；Alexander Tutsek-Stiftung列为资助方。",
          "【机构说明】C/O Berlin说明视频中的作者化身穿越一个最后被揭示为其自身面孔的地形；本张是2026展陈中的视频单帧，不是独立摄影印相。",
          "【制作链】自身面部数字扫描→三维脸部空间化/角色运动的影像叙事→字幕、配音与声音设计→11分钟视频→展厅悬挂屏幕。只有扫描起点和最终视频得到来源确认；具体网格处理、动画、渲染和剪辑软件均未公开。",
          "【动作→视觉】面部从正面可识别的皮肤转为可穿越的碎片地形；屏幕、字幕和历史资料板使数字动画与图像史在空间里并置。",
          "【图间关系】从Scan I/II的真实采集装置，到Face Mesh的几何表面，再到本片的虚拟地形，形成制作阶段上的可解释递进；但未证实每一步共享同一份扫描文件。",
          "【版本区别】AV-arkki登记制作年2025，C/O Berlin在展览宣传中标视频静帧2026；两者可能是制作与展示/修订版本差异，不能擅自认定为两个不同影片。",
          "【待核】3D扫描仪/数据格式、Blender/Unity/Unreal等软件是否使用、模型面数、帧率、分辨率、渲染时长、屏幕型号及展陈尺寸均未知。"
        ],
        "sourceUrl": "https://www.av-arkki.fi/works/its-a-face-eat-face-world/",
        "images": [
          {
            "url": "https://images.squarespace-cdn.com/content/v1/51a94856e4b08b27fbbeb60a/1773257286185-39HLRG86N9ZWDM8EVOB9/shooting_20260206_CO%2BBerlin%2Bexhibition_031.jpg",
            "title": "It's a Face-eat-face World｜C/O Berlin 2026视频安装帧",
            "credit": "© Sheung Yiu；来源页面署名以原站为准",
            "sourceUrl": "https://www.sheungyiu.com/interfaces-of-predictions",
            "sourceLabel": "艺术家官网｜2026展陈记录"
          }
        ],
        "relations": []
      },
      {
        "title": "C/O Berlin 2026｜研究资料板与环形反光物",
        "cluster": "史料编辑→材料对照→环形观看",
        "period": "2026-02-07—06-10",
        "summary": "黑色展厅内，密集历史图像资料板位于两侧，中央是银蓝色反光环形物与黑色底座；三组物件构成绕行的空间。",
        "actions": [
          "【C/O Berlin官方】展览包含摄影、found footage、物件装置与视频essay；部分作品采用书法纸印相和刻在石头上的文字，另有金属、发光、反光表面；ouroboros母题影响环形参观路线。",
          "【可见】两侧资料板的缩放/拼贴、中央反光物和底座可由展陈照片直接确认；本张无法确认具体哪块板使用书法纸、哪件物体为石材。",
          "【制作动作】收集旧图与摄影→选取、缩放、编排为资料板→制作/布置反光环形物→把材料组放进环形动线。前两步是机构确认的总体方法，逐图来源、制作人员与装配方案未知。",
          "【材料/技术】展览层级可确认书法纸、石刻字、金属/发光/反光表面；不能把这些材料任意分配到图中每件作品。",
          "【视觉转换】档案板将图像史压缩成可同时比较的平面；环形物和绕行路线将循环隐喻变成身体经验。",
          "【系列作用】连接2023身体试验、历史笔记与2025数字视频，让多媒介项目在空间中成为一个可观看的整体。",
          "【图间关系】与视频单帧的近距离数字脸形成‘静态资料/动态虚拟脸’对照；与Facial landmarks的单人侧脸形成‘局部标记/跨时代图像档案’的尺度对照。",
          "【待核】环形物准确名称、材质、直径、工厂工艺、底座承重、装配图、印相规格、灯具和投影设备未见逐件技术清单。"
        ],
        "sourceUrl": "https://co-berlin.org/en/program/exhibitions/sheung-yiu",
        "images": [
          {
            "url": "https://images.squarespace-cdn.com/content/v1/51a94856e4b08b27fbbeb60a/1773257303461-XZIERHNPDPSSYASF2YGC/shooting_20260206_CO%2BBerlin%2Bexhibition_040.jpg",
            "title": "C/O Berlin 2026｜反光环形物与两侧图像档案",
            "credit": "© Sheung Yiu；来源页面署名以原站为准",
            "sourceUrl": "https://www.sheungyiu.com/interfaces-of-predictions",
            "sourceLabel": "艺术家官网｜2026展陈记录"
          }
        ],
        "relations": []
      }
    ],
    "awards": [],
    "exhibitions": [
      "Foam Talent 2024–25｜Digital Exhibition",
      "C/O Berlin｜(Inter)faces of Predictions（2026-02-07—06-10）"
    ],
    "sources": [
      {
        "label": "Foam Talent｜2023具名图版与材料说明",
        "url": "https://www.foam.org/talent-2024/artist/sheung-yiu"
      },
      {
        "label": "艺术家官网｜项目自述、具名图与2026安装照片",
        "url": "https://www.sheungyiu.com/interfaces-of-predictions"
      },
      {
        "label": "AV-arkki｜11分钟视频及摄制团队",
        "url": "https://www.av-arkki.fi/works/its-a-face-eat-face-world/"
      },
      {
        "label": "C/O Berlin｜展览材料、视频、环形动线",
        "url": "https://co-berlin.org/en/program/exhibitions/sheung-yiu"
      },
      {
        "label": "C/O Berlin｜2026-05-29桌面讲演中的痣相与landmark研究",
        "url": "https://co-berlin.org/en/events/i-asked-magical-machine"
      }
    ]
  }
};
