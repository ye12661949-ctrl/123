import type { Artist } from './data';

// Source audit: research/updates/2026-10-09-broadening40.md
export const broadeningBatch40: Artist[] = [
  {
    id: 'michael-corridore', name: 'Michael Corridore', born: '出生年份未公开', base: 'Sydney / New York City',
    intro: '澳大利亚摄影艺术家，以烟尘、远距观察、极简构图和事件不确定性研究观众、机械运动与地景的碰撞。他最初在汽车赛事等场合拍摄 spectators，随后把注意力转向烟雾和尘土吞没现场的短暂时刻，让举手、遮眼和抱住孩子等细小动作悬在庆祝与灾难之间。',
    methods: ['远距事件摄影', '极简构图', '烟尘遮蔽', '色彩克制', '叙事不确定性'],
    subjects: ['spectatorship', 'car racing', 'landscape collision', 'crowd behavior', 'disaster imagery', '观看与危险'],
    outputs: ['摄影系列', '摄影书', '限量版画', '机构展览'],
    institutions: ['Aperture', 'Australian Centre for Photography', 'Photography Studies College'],
    achievements: ['Aperture Portfolio Prize winner 2008', 'Aperture solo exhibition 2009', 'Australian Centre for Photography exhibition 2009'],
    whyImportant: '关注理由：Corridore 不是通过更多信息解释事件，而是用烟尘主动削减可见性。汽车赛事与灾难现场因此共享同一视觉语法；作品逼迫观众承认，我们常从姿势、色云和既有媒介记忆中仓促决定一个画面究竟意味着胜利还是危险。',
    projects: [{
      year: '2005–2008', title: 'Angry Black Snake', type: '赛事观众、烟尘遮蔽与地景冲突／Aperture Portfolio Prize 2008 winner',
      facts: ['项目起初属于对 auto races 等活动观众的更大范围观察，后来集中于 event 与 landscape 直接、剧烈碰撞的瞬间。', '每幅画面被压缩到 urgent gestures、barely traceable figures 以及覆盖现场的 smoke and dust；色云的细微变化承担主要情绪张力。', '人物举手、遮眼或抱住孩子，但事件性质始终未完全说明，既可被看作汽车比赛，也可被误认为 apocalyptic collision。'],
      reading: '解读：烟尘既是事件留下的物理材料，也是阻断解释的摄影装置。画面脱离说明仍然成立，因为身体动作与不透明空气已制造真实压力；但其诱惑也来自灾难美学，观众必须意识到“不知道发生什么”本身被精心形式化。'
    }], images: [], sourceLabel: 'Aperture — Michael Corridore: Angry Black Snake', sourceUrl: 'https://aperture.org/editorial/2008-portfolio-prize-winner-michael-corridore/'
  },
  {
    id: 'jowhara-alsaud', name: 'Jowhara AlSaud', born: '1978', base: 'Saudi Arabia / New York City',
    intro: '沙特阿拉伯摄影艺术家，以刮除负片乳剂、线描、匿名化与重新印相研究国家审查、自我审查及公共／私人边界。她把沙特媒体中模糊脸部、延长衣袖和在喉部划线的审查语法施加于家庭照片，使照片在被减去可识别信息后获得新的传播自由。',
    methods: ['负片乳剂刮除', '线描转译', '匿名化肖像', '重新印相', '审查语法挪用'],
    subjects: ['Saudi censorship', 'self-censorship', 'family photographs', 'feminine Arab identity', 'public and private', '视觉传播'],
    outputs: ['摄影系列', '蚀刻负片', 'C-print', '灯箱装置', '限量版画'],
    institutions: ['Aperture', 'Victoria and Albert Museum', 'Institut du Monde Arabe', 'Wellesley College', 'School of the Museum of Fine Arts / Tufts University'],
    achievements: ['Aperture Portfolio Prize runner-up 2008', 'Magenta Foundation Flash Forward finalist 2010', 'International Photography Awards finalist 2010'],
    whyImportant: '关注理由：AlSaud 没有只把审查作为外部压迫来说明，而把它变成照片的实际制作工艺。刮掉乳剂既删除身份，也让光穿过空白重新形成图像；作品因此同时呈现控制造成的损失，以及匿名化如何为被摄者和图像争取有限行动空间。',
    projects: [{
      year: '2008–2010', title: 'Out of Line', type: '负片刮刻、匿名肖像与审查语言／Aperture Portfolio Prize 2008',
      facts: ['系列回应 Saudi Arabia 对 billboard、magazine 与家庭图像的视觉审查，包括模糊脸部、用黑笔遮蔽女性四肢，以及在个人相册人物喉部划线。', 'AlSaud 从个人照片制作 line drawings，省略 faces and skin，只保留必要轮廓，再以 dental tools and engravers 刮除负片乳剂并重新印相。', '被简化为线稿后，人物与原照片产生足够距离，既维持 subjects anonymity，也使原本不宜在 gallery 或他人家中展示的肖像获得公开流通可能。'],
      reading: '解读：缺失不是附在作品后的主题，而直接构成亮线、空脸与身体轮廓。图像确实可能因优雅形式弱化审查暴力，但“遮蔽使展示成为可能”的矛盾始终可见，使作品超过单纯的符号挪用。'
    }], images: [], sourceLabel: 'Aperture — Jowhara AlSaud: Out of Line', sourceUrl: 'https://aperture.org/editorial/2008-portfolio-prize-runner-up-jowhara-alsaud/'
  },
  {
    id: 'joe-johnson', name: 'Joe Johnson', born: '出生年份未公开', base: 'United States',
    intro: '美国摄影艺术家与教育者，以空无人物的建筑摄影、人工色彩和后台细节研究 mega church 如何把宗教、消费与娱乐结合成大型空间机制。他避开布道者与满座会众，转而拍摄控制台、布景、荧光灯、纸巾盒和涂料抹布，让信仰的技术结构看起来近似商场、赌场或演唱会后台。',
    methods: ['无人建筑摄影', '后台空间调查', '人工光观察', '类型学', '色彩强化'],
    subjects: ['megachurch', 'fundamentalism', 'religion and entertainment', 'spectacle', 'institutional space', '信仰机制'],
    outputs: ['摄影系列', '建筑摄影', '限量版画', '展览', '教学'],
    institutions: ['Aperture', 'University of Missouri', 'San Francisco Art Institute', 'Massachusetts College of Art and Design', 'Gallery Kayafas'],
    achievements: ['Aperture Portfolio Prize runner-up 2008', 'Gallery Kayafas exhibition', 'University of Missouri photography faculty'],
    whyImportant: '关注理由：Johnson 不依赖宗教人物的夸张表情批判 megachurch，而通过空场后的灯光、开关和装饰揭示它作为娱乐基础设施的运作。无人空间让观众同时感到庞大、廉价和难以定位，也避免作品只变成对信徒的嘲弄。',
    projects: [{
      year: '2006–2008', title: 'Mega Churches', type: '宗教建筑后台、人工光与景观机制／Aperture Portfolio Prize 2008',
      facts: ['系列进入 weekend service 超过两千人的 megachurch，却选择在没有会众的安静时刻拍摄这些 cavernous arenas。', 'neon and fluorescent light 成为主要光源，色彩让空间更接近 strip club、casino、office cubicle、theme park 或 shopping mall，而非传统宗教建筑。', '控制开关、涂料抹布、舞台 armature、桌面和纸巾盒等后台细节被用来呈现艺术家所称的 mechanics of faith。'],
      reading: '解读：宗教与娱乐的混合不是通过文字论证，而由灯光和后台设备直接显形。作品的局限是容易把“俗艳”当作信仰虚假的证据；更有力的阅读是把它看作制度如何借用商业空间技术组织注意力、情绪和共同体。'
    }], images: [], sourceLabel: 'Aperture — Joe Johnson: Mega Churches', sourceUrl: 'https://aperture.org/editorial/2008-portfolio-prize-runner-up-joe-johnson/'
  },
  {
    id: 'hector-mata', name: 'Hector Mata', born: '1963', base: 'Los Angeles, California',
    intro: '秘鲁出生、居于 Los Angeles 的摄影师与电影制作者，以沿线行走、黑白地景、双联画和被遗弃物品研究 US–Mexico border、迁移与夹层身份。他把近乎抽象的边界标记与移民途中留下的鞋、快照和手写信并置，使宏观政治线条重新连接到具体个人旅程。',
    methods: ['边境沿线调查', '黑白地景', '黑白／彩色双联画', '遗留物档案', '自传式纪实'],
    subjects: ['US–Mexico border', 'immigration', 'liminal identity', 'belonging', 'abandoned belongings', '分离与等待'],
    outputs: ['摄影系列', '双联画', '视频', '电影', '限量版画'],
    institutions: ['Aperture', 'Agence France-Presse', 'Los Angeles Center for Digital Art'],
    achievements: ['Aperture Portfolio Prize runner-up 2008', 'Aperture Portfolio Prize Print Series', 'Agence France-Presse staff photographer 1991–2007'],
    whyImportant: '关注理由：Mata 把边界从地图上的抽象线转成道路、金属标记、储水库与个人遗留物的物质系统。双联画在地景和物证之间建立联系，却不代替物品主人讲述完整故事；这种缺口使移民不被压缩为统计数字，也提醒摄影无法恢复匿名旅程的全部经验。',
    projects: [{
      year: '2007', title: 'Limbo', type: '美墨边境、遗留物与夹层身份／Aperture Portfolio Prize 2008',
      facts: ['Mata 从 San Ysidro, California 驾车沿 US–Mexico border 到 Boca Chica, Texas，拍摄物理边界及周边地景。', '系列把 near-abstract black-and-white border scenes 与彩色个人物件组成 diptychs；物件包括移民在沙漠道路上留下的 shoes、snapshots 与 handwritten letters。', '项目以 border 作为 separation 与 intermediate identity 的隐喻，并加入移民向北旅程的视频；艺术家本人的 Peru–Russia–United States 迁移经验构成方法背景。'],
      reading: '解读：黑白地景可能显得安静甚至优美，彩色物件则把危险重新压回画面。物证的匿名性既避免猎奇式面孔消费，也可能让人物再次消失；双联结构因此始终在尊重与缺席之间保持张力。'
    }], images: [], sourceLabel: 'Aperture — Hector Mata: Limbo', sourceUrl: 'https://aperture.org/portfolio-prize/2008-portfolio-prize-runner-up-hector-mata/'
  },
  {
    id: 'elizabeth-pedinotti', name: 'Elizabeth Pedinotti', born: '1978', base: 'United States',
    intro: '美国摄影艺术家，以编排式家庭场景、模糊光线、儿童与日常物品研究被转述的童年记忆、家庭角色和观看立场。她根据确曾发生却并非自己亲历的事件重建画面，让孩子、母亲与祖母的不同视角在同一暂停瞬间争夺解释权。',
    methods: ['记忆重建', '编排摄影', '家庭角色换位', '模糊叙事', '心理光线'],
    subjects: ['childhood memory', 'family perspective', 'play and terror', 'tenderness and manipulation', 'domestic ambiguity', '代际转述'],
    outputs: ['彩色摄影系列', 'Digital C-print', '限量版画', '展览'],
    institutions: ['Aperture', 'San Francisco Art Institute', 'State University of New York at Albany', 'Slought'],
    achievements: ['Aperture Portfolio Prize runner-up 2008', 'Berenice Abbott Prize honorable mention 2008', 'Aperture limited-edition print program'],
    whyImportant: '关注理由：Pedinotti 不把家庭记忆当作可被摄影还原的事实，而明确承认重建会生产新的不确定性。画面停在游戏与伤害、温柔与控制尚未分开的节点，让观众自己的成长经验参与补全故事，也暴露“共鸣”可能误读他人记忆。',
    projects: [{
      year: '2006–2008', title: 'Space Between Hours', type: '童年记忆重建、家庭视角与暂停叙事／Aperture Portfolio Prize 2008',
      facts: ['艺术家将作品称为 recreations of memories that I do not have：事件真实发生，但图像依据转述和自己在脑中的拼接重新制作。', '她在 child、mother 与 grandmother 等不同家庭角色之间转换视角，认为 perspective 会改变所谓个人真相。', 'The Pile 等图像把叙事停在尚未确定的动作中，并让 torture/play、tenderness/terror、innocence/manipulation 等相反解释同时存在。'],
      reading: '解读：模糊和暂停并非仅为营造梦境，而模拟记忆缺少前因后果时的结构。作品的风险是家庭暧昧成为通用审美；儿童身体、物件位置和视角冲突必须在单张图中提供足够摩擦，才能不完全依赖 statement。'
    }], images: [], sourceLabel: 'Aperture — Elizabeth Pedinotti: The Pile / Space Between Hours', sourceUrl: 'https://store.aperture.org/products/the-pile-2006'
  },
  {
    id: 'colin-blakely', name: 'Colin Blakely', born: '出生年份未公开', base: 'Ann Arbor, Michigan',
    intro: '美国摄影艺术家与教育者，以低饱和彩色地景、空场、日常遗留物和长标题观察中西部小城社区的缓慢变化。他在 Ann Arbor 的 Keech Avenue 周边拍摄无人生日会、空棒球场、雪中足球和孤独爆竹，把社区仪式退场后的物件当作价值、地方与时间变化的微弱证据。',
    methods: ['社区步行观察', '低饱和彩色摄影', '空场地景', '物件叙事', '标题写作'],
    subjects: ['Midwestern life', 'community ritual', 'neighborhood change', 'place identity', 'everyday disappearance', '时间与怀旧'],
    outputs: ['摄影系列', '限量版画', '展览', '摄影教学'],
    institutions: ['Aperture', 'University of Michigan', 'University of New Mexico', 'Williams College'],
    achievements: ['Aperture Portfolio Prize runner-up 2008', 'Aperture limited-edition print program', 'US solo and group exhibitions'],
    whyImportant: '关注理由：Blakely 用普通场地和小物件记录变化，不需要拆迁、冲突或宏大事件作为可见证据。长标题把这些物件推向寓言，同时也可能过度规定情绪；低饱和空场是否能在没有标题时保留社区结构，是理解作品强弱的关键。',
    projects: [{
      year: '2006–2008', title: 'Somewhere in Middle America', type: '中西部社区、消退仪式与空场地景／Aperture Portfolio Prize 2008',
      facts: ['系列拍摄艺术家居住的 Ann Arbor Keech Avenue neighborhood，一侧邻 Michigan Stadium，另一侧邻 Almendinger Park。', 'de-saturated images 描绘没有来宾的生日会、空 baseball field、孤独 firecracker、刚被装饰的 picnic table 与雪中的 abandoned soccer ball。', '项目把这些物件视为 community、values and place 变化的迹象，并以 Effigy of the Unmarked but Persistent Passing of Time 等长标题加强时间感。'],
      reading: '解读：空场让社区通过缺席出现，物件像活动刚结束或尚未开始的残余。作品拒绝直接怀旧，却仍以低饱和色和彩色标题制造挽歌气质；最有价值之处是它让“变化”停留为可争论的感觉，而不是预设衰败结论。'
    }], images: [], sourceLabel: 'Aperture — Colin Blakely: Somewhere in Middle America', sourceUrl: 'https://aperture.org/portfolio-prize/2008-portfolio-prize-runner-up-colin-blakely/'
  }
];
