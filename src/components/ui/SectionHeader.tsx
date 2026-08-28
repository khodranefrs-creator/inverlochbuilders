import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  muted = false,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  muted?: boolean;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 eyebrow-label",
        muted && "eyebrow-label-muted",
        tone === "dark" && "text-ivory/60",
        className
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "inline-block h-px w-10",
          tone === "dark" ? "bg-ivory/40" : "bg-bronze"
        )}
      />
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  tone = "light",
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Eyebrow
          muted
          tone={tone}
          className={cn(align === "center" && "justify-center")}
        >
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={cn(
          "display-md mt-5",
          tone === "dark" ? "text-ivory" : "text-ink"
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "lede mt-6",
            tone === "dark" ? "text-ivory/70" : "text-ash"
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}