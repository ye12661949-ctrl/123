import { useEffect, useMemo, useRef, useState } from 'react';
import { artists, type Artist } from './data';
import { artistArchives } from './archiveData';
import { BiennaleBrowser } from './BiennaleBrowser';
import { PrizeRoster } from './PrizeRoster';
import { directoryEntries as entries } from './directoryExpansion18';
import { foamTalent2016ArtistIds, foamTalent2016Source } from './foamTalent2016';
import { photoEditions } from './photoEditionRosters';
import './fieldDirectory.css';

type Domain = 'art' | 'photo';
const categories = {
  photo: [
    { id: 'magazines', name: '杂志 / 出版平台' },
    { id: 'exhibitions', name: '展览 / 摄影机构' },
    { id: 'festivals', name: '摄影节 / 双年展' },
    { id: 'awards', name: '摄影奖项 / 资助' },
    { id: 'fairs', name: '摄影艺博会' }
  ],
  art: [
    { id: 'biennales', name: '双年展 / 周期展' },
    { id: 'museums', name: '美术馆 / 展览机构' },
    { id: 'awards', name: '当代艺术奖项' },
    { id: 'magazines', name: '杂志 / 评论 / 访谈' }
  ]
};
const normalize = (value: string) => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

export function FieldDirectory({ onOpenArtist, biennaleSelection, onBiennaleSelect, onDirectoryArtistsSelect, onDomainSelect }: {
  onOpenArtist: (artist: Artist) => void;
  biennaleSelection: string | null;
  onBiennaleSelect: (id: string | null) => void;
  onDirectoryArtistsSelect: (ids: string[] | null) => void;
  onDomainSelect: (domain: Domain | null) => void;
}) {
  const [domain, setDomain] = useState<Domain | null>(null);
  const [category, setCategory] = useState('');
  const [entryId, setEntryId] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [track, setTrack] = useState('全部');
  const [photoEditionId, setPhotoEditionId] = useState('');
  const detailRef = useRef<HTMLElement | null>(null);
  const entry = entries.find(item => item.id === entryId);
  // ART SCORE measures contemporary-art institutional/canonical weight and cross-media relevance, not popularity, prize money or photographic-industry prestige.
  const festivalImportance: Record<string, number> = { arles: 94, vevey: 91, kyoto: 88, fotofest: 87, phe: 85, format: 81, lagos: 81, europea: 79, getxophoto: 78, belfast: 76, cortona: 75, circulations: 74 };
  const exhibitionImportance: Record<string, number> = { 'new-photography': 100, 'tpg-shows': 92, 'foam-shows': 90, 'photo-elysee': 88, autograph: 87, icp: 86, 'co-berlin': 84 };
  const museumImportance: Record<string, number> = { moma: 100, tate: 99, pompidou: 99, whitney: 97, guggenheim: 96, sfmoma: 94, serpentine: 93, masp: 92 };
  const awardImportance: Record<string, number> = { deutsche: 95, hasselblad: 93, pictet: 88, hcb: 86, 'prix-elysee': 84, huf: 83, kimura: 82, infinity: 81, 'vevey-grant': 81, 'aperture-portfolio': 78, photobook: 77, inge: 76, smith: 75, 'ph-grant': 74, loba: 73, 'lens-awards': 70, hariban: 69, dummy: 68, 'vevey-book': 68, 'luma-dummy': 67, wpp: 66, sony: 62, roederer: 61 };
  const importance = (id: string) => category === 'festivals' ? festivalImportance[id] : category === 'awards' ? awardImportance[id] : category === 'exhibitions' ? exhibitionImportance[id] : category === 'museums' ? museumImportance[id] : undefined;
  const categoryEntries = entries.filter(item => item.domain === domain && item.category === category).sort((a, b) => (importance(b.id) ?? 50) - (importance(a.id) ?? 50));
  const tracks = ['全部', ...Array.from(new Set(categoryEntries.map(item => item.track).filter(Boolean)))];
  const visible = categoryEntries.filter(item =>
    (track === '全部' || item.track === track) &&
    normalize([item.name, item.summary, item.track ?? '', ...item.tokens].join(' ')).includes(normalize(query.trim()))
  );
  useEffect(() => {
    if (entryId) detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [entryId]);
  const related = useMemo(() => {
    if (!entry) return [];
    if (entry.id === 'foamtalent') {
      return foamTalent2016ArtistIds.flatMap(id => {
        const artist = artists.find(item => item.id === id);
        return artist ? [{ artist, records: [{ label: '入选 · Foam Talent 2016 · Foam Magazine #45', source: foamTalent2016Source }] }] : [];
      });
    }
    const matches = (text: string) => entry.tokens.some(token => {
      const haystack = normalize(text);
      const needle = normalize(token);
      if (/^[a-z]{2,3}$/.test(needle)) return haystack.split(/[^a-z]+/).includes(needle);
      return haystack.includes(needle);
    });
    return artists.flatMap(artist => {
      const archive = artistArchives[artist.id];
      const records = (archive?.projects ?? []).flatMap(project =>
        project.relations
          .filter(relation => (!entry.kind || relation.kind === entry.kind) && matches(relation.label))
          .map(relation => ({
            label: relation.kind + ' · ' + relation.label + ' · ' + (relation.detail ?? project.period) + ' · ' + project.title,
            source: project.sourceUrl
          }))
      );
      if (!entry.kind || entry.kind === '奖项') {
        for (const text of [...(archive?.awards ?? []), ...artist.achievements]) {
          if (matches(text) && !records.some(record => record.label.includes(text))) {
            records.push({ label: '履历记录 · ' + text, source: artist.sourceUrl });
          }
        }
      }
      return records.length ? [{ artist, records }] : [];
    });
  }, [entry]);
  function resetView() {
    setEntryId(null);
    setQuery('');
    setTrack('全部');
    setPhotoEditionId('');
    onDirectoryArtistsSelect(null);
  }
  function selectEntry(id: string) {
    setEntryId(id);
    const selectedEntry = entries.find(item => item.id === id);
    if (!selectedEntry) return;
    if (id === 'foamtalent') {
      const latest = photoEditions.find(item => item.programId === 'foamtalent');
      if (latest) {
        setPhotoEditionId(latest.id);
        onDirectoryArtistsSelect(latest.artistIds);
      } else {
        setPhotoEditionId('foamtalent-2016');
        onDirectoryArtistsSelect(foamTalent2016ArtistIds);
      }
      return;
    }
    if (selectedEntry.category === 'festivals' || selectedEntry.category === 'awards') {
      const latest = photoEditions.find(item => item.programId === id);
      if (latest) {
        setPhotoEditionId(latest.id);
        onDirectoryArtistsSelect(latest.artistIds);
        return;
      }
    }
    const selectedTokens = selectedEntry.tokens.map(normalize);
    const ids = artists.filter(artist => {
      const archive = artistArchives[artist.id];
      const text = [...artist.achievements, ...(archive?.awards ?? []), ...(archive?.projects ?? []).flatMap(project => project.relations.map(relation => relation.label))].map(normalize);
      return text.some(value => selectedTokens.some(token => value.includes(token)));
    }).map(artist => artist.id);
    onDirectoryArtistsSelect(ids);
  }
  function enter(next: Domain) {
    setDomain(next);
    setCategory(categories[next][0].id);
    setEntryId(null);
    setQuery('');
    setTrack('全部');
    onDirectoryArtistsSelect(null);
    onDomainSelect(next);
  }
  return (
    <section className="field-directory" id="fields" aria-labelledby="field-directory-title">
      <header>
        <span>FIELD DIRECTORY</span>
        <h2 id="field-directory-title">从领域进入机构、展览与出版</h2>
        <p>{entries.length} 个目录条目，另设当代艺术双年展档案。领域目录是全站总筛选：选择当代摄影或当代艺术后，下方艺术家与多维筛选标签同步切换到该领域。</p>
      </header>
      <div className="field-entry-buttons">
        <button aria-pressed={domain === 'art'} onClick={() => enter('art')} data-appdeploy-source-id="src_f72484f7ab739de888b7f027b613897a">
          <strong>当代艺术</strong><span>双年展 · 美术馆 · 艺术奖项 · 评论 / 访谈</span>
          <small>{entries.filter(item => item.domain === 'art').length} 个条目 + 双年展档案</small>
        </button>
        <button aria-pressed={domain === 'photo'} onClick={() => enter('photo')} data-appdeploy-source-id="src_19b6f5da97e3c6652222565e44585803">
          <strong>当代摄影</strong><span>杂志 · 展览 · 摄影节 · 奖项 / 资助 · 艺博会</span>
          <small>{entries.filter(item => item.domain === 'photo').length} 个条目</small>
        </button>
      </div>
      {domain && <div className="field-directory-content">
        <nav className="field-breadcrumb" aria-label="领域目录路径">
          <button onClick={() => { setDomain(null); resetView(); onDomainSelect(null); }} data-appdeploy-source-id="src_a80e04d2594f57bc169e6d485a14b96a">领域目录</button>
          <span> / {domain === 'photo' ? '当代摄影' : '当代艺术'}</span>
          {entry && <span> / {entry.name}</span>}
        </nav>
        <div className="field-category-tabs" aria-label="领域下的栏目">
          {categories[domain].map(item => <button key={item.id} aria-pressed={category === item.id}
            onClick={() => { setCategory(item.id); resetView(); }} data-appdeploy-source-id="src_f8e9350acca10f93287c9df62773ea02">
            {item.name}{item.id !== 'biennales' && <small> · {entries.filter(e => e.domain === domain && e.category === item.id).length}</small>}
          </button>)}
        </div>
        {domain === 'art' && category === 'biennales'
          ? <BiennaleBrowser selected={biennaleSelection} onSelect={onBiennaleSelect} onOpenArtist={onOpenArtist} />
          : <>
            {domain === 'photo' && category === 'awards' && <>
              <p className="field-record-note">按奖项关注的对象分组，方便比较。类别为本站研究归纳，具体资格、届次与规则见官方资料。</p>
              <div className="field-category-tabs" aria-label="摄影奖项方向">
                {tracks.map(item => <button key={item} aria-pressed={track === item}
                  onClick={() => { setTrack(item!); setEntryId(null); }} data-appdeploy-source-id="src_0882c4f55680112f49fb28f295ea211b">{item}</button>)}
              </div>
            </>}
            <div className="field-directory-search">
              <label>在当前栏目查找
                <input value={query} onChange={event => { setQuery(event.target.value); setEntryId(null); }}
                  placeholder="名称、地区、关键词…" data-appdeploy-source-id="src_7ea4cbcc2191163745914566b0f9f348" />
              </label>
              <span aria-live="polite">{visible.length} / {categoryEntries.length} 个条目</span>
              {(query || track !== '全部') && <button onClick={resetView} data-appdeploy-source-id="src_d2c4479188291534b700df1bd26732f6">清空目录条件</button>}
            </div>
            {!visible.length && <p>当前栏目没有匹配条目。可清空目录条件，或切换上方栏目。</p>}
            <div className="field-directory-cards">
              {visible.map(item => <button key={item.id} aria-pressed={entryId === item.id} onClick={() => selectEntry(item.id)} data-appdeploy-source-id="src_cbbab83c1a8f40daf655db09cacbb129">
                <strong>{item.name}</strong>{importance(item.id) !== undefined && <small>艺术含金量 · {(importance(item.id) ?? 0) >= 97 ? 'S+' : (importance(item.id) ?? 0) >= 90 ? 'S' : (importance(item.id) ?? 0) >= 80 ? 'A' : (importance(item.id) ?? 0) >= 70 ? 'B' : 'C'} · {importance(item.id)}/100 · #{categoryEntries.findIndex(entry => entry.id === item.id) + 1}</small>}{item.track && <small>{item.track}</small>}
                <span>{item.summary}</span><em>进入栏目 →</em>
              </button>)}
            </div>
            {entry && <section ref={detailRef} className="field-entry-detail" aria-label={entry.name + '栏目详情'}>
              <div className="field-detail-head"><h3>{entry.name}</h3><button onClick={() => setEntryId(null)} data-appdeploy-source-id="src_38f1eb38a052149f4e00950e5d3e82cc">收起栏目</button></div>
              <p>{entry.summary}</p>
              <a href={entry.url} target="_blank" rel="noreferrer" data-appdeploy-source-id="src_a3ad36c88539728053eda891f3c4d044">官方目录与资料 ↗</a>
              <div className="field-research-guide"><strong>研究切入点 · 本站阅读建议</strong>
                <p>{entry.focus ?? (category === 'awards' ? '从具体届次、类别和获奖或入围身份入手，再对照项目制作与展示。' : '从一个项目出发，比较材料、图像编排、出版和展览语境。')}</p>
              </div>
              {entry.sections && <div className="field-source-sections">
                <h4>具体栏目 / 已核实记录</h4>
                {entry.sections.map(section => <article key={section.name}>
                  <a href={section.url} target="_blank" rel="noreferrer" data-appdeploy-source-id="src_dca47bcebbef53217facea79ccb05ddf">{section.name} ↗</a><p>{section.summary}</p>
                </article>)}
              </div>}
              {entry.id === 'foamtalent' && <div className="prize-roster"><h4>按年份 / 届次</h4><div className="field-category-tabs">{photoEditions.filter(item => item.programId === 'foamtalent').map(item => <button key={item.id} aria-pressed={photoEditionId === item.id} onClick={() => { setPhotoEditionId(item.id); onDirectoryArtistsSelect(item.artistIds); }} data-appdeploy-source-id="src_3c49153e86dda3ad780d7958717930e8">{item.label}</button>)}<button aria-pressed={photoEditionId === 'foamtalent-2016'} onClick={() => { setPhotoEditionId('foamtalent-2016'); onDirectoryArtistsSelect(foamTalent2016ArtistIds); }} data-appdeploy-source-id="src_3a0aa843103ebc5b1849f62770f20d2c">2016</button></div></div>}
              {(entry.category === 'festivals' || entry.category === 'awards') && photoEditions.some(item => item.programId === entry.id) && <div className="prize-roster"><h4>按年份 / 届次</h4><div className="field-category-tabs">{photoEditions.filter(item => item.programId === entry.id).map(item => <button key={item.id} aria-pressed={photoEditionId === item.id} onClick={() => { setPhotoEditionId(item.id); onDirectoryArtistsSelect(item.artistIds); }} data-appdeploy-source-id="src_9aff2f277ee78997ac54ee06c8f1b0b2">{item.label}</button>)}</div><p className="field-record-note">按官方届次资料建立年度艺术家索引；点击年份后对应摄影师进入下方主 ARTISTS 列表。</p></div>}
              {['deutsche', 'pictet'].includes(entry.id) && <PrizeRoster key={entry.id} awardId={entry.id} onOpenArtist={onOpenArtist} onEditionSelect={ids => onDirectoryArtistsSelect(ids)} />}
              <p className="field-record-note">先选具体年份/届次；对应艺术家会直接出现在下方主 ARTISTS 列表，多维筛选继续作用于这批艺术家。</p>
            </section>}
          </>}
      </div>}
    </section>
  );
}
