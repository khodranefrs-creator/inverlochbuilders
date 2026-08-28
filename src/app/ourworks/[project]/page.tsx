import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { WixImage } from "@/components/ui/WixImage";
import { ArrowLink } from "@/components/ui/ButtonLink";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { projects, getProject } from "@/lib/data/projects";

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
    title: `${p.name} — ${p.typeLabel} in ${p.location}`,
    description: p.tagline,
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { project } = await params;
  const p = getProject(project);
  if (!p) notFound();

  const others = projects.filter((x) => x.slug !== p.slug);

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
      {/* Hero */}
      <section className="relative flex min-h-[70svh] flex-col justify-end overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <WixImage
            src={p.hero.src}
            alt={p.hero.alt}
            width={2000}
            eager
            className="wix-img is-eager absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-ink/30" />
        </div>
        <Container className="relative z-10 pt-40 pb-14 md:pb-20">
          <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-ivory/60">
            {p.typeLabel} — {p.location}
          </p>
          <h1 className="display-lg mt-4 text-ivory">{p.name}</h1>
          <p className="lede mt-4 max-w-xl text-ivory/75">{p.tagline}</p>
        </Container>
      </section>

      {/* Story + details */}
      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <SectionHeader eyebrow="The project" title="The story." />
                <dl className="mt-8 divide-y divide-line border-y border-line">
                  {p.detail.map((d) => (
                    <div key={d.label} className="flex justify-between gap-6 py-4">
                      <dt className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-stone">
                        {d.label}
                      </dt>
                      <dd className="text-right font-display text-lg text-ink">
                        {d.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-8">
                  <ArrowLink href="/contactus">
                    Building Something Similar?
                  </ArrowLink>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              {p.description.map((d, i) => (
                <Reveal key={i} delay={i * 40}>
                  <p className="body-copy mb-5 last:mb-0 first:text-[1.15rem]">
                    {d}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="bg-parchment py-24 md:py-32">
        <Container>
          <SectionHeader
            eyebrow="Gallery"
            title={
              <>
                Detail and<br />
                <span className="italic text-clay">definition.</span>
              </>
            }
          />
        </Container>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {p.gallery.map((g) => (
            <Reveal key={g.src}>
              <div className="group relative aspect-[4/5] overflow-hidden">
                <WixImage
                  src={g.src}
                  alt={g.alt}
                  width={900}
                  className="zoom-media wix-img absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Other projects */}
      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <SectionHeader
            eyebrow="More work"
            title={
              <>
                See what else<br />
                <span className="italic text-clay">we're proud of.</span>
              </>
            }
          />
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {others.map((o) => (
              <Reveal key={o.slug}>
                <Link href={`/ourworks/${o.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <WixImage
                      src={o.hero.src}
                      alt={o.hero.alt}
                      width={800}
                      className="zoom-media wix-img absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <p className="mt-5 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-stone">
                    {o.typeLabel}
                  </p>
                  <p className="mt-1 font-display text-2xl text-ink transition-colors group-hover:text-clay">
                    {o.name}
                  </p>
                  <p className="mt-1 text-sm text-ash">
                    {o.location} · {o.year}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        heading="Your Project"
        intro={`Homes like ${p.name} begin with one conversation. Tell us about your site — we'll show you what's possible.`}
      />
    </>
  );
}