import type { Img } from "@/lib/wix";

export type Service = {
  slug: string;
  title: string;
  label: string;
  headline: string;
  intro: string;
  paragraphs: string[];
  image: Img;
  gallery: Img[];
};

export const services: Service[] = [
  {
    slug: "custom-builds",
    title: "Custom Builds",
    label: "Custom Homes",
    headline: "Architectural Homes. Built Better. Built to Last.",
    intro:
      "Architecturally designed custom homes that reflect how you live — shaped by your ideas, crafted with precision, and delivered with enduring quality.",
    paragraphs: [
      "From the first conversation to the final handover, we take a collaborative, transparent approach that keeps your design, budget, and goals perfectly aligned.",
      "Working with our trusted architect and design partners, we combine creative thinking with proven construction expertise to bring your vision to life. Because no two families are the same, and no two homes should be either.",
      "We don't just build houses — we build better homes, built to last, built for you.",
    ],
    image: {
      src: "c86e57_ae0a6034b3904d83a06069cc09b43630~mv2.jpeg",
      alt: "Architecturally designed custom home built by Inverloch Builders",
    },
    gallery: [
      {
        src: "c86e57_17d256f6aa224b06b7573446ed8d051e~mv2.jpg",
        alt: "Fern — design-led custom coastal home in Inverloch",
      },
      {
        src: "c86e57_10f3129374ba4c33b8cf03ba206c03ff~mv2.jpg",
        alt: "Custom coastal home exterior on the Bass Coast",
      },
      {
        src: "c86e57_50c7e90887b143a19dec0e8e5b25a365~mv2.jpeg",
        alt: "Custom kitchen cabinetry and details",
      },
    ],
  },
  {
    slug: "home-renovations",
    title: "Home Renovations",
    label: "Renovations",
    headline: "Transform the Home You Love.",
    intro:
      "Turning an existing space into something fresh, functional, and beautifully renewed — with the same care reserved for new builds.",
    paragraphs: [
      "Whether you're restoring character to an older property, reconfiguring your layout, or modernising your finishes, we bring design insight and construction expertise to every detail.",
      "We'll guide you from planning and documentation through to construction and completion — ensuring your renovation runs smoothly, on time, and within budget.",
      "At Inverloch Builders, we help you rediscover the home you already love — beautifully reimagined and built better for the future.",
    ],
    image: {
      src: "c86e57_650bbc39a51d41a5a1eb5c94f5d81280~mv2.jpg",
      alt: "Home renovation completed by Inverloch Builders",
    },
    gallery: [
      {
        src: "c86e57_1c42dbd2843e4890a4d506b0de52e492~mv2.jpg",
        alt: "Cutriss renovation — coastal property transformation in Inverloch",
      },
      {
        src: "c86e57_2c85d80522ac47439ca0ee4b6dd6d6f4~mv2.jpg",
        alt: "Renovated coastal home interior",
      },
      {
        src: "c86e57_8d7a8bd554e44c9a8f05067ef4344391~mv2.jpg",
        alt: "Renovated bathroom and interior detail in a Bass Coast home",
      },
    ],
  },
  {
    slug: "extensions",
    title: "Extensions",
    label: "Extensions",
    headline: "More Space. More Comfort. More Possibility.",
    intro:
      "Well-designed extensions that transform how you live — giving you the space you need while staying in the place you love.",
    paragraphs: [
      "Whether it's a new bedroom for a growing family, a sun-filled living area, or a seamless connection to the outdoors, we design and build extensions that blend effortlessly with your existing home.",
      "Our team manages every step — from design collaboration and approvals to construction and finishing touches — ensuring a smooth, transparent process from start to finish.",
      "With thoughtful planning and genuine care, we create extensions that enhance your lifestyle and elevate your home.",
    ],
    image: {
      src: "c86e57_dcf12e6cf06a4b9e8903408ea572445c~mv2.jpg",
      alt: "Home extension designed and built by Inverloch Builders",
    },
    gallery: [
      {
        src: "c86e57_36bf25534b2d4792b34fbcd9517a502a~mv2.jpg",
        alt: "Aerial view of an extension project",
      },
      {
        src: "c86e57_e66f88a68b47465f8c81441fedeedf62~mv2.jpg",
        alt: "Extension and transformed living spaces in Inverloch",
      },
      {
        src: "c86e57_fe86bc7c7a244839af01fadb54164de8~mv2.jpg",
        alt: "Extended home connecting indoors to the outdoors",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}