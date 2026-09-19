import type { Artist } from './data';
import { artistBatch27 } from './expansionBatch27';

const source2024 = 'https://www.deutsche-boerse.com/dbg-en/media/news-stories/press-releases/Lebohang-Kganye-wins-the-Deutsche-B-rse-Photography-Foundation-Prize-2024-3968426';

const records = [
  ['valie-export', 'VALIE EXPORT', 'Vienna / Austria', '入围'],
  ['rajesh-vangad', 'Rajesh Vangad', 'Maharashtra / India', '入围'],
  ['hrair-sarkissian', 'Hrair Sarkissian', 'London / Damascus', '入围']
] as const;

const rosterArtists: Artist[] = records.map(([id, name, base, status]) => ({
  id,
  name,
  born: '—',
  base,
  intro: `Deutsche Börse Photography Foundation Prize 2024 ${status}艺术家。先建立可点击名单档案，详细项目与作品图随后逐条核实。`,
  methods: ['摄影 / 当代图像实践'],
  subjects: ['摄影', '记忆', '社会与历史'],
  outputs: ['摄影', '展览'],
  institutions: ['The Photographers’ Gallery', 'Deutsche Börse Photography Foundation Prize'],
  achievements: [`Deutsche Börse Photography Foundation Prize 2024 ${status}`],
  whyImportant: '先保证摄影奖项目录中的官方入围者真正进入主艺术家数据库，而不是只留下一个空的奖项目录入口。',
  projects: [],
  images: [],
  sourceLabel: 'Deutsche Börse Photography Foundation · 2024',
  sourceUrl: source2024
}));

const batch27Images: Record<string, Artist['images']> = {
  'john-houck': [{
    url: 'https://media.architecturaldigest.com/photos/55e77e3fcd709ad62e8f6f89/4:3/w_800,h_600,c_limit/dam-images-art-2014-artists-to-watch-john-houck-john-houck-01-aggregates-series.jpg',
    title: 'Aggregates series',
    credit: '© John Houck',
    sourceUrl: 'https://www.johnhouck.com/work/aggregates/',
    sourceLabel: 'John Houck / Architectural Digest'
  }],
  'eileen-quinlan': [{
    url: 'https://whitneymedia.org/assets/artwork/40718/P_2011_342_cropped.jpeg',
    title: 'Smoke & Mirrors #12, 2005',
    credit: '© Eileen Quinlan',
    sourceUrl: 'https://whitney.org/collection/works/40718',
    sourceLabel: 'Whitney Museum'
  }],
  'penelope-umbrico': [{
    url: 'https://d1hhug17qm51in.cloudfront.net/www-media/2026/08/17213659/2009.115.1-2_01_b02.jpg',
    title: '5,377,183 Suns (from Sunsets) from Flickr (Partial), 2009',
    credit: '© Penelope Umbrico · Collection SFMOMA',
    sourceUrl: 'https://www.sfmoma.org/artwork/2009.115.1-2/',
    sourceLabel: 'SFMOMA'
  }],
  'sara-cwynar': [{
    url: 'https://ago.ca/sites/default/files/styles/max_2600x2600/public/2018-01/Tracy%28Cezanne%29-web.jpg?itok=lcaW02cU',
    title: 'Tracy (Cezanne)',
    credit: '© Sara Cwynar',
    sourceUrl: 'https://ago.ca/artist-residence-sara-cwynar',
    sourceLabel: 'Art Gallery of Ontario'
  }],
  'aspen-mays': [{
    url: 'https://media.mcachicago.org/image/IBI5OUKI/original.jpg',
    title: 'Every leaf 0339, 2009',
    credit: '© Aspen Mays · Courtesy of the artist',
    sourceUrl: 'https://mcachicago.org/exhibitions/2010/aspen-mays',
    sourceLabel: 'Museum of Contemporary Art Chicago'
  }],
  'taisuke-koyama': [{
    url: 'https://www.designboom.com/cms/images/fiona02/koyama001.jpg',
    title: 'Rainbow Forms / Rainbow Variations',
    credit: '© Taisuke Koyama',
    sourceUrl: 'https://tk.studio1014.jp/',
    sourceLabel: 'Taisuke Koyama / project documentation'
  }],
  'katja-novitskova': [{
    url: 'https://static-assets.artlogic.net/w_2400%2Ch_2400%2Cc_limit%2Cf_auto%2Cfl_lossy%2Cq_auto/artlogicstorage/kraupatuskanyzeidler/images/view/6743e550815205ad68c9dd7cb5844203j/kraupa-tuskanyzeidler-katja-novitskova-approximation-i-2012.jpg',
    title: 'Approximation I, 2012',
    credit: '© Katja Novitskova',
    sourceUrl: 'https://www.k-t-z.com/artworks/4067-katja-novitskova-approximation-i-2012/',
    sourceLabel: 'Kraupa-Tuskany Zeidler'
  }]
};

const enrichedBatch27: Artist[] = artistBatch27.map(artist => ({
  ...artist,
  images: batch27Images[artist.id] ?? artist.images
}));

export const photoRosterImmediateArtists: Artist[] = [...enrichedBatch27, ...rosterArtists];
