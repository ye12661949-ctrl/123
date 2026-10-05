import type { ArtistArchive } from './archiveData';
import { archiveExtensions334 } from './archiveBatch334';

export const archiveExtensions333: Record<string, Partial<ArtistArchive> & { projects?: ArtistArchive['projects'] }> = {
  'allan-sekula': {
    note: archiveExtensions334['allan-sekula']?.note,
    projects: [
      {title:'Fish Story',cluster:'Labour / logistics / documentary critique',period:'1988–1995',summary:'长期项目，以世界港口、海员、码头工人、工业设施与文本追踪全球化生产。',actions:['跨国拍摄港口与航运空间','持续记录海员和码头劳动','将彩色摄影与文字面板并置','以章节而非单幅名作组织观看'],sourceUrl:'https://www.moma.org/collection/works/164892',images:[],relations:[{kind:'收藏',label:'Museum of Modern Art, New York',detail:'Photography collection'}]},
      {title:'Chapter One, Fish Story',cluster:'Port / labour / globalization',period:'1988–1995',summary:'第一章集中于海洋经济的物质基础；单张图像通过相邻图像和文字产生经济关系。',actions:['拍摄工业基础设施','拍摄劳动身体','记录废弃工业空间'],sourceUrl:'https://www.walkerart.org/collections/artwork/chapter-one-fish-story-from-fish-story/',images:[],relations:[]},
      ...(archiveExtensions334['allan-sekula']?.projects || [])
    ],
    sources:[...(archiveExtensions334['allan-sekula']?.sources || []),{label:'MoMA — Fish Story',url:'https://www.moma.org/collection/works/164892'}]
  },
  'an-my-le': {
    note: archiveExtensions334['an-my-le']?.note,
    projects:[
      {title:'Between Two Rivers / Giữa hai giòng sông / Entre deux rivières',cluster:'Survey / war / diaspora / landscape',period:'2023–2024',summary:'MoMA 首次把 Lê 三十年的摄影与电影、录像、纺织、雕塑并置；湄公河与密西西比河把越南和美国连接为战争、迁徙和地景的双重坐标。',actions:['重编三十年系列','把摄影与纺织和雕塑并置','以河流建立地理和历史关系'],sourceUrl:'https://www.moma.org/calendar/exhibitions/5467',images:[],relations:[{kind:'展览',label:'Museum of Modern Art, New York',detail:'Nov 5, 2023–Mar 16, 2024 · Roxana Marcoci with Caitlin Ryan'}]},
      {title:'Events Ashore',cluster:'Military / landscape / global infrastructure',period:'2005–2014',summary:'跟随美国海军在全球的非战斗活动，把舰艇、港口、训练、救援和休假置于更大的地景中。',actions:['进入海军活动现场','使用大画幅摄影','把人物压入广阔地景'],sourceUrl:'https://www.moma.org/calendar/exhibitions/5467',images:[],relations:[]},
      ...(archiveExtensions334['an-my-le']?.projects || [])
    ],
    sources:[...(archiveExtensions334['an-my-le']?.sources || []),{label:'MoMA — Between Two Rivers',url:'https://www.moma.org/calendar/exhibitions/5467'}]
  },
  'zanele-muholi': {
    note: archiveExtensions334['zanele-muholi']?.note,
    projects:[
      {title:'Muholi V',cluster:'Sculpture / rest / public monument',period:'2023–2024',summary:'斜倚、被靠垫和毯子支撑的青铜身体，把公共雕塑的永久性材料转向休息与自我保存。',actions:['把自身身体转为雕塑主体','使用青铜铸造','采用斜倚和被覆盖的姿态'],sourceUrl:'https://shop.tate.org.uk/zanele-muholi-muholi-v-maquette-2024/ed1111.html',images:[],relations:[{kind:'展览',label:'Zanele Muholi, Tate Modern',detail:'6 Jun 2024–26 Jan 2025'}]},
      {title:'Tate Modern survey',cluster:'Archive / visual activism / institutional history',period:'2024–2025',summary:'大型调查展以超过 260 幅摄影回看二十余年实践，把社群肖像、自画像和视觉行动主义置于同一历史结构。',actions:['跨系列重组长期档案','并置社群肖像与自画像'],sourceUrl:'https://www.tate.org.uk/whats-on/tate-modern/zanele-muholi/zanele-muholi',images:[],relations:[]},
      ...(archiveExtensions334['zanele-muholi']?.projects || [])
    ],
    sources:[...(archiveExtensions334['zanele-muholi']?.sources || []),{label:'Tate — Zanele Muholi survey',url:'https://www.tate.org.uk/whats-on/tate-modern/zanele-muholi/zanele-muholi'}]
  }
};