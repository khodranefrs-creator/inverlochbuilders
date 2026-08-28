import type { Img } from "@/lib/wix";

export type Project = {
  slug: string;
  name: string;
  /** Real street/locality descriptor shown on gallery cards */
  location: string;
  type: string;
  typeLabel: string;
  tagline: string;
  description: string[];
  detail: { label: string; value: string }[];
  hero: Img;
  gallery: Img[];
  featured?: boolean;
  year?: string;
  architect?: string;
  /** Existing site location page that features this project, where one exists */
  locationSlug?: string;
};

export const projects: Project[] = [
  {
    slug: "fern",
    name: "Fern",
    location: "Inverloch",
    type: "custom-home",
    typeLabel: "Custom Home",
    tagline: "Reclaimed brick. Spotted Gum. Northern light.",
    featured: true,
    locationSlug: "inverloch",
    description: [
      "Fern is a striking, architecturally designed residence that blends timeless character with modern performance. Built using old reclaimed brick, natural materials, and a feature Spotted Gum cladding element, the home sits comfortably within its treed environment while making a bold statement through its refined form and Colourbond Monument exterior.",
      "Designed to take full advantage of northern light, Fern embraces passive-house influences and tight building principles to deliver exceptional comfort, energy efficiency, and year-round livability. Warm plywood-lined ceilings and polished concrete floors bring texture, durability, and a sense of calm to the open-plan interiors, creating a home that feels grounded and connected to its surroundings.",
      "Large, flowing spaces open to the landscape, allowing the tree canopy and seasonal light to shape the atmosphere within. Every detail has been carefully considered — from orientation to materiality — to ensure a healthy, efficient home built to last.",
      "Fern stands as a testament to quality craftsmanship, sustainable design, and a truly bespoke approach to building.",
      "A custom home, beautifully designed by DB Design and built to last by Inverloch Builders.",
    ],
    detail: [
      { label: "Location", value: "Inverloch, VIC" },
      { label: "Type", value: "Architecturally Designed Custom Home" },
      { label: "Design", value: "DB Design" },
      { label: "Build", value: "By Inverloch Builders" },
    ],
    hero: {
      src: "c86e57_17d256f6aa224b06b7573446ed8d051e~mv2.jpg",
      alt: "Fern — reclaimed brick custom home in Inverloch",
    },
    gallery: [
      {
        src: "c86e57_10f3129374ba4c33b8cf03ba206c03ff~mv2.jpg",
        alt: "Fern custom home exterior",
      },
      {
        src: "c86e57_ac1154bf18c6456ca956fe9effaa3b05~mv2.jpg",
        alt: "Fern — brick form and Spotted Gum cladding",
      },
      {
        src: "c86e57_9f1f338645c64b69b28676fcde605ff3~mv2.jpg",
        alt: "Fern — interior detail",
      },
      {
        src: "c86e57_06bccb67f5aa4ab59654ccf84a63b02d~mv2.jpg",
        alt: "Fern — living space detail",
      },
      {
        src: "c86e57_0d97c89658774ee0b0b9893352bf2d19~mv2.jpg",
        alt: "Fern — open-plan interior",
      },
      {
        src: "c86e57_4474d18c8fcf46038049f04c5dd65f41~mv2.jpg",
        alt: "Fern — plywood ceiling and polished concrete",
      },
      {
        src: "c86e57_107fc8b8473c43ccbb8fe8330bb416bf~mv2.jpg",
        alt: "Fern — kitchen detail",
      },
      {
        src: "c86e57_55d663f6eb9b4b29a2b4fd30e82280c1~mv2.jpg",
        alt: "Fern — interior perspective",
      },
      {
        src: "c86e57_adb1b8e366f24f60883dbcc8c6769f96~mv2.jpg",
        alt: "Fern — detail",
      },
      {
        src: "c86e57_f94ece8942944668afdfa990ca4a78cd~mv2.jpg",
        alt: "Fern — detail",
      },
      {
        src: "c86e57_eab2a86902454f049083bd35eaf84697~mv2.jpg",
        alt: "Fern — exterior detail",
      },
      {
        src: "c86e57_d041a6317d8d4dde800204ceba1f2470~mv2.jpg",
        alt: "Fern — bathroom detail",
      },
      {
        src: "c86e57_c9c1a5cb9a9f4e1a9a6ead5814ad05d0~mv2.jpg",
        alt: "Fern — interior detail",
      },
      {
        src: "c86e57_6810eec4648c475394202c9861f839cd~mv2.jpg",
        alt: "Fern — joinery detail",
      },
      {
        src: "c86e57_a65e7f71de5c4f789adbec76fc314a66~mv2.jpg",
        alt: "Fern — interior detail",
      },
      {
        src: "c86e57_565000db28bd40879b972a751084f3f8~mv2.jpg",
        alt: "Fern — light and shadow detail",
      },
      {
        src: "c86e57_3c3f3cf9baf04105afc960faefe127a1~mv2.jpg",
        alt: "Fern — detail",
      },
      {
        src: "c86e57_fe68552d39ee48c3a278e3e1b4f68919~mv2.jpg",
        alt: "Fern — interior detail",
      },
      {
        src: "c86e57_3c069b730df54d45bbd126fb88b6d2a3~mv2.jpg",
        alt: "Fern — detail",
      },
      {
        src: "c86e57_68fb6e776a554c0280b36241c0aef1f3~mv2.jpg",
        alt: "Fern — detail",
      },
      {
        src: "c86e57_9fe6244c7a3e4ec28b322825f97384de~mv2.jpg",
        alt: "Fern — detail",
      },
      {
        src: "c86e57_258a1d27e20340bfbccaaab357ca2239~mv2.jpg",
        alt: "Fern — detail",
      },
      {
        src: "c86e57_a2c31bb5b4a04c9d9ab27866a95c2981~mv2.jpg",
        alt: "Fern — detail",
      },
    ],
  },
  {
    slug: "cuttriss",
    name: "Cutriss",
    location: "Inverloch",
    type: "renovation",
    typeLabel: "Extension & Home Transformation",
    tagline: "A full extension, complete transformation.",
    locationSlug: "inverloch",
    description: [
      "This project involved a full extension and complete home renovation, reimagining every room to create a bright, light and modern home tailored to functional family living. The original layout was completely restructured, opening the floor plan to improve flow, usability and connection throughout the home.",
      "New engineered timber flooring brings warmth and continuity, while a striking Venetian plaster feature wall adds texture, depth and a refined modern character to the main living space. The extension allowed for the addition of a second bathroom and a generous new external living area, creating seamless indoor–outdoor living and enhancing everyday comfort.",
      "Every detail of the home was upgraded — every room touched, refined and modernised — resulting in a fresh, cohesive and contemporary take on the original dwelling.",
      "A true transformation designed by AD Building Design and built better by Inverloch Builders.",
    ],
    detail: [
      { label: "Location", value: "Inverloch, VIC" },
      { label: "Type", value: "Extension & Complete Home Renovation" },
      { label: "Design", value: "AD Building Design" },
      { label: "Build", value: "By Inverloch Builders" },
    ],
    hero: {
      src: "c86e57_1c42dbd2843e4890a4d506b0de52e492~mv2.jpg",
      alt: "Cutriss — coastal renovation in Inverloch",
    },
    gallery: [
      {
        src: "c86e57_1c42dbd2843e4890a4d506b0de52e492~mv2.jpg",
        alt: "Cutriss — coastal property exterior",
      },
      {
        src: "c86e57_2c85d80522ac47439ca0ee4b6dd6d6f4~mv2.jpg",
        alt: "Cutriss — renovated interior",
      },
      {
        src: "c86e57_e40671d976124d2faa22a2badb0eb9cd~mv2.jpg",
        alt: "Cutriss — extension and living space detail",
      },
    ],
  },
  {
    slug: "sandymount2",
    name: "Sandy Mount",
    location: "Sandy Mount",
    type: "renovation",
    typeLabel: "Home Renovation",
    tagline: "An ageing coastal home, completely reimagined.",
    description: [
      "This full home renovation transformed an ageing property into a bright, fresh and inviting coastal retreat. The home was completely stripped back internally and rebuilt with a modern, functional layout and a soft Hamptons-inspired aesthetic.",
      "Every space was renewed — new bathrooms, kitchen, laundry, flooring, and a full repaint inside and out — giving the home a cohesive, refined and beautifully light-filled feel. Carefully selected finishes and natural tones bring warmth and a relaxed coastal vibe that flows effortlessly from room to room.",
      "A new swim spa was incorporated to enhance outdoor living, creating a seamless connection between the interior and exterior spaces and adding year-round lifestyle appeal.",
      "The result is a contemporary, uplifting coastal home that feels brand new, built to last and thoughtfully reimagined by Inverloch Builders.",
    ],
    detail: [
      { label: "Location", value: "Sandy Mount, VIC" },
      { label: "Type", value: "Complete Coastal Home Renovation" },
      { label: "Focus", value: "Full renewal — interior, finishes & outdoor living" },
    ],
    hero: {
      src: "c86e57_4bd4e0cc916149c4a95b5c81f91990d0~mv2.jpeg",
      alt: "Sandy Mount — high-performance custom home",
    },
    gallery: [
      {
        src: "c86e57_4bd4e0cc916149c4a95b5c81f91990d0~mv2.jpeg",
        alt: "Sandy Mount — renovated coastal home exterior",
      },
      {
        src: "c86e57_486fe8c53163452f957830f1ef13bfdc~mv2.jpeg",
        alt: "Sandy Mount — renewed open-plan interior",
      },
      {
        src: "c86e57_76a0b11ed6144b67b2c1a09c82067be7~mv2.jpg",
        alt: "Sandy Mount — bright, refurbished living detail",
      },
    ],
  },
  {
slug: "johnflagg",
    name: "John Flagg",
    location: "Inverloch",
    type: "custom-home",
    typeLabel: "Split-Level Custom Home",
    tagline: "A split-level coastal home built for the view.",
    locationSlug: "inverloch",
    description: [
      "This beautiful custom home makes ingenious use of a sloping block to optimise land, elevation and stunning ocean views. Inspired by passive-house principles, the home is north-facing, tightly built and thoughtfully oriented to capture natural light and enhance year-round comfort.",
      "Constructed using lightweight rendered cladding and finished in Colorbond Ironstone, the exterior brings a modern coastal presence that sits naturally within the site. Built partially on stumps to create elevation, the split-level layout steps gently down the hill, with each level revealing new vantage points and adding architectural interest.",
      "High ceilings and an open-plan design allow the home to feel bright, airy and connected, while multiple alfresco areas provide flexible outdoor living spaces. Blackbutt timber flooring and stairs anchor the interior with warmth and natural texture, complemented by clean lines and a fresh, calming palette.",
      "North-facing living areas and bedrooms welcome the winter sun, improving comfort and reducing heating needs. Solar hot water and electricity contribute to ongoing efficiency. A coastal, energy-efficient, architecturally considered home — designed by Beaumont Concepts and built to last by Inverloch Builders.",
    ],
    detail: [
      { label: "Location", value: "41 John Flagg Rise, Inverloch" },
      { label: "Type", value: "Split-Level Custom Home" },
      { label: "Design", value: "Beaumont Concepts" },
      { label: "Build", value: "By Inverloch Builders" },
    ],
    hero: {
      src: "c86e57_d2a04caae26b4c9b878e4709c271235e~mv2.jpg",
      alt: "John Flagg Rise — custom home in Inverloch",
    },
    gallery: [
      {
        src: "c86e57_d2a04caae26b4c9b878e4709c271235e~mv2.jpg",
        alt: "John Flagg Rise — exterior",
      },
      {
        src: "c86e57_3600cc77f8744890bfb0679f998cfb56~mv2.jpg",
        alt: "John Flagg Rise — exterior detail",
      },
      {
        src: "c86e57_de241883b1eb44bf9213151dfcd51ccb~mv2.jpg",
        alt: "John Flagg Rise — living space",
      },
      {
        src: "c86e57_bc29f311dc4a4c19ac643b623a250dda~mv2.jpg",
        alt: "John Flagg Rise — contemporary exterior",
      },
      {
        src: "c86e57_052de1bf867347f8873b5326753292c6~mv2.jpg",
        alt: "John Flagg Rise — interior detail",
      },
      {
        src: "c86e57_66dd7973faea4877bfde760e4bf2e215~mv2.jpg",
        alt: "John Flagg Rise — bathroom",
      },
    ],
  },
  {
    slug: "casuarina",
    name: "Casuarina",
    location: "Walkerville",
    type: "custom-home",
    typeLabel: "Custom Home",
    tagline: "Custom home near Wilsons Promontory.",
    locationSlug: "walkerville",
    description: [
      "Casuarina Grove is a custom coastal home built near Wilsons Promontory — designed for life on the coast with a high-performance, energy-efficient building envelope.",
    ],
    detail: [
      { label: "Location", value: "Walkerville South, VIC" },
      { label: "Type", value: "Custom Home" },
      { label: "Focus", value: "Coastal living & energy efficiency" },
    ],
    hero: {
      src: "c86e57_c0e95e74d8ef4d6facb91b33a4114ea2~mv2.jpg",
      alt: "Casuarina Grove — custom coastal home near Wilsons Promontory",
    },
    gallery: [
      {
        src: "c86e57_c0e95e74d8ef4d6facb91b33a4114ea2~mv2.jpg",
        alt: "Casuarina Grove — exterior",
      },
      {
        src: "c86e57_bd465f9e3e7c48c582ea29f682a86cb2~mv2.jpg",
        alt: "Casuarina Grove — thermally broken double glazing",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.featured);