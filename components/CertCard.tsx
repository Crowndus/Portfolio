"use client";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

type Props = { image: string; title: string; issuer: string; date: string; tag: string };

export function CertCard({ image, title, issuer, date, tag }: Props) {
  return (
    <div className="group h-full rounded-2xl border border-ink/10 bg-ink/[0.03] p-4 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10">
      <div className="aspect-[7/5] w-full overflow-hidden rounded-xl bg-surface">
        <motion.img src={image} alt={title} loading="lazy" draggable={false} className="h-full w-full select-none object-cover"
          initial={{ scale: 1.25, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: false, amount: 0.3 }} whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} />
      </div>
      <div className="mt-4 space-y-1 px-1 pb-1">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-2.5 py-0.5 font-mono text-xs uppercase tracking-wider text-muted"><Award size={12} />{tag}</span>
        <h3 className="pt-2 font-medium">{title}</h3>
        <p className="text-sm text-muted">{issuer}</p>
        <p className="font-mono text-xs text-accent">{date}</p>
      </div>
    </div>
  );
}
