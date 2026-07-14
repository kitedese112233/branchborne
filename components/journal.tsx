"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const letter = [
  "I believed the stories to be nothing more than dying whispers.",
  "Until I found the first stick.",
  "The thing waited beneath the great root, lighter than a reed and colder than the creek. When I held it to the moon, its hidden edge remembered my hand."
];

export function Journal() {
  const reduceMotion = useReducedMotion();
  const transition = { duration: reduceMotion ? 0 : 0.9, ease: [0.2, 0.7, 0.2, 1] as const };

  return (
    <section className="journal" id="journal" aria-labelledby="journal-title">
      <div className="journal__grid">
        <motion.article className="journal__page" initial={{ opacity: 0, y: 36, rotate: -4 }} whileInView={{ opacity: 1, y: 0, rotate: -2 }} viewport={{ once: true, amount: 0.2 }} transition={transition}>
          <div className="journal__border" aria-hidden="true" />
          <span className="journal__flourish journal__flourish--top" aria-hidden="true">❦</span>
          <header><p className="journal__record">Relic Log // 001</p><h2 id="journal-title">Day One.</h2></header>
          <div className="journal__rule" aria-hidden="true">✦</div>
          <div className="journal__copy">{letter.map((paragraph, index) => <p key={paragraph} className={index === 0 ? "journal__opening" : undefined}>{paragraph}</p>)}</div>
          <p className="journal__signature">— A traveller, unnamed</p>
          <span className="journal__seal" aria-hidden="true">ᛟ</span>
          <span className="journal__flourish journal__flourish--bottom" aria-hidden="true">❧</span>
        </motion.article>
        <motion.figure className="journal__plate" initial={{ opacity: 0, y: 40, rotate: 4 }} whileInView={{ opacity: 1, y: 0, rotate: 1.4 }} viewport={{ once: true, amount: 0.2 }} transition={{ ...transition, delay: reduceMotion ? 0 : 0.12 }}>
          <Image src="/assets/rapier-stick-relic-log.png" alt="Relic Log illustration showing the Rapier Stick in a vine-covered forest" fill sizes="(max-width: 700px) 88vw, 42vw" priority={false} />
          <figcaption>Archive plate · I</figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
