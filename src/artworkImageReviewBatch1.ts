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
    }]
  }
};