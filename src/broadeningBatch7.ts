import type { Artist } from './data';

// Primary-source verification and secondary links: research/updates/2026-10-07-broadening7.md
export const broadeningBatch7: Artist[] = [
  {
    id: 'sky-hopinka', name: 'Sky Hopinka', born: '1984', base: 'New York / 美国',
    intro: 'Ho-Chunk 民族、Pechanga Band of Luiseño Indians 背景的艺术家，以电影、摄影和文字研究原住民故土与语言。曾学习和教授 Chinuk Wawa；作品把语言、风景和个人叙述交织起来。',
    methods: ['实验电影', '语言实践', '摄影叠置', '手刻文字'],
    subjects: ['原住民', '故土', '语言', '记忆', '死亡与重生'],
    outputs: ['电影', '摄影', '文字'], institutions: ['Whitney Museum', 'SFMOMA', 'Centre Pompidou', 'CCS Bard'],
    achievements: ['Whitney Biennial 2017', 'MacArthur Fellow 2022', 'SFMOMA 电影放映 2024'],
    whyImportant: '关注理由：他的摄影与电影让语言成为组织风景的方法，适合与以档案、领土和殖民历史为对象的实践对照阅读。',
    projects: [
      { year: '2020', title: 'maɬni – towards the ocean, towards the shore', type: '实验纪录电影', facts: ['影片跟随 Sweetwater Sahme 与 Jordan Mercier，讨论来世、重生及其间状态。', '对白主要使用 Chinuk Wawa，叙事呼应 Chinookan 关于死亡起源的故事。'], reading: '解读：语言与神话构成叙事节奏，而非作为人物背景的附注。' },
      { year: '2019', title: 'The Land Describes Itself', type: '摄影系列／叠置与刻写', facts: ['把不同地区的风景透明片叠放在投影仪上，再以数码摄影记录重组的图像。', '在最终打印上手刻诗句；系列作品进入 Whitney 收藏。'], reading: '解读：层叠与刻写把观看土地转化为重新建立语言和记忆关系的过程。' }
    ], images: [], sourceLabel: 'SFMOMA — Sky Hopinka Film Screening', sourceUrl: 'https://www.sfmoma.org/event/sky-hopinka-film-screening/'
  },
  {
    id: 'ayo-akingbade', name: 'Ayo Akingbade', born: '1994', base: 'London / 英国',
    intro: '出生于伦敦、具有尼日利亚家庭背景的电影艺术家。通过纪实与虚构的交叉，研究城市空间、权力与历史；从伦敦社会住房走向尼日利亚工业场所及家族记忆。',
    methods: ['电影', '纪实与虚构', '城市观察', '地方叙事'],
    subjects: ['社会住房', '劳动', '殖民历史', '城市', '家族记忆'],
    outputs: ['电影', '电影展览'], institutions: ['Chisenhale Gallery', 'Spike Island', 'Whitechapel Gallery', 'Arts Council Collection'],
    achievements: ['Whitechapel Gallery 项目 2021', 'Show Me The World Mister：Chisenhale 首展 2022、Spike Island 展出 2023'],
    whyImportant: '关注理由：她把住房政策与工业劳动放进具体人物和地点，提供一种从英国城市经验连接西非历史的新锐电影方法。',
    projects: [
      { year: '2019', title: 'Dear Babylon', type: '电影／社会住房', facts: ['以虚构的 AC30 住房法案威胁社会住房为情境。', '三名艺术学生把镜头转向社区居民和工作人员；作品进入 Arts Council Collection。'], reading: '解读：虚构政策让社区的现实关系获得可被讨论的叙事入口。' },
      { year: '2022–2023', title: 'Show Me The World Mister', type: '双影片委托及展览', facts: ['由 The Fist 与 Faluyi 构成，两部影片均在尼日利亚拍摄。', '前者观察拉各斯 Guinness 酿酒厂，后者通过 Ife 的故事触及家族传承与神秘经验。', 'Chisenhale Gallery 与 Spike Island 共同制作，并与其他英国机构联合委托。'], reading: '解读：工业时间与祖辈记忆并置，扩展了她此前的城市关注。' }
    ], images: [], sourceLabel: 'Spike Island — Ayo Akingbade', sourceUrl: 'https://www.spikeisland.org.uk/programme/exhibitions/ayo-akingbade/'
  },
  {
    id: 'dawit-l-petros', name: 'Dawit L. Petros', born: '1972', base: 'Chicago / Montreal',
    intro: '出生于厄立特里亚、成长于加拿大的艺术家，以摄影和装置研究非洲历史、欧洲现代主义与迁移。把旅行观察、摆拍和历史材料结合，追索殖民建筑与跨境流动的关系。',
    methods: ['摄影', '田野旅行', '摆拍', '镜面反射', '历史研究'],
    subjects: ['迁移', '非洲现代主义', '意大利殖民史', '边界', '地中海'],
    outputs: ['摄影', '移动影像', '装置', '声音'], institutions: ['The Walther Collection', 'The Power Plant', 'Studio Museum in Harlem', 'Huis Marseille'],
    achievements: ['The Stranger’s Notebook 2016–2017', 'Spazio Disponibile — The Power Plant 2020'],
    whyImportant: '关注理由：他把非洲内部流动和欧洲殖民遗产放进同一视觉研究，补充把迁移仅理解为南方向北方移动的单线叙述。',
    projects: [
      { year: '2016–2017', title: 'The Stranger’s Notebook', type: '摄影／影像／物件／声音', facts: ['源于 2014–2015 年在非洲与欧洲之间的旅行研究。', '以风景、人物及历史文本讨论异乡身份与流动；艺术家官网将项目标注为 2016–2017。'], reading: '解读：不同地点的并置使观看者难以把迁移缩减为单一出发地和目的地。' },
      { year: '2020', title: 'Spazio Disponibile', type: '摄影及装置展览项目', facts: ['在 The Power Plant 展示，研究非洲之角及北美建筑、基础设施中的意大利殖民遗存。', '把两次世界大战之间的意大利北美移民与当代迁移叙述相联系。'], reading: '解读：建筑痕迹让殖民历史进入今天的迁移讨论。' }
    ], images: [], sourceLabel: 'The Walther Collection — Dawit L. Petros', sourceUrl: 'https://www.walthercollection.com/en/collection/artists/dawit-l-petros'
  },
  {
    id: 'tadaskia', name: 'Tadáskía', born: '1993', base: 'Brazil / 巴西',
    intro: '巴西艺术家，以自由线条、诗性文字和有机材料连接绘画与空间。MoMA 将其作品关联于她作为黑人跨性别女性的生活经验，以及想象、转化和集体自由。',
    methods: ['自由绘画', '诗性文字', '墙面绘画', '有机材料', '空间回应'],
    subjects: ['黑人经验', '跨性别', '想象', '转化', '集体自由'],
    outputs: ['绘画', '无装订艺术家书', '雕塑', '空间装置'], institutions: ['MoMA', 'Studio Museum in Harlem'],
    achievements: ['Projects: Tadáskía — MoMA 首次美国个展，2024-05-24 至 2024-10-14'],
    whyImportant: '关注理由：她让纸上的线条进入墙面与材料，而不是停留在身份图解，适合拓宽目录对绘画、诗歌和身体经验之间关系的覆盖。',
    projects: [
      { year: '2022', title: 'ave preta mística / mystical black bird', type: '无装订艺术家书／绘画与文字', facts: ['以自由绘画和葡萄牙语、英语诗性文字构成无装订书。', '2024 年成为 MoMA Projects 展览的核心作品。'], reading: '解读：未装订的结构使阅读可在图像与诗句间移动。' },
      { year: '2024', title: 'Projects: Tadáskía — 墙面绘画与雕塑', type: '场域回应的展览创作', facts: ['艺术家回应 MoMA 展厅创作大型墙面绘画和雕塑。', '展览由 Studio Museum in Harlem 的 Thelma Golden 与 MoMA 的 Ana Torok 联合策划。'], reading: '解读：纸面作品与临时空间创作并置，使转化成为可感知的尺度变化。' }
    ], images: [], sourceLabel: 'MoMA — Projects: Tadáskía', sourceUrl: 'https://www.moma.org/calendar/exhibitions/5713'
  },
  {
    id: 'batia-suter', name: 'Batia Suter', born: '1967', base: 'Amsterdam / 荷兰（出生于瑞士）',
    intro: '从旧书与印刷物中采集图像，以放大、并置及重新排序制作艺术家书和大型装置。她研究图像如何因展示语境改变意义，将图像编辑本身转化为艺术方法。',
    methods: ['现成图像', '视觉蒙太奇', '图像编排', '放大', '出版'],
    subjects: ['视觉分类', '知识生产', '自然图像', '印刷文化', '语境'],
    outputs: ['艺术家书', '摄影装置', '图像序列'], institutions: ['The Photographers’ Gallery', 'MBAL', 'Roma Publications'],
    achievements: ['Parallel Encyclopedia #2 出版 2016', 'Deutsche Börse Photography Foundation Prize 入围 2018（非获奖）'],
    whyImportant: '关注理由：她的实践拓宽摄影目录的边界，让采集、编辑与展示既有图像成为与拍摄同样重要的研究对象。',
    projects: [
      { year: '2016', title: 'Parallel Encyclopedia #2', type: '艺术家书／现成图像编排', facts: ['由 Roma Publications 出版，以收集的旧书图像构成新组合。', '该出版物使她入围 2018 年 Deutsche Börse Photography Foundation Prize。'], reading: '解读：相邻图像建立临时分类，邀请读者检验知识的视觉组织方式。' },
      { year: '2018', title: 'Parallel Encyclopedia #2 Extended', type: '喷墨图像空间装置', facts: ['在 The Photographers’ Gallery 入围展中把书转为大型无框图像。', '艺术家官网标注材料为 Digiwall 喷墨打印与钉子。'], reading: '解读：从翻页到身体移动，图像间的关系转为一种空间阅读。' }
    ], images: [], sourceLabel: 'The Photographers’ Gallery — Deutsche Börse Prize 2018', sourceUrl: 'https://thephotographersgallery.org.uk/whats-on/deutsche-boerse-photography-foundation-prize-2018'
  },
  {
    id: 'feliciano-centurion', name: 'Feliciano Centurión', born: '1962–1996', base: 'Paraguay / Buenos Aires（生前）',
    intro: '出生于巴拉圭、1996 年逝于布宜诺斯艾利斯的艺术家。以毛毯、围裙等日用品上的绘画和刺绣，连接南美民间艺术、酷儿情感与生命末期的精神思考。',
    methods: ['刺绣', '纺织物绘画', '日常物件', '诗性表达'],
    subjects: ['酷儿', '亲密关系', '民间艺术', '热带记忆', '疾病', '精神性'],
    outputs: ['纺织作品', '刺绣', '绘画'], institutions: ['Americas Society', 'São Paulo Bienal', 'ISLAA'],
    achievements: ['第 33 届 São Paulo Bienal 身后个展式呈现 2018', 'Abrigo — Americas Society 首次美国个展 2020'],
    whyImportant: '关注理由：他的实践把日常纺织与亲密叙事放进当代艺术史，补充目录中的南美代际与媒介覆盖；身后展览提供了可靠研究入口。',
    projects: [
      { year: '1990s', title: '毛毯与围裙上的绘画、刺绣作品群', type: '纺织／绘画／刺绣', facts: ['以日常毛毯、围裙作为创作载体。', '作品关联热带童年、都市爱情和生命末期的精神反思；该作品群在 Abrigo 中回顾呈现。'], reading: '解读：柔软的日常材料使情感表达与照护经验彼此接近。' },
      { year: '2020', title: 'Abrigo（身后回顾展）', type: '机构回顾展／非艺术家当年创作', facts: ['Americas Society 于 2020 年 2 月 14 日至 11 月 20 日展出，由 Gabriel Pérez-Barreiro 策划。', '是其首次美国个展，并伴随专书出版。'], reading: '解读：这一研究入口有助于把个体实践置于南美纺织与酷儿艺术历史中。' }
    ], images: [], sourceLabel: 'Americas Society — Feliciano Centurión: Abrigo', sourceUrl: 'https://www.as-coa.org/exhibitions/feliciano-centurion-abrigo'
  }
];
