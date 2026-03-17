import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CyberLabs Web - Céges Weboldal Készítés Garanciával",
  description:
    "Professzionális weboldal készítés garanciával. Modern, AI-optimalizált weboldalak céges ügyfeleknek Budapesten.",
  alternates: {
    canonical: "https://cyberlabsweb.com/hu/",
  },
  other: {
    "refresh": "0;url=/hu/",
  },
};

export default function RootPage() {
  return (
    <main>
      <h1>CyberLabs Web - Weboldal Készítés Garanciával</h1>
      <p>
        Professzionális céges weboldal készítés Budapesten. 
        Átirányítás folyamatban a <a href="/hu/">magyar oldalra</a>...
      </p>
    </main>
  );
}
