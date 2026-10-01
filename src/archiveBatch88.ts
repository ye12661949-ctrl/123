import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const sanpitakVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/pinaree-sanpitak';
const roqueVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/luiz-roque';
const owusuVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/akosua-adoma-owusu';
const katzVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/bronwyn-katz';
const smithVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/sable-elyse-smith';
const vonHeylVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/charline-von-heyl';

export const archiveBatch88: Record<string, ArtistArchive> = {
  'venice-pinaree-sanpitak': {
    artistId: 'venice-pinaree-sanpitak',
    projectCoverage: '2 个 breast-to-vessel / sacred-body 节点已建立深档案 · mid-1990s–2022',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Sanpitak 从 breastfeeding 的身体经验出发，把 breast 逐步压缩成 mound、bowl、vessel 与 stupa-like dome；个人身体由此转成同时容纳 sacred / profane、fullness / emptiness 的抽象容器。',
    projects: [
      {
        title: 'Breast / mound paintings',
        cluster: 'maternal body / breast motif / feather + leaf + silk painting',
        period: 'mid-1990s–2022',
        summary: '1990s 中期 breastfeeding 经验触发长期 breast motif。到 Venice 新作中，breast 被进一步削减成 mound / vessel-like form，并通过 acrylic、feathers、gold / silver leaf、silk 等材料把触觉、身体和 ritual surface 结合。',
        actions: [
          '从 breastfeeding 的 personal bodily experience 提取 breast silhouette，而非借用既有 feminist iconography',
          '反复简化轮廓，使 nipple / anatomy 逐步转成 mound、bowl 或 dome',
          '在 textured painting 中混合 acrylic、feather、gold leaf、silver leaf 与 silk',
          '利用 soft / reflective materials 让肉身、光与 sacred-object surface 同时可见',
          '把 breast form 与 Buddhist offering bowl / stupa 的曲面关系并置，而不把宗教形态直接复制成建筑图解',
        ],
        sourceUrl: sanpitakVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
      {
        title: 'Offering Vessels',
        cluster: 'vessel / emptiness / body-as-container',
        period: '2001–2002',
        summary: 'Offering Vessels 把 breast / bowl 语言变成更明确的容器。#8 与 #16 将 vessel 理解为 perception、experience 与 emptiness 的 repository：身体不再以 figurative anatomy 出现，而以能盛放 / 空出的空间来存在。',
        actions: [
          '以 rounded vessel / bowl silhouette 代替直接 figurative body',
          '通过 repeated vessel forms 测试 fullness / emptiness、inside / outside 的视觉关系',
          '让 domestic container、ritual offering bowl 与 female body 在同一抽象形态中重叠',
          '把单个 motif 作为长期 vocabulary 反复变化，而不是每次展览重新发明图像系统',
        ],
        sourceUrl: sanpitakVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 presentation included Offering Vessels #8 / #16')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Pinaree Sanpitak 2022', url: sanpitakVenice }],
  },

  'venice-luiz-roque': {
    artistId: 'venice-luiz-roque',
    projectCoverage: '2 个 lockdown-observation / queer-posthuman night-film 节点已建立深档案 · 2020–2022',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Roque 用很短的 cinematic vignette 处理 queer bioethics、automation、AI 与 urban ecology；电影感不是装饰，而来自 loop、score、nature-documentary distance 与 surreal staging。',
    projects: [
      {
        title: 'Urubu',
        cluster: 'silent Super8 / lockdown window / urban bird observation',
        period: '2020',
        summary: 'Covid-19 lockdown 期间，Roque 长期困在 São Paulo apartment，从窗户观看城市。Urubu 以 silent Super8 记录一只常见 urban vulture 在建筑之间飞行，并将镜头做成连续 loop，使“悬停”成为 pandemic 时间经验。',
        actions: [
          '在 government-enforced lockdown 期间从 apartment window 长期观察 São Paulo urban landscape',
          '受 nature documentary observational distance 启发，将人类社会退到画外',
          '使用 silent Super8 拍摄 common urban urubu 而非高规格数字 wildlife imagery',
          '保留 city architecture 作为 layered historical background',
          '通过 continuous loop 取消明确开头 / 结尾，使 suspended pandemic time 成为影片结构',
        ],
        sourceUrl: roqueVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Arsenale')],
      },
      {
        title: 'XXI',
        cluster: 'night film / body dispute / automated desire / human-nonhuman dialogue',
        period: '2022',
        summary: 'XXI 是 hot Latin-American summer night 中发生的短片，围绕身体争议、自动化欲望与 human / non-human figures 的对话展开。它延续 Roque 对 speculative near-future 的处理：世界看似熟悉，却被 technology 与 desire 轻微推向 posthuman。',
        actions: [
          '把故事压缩为 short cinematic vignette，而不发展 conventional feature narrative',
          '在 night setting 中利用 lighting 与 urban heat 构成 suspended atmosphere',
          '让 human / non-human figures 共享同一 narrative status，不把机器只当 prop',
          '围绕 automation、desire、body politics 建立 surreal encounter，而非说明性科幻设定',
          '以 cinematic score / rhythm 强化 utopian 与 post-apocalyptic 两义性',
        ],
        sourceUrl: roqueVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Luiz Roque 2022', url: roqueVenice }],
  },

  'venice-akosua-adoma-owusu': {
    artistId: 'venice-akosua-adoma-owusu',
    projectCoverage: '1 个 folklore / semi-autobiography / triple-consciousness 核心节点已建立深档案 · 2013',
    imageCoverage: '0 / 1 项目暂不使用不稳定外链图像',
    note: '当前先把官方资料最完整的 Kwaku Ananse 做深。Owusu 的“third cinematic space”把 folklore、found footage、oral history、Black pop culture 与 diaspora autobiography 叠在一起，用来处理 African immigrant / woman / queer subject 无法被单一身份框架容纳的问题。',
    projects: [
      {
        title: 'Kwaku Ananse',
        cluster: 'Ghanaian folklore / semi-autobiographical fiction / triple consciousness',
        period: '2013',
        summary: '短片把 mischievous folktale hero Ananse 与一个年轻女性面对疏远父亲死亡、家庭关系和 US / Ghana double life 的故事结合。folklore 不作为传统文化插曲，而成为当代 diaspora subject 处理 multiple consciousness 的工具。',
        actions: [
          '从 Ghanaian Ananse folktale 提取 trickster character 与 oral-story structure',
          '把 protagonist 的 family grief、estranged father 与 US / Ghana double life 写入 semi-autobiographical narrative',
          '在 Ghana 实景中与 actors / musicians / cinematography team 制作 staged film，而非以 ethnographic documentary 观察 folklore',
          '让 folktale、daily life、family memory 与 existential crisis 交替剪辑',
          '以 Du Bois double consciousness 为起点扩展为“triple consciousness / third cinematic space”，容纳 African immigrant、woman、queer 等多重位置',
        ],
        sourceUrl: owusuVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Central Pavilion presentation')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Akosua Adoma Owusu 2022', url: owusuVenice }],
  },

  'venice-bronwyn-katz': {
    artistId: 'venice-bronwyn-katz',
    projectCoverage: '2 个 domestic-remnant / water-snake extraction 节点已建立深档案 · ongoing–2021',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Katz 用 mattress springs、steel wool、corrugated steel、iron ore 等材料处理 bed / home / land / extraction；found material 不是贫穷美学，而保留其生产、使用、亲密与资源开采历史。',
    projects: [
      {
        title: 'Found mattress-spring works',
        cluster: 'bed / domestic intimacy / salvaged steel',
        period: 'ongoing',
        summary: 'Katz 长期使用 discarded mattress springs 和 household materials。bed 被理解为 conception、birth 与 death 都可能发生的 intimate space；拆掉 fabric 后裸露 steel spring 成为家庭身体史的结构性残骸。',
        actions: [
          '回收 discarded mattress springs，而不是采购全新 industrial grid',
          '去除或重新编排原床垫 surface，使内部 steel skeleton 成为可见主体',
          '将 springs 挂墙、铺地或悬挂，使其在 painting / topography / stalactite-like sculpture 之间转换',
          '保留 rust、wear 与 previous-use traces，让 domestic history 留在 material surface',
          '将 bed 与 conception、birth、sleep、sex、death 等 intimate lifecycle 关联，而不直接表现人物',
        ],
        sourceUrl: katzVenice,
        images: [],
        relations: [],
      },
      {
        title: 'Gõegõe',
        cluster: 'six-metre bedspring snake / pot scourers / extraction metaphor',
        period: '2021',
        summary: '六米宽 floor sculpture 由 found bedsprings 与 black pot scourers 构成，名称来自 South African 多种传统中的 mythical water snake。蛇形不是单纯神话题材，而被用来处理当代 extractive relationship with Earth / living beings。',
        actions: [
          '将大量 salvaged bedsprings 展开并拼接成 long serpentine floor structure',
          '加入 black pot scourers，使柔软 kitchen material 嵌入 steel skeleton',
          '以 Gõegõe / water-snake mythology 为 naming / conceptual anchor',
          '让 sculpture 直接横卧 floor，占据 viewer movement path，而非挂墙远观',
          '把 household waste、mineral / metal extraction 与 Indigenous / local mythic knowledge 放入同一 material system',
        ],
        sourceUrl: katzVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Central Pavilion')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Bronwyn Katz 2022', url: katzVenice }],
  },

  'venice-sable-elyse-smith': {
    artistId: 'venice-sable-elyse-smith',
    projectCoverage: '2 个 prison-language / public-neon landscape 节点已建立深档案 · ongoing–2022',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Smith 从长期探监父亲的 personal experience 出发，以 video、text、neon、sculpture 与 installation 研究 prison-industrial complex；她避免把 incarcerated body 当 spectacle，转而追踪制度语言怎样进入日常心理和家庭关系。',
    projects: [
      {
        title: 'Prison-industrial-complex project / personal archive',
        cluster: 'family visitation / conceptual text / anti-carceral practice',
        period: 'ongoing',
        summary: 'Smith 人生约三分之二时间都在探望狱中的父亲。她将 visitation、penal language、family memory 与 anti-Black institutional violence 转成 conceptual practice，而不是拍摄监狱内部来制造创伤影像。',
        actions: [
          '从 repeated prison visitation 与 family correspondence / memory 建立长期个人材料库',
          '避免依赖 incarcerated-person portrait 作为证据，转向制度话语、等待、日常规则和心理伤口',
          '在 video、text、photography、sculpture、installation 之间按材料问题选择媒介',
          '把 mass incarceration 当作深入 everyday life 的 social structure，而不是单一 criminal-justice topic',
        ],
        sourceUrl: smithVenice,
        images: [],
        relations: [],
      },
      {
        title: 'Landscape VI',
        cluster: 'large-scale neon / interior monologue / penal authority language',
        period: '2022',
        summary: '大型 neon 以 cool-white fully justified text 和 orange-green horizon line 组成。公共 signage 的权威 / advertising presence 与极私人、近 interior monologue 的文字发生冲突，使 institutional violence 的 embodied everyday effect 被放到最公开的发光媒介上。',
        actions: [
          '把 conceptual text 排成 fully justified block，借用 official / institutional typography 的秩序感',
          '使用 cool-white neon letter 制作大尺度公共 signage，而不是纸面诗歌',
          '加入 orange-green horizontal neon line，使文字同时被读成“landscape horizon”',
          '利用 neon 天生的 publicness / authority aura 与 intimate monologue 内容制造冲突',
          '把 Landscape 系列作为 ongoing penal-system research 的一个媒介节点，而非独立装饰灯牌',
        ],
        sourceUrl: smithVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Central Pavilion')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Sable Elyse Smith 2022', url: smithVenice }],
  },

  'venice-charline-von-heyl': {
    artistId: 'venice-charline-von-heyl',
    projectCoverage: '2 个 Primavera-remix / wildfire-psychic abstraction 节点已建立深档案 · 2020',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。von Heyl 不把 abstraction 与 reference 对立：mask-like face、rabbit、bird、stripe、dot、charcoal smear 都来自具体图像和 art-historical trigger，却在画面中被反复覆盖、错置和中断，拒绝稳定叙事。',
    projects: [
      {
        title: 'Primavera 2020',
        cluster: 'Botticelli remix / mask-rabbit-bird layers / painting + musical commission',
        period: '2020',
        summary: '作品与 The Primavera Project 相关，以 Zephyrus / Chloris / Primavera myth 为触发点，却把 Botticelli 的和谐自然打散成 mask-like faces、red dots、striped pattern、jumping rabbits / birds、charcoal smear 与 black acrylic washes。',
        actions: [
          '从 Botticelli Primavera 与 Zephyrus / Chloris myth 提取 transformation / desire 的结构，而非复制人物位置',
          '与 Jeffrianne Young / cellist Matt Haimovitz 的 Primavera Project musical commissions 并行工作',
          '在同一 canvas 叠加 graphic dots、stripes、cartoon animals、charcoal smears 与 flat black acrylic',
          '不断覆盖 / interruption，使每种 image language 只暂时成立',
          '让 girlhood、transformation、desire 与 ambivalence 通过图像冲突出现，而非绘制单一寓言场景',
        ],
        sourceUrl: vonHeylVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Central Pavilion')],
      },
      {
        title: 'The August Complex',
        cluster: 'Flora word association / Northern California wildfire / damaged nature',
        period: '2020',
        summary: 'The August Complex 从 Chloris 变成 Flora 的名字联想进一步连接到 2020 Northern California wildfire 中被毁的 flora / fauna。古典 spring-renewal myth 与现实生态灾难因此互相污染。',
        actions: [
          '从 Flora 这一 transformed mythological name 出发建立 word / image association',
          '把 2020 Northern California wildfire 的 flora / fauna destruction 纳入同一 painting logic',
          '拒绝绘制 documentary wildfire scene，而通过 fractured abstraction 改变原 myth 的自然和谐感',
          '使用不同 graphic / painterly registers 的冲突制造 psychic upheaval，而非统一 style',
        ],
        sourceUrl: vonHeylVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Central Pavilion')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Charline von Heyl 2022', url: vonHeylVenice }],
  },
};