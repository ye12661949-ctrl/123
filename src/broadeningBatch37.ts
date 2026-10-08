import type { Artist } from './data';

// Source audit: research/updates/2026-10-09-broadening37.md
export const broadeningBatch37: Artist[] = [
  {
    id: 'corey-escoto', name: 'Corey Escoto', born: '1983', base: 'Texas, United States',
    intro: '出生于 Amarillo, Texas 的摄影与装置艺术家，以 4×5 inch Polaroid、机内遮光模板、多重曝光和严格计量的光线制作不可复制的抽象图像。他把一次快门被想象成“瞬间”的摄影观念拆开，让纸张、化学、曝光顺序和 stencil 的物理限制共同构成几何物体与建筑幻象。',
    methods: ['4×5 Polaroid', '机内 stencil', '多重曝光', '计量光线', '无底片单件制作'],
    subjects: ['photographic representation', '图像唯一性', '数字复制时代', '几何幻象', '时间与曝光', '消费文化'],
    outputs: ['即时摄影单件', '抽象摄影', '装置', '展览'],
    institutions: ['Aperture', 'Contemporary Art Museum St. Louis', 'Texas Biennial', 'Washington University in St. Louis'],
    achievements: ['Aperture Portfolio Prize runner-up 2013', 'Great Rivers Biennial artist 2008', 'Gateway Foundation Grant', 'Texas Biennial 2007'],
    whyImportant: '关注理由：Escoto 没有把 Polaroid 当成怀旧外观，而把“没有底片、没有文件、无法再版”的技术条件变成作品价值结构。几何图形看似数字设计，实际由多次遮挡和曝光逐层积累；这种制作时间与最终平滑表面之间的冲突，使摄影的唯一性问题真正进入物质过程。',
    projects: [{
      year: '2011–2013', title: 'Experiments with Polaroids', type: '机内模板、多重曝光与唯一摄影对象／Aperture Portfolio Prize 2013',
      facts: ['系列使用 4-by-5-inch Polaroid film、in-camera light-blocking stencils 与 multiple exposures，在柔和色彩渐变中构造极简几何。', 'House of Cards 的三层纸牌由三角形和平行四边形组成，这些碎片通过 view camera 焦平面上的遮光模板逐次曝光形成。', '作品没有 negative、plate 或 digital file；每一件都是 chemistry、paper 与 light 的唯一组合，不能由原始文件再次输出。'],
      reading: '解读：画面先承诺一个悬浮物体，随后 stencil 边界把它拆回曝光程序。技术说明会增强理解，但作品并不完全依赖说明：纸牌般脆弱的结构、均匀渐变和微小偏差已经让“完美数字图形”显出手工试错的时间。'
    }], images: [], sourceLabel: 'Aperture — Corey Escoto: Experiments with Polaroids', sourceUrl: 'https://aperture.org/editorial/2013-portfolio-prize-runner-up-corey-escoto/'
  },
  {
    id: 'eva-stenram', name: 'Eva Stenram', born: '出生年份未公开', base: 'London, United Kingdom / Stockholm, Sweden',
    intro: 'Stockholm 出生、居住于 London 的摄影艺术家，以 1950–60 年代 pinup 照片、数码重构、裁切、复制和遮挡研究欲望图像的 domestic staging。她把原本作为背景的窗帘向前移动，让模特身体只剩手臂、腿或局部轮廓，使观看者既被邀请窥视，又被图像自身的布景拒绝。',
    methods: ['found photography', '数字重构', '背景前置', '裁切与遮挡', '挪用'],
    subjects: ['pinup culture', 'male gaze', 'eroticism', 'domestic interior', 'public and private', '图像历史'],
    outputs: ['摄影系列', '数字拼接', '摄影书', '展览'],
    institutions: ['Aperture', 'Victoria and Albert Museum', 'Open Eye Gallery', 'Seoul Museum of Art', 'Royal College of Art'],
    achievements: ['Aperture Portfolio Prize runner-up 2013', 'Rencontres d’Arles Discovery Award nominee 2012', 'Hyères International Photography Competition finalist 2013', 'Aperture magazine issue 212 portfolio'],
    whyImportant: '关注理由：Stenram 的挪用不是简单遮住色情图像，而是调换布景与身体的等级：原来服务于观看的 curtain 变成控制可见性的主体。观众仍能从裸露肢体重建欲望场景，却无法获得完整人物；作品因此让窥视、缺席和图像所有权同时发生。',
    projects: [{
      year: '2011–2013', title: 'Drape', type: '复古 pinup、数字遮挡与 domestic gaze／Aperture Portfolio Prize 2013',
      facts: ['系列使用 1950s and 1960s found photographs，将 mid-century domestic pinup portrait 作为原始材料。', '艺术家以数字方式让原本处于人物之后的窗帘向前覆盖身体，只保留 arms and legs 从布景边缘伸出。', 'Aperture 将该动作描述为把 backdrop 转成 barrier，混淆 erotic / fetishistic 与 public / private space；系列随后刊于 Aperture magazine Fall 2013。'],
      reading: '解读：窗帘既是住宅装饰、摄影棚背景，也是审查屏障；同一块布同时制造和取消情色观看。局部肢体仍保留原图的诱惑，因此作品并非道德化抹除，而是让观众意识到自己如何主动补齐被挡住的身体。'
    }], images: [], sourceLabel: 'Aperture — Eva Stenram: Drape', sourceUrl: 'https://aperture.org/editorial/2013-portfolio-prize-runner-up-eva-stenram/'
  },
  {
    id: 'pacifico-silano', name: 'Pacifico Silano', born: '出生年份未公开', base: 'New York, United States',
    intro: 'New York 的酷儿摄影艺术家，以 vintage gay magazines、色情印刷品、再摄影、折页、撕裂与遮蔽研究 pre-AIDS queer desire、失去的一代和图像的物质传播。他不把旧杂志当透明档案，而保留订书钉、折角、纸张磨损和缺失部位，让私人消费痕迹进入公共历史。',
    methods: ['酷儿印刷档案', '再摄影', '折叠与撕裂', '局部遮蔽', '摄影装置'],
    subjects: ['queer desire', 'AIDS crisis', 'gay print culture', 'memory and loss', 'pornography', '私人消费'],
    outputs: ['摄影系列', '摄影书', '墙面装置', '展览'],
    institutions: ['Aperture', 'Bronx Museum', 'Andy Warhol Museum', 'Museum of Sex', 'Houston Center for Photography'],
    achievements: ['Aperture Portfolio Prize runner-up 2013', 'Aaron Siskind Foundation Individual Photographer Fellowship 2012', 'Pride Photo Award first prize', 'Paris Photo–Aperture PhotoBook Awards shortlist 2021'],
    whyImportant: '关注理由：Silano 把色情图像的重复消费与 AIDS 造成的历史断裂放在同一物质表面。折角和撕口既遮挡身体，也证明杂志曾被拿取、翻阅和隐藏；欲望没有被简化成解放或创伤，而以私人迷恋、公共记忆和代际缺席互相纠缠。',
    projects: [{
      year: '2012–2013', title: 'Male Fantasy Icon', type: 'gay porn archive、再摄影与 AIDS 记忆／Aperture Portfolio Prize 2013',
      facts: ['项目挪用 1970s gay porn star Al Parker 的杂志图像，并保留 turned-down edges、staple bindings、torn or crumpled pages 与被移除的图像部分。', '作品强调 Parker 身体与 print / VHS circulation 的物质性，将公开文化对象与私人幻想并置。', 'Parker 与许多同代 gay men 因 AIDS 去世；Silano 出生于 AIDS crisis 并失去一位叔叔，使 pre-AIDS sexual fantasy 与 collective loss 发生个人连接。'],
      reading: '解读：被折起或撕掉的纸页不是形式装饰，而像欲望与哀悼留下的使用痕迹。画面脱离说明仍能呈现遮挡和重复消费，但 AIDS 的代际断裂需要历史语境；最有力之处是材料磨损阻止旧色情图像被再次无摩擦地消费。'
    }], images: [], sourceLabel: 'Aperture — Pacifico Silano: Male Fantasy Icon', sourceUrl: 'https://aperture.org/editorial/2013-portfolio-prize-runner-up-pacifico-silano/'
  },
  {
    id: 'clare-carter', name: 'Clare Carter', born: '出生年份未公开', base: 'South Africa (project context)',
    intro: '以摄影、电影、访谈、警察记录和 NGO 合作开展长期人权纪实的艺术家。她在 South African townships 研究针对 gay men and women 的所谓 “corrective rape”，把幸存者在家中的直视肖像、犯罪地点地景、快照、文字与制度档案组合起来，拒绝让暴力只以匿名统计出现。',
    methods: ['长期人权纪实', '幸存者访谈', '肖像与地景并置', '警察档案', '摄影电影协作'],
    subjects: ['corrective rape', 'LGBTQ hate crimes', 'gender and sexuality', 'South African townships', 'justice', 'survivor testimony'],
    outputs: ['摄影系列', '纪录电影', '访谈文本', '警察记录档案', '展览'],
    institutions: ['Aperture', 'South African NGO partners', 'Aperture Portfolio Prize'],
    achievements: ['Aperture Portfolio Prize runner-up 2013', 'more than two years of township field research', 'film and photographic archive on anti-LGBTQ violence'],
    whyImportant: '关注理由：Carter 处理的是高度容易被新闻化和二次伤害的暴力议题。她让幸存者在自己的住宅中正面凝视摄影机，并用安静地景承担犯罪地点与法律环境，而不是以创伤身体作为唯一证据；但作品仍要求严格说明协作、同意与档案使用方式，避免“信任感”被摄影师单方面宣称。',
    projects: [{
      year: '2010–2013', title: 'Corrective Rape', type: '幸存者肖像、地景、访谈与制度档案／Aperture Portfolio Prize 2013',
      facts: ['项目由 portraits and landscapes 构成，并加入 snapshots、police records、film、hundreds of photographs 与 excerpted texts，研究 South African urban outskirts 的 anti-LGBTQ hate crimes。', 'Carter 在两年多时间里走访多个 townships，访问 survivors，也采访 victims and perpetrators；研究得到多家 NGOs 支持。', '幸存者多在自己家中、常坐在床边并以自然逆光直视镜头；KwaMashu、Durban 与 Nyanga、Cape Town 等地景则说明暴力发生的具体社会空间。'],
      reading: '解读：住宅肖像让人物控制姿态和直视关系，地景则把暴力从个人遭遇扩展到城市、教育和司法结构。项目的伦理强度不只取决于画面是否克制，更取决于访谈、警方记录与影像公开之间是否维持知情同意；这是档案需持续透明标注的部分。'
    }], images: [], sourceLabel: 'Aperture — Clare Carter: Corrective Rape', sourceUrl: 'https://aperture.org/editorial/2013-portfolio-prize-runner-up-clare-carter/'
  },
  {
    id: 'sarah-palmer', name: 'Sarah Palmer', born: '出生年份未公开', base: 'New York, United States',
    intro: '美国摄影艺术家与教育者，以 discarded objects、临时静物、Polaroid、印刷碎片和不稳定的符号组合构造无法被快速命名的画面。她让 corks、bone shards、wishbones、cutting mats、bucket 和 neon pattern 既保持日常废弃物状态，又像触发叙事的心理机关。',
    methods: ['临时静物', '物件组合', '符号错置', 'Polaroid', '开放叙事序列'],
    subjects: ['pattern recognition', 'domestic residue', 'discarded objects', 'meaning and ambiguity', '记忆触发', '图像阅读'],
    outputs: ['摄影系列', '静物摄影', '摄影书', '展览'],
    institutions: ['Aperture', 'Parsons The New School for Design', 'School of Visual Arts', 'New York Photo Festival'],
    achievements: ['Aperture Portfolio Prize winner 2011', 'Aaron Siskind Scholarship', 'New York Photo Festival satellite exhibitions 2009 and 2011', 'Wild Project solo exhibition 2010'],
    whyImportant: '关注理由：Palmer 不靠宏大研究主题组织静物，而让微小物件之间的间隙持续阻碍命名。作品在“废弃物忧郁美学”边缘加入霓虹、几何与切开的水果，使意义既不断出现又无法锁定；这种控制模糊度的能力，是理解当代摄影如何从说明转向联想结构的好案例。',
    projects: [{
      year: '2008–2011', title: 'As a Real House', type: '物件静物、符号触发与开放阅读／Aperture Portfolio Prize 2011 winner',
      facts: ['系列使用 wine corks、incomplete puzzles、oyster shells、newsprint、bone shards、wishbones、cutting mats、buckets 与过曝或欠曝 Polaroids 等日常残留物。', '这些近乎 abject 的材料与 wild neon、1980s geometric patterns 和 sliced watermelon 的粉色并置，形成不稳定平衡。', 'Aperture 指出每张图都触发 pattern recognition，却故意保留足够空缺，阻止观众把意义迅速固定为一种可识别叙事。'],
      reading: '解读：物件不像传统 still life 那样证明作者品味，而像语句里被拿走连接词的名词。观众不断尝试补出灾难、家庭或记忆的故事，却被颜色和尺度打断；作品脱离 statement 仍能成立，因为意义延迟已经由物件关系直接制造。'
    }], images: [], sourceLabel: 'Aperture — Sarah Palmer: As a Real House', sourceUrl: 'https://aperture.org/editorial/2011-portfolio-prize-winner-sarah-palmer/'
  },
  {
    id: 'lisa-lindvay', name: 'Lisa Lindvay', born: '出生年份未公开', base: 'Chicago, United States',
    intro: 'Chicago 的摄影艺术家，以长期家庭肖像、住宅内部和日常混乱研究 mental illness 如何改变亲属关系、照护劳动与家的物质状态。她拍摄父亲与兄弟姐妹在母亲缺席的房间中休息、停顿或拥抱，让 soda bottles、pizza boxes、computer wires 和地毯碎屑成为家庭压力的环境线索。',
    methods: ['长期家庭摄影', '亲属协作', '住宅内部肖像', '环境细节', '自然光纪实'],
    subjects: ['family caregiving', 'mental illness', 'domestic space', 'siblings', 'absence', 'vulnerability'],
    outputs: ['摄影系列', '家庭档案', '展览', '摄影书'],
    institutions: ['Aperture', '3Arts', 'Columbia College Chicago', 'Edinboro University of Pennsylvania'],
    achievements: ['Aperture Portfolio Prize runner-up 2011', '3Arts Artist Award 2011', 'MFA Photography Columbia College Chicago 2009'],
    whyImportant: '关注理由：Lindvay 不拍摄患病母亲，而拍疾病如何通过空间维护、身体姿态与家庭成员的孤立状态间接出现。杂乱住宅容易被误读为病理学证据，但照片中的安静、拥抱和居住舒适感抵抗了单向判断：家既在瓦解，也仍是维系家庭的结构。',
    projects: [{
      year: '2008–2011', title: 'Hold Together', type: '家庭照护、心理疾病与住宅肖像／Aperture Portfolio Prize 2011',
      facts: ['系列拍摄艺术家的 siblings and father 如何在家中应对母亲的 mental illness；母亲没有出现在 Aperture 展示的照片中。', '住宅被 soda bottles、pizza boxes、computer wires 和 carpet detritus 占据，家庭成员则分别躺在不同房间或停留在私人状态。', 'Aperture 强调图像 unsparing but never unkind：被忽视的房屋同时是允许家庭成员脆弱与自由、并继续把他们维系在一起的空间。'],
      reading: '解读：母亲的缺席没有被当成谜底，而以关闭的百叶窗、散落物件和各自躺下的身体形成环境压力。照片若只被看作“混乱之家”会复制污名；拥抱、停顿和父亲站进花盆的荒诞姿态，使家庭仍保有幽默、照护与主体性。'
    }], images: [], sourceLabel: 'Aperture — Lisa Lindvay', sourceUrl: 'https://aperture.org/editorial/2011-portfolio-prize-runner-up-lisa-lindvay/'
  }
];
