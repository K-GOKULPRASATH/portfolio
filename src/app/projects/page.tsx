import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/site";

export const metadata: Metadata = { title: "Projects", description: "Engineering case studies, developer tools, and product experiments by Gokul Prasath." };

export default function ProjectsPage() {
  return <div className="page-wrap inner-page"><SectionHeading eyebrow="PROJECT ARCHIVE / 01" title="Systems I&apos;ve explored." description="Projects are documented as engineering case studies: context, architecture, trade-offs, and current status. Prototype and planned work are labeled honestly." action={<span className="archive-count">{String(projects.length).padStart(2,"0")} PROJECTS</span>}/><div className="project-grid">{projects.map((project,index)=><ProjectCard key={project.slug} project={project} index={index}/>)}</div><div className="note-panel"><ArrowUpRight size={16}/><p>Keep implementation status, personal contribution, and repository links current. Add verified screenshots and demo links as projects evolve.</p></div></div>;
}