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
      "Designed to take full advantage of northern light, Fern embraces passive-house influences and tight building principles to deliver exceptional comfort, energy efficiency, and year-round livability. Warm plywood-lined ceilings and polished concrete floors bring texture, durability, and a sense of calm to the open-plan interiors.",
      "Large, flowing spaces open to the landscape, allowing the tree canopy and seasonal light to shape the atmosphere within. Every detail has been carefully considered — from orientation to materiality — to ensure a healthy, efficient home built to last.",
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
    typeLabel: "Renovation",
    tagline: "A coastal property, thoughtfully renewed.",
    locationSlug: "inverloch",
    description: [
      "Cutriss is a coastal property renovation in Inverloch. The project was led with the same design-led care and attention to high-performance construction that defines every Inverloch Builders home.",
    ],
    detail: [
      { label: "Location", value: "Inverloch, VIC" },
      { label: "Type", value: "Home Renovation" },
      { label: "Focus", value: "Coastal performance & design renewal" },
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
        src: "c86e57_66dd7973faea4877bfde760e4bf2e215~mv2.jpg",
        alt: "Cutriss — bathroom renovation detail",
      },
    ],
  },
  {
    slug: "sandymount2",
    name: "Sandy Mount",
    location: "Sandy Mount",
    type: "custom-home",
    typeLabel: "Custom Home",
    tagline: "High-performance virtual design & build.",
    description: [
      "Sandy Mount is a custom home delivered with an uncompromising focus on the high-performance building envelope — energy efficiency, comfort, and build quality in equal measure.",
    ],
    detail: [
      { label: "Location", value: "Sandy Mount, VIC" },
      { label: "Type", value: "Custom Home" },
      { label: "Focus", value: "High-performance building envelope" },
    ],
    hero: {
      src: "c86e57_4bd4e0cc916149c4a95b5c81f91990d0~mv2.jpeg",
      alt: "Sandy Mount — high-performance custom home",
    },
    gallery: [
      {
        src: "c86e57_4bd4e0cc916149c4a95b5c81f91990d0~mv2.jpeg",
        alt: "Sandy Mount custom home",
      },
      {
        src: "c86e57_36e47d70d5074e01a96ce1cdf1c421e7~mv2.jpg",
        alt: "Energy efficient window and cladding system installation",
      },
      {
        src: "c86e57_bd465f9e3e7c48c582ea29f682a86cb2~mv2.jpg",
        alt: "Thermally broken double glazing installed in custom home",
      },
    ],
  },
  {
    slug: "johnflagg",
    name: "John Flagg",
    location: "Inverloch",
    type: "custom-home",
    typeLabel: "Custom Home",
    tagline: "Designed for coastal views and natural light.",
    locationSlug: "inverloch",
    description: [
      "John Flagg Rise is a luxury custom home designed around the coastal environment — panoramic views, natural light, and refined materiality throughout.",
    ],
    detail: [
      { label: "Location", value: "John Flagg Rise, Inverloch" },
      { label: "Type", value: "Custom Home" },
      { label: "Focus", value: "Coastal views & natural light" },
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
      {
        src: "c86e57_523748688cdd451883d9ceb767ed51a2~mv2.jpg",
        alt: "Garden Crescent — coastal home exterior",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.featured);