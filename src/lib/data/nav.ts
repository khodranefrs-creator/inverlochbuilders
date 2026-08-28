export type NavItem = {
  label: string;
  href: string;
  cta?: boolean;
};

export const navigation: NavItem[] = [
  { label: "Our Work", href: "/ourworks" },
  { label: "Services", href: "/services" },
  { label: "Our Process", href: "/ourprocess" },
  { label: "About", href: "/about" },
  { label: "Locations", href: "/locations" },
  { label: "FAQ", href: "/faqs" },
  { label: "Contact", href: "/contactus", cta: true },
];

export const ctaLabel = "Book a Discovery Call";

export const footerServiceLinks = [
  { label: "Custom Builds", href: "/services#custom-builds" },
  { label: "Home Renovations", href: "/services#home-renovations" },
  { label: "Extensions", href: "/services#extensions" },
  { label: "Our Process", href: "/ourprocess" },
  { label: "Build Better Guide", href: "/buildbetterguide" },
];

export const footerCompanyLinks = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/ourworks" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faqs" },
  { label: "Contact", href: "/contactus" },
];