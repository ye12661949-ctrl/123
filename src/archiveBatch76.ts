import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const constantEarthquake = 'https://vitalmatters.fowler.ucla.edu/artworks/haiti-madi-12-janvye-2010';
const constantFowler = 'https://fowler.ucla.edu/exhibitions/myrlande-constant/';
const constantVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/myrlande-constant';

const goldinBallad = 'https://www.moma.org/calendar/exhibitions/1651';
const goldinVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/nan-goldin';
const goldinSisters = 'https://gagosian.com/exhibitions/2024/nan-goldin-sisters-saints-sibyls/';

const nikiMoma = 'https://www.moma.org/collection/artists/1444';
const nikiFoundation = 'https://nikidesaintphalle.org/niki-de-saint-phalle/biography/';
const nikiGarden = 'https://nikidesaintphalle.org/niki-de-saint-phalle/public-works/';
const nikiVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/niki-de-saint-phalle';

const regoGallery = 'https://www.victoria-miro.com/artists/238-paula-rego/works/artworks29909/';
const regoAbortion = 'https://www.victoria-miro.com/artworks/38728/';
const regoCrivelli = 'https://www.nationalgallery.org.uk/exhibitions/past/paula-rego-crivelli-s-garden';

const paulinoPinacoteca = 'https://pinacoteca.org.br/programacao/exposicoes/rosana-paulino-a-costura-da-memoria/';
const paulinoMemory = 'https://oraculo.pinacoteca.org.br/';
const paulinoGallery = 'https://mendeswooddm.com/artists/35-rosana-paulino/';
const paulinoVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/rosana-paulino';

const morelosVenice = 'https://www.labiennale.org/en/art/2022/milk-dreams/delcy-morelos';
const morelosMoradas = 'https://www.diaart.org/program/calendar/poetry-reading-moradas-learning-program-02082024/period/2024-01-27';
const morelosDia = 'https://diaart.org/about/press/exhibition-of-newly-commissioned-immersive-earth-installations-by-delcy-morelos-to-open-at-dia-chelsea-this-fall/type/text';

export const archiveBatch76: Record<string, ArtistArchive> = {
  'venice-myrlande-constant': {
    artistId: 'venice-myrlande-constant',
    projectCoverage: '3 个 drapo Vodou / 历史叙事 / 珠饰绘画关键节点已建立深档案 · 2012–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Constant 的关键不只是“手工珠绣”，而是把 drapo Vodou 从较固定的祭仪旗帜推进成巨幅、叙事性极强的 bead painting：历史事件、社区生活、lwa、天主教圣徒和当代图像被压进同一发光表面。',
    projects: [
      {
        title: 'Haiti Madi 12 Janvye 2010',
        cluster: 'earthquake testimony / beaded textile / communal memory',
        period: '2012',
        summary: 'Constant 用一年时间把 2010 年海地地震之后自己在社区看到的痛苦、互助、墓地与城市废墟缝进同一幅巨型珠饰织物。城市和墓园在同一平面上坍缩，Gede、Grann Brijit、Bawon Samdi 等与死亡和再生相关的 lwa 占据前景。',
        actions: [
          '以 2010 年地震后的亲历社区经验作为图像来源，而不是从新闻照片直接转描',
          '在大幅 fabric 上用 beads、sequins 与线逐步建立人物、建筑、墓地和 lwa',
          '将 cityscape 与 tombs 压在同一画面，不使用传统透视区分现实空间与精神空间',
          '用紫、白、黑等 funerary / Gede 色彩编码死亡、性与再生',
          '通过反光珠面让观看角度与光线实际改变人物和神灵的可见度',
        ],
        sourceUrl: constantEarthquake,
        images: [],
        relations: [rel('展览', 'Myrlande Constant: The Work of Radiance — Fowler Museum at UCLA', '2023 retrospective')],
      },
      {
        title: 'Rasanbleman Soupe Tout Eskòt Yo',
        cluster: 'communal feast / monumental drapo / tambour stitch',
        period: '2019',
        summary: '这件巨幅作品把集体聚餐、仪式与 lwa 的共处变成密集的 narrative field。Constant 以 tambour stitch 与珠饰代替传统绘画颜料，让人物关系通过轮廓、密度、反光和边框不断向外扩张。',
        actions: [
          '在大面积布面上先建立人物与场景的总体叙事关系',
          '用 tambour stitch 逐段固定 beads / sequins，使线条本身形成连续轮廓',
          '让人物、神灵、器物和装饰图案几乎没有空白地填满画面',
          '通过不同 bead size / colour / reflectivity 建立绘画式明暗，而不是使用颜料调色',
          '在工作室协作体系中组织多名助手完成长时间高密度手工制作',
        ],
        sourceUrl: constantFowler,
        images: [],
        relations: [rel('展览', 'Myrlande Constant: The Work of Radiance — Fowler Museum at UCLA', '2023')],
      },
      {
        title: 'Sirenes / GUEDE (Baron)',
        cluster: 'Vodou cosmology / hybrid bodies / Venice presentation',
        period: '2020；Venice 2022',
        summary: 'Sirenes 让人、动物与神话身体彼此变形，并穿插 electric guitars、albino fish 等当代图像；GUEDE (Baron) 则围绕死亡与生育的 spirits、altar、cross 与 pentagram 建立高度拥挤的宗教图像系统。',
        actions: [
          '把 Vodou lwa、Catholic saints 与当代日常图像放入同一叙事层级',
          '使用大约两米尺度的 stretched textile，让 drapo 从仪式对象扩展成接近 mural 的观看尺度',
          '以 hand-beading 描出人体向 animal / mythic creature 的连续变形',
          '用边框、符号与纯装饰珠饰同时承担叙事和视觉节奏',
          '在 Venice 2022 中将这套 bead-based sacred / contemporary image system 放入国际主展语境',
        ],
        sourceUrl: constantVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022', 'The Work of Radiance — Fowler Museum at UCLA 2023'],
    sources: [
      { label: 'Fowler Vital Matters · Haiti Madi 12 Janvye 2010', url: constantEarthquake },
      { label: 'Fowler Museum · The Work of Radiance', url: constantFowler },
      { label: 'La Biennale · Myrlande Constant 2022', url: constantVenice },
    ],
  },

  'venice-nan-goldin': {
    artistId: 'venice-nan-goldin',
    projectCoverage: '3 个 diary slideshow / found-footage film / family archive video 关键阶段已建立深档案 · 1979–2022',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Goldin 的方法核心不是“抓拍风格”，而是把自己和朋友的生活持续拍成可重排档案，再通过 slideshow、音乐、voice-over 与 multi-channel installation 不断改写观看顺序。',
    projects: [
      {
        title: 'The Ballad of Sexual Dependency',
        cluster: 'live slideshow / chosen family / evolving sequence',
        period: '1979–1986；持续修订至后期',
        summary: 'Ballad 由约 700 张彩色照片与音乐组成，主角是 Goldin 自己的恋人、朋友和 chosen family。它最初不是固定影集，而是在酒吧、俱乐部和 loft 中以手动换片、现场配乐的方式不断重排。',
        actions: [
          '长期拍摄自己与朋友的爱情、性、争执、家庭、夜生活、疾病与死亡，而不在“私人生活”和“作品素材”之间设边界',
          '把不同年份的 35mm slides 放入可反复改动的 sequence',
          '早期现场演出时手动换片，并由朋友协助制作 soundtrack',
          '让同一张照片在不同版本里因前后图像和音乐改变意义',
          '保留 domestic violence、AIDS 与亲密关系中的矛盾，不把社区编辑成理想化亚文化肖像',
        ],
        sourceUrl: goldinBallad,
        images: [],
        relations: [
          rel('展览', 'Nan Goldin: The Ballad of Sexual Dependency — MoMA', '2016–2017'),
          rel('出版', 'The Ballad of Sexual Dependency', 'photobook / slideshow canon'),
        ],
      },
      {
        title: 'Sirens',
        cluster: 'found footage / drug ecstasy / music film',
        period: '2019–2020；Venice 2022',
        summary: 'Sirens 是向 Donyale Luna 致意的影像作品。Goldin 从约 30 部电影、Warhol Screen Tests 与 1988 London rave 影像中抽取片段，以 Mica Levi 配乐把 female body、欲望与 opioid high 的快感和危险剪成一条诱惑性的连续体。',
        actions: [
          '从约 30 部电影和既有录像中选择与 trance、身体、液体、漂浮、高潮相关的片段',
          '加入 Andy Warhol 对 Donyale Luna 的 Screen Test 与 1988 London rave footage',
          '通过 montage 消除原影片叙事，使不同年代的身体进入同一种 intoxication rhythm',
          '邀请 Mica Levi 配乐，让声音承担持续吸引 / 危险的结构作用',
          '用 mythic siren 的“诱惑到毁灭”结构处理药物快感，而不是制作禁毒式说明片',
        ],
        sourceUrl: goldinVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Central Pavilion')],
      },
      {
        title: 'Sisters, Saints, Sibyls',
        cluster: 'three-channel video / family archive / psychiatric records',
        period: '2004–2022',
        summary: '三频道影片从 Saint Barbara 的 martyr story 进入 Goldin 姐姐 Barbara 的生命、精神病院记录与自杀，再连接艺术家自己的成瘾与康复。家庭照片、病历文字、近期重返地点的影像和 voice-over 被组织成不断互相校正的 archive。',
        actions: [
          '整理家庭相册与 psychiatric reports，把私密影像和制度文件并置',
          '以 Saint Barbara 的宗教叙事作为三联画式入口',
          '重返姐姐死亡相关地点拍摄当下影像，而不是假装拥有当年的现场画面',
          '在 three-channel structure 中同时安排 text、voice、archival image 与新拍 footage',
          '持续修改 2004 初版，使作品到 2022 仍保持更新状态',
        ],
        sourceUrl: goldinSisters,
        images: [],
        relations: [
          rel('展览', 'Festival d’Automne / Hôpital de la Salpêtrière', 'first presentation 2004'),
          rel('展览', 'Gagosian Open — former Welsh chapel, London', '2024'),
        ],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022', 'This Will Not End Well — touring moving-image retrospective', 'Sisters, Saints, Sibyls — Gagosian Open 2024'],
    sources: [
      { label: 'MoMA · The Ballad of Sexual Dependency', url: goldinBallad },
      { label: 'La Biennale · Nan Goldin 2022', url: goldinVenice },
      { label: 'Gagosian · Sisters, Saints, Sibyls', url: goldinSisters },
    ],
  },

  'venice-niki-de-saint-phalle': {
    artistId: 'venice-niki-de-saint-phalle',
    projectCoverage: '3 个 shooting / monumental female body / inhabitable sculpture 关键阶段已建立深档案 · 1961–1998',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。这里按“攻击绘画 → 放大女性身体 → 进入可居住建筑”整理，重点看 Saint Phalle 如何不断把观看者从面前的画面推进到参与事件、进入身体、最终走进一个完整雕塑环境。',
    projects: [
      {
        title: 'Tirs / Shooting Paintings',
        cluster: 'performance / rifle / paint-filled assemblage',
        period: '1961–1970',
        summary: 'Saint Phalle 在木板上固定玩具、工具、车轮、衣物、铁丝网等物件，并把装有颜料的容器埋入石膏；艺术家或参与者用步枪射击，子弹打破颜料袋，流淌痕迹直接完成画面。',
        actions: [
          '把 found objects、wire mesh、plaster 与 paint-filled bags 固定在 wooden support 上',
          '将整个 assemblage 涂成白色，使尚未发生的颜色事件保持潜伏状态',
          '邀请自己或现场参与者使用 rifle 射击作品',
          '让 bullet impact 决定颜料袋何时破裂、颜色如何流动',
          '把 violence 从“主题”变成真实生产机制，使 performance 与 painting 无法分开',
        ],
        sourceUrl: nikiMoma,
        images: [],
        relations: [rel('收藏', 'MoMA — Shooting Painting American Embassy', '1961 work in collection')],
      },
      {
        title: 'Nanas / Hon-en katedral / Gwendolyn',
        cluster: 'female body / polyester sculpture / inhabitable figure',
        period: '1965–1970s；Gwendolyn 1966/1990',
        summary: 'Nanas 把女性身体从被观看的纤细裸体变成巨大、鲜艳、占据公共空间的重量。1966 年 Hon-en katedral 更把女性形体做成可进入的建筑，观众从双腿之间进入体内；Gwendolyn 则把怀孕身体放大成超过 2.5 米的纪念性形象。',
        actions: [
          '从 wire / papier-mâché 等早期结构发展到可复制、可放大的 polyester-resin body',
          '强化 breasts、belly、buttocks，以花朵、心形、太阳和同心图案覆盖表面',
          '让 Nana 从 pedestal sculpture 进入 fountain、square 与公共建筑尺度',
          '在 Hon-en katedral 中与 Jean Tinguely 等协作，把人体内部设计成可行走、停留的环境',
          '通过入口位置迫使观众以身体行动重新理解“进入女性身体”这一观看关系',
        ],
        sourceUrl: nikiVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 presentation included Gwendolyn')],
      },
      {
        title: 'Tarot Garden',
        cluster: 'sculpture park / mosaic architecture / life work',
        period: '1978–1998',
        summary: 'Tarot Garden 是 Saint Phalle 持续近二十年的核心建筑项目。22 个 Major Arcana 被做成可进入或绕行的巨型雕塑，混凝土、镜面、手工瓷砖、玻璃和石材把单件雕塑扩展成完整地景。',
        actions: [
          '以 Tarot Major Arcana 建立 22 个 monumental sculptural / architectural figures 的总体系统',
          '在 Tuscany 场地上长期施工而不是一次性制作后运输',
          '使用 reinforced structures、mirror mosaic、handmade tiles、glass 与 stone 形成耐候表皮',
          '与 Jean Tinguely、工匠和长期团队协作解决工程、表面和机械结构',
          '曾住进 The Empress 内部，把 studio / home 直接嵌入作品',
          '以 perfume、edition 等商业项目收入反向资助大型公共艺术工程',
        ],
        sourceUrl: nikiGarden,
        images: [],
        relations: [rel('展览', 'Tarot Garden — Garavicchio, Tuscany', 'public sculpture garden · opened to public 1998')],
      },
    ],
    awards: [],
    exhibitions: ['The Milk of Dreams — Venice Biennale 2022', 'Niki de Saint Phalle in the 1960s — Menil / MCASD 2021–2022'],
    sources: [
      { label: 'MoMA · Niki de Saint Phalle', url: nikiMoma },
      { label: 'Niki Charitable Art Foundation · biography', url: nikiFoundation },
      { label: 'Niki Charitable Art Foundation · public works', url: nikiGarden },
      { label: 'La Biennale · Niki de Saint Phalle 2022', url: nikiVenice },
    ],
  },

  'venice-paula-rego': {
    artistId: 'venice-paula-rego',
    projectCoverage: '3 个 staged narrative / female body / political pastel 关键阶段已建立深档案 · 1990–1999',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Rego 的叙事不是把文学或政治事件“画出来”这么简单：她会搭场、找模特、制作 prop / doll，再用 pastel 或 painting 把人物压进不舒服的身体姿态，让权力关系先通过 pose 发生。',
    projects: [
      {
        title: 'Crivelli’s Garden',
        cluster: 'National Gallery residency / mural / female saints',
        period: '1990–1991',
        summary: '作为 National Gallery 首位 Associate Artist，Rego 从 Crivelli 的祭坛画、Golden Legend 与馆内真人模特出发，制作约十米长的 mural。圣徒、圣经女性、民间故事人物和当时 National Gallery 工作人员被放进类似葡萄牙蓝白瓷砖的花园空间。',
        actions: [
          '长期在 National Gallery collection 中研究 Old Master composition 与叙事结构',
          '阅读 Golden Legend，选择 female saints 与 biblical heroines 作为人物骨架',
          '邀请朋友、家人和 National Gallery staff 实际坐 pose',
          '先制作 life drawings，再把真人姿态转换成 mural 中的历史 / 宗教人物',
          '借鉴 Crivelli 背景中的 perspective 与 architectural garden，重建成女性叙事空间',
        ],
        sourceUrl: regoCrivelli,
        images: [],
        relations: [rel('收藏', 'The National Gallery, London', 'Crivelli’s Garden · 1990–91')],
      },
      {
        title: 'Dog Women',
        cluster: 'pastel / bodily pose / female agency',
        period: '1994–1995',
        summary: 'Dog Women 系列把女性身体置于蹲伏、舔舐、抓挠、警觉等介于人和动物之间的姿态。作品以大型 pastel 强调肌肉、重量和动作，把“女性应当优雅可控”的视觉规范直接翻转。',
        actions: [
          '让模特实际摆出 crouch / crawl / scratch 等费力姿态',
          '使用 pastel 的直接摩擦建立皮肤、衣料和肌肉重量',
          '将人物放在相对稀薄背景中，使身体动作承担主要叙事',
          '保留攻击性、疲劳、欲望与照护的矛盾，不把 animal analogy 简化成羞辱',
          '把女性 agency 通过体重、占地和动作呈现，而不是通过象征性“强大女性”图标',
        ],
        sourceUrl: regoGallery,
        images: [],
        relations: [rel('展览', 'Paula Rego retrospectives / survey exhibitions', 'series repeatedly central to major surveys')],
      },
      {
        title: 'Untitled / Abortion Series',
        cluster: 'illegal abortion / staged body / political pastel',
        period: '1998–1999',
        summary: '在葡萄牙第一次 abortion referendum 失败后，Rego 创作一组表现非法堕胎之后女性独处状态的作品。她避开血腥手术场景，而把身体放在床、桶、地板和临时空间中，通过姿势和沉默呈现制度压力。',
        actions: [
          '以 referendum 和现实中 illegal abortion 的制度背景作为项目起点',
          '让模特摆出恢复、忍痛、等待和自我支撑等具体身体姿势',
          '使用 pastel 建立近距离、粗粝而非医学说明式的身体表面',
          '避免医生或施术过程成为视觉中心，使女性主体而非医疗器械占据画面',
          '通过系列重复改变姿势、年龄和空间，让政治议题不被一张“代表图”封闭',
        ],
        sourceUrl: regoAbortion,
        images: [],
        relations: [rel('展览', 'Paula Rego major retrospectives', 'Abortion series widely exhibited; linked to Portuguese reproductive-rights debate')],
      },
    ],
    awards: ['Dame Commander of the Order of the British Empire — 2010'],
    exhibitions: ['Paula Rego — Tate Britain 2021', 'The Milk of Dreams — Venice Biennale 2022', 'Paula Rego: Crivelli’s Garden — National Gallery 2023'],
    sources: [
      { label: 'Victoria Miro · Paula Rego', url: regoGallery },
      { label: 'Victoria Miro · Abortion Series study', url: regoAbortion },
      { label: 'National Gallery · Crivelli’s Garden', url: regoCrivelli },
    ],
  },

  'venice-rosana-paulino': {
    artistId: 'venice-rosana-paulino',
    projectCoverage: '3 个 family archive / suturing / colonial-science critique 关键阶段已建立深档案 · 1994–2019',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Paulino 会把旧家庭照片、刺绣框、缝线、植物学 / 人种学图像和身体图解真正变成操作材料；“缝合”既是制作动作，也是对黑女性被历史命名、测量和消音方式的反向处理。',
    projects: [
      {
        title: 'Parede da memória',
        cluster: 'family archive / patuá / multiplication',
        period: '1994–2015',
        summary: '作品由约 1,500 个类似 Afro-Brazilian protection amulet 的小型 patuá 单元组成。Paulino 把 11 张家族肖像反复印在布上、填充、缝制并排列成巨大墙面，让被社会匿名化的黑人家庭重新以重复而有差异的个体面孔占据机构空间。',
        actions: [
          '从自己的 family archive 选取 11 张旧肖像',
          '将照片转印 / 数字印刷到布面，再加入 watercolor / pigment 处理',
          '把布片填入 cotton / microfiber 并缝成接近 patuá 的软质小包',
          '通过大量复制同一组肖像建立 1,500 件左右的 modular wall installation',
          '每次安装允许数量和排列变化，使 memory wall 不是固定平面图像',
        ],
        sourceUrl: paulinoMemory,
        images: [],
        relations: [rel('收藏', 'Pinacoteca de São Paulo', 'Parede da memória · collection')],
      },
      {
        title: 'Bastidores',
        cluster: 'embroidery hoop / sewn mouth-eye-throat / domestic violence',
        period: '1997',
        summary: 'Bastidores 把女性家族肖像印在织物上并固定在 embroidery hoops 中，再用粗线直接缝过眼睛、嘴巴和喉咙。刺绣从“女性家务技艺”变成封口、遮挡和暴力的动作。',
        actions: [
          '将 Black women family portraits 转印到 fabric',
          '保留 embroidery hoop 作为最终展示支撑，而不是只作为制作工具',
          '用可见粗线穿过 mouth、eyes、throat 等身体部位',
          '让 sewing 同时指向 repair、domestic labour 与 silencing',
          '通过多件并列把个人 family image 推向对 Black women systemic violence 的群体叙事',
        ],
        sourceUrl: paulinoPinacoteca,
        images: [],
        relations: [rel('展览', 'Rosana Paulino: A Costura da Memória — Pinacoteca', '2018–2019')],
      },
      {
        title: 'Senhora das Plantas / Jatobá',
        cluster: 'drawing + collage / botanical body / decolonial natural history',
        period: '2015–2019；Venice 2022 context',
        summary: '在 Senhora das Plantas 与 Jatobá 中，女性身体与根、枝、花和树干互相穿透。Paulino 借此反转殖民植物学和种族“科学”把身体当作可分类标本的传统，让人体成为会向外生长、拒绝固定范畴的生态主体。',
        actions: [
          '从 botanical illustration、body diagram 与 Black female portrait 建立混合图像库',
          '用 drawing、print、collage 等不同表面处理把人和植物组织嫁接',
          '让 root / vein / branch 结构穿出 breasts、mouth、eyes、skin 等身体边界',
          '重复使用同一身体图式并改变植物结构，制造 series 内部的形态变体',
          '在 Venice 2022 与 Wet Nurse、Weavers 等作品共同构成身体 metamorphosis / colonial history 的谱系',
        ],
        sourceUrl: paulinoVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
    ],
    awards: [],
    exhibitions: ['A Costura da Memória — Pinacoteca 2018–2019', 'The Milk of Dreams — Venice Biennale 2022'],
    sources: [
      { label: 'Pinacoteca · A Costura da Memória', url: paulinoPinacoteca },
      { label: 'Pinacoteca · Parede da memória', url: paulinoMemory },
      { label: 'Mendes Wood DM · Rosana Paulino', url: paulinoGallery },
      { label: 'La Biennale · Rosana Paulino 2022', url: paulinoVenice },
    ],
  },

  'venice-delcy-morelos': {
    artistId: 'venice-delcy-morelos',
    projectCoverage: '3 个 soil room / scented earth / land-body installation 关键阶段已建立深档案 · 2019–2023',
    imageCoverage: '0 / 3 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Morelos 的关键不是“用土做极简主义”，而是把 soil、mud、clay、fiber、香料和当地土地的具体性质变成会包围身体、改变温湿度和气味的环境；Andean / Amazonian cosmology 不是展签解释，而进入材料选择与观看方式。',
    projects: [
      {
        title: 'Moradas',
        cluster: 'local soil / painted architecture / burial + dwelling',
        period: '2019',
        summary: '在 Galería Santa Fe，Morelos 用当地土壤覆盖墙、地面和柱体，只留下狭窄未涂路径，并布置类似根茎、遗骸或考古物的土色对象。作品把 gallery 变成介于 dwelling、burial ground 与 exposed earth section 之间的空间。',
        actions: [
          '采集 / 使用 local soil，并调成可涂覆建筑表面的 mud mixture',
          '直接覆盖 wall、floor、column，使 soil 不再只是雕塑材料而变成 architecture skin',
          '刻意留下 single unpainted path 控制观众进入方式',
          '把不明确的 soil-painted objects 分散在空间中，拒绝给出单一用途说明',
          '配套写作 Moradas poetic text，把 earth 作为最终住所与暴力 / 自然循环相联系',
        ],
        sourceUrl: morelosMoradas,
        images: [],
        relations: [rel('展览', 'Moradas — Galería Santa Fe, Bogotá', '2019')],
      },
      {
        title: 'Earthly Paradise',
        cluster: 'immersive earth maze / scent / humidity',
        period: '2022',
        summary: 'Venice 2022 的 Earthly Paradise 让土体从地面抬高并围住观众。土壤中混入 hay、cassava flour、cacao、clove、cinnamon 等，作品同时作用于气味、湿度、温度、触感和黑暗感。',
        actions: [
          '以 soil / clay 为主体建造高于地面的 maze-like masses',
          '在土体中加入 hay、cassava flour、cacao powder、cloves、cinnamon 等有机材料',
          '控制观众步行路径，使身体被 earth wall 环绕而不是从外部观看 sculpture',
          '让 material moisture、temperature 与 smell 成为实际作品变量',
          '将 Andean / Amazonian cosmology 中人与土的连续关系对置于西方 Land Art / Minimalist art history',
        ],
        sourceUrl: morelosVenice,
        images: [],
        relations: [rel('展览', 'The Milk of Dreams — 59th Venice Biennale', '2022 · Arsenale')],
      },
      {
        title: 'Cielo terrenal / El abrazo',
        cluster: 'site-responsive earth / flood line / earthen monolith',
        period: '2023',
        summary: 'Dia Chelsea 的两件新委托把 Morelos 的 soil practice 推到两个方向：Cielo terrenal 以 Hudson Valley Black Dirt 在墙面形成接近 Hurricane Sandy flood mark 的土线；El abrazo 则构成一座几乎顶住房顶的巨大 earthen monolith，像 shrine、mastaba 与山体的混合物。',
        actions: [
          '使用 Hudson Valley Black Dirt、recycled soil、clay、coir 等具体来源材料',
          '在 Cielo terrenal 中把墙地涂成 soil surface，并把高度对准 2012 Hurricane Sandy flood memory',
          '加入 previous Dia installation salvaged materials 与 Colombia open-fire black ceramics',
          '在 El abrazo 中建造巨大 raised earthen structure，使土体同时接近 architecture 和 mountain',
          '加入 cinnamon / clove 等香料并把作品构想为对 peat 的 shrine，使气味与生态议题同时发生',
        ],
        sourceUrl: morelosDia,
        images: [],
        relations: [rel('展览', 'Delcy Morelos: El abrazo — Dia Chelsea', '2023–2024')],
      },
    ],
    awards: [],
    exhibitions: ['Moradas — Galería Santa Fe 2019', 'The Milk of Dreams — Venice Biennale 2022', 'El abrazo — Dia Chelsea 2023–2024'],
    sources: [
      { label: 'Dia · Moradas context', url: morelosMoradas },
      { label: 'La Biennale · Delcy Morelos 2022', url: morelosVenice },
      { label: 'Dia · El abrazo press release', url: morelosDia },
    ],
  },
};
