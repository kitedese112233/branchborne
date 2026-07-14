"use client";

import { Check, Copy, Send } from "lucide-react";
import { useState } from "react";

const contractAddress = "0x0000...FOREST";

export function Expedition() {
  const [copied, setCopied] = useState(false);
  const copyAddress = async () => {
    await navigator.clipboard?.writeText(contractAddress);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return <>
    <section className="expedition" aria-labelledby="expedition-title">
      <p className="eyebrow expedition__eyebrow">The path remains open</p><h2 id="expedition-title">Join the Expedition</h2>
      <p>A place at the fire, a page in the journal, and the promise that the next discovery will be remembered.</p>
      <nav className="expedition__links" aria-label="Expedition links"><a href="#" aria-label="Follow on X">X</a><a href="#"><Send size={14} /> TELEGRAM</a><a href="#">DEXSCREENER</a><button type="button" onClick={copyAddress} aria-label="Copy contract address">{copied ? <Check size={14} /> : <Copy size={14} />}{copied ? "COPIED" : "CONTRACT ADDRESS"}</button></nav>
    </section>
    <footer className="site-footer"><span>© The Forest Remembers</span><span>All things found are not claimed.</span></footer>
  </>;
}
