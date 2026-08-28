import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { DiscoveryCallForm } from "@/components/sections/DiscoveryCallForm";
import { brandConfig } from "@/lib/data/brand";

const nextSteps = [
  {
    n: "01",
    t: "We listen",
    d: "A relaxed call about your site, your ideas and your budget.",
  },
  {
    n: "02",
    t: "We advise",
    d: "Honest guidance on cost, timing and approach — no pressure.",
  },
  {
    n: "03",
    t: "You decide",
    d: "A clear next step, whether that's a site meeting or a design workshop.",
  },
];

export function CTASection({
  heading = "Start Your Journey",
  intro,
  eyebrow = "Book a Discovery Call",
}: {
  heading?: string;
  intro?: string;
  eyebrow?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-ivory md:py-36">
      {/* Fixed depth image wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url(https://static.wixstatic.com/media/c86e57_ed1b0d1b54b741489df3b22f9d1e3caf~mv2.jpg/v1/fit/w_1600,q_70,enc_avif,quality_auto/bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow tone="dark" muted>
              {eyebrow}
            </Eyebrow>
            <h2 className="display-xl mt-6">
              {heading.split(" ").map((word, i, arr) => (
                <span
                  key={i}
                  className={
                    i === arr.length - 1 ? "block italic text-clay" : "block"
                  }
                >
                  {word}
                </span>
              ))}
            </h2>
            <p className="lede mt-8 max-w-md text-ivory/65">
              {intro ??
                "Tell us where you're at — an idea, sketches, or completed plans. One conversation is all it takes to understand what's possible."}
            </p>

            <div className="mt-12 border-t border-line-dark pt-8">
              {nextSteps.map((s) => (
                <div key={s.n} className="flex gap-5 py-4">
                  <span className="font-display text-2xl font-light text-clay/70">
                    {s.n}
                  </span>
                  <div>
                    <p className="font-sans text-sm font-semibold uppercase tracking-[0.14em]">
                      {s.t}
                    </p>
                    <p className="mt-1 text-sm text-ivory/60">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-line-dark pt-8">
              <a
                href={brandConfig.phoneHref}
                className="line-link font-display text-lg text-ivory hover:text-clay"
              >
                {brandConfig.phone}
              </a>
              <a
                href={brandConfig.emailHref}
                className="line-link font-display text-lg text-ivory hover:text-clay"
              >
                {brandConfig.email}
              </a>
            </div>
          </div>

          <Reveal className="lg:col-span-6 lg:col-start-7">
            <div className="border border-line-dark bg-charcoal/70 p-7 backdrop-blur-sm md:p-10">
              <p className="eyebrow-label-muted">Discovery call</p>
              <p className="display-sm mt-3 text-ivory">
                Book your discovery call
              </p>
              <DiscoveryCallForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}