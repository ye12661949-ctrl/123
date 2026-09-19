import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

export const archiveBatch38: Record<string, ArtistArchive> = {
  'tyler-mitchell': {
    artistId: 'tyler-mitchell',
    projectCoverage: '7 个展览 / 项目节点已建立深档案 · 2017–2026',
    imageCoverage: '0 / 7 项目已有代表图像',
    note: '按“人物如何被放进一个可居住的世界”整理，而不是只写色彩和时尚感。重点追踪自然光、场景建构、服装、身体姿态、布面 / 镜面输出和展览空间如何共同构成 Mitchell 的黑人主体性图像。',
    projects: [
      {
        title: 'Untitled (Topanga) / early pastoral works', cluster: 'portrait / pastoral landscape / Black leisure', period: '2017–2018',
        summary: '早期重要图像已经确立 Mitchell 后来的核心语法：年轻黑人主体被放在草地、树木、阳光和休闲场景中，不以灾难、冲突或社会问题作为观看前提。',
        actions: ['选择自然环境与日常休闲场景', '与年轻黑人被摄者共同安排动作和服装', '使用柔和自然光与高饱和但非商业硬光的色彩', '让人物处于休息、游戏、触摸和等待等非英雄化动作中', '通过 sequence 让不同人物共享同一想象空间'],
        sourceUrl: 'https://gagosian.com/news/museum-exhibitions/tyler-mitchell-wish-this-was-real-co-berlin/', images: [], relations: []
      },
      {
        title: 'I Can Make You Feel Good', cluster: 'Black utopia / portrait / film / exhibition', period: '2019',
        summary: 'Mitchell 在 Foam 的重要个展把肖像、群体场景、户外空间与影像组织成一个“Black utopia”的整体环境。作品不是表现一个既存乌托邦，而是借摄影的建构能力让自由、愉悦、亲密和安全暂时成为可见现实。',
        actions: ['从长期拍摄中选择黑人青年肖像与群体图像', '反复使用草地、水、天空、白色服装和日常游戏等视觉母题', '在人物姿态中强调放松、休息与亲密', '把静态摄影与 moving image 并置', '通过展览 sequence 建立连续的想象世界'],
        sourceUrl: 'https://gagosian.com/artists/tyler-mitchell/', images: [], relations: [rel('展览', 'Foam, Amsterdam', '2019')]
      },
      {
        title: 'I Can Make You Feel Good Pt. 2', cluster: 'museum installation / fabric / spatial sequence', period: '2020–2021',
        summary: '在 ICP 的美国首个博物馆个展中，同一图像世界被扩展为空间体验：大尺幅作品、布面和影像不再按杂志单页观看，而是让观众在不同尺度与材质之间移动。',
        actions: ['重新编辑既有与新作', '放大部分图像形成身体尺度', '使用不同支撑材料和悬挂方式', '将摄影、视频和空间路径整合', '把展览本身作为 sequence 的第二层编辑'],
        sourceUrl: 'https://gagosianshop.com/products/tyler-mitchell-i-can-make-you-feel-good-book', images: [],
        relations: [rel('展览', 'International Center of Photography, New York', '2020–2021'), rel('出版', 'I Can Make You Feel Good', 'Prestel 2020')]
      },
      {
        title: 'Chrysalis', cluster: 'staged nature / transformation / studio-location hybrid', period: '2022',
        summary: '作品在纽约州北部外景和纽约、伦敦摄影棚完成。人物被安排在湖泊、蚊帐、床、轮胎秋千、气球等带有成长与蜕变暗示的场景中，自然与人工舞台故意交叉。',
        actions: ['在外景与摄影棚之间拍摄', '预先选择湖泊、树林、床、蚊帐等场景元素', '以服装和道具强化保护 / 漂浮 / 蜕变感', '让人物保持静止、休息、悬浮等姿态', '使用 archival pigment print 输出大尺幅作品'],
        sourceUrl: 'https://gagosian.com/exhibitions/2022/tyler-mitchell-chrysalis/', images: [], relations: [rel('展览', 'Gagosian Davies Street, London', '2022')]
      },
      {
        title: 'Wish This Was Real', cluster: 'retrospective editing / fabric / mirror / social memory', period: '2024–2026',
        summary: '巡回展回看近十年实践，并把作品组织成三个主题段落。除传统摄影输出外，出现布面和镜面作品，使观看者、图像与展场现实发生更直接的叠合。',
        actions: ['跨近十年作品重新分组', '按主题而非单纯年代组织', '将 archival pigment prints 与 fabric / mirror works 并置', '利用布料的柔性与镜面的反射改变摄影平面的稳定性', '在不同博物馆根据空间重新安装'],
        sourceUrl: 'https://gagosian.com/news/museum-exhibitions/tyler-mitchell-wish-this-was-real-mep-paris/', images: [],
        relations: [rel('展览', 'C/O Berlin', '2024'), rel('展览', 'Photo Elysée', '2025'), rel('展览', 'Maison Européenne de la Photographie', '2025–2026')]
      },
      {
        title: 'Ghost Images', cluster: 'Southern Gothic / memory / apparition / material print', period: '2024–2025',
        summary: 'Mitchell 把南方成长经验与“幽灵 / 缺席 / 记忆”引入此前明亮的休闲图像语言。作品中出现海边、幻影式人物与更明显的历史回声，并使用银盐、布面与其他材料输出。',
        actions: ['从美国南方记忆和 Southern Gothic 视觉传统出发', '安排海边休闲与幽灵式人物场景', '让清晰人物与模糊 / 半透明形象并存', '使用 gelatin silver print、dye-sublimation fabric 等不同材料', '通过材料差异区分“现在”和“记忆”的视觉状态'],
        sourceUrl: 'https://gagosian.com/exhibitions/2025/tyler-mitchell-ghost-images/', images: [], relations: [rel('展览', 'Gagosian, New York', '2025')]
      },
      {
        title: 'Time for a New Sky II', cluster: 'public billboard / constructed sky / suspended body', period: '2026',
        summary: 'Mitchell 首次把作品转成大型公共 billboard。人物试图把一块绘制的天空拉到真实天空前方，让“摄影建构出来的世界”和实际城市天空在同一个视野中发生冲突。',
        actions: ['构造人物与绘制天空之间的表演动作', '拍摄“人工天空覆盖真实天空”的瞬间', '将图像放大为 High Line billboard 尺度', '利用真实城市天空作为作品持续变化的背景'],
        sourceUrl: 'https://gagosian.com/news/2026/06/29/tyler-mitchell-time-for-a-new-sky-ii-high-line-billboard-new-york/', images: [],
        relations: [rel('展览', 'High Line Art Billboard, New York', '2026'), rel('策展', 'Cecilia Alemani', 'High Line Art')]
      }
    ],
    awards: [],
    exhibitions: ['I Can Make You Feel Good — Foam 2019', 'ICP 2020–2021', 'Chrysalis — Gagosian London 2022', 'Wish This Was Real — 2024–2026 touring exhibition', 'Ghost Images — Gagosian New York 2025', 'Time for a New Sky II — High Line 2026'],
    sources: [
      { label: 'Gagosian — Tyler Mitchell', url: 'https://gagosian.com/artists/tyler-mitchell/' },
      { label: 'Chrysalis', url: 'https://gagosian.com/exhibitions/2022/tyler-mitchell-chrysalis/' },
      { label: 'Ghost Images', url: 'https://gagosian.com/exhibitions/2025/tyler-mitchell-ghost-images/' },
      { label: 'Wish This Was Real', url: 'https://gagosian.com/news/museum-exhibitions/tyler-mitchell-wish-this-was-real-mep-paris/' }
    ]
  },

  'myriam-boulos': {
    artistId: 'myriam-boulos',
    projectCoverage: '5 个长期身体 / 城市 / 政治项目节点已建立深档案 · 2014–现在',
    imageCoverage: '0 / 5 项目已有代表图像',
    note: 'Boulos 的关键不是“把私人照片和政治照片混在一起”，而是她几乎以同样近的距离拍身体、夜生活、革命和爆炸后的城市，让公共事件直接进入朋友、欲望、皮肤和日常关系。',
    projects: [
      {
        title: 'Nightshift', cluster: 'nightlife / black-and-white / intimacy / violence', period: '2014–2019',
        summary: '早期几年她主要在夜间以黑白拍摄。夜生活被理解为一种与革命相似的共同外化空间：人们把白天压抑的欲望、身体和情绪释放出来，同时也暴露在身体与情感暴力中。',
        actions: ['夜间进入街道、派对和私人空间', '使用近距离黑白摄影', '在弱光与混乱环境中保持贴近被摄者', '在亲密场景与公共街道之间快速切换', '不把夜生活整理成单纯娱乐叙事，而保留脆弱与冲突'],
        sourceUrl: 'https://store.magnumphotos.com/pages/myriam-boulos-online-exhibition', images: [], relations: []
      },
      {
        title: 'What’s Ours — revolution', cluster: '2019 uprising / protest / diaristic photography', period: '2019',
        summary: '2019 年黎巴嫩大规模抗议成为 Boulos 日记式摄影的一部分。她并不退到新闻摄影的远距离视角，而是在示威者、朋友、身体与街道内部拍摄，使革命与私人生活使用同一种视觉距离。',
        actions: ['持续进入抗议现场', '在群众内部而非外围拍摄', '快速记录身体、标语、触摸、疲惫和冲突', '让政治现场与同一时期私人生活图像并置', '不把系列分成“政治”和“私人”两个章节'],
        sourceUrl: 'https://aperture.org/events/aipad-talks-myriam-boulos-whats-ours/', images: [], relations: []
      },
      {
        title: 'What’s Ours — Beirut port explosion aftermath', cluster: 'explosion / aftermath / city-body relation', period: '2020–2021',
        summary: '2020 年贝鲁特港爆炸后，她继续拍摄城市和亲近的人。受损建筑、伤痕、愤怒、性与日常恢复被放进同一个视觉日记，使灾难不是独立新闻节点，而是持续进入身体生活。',
        actions: ['在爆炸后继续长期拍摄', '记录城市破坏与私人空间', '拍摄朋友、身体和情绪反应', '把灾难后日常与革命图像继续混编', '通过时间跨度让“aftershock”持续存在'],
        sourceUrl: 'https://aperture.org/myriam-boulos-whats-ours/', images: [], relations: []
      },
      {
        title: 'What’s Ours — book', cluster: 'photobook / sequence / ten-year edit', period: '2023',
        summary: '首本专著将约十年拍摄重新编辑成 192 页、约 150 张图像的书。书的核心不只是收录作品，而是通过相邻页面让革命、爆炸、家庭、朋友、性爱与城市互相改变意义。',
        actions: ['回看约十年的个人影像档案', '从长期材料中进行大规模筛选', '以跨年份而非纯时间顺序建立 sequence', '控制跨页、单页和图像密度', '将公共事件与私人身体持续交叉', '与设计 / 编辑团队把系列转成完整摄影书'],
        sourceUrl: 'https://store.aperture.org/products/myriam-boulos-whats-ours', images: [],
        relations: [rel('出版', 'What’s Ours', 'Aperture 2023')]
      },
      {
        title: 'Sexual Fantasies', cluster: 'women / staged desire / collective authorship', period: '2020s–',
        summary: '在港口爆炸后的环境中发展。Boulos 邀请女性描述并参与呈现自己的性幻想，让欲望不再只是摄影师观看女性身体，而是由参与者决定她们想怎样被想象、怎样被表演。',
        actions: ['邀请女性分享私人性幻想', '把参与者的欲望作为拍摄脚本来源', '与参与者共同决定场景、姿势与可见程度', '拍摄 staged / intimate situations', '将不同女性的图像与声音 / 文字经验组成共同日记', '把性幻想作为对现实暴力与羞耻结构的反向空间'],
        sourceUrl: 'https://store.magnumphotos.com/pages/myriam-boulos-online-exhibition', images: [], relations: []
      }
    ],
    awards: [],
    exhibitions: ['Magnum online exhibition — 2026'],
    sources: [
      { label: 'Magnum — Myriam Boulos online exhibition', url: 'https://store.magnumphotos.com/pages/myriam-boulos-online-exhibition' },
      { label: 'Aperture — What’s Ours', url: 'https://aperture.org/myriam-boulos-whats-ours/' },
      { label: 'Aperture PhotoBook Club', url: 'https://aperture.org/events/myriam-boulos-whats-ours/' }
    ]
  }
};