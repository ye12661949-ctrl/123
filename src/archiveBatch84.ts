import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const simeVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/elias-sime';
const simeTightrope = 'https://www.metmuseum.org/art/collection/search/703116';
const simeSelecha = 'https://www.metmuseum.org/art/collection/search/320478';
const simeAnts = 'https://www.metmuseum.org/art/collection/search/857212';

const ikedaVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/tatsuo-ikeda';

const katzVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/allison-katz';
const katzArtery = 'https://camdenartcentre.org/whats-on/allison-katz-artery';
const katzPosters = 'https://camdenartcentre.org/whats-on/artery-posters-2012-2021';
const katzWestward = 'https://www.hauserwirth.com/hauser-wirth-exhibitions/41953-allison-katz-westward-ho/';

const jamianVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/jamian-juliano-villani';
const jamianGagosian = 'https://gagosian.com/artists/jamian-juliano-villani/';

const vogelVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/raphaela-vogel';
const vogelPetzel = 'https://www.petzel.com/artists/raphaela-vogel/exhibition-views?view=slider';
const vogelKUB = 'https://www.kunsthaus-bregenz.at/en/press/raphaela-vogel-bellend-bin-ich-aufgewacht';

const mujingaVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/sandra-mujinga';

export const archiveBatch84: Record<string, ArtistArchive> = {
  'venice-elias-sime': {
    artistId: 'venice-elias-sime',
    projectCoverage: '4 个 found-material / stitching / e-waste abstraction 节点已建立深档案 · 2008–2021',
    imageCoverage: '0 / 4 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Sime 的电子废料并不是科技主题装饰，而延续他更早以 goat hide、synthetic fibre、stitching 和 local-market objects 工作的方法：材料先被收集、拆开、编织与缝合，再组成近绘画尺度的表面。',
    projects: [
      {
        title: 'What is Love? / Selecha',
        cluster: 'goat hide / synthetic fibre / collective gift / stitched sculpture',
        period: '2008',
        summary: 'What is Love? 收集 115 个传统 selecha——用于储存谷物、牛奶或蜂蜜的 goatskin vessel——再以彩色 synthetic cord 缝制。每件皮囊本身来自个人赠予，保留气味、皮肤和原有使用痕迹。',
        actions: [
          '花约一年从个人与地方环境中收集已经稀少的 traditional goatskin containers',
          '保留 untanned hide、straw stuffing 与动物身体痕迹，不把材料处理成中性皮革',
          '以彩色 plastic / synthetic fibre 在皮面上手工缝制不同 pattern',
          '让不同 selecha 在安装中彼此倚靠、堆叠或独立站立，形成近群体身体的关系',
          '把赠予行为、触觉和气味纳入作品经验，而不只依赖视觉图案',
        ],
        sourceUrl: simeSelecha,
        images: [],
        relations: [rel('收藏', 'The Metropolitan Museum of Art', 'Selecha · 2008')],
      },
      {
        title: 'Ants & Ceramicists',
        cluster: 'stitching / metal containers / textile-to-assemblage transition',
        period: '2009–2011',
        summary: '这一十五件系列仍依赖密集 stitching，但开始把 cotton、metal、synthetic fibre、paint 和 dye 合成更复杂的 surface。系列完成后 Sime 停止以 stitching 为主，转向 mixed-media assemblage。',
        actions: [
          '把 cotton、metal container 与 synthetic fibres 组合成可悬挂的二维 / 浅浮雕结构',
          '持续使用 sewing / stitching 构造密集纹理，而不是以 brushstroke 模拟织物',
          '让 industrial metal 与 handmade textile labour 保持同时可辨识',
          '在这一系列之后主动转向 mixed-media assemblage，使手工编织逻辑进入电子零件作品',
        ],
        sourceUrl: simeAnts,
        images: [],
        relations: [rel('收藏', 'The Metropolitan Museum of Art', 'Ants & Ceramicists 4 · 2009–2011')],
      },
      {
        title: 'Tightrope 5.1',
        cluster: 'e-waste / braided copper wire / monumental assemblage',
        period: '2009–2014',
        summary: 'Tightrope 5.1 用从 Addis Ababa Menalesh Tera 市场取得的废弃电话线覆盖巨大 fiberboard。Sime 与当地女性协作者以编织 / braid 技法处理亮色 copper wire，把全球电子废料转成具有织物密度的巨幅结构。',
        actions: [
          '从 Menalesh Tera open-air market 收集 discarded telephone wire / e-waste',
          '拆分、筛选不同颜色包覆的 copper electrical wire',
          '使用从当地女性学到的 braiding technique，并与 women collaborators 一起生产',
          '将数以千计 wire sections 钉 / 编到 fiberboard 上，形成 3 米级 wall assemblage',
          '让 craft labour、global e-waste flow 与 colour-field-like abstraction 同时存在',
        ],
        sourceUrl: simeTightrope,
        images: [],
        relations: [rel('收藏', 'The Metropolitan Museum of Art', 'Tightrope 5.1 · 2009–2014')],
      },
      {
        title: 'Red Leaves / Veiled Whispers',
        cluster: 'microchips + type keys + electrical wire / satellite-landscape abstraction',
        period: '2021',
        summary: '为 Venice 2022 创作的新作把 electrical wires、type keys、microchips 与 computer hardware 组织成 pink、green、purple 的大尺度表面；从远处像 colour-field 或 aerial landscape，靠近后才显出被淘汰技术的劳动密度。',
        actions: [
          '收集 obsolete microchips、type keys、computer parts 与 electrical wire',
          '按 colour / size / component type 大量分类，再以手工方式密集拼装',
          '借 Ethiopian carving、weaving、building ritual 的 pattern logic 组织 contemporary mass-produced components',
          '从 aerial / satellite landscape 的 grid 与 colour field 提取整体构图',
          '利用远看抽象、近看 e-waste 的尺度切换制造观看层级',
        ],
        sourceUrl: simeVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Arsenale · three 2021 works')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'La Biennale · Elias Sime 2022', url: simeVenice },
      { label: 'The Met · Tightrope 5.1', url: simeTightrope },
      { label: 'The Met · Selecha', url: simeSelecha },
      { label: 'The Met · Ants & Ceramicists 4', url: simeAnts },
    ],
  },

  'venice-tatsuo-ikeda': {
    artistId: 'venice-tatsuo-ikeda',
    projectCoverage: '1 个官方核实的核心 corpus 已建立深档案 · 1963–1965',
    imageCoverage: '0 / 1 项目暂不使用不稳定外链图像',
    note: '当前先把官方资料最明确的 Elliptical Space 做深。Ikeda 其他战后纸上系列后续再按作品档案核名，不为了数量把政治阶段误写成虚构项目。',
    projects: [
      {
        title: 'Elliptical Space',
        cluster: 'paper drawing / micro-biotic anatomy / anti-imperialist surrealism',
        period: '1963–1965',
        summary: '日美安全保障条约带来的政治挫败后，Ikeda 从外部军事现实进一步转向人体内部与意识的微观空间：planet-like orbits、器官、建筑和数百个轮廓小形体互相嵌套，形成无法被单一尺度解释的 surreal biological cosmos。',
        actions: [
          '主要以 drawing / painting on paper 工作，而非转向大型政治宣传画',
          '从人体 anatomy、consciousness 与 microbiotic scale 提取内部结构',
          '画出大量 contoured figures，并像 puzzle pieces 一样密集嵌合',
          '让 planetary orbit 与 bodily / architectural form 互相转换，取消“宇宙 / 身体”尺度差异',
          '以 anti-imperialist、anti-nationalist、pacifist political experience 作为作品生成背景，但不直接使用宣传标语',
        ],
        sourceUrl: ikedaVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Arsenale · posthumous presentation')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Tatsuo Ikeda 2022', url: ikedaVenice }],
  },

  'venice-allison-katz': {
    artistId: 'venice-allison-katz',
    projectCoverage: '3 个 painting-poster / autobiography-system / Venice autofiction 节点已建立深档案 · 2012–2023',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Katz 的 recurring motifs——cocks、cabbages、mouths、noses、waterways 与自己的名字——会在 painting、poster、ceramic 和 installation 之间迁移；图像不是一次性“题材”，而像个人语汇不断在不同载体中改写。',
    projects: [
      {
        title: 'Posters 2012–2021',
        cluster: 'announcement poster / typography / exhibition-site feedback loop',
        period: '2012–2021',
        summary: 'Katz 为自己不同展览长期制作 announcement posters，并把地点建筑、季节、展览标题和 recurring imagery 编进 graphic design。poster 既宣传展览，也会反过来被后续 painting 再利用。',
        actions: [
          '为每次 exhibition 制作 site-specific announcement poster，而非统一 gallery branding',
          '引用建筑细节、季节、地点 iconography 与 exhibition title',
          '在 typography、language、advertising trope 与 recurring motifs 之间建立新组合',
          '让 poster image 之后重新进入 painting / ceramic / later posters，形成 feedback loop',
          '将十年 poster archive 重新作为独立 installation 展示',
        ],
        sourceUrl: katzPosters,
        images: [],
        relations: [rel('展览', 'Posters 2012–2021 — Canada House / Artery satellite', '2022')],
      },
      {
        title: 'Artery',
        cluster: '20+ paintings / ceramics / autobiography + image systems',
        period: '2021–2022',
        summary: 'Artery 由二十多幅近十八个月完成的 paintings、hand-painted ceramics 和 posters 构成。biography、dream objects、art history 和 everyday life 被当作可持续互相循环的 image system，而不是按主题分房间。',
        actions: [
          '持续从 own biography、dream objects、art-history references 与 everyday imagery 建立素材池',
          '制作 20+ paintings，同时保留 gouache、ceramics 与 poster practice',
          '让 recurring motifs 在不同作品中变形重复，而不是每张画追求完全新 subject',
          '将 painting、ceramic 与 poster 在同一 exhibition rhythm 中编排',
        ],
        sourceUrl: katzArtery,
        images: [],
        relations: [rel('展览', 'Artery — Nottingham Contemporary / Camden Art Centre', '2021–2022')],
      },
      {
        title: 'Birth Canal / Milk glass / Be nice / Night Philosophy',
        cluster: 'Venice clichés / auto-fiction / Murano glass + painting reference system',
        period: '2022',
        summary: 'Venice 新作故意用城市 cliché 做 image engine：Montréal canal 替代 Venice canal，Murano glass octopus 在画中反射，Be nice 用发音双关把 fighting cocks 与 Venice 的 finance / art history 接起来。',
        actions: [
          '把 birthplace Montréal 的 canal 画成 Venice cliché 的 substitute，形成 autobiographical displacement',
          '将 Venetian Murano glass octopus 真实制作 / 引用并重新嵌入 painting imagery',
          '使用 Be nice / Venice 的 near-homonym 将 wordplay 变成构图入口',
          '同时引用 William Blake、Degas、childhood multiple-exposure photograph 与 Venice-set film imagery',
          '把一组不同来源画面编辑为 auto-fictional index，而非统一叙事情节',
        ],
        sourceUrl: katzVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: [],
    exhibitions: ['Artery — Nottingham Contemporary / Camden Art Centre 2021–2022', 'The Milk of Dreams — Venice Biennale 2022', 'Westward Ho! — Hauser & Wirth 2023–2024'],
    sources: [
      { label: 'La Biennale · Allison Katz 2022', url: katzVenice },
      { label: 'Camden Art Centre · Artery', url: katzArtery },
      { label: 'Camden Art Centre · Posters 2012–2021', url: katzPosters },
      { label: 'Hauser & Wirth · Westward Ho!', url: katzWestward },
    ],
  },

  'venice-jamian-juliano-villani': {
    artistId: 'venice-jamian-juliano-villani',
    projectCoverage: '3 个 image-hoarding / painting-machine / cinematic-landscape 节点已建立深档案 · 2020–2023',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Juliano-Villani 所谓“poor man’s Photoshop”是具体工作流：电影、meme、stock image、art history 与印刷品先被大量搜集，再用投影 / airbrush / acrylic 手工拼成看似数字 montage 的画面。',
    projects: [
      {
        title: 'Chef Mike',
        cluster: 'painting + microwave + LED + mirror + sound',
        period: '2020',
        summary: 'Chef Mike 将 acrylic painting 与真实 microwave、custom LED、mirror 和 speaker 组合，使 painting 不再只是图像表面，而成为带消费电器、灯光和声音的 object-installation。',
        actions: [
          '制作 acrylic-on-canvas image，同时保留大量 borrowed / collected imagery 的 montage logic',
          '将 real microwave 与 canvas 物理结合，而非在画面中描绘 appliance',
          '加入 customised LED lights、mirror 与 speaker 扩展观看环境',
          '让 everyday commodity object 与 painting image 共享同一荒诞叙事空间',
        ],
        sourceUrl: jamianGagosian,
        images: [],
        relations: [],
      },
      {
        title: 'The Arm',
        cluster: 'kinetic installation / ping-pong table / electronics',
        period: '2021',
        summary: 'The Arm 使用 plastic cups、ping-pong table、MDF、string 与 electronics 构成大尺度机械装置，显示她的 image logic 可从 canvas 直接扩展成真实机器 / 游戏空间。',
        actions: [
          '以 ping-pong table 作为现成空间基础，而非 pedestal',
          '加入 plastic cups、MDF、strings 与 electronic components 构成可运动 / 可触发结构',
          '将 painterly absurdity 转成观众可在空间中感知的 physical mechanism',
          '让 low-tech construction 与 pop-cultural imagery 的廉价感保持一致',
        ],
        sourceUrl: jamianGagosian,
        images: [],
        relations: [],
      },
      {
        title: 'Napkin Folding / Venice cinematic landscapes',
        cluster: 'airbrush painting / borrowed film imagery / false nostalgia',
        period: '2022',
        summary: 'Venice 2022 新画从 Peter Greenaway《The Pillow Book》和 Jonathan Demme《Beloved》等电影中提取 charged landscape tropes。borrowed images 被手工 airbrush 成异常光滑的 montage，用“假的历史感 / 怀旧感”回应疫情期间时间被压扁的经验。',
        actions: [
          '从 movies、memes、stock photography、art history 与 collected printed matter 大量选取 source images',
          '以投影 / transfer / airbrush acrylic 等手工步骤完成看似 Photoshop compositing 的画面',
          '挑选具有 cinematic nostalgia 的 landscape trope，而非复制单一电影 still',
          '将互不相关 source image 精确拼接，让 scale、light 与 horizon 看似统一但逻辑冲突',
          '用 false historical atmosphere 对照 pandemic 期间 relentless presentness',
        ],
        sourceUrl: jamianVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'La Biennale · Jamian Juliano-Villani 2022', url: jamianVenice },
      { label: 'Gagosian · artist works archive', url: jamianGagosian },
    ],
  },

  'venice-raphaela-vogel': {
    artistId: 'venice-raphaela-vogel',
    projectCoverage: '3 个 video-sculpture / animal-remnant / diseased-anatomy 节点已建立深档案 · 2018–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Vogel 的环境把 scanner、drone、digital editing、animal hide、toy animal、soundtrack 与 grotesque anatomical sculpture 拼成一个 world-building system；影像、支架、动物残骸和音乐从不作为彼此背景。',
    projects: [
      {
        title: 'Uterusland / Ultranackt',
        cluster: 'video-sculpture / urinal / surveillance-performance image',
        period: '2018',
        summary: 'Ultranackt 阶段确立她把 performance-based film 嵌进 sculpture 的方式。Uterusland 将 urinal 转成 wall sculpture，并在物体内部嵌入 video，使 abject everyday object 同时变成观看 / 被观看装置。',
        actions: [
          '拍摄以自身 performance 为核心的 short video，并使用 digital editing / surveillance-like perspective',
          '将 functional urinal 改造成 wall-mounted sculpture，而不隐藏 readymade origin',
          '把 small video display 嵌进 object body，使观众必须靠近才能看到 moving image',
          '利用 voyeurism、control 与 physical trespass 将 screen 与 sculpture 绑定',
        ],
        sourceUrl: vogelPetzel,
        images: [],
        relations: [rel('展览', 'Ultranackt — Kunsthalle Basel', '2018')],
      },
      {
        title: 'Bellend bin ich aufgewacht / In festen Händen',
        cluster: 'multimedia environment / animal hide / mythic relic / dark sound',
        period: '2019–2020',
        summary: 'Kunsthaus Bregenz 与后续作品将 cow / goat / lion / elk hide、leather fragments、toy animals、video 和 abrasive soundtrack 组成 ritual-like environments，动物身体既像 trophy、relic，也像被重新拼装的未来生物。',
        actions: [
          '使用 natural / synthetic animal parts 与 hides，而非只拍摄动物图像',
          '将 leather fragment、toy dinosaur、horse statuette 等 low/high materials 混合',
          '以 scanner、drone 与 sophisticated editing 制作 accompanying moving image',
          '加入 dark / screeching soundtrack，使 sound 成为空间压力而非背景音乐',
          '按 exhibition architecture 重组 sculpture、screen 与 suspended material 的关系',
        ],
        sourceUrl: vogelKUB,
        images: [],
        relations: [rel('展览', 'Bellend bin ich aufgewacht — Kunsthaus Bregenz', '2019–2020')],
      },
      {
        title: 'Venice diseased-penis carriage installation',
        cluster: 'giant anatomical model / disease plates / white-giraffe carriage',
        period: '2022',
        summary: 'Venice 新作把巨型彩色 penis anatomical model 做成同时患有 prostate / testicular cancer、genital warts、erectile dysfunction 的 cartoonish body，放在 carriage 上，再由一队 white giraffes 拉动其贵族式形象。',
        actions: [
          '制作 large-scale anatomical penis model，并把多种具体疾病 / condition 可视化在同一器官上',
          '加入 explanatory plates，让医学分类语言与 grotesque sculpture 并置',
          '把 fragmentary body 安排在 carriage 上，赋予 aristocratic / ceremonial transport format',
          '制作 / 配置 fleet of white giraffes 作为牵引者，使 animal hierarchy 与 human sexual organ 倒置',
          '用 humour、fantasy 与 medical detail 同时处理 masculinity / bodily vulnerability',
        ],
        sourceUrl: vogelVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: [],
    exhibitions: ['Ultranackt — Kunsthalle Basel 2018', 'Bellend bin ich aufgewacht — Kunsthaus Bregenz 2019–2020', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'La Biennale · Raphaela Vogel 2022', url: vogelVenice },
      { label: 'Petzel · Raphaela Vogel exhibition history', url: vogelPetzel },
      { label: 'Kunsthaus Bregenz · Bellend bin ich aufgewacht', url: vogelKUB },
    ],
  },

  'venice-sandra-mujinga': {
    artistId: 'venice-sandra-mujinga',
    projectCoverage: '3 个 empty-body / tulle-sentinel / fossil-upcycling 节点已建立深档案 · 2019–2021',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Mujinga 将 camouflage、nocturnality 与 science-fiction world-building 当成 survival strategy：巨大 hooded body、tulle skin 与 dinosaur-like textile remains 都不是“怪物造型”，而是关于如何隐藏、观察和在灾难时代适应的身体技术。',
    projects: [
      {
        title: 'Mókó, Libwá, Zómi, Nkáma',
        cluster: 'hooded empty bodies / neon-green environment / Lingala naming',
        period: '2019',
        summary: '四件 larger-than-life hooded figures 是“没有内部的身体”：human-shaped cloaks 延伸出 tentacle / trunk-like textile limbs，并置于震动的 neon-green light 中。Lingala titles 保持具体命名，同时形态拒绝稳定 species。',
        actions: [
          '制作 human-scale 以上的 textile cloak bodies，但不填充可见内部 anatomy',
          '延长 fabric limbs，使 arms 同时像 tentacle、trunk 与 cyborg appendage',
          '以 Lingala 数词 / naming system 命名不同个体',
          '把四件置入 neon-green light environment，使 colour 改变观众和 textile 的可见性',
          '以 empty shell / camouflage 讨论 presence 通过 absence 获得保护',
        ],
        sourceUrl: mujingaVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — Venice Biennale', '2022 presentation referenced 2019 quartet')],
      },
      {
        title: 'Míbalé, Mísatóxi, Mínei, Mítáno',
        cluster: 'tulle / elongated limbs / nocturnal sentinel body',
        period: '2020',
        summary: 'tulle sculptures 将身体进一步拉长，long arms 与 animal-like outline 让 figures 高悬 / 俯视观众。透明轻薄材料与巨大尺度产生矛盾：身体既可见又像随时会从黑暗中消失。',
        actions: [
          '使用 tulle 等 semi-transparent textile 构建巨大 human-animal hybrids',
          '夸张 arms / limb length，使 body proportion 更接近 sentinel / nocturnal creature',
          '利用 material translucency 让背景光线穿透，削弱 solid body 的边界',
          '把 viewer 置于 figure 下方，使 watching / being watched 的方向倒转',
        ],
        sourceUrl: mujingaVenice,
        images: [],
        relations: [],
      },
      {
        title: 'Reworlding Remains / Sentinels of Change',
        cluster: 'upcycled textile / dinosaur fossil / decay + rebuilding',
        period: '2021',
        summary: '两组作品以 dinosaur fossils 为想象起点，用 upcycled textiles 构成似骨架 / 残骸的巨大形体。material reuse 让 decay 与 reconstruction 同时发生，未来生物并非“新造”，而从旧世界残余中生成。',
        actions: [
          '收集 / 使用 upcycled textiles 作为主要构造材料，而非全新统一 fabric',
          '从 dinosaur fossil / prehistoric remains 提取 spine、limb、shell-like structural cues',
          '把 textile 拉伸、悬挂、缝接成既像 skeleton 又像 skin 的 liminal body',
          '通过巨大尺度和 sentinel posture 让 sculpture 同时具备保护 / 威胁感',
          '把 material decay、reuse 与 speculative rebuilding 放在同一时间线上',
        ],
        sourceUrl: mujingaVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Sandra Mujinga 2022', url: mujingaVenice }],
  },
};