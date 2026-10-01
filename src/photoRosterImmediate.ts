import type { Artist } from './data';
import { artistBatch27 } from './expansionBatch27';

const source2024 = 'https://www.deutsche-boerse.com/dbg-en/media/news-stories/press-releases/Lebohang-Kganye-wins-the-Deutsche-B-rse-Photography-Foundation-Prize-2024-3968426';

const records = [
  ['valie-export', 'VALIE EXPORT', 'Vienna / Austria', '入围'],
  ['rajesh-vangad', 'Rajesh Vangad', 'Maharashtra / India', '入围'],
  ['hrair-sarkissian', 'Hrair Sarkissian', 'London / Damascus', '入围']
] as const;

const rosterArtists: Artist[] = records.map(([id, name, base, status]) => ({
  id,
  name,
  born: '—',
  base,
  intro: `Deutsche Börse Photography Foundation Prize 2024 ${status}艺术家。先建立可点击名单档案，详细项目与作品图随后逐条核实。`,
  methods: ['摄影 / 当代图像实践'],
  subjects: ['摄影', '记忆', '社会与历史'],
  outputs: ['摄影', '展览'],
  institutions: ['The Photographers’ Gallery', 'Deutsche Börse Photography Foundation Prize'],
  achievements: [`Deutsche Börse Photography Foundation Prize 2024 ${status}`],
  whyImportant: '先保证摄影奖项目录中的官方入围者真正进入主艺术家数据库，而不是只留下一个空的奖项目录入口。',
  projects: [],
  images: [],
  sourceLabel: 'Deutsche Börse Photography Foundation · 2024',
  sourceUrl: source2024
}));

const broadeningArtists: Artist[] = [
  {
    id: 'bouchra-khalili',
    name: 'Bouchra Khalili',
    born: '1975',
    base: 'Berlin / Paris',
    intro: '通过录像、地图、声音和口述史，让迁徙者自己叙述跨境路线，把通常被国家边境系统压缩成统计数字的移动经验重新变成具体的声音与路径。',
    methods: ['口述史', '多屏录像', '地图', '协作式访谈', '档案研究'],
    subjects: ['迁徙', '边境', '公民身份', '非法化', '地中海', '语言'],
    outputs: ['多屏录像装置', '单屏影像', '摄影', '文本'],
    institutions: ['MoMA', 'Documenta', 'Venice Biennale'],
    achievements: ['The Mapping Journey Project 2008–2011 — MoMA collection', 'MoMA solo presentation 2016'],
    whyImportant: '她把地图从国家管理工具反过来交给移动中的人：路线不是抽象箭头，而是由当事人的手势、声音和停顿重新画出来。',
    projects: [{
      year: '2008–2011',
      title: 'The Mapping Journey Project',
      type: '8-channel video / migration / oral mapping',
      facts: ['制作八路彩色有声录像。', '在欧洲、北非与中东的交通节点偶遇并邀请八位跨境迁徙者讲述自己的路线。', '让叙述者一边讲述，一边在地图上重新描画实际走过的路径。', '把每个人的叙述作为独立频道并列呈现。'],
      reading: '关键不是“展示难民故事”，而是让地图的权力关系发生反转：国家通常用地图规定谁能移动，作品则让被限制移动的人重新书写地图。'
    }],
    images: [],
    sourceLabel: 'MoMA',
    sourceUrl: 'https://www.moma.org/calendar/exhibitions/1627'
  },
  {
    id: 'yto-barrada',
    name: 'Yto Barrada',
    born: '1971',
    base: 'Tangier / New York',
    intro: '从丹吉尔、直布罗陀海峡和迁徙制度出发，把摄影、电影、植物学、纺织与出版连接起来，研究限制、等待和生存策略。',
    methods: ['长期摄影', '电影', '档案', '植物研究', '纺织', '出版'],
    subjects: ['Tangier', '迁徙', '边境', '等待', '城市发展', '抵抗'],
    outputs: ['摄影', '电影', '装置', '书籍', '纺织'],
    institutions: ['MoMA', 'Tate', 'Walker Art Center'],
    achievements: ['Artist’s Choice: Yto Barrada—A Raft — MoMA 2021', 'The Strait Project'],
    whyImportant: 'Barrada 很少把边境拍成戏剧化冲突现场，而是拍等待、围栏、渡轮、公交、空地与睡着的人，让制度压力通过日常细节显现。',
    projects: [{
      year: '1998–2004',
      title: 'A Life Full of Holes: The Strait Project',
      type: 'long-term photography / Tangier / border regime',
      facts: ['长期返回 Tangier 与直布罗陀海峡相关地点拍摄。', '记录渡轮、公交、公共花园、等待者、围栏和城市边缘空间。', '避免把跨境问题只集中在“越境瞬间”，而是追踪等待和无法移动的日常。', '把多年的照片组织成摄影书与展览序列。'],
      reading: '这组作品把边境理解成一种持续存在的生活条件，而不是地图上的一条线；等待本身就是政治结构。'
    }],
    images: [],
    sourceLabel: 'MoMA',
    sourceUrl: 'https://www.moma.org/collection/artists/42323'
  },
  {
    id: 'bani-abidi',
    name: 'Bani Abidi',
    born: '1971',
    base: 'Berlin / Karachi',
    intro: '用录像、摄影、声音和轻微荒诞的场景研究国家主义、安保、官僚制度与公共空间，常把看似普通的行政装置当成政治肖像。',
    methods: ['类型学', '录像', '摄影', '声音', '场景建构', '讽刺'],
    subjects: ['国家主义', '安保', '官僚制度', '边境', '公共空间', '南亚'],
    outputs: ['录像', '摄影组照', '装置', '声音作品'],
    institutions: ['MoMA', 'Guggenheim', 'Documenta'],
    achievements: ['Security Barriers A–L — MoMA collection', 'Scenes for a New Heritage — MoMA 2015–2016'],
    whyImportant: '她特别擅长把权力变成“物件目录”：一个路障、一个等待区、一段广播都可以显示国家如何进入日常生活。',
    projects: [{
      year: '2008',
      title: 'Security Barriers A–L',
      type: '12 digital prints / security typology',
      facts: ['制作十二张数字摄影组成的 portfolio。', '把不同形式的安全路障作为独立类型记录。', '以 A–L 的字母命名方式弱化地点故事，强化物件分类。', '通过重复构图让临时安保设施看起来像一个制度设计目录。'],
      reading: '当路障被做成类型学之后，作品关注的就不再是哪一次具体冲突，而是“安全”如何逐渐成为城市视觉和身体移动的常态。'
    }],
    images: [],
    sourceLabel: 'MoMA',
    sourceUrl: 'https://www.moma.org/collection/works/121274'
  },
  {
    id: 'coco-fusco',
    name: 'Coco Fusco',
    born: '1960',
    base: 'New York',
    intro: '通过行为、录像、写作和机构批判处理殖民观看、种族化身体、博物馆展示与政治权力，经常让观众自己的判断和偏见成为作品材料。',
    methods: ['行为艺术', '机构批判', '录像', '写作', '伪民族志', '现场互动'],
    subjects: ['殖民凝视', '种族', '博物馆', '媒体', '政治权力', '身份'],
    outputs: ['行为', '录像', '版画', '文本', '装置'],
    institutions: ['MoMA', 'MoMA PS1', 'Whitney Museum'],
    achievements: ['The Couple in the Cage: Guatinaui Odyssey 1992–1993', 'MoMA collection'],
    whyImportant: '她的作品常常不直接告诉观众“这是讽刺”，而是让观众暴露自己为什么会相信殖民式展示。观看者的误认本身就是作品的一部分。',
    projects: [{
      year: '1992–1993',
      title: 'The Couple in the Cage: Guatinaui Odyssey',
      type: 'performance / pseudo-ethnographic display / video',
      facts: ['与 Guillermo Gómez-Peña 扮演来自虚构“Guatinaui”岛的所谓未被发现原住民。', '两人被置于镀金笼中巡演美国、西班牙、英国和澳大利亚。', '在笼内表演被编造的“传统活动”，包括举重和看电视。', '记录观众对真实性的争论、相信与质疑，并在 1993 年整理成录像。'],
      reading: '作品不是简单恶作剧，而是测试殖民展示模式是否仍然具有可信度；真正被观察的是观众如何观看“他者”。'
    }],
    images: [],
    sourceLabel: 'MoMA',
    sourceUrl: 'https://www.moma.org/collection/works/403501'
  },
  {
    id: 'forensic-architecture',
    name: 'Forensic Architecture',
    born: 'est. 2011',
    base: 'London',
    intro: '由建筑师、程序员、电影人、记者、科学家和法律研究者组成的跨学科调查机构，把建筑模型、开源影像、声音分析和空间重建用于调查国家与企业暴力。',
    methods: ['空间取证', '3D 建模', '开源调查', '影像同步', '音频分析', '证词建模'],
    subjects: ['国家暴力', '警察暴力', '战争', '边境', '企业责任', '环境暴力'],
    outputs: ['调查影片', '3D 模型', '交互地图', '法庭证据', '展览装置'],
    institutions: ['MoMA', 'Whitney Biennial', 'documenta', 'ICA London'],
    achievements: ['Whitney Biennial 2019', 'True to Scale — first U.S. museum survey 2020'],
    whyImportant: '它把“研究型艺术”推到一个非常具体的极端：作品可以同时是展览、调查报告和法律证据。图像在这里不是表达，而是要经得起时间轴和空间位置的验证。',
    projects: [{
      year: '2017',
      title: '77sqm_9:26min',
      type: 'architectural reconstruction / timeline / evidence analysis',
      facts: ['围绕 Halit Yozgat 被杀案件重建约 77 平方米的互联网咖啡馆空间。', '把关键事件压缩到 9 分 26 秒的时间线内逐秒核对。', '结合建筑模型、证词、影像与声音材料测试不同说法是否在空间上可能。', '将调查结果制作成可在公共、法律与展览语境中阅读的证据结构。'],
      reading: '它最值得研究的是“空间可以反驳证词”：当人的记忆和国家叙述冲突时，建筑尺度、视线、声音传播和时间同步可以成为另一种证人。'
    }],
    images: [],
    sourceLabel: 'Museum of Art and Design at MDC',
    sourceUrl: 'https://moadmdc.org/exhibitions/forensic-architecture'
  },
  {
    id: 'dinh-q-le',
    name: 'Dinh Q. Lê',
    born: '1968–2024',
    base: 'Ho Chi Minh City / Los Angeles',
    intro: '把档案照片、好莱坞战争影像和个人记忆切成细条后像草席一样交织，让彼此冲突的历史图像在同一张作品中同时出现。',
    methods: ['photo-weaving', '挪用', '档案图像', '手工编织', '录像', '装置'],
    subjects: ['越南战争', '记忆', '好莱坞', '流亡', '国家叙事', '视觉历史'],
    outputs: ['照片编织', '大型装置', '录像', '雕塑', '摄影'],
    institutions: ['MoMA', 'Mori Art Museum', 'Venice Biennale', 'documenta'],
    achievements: ['MoMA project 2010s', 'From Vietnam to Hollywood series', 'Mori Art Museum retrospective 2015'],
    whyImportant: '他的“拼贴”不是 Photoshop，而是真正把 C-print 切成条后手工交织。一个方向可能来自电影，另一个方向来自新闻或家族图像，冲突被直接写进材料结构。',
    projects: [{
      year: '1990s–2000s',
      title: 'Photo-weavings / From Vietnam to Hollywood',
      type: 'cut C-prints / woven photography / archive montage',
      facts: ['把 chromogenic photographic prints 切成长条。', '借鉴童年从姨母那里学到的越南草席编织方法。', '把好莱坞越战电影、新闻档案和其他历史图像按经纬方向交织。', '用 linen tape 等材料固定大型编织照片。'],
      reading: '画面不是简单叠加，而是两套图像真的占据同一个物理表面：观众无法一次看清完整图像，正好对应记忆与历史叙事之间的竞争。'
    }],
    images: [],
    sourceLabel: 'MoMA post',
    sourceUrl: 'https://post.moma.org/method-and-metaphor-dinh-q-les-untitled-soldiers-at-rest-2003/'
  },
  {
    id: 'isaac-julien',
    name: 'Isaac Julien',
    born: '1960',
    base: 'London / Santa Cruz',
    intro: '把电影语言扩展成多屏空间装置，以高度编排的影像、声音、舞蹈和建筑场景处理离散、迁徙、黑人酷儿历史与资本流动。',
    methods: ['多屏电影', '场景建构', '舞蹈编排', '电影装置', '档案研究', '空间化剪辑'],
    subjects: ['迁徙', '离散', '黑人历史', '酷儿历史', '资本', '建筑'],
    outputs: ['多屏影像装置', '电影', '摄影', '声音'],
    institutions: ['Tate', 'Venice Biennale', 'documenta', 'LACMA'],
    achievements: ['Tate Britain survey 2023', 'Western Union: Small Boats 2007', 'Kaiserring Goslar 2022'],
    whyImportant: '他不是把电影投到墙上就叫装置，而是把剪辑扩展到真实空间：不同屏幕同时发生，观众走动本身参与决定镜头之间的关系。',
    projects: [{
      year: '2007',
      title: 'Western Union: Small Boats',
      type: 'five-screen film installation / migration / choreography',
      facts: ['使用 16mm film 拍摄并转为数字输出。', '制作约 18 分 22 秒的多屏版本，并以五屏、三屏等不同空间配置呈现。', '邀请 choreographer Russell Maliphant 编排身体动作。', '把迁徙、海上航行、建筑与创伤经验通过多地点影像和 5.1 声音连接。'],
      reading: '作品没有把迁徙压缩为新闻图像，而是用身体、节奏和空间制造感官经验；多屏结构让“同时发生在不同地方”的全球移动变得可见。'
    }],
    images: [],
    sourceLabel: 'Isaac Julien Studio',
    sourceUrl: 'https://www.isaacjulien.com/projects/western-union-small-boats/'
  },
  {
    id: 'zarina-bhimji',
    name: 'Zarina Bhimji',
    born: '1963',
    base: 'London',
    intro: '以摄影、电影、声音和装置处理殖民历史、迁徙与建筑遗迹，常避开直接人物叙事，让空房间、制度空间和物质表面承担历史记忆。',
    methods: ['建筑摄影', '电影', '声音', '档案研究', '纺织', '场域观察'],
    subjects: ['殖民', '迁徙', '东非', '印度洋', '档案', '建筑记忆'],
    outputs: ['摄影', '电影', '装置', '纺织与照片组合'],
    institutions: ['Tate', 'Whitechapel Gallery', 'documenta'],
    achievements: ['Turner Prize 2007 shortlisted', 'Lead White — Tate Britain 2018–2019'],
    whyImportant: '她经常不让人物直接进入画面，而是让制度留下的建筑、文件、光线和磨损表面说话。这种“没有人的历史摄影”与战后地景研究可以形成很好的对照。',
    projects: [{
      year: '2018–2019',
      title: 'Lead White',
      type: 'photography / textile / installation',
      facts: ['把摄影与纺织材料组织成装置。', '使用 Lead White 这一历史绘画颜料名称作为项目标题和隐喻。', '继续她对殖民档案、制度空间和物质表面的长期研究。', '在 Tate Britain 展示。'],
      reading: '作品的重要性不在单一图像题材，而在材料与历史语言的交错：颜色、布料和建筑表面都被当作承载制度记忆的证据。'
    }],
    images: [],
    sourceLabel: 'Government Art Collection / Tate record',
    sourceUrl: 'https://artcollection.dcms.gov.uk/person/bhimji-zarina/'
  }
];

const batch27Images: Record<string, Artist['images']> = {
  'john-houck': [{
    url: 'https://media.architecturaldigest.com/photos/55e77e3fcd709ad62e8f6f89/4:3/w_800,h_600,c_limit/dam-images-art-2014-artists-to-watch-john-houck-john-houck-01-aggregates-series.jpg',
    title: 'Aggregates series',
    credit: '© John Houck',
    sourceUrl: 'https://www.johnhouck.com/work/aggregates/',
    sourceLabel: 'John Houck / Architectural Digest'
  }],
  'eileen-quinlan': [{
    url: 'https://whitneymedia.org/assets/artwork/40718/P_2011_342_cropped.jpeg',
    title: 'Smoke & Mirrors #12, 2005',
    credit: '© Eileen Quinlan',
    sourceUrl: 'https://whitney.org/collection/works/40718',
    sourceLabel: 'Whitney Museum'
  }],
  'penelope-umbrico': [{
    url: 'https://d1hhug17qm51in.cloudfront.net/www-media/2026/08/17213659/2009.115.1-2_01_b02.jpg',
    title: '5,377,183 Suns (from Sunsets) from Flickr (Partial), 2009',
    credit: '© Penelope Umbrico · Collection SFMOMA',
    sourceUrl: 'https://www.sfmoma.org/artwork/2009.115.1-2/',
    sourceLabel: 'SFMOMA'
  }],
  'sara-cwynar': [{
    url: 'https://ago.ca/sites/default/files/styles/max_2600x2600/public/2018-01/Tracy%28Cezanne%29-web.jpg?itok=lcaW02cU',
    title: 'Tracy (Cezanne)',
    credit: '© Sara Cwynar',
    sourceUrl: 'https://ago.ca/artist-residence-sara-cwynar',
    sourceLabel: 'Art Gallery of Ontario'
  }],
  'aspen-mays': [{
    url: 'https://media.mcachicago.org/image/IBI5OUKI/original.jpg',
    title: 'Every leaf 0339, 2009',
    credit: '© Aspen Mays · Courtesy of the artist',
    sourceUrl: 'https://mcachicago.org/exhibitions/2010/aspen-mays',
    sourceLabel: 'Museum of Contemporary Art Chicago'
  }],
  'taisuke-koyama': [{
    url: 'https://www.designboom.com/cms/images/fiona02/koyama001.jpg',
    title: 'Rainbow Forms / Rainbow Variations',
    credit: '© Taisuke Koyama',
    sourceUrl: 'https://tk.studio1014.jp/',
    sourceLabel: 'Taisuke Koyama / project documentation'
  }],
  'katja-novitskova': [{
    url: 'https://static-assets.artlogic.net/w_2400%2Ch_2400%2Cc_limit%2Cf_auto%2Cfl_lossy%2Cq_auto/artlogicstorage/kraupatuskanyzeidler/images/view/6743e550815205ad68c9dd7cb5844203j/kraupa-tuskanyzeidler-katja-novitskova-approximation-i-2012.jpg',
    title: 'Approximation I, 2012',
    credit: '© Katja Novitskova',
    sourceUrl: 'https://www.k-t-z.com/artworks/4067-katja-novitskova-approximation-i-2012/',
    sourceLabel: 'Kraupa-Tuskany Zeidler'
  }]
};

const enrichedBatch27: Artist[] = artistBatch27.map(artist => ({
  ...artist,
  images: batch27Images[artist.id] ?? artist.images
}));

export const photoRosterImmediateArtists: Artist[] = [...enrichedBatch27, ...rosterArtists, ...broadeningArtists];
