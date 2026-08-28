import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { WixImage } from "@/components/ui/WixImage";
import type { Img } from "@/lib/wix";
import { ratioFromClass } from "@/lib/wix";
import { cn } from "@/lib/utils";

type SceneType = "plate" | "duo" | "asym" | "trio";

type Scene = { type: SceneType; images: Img[] };

const SCENE_SIZES: Record<SceneType, number> = {
  plate: 1,
  duo: 2,
  asym: 2,
  trio: 3,
};

const CYCLE: SceneType[] = ["plate", "duo", "asym", "trio"];

/**
 * Split a project's gallery into a sequenced editorial narrative —
 * full-bleed plates, pairs, asymmetric duos and detail trios —
 * instead of a uniform masonry grid.
 */
export function buildScenes(images: Img[]): Scene[] {
  const queue = [...images];
  const scenes: Scene[] = [];
  let i = 0;

  while (queue.length > 0) {
    const type = CYCLE[i % CYCLE.length];
    const n = SCENE_SIZES[type];
    const take = queue.splice(0, n);
    if (take.length === 0) break;

    if (take.length < n) {
      const partial: SceneType =
        take.length === 2 ? "duo" : take.length === 3 ? "trio" : "plate";
      scenes.push({ type: partial, images: take });
      break;
    }
    scenes.push({ type, images: take });
    i += 1;
  }
  return scenes;
}

function IndexLabel({ index }: { index: number }) {
  return (
    <span
      aria-hidden="true"
      className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-stone"
    >
      {String(index).padStart(2, "0")}
    </span>
  );
}

function Figure({
  img,
  index,
  aspect = "aspect-[4/3]",
  caption = true,
}: {
  img: Img;
  index: number;
  aspect?: string;
  caption?: boolean;
}) {
  return (
    <figure className="group">
      <div className={cn("relative overflow-hidden bg-sand/40", aspect)}>
        <WixImage
          src={img.src}
          alt={img.alt}
          width={1400}
          ratio={ratioFromClass(aspect)}
          className="zoom-media wix-img absolute inset-0 h-full w-full object-cover"
        />
      </div>
      {caption && (
        <figcaption className="mt-4 flex items-baseline gap-4 border-t border-line pt-4">
          <IndexLabel index={index} />
          <span className="font-sans text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ash">
            {img.alt.replace(/^.* — /, "")}
          </span>
        </figcaption>
      )}
    </figure>
  );
}

export function ProjectGallery({ images }: { images: Img[] }) {
  const scenes = buildScenes(images);
  let counter = 0;

  return (
    <div className="space-y-10 md:space-y-20">
      {scenes.map((scene, si) => {
        const isFirstPlate = si === 0 && scene.type === "plate";

        if (scene.type === "plate") {
          const img = scene.images[0]!;
          const n = ++counter;
          const plate = (
            <Reveal
              className={cn(
                "relative aspect-[4/3] overflow-hidden bg-sand/40 md:aspect-[21/9]",
                !isFirstPlate && "md:mb-4"
              )}
            >
              <WixImage
                src={img.src}
                alt={img.alt}
                width={2000}
                ratio="21/9"
                className="wix-img absolute inset-0 h-full w-full object-cover"
              />
            </Reveal>
          );
          return (
            <figure key={si}>
              {isFirstPlate ? (
                <div className="w-full">{plate}</div>
              ) : (
                <Container>{plate}</Container>
              )}
              <div className={isFirstPlate ? "" : "mt-4"}>
                <Container>
                  <figcaption className="flex items-baseline gap-4 border-t border-line pt-4">
                    <IndexLabel index={n} />
                    <span className="font-sans text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ash">
                      {img.alt.replace(/^.* — /, "")}
                    </span>
                  </figcaption>
                </Container>
              </div>
            </figure>
          );
        }

        if (scene.type === "duo") {
          const [a, b] = scene.images;
          const na = ++counter;
          const nb = ++counter;
          return (
            <Container key={si}>
              <div className="grid gap-8 md:grid-cols-2 md:gap-10">
                <Reveal>
                  <Figure img={a!} index={na} aspect="aspect-[4/3] md:aspect-square" />
                </Reveal>
                <Reveal className="md:mt-24" delay={100}>
                  <Figure img={b!} index={nb} aspect="aspect-[4/3] md:aspect-square" />
                </Reveal>
              </div>
            </Container>
          );
        }

        if (scene.type === "asym") {
          const [a, b] = scene.images;
          const na = ++counter;
          const nb = ++counter;
          return (
            <Container key={si}>
              <div className="grid gap-8 md:grid-cols-12 md:gap-10">
                <Reveal className="md:col-span-8">
                  <Figure img={a!} index={na} aspect="aspect-[4/3] md:aspect-[4/5]" />
                </Reveal>
                <Reveal className="md:col-span-4" delay={120}>
                  <div className="md:mt-28">
                    <Figure img={b!} index={nb} aspect="aspect-[4/3] md:aspect-[3/4]" />
                  </div>
                </Reveal>
              </div>
            </Container>
          );
        }

        return (
          <Container key={si}>
            <div className="grid grid-cols-3 gap-4 md:gap-10 md:px-16">
              {scene.images.map((img) => {
                const n = ++counter;
                return (
                  <Reveal key={img.src}>
                    <Figure
                      img={img}
                      index={n}
                      caption={false}
                      aspect="aspect-[3/4]"
                    />
                  </Reveal>
                );
              })}
            </div>
          </Container>
        );
      })}
    </div>
  );
}