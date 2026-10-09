import type { Artist } from './data';

// Source audit: research/updates/2026-10-09-broadening60.md
export const broadeningBatch60: Artist[] = [
  {
    id: 'luc-delahaye', name: 'Luc Delahaye', born: '1962', base: 'France',
    intro: '法国摄影艺术家，早年从事战争新闻摄影，2001 年后停止为媒体供稿，转向大尺幅彩色作品。他在战争、政治峰会、灾难现场和群众行动中保持距离，让细节、人物关系与事件的戏剧强度同时进入画面，研究权力如何既作为现实条件，也作为为媒体生产的景观出现。',
    methods: ['冲突现场长期进入', '大尺幅彩色摄影', '中远距离关系观察', '新闻事件再叙事', '媒体景观批判'],
    subjects: ['war and aftermath', 'political power', 'media spectacle', 'collective action', 'ordinary people', 'shared history'],
    outputs: ['大型彩色摄影', '摄影书', '系列展览', '冲突档案', '博物馆展览'],
    institutions: ['Prix Pictet', 'Tate Modern', 'J. Paul Getty Museum', 'Sprengel Museum Hannover', 'Palais de Tokyo', 'Magnum Photos'],
    achievements: ['Prix Pictet Power winner 2012', 'Deutsche Börse Photography Prize 2005', 'Robert Capa Gold Medal 1992 and 2002', 'ICP Infinity Award 2001'],
    whyImportant: '关注理由：Delahaye 把新闻摄影的事件接近能力与历史画般的大幅观看结合起来，使领导人、普通人、暴力和仪式在同一关系场中出现。作品的冷静距离能抵抗即时新闻的单一结论，也可能把苦难重新壮观化；它的批评力取决于人物关系和具体地点是否压过画面的史诗美感。',
    projects: [{ year: '2008–2011', title: 'Various Works', type: '从战争、政治仪式与灾难现场观察权力及其媒体景观的系列作品', facts: ['入围组图包括海地地震后的抢掠者、利比亚逐屋战斗、加沙口岸示威、白俄罗斯反对派集会及世界经济论坛午宴等不同权力现场。', '艺术家通常保持足以看见多重人物关系的距离，并将纪实的直接性与大尺幅、细节丰富、具有叙事结构的彩色画面结合。', '他明确区分权力作为媒体事件被表演的时刻，以及普通人在共同历史中既行动又被现实支配的状态。'], reading: '解读：不同事件没有被压成同一种“冲突图标”，而通过观看距离、人物位置和画面边缘建立复杂关系。大尺幅会延长观看时间，却也带来历史画式崇高；观众必须判断形式强度是在揭露权力，还是替暴力增加可消费的戏剧性。' }],
    images: [], sourceLabel: 'Prix Pictet — Luc Delahaye: Various Works 2008–2011', sourceUrl: 'https://prix.pictet.com/cycles/power/luc-delahaye'
  },
  {
    id: 'daniel-beltra', name: 'Daniel Beltrá', born: '1964', base: 'Seattle, United States',
    intro: '西班牙出生、常驻西雅图的环境摄影师，长期与 Greenpeace 及保护机构合作。他从三千英尺高空拍摄 Deepwater Horizon 漏油，让原油、分散剂、清理船、燃烧烟柱和海岸湿地形成近似抽象绘画的尺度关系，把石油依赖的巨大系统转译为既诱人又令人不安的污染表面。',
    methods: ['航空环境摄影', '灾难现场连续拍摄', '污染尺度可视化', '抽象色彩与证据并置', '保护组织协作'],
    subjects: ['Deepwater Horizon', 'oil dependence', 'marine pollution', 'dispersants', 'environmental disaster', 'industrial energy'],
    outputs: ['航空摄影', '彩色摄影', '摄影书', '环境报道', '全球巡展'],
    institutions: ['Prix Pictet', 'Greenpeace', 'International League of Conservation Photographers', 'World Press Photo', 'Wildlife Photographer of the Year', 'Roca Gallery Madrid'],
    achievements: ['Prix Pictet Power shortlist 2012', 'Wildlife Photographer of the Year 2011', 'POYi Global Vision Award 2008', 'World Press Photo awards 2006 and 2007'],
    whyImportant: '关注理由：Beltrá 的高空视角把无法在地面把握的污染规模变成可见图案，并让清理行动、石油平台与受损海面进入同一系统图。抽象色彩也可能把灾难美化，因此精确日期、飞行高度、处理方式和海岸后果是约束审美消费的必要证据。',
    projects: [{ year: '2010', title: 'Spill', type: '从高空记录 Deepwater Horizon 漏油及清理系统的环境摄影系列', facts: ['艺术家在路易斯安那外海从约三千英尺高空拍摄，记录原油、Corexit 分散剂、控制燃烧、清理船和受污染湿地。', '官方项目说明指出事故释放约 490 万桶原油，影响超过 600 英里海岸，并造成 11 名工人死亡、17 人受伤。', '系列不仅拍污染表面，也把油井平台、飞机喷洒、围油栏和船只航迹纳入画面，显示灾难与能源基础设施及补救工程的关系。'], reading: '解读：俯视压平海面，油污因此像颜料般旋转；船只和平台则提供尺度，迫使抽象重新落回工业责任。若脱离图注，色彩很容易成为“美丽污染”，所以项目必须依靠序列与数据维持证言性质。' }],
    images: [], sourceLabel: 'Prix Pictet — Daniel Beltrá: Spill', sourceUrl: 'https://prix.pictet.com/cycles/power/daniel-beltra'
  },
  {
    id: 'philippe-chancel', name: 'Philippe Chancel', born: '1959', base: 'Paris, France',
    intro: '法国摄影艺术家，在艺术、纪实与新闻之间研究当代图像制度。福岛事故后不到三个月，他沿东北日本海岸行进，以准系统性的地面摄影、GPS 坐标、拍摄时间与同期 Google Earth 卫星图重建路线，把灾后景观和远程数据视角连接起来。',
    methods: ['灾后路线田野', 'GPS 坐标记录', '系列化地景摄影', '卫星影像路线重建', '艺术与新闻边界研究'],
    subjects: ['Fukushima', 'tsunami aftermath', 'nuclear contamination', 'Tohoku', 'image scarcity and excess', 'disaster representation'],
    outputs: ['彩色摄影', '数据化地景系列', '摄影书', '展览', 'Datazone 长期项目'],
    institutions: ['Prix Pictet', 'The Photographers’ Gallery', 'Deutsche Börse Photography Prize', '53rd Venice Biennale', 'Centre Pompidou', 'CFPJ Paris'],
    achievements: ['Prix Pictet Power shortlist 2012', 'Deutsche Börse Photography Prize presentation 2007', 'Workers Emirates shown at 53rd Venice Biennale', 'Dreamlands at Centre Pompidou 2010'],
    whyImportant: '关注理由：Chancel 没有只用废墟制造灾难冲击，而让地面照片、经纬度、时间和卫星预览共同构成可复查的行程。数据框架能抵抗无地点的末日美学，但“寻找标志性图像”仍可能把具体社区的损失压缩成灾难象征，这一矛盾应保留在档案中。',
    projects: [{ year: '2011', title: 'Fukushima: The Irresistible Power of Nature', type: '以 GPS、地面摄影与卫星图重建东北日本灾后路线的系列', facts: ['2011 年 6 月 7 日，艺术家从福岛核电站二十公里禁区边界向北出发，十天行程超过五百公里，抵达宫古附近。', '每张作品以具体地点、GPS 坐标和 GMT 时间命名，拍摄陆前高田、仙台、南三陆、女川、石卷、气仙沼等受灾地点。', '他用同期 Google Earth 卫星图重建路线，将前期远程搜索与地面所见并置；项目属于横跨朝鲜、阿联酋、海地、阿富汗等地的 Datazone。'], reading: '解读：坐标与时间把废墟重新钉回地理和行程，避免单张灾难图漂浮为普遍象征；卫星预览和地面经验之间的差异，也暴露数据视角无法替代身体进入。准系统方法提供证据，同时仍需警惕“标志性画面”对地方经验的覆盖。' }],
    images: [], sourceLabel: 'Prix Pictet — Philippe Chancel: Fukushima', sourceUrl: 'https://prix.pictet.com/cycles/power/philippe-chancel'
  },
  {
    id: 'edmund-clark', name: 'Edmund Clark', born: 'Birth year not publicly stated', base: 'London, United Kingdom',
    intro: '英国研究型艺术家，以摄影、文本、文件、现成图像、书籍与装置连接政治、历史和再现。他在关塔那摩军事审查条件下拍摄牢房、束缚环、强制喂食椅、应急装备和空置公共区，让绝对权力通过日常空间、物件与程序显形，而不是依赖囚犯面孔或暴力瞬间。',
    methods: ['研究型摄影', '受审查空间记录', '物件与建筑类型学', '文本文件并置', '摄影书和装置编辑'],
    subjects: ['Guantanamo Bay', 'state power', 'incarceration', 'bureaucratic control', 'censorship', 'war on terror'],
    outputs: ['摄影', '摄影书', '档案装置', '录像', '现成文件'],
    institutions: ['Prix Pictet', 'Imperial War Museums', 'International Center of Photography', 'Victoria and Albert Museum', 'Fotomuseum Winterthur', 'University of the Arts London'],
    achievements: ['Prix Pictet Power shortlist 2012', 'ICP Infinity Award winner 2017', 'Royal Photographic Society Honorary Fellowship 2018', 'RPS Hood Medal 2011'],
    whyImportant: '关注理由：Clark 把国家权力从抽象法律转为一把椅子、一只脚镣环、一盏持续照明的灯和一套邮件审查程序。无人画面避免把囚犯身份再次物化，却也让受害者身体缺席；作品必须通过文件、书籍序列和审查条件说明“不可见”本身是权力制造的结果。',
    projects: [{ year: '2009', title: 'Guantanamo: If the Light Goes Out', type: '以空间、器具、文件与审查限制呈现拘禁制度的研究型摄影项目', facts: ['艺术家在军事审查下拍摄关塔那摩拘禁设施，包括隔离单元、审讯室、脚镣环、强制喂食椅、医疗用品和应急反应装备。', '项目关注监禁的日常控制：照明、邮件、书写工具、卫生用品、移动、独处和进食都可被制度决定。', '后续摄影书将拘禁空间与美军基地住宅、获释者住所及被审查通信并置，使建筑、消费环境和行政文件共同构成权力档案。'], reading: '解读：严格、正面的构图模仿制度秩序，空无人物的表面却指向摄影被禁止呈现的身体经验。作品的力量不在“看见虐待”，而在识别一整套把暴力变成常规管理的物件和程序；脱离文本时，这些整洁空间也可能显得过分中性。' }],
    images: [], sourceLabel: 'Prix Pictet — Edmund Clark: Guantanamo', sourceUrl: 'https://prix.pictet.com/cycles/power/edmund-clark'
  },
  {
    id: 'jacqueline-hassink', name: 'Jacqueline Hassink', born: '1966–2018', base: 'New York, United States',
    intro: '荷兰摄影艺术家，以全球性的摄影调查、室内类型学和社会学地图研究经济权力。Arab Domains 与阿拉伯国际妇女论坛合作，进入女性商业领袖的会议室和家庭餐桌，以缺席人物的桌面、空间和成对结构比较公共决策权与私人礼仪。',
    methods: ['跨国企业田野', '会议桌与餐桌类型学', '成对室内摄影', '经济网络地图', '机构协作与人物筛选'],
    subjects: ['women and economic power', 'Arab business networks', 'corporate interiors', 'domestic representation', 'gender and leadership', 'global capitalism'],
    outputs: ['彩色摄影', '类型学系列', '摄影书', '社会学地图', '博物馆展览'],
    institutions: ['Prix Pictet', 'Arab International Women’s Forum', 'International Center of Photography', 'Victoria and Albert Museum', 'Fotomuseum Winterthur', 'The Photographers’ Gallery'],
    achievements: ['Prix Pictet Power shortlist 2012', 'Prix No Limit at Les Rencontres d’Arles', 'works exhibited at ICP, V&A and Fotomuseum Winterthur'],
    whyImportant: '关注理由：Hassink 不用传统领袖肖像表现权力，而拍决定发生的会议桌和被要求布置的家庭餐桌，使性别、企业治理与礼仪进入同一比较结构。人物缺席能突出制度空间，也可能再次让被研究者失声，因此合作方式、拒绝参与者和筛选条件同样属于作品。',
    projects: [{ year: '2005–2006', title: 'Arab Domains', type: '通过商业女性的会议桌与家庭餐桌映射阿拉伯经济权力的跨国类型学', facts: ['项目由 Hassink 与 Arab International Women’s Forum 合作，拍摄约旦、科威特、埃及、利比亚、也门、阿曼、沙特、叙利亚和苏丹等地女性商业领袖。', '方法延续 Female Power Stations: Queen Bees：以公司会议桌代表公共经济位置，以家中为重要宾客布置的餐桌指向历史性的私人角色。', '官方档案列出每位参与者的姓名、职位、城市和拍摄日期，使空间类型学同时成为女性商业网络的名录。'], reading: '解读：两张桌子之间不是简单的“工作／家庭”对立，而是权力如何通过建筑、礼仪、准入和自我呈现被组织。没有人物的空间看似客观，实际上每次邀请、接受、拒绝和布置都影响样本；方法的局限也必须成为解读的一部分。' }],
    images: [], sourceLabel: 'Prix Pictet — Jacqueline Hassink: Arab Domains', sourceUrl: 'https://prix.pictet.com/cycles/power/jacqueline-hassink'
  },
  {
    id: 'guy-tillim', name: 'Guy Tillim', born: '1962', base: 'Cape Town, South Africa',
    intro: '南非摄影师，职业生涯始于反种族隔离摄影团体 Afrapix，随后长期报道非洲政治变化。Congo Democratic 把殖民者雕像、莫布图废弃宫殿、民兵首领、联合国直升机、候选人集会和选举广告放在一条历史线上，追踪权力如何在人物、机构、纪念物与城市废墟之间更替。',
    methods: ['长期政治纪实', '人物与制度景观并置', '殖民遗迹调查', '选举现场记录', '历史图注与系列编辑'],
    subjects: ['Democratic Republic of Congo', 'colonial power', 'elections', 'militias', 'political monuments', 'postcolonial history'],
    outputs: ['纪实摄影', '彩色摄影', '摄影书', '新闻档案', '双年展展览'],
    institutions: ['Prix Pictet', 'Afrapix', 'Reuters', 'Agence France-Presse', 'documenta 12', 'São Paulo Biennial'],
    achievements: ['Prix Pictet Power shortlist 2012', 'Leica Oskar Barnack Award 2005', 'Robert Gardner Fellowship 2006', 'documenta 12 participant 2007'],
    whyImportant: '关注理由：Tillim 不把刚果政治简化为单次选举或武装冲突，而让殖民征服、独裁、内战和民主程序通过遗留物与当下群众相互照见。新闻现场仍可能强化“非洲混乱”的外部视角；精确历史图注和跨年代序列，是抵抗这种固定化的关键。',
    projects: [{ year: '1997–2006', title: 'Congo Democratic', type: '通过殖民遗迹、政治人物和选举群众追踪刚果权力史的长期纪实系列', facts: ['系列从 1997 年戈马居民迎接 Laurent Kabila，延伸到 2003 年殖民雕像仓库、莫布图废弃宅邸、民兵与联合国行动，以及 2006 年总统选举。', '画面将 Henry Morton Stanley、Leopold II、Patrice Lumumba 等纪念物，与 Jean-Pierre Bemba 支持者、竞选广告和当代政治行动并置。', '官方说明把帝国扩张与殖民统治视为后来暗杀、独裁、内战和选举不信任的历史前提，系列追踪掌权的个人与机构。'], reading: '解读：倒伏的殖民雕像不是过去的静物，它与集会队伍、保镖和未完成高塔共同说明权力会更名、移位，却持续占据城市空间。序列把新闻瞬间拉长为制度史，但仍需警惕戏剧化群众画面替代刚果社会的内部复杂性。' }],
    images: [], sourceLabel: 'Prix Pictet — Guy Tillim: Congo Democratic', sourceUrl: 'https://prix.pictet.com/cycles/power/guy-tillim'
  }
];
