import type { Metadata } from "next";
import { brandConfig } from "@/lib/data/brand";

export type SeoPage = {
  slug: string;
  title: string;
  description: string;
  ogImage?: string;
  ogType?: "website" | "article";
};

/** Build canonical metadata for any page within the brand's site. */
export function buildMetadata(page: SeoPage): Metadata {
  const url = `${brandConfig.siteUrl}${page.slug === "/" ? "" : page.slug}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      locale: "en_AU",
      siteName: brandConfig.name,
      title: page.title,
      description: page.description,
      url,
      type: page.ogType ?? "website",
      images: page.ogImage
        ? [{ url: page.ogImage }]
        : [{ url: brandConfig.ogImage }],
    },
  };
}

export type Breadcrumb = {
  name: string;
  item: string;
};

/**
 * JSON-LD breadcrumb + local business markup.
 * Use dangerouslySetInnerHTML on a <script type="application/ld+json"> tag.
 */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: brandConfig.legalName,
    url: brandConfig.siteUrl,
    telephone: brandConfig.phone,
    email: brandConfig.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: brandConfig.addressLine1,
      addressRegion: "VIC",
      postalCode: "3996",
      addressCountry: "AU",
    },
    areaServed: [
      "Bass Coast",
      "South Gippsland",
      "Inverloch",
      "Phillip Island",
      "Venus Bay",
    ],
    slogan: brandConfig.tagline,
    description: brandConfig.metaDescription,
  };
}

export function breadcrumbJsonLd(items: Breadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${brandConfig.siteUrl}${item.item}`,
    })),
  };
}