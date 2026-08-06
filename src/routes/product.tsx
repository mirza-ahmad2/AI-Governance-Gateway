import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShieldCheck, KeySquare, FileClock, Network, Lock, GitBranch, Gauge, ScrollText } from "lucide-react";
import { Hero } from "@/components/hero";
import { Section, SectionEyebrow, SectionHeading } from "@/components/section";
import { CapabilityCard } from "@/components/capability-card";
import { CtaBlock } from "@/components/cta-block";
import { Carousel } from "@/components/carousel";
import { pageSeo } from "@/lib/seo";
import heroImg from "@/assets/hero-product.jpg";

export const Route = createFileRoute("/product")({
  head: () =>
    pageSeo({
      title: "Product — Devctrl Policy Gateway",
      description:
        "Policy Gateway, Task-Based Access Control, and audit-grade logging for AI agents in regulated industries.",
      path: "/product",
      keywords:
        "AI policy gateway, task-based access control, AI audit logging, runtime AI enforcement, Devctrl product",
    }),
  component: ProductPage,
});

function ProductPage() {
  return (
    <>
      <Hero
        image={heroImg}
        alt="Devctrl Policy Gateway product visualization"
        eyebrow="The Platform"
        heading={<>The Gateway between <span className="text-mint">policy</span> and AI.</>}
        subheading="Devctrl sits in front of every AI agent request. It routes, inspects, permits, or blocks — enforcing your governance policy in real time."
        ctaLabel="Book a Demo"
      />
      <CorePillars />
      <DeepDive />
      <Capabilities />
      <CtaBlock />
    </>
  );
}

function CorePillars() {
  const items = [
    { icon: ShieldCheck, title: "Policy Gateway", description: "A single, deterministic enforcement point in front of every AI agent. Requests are evaluated against your policies before models, tools, or data are reached." },
    { icon: KeySquare, title: "Task-Based Access Control", description: "Permissions scoped to tasks, tools, and data classes — not just users. Give an agent exactly what a task requires, nothing more." },
    { icon: FileClock, title: "Audit & Compliance Logging", description: "Immutable, cryptographically verifiable logs of every prompt, tool call, and decision — mapped to AI Act and DORA reporting obligations." },
  ];
  return (
    <Section>
      <SectionEyebrow>Core Capabilities</SectionEyebrow>
      <SectionHeading>Three layers of enforcement.</SectionHeading>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {items.map((it, i) => <CapabilityCard key={it.title} {...it} index={i} />)}
      </div>
    </Section>
  );
}

function DeepDive() {
  const blocks = [
    {
      eyebrow: "Policy Gateway",
      title: "One control plane for every AI agent.",
      body: "Devctrl inspects each request an agent makes — model calls, tool invocations, data reads — and evaluates it against declarative, version-controlled policies. Requests that violate policy are blocked, redacted, or escalated. Nothing reaches production models without passing through the gate.",
      bullets: ["Declarative policy language", "Model & vendor agnostic", "Sub-millisecond evaluation", "Deploy on-prem or in-VPC"],
      icon: Network,
    },
    {
      eyebrow: "Task-Based Access Control",
      title: "Permission the task, not just the user.",
      body: "Traditional RBAC breaks when the actor is an autonomous agent chaining tools across systems. Task-Based Access Control scopes what an agent can do by the task it's executing — data classes it can read, tools it can call, actions it can commit — with automatic revocation on task completion.",
      bullets: ["Task-scoped ephemeral tokens", "Fine-grained tool permissions", "Data-class boundaries", "Human-in-the-loop escalation"],
      icon: Lock,
    },
    {
      eyebrow: "Audit & Compliance Logging",
      title: "Regulator-ready by default.",
      body: "Every decision the Gateway makes is logged — inputs, outputs, policy version, verdict — and structured for direct export into your compliance evidence chain. Aligned to AI Act Article 12 record-keeping and DORA ICT incident reporting requirements.",
      bullets: ["Immutable, append-only", "AI Act & DORA mappings", "SIEM & GRC integrations", "Cryptographic chain of custody"],
      icon: ScrollText,
    },
  ];
  return (
    <div className="bg-charcoal">
      {blocks.map((b, i) => (
        <section key={b.title} className={`border-b border-border py-24 md:py-32 ${i % 2 === 1 ? "bg-background" : ""}`}>
          <div className="container-devctrl grid gap-16 md:grid-cols-2 md:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-mint">
                <span className="h-px w-8 bg-mint" />
                {b.eyebrow}
              </div>
              <h3 className="font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">{b.title}</h3>
              <p className="mt-6 text-muted-foreground">{b.body}</p>
              <ul className="mt-8 space-y-3">
                {b.bullets.map((bl) => (
                  <li key={bl} className="flex items-center gap-3 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                    {bl}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative aspect-square rounded-3xl border border-border bg-background p-10 md:aspect-[4/3]"
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-mint/5 blur-2xl" />
              <div className="relative flex h-full flex-col items-center justify-center">
                <b.icon size={72} className="text-mint" strokeWidth={1.2} />
                <div className="mt-8 grid w-full grid-cols-3 gap-2">
                  {Array.from({ length: 9 }).map((_, k) => (
                    <div
                      key={k}
                      className={`h-2 rounded-full ${k === 4 ? "bg-mint" : "bg-border"}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
}

function Capabilities() {
  const items = [
    { icon: GitBranch, title: "Policy-as-Code", description: "Version, review, and roll out AI policies with the same rigor as production code." },
    { icon: Gauge, title: "Real-Time Enforcement", description: "Millisecond-level evaluation keeps agents fast while every request is checked." },
    { icon: Lock, title: "Data-Class Boundaries", description: "Prevent sensitive categories from leaving controlled contexts, at the request level." },
    { icon: FileClock, title: "Evidence-Grade Logs", description: "Structured records mapped directly to regulator evidence requests." },
  ];
  return (
    <Section>
      <SectionEyebrow>Capability Highlights</SectionEyebrow>
      <SectionHeading>Everything an enterprise AI program needs.</SectionHeading>
      <div className="mt-16">
        <Carousel>
          {items.map((it) => (
            <div key={it.title} className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-mint">
                <it.icon size={22} />
              </div>
              <h3 className="font-display text-xl font-semibold">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.description}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </Section>
  );
}