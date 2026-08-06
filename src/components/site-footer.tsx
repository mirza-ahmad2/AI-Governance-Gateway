import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, Share2 } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";

const NAV_LINKS = [
  ["/", "Home"],
  ["/product", "Product"],
  ["/compliance", "Compliance"],
  ["/industries", "Industries"],
  ["/about", "About"],
  ["/contact", "Contact"],
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-devctrl py-14 md:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <BrandLogo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              The Compliance & Governance Gateway for policy-conformant AI agents.
              Built in Hamburg for regulated industries.
            </p>
          </div>
          <div>
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground/70">
              Navigate
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-muted-foreground transition-colors duration-200 hover:text-mint focus-visible:outline-none focus-visible:text-mint"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground/70">
              Connect
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/company/devctrlai/home/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors duration-200 hover:text-mint focus-visible:outline-none focus-visible:text-mint"
                  aria-label="Devctrl on LinkedIn"
                >
                  <Linkedin size={16} aria-hidden="true" /> LinkedIn
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 text-muted-foreground">
                  <Mail size={16} aria-hidden="true" /> Add Here
                </span>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 text-muted-foreground">
                  <Share2 size={16} aria-hidden="true" /> Add Here
                </span>
              </li>
              <li className="text-muted-foreground">Hamburg, Germany</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Devctrl. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            This website is powered by{" "}
            <a
              href="https://theinnovations.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground transition-colors hover:text-mint focus-visible:outline-none focus-visible:text-mint"
            >
              The Innovations
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
