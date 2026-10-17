"use client";
import { useState } from "react";
const f = "w-full rounded-xl border border-ink/10 bg-surface px-4 py-3 text-sm outline-none focus:border-accent";
export function ContactForm() {
  const [s, setS] = useState<"idle" | "sending" | "ok" | "err">("idle");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setS("sending");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form))) });
      if (!r.ok) throw new Error();
      form.reset(); setS("ok");
    } catch { setS("err"); }
  }
  return (
    <form onSubmit={submit} className="mt-10 grid gap-4 max-w-2xl">
      <div className="grid sm:grid-cols-2 gap-4">
        <input name="name" required maxLength={100} placeholder="Name" aria-label="Name" className={f} />
        <input name="email" type="email" required maxLength={150} placeholder="Email" aria-label="Email" className={f} />
      </div>
      <textarea name="message" required minLength={10} maxLength={3000} rows={5} placeholder="Message" aria-label="Message" className={f} />
      <button disabled={s === "sending"} className="justify-self-start rounded-full bg-accent px-6 py-3 text-sm font-medium text-white disabled:opacity-60">{s === "sending" ? "Sending..." : "Submit"}</button>
      {s === "ok" && <p className="text-sm text-live">Thanks, message sent.</p>}
      {s === "err" && <p className="text-sm text-red-400">Could not send. Please email me directly.</p>}
    </form>
  );
}
