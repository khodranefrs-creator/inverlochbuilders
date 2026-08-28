import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { WixImage } from "@/components/ui/WixImage";
import { ArrowLink } from "@/components/ui/ButtonLink";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata, breadcrumbJsonLd, localBusinessJsonLd } from "@/lib/seo";
import {
  getLocation,
  locations,
  locationCtaLine,
  regionFromNeighbourhood,
} from "@/lib/data/locations";
import { getProject } from "@/lib/data/projects";

type Props = { params: Promise<{ location: string }> };

export function generateStaticParams() {
  return locations.map((l) => ({ location: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) return {};
  return buildMetadata({
    slug: `/${loc.slug}`,
    title: loc.metaTitle,
    description: loc.metaDescription,
  });
}

export default async function LocationLandingPage({ params }: Props) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();

  const others = locations.filter((l) => l.slug !== loc.slug);
  const localProjects = loc.projects
    .map(getProject)
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const areaLd = {
    ...localBusinessJsonLd(),
    areaServed: [loc.area, loc.region, "Bass Coast", "South Gippsland"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbJsonLd([
              { name: "Home", item: "/" },
              { name: loc.area, item: `/${loc.slug}` },
            ]),
            areaLd,
          ]),
        }}
      />
      <PageHero
        eyebrow={`${loc.heroEyebrow} — ${loc.region}`}
        title={
          <>
            {loc.heroHeadline.split(" ")[0]}{" "}
            <span className="italic text-clay">
              {loc.heroHeadline.split(" ").slice(1).join(" ")}
            </span>
          </>
        }
        intro={loc.heroSub}
        image={loc.heroImage}
      />

      {/* Intro */}
      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <SectionHeader
                  eyebrow={`Building in ${loc.area}`}
                  title={
                    <>
                      Homes made
                      <br />
                      <span className="italic text-clay">for here.</span>
                    </>
                  }
                />
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <Reveal>
                <p className="display-sm leading-snug text-ink">
                  {regionFromNeighbourhood(loc.neighbourhood, loc.area)}
                </p>
              </Reveal>
              <div className="mt-8 space-y-5">
                {loc.intro.map((p, i) => (
                  <Reveal key={i} delay={60}>
                    <p className="body-copy">{p}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-parchment py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="What we do"
                title={
                  <>
                    Services in
                    <br />
                    <span className="italic text-clay">{loc.area}.</span>
                  </>
                }
              />
              <Reveal delay={80}>
                <p className="lede mt-5">{loc.servicesIntro}</p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <div className="border-t border-line">
                {loc.services.map((s, i) => (
                  <Reveal key={s} delay={i * 40}>
                    <div className="flex gap-6 border-b border-line py-6">
                      <span className="font-display text-3xl font-light text-clay">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="display-sm text-ink">{s}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why */}
      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <SectionHeader eyebrow="The difference" title={loc.whyHeading} />
                <div className="mt-8">
                  <ArrowLink href="/testimonials">What Clients Say</ArrowLink>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="border-t border-line">
                {loc.why.map((w, i) => (
                  <Reveal key={w} delay={i * 50}>
                    <div className="grid gap-4 border-b border-line py-6 md:grid-cols-12">
                      <p className="font-display text-4xl font-light text-clay/60 md:col-span-2">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <p className="body-copy md:col-span-10">{w}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Process — dark interlude */}
      <section className="bg-ink py-24 text-ivory md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow tone="dark" muted>
                Early Builder Involvement
              </Eyebrow>
              <h2 className="display-md mt-5 text-ivory">{loc.processIntro}</h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="border-t border-line-dark">
                {loc.process.map((p, i) => (
                  <Reveal key={p} delay={i * 50}>
                    <div className="flex gap-6 border-b border-line-dark py-6">
                      <span className="font-display text-3xl font-light text-clay">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="display-sm text-ivory">{p}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <SectionHeader
            eyebrow="Recent work"
            title={
              <>
                Built around
                <br />
                <span className="italic text-clay">{loc.area}.</span>
              </>
            }
          />
        </Container>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {loc.gallery.map((g) => (
            <Reveal key={g.src}>
              <div className="group relative aspect-[3/4] overflow-hidden">
                <WixImage
                  src={g.src}
                  alt={g.alt}
                  width={800}
                  ratio="3/4"
                  className="zoom-media wix-img absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Local projects */}
      <section className="bg-parchment py-24 md:py-32">
        <Container>
          <SectionHeader
            eyebrow="Selected projects"
            title={
              <>
                Our work near
                <br />
                <span className="italic text-clay">{loc.area}.</span>
              </>
            }
          />
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {localProjects.map((p) => (
              <Reveal key={p.slug}>
                <Link href={`/ourworks/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <WixImage
                      src={p.hero.src}
                      alt={p.hero.alt}
                      width={800}
                      ratio="4/5"
                      className="zoom-media wix-img absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <p className="mt-5 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-stone">
                    {p.typeLabel}
                  </p>
                  <p className="mt-1 font-display text-2xl text-ink transition-colors group-hover:text-clay">
                    {p.name}
                  </p>
                  <p className="mt-1 text-sm text-ash">
                    {p.location} · {p.typeLabel}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Other areas */}
      <section className="bg-ivory pb-24 pt-4 md:pb-32">
        <Container>
          <div className="border-t border-line pt-12">
            <p className="eyebrow-label">Also building across</p>
            <div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/${o.slug}`}
                  className="line-link font-display text-xl text-ink hover:text-clay"
                >
                  {o.area}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection heading="Build Here" intro={locationCtaLine(loc)} />
    </>
  );
}