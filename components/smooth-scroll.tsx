"use client";

import { useEffect } from "react";
import { useReducedMotion } from "framer-motion";

export function SmoothScroll({ children }: Readonly<{ children: React.ReactNode }>) {
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    if (reduceMotion) return;
    let frame = 0;
    let destroy: (() => void) | undefined;
    void import("lenis").then(({ default: Lenis }) => {
      const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
      const raf = (time: number) => { lenis.raf(time); frame = requestAnimationFrame(raf); };
      frame = requestAnimationFrame(raf);
      destroy = () => { cancelAnimationFrame(frame); lenis.destroy(); };
    });
    return () => destroy?.();
  }, [reduceMotion]);
  return <>{children}</>;
}
