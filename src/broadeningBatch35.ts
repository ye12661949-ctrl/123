import type { Artist } from './data';

// Source audit: research/updates/2026-10-08-broadening35.md
export const broadeningBatch35: Artist[] = [
  {
    id: 'ramell-ross', name: 'RaMell Ross', born: '1982', base: 'Rhode Island / Alabama, United States',
    intro: '出生于 Frankfurt、在美国成长的摄影艺术家、电影导演与教育者，以静态摄影、纪录电影、第一人称摄影机和行为表演研究 American South 的 Black life、土地记忆与观看制度。他长期进入 Hale County，不把当地居民归入贫困或创伤的既定图像，而让身体、南方光线、殖民建筑和日常游戏构成既亲密又无法被单一解释的场景。',
    methods: ['长期社区摄影', '静态与运动影像互译', '第一人称摄影机', '诗性纪录', '行为与雕塑'],
    subjects: ['Black Belt Alabama', 'Black life', '南方地景', '身体政治', '档案空缺', '观看者位置'],
    outputs: ['摄影系列', '纪录电影', '剧情电影', '行为作品', '装置'],
    institutions: ['Aperture', 'Museum of Modern Art New York', 'Brown University', 'Sundance Institute', 'Peabody Awards'],
    achievements: ['Aperture Portfolio Prize runner-up 2016', 'Hale County This Morning, This Evening Academy Award nomination 2019', 'Peabody Award 2020', 'Nickel Boys Best Picture nomination 2025'],
    whyImportant: '关注理由：Ross 的方法不是给 Alabama Black Belt 提供完整“社会问题说明”，而是改变摄影机和人物之间的主客体位置。身体常被草、阴影、车辆或画框切断，但不是为了匿名化，而是拒绝让人物以可快速读取的社会类型出现；后来第一人称电影把这种伦理继续推进到摄影机结构本身。',
    projects: [{
      year: '2012–2014', title: 'South County, AL (a Hale County)', type: '南方黑人民间生活、身体地景与诗性纪录／Aperture Portfolio Prize 2016',
      facts: ['系列在 Alabama 的 Hale County 长期形成，将 quiet landscapes 与 carefully composed scenes 结合，既是对地方的 inquiry，也是 ode。', '人物常被部分遮挡或与地景对话：有人躺在木质 porch，有人的腿伸出 pickup truck，另一个身体位于车底，形成镜像但分离的身体。', 'Giving Tree 中女孩横卧低矮树枝，画面无法脱离美国南方 lynching history；系列把身体明确呈现为持续变化的 political landscape。'],
      reading: '解读：Ross 不用显性的暴力画面证明历史，而让树枝、悬垂身体和殖民建筑激活观众已有的视觉记忆。作品脱离 statement 仍保有不安，因为姿态和空间关系已经承担历史压力；风险是过度诗化的南方光线会被误读为神秘主义，因此序列必须维持游戏、劳动和危险之间的多义性。'
    }], images: [], sourceLabel: 'Aperture — RaMell Ross: South County, AL', sourceUrl: 'https://aperture.org/editorial/2016-portfolio-prize-runner-up-ramell-ross/'
  },
  {
    id: 'sean-thomas-foulkes', name: 'Sean Thomas Foulkes', born: '出生年份未公开', base: 'San Francisco, United States',
    intro: '曾参与 Iraq combat deployment 的美国摄影与影像艺术家，以士兵和 insurgent groups 拍摄的战争视频帧、数字合成、triptych 和媒介图像考察现代战争如何在 targeting、作战记录、见证、propaganda、电影和电子游戏之间流通。他不重建第一手战斗经验，而处理观众如何把真实死亡识别成娱乐图像。',
    methods: ['战争视频帧提取', '数字合成', '多来源影像拼接', 'triptych', '媒介考古'],
    subjects: ['Iraq and Afghanistan wars', 'mediated violence', 'propaganda', 'war spectacle', '士兵影像', '观看伦理'],
    outputs: ['合成摄影', '影像系列', '展览', '战争媒介研究'],
    institutions: ['Aperture', 'Massachusetts College of Art and Design', 'Montana State University'],
    achievements: ['Aperture Portfolio Prize runner-up 2016', 'MFA Visual Media and Photography, MassArt', 'twelve-month combat deployment project in central Iraq'],
    whyImportant: '关注理由：Foulkes 直接处理战争影像“看起来像游戏”的问题，却没有假设指出相似性就等于批判。他将敌对双方拍摄的帧合成为无法定位来源的画面，使观看者既被爆炸的形式吸引，又无法把快感安全归类为 fiction；作品的伦理张力来自真实死亡与可消费视觉之间无法被修复的裂缝。',
    projects: [{
      year: '2014–2016', title: 'Fragments of Engagement', type: '战争视频帧、数字合成与媒介暴力研究／Aperture Portfolio Prize 2016',
      facts: ['作品由 US soldiers 与 insurgent groups 在 coalition-force engagements 中拍摄的视频帧合成，而非取自电影或 video games。', 'Vehicle-Borne IED, Iraq, 2008 以 triptych 呈现，其他画面在爆炸、夜视、车辆和烟尘之间故意保持来源不可辨认。', 'Foulkes 是 Iraq veteran；他的第一组作品形成于十二个月 central Iraq combat deployment，之后持续研究 mass media 如何塑造现代冲突经验。'],
      reading: '解读：模糊、压缩痕迹和合成让图像失去传统新闻照片的时间地点锚点，却加强了电影式视觉快感。它不需要 statement 才能显得不稳定，但“真实死亡”仍需来源说明才能进入伦理层；若只把画面当成华丽爆炸，作品会复制它试图批判的消费机制。'
    }], images: [], sourceLabel: 'Aperture — Sean Thomas Foulkes: Fragments of Engagement', sourceUrl: 'https://aperture.org/editorial/2016-portfolio-prize-runner-up-sean-thomas-foulkes/'
  },
  {
    id: 'drew-nikonowicz', name: 'Drew Nikonowicz', born: '1993', base: 'Missouri, United States',
    intro: 'St. Louis 出生的美国摄影艺术家，以 computer simulations、analog photography、坐标式标题、矿物近照和屏幕再摄影研究 contemporary landscape 如何在地理测量、游戏引擎、数字渲染与摄影真实性之间生成。他借用十九世纪地理考察的视觉权威，却展示一个已经被测量完、只能通过技术边界重新制造的 sublime world。',
    methods: ['computer simulation', 'analog photographic process', '坐标与时间标题', '屏幕再摄影', '模拟地景'],
    subjects: ['mediated landscape', 'digital sublime', '地理勘测史', '图像可信度', 'extraterrestrial imagination', '技术过时'],
    outputs: ['摄影系列', '模拟图像', '摄影书', '展览'],
    institutions: ['Aperture', 'Photokina', 'Der Greif'],
    achievements: ['Aperture Portfolio Prize winner 2015', 'Aperture Gallery solo presentation 2015–16', 'Photokina exhibition'],
    whyImportant: '关注理由：Nikonowicz 没有用 Photoshop 特效制造一个明确的科幻世界，而让模拟、胶片和测量数据互相伪装。岩石、矿物、坐标与屏幕中的 astronaut 看似科学证据，却无法保证地点真实存在；这种不确定性直接进入材料链条，比只在 statement 中谈“数字时代失真”更有说服力。',
    projects: [{
      year: '2012–2015', title: 'This World and Others Like It', type: '模拟地景、胶片摄影与数字 sublime／Aperture Portfolio Prize 2015 winner',
      facts: ['系列调用 nineteenth-century geographical surveys 的图像语言，却把 measurements and numbers 作为出发点，用 simulation 与 analog process 建立无法确定真伪的 landscape。', 'monochromatic dark landscape 与高反差 rocks/minerals portrait 被坐标、日期和时间式标题定位，但这些精确数据并不能证明地点真实性。', '系列唯一的人体是透过 screen 拍摄的 astronaut；Aperture 将其理解为 explorer 与 photographer 同时面临 obsolescence。'],
      reading: '解读：精确坐标提供科学可信度，黑暗地景和矿物又调动浪漫主义崇高感，两套权威互相强化后突然失效。屏幕中的 astronaut 暴露观看已经被界面隔开；作品最强处不是“真假难辨”的谜题，而是让验证欲本身成为无法满足的观看动作。'
    }], images: [], sourceLabel: 'Aperture — Drew Nikonowicz: This World and Others Like It', sourceUrl: 'https://aperture.org/editorial/2015-portfolio-prize-winner-drew-nikonowicz/'
  },
  {
    id: 'lisa-elmaleh', name: 'Lisa Elmaleh', born: '1984', base: 'West Virginia / New York City, United States',
    intro: 'Miami 出生、往返 West Virginia 与 New York 的摄影艺术家，以装在 truck 后部的 portable darkroom、十九世纪 wet-plate collodion、tintype 和长期共同工作拍摄 Appalachia、folk musicians、边境地景及生态环境。她让缓慢、有毒且笨重的化学工艺进入 contemporary rural portrait，同时公开承认所谓“未被现代污染的民间生活”是一场由摄影者与被摄者共同建构的浪漫表演。',
    methods: ['wet-plate collodion', 'tintype', 'truck portable darkroom', '长曝光肖像', '共同编排'],
    subjects: ['Appalachia', 'American folk culture', 'rural self-fashioning', '传统工艺', '生态地景', '历史表演'],
    outputs: ['湿版摄影系列', 'tintype', '摄影书', '展览', '替代工艺教育'],
    institutions: ['Aperture', 'Penumbra Foundation', 'School of Visual Arts', 'Norton Museum of Art', 'John Simon Guggenheim Memorial Foundation'],
    achievements: ['Aperture Portfolio Prize runner-up 2015', 'Guggenheim Fellowship 2024', 'Aaron Siskind Foundation IPF Grant', 'PDN 30 New and Emerging Photographers'],
    whyImportant: '关注理由：Elmaleh 的湿版不是复古滤镜，而是决定拍摄速度、移动方式、合作关系和最终物质表面的生产制度。画面确实容易把 Appalachia 浪漫化成时间之外的 folk world，但艺术家和被摄者对服装、姿态与身份的自觉表演，使“真实性”从发现变成政治选择。',
    projects: [{
      year: '2010–2015', title: 'American Folk', type: '湿版火棉胶、移动暗房与 Appalachia 肖像／Aperture Portfolio Prize 2015',
      facts: ['Elmaleh 使用 mid-nineteenth-century tintype / wet-plate collodion process，并把 portable darkroom 安装在 truck 后部进行现场制版。', '系列拍摄 West Virginia、Kentucky、Virginia 与 Tennessee 的 folk artists and musicians；腰带、鞋等细节才提示这些照片属于 twenty-first century。', 'Aperture 指出画面中的 cultural isolation 并非未经干预的真实：摄影者与 subjects 都是 conscious performers，以拒绝 contemporary mores 的方式塑造身份。'],
      reading: '解读：湿版长曝光迫使身体停留，化学斑痕又让当下看起来像历史遗物，媒介主动制造时间错位。作品若不承认编排，就会把乡村身份冻结为怀旧商品；当这种共同表演被保留时，画面反而揭示“民间传统”如何被当代人主动使用。'
    }], images: [], sourceLabel: 'Aperture — Lisa Elmaleh: American Folk', sourceUrl: 'https://aperture.org/editorial/2015-portfolio-prize-runner-up-lisa-elmaleh/'
  },
  {
    id: 'laurence-rasti', name: 'Laurence Rasti', born: '1990', base: 'Geneva, Switzerland',
    intro: 'Geneva 出生的 Swiss-Iranian 摄影艺术家，以协作肖像、花束与气球遮挡、图案 camouflage、普通街景和跨文化研究讨论 Iranian LGBTQ people 在可见性与安全之间的矛盾。她不把“给人一张脸”理解为强制揭露身份，而利用遮挡、背身和局部身体，让匿名本身成为被摄者仍可控制的表述方式。',
    methods: ['协作式酷儿肖像', '道具遮挡', '图案 camouflage', '匿名构图', '跨文化视觉研究'],
    subjects: ['Iranian LGBTQ communities', 'identity and gender', 'visibility and safety', 'diaspora', '国家否认', '匿名权'],
    outputs: ['摄影系列', '摄影书', '展览', '社会参与项目'],
    institutions: ['Aperture', 'Photo Elysée Lausanne', 'ECAL', 'Circulation(s) Festival'],
    achievements: ['Aperture Portfolio Prize runner-up 2015', 'ECAL photography degree 2014', 'exhibition at Musée de l’Elysée / Photo Elysée'],
    whyImportant: '关注理由：Rasti 避免把可见性自动等同于解放：在身份暴露可能带来刑罚的语境里，花、气球和图案不是装饰，而是安全技术。鲜艳遮挡一方面吸引目光，另一方面拒绝观众获得完整面孔；这种矛盾确实进入构图，而不是只由政治背景赋予。',
    projects: [{
      year: '2014–2015', title: 'Il n’y a pas d’homosexuels en Iran', type: '酷儿协作肖像、匿名与视觉 camouflage／Aperture Portfolio Prize 2015',
      facts: ['标题回应 Mahmoud Ahmadinejad 2007 年声称 Iran 不存在 homosexuals 的公开言论，并面对 Iran 对同性关系的刑事迫害。', 'Rasti 作为 Swiss-born Iranian，与 collaborators 使用 traditional and contemporary patterns、landscapes、mundane street scenes、balloons 与 flowers 建立 camouflage and discretion。', '人物有时被道具完全挡住、背对相机或只留下身体局部，使 anonymity 成为 protection，而不是档案缺陷。'],
      reading: '解读：气球和花束越鲜艳，人物面孔越不可获得，观看欲因此被引向遮挡本身。作品脱离文字仍能表达隐藏与亲密，但具体危险程度需要历史背景；它最重要的伦理转变是让“不被看清”成为主体权利，而非摄影师需要克服的障碍。'
    }], images: [], sourceLabel: 'Aperture — Laurence Rasti: There Are No Homosexuals in Iran', sourceUrl: 'https://aperture.org/editorial/2015-portfolio-prize-runner-up-laurence-rasti/'
  },
  {
    id: 'heikki-kaski', name: 'Heikki Kaski', born: '1987', base: 'Finland / Scandinavia',
    intro: '出生于 Kantvik 的 Finnish photographer，以低饱和色彩、轻微失衡构图、近乎重复的机位、昼夜对照和摄影书序列研究小镇表面平静之下的心理不安。他曾在糖业工作，后来前往 California 的 Tranquillity，以树木、塑料包裹、鞋堆、dust devil、居民和空地建立既像纪实又接近虚构惊悚片的地方肖像。',
    methods: ['低饱和彩色摄影', '近似画面重复', '昼夜重拍', '失衡构图', '摄影书序列'],
    subjects: ['Tranquillity California', 'small-town unease', 'banal landscape', '心理地理', '重复与差异', 'American rural space'],
    outputs: ['摄影系列', '摄影书', '展览', '驻留项目'],
    institutions: ['Aperture', 'Finnish Museum of Photography', 'Unseen Amsterdam', 'Lecturis', 'Valand Academy'],
    achievements: ['Aperture Portfolio Prize runner-up 2015', 'Unseen Dummy Award winner 2013', 'Tranquillity published by Lecturis 2014', 'Finnish Museum of Photography exhibition 2015'],
    whyImportant: '关注理由：Kaski 不依赖重大事件制造地方感，而用几乎相同却略微偏移的照片让观众怀疑自己是否错过了什么。重复机位像视觉结巴，使 banal scene 在昼夜和角度差中获得叙事；但阴郁风格也可能把真实小镇类型化为“怪异美国”，因此项目的力量主要在序列节奏，而非单幅猎奇。',
    projects: [{
      year: '2012–2014', title: 'Tranquillity', type: '小镇心理地景、重复机位与摄影书／Aperture Portfolio Prize 2015',
      facts: ['系列以 California 小镇 Tranquillity 命名；Aperture 将画面情绪概括为 banal surface 下持续积累的 darkness and bitterness。', 'Kaski 使用 dusty drained palette、barely balanced framing 和几乎相同的 frames：鞋堆从略微偏移角度重拍，被塑料包裹的树在 night 与 daylight 再现。', '该书于 2013 年获得 Unseen Dummy Award，并由 Lecturis 于 2014 年出版，随后在 Finnish Museum of Photography 展出。'],
      reading: '解读：两张几乎相同的照片迫使观众寻找微小差异，叙事由“没有发生什么”生成；dust devil 和塑料树则像事件残留，却不给出原因。单张可能只是克制的 rural photography，书序中的复现才把时间、记忆错误和不安真正转化为形式。'
    }], images: [], sourceLabel: 'Aperture — Heikki Kaski: Tranquillity', sourceUrl: 'https://aperture.org/2015-portfolio-prize-runner-up-heikki-kaski/'
  }
];
