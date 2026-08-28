import Link from "next/link";
import type { Project } from "@/lib/data/projects";
import { WixImage } from "@/components/ui/WixImage";
import { cn } from "@/lib/utils";

function Panel({
  project,
  label,
  align,
}: {
  project: Project;
  label: string;
  align: "prev" | "next";
}) {
  return (
    <Link
      href={`/ourworks/${project.slug}`}
      className="group relative flex min-h-[52svh] items-end overflow-hidden md:min-h-[68svh]"
    >
      <WixImage
        src={project.hero.src}
        alt={project.hero.alt}
        width={1600}
        ratio="4/5"
        eager={false}
        className="wix-img absolute inset-0 h-full w-full object-cover"
      />
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/5 transition-opacity duration-500",
          "group-hover:from-ink/65 group-hover:via-ink/15 group-hover:to-ink/0"
        )}
      />
      {/* subtle outer frame on hover */}
      <div className="pointer-events-none absolute inset-4 border border-ivory/20 transition-opacity duration-500 group-hover:opacity-100 md:opacity-0" />

      <div
        className={cn(
          "relative z-10 flex w-full items-end justify-between gap-6 px-8 pb-12 pt-24 md:px-20 md:pb-16",
          align === "next" && "md:flex-row-reverse"
        )}
      >
        <div className={cn(align === "next" && "md:text-right")}>
          <p className="flex items-center gap-3 font-sans text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-ivory/65">
            <span
              aria-hidden="true"
              className={cn(
                "inline-block h-px w-8 bg-ivory/50 transition-transform duration-300",
                align === "prev"
                  ? "group-hover:-translate-x-1"
                  : "group-hover:translate-x-1"
              )}
            />
            {label}
          </p>
          <p className="display-md mt-4 text-ivory">{project.name}</p>
          <p className="mt-2 font-sans text-[0.66rem] font-medium uppercase tracking-[0.22em] text-ivory/70">
            {project.typeLabel} — {project.location}
          </p>
        </div>
        <span
          aria-hidden="true"
          className={cn(
            "hidden font-display text-3xl text-ivory transition-transform duration-300 md:inline-block",
            align === "prev"
              ? "group-hover:-translate-x-2"
              : "group-hover:translate-x-2"
          )}
        >
          {align === "prev" ? "⟵" : "⟶"}
        </span>
      </div>
    </Link>
  );
}

export function ProjectNavigation({
  previous,
  next,
}: {
  previous: Project;
  next: Project;
}) {
  return (
    <section className="bg-ivory">
      <div className="grid gap-px bg-line md:grid-cols-2">
        <Panel project={previous} label="Previous Project" align="prev" />
        <Panel project={next} label="Next Project" align="next" />
      </div>
    </section>
  );
}