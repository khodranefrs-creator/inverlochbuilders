import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { BrandStatement } from "@/components/sections/BrandStatement";
import { SelectedProjects } from "@/components/sections/SelectedProjects";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { EBISection } from "@/components/sections/EBISection";
import { VideoTestimonial } from "@/components/sections/VideoTestimonial";
import { TestimonialsSlider } from "@/components/sections/TestimonialsSlider";
import { RenovationsGallery } from "@/components/sections/RenovationsGallery";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { LocationsPreview } from "@/components/sections/LocationsPreview";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata, localBusinessJsonLd } from "@/lib/seo";
import { brandConfig } from "@/lib/data/brand";

export const metadata: Metadata = buildMetadata({
  slug: "/",
  title: brandConfig.titleBase,
  description: brandConfig.metaDescription,
});

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
      />
      <Hero />
      <BrandStatement />
      <SelectedProjects />
      <WhyChoose />
      <ServicesSection />
      <EBISection />
      <VideoTestimonial />
      <TestimonialsSlider />
      <RenovationsGallery />
      <ProcessTimeline />
      <LocationsPreview />
      <CTASection heading="Start Your Journey" />
    </>
  );
}