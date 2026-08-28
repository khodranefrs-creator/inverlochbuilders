"use client";

import { cn } from "@/lib/utils";
import { wixSrc, wixBlur, type Ratio } from "@/lib/wix";

export function WixImage({
  src,
  alt,
  width = 1200,
  ratio = "4/3",
  className,
  eager = false,
  sizes,
  loading,
}: {
  src: string;
  alt: string;
  width?: number;
  ratio?: Ratio | string;
  className?: string;
  eager?: boolean;
  sizes?: string;
  loading?: "lazy" | "eager";
}) {
  const isEager = eager || loading === "eager";
  return (
    <img
      src={wixSrc(src, width, ratio)}
      alt={alt}
      loading={isEager ? "eager" : "lazy"}
      decoding={isEager ? "sync" : "async"}
      onLoad={(e) => {
        e.currentTarget.classList.add("is-loaded");
      }}
      onError={(e) => {
        // Fall back to the untouched original if a transform ever fails.
        e.currentTarget.src = `https://static.wixstatic.com/media/${src}`;
      }}
      srcSet={`
        ${wixBlur(src, 48, ratio)} 48w,
        ${wixSrc(src, Math.round(width * 0.5), ratio)} ${Math.round(width * 0.5)}w,
        ${wixSrc(src, width, ratio)} ${width}w,
        ${wixSrc(src, Math.round(width * 1.5), ratio)} ${Math.round(width * 1.5)}w
      `}
      sizes={sizes}
      className={cn(className)}
    />
  );
}

/** Fluid image inside a fixed-ratio frame. */
export function MediaFrame({
  src,
  alt,
  width = 1200,
  ratio: box = "aspect-[4/3]",
  imgRatio = "4/3",
  className,
  eager = false,
}: {
  src: string;
  alt: string;
  width?: number;
  ratio?: string;
  imgRatio?: Ratio | string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden", box, className)}>
      <WixImage
        src={src}
        alt={alt}
        width={width}
        ratio={imgRatio}
        eager={eager}
        className={cn(
          "wix-img absolute inset-0 h-full w-full object-cover",
          eager && "is-eager"
        )}
      />
    </div>
  );
}