import type { Img } from "@/lib/wix";

export type Testimonial = {
  quote: string;
  author: string;
  location: string;
  projectType: string;
  image?: Img;
};

/** Real client testimonials from the existing site. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "The service was terrific. The crew was efficient and helpful. Nothing was too much trouble and everything was done faster than I imagined (or could have hoped!).",
    author: "Janelle Malone",
    location: "Inverloch",
    projectType: "Build",
    image: {
      src: "c86e57_8cde571c4af54e0cba41b5f6df0434fc~mv2.jpeg",
      alt: "Inverloch home",
    },
  },
  {
    quote:
      "Andy and his team did an amazing job with our project. They were tidy, professional and polite. The finished result was outstanding. I highly recommend them to clients for any building works.",
    author: "Inverloch 3996",
    location: "Inverloch",
    projectType: "Building Works",
    image: {
      src: "c86e57_c0e95e74d8ef4d6facb91b33a4114ea2~mv2.jpg",
      alt: "Coastal custom home",
    },
  },
  {
    quote:
      "If you want perfection Andrew and the team will give it to you. They have completed 2 projects for us and we wouldn't use anyone else.",
    author: "Ray Walters",
    location: "Inverloch",
    projectType: "Two Projects",
    image: {
      src: "c86e57_d2a04caae26b4c9b878e4709c271235e~mv2.jpg",
      alt: "John Flagg Rise custom home",
    },
  },
];

/** Video testimonial card — poster + link to the public real client content. */
export const videoTestimonial = {
  eyebrow: "Handover",
  title: "Real people. Real homes. Real experiences.",
  quote:
    "Watching our clients see their finished home for the first time is what handover is all about.",
  clientName: "Woodland Heath",
  clientLocation: "Handover Video",
  clientProjectLabel: "Custom Home · Handover",
  projectType: "Custom Home",
  poster: {
    src: "c86e57_50c7e90887b143a19dec0e8e5b25a365~mv2.jpeg",
    alt: "Custom kitchen crafted by Inverloch Builders",
  },
  /** Native mp4/mov source when available. Falls back to external link. */
  videoFile: "",
  videoUrl: "https://www.instagram.com/reel/DcalURrn2X-/",
  duration: "00:14",
};