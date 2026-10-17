import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, GitBranch, Layers3 } from "lucide-react";
import { projects } from "@/lib/site";

export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  return project ? { title: project.name, description: project.summary } : {};
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) notFound();
  return <div className="page-wrap inner-page detail-page"><Link href="/projects" className="back-link"><ArrowLeft size={14}/> Back to projects</Link>
    <div className="detail-hero panel"><div className="detail-hero-copy"><div className="eyebrow"><span className="eyebrow-mark">/</span> {project.eyebrow}</div><span className="project-state"><span className="status-dot"/> {project.status}</span><h1>{project.name}</h1><p>{project.summary}</p><div className="tag-list">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div><div className="detail-links">{project.github && <a className="button button-secondary" href={project.github} target="_blank" rel="noreferrer"><GitBranch size={15}/> Repository <ArrowUpRight size={14}/></a>}</div></div><div className="detail-visual" aria-hidden="true"><div className="detail-visual-ring ring-a"/><div className="detail-visual-ring ring-b"/><div className="detail-visual-core"><Layers3 size={38}/></div><span>PROJECT / {project.slug.toUpperCase()}</span></div></div>
    <div className="detail-content-grid"><section className="detail-section panel"><div className="eyebrow">01 / CONTEXT</div><h2>The problem</h2><p>{project.problem}</p></section><section className="detail-section panel"><div className="eyebrow">02 / DIRECTION</div><h2>The approach</h2><p>{project.solution}</p></section>
      <section className="detail-section panel detail-wide"><div className="eyebrow">03 / SYSTEM MAP</div><h2>Architecture at a glance</h2><div className="architecture-list">{project.architecture.map((item,index)=><div key={item}><span>{String(index+1).padStart(2,"0")}</span><span>{item}</span><i/></div>)}</div></section>
      <section className="detail-section panel detail-wide"><div className="eyebrow">04 / ENGINEERING NOTES</div><h2>What this explores</h2><div className="highlight-list">{project.highlights.map(item=><div key={item}><CheckCircle2 size={16}/><span>{item}</span></div>)}</div><p className="small-note">Replace or supplement this summary with verified implementation details, testing evidence, screenshots, and your personal contributions before presenting the work as production-complete.</p></section>
    </div>
  </div>;
}