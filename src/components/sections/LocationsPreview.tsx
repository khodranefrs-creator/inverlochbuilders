import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { WixImage } from "@/components/ui/WixImage";
import { locations } from "@/lib/data/locations";

export function LocationsPreview() {
  const [spotlight, ...rest] = locations;

  return (
    <section className="bg-ivory pb-24 md:pb-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionHeader
                eyebrow="Areas we serve"
                title={
                  <>
                    Wherever you are
                    <br />
                    on the <span className="italic">Bass Coast.</span>
                  </>
                }
                intro="Local builders for local life — from Inverloch to Phillip Island, Walkerville to the Gippsland hilt country."
              />
              <Reveal className="mt-10">
                <div className="relative aspect-[4/3] overflow-hidden hidden lg:block">
                  <WixImage
                    src={spotlight.heroImage.src}
                    alt={`${spotlight.area} coastal home`}
                    width={900}
                    className="wix-img absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border-t border-line">
              {locations.map((l, i) => (
                <Reveal key={l.slug} delay={Math.min(i * 40, 240)}>
                  <Link
                    href={`/${l.slug}`}
                    className="group flex items-center justify-between border-b border-line py-5 transition-colors hover:bg-parchment/60"
                  >
                    <span className="flex items-baseline gap-5">
                      <span className="font-sans text-[0.65rem] font-semibold tracking-[0.2em] text-stone">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-2xl tracking-tight text-ink transition-colors group-hover:text-clay md:text-3xl">
                        {l.area}
                      </span>
                    </span>
                    <span className="hidden font-sans text-[0.62rem] font-medium uppercase tracking-[0.2em] text-stone sm:block">
                      {l.region}
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-sans text-stone transition-all duration-300 group-hover:translate-x-1 group-hover:text-ink"
                    >
                      →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}