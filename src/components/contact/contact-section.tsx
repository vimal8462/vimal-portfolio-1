"use client";

import { Code2, Mail, Network, Phone, Send } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FormEvent, useState } from "react";

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vimalkrs/",
    icon: Network,
  },
  { label: "GitHub", href: "https://github.com/", icon: Code2 },
  { label: "Email", href: "mailto:vimal8462@hotmail.com", icon: Mail },
  { label: "Phone", href: "tel:+919650389436", icon: Phone },
];

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus({
      type: null,
      message: "",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to send message.");
      }

      setStatus({
        type: "success",
        message: "Thank you. Your message has been sent successfully.",
      });

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-slate-950/45 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build the next reliable software platform."
          description="Open to conversations around .NET engineering, solution architecture, application modernization, enterprise platforms, and AI-assisted software delivery."
        />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <GlassCard className="h-full">
              <h3 className="text-2xl font-semibold text-slate-50">
                Connect with Vimal
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Available for senior engineering and technical leadership
                opportunities involving .NET, solution architecture, application
                modernization, enterprise platforms, and AI-assisted software
                development. Feel free to connect through LinkedIn, GitHub,
                email, phone, or the contact form.
              </p>
              <div className="mt-8 grid gap-3">
                {links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-sky-300/40 hover:text-sky-200 hover:bg-blue-500/10 hover:-translate-y-1"
                    >
                      <Icon className="h-4 w-4" />
                      {link.label} - {link.href.replace(/^(mailto:|tel:)/, "")}
                    </a>
                  );
                })}
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.08}>
            <GlassCard>
              <form className="grid gap-5" onSubmit={handleSubmit}>
                <label className="grid gap-2 text-sm font-medium text-slate-200">
                  Name
                  <input
                    className="min-h-12 rounded-lg border border-white/10 bg-slate-950/70 px-4 text-slate-50 outline-none transition placeholder:text-slate-500 focus:border-sky-300"
                    placeholder="Your name"
                    name="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-200">
                  Email
                  <input
                    className="min-h-12 rounded-lg border border-white/10 bg-slate-950/70 px-4 text-slate-50 outline-none transition placeholder:text-slate-500 focus:border-sky-300"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    required
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-200">
                  Message
                  <textarea
                    className="min-h-36 rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-50 outline-none transition placeholder:text-slate-500 focus:border-sky-300"
                    placeholder="Tell me about the opportunity, project, or engineering challenge you'd like to discuss."
                    name="message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    required
                  />
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
                {status.message && (
                  <div
                    role="status"
                    aria-live="polite"
                    className={`rounded-lg border px-4 py-3 text-sm ${
                      status.type === "success"
                        ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                        : "border-red-400/30 bg-red-400/10 text-red-300"
                    }`}
                  >
                    {status.message}
                  </div>
                )}
              </form>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
