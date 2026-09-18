import type { Artist, ArtworkImage, Project } from './data';

const image = (url: string, title: string, credit: string, sourceUrl: string, sourceLabel: string): ArtworkImage => ({ url, title, credit, sourceUrl, sourceLabel });
const project = (year: string, title: string, type: string, facts: string[], reading: string): Project => ({ year, title, type, facts, reading });

export const globalArtists: Artist[] = [
  {
    id: 'cao-fei', name: 'Cao Fei', chineseName: '曹斐', born: '1978', base: 'Beijing',
    intro: '在虚拟世界、影像、游戏与现实城市之间工作，把中国城市化、青年文化和劳动结构转成可进入的视觉系统。',
    methods: ['虚拟世界', '影像装置', 'CGI', '研究型创作', '网络艺术'], subjects: ['城市化', '科技', '劳动', '青年文化', '资本主义', '虚拟身份'], outputs: ['影像', '装置', '虚拟空间', '摄影'], institutions: ['Serpentine', 'MoMA PS1', 'UCCA'], achievements: ['RMB City, 2007–2011'],
    whyImportant: '她把“网络空间”当成真实社会结构来处理，而不是把数字技术只当视觉效果。RMB City 让虚拟城市、现实资本和网络身份同时成为材料。',
    projects: [project('2007–11', 'RMB City', 'Second Life 虚拟城市 / 网络艺术', ['在 Second Life 中持续建立一座虚拟中国城市。', '建筑、商业、政治符号和网络角色共同构成作品。'], '要把虚拟空间理解成一个真的社会现场：艺术家设计的是规则、城市与参与方式，而不只是几张 CGI 图。')],
    images: [image('https://i.pinimg.com/736x/a1/b7/f5/a1b7f5a32b9055595cd2f28bb014f849.jpg', 'RMB City', '© Cao Fei', 'https://www.caofei.com/works.aspx?id=56&wtid=2&year=-1', 'Artist website')], sourceLabel: '艺术家官网', sourceUrl: 'https://www.caofei.com/'
  },
  {
    id: 'daido-moriyama', name: 'Daido Moriyama', chineseName: '森山大道', born: '1938', base: 'Tokyo',
    intro: '以粗颗粒、高反差、失焦和快速街头拍摄把战后日本城市经验压进极不稳定的黑白图像。',
    methods: ['街头摄影', '高颗粒', '高反差', '摄影书', '快拍'], subjects: ['城市', '战后日本', '身体', '欲望', '记忆', '街道'], outputs: ['摄影书', '黑白摄影', '展览'], institutions: ['MoMA', 'Tate Modern'], achievements: ['Stray Dog, 1971'],
    whyImportant: '他的技术缺陷不是失误，而是方法。模糊、倾斜和颗粒把“清楚描述城市”变成“身体如何撞上城市”。',
    projects: [project('1971', 'Stray Dog', '街头摄影 / 主观都市经验', ['快速拍摄、粗颗粒和高反差成为图像语言。', '低技术感主动破坏传统纪实摄影的清晰度。'], '不要只把“粗颗粒”当风格滤镜；它和拍摄速度、街头移动及不稳定观看是一整套动作。')],
    images: [image('https://api.finarte.it/api/lotto/immagine/92093', 'Stray Dog, Misawa', '© Daido Moriyama', 'https://www.moma.org/collection/works/52359', 'MoMA')], sourceLabel: 'MoMA', sourceUrl: 'https://www.moma.org/collection/works/52359'
  },
  {
    id: 'rinko-kawauchi', name: 'Rinko Kawauchi', chineseName: '川内伦子', born: '1972', base: 'Japan',
    intro: '从水滴、食物、昆虫、婴儿、光线等极小日常瞬间建立柔和但并不甜美的生命循环。',
    methods: ['日记式摄影', '色彩摄影', '编辑 / sequence', '摄影书', '近距离观察'], subjects: ['日常生活', '光', '生命', '死亡', '自然', '时间'], outputs: ['摄影书', '摄影', '展览'], institutions: ['Aperture', 'Photographers’ Gallery'], achievements: ['Illuminance, 2011'],
    whyImportant: '她最值得研究的是编辑：单张往往很轻，但相邻图像通过颜色、形状和生命状态形成隐约的节奏。',
    projects: [project('2011', 'Illuminance', '摄影书 / 日常感知', ['长期拍摄微小日常事件。', '通过摄影书把非常不同的对象依靠光、色与形态连接。'], '阅读重点落在 sequence：为什么一张婴儿之后可以接一滴水，而它们仍像属于同一世界。')],
    images: [image('https://d7hftxdivxxvm.cloudfront.net/?height=1883&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FyeAdvef9-LtqEv3R85aqZQ%2Flarge.jpg&width=1920', 'Illuminance', '© Rinko Kawauchi', 'https://rinkokawauchi.com/en/publications/430/', 'Artist website')], sourceLabel: '艺术家官网', sourceUrl: 'https://rinkokawauchi.com/'
  },
  {
    id: 'gauri-gill', name: 'Gauri Gill', born: '1970', base: 'New Delhi',
    intro: '长期与印度乡村社群合作，常把肖像、地方档案和共同制作置于传统“摄影师观察对象”的关系之外。',
    methods: ['长期项目', '合作摄影', '肖像', '社区档案', '纪实摄影'], subjects: ['乡村印度', '女性', '社区', '教育', '地方', '亲密关系'], outputs: ['摄影', '书籍', '展览'], institutions: ['Smithsonian', 'Documenta'], achievements: ['Notes from the Desert 长期项目'],
    whyImportant: '她的“合作”不是让被摄者摆个姿势，而是长期关系本身成为创作条件。作品因此不急于把一个地方快速解释完。',
    projects: [project('1999–', 'Notes from the Desert', '长期纪实 / 社区合作', ['在拉贾斯坦西部长期反复拍摄同一地区与人物。', '肖像、学校、家庭和仪式在多年关系中逐渐累积。'], '把“时间”算进方法：长期返回同一个地方，会改变摄影师与被摄者之间谁决定图像。')],
    images: [image('https://static-assets.artlogic.net/w_2400%2Ch_2400%2Cc_limit%2Cf_auto%2Cfl_lossy%2Cq_auto/artlogicstorage/vadehraart/images/view/610ac783f7fdb9ac3851985e1533c10dj/vadehraartgallery-gauri-gill-jannat-barmer-from-the-series-notes-from-the-desert-1999-ongoing.jpg', 'Jannat, Barmer — Notes from the Desert', '© Gauri Gill', 'https://asia.si.edu/whats-on/exhibitions/notes-from-the-desert-photographs-by-gauri-gill/', 'Smithsonian')], sourceLabel: 'Smithsonian', sourceUrl: 'https://asia.si.edu/whats-on/exhibitions/notes-from-the-desert-photographs-by-gauri-gill/'
  },
  {
    id: 'samuel-fosso', name: 'Samuel Fosso', born: '1962', base: 'Paris / Bangui',
    intro: '用工作室自画像、服装和角色扮演把自己的身体变成政治人物、流行偶像与非洲历史身份的可变载体。',
    methods: ['自画像', '角色扮演', '编排式摄影', '工作室摄影', '表演'], subjects: ['身份', '非洲历史', '政治', '流行文化', '自我再现'], outputs: ['摄影', '系列', '展览'], institutions: ['MoMA', 'Tate'], achievements: ['African Spirits, 2008'],
    whyImportant: 'Fosso 不是“装扮成别人”那么简单；他用同一个身体穿过不同历史图像模板，测试谁有资格代表历史。',
    projects: [project('2008', 'African Spirits', '自画像 / 历史人物重演', ['艺术家以服装、灯光和姿势重演多位黑人政治与文化人物。', '工作室肖像被当成历史再书写的方法。'], '可以和 Cindy Sherman 对照：同样是角色扮演，但这里更明确地进入政治记忆和黑人历史。')],
    images: [image('https://www.moma.org/media/W1siZiIsIjU0MDM0NSJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MTQ0MFx1MDAzZSJdXQ.jpg?sha=dadc66e98553aabf', 'African Spirits', '© Samuel Fosso', 'https://www.moma.org/collection/works/214684', 'MoMA')], sourceLabel: 'MoMA', sourceUrl: 'https://www.moma.org/collection/works/214684'
  },
  {
    id: 'ishiuchi-miyako', name: 'Ishiuchi Miyako', chineseName: '石内都', born: '1947', base: 'Japan',
    intro: '从城市粗粝表面转向母亲遗物、伤痕与广岛幸存物，持续用近距离摄影触摸时间留下的身体痕迹。',
    methods: ['物件摄影', '近距离摄影', '档案', '黑白摄影', '遗物摄影'], subjects: ['母亲', '记忆', '身体痕迹', '广岛', '时间', '死亡'], outputs: ['摄影', '摄影书', '展览'], institutions: ['The Met', 'Getty'], achievements: ['Mother’s, 2000–05'],
    whyImportant: '她让“家庭遗物”不只是纪念品。衣服、唇膏、皮肤和伤痕被极近距离拍摄后，物件变成身体缺席后的代理。',
    projects: [project('2000–05', 'Mother’s', '母亲遗物 / 身体记忆', ['拍摄母亲遗留的衣物、化妆品和身体细节。', '以物件替代完整肖像。'], '如果做家庭项目，可以看她怎样不直接叙述人物生平，而让物件承担身体和时间。')],
    images: [image('https://images.squarespace-cdn.com/content/v1/57825361440243db4a4b7830/1712201463758-TM7QUOCR464AUF2IDM03/gm_35287401-web.jpg', 'Mother’s', '© Ishiuchi Miyako', 'https://www.metmuseum.org/art/collection/search/789567', 'The Met')], sourceLabel: 'The Met', sourceUrl: 'https://www.metmuseum.org/art/collection/search/789567'
  },
  {
    id: 'lieko-shiga', name: 'Lieko Shiga', chineseName: '志贺理江子', born: '1980', base: 'Miyagi / Japan',
    intro: '把地方社群、神话、灾难记忆与强闪光、长曝光和人为动作混合，制造介于纪实与仪式之间的图像。',
    methods: ['实验摄影', '编排式摄影', '闪光', '长曝光', '社区合作'], subjects: ['地方', '灾难', '神话', '记忆', '社区', '死亡'], outputs: ['摄影', '装置', '摄影书'], institutions: ['MoMA', 'Sendai Mediatheque'], achievements: ['Rasen Kaigan / Spiral Coast'],
    whyImportant: '她不把纪实和虚构分开。真实地点、真实居民和非常人工的灯光与动作同时存在，使“地方记忆”像一种共同制造的幻觉。',
    projects: [project('2008–12', 'Rasen Kaigan / Spiral Coast', '地方记忆 / 实验纪实', ['长期居住并与宫城县北釜社群合作。', '使用闪光、夜间拍摄、表演与环境介入。'], '研究时不要先判断哪部分“真实”；更有用的是拆解真实关系如何被转成高度人工的视觉。')],
    images: [image('https://i.pinimg.com/originals/64/8b/93/648b9332d110cdc33444a6ba7351c962.jpg', 'Rasen Kaigan', '© Lieko Shiga', 'https://www.moma.org/collection/works/204592', 'MoMA')], sourceLabel: 'MoMA', sourceUrl: 'https://www.moma.org/collection/works/204592'
  },
  {
    id: 'nikki-s-lee', name: 'Nikki S. Lee', born: '1970', base: 'New York / Seoul',
    intro: '通过改变穿着、妆容和行为进入不同亚文化群体，再由群体成员或朋友以普通快照方式拍摄她。',
    methods: ['身份表演', '参与式摄影', '快照', '角色扮演', '社会实验'], subjects: ['身份', '亚文化', '群体', '种族', '阶级', '社会角色'], outputs: ['摄影系列', '快照式打印'], institutions: ['The Met', 'SFMOMA'], achievements: ['Projects, 1997–2001'],
    whyImportant: '她把“身份”从内在本质变成社交环境里可学习的一套姿势、服装和行为。摄影甚至不一定由她亲自拍。',
    projects: [project('1997–2001', 'Projects', '群体融入 / 身份表演', ['进入滑板、雅皮、嘻哈等不同社群。', '改变外观并参与群体生活。', '照片常由他人以普通快照方式完成。'], '这里最重要的不是造型，而是“谁拍照”和“她如何进入群体”都成为方法的一部分。')],
    images: [image('https://d7hftxdivxxvm.cloudfront.net/?height=800&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FcA0zvoGnSLB1Z2msw-g2IA%2Fmain.jpg&width=800', 'The Yuppie Project', '© Nikki S. Lee', 'https://www.metmuseum.org/art/collection/search/284362', 'The Met')], sourceLabel: 'The Met', sourceUrl: 'https://www.metmuseum.org/art/collection/search/284362'
  },
  {
    id: 'wawi-navarroza', name: 'Wawi Navarroza', born: '1979', base: 'Manila / Istanbul',
    intro: '通过自画像、织物、植物、家居物件和复杂布景讨论菲律宾女性身份、迁移与后殖民视觉。',
    methods: ['编排式摄影', '自画像', '静物', '场景建构', '纺织 / 图案'], subjects: ['女性身份', '菲律宾', '迁移', '后殖民', '家', '身体'], outputs: ['摄影', '大型 tableau', '装置'], institutions: ['Silverlens', 'National Gallery Singapore'], achievements: ['The Other Shore'],
    whyImportant: '她的布景不是单纯装饰。图案、植物、服装和画框把家庭空间、殖民历史与当代自我形象叠到同一个平面。',
    projects: [project('2020s', 'The Other Shore', '自画像 / 后殖民 tableau', ['艺术家本人进入复杂布景。', '织物、植物、家具与身体被当成同等级视觉元素。'], '适合研究“装饰性”如何成为知识：每一种图案和物件都能连接迁移、地方和身份。')],
    images: [image('https://format.creatorcdn.com/1fe041ad-5ba6-4b82-92d7-9795918d515e/0/0/0/0%2C0%2C1280%2C1600%2C1600%2C1600/0-0-0/cd9e7129-be72-41dd-88ba-9167c956c78e/1/1/Rosas%2BPandan%2B-%2Bframed%2B-%2BWawi%2Bedit%2Bcopy.jpg?fjkss=exp%3D2089650478~hmac%3Dd79d7e4f73754efc28aea613a5366fa680f403a8de396ec6e644de3ddab1b106', 'The Other Shore', '© Wawi Navarroza', 'https://www.wawinavarroza.com/the-other-shore', 'Artist website')], sourceLabel: '艺术家官网', sourceUrl: 'https://www.wawinavarroza.com/'
  },
  {
    id: 'rosangela-renno', name: 'Rosângela Rennó', born: '1962', base: 'Rio de Janeiro',
    intro: '几乎不生产新照片，而从被丢弃、匿名、机构化和被遗忘的影像中建立新的档案与装置。',
    methods: ['found image', '档案挪用', '分类学', '摄影装置', '再语境化'], subjects: ['遗忘', '匿名影像', '制度', '记忆', '档案', '巴西'], outputs: ['装置', '摄影书', '图像档案'], institutions: ['MoMA', 'Pinacoteca'], achievements: ['档案挪用摄影重要实践者'],
    whyImportant: '她把“照片为何被丢弃”本身变成问题。创作动作是寻找、保存、重新命名和重组，而不是再拍一张新的。',
    projects: [project('1990s–', 'Archive-based works', '匿名照片 / 再分类', ['收集二手、废弃或机构中的既有照片。', '通过标题、排列、遮蔽与空间重新组织。'], '可以和 Joachim Schmid 对照：两人都从图像过剩出发，但 Rennó 更强调制度性遗忘和拉美历史。')],
    images: [image('https://media.mutualart.com/Images/2018_02/14/19/192612805/acd6c606-04da-4080-8084-bf9f59f328d5.Jpeg', 'Archive-based installation', '© Rosângela Rennó', 'https://www.moma.org/artists/45951-rosangela-renno', 'MoMA')], sourceLabel: 'MoMA', sourceUrl: 'https://www.moma.org/artists/45951-rosangela-renno'
  },
  {
    id: 'masahisa-fukase', name: 'Masahisa Fukase', chineseName: '深濑昌久', born: '1934', base: 'Japan',
    intro: '把家庭、婚姻、孤独与乌鸦转成高度主观的黑白摄影书，使私人情绪与外部景观纠缠。',
    methods: ['摄影书', '主观纪实', '黑白摄影', '高颗粒', '长期系列'], subjects: ['孤独', '失恋', '家庭', '乌鸦', '死亡', '记忆'], outputs: ['摄影书', '黑白摄影'], institutions: ['The Met'], achievements: ['Ravens / Karasu'],
    whyImportant: 'Ravens 不是“拍鸟项目”。乌鸦逐渐成为失落和孤独的视觉替身，摄影书顺序把这种心理投射强化成完整世界。',
    projects: [project('1970s–80s', 'Ravens', '摄影书 / 心理景观', ['大量拍摄乌鸦、夜色、雪地和旅途场景。', '高颗粒黑白图像被编成强烈重复节奏。'], '看它时应把乌鸦当作重复符号而不是自然对象，关注它在 sequence 中怎样逐渐承担情绪。')],
    images: [image('https://d7hftxdivxxvm.cloudfront.net/?height=536&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FfZZmnujgVd3gn8Pmegy5_g%2Fnormalized.jpg&width=800', 'Ravens', '© Masahisa Fukase', 'https://www.metmuseum.org/art/collection/search/266954', 'The Met')], sourceLabel: 'The Met', sourceUrl: 'https://www.metmuseum.org/art/collection/search/266954'
  },
  {
    id: 'jungjin-lee', name: 'Jungjin Lee', born: '1961', base: 'New York / Seoul',
    intro: '以极简荒地、手工韩纸输出和浓重表面，把景观摄影从地点描述转向触觉和心理经验。',
    methods: ['景观摄影', '手工印相', '韩纸', '黑白摄影', '材料实验'], subjects: ['荒地', '记忆', '沉默', '土地', '物质性'], outputs: ['手工摄影印相', '摄影书'], institutions: ['MMCA', 'Whitney Museum'], achievements: ['Wind / Thing / Desert 系列'],
    whyImportant: '她的关键在输出材料。粗纤维纸张让图像不是透明窗口，而像被吸进纸面的墨迹，景观因此获得触觉。',
    projects: [project('2000s', 'Wind', '景观 / 手工纸输出', ['拍摄极简地貌和风化表面。', '通过手工纸和深沉黑白层次强化图像的物质感。'], '不要只分析构图；纸张、墨色和吸收方式本身是作品的一半。')],
    images: [image('https://www.mmca.go.kr/upload/exhibition/2018/02/dse_2018022009251840514733.jpg', 'Wind', '© Jungjin Lee', 'https://www.jungjinlee.com/collections', 'Artist website')], sourceLabel: '艺术家官网', sourceUrl: 'https://www.jungjinlee.com/'
  },
  {
    id: 'wang-qingsong', name: 'Wang Qingsong', chineseName: '王庆松', born: '1966', base: 'Beijing',
    intro: '搭建巨大布景、组织大量演员和道具，以近乎电影制片的规模讽刺教育、消费主义和中国快速现代化。',
    methods: ['编排式摄影', '大型 tableau', '场景建构', '群体表演', '大画幅摄影'], subjects: ['消费主义', '教育', '现代化', '全球化', '中国社会'], outputs: ['巨幅摄影', '展览'], institutions: ['Mori Art Museum', 'ICP'], achievements: ['Follow Me, 2003'],
    whyImportant: '他让“编排式摄影”真正进入大规模生产：布景、文字、演员和道具都像电影片场，但最终凝固成一张照片。',
    projects: [project('2003', 'Follow Me', '大型布景 / 社会讽刺', ['搭建类似语言课堂的巨大黑板空间。', '艺术家本人站在密集文字前扮演教学角色。'], '画面信息量很大，但创作方法其实清楚：把一种社会制度转成可以一次性被观看的舞台。')],
    images: [image('https://d2mpxrrcad19ou.cloudfront.net/item_images/1224294/12107631_fullsize.jpg', 'Follow Me', '© Wang Qingsong', 'https://www.mori.art.museum/en/collection/2330/index.html', 'Mori Art Museum')], sourceLabel: 'Mori Art Museum', sourceUrl: 'https://www.mori.art.museum/en/collection/2330/index.html'
  },
  {
    id: 'hassan-hajjaj', name: 'Hassan Hajjaj', born: '1961', base: 'London / Marrakech',
    intro: '把摩洛哥街头、时尚造型、流行商品包装和工作室肖像结合成高度装饰性的后殖民流行视觉。',
    methods: ['编排式肖像', '时尚摄影', '场景建构', 'found material', '装饰性框架'], subjects: ['摩洛哥', '侨民身份', '流行文化', '时尚', '青年文化', '消费'], outputs: ['摄影', '定制画框', '装置'], institutions: ['Maison Européenne de la Photographie', 'V&A'], achievements: ['Kesh Angels 等长期肖像项目'],
    whyImportant: '他把画框也纳入作品。罐头、饮料标识与商业包装环绕肖像，使“照片外面”继续参与身份和消费文化的叙述。',
    projects: [project('2000s–', 'Kesh Angels', '摩洛哥女性 / 时尚肖像', ['人物服装、背景与摩托车被高度编排。', '定制框架使用商品包装与流行视觉。'], '可以把它与 Viviane Sassen 比较：同样高视觉强度，但 Hajjaj 的图案明确连接商品、街头和侨民文化。')],
    images: [image('https://cdn.shopify.com/s/files/1/0275/2692/2323/files/Hajjaj-4_custom-cb7fd284161f80067ef7bc4dfa8c2ba5cc7bb0fc-s40-c85-2.jpg', 'Kesh Angels', '© Hassan Hajjaj', 'https://www.hassanhajjaj.co.uk/', 'Artist website')], sourceLabel: '艺术家官网', sourceUrl: 'https://www.hassanhajjaj.co.uk/'
  },
  {
    id: 'chen-wei', name: 'Chen Wei', chineseName: '陈维', born: '1980', base: 'Beijing',
    intro: '通过工作室搭景重新制造夜店、舞池、房间和城市夜生活，使“真实青年文化”通过虚构场景被重建。',
    methods: ['编排式摄影', '模型 / 搭景', '灯光设计', '静物', '场景建构'], subjects: ['夜生活', '青年文化', '城市', '孤独', '俱乐部文化'], outputs: ['摄影', '装置'], institutions: ['UCCA', 'Centre Pompidou'], achievements: ['Night Club / New City 等系列'],
    whyImportant: '他很适合研究“为什么不直接去夜店拍”。通过工作室重建，灯光、垃圾、汗水痕迹和空间都能被单独控制，记忆反而比现场更具体。',
    projects: [project('2010s', 'Night Club', '工作室搭景 / 夜生活记忆', ['在工作室搭建舞池和俱乐部环境。', '用灯光、地面痕迹和遗留物模拟已经散场的夜晚。'], '摄影对象不是夜店本身，而是“夜店记忆被重新制造”的过程。')],
    images: [image('https://images-prod.dazeddigital.com/1400/azure/dazed-prod/1270/8/1278354.jpg', 'Night Club', '© Chen Wei', 'https://www.dazeddigital.com/art-photography/article/46502/1/chen-wei-photographs-of-raves-in-china-are-not-what-they-seem', 'Dazed')], sourceLabel: 'Dazed / artist project', sourceUrl: 'https://www.dazeddigital.com/art-photography/article/46502/1/chen-wei-photographs-of-raves-in-china-are-not-what-they-seem'
  },
  {
    id: 'rongrong-inri', name: 'RongRong & inri', chineseName: '荣荣 & 映里', born: '1968 / 1973', base: 'Beijing',
    intro: '以共同生活、自我表演和长期记录为基础，把情侣身体、家庭、北京城市拆迁和自然环境连接起来。',
    methods: ['伴侣合作', '自我表演', '长期纪实', '黑白摄影', '摄影装置'], subjects: ['亲密关系', '家庭', '城市变迁', '身体', '北京', '自然'], outputs: ['摄影', '摄影书', '装置'], institutions: ['Three Shadows Photography Art Centre'], achievements: ['共同创作及三影堂摄影艺术中心'],
    whyImportant: '他们的亲密关系不是单独题材，而是一种持续共同工作的生产方式。私人生活和中国城市变化因此在同一时间线里展开。',
    projects: [project('2000s', 'Liulitun / Caochangdi period', '伴侣自我表演 / 城市变化', ['共同进入画面并长期拍摄生活环境。', '家庭身体与拆迁、废墟、季节共同出现。'], '可以和 Pixy Liao 对照：同为伴侣合作，但这里更接近时间、环境和共同生活的长期记录。')],
    images: [image('https://photographyofchina.com/content/v1/51e2f86de4b0180cf3be09fe/1462218891391-00ESNNEA9PUOBP1PCGHE/rong-rong-and-inri-liulitun-beijing-2002-photography-of-china.jpg', 'Liulitun, Beijing', '© RongRong & inri', 'https://photographyofchina.com/author/rong-rong-and-inri', 'Photography of China')], sourceLabel: 'Photography of China', sourceUrl: 'https://photographyofchina.com/author/rong-rong-and-inri'
  },
  {
    id: 'takashi-homma', name: 'Takashi Homma', chineseName: 'ホンマタカシ', born: '1962', base: 'Tokyo',
    intro: '以看似冷淡的距离拍摄东京郊区、建筑、儿童和城市结构，强调日常建成环境如何塑造生活。',
    methods: ['城市摄影', '建筑摄影', '摄影书', '观察式摄影', '长期项目'], subjects: ['郊区', '东京', '儿童', '建筑', '日常生活'], outputs: ['摄影书', '摄影', '展览'], institutions: ['Tokyo Photographic Art Museum'], achievements: ['Tokyo Suburbia'],
    whyImportant: '他没有用戏剧性方式拍城市，而把“普通到几乎没什么”的郊区当成时代结构。距离感本身成为方法。',
    projects: [project('1990s', 'Tokyo Suburbia', '郊区景观 / 城市观察', ['拍摄新建住宅、道路、儿童与城市边缘。', '保持克制、冷静且不戏剧化的观看距离。'], '可以和 Gursky 的宏观结构比较：Homma 更接近日常尺度，关注普通生活被什么样的建筑包围。')],
    images: [image('https://landscapestories.net/content/1-archive/2016/023-japan/projects/002-takashi-homma/18-takashi-homma.jpg', 'Tokyo Suburbia', '© Takashi Homma', 'https://museumcollection.tokyo/en/works/106739/', 'Tokyo Museum Collection')], sourceLabel: 'Tokyo Museum Collection', sourceUrl: 'https://museumcollection.tokyo/en/works/106739/'
  },
  {
    id: 'chen-ronghui', name: 'Chen Ronghui', chineseName: '陈荣辉', born: '1989', base: 'Shanghai / United States',
    intro: '长期拍摄中国东北和收缩城市中的年轻人，把环境肖像、城市景观与人口迁移问题放在一起。',
    methods: ['长期纪实', '环境肖像', '景观摄影', '研究型摄影'], subjects: ['青年', '东北中国', '收缩城市', '迁移', '地方', '工业衰退'], outputs: ['摄影', '摄影书', '展览'], institutions: ['Photography of China'], achievements: ['Freezing Land'],
    whyImportant: '他把宏观人口变化落到年轻人的房间、街道和表情里。社会议题不是额外说明，而通过环境和身体一起出现。',
    projects: [project('2016–19', 'Freezing Land', '东北青年 / 收缩城市', ['在中国东北多个城市长期拍摄年轻人和城市空间。', '环境肖像与空旷景观交替出现。'], '适合研究“人物肖像怎样承担地方经济信息”：背景并不是装饰，而是人物处境的一部分。')],
    images: [image('https://photographyofchina.com/content/v1/51e2f86de4b0180cf3be09fe/1527524412210-YVWXBWR0KJRIQ7K36547/chen-ronghui-photography-of-china-Freezing%20Land%20%2002.jpg', 'Freezing Land', '© Chen Ronghui', 'https://photographyofchina.com/author/chen-ronghui-freezing-land', 'Photography of China')], sourceLabel: 'Photography of China', sourceUrl: 'https://photographyofchina.com/author/chen-ronghui-freezing-land'
  },
  {
    id: 'tomoko-yoneda', name: 'Tomoko Yoneda', chineseName: '米田知子', born: '1965', base: 'London / Helsinki',
    intro: '通过历史地点、人物眼镜和极克制的观看方式研究“不可见历史”如何留在当代空间里。',
    methods: ['观念摄影', '历史研究', '物件摄影', '景观摄影', '文本 + 摄影'], subjects: ['历史', '战争', '记忆', '不可见性', '地点'], outputs: ['摄影', '系列', '展览'], institutions: ['Mori Art Museum', 'ShugoArts'], achievements: ['Between Visible and Invisible'],
    whyImportant: '她最值得看的是“间接观看”。不去制造历史场景，而拍一副眼镜、一个空地点，让观看者自己意识到历史缺席。',
    projects: [project('1998–', 'Between Visible and Invisible', '透过名人眼镜拍文本', ['借用历史人物曾使用的眼镜。', '通过镜片拍摄与该人物相关的文字。'], '这是极清楚的“物件作为观看装置”：眼镜不只是遗物，而实际改变图像。')],
    images: [image('https://d7hftxdivxxvm.cloudfront.net/?height=640&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FxWV1ZRuaECsVHNiCpiHyUA%2Flarge.jpg&width=640', 'Between Visible and Invisible', '© Tomoko Yoneda', 'https://www.mori.art.museum/en/collection/artworks/yonedatomoko/', 'Mori Art Museum')], sourceLabel: 'Mori Art Museum', sourceUrl: 'https://www.mori.art.museum/en/collection/artworks/yonedatomoko/'
  },
  {
    id: 'claudia-andujar', name: 'Claudia Andujar', born: '1931', base: 'São Paulo',
    intro: '几十年与巴西 Yanomami 社群共同工作，以实验摄影、政治行动和档案建立原住民视觉史。',
    methods: ['长期纪实', '实验摄影', '长曝光', '合作摄影', '政治行动'], subjects: ['原住民', '土地', '健康', '暴力', '巴西', '仪式'], outputs: ['摄影', '档案', '展览', '行动项目'], institutions: ['Instituto Moreira Salles', 'Fondation Cartier'], achievements: ['The Yanomami Struggle'],
    whyImportant: '她证明纪实摄影可以同时是形式实验和政治实践。长曝光与光线处理并没有削弱现实性，反而来自她试图理解不同世界观的过程。',
    projects: [project('1970s–', 'The Yanomami Struggle', '长期合作 / 原住民权利', ['长期生活并拍摄 Yanomami 社群。', '使用长曝光、闪光和多种实验方式。', '影像同时进入公共倡议与档案。'], '要把“摄影效果”放回关系史里：形式不是为了神秘化，而是长期共同工作中寻找观看方式。')],
    images: [image('https://cdn.sanity.io/images/cxgd3urn/production/baedf935f0af64cf453ed976d49117f1ad31d0ec-1600x1077.jpg?auto=format&fit=crop&h=1292&q=85&w=1920', 'The Yanomami Struggle', '© Claudia Andujar', 'https://www.theartnewspaper.com/2020/01/27/paris-exhibition-shines-light-on-brazilian-photographer-claudia-andujar-and-the-plight-of-indigenous-peoples', 'The Art Newspaper')], sourceLabel: '项目资料', sourceUrl: 'https://www.theartnewspaper.com/2020/01/27/paris-exhibition-shines-light-on-brazilian-photographer-claudia-andujar-and-the-plight-of-indigenous-peoples'
  },
  {
    id: 'alessandra-sanguinetti', name: 'Alessandra Sanguinetti', born: '1968', base: 'United States / Argentina',
    intro: '长期跟随阿根廷乡村两位表姐妹成长，让游戏式表演、真实青春和时间流逝逐渐混合。',
    methods: ['长期项目', '合作肖像', '编排式摄影', '纪实摄影', '摄影书'], subjects: ['童年', '青春期', '友谊', '乡村', '成长', '女性'], outputs: ['摄影书', '摄影系列'], institutions: ['Magnum Photos', 'Fondation HCB'], achievements: ['The Adventures of Guille and Belinda'],
    whyImportant: '她特别适合研究“编排和纪实如何共存”。女孩们会扮演死亡、婚礼和成年角色，但真实年龄也在项目十几年中持续变化。',
    projects: [project('1999–', 'The Adventures of Guille and Belinda', '长期成长 / 表演与纪实', ['长期拍摄两位表姐妹。', '很多场景由女孩们自己提出角色、服装和剧情。'], '编排不是对现实的背叛，而是儿童怎样想象未来的一种真实证据。')],
    images: [image('https://storage.googleapis.com/fellowship-2022/hr/Alessandra%20Sanguinetti%2C%20AGBEMD%2C%20053_The%20models%2C%202001%20%C2%A9%20Alessandra%20Sanguinetti.jpg', 'The Models', '© Alessandra Sanguinetti', 'https://www.henricartierbresson.org/en/expositions/alessandra-sanguinetti/', 'Fondation HCB')], sourceLabel: 'Fondation HCB', sourceUrl: 'https://www.henricartierbresson.org/en/expositions/alessandra-sanguinetti/'
  },
  {
    id: 'paz-errazuriz', name: 'Paz Errázuriz', born: '1944', base: 'Santiago',
    intro: '在智利独裁及其后长期拍摄跨性别者、拳击手、精神病院居民等被主流视觉排除的人。',
    methods: ['长期纪实', '亲密肖像', '黑白摄影', '合作关系'], subjects: ['酷儿身份', '边缘社群', '独裁', '身体', '亲密关系', '智利'], outputs: ['摄影', '摄影书', '档案'], institutions: ['MOCA Los Angeles', 'Tate'], achievements: ['La Manzana de Adán / Adam’s Apple'],
    whyImportant: '她的重要性不在“拍边缘人群”，而在长期关系和不猎奇的距离。肖像中的身体不是社会问题的插图，而先作为具体的人存在。',
    projects: [project('1980s', 'La Manzana de Adán / Adam’s Apple', '跨性别社群长期肖像', ['在独裁时期长期进入智利跨性别性工作者社群。', '使用近距离黑白肖像持续建立关系。'], '可以与 Muholi 对照：都是社群可见性，但历史环境、合作方式与档案结构完全不同。')],
    images: [image('https://www.pazerrazuriz.com/images/manzana-12.jpg', 'La Manzana de Adán', '© Paz Errázuriz', 'https://www.moca.org/artworks/la-manzana-de-adan-adams-apple', 'MOCA')], sourceLabel: 'MOCA', sourceUrl: 'https://www.moca.org/artworks/la-manzana-de-adan-adams-apple'
  },
  {
    id: 'graciela-iturbide', name: 'Graciela Iturbide', born: '1942', base: 'Mexico City',
    intro: '长期在墨西哥不同社群工作，以黑白摄影把仪式、女性、动物与日常现实连接成开放的象征系统。',
    methods: ['长期纪实', '黑白摄影', '肖像', '观察式摄影'], subjects: ['墨西哥', '原住民', '女性', '仪式', '日常生活', '死亡'], outputs: ['摄影', '摄影书'], institutions: ['MoMA', 'Getty'], achievements: ['Juchitán de las Mujeres'],
    whyImportant: '她的图像常非常象征化，但符号来自长期现实观察，而不是先写概念再寻找对应物。',
    projects: [project('1979–88', 'Juchitán de las Mujeres', '女性社群 / 长期纪实', ['长期在 Juchitán 与当地女性共同生活并拍摄。', '肖像、市场、仪式和日常活动共同构成系列。'], '不要只读“强势女性形象”；更重要的是长期进入一个地方后，象征性图像如何从日常关系自然生长。')],
    images: [image('https://d7hftxdivxxvm.cloudfront.net/?height=800&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FvaAKCWhF4oRIrODgA-dVug%2Fnormalized.jpg&width=666', 'Juchitán de las Mujeres', '© Graciela Iturbide', 'https://www.moma.org/collection/artists/2844', 'MoMA')], sourceLabel: 'MoMA', sourceUrl: 'https://www.moma.org/collection/artists/2844'
  },
  {
    id: 'oscar-munoz', name: 'Oscar Muñoz', born: '1951', base: 'Cali / Colombia',
    intro: '让照片通过呼吸、水、灰尘、蒸发和热消失或重新出现，把影像的“不稳定”变成关于记忆与死亡的物理过程。',
    methods: ['摄影装置', '图像转译', '水 / 蒸发', '参与式观看', '材料实验'], subjects: ['记忆', '死亡', '失踪', '肖像', '图像消失', '哥伦比亚'], outputs: ['装置', '摄影', '影像', '互动作品'], institutions: ['Tate', 'Jeu de Paume'], achievements: ['Aliento / Breath'],
    whyImportant: '他特别适合研究“照片能不能不稳定”。图像不是固定保存记忆，而是在观众呼吸时出现、停止呼吸后消失。',
    projects: [project('1995', 'Aliento / Breath', '呼吸触发肖像', ['在金属镜面上处理已故或失踪者的肖像。', '观众向表面呼气时图像因水汽短暂出现。'], '观众的身体不是旁观者，而是图像显影设备；“记住”被转成一次短暂的物理动作。')],
    images: [image('https://universes.art/fileadmin/_processed_/7/c/csm_25_munoz_4e7a676f34.jpg', 'Aliento', '© Oscar Muñoz', 'https://museodememoria.gov.co/arte-y-cultura/aliento/', 'Museo de Memoria')], sourceLabel: 'Museo de Memoria', sourceUrl: 'https://museodememoria.gov.co/arte-y-cultura/aliento/'
  },
  {
    id: 'santu-mofokeng', name: 'Santu Mofokeng', born: '1956', base: 'South Africa',
    intro: '从南非黑人日常生活、精神性和家庭档案出发，反对 apartheid 时期把黑人经验压缩成新闻冲突图像。',
    methods: ['纪实摄影', '档案挪用', '摄影散文', '黑白摄影', '研究型摄影'], subjects: ['apartheid', '黑人家庭', '精神性', '土地', '历史', '南非'], outputs: ['摄影', '档案项目', '摄影散文'], institutions: ['MoMA', 'Tate'], achievements: ['The Black Photo Album / Train Church'],
    whyImportant: 'The Black Photo Album 特别关键：他不是拍新的黑人中产肖像，而是回收十九、二十世纪家庭工作室照片，恢复被历史叙事忽略的自我形象。',
    projects: [project('1997', 'The Black Photo Album / Look at Me: 1890–1950', '家庭档案 / 历史再编辑', ['收集南非黑人家庭保存的历史工作室肖像。', '研究照片主人、衣着、阶级与图像流通。'], '与其把档案当“旧照片”，他把被摄者当年主动选择怎样被看见这件事重新放回历史。')],
    images: [image('https://www.moma.org/media/W1siZiIsIjU5NDU3NiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=fd0b0bcb35c1d085', 'The Black Photo Album', '© Santu Mofokeng', 'https://santumofokengfoundation.com/santu-mofokeng-photography-black-photo-album', 'Santu Mofokeng Foundation')], sourceLabel: 'Santu Mofokeng Foundation', sourceUrl: 'https://santumofokengfoundation.com/'
  },
  {
    id: 'namsa-leuba', name: 'Namsa Leuba', born: '1982', base: 'Switzerland',
    intro: '把非洲仪式对象、时尚摄影、身体造型和工作室色彩结合，主动暴露西方观看“非洲性”的视觉模板。',
    methods: ['编排式摄影', '时尚摄影', '造型', '场景建构', '研究型摄影'], subjects: ['后殖民', '非洲再现', '仪式', '身体', '时尚', '凝视'], outputs: ['摄影', '时尚影像', '展览'], institutions: ['ECAL', 'Aperture'], achievements: ['Ya Kala Ben'],
    whyImportant: '她不是简单把传统元素“拍得时尚”，而是在制造文化符号进入商业视觉之后会发生什么错位。',
    projects: [project('2011–', 'Ya Kala Ben', '仪式对象 / 时尚 tableau', ['研究几内亚宗教与仪式对象。', '通过造型、身体姿势与鲜明背景重新编排。'], '分析时需要区分“借用传统符号”和“研究观看传统符号的方式”这两层。')],
    images: [image('https://ecal-media.sos-ch-gva-2.exo.io/filer_public_thumbnails/filer_public/19/81/1981ef53-617b-4223-a14d-53466b193333/dd8c0efd5501b04bc314b805def13c71.jpg__1600x0_q85_subsampling-2_upscale.jpg', 'Ya Kala Ben', '© Namsa Leuba', 'https://ecal.ch/en/feed/projects/6297/ya-kala-ben/', 'ECAL')], sourceLabel: 'ECAL', sourceUrl: 'https://ecal.ch/en/feed/projects/6297/ya-kala-ben/'
  },
  {
    id: 'manit-sriwanichpoom', name: 'Manit Sriwanichpoom', born: '1961', base: 'Bangkok',
    intro: '以反复出现的“Pink Man”表演角色进入消费空间、历史照片和政治现场，用荒诞粉色人物制造社会讽刺。',
    methods: ['行为摄影', '编排式摄影', '角色扮演', '档案挪用', '政治讽刺'], subjects: ['泰国政治', '消费主义', '历史', '媒体', '城市'], outputs: ['摄影', '表演', '系列'], institutions: ['Bangkok Art and Culture Centre'], achievements: ['Pink Man, 1997–'],
    whyImportant: 'Pink Man 是一个可以被重复部署的角色机制。同一个人物进入不同历史和商业环境后，项目可以持续扩展而不依赖单一场景。',
    projects: [project('1997–', 'Pink Man', '重复角色 / 社会讽刺', ['由 Sompong Thawee 扮演粉色西装、粉色购物车的角色。', '角色持续进入城市、历史与政治图像。'], '可以把“角色”理解成研究工具：一旦规则明确，他每进入一个新语境都会制造新的冲突。')],
    images: [image('https://publicdelivery.org/wp-content/uploads/2022/08/Manit-Srivanichpoom-Pink-Man-1997-%E2%80%93-On-going-performance-by-Sompong-Thawee--scaled.jpg', 'Pink Man', '© Manit Sriwanichpoom', 'https://publicdelivery.org/artists/manit-sriwanichpoom/', 'Public Delivery')], sourceLabel: 'Public Delivery', sourceUrl: 'https://publicdelivery.org/artists/manit-sriwanichpoom/'
  },
  {
    id: 'yee-i-lann', name: 'Yee I-Lann', born: '1971', base: 'Kota Kinabalu / Malaysia',
    intro: '通过摄影蒙太奇、殖民档案、地垫与纺织合作重新处理婆罗洲、语言和殖民权力的视觉结构。',
    methods: ['摄影蒙太奇', '档案挪用', '数字拼贴', '纺织合作', '装置'], subjects: ['殖民', '婆罗洲', '语言', '权力', '女性', '东南亚'], outputs: ['摄影', '大型拼贴', '纺织装置'], institutions: ['Mori Art Museum', 'National Gallery Singapore'], achievements: ['Sulu Stories / Picturing Power'],
    whyImportant: '她的摄影逐渐离开单纯墙面，进入社区纺织合作。档案图像因此不是被“展示”，而被重新织进地方生产关系。',
    projects: [project('2010s–', 'Picturing Power / Sulu-related works', '殖民档案 / 数字蒙太奇', ['使用殖民时期照片和官方视觉材料。', '通过数字拼贴重新排列人物、空间与权力关系。'], '非常适合研究“历史图片怎样被改写，而不是只被引用”。')],
    images: [image('https://www.mori.art.museum/assets_c/2019/05/063_yeeilann_sulu_highnoon-thumb-1000x999-4829.jpg', 'Sulu Stories related work', '© Yee I-Lann', 'https://www.mori.art.museum/en/collection/2388/index.html', 'Mori Art Museum')], sourceLabel: 'Mori Art Museum', sourceUrl: 'https://www.mori.art.museum/en/collection/2388/index.html'
  },
  {
    id: 'zhang-kechun', name: 'Zhang Kechun', chineseName: '张克纯', born: '1980', base: 'Chengdu',
    intro: '沿黄河和中国西部长期旅行，以冷静大画幅景观把宏大自然、基础设施与普通人的微小尺度放在一起。',
    methods: ['大画幅摄影', '长期旅行', '景观摄影', '纪实摄影', '高视点'], subjects: ['黄河', '现代化', '环境', '基础设施', '中国乡村', '人地关系'], outputs: ['摄影', '摄影书', '展览'], institutions: ['Fondation François Schneider'], achievements: ['The Yellow River'],
    whyImportant: '他的作品能帮助区分“风景漂亮”和“景观如何承载社会结构”。人物常很小，却让巨大的水利、工业或自然环境突然显示尺度和权力。',
    projects: [project('2010s', 'The Yellow River', '河流旅行 / 中国景观', ['沿黄河流域长期旅行并拍摄。', '使用大画幅与相对克制的色彩。', '工业、旅游、建设与普通人物共同进入景观。'], '看画面时先找人和设施的尺度关系：社会变化不是文字概念，而直接存在于空间比例。')],
    images: [image('https://media.itsnicethat.com/images/580a20dd7fa44cbdd6008896.width-1440_HAKv0vSrHclCVy6F.jpg', 'The Yellow River', '© Zhang Kechun', 'https://www.fondationfrancoisschneider.org/en/oeuvres/the-yellow-river-en/', 'Fondation François Schneider')], sourceLabel: 'Fondation François Schneider', sourceUrl: 'https://www.fondationfrancoisschneider.org/en/oeuvres/the-yellow-river-en/'
  },
  {
    id: 'birdhead', name: 'Birdhead', chineseName: '鸟头', born: '1979 / 1980', base: 'Shanghai',
    intro: '由宋涛和季炜煜组成，持续拍摄上海日常并把海量快照转成照片矩阵、书、手工装裱和大型空间装置。',
    methods: ['快照摄影', '图像矩阵', '摄影装置', '摄影书', '手工装裱'], subjects: ['上海', '日常生活', '图像积累', '城市', '朋友', '展示机制'], outputs: ['摄影装置', '照片矩阵', '摄影书'], institutions: ['ShanghART', 'M+'], achievements: ['Birdhead World / Welcome to Birdhead World Again'],
    whyImportant: '他们最值得研究的是“拍很多”如何变成方法。单张快照未必重要，数量、重复、装裱和墙面结构才逐渐生成一个城市视觉档案。',
    projects: [project('2004–', 'Birdhead World', '日常快照 / 图像矩阵', ['长期高频率拍摄上海与个人生活。', '图像以矩阵、手工框、书籍和密集装置重新组织。'], '这里 sequence 不再是一条线，而像数据库：观看者在大量图像之间自己建立连接。')],
    images: [image('https://photographyofchina.com/content/v1/51e2f86de4b0180cf3be09fe/1601383547271-N7LX6KUY3WEZFIM0AA32/1.jpg', 'Birdhead World — installation', '© Birdhead', 'https://www.birdheadart.com/en', 'Artist website')], sourceLabel: '艺术家官网', sourceUrl: 'https://www.birdheadart.com/en'
  }
];
