import type { MetadataRoute } from "next";
import { cases } from "@/lib/cases";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://stephenkisangi.vercel.app";
  return ["", ...Object.keys(cases).map((s) => `/projects/${s}`)].map((p) => ({ url: base + p, lastModified: new Date() }));
}
