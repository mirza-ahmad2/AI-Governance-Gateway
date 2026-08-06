import { useState, type FormEvent } from "react";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const INDUSTRIES = [
  "Payment & Banking",
  "Insurance",
  "Asset Management",
  "Fintech",
  "Healthcare",
  "Public Sector",
  "Other",
];

export function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [industry, setIndustry] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!industry) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-mint/40 bg-card p-8 text-center shadow-[0_0_40px_rgba(54,211,153,0.08)] md:p-10"
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-mint text-primary-foreground">
          <Check size={22} aria-hidden="true" />
        </div>
        <h3 className="mt-6 font-display text-2xl font-semibold">Request received.</h3>
        <p className="mt-2 text-muted-foreground">
          A member of the Devctrl team will be in touch within one business day.
        </p>
      </motion.div>
    );
  }

  const field =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all duration-200 hover:border-border/80 focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/25";

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-2xl border border-border bg-card p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:p-8 md:p-10"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="enquiry-name" className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
            Name
          </label>
          <input
            id="enquiry-name"
            name="name"
            required
            autoComplete="name"
            className={field}
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="enquiry-company" className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
            Company
          </label>
          <input
            id="enquiry-company"
            name="company"
            required
            autoComplete="organization"
            className={field}
            placeholder="Acme Bank"
          />
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="enquiry-industry" className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
            Industry
          </label>
          <Select value={industry || undefined} onValueChange={setIndustry}>
            <SelectTrigger
              id="enquiry-industry"
              aria-label="Select industry"
              className="h-auto w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-none transition-all duration-200 hover:border-border/80 focus:ring-2 focus:ring-mint/25 focus:ring-offset-0 data-[placeholder]:text-muted-foreground/60 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:shrink-0 [&>svg]:opacity-70 [&>svg]:text-mint"
            >
              <SelectValue placeholder="Select industry" />
            </SelectTrigger>
            <SelectContent
              className="rounded-xl border border-border bg-card text-foreground shadow-[0_16px_40px_rgba(0,0,0,0.45)]"
              position="popper"
            >
              {INDUSTRIES.map((i) => (
                <SelectItem
                  key={i}
                  value={i}
                  className="cursor-pointer rounded-lg py-2.5 pl-3 pr-8 text-sm text-foreground focus:bg-mint/15 focus:text-mint data-[highlighted]:bg-mint/15 data-[highlighted]:text-mint"
                >
                  {i}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <input type="hidden" name="industry" value={industry} required />
        </div>
        <div>
          <label htmlFor="enquiry-role" className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
            Role
          </label>
          <input
            id="enquiry-role"
            name="role"
            required
            autoComplete="organization-title"
            className={field}
            placeholder="Chief Compliance Officer"
          />
        </div>
      </div>
      <div>
        <label htmlFor="enquiry-message" className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
          Message
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          required
          rows={5}
          className={`${field} min-h-[120px] resize-y`}
          placeholder="Tell us about your AI governance requirements."
        />
      </div>
      <button
        type="submit"
        className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-mint px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(54,211,153,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/50 focus-visible:ring-offset-2 focus-visible:ring-offset-card active:scale-[0.98]"
      >
        Request Demo
        <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
      </button>
    </form>
  );
}
