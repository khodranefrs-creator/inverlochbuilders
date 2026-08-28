import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function BrandStatement() {
  return (
    <section className="bg-ivory py-24 md:py-36">
      <Container>
        <Eyebrow muted>A philosophy in three words</Eyebrow>

        <Reveal>
          <h2 className="display-xl mt-8 text-ink">
            Build Better.
            <br />
            <span className="italic">Live Better.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-12">
          <Reveal delay={80} className="md:col-span-4">
            <p className="eyebrow-label">Our belief</p>
            <p className="body-copy mt-4">
              We believe great homes start with good design and honest building.
              Thoughtful architecture, premium materials and sustainable
              practices — spaces that feel right today and will still feel
              right decades from now.
            </p>
          </Reveal>
          <Reveal delay={160} className="md:col-span-4">
            <p className="eyebrow-label">Our promise</p>
            <p className="body-copy mt-4">
              Every element is built with precision and care, using proven
              methods and lasting materials — so your home performs beautifully
              and truly stands the test of time.
            </p>
          </Reveal>
          <Reveal delay={240} className="md:col-span-4">
            <p className="eyebrow-label">Our standard</p>
            <p className="body-copy mt-4">
              Homes that perform beautifully, reflect the people who live in
              them — and last. That's what it means to build better. And it's
              what we've built our name on.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}