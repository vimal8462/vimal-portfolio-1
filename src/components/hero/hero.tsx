"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Download, Send } from "lucide-react";
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
          <p className="text-sm font-semibold uppercase tracking-[0.38em] text-sky-300">
            Vimal Kumar
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight text-slate-50 sm:text-6xl lg:text-7xl">
            Engineering enterprise systems with architecture, code, and AI.
          </h1>
          <p className="mt-6 text-2xl font-medium text-slate-200">
            <TypingTitle />
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Team Lead and Senior .NET Engineering Professional with 11+ years
            delivering .NET 8, .NET Core, Blazor, API, ERP, LMS, dashboard, and
            workflow platforms for complex organizations.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-sky-300" href="#projects">
              <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
              View Projects
            </a>
            <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-sky-300/35 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-50 backdrop-blur transition hover:border-sky-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-300" href="/resume/vimal-kumar-resume.pdf">
              <Download className="h-4 w-4" />
              Download Resume
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
            <span className="text-5xl font-semibold text-slate-50">11+</span>
            <span className="px-6 text-sm text-slate-300">years of software delivery</span>
          </div>
          {heroBadges.map((badge, index) => {
            const angle = (index / heroBadges.length) * Math.PI * 2;
            const left = 50 + Math.cos(angle) * 38;
            const top = 50 + Math.sin(angle) * 38;
            return (
              <span
                key={badge}
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-lg border border-sky-300/25 bg-slate-900/75 px-4 py-2 text-xs font-semibold text-sky-100 shadow-lg shadow-blue-950/30 backdrop-blur"
                style={{ left: `${left}%`, top: `${top}%` }}
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
