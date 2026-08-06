import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export function CapabilityCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-[0_0_0_0_transparent] transition-all duration-300 hover:border-mint/35 hover:shadow-[0_20px_50px_rgba(0,0,0,0.28)] sm:p-8"
    >
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-mint transition-all duration-300 group-hover:border-mint/40 group-hover:bg-mint/10">
        <Icon size={22} aria-hidden="true" />
      </div>
      <h3 className="font-display text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="mt-auto pt-8">
        <div className="h-px w-full bg-border transition-colors duration-300 group-hover:bg-mint/40" />
      </div>
    </motion.article>
  );
}
