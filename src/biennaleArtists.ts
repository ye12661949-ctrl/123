import type { Artist, ArtworkImage, Project } from './data';

const image = (url: string, title: string, credit: string, sourceUrl: string, sourceLabel: string): ArtworkImage => ({ url, title, credit, sourceUrl, sourceLabel });
const project = (year: string, title: string, type: string, facts: string[], reading: string): Project => ({ year, title, type, facts, reading });

export const biennaleArtists: Artist[] = [
  {
    id: 'yuko-mohri', name: 'Yuko Mohri', chineseName: '毛利悠子', born: '1980', base: 'Tokyo',
    intro: '把漏水、腐烂水果、电流、声音和日常废弃物连接成持续变化的现场系统，让作品像环境一样自己运行。',
    methods: ['动态装置', '声音装置', '场域特定', 'found object', '系统过程'],
    subjects: ['生态', '城市基础设施', '偶然性', '衰变', '循环', '日常生活'],
    outputs: ['动态装置', '声音装置', '空间装置'],
    institutions: ['Venice Biennale', 'Gwangju Biennale', 'Japan Foundation'],
    achievements: ['Japan Pavilion, Venice Biennale 2024', '14th Gwangju Biennale 2023'],
    whyImportant: '她不是先设计一个稳定雕塑再搬进展厅，而是把现场气候、漏水、腐烂和电信号纳入系统。适合研究“作品如何把不可控条件变成材料”。',
    projects: [
      project('2009–', 'Moré Moré (Leaky)', '漏水 / 动态系统', ['从东京地铁工作人员临时处理漏水的 bricolage 得到灵感。', '泵、水管、容器和现场物件组成循环水系统。'], '重点不是装置长什么样，而是问题—应急处理—再次泄漏形成的循环。'),
      project('2021–', 'Decomposition', '水果 / 电信号 / 声音', ['把电极插入水果。', '水果湿度变化转换成声音和灯光信号。', '腐烂过程实时改变作品。'], '材料不是被动道具，腐烂本身就是作品的时间结构。'),
      project('2024', 'Compose', 'Japan Pavilion / 场域特定', ['在威尼斯当地采购材料并针对日本馆建筑制作。', 'Moré Moré 与 Decomposition 在现场环境中形成新的版本。'], '国家馆不是旧作陈列，而是被当成工作室和生态系统。')
    ],
    images: [image('https://images.squarespace-cdn.com/content/v1/5d18a9c55ad346000147679d/92f50dfd-e655-46d6-bf13-5adff7900f37/L1120294.JPG?format=2500w', 'Decomposition', '© Yuko Mohri', 'https://mohrizm.net/works/decomposition/', 'Artist website')],
    sourceLabel: 'Japan Foundation', sourceUrl: 'https://venezia-biennale-japan.jpf.go.jp/e/art/2024'
  },
  {
    id: 'inuuteq-storch', name: 'Inuuteq Storch', born: '1989', base: 'Nuuk / Copenhagen',
    intro: '在个人生活、家庭档案与格陵兰摄影史之间工作，把内部视角、日常快照和被忽略的历史影像放回同一条视觉谱系。',
    methods: ['家庭档案', '日记式摄影', '长期项目', '档案研究', '摄影书'],
    subjects: ['格陵兰', '家庭', '殖民', '日常生活', '身份', '摄影史'],
    outputs: ['摄影书', '摄影', '档案式展览'],
    institutions: ['Venice Biennale', 'Sharjah Biennial'],
    achievements: ['Denmark Pavilion, Venice Biennale 2024', 'Sharjah Biennial 2023'],
    whyImportant: '他的价值不在“从外部记录格陵兰”，而在用家庭照片、朋友、私人快照和历史档案建立内部视觉史，从根本上改变谁有权描述一个地方。',
    projects: [
      project('2018', 'Porcelain Souls', '家庭档案 / 书信', ['整理父母留下的照片和信件。', '把私人关系与格陵兰近代生活并置。'], '家庭材料同时是私人史和一份由内部保存的社会历史。'),
      project('2019', 'Flesh', '日记式摄影', ['以朋友、身体、居住空间和日常片段构成私人视觉日记。'], '粗粝快照是争夺“格陵兰日常应该由谁来拍”的位置。'),
      project('2022', 'Keepers of the Ocean', '长期城市日常 / 摄影书', ['长期拍摄 Sisimiut 等地的年轻人和日常环境。'], '地方不是背景，而是关系网络。'),
      project('2024', 'Rise of the Sunken Sun', 'Denmark Pavilion / 档案与当代摄影', ['个人摄影与格陵兰视觉史共同进入丹麦馆。'], '国家馆制度被反过来用于重写丹麦—格陵兰之间的观看权力。')
    ],
    images: [image('https://images.squarespace-cdn.com/content/v1/57867c3203596edb2dc8e554/94584a23-4c3f-46a4-932c-f1ea6d3eff4a/07_Danish_Pavilion_Biennale_2024_inst_views_ph_%C2%A9_Ugo_Carmeni.jpg', 'Rise of the Sunken Sun — Danish Pavilion', '© Inuuteq Storch / photo Ugo Carmeni', 'https://www.inuuteqstorch.com/', 'Artist website')],
    sourceLabel: 'Artist website', sourceUrl: 'https://www.inuuteqstorch.com/'
  },
  {
    id: 'kapwani-kiwanga', name: 'Kapwani Kiwanga', born: '1978', base: 'Paris',
    intro: '把历史研究、植物、颜色、材料和建筑转成空间装置，追踪殖民制度如何藏在看似中性的物质和环境里。',
    methods: ['研究型装置', '场域特定', '材料研究', '档案研究', '空间编排'],
    subjects: ['殖民', '贸易', '权力', '植物', '种族', '价值系统'],
    outputs: ['大型装置', '雕塑', '影像', '空间介入'],
    institutions: ['Venice Biennale', 'MOCA Toronto', 'Kunstmuseum Wolfsburg'],
    achievements: ['Canada Pavilion, Venice Biennale 2024', 'Prix Marcel Duchamp 2020'],
    whyImportant: '她很适合研究“研究型艺术为什么不一定长得像档案”。大量历史调查最后可能只留下颜色、珠子、植物或空间结构，但制度关系仍被压进材料。',
    projects: [
      project('2013–', 'Flowers for Africa', '档案 / 植物 / 独立史', ['从历史照片中寻找非洲国家独立仪式上的花束。', '依据档案重新制作花艺并让鲜花自然枯萎。'], '档案被转换成会死亡的实体，历史记忆因此具有时间性。'),
      project('2019', 'Greenbook', '旅行制度 / 种族隔离档案', ['研究 The Negro Motorist Green Book 与美国黑人旅行史。'], '把移动自由与制度性风险连接起来。'),
      project('2024', 'Trinket', 'Canada Pavilion / 珠子 / 全球贸易', ['使用约七百万颗 Venetian seed beads。', '珠帘覆盖并穿越加拿大馆建筑。'], '一颗装饰珠同时连接威尼斯制造史、殖民交换、货币和价值制度。')
    ],
    images: [image('https://images.squarespace-cdn.com/content/v1/55fb5ba0e4b0f81e4e52f39a/d1b78380-024b-4bda-893e-a346f141709a/Trinket_press_edited_high-10.jpg', 'Trinket — Canada Pavilion', '© Kapwani Kiwanga', 'https://www.labiennale.org/en/art/2024/canada', 'La Biennale di Venezia')],
    sourceLabel: 'La Biennale di Venezia', sourceUrl: 'https://www.labiennale.org/en/art/2024/canada'
  },
  {
    id: 'gulsun-karamustafa', name: 'Gülsün Karamustafa', born: '1946', base: 'Istanbul',
    intro: '数十年持续处理迁徙、流离、性别、国家现代化和大众文化，让纺织、旧物、影像和建筑成为政治记忆的载体。',
    methods: ['档案研究', 'found object', '影像装置', '纺织', '空间装置'],
    subjects: ['迁徙', '国家', '性别', '记忆', '现代化', '流离'],
    outputs: ['装置', '影像', '绘画', '纺织作品'],
    institutions: ['Venice Biennale', 'Istanbul Biennial', 'São Paulo Biennial'],
    achievements: ['Türkiye Pavilion, Venice Biennale 2024'],
    whyImportant: '她让“迁徙”不只靠人物肖像表现，而是进入毯子、行李、房间、旧物和大众装饰里。非常适合研究社会史如何被材料化。',
    projects: [
      project('1992', 'Mystic Transport', '迁徙 / 被褥 / 装置', ['使用彩色缎面被褥和金属篮筐形成运输中的物质景观。'], '迁徙先成为体积、重量和可携带物，而不是说明文字。'),
      project('2001', 'Men Crying', '性别 / 影像表演', ['通过男性哭泣的影像挑战强硬男性气质。'], '把性别结构放进表演和情绪。'),
      project('2024', 'Hollow and Broken: A State of the World', 'Türkiye Pavilion / 大型装置', ['围绕空洞、破裂与相互依存建立整体空间。'], '晚期实践把长期政治记忆压缩成空间和材料关系。')
    ],
    images: [image('https://turkiyepavyonu24.iksv.org/images/content/Gulsun-Karamustafa-Stoic-City-2021-1.jpg', 'Stoic City', '© Gülsün Karamustafa', 'https://turkiyepavilion24.iksv.org/', 'Türkiye Pavilion / IKSV')],
    sourceLabel: 'Türkiye Pavilion / IKSV', sourceUrl: 'https://turkiyepavilion24.iksv.org/'
  },
  {
    id: 'gliceria-tupinamba', name: 'Glicéria Tupinambá', born: '1982', base: 'Serra do Padeiro / Bahia',
    intro: '以 Tupinambá 社群知识、鸟类、纤维与传统 mantle 的研究、制作和回归为核心，让作品同时承担记忆、权利和文化复归。',
    methods: ['社区研究', '传统工艺', '档案研究', '合作实践', '材料研究'],
    subjects: ['原住民知识', '殖民', '土地', '文化复归', '记忆', '共同体'],
    outputs: ['纺织 / mantle', '装置', '影像', '研究展示'],
    institutions: ['Venice Biennale', 'Fundação Bienal de São Paulo'],
    achievements: ['Hãhãwpuá / Brazil Pavilion, Venice Biennale 2024'],
    whyImportant: '她提醒我们，作品未必只是“艺术家制作的物件”。研究、社群授权、传统知识的恢复、制作过程以及物件回到共同体，都可能属于作品本身。',
    projects: [
      project('长期', 'Manto Tupinambá', '传统知识 / 制作 / 文化复归', ['研究博物馆中的历史 mantle。', '与社群恢复材料知识和制作方法。'], '追踪它从殖民收藏到知识回归的制度路线。'),
      project('2023–24', 'Manto em Movimento', '研究 / 流通 / 社群', ['让 mantle 的制作、移动和公共讨论同时发生。'], '“移动”本身成为文化权利的一部分。'),
      project('2024', 'Ka’a Pûera: we are walking birds', 'Hãhãwpuá Pavilion / Brazil', ['原住民身体、鸟、土地与殖民历史互相连接。'], '国家馆被重新命名为 Hãhãwpuá，本身就是对国家叙事的改写。')
    ],
    images: [image('https://riff.media/cdn-cgi/image/width%3D3840%2Cquality%3D75/images/gliceria-tupinamba-federmantel-brasilianischer-pavillon-biennale-venezia-2024.jpg?s=a36a7700f4eecd00aa4d99eb48390dd9&w=1701', 'Manto Tupinambá — Hãhãwpuá Pavilion', '© Glicéria Tupinambá', 'https://bienal.org.br/', 'Fundação Bienal de São Paulo')],
    sourceLabel: 'Fundação Bienal de São Paulo', sourceUrl: 'https://bienal.org.br/'
  },
  {
    id: 'doruntina-kastrati', name: 'Doruntina Kastrati', born: '1991', base: 'Pristina',
    intro: '通过雕塑、声音、录像和口述史研究工业劳动如何直接进入女性身体，尤其关注去工业化、工伤和照护负担。',
    methods: ['口述史', '研究型装置', '声音装置', '雕塑', '影像'],
    subjects: ['劳动', '女性身体', '工业', '阶级', '创伤', '科索沃'],
    outputs: ['雕塑', '声音装置', '影像', '大型装置'],
    institutions: ['Venice Biennale', 'Sharjah Biennial', 'Istanbul Biennial', 'Manifesta'],
    achievements: ['Special Mention for National Participation, Venice Biennale 2024', 'Kosovo Pavilion 2024'],
    whyImportant: '她把劳动研究从数据和社会新闻压回到身体：重复动作、金属声、义肢般的雕塑和工人的口述共同构成证据。',
    projects: [
      project('2020', 'Public Heroes and Secrets', '公共记忆 / 社会结构', ['研究公共记忆中的英雄化与被隐藏经验。'], '公共记忆不是纪念碑本身，而是选择机制。'),
      project('2022', 'Ring the Bells My Land', 'Manifesta 14 / 地方与声音', ['把地方经验转成声音与空间介入。'], '声音成为进入地方历史的方式。'),
      project('2024', 'The Echoing Silences of Metal and Skin', 'Kosovo Pavilion / 女性工业劳动', ['访谈女性工人。', '以金属雕塑、声音和影像处理工伤与身体损耗。'], '“金属”和“皮肤”把产业结构直接连接到身体。'),
      project('2025', 'A Horn That Swallows Songs', 'Istanbul Biennial / 声音与雕塑', ['继续以声音、工业形式和身体经验工作。'], '可以看到国家馆项目之后的方法延续。')
    ],
    images: [image('https://resources.koha.net/images/2024/April/19/c24abd6a-dda4-4797-b478-4ef494ee040b.webp?h=550&q=90&r=fill&w=860', 'The Echoing Silences of Metal and Skin — Kosovo Pavilion', '© Doruntina Kastrati', 'https://2024.pavilionofkosovo.com/', 'Kosovo Pavilion')],
    sourceLabel: 'Kosovo Pavilion', sourceUrl: 'https://2024.pavilionofkosovo.com/'
  },
  {
    id: 'rosana-paulino', name: 'Rosana Paulino', born: '1967', base: 'São Paulo',
    intro: '把黑人家庭照片、殖民科学图像、缝纫、版画与植物学结构重新组合，持续拆解巴西社会如何制造黑人女性身体的历史位置。',
    methods: ['档案挪用', '缝纫', '版画', '拼贴', '研究型装置'],
    subjects: ['黑人女性', '殖民', '科学种族主义', '家庭', '奴隶制', '巴西'],
    outputs: ['摄影装置', '版画', '纺织 / 缝纫', '艺术家书'],
    institutions: ['Venice Biennale', 'MoMA', 'Pinacoteca de São Paulo'],
    achievements: ['Venice Biennale International Exhibition 2022', 'Brazil Pavilion, Venice Biennale 2026'],
    whyImportant: '她非常适合研究“历史照片如何被重新制造”。缝线、切割、复制和版画不是形式装饰，而是在真实地改变殖民档案对身体的分类方式。',
    projects: [
      project('1997', 'Bastidores', '家庭照片 / 缝纫', ['把黑人女性肖像转印到绷在刺绣框上的织物。', '用粗重缝线遮挡、刺穿或连接脸部。'], '缝纫成为对沉默和暴力的身体性标记。'),
      project('2012–14', 'Assentamento', '殖民科学图像 / 解剖 / 修复', ['挪用历史人体分类图像。', '切开、缝合和重新拼接身体。'], '她不只是展示殖民档案，而是直接破坏其完整性。'),
      project('2016', '¿História Natural?', '艺术家书 / 自然史批判', ['把植物、科学图、奴隶制和黑人身体并置。'], '所谓“自然史”被暴露为政治分类史。'),
      project('2026', 'Comigo ninguém pode', 'Brazil Pavilion / 双人国家馆', ['与 Adriana Varejão 共同构成巴西馆。'], '比较她从个人档案进入国家馆后，如何把私人历史提升为国家叙事批判。')
    ],
    images: [image('https://static.labiennale.org/files/styles/seo_thumbnail/public/arte/2022/600x600/rosana_paulino_biennale_arte_2022_600x600.jpg?itok=s7J4sDzn', 'Rosana Paulino — Biennale Arte 2022', '© Rosana Paulino / La Biennale di Venezia', 'https://www.labiennale.org/en/art/2022/milk-dreams/rosana-paulino', 'La Biennale di Venezia')],
    sourceLabel: 'MoMA', sourceUrl: 'https://www.moma.org/artists/42174-rosana-paulino'
  },
  {
    id: 'abbas-akhavan', name: 'Abbas Akhavan', born: '1977', base: 'Montreal / Berlin',
    intro: '以花园、建筑、植物、纪念物和家居结构研究权力如何进入空间，并经常让作品针对具体建筑和政治历史重新生长。',
    methods: ['场域特定', '研究型装置', '材料转译', '雕塑', '空间编排'],
    subjects: ['花园', '殖民', '战争', '纪念', '建筑', '生态'],
    outputs: ['大型装置', '雕塑', '植物 / 有机材料', '影像'],
    institutions: ['Venice Biennale', 'Walker Art Center', 'Guggenheim'],
    achievements: ['Canada Pavilion, Venice Biennale 2026'],
    whyImportant: '他适合研究“场域特定”不是把作品尺寸适配建筑，而是先研究建筑、植物、殖民流通和记忆，再让材料关系重写现场。',
    projects: [
      project('2013–', 'Study for a Monument', '植物 / 战争 / 纪念', ['以青铜等材料重制伊拉克地区植物的断裂形态。'], '纪念对象从英雄转向被战争改变的生态。'),
      project('2019–23', 'cast for a folly', '建筑碎片 / 复制', ['通过复制建筑与装饰碎片研究遗产和破坏。'], '复制成为失去原址后的幽灵结构。'),
      project('2021–', 'Variations on a Folly', '花园 / 建筑 / 场域', ['围绕花园、废墟与文化遗产不断改变安装。'], '作品没有固定最终版本，而是随机构现场重新编排。'),
      project('2026', 'Entre chien et loup', 'Canada Pavilion / 殖民植物史', ['把加拿大馆重新想象成 Wardian case。', '以 Victoria 巨型睡莲和人工生长环境讨论帝国植物运输。'], '国家馆建筑本身被变成殖民植物运输技术的隐喻。')
    ],
    images: [image('https://dza2a2ql7zktf.cloudfront.net/binaries-cdn/dqzqcuqf9/image/fetch/q_auto%2Ch_920%2Cw_920%2Cdpr_auto%2Cc_fit/https%3A/d2u3kfwd92fzu7.cloudfront.net/catalog/artwork/gallery/1663/THETHRIDLINE_BASEL15_026-1.jpg', 'Study for a Monument', '© Abbas Akhavan', 'https://www.guggenheim.org/artwork/artist/abbas-akhavan', 'Guggenheim')],
    sourceLabel: 'La Biennale di Venezia', sourceUrl: 'https://www.labiennale.org/en/art/2026/canada'
  }
];
