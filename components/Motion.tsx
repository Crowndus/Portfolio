"use client";
import { motion, useInView, useReducedMotion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return <motion.div style={{ scaleX: scrollYProgress }} className="fixed top-0 left-0 right-0 h-0.5 origin-left z-[60] bg-gradient-to-r from-accent to-accent2" />;
}

export function Counter({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.6 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) { setN(0); return; }
    let raf = 0; const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / 1400, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 4))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{prefix}{n.toLocaleString()}{suffix}</span>;
}

export function Typed({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i];
    const id = setTimeout(() => {
      if (!del && txt === w) return setDel(true);
      if (del && txt === "") { setDel(false); return setI((i + 1) % words.length); }
      setTxt(del ? w.slice(0, txt.length - 1) : w.slice(0, txt.length + 1));
    }, !del && txt === w ? 1400 : del ? 30 : 60);
    return () => clearTimeout(id);
  }, [txt, del, i, words]);
  return <span>{txt}<span className="caret text-accent">|</span></span>;
}

export function ImageReveal({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const reduce = useReducedMotion();
  const vp = { once: false, amount: 0.3 };
  return (
    <motion.div className={`overflow-hidden rounded-3xl border border-ink/10 shadow-xl shadow-accent/10 ${className}`}
      initial={{ clipPath: "inset(12% 12% 12% 12% round 24px)", opacity: 0 }} whileInView={{ clipPath: "inset(0% 0% 0% 0% round 24px)", opacity: 1 }} viewport={vp} transition={{ duration: 0.9, ease }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" initial={{ scale: reduce ? 1 : 1.2 }} whileInView={{ scale: 1 }} viewport={vp} whileHover={{ scale: 1.05 }} transition={{ duration: 1.2, ease }} />
    </motion.div>
  );
}
