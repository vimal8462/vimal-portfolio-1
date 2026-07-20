import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-white/10 bg-slate-900/65 p-6 shadow-2xl shadow-blue-950/20 backdrop-blur-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
