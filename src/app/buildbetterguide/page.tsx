import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink, ButtonLink } from "@/components/ui/ButtonLink";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

const guidePdf =
  "https://www.inverlochbuilders.com.au/_files/ugd/266765_688ba0be02da4a21b3623bd67b2998bb.pdf";

export const metadata: Metadata = buildMetadata({
  slug: "/buildbetterguide",
  title: "Build Better Guide",
  description:
    "How early builder involvement can save you thousands — download the Build Better Guide from Inverloch Builders and see how we build better.",
});

export default function BuildBetterGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", item: "/" },
              { name: "Build Better Guide", item: "/buildbetterguide" },
            ])
          ),
        }}
      />
      <PageHero
        eyebrow="Build Better Guide"
        title={
          <>
            Your guide to
            <br />
            <span className="italic text-clay">building better.</span>
          </>
        }
        intro="How early builder involvement can save you thousands."
        image={{
          src: "c86e57_50c7e90887b143a19dec0e8e5b25a365~mv2.jpeg",
          alt: "Custom kitchen in a design-led home in Bass Coast",
        }}
      />

      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <SectionHeader
                  eyebrow="Early Builder Involvement"
                  title={
                    <>
                      Join the builder
                      <br />
                      early — <span className="italic">the rest follows.</span>
                    </>
                  }
                />
                <div className="mt-8">
                  <ArrowLink href={guidePdf} external>
                    Download the Guide
                  </ArrowLink>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <Reveal>
                <p className="display-md text-ink">
                  Rather than finishing your design and then searching for a
                  builder, we join your project early — sitting alongside you
                  and your designer as the plans take shape.
                </p>
              </Reveal>
              <Reveal delay={80}>
                <p className="body-copy mt-6 max-w-2xl">
                  This means construction methodology, structural requirements,
                  site conditions, and real-world costs are all considered while
                  changes are still simple and inexpensive. The guide walks
                  through exactly how that process works — and what it saves
                  you.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <div className="mt-12 rounded-sm border border-line bg-parchment p-8 md:p-10">
                  <p className="eyebrow-label">Free download</p>
                  <p className="display-sm mt-3 text-ink">
                    Download your guide to building better
                  </p>
                  <p className="body-copy mt-3 text-[0.92rem]">
                    A concise PDF covering Early Builder Involvement, cost
                    certainty and what it means to build better.
                  </p>
                  <div className="mt-6">
                    <ButtonLink href={guidePdf} external variant="primary">
                      Download Here
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        heading="Read It In Person"
        intro="The best way to understand how we build is to start the conversation. Book a discovery call and we'll walk you through it."
      />
    </>
  );
}