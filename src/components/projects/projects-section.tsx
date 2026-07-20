import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-slate-950/45 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Enterprise products with clear architecture and measurable outcomes."
          description="Each project highlights the problem shape, technical approach, and operational result rather than stopping at a simple gallery card."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={(index % 2) * 0.08}>
              <GlassCard className="group h-full overflow-hidden p-0">
                <div className="h-44 bg-[linear-gradient(135deg,rgba(37,99,235,0.55),rgba(56,189,248,0.18)),radial-gradient(circle_at_80%_20%,rgba(248,250,252,0.24),transparent_28%)] p-5">
                  <div className="flex h-full items-end justify-between">
                    <h3 className="max-w-sm text-2xl font-semibold text-white">{project.name}</h3>
                    <ArrowUpRight className="h-6 w-6 text-white transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-7 text-slate-300">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 grid gap-4 text-sm leading-6 text-slate-300">
                    <p><span className="font-semibold text-sky-300">Architecture:</span> {project.architecture}</p>
                    <p><span className="font-semibold text-sky-300">Challenge:</span> {project.challenge}</p>
                    <p><span className="font-semibold text-sky-300">Solution:</span> {project.solution}</p>
                    <p><span className="font-semibold text-sky-300">Result:</span> {project.result}</p>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
