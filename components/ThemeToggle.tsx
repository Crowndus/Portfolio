"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
  function toggle() {
    const d = !dark; setDark(d);
    document.documentElement.classList.toggle("dark", d);
    try { localStorage.setItem("theme", d ? "dark" : "light"); } catch {}
  }
  return <button onClick={toggle} aria-label="Toggle theme" className="grid h-9 w-9 place-items-center rounded-full border border-ink/10 bg-surface/70 transition hover:border-accent/50 hover:text-accent">{dark ? <Sun size={16} /> : <Moon size={16} />}</button>;
}
