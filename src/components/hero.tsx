import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type HeroProps = {
  image: string;
  alt?: string;
  eyebrow?: string;
  heading: ReactNode;
  subheading?: string;
  ctaLabel?: string;
  ctaTo?: string;
  overlay?: string;
  children?: ReactNode;
  minHeight?: string;
};

export function Hero({
  image,
  alt = "Devctrl hero visual",
  eyebrow,
  heading,
  subheading,
  ctaLabel,
  ctaTo = "/contact",
  overlay = "bg-background/70",
  children,
  minHeight = "min-h-[92vh]",
}: HeroProps) {
  return (
    <section
      className={`relative flex w-full items-center justify-center overflow-hidden ${minHeight}`}
      aria-label={typeof eyebrow === "string" ? eyebrow : "Hero"}
    >
      <img
        src={image}
        alt={alt}
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
        decoding="async"
        fetchPriority="high"
      />
      <div className={`absolute inset-0 ${overlay}`} aria-hidden="true" />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background"
        aria-hidden="true"
      />
      <div className="container-devctrl relative z-10 pt-24 text-center">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-mint" aria-hidden="true" />
            {eyebrow}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-7xl"
        >
          {heading}
        </motion.h1>
        {subheading && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {subheading}
          </motion.p>
        )}
        {ctaLabel && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex justify-center"
          >
            <Link
              to={ctaTo}
              className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-mint px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(54,211,153,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]"
            >
              {ctaLabel}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
