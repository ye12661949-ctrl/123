export type VeniceEntry = {
  artistId: string;
  year: string;
  group: string;
  kind: '国家馆' | '国际主展' | '平行展';
  title: string;
  sourceUrl: string;
};

export const veniceEntries: VeniceEntry[] = [
  { artistId: 'christian-boltanski', year: '2011', group: '法国馆', kind: '国家馆', title: 'Chance', sourceUrl: 'https://www.cnap.fr/actualites/evenements/chance-commande-publique-christian-boltanski' },
  { artistId: 'zineb-sedira', year: '2022', group: '法国馆', kind: '国家馆', title: 'Dreams Have No Titles', sourceUrl: 'https://www.whitechapelgallery.org/exhibitions/zineb-sedira-dreams-have-no-titles/' },
  { artistId: 'laure-prouvost', year: '2019', group: '法国馆', kind: '国家馆', title: 'Deep See Blue Surrounding You', sourceUrl: 'https://www.labiennale.org/en/art/2019/national-participations/france' },
  { artistId: 'sophie-calle', year: '2007', group: '法国馆', kind: '国家馆', title: 'Take Care of Yourself', sourceUrl: 'https://www.perrotin.com/artists/Sophie_Calle/1' },
  { artistId: 'steve-mcqueen', year: '2009', group: '英国馆', kind: '国家馆', title: 'Giardini', sourceUrl: 'https://venicebiennale.britishcouncil.org/history/2000s/2009-steve-mcqueen' },
  { artistId: 'jeremy-deller', year: '2013', group: '英国馆', kind: '国家馆', title: 'English Magic', sourceUrl: 'https://www.britishcouncil.org/contact/press/jeremy-deller-english-magic' },
  { artistId: 'john-akomfrah', year: '2024', group: '英国馆', kind: '国家馆', title: 'Listening All Night to the Rain', sourceUrl: 'https://www.labiennale.org/en/art/2024/great-britain' },
  { artistId: 'hito-steyerl', year: '2015', group: '德国馆', kind: '国家馆', title: 'Factory of the Sun', sourceUrl: 'https://www.pacegallery.com/artists/hito-steyerl/' },
  { artistId: 'archie-moore', year: '2024', group: '澳大利亚馆', kind: '国家馆', title: 'kith and kin', sourceUrl: 'https://www.labiennale.org/en/art/2024/australia' },
  { artistId: 'akram-zaatari', year: '2013', group: '黎巴嫩馆', kind: '国家馆', title: 'Letter to a Refusing Pilot', sourceUrl: 'https://www.moma.org/calendar/exhibitions/1278' },
  { artistId: 'charlotte-prodger', year: '2019', group: '平行展 · Scotland + Venice', kind: '平行展', title: 'SaF05', sourceUrl: 'https://scotlandandvenice.com/project/charlotte-prodger/' },
  { artistId: 'john-akomfrah', year: '2015', group: '国际主展', kind: '国际主展', title: 'Vertigo Sea', sourceUrl: 'https://www.lissongallery.com/artists/john-akomfrah' },
  { artistId: 'mataaho-collective', year: '2024', group: '国际主展', kind: '国际主展', title: 'Takapau', sourceUrl: 'https://www.labiennale.org/en/art/2024/nucleo-contemporaneo/mataaho-collective' },
  { artistId: 'taryn-simon', year: '2015', group: '国际主展', kind: '国际主展', title: 'Paperwork and the Will of Capital', sourceUrl: 'https://tarynsimon.com/works/pwc/' },
];

export const veniceGroups = Array.from(new Set(veniceEntries.map(entry => entry.group)));
export const veniceYears = Array.from(new Set(veniceEntries.map(entry => entry.year))).sort().reverse();

export function matchesVenice(artistId: string, group: string, year: string) {
  if (!group && !year) return true;
  return veniceEntries.some(entry =>
    entry.artistId === artistId && (!group || entry.group === group) && (!year || entry.year === year)
  );
}
