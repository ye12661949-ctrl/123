import type { ArtistArchive } from './archiveData';

export const archiveExtensions335: Record<string, Partial<ArtistArchive> & { projects?: ArtistArchive['projects'] }> = {
  'sophie-calle': {
    note:'进一步把 Calle 的核心方法落实为“规则先于图像”：她不是先拍到一个题材再解释，而是先规定时间、参与者、访问方式和记录协议，让现实在规则中产生材料。The Sleepers 尤其清楚：床、八天、轮班、问卷、摄影和餐食共同组成作品；因此摄影只是整个社会实验的一层，而不是作品全部。',
    projects:[
      {title:'The Sleepers (Les dormeurs)',cluster:'Rule-based action / intimacy / participation',period:'1979',summary:'1979 年 4 月，Calle 邀请 29 人在八天内轮流占据自己的床。她拍摄参与者清醒与睡眠状态、提供食物并进行问卷。作品把私人卧室转成由时间表、陌生人和记录机制共同运转的观察装置；后来一位参与者的丈夫、艺术评论家听说项目后邀请她参加 Biennale des Jeunes，成为其职业生涯的重要转折。',actions:['邀请29名熟人和陌生人进入自己的床','安排八天轮班','拍摄清醒与睡眠状态','提供餐食','实施长问卷','将照片与文字重新编排为装置'],sourceUrl:'https://www.moma.org/collection/works/421056',images:[],relations:[{kind:'收藏',label:'Museum of Modern Art, New York',detail:'The Sleepers installation；Photography collection'},{kind:'展览史',label:'Biennale des Jeunes',detail:'项目被参与者相关的艺术评论家注意后获得早期展览机会'}]}
    ],
    sources:[{label:'MoMA — Sophie Calle / The Sleepers',url:'https://www.moma.org/collection/works/421056'},{label:'MoMA — Sophie Calle artist profile',url:'https://www.moma.org/collection/artists/6655'}]
  },
  'hito-steyerl': {
    note:'进一步把 Steyerl 的“数字图像政治”拆到具体制作：她并不只是谈监控，而是把军用摄影校准场、教学视频语法、CG 无脸人物、手机手势和数字桌面真正放进同一个视频。她与传统纪录片作者的差异，在于图像不再被当作现实的证据，而被处理成会主动组织现实、身体和权力的基础设施。',
    projects:[
      {title:'How Not to Be Seen: A Fucking Didactic Educational .MOV File',cluster:'Machine vision / surveillance / instructional parody',period:'2013',summary:'14 分钟单屏彩色有声视频，以教学片形式分段演示“如何不被看见”。大量画面在美国沙漠中的航空摄影校准靶场拍摄；这些靶标原本用于校准飞机摄影机的分辨率。Steyerl 把军事视觉史与 CG 人物、绿色服装、电脑桌面和手机式手势并置，让“可见性”成为机器分辨率、社会身份和政治暴力共同决定的条件。',actions:['在航空摄影校准靶场实拍','模仿教学视频结构','本人和无脸数字人物共同表演','叠加CG与电脑桌面','使用手机滑动/拍照式身体手势','以自动化旁白组织章节'],sourceUrl:'https://www.moma.org/collection/works/181784',images:[],relations:[{kind:'收藏',label:'Museum of Modern Art, New York',detail:'Committee on Media and Performance Art Funds'},{kind:'展览',label:'MoMA — Cut to Swipe',detail:'2014–2015；置于模拟到数字媒介转换的展览框架中'}]},
      {title:'November',cluster:'Essay film / political image / memory',period:'2004',summary:'25 分钟录像把 Steyerl 与 Andrea Wolf 青少年时期共同制作的武打片、库尔德电视新闻、Bruce Lee 电影片段和第一人称旁白剪在一起。Wolf 后来进入库尔德解放运动并死亡；作品因此不是为她建立稳定传记，而是研究一个真实的人如何在革命、新闻、记忆和电影类型中变成不断变化的图像。',actions:['调用私人少年影像','收集库尔德电视新闻','挪用武打电影片段','第一人称旁白','以蒙太奇比较私人记忆与政治传播'],sourceUrl:'https://www.moma.org/collection/works/179811',images:[],relations:[{kind:'收藏',label:'Museum of Modern Art, New York',detail:'Media and Performance collection'}]}
    ],
    sources:[{label:'MoMA — How Not to Be Seen',url:'https://www.moma.org/collection/works/181784'},{label:'MoMA — curatorial essay on How Not to Be Seen',url:'https://www.moma.org/explore/inside_out/2014/06/18/hito-steyerls-how-not-to-be-seen-a-fucking-didactic-educational-mov-file/'},{label:'MoMA — November',url:'https://www.moma.org/collection/works/179811'},{label:'MoMA — Hito Steyerl',url:'https://www.moma.org/artists/43752-hito-steyerl'}]
  },
  'thomas-demand': {
    note:'继续补足 Demand 的关键反差：最终照片看起来像冷静的现实记录，但真正耗费劳动的是拍摄前的模型建造。Pit 与 Clearing 也说明他并不只重建犯罪现场或政治新闻；矿坑、森林等空间同样会被纸和纸板重新制造，从而把“自然/现实”也暴露为经过图像选择与制作的表面。',
    projects:[
      {title:'Pit (Grube)',cluster:'Constructed space / industrial image',period:'1999',summary:'大型 chromogenic print。与 Demand 的整体方法一起看，这类工业空间不是直接纪实，而是经过模型化、摄影化后的第二次现实；MoMA 收藏记录提供了作品的具体物质形态与尺度。',actions:['选择既有空间图像作为参照','将空间转译为模型','控制摄影视点与照明','以大型彩色相纸输出'],sourceUrl:'https://www.moma.org/collection/works/166913',images:[],relations:[{kind:'收藏',label:'Museum of Modern Art, New York',detail:'Photography department；Gift of Beth Swofford'}]},
      {title:'Clearing',cluster:'Nature / constructed landscape',period:'2003',summary:'近五米宽的 chromogenic print，把森林/林间空地的观看经验推向大型人工表面。它对 Demand 很重要，因为模型逻辑不再只用于室内和新闻现场，而扩展到“自然”本身：观众首先看到可信风景，随后才意识到风景也经过制造。',actions:['把自然景观转译为人工结构','控制叶片与空间层次','摄影模型','制作超大尺幅彩色输出'],sourceUrl:'https://www.moma.org/collection/works/90063',images:[],relations:[{kind:'收藏',label:'Museum of Modern Art, New York',detail:'Photography department'},{kind:'展览',label:'MoMA — Thomas Demand',detail:'Mar 4–May 30, 2005'}]}
    ],
    sources:[{label:'MoMA — Pit (Grube)',url:'https://www.moma.org/collection/works/166913'},{label:'MoMA — Clearing',url:'https://www.moma.org/collection/works/90063'},{label:'MoMA — Thomas Demand exhibition 2005',url:'https://www.moma.org/calendar/exhibitions/116'}]
  },
  'taryn-simon': {
    note:'补入 2026 年仍在发生的机构节点：Simon 的实践已从早期“进入不可见机构并拍摄”推进到耗时十年的单一人物—全球网络研究。Father Country I Do Love You 被 Guggenheim 定义为她迄今最广阔、也最私人的项目，这进一步证明她的基本媒介已经不只是摄影，而是长期调查、关系网络、档案、叙事和展览建筑的组合。',
    projects:[
      {title:'Father Country I Do Love You',cluster:'Long-form investigation / biography / geopolitical network',period:'2016–2026',summary:'Guggenheim 于 2026 年 9 月 18 日至 2027 年 3 月 14 日展出。官方资料称项目历时十年，以一名真实人物的生命轨迹及其行动在四十年间产生的全球回响为核心，并称其为 Simon 迄今最 expansive、最 personal 的项目。项目同时形成 696 页展览出版物，说明其生产单位已经扩展为长期研究、文本、档案和展览系统。',actions:['持续十年调查','以单一人物追踪跨国关系与历史后果','组织档案与叙事材料','将长期研究转成大型机构展览','同步形成696页研究出版物'],sourceUrl:'https://www.guggenheim.org/',images:[],relations:[{kind:'展览',label:'Solomon R. Guggenheim Museum, New York',detail:'Sep 18, 2026–Mar 14, 2027'},{kind:'策展',label:'Nat Trotman',detail:'Guggenheim Curator, Performance and Media；组织 2026 展览'},{kind:'出版',label:'Guggenheim Museum Publications',detail:'Taryn Simon: Father Country I Do Love You, 2026, 696 pages'}]}
    ],
    sources:[{label:'Guggenheim — 2026 press releases',url:'https://www.guggenheim.org/press-release?start=20'},{label:'Guggenheim — Nat Trotman',url:'https://www.guggenheim.org/about-us/staff/nat-trotman'},{label:'Guggenheim — Publications',url:'https://www.guggenheim.org/publications'}]
  }
};