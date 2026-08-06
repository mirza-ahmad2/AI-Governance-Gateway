import { motion } from "framer-motion";

export function StatCallout({ text }: { text: string }) {
  return (
    <section className="relative overflow-hidden border-y border-border bg-charcoal py-24 md:py-32">
      <div className="container-devctrl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-balance font-display text-3xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-4xl md:text-7xl"
        >
          {text}
        </motion.h2>
      </div>
    </section>
  );
}