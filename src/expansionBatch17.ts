import type { Artist } from './data';
import type { ArtistArchive, ArchiveProject } from './archiveData';

export const artistBatch17: Artist[] = [
  {
    'id': 'cornelia-parker',
    'name': 'Cornelia Parker',
    'chineseName': '科妮莉亚·帕克',
    'born': '1956',
    'base': 'UK',
    'intro': '通过压平、爆破、回收和悬吊改变日常物件，让材料经历的事件进入最终装置。',
    'methods': [
      '物件收集',
      '材料转化',
      '悬吊',
      '空间装置'
    ],
    'subjects': [
      '物质性',
      '日常物件',
      '毁坏与重组',
      '记忆'
    ],
    'outputs': [
      '雕塑',
      '装置'
    ],
    'institutions': [
      'Tate',
      'York Museums Trust'
    ],
    'achievements': [
      'Cold Dark Matter · Tate 馆藏'
    ],
    'whyImportant': '可以逐步追踪物件原来的用途、经历的处理和最后的安装方式。材料处理不是概念之后的包装，而是意义产生的位置。',
    'projects': [
      {
        'year': '1988–1989',
        'title': 'Thirty Pieces of Silver',
        'type': '压平 / 悬吊 / 日常物件',
        'facts': [
          '收集一千多件银质器物，包含餐具、茶壶、烛台和乐器。',
          '使用压路机将器物压平，留下可辨认但失去功能的轮廓。',
          '分成三十个圆盘状组，用细线悬在接近地面的位置。'
        ],
        'reading': '让原本有体积、有用途的银质器物变成悬浮的薄片群。作品题名中的“三十”指向分组与宗教联想，不能把它理解为只用了三十件物品。'
      },
      {
        'year': '1991',
        'title': 'Cold Dark Matter: An Exploded View',
        'type': '爆破 / 碎片重组 / 光影装置',
        'facts': [
          '请英国军方爆破一间装有日常物件的花园棚屋。',
          '回收碎片并用悬吊方式重新布置，保留向外扩散的空间感。',
          '利用中央光源使碎片的影子延伸到展厅墙面。'
        ],
        'reading': '爆破后的棚屋和物品被重新组织成空间中的碎片群；观众观看的是经过重新安装的结构。'
      }
    ],
    'images': [
      {
        'url': 'https://www.yorkstmarys.org.uk/wp-content/uploads/sites/3/2014/05/Thirty-Pieces-of-Silver-Cornelia-Parker.-York-St-Marys.-Photography-by-Shannon-Tofts..jpg',
        'title': 'Thirty Pieces of Silver — York St Mary’s 展览现场',
        'credit': '© Cornelia Parker；摄影 Shannon Tofts',
        'sourceUrl': 'https://www.yorkstmarys.org.uk/exhibition/2011-installation-thirty-pieces-of-silver/',
        'sourceLabel': 'York Museums Trust'
      }
    ],
    'sourceUrl': 'https://www.yorkstmarys.org.uk/exhibition/2011-installation-thirty-pieces-of-silver/',
    'sourceLabel': '机构作品档案'
  },
  {
    'id': 'rachel-whiteread',
    'name': 'Rachel Whiteread',
    'chineseName': '瑞秋·怀特里德',
    'born': '1963',
    'base': 'London',
    'intro': '翻制房间、住宅和日常容器的内部空间，让平时看不见的空隙成为可见的体块。',
    'methods': [
      '翻模',
      '空间转化',
      '场域特定',
      '公共雕塑'
    ],
    'subjects': [
      '建筑',
      '居住',
      '缺席',
      '记忆'
    ],
    'outputs': [
      '雕塑',
      '公共艺术'
    ],
    'institutions': [
      'Tate',
      'National Gallery of Art',
      'Artangel'
    ],
    'achievements': [
      'Ghost · National Gallery of Art 馆藏',
      'House · Artangel，1993'
    ],
    'whyImportant': '翻模保留下来的不是外部轮廓，而是物件内部的接触面。Ghost 用石膏，House 用混凝土，材料和尺度不能混为一谈。',
    'projects': [
      {
        'year': '1990',
        'title': 'Ghost',
        'type': '空间翻模 / 石膏 / 阴阳体积',
        'facts': [
          '选取伦敦一间维多利亚时期住宅的客厅。',
          '以石膏分块翻制房间内部表面。',
          '把保留壁炉、窗面与踢脚板痕迹的石膏板组装到钢框架上。',
          '让房间内侧的痕迹朝向外面的观众。'
        ],
        'reading': '将房间的内部表面转为朝外的雕塑表面，使原本供人生活的空间变成不能进入的体块。'
      },
      {
        'year': '1993',
        'title': 'House',
        'type': '住宅 / 混凝土翻模 / 公共雕塑',
        'facts': [
          '以伦敦东区一栋维多利亚时期排屋为原型。',
          '用混凝土翻制建筑内部空间。',
          '拆去外部原建筑后，留下无法居住的内部体量。',
          '作品于 1993 年完成，1994 年 1 月拆除；如今主要通过档案观看。'
        ],
        'reading': '把一栋住宅内部空间的痕迹转成混凝土雕塑。与 Ghost 相比，材料、尺度和城市现场共同改变了作品。'
      }
    ],
    'images': [
      {
        'url': 'https://api.nga.gov/iiif/b22074d3-1420-4cef-93e2-5b44a4c4a7bf/full/%21800%2C800/0/default.jpg',
        'title': 'Ghost，1990 — 馆藏现场',
        'credit': '© Rachel Whiteread；National Gallery of Art, Gift of The Glenstone Foundation',
        'sourceUrl': 'https://www.nga.gov/artworks/131285-ghost',
        'sourceLabel': 'National Gallery of Art'
      }
    ],
    'sourceUrl': 'https://www.nga.gov/artworks/131285-ghost',
    'sourceLabel': '机构作品档案'
  },
  {
    'id': 'doris-salcedo',
    'name': 'Doris Salcedo',
    'chineseName': '多丽丝·萨尔塞多',
    'born': '1958',
    'base': 'Bogotá',
    'intro': '从受害者与家属的证词出发，处理鞋、家具和建筑，让缺席与哀悼以物件和空间出现。',
    'methods': [
      '田野研究',
      '证词收集',
      '遗物',
      '建筑介入',
      '缝合'
    ],
    'subjects': [
      '记忆',
      '政治暴力',
      '失踪',
      '哀悼',
      '边界'
    ],
    'outputs': [
      '雕塑',
      '装置',
      '公共艺术'
    ],
    'institutions': [
      'Tate',
      'ICA Boston'
    ],
    'achievements': [
      'Shibboleth · Tate Modern 委托，2007'
    ],
    'whyImportant': '她通常不直接再现暴力场面，而让遗物的遮挡、家具的变形和建筑的断裂承担叙述。研究时需保留材料与证词之间的具体关系。',
    'projects': [
      {
        'year': '1996（ICA Boston 馆藏版本）',
        'title': 'Atrabiliarios',
        'type': '遗物 / 墙体壁龛 / 动物膜 / 缝合',
        'facts': [
          '从失踪者家庭收集穿过的鞋。',
          '在展墙中开出壁龛，把鞋放入其中。',
          '将牛膀胱膜拉伸覆盖在开口前，用外科缝线缝合。',
          '让观众隔着乳白色薄膜辨认物件，而不是直观看到鞋的细节。'
        ],
        'reading': '旧鞋来自失踪者家庭。半透明的遮挡让物件仍在场，却难以被完整看清。这里标注的是 ICA 馆藏单件年份。'
      },
      {
        'year': '2007–2008',
        'title': 'Shibboleth',
        'type': '建筑介入 / 地面裂缝 / 场域特定',
        'facts': [
          '直接介入展厅地面，而不是向大厅添加一个独立雕塑。',
          '让裂缝沿地面延伸，改变观众行走与俯视空间的方式。',
          '将建筑中的断裂与社会排斥、跨越边界的问题联系起来。'
        ],
        'reading': '在 Tate Modern 涡轮大厅地面制造延伸的裂缝，使观众通过行走面对分隔和边界。'
      }
    ],
    'images': [
      {
        'url': 'https://www.icaboston.org/wp-content/uploads/2023/03/salcedoatrabilirios750.jpg',
        'title': 'Atrabiliarios，1996 — ICA Boston 馆藏',
        'credit': '© Doris Salcedo；ICA Boston',
        'sourceUrl': 'https://www.icaboston.org/art/doris-salcedo/atrabiliarios/',
        'sourceLabel': 'ICA Boston'
      }
    ],
    'sourceUrl': 'https://www.icaboston.org/art/doris-salcedo/atrabiliarios/',
    'sourceLabel': '机构作品档案'
  }
];

export const archiveBatch17: Record<string, ArtistArchive> = {
  'cornelia-parker': {
    'artistId': 'cornelia-parker',
    'projectCoverage': '2 个精选项目已索引',
    'imageCoverage': '',
    'note': '精选项目档案，并非作品全集。分别标注制作动作、材料、作品年份和展览版本。',
    'projects': [
      {
        'title': 'Thirty Pieces of Silver',
        'period': '1988–1989',
        'cluster': '压平 / 悬吊 / 日常物件',
        'summary': '让原本有体积、有用途的银质器物变成悬浮的薄片群。作品题名中的“三十”指向分组与宗教联想，不能把它理解为只用了三十件物品。',
        'actions': [
          '收集一千多件银质器物，包含餐具、茶壶、烛台和乐器。',
          '使用压路机将器物压平，留下可辨认但失去功能的轮廓。',
          '分成三十个圆盘状组，用细线悬在接近地面的位置。'
        ],
        'sourceUrl': 'https://www.yorkstmarys.org.uk/exhibition/2011-installation-thirty-pieces-of-silver/',
        'relations': [
          {
            'kind': '展览',
            'label': 'York St Mary’s',
            'detail': '2011，Tate 借展'
          }
        ],
        'images': [
          {
            'url': 'https://www.yorkstmarys.org.uk/wp-content/uploads/sites/3/2014/05/Thirty-Pieces-of-Silver-Cornelia-Parker.-York-St-Marys.-Photography-by-Shannon-Tofts..jpg',
            'title': 'Thirty Pieces of Silver — York St Mary’s 展览现场',
            'credit': '© Cornelia Parker；摄影 Shannon Tofts',
            'sourceUrl': 'https://www.yorkstmarys.org.uk/exhibition/2011-installation-thirty-pieces-of-silver/',
            'sourceLabel': 'York Museums Trust'
          }
        ]
      },
      {
        'title': 'Cold Dark Matter: An Exploded View',
        'period': '1991',
        'cluster': '爆破 / 碎片重组 / 光影装置',
        'summary': '爆破后的棚屋和物品被重新组织成空间中的碎片群；观众观看的是经过重新安装的结构。',
        'actions': [
          '请英国军方爆破一间装有日常物件的花园棚屋。',
          '回收碎片并用悬吊方式重新布置，保留向外扩散的空间感。',
          '利用中央光源使碎片的影子延伸到展厅墙面。'
        ],
        'sourceUrl': 'https://www.tate.org.uk/art/artworks/parker-cold-dark-matter-an-exploded-view-t06949/story-cold-dark-matter',
        'relations': [
          {
            'kind': '收藏',
            'label': 'Tate',
            'detail': 'Cold Dark Matter: An Exploded View'
          }
        ],
        'images': []
      }
    ],
    'awards': [],
    'exhibitions': [
      'York St Mary’s · 2011，Tate 借展'
    ],
    'sources': [
      {
        'label': 'Thirty Pieces of Silver',
        'url': 'https://www.yorkstmarys.org.uk/exhibition/2011-installation-thirty-pieces-of-silver/'
      },
      {
        'label': 'Cold Dark Matter: An Exploded View',
        'url': 'https://www.tate.org.uk/art/artworks/parker-cold-dark-matter-an-exploded-view-t06949/story-cold-dark-matter'
      }
    ]
  },
  'rachel-whiteread': {
    'artistId': 'rachel-whiteread',
    'projectCoverage': '2 个精选项目已索引',
    'imageCoverage': '',
    'note': '精选项目档案，并非作品全集。分别标注制作动作、材料、作品年份和展览版本。',
    'projects': [
      {
        'title': 'Ghost',
        'period': '1990',
        'cluster': '空间翻模 / 石膏 / 阴阳体积',
        'summary': '将房间的内部表面转为朝外的雕塑表面，使原本供人生活的空间变成不能进入的体块。',
        'actions': [
          '选取伦敦一间维多利亚时期住宅的客厅。',
          '以石膏分块翻制房间内部表面。',
          '把保留壁炉、窗面与踢脚板痕迹的石膏板组装到钢框架上。',
          '让房间内侧的痕迹朝向外面的观众。'
        ],
        'sourceUrl': 'https://www.nga.gov/artworks/131285-ghost',
        'relations': [
          {
            'kind': '展览',
            'label': 'Chisenhale Gallery',
            'detail': '1990'
          },
          {
            'kind': '收藏',
            'label': 'National Gallery of Art',
            'detail': 'Ghost，1990'
          }
        ],
        'images': [
          {
            'url': 'https://api.nga.gov/iiif/b22074d3-1420-4cef-93e2-5b44a4c4a7bf/full/%21800%2C800/0/default.jpg',
            'title': 'Ghost，1990 — 馆藏现场',
            'credit': '© Rachel Whiteread；National Gallery of Art, Gift of The Glenstone Foundation',
            'sourceUrl': 'https://www.nga.gov/artworks/131285-ghost',
            'sourceLabel': 'National Gallery of Art'
          }
        ]
      },
      {
        'title': 'House',
        'period': '1993',
        'cluster': '住宅 / 混凝土翻模 / 公共雕塑',
        'summary': '把一栋住宅内部空间的痕迹转成混凝土雕塑。与 Ghost 相比，材料、尺度和城市现场共同改变了作品。',
        'actions': [
          '以伦敦东区一栋维多利亚时期排屋为原型。',
          '用混凝土翻制建筑内部空间。',
          '拆去外部原建筑后，留下无法居住的内部体量。',
          '作品于 1993 年完成，1994 年 1 月拆除；如今主要通过档案观看。'
        ],
        'sourceUrl': 'https://www.artangel.org.uk/project/house/',
        'relations': [
          {
            'kind': '展览',
            'label': 'Artangel · House',
            'detail': '1993.10.25–1994.01.11'
          }
        ],
        'images': []
      }
    ],
    'awards': [],
    'exhibitions': [
      'Chisenhale Gallery · 1990',
      'Artangel · House · 1993.10.25–1994.01.11'
    ],
    'sources': [
      {
        'label': 'Ghost',
        'url': 'https://www.nga.gov/artworks/131285-ghost'
      },
      {
        'label': 'House',
        'url': 'https://www.artangel.org.uk/project/house/'
      }
    ]
  },
  'doris-salcedo': {
    'artistId': 'doris-salcedo',
    'projectCoverage': '2 个精选项目已索引',
    'imageCoverage': '',
    'note': '精选项目档案，并非作品全集。分别标注制作动作、材料、作品年份和展览版本。',
    'projects': [
      {
        'title': 'Atrabiliarios',
        'period': '1996（ICA Boston 馆藏版本）',
        'cluster': '遗物 / 墙体壁龛 / 动物膜 / 缝合',
        'summary': '旧鞋来自失踪者家庭。半透明的遮挡让物件仍在场，却难以被完整看清。这里标注的是 ICA 馆藏单件年份。',
        'actions': [
          '从失踪者家庭收集穿过的鞋。',
          '在展墙中开出壁龛，把鞋放入其中。',
          '将牛膀胱膜拉伸覆盖在开口前，用外科缝线缝合。',
          '让观众隔着乳白色薄膜辨认物件，而不是直观看到鞋的细节。'
        ],
        'sourceUrl': 'https://www.icaboston.org/art/doris-salcedo/atrabiliarios/',
        'relations': [
          {
            'kind': '收藏',
            'label': 'ICA Boston',
            'detail': 'Atrabiliarios，1996'
          }
        ],
        'images': [
          {
            'url': 'https://www.icaboston.org/wp-content/uploads/2023/03/salcedoatrabilirios750.jpg',
            'title': 'Atrabiliarios，1996 — ICA Boston 馆藏',
            'credit': '© Doris Salcedo；ICA Boston',
            'sourceUrl': 'https://www.icaboston.org/art/doris-salcedo/atrabiliarios/',
            'sourceLabel': 'ICA Boston'
          }
        ]
      },
      {
        'title': 'Shibboleth',
        'period': '2007–2008',
        'cluster': '建筑介入 / 地面裂缝 / 场域特定',
        'summary': '在 Tate Modern 涡轮大厅地面制造延伸的裂缝，使观众通过行走面对分隔和边界。',
        'actions': [
          '直接介入展厅地面，而不是向大厅添加一个独立雕塑。',
          '让裂缝沿地面延伸，改变观众行走与俯视空间的方式。',
          '将建筑中的断裂与社会排斥、跨越边界的问题联系起来。'
        ],
        'sourceUrl': 'https://www.tate.org.uk/whats-on/tate-modern/unilever-series/unilever-series-doris-salcedo-shibboleth',
        'relations': [
          {
            'kind': '展览',
            'label': 'Tate Modern · The Unilever Series',
            'detail': '2007–2008'
          }
        ],
        'images': []
      }
    ],
    'awards': [],
    'exhibitions': [
      'Tate Modern · The Unilever Series · 2007–2008'
    ],
    'sources': [
      {
        'label': 'Atrabiliarios',
        'url': 'https://www.icaboston.org/art/doris-salcedo/atrabiliarios/'
      },
      {
        'label': 'Shibboleth',
        'url': 'https://www.tate.org.uk/whats-on/tate-modern/unilever-series/unilever-series-doris-salcedo-shibboleth'
      }
    ]
  }
};

export const archiveExtensions17: Record<string, ArchiveProject[]> = {
  'sophie-calle': [
    {
      'title': 'The Blind / Les aveugles',
      'period': '1986',
      'cluster': '访谈 / 美的描述 / 图文并置',
      'summary': '从先天失明者对美的描述出发，让语言与图像之间的距离成为作品。',
      'actions': [
        '向 23 位先天失明者询问他们心中“美”的形象。',
        '记录不同回答，并将文字与肖像、回应其描述的图像组合。',
        '让多位参与者的答案并列，不把美归结为一个标准。'
      ],
      'sourceUrl': 'https://louisiana.dk/en/exhibition/sophie-calle/',
      'relations': [
        {
          'kind': '收藏',
          'label': 'Louisiana Museum of Modern Art',
          'detail': 'The Blind'
        },
        {
          'kind': '展览',
          'label': 'Something Missing? · Louisiana',
          'detail': '2026.03.26–09.06'
        }
      ],
      'images': []
    },
    {
      'title': 'Ghosts',
      'period': '1991（MoMA 项目）',
      'cluster': '撤下原作 / 记忆访谈 / 替代展示',
      'summary': '让博物馆工作人员记忆中的作品暂时代替原作，暴露图像在不同人脑中的差异。',
      'actions': [
        '选择几件通常在 MoMA 展出的绘画，并让原作暂时离开原位置。',
        '邀请工作人员用语言和草图回忆这些作品。',
        '把回答与草图组合成替代图像，放回原作通常陈列的位置。'
      ],
      'sourceUrl': 'https://www.moma.org/calendar/exhibitions/350',
      'relations': [
        {
          'kind': '展览',
          'label': 'Dislocations · MoMA',
          'detail': '1991–1992'
        }
      ],
      'images': []
    },
    {
      'title': 'Voir la mer / To See the Sea',
      'period': '2011',
      'cluster': '邀请 / 首次观看 / 录像',
      'summary': '邀请生活在伊斯坦布尔却从未见过海的人面对海，再记录他们转身后的目光。',
      'actions': [
        '邀请从未见过海的当地居民参与。',
        '让参与者先面向海观看，由他们决定何时转身。',
        '拍摄转身面对镜头后的面孔和目光，将首次观看变成一段持续的经验。'
      ],
      'sourceUrl': 'https://louisiana.dk/en/exhibition/sophie-calle/',
      'relations': [
        {
          'kind': '展览',
          'label': 'Something Missing? · Louisiana',
          'detail': '2026.03.26–09.06'
        }
      ],
      'images': []
    }
  ],
  'wolfgang-tillmans': [
    {
      'title': 'Truth Study Center',
      'period': '2005 起',
      'cluster': '信息收集 / 桌面编排 / 照片与文本',
      'summary': '让照片、印刷文本和信息在桌面上相互对读，把观看转成辨别不同陈述的过程。',
      'actions': [
        '收集报刊材料、照片和其他印刷信息。',
        '将材料放在桌面展柜中并置，不按单张照片独立观看。',
        '通过排列建立相邻材料之间的关系，让观众在阅读与看图之间切换。'
      ],
      'sourceUrl': 'https://www.moma.org/collection/artists/8044',
      'relations': [],
      'images': []
    },
    {
      'title': 'Greifbar',
      'period': '2014–2015（Tate 展览所述作品组）',
      'cluster': '无相机摄影 / 光线动作 / 感光纸',
      'summary': '不先拍摄外部对象，而在暗房中用光的运动形成抽象色域。',
      'actions': [
        '在暗房中直接将光作用于感光纸。',
        '用光线的移动和曝光变化组织色彩形态。',
        '将身体动作留下的痕迹作为图像观看；所列年份对应馆方说明中的作品组。'
      ],
      'sourceUrl': 'https://www.tate.org.uk/whats-on/tate-modern/wolfgang-tillmans-2017/room-guide-2017',
      'relations': [
        {
          'kind': '展览',
          'label': 'Wolfgang Tillmans: 2017 · Tate Modern',
          'detail': '2017'
        }
      ],
      'images': []
    }
  ]
};
