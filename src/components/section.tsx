import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  alt = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  alt?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`relative py-16 sm:py-24 md:py-32 ${alt ? "bg-charcoal" : "bg-background"} ${className}`}
    >
      <div className="container-devctrl">{children}</div>
    </section>
  );
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-mint">
      <span className="h-px w-8 bg-mint" />
      {children}
    </div>
  );
}

export function SectionHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`max-w-3xl text-balance font-display text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl md:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}