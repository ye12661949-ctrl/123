import type { Artist } from './data';
import type { ArtistArchive, ArchiveImage } from './archiveData';

const foamImage = (url: string, title: string, credit: string, sourceUrl: string): ArchiveImage => ({ url, title, credit, sourceUrl, sourceLabel: 'Foam' });

const aminUrl = 'https://www.foam.org/talent-2024/artist/amin-yousefi';
const akshayUrl = 'https://www.foam.org/artists/akshay-mahajan';
const akshayProjectUrl = 'https://www.foam.org/nl/talent-2024/artist/akshay-mahajan';
const shweUrl = 'https://www.foam.org/talent-2024/artist/shwe-wutt-hmon';
const danielUrl = 'https://www.foam.org/articles/foam-talent-daniel-mebarek';
const danielInterviewUrl = 'https://www.foam.org/articles/studio-visit-daniel-mebarek';
const nazaninUrl = 'https://www.foam.org/nl/articles/foam-talent-nazanin-hafez';

const aminImage = foamImage('https://www.foam.org/_next/image?q=80&url=https%3A%2F%2Fa.storyblok.com%2Ff%2F113697%2F1600x2000%2F98a16e448c%2Fimg_7327.jpg&w=3840', 'Eyes Dazzle as they Search for the Truth', '© Amin Yousefi', aminUrl);
const akshayImage = foamImage('https://www.foam.org/_next/image?q=80&url=https%3A%2F%2Fa.storyblok.com%2Ff%2F113697%2F2000x1334%2Fc8205cd745%2Fakshay-mahajan-installation-shot-foam-talent.jpg&w=3840', 'People of Clay · Foam 展场', '© Akshay Mahajan / 摄影 Christian van der Kooy', akshayUrl);
const shweImage = foamImage('https://www.foam.org/_next/image?q=80&url=https%3A%2F%2Fa.storyblok.com%2Ff%2F113697%2F2000x1385%2F87d517da89%2Fscan2022-10-08_120003-shwe-wutt-hmon.jpg&w=3840', 'I Do Miss Hospital Visit · Saa 纸作品', '© Shwe Wutt Hmon', shweUrl);
const danielImage = foamImage('https://www.foam.org/_next/image?q=80&url=https%3A%2F%2Fa.storyblok.com%2Ff%2F113697%2F1128x1414%2Fd4158392f0%2Ffotos-gratis_03.png&w=3840', 'Fotos Gratis · 市集肖像', '© Daniel Mebarek', danielUrl);
const nazaninImage = foamImage('https://www.foam.org/_next/image?q=80&url=https%3A%2F%2Fa.storyblok.com%2Ff%2F113697%2F1969x1596%2F22bb5156ab%2F13-at-the-threshold-of-a-bloody-rain.jpg&w=3840', 'Spectators · 模拟照片拼贴', '© Nazanin Hafez', nazaninUrl);
const aminImage2 = foamImage('https://www.foam.org/_next/image?q=80&url=https%3A%2F%2Fa.storyblok.com%2Ff%2F113697%2F1600x2000%2F87c5ec970c%2Fimg_7362.jpg&w=3840', 'Eyes Dazzle · 第二张再摄影', '© Amin Yousefi', aminUrl);
const akshayImage2 = foamImage('https://www.foam.org/_next/image?q=80&url=https%3A%2F%2Fa.storyblok.com%2Ff%2F113697%2F2000x1334%2F75e8be91d7%2Fakshay-mahajan-installation-shot-foam-talent.jpg&w=3840', 'People of Clay · 展场编排', '© Akshay Mahajan / 摄影 Christian van der Kooy', akshayUrl);
const shweImage2 = foamImage('https://www.foam.org/_next/image?q=80&url=https%3A%2F%2Fa.storyblok.com%2Ff%2F113697%2F2000x1391%2Fbc3ceebbb3%2Fscanned-portrait-vertical_17_-shwe-wutt-hmon.jpg&w=3840', 'I Do Miss Hospital Visit · 扫描肖像', '© Shwe Wutt Hmon', shweUrl);
const danielImage2 = foamImage('https://www.foam.org/_next/image?q=80&url=https%3A%2F%2Fa.storyblok.com%2Ff%2F113697%2F1122x1402%2Fa757554dda%2Ffotos-gratis_09.png&w=3840', 'Fotos Gratis · 第二张市集肖像', '© Daniel Mebarek', danielUrl);
const nazaninImage2 = foamImage('https://www.foam.org/_next/image?q=80&url=https%3A%2F%2Fa.storyblok.com%2Ff%2F113697%2F906x1003%2F95e31a67ef%2F11-evil-arrived-in-the-village.jpg&w=3840', 'Spectators · 现场结构拼贴', '© Nazanin Hafez', nazaninUrl);

const asArtwork = (item: ArchiveImage) => ({ ...item });

export const foamFocusArtists: Artist[] = [
  {
    id: 'photo-akshay-mahajan', name: 'Akshay Mahajan', born: '1985', base: 'India',
    intro: '沿着印度阿萨姆与孟加拉的拉杰班希社群民歌拍摄，把河流、人物、旧分类图像和民间叙事剪接成视觉故事。',
    methods: ['田野摄影', '档案', '拼贴', '民间叙事'], subjects: ['身份', '殖民分类', '地方记忆'], outputs: ['摄影', '拼贴', '展览'], institutions: ['Foam'], achievements: ['Foam Talent 2024–2025', 'Aperture Portfolio Prize 2023 亚军'],
    whyImportant: '他的身份研究落实到具体材料：地方歌曲引导拍摄，历史分类图像与新照片通过拼贴重新相遇。',
    projects: [{ year: '2023 作品 / 2024 展出', title: 'People of Clay', type: '田野 / 民歌 / 图像拼贴', facts: ['沿拉杰班希社群的歌曲和河流路线寻找人物、地点与地方故事。', '把现场照片、地图和殖民时期分类资料拼贴、重排。'], reading: '比较民间叙事与行政分类怎样给同一地区赋予不同身份。' }],
    images: [asArtwork(akshayImage), asArtwork(akshayImage2)], sourceLabel: 'Foam 艺术家资料', sourceUrl: akshayUrl
  },
  {
    id: 'photo-amin-yousefi', name: 'Amin Yousefi', born: '1996', base: 'London / Iran',
    intro: '翻看记录伊朗 1978–1979 年革命的摄影书，寻找游行人群中直视镜头的人，并通过放大镜重新拍摄他们。',
    methods: ['档案再摄影', '放大镜', '肖像', '序列编排'], subjects: ['伊朗革命', '观看关系', '历史档案'], outputs: ['摄影', '展览'], institutions: ['Foam'], achievements: ['Foam Talent 2024–2025'],
    whyImportant: '整个系列由一条可复查的规则构成：只选旧照片里回望相机的人，把被历史场面淹没的个人重新放到观看中心。',
    projects: [{ year: '2022', title: 'Eyes Dazzle as they Search for the Truth', type: '历史图像 / 放大再摄影', facts: ['在革命摄影书的大型游行照片中寻找直视相机的人。', '用放大镜拍摄选中的面孔，最后编成 50 张肖像。'], reading: '原摄影师未必察觉的人，在新的系列里成为主动回望观众的主体。' }],
    images: [asArtwork(aminImage), asArtwork(aminImage2)], sourceLabel: 'Foam 数字展览', sourceUrl: aminUrl
  },
  {
    id: 'photo-shwe-wutt-hmon', name: 'Shwe Wutt Hmon', born: '1986', base: 'Chiang Mai / Myanmar',
    intro: '无法按时去医院检查时，她用家用扫描仪扫描身体、医疗记录和花；迁往泰国后把图像印在 Saa 纸上，剪开并缝合。',
    methods: ['家用扫描', '医疗档案', 'Saa 纸', '缝合'], subjects: ['身体', '疾病经验', '迁移', '自我照料'], outputs: ['摄影', '扫描图像', '纸质装置'], institutions: ['Foam'], achievements: ['Foam Talent 2024–2025', 'Objectifs Documentary Award 2020'],
    whyImportant: '扫描、脆弱的纸、裁切与缝合直接来自生活限制和身体经验，材料处理并非附加装饰。',
    projects: [{ year: '2020–2023', title: 'I Do Miss Hospital Visit', type: '扫描 / 纸张 / 缝合', facts: ['用普通扫描仪采集自己的身体、枯花与医疗记录。', '在泰国把图像小幅印于 Saa 纸，再裁切、手工缝合。'], reading: '观察图像从医疗记录变成手可处理的薄纸，身体经验因此进入制作步骤。' }],
    images: [asArtwork(shweImage), asArtwork(shweImage2)], sourceLabel: 'Foam 数字展览', sourceUrl: shweUrl
  },
  {
    id: 'photo-daniel-mebarek', name: 'Daniel Mebarek', born: '—', base: 'Bolivia / France',
    intro: '在玻利维亚埃尔阿尔托的市集设临时肖像摊，免费为路人拍照、现场打印并交还照片。',
    methods: ['临时摄影摊', '中画幅胶片', '肖像', '现场打印'], subjects: ['市集', '肖像交换', '纪实伦理'], outputs: ['摄影', '视频', '装置'], institutions: ['Foam'], achievements: ['Foam Talent 2026', 'Rencontres d’Arles Discovery Award 2025 决选'],
    whyImportant: '作品的关键动作包括招呼路人、拍摄、等待打印和交付肖像；展览中的照片只是这个交换过程的一部分。',
    projects: [{ year: '2022', title: 'Fotos Gratis', type: '市集肖像 / 照片交换', facts: ['四次在 Feria 16 de Julio 架起凳子、手绘背景、相机、扩音器和便携打印机。', '以 Pentax 6×7 拍肖像，现场打印后免费交给被拍者。'], reading: '可对照照片成品、背景边缘和市集摊位，看到摄影作为服务如何改变拍摄关系。' }],
    images: [asArtwork(danielImage), asArtwork(danielImage2)], sourceLabel: 'Foam Talent 2026', sourceUrl: danielUrl
  },
  {
    id: 'photo-nazanin-hafez', name: 'Nazanin Hafez', born: '—', base: 'Iran / Germany',
    intro: '收集伊朗公共处刑周围的新闻与公共空间照片，以手工拼贴处理围观人群、机器和城市结构，回避对暴力行为的直接呈现。',
    methods: ['模拟照片拼贴', '新闻图像', '地图', '声音装置'], subjects: ['公共暴力', '围观', '伊朗', '记忆'], outputs: ['拼贴', '影像', '声音装置'], institutions: ['Foam', 'Museum Folkwang'], achievements: ['Foam Talent 2026', 'Wüstenrot Foundation 摄影资助 2024'],
    whyImportant: '她通过切割、遮挡和重排围观现场的边缘图像，让没有直接露面的暴力仍在观看过程中逐渐显现。',
    projects: [{ year: '2026 入选；创作起年待核', title: 'Spectators', type: '公共处刑图像 / 模拟拼贴', facts: ['从新闻机构及公共空间搜集照片。', '剪出人脸、围栏、建筑和机器，组成黑白和彩色的模拟照片拼贴。', '不直接展示处刑行为。'], reading: '先看图像里出现了什么，再追问她刻意让什么保持缺席。' }],
    images: [asArtwork(nazaninImage), asArtwork(nazaninImage2)], sourceLabel: 'Foam Talent 2026', sourceUrl: nazaninUrl
  }
];

export const foamFocusArchives: Record<string, ArtistArchive> = Object.fromEntries(foamFocusArtists.map(artist => {
  const urls: Record<string, string> = {
    'photo-akshay-mahajan': akshayProjectUrl,
    'photo-amin-yousefi': aminUrl,
    'photo-shwe-wutt-hmon': shweUrl,
    'photo-daniel-mebarek': danielUrl,
    'photo-nazanin-hafez': nazaninUrl,
  };
  const project = artist.projects[0];
  const sources = [{ label: artist.sourceLabel, url: urls[artist.id] }];
  if (artist.id === 'photo-daniel-mebarek') sources.push({ label: '艺术家访谈：器材与现场过程', url: danielInterviewUrl });
  return [artist.id, {
    artistId: artist.id,
    projectCoverage: '1 个已核对重点项目 · 其余作品待补', imageCoverage: '1 / 1 重点项目已建立图像档案 · 2 张图像',
    note: '本条只收录已核对的重点项目及两张有来源的图像，不代表艺术家作品全集。',
    projects: [{ title: project.title, cluster: project.type, period: project.year, summary: project.reading, actions: project.facts, sourceUrl: urls[artist.id], images: artist.images, relations: [{ kind: '展览' as const, label: artist.achievements[0], detail: 'Foam Talent' }] }],
    awards: artist.achievements, exhibitions: [artist.achievements[0]], sources,
  }];
}));
