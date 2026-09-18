type ImagePatch = {
  url: string;
  title: string;
  credit: string;
  sourceUrl: string;
  sourceLabel: string;
};

export const archiveImagePatches: Record<string, Record<string, ImagePatch[]>> = {
  'daisuke-yokota': {
    'Site / Cloud': [
      {
        url: 'https://d7hftxdivxxvm.cloudfront.net/?height=1416&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FBbk9VpSNaHnfkSCKGRxPDA%2Flarge.jpg&width=1920',
        title: 'Cloud, 2013',
        credit: '© Daisuke Yokota',
        sourceUrl: 'https://www.artsy.net/artwork/daisuke-yokota-cloud',
        sourceLabel: 'Artsy / artwork record',
      },
    ],
    'Vertigo': [
      {
        url: 'https://images.lensculture.com/image/1fb67a50-1ded-4f7f-073a-913ae7dc8600/large',
        title: 'Vertigo — photobook spread',
        credit: '© Daisuke Yokota',
        sourceUrl: 'https://www.lensculture.com/articles/daisuke-yokota-vertigo',
        sourceLabel: 'LensCulture',
      },
    ],
    'Sediments': [
      {
        url: 'https://minnesotastreetproject.com/sites/default/files/styles/fullscreen/public/9470b422-bf9f-7cbe-d8eb-8df393b95ed4_0.jpg?itok=DiWHE781',
        title: 'Sediments — untitled work',
        credit: '© Daisuke Yokota',
        sourceUrl: 'https://minnesotastreetproject.com/exhibitions/1275-minnesota-st/daisuke-yokota-sediments',
        sourceLabel: 'Minnesota Street Project',
      },
    ],
  },
  'lebohang-kganye': {
    "Pied Piper’s Voyage": [
      {
        url: 'https://images.squarespace-cdn.com/content/v1/598b795cbebafb9c49bc5860/1505097054956-9BMRSA7711FB9709R9C4/Lebohang-Kganye_Scene_01-2.jpg?format=1500w',
        title: 'Pied Piper’s Voyage — film still',
        credit: '© Lebohang Kganye',
        sourceUrl: 'https://www.lebohangkganye.co.za/pied-pipers-voyage-film2014',
        sourceLabel: 'Lebohang Kganye Studio',
      },
    ],
    'Mohlokomedi wa Tora': [
      {
        url: 'https://images.squarespace-cdn.com/content/v1/598b795cbebafb9c49bc5860/1558481291938-P5ERTOYVG83CH6P1KN0J/Lebo_Mohlokomedi-wa-tora_installation-view.jpg',
        title: 'Mohlokomedi wa Tora — installation view',
        credit: '© Lebohang Kganye',
        sourceUrl: 'https://www.lebohangkganye.co.za/mohlokomedi-wa-tora-2018',
        sourceLabel: 'Lebohang Kganye Studio',
      },
    ],
    'Keep the Light Faithfully': [
      {
        url: 'https://static-assets.artlogic.net/w_1600%2Ch_1600%2Cc_limit%2Cf_auto%2Cfl_lossy%2Cq_auto/artlogicstorage/lapatinoireroyale/images/view/f8eb2210e128228c35a21a33184ecd34j/galerielapatinoireroyalebach-lebohang-kganye-lighthouse-burials-2022.jpg',
        title: 'Lighthouse Burials, 2022',
        credit: '© Lebohang Kganye',
        sourceUrl: 'https://prvbgallery.com/artists/82-lebohang-kganye/series/2214-lebohang-kganye-gladys-2022/1826-lebohang-kganye-lighthouse-burials-2022/',
        sourceLabel: 'Galerie La Patinoire Royale Bach',
      },
    ],
    'Le Sale ka Kgotso': [
      {
        url: 'https://images.squarespace-cdn.com/content/v1/598b795cbebafb9c49bc5860/1763054097187-AXBZKEQKHPUYX889NB2Y/image-asset.jpeg',
        title: 'Night’s Unwavering Resolve, 2025 — installation',
        credit: '© Lebohang Kganye',
        sourceUrl: 'https://www.lebohangkganye.co.za/le-sale-ka-kgotso-2025',
        sourceLabel: 'Lebohang Kganye Studio',
      },
    ],
  },
  'trevor-paglen': {
    'Limit Telephotography': [
      {
        url: 'https://payload.cargocollective.com/1/13/421668/6250366/TP_03.jpg',
        title: 'They Watch the Moon, 2010',
        credit: '© Trevor Paglen',
        sourceUrl: 'https://paglen.studio/2020/04/22/limit-telephotography/',
        sourceLabel: 'Trevor Paglen Studio',
      },
    ],
    'The Other Night Sky': [
      {
        url: 'https://sothebys-md.brightspotcdn.com/11/61/acaa292e4def9e7f7604fdffcf86/l22780-c8v4v-02-t2.jpg',
        title: 'Keyhole / Advanced Crystal in Hercules',
        credit: '© Trevor Paglen',
        sourceUrl: 'https://www.sothebys.com/en/buy/auction/2022/oo-may-l22780-photographs/keyhole-advanced-crystal-in-hercules-optical',
        sourceLabel: 'Sotheby’s artwork record',
      },
      {
        url: 'https://d2smv9sex1hihw.cloudfront.net/collection/_1250xAUTO_crop_center-center_100_none/Trevor_paglen_parcae_mudam_collection.jpg',
        title: 'PARCAE satellite trail',
        credit: '© Trevor Paglen',
        sourceUrl: 'https://www.mudam.com/collection/trevor-paglen',
        sourceLabel: 'Mudam Luxembourg',
      },
    ],
    'The Last Pictures': [
      {
        url: 'https://cdn.mos.cms.futurecdn.net/KFn4pZ3mjHnq4UBpqeyt2b.jpg',
        title: 'The Last Pictures — image archive selection',
        credit: '© Trevor Paglen / project documentation',
        sourceUrl: 'https://www.space.com/18554-space-art-last-pictures-paglen-gallery.html',
        sourceLabel: 'Space.com project documentation',
      },
    ],
    'Autonomy Cube': [
      {
        url: 'https://www.bostonartreview.com/_next/image?q=75&url=https%3A%2F%2Fbostonartstage.wpengine.com%2Fwp-content%2Fuploads%2F2018%2F04%2FPaglen-Autonomy-Cube.jpg&w=2048',
        title: 'Autonomy Cube — installation',
        credit: '© Trevor Paglen',
        sourceUrl: 'https://www.bostonartreview.com/read/internet-view-trevor-paglen-ica',
        sourceLabel: 'Boston Art Review',
      },
    ],
    'From “Apple” to “Anomaly”': [
      {
        url: 'https://www.1854.photography/wp-content/uploads/2019/09/Trevor-Paglen-10-1024x683.jpg',
        title: 'From “Apple” to “Anomaly” — Barbican installation',
        credit: '© Trevor Paglen / installation view',
        sourceUrl: 'https://www.1854.photography/2019/10/trevor-paglen-barbican/',
        sourceLabel: 'British Journal of Photography',
      },
    ],
    'Training Humans': [
      {
        url: 'https://news.artnet.com/app/news-upload/2019/09/Osservatorio-Fondazione-Prada-Training-Humans-8-2048x1365.jpg',
        title: 'Training Humans — Fondazione Prada installation',
        credit: 'Kate Crawford & Trevor Paglen / exhibition view',
        sourceUrl: 'https://news.artnet.com/art-world-archives/imagenet-roulette-trevor-paglen-kate-crawford-1658305',
        sourceLabel: 'artnet / Fondazione Prada context',
      },
    ],
  },
  'tyler-mitchell': {
    'I Can Make You Feel Good': [
      {
        url: 'https://www.icp.org/sites/default/files/styles/image_description/public/Walthamstow015-Edit.jpg.webp?itok=h_RE_V82',
        title: 'Boys of Walthamstow, 2018',
        credit: '© Tyler Mitchell',
        sourceUrl: 'https://www.icp.org/exhibitions/tyler-mitchell-i-can-make-you-feel-good',
        sourceLabel: 'International Center of Photography',
      },
      {
        url: 'https://assets.vogue.com/photos/5cb4ebd87555a22f0480f638/master/w_1600%2Cc_limit/01-vogue-foam.jpg',
        title: 'I Can Make You Feel Good — portrait from the Foam presentation',
        credit: '© Tyler Mitchell',
        sourceUrl: 'https://www.vogue.com/article/tyler-mitchell-solo-exhibition-foam-amsterdam',
        sourceLabel: 'Vogue / Foam presentation',
      },
    ],
    'Chrysalis': [
      {
        url: 'https://files.ocula.com/anzax/10/10ea695f-8ff9-492b-b3aa-f5142c89581b_1296_972.jpg',
        title: 'Chrysalis — reclining portrait',
        credit: '© Tyler Mitchell',
        sourceUrl: 'https://ocula.com/art-galleries/gagosian-gallery/exhibitions/tyler-mitchell-chrysalis/',
        sourceLabel: 'Ocula / Gagosian exhibition',
      },
      {
        url: 'https://creativereview.imgix.net/uploads/2022/10/TMITC_2022.0003.jpg?auto=compress%2Cformat&crop=faces%2Centropy%2Cedges&fit=crop&h=2095&q=60&w=1920',
        title: 'Resting in a Cocoon, 2022',
        credit: '© Tyler Mitchell',
        sourceUrl: 'https://www.creativereview.co.uk/tyler-mitchell-chrysalis-gagosian/',
        sourceLabel: 'Creative Review',
      },
    ],
    'Wish This Was Real — survey exhibition': [
      {
        url: 'https://aperture.org/wp-content/uploads/2025/09/9781597115759-2.jpg',
        title: 'Wish This Was Real — monograph / survey image',
        credit: '© Tyler Mitchell',
        sourceUrl: 'https://aperture.org/books/tyler-mitchell-wish-this-was-real/',
        sourceLabel: 'Aperture',
      },
    ],
    'Ghost Images': [
      {
        url: 'https://substackcdn.com/image/fetch/%24s_%21FCCu%21%2Cf_auto%2Cq_auto%3Agood%2Cfl_progressive%3Asteep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd63a885b-d5f9-4350-8bb1-1890dcaeef09_3000x2250.jpeg',
        title: 'Ghost Images — Gagosian New York installation view',
        credit: '© Tyler Mitchell / exhibition view',
        sourceUrl: 'https://www.readloosey.com/p/tyler-mitchell-wants-to-haunt-you',
        sourceLabel: 'Loosey / exhibition documentation',
      },
    ],
  },
  'viviane-sassen': {
    'Parasomnia': [{ url: 'https://www.mbal.ch/mbalwp/wp-content/uploads/fly-images/1150/BELLADONNA1-scaled-1280x99999.jpg', title: 'Belladonna, Parasomnia', credit: '© Viviane Sassen', sourceUrl: 'https://www.mbal.ch/en/expo/viviane-sassen/', sourceLabel: 'Musée des beaux-arts Le Locle' }],
  },
  'daido-moriyama': {
    'Record': [{ url: 'https://shop.japanhouselondon.uk/app/uploads/2026/05/46267.jpg', title: 'Record — publication spread', credit: '© Daido Moriyama', sourceUrl: 'https://shop.japanhouselondon.uk/product/daido-moriyama-record/', sourceLabel: 'Japan House London' }],
  },
  'rinko-kawauchi': {
    'Utatane / Hanabi / Hanako': [{ url: 'https://d7hftxdivxxvm.cloudfront.net/?height=635&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FD40NbhfeUyMMfzu_ZjAkxw%2Flarge.jpg&width=640', title: 'Untitled, from Utatane, 2001', credit: '© Rinko Kawauchi', sourceUrl: 'https://www.artsy.net/artwork/rinko-kawauchi-untitled-from-the-series-utatane-21', sourceLabel: 'Artsy artwork record' }],
  },
  'gauri-gill': {
    'Balika Mela': [{ url: 'https://static-assets.artlogic.net/w_2400%2Ch_2400%2Cc_limit%2Cf_auto%2Cfl_lossy%2Cq_auto/artlogicstorage/vadehraart/images/view/d21e7f792c6672c820588e9fab56dfa0j/vadehraartgallery-gauri-gill-sunita-sita-nirmala-2003-from-the-series-balika-mela-2003-2010.jpg', title: 'Sunita, Sita & Nirmala, Balika Mela', credit: '© Gauri Gill', sourceUrl: 'https://www.vadehraart.com/artworks/41461-gauri-gill-sunita-sita-nirmala-2003-from-the-series-2003-2010/', sourceLabel: 'Vadehra Art Gallery' }],
  },
  'samuel-fosso': {
    'Black Pope': [{ url: 'https://media.newyorker.com/photos/63caf584546c4674d6c3c833/master/w_1600%2Cc_limit/Lucas-Samuel-Fosso-02.jpg', title: 'Black Pope', credit: '© Samuel Fosso', sourceUrl: 'https://www.newyorker.com/culture/photo-booth/samuel-fossos-century-in-selfies', sourceLabel: 'The New Yorker / project documentation' }],
  },
  'ishiuchi-miyako': {
    'Yokosuka Story': [{ url: 'https://artblart.files.wordpress.com/2016/02/gm_35283901-web.jpg?h=1054&w=1310', title: 'Yokosuka Story', credit: '© Ishiuchi Miyako', sourceUrl: 'https://www.getty.edu/art/exhibitions/ishiuchi/', sourceLabel: 'Getty / exhibition documentation' }],
  },
  'liz-deschenes': {
    'Green Screen': [
      {
        url: 'https://images.squarespace-cdn.com/content/v1/51fd7d6de4b00f4020eba587/1545582890651-MUFKR7QABVYS0LPEXRW3/LDeschenes_ICABoston_2016_Install_09.jpg',
        title: 'Green Screen #4 — ICA Boston installation',
        credit: '© Liz Deschenes / installation view',
        sourceUrl: 'https://cincala.com/lizdeschenes',
        sourceLabel: 'Cincala Art / ICA Boston installation',
      },
    ],
    'Moiré': [
      {
        url: 'https://www.moma.org/media/W1siZiIsIjI0Nzg1MSJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=00a34755f8bc98dd',
        title: 'Moiré #25, 2009',
        credit: '© Liz Deschenes',
        sourceUrl: 'https://www.moma.org/collection/works/159172',
        sourceLabel: 'MoMA',
      },
    ],
    'Tilt / Swing (360° field of vision)': [
      {
        url: 'https://www.moma.org/d/assets/W1siZiIsIjIwMTgvMTAvMzEvMzFjempuNW1lOV8xMDc5ODguanBnIl0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDkwIC1yZXNpemUgMjAwMHgyMDAwXHUwMDNlIl1d/107988.jpg?sha=12fc39c412db07ea',
        title: 'Tilt/Swing (360º field of vision, version 1)',
        credit: '© Liz Deschenes',
        sourceUrl: 'https://www.moma.org/collection/works/161348',
        sourceLabel: 'MoMA',
      },
    ],
    'Untitled — Whitney Biennial': [
      {
        url: 'https://whitneymedia.org/assets/image/821813/small_deschenesweb_938.jpg',
        title: 'Whitney Biennial 2012 — installation view',
        credit: '© Liz Deschenes',
        sourceUrl: 'https://whitney.org/exhibitions/2012-biennial/Liz-Deschenes',
        sourceLabel: 'Whitney Museum',
      },
    ],
  },
};
