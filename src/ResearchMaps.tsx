import { useMemo, useState } from 'react';
import { curatorProfiles } from './trendsData';
import {
  curatorGraphEdges,
  curatorGraphNodes,
  curatorVisualRecords,
  fieldCategories,
  institutionHierarchy,
  type FieldId,
  type InstitutionTier,
} from './taxonomyData';

const tierLabels: Record<InstitutionTier, string> = {
  1: 'Tier 1 · 全球核心节点',
  2: 'Tier 2 · 国际重要节点',
  3: 'Tier 3 · 专门 / 区域 / 职业入口',
};

export function CuratorNetworkMap() {
  const [selectedCurator, setSelectedCurator] = useState<string | null>('roxana-marcoci');
  const selectedProfile = curatorProfiles.find(item => item.id === selectedCurator) ?? null;
  const selectedRecord = selectedCurator ? curatorVisualRecords[selectedCurator] : null;

  const connectedIds = useMemo(() => {
    if (!selectedCurator) return new Set(curatorGraphNodes.map(node => node.id));
    const set = new Set<string>([selectedCurator]);
    curatorGraphEdges.forEach(edge => {
      if (edge.from === selectedCurator) set.add(edge.to);
      if (edge.to === selectedCurator) set.add(edge.from);
    });
    return set;
  }, [selectedCurator]);

  const sharedRelations = selectedCurator
    ? curatorGraphEdges.filter(edge => edge.kind === 'shared' && (edge.from === selectedCurator || edge.to === selectedCurator))
    : curatorGraphEdges.filter(edge => edge.kind === 'shared');

  return (
    <div className="curator-map-block">
      <div className="curator-map-head">
        <div><span>RELATIONSHIP MAP</span><h3>策展人 × 机构关系图</h3></div>
        <p>实线＝可确认的任职 / 策展机构关系；虚线＝共享的策展生态或研究交叉，不代表私人关系。点击名字只看一条路径。</p>
      </div>
      <div className="curator-selector" aria-label="选择策展人">
        <button className={selectedCurator === null ? 'active' : ''} onClick={() => setSelectedCurator(null)}>全部关系</button>
        {curatorProfiles.map(curator => <button key={curator.id} className={selectedCurator === curator.id ? 'active' : ''} onClick={() => setSelectedCurator(curator.id)}>{curator.name}</button>)}
      </div>
      <div className="curator-map-scroll" aria-label="策展人和机构网络图">
        <svg className="curator-map-svg" viewBox="0 0 760 700" role="img" aria-label="策展人与机构之间的关系网络">
          <text x="35" y="26" className="map-column-label">CURATORS</text><text x="540" y="26" className="map-column-label">INSTITUTIONS</text>
          {curatorGraphEdges.map((edge, index) => { const from=curatorGraphNodes.find(node=>node.id===edge.from); const to=curatorGraphNodes.find(node=>node.id===edge.to); if(!from||!to)return null; const active=!selectedCurator||edge.from===selectedCurator||edge.to===selectedCurator; return <line key={`${edge.from}-${edge.to}-${index}`} x1={from.x+(from.type==='curator'?88:0)} y1={from.y} x2={to.x-(to.type==='institution'?88:0)} y2={to.y} className={`map-edge ${edge.kind} ${active?'active':'dim'}`}/>; })}
          {curatorGraphNodes.map(node => { const connected=connectedIds.has(node.id); const selected=node.id===selectedCurator; const width=176; const x=node.x-width/2; return <g key={node.id} className={`map-node ${node.type} ${connected?'connected':'dim'} ${selected?'selected':''}`}><rect x={x} y={node.y-20} width={width} height="40" rx="8"/><text x={node.x} y={node.y+4} textAnchor="middle">{node.shortLabel}</text></g>; })}
        </svg>
      </div>
      <div className="curator-map-detail" aria-live="polite">
        {selectedProfile && selectedRecord ? <><div className="curator-map-summary"><span>{selectedProfile.geography}</span><h4>{selectedProfile.name}</h4><p>{selectedProfile.role}</p><div className="curator-map-institutions">{selectedRecord.institutions.map(item=><b key={item}>{item}</b>)}</div></div><div className="curator-map-exhibitions"><span>展览 / 项目节点</span>{selectedRecord.exhibitions.map(item=><div key={`${item.year}-${item.title}`}><b>{item.year}</b><strong>{item.title}</strong><p>{item.context}</p></div>)}</div><div className="curator-map-shared"><span>与其他策展人的研究交叉</span>{sharedRelations.length>0?sharedRelations.map(edge=>{const otherId=edge.from===selectedCurator?edge.to:edge.from;const other=curatorProfiles.find(item=>item.id===otherId);return <p key={`${edge.from}-${edge.to}`}><b>{other?.name??otherId}</b><em>{edge.label}</em></p>}):<p className="muted">当前数据里还没有明确的共享节点；不把“同领域”自动写成私人关系。</p>}</div></> : <div className="curator-map-allnote"><strong>{curatorProfiles.length} 位策展人 · {curatorGraphEdges.filter(edge=>edge.kind==='direct').length} 条机构关系 · {curatorGraphEdges.filter(edge=>edge.kind==='shared').length} 条研究交叉</strong><p>选择一位策展人后，图上只会强调与他 / 她直接相连的机构和共享策展生态；下方同时显示具体展览节点。</p></div>}
      </div>
    </div>
  );
}

export function InstitutionHierarchy() {
  const [field, setField] = useState<FieldId | 'all'>('all');
  const visible = institutionHierarchy.filter(item => field === 'all' || item.field === field);
  return <div className="institution-hierarchy"><div className="field-taxonomy-grid">{fieldCategories.map(category=><button key={category.id} className={field===category.id?'active':''} onClick={()=>setField(current=>current===category.id?'all':category.id)}><span>一级领域</span><strong>{category.shortLabel}</strong><p>{category.description}</p><div>{category.secondary.map(item=><em key={item}>{item}</em>)}</div></button>)}</div><div className="tier-explainer"><strong>机构层级怎么读</strong><p>Tier 不是“艺术价值排名”。它只表示这个节点在国际职业路径中的覆盖范围、制度权力和可见度强度：Tier 1 是全球核心节点；Tier 2 是国际重要但更专业 / 区域化的节点；Tier 3 更像职业入口、媒体或专门平台。</p></div><div className="tier-columns">{([1,2,3] as InstitutionTier[]).map(tier=><section key={tier} className={`tier-column tier-${tier}`}><header><span>{tierLabels[tier]}</span><b>{visible.filter(item=>item.tier===tier).length}</b></header><div>{visible.filter(item=>item.tier===tier).map(item=>{const fieldInfo=fieldCategories.find(category=>category.id===item.field);return <article key={item.id}><span>{fieldInfo?.shortLabel} · {item.secondaryType}</span><h4>{item.name}</h4><small>{item.geography}</small><p>{item.note}</p></article>})}</div></section>)}</div></div>;
}
