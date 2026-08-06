import { createFileRoute } from "@tanstack/react-router";
import { Scale, ShieldAlert, FileCheck2, GitCompareArrows } from "lucide-react";
import { Hero } from "@/components/hero";
import { Section, SectionEyebrow, SectionHeading } from "@/components/section";
import { StatCallout } from "@/components/stat-callout";
import { CtaBlock } from "@/components/cta-block";
import { pageSeo } from "@/lib/seo";
import heroImg from "@/assets/hero-compliance.jpg";

export const Route = createFileRoute("/compliance")({
  head: () =>
    pageSeo({
      title: "Compliance & Regulation — EU AI Act & DORA | Devctrl",
      description:
        "How Devctrl aligns to the EU AI Act and DORA — turning AI governance from documentation into enforceable runtime control.",
      path: "/compliance",
      keywords: "EU AI Act compliance, DORA AI governance, AI regulation enforcement, Devctrl compliance",
    }),
  component: CompliancePage,
});

function CompliancePage() {
  return (
    <>
      <Hero
        image={heroImg}
        alt="Regulatory compliance visual for EU AI Act and DORA enforcement"
        eyebrow="Compliance & Regulation"
        heading={<>Regulation, <span className="text-mint">enforced</span> in production.</>}
        subheading="Devctrl aligns directly to the EU AI Act and DORA — closing the gap between the policy your legal team writes and what your AI agents actually do."
        ctaLabel="Book a Demo"
        overlay="bg-background/75"
      />

      <Section>
        <div className="grid gap-16 md:grid-cols-2 md:items-start">
          <div>
            <SectionEyebrow>EU AI Act</SectionEyebrow>
            <SectionHeading>Runtime controls for a risk-based regime.</SectionHeading>
            <p className="mt-6 text-muted-foreground">
              The EU AI Act classifies AI systems by risk and imposes concrete obligations on providers and deployers — from transparency and human oversight to record-keeping and post-market monitoring. Most obligations become fully applicable in 2026.
            </p>
            <p className="mt-4 text-muted-foreground">
              Devctrl operationalizes these obligations at the point of use: every AI agent decision passes through policies that reflect your risk classification, oversight requirements, and prohibited-use boundaries.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              { icon: Scale, title: "Art. 9 — Risk Management", body: "Encode risk controls as policies enforced on every request." },
              { icon: FileCheck2, title: "Art. 12 — Record-Keeping", body: "Immutable audit logs capturing inputs, outputs, and policy verdicts." },
              { icon: ShieldAlert, title: "Art. 14 — Human Oversight", body: "Escalate policy-defined actions to human reviewers before execution." },
              { icon: GitCompareArrows, title: "Art. 15 — Accuracy & Robustness", body: "Version, test, and roll back policies with production-grade discipline." },
            ].map((it) => (
              <li key={it.title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-background text-mint">
                  <it.icon size={18} />
                </div>
                <div>
                  <div className="font-medium">{it.title}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{it.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <StatCallout text="Policy on paper is not compliance. Runtime enforcement is." />

      <Section alt>
        <div className="grid gap-16 md:grid-cols-2 md:items-start">
          <div>
            <SectionEyebrow>DORA</SectionEyebrow>
            <SectionHeading>Operational resilience for AI in financial services.</SectionHeading>
            <p className="mt-6 text-muted-foreground">
              The Digital Operational Resilience Act holds financial entities accountable for the ICT systems they operate — including AI systems and third-party model providers. Boards are on the hook for AI-related incidents, concentration risk, and third-party dependency.
            </p>
            <p className="mt-4 text-muted-foreground">
              Devctrl gives financial-sector deployers a dedicated control plane for AI agent traffic: enforced boundaries, vendor-agnostic routing, and incident-ready telemetry.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              { title: "Third-party model risk", body: "Vendor-agnostic routing, per-model policy, and controlled fallback." },
              { title: "Incident detection & reporting", body: "Structured telemetry aligned to DORA ICT incident reporting timelines." },
              { title: "Testing & resilience", body: "Policy versioning and staged rollout for controlled change management." },
              { title: "Concentration risk", body: "Visibility and enforcement across every model provider in production." },
            ].map((it) => (
              <li key={it.title} className="rounded-xl border border-border bg-card p-5">
                <div className="font-medium">{it.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{it.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-4xl text-center">
          <SectionEyebrow>The Gap Devctrl Closes</SectionEyebrow>
          <SectionHeading className="mx-auto">Documentation is not enforcement.</SectionHeading>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Policy documents describe intent. Governance committees describe accountability. Neither prevents an AI agent from calling a tool it shouldn't. Devctrl is the runtime layer that turns intent into control.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8 text-left">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Without Devctrl</div>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>— AI policy lives in PDFs and wikis</li>
                <li>— Enforcement depends on developer discretion</li>
                <li>— Audit evidence is reconstructed after the fact</li>
                <li>— Every model vendor becomes a shadow control plane</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-mint/40 bg-card p-8 text-left">
              <div className="text-xs uppercase tracking-widest text-mint">With Devctrl</div>
              <ul className="mt-4 space-y-3 text-sm">
                <li>— Policies are code, versioned and tested</li>
                <li>— Enforcement is deterministic, per request</li>
                <li>— Audit evidence is generated by default</li>
                <li>— One control plane across every model and vendor</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      <CtaBlock />
    </>
  );
}