import { Download } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { achievements, metrics } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Architecture-Driven .NET Leadership for Enterprise Platforms."
          description="Hands-on engineering leader specializing in .NET 8, ASP.NET Core, Microservices, Blazor, SQL Server, Cloud Deployment, and AI-assisted software development. Experienced in transforming complex business requirements into scalable and maintainable enterprise platforms."
        />
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-blue-600/30 via-slate-900 to-sky-400/10 p-6 shadow-2xl shadow-blue-950/30">
              <div className="absolute inset-8 rounded-lg border border-sky-300/15" />
              <div className="relative flex h-full flex-col justify-end rounded-lg bg-slate-950/35 p-6 backdrop-blur">
                <div className="flex items-center justify-center">
                  <img
                    src="/images/VIMAL_PP_PNG.PNG"
                    width="93%"
                    alt="Vimal Kumar"
                  />
                </div>
                {/* <p className="text-sm uppercase tracking-[0.32em] text-sky-300">
                  Portrait Placeholder
                </p> */}
                <h3 className="mt-4 text-4xl font-semibold text-sky-300 flex items-center justify-center">
                  Vimal Kumar
                </h3>
                <p className="mt-3 text-slate-300 flex items-center justify-center">
                  Software Development Manager
                </p>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-lg leading-9 text-slate-300 text-justify">
                With over 10 years of experience, I have designed and delivered
                enterprise-grade ERP systems, Learning Management Systems (LMS),
                government platforms, admin portals, and workflow automation
                solutions. My expertise includes software architecture, backend
                engineering, API ecosystems, database optimization, and
                technical leadership, combining hands-on development with
                strategic decision-making to deliver scalable, secure, and
                high-performance applications.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {achievements.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={index * 0.07}>
                    <GlassCard className="h-full">
                      <Icon className="h-6 w-6 text-sky-300" />
                      <h3 className="mt-4 font-semibold text-slate-50">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-md leading-6 text-slate-300">
                        {item.body}
                      </p>
                    </GlassCard>
                  </Reveal>
                );
              })}
            </div>
            <Reveal className="mt-8">
              <a
                href="/resume/vimal-kumar-resume.pdf"
                className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-sky-300/35 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-50 transition hover:bg-white/10"
              >
                <Download className="h-4 w-4" />
                Resume Download
              </a>

              <a
                href="https://www.linkedin.com/in/vimalkrs/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-sky-300/35 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-50 transition hover:bg-white/10 ml-4"
              >
                <Download className="h-4 w-4" />
                LinkedIn Profile
              </a>
              {/* <div className="mt-4 text-md text-slate-300">
                ERP • LMS • Government Platforms • Workflow Automation • Payment
                Systems • Enterprise APIs
              </div> */}
            </Reveal>
          </div>

          <div className="col-sm-12 mt-4 grid gap-4 md:col-span-2 md:grid-cols-4">
            {metrics.map((metric, index) => (
              <Reveal key={metric.label} delay={index * 0.06}>
                <GlassCard className="h-full">
                  <p className="text-4xl font-semibold text-sky-300">
                    {metric.value}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {metric.label}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
