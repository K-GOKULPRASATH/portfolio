import type { Metadata } from "next";
import { ArrowUpRight, BookOpen, Code2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = { title: "Writing", description: "Technical notes and learning material by Gokul Prasath." };
const topics = [
 ["DSA / 01","From brute force to a better algorithm","Understand constraints, start with the simplest correct approach, measure complexity, then optimize."],
 ["SYSTEMS / 02","Designing a code execution boundary","Isolation, resource limits, queues, timeouts, and observable execution states."],
 ["ENGINEERING / 03","Choosing a modular architecture","Draw domain boundaries without prematurely splitting everything into microservices."]
];
export default function WritingPage(){return <div className="page-wrap inner-page"><div className="eyebrow"><span className="eyebrow-mark">/</span> FIELD NOTES / 01</div><section className="service-hero"><h1>Write to <span className="text-accent">understand.</span></h1><p>Notes on algorithms, backend engineering, architecture, and explaining technical ideas clearly.</p></section><div className="writing-list">{topics.map(([category,title,description],index)=><article className="writing-card panel" key={title}><span className="writing-index">0{index+1}</span><div><div className="eyebrow">{category}</div><h2>{title}</h2><p>{description}</p><span className="writing-status">TOPIC / DRAFT IDEA</span></div><BookOpen size={20}/></article>)}</div><div className="note-panel"><Code2 size={16}/><p>These are article concepts, not published articles. Replace each with finished notes before presenting them as published writing.</p></div><Link href="/contact" className="text-link">Suggest a topic <ArrowUpRight size={15}/></Link></div>}