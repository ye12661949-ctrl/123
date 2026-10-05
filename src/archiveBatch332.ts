import type { ArtistArchive } from './archiveData';
import { archiveExtensions333 } from './archiveBatch333';
import { archiveExtensions335 } from './archiveBatch335';
import { archiveExtensions336 } from './archiveBatch336';
import { archiveExtensions337 } from './archiveBatch337';
import { archiveExtensions338 } from './archiveBatch338';

export const archiveExtensions332: Record<string, Partial<ArtistArchive> & { projects?: ArtistArchive['projects'] }> = {
  ...archiveExtensions333,
  ...archiveExtensions337,
  ...archiveExtensions338,
  'gillian-wearing': {
    note: archiveExtensions336['gillian-wearing']?.note || '把 Wearing 的实践进一步理解为“交换观看位置”：匿名坦白、公共空间表演、家庭角色重演和面具自画像，持续把身份变成可制作、替换和再观看的形式。',
    projects:[
      {title:'Drunk',cluster:'Public behaviour / social observation',period:'1997–1999',summary:'记录公共空间中的醉酒状态，把通常被隐藏的失控身体转成持续观看的对象。',actions:['公共环境观察','持续录像','记录社会规范与旁观反应'],sourceUrl:'https://www.moma.org/artists/8485-gillian-wearing',images:[],relations:[]},
      {title:'Sleeping Mask',cluster:'Self / concealment',period:'2004',summary:'以睡眠面具遮蔽脸部，使匿名机制从陌生人的保护进入自画像。',actions:['使用面具','遮蔽面部','摄影固定肖像'],sourceUrl:'https://www.moma.org/artists/8485-gillian-wearing',images:[],relations:[]},
      ...(archiveExtensions336['gillian-wearing']?.projects || [])
    ],
    sources:[...(archiveExtensions336['gillian-wearing']?.sources || []),{label:'MoMA artist record',url:'https://www.moma.org/artists/8485-gillian-wearing'},{label:'MoMA Dancing in Peckham',url:'https://www.moma.org/collection/works/433413'},{label:'MoMA Confess All On Video',url:'https://www.moma.org/collection/works/153252'}]
  },
  'hito-steyerl': {
    note: archiveExtensions336['hito-steyerl']?.note || archiveExtensions335['hito-steyerl']?.note,
    projects:[
      {title:'Gosprom (for Parkett no. 97)',cluster:'Architecture / printed image',period:'2015',summary:'把哈尔科夫 Gosprom 建筑与数字图像语言转成丝网印刷，说明网络视觉也能进入传统版画生产。',actions:['提取建筑素材','设计平面图像','丝网印刷','限量出版'],sourceUrl:'https://www.moma.org/collection/works/204672',images:[],relations:[{kind:'出版',label:'Parkett no. 97',detail:'Parkett Publishers'}]},
      ...(archiveExtensions335['hito-steyerl']?.projects || []),
      ...(archiveExtensions336['hito-steyerl']?.projects || [])
    ],
    sources:[...(archiveExtensions335['hito-steyerl']?.sources || []),...(archiveExtensions336['hito-steyerl']?.sources || []),{label:'MoMA artist record',url:'https://www.moma.org/artists/43752-hito-steyerl'},{label:'MoMA Gosprom',url:'https://www.moma.org/collection/works/204672'}]
  },
  'thomas-demand': {
    note: archiveExtensions336['thomas-demand']?.note || archiveExtensions335['thomas-demand']?.note,
    projects:[
      {title:'Grotto',cluster:'Nature / constructed image',period:'2006',summary:'把自然景观转成纸模型，再摄影形成既像自然又明显人工生产的图像。',actions:['观察自然图像','纸板重建','控制光线与视点','摄影后拆除'],sourceUrl:'https://www.jeudepaume.org/en/collection/thomas-demand-the-stutter-of-history/',images:[],relations:[]},
      {title:'Control',cluster:'Infrastructure / surveillance',period:'2011',summary:'把监控和基础设施图像中的幕后空间实体化，再以无人物摄影重新传播。',actions:['选择传播图像','纸板重建','摄影'],sourceUrl:'https://www.jeudepaume.org/en/collection/thomas-demand-the-stutter-of-history/',images:[],relations:[]},
      ...(archiveExtensions335['thomas-demand']?.projects || []),
      ...(archiveExtensions336['thomas-demand']?.projects || [])
    ],
    sources:[...(archiveExtensions335['thomas-demand']?.sources || []),...(archiveExtensions336['thomas-demand']?.sources || []),{label:'Jeu de Paume retrospective',url:'https://www.jeudepaume.org/en/collection/thomas-demand-the-stutter-of-history/'},{label:'MoMA Meet Me',url:'https://production-gcp.moma.org/visit/accessibility/meetme/modules/module_twelve.html'}]
  },
  'sophie-calle': {
    note: archiveExtensions335['sophie-calle']?.note,
    projects:[
      {title:'The Address Book',cluster:'Identity / following / ethics',period:'1983',summary:'从一本通讯录出发寻找陌生人的社交网络，把关系网络本身变成调查材料，同时暴露介入私人生活的伦理问题。',actions:['取得通讯录','联系社交网络','访谈记录','公开文字与照片'],sourceUrl:'https://www.tate.org.uk/art/artworks/calle-the-address-book-artist-rooms-t14303',images:[],relations:[{kind:'收藏',label:'Tate',detail:'Artist Rooms'}]},
      {title:'Room with a View',cluster:'Care / observation',period:'2003',summary:'在临终照护语境中观察等待死亡，把早期侦查式观看转成陪伴、时间与照护。',actions:['进入照护空间','相处并记录时间','摄影录像','文字记录'],sourceUrl:'https://www.tate.org.uk/art/artists/sophie-calle-8458',images:[],relations:[]},
      ...(archiveExtensions335['sophie-calle']?.projects || [])
    ],
    sources:[...(archiveExtensions335['sophie-calle']?.sources || []),{label:'Tate Sophie Calle',url:'https://www.tate.org.uk/art/artists/sophie-calle-8458'},{label:'Tate The Address Book',url:'https://www.tate.org.uk/art/artworks/calle-the-address-book-artist-rooms-t14303'}]
  },
  'taryn-simon': {
    note: archiveExtensions335['taryn-simon']?.note,
    projects:[
      {title:'A Living Man Declared Dead and Other Chapters',cluster:'Archive / genealogy / power',period:'2008–2011',summary:'在25个国家调查不同家族与权力关系，用肖像、档案和文字建立统一视觉档案。',actions:['跨国进入家庭与机构','人物肖像','家族史与制度文件调查','统一展示协议'],sourceUrl:'https://www.tarynsimon.com/',images:[],relations:[{kind:'出版',label:'A Living Man Declared Dead and Other Chapters'}]},
      {title:'An Occupation of Loss',cluster:'Ritual / performance / institution',period:'2016',summary:'邀请专业哀悼者提供悲伤服务，把私人情绪转成职业、经济与制度结构。',actions:['研究职业哀悼者','邀请表演者','安排观众关系','把失落作为服务观察'],sourceUrl:'https://www.tarynsimon.com/',images:[],relations:[{kind:'展览',label:'Park Avenue Armory',detail:'2016'}]},
      ...(archiveExtensions335['taryn-simon']?.projects || [])
    ],
    sources:[...(archiveExtensions335['taryn-simon']?.sources || []),{label:'Taryn Simon official site',url:'https://www.tarynsimon.com/'},{label:'Guggenheim',url:'https://www.guggenheim.org/'}]
  }
};