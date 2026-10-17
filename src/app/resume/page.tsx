import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownToLine, ArrowUpRight, FileText } from "lucide-react";
import { site, skills } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume and technical summary of Gokulprasath K.",
};

export default function ResumePage() {
  return (
    <div className="page-wrap inner-page">
      <div className="eyebrow">
        <span className="eyebrow-mark">/</span> PROFESSIONAL SNAPSHOT / 01
      </div>

      <section className="resume-heading panel">
        <div>
          <span className="eyebrow">SOFTWARE ENGINEERING / EDUCATION / PRODUCT</span>
          <h1>Gokulprasath K</h1>
          <p>{site.headline}</p>
          <div className="tag-list">
            <span>{site.location}</span>
            <span>Backend engineering</span>
            <span>Developer tools</span>
            <span>DSA education</span>
          </div>
          <div className="resume-actions">
            <a className="button button-primary" href="/documents/resume.pdf" download>
              <ArrowDownToLine size={16} /> Download Resume (PDF)
            </a>
            <a className="text-link" href="https://github.com/K-GOKULPRASATH/portfolio">
              Portfolio source <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
        <FileText size={38} />
      </section>

      <section className="resume-section">
        <div className="eyebrow">TECHNICAL AREAS</div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-panel panel" key={skill.group}>
              <span className="skill-group">{skill.group}</span>
              <div>
                {skill.items.map((item) => (
                  <span className="skill-chip" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <div className="eyebrow">SELECTED WORK</div>
        <p>
          The resume highlights selected engineering projects, technical training,
          product development through AISDOP, professional experience, education,
          and achievements. Explore the project case studies for implementation
          details and current project status.
        </p>
        <Link className="text-link" href="/projects">
          Explore project case studies <ArrowUpRight size={15} />
        </Link>
      </section>

      <Link className="text-link" href="/contact">
        Contact me about an opportunity <ArrowUpRight size={15} />
      </Link>
    </div>
  );
}
