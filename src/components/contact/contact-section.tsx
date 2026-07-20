"use client";

import { Code2, Mail, Network, Phone, Send } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vimalkrs/", icon: Network },
  { label: "GitHub", href: "https://github.com/", icon: Code2 },
  { label: "Email", href: "mailto:vimal8462@hotmail.com", icon: Mail },
  { label: "Phone", href: "tel:+919650389436", icon: Phone },
];

export function ContactSection() {
  return (
    <section id="contact" className="bg-slate-950/45 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's design the next reliable platform."
          description="Use the form for senior .NET engineering, API modernization, architecture reviews, LMS/ERP workflows, dashboards, or AI-assisted delivery discussions."
        />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <GlassCard className="h-full">
              <h3 className="text-2xl font-semibold text-slate-50">Reach Vimal</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Available for senior .NET engineering, solution architecture,
                API modernization, LMS/ERP workflows, reporting dashboards, and
                AI-assisted delivery discussions. The form is ready to connect
                to Formspree, Resend, or a Next.js route handler.
              </p>
              <div className="mt-8 grid gap-3">
                {links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-sky-300/40 hover:text-sky-200"
                    >
                      <Icon className="h-4 w-4" />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.08}>
            <GlassCard>
              <form className="grid gap-5" onSubmit={(event) => event.preventDefault()}>
                <label className="grid gap-2 text-sm font-medium text-slate-200">
                  Name
                  <input
                    className="min-h-12 rounded-lg border border-white/10 bg-slate-950/70 px-4 text-slate-50 outline-none transition placeholder:text-slate-500 focus:border-sky-300"
                    placeholder="Your name"
                    required
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-200">
                  Email
                  <input
                    className="min-h-12 rounded-lg border border-white/10 bg-slate-950/70 px-4 text-slate-50 outline-none transition placeholder:text-slate-500 focus:border-sky-300"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-200">
                  Message
                  <textarea
                    className="min-h-36 rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-50 outline-none transition placeholder:text-slate-500 focus:border-sky-300"
                    placeholder="Tell me about the platform, dashboard, or workflow you want to build."
                    required
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
