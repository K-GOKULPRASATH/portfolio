import Link from "next/link";
import { ArrowUpRight, GitBranch, Layers3 } from "lucide-react";
import { projects } from "@/lib/site";

export function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return <article className="project-card panel"><div className="project-card-top"><span className="project-index">0{index+1} / WORKSPACE</span><span className="project-state"><span className="status-dot"/> {project.status}</span></div>
    <div className="project-art" aria-hidden="true"><div className="art-grid"/><div className={`art-node art-node-${index+1}`}><Layers3 size={27} strokeWidth={1.3}/></div><div className="art-code"><span>const</span> system = <b>&quot;{project.slug}&quot;</b>;<br/><span>return</span> <i>build()</i>;</div><div className="art-connection connection-one"/><div className="art-connection connection-two"/></div>
    <div className="project-card-body"><div className="eyebrow">{project.eyebrow}</div><h2><Link href={`/projects/${project.slug}`}>{project.name} <ArrowUpRight size={18}/></Link></h2><p>{project.summary}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-card-bottom"><span><GitBranch size={13}/> Case study</span><Link href={`/projects/${project.slug}`}>Inspect build <ArrowUpRight size={14}/></Link></div></div>
  </article>;
}