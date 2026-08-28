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
    q: "Where does Inverloch Builders build?",
    a: "Based in Inverloch, we build across the Bass Coast and South Gippsland — including Inverloch, Venus Bay, Woolamai, Phillip Island, San Remo, Leongatha, Korumburra, Walkerville and Foster.",
  },
  {
    q: "What is Early Builder Involvement?",
    a: "Our EBI model brings everyone — builder, designer, engineer and client — together from the very start. By involving the builder during design, every decision is tested against budget and buildability. It saves time, reduces stress, and ensures your ideas are practical, affordable and achievable before drawings are complete.",
  },
  {
    q: "When will I know what my home will cost?",
    a: "Early. Once your concept drawings are ready we prepare a Quality Build Estimate (QBE), refining it into an open-book, trade-by-trade cost plan as the design progresses. You receive a detailed Proposal covering the full scope of works before any fixed-price contract is signed — no surprises.",
  },
  {
    q: "How long does a build or renovation take?",
    a: "Through Early Builder Involvement we lock in a realistic schedule before site start, engaging suppliers and trades early with real quotes. Regular photo updates and live schedule access mean you always know what's happening and when.",
  },
  {
    q: "Can you work with my own architect or designer?",
    a: "Yes. We collaborate with your chosen designer or one of our trusted architectural partners. Our team brings real construction knowledge into the design phase, helping refine structure, materials and energy efficiency.",
  },
  {
    q: "Do you handle permits and approvals?",
    a: "Yes. We coordinate with engineers, consultants, surveyors and council to manage all permits and approvals — ensuring everything is compliant, accurate and ready for construction on time.",
  },
  {
    q: "What happens after handover?",
    a: "You receive full handover documentation, warranty information and a USB with your final records. We check in at 3 and 12 months to make sure your home is performing perfectly.",
  },
  {
    q: "Are you a registered builder?",
    a: "Yes. A builder's registration isn't paperwork — it protects you. Our registered team builds with integrity, verified insurance and a commitment to safety on site.",
  },
  {
    q: "How do I get started?",
    a: "Book a discovery call — a relaxed conversation about your site, your ideas and your budget. From there we map out scope, timing and the clearest path to your new home.",
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