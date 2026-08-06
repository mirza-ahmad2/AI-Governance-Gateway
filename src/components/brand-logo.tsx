import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

type BrandLogoProps = {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "h-7 w-7",
  md: "h-8 w-8",
  lg: "h-10 w-10",
} as const;

export function BrandLogo({
  className = "",
  showWordmark = true,
  size = "md",
}: BrandLogoProps) {
  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-2.5 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm ${className}`}
      aria-label="Devctrl home"
    >
      <img
        src={logo}
        alt="Devctrl logo"
        width={40}
        height={40}
        className={`${sizes[size]} object-contain transition-transform duration-300 group-hover:scale-105`}
        decoding="async"
      />
      {showWordmark && (
        <span className="font-display text-lg font-semibold tracking-tight">
          dev<span className="text-mint">ctrl</span>
        </span>
      )}
    </Link>
  );
}
