"use client";

import { lazy, Suspense } from "react";

const NicheLanding = lazy(() =>
  import("@/components/pages/NicheLanding").then((m) => ({
    default: m.NicheLanding,
  }))
);

export default function NichePageClient() {
  return (
    <Suspense fallback={<div className="w-full min-h-screen" />}>
      <NicheLanding />
    </Suspense>
  );
}
