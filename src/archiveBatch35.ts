import type { ArtistArchive, ArchiveImage, ArchiveRelation } from './archiveData';

const img = (url: string, title: string, credit: string, sourceUrl: string, sourceLabel: string): ArchiveImage => ({ url, title, credit, sourceUrl, sourceLabel });
const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

export const archiveBatch35: Record<string, ArtistArchive> = {
  'thomas-struth': {
    artistId: 'thomas-struth',
    projectCoverage: '8 个关键摄影项目 / 方法节点已建立深度档案 · 1977–现在',
    imageCoverage: '1 / 8 项目已有代表图像',
    note: '按 Struth 的观看方式变化整理：无人街道 → 家庭关系 → 美术馆中的观看者 → 密集森林 → 观众本身 → 科技与科学设施。重点记录他如何改变机位、等待方式、人物组织和可见信息密度，而不是把所有作品归为“大画幅客观摄影”。',
    projects: [
      {
        title: 'Unconscious Places / streets', cluster: 'city / frontal view / urban structure', period: '1977–现在',
        summary: '最早在 Düsseldorf 及之后的纽约、罗马、东京等城市持续拍摄街道。人物常很少甚至不存在，建筑立面、道路和城市规划因此像社会结构的“无意识”一样被显露。',
        actions: ['在城市中长期步行勘景', '选择能正面显示街道与建筑关系的位置', '使用大画幅相机', '尽量减少戏剧化人物事件', '保留建筑、路面、标志和城市层次的高细节', '跨城市持续积累而不是一次性项目'],
        sourceUrl: 'https://www.thomasstruth32.com/', images: [], relations: []
      },
      {
        title: 'Family Portraits', cluster: 'family / psychoanalysis / self-posing / repeated conditions', period: '1980s–现在',
        summary: '系列源于 1982 年与精神分析师 Ingo Hartmann 对家庭照片的比较研究。真正拍摄时，Struth 发出邀请，但由家庭与他共同决定地点和取景，家庭成员自己组织站位，并被要求直视镜头。',
        actions: ['从朋友 / 工作关系中邀请整个家庭参与', '与家庭共同决定在家或花园中的拍摄地点', '不由摄影师逐个摆出固定姿势，而让家人自行组织', '要求所有人物直接看向相机', '使用大画幅设备和较慢拍摄', '将不同国家 / 年份家庭以相似规则长期比较'],
        sourceUrl: 'https://thomasstruth32.com/smallsize/photographs/family_portraits_1/index.html', images: [], relations: []
      },
      {
        title: 'Museum Photographs', cluster: 'museum / old masters / contemporary spectatorship', period: '1989–2005',
        summary: '把历史绘画与当下观众放在同一摄影平面。作品通常不是抓一个“有趣游客”，而是在美术馆中等待人物位置、姿势和画中人物形成关系；同一地点会拍大量不同瞬间再选择。',
        actions: ['研究具体博物馆与历史绘画', '申请 / 安排馆内拍摄', '把大画幅相机固定在能同时容纳绘画和观看者的位置', '长时间等待真实观众进入画面', '连续拍摄因人群变化而不同的版本', '从多张底片中选择人物 / 画作关系最有张力的一张', '大尺幅彩色输出'],
        sourceUrl: 'https://thomasstruth32.com/smallsize/photographs/museum_photographs_1/index.html',
        images: [img('https://people.brandeis.edu/~teuber/struth_chicago.jpg', 'Museum Photograph — Art Institute of Chicago', '© Thomas Struth', 'https://thomasstruth32.com/smallsize/photographs/museum_photographs_1/index.html', 'Thomas Struth project archive')],
        relations: []
      },
      {
        title: 'Museo del Prado / completion of Museum Photographs', cluster: 'museum / crowd / cropped painting / immersive spectatorship', period: '2005',
        summary: '在 Prado 拍摄时，Struth 觉得不能再重复“从背后看观众看画”的旧结构，于是把自己放到人群中间，并裁掉部分画面，让现实观众与 Velázquez 画中人物更紧密地挤进同一空间。',
        actions: ['长期争取 Prado 拍摄许可', '以 Las Meninas 为核心研究对象', '从画前后方机位改为进入观众群中央', '让历史绘画部分出框 / 被裁切', '等待现实人物与画中人物发生姿势 / 目光对应', '以此作为 Museum Photographs 的收束节点'],
        sourceUrl: 'https://www.thomasstruth32.com/bigsize/photographs/museo_del_prado/index.html', images: [], relations: []
      },
      {
        title: 'New Pictures from Paradise', cluster: 'forest / visual density / no hierarchy / large-format landscape', period: '1998–2007',
        summary: '1998 起在澳大利亚、中国、日本、德国、巴西、秘鲁和美国拍摄森林。大多数画面故意不给地平线、中心或明确进入路径，使视线面对极高密度、难以分类的自然信息。',
        actions: ['提前研究全球森林 / 雨林地点', '在旅行中勘察可形成“无中心”画面的区域', '把相机正对密集植被而非寻找经典远景', '使用大画幅彩色摄影', '减少拍摄数量，更多依赖现场直觉', '以巨大尺幅让观众面对接近一整面“自然屏幕”'],
        sourceUrl: 'https://www.thomasstruth32.com/bigsize/photographs/new_pictures_from_paradise/index.html', images: [], relations: []
      },
      {
        title: 'Audience', cluster: 'spectator / museum / gaze without artwork', period: '2004',
        summary: '从 Museum Photographs 进一步把相机转向观众正面：作品不再一定把被观看的名画纳入画面，而直接研究人群在观看艺术时脸部、身体和注意力如何形成一种集体肖像。',
        actions: ['在博物馆 / 教堂等观看场所设置相机', '从作品一侧朝向观众拍摄', '让多人同时处于观看状态', '保留不同人物视线方向和注意力强度', '以大尺幅输出群体观看行为'],
        sourceUrl: 'https://www.guggenheim-bilbao.eus/en/exhibitions/thomas-struth', images: [], relations: []
      },
      {
        title: 'Nature & Politics / technology sites', cluster: 'science / industrial systems / restricted access', period: '2007–现在',
        summary: '进入 CERN、Max Planck、造船厂、航天 / 医疗 / 核融合等复杂技术现场，拍摄公众通常无法进入的机器内部。作品把越来越不可见、却决定现代生活的技术基础设施重新拉到可观看尺度。',
        actions: ['研究复杂科技 / 科研机构', '向机构申请进入许可', '进入实验室、船厂、航天与高技术设施', '使用现场已有光线而非大规模人工布光', '寻找能让管线、机器和控制系统保持可读的构图', '用高细节大尺幅摄影记录人造复杂度'],
        sourceUrl: 'https://thomas-struth.com/', images: [], relations: []
      },
      {
        title: 'Density and relational looking', cluster: 'meta-method / comparison / viewer movement', period: '1977–现在',
        summary: '从街道、家庭到森林和机器，Struth 的连续方法不是同一种题材，而是构造“复杂关系场”：观众必须在整体秩序与局部信息之间移动，并意识到人、建筑、制度、自然和技术彼此塑造。',
        actions: ['为每一类题材建立一套稳定拍摄规则', '持续跨地点重复同一规则', '利用大画幅保持极高细节', '避免过度戏剧化灯光', '让观众通过远近移动自行建立关系与比较'],
        sourceUrl: 'https://www.guggenheim-bilbao.eus/en/exhibitions/thomas-struth', images: [], relations: []
      }
    ],
    awards: [],
    exhibitions: ['Thomas Struth: Figure Ground — Haus der Kunst 2017 / Guggenheim Bilbao 2019'],
    sources: [
      { label: 'Thomas Struth official website', url: 'https://thomas-struth.com/' },
      { label: 'Thomas Struth retrospective archive', url: 'https://www.thomasstruth32.com/' },
      { label: 'Family Portraits archive', url: 'https://thomasstruth32.com/smallsize/photographs/family_portraits_1/index.html' },
      { label: 'New Pictures from Paradise', url: 'https://www.thomasstruth32.com/bigsize/photographs/new_pictures_from_paradise/index.html' },
      { label: 'Guggenheim Bilbao survey', url: 'https://www.guggenheim-bilbao.eus/en/exhibitions/thomas-struth' }
    ]
  },
  'bernd-hilla-becher': {
    artistId: 'bernd-hilla-becher',
    projectCoverage: '7 个工业类型学 / 拍摄规则节点已建立深度档案 · 1959–2007',
    imageCoverage: '1 / 7 项目已有代表图像',
    note: '重点不是“拍工业建筑”，而是他们如何发明可比较的视觉测量法：同类功能、相近距离、正面 / 轻微高视点、阴天漫射光、无人背景、大画幅黑白、网格并置。每个类型都依赖严格重复规则。',
    projects: [
      {
        title: 'Industrial typology method', cluster: 'large-format / flat light / frontal comparison / grid', period: '1959–2007',
        summary: '四十多年持续在欧洲和美国记录即将消失的工业结构。MoMA 对其方法概括非常明确：正面、均匀灰背景、大画幅相机、细颗粒黑白胶片，再按功能分类成网格，使结构之间可以直接比较。',
        actions: ['先按功能确定一个结构类型', '跨地区寻找该类型的多个实例', '尽量在阴天 / 漫射光下工作', '选择正面或能清晰呈现整体结构的机位', '减少人物、车辆与强烈天气干扰', '使用大画幅相机与细颗粒黑白胶片', '统一放大比例与纸面', '按类型网格并置'],
        sourceUrl: 'https://www.moma.org/calendar/exhibitions/95', images: [], relations: []
      },
      {
        title: 'Water Towers', cluster: 'typology / water infrastructure / morphological variation', period: '1960s–1988+',
        summary: '水塔是最具代表性的类型之一。相同功能在不同地区产生球形、圆柱、锥形、框架式等形态；严格统一的拍法把“个体建筑”转成可比较的形态学。',
        actions: ['跨地区寻找不同水塔', '保持结构完整位于画面中央', '使用平坦阴天光减少阴影', '统一大画幅黑白技术', '选择 9 / 12 / 15 张等数量组成网格', '通过并排而非文字说明强调相似与差异'],
        sourceUrl: 'https://www.moma.org/collection/works/49624',
        images: [img('https://cdn.mos.cms.futurecdn.net/ezFniuKsnnb5TpuiqMGouV.jpg', 'Water Towers — typology grid', '© Estate Bernd & Hilla Becher', 'https://www.moma.org/collection/works/49624', 'MoMA / project context')],
        relations: [rel('收藏', 'MoMA', 'Water Towers, 1988')]
      },
      {
        title: 'Winding Towers', cluster: 'mining / typology / long-term comparison', period: '1966–1997',
        summary: '矿井卷扬塔跨三十多年拍摄。MoMA 的九张组合显示同一工业功能如何通过材料、支架和几何形式出现大量变体；时间跨度被统一拍法压平。',
        actions: ['持续几十年寻找矿井卷扬塔', '记录退役 / 拆除前的结构', '保持相似视点与气候条件', '统一打印规格', '从长期档案中选择可形成形态比较的一组'],
        sourceUrl: 'https://www.moma.org/collection/works/136060', images: [],
        relations: [rel('收藏', 'MoMA', 'Winding Towers, 1966–97')]
      },
      {
        title: 'Blast Furnaces', cluster: 'steel production / industrial monument / serial archive', period: '1960s–1990s',
        summary: '高炉体量巨大且结构复杂，Bechers 仍以近似“物证照”的方式控制机位和光线，使其从工业现场脱离出来成为可被阅读的结构类型。',
        actions: ['进入大型钢铁工业区', '寻找能完整看到高炉轮廓的位置', '等待平坦光线', '用大画幅相机高细节记录管道、支架与炉体', '跨工厂重复拍摄', '按功能分类形成序列'],
        sourceUrl: 'https://www.moma.org/calendar/exhibitions/95', images: [], relations: []
      },
      {
        title: 'Framework Houses', cluster: 'vernacular architecture / frontal elevation / regional type', period: '1959–1970s',
        summary: '类型学方法并不限于重工业。德国等地木构住宅也被以正面、无人、近似建筑立面图的方式记录，使民居与水塔共享同一种“比较工具”。',
        actions: ['寻找特定地区木构住宅', '尽量正对立面', '减少透视夸张', '等待无强烈阴影的天气', '统一黑白打印', '按建筑结构差异编组'],
        sourceUrl: 'https://www.moma.org/artists/512-bernd-becher', images: [], relations: []
      },
      {
        title: 'Landscapes / industrial regions', cluster: 'context / landscape / industrial ecology', period: '1960s–2000s',
        summary: '除单体类型学外，他们也拍更广的工业景观，把矿区、钢厂、住宅和基础设施放回区域关系。MoMA 2008 展览专门把 Landscape 与 Typology 并置，显示“对象”与“环境”是同一档案的两个尺度。',
        actions: ['从单个结构退到更远视点', '记录工业设施与周边地形 / 居住区关系', '保持黑白和清晰度', '用系列与单体类型图形成尺度对照'],
        sourceUrl: 'https://www.moma.org/calendar/exhibitions/95', images: [],
        relations: [rel('展览', 'Landscape/Typology — MoMA', '2008')]
      },
      {
        title: 'Typology as comparative instrument', cluster: 'meta-method / archive / disappearance / classification', period: '1959–2007',
        summary: '他们并不是为了证明“所有工业建筑都一样”。严格重复拍法反而让差异变得更明显：当背景、光线、角度和尺度被控制后，形态变化不再被摄影风格遮盖。',
        actions: ['把摄影变量尽量标准化', '按功能而非审美趣味分类', '保存即将消失的工业结构', '用网格而不是单张英雄图建立比较', '让观众自行读取相似 / 差异'],
        sourceUrl: 'https://www.moma.org/collection/works/49624', images: [], relations: []
      }
    ],
    awards: ['Golden Lion for Sculpture — Venice Biennale 1990'],
    exhibitions: ['Bernd and Hilla Becher: Landscape/Typology — MoMA 2008'],
    sources: [
      { label: 'MoMA — Landscape/Typology', url: 'https://www.moma.org/calendar/exhibitions/95' },
      { label: 'MoMA — Water Towers', url: 'https://www.moma.org/collection/works/49624' },
      { label: 'MoMA — Winding Towers', url: 'https://www.moma.org/collection/works/136060' }
    ]
  },
  'cindy-sherman': {
    artistId: 'cindy-sherman',
    projectCoverage: '8 个角色 / 图像文化节点已建立深度档案 · 1975–2010s',
    imageCoverage: '1 / 8 项目已有代表图像',
    note: '按实际角色制造流程整理：参考某类大众图像 → Sherman 同时担任模特、摄影师、化妆、发型、服装和布景 → 使用假发、假体、道具和背景造出“似曾相识但不存在原作”的角色。重点不是自拍，而是制造图像类型。',
    projects: [
      {
        title: 'Untitled Film Stills', cluster: 'film still / stereotype / self-performance / small black-and-white print', period: '1977–1980',
        summary: 'MoMA 完整收藏的 69 张黑白系列。Sherman 不重拍具体电影，而是调用 1950–60 年代 Hollywood、film noir、B-movie 和欧洲艺术电影的视觉惯例，制造看起来像“来自某部电影”的虚构静帧。',
        actions: ['先确定一种电影女性角色 / 情境', '艺术家自己化妆、换假发和服装', '选择公寓、街道、办公室等现实或简易布景', '安排道具和身体姿势', '使用小尺幅黑白摄影模拟宣传 still', '有时自行触发快门，有时让助手按快门', '不给人物姓名和故事以保持类型开放'],
        sourceUrl: 'https://www.moma.org/calendar/exhibitions/253',
        images: [img('https://www.moma.org/media/W1siZiIsIjE1MjM3MCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg', 'Untitled Film Stills — series context', '© Cindy Sherman', 'https://www.moma.org/calendar/exhibitions/253', 'MoMA')],
        relations: [rel('收藏', 'MoMA', 'complete series acquired 1995')]
      },
      {
        title: 'Centerfolds', cluster: 'magazine format / reclining figure / uncomfortable gaze', period: '1981',
        summary: '原为 Artforum 横跨双页中心跨页委托，12 张都使用约 2×4 英尺横幅。Sherman 利用男性色情杂志 centerfold 的格式，但让人物陷入恐惧、发呆、愤怒等私人心理状态，并避免直接看镜头。',
        actions: ['以杂志 centerfold 横幅比例作为硬规则', '设计可横向展开的躺 / 卧姿势', 'Sherman 自己扮演不同年轻女性', '使用彩色摄影和更大输出', '让人物目光避开镜头', '通过光线 / 姿势制造“观看者闯入私人时刻”的不适'],
        sourceUrl: 'https://www.moma.org/audio/playlist/261/3359', images: [], relations: []
      },
      {
        title: 'Fashion / fairy tales / disasters', cluster: 'fashion commission / grotesque / body fragments / staged debris', period: '1983–1989',
        summary: '从时尚委托逐步转向污物、假体、食物、身体残片和灾难场景。人物有时完全消失，摄影棚仍保持高度人工，但“美的角色扮演”被推到令人反胃的另一端。',
        actions: ['从时尚 / 童话 / 恐怖影像惯例取材', '使用假体、食物、垃圾、液体和人造身体部件', '搭建摄影棚场景', '通过近景和颜色强化触觉 / 腐败感', '故意保留布景人工性'],
        sourceUrl: 'https://www.moma.org/collection/artists/5392', images: [], relations: []
      },
      {
        title: 'History Portraits', cluster: 'old master reproduction / costume / prosthetic / studio tableau', period: '1988–1990',
        summary: '在 Rome 居住时并未去博物馆临摹原作，而是通过艺术史书籍中的复制品工作。Sherman 同时担任模特、set-dresser 和摄影师，用廉价假发、明显假体和夸张化妆模拟 Renaissance、Baroque、Rococo 等旧大师肖像。',
        actions: ['从艺术史书籍 / reproduction 中选择视觉类型', '不追求一比一复原具体名画', '设计历史服装和背景', '佩戴明显乳房 / 鼻子等假体', '使用故意不自然的假发和化妆', '在摄影棚布光并自拍 / 由助手触发', '保留伪装破绽以强调身份是构造物'],
        sourceUrl: 'https://www.moma.org/collection/works/55647', images: [], relations: []
      },
      {
        title: 'Sex Pictures', cluster: 'prosthetic body / pornography / absent artist body', period: '1992',
        summary: 'Sherman 本人身体从画面退场，主要使用医疗 / 色情假体、人体模型和人造性器官搭建露骨场景。与“自拍”距离最大，但仍通过 staging 拆解色情视觉中身体如何被物化和分类。',
        actions: ['搜集人体模型和医疗 / 仿真身体部件', '不再主要依赖真人自我扮演', '在摄影棚安排假体之间的性姿势', '使用彩色近距离摄影', '故意让材料既像身体又明显是假物'],
        sourceUrl: 'https://www.moma.org/collection/artists/5392', images: [], relations: []
      },
      {
        title: 'Head Shots / Hollywood types', cluster: 'portrait studio / aging / failed aspiration', period: '2000–2002',
        summary: '模拟演员试镜 head shot 和廉价商业肖像棚。角色包括衰老 beauty queen、hippie、街头 tough girl 等；统一直视镜头的方式让假发、化妆和人物努力维持年轻 / 成功形象的痕迹更明显。',
        actions: ['设定演员 head-shot / 商业肖像棚格式', '用假发、化妆和服装建立中老年女性角色', '使用相对直接正面机位', '减少复杂场景', '让角色直接看镜头', '通过细节制造“努力维持形象”的脆弱感'],
        sourceUrl: 'https://www.moma.org/audio/playlist/261/3370', images: [], relations: []
      },
      {
        title: 'Clowns / Society Portraits', cluster: 'digital backdrop / makeup / class / aging', period: '2002–2008',
        summary: 'Clowns 用攻击性妆容与 Day-Glo / 数码背景测试“面具下面还有没有稳定人格”；Society Portraits 则扮演富裕、衰老的上流社会女性，以超大尺幅展示妆容、整形感和身份焦虑。',
        actions: ['设计极端妆容、假发与服装', '使用男性 / 女性 / 性别模糊角色', '拍摄人物与背景元素', '在后期加入 / 合成数码背景', 'Society Portraits 使用更大输出尺度', '故意暴露化妆与身份塑造的人工性'],
        sourceUrl: 'https://www.moma.org/calendar/exhibitions/1154', images: [], relations: []
      },
      {
        title: 'Character factory', cluster: 'meta-method / photographer-model-stylist / image codes', period: '1970s–现在',
        summary: 'Sherman 的工作室像一人电影剧组：她自己承担摄影、模特、化妆、发型、造型与道具，并从电影、电视、广告、色情、杂志、艺术史等图像系统中抽取“可识别代码”，但避免复制某张已有图。',
        actions: ['先识别一种大众图像类型而非具体人物', '通过化妆、假发、假体和服装搭建角色', '控制背景、道具和光线', '扮演并观看自己在取景器中的变化', '保留不完美伪装提示人工性', '按系列持续测试同一视觉制度'],
        sourceUrl: 'https://www.moma.org/calendar/exhibitions/1154', images: [], relations: []
      }
    ],
    awards: ['MacArthur Fellowship 1995'],
    exhibitions: ['The Complete Untitled Film Stills — MoMA 1997', 'Cindy Sherman — MoMA retrospective 2012'],
    sources: [
      { label: 'MoMA — Cindy Sherman retrospective', url: 'https://www.moma.org/calendar/exhibitions/1154' },
      { label: 'MoMA — Complete Untitled Film Stills', url: 'https://www.moma.org/calendar/exhibitions/253' },
      { label: 'MoMA — Centerfolds audio', url: 'https://www.moma.org/audio/playlist/261/3359' },
      { label: 'MoMA — History Portrait #228', url: 'https://www.moma.org/collection/works/55647' }
    ]
  },
  'cao-fei': {
    artistId: 'cao-fei',
    projectCoverage: '8 个影像 / 虚拟世界 / 研究项目已建立深度档案 · 2004–2020',
    imageCoverage: '1 / 8 项目已有代表图像',
    note: '按她如何从现实社会现场进入虚拟世界、再回到物流 / 城市考古整理：现场调研与参与式表演、Second Life 造城、微缩模型电影、自动化仓库长期观察、旧电子工业区五年档案研究、VR 复原空间。',
    projects: [
      {
        title: 'Cosplayers', cluster: 'youth / cosplay / Guangzhou / staged-documentary video', period: '2004',
        summary: '让广州年轻 cosplay 参与者穿着动漫 / 游戏角色服装进入城市郊区、施工地和家庭空间。作品不把他们只拍成亚文化肖像，而让幻想角色与急速城市化现实在同一场景碰撞。',
        actions: ['与广州 cosplay 青年合作', '让参与者穿自己角色服装', '带角色进入真实城市、荒地与建设现场', '拍摄半表演 / 半纪录式行动', '再回到人物与家人共同生活的私人空间', '通过剪辑并置幻想和日常'],
        sourceUrl: 'https://www.moma.org/calendar/events/1987', images: [], relations: []
      },
      {
        title: 'Whose Utopia?', cluster: 'factory / worker fantasies / performance / documentary', period: '2006',
        summary: '在 Pearl River Delta 灯具工厂工作。先记录高度重复的生产线，再邀请工人在实际工业环境中表演个人梦想：跳舞、演奏、移动身体，使劳动系统与私人想象短暂重叠。',
        actions: ['进入实际灯具工厂调研', '拍摄流水线和重复劳动', '与工人交流个人兴趣 / 梦想', '邀请工人在工厂内部表演舞蹈、音乐等个人行动', '不搭建独立舞台，直接使用生产环境', '剪辑生产、表演与工厂群体肖像'],
        sourceUrl: 'https://www.moma.org/calendar/exhibitions/4945', images: [], relations: []
      },
      {
        title: 'RMB City', cluster: 'Second Life / avatar / virtual city / participatory project', period: '2007–2011',
        summary: '以 avatar “China Tracy” 进入 Second Life，花数年建造一座完全虚拟的中国城市。城市把 CCTV 大楼、鸟巢、东方明珠、Mao 像、购物中心等现实符号以过量方式重新拼装，并开放给其他用户访问和参与活动。',
        actions: ['创建 Second Life avatar China Tracy', '学习 / 使用 Second Life 建筑工具', '搜集中国现实中的标志性建筑和政治 / 消费符号', '在虚拟土地上搭建整座城市', '设计道路、购物、艺术与公共空间', '邀请其他在线用户进入并举行活动', '用录像、截图、实体装置保存线上城市过程'],
        sourceUrl: 'https://www.moma.org/calendar/exhibitions/4945', images: [], relations: []
      },
      {
        title: 'La Town', cluster: 'miniature model / post-apocalypse / stop-motion-like film set', period: '2014',
        summary: '构造一个虚构灾后城市，以大量微缩模型、商业模型人物、建筑和灯光搭出夜间场景，再通过摄影 / 录像让静态 miniature 像电影城市一样出现。',
        actions: ['搜集 / 制作微缩建筑、人物、车辆和城市道具', '搭建大型 tabletop city sets', '用人工灯光制造夜景和灾难氛围', '移动机位在模型内部拍摄', '加入旁白 / 声音形成 neo-noir 叙事', '通过局部特写让模型尺度暂时难以判断'],
        sourceUrl: 'https://www.moma.org/calendar/events/1987', images: [],
        relations: [rel('展览', '56th Venice Biennale — All the World’s Futures', '2015')]
      },
      {
        title: 'Asia One', cluster: 'automated logistics / warehouse / workers / robots', period: '2018',
        summary: '进入中国高度自动化的物流 / 仓储环境，关注只有少量人类劳动者与机器人系统共同工作的未来日常。作品不是纯科幻布景，而以真实自动化基础设施作为表演和叙事现场。',
        actions: ['研究并进入自动化物流仓库', '拍摄传送、分拣、机器人等真实基础设施', '选择 / 编排少量人物角色', '让人类情感叙事发生在机械系统中', '结合监控式视角、表演与电影剪辑'],
        sourceUrl: 'https://www.serpentinegalleries.org/about/press/cao-fei-blueprints/', images: [], relations: []
      },
      {
        title: 'HX / Hongxia Theatre research', cluster: 'urban archaeology / archive / electronics industry / five-year research', period: '2015–2020',
        summary: '2015 年搬入 Beijing Jiuxianqiao 的 former Hongxia Theatre 后开始五年研究。她像城市考古者一样追踪该区从 1950s 电子工业、第一代中国计算机研发、工厂社区到当代城市更新的历史。',
        actions: ['把旧 Hongxia Theatre 作为工作室和研究起点', '采访当地居民 / 工厂历史相关人物', '收集居民家庭相册', '搜集期刊、机构档案与摄影资料', '研究 Sino-Soviet / DDR 工业合作史', '与建筑、媒体史等研究者协作', '把资料编成 exhibition、film、VR 与 HX 出版物'],
        sourceUrl: 'https://shop.serpentinegalleries.org/products/cao-fei-hx', images: [], relations: []
      },
      {
        title: 'Nova / The Eternal Wave', cluster: 'research fiction / film / VR / reconstructed studio', period: '2019–2020',
        summary: 'Nova 将 Hongxia 区真实电子工业史转成 retro sci-fi 电影；The Eternal Wave 则把 Cao Fei 工作室 / Hongxia Theatre 的家具、档案和空间元素带入 VR，让历史研究变成可进入的虚拟环境。',
        actions: ['从 HX 五年档案研究提取人物 / 技术 / 空间线索', '写作跨过去、现在和未来的科幻叙事', '在真实 / 搭建空间拍摄长片 Nova', '扫描 / 建模 Hongxia Theatre 相关空间与家具', '与 Acute Art 合作制作 VR', '让观众在虚拟空间中穿越档案式场景'],
        sourceUrl: 'https://www.serpentinegalleries.org/whats-on/cao-fei/', images: [],
        relations: [rel('展览', 'Cao Fei: Blueprints — Serpentine Galleries', '2020')]
      },
      {
        title: 'Physical / virtual society model', cluster: 'meta-method / social research / fantasy as analytical tool', period: '2004–现在',
        summary: '从 Cosplayers 到 RMB City、Asia One 和 HX，幻想从来不是现实的逃避：她先进入一个真实社会系统——城市化、工厂、虚拟平台、物流、旧工业区——再让角色扮演、游戏、科幻或 VR 把系统中已经存在但不容易被看见的欲望和未来放大。',
        actions: ['选择正在快速变化的现实社会系统', '现场调研并与实际参与者合作', '决定需要纪录、表演、虚拟造城、模型还是 VR', '构造一个“可能的社会模型”', '让现实材料与幻想叙事持续互相校正', '通过展览把线上 / 电影 / 档案重新转为空间'],
        sourceUrl: 'https://www.moma.org/calendar/exhibitions/4945',
        images: [img('https://www.moma.org/d/assets/W1siZiIsIjIwMTYvMDMvMjgvNmI3emkxNjV4YV9DYW9GZWlfMDQuanBnIl0sWyJwIiwidGh1bWIiLCIxNjAweDEwMDBcdTAwM2UiXV0/CaoFei_04.jpg?sha=bdb07f2dc28f2e8d', 'Cao Fei — MoMA PS1 installation context', '© Cao Fei / installation view', 'https://www.moma.org/calendar/exhibitions/4945', 'MoMA PS1')],
        relations: [rel('展览', 'Cao Fei — MoMA PS1', '2016')]
      }
    ],
    awards: ['CCAA Best Young Artist 2006', 'Hugo Boss Prize finalist 2010'],
    exhibitions: ['Cao Fei — MoMA PS1 2016', 'Cao Fei: Blueprints — Serpentine Galleries 2020'],
    sources: [
      { label: 'MoMA PS1 — Cao Fei', url: 'https://www.moma.org/calendar/exhibitions/4945' },
      { label: 'MoMA — An Evening with Cao Fei', url: 'https://www.moma.org/calendar/events/1987' },
      { label: 'Serpentine — Blueprints', url: 'https://www.serpentinegalleries.org/whats-on/cao-fei/' },
      { label: 'Serpentine — HX', url: 'https://shop.serpentinegalleries.org/products/cao-fei-hx' }
    ]
  }
};