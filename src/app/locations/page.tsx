import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { WixImage } from "@/components/ui/WixImage";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { locations } from "@/lib/data/locations";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  slug: "/locations",
  title: "Areas We Build — Bass Coast & South Gippsland",
  description:
    "Inverloch Builders builds custom homes, renovations and extensions across the Bass Coast and South Gippsland — Inverloch, Venus Bay, Woolamai, Phillip Island, San Remo, Leongatha, Korumburra, Walkerville and Foster.",
});

export default function LocationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", item: "/" },
              { name: "Locations", item: "/locations" },
            ])
          ),
        }}
      />
      <PageHero
        eyebrow="Areas we build"
        title={
          <>
            Building across the
            <br />
            <span className="italic text-clay">Bass Coast & South Gippsland.</span>
          </>
        }
        intro="One builder, one standard — throughout Inverloch, the coastline, the islands and the hills. Local knowledge means homes designed for the place they stand in."
        image={{
          src: "c86e57_3600cc77f8744890bfb0679f998cfb56~mv2.jpg",
          alt: "Custom home on the Bass Coast, Inverloch",
        }}
      />

      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <div className="mb-16">
            <SectionHeader
              eyebrow="Where we build"
              title={
                <>
                  Eleven areas,
                  <br />
                  <span className="italic text-clay">one standard.</span>
                </>
              }
            />
          </div>

          {locations.map((l, i) => {
            const right = i % 2 === 1;
            return (
              <Reveal key={l.slug}>
                <Link
                  href={`/${l.slug}`}
                  className="group mb-14 grid gap-8 border-t border-line pt-10 md:grid-cols-12 md:items-end"
                >
                  <div
                    className={cn(
                      "md:col-span-5",
                      right && "md:order-2 md:col-span-5"
                    )}
                  >
                    <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-stone">
                      {String(i + 1).padStart(2, "0")} — {l.region}
                    </p>
                    <h2
                      className={cn(
                        "mt-3 font-display text-4xl font-light tracking-tight text-ink md:text-5xl",
                        "transition-colors group-hover:text-clay"
                      )}
                    >
                      {l.area}
                    </h2>
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-ash">
                      {l.heroSub}
                    </p>
                    <p className="mt-6 inline-flex items-center gap-2 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-ink">
                      Explore {l.area}
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </p>
                  </div>
                  <div
                    className={cn(
                      "md:col-span-7",
                      right ? "md:order-1" : ""
                    )}
                  >
                    <div className="relative ml-auto aspect-[16/11] w-full max-w-xl overflow-hidden">
                      <WixImage
                        src={l.heroImage.src}
                        alt={l.heroImage.alt}
                        width={1100}
                        ratio="16/11"
                        className="zoom-media wix-img absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </Container>
      </section>

      <CTASection
        heading="Wherever You Build"
        intro="If your suburb isn't listed, ask anyway — we regularly take projects across the wider region."
      />
    </>
  );
}