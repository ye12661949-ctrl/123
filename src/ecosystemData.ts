export type EcosystemLink = { label: string; url: string };

export type InstitutionProfile = {
  id: string;
  name: string;
  type: string;
  geography: string;
  scale: string;
  whyItMatters: string;
  signals: string[];
  people: string[];
  exhibitions: string[];
  connectedAwards: string[];
  sources: EcosystemLink[];
};

export type AwardProfile = {
  id: string;
  name: string;
  field: string;
  linkedInstitution: string;
  selectionMode: string;
  whatItSignals: string;
  recentEvidence: string[];
  reality: string[];
  sources: EcosystemLink[];
};

export type CuratorNetwork = {
  curatorId: string;
  institution: string;
  exhibitions: Array<{ year: string; title: string; artists: string[] }>;
  roles: string[];
  sources: EcosystemLink[];
};

export const institutions: InstitutionProfile[] = [
  {
    id: 'moma', name: 'MoMA / Museum of Modern Art', type: '现代与当代艺术博物馆', geography: 'New York',
    scale: '全球核心现代 / 当代艺术博物馆；摄影部门拥有从早期摄影到当代扩展图像的大型馆藏与独立策展传统',
    whyItMatters: 'MoMA 的摄影部门是理解“摄影如何被大型现代/当代艺术机构重新定义”的核心入口。网站现在把 MoMA 关系拆成馆藏、New Photography、Projects、个展 / survey、Artist’s Choice 与 MoMA PS1，避免把不同制度信号混成一句“进过 MoMA”。',
    signals: ['摄影不再被隔离为单一媒介史，而与 performance、film、photobook、social history、AI 和 surveillance 连在一起。', 'Collection 表示作品进入馆藏；New Photography 是长期策展系列；Projects 与大型个展 / survey 又是不同强度的机构背书。', 'MoMA PS1 与 MoMA 主馆关系密切但展览履历应分开标注；研究艺术家职业路径时不能自动互换。', '对年轻艺术家而言，直接“进 MoMA”不是现实投稿路径；更现实的是倒推哪些中型机构、出版、双年展与策展人先建立了可见度。'],

    people: ['Makeda Best — Chief Curator, Photography (from Sep 2026)', 'Roxana Marcoci — David Dechman Senior Curator, Photography'],
    exhibitions: ['LaToya Ruby Frazier: Monuments of Solidarity — 2024', 'An-My Lê: Between Two Rivers — 2023', 'Wolfgang Tillmans: To look without fear — 2022', 'Zoe Leonard: Analogue — 2015', 'Taryn Simon: A Living Man Declared Dead… — 2012', 'Staging Action: Performance in Photography Since 1960 — 2011'],
    connectedAwards: [],
    sources: [{ label: 'MoMA Photography Department', url: 'https://www.moma.org/about/curatorial-departments/photography' }, { label: 'MoMA Collection', url: 'https://www.moma.org/collection/about/' }, { label: 'Roxana Marcoci', url: 'https://www.moma.org/about/senior-staff/roxana-marcoci' }]
  },
  {
    id: 'tate', name: 'Tate', type: '国家级现代与当代艺术机构网络', geography: 'UK',
    scale: 'Tate Modern / Tate Britain / Tate Liverpool / Tate St Ives；摄影嵌入更大的现代与当代艺术收藏与展览系统',
    whyItMatters: 'Tate 对摄影的意义不在于一个封闭的“摄影馆”，而在于摄影如何和现代 / 当代艺术史、装置、抽象、冲突、生态和英国艺术生态并列。Turner Prize 又使 Tate 成为观察英国当代艺术职业可见度的重要节点。',
    signals: ['Tate Photography Series 明确以馆藏中的国际摄影为基础，并包含 Richard Mosse、Lieko Shiga、Claudia Andujar、Sunil Gupta 等。', 'Shoair Mavlian 曾在 Tate Modern 策划 Conflict, Time, Photography 与 Shape of Light，说明历史摄影、抽象摄影与当代实践可以共享同一机构框架。', 'Turner Prize 看的是过去一年已经发生的 outstanding exhibition / project，因此它同样是“先有机构可见度，再有大奖”的机制。'],
    people: ['Shoair Mavlian — former Tate Modern photography curator; now Director, The Photographers’ Gallery'],
    exhibitions: ['Conflict, Time, Photography', 'Shape of Light', 'The Radical Eye', 'Tate Photography Series'],
    connectedAwards: ['Turner Prize'],
    sources: [{ label: 'Tate Photography Series', url: 'https://shop.tate.org.uk/books/tate-photography-series' }, { label: 'Turner Prize 2024 publication', url: 'https://shop.tate.org.uk/tate-dialogues-turner-prize-2024/29822.html' }]
  }
];

export const awards: AwardProfile[] = [
  {
    id: 'turner', name: 'Turner Prize', field: '英国当代艺术', linkedInstitution: 'Tate',
    selectionMode: '年度 jury 根据艺术家前一年已发生的重要展览或项目，选出通常 4 位 shortlisted artists；不是普通 open call。',
    whatItSignals: '它不是摄影奖，而是看摄影 / 影像 / 装置是否已经进入更大的 contemporary art conversation。对摄影师而言，这比单一摄影奖更能显示跨入“主流当代艺术”的程度。',
    recentEvidence: ['2024 shortlist: Pio Abad, Claudette Johnson, Jasleen Kaur, Delaine Le Bas。', '2024 为奖项 40 周年，并回到 Tate Britain。', '2025 nominee Mohammed Sami 的提名依据是 2024 年 Blenheim Palace 个展 After the Storm，说明提名和既有展览直接绑定。'],
    reality: ['不是新人直接报名型机会。', '真正应该倒推 shortlisted artist 之前 3–5 年在哪些美术馆、画廊、commission 和 biennial 出现。', '摄影项目若想进入这一级别，空间化、机构语境和艺术史位置通常比“摄影圈内部完成度”更重要。'],
    sources: [{ label: 'Tate Turner Prize 2024', url: 'https://shop.tate.org.uk/tate-dialogues-turner-prize-2024/29822.html' }, { label: 'Tate Turner Prize 2025 nominee context', url: 'https://shop.tate.org.uk/mohammed-sami-on-air-2025/ed1145.html' }]
  },
  {
    id: 'marcel-duchamp', name: 'Prix Marcel Duchamp', field: '法国 / 国际当代艺术', linkedInstitution: 'ADIAF + Centre Pompidou',
    selectionMode: '提名 / jury 体系；与 Centre Pompidou 长期合作。2025 nominees exhibition 因 Pompidou renovation 转至 Musée d’Art Moderne de Paris。',
    whatItSignals: '这是观察法国当代艺术体系、收藏家网络、公共机构和国际 jury 如何共同制造职业节点的重要奖项。摄影若进入这里，通常已经作为当代艺术实践而非单纯 photographic series 被理解。',
    recentEvidence: ['2025 nominees exhibition curated by Julia Garimorth and Jean-Pierre Criqui。', '2025 international jury 由机构负责人、收藏家与两位艺术家组成。', '奖项自 2000 年创立，与 Centre Pompidou 构成长期制度连接。'],
    reality: ['它比摄影 open call 更依赖法国 / 欧洲当代艺术生态中的长期可见度。', '研究 finalist 时要同时看画廊、收藏、驻留、机构个展，而不是只看作品图片。'],
    sources: [{ label: 'Centre Pompidou — Prix Marcel Duchamp 2025', url: 'https://www.centrepompidou.fr/en/program/calendar/event/gG7sOu4' }]
  },
  {
    id: 'icp-infinity', name: 'ICP Infinity Awards', field: '摄影 / 新闻 / 新媒体 / 出版', linkedInstitution: 'International Center of Photography',
    selectionMode: '机构型年度荣誉，不是单一 open-call ranking；分 Lifetime Achievement、Contemporary Photography & New Media、Editorial & Commercial、Documentary 等类别。',
    whatItSignals: '它显示“摄影行业”本身也不是一个单一赛道：艺术摄影、新闻、商业、新媒体、出版可以同时被承认。',
    recentEvidence: ['2025 Lifetime Achievement: Susan Meiselas。', '2025 Contemporary Photography & New Media: Lebohang Kganye。', '2025 Editorial & Commercial Photography: Jack Davison。', '2025 Documentary Practice & Photojournalism: Samar Abu Elouf, Nanna Heitmann, Ziv Koren。'],
    reality: ['更像职业认可与行业位置指标，而不是新人靠一份 portfolio 直接竞争。', '如果一个艺术家同时出现在 ICP、Foam、Deutsche Börse 或大型馆藏中，应该看这些节点之间的时间顺序。'],
    sources: [{ label: 'ICP Infinity Awards 2025', url: 'https://www.icp.org/events/41st-annual-icp-infinity-awards' }]
  }
];

export const curatorNetworks: Record<string, CuratorNetwork> = {
  'roxana-marcoci': {
    curatorId: 'roxana-marcoci', institution: 'MoMA',
    roles: ['David Dechman Senior Curator, Photography', 'former Acting Chief Curator during leadership transition', 'cofounder, Forums on Contemporary Photography'],
    exhibitions: [
      { year: '2024', title: 'LaToya Ruby Frazier: Monuments of Solidarity', artists: ['LaToya Ruby Frazier'] },
      { year: '2023', title: 'An-My Lê: Between Two Rivers', artists: ['An-My Lê'] },
      { year: '2022', title: 'Wolfgang Tillmans: To look without fear', artists: ['Wolfgang Tillmans'] },
      { year: '2022', title: 'Our Selves: Photographs by Women Artists from Helen Kornblum', artists: ['multi-artist / feminist photography history'] },
      { year: '2020', title: 'Carrie Mae Weems: From Here I Saw What Happened and I Cried', artists: ['Carrie Mae Weems'] },
      { year: '2017', title: 'Louise Lawler: WHY PICTURES NOW', artists: ['Louise Lawler'] },
      { year: '2015', title: 'Zoe Leonard: Analogue', artists: ['Zoe Leonard'] },
      { year: '2014', title: 'Christopher Williams: The Production Line of Happiness', artists: ['Christopher Williams'] },
      { year: '2012', title: 'Taryn Simon: A Living Man Declared Dead and Other Chapters I–XVIII', artists: ['Taryn Simon'] },
      { year: '2011', title: 'Staging Action: Performance in Photography Since 1960', artists: ['multi-artist / performance + photography'] }
    ],
    sources: [{ label: 'MoMA staff profile', url: 'https://www.moma.org/about/senior-staff/roxana-marcoci' }, { label: 'MoMA essays / projects', url: 'https://www.moma.org/magazine/authors/80' }]
  },
  'adriano-pedrosa': {
    curatorId: 'adriano-pedrosa', institution: 'MASP / Venice Biennale', roles: ['Artistic Director, MASP', 'Curator, Venice Biennale 2024'],
    exhibitions: [
      { year: '2024', title: 'Foreigners Everywhere — 60th Venice Biennale', artists: ['Global South / diaspora / queer / indigenous / outsider practices'] },
      { year: '2022', title: 'Brazilian Histories, MASP', artists: ['multi-artist'] },
      { year: '2020', title: 'Histories of Dance, MASP', artists: ['multi-artist'] }
    ],
    sources: [{ label: 'Venice 2024 curator appointment', url: 'https://www.labiennale.org/en/news/adriano-pedrosa-appointed-curator-biennale-arte-2024' }, { label: 'Venice 2024 introduction', url: 'https://www.labiennale.org/en/art/2024/introduction-adriano-pedrosa' }]
  },
  'shoair-mavlian': {
    curatorId: 'shoair-mavlian', institution: 'The Photographers’ Gallery / former Tate Modern', roles: ['Director, The Photographers’ Gallery', 'former Assistant Curator / Curator, Tate Modern photography'],
    exhibitions: [
      { year: 'Tate period', title: 'Conflict, Time, Photography', artists: ['multi-artist'] },
      { year: 'Tate period', title: 'Shape of Light', artists: ['multi-artist / abstract photography'] },
      { year: '2026', title: 'Deutsche Börse Photography Foundation Prize — jury / institutional context', artists: ['Jane Evelyn Atwood', 'Weronika Gęsicka', 'Amak Mahmoodian', 'Rene Matić'] }
    ],
    sources: [{ label: 'TPG director profile', url: 'https://thephotographersgallery.org.uk/shoair-mavlian-appointed-new-director-photographers-gallery' }]
  }
};
