import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { WixImage } from "@/components/ui/WixImage";
import { ArrowLink } from "@/components/ui/ButtonLink";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { services, getService } from "@/lib/data/services";
import { getProject } from "@/lib/data/projects";

type Props = { params: Promise<{ service: string }> };

const relatedByService: Record<string, string[]> = {
  "custom-builds": ["fern", "johnflagg", "casuarina"],
  "home-renovations": ["cuttriss", "sandymount2"],
  extensions: ["cuttriss", "sandymount2"],
};

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  const s = getService(service);
  if (!s) return {};
  return buildMetadata({
    slug: `/services/${s.slug}`,
    title: `${s.title} — ${s.label} Inverloch`,
    description: s.intro,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { service } = await params;
  const s = getService(service);
  if (!s) notFound();

  const related = relatedByService[s.slug]
    .map(getProject)
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", item: "/" },
              { name: "Services", item: "/services" },
              { name: s.title, item: `/services/${s.slug}` },
            ])
          ),
        }}
      />
      <PageHero
        eyebrow={s.label}
        title={
          <>
            {s.title}
            <br />— <span className="italic text-clay">built better.</span>
          </>
        }
        intro={s.intro}
        image={s.image}
      />

      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <SectionHeader eyebrow={s.label} title={s.headline} />
                <div className="mt-4 space-y-4">
                  {s.paragraphs.map((p) => (
                    <p key={p.slice(0, 24)} className="body-copy">
                      {p}
                    </p>
                  ))}
                </div>
                <div className="mt-8 border-t border-line pt-8">
                  <ArrowLink href="/contactus">Start This Project</ArrowLink>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="grid grid-cols-2 gap-4">
                {s.gallery.map((g) => (
                  <Reveal key={g.src}>
                    <div className="group relative aspect-[3/4] overflow-hidden">
                      <WixImage
                        src={g.src}
                        alt={g.alt}
                        width={800}
                        className="zoom-media wix-img absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-parchment py-24 md:py-32">
        <Container>
          <SectionHeader
            eyebrow="Recent work"
            title={
              <>
                Projects across
                <br />
                <span className="italic text-clay">the region.</span>
              </>
            }
          />
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {related.map((p) => (
              <Reveal key={p.slug}>
                <Link href={`/ourworks/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <WixImage
                      src={p.hero.src}
                      alt={p.hero.alt}
                      width={800}
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

      <CTASection
        heading="Built Better"
        intro={`Whatever the ${s.label.toLowerCase()}, the process is the same: Early Builder Involvement, transparent pricing and a home built to last.`}
      />
    </>
  );
}