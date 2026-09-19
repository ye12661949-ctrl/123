import type { ArtistArchive, ArchiveImage, ArchiveRelation } from './archiveData';

const img = (url: string, title: string, credit: string, sourceUrl: string, sourceLabel: string): ArchiveImage => ({ url, title, credit, sourceUrl, sourceLabel });
const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

export const archiveBatch33: Record<string, ArtistArchive> = {
  'jeff-wall': {
    artistId: 'jeff-wall',
    projectCoverage: '8 个关键编排 / 近纪录摄影节点已建立深度档案 · 1978–2000s',
    imageCoverage: '2 / 8 项目已有代表图像',
    note: '按 Wall 自己所谓“cinematography”的生产逻辑整理：偶然目击 / 阅读 / 艺术史图像 → 场景研究 → 选角与搭景 → 排练 → 大画幅摄影 → 数字合成或直接拍摄 → 灯箱 / 大型打印。也保留他后来较接近 documentary 的另一条线。',
    projects: [
      {
        title: 'The Destroyed Room', cluster: 'constructed scene / art history / lightbox', period: '1978',
        summary: '早期关键转折。Wall 在工作室搭出一个被破坏的室内场景，并借鉴 Delacroix 等历史绘画的戏剧性构图；最终使用背光透明片灯箱，使摄影同时接近绘画尺度、电影画面和街头广告。',
        actions: ['在摄影棚搭建完整室内场景', '安排床、衣物、墙面和破坏痕迹', '人为制造“毁坏后的瞬间”', '以绘画构图组织场景', '大画幅摄影', '将透明片装入荧光背光灯箱'],
        sourceUrl: 'https://www.moma.org/calendar/exhibitions/117', images: [],
        relations: [rel('展览', 'Jeff Wall — MoMA', '2007')]
      },
      {
        title: 'Picture for Women', cluster: 'mirror / gaze / camera inside image / lightbox', period: '1979',
        summary: '镜子让模特、摄影师本人和相机同时进入图像。Centre Pompidou 馆藏记录显示作品由两张透明 Cibachrome 拼接并置于灯箱中；拍摄行为因此不再隐藏在照片之外。',
        actions: ['在工作室布置大镜面', '让模特站在镜面前', '相机置于画面中心', 'Wall 本人持快门线进入镜中', '精确调整三者目光与位置', '制作两张透明 Cibachrome 并拼接', '装入灯箱'],
        sourceUrl: 'https://www.centrepompidou.fr/en/ressources/oeuvre/c5eBM7k', images: [],
        relations: [rel('收藏', 'Centre Pompidou', 'Picture for Women, 1979')]
      },
      {
        title: 'Mimic', cluster: 'street observation / reenactment / social micro-gesture', period: '1982',
        summary: '起点是 Wall 在 Vancouver 街头目击的一次种族主义手势。他没有拍下原事件，而是之后找演员、选地点、排演并重建“像抓拍一样的瞬间”，把 street photography 与电影式制作结合。',
        actions: ['记住街头偶然目击事件', '寻找相似城市地点', '选择三名人物 / 演员', '排练步伐、身体距离和手势', '反复 staging 直到像瞬间抓拍', '使用大画幅相机完成最终画面'],
        sourceUrl: 'https://www.tate.org.uk/art/artworks/wall-mimic-t07173', images: [],
        relations: [rel('收藏', 'Tate', 'Mimic, 1982')]
      },
      {
        title: 'Dead Troops Talk', cluster: 'war tableau / set / actors / special effects', period: '1992',
        summary: '制造一个并未真实发生的阿富汗战争“死者复活”场景。MoMA 回顾展资料把它视为 Wall 将历史画、战争电影和高度人工制作推到极端的作品：宽度超过 13 英尺的画面完全依赖搭景、演员、化妆和导演式控制。',
        actions: ['研究战争视觉与历史画构图', '搭建大型岩地 / 战场布景', '选角扮演苏军士兵', '使用假肢、伤口化妆和道具', '分区安排人物动作与对话姿态', '高分辨率拍摄', '以巨型透明片灯箱呈现'],
        sourceUrl: 'https://www.moma.org/calendar/exhibitions/117', images: [],
        relations: [rel('展览', 'Jeff Wall — MoMA', '2007')]
      },
      {
        title: 'A Sudden Gust of Wind (after Hokusai)', cluster: 'art-history translation / staged landscape / digital montage', period: '1993',
        summary: '把葛饰北斋《富岳三十六景》中“风把纸张吹散”的图像转到 Vancouver 郊外。Tate 资料说明拍摄持续约五个月，最终把多次拍摄的素材数字拼贴成一张不存在的完美瞬间。',
        actions: ['选择 Hokusai 版画作为动作 / 构图原型', '在 Vancouver 周边寻找对应田野', '安排人物、纸张和环境动作', '数月内多次拍摄不同元素', '选择最合适的人体、纸张和天气片段', '数字合成为统一瞬间', '大型灯箱输出'],
        sourceUrl: 'https://www.tate.org.uk/art/artworks/wall-a-sudden-gust-of-wind-after-hokusai-t06951', images: [],
        relations: [rel('收藏', 'Tate', 'A Sudden Gust of Wind (after Hokusai), 1993')]
      },
      {
        title: 'After “Invisible Man” by Ralph Ellison, the Prologue', cluster: 'literature / full-scale set / reading image', period: '1999–2000',
        summary: 'MoMA 说明作品依据 Ralph Ellison 小说序章，同时加入其他章节和 Wall 自己的想象。艺术家将阅读时形成的心理图像实际搭成地下室，甚至落实小说中的 1,369 盏灯。',
        actions: ['细读小说并提取空间线索', '将文字描述转成布景设计', '在 Vancouver 工作室搭建 1:1 地下室', '布置大量家具、书、杂物与 1,369 盏灯', '与演员和制作团队协作', '使用大画幅长焦相机获得高细节', '透明片灯箱展示'],
        sourceUrl: 'https://www.moma.org/collection/works/88085',
        images: [img('https://www.moma.org/media/W1siZiIsIjM4ODkwNiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=9f9e6bddd7ff4639', 'After “Invisible Man” by Ralph Ellison, the Prologue', '© Jeff Wall', 'https://www.moma.org/collection/works/88085', 'MoMA')],
        relations: [rel('收藏', 'MoMA', 'collection')]
      },
      {
        title: 'Diagonal Composition / near-documentary pictures', cluster: 'observed detail / near-documentary / small gesture', period: '1993–',
        summary: 'Wall 并非所有作品都靠大规模搭景。90 年代起他也拍摄水槽、地板、清洁现场等近纪录图像，使作品在“完全建构”和“等待现实自己形成画面”之间来回移动。',
        actions: ['观察不起眼的室内 / 工作空间细节', '减少演员与大型布景', '保留现实材料的污迹、边缘和几何关系', '通过机位与等待而非事件戏剧化建立构图'],
        sourceUrl: 'https://www.moma.org/documents/moma_press-release_389309.pdf', images: [], relations: []
      },
      {
        title: 'Cinematography as photographic method', cluster: 'meta-method / direction / reconstruction / high resolution', period: '1970s–现在',
        summary: 'Wall 把自己的方法称作 cinematography。关键不是照片“像电影”，而是生产过程像电影：摄影师兼导演，画面可以从街头偶遇、文学或艺术史开始，再由演员、助手、场景、灯光和后期把那个心理图像重新制造。',
        actions: ['从偶然观察 / 阅读 / 旧画建立初始图像', '决定需要直接拍还是重演', '选角、勘景、搭景与排练', '以大画幅相机拍摄大量细节', '必要时数字合成多个时刻', '以灯箱或大幅打印恢复接近绘画 / 电影屏幕的物理尺度'],
        sourceUrl: 'https://www.moma.org/collection/works/88085', images: [], relations: []
      }
    ],
    awards: ['Hasselblad Award 2002'],
    exhibitions: ['Jeff Wall — MoMA 2007'],
    sources: [
      { label: 'MoMA — Jeff Wall', url: 'https://www.moma.org/artists/7826-jeff-wall' },
      { label: 'MoMA — Invisible Man', url: 'https://www.moma.org/collection/works/88085' },
      { label: 'Centre Pompidou — Picture for Women', url: 'https://www.centrepompidou.fr/en/ressources/oeuvre/c5eBM7k' },
      { label: 'Tate — A Sudden Gust of Wind', url: 'https://www.tate.org.uk/art/artworks/wall-a-sudden-gust-of-wind-after-hokusai-t06951' }
    ]
  },
  'rineke-dijkstra': {
    artistId: 'rineke-dijkstra',
    projectCoverage: '8 个长期肖像 / 录像节点已建立深度档案 · 1991–2009+',
    imageCoverage: '2 / 8 项目已有代表图像',
    note: '档案重点放“如何得到不稳定姿态”：4×5 view camera、三脚架、偶尔闪光、较慢拍摄、选择刚经历体力 / 身份变化的人，以及多年后以同一规则回访。不是单纯“极简背景肖像”。',
    projects: [
      {
        title: 'Self-portrait after swimming', cluster: 'exhaustion / loss of pose / method origin', period: '1991',
        summary: 'Dijkstra 早期方法的重要起点是自己刚游完泳后的肖像。身体疲劳使熟练的社交姿势变弱，后来她在产妇、斗牛士、士兵和青少年项目中持续寻找这种“还来不及完全控制自己形象”的状态。',
        actions: ['在身体明显疲劳后立即拍摄', '正面面对相机', '减少背景叙事', '观察疲劳如何削弱主动摆拍'],
        sourceUrl: 'https://www.guggenheim.org/exhibition/rineke-dijkstra-a-retrospective', images: [], relations: []
      },
      {
        title: 'Beach Portraits', cluster: 'adolescence / public space / large-format portrait', period: '1992–2002',
        summary: '在美国、波兰、乌克兰等地海滩寻找青少年。Guggenheim 指出系列多使用较低视点，使人物在海天之间获得纪念碑式存在；人物同时又因不知道如何站立而显得脆弱。',
        actions: ['在真实海滩现场寻找被摄者', '使用 4×5 view camera 与三脚架', '机位相对偏低', '让人物正面 / 全身站立', '背景主要保留海、沙与天空', '拍摄过程较慢，让人物意识到被观看', '必要时以闪光平衡人物与环境'],
        sourceUrl: 'https://www.guggenheim.org/exhibition/rineke-dijkstra-a-retrospective',
        images: [img('https://www.guggenheim.org/wp-content/uploads/2016/03/installation-rineke-dijkstra-retrospective-srgm-2012-2.jpg', 'Beach Portraits — retrospective installation', '© Rineke Dijkstra / installation view', 'https://www.guggenheim.org/exhibition/rineke-dijkstra-a-retrospective', 'Guggenheim')],
        relations: [rel('展览', 'Rineke Dijkstra: A Retrospective — Guggenheim', '2012')]
      },
      {
        title: 'New Mothers', cluster: 'postpartum / physical transition / direct portrait', period: '1994',
        summary: '在女性生产后非常短的时间内拍摄。与海滩青年类似，身体正处于强烈变化和疲惫中，传统肖像中用于“表现自己”的姿势被削弱。',
        actions: ['与刚生产的母亲合作', '在生产后短时间内拍摄', '使用 4×5 view camera', '简化墙面 / 医院背景', '保留身体的疲劳与生理变化', '不通过道具美化状态'],
        sourceUrl: 'https://www.sfmoma.org/press/release/sfmoma-presents-rineke-dijkstra-a-retrospective/', images: [], relations: []
      },
      {
        title: 'Bullfighters', cluster: 'post-event / exhaustion / masculinity', period: '1994–2000',
        summary: '拍摄刚离开斗牛场的年轻斗牛士，血迹、汗水和紧张未消失。SFMOMA 对其方法的概括特别强调：她有意寻找刚经历事件、难以维持人工姿势的人。',
        actions: ['在斗牛活动后立即联系被摄者', '保留制服、伤痕和汗水', '使用直接正面肖像', '快速在心理状态恢复前完成拍摄'],
        sourceUrl: 'https://www.sfmoma.org/press/release/sfmoma-presents-rineke-dijkstra-a-retrospective/', images: [], relations: []
      },
      {
        title: 'Almerisa', cluster: 'migration / repeated portrait / long-term time', period: '1994–2008',
        summary: '1994 年在荷兰 Bosnian asylum-seeker center 遇见 Almerisa，之后十多年定期回访。Guggenheim 资料说明，服装、座椅、身体姿态与家庭状态的细微变化共同显示她从难民儿童到荷兰成年人的过程。',
        actions: ['第一次在难民中心完成肖像', '之后主动重新找到同一被摄者', '多年持续回访', '尽量保持正面、坐姿等基本肖像规则', '让服装、空间与身体变化自然累积', '按时间顺序展示形成长期比较'],
        sourceUrl: 'https://www.guggenheim.org/exhibition/rineke-dijkstra-a-retrospective', images: [], relations: []
      },
      {
        title: 'Olivier', cluster: 'military training / repeated portrait / bodily discipline', period: '2000–2003',
        summary: '从 Olivier 加入法国外籍军团开始长期拍摄，追踪训练如何改变一个年轻人的身体、肌肉、姿势和目光。相比单张“军人肖像”，真正的作品是变化序列。',
        actions: ['在入伍初期建立第一张肖像', '在军事训练不同阶段持续回访', '保持相对一致的拍摄结构', '让制服和身体训练痕迹进入画面', '按时间 sequence 观察身份被制度塑造'],
        sourceUrl: 'https://www.guggenheim.org/exhibition/rineke-dijkstra-a-retrospective', images: [], relations: []
      },
      {
        title: 'The Buzz Club / Mystery World', cluster: 'club / video portrait / dance / self-performance', period: '1996–1997',
        summary: '把夜店中的青年暂时带到简化白色背景前，让他们独自面对固定摄像机并随着自己的音乐跳舞。夜店群体环境被抽掉后，风格、羞涩和自我表演直接落到身体动作上。',
        actions: ['在俱乐部现场选择参与者', '在场地附近搭白色 / 简化背景', '固定录像机机位', '让被摄者单独面对镜头', '播放他们熟悉 / 喜欢的音乐', '持续拍摄而不是只截一个决定性瞬间', '以多通道录像安装展示'],
        sourceUrl: 'https://www.guggenheim.org/exhibition/rineke-dijkstra-a-retrospective', images: [], relations: []
      },
      {
        title: 'The Krazyhouse / Tate Liverpool videos', cluster: 'dance / art viewing / duration', period: '2009',
        summary: '2009 年再次拍摄 Liverpool 俱乐部青年，同时在 Tate Liverpool 制作观看艺术的录像。她把静态肖像中“摄影师与被摄者之间的等待”延伸为真实时间，让观众看到姿势如何在几分钟里形成和瓦解。',
        actions: ['固定摄影机持续记录', '减少剪辑对身体行为的操纵', '让人物自行决定如何跳舞 / 观看', '以多通道形式呈现不同个体', '把观看持续时间作为肖像的一部分'],
        sourceUrl: 'https://www.guggenheim.org/exhibition/rineke-dijkstra-a-retrospective',
        images: [img('https://www.guggenheim.org/wp-content/uploads/2016/03/installation-rineke-dijkstra-retrospective-srgm-2012-1.jpg', 'Rineke Dijkstra retrospective — video/photograph installation', '© Rineke Dijkstra / installation view', 'https://www.guggenheim.org/exhibition/rineke-dijkstra-a-retrospective', 'Guggenheim')],
        relations: []
      }
    ],
    awards: ['Hasselblad Award 2017'],
    exhibitions: ['Rineke Dijkstra: A Retrospective — SFMOMA / Guggenheim 2012'],
    sources: [
      { label: 'Guggenheim retrospective', url: 'https://www.guggenheim.org/exhibition/rineke-dijkstra-a-retrospective' },
      { label: 'SFMOMA retrospective release', url: 'https://www.sfmoma.org/press/release/sfmoma-presents-rineke-dijkstra-a-retrospective/' }
    ]
  },
  'daisuke-yokota': {
    artistId: 'daisuke-yokota',
    projectCoverage: '7 个实验摄影 / 材料节点已建立深度档案 · 2010s–2017+',
    imageCoverage: '2 / 7 项目已有代表图像',
    note: '重点不是“高颗粒黑白风格”，而是图像经历的处理链。Foam 已明确记录 Nocturnes 的重拍—改显影时间—扫描—Photoshop 叠层，以及 Site/Cloud 的数码 / 胶片 / 复印 / 暗房循环；Matter 则进一步让相机退场，直接处理胶片、化学与纸张体积。',
    projects: [
      {
        title: 'Nocturnes', cluster: 'rephotography / altered development / scan / Photoshop layers', period: '2010s–2013',
        summary: 'Foam 对其技术链有直接说明：Yokota 重新拍摄已有打印照片，在胶片处理时改变显影时间，然后扫描，再在 Photoshop 里叠加图层，最终图像因此不是一次拍摄，而是多轮损耗和复制的结果。',
        actions: ['先获得原始照片', '把已有打印物重新摄影到胶片', '在暗房改变显影时间', '扫描处理后的胶片', '在 Photoshop 中叠加多个图层', '保留颗粒、模糊与复制误差作为最终结构'],
        sourceUrl: 'https://www.foam.org/artists/daisuke-yokota', images: [],
        relations: [rel('展览', 'Foam Talent', '2013')]
      },
      {
        title: 'Site / Cloud', cluster: 'digital + analogue loop / photocopy / improvised darkroom', period: '2013–2014',
        summary: 'Foam 指出该系列混合数字摄影与传统胶片，并反复 shoot / re-shoot，再加入 photocopy 和 Photoshop；Yokota 在公寓里搭临时暗房，允许化学偶然性直接改变结果。',
        actions: ['混合数码相机与胶片拍摄', '打印或输出中间图像', '再次拍摄已有图像', '使用 photocopy 制造新的复制层', '在公寓临时暗房实验化学过程', '扫描并继续数字处理', '把每一层结果作为下一层输入'],
        sourceUrl: 'https://www.foam.org/events/daisuke-yokota-site-cloud',
        images: [img('https://www.foam.org/_next/image?q=80&url=https%3A%2F%2Fa.storyblok.com%2Ff%2F113697%2F1772x1181%2Fd1624c1bfc%2Flr_daisuke_yokota_foam_by_cvdk_01.jpg&w=1920', 'Site / Cloud — Foam installation', 'Photo Christian van der Kooy / Foam', 'https://www.foam.org/events/daisuke-yokota-site-cloud', 'Foam')],
        relations: [rel('展览', 'Site / Cloud — Foam', '2014')]
      },
      {
        title: 'Vertigo', cluster: 'photobook / repetition / temporal distortion', period: '2014',
        summary: '延续反复复制和重拍逻辑，并以书籍 sequence 加强时间感。Yokota 受到电子音乐 echo、delay、reverberation 的启发，把一次图像不断延迟、重现和变形。',
        actions: ['重复处理相同 / 相关图像', '利用重拍与复制拉开原图距离', '在摄影书中以连续翻页形成视觉回声', '用颗粒与模糊弱化确定地点和时刻'],
        sourceUrl: 'https://www.foam.org/events/daisuke-yokota-site-cloud', images: [], relations: []
      },
      {
        title: 'Color Photographs / Taratin', cluster: 'color / chemical processing / experimental print', period: '2015–2016',
        summary: '从早期黑白图像扩展到彩色材料实验。Foam Paul Huf Award 资料列出 Color Photographs 与 Taratin，显示颜色同样来自处理过程，而不是简单切换成“彩色纪实”。',
        actions: ['使用彩色胶片 / 彩色打印材料', '继续进行重拍和化学实验', '允许色偏、污染与异常显影进入', '把处理痕迹作为色彩来源'],
        sourceUrl: 'https://www.foam.org/events/winner-foam-paul-huf-award-2016', images: [],
        relations: [rel('奖项', 'Foam Paul Huf Award', 'Winner 2016')]
      },
      {
        title: 'Matter — direct exposed film roll', cluster: 'cameraless / film roll / wax / spatial installation', period: '2017',
        summary: 'Foam 2017 展览中，一件作品把整卷胶片直接曝光而不经过相机，再放大成长条打印，像带状物一样穿过展厅，并在现场打蜡。摄影从“图像”变成具有长度、重量和触觉的物。',
        actions: ['直接曝光胶片而不使用相机', '将整卷胶片的结果放大打印', '把长条打印物悬挂 / 垂落于展厅', '在展览现场给打印物上蜡', '让弯曲、重量和表面变化成为作品'],
        sourceUrl: 'https://www.foam.org/events/daisuke-yokota', images: [],
        relations: [rel('展览', 'Matter — Foam', '2017')]
      },
      {
        title: 'Matter — chemical projections / live printer', cluster: 'darkroom experiment / projection / live output', period: '2017',
        summary: '另一个房间把非常规暗房显影造成的底片化学扭曲投影到墙上，同时打印机缓慢输出这些结果。作品把“处理中的图像”而非最终照片放进展览时间。',
        actions: ['以非常规显影流程处理底片', '保留化学扭曲与事故', '将实验结果投影到墙面', '连接打印机缓慢持续输出图像', '让展览期间的打印过程成为作品时间'],
        sourceUrl: 'https://www.foam.org/events/daisuke-yokota',
        images: [img('https://www.foam.org/_next/image?q=80&url=https%3A%2F%2Fa.storyblok.com%2Ff%2F113697%2F1772x1181%2Fd1624c1bfc%2Flr_daisuke_yokota_foam_by_cvdk_01.jpg&w=1920', 'Matter / Yokota at Foam — installation context', 'Photo Christian van der Kooy / Foam', 'https://www.foam.org/artists/daisuke-yokota', 'Foam')],
        relations: []
      },
      {
        title: 'Process as subject', cluster: 'meta-method / echo / delay / chemical time', period: '2010s–现在',
        summary: 'Yokota 把摄影的弱点理解为“单张照片缺乏持续时间”，所以通过重复拍摄、复制、化学延迟、扫描和叠层把时间重新塞回图像。作品的真正对象逐渐从被拍场景转为图像自己的生命史。',
        actions: ['让每次输出成为下一次输入', '在模拟与数字之间反复转换', '主动制造信息损耗', '把偶然化学反应纳入规则', '通过书籍、装置和表演扩展单张照片的时间'],
        sourceUrl: 'https://www.foam.org/events/daisuke-yokota-site-cloud', images: [], relations: []
      }
    ],
    awards: ['Foam Talent 2013', 'Foam Paul Huf Award 2016', 'Photo London John Kobal Residency Award 2015'],
    exhibitions: ['Site / Cloud — Foam 2014', 'Matter — Foam 2017'],
    sources: [
      { label: 'Foam — Daisuke Yokota artist', url: 'https://www.foam.org/artists/daisuke-yokota' },
      { label: 'Foam — Site / Cloud', url: 'https://www.foam.org/events/daisuke-yokota-site-cloud' },
      { label: 'Foam — Matter', url: 'https://www.foam.org/events/daisuke-yokota' }
    ]
  },
  'lebohang-kganye': {
    artistId: 'lebohang-kganye',
    projectCoverage: '7 个家族档案 / 剪影 / 动画 / 纺织节点已建立深度档案 · 2013–2022+',
    imageCoverage: '2 / 7 项目已有代表图像',
    note: '按“口述故事 / 家庭旧照 → 重演 / 剪切 → 纸偶与空间 → 动画 / 纺织”的转译链整理。Foam 对她的方法描述很清楚：图像与文字都被当成可重写的舞台材料，用来填补 apartheid 与迁移造成的家庭记忆缺口。',
    projects: [
      {
        title: 'Ke Lefa Laka: Her-Story', cluster: 'family album / mother / self-performance / photomontage', period: '2013',
        summary: '在母亲去世后进入家庭相册，Kganye 重新穿上类似母亲照片中的衣服、模仿姿势并拍摄自己，再把自己的身体蒙太奇进母亲过去的家居照片。现在与过去由两次不同摄影叠到同一空间。',
        actions: ['翻查母亲与家庭旧相册', '选择具有明确姿势 / 场景的旧照片', '寻找或制作相似服装', '由艺术家本人重新表演母亲姿势', '拍摄新的自画像', '将新身体与旧家庭照片数字 / 摄影蒙太奇', '让母女两个时间层同时出现'],
        sourceUrl: 'https://www.foam.org/events/lebohang-kganye',
        images: [img('https://www.designindaba.com/sites/default/files/styles/scaledlarge/public/node/news/23677/gallery/1lebohang-kganyenailcutter.jpg?itok=L1gD4aFD', 'Ke Lefa Laka: Her-Story', '© Lebohang Kganye', 'https://www.foam.org/events/lebohang-kganye', 'Foam / project context')],
        relations: []
      },
      {
        title: 'Ke Lefa Laka / family micro-histories', cluster: 'oral history / family archive / apartheid history', period: '2013–',
        summary: 'Foam 将她整个实践概括为家庭“micro histories”与南非 apartheid、殖民及其后果的交叉。她不是把家庭照片当事实证据，而会同时收集亲人口述和南非文学，把矛盾、遗漏与幻想保留下来。',
        actions: ['采访家人并记录口述故事', '搜集家族相册和私人档案', '把家庭迁移与更大的南非历史对照', '允许不同亲属版本相互冲突', '将文本转成后续摄影 / 舞台脚本'],
        sourceUrl: 'https://www.foam.org/press/lebohang-kganye', images: [], relations: []
      },
      {
        title: 'Mohlokomedi wa Tora', cluster: 'paper cut-outs / spatial installation / family stage', period: '2018',
        summary: '把家庭照片中的人物切成实体剪影 / 纸偶，再放进可进入或可绕行的空间结构，使平面相册变成戏剧舞台。Foam 2023 个展把它列为她从摄影蒙太奇走向 spatial installation 的核心节点。',
        actions: ['从家庭照片提取人物轮廓', '将人物放大并制作 cut-outs / silhouettes', '搭建建筑 / 家庭空间式布景', '将二维人物立起来', '利用投影 / 阴影强化“幽灵式”存在', '让观众在人物之间移动'],
        sourceUrl: 'https://www.foam.org/press/lebohang-kganye',
        images: [img('https://a.storyblok.com/f/113697/1600x1067/1a86087a50/lebohang-kganye_mohlokomedi-wa-tora-scene-2-2018.jpg', 'Mohlokomedi wa Tora, Scene 2, 2018', '© Lebohang Kganye', 'https://www.foam.org/events/lebohang-kganye', 'Foam')],
        relations: []
      },
      {
        title: 'Shadows of Re-Memory', cluster: 'film animation / silhouettes / oral narrative', period: '2021',
        summary: '把剪影、家庭档案与口述叙事进一步转成动画。原本固定的家庭照片被拆成可运动的舞台人物，记忆因此不是“播放旧照片”，而是通过动画重新排演。',
        actions: ['从档案 / 剪影中提取人物', '制作可动画化的图层 / cut-outs', '根据口述与文本组织叙事', '逐段制作影像运动', '使用声音 / 文字与阴影共同构成时间'],
        sourceUrl: 'https://www.foam.org/press/lebohang-kganye', images: [], relations: []
      },
      {
        title: 'Mosebetsi wa Dirithi', cluster: 'patchwork / textile / photographic figure', period: '2022',
        summary: 'Foam 展览将该项目作为她进入 patchwork 的节点。人物肖像与家族叙事不再只存在于纸和屏幕，而被缝入纺织表面，使“拼接记忆”成为真正的材料操作。',
        actions: ['选择人物 / 家庭视觉材料', '将图像转译为布料 / patchwork 结构', '裁切不同布片', '缝合形成身体、服装和背景', '让接缝本身显示记忆由碎片构成'],
        sourceUrl: 'https://www.foam.org/artists/lebohang-kganye', images: [], relations: []
      },
      {
        title: 'Haufi nyana? I’ve come to take you home', cluster: 'survey installation / autobiography / home', period: '2023 exhibition',
        summary: 'Foam 个展把过去十年的四个项目放在同一空间：Her-Story 的摄影蒙太奇、Mohlokomedi wa Tora 的空间装置、Shadows of Re-Memory 的动画、Mosebetsi wa Dirithi 的 patchwork。媒介变化本身成为她如何反复接近“家”的路径。',
        actions: ['从十年实践中选择四条媒介线', '将照片、纸偶、动画与纺织并置', '利用展厅把私人档案扩展为可行走空间', '通过不同媒介重复同一家庭记忆但不追求统一版本'],
        sourceUrl: 'https://www.foam.org/events/lebohang-kganye', images: [],
        relations: [rel('展览', 'Haufi nyana? I’ve come to take you home — Foam', '2023')]
      },
      {
        title: 'Photography as staged memory', cluster: 'meta-method / fantasy / oral history / decolonizing photography', period: '2013–现在',
        summary: 'Foam 指出她关注 photography 与 storytelling 共同制造的 memory / fantasy 动态。家庭照片不被视为不可质疑的事实，而是可以被重新穿上、剪开、立起、投影、缝合的舞台素材。',
        actions: ['先承认档案中的缺失与矛盾', '把口述叙事转写成脚本 / 场景', '让作者身体重新进入旧图像', '不断更换媒介而非追求固定摄影风格', '用构造性明确对抗“照片等于历史事实”的假设'],
        sourceUrl: 'https://www.foam.org/press/lebohang-kganye', images: [], relations: []
      }
    ],
    awards: ['Foam Paul Huf Award 2022', 'Grand Prix Images Vevey 2021/22', 'Paulo Cunha e Silva Art Prize 2020', 'Camera Austria Award 2019'],
    exhibitions: ['Haufi nyana? I’ve come to take you home — Foam 2023'],
    sources: [
      { label: 'Foam — Lebohang Kganye press release', url: 'https://www.foam.org/press/lebohang-kganye' },
      { label: 'Foam — Haufi nyana?', url: 'https://www.foam.org/events/lebohang-kganye' },
      { label: 'Foam — artist profile', url: 'https://www.foam.org/artists/lebohang-kganye' }
    ]
  }
};