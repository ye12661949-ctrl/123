import type { ArtistArchive, ArchiveRelation } from './archiveData';
const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const atkins='https://www.labiennale.org/en/art/2019/partecipants/ed-atkins';
const atoui='https://www.labiennale.org/en/art/2019/partecipants/tarek-atoui';
const atouiMeet='https://www.labiennale.org/en/news/meetings-art-biennale-arte-2019';
const bader='https://www.labiennale.org/en/art/2019/partecipants/darren-bader';
const baghramian='https://www.labiennale.org/en/art/2019/partecipants/nairy-baghramian';
const beloufa='https://www.labiennale.org/en/art/2019/partecipants/ne%C3%AFl-beloufa';
const altindere='https://www.labiennale.org/en/art/2019/partecipants/halil-alt%C4%B1ndere';

export const archiveBatch103: Record<string, ArtistArchive> = {
  'venice-ed-atkins': {
    artistId:'venice-ed-atkins', projectCoverage:'2 个 CGI self-portrait / drawing-body 节点已建立深档案 · 2017–2019', imageCoverage:'0 / 2 项目暂不使用不稳定外链图像', note:'精选项目档案，尚非作品全集。Atkins 把高拟真 CGI male avatar、自传性文本与手绘 grotesque self-image 放在一起，让“数字身体看起来越真实，主体越不稳定”。',
    projects:[
      {title:'Old Food',cluster:'CGI avatar / melancholy / historical detritus',period:'2017–2019',summary:'大型 CGI installation 以极写实男性 figures、历史感布景与失落/荒诞情绪形成一种既高级又故意笨拙的 digital melancholy。',actions:['以 realistic CGI male figures 作为自画像替身','让 avatar 出现 disproportionate psychical crisis 而非 heroic digital body','把 autobiographical fragments 与 broader historical citations 混合','使用 high-definition image 制造“过度真实”而非透明真实性'],sourceUrl:atkins,images:[],relations:[rel('展览','May You Live In Interesting Times — Venice Biennale 2019','Arsenale')]},
      {title:'Bloom I–X',cluster:'drawing / tarantula-human hybrid / fourth-wall portrait',period:'2019',summary:'十张 drawings 将 tarantula body 与 Atkins 缩小的人头组合；蜘蛛从手或脚边出现，艺术家的脸则直接望向 viewer。',actions:['以 posed hand / foot 作为身体 fragment 起点','将 tarantula abdomen 替换为 artist self-head','保留 arachnid hair 与 human facial expression 的尺度冲突','通过 frontal gaze 让 drawing 主动打破 fourth wall'],sourceUrl:atkins,images:[],relations:[rel('展览','May You Live In Interesting Times — Venice Biennale 2019','Central Pavilion')]}
    ], awards:[], exhibitions:['May You Live In Interesting Times — Venice Biennale 2019'], sources:[{label:'La Biennale · Ed Atkins 2019',url:atkins}]
  },

  'venice-tarek-atoui': {
    artistId:'venice-tarek-atoui', projectCoverage:'2 个 participatory-listening / open-performance 节点已建立深档案 · 2019', imageCoverage:'0 / 2 项目暂不使用不稳定外链图像', note:'Atoui 的核心不是“做声音装置”，而是设计 listening situations：instrument、listener、performer 与空间关系会被重新分配，听觉同时通过视觉和身体触感发生。',
    projects:[
      {title:'Participatory listening environments — Venice 2019',cluster:'sound installation / collaborative instrument / somatic listening',period:'2019',summary:'Biennale 呈现延续其 open-form 方法的 sound environments，使观众不再只是正面听演奏，而通过装置、身体位置与多人共同使用进入声音。',actions:['把 listening 视为可被设计的 spatial condition','让 audience 与 performer 的角色可互换','使用 visual / aural / somatic 多通道经验','通过 collaboration 而不是单作者演奏生成声场'],sourceUrl:atoui,images:[],relations:[rel('展览','May You Live In Interesting Times — Venice Biennale 2019','Central Pavilion / Arsenale')]},
      {title:'The GROUND Sessions',cluster:'performance / collaborative listening / open-form score',period:'2019',summary:'Biennale Meetings on Art 中的 GROUND Sessions 由 Atoui 与多位 performers / musicians 协作，让 sound work 以持续变化的 live session 形式出现。',actions:['邀请 Julia Giertz、Vivian Wang、Shane Aspegren、Alan Affichard、Igor Porte 共同表演','以 session / open score 取代固定 concert repertoire','让 instrument interaction 与现场 acoustic condition 共同决定结果','将 performance 视为 installation research 的延伸'],sourceUrl:atouiMeet,images:[],relations:[rel('展览','Meetings on Art — Venice Biennale 2019','The GROUND Sessions')]}
    ], awards:[], exhibitions:['May You Live In Interesting Times — Venice Biennale 2019','Meetings on Art — 2019'], sources:[{label:'La Biennale · Tarek Atoui 2019',url:atoui},{label:'La Biennale · Meetings on Art 2019',url:atouiMeet}]
  },

  'venice-darren-bader': {
    artistId:'venice-darren-bader', projectCoverage:'1 个 city-scale augmented-reality 核心节点已建立深档案 · 2019', imageCoverage:'0 / 1 项目暂不使用不稳定外链图像', note:'当前先把 Scott Mendes’s VENICE! 做深。Bader 的重点是让“作品”不再固定在 object 上，而通过 app 把 Venice 已高度饱和的历史/旅游现实再叠一层虚拟现实。',
    projects:[{title:'Scott Mendes’s VENICE!',cluster:'augmented reality / mobile app / city-scale conceptual layer',period:'2019',summary:'AR work 通过 mobile app 分布于 Arsenale、Central Pavilion 乃至 Venice 城市更广区域，在现实地景上叠加一层“reality / unreality”。',actions:['开发 mobile app 作为作品主要入口','使用 augmented reality 而非固定 gallery object','将多个 trigger / encounter 分散到不同地理位置','把 Venice 本身的 aesthetic / historical overload 当作作品材料','让 viewer 通过 personal device 决定何时进入虚拟层'],sourceUrl:bader,images:[],relations:[rel('展览','May You Live In Interesting Times — Venice Biennale 2019','city + Arsenale + Central Pavilion')] }], awards:[], exhibitions:['May You Live In Interesting Times — Venice Biennale 2019'], sources:[{label:'La Biennale · Darren Bader 2019',url:bader}]
  },

  'venice-nairy-baghramian': {
    artistId:'venice-nairy-baghramian', projectCoverage:'2 个 support-failure / mechanical-organic sculpture 节点已建立深档案 · 2019', imageCoverage:'0 / 2 项目暂不使用不稳定外链图像', note:'Baghramian 的 sculpture 经常依赖“support”本身：brace、cork、wax、glass appendage 都像身体器官又像建筑零件，作品靠互相支撑维持，同时把 collapse 作为结构的一部分。',
    projects:[
      {title:'Dwindlers',cluster:'glass appendage / corridor sculpture / organ-machine ambiguity',period:'2019',summary:'沿 Arsenale 外部走廊排列的 glass appendages 同时像 damaged ventilation ducts、intestines、ornament 和 ruin。',actions:['使用 glass 制作 elongated appendage-like forms','沿 architecture corridor 分散安装而非集中 pedestal display','让 industrial duct 与 bodily intestine 的尺度关系保持模糊','把 decorative / damaged 两种 reading 同时保留'],sourceUrl:baghramian,images:[],relations:[rel('展览','May You Live In Interesting Times — Venice Biennale 2019','Arsenale')]},
      {title:'Maintainers',cluster:'cast aluminium / wax / cork brace / structural dependence',period:'2019',summary:'raw cast aluminium 紧压 wax forms，wax 又依赖 cork bar 与 lacquered braces 支撑；support 与 attack 同时发生，移除支撑后作品理论上可能 collapse。',actions:['组合 raw cast aluminium 与 wax forms','以 cork bar 承担实际结构 support','加入 lacquered braces 形成 secondary restraint','让 material contact 看起来既保护又压迫','把 potential collapse 保留为作品逻辑而非隐藏工程风险'],sourceUrl:baghramian,images:[],relations:[rel('展览','May You Live In Interesting Times — Venice Biennale 2019','Central Pavilion')]}
    ], awards:[], exhibitions:['May You Live In Interesting Times — Venice Biennale 2019'], sources:[{label:'La Biennale · Nairy Baghramian 2019',url:baghramian}]
  },

  'venice-neil-beloufa': {
    artistId:'venice-neil-beloufa', projectCoverage:'1 个 surveillance-viewing / constrained-audience 核心节点已建立深档案 · 2018–2019', imageCoverage:'0 / 1 项目暂不使用不稳定外链图像', note:'Beloufa 不只讨论 representation，还把 viewer 的身体组织进观看机制：你看 video 时也被别人看，座椅限制身体，观看本身变成 power arrangement。',
    projects:[{title:'Global Agreement',cluster:'video installation / gym-like seat / reciprocal surveillance',period:'2018–2019',summary:'观众必须坐在类似 gym equipment 的结构上观看 videos；座椅并不舒适且限制 movement，同时空间让每个 viewer 都能观察其他 viewer。',actions:['制作 gym-equipment-like viewing structures','故意让 seating 不舒适并限制 bodily movement','将 multiple viewers 安排在彼此可见的位置','让 video watching 与 reciprocal surveillance 同时发生','把“谁在观察谁”转成 installation 的实际空间关系'],sourceUrl:beloufa,images:[],relations:[rel('展览','May You Live In Interesting Times — Venice Biennale 2019','Arsenale')] }], awards:[], exhibitions:['May You Live In Interesting Times — Venice Biennale 2019'], sources:[{label:'La Biennale · Neïl Beloufa 2019',url:beloufa}]
  },

  'venice-halil-altindere': {
    artistId:'venice-halil-altindere', projectCoverage:'2 个 state-symbol appropriation / refugee-space fiction 节点已建立深档案 · 1990s–2019', imageCoverage:'0 / 2 项目暂不使用不稳定外链图像', note:'Altındere 经常直接挪用 nation-state 的权力媒介——ID card、stamp、banknote、headline、military slogan——再把它们反转；近年则把 refugee crisis 推进 speculative fiction。',
    projects:[
      {title:'State-symbol appropriation works',cluster:'identity card / stamp / banknote / institutional subversion',period:'1990s–2010s',summary:'长期实践直接拿国家日常治理的 visual tools 做材料：identity cards、postage stamps、banknotes、newspaper front pages、militaristic slogans、leader photos 被重新编辑或转义。',actions:['收集 nation-state authority 的 everyday visual media','直接 appropriation 既有 official format','通过 replacement / recontextualisation 改写正常化信息','把 minority experience 与行政图像放在同一作品中','用 familiar graphic authority 制造反向阅读'],sourceUrl:altindere,images:[],relations:[]},
      {title:'Space Refugee',cluster:'Syrian cosmonaut / refugee crisis / speculative space programme',period:'2016',summary:'项目源于与 Syria 首位 cosmonaut Muhammed Ahmed Faris 的相遇，把 refugee crisis 与太空计划并置，构造一种既荒诞又政治性的“流亡者离开地球”想象。',actions:['以 Muhammed Ahmed Faris 的真实 biography 为 research anchor','将 Soviet-space history 与 contemporary Syrian displacement 并置','通过 photo / video / installation 扩展 speculative narrative','把 refugee identity 从 humanitarian victim image 转成 cosmic political fiction'],sourceUrl:altindere,images:[],relations:[rel('展览','May You Live In Interesting Times — Venice Biennale 2019','practice context')]}
    ], awards:[], exhibitions:['May You Live In Interesting Times — Venice Biennale 2019'], sources:[{label:'La Biennale · Halil Altındere 2019',url:altindere}]
  }
};
