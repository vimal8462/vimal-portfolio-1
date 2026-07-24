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
          title="Engineering systems from interface to infrastructure."
          description="A practical view of the engineering patterns I use to design scalable applications across frontend, APIs, services, integrations, data, and infrastructure"
        />
        <Reveal>
          <GlassCard className="overflow-hidden">
            <div className="relative mx-auto grid max-w-3xl gap-5">
              {architectureNodes.map((node, index) => {
                const Icon = node.icon;

                return (
                  <div key={node.label} className="relative">
                    <div className="mx-auto flex max-w-md items-center gap-4 rounded-lg border border-sky-300/20 bg-slate-950/70 p-4 shadow-lg shadow-blue-950/20">
                      {/* Icon */}
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-blue-600/20 text-sky-300">
                        <Icon className="h-5 w-5" />
                      </div>

                      {/* Content */}
                      <div className="flex min-w-0 flex-col gap-1">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-300">
                          {node.title}
                        </span>

                        <span className="font-semibold text-slate-50">
                          {node.label}
                        </span>
                      </div>
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
