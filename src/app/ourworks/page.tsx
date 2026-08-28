import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { WixImage } from "@/components/ui/WixImage";
import { ButtonLink, ArrowLink } from "@/components/ui/ButtonLink";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { projects } from "@/lib/data/projects";
import type { Project } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  slug: "/ourworks",
  title: "Our Work — Custom Home Builds & Renovations",
  description:
    "A journal of homes by Inverloch Builders — from Fern to Cutriss, Sandy Mount, John Flagg Rise and our coastal homes near Wilsons Promontory.",
});

const JOURNAL_BG = ["bg-ivory", "bg-parchment"];

function Meta({ project, tone = "light" }: { project: Project; tone?: "light" | "dark" }) {
  return (
    <p
      className={cn(
        "font-sans text-[0.66rem] font-semibold uppercase tracking-[0.26em]",
        tone === "dark" ? "text-ivory/70" : "text-stone"
      )}
    >
      {project.typeLabel} · {project.location} · Victoria
    </p>
  );
}

function ViewLink({
  href,
  children,
  tone = "light",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  const cls =
    tone === "dark"
      ? "font-sans text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-ivory"
      : "font-sans text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-ink";
  return (
    <Link href={href} className={cn("group/btn inline-flex items-center gap-3", cls)}>
      <span className="line-link">{children}</span>
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover/btn:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}

export default function OurWorkPage() {
  const [fern, cutriss, sandymount, johnflagg, casuarina] = projects;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", item: "/" },
              { name: "Our Work", item: "/ourworks" },
            ])
          ),
        }}
      />
      <PageHero
        eyebrow="Portfolio — A journal"
        title={
          <>
            Homes we're proud of,
            <br />
            <span className="italic text-clay">told properly.</span>
          </>
        }
        intro="Five projects — each a study in material, light and the decisions behind them. Take the tour."
        image={{
          src: "c86e57_22bca1758a994e498c08fee96384a6f4~mv2.jpg",
          alt: "Recently completed custom home by Inverloch Builders",
        }}
      />

      {/* Journal index */}
      <section className="bg-ivory pt-12">
        <Container>
          <Reveal>
            <div className="border-t border-line">
              {projects.map((p, i) => (
                <a
                  key={p.slug}
                  href={`#${p.slug}`}
                  className="group grid grid-cols-12 items-baseline gap-2 border-b border-line py-5"
                >
                  <span className="col-span-2 font-sans text-[0.66rem] font-semibold tracking-[0.24em] text-stone md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="col-span-7 font-display text-2xl tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-2 md:col-span-3 md:text-3xl">
                    {p.name}
                  </span>
                  <span className="hidden font-sans text-[0.62rem] font-medium uppercase tracking-[0.22em] text-stone md:col-span-4 md:block">
                    {p.location} — {p.typeLabel}
                  </span>
                  <span className="col-span-3 text-right font-sans text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-clay opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:col-span-4">
                    Read →
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 01 — FEATURED · FERN */}
      <section id="fern" className="scroll-mt-24 bg-ivory pb-24 pt-16 md:pb-32">
        <Container>
          <div className="flex items-baseline justify-between">
            <p className="eyebrow-label">01 — Featured project</p>
            <Meta project={fern} />
          </div>
        </Container>

        <Reveal delay={60}>
          <div className="relative mt-6 aspect-[16/11] w-full overflow-hidden bg-sand/40 md:aspect-[21/9]">
            <WixImage
              src={fern.hero.src}
              alt={fern.hero.alt}
              width={2200}
              ratio="21/9"
              className="wix-img absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-6 px-6 pb-10 pt-40 md:px-16 md:pb-14">
              <p className="hero-fade hero-fade-1 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-ivory/65">
                Custom Home — Inverloch, Victoria
              </p>
              <div className="hero-fade hero-fade-2 flex flex-wrap items-end justify-between gap-6">
                <h2 className="display-xl text-ivory">{fern.name}</h2>
                <div className="hidden md:block">
                  <ButtonLink href={`/ourworks/${fern.slug}`} variant="outline-light">
                    View Project
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Container>
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7">
              <p className="body-copy max-w-2xl">{fern.tagline} {fern.description[0]}</p>
            </Reveal>
            <Reveal delay={80} className="lg:col-span-4 lg:col-start-9">
              <div className="flex items-center justify-between border-t border-line pt-5 lg:block lg:border-0 lg:pt-0">
                <div className="md:hidden lg:block">
                  <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-stone">
                    Reclaimed brick · Spotted Gum · Plywood ceilings
                  </p>
                </div>
                <div className="md:hidden">
                  <ButtonLink href={`/ourworks/${fern.slug}`} variant="outline">
                    View Project
                  </ButtonLink>
                </div>
                <div className="hidden md:block">
                  <ViewLink href={`/ourworks/${fern.slug}`}>View Full Project</ViewLink>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 02 — CUTRISS · Large image / text */}
      <section id="cuttriss" className="scroll-mt-24 bg-parchment py-24 md:py-36">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-0">
            <Reveal className="lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden bg-sand/40 lg:aspect-[5/4]">
                <WixImage
                  src={cutriss.hero.src}
                  alt={cutriss.hero.alt}
                  width={1600}
                  ratio="5/4"
                  className="zoom-media wix-img absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={100} className="lg:col-span-4 lg:col-start-9 lg:mt-32">
              <p className="eyebrow-label">02 — Renovation</p>
              <h3 className="display-lg mt-4 text-ink">{cutriss.name}</h3>
              <Meta project={cutriss} />
              <p className="body-copy mt-6">{cutriss.description[0]}</p>
              <div className="mt-8">
                <ViewLink href={`/ourworks/${cutriss.slug}`}>View Full Project</ViewLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 03 — SANDY MOUNT · Text / large horizontal image */}
      <section id="sandymount2" className="scroll-mt-24 bg-ivory py-24 md:py-36">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-0">
            <Reveal className="lg:col-span-4 lg:col-start-2 lg:mt-20">
              <p className="eyebrow-label">03 — Renovation</p>
              <h3 className="display-lg mt-4 text-ink">{sandymount.name}</h3>
              <Meta project={sandymount} />
              <p className="body-copy mt-6">{sandymount.description[0]}</p>
              <div className="mt-8">
                <ViewLink href={`/ourworks/${sandymount.slug}`}>View Full Project</ViewLink>
              </div>
            </Reveal>
            <Reveal delay={100} className="lg:col-span-7 lg:col-start-6">
              <div className="relative aspect-[16/11] overflow-hidden bg-sand/40 lg:aspect-[16/9]">
                <WixImage
                  src={sandymount.hero.src}
                  alt={sandymount.hero.alt}
                  width={1800}
                  ratio="16/9"
                  className="zoom-media wix-img absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 04 — JOHN FLAGG · Full-bleed horizontal cinematic */}
      <section id="johnflagg" className="scroll-mt-24 bg-parchment py-24 md:py-36">
        <Container>
          <div className="flex items-baseline justify-between">
            <p className="eyebrow-label">04 — Custom Home</p>
            <Meta project={johnflagg} />
          </div>
        </Container>
        <Reveal delay={60}>
          <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden bg-sand/40 md:aspect-[21/9]">
            <WixImage
              src={johnflagg.hero.src}
              alt={johnflagg.hero.alt}
              width={2200}
              ratio="21/9"
              className="wix-img absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/25 to-transparent" />
            <div className="absolute inset-0 flex items-end px-6 pb-10 md:px-16 md:pb-14">
              <div>
                <p className="hero-fade hero-fade-1 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-ivory/65">
                  Coastal views · Natural light
                </p>
                <h3 className="hero-fade hero-fade-2 display-xl mt-3 text-ivory">
                  {johnflagg.name}
                </h3>
                <div className="hero-fade hero-fade-3 mt-4 hidden md:block">
                  <ButtonLink href={`/ourworks/${johnflagg.slug}`} variant="outline-light">
                    View Project
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <Container>
          <Reveal delay={80}>
            <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
              <p className="body-copy max-w-2xl">{johnflagg.description[0]}</p>
              <div className="flex items-center gap-8">
                <div className="md:hidden">
                  <ButtonLink href={`/ourworks/${johnflagg.slug}`} variant="outline">
                    View Project
                  </ButtonLink>
                </div>
                <div className="hidden md:block">
                  <ViewLink href={`/ourworks/${johnflagg.slug}`}>View Full Project</ViewLink>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 05 — CASUARINA · Asymmetric composition */}
      <section id="casuarina" className="scroll-mt-24 bg-ivory py-24 md:py-36">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-0">
            <Reveal className="lg:col-span-7">
              <div className="relative aspect-[4/5] overflow-hidden bg-sand/40">
                <WixImage
                  src={casuarina.hero.src}
                  alt={casuarina.hero.alt}
                  width={1400}
                  ratio="4/5"
                  className="zoom-media wix-img absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </Reveal>

            <div className="lg:col-span-5">
              <Reveal delay={80} className="lg:pl-14 lg:pt-10">
                <p className="eyebrow-label">05 — Custom Home</p>
                <h3 className="display-lg mt-4 text-ink">{casuarina.name}</h3>
                <Meta project={casuarina} />
                <p className="body-copy mt-6">{casuarina.description[0]}</p>
                <div className="mt-8">
                  <ViewLink href={`/ourworks/${casuarina.slug}`}>View Full Project</ViewLink>
                </div>
              </Reveal>

              {casuarina.gallery[1] && (
                <Reveal delay={160} className="mt-10 lg:pl-24">
                  <div className="relative aspect-[4/3] overflow-hidden bg-sand/40">
                    <WixImage
                      src={casuarina.gallery[1].src}
                      alt={casuarina.gallery[1].alt}
                      width={1200}
                      ratio="4/3"
                      className="zoom-media wix-img absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        heading="Your Home Next"
        intro="Like what you've seen? Let's talk about what's possible on your site — and what a home built better could feel like."
      />
    </>
  );
}