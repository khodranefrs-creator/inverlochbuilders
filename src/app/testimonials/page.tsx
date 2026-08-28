import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { WixImage } from "@/components/ui/WixImage";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { testimonials } from "@/lib/data/testimonials";

export const metadata: Metadata = buildMetadata({
  slug: "/testimonials",
  title: "Client Testimonials",
  description:
    "Real stories from Inverloch Builders clients across the Bass Coast — the service, the communication and the finished homes they tell us about.",
});

export default function TestimonialsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbJsonLd([
              { name: "Home", item: "/" },
              { name: "Testimonials", item: "/testimonials" },
            ]),
            {
              "@context": "https://schema.org",
              "@type": "Review",
              itemReviewed: {
                "@type": "HomeAndConstructionBusiness",
                name: "Inverloch Builders",
              },
            },
          ]),
        }}
      />
      <PageHero
        eyebrow="Testimonials"
        title={
          <>
            Stories behind
            <br />
            <span className="italic text-clay">the homes.</span>
          </>
        }
        intro="The true measure of our work is the stories our clients share."
      />

      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <div className="border-t border-line">
            {testimonials.map((t, i) => (
              <Reveal key={t.author} delay={i * 40}>
                <article className="grid gap-10 border-b border-line py-14 md:grid-cols-12 md:items-center">
                  <div className={`${i % 2 === 1 ? "md:order-2" : ""} md:col-span-7`}>
                    <p className="display-lg text-ink">&ldquo;{t.quote}&rdquo;</p>
                    <p className="mt-7 flex items-baseline gap-4">
                      <span className="font-display text-2xl text-ink">
                        {t.author}
                      </span>
                      <span className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.22em] text-stone">
                        {t.location} · {t.projectType}
                      </span>
                    </p>
                  </div>
                  {t.image && (
                    <div
                      className={`${i % 2 === 1 ? "md:order-1" : ""} md:col-span-3`}
                    >
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <WixImage
                          src={t.image.src}
                          alt={t.image.alt}
                          width={700}
                          className="wix-img absolute inset-0 h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        heading="Join Them"
        intro="The best builders are chosen by their clients. Start the conversation and see if Inverloch Builders is the right fit for your home."
      />
    </>
  );
}