import { ArrowRight, ArrowUpRight, Award, Code2, Radio, Sparkles, BookOpen, Briefcase, Database, ExternalLink, FileCheck2, Fingerprint, FlaskConical, Github, Linkedin, Mail, MessageCircle, Microscope, Rocket, TrendingUp, Users, Wrench } from "lucide-react";
import { Reveal, Counter, ImageReveal } from "./Motion";
import { SiFigma, SiGit, SiGithub, SiMysql, SiNextdotjs, SiNodedotjs, SiPandas, SiPhp, SiPostgresql, SiPython, SiReact, SiScikitlearn, SiTailwindcss, SiTensorflow, SiTypescript, SiVercel } from "react-icons/si";
import { CertCard } from "./CertCard";
import { ContactForm } from "./ContactForm";
import Link from "next/link";
import { about, certs, experience, marquee, metrics, projects, research, site, skills } from "@/lib/data";

const wrap = "mx-auto max-w-6xl px-6";
const sec = "py-24 md:py-32";
const H = ({ children }: { children: React.ReactNode }) => <div className="mb-12"><h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{children}</h2><div className="mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-accent to-accent2" /></div>;
const ExIcon = ({ i }: { i: number }) => { const I = [Rocket, Briefcase, Wrench, Microscope, Users][i]; return <I size={15} />; };
const mono = "font-mono text-xs uppercase tracking-wider";

const mi = [FileCheck2, Users, Rocket, Award];
export function Metrics() {
  return (
    <section className="relative -mt-4"><div className={`${wrap} grid grid-cols-2 gap-4 lg:grid-cols-4`}>
      {metrics.map((m, i) => { const I = mi[i]; return (
        <Reveal key={m.label} delay={i * 0.06} className="h-full">
          <div className="h-full rounded-2xl border border-ink/10 bg-surface p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10 sm:p-6">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent"><I size={20} /></span>
            <div className="mt-4 font-mono text-3xl font-semibold sm:text-4xl"><Counter to={m.to} prefix={m.prefix} suffix={m.suffix} /></div>
            <p className="mt-1 text-sm text-muted">{m.label}</p>
          </div>
        </Reveal>); })}
    </div></section>
  );
}

export function About() {
  return (
    <section id="about" className={sec}><div className={wrap}>
      <Reveal><H>A little about me</H></Reveal>
      <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
        <div className="space-y-5 text-muted">{about.map((p, i) => <Reveal key={i} delay={i * 0.06}><p>{p}</p></Reveal>)}</div>
        <Reveal><div className="space-y-6">
          <div className="relative mx-auto w-full max-w-sm px-3 pb-4">
            <div className="absolute inset-x-3 top-0 bottom-4 translate-x-4 translate-y-4 rounded-3xl border-2 border-accent/40" />
            <div className="absolute -inset-1 -z-10 rotate-3 rounded-[2rem] bg-gradient-to-br from-accent/30 to-accent2/30 blur-md" />
            <div className="absolute -right-4 -top-5 h-24 w-24 opacity-70 [background-image:radial-gradient(var(--accent)_1.6px,transparent_1.6px)] [background-size:12px_12px]" />
            <div className="absolute -bottom-3 -left-4 h-20 w-20 rounded-full border-2 border-dashed border-accent2/50 spin-slow" />
            <div className="relative"><ImageReveal src="/api/img?f=about.jpg" alt="Stephen Mathenge Kisangi" className="aspect-[4/5]" /></div>
            <div className="float absolute -left-2 bottom-10 z-10 flex items-center gap-2 rounded-2xl border border-ink/10 bg-surface/90 px-3.5 py-2 text-sm font-medium shadow-xl shadow-accent/10 backdrop-blur-xl sm:-left-6"><Sparkles size={16} className="text-accent2" />Curious by nature</div>
          </div>
          
        </div></Reveal>
      </div>
      <Reveal><h3 className="mt-20 mb-8 text-xl font-medium">Where I&apos;ve been, and what it taught me</h3></Reveal>
      <ol className="border-l border-line ml-4 space-y-10">
        {experience.map((e) => (
          <li key={e.role + e.org} className="relative pl-6 sm:pl-8">
            <span className="absolute -left-4 top-0 grid h-8 w-8 place-items-center rounded-full border border-ink/10 bg-surface text-accent shadow-sm"><ExIcon i={experience.indexOf(e)} /></span>
            <Reveal>
              <p className={`${mono} text-muted`}>{e.date}</p>
              <h4 className="mt-1 text-lg font-medium">{e.role}</h4>
              <p className="text-sm text-accent">{e.org}</p>
              <p className="mt-3 text-sm sm:text-base text-muted max-w-3xl">{e.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </div></section>
  );
}

type Ic = React.ComponentType<{ size?: number }>;
const sk: Record<string, { I: Ic; c: string; d: string }> = {
  Python: { I: SiPython, c: "#3776AB", d: "Data, ML and automation" },
  TypeScript: { I: SiTypescript, c: "#3178C6", d: "Typed, safer JavaScript" },
  React: { I: SiReact, c: "#0EA5C9", d: "Interfaces that feel alive" },
  "Next.js": { I: SiNextdotjs, c: "var(--ink)", d: "Full-stack web apps" },
  Tailwind: { I: SiTailwindcss, c: "#06B6D4", d: "Fast, polished styling" },
  SQL: { I: SiMysql, c: "#4479A1", d: "Data that stays organised" },
  TensorFlow: { I: SiTensorflow, c: "#FF6F00", d: "Deep learning models" },
  "Scikit-learn": { I: SiScikitlearn, c: "#F7931E", d: "Classical machine learning" },
};
export function Skills() {
  return (
    <section id="skills" className={sec}><div className={wrap}>
      <Reveal><H>What I can do</H><p className="-mt-6 mb-10 max-w-xl text-muted">The tools I reach for when an idea needs to become something real.</p></Reveal>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {skills.map((n, i) => { const { I, c, d } = sk[n]; return (
          <Reveal key={n} delay={(i % 4) * 0.07} className="h-full">
            <div className="group relative h-full overflow-hidden rounded-2xl border border-ink/10 bg-surface p-5 transition duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition group-hover:opacity-30" style={{ background: c }} />
              <span className="relative grid h-12 w-12 place-items-center rounded-xl border border-ink/10 bg-bg shadow-sm transition duration-300 group-hover:scale-110 group-hover:-rotate-6" style={{ color: c }}><I size={24} /></span>
              <h3 className="relative mt-4 font-semibold">{n}</h3>
              <p className="relative mt-1 text-sm text-muted">{d}</p>
            </div>
          </Reveal>); })}
      </div>
    </div></section>
  );
}

const covers: Record<string, string> = { AlphaStreamTrader: "/api/img?f=projects/alphastream-cover.jpg", Edurown: "/api/img?f=projects/edurown-cover.jpg", "Diagnosis Reporting System": "/api/img?f=projects/diagnosis-cover.jpg" };
const pi = [TrendingUp, BookOpen, Microscope, Database, Fingerprint];
export function Work() {
  return (
    <section id="work" className={`${sec} bg-surface/60`}><div className={wrap}>
      <Reveal><H>What I&apos;ve built so far</H></Reveal>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => {
          const live = p.badge === "LIVE";
          const slug = (p as { slug?: string }).slug;
          const I = pi[i];
          const wide = i === projects.length - 1;
          const cover = covers[p.name] || "";
          const url = p.link ? "live and running" : "project preview";
          return (
            <Reveal key={p.name} delay={(i % 2) * 0.08} className={`h-full ${wide ? "md:col-span-2" : ""}`}>
              <div className={`group h-full rounded-2xl border border-ink/10 bg-bg p-4 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 sm:p-5 ${wide ? "md:grid md:grid-cols-2 md:items-center md:gap-8" : ""}`}>
                <div className="overflow-hidden rounded-xl border border-ink/10 bg-surface">
                  <div className="flex items-center gap-1.5 border-b border-ink/10 px-3 py-2">
                    <i className="h-2 w-2 rounded-full bg-red-400" /><i className="h-2 w-2 rounded-full bg-amber-400" /><i className="h-2 w-2 rounded-full bg-green-400" />
                    <span className="ml-2 truncate rounded-md bg-ink/5 px-2 py-0.5 font-mono text-[10px] text-muted">{url}</span>
                  </div>
                  <div className="relative aspect-[16/9] overflow-hidden">
                    {cover ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={cover} alt={p.name} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                      <div className="grid h-full place-items-center bg-gradient-to-br from-accent/20 via-accent2/15 to-sky/20">
                        <div className="blob absolute h-32 w-32 rounded-full bg-accent/30 blur-2xl" />
                        <I size={52} className="float relative text-accent" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="px-1 pt-5 md:pt-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`${mono} inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 ${live ? "bg-live/15 text-live" : "bg-accent/15 text-accent"}`}>{live && <span className="h-1.5 w-1.5 rounded-full bg-live" />}{p.badge}</span>
                    {p.tag && <span className={`${mono} text-muted`}>{p.tag}</span>}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted sm:text-base">{p.body}</p>
                  <p className="mt-4 font-mono text-xs text-muted/80">Stack: {p.stack}</p>
                  {(slug || p.link) && (
                    <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium">
                      
                      {slug && <Link href={`/projects/${slug}`} className="shine inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent2 py-2 pl-5 pr-2 text-white shadow-lg shadow-accent/30 transition hover:scale-[1.03]">Read the story <span className="grid h-7 w-7 place-items-center rounded-full bg-white/20"><ArrowRight size={14} className="nudge" /></span></Link>}
                      {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2 transition hover:border-accent/50 hover:text-accent"><span className="h-1.5 w-1.5 rounded-full bg-live" />Try it live <ExternalLink size={14} /></a>}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div></section>
  );
}

export function Certs() {
  return (
    <section id="certifications" className={sec}><div className={wrap}>
      <Reveal><H>Proof I&apos;ve put in the work</H></Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((c, i) => <Reveal key={c.title} delay={i * 0.08}><CertCard {...c} /></Reveal>)}
      </div>
    </div></section>
  );
}

export function Research() {
  return (
    <section id="research" className={`${sec} bg-surface/50`}><div className={wrap}>
      <Reveal><H>A question I went digging into</H></Reveal>
      <Reveal><div className="rounded-2xl border border-ink/10 bg-bg p-6 sm:p-10 max-w-4xl">
        <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-accent2/10 text-accent2"><FlaskConical size={22} /></span>
        <h3 className="text-lg sm:text-2xl font-medium leading-snug">{research.title}</h3>
        <p className="mt-2 text-muted">{research.sub}</p>
        <p className={`${mono} mt-5 text-accent`}>{research.meta}</p>
        <p className="mt-4 text-muted">{research.body}</p>
      </div></Reveal>
    </div></section>
  );
}

const mq: Record<string, { I: Ic; c: string }> = {
  TypeScript: sk.TypeScript, React: sk.React, "Next.js": sk["Next.js"], "Tailwind CSS": sk.Tailwind, "Node.js": { I: SiNodedotjs, c: "#5FA04E" },
  Python: sk.Python, TensorFlow: sk.TensorFlow, "Scikit-learn": sk["Scikit-learn"], Pandas: { I: SiPandas, c: "#8B5CF6" }, MySQL: sk.SQL,
  PostgreSQL: { I: SiPostgresql, c: "#4169E1" }, PHP: { I: SiPhp, c: "#777BB4" }, Git: { I: SiGit, c: "#F05032" }, GitHub: { I: SiGithub, c: "var(--ink)" },
  Vercel: { I: SiVercel, c: "var(--ink)" }, WebSocket: { I: Radio, c: "#22C55E" }, "Deriv API": { I: Code2, c: "#FF444F" }, Figma: { I: SiFigma, c: "#F24E1E" }, "VS Code": { I: Code2, c: "#0EA5E9" },
};
export function Marquee() {
  const row = [...marquee, ...marquee];
  return (
    <div className="marquee-wrap overflow-hidden border-y border-line py-6">
      <div className="marquee flex w-max gap-3 pr-3">
        {row.map((t, i) => { const m = mq[t]; return (
          <span key={i} className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-surface px-4 py-2 font-mono text-xs text-muted">
            {m && <span style={{ color: m.c }}><m.I size={15} /></span>}{t}
          </span>); })}
      </div>
    </div>
  );
}

export function Contact() {
  const items = [
    { Icon: Mail, title: "Drop me a line", sub: "Best for projects and roles", href: `mailto:${site.email}` },
    { Icon: MessageCircle, title: "Chat with me on WhatsApp", sub: "Quick questions, quick answers", href: `https://wa.me/${site.whatsapp.replace(/\D/g, "")}` },
    { Icon: Linkedin, title: "Explore me on LinkedIn", sub: "My career story and network", href: site.linkedin },
    { Icon: Github, title: "See my code on GitHub", sub: "Peek at what I'm building", href: site.github },
  ];
  return (
    <section id="contact" className={sec}><div className={wrap}>
      <Reveal>
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">Let&apos;s <span className="gradient-text">build something.</span></h2>
        <p className="mt-5 max-w-2xl text-muted">Open to AI engineering roles, research collaborations, and founding-team conversations. Based in Kenya. Working with teams worldwide.</p>
      </Reveal>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {items.map(({ Icon, title, sub, href }, i) => (
          <Reveal key={title} delay={i * 0.06} className="h-full">
            <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="group flex h-full min-w-0 items-center gap-4 rounded-2xl border border-ink/10 bg-surface p-5 transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/15 to-accent2/15 text-accent transition group-hover:scale-110"><Icon size={22} /></span>
              <div className="min-w-0 flex-1"><p className="font-semibold">{title}</p><p className="text-sm text-muted">{sub}</p></div>
              <ArrowUpRight size={18} className="shrink-0 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </a>
          </Reveal>
        ))}
      </div>
      <Reveal><ContactForm /></Reveal>
    </div></section>
  );
}

export { Hero } from "./Hero";
export { Footer } from "./Footer";
