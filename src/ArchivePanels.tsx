import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import type { Artist } from './data';
import { artistArchives, type ArchiveImage } from './archiveData';
import { archiveBatch28 } from './archiveBatch28';
import { archiveBatch29 } from './archiveBatch29';
import { archiveBatch30 } from './archiveBatch30';
import { archiveBatch31 } from './archiveBatch31';
import { archiveBatch32 } from './archiveBatch32';
import { archiveBatch33 } from './archiveBatch33';
import { archiveBatch34 } from './archiveBatch34';
import { awards, curatorNetworks, institutions } from './ecosystemData';
import { InstitutionHierarchy } from './ResearchMaps';

function ArchiveImageFigure({ image }: { image: ArchiveImage }) {
  const [failed, setFailed] = useState(false);
  return (
    <figure className="archive-image">
      <div className="archive-image-frame">
        {failed ? (
          <div className="archive-image-fallback"><span>图像外链暂时不可用</span><a href={image.sourceUrl} target="_blank" rel="noreferrer">到来源查看 <ExternalLink size={12} /></a></div>
        ) : (
          <img src={image.url} alt={image.title} loading="lazy" referrerPolicy="no-referrer" onError={() => setFailed(true)} />
        )}
      </div>
      <figcaption><b>{image.title}</b><span>{image.credit}</span><a href={image.sourceUrl} target="_blank" rel="noreferrer">{image.sourceLabel} <ExternalLink size={11} /></a></figcaption>
    </figure>
  );
}

export function CompleteArtistArchive({ artist }: { artist: Artist }) {
  const deepArchive = archiveBatch34[artist.id] ?? archiveBatch33[artist.id] ?? archiveBatch32[artist.id] ?? archiveBatch31[artist.id] ?? archiveBatch30[artist.id] ?? archiveBatch29[artist.id] ?? archiveBatch28[artist.id] ?? artistArchives[artist.id];
  const archive = deepArchive ?? {
    artistId: artist.id,
    projectCoverage: `${artist.projects.length} 个第一轮项目索引 · 待继续补全`,
    imageCoverage: `${artist.images.length > 0 ? 1 : 0} / ${artist.projects.length} 项目已有基础图像`,
    note: '这位艺术家尚未完成深度档案。当前先保留已核对的项目骨架、作品事实和主要来源；后续继续补项目全集、多张作品图、出版与展览关系。这里明确标注“第一轮”，不把简版冒充全集。',
    projects: artist.projects.map((project, index) => ({ title: project.title, cluster: project.type, period: project.year, summary: project.facts.join(' '), actions: project.facts, sourceUrl: artist.sourceUrl, images: index === 0 ? artist.images : [], relations: [] })),
    awards: artist.achievements,
    exhibitions: [],
    sources: [{ label: artist.sourceLabel, url: artist.sourceUrl }],
  };
  return (
    <section className="drawer-section complete-archive-section">
      <div className="section-number">01A</div><div>
        <p className="section-kicker">不是一张代表图，而是逐项目建立作品档案</p><h3>项目档案 / Complete Work Index</h3>
        <div className="archive-progress"><div><span>项目目录</span><strong>{archive.projectCoverage}</strong></div><div><span>图像归档</span><strong>{archive.imageCoverage}</strong></div></div>
        <p className="archive-note">{archive.note}</p>
        <div className="archive-projects">{archive.projects.map((project, index) => (
          <details className="archive-project" key={project.title} open={index === 0}><summary><div><span>{String(index + 1).padStart(2, '0')} · {project.cluster} · {project.period}</span><h4>{project.title}</h4></div><div className="archive-project-status"><b>{project.images.length > 0 ? `${project.images.length} 张已入库` : '图像待补'}</b><span>展开 +</span></div></summary>
          <div className="archive-project-body"><p className="archive-summary">{project.summary}</p><div className="archive-actions"><b>实际创作 / 研究动作</b>{project.actions.map(action => <span key={action}>{action}</span>)}</div>{project.images.length > 0 && <div className="archive-gallery">{project.images.map(image => <ArchiveImageFigure image={image} key={`${project.title}-${image.title}`} />)}</div>}{project.relations.length > 0 && <div className="archive-relations"><b>展览 / 出版 / 奖项关系</b>{project.relations.map(item => <p key={`${item.kind}-${item.label}`}><em>{item.kind}</em><strong>{item.label}</strong>{item.detail && <span>{item.detail}</span>}</p>)}</div>}<a className="archive-source" href={project.sourceUrl} target="_blank" rel="noreferrer">查看作品 / 机构来源 <ExternalLink size={12} /></a></div></details>))}</div>
        <div className="archive-overview-grid"><div><h4>奖项 / 提名时间线</h4>{archive.awards.length === 0 && <p>此档案暂未补入已核对的奖项记录。</p>}{archive.awards.map(item => <p key={item}>◆ {item}</p>)}</div><div><h4>重要展览节点</h4>{archive.exhibitions.length === 0 && <p>请先查看逐项目来源中的作品与馆藏记录。</p>}{archive.exhibitions.map(item => <p key={item}>— {item}</p>)}</div></div>
        <div className="source-row">{archive.sources.map(source => <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.label} <ExternalLink size={12} /></a>)}</div>
      </div>
    </section>
  );
}

export function CuratorRelations({ curatorId }: { curatorId: string }) {
  const network = curatorNetworks[curatorId]; if (!network) return null;
  return <div className="curator-network"><h4>具体关系网：机构 → 展览 → 艺术家</h4><p className="curator-network-institution">{network.institution}</p><div className="curator-role-row">{network.roles.map(role => <span key={role}>{role}</span>)}</div><div className="curator-exhibitions">{network.exhibitions.map(exhibition => <div key={`${exhibition.year}-${exhibition.title}`}><b>{exhibition.year}</b><strong>{exhibition.title}</strong><p>{exhibition.artists.join(' · ')}</p></div>)}</div><div className="source-row">{network.sources.map(source => <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.label} <ExternalLink size={11} /></a>)}</div></div>;
}

export function EcosystemDashboard() {
  return <section className="intelligence-shell ecosystem-shell" id="ecosystem"><div className="intelligence-hero"><div><p className="eyebrow">ART-WORLD ECOSYSTEM</p><h2>机构 / 奖项生态</h2></div><p>这里不把“MoMA 馆藏”“Turner Prize”“摄影奖”混成同一种成就。我们分别看：机构是什么、怎么形成可见度、奖项如何产生、和哪些策展人 / 展览连接，以及一个艺术家通常怎样从较小节点走向更大的艺术圈。</p></div><div className="ecosystem-subhead"><span>FIELD × TYPE × TIER</span><strong>先知道一个机构处在什么层级</strong></div><InstitutionHierarchy /><div className="ecosystem-subhead"><span>DEEP PROFILES</span><strong>再看具体机构怎么运转</strong></div><div className="institution-grid">{institutions.map(item => <details className="institution-card" key={item.id}><summary><span>{item.type} · {item.geography}</span><h3>{item.name}</h3><p>{item.scale}</p></summary><div className="institution-body"><p className="ecosystem-lead">{item.whyItMatters}</p><h4>真实信号</h4>{item.signals.map(signal => <p key={signal}>◆ {signal}</p>)}<h4>相关策展人 / 人物</h4><div className="ecosystem-tags">{item.people.map(person => <span key={person}>{person}</span>)}</div><h4>相关展览 / 项目</h4>{item.exhibitions.map(exhibition => <p key={exhibition}>— {exhibition}</p>)}{item.connectedAwards.length > 0 && <><h4>直接相连的奖项</h4><div className="ecosystem-tags">{item.connectedAwards.map(award => <span key={award}>{award}</span>)}</div></>}<div className="source-row">{item.sources.map(source => <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.label} <ExternalLink size={11} /></a>)}</div></div></details>)}</div><div className="ecosystem-subhead"><span>MAJOR PRIZES</span><strong>摄影圈之外也要看</strong></div><div className="award-grid">{awards.map(item => <details className="award-card" key={item.id}><summary><span>{item.field}</span><h3>{item.name}</h3><p>{item.linkedInstitution}</p></summary><div className="award-body"><h4>怎么产生</h4><p>{item.selectionMode}</p><h4>它真正说明什么</h4><p>{item.whatItSignals}</p><h4>近年硬信号</h4>{item.recentEvidence.map(signal => <p key={signal}>◆ {signal}</p>)}<div className="reality-box award-reality"><h4>现实情况</h4>{item.reality.map(signal => <p key={signal}>! {signal}</p>)}</div><div className="source-row">{item.sources.map(source => <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.label} <ExternalLink size={11} /></a>)}</div></div></details>)}</div></section>;
}