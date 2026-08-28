import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { WixImage } from "@/components/ui/WixImage";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  tone = "dark",
  tall = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  image?: { src: string; alt: string };
  tone?: "dark" | "light";
  tall?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative flex flex-col justify-end overflow-hidden",
        tone === "dark" ? "bg-ink text-ivory" : "bg-parchment text-ink",
        tall ? "min-h-[70svh]" : "min-h-[52svh]"
      )}
    >
      {image && (
        <div className="absolute inset-0">
          <WixImage
            src={image.src}
            alt={image.alt}
            width={2000}
            eager
            className="wix-img is-eager absolute inset-0 h-full w-full object-cover"
          />
          <div
            className={cn(
              "absolute inset-0",
              tone === "dark"
                ? "bg-gradient-to-t from-ink/85 via-ink/40 to-ink/30"
                : "bg-gradient-to-t from-parchment/90 via-parchment/40 to-parchment/20"
            )}
          />
        </div>
      )}

      <Container className="relative z-10 pt-40 pb-14 md:pb-20">
        <Eyebrow tone={tone} muted>
          {eyebrow}
        </Eyebrow>
        <h1
          className={cn(
            "display-lg mt-6 max-w-4xl",
            tone === "dark" ? "text-ivory" : "text-ink"
          )}
        >
          {title}
        </h1>
        {intro && (
          <p
            className={cn(
              "lede mt-6 max-w-xl",
              tone === "dark" ? "text-ivory/75" : "text-ash"
            )}
          >
            {intro}
          </p>
        )}
      </Container>
    </section>
  );
}