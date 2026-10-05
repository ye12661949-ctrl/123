import type { ArtistArchive } from './archiveData';
import { archiveExtensions334 } from './archiveBatch334';

export const archiveExtensions333: Record<string, Partial<ArtistArchive> & { projects?: ArtistArchive['projects'] }> = {
  ...archiveExtensions334,
  'allan-sekula': {
    note: '深化 Sekula 的关键不在把他归入“社会纪实”，而在摄影、文字、章节编排与劳动史如何共同构成论证。Fish Story 把港口从风景重新解释为全球资本的机器：集装箱、自动化、船员缩减、失业与危险劳动都进入图像结构。与传统人道主义纪实不同，他不断暴露摄影所谓客观性的制度条件。',
    projects: [
      {title:'Fish Story',cluster:'Labour / logistics / documentary critique',period:'1988–1995',summary:'七章结构的长期项目，以世界港口、海员、码头工人、工业设施与文本追踪全球化生产。MoMA 记录其完整结构包括 105 张彩色照片、26 块黑白文字板和两组幻灯投影。',actions:['跨国拍摄港口与航运空间','持续记录海员和码头劳动','将彩色摄影与文字面板并置','以章节而非单幅名作组织观看','把集装箱化和自动化作为全球化的物质基础'],sourceUrl:'https://www.moma.org/collection/works/164892',images:[],relations:[{kind:'收藏',label:'Museum of Modern Art, New York',detail:'Photography collection / current collection display'}]},
      {title:'Chapter One, Fish Story',cluster:'Port / labour / globalization',period:'1988–1995',summary:'第一章尤其集中于海洋经济的物质基础：船、港口、炼油厂、起重机、造船厂与工人。单张图像并非独立“新闻证据”，而通过相邻图像和文字产生经济关系。',actions:['拍摄工业基础设施','拍摄劳动身体','记录事故与废弃工业空间','用紧密排列建立图像之间的因果与空间联系'],sourceUrl:'https://www.moma.org/collection/works/164247',images:[],relations:[]}
    ],
    sources:[{label:'MoMA — Fish Story text panel',url:'https://www.moma.org/collection/works/164892'},{label:'MoMA — Chapter One, Fish Story',url:'https://www.moma.org/collection/works/164247'},{label:'MoMA — Fish Story audio / Sekula interview',url:'https://www.moma.org/audio/playlist/298/4940'}]
  },
  'an-my-le': {
    note:'Lê 的核心并不是“拍战争”，而是研究战争如何被景观、训练、新闻和国家叙事制造出来。她通常不采用战地摄影的即时冲突模式，而让人物缩入更大的地景和制度结构。2023–24 MoMA 调查展进一步证明她的实践已从大画幅摄影扩展到电影、录像、纺织、雕塑与沉浸式装置。',
    projects:[
      {title:'Between Two Rivers / Giữa hai giòng sông / Entre deux rivières',cluster:'Survey / war / diaspora / landscape',period:'2023–2024',summary:'MoMA 首次把 Lê 三十年的摄影与电影、录像、纺织、雕塑并置；标题中的湄公河与密西西比河把越南和美国连接为战争、迁徙和地景的双重坐标。',actions:['重编三十年系列','把摄影与纺织和雕塑并置','以河流建立地理和历史关系','把战争表象扩展到流亡、环境与大众媒体'],sourceUrl:'https://www.moma.org/calendar/exhibitions/5467',images:[],relations:[{kind:'展览',label:'Museum of Modern Art, New York',detail:'Nov 5, 2023–Mar 16, 2024 · organized by Roxana Marcoci with Caitlin Ryan'},{kind:'出版',label:'An-My Lê: Between Two Rivers',detail:'MoMA, 2023 · edited by Roxana Marcoci'}]},
      {title:'Events Ashore',cluster:'Military / landscape / global infrastructure',period:'2005–2014',summary:'跟随美国海军在全球的非战斗活动，把舰艇、港口、训练、救援和休假置于更大的地景中；军事力量因此不只表现为战斗，也表现为遍布全球的日常基础设施。',actions:['进入海军活动现场','使用大画幅摄影','把人物压入广阔地景','同时记录军事秩序与地方环境'],sourceUrl:'https://www.moma.org/calendar/exhibitions/5467',images:[],relations:[]}
    ],
    sources:[{label:'MoMA — An-My Lê: Between Two Rivers',url:'https://www.moma.org/calendar/exhibitions/5467'},{label:'MoMA — gallery talk / Events Ashore',url:'https://www.moma.org/calendar/events/9264'}]
  },
  'zanele-muholi': {
    note:'进一步把 Muholi 的“visual activist”理解为两条互补生产线：一条长期为南非 Black LGBTQIA+ 社群建立可持续的肖像档案；另一条通过自画像把自己变成图像生产的主动控制者。近年的青铜雕塑又把摄影中的身体政治转向公共纪念碑、休息和自我保存。',
    projects:[
      {title:'Muholi V',cluster:'Sculpture / rest / public monument',period:'2023–2024',summary:'一尊斜倚、被靠垫和毯子支撑的青铜身体。Tate 将其解释为把公共雕塑常用的永久性材料转向“休息与自我保存”，使 Black queer 身体不必持续以创伤、抗争或英雄姿态出现。',actions:['把自身身体转为雕塑主体','使用青铜铸造','采用斜倚和被覆盖的姿态','把休息转成公共纪念语言'],sourceUrl:'https://shop.tate.org.uk/zanele-muholi-muholi-v-maquette-2024/ed1111.html',images:[],relations:[{kind:'展览',label:'Zanele Muholi, Tate Modern',detail:'6 Jun 2024–26 Jan 2025'}]},
      {title:'Tate Modern survey',cluster:'Archive / visual activism / institutional history',period:'2024–2025',summary:'Tate 的大型调查展以超过 260 幅摄影回看二十余年实践，把社群肖像、自画像和视觉行动主义置于同一历史结构。',actions:['跨系列重组长期档案','并置社群肖像与自画像','把个人图像放入南非 LGBTQIA+ 社会史'],sourceUrl:'https://shop.tate.org.uk/zanele-muholi-exhibition-book/24734.html',images:[],relations:[{kind:'展览',label:'Tate Modern, London',detail:'2024–2025'},{kind:'出版',label:'Zanele Muholi exhibition catalogue',detail:'Sarah Allen & Yasufumi Nakamori'}]}
    ],
    sources:[{label:'Tate — Muholi V maquette',url:'https://shop.tate.org.uk/zanele-muholi-muholi-v-maquette-2024/ed1111.html'},{label:'Tate — exhibition catalogue',url:'https://shop.tate.org.uk/zanele-muholi-exhibition-book/24734.html'}]
  }
};