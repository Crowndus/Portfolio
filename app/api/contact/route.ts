import { site } from "@/lib/data";
export async function POST(req: Request) {
  const { name, email, message } = await req.json().catch(() => ({}));
  if (!name || !/^\S+@\S+\.\S+$/.test(email || "") || !message || message.length < 10) return Response.json({ error: "Invalid input" }, { status: 400 });
  const key = process.env.RESEND_API_KEY;
  if (!key) return Response.json({ error: "Not configured" }, { status: 503 });
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: "Portfolio <onboarding@resend.dev>", to: [site.email], reply_to: email, subject: `Portfolio message from ${String(name).slice(0, 100)}`, text: `${name} <${email}>\n\n${message}` }),
  });
  return r.ok ? Response.json({ ok: true }) : Response.json({ error: "Send failed" }, { status: 502 });
}
