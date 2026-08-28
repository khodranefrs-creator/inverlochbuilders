import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "light" | "outline-light";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

const styles: Record<Variant, string> = {
  primary: "bg-ink text-ivory hover:bg-charcoal",
  outline:
    "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-ivory",
  "outline-light":
    "border border-ivory/35 text-ivory hover:border-ivory hover:bg-ivory hover:text-ink",
  ghost: "text-ink",
  light: "bg-ivory text-ink hover:bg-parchment",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: ButtonLinkProps) {
  const classes = cn(
    "group/btn inline-flex items-center justify-center gap-3 px-8 py-4",
    "font-sans text-[0.725rem] font-semibold uppercase tracking-[0.22em]",
    "transition-colors duration-300 select-none",
    styles[variant],
    className
  );
  const inner = (
    <>
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-300 ease-out group-hover/btn:translate-x-1"
      >
        →
      </span>
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}

export function ArrowLink({
  href,
  children,
  className,
  external = false,
  underline = true,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  underline?: boolean;
}) {
  const classes = cn(
    "inline-flex items-center gap-2 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-ink",
    underline && "line-link",
    className
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
        <span aria-hidden="true">→</span>
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}