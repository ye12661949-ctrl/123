import { useMemo, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { artists } from './data';
import { biennaleEvents, biennaleUnits, getBiennaleYears } from './biennaleData';
import { venice2026ArtistIds } from './venice2026Complete';

export function BiennaleBrowser({ selected, onSelect, onOpenArtist }: { selected: string | null; onSelect: (value: string | null) => void; onOpenArtist: (artist: (typeof artists)[number]) => void }) {
  const [eventId, setEventId] = useState('venice');
  const [year, setYear] = useState(getBiennaleYears('venice')[0] ?? '2026');
  const years = useMemo(() => getBiennaleYears(eventId), [eventId]);
  const event = biennaleEvents.find(item => item.id === eventId) ?? biennaleEvents[0];
  const units = biennaleUnits.filter(unit => unit.eventId === eventId && unit.year === year);
  const yearSelection = `year:${eventId}:${year}`;
  const indexedIds = eventId === 'venice' && year === '2026' ? venice2026ArtistIds : Array.from(new Set(units.flatMap(unit => unit.artistIds)));

  const changeEvent = (nextId: string) => {
    const nextYears = getBiennaleYears(nextId);
    setEventId(nextId);
    setYear(nextYears[0] ?? '');
    onSelect(null);
  };

  return (
    <section className="biennale-browser" aria-label="双年展年份与单元分类">
      <div className="biennale-browser-head">
        <div><span>BIENNALE STRUCTURE / 双年展结构</span><h3>年份 → 主展 / 国家馆 / 策展单元</h3></div>
        <p>{event.structureNote} 年份在这里是制度节点，不把跨多年的艺术家项目强行塞进单一年份。</p>
      </div>
      <div className="biennale-event-tabs">
        {biennaleEvents.map(item => <button key={item.id} className={eventId === item.id ? 'active' : ''} onClick={() => changeEvent(item.id)} data-appdeploy-source-id="src_ab08ec37e6e8c683de3e0c0bcc153b9e">{item.label}</button>)}
      </div>
      <div className="biennale-year-row">
        <b>YEAR / 届次</b>
        <div className="biennale-year-tabs">
          {years.map(item => <button key={item} className={year === item ? 'active' : ''} onClick={() => { setYear(item); onSelect(null); }} data-appdeploy-source-id="src_f2f3c31720c7729dc700ab5932bb5776">{item}</button>)}
        </div>
        {selected && <button className="biennale-clear" onClick={() => onSelect(null)} data-appdeploy-source-id="src_29faad715dfa2aa848352000d4ea7589">取消本层筛选 ×</button>}
      </div>
      <button className={`biennale-year-all ${selected === yearSelection ? 'active' : ''}`} onClick={() => onSelect(selected === yearSelection ? null : yearSelection)} data-appdeploy-source-id="src_a612decb7d37e9a9e1d45ce112011109">
        <span>本届已收录 / INDEXED {year}</span><b>{indexedIds.length} 位数据库艺术家</b>
      </button>
      <p className="field-record-note">以下把官方名单与本站人物档案分开显示。点击单元后，下方主艺术家目录会同步筛选；威尼斯 2026 的 In Minor Keys 同时在本目录内直接展开完整 110 个 participant 记录，避免再出现只看到少数旧档案的误解。</p>
      {eventId === 'venice' && year === '2026' && (
        <div className="biennale-roster-panel">
          <div className="biennale-browser-head"><div><span>IN MINOR KEYS · COMPLETE ROSTER</span><h3>2026 官方 110 个参展 participant</h3></div><p>{venice2026ArtistIds.filter(id => artists.some(artist => artist.id === id)).length} / 110 条记录已进入本站艺术家数据。</p></div>
          <div className="biennale-roster-list">
            {venice2026ArtistIds.map((id, index) => {
              const artist = artists.find(item => item.id === id);
              return artist ? <button key={id} onClick={() => onOpenArtist(artist)} data-appdeploy-source-id="src_756692c45c558d198989b8466faec4ae"><b>{String(index + 1).padStart(3, '0')}</b><span>{artist.name}</span></button> : null;
            })}
          </div>
        </div>
      )}
      <div className="biennale-unit-grid">
        {units.map(unit => {
          const names = unit.artistIds.map(id => artists.find(artist => artist.id === id)?.name ?? id);
          return (
            <article className={`biennale-unit-card ${selected === unit.id ? 'active' : ''}`} key={unit.id}>
              <button className="biennale-unit-select" onClick={() => onSelect(selected === unit.id ? null : unit.id)} data-appdeploy-source-id="src_d67cac195046eab77ae1a6ccc9d87d29">
                <span>{unit.section}{unit.country ? ` · ${unit.country}` : ''}</span>
                <h4>{unit.title}</h4>
                <p>{names.join(' · ')}</p>
                {unit.officialArtistCount !== undefined && <small>官方参展名单 · 已收录 {unit.artistIds.filter(id => artists.some(artist => artist.id === id)).length} / {unit.officialArtistCount} 位</small>}
                {unit.curator && <em>Curator: {unit.curator}</em>}
              </button>
              <a href={unit.sourceUrl} target="_blank" rel="noreferrer" aria-label={`查看 ${unit.title} 来源`} data-appdeploy-source-id="src_9d4ef5da0cdd171b0700c4de8e987dc0"><ExternalLink size={12} /></a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
