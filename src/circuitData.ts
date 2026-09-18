import { biennaleUnits } from './biennaleData';

export type CircuitCategory = {
  id: string;
  label: string;
  kind: '奖项' | '博物馆' | '双年展' | '大型周期展';
  note: string;
  artistIds: string[];
};

export const circuitCategories: CircuitCategory[] = [
  {
    id: 'turner-prize',
    label: 'Turner Prize / 透纳奖',
    kind: '奖项',
    note: '历届获奖者与重要入围艺术家。',
    artistIds: ['lubaina-himid', 'steve-mcqueen', 'mark-leckey', 'laure-prouvost', 'jesse-darling', 'jasleen-kaur', 'wolfgang-tillmans', 'gillian-wearing', 'jeremy-deller', 'helen-marten', 'charlotte-prodger', 'lawrence-abu-hamdan', 'tai-shani', 'tacita-dean', 'isaac-julien'],
  },
  {
    id: 'tate',
    label: 'Tate / 展览与馆藏',
    kind: '博物馆',
    note: '与 Tate 收藏、个展、重要委托或馆内项目有明确关系。',
    artistIds: ['lubaina-himid', 'steve-mcqueen', 'mark-leckey', 'jesse-darling', 'wolfgang-tillmans', 'gillian-wearing', 'jeremy-deller', 'helen-marten', 'charlotte-prodger', 'lawrence-abu-hamdan', 'tacita-dean', 'isaac-julien', 'allan-sekula', 'daido-moriyama'],
  },
  {
    id: 'moma-collection',
    label: 'MoMA Collection / MoMA馆藏',
    kind: '博物馆',
    note: 'MoMA 在线馆藏中可确认有作品的艺术家。',
    artistIds: ['steve-mcqueen', 'lorna-simpson', 'martha-rosler', 'walid-raad', 'boris-mikhailov', 'cindy-sherman', 'wolfgang-tillmans', 'thomas-demand', 'liz-deschenes', 'trevor-paglen', 'isaac-julien', 'zoe-leonard', 'an-my-le', 'akram-zaatari', 'arthur-jafa', 'anne-collier', 'louise-lawler', 'roe-ethridge', 'sophie-ristelhueber', 'daido-moriyama', 'bernd-hilla-becher', 'jeff-wall', 'rineke-dijkstra', 'samuel-fosso', 'lieko-shiga', 'graciela-iturbide', 'santu-mofokeng', 'roman-opalka', 'yasumasa-morimura', 'richard-prince', 'martha-wilson', 'catherine-opie', 'hans-peter-feldmann', 'alfredo-jaar', 'ming-smith', 'susan-meiselas', 'yto-barrada', 'stan-douglas', 'francis-alys', 'rosana-paulino', 'carmen-winant', 'latoya-ruby-frazier', 'pao-houa-her', 'sohrab-hura', 'mame-diarra-niang'],
  },
  {
    id: 'venice-biennale',
    label: 'Venice Biennale / 威尼斯双年展',
    kind: '双年展',
    note: '国家馆或国际展参与者。',
    artistIds: ['lubaina-himid', 'steve-mcqueen', 'laure-prouvost', 'jesse-darling', 'john-akomfrah', 'archie-moore', 'mataaho-collective', 'hito-steyerl', 'sophie-calle', 'walead-beshty', 'jeremy-deller', 'helen-marten', 'charlotte-prodger', 'lawrence-abu-hamdan', 'akram-zaatari', 'arthur-jafa'],
  },
  {
    id: 'whitney-biennial',
    label: 'Whitney Biennial / 惠特尼双年展',
    kind: '双年展',
    note: '曾进入 Whitney Biennial 的数据库艺术家。',
    artistIds: ['liz-deschenes', 'lucas-blalock', 'deana-lawson', 'lorna-simpson', 'sherrie-levine'],
  },
  {
    id: 'berlin-biennale',
    label: 'Berlin Biennale / 柏林双年展',
    kind: '双年展',
    note: '含 2025 第13届等已确认参与者。',
    artistIds: ['armin-linke', 'steve-mcqueen'],
  },
  {
    id: 'gwangju-biennale',
    label: 'Gwangju Biennale / 光州双年展',
    kind: '双年展',
    note: '光州双年展参展艺术家。',
    artistIds: ['mataaho-collective'],
  },
  {
    id: 'sao-paulo-biennial',
    label: 'São Paulo Biennial / 圣保罗双年展',
    kind: '双年展',
    note: '含 2025 第36届等参展艺术家。',
    artistIds: ['laure-prouvost', 'wolfgang-tillmans'],
  },
  {
    id: 'sharjah-biennial',
    label: 'Sharjah Biennial / 沙迦双年展',
    kind: '双年展',
    note: '沙迦双年展参展艺术家。',
    artistIds: ['lorna-simpson', 'john-akomfrah', 'jesse-darling'],
  },
  {
    id: 'istanbul-biennial',
    label: 'Istanbul Biennial / 伊斯坦布尔双年展',
    kind: '双年展',
    note: '伊斯坦布尔双年展参展艺术家。',
    artistIds: ['jasleen-kaur'],
  },
  {
    id: 'sydney-biennale',
    label: 'Biennale of Sydney / 悉尼双年展',
    kind: '双年展',
    note: '悉尼双年展参展艺术家。',
    artistIds: ['mataaho-collective'],
  },
  {
    id: 'documenta',
    label: 'documenta / 卡塞尔文献展',
    kind: '大型周期展',
    note: 'documenta 参展艺术家。',
    artistIds: ['mataaho-collective'],
  },
  {
    id: 'havana-biennial',
    label: 'Havana Biennial / 哈瓦那双年展',
    kind: '双年展',
    note: '哈瓦那双年展参展艺术家。',
    artistIds: ['lubaina-himid'],
  },
];

const circuitEventMap: Record<string, string> = {
  'venice-biennale': 'venice',
  'whitney-biennial': 'whitney',
  'berlin-biennale': 'berlin',
  'gwangju-biennale': 'gwangju',
  'sao-paulo-biennial': 'sao-paulo',
  'sharjah-biennial': 'sharjah',
  'istanbul-biennial': 'istanbul',
};

for (const category of circuitCategories) {
  const eventId = circuitEventMap[category.id];
  const biennaleAdditions = eventId
    ? biennaleUnits.filter(unit => unit.eventId === eventId).flatMap(unit => unit.artistIds)
    : [];
  const otherAdditions = category.id === 'moma-collection'
    ? ['annette-messager', 'bouchra-khalili', 'carrie-mae-weems', 'john-stezaker', 'elad-lassry', 'sherrie-levine', 'ana-mendieta', 'claude-cahun', 'on-kawara', 'joan-fontcuberta', 'paul-graham', 'nan-goldin', 'ishiuchi-miyako', 'dayanita-singh', 'zanele-muholi']
    : category.id === 'tate'
      ? ['sunil-gupta']
      : category.id === 'documenta'
        ? ['bouchra-khalili', 'hans-peter-feldmann', 'vandy-rattana']
        : [];
  category.artistIds = Array.from(new Set([...category.artistIds, ...biennaleAdditions, ...otherAdditions]));
}

export function getArtistCircuits(artistId: string) {
  return circuitCategories
    .filter(category => category.artistIds.includes(artistId))
    .map(category => category.label);
}

export function circuitArtistCount(category: CircuitCategory) {
  return category.artistIds.length;
}
