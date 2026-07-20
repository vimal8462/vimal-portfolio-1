"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-[90] hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/45 mix-blend-screen transition-transform duration-75 lg:block"
      style={{ left: position.x, top: position.y }}
    />
  );
}
