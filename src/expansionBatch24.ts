import type { Artist } from './data';
import type { ArtistArchive, ArchiveProject } from './archiveData';

type ArtistRecord = Omit<Artist, 'projects' | 'images' | 'sourceUrl' | 'sourceLabel'> & {
  projects: ArchiveProject[];
};

const records: ArtistRecord[] = [
  {
    id: 'widline-cadet',
    name: 'Widline Cadet',
    born: '1992',
    base: 'Los Angeles / Haiti',
    intro: '从家庭照片不足和跨国迁移经验出发，以自拍、亲属肖像、陌生人“替身”、视频与空间装置不断补写一个原本残缺的家族影像档案。',
    methods: ['家庭档案', '自我表演', '肖像', '影像编辑', '身体替身', '装置'],
    subjects: ['海地', '迁移', '黑人离散', '家庭', '记忆', '同化'],
    outputs: ['摄影', '录像', '装置', '摄影书', '陶瓷'],
    institutions: ['Huis Marseille', 'Whitney Museum', 'LACMA', 'Milwaukee Art Museum'],
    achievements: ['Ritual [Dis]Appearance / Seremoni Disparisyon · Black Mountains Studio 2025', 'Liverpool Biennial 2025', 'Currents 40 · Milwaukee Art Museum 2026'],
    whyImportant: '她特别适合放进“家庭档案不是事实仓库”的脉络：缺失的亲人照片并没有被伪装成可恢复的事实，而是通过自拍、替身、剪贴和重新布置，明确地以假设去补写家族记忆。',
    projects: [
      {
        title: 'Ritual [Dis]Appearance / Seremoni Disparisyon',
        period: '2019–2025',
        cluster: '家族档案 / 自拍 / 身体替身 / 摄影书',
        summary: '把自拍、亲属肖像、陌生女性、家庭旧照与访谈并置，围绕海地—美国迁移之后身份如何逐渐变化、消失和重组建立一个开放档案。',
        actions: ['搜集并整理稀少的家庭旧照片', '拍摄亲属、自己以及具有视觉亲缘感的陌生女性', '通过多重身体、镜像和编辑制造“替身”关系', '把不同年代的图像、访谈和文本编入摄影书', '保留摄影装置与图像制作痕迹作为作品的一部分'],
        sourceUrl: 'https://blackmountainsstudio.com/shop/p/flutteria-439ff-42e2a',
        images: [{
          url: 'https://artlogic-res.cloudinary.com/w_1600%2Ch_1600%2Cc_limit%2Cf_auto%2Cfl_lossy%2Cq_auto/artlogicstorage/shulamitnazarian/images/view/f8643add32a081f6e3bd481bcb5fd3e6j/nazarian-curcio-widline-cadet-jiskaske-enkinite-vini-nan-yon-fen-until-infinity-comes-to-an-end-2021.jpg',
          title: 'Jiskaske Enkinite Vini Nan Yon Fen (Until Infinity Comes To An End), 2021',
          credit: '© Widline Cadet',
          sourceUrl: 'https://nazariancurcio.com/artworks/2846-widline-cadet-jiskaske-enkinite-vini-nan-yon-fen-until-infinity-2021/',
          sourceLabel: 'Nazarian / Curcio'
        }],
        relations: [{ kind: '出版', label: 'Ritual [Dis]Appearance / Seremoni Disparisyon', detail: 'Black Mountains Studio · 2025' }]
      },
      {
        title: 'Take This with You / Pran sa avèk ou',
        period: '2016–2023',
        cluster: '家庭档案 / 展览重编 / 记忆缺口',
        summary: '把家庭旧照片与自拍、亲属、朋友及原本陌生的黑人女性并置成同一档案；展览允许事实、假设和“可能的亲属关系”同时存在。',
        actions: ['把家庭旧照与新拍作品放在同一时间层', '使用身体相似的女性制造姐妹、双生或替身关系', '在图像中保留快门线、背景架等制作痕迹', '将照片、录像、家庭陈设与墙面结构组合为空间档案'],
        sourceUrl: 'https://huismarseille.nl/en/exhibitions/widline-cadet/',
        images: [],
        relations: [{ kind: '展览', label: 'Take This with You / Pran sa avèk ou — Huis Marseille', detail: '2023' }]
      }
    ]
  },
  {
    id: 'eleonora-agostini',
    name: 'Eleonora Agostini',
    born: '1991',
    base: 'London',
    intro: '把家庭餐馆和母亲长期担任服务员的身体动作当成研究现场，通过摄影、档案、录像、声音与书籍拆解“服务”如何变成一种被社会训练出来的表演。',
    methods: ['观察摄影', '编排式摄影', '家庭档案', '录像', '声音', '摄影书编辑'],
    subjects: ['劳动', '性别', '母女关系', '表演', '服务业', '身体'],
    outputs: ['摄影', '录像', '声音', '摄影书', '装置'],
    institutions: ['Foam', 'Deutsche Börse Photography Foundation', 'Fotografia Europea'],
    achievements: ['Foam Talent 2024', 'Paris Photo–Aperture First PhotoBook Award · 2025'],
    whyImportant: '这个项目非常适合研究“动作如何被社会角色训练”：她不只拍母亲工作，而是拆成前台、后台、姿势、疲劳、制服、脚和重复话术，再通过摄影书把这些碎片重新组织。',
    projects: [
      {
        title: 'A Study on Waitressing',
        period: '2020–2025',
        cluster: '服务劳动 / 母女 / 前台与后台 / 摄影书',
        summary: '以母亲在家庭餐馆中的工作经验为中心，把服务员这一角色拆成舞台、后台和表演三个层面，观察身体如何在公共要求与私人感受之间切换。',
        actions: ['长期观察母亲在餐馆里的工作动作与姿势', '重拍或重演服务员制服、手势和身体状态', '搜集家庭档案与既有图像', '结合录像、声音、文字与拼贴', '将材料编成 168 页摄影书并以展览版本重新排序'],
        sourceUrl: 'https://www.eleonoraagostini.com/',
        images: [],
        relations: [{ kind: '奖项', label: 'Paris Photo–Aperture First PhotoBook Award', detail: 'Winner · 2025' }, { kind: '展览', label: 'Foam Talent', detail: '2024' }]
      }
    ]
  },
  {
    id: 'hady-barry',
    name: 'Hady Barry',
    born: '1989',
    base: 'Abidjan / Virginia',
    intro: '以黑白摄影、家庭档案、日记和与母亲的对话处理童年迁移、照护责任与母女关系，并亲自用 Risograph 印刷和装订把材料做成一本高度私密的书。',
    methods: ['家庭档案', '日记', '访谈', '黑白摄影', 'Risograph', '手工装订'],
    subjects: ['母女关系', '迁移', '照护', '童年', '记忆', '亲密关系'],
    outputs: ['摄影书', '摄影', '文字', '声音'],
    institutions: ['Paris Photo–Aperture PhotoBook Awards', 'National Portrait Gallery', 'Sharjah Art Foundation', 'Images Vevey'],
    achievements: ['Paris Photo–Aperture PhotoBook Awards Juror’s Special Mention · 2024', 'Grand Prix Images Vevey 2025/2026 shortlist'],
    whyImportant: '她把“家庭创伤”具体落实到书的结构：旧照片、成年后的新摄影、少女时期日记和母亲的当代回应彼此穿插，书籍不是容器，而是让不同时态真正发生对话的装置。',
    projects: [
      {
        title: 'i am (not) your mother',
        period: '2023–2024',
        cluster: '母女关系 / 家庭档案 / Risograph 摄影书',
        summary: '从十三岁承担照顾三个弟妹、母亲赴美申请庇护的三年分离经验出发，将家庭旧照、成年后的黑白摄影、日记和与母亲的对话编成一本手工制作的摄影书。',
        actions: ['重读少女时期日记', '从家庭档案筛选母亲与童年照片', '拍摄当下的母女关系与生活细节', '转录与母亲的对话并让文字进入图像', '在 Penumbra Foundation 使用 Risograph 印刷', '亲手完成 100 本首版的装订'],
        sourceUrl: 'https://www.hadybarry.com/i-am-not-your-mother-1',
        images: [],
        relations: [{ kind: '奖项', label: 'Paris Photo–Aperture PhotoBook Awards', detail: 'Juror’s Special Mention · 2024' }]
      }
    ]
  },
  {
    id: 'genesis-baez',
    name: 'Genesis Báez',
    born: '1990',
    base: 'New York / Western Massachusetts',
    intro: '在波多黎各与其离散社群之间，以母女、亲属和社区成员共同摆拍，通过线、水、影子、蒸汽和反射等短暂物质去表现迁移、亲缘和地点之间难以固定的关系。',
    methods: ['合作摆拍', '家庭摄影', '表演', '彩色摄影', '长期编辑', '摄影书'],
    subjects: ['波多黎各', '离散', '母女关系', '亲缘', '地点', '迁移'],
    outputs: ['摄影', '摄影书', '展览'],
    institutions: ['MoMA', 'Whitney Museum', 'Princeton University Art Museum', 'Dashwood Projects'],
    achievements: ['Capricious Photo Award · 2022', 'Blue Sun / Sol Azul · Paris Photo–Aperture First PhotoBook shortlist 2025'],
    whyImportant: '她的摆拍并不是为了制造“电影感”：很多动作由艺术家与母亲、姐妹或社区成员共同完成，绳子、水、影子等元素把抽象的迁移关系转成可以被身体实际拉扯和触碰的结构。',
    projects: [
      {
        title: 'Holding Water / Blue Sun · Sol Azul',
        period: '2015–2025',
        cluster: '波多黎各离散 / 母女协作 / 表演式摄影',
        summary: '十年间在波多黎各及离散生活中持续拍摄，将母亲、亲属、社区成员与艺术家自身置于轻微编排和即兴动作中；2025 年以 Blue Sun / Sol Azul 汇编成首部专著。',
        actions: ['邀请母亲、亲属或社区成员共同完成动作', '使用线、织物、水、蒸汽、影子和反射建立身体关系', '在波多黎各与美国不同地点反复拍摄', '把跨十年的图像按感觉、动作和元素而非线性时间重新编辑', '将核心作品重组为 Holding Water 展览与 Blue Sun 摄影书'],
        sourceUrl: 'https://www.dashwoodprojects.com/genesis-b%C3%A1ez',
        images: [],
        relations: [{ kind: '出版', label: 'Blue Sun / Sol Azul', detail: 'Capricious Publishing · 2025' }, { kind: '展览', label: 'Holding Water — Dashwood Projects', detail: '2025–2026' }]
      }
    ]
  },
  {
    id: 'pia-paulina-guilmoth',
    name: 'Pia-Paulina Guilmoth',
    born: '1993',
    base: 'Rural Maine',
    intro: '使用 4×5 大画幅相机、强闪光和缓慢的模拟制作过程，在夜间与朋友、动物、蜘蛛网、花和泥土共同制造图像，把自然环境真正当成不可控制的合作对象。',
    methods: ['4×5 大画幅', '夜间摄影', '强闪光', '自然材料雕塑', '长期等待', '模拟摄影'],
    subjects: ['跨性别经验', '酷儿社群', '乡村', '自然', '阶级', '亲密关系'],
    outputs: ['摄影', '摄影书', '雕塑', '展览'],
    institutions: ['SFMOMA', 'MoMA', 'Aperture', 'CLAMP'],
    achievements: ['Google/Aperture Creator Labs Grant · 2024', 'Paris Photo–Aperture Jurors’ Special Mention · 2025'],
    whyImportant: '她的“自然”不是背景：会先用蜘蛛网、花等材料搭出脆弱结构，再等待风、水、虫或动物介入；因此成片同时是摆拍、自然过程和长期身体等待共同完成的。',
    projects: [
      {
        title: 'Flowers Drink the River',
        period: '2022–2025',
        cluster: '夜间 / 大画幅 / 酷儿乡村 / 自然协作',
        summary: '记录性别转换最初两年以及缅因乡村的朋友和生活，以夜间大画幅摄影把酷儿亲密关系、动物、植物和地景组织成带有仪式感的共同世界。',
        actions: ['夜间携带 4×5 大画幅相机进入乡村地景', '用强闪光照亮人物、动物和自然细节', '采集蜘蛛网、花等材料搭建临时雕塑', '等待风、水、光线和昆虫改变结构', '通过多夜反复出现建立与野生动物的信任', '将长期图像编辑为摄影书与展览'],
        sourceUrl: 'https://clampart.com/2025/02/pia-paulina-guilmoth/',
        images: [{
          url: 'https://media.vogue.com.tw/photos/6879fcf5e3482ccc2235e2c5/master/w_1600%2Cc_limit/5.jpg',
          title: 'Flowers Drink the River — spiderweb and flowers',
          credit: '© Pia-Paulina Guilmoth',
          sourceUrl: 'https://www.vogue.com.tw/article/pia-paulina-guilmoth-and-her-work-flowers-drink-the-river-a-conversation-with-alessia-glaviano',
          sourceLabel: 'Vogue / project documentation'
        }],
        relations: [{ kind: '出版', label: 'Flowers Drink the River — Stanley/Barker', detail: '2024' }, { kind: '奖项', label: 'Paris Photo–Aperture PhotoBook Awards', detail: 'Jurors’ Special Mention · 2025' }]
      }
    ]
  },
  {
    id: 'pao-houa-her',
    name: 'Pao Houa Her',
    born: '1982',
    base: 'Minnesota',
    intro: '从赫蒙族离散史、家庭迁移路线和摄影棚肖像传统出发，把真实植物、塑料花、印刷风景、Google Maps 与家族记忆组合起来，制造介于故乡、替代故乡和想象故乡之间的摄影。',
    methods: ['肖像', '家庭史', '模拟景观', 'Google Maps 研究', '摄影棚布景', 'lenticular print'],
    subjects: ['赫蒙族', '难民经验', '故乡', '迁移', '越战', '植物'],
    outputs: ['摄影', 'lenticular print', '装置'],
    institutions: ['Whitney Museum', 'MoMA', 'John Michael Kohler Arts Center'],
    achievements: ['Whitney Biennial 2022', 'The Modern Window · MoMA 2024–2025'],
    whyImportant: '她把“故乡”处理成一种视觉构造：真实迁移路线、美国温室里的热带植物、人工花与印刷山景可以同时扮演老挝，从而让摄影暴露记忆如何用替代物维持一个无法真正返回的地方。',
    projects: [
      {
        title: 'After the Fall of Hmong Teb Chaw',
        period: '2017–2022',
        cluster: '赫蒙肖像 / 人工自然 / 替代故乡',
        summary: '以老年赫蒙女性为肖像主体，在养老中心与温室式植物环境中重新使用赫蒙传统肖像的花卉、植物和居中构图，同时把“热带故乡”变成明显可被替换的布景。',
        actions: ['与赫蒙社区长期建立关系', '拍摄老年女性肖像', '借鉴传统赫蒙肖像的居中与花卉布景', '使用现场植物与人工植物制造替代热带环境', '将肖像和植物图像交替编排'],
        sourceUrl: 'https://whitney.org/media/52210',
        images: [],
        relations: [{ kind: '展览', label: 'Whitney Biennial', detail: '2022' }]
      },
      {
        title: 'Pictures from Paradise',
        period: '2024',
        cluster: '家庭逃亡路线 / Google Maps / lenticular landscape',
        summary: '根据家人从老挝逃亡的记忆，四十年后使用 Google Maps 重走可能的隐藏路线，再把今天的地景、母亲花园中的罂粟和视觉叠层做成可变观看角度的图像。',
        actions: ['根据家庭口述回忆迁移路线', '使用 Google Maps 定位可能的森林空地', '重新拍摄或搜集路线地景', '叠加母亲在明尼苏达种植的罂粟图像', '使用 3D lenticular print 让不同观看角度显示不同图层'],
        sourceUrl: 'https://www.moma.org/calendar/exhibitions/5749',
        images: [],
        relations: [{ kind: '展览', label: 'The Modern Window: Pao Houa Her — MoMA', detail: '2024–2025' }]
      }
    ]
  },
  {
    id: 'soumya-sankar-bose',
    name: 'Soumya Sankar Bose',
    born: '1990',
    base: 'Kolkata',
    intro: '将口述史、缺失档案、地方社群和重演摄影放在一起，在历史几乎没有官方图像时，通过长期调查和共同重构制造一种明确承认“事实与记忆无法完全重合”的替代档案。',
    methods: ['口述史', '档案研究', '重演摄影', '长期田野', '电影', '艺术家书'],
    subjects: ['印度', '难民', '种姓', '失踪', '记忆', '民间剧场'],
    outputs: ['摄影', '电影', '替代档案', '摄影书', '展览'],
    institutions: ['Experimenter', 'Les Rencontres d’Arles', 'Delfina Foundation'],
    achievements: ['Louis Roederer Discovery Public Award · Les Rencontres d’Arles 2023', 'Paris Photo–Aperture PhotoBook of the Year shortlist · 2025'],
    whyImportant: '他是理解“重演不等于造假”的好例子：当官方档案几乎不存在时，幸存者的口述、地点研究和表演式重构被明确标注为一种记忆方法，而不是假装成新闻照片。',
    projects: [
      {
        title: 'Where the Birds Never Sing',
        period: '2017–2020',
        cluster: 'Marichjhapi / 口述史 / 重演 / 替代档案',
        summary: '围绕 1979 年 Marichjhapi 难民被强制驱逐与死亡的历史，在缺乏完整官方记录的情况下，通过幸存者访谈、地点调查和重演摄影拼接被压抑的记忆。',
        actions: ['长期采访幸存者并记录口述史', '调查事件地点与迁移路径', '从零散档案和个人记忆提取场景信息', '与参与者共同重演部分记忆场景', '让纪实地点、重演和档案在同一系列中并存', '将材料编辑成摄影书'],
        sourceUrl: 'https://experimenter.in/exhibitions/6-soumya-sankar-bose-where-the-birds-never-experimenter-ballygunge-place/overview/',
        images: [],
        relations: [{ kind: '出版', label: 'Where the Birds Never Sing', detail: 'Red Turtle Photobook · 2020' }]
      },
      {
        title: 'A Discreet Exit Through Darkness / Things We Lost Last Night',
        period: '2020–2025',
        cluster: '家庭史 / 失踪 / 电影与摄影书',
        summary: '继续以家庭与地方记忆、失踪和死亡为入口，把摄影、移动影像和文本转成相互补充的叙事；2025 年两个项目被并置出版。',
        actions: ['从家庭与地方口述线索建立研究', '使用摄影与移动影像分别处理可见和不可见材料', '将不同项目通过书籍设计并置', '让档案缺口以沉默、黑场或叙事间隙保留下来'],
        sourceUrl: 'https://soumyasankarbose.in/books-publications/',
        images: [],
        relations: [{ kind: '出版', label: 'A Discreet Exit Through Darkness & Things We Lost Last Night', detail: 'Red Turtle Photobook · 2025' }, { kind: '奖项', label: 'Paris Photo–Aperture PhotoBook Awards', detail: 'PhotoBook of the Year shortlist · 2025' }]
      },
      {
        title: 'We Need to Talk in Whispers',
        period: '2025–2026',
        cluster: '失踪个案 / 替代档案 / 个案研究',
        summary: '以多个失踪个案为单位，将照片、口述材料与研究碎片组织成个案式叙事，把“找不到完整真相”本身变成作品结构。',
        actions: ['选择具体失踪个案建立 case study', '搜集口述、信件和地方线索', '以摄影和档案物构成每个个案的证据层', '让不同个案并排展示而不强行合并成单一解释'],
        sourceUrl: 'https://experimenter.in/exhibitions/158-soumya-sankar-bose-we-need-to-talk-experimenter-ballygunge-place-kolkata/works/',
        images: [],
        relations: [{ kind: '展览', label: 'We Need To Talk In Whispers — Experimenter', detail: '2026' }]
      }
    ]
  },
  {
    id: 'sheida-soleimani',
    name: 'Sheida Soleimani',
    born: '1990',
    base: 'Providence, Rhode Island',
    intro: '把网络新闻图、家庭照片、遗物、手工道具、父母本人和活体动物搭成高度压缩的摄影棚场景，再用中画幅相机把立体拼贴压回一张图像，处理伊朗政治、流亡与照护。',
    methods: ['摄影棚搭景', '新闻图像挪用', '家庭档案', '拼贴', '中画幅摄影', '活体动物'],
    subjects: ['伊朗', '流亡', '家庭', '地缘政治', '照护', '迁徙'],
    outputs: ['摄影', '装置', '雕塑', '电影', '墙绘'],
    institutions: ['ICP', 'Guggenheim Museum', 'MFA Boston', 'Edel Assanti'],
    achievements: ['Sheida Soleimani: Panjereh · ICP 2025', 'Guggenheim Fellowship · 2026'],
    whyImportant: '她不是在 Photoshop 里把新闻图拼成超现实场景，而是先把照片打印、裁切、做成背景和物件，在摄影棚中真实搭成立体 tableau，再一次性拍回二维；“搭景”本身就是政治关系的空间模型。',
    projects: [
      {
        title: 'Ghostwriter',
        period: '2021–',
        cluster: '父母流亡史 / 家庭档案 / 摄影棚重构',
        summary: '围绕父母作为伊朗政治难民的经历，让家庭遗物、旧照片、父母本人和经过加工的地景图像共同进入摄影棚，逐件重构监禁、藏匿、越境和迁移记忆。',
        actions: ['记录父母的政治流亡口述', '搜集家庭照片、遗物与母亲的绘画', '从网络与档案获取地景和政治图像', '打印并搭建多层摄影棚背景与道具', '邀请父母进入部分场景并使用面具保护身份', '使用中画幅相机和小光圈把不同空间层压成一张清晰图像'],
        sourceUrl: 'https://www.icp.org/exhibitions/sheida-soleimani-panjereh',
        images: [{
          url: 'https://static-assets.artlogic.net/c_limit%2Cf_auto%2Cfl_lossy%2Cq_auto/ws-edelassanti2/usr/library/main/images/sheida-soleimani-artwork-6-1-1536x864.jpg',
          title: 'Sheida Soleimani — constructed studio tableau context',
          credit: '© Sheida Soleimani',
          sourceUrl: 'https://edelassanti.com/artists/67-sheida-soleimani/biography/Sheida%2BSoleimani%2BCv%2BEdel%2BAssanti/',
          sourceLabel: 'Edel Assanti'
        }],
        relations: [{ kind: '展览', label: 'Panjereh — International Center of Photography', detail: '2025' }]
      },
      {
        title: 'Flyways / Panjereh',
        period: '2024–2026',
        cluster: '受伤候鸟 / 照护 / 模拟近摄',
        summary: '将野生动物康复工作带进艺术实践，以近距离模拟摄影拍摄受伤和康复中的候鸟，并把鸟类迁徙的障碍与人的被迫迁移并置。',
        actions: ['在野生动物康复工作中照护受伤候鸟', '使用模拟摄影进行极近距离鸟类肖像', '减少 Ghostwriter 式复杂拼贴，让羽毛、眼睛和伤痕本身成为主要画面', '把鸟类迁徙与家庭流亡史并置而不把两者等同'],
        sourceUrl: 'https://www.icp.org/sites/default/files/2025-05/Sheida%20Soleimani-%20Panjereh%20-%20ICP-Press%20Release_0.pdf',
        images: [],
        relations: [{ kind: '展览', label: 'Flyways — Harlan Levey Projects', detail: '2026' }]
      }
    ]
  }
];

export const artistBatch24: Artist[] = records.map(record => ({
  ...record,
  projects: record.projects.map(project => ({
    year: project.period,
    title: project.title,
    type: project.cluster,
    facts: project.actions,
    reading: project.summary,
  })),
  images: record.projects.flatMap(project => project.images),
  sourceUrl: record.projects[0].sourceUrl,
  sourceLabel: '艺术家 / 机构资料',
}));

export const archiveBatch24: Record<string, ArtistArchive> = Object.fromEntries(
  records.map(record => {
    const imagedProjects = record.projects.filter(project => project.images.length > 0).length;
    return [record.id, {
      artistId: record.id,
      projectCoverage: `${record.projects.length} 个精选项目 / 作品群已索引`,
      imageCoverage: `${imagedProjects} / ${record.projects.length} 项目配图`,
      note: '优先记录可核查的制作动作、材料、编排与版本关系；当前为精选研究档案，不把零散信息冒充作品全集。',
      projects: record.projects,
      awards: record.achievements.filter(item => /Award|Grant|Fellow|奖|shortlist|Mention/.test(item)),
      exhibitions: record.achievements.filter(item => !/Award|Grant|Fellow|奖|shortlist|Mention/.test(item)),
      sources: record.projects.map(project => ({ label: project.title, url: project.sourceUrl })),
    }];
  })
);
