import { ButtonLink } from "@/components/ui/ButtonLink";
import { brandConfig } from "@/lib/data/brand";
import { WixImage } from "@/components/ui/WixImage";

const eyebrow = brandConfig.shortName;

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink">
      {/* Full-bleed imagery */}
      <div className="absolute inset-0">
        <WixImage
          src="c86e57_c0e95e74d8ef4d6facb91b33a4114ea2~mv2.jpg"
          alt="Custom coastal home built by Inverloch Builders near Wilsons Promontory"
          width={2200}
          ratio="21/9"
          eager
          className="wix-img is-eager absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/35" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/55 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-site relative z-10 flex flex-1 flex-col justify-end pb-16 pt-32">
        <div className="hero-fade hero-fade-1 mb-7 flex items-center gap-3">
          <span aria-hidden="true" className="block h-px w-12 bg-bronze" />
          <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-ivory/85">
            {eyebrow}
          </p>
        </div>

        <h1 className="hero-fade hero-fade-2 display-xl max-w-5xl text-ivory">
          Functional.
          <br />
          Beautiful.
          <br />
          <span className="italic text-clay">Built Better.</span>
        </h1>

        <div className="hero-fade hero-fade-3 mt-8 grid gap-8 md:grid-cols-12 md:items-end">
          <p className="lede max-w-md text-ivory/80 md:col-span-7">
            Architecturally designed homes, renovations and extensions across{" "}
            {brandConfig.region}.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row md:col-span-5 md:justify-end">
            <ButtonLink href="/contactus" variant="light">
              Book a Discovery Call
            </ButtonLink>
            <ButtonLink href="/ourworks" variant="outline-light">
              Explore Our Work
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-fade hero-fade-4 pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="font-sans text-[0.6rem] uppercase tracking-[0.3em] text-ivory/55">
          Scroll
        </span>
        <span aria-hidden="true" className="scroll-cue block h-8 w-px bg-ivory/40" />
      </div>
    </section>
  );
}