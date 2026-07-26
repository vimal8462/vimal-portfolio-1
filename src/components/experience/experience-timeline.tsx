"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/animations/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/data/portfolio";

export function ExperienceTimeline() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="experience"
      className="bg-slate-950/45 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Experience"
          title="A decade of engineering, delivery, and technical leadership."
          description="Expandable career milestones covering engineering responsibilities, technology decisions, team leadership, and the progression from hands-on development to end-to-end technical delivery."
        />
        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-sky-300 via-blue-600 to-transparent md:block" />
          <div className="grid gap-5">
            {experience.map((item, index) => (
              <Reveal key={item.company} delay={index * 0.07}>
                <GlassCard className="md:ml-14">
                  <button
                    type="button"
                    onClick={() => setActive(active === index ? -1 : index)}
                    className="flex w-full items-start justify-between gap-4 text-left"
                    aria-expanded={active === index}
                  >
                    <span>
                      <span className="text-sm font-semibold text-sky-300">
                        {item.period}
                      </span>
                      <span className="mt-2 block text-xl font-semibold text-slate-50">
                        {item.company}
                      </span>
                      <span className="mt-1 block text-slate-300">
                        {item.role}
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
                          {item.summary && (
                            <div className="mb-7 rounded-xl border border-sky-300/10 bg-sky-300/[0.03] p-4">
                              <p className="text-sm leading-7 text-slate-300">
                                {item.summary}
                              </p>
                            </div>
                          )}

                          {/* Responsibility Groups */}
                          <div className="space-y-8">
                            <h4 className="mb-3 text-md font-semibold uppercase tracking-[0.18em] text-slate-400">
                              ROLE & RESPONSIBILITIES
                            </h4>
                            {item.responsibilityGroups.map((group) => (
                              <div key={group.title}>
                                {/* Group Heading */}
                                <div className="mb-4 flex items-center gap-3">
                                  <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                                    {group.title}
                                  </h4>

                                  <div className="h-px flex-1 bg-gradient-to-r from-sky-300/25 to-transparent" />
                                </div>

                                {/* Responsibility Rows */}
                                <div className="space-y-2">
                                  {group.items.map((responsibility, index) => (
                                    <div
                                      key={responsibility}
                                      className="group flex gap-4 rounded-xl border border-transparent px-3 py-3 transition hover:border-sky-300/50 hover:bg-white/[0.03]"
                                    >
                                      <span className="shrink-0 font-mono text-xs font-semibold text-sky-300/60">
                                        {String(index + 1).padStart(2, "0")}
                                      </span>

                                      <p className="text-sm leading-6 text-slate-300">
                                        {responsibility}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Key Projects */}
                          {item.keyProjects && item.keyProjects.length > 0 && (
                            <div className="mt-8 border-t border-white/10 pt-6">
                              {/* <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                                Key Projects
                              </h4> */}
                              <h4 className="mb-3 text-md font-semibold uppercase tracking-[0.18em] text-slate-400">
                                Key Projects
                              </h4>

                              <div className="flex flex-wrap gap-2">
                                {item.keyProjects.map((project) => (
                                  <span
                                    key={project}
                                    className="rounded-lg border border-blue-400/20 bg-blue-500/5 px-3 py-1.5 text-xs font-medium text-sky-100 hover:bg-blue-100/10 hover:-translate-y-1 transition "
                                  >
                                    {project}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Technologies */}
                          <div className="mt-6 border-t border-white/10 pt-6">
                            <h4 className="mb-3 text-md font-semibold uppercase tracking-[0.18em] text-slate-400">
                              Technologies
                            </h4>

                            <div className="flex flex-wrap gap-2">
                              {item.technologies.map((tech) => (
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
