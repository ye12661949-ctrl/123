import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const savageVenice = 'https://www.labiennale.org/en/art/2022/witchs-cradle/augusta-savage';
const varoVenice = 'https://www.labiennale.org/en/art/2022/witchs-cradle/remedios-varo';
const carringtonVenice = 'https://www.labiennale.org/en/art/2022/witchs-cradle/leonora-carrington';
const carringtonMilk = 'https://www.labiennale.org/en/art/2022/milk-dreams/leonora-carrington';
const finiVenice = 'https://www.labiennale.org/en/art/2022/witchs-cradle/leonor-fini';
const oppenheimVenice = 'https://www.labiennale.org/en/art/2022/witchs-cradle/meret-oppenheim';
const hochVenice = 'https://www.labiennale.org/en/art/2022/seduction-cyborg/hannah-h%C3%B6ch';

export const archiveBatch91: Record<string, ArtistArchive> = {
  'venice-augusta-savage': {
    artistId: 'venice-augusta-savage',
    projectCoverage: '1 个 monument / Black chorus / lost-work archive 核心节点已建立深档案 · 1937–1939',
    imageCoverage: '0 / 1 项目暂不使用不稳定外链图像',
    note: '当前优先把 Savage 最关键、也最能体现“作品如何因制度而消失”的 The Harp 做深。它既是 Harlem Renaissance monument，也是一个只能通过模型和照片继续存在的 lost work。',
    projects: [
      {
        title: 'Lift Every Voice and Sing (The Harp)',
        cluster: 'World’s Fair monument / chorus-as-instrument / lost plaster sculpture',
        period: '1937–1939',
        summary: '受 James Weldon Johnson 的 Lift Every Voice and Sing 启发，Savage 为 1939 New York World’s Fair 制作近五米高 plaster monument。合唱者的身体被排列成 harp strings，soundboard 变成 arm，一名穿日常裤鞋的男子跪在前方。展览结束后因无经费铸铜或储存，原作被毁。',
        actions: [
          '将 civil-rights hymn 转译成 monumental sculptural composition，而不是制作作曲者肖像',
          '把 standing singers 的 graduated heights 组织成 harp-string rhythm',
          '以 black-basalt-like finish 处理 plaster cast，制造更永久的石材感',
          '将 kneeling male figure 与 vertical chorus 分离，形成 base / instrument relation',
          '在 World’s Fair 临时制度下制作超大 plaster original，但未能获得 bronze casting / storage funding',
          '通过 surviving preparatory models 与 photographs 维持 destroyed monument 的档案生命',
        ],
        sourceUrl: savageVenice,
        images: [],
        relations: [rel('展览', 'New York World’s Fair', '1939 · original monumental plaster version'), rel('展览', 'The Witch’s Cradle — Venice Biennale 2022', 'bronze preparatory model shown in historical capsule')],
      },
    ],
    awards: [],
    exhibitions: ['New York World’s Fair — 1939', 'The Witch’s Cradle — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Augusta Savage 2022', url: savageVenice }],
  },

  'venice-remedios-varo': {
    artistId: 'venice-remedios-varo',
    projectCoverage: '3 个 alchemy / human-animal-cosmos / studio-machine 节点已建立深档案 · 1955–1959',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Varo 把 alchemy、astronomy、fairy tale、psychoanalysis 与 precise painting technique 混在一起；她的房间、机器与人物像实验装置一样运转，现实规律被轻微替换。',
    projects: [
      {
        title: 'Simpatía (La rabia del gato)',
        cluster: 'human-animal constellation / domestic-cosmic interior',
        period: '1955',
        summary: 'human 与 cat-like figure 像 celestial projections 一样被 constellation tether 连接，星点甚至穿透室内墙壁。家庭 interior 因天体关系被重新编程。',
        actions: [
          '把 recognisable domestic interior 作为 stable spatial shell',
          '将 human / animal figures 与 celestial constellation 直接连接',
          '让 star-like punctures 穿透 architecture，破坏 inside / outside distinction',
          '用 precise brushwork 保持画面可信度，使不可能事件显得像技术过程',
        ],
        sourceUrl: varoVenice,
        images: [],
        relations: [rel('展览', 'The Witch’s Cradle — Venice Biennale 2022', 'Central Pavilion')],
      },
      {
        title: 'Armonía (Autorretrato sugerente)',
        cluster: 'materialised musical stave / crystal placement / wall-beings',
        period: '1956',
        summary: '一名女性把 crystals 放到变成实体结构的 musical stave 上，studio walls 中还伸出 anthropomorphic helpers。音乐、建筑、矿物与身体被当成同一实验系统。',
        actions: [
          '把 abstract musical notation 变成 physical architectural object',
          '让 protagonist 实际操作 crystals，而非只做 symbolic pose',
          '从 peeling wall 中生成 anthropomorphic assistants，模糊 architecture / organism',
          '用 nave-like studio 建立 ritual / laboratory 的混合空间',
        ],
        sourceUrl: varoVenice,
        images: [],
        relations: [],
      },
      {
        title: 'La creación de las aves',
        cluster: 'bird-maker / instrument-machine / creation laboratory',
        period: '1959',
        summary: '在 Varo 的成熟语言中，artist-scientist-like figure 通过 instruments、光与绘画动作“制造”鸟类；创作、science 与 occult ritual 被压缩为同一 production scene。',
        actions: [
          '把 creator figure 设置在 enclosed studio / laboratory 环境中',
          '将 drawing / painting tool 与 optical / musical instrument 连接',
          '让 image-making 直接成为生成 living creature 的 mechanism',
          '使用 oil on masonite 与精细 surface 使 fantasy system 具有工程图般可信度',
        ],
        sourceUrl: varoVenice,
        images: [],
        relations: [rel('展览', 'The Witch’s Cradle — Venice Biennale 2022', 'shown until 28 Aug 2022')],
      },
    ],
    awards: [],
    exhibitions: ['The Witch’s Cradle — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Remedios Varo 2022', url: varoVenice }],
  },

  'venice-leonora-carrington': {
    artistId: 'venice-leonora-carrington',
    projectCoverage: '3 个 hybrid-portrait / child-metamorphosis / Milk of Dreams 节点已建立深档案 · 1947–1950s',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Carrington 的人物经常跨 species / plant / human / machine 状态；她的世界不是象征谜语，而是一套稳定运行的 alternate ontology。',
    projects: [
      {
        title: 'Portrait of the Late Mrs Partridge',
        cluster: 'female icon / blue bird / weather-body relation',
        period: '1947',
        summary: '长颈、electrified hair、crimson robe 的女性抚摸 large blue bird，像 medieval icon 又像 weather-controlling being。人物与自然环境之间不是背景关系，而像共享同一能量系统。',
        actions: [
          '以 portrait format 建立 frontal female presence',
          '加入 enlarged blue bird 作为 equal agent，而非 pet accessory',
          '通过 hair / storm atmosphere 让 body 与 weather visually connect',
          '借 icon-like pose 赋予 female figure ritual authority',
        ],
        sourceUrl: carringtonVenice,
        images: [],
        relations: [],
      },
      {
        title: 'Portrait of Madame Dupin',
        cluster: 'human-plant child / insectile mother / hybrid kinship',
        period: '1949',
        summary: 'female figure 抱着 root-like child，母体本身也带 insectile 特征。family portrait 被改写成跨 species kinship，而不是人类血缘图。',
        actions: [
          '将 child body 设计成 root / plant-like morphology',
          '让 mother 同时具有人体与 insect-like characteristics',
          '保留 portrait intimacy，但取消 species stability',
          '把 kinship 重新定义成 transformation / hybridity relation',
        ],
        sourceUrl: carringtonVenice,
        images: [],
        relations: [rel('展览', 'The Witch’s Cradle — Venice Biennale 2022', 'Central Pavilion')],
      },
      {
        title: 'Leche del sueño / The Milk of Dreams',
        cluster: 'bedtime stories / hand-written notebook / mutant creatures',
        period: '1950s',
        summary: 'Carrington 最初把 bedtime stories 画在 sons Gabriel / Pablo 的 bedroom walls，之后手写进 private notebook，以 broken Spanish 和 bright watercolours记录九个故事：失去头颅的儿童、gelatin 中的 vultures、carnivorous machines 等不断变形。',
        actions: [
          '先在 children bedroom walls 上发展 stories / images，而非从出版项目起步',
          '将口述 bedtime stories 手写进 private notebook',
          '故意保留 broken Spanish，使 language 本身带私人、迁移与 playful texture',
          '以 watercolour 为每个短篇制造 mutant creature / machine image',
          '让 transformation 成为儿童叙事的基本规则，而非偶发奇观',
        ],
        sourceUrl: carringtonMilk,
        images: [],
        relations: [rel('出版', 'Leche del sueño / The Milk of Dreams', 'later published from private family notebook'), rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 exhibition title taken from Carrington’s book')],
      },
    ],
    awards: [],
    exhibitions: ['The Witch’s Cradle / The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Leonora Carrington', url: carringtonVenice }, { label: 'La Biennale · The Milk of Dreams book context', url: carringtonMilk }],
  },

  'venice-leonor-fini': {
    artistId: 'venice-leonor-fini',
    projectCoverage: '2 个 gender-role reversal / female-dominance tableau 节点已建立深档案 · 1941–1942',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Fini 用 masquerade、costume 与 role reversal 主动翻转 Surrealism 中常见的 male-active / female-passive 结构。',
    projects: [
      {
        title: 'L’Alcôve',
        cluster: 'androgynous male nude / female gaze / boudoir reversal',
        period: '1941',
        summary: 'Fini 坐在床边观看 Nico Papatakis 的 androgynous nude body。男性裸体安静、弯曲、被观看，female artist 则占据主动 gaze position。',
        actions: [
          '把 boudoir / drapery 布置成高度 sensual interior',
          '将 male nude 设置为 passive reclining figure',
          '让 female figure 保持 upright / observing position',
          '通过 role reversal 拆解 power / virility / stoicism 的传统 masculine code',
        ],
        sourceUrl: finiVenice,
        images: [],
        relations: [rel('展览', 'The Witch’s Cradle — Venice Biennale 2022', 'Central Pavilion')],
      },
      {
        title: 'Femme assise sur un homme nu',
        cluster: 'female dominance / sleeping male / landscape-scale reversal',
        period: '1942',
        summary: 'Fini 穿着 bold velvet clothing 坐在 sleeping naked man 上方，并在 background landscape 中显得巨大。dominance / submission 被直接反转成 spatial hierarchy。',
        actions: [
          '使用 clothed female / nude male 的 costume contrast 强化 power reversal',
          '让 male body sleeping / horizontal，female body seated / vertical',
          '通过 scale / background landscape 让 woman 几乎变成 monumental figure',
          '把 New Woman / sphinx-like empowerment 视觉化为 composition，而非口号',
        ],
        sourceUrl: finiVenice,
        images: [],
        relations: [],
      },
    ],
    awards: [],
    exhibitions: ['The Witch’s Cradle — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Leonor Fini 2022', url: finiVenice }],
  },

  'venice-meret-oppenheim': {
    artistId: 'venice-meret-oppenheim',
    projectCoverage: '3 个 object-dislocation / food-body / human-animal metamorphosis 节点已建立深档案 · 1936–1967',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Oppenheim 的方法常常只做一个关键动作：把熟悉物件移出原语境、替换触感或重组身体部位，就足以让日常物进入 unsettling symbolic state。',
    projects: [
      {
        title: 'Ma gouvernante',
        cluster: 'high heels / roast-chicken binding / domestic-sexual object',
        period: '1936',
        summary: '两只 white high-heeled shoes 被像 roast chicken 一样捆绑，倒置放在 platter 上。服饰、食物、身体与服务关系被一个极简单的 recontextualisation 瞬间串联。',
        actions: [
          '选择现成 white high-heeled shoes 作为 found object',
          '将两只鞋像 poultry 一样绑扎',
          '把 object 倒置并放到 serving platter 上',
          '不额外解释 narrative，让 food / erotic / domestic service associations 自行冲突',
        ],
        sourceUrl: oppenheimVenice,
        images: [],
        relations: [],
      },
      {
        title: 'Déjeuner en fourrure',
        cluster: 'fur-covered cup / touch-disgust / domestic-object estrangement',
        period: '1936',
        summary: 'teacup / saucer / spoon 被 fur 覆盖后仍保留器皿形状，却在触觉和使用层面彻底失效。熟悉 domestic object 因 material substitution 变成无法入口的 bodily object。',
        actions: [
          '保留 teacup set 的完整 recognizable silhouette',
          '以 fur 全面替换原本 hard / washable surface 的触觉预期',
          '让 use-function 与 sensory response 发生冲突',
          '以极少 intervention 产生强烈 symbolic / erotic / abject effect',
        ],
        sourceUrl: oppenheimVenice,
        images: [],
        relations: [],
      },
      {
        title: 'Der Spiegel der Genoveva',
        cluster: 'print / woman-animal hybrid / body-part recombination',
        period: '1967',
        summary: '一张 full-lipped female face 与 long hairy leg / hoof 组合，像 woman 正在变成 cow-like animal。metamorphosis 不是完整 fantasy creature，而由错接 body parts 直接完成。',
        actions: [
          '将 recognisable female face 与 nonhuman hairy leg/hoof 拼接',
          '保留 transition 的不完整状态，而非画出稳定 mythic creature',
          '利用 material/context displacement 延续 1930s object practice',
          '让 gendered body 在 humorous / disturbing reading 之间保持开放',
        ],
        sourceUrl: oppenheimVenice,
        images: [],
        relations: [rel('展览', 'The Witch’s Cradle — Venice Biennale 2022', 'Central Pavilion')],
      },
    ],
    awards: [],
    exhibitions: ['The Witch’s Cradle — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Meret Oppenheim 2022', url: oppenheimVenice }],
  },

  'venice-hannah-hoch': {
    artistId: 'venice-hannah-hoch',
    projectCoverage: '2 个 New-Woman critique / ethnographic-photomontage 节点已建立深档案 · 1924–1930',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Höch 使用 magazine cut-outs 不是为了纯形式拼贴，而是把现代女性形象、殖民 ethnographic imagery 与媒体制造的“进步”观念拆开重组。',
    projects: [
      {
        title: 'Aus einem ethnographischen Museum',
        cluster: 'photomontage / fashion body + non-European image / colonial critique',
        period: '1924–1930',
        summary: '系列把 fashionable modern bodies 与所谓 ethnographic museum 中的 non-European forms 拼接，使 colonial cultural hierarchy 与 New Woman media imagery 同时变得不稳定。',
        actions: [
          '从 illustrated magazines 剪取 contemporary fashion / body fragments',
          '加入 ethnographic reproductions / non-European sculptural imagery',
          '通过 scale mismatch 与 head/body replacement 破坏原图权威',
          '把 colonial museum gaze 与 mass-media gender gaze 放进同一 montage logic',
        ],
        sourceUrl: hochVenice,
        images: [],
        relations: [rel('展览', 'Seduction of the Cyborg — Venice Biennale 2022', 'Arsenale historical capsule')],
      },
      {
        title: 'Deutsches Mädchen / Der heilige Berg',
        cluster: 'fragmented New Woman / cynical progress / body-image mismatch',
        period: '1927–1930',
        summary: 'Deutsches Mädchen 用过小眼睛与 dark fringe 覆盖年轻女性脸部，使 confident New Woman stereotype 崩坏；Der heilige Berg 则让登山者顶着 Asian sculpture heads，把“进步 / conquest”视觉变成 grotesque joke。',
        actions: [
          '从宣扬 New Woman / modern lifestyle 的 magazines 直接取材',
          '故意使用 disproportionate facial fragments 破坏 seductive ideal',
          '把 climber body 与 Asian sculptural head 强行拼接',
          '利用 photomontage 的断裂而不是绘画过渡来保留 ideological collision',
          '把 feminist modernity 与 colonial progress 都作为可被质疑的 media construction',
        ],
        sourceUrl: hochVenice,
        images: [],
        relations: [],
      },
    ],
    awards: [],
    exhibitions: ['Seduction of the Cyborg — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Hannah Höch 2022', url: hochVenice }],
  },
};
