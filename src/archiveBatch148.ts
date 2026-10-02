import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

export const archiveBatch148: Record<string, ArtistArchive> = {
  'venice-njideka-akunyili-crosby': {
    artistId: 'venice-njideka-akunyili-crosby',
    projectCoverage: '4 个 transfer-process / intergenerational interior / public-scale translation / diaspora portal 节点深化 · 2014–2016',
    imageCoverage: '0 / 4',
    note: '把 Njideka Akunyili Crosby 从 Venice 2019 的“diaspora domestic painting”单点扩成一条更清楚的制作逻辑：先把 family photo、Nigerian popular culture、Western painting composition 与自己的生活空间拆成可编辑图层，再通过 projection、tracing、acrylic、colored pencil、fabric collage 与 solvent transfer 压回同一张纸面。她的方法不是把 Nigerian / American identity 各自画出来，而是让两套视觉记忆在同一个 domestic interior 内彼此覆盖、冲突、留下半透明痕迹。',
    projects: [
      {
        title: 'Studio transfer protocol / layered domestic image-making',
        cluster: 'projection / tracing / solvent transfer / collage / painting',
        period: '2010s',
        summary: 'MoMA 对她的工作流程描述得非常具体：人物、家具、背景和周边空间会先被拆成不同组成部分，转到透明胶片，再投影、描摹到最终纸面；同时以矿物性溶剂把报纸、产品目录、杂志、书籍与家庭照片的复印图像转印进去。于是“绘画”本身已经是一套图像采样、编辑与重新压印的系统。',
        actions: [
          '从 family photographs、Nigerian newspapers / magazines / catalogues 与 Western art-history references 建立 source-image pool',
          '把 figures、furniture、background 与 surrounding spaces 分解成可独立调整的 composition layers',
          '将组成部分转到 transparent film，再以 projector 放大并 retrace 到 paper support',
          '在构图过程中持续修改人物尺度、房间纵深和图像之间的相对位置',
          '用 acrylic / colored pencil 建立 painterly body 与 architecture',
          '以 mineral-based solvent 把 photocopied images 转印到 paper，使图像呈现半透明、磨损和重复叠加的表面',
          '把 fabric / paper collage 继续嵌入 transfer layer，让私人记忆、政治图像与商品文化共享同一视觉平面'
        ],
        sourceUrl: 'https://www.moma.org/collection/artists/44492',
        images: [],
        relations: [rel('收藏', 'Museum of Modern Art, New York', 'artist collection / process documentation')]
      },
      {
        title: 'Mama, Mummy and Mamma / Before Now After',
        cluster: 'three generations / domestic memory / public billboard translation',
        period: '2014–2016',
        summary: '原作围绕艺术家的妹妹、母亲与祖母三代女性组织私人记忆；2015 年 Whitney 又把它扩成 95 Horatio Street 外墙上的巨大数字输出。重要的不是简单放大，而是艺术家与数字协作者重新拼接原作与另一件作品中的转印细节，使 intimate family interior 被重新设计成城市公共尺度。',
        actions: [
          '以妹妹作为 foreground sitter，并把母亲、祖母的旧照片嵌入室内背景',
          '从祖母乡村住宅的具体物件与记忆建立 table / room details',
          '借用 Vilhelm Hammershøi 式 doorway-within-doorway 结构，把 viewer 视线逐层引入室内',
          '为 Whitney billboard 版本重新扩展原构图，而不是机械放大原文件',
          '从其他 painting 中提取已有 transfer fragments，再数字拼接到新版本',
          '在 Photoshop translation 中保留原作 transfer / paint 的触觉差异',
          '把 family narrative 从私人室内转换成 High Line / street 的公共观看关系'
        ],
        sourceUrl: 'https://whitney.org/whitney-stories/njideka-akunyili-crosby',
        images: [],
        relations: [
          rel('展览', 'Whitney Museum — Outside the Box', 'Before Now After (Mama, Mummy and Mamma) · 2015–2016'),
          rel('策展', 'Jane Panetta', 'Whitney public-art presentation')
        ]
      },
      {
        title: 'Portals',
        cluster: 'invented interior / family archive / commemorative fabric / cultural layering',
        period: '2016',
        summary: 'Whitney 藏品中的大型双联作品把 self-portrait、多代 family photographs、纪念母亲竞选活动的布料、Nigerian music album imagery 与虚构室内压在一起。作品名“Portals”不仅指画中的门窗，也指不同历史、家庭和地域通过图像转印彼此进入。',
        actions: [
          '构造并不存在于现实中的 composite interior',
          '把 self-portrait 放入其中，使 artist body 成为不同文化材料的交汇点',
          '将 parents、in-laws、grandmother、wedding 等 family photographs 嵌入 framed-picture system',
          '使用纪念母亲政治活动的 portrait fabric 作为 architecture-like backdrop',
          '把 Nigerian musicians / popular-culture images 通过 transfer 延伸到墙面和地面',
          '让 patterned surface 从 decoration 变成 memory archive',
          '通过 diptych 与 doorway logic 让 viewer 在多个 pictorial spaces 之间来回移动'
        ],
        sourceUrl: 'https://whitney.org/collection/works/48677',
        images: [],
        relations: [rel('收藏', 'Whitney Museum of American Art', 'Portals · 2016')]
      },
      {
        title: 'Mother and Child',
        cluster: 'maternal lineage / mourning / pregnancy / transfer-floor archive',
        period: '2016',
        summary: '作品把艺术家本人、外祖母抱着幼姨的旧照片、母亲纪念布与家族/流行文化转印放入同一场景；制作时期又恰逢艺术家怀孕以及母亲去世之后。于是 family archive 不只是“来源素材”，而成为多代女性在不同时间同时出现在一张图像中的结构。',
        actions: [
          '让 contemporary self 与 archival grandmother-and-child photograph 面对面出现',
          '把 family photographs 与 popular-culture images 转印为 terrazzo-like floor pattern',
          '使用纪念母亲 Dora Akunyili 的 printed fabric 构成 wallpaper layer',
          '让 grief、pregnancy 与 maternal lineage 同时进入 composition，而不是分别叙述',
          '继续以 acrylic、transfer print、colored pencil、cut-and-pasted paper 与 printed fabric 建立多层表面'
        ],
        sourceUrl: 'https://www.metmuseum.org/art/collection/search/738627',
        images: [],
        relations: [rel('收藏', 'The Metropolitan Museum of Art', 'Mother and Child · 2016')]
      }
    ],
    awards: ['MacArthur Fellowship — 2017'],
    exhibitions: ['Whitney Museum — Before Now After, 2015–16', 'May You Live In Interesting Times — Venice Biennale 2019', 'Making Knowing — Whitney Museum, 2019–22'],
    sources: [
      { label: 'MoMA · Njideka Akunyili Crosby', url: 'https://www.moma.org/collection/artists/44492' },
      { label: 'Whitney · Before Now After', url: 'https://whitney.org/exhibitions/njideka-akunyili-crosby' },
      { label: 'Whitney · Portals', url: 'https://whitney.org/collection/works/48677' },
      { label: 'The Met · Mother and Child', url: 'https://www.metmuseum.org/art/collection/search/738627' }
    ]
  },

  'venice-michael-armitage': {
    artistId: 'venice-michael-armitage',
    projectCoverage: '4 个 lubugo-support / layered-news-memory / political-event / institution-building 节点深化 · 2010s–2022',
    imageCoverage: '0 / 4',
    note: '把 Michael Armitage 从 Venice 2019 的单一“narrative painting”节点扩成一条完整方法线：新闻、网络流言和私人记忆先被压进多叙事画面；Ugandan lubugo bark cloth 的洞、结、粗糙纤维再主动改变绘画构图；反复刮除和重画让 figure 与 abstraction 来回转化；随后政治暴力、curfew 等具体事件进入作品，同时他又通过 Nairobi Contemporary Art Institute 把“实践”推向东非当代艺术的基础设施建设。',
    projects: [
      {
        title: 'Lubugo painting protocol',
        cluster: 'bark cloth / holes / layered oil / scrape-repaint process',
        period: '2010s–ongoing',
        summary: 'Armitage 以 Uganda 传统 fig-tree bark 制成的 lubugo 代替 canvas。布面在敲打制作过程中自然留下孔洞、粗糙凹痕与不规则边缘；他再以多层油画反复刮除、修改、重画。支撑体因此不是中性背景，而会迫使 figure、negative space 与 abstraction 重新组织。',
        actions: [
          '选择手工 beaten fig-tree bark cloth，而不是标准工业 canvas',
          '保留 lubugo 的 holes、coarse indents 与 material scars，不先把它修平',
          '从 news media、internet gossip 与 personal recollection 建立多来源 narrative pool',
          '以 layered oil paint 逐步建立 figures / landscape / symbolic details',
          '持续 scrape、revise、repaint，让早期图层局部消失或重新暴露',
          '利用 flattened perspective 让 figuration 突然转入近似 abstraction，再回到叙事图像',
          '让 material support 与政治/文化定位同时发生作用，而不是把 lubugo 当民族装饰'
        ],
        sourceUrl: 'https://www.whitecube.com/artists/michael-armitage',
        images: [],
        relations: [rel('展览', 'White Cube', 'long-term gallery representation / exhibitions')]
      },
      {
        title: 'Projects 110: Michael Armitage',
        cluster: 'parallel cultural histories / East African modernism / modernist painting dialogue',
        period: '2019–2020',
        summary: 'MoMA 展出的八幅画明确围绕“parallel cultural histories”展开。Armitage 一方面引用欧洲 avant-garde / modernism，另一方面持续观看 Meek Gichugu、Chelenge、Jak Katarikawe 等 East African modernists，使 painting canon 在一张 lubugo surface 上出现不对称碰撞。',
        actions: [
          '把 East African contemporary visual culture 与 European art-historical composition 同时作为 reference field',
          '研究并引用 East African modernists，而不是把当地视觉经验仅作为题材',
          '将 landscape、animal、urban architecture、advertising 与 political scene 编织成多线叙事',
          '让 lush colour / romantic atmosphere 与 violence / inequality 同时存在',
          '利用 lubugo 的不规则表面打断 polished modernist picture-plane'
        ],
        sourceUrl: 'https://www.moma.org/calendar/exhibitions/5099',
        images: [],
        relations: [rel('展览', 'MoMA — Projects 110', '2019–2020 · eight paintings')]
      },
      {
        title: 'Curfew (Likoni March 27 2020)',
        cluster: 'specific political event / pandemic curfew / monumental narrative painting',
        period: '2022',
        summary: '这件巨幅作品把 2020 年 3 月 27 日 Likoni 的疫情宵禁语境压进 lubugo 绘画。与较早那种 myth-like social tableau 相比，作品标题直接锁定具体地点与日期，使 Armitage 的模糊政治寓言进一步靠近可追踪的现实事件。',
        actions: [
          '以明确地点 Likoni 与日期作为 painting title 的现实坐标',
          '把 public-order / curfew event 转译成 monument-scale composition',
          '继续使用 oil on lubugo，让政治事件与传统 material support 发生冲突',
          '让历史记录感与绘画内部的模糊、擦除、变形并存，不把作品变成新闻插图'
        ],
        sourceUrl: 'https://www.moma.org/collection/works/441077',
        images: [],
        relations: [rel('收藏', 'Museum of Modern Art, New York', 'Curfew (Likoni March 27 2020) · 2022')]
      },
      {
        title: 'Nairobi Contemporary Art Institute',
        cluster: 'artist-founded institution / East African archive / exhibition infrastructure',
        period: '2020–ongoing',
        summary: 'Armitage 创办 Nairobi Contemporary Art Institute，把个人 painting practice 延伸到 institution building。NCAI 面向 East African contemporary art 的展示、保存与发展，这让他对“parallel cultural histories”的处理不再只发生在画面内部，也进入 archive、exhibition 与长期基础设施层面。',
        actions: [
          '在 Nairobi 建立非营利 contemporary-art institution',
          '把 East African modern / contemporary practice 的展示与保存纳入长期工作',
          '从 individual studio production 扩展到 exhibition / archive / education infrastructure',
          '让此前画面中的 canon correction 转为真实制度建设'
        ],
        sourceUrl: 'https://www.whitecube.com/artists/michael-armitage',
        images: [],
        relations: [rel('展览', 'Nairobi Contemporary Art Institute', 'artist-founded non-profit institution')]
      }
    ],
    awards: ['Royal Academician — Painting, Royal Academy of Arts, 2022'],
    exhibitions: ['May You Live In Interesting Times — Venice Biennale 2019', 'Projects 110 — MoMA, 2019–20', 'Haus der Kunst, 2020', 'Royal Academy, 2021', 'Kunsthalle Basel, 2022', 'Kunsthaus Bregenz, 2023'],
    sources: [
      { label: 'MoMA · Projects 110 Michael Armitage', url: 'https://www.moma.org/calendar/exhibitions/5099' },
      { label: 'MoMA · Curfew (Likoni March 27 2020)', url: 'https://www.moma.org/collection/works/441077' },
      { label: 'White Cube · Michael Armitage', url: 'https://www.whitecube.com/artists/michael-armitage' }
    ]
  },

  'venice-gertrud-arndt': {
    artistId: 'venice-gertrud-arndt',
    projectCoverage: '4 个 textile-system / architecture-view / product-photo / mask-self-performance 节点深化 · 1923–1930',
    imageCoverage: '0 / 4',
    note: '把 Gertrud Arndt 从 Maskenselbstbildnis 单系列扩回她在 Bauhaus 内真正经历的媒介路径。她原本希望学习 architecture，却因当时的性别结构进入 weaving workshop；在那里形成对 thread sequence、材料计算与 pattern system 的高度敏感。1929–31 返回 Bauhaus 后，她把这种“有限元素重新排列”的思维转进摄影：建筑视角、物件细节和最终的 Maskenporträts 都通过 framing、surface、costume 与 serial variation 重新组织身份。',
    projects: [
      {
        title: 'Bauhaus weaving studies / Teppich Thost',
        cluster: 'weaving workshop / material calculation / serial pattern / gendered training structure',
        period: '1923–1927',
        summary: 'Arndt 到 Bauhaus 时原本希望成为建筑师，但完成 preliminary course 后进入 textile workshop。档案保存的 thread tests、用料与工时计算、weft sequence 等材料说明她的织造不是纯装饰劳动，而是高度 process-based 的 pattern engineering；1927 年的 Teppich Thost 是这一阶段的重要成果。',
        actions: [
          '在 preliminary course 后进入 weaving workshop，而非按原计划进入 architecture',
          '制作 thread tests 比较色彩、纤维与织纹关系',
          '计算 material quantity 与 labour hours，把制作流程显性化',
          '精确记录 weft sequence，使 pattern 可重复执行',
          '发展 striped textiles、wall hangings 与 hand-knotted carpet',
          '把 serial variation / surface rhythm 训练成之后摄影构图的基础能力'
        ],
        sourceUrl: 'https://www.bauhaus.de/files/Press-Release-Extensive-Purchases.pdf',
        images: [],
        relations: [rel('展览', 'Bauhaus-Archiv / Museum für Gestaltung', 'estate holdings including textiles, worksheets and photographs')]
      },
      {
        title: 'At the Masters’ Houses',
        cluster: 'architecture photography / oblique view / Bauhaus spatial observation',
        period: '1929–1930',
        summary: '返回 Dessau 后，Arndt 在 Bauhaus 的建筑环境中拍摄。与把建筑当中性文献不同，这一时期的摄影延续 New Vision 的倾斜视角、局部切割与空间实验，使 architecture 成为可以被身体化观看的构图对象。',
        actions: [
          '在 Bauhaus / Masters’ Houses 周边以建筑结构作为主要 subject',
          '采用非正面、偏斜或局部 framing 取代标准 facade documentation',
          '让 stair、window、wall plane 等 architectural elements 转为抽象 surface relations',
          '利用光影和切边强调 viewer position，而不是隐藏摄影者身体',
          '把 architecture training 的兴趣转成 camera-based spatial analysis'
        ],
        sourceUrl: 'https://www.moma.org/artists/24581-gertrud-arndt',
        images: [],
        relations: [rel('收藏', 'Museum of Modern Art, New York', 'At the Masters’ Houses · 1929–30')]
      },
      {
        title: 'Object / product photographs and portraits',
        cluster: 'detail / experimental exposure / material presence',
        period: 'late 1920s–early 1930s',
        summary: 'Bauhaus-Archiv 对其遗产材料的整理指出：除自画像之外，她还拍摄同学肖像以及 textile / product photographs，并使用 unusual perspective 与 experimental exposure。织物阶段对材质和细节的敏感因此没有消失，而是被重新编码成摄影中的 surface / texture / close framing。',
        actions: [
          '拍摄 fellow students，尝试 unconventional portrait perspective',
          '使用 experimental exposure 改变 face / body 与背景关系',
          '为 textiles / products 设计近距离物件摄影',
          '通过 detail emphasis 强化 material presence',
          '让 applied-design documentation 与 experimental photography 发生重叠'
        ],
        sourceUrl: 'https://www.bauhaus.de/files/Press-Release-Extensive-Purchases.pdf',
        images: [],
        relations: [rel('收藏', 'Bauhaus-Archiv Berlin', 'estate includes portrait, textile and product photographs')]
      },
      {
        title: 'Maskenporträts / Masked Self-Portraits',
        cluster: 'serial self-staging / costume / female role-play / conceptual portrait',
        period: '1930',
        summary: 'Bauhaus-Archiv 现存这组约 32 张 mask photographs；不同资料对完整系列计数存在差异，因此本站不再硬写“43 张”。Arndt 通过服装、发型、面纱、帽子、姿态和表情不断制造不同 persona，却始终让观看者知道这些身份由同一个身体表演，从而把女性形象处理成可拆卸、可重复编排的社会角色。',
        actions: [
          '长期只使用自己作为 model，建立 serial comparability',
          '快速更换 veil、hat、jewellery、hairstyle 与 costume',
          '以 pose / facial expression 模拟 widow、bourgeois lady 等社会类型',
          '保留简洁 studio setup，使变化集中在 persona construction 本身',
          '以 serial hanging / sequence 让差异通过比较产生，而不是依赖单张 iconic portrait',
          '把女性 self-image 从“真实自我呈现”转换为角色生产实验'
        ],
        sourceUrl: 'https://www.bauhaus.de/files/Press-Release-Extensive-Purchases.pdf',
        images: [],
        relations: [
          rel('收藏', 'Bauhaus-Archiv Berlin', 'core estate holdings'),
          rel('展览', 'Our Selves — MoMA', '2022'),
          rel('展览', 'The Witch’s Cradle — Venice Biennale', '2022 historical capsule')
        ]
      }
    ],
    awards: [],
    exhibitions: ['Bauhaus 1919–1933: Workshops for Modernity — MoMA, 2009–10', 'Our Selves — MoMA, 2022', 'The Witch’s Cradle — Venice Biennale 2022'],
    sources: [
      { label: 'Bauhaus-Archiv · Gertrud Arndt estate acquisition', url: 'https://www.bauhaus.de/files/Press-Release-Extensive-Purchases.pdf' },
      { label: 'Bauhaus Dessau · Women at the Bauhaus', url: 'https://machen.bauhaus-dessau.de/denkraum/frauen-am-bauhaus/' },
      { label: 'MoMA · Gertrud Arndt', url: 'https://www.moma.org/artists/24581-gertrud-arndt' }
    ]
  },

  'venice-ambra-castagnetti': {
    artistId: 'venice-ambra-castagnetti',
    projectCoverage: '5 个 interspecies-body / decomposition / hybrid-tech / immersive-ritual / medicalized-body 节点深化 · 2022–2026',
    imageCoverage: '0 / 5',
    note: '把 Ambra Castagnetti 从 Dependency 单点扩成 2022–2026 的连续方法变化：最初以 ceramic serpent、wearable restraint 与 operating-table imagery 测试 human / animal identity fluidity；随后 Compost G¥RLS 把身体推进 decomposition / recomposition；2025 的 Supernature 明确把 biological、digital、cinema、music 与 architecture 并置；Pánico efímero 再把 exhibition 变成 ritual / icon / metamorphosis 三幕式总环境；2026 Surgica 则把焦点压到 female body 的 medicalization、normalization 与重复性集体动作。',
    projects: [
      {
        title: 'Dependency',
        cluster: 'operating table / ceramic serpent / wearable restraint / interspecies ritual',
        period: '2022',
        summary: 'Biennale College Arte 项目以带轮、brushed-aluminium 覆面的台座制造 operating-table 联想，上面放置 ceramic serpents 与 Medusa-like head；墙面 wearable sculptures 在 performance 中被穿戴，使 BDSM restraint、scientific specimen 与古老 interspecies ritual 互相污染。',
        actions: [
          '制作 wheeled bases 并覆盖 brushed aluminium，建立 clinical / surgical surface',
          '制作 ceramic serpents 与 Medusa-like head，像 abandoned scientific specimens 一样堆置',
          '另制 wearable sculptures，使 object 能从 wall display 转成 performer-body extension',
          '通过 live activation 把 sculpture 与 bondage-like gesture 连接',
          '以 Scheper-Hughes 的 mindful body 与 Paleolithic fluidity 作为研究入口',
          '把 identity 理解为由 environmental / social / political condition 暂时形成的状态，而非固定属性'
        ],
        sourceUrl: 'https://www.labiennale.org/en/art/2022/milk-dreams/ambra-castagnetti',
        images: [],
        relations: [
          rel('奖项', 'Biennale College Arte 2021/22', '€25,000 production grant recipient'),
          rel('展览', 'The Milk of Dreams — Venice Biennale 2022', 'out of competition · Central Pavilion')
        ]
      },
      {
        title: 'COMPOST G¥RLS',
        cluster: 'decomposition / recomposed body / sculpture-painting-video-performance loop',
        period: '2023',
        summary: 'Paris 个展把新雕塑、丝/棉绘画与此前 Dependency 中的 ceramic language 重新放进 video / performance 回路。展览文本强调 living / dead body 如何被权力赋义，同时让“decomposing but flourishing bodies”处于神话、rave ruin、neo-pagan ceremony 和 online subculture 之间。',
        actions: [
          '制作一组新的 sculptural bodies，而不是把 Dependency 原样巡展',
          '把 painting on silk / cotton 与 ceramics 并置，增加柔软表面与硬质身体碎片的冲突',
          '通过 video 重新激活先前 performance 中的 body-object relation',
          '让 body parts 处于 decomposition / partial recomposition 状态',
          '把 animist rite、neo-pagan ceremony、rave debris 与 internet-subculture imagery 混合，而不固定单一历史来源'
        ],
        sourceUrl: 'https://www.newgalerie.com/exhibitions/95/pdf/text%20Compost%20Girlsenglish.pdf',
        images: [],
        relations: [rel('展览', 'New Galerie, Paris — COMPOST G¥RLS', '2023 · first solo exhibition in Paris')]
      },
      {
        title: 'Supernature',
        cluster: 'biological-digital fossil / cinema / music / architecture / speculative ecology',
        period: '2025',
        summary: 'Francesca Minini 的项目把 sculpture 扩展到 music、cinema、architecture 与新技术；入口作品 Fusion: Gemini Sun, Gemini Rising 先以两个位于脚手架式 Innocenti tubes 台座上的 figures 出现，之后它们又在 film 中以“living fossils”身份返回，使同一个形体跨 sculpture / moving image / digital-biological memory 迁移。',
        actions: [
          '用 Innocenti tubes / scaffolding logic 建立 provisional architecture',
          '把 paired figures 处理成既像拥抱、舞蹈又像 fusion 的不稳定身体',
          '让同一 sculptural characters 在 film 中再次出现，建立 cross-media recurrence',
          '把 biological / digital、science / spirituality、visible / invisible 作为同一 exhibition system 的成对变量',
          '通过 music、cinema 与 architecture 扩大 viewer immersion，而不是只观看孤立 sculpture'
        ],
        sourceUrl: 'https://www.francescaminini.it/exhibition/supernature/',
        images: [],
        relations: [rel('展览', 'Francesca Minini, Milan — Supernature', '2025')]
      },
      {
        title: 'Pánico efímero / Ephemeral Panic',
        cluster: 'site-specific total environment / ritual-icon-metamorphosis / collective transformation',
        period: '2025–2026',
        summary: 'MAMBO 的首个机构个展把 site-specific sculpture、painting、installation、video 与 performance 组织成“ritual / icon / metamorphosis”三幕。作品材料包括 wax、ceramic、stainless steel 与 paraffin，展览又来自两个月 Bogotá residency，使“metamorphosis”从单个身体的形变扩成整座空间、材料和当地环境共同参与的转化。',
        actions: [
          '以两个月 Bogotá residency 作为现场 research / material exposure 阶段',
          '制作 site-specific works 而非只输入既有作品',
          '以 ritual / icon / metamorphosis 三幕组织 exhibition dramaturgy',
          '混用 wax、ceramic、stainless steel、paraffin 等具有融化/硬化/工业感差异的材料',
          '在 opening performance 中激活展览结构',
          '让 viewer 进入 sensory environment，使 transformation 由图像主题变成身体经验'
        ],
        sourceUrl: 'https://www.mambogota.com/exposicion/panico-efimero-ephemeral-panic-ambra-castagnetti/',
        images: [],
        relations: [rel('展览', 'MAMBO Bogotá — Pánico efímero', '2025–2026 · first institutional solo exhibition')]
      },
      {
        title: 'Surgica',
        cluster: 'medicalization / domestic asepsis / seven-performer repetition / resistance',
        period: '2026',
        summary: 'Villa Clea residency 的 site-specific performance 把 domestic space 逐渐清空成近乎无菌环境，七名 performers 在 industrial soundscape 中重复十分钟动作；同一段 performance 在两小时内多次重演，最终把“女性身体被美化/规范化”转化成 endurance、compulsion 与 collective psychosis。',
        actions: [
          '把 domestic interior 改造成 closed / almost aseptic environment',
          '为 seven performers 设计 collective movement score',
          '使用 industrial soundscape 逐步推向 climax',
          '让单次约十分钟 performance 在两小时内反复执行',
          '通过 repetition 把 duration 转成 endurance / resistance',
          '把 medicalization 与 normalization of the female body 转译为空间秩序、重复动作和身体耗损'
        ],
        sourceUrl: 'https://ambracastagnetti.com/performance/',
        images: [],
        relations: [rel('展览', 'Villa Clea, Milan — Surgica', '2026 · site-specific residency performance')]
      }
    ],
    awards: ['Biennale College Arte 2021/22 recipient'],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022', 'COMPOST G¥RLS — New Galerie, 2023', 'Supernature — Francesca Minini, 2025', 'Pánico efímero — MAMBO Bogotá, 2025–26', 'Surgica — Villa Clea, 2026'],
    sources: [
      { label: 'La Biennale · Ambra Castagnetti', url: 'https://www.labiennale.org/en/art/2022/milk-dreams/ambra-castagnetti' },
      { label: 'New Galerie · COMPOST G¥RLS', url: 'https://www.newgalerie.com/exhibitions/95/pdf/text%20Compost%20Girlsenglish.pdf' },
      { label: 'Francesca Minini · Supernature', url: 'https://www.francescaminini.it/exhibition/supernature/' },
      { label: 'MAMBO · Pánico efímero', url: 'https://www.mambogota.com/exposicion/panico-efimero-ephemeral-panic-ambra-castagnetti/' },
      { label: 'Artist website · Performance', url: 'https://ambracastagnetti.com/performance/' }
    ]
  }
};
