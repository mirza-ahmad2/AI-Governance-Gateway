import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CtaBlock() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32" aria-labelledby="cta-heading">
      <div className="container-devctrl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-mint/30 bg-charcoal p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:p-12 md:p-20"
        >
          <div
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-mint/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative">
            <p className="text-xs uppercase tracking-widest text-mint">Get Started</p>
            <h2
              id="cta-heading"
              className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-6xl"
            >
              Enforce your AI policy at runtime.
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              See how Devctrl's Policy Gateway secures AI agent deployments across
              your regulated stack.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex min-h-11 items-center gap-2 rounded-full bg-mint px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(54,211,153,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/50 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal active:scale-[0.98]"
            >
              Book a Demo
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
