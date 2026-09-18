import { useEffect, useMemo, useState } from 'react';
import {
  Bookmark,
  Check,
  ChevronRight,
  ExternalLink,
  Filter,
  GitCompareArrows,
  Search,
  SlidersHorizontal,
  X,
} from 'lucide-react';
import { artists, filterGroups, type Artist } from './data';
import { curatorProfiles, macroTrends, realityStats, trendInstitutions } from './trendsData';
import { CompleteArtistArchive, CuratorRelations, EcosystemDashboard } from './ArchivePanels';
import { artistArchives } from './archiveData';
import { circuitCategories, getArtistCircuits } from './circuitData';
import { CuratorNetworkMap } from './ResearchMaps';
import { getArtistFieldTags } from './taxonomyData';
import { artistBatch24 } from './expansionBatch24';
import { PracticeLineages } from './PracticeLineages';
import { FieldDirectory } from './FieldDirectory';
import { getArtistBiennaleSignals, getBiennaleSelectionArtistIds } from './biennaleData';

function normalizeSearch(value: string) {
  return value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

type FilterKey = 'methods' | 'subjects' | 'outputs' | 'institutions';

type SelectedFilters = Record<FilterKey, string[]>;

const emptyFilters: SelectedFilters = {
  methods: [],
  subjects: [],
  outputs: [],
  institutions: [],
};

function loadStoredArray(key: string) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function App() {
  const [query, setQuery] = useState('');
  const [showSaved, setShowSaved] = useState(false);
  const [filters, setFilters] = useState<SelectedFilters>(emptyFilters);
  const [activeArtist, setActiveArtist] = useState<Artist | null>(null);
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [showCompare, setShowCompare] = useState(false);
  const [savedIds, setSavedIds] = useState<string[]>(() =>
    loadStoredArray('practice-index-saved')
  );
  const [notes, setNotes] = useState<Record<string, string>>(() => {
    try {
      const raw = localStorage.getItem('practice-index-notes');
      return raw ? (JSON.parse(raw) as Record<string, string>) : {};
    } catch {
      return {};
    }
  });
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [circuitFilters, setCircuitFilters] = useState<string[]>([]);
  const [biennaleSelection, setBiennaleSelection] = useState<string | null>(null);
  const [directoryArtistIds, setDirectoryArtistIds] = useState<string[] | null>(null);
  const [domainScope, setDomainScope] = useState<'art' | 'photo' | null>(null);
  const [page, setPage] = useState(() => window.location.hash.replace('#', '') || 'artists');

  useEffect(() => {
    const syncPage = () => setPage(window.location.hash.replace('#', '') || 'artists');
    window.addEventListener('hashchange', syncPage);
    return () => window.removeEventListener('hashchange', syncPage);
  }, []);

  const domainArtists = useMemo(() => {
    if (!domainScope) return artists;
    return artists.filter(artist => {
      const circuits = getArtistCircuits(artist.id).map(normalizeSearch);
      const fields = getArtistFieldTags(artist, getArtistCircuits(artist.id)).map(normalizeSearch);
      const text = normalizeSearch([artist.intro, ...artist.methods, ...artist.subjects, ...artist.outputs, ...artist.institutions, ...artist.achievements, ...circuits, ...fields].join(' '));
      const photoSignals = ['photography', 'photograph', '摄影', 'photo', 'foam', 'pictet', 'deutsche börse', 'aperture', 'lensculture', 'rencontres', 'images vevey', 'phmuseum', 'world press photo', 'sony world photography', 'icp infinity'];
      const isPhoto = photoSignals.some(signal => text.includes(normalizeSearch(signal)));
      return domainScope === 'photo' ? isPhoto : !isPhoto || text.includes('contemporary art') || text.includes('当代艺术') || getArtistBiennaleSignals(artist.id).length > 0;
    });
  }, [domainScope]);

  const scopedFilterGroups = useMemo(() => ({
    methods: Array.from(new Set(domainArtists.flatMap(artist => artist.methods))).sort(),
    subjects: Array.from(new Set(domainArtists.flatMap(artist => artist.subjects))).sort(),
    outputs: Array.from(new Set(domainArtists.flatMap(artist => artist.outputs))).sort(),
    institutions: Array.from(new Set(domainArtists.flatMap(artist => artist.institutions))).sort(),
  }), [domainArtists]);
  const scopedCircuitCategories = useMemo(() => circuitCategories.filter(category => domainArtists.some(artist => getArtistCircuits(artist.id).includes(category.label))), [domainArtists]);

  useEffect(() => {
    localStorage.setItem('practice-index-saved', JSON.stringify(savedIds));
  }, [savedIds]);

  useEffect(() => {
    localStorage.setItem('practice-index-notes', JSON.stringify(notes));
  }, [notes]);

  const filteredArtists = useMemo(() => {
    const q = normalizeSearch(query.trim());
    const biennaleArtistIds = getBiennaleSelectionArtistIds(biennaleSelection);
    const domainArtistIds = new Set(domainArtists.map(artist => artist.id));
    return artists.filter(artist => {
      if (!domainArtistIds.has(artist.id)) return false;
      if (showSaved && !savedIds.includes(artist.id)) return false;
      if (directoryArtistIds && !directoryArtistIds.includes(artist.id)) return false;
      const haystack = [
        artist.name,
        artist.chineseName ?? '',
        artist.intro,
        ...artist.methods,
        ...artist.subjects,
        ...artist.outputs,
        ...artist.institutions,
        ...artist.achievements,
        ...getArtistCircuits(artist.id),
        ...getArtistFieldTags(artist, getArtistCircuits(artist.id)),
        ...artist.projects.flatMap(project => [project.title, project.type]),
        ...(artistArchives[artist.id]?.projects ?? []).flatMap(project => [
          project.title, project.summary, ...project.actions,
          ...project.relations.map(relation => relation.label),
        ]),
        ...getArtistBiennaleSignals(artist.id).flatMap(entry => [entry.eventName, entry.year, entry.section, entry.country ?? '', entry.title]),
      ]
        .join(' ')
        .toLowerCase();
      if (q && !normalizeSearch(haystack).includes(q)) return false;
      if (biennaleArtistIds && !biennaleArtistIds.includes(artist.id)) return false;
      if (
        circuitFilters.length > 0 &&
        !circuitFilters.every(value => getArtistCircuits(artist.id).includes(value))
      ) return false;
      return (Object.keys(filters) as FilterKey[]).every(
        key =>
          filters[key].length === 0 ||
          filters[key].every(value => artist[key].includes(value))
      );
    });
  }, [query, filters, circuitFilters, biennaleSelection, directoryArtistIds, domainArtists, showSaved, savedIds]);

  const activeFilterCount = Object.values(filters).flat().length + circuitFilters.length + Number(Boolean(biennaleSelection));
  const comparedArtists = compareIds
    .map(id => artists.find(artist => artist.id === id))
    .filter(Boolean) as Artist[];

  const toggleFilter = (key: FilterKey, value: string) => {
    setFilters(current => ({
      ...current,
      [key]: current[key].includes(value)
        ? current[key].filter(item => item !== value)
        : [...current[key], value],
    }));
  };

  const toggleSaved = (id: string) => {
    setSavedIds(current =>
      current.includes(id)
        ? current.filter(item => item !== id)
        : [...current, id]
    );
  };

  const toggleCompare = (id: string) => {
    setCompareIds(current => {
      if (current.includes(id)) return current.filter(item => item !== id);
      if (current.length >= 3) return current;
      return [...current, id];
    });
  };

  const resetFilters = () => {
    setFilters(emptyFilters);
    setCircuitFilters([]);
    setBiennaleSelection(null);
    setDirectoryArtistIds(null);
    setDomainScope(null);
    setQuery('');
    setShowSaved(false);
  };

  const toggleCircuitFilter = (value: string) => {
    setCircuitFilters(current =>
      current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value]
    );
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#artists" aria-label="Practice Index home">
          <span className="brand-mark">PI</span>
          <span>
            <strong>Practice Index</strong>
            <small>当代摄影与艺术研究索引</small>
          </span>
        </a>
        <nav className="research-nav" aria-label="研究层导航">
          <a href="#artists">艺术家</a>
          <a href="#fields">领域目录</a>
          <a href="#lineages">创作脉络</a>
          <a href="#trends">趋势雷达</a>
          <a href="#curators">策展人</a>
          <a href="#ecosystem">机构 / 奖项</a>
        </nav>
        <div className="header-meta">
          <span>{artists.length} 位艺术家 · 趋势数据更新至 2026.09</span>
          <button
            className="saved-pill"
            aria-pressed={showSaved}
            onClick={() => { resetFilters(); setShowSaved(!showSaved); }}
          >
            <Bookmark size={15} /> {showSaved ? '返回全部' : '已收藏'} {savedIds.length}
          </button>
        </div>
      </header>

      {page === 'artists' && <main id="artists" className="research-page">
        <section className="hero">
          <div>
            <p className="eyebrow">
              不是按“风格”找图，而是按作品如何发生来研究
            </p>
            <h1>
              从创作动作出发，
              <br />
              建立你的当代艺术坐标。
            </h1>
          </div>
          <p className="hero-copy">
            先从当代艺术或当代摄影进入出版、展览与奖项目录；查找艺术家时，再用创作方法、题材和媒介交叉筛选。
          </p>
        </section>

        <section className="search-row">
          <label className="search-box">
            <Search size={18} />
            <input
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="搜艺术家、项目、方法、概念、机构…"
            />
            {query && (
              <button aria-label="清空搜索" onClick={() => setQuery('')}>
                <X size={16} />
              </button>
            )}
          </label>
          <button
            className="mobile-filter-button"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <SlidersHorizontal size={17} /> 筛选{' '}
            {activeFilterCount > 0 && <b>{activeFilterCount}</b>}
          </button>
        </section>

        <FieldDirectory onOpenArtist={setActiveArtist} biennaleSelection={biennaleSelection} onBiennaleSelect={selection => { setDirectoryArtistIds(null); setBiennaleSelection(selection); if (selection) { setQuery(''); setFilters({ methods: [], subjects: [], outputs: [], institutions: [] }); setCircuitFilters([]); setShowSaved(false); } }} onDirectoryArtistsSelect={ids => { setBiennaleSelection(null); setDirectoryArtistIds(ids); setQuery(''); setFilters({ methods: [], subjects: [], outputs: [], institutions: [] }); setCircuitFilters([]); setShowSaved(false); }} onDomainSelect={scope => { setDomainScope(scope); setDirectoryArtistIds(null); setBiennaleSelection(null); setQuery(''); setFilters({ methods: [], subjects: [], outputs: [], institutions: [] }); setCircuitFilters([]); setShowSaved(false); }} />
        <div className="research-update-note">
          <strong>本轮更新 · 09.15</strong>
<span>新增 17 位艺术家与 20 个项目记录。Prix Pictet Human 第十届 12 位入围者现已全部关联档案；惠特尼 2024 新增 8 位关联艺术家。完善 Vasantha Yogananthan 与 Isaac Julien 的项目资料，增加逐届名单搜索，区分创作、展出和获奖年份。</span>
        </div>

        <div className="content-grid">
          <aside className={`filters ${mobileFiltersOpen ? 'is-open' : ''}`}>
            <div className="filter-mobile-head">
              <strong>筛选器</strong>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X />
              </button>
            </div>
            <div className="filter-title-row">
              <span>
                <Filter size={15} /> 多维筛选
              </span>
              {activeFilterCount > 0 && (
                <button onClick={resetFilters}>全部清除</button>
              )}
            </div>
            <FilterSection
              title="创作方法 / Practice"
              items={scopedFilterGroups.methods}
              selected={filters.methods}
              onToggle={value => toggleFilter('methods', value)}
            />
            <FilterSection
              title="题材 / 议题 / Subjects"
              items={scopedFilterGroups.subjects}
              selected={filters.subjects}
              onToggle={value => toggleFilter('subjects', value)}
            />
            <FilterSection
              title="媒介 / 输出形式 / Media"
              items={scopedFilterGroups.outputs}
              selected={filters.outputs}
              onToggle={value => toggleFilter('outputs', value)}
            />
            <FilterSection
              title="机构 / 履历"
              items={scopedFilterGroups.institutions}
              selected={filters.institutions}
              onToggle={value => toggleFilter('institutions', value)}
            />
            <FilterSection
              title="奖项 / 馆藏 / 双年展"
              items={scopedCircuitCategories.map(category => category.label)}
              selected={circuitFilters}
              onToggle={toggleCircuitFilter}
            />
            <button
              className="apply-mobile"
              onClick={() => setMobileFiltersOpen(false)}
            >
              查看 {filteredArtists.length} 位艺术家
            </button>
          </aside>

          <section className="results">
            <div className="results-head">
              <div>
                <span>{showSaved ? '已收藏艺术家' : domainScope === 'photo' ? '当代摄影 · ARTISTS' : domainScope === 'art' ? '当代艺术 · ARTISTS' : 'ARTISTS'}</span>
                <strong>{filteredArtists.length}</strong>
              </div>
              <p>
                筛选采用“同时满足”逻辑，适合寻找方法交叉，例如「家庭档案 +
                装置」或「无相机摄影 + 场域特定」。
              </p>
            </div>

            {filteredArtists.length > 0 ? (
              <div className="artist-list">
                {filteredArtists.map((artist, index) => (
                  <article className="artist-card" key={artist.id}>
                    <div className="card-index">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <ArtworkThumb artist={artist} />
                    <div
                      className="artist-main"
                      onClick={() => setActiveArtist(artist)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={event =>
                        event.key === 'Enter' && setActiveArtist(artist)
                      }
                    >
                      <div className="artist-name-row">
                        <div>
                          <h2>{artist.name}</h2>
                          {artist.chineseName && (
                            <span>{artist.chineseName}</span>
                          )}
                        </div>
                        <ChevronRight className="card-arrow" />
                      </div>
                      {artistArchives[artist.id] && <div className="research-status">
                        <b>{artistBatch24.some(item => item.id === artist.id) ? '本轮新增' : '已建立档案'}</b>
                        <span>{artistArchives[artist.id].projects.length} 个项目 · 逐项来源</span>
                      </div>}
                      <p className="artist-intro">{artist.intro}</p>
                      {getArtistCircuits(artist.id).length > 0 && (
                        <div className="circuit-badges">
                          {getArtistCircuits(artist.id).slice(0, 4).map(tag => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                      )}
                      <div className="tag-row">
                        {artist.methods.slice(0, 4).map(tag => (
                          <span className="tag method" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="tag-row secondary">
                        {artist.subjects.slice(0, 4).map(tag => (
                          <span className="tag" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="achievement-line">
                        {artist.achievements.slice(0, 2).map(item => (
                          <span key={item}>◆ {item}</span>
                        ))}
                      </div>
                    </div>
                    <div className="card-actions">
                      <button
                        className={
                          savedIds.includes(artist.id)
                            ? 'icon-button active'
                            : 'icon-button'
                        }
                        onClick={() => toggleSaved(artist.id)}
                        aria-label="收藏艺术家"
                      >
                        <Bookmark
                          size={17}
                          fill={
                            savedIds.includes(artist.id)
                              ? 'currentColor'
                              : 'none'
                          }
                        />
                      </button>
                      <button
                        className={
                          compareIds.includes(artist.id)
                            ? 'compare-button active'
                            : 'compare-button'
                        }
                        onClick={() => toggleCompare(artist.id)}
                        disabled={
                          !compareIds.includes(artist.id) &&
                          compareIds.length >= 3
                        }
                      >
                        <GitCompareArrows size={15} />{' '}
                        {compareIds.includes(artist.id) ? '已加入' : '对比'}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <p>{showSaved ? '当前收藏中没有符合条件的艺术家。点击艺术家旁的书签即可收藏。' : '这个交叉条件下还没有艺术家。'}</p>
                <button onClick={resetFilters}>清除筛选，回到全部条目</button>
              </div>
            )}
          </section>
        </div>
      </main>}

      {page === 'fields' && <main className="research-page standalone-page"><FieldDirectory onOpenArtist={setActiveArtist} biennaleSelection={biennaleSelection} onBiennaleSelect={selection => { setDirectoryArtistIds(null); setBiennaleSelection(selection); }} onDirectoryArtistsSelect={setDirectoryArtistIds} onDomainSelect={setDomainScope} /></main>}
      {page === 'lineages' && <main className="research-page standalone-page"><PracticeLineages onOpenArtist={setActiveArtist} /></main>}
      {page === 'trends' && <main className="research-page standalone-page"><TrendDashboard /></main>}
      {page === 'curators' && <main className="research-page standalone-page"><CuratorDashboard /></main>}
      {page === 'ecosystem' && <main className="research-page standalone-page"><EcosystemDashboard /></main>}

      {activeArtist && (
        <ArtistDrawer
          key={activeArtist.id}
          artist={activeArtist}
          saved={savedIds.includes(activeArtist.id)}
          compared={compareIds.includes(activeArtist.id)}
          note={notes[activeArtist.id] ?? ''}
          onClose={() => setActiveArtist(null)}
          onSave={() => toggleSaved(activeArtist.id)}
          onCompare={() => toggleCompare(activeArtist.id)}
          onOpenArtist={artist => setActiveArtist(artist)}
          onNote={value =>
            setNotes(current => ({ ...current, [activeArtist.id]: value }))
          }
        />
      )}

      {compareIds.length > 0 && !showCompare && (
        <div className="compare-dock">
          <div>
            <GitCompareArrows size={17} />
            <span>已加入对比</span>
            {comparedArtists.map(artist => (
              <b key={artist.id}>{artist.name}</b>
            ))}
          </div>
          <div>
            <button className="text-button" onClick={() => setCompareIds([])}>
              清空
            </button>
            <button
              className="primary-button"
              onClick={() => setShowCompare(true)}
              disabled={compareIds.length < 2}
            >
              开始对比 ({compareIds.length}/3)
            </button>
          </div>
        </div>
      )}

      {showCompare && (
        <ComparePanel
          artists={comparedArtists}
          onClose={() => setShowCompare(false)}
        />
      )}
    </div>
  );
}

function TrendDashboard() {
  const kinds = ['全部', ...Array.from(new Set(trendInstitutions.map(item => item.kind)))];
  const [kind, setKind] = useState('全部');
  const visible = kind === '全部' ? trendInstitutions : trendInstitutions.filter(item => item.kind === kind);

  return (
    <section className="intelligence-shell" id="trends">
      <div className="intelligence-hero">
        <div><p className="eyebrow">INDUSTRY SIGNALS / 2022–2026</p><h2>趋势雷达</h2></div>
        <p>这里把“硬信号”和“我们的归纳”分开。硬信号来自真实 shortlist、winner、官方策展文本与公开数据；趋势判断是基于连续几年材料的解释，不把某一届结果假装成永恒规则。</p>
      </div>
      <div className="reality-strip">
        {realityStats.map(item => <article key={item.label}><span>{item.label}</span><strong>{item.value}</strong><p>{item.note}</p></article>)}
      </div>
      <div className="macro-grid">
        {macroTrends.map(item => <article className="macro-card" key={item.title}><div className="macro-head"><span>{item.status}</span><h3>{item.title}</h3></div><p><b>证据：</b>{item.evidence}</p><p><b>我的归纳：</b>{item.interpretation}</p><p className="caution"><b>别误读：</b>{item.caution}</p></article>)}
      </div>
      <div className="trend-toolbar">
        <div><span>TREND TRACKERS</span><strong>{visible.length}</strong></div>
        <div className="kind-tabs">{kinds.map(item => <button key={item} className={kind === item ? 'active' : ''} onClick={() => setKind(item)}>{item}</button>)}</div>
      </div>
      <div className="trend-list">
        {visible.map(item => <details className="trend-card" key={item.id}><summary><div><span>{item.kind} · {item.window}</span><h3>{item.name}</h3><p>{item.entryMode}</p></div><div className="trend-scale"><b>{item.scale}</b><span>展开分析 +</span></div></summary><div className="trend-card-body"><div className="trajectory"><h4>近年轨迹</h4>{item.trajectory.map(point => <div key={point.year}><b>{point.year}</b><p>{point.signal}</p></div>)}</div><div className="signal-columns"><div><h4>硬信号 / 官方材料能确认</h4>{item.hardSignals.map(signal => <p key={signal}>◆ {signal}</p>)}</div><div><h4>趋势归纳 / 不是官方口径</h4>{item.synthesis.map(signal => <p key={signal}>— {signal}</p>)}</div><div className="reality-box"><h4>现实情况 / 对投稿意味着什么</h4>{item.reality.map(signal => <p key={signal}>! {signal}</p>)}</div></div><div className="watch-row"><b>顺着这一机构继续看：</b>{item.watchNames.map(name => <span key={name}>{name}</span>)}</div><div className="source-row">{item.sources.map(source => <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.label} <ExternalLink size={12} /></a>)}</div></div></details>)}
      </div>
    </section>
  );
}

function CuratorDashboard() {
  return (
    <section className="intelligence-shell curator-shell" id="curators">
      <div className="intelligence-hero"><div><p className="eyebrow">CURATORIAL LENSES</p><h2>策展人地图</h2></div><p>先看关系，再读文字：策展人与机构、展览和彼此共享的策展生态会用线连接。虚线只表示研究 / 制度交叉，不把同行关系误写成私人关系。</p></div>
      <CuratorNetworkMap />
      <div className="curator-grid">
        {curatorProfiles.map(curator => <details className="curator-card" key={curator.id}><summary><span>{curator.geography}</span><h3>{curator.name}</h3><p>{curator.role}</p><div className="curator-tags">{curator.focus.slice(0, 4).map(tag => <em key={tag}>{tag}</em>)}</div></summary><div className="curator-body"><h4>从履历里能确认</h4>{curator.trackRecord.map(item => <p key={item}>◆ {item}</p>)}<h4>我怎么读他的/她的策展逻辑</h4><p>{curator.reading}</p><h4>对艺术家最现实的启发</h4><p>{curator.practical}</p><p className="caution"><b>别误读：</b>{curator.caution}</p><CuratorRelations curatorId={curator.id} /><div className="source-row">{curator.sources.map(source => <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.label} <ExternalLink size={12} /></a>)}</div></div></details>)}
      </div>
    </section>
  );
}

function FilterSection({
  title,
  items,
  selected,
  onToggle,
}: {
  title: string;
  items: string[];
  selected: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <div className="filter-section">
      <h3>{title}</h3>
      <div className="filter-options">
        {items.map(item => (
          <button
            key={item}
            onClick={() => onToggle(item)}
            className={selected.includes(item) ? 'selected' : ''}
          >
            {selected.includes(item) && <Check size={12} />}
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

function ArtistDrawer({
  artist,
  saved,
  compared,
  note,
  onClose,
  onSave,
  onCompare,
  onOpenArtist,
  onNote,
}: {
  artist: Artist;
  saved: boolean;
  compared: boolean;
  note: string;
  onClose: () => void;
  onSave: () => void;
  onCompare: () => void;
  onOpenArtist: (artist: Artist) => void;
  onNote: (value: string) => void;
}) {
  const completeTimeline = artistArchives[artist.id]?.projects;
  const biennaleSignals = getArtistBiennaleSignals(artist.id);

  return (
    <div
      className="overlay"
      onMouseDown={event => event.target === event.currentTarget && onClose()}
    >
      <article className="drawer">
        <div className="drawer-topbar">
          <span>ARTIST FILE / {artist.born}</span>
          <button onClick={onClose} aria-label="关闭">
            <X />
          </button>
        </div>
        <div className="drawer-hero">
          <div>
            <p>{artist.base}</p>
            <h2>{artist.name}</h2>
            {artist.chineseName && <span>{artist.chineseName}</span>}
          </div>
          <div className="drawer-actions">
            <button onClick={onSave} className={saved ? 'active' : ''}>
              <Bookmark size={16} fill={saved ? 'currentColor' : 'none'} />
              {saved ? '已收藏' : '收藏'}
            </button>
            <button onClick={onCompare} className={compared ? 'active' : ''}>
              <GitCompareArrows size={16} />
              {compared ? '已加入对比' : '加入对比'}
            </button>
          </div>
        </div>

        <section className="drawer-section image-section">
          <div className="section-number">01</div>
          <div>
            <p className="section-kicker">先看作品，不把图像和文字分析分开</p>
            <h3>作品图像</h3>
            <div className="image-gallery">
              {artist.images.map(item => <ArtworkFigure key={`${artist.id}-${item.title}`} item={item} />)}
            </div>
          </div>
        </section>

        {biennaleSignals.length > 0 && (
          <section className="drawer-section">
            <div className="section-number">B</div>
            <div>
              <h3>双年展参展档案</h3>
              <p className="archive-note">按具体届次与实际参展身份记录；威尼斯区分国际主展与国家馆，其他双年展按其真实策展结构记录。</p>
              <div className="participation-records">
                {biennaleSignals.map(entry => (
                  <a key={entry.id} href={entry.sourceUrl} target="_blank" rel="noreferrer">
                    <b>{entry.year} · {entry.eventName}{entry.country ? ` · ${entry.country}` : ''}</b>
                    <span>{entry.section} · {entry.title}</span>
                    <small>查看参展来源 ↗</small>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
        <CompleteArtistArchive artist={artist} />

        <section className="drawer-section practice-first">
          <div className="section-number">02</div>
          <div>
            <p className="section-kicker">再拆：他到底怎么做</p>
            <h3>创作动作 / 材料 / 输出</h3>
            <div className="taxonomy-grid">
              <Taxonomy title="方法" items={artist.methods} />
              <Taxonomy title="题材" items={artist.subjects} />
              <Taxonomy title="最终形态" items={artist.outputs} />
            </div>
          </div>
        </section>

        <section className="drawer-section">
          <div className="section-number">03</div>
          <div>
            <p className="section-kicker">沿时间看：作品如何一步步变化</p>
            <h3>作品脉络</h3>
            <div className="timeline">
              {completeTimeline ? completeTimeline.map(project => (
                <div className="timeline-item" key={`${project.period}-${project.title}`}>
                  <div className="year">{project.period}</div>
                  <div className="timeline-body">
                    <div className="project-head">
                      <h4>{project.title}</h4>
                      <span>{project.cluster}</span>
                    </div>
                    <div className="evidence-box">
                      <b>实际创作 / 研究动作</b>
                      {project.actions.map(action => <p key={action}>— {action}</p>)}
                    </div>
                    <div className="reading-box">
                      <b>这一节点发生了什么</b>
                      <p>{project.summary}</p>
                    </div>
                  </div>
                </div>
              )) : artist.projects.map(project => (
                <div className="timeline-item" key={`${project.year}-${project.title}`}>
                  <div className="year">{project.year}</div>
                  <div className="timeline-body">
                    <div className="project-head">
                      <h4>{project.title}</h4>
                      <span>{project.type}</span>
                    </div>
                    <div className="evidence-box">
                      <b>作品事实</b>
                      {project.facts.map(fact => <p key={fact}>— {fact}</p>)}
                    </div>
                    <div className="reading-box">
                      <b>研究时怎么读</b>
                      <p>{project.reading}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="drawer-section">
          <div className="section-number">04</div>
          <div>
            <p className="section-kicker">不是理论包装，而是放进坐标系</p>
            <h3>为什么重要</h3>
            <p className="long-copy">{artist.whyImportant}</p>
          </div>
        </section>

        <section className="drawer-section related-section">
          <div className="section-number">05</div>
          <div>
            <p className="section-kicker">从这一位继续往下看，不靠奖项名单跳转</p>
            <h3>Related Practices / 相关方法谱系</h3>
            <RelatedPractices artist={artist} onOpen={onOpenArtist} />
          </div>
        </section>

        <section className="drawer-section">
          <div className="section-number">06</div>
          <div>
            <p className="section-kicker">
              机构语境不是作品价值本身，但能帮助判断行业位置
            </p>
            <h3>履历 / 机构信号</h3>
            <div className="achievement-grid">
              {artist.achievements.map(item => (
                <div key={item}>◆ {item}</div>
              ))}
            </div>
            <div className="institution-tags">
              {artist.institutions.map(item => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <a
              className="source-link"
              href={artist.sourceUrl}
              target="_blank"
              rel="noreferrer"
            >
              查看主要资料来源：{artist.sourceLabel} <ExternalLink size={14} />
            </a>
          </div>
        </section>

        <section className="drawer-section notes-section">
          <div className="section-number">07</div>
          <div>
            <p className="section-kicker">你的研究层</p>
            <h3>我的判断 / 疑问 / 可借鉴方法</h3>
            <textarea
              value={note}
              onChange={event => onNote(event.target.value)}
              placeholder="例如：这个项目真正让我感兴趣的不是题材，而是它如何把家庭档案变成空间；可以和我的某个项目比较……"
            />
            <small>笔记只保存在当前浏览器。</small>
          </div>
        </section>
      </article>
    </div>
  );
}

function ArtworkThumb({ artist }: { artist: Artist }) {
  const [failed, setFailed] = useState(false);
  const item = artist.images[0];
  return (
    <button className="artist-thumb-wrap" onClick={() => undefined} tabIndex={-1} aria-hidden="true">
      {failed || !item ? <span className="artist-thumb-fallback">暂无<br />配图</span> : <img className="artist-thumb" src={item.url} alt="" loading="lazy" referrerPolicy="no-referrer" onError={() => setFailed(true)} />}
    </button>
  );
}

function ArtworkFigure({ item }: { item: Artist['images'][number] }) {
  const [failed, setFailed] = useState(false);
  return (
    <figure className="artwork-figure">
      <div className="artwork-image-frame">
        {failed ? <div className="image-fallback"><span>图片外链暂时不可用</span><a href={item.sourceUrl} target="_blank" rel="noreferrer">到来源页面查看 <ExternalLink size={13} /></a></div> : <img src={item.url} alt={item.title} loading="lazy" referrerPolicy="no-referrer" onError={() => setFailed(true)} />}
      </div>
      <figcaption><b>{item.title}</b><span>{item.credit}</span><a href={item.sourceUrl} target="_blank" rel="noreferrer">图片来源：{item.sourceLabel} <ExternalLink size={12} /></a></figcaption>
    </figure>
  );
}

type RelatedMode = 'method' | 'subject' | 'contrast';

type RelatedMatch = {
  artist: Artist;
  sharedMethods: string[];
  sharedSubjects: string[];
};

function intersection(a: string[], b: string[]) {
  return a.filter(item => b.includes(item));
}

function relatedArtists(artist: Artist, mode: RelatedMode): RelatedMatch[] {
  const candidates = artists
    .filter(candidate => candidate.id !== artist.id)
    .map(candidate => {
      const sharedMethods = intersection(artist.methods, candidate.methods);
      const sharedSubjects = intersection(artist.subjects, candidate.subjects);
      const methodScore = sharedMethods.length;
      const subjectScore = sharedSubjects.length;
      let score = 0;
      if (mode === 'method') score = methodScore * 5 + subjectScore;
      if (mode === 'subject') score = subjectScore * 5 + methodScore;
      if (mode === 'contrast') score = subjectScore * 6 - methodScore * 2;
      return { artist: candidate, sharedMethods, sharedSubjects, methodScore, subjectScore, score };
    })
    .filter(item => {
      if (mode === 'method') return item.methodScore > 0;
      if (mode === 'subject') return item.subjectScore > 0;
      return item.subjectScore > 0 && item.methodScore <= 1;
    })
    .sort((a, b) => b.score - a.score || a.artist.name.localeCompare(b.artist.name));
  return candidates.slice(0, 3);
}

function RelatedPractices({ artist, onOpen }: { artist: Artist; onOpen: (artist: Artist) => void }) {
  const groups: Array<{ mode: RelatedMode; title: string; note: string }> = [
    { mode: 'method', title: '方法相近', note: '先沿着相同制作动作继续' },
    { mode: 'subject', title: '题材相近', note: '同一问题被怎样反复处理' },
    { mode: 'contrast', title: '同题异法', note: '题材接近，但制作路径尽量不同' },
  ];
  return (
    <div className="related-grid">
      {groups.map(group => (
        <div className="related-column" key={group.mode}>
          <div className="related-column-head"><b>{group.title}</b><span>{group.note}</span></div>
          {relatedArtists(artist, group.mode).map(match => {
            const shared = group.mode === 'method' ? match.sharedMethods : match.sharedSubjects;
            return (
              <button className="related-card" key={`${group.mode}-${match.artist.id}`} onClick={() => onOpen(match.artist)}>
                <strong>{match.artist.name}</strong>
                <p>{shared.slice(0, 3).join(' · ') || match.artist.methods[0]}</p>
                <ChevronRight size={15} />
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

function Taxonomy({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <b>{title}</b>
      {items.map(item => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function ComparePanel({
  artists: items,
  onClose,
}: {
  artists: Artist[];
  onClose: () => void;
}) {
  return (
    <div className="overlay compare-overlay">
      <section className="compare-panel">
        <div className="drawer-topbar">
          <span>COMPARE / 方法横向对照</span>
          <button onClick={onClose}>
            <X />
          </button>
        </div>
        <div className="compare-scroll">
          <div className="compare-grid compare-names">
            <div className="compare-label">艺术家</div>
            {items.map(artist => (
              <div key={artist.id}>
                <h2>{artist.name}</h2>
                <p>{artist.intro}</p>
              </div>
            ))}
          </div>
          <CompareRow
            label="创作方法"
            artists={items}
            getItems={artist => artist.methods}
          />
          <CompareRow
            label="题材 / 概念"
            artists={items}
            getItems={artist => artist.subjects}
          />
          <CompareRow
            label="输出形态"
            artists={items}
            getItems={artist => artist.outputs}
          />
          <CompareRow
            label="机构 / 履历"
            artists={items}
            getItems={artist => artist.institutions}
          />
          <div className="compare-grid compare-text">
            <div className="compare-label">为什么重要</div>
            {items.map(artist => (
              <p key={artist.id}>{artist.whyImportant}</p>
            ))}
          </div>
          <div className="compare-grid compare-text">
            <div className="compare-label">代表脉络</div>
            {items.map(artist => (
              <div key={artist.id}>
                {artist.projects.map(project => (
                  <p key={project.title}>
                    <b>{project.year}</b> {project.title}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function CompareRow({
  label,
  artists: items,
  getItems,
}: {
  label: string;
  artists: Artist[];
  getItems: (artist: Artist) => string[];
}) {
  return (
    <div className="compare-grid">
      <div className="compare-label">{label}</div>
      {items.map(artist => (
        <div className="compare-tags" key={artist.id}>
          {getItems(artist).map(item => (
            <span key={item}>{item}</span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
