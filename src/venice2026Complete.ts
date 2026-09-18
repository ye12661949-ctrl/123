import type { Artist } from './data';

const source = 'https://www.labiennale.org/en/art/2026/artists';
const names = [
  'Pio Abad','Philip Aguirre y Otegui','Akinbode Akinbiyi','Laurie Anderson','Fabrice Aragno','arms ache avid aeon: fierce pussy amplified, Chapter Nine','Kader Attia','Sammy Baloji','Ranti Bam','Alvaro Barrington','Éric Baudelaire','Sabian Baumann','blaxTARLINES KUMASI','Beverly Buchanan','Seyni Awa Camara','Maria Magdalena Campos-Pons & Kamaal Malak','Nick Cave','Carolina Caycedo','Annalee Davis','BuBu de la Madeleine','Dawn DeDeaux','Nolan Oswald Dennis','Denniston Hill','Bonnie Devine','Godfried Donkor','Marcel Duchamp','Edouard Duval-Carrié','Torkwase Dyson','rana elnemr','Theo Eshetu','Rachel Fallon (with Alice Maher)','G.A.S. Foundation','Sofía Gallisá Muriente','Adebunmi Gbadebo','Leonilda González','Linda Goode Bryant','Joana Hadjithomas & Khalil Joreige','Alexa Kumiko Hatanaka','Ayrson Heráclito','Clarissa Herbst & Dominique Rust','Nicholas Hlobo','Carsten Höller','Sohrab Hura','Alfredo Jaar','Mohammed Joha','Michael Joo','Nina Katchadourian','Bodys Isek Kingelez','Sandra Knecht','Marcia Kure','Natalia Lassalle-Morillo (in collaboration with Gloria Morillo)','Florence Lazar','Dan Lie','Werewere Liking','lugar a dudas','Daniel Lind-Ramos','Alice Maher','Senzeni Marasela','Guadalupe Maravilla','Manuel Mathieu','Georgina Maxim','Tiona Nekkia McClodden','Big Chief Demond Melancon','Avi Mograbi','Wangechi Mutu','Nairobi Contemporary Art Institute (NCAI)','Eustaquio Neves','Tuấn Andrew Nguyễn','Tammy Nguyen','Otobong Nkanga','Kaloki Nyamai','Temitayo Ogunbiyi','Pauline Oliveros','Kambui Olujimi','Hagar Ophir','Uriel Orlow','Ebony G. Patterson','Rajni Perera & Marigold Santos','Thania Petersen','Alan Phelan','Johannes Phokela','Léonard Pongo','Walid Raad','Mohammed Z. Rahman','RAW Material Company','Tabita Rezaire','Guadalupe Rosales','Yo-E Ryou','Khaled Sabsabi','Rose Salane','Issa Samb','Amina Saoudi Aït Khay','Carrie Schneider','Hala Schoukair','Berni Searle','Mmakgabo Mmapula Helen Sebidi','Wardha Shabbir','Yoshiko Shimada','Himali Singh Soin & David Soin Tappeser','Buhlebezwe Siwani','Cauleen Smith','Vera Tamari','Tsai Ming-liang','Victoria-Idongesit Udondian','Celia Vásquez Yui','Kemang Wa Lehulere','Kennedy Yanko','Raed Yassin','Sawangwongse Yawnghwe','Billie Zangewa'
] as const;

const featuredImages: Record<string, Artist['images']> = {
  'Sohrab Hura': [{ url: 'https://content.magnumphotos.com/wp-content/uploads/2016/05/cortex/lon160886-teaser-story-big.jpg', title: 'Life is Elsewhere', credit: '© Sohrab Hura / Magnum Photos', sourceUrl: 'https://www.magnumphotos.com/arts-culture/art/sohrab-hura-life-is-elsewhere/', sourceLabel: 'Magnum Photos' }],
  'Alfredo Jaar': [{ url: 'https://static-assets.artlogic.net/w_1200%2Cc_limit%2Cf_auto%2Cfl_lossy%2Cq_auto/ws-artlogicwebsite1524/usr/images/exhibitions/main_image_override/72/005.jpeg', title: 'The End of the World — installation', credit: '© Alfredo Jaar', sourceUrl: 'https://alfredojaar.net/', sourceLabel: 'Artist / gallery documentation' }],
  'Akinbode Akinbiyi': [{ url: 'https://images.squarespace-cdn.com/content/v1/5f3e65f746d8726e28ea9e7a/1602531848382-JWUXO72O3X2A7QJBKBSY/Akinbode+Akinbiyi.jpg', title: 'Street photography practice', credit: '© Akinbode Akinbiyi', sourceUrl: source, sourceLabel: 'Biennale participant / artist documentation' }]
};

export const venice2026ArtistIds = names.map((_, index) => `venice26-${index + 1}`);

export const venice2026Artists: Artist[] = names.map((name, index) => ({
  id: `venice26-${index + 1}`,
  name,
  born: '—',
  base: 'See official Biennale record',
  intro: 'Biennale Arte 2026《In Minor Keys》官方国际主展参展者。此条目先完成官方名单归档；已有可靠作品图的艺术家同步显示作品图，其余继续按可靠来源补图，不用无关图片占位。',
  methods: ['待深化：依据艺术家具体实践补充'],
  subjects: ['Biennale Arte 2026'],
  outputs: ['当代艺术'],
  institutions: ['La Biennale di Venezia'],
  achievements: ['Biennale Arte 2026 · In Minor Keys'],
  whyImportant: '属于 Koyo Kouoh 策划的第61届威尼斯国际艺术展官方参展名单。当前优先保证名单完整和制度关系准确。',
  projects: [{ year: '2026', title: 'In Minor Keys', type: 'Venice Biennale · International Exhibition', facts: ['官方列入 Biennale Arte 2026 国际主展参展名单。'], reading: '从官方参展关系进入艺术家档案，再逐步补代表作品、制作动作与图像来源。' }],
  images: featuredImages[name] ?? [],
  sourceUrl: source,
  sourceLabel: 'La Biennale di Venezia · official artists list'
}));
