import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/ButtonLink";
import { WixImage } from "@/components/ui/WixImage";

const scenes = [
  {
    src: "c86e57_1c42dbd2843e4890a4d506b0de52e492~mv2.jpg",
    alt: "Cutriss — coastal renovation completed in Inverloch",
    caption: "Cutriss, Inverloch",
    sub: "Renovation",
  },
  {
    src: "c86e57_66dd7973faea4877bfde760e4bf2e215~mv2.jpg",
    alt: "Bathroom renovation detail in a Bass Coast home",
    caption: "Bathroom detail",
    sub: "Joinery & tile",
  },
  {
    src: "c86e57_50c7e90887b143a19dec0e8e5b25a365~mv2.jpeg",
    alt: "Custom kitchen joinery crafted for a renovation",
    caption: "Kitchen joinery",
    sub: "Crafted on site",
  },
  {
    src: "c86e57_2c85d80522ac47439ca0ee4b6dd6d6f4~mv2.jpg",
    alt: "Renovated living space opened up to the coast",
    caption: "Living space",
    sub: "Open plan",
  },
];

export function RenovationsGallery() {
  return (
    <section className="bg-sand py-24 md:py-36">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <SectionHeader
            className="lg:col-span-8"
            eyebrow="Inside the build"
            title={
              <>
                Recent renovations,
                <br />
                <span className="italic">right down to the details.</span>
              </>
            }
            intro="The finishes are where a renovation is won. Here's a look at the kitchens, bathrooms and living spaces our team has crafted recently on the Bass Coast."
          />
          <Reveal className="lg:col-span-4 lg:pb-2">
            <ArrowLink href="/ourworks">See Our Work</ArrowLink>
          </Reveal>
        </div>

        {/* Editorial sequence */}
        <div className="mt-16 grid gap-10 md:grid-cols-12">
          {/* Lead image, wide */}
          <Reveal className="md:col-span-12">
            <figure className="group relative aspect-[16/10] overflow-hidden md:aspect-[21/9]">
              <WixImage
                src={scenes[0].src}
                alt={scenes[0].alt}
                width={2000}
                className="zoom-media wix-img absolute inset-0 h-full w-full object-cover"
              />
              <figcaption className="absolute bottom-0 left-0 flex items-baseline gap-3 bg-ink/70 px-5 py-3 backdrop-blur-sm">
                <span className="font-display text-lg text-ivory">
                  {scenes[0].caption}
                </span>
                <span className="font-sans text-[0.62rem] font-medium uppercase tracking-[0.22em] text-ivory/70">
                  {scenes[0].sub}
                </span>
              </figcaption>
            </figure>
          </Reveal>

          {/* Story + bathroom */}
          <div className="flex flex-col justify-center md:col-span-5">
            <Reveal>
              <p className="eyebrow-label">Why renovations matter to us</p>
              <p className="body-copy mt-5">
                A great renovation should feel as considered as a new build —
                the same design thinking, the same energy performance, the same
                care in the details.
              </p>
              <p className="body-copy mt-4">
                From restoring character to older properties to reconfiguring
                layouts around the way families actually live, we guide
                homeowners from planning through documentation to completion —
                smoothly, on time and within budget.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal delay={80}>
              <figure className="relative aspect-[4/3] overflow-hidden md:aspect-[5/4]">
                <WixImage
                  src={scenes[1].src}
                  alt={scenes[1].alt}
                  width={1200}
                  className="zoom-media wix-img absolute inset-0 h-full w-full object-cover"
                />
                <figcaption className="absolute bottom-0 left-0 flex items-baseline gap-3 bg-ivory/90 px-5 py-3 backdrop-blur-sm">
                  <span className="font-display text-lg text-ink">
                    {scenes[1].caption}
                  </span>
                  <span className="font-sans text-[0.62rem] font-medium uppercase tracking-[0.22em] text-ash">
                    {scenes[1].sub}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* Kitchen pull + living */}
          <Reveal className="md:col-span-6">
            <figure className="relative aspect-[4/3] overflow-hidden">
              <WixImage
                src={scenes[2].src}
                alt={scenes[2].alt}
                width={1200}
                className="zoom-media wix-img absolute inset-0 h-full w-full object-cover"
              />
              <figcaption className="absolute bottom-0 left-0 flex items-baseline gap-3 bg-ink/70 px-5 py-3 backdrop-blur-sm">
                <span className="font-display text-lg text-ivory">
                  {scenes[2].caption}
                </span>
                <span className="font-sans text-[0.62rem] font-medium uppercase tracking-[0.22em] text-ivory/70">
                  {scenes[2].sub}
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="flex items-end md:col-span-6">
            <Reveal delay={80} className="w-full">
              <figure className="relative aspect-[4/3] overflow-hidden">
                <WixImage
                  src={scenes[3].src}
                  alt={scenes[3].alt}
                  width={1200}
                  className="zoom-media wix-img absolute inset-0 h-full w-full object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-baseline gap-3 bg-ivory/90 px-5 py-3 backdrop-blur-sm">
                  <span className="font-display text-lg text-ink">
                    {scenes[3].caption}
                  </span>
                  <span className="font-sans text-[0.62rem] font-medium uppercase tracking-[0.22em] text-ash">
                    {scenes[3].sub}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}