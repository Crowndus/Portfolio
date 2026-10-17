"use client";
import { useEffect, useState } from "react";
export function Preloader() {
  const [show, setShow] = useState(false);
  const [out, setOut] = useState(false);
  const [pct, setPct] = useState(0);
  useEffect(() => {
    try { if (sessionStorage.getItem("smk")) return; sessionStorage.setItem("smk", "1"); } catch {}
    setShow(true);
    const t0 = performance.now(); let raf = 0;
    const tick = (t: number) => { const p = Math.min((t - t0) / 600, 1); setPct(p * 100); if (p < 1) raf = requestAnimationFrame(tick); else { setOut(true); setTimeout(() => setShow(false), 400); } };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg transition-all duration-[400ms]" style={{ opacity: out ? 0 : 1, transform: out ? "scale(0.98)" : "none" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.png" alt="" className="h-20 w-20 animate-pulse rounded-full" />
      <div className="mt-6 h-px w-40 bg-line"><div className="h-px bg-accent" style={{ width: `${pct}%` }} /></div>
    </div>
  );
}
