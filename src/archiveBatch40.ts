import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

export const archiveBatch40: Record<string, ArtistArchive> = {
  'dayanita-singh': {
    artistId: 'dayanita-singh',
    projectCoverage: '8 个摄影书 / 移动博物馆 / photo-architecture 节点已建立深档案 · 1980s–现在',
    imageCoverage: '0 / 8 节点已有代表图像',
    note: 'Singh 的关键不只是“摄影书做得好”。她把摄影理解成一种可以不断重新编辑、折叠、储存、搬运和展开的材料：照片进入书，再从书进入木制结构，木制结构同时又是展柜、档案柜、家具和可移动博物馆。',
    projects: [
      {
        title: 'Zakir Hussain / early photo-biography method', cluster: 'long-term subject / book / photo-biography', period: '1980s–1986',
        summary: 'Singh 最早的重要实践来自长期跟随 tabla 演奏家 Zakir Hussain。她不是以单次委托完成肖像，而是跟随人物在巡演、后台和日常中的变化，最终把长期档案压缩成书。',
        actions: ['长期跟随同一人物而非一次性拍摄', '在演出、旅行和私人空间之间切换', '积累大量人物与环境图像', '通过摄影书将多年材料重新排序', '让出版物而不是单张代表照成为项目最终结构'],
        sourceUrl: 'https://dayanitasingh.net/', images: [], relations: []
      },
      {
        title: 'Myself Mona Ahmed', cluster: 'friendship / long duration / text + photograph / book', period: '1989–2001',
        summary: '与 Mona Ahmed 的长期关系最终形成摄影与文字共同工作的书。项目不是把一个人固定为“身份案例”，而是让友谊、时间、城市和 Mona 自己的声音持续改变摄影师最初的理解。',
        actions: ['长期进入 Mona Ahmed 的生活环境', '在多年中持续拍摄而不是一次调查', '保存通信 / 文字材料', '让人物自身声音进入出版结构', '通过书籍把关系史和照片并置'],
        sourceUrl: 'https://dayanitasingh.net/', images: [], relations: [rel('出版', 'Myself Mona Ahmed', 'Scalo, 2001')]
      },
      {
        title: 'Sent a Letter', cluster: 'accordion book / travel / portable exhibition', period: '2007–2008',
        summary: '七本小型 accordion books 将不同旅行 / 地点的图像变成可以展开在桌面上的便携展览。这里书已经开始从传统线性翻页转向可展开、可同时观看的空间结构。',
        actions: ['从不同旅行档案中分别选图', '每组压缩成小型图像 sequence', '使用手风琴式连续折页', '让书可完全展开并同时显示多张照片', '把出版物当作可携带的微型展览'],
        sourceUrl: 'https://dayanitasingh.net/', images: [], relations: [rel('出版', 'Sent a Letter', 'Steidl, 2008')]
      },
      {
        title: 'File Room', cluster: 'archives / paper / bureaucracy / image accumulation', period: '2011–2013',
        summary: 'Singh 长期拍摄印度办公室、法院、档案馆里被纸张淹没的空间。文件不是信息的透明载体，而变成有重量、会堆积、会老化的建筑性物质，并最终推动她发展自己的“museum”展示形式。',
        actions: ['进入实际运行的办公室 / 档案空间', '拍摄成排纸张、文件柜、捆扎档案和工作人员', '重复正面 / 深空间构图以比较不同档案环境', '从大量图像中筛选网格', '将 36 张 digital prints 形成大型整体', '进一步把档案主题转成可储存照片的展示家具'],
        sourceUrl: 'https://dayanitasingh.net/file-room/', images: [], relations: [rel('展览', '54th Venice Biennale context', '2011')]
      },
      {
        title: 'Museum Bhavan', cluster: 'mobile museum / teak architecture / changing sequence', period: '2013–2017',
        summary: 'Museum Bhavan 由多个可移动“博物馆”组成。大型木制结构可展开成屏风，也能折合；照片既可展示在外部，也可储存在内部，因此每次安装都能更换作品与顺序。',
        actions: ['将不同摄影系列重新分类为多个 museum', '定制约人体尺度的木制折叠结构', '在面板外侧装入照片', '在结构内部预留 reserve collection 储存空间', '每次展览重新决定哪些照片出现 / 隐藏', '加入箱、桌、凳等家具使观看与档案功能重合'],
        sourceUrl: 'https://dayanitasingh.net/museum-bhavan/', images: [], relations: [rel('出版', 'Museum Bhavan', 'Steidl, 2017')]
      },
      {
        title: 'Museum of Chance', cluster: '162 photographs / teak / chance / re-sequencing', period: '2013–',
        summary: '162 张跨约三十年的照片进入铰链式 teak structures。MoMA 的版本可开、可关、可把照片移到旁边的小盒 / 墙面，因此不存在唯一正确的顺序；编辑本身被变成作品的持续动作。',
        actions: ['从约三十年摄影档案中选出 160+ 图像', '制作 hinged / foldable teak structures', '把结构同时设计为展示、档案与储存装置', '保留大量照片作为 reserve collection', '每次安装重新抽取 / 组合图像', '让结构折叠或展开改变展厅尺度', '把 chance 作为图像关系生成机制'],
        sourceUrl: 'https://www.moma.org/collection/works/221934', images: [], relations: [rel('收藏', 'MoMA', 'Museum of Chance, 2013')]
      },
      {
        title: 'Suitcase Museum / Pothi Box', cluster: 'portable archive / suitcase / unbound book', period: '2010s–',
        summary: '她持续缩小“博物馆”的体积：照片装进手提箱、木盒或未装订卡片中，观看者 / 收藏者可以重新摆放。摄影因此不是固定墙面图像，而是一套可移动的库存。',
        actions: ['把照片统一为可储存的小型物件', '使用 suitcase / wooden box 作为作品容器', '让显示中的照片和储存中的照片共存', '允许图像被抽出、替换、重排', '把“展览结束后的储存”提前设计进作品本体'],
        sourceUrl: 'https://dayanitasingh.net/', images: [], relations: []
      },
      {
        title: 'Museum of Photography / Box of Shedding', cluster: 'rooms / vernacular images / furniture / user reconfiguration', period: '2010s–现在',
        summary: '后续 museum / box works 继续把室内、旧照片和家具结构结合。部分 box 内含可拆卸、无装订图像卡，使用者可以自行改变最前面的照片；“摄影作品”因此包含一个可操作的编辑界面。',
        actions: ['长期拍摄印度房间和房间内既有照片', '将照片再次分类成 museum', '制作家具式 display/storage object', '把图像输出成可抽换卡片', '允许展览方 / 使用者重排可见内容', '让摄影、设计、家具和档案成为同一作品系统'],
        sourceUrl: 'https://www.metmuseum.org/art/collection/search?q=Dayanita%20Singh', images: [], relations: []
      }
    ],
    awards: ['Hasselblad Award 2022'],
    exhibitions: ['54th Venice Biennale context 2011', 'Museum Bhavan — Hayward Gallery 2013', 'Surrounds: 11 Installations — MoMA 2019'],
    sources: [
      { label: 'Dayanita Singh official', url: 'https://dayanitasingh.net/' },
      { label: 'MoMA — Museum of Chance', url: 'https://www.moma.org/collection/works/221934' },
      { label: 'The Met — Dayanita Singh', url: 'https://www.metmuseum.org/art/collection/search?q=Dayanita%20Singh' }
    ]
  },

  'gillian-wearing': {
    artistId: 'gillian-wearing',
    projectCoverage: '7 个参与式 / 面具 / 家庭 / 自我表演节点已建立深档案 · 1992–2013',
    imageCoverage: '0 / 7 节点已有代表图像',
    note: 'Wearing 经常先设置一个非常简单的社会规则，再让陌生人、家人或自己在规则里暴露出“外表身份”和“自我叙述”之间的裂缝。后来她进一步用硅胶面具、假发、服装和 prosthetics 把这种裂缝直接做成脸。',
    projects: [
      {
        title: 'Signs that say what you want them to say…', cluster: 'street participation / handwritten text / portrait', period: '1992–1993',
        summary: 'Wearing 在街头请陌生人自己写一句真正想说的话，然后拿着手写纸面对镜头。摄影师不替他们写 caption，社会外表和私人语言因此在同一画面中直接冲突。',
        actions: ['在街头随机接触陌生人', '提供纸和笔而不预设内容', '让参与者自己写下想表达的话', '保持人物原本衣着 / 社会外观', '让参与者举牌面对镜头', '以重复规则积累大量肖像'],
        sourceUrl: 'https://www.npg.org.uk/collections/search/person/mp59116/gillian-wearing', images: [], relations: []
      },
      {
        title: 'Confess All on Video. Don’t Worry You Will Be in Disguise', cluster: 'confession / mask / video / anonymity', period: '1994',
        summary: '邀请参与者戴上面具，在录像中说出不愿以真实脸公开的经历。面具既提供匿名，也制造第二张社会脸，使声音、身体与可见身份发生错位。',
        actions: ['公开邀请陌生参与者', '给参与者提供遮蔽身份的面具 / 伪装', '固定机位录像', '让参与者以自己的声音讲述私人经验', '保留说话时的身体动作与停顿', '把匿名机制本身作为作品结构'],
        sourceUrl: 'https://www.tate.org.uk/art/artists/gillian-wearing-2677', images: [], relations: []
      },
      {
        title: '2 into 1', cluster: 'family / lip-sync / voice exchange / video', period: '1997',
        summary: 'Wearing 采访一位母亲和两个儿子，让他们描述彼此，再把录音交换：母亲对口型说儿子的话，儿子则说母亲的话。家庭成员的脸和彼此评价被强行分开再组合。',
        actions: ['分别采访家庭成员', '录下他们谈论彼此的声音', '交换声音轨', '让每个人学习 / lip-sync 他人的话', '固定正面录像', '通过剪辑让脸与语言故意不一致'],
        sourceUrl: 'https://www.tate.org.uk/art/artists/gillian-wearing-2677', images: [], relations: []
      },
      {
        title: 'Family Album', cluster: 'prosthetic mask / family photo / self as relative', period: '2003–2006',
        summary: 'Wearing 根据家庭旧照制作亲属脸部的逼真 prosthetic mask，再由自己穿上父母、兄弟姐妹、祖父母的脸和服装重新拍摄。只有眼睛区域通常暴露出面具背后的艺术家。',
        actions: ['选择具体家庭旧照片作为模板', '根据亲属面部制作硅胶 / prosthetic 面具', '复制旧照中的发型、衣服和姿势', '艺术家本人戴面具进入角色', '重新拍摄为高度控制的肖像', '保留眼睛孔洞使“自己”和“亲属”同时可见'],
        sourceUrl: 'https://www.npg.org.uk/collections/search/person/mp59116/gillian-wearing', images: [],
        relations: [rel('收藏', 'National Portrait Gallery', 'family self-portrait works')]
      },
      {
        title: 'Me at Three Years Old', cluster: 'self portrait / age mask / impossible re-enactment', period: '2005',
        summary: '她把“重演家庭旧照”的方法推到自己身上：成年艺术家通过面具把自己做成三岁时的样子。作品不是数码年龄变化，而是成年身体真实穿戴童年脸。',
        actions: ['选择自己的童年照片', '依据童年面部制作 mask', '成年身体佩戴儿童面具', '控制发型 / 服装 / 背景接近家庭照语法', '正面摄影并保留面具的不自然感'],
        sourceUrl: 'https://www.npg.org.uk/collections/search/portrait-list.php?sText=gillian+wearing&search=sp', images: [],
        relations: [rel('收藏', 'National Portrait Gallery', 'Me at Three Years Old, 2005')]
      },
      {
        title: 'Spiritual Family / Me as…', cluster: 'artist genealogy / costume / prosthetic self-portrait', period: '2008–2013',
        summary: '14 张 Spiritual Family 自画像中，她通过服装、假发、化妆与 prosthetics 模仿对自己实践有影响的艺术家，包括 Diane Arbus、Robert Mapplethorpe、Andy Warhol、Claude Cahun 等。艺术史谱系被转成身体可以穿戴的“家族”。',
        actions: ['选择具有个人影响的艺术家作为 spiritual relatives', '研究既有肖像 / 自画像', '制作脸部 prosthetics / mask', '复制发型、服装、姿势和影调', '让自己的眼睛 / 身体留在他人外表内部', '将单张累积成 14 件系列'],
        sourceUrl: 'https://www.npg.org.uk/whatson/display/2026/gillian-wearing-spiritual-family', images: [],
        relations: [rel('展览', 'Gillian Wearing: Spiritual Family — National Portrait Gallery', '2026–2027')]
      },
      {
        title: 'Mask as a continuing method', cluster: 'mask sculpture / identity / public-private split', period: '2000s–现在',
        summary: '面具从摄影里的道具进一步独立成雕塑 / 展览对象。Wearing 反复利用 mask 的双重功能：既隐藏身份，也制造另一种更强的可见身份，使“真实脸”这个概念本身失效。',
        actions: ['根据真实人物 / 自己设计面具', '将 mask 作为拍摄工具使用', '保留缝隙、眼孔等身份泄漏位置', '部分面具脱离摄影成为独立物件', '在展览中让照片与 mask / sculpture 互相解释'],
        sourceUrl: 'https://www.npg.org.uk/collections/search/portrait-list.php?OConly=true&displayStyle=thumb&sText=Gillian+Wearing+&search=sp', images: [], relations: []
      }
    ],
    awards: ['Turner Prize 1997'],
    exhibitions: ['Serpentine Gallery retrospective 2000', 'Behind the Mask, Another Mask — National Portrait Gallery 2017', 'Spiritual Family — National Portrait Gallery 2026–2027'],
    sources: [
      { label: 'National Portrait Gallery — Gillian Wearing', url: 'https://www.npg.org.uk/collections/search/person/mp59116/gillian-wearing' },
      { label: 'NPG — Spiritual Family', url: 'https://www.npg.org.uk/whatson/display/2026/gillian-wearing-spiritual-family' },
      { label: 'Tate — Gillian Wearing', url: 'https://www.tate.org.uk/art/artists/gillian-wearing-2677' }
    ]
  },

  'latoya-ruby-frazier': {
    artistId: 'latoya-ruby-frazier',
    projectCoverage: '6 个家庭 / 环境正义 / 劳动 / 社群纪念碑项目已建立深档案 · 2001–2024',
    imageCoverage: '0 / 6 节点已有代表图像',
    note: 'Frazier 的作品不是“社会议题加私人照片”。她把长期合作、口述、文本、家庭成员的共同拍摄以及展览支撑结构都当成作品：谁拍、谁说话、照片靠什么站起来，都与劳动、医疗、污染和公共政策有关。',
    projects: [
      {
        title: 'The Notion of Family', cluster: 'Braddock / three generations / collaborative family archive', period: '2001–2014',
        summary: '跨十三年拍摄自己、母亲 Cynthia、祖母 Grandma Ruby 与宾州 Braddock。家庭健康、身体和住宅变化与钢铁工业衰退、污染、医疗基础设施消失被放在同一时间线上。',
        actions: ['长期在 Braddock 家庭环境中拍摄', '让自己、母亲和祖母都进入图像', '部分照片由母亲 / 家人共同参与拍摄', '记录身体、医院、街道、工业遗迹和家庭内部', '使用黑白 gelatin silver print 建立连续档案', '把私人家庭史与公共工业 / 医疗史交叉编辑', '加入 moving image 和 text 扩展照片无法说明的内容'],
        sourceUrl: 'https://www.moma.org/artists/38832-latoya-ruby-frazier', images: [], relations: []
      },
      {
        title: 'Flint Is Family in Three Acts', cluster: 'water crisis / collaboration / migration / infrastructure', period: '2016–2020',
        summary: '与 Shea Cobb、Amber Hasan 等 Flint 居民合作记录水危机。三个 act 从城市中的家庭日常，到 Cobb 母女“reverse migration”前往 Mississippi，再到为 Flint 引入 atmospheric water generator，项目直接进入实际基础设施行动。',
        actions: ['与 Flint 居民建立长期合作关系', '拍摄家庭生活与水危机环境', 'Act I 以 still photographs + Shea Cobb 诗歌 voiceover 构成影片', '跟随 Cobb 母女迁往 Mississippi 并记录自给生活学习', '记录 Amber Hasan / Cobb 获取 Moses West atmospheric water generator 的行动', '在 Act III 将彩色照片和访谈装到实体支架', '用 concrete / metal 参考 water generator 材料', '把支架排成 V formation 强化集体行动'],
        sourceUrl: 'https://press.moma.org/wp-content/uploads/2024/04/LRF-SectionTexts_Final.pdf', images: [], relations: []
      },
      {
        title: 'The Last Cruze', cluster: 'GM Lordstown / labor / union / steel display system', period: '2019',
        summary: '围绕 GM Lordstown 工厂关闭采访和拍摄工人、家庭及 UAW Local 1112。最终不是普通照片墙，而是 70 张 gelatin silver prints、视频与橙色钢铁展示系统组成的装置，让汽车工业材料进入作品结构。',
        actions: ['进入 Lordstown 工人 / 工会网络', '拍摄工厂、最后一批 Chevrolet Cruze 与工人家庭', '记录人物姓名、岗位、工龄等劳动信息', '制作 gelatin silver prints', '加入文本 / 访谈与视频', '定制橙色 steel / iron sculptural display system', '让照片像生产线 / 工业框架一样在空间连续展开'],
        sourceUrl: 'https://www.moma.org/collection/works/451210', images: [],
        relations: [rel('收藏', 'MoMA', 'The Last Cruze installation')]
      },
      {
        title: 'More Than Conquerors: A Monument for Community Health Workers of Baltimore, Maryland', cluster: 'community health / portrait + text / IV poles / monument', period: '2021–2022',
        summary: '与 Baltimore 社区健康工作者合作，把通常被制度忽略的照护劳动转成纪念碑。18 个 image/text panels 被安装到 9 根 IV poles 上，医疗设备直接成为肖像的支撑系统。',
        actions: ['与社区健康工作者建立合作', '制作人物肖像和第一人称 / 访谈文本', '将图像与文字配成双面 / 成组 panel', '使用 9 根 IV poles 作为支撑', '把 18 个 inkjet panels 排成可穿行队列', '让医院器械从功能物变成公共纪念碑结构'],
        sourceUrl: 'https://press.moma.org/wp-content/uploads/2024/04/MoMA_LRF_Final-Checklist.pdf', images: [],
        relations: [rel('展览', 'Monuments of Solidarity — MoMA', '2024')]
      },
      {
        title: 'Monuments of Solidarity', cluster: 'retrospective / installation / community authorship', period: '2024',
        summary: 'MoMA 回顾展不是简单按年代挂照片，而把不同项目各自的展示结构重新呈现：家庭系列、Flint 的供水支架、Lordstown 钢结构、Baltimore IV poles 都保留各自的物质逻辑。',
        actions: ['跨二十余年重新编辑多个长期项目', '不统一所有作品的展陈语言', '保留每个项目对应的工业 / 医疗 /基础设施材料', '让照片、文本、视频和雕塑支撑系统共同构成 retrospective'],
        sourceUrl: 'https://www.moma.org/calendar/exhibitions/5600', images: [],
        relations: [rel('展览', 'LaToya Ruby Frazier: Monuments of Solidarity — MoMA', '2024')]
      },
      {
        title: 'Solidarity as production method', cluster: 'meta-method / collaboration / oral history / public infrastructure', period: '2001–现在',
        summary: '跨项目看，Frazier 的稳定方法是让被摄社群参与叙事：家庭成员共同拍摄、居民提供文本与口述、工人的岗位史进入标题，最后展示结构又从当地劳动 / 医疗材料中生长出来。',
        actions: ['长期而不是短期采访', '记录人物完整姓名与劳动 / 家庭关系', '将被摄者文字直接纳入作品', '根据项目现场寻找展示材料', '把摄影展从“墙上图像”扩展为公共叙事基础设施'],
        sourceUrl: 'https://www.moma.org/artists/38832-latoya-ruby-frazier', images: [], relations: []
      }
    ],
    awards: ['MacArthur Fellow 2015'],
    exhibitions: ['The Notion of Family — multiple venues', 'The Last Cruze 2019', 'Monuments of Solidarity — MoMA 2024'],
    sources: [
      { label: 'MoMA — LaToya Ruby Frazier', url: 'https://www.moma.org/artists/38832-latoya-ruby-frazier' },
      { label: 'MoMA — Flint Is Family section text', url: 'https://press.moma.org/wp-content/uploads/2024/04/LRF-SectionTexts_Final.pdf' },
      { label: 'MoMA — retrospective checklist', url: 'https://press.moma.org/wp-content/uploads/2024/04/MoMA_LRF_Final-Checklist.pdf' }
    ]
  },

  'richard-mosse': {
    artistId: 'richard-mosse',
    projectCoverage: '6 个军事成像 / 热成像 / 生态 sensing 项目已建立深档案 · 2010–2022',
    imageCoverage: '0 / 6 节点已有代表图像',
    note: 'Mosse 的颜色和“热成像感”都不是后期滤镜风格。每一阶段都先找到一种原本服务于军事侦察、边境监控、卫星 / 农业 sensing 的成像技术，再让技术自身的可见 / 不可见范围决定作品形式。',
    projects: [
      {
        title: 'Infra', cluster: 'Kodak Aerochrome / Congo / military reconnaissance', period: '2010–2015',
        summary: '在刚果东部使用停产的 Kodak Aerochrome 彩色红外侦察胶片。该材料原本用于军事航空侦察，可记录人眼不可见的近红外并把绿色植被转成强烈粉、红、紫色。',
        actions: ['前往 eastern DRC 长期拍摄', '寻找并使用 discontinued Kodak Aerochrome', '根据红外胶片特性选择滤镜 / 曝光', '拍摄叛军、居民、道路和植被', '不把 false color 校正回自然色', '以大尺幅 C-print 输出'],
        sourceUrl: 'https://store.aperture.org/collections/books-view-all/products/infra', images: [], relations: []
      },
      {
        title: 'The Enclave', cluster: '16mm Aerochrome / six-screen video / sound', period: '2012–2013',
        summary: '与 cinematographer Trevor Tweeten、composer Ben Frost 返回刚果，把 Aerochrome 从静态大画幅摄影推进到 16mm motion picture。最终形成六屏沉浸式影像，现场录音被 Frost 重新组成六声道声音。',
        actions: ['与叛军 / 冲突区域长期共处拍摄', '使用 16mm colour infrared Aerochrome', '将材料适配到 motion-picture workflow', '拍摄日常、战斗、死亡与景观', 'Ben Frost 采集 / 处理 field recordings', '制作六个 custom screens', '把影像与六声道声音分布在黑暗空间'],
        sourceUrl: 'https://www.ngv.vic.gov.au/exhibition/richard-mosse/', images: [],
        relations: [rel('展览', 'Irish Pavilion — 55th Venice Biennale', '2013')]
      },
      {
        title: 'Incoming', cluster: 'military thermal camera / migration / three-channel video', period: '2014–2017',
        summary: 'Mosse 改用原本连接高级武器 / 边境系统的 military-grade thermographic camera。设备可在约 30km 距离检测人体，只读取相对温度，因此肤色和常规可见光信息被抹除，人物成为热痕迹。',
        actions: ['获取受出口管制的 long-range thermal imaging technology', '在 Aegean、Libya、Syria、Sahara、Persian Gulf 等迁移路线拍摄', '利用超长焦从远距离记录人体热信号', '将 60fps 素材减速到 24fps', '使用 close-up / macro / telescope-like 影像语法', '与 Ben Frost / Trevor Tweeten 共同编辑', '输出为三块约 8m 宽屏幕的 immersive installation'],
        sourceUrl: 'https://www.barbican.org.uk/whats-on/2017/event/richard-mosse-incoming', images: [],
        relations: [rel('展览', 'Barbican Curve, London', '2017')]
      },
      {
        title: 'Heat Maps', cluster: 'thermal panorama / robotic motion control / refugee camps', period: '2016–2017',
        summary: '与 Incoming 使用同一热成像设备，但改成极高细节静态全景：相机装到 robotic motion-control tripod 上扫描 refugee camp，一张作品由近千个小画面拼成，每个小画面都有独立 vanishing point。',
        actions: ['把 thermal camera 安装到 robotic motion-control tripod', '从较高视点系统扫描 camp', '按网格拍摄近千个 frame', '将所有 frame 无缝拼接成巨大 panorama', '保留 fence、security gate、speaker、tent、food queue 等基础设施细节', '大尺幅输出以允许观众缓慢读取'],
        sourceUrl: 'https://www.barbican.org.uk/read-watch-listen/barbican-meets-richard-mosse', images: [], relations: []
      },
      {
        title: 'Broken Spectre', cluster: 'Amazon / multispectral / ultraviolet / heat-sensitive film / GIS', period: '2018–2022',
        summary: '转向 Amazon 后不再依赖单一特殊相机，而是故意混用不同工业 sensing systems，让每种尺度看到不同生态破坏：multispectral aerial camera 看大面积森林变化，UV 看植物微观结构，heat-sensitive analogue film 记录热与燃烧，GIS 处理区域尺度。',
        actions: ['多年在 Amazon Basin 不同破坏前线拍摄', '使用 multispectral aerial camera 模拟 satellite sensing', '制作 ultraviolet botanical studies', '使用 heat-sensitive analogue film', '让高温 / 烟 / 环境直接损伤胶片材料', '使用 custom GIS imaging 形成 aerial maps', '在影片中跨卫星尺度、人物尺度与微观植物尺度切换', '与 Ben Frost 制作 multi-channel sound field'],
        sourceUrl: 'https://www.mmoca.org/events/brokenspectre/', images: [], relations: []
      },
      {
        title: 'Imaging technology as subject', cluster: 'meta-method / counter-use / machine vision', period: '2010–现在',
        summary: '跨 Infra、Incoming、Broken Spectre，Mosse 的稳定动作是“反向使用”一种技术：先理解设备被设计用来识别什么，再把这套识别逻辑带进艺术空间。因此作品同时在拍事件，也在拍摄观看事件的机器。',
        actions: ['调查军事 / 安防 / 科学 imaging technology 原用途', '学习设备的有效光谱和识别极限', '接受设备自身的 false color / monochrome / noise', '避免用后期把技术特征修掉', '将设备政治史写进展览与出版语境'],
        sourceUrl: 'https://www.richardmosse.com/', images: [], relations: []
      }
    ],
    awards: ['Deutsche Börse Photography Prize 2014', 'Prix Pictet 2017'],
    exhibitions: ['The Enclave — Venice Biennale 2013', 'Incoming — Barbican 2017', 'Broken Spectre — international commissions 2022–'],
    sources: [
      { label: 'Aperture — Infra', url: 'https://store.aperture.org/collections/books-view-all/products/infra' },
      { label: 'NGV — The Enclave', url: 'https://www.ngv.vic.gov.au/exhibition/richard-mosse/' },
      { label: 'Barbican — Incoming', url: 'https://www.barbican.org.uk/whats-on/2017/event/richard-mosse-incoming' },
      { label: 'MMoCA — Broken Spectre', url: 'https://www.mmoca.org/events/brokenspectre/' }
    ]
  },

  'pixy-liao': {
    artistId: 'pixy-liao',
    projectCoverage: '7 个伴侣表演 / 书 / 线上交互 / 博物馆展节点已建立深档案 · 2007–2026',
    imageCoverage: '0 / 7 节点已有代表图像',
    note: 'Liao 的核心不是“女强男弱”这个一句话设定，而是把一段真实关系变成持续近二十年的 collaborative performance：姿势、裸体 / 穿衣、谁托举谁、谁按快门、家具和食物怎样接触身体，都是每张照片的具体关系实验。',
    projects: [
      {
        title: 'Experimental Relationship — founding rule', cluster: 'couple / staged portrait / power reversal', period: '2007–现在',
        summary: '项目源于 Liao 与比自己小五岁的日本伴侣 Moro 的关系。她把自己在中国成长时默认的“男性更年长 / 更成熟 / 保护女性”模型反过来测试，并明确把项目称为 experiment。',
        actions: ['艺术家与真实伴侣共同出演', '每张图先设定一种关系 / 身体规则', '经常让 Liao 处于主动 / 观察 / 支配位置', '让 Moro 承担被观看、裸体或身体支撑角色', '使用家居、床、桌、食物、衣服作为权力道具', '由 Liao 控制 camera / shutter 和最终图像', '长期重复实验并让真实关系变化反馈进新照片'],
        sourceUrl: 'https://www.pixyliao.com/experimental-relationship', images: [], relations: []
      },
      {
        title: 'Body as furniture / prop', cluster: 'staging / domestic object / physical dependency', period: '2007–现在',
        summary: '系列里身体经常真的承担家具 / 支架功能：抱、托、压、跨坐、悬挂、把对方当桌面或器具。幽默感来自姿势，但姿势同时把抽象的 relationship power 变成可以测量的重量和位置。',
        actions: ['先选择真实家居环境 / 简单背景', '将两个身体设计成互相支撑或不平衡结构', '加入廉价日常物件而非专业布景', '控制裸体与穿衣的不对称', '固定相机记录动作完成的瞬间', '让身体接触关系成为主要构图线'],
        sourceUrl: 'https://www.pixyliao.com/experimentalrelationshipcomplete/', images: [], relations: []
      },
      {
        title: 'For Your Eyes Only', cluster: 'visual love letter / close-up / mundane object / erotic play', period: '2012–现在',
        summary: '作为 Experimental Relationship 的延伸，这组更接近视觉情书：大量身体局部、普通东西和带性暗示的游戏，而不是完整双人 tableau。私人观看感被保留，但作品同时进入公共展览。',
        actions: ['从共同生活中寻找身体局部和小物件', '使用 close-up 弱化完整身份', '把普通物件重新组合出性 / 身体联想', '保留日记和即时性', '与 Experimental Relationship 图像交叉编辑'],
        sourceUrl: 'https://www.pixyliao.com/fyeo', images: [], relations: []
      },
      {
        title: 'Experimental Relationship Vol.1 2007–2017', cluster: 'photobook / self-design / ten-year edit', period: '2018',
        summary: '十年之后 Liao 第一次把长期项目压缩成完整书籍：160 页、77 张照片，由她自己设计，并故意使用强烈黄色，使中文“黄书”关于色情书的双关进入出版物外观。',
        actions: ['回看十年项目档案', '选出 77 张图像', '加入少量 For Your Eyes Only 作品', '自行设计 160 页 sequence', '用统一黄色建立书的 material identity', '通过 Jiazazhi Press 出版'],
        sourceUrl: 'https://www.pixyliao.com/bookep1', images: [],
        relations: [rel('出版', 'Experimental Relationship Vol.1 2007–2017', 'Jiazazhi Press 2018'), rel('奖项', 'Paris Photo–Aperture PhotoBook Awards', 'Juror’s Special Mention 2018')]
      },
      {
        title: 'Choose Your Own Adventure', cluster: 'online exhibition / branching narrative / viewer interaction', period: '2020',
        summary: '疫情期间她没有简单把实体展览图搬上网页，而是把旧作品重新做成 choose-your-own-adventure：观众每次点击选项会进入不同路径、死路或结局，浏览行为变成新的 sequence。',
        actions: ['从两个长期系列中重新抽取旧图像', '为图像写问题和多个选择', '建立 branching web narrative', '让观众点击决定下一张图', '接受不同观看者得到不同 sequence', '同时配合城市 billboard 与线上项目'],
        sourceUrl: 'https://www.pixyliao.com/news/2020/7/17/solo-show-choose-your-own-adventure-at-scope-hannover-online', images: [], relations: []
      },
      {
        title: 'Your Gaze Belongs to Me', cluster: 'museum solo / thematic edit / photo + video + sculpture', period: '2021',
        summary: 'Fotografiska 的首个博物馆个展不是只挂 Experimental Relationship：超过 50 件作品来自两个系列，并加入 video 和 sculpture，使伴侣关系从平面肖像扩展到物件与时间媒介。',
        actions: ['从两个长期系列跨年份选图', '按主题而非纯年代分组', '加入视频和雕塑作品', '根据博物馆空间重排尺度和密度', '让 relationship project 形成多媒介整体'],
        sourceUrl: 'https://www.pixyliao.com/news/2021/4/2/solo-show-your-gaze-belongs-to-me-at-fotografiska-ny', images: [],
        relations: [rel('展览', 'Your Gaze Belongs to Me — Fotografiska New York', '2021')]
      },
      {
        title: 'Relationship Material / Always Keep an Eye on the One You Love', cluster: 'retrospective evolution / bodies as material', period: '2025–2026',
        summary: '近年展览更明确把近二十年的 staged self-portraits 作为“relationship material”观看：作品并非事实纪录，两个人的身体既是 subject，也是可以被摆放、支撑和测试的材料。',
        actions: ['跨近二十年重新编辑 staged photographs', '把真实关系变化和图像形式变化并置', '保留照片明显的编排性而非伪装成纪实', '加入不同阶段视频 / 物件作为关系证据'],
        sourceUrl: 'https://www.pixyliao.com/news/2026/4/25/solo-show-always-keep-an-eye-on-the-one-you-love-at-floritflorit-palma-spain', images: [],
        relations: [rel('展览', 'Relationship Material — Art Institute of Chicago', '2025'), rel('展览', 'Always Keep an Eye on the One You Love — Florit/Florit', '2026')]
      }
    ],
    awards: ['Jimei x Arles — Madame Figaro Women Photographers Award 2018', 'Paris Photo–Aperture PhotoBook Awards Special Mention 2018'],
    exhibitions: ['Rencontres d’Arles 2019', 'Centre A 2020', 'Fotografiska New York 2021', 'Art Institute of Chicago 2025', 'Florit/Florit 2026'],
    sources: [
      { label: 'Pixy Liao — Experimental Relationship', url: 'https://www.pixyliao.com/experimental-relationship' },
      { label: 'For Your Eyes Only', url: 'https://www.pixyliao.com/fyeo' },
      { label: 'Experimental Relationship book', url: 'https://www.pixyliao.com/bookep1' },
      { label: 'Fotografiska solo', url: 'https://www.pixyliao.com/news/2021/4/2/solo-show-your-gaze-belongs-to-me-at-fotografiska-ny' }
    ]
  },

  'viviane-sassen': {
    artistId: 'viviane-sassen',
    projectCoverage: '8 个身体 / 阴影 / 色彩 / 时尚 / 混合媒介节点已建立深档案 · 2002–2025',
    imageCoverage: '0 / 8 节点已有代表图像',
    note: 'Sassen 的抽象感很少依赖纯后期。她经常先在拍摄现场用身体、影子、布、镜子、地面和强烈太阳光把人物切成几何，再通过裁切、翻转、手工颜料或 collage 继续处理。时尚委托与自主艺术实践共享同一套空间语法。',
    projects: [
      {
        title: 'Die Son Sien Alles', cluster: 'South Africa / sunlight / early visual grammar', period: '2002–2004',
        summary: '早期系列已经出现后来稳定的方法：强烈非洲日照、人物身体、压扁的空间、阴影与高饱和色彩共同把现实场景推向抽象，但仍保留人物与地方经验。',
        actions: ['在强太阳光下工作', '利用建筑 / 身体产生硬边阴影', '通过高低机位切断传统肖像完整性', '让局部身体与背景色块重合', '以 sequence 而非人物传记组织系列'],
        sourceUrl: 'https://www.vivianesassen.com/works/', images: [], relations: []
      },
      {
        title: 'Flamboya', cluster: 'East Africa / portrait / collaboration / obscured face', period: '2004–2008',
        summary: '在 Kenya 等东非地区拍摄。人物常转身、被影子遮脸或与环境几何重合，避免“清楚展示一个非洲人物”的民族志观看。Foam 2008 的展览使这套语言成为她自主艺术实践的重要节点。',
        actions: ['在 Kenya / Zambia / Tanzania 等地与人物合作', '寻找强日照和高反差阴影', '让人物主动转身、遮脸或进入不稳定姿势', '使用衣物与环境颜色形成大色块', '避免把面孔当作唯一身份信息', '编辑成 Flamboya 摄影书 / 展览'],
        sourceUrl: 'https://www.foam.org/press/viviane-sassen', images: [],
        relations: [rel('展览', 'Flamboya — Foam', '2008'), rel('出版', 'Flamboya', '2008')]
      },
      {
        title: 'Parasomnia', cluster: 'dream / sleep / surreal juxtaposition', period: '2007–2011',
        summary: '以梦、睡眠和不稳定现实感为组织方式。很多画面依然来自真实身体 / 地点，但通过局部、阴影、姿势和相邻图片关系产生“像梦但并非合成梦境”的状态。',
        actions: ['拍摄真实人物和环境', '优先选择无法立即解释的姿势 / 空间关系', '使用强光与暗部制造认知缺口', '跨地点把图像按梦境关联而非地理分类', '通过 photobook sequence 强化跳跃逻辑'],
        sourceUrl: 'https://www.vivianesassen.com/works/', images: [], relations: [rel('出版', 'Parasomnia', '2011')]
      },
      {
        title: 'UMBRA', cluster: 'shadow / body / abstraction / installation', period: '2014–2017',
        summary: 'UMBRA 直接把 shadow 设为主题。影子不再只是照明结果，而像第二个身体：切割人物、制造洞、覆盖脸、形成独立几何，并在展览中与彩色 / 黑白作品共同构成空间节奏。',
        actions: ['主动寻找 / 制造强烈硬边阴影', '让人体与 shadow 重叠', '通过构图让人物局部失去可识别性', '在 color 和 monochrome 之间切换', '将作品放大并在展场形成多尺寸 sequence', '出版两个 UMBRA 版本'],
        sourceUrl: 'https://www.vivianesassen.com/works/', images: [], relations: [rel('出版', 'UMBRA', '2014 / 2015')]
      },
      {
        title: 'Pikin Slee', cluster: 'Suriname / village objects / reduced palette / abstraction', period: '2014',
        summary: '前往 Suriname 的 Pikin Slee 村后，Sassen 没有只做人物肖像，而大量靠近器具、身体片段、表面和日常物件；色彩更克制，形状和材质成为主要结构。',
        actions: ['进入 Pikin Slee 村长期观察', '在人物之外拍日常物件与材料', '使用 close-up 切断功能识别', '以较低饱和 / 克制色彩强化形状', '把器具、身体和环境放在同等位置', '编辑成摄影书'],
        sourceUrl: 'https://www.vivianesassen.com/works/', images: [], relations: [rel('出版', 'Pikin Slee', '2014')]
      },
      {
        title: 'Roxane / Roxane II', cluster: 'muse collaboration / mutual portrait / shadow / imprint', period: '2012–2017',
        summary: '与长期 muse Roxane Danset 发展 mutual portrait。Roxane 不是单纯模特；Sassen 自己通过影子进入画面，甚至使用带有身体印记的纸片，二人的作者 / 被摄者边界逐渐混合。',
        actions: ['与同一人物长期合作', '让模特姿势与艺术家视觉规则共同发展', '艺术家以自身 shadow 进入照片', '加入纸片 / 身体印记等非摄影材料', '将多次合作编辑成连续 visual diary'],
        sourceUrl: 'https://www.vivianesassen.com/news/', images: [], relations: [rel('出版', 'Roxane', '2012'), rel('出版', 'Roxane II', '2017')]
      },
      {
        title: 'Of Mud and Lotus / Paint Studies', cluster: 'body / fertility / paint on photograph / mixed media', period: '2017–2021',
        summary: '她进一步直接在摄影表面加入绘画 / 手工操作。身体、植物、繁殖与性不再只通过相机编排，也通过颜料、遮盖和 collage 改变照片。',
        actions: ['先拍摄身体 / 植物 / 物件', '选择 print 作为二次加工底材', '加入 paint / pigment / collage', '遮挡或延长原照片形状', '让摄影和绘画的边界无法清楚分开'],
        sourceUrl: 'https://www.vivianesassen.com/works/', images: [],
        relations: [rel('出版', 'Of Mud and Lotus', '2017')]
      },
      {
        title: 'PHOSPHOR: Art & Fashion', cluster: 'retrospective / fashion + art / archive / mixed-media installation', period: '2024–2025',
        summary: 'Foam 大型回顾把三十多年艺术与时尚作品放在一起，超过 200 件作品，包括摄影、collage、painting、video、未公开档案和 Dior / Louis Vuitton 等 fashion commissions。商业与自主实践不再被分成两个网站，而是在同一视觉语言中比较。',
        actions: ['回看三十余年个人 / 商业档案', '选择 200+ 件作品', '把 Flamboya、Umbra、Parasomnia 等自主系列与 fashion commissions 并置', '加入 painting / collage / video', '将时尚作品放大成 monumental installation', '通过展览追踪同一身体 / 阴影 / 色彩方法如何跨语境迁移'],
        sourceUrl: 'https://www.foam.org/press/viviane-sassen', images: [],
        relations: [rel('展览', 'PHOSPHOR: Art & Fashion — Foam', '2024–2025')]
      }
    ],
    awards: ['Prix de Rome 2007'],
    exhibitions: ['Flamboya — Foam 2008', 'UMBRA 2014–2017 contexts', 'Hot Mirror retrospective contexts 2018', 'PHOSPHOR — Foam 2024–2025'],
    sources: [
      { label: 'Viviane Sassen official — works', url: 'https://www.vivianesassen.com/works/' },
      { label: 'Hot Mirror', url: 'https://www.vivianesassen.com/books/hot-mirror/' },
      { label: 'Foam — PHOSPHOR', url: 'https://www.foam.org/press/viviane-sassen' }
    ]
  }
};