import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const principles = [
  {
    number: "01",
    title: "Design Led",
    copy: "We believe good design makes great living. We collaborate with designers and clients to deliver homes that are functional, beautiful, and uniquely yours.",
  },
  {
    number: "02",
    title: "Quality",
    copy: "We don't just meet minimum standards — we build beyond them. With a focus on durability, detail and long-term performance, we create homes that feel better to live in.",
  },
  {
    number: "03",
    title: "Trust",
    copy: "Every project is a partnership. You'll always know where things stand, what comes next, and who to talk to — because the process should feel as good as the result.",
  },
  {
    number: "04",
    title: "Built to Last",
    copy: "Over decades of custom builds and renovations, we've learned that lasting quality comes from honest building, proven methods and materials chosen for the long term.",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-ivory py-24 md:py-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeader
                eyebrow="Why Inverloch Builders"
                title={
                  <>
                    Building a better way,
                    <br />
                    <span className="italic">from the ground up.</span>
                  </>
                }
                intro="Four principles sit behind every home we build — the reasons our clients come back, refer us, and stay for second projects."
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-line">
              {principles.map((p, i) => (
                <Reveal key={p.number} delay={i * 60}>
                  <article className="group grid grid-cols-12 items-start gap-4 border-b border-line py-12 transition-colors hover:bg-parchment/60 md:py-14">
                    <p className="col-span-2 font-display text-3xl font-light text-clay transition-transform duration-500 group-hover:-translate-y-1 md:col-span-1 md:text-4xl">
                      {p.number}
                    </p>
                    <div className="col-span-10 md:col-span-6">
                      <h3 className="display-sm text-ink">{p.title}</h3>
                    </div>
                    <p className="body-copy col-span-10 md:col-span-5 md:col-start-6">
                      {p.copy}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}