import type { ArtistArchive } from './archiveData';

const rel=(kind:'展览'|'出版'|'奖项'|'收藏'|'策展',label:string,detail?:string)=>({kind,label,detail});

export const archiveExtensions340: Record<string, Partial<ArtistArchive> & { projects?: ArtistArchive['projects'] }> = {
  'otobong-nkanga': {
    note:'进一步把 Nkanga 的实践从“生态/资源主题”压到物质链条本身：开采、配方、加工、运输、销售、再投资和共同学习都可以成为作品的组成部分。Carved to Flow 尤其说明她不是用香皂象征资源政治，而是直接制造一个真实运作的商品与社会网络。',
    projects:[
      {title:'Carved to Flow — O8 Black Stone / Athens laboratory / Kassel distribution',cluster:'Commodity / circular production / material network',period:'2017–',summary:'documenta 14 中，Nkanga 以自己配方制作 O8 Black Stone 冷制香皂：七种来自地中海、中东、北非和西非的油脂与黄油被混合，最后加入木炭。雅典部分既是制皂实验室也是公共交流空间；由 Vis Olivae 等当地制皂者参与生产，成品再运往 Kassel，通过公共空间中的表演被储存、分发和出售。作品因此不是“关于商品链”的图像，而是一条真的生产—运输—交换链。',actions:['设计 O8 Black Stone 原始配方','与希腊制皂者 Laouta / Vis Olivae 协作','采用 cold-process soap 工艺','把雅典展场设置为生产实验室与公共讨论空间','把香皂运往 Kassel 储存、分发和出售','尝试以销售输出维持循环生产模型'],sourceUrl:'https://www.documenta14.de/en/calendar/23844/carriers',images:[],relations:[rel('展览','documenta 14','Athens / Kassel, 2017'),rel('策展','Maya Tounta','Carved to Flow public programme')]},
      {title:'Of Cords Curling around Mountains',cluster:'Extraction / material circulation / retrospective',period:'2021–2022',summary:'Castello di Rivoli 与 Villa Arson 合作组织的个展，把 Nkanga 对资源开采、殖民史、土地和物质流动的研究放进长期脉络。其意义不只在“生态议题”，而在于她持续让绳索、矿物、纺织、绘画和空间装置承担连接不同地点与劳动历史的功能。',actions:['把不同年代和媒介的资源研究并置','通过材料与空间关系组织观看','将殖民历史、生态危机与当代物质生产连接','以大型机构展览建立实践演变线'],sourceUrl:'https://www.castellodirivoli.org/en/comunicato/otobong-nkanga-of-cords-curling-around-mountains/',images:[],relations:[rel('展览','Otobong Nkanga: Of Cords Curling around Mountains','Castello di Rivoli, 25 Sep 2021–3 Jul 2022'),rel('策展','Carolyn Christov-Bakargiev / Marcella Beccaria','Castello di Rivoli'),rel('展览','When Looking Across the Sea, Do You Dream?','Villa Arson / Castello di Rivoli collaboration, 2021')]}
    ],
    exhibitions:['documenta 14, Athens / Kassel, 2017','58th Venice Biennale, 2019 — Special Mention','Otobong Nkanga: Of Cords Curling around Mountains, Castello di Rivoli, 2021–22'],
    awards:['Yanghyun Art Prize, 2015','Belgian Art Prize, 2017','Special Mention, 58th Venice Biennale, 2019','Lise Wilhelmsen Art Award Programme, inaugural recipient, 2019'],
    sources:[{label:'documenta 14 — Carriers / Carved to Flow',url:'https://www.documenta14.de/en/calendar/23844/carriers'},{label:'Castello di Rivoli — Of Cords Curling around Mountains',url:'https://www.castellodirivoli.org/en/comunicato/otobong-nkanga-of-cords-curling-around-mountains/'}]
  },
  'francis-alys': {
    note:'补入 Children’s Games 后，Alÿs 的“行动”方法出现另一条长期支线：他不再总是亲自设定规则，而是观察儿童已经存在的游戏规则，让简陋材料、重复动作、地方环境和群体协商自己构成作品。游戏因此成为跨文化比较的微型社会结构。',
    projects:[
      {title:'Children’s Games',cluster:'Play / rule / ethnographic observation',period:'1999–',summary:'自1999年起持续拍摄不同地区儿童在公共空间中的游戏。2022年代表比利时参加第59届威尼斯双年展时，这一长期档案成为 The Nature of the Game 的核心。与 Alÿs 早期亲自执行的行动不同，这里规则通常已经由儿童群体拥有；艺术家的工作转向寻找、观察、协作拍摄并保存游戏。',actions:['在不同国家寻找地方性儿童游戏','与儿童和当地合作者共同拍摄','保留游戏原有规则与环境材料','以短片形成持续编号档案','在展览中把不同游戏并置比较'],sourceUrl:'https://www.labiennale.org/it/arte/2022/belgio',images:[],relations:[rel('展览','The Nature of the Game — Belgian Pavilion','59th Venice Biennale, 2022'),rel('策展','Hilde Teerlinck','Belgian Pavilion')]},
      {title:'Children’s Game #1: Caracoles',cluster:'Play / gravity / repetition',period:'1999',summary:'墨西哥城山坡上，一个男孩不断把半满塑料瓶踢向坡顶；瓶子反复滚回，他再追下去继续。几乎零成本的现成物和地形本身生成规则，使“徒劳劳动”与儿童游戏在 Alÿs 的实践中第一次清晰重叠。',actions:['跟随单个儿童游戏','利用山坡和塑料瓶作为现成条件','连续记录重复上坡/滚落动作','保留环境声与偶发干扰'],sourceUrl:'https://francisalys.com/childrens-game-1-caracoles/',images:[],relations:[]},
      {title:'Children’s Game #28: Nzango',cluster:'Play / embodied geometry / collective rhythm',period:'2021',summary:'在刚果民主共和国 Tabacongo 拍摄女性参与的 Nzango。两队通过歌唱、拍手和面对面的腿部动作进行快速对抗，地方版本又会改变正式规则。作品把规则呈现在身体节奏里，而不是依赖解释文本。',actions:['与当地儿童共同拍摄','记录歌唱和拍手形成的节拍','保持对腿部动作和群体阵形的观察','让地方变体与正式规则并存'],sourceUrl:'https://francisalys.com/childrens-game-28-nzango/',images:[],relations:[]}
    ],
    exhibitions:['The Nature of the Game, Belgian Pavilion, 59th Venice Biennale, 2022'],
    sources:[{label:'La Biennale di Venezia — Belgium 2022',url:'https://www.labiennale.org/it/arte/2022/belgio'},{label:'Francis Alÿs — Children’s Game #1',url:'https://francisalys.com/childrens-game-1-caracoles/'},{label:'Francis Alÿs — Children’s Game #28',url:'https://francisalys.com/childrens-game-28-nzango/'}]
  },
  'yto-barrada': {
    note:'进一步补出 Barrada 从“拍摄丹吉尔”到“在丹吉尔建立生产条件”的演变：Cinémathèque de Tanger 和 The Mothership 都不是作品之外的公益副业，而是她把档案、放映、天然染料、园艺、驻留和教学变成长期艺术基础设施的方式。',
    projects:[
      {title:'The Mothership',cluster:'Natural dye / eco-campus / institution building',period:'2020s–',summary:'在丹吉尔建立以天然染料为核心的 artist-led eco-campus，包含染料花园、驻留和教育项目。这里植物不只是 Barrada 纺织作品的颜色来源：种植、采集、染色、共同学习和驻留共同组成生产结构，把她对植物学、殖民史和地方知识的研究转成可持续运行的空间。',actions:['建立天然染料花园','种植并研究染料植物','在现场完成纺织染色','组织艺术家驻留','开展工作坊和共同学习','把作品生产与地方生态基础设施连接'],sourceUrl:'https://www.pacegallery.com/journal/yto-barrada-the-mothership/',images:[],relations:[rel('机构','The Mothership','Tangier artist-led natural dye centre / residency / eco-campus')]},
      {title:'Cinémathèque de Tanger — restaged cinema',cluster:'Film archive / institution / exhibition',period:'2007–2019',summary:'Barrada 在丹吉尔建立独立电影机构后，又于2019年在纽约把 Cinémathèque 临时重演为真实可使用的电影院：十部来自其节目与收藏的电影，与手染纺织和丹吉尔电影院木雕共同出现。机构由此既是地方基础设施，也能被重新编排成展览形式。',actions:['经营独立电影馆与电影档案','从长期节目/收藏中选择影片','在画廊内搭建临时电影院','把放映与手染纺织、木雕并置','通过食物和集体观看恢复社交空间'],sourceUrl:'https://www.pacegallery.com/exhibitions/yto-barrada-6/',images:[],relations:[rel('展览','Yto Barrada: Cinémathèque de Tanger','Pace Live New York, 15–16 Nov 2019')]},
      {title:'Thrill, Fill and Spill',cluster:'Textile / natural dye / institutional circulation',period:'2025–2026',summary:'South London Gallery 的大型个展把纺织、电影、雕塑和绘画放在一起，其中新纺织作品在 The Mothership 染制，并把一次驻留继续延伸到伦敦青少年工作坊。它显示 Barrada 的“机构建设”已经反向进入作品制作和美术馆公共教育。',actions:['在 The Mothership 制作天然染色纺织','跨纺织/电影/雕塑/绘画编排展览','将 Tangier 驻留连接到 London 社区项目','让制作基地与展示机构形成往返关系'],sourceUrl:'https://www.pacegallery.com/journal/yto-barrada-south-london-gallery/',images:[],relations:[rel('展览','Thrill, Fill and Spill','South London Gallery, 26 Sep 2025–11 Jan 2026')]}
    ],
    exhibitions:['Thrill, Fill and Spill, South London Gallery, 2025–26'],
    sources:[{label:'Pace — The Mothership',url:'https://www.pacegallery.com/journal/yto-barrada-the-mothership/'},{label:'Pace — Cinémathèque de Tanger',url:'https://www.pacegallery.com/exhibitions/yto-barrada-6/'},{label:'Pace — Thrill, Fill and Spill',url:'https://www.pacegallery.com/journal/yto-barrada-south-london-gallery/'}]
  }
};
