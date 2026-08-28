import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { DiscoveryCallForm } from "@/components/sections/DiscoveryCallForm";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { brandConfig } from "@/lib/data/brand";
import { locations } from "@/lib/data/locations";

export const metadata: Metadata = buildMetadata({
  slug: "/contactus",
  title: "Contact — Book a Discovery Call",
  description:
    "Start your project with Inverloch Builders. Call 0493 133 611, email info@inverlochbuilders.com.au or book a free discovery call today.",
});

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", item: "/" },
              { name: "Contact", item: "/contactus" },
            ])
          ),
        }}
      />
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Start your
            <br />
            <span className="italic text-clay">project with us.</span>
          </>
        }
        intro="Tell us where you're at — an idea, rough sketches, or completed plans. A discovery call is the quickest way to understand what's possible on your site."
        tone="light"
        image={{
          src: "c86e57_17d256f6aa224b06b7573446ed8d051e~mv2.jpg",
          alt: "Custom home designed and built by Inverloch Builders",
        }}
      />

      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            {/* Details */}
            <div className="lg:col-span-4">
              <SectionHeader
                eyebrow="Details"
                title="Talk to a builder, not a sales team."
              />
              <div className="mt-10 space-y-8">
                <div className="border-t border-line pt-6">
                  <p className="eyebrow-label">Phone</p>
                  <a
                    href={brandConfig.phoneHref}
                    className="mt-2 inline-block font-display text-2xl text-ink hover:text-clay"
                  >
                    {brandConfig.phone}
                  </a>
                </div>
                <div className="border-t border-line pt-6">
                  <p className="eyebrow-label">Email</p>
                  <a
                    href={brandConfig.emailHref}
                    className="mt-2 inline-block font-display text-2xl text-ink hover:text-clay"
                  >
                    {brandConfig.email}
                  </a>
                </div>
                <div className="border-t border-line pt-6">
                  <p className="eyebrow-label">Based</p>
                  <p className="mt-2 font-display text-2xl text-ink">
                    {brandConfig.addressLine1}{" "}
                    <span className="text-ash">{brandConfig.addressLine2}</span>
                  </p>
                </div>
                <div className="border-t border-line pt-6">
                  <p className="eyebrow-label">Building across</p>
                  <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
                    {locations.map((l) => (
                      <li key={l.slug}>
                        <Link
                          href={`/${l.slug}`}
                          className="line-link text-sm text-ash hover:text-ink"
                        >
                          {l.area}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Form */}
            <Reveal className="lg:col-span-7 lg:col-start-6">
              <div className="border border-line bg-ink p-7 text-ivory md:p-12">
                <p className="eyebrow-label-muted">Discovery call</p>
                <p className="display-sm mt-3 text-ivory">
                  Book a free discovery call
                </p>
                <p className="mt-3 max-w-md text-sm text-ivory/60">
                  We take a limited number of projects each year — a call is the
                  best way to see if this is the right time to build.
                </p>
                <div className="mt-8">
                  <DiscoveryCallForm />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}