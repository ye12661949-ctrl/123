import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const brandtVenice = 'https://www.labiennale.org/en/art/2022/seduction-cyborg/marianne-brandt';
const reginaVenice = 'https://www.labiennale.org/en/art/2022/seduction-cyborg/regina-cassolo-bracchi';
const censiVenice = 'https://www.labiennale.org/en/art/2022/seduction-cyborg/giannina-censi';
const laddVenice = 'https://www.labiennale.org/en/art/2022/seduction-cyborg/anna-coleman-ladd';
const exterVenice = 'https://www.labiennale.org/en/art/2022/seduction-cyborg/alexandra-exter';
const henriVenice = 'https://www.labiennale.org/en/art/2022/seduction-cyborg/florence-henri';

export const archiveBatch93: Record<string, ArtistArchive> = {
  'venice-marianne-brandt': {
    artistId: 'venice-marianne-brandt',
    projectCoverage: '2 个 Bauhaus photomontage / androgynous self-image 节点已建立深档案 · 1924–1932',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Brandt 不只是一位 Bauhaus 金属设计师；她在 1920s 同时用 photomontage 与 self-photography 拆解 Neue Frau 的现代女性形象，把身体、广告、机械与性别表演并置。',
    projects: [
      {
        title: 'Montagen / Photomontagen',
        cluster: 'magazine cuttings / Neue Frau / gender + machine image',
        period: '1924–1932',
        summary: 'Brandt 制作约五十件 montage，把黑白、sepia 与彩色报刊剪贴组合在中性色底板上。女性身体、消费图像和现代机器共同构成对 Neue Frau 理想的复杂回应。',
        actions: [
          '从 newspapers / magazines 剪取人物、机械、商品与都市图像',
          '混合 black-and-white、sepia 与 colour cuttings，而不统一成单一色调',
          '把女性 figures 与工业 / modern-life imagery 交叉拼贴',
          '通过比例突变和不自然邻接制造 gender / technology tension',
          '使用相对 neutral support 让 collage fragments 保持彼此冲突',
        ],
        sourceUrl: brandtVenice,
        images: [],
        relations: [rel('展览', 'Seduction of the Cyborg — Venice Biennale 2022', 'Arsenale historical capsule')],
      },
      {
        title: 'Selbstporträt mit Schmuck',
        cluster: 'self portrait / mirror + jewellery / androgynous New Woman',
        period: '1929',
        summary: 'Brandt 在 studio self-portrait 中让自己与设计物件、首饰和反射表面共同出现。Bubikopf 短发与近似 armour 的 jewellery 让“女性气质”与机械、设计和自我展示同时成立。',
        actions: [
          '把自己置于 studio / designed-object 环境中，而非中性 portrait backdrop',
          '利用 mirror / reflective objects 让身体被切分与重复',
          '以 short-cropped haircut 与 jewellery 建立 feminine / masculine 双重信号',
          '把 industrial-design identity 与 self-fashioning 放在同一图像里',
        ],
        sourceUrl: brandtVenice,
        images: [],
        relations: [],
      },
    ],
    awards: [],
    exhibitions: ['Seduction of the Cyborg — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Marianne Brandt 2022', url: brandtVenice }],
  },

  'venice-regina-cassolo-bracchi': {
    artistId: 'venice-regina-cassolo-bracchi',
    projectCoverage: '2 个 aluminium futurist-body 节点已建立深档案 · 1930–1935',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Regina 放弃早期 marble / plaster naturalism 后，改用薄 aluminium sheet 叠、接、切，制造既像 robot 又保持身体轻盈动作感的 Futurist figures。',
    projects: [
      {
        title: 'Danzatrice',
        cluster: 'cut aluminium / dancer / metallic movement',
        period: '1930',
        summary: '薄铝片被切割、折叠和拼接成舞者形体。hard-edged metal 本应显得冷硬，但 pose 与轮廓反而强调轻盈、旋转和 élan。',
        actions: [
          '以 thin aluminium sheet 取代传统 carved / modelled mass',
          '通过 cutting、layering、joining 形成 figure in the round',
          '保留大面积 flat metal surface，使 light reflection 成为塑形因素',
          '用倾斜与展开轮廓表现 dancer movement 而非解剖写实',
        ],
        sourceUrl: reginaVenice,
        images: [],
        relations: [rel('展览', 'Seduction of the Cyborg — Venice Biennale 2022', 'Arsenale historical capsule')],
      },
      {
        title: 'Aerosensibilità',
        cluster: 'sheet-metal relief / aerial body / technological lyricism',
        period: '1935',
        summary: '女性形体在金属 relief 中变得更细长、流线，身体像被 air / speed 拉长。技术 iconography 不再只是 masculine machine，而被转成轻盈和抒情的女性身体。',
        actions: [
          '将 aluminium sheet 处理成更接近 relief 的浅层空间',
          '通过 sinuous contour 代替厚重体积',
          '利用 reflective metal 暗示速度、空气和机械表面',
          '把 female pose 与 aeronautical futurism 的技术想象重叠',
        ],
        sourceUrl: reginaVenice,
        images: [],
        relations: [],
      },
    ],
    awards: [],
    exhibitions: ['Seduction of the Cyborg — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Regina Cassolo Bracchi 2022', url: reginaVenice }],
  },

  'venice-giannina-censi': {
    artistId: 'venice-giannina-censi',
    projectCoverage: '2 个 aerofuturist dance / silent tereodance 节点已建立深档案 · 1931–1930s',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Censi 把身体当飞行机器：几何、抽动、断裂的 gesture 与 metallic aviator costume 一起，让 dancer 从“表现角色”转成速度、飞机和 extraterrestrial spirit 的活体模型。',
    projects: [
      {
        title: 'Danza aerofuturista / Simultanina',
        cluster: 'aviator costume / jerky geometry / body-as-machine',
        period: '1931',
        summary: 'Censi 穿 Enrico Prampolini 设计的 metallic-fabric aviator suit 与 cap，以几何、节奏化、突然的动作回应 Marinetti 的 parolibere recitation。身体既像 dancer，也像 chrome-covered cyborg chassis。',
        actions: [
          '穿着 metallic fabric aviator costume，将服装直接变成机械身体表面',
          '使用 geometric / rhythmic / jerky gestures 替代流畅古典舞姿',
          '将 limbs 做成 sudden angular extensions，制造 sculptural freeze',
          '让动作与 scattered musical notes / spoken parolibere 非线性对应',
          '通过 photography 保存短暂 pose，使舞蹈同时进入静态 sculpture archive',
        ],
        sourceUrl: censiVenice,
        images: [],
        relations: [rel('展览', 'Seduction of the Cyborg — Venice Biennale 2022', 'Arsenale historical capsule')],
      },
      {
        title: 'Tereodanze',
        cluster: 'silent improvisation / futurist backdrop / aerial embodiment',
        period: '1930s',
        summary: '在更极端的 Tereodanze 中，Censi 甚至取消音乐，在 Futurist paintings 前即兴，让身体像独自漂浮于 aerial / cosmic space，模拟 pilot emotion 与 flying-machine consciousness。',
        actions: [
          '取消 musical accompaniment，让 bodily rhythm 独立运行',
          '在 Futurist painting backdrop 前 improvisation',
          '通过 sudden pose / suspension 制造失重与 flight sensation',
          '将 pilot emotion 和 machine movement 转成 dancer proprioception',
        ],
        sourceUrl: censiVenice,
        images: [],
        relations: [],
      },
    ],
    awards: [],
    exhibitions: ['Seduction of the Cyborg — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Giannina Censi 2022', url: censiVenice }],
  },

  'venice-anna-coleman-ladd': {
    artistId: 'venice-anna-coleman-ladd',
    projectCoverage: '1 个 WWI facial-prosthesis studio 核心节点已建立深档案 · 1917–1919',
    imageCoverage: '0 / 1 项目暂不使用不稳定外链图像',
    note: '当前先把她最关键的 facial-prosthesis practice 做深。这里艺术不是象征性“疗愈”，而是真正参与医学修复：cast、metal mask、oil painting 和多次 fitting 共同组成恢复日常社会身份的技术流程。',
    projects: [
      {
        title: 'Studio for Portrait Masks / facial prostheses for wounded soldiers',
        cluster: 'medical prosthesis / portrait sculpture / Red Cross care',
        period: '1917–1919',
        summary: 'Ladd 在 Paris 说服 Red Cross 建立 facial-prosthesis department，为严重面部损伤的 WWI veterans 手工制作约一百件 portrait masks。每件面具都需要数周到约一个月完成。',
        actions: [
          '根据 pre-war photographs 与现有面部制作 initial plaster cast',
          '在 cast 基础上重建缺失 nose / cheek / jaw 等 facial form',
          '将 sculpted form 转制成 latex 与 copper 或 silver mask',
          '在多次 sittings 中以 oil paint 手工匹配肤色、眉毛、胡须与表面细节',
          '反复 fitting 调整 mask 与伤口边缘 / remaining face 的贴合',
          '将 prosthetic making 与 studio psychological counselling 同时进行',
        ],
        sourceUrl: laddVenice,
        images: [],
        relations: [rel('展览', 'Seduction of the Cyborg — Venice Biennale 2022', 'Arsenale historical capsule')],
      },
    ],
    awards: [],
    exhibitions: ['Red Cross facial-prosthesis studio — Paris 1917–1919', 'Seduction of the Cyborg — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Anna Coleman Ladd 2022', url: laddVenice }],
  },

  'venice-alexandra-exter': {
    artistId: 'venice-alexandra-exter',
    projectCoverage: '2 个 stage-design / sci-fi mechanical-body 节点已建立深档案 · 1920s–1924',
    imageCoverage: '0 / 2 项目暂不使用不稳定外链图像',
    note: '精选项目档案，尚非作品全集。Exter 把 Constructivism、Cubism 与 Futurism 从画布推进到 stage design：costume、set、prop 不分层级，而共同构成一个能把 human body 机械化的空间系统。',
    projects: [
      {
        title: 'Stage-design practice',
        cluster: 'geometric set / costume continuity / utopian theatre',
        period: 'early 1920s',
        summary: 'Exter 将 geometric painting language 延伸到 theatre，使 costume、object 和 set 在颜色、角度与节奏上连续。角色不只是站在布景前，而像布景结构中的活动零件。',
        actions: [
          '从 Constructivist / Cubist geometry 建立 stage architecture',
          '让 costume colour / silhouette 与 set geometry 直接呼应',
          '把 props 视为 spatial composition 的组成而非辅助装饰',
          '用夸张 scale / angle 把 realist theatre 转成 utopian dreamworld',
        ],
        sourceUrl: exterVenice,
        images: [],
        relations: [],
      },
      {
        title: 'Aelita',
        cluster: 'Soviet sci-fi film / celluloid + acrylic costume / mechanical hybrid',
        period: '1924',
        summary: '为 Soviet sci-fi film Aelita 设计 Mars 世界。Martian costumes 使用 celluloid、acrylic glass 与轻质材料，像金属 prostheses 一样支撑身体；Aelita 的 spoked crown 与 petroleum-green dress 把权力、危险和技术直接穿在身体上。',
        actions: [
          '为 dystopian Mars 建立区别于 Earth 的 industrial / alien visual system',
          '使用 celluloid、acrylic glass、lightweight material 制作 eccentric accessories',
          '把 costume extension 设计成类似 mechanical prosthesis 的支撑结构',
          '以 radial crown、rigid geometry 与 long dress 改变 actor silhouette',
          '让 architecture、costume 与 body 一起完成机械化角色塑造',
        ],
        sourceUrl: exterVenice,
        images: [],
        relations: [rel('展览', 'Seduction of the Cyborg — Venice Biennale 2022', 'Arsenale historical capsule')],
      },
    ],
    awards: [],
    exhibitions: ['Aelita — 1924', 'Seduction of the Cyborg — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Alexandra Exter 2022', url: exterVenice }],
  },

  'venice-florence-henri': {
    artistId: 'venice-florence-henri',
    projectCoverage: '1 个 mirror self-portrait / New Vision 核心节点已建立深档案 · 1928',
    imageCoverage: '0 / 1 项目暂不使用不稳定外链图像',
    note: '当前先把 Autoportrait 做深。Henri 的 mirror 不是简单道具，而是把 face、body、sphere、table 和 reflected image 变成可拆解重组的 signs，让 portrait 接近 abstract composition。',
    projects: [
      {
        title: 'Autoportrait',
        cluster: 'mirror / metal spheres / New Vision self-image',
        period: '1928',
        summary: 'Henri 在 vertical mirror 前自拍，镜底放置两个 metal spheres，双臂折叠在 wooden table 上。镜面与球体把空间压成几何层，masculine haircut 又让 self-image 处在 femininity / androgyny 的中间。',
        actions: [
          '使用 vertical mirror 把 portrait space 分成 real / reflected planes',
          '在 mirror base 放置两个 metal spheres，作为光学与几何 anchor',
          '让 folded arms 与 tabletop 形成强 horizontal line，对抗 vertical mirror',
          '通过 close framing 减少环境叙事，把 body 变成 abstract signs',
          '以 New Vision 的强构图与 Surrealist spatial ambiguity 处理 self-portrait',
        ],
        sourceUrl: henriVenice,
        images: [],
        relations: [rel('展览', 'Seduction of the Cyborg — Venice Biennale 2022', 'Arsenale historical capsule')],
      },
    ],
    awards: [],
    exhibitions: ['Seduction of the Cyborg — Venice Biennale 2022'],
    sources: [{ label: 'La Biennale · Florence Henri 2022', url: henriVenice }],
  },
};
