"use client";
import { useEffect } from "react";

export function ImageGuard() {
  useEffect(() => {
    const block = (e: Event) => { if ((e.target as HTMLElement)?.tagName === "IMG") e.preventDefault(); };
    document.addEventListener("contextmenu", block);
    document.addEventListener("dragstart", block);
    return () => { document.removeEventListener("contextmenu", block); document.removeEventListener("dragstart", block); };
  }, []);
  return null;
}
