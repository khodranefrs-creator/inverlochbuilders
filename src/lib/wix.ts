/* -------------------------------------------------------------------------- */
/*  IMAGE HELPER — Wix CDN (site is currently served from Wix Studio CDN)      */
/*  Sources are Public site assets used under the audit/redesign brief.       */
/* -------------------------------------------------------------------------- */

export type Img = {
  /** Wix media hash, e.g. "c86e57_abc...~mv2.jpg" */
  src: string;
  alt: string;
};

const CDN = "https://static.wixstatic.com/media";

export function wixSrc(src: Img["src"], width: number): string {
  return `${CDN}/${src}/v1/fit/w_${width},q_85,enc_avif,quality_auto/${encodeURIComponent(
    src.split("~mv2")[0].replace(/^[^_]+_/, "")
  )}.${
    src.endsWith(".png")
      ? "png"
      : src.endsWith(".webp")
        ? "webp"
        : src.endsWith(".jpeg")
          ? "jpeg"
          : "jpg"
  }`;
}

/** Small blurred placeholder (progressive enhancement behind lazy src). */
export function wixBlur(src: Img["src"], width = 24): string {
  return `${CDN}/${src}/v1/fit/w_${width},q_30,blur_20,enc_avif,quality_auto/blur.jpg`;
}

export { CDN };