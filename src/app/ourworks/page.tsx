import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = buildMetadata({
  slug: "/ourworks",
  title: "Our Work — Custom Home Builds & Renovations",
  description:
    "Explore custom home builds, renovations and extensions by Inverloch Builders — from Fern to Cutriss, Sandy Mount, John Flagg and our coastal homes near Wilsons Promontory.",
});

export default function OurWorkPage() {
  const [featured, ...rest] = projects;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", item: "/" },
              { name: "Our Work", item: "/ourworks" },
            ])
          ),
        }}
      />
      <PageHero
        eyebrow="Our Work"
        title={
          <>
            A showcase of our latest builds
            <br />
            <span className="italic text-clay">and renovations.</span>
          </>
        }
        intro="Every project starts with the same belief: a home should be designed around the people who live in it — and built to last."
        image={{
          src: "c86e57_22bca1758a994e498c08fee96384a6f4~mv2.jpg",
          alt: "Recently completed custom home by Inverloch Builders",
        }}
      />

      <section className="bg-ivory py-24 md:py-32">
        <Container>
          {/* Featured */}
          <Reveal>
            <ProjectCard
              project={featured}
              ratio="aspect-[16/10] md:aspect-[21/10]"
              size="lg"
            />
          </Reveal>

          {/* Grid */}
          <div className="mt-16 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <ProjectCard project={p} ratio="aspect-[4/5]" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        heading="Your Home Next"
        intro="Like what you see? Let's talk about what's possible on your site — and what a home built better could feel like."
      />
    </>
  );
}