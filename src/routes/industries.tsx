import { createFileRoute } from "@tanstack/react-router";
import { Landmark, Coins, Shield, HeartPulse, Building2, Scale } from "lucide-react";
import { Hero } from "@/components/hero";
import { Section, SectionEyebrow, SectionHeading } from "@/components/section";
import { Carousel } from "@/components/carousel";
import { CtaBlock } from "@/components/cta-block";
import { pageSeo } from "@/lib/seo";
import heroImg from "@/assets/hero-industries.jpg";

export const Route = createFileRoute("/industries")({
  head: () =>
    pageSeo({
      title: "Industries — AI Governance for Regulated Sectors | Devctrl",
      description:
        "Devctrl for Payment & Banking, Insurance, Asset Management, Healthcare, and every regulated industry deploying AI agents.",
      path: "/industries",
      keywords:
        "AI governance banking, insurance AI compliance, healthcare AI governance, fintech AI policy, regulated industries",
    }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <Hero
        image={heroImg}
        alt="Regulated industry sectors served by Devctrl AI governance"
        eyebrow="Industries"
        heading={<>Built where the <span className="text-mint">regulator</span> pays attention.</>}
        subheading="Devctrl is designed for organizations where AI misuse is not a support ticket — it's a supervisory finding."
        ctaLabel="Book a Demo"
      />

      <Section>
        <SectionEyebrow>Primary Vertical</SectionEyebrow>
        <SectionHeading>Payment & Banking.</SectionHeading>
        <div className="mt-12 grid gap-12 md:grid-cols-2 md:items-start">
          <div className="space-y-4 text-muted-foreground">
            <p className="text-lg text-foreground/90">
              GenAI is entering the payment stack — from customer operations to fraud, dispute handling, and internal treasury. Every one of those workflows sits under a supervisor.
            </p>
            <p>
              Devctrl was built with — and is actively presented alongside — the German fintech ecosystem: Payment Exchange (PEX), Banking Exchange (BEX), and KI Exchange (KEX). It is the compliance layer payment and banking teams can put in front of their AI agents without asking their AI vendors permission.
            </p>
            <p>
              Result: AI agents that move faster than a bank's change-management process, but never faster than its compliance boundary.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="text-xs uppercase tracking-widest text-mint">Use cases</div>
            <ul className="mt-6 space-y-4 text-sm">
              {[
                "Customer service AI agents with enforced data-class boundaries",
                "Fraud & dispute triage with human-in-the-loop escalation",
                "Internal knowledge agents scoped to permitted data rooms",
                "Model-vendor routing with per-jurisdiction policy",
              ].map((u) => (
                <li key={u} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-mint" />
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section alt>
        <SectionEyebrow>Broader Applicability</SectionEyebrow>
        <SectionHeading>Every regulated industry has an AI governance gap.</SectionHeading>
        <div className="mt-16">
          <Carousel>
            {[
              { icon: Landmark, title: "Payment & Banking", body: "AI Act + DORA + national supervisory expectations." },
              { icon: Coins, title: "Insurance", body: "Governed underwriting, claims, and customer AI." },
              { icon: Shield, title: "Asset Management", body: "Controlled AI in research, trading support, and reporting." },
              { icon: HeartPulse, title: "Healthcare", body: "Data-class enforcement for clinical and patient contexts." },
              { icon: Building2, title: "Critical Infrastructure", body: "Operational resilience for AI in essential services." },
              { icon: Scale, title: "Legal & Public Sector", body: "Accountable AI where every decision is on record." },
            ].map((it) => (
              <div key={it.title} className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-mint">
                  <it.icon size={22} />
                </div>
                <h3 className="font-display text-xl font-semibold">{it.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </Section>
      <CtaBlock />
    </>
  );
}