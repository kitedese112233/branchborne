import { Hero } from "@/components/hero";
import { Journal } from "@/components/journal";
import { GreatTree } from "@/components/great-tree";
import { Discoveries } from "@/components/discoveries";
import { ForestMap } from "@/components/forest-map";
import { Expedition } from "@/components/expedition";
import { HiddenSecrets } from "@/components/hidden-secrets";

export default function Home() {
  return <main><Hero /><Journal /><GreatTree /><Discoveries /><ForestMap /><Expedition /><HiddenSecrets /></main>;
}
