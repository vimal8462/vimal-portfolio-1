"use client";

import { useEffect, useState, type ReactNode } from "react";
import Lenis from "lenis";

export function MotionProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);
    const timer = window.setTimeout(() => setLoading(false), 950);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-[#050816]">
          <div className="flex flex-col items-center gap-5">
            <div className="relative h-16 w-16">
              <span className="absolute inset-0 rounded-full border border-sky-300/30" />
              <span className="absolute inset-2 animate-spin rounded-full border-2 border-transparent border-t-sky-300" />
              <span className="absolute inset-5 rounded-full bg-blue-600 shadow-[0_0_35px_rgba(37,99,235,0.85)]" />
            </div>
            <p className="text-sm font-medium uppercase tracking-[0.4em] text-slate-300">
              Initializing
            </p>
          </div>
        </div>
      ) : null}
      {children}
    </>
  );
}
