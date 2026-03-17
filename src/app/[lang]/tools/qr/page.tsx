"use client";

import { Suspense, lazy } from "react";

const QrGeneratorTool = lazy(() =>
  import("@/components/pages/QrGeneratorTool").then((m) => ({
    default: m.QrGeneratorTool,
  }))
);

export default function QrToolPage() {
  return (
    <Suspense fallback={<div className="w-full min-h-screen" />}>
      <QrGeneratorTool />
    </Suspense>
  );
}
