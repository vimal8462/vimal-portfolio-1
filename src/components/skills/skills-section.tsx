"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/animations/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { skills, techCloud } from "@/data/portfolio";

function SkillRing({ name, level }: { name: string; level: number }) {
  const circumference = 2 * Math.PI * 42;

  return (
    <div className="grid place-items-center gap-3">
      <div className="relative h-28 w-28">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100" aria-hidden="true">
          <circle cx="50" cy="50" r="42" stroke="rgba(148,163,184,0.22)" strokeWidth="8" fill="none" />
          <motion.circle
            cx="50"
            cy="50"
            r="42"
            stroke="url(#skillGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: circumference - (level / 100) * circumference }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            strokeDasharray={circumference}
          />
          <defs>
            <linearGradient id="skillGradient" x1="0" x2="1" y1="0" y2="1">
              <stop stopColor="#38BDF8" />
              <stop offset="1" stopColor="#2563EB" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute inset-0 grid place-items-center text-lg font-semibold text-slate-50">
          {level}%
        </span>
      </div>
      <p className="text-center text-sm font-medium text-slate-200">{name}</p>
    </div>
  );
}

export function SkillsSection() {
  const [active, setActive] = useState(skills[0].category);
  const selected = skills.find((group) => group.category === active) ?? skills[0];

  return (
    <section id="skills" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Full-stack engineering with architecture depth."
          description="A practical skill map across backend systems, modern frontend delivery, infrastructure patterns, and AI-assisted engineering."
        />
        <Reveal>
          <div className="mx-auto mb-8 flex max-w-3xl flex-wrap justify-center gap-2 rounded-lg border border-white/10 bg-white/5 p-2">
            {skills.map((group) => (
              <button
                key={group.category}
                type="button"
                onClick={() => setActive(group.category)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  active === group.category
                    ? "bg-sky-300 text-slate-950"
                    : "text-slate-300 hover:bg-white/10 hover:text-slate-50"
                }`}
              >
                {group.category}
              </button>
            ))}
          </div>
        </Reveal>
        <GlassCard>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {selected.items.map((item) => (
              <SkillRing key={item.name} name={item.name} level={item.level} />
            ))}
          </div>
        </GlassCard>
        <Reveal className="mt-10">
          <div className="flex flex-wrap justify-center gap-3">
            {techCloud.map((tech) => (
              <span key={tech} className="rounded-lg border border-sky-300/20 bg-slate-900/60 px-4 py-2 text-sm text-slate-200 transition hover:-translate-y-1 hover:border-sky-300/50 hover:text-sky-100">
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
