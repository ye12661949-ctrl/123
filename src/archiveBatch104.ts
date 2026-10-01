import type { ArtistArchive, ArchiveRelation } from './archiveData';
const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const condo='https://www.labiennale.org/en/art/2019/partecipants/george-condo';
const jafa='https://www.labiennale.org/en/art/2019/partecipants/arthur-jafa';
const jafaAward='https://www.labiennale.org/en/news/biennale-arte-2019-official-awards';
const rafman='https://www.labiennale.org/en/art/2019/partecipants/jon-rafman';
const cheng='https://www.labiennale.org/en/art/2019/partecipants/ian-cheng';
const kadyrova='https://www.labiennale.org/en/art/2019/partecipants/zhanna-kadyrova';
const mulleady='https://www.labiennale.org/en/art/2019/partecipants/jill-mulleady';

export const archiveBatch104: Record<string, ArtistArchive> = {
  'venice-george-condo': {
    artistId:'venice-george-condo', projectCoverage:'2 个 fake-old-master / artificial-realism painting 阶段已建立深档案 · 1980s–2019', imageCoverage:'0 / 2 项目暂不使用不稳定外链图像', note:'Condo 的方法不是简单引用旧大师，而是拆解 art-history syntax 后重新拼成看似历史、实际精神状态完全当代的 distorted portrait。',
    projects:[
      {title:'Fake Old Masters',cluster:'appropriated art history / delinquent portrait / false historicity',period:'early 1980s',summary:'Condo 有意制作“看起来像真正旧画”的伪历史图像，再在结构中植入现代、异常甚至精神崩溃式的细节。',actions:['从 Old Master painting grammar 提取 pose / composition / brushwork','故意维持 historical-looking surface','在 facial anatomy / gesture 中加入 grotesque modern distortion','让 viewer 先误认年代，再意识到 painting 是当代构造'],sourceUrl:condo,images:[],relations:[]},
      {title:'Artificial Realism / manic society paintings',cluster:'dismantled reality / reconstructed face / social hysteria',period:'mid-1980s–2019',summary:'“Artificial Realism”以“拆掉一种现实，再用同样部件构造另一种现实”为原则；回到 New York 后，人物肖像进一步吸收 boom-and-bust society 的 ambition、hysteria、paranoia 与 despair。',actions:['把 recognisable face 拆成可重新排列的 features','同时保留 portrait recognisability 与 anatomical impossibility','将 old-master citation 与 cartoon / psychic distortion 混合','用 manic facial expression 把社会情绪转成身体图像'],sourceUrl:condo,images:[],relations:[rel('展览','May You Live In Interesting Times — Venice Biennale 2019','Central Pavilion / Arsenale')]}
    ], awards:[], exhibitions:['May You Live In Interesting Times — Venice Biennale 2019'], sources:[{label:'La Biennale · George Condo 2019',url:condo}]
  },

  'venice-arthur-jafa': {
    artistId:'venice-arthur-jafa', projectCoverage:'2 个 found-image montage / Black visuality 节点已建立深档案 · 2016–2019', imageCoverage:'0 / 2 项目暂不使用不稳定外链图像', note:'Jafa 的核心问题是怎样让 moving image 具有 Black music 那种结构强度。他大量搜集 network image、vernacular portrait、music video、meme 与 news footage，再通过 montage 建立 Black being 的复杂视觉谱系。',
    projects:[
      {title:'Found-image montage practice',cluster:'network archive / vernacular image / Black visuality',period:'2010s',summary:'Jafa 将 web image、historical photograph、vernacular portrait、music video、meme、viral news footage 放进同一 archive，拒绝把 Black experience 压成单一情绪。',actions:['长期搜集 network-based image 与 historical photograph','并置 joy / horror / beauty / pain / virtuosity 等相反情绪','以 montage 建立非线性 visual argument','保留 source image 的 media friction，而不统一成同一摄影风格'],sourceUrl:jafa,images:[],relations:[]},
      {title:'The White Album',cluster:'video essay / whiteness / portraiture + found footage',period:'2019',summary:'2019 Venice 的核心影片以 essay、poem 与 portraiture 混合方式处理 whiteness 与 Black gaze；作品获得国际主展最佳参展者金狮奖。',actions:['组合 found footage、network clips 与 portrait material','通过 rhythm / juxtaposition 让 meaning 在镜头关系中产生','拒绝单向 moral illustration，保留 attraction / violence 的矛盾','把 whiteness 作为被观看、被分析的 visual subject'],sourceUrl:jafaAward,images:[],relations:[rel('奖项','Golden Lion for Best Participant — Venice Biennale 2019','The White Album'),rel('展览','May You Live In Interesting Times — Venice Biennale 2019','Central Pavilion')]}
    ], awards:['Golden Lion for Best Participant — Venice Biennale 2019'], exhibitions:['May You Live In Interesting Times — Venice Biennale 2019'], sources:[{label:'La Biennale · Arthur Jafa 2019',url:jafa},{label:'La Biennale · Official Awards 2019',url:jafaAward}]
  },

  'venice-jon-rafman': {
    artistId:'venice-jon-rafman', projectCoverage:'1 个 post-internet dystopian-future 核心实践节点已建立深档案 · 2010s–2019', imageCoverage:'0 / 1 项目暂不使用不稳定外链图像', note:'当前先把 Venice 2019 官方资料明确的核心方法做深：Rafman 不把 digital technology 当 progress icon，而用 moving image 与 computer graphics 研究 late-capitalist futurity 怎样从 utopia 变成 dystopia。',
    projects:[{title:'Post-internet dystopian moving-image practice',cluster:'CGI / network culture / failed futurity',period:'2010s–2019',summary:'Rafman 以 moving image 与 computer-generated graphics 建立既熟悉又衰败的 digital future，刻意避开 tech-utopian optimism。',actions:['从 online subculture / digital environment 提取 visual material','使用 CGI 构造不稳定 virtual space','让 futurist imagery 与 decay / alienation 同时出现','把 modernist utopia 与 late-capitalist dystopia 设为长期对照'],sourceUrl:rafman,images:[],relations:[rel('展览','May You Live In Interesting Times — Venice Biennale 2019','Central Pavilion / Arsenale')] }], awards:[], exhibitions:['May You Live In Interesting Times — Venice Biennale 2019'], sources:[{label:'La Biennale · Jon Rafman 2019',url:rafman}]
  },

  'venice-ian-cheng': {
    artistId:'venice-ian-cheng', projectCoverage:'2 个 live-simulation / AI narrative-world 节点已建立深档案 · 2018–2019', imageCoverage:'0 / 2 项目暂不使用不稳定外链图像', note:'Cheng 的作品不是预先渲染好的动画，而是“活着的 simulation”：先设置基本 properties，再让 virtual ecosystem 持续自我演化，作者不控制最终状态。',
    projects:[
      {title:'BOB (Bag of Beliefs)',cluster:'AI creature / live simulation / app interaction',period:'2018–2019',summary:'BOB 是会持续成长的 AI creature，身体近 serpent / coral；personality、values 与 behavioural patterns 会被 human interaction 改变。',actions:['编写基本 behavioural properties 而非固定 animation timeline','让 simulation 在展览期间持续 evolve','设计 serpent / coral-like changing body','允许 visitor 通过 iOS app 影响 BOB actions','保留 unpredictable behaviour 作为作品主体'],sourceUrl:cheng,images:[],relations:[rel('展览','May You Live In Interesting Times — Venice Biennale 2019','Central Pavilion')]},
      {title:'Life After BOB: First Tract',cluster:'narrative simulation / preview-world / AI cosmology',period:'2019',summary:'Arsenale 中的 First Tract 像 BOB universe 的 narrative preview，把 autonomous simulation 推进为更完整的 fictional world。',actions:['以 BOB 作为 recurring world-building entity','将 live-simulation logic 扩展到 narrative universe','保留 preview / tract 的未完成感而非封闭故事','让 viewer 把 Central Pavilion 与 Arsenale 两处作品拼成同一系统'],sourceUrl:cheng,images:[],relations:[rel('展览','May You Live In Interesting Times — Venice Biennale 2019','Arsenale')]}
    ], awards:[], exhibitions:['May You Live In Interesting Times — Venice Biennale 2019'], sources:[{label:'La Biennale · Ian Cheng 2019',url:cheng}]
  },

  'venice-zhanna-kadyrova': {
    artistId:'venice-zhanna-kadyrova', projectCoverage:'2 个 construction-material commodity / second-hand architecture 节点已建立深档案 · 2014–2019', imageCoverage:'0 / 2 项目暂不使用不稳定外链图像', note:'Kadyrova 用廉价 tile、concrete、cement 等建筑材料模拟 food / clothing，把“表面装饰材料”反转成具有重量、价格和 labour history 的消费物。',
    projects:[
      {title:'Market',cluster:'street stall / concrete food / mosaic commodity',period:'2017–ongoing',summary:'完整街头 food stall 中，sausages / salami 由 concrete 与 natural stone 制成，fruit / vegetables 则由粗块 mosaic tile 拼出。',actions:['搭建真实 street-trader stall display','用 concrete / natural stone 制作肉类商品','用 chunky mosaic tiles 制作 fruit / vegetables','保留商品陈列和交易语境，使 sculpture 看起来可出售','利用 food softness 与 construction hardness 的冲突产生 meaning'],sourceUrl:kadyrova,images:[],relations:[rel('展览','May You Live In Interesting Times — Venice Biennale 2019','Arsenale')]},
      {title:'Second Hand',cluster:'salvaged tile / clothing form / architecture-memory',period:'2014–ongoing',summary:'2019 版本直接回收 Venice hotel 的 ceramic tiles，再把这些建筑表面材料变成 clothes 与 linen forms。',actions:['从具体 hotel 拆取 used ceramic tiles','保留 tile 的 previous-use / architecture context','将 tiles 切割拼装成 clothing / linen silhouettes','把 interior architecture material 转成人体外层','通过 “second hand” 同时指向二手材料与身体/劳动'],sourceUrl:kadyrova,images:[],relations:[rel('展览','May You Live In Interesting Times — Venice Biennale 2019','Central Pavilion')]}
    ], awards:[], exhibitions:['May You Live In Interesting Times — Venice Biennale 2019'], sources:[{label:'La Biennale · Zhanna Kadyrova 2019',url:kadyrova}]
  },

  'venice-jill-mulleady': {
    artistId:'venice-jill-mulleady', projectCoverage:'1 个 paired-painting-universe 核心项目已建立深档案 · 2019', imageCoverage:'0 / 1 项目暂不使用不稳定外链图像', note:'当前先把 Venice 2019 的 paired series 做深。Mulleady 让 historical painting、popular culture 与 personal life 同时进入画面，再让两组作品跨 Giardini / Arsenale 互相重复 motif，形成 parallel realities。',
    projects:[{title:'Frieze of Life-derived paired series',cluster:'painting cycle / repeated motif / parallel reality',period:'2019',summary:'以 Edvard Munch 的 Frieze of Life 结构为起点，新作被拆成两组，分别安装于 Arsenale 与 Central Pavilion；部分 element 在两组中重复，像 quantum entanglement。',actions:['以 historical painting cycle 结构而非单幅引用为起点','混入 popular culture 与 personal-life imagery','为两个 venue 分别制作 distinct painting series','在两组作品中重复 specific motifs','让 viewer 通过记忆把分散场地连接成 alternate realities'],sourceUrl:mulleady,images:[],relations:[rel('展览','May You Live In Interesting Times — Venice Biennale 2019','Central Pavilion + Arsenale')] }], awards:[], exhibitions:['May You Live In Interesting Times — Venice Biennale 2019'], sources:[{label:'La Biennale · Jill Mulleady 2019',url:mulleady}]
  }
};
