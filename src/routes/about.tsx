import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShieldCheck, Scale, Cpu, Award } from "lucide-react";
import { Hero } from "@/components/hero";
import { Section, SectionEyebrow, SectionHeading } from "@/components/section";
import { CtaBlock } from "@/components/cta-block";
import { pageSeo } from "@/lib/seo";
import heroImg from "@/assets/hero-about.jpg";

export const Route = createFileRoute("/about")({
  head: () =>
    pageSeo({
      title: "About — Devctrl | Founded in Hamburg",
      description:
        "Devctrl is founded by Max Schwarz (ex-Ruuky) and Lisa Katzmann in Hamburg to close the AI governance enforcement gap for regulated industries.",
      path: "/about",
      keywords: "Devctrl founders, Hamburg AI governance, Max Schwarz, Lisa Katzmann, AI compliance company",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Hero
        image={heroImg}
        alt="Hamburg skyline atmosphere representing Devctrl headquarters"
        eyebrow="About"
        heading={<>Hamburg. Fintech. <span className="text-mint">Enforcement.</span></>}
        subheading="Founded in January 2026 by Max Schwarz and Lisa Katzmann to build the AI governance infrastructure regulated industries have been asking for."
        ctaLabel="Book a Demo"
      />

      <Section>
        <div className="grid gap-16 md:grid-cols-[1fr_1.4fr] md:items-start">
          <div>
            <SectionEyebrow>The Founders</SectionEyebrow>
            <SectionHeading>Built by operators from the fintech trenches.</SectionHeading>
          </div>
          <div className="space-y-8 text-muted-foreground">
            <div>
              <div className="text-xs uppercase tracking-widest text-mint">Max Schwarz</div>
              <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">Co-Founder & CEO</h3>
              <p className="mt-4 leading-relaxed">
                Previously Founder & CMO of Ruuky, a fintech building teenager banking products — acquired after scaling in a heavily regulated market. Interim CMO across early-stage fintech and regular speaker/panelist at the German industry's flagship events: Payment Exchange, Banking Exchange, and KI Exchange (hosted by Payment & Banking).
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-mint">Lisa Katzmann</div>
              <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">Co-Founder & COO</h3>
              <p className="mt-4 leading-relaxed">
                Operations lead for Devctrl — building the delivery, customer, and go-to-market engine that regulated enterprise customers demand from a compliance-critical vendor.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="mx-auto max-w-3xl">
          <SectionEyebrow>The Story</SectionEyebrow>
          <SectionHeading>Why we started Devctrl.</SectionHeading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              After years inside payment and banking — building consumer fintech, advising early-stage teams, and sitting on industry panels — we watched every conversation about enterprise AI end the same way.
            </p>
            <p className="text-foreground/90">
              A committee had written the policy. A vendor had promised the model. Nobody could tell you what would happen when the agent actually ran.
            </p>
            <p>
              Devctrl is our answer. Not a framework, not another audit report — the runtime control plane that makes AI governance real. Built in Hamburg for the industries the regulator will read about first.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionEyebrow>Values</SectionEyebrow>
        <SectionHeading>How we build.</SectionHeading>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, title: "Enforcement over documentation", body: "Every governance claim we make is enforced at runtime — or we don't make it." },
            { icon: Scale, title: "Regulated-industry first", body: "We build for organizations that answer to supervisors, not consumer trends." },
            { icon: Cpu, title: "Infrastructure-grade reliability", body: "Predictable, observable, and versioned — like the systems our customers already trust." },
            { icon: Award, title: "Founder-led fintech credibility", body: "We've built and sold in this market. We show up personally." },
          ].map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-8"
            >
              <v.icon size={22} className="text-mint" />
              <h3 className="mt-6 font-display text-lg font-semibold">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </motion.div>
          ))}
        </div>
      </Section>
      <CtaBlock />
    </>
  );
}