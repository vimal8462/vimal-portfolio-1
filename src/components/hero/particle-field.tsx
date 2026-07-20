"use client";

import { Particles, ParticlesProvider } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useCallback } from "react";

export function ParticleField() {
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <ParticlesProvider init={init}>
      <Particles
        id="hero-particles"
        className="absolute inset-0"
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            color: { value: ["#38BDF8", "#2563EB", "#F8FAFC"] },
            links: {
              color: "#38BDF8",
              distance: 135,
              enable: true,
              opacity: 0.18,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: true,
              speed: 0.55,
              straight: false,
            },
            number: { density: { enable: true }, value: 54 },
            opacity: { value: { min: 0.18, max: 0.55 } },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />
    </ParticlesProvider>
  );
}
