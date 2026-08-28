import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { projects } from "@/lib/data/projects";

export function SelectedProjects() {
  const [fern, cutriss, sandymount, johnflagg, casuarina] = projects;

  return (
    <section className="bg-parchment py-24 md:py-36">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Selected Work"
            title={
              <>
                Homes that speak
                <br />
                <span className="italic">for themselves.</span>
              </>
            }
            intro="A selection of custom homes, renovations and extensions — designed around the way our clients live, and built to outlive trends."
          />
          <Reveal className="shrink-0">
            <Link
              href="/ourworks"
              className="line-link font-sans text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-ink"
            >
              View All Projects →
            </Link>
          </Reveal>
        </div>

        {/* Featured — Fern, photographic */}
        <div className="mt-20 grid gap-x-10 gap-y-16 lg:grid-cols-12 lg:gap-y-24">
          <Reveal className="lg:col-span-7">
            <ProjectCard
              project={fern}
              ratio="aspect-[4/3] lg:aspect-[16/10]"
              size="lg"
              overlay
              index="01"
            />
          </Reveal>

          <div className="flex flex-col justify-between gap-16 lg:col-span-5 lg:gap-24">
            <Reveal delay={100}>
              <p className="eyebrow-label mt-2 lg:mt-6">Featured project</p>
              <p className="display-md mt-4 text-ink">{fern.tagline}</p>
              <p className="body-copy mt-5 line-clamp-4">{fern.description[0]}</p>
              <Link
                href={`/ourworks/${fern.slug}`}
                className="line-link mt-7 inline-flex items-center gap-2 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-ink"
              >
                View Project →
              </Link>
            </Reveal>
            <Reveal delay={180}>
              <ProjectCard
                project={cutriss}
                ratio="aspect-[16/10]"
                size="md"
                overlay
                index="02"
              />
            </Reveal>
          </div>
        </div>

        {/* Strip of three — editorial index */}
        <div className="mt-20 grid gap-x-12 gap-y-16 sm:grid-cols-3 lg:mt-28">
          <Reveal className="sm:mt-16" delay={0}>
            <ProjectCard
              project={sandymount}
              ratio="aspect-[4/5]"
              overlay
              index="03"
            />
          </Reveal>
          <Reveal delay={100}>
            <ProjectCard
              project={johnflagg}
              ratio="aspect-[4/5]"
              overlay
              index="04"
            />
          </Reveal>
          <Reveal className="sm:mt-16" delay={200}>
            <ProjectCard project={casuarina} ratio="aspect-[4/5]" overlay index="05" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}