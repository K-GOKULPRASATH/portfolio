"use client";

import { FormEvent, useMemo, useRef, useState } from "react";
import { ArrowUpRight, CornerDownLeft, Terminal as TerminalIcon } from "lucide-react";
import { projects, site } from "@/lib/site";

type Entry = { command: string; output: string[] };
const commands = ["help", "about", "projects", "experience", "aisdop", "services", "contact", "clear"];

function runCommand(input: string): string[] {
  switch (input.trim().toLowerCase()) {
    case "help": return ["Available commands:", "  about       — inspect the engineer behind the lab", "  projects    — list featured builds", "  experience  — explore engineering + teaching", "  aisdop      — open the founder track", "  services    — see collaboration paths", "  contact     — start a conversation", "  clear       — clear terminal history"];
    case "about": return [site.name, site.role, "", site.headline];
    case "projects": return projects.flatMap((p, i) => [`${String(i+1).padStart(2,"0")}  ${p.name}`, `    ${p.summary}`]);
    case "experience": return ["TRACK: SOFTWARE ENGINEERING", "FOCUS: backend systems, APIs, architecture, developer tools", "", "TRACK: EDUCATION", "FOCUS: DSA and student problem-solving", "Open /experience for the longer story."];
    case "aisdop": return ["AISDOP / AI Software Development Orchestration Platform", "Founder-led product direction: coordinate software delivery workflows.", "Route: /aisdop"];
    case "services": return ["Backend and API development", "Technical prototypes and developer tools", "DSA learning materials and visualizations", "Route: /services"];
    case "contact": return [`Email: ${site.email}`, "Route: /contact"];
    case "": return [];
    default: return [`Command not found: ${input}`, "Type `help` to see supported commands."];
  }
}

export function TerminalLab() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Entry[]>([{ command: "boot", output: ["GOKUL.DEV // interactive portfolio shell", "Environment ready. Type `help` to explore the workspace."] }]);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestions = useMemo(() => input.trim() ? commands.filter(c => c.startsWith(input.trim().toLowerCase())) : [], [input]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const command = input.trim();
    if (!command) return;
    if (command.toLowerCase() === "clear") { setHistory([]); setInput(""); return; }
    setHistory(items => [...items, { command, output: runCommand(command) }]);
    setInput("");
  }

  return <section className="terminal-shell panel" aria-label="Interactive portfolio terminal">
    <div className="terminal-topbar"><div className="window-controls" aria-hidden="true"><i/><i/><i/></div><div className="terminal-title"><TerminalIcon size={14}/> gokul@developer-lab:~</div><span className="live-status"><span className="status-dot"/> interactive</span></div>
    <div className="terminal-content" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-motd"><span className="muted">Last login:</span> portfolio session<br/><span className="green">Build with intent. Ship with evidence.</span></div>
      {history.map((entry, index) => <div className="terminal-entry" key={`${entry.command}-${index}`}>{entry.command !== "boot" && <div className="terminal-command"><span className="prompt">gokul@lab</span><span className="path">:~$</span> {entry.command}</div>}{entry.output.map((line, lineIndex) => <div className={line.startsWith("Command not found") ? "terminal-line error" : "terminal-line"} key={`${line}-${lineIndex}`}>{line || "\u00a0"}</div>)}</div>)}
      <form onSubmit={submit} className="terminal-input-row"><label htmlFor="terminal-command"><span className="prompt">gokul@lab</span><span className="path">:~$</span></label><input id="terminal-command" ref={inputRef} autoComplete="off" spellCheck={false} value={input} onChange={event => setInput(event.target.value)} aria-label="Enter a portfolio terminal command" placeholder="type a command..."/><button type="submit" aria-label="Run command"><CornerDownLeft size={15}/></button></form>
      {suggestions.length > 0 && <div className="terminal-suggestions" aria-label="Command suggestions">{suggestions.slice(0,4).map(s => <button key={s} type="button" onClick={() => { setInput(s); inputRef.current?.focus(); }}>{s}</button>)}</div>}
    </div>
    <div className="terminal-footer"><span>UTF-8</span><span>safe command demo</span><span>Try help</span></div>
    <a className="terminal-hint" href="/projects">Prefer a visual overview? Explore projects <ArrowUpRight size={13}/></a>
  </section>;
}