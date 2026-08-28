import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { WixImage } from "@/components/ui/WixImage";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { processSteps, ebiStages } from "@/lib/data/process";

export const metadata: Metadata = buildMetadata({
  slug: "/ourprocess",
  title: "Our Building Process — Early Builder Involvement",
  description:
    "Discover the Inverloch Builders success process: Discovery, Design, Planning, Build and Handover — with Early Builder Involvement for cost and timeline certainty.",
});

const successSteps = [
  {
    title: "Discovery & Consultation",
    body: "Every great home starts with a conversation. We take the time to understand your goals, lifestyle and budget — bringing clarity to scope, timeline and next actions from day one.",
  },
  {
    title: "Detailed Cost Planning & QBE",
    body: "Once your concept drawings are ready, we prepare a Quality Build Estimate (QBE) — a realistic ballpark based on your design, specs and site conditions. As design progresses these figures refine into an open-book, trade-by-trade cost plan, before any fixed-price contract is signed.",
  },
  {
    title: "Early Builder Involvement (EBI)",
    body: "We get involved early — right alongside your designer or architect — providing practical advice on design efficiency, materials and construction methods, so every decision supports your lifestyle, budget and long-term goals before it ever hits site.",
  },
  {
    title: "Design & Documentation",
    body: "We help turn ideas into practical, buildable plans — refining structure, finishes, energy efficiency and compliance with your own designer or one of our trusted architectural partners.",
  },
  {
    title: "Permits & Approvals",
    body: "We coordinate with engineers, consultants, surveyors and council to manage all permits and approvals — compliant, accurate and ready for construction.",
  },
  {
    title: "Construction & Project Management",
    body: "Our experienced site team and trusted trades deliver every stage with precision and care. You'll have access to your live construction schedule and regular photo updates, with quality control and inspections managed at every stage.",
  },
  {
    title: "Handover & Beyond",
    body: "We walk through your completed home with you, deliver full documentation and warranty information, then check in at 3 and 12 months to make sure everything is performing perfectly.",
  },
];

export default function OurProcessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", item: "/" },
              { name: "Our Process", item: "/ourprocess" },
            ])
          ),
        }}
      />
      <PageHero
        eyebrow="Our Process"
        title={
          <>
            Architecturally designed.
            <br />
            <span className="italic text-clay">Expertly built. Personally delivered.</span>
          </>
        }
        intro="Clarity. Collaboration. Confidence. We've moved away from the old, fragmented approach where homeowners design first and discover the cost later."
        image={{
          src: "c86e57_50c7e90887b143a19dec0e8e5b25a365~mv2.jpeg",
          alt: "Custom kitchen in a design-led Bass Coast home",
        }}
      />

      {/* The narrative */}
      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <SectionHeader
            eyebrow="The journey"
            title={
              <>
                From first conversation
                <br />
                to <span className="italic">the keys in your hand.</span>
              </>
            }
          />
          <div className="mt-16 border-t border-line">
            {processSteps.map((s, i) => (
              <Reveal key={s.title} delay={i * 40}>
                <div className="grid gap-6 border-b border-line py-10 md:grid-cols-12 md:items-baseline">
                  <p className="font-display text-4xl font-light text-clay md:col-span-1">
                    {s.index}
                  </p>
                  <div className="md:col-span-4">
                    <h2 className="display-sm text-ink">{s.title}</h2>
                    <p className="mt-1 font-sans text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-bronze">
                      {s.short}
                    </p>
                  </div>
                  <p className="body-copy md:col-span-6 md:col-start-6">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* EBI story */}
      <section className="bg-ink py-24 text-ivory md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                tone="dark"
                eyebrow="Why we're different"
                title={
                  <>
                    Early Builder
                    <br />
                    <span className="italic text-clay">Involvement.</span>
                  </>
                }
                intro="The traditional process often fails homeowners: plans drawn without cost input, quotes higher than expected, time lost to redesigns. Our EBI process eliminates that disconnect."
              />
            </div>
            <div className="lg:col-span-7">
              {ebiStages.map((s, i) => (
                <Reveal key={s.number} delay={i * 40}>
                  <article className="grid gap-6 border-b border-line-dark py-8 md:grid-cols-12 md:items-center">
                    <p className="font-display text-3xl font-light text-clay md:col-span-2">
                      {s.number}
                    </p>
                    <div className="md:col-span-10">
                      <h3 className="display-sm text-ivory">{s.title}</h3>
                      <p className="mt-3 text-[0.95rem] leading-relaxed text-ivory/65">
                        {s.body}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Visual interlude */}
      <section className="bg-ivory py-24 md:py-28">
        <Container>
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden md:aspect-[21/9]">
              <WixImage
                src="c86e57_bd465f9e3e7c48c582ea29f682a86cb2~mv2.jpg"
                alt="Thermally broken double glazing installed in a custom home"
                width={2000}
                className="wix-img absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 max-w-md bg-ink/75 p-8 backdrop-blur-sm">
                <p className="display-sm text-ivory">
                  Built to last is engineered, not hoped for.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection
        heading="Begin the Process"
        intro="The first step is always the same — a relaxed conversation about your site, your ideas and what's possible."
      />
    </>
  );
}