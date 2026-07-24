import { Reveal } from "@/components/animations/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { aiPractices } from "@/data/portfolio";

export function AiSection() {
  return (
    <section id="ai" className="bg-slate-950/45 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="AI Engineering"
          title="AI as a disciplined part of the engineering workflow."
          description="A practical approach to integrating GitHub Copilot, ChatGPT, prompt engineering, and structured review into enterprise software delivery."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {aiPractices.map((practice, index) => {
            const Icon = practice.icon;
            return (
              <Reveal key={practice.title} delay={index * 0.07}>
                <GlassCard className="h-full">
                  <Icon className="h-7 w-7 text-sky-300" />
                  <h3 className="mt-5 text-lg font-semibold text-slate-50">
                    {practice.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {practice.body}
                  </p>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
