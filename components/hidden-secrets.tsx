"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function HiddenSecrets() {
  const [open, setOpen] = useState(false);
  const [leafVisible, setLeafVisible] = useState(false);
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    if (reduceMotion) return;
    const showLeaf = () => { setLeafVisible(true); window.setTimeout(() => setLeafVisible(false), 5200); };
    const first = window.setTimeout(showLeaf, 9000);
    const interval = window.setInterval(showLeaf, 28000);
    return () => { window.clearTimeout(first); window.clearInterval(interval); };
  }, [reduceMotion]);
  return <><button className="secret-rune" type="button" aria-label="Reveal a hidden journal entry" aria-expanded={open} onClick={() => setOpen(value => !value)}>ᛟ</button><aside className={`secret-note ${open ? "secret-note--open" : ""}`} aria-live="polite">Day Seven. The leaves do not fall here. They return to the branches after midnight.</aside>{leafVisible && <span className="rare-leaf" aria-hidden="true">❦</span>}</>;
}
