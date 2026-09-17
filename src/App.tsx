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
const emptyFilters: SelectedFilters = { methods: [], subjects: [], outputs: [], institutions: [] };

function loadStoredArray(key: string) { try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) as string[] : []; } catch { return []; } }

function App() {
  const [query, setQuery] = useState('');
  const [showSaved, setShowSaved] = useState(false);
  const [filters, setFilters] = useState<SelectedFilters>(emptyFilters);
  const [activeArtist, setActiveArtist] = useState<Artist | null>(null);
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [showCompare, setShowCompare] = useState(false);
  const [savedIds, setSavedIds] = useState<string[]>(() => loadStoredArray('practice-index-saved'));
  const [notes, setNotes] = useState<Record<string,string>>(() => { try { const raw=localStorage.getItem('practice-index-notes'); return raw ? JSON.parse(raw) : {}; } catch { return {}; } });
  const [mobileFiltersOpen,setMobileFiltersOpen]=useState(false);
  const [circuitFilters,setCircuitFilters]=useState<string[]>([]);
  const [biennaleSelection,setBiennaleSelection]=useState<string|null>(null);
  const [directoryArtistIds,setDirectoryArtistIds]=useState<string[]|null>(null);
  const [domainScope,setDomainScope]=useState<'art'|'photo'|null>(null);
  const [page,setPage]=useState(()=>window.location.hash.replace('#','')||'artists');
  useEffect(()=>{const sync=()=>setPage(window.location.hash.replace('#','')||'artists');window.addEventListener('hashchange',sync);return()=>window.removeEventListener('hashchange',sync)},[]);
  const domainArtists=useMemo(()=>{if(!domainScope)return artists;return artists.filter(artist=>{const circuits=getArtistCircuits(artist.id).map(normalizeSearch);const fields=getArtistFieldTags(artist,getArtistCircuits(artist.id)).map(normalizeSearch);const text=normalizeSearch([artist.intro,...artist.methods,...artist.subjects,...artist.outputs,...artist.institutions,...artist.achievements,...circuits,...fields].join(' '));const sig=['photography','photograph','摄影','photo','foam','pictet','deutsche börse','aperture','lensculture','rencontres','images vevey','phmuseum','world press photo','sony world photography','icp infinity'];const isPhoto=sig.some(s=>text.includes(normalizeSearch(s)));return domainScope==='photo'?isPhoto:!isPhoto||text.includes('contemporary art')||text.includes('当代艺术')||getArtistBiennaleSignals(artist.id).length>0})},[domainScope]);
  const scopedFilterGroups=useMemo(()=>({methods:Array.from(new Set(domainArtists.flatMap(a=>a.methods))).sort(),subjects:Array.from(new Set(domainArtists.flatMap(a=>a.subjects))).sort(),outputs:Array.from(new Set(domainArtists.flatMap(a=>a.outputs))).sort(),institutions:Array.from(new Set(domainArtists.flatMap(a=>a.institutions))).sort()}),[domainArtists]);
  const scopedCircuitCategories=useMemo(()=>circuitCategories.filter(c=>domainArtists.some(a=>getArtistCircuits(a.id).includes(c.label))),[domainArtists]);
  useEffect(()=>localStorage.setItem('practice-index-saved',JSON.stringify(savedIds)),[savedIds]); useEffect(()=>localStorage.setItem('practice-index-notes',JSON.stringify(notes)),[notes]);
  const filteredArtists=useMemo(()=>{const q=normalizeSearch(query.trim());const biennaleArtistIds=getBiennaleSelectionArtistIds(biennaleSelection);const domainIds=new Set(domainArtists.map(a=>a.id));return artists.filter(artist=>{if(!domainIds.has(artist.id))return false;if(showSaved&&!savedIds.includes(artist.id))return false;if(directoryArtistIds&&!directoryArtistIds.includes(artist.id))return false;const hay=[artist.name,artist.chineseName??'',artist.intro,...artist.methods,...artist.subjects,...artist.outputs,...artist.institutions,...artist.achievements,...getArtistCircuits(artist.id),...getArtistFieldTags(artist,getArtistCircuits(artist.id)),...artist.projects.flatMap(p=>[p.title,p.type]),...(artistArchives[artist.id]?.projects??[]).flatMap(p=>[p.title,p.summary,...p.actions,...p.relations.map(r=>r.label)]),...getArtistBiennaleSignals(artist.id).flatMap(e=>[e.eventName,e.year,e.section,e.country??'',e.title])].join(' ').toLowerCase();if(q&&!normalizeSearch(hay).includes(q))return false;if(biennaleArtistIds&&!biennaleArtistIds.includes(artist.id))return false;if(circuitFilters.length&&!circuitFilters.every(v=>getArtistCircuits(artist.id).includes(v)))return false;return (Object.keys(filters) as FilterKey[]).every(k=>!filters[k].length||filters[k].every(v=>artist[k].includes(v)))})},[query,filters,circuitFilters,biennaleSelection,directoryArtistIds,domainArtists,showSaved,savedIds]);
  const activeFilterCount=Object.values(filters).flat().length+circuitFilters.length+Number(Boolean(biennaleSelection));const comparedArtists=compareIds.map(id=>artists.find(a=>a.id===id)).filter(Boolean) as Artist[];
  const toggleFilter=(key:FilterKey,value:string)=>setFilters(c=>({...c,[key]:c[key].includes(value)?c[key].filter(i=>i!==value):[...c[key],value]}));const toggleSaved=(id:string)=>setSavedIds(c=>c.includes(id)?c.filter(i=>i!==id):[...c,id]);const toggleCompare=(id:string)=>setCompareIds(c=>c.includes(id)?c.filter(i=>i!==id):c.length>=3?c:[...c,id]);
  const resetFilters=()=>{setFilters(emptyFilters);setCircuitFilters([]);setBiennaleSelection(null);setDirectoryArtistIds(null);setDomainScope(null);setQuery('');setShowSaved(false)};const toggleCircuitFilter=(v:string)=>setCircuitFilters(c=>c.includes(v)?c.filter(i=>i!==v):[...c,v]);
  return <div className="app-shell"><header className="site-header"><a className="brand" href="#artists"><span className="brand-mark">PI</span><span><strong>Practice Index</strong><small>当代摄影与艺术研究索引</small></span></a><nav className="research-nav"><a href="#artists">艺术家</a><a href="#fields">领域目录</a><a href="#lineages">创作脉络</a><a href="#trends">趋势雷达</a><a href="#curators">策展人</a><a href="#ecosystem">机构 / 奖项</a></nav><div className="header-meta"><span>{artists.length} 位艺术家 · 趋势数据更新至 2026.09</span><button className="saved-pill" onClick={()=>{resetFilters();setShowSaved(!showSaved)}}><Bookmark size={15}/>{showSaved?'返回全部':'已收藏'} {savedIds.length}</button></div></header>
  {page==='artists'&&<main id="artists" className="research-page"><section className="hero"><div><p className="eyebrow">不是按“风格”找图，而是按作品如何发生来研究</p><h1>从创作动作出发，<br/>建立你的当代艺术坐标。</h1></div><p className="hero-copy">先从当代艺术或当代摄影进入出版、展览与奖项目录；查找艺术家时，再用创作方法、题材和媒介交叉筛选。</p></section><section className="search-row"><label className="search-box"><Search size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="搜艺术家、项目、方法、概念、机构…"/>{query&&<button onClick={()=>setQuery('')}><X size={16}/></button>}</label><button className="mobile-filter-button" onClick={()=>setMobileFiltersOpen(true)}><SlidersHorizontal size={17}/> 筛选 {activeFilterCount>0&&<b>{activeFilterCount}</b>}</button></section>
  <FieldDirectory onOpenArtist={setActiveArtist} biennaleSelection={biennaleSelection} onBiennaleSelect={s=>{setDirectoryArtistIds(null);setBiennaleSelection(s);if(s){setQuery('');setFilters(emptyFilters);setCircuitFilters([]);setShowSaved(false)}}} onDirectoryArtistsSelect={ids=>{setBiennaleSelection(null);setDirectoryArtistIds(ids);setQuery('');setFilters(emptyFilters);setCircuitFilters([]);setShowSaved(false)}} onDomainSelect={scope=>{setDomainScope(scope);setDirectoryArtistIds(null);setBiennaleSelection(null);setQuery('');setFilters(emptyFilters);setCircuitFilters([]);setShowSaved(false)}}/><div className="content-grid"><aside className={`filters ${mobileFiltersOpen?'is-open':''}`}><div className="filter-title-row"><span><Filter size={15}/> 多维筛选</span>{activeFilterCount>0&&<button onClick={resetFilters}>全部清除</button>}</div><FilterSection title="创作方法 / Practice" items={scopedFilterGroups.methods} selected={filters.methods} onToggle={v=>toggleFilter('methods',v)}/><FilterSection title="题材 / 议题 / Subjects" items={scopedFilterGroups.subjects} selected={filters.subjects} onToggle={v=>toggleFilter('subjects',v)}/><FilterSection title="媒介 / 输出形式 / Media" items={scopedFilterGroups.outputs} selected={filters.outputs} onToggle={v=>toggleFilter('outputs',v)}/><FilterSection title="机构 / 履历" items={scopedFilterGroups.institutions} selected={filters.institutions} onToggle={v=>toggleFilter('institutions',v)}/><FilterSection title="奖项 / 馆藏 / 双年展" items={scopedCircuitCategories.map(c=>c.label)} selected={circuitFilters} onToggle={toggleCircuitFilter}/></aside><section className="results"><div className="results-head"><div><span>{domainScope==='photo'?'当代摄影 · ARTISTS':domainScope==='art'?'当代艺术 · ARTISTS':'ARTISTS'}</span><strong>{filteredArtists.length}</strong></div></div><div className="artist-list">{filteredArtists.map((artist,index)=><article className="artist-card" key={artist.id}><div className="card-index">{String(index+1).padStart(2,'0')}</div><ArtworkThumb artist={artist}/><div className="artist-main" onClick={()=>setActiveArtist(artist)}><div className="artist-name-row"><div><h2>{artist.name}</h2>{artist.chineseName&&<span>{artist.chineseName}</span>}</div><ChevronRight/></div><p className="artist-intro">{artist.intro}</p><div className="tag-row">{artist.methods.slice(0,4).map(t=><span className="tag method" key={t}>{t}</span>)}</div></div><div className="card-actions"><button className="icon-button" onClick={()=>toggleSaved(artist.id)}><Bookmark size={17}/></button><button className="compare-button" onClick={()=>toggleCompare(artist.id)}><GitCompareArrows size={15}/> 对比</button></div></article>)}</div></section></div></main>}
  {page==='fields'&&<main className="research-page standalone-page"><FieldDirectory onOpenArtist={setActiveArtist} biennaleSelection={biennaleSelection} onBiennaleSelect={setBiennaleSelection} onDirectoryArtistsSelect={setDirectoryArtistIds} onDomainSelect={setDomainScope}/></main>}{page==='lineages'&&<main className="research-page standalone-page"><PracticeLineages onOpenArtist={setActiveArtist}/></main>}{page==='trends'&&<main className="research-page standalone-page"><TrendDashboard/></main>}{page==='curators'&&<main className="research-page standalone-page"><CuratorDashboard/></main>}{page==='ecosystem'&&<main className="research-page standalone-page"><EcosystemDashboard/></main>}
  {activeArtist&&<ArtistDrawer artist={activeArtist} saved={savedIds.includes(activeArtist.id)} compared={compareIds.includes(activeArtist.id)} note={notes[activeArtist.id]??''} onClose={()=>setActiveArtist(null)} onSave={()=>toggleSaved(activeArtist.id)} onCompare={()=>toggleCompare(activeArtist.id)} onOpenArtist={setActiveArtist} onNote={v=>setNotes(c=>({...c,[activeArtist.id]:v}))}/>} {showCompare&&<ComparePanel artists={comparedArtists} onClose={()=>setShowCompare(false)}/>}</div>;
}
function TrendDashboard(){return <section className="intelligence-shell"><div className="intelligence-hero"><h2>趋势雷达</h2></div>{macroTrends.map(i=><article className="macro-card" key={i.title}><h3>{i.title}</h3><p>{i.evidence}</p></article>)}</section>}
function CuratorDashboard(){return <section className="intelligence-shell"><div className="intelligence-hero"><h2>策展人地图</h2></div><CuratorNetworkMap/>{curatorProfiles.map(c=><article className="curator-card" key={c.id}><h3>{c.name}</h3><p>{c.role}</p><CuratorRelations curatorId={c.id}/></article>)}</section>}
function FilterSection({title,items,selected,onToggle}:{title:string;items:string[];selected:string[];onToggle:(v:string)=>void}){return <div className="filter-section"><h3>{title}</h3><div className="filter-options">{items.map(i=><button key={i} onClick={()=>onToggle(i)} className={selected.includes(i)?'selected':''}>{selected.includes(i)&&<Check size={12}/>} {i}</button>)}</div></div>}
function ArtworkThumb({artist}:{artist:Artist}){const [failed,setFailed]=useState(false);const item=artist.images[0];return <button className="artist-thumb-wrap">{failed||!item?<span>暂无配图</span>:<img className="artist-thumb" src={item.url} alt="" onError={()=>setFailed(true)}/>}</button>}
function ArtistDrawer({artist,onClose}:{artist:Artist; saved:boolean; compared:boolean; note:string; onClose:()=>void; onSave:()=>void; onCompare:()=>void; onOpenArtist:(a:Artist)=>void; onNote:(v:string)=>void}){return <div className="overlay"><article className="drawer"><div className="drawer-topbar"><span>ARTIST FILE / {artist.born}</span><button onClick={onClose}><X/></button></div><div className="drawer-hero"><h2>{artist.name}</h2></div><CompleteArtistArchive artist={artist}/></article></div>}
function ComparePanel({artists:items,onClose}:{artists:Artist[];onClose:()=>void}){return <div className="overlay compare-overlay"><section className="compare-panel"><button onClick={onClose}><X/></button>{items.map(a=><div key={a.id}><h2>{a.name}</h2><p>{a.intro}</p></div>)}</section></div>}
export default App;
