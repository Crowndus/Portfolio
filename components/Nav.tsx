"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { nav, site } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [sc, setSc] = useState(false);
  useEffect(() => {
    const f = () => setSc(window.scrollY > 20); f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className="fixed top-3 inset-x-0 z-50 px-3 sm:px-6">
      <div className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border px-3 sm:px-5 transition-all duration-300 ${sc ? "border-ink/10 bg-surface/80 shadow-lg shadow-accent/10 backdrop-blur-xl" : "border-transparent"}`}>
        <a href="/" className="flex items-center gap-2.5 font-mono font-semibold">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Stephen Kisangi" className="h-10 w-10 rounded-full shadow-md shadow-accent/30 transition hover:scale-105" />
          <span className="hidden sm:inline">Stephen<span className="text-accent">.</span></span>
        </a>
        <nav className="hidden xl:flex items-center gap-1 text-sm">
          {nav.map(([l, h]) => <a key={h} href={h} className="rounded-full px-3.5 py-1.5 text-muted transition hover:bg-ink/5 hover:text-ink">{l}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href={site.cv} className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent2 px-4 py-2 text-sm font-medium text-white shadow-md shadow-accent/30 transition hover:scale-[1.03]"><Download size={14} /> Grab my CV</a>
          <button aria-label="Menu" className="grid h-9 w-9 place-items-center rounded-full border border-ink/10 bg-surface/70 xl:hidden" onClick={() => setOpen(!open)}>{open ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}
            className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-3xl border border-ink/10 bg-surface/95 p-3 shadow-xl backdrop-blur-xl xl:hidden">
            {nav.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm hover:bg-ink/5">{l}</a>)}
            <a href={site.cv} className="mt-1 rounded-2xl bg-gradient-to-r from-accent to-accent2 px-4 py-3 text-center text-sm font-medium text-white">Grab my CV</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
