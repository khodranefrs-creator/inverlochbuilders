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
}: {
  project: Project;
  ratio?: string;
  size?: "sm" | "md" | "lg";
  overlay?: boolean;
}) {
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
          width={size === "lg" ? 1600 : 1100}
          ratio={ratioFromClass(ratio)}
          className="zoom-media wix-img absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
        {overlay && (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent p-6 pt-16">
            <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-ivory/75">
              {project.typeLabel} · {project.location}
            </p>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-baseline justify-between">
        <div>
          <h3 className="font-display text-2xl tracking-tight text-ink">
            {project.name}
          </h3>
          {!overlay && (
            <p className="mt-1 font-sans text-[0.66rem] font-medium uppercase tracking-[0.2em] text-stone">
              {project.typeLabel} · {project.location}
            </p>
          )}
        </div>
        <span
          aria-hidden="true"
          className="font-sans text-stone transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink"
        >
          →
        </span>
      </div>
    </Link>
  );
}