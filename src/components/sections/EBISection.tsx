"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { WixImage } from "@/components/ui/WixImage";
import { ebiStages } from "@/lib/data/process";

export function EBISection() {
  const [active, setActive] = useState(1);
  const stage = ebiStages[active];

  return (
    <section className="bg-ivory py-24 md:py-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="The differentiator"
              title={
                <>
                  Early Builder
                  <br />
                  <span className="italic">Involvement.</span>
                </>
              }
              intro="The old way fails homeowners: plans drawn without cost input, quotes that come back higher than expected, and time lost to redesigns. Our EBI process brings you, your designer, our engineers and our team together from the very first step."
            />
            <Reveal className="mt-10">
              <ButtonLink href="/ourprocess" variant="outline">
                See How We Build
              </ButtonLink>
            </Reveal>
          </div>

          {/* Interactive stage rail */}
          <div className="lg:col-span-7">
            <div
              role="tablist"
              aria-label="Early Builder Involvement stages"
              className="border-t border-line"
            >
              {ebiStages.map((s, i) => (
                <Reveal key={s.number} delay={i * 50}>
                  <button
                    role="tab"
                    id={`ebi-tab-${s.number}`}
                    aria-selected={active === i}
                    aria-controls="ebi-panel"
                    onClick={() => setActive(i)}
                    className={`group flex w-full items-baseline gap-5 border-b border-line py-5 text-left transition-colors ${
                      active === i ? "bg-parchment/70" : "hover:bg-parchment/40"
                    }`}
                  >
                    <span
                      className={`font-display text-lg transition-colors ${
                        active === i ? "text-clay" : "text-stone"
                      }`}
                    >
                      {s.number}
                    </span>
                    <span className="flex-1">
                      <span
                        className={`display-sm block transition-colors ${
                          active === i ? "text-ink" : "text-ash"
                        }`}
                      >
                        {s.title}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`block font-sans text-[0.65rem] uppercase tracking-[0.22em] transition-colors ${
                          active === i ? "text-bronze" : "text-stone"
                        }`}
                      >
                        {s.short}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={`font-sans transition-all duration-300 ${
                        active === i
                          ? "translate-x-0 text-ink"
                          : "-translate-x-1 text-line"
                      }`}
                    >
                      →
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>

            {/* Active stage panel */}
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div
                id="ebi-panel"
                role="tabpanel"
                aria-labelledby={`ebi-tab-${stage.number}`}
                aria-live="polite"
              >
                <div key={stage.number} className="stage-fade">
                  <p className="body-copy">{stage.body}</p>
                  <p className="mt-5 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-bronze">
                    {stage.number} / 05
                  </p>
                </div>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden">
                <div key={`img-${stage.number}`} className="stage-fade absolute inset-0">
                  <WixImage
                    src={stage.image.src}
                    alt={stage.image.alt}
                    width={1100}
                    loading="lazy"
                    className="wix-img h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}