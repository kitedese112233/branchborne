"use client";

import { useState } from "react";

type Location = { id: string; name: string; x: number; y: number; note: string };
const locations: Location[] = [
  { id: "tree", name: "The Great Tree", x: 43, y: 32, note: "The oldest witness in the forest." },
  { id: "creek", name: "Forgotten Creek", x: 55, y: 65, note: "Cold water that carries names downstream." },
  { id: "hollow", name: "Ash Hollow", x: 27, y: 72, note: "The ground remains warm beneath the ash." },
  { id: "grove", name: "Silent Grove", x: 73, y: 24, note: "No birds cross this ring of trees." }
];

export function ForestMap() {
  const [active, setActive] = useState(locations[0]);
  return <section className="forest-map" aria-labelledby="map-title">
    <header className="forest-map__header"><p className="eyebrow">A weathered record</p><h2 id="map-title">Forest Map</h2><p>Four marks have held through every rain.</p></header>
    <div className="map-paper">
      <div className="map-paper__border" aria-hidden="true" /><h3>The Forgotten Forest</h3><span className="map-paper__compass" aria-hidden="true">✦</span>
      <svg className="map-paper__paths" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M48,-5 C41,20 67,35 50,58 S60,86 48,106" /><path d="M17,76 C29,57 34,46 43,32 M45,32 C58,26 66,22 73,24 M44,32 C47,45 52,56 55,65" /></svg>
      {locations.map(location => <button className={`map-pin ${active.id === location.id ? "map-pin--active" : ""}`} key={location.id} style={{ left: `${location.x}%`, top: `${location.y}%` }} onClick={() => setActive(location)} aria-pressed={active.id === location.id}><span aria-hidden="true">✧</span>{location.name}</button>)}
      <aside className="map-paper__note" aria-live="polite"><strong>{active.name}</strong><span>{active.note}</span></aside>
    </div>
  </section>;
}
