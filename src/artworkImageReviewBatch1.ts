export type ArtworkImageReview = {
  title: string; sourceUrl: string; sourceLabel: string;
  whatYouSee: string; artistAction: string; materialTechnique: string;
  projectRole: string; conceptToImage: string; withoutStatement: string;
  sequenceRelation: string; critique: string; verdict: string;
};
export const artworkImageReviewBatch1: Record<string, Record<string, ArtworkImageReview[]>> = {
  'an-my-le': {
    'Viet Nam': [{
      title:'Untitled, Ho Chi Minh City, 1995',
      sourceUrl:'https://www.moma.org/collection/works/55669',
      sourceLabel:'The Museum of Modern Art',
      whatYouSee:'这是一件被纳入 Viêt Nam 回返阶段的黑白城市图像。观看重点不是把城市当异国景观，而是把日常空间放进艺术家离开多年后重新观看出生国的距离之中。',
      artistAction:'Lê 成年后多次返回越南拍摄，没有复原童年记忆，而是在当下地景中工作，让个人记忆与现实地点保持不完全重合。',
      materialTechnique:'MoMA 馆藏记录：1995，gelatin silver print，40.4 × 57.4 cm，object 626.1997。',
      projectRole:'它与 Mekong Delta、Hanoi 等图像共同构成回返的地理序列，让国家不被压缩成单一历史事件，而重新成为城市、乡村和日常地景。',
      conceptToImage:'这里最重要的方法不是附加象征，而是选择冷静的黑白风景语言来抵抗戏剧化回忆。个人历史通过观看位置和系列地理跨度进入图像。',
      withoutStatement:'遮掉说明后，图像仍可作为细致的城市摄影成立，但观众很难仅凭画面知道这是一个离散者的回返；因此这一阶段对标题、序列和艺术家经历的依赖明显。',
      sequenceRelation:'与 1994 Mekong Delta 和 1996 Hanoi 前后阅读时，作品从单一地点变成持续回返的地图，也为后来把历史嵌入地景的长期方法奠定基础。',
      critique:'强处是拒绝把私人创伤表演成视觉奇观；弱处也恰在这里：如果序列与背景不足，单张很容易退回一般性的优质黑白风景。',
      verdict:'最强：观看距离克制，避免把历史经验消费成戏剧性。最弱：单图的概念可见度有限，必须依靠序列才能显出方法。'
    },{
      title:'Untitled, Hanoi, 1996',
      sourceUrl:'https://www.moma.org/collection/works/55664',
      sourceLabel:'The Museum of Modern Art',
      whatYouSee:'另一件回返时期的黑白城市图像，与 Ho Chi Minh City 并列后，地点差异和持续移动本身成为作品内容，而不是寻找一张能够代表整个国家的决定性照片。',
      artistAction:'Lê 在多次返回过程中持续拍摄不同地区，把回返做成时间性的观察，而非一次性的故乡访问。',
      materialTechnique:'MoMA 馆藏记录：1996，gelatin silver print，40.4 × 57.4 cm，object 625.1997。',
      projectRole:'它扩展 Viêt Nam 的地理范围，并证明项目依靠系列关系而非单张象征：不同城市、年份和地景共同承担记忆与现实的落差。',
      conceptToImage:'概念进入图像的方式主要是重复拍摄、地点变化和统一的黑白输出。没有复杂技术包装，意义来自持续回返与编辑。',
      withoutStatement:'单张仍是成立的城市摄影，但离开标题后几乎无法辨认艺术家的个人历史，因此 statement-independent 强度中等。',
      sequenceRelation:'与 Ho Chi Minh City 1995 的相邻阅读产生时间与地点推进；这种系列化地理观察后来延续到她对训练场、海上行动和美国景观的研究。',
      critique:'它提醒我们不要把研究型摄影的价值误认成每张都必须“概念爆炸”。这里真正有效的是累积。但网站展示若只抽一张，就会把方法削弱。',
      verdict:'最强：系列内部的地理和时间累积。最弱：孤立展示时过于依赖背景知识。'
    }],
    '29 Palms': [{
      title:'29 Palms: Infantry Platoon (Machine Gunners), 2003–04',
      sourceUrl:'https://www.moma.org/collection/works/94793',
      sourceLabel:'The Museum of Modern Art',
      whatYouSee:'黑白荒漠景观中，一组海军陆战队机枪手在远距离训练；人物在开阔地貌里显得很小，地景而非士兵占据视觉主导。',
      artistAction:'Lê 获准进入加州 Twentynine Palms 海军陆战队训练场，观察并拍摄为伊拉克、阿富汗部署所进行的军事演练。她没有贴近动作中心，而是从较远位置把人员、训练行为与地形放在同一画面。',
      materialTechnique:'MoMA 馆藏记录：gelatin silver print，67.3 × 96.7 cm。MoMA 研究资料确认 29 Palms 系列使用 5×7 英寸大画幅相机；具体镜头、曝光参数未公开，标记为待核实。',
      projectRole:'这张图把“战争之前的排演”具体化：加州沙漠在训练制度中被当作中东地形的替身，士兵则在真实部署前重复未来战争动作。',
      conceptToImage:'概念不是靠文字附会：地点本身被军事系统转换成替代地形；远距离机位和大画幅把士兵压进广阔地景，使“训练—舞台—真实战争”的关系直接进入人物尺度与空间结构。',
      withoutStatement:'遮掉标题后仍能读出军事训练与荒漠地景的张力，但无法仅凭画面知道这里正在模拟中东，也不知道人员将被部署到伊拉克或阿富汗；制度层意义仍依赖背景资料。',
      sequenceRelation:'与 Colonel Greenwood、Mortar Impact 并读时，可形成“观察/指挥—人员部署—武器作用于土地”的分析链；这是本站的批评性并读，并非艺术家声明的固定三联画顺序。',
      critique:'强处是训练制度真的改变了地点、人物动作和图像尺度，研究与最终图像相连。弱处是若脱离地点知识，它也可能被读成传统宏大军事风景，政治结构不会自动显现。',
      verdict:'最强：真实训练行为与替代地景共同构成图像，不靠象征物硬撑概念。最弱：中东模拟与部署背景无法从单图独立推出。'
    },{
      title:'29 Palms: Mortar Impact, 2003–04',
      sourceUrl:'https://www.moma.org/collection/works/94794',
      sourceLabel:'The Museum of Modern Art',
      whatYouSee:'画面几乎没有直接可见的人：荒漠和山体占据主体，多股迫击炮冲击形成的烟尘从地面升起；前景左侧还能看到小型容器或物件。视觉效果安静、细密，甚至接近烟火景观。',
      artistAction:'Lê 在真实军事演练中保持距离，记录迫击炮训练作用于地面的结果，而不是追随发射者或拍摄近距离战斗动作。',
      materialTechnique:'MoMA 馆藏：gelatin silver print，67.3 × 96.7 cm。MoMA 出版研究确认系列采用 5×7 英寸大画幅相机，并指出 Lê 严格尊重底片、避免严重拍后修改；具体曝光和暗房参数未公开。',
      projectRole:'它把人的军事行为转换成土地上的物理痕迹，是 29 Palms 中最清楚地让“战争排演”与风景摄影发生冲突的一张核心图像。',
      conceptToImage:'“战争如何进入地景”在这里形成完整链条：真实迫击炮动作→地面冲击与烟尘→摄影者保持距离→大画幅保存地景细节→黑白银盐输出。概念确实进入制作，而非只存在于 statement。',
      withoutStatement:'即使遮掉说明，它仍是一张视觉上强烈的荒漠爆炸图；问题恰在于观众可能首先把它消费成壮丽景观，而不知道这是训练基础设施。单图成立，但政治指向并不自足。',
      sequenceRelation:'与 Machine Gunners 的人员训练相比，它把人从画面中移除，只保留军事行为留下的效果；与 Colonel Greenwood 并读，则从观看、部署推进到土地被武器改变。',
      critique:'MoMA 的研究文本本身注意到结果近乎 pyrotechnic。作品最有价值的矛盾是：它试图重新观看军事系统，同时也把爆炸审美化。系列语境能部分抵抗这种壮丽化，但不能完全解决。',
      verdict:'最强：概念—军事动作—土地变化—摄影距离—图像结构真正闭合。最弱：形式美可能反过来吞掉政治结构，使训练成为漂亮的荒漠奇观。'
    },{
      title:'Colonel Greenwood, 2003–04',
      sourceUrl:'https://carnegieart.org/exhibition/an-my-le/',
      sourceLabel:'Carnegie Museum of Art',
      whatYouSee:'一名穿军事装备的军官坐在岩石荒漠中，用双筒望远镜观察远方；人物没有占满画面，观看动作和地貌同时成为主题。',
      artistAction:'Lê 拍摄训练中的军官，但不把镜头推向英雄式肖像，而是保留人物与训练地形之间的距离，让“观看/侦察”本身成为可见动作。',
      materialTechnique:'Carnegie 官方展览页确认作品属于 29 Palms、2003–04，并提供图像与题名；该页面未公布此单作尺寸、相纸和独立相机参数，因此这些信息明确标记为待核实，不能套用其他 MoMA 馆藏作品规格。',
      projectRole:'这张图让军事系统中的“观看”成为具体动作：在开火和部署之前，地形先被观察、判断和军事化阅读。',
      conceptToImage:'人物使用望远镜的动作与 Lê 自己保持距离的摄影方式形成镜像：军官远看训练地形，摄影者也从侧面、远处观看军事系统。Carnegie 引述 Lê 将自己的方法描述为更 slippery 的 side-glance view。',
      withoutStatement:'遮掉说明后仍能读出军事人物、望远镜和荒漠的关系，因此单图视觉逻辑较强；但具体基地、战争准备和艺术家个人战争经验仍不能从图像独立推出。',
      sequenceRelation:'与 Machine Gunners、Mortar Impact 并读可把军事景观拆成观看/指挥、部署、冲击三个不同动作；该排序是本站分析方法，不声称为作者原始顺序。',
      critique:'它比直接拍摄武器更含蓄：权力首先表现为观看和组织空间。但“望远镜=权力凝视”也很容易被理论化过度；真正有效的是人物尺度、真实训练环境和观看动作同时存在，而不是抽象的凝视术语。',
      verdict:'最强：一个非常普通的训练动作把观看、地形和军事组织连起来。最弱：若把望远镜过度符号化，批评会比图像本身走得更远。'
    }]
  }
};