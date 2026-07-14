"use client";

import { ArrowDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const scrollToLore = () => document.getElementById("journal")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__moon" aria-hidden="true" />
      <div className="hero__forest hero__forest--far" aria-hidden="true" />
      <motion.div className="hero__tree" aria-hidden="true" animate={reduceMotion ? undefined : { rotate: [0, 0.5, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
      {!reduceMotion && <><div className="hero__fog hero__fog--one" aria-hidden="true" /><div className="hero__fog hero__fog--two" aria-hidden="true" /></>}
      <div className="hero__content">
        <motion.p className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>A forgotten journal · I</motion.p>
        <motion.h1 id="hero-title" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.12 }}>The Forest<br />Remembers.</motion.h1>
        <motion.p className="hero__subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.35 }}>Every branch bears a forgotten weapon.</motion.p>
        <motion.button className="hero__cta" type="button" onClick={scrollToLore} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}>ENTER THE FOREST <ArrowDown size={16} strokeWidth={1.5} /></motion.button>
      </div>
      <span className="hero__scroll" aria-hidden="true">Descend</span>
    </section>
  );
}
