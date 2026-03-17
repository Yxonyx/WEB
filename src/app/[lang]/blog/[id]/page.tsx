import { Suspense } from "react";
import BlogPostClient from "./BlogPostClient";
import { blogPosts } from "@/data/blogPosts";
import { locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    blogPosts.map((post: any) => ({
      lang,
      id: post.id,
    }))
  );
}

export default function BlogPostPage() {
  return (
    <Suspense fallback={<div className="w-full min-h-screen" />}>
      <BlogPostClient />
    </Suspense>
  );
}
