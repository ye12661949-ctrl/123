export type DirectoryEntry = {
  id: string;
  domain: string;
  category: string;
  name: string;
  summary: string;
  url: string;
  tokens: string[];
  kind?: string;
  empty?: string;
  track?: string;
  focus?: string;
  sections?: { name: string; summary: string; url: string }[];
};

export const directoryEntries: DirectoryEntry[] = [
  {
    'id': 'foam-magazine',
    'domain': 'photo',
    'category': 'magazines',
    'name': 'Foam Magazine',
    'summary': '摄影作品集、访谈与主题编辑；可从刊物观察图像如何被编排和讨论。',
    'url': 'https://www.foam.org/magazine',
    'tokens': [
      'Foam Magazine',
      'Foam magazine'
    ],
    'empty': '具体期号与刊载记录仍在补充，可先进入官方杂志目录。'
  },
  {
    'id': 'aperture-magazine',
    'domain': 'photo',
    'category': 'magazines',
    'name': 'Aperture',
    'summary': '摄影杂志与出版平台，结合艺术家作品、访谈和评论。杂志刊载与摄影书奖分别整理。',
    'url': 'https://store.aperture.org/collections/magazines',
    'tokens': [
      'Aperture Magazine',
      'Aperture magazine',
      'Aperture 杂志'
    ],
    'empty': '具体期号与刊载记录仍在补充，可先进入官方杂志目录。'
  },
  {
    'id': 'foam-shows',
    'domain': 'photo',
    'category': 'exhibitions',
    'name': 'Foam 展览',
    'summary': '摄影专业机构的个展与群展；与 Foam Magazine 和 Paul Huf Award 分开查看。',
    'url': 'https://www.foam.org/',
    'tokens': [
      'Foam'
    ],
    'kind': '展览'
  },
  {
    'id': 'tpg-shows',
    'domain': 'photo',
    'category': 'exhibitions',
    'name': 'The Photographers’ Gallery 展览',
    'summary': '伦敦摄影机构的展览项目；奖项展与独立个展在档案中保留各自名称。',
    'url': 'https://thephotographersgallery.org.uk/',
    'tokens': [
      'The Photographers',
      'TPG'
    ],
    'kind': '展览'
  },
  {
    'id': 'new-photography',
    'domain': 'photo',
    'category': 'exhibitions',
    'name': 'MoMA · New Photography',
    'summary': 'MoMA 自 1985 年启动的当代摄影系列，是观察摄影媒介边界、年轻与中生代实践进入大型博物馆体系的重要长期项目。',
    'url': 'https://www.moma.org/about/curatorial-departments/photography',
    'tokens': [
      'New Photography',
      'MoMA'
    ],
    'kind': '展览',
    'focus': '优先比较每届入选者在摄影、装置、表演、档案、出版和数字图像之间如何移动；再追踪这些艺术家之后进入馆藏、个展和其他国际机构的路径。',
    'sections': [
      { 'name': 'Photography Department', 'summary': '摄影部门总入口：馆藏、策展研究与部门历史。', 'url': 'https://www.moma.org/about/curatorial-departments/photography' },
      { 'name': 'MoMA Collection · Photography', 'summary': '从馆藏艺术家和单件作品继续核实收藏关系，而不是把一次展览自动等同于馆藏。', 'url': 'https://www.moma.org/collection/' },
      { 'name': 'New Photography', 'summary': '长期摄影展览系列；本站将逐届建立艺术家与项目索引。', 'url': 'https://www.moma.org/calendar/' }
    ]
  },
  {
    'id': 'arles',
    'domain': 'photo',
    'category': 'festivals',
    'name': 'Les Rencontres d’Arles',
    'summary': '阿尔勒摄影节。从展览与出版项目进入，再追踪具体参展艺术家。',
    'url': 'https://www.rencontres-arles.com/',
    'tokens': [
      'Arles',
      '阿尔勒'
    ],
    'kind': '展览'
  },
  {
    'id': 'vevey',
    'domain': 'photo',
    'category': 'festivals',
    'name': 'Images Vevey',
    'summary': '沃韦的摄影与视觉艺术节；展览和 Grand Prix 奖项属于不同记录。',
    'url': 'https://www.images.ch/',
    'tokens': [
      'Vevey'
    ],
    'kind': '展览'
  },
  {
    'id': 'huf',
    'domain': 'photo',
    'category': 'awards',
    'name': 'Foam Paul Huf Award',
    'summary': 'Foam 的摄影奖项。每位艺术家的获奖年份需与具体履历对应。',
    'url': 'https://www.foam.org/',
    'tokens': [
      'Paul Huf'
    ],
    'kind': '奖项',
    'track': '新人 / 作品集'
  },
  {
    'id': 'deutsche',
    'domain': 'photo',
    'category': 'awards',
    'name': 'Deutsche Börse Photography Foundation Prize',
    'summary': '与 The Photographers’ Gallery 关联的摄影奖项；获奖和入围在档案中分别标注。',
    'url': 'https://thephotographersgallery.org.uk/',
    'tokens': [
      'Deutsche Börse',
      'Deutsche Borse'
    ],
    'kind': '奖项',
    'track': '长期贡献 / 成就'
  },
  {
    'id': 'photobook',
    'domain': 'photo',
    'category': 'awards',
    'name': 'Paris Photo–Aperture PhotoBook Awards',
    'summary': '面向摄影书的奖项。对象是出版物，不能与 Aperture 杂志刊载混为一谈。',
    'url': 'https://aperture.org/calls-for-entry/photobook-awards/',
    'tokens': [
      'Paris Photo',
      'Aperture PhotoBook',
      'Aperture First'
    ],
    'kind': '奖项',
    'track': '摄影书 / 样书'
  },
  {
    'id': 'tate',
    'domain': 'art',
    'category': 'museums',
    'name': 'Tate',
    'summary': '现代与当代艺术的展览及馆藏。具体记录区分收藏、展览和委托。',
    'url': 'https://www.tate.org.uk/',
    'tokens': [
      'Tate'
    ]
  },
  {
    'id': 'moma',
    'domain': 'art',
    'category': 'museums',
    'name': 'MoMA',
    'summary': '纽约现代艺术博物馆。本站把它拆成馆藏、摄影部门、New Photography、Projects、个展 / 回顾展与 MoMA PS1 等不同制度信号，避免把“在 MoMA 出现过”全部混成同一种履历。',
    'url': 'https://www.moma.org/',
    'tokens': [
      'MoMA',
      'Museum of Modern Art'
    ],
    'focus': '研究艺术家与 MoMA 的关系时先区分：馆藏 acquisition、New Photography、Projects、个展 / survey、Artist’s Choice 与 MoMA PS1。它们代表的职业信号并不相同。',
    'sections': [
      { 'name': 'Collection', 'summary': '核实艺术家是否真正进入 MoMA 馆藏及具体作品。', 'url': 'https://www.moma.org/collection/' },
      { 'name': 'Photography Department', 'summary': '摄影部门的收藏、策展与研究入口。', 'url': 'https://www.moma.org/about/curatorial-departments/photography' },
      { 'name': 'Exhibitions & Events', 'summary': '核实个展、群展、Projects 与展览年份。', 'url': 'https://www.moma.org/calendar/' },
      { 'name': 'MoMA PS1', 'summary': '与 MoMA 主馆分开记录的当代艺术机构与展览平台。', 'url': 'https://www.momaps1.org/' }
    ]
  },
  {
    'id': 'pompidou',
    'domain': 'art',
    'category': 'museums',
    'name': 'Centre Pompidou',
    'summary': '现代与当代艺术机构，涵盖摄影、影像、装置等多种媒介。',
    'url': 'https://www.centrepompidou.fr/',
    'tokens': [
      'Pompidou'
    ]
  },
  {
    'id': 'turner',
    'domain': 'art',
    'category': 'awards',
    'name': 'Turner Prize / 透纳奖',
    'summary': '当代艺术奖项，可容纳摄影、影像、装置等实践；获奖与提名分开查看。',
    'url': 'https://www.tate.org.uk/art/turner-prize',
    'tokens': [
      'Turner Prize',
      '透纳奖'
    ],
    'kind': '奖项'
  },
  {
    'id': 'duchamp',
    'domain': 'art',
    'category': 'awards',
    'name': 'Prix Marcel Duchamp',
    'summary': '法国当代艺术奖项；可沿提名艺术家、展览机构与具体项目继续研究。',
    'url': 'https://www.centrepompidou.fr/en/program/calendar/event/gG7sOu4',
    'tokens': [
      'Marcel Duchamp'
    ],
    'kind': '奖项'
  },
  {
    'category': 'magazines',
    'domain': 'photo',
    'focus': '比较书评描述的页序、材料与实际出版物。',
    'id': '1000words',
    'kind': '出版',
    'name': '1000 Words',
    'summary': '展览评论、摄影书评论与策展访谈。',
    'tokens': [
      '1000 Words'
    ],
    'track': '英国 · 在线评论',
    'url': 'https://1000wordsmag.com/about/'
  },
  {
    'category': 'magazines',
    'domain': 'photo',
    'focus': '对照创作访谈与成片，记录拍摄和编辑选择。',
    'id': 'bjp',
    'kind': '出版',
    'name': 'British Journal of Photography',
    'summary': '摄影项目、访谈与摄影书报道。',
    'tokens': [
      'British Journal of Photography'
    ],
    'track': '英国 · 杂志',
    'url': 'https://www.1854.photography/'
  },
  {
    'category': 'magazines',
    'domain': 'photo',
    'focus': '追踪委托条件如何影响作品的生产与展示。',
    'id': 'photoworks',
    'kind': '出版',
    'name': 'Photoworks',
    'summary': '连接摄影委托、出版与展览。',
    'tokens': [
      'Photoworks'
    ],
    'track': '英国 · 出版与委托',
    'url': 'https://photoworks.org.uk/'
  },
  {
    'category': 'magazines',
    'domain': 'photo',
    'focus': '完整阅读项目而非只看获选单张；刊载与获奖分开记录。',
    'id': 'lensculture',
    'kind': '出版',
    'name': 'LensCulture',
    'summary': '摄影项目、访谈与评论；另设独立奖项入口。',
    'tokens': [
      'LensCulture'
    ],
    'track': '国际 · 在线平台',
    'url': 'https://www.lensculture.com/'
  },
  {
    'category': 'exhibitions',
    'domain': 'photo',
    'focus': '比较单张摄影、图像装置与网络图像的展示方法。',
    'id': 'winterthur',
    'kind': '展览',
    'name': 'Fotomuseum Winterthur',
    'summary': '摄影与视觉文化博物馆。',
    'tokens': [
      'Fotomuseum Winterthur'
    ],
    'track': '瑞士 · 温特图尔',
    'url': 'https://www.fotomuseum.ch/en/'
  },
  {
    'category': 'exhibitions',
    'domain': 'photo',
    'focus': '从个展档案研究同一系列在不同空间的编排。',
    'id': 'co-berlin',
    'kind': '展览',
    'name': 'C/O Berlin',
    'summary': '摄影与视觉媒体展览机构。',
    'tokens': [
      'C/O Berlin'
    ],
    'track': '德国 · 柏林',
    'url': 'https://co-berlin.org/en'
  },
  {
    'category': 'exhibitions',
    'domain': 'photo',
    'focus': '比较底片、印相与出版版本。',
    'id': 'elysee',
    'kind': '展览',
    'name': 'Photo Elysée',
    'summary': '摄影博物馆、馆藏和研究资源。',
    'tokens': [
      'Photo Elysée',
      'Musée de l’Elysée'
    ],
    'track': '瑞士 · 洛桑',
    'url': 'https://elysee.ch/en/'
  },
  {
    'category': 'exhibitions',
    'domain': 'photo',
    'focus': '比较社会纪实与当代图像实践的策展关系。',
    'id': 'icp',
    'kind': '展览',
    'name': 'International Center of Photography',
    'summary': '结合摄影博物馆、教育与公共活动。',
    'tokens': [
      'International Center of Photography',
      'ICP'
    ],
    'track': '美国 · 纽约',
    'url': 'https://www.icp.org/'
  },
  {
    'category': 'exhibitions',
    'domain': 'photo',
    'focus': '追问照片的证据来自哪里，图说和声音如何改变它。',
    'id': 'le-bal',
    'kind': '展览',
    'name': 'LE BAL',
    'summary': '围绕作为文献的图像展开摄影和影像项目。',
    'tokens': [
      'LE BAL'
    ],
    'track': '法国 · 巴黎',
    'url': 'https://www.le-bal.fr/en'
  },
  {
    'category': 'exhibitions',
    'domain': 'photo',
    'focus': '对照静态照片、投影和电影的观看时长。',
    'id': 'jeu',
    'kind': '展览',
    'name': 'Jeu de Paume',
    'summary': '摄影、电影与当代图像展览。',
    'tokens': [
      'Jeu de Paume'
    ],
    'track': '法国 · 巴黎',
    'url': 'https://jeudepaume.org/en/'
  },
  {
    'category': 'exhibitions',
    'domain': 'photo',
    'focus': '从 Krajnak 的 Shadowings 研究档案介入、自拍与暗房劳动。',
    'id': 'huis',
    'kind': '展览',
    'name': 'Huis Marseille',
    'summary': '结合馆藏、专题展览与摄影书的摄影博物馆。',
    'tokens': [
      'Huis Marseille'
    ],
    'track': '荷兰 · 阿姆斯特丹',
    'url': 'https://huismarseille.nl/en/exhibitions/tarrah-krajnak/'
  },
  {
    'category': 'festivals',
    'domain': 'photo',
    'focus': '把展场建筑与作品一起记录，观察空间如何改变照片。',
    'id': 'kyoto',
    'kind': '展览',
    'name': 'KYOTOGRAPHIE 京都国际摄影节',
    'summary': '在京都不同场所呈现摄影的国际摄影节。',
    'tokens': [
      'KYOTOGRAPHIE',
      '京都国际摄影节'
    ],
    'track': '日本 · 京都',
    'url': 'https://www.kyotographie.jp/en/'
  },
  {
    'category': 'festivals',
    'domain': 'photo',
    'focus': '比较同一策展主题被转成哪些不同图像方法。',
    'id': 'europea',
    'kind': '展览',
    'name': 'Fotografia Europea',
    'summary': '围绕年度摄影展览与文化活动展开。',
    'tokens': [
      'Fotografia Europea'
    ],
    'track': '意大利 · 雷焦艾米利亚',
    'url': 'https://www.fotografiaeuropea.it/en/'
  },
  {
    'category': 'festivals',
    'domain': 'photo',
    'focus': '区分主题展览与作品评阅的不同参与身份。',
    'id': 'format',
    'kind': '展览',
    'name': 'FORMAT International Photography Festival',
    'summary': '国际摄影节、展览与交流项目。',
    'tokens': [
      'FORMAT'
    ],
    'track': '英国 · 德比',
    'url': 'https://formatfestival.com/'
  },
  {
    'category': 'festivals',
    'domain': 'photo',
    'focus': '比较地方叙述和全球图像传播的关系。',
    'id': 'lagos',
    'kind': '展览',
    'name': 'LagosPhoto',
    'summary': '国际摄影展览与公共交流平台。',
    'tokens': [
      'LagosPhoto',
      'Lagos Photo'
    ],
    'track': '尼日利亚 · 摄影节',
    'url': 'https://www.lagosphotofestival.com/'
  },
  {
    'category': 'awards',
    'domain': 'photo',
    'focus': '按年度追踪获奖者与候选名单，观察日本摄影新人的代际变化。',
    'id': 'kimura',
    'kind': '奖项',
    'name': '木村伊兵卫写真赏 / Kimura Ihei Photography Award',
    'summary': '朝日新闻社1975年创设的重要日本摄影新人奖；按年度建立获奖者索引。',
    'tokens': ['木村伊兵卫写真赏', 'Kimura Ihei Photography Award', 'Kimura Ihei Award'],
    'track': '新人 / 作品集',
    'url': 'https://publications.asahi.com/feature/kimura_award/'
  },
  {
    'category': 'awards',
    'domain': 'photo',
    'focus': '按届次主题比较完整入围系列。',
    'id': 'pictet',
    'kind': '奖项',
    'name': 'Prix Pictet',
    'summary': '围绕摄影与可持续性设立的主题奖项。',
    'tokens': [
      'Prix Pictet'
    ],
    'track': '项目 / 主题奖',
    'url': 'https://prix.pictet.com/'
  },
  {
    'category': 'awards',
    'domain': 'photo',
    'focus': '比较获奖艺术家不同阶段，不只看一张代表作。',
    'id': 'hasselblad',
    'kind': '奖项',
    'name': 'Hasselblad Award',
    'summary': '哈苏基金会的摄影奖，适合追踪长期创作实践。',
    'tokens': [
      'Hasselblad'
    ],
    'track': '长期贡献 / 成就',
    'url': 'https://www.hasselbladfoundation.org/en/'
  },
  {
    'category': 'awards',
    'domain': 'photo',
    'focus': '保留具体类别及年份；不同类别不混排。',
    'id': 'infinity',
    'kind': '奖项',
    'name': 'ICP Infinity Awards',
    'summary': '涵盖摄影艺术、新闻摄影与出版等不同类别。',
    'tokens': [
      'Infinity Award'
    ],
    'track': '综合 / 分类评选',
    'url': 'https://www.icp.org/infinity-awards'
  },
  {
    'category': 'museums',
    'domain': 'art',
    'focus': '结合亚洲艺术档案研究跨媒介叙事。',
    'id': 'mplus',
    'name': 'M+',
    'summary': '涵盖视觉艺术、设计、建筑与流动影像。',
    'tokens': [
      'M+'
    ],
    'track': '中国香港',
    'url': 'https://www.mplus.org.hk/en/'
  },
  {
    'category': 'museums',
    'domain': 'art',
    'focus': '比较艺术家早期和近期项目的材料变化。',
    'id': 'ucca',
    'name': 'UCCA 尤伦斯当代艺术中心',
    'summary': '呈现中国及国际当代艺术的展览与公共项目。',
    'tokens': [
      'UCCA',
      '尤伦斯'
    ],
    'track': '中国',
    'url': 'https://ucca.org.cn/en/'
  },
  {
    'category': 'museums',
    'domain': 'art',
    'focus': '沿展览目录追踪项目和策展关系。',
    'id': 'mori',
    'name': '森美术馆 Mori Art Museum',
    'summary': '当代艺术展览与研究机构。',
    'tokens': [
      'Mori Art Museum',
      '森美术馆'
    ],
    'track': '日本 · 东京',
    'url': 'https://www.mori.art.museum/en/'
  },
  {
    'category': 'museums',
    'domain': 'art',
    'focus': '结合媒介说明与展场照片区分不同版本。',
    'id': 'sfmoma',
    'name': 'SFMOMA',
    'summary': '现代与当代艺术、摄影和媒体艺术馆藏。',
    'tokens': [
      'SFMOMA'
    ],
    'track': '美国 · 旧金山',
    'url': 'https://www.sfmoma.org/'
  },
  {
    'category': 'museums',
    'domain': 'art',
    'focus': '观察 Darboven 图文档案如何占据墙面与空间。',
    'id': 'dia',
    'name': 'Dia Art Foundation',
    'summary': '长期装置、场域作品及艺术家项目。',
    'tokens': [
      'Dia Art Foundation',
      'Dia Chelsea',
      'Dia Beacon'
    ],
    'track': '美国',
    'url': 'https://diaart.org/collection/artist-a-to-z/darboven-hanne'
  },
  {
    'category': 'museums',
    'domain': 'art',
    'focus': '追踪场地、生产和后续档案，理解临时作品的保存。',
    'id': 'artangel',
    'name': 'Artangel',
    'summary': '在具体地点与情境中实现艺术家项目。',
    'tokens': [
      'Artangel'
    ],
    'track': '英国 · 艺术委托',
    'url': 'https://www.artangel.org.uk/'
  },
  {
    'category': 'magazines',
    'domain': 'art',
    'focus': '提取文章中的具体作品，再检验理论与制作的关系。',
    'id': 'eflux',
    'kind': '出版',
    'name': 'e-flux Journal',
    'summary': '当代艺术与文化议题的长篇文章。',
    'tokens': [
      'e-flux Journal'
    ],
    'track': '国际 · 理论期刊',
    'url': 'https://www.e-flux.com/journal'
  },
  {
    'category': 'magazines',
    'domain': 'art',
    'focus': '区分评论中的作品描述、解释与评价。',
    'id': 'frieze',
    'kind': '出版',
    'name': 'Frieze 杂志',
    'summary': '艺术评论、访谈和专题；与艺博会分开查看。',
    'tokens': [
      'Frieze magazine'
    ],
    'track': '国际 · 评论',
    'url': 'https://www.frieze.com/'
  },
  {
    'category': 'magazines',
    'domain': 'art',
    'focus': '先观察工具、手势与协作，再读艺术家的解释。',
    'id': 'art21',
    'kind': '出版',
    'name': 'Art21',
    'summary': '通过纪录片呈现艺术家的工作过程。',
    'tokens': [
      'Art21'
    ],
    'track': '美国 · 影像访谈',
    'url': 'https://art21.org/'
  },
  {
    'category': 'awards',
    'domain': 'photo',
    'focus': '按具体比赛与年份阅读获选作品和评委理由。',
    'id': 'lens-awards',
    'kind': '奖项',
    'name': 'LensCulture 摄影奖项',
    'sections': [
      {
        'name': 'Critics’ Choice · 2026',
        'summary': '获选摄影师、作品与评委说明。',
        'url': 'https://www.lensculture.com/photo-competitions/critics-choice/2026/winners'
      },
      {
        'name': 'Black & White Photography Awards · 历届入口',
        'summary': '按年份进入黑白摄影奖记录。',
        'url': 'https://www.lensculture.com/photo-competitions'
      },
      {
        'name': '2026 Critics’ Choice · Mihai Ciama',
        'summary': 'St Mary at Nicula Monastery, Romania；由 Alex Kahl 选择。',
        'url': 'https://www.lensculture.com/photo-competitions/critics-choice/2026/winners'
      },
      {
        'name': '2026 Critics’ Choice · Jermain Cikic',
        'summary': 'The ’77 Project；由 Alex Kahl 选择。',
        'url': 'https://www.lensculture.com/photo-competitions/critics-choice/2026/winners'
      }
    ],
    'summary': '不同主题的摄影比赛与评委选择；获奖、决赛入围和 Juror’s Pick 分开记录。',
    'tokens': [
      'LensCulture'
    ],
    'track': '综合 / 分类评选',
    'url': 'https://www.lensculture.com/photo-competitions'
  },
  {
    'category': 'awards',
    'domain': 'photo',
    'focus': '比较完整系列的叙事与单张照片的判断标准。',
    'id': 'sony',
    'kind': '奖项',
    'name': 'Sony World Photography Awards',
    'summary': '官网当前分 Series、Single Image、Student 和 Youth；历史档案常使用 Professional 和 Open。',
    'tokens': [
      'Sony World Photography',
      'World Photography Awards'
    ],
    'track': '综合 / 分类评选',
    'url': 'https://www.worldphoto.org/sony-world-photography-awards'
  },
  {
    'category': 'awards',
    'domain': 'photo',
    'focus': '从获奖系列阅读人物关系、拍摄距离与序列。',
    'id': 'loba',
    'kind': '奖项',
    'name': 'Leica Oskar Barnack Award',
    'summary': '以摄影系列研究人与环境及社会的关系，设主奖与新人方向。',
    'tokens': [
      'Oskar Barnack',
      'LOBA'
    ],
    'track': '纪实 / 新闻',
    'url': 'https://www.leica-oskar-barnack-award.com/en/'
  },
  {
    'category': 'awards',
    'domain': 'photo',
    'focus': '对照提案、完成项目、展览和出版。',
    'id': 'hcb',
    'kind': '奖项',
    'name': 'Henri Cartier-Bresson Creation Award',
    'summary': '原 HCB Award，支持具有纪实基础的摄影师开展或延续项目。',
    'tokens': [
      'HCB Award',
      'Cartier-Bresson'
    ],
    'track': '项目 / 创作资助',
    'url': 'https://www.henricartierbresson.org/en/awards-and-grant/henri-cartier-bresson-creation-award/'
  },
  {
    'category': 'awards',
    'domain': 'photo',
    'focus': '从提名到完成项目追踪拍摄与出版的变化。',
    'id': 'prix-elysee',
    'kind': '奖项',
    'name': 'Prix Elysée',
    'summary': '由 Photo Elysée 组织、支持摄影生产的国际奖项。',
    'tokens': [
      'Prix Elysée',
      'Prix Elysee'
    ],
    'track': '项目 / 创作资助',
    'url': 'https://prixelysee.ch/'
  },
  {
    'category': 'awards',
    'domain': 'photo',
    'focus': '比较主题连贯性、单张强度和技术选择。',
    'id': 'aperture-portfolio',
    'kind': '奖项',
    'name': 'Aperture Portfolio Prize',
    'summary': '关注尚未广泛展示的当代摄影作品组，与摄影书奖分别评选。',
    'tokens': [
      'Aperture Portfolio Prize'
    ],
    'track': '新人 / 作品集',
    'url': 'https://aperture.org/calls-for-entry/portfolio-prize/'
  },
  {
    'category': 'awards',
    'domain': 'photo',
    'focus': '观察图像转成珂罗版后的层次和材料变化。',
    'id': 'hariban',
    'kind': '奖项',
    'name': 'HARIBAN AWARD',
    'summary': '便利堂将当代摄影与珂罗版印刷工艺连接起来的奖项。',
    'tokens': [
      'HARIBAN'
    ],
    'track': '工艺 / 印相',
    'url': 'https://www.benrido.co.jp/haribanaward/'
  },
  {
    'category': 'awards',
    'domain': 'photo',
    'focus': '结合事件背景、图说与编辑序列阅读。',
    'id': 'wpp',
    'kind': '奖项',
    'name': 'World Press Photo Contest',
    'summary': '新闻摄影与纪实摄影赛事，并形成公开展览体系。',
    'tokens': [
      'World Press Photo'
    ],
    'track': '纪实 / 新闻',
    'url': 'https://www.worldpressphoto.org/contest'
  },
  {
    'category': 'awards',
    'domain': 'photo',
    'focus': '关注长期进入现场的方法和仍待完成的调查。',
    'id': 'smith',
    'kind': '奖项',
    'name': 'W. Eugene Smith Grant',
    'summary': '资助独立摄影师开展长期视觉叙事。',
    'tokens': [
      'Eugene Smith'
    ],
    'track': '纪实 / 新闻',
    'url': 'https://www.smithfund.org/'
  },
  {
    'category': 'awards',
    'domain': 'photo',
    'focus': '确认具体计划，再比较项目、奖项与展览机会。',
    'id': 'ph-grant',
    'kind': '奖项',
    'name': 'PhMuseum Photography Grant',
    'summary': '支持摄影与视觉叙事，另设女性摄影师及摄影书计划。',
    'tokens': [
      'PhMuseum',
      'PHmuseum'
    ],
    'track': '项目 / 创作资助',
    'url': 'https://phmuseum.com/grants'
  },
  {
    'category': 'awards',
    'domain': 'photo',
    'focus': '比较提案与最终展览实现的规模和材料。',
    'id': 'vevey-grant',
    'kind': '奖项',
    'name': 'Grand Prix Images Vevey',
    'summary': '支持新摄影项目，并在随后 Images Vevey 双年展呈现。',
    'tokens': [
      'Grand Prix Images',
      'Vevey International Photography'
    ],
    'track': '项目 / 创作资助',
    'url': 'https://www.images.ch/en/grand-prix/'
  },
  {
    'category': 'awards',
    'domain': 'photo',
    'focus': '研究编辑、设计与装订如何推进项目。',
    'id': 'vevey-book',
    'kind': '奖项',
    'name': 'Images Vevey Book Award',
    'summary': 'Images Vevey 体系中的摄影书支持计划。',
    'tokens': [
      'Images Book Award',
      'Images Vevey Book'
    ],
    'track': '摄影书 / 样书',
    'url': 'https://www.images.ch/en/grand-prix/'
  },
  {
    'category': 'awards',
    'domain': 'photo',
    'focus': '重点阅读页序、跨页、折页与装订。',
    'id': 'dummy',
    'kind': '奖项',
    'name': 'Dummy Award（原 Kassel Dummy Award）',
    'summary': '面向未出版摄影样书的国际评选，保留旧名便于追溯。',
    'tokens': [
      'Dummy Award',
      'Kassel Dummy'
    ],
    'track': '摄影书 / 样书',
    'url': 'https://dummyaward.org/dummy-award-2026/'
  },
  {
    'category': 'awards',
    'domain': 'photo',
    'focus': '比较样书与最后印本的变化。',
    'id': 'luma-dummy',
    'kind': '奖项',
    'name': 'LUMA Rencontres Dummy Book Award',
    'summary': '阿尔勒与 LUMA 的样书出版支持；所链为 2024 届官方历史说明。',
    'tokens': [
      'LUMA Rencontres',
      'Luma Dummy'
    ],
    'track': '摄影书 / 样书',
    'url': 'https://www.rencontres-arles.com/en/luma-rencontres-dummy-book-award-arles-2024-2'
  },
  {
    'category': 'awards',
    'domain': 'photo',
    'focus': '区分参展、评审奖和观众奖的具体身份。',
    'id': 'roederer',
    'kind': '奖项',
    'name': 'Louis Roederer Discovery Award',
    'summary': '与阿尔勒摄影节相关的发现奖。',
    'tokens': [
      'Louis Roederer Discovery',
      'Prix Découverte'
    ],
    'track': '新人 / 作品集',
    'url': 'https://www.fondation-louisroederer.com/en/'
  },
  {
    'category': 'awards',
    'domain': 'photo',
    'focus': '从尚未完成的项目部分理解资助用途。',
    'id': 'inge',
    'kind': '奖项',
    'name': 'Inge Morath Award',
    'summary': '由 Magnum 相关机构支持的摄影项目生产奖。',
    'tokens': [
      'Inge Morath'
    ],
    'track': '项目 / 创作资助',
    'url': 'https://www.magnumfoundation.org/news/2026-inge-morath-award'
  },
  {
    'category': 'exhibitions',
    'domain': 'photo',
    'focus': '对照方法、题材与展示，入选人才计划不写成获奖。',
    'id': 'foamtalent',
    'kind': '展览',
    'name': 'Foam Talent',
    'summary': '连接摄影新实践、展示与出版的人才计划。点击后直接显示具体届次艺术家；当前已先补全 2016 届 24 位，与 Paul Huf 奖分别查看。',
    'tokens': [
      'Foam Talent'
    ],
    'track': '人才计划 / 展览',
    'url': 'https://www.foam.org/talent'
  },
  {
    'category': 'festivals',
    'domain': 'photo',
    'focus': '区分官方展、合作展和奖项身份。',
    'id': 'phe',
    'kind': '展览',
    'name': 'PHotoESPAÑA',
    'summary': '通过多个展览和活动呈现摄影与视觉艺术。',
    'tokens': [
      'PHotoEspaña',
      'PHotoESPAÑA',
      'PhotoEspaña'
    ],
    'track': '西班牙 · 摄影节',
    'url': 'https://phe.es/'
  },
  {
    'category': 'festivals',
    'domain': 'photo',
    'focus': '区分主展、参与空间和作品评阅。',
    'id': 'fotofest',
    'kind': '展览',
    'name': 'FotoFest Biennial',
    'summary': '摄影与图像艺术双年展，另设评阅及合作空间。',
    'tokens': [
      'FotoFest'
    ],
    'track': '美国 · 休斯敦',
    'url': 'https://fotofest.org/'
  },
  {
    'category': 'festivals',
    'domain': 'photo',
    'focus': '比较户外图像、摄影书和室内展示。',
    'id': 'belfast',
    'kind': '展览',
    'name': 'Belfast Photo Festival',
    'summary': '通过城市展览和公开征集呈现当代摄影。',
    'tokens': [
      'Belfast Photo Festival'
    ],
    'track': '英国 · 贝尔法斯特',
    'url': 'https://www.belfastphotofestival.com/'
  },
  {
    'category': 'festivals',
    'domain': 'photo',
    'focus': '比较项目陈述与展览形式。',
    'id': 'circulations',
    'kind': '展览',
    'name': 'Circulation(s)',
    'summary': '呈现欧洲青年摄影实践的摄影节。',
    'tokens': [
      'Circulation(s)',
      'Circulations'
    ],
    'track': '法国 · 欧洲青年摄影',
    'url': 'https://www.festival-circulations.com/en/'
  },
  {
    'category': 'fairs',
    'domain': 'photo',
    'focus': '记录作品由哪家画廊或出版社呈现。',
    'id': 'parisphoto',
    'kind': '展览',
    'name': 'Paris Photo',
    'summary': '画廊、出版和摄影市场的重要交流场域，与摄影书奖分列。',
    'tokens': [
      'Paris Photo'
    ],
    'track': '法国 · 摄影艺博会',
    'url': 'https://www.parisphoto.com/en-gb.html'
  },
  {
    'category': 'awards',
    'domain': 'photo',
    'focus': '观察摄影师与被摄者的合作、姿态、场景和单张肖像的叙述能力。',
    'id': 'npgportrait',
    'kind': '奖项',
    'name': 'NPG Photo Portrait Prize（Taylor Wessing 历史名称）',
    'summary': '英国国家肖像馆的摄影肖像奖及展览；官网 2026 展览使用 Winston Taylor 名称，历史记录保留原届冠名。',
    'tokens': [
      'Taylor Wessing',
      'Winston Taylor',
      'Photo Portrait Prize'
    ],
    'track': '肖像',
    'url': 'https://www.npg.org.uk/whatson/exhibitions/2026/winston-taylor-photo-portrait-prize-2026',
    'sections': [
      {
        'name': '2026 入围 · James Clifford Kent',
        'summary': 'Neisser, Pinar del Río, Cuba，来自 Yuma。',
        'url': 'https://www.npg.org.uk/whatson/exhibitions/2026/winston-taylor-photo-portrait-prize-2026'
      },
      {
        'name': '2026 入围 · Marcie Docherty',
        'summary': 'PE，来自 In Pursuit of Muscle。',
        'url': 'https://www.npg.org.uk/whatson/exhibitions/2026/winston-taylor-photo-portrait-prize-2026'
      },
      {
        'name': '2026 入围 · Katie Hitchcock-Smith',
        'summary': 'Moroccan (Amazigh Cowboys)，来自 Tajine Westerns。',
        'url': 'https://www.npg.org.uk/whatson/exhibitions/2026/winston-taylor-photo-portrait-prize-2026'
      },
      {
        'name': '2026 入围 · Max Pattenden',
        'summary': 'Havannah, Lee Moor。官网注明获奖者将于 2026 年 11 月 3 日公布；以上均为入围记录。',
        'url': 'https://www.npg.org.uk/whatson/exhibitions/2026/winston-taylor-photo-portrait-prize-2026'
      }
    ]
  },
  {
    'category': 'awards',
    'domain': 'photo',
    'focus': '对照澳大利亚摄影中不同题材与工艺，区分入围展、获奖和收藏。',
    'id': 'bowness',
    'kind': '奖项',
    'name': 'Bowness Photography Prize',
    'summary': '澳大利亚摄影博物馆 MAPh 的摄影奖及入围展览，获奖作品进入馆藏。',
    'tokens': [
      'Bowness'
    ],
    'track': '地区实践 / 馆藏奖',
    'url': 'https://maph.org.au/'
  }
];
