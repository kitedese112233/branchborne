"use client";

import { motion, useReducedMotion } from "framer-motion";

type Artifact = { name: string; status: "Found" | "Not yet found"; rune: string; description?: string };

// New relics need only one object here; the gallery lays them out automatically.
const artifacts: Artifact[] = [
  { name: "Rapier Stick", status: "Found", rune: "†", description: "A hidden edge, remembered by moonlight." },
  { name: "Unknown Artifact", status: "Not yet found", rune: "?" },
  { name: "Unknown Artifact", status: "Not yet found", rune: "?" },
  { name: "Unknown Artifact", status: "Not yet found", rune: "?" }
];

export function Discoveries() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="discoveries" aria-labelledby="discoveries-title">
      <header className="discoveries__header"><p className="eyebrow">Collected fragments</p><h2 id="discoveries-title">Discoveries</h2><p>Things the forest has chosen to return.</p></header>
      <div className="discoveries__grid">
        {artifacts.map((artifact, index) => <motion.article className={`artifact-card ${artifact.status === "Found" ? "artifact-card--found" : ""}`} key={`${artifact.name}-${index}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} whileHover={reduceMotion ? undefined : { y: -9 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : index * 0.08 }}>
          <p className="artifact-card__status">{artifact.status}</p><span className="artifact-card__rune" aria-hidden="true">{artifact.rune}</span><div><h3>{artifact.name}</h3>{artifact.description && <p className="artifact-card__description">{artifact.description}</p>}</div>
        </motion.article>)}
      </div>
    </section>
  );
}
