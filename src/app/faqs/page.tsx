import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  slug: "/faqs",
  title: "FAQ — Getting Started",
  description:
    "Frequently asked questions about building with Inverloch Builders — the discovery call, Early Builder Involvement, cost certainty, coastal construction and what happens after handover.",
});

const faqs = [
  {
    q: "What information do you need to provide an accurate proposal?",
    a: "Concept drawings — or even rough sketches and ideas — your site address, and an honest indication of your budget. From there we assess scope, structure and intent, and prepare a detailed proposal covering the full scope of works before any fixed-price contract is signed.",
  },
  {
    q: "How do we set a realistic budget?",
    a: "Early. Once your concept drawings are ready we prepare a Quality Build Estimate (QBE), then refine it into an open-book, trade-by-trade cost plan as the design progresses. By involving the builder during design, you'll know what your home will cost long before your plans are completed.",
  },
  {
    q: "What is the process for designing and building with Inverloch Builders?",
    a: "Five clear stages. Discover — we listen first, understanding your site, lifestyle and budget. Design — we turn ideas into practical, buildable plans with your designer or one of our trusted design partners. Plan — cost planning, QBE and permits handled early. Build — an experienced on-site team with live schedule access and quality checks at every stage. Deliver — full handover documentation, warranty, and 3- and 12-month check-ins.",
  },
  {
    q: "When is the right time to bring a builder on board?",
    a: "As early as possible — ideally while your design is still being drawn. That's the idea behind Early Builder Involvement: construction methodology, structural requirements, site conditions and real-world costs are all considered while changes are still simple and inexpensive.",
  },
  {
    q: "How do you manage variations during construction?",
    a: "Transparently. Any change to scope is priced openly and discussed with you before we proceed, with the cost and timeline impact made clear. Our open-book approach means you're never surprised by a variation you haven't approved.",
  },
  {
    q: "Do you build sustainable or high-performance homes?",
    a: "Yes. Our recent homes draw on passive-house principles — strong orientation for northern light, tightly built envelopes, thermally broken double glazing, and solar hot water and electricity — delivering comfort and year-round energy efficiency suited to the coast.",
  },
  {
    q: "Why involve the builder early in the design process?",
    a: "It removes the disconnect between plans and reality. Design decisions are tested against buildability and budget while the design is still flexible, so you avoid costly redesigns, exaggerated quotes and wasted time. It saves money and stress, and delivers homes that are practical, affordable and achievable before drawings are complete.",
  },
  {
    q: "What makes Inverloch Builders different?",
    a: "We're a builder-led, design-aware team rather than a volume operation: an in-house carpentry team, over 30 years of experience across custom homes and major renovations, Early Builder Involvement, and a deliberately limited number of projects each year so every build receives genuine focus.",
  },
  {
    q: "Do you work with architects or only your own designers?",
    a: "Both. We collaborate with your chosen architect or designer, or with our trusted design partners — such as DB Design, AD Building Design and Beaumont Concepts on recent projects — bringing real construction knowledge into the design phase.",
  },
  {
    q: "Where do you build?",
    a: "Based in Inverloch, we build across the Bass Coast and South Gippsland — including Inverloch, Walkerville, Cape Woolamai, Venus Bay, San Remo, Phillip Island, Leongatha, Korumburra and Foster.",
  },
  {
    q: "How long will my project take?",
    a: "It depends on scope and site, but through Early Builder Involvement we lock in a realistic schedule before site start, engaging suppliers and trades early with real commitments. You'll know expected timeframes upfront, with regular photo updates and live schedule access while we build.",
  },
  {
    q: "Do you include landscaping and exterior works?",
    a: "Yes — project scopes commonly include outdoor living areas such as alfrescos, decking and swim spa surrounds, and we coordinate site and landscape works as part of the overall project.",
  },
  {
    q: "What happens after handover?",
    a: "We walk through the completed home with you and provide full handover documentation, warranty information and your final records. Built to last means we're still looking after it — we check in at 3 and 12 months to make sure your home is performing perfectly.",
  },
];

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbJsonLd([
              { name: "Home", item: "/" },
              { name: "FAQ", item: "/faqs" },
            ]),
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ]),
        }}
      />
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Answers, before
            <br />
            <span className="italic text-clay">you even ask.</span>
          </>
        }
        intro="The questions homeowners ask us most — answered plainly, the way we'd answer them in person."
      />

      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <SectionHeader
                  eyebrow="Getting started"
                  title={
                    <>
                      Everything you
                      <br />
                      want to know.
                    </>
                  }
                />
                <div className="mt-8">
                  <ButtonLink href="/contactus" variant="outline">
                    Ask a Question
                  </ButtonLink>
                </div>
              </div>
            </div>
            <div className="border-t border-line lg:col-span-7 lg:col-start-6">
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={Math.min(i * 30, 150)}>
                  <details className="group border-b border-line py-6">
                    <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 text-ink [&::-webkit-details-marker]:hidden">
                      <span className="display-sm">
                        {f.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className="font-sans text-lg text-bronze transition-transform duration-300 group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="body-copy mt-4 max-w-2xl">{f.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        heading="Still Curious?"
        intro="If your question isn't here, bring it to a discovery call — we'll give it to you straight."
      />
    </>
  );
}