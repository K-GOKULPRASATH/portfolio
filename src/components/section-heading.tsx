import { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, description, action }: { eyebrow: string; title: string; description?: string; action?: ReactNode }) {
  return <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-mark">/</span> {eyebrow}</div><h1>{title}</h1>{description && <p>{description}</p>}</div>{action && <div className="section-action">{action}</div>}</div>;
}