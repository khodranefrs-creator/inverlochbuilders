import Link from "next/link";
import type { Project } from "@/lib/data/projects";
import { WixImage } from "@/components/ui/WixImage";
import { ratioFromClass } from "@/lib/wix";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  ratio = "aspect-[4/3]",
  size,
  overlay = false,
  index,
}: {
  project: Project;
  ratio?: string;
  size?: "sm" | "md" | "lg";
  /** Cinematic treatment: project name + meta sit on the image itself. */
  overlay?: boolean;
  /** Editorial index numeral rendered inside the overlay (e.g. "01"). */
  index?: string;
}) {
  const nameClass =
    size === "lg"
      ? "display-lg"
      : size === "sm"
        ? "display-sm"
        : "text-[clamp(1.65rem,2.4vw,2.1rem)]";
  const isLg = size === "lg";

  return (
    <Link
      href={`/ourworks/${project.slug}`}
      className="group block"
      aria-label={`View ${project.name} — ${project.typeLabel}`}
    >
      <div className={cn("relative overflow-hidden", ratio)}>
        <WixImage
          src={project.hero.src}
          alt={project.hero.alt}
          width={isLg ? 1600 : 1100}
          ratio={ratioFromClass(ratio)}
          className="zoom-media wix-img absolute inset-0 h-full w-full object-cover"
        />

        {overlay ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent transition-colors duration-500 group-hover:via-ink/25" />
            {index && (
              <p className="absolute left-6 top-6 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-ivory/85 md:left-8 md:top-8">
                {index} / 05
              </p>
            )}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-6 md:p-8">
              <div>
                <p className="font-sans text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-ivory/70">
                  {project.typeLabel} · {project.location}
                </p>
                <h3 className={cn("mt-2 text-ivory", nameClass)}>{project.name}</h3>
              </div>
              <span
                aria-hidden="true"
                className="hidden shrink-0 font-display text-2xl text-ivory/90 transition-transform duration-300 group-hover:translate-x-1.5 sm:inline-block"
              >
                →
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
          </>
        )}
      </div>

      {!overlay && (
        <div className="mt-4 flex items-baseline justify-between">
          <div>
            <h3 className="font-display text-[1.6rem] tracking-tight text-ink md:text-3xl">
              {project.name}
            </h3>
            <p className="mt-1.5 font-sans text-[0.7rem] font-medium uppercase tracking-[0.2em] text-stone">
              {project.typeLabel} · {project.location}
            </p>
          </div>
          <span
            aria-hidden="true"
            className="font-sans text-stone transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink"
          >
            →
          </span>
        </div>
      )}
    </Link>
  );
}