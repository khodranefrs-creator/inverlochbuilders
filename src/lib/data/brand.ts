/* -------------------------------------------------------------------------- */
/*  BRAND CONFIG                                                               */
/*                                                                             */
/*  Swap the active brand to reskin the entire system for a second company.    */
/*  Simply change `const ACTIVE_BRAND = "inverloch"` to `"basscoast"`.         */
/*  All components, routes and SEO archives read from the active brand.        */
/* -------------------------------------------------------------------------- */

export type BrandConfig = {
  id: "inverloch" | "basscoast";
  name: string;
  legalName: string;
  shortName: string;
  tagline: string;
  positioning: string;
  descriptor: string;
  siteUrl: string;
  titleBase: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  addressLine1: string;
  addressLine2: string;
  region: string;
  instagram: string;
  facebook: string;
  abn?: string;
};

const brands: Record<BrandConfig["id"], BrandConfig> = {
  inverloch: {
    id: "inverloch",
    name: "Inverloch Builders",
    legalName: "Inverloch Builders",
    shortName: "Inverloch",
    tagline: "Build Better. Built to Last.",
    positioning: "Architecturally Designed. Expertly Built. Personally Delivered.",
    descriptor: "Custom home builder, renovations & extensions",
    siteUrl: "https://www.inverlochbuilders.com.au",
    titleBase: "Custom Home Builders Inverloch",
    metaDescription:
      "Architecturally designed custom homes, renovations and extensions across the Bass Coast and South Gippsland. Early Builder Involvement means cost and timeline certainty — built to last by Inverloch Builders.",
    ogTitle: "Inverloch Builders — Build Better. Built to Last.",
    ogDescription:
      "Premium custom homes, renovations and extensions across the Bass Coast and South Gippsland. Designed around you. Built to last.",
    ogImage:
      "https://static.wixstatic.com/media/c86e57_c0e95e74d8ef4d6facb91b33a4114ea2~mv2.jpg",
    phone: "0493 133 611",
    phoneHref: "tel:0493133611",
    email: "info@inverlochbuilders.com.au",
    emailHref: "mailto:info@inverlochbuilders.com.au",
    addressLine1: "Inverloch",
    addressLine2: "VIC 3996",
    region: "Bass Coast & South Gippsland",
    instagram: "https://www.instagram.com/inverlochbuilders/",
    facebook: "https://www.facebook.com/Inverlochbuilders",
  },
  basscoast: {
    id: "basscoast",
    name: "Bass Coast Builders",
    legalName: "Bass Coast Builders",
    shortName: "Bass Coast",
    tagline: "Build Better. Built to Last.",
    positioning: "Architecturally Designed. Expertly Built. Locally Delivered.",
    descriptor: "Premium coastal home builder — Bass Coast & surrounds",
    siteUrl: "https://www.basscoastbuilders.com.au",
    titleBase: "Custom Home Builders Bass Coast",
    metaDescription:
      "Bass Coast Builders — architecturally designed custom homes, renovations and extensions across the Bass Coast, Phillip Island and South Gippsland. Early Builder Involvement for cost certainty and homes built to last.",
    ogTitle: "Bass Coast Builders — Build Better. Built to Last.",
    ogDescription:
      "Premium custom homes, renovations and extensions built for coastal life across the Bass Coast, Phillip Island and South Gippsland.",
    ogImage:
      "https://static.wixstatic.com/media/c86e57_c0e95e74d8ef4d6facb91b33a4114ea2~mv2.jpg",
    phone: "0493 133 611",
    phoneHref: "tel:0493133611",
    email: "info@basscoastbuilders.com.au",
    emailHref: "mailto:info@basscoastbuilders.com.au",
    addressLine1: "Inverloch",
    addressLine2: "VIC 3996",
    region: "Bass Coast & South Gippsland",
    instagram: "https://www.instagram.com/inverlochbuilders/",
    facebook: "https://www.facebook.com/Inverlochbuilders",
  },
};

const ACTIVE_BRAND: BrandConfig["id"] = "inverloch";

export const brandConfig: BrandConfig = brands[ACTIVE_BRAND];
export const allBrands = brands;