import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { WixImage } from "@/components/ui/WixImage";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  slug: "/about",
  title: "About Inverloch Builders",
  description:
    "Family-owned custom home builder in Inverloch with over 30 years of experience across custom homes and major renovations. Based on the Bass Coast, serving South Gippsland.",
});

const values = [
  {
    title: "People First",
    copy: "We build lasting relationships — with clients, architects, consultants, and our team. Respect, communication, and trust are at the core.",
  },
  {
    title: "The Experience",
    copy: "We make the building journey smooth, collaborative, and enjoyable — removing the stress through clear systems, honest advice, and dependable delivery.",
  },
  {
    title: "Build Better",
    copy: "We don't just meet minimum standards — we build beyond them. From structural integrity to final finishes, we focus on long-term quality and performance.",
  },
  {
    title: "Design Led",
    copy: "We believe good design makes great living. We collaborate with designers and clients to deliver homes that are functional, beautiful, and uniquely yours.",
  },
  {
    title: "Healthy Homes",
    copy: "We prioritise wellbeing — on site and in every home we build. Natural light, clean air, and healthier living environments.",
  },
  {
    title: "Responsibility",
    copy: "We take ownership — of the process, the outcome, and any challenges along the way. We show up, solve problems, and never cut corners.",
  },
  {
    title: "Integrity",
    copy: "We do what we say we will. We're honest, transparent, and dependable — even when no one's watching. That's how trust is built.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", item: "/" },
              { name: "About", item: "/about" },
            ])
          ),
        }}
      />
      <PageHero
        eyebrow="About Inverloch Builders"
        title={
          <>
            Forever homes crafted with precision, integrity and
            <span className="italic text-clay"> timeless design.</span>
          </>
        }
        intro="Based in Inverloch, serving the Bass Coast and South Gippsland."
        image={{
          src: "c86e57_ac1154bf18c6456ca956fe9effaa3b05~mv2.jpg",
          alt: "Custom home designed and built by Inverloch Builders",
        }}
      />

      {/* Story */}
      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <SectionHeader
                  eyebrow="Our story"
                  title={
                    <>
                      Built Better.
                      <br />
                      Built to Last.
                      <br />
                      <span className="italic">Built on Trust.</span>
                    </>
                  }
                />
              </div>
            </div>
            <div className="space-y-6 lg:col-span-7 lg:col-start-6">
              <Reveal>
                <p className="lede">
                  At Inverloch Builders, we do more than construct homes — we
                  build lasting relationships, timeless spaces, and complete
                  peace of mind.
                </p>
              </Reveal>
              <Reveal>
                <p className="body-copy">
                  With over 30 years of experience across custom homes and major
                  renovations, we understand that every project — and every
                  family — is different. New homes require forward thinking and
                  strong planning; renovations demand flexibility and finesse.
                  We bring both.
                </p>
              </Reveal>
              <Reveal>
                <p className="body-copy">
                  We intentionally take on a limited number of projects each
                  year, ensuring our team can give every build the focus and
                  attention it deserves. Our Early Builder Involvement approach
                  means you'll always know where your project stands, how
                  decisions affect cost and timing, and what to expect next. No
                  surprises. No stress.
                </p>
              </Reveal>
              <Reveal>
                <p className="body-copy">
                  Our in-house carpentry team is the backbone of Inverloch
                  Builders — known for their professionalism, precision, and
                  pride in every detail. Supported by a trusted network of
                  subcontractors and suppliers, many of whom have partnered with
                  us for years.
                </p>
              </Reveal>
              <Reveal>
                <p className="body-copy">
                  We build better because we care more — about our clients, our
                  team, and the homes we leave behind. Your project isn't just
                  another build; it's a reflection of your life, your style, and
                  our shared standard of excellence.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-parchment py-24 md:py-32">
        <Container>
          <SectionHeader
            eyebrow="Our values"
            title={
              <>
                The standards we build to,
                <br />
                <span className="italic">every single day.</span>
              </>
            }
          />
          <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 60} className="bg-ivory">
                <article className="h-full p-8 transition-colors hover:bg-parchment md:p-10">
                  <p className="font-display text-xl font-light text-clay">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="display-sm mt-4 text-ink">{v.title}</h3>
                  <p className="body-copy mt-3 text-[0.92rem]">{v.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Imagery */}
      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <div className="grid gap-8 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden">
                <WixImage
                  src="c86e57_f1cabcf79e35452a8590beeccfe6c59b~mv2.jpg"
                  alt="Inverloch Builders — craftsmanship in progress"
                  width={1400}
                  className="wix-img absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <div className="flex flex-col justify-between gap-8 md:col-span-5">
              <Reveal delay={80}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <WixImage
                    src="c86e57_103d3ec0178344f7adead9ac20355d3d~mv2.jpg"
                    alt="Detail of a custom home under construction"
                    width={1000}
                    className="wix-img absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={140}>
                <p className="lede">
                  From concept to completion, our process is built on clarity,
                  communication and trust — so the journey feels as good as the
                  result.
                </p>
                <div className="mt-8">
                  <ButtonLink href="/contactus">Start Your Journey</ButtonLink>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        heading="Begin Your Build"
        intro="A short conversation is all it takes to understand your site, your vision and what's genuinely achievable."
      />
    </>
  );
}