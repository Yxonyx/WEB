"use client";

import { Suspense, lazy } from "react";

const AllArticles = lazy(() =>
  import("@/components/pages/AllArticles").then((m) => ({
    default: m.AllArticles,
  }))
);

export default function AllArticlesPage() {
  return (
    <Suspense fallback={<div className="w-full min-h-screen" />}>
      <AllArticles />
    </Suspense>
  );
}
