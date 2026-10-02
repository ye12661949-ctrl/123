import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

export const archiveBatch147: Record<string, ArtistArchive> = {
  'venice-p-staff': {
    artistId: 'venice-p-staff',
    projectCoverage: '4 个 queer archive / medical toxicity / institutional-body / coercive-infrastructure 节点深化 · 2015–2023',
    imageCoverage: '0 / 4',
    note: '把 P. Staff 从 On Venus 单点扩成一条清晰的方法演变：先从 queer archive 与跨代社群关系出发；随后把 illness、transition 与 medicine/poison 的边界放进身体影像；On Venus 再把身体扩成泄漏、腐蚀、流体循环的建筑系统；到 In Ekstase，institution 本身通过电击网、血制构件和强制绝育文件被重写成一套规训身体的基础设施。核心持续问题不是“酷儿身份”本身，而是身体如何被 care、medicine、law、capital 与 architecture 同时照护和伤害。',
    projects: [
      {
        title: 'The Foundation',
        cluster: 'queer archive / intergenerational community / choreographed documentary / stage-set architecture',
        period: '2015',
        summary: 'Staff 在洛杉矶 Tom of Finland Foundation 的档案、住所与社群中拍摄，同时加入在专门搭建布景中的编舞段落。作品不是把 archive 当成静态历史，而是观察图像遗产、照料者、居住者、欲望与代际传承如何在同一个场所继续运作。',
        actions: [
          '进入 Tom of Finland Foundation 的 archive / residence 长期拍摄，而非只复制历史图像',
          '记录维护档案的具体成员及其日常关系，使 institutional memory 具有身体和居住尺度',
          '把 documentary footage 与专门搭建的 choreographic set 交替剪辑',
          '用 stage flats / freestanding structures 把电影的“外观制造”扩展到展览空间',
          '让历史材料与当代 queer bodies 同时出现，避免把 Tom of Finland 只封存为过去',
          '通过多机构共同委任，让作品本身沿 Chisenhale / Spike Island / CAG / IMA 网络流通'
        ],
        sourceUrl: 'https://www.ima.org.au/exhibitions/patrick-staff-the-foundation/',
        images: [],
        relations: [
          rel('展览', 'Chisenhale Gallery / Spike Island / Contemporary Art Gallery / IMA', '2015–16 · four-institution co-commission'),
          rel('出版', 'Patrick Staff: The Foundation', 'IMA / Mousse Publishing / CAG · 2015')
        ]
      },
      {
        title: 'Weed Killer',
        cluster: 'chemotherapy / transition / thermal image / medicine-poison ambiguity',
        period: '2017',
        summary: '以 Catherine Lord 的癌症回忆录 The Summer of Her Baldness 为骨架，把化疗带来的身体破坏与 trans embodiment 并置。Debra Soshoux 的独白、Jamie Crewe 的表演和高分辨率 thermal imaging 让治疗不再被理解成单纯“治愈”，而成为能同时修复、改变和伤害身体的化学系统。',
        actions: [
          '从 Catherine Lord memoir 中抽取 chemotherapy 独白并重新编排为 film script',
          '由 trans performers 承担文本和身体表演，使 illness / transition 发生交叉',
          '使用 high-definition thermal imaging 把体温与 radiation 变成非自然主义身体图像',
          '将 concrete mixer、身体动作和药物隐喻并置，强化 cure / poison 的不稳定边界',
          '通过 single-screen video 与 immersive exhibition condition 让观看者处于持续生理刺激中',
          '把个人 suffering 转向 medical-industrial system 如何定义可接受身体的结构问题'
        ],
        sourceUrl: 'https://www.moca.org/exhibitions/patrick-staff-weed-killer',
        images: [],
        relations: [
          rel('展览', 'Museum of Contemporary Art, Los Angeles', 'MOCA commission and premiere · 2017'),
          rel('展览', 'Trigger: Gender as a Tool and a Weapon — New Museum', '2017')
        ]
      },
      {
        title: 'On Venus',
        cluster: 'leaking architecture / industrial farming / yellow light / media panic / near-death ecology',
        period: '2019–2022',
        summary: 'Serpentine 的 site-specific installation 把 gallery 变成一具泄漏且受腐蚀的“身体”：天花管网持续把天然与合成液体滴入钢桶；金属蚀刻复制关于 trans prisoner 的虚假媒体报道及后续更正；同名影像把工业养殖中的尿液、精液、皮毛、肉等身体商品与一首关于 Venus 的 near-death poem 并置。',
        actions: [
          '在 gallery ceiling 建立 visible piping network，使建筑像循环体液的身体',
          '让 natural / synthetic liquids 缓慢滴入 steel barrels，把流体交换与污染具象化',
          '把英国 tabloid 关于 trans prisoner 的虚假报道和后续澄清转印为 metal etchings',
          '剪辑并扭曲 industrial farming 中 hormone / reproductive / carnal commodities 的生产影像',
          '用 radioactive-yellow illumination 与 mirrored floor 改写观众的身体感知',
          '用关于 Venus 的 poem 将 non-life / near-death / metamorphosis 作为 queer ecological state',
          '把 media、animal industry、institutional legibility 与 trans body 放进同一个环境系统'
        ],
        sourceUrl: 'https://www.serpentinegalleries.org/whats-on/p-staff-venus/',
        images: [],
        relations: [
          rel('展览', 'Serpentine North Gallery — On Venus', '2019–20 · site-specific commission'),
          rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · project recontextualised in international exhibition')
        ]
      },
      {
        title: 'In Ekstase / Afferent Nerves / Bloodheads',
        cluster: 'electrified livestock net / animal-blood fixtures / sterilisation bureaucracy / day-for-night film',
        period: '2023',
        summary: 'Kunsthalle Basel 的个展把 Staff 对身体规训的研究进一步推进到 institution materiality：Afferent Nerves 把通常用于牲畜管理的通电网悬在观众头顶；Bloodheads 用动物血与 albumen-based biopolymer 翻制门把、插座盖和地板构件；HHS-687 将美国强制绝育相关表格转成钢板蚀刻，令 care、bureaucracy 与 coercion 在同一空间互相折叠。',
        actions: [
          '在 gallery ceiling 悬挂 electrified livestock-control net，直接改变观众对上方建筑的感知',
          '与 Basse Stittgen 合作开发 animal-blood / albumen biopolymer casting',
          '用血制材料复制 door handles、socket covers、parquet elements 等日常 institution fixtures',
          '将 HHS sterilisation consent form 通过 corrosive intaglio 转译成钢制图像',
          '以强烈 yellow light 与环境改造制造统一但带压迫性的身体条件',
          '在 La Nuit Américaine 中把白昼 Los Angeles footage 处理为 artificial night，继续研究视觉制度如何改写身体经验',
          '把 violence 从“被表现的主题”转成展馆材料、光、电、表格与观看条件本身'
        ],
        sourceUrl: 'https://www.frieze.com/article/p-staff-in-erkstase-2023-review',
        images: [],
        relations: [
          rel('展览', 'Kunsthalle Basel — In Ekstase', '2023'),
          rel('出版', 'Kunsthalle Basel Jahresbericht 2023', 'institutional record of exhibition and reception')
        ]
      }
    ],
    awards: ['Paul Hamlyn Award for Visual Art · 2015'],
    exhibitions: ['The Foundation — Chisenhale / Spike Island / CAG / IMA, 2015–16', 'Weed Killer — MOCA Los Angeles, 2017', 'On Venus — Serpentine, 2019–20', 'The Milk of Dreams — Venice Biennale, 2022', 'In Ekstase — Kunsthalle Basel, 2023'],
    sources: [
      { label: 'Institute of Modern Art · The Foundation', url: 'https://www.ima.org.au/exhibitions/patrick-staff-the-foundation/' },
      { label: 'MOCA Los Angeles · Weed Killer', url: 'https://www.moca.org/exhibitions/patrick-staff-weed-killer' },
      { label: 'Serpentine · On Venus', url: 'https://www.serpentinegalleries.org/whats-on/p-staff-venus/' },
      { label: 'Kunsthalle Basel · Jahresbericht 2023', url: 'https://www.kunsthallebasel.ch/wp-content/uploads/KHB_Jahresbericht-23_web.pdf' },
      { label: 'Frieze · P. Staff In Ekstase review', url: 'https://www.frieze.com/article/p-staff-in-erkstase-2023-review' }
    ]
  },

  'venice-birgit-jurgenssen': {
    artistId: 'venice-birgit-jurgenssen',
    projectCoverage: '5 个 body-language / domestic-prosthesis / display-case / fetish-object / photographic-process 节点深化 · 1972–1989',
    imageCoverage: '0 / 5',
    note: '把 Jürgenssen 从“女性身体与动物变形”继续展开成一条更具体的方法链：她先把自己的身体当作文字和符号；随后把家务物、服装、鞋与假肢接到身体上；再利用玻璃橱窗、摄影与观看框架把“女性作为被展示对象”的制度直接可视化；80 年代以后则继续通过 cyanotype 等摄影工艺让身体在影像材料中变成痕迹。她的重要性不只是 feminist iconography，而是不断把社会角色变成 wearable object、display apparatus 与 photographic surface。',
    projects: [
      {
        title: 'Frau (Woman)',
        cluster: 'body alphabet / self-portrait / gender word / photographic sequence',
        period: '1972',
        summary: 'Jürgenssen 用自己的身体摆成四个姿势，拼出德语 Frau。身体在这里既是 subject 也是字母材料：社会身份“woman”并非自然给定，而被拆成一组可以重新编排的姿势、符号和摄影框架。',
        actions: [
          '以自身身体作为唯一主要视觉材料',
          '连续摆出四个可辨识姿态并让它们承担 alphabet-like function',
          '通过摄影 sequence 把单次身体动作转成可阅读文字',
          '在最终 print 上加入 red ink 强化 graphic / linguistic structure',
          '把 identity 从 portrait likeness 转换为可拆解、可重组的 sign system'
        ],
        sourceUrl: 'https://www.moma.org/collection/works/158540',
        images: [],
        relations: [rel('收藏', 'Museum of Modern Art, New York', 'Photography collection · acquired 2012')]
      },
      {
        title: 'Hausfrauen-Küchenschürze (Housewives’ Kitchen Apron)',
        cluster: 'wearable stove / domestic labour / body-object fusion / feminist performance-photography',
        period: '1975',
        summary: '艺术家把炉灶做成像围裙/束身衣一样悬挂在身体前方，并以正面与侧面自拍组成 diptych。功能性家务物被直接“长”到女性身体上：housewife role 不再是抽象社会概念，而成为沉重、可穿戴、具有孕腹与 phallic bread 暗示的身体装置。',
        actions: [
          '制作可悬挂在 torso 前方的 stove-apron object',
          '以 housewife styling 穿戴装置并保持 neutral presentation',
          '分别拍摄 frontal / profile views，再组成 diptych',
          '让 appliance 与 body 连成近似 corset / prosthesis 的单一轮廓',
          '保留 oven / bread 等家庭劳动符号，同时引入 pregnancy / phallic ambiguity',
          '通过中性背景把 domestic cliché 从家庭环境中抽离成近似 mug-shot display'
        ],
        sourceUrl: 'https://birgitjuergenssen.com/en/bibliography/texts-essays-interviews/schor2009',
        images: [],
        relations: [rel('展览', 'MAGNA — Feminismus: Kunst und Kreativität', '1975 · curated by VALIE EXPORT')]
      },
      {
        title: 'I Want Out Of Here!',
        cluster: 'glass display / trapped self-portrait / domestic beauty code / observer-observed loop',
        period: '1976',
        summary: 'Jürgenssen 穿着整洁白色蕾丝领和胸针，把脸和双手压向玻璃，像被陈列在橱窗内部。摄影直接把“女性被观看”变成空间结构：她既是被展示的身体，也是控制相机和最终图像的作者。',
        actions: [
          '采用 highly coded bourgeois feminine dress details',
          '把身体紧贴透明 glass boundary 而不是正常站立肖像',
          '利用面部与手掌受压形变制造困住 / 展示的双重感觉',
          '让透明界面同时允许观看并制造不可穿越的物理限制',
          '以 self-portrait control 反转被动 muse / display-object 位置'
        ],
        sourceUrl: 'https://www.moma.org/collection/works/158539',
        images: [],
        relations: [rel('收藏', 'Museum of Modern Art, New York', 'Photography collection')]
      },
      {
        title: 'Bootjack / fetish-shoe drawings and objects',
        cluster: 'shoe fetish / bound body / control-desire / surreal prosthesis',
        period: '1974–1977',
        summary: '鞋在 Jürgenssen 手里不是时尚配饰，而经常变成 animal claw、工具、束缚装置或身体延伸。Bootjack 等纸上作品把与她相似的女性人物置于被固定、被操纵或难以解释的身体场景中，使 desire 与 power 始终保持不稳定关系。',
        actions: [
          '从 women’s shoe / fetish object 这一高度性别化日常物出发',
          '把鞋与 bird claw、metal、tool 或 prosthetic logic 混合',
          '在 drawing 中让女性身体进入 bound / controlled pose',
          '保留精确写实细节，同时取消明确 narrative context',
          '利用 surreal mismatch 让 object 同时显得 seductive、functional 与 threatening',
          '把“被观看的女性”转向能够制造反讽和 power inversion 的自我作者位置'
        ],
        sourceUrl: 'https://www.moma.org/collection/works/159965',
        images: [],
        relations: [rel('展览', 'Vital Signs: Artists and the Body — MoMA', '2024–25')]
      },
      {
        title: 'Cyanotype body traces',
        cluster: 'cyanotype / body fragment / photographic material / trace rather than portrait',
        period: '1988–1989',
        summary: '80 年代末的 cyanotype 说明她并未停留在 1970s domestic critique：摄影逐渐从记录 performance / object 的工具，变成具有独立化学与表面逻辑的媒介。蓝晒让身体以 fragment / trace 出现，而非稳定的完整自画像。',
        actions: [
          '转向 cyanotype photographic process 而非标准 gelatin-silver self-portrait',
          '利用 process-specific Prussian blue surface 改变身体与背景的可读关系',
          '减少完整人物叙事，让 fragment / imprint 主导观看',
          '把 earlier metamorphosis 从 wearable object 转向 image chemistry 内部',
          '继续保持 observer / observed 的双重位置，但弱化明确社会角色道具'
        ],
        sourceUrl: 'https://www.moma.org/collection/works/158542',
        images: [],
        relations: [rel('收藏', 'Museum of Modern Art, New York', 'Cyanotype · 1988–89')]
      }
    ],
    awards: [],
    exhibitions: ['MAGNA — Feminismus: Kunst und Kreativität, 1975', 'Birgit Jürgenssen retrospective — Bank Austria Kunstforum / VERBUND, 2010–11', 'XL: 19 New Acquisitions in Photography — MoMA, 2013–14', 'The Milk of Dreams — Venice Biennale, 2022', 'Vital Signs: Artists and the Body — MoMA, 2024–25'],
    sources: [
      { label: 'MoMA · Birgit Jürgenssen artist page', url: 'https://www.moma.org/artists/30952-birgit-jurgenssen' },
      { label: 'Estate Birgit Jürgenssen · Housewives Kitchen Apron essay', url: 'https://birgitjuergenssen.com/en/bibliography/texts-essays-interviews/schor2009' },
      { label: 'VERBUND Collection · Birgit Jürgenssen retrospective', url: 'https://sammlung.verbund.com/en/exhibitions/retrospect-exhibitions/birgit-juergenssen-kunstforum-2010' },
      { label: 'MoMA · I Want Out Of Here!', url: 'https://www.moma.org/collection/works/158539' },
      { label: 'MoMA · Bootjack', url: 'https://www.moma.org/collection/works/159965' }
    ]
  },

  'venice-muge-yilmaz': {
    artistId: 'venice-muge-yilmaz',
    projectCoverage: '3 个 camouflage-body / protective cosmology / feminist-sci-fi archive 节点深化 · 2016–2022',
    imageCoverage: '0 / 3',
    note: '把 Müge Yılmaz 从 2022 Umay 单点往回接到她长期的 protection / scarcity / feminist science-fiction 研究。她的方法不是简单“做未来主义装置”：2016 起先让 camouflage costume 在公共空间中模糊 human / nonhuman / landscape；2019 把保护机制扩大为太阳、矿物、水与护符构成的仪式宇宙；2022 再通过 fictional retired astronaut 把 feminist sci-fi library、Anatolian glyph 与 hand-carved totem 组织成可居住的知识档案。',
    projects: [
      {
        title: 'The Water, The Soil, The Jungle',
        cluster: 'camouflage suit / public performance / human-nonhuman ambiguity / ecology as actant',
        period: '2016–2017',
        summary: '三位 performer 穿着 water / soil / jungle camouflage costumes 在公共空间移动。作品借 female shamanic practices 与 camouflage 逻辑，让身体在“融入环境”和“突然成为独立生物”之间切换，测试 human / nonhuman、organic / technological、gendered / genderless 等二分法。',
        actions: [
          '设计 three-part camouflage costume system 对应 water / soil / jungle',
          '让 performers 在 urban public space 而非封闭舞台中缓慢移动',
          '利用 camouflage 令身体在背景中时隐时现',
          '把 female shamanic reference 与 ecological discourse 并置',
          '将 nature 设定为有 agency 的 actant，而不是被观看的 scenery',
          '让观众通过距离和移动不断重新判断形体究竟是 sculpture、human 还是 environmental presence'
        ],
        sourceUrl: 'https://kaaitheater.be/en/agenda/16-17/water-soil-jungle',
        images: [],
        relations: [
          rel('展览', 'PERFORMATIK17 — Brussels', '2017 · public live installation'),
          rel('展览', '11th Shanghai Biennale — Why Not Ask Again?', '2016')
        ]
      },
      {
        title: 'Eleven Suns / The Seventh Continent',
        cluster: 'protective cosmology / carved wood / stones-shells-water / ritual environment',
        period: '2019',
        summary: '在 Istanbul Biennial 阶段，Yılmaz 把早期 camouflage-body 研究推进成更完整的 protective cosmology：CNC-cut 与 hand-carved birch wood、石头、贝壳、水等材料被组合成太阳与护符式结构。重点从个体“如何伪装”转向 community 如何借 belief、ritual 与物质系统面对 environmental uncertainty。',
        actions: [
          '将 digital CNC cutting 与 hand carving 并置，保留 machine / ritual craft 双重来源',
          '把 birch wood、stones、shells、water 等不同 material agencies 组合到同一 installation',
          '持续调用 sun / eye / hand / amulet 等 protective symbolic forms',
          '不把 ecological concern 转成 documentary illustration，而以 speculative cosmology 建立环境',
          '让 protection 同时指向 conservation、scarcity、belief 与 collective survival',
          '通过 biennial-scale installation 从 wearable body 扩大到可进入的 world-building'
        ],
        sourceUrl: 'https://www.mugeyilmaz.com/',
        images: [],
        relations: [rel('展览', '16th Istanbul Biennial — The Seventh Continent', '2019 · curated by Nicolas Bourriaud')]
      },
      {
        title: 'The Adventures of Umay Ixa Kayakızı',
        cluster: 'retired astronaut / feminist science-fiction library / Anatolian glyph / hand-carved totem',
        period: '2021–2022',
        summary: '作品把 fictional retired astronaut Umay 的 life-work 建成 secret studiolo / island ship。Umay 收藏并书写女性科幻，包括曾以男性笔名出版的作品；蓝绿手工雕刻的 animal-headed totems 同时充当 sculpture、protective figure 与书架，使 archive 不再是中性的文献储存，而成为被神话、身体和未来叙事共同保护的知识生态。',
        actions: [
          '先建立 Umay 这一 fictional retired-astronaut biography 作为 narrative frame',
          '搜集 women-authored feminist science fiction 与 male-pseudonym publication histories',
          '从 Neolithic Anatolian hieroglyph、hamsa、traditional tattoo 等 protective symbols 提取形态',
          '手工 carve animal-headed / eye-bearing / hand-glyph totemic sculptures',
          '用 vivid blue / green paint 建立统一的 speculative visual family',
          '让 sculptures 同时作为 shelves，直接承担 library infrastructure',
          '把 archive、ritual、family descendants 与 future-world narrative 合并成一个可进入环境'
        ],
        sourceUrl: 'https://www.labiennale.org/en/art/2022/milk-dreams/m%C3%BCge-yilmaz',
        images: [],
        relations: [
          rel('展览', 'Other Futures Festival', '2021 commission / earlier iteration'),
          rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Giardini')
        ]
      }
    ],
    awards: [],
    exhibitions: ['Why Not Ask Again? — Shanghai Biennale, 2016', 'PERFORMATIK17 — Brussels, 2017', 'The Seventh Continent — Istanbul Biennial, 2019', 'Posterity Hill — Wilfried Lentz, 2022', 'The Milk of Dreams — Venice Biennale, 2022'],
    sources: [
      { label: 'La Biennale · Müge Yılmaz', url: 'https://www.labiennale.org/en/art/2022/milk-dreams/m%C3%BCge-yilmaz' },
      { label: 'Müge Yılmaz · artist website', url: 'https://www.mugeyilmaz.com/' },
      { label: 'Kaaitheater · The Water, The Soil, The Jungle', url: 'https://kaaitheater.be/en/agenda/16-17/water-soil-jungle' },
      { label: 'Dutch Art Institute · Müge Yılmaz', url: 'https://dutchartinstitute.eu/page/16804/m%C3%BCge-yilmaz' }
    ]
  },

  'venice-lillian-schwartz': {
    artistId: 'venice-lillian-schwartz',
    projectCoverage: '4 个 responsive-kinetic / hybrid-code-film / full-computer-film / museum-collage 节点深化 · 1968–1984',
    imageCoverage: '0 / 4',
    note: '把 Lillian Schwartz 从两个早期 Bell Labs 节点扩成技术演变史：1968 的 Proxima Centauri 已经把 viewer-triggered electronics、projector 与 fluid optics 合并；Pixillation 把 code-generated texture 与 hand-coloured animation 混合；Affinities 则进一步放弃 hand-painted layer，以 computer imagery 完成 moving image；到 Big MoMA，她把 scanning / digital collage 反过来用于 museum collection 本身。她的重要性不只是“早期电脑艺术家”，而是把 engineer、programming language、mainframe output、optical printing、music 与 museum commission 组织成跨媒介 production system。',
    projects: [
      {
        title: 'Proxima Centauri',
        cluster: 'responsive kinetic sculpture / projector / ripple tank / pressure-pad electronics',
        period: '1968',
        summary: '与 Bell Labs electrical engineer Per Biorn 合作：投影机通过 ripple tank 把抽象 slide 投到半透明 globe 上；水槽周期性扰动使图像持续变化；观众接近并踩到 pressure mats 后，机构触发马达让 globe 下沉并切换红光。观众位置因此直接成为作品运行参数。',
        actions: [
          '与 engineer Per Biorn 共同开发 electronics / mechanical response system',
          '将 slide projector 与 ripple tank 叠加，使 projected image 经过动态液体折射',
          '让 ripple tank 周期性被 motor agitation 扰动，再重新稳定',
          '在地面设置 pressure switches 侦测 viewer proximity',
          '触发 motor 将 globe 下沉到 base 内部并切换 red illumination',
          '让 viewer leave 后 globe 回到默认位置，形成 closed feedback cycle',
          '把 sculpture 从静态 object 转成 observer-dependent event'
        ],
        sourceUrl: 'https://assets.moma.org/documents/moma_press-release_326596.pdf',
        images: [],
        relations: [rel('展览', 'The Machine as Seen at the End of the Mechanical Age — MoMA', '1968')]
      },
      {
        title: 'Pixillation',
        cluster: 'EXPLOR code / black-white texture / hand-colour / film editing / Moog soundtrack',
        period: '1970',
        summary: 'Schwartz 在 Bell Labs 与 Ken Knowlton 的计算环境中生成 computer texture，再与 hand-coloured animation、crystal-growth footage 等 analogue material 叠加并剪辑。作品不是“电脑取代手工”，而是 code、optical/film technique 和绘画颜色共同工作。',
        actions: [
          '使用 Bell Labs computing resources 与 Ken Knowlton 的 animation methods 生成黑白几何 / texture sequences',
          '将 computer output 与 hand-coloured animation 叠加',
          '把 crystal growth 等 photographed footage 插入 computer-generated pattern 之间',
          '通过 frame-level editing 调整 digital / analogue forms 的颜色呼应与冲突',
          '加入 Gershon Kingsley 的 Moog synthesizer soundtrack',
          '随着音乐加速提高剪辑节奏，使 audiovisual structure 同步变化',
          '保留 film 作为最终 distribution medium，而不是把 mainframe output 当作终点'
        ],
        sourceUrl: 'https://arkmfa.org/art/exhibitions/lillian-schwartz-pixillation/',
        images: [],
        relations: [
          rel('收藏', 'Museum of Modern Art, New York', 'Pixillation later entered MoMA film collection'),
          rel('收藏', 'The Henry Ford', 'Lillian F. Schwartz & Laurens R. Schwartz Collection')
        ]
      },
      {
        title: 'Affinities',
        cluster: 'computer-only moving image / EXPLOR / SC-4020 plotter / optical colour printing',
        period: '1972',
        summary: '在 Pixillation 之后，Schwartz 刻意放弃手绘图像，使用 Ken Knowlton 的 EXPLOR 与 Bell Labs SC-4020 microfilm plotter 生成 computer animation，再通过 optical printer 加入高饱和色。方法重心由“digital + analogue collage”移向对 computer-generated motion 本身的控制。',
        actions: [
          '用 EXPLOR programming environment 构造 moving geometric sequences',
          '通过 Bell Labs mainframe 计算 frame information',
          '使用 SC-4020 microfilm plotter 输出 animation imagery',
          '取消 Pixillation 中 hand-painted layer，测试 computer imagery 独立承担画面结构的能力',
          '通过 optical printing process 加入 saturated colour',
          '与 F. Richard Moore 的 electronic score 结合，使计算机图像与计算机音乐成为同一 production ecology'
        ],
        sourceUrl: 'https://computerhistory.org/exhibits/technology-art/',
        images: [],
        relations: [rel('展览', 'Computer History Museum — Technology + Art', 'historical presentation of Bell Labs computer-film practice')]
      },
      {
        title: 'Big MoMA',
        cluster: 'museum commission / scanned collection / digital collage / institutional self-image',
        period: '1984',
        summary: 'MoMA 在扩建重新开放时委任 Schwartz 制作 poster 与 public-service announcement。她与 physicist Richard Voss 使用 prototype scanning program，把 MoMA collection 图像数字化后重新拼成 female form；computer imaging 不再只是生成抽象图案，而被用于重新组织 museum canon 的视觉记忆。',
        actions: [
          '从 MoMA collection 中选择 existing artwork images 作为 source set',
          '与 physicist Richard Voss 合作使用 prototype scanning program digitise collection imagery',
          '把不同 source images 重新组合成大型 female-form digital collage',
          '将同一 computational visual logic 同时适配 poster 与 public-service announcement',
          '把 computer imaging 从 Bell Labs experimental film 环境转入 mass-public museum communication',
          '让 institution 自己的 collection 成为可扫描、再编辑、重新排序的数据材料'
        ],
        sourceUrl: 'https://research.vam.ac.uk/journals/research-journal/issue-6/_assets/downloads/pagedjs.pdf',
        images: [],
        relations: [rel('展览', 'Museum of Modern Art, New York', '1984 reopening commission / public communication project')]
      }
    ],
    awards: ['CINE Golden Eagle · Pixillation · 1971'],
    exhibitions: ['The Machine as Seen at the End of the Mechanical Age — MoMA, 1968', 'Bell Labs computer-film collaborations, 1969–2002', 'The Milk of Dreams — Venice Biennale, 2022', 'Lillian Schwartz: Pixillation — Arkansas Museum of Fine Arts, 2024', 'Electric Op — Buffalo AKG / Musée d’arts de Nantes, 2024–25'],
    sources: [
      { label: 'MoMA · Proxima Centauri press material', url: 'https://assets.moma.org/documents/moma_press-release_326596.pdf' },
      { label: 'Arkansas Museum of Fine Arts · Lillian Schwartz: Pixillation', url: 'https://arkmfa.org/art/exhibitions/lillian-schwartz-pixillation/' },
      { label: 'Computer History Museum · Technology + Art', url: 'https://computerhistory.org/exhibits/technology-art/' },
      { label: 'Computer History Museum · Music-Film-Computers', url: 'https://computerhistory.org/exhibits/music-film-computers/' },
      { label: 'The Henry Ford · Best of Lillian Schwartz', url: 'https://www.thehenryford.org/collections/explore/sets/detail/best-of-lillian-schwartz' },
      { label: 'V&A Research Journal · digital design history', url: 'https://research.vam.ac.uk/journals/research-journal/issue-6/_assets/downloads/pagedjs.pdf' }
    ]
  }
};
