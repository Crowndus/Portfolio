import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, BadgeCheck, Fingerprint } from "lucide-react";
import { Nav } from "@/components/Nav";
import { ScrollProgress, Reveal, ImageReveal } from "@/components/Motion";
import { Footer } from "@/components/Sections";
import { cases } from "@/lib/cases";

export function generateStaticParams() { return Object.keys(cases).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const c = cases[(await params).slug];
  return c ? { title: `${c.name} | Stephen Mathenge Kisangi`, description: c.tagline } : {};
}
const covers: Record<string, string> = { edurown: "/api/img?f=projects/edurown-cover.jpg", alphastreamtrader: "/api/img?f=projects/alphastream-cover.jpg", "diagnosis-reporting-system": "/api/img?f=projects/diagnosis-cover.jpg" };
const mono = "font-mono text-xs uppercase tracking-wider text-accent";

export default async function Case({ params }: { params: Promise<{ slug: string }> }) {
  const c = cases[(await params).slug];
  if (!c) notFound();
  const next = cases[c.next];
  return (
    <>
      <ScrollProgress /><Nav />
      <main className="mx-auto max-w-4xl px-6 pt-32 pb-24 space-y-16">
        <Reveal>
          <p className={mono}>The story behind it</p>
          <h1 className="mt-3 text-4xl sm:text-6xl font-semibold tracking-tight">{c.name}</h1>
          <p className="mt-3 text-lg sm:text-xl text-muted">{c.tagline}</p>
          {c.highlight && <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent"><BadgeCheck size={16} />{c.highlight}</p>}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            <span>Role: <b className="text-ink font-medium">{c.role}</b></span>
            <span>Timeline: <b className="text-ink font-medium">{c.timeline}</b></span>
            {c.link && <a href={c.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full bg-accent px-4 py-1.5 font-medium text-white">Try it live <ArrowUpRight size={14} /></a>}
          </div>
        </Reveal>
        {covers[c.slug] ? (
          <Reveal><ImageReveal src={covers[c.slug]} alt={`${c.name} screenshot`} className="aspect-[16/9]" /></Reveal>
        ) : (
          <Reveal><div className="relative grid aspect-[16/9] place-items-center overflow-hidden rounded-3xl border border-ink/10 bg-gradient-to-br from-accent/20 via-accent2/15 to-sky/20">
            <div className="blob absolute h-48 w-48 rounded-full bg-accent/30 blur-3xl" /><Fingerprint size={72} className="float relative text-accent" />
          </div></Reveal>
        )}
        <Reveal><h2 className={mono}>The problem worth solving</h2><div className="mt-4 space-y-4 text-muted">{c.problem.map((p) => <p key={p}>{p}</p>)}</div></Reveal>
        <Reveal><h2 className={mono}>How I tackled it</h2><ul className="mt-4 space-y-3 text-muted">{c.approach.map((a) => <li key={a} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{a}</li>)}</ul></Reveal>
        <Reveal><h2 className={mono}>What I built it with</h2><div className="mt-4 flex flex-wrap gap-2">{c.stack.map((s) => <span key={s} className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs">{s}</span>)}</div></Reveal>
        <Reveal><h2 className={mono}>How it fits together</h2>
          <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2">
            {c.flow.map((f, i) => (<div key={f} className="flex flex-col sm:flex-row items-center gap-2">
              <span className="w-full sm:w-auto text-center rounded-xl border border-ink/10 bg-surface px-4 py-3 text-sm">{f}</span>
              {i < c.flow.length - 1 && <ArrowRight size={16} className="rotate-90 sm:rotate-0 text-accent" />}
            </div>))}
          </div></Reveal>
        {c.ahead && (
          <Reveal><h2 className={mono}>Where it could go next</h2><ul className="mt-4 space-y-3 text-muted">{c.ahead.map((a) => <li key={a} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent2" />{a}</li>)}</ul></Reveal>
        )}
        <Reveal><h2 className={mono}>What came out of it</h2><ul className="mt-4 space-y-3 text-muted">{c.impact.map((a) => <li key={a} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-live" />{a}</li>)}</ul></Reveal>
        <Reveal><Link href={`/projects/${next.slug}`} className="group relative block overflow-hidden rounded-2xl border border-ink/10 bg-surface p-5 transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 sm:p-6">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent2/5 to-transparent" />
          <div className="relative flex items-center justify-between gap-4">
            <div className="min-w-0"><p className={mono}>Up next</p><p className="mt-1 text-lg font-semibold sm:text-xl">{next.name}</p><p className="mt-0.5 text-sm text-muted">{next.tagline}</p></div>
            <span className="ring-pulse grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-accent to-accent2 text-white shadow-md shadow-accent/30 transition group-hover:scale-110"><ArrowRight size={18} className="nudge" /></span>
          </div>
        </Link></Reveal>
      </main>
      <Footer />
    </>
  );
}
