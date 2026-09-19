import type { ArtistArchive, ArchiveImage, ArchiveRelation } from './archiveData';

const img = (url: string, title: string, credit: string, sourceUrl: string, sourceLabel: string): ArchiveImage => ({ url, title, credit, sourceUrl, sourceLabel });
const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

export const archiveBatch34: Record<string, ArtistArchive> = {
  'taryn-simon': {
    artistId: 'taryn-simon',
    projectCoverage: '7 个研究型摄影 / 制度项目已建立深度档案 · 2000–2016',
    imageCoverage: '1 / 7 项目已有代表图像',
    note: '按“先建立问题与进入权限 → 获取 / 拍摄证据 → 写作和分类 → 以严格展示格式组织”整理。Simon 的创作动作往往发生在按快门之前：申请许可、法律 / 历史研究、寻找对象、设计分类系统本身就是作品。',
    projects: [
      {
        title: 'The Innocents', cluster: 'wrongful conviction / legal evidence / photography and truth', period: '2000–2003',
        summary: '记录因暴力犯罪被误判、后来经 DNA 证据平反的人。Simon 不是在普通肖像棚中拍摄，而把每个人带回案件中具有矛盾意义的地点：误认地点、逮捕地点、不在场证明地点或犯罪现场，以此直接测试摄影作为“证据”的可靠性。',
        actions: ['研究具体误判案件与法律档案', '联系被平反者', '确定案件中具有关键意义的地点', '把人物重新带到这些地点', '使用大画幅 / 严格肖像方式拍摄', '将案件文字与照片共同出版 / 展示', '让摄影曾造成误认、又被用来重新讲述真相的矛盾成为主题'],
        sourceUrl: 'https://tarynsimon.com/works/innocents/', images: [], relations: []
      },
      {
        title: 'An American Index of the Hidden and Unfamiliar', cluster: 'access / hidden institutions / text + photograph', period: '2007',
        summary: '建立美国境内通常被隐藏、限制进入或公众难以接触的地点 / 对象目录，涵盖政府、科学、医疗、宗教、安全、自然与娱乐。真正的工作之一是不断向机构申请进入并记录被允许与被拒绝的边界。',
        actions: ['先确定“不可见 / 不熟悉”的制度领域', '长期调查具体地点和机构', '向政府 / 企业 / 科研机构申请拍摄许可', '进入获准区域后以克制的大画幅方式拍摄', '收集精确说明与背景材料', '每张照片与长文本配对', '把无法获得权限本身也纳入对“谁可以看”的思考'],
        sourceUrl: 'https://tarynsimon.com/works/aihu/', images: [], relations: []
      },
      {
        title: 'Contraband', cluster: 'airport / customs / taxonomy / continuous labor', period: '2010',
        summary: 'Simon 在 JFK 机场国际邮件 / 海关环境连续工作一周，对进入美国时被扣押或没收的物品建立近乎机器式的统一图像目录；项目最终包含 1,075 件物品。',
        actions: ['获得 JFK 机场相关区域进入权限', '在机场驻留一个完整工作周', '持续记录海关截获的物品', '为所有物件使用统一中性背景和照明', '不按“视觉好看”挑选，而按流通过程连续记录', '将 1,075 件物品按 taxonomy 形式编排', '出版为大型图像目录'],
        sourceUrl: 'https://tarynsimon.com/works/contraband/13/', images: [], relations: []
      },
      {
        title: 'A Living Man Declared Dead and Other Chapters I–XVIII', cluster: 'bloodline / field research / portrait grid / text / absence', period: '2008–2011',
        summary: '四年跨国研究十八条血缘线。每章严格分为三部分：左侧同一背景的血缘成员正面肖像，中间是研究文本，右侧是“footnote images”。空白位置则代表无法 / 不被允许拍摄的在世成员。',
        actions: ['四年跨国寻找具有复杂政治 / 社会故事的血缘线', '建立家族成员顺序', '使用统一背景、正面机位逐人拍摄', '对缺席成员保留空白位置而非找替代图', '撰写中央叙事 / 研究文本', '拍摄案件 / 地点 / 物件作为 footnotes', '以肖像板 + 文本板 + 注脚图的固定结构展示'],
        sourceUrl: 'https://tarynsimon.com/works/almdd/', images: [],
        relations: [rel('展览', 'Tate Modern / Neue Nationalgalerie / MoMA and others', '2011–2012')]
      },
      {
        title: 'Birds of the West Indies', cluster: 'cinema / ornithology / James Bond / taxonomy', period: '2013–2014',
        summary: '项目从 James Bond 电影中出现的鸟类与女性角色出发，并借用真实鸟类学家 James Bond 1936 年同名图鉴的分类设计。电影工业、科学 taxonomy 与虚构人物命名被折叠进一个看似客观的目录。',
        actions: ['逐部研究 James Bond 电影', '定位影片中可辨认鸟类 / 女性角色', '研究鸟类学家 James Bond 的原始图鉴', '重新拍摄 / 分类相关对象与图像', '模仿科学 field guide 的结构、版式与命名', '把虚构电影与真实 taxonomy 对照'],
        sourceUrl: 'https://tarynsimon.com/', images: [], relations: []
      },
      {
        title: 'Paperwork and the Will of Capital', cluster: 'political accords / reconstructed bouquets / still life / botanical archive', period: '2015',
        summary: '从国际协议、条约、合同签署现场的档案照片中注意到桌上的花束。Simon 重新识别、采购并制作这些花束，在与原图近似的布景中拍成静物，同时把实际植物压制保存。',
        actions: ['搜集国际政治 / 经济协议签署的档案照片', '筛选与 1944 Bretton Woods 相关国家的签署事件', '研究照片中花材种类与颜色', '重新采购并搭建花束', '按原档案照片中的背景 / 桌面色彩重建摄影棚', '拍摄大型花束静物', '将同批植物干燥、压制、缝到纸上', '把照片与植物标本一起放入混凝土 press sculpture'],
        sourceUrl: 'https://tarynsimon.com/works/pwc/', images: [],
        relations: [rel('展览', '56th Venice Biennale', '2015')]
      },
      {
        title: 'Research-access-display method', cluster: 'meta-method / permissions / taxonomy / image-text system', period: '2000s–现在',
        summary: 'Simon 的连续性来自一套研究生产法：先发现制度如何分类现实，再争取进入该制度的权限，最后使用高度克制、重复的视觉格式反过来暴露这种分类。图像和文字始终互相限制，没有哪一方被当作完整真相。',
        actions: ['提出可调查的问题', '建立文件 / 地点 / 人物清单', '处理进入许可和行政沟通', '以统一摄影规则降低风格干扰', '撰写高密度文本', '通过 taxonomy / grid / chapter 把材料组织成可比较系统', '明确保留缺席、拒绝与无法进入的信息'],
        sourceUrl: 'https://tarynsimon.com/',
        images: [img('https://tarynsimon.com/installviews/2021_louisiana/images/2021_louisiana_1.jpg', 'An American Index of the Hidden and Unfamiliar — installation', '© Taryn Simon', 'https://tarynsimon.com/', 'Taryn Simon official website')],
        relations: []
      }
    ],
    awards: [],
    exhibitions: ['A Living Man Declared Dead — Tate Modern / Neue Nationalgalerie / MoMA 2011–2012', 'Paperwork and the Will of Capital — Venice Biennale 2015'],
    sources: [
      { label: 'Taryn Simon official website', url: 'https://tarynsimon.com/' },
      { label: 'The Innocents', url: 'https://tarynsimon.com/works/innocents/' },
      { label: 'An American Index', url: 'https://tarynsimon.com/works/aihu/' },
      { label: 'A Living Man Declared Dead', url: 'https://tarynsimon.com/works/almdd/' },
      { label: 'Paperwork and the Will of Capital', url: 'https://tarynsimon.com/works/pwc/' }
    ]
  },
  'carrie-mae-weems': {
    artistId: 'carrie-mae-weems',
    projectCoverage: '7 个文本 / 自我表演 / 档案项目已建立深度档案 · 1980s–现在',
    imageCoverage: '2 / 7 项目已有代表图像',
    note: '按她如何在不同阶段改变“谁在说话”整理：家庭档案、固定厨房舞台、自我扮演、殖民 / 种族档案再摄影、历史建筑前的背影。摄影常与标题、文字、录音或装置共同完成意义。',
    projects: [
      {
        title: 'Family Pictures and Stories', cluster: 'family album / oral history / text-photo narrative', period: '1978–1984',
        summary: '早期以自己的家庭为对象，把照片、故事和口述记忆组合起来，对抗把黑人家庭简化为社会问题或统计对象的外部叙事。',
        actions: ['拍摄自己的家庭成员', '搜集家庭故事与私人历史', '用系列而非单张建立家族结构', '将照片与文字 / 口述叙事并置', '把私人档案转成社会历史的自我书写'],
        sourceUrl: 'https://www.guggenheim.org/artwork/artist/carrie-mae-weems', images: [], relations: []
      },
      {
        title: 'Kitchen Table Series', cluster: 'single set / self-performance / domestic drama / text', period: '1990',
        summary: '整组作品只围绕一张厨房桌、一盏吊灯和基本固定机位展开。Weems 自己出演主角，伴侣、孩子、朋友与物件按场景进入；有限舞台通过人物组合和文字变成关于爱情、母职、友情与自我意识的完整叙事。',
        actions: ['固定一张厨房桌与吊灯作为唯一主舞台', '锁定相对稳定机位', '艺术家本人持续出演', '按不同关系邀请人物进入', '改变烟、牌、镜子、报纸等少量道具', '让身体距离 / 目光替代大规模换景', '将照片 sequence 与独立文本共同组织'],
        sourceUrl: 'https://www.guggenheim.org/artwork/artist/carrie-mae-weems',
        images: [img('https://images.squarespace-cdn.com/content/v1/5a9044e5af209610a9b46705/2acd2fcd-93aa-45aa-94bc-dc52109d8ad5/1000-750-agamymevesa6y9ybagy3abu8azeja6apa8uhyhy3ehutysunu4upavuzymasypy5aqutuduru9y3e6a7a2u9ujyvu2y3aru6y5u31663587726.jpg', 'Kitchen Table Series', '© Carrie Mae Weems', 'https://www.guggenheim.org/artwork/artist/carrie-mae-weems', 'Guggenheim / project context')],
        relations: []
      },
      {
        title: 'Sea Islands Series', cluster: 'Gullah-Geechee / landscape / oral history / folklore', period: '1991–1992',
        summary: '进入美国南部 Sea Islands 的 Gullah-Geechee 历史与文化，通过地点、建筑、文字和声音追踪非洲离散文化如何在土地与口述传统中持续存在。',
        actions: ['实地进入 Sea Islands 社群 / 地景', '研究 Gullah-Geechee 历史与民间叙事', '拍摄建筑、墓地、景观和文化痕迹', '记录 / 使用口述传统与文字', '让地方影像与历史叙事共同形成项目'],
        sourceUrl: 'https://www.guggenheim.org/artwork/artist/carrie-mae-weems', images: [], relations: []
      },
      {
        title: 'From Here I Saw What Happened and I Cried', cluster: 'archive / rephotography / red filter / etched text', period: '1995–1996',
        summary: '使用包括 1850 年 Louis Agassiz 委托拍摄的被奴役非洲人 daguerreotypes 在内的历史图像。Weems 重新摄影、裁切、放大并染红，再在玻璃上蚀刻第二人称文本，直接改写原档案把黑人身体当“科学类型”的权力。',
        actions: ['从博物馆 / 历史档案搜集黑人身体图像', '重新摄影既有历史照片', '裁切并放大人物', '使用红色滤镜 / 红色调降低“客观黑白档案”权威感', '为图像制作玻璃覆盖层', '在玻璃上蚀刻文字', '将 30 余幅作品按历史 / 叙事 sequence 展示'],
        sourceUrl: 'https://www.moma.org/collection/works/91838',
        images: [img('https://www.moma.org/media/W1siZiIsIjE3Mjc1OSJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg', 'From Here I Saw What Happened and I Cried — related work', '© Carrie Mae Weems', 'https://www.moma.org/collection/works/91838', 'MoMA')],
        relations: [rel('收藏', 'MoMA / Guggenheim and other collections', 'series represented in major collections')]
      },
      {
        title: 'Roaming / Museums / Louisiana Project', cluster: 'self-performance / architecture / historical authority', period: '2000s',
        summary: 'Weems 常以长裙背对镜头站在古典建筑、博物馆、种植园或纪念性空间前。身体不再是家庭戏剧中的角色，而成为测量谁曾被允许进入历史 / 文化权力空间的尺度。',
        actions: ['选择具有权力 / 历史意义的建筑', '艺术家穿统一长裙进入场景', '常以背影面对建筑', '保持人物比例小于纪念性建筑', '通过重复姿势让不同制度空间可比较'],
        sourceUrl: 'https://www.guggenheim.org/artwork/artist/carrie-mae-weems', images: [], relations: []
      },
      {
        title: 'Constructing History', cluster: 'historical reenactment / students / iconic news image', period: '2008',
        summary: '与学生一起重演 20 世纪重要政治 / 社会事件的著名新闻照片，使用布景、表演和重新摄影显示我们对“历史”的视觉记忆本身已经被少数经典图片塑造。',
        actions: ['选择已成为集体记忆的历史新闻图像', '与学生研究原事件和构图', '搭建简化舞台 / 道具', '让参与者重新扮演人物', '拍摄重演结果', '把“原事件—经典照片—当代重演”三层关系放在一起'],
        sourceUrl: 'https://www.guggenheim.org/artwork/artist/carrie-mae-weems', images: [], relations: []
      },
      {
        title: 'Text + photograph as counter-voice', cluster: 'meta-method / caption / address / archival intervention', period: '1980s–现在',
        summary: 'Weems 很少把文字当照片的解释说明。文字常直接对照片中的人或观看者说话，改变原图是谁在命名谁。尤其在档案作品中，她通过第二人称、讽刺或叙事文字夺回原本由科学、媒体和制度掌握的解释权。',
        actions: ['先判断既有图像由谁生产 / 命名', '写入新的第一 / 第二人称声音', '让文本在物理上与照片并列或刻在玻璃上', '用 sequence 让文字跨越多张照片持续说话', '把观看者纳入被质问的位置'],
        sourceUrl: 'https://www.moma.org/calendar/galleries/5255', images: [], relations: []
      }
    ],
    awards: ['MacArthur Fellow 2013'],
    exhibitions: ['Carrie Mae Weems: Three Decades of Photography and Video — Guggenheim 2014', 'From Here I Saw What Happened and I Cried — MoMA 2020–2021'],
    sources: [
      { label: 'Guggenheim — Carrie Mae Weems', url: 'https://www.guggenheim.org/artwork/artist/carrie-mae-weems' },
      { label: 'MoMA — From Here I Saw What Happened', url: 'https://www.moma.org/collection/works/91838' },
      { label: 'MoMA series gallery', url: 'https://www.moma.org/calendar/galleries/5255' }
    ]
  },
  'deana-lawson': {
    artistId: 'deana-lawson',
    projectCoverage: '7 个编排肖像 / 图像档案节点已建立深度档案 · 2004–2022',
    imageCoverage: '2 / 7 项目已有代表图像',
    note: '重点拆解她“半编排、半即兴”的生产方式。人物多数并非家人，而是她在不同城市遇到的陌生人；她会先构思甚至画草图，再与被摄者共同处理房间、身体、衣服、家具和目光，让陌生人组成一个持续扩张的“神话家庭”。',
    projects: [
      {
        title: 'Staged domestic portraits', cluster: 'stranger as family / domestic interior / large-format portrait', period: '2004–现在',
        summary: 'Lawson 长期在客厅、卧室、厨房和后院中拍摄黑人主体。MoMA 强调她几乎会编排每个元素，甚至在拍摄前画出场景草图，但实际拍摄仍保留被摄者的即兴。',
        actions: ['在街头 / 社交关系中寻找陌生被摄者', '与人物建立足够的信任关系', '拍摄前构思 / 画出姿势和空间关系', '进入真实住宅或选择具体室内', '调整家具、衣服、身体距离和装饰物', '使用大 / 中画幅相机高细节拍摄', '允许人物姿态和表情在预设框架中即兴'],
        sourceUrl: 'https://www.moma.org/interactives/exhibitions/2011/newphotography/deana-lawson/', images: [],
        relations: [rel('展览', 'New Photography 2011 — MoMA', '2011')]
      },
      {
        title: 'Roxie and Raquel, New Orleans', cluster: 'double portrait / intimacy / staged-improvised method', period: '2010',
        summary: 'Lawson 对 MoMA 说明自己的过程“一半 staged、一半 improvised”。这类双人肖像中，预先设定的身体结构与真实亲密感同时存在，使照片既像家庭快照又明显比快照更精确。',
        actions: ['选择两位人物并确定亲密关系构图', '预先设想身体排列', '在真实房间中微调姿势 / 环境', '使用大尺幅设备拍摄', '保留人物自然目光和临场变化'],
        sourceUrl: 'https://www.moma.org/audio/3314',
        images: [img('https://www.moma.org/media/W1siZiIsIjM4MjE3NSJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=f82146ceb1da01b4', 'Roxie and Raquel, New Orleans, Louisiana', '© Deana Lawson', 'https://www.moma.org/collection/works/143022', 'MoMA')],
        relations: [rel('收藏', 'MoMA', 'Roxie and Raquel, 2010')]
      },
      {
        title: 'Assemblage', cluster: 'found image / family photo / wall archive / biological mass', period: '2010 / 2021 iterations',
        summary: '与大型编排肖像不同，Assemblage 把数百张 4×6 英寸亮面照片以 T-pins 密集钉墙。材料包括民族志图片、名人 / 历史人物图像和艺术家自己的家庭照，形成她所谓“biological mass”。',
        actions: ['收集公共档案 / 图书馆中的既有图像', '加入朋友和家人的快照', '混合名人、政治史、民族志与私人照片', '统一或接近普通 4×6 快照尺寸输出', '用 T-pins 直接钉墙', '从墙角 / 核心向外密集生长式编排'],
        sourceUrl: 'https://www.moma.org/explore/inside_out/2010/08/16/deana-lawson-assembled-histories/', images: [],
        relations: [rel('展览', 'Greater New York — MoMA PS1', '2010')]
      },
      {
        title: 'Diaspora fieldwork', cluster: 'Africa and diaspora / extended family / location-based portrait', period: '2010s–现在',
        summary: '她在 Brooklyn、New Orleans、Haiti、Ethiopia、Brazil、DRC 等地寻找彼此没有血缘关系的人，并让这些图像在整个 oeuvre 中成为一个跨地域“extended family”。地点差异保留在房间和物件中，但人物获得相近的正面视觉尊严。',
        actions: ['前往不同黑人离散社群', '在当地寻找陌生人 / 熟人', '进入他们真实生活空间', '根据每个地点重新组织室内环境', '以重复的高细节肖像方式建立跨地域亲缘感'],
        sourceUrl: 'https://www.moma.org/calendar/exhibitions/5452', images: [], relations: []
      },
      {
        title: 'Nation', cluster: 'portrait / image-within-image / historical layering', period: '2018',
        summary: 'Lawson 后期越来越多把照片、历史图像或物件再次放进主画面，让肖像不只是身体与房间关系，也开始携带更明显的图像史和时间层。',
        actions: ['在场景中加入照片 / 图像物件', '使被摄者与既有图像发生视觉关系', '保持人物与环境同等高细节', '让不同年代视觉信息在同一平面碰撞'],
        sourceUrl: 'https://www.moma.org/artists/38858-deana-lawson', images: [],
        relations: [rel('收藏', 'MoMA', 'Nation, 2018')]
      },
      {
        title: 'Centropy', cluster: 'photography / hologram / mirrored frame / cosmology', period: '2021',
        summary: 'Hugo Boss Prize 展览把大型摄影、hologram、镜面框和中央 torus 结构组合成空间。Guggenheim 的说明特别指出镜面框将光反射回观众，使“照片里被看见的人”和“正在观看的人”发生物理交换。',
        actions: ['选择 / 新作大型肖像', '为部分图像嵌入 hologram', '使用镜面材质制作画框', '在空间中心设置 torus 结构', '通过反光让观众与照片共享光线', '把单张肖像扩展为环境式装置'],
        sourceUrl: 'https://www.guggenheim.org/wp-content/uploads/2021/05/guggenheim-press-kit-hugo-boss-prize-2020-deana-lawson-centropy-20210506.pdf', images: [],
        relations: [rel('奖项', 'Hugo Boss Prize', 'Winner 2020'), rel('展览', 'Centropy — Guggenheim', '2021')]
      },
      {
        title: 'Extended family as editing system', cluster: 'meta-method / mythological family / self-representation', period: '2004–现在',
        summary: '她不是每个系列都从零开始。不同国家、年份和家庭环境中的人物会在展览 / 出版中相互成为“亲属”。编辑因此持续制造一套并不存在于现实血缘中的家庭谱系。',
        actions: ['长期保留跨项目肖像档案', '根据身体姿势、房间、象征物而非地点重新连接照片', '将个人肖像与 found / family images 并置', '通过展览 sequence 建立跨时间家族关系'],
        sourceUrl: 'https://www.moma.org/calendar/exhibitions/5452',
        images: [img('https://www.moma.org/d/assets/W1siZiIsIjIwMjIvMDQvMTMvM2llMXl6MnAzcl9EYW5hX0xhd3Nvbl9QUzFfMDcuanBnIl0sWyJwIiwidGh1bWIiLCIxMjAweDE4MDBcdTAwM2UiXV0/Deana-Lawson-PS1-07.jpg?sha=f040084b77906f47', 'Deana Lawson — MoMA PS1 survey installation', '© Deana Lawson / installation view', 'https://www.moma.org/calendar/exhibitions/5452', 'MoMA PS1')],
        relations: [rel('展览', 'Deana Lawson — ICA Boston / MoMA PS1 / High Museum', '2021–2023')]
      }
    ],
    awards: ['Hugo Boss Prize 2020', 'Guggenheim Fellowship 2013'],
    exhibitions: ['New Photography — MoMA 2011', 'Deana Lawson survey — ICA Boston / MoMA PS1 / High Museum 2021–2023', 'Centropy — Guggenheim 2021'],
    sources: [
      { label: 'MoMA PS1 — Deana Lawson survey', url: 'https://www.moma.org/calendar/exhibitions/5452' },
      { label: 'MoMA — New Photography 2011', url: 'https://www.moma.org/interactives/exhibitions/2011/newphotography/deana-lawson/' },
      { label: 'MoMA — Assemblage', url: 'https://www.moma.org/explore/inside_out/2010/08/16/deana-lawson-assembled-histories/' },
      { label: 'Guggenheim — Centropy press kit', url: 'https://www.guggenheim.org/wp-content/uploads/2021/05/guggenheim-press-kit-hugo-boss-prize-2020-deana-lawson-centropy-20210506.pdf' }
    ]
  },
  'zanele-muholi': {
    artistId: 'zanele-muholi',
    projectCoverage: '7 个视觉行动主义 / 肖像节点已建立深度档案 · 2004–现在',
    imageCoverage: '2 / 7 项目已有代表图像',
    note: '按“建立社群视觉档案”和“用自己身体夺回黑人身体再现权”两条主线整理。重复格式不是风格化统一，而是给予不同参与者相同的视觉位置，并让名字、地点、年份累积成历史记录。',
    projects: [
      {
        title: 'Only Half the Picture', cluster: 'visual activism / queer life / violence and intimacy', period: '2004–2006',
        summary: '早期从南非黑人 lesbian / queer 社群日常生活、亲密关系与暴力经验展开。与外部媒体只在受害事件发生时“看见”这些身体相反，Muholi 长期从内部建立生活档案。',
        actions: ['长期参与 / 进入 queer 社群', '拍摄亲密关系、日常生活与身体', '同时记录暴力留下的痕迹和日常愉悦', '以参与者姓名 / 地点维护具体身份', '让图像进入展览与行动主义传播'],
        sourceUrl: 'https://www.tate.org.uk/whats-on/tate-modern/zanele-muholi', images: [], relations: []
      },
      {
        title: 'Faces and Phases', cluster: 'community archive / repeated portrait / naming', period: '2006–现在',
        summary: '持续拍摄南非及更广泛黑人 LGBTQIA+ 社群成员。相对一致的黑白肖像规则把所有参与者放到同一视觉层级，同时由姓名、地点、年份和反复回访记录个体生命阶段。',
        actions: ['邀请 / 与社群参与者协作', '使用较一致的黑白半身 / 头肩肖像结构', '让人物直接面对镜头', '记录姓名、地点和拍摄日期', '多年后重新拍摄部分参与者', '将单张肖像不断扩展为开放式社群档案'],
        sourceUrl: 'https://autograph.org.uk/exhibitions/somnyama-ngonyama-hail-the-dark-lioness', images: [], relations: []
      },
      {
        title: 'Being', cluster: 'couple / intimacy / everyday queer life', period: '2007–',
        summary: '把镜头放在恋人、家居和日常亲密关系中，拒绝让 queer 身份只通过抗争或受害来被描述。身体姿态、拥抱和普通生活空间本身成为政治性的可见性。',
        actions: ['与真实伴侣 / 情侣合作', '在居住空间与日常环境拍摄', '减少外部戏剧化布景', '让亲密动作由参与者共同决定', '以系列展示 queer 日常生活连续性'],
        sourceUrl: 'https://www.tate.org.uk/whats-on/tate-modern/zanele-muholi', images: [], relations: []
      },
      {
        title: 'Brave Beauties', cluster: 'trans women / beauty pageants / self-fashioning', period: '2014–现在',
        summary: '围绕 trans women 与 gender-nonconforming 参与者，包括 beauty pageant 文化，关注人物主动组织自己的服装、姿势和美感，而非被摄影师“解释身份”。',
        actions: ['与 trans / gender-nonconforming 参与者长期合作', '允许人物共同决定造型与姿势', '在肖像中强化自我展示与 glamour', '持续增加新人物形成开放系列'],
        sourceUrl: 'https://www.tate.org.uk/whats-on/tate-modern/zanele-muholi', images: [], relations: []
      },
      {
        title: 'Somnyama Ngonyama: Hail the Dark Lioness', cluster: 'self-portrait / props / contrast / visual archive critique', period: '2012–现在',
        summary: 'Muholi 把自己的身体当画布，在旅途中利用手边日常物件制作人物。清洁球、橡胶手套、轮胎、安全别针、护目镜等被转成头饰 / 服装，指向家务劳动、暴力、环境与历史；后期则有意识提高皮肤黑度对比。',
        actions: ['在不同城市 / 旅途中寻找可用日常物件', '根据物件社会含义临时制作头饰 / 服装', '艺术家本人面对镜头进行自我表演', '使用黑白摄影与强正面目光', '在后期提高皮肤暗部 / 对比', '以 isiZulu 名称、地点和日期命名', '持续累积成大型自画像档案'],
        sourceUrl: 'https://autograph.org.uk/exhibitions/somnyama-ngonyama-hail-the-dark-lioness',
        images: [img('https://images.squarespace-cdn.com/content/v1/5a9044e5af209610a9b46705/1555443012080-X90CVVDLH0AIEK3Z67JV/Muholi+Muholi%2C+Parktown%2C+2016.jpg', 'Somnyama Ngonyama — self-portrait', '© Zanele Muholi', 'https://autograph.org.uk/exhibitions/somnyama-ngonyama-hail-the-dark-lioness', 'Autograph / project context')],
        relations: [rel('展览', 'Somnyama Ngonyama — Autograph', '2017')]
      },
      {
        title: 'Bayephi — Constitution Hill commission', cluster: 'self-portrait / historical site / women’s march', period: '2017',
        summary: 'Autograph 委托 Muholi 在 Johannesburg Constitution Hill 的 Old Fort Prison 制作自画像，回应 1956 Women’s March 和 apartheid pass laws。拍摄地点本身直接承担历史含义。',
        actions: ['研究 1956 Women’s March 与 pass laws', '进入 Old Fort Prison / Constitution Hill', '根据地点历史设计造型', '艺术家自我表演并拍摄系列肖像', '用拍摄地与人物命名将作品锚定具体政治历史'],
        sourceUrl: 'https://autograph.org.uk/commissions/zanele-muholi', images: [],
        relations: [rel('出版', 'Autograph commission', '2016–2017')]
      },
      {
        title: 'Visual activism as archive', cluster: 'meta-method / community / naming / self-representation', period: '2000s–现在',
        summary: 'Muholi 自称 visual activist。摄影的政治性不只来自“主题”，也来自持续出席、为人物保留姓名、重复回访和建立组织 / 媒体平台，使影像档案成为社群自己的长期可见基础设施。',
        actions: ['长期参与社群而非短期拍摄项目', '通过姓名与地点抵抗匿名化', '持续追加肖像而不宣布档案封闭', '建立 / 参与 queer visual media 平台', '把展览、出版与公共行动连接', '同时通过自画像主动控制自身再现'],
        sourceUrl: 'https://autograph.org.uk/commissions/zanele-muholi',
        images: [img('https://fadmagazine.com/wp-content/uploads/Zanele-Muholi-at-Tate-Modern-Installation-view-Photo-Mark-Westall-2-800x600.jpg', 'Zanele Muholi — installation view', '© Zanele Muholi / installation view', 'https://shop.tate.org.uk/zanele-muholi-exhibition-book/24734.html', 'Tate exhibition context')],
        relations: [rel('展览', 'Zanele Muholi — Tate Modern', '2020 / 2024')]
      }
    ],
    awards: ['Prince Claus Award', 'Carnegie Fine Prize'],
    exhibitions: ['Somnyama Ngonyama — Autograph 2017', 'Zanele Muholi — Tate Modern 2020 / 2024'],
    sources: [
      { label: 'Autograph — Somnyama Ngonyama', url: 'https://autograph.org.uk/exhibitions/somnyama-ngonyama-hail-the-dark-lioness' },
      { label: 'Autograph — Zanele Muholi commission', url: 'https://autograph.org.uk/commissions/zanele-muholi' },
      { label: 'Tate exhibition publication', url: 'https://shop.tate.org.uk/zanele-muholi-exhibition-book/24734.html' }
    ]
  }
};