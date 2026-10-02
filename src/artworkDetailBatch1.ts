export type ArtworkDetailPatch = {
  materials: string[];
  process: string[];
  display: string;
  viewing: string;
  significance: string;
  sourceNotes: string[];
};

export const artworkDetailBatch1: Record<string, Record<string, ArtworkDetailPatch>> = {
  'laia-abril': {
    'On Abortion': {
      materials: ['摄影与档案图像', '历史物件与医疗 / 非法堕胎工具的再摄影', '文字证词与研究文本', '声音材料', '展览墙面与陈列结构', '2018 摄影书：精装，196 页，114 幅彩色与双色图版，245 × 188 mm'],
      process: ['先从“无法获得安全合法堕胎会造成什么后果”建立研究问题，而不是先拍一组统一风格的照片。', '跨历史与当代案例搜集法律、医疗、宗教和社会证据，再判断哪些材料需要重新拍摄、哪些保留为档案或文本。', '把非法器具、场所、人物经验、历史记录、声音和文字并置，使单张照片不承担全部叙事。', '项目先以 2016 Les Rencontres d’Arles 空间装置首展，之后持续适配不同机构空间；2018 再由 Abril 与 Ramon Pez 共同进行书籍艺术指导，把空间中的证据网络压缩为 196 页书籍序列。'],
      display: '展览版不是传统等距挂照片：摄影、文本、物件/档案和声音共同组成证据环境，并会随展场重新编排。已确认的重要版本包括 Arles 2016、MoCP Chicago 2021、Centre Pompidou 2023–24 等。摄影书则以 114 幅彩色与双色图版重新建立阅读顺序。',
      viewing: '观众需要在不同证据类型之间来回移动：先看到物件或图像，再通过文字、案例和声音改变对它的理解。观看更接近阅读调查档案，而不是寻找一张“决定性照片”。',
      significance: '这个项目最值得研究的是媒介分工：Abril 不把创伤直接视觉化，而让制度、工具、法律与证词成为主体。对研究型摄影而言，它提供了“问题—调查—材料分类—空间/书籍编排”的完整工作链。',
      sourceNotes: ['Laia Abril 官方项目与展览档案：On Abortion 2016 起作为 A History of Misogyny 第一章。', 'Laia Abril 官方书籍页：Dewi Lewis 2018，196 pages / 114 colour and duotone plates / 245 × 188 mm。']
    },
    'On Rape': {
      materials: ['颜料喷墨打印（pigment inkjet print）', 'Hahnemühle 纸', '概念肖像', '档案与制度文本', '证词', '展览装置'],
      process: ['项目由对强奸文化及其制度性维持机制的长期研究展开，把视觉焦点从受害者身体移向施暴者、法律、信念与机构。', '制作 Ala Kachuu, Bride Kidnapping, Kyrgyzstan；Church Rape, Argentina；Military Rape, U.S. 等概念肖像，让具体案例成为进入制度结构的节点。', '把图像与文件、证词并置，追踪战争中的强奸、施暴者免罪以及司法程序中的再次伤害。', '不同机构版本重新组织作品关系；2024 C/O Berlin 由 Sophia Greiff 策展，2025 Moderna Museet 又把该项目与 Emily Jacir、Teresa Margolles 的作品置于对话中。'],
      display: '已确认的 Reina Sofía 馆藏展示作品采用 Hahnemühle 纸上的 pigment inkjet print。展览版本会把概念肖像、文件和证词组合为空间叙事，而非固定为单一照片组。',
      viewing: '观众不是被要求凝视受害者，而是沿着一件件案例去辨认法律、军队、宗教和社会信念如何构成暴力条件；观看方向因此从“发生了什么”转向“什么结构让它持续发生”。',
      significance: '它清楚展示 Abril 如何用摄影改变伦理焦点：减少对受害者创伤的再消费，把视觉注意力转向制度责任。对项目创作尤其重要的是“拍谁/不拍谁”本身被当作方法论决定。',
      sourceNotes: ['Museo Reina Sofía 2026 permanent collection 页面明确列出三件作品标题与媒介：Pigment inkjet print on Hahnemühle paper。', 'Laia Abril 官方 C/O Berlin 2024 与 Moderna Museet 2025 展览档案用于核对不同展览版本。']
    }
  },
  'daisuke-yokota': {
    'Nocturnes': {
      materials: ['既有照片/印相', '胶片', '暗房化学显影', '扫描', 'Photoshop 图层'],
      process: ['不是直接把拍摄底片作为终点，而是先重拍已经存在的照片。', '在胶片处理阶段主动改变显影时间，让化学过程产生不可完全预测的痕迹。', '再把结果扫描进入数字流程，并在 Photoshop 中进行多层叠加。', '最终图像因此包含拍摄、再摄影、化学处理、扫描与数字合成多个时间层。'],
      display: '该系列以黑白摄影图像为基础进入出版与展览；Foam 对其制作链有明确记录。',
      viewing: '观看时很难把图像还原成一个稳定的“原始场景”；颗粒、重影和层叠提示观众注意图像经历过多少次转译。',
      significance: 'Nocturnes 是理解 Yokota 的关键：摄影的核心不再是快门瞬间，而是之后不断复制、延迟和损耗的过程。Foam 将其方法与电子音乐中的 echo、delay、reverberation 类比。',
      sourceNotes: ['Foam artist archive 明确记录：rephotographs existing prints → changes developing time → scans → layers in Photoshop。']
    },
    'Site / Cloud': {
      materials: ['数码摄影', '传统胶片', '再摄影', '复印/photocopy', 'Photoshop', '家庭临时暗房与化学处理'],
      process: ['把数字摄影与传统胶片混合使用，并反复拍摄、再拍摄同一图像。', '继续用复印与 Photoshop 改写图像，不把任何一次输出视为最终版本。', '在公寓搭建临时暗房，自由改变模拟化学过程，让偶然痕迹进入作品。', '每一次处理得到的结果又成为下一次处理的输入，因此图像不断远离最初对象。'],
      display: '2014 Foam 个展把这些经过多次模拟/数字转译的图像放入展览空间；官方保留了 Site/Cloud installation view。',
      viewing: '观众面对的不是“一个对象的照片”，而是一条无法完全逆推的处理历史；视觉上的雾化、失真和重复对应时间被延迟、回响的感觉。',
      significance: 'Site / Cloud 把模拟与数字流程从对立关系变成连续链条，是理解 Yokota 如何把电子音乐的时间结构转译到摄影中的重要案例。',
      sourceNotes: ['Foam Site/Cloud 2014 exhibition archive 记录 digital photography + traditional film + re-shoot + photocopying + Photoshop + improvised darkroom。']
    },
    'Matter': {
      materials: ['直接曝光的胶卷及其放大输出', '蜡（现场处理）', '暗房化学实验形成的负片畸变', '墙面投影', '打印机与现场持续输出', '被焚烧的装置照片/材料', '录像（与 Tomoko Mukaiyama 现场合作版本）'],
      process: ['把一卷胶片直接曝光，不经相机成像，再将其放大成很长的带状输出，穿过展厅铺挂，并在现场上蜡。', '另一空间把非标准暗房显影产生的化学畸变投射到墙上，同时让打印机缓慢把这些负片畸变持续打印出来，使“生成”本身成为展览时间。', 'Matter / Burn Out 中，他在中国一处废弃工地焚烧自己的装置打印物；随后拍摄烧毁后的物质堆。', '这些记录图像又被回收进入 Matter / Vomit，形成新的独立装置，使“图像—物质—破坏—再图像化”形成闭环。'],
      display: 'Foam 2017 展览由三个房间尺度的装置组成，每个房间都让摄影以不同物质状态出现。长条输出不是挂在墙上观看，而是像材料一样穿过空间；另一房间同时发生投影与缓慢打印。开幕周末的 In a Landscape 版本还让钢琴成为装置的一部分，Yokota 为现场制作新录像。',
      viewing: '观众必须绕行、经过、等待打印发生，并面对蜡、烧焦物、胶片与投影的体积和触觉感。摄影从墙上的矩形窗口变成需要身体进入的材料事件。',
      significance: 'Matter 把 Yokota 早期“处理图像”的方法推进到“处理摄影材料本身”。它尤其适合研究摄影如何从平面作品转成空间装置，以及破坏、复制和再循环怎样成为制作步骤。',
      sourceNotes: ['Foam 2017 Matter 官方展览页详细记录三组 room-filling installations、直接曝光胶卷放大物现场上蜡、墙面投影与打印机、Burn Out / Vomit 的焚烧和再循环过程。', 'Foam 2017 In a Landscape 活动页记录钢琴进入装置以及 Yokota 新录像的单晚现场版本。']
    }
  },
  'lebohang-kganye': {
    'Ke Lefa Laka: Her-Story': {
      materials: ['家庭相册与旧照片', '艺术家自我表演/再扮演', '摄影蒙太奇', '数字合成与分层'],
      process: ['从母亲与家庭相册中的既有照片出发，把私人档案当作可重新进入的场景，而不是只做历史展示。', '艺术家以自己的身体重新表演母亲照片中的姿势、服装关系和家庭空间。', '再把当下拍摄的自身形象与旧家庭照片组合，使母女两个时间层在同一画面中相遇。', 'Setshwantso le ngwanaka II、Habo Patience ka bokhathe II 等具体作品由此成为“现在的身体进入过去档案”的实例。'],
      display: '作品可作为摄影蒙太奇独立展示，也在后续大型展览中与她的剪影、动画、空间装置和纺织作品并置，使家庭档案成为整个实践的起点。',
      viewing: '观众一开始可能把画面理解为同一时间拍摄的家庭照片，随后会意识到人物来自不同年代；这种时间错位迫使观看者重新思考照片所谓的“过去已经发生”。',
      significance: '她没有把家庭相册当作不可改变的证据，而是把身体放回档案中主动改写继承关系。这个动作对处理家族史、身份和私人档案的项目非常可借鉴。',
      sourceNotes: ['Foam 2022/23 展览与 press archive 将 Ke Lefa Laka: Her-Story 明确归为 photographic montages，并列出 Setshwantso le ngwanaka II、Habo Patience ka bokhathe II 等作品。']
    },
    'Haufi nyana? I’ve come to take you home': {
      materials: ['摄影蒙太奇', '空间装置 / scenography', '剪影与纸质/平面人物结构', '电影动画', 'patchwork 纺织拼接'],
      process: ['把早期家庭档案方法扩展为多媒介空间：摄影不再单独挂墙，而与舞台化空间、动画和纺织拼接共同出现。', 'Mohlokomedi wa Tora（2018）把摄影人物转化为空间装置/布景式场景；Shadows of Re-Memory（2021）继续把人物与记忆推进动画时间；Mosebetsi wa Dirithi（2022）则把记忆关系转成 patchwork。', '这些作品被组织在同一展览中，让家庭微观史与南非殖民、种族隔离和迁徙历史相互穿透。'],
      display: 'Foam 的 Haufi nyana? 展览强调多种展示语言并置：photographic montages、spatial installations/scenography、film animation 与 patchwork。观众不是按单一照片序列阅读，而是在不同材料和尺度间移动。',
      viewing: '观看者从二维家庭图像进入近似舞台/剪影剧场的空间，再转向运动影像和纺织物；记忆因此表现为不断换媒介、换形态的东西。',
      significance: '这一阶段说明 Kganye 的核心不是某种固定摄影风格，而是“档案怎样被重新演出”。她把同一历史材料连续翻译成照片、空间、动画和纺织物，提供了从摄影项目扩展到装置的清晰路径。',
      sourceNotes: ['Foam press archive 明确列出 photographic montages (Ke Lefa Laka), spatial installations/scenography (Mohlokomedi wa Tora), film animation (Shadows of Re-Memory), patchwork (Mosebetsi wa Dirithi)。']
    }
  }
};