/* -------------------------------------------------------------------------- */
/*  IMAGE HELPER — Wix CDN (site is currently served from Wix Studio CDN)      */
/*  Sources are Public site assets used under the audit/redesign brief.       */
/*                                                                            */
/*  URL format mirrors the live site: the CDN requires BOTH width & height    */
/*  on fit/fill transforms, so a ratio is resolved per request and the file   */
/*  name is the full media id (e.g. c86e57_…~mv2.jpg).                        */
/* -------------------------------------------------------------------------- */

export type Img = {
  /** Wix media hash, e.g. "c86e57_abc...~mv2.jpg" */
  src: string;
  alt: string;
};

const CDN = "https://static.wixstatic.com/media";

export type Ratio =
  | "1/1"
  | "3/4"
  | "4/3"
  | "4/5"
  | "5/4"
  | "3/2"
  | "2/3"
  | "16/9"
  | "9/16"
  | "16/10"
  | "10/16"
  | "21/9"
  | "21/10"
  | "16/11"
  | "7/5"
  | "8/5";

const RATIO_RE = /^(\d+)\/(\d+)$/;

/** Height needed for a given width at the requested aspect ratio. */
export function hForRatio(width: number, ratio: Ratio | string = "4/3"): number {
  const m = RATIO_RE.exec(String(ratio));
  if (!m) return Math.round(width * 0.75);
  const [, w, h] = m;
  return Math.max(1, Math.round((width * Number(h)) / Number(w)));
}

/** Derive a request ratio from a Tailwind aspect class like "aspect-[4/5]". */
export function ratioFromClass(cls?: string): Ratio | string {
  const m = cls?.match(/aspect-\[\s*(\d+)\s*\/\s*(\d+)\s*\]/);
  if (m) return `${m[1]}/${m[2]}` as Ratio;
  if (cls?.includes("aspect-square")) return "1/1";
  if (cls?.includes("aspect-video")) return "16/9";
  return "4/3";
}

/** Extension for the CDN file name, matching the source's own extension. */
function extFor(src: string): string {
  if (src.endsWith(".png")) return "png";
  if (src.endsWith(".webp")) return "webp";
  if (src.endsWith(".jpeg")) return "jpeg";
  return "jpg";
}

/**
 * Build a CDN url for a Wix media hash.
 * `fill` with `al_c` centre-crops to the requested box — the same behaviour
 * as CSS `object-cover`, so the request ratio should match the display box.
 */
export function wixSrc(
  src: Img["src"],
  width: number,
  ratio: Ratio | string = "4/3"
): string {
  const h = hForRatio(width, ratio);
  const name = `${encodeURIComponent(src)}`.replace(/\.(png|webp|jpeg|jpg)$/, "");
  return `${CDN}/${src}/v1/fill/w_${width},h_${h},al_c,q_90,enc_avif,quality_auto/${name}.${extFor(
    src
  )}`;
}

/** Small blurred placeholder (progressive enhancement behind lazy src). */
export function wixBlur(
  src: Img["src"],
  width = 24,
  ratio: Ratio | string = "4/3"
): string {
  const h = hForRatio(width, ratio);
  const name = encodeURIComponent(src).replace(/\.(png|webp|jpeg|jpg)$/, "");
  return `${CDN}/${src}/v1/fill/w_${width},h_${h},al_c,q_30,blur_30,enc_avif,quality_auto/${name}.${extFor(
    src
  )}`;
}

export { CDN };