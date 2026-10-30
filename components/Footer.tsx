import { ArrowUp, ExternalLink, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { nav, site } from "@/lib/data";
import { LiveClock } from "./LiveClock";

const live = [["Edurown", "https://edurown.vercel.app/"], ["AlphaStreamTrader", "https://alphastreamtrader.vercel.app/"]];
const soc = [[Github, site.github, "My code on GitHub"], [Linkedin, site.linkedin, "Explore me on LinkedIn"], [Mail, `mailto:${site.email}`, "Write me an email"], [MessageCircle, `https://wa.me/${site.whatsapp.replace(/\D/g, "")}`, "Chat on WhatsApp"]] as const;
const h = "font-mono text-xs uppercase tracking-wider text-accent";

export function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden bg-surface">
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="gradient-text pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none font-mono text-[10rem] font-bold leading-none opacity-[0.07] sm:text-[18rem]">SMK</div>
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Stephen Kisangi" className="h-14 w-14 rounded-full shadow-md shadow-accent/30" />
          <p className="font-tag mt-5 max-w-xs text-lg font-medium leading-snug">&ldquo;{site.tagline}&rdquo;</p>
          <p className="mt-3 text-sm text-muted">Founder · Builder · Growing into AI engineering</p>
          <div className="mt-5"><LiveClock /></div>
        </div>
        <div><p className={h}>Wander around</p><ul className="mt-4 space-y-2 text-sm text-muted">{nav.map(([l, u]) => <li key={u}><a href={u} className="transition hover:text-ink">{l}</a></li>)}</ul></div>
        <div><p className={h}>Try them live</p><ul className="mt-4 space-y-2 text-sm text-muted">{live.map(([n, u]) => <li key={n}><a href={u} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition hover:text-ink">{n} <ExternalLink size={13} /></a></li>)}</ul></div>
        <div><p className={h}>Find me here</p><div className="mt-4 flex gap-2">{soc.map(([I, u, l]) => <a key={l} href={u} aria-label={l} title={l} className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 transition hover:-translate-y-1 hover:border-accent/50 hover:text-accent"><I size={17} /></a>)}</div></div>
      </div>
      <div className="relative border-t border-ink/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-muted sm:flex-row">
          <p>© 2026 {site.name} · Crowndus</p>
          <p className="text-center">Crafted in Kenya with curiosity, caffeine and a lot of debugging.</p>
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-ink/10 px-4 py-2 transition hover:border-accent/50 hover:text-accent">Back to top <ArrowUp size={14} /></a>
        </div>
      </div>
    </footer>
  );
}
