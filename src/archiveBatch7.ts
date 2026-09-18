import type { ArtistArchive, ArchiveImage, ArchiveRelation } from './archiveData';

const img = (url: string, title: string, credit: string, sourceUrl: string, sourceLabel: string): ArchiveImage => ({ url, title, credit, sourceUrl, sourceLabel });
const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

export const archiveBatch7: Record<string, ArtistArchive> = {
  'thomas-struth': {
    artistId: 'thomas-struth', projectCoverage: '5 个核心长期项目群已完成第一轮 · 1977–现在', imageCoverage: '',
    note: '从无人街道、家庭肖像、博物馆观看者到森林和高科技设施，补出 Struth 如何持续改变“人—空间—制度”的关系。',
    projects: [
      { title: 'Unconscious Places / Streets', cluster: 'city / frontal observation', period: '1977–', summary: '早期以正面、相对空的街道摄影研究城市如何在没有人物时仍组织社会生活。', actions: ['大画幅相机', '正面视点', '城市长期拍摄'], sourceUrl: 'https://thomas-struth.com/', images: [], relations: [] },
      { title: 'Family Portraits', cluster: 'family / group portrait', period: '1980s–', summary: '以固定机位和长时间面对相机的方式拍摄家庭，让站位、距离和目光显示关系。', actions: ['家庭合作', '固定机位', '大画幅群像', '长时间等待'], sourceUrl: 'https://thomas-struth.com/', images: [], relations: [] },
      { title: 'Museum Photographs', cluster: 'museum / spectatorship', period: '1989–', summary: '把真实观众、经典绘画和美术馆建筑压进同一画面，让观看行为本身成为对象。', actions: ['美术馆现场拍摄', '等待观众关系形成', '大画幅摄影'], sourceUrl: 'https://www.sfmoma.org/artist/Thomas_Struth/', images: [img('https://people.brandeis.edu/~teuber/struth_chicago.jpg', 'Museum Photograph — Art Institute of Chicago', '© Thomas Struth', 'https://people.brandeis.edu/~teuber/struthkk.html', 'Brandeis')], relations: [rel('收藏', 'SFMOMA', 'Museum Photographs represented in collection')] },
      { title: 'New Pictures from Paradise', cluster: 'forest / dense visual field', period: '1998–2007', summary: '在澳洲、中国、日本、德国、巴西等地拍摄密集森林，刻意让视线找不到单一中心。', actions: ['全球地点研究', '大尺幅彩色摄影', '无中心构图'], sourceUrl: 'https://www.thomasstruth32.com/bigsize/photographs/new_pictures_from_paradise/index.html', images: [], relations: [] },
      { title: 'Nature & Politics / technology sites', cluster: 'science / machinery / hidden systems', period: '2000s–现在', summary: '进入 CERN、实验室、工业设备和科技基础设施，拍摄普通公众难以接近的复杂系统。', actions: ['机构进入许可', '技术空间摄影', '高细节大尺幅输出'], sourceUrl: 'https://thomas-struth.com/', images: [], relations: [] }
    ], awards: [], exhibitions: ['Thomas Struth Photographs 1978–2010', 'Haus der Kunst 2017', 'Guggenheim Bilbao 2019'], sources: [{ label: 'Artist website', url: 'https://thomas-struth.com/' }, { label: 'SFMOMA', url: 'https://www.sfmoma.org/artist/Thomas_Struth/' }]
  },
  'andreas-gursky': {
    artistId: 'andreas-gursky', projectCoverage: '5 个资本 / 建筑 / 数字图像节点已完成第一轮 · 1980s–2016', imageCoverage: '',
    note: '补出高视点、大尺幅与数字清理如何逐渐成为分析全球资本空间的工具。',
    projects: [
      { title: 'Paris, Montparnasse', cluster: 'architecture / repetition / large scale', period: '1993', summary: '把巨大的住宅建筑压成几乎无边界的二维格网，让单元重复取代传统透视。', actions: ['高视点', '多幅拼接', '巨幅输出'], sourceUrl: 'https://www.andreasgursky.com/', images: [], relations: [] },
      { title: '99 Cent', cluster: 'retail / consumption / visual excess', period: '1999', summary: '从高处拍摄折扣超市货架，把商品、价格牌和消费者压缩成密集彩色表面。', actions: ['高视点', '商业空间摄影', '数字调整', '巨幅输出'], sourceUrl: 'https://www.andreasgursky.com/', images: [img('https://loveincorporated.blob.core.windows.net/contentimages/largesize/39834064-1d1f-43dc-a1ad-d6d63efd144e-Y%2099%20gursky%20Uli%20Deck%20DPA%20PA%20Images.jpg', '99 Cent', '© Andreas Gursky', 'https://www.andreasgursky.com/', 'Artist / exhibition documentation')], relations: [] },
      { title: 'Rhein II', cluster: 'landscape / digital subtraction', period: '1999', summary: '通过数字移除行人、建筑等干扰，把莱茵河景观压缩为几条水平色带。', actions: ['现场拍摄', '数字删除', '大尺幅打印'], sourceUrl: 'https://www.andreasgursky.com/', images: [img('https://img.zeit.de/kultur/kunst/2021-08/deutsches-fotoinstitut-fotografie-nrw-monika-gruetters-duesseldorf-teaserfoto/wide__1000x562', 'Rhein II — installation context', '© Andreas Gursky', 'https://www.zeit.de/kultur/kunst/2021-08/deutsches-fotoinstitut-fotografie-nrw-monika-gruetters-duesseldorf', 'DIE ZEIT')], relations: [] },
      { title: 'Chicago Board of Trade', cluster: 'finance / crowd / digital composition', period: '1997–2009', summary: '从高处把交易大厅的人群变成近似抽象图案，同时仍保留金融劳动的可读性。', actions: ['高视点', '多人群摄影', '数字合成 / 调整'], sourceUrl: 'https://www.andreasgursky.com/', images: [], relations: [] },
      { title: 'Amazon', cluster: 'warehouse / logistics / commodity', period: '2016', summary: '把仓储中的海量商品和货架变成无尽网格，使平台经济以视觉密度出现。', actions: ['大型物流空间拍摄', '高视点', '巨幅输出'], sourceUrl: 'https://www.andreasgursky.com/', images: [], relations: [] }
    ], awards: [], exhibitions: ['Hayward Gallery retrospective 2018'], sources: [{ label: 'Artist website', url: 'https://www.andreasgursky.com/' }]
  },
  'bernd-hilla-becher': {
    artistId: 'bernd-hilla-becher', projectCoverage: '4 个工业类型学核心群已完成第一轮 · 1959–2000s', imageCoverage: '',
    note: '按工业结构功能拆分，而不是把全部作品合并成一句“类型学”；每组都依赖高度标准化拍摄规则。',
    projects: [
      { title: 'Water Towers', cluster: 'typology / industrial architecture', period: '1960s–', summary: '以阴天、正面、无人、统一视点拍摄不同水塔，再组成网格比较形态。', actions: ['大画幅黑白摄影', '阴天条件', '正面视点', '网格编排'], sourceUrl: 'https://www.moma.org/collection/works/49624', images: [img('https://cdn.mos.cms.futurecdn.net/ezFniuKsnnb5TpuiqMGouV.jpg', 'Water Towers', '© Estate Bernd & Hilla Becher', 'https://www.wallpaper.com/art/photographers-bernd-and-hilla-bechers-iconic-industrial-scenes-go-on-show-at-sprth-magers-london', 'Wallpaper*')], relations: [rel('收藏', 'MoMA', 'Water Towers')] },
      { title: 'Blast Furnaces', cluster: 'typology / production infrastructure', period: '1960s–1990s', summary: '跨地区记录高炉，让已消失或即将消失的工业设施进入比较档案。', actions: ['工业田野', '统一光线', '固定构图', '网格'], sourceUrl: 'https://www.moma.org/artists/512-bernd-becher', images: [], relations: [] },
      { title: 'Winding Towers', cluster: 'mining / structural comparison', period: '1960s–', summary: '以矿井卷扬塔为单一类型长期记录，强调结构细小差异。', actions: ['长期重复拍摄', '功能分类', '系列网格'], sourceUrl: 'https://www.moma.org/artists/512-bernd-becher', images: [], relations: [] },
      { title: 'Framework Houses', cluster: 'vernacular architecture / typology', period: '1959–1970s', summary: '将德国等地木构住宅以同样克制规则拍摄，使民居与工业建筑共享分类方法。', actions: ['正面拍摄', '无人环境', '系列分类'], sourceUrl: 'https://www.moma.org/artists/512-bernd-becher', images: [], relations: [] }
    ], awards: ['Golden Lion for Sculpture — Venice Biennale 1990'], exhibitions: ['Major typology exhibitions across MoMA / SFMOMA / Tate contexts'], sources: [{ label: 'MoMA', url: 'https://www.moma.org/artists/512-bernd-becher' }]
  },
  'candida-hofer': {
    artistId: 'candida-hofer', projectCoverage: '4 个公共文化空间项目群已完成第一轮 · 1970s–现在', imageCoverage: '',
    note: '从早期人物系列到无人公共室内，补出她为何逐渐让人离开画面。',
    projects: [
      { title: 'Türken in Deutschland', cluster: 'migration / social portrait', period: '1973–1979', summary: '早期长期拍摄德国土耳其移民，与后来无人空间形成重要对照。', actions: ['长期纪实', '肖像 / 环境摄影', '社会空间观察'], sourceUrl: 'https://www.candidahoefer.com/', images: [], relations: [] },
      { title: 'Libraries', cluster: 'institutional interior / knowledge architecture', period: '1980s–', summary: '以高度清晰和秩序化视点拍摄图书馆，让书架、桌椅和通道显示知识制度如何安排身体。', actions: ['大型室内摄影', '长曝光', '居中 / 轴线构图', '尽量无人'], sourceUrl: 'https://www.candidahoefer.com/', images: [img('https://assets.phillips.com/auctions/UK040118/37_001.jpg', 'Biblioteca de la Real Academia de la Lengua Madrid I', '© Candida Höfer', 'https://www.phillips.com/detail/candida-hofer/UK040118/37', 'Phillips')], relations: [] },
      { title: 'Museums / palaces', cluster: 'display / cultural authority', period: '1990s–', summary: '持续进入博物馆、宫殿与历史室内，让建筑本身成为被观看的制度肖像。', actions: ['机构进入', '大尺幅摄影', '空间对称'], sourceUrl: 'https://www.candidahoefer.com/', images: [], relations: [] },
      { title: 'Theatres / opera houses', cluster: 'spectatorship without spectators', period: '1990s–', summary: '拍摄剧院、歌剧院和表演空间，但常在无人时呈现，留下观看结构本身。', actions: ['空场拍摄', '长曝光', '轴线构图'], sourceUrl: 'https://www.candidahoefer.com/', images: [], relations: [rel('展览', 'German Pavilion — Venice Biennale', '2003')] }
    ], awards: [], exhibitions: ['German Pavilion — Venice Biennale 2003'], sources: [{ label: 'Artist website', url: 'https://www.candidahoefer.com/' }]
  },
  'paul-mpagi-sepuya': {
    artistId: 'paul-mpagi-sepuya', projectCoverage: '4 个镜面工作室 / 酷儿肖像节点已完成第一轮 · 2010s–2024', imageCoverage: '',
    note: '不把镜子当效果，而是拆解它如何让摄影师、相机、被摄者和已打印照片同时进入画面。',
    projects: [
      { title: 'Darkroom Mirror photographs', cluster: 'mirror / camera / queer portrait', period: '2010s–', summary: '通过暗房 / 工作室镜面把摄影师、相机、朋友身体和照片碎片折叠到一个平面。', actions: ['镜面布置', '中画幅相机', '朋友合作', '打印照片再入镜'], sourceUrl: 'https://ccp.org.au/exhibition/paul-mpagi-sepuya/', images: [img('https://ccp.org.au/app/uploads/2022/03/PHOTO.2022_CCP_DOCO_270422_JF.014-scaled.jpg', 'Paul Mpagi Sepuya — installation view', '© Paul Mpagi Sepuya / CCP', 'https://ccp.org.au/exhibition/paul-mpagi-sepuya/', 'CCP')], relations: [] },
      { title: 'Studio Mirror works', cluster: 'self-portrait / production apparatus', period: '2017–', summary: '相机、三脚架、手和镜面边缘持续暴露，使肖像同时描述制作现场。', actions: ['自我表演', '镜子', '相机入镜', '空间碎片化'], sourceUrl: 'https://whitney.org/artists/18622', images: [img('https://images.squarespace-cdn.com/content/v1/571ea495859fd0619163494f/ea85f948-e826-404a-9800-dfd073b23606/Self-portrait%2BIn%2Bthe%2BStudio%2BMirror%2B%28_DSF0653%29%2C%2B2024%2B-%2BStudio%2BPaul%2BMpagi%2BSepuya.jpg?format=2500w', 'Self-portrait in the Studio Mirror, 2024', '© Paul Mpagi Sepuya', 'https://www.queer-art.org/meet-the-mentors', 'Queer|Art')], relations: [] },
      { title: 'Fragment / print-within-picture studies', cluster: 'rephotography / body fragments', period: '2010s–', summary: '把旧打印、身体局部和镜面反射重新放进新照片，形成多层时间。', actions: ['旧照片重拍', '身体局部', '镜面拼合'], sourceUrl: 'https://whitney.org/artists/18622', images: [], relations: [] },
      { title: 'Whitney Biennial presentation', cluster: 'museum installation / queer studio ecology', period: '2019', summary: '在双年展语境中让工作室关系、欲望和摄影设备成为可被共同读取的实践系统。', actions: ['系列选片', 'museum installation'], sourceUrl: 'https://whitney.org/exhibitions/2019-biennial', images: [], relations: [rel('展览', 'Whitney Biennial', '2019')] }
    ], awards: [], exhibitions: ['Whitney Biennial 2019', 'PHOTO 2022 / CCP presentation'], sources: [{ label: 'CCP', url: 'https://ccp.org.au/exhibition/paul-mpagi-sepuya/' }, { label: 'Whitney', url: 'https://whitney.org/artists/18622' }]
  },
  'pixy-liao': {
    artistId: 'pixy-liao', projectCoverage: '4 个 Experimental Relationship 长期阶段已完成第一轮 · 2007–现在', imageCoverage: '',
    note: '她的核心是一条持续十余年的长期系列，本轮按关系方法变化分阶段，而不是虚构多个不存在的独立系列。',
    projects: [
      { title: 'Experimental Relationship — early reversals', cluster: 'couple / gender-role reversal', period: '2007–2010', summary: '以艺术家与伴侣 Moro 共同出演，通过身体位置直接颠倒传统异性情侣的主动 / 被动角色。', actions: ['伴侣共同表演', '三脚架 / 自定时', '居家场景', '姿势设计'], sourceUrl: 'https://pixyliao.com/', images: [img('https://images.squarespace-cdn.com/content/v1/57119e0d22482eca2d327d36/1467261236553-1V1HCFLYG6IW30K7E5HF/scarf.jpg?format=2500w', 'Experimental Relationship', '© Pixy Liao', 'https://pixyliao.com/', 'Artist website')], relations: [] },
      { title: 'Experimental Relationship — domestic power games', cluster: 'home / props / intimacy', period: '2011–2015', summary: '家具、食物、衣服与小道具逐渐成为权力关系的机械结构。', actions: ['家庭空间搭景', '道具设计', '身体接触', '幽默表演'], sourceUrl: 'https://pixyliao.com/', images: [img('https://www.1854.photography/wp-content/uploads/2019/04/%C2%A9-Pixy-Liao-from-the-series-Experimental-Relationship-2-2-1024x794.jpg', 'Experimental Relationship — magnifying glass', '© Pixy Liao', 'https://www.1854.photography/2019/04/female-in-focus-when-making-artwork-your-gender-matters/', 'British Journal of Photography')], relations: [] },
      { title: 'Experimental Relationship — body as structure', cluster: 'staged body / object-like pose', period: '2016–', summary: '两人的身体越来越像支架、家具或雕塑部件，亲密关系被转成形式结构。', actions: ['身体编排', '摄影棚 / 居家混合', '尺度与支撑关系'], sourceUrl: 'https://pixyliao.com/', images: [], relations: [] },
      { title: 'Photobook / installation versions', cluster: 'sequence / long-term archive', period: '2010s–现在', summary: '长期项目通过书和展览重新排序，使单张幽默图像形成持续的权力协商史。', actions: ['跨年选片', '书籍编辑', '展览编排'], sourceUrl: 'https://pixyliao.com/', images: [], relations: [] }
    ], awards: [], exhibitions: ['Rencontres d’Arles contexts', 'Jimei x Arles contexts'], sources: [{ label: 'Artist website', url: 'https://pixyliao.com/' }]
  },
  'richard-mosse': {
    artistId: 'richard-mosse', projectCoverage: '4 个军事 / 监控 / 气候成像项目已完成第一轮 · 2010–2022', imageCoverage: '',
    note: '把每次技术切换单独记录：Aerochrome、16mm多屏、军用热成像和多光谱生态成像分别带来不同政治问题。',
    projects: [
      { title: 'Infra', cluster: 'Aerochrome / Congo / military imaging', period: '2010–2011', summary: '使用原为军事侦察设计的 Kodak Aerochrome 红外胶片拍摄刚果战争地区。', actions: ['Aerochrome红外胶片', '冲突地区田野', '大尺幅彩色摄影'], sourceUrl: 'https://www.richardmosse.com/projects/infra', images: [img('https://artlogic-res.cloudinary.com/w_1200%2Cc_limit%2Cf_auto%2Cfl_lossy%2Cq_auto/ws-altmansiegel/usr/exhibitions/images/artists/68/2015_louisiana_040215_mosse_02.jpg', 'Infra — installation view', '© Richard Mosse', 'https://altmansiegel.com/artists/68-richard-mosse/installation_shots/image3760/', 'Altman Siegel')], relations: [] },
      { title: 'The Enclave', cluster: 'six-channel film / infrared conflict image', period: '2012–2013', summary: '把红外影像扩展成六频道 16mm 装置，让冲突不再以单张决定性瞬间出现。', actions: ['Aerochrome 16mm', '六屏同步', '现场录音', '空间化观看'], sourceUrl: 'https://www.richardmosse.com/projects/the-enclave', images: [], relations: [rel('展览', 'Irish Pavilion — Venice Biennale', '2013')] },
      { title: 'Incoming', cluster: 'military thermal camera / migration', period: '2014–2017', summary: '使用能在数十公里外探测人体热量的军用热成像设备拍摄难民迁徙。', actions: ['军用热成像', '远距离拍摄', '多屏视频', '声音'], sourceUrl: 'https://www.richardmosse.com/projects/incoming', images: [], relations: [] },
      { title: 'Broken Spectre', cluster: 'multispectral imaging / Amazon ecology', period: '2018–2022', summary: '使用多种光谱、航空和微观成像记录亚马逊毁林，把生态危机拆成不同尺度。', actions: ['航空成像', '多光谱摄影', '宏观 / 微观切换', '大型影像装置'], sourceUrl: 'https://www.richardmosse.com/projects/broken-spectre', images: [], relations: [] }
    ], awards: ['Deutsche Börse Photography Prize 2014 — winner'], exhibitions: ['Irish Pavilion — Venice Biennale 2013', 'Incoming — Barbican / international tour'], sources: [{ label: 'Artist website', url: 'https://www.richardmosse.com/' }]
  },
  'penelope-umbrico': {
    artistId: 'penelope-umbrico', projectCoverage: '4 个网络图像 / 搜索系统项目已完成第一轮 · 2006–现在', imageCoverage: '',
    note: '按平台与搜索机制补档：夕阳、二手电视、相机测试图和持续更新的图像数量。',
    projects: [
      { title: 'Suns from Sunsets from Flickr', cluster: 'platform search / mass amateur photography', period: '2006–', summary: '搜索 Flickr 的 sunset，裁取每张照片中的太阳，并以当日搜索结果数量更新标题。', actions: ['平台搜索', '下载用户图像', '裁切太阳', '海量网格安装'], sourceUrl: 'https://www.penelopeumbrico.net/index.php/project/suns/', images: [img('https://d7hftxdivxxvm.cloudfront.net/?quality=85&resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2FQXp3sAvyoZbxAcuRkzVtvQ%252FSunsFromFlickr_Brisbane3_email.jpeg&width=910', 'Suns from Sunsets from Flickr — installation', '© Penelope Umbrico', 'https://www.artsy.net/article/mark-moore-fine-art-penelope-umbrico-discusses-suns-series-works-08-02-17', 'Artsy')], relations: [] },
      { title: 'TVs from Craigslist', cluster: 'marketplace / photographed screens', period: '2008–', summary: '收集 Craigslist 卖家拍摄电视机时意外留下的闪光、房间与身体反射。', actions: ['平台搜集', 'found image', '按屏幕反射分类', '墙面序列'], sourceUrl: 'https://www.penelopeumbrico.net/', images: [], relations: [] },
      { title: 'Range', cluster: 'camera technology / mountain image', period: '2014–', summary: '从相机说明书、测试图和网络中抽取“山”这一摄影母题，追踪技术如何标准化风景。', actions: ['说明书 / 网络图搜集', '图像重编', '摄影装置'], sourceUrl: 'https://www.penelopeumbrico.net/', images: [], relations: [] },
      { title: '24h / endless sunsets', cluster: 'network time / repetition', period: '2010s–', summary: '把全球不断上传的日落图像组织成没有真正结束的网络时间。', actions: ['持续网络采集', '时间序列', '屏幕 / 打印展示'], sourceUrl: 'https://www.penelopeumbrico.net/', images: [], relations: [] }
    ], awards: [], exhibitions: ['SFMOMA / ICP / Aperture contexts'], sources: [{ label: 'Artist website', url: 'https://www.penelopeumbrico.net/' }]
  },
  'viviane-sassen': {
    artistId: 'viviane-sassen', projectCoverage: '4 个身体 / 阴影 / 色彩项目已完成第一轮 · 2008–2018', imageCoverage: '',
    note: '从非洲记忆到梦境、阴影和拼贴，补出她如何在艺术与时尚之间持续抽象身体。',
    projects: [
      { title: 'Flamboya', cluster: 'Africa / body / memory', period: '2008', summary: '在肯尼亚等地拍摄人物、环境和身体，以强烈色彩与姿势连接童年记忆和当代生活。', actions: ['人物合作', '色彩摄影', '身体编排', '摄影书'], sourceUrl: 'https://www.vivianesassen.com/', images: [], relations: [] },
      { title: 'Parasomnia', cluster: 'dream / staged body / colour', period: '2011', summary: '以梦游、睡眠和不稳定感为结构，让人物姿势与环境产生不现实关系。', actions: ['编排式肖像', '强色彩', '局部遮挡'], sourceUrl: 'https://www.vivianesassen.com/', images: [], relations: [] },
      { title: 'Umbra', cluster: 'shadow / abstraction / body', period: '2014', summary: '将阴影当成与人物等量的第二身体，使脸和身份不断被切断。', actions: ['强光', '阴影构图', '身体几何化', '色彩控制'], sourceUrl: 'https://www.vivianesassen.com/', images: [img('https://images-prod.anothermag.com/480/azure/another-prod/290/0/290472.JPG', 'Umbra', '© Viviane Sassen', 'https://www.anothermag.com/art-photography/3319/umbra-by-viviane-sassen', 'AnOther')], relations: [] },
      { title: 'Hot Mirror', cluster: 'retrospective / collage / painting on photo', period: '2018', summary: '回看长期作品时加入镜面、拼贴和绘画介入，进一步把摄影表面当成可加工材料。', actions: ['跨年代选片', '拼贴', '绘画介入', '展览编排'], sourceUrl: 'https://www.vivianesassen.com/', images: [], relations: [] }
    ], awards: ['Prix de Rome 2007'], exhibitions: ['Hot Mirror — major survey contexts'], sources: [{ label: 'Artist website', url: 'https://www.vivianesassen.com/' }]
  },
  'daido-moriyama': {
    artistId: 'daido-moriyama', projectCoverage: '5 个街头 / 摄影书 / 连载节点已完成第一轮 · 1968–现在', imageCoverage: '',
    note: '不把 are-bure-boke 当滤镜，而把摄影书、街头移动、复制和杂志连载一起纳入方法。',
    projects: [
      { title: 'Japan: A Photo Theater', cluster: 'street / performance / postwar city', period: '1968', summary: '早期摄影书将剧团、街头和战后城市压进粗粝黑白印刷。', actions: ['街头快速拍摄', '高颗粒', '书籍编辑'], sourceUrl: 'https://www.moriyamadaido.com/', images: [], relations: [] },
      { title: 'Stray Dog, Misawa', cluster: 'street icon / are-bure-boke', period: '1971', summary: '高反差、失焦与粗颗粒的流浪犬成为他都市观看方式的标志，而不是单纯单张名作。', actions: ['快速抓拍', '高反差冲印', '粗颗粒放大'], sourceUrl: 'https://www.moma.org/collection/works/52359', images: [img('https://api.finarte.it/api/lotto/immagine/92093', 'Stray Dog, Misawa', '© Daido Moriyama', 'https://www.moma.org/collection/works/52359', 'MoMA / image documentation')], relations: [rel('收藏', 'MoMA', 'Stray Dog, Misawa')] },
      { title: 'Farewell Photography', cluster: 'printing / degradation / anti-photography', period: '1972', summary: '通过重拍、过度反差、失真和印刷噪点把“清楚图像”推到崩溃边缘。', actions: ['再摄影', '底片 / 印刷实验', '摄影书 sequence'], sourceUrl: 'https://www.moriyamadaido.com/', images: [], relations: [] },
      { title: 'Record', cluster: 'magazine / ongoing diary / city', period: '1972–', summary: '以自出版杂志持续发布街头图像，令拍摄、编辑与印刷成为不断更新的日记系统。', actions: ['持续街拍', '自主编辑', '杂志出版', '重印旧图'], sourceUrl: 'https://www.moriyamadaido.com/', images: [], relations: [] },
      { title: 'Light and Shadow', cluster: 'surface / close looking / return to photography', period: '1982', summary: '从城市表面、光斑与近距离物体重新建立观看节奏。', actions: ['近距离街拍', '高反差黑白', '摄影书编辑'], sourceUrl: 'https://www.moriyamadaido.com/', images: [], relations: [] }
    ], awards: ['Hasselblad Award 2019'], exhibitions: ['Daido Tokyo — Fondation Cartier 2016', 'Daido Moriyama: A Retrospective — international tour'], sources: [{ label: 'Artist website', url: 'https://www.moriyamadaido.com/' }, { label: 'MoMA', url: 'https://www.moma.org/collection/works/52359' }]
  }
};
