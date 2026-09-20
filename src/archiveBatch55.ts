import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

export const archiveBatch55: Record<string, ArtistArchive> = {
  'jo-spence': {
    artistId: 'jo-spence',
    projectCoverage: '7 个 family album / class / collaborative self-image / phototherapy 节点已建立深档案 · 1974–1992',
    imageCoverage: '0 / 7 项目已有代表图像',
    note: 'Spence 的关键不是“把自己拍得真实”。她从商业 portrait / wedding photography 的经验出发，主动拆解 family album、medical image、beauty portrait 和 class portrait 这些格式，再通过 collaboration、role-play、body writing 和 text panel 让“谁决定一个身体怎样被看”变成具体生产问题。',
    projects: [
      {
        title: 'Gypsies and Travellers / community documentary', cluster: 'community photography / Terry Dennett / social documentary', period: '1974',
        summary: '与 Terry Dennett 合作的早期 community documentary 已经体现她从商业摄影转向社会实践：摄影不是猎奇“边缘群体”，而强调长期接触、合作与作品流通语境。',
        actions: ['与 Terry Dennett 建立长期合作', '进入社区而非一次访问', '使用小型相机记录日常关系', '保留 contact-sheet / research material', '把照片用于教育 / 社区与政治讨论而不只进入画廊'],
        sourceUrl: 'https://theimagecentre.ca/collection/jo-spence-memorial-archive/', images: [], relations: []
      },
      {
        title: 'Beyond the Family Album', cluster: 'family archive / text panel / class / counter-autobiography', period: '1978–1979',
        summary: 'Spence 回看家庭旧照，寻找 family album 排除掉的劳动、阶级冲突、病痛与不理想生活。她把 old photographs、new text、press material 和 autobiographical writing 做成展板，让相册从幸福证据变成可质疑的编辑制度。',
        actions: ['调取 family photographs', '辨认哪些生活经验从相册中消失', '写 autobiographical / class text', '加入 newspaper / social materials', '把 old photo 与 text 做成 sequential panels', '让 editing process 明确暴露'],
        sourceUrl: 'https://theimagecentre.ca/collection/jo-spence-memorial-archive/', images: [], relations: []
      },
      {
        title: 'The Highest Product of Capitalism', cluster: 'self-performance / class / John Heartfield reference / staged portrait', period: '1979',
        summary: 'Spence 把自己放入广告 / class stereotype 的视觉语法中进行 staged self-image，借 Heartfield 式政治 montage 逻辑把“女性应该怎样出现”的商业摄影经验反过来使用。',
        actions: ['分析 advertising / commercial portrait conventions', '由艺术家本人进入镜头', '与 Terry Dennett 协作 staging', '通过服装 / posture 制造 class / gender code', '用标题和图文关系破坏“自然肖像”读法'],
        sourceUrl: 'https://theimagecentre.ca/collection/jo-spence-memorial-archive/', images: [], relations: []
      },
      {
        title: 'Remodelling Photo History / The History Lesson', cluster: 'reenactment / photography history / colonization-industrialization / collaboration', period: '1981–1982',
        summary: '与 Terry Dennett 合作，Spence 通过 reenactment 与 staged image 重新进入 photography history、industrialisation、colonisation 和 class image。MoMA 收藏中明确列有多个 Remodelling Photo History prints。',
        actions: ['研究 photography-history canonical images / social categories', '选择 colonization、industrialization、self-as-image 等主题', '通过 costume / body pose 重做 visual convention', '拍摄 gelatin-silver prints', '加入 notebook / artist-book sequence', '保留 collaborator attribution'],
        sourceUrl: 'https://www.moma.org/collection/works/399903', images: [], relations: [rel('收藏', 'MoMA', 'Remodelling Photo History works')]
      },
      {
        title: 'The Picture of Health?', cluster: 'breast cancer / medical authority / body writing / self-documentation', period: '1982–1986',
        summary: '确诊 breast cancer 后，Spence 把 medical system 中患者被观看、标记和切割的经验转为摄影。医院环境、身体变化、头盔 / X mark / scars 与文字共同出现；作品不是治疗日记，而是患者主动夺回 image-production 权。',
        actions: ['记录 diagnosis / hospital experience', '拍摄身体在 medical process 中的变化', '在身体表面加入文字 / marks', '与 Terry Dennett、Rosy Martin 等合作', '把 medical image 与 staged self-image 并置', '制作 panel / publication 而非单张 heroic portrait'],
        sourceUrl: 'https://theimagecentre.ca/collection/jo-spence-memorial-archive/', images: [], relations: []
      },
      {
        title: 'Photo Therapy with Rosy Martin', cluster: 'role-play / class / mother / glamour / emotional eating / collaborative therapy', period: '1983–1992',
        summary: 'Spence 与 Rosy Martin 发展 phototherapy：通过角色扮演、旧家庭角色、fantasy 和重新摄影，让被摄者主动表演“早期母亲 / 晚期母亲 / bride / class / glamour”等内化形象。camera 既记录，也成为 rehearsal tool。',
        actions: ['先通过 conversation 确定记忆 / role conflict', '准备简单 costume / prop', '由被摄者主动进入多个角色', '拍摄表情 / posture 变化', '现场回看 / 讨论 image', '重复 staging 调整关系', '将 final prints 与 therapy / feminist critique 保持连接'],
        sourceUrl: 'https://theimagecentre.ca/collection/jo-spence-memorial-archive/', images: [], relations: []
      },
      {
        title: 'Libido Uprising / late self-imaging', cluster: 'sexuality / illness / role-play / anti-glamour', period: '1989–1992',
        summary: '晚期与 Rosy Martin 等合作继续处理 sexuality、illness、class、desire。fishnet、vacuum hose、red substance 等夸张道具拒绝病人 / 老年女性只能以尊严、脆弱或 inspirational image 出现。',
        actions: ['继续以自身 aging / illness body 为主体', '使用 erotic / domestic props', '主动夸大不体面 / grotesque / humorous role', '拍摄 chromogenic colour prints', '拒绝 commercial glamour 的修饰', '保留 collaborator credit'],
        sourceUrl: 'https://theimagecentre.ca/exhibition/anti-glamour-portraits-of-women/', images: [], relations: []
      }
    ],
    awards: [],
    exhibitions: ['The Picture of Health? — 1980s', 'Jo Spence: From Fairytales to Phototherapy — Arnolfini 2020–2021', 'The 80s: Photographing Britain — Tate Britain 2024–2025'],
    sources: [
      { label: 'The Image Centre — Jo Spence Memorial Archive', url: 'https://theimagecentre.ca/collection/jo-spence-memorial-archive/' },
      { label: 'MoMA — Remodelling Photo History', url: 'https://www.moma.org/collection/works/399903' }
    ]
  },

  'christian-boltanski': {
    artistId: 'christian-boltanski',
    projectCoverage: '7 个 invented autobiography / archive / clothes / heartbeat / chance-machine 节点已建立深档案 · 1969–2011',
    imageCoverage: '0 / 7 项目已有代表图像',
    note: 'Boltanski 不只是“做记忆”。他不断制造保存系统，却让内容越来越难读取：照片被放进 vitrines、文件封进铁盒、匿名脸被堆成 grids、旧衣替代身体、心跳被转成数字 archive。作品真正的张力是“保存越努力，个体反而越容易消失”。',
    projects: [
      {
        title: 'Essais de reconstitution / invented childhood', cluster: 'fabricated memory / handmade objects / pseudo-autobiography', period: '1969–1974',
        summary: 'Boltanski 用小物、照片、文字和 staged reconstruction “重建”自己的童年，但这些材料经常半真半假。autobiography 从一开始就不是证据，而是 museum-like fiction。',
        actions: ['从 childhood memory / imagined scene 出发', '手工制作小型 objects', '重新拍摄 / 分类', '使用 matter-of-fact archival titles', '把真实个人 history 与 invented detail 混合', '让展示方式制造证据感'],
        sourceUrl: 'https://www.centrepompidou.fr/fr/ressources/personne/z88xAxH', images: [], relations: []
      },
      {
        title: 'Vitrine de référence', cluster: 'display case / personal remnants / museum authority', period: '1971',
        summary: '照片、头发、纸张、衣物碎片等进入透明 display case，借 museum / ethnographic vitrine 的权威把私人残余物变成“值得保存的历史”，同时也让观众无法知道这些物件究竟证明什么。',
        actions: ['收集 personal / fabricated remnants', '将材料按 archive-like logic 排列', '制作 wooden / glass vitrine', '使用 museum display distance', '用 inventory-like title 强化 institutional reading'],
        sourceUrl: 'https://mediation.centrepompidou.fr/education/ressources/ENS-boltanski_en/ENS-Boltanski_en.htm', images: [], relations: []
      },
      {
        title: 'Les Archives de Christian Boltanski 1965–1988', cluster: '646 tin boxes / sealed documents / archive wall / inaccessible memory', period: '1989',
        summary: '工作室文件与照片被装进 646 个 biscuit-tin-like metal boxes，再堆成墙并以台灯照亮。观众看到巨大的保存系统，却无法逐件打开 / 阅读，archive 由 information storage 变成 opacity。',
        actions: ['整理多年 studio documents / photos', '分装进646个 metal boxes', '封闭内容而不提供完整阅读', '将铁盒堆成高墙', '加入 desk lamps / wires 形成冷硬 memorial light', '让 archive volume 可见但 information 不可取'],
        sourceUrl: 'https://www.centrepompidou.fr/fr/recherche/oeuvres?artiste=Christian+Boltanski', images: [], relations: []
      },
      {
        title: 'Réserve', cluster: 'used clothes / absent bodies / lamps / mass-individual tension', period: '1990',
        summary: '大量旧衣覆盖墙面 / 堆积，与灯光共同组成 installation。衣物仍带身体尺度与使用痕迹，却失去具体 owner，形成“每件都曾属于某人 / 现在却无法辨认谁”的匿名 tension。',
        actions: ['收集 second-hand clothes', '保留磨损和不同尺寸', '将衣物铺墙 / 堆积', '加入 desk lamps / exposed wiring', '控制数量使 single garment 与 mass 同时可见', '不补充个人 biography'],
        sourceUrl: 'https://www.centrepompidou.fr/en/ressources/oeuvre/SQs5OXZ', images: [], relations: []
      },
      {
        title: 'Les Archives du cœur', cluster: 'heartbeat recording / distributed archive / Teshima / biometric trace', period: '2008–',
        summary: 'Boltanski 在世界各地收集参与者 heartbeat recording，并把大量声音档案保存到日本 Teshima。个体身体被压缩成极短 rhythmic signature，同时 archive 可以持续增长。',
        actions: ['设置 heartbeat recording stations', '邀请公众录制自身心跳', '存储 audio + basic identification', '持续跨地点增加数据库', '在 Teshima 建立长期保存 / listening site', '让 biometric trace 替代肖像'],
        sourceUrl: 'https://www.centrepompidou.fr/fr/ressources/personne/z88xAxH', images: [], relations: []
      },
      {
        title: 'Personnes', cluster: 'Grand Palais / thousands of clothes / crane / random fate / heartbeat', period: '2010',
        summary: 'Monumenta 在 Grand Palais 铺设数千件旧衣，并由 crane 随机抓起 / 落下衣物；heartbeat rhythm 充满空间。机械随机动作把“chance / destiny”直接做成可见生产机制。',
        actions: ['收集数千件 used clothes', '在巨大 hall 中铺成 grids / mound', '安装 industrial crane', '程序化 crane 随机抓取 / 释放衣物', '加入 heartbeat sound', '利用 architecture scale 让观众身体被 mass 覆盖'],
        sourceUrl: 'https://mediation.centrepompidou.fr/education/ressources/ENS-Une-histoire/', images: [], relations: []
      },
      {
        title: 'Chance — French Pavilion', cluster: 'baby photographs / conveyor mechanism / random combination / Venice 2011', period: '2011',
        summary: '法国馆项目使用约 600 张 newborn baby photographs 与机械运动，让 face fragments / images 在不断循环中随机组合。“出生”被处理成一台 chance machine，而不是 sentimental baby archive。',
        actions: ['搜集 Polish newspaper newborn photographs', '将 faces / image strips 转入 moving mechanism', '设计 continuous conveyor / mechanical cycle', '让组合由随机运动产生', '利用 pavilion architecture 包围观众', '把 probability / birth / identity 连接到同一 apparatus'],
        sourceUrl: 'https://asac.labiennale.org/collezioni/fototeca/225102', images: [], relations: [rel('展览', 'French Pavilion — 54th Venice Biennale', '2011')]
      }
    ],
    awards: [],
    exhibitions: ['Documenta 5 — Individual Mythologies 1972', 'Centre Pompidou retrospectives 1984 and 2019–2020', 'Personnes — Monumenta 2010', 'French Pavilion — Venice Biennale 2011'],
    sources: [
      { label: 'Centre Pompidou — Christian Boltanski', url: 'https://www.centrepompidou.fr/fr/ressources/personne/z88xAxH' },
      { label: 'Centre Pompidou — Réserve', url: 'https://www.centrepompidou.fr/en/ressources/oeuvre/SQs5OXZ' },
      { label: 'Biennale Archive — Chance', url: 'https://asac.labiennale.org/collezioni/fototeca/225102' }
    ]
  },

  'annette-messager': {
    artistId: 'annette-messager',
    projectCoverage: '7 个 collection / taxidermy / body fragments / textile / motorised installation 节点已建立深档案 · 1971–2007',
    imageCoverage: '0 / 7 项目已有代表图像',
    note: 'Messager 的“私人 / 女性主义”不是靠主题说明，而是通过收集、命名、针织、切割身体照片、绳子悬挂、毛绒玩具和 motors 建立一个不断变形的 material vocabulary。她会把“照顾”与“规训”、“玩具”与“尸体”、“身体碎片”与“祈愿物”故意放在同一形式里。',
    projects: [
      {
        title: 'Les Pensionnaires', cluster: 'taxidermy birds / knitting / vitrines / care and punishment', period: '1971–1972',
        summary: '作品包含 14 vitrines、3 wall elements 和 hanging lamp。大量 taxidermy sparrows 被穿上微型 knitted garments，有些休息、有些被装上 fragile wheel mechanisms、有些被固定在 metal bases；care 与 punishment 无法分开。',
        actions: ['收集 / 使用 taxidermy sparrows', '为 birds 手工编织 miniature clothes', '制作14个 vitrines', '设计 rest / walk / punishment 等情境', '加入 wheels、metal supports、feathers、drawings、documents', '用 suspended bulb 提供弱光', '建立 fictional caretaker / collector identity'],
        sourceUrl: 'https://www.centrepompidou.fr/fr/ressources/oeuvre/cbqjx8X', images: [], relations: [rel('收藏', 'Centre Pompidou', 'acquired 1999')]
      },
      {
        title: 'Albums-collections / Annette Messager collectionneuse', cluster: 'scrapbook / everyday image / taxonomy / fictional roles', period: '1970s',
        summary: 'Messager 以“collectionneuse / truqueuse / artiste”等多个自我角色制作 albums，收集 proverb、newspaper image、childhood material、body / desire fragments。分类行为本身成为 fictional autobiography。',
        actions: ['从 magazines / newspapers / daily life 搜集 images / texts', '按私人 taxonomy 分类', '制作 notebook / album', '为不同 collection 赋予不同 persona', '用 handwriting / clipping 保留 homemade quality', '让 archive category 反过来制造“作者身份”'],
        sourceUrl: 'https://www.centrepompidou.fr/en/ressources/personne/c7G4ej9', images: [], relations: []
      },
      {
        title: 'Mes Vœux', cluster: '263 body-fragment photographs / string / ex-voto / fragmented identity', period: '1989',
        summary: 'Centre Pompidou 版本由 263 张 gelatin-silver body-detail photographs 组成：mouth、eye、hand、breast、sex organ 等被分别装框，以大量可见长绳悬挂成约 320×160cm 椭圆。身体被拆开又像 ex-voto 一样重新聚集。',
        actions: ['拍摄不同人的 anatomy close-ups', '将身体拆成独立小照片', '使用不同 print sizes', '每张装入简单黑边框', '用 visible long strings 悬挂', '通过 overlap / layering 形成 oval cluster', '让 individual body source 不再可还原'],
        sourceUrl: 'https://www.centrepompidou.fr/en/ressources/oeuvre/cxxkL5', images: [], relations: [rel('收藏', 'Centre Pompidou', 'Mes Vœux')]
      },
      {
        title: 'Chimères / stuffed-toy and body environments', cluster: 'soft material / nets / enlarged body / childhood-object unease', period: '1990s',
        summary: 'soft toys、nets、gloves、fabric body fragments 等逐渐占据更大空间。儿童 / 家庭材料失去安慰功能，变成悬挂、困住、裂开的身体替身。',
        actions: ['切割 stuffed toys / textile fragments', '将 parts 重新缝合', '用 nets / strings 进行悬挂或捕获', '放大 anatomy / domestic motifs', '利用 soft material 与暴力动作的反差', '让 viewer 从不同角度进入 dense environment'],
        sourceUrl: 'https://www.centrepompidou.fr/en/ressources/personne/c7G4ej9', images: [], relations: []
      },
      {
        title: 'Articulés-désarticulés', cluster: 'computer-controlled motors / puppets / ropes / documenta 11', period: '2001–2002',
        summary: 'Messager 第一次大规模引入 computer-controlled mechanisation：熟悉的 creature / object 被 ropes 连到 motors，像 puppets 一样不稳定抽动。原来静止的 textile / toy vocabulary 获得被外力操控的身体。',
        actions: ['制作 textile / toy-like figures', '用 ropes 连接 motors', '程序化 movement sequence', '让动作保持 jerk / unstable 而非流畅 animation', '暴露 suspension system', '把 viewer surrounding space 纳入 moving hazard / spectacle'],
        sourceUrl: 'https://www.centrepompidou.fr/en/ressources/personne/c7G4ej9', images: [], relations: [rel('展览', 'documenta 11', '2002')]
      },
      {
        title: 'Casino — French Pavilion', cluster: 'Pinocchio / red inflatable cloth / motorised organs / immersive installation', period: '2005',
        summary: 'Venice 法国馆以 Pinocchio 为松散叙事：观众进入类似 whale entrails 的 environment，巨幅 red cloth 反复 inflate / deflate，fabric organs / puppet forms 被机械系统推起和落下。',
        actions: ['重新阅读 Pinocchio', '将 pavilion 设计为可进入的 organism-like interior', '制作巨大 red textile membrane', '用 mechanical system 让 cloth inflate / collapse', '制作 fabric organs / puppet elements', '通过 movement / air / sound 建立循环', '让观众穿过而非从外观看'],
        sourceUrl: 'https://www.centrepompidou.fr/en/ressources/personne/c7G4ej9', images: [], relations: [rel('奖项', 'Golden Lion — Venice Biennale', '2005'), rel('展览', 'French Pavilion — Venice Biennale', '2005')]
      },
      {
        title: '2007 Centre Pompidou retrospective / monumental falling bodies', cluster: 'survey / nets / enlarged fragments / forum installation', period: '2007',
        summary: 'Centre Pompidou retrospective 把早期 collection 与 motorised works 并置，并在 Forum 制作 monumental work：enlarged body fragments 被 nets 困住 / 下坠，朝一个小 Pinocchio-like figure 聚拢。',
        actions: ['从数十年作品 vocabulary 重新选择 motifs', '放大 body fragments', '制作 large nets / hanging systems', '利用 Forum vertical scale 制造 falling movement', '让早期 intimate object vocabulary 转成建筑尺度', '把 retrospective 变成新 installation 而非只陈列旧作'],
        sourceUrl: 'https://www.centrepompidou.fr/en/ressources/personne/c7G4ej9', images: [], relations: [rel('展览', 'Annette Messager retrospective — Centre Pompidou', '2007')]
      }
    ],
    awards: ['Golden Lion — Venice Biennale 2005'],
    exhibitions: ['documenta 11 — 2002', 'French Pavilion — Venice Biennale 2005', 'Centre Pompidou retrospective 2007'],
    sources: [
      { label: 'Centre Pompidou — Annette Messager', url: 'https://www.centrepompidou.fr/en/ressources/personne/c7G4ej9' },
      { label: 'Centre Pompidou — Les Pensionnaires', url: 'https://www.centrepompidou.fr/fr/ressources/oeuvre/cbqjx8X' },
      { label: 'Centre Pompidou — Mes Vœux', url: 'https://www.centrepompidou.fr/en/ressources/oeuvre/cxxkL5' }
    ]
  },

  'bouchra-khalili': {
    artistId: 'bouchra-khalili',
    projectCoverage: '8 个 migration map / direct speech / civic platform / revolutionary archive 节点已建立深档案 · 2008–2018',
    imageCoverage: '0 / 8 项目已有代表图像',
    note: 'Khalili 的方法不是替 migration / minority “发声”，而是严格设计一个让参与者自己组织 speech 的 protocol：固定镜头、一张地图、一支 permanent marker、一段 uninterrupted voice；或把 blackboard、public speech、archival film 变成 civic platform。她经常刻意不拍 face，让 political subjectivity 通过 hand、voice、gesture 和 editing 出现。',
    projects: [
      {
        title: 'The Mapping Journey Project', cluster: '8-channel video / migration / map / hand + voice / one long take', period: '2008–2011',
        summary: '八位因政治 / 经济条件进行 clandestine migration 的人，在 map 上用 permanent marker 重画自己的 Mediterranean journey。MoMA 资料说明每段都坚持 one long shot、one map、one hand、one voice、one trajectory；faces 不出现。',
        actions: ['在 Europe、North Africa、Middle East transit hubs 偶遇 / 认识参与者', '邀请其自主讲述 journey', '固定 camera 对准 map 与 hand', '提供 thick permanent marker', '每个 testimony 以 long take 拍摄而不切镜头', '保留参与者自己的 language', '对非英语 voice 加 subtitle', '八段在空间中以独立 screens 共同组成 alternative geopolitical map'],
        sourceUrl: 'https://www.moma.org/calendar/exhibitions/1627', images: [], relations: [rel('收藏', 'MoMA', 'eight-channel video')]
      },
      {
        title: 'The Constellations Series', cluster: 'silkscreen / migration routes / star map / abstraction', period: '2011',
        summary: 'Mapping Journey 中复杂路线进一步被转成 constellation-like graphic。具体国境 / 路线不再是地图权威线，而像星座一样由个人 movement 重新连接。',
        actions: ['从八段 map drawings 提取 trajectory', '简化成 points / lines', '转换为 constellation visual language', '制作 silkscreen prints', '让 map authority 转成 personal navigation system'],
        sourceUrl: 'https://jeudepaume.org/evenement/bouchra-khalili-2/', images: [], relations: []
      },
      {
        title: 'The Seaman', cluster: 'worker testimony / global trade / perpetual transit', period: '2012',
        summary: '一位 Filipino sailor 从自身劳动位置讲述 globalised trade 与不断移动的生活。作品继续把宏观系统交给具体 worker voice，而不是由 artist narrator 解释 shipping economy。',
        actions: ['与 migrant / mobile worker 建立对话', '让 participant 以自身经验组织叙事', '使用克制 moving-image framing', '保留 labour / exile 的第一人称语言', '避免补拍解释性 global-trade spectacle'],
        sourceUrl: 'https://jeudepaume.org/evenement/bouchra-khalili-2/', images: [], relations: []
      },
      {
        title: 'Speeches — Mother Tongue / Words on Streets / Living Labour', cluster: 'public speech / language / citizenship / labour / trilogy', period: '2012–2013',
        summary: '三部 video 分别围绕 linguistic community、citizenship 与 working-class identification。参与者引用 /重演重要政治文本，不是作为演员复读，而是把 historic political language 放进自己的身体、口音和当下处境。',
        actions: ['选择与 participant experience 有关系的 political / civic texts', '由参与者决定如何朗读 / performance', '保持 direct speech 与简单 framing', '让不同 language / accent 保持可听', '以 trilogy 比较不同 forms of belonging', 'Living Labour 制作为25分钟 color sound video'],
        sourceUrl: 'https://www.moma.org/collection/works/284000', images: [], relations: [rel('收藏', 'MoMA', 'Speeches – Chapter 3: Living Labour')]
      },
      {
        title: 'Foreign Office', cluster: 'Algiers 1962–72 / liberation movements / archival film / photographs / silkscreen', period: '2015',
        summary: '项目研究 1962–72 Algiers 作为 anticolonial liberation movements 国际节点的历史。digital film、photographs 与 silkscreen 共同追踪那些已从城市视觉记忆中消失的办公室 /组织与 political internationalism。',
        actions: ['研究 Algiers independence-era political organisations', '搜集 liberation movement archives', '定位旧 office / meeting sites', '拍摄当代城市 traces', '让年轻 protagonists 阅读 / 重组 historical materials', '制作 digital film + photographs + silkscreen', '用 montage 处理 utopia history 的 transmission'],
        sourceUrl: 'https://jeudepaume.org/mediateque/magazine-bouchra-khalili-foreign-office-2015/', images: [], relations: []
      },
      {
        title: 'The Tempest Society', cluster: 'Athens / Al Assifa / blackboard / civic theatre / radical equality', period: '2017',
        summary: '三位 Athens protagonists 组成“Tempest Society”，回看 1970s Paris migrant-worker theatre collective Al Assifa，并把 contemporary Greece、citizenship 与 Mediterranean politics 带入同一 blackboard / theatrical-civic platform。',
        actions: ['研究 Al Assifa archive / testimony', '与 Athens 三位 protagonists 共同工作', '在 abandoned factory 建立 stage / civic meeting space', '让 participants 在 blackboard 写 names / constellation', '把 historic struggle 与 contemporary speech 交叉', '以 long discussion / performance 构成 film', '让 blackboard 成为 collective thinking surface'],
        sourceUrl: 'https://jeudepaume.org/mediateque/magazine-bouchra-khalili-the-tempest-society/', images: [], relations: [rel('展览', 'documenta 14', '2017')]
      },
      {
        title: 'Twenty-Two Hours', cluster: 'Jean Genet / Black Panther Party / allyship / film history / testimony', period: '2018',
        summary: '作品追踪 Jean Genet 1970 年与 Black Panther Party 的 solidarity / US journey，进一步讨论 allyship、poetry 与 collective emancipation。历史不是靠 heroic archival biography，而由 interviews、documents 与 film montage 重新传递。',
        actions: ['研究 Jean Genet / Black Panthers historical record', '寻找 witnesses / participants / archival traces', '拍摄 interviews 与 contemporary locations', '使用 documents / photographs / moving image montage', '避免把 allyship 简化成 celebrity biography', '将 transmission itself 作为 narrative question'],
        sourceUrl: 'https://jeudepaume.org/evenement/bouchra-khalili-2/', images: [], relations: []
      },
      {
        title: 'Civic platform as image-making method', cluster: 'meta-method / visibility refusal / hand-voice-text / political agency', period: '2008–现在',
        summary: 'Khalili 的稳定方法是先设计 representation rule，再把 speech organisation 交给 participant。她常减少 face visibility，不让 camera 通过 facial recognition 把 subject 重新变成被观察对象。',
        actions: ['先定义 simple filming protocol', '把 participant voice / hand / writing 保留为主要 action', '避免 over-editing testimony', '使用 subtitle 但保留 original speech', '将 map / blackboard / text 当作共同生产 surface', '让 installation 同时容纳多个不可合并的声音'],
        sourceUrl: 'https://www.moma.org/audio/playlist/284/3691', images: [], relations: []
      }
    ],
    awards: [],
    exhibitions: ['The Mapping Journey Project — MoMA 2016', 'The Tempest Society — documenta 14 2017', 'Blackboard — Jeu de Paume 2018'],
    sources: [
      { label: 'MoMA — The Mapping Journey Project', url: 'https://www.moma.org/calendar/exhibitions/1627' },
      { label: 'MoMA — Living Labour', url: 'https://www.moma.org/collection/works/284000' },
      { label: 'Jeu de Paume — Blackboard survey', url: 'https://jeudepaume.org/evenement/bouchra-khalili-2/' },
      { label: 'Jeu de Paume — Foreign Office', url: 'https://jeudepaume.org/mediateque/magazine-bouchra-khalili-foreign-office-2015/' }
    ]
  }
};