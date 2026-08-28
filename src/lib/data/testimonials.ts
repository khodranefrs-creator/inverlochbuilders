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
  {
    quote:
      "We consider ourselves fortunate that Andy Kempster was recommended to us for our recent renovations. They listen, communicate effectively and are careful and considerate of your space resulting in a quality service better than none. We would definitely recommend them to anyone seeking a builder.",
    author: "Jeanette Slaney",
    location: "Inverloch",
    projectType: "Renovations",
  },
  {
    quote:
      "Professionalism, Quality, Responsiveness, Value Andrew Kempster & his team have transformed our Federation Inverloch house, giving it a loving overhaul from top to bottom, and bringing it back to life :) Every member of the Inverloch Builders team have been a pleasure to work with from beginning to end of the 6 month process. We are so pleased with the outcome, from beautiful polished floor boards, to a state of the art bathroom & country kitchen in keeping with the era. We will enjoy it for many years to come. We would not hesitate to recommend them. Thank you Inverloch Builders!",
    author: "Louisa Donavan",
    location: "Inverloch",
    projectType: "Renovation",
  },
];

/** Video testimonial card — poster + link to the public real client content. */
export const videoTestimonial = {
  eyebrow: "Handover",
  title: "Our Woodland Heath Handover.",
  quote:
    "Handover is where we see the clients glow as their house has become a reality.",
  clientName: "Woodland Heath",
  clientLocation: "Bass Coast",
  clientProjectLabel: "Custom Home · Handover",
  projectType: "Handover",
  poster: {
    src: "c86e57_50c7e90887b143a19dec0e8e5b25a365~mv2.jpeg",
    alt: "Custom kitchen crafted by Inverloch Builders",
  },
  /** Native mp4/mov source when available. Falls back to external link. */
  videoFile: "",
  videoUrl: "https://www.instagram.com/p/DcalURrn2X-/",
  duration: "",
};