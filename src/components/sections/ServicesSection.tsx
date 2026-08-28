import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { WixImage } from "@/components/ui/WixImage";
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  const [custom, renov, ext] = services;

  return (
    <section className="bg-ink py-24 text-ivory md:py-36">
      <Container>
        <SectionHeader
          tone="dark"
          eyebrow="What we do"
          title={
            <>
              Three services.
              <br />
              <span className="italic text-clay">One standard.</span>
            </>
          }
          intro="Creating homes with integrity, design and care — from architecturally designed custom builds to full-scale renovations and seamless extensions."
        />

        <div className="mt-16 grid gap-px bg-line-dark md:grid-cols-12">
          {/* Custom builds — large left */}
          <Reveal className="group relative col-span-12 overflow-hidden md:col-span-7 md:min-h-[560px]">
            <Link href="/services#custom-builds" className="absolute inset-0 z-10">
              <span className="sr-only">Custom Builds</span>
            </Link>
            <WixImage
              src={custom.image.src}
              alt={custom.image.alt}
              width={1400}
              className="zoom-media wix-img h-72 w-full object-cover sm:h-96 md:h-full"
            />
            <div className="relative z-20 flex h-full flex-col justify-end gap-2 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent p-7 md:absolute md:inset-0 md:p-10">
              <p className="eyebrow-label-muted text-ivory/60">01 — Custom Builds</p>
              <h3 className="display-md text-ivory">{custom.headline}</h3>
              <p className="line-clamp-2 max-w-md text-sm text-ivory/80">
                {custom.intro}
              </p>
              <span className="mt-3 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-clay">
                Explore →
              </span>
            </div>
          </Reveal>

          {/* Renovations — right, offset */}
          <Reveal
            delay={120}
            className="group relative col-span-12 overflow-hidden md:col-span-5 md:mt-24 md:min-h-[440px] bg-charcoal"
          >
            <Link
              href="/services#home-renovations"
              className="absolute inset-0 z-10"
            >
              <span className="sr-only">Home Renovations</span>
            </Link>
            <WixImage
              src={renov.image.src}
              alt={renov.image.alt}
              width={1100}
              className="zoom-media wix-img h-72 w-full object-cover sm:h-96 md:h-full"
            />
            <div className="relative z-20 flex h-full flex-col justify-end gap-2 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent p-7 md:absolute md:inset-0 md:p-10">
              <p className="eyebrow-label-muted text-ivory/60">02 — Renovations</p>
              <h3 className="display-sm text-ivory">{renov.headline}</h3>
              <p className="line-clamp-2 max-w-sm text-sm text-ivory/80">
                {renov.intro}
              </p>
              <span className="mt-3 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-clay">
                Explore →
              </span>
            </div>
          </Reveal>

          {/* Extensions — full width bottom */}
          <Reveal delay={100} className="group relative col-span-12 overflow-hidden md:min-h-[420px]">
            <Link href="/services#extensions" className="absolute inset-0 z-10">
              <span className="sr-only">Extensions</span>
            </Link>
            <WixImage
              src={ext.image.src}
              alt={ext.image.alt}
              width={2000}
              className="zoom-media wix-img h-72 w-full object-cover sm:h-96 md:h-full"
            />
            <div className="relative z-20 flex h-full flex-col justify-end gap-2 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent p-7 md:absolute md:inset-0 md:p-10 md:pr-20">
              <p className="eyebrow-label-muted text-ivory/60">03 — Extensions</p>
              <div className="max-w-3xl">
                <h3 className="display-md text-ivory">{ext.headline}</h3>
                <p className="line-clamp-2 max-w-xl text-sm text-ivory/80">
                  {ext.intro}
                </p>
              </div>
              <span className="mt-3 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-clay">
                Explore →
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="line-link font-sans text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-ivory"
          >
            All services →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}