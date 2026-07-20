"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-8">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-lg border px-4 py-3 backdrop-blur-xl transition ${
          scrolled
            ? "border-white/10 bg-slate-950/75 shadow-xl shadow-blue-950/20"
            : "border-white/5 bg-white/[0.03]"
        }`}
        aria-label="Main navigation"
      >
        <a href="#home" className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-50">
          Vimal
        </a>
        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-300"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden rounded-lg bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-300 md:inline-flex"
        >
          Let&apos;s Talk
        </a>
        <button
          type="button"
          className="rounded-lg border border-white/10 p-2 text-slate-100 md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open ? (
        <div className="mx-auto mt-2 grid max-w-7xl gap-1 rounded-lg border border-white/10 bg-slate-950/95 p-3 backdrop-blur md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-slate-200 hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
