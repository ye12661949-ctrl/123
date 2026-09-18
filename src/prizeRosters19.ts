export type PrizeRosterRecord = {
  artistId: string;
  year: string;
  status: '获奖' | '入围';
  project: string;
  period: string;
  sourceUrl: string;
};

export const deutscheRosters19: PrizeRosterRecord[] = [
  { artistId: 'lebohang-kganye', period: 'Foam Amsterdam 展览 2023', project: 'Haufi nyana? I’ve come to take you home', sourceUrl: 'https://www.deutsche-boerse.com/dbg-en/media/news-stories/press-releases/Lebohang-Kganye-wins-the-Deutsche-B-rse-Photography-Foundation-Prize-2024-3968426', status: '获奖', year: '2024' },
  { artistId: 'valie-export', period: '2024 Prize exhibition', project: 'selected photographic practice', sourceUrl: 'https://www.deutsche-boerse.com/dbg-en/media/news-stories/press-releases/Lebohang-Kganye-wins-the-Deutsche-B-rse-Photography-Foundation-Prize-2024-3968426', status: '入围', year: '2024' },
  { artistId: 'gauri-gill', period: 'Fields of Sight collaboration with Rajesh Vangad', project: 'Fields of Sight', sourceUrl: 'https://www.deutsche-boerse.com/dbg-en/media/news-stories/press-releases/Lebohang-Kganye-wins-the-Deutsche-B-rse-Photography-Foundation-Prize-2024-3968426', status: '入围', year: '2024' },
  { artistId: 'rajesh-vangad', period: 'Fields of Sight collaboration with Gauri Gill', project: 'Fields of Sight', sourceUrl: 'https://www.deutsche-boerse.com/dbg-en/media/news-stories/press-releases/Lebohang-Kganye-wins-the-Deutsche-B-rse-Photography-Foundation-Prize-2024-3968426', status: '入围', year: '2024' },
  { artistId: 'hrair-sarkissian', period: '2024 Prize exhibition', project: 'selected photographic practice', sourceUrl: 'https://www.deutsche-boerse.com/dbg-en/media/news-stories/press-releases/Lebohang-Kganye-wins-the-Deutsche-B-rse-Photography-Foundation-Prize-2024-3968426', status: '入围', year: '2024' },
  {
    artistId: 'cristina-de-middel',
    period: '2024 阿尔勒展览；系列创作早于展览',
    project: 'Journey to the Center',
    sourceUrl: 'https://thephotographersgallery.org.uk/dbpfp25-cristina-de-middel',
    status: '入围',
    year: '2025'
  },
  {
    artistId: 'rahim-fortune',
    period: '2024 出版；含更早拍摄作品',
    project: 'Hardtack',
    sourceUrl: 'https://thephotographersgallery.org.uk/dbpfp25-rahim-fortune',
    status: '入围',
    year: '2025'
  },
  {
    artistId: 'lindokuhle-sobekwa',
    period: '2024 出版；长期家庭研究',
    project: 'I carry Her photo with Me',
    sourceUrl: 'https://thephotographersgallery.org.uk/dbpfp25-lindokuhle-sobekwa',
    status: '获奖',
    year: '2025'
  },
  {
    artistId: 'jane-evelyn-atwood',
    period: '1990 年代调查；2000 初版；2024 修订双语再版',
    project: 'Too Much Time / Trop de Peines',
    sourceUrl: 'https://thephotographersgallery.org.uk/dbpfp26-jane-evelyn-atwood',
    status: '入围',
    year: '2026'
  },
  {
    artistId: 'weronika-gesicka',
    period: '2023–2025 系列；2024 年 11 月出版',
    project: 'Encyclopaedia',
    sourceUrl: 'https://thephotographersgallery.org.uk/dbpfp26-weronika-gesicka',
    status: '入围',
    year: '2026'
  },
  {
    artistId: 'amak-mahmoodian',
    period: '2019–2024；2024 布里斯托摄影节展览',
    project: 'One Hundred and Twenty Minutes',
    sourceUrl: 'https://thephotographersgallery.org.uk/dbpfp26-amak-mahmoodian',
    status: '入围',
    year: '2026'
  },
  {
    artistId: 'rene-matic',
    period: '2024–2025 CCA Berlin 展览；含更早作品',
    project: 'AS OPPOSED TO THE TRUTH',
    sourceUrl: 'https://thephotographersgallery.org.uk/dbpfp26-rene-matic',
    status: '获奖',
    year: '2026'
  },
  {
    artistId: 'tarrah-krajnak',
    period: '2023 年 10 月 28 日—2024 年 3 月 3 日；Huis Marseille 展览',
    project: 'Shadowings. A Catalogue of Attitudes for Estranged Daughters',
    sourceUrl: 'https://thephotographersgallery.org.uk/dbpfp25-tarrah-krajnak',
    status: '入围',
    year: '2025'
  }
];
