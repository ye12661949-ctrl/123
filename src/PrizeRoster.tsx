import { useState } from 'react';
import { artists, type Artist } from './data';
import { prizeEditions } from './prizeEditions20';
import './prizeRoster.css';

export function PrizeRoster({ onOpenArtist, awardId = 'deutsche', onEditionSelect }: {
  onOpenArtist: (artist: Artist) => void;
  awardId?: string;
  onEditionSelect?: (ids: string[]) => void;
}) {
  const editions = prizeEditions.filter(edition => edition.awardId === awardId);
  const [selectedId, setSelectedId] = useState('');
  const [query, setQuery] = useState('');
  const edition = editions.find(item => item.id === selectedId) ?? editions[0];
  if (!edition) return null;
  const normalize = (value: string) => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const records = edition.records;
  const indexedCount = records.filter(record => artists.some(artist => artist.id === record.artistId)).length;
  const visible = records.filter(record => normalize([
    artists.find(artist => artist.id === record.artistId)?.name ?? '',
    record.project, record.status
  ].join(' ')).includes(normalize(query.trim())));
  return (
    <section className="prize-roster" aria-label={awardId === 'pictet' ? 'Prix Pictet 分届名单' : 'Deutsche Börse 分届名单'}>
      <h4>按届次阅读 · {awardId === 'pictet' ? 'Prix Pictet' : 'Deutsche Börse'}</h4>
      <div className="field-category-tabs" aria-label="奖项年份">
        {editions.map(item => <button key={item.id} aria-pressed={edition.id === item.id}
          onClick={() => { setSelectedId(item.id); setQuery(''); onEditionSelect?.(item.records.map(record => record.artistId)); }} data-appdeploy-source-id="src_aaae62ace3711a3f2591db0d00e2cb69">{item.label}</button>)}
      </div>
      <p className="prize-roster-coverage" aria-live="polite">{edition.label} 入围名单 · 已收录 {indexedCount} / {edition.expectedCount} 位</p>
      <p className="field-record-note">{edition.note} 此比例仅指本届官方入围名单，尚非该奖项全部历届。</p>
      <a href={edition.sourceUrl} target="_blank" rel="noreferrer" data-appdeploy-source-id="src_655988b5a0148b03fdf283d934e66f3e">本届官方完整名单 ↗</a>
      <div className="field-directory-search">
        <label>在本届名单查找
          <input value={query} onChange={event => setQuery(event.target.value)} placeholder="艺术家、项目、获奖或入围…" data-appdeploy-source-id="src_23741bb0b646b043a18bb640adb92c2c" />
        </label>
        <span aria-live="polite">显示 {visible.length} / {records.length} 位</span>
        {query && <button onClick={() => setQuery('')} data-appdeploy-source-id="src_f2c03001f601ba135c5c6664e04907e3">清空名单搜索</button>}
      </div>
      <div className="field-related-list">
        {visible.map(record => {
          const artist = artists.find(item => item.id === record.artistId);
          return <article key={record.artistId}>
            <span className={'prize-status' + (record.status === '获奖' ? ' is-winner' : '')}>{record.status}</span>
            {artist ? <button onClick={() => onOpenArtist(artist)} data-appdeploy-source-id="src_ad39005b54ca07f2896ce237b1950681">{artist.name} →</button> : <span>艺术家档案整理中</span>}
            <p><strong>{record.project}</strong></p>
            <p>{record.period}</p>
            <a href={record.sourceUrl} target="_blank" rel="noreferrer" data-appdeploy-source-id="src_c0e528e54f952cb1e062f1334dbd9b35">项目与提名依据 ↗</a>
          </article>;
        })}
      </div>
      {!visible.length && <p>本届没有匹配记录，可清空名单搜索重新浏览。</p>}
    </section>
  );
}
