import type { Artist } from './data';
import type { ArtistArchive } from './archiveData';

export const archiveBatch15: Record<string, ArtistArchive> = {
  'noemie-goudal': {
    artistId: 'noemie-goudal',
    projectCoverage: '3 个精选项目已索引',
    imageCoverage: '2 / 3 项目已建立图像档案',
    note: '精选 2021 年三个项目，侧重布景、纸张与观看位置。Décantation 暂无配图；可通过项目来源查看。',
    projects: [
      {
        title: 'Inhale Exhale',
        cluster: '布景 / 录像装置 / 地质时间',
        period: '2021',
        summary: '用实际升降的纸质布景，使静止风景呈现层层更替的过程。',
        actions: [
          '在沼泽架设植物图像布景，用绳索和滑轮使其升出水面、再次沉入水中。',
          '固定机位记录机械动作，剪成约 8 分钟彩色有声影像。',
          '两块背靠背屏幕错时循环同一影片。'
        ],
        sourceUrl: 'https://www.grandcafe-saintnazaire.fr/en/expositions/post-atlantica/',
        images: [
          {
            url: 'https://noemiegoudal.com/media/pages/works/inhale-exhale/102aab09e9-1761118442/ngmo65-x300-q50.webp',
            title: 'Inhale, Exhale — 制作现场，2021',
            credit: '© Noémie Goudal',
            sourceUrl: 'https://noemiegoudal.com/works',
            sourceLabel: 'Noémie Goudal Studio'
          }
        ],
        relations: [
          {
            kind: '展览',
            label: 'Post Atlantica · Le Grand Café',
            detail: '2021–2022'
          }
        ]
      },
      {
        title: 'Décantation',
        cluster: '水溶纸 / 再摄影 / 山景',
        period: '2021',
        summary: '照片的物质消解，成为观察山体变化的可见模型。',
        actions: [
          '拍摄山景，把图像打印在水溶纸上。',
          '将纸面图像重新放回原风景，逐步冲洗并再次拍摄。',
          '以系列照片展示变化；单张尺寸 45 × 34.2 厘米。'
        ],
        sourceUrl: 'https://www.grandcafe-saintnazaire.fr/en/expositions/post-atlantica/',
        images: [],
        relations: [
          {
            kind: '展览',
            label: 'Post Atlantica · Le Grand Café',
            detail: '2021–2022'
          }
        ]
      },
      {
        title: 'Study on Perspective III',
        cluster: '纸面装置 / 透视 / 观看位置',
        period: '2021',
        summary: '观众移动时，完整景观与分离的纸面之间不断切换。',
        actions: [
          '将变形后的洞穴照片印在悬垂的大幅纸条上。',
          '从天花板延伸至地面布置图像平面。',
          '从特定位置观看，碎片重新拼合为空间景观。'
        ],
        sourceUrl: 'https://www.grandcafe-saintnazaire.fr/en/expositions/post-atlantica/',
        images: [
          {
            url: 'https://noemiegoudal.com/media/pages/works/study-on-perspective-iii/03980bcf53-1761118050/nge72-x300-q50.webp',
            title: 'Study on Perspective III — 装置现场，2021',
            credit: '© Noémie Goudal；摄影 Marc Domage',
            sourceUrl: 'https://noemiegoudal.com/works',
            sourceLabel: 'Noémie Goudal Studio'
          }
        ],
        relations: [
          {
            kind: '展览',
            label: 'Post Atlantica · Le Grand Café',
            detail: '2021–2022'
          }
        ]
      }
    ],
    awards: [],
    exhibitions: [
      'Post Atlantica — Le Grand Café，2021–2022'
    ],
    sources: [
      {
        label: 'Inhale Exhale',
        url: 'https://www.grandcafe-saintnazaire.fr/en/expositions/post-atlantica/'
      },
      {
        label: '工作室作品与制作现场',
        url: 'https://noemiegoudal.com/works'
      }
    ]
  },
  'joan-fontcuberta': {
    artistId: 'joan-fontcuberta',
    projectCoverage: '3 个精选项目已索引',
    imageCoverage: '3 / 3 项目已建立图像档案',
    note: '区分作品的虚构叙事与实际制作过程。系列标年与单张图片年份分别保留，避免混用。',
    projects: [
      {
        title: 'Herbarium',
        cluster: '伪植物 / 摄影 / 分类命名',
        period: '1984（馆方系列标年）',
        summary: '把人为拼装物拍成植物图鉴，检验分类形式如何产生可信度。',
        actions: [
          '以废弃材料组合“伪植物”，借用真实植物与想象形态。',
          '在中性背景前拍摄，以类似植物学命名和图鉴的方式呈现。',
          '这些是艺术家构造的对象；不能当作新物种记录。'
        ],
        sourceUrl: 'https://fotocolectania.org/es/specialedition/25/joan-fontcuberta-quot-artemisa-rollana-herbarium-quot-1983',
        images: [
          {
            url: 'https://www.scienceandmediamuseum.org.uk/sites/default/files/styles/carousel/public/2017-07/5_4.jpg?itok=MYJC3o2V',
            title: 'Guillumeta Polymorpha，1984，Herbarium',
            credit: '© Joan Fontcuberta',
            sourceUrl: 'https://www.scienceandmediamuseum.org.uk/what-was-on/joan-fontcuberta-stranger-fiction',
            sourceLabel: 'National Science and Media Museum'
          }
        ],
        relations: []
      },
      {
        title: 'Fauna',
        cluster: '虚构档案 / 合作 / 科学展示',
        period: '1987',
        summary: '与 Pere Formiguera 合作，以虚构动物学档案模拟科学证据。',
        actions: [
          '构造并拍摄不可能的动物形态，搭配分类与研究叙述。',
          '将材料归于虚构学者 Peter Ameisenhaufen，模拟被发现的研究档案。',
          '“发现档案”的故事属于作品虚构；图片与说明共同参与制造可信度。'
        ],
        sourceUrl: 'https://www.scienceandmediamuseum.org.uk/what-was-on/joan-fontcuberta-stranger-fiction',
        images: [
          {
            url: 'https://www.scienceandmediamuseum.org.uk/sites/default/files/styles/carousel/public/2017-07/3_0.JPG?itok=s6_Pnu7z',
            title: 'Cercopithecus icarocornu，1985，Fauna',
            credit: '© Joan Fontcuberta and Pere Formiguera',
            sourceUrl: 'https://www.scienceandmediamuseum.org.uk/what-was-on/joan-fontcuberta-stranger-fiction',
            sourceLabel: 'National Science and Media Museum'
          }
        ],
        relations: []
      },
      {
        title: 'Orogenesis / Landscapes without Memory',
        cluster: '软件生成 / 图像转译 / 风景',
        period: '2002 起',
        summary: '让软件把已有图像读作地形，产生无法实地抵达的景观。',
        actions: [
          '把绘画、摄影等二维图像输入地形渲染软件。',
          '将图像轮廓与明暗转为山谷、河流及云层等三维景观。',
          '部分作品并置输入图像；Bodyscapes 则以身体照片作为输入。'
        ],
        sourceUrl: 'https://aperture.org/exhibition/landscapes-without-memory-photographs-joan-fontcuberta-parallel-memories-photographs-bruno-rosier/',
        images: [
          {
            url: 'https://www.scienceandmediamuseum.org.uk/sites/default/files/styles/carousel/public/2017-07/2_6.jpg?itok=KmJSGiI4',
            title: 'Bodyscape (Heel)，2006，Orogenesis',
            credit: '© Joan Fontcuberta',
            sourceUrl: 'https://www.scienceandmediamuseum.org.uk/what-was-on/joan-fontcuberta-stranger-fiction',
            sourceLabel: 'National Science and Media Museum'
          }
        ],
        relations: [
          {
            kind: '展览',
            label: 'Aperture Gallery',
            detail: 'Landscapes without Memory，2006'
          }
        ]
      }
    ],
    awards: [
      'Hasselblad Award，2013'
    ],
    exhibitions: [
      'Stranger Than Fiction — National Science and Media Museum，2014–2015',
      'Landscapes without Memory — Aperture Gallery，2006'
    ],
    sources: [
      {
        label: 'Herbarium',
        url: 'https://fotocolectania.org/es/specialedition/25/joan-fontcuberta-quot-artemisa-rollana-herbarium-quot-1983'
      },
      {
        label: 'Fauna',
        url: 'https://www.scienceandmediamuseum.org.uk/what-was-on/joan-fontcuberta-stranger-fiction'
      },
      {
        label: 'Orogenesis / Landscapes without Memory',
        url: 'https://aperture.org/exhibition/landscapes-without-memory-photographs-joan-fontcuberta-parallel-memories-photographs-bruno-rosier/'
      }
    ]
  },
  'broomberg-chanarin': {
    artistId: 'broomberg-chanarin',
    projectCoverage: '3 个精选项目已索引',
    imageCoverage: '2 / 3 项目已建立图像档案',
    note: '保留原有感光纸项目，补入两部摄影书。作品描述对应合作时期；Holy Bible 暂无配图。',
    projects: [
      {
        title: 'The Day Nobody Died',
        cluster: '无相机摄影 / 感光纸 / 战争报道',
        period: '2008',
        summary: '感光纸保留在场的光线，却不给出传统战地报道期待的可辨认事件。',
        actions: [
          '随英国军队进入阿富汗，携带大卷感光纸。',
          '在事件节点展开约 6 米纸段，直接暴露于光线，不用相机形成战斗画面。',
          '以独幅彩色感光纸作品保留曝光痕迹；图示为作品局部。'
        ],
        sourceUrl: 'https://www.broombergchanarin.com/the-day-nobody-died-1-1',
        images: [
          {
            url: 'https://images.squarespace-cdn.com/content/v1/56e1e3e24d088e6834d4fbf4/1469311457306-YDO5NTT4896TYUU9G7HJ/The%2BBrother%27s%2BSuicide%2C%2BJune%2B7%2C%2B2008%2B%28detail%29%2C%2BThe%2BDay%2BNobody%2BDied%2C%2B2008%2C%2BUnique%2BC-type%2C%2B762mm%2Bx%2B6000mm%2B.jpg',
            title: 'The Brother’s Suicide, June 7, 2008 — 感光纸局部',
            credit: '© Adam Broomberg & Oliver Chanarin',
            sourceUrl: 'https://www.broombergchanarin.com/the-day-nobody-died-1-1',
            sourceLabel: '艺术家档案'
          }
        ],
        relations: []
      },
      {
        title: 'War Primer 2',
        cluster: '摄影书 / 挪用 / 图文重编',
        period: '2011',
        summary: '用当代冲突图像介入布莱希特原书，使两个时代的图像制度互相对读。',
        actions: [
          '以布莱希特 1955 年 War Primer 的书页为载体。',
          '从互联网收集“反恐战争”相关图像，将新图像叠加到原有图文结构中。',
          '保留原书诗句与页面关系，让读者比较图像如何被组织。'
        ],
        sourceUrl: 'https://www.broombergchanarin.com/war-primer-3-2',
        images: [
          {
            url: 'https://images.squarespace-cdn.com/content/v1/56e1e3e24d088e6834d4fbf4/1469210417172-KL6W9U1DE93LEL2CYI95/War%2BPrimer%2B2%2C%2BAdam%2BBroomberg%2B%26%2BOliver%2BChanarin%2C%2B2011%2C%2Bhardback%2Bbook%2B%28MACK%29%2B.jpg',
            title: 'War Primer 2 — 摄影书，2011',
            credit: '© Adam Broomberg & Oliver Chanarin',
            sourceUrl: 'https://www.broombergchanarin.com/war-primer-3-2',
            sourceLabel: '艺术家档案'
          }
        ],
        relations: [
          {
            kind: '出版',
            label: 'MACK',
            detail: '2011'
          },
          {
            kind: '奖项',
            label: 'Deutsche Börse Photography Prize',
            detail: '2013'
          },
          {
            kind: '收藏',
            label: 'MoMA'
          }
        ]
      },
      {
        title: 'Holy Bible',
        cluster: '档案选图 / 书页蒙太奇 / 文本',
        period: '2013',
        summary: '重新组织既有图像与经文的关系，让阅读过程暴露图像解释的权力。',
        actions: [
          '从 Archive of Modern Conflict 选择档案照片。',
          '把照片嵌入圣经版式，并在相关文字下划线。',
          '以摄影书组织非字面对应的图文关系，由读者在页面间建立联系。'
        ],
        sourceUrl: 'https://time.com/3800126/the-holy-bible-appropriated-an-illustrated-scripture-by-broomberg-and-chanarin/',
        images: [],
        relations: [
          {
            kind: '出版',
            label: 'MACK',
            detail: '2013'
          }
        ]
      }
    ],
    awards: [
      'Deutsche Börse Photography Prize，2013'
    ],
    exhibitions: [],
    sources: [
      {
        label: 'The Day Nobody Died',
        url: 'https://www.broombergchanarin.com/the-day-nobody-died-1-1'
      },
      {
        label: 'War Primer 2',
        url: 'https://www.broombergchanarin.com/war-primer-3-2'
      },
      {
        label: 'Holy Bible',
        url: 'https://time.com/3800126/the-holy-bible-appropriated-an-illustrated-scripture-by-broomberg-and-chanarin/'
      },
      {
        label: 'Divine Violence：Holy Bible 的展览延伸',
        url: 'https://www.broombergchanarin.com/text-divine-violence-walter'
      }
    ]
  }
};

export const artistBatch15: Artist[] = [
  {
    id: 'noemie-goudal',
    name: 'Noémie Goudal',
    chineseName: '诺埃米·古达尔',
    born: '1984',
    base: 'Paris',
    intro: '把照片做成可升降、可溶解或可重新拼合的布景，再用摄影、录像与装置记录变化。',
    methods: [
      '编排式摄影',
      '再摄影',
      '布景',
      '影像装置'
    ],
    subjects: [
      '风景',
      '地质时间',
      '感知',
      '图像真实性'
    ],
    outputs: [
      '摄影系列',
      '录像',
      '装置'
    ],
    institutions: [
      'Le Grand Café',
      'Le BAL',
      'Centre Pompidou'
    ],
    achievements: [
      'Post Atlantica 个展，Le Grand Café，2021–2022'
    ],
    whyImportant: '可以沿“打印—安装—改变材料—再次记录”的动作链研究她的作品，观察风景图像如何成为一个实际空间。',
    sourceLabel: 'Le Grand Café / 艺术家工作室',
    sourceUrl: 'https://www.grandcafe-saintnazaire.fr/en/expositions/post-atlantica/',
    projects: [
      {
        title: 'Inhale Exhale',
        year: '2021',
        type: '布景 / 录像装置 / 地质时间',
        facts: [
          '在沼泽架设植物图像布景，用绳索和滑轮使其升出水面、再次沉入水中。',
          '固定机位记录机械动作，剪成约 8 分钟彩色有声影像。',
          '两块背靠背屏幕错时循环同一影片。'
        ],
        reading: '用实际升降的纸质布景，使静止风景呈现层层更替的过程。'
      },
      {
        title: 'Décantation',
        year: '2021',
        type: '水溶纸 / 再摄影 / 山景',
        facts: [
          '拍摄山景，把图像打印在水溶纸上。',
          '将纸面图像重新放回原风景，逐步冲洗并再次拍摄。',
          '以系列照片展示变化；单张尺寸 45 × 34.2 厘米。'
        ],
        reading: '照片的物质消解，成为观察山体变化的可见模型。'
      },
      {
        title: 'Study on Perspective III',
        year: '2021',
        type: '纸面装置 / 透视 / 观看位置',
        facts: [
          '将变形后的洞穴照片印在悬垂的大幅纸条上。',
          '从天花板延伸至地面布置图像平面。',
          '从特定位置观看，碎片重新拼合为空间景观。'
        ],
        reading: '观众移动时，完整景观与分离的纸面之间不断切换。'
      }
    ],
    images: [
      {
        url: 'https://noemiegoudal.com/media/pages/works/inhale-exhale/102aab09e9-1761118442/ngmo65-x300-q50.webp',
        title: 'Inhale, Exhale — 制作现场，2021',
        credit: '© Noémie Goudal',
        sourceUrl: 'https://noemiegoudal.com/works',
        sourceLabel: 'Noémie Goudal Studio'
      },
      {
        url: 'https://noemiegoudal.com/media/pages/works/study-on-perspective-iii/03980bcf53-1761118050/nge72-x300-q50.webp',
        title: 'Study on Perspective III — 装置现场，2021',
        credit: '© Noémie Goudal；摄影 Marc Domage',
        sourceUrl: 'https://noemiegoudal.com/works',
        sourceLabel: 'Noémie Goudal Studio'
      }
    ]
  },
  {
    id: 'joan-fontcuberta',
    name: 'Joan Fontcuberta',
    chineseName: '胡安·丰库贝尔塔',
    born: '1955',
    base: 'Barcelona',
    intro: '通过伪植物、虚构动物学档案与软件生成风景，研究照片和展示制度怎样建立可信度。',
    methods: [
      '虚构档案',
      '编排式摄影',
      '图文编排',
      '软件生成'
    ],
    subjects: [
      '图像真实性',
      '科学',
      '档案',
      '风景',
      '分类'
    ],
    outputs: [
      '摄影系列',
      '摄影书',
      '档案装置'
    ],
    institutions: [
      'Centre Pompidou',
      'MACBA',
      'National Science and Media Museum',
      'Aperture'
    ],
    achievements: [
      'Hasselblad Award，2013'
    ],
    whyImportant: '研究重点可以落在图像、命名、说明与陈列如何共同制造证据；虚构叙事本身也是作品材料。',
    sourceLabel: 'National Science and Media Museum',
    sourceUrl: 'https://www.scienceandmediamuseum.org.uk/what-was-on/joan-fontcuberta-stranger-fiction',
    projects: [
      {
        title: 'Herbarium',
        year: '1984（馆方系列标年）',
        type: '伪植物 / 摄影 / 分类命名',
        facts: [
          '以废弃材料组合“伪植物”，借用真实植物与想象形态。',
          '在中性背景前拍摄，以类似植物学命名和图鉴的方式呈现。',
          '这些是艺术家构造的对象；不能当作新物种记录。'
        ],
        reading: '把人为拼装物拍成植物图鉴，检验分类形式如何产生可信度。'
      },
      {
        title: 'Fauna',
        year: '1987',
        type: '虚构档案 / 合作 / 科学展示',
        facts: [
          '构造并拍摄不可能的动物形态，搭配分类与研究叙述。',
          '将材料归于虚构学者 Peter Ameisenhaufen，模拟被发现的研究档案。',
          '“发现档案”的故事属于作品虚构；图片与说明共同参与制造可信度。'
        ],
        reading: '与 Pere Formiguera 合作，以虚构动物学档案模拟科学证据。'
      },
      {
        title: 'Orogenesis / Landscapes without Memory',
        year: '2002 起',
        type: '软件生成 / 图像转译 / 风景',
        facts: [
          '把绘画、摄影等二维图像输入地形渲染软件。',
          '将图像轮廓与明暗转为山谷、河流及云层等三维景观。',
          '部分作品并置输入图像；Bodyscapes 则以身体照片作为输入。'
        ],
        reading: '让软件把已有图像读作地形，产生无法实地抵达的景观。'
      }
    ],
    images: [
      {
        url: 'https://www.scienceandmediamuseum.org.uk/sites/default/files/styles/carousel/public/2017-07/5_4.jpg?itok=MYJC3o2V',
        title: 'Guillumeta Polymorpha，1984，Herbarium',
        credit: '© Joan Fontcuberta',
        sourceUrl: 'https://www.scienceandmediamuseum.org.uk/what-was-on/joan-fontcuberta-stranger-fiction',
        sourceLabel: 'National Science and Media Museum'
      },
      {
        url: 'https://www.scienceandmediamuseum.org.uk/sites/default/files/styles/carousel/public/2017-07/3_0.JPG?itok=s6_Pnu7z',
        title: 'Cercopithecus icarocornu，1985，Fauna',
        credit: '© Joan Fontcuberta and Pere Formiguera',
        sourceUrl: 'https://www.scienceandmediamuseum.org.uk/what-was-on/joan-fontcuberta-stranger-fiction',
        sourceLabel: 'National Science and Media Museum'
      },
      {
        url: 'https://www.scienceandmediamuseum.org.uk/sites/default/files/styles/carousel/public/2017-07/2_6.jpg?itok=KmJSGiI4',
        title: 'Bodyscape (Heel)，2006，Orogenesis',
        credit: '© Joan Fontcuberta',
        sourceUrl: 'https://www.scienceandmediamuseum.org.uk/what-was-on/joan-fontcuberta-stranger-fiction',
        sourceLabel: 'National Science and Media Museum'
      }
    ]
  }
];
