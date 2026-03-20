"use client";

import { lazy, Suspense } from "react";

const AllArticles = lazy(() =>
  import("@/components/pages/AllArticles").then((m) => ({
    default: m.AllArticles,
  }))
);

export default function AllArticlesClient() {
  return (
    <Suspense fallback={<div className="w-full min-h-screen" />}>
      <AllArticles />
    </Suspense>
  );
}
