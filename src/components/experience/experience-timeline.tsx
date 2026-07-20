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
    <section id="experience" className="bg-slate-950/45 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Timeline"
          title="A decade of delivery across platforms, teams, and architecture."
          description="Expandable career milestones covering responsibilities, technology choices, and the steady move from feature delivery into solution ownership."
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
                      <span className="text-sm font-semibold text-sky-300">{item.period}</span>
                      <span className="mt-2 block text-xl font-semibold text-slate-50">{item.role}</span>
                      <span className="mt-1 block text-slate-300">{item.company}</span>
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
                          <ul className="grid gap-3 text-sm leading-6 text-slate-300">
                            {item.responsibilities.map((responsibility) => (
                              <li key={responsibility} className="flex gap-3">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                                {responsibility}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-5 flex flex-wrap gap-2">
                            {item.technologies.map((tech) => (
                              <span key={tech} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                                {tech}
                              </span>
                            ))}
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
