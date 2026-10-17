"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Command, Menu, X } from "lucide-react";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/lab", label: "Lab" },
  { href: "/experience", label: "Experience" },
  { href: "/aisdop", label: "AISDOP" },
  { href: "/services", label: "Services" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen((value) => !value);
      }
      if (event.key === "Escape") {
        setCommandOpen(false);
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const jumps = [...links, { href: "/writing", label: "Writing" }, { href: "/resume", label: "Resume" }, { href: "/contact", label: "Contact" }];

  return <>
    <header className="site-header"><div className="header-inner">
      <Link href="/" className="brand" aria-label="Gokul Prasath home"><span className="brand-mark">g<span>.</span></span><span className="brand-copy"><strong>GOKUL PRASATH</strong><small>ENGINEER / EDUCATOR / FOUNDER</small></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav>
      <div className="header-actions">
        <button className="command-trigger" onClick={() => setCommandOpen(true)} aria-label="Open command palette"><Command size={14}/><span>Quick jump</span><kbd>⌘ K</kbd></button>
        <Link className="contact-pill" href="/contact">Let&apos;s talk ↗</Link>
        <button className="mobile-menu" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </div>
    </div>{open && <nav className="mobile-nav" aria-label="Mobile navigation">{jumps.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}</nav>}</header>
    {commandOpen && <div className="command-backdrop" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) setCommandOpen(false); }}>
      <div className="command-modal" role="dialog" aria-modal="true" aria-label="Quick navigation">
        <div className="command-modal-heading"><Command size={16}/> Jump to a workspace <button onClick={() => setCommandOpen(false)} aria-label="Close quick navigation"><X size={16}/></button></div>
        {jumps.map(link => <Link key={link.href} href={link.href} onClick={() => setCommandOpen(false)}><span>{link.label}</span><span className="command-open">Open ↗</span></Link>)}
        <div className="command-footer">ESC to close <span>Keyboard-first navigation</span></div>
      </div>
    </div>}
  </>;
}