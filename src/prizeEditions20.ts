import { deutscheRosters19, type PrizeRosterRecord } from './prizeRosters19';

export type PrizeEdition = {
  id: string;
  awardId: string;
  label: string;
  expectedCount: number;
  sourceUrl: string;
  note: string;
  records: PrizeRosterRecord[];
};

const humanRecords: PrizeRosterRecord[] = [
  {
    artistId: 'hoda-afshar',
    period: '2015–2020',
    project: 'Speak the Wind',
    sourceUrl: 'https://prix.pictet.com/cycles/human/hoda-afshar',
    status: '入围',
    year: '2023'
  },
  {
    artistId: 'gera-artemova',
    period: '2022',
    project: 'War Diary',
    sourceUrl: 'https://prix.pictet.com/cycles/human/gera-artemova',
    status: '入围',
    year: '2023'
  },
  {
    artistId: 'ragnar-axelsson',
    period: '2013–2022',
    project: 'Where the World Is Melting',
    sourceUrl: 'https://prix.pictet.com/cycles/human/ragnar-axelsson',
    status: '入围',
    year: '2023'
  },
  {
    artistId: 'alessandro-cinque',
    period: '2017–2023',
    project: 'Peru, a Toxic State',
    sourceUrl: 'https://prix.pictet.com/cycles/human/alessandro-cinque',
    status: '入围',
    year: '2023'
  },
  {
    artistId: 'sian-davey',
    period: '2021–2023',
    project: 'The Garden',
    sourceUrl: 'https://prix.pictet.com/cycles/human/sian-davey',
    status: '入围',
    year: '2023'
  },
  {
    artistId: 'federico-rios-escobar',
    period: '2022',
    project: 'Paths of Desperate Hope',
    sourceUrl: 'https://prix.pictet.com/cycles/human/federico-rios-escobar',
    status: '入围',
    year: '2023'
  },
  {
    artistId: 'michal-luczak',
    period: '2016–2023',
    project: 'Extraction',
    sourceUrl: 'https://prix.pictet.com/cycles/human/michal-luczak',
    status: '入围',
    year: '2023'
  },
  {
    artistId: 'yael-martinez',
    period: '2019–2023',
    project: 'Luciérnaga (Firefly)',
    sourceUrl: 'https://prix.pictet.com/cycles/human/yael-martinez',
    status: '入围',
    year: '2023'
  },
  {
    artistId: 'richard-renaldi',
    period: '2022–2023',
    project: 'Disturbed Harmonies',
    sourceUrl: 'https://prix.pictet.com/cycles/human/richard-renaldi',
    status: '入围',
    year: '2023'
  },
  {
    artistId: 'vanessa-winship',
    period: '2007',
    project: 'Sweet Nothings: Schoolgirls of Eastern Anatolia',
    sourceUrl: 'https://prix.pictet.com/cycles/human/vanessa-winship',
    status: '入围',
    year: '2023'
  },
  {
    artistId: 'vasantha-yogananthan',
    period: '2022',
    project: 'Mystery Street',
    sourceUrl: 'https://prix.pictet.com/cycles/human/vasantha-yogananthan',
    status: '入围',
    year: '2023'
  },
  {
    artistId: 'gauri-gill',
    period: '1999–持续',
    project: 'Notes from the Desert',
    sourceUrl: 'https://prix.pictet.com/cycles/human/gauri-gill',
    status: '获奖',
    year: '2023'
  }
];

export const prizeEditions: PrizeEdition[] = [
  ...['2026', '2025', '2024'].map(year => ({
    id: 'deutsche-' + year,
    awardId: 'deutsche',
    label: year,
    expectedCount: 4,
    sourceUrl: 'https://thephotographersgallery.org.uk/whats-on/deutsche-borse-photography-foundation-prize-' + year,
    note: '获奖者包含在四位入围者之内；奖项年份与提名依据的展览、出版年份分列。',
    records: deutscheRosters19.filter(record => record.year === year)
  })),
  {
    id: 'pictet-human',
    awardId: 'pictet',
    label: 'Human · 第十届 · 2023',
    expectedCount: 12,
    sourceUrl: 'https://prix.pictet.com/cycles/human',
    note: '主题于 2022 年公布，入围名单与获奖结果于 2023 年公布。官网周期标题使用 2022，本站按结果年份标注 2023；Gauri Gill 为获奖者。',
    records: humanRecords
  }
];
