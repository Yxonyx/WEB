"use client";

import { Suspense, lazy } from "react";

const ImageCompressorTool = lazy(() =>
  import("@/components/pages/ImageCompressorTool").then((m) => ({
    default: m.ImageCompressorTool,
  }))
);

export default function ImageCompressorPage() {
  return (
    <Suspense fallback={<div className="w-full min-h-screen" />}>
      <ImageCompressorTool />
    </Suspense>
  );
}
