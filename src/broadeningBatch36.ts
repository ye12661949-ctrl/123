import type { Artist } from './data';

// Source audit: research/updates/2026-10-08-broadening36.md
export const broadeningBatch36: Artist[] = [
  {
    id: 'amy-elkins', name: 'Amy Elkins', born: '1979', base: 'Greater Los Angeles, United States',
    intro: '出生于 Venice, California 的摄影艺术家，以死刑犯书信、政府 mugshot、临终陈述、监狱物件、像素化肖像和重演图像研究美国资本惩罚制度如何把具体的人压缩成档案、罪名与执行编号。她不以进入监狱拍摄作为真实性保证，而把无法抵达的身体、被审查的通信和漫长羁押时间转化为图像结构。',
    methods: ['书信协作', '档案肖像重构', '文字生成图像', '像素化与遮蔽', '物件重演'],
    subjects: ['capital punishment', 'incarceration', '制度性去人格化', '临终陈述', '缺席身体', '时间与记忆'],
    outputs: ['摄影系列', '档案图像', '艺术家书', '展览', '文本与物件组合'],
    institutions: ['Aperture', 'Kunsthalle Wien', 'Minneapolis Institute of Art', 'Light Work', 'Philadelphia Photo Arts Center'],
    achievements: ['Aperture Portfolio Prize winner 2014', 'Light Work artist-in-residence 2011', 'Villa Waldberta artist-in-residence 2012', 'cofounder of Women in Photography NYC'],
    whyImportant: '关注理由：Elkins 把无法直接见面的囚犯转化为一套关于距离的摄影语法：服刑时间越长，面孔越被像素侵蚀；最后陈述越短，重复文字越像制度噪音。作品既拒绝把死刑议题简化为新闻见证，也保留了挪用 mugshot 可能再次物化被拍者的伦理风险。',
    projects: [{
      year: '2009–2014', title: 'Black is the Day, Black is the Night / Parting Words', type: '死刑书信、档案肖像与制度时间／Aperture Portfolio Prize 2014 winner',
      facts: ['Black is the Day, Black is the Night 源于 Elkins 与 death-row prisoners 的持续通信，并把书信、想象地景、重制物件和 prison food tray 等线索并置。', '彩色肖像依据每个人已被监禁的时间进行像素化和遮蔽，让时间直接改变面孔的可见度。', 'Parting Words 以已执行死刑者的 mugshot 或肖像为基础，反复排列其 final statement 构成黑白人像；系列包含五百余幅选择后的肖像。'],
      reading: '解读：文字不是图像说明，而是制造脸的材料；越想辨认一个人，越会被制度语言和像素格挡住。两组作品把“看见受刑者”变成不可能完全完成的动作，也提醒观众：同情性的再现仍可能沿用刑罚档案的分类权力。'
    }], images: [], sourceLabel: 'Aperture — 2014 Portfolio Prize Winner: Amy Elkins', sourceUrl: 'https://aperture.org/editorial/2014-portfolio-prize-winner-amy-elkins/'
  },
  {
    id: 'matt-eich', name: 'Matt Eich', born: '1986', base: 'Virginia, United States',
    intro: '出生于 Richmond 的美国摄影师，以长期进入家庭、后院、卧室和社区的彩色纪实方式，连接 rural Ohio 的贫困、Mississippi 的 segregation、Virginia 的军工结构与美国地方身份。他不以单一危机概括社区，而让亲密距离、戏剧性光线和地理细节共同说明阶级、家庭与种族如何嵌入日常空间。',
    methods: ['长期纪实摄影', '亲密社区进入', '彩色地景与肖像', '家庭档案', '摄影书序列'],
    subjects: ['rural America', 'poverty', 'segregation and racism', 'family', 'military and industry', '地方身份'],
    outputs: ['摄影系列', '摄影书', '编辑摄影', '展览', '家庭影像档案'],
    institutions: ['Aperture', 'Museum of Fine Arts Houston', 'Portland Art Museum', 'New York Public Library', 'Light Work'],
    achievements: ['Aperture Portfolio Prize runner-up 2014', 'Aaron Siskind Fellowship 2011', 'National Geographic Magazine Grant 2011', 'Getty Images Editorial Grant 2013'],
    whyImportant: '关注理由：Eich 的价值不在于把“被遗忘的美国”变成可消费的贫困美学，而在于长时间、私人空间和反复返回建立的关系性证据。画面的光线很强、构图很诗性，但人物并未被环境细节吞没；这种平衡使地方史既能被看见，也暴露纪实亲密可能被审美化的张力。',
    projects: [{
      year: '2006–2014', title: 'The Invisible Yoke', type: '美国地方史、家庭亲密与长期纪实／Aperture Portfolio Prize 2014',
      facts: ['项目以多地长期章节讨论 what it means to be American，包括 rural Ohio 的 poverty、Mississippi 的 segregation and racism，以及 Virginia 的 military and industry。', '许多照片在 bedrooms、backyards、bathtubs 与 driveways 等需要私人许可的空间完成，以近距离人物和动物建立亲密感。', 'Aperture 指出系列以 color、dramatic light 和精确地理细节连接人物的 socioeconomic status、family、community 与 collective American history。'],
      reading: '解读：所谓 invisible yoke 不是一个可直接拍到的对象，而是从胶带修补的窗、身体与住宅的距离、家庭动作和地方光线中累积出来。强烈形式感让图像超出社会学例证，同时也要求序列不断校正“美丽苦难”的诱惑。'
    }], images: [], sourceLabel: 'Aperture — Matt Eich: The Invisible Yoke', sourceUrl: 'https://aperture.org/2014-portfolio-prize-runner-up-matt-eich/'
  },
  {
    id: 'davide-monteleone', name: 'Davide Monteleone', born: '1974', base: 'Italy / Russia',
    intro: '意大利出生、长期在 Russia 与 Eurasia 工作的摄影师、研究者与影像艺术家，以慢速新闻调查、地景、肖像、档案和跨境旅行研究国家宣传、资源基础设施与政治权力。他从传统纪实摄影出发，却常把宏观地缘政治拆解为城市表面、家庭空间、宗教仪式和被管理的日常正常性。',
    methods: ['长期调查摄影', '地缘政治研究', '肖像与地景并置', '跨境田野', '摄影书叙事'],
    subjects: ['Chechnya', 'state propaganda', 'repression', 'postwar normalcy', 'Eurasian infrastructure', '宗教与国家'],
    outputs: ['摄影系列', '摄影书', '编辑摄影', '研究项目', '展览'],
    institutions: ['Aperture', 'World Press Photo', 'Fondation Carmignac', 'Nobel Peace Center', 'Chapelle des Beaux-Arts Paris'],
    achievements: ['Aperture Portfolio Prize runner-up 2014', 'Fondation Carmignac Photojournalism Award 2013', 'European Publishers Award 2010', 'multiple World Press Photo awards'],
    whyImportant: '关注理由：Monteleone 的 Chechnya 图像不依赖可见战斗，而研究重建、庆典、宗教规训和领袖肖像如何制造“冲突已经结束”的表面。经典纪实语言在这里既提供证据，也可能把复杂社会压成阴郁叙事；他通过城市繁荣与私人焦虑的并置，让这种矛盾保留在书的序列中。',
    projects: [{
      year: '2013', title: 'Spasibo', type: 'Chechnya、宣传正常化与摄影书／Aperture Portfolio Prize 2014',
      facts: ['项目于 2013 年在 Chechnya 拍摄，关注独裁宣传与更为细微的 repression strategies 如何形成 forced appeasement。', 'Grozny 的 Constitution Day 烟花、新广场、摩天楼和 black SUVs 与 disabled veterans、politicized religiosity、misogyny 及 Ramzan Kadyrov 的公共形象并置。', 'Spasibo 于 2013 年出版，并进入 2014 Paris Photo–Aperture Foundation PhotoBook Awards shortlist。'],
      reading: '解读：烟火、摩天楼和整洁广场不是战争之后的中性背景，而是国家把暴力翻译为繁荣的舞台。作品最有效之处在于不把居民归为纯粹受害者，却仍需警惕以“被压抑文化”替代当地多重政治位置。'
    }], images: [], sourceLabel: 'Aperture — Davide Monteleone: Spasibo', sourceUrl: 'https://aperture.org/2014-portfolio-prize-runner-up-david-monteleone/'
  },
  {
    id: 'sadie-wechsler', name: 'Sadie Wechsler', born: '出生年份未公开', base: 'Seattle / United States',
    intro: 'Seattle 出生的摄影艺术家，以编排与偶遇相互混合的彩色摄影、数字痕迹、反类型地景和故意不连贯的序列，研究自然景观如何在灾变想象、旅游观看、stock image 与 CGI 视觉之间被制造。她拒绝为系列建立稳定情节，而让照片像来自同一场尚未说明的生态异变。',
    methods: ['编排与偶遇混合', '非线性序列', '反类型地景', '数字视觉引用', '叙事断裂'],
    subjects: ['landscape in flux', '生态异变', 'photographic artifice', 'tourism', 'CGI and stock imagery', 'dystopian imagination'],
    outputs: ['摄影系列', '摄影书序列', '展览', '实验影像'],
    institutions: ['Aperture', 'Yale School of Art', 'Bard College', 'Johalla Projects'],
    achievements: ['Aperture Portfolio Prize runner-up 2014', 'MFA Photography Yale School of Art', 'Bard College Delavan Grant 2006'],
    whyImportant: '关注理由：Wechsler 让“系列必须连贯”这一摄影书惯例失效：brush fire、坑洞、粉色落日和拍照游客彼此没有因果，却共同暴露我们已学会如何识别灾难、崇高与商业风景。她的模糊性不是隐藏研究不足，而是一种把观众的类型判断变成作品材料的方法。',
    projects: [{
      year: '2013–2014', title: 'Part 1: Redo', type: '人工地景、灾变想象与不连贯序列／Aperture Portfolio Prize 2014',
      facts: ['系列呈现 tourists 观看 brush fire、灰烬地景中的两个坑洞，以及一名女子在 garish pink sunset 前同时拍照与被拍。', '画面主动引用 moody landscape、psychological portrait、tacky CGI 与 contrived stock image 等视觉类型，并强调其 artifice。', 'Wechsler 有意避免 coherent series，照片仅由 thematic weirdness、ambiguity 与斜向叙事线索连接。'],
      reading: '解读：这些照片像灾变电影的剧照，却缺少能确认事件的前后镜头；观众只好用熟悉的风景类型填补空缺。系列由此把“自然灾难”从题材转成观看习惯，同时保留形式游戏可能弱化真实生态政治的风险。'
    }], images: [], sourceLabel: 'Aperture — Sadie Wechsler: Part 1: Redo', sourceUrl: 'https://aperture.org/editorial/2014-portfolio-prize-runner-up-sadie-wechsler/'
  },
  {
    id: 'bryan-schutmaat', name: 'Bryan Schutmaat', born: '1983', base: 'Texas, United States',
    intro: 'Houston 出生的美国摄影艺术家，以中大画幅彩色地景、劳动者肖像和克制的摄影书序列研究 American West 的采矿遗产、资源枯竭与小镇心理。他把 New Topographics 的土地描述与更亲密的人物观看结合，使被开采的山体、酒吧内室和居民面孔处在同一条经济与情感地层中。',
    methods: ['大画幅彩色摄影', '地景与肖像并置', '摄影书序列', '区域田野调查', '克制色彩控制'],
    subjects: ['American West', 'mining towns', 'resource extraction', 'postindustrial decline', '劳动与男性气质', '土地心理'],
    outputs: ['摄影系列', '摄影书', '展览', '版画'],
    institutions: ['Aperture', 'Houston Center for Photography', 'Center Santa Fe', 'Photographic Resource Center Boston'],
    achievements: ['Aperture Portfolio Prize winner 2013', 'Flash Forward Emerging Photographer Award 2013', 'CENTER Gallerist Choice Award 2013'],
    whyImportant: '关注理由：Schutmaat 不是把美国西部当成空旷神话，而把被采掘土地与被工业衰退塑形的面孔放在同等位置。精确构图和灰暗色调确实可能把困顿变成雄浑风格，但年轻人、室内细节和未完成的离开愿望，使“衰败”仍保持具体社会时间。',
    projects: [{
      year: '2011–2013', title: 'Grays the Mountain Sends', type: '矿业小镇、人物肖像与 American West／Aperture Portfolio Prize 2013 winner',
      facts: ['系列拍摄 American West 的 mining sites 与 small mountain towns，并同时描绘工作、建造和生活其中的人。', 'Aperture 将其方法置于 New Topographics 与 New Document 的交汇：受损地景、人物肖像和主观区域经验共同构成当代西部。', '作品以 controlled palette and structure 连接被开采的土地、疲惫的面孔，以及年轻一代可能离开的微弱希望。'],
      reading: '解读：山体与脸并非“环境—受害者”的插图关系，而像同一套开采制度留下的两种表面。人物直视、空室和矿区之间的节奏把西部从宏大风景拉回生活成本，但摄影师的抒情控制也需要由具体地点史来约束。'
    }], images: [], sourceLabel: 'Aperture — Bryan Schutmaat: Grays the Mountain Sends', sourceUrl: 'https://aperture.org/editorial/2013-portfolio-prize-winner-bryan-schutmaat/'
  },
  {
    id: 'akihiko-miyoshi', name: 'Akihiko Miyoshi', born: '出生年份未公开', base: 'Portland, Oregon, United States',
    intro: '受过 computer programming 训练的日本出生摄影艺术家，以镜面、纸张、胶带、彩色光、摄影机结构和网页界面研究摄影再现的机械条件。他通常在按下快门前完成干预，让看似数字生成的几何图像来自实体布置，并把屏幕、反射和 RGB / CMY 色彩系统变成认识图像的实验室。',
    methods: ['镜面与纸张光学装置', '机内构图', '模拟色彩实验', '摄影机制拆解', '界面研究'],
    subjects: ['photographic representation', 'optical abstraction', 'analog and digital perception', 'screen interface', '颜色系统', '图像物质性'],
    outputs: ['抽象摄影', '装置', '实验网页', '展览', '技术研究'],
    institutions: ['Aperture', 'Reed College', 'Portland Institute for Contemporary Art'],
    achievements: ['Aperture Portfolio Prize runner-up 2013', 'computer-programming and art research practice', 'Abstract Photographs institutional recognition'],
    whyImportant: '关注理由：Miyoshi 的抽象不是后期软件滤镜，而是把镜面、光线、CMY/RGB 和相机视角组织成可拍摄事件。图像看似无题材，却精确追问摄影何时把三维装置压成二维证据，也连接了暗房时代的光学实验与今天的屏幕界面。',
    projects: [{
      year: '2011–2013', title: 'Abstract Photographs', type: '光学装置、机内抽象与摄影机制／Aperture Portfolio Prize 2013',
      facts: ['系列使用 mirrors、paper 与 tape 建立几何图案，主要操控发生在 shutter release 之前，而非事后暗房或软件处理。', 'red、green、blue、cyan、magenta 与 yellow 以碎片、线条和电路般结构出现，连接 additive and subtractive color systems。', 'Aperture 将其方法概括为 unpacking the structural mechanics of photographic representation；艺术家的 computer programmer 背景与坚持模拟制作形成张力。'],
      reading: '解读：照片先诱使观众把它识别为数字图形，再以镜面边缘、胶带和光学误差泄露实体来源。真假之辨在这里不是内容，而是摄影装置本身的教育：相机从未只是透明记录工具。'
    }], images: [], sourceLabel: 'Aperture — Akihiko Miyoshi: Abstract Photographs', sourceUrl: 'https://aperture.org/editorial/2013-portfolio-prize-runner-up-akihiko-miyoshi/'
  }
];
