"use client";
import { ChevronDown } from "lucide-react";
import { projects } from "@/data/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/animations/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedCheck } from "@/components/ui/AnimatedCheck";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectsSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="projects"
      className="bg-slate-950/45 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Projects"
          title="Enterprise solutions built through engineering, leadership, and scalable design."
          description="Enterprise projects spanning .NET development, backend engineering, application design, workflow automation, technical leadership, and business-focused delivery."
        />
        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-sky-300 via-blue-600 to-transparent md:block" />
          <div className="grid gap-5">
            {projects.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.07}>
                <GlassCard className="md:ml-14">
                  <button
                    type="button"
                    onClick={() => setActive(active === index ? -1 : index)}
                    className="flex w-full items-start justify-between gap-4 text-left"
                    aria-expanded={active === index}
                  >
                    <span>
                      <span className="text-sm font-semibold text-sky-300">
                        {item.organization}
                      </span>
                      <span className="mt-2 block text-xl font-semibold text-slate-50">
                        {item.name}
                      </span>
                    </span>
                    <ChevronDown
                      className={`mt-1 h-5 w-5 shrink-0 text-sky-300 transition ${
                        active === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {active === index ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6">
                          {/* Summary */}
                          {item.description && (
                            <div className="mb-7 rounded-xl border border-sky-300/10 bg-sky-300/[0.03] p-4">
                              <p className="text-sm leading-7 text-slate-300">
                                {item.description}
                              </p>
                            </div>
                          )}

                          {/* Project Details Groups */}
                          <div className="space-y-8">
                            <h4 className="mb-3 text-md font-semibold uppercase tracking-[0.18em] text-slate-400">
                              Project Details
                            </h4>
                            {item.projectDetails.map((group) => (
                              <div key={group.title}>
                                {/* Group Heading */}
                                <div className="mb-4 flex items-center gap-3">
                                  <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                                    {group.title}
                                  </h4>

                                  <div className="h-px flex-1 bg-gradient-to-r from-sky-300/25 to-transparent" />
                                </div>

                                {/* Project Details Rows */}
                                <div className="space-y-2">
                                  {group.items.map((projectDetails, index) => (
                                    <div
                                      key={projectDetails}
                                      className="group flex gap-4 rounded-xl border border-transparent px-3 py-3 transition hover:border-white/10 hover:bg-white/[0.03]"
                                    >
                                      <motion.div
                                        key={projectDetails}
                                        initial={{ opacity: 0, x: -12 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                          duration: 0.4,
                                          delay: index * 0.08,
                                        }}
                                        className="flex items-start gap-4"
                                      >
                                        <AnimatedCheck />

                                        <p className="text-sm leading-6 text-slate-300">
                                          {projectDetails}
                                        </p>
                                      </motion.div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Technologies */}
                          <div className="mt-6 border-t border-white/10 pt-6">
                            <h4 className="mb-3 text-md font-semibold uppercase tracking-[0.18em] text-slate-400">
                              Technologies
                            </h4>

                            <div className="flex flex-wrap gap-2">
                              {item.tech.map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 hover:-translate-y-1 hover:border-sky-300/50 hover:text-sky-100  hover:bg-blue-500/10 transition"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
