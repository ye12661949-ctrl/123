import { biennaleUnits19 } from './biennaleExpansion19';
import { venice2026ArtistIds } from './venice2026Complete';
import { veniceHistoricalArtistIdsByYear, veniceHistoricalRosters } from './veniceHistoricalComplete';
import { otherBiennaleArtistIdsByYear, otherBiennaleRosters } from './otherBiennaleComplete';

export type BiennaleUnit = {
  id: string;
  eventId: string;
  eventName: string;
  year: string;
  edition: string;
  section: '国际主展' | '国家馆' | '主展 / 策展单元' | '专题单元';
  country?: string;
  title: string;
  curator?: string;
  artistIds: string[];
  officialArtistCount?: number;
  sourceUrl: string;
};

export const biennaleEvents = [
  { id: 'venice', label: 'Venice / 威尼斯', structureNote: '按届次区分 International Exhibition 与 National Participations；国家馆是独立制度入口。' },
  { id: 'whitney', label: 'Whitney / 惠特尼', structureNote: '没有国家馆，按 Biennial 届次和主展艺术家浏览。' },
  { id: 'gwangju', label: 'Gwangju / 光州', structureNote: '按届次与主展策展结构浏览，不套用威尼斯国家馆模型。' },
  { id: 'berlin', label: 'Berlin / 柏林', structureNote: '按届次与主展艺术家浏览。' },
  { id: 'sao-paulo', label: 'São Paulo / 圣保罗', structureNote: '按届次与策展单元浏览。' },
  { id: 'sharjah', label: 'Sharjah / 沙迦', structureNote: '按届次与主展参展关系浏览。' },
  { id: 'istanbul', label: 'Istanbul / 伊斯坦布尔', structureNote: '按届次与策展框架浏览。' },
] as const;

export const biennaleUnits: BiennaleUnit[] = [
  ...biennaleUnits19,
  ...veniceHistoricalRosters.map(r => ({ id: `venice-${r.year}-complete-international`, eventId: 'venice', eventName: 'Venice Biennale', year: r.year, edition: r.edition, section: '国际主展' as const, title: r.title, curator: r.curator, artistIds: r.artistIds, officialArtistCount: r.officialArtistCount, sourceUrl: r.sourceUrl })),
  ...otherBiennaleRosters.map(r => ({ id: r.id, eventId: r.eventId, eventName: r.eventName, year: r.year, edition: r.edition, section: '主展 / 策展单元' as const, title: r.title, curator: r.curator, artistIds: r.artistIds, officialArtistCount: r.officialArtistCount, sourceUrl: r.sourceUrl })),
  { id: 'venice-2007-france', eventId: 'venice', eventName: 'Venice Biennale', year: '2007', edition: '52nd', section: '国家馆', country: 'France', title: 'Take Care of Yourself', artistIds: ['sophie-calle'], sourceUrl: 'https://www.perrotin.com/artists/Sophie_Calle/1' },
  { id: 'venice-2009-great-britain', eventId: 'venice', eventName: 'Venice Biennale', year: '2009', edition: '53rd', section: '国家馆', country: 'Great Britain', title: 'Giardini', artistIds: ['steve-mcqueen'], sourceUrl: 'https://venicebiennale.britishcouncil.org/history/2000s/2009-steve-mcqueen' },
  { id: 'venice-2003-utopia-station', eventId: 'venice', eventName: 'Venice Biennale', year: '2003', edition: '50th', section: '专题单元', title: 'Utopia Station', artistIds: ['hans-peter-feldmann'], sourceUrl: 'https://www.moma.org/calendar/exhibitions/4832' },
  { id: 'venice-2011-france', eventId: 'venice', eventName: 'Venice Biennale', year: '2011', edition: '54th', section: '国家馆', country: 'France', title: 'Chance', artistIds: ['christian-boltanski'], sourceUrl: 'https://www.cnap.fr/actualites/evenements/chance-commande-publique-christian-boltanski' },
  { id: 'venice-2011-international', eventId: 'venice', eventName: 'Venice Biennale', year: '2011', edition: '54th', section: '国际主展', title: 'ILLUMInations', artistIds: ['yto-barrada', 'elad-lassry'], sourceUrl: 'https://www.303gallery.com/artists/elad-lassry/biography' },
  { id: 'venice-2013-great-britain', eventId: 'venice', eventName: 'Venice Biennale', year: '2013', edition: '55th', section: '国家馆', country: 'Great Britain', title: 'English Magic', artistIds: ['jeremy-deller'], sourceUrl: 'https://www.britishcouncil.org/contact/press/jeremy-deller-english-magic' },
  { id: 'venice-2013-lebanon', eventId: 'venice', eventName: 'Venice Biennale', year: '2013', edition: '55th', section: '国家馆', country: 'Lebanon', title: 'Letter to a Refusing Pilot', artistIds: ['akram-zaatari'], sourceUrl: 'https://www.moma.org/calendar/exhibitions/1278' },
  { id: 'venice-2013-germany-mofokeng', eventId: 'venice', eventName: 'Venice Biennale', year: '2013', edition: '55th', section: '国家馆', country: 'Germany', title: 'German Pavilion', artistIds: ['santu-mofokeng'], sourceUrl: 'https://santumofokengfoundation.com/about' },
  { id: 'venice-2015-germany', eventId: 'venice', eventName: 'Venice Biennale', year: '2015', edition: '56th', section: '国家馆', country: 'Germany', title: 'German Pavilion', artistIds: ['hito-steyerl'], sourceUrl: 'https://www.pacegallery.com/artists/hito-steyerl/' },
  { id: 'venice-2015-international', eventId: 'venice', eventName: 'Venice Biennale', year: '2015', edition: '56th', section: '国际主展', title: 'All the World’s Futures', artistIds: ['john-akomfrah', 'taryn-simon', 'walead-beshty'], sourceUrl: 'https://www.labiennale.org/' },
  { id: 'venice-2019-france', eventId: 'venice', eventName: 'Venice Biennale', year: '2019', edition: '58th', section: '国家馆', country: 'France', title: 'Deep See Blue Surrounding You', artistIds: ['laure-prouvost'], sourceUrl: 'https://www.labiennale.org/en/art/2019/national-participations/france' },
  { id: 'venice-2019-international', eventId: 'venice', eventName: 'Venice Biennale', year: '2019', edition: '58th', section: '国际主展', title: 'May You Live In Interesting Times', artistIds: ['teresa-margolles'], sourceUrl: 'https://www.labiennale.org/en/art/2019/partecipants/teresa-margolles' },
  { id: 'venice-2019-scotland', eventId: 'venice', eventName: 'Venice Biennale', year: '2019', edition: '58th', section: '专题单元', country: 'Scotland + Venice', title: 'SaF05', artistIds: ['charlotte-prodger'], sourceUrl: 'https://scotlandandvenice.com/project/charlotte-prodger/' },
  { id: 'venice-2022-france', eventId: 'venice', eventName: 'Venice Biennale', year: '2022', edition: '59th', section: '国家馆', country: 'France', title: 'Dreams Have No Titles', artistIds: ['zineb-sedira'], sourceUrl: 'https://www.whitechapelgallery.org/exhibitions/zineb-sedira-dreams-have-no-titles/' },
  { id: 'venice-2022-usa', eventId: 'venice', eventName: 'Venice Biennale', year: '2022', edition: '59th', section: '国家馆', country: 'United States', title: 'Sovereignty', curator: 'Eva Respini', artistIds: ['simone-leigh'], sourceUrl: 'https://www.labiennale.org/en/art/2022/united-states-america' },
  { id: 'venice-2022-great-britain', eventId: 'venice', eventName: 'Venice Biennale', year: '2022', edition: '59th', section: '国家馆', country: 'Great Britain', title: 'Feeling Her Way', curator: 'Emma Ridgway', artistIds: ['sonia-boyce'], sourceUrl: 'https://www.labiennale.org/en/art/2022/national-participations/great-britain' },
  { id: 'venice-2022-canada', eventId: 'venice', eventName: 'Venice Biennale', year: '2022', edition: '59th', section: '国家馆', country: 'Canada', title: '2011 ≠ 1848', curator: 'Reid Shier', artistIds: ['stan-douglas'], sourceUrl: 'https://www.labiennale.org/en/art/2022/canada' },
  { id: 'venice-2022-germany', eventId: 'venice', eventName: 'Venice Biennale', year: '2022', edition: '59th', section: '国家馆', country: 'Germany', title: 'RELOCATING A STRUCTURE', curator: 'Yilmaz Dziewior', artistIds: ['maria-eichhorn'], sourceUrl: 'https://www.labiennale.org/en/art/2022/national-participations/germany' },
  { id: 'venice-2022-switzerland', eventId: 'venice', eventName: 'Venice Biennale', year: '2022', edition: '59th', section: '国家馆', country: 'Switzerland', title: 'The Concert', curator: 'Alexandre Babel / Francesco Stocchi', artistIds: ['latifa-echakhch'], sourceUrl: 'https://www.labiennale.org/en/art/2022/switzerland' },
  { id: 'venice-2022-belgium', eventId: 'venice', eventName: 'Venice Biennale', year: '2022', edition: '59th', section: '国家馆', country: 'Belgium', title: 'The Nature of the Game', curator: 'Hilde Teerlinck', artistIds: ['francis-alys'], sourceUrl: 'https://www.labiennale.org/en/art/2022/belgium' },
  { id: 'venice-2022-new-zealand', eventId: 'venice', eventName: 'Venice Biennale', year: '2022', edition: '59th', section: '国家馆', country: 'New Zealand', title: 'Paradise Camp', curator: 'Natalie King', artistIds: ['yuki-kihara'], sourceUrl: 'https://www.labiennale.org/en/art/2022/national-participations/new-zealand' },
  { id: 'venice-2022-brazil', eventId: 'venice', eventName: 'Venice Biennale', year: '2022', edition: '59th', section: '国家馆', country: 'Brazil', title: 'with the heart coming out of the mouth', curator: 'Jacopo Crivelli Visconti', artistIds: ['jonathas-de-andrade'], sourceUrl: 'https://www.labiennale.org/en/art/2022/brazil' },
  { id: 'venice-2022-international', eventId: 'venice', eventName: 'Venice Biennale', year: '2022', edition: '59th', section: '国际主展', title: 'The Milk of Dreams', curator: 'Cecilia Alemani', artistIds: ['rosana-paulino', 'simone-leigh'], sourceUrl: 'https://www.labiennale.org/en/art/2022' },
  { id: 'venice-2024-contemporary', eventId: 'venice', eventName: 'Venice Biennale', year: '2024', edition: '60th', section: '国际主展', title: 'Foreigners Everywhere · Nucleo Contemporaneo', curator: 'Adriano Pedrosa', artistIds: ['mataaho-collective', 'teresa-margolles', 'sim-chi-yin', 'pacita-abad', 'ivan-argote', 'karimah-ashadu', 'anna-maria-maiolino', 'nil-yalter', 'la-chola-poblete', 'lauren-halsey', 'claire-fontaine', 'leilah-babirye', 'agnes-questionmark', 'manauara-clandestina', 'sandra-poulson', 'kang-seung-lee', 'kudzanai-chiurai', 'nazira-karimi', 'taylor-nkomo', 'beatriz-cortez'], officialArtistCount: 110, sourceUrl: 'https://www.labiennale.org/en/art/2024/artists' },
  { id: 'venice-2024-portraits', eventId: 'venice', eventName: 'Venice Biennale', year: '2024', edition: '60th', section: '国际主展', title: 'Foreigners Everywhere · Nucleo Storico / Portraits', curator: 'Adriano Pedrosa', artistIds: ['samia-halaby'], officialArtistCount: 111, sourceUrl: 'https://www.labiennale.org/en/art/2024/artists' },
  { id: 'venice-2024-abstractions', eventId: 'venice', eventName: 'Venice Biennale', year: '2024', edition: '60th', section: '国际主展', title: 'Foreigners Everywhere · Nucleo Storico / Abstractions', curator: 'Adriano Pedrosa', artistIds: [], officialArtistCount: 37, sourceUrl: 'https://www.labiennale.org/en/art/2024/artists' },
  { id: 'venice-2024-italians-everywhere', eventId: 'venice', eventName: 'Venice Biennale', year: '2024', edition: '60th', section: '国际主展', title: 'Foreigners Everywhere · Nucleo Storico / Italians Everywhere', curator: 'Adriano Pedrosa', artistIds: [], officialArtistCount: 40, sourceUrl: 'https://www.labiennale.org/en/art/2024/artists' },
  { id: 'venice-2024-applied-arts', eventId: 'venice', eventName: 'Venice Biennale', year: '2024', edition: '60th', section: '专题单元', title: 'Pavilion of Applied Arts', artistIds: ['beatriz-milhazes'], officialArtistCount: 1, sourceUrl: 'https://www.labiennale.org/en/art/2024/artists' },
  { id: 'venice-2017-cote-divoire', eventId: 'venice', eventName: 'Venice Biennale', year: '2017', edition: '57th', section: '国家馆', country: 'Côte d’Ivoire', title: 'Adorn / Translation', artistIds: ['joana-choumali'], sourceUrl: 'https://joanachoumali.com/index.php/about' },
  { id: 'venice-2024-australia', eventId: 'venice', eventName: 'Venice Biennale', year: '2024', edition: '60th', section: '国家馆', country: 'Australia', title: 'kith and kin', artistIds: ['archie-moore'], sourceUrl: 'https://www.labiennale.org/en/art/2024/australia' },
  { id: 'venice-2024-great-britain', eventId: 'venice', eventName: 'Venice Biennale', year: '2024', edition: '60th', section: '国家馆', country: 'Great Britain', title: 'Listening All Night to the Rain', artistIds: ['john-akomfrah'], sourceUrl: 'https://www.labiennale.org/en/art/2024/great-britain' },
  { id: 'venice-2024-japan', eventId: 'venice', eventName: 'Venice Biennale', year: '2024', edition: '60th', section: '国家馆', country: 'Japan', title: 'Compose', curator: 'Sook-Kyung Lee', artistIds: ['yuko-mohri'], sourceUrl: 'https://venezia-biennale-japan.jpf.go.jp/e/art/2024' },
  { id: 'venice-2024-denmark', eventId: 'venice', eventName: 'Venice Biennale', year: '2024', edition: '60th', section: '国家馆', country: 'Denmark', title: 'Rise of the Sunken Sun', artistIds: ['inuuteq-storch'], sourceUrl: 'https://www.inuuteqstorch.com/' },
  { id: 'venice-2024-canada', eventId: 'venice', eventName: 'Venice Biennale', year: '2024', edition: '60th', section: '国家馆', country: 'Canada', title: 'Trinket', artistIds: ['kapwani-kiwanga'], sourceUrl: 'https://www.labiennale.org/en/art/2024/canada' },
  { id: 'venice-2024-turkiye', eventId: 'venice', eventName: 'Venice Biennale', year: '2024', edition: '60th', section: '国家馆', country: 'Türkiye', title: 'Hollow and Broken: A State of the World', artistIds: ['gulsun-karamustafa'], sourceUrl: 'https://turkiyepavilion24.iksv.org/' },
  { id: 'venice-2024-brazil', eventId: 'venice', eventName: 'Venice Biennale', year: '2024', edition: '60th', section: '国家馆', country: 'Brazil / Hãhãwpuá', title: 'Ka’a Pûera: we are walking birds', artistIds: ['gliceria-tupinamba'], sourceUrl: 'https://bienal.org.br/' },
  { id: 'venice-2024-kosovo', eventId: 'venice', eventName: 'Venice Biennale', year: '2024', edition: '60th', section: '国家馆', country: 'Kosovo', title: 'The Echoing Silences of Metal and Skin', artistIds: ['doruntina-kastrati'], sourceUrl: 'https://2024.pavilionofkosovo.com/' },
  { id: 'venice-2026-international', eventId: 'venice', eventName: 'Venice Biennale', year: '2026', edition: '61st', section: '国际主展', title: 'In Minor Keys', curator: 'Koyo Kouoh', artistIds: venice2026ArtistIds, officialArtistCount: 110, sourceUrl: 'https://www.labiennale.org/en/art/2026/artists' },
  { id: 'venice-2026-brazil', eventId: 'venice', eventName: 'Venice Biennale', year: '2026', edition: '61st', section: '国家馆', country: 'Brazil', title: 'Comigo ninguém pode', curator: 'Diane Lima', artistIds: ['rosana-paulino'], sourceUrl: 'https://www.labiennale.org/en/art/2026/national-participations' },
  { id: 'venice-2026-canada', eventId: 'venice', eventName: 'Venice Biennale', year: '2026', edition: '61st', section: '国家馆', country: 'Canada', title: 'Abbas Akhavan: Entre chien et loup', curator: 'Kim Nguyen', artistIds: ['abbas-akhavan'], sourceUrl: 'https://www.labiennale.org/en/art/2026/canada' },
  { id: 'venice-2026-france', eventId: 'venice', eventName: 'Venice Biennale', year: '2026', edition: '61st', section: '国家馆', country: 'France', title: 'Comme Saturne', curator: 'Myriam Ben Salah', artistIds: ['yto-barrada'], sourceUrl: 'https://www.labiennale.org/en/art/2026/france' },
  { id: 'whitney-1985', eventId: 'whitney', eventName: 'Whitney Biennial', year: '1985', edition: '1985', section: '主展 / 策展单元', title: 'Whitney Biennial 1985', artistIds: ['sherrie-levine'], sourceUrl: 'https://whitney.org/artists/2978' },
  { id: 'whitney-1989', eventId: 'whitney', eventName: 'Whitney Biennial', year: '1989', edition: '1989', section: '主展 / 策展单元', title: 'Whitney Biennial 1989', artistIds: ['sherrie-levine'], sourceUrl: 'https://whitney.org/artists/2978' },
  { id: 'whitney-2008', eventId: 'whitney', eventName: 'Whitney Biennial', year: '2008', edition: '2008', section: '主展 / 策展单元', title: 'Whitney Biennial 2008', artistIds: ['sherrie-levine'], sourceUrl: 'https://whitney.org/artists/2978' },
  { id: 'whitney-2012', eventId: 'whitney', eventName: 'Whitney Biennial', year: '2012', edition: '2012', section: '主展 / 策展单元', title: 'Whitney Biennial 2012', artistIds: ['liz-deschenes'], sourceUrl: 'https://whitney.org/exhibitions/2012-biennial' },
  { id: 'whitney-2014', eventId: 'whitney', eventName: 'Whitney Biennial', year: '2014', edition: '2014', section: '主展 / 策展单元', title: 'Whitney Biennial 2014', artistIds: ['sherrie-levine'], sourceUrl: 'https://whitney.org/artists/2978' },
  { id: 'whitney-2017', eventId: 'whitney', eventName: 'Whitney Biennial', year: '2017', edition: '2017', section: '主展 / 策展单元', title: 'Whitney Biennial 2017', artistIds: ['deana-lawson'], sourceUrl: 'https://whitney.org/exhibitions/2017-biennial' },
  { id: 'whitney-2019', eventId: 'whitney', eventName: 'Whitney Biennial', year: '2019', edition: '2019', section: '主展 / 策展单元', title: 'Whitney Biennial 2019', artistIds: ['lucas-blalock'], sourceUrl: 'https://whitney.org/exhibitions/2019-Biennial' },
  { id: 'whitney-2024', eventId: 'whitney', eventName: 'Whitney Biennial', year: '2024', edition: '2024', section: '主展 / 策展单元', title: 'Even Better Than the Real Thing', curator: 'Chrissie Iles, Meg Onli', artistIds: ['carmen-winant', 'isaac-julien', 'jes-fan', 'nikita-gale', 'ektor-garcia', 'lotus-l-kang', 'dala-nasser', 'kiyan-williams', 'takako-yamaguchi'], sourceUrl: 'https://whitney.org/exhibitions/2024-biennial' },
  { id: 'gwangju-2023', eventId: 'gwangju', eventName: 'Gwangju Biennale', year: '2023', edition: '14th', section: '主展 / 策展单元', title: 'soft and weak like water', curator: 'Sook-Kyung Lee', artistIds: ['yuko-mohri'], sourceUrl: 'https://www.gwangjubiennale.org/' },
  { id: 'berlin-2025', eventId: 'berlin', eventName: 'Berlin Biennale', year: '2025', edition: '13th', section: '主展 / 策展单元', title: '13th Berlin Biennale', artistIds: ['armin-linke'], sourceUrl: 'https://13.berlinbiennale.de/en/artists/list' },
  { id: 'sao-paulo-2014', eventId: 'sao-paulo', eventName: 'São Paulo Biennial', year: '2014', edition: '31st', section: '主展 / 策展单元', title: 'How to (...) things that don’t exist', artistIds: ['gulsun-karamustafa'], sourceUrl: 'https://bienal.org.br/' },
  { id: 'sao-paulo-2018', eventId: 'sao-paulo', eventName: 'São Paulo Biennial', year: '2018', edition: '33rd', section: '主展 / 策展单元', title: 'Affective Affinities', artistIds: ['sara-cwynar', 'mame-diarra-niang'], sourceUrl: 'https://bienal.org.br/' },
  { id: 'sharjah-2023', eventId: 'sharjah', eventName: 'Sharjah Biennial', year: '2023', edition: '15th', section: '主展 / 策展单元', title: 'Thinking Historically in the Present', artistIds: ['inuuteq-storch', 'mame-diarra-niang'], sourceUrl: 'https://www.sharjahart.org/' },
  { id: 'sharjah-2025', eventId: 'sharjah', eventName: 'Sharjah Biennial', year: '2025', edition: '16th', section: '主展 / 策展单元', title: 'Sharjah Biennial 16', artistIds: ['doruntina-kastrati'], sourceUrl: 'https://www.sharjahart.org/' },
  { id: 'istanbul-2017', eventId: 'istanbul', eventName: 'Istanbul Biennial', year: '2017', edition: '15th', section: '主展 / 策展单元', title: 'a good neighbour', artistIds: ['sim-chi-yin'], sourceUrl: 'https://chiyinsim.com/news/' },
  { id: 'istanbul-2022', eventId: 'istanbul', eventName: 'Istanbul Biennial', year: '2022', edition: '17th', section: '主展 / 策展单元', title: '17th Istanbul Biennial', artistIds: ['sim-chi-yin'], sourceUrl: 'https://chiyinsim.com/bio/' },
  { id: 'istanbul-2025', eventId: 'istanbul', eventName: 'Istanbul Biennial', year: '2025', edition: '18th', section: '主展 / 策展单元', title: 'The Three-Legged Cat', artistIds: ['doruntina-kastrati'], sourceUrl: 'https://bienal.iksv.org/' },
];

export function getBiennaleYears(eventId: string) {
  return Array.from(new Set(biennaleUnits.filter(unit => unit.eventId === eventId).map(unit => unit.year))).sort((a, b) => Number(b) - Number(a));
}

export function getBiennaleSelectionArtistIds(selection: string | null) {
  if (!selection) return null;
  if (selection.startsWith('year:')) {
    const [, eventId, year] = selection.split(':');
    if (eventId === 'venice' && year === '2026') return venice2026ArtistIds;
    if (eventId === 'venice' && veniceHistoricalArtistIdsByYear[year]) return veniceHistoricalArtistIdsByYear[year];
    if (otherBiennaleArtistIdsByYear[`${eventId}:${year}`]) return otherBiennaleArtistIdsByYear[`${eventId}:${year}`];
    return Array.from(new Set(biennaleUnits.filter(unit => unit.eventId === eventId && unit.year === year).flatMap(unit => unit.artistIds)));
  }
  return biennaleUnits.find(unit => unit.id === selection)?.artistIds ?? [];
}

export function getArtistBiennaleSignals(artistId: string) {
  return biennaleUnits.filter(unit => unit.artistIds.includes(artistId)).sort((a, b) => Number(b.year) - Number(a.year));
}
