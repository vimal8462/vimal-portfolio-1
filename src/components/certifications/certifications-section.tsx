import { Reveal } from "@/components/animations/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  certifications,
  coreCompetencies,
  education,
  highlights,
  softSkills,
} from "@/data/portfolio";

export function CertificationsSection() {
  return (
    <section id="credentials" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Credentials"
          title="Professional credentials, education, and leadership strengths."
          description="Academic qualifications, professional certifications, and leadership capabilities supporting more than a decade of software engineering experience."
        />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={0.08}>
            <GlassCard className="h-full">
              <h3 className="text-xl font-semibold text-slate-50">Education</h3>
              <div className="mt-5 grid gap-4">
                {education.map((item) => (
                  <div
                    key={`${item.title}-${item.year}`}
                    className="rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-sky-300/50 hover:bg-white/[0.03] hover:-translate-y-1"
                  >
                    <p className="font-semibold text-slate-50">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-300">
                      {item.institution}
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
                      {item.year}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>

          <Reveal>
            <GlassCard className="h-full">
              <h3 className="text-xl font-semibold text-slate-50">
                Certifications
              </h3>
              <div className="mt-5 grid gap-3">
                {certifications.map((cert) => {
                  const Icon = cert.icon;
                  return (
                    <div
                      key={cert.title}
                      className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-sky-300/50 hover:bg-white/[0.03] hover:-translate-y-1"
                    >
                      <Icon className="h-5 w-5 shrink-0 text-sky-300" />
                      <p className="text-sm font-semibold leading-6 text-slate-100">
                        {cert.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </GlassCard>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <GlassCard className="h-full hover:-translate-y-1 transition hover:shadow-lg hover:shadow-sky-950/40 hover:border-sky-300/50">
                  <Icon className="h-7 w-7 text-sky-300" />
                  <h3 className="mt-5 text-lg font-semibold text-slate-50">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.body}
                  </p>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.85fr_0.6fr]">
          <Reveal>
            <GlassCard className="h-full">
              <h3 className="text-xl font-semibold text-slate-50">
                Core Competencies
              </h3>
              <div className="mt-5 grid gap-3">
                {coreCompetencies.map((competency) => (
                  <div
                    key={competency}
                    className="flex gap-3 text-sm leading-6 text-slate-300 transition hover:-translate-y-1 hover:text-sky-100 hover:bg-blue-500/10 hover:border-sky-300/50 rounded-lg border border-white/10 bg-white/5 p-4"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                    <span>{competency}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.08}>
            <GlassCard className="h-full">
              <h3 className="text-xl font-semibold text-slate-50">
                Leadership Strengths
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-sky-300/20 bg-slate-950/70 px-4 py-2 text-sm text-slate-200 hover:-translate-y-1 hover:border-sky-300/50 hover:text-sky-100  hover:bg-blue-500/10 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
