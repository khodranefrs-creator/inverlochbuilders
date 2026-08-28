"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { WixImage } from "@/components/ui/WixImage";
import { videoTestimonial } from "@/lib/data/testimonials";

export function VideoTestimonial() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const v = videoTestimonial;

  return (
    <section className="bg-ink py-24 text-ivory md:py-36">
      <Container>
        <Eyebrow tone="dark" muted className="mb-6">
          {v.eyebrow}
        </Eyebrow>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <h2 className="display-lg lg:col-span-8">
            Real people.
            <br />
            <span className="italic text-clay">Real homes.</span> Real
            experiences.
          </h2>
          <p className="lede max-w-sm text-ivory/65 lg:col-span-4">
            {v.quote}
          </p>
        </div>

        {/* Cinematic frame */}
        <Reveal className="mt-12">
          <div className="group relative aspect-[16/9] overflow-hidden bg-charcoal lg:aspect-[21/9]">
            <WixImage
              src={v.poster.src}
              alt={v.poster.alt}
              width={2000}
              className="zoom-media wix-img absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-ink/30" />

            {/* Play */}
            <button
              type="button"
              onClick={() => setDialogOpen(true)}
              aria-label={`Play video — ${v.clientName}, ${v.clientLocation}`}
              className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-4"
            >
              <span className="relative flex h-20 w-20 items-center justify-center rounded-full border border-ivory/50 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-ivory group-hover:text-ink md:h-24 md:w-24">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="ml-1 h-6 w-6 fill-current md:h-7 md:w-7"
                >
                  <path d="M8 5.5v13l11-6.5z" />
                </svg>
              </span>
            </button>

            {/* Meta bottom left */}
            <div className="absolute bottom-0 flex w-full items-end justify-between gap-6 p-6 md:p-9">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <p className="font-display text-xl text-ivory md:text-2xl">
                  {v.clientName}
                </p>
                <p className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.22em] text-ivory/70">
                  {v.clientLocation} · {v.projectType}
                </p>
              </div>
              <p className="hidden font-sans text-[0.68rem] font-medium uppercase tracking-[0.22em] text-ivory/70 sm:block">
                {v.duration}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>

      {/* Dialog */}
      {dialogOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Client testimonial video"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-6"
          onClick={() => setDialogOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setDialogOpen(false)}
              aria-label="Close video"
              className="absolute -top-12 right-0 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-ivory/70 hover:text-ivory"
            >
              Close ✕
            </button>
            <div className="aspect-video overflow-hidden bg-charcoal">
              {v.videoFile ? (
                <video
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  poster={`https://static.wixstatic.com/media/${v.poster.src}/v1/fill/w_1400,h_788,al_c,q_90,enc_avif,quality_auto/poster.jpg`}
                  className="h-full w-full"
                >
                  <source src={v.videoFile} type="video/mp4" />
                </video>
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-6 p-8 text-center">
                  <p className="display-sm text-ivory">
                    Watch the full handover video
                  </p>
                  <a
                    href={v.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 border border-ivory/40 px-8 py-4 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-ivory transition-colors hover:bg-ivory hover:text-ink"
                  >
                    Open on Instagram →
                  </a>
                  <p className="max-w-sm text-sm text-ivory/55">
                    In production, embed your final client film as an mp4 via
                    the <span className="text-ivory">videoFile</span> field in
                    testimonial data.
                  </p>
                </div>
              )}
            </div>
            <p className="mt-4 text-center font-sans text-[0.7rem] uppercase tracking-[0.22em] text-ivory/50">
              {v.clientName} · {v.clientProjectLabel}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}