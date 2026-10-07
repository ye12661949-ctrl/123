import type { ArtworkImageReview } from './artworkImageReviewBatch1';

// 逐图重审第二批。仅写入已由一手资料确认的信息；未确认项明确保留为待核实。
export const artworkImageReviewBatch2: Record<string, Record<string, ArtworkImageReview[]>> = {
  'an-my-le': {
    '29 Palms': [{
      title:'Night Operations I, from the series 29 Palms, 2003–04',
      sourceUrl:'https://americanart.si.edu/artwork/night-operations-i-series-29-palms-122992',
      sourceLabel:'Smithsonian American Art Museum',
      whatYouSee:'夜色中的莫哈韦沙漠占据主体，军事行动留下明亮的弧形光迹。人物并不是画面的视觉中心；最先抓住观看者的是黑暗地景与横穿其中的发光轨迹，军事训练因此首先以一种近乎抽象、甚至壮丽的视觉事件出现。',
      artistAction:'Lê 在 Twentynine Palms 海军陆战队训练基地拍摄为战争进行的夜间训练。Smithsonian 对该系列明确指出她保持远距离观看，而不是贴近前线式动作；因此训练人员和军事活动被吸收到大尺度沙漠之中。',
      materialTechnique:'Smithsonian 馆藏记录：2003–2004，printed 2017，gelatin silver print，图像 26 1/2 × 38 in.（67.3 × 96.5 cm），object 2025.22.7。馆方说明画面中的 blazing arcs 来自夜间行动，并称其视觉效果 verge on the sublime。该单作具体镜头、曝光时长以及光迹对应的具体武器/照明设备，当前一手页面未确认，均标记为待核实。',
      projectRole:'它把 29 Palms 中“为未来战争排练”的机制从白天地面部署推进到夜间视觉控制：军事训练不再主要表现为可辨认的士兵动作，而表现为技术活动在黑暗地景里留下的光学痕迹。',
      conceptToImage:'链条可以可靠地写成：美国为伊拉克战争准备→海军陆战队在莫哈韦沙漠进行夜间训练→Lê 保持远距离，把行动压进大尺度地景→夜间军事活动在照片中转化为明亮弧线→银盐黑白输出进一步强化黑暗与光迹的形式对比。这里“训练”确实改变了拍摄时间、可见对象和最终图像结构，而不是只存在于说明文字。',
      withoutStatement:'遮掉标题和说明后，观众仍能直接读到“夜间地景＋异常人工光迹”，所以单图的形式自足性很强；但仅凭画面很难确定这是海军陆战队为伊拉克战争进行的训练，更无法可靠识别弧线由何种具体设备产生。它视觉上成立得越强，政治与制度背景反而越容易被壮丽感遮蔽。',
      sequenceRelation:'与 Infantry Platoon (Machine Gunners) 并读时，人员从白日荒漠中的小尺度身体进一步退到几乎不可辨认；与 Mortar Impact 并读时，一个以烟尘、一个以夜间光迹表现军事行为对地景/视觉场的改写。三者共同说明 Lê 经常不把武器或士兵做成英雄式主体，而拍摄军事系统如何改变空间。该并读为本站批评性结构，不声称是艺术家的固定排序。',
      critique:'这张作品的强处也是风险所在。Smithsonian 自己使用 verge on the sublime 来描述这些光弧，说明“军事训练被审美化为壮丽夜景”并非外加的牵强批评。概念—动作—图像确实闭合，但闭合后生成的视觉快感可能强到让观众忘记训练的现实战争目的。若网站只展示图片而弱化系列关系，它尤其容易退化成漂亮的长曝光式夜景。',
      verdict:'最强：训练行为真正改变拍摄时间、可见对象与图像结构，军事系统以光迹而不是口号进入照片。最弱：形式上的 sublime 极具吸引力，可能把战争准备重新包装成视觉奇观；具体光迹技术来源目前也不能在没有证据时擅自命名。'
    }]
  }
};
