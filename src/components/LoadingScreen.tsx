"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface LoadingScreenProps {
  name: string;
  title: string;
}

export function LoadingScreen({ name, title }: LoadingScreenProps) {
  const [phase, setPhase] = useState<"visible" | "fadeOut" | "done">("visible");

  useEffect(() => {
    const fadeTimer = setTimeout(() => setPhase("fadeOut"), 1800);
    const doneTimer = setTimeout(() => setPhase("done"), 2500);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background transition-opacity duration-700",
        phase === "fadeOut" && "opacity-0 pointer-events-none"
      )}
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground font-fira animate-[fadeSlideUp_0.8s_ease-out_both]">
          {name}
        </h1>
        <p className="mt-3 text-lg md:text-xl text-primary font-mono tracking-wider animate-[fadeSlideUp_0.8s_ease-out_0.3s_both]">
          {title}
        </p>
        <div className="mt-8 flex justify-center gap-1.5 animate-[fadeSlideUp_0.8s_ease-out_0.6s_both]">
          <span className="w-2 h-2 rounded-full bg-primary animate-[bounce_1s_ease-in-out_infinite]" />
          <span className="w-2 h-2 rounded-full bg-primary animate-[bounce_1s_ease-in-out_0.15s_infinite]" />
          <span className="w-2 h-2 rounded-full bg-primary animate-[bounce_1s_ease-in-out_0.3s_infinite]" />
        </div>
      </div>
    </div>
  );
}
