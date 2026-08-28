import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow, SectionHeader } from "@/components/ui/SectionHeader";
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
            intro="A selection of custom homes and renovations designed around the way our clients live — and built to outlive trends."
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

        {/* Featured — Fern */}
        <div className="mt-16 grid gap-x-10 gap-y-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <ProjectCard
              project={fern}
              ratio="aspect-[4/3] lg:aspect-[7/5]"
              size="lg"
              overlay
            />
          </Reveal>

          <div className="flex flex-col justify-between gap-14 lg:col-span-5">
            <Reveal delay={120}>
              <p className="eyebrow-label mt-2 lg:mt-10">Featured project</p>
              <p className="display-md mt-4 text-ink">
                {fern.tagline}
              </p>
              <p className="body-copy mt-5 line-clamp-4">
                {fern.description[0]}
              </p>
              <Link
                href={`/${fern.slug}`}
                className="line-link mt-6 inline-flex items-center gap-2 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-ink"
              >
                View Project →
              </Link>
            </Reveal>
            <Reveal delay={200}>
              <ProjectCard
                project={cutriss}
                ratio="aspect-[16/10]"
                size="md"
              />
            </Reveal>
          </div>
        </div>

        {/* Strip of three */}
        <div className="mt-6 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal className="lg:mt-20" delay={0}>
            <ProjectCard project={sandymount} ratio="aspect-[4/5]" />
          </Reveal>
          <Reveal delay={100}>
            <ProjectCard project={johnflagg} ratio="aspect-[4/5]" />
          </Reveal>
          <Reveal className="lg:mt-20" delay={200}>
            <ProjectCard
              project={casuarina}
              ratio="aspect-[4/5]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}