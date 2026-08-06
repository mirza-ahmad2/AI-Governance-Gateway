import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin, Share2 } from "lucide-react";
import { Hero } from "@/components/hero";
import { EnquiryForm } from "@/components/enquiry-form";
import { pageSeo } from "@/lib/seo";
import heroImg from "@/assets/hero-contact.jpg";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageSeo({
      title: "Contact — Book a Devctrl Demo",
      description:
        "Request a Devctrl demo. Book time with our team to see policy-conformant AI enforcement in action.",
      path: "/contact",
      keywords:
        "Devctrl demo, AI governance demo, book demo, contact Devctrl, AI compliance consultation",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Hero
        image={heroImg}
        alt="Abstract dark workspace for Devctrl contact and demo requests"
        eyebrow="Contact"
        heading={
          <>
            Let's <span className="text-mint">talk</span>.
          </>
        }
        subheading="Tell us about your AI governance stack. We'll show you what Devctrl enforces at runtime."
        overlay="bg-background/80"
        minHeight="min-h-[70vh]"
      />
      <section className="bg-background pb-24 md:pb-32" aria-labelledby="contact-form-heading">
        <h2 id="contact-form-heading" className="sr-only">
          Contact form and details
        </h2>
        <div className="container-devctrl grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start lg:gap-12">
          <EnquiryForm />
          <div className="space-y-6">
            <aside className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-mint/25 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] sm:p-8">
              <h3 className="text-xs uppercase tracking-widest text-mint">Direct</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-mint" aria-hidden="true" />
                  <span>Add Here</span>
                </li>
                <li className="flex items-center gap-3">
                  <Linkedin size={16} className="shrink-0 text-mint" aria-hidden="true" />
                  <a
                    href="https://www.linkedin.com/company/devctrlai/home/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-mint focus-visible:outline-none focus-visible:text-mint"
                  >
                    Devctrl on LinkedIn
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Share2 size={16} className="shrink-0 text-mint" aria-hidden="true" />
                  <span>Add Here</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={16} className="shrink-0 text-mint" aria-hidden="true" />
                  Hamburg, Germany
                </li>
              </ul>
            </aside>
            <aside className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-mint/25 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] sm:p-8">
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground">Who we speak with</h3>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li>— Chief Compliance Officers</li>
                <li>— Heads of AI Governance</li>
                <li>— CISOs & Data Protection Officers</li>
                <li>— CTOs deploying AI agents in regulated stacks</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
