"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function GreatTree() {
  const sectionRef = useRef<HTMLElement>(null);
  const treeRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !sectionRef.current || !treeRef.current) return;
    let context: { revert: () => void } | undefined;

    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([gsapModule, scrollTriggerModule]) => {
      const gsap = gsapModule.default;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      context = gsap.context(() => {
        gsap.to(treeRef.current, { scale: 1.13, yPercent: -4, ease: "none", scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 1.2 } });
      }, sectionRef);
    });
    return () => context?.revert();
  }, [reduceMotion]);

  return (
    <section className="great-tree" ref={sectionRef} aria-labelledby="great-tree-title">
      <div className="great-tree__roots" aria-hidden="true" />
      <div className="great-tree__trunk" ref={treeRef} aria-hidden="true"><span /><span /><span /></div>
      <div className="great-tree__fireflies" aria-hidden="true">{Array.from({ length: 8 }, (_, index) => <i key={index} />)}</div>
      <motion.div className="great-tree__content" initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: reduceMotion ? 0 : 1 }}>
        <p className="eyebrow">The witness</p>
        <h2 id="great-tree-title">The Great Tree</h2>
        <p>Its roots do not end in earth. They disappear into the part of the world that has forgotten daylight.</p>
      </motion.div>
    </section>
  );
}
