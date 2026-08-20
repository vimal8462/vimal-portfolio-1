"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Activity, ArrowDown, Download, Send } from "lucide-react";
import { heroBadges } from "@/data/portfolio";
import { ParticleField } from "./particle-field";
import { TypingTitle } from "./typing-title";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const badgeX = useTransform(smoothX, [0, 1], [-12, 12]);
  const badgeY = useTransform(smoothY, [0, 1], [-10, 10]);

  return (
    <section
      id="home"
      className="relative isolate min-h-[92vh] overflow-hidden px-6 pb-24 pt-32 sm:px-10 lg:px-16"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width);
        mouseY.set((event.clientY - rect.top) / rect.height);
      }}
    >
      <ParticleField />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(37,99,235,0.24),transparent_30%),linear-gradient(135deg,#050816_0%,#0f172a_45%,#020617_100%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-4xl sm:text-4xl lg:text-4xl font-semibold uppercase tracking-[0.38em] text-sky-300">
            Vimal Kumar
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-slate-50 sm:text-4xl lg:text-4xl">
            {/* .NET Engineering | API Engineering | Technical Leadership |
            AI-Assisted Development | Solution Architecture */}
            .NET Engineering | Technical Leadership | Solution Architecture
          </h1>
          <p className="mt-6 text-2xl font-medium text-slate-200">
            <TypingTitle />
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 text-justify">
            Senior .NET Engineer and technical leader with 10+ years of
            experience designing and delivering scalable enterprise
            applications. Expertise in .NET 10, ASP.NET Core, C#, Blazor, Web
            APIs, Microservices, SQL Server, NoSql, and AI-assisted software
            development, with a strong focus on clean architecture, performance,
            security, and maintainability in the business impact.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 backdrop-blur transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-sky-300 hover:-translate-y-1"
              href="#projects"
            >
              <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
              View Projects
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-sky-300/35 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-50 backdrop-blur transition hover:border-sky-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-300 hover:-translate-y-1 "
              href="/resume/vimal-kumar-resume.pdf"
              target="_blank"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 backdrop-blur transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-sky-300 hover:-translate-y-1"
              href="#skills"
            >
              <Activity className="h-4 w-4 " />
              Skills & Expertise
            </a>
          </div>
        </motion.div>

        <motion.div
          style={{ x: badgeX, y: badgeY }}
          className="relative mx-auto aspect-square w-full max-w-[520px]"
        >
          <div className="absolute inset-0 rounded-full border border-sky-300/20 bg-slate-950/35 shadow-[0_0_90px_rgba(37,99,235,0.35)] backdrop-blur" />
          <div className="absolute inset-10 rounded-full border border-blue-400/20" />
          <div className="absolute inset-20 rounded-full border border-sky-200/15" />
          <div className="absolute left-1/2 top-1/2 grid h-44 w-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-slate-900/80 text-center shadow-2xl shadow-sky-950/40">
            <span className="text-5xl font-semibold text-slate-50">10+</span>
            <span className="px-6 text-sm text-slate-300">
              Years in Software Engineering
            </span>
          </div>
          {heroBadges.map((badge, index) => {
            const angle = (index / heroBadges.length) * Math.PI * 2;
            // const left = 50 + Math.cos(angle) * 38;
            // const top = 50 + Math.sin(angle) * 38;
            // Keep SSR and client-side values identical during hydration
            const left = (50 + Math.cos(angle) * 38).toFixed(4);
            const top = (50 + Math.sin(angle) * 38).toFixed(4);
            return (
              <span
                key={badge}
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-lg border border-sky-300/25 bg-slate-900/75 px-4 py-2 text-xs font-semibold text-sky-100 shadow-lg shadow-blue-950/30 backdrop-blur hover:-translate-y-1 hover:border-sky-300/50 hover:text-sky-100  hover:bg-blue-500/10 transition"
                style={{ left: `${left}%`, top: `${top}%`, width: "100px" }}
              >
                {badge}
              </span>
            );
          })}
        </motion.div>
      </div>
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 backdrop-blur transition hover:text-sky-200 md:block"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
