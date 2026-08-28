"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WixImage } from "@/components/ui/WixImage";
import { testimonials } from "@/lib/data/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialsSlider() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const go = (dir: 1 | -1) =>
    setI((prev) => (prev + dir + testimonials.length) % testimonials.length);

  return (
    <section className="bg-ivory py-24 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Quote */}
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Client stories"
              title={
                <>
                  The measure
                  <br />
                  <span className="italic">of our work.</span>
                </>
              }
            />

            {/* Slider */}
            <div
              className="mt-10"
              aria-live="polite"
              aria-label="Client testimonials"
            >
              <blockquote key={i} className="stage-fade">
                <p className="display-lg text-ink">&ldquo;{t.quote}&rdquo;</p>
                <figcaption className="mt-8 flex items-baseline gap-4">
                  <p className="font-display text-xl text-ink">{t.author}</p>
                  <p className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.22em] text-stone">
                    {t.location} · {t.projectType}
                  </p>
                </figcaption>
              </blockquote>
            </div>

            {/* Controls */}
            <div className="mt-10 flex items-center gap-8">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous testimonial"
                  className="flex h-12 w-12 items-center justify-center border border-line text-ink transition-colors hover:border-ink hover:bg-ink hover:text-ivory"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next testimonial"
                  className="flex h-12 w-12 items-center justify-center border border-line text-ink transition-colors hover:border-ink hover:bg-ink hover:text-ivory"
                >
                  →
                </button>
              </div>
              <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-stone">
                {String(i + 1).padStart(2, "0")}
                <span className="mx-2 text-line">/</span>
                {String(testimonials.length).padStart(2, "0")}
              </p>
            </div>
          </div>

          {/* Imagery */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div key={`timg-${i}`} className="stage-fade relative aspect-[4/5] overflow-hidden">
                {t.image ? (
                  <WixImage
                    src={t.image.src}
                    alt={t.image.alt}
                    width={1000}
                    className="wix-img h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-parchment" />
                )}
                <div className="absolute bottom-0 left-0 bg-ivory/90 px-5 py-3 backdrop-blur-sm">
                  <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-ink">
                    Inverloch · Victoria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}