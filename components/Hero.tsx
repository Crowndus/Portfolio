"use client";
import { motion } from "framer-motion";
import { ArrowRight, Award, Download, Github, GraduationCap, Linkedin, Mail, Rocket, Sparkles, type LucideIcon } from "lucide-react";
import { Typed } from "./Motion";
import { site } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;
const box = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } };

function Chip({ Icon, text, sub, className, delay }: { Icon: LucideIcon; text: string; sub: string; className: string; delay: string }) {
  return (
    <div className={`float absolute z-10 flex items-center gap-3 rounded-2xl border border-ink/10 bg-surface/80 px-3 py-2 shadow-xl sm:px-3.5 sm:py-2.5 shadow-accent/10 backdrop-blur-xl ${className}`} style={{ animationDelay: delay }}>
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent2 text-white"><Icon size={18} /></span>
      <span className="leading-tight"><span className="block text-sm font-semibold">{text}</span><span className="hidden text-xs text-muted sm:block">{sub}</span></span>
    </div>
  );
}
const live = [["Edurown", "https://edurown.vercel.app/"], ["AlphaStreamTrader", "https://alphastreamtrader.vercel.app/"]];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="grid-bg absolute inset-0 -z-10" />
      <div className="blob absolute -top-20 -left-24 -z-10 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />
      <div className="blob absolute top-40 -right-24 -z-10 h-96 w-96 rounded-full bg-accent2/20 blur-3xl" style={{ animationDelay: "-6s" }} />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.15fr_1fr]">
        <motion.div variants={box} initial="hidden" animate="show">
          <motion.span variants={item} className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-surface/70 px-4 py-1.5 font-mono text-xs backdrop-blur">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-live" /></span>
            {site.eyebrow}
          </motion.span>
          <motion.h1 variants={item} className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl">Stephen Mathenge <span className="gradient-text">Kisangi</span></motion.h1>
          <motion.p variants={item} className="mt-5 flex items-center gap-3 font-mono text-lg sm:text-2xl"><Sparkles size={22} className="shrink-0 text-accent2" /><Typed words={site.roles} /></motion.p>
          <motion.p variants={item} className="mt-6 max-w-xl text-base text-muted sm:text-lg">{site.sub}</motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent2 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent/30 transition hover:scale-[1.03]">See what I&apos;ve built <ArrowRight size={16} className="transition group-hover:translate-x-1" /></a>
            <a href={site.cv} className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-surface/70 px-6 py-3 text-sm font-medium backdrop-blur transition hover:border-accent/50"><Download size={16} /> Grab my CV</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted transition hover:text-ink"><Mail size={16} /> Say hello</a>
          </motion.div>
          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            {[[Github, site.github, "My code on GitHub"], [Linkedin, site.linkedin, "Explore me on LinkedIn"], [Mail, `mailto:${site.email}`, "Write me an email"]].map(([I, h, l]) => {
              const Icon = I as LucideIcon;
              return <a key={l as string} href={h as string} aria-label={l as string} title={l as string} className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-surface/70 transition hover:-translate-y-1 hover:border-accent/50 hover:text-accent"><Icon size={18} /></a>;
            })}
            <span className="mx-1 hidden h-6 w-px bg-ink/15 sm:block" />
            {live.map(([n, u]) => (
              <a key={n} href={u} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-live/30 bg-live/10 px-3.5 py-1.5 text-xs font-medium transition hover:bg-live/20">
                <span className="h-1.5 w-1.5 rounded-full bg-live" />{n}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.92, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, ease, delay: 0.3 }} className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md">
          <div className="absolute -inset-3 overflow-hidden rounded-[2.5rem]"><div className="spin-slow absolute -inset-[60%] bg-[conic-gradient(from_0deg,var(--accent),var(--accent2),var(--sky),var(--accent))]" /></div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-surface ring-4 ring-bg">
            <motion.div className="absolute inset-0" initial={{ scale: 1.3 }} animate={{ scale: 1 }} transition={{ duration: 1.8, ease }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/api/img?f=stephen.jpg" alt="Stephen Mathenge Kisangi at his graduation" fetchPriority="high" className="h-full w-full object-cover object-top" />
            </motion.div>
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <Chip Icon={GraduationCap} text="First-Class Honours" sub="BSc Information Technology" className="-top-5 left-3 sm:-left-10 sm:top-8" delay="0s" />
          <Chip Icon={Award} text="Best Student, School of Computing & Information Science (2024)" sub="" className="-right-2 top-[58%] max-w-[15rem] sm:-right-10 sm:top-1/2" delay="-2s" />
          <Chip Icon={Rocket} text="2 live products" sub="Edurown · AlphaStreamTrader" className="-bottom-5 left-4 sm:-left-6" delay="-4s" />
        </motion.div>
      </div>
    </section>
  );
}
