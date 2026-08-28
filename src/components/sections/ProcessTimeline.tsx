import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/ButtonLink";
import { processSteps } from "@/lib/data/process";

export function ProcessTimeline() {
  return (
    <section className="bg-ivory py-24 md:py-36">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <SectionHeader
            className="lg:col-span-8"
            eyebrow="How it works"
            title={
              <>
                From first conversation
                <br />
                to <span className="italic">handover.</span>
              </>
            }
            intro="Five stages, one clear path. You'll always know what happens next — because you're never left guessing with us."
          />
          <Reveal className="lg:col-span-4 lg:pb-2">
            <ArrowLink href="/ourprocess">Our Process in Detail</ArrowLink>
          </Reveal>
        </div>

        <div className="mt-16 border-t border-line">
          <div className="grid gap-10 pt-10 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <div className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -top-[3.4rem] left-0 h-2 w-2 translate-y-1/2 rounded-full border border-bronze bg-ivory"
                  />
                  <p className="font-display text-5xl font-light text-clay/70">
                    {s.index}
                  </p>
                  <h3 className="display-sm mt-4 text-ink">{s.title}</h3>
                  <p className="mt-1.5 font-sans text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-bronze">
                    {s.short}
                  </p>
                  <p className="body-copy mt-4 text-[0.92rem]">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}