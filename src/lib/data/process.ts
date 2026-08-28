import type { Img } from "@/lib/wix";

/* -------------------------------------------------------------------------- */
/*  EARLY BUILDER INVOLVEMENT — the differentiator                             */
/*  Copy drawn from the existing "Our Process" / homepage EBI content.         */
/* -------------------------------------------------------------------------- */

export type EbiStage = {
  number: string;
  title: string;
  short: string;
  body: string;
  image: Img;
};

export const ebiStages: EbiStage[] = [
  {
    number: "01",
    title: "Clarity",
    short: "We listen first",
    body: "Every successful project begins with understanding. We start by listening — learning what matters most to you: how you live, how you want your home to feel, and what you want to invest. From there, we establish a clear roadmap that outlines every stage of your journey, so you know exactly what to expect and when.",
    image: {
      src: "c86e57_14bc7767618949afabbf01cce53067d3~mv2.jpg",
      alt: "Clarity — coastal home design consultation",
    },
  },
  {
    number: "02",
    title: "Early Builder Involvement",
    short: "The smarter way to build",
    body: "The traditional process often fails homeowners: plans are drawn without cost input, quotes come back higher than expected, and valuable time is lost in redesigns. Our EBI process eliminates that disconnect. By involving the builder early, we bring real-world construction knowledge into the design phase — balancing creativity with practicality and cost awareness. You'll know what your forever home will cost long before your designs are completed.",
    image: {
      src: "c86e57_7a087c60e763467d99c333df10613cfd~mv2.jpg",
      alt: "Early Builder Involvement — collaborative design process",
    },
  },
  {
    number: "03",
    title: "Cost + Timeline Certainty",
    short: "No surprises",
    body: "With detailed cost planning integrated into the design stage, you'll have total visibility over pricing, selections, and construction timelines. We engage our trusted suppliers and trades early, securing real quotes — not estimates — and scheduling key stages well before site start. True cost certainty, reliable timeframes, and often months ahead of the industry average.",
    image: {
      src: "c86e57_36e47d70d5074e01a96ce1cdf1c421e7~mv2.jpg",
      alt: "Cost certainty — window and cladding installation",
    },
  },
  {
    number: "04",
    title: "Seamless Delivery",
    short: "To handover and beyond",
    body: "When construction begins, everything is ready — permits, documentation, selections, and scheduling already in place. Our on-site team manages every step with precision, communication, and care, with direct access to your build schedule through project management software. Rigorous quality standards, every stage checked and signed off before moving forward.",
    image: {
      src: "c86e57_523748688cdd451883d9ceb767ed51a2~mv2.jpg",
      alt: "Seamless delivery — Garden Crescent coastal home",
    },
  },
  {
    number: "05",
    title: "Build Better",
    short: "Built to last",
    body: "Our Early Builder Involvement process brings design and construction together — saving time, avoiding costly surprises, and ensuring your home reflects your vision in every detail. It's how we deliver not just homes of exceptional quality, but a building experience grounded in trust, communication, and lasting value. Build better. Live better. Start the right way — from the beginning.",
    image: {
      src: "c86e57_c0e95e74d8ef4d6facb91b33a4114ea2~mv2.jpg",
      alt: "Build Better — finished custom coastal home",
    },
  },
];

/* -------------------------------------------------------------------------- */
/*  THE NARRATIVE PROCESS — DISCOVER · DESIGN · PLAN · BUILD · DELIVER          */
/*  Mapped directly from the existing "Our Success Process" sections.          */
/* -------------------------------------------------------------------------- */

export type ProcessStep = {
  index: string;
  title: string;
  short: string;
  body: string;
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Discover",
    short: "Discovery & Consultation",
    body: "Every great home starts with a conversation. We take the time to understand your goals, lifestyle, and budget — walking through your ideas, site, and priorities together. Whether you're starting with an idea, sketches, or completed plans, this is where we begin shaping your vision into a buildable reality.",
  },
  {
    index: "02",
    title: "Design",
    short: "Design & Documentation",
    body: "Whether you're working with your own designer or one of our trusted architectural partners, we help turn ideas into practical, buildable plans. Together we refine the details — from structure and finishes to energy efficiency and compliance — ensuring every choice supports your vision without compromise.",
  },
  {
    index: "03",
    title: "Plan",
    short: "Cost Planning, QBE & Permits",
    body: "Transparency builds trust, and it starts in the design stage. We provide early cost checks, prepare a Quality Build Estimate (QBE), and refine figures into an open-book, trade-by-trade cost plan — before signing a fixed-price contract. Our team coordinates engineers, consultants, surveyors, and council so permits and approvals are handled correctly and on time.",
  },
  {
    index: "04",
    title: "Build",
    short: "Construction & Project Management",
    body: "This is where your home comes to life. Our experienced site team and trusted trades deliver every stage with precision, communication, and care. You'll have access to your live construction schedule and regular photo updates, so you always know what's happening and when — with quality control, safety, and inspections managed every step of the way.",
  },
  {
    index: "05",
    title: "Deliver",
    short: "Handover & Beyond",
    body: "When your home is complete, we walk through it with you to ensure every detail meets our shared expectations. You'll receive full handover documentation, warranty information, and a USB with your final records. Our relationship doesn't end there — we check in at 3 and 12 months to make sure your home is performing perfectly.",
  },
];