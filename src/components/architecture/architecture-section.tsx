import { Reveal } from "@/components/animations/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { architectureNodes } from "@/data/portfolio";

export function ArchitectureSection() {
  return (
    <section id="architecture" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Architecture"
          title="A clean path from experience layer to cloud operations."
          description="An animated system map showing the portfolio's target architecture vocabulary: Next.js UI, gateway boundaries, services, cache, messaging, data, and AWS deployment."
        />
        <Reveal>
          <GlassCard className="overflow-hidden">
            <div className="relative mx-auto grid max-w-3xl gap-5">
              {architectureNodes.map((node, index) => {
                const Icon = node.icon;
                return (
                  <div key={node.label} className="relative">
                    <div className="mx-auto flex max-w-md items-center gap-4 rounded-lg border border-sky-300/20 bg-slate-950/70 p-4 shadow-lg shadow-blue-950/20">
                      <div className="grid h-11 w-11 place-items-center rounded-lg bg-blue-600/20 text-sky-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-semibold text-slate-50">{node.label}</span>
                    </div>
                    {index < architectureNodes.length - 1 ? (
                      <div className="mx-auto h-8 w-px bg-gradient-to-b from-sky-300 to-blue-600" />
                    ) : null}
                  </div>
                );
              })}
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
