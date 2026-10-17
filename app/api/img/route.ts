import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

const FILES = ["stephen.jpg", "about.jpg", "certs/security-101.jpg", "certs/cybersecurity-ict-authority.jpg", "certs/academic-excellence.jpg", "projects/edurown-cover.jpg", "projects/alphastream-cover.jpg", "projects/diagnosis-cover.jpg"];
const deny = () => new Response("Forbidden", { status: 403, headers: { "Cache-Control": "no-store" } });

export async function GET(req: Request) {
  const f = new URL(req.url).searchParams.get("f") ?? "";
  if (!FILES.includes(f)) return new Response("Not found", { status: 404 });
  const h = req.headers;
  const site = h.get("sec-fetch-site");
  const dest = h.get("sec-fetch-dest");
  if (site) {
    // modern browsers: only our own pages loading it as an image
    if (site !== "same-origin" || (dest && dest !== "image")) return deny();
  } else {
    // older browsers: fall back to the Referer header
    const ref = h.get("referer");
    const host = h.get("x-forwarded-host") ?? h.get("host");
    let ok = false;
    try { ok = !!ref && !!host && new URL(ref).host === host; } catch {}
    if (!ok) return deny();
  }
  const buf = await readFile(path.join(process.cwd(), "private-assets", f));
  return new Response(new Uint8Array(buf), {
    headers: {
      "Content-Type": "image/jpeg",
      "Content-Disposition": "inline",
      "Cache-Control": "private, max-age=3600",
      "Vary": "Sec-Fetch-Site, Sec-Fetch-Dest, Referer",
      "X-Content-Type-Options": "nosniff",
      "Cross-Origin-Resource-Policy": "same-origin",
    },
  });
}
