import type { Img } from "@/lib/wix";
import { brandConfig } from "@/lib/data/brand";

export type LocationConfig = {
  /** URL slug — preserved from the existing site */
  slug: string;
  area: string;
  region: string;
  areaLabel: string;
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroSub: string;
  heroImage: Img;
  intro: string[];
  servicesIntro: string;
  services: string[];
  whyHeading: string;
  why: string[];
  processIntro: string;
  process: string[];
  gallery: Img[];
  projects: string[]; // project slugs relevant to the area
  neighbourhood: "coastal" | "bayside" | "island" | "inland" | "hills";
};

const coastalProjects = ["fern", "cuttriss", "johnflagg"];
const promontoryProjects = ["casuarina", "fern", "johnflagg"];

export const locations: LocationConfig[] = [
  {
    slug: "inverloch",
    area: "Inverloch",
    areaLabel: "Inverloch, Bass Coast",
    region: "Bass Coast",
    metaTitle: "Custom Home Builders Inverloch | Build Better in Inverloch",
    metaDescription:
      "Custom home builders in Inverloch on the Bass Coast. Architecturally designed homes, renovations and extensions built for coastal living — cost certainty through Early Builder Involvement.",
    heroEyebrow: "Custom Home Builders",
    heroHeadline: "Build Better in Inverloch",
    heroSub:
      "Architecturally designed homes, renovations and extensions built for life on the Bass Coast.",
    heroImage: {
      src: "c86e57_d2a04caae26b4c9b878e4709c271235e~mv2.jpg",
      alt: "Custom home on John Flagg Rise, Inverloch",
    },
    intro: [
      "Building or renovating in Inverloch means working with the coastal environment, local planning requirements and the expectations of homeowners who value long-lasting, well-designed homes.",
      "Our work across Inverloch reflects a consistent focus on quality, durability and careful planning. We take the time to understand your home, your site and the way you live so the final design feels practical, functional and suited to everyday use.",
    ],
    servicesIntro:
      "We work across Inverloch on a wide range of projects, from new custom homes to well-considered extensions that improve flow and function. Our priority is clarity, communication and a well-planned building experience.",
    services: [
      "Custom new homes designed to suit the site, climate and your lifestyle",
      "Extensions that enhance the layout and improve everyday function",
      "High-performance, energy-efficient construction suited to the coastal environment",
      "Practical guidance through planning, design development, structural coordination and compliance",
    ],
    whyHeading: "Why Inverloch homeowners choose us",
    why: [
      "We understand Inverloch's coastal conditions, soil types and planning expectations — homes are designed for the salt air, the light, and the wind.",
      "We deliver consistent workmanship with a long-term focus, taking on a limited number of projects each year.",
      "Transparent communication throughout the process, working with long-standing local trades and suppliers.",
      "Many of our projects come from word-of-mouth referrals — or from clients who have seen our previous work around the Bass Coast.",
    ],
    processIntro:
      "A successful build starts with strong planning. Our Early Builder Involvement process resolves the important details early, creating a more predictable and efficient construction stage.",
    process: [
      "Early cost guidance so the design stays aligned with your intended budget",
      "Structural considerations and engineering requirements identified in the design phase",
      "Consultants coordinated early — including surveyors and energy assessors",
      "Design details reviewed to keep the home practical, functional and buildable",
      "Realistic timelines and clear expectations established before construction begins",
    ],
    gallery: [
      {
        src: "c86e57_3600cc77f8744890bfb0679f998cfb56~mv2.jpg",
        alt: "John Flagg Rise — Inverloch custom home exterior",
      },
      {
        src: "c86e57_17d256f6aa224b06b7573446ed8d051e~mv2.jpg",
        alt: "Fern — custom home exterior in Inverloch",
      },
      {
        src: "c86e57_de241883b1eb44bf9213151dfcd51ccb~mv2.jpg",
        alt: "Inverloch custom home living space",
      },
      {
        src: "c86e57_66dd7973faea4877bfde760e4bf2e215~mv2.jpg",
        alt: "Custom bathroom design in an Inverloch coastal home",
      },
      {
        src: "c86e57_bc29f311dc4a4c19ac643b623a250dda~mv2.jpg",
        alt: "Contemporary custom home exterior in Inverloch",
      },
    ],
    projects: coastalProjects,
    neighbourhood: "coastal",
  },
  {
    slug: "venusbay",
    area: "Venus Bay",
    areaLabel: "Venus Bay, South Gippsland",
    region: "South Gippsland",
    metaTitle: "Custom Home Builders Venus Bay | Coastal Homes",
    metaDescription:
      "Custom home builders in Venus Bay, South Gippsland. Low-lying coastal sites, energy-efficient design and homes built to last by Early-Builder-Involvement specialists.",
    heroEyebrow: "Custom Home Builders",
    heroHeadline: "Homes built for the Venus Bay coast",
    heroSub:
      "Design-led custom homes and renovations for one of South Gippsland's most exposed coastal townships.",
    heroImage: {
      src: "c86e57_c0e95e74d8ef4d6facb91b33a4114ea2~mv2.jpg",
      alt: "Custom coastal home built near Venus Bay",
    },
    intro: [
      "Venus Bay is defined by its long beaches and open, low-lying coastal blocks — which makes building there a question of design intelligence as much as construction quality.",
      "We bring Early Builder Involvement to Venus Bay projects so homes respond properly to coastal wind exposure, sandier soils and Bass Coast planning requirements — delivering comfort, durability and clear cost certainty.",
    ],
    servicesIntro:
      "From new coastal homes to renovations of beach shacks and holiday houses, our Venus Bay projects share one goal: high-performing homes that feel effortless.",
    services: [
      "Custom homes engineered for coastal wind and exposure",
      "Renovations that modernise ageing beach houses without losing their character",
      "Energy-efficient building envelopes — insulation, glazing and draught management",
      "Guidance on coastal planning controls and building-in-the-Bass-Cost requirements",
    ],
    whyHeading: "Why build with us in Venus Bay",
    why: [
      "Coastal construction is about the detail — material choice, fixing, glazing and thermal performance. That detail is where our team earns its name.",
      "A considered, well-documented process from budget to handover, so building on one of Victoria's great surf coasts feels calm, not stressful.",
      "Long-standing local trades who know coastal South Gippsland sites.",
    ],
    processIntro:
      "For a coastal town like Venus Bay, getting the process right matters as much as the design.",
    process: [
      "Site-specific analysis of wind, soil and orientation before plans are locked",
      "Early cost checks so coastal upgrades never surprise you later",
      "Coordination of surveyors, engineers and energy assessors — early",
      "Real quotes from trusted suppliers, not estimates",
    ],
    gallery: [
      {
        src: "c86e57_c0e95e74d8ef4d6facb91b33a4114ea2~mv2.jpg",
        alt: "Coastal custom home exterior",
      },
      {
        src: "c86e57_2c85d80522ac47439ca0ee4b6dd6d6f4~mv2.jpg",
        alt: "Coastal home renovation interior",
      },
      {
        src: "c86e57_4474d18c8fcf46038049f04c5dd65f41~mv2.jpg",
        alt: "Coastal living space",
      },
    ],
    projects: coastalProjects,
    neighbourhood: "coastal",
  },
  {
    slug: "woolamai",
    area: "Woolamai",
    areaLabel: "Cape Woolamai, Phillip Island",
    region: "Phillip Island",
    metaTitle: "Custom Home Builders Cape Woolamai | Coastal Designs",
    metaDescription:
      "Custom home builders at Cape Woolamai on Phillip Island. Design-led coastal homes and renovations built for the island lifestyle — with cost certainty from day one.",
    heroEyebrow: "Custom Home Builders",
    heroHeadline: "Building better at Cape Woolamai",
    heroSub:
      "Bold coastal-facing homes and considered renovations for the Phillip Island surf coast.",
    heroImage: {
      src: "c86e57_10f3129374ba4c33b8cf03ba206c03ff~mv2.jpg",
      alt: "Design-led coastal home exterior",
    },
    intro: [
      "Cape Woolamai sits on the exposed southern edge of Phillip Island, where the ocean is both the reason to build and the thing to design against.",
      "Our team designs and builds homes for this environment — strong form, natural materials and a high-performance envelope that keeps interiors calm in any weather.",
    ],
    servicesIntro:
      "Whether it's a new family home, a holiday retreat or a renovation of an existing beach house, we approach every Woolamai project with architectural thinking.",
    services: [
      "Custom coastal homes designed around outlook and orientation",
      "High-performance building envelopes suited to exposed southern conditions",
      "Renovations and extensions for holiday houses and permanent homes",
      "Clear guidance on Phillip Island planning and building controls",
    ],
    whyHeading: "Why Woolamai homeowners choose us",
    why: [
      "We build for the island — not from a prefab range. Every home is designed around its block, its views and its exposure.",
      "Early Builder Involvement keeps the design affordable and buildable before drawings are finished.",
      "A small, senior team that is personally on site and personally accountable.",
    ],
    processIntro: "The Woolamai build starts early — before the drawings are finished.",
    process: [
      "Early builder involvement during design, so coastal decisions are made with real construction knowledge",
      "Open-book, trade-by-trade cost planning",
      "All permits, consultants and approvals coordinated by our team",
      "Live construction schedule access through project management software",
    ],
    gallery: [
      {
        src: "c86e57_10f3129374ba4c33b8cf03ba206c03ff~mv2.jpg",
        alt: "Coastal home exterior at Woolamai",
      },
      {
        src: "c86e57_ac1154bf18c6456ca956fe9effaa3b05~mv2.jpg",
        alt: "Coastal home materials and form",
      },
      {
        src: "c86e57_0d97c89658774ee0b0b9893352bf2d19~mv2.jpg",
        alt: "Coastal home interior",
      },
    ],
    projects: coastalProjects,
    neighbourhood: "coastal",
  },
  {
    slug: "phillipisland",
    area: "Phillip Island",
    areaLabel: "Phillip Island",
    region: "Phillip Island",
    metaTitle: "Custom Home Builders Phillip Island | Premium Coastal Homes",
    metaDescription:
      "Custom home builders across Phillip Island — Cowes, Rhyll, Ventnor, San Remo and surrounds. Premium coastal homes and renovations delivered with cost certainty.",
    heroEyebrow: "Custom Home Builders",
    heroHeadline: "Custom homes across Phillip Island",
    heroSub:
      "From Cowes to Rhyll and Ventnor — design-led, durable homes for island life.",
    heroImage: {
      src: "c86e57_3600cc77f8744890bfb0679f998cfb56~mv2.jpg",
      alt: "Premium coastal custom home exterior",
    },
    intro: [
      "Phillip Island offers some of Victoria's most distinctive coastal living — village communities, ocean views and a climate that asks real questions of a home.",
      "We bring a considered, design-led approach to the island: homes that perform in the coastal environment, hold their value, and quietly impress.",
    ],
    servicesIntro:
      "New builds, renovations and extensions across the island's towns — approached with the same architectural rigour as our Bass Coast flagship projects.",
    services: [
      "Custom homes for coastal blocks and ocean-view sites",
      "Renovations and extensions of existing island homes",
      "Energy-efficient envelopes for year-round comfort in a maritime climate",
      "Planning and permit coordination across Phillip Island requirements",
    ],
    whyHeading: "Why Phillip Island homeowners choose us",
    why: [
      "A track record of design-led coastal homes across the region — the kind of work neighbours notice.",
      "Cost and timeline certainty through Early Builder Involvement, rare among coastal builders.",
      "Transparent communication at every stage, with a senior team on site.",
    ],
    processIntro: "Building on Phillip Island, without the island-sized stress.",
    process: [
      "Early builder involvement alongside your architect or designer",
      "Real cost planning starting at concept stage",
      "Full coordination of consultants, permits and council approvals",
      "3- and 12-month follow-up after handover",
    ],
    gallery: [
      {
        src: "c86e57_3600cc77f8744890bfb0679f998cfb56~mv2.jpg",
        alt: "Phillip Island coastal home exterior",
      },
      {
        src: "c86e57_bc29f311dc4a4c19ac643b623a250dda~mv2.jpg",
        alt: "Contemporary coastal architecture",
      },
      {
        src: "c86e57_de241883b1eb44bf9213151dfcd51ccb~mv2.jpg",
        alt: "Coastal home interior living space",
      },
    ],
    projects: coastalProjects,
    neighbourhood: "island",
  },
  {
    slug: "sanremo",
    area: "San Remo",
    areaLabel: "San Remo, Phillip Island",
    region: "Phillip Island",
    metaTitle: "Custom Home Builders San Remo | Coastal Builder",
    metaDescription:
      "Custom home builders in San Remo at the gateway to Phillip Island. Renovations, extensions and new coastal homes with transparent cost planning.",
    heroEyebrow: "Custom Home Builders",
    heroHeadline: "The gateway to the island, built better",
    heroSub:
      "New homes, renovations and extensions in San Remo — coastal villages with a premium finish.",
    heroImage: {
      src: "c86e57_2c85d80522ac47439ca0ee4b6dd6d6f4~mv2.jpg",
      alt: "Renovated coastal home exterior in San Remo",
    },
    intro: [
      "San Remo is where the mainland meets the island — a community of character homes, fishing heritage and a growing appetite for modern coastal living.",
      "Our teams build across San Remo with the same care and planning discipline as our flagship projects: durable, energy-efficient and quietly beautiful.",
    ],
    servicesIntro:
      "Modernising, extending or rebuilding in San Remo — we manage every stage from design to handover.",
    services: [
      "Custom coastal homes and townhouse-style builds",
      "Renovations that bring older homes into the modern era",
      "Extensions for growing families and holiday living",
      "Coastal-compliant materials and high-performance building",
    ],
    whyHeading: "Why San Remo homeowners choose us",
    why: [
      "Coastal construction expertise that anticipates the salt, wind and light of the region.",
      "Clear process and transparent budgeting from the very first conversation.",
      "A trusted team of local trades and suppliers who work together build after build.",
    ],
    processIntro: "A straightforward, transparent building process in San Remo.",
    process: [
      "Discovery calls to understand your site, budget and lifestyle",
      "Early builder involvement during design",
      "QBE and open-book cost planning before contract",
      "Regular photo updates and live schedule access while building",
    ],
    gallery: [
      {
        src: "c86e57_2c85d80522ac47439ca0ee4b6dd6d6f4~mv2.jpg",
        alt: "San Remo coastal renovation",
      },
      {
        src: "c86e57_1c42dbd2843e4890a4d506b0de52e492~mv2.jpg",
        alt: "Coastal property transformation",
      },
      {
        src: "c86e57_66dd7973faea4877bfde760e4bf2e215~mv2.jpg",
        alt: "Coastal bathroom renovation",
      },
    ],
    projects: coastalProjects,
    neighbourhood: "bayside",
  },
  {
    slug: "basscoast",
    area: "Bass Coast",
    areaLabel: "Bass Coast",
    region: "Bass Coast",
    metaTitle: "Custom Home Builders Bass Coast | Première Coastal Builder",
    metaDescription:
      "Premium custom homes, renovations and extensions across the Bass Coast — Inverloch, Venus Bay, San Remo and surrounds. Architected. Built to last.",
    heroEyebrow: "Custom Home Builders",
    heroHeadline: "The Bass Coast, built better",
    heroSub:
      "Premium custom homes, renovations and extensions across the Bass Coast shire.",
    heroImage: {
      src: "c86e57_d2a04caae26b4c9b878e4709c271235e~mv2.jpg",
      alt: "Bass Coast custom home builder project",
    },
    intro: [
      "The Bass Coast is defined by its coastline, its light and its communities. It asks for homes that are resilient, considered and genuinely beautiful.",
      "As a Bass Coast-based builder, Inverloch Builders builds across the shire — from Inverloch and Cape Paterson to San Remo and Phillip Island — with a design-led approach built around Early Builder Involvement.",
    ],
    servicesIntro:
      "Wherever you are on the Bass Coast, our services are the same — just tailored to your site, your coast and your village.",
    services: [
      "Architecturally designed custom coastal homes",
      "Full-scale and partial home renovations",
      "Extensions that connect homes to the Bass Coast landscape",
      "High-performance, energy-efficient building throughout the shire",
    ],
    whyHeading: "Why the Bass Coast chooses a local builder",
    why: [
      "We live and build on the Bass Coast — we know its planning, its soils and its weather.",
      "Every home is designed and delivered specifically for its site, never from a catalogue.",
      "Early Builder Involvement means no redesigns, no budget blowouts and no surprises.",
    ],
    processIntro:
      "Our process is identical in every Bass Coast town — the details just get tuned to your site.",
    process: [
      "Discover — we listen first, understanding your site and ambitions",
      "Design — practical, buildable plans with real construction knowledge",
      "Plan — open-book costing, permits and approvals handled early",
      "Build — a senior team on site, live schedule access, quality checks at every stage",
      "Deliver — handover documentation, warranty, and 3- and 12-month follow-ups",
    ],
    gallery: [
      {
        src: "c86e57_d2a04caae26b4c9b878e4709c271235e~mv2.jpg",
        alt: "Bass Coast custom coastal home",
      },
      {
        src: "c86e57_17d256f6aa224b06b7573446ed8d051e~mv2.jpg",
        alt: "Design-led Bass Coast home",
      },
      {
        src: "c86e57_c0e95e74d8ef4d6facb91b33a4114ea2~mv2.jpg",
        alt: "Coastal home near the Bass Coast surf",
      },
    ],
    projects: [...coastalProjects, "casuarina"],
    neighbourhood: "coastal",
  },
  {
    slug: "southgippsland",
    area: "South Gippsland",
    areaLabel: "South Gippsland",
    region: "South Gippsland",
    metaTitle: "Custom Home Builders South Gippsland | Regional Builder",
    metaDescription:
      "Custom home builders across South Gippsland — Walkerville, Foster, Korumburra, Leongatha and the coast. Premium regional homes, built better.",
    heroEyebrow: "Custom Home Builders",
    heroHeadline: "Building better across South Gippsland",
    heroSub:
      "From Wilsons Promontory to the hilt country — premium homes for the region.",
    heroImage: {
      src: "c86e57_c0e95e74d8ef4d6facb91b33a4114ea2~mv2.jpg",
      alt: "Custom coastal home near Wilsons Promontory",
    },
    intro: [
      "South Gippsland is a region of contrast — rugged southern coastline, green dairy country and historic rural towns.",
      "Inverloch Builders works across South Gippsland, from coastal Walkerville to the inland towns of Leongatha, Korumburra and Foster, delivering homes that suit their landscape and the way you actually live.",
    ],
    servicesIntro:
      "The same premium, process-driven service we deliver on the coast — tuned to the climate and character of each Gippsland town.",
    services: [
      "Custom rural and coastal homes",
      "Renovations of character homes and farmhouses",
      "Extensions for family and lifestyle needs",
      "Energy-efficient construction suited to cool Gippsland winters",
    ],
    whyHeading: "Why South Gippsland homeowners choose us",
    why: [
      "A builder rooted in the region, with decades of experience across custom builds and renovations.",
      "Early Builder Involvement saves months of frustration and thousands in redesigns.",
      "Trust, communication and durability — the reasons our clients return for second projects.",
    ],
    processIntro: "The same success process, tuned to your Gippsland site.",
    process: [
      "Clear roadmap from the first conversation",
      "Early builder involvement with your designer or architect",
      "Cost certainty from concept through to contract",
      "A hands-on build with live schedule access and quality sign-offs",
    ],
    gallery: [
      {
        src: "c86e57_c0e95e74d8ef4d6facb91b33a4114ea2~mv2.jpg",
        alt: "South Gippsland custom home",
      },
      {
        src: "c86e57_ac1154bf18c6456ca956fe9effaa3b05~mv2.jpg",
        alt: "Design-led home in the Gippsland landscape",
      },
      {
        src: "c86e57_523748688cdd451883d9ceb767ed51a2~mv2.jpg",
        alt: "Gippsland coastal home exterior",
      },
    ],
    projects: promontoryProjects,
    neighbourhood: "hills",
  },
  {
    slug: "leongatha",
    area: "Leongatha",
    areaLabel: "Leongatha, South Gippsland",
    region: "South Gippsland",
    metaTitle: "Custom Home Builders Leongatha | New Homes & Renovations",
    metaDescription:
      "Custom home builders in Leongatha, South Gippsland. New homes and classic renovations built for the Gippsland climate with transparent cost planning.",
    heroEyebrow: "Custom Home Builders",
    heroHeadline: "New homes and heritage character, built better",
    heroSub:
      "Leongatha's mix of federation charm and modern thinking suits a builder who values both.",
    heroImage: {
      src: "c86e57_ac1154bf18c6456ca956fe9effaa3b05~mv2.jpg",
      alt: "Custom home built by Inverloch Builders",
    },
    intro: [
      "Leongatha is the heart of South Gippsland's dairy country — a prosperous, community-minded town with a strong stock of character homes.",
      "Whether it's a new family home on a larger block or a sensitive renovation of a period home, we bring design-led, honest building to every Leongatha project.",
    ],
    servicesIntro:
      "Inland Gippsland demands a different design conversation — bigger blocks, winter warmth, and homes that last.",
    services: [
      "New custom homes suited to larger rural and estate blocks",
      "Renovations of period and character homes — done with care",
      "Extensions that bring modern living to classic layouts",
      "Thermally efficient construction for Gippsland's cool climate",
    ],
    whyHeading: "Why Leongatha homeowners choose us",
    why: [
      "Design and heritage sensitivity — we rejuvenate older homes, not just replace them.",
      "A builder-led process that keeps costs honest from the first sketch.",
      "Long-term relationships: clients choose us again for their second project.",
    ],
    processIntro: "Getting Leongatha projects right starts with the plan.",
    process: [
      "Discovery conversations that understand your home and ambitions",
      "Early builder involvement to test design against budget and buildability",
      "Open-book cost plans and fixed-price contract confidence",
      "A senior, local crew with quality sign-offs at every stage",
    ],
    gallery: [
      {
        src: "c86e57_ac1154bf18c6456ca956fe9effaa3b05~mv2.jpg",
        alt: "Custom home exterior in Leongatha",
      },
      {
        src: "c86e57_0d97c89658774ee0b0b9893352bf2d19~mv2.jpg",
        alt: "Family home interior",
      },
      {
        src: "c86e57_107fc8b8473c43ccbb8fe8330bb416bf~mv2.jpg",
        alt: "Kitchen detail in a custom home",
      },
    ],
    projects: coastalProjects,
    neighbourhood: "inland",
  },
  {
    slug: "korumburra",
    area: "Korumburra",
    areaLabel: "Korumburra, South Gippsland",
    region: "South Gippsland",
    metaTitle: "Custom Home Builders Korumburra | Renovation & Build",
    metaDescription:
      "Custom home builders in Korumburra, South Gippsland. Heritage home renovations, extensions and new builds with dependable local craftsmanship.",
    heroEyebrow: "Custom Home Builders",
    heroHeadline: "Craftsmanship in the hilt country",
    heroSub:
      "Heritage care, modern performance — for Korumburra's character homes and new builds.",
    heroImage: {
      src: "c86e57_0d97c89658774ee0b0b9893352bf2d19~mv2.jpg",
      alt: "Thoughtfully finished interior detail",
    },
    intro: [
      "Korumburra is a town of weatherboard cottages, red-brick pubs and rolling countryside — where a good home has always meant a well-built home.",
      "We bring the same integrity and craftsmanship Korumburra respects: careful renovation, honest building and homes designed to last generations.",
    ],
    servicesIntro:
      "From fireplace-to-kitchen renovations to paddock-edge new homes — built with your town's character in mind.",
    services: [
      "Renovations that respect and renew character homes",
      "New custom homes for estate and rural blocks",
      "Extensions for growing families and home business owners",
      "Energy-efficient upgrades — insulation, glazing and heating performance",
    ],
    whyHeading: "Why Korumburra homeowners choose us",
    why: [
      "We are carpenters at heart — the detail is where our pride lives.",
      "A transparent process with no surprises, delivered by a senior local team.",
      "Decades of experience across custom homes and major renovations.",
    ],
    processIntro: "Built better, in an order anyone can follow.",
    process: [
      "Listen first — how you live, what you want your home to feel like",
      "Design with real cost awareness through Early Builder Involvement",
      "Permits, consultants and council handled for you",
      "Construction with live schedule access — then 3- and 12-month follow-ups",
    ],
    gallery: [
      {
        src: "c86e57_0d97c89658774ee0b0b9893352bf2d19~mv2.jpg",
        alt: "Korumburra home interior detail",
      },
      {
        src: "c86e57_55d663f6eb9b4b29a2b4fd30e82280c1~mv2.jpg",
        alt: "Renovated living space",
      },
      {
        src: "c86e57_1c42dbd2843e4890a4d506b0de52e492~mv2.jpg",
        alt: "Renovated coastal property",
      },
    ],
    projects: coastalProjects,
    neighbourhood: "hills",
  },
  {
    slug: "walkerville",
    area: "Walkerville",
    areaLabel: "Walkerville, South Gippsland",
    region: "South Gippsland",
    metaTitle: "Custom Home Builders Walkerville | Coastal Homes",
    metaDescription:
      "Custom home builders in Walkerville near Wilsons Promontory. Secluded coastal sites, energy-efficient custom homes and considered renovations.",
    heroEyebrow: "Custom Home Builders",
    heroHeadline: "Quiet coastal homes near the Prom",
    heroSub:
      "Walkerville and Walkerville South — secluded sites, handled properly.",
    heroImage: {
      src: "c86e57_c0e95e74d8ef4d6facb91b33a4114ea2~mv2.jpg",
      alt: "Custom coastal home on Casuarina Grove, Walkerville South",
    },
    intro: [
      "Walkerville sits on a protected corner of Waratah Bay, but it is no ordinary coast — the wind, the salt and the isolation all demand a home built with intent.",
      "Inverloch Builders has delivered custom coastal homes near Walkerville, including Casuarina Grove — homes engineered for the environment and designed for the long term.",
    ],
    servicesIntro:
      "Walkerville homes need a builder who understands exposed coastal sites and remote logistics — because those realities sit behind every good home there.",
    services: [
      "Custom coastal homes for secluded, exposed sites",
      "Renovations of beach houses and coastal retreats",
      "High-performance envelopes — thermally broken glazing, insulation and airtightness",
      "Off-site production and careful logistics for remote builds",
    ],
    whyHeading: "Why Walkerville homeowners choose us",
    why: [
      "Proven coastal construction nearby — including Casuarina Grove near Wilsons Promontory.",
      "Design-led, energy-efficient homes that stand up to the coast.",
      "The honesty and predictability of Early Builder Involvement.",
    ],
    processIntro: "Remote doesn't mean risky — it means better planning.",
    process: [
      "Early builder involvement to test materials and methods against the site",
      "Real quotes and cost planning integrated into design",
      "Materials and trades scheduled well before site start",
      "Full documentation and a warranty you can rely on",
    ],
    gallery: [
      {
        src: "c86e57_c0e95e74d8ef4d6facb91b33a4114ea2~mv2.jpg",
        alt: "Casuarina Grove custom home near Walkerville",
      },
      {
        src: "c86e57_bd465f9e3e7c48c582ea29f682a86cb2~mv2.jpg",
        alt: "Thermally broken double glazing in a Walkerville home",
      },
      {
        src: "c86e57_523748688cdd451883d9ceb767ed51a2~mv2.jpg",
        alt: "Coastal home exterior near the Prom",
      },
    ],
    projects: promontoryProjects,
    neighbourhood: "coastal",
  },
  {
    slug: "foster",
    area: "Foster",
    areaLabel: "Foster, South Gippsland",
    region: "South Gippsland",
    metaTitle: "Custom Home Builders Foster | South Gippsland Builder",
    metaDescription:
      "Custom home builders in Foster, gateway to Wilsons Promontory. New homes, character renovations and extensions — built better by a senior regional team.",
    heroEyebrow: "Custom Home Builders",
    heroHeadline: "The gateway to the Prom, built to last",
    heroSub:
      "Foster and surrounds — where the bitumen ends and quality craftsmanship begins.",
    heroImage: {
      src: "c86e57_de241883b1eb44bf9213151dfcd51ccb~mv2.jpg",
      alt: "Warm, considered living space in a custom home",
    },
    intro: [
      "Foster is the last true town before Wilsons Promontory — a hub of creative, outdoors-minded people who value homes with soul and structure.",
      "We build for that community: honest, well-crafted homes and renovations that fit their setting and perform for decades.",
    ],
    servicesIntro:
      "New builds, character renovations and extensions across Foster — delivered with the region's most considered process.",
    services: [
      "Custom homes for lifestyle and rural blocks",
      "Renovations that respect timber character homes",
      "Extensions that adapt homes to modern life",
      "Energy-efficient builds suited to coastal-cool Gippsland seasons",
    ],
    whyHeading: "Why Foster homeowners choose us",
    why: [
      "Craftsmanship that matches the town's creative, quality-minded character.",
      "Early Builder Involvement removes the two biggest fears — cost and time drift.",
      "We stand behind every build with 3- and 12-month check-ins.",
    ],
    processIntro: "A clear, calm process — built for people who value their time.",
    process: [
      "An early roadmap so you always know what to expect",
      "Builder-first involvement during design",
      "Transparent, open-book cost planning",
      "Quality sign-offs through construction and a proper handover",
    ],
    gallery: [
      {
        src: "c86e57_de241883b1eb44bf9213151dfcd51ccb~mv2.jpg",
        alt: "Custom home living space in Foster",
      },
      {
        src: "c86e57_bc29f311dc4a4c19ac643b623a250dda~mv2.jpg",
        alt: "Contemporary home exterior",
      },
      {
        src: "c86e57_4474d18c8fcf46038049f04c5dd65f41~mv2.jpg",
        alt: "Open-plan interior detail",
      },
    ],
    projects: promontoryProjects,
    neighbourhood: "hills",
  },
];

export function getLocation(slug: string): LocationConfig | undefined {
  return locations.find((l) => l.slug === slug);
}

/** Shared label for service areas, e.g. "Inverloch, Venus Bay, Woolamai…" */
export const allAreasLabel = locations.map((l) => l.area).join(", ");

export function locationCtaLine(loc: LocationConfig): string {
  return `Book a discovery call to discuss building in ${loc.area}.`;
}

export function locationHref(slug: string): string {
  return `/${slug}`;
}

export function regionFromNeighbourhood(
  n: LocationConfig["neighbourhood"],
  area: string
): string {
  const base = `Homes in ${area} are built`;
  switch (n) {
    case "coastal":
      return `${base} for the coast — wind, salt and light designed for from the start.`;
    case "island":
      return `${base} for island living — resilient, self-contained and beautifully made.`;
    case "bayside":
      return `${base} for bayside life — where shelter and outlook meet.`;
    case "inland":
      return `${base} for the Gippsland climate — warm in winter, cool in summer.`;
    case "hills":
      return `${base} for the landscape — solid, honest and lasting.`;
  }
}