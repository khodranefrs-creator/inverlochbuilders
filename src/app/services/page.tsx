import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { WixImage } from "@/components/ui/WixImage";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  slug: "/services",
  title: "Custom Homes, Renovations & Extensions",
  description:
    "Bass Coast's custom home, renovation and extension specialists. Architecturally designed custom builds, full-scale renovations and seamless extensions — built better, built to last.",
});

const serviceIds: Record<string, string> = {
  "custom-builds": "custom-builds",
  "home-renovations": "home-renovations",
  extensions: "extensions",
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", item: "/" },
              { name: "Services", item: "/services" },
            ])
          ),
        }}
      />
      <PageHero
        eyebrow="What we do"
        title={
          <>
            Build better homes —
            <br />
            <span className="italic text-clay"> functional, beautiful and truly built to last.</span>
          </>
        }
        intro="We're Bass Coast's custom homes, renovations and extensions specialists — partnering with clients who want quality, longevity, and a home tailored to the way they live."
        image={{
          src: "c86e57_fa632b43e7e04241ad73e251cea3d202~mv2.jpg",
          alt: "Design-led custom home built in Inverloch, Bass Coast",
        }}
      />

      {services.map((s, i) => (
        <section
          key={s.slug}
          id={serviceIds[s.slug]}
          className={cn("scroll-mt-24 py-24 md:py-32", i % 2 === 0 ? "bg-ivory" : "bg-parchment")}
        >
          <Container>
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className={cn("lg:col-span-6", i % 2 === 1 && "lg:order-2")}>
                <div className="relative overflow-hidden">
                  <Reveal>
                    <WixImage
                      src={s.image.src}
                      alt={s.image.alt}
                      width={1200}
                      className="wix-img aspect-[4/3] w-full object-cover"
                    />
                  </Reveal>
                  <p className="pointer-events-none absolute left-5 top-5 bg-ivory/90 px-4 py-2 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-ink backdrop-blur-sm">
                    {String(i + 1).padStart(2, "0")} — {s.label}
                  </p>
                </div>
              </div>

              <div className={cn("lg:col-span-6", i % 2 === 1 && "lg:order-1")}>
                <Reveal>
                  <p className="eyebrow-label">{s.label}</p>
                  <h2 className="display-md mt-4 text-ink">{s.headline}</h2>
                  <p className="lede mt-5">{s.intro}</p>
                  <div className="mt-5 space-y-4">
                    {s.paragraphs.map((p) => (
                      <p key={p.slice(0, 24)} className="body-copy">
                        {p}
                      </p>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={80}>
                  <div className="mt-10 grid grid-cols-3 gap-3">
                    {s.gallery.map((g) => (
                      <div
                        key={g.src}
                        className="group relative aspect-square overflow-hidden"
                      >
                        <WixImage
                          src={g.src}
                          alt={g.alt}
                          width={420}
                          className="zoom-media wix-img absolute inset-0 h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </Container>
        </section>
      ))}

      <CTASection
        heading="Not Sure Yet?"
        intro="A discovery call is the easiest way to understand costs, timing and whether we're the right fit. No obligation — just clear answers."
      />
    </>
  );
}