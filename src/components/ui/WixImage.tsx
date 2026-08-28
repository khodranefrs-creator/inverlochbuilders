"use client";

import { cn } from "@/lib/utils";

export function WixImage({
  src,
  alt,
  width = 1200,
  className,
  eager = false,
  sizes,
  loading,
}: {
  src: string;
  alt: string;
  width?: number;
  className?: string;
  eager?: boolean;
  sizes?: string;
  loading?: "lazy" | "eager";
}) {
  const isEager = eager || loading === "eager";
  return (
    <img
      src={`https://static.wixstatic.com/media/${src}/v1/fit/w_${width},q_85,enc_avif,quality_auto/${encodeURIComponent(
        src.split("~mv2")[0].replace(/^[^_]+_/, "")
      )}.${src.endsWith(".png") ? "png" : "jpeg"}`}
      alt={alt}
      loading={isEager ? "eager" : "lazy"}
      decoding={isEager ? "sync" : "async"}
      sizes={sizes}
      className={cn(className)}
      onLoad={(e) => {
        e.currentTarget.classList.add("is-loaded");
      }}
    />
  );
}

/** Fluid image inside a fixed-ratio frame. */
export function MediaFrame({
  src,
  alt,
  width = 1200,
  className,
  ratio = "aspect-[4/3]",
  eager = false,
}: {
  src: string;
  alt: string;
  width?: number;
  className?: string;
  ratio?: string;
  eager?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden", ratio, className)}>
      <WixImage
        src={src}
        alt={alt}
        width={width}
        eager={eager}
        className={cn(
          "wix-img absolute inset-0 h-full w-full object-cover",
          eager && "is-eager"
        )}
      />
    </div>
  );
}