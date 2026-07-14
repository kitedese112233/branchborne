import type { Metadata } from "next";
import { Cinzel, EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const garamond = EB_Garamond({ subsets: ["latin"], variable: "--font-garamond" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "The Forest Remembers",
  description: "Every branch bears a forgotten weapon.",
  openGraph: { title: "The Forest Remembers", description: "A forgotten journal from the forest's edge." },
  twitter: { card: "summary_large_image" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${cinzel.variable} ${garamond.variable} ${inter.variable}`}><body><SmoothScroll>{children}</SmoothScroll></body></html>;
}
