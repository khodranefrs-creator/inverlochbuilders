import Link from "next/link";
import { cn } from "@/lib/utils";
import { brandConfig } from "@/lib/data/brand";

export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label={`${brandConfig.name} — home`}
      className={cn("group inline-flex flex-col leading-none", className)}
    >
      <span
        className={cn(
          "font-display text-[1.18rem] font-semibold tracking-tight uppercase transition-colors",
          tone === "light" ? "text-ivory" : "text-ink"
        )}
      >
        {brandConfig.shortName.split(" ")[0]}
      </span>
      <span
        className={cn(
          "mt-1 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.42em] transition-colors",
          tone === "light" ? "text-ivory/70" : "text-ash"
        )}
      >
        Builders
      </span>
    </Link>
  );
}