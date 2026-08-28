import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/ButtonLink";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  slug: "/buildbetterguide",
  title: "Build Better Guide",
  description:
    "The Build Better Guide — an in-depth look at Inverloch Builders' approach to creating exceptional homes: process, cost certainty and what 'built to last' really means.",
});

const chapters = [
  {
    n: "01",
    title: "Start with the builder",
    body: "Involving your builder during design — not after — is the single biggest lever on cost and quality. That's what Early Builder Involvement is built on.",
  },
  {
    n: "02",
    title: "Design for performance",
    body: "Orientation, insulation, glazing and airtightness quietly determine how a home feels and costs to run. We design for the Bass Coast climate from day one.",
  },
  {
    n: "03",
    title: "Price it transparently",
    body: "Open-book, trade-by-trade cost planning means you're never guessing. Real quotes from trusted suppliers replace estimates at the earliest stage.",
  },
  {
    n: "04",
    title: "Build with intent",
    body: "Quality isn't a moment — it's every checked stage, every signed-off trade, every detail that survived the journey from sketch to site.",
  },
  {
    n: "05",
    title: "Deliver and stay",
    body: "Handover documentation, warranty, and 3- and 12-month check-ins. Because built to last means we're still looking after it long after the tools are gone.",
  },
];

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
            An in-depth look at
            <br />
            <span className="italic text-clay">how we build better.</span>
          </>
        }
        intro="Our approach to exceptional homes — the process, the pricing and what 'built to last' really means in practice."
      />

      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <SectionHeader
                  eyebrow="The guide"
                  title={
                    <>
                      Five chapters on
                      <br />
                      building better.
                    </>
                  }
                />
                <div className="mt-8">
                  <ArrowLink href="/contactus">Start Your Project</ArrowLink>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="border-t border-line">
                {chapters.map((c, i) => (
                  <Reveal key={c.n} delay={i * 50}>
                    <article className="grid gap-6 border-b border-line py-10 md:grid-cols-12">
                      <p className="font-display text-4xl font-light text-clay md:col-span-2">
                        {c.n}
                      </p>
                      <div className="md:col-span-10">
                        <h2 className="display-sm text-ink">{c.title}</h2>
                        <p className="body-copy mt-3">{c.body}</p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
              <Reveal>
                <div className="mt-8 rounded-sm border border-line bg-parchment p-8">
                  <p className="eyebrow-label">Brochure</p>
                  <p className="display-sm mt-3 text-ink">
                    Get the full Build Better brochure
                  </p>
                  <p className="body-copy mt-3 text-[0.92rem]">
                    Our brochure showcases recent projects, design inspiration
                    and the step-by-step process we follow. Request it by email
                    and we'll send a copy straight to your inbox.
                  </p>
                  <div className="mt-6">
                    <ArrowLink href="/contactus">Request the Brochure</ArrowLink>
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