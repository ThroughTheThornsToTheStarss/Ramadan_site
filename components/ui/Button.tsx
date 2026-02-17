import { ReactNode, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

export function Button({
  children,
  variant = "primary",
  className = "",
  asChild,
  ...props
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const base =
    "inline-flex items-center justify-center rounded-[var(--radius-button)] font-semibold transition-all duration-smooth focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-primary text-white shadow-card hover:shadow-card-hover btn-hover px-6 py-3 text-base",
    secondary:
      "border border-white/80 bg-black/20 backdrop-blur-md text-white hover:bg-black/30 px-6 py-3 text-base",
    ghost:
      "text-[var(--text-dark)] hover:bg-black/5 px-4 py-2 text-base",
  };

  const styles = `${base} ${variants[variant]} ${className}`.trim();

  if (asChild && children != null && typeof children === "object" && "type" in children) {
    return (
      <div className={styles}>
        {children}
      </div>
    );
  }

  return (
    <button type="button" className={styles} {...props}>
      {children}
    </button>
  );
}

export function LinkButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-[var(--radius-button)] font-semibold transition-all duration-smooth focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-primary text-white shadow-card hover:shadow-card-hover btn-hover px-6 py-3 text-base",
    secondary:
      "border border-white/80 bg-black/20 backdrop-blur-md text-white hover:bg-black/30 px-6 py-3 text-base",
    ghost: "text-[var(--text-dark)] hover:bg-black/5 px-4 py-2 text-base",
  };

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`.trim()}
    >
      {children}
    </a>
  );
}
