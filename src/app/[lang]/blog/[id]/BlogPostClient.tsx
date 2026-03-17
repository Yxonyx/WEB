"use client";

import { lazy, Suspense } from "react";

const BlogPost = lazy(() =>
  import("@/components/pages/BlogPost").then((m) => ({
    default: m.BlogPost,
  }))
);

export default function BlogPostClient() {
  return (
    <Suspense fallback={<div className="w-full min-h-screen" />}>
      <BlogPost />
    </Suspense>
  );
}
