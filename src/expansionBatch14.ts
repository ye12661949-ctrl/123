import type { Artist } from './data';
import type { ArtistArchive, ArchiveProject } from './archiveData';

export const archiveBatch14: Record<string, ArtistArchive> = {
  'michael-wolf': {
    artistId: 'michael-wolf',
    projectCoverage: '4 个城市 / 居所 / 通勤项目已索引 · 2000年代–2010年代',
    imageCoverage: '',
    note: '从建筑外立面进入房间，再到车厢与玻璃幕墙。这里列出四个关键系列，不等同于作品全集；100 x 100 的图像仍待补。',
    projects: [
      {
        title: 'Architecture of Density',
        period: '2000年代起',
        cluster: '建筑外立面 / 图像裁切',
        summary: '拍摄香港高层住宅，把天空与地平线排除在构图之外；窗户、晾衣和空调成为辨认居民生活的细节。',
        actions: [
          '选择建筑立面视点',
          '紧密裁切天空与街道',
          '保留重复网格中的生活痕迹',
          '大尺幅彩色输出'
        ],
        sourceUrl: 'https://photomichaelwolf.com/life-in-cities/architecture-of-density-2/',
        images: [
          {
            url: 'https://d7hftxdivxxvm.cloudfront.net/?height=800&quality=50&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FlDqb_yKRU1EWgrI8hJRHmg%2Fnormalized.jpg&width=640',
            title: 'Architecture of Density #120, 2008',
            credit: '© Michael Wolf',
            sourceUrl: 'https://www.artsy.net/artwork/michael-wolf-1954-2019-architecture-of-density-number-120-2',
            sourceLabel: 'Artsy / artwork record'
          }
        ],
        relations: [
          {
            kind: '展览',
            label: 'Robert Koch Gallery',
            detail: '2005 个展'
          }
        ]
      },
      {
        title: '100 x 100',
        period: '2006',
        cluster: '居住空间 / 重复格式',
        summary: '在石硖尾屋邨拍摄一百间约一百平方英尺的房间与居民，以相似视角比较相近面积内不同的生活安排。',
        actions: [
          '进入居民房间拍摄',
          '使用广角容纳狭小室内',
          '让居民与家具共同进入画面',
          '将一百张照片并置'
        ],
        sourceUrl: 'https://photomichaelwolf.com/life-in-cities/100x100-2/',
        images: [],
        relations: [
          {
            kind: '展览',
            label: 'Copy Art & 100 x 100 — Robert Koch Gallery',
            detail: '2007'
          }
        ]
      },
      {
        title: 'Transparent City',
        period: '2007',
        cluster: '城市夜景 / 公私边界',
        summary: '拍摄芝加哥玻璃幕墙建筑，建筑网格与透过窗户可见的室内生活形成整体和局部的对照。',
        actions: [
          '从高处拍摄城市建筑',
          '在暮色与夜间记录窗户灯光',
          '放大室内人物和细节',
          '建筑全景与局部图像对照'
        ],
        sourceUrl: 'https://photomichaelwolf.com/life-in-cities/transparent-city/',
        images: [
          {
            url: 'https://fosterwhite.com/cdn/shop/products/19026.jpg?v=1603675415',
            title: 'Transparent City 92',
            credit: '© Michael Wolf',
            sourceUrl: 'https://fosterwhite.com/products/transparent-city-92',
            sourceLabel: 'Foster/White Gallery'
          }
        ],
        relations: []
      },
      {
        title: 'Tokyo Compression',
        period: '2009–2010年代',
        cluster: '通勤身体 / 公共空间',
        summary: '从站台透过车窗拍拥挤车厢中的乘客，玻璃、水汽和被挤压的身体构成近距离肖像。',
        actions: [
          '在站台面向车窗拍摄',
          '保留凝结水汽与玻璃遮挡',
          '紧密裁切面部与身体',
          '以连续肖像形成系列'
        ],
        sourceUrl: 'https://photomichaelwolf.com/life-in-cities/tokyo-compression/',
        images: [
          {
            url: 'https://www.creativeboom.com/upload/articles/27/270dc69b36db4a171613530a92a4d71fcaf2008a_944.jpg',
            title: 'Tokyo Compression — series image',
            credit: '© Michael Wolf',
            sourceUrl: 'https://www.creativeboom.com/inspiration/michael-wolfs-tokyo-compression-shows-an-undignified-way-to-travel-in-japan/',
            sourceLabel: 'Creative Boom'
          }
        ],
        relations: []
      }
    ],
    awards: [],
    exhibitions: [
      'Architecture of Density — Robert Koch Gallery 2005',
      'Copy Art & 100 x 100 — Robert Koch Gallery 2007',
      'Life in Cities — Les Rencontres d’Arles 2017'
    ],
    sources: [
      {
        label: 'Michael Wolf — projects',
        url: 'https://photomichaelwolf.com/'
      },
      {
        label: 'Robert Koch Gallery — biography and dated works',
        url: 'https://kochgallery.com/artists/michael-wolf/'
      },
      {
        label: '100 x 100 — exhibition record',
        url: 'https://kochgallery.com/exhibitions/michael-wolf-copy-art-2007/'
      }
    ]
  },
  'roni-horn': {
    artistId: 'roni-horn',
    projectCoverage: '4 个肖像 / 图文 / 水装置项目已索引 · 1994–2007',
    imageCoverage: '',
    note: '先建立摄影、重复与水之间的关键路径。作品年份按对应机构记录标注；You are the Weather 的完成年份在不同机构中有1995与1996两种记法，此处随 Whitney。',
    projects: [
      {
        title: 'You are the Weather',
        period: '1994–1995',
        cluster: '重复肖像 / 身体与天气',
        summary: '在冰岛温泉中反复拍摄同一位女性的面部，组成一百张黑白与彩色肖像。细微表情变化来自光、风和天气，也改变观众对人物情绪的判断。',
        actions: [
          '在不同温泉拍摄同一参与者',
          '保持近距离面部格式',
          '组织36张银盐与64张彩色照片',
          '沿展墙连续排列'
        ],
        sourceUrl: 'https://whitney.org/exhibitions/roni-horn/art',
        images: [
          {
            url: 'https://whitneymedia.org/assets/image/820471/large_roni_horn_you_are_the_weather_detail_1.jpg',
            title: 'You are the Weather — detail',
            credit: '© Roni Horn',
            sourceUrl: 'https://whitney.org/exhibitions/roni-horn/art',
            sourceLabel: 'Whitney Museum'
          }
        ],
        relations: []
      },
      {
        title: 'This is me, This is you',
        period: '1998–2000',
        cluster: '成对肖像 / 相似与差异',
        summary: '以九十六张彩色照片组成两组肖像阵列。相近画面之间的小变化要求观众通过比较与记忆来观看。',
        actions: [
          '连续拍摄人物',
          '挑选相近但不同的照片',
          '分成两组网格展示',
          '让观众在两组之间比较'
        ],
        sourceUrl: 'https://whitney.org/exhibitions/roni-horn/art',
        images: [
          {
            url: 'https://whitneymedia.org/assets/image/821174/large_12.jpg',
            title: 'This is me, This is you — installation detail',
            credit: '© Roni Horn',
            sourceUrl: 'https://whitney.org/exhibitions/roni-horn/art',
            sourceLabel: 'Whitney Museum'
          }
        ],
        relations: []
      },
      {
        title: 'Still Water (The River Thames, for Example)',
        period: '1999',
        cluster: '水面摄影 / 注释 / 版画',
        summary: '泰晤士河水面的照片与密集文字注释组成十五张平版印刷作品，阅读会在水纹和文字之间往返。',
        actions: [
          '拍摄河流水面',
          '给画面细节编号',
          '将个人联想与文字注释编入版面',
          '在无涂布纸上平版印刷'
        ],
        sourceUrl: 'https://whitney.org/exhibitions/roni-horn/art',
        images: [
          {
            url: 'https://whitneymedia.org/assets/image/820467/large_roni_horn_still_water_the_river_thames_for_example_detail_3.jpg',
            title: 'Still Water — detail',
            credit: '© Roni Horn',
            sourceUrl: 'https://whitney.org/exhibitions/roni-horn/art',
            sourceLabel: 'Whitney Museum'
          }
        ],
        relations: [
          {
            kind: '收藏',
            label: 'Tate',
            detail: '馆藏；见 Whitney 展览作品记录'
          }
        ]
      },
      {
        title: 'Vatnasafn / Library of Water',
        period: '2007–',
        cluster: '采集 / 场域装置 / 社区',
        summary: '在冰岛 Stykkishólmur 的旧图书馆中安装二十四根玻璃柱，盛放来自不同冰川的水；地面嵌入天气词语，并收集当地居民的天气叙述。',
        actions: [
          '与当地合作者采集冰川冰块并融水',
          '将水封入等高玻璃柱',
          '把冰岛语与英语天气词嵌入地面',
          '访谈当地居民并出版天气故事',
          '让建筑同时承载社区活动'
        ],
        sourceUrl: 'https://www.artangel.org.uk/project/library-of-water/',
        images: [
          {
            url: 'https://media.artangel.org.uk/images/2007v_14.2e16d0ba.fill-2000x500.jpg',
            title: 'Library of Water, 2007',
            credit: '© Roni Horn / photograph Roni Horn',
            sourceUrl: 'https://www.artangel.org.uk/project/library-of-water/',
            sourceLabel: 'Artangel'
          }
        ],
        relations: [
          {
            kind: '展览',
            label: 'Artangel — Library of Water',
            detail: '2007年开放；长期项目'
          },
          {
            kind: '出版',
            label: 'Weather Reports You',
            detail: '2007'
          }
        ]
      }
    ],
    awards: [],
    exhibitions: [
      'Roni Horn aka Roni Horn — Whitney Museum 2009–2010',
      'Library of Water — Artangel, Stykkishólmur 2007–'
    ],
    sources: [
      {
        label: 'Whitney — exhibition works',
        url: 'https://whitney.org/exhibitions/roni-horn/art'
      },
      {
        label: 'De Pont — You are the Weather',
        url: 'https://www.depont.nl/en/collection/artists/roni-horn/you-are-the-weather'
      },
      {
        label: 'Artangel — Library of Water',
        url: 'https://www.artangel.org.uk/project/library-of-water/'
      }
    ]
  }
};

export const archiveExtensions14: Record<string, ArchiveProject[]> = {
  'lorna-simpson': [
    {
      title: 'Coiffure',
      period: '1991',
      cluster: '摄影与文字 / 头发与面具',
      summary: '三张银盐照片把女性、假发与非洲面具的背面并列，另配十块刻字塑料铭牌。相似轮廓把发型、遮蔽和身份判断连接起来。',
      actions: [
        '分别拍摄人物、假发与面具背面',
        '使用相近的椭圆形构图',
        '制作十块刻字塑料铭牌',
        '把三张照片与文字共同安装'
      ],
      sourceUrl: 'https://lsimpsonstudio.com/photographic-works/1991',
      images: [
        {
          url: 'https://static.livebooks.com/a5fe42e308a84253b5c69b5cb36cbd24/i/d5d4ca1dc3c247569bfd97b8ead1de58/1/GCuCv726vxAVM9sgguVj4g/Coiffure_LSimpson_1991_EditedBy_JamesWang_72dpi_2560px.jpg',
          title: 'Coiffure, 1991',
          credit: '© Lorna Simpson',
          sourceUrl: 'https://lsimpsonstudio.com/photographic-works/1991',
          sourceLabel: 'Lorna Simpson Studio'
        }
      ],
      relations: []
    },
    {
      title: '1957–2009',
      period: '2009',
      cluster: '旧照片 / 自我重演 / 档案',
      summary: '把找到的1957年照片与艺术家在2009年的重演图像组织在一起，让旧姿态、现在的身体与照片年代互相干扰。官网完整作品记录为307张银盐照片，局部展出不能等同于整组数量。',
      actions: [
        '搜集既有照片',
        '根据旧姿态与场景重新表演拍摄',
        '将新旧银盐照片以相近尺寸装框',
        '以多图阵列形成比较'
      ],
      sourceUrl: 'https://lsimpsonstudio.com/photographic-works/2009-2013',
      images: [
        {
          url: 'https://static.livebooks.com/a5fe42e308a84253b5c69b5cb36cbd24/i/ecbe5b11bd37471ba8c782fc74730fde/1/GCuCv726vxAVM9sgguVj4g/1957-2009_LSimpson_InstallationView_RennieCollection_PhotoCred_BlaineCampbell_004_72dpi_1600px.jpg',
          title: '1957–2009 — installation detail',
          credit: '© Lorna Simpson / photo Blaine Campbell',
          sourceUrl: 'https://lsimpsonstudio.com/photographic-works/2009-2013',
          sourceLabel: 'Lorna Simpson Studio'
        }
      ],
      relations: [
        {
          kind: '展览',
          label: 'Jeu de Paume',
          detail: '2013'
        },
        {
          kind: '展览',
          label: 'BALTIC / Haus der Kunst',
          detail: '2014'
        }
      ]
    }
  ],
  'martha-rosler': [
    {
      title: 'In the Place of the Public: Airport Series',
      period: '1983–',
      cluster: '机场 / 图文 / 公共空间',
      summary: '利用受邀旅行的间隙持续拍摄机场航站楼，把候机、通道、休息与指令性语言放在一起，研究流动空间如何安排人的行为。',
      actions: [
        '在旅行途中累积机场照片',
        '观察候机区、通道和旅客身体',
        '以类似指示牌的语气编写文字',
        '将照片与乙烯基字共同展示'
      ],
      sourceUrl: 'https://www.martharosler.net/in-the-place-of-the-public-carousel',
      images: [],
      relations: [
        {
          kind: '出版',
          label: 'In the Place of the Public',
          detail: 'Cantz, 1998；另有1993年影像版本'
        }
      ]
    },
    {
      title: 'Garage Sale / Meta-Monumental Garage Sale',
      period: '1973 / 2012',
      cluster: '行为 / 二手物品 / 博物馆交易',
      summary: '将旧物售卖放进艺术空间，观众实际挑选、议价和购买。2012年 MoMA 版本接收艺术家、馆员与公众捐赠，并保留早期项目的幻灯与声音材料。',
      actions: [
        '征集日常二手物品',
        '在展厅搭设真实售卖摊位',
        '艺术家与观众当面议价',
        '播放旧家庭快照与声音',
        '记录买家及其购买物'
      ],
      sourceUrl: 'https://www.moma.org/interactives/exhibitions/2012/garagesale/about.html',
      images: [
        {
          url: 'https://www.moma.org/d/c/installation_images/W1siZiIsIjI1ODA4MiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=2354b06eaf5358d4',
          title: 'Meta-Monumental Garage Sale — MoMA installation',
          credit: '© Martha Rosler / photo Thomas Griesel',
          sourceUrl: 'https://www.moma.org/calendar/exhibitions/1261/installation_images/7781',
          sourceLabel: 'MoMA'
        }
      ],
      relations: [
        {
          kind: '展览',
          label: 'UC San Diego',
          detail: 'Monumental Garage Sale, 1973'
        },
        {
          kind: '展览',
          label: 'MoMA',
          detail: 'Meta-Monumental Garage Sale, 2012'
        },
        {
          kind: '策展',
          label: 'Sabine Breitwieser / Ana Janevski',
          detail: 'MoMA 2012'
        }
      ]
    }
  ]
};

export const artistBatch14: Artist[] = [
  {
    id: 'michael-wolf',
    name: 'Michael Wolf',
    chineseName: '迈克尔·沃尔夫',
    born: '1954–2019',
    base: 'Hong Kong / Paris（生前）',
    intro: '通过建筑立面、狭小住宅、通勤车厢与玻璃幕墙，研究城市密度怎样落到具体的身体和生活空间。',
    methods: [
      '城市摄影',
      '类型化摄影',
      '肖像',
      '长期项目',
      '裁切'
    ],
    subjects: [
      '城市',
      '居住',
      '公共与私人',
      '身体',
      '密度'
    ],
    outputs: [
      '摄影',
      '摄影书',
      '大型彩色照片'
    ],
    institutions: [
      'Les Rencontres d’Arles',
      'Museum of Contemporary Photography',
      'Robert Koch Gallery'
    ],
    achievements: [
      'Life in Cities — Arles 2017 回顾展'
    ],
    whyImportant: '可以沿着四种相机位置比较：在楼外看重复结构，进屋看个人布置，从车窗看身体压力，再透过幕墙看公共与私人边界。',
    images: [
      {
        url: 'https://d7hftxdivxxvm.cloudfront.net/?height=800&quality=50&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FlDqb_yKRU1EWgrI8hJRHmg%2Fnormalized.jpg&width=640',
        title: 'Architecture of Density #120, 2008',
        credit: '© Michael Wolf',
        sourceUrl: 'https://www.artsy.net/artwork/michael-wolf-1954-2019-architecture-of-density-number-120-2',
        sourceLabel: 'Artsy / artwork record'
      }
    ],
    sourceLabel: 'Michael Wolf projects',
    sourceUrl: 'https://photomichaelwolf.com/',
    projects: [
      {
        year: '2000年代起',
        title: 'Architecture of Density',
        type: '建筑外立面 / 图像裁切',
        facts: [
          '选择建筑立面视点',
          '紧密裁切天空与街道',
          '保留重复网格中的生活痕迹',
          '大尺幅彩色输出'
        ],
        reading: '拍摄香港高层住宅，把天空与地平线排除在构图之外；窗户、晾衣和空调成为辨认居民生活的细节。'
      },
      {
        year: '2006',
        title: '100 x 100',
        type: '居住空间 / 重复格式',
        facts: [
          '进入居民房间拍摄',
          '使用广角容纳狭小室内',
          '让居民与家具共同进入画面',
          '将一百张照片并置'
        ],
        reading: '在石硖尾屋邨拍摄一百间约一百平方英尺的房间与居民，以相似视角比较相近面积内不同的生活安排。'
      },
      {
        year: '2007',
        title: 'Transparent City',
        type: '城市夜景 / 公私边界',
        facts: [
          '从高处拍摄城市建筑',
          '在暮色与夜间记录窗户灯光',
          '放大室内人物和细节',
          '建筑全景与局部图像对照'
        ],
        reading: '拍摄芝加哥玻璃幕墙建筑，建筑网格与透过窗户可见的室内生活形成整体和局部的对照。'
      },
      {
        year: '2009–2010年代',
        title: 'Tokyo Compression',
        type: '通勤身体 / 公共空间',
        facts: [
          '在站台面向车窗拍摄',
          '保留凝结水汽与玻璃遮挡',
          '紧密裁切面部与身体',
          '以连续肖像形成系列'
        ],
        reading: '从站台透过车窗拍拥挤车厢中的乘客，玻璃、水汽和被挤压的身体构成近距离肖像。'
      }
    ]
  },
  {
    id: 'roni-horn',
    name: 'Roni Horn',
    chineseName: '罗妮·霍恩',
    born: '1955',
    base: 'New York / Iceland（长期工作脉络）',
    intro: '将重复肖像、水面、文字、玻璃和场地组织成观看实验，研究相似事物之间的细微变化。',
    methods: [
      '重复肖像',
      '序列编辑',
      '文本 + 摄影',
      '材料采集',
      '场域特定'
    ],
    subjects: [
      '身份',
      '水',
      '天气',
      '感知',
      '相似与差异'
    ],
    outputs: [
      '摄影',
      '版画',
      '雕塑',
      '空间装置',
      '书'
    ],
    institutions: [
      'Whitney Museum',
      'Tate',
      'Artangel',
      'Fotomuseum Winterthur'
    ],
    achievements: [
      'Roni Horn aka Roni Horn — Whitney 2009–2010'
    ],
    whyImportant: '同一个人的表情、同一片水与相同玻璃柱，可以通过重复和空间安排形成持续变化的观看。作品机制来自比较、记忆和观众移动。',
    images: [
      {
        url: 'https://whitneymedia.org/assets/image/820471/large_roni_horn_you_are_the_weather_detail_1.jpg',
        title: 'You are the Weather — detail',
        credit: '© Roni Horn',
        sourceUrl: 'https://whitney.org/exhibitions/roni-horn/art',
        sourceLabel: 'Whitney Museum'
      }
    ],
    sourceLabel: 'Whitney Museum',
    sourceUrl: 'https://whitney.org/exhibitions/roni-horn/art',
    projects: [
      {
        year: '1994–1995',
        title: 'You are the Weather',
        type: '重复肖像 / 身体与天气',
        facts: [
          '在不同温泉拍摄同一参与者',
          '保持近距离面部格式',
          '组织36张银盐与64张彩色照片',
          '沿展墙连续排列'
        ],
        reading: '在冰岛温泉中反复拍摄同一位女性的面部，组成一百张黑白与彩色肖像。细微表情变化来自光、风和天气，也改变观众对人物情绪的判断。'
      },
      {
        year: '1998–2000',
        title: 'This is me, This is you',
        type: '成对肖像 / 相似与差异',
        facts: [
          '连续拍摄人物',
          '挑选相近但不同的照片',
          '分成两组网格展示',
          '让观众在两组之间比较'
        ],
        reading: '以九十六张彩色照片组成两组肖像阵列。相近画面之间的小变化要求观众通过比较与记忆来观看。'
      },
      {
        year: '1999',
        title: 'Still Water (The River Thames, for Example)',
        type: '水面摄影 / 注释 / 版画',
        facts: [
          '拍摄河流水面',
          '给画面细节编号',
          '将个人联想与文字注释编入版面',
          '在无涂布纸上平版印刷'
        ],
        reading: '泰晤士河水面的照片与密集文字注释组成十五张平版印刷作品，阅读会在水纹和文字之间往返。'
      },
      {
        year: '2007–',
        title: 'Vatnasafn / Library of Water',
        type: '采集 / 场域装置 / 社区',
        facts: [
          '与当地合作者采集冰川冰块并融水',
          '将水封入等高玻璃柱',
          '把冰岛语与英语天气词嵌入地面',
          '访谈当地居民并出版天气故事',
          '让建筑同时承载社区活动'
        ],
        reading: '在冰岛 Stykkishólmur 的旧图书馆中安装二十四根玻璃柱，盛放来自不同冰川的水；地面嵌入天气词语，并收集当地居民的天气叙述。'
      }
    ]
  }
];
