/** 逐图批评档案：每条论断明确区分艺术家自述、机构阐释和本站判断。
 * 图片是可核实的作品剧照/安装视图，不冒充影片的连续时间帧。
 * 2026-10-08 资料核查；新增项目时按 artistId -> project title 继续扩充。
 */
export type CriticalSourceKind = 'artist' | 'institution' | 'primary' | 'independent';
export interface CriticalSource { kind: CriticalSourceKind; label: string; url: string; note: string }
export interface CriticalFrame {
  title: string; imageUrl: string; sourceUrl: string; credit: string;
  visible: string; interpretation: string; function: string; transformation: string;
  withoutStatement: string; relation: string; necessity: string; verdict: string;
}
export interface CriticalProject {
  title: string; auditedOn: string; centralQuestion: string; thesis: string;
  conceptChain: string[]; statementOff: string; strongest: string; weakest: string;
  judgment: string; versionNotes: string[]; frames: CriticalFrame[]; sources: CriticalSource[];
}
export const criticalDetailBatch: Record<string, Record<string, CriticalProject>> = {
  'hito-steyerl': {
    'Factory of the Sun': {
      title: 'Factory of the Sun（2015）｜逐图概念—视觉转换审计',
      auditedOn: '2026-10-08',
      centralQuestion: '“身体动作被捕获并转换成数字资本”是否真的改变了作品的影像和观看机制，还是仅是影片的科幻台词？',
      thesis: '核心概念确实进入制作与展陈：动作捕捉的网格被复制到展厅；游戏 HUD、广告、伪新闻、真实网路舞蹈与 CGI 互相切换，观看者坐在游戏空间里却不能控制游戏。但“身体数据真的转化为阳光/金融收益”是影片虚构规则，不是艺术家展示的可核实算法或经济实验。',
      conceptChain: [
        '文字概念：Haraway 的机器与光的隐喻，以及数字劳动、金融加速、图像流通。',
        '研究材料：真实网络舞蹈视频（TSC）、2011 年 CERN 中微子测速争议、示威新闻影像、电子游戏界面与无人机影像；事实素材与虚构剧情要分开。',
        '制作动作：实拍表演、引入网络视频、CGI/3D 设计、伪新闻/广告与游戏 HUD 的合成、蓝色发光网格和沙滩椅的空间搭建。KOW 公开了 3D 设计、后期、服装、无人机拍摄等具体人员署名。',
        '图像结构：金色舞者在网格中被重复呈现；“赞助商广告”、股票行情/亮度指标和游戏指令插入影像；展厅地面/墙面/顶棚与银幕共享网格。',
        '观众实际看到：一个兼具舞池、游戏界面和数据捕获场景的房间；看似可操纵的按钮和分数，却没有真正的交互控制。',
      ],
      statementOff: '遮掉展签仍能识别游戏化控制、身体舞蹈、资本广告与封闭网格空间；但观众无法只凭图像推出 Haraway、CERN 中微子争议、特定银行高频交易的现实细节，也无法证明影片所描绘的数据榨取实际发生。核心形式成立，外部理论链部分依赖文本和旁白。',
      strongest: '银幕内的动作捕捉/游戏网格直接扩展成观众身体所处的发光网格；这是可观察的空间同构，不是策展文字追加的解释。',
      weakest: '“阳光 = 劳动价值 = 金融交易速度”是连续隐喻而非被可视化证明的因果关系。若把影片里的 motion capture 当成确实使用了特定动作捕捉系统的制作证明，就会把虚构情节误认作工艺记录。',
      judgment: '总体判断：形式转换强、政治因果论证中等。作品最成功的是让观众享受漂亮界面时同时处在被规训的座位与网格里；最薄弱的是跨越光速、数据、银行资本与反抗政治的概念跨度过大，许多连接靠叙事台词和文化知识完成。独立批评，不代表艺术家自述。',
      versionNotes: [
        '2015 德国馆原始资料、Esther Schipper 和 San José Museum of Art 均标注 23 分钟、单通道 HD、发光网格及沙滩椅；Kunsthal Charlottenborg 某张展览海报却标注 21 分钟。现保留版本/资料差异，不统一为同一时长。',
        '图片为不同展览现场和影片剧照，以下排列是论证顺序，不是已核实的影片时间码。',
        '具体动作捕捉硬件/软件、游戏引擎、渲染器、精确互动程序及每段 CGI 的逐镜头生产工序未从一手材料证实；不以“游戏风格”倒推使用 Unity、Unreal 或特定 mocap 设备。',
      ],
      frames: [
        {
          title: '01｜2016 Whitney 展陈：观众坐在游戏里',
          imageUrl: 'https://whitneymedia.org/assets/image/783209/large_21_factoryofthesun_2015_steyerl_forweb.jpg',
          sourceUrl: 'https://whitney.org/Events/13405',
          credit: 'Whitney Museum 展陈照片 / 官方活动页面',
          visible: '黑色房间的地板、墙壁和顶棚被蓝色直线切成网格；观众坐在白色躺椅上，面对银幕上的金色人物、游戏提示和分数界面。',
          interpretation: '机构阐释：San José Museum of Art 指出电影里的 motion-capture 蓝色网格向展厅延伸，形成近似 holodeck 的空间。',
          function: '这是检验“概念有没有进入展陈”的决定性视图：不只是播放一段批判技术的视频，观众自己也处于与屏幕同构的坐标系统。',
          transformation: '虚构捕捉空间的网格 → 实际安装的发光线条 → 观众身体被纳入可视化坐标；躺椅则把身体固定成舒适而被动的观看姿态。',
          withoutStatement: '仍能看出观众被蓝色坐标空间包围；不能直接推断他们正在被真实传感器监控。',
          relation: '与下面的金色舞者剧照互相补足：银幕中有人被捕获，银幕外有人被安排入同一视觉语法。',
          necessity: '不能任意换成一张普通影院照片；必须看见跨越墙面、顶棚、地板的网格与座椅，才能验证空间转译。',
          verdict: '非常强：概念进入了展览建筑和身体观看，而非停在影片对白。',
        },
        {
          title: '02｜金色舞者与蓝色网格：动作成为可提取物',
          imageUrl: 'https://www.singaporeartmuseum.sg/-/media/SAM/Images/Stories/Non-playable-citizens/3_TSC_Grid.jpg?h=674&hash=33C915B8E614E659E97924091D51AD27&w=1194',
          sourceUrl: 'https://www.singaporeartmuseum.sg/About/Our-Collection/Stories/Non-Playable-Citizens',
          credit: 'Singapore Art Museum / Factory of the Sun 影片剧照 © Hito Steyerl',
          visible: '一名穿金属色紧身衣的人在深蓝发光网格前做出舞蹈姿势；人体轮廓、地面反光和几何背景相互叠合。',
          interpretation: '机构阐释：SAM 指出 TSC 的网络舞蹈与动作捕捉服装、动漫角色被并置；艺术家在 MOCA 对谈中将动作数据从政治运动转移到其他身体的可能性作为问题提出。',
          function: '把身体动作、虚拟替身与可交换的数据联系起来，是整件作品反复出现的视觉母题。',
          transformation: '现实中的网络舞蹈/表演 → 角色化服装、网格空间和重复的舞蹈影像 → 让身体动作看起来像可以被提取与转售的输入。',
          withoutStatement: '能读到科幻、舞蹈、数字模拟，却读不出具体金融剥削机制。',
          relation: '与展厅视图共享蓝色网格；与赞助商广告的商业语言形成“身体—商品”对照。',
          necessity: '这里需要舞者的身体、金色服装与网格同时存在；只换成一张普通电子舞曲舞台照，会丢失身体被坐标化的论证。',
          verdict: '视觉转换中强；“实际用何种动作捕捉技术完成此镜头”仍未知，不能把叙事设定写成制作事实。',
        },
        {
          title: '03｜A Message from the Sponsor：金融话语占领影像',
          imageUrl: 'https://singaporeartmuseum.sg/-/media/SAM/Images/Stories/Non-playable-citizens/1_MessageFromTheSponsor.jpg?h=897&hash=98DEAF9D82A2DB3DC7838A6F607D67E6&w=1589',
          sourceUrl: 'https://www.singaporeartmuseum.sg/About/Our-Collection/Stories/Non-Playable-Citizens',
          credit: 'Singapore Art Museum / 影片剧照 © Hito Steyerl',
          visible: '灰色游戏/视频界面内出现 “A MESSAGE FROM THE SPONSOR” 标题；穿西装的男子在蓝色背景前讲话，画面附有 “SKIP AD” 和字幕。',
          interpretation: '机构阐释：SAM 将这段虚构赞助商广告与 CERN 光速争议及虚构金融加速故事相连；不是现实银行广告的事实记录。',
          function: '在观众正沉浸于游戏时，强行插入资本赞助语法；把影像观看本身表现为可被广告打断的媒介。',
          transformation: '新闻/金融叙事 → 商业广告的边框、跳过按钮和字幕 → 资本关系不再只由旁白说明，而是占据了画面接口。',
          withoutStatement: '观众可看出赞助商干扰与广告化观看，但无法从单帧推出具体银行的经济行为。',
          relation: '与舞者剧照构成“被消费的身体/购买注意力的广告”对照；与后续展厅观看姿态共同指向观众的被动位置。',
          necessity: '不可随意换成普通银行大楼照片：关键不是“金融图像”，而是 “SKIP AD” 把金融权力做成屏幕操作层。',
          verdict: '强在媒介形式，弱在将科幻金融阴谋与现实资本机制相互指代时的证据强度。',
        },
        {
          title: '04｜屏幕里的摄制现场：被观看的表演再次被拍摄',
          imageUrl: 'https://proa.org/images-exhibiciones/exhibicion_bloque_foto_1736.jpg',
          sourceUrl: 'https://proa.org/esp/exhibicion-proa-fabrik-en-circulacion-de-datos-bienes-y-personas-proa21-obras-salas.php',
          credit: 'Fundación PROA / 展陈照片，屏幕内容 © Hito Steyerl',
          visible: '展厅大屏幕上，一个金色衣着人物蹲在摄像机/三脚架旁，另一人躺在黑白网格地面；现场可见金属桁架和条状灯具。',
          interpretation: '机构阐释：SAM 描述影片穿插动作捕捉场景与反复排演死亡的段落；仅凭这张静帧无法判定躺地者对应影片中哪次具体排演。',
          function: '把拍摄设备、被拍摄身体和网格同时放入镜头，使观众意识到所谓虚拟事件也是被制造、被重演的影像。',
          transformation: '影像生产现场/表演 → 再被摄入影片 → 虚构游戏和制作现场互相暴露；并与展厅中的真实桁架结构呼应。',
          withoutStatement: '可直接看见摄影设备与表演身体的关系；不能推出片中“死亡”与真实抗议事件的对应。',
          relation: '与舞者图形成“表演—被拍摄/记录”的关系；与第一张的展厅桁架和网格形成空间嵌套。',
          necessity: '三脚架、拍摄者和躺地身体同时出现，才能支持“作品让生产装置显形”的判断；普通剧情截图无法替代。',
          verdict: '中强：生产机制进入了画面；政治叙事的具体指涉仍需字幕、声音和前后镜头。',
        },
      ],
      sources: [
        { kind: 'primary', label: '2015 德国馆原始项目资料', url: 'https://2015.deutscher-pavillon.org/wp-content/uploads/2015/05/02b-Hito-Steyerl_Factory-of-the-Sun_CV_en.pdf', note: '单通道、23 分钟、HD .MOV、网格、躺椅等项目规格。' },
        { kind: 'primary', label: 'KOW 项目页与制作署名', url: 'https://kow-berlin.com/artists/hito-steyerl/factory-of-the-sun-2015', note: '3D 设计、后期、服装、无人机摄影等人员署名；并未确认软件型号。' },
        { kind: 'artist', label: 'Steyerl 在 MOCA 对谈（由 Catherine Wagley 转述）', url: 'https://contemporaryartreview.la/hito-steyerlat-moca/', note: '2016 年现场问答中关于舞蹈、动作捕捉数据与政治运动的发问；属于记者转述，不当作完整逐字访谈。' },
        { kind: 'institution', label: 'Singapore Art Museum：Non-Playable Citizens', url: 'https://www.singaporeartmuseum.sg/About/Our-Collection/Stories/Non-Playable-Citizens', note: '2023 年 Duncan Bass 的馆方策展文章，逐镜头分析游戏 HUD、赞助商广告、TSC 与空间网格。' },
        { kind: 'institution', label: 'San José Museum of Art：Factory of the Sun', url: 'https://sjmusart.org/exhibition/hito-steyerl-factory-sun', note: '机构阐释、2015 作品规格、2021 安装版本及来源。' },
        { kind: 'independent', label: 'Catherine Wagley / Carla 评论', url: 'https://contemporaryartreview.la/hito-steyerlat-moca/', note: '2016 年独立评论指出影片叙事不易追踪，感染力更多来自情绪与精确细节。' },
        { kind: 'independent', label: 'Karen L. G. Søilen / Surveillance & Society', url: 'https://ojs.library.queensu.ca/index.php/surveillance-and-society/article/download/15795/11060', note: '2023 年同行学术分析：ambient entrapment 是研究者提出的解释框架，不是作品制作事实。' },
      ],
    },
  },
};
