import type { ArtistArchive, ArchiveRelation } from './archiveData';
const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const gutierrez='https://www.labiennale.org/en/art/2019/partecipants/martine-gutierrez';
const minoliti='https://www.labiennale.org/en/art/2019/partecipants/ad-minoliti';
const muller='https://www.labiennale.org/en/art/2019/partecipants/ulrike-m%C3%BCller';
const leeBul='https://www.labiennale.org/en/art/2019/partecipants/lee-bul';
const gupta='https://www.labiennale.org/en/art/2019/partecipants/soham-gupta';
const halawani='https://www.labiennale.org/en/art/2019/partecipants/rula-halawani';

export const archiveBatch105: Record<string, ArtistArchive> = {
  'venice-martine-gutierrez': {
    artistId:'venice-martine-gutierrez',
    projectCoverage:'1 个 self-authored magazine / identity-performance 核心项目已建立深档案 · 2018–2019',
    imageCoverage:'0 / 1 项目暂不使用不稳定外链图像',
    note:'当前先把 Indigenous Woman 做深。Gutierrez 同时担任 model、stylist、photographer、writer 与 editor，使 fashion magazine 不再只是作品的传播载体，而是完整的 identity-production machine。',
    projects:[{
      title:'Indigenous Woman',
      cluster:'self-published magazine / staged fashion photography / serial identity performance',
      period:'2018；Venice 2019 presentation',
      summary:'一本完整 glossy magazine 由 Gutierrez 一人承担模特、造型、摄影、写作与编辑。beauty advertisement、fashion spread、editor letter 等商业杂志格式被整体挪用，照片标题继续引用原杂志页码，强调序列与出版语境。',
      actions:[
        '自行担任 model、stylist、photographer、writer 与 editor，取消 fashion image 常见的分工链',
        '模拟 glossy magazine 的 beauty ads、fashion spreads、editor letter 等版式类型',
        '通过 costume、pose、lighting 与 direct gaze 持续更换 femme persona',
        '让每张 photograph 的标题保留原 magazine page number，把单张作品绑定回 publication sequence',
        '把 Indigenous / trans / femme identity 放进原本制造规范化 beauty image 的商业格式内部重新表演',
      ],
      sourceUrl:gutierrez, images:[], relations:[rel('展览','May You Live In Interesting Times — Venice Biennale 2019','Central Pavilion / Arsenale')]
    }],
    awards:[], exhibitions:['May You Live In Interesting Times — Venice Biennale 2019'],
    sources:[{label:'La Biennale · Martine Gutierrez 2019',url:gutierrez}]
  },

  'venice-ad-minoliti': {
    artistId:'venice-ad-minoliti',
    projectCoverage:'1 个 dollhouse-modernism / anti-binary installation corpus 已建立深档案 · 2010s–2019',
    imageCoverage:'0 / 1 项目暂不使用不稳定外链图像',
    note:'官方 2019 页面没有为这组 Venice 呈现给出单一项目标题，因此本站按“作品 corpus”建档，不伪造系列名。核心是把 dollhouse 这一性别教育空间与 modernist abstraction 拼接后再拆解。',
    projects:[{
      title:'Dollhouse / metaphysical-painting installations — Venice 2019 corpus',
      cluster:'dollhouse props / geometric painting / anti-binary representation',
      period:'2010s–2019',
      summary:'Minoliti 将 metaphysical painting 看作现代主义理想性、 rigid structure 与 binary logic 的象征，再以 dollhouse 这种曾经用于训练家庭性别角色的 miniature domestic space 作为其 alter-homologue；两套系统被混合、扭曲和重新配置。',
      actions:[
        '从 metaphysical / modernist painting 中提取 rigid geometry 与 idealised pictorial space',
        '研究 dollhouse 作为 gendered domestic pedagogy 的历史用途',
        '挪用 miniature furniture / domestic props 与 dollhouse scale',
        '加入呼应 Kandinsky、Picasso、Matisse 的 modernist imagery',
        '将既有形态拆散、shift、twist、reconfigure，而不是忠实复刻现代主义范式',
        '通过 alternative representation space 让 male/female、rational/emotional、nature/culture 等 binary opposition 失效',
      ],
      sourceUrl:minoliti, images:[], relations:[rel('展览','May You Live In Interesting Times — Venice Biennale 2019','Central Pavilion / Arsenale')]
    }],
    awards:[], exhibitions:['May You Live In Interesting Times — Venice Biennale 2019'],
    sources:[{label:'La Biennale · Ad Minoliti 2019',url:minoliti}]
  },

  'venice-ulrike-muller': {
    artistId:'venice-ulrike-muller',
    projectCoverage:'2 个 enamel-image / exhibition-choreography 方法节点已建立深档案 · 2010s–2019',
    imageCoverage:'0 / 2 项目暂不使用不稳定外链图像',
    note:'Müller 的形式主义并非与政治无关：enamel、print、rug 的 graphic vocabulary 通过 intimate looking、尺度、挂高和 architecture choreography 持续测试 feminist / queer abstraction 能如何占据空间。',
    projects:[
      {
        title:'Enamel / print / rug image system',
        cluster:'enamel painting / print / textile / queer abstraction',
        period:'2010s–2019',
        summary:'不同媒介共享高度简化、边界清晰的 graphic vocabulary；图像在抽象与身体暗示之间游移，使 form 本身承担 feminist / queer possibility。',
        actions:[
          '在 enamel painting、print 与 rug 之间重复 / 变形同一 graphic vocabulary',
          '制作 meticulous flat surfaces，减少 gesture noise',
          '利用简化 curve / shape 让图像在 pure geometry 与 bodily association 之间保持开放',
          '通过 material shift 让同一 visual form 从硬质 enamel 变成柔软 textile',
        ],
        sourceUrl:muller, images:[], relations:[]
      },
      {
        title:'Exhibition-space choreography — Venice 2019 corpus',
        cluster:'unconventional hanging / architecture / intimate viewing',
        period:'2019',
        summary:'Müller 不把作品当作独立平面，而是精确利用 gallery architecture 与非常规挂高，把展场本身处理成 container；观看者的身体高度和距离因此进入作品结构。',
        actions:[
          '根据 wall / doorway / room proportion 决定作品之间的间距',
          '将部分作品挂在 unconventional heights，破坏默认 eye-level display',
          '让 rugs、prints、enamels 共同组织 viewer movement',
          '用 intimate scale 迫使 viewer 靠近，而不是依赖 monumental impact',
        ],
        sourceUrl:muller, images:[], relations:[rel('展览','May You Live In Interesting Times — Venice Biennale 2019','Central Pavilion / Arsenale')]
      }
    ],
    awards:[], exhibitions:['May You Live In Interesting Times — Venice Biennale 2019'],
    sources:[{label:'La Biennale · Ulrike Müller 2019',url:muller}]
  },

  'venice-lee-bul': {
    artistId:'venice-lee-bul',
    projectCoverage:'3 个 monstrous-body / cyborg / utopian-city 阶段已建立深档案 · late 1980s–2019',
    imageCoverage:'0 / 3 项目暂不使用不稳定外链图像',
    note:'Lee Bul 的路径很清楚：先让自己的身体穿上 grotesque soft sculpture 上街，再把女性身体机械化成残缺 Cyborg，最后把“完美身体”的欲望扩展成同样不稳定的 futuristic city / utopian architecture。',
    projects:[
      {
        title:'Monstrous soft-sculpture street performances',
        cluster:'wearable soft sculpture / street performance / visceral body',
        period:'late 1980s',
        summary:'Lee Bul 制作并穿戴带有 protrusions 与 dangling viscera 的巨大软雕塑 costume 进入公共空间。身体不是被 costume 美化，而被扩大成无法归类的人体 / 怪物 / 器官混合物。',
        actions:[
          '制作 oversized soft-sculpture costumes 并直接穿戴',
          '加入 protrusions、dangling viscera 等近器官形态',
          '将作品带入 street / public context，而非只在 gallery mannequin 上展示',
          '以 performer movement 让 soft material 不断变形',
        ],
        sourceUrl:leeBul, images:[], relations:[]
      },
      {
        title:'Cyborg sculptures',
        cluster:'eroticised female body / machine hybrid / incomplete anatomy',
        period:'1990s–2000s',
        summary:'Cyborg 系列把 eroticised female forms 与 machine morphology 融合，同时故意缺失 head / limbs，使“技术增强的完美女体”以残缺状态出现。',
        actions:[
          '从 idealised female anatomy 提取 torso / curve',
          '把 biological surface 与 mechanical / synthetic form 合成',
          '主动移除 head / limbs，拒绝完整 heroic body',
          '利用 polished futuristic surface 与 mutilated anatomy 的冲突制造 tension',
        ],
        sourceUrl:leeBul, images:[], relations:[]
      },
      {
        title:'Futuristic cityscape / utopian architecture works',
        cluster:'visionary architecture / manga-anime / bioengineering',
        period:'2000s–2019',
        summary:'由 Cyborg 的身体改造进一步扩展到城市和建筑：Japanese manga / anime、bioengineering 与 Bruno Taut 的 visionary architecture 成为未来城市的视觉来源，同时保留 utopia 随时坍塌的脆弱感。',
        actions:[
          '研究 manga / anime 的 future-city imagery',
          '引入 bioengineering 与 Bruno Taut visionary architecture 的结构线索',
          '把 body-scale hybrid logic 扩大到 city / architecture scale',
          '让 shiny utopian surface 与 ruin / instability 同时存在',
        ],
        sourceUrl:leeBul, images:[], relations:[rel('展览','May You Live In Interesting Times — Venice Biennale 2019','Central Pavilion / Arsenale')]
      }
    ],
    awards:[], exhibitions:['May You Live In Interesting Times — Venice Biennale 2019'],
    sources:[{label:'La Biennale · Lee Bul 2019',url:leeBul}]
  },

  'venice-soham-gupta': {
    artistId:'venice-soham-gupta',
    projectCoverage:'1 个 night-portrait / collaborative biography 核心系列已建立深档案 · 2010s–2019',
    imageCoverage:'0 / 1 项目暂不使用不稳定外链图像',
    note:'当前先把 Angst 做深。Gupta 与 Kolkata 夜间遇到的边缘人物建立长期、亲密的交流，肖像不是“街头猎奇”，而建立在双方 confiding 与人物 expressive agency 上。',
    projects:[{
      title:'Angst',
      cluster:'night portrait / Kolkata margins / collaborative encounter',
      period:'2010s–2019',
      summary:'夜间 Kolkata 的人物在 flash / darkness 中被塑造成高度 vivid 的角色。Gupta 在拍摄前与 subjects 交谈并记录关于 sexual harassment、domestic abuse、abandonment 等经历，同时保留 joy 与 spontaneity。',
      actions:[
        '长期在 Kolkata 夜间步行并反复接触 marginalised inhabitants',
        '在拍摄前建立 intimate interaction，让 photographer 与 subject 彼此 confide',
        '为人物整理 biographical accounts，而不只记录外貌',
        '使用 darkness / direct illumination 强化夜间心理气候',
        '拒绝 exploitative / voyeuristic documentary position，让 subjects 保留 expressive agency',
        '在 vulnerability、loneliness 与 moments of joy 之间编辑系列',
      ],
      sourceUrl:gupta, images:[], relations:[rel('展览','May You Live In Interesting Times — Venice Biennale 2019','Central Pavilion / Arsenale')]
    }],
    awards:[], exhibitions:['May You Live In Interesting Times — Venice Biennale 2019'],
    sources:[{label:'La Biennale · Soham Gupta 2019',url:gupta}]
  },

  'venice-rula-halawani': {
    artistId:'venice-rula-halawani',
    projectCoverage:'1 个 occupation-landscape / negative-space photography corpus 已建立深档案 · 2000s–2019',
    imageCoverage:'0 / 1 项目暂不使用不稳定外链图像',
    note:'官方 2019 页面将 Halawani 的 Venice 呈现作为一条持续的 photographic corpus 描述，没有给出单一系列标题。这里按 corpus 建档：她从 photojournalism 转向更 ghostly、间接的 landscape image，以 emptiness、shadow 与 built structure 记录 occupation 的空间后果。',
    projects:[{
      title:'Occupation aftermath / historic-Palestine landscape corpus — Venice 2019',
      cluster:'landscape photography / occupation / negative space + trace',
      period:'2000s–2019',
      summary:'照片追踪周期性暴力之后的 landscape，以及 historical Palestine 越来越难以辨认的痕迹。occupation 不只通过 wall / checkpoint 等政治建筑出现，也通过空白地带、阴影和视觉缺席进入画面。',
      actions:[
        '把 photojournalist 对事件现场的经验转向 aftermath / trace 的长期观察',
        '返回因 occupation 改变而日益陌生的 landscape 寻找 historical traces',
        '拍摄 built political structures，同时避免让它们成为唯一视觉证据',
        '利用 negative space、emptiness 与 shadowy illusion 表达 spatial loss',
        '让 memory of pre-occupation landscape 与 current built environment 在同一图像中发生冲突',
      ],
      sourceUrl:halawani, images:[], relations:[rel('展览','May You Live In Interesting Times — Venice Biennale 2019','Central Pavilion / Arsenale')]
    }],
    awards:[], exhibitions:['May You Live In Interesting Times — Venice Biennale 2019'],
    sources:[{label:'La Biennale · Rula Halawani 2019',url:halawani}]
  }
};
