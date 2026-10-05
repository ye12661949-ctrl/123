import type { ArtistArchive } from './archiveData';

export const archiveExtensions338: Record<string, Partial<ArtistArchive> & { projects?: ArtistArchive['projects'] }> = {
  'laia-abril': {
    projectCoverage: '深化研究型摄影的方法演变：从饮食障碍与家庭档案，推进到 A History of Misogyny 的制度暴力、医学知识与不可见疼痛。',
    imageCoverage: '优先使用艺术家官网、Foam、C/O Berlin、Aperture 与收藏机构的可追溯资料；避免用无出处图像填充。',
    note: 'Abril 的关键不只是“拍女性议题”，而是把记者式调查、档案、证词、原始摄影、现成图像、物件、声音与出版编辑组织成证据系统。她的演变也不是从摄影简单走向装置，而是逐步减少对创伤主体的直接再现：On Abortion 用人物、政治事件与档案材料让被隐藏的后果可见；On Rape 刻意把叙事重心从受害者转向法律、信念与制度；On Mass Hysteria 再把身体症状视为社会压力和知识权力留下的痕迹；Endometriosis 则进一步处理“无法被影像直接证明的疼痛”。因此她与传统社会纪实摄影的差异，在于作品的基本单位不是单张照片，而是研究、编辑、证据关系与观看伦理共同形成的叙事结构。',
    projects: [
      {
        title: 'On Mass Hysteria — research structure',
        cluster: 'A History of Misogyny / medicine / psychosomatic protest',
        period: '2016–2025',
        summary: '项目起点来自 Abril 研究尼泊尔月经禁忌时发现的一则2003年学校“集体歇斯底里”报道。她随后追踪跨历史与跨地域的 mass psychogenic illness 案例，把晕厥、震颤、哭喊、幻觉等症状与年轻女性所处的社会压力、殖民解释和医学偏见并置。项目的重要变化是：身体不再只是被拍摄对象，而成为制度无法充分解释的“症状档案”；Abril 同时引入社会学、医学史、灵性信仰、跨代创伤和女性梦境/预感，使视觉研究主动挑战单一生物医学解释。',
        actions: ['从2003年尼泊尔学校案例展开跨国案例追踪','对读医学文献、社会学与历史材料','研究mass psychogenic illness与functional neurological disorders的命名变化','把女性梦境、情绪与预感纳入叙事材料','组合摄影、文字、声音与研究档案','制作摄影书与机构展览版本'],
        sourceUrl: 'https://www.laiaabril.com/project/on-mass-hysteria/',
        images: [],
        relations: [
          { kind: '展览', label: 'Photo Elysée — On Mass Hysteria', detail: 'Lausanne, 2023; project co-production' },
          { kind: '展览', label: 'Finnish Museum of Photography', detail: 'Helsinki, 2024; project co-production' },
          { kind: '出版', label: 'On Mass Hysteria', detail: 'Dewi Lewis + Delpire &Co, 2024' },
          { kind: '展览', label: 'Le Bal', detail: 'Paris, 2025; project co-production' }
        ]
      },
      {
        title: 'Endometriosis — The Silenced Pain',
        cluster: 'Medicine / invisible pain / institutional neglect',
        period: '2026',
        summary: 'Abril 与七位患有严重子宫内膜异位症的人合作，面对一个核心视觉难题：慢性疼痛无法像伤口一样直接被摄影证明。她没有把身体处理成临床说明图，而是在暂时缓解疼痛的时刻拍摄碎片化身体，并以自己的眼泪给照片上清漆。这个材料动作把艺术家的身体也拉入作品，同时把当代医疗忽视与产科历史中的身体控制连接起来。它延续 On Mass Hysteria：真正被研究的不是“疾病长什么样”，而是谁有权决定什么疼痛算作知识。',
        actions: ['与七位endometriosis患者合作','避开把疼痛直接奇观化的临床式再现','在暂时缓解疼痛的时刻拍摄碎片化身体','以艺术家自己的眼泪为照片上清漆','把患者经验与妇产科历史、医学知识和制度忽视并置','以装置形式组织不可见疼痛与证据之间的张力'],
        sourceUrl: 'https://www.laiaabril.com/project/endometriosis/',
        images: [],
        relations: [
          { kind: '展览', label: 'Museo del Romanticismo — Endometriosis', detail: 'Madrid, 2026' },
          { kind: '展览', label: 'Annely Juda Fine Art — Endometriosis', detail: 'London, 2026' }
        ]
      },
      {
        title: 'Feminicides — collective mourning',
        cluster: 'A History of Misogyny / media ethics / mourning',
        period: '2019–2026',
        summary: '2019年受 Le Monde 委托前往留尼汪岛回应五起 femicide。Abril 刻意拒绝新闻媒体惯用的受害者社交媒体肖像，因为这种再使用可能继续对死者私人生活进行道德判断；她转而拍摄墓地鲜花与集体哀悼留下的痕迹。作品因此把“该拍什么”本身变成伦理决策：不重演暴力，不消费受害者面孔，而让生者与死者之间的关系成为图像。',
        actions: ['接受Le Monde委托并前往La Réunion调查五起femicide','分析新闻媒体使用受害者社交媒体肖像的惯例','主动拒绝重复受害者肖像','把摄影转向墓地鲜花与集体哀悼痕迹','将委托摄影重新纳入A History of Misogyny长期研究'],
        sourceUrl: 'https://www.laiaabril.com/project/feminicides/',
        images: [],
        relations: [
          { kind: '出版', label: 'Le Monde commission', detail: '2019' },
          { kind: '展览', label: 'CCCB — Rodoreda, a Forest', detail: 'Barcelona, 5 Dec 2025–25 May 2026' }
        ]
      },
      {
        title: 'On Rape — institutional method',
        cluster: 'A History of Misogyny / law / institutional violence',
        period: '2018–2026',
        summary: '第二章由西班牙 La Manada 案及其司法争议触发。Abril 没有把强奸转成受害者创伤肖像，而是组合原创与现成摄影、报告、引文、录像、物件和证词，追踪法律、宗教、战争、社会规范与司法程序如何让性暴力被正常化。C/O Berlin 将其描述为跨时代、文化实践与媒介的 assemblage；Reina Sofía 的收藏展示进一步明确这些“概念肖像”作为节点，把观看从个体受害者移向制度责任。',
        actions: ['从La Manada案件与司法文本建立研究入口','跨国调查法律、宗教、战争与社会规范','制作概念肖像而非直接重演性暴力','组合原创/现成照片、报告、引文、录像、物件与证词','把受害者中心叙事转向施害者与制度机制','通过书籍与空间装置重新编辑同一研究材料'],
        sourceUrl: 'https://www.co-berlin.org/en/program/exhibitions/laia-abril',
        images: [],
        relations: [
          { kind: '展览', label: 'Foam — On Rape', detail: 'Amsterdam, 6 Nov 2020–27 Jun 2021' },
          { kind: '展览', label: 'C/O Berlin — On Rape – And Institutional Failure', detail: '27 Jan–21 May 2024; curator Sophia Greiff' },
          { kind: '收藏', label: 'Museo Reina Sofía', detail: 'Permanent collection display, 2026; curated by Manuel Segade' }
        ]
      }
    ],
    awards: ['National Photography Award of Spain, 2023', 'Foam Paul Huf Award, 2020', 'RPS Hood Medal, 2019', 'Paris Photo–Aperture PhotoBook of the Year — On Abortion, 2018', 'Deutsche Börse Photography Foundation Prize finalist, 2019'],
    exhibitions: ['On Rape — C/O Berlin, 2024', 'On Mass Hysteria — Photo Elysée, 2023 / Finnish Museum of Photography, 2024 / Le Bal, 2025', 'Feminicides — CCCB, Barcelona, 2025–2026', 'On Rape — Museo Reina Sofía permanent collection display, 2026', 'Endometriosis — Museo del Romanticismo, Madrid / Annely Juda Fine Art, London, 2026'],
    sources: [
      { label: 'Laia Abril — long biography', url: 'https://www.laiaabril.com/about/long-bio/' },
      { label: 'Laia Abril — On Mass Hysteria', url: 'https://www.laiaabril.com/project/on-mass-hysteria/' },
      { label: 'Laia Abril — Endometriosis', url: 'https://www.laiaabril.com/project/endometriosis/' },
      { label: 'Laia Abril — Feminicides', url: 'https://www.laiaabril.com/project/feminicides/' },
      { label: 'C/O Berlin — On Rape – And Institutional Failure', url: 'https://www.co-berlin.org/en/program/exhibitions/laia-abril' },
      { label: 'Foam — Laia Abril artist profile', url: 'https://www.foam.org/artists/laia-abril' },
      { label: 'Aperture — Laia Abril on On Abortion', url: 'https://aperture.org/event/aperture-conversations-laia-abril/' }
    ]
  }
};
