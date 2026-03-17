import { Suspense } from "react";
import NichePageClient from "./NichePageClient";

const nicheSlugs = [
  "ugyvedeknek", "fodraszoknak", "kivitelezoknek", "orvosoknak",
  "ettermeknek", "autoszereloknek", "ingatlanosoknak", "kozmetikusoknak",
  "villanyszereloknek", "szallodaknak", "gyogyszereszeknek", "epiteszeknek",
  "konyvveloknek", "pszichologusoknak", "marketing-ugynoksegeknek",
  "edzo-es-fitness", "fotografusoknak", "allatorvosoknak", "webshopoknak",
  "peksegeknek",
];

export function generateStaticParams() {
  // Only HU niche pages exist
  return nicheSlugs.map((slug) => ({
    lang: "hu",
    slug,
  }));
}

export default function NichePage() {
  return (
    <Suspense fallback={<div className="w-full min-h-screen" />}>
      <NichePageClient />
    </Suspense>
  );
}
