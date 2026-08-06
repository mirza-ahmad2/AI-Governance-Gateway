import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, KeySquare, FileClock, Building2, Landmark, Coins } from "lucide-react";
import { GatewayScene } from "@/components/gateway-scene";
import { Section, SectionEyebrow, SectionHeading } from "@/components/section";
import { StatCallout } from "@/components/stat-callout";
import { CapabilityCard } from "@/components/capability-card";
import { Carousel } from "@/components/carousel";
import { CtaBlock } from "@/components/cta-block";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageSeo({
      title: "Devctrl — Empower to Control AI",
      description:
        "The Compliance & Governance Gateway for policy-conformant AI agents. Built for regulated industries navigating the EU AI Act and DORA.",
      path: "/",
    }),
  component: Index,
});

function Index() {
  return (
    <>
      <HomeHero />
      <StatCallout text="EU AI Act. DORA. Enforced, not just documented." />
      <ProductPreview />
      <WhyDevctrl />
      <IndustriesPreview />
      <CtaBlock />
    </>
  );
}

function HomeHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-0">
        <GatewayScene />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background" />
      <div className="container-devctrl relative z-10 flex min-h-screen flex-col items-center justify-center pt-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-mint" />
          Compliance & Governance Gateway
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mx-auto max-w-5xl text-balance font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-8xl"
        >
          Empower to <span className="text-mint">Control</span> AI.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          The Compliance & Governance Gateway for policy-conformant AI agents — built for regulated industries navigating the EU AI Act and DORA.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-mint px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(54,211,153,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/50 active:scale-[0.98]"
          >
            Book a Demo
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
          <Link
            to="/product"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-background/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-all duration-300 hover:border-mint/50 hover:bg-mint/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/50"
          >
            Explore the Gateway
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ProductPreview() {
  const items = [
    { icon: ShieldCheck, title: "Policy Gateway", description: "A central enforcement point for every AI agent request. Route, inspect, and constrain traffic against your organization's policies in real time." },
    { icon: KeySquare, title: "Task-Based Access Control", description: "Granular permissioning for what AI agents can do — scoped to tasks, data classes, tools, and business context, not just user identity." },
    { icon: FileClock, title: "Audit & Compliance Logging", description: "Immutable, regulator-ready records of every AI decision and action, mapped to AI Act and DORA reporting obligations." },
  ];
  return (
    <Section>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <SectionEyebrow>The Platform</SectionEyebrow>
          <SectionHeading>Runtime enforcement for enterprise AI.</SectionHeading>
        </div>
        <Link to="/product" className="group inline-flex items-center gap-2 text-sm text-mint hover:opacity-80">
          View the full product <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <CapabilityCard key={it.title} {...it} index={i} />
        ))}
      </div>
    </Section>
  );
}

function WhyDevctrl() {
  return (
    <Section alt>
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <SectionEyebrow>Why Devctrl</SectionEyebrow>
          <SectionHeading>Built by founders who know regulated industries.</SectionHeading>
        </div>
        <div className="space-y-6 text-muted-foreground">
          <p className="text-lg leading-relaxed text-foreground/90">
            Devctrl was founded by Max Schwarz — previously Founder & CMO of Ruuky, a fintech building teenager banking products acquired after scaling in regulated markets — and Lisa Katzmann, Co-Founder & COO.
          </p>
          <p className="leading-relaxed">
            After years inside payment and banking, we saw the same gap in every AI conversation: governance policies live in documents, but AI agents make decisions in production. Devctrl closes that gap with infrastructure-grade enforcement, not another policy PDF.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 text-sm text-mint hover:opacity-80">
            Meet the team <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </Section>
  );
}

function IndustriesPreview() {
  const items = [
    { icon: Landmark, title: "Payment & Banking", desc: "GenAI in the payment stack — with the controls a supervisor expects." },
    { icon: Coins, title: "Insurance & Asset Management", desc: "Governed AI agents for underwriting, claims, and portfolio workflows." },
    { icon: Building2, title: "Regulated Enterprise", desc: "Any organization deploying AI where audit, accountability, and control are non-negotiable." },
  ];
  return (
    <Section>
      <SectionEyebrow>Industries</SectionEyebrow>
      <SectionHeading>Where regulation and AI meet.</SectionHeading>
      <div className="mt-16">
        <Carousel>
          {items.map((it) => (
            <div key={it.title} className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-mint">
                <it.icon size={22} />
              </div>
              <h3 className="font-display text-xl font-semibold">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </Section>
  );
}
