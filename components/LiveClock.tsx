"use client";
import { useEffect, useState } from "react";
export function LiveClock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const f = () => setT(new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Nairobi" }).format(new Date()));
    f(); const id = setInterval(f, 20000); return () => clearInterval(id);
  }, []);
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-bg px-3.5 py-1.5 font-mono text-xs">
      <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-live" /></span>
      Kenya now · {t || "--:--"} EAT
    </span>
  );
}
