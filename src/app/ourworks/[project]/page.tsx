import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { WixImage } from "@/components/ui/WixImage";
import { ArrowLink } from "@/components/ui/ButtonLink";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { ProjectNavigation } from "@/components/sections/ProjectNavigation";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { projects, getProject } from "@/lib/data/projects";
import { getLocation } from "@/lib/data/locations";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ project: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ project: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { project } = await params;
  const p = getProject(project);
  if (!p) return {};
  return buildMetadata({
    slug: `/ourworks/${p.slug}`,
    title: `${p.name} — ${p.typeLabel} in ${p.location}, Victoria`,
    description: p.tagline,
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { project } = await params;
  const p = getProject(project);
  if (!p) notFound();

  const idx = projects.findIndex((x) => x.slug === p.slug);
  const previous = projects[(idx - 1 + projects.length) % projects.length]!;
  const next = projects[(idx + 1) % projects.length]!;
  const location = p.locationSlug ? getLocation(p.locationSlug) : undefined;

  const metaLine = [p.location, "Victoria", p.typeLabel].join("  ·  ");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", item: "/" },
              { name: "Our Work", item: "/ourworks" },
              { name: p.name, item: `/ourworks/${p.slug}` },
            ])
          ),
        }}
      />

      {/* Cinematic hero */}
      <section className="relative flex min-h-[86svh] flex-col justify-end overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <WixImage
            src={p.hero.src}
            alt={p.hero.alt}
            width={2200}
            ratio="21/9"
            eager
            className="wix-img is-eager absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-transparent" />
        </div>

        <Container className="relative z-10 pt-48 pb-14 md:pb-20">
          <p className="hero-fade hero-fade-1 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-ivory/70">
            {metaLine}
          </p>
          <h1 className="hero-fade hero-fade-2 display-xl mt-6 text-ivory">{p.name}</h1>
          <p className="hero-fade hero-fade-3 lede mt-6 max-w-xl text-ivory/80">{p.tagline}</p>
          <div className="hero-fade hero-fade-4 mt-12 flex items-center gap-4">
            <span
              aria-hidden="true"
              className="scroll-cue inline-block h-10 w-px bg-ivory/50"
            />
            <span className="font-sans text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-ivory/60">
              The tour begins
            </span>
          </div>
        </Container>
      </section>

      {/* The project — editorial intro + facts */}
      <section className="bg-ivory py-24 md:py-36">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <p className="eyebrow-label">The project</p>
                <p className="display-xl mt-5 text-ink">{p.name}</p>
                <p className="mt-3 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-stone">
                  {metaLine}
                </p>

                <dl className="mt-10 divide-y divide-line border-y border-line">
                  {p.detail.map((d) => (
                    <div key={d.label} className="flex items-baseline justify-between gap-6 py-4">
                      <dt className="font-sans text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-stone">
                        {d.label}
                      </dt>
                      <dd className="text-right font-display text-lg text-ink">
                        {d.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                {location && (
                  <div className="mt-8 border-t border-line pt-8">
                    <p className="font-sans text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-stone">
                      Building in {location.area}
                    </p>
                    <div className="mt-3">
                      <ArrowLink href={`/${location.slug}`}>
                        Discover {location.area}
                      </ArrowLink>
                    </div>
                  </div>
                )}

                <div className="mt-8">
                  <ArrowLink href="/contactus">Start Something Similar</ArrowLink>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <Reveal>
                <p className="lede max-w-2xl text-ink/90 first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.75] first-letter:text-clay">
                  {p.description[0]}
                </p>
              </Reveal>
              {p.description.length > 1 && (
                <div className="mt-8 space-y-6">
                  {p.description.slice(1).map((d, i) => (
                    <Reveal key={i} delay={60}>
                      <p className="body-copy max-w-2xl">{d}</p>
                    </Reveal>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Sequenced gallery tour */}
      <section
        className={cn(
          "py-24 md:py-32",
          p.gallery.length > 3 ? "bg-parchment" : "bg-ivory"
        )}
      >
        <Container>
          <SectionHeader
            eyebrow="The tour"
            title={
              <>
                A closer look at
                <br />
                <span className="italic text-clay">{p.name}.</span>
              </>
            }
          />
        </Container>
        <div className="mt-14 md:mt-20">
          <ProjectGallery images={p.gallery} />
        </div>
      </section>

      {/* Prev / Next */}
      <ProjectNavigation previous={previous} next={next} />

      <CTASection
        heading="Ready to Build Better?"
        intro={`Homes like ${p.name} begin with one conversation. Book a free discovery call — we'll show you what's possible on your site.`}
      />
    </>
  );
}