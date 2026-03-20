import { Suspense } from "react";
import AllArticlesClient from "./AllArticlesClient";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isHu = lang === "hu";

  return {
    title: isHu
      ? "Blog & Tippek | CyberLabs Web"
      : "Blog & Tips | CyberLabs Web",
    description: isHu
      ? "Fedezd fel legújabb cikkeinket technológia, webfejlesztés, SEO és AI témában. Gyakorlati tippek vállalkozásoknak."
      : "Discover our latest articles on technology, web development, SEO and AI. Practical tips for businesses.",
    alternates: {
      canonical: `https://cyberlabsweb.com/${lang}/blog/all`,
    },
    openGraph: {
      title: isHu ? "Blog & Tippek" : "Blog & Tips",
      description: isHu
        ? "Fedezd fel legújabb cikkeinket technológia, webfejlesztés, SEO és AI témában."
        : "Discover our latest articles on technology, web development, SEO and AI.",
      url: `https://cyberlabsweb.com/${lang}/blog/all`,
      siteName: "CyberLabs Web",
      locale: isHu ? "hu_HU" : "en_US",
      type: "website",
    },
  };
}

export default function AllArticlesPage() {
  return (
    <Suspense fallback={<div className="w-full min-h-screen" />}>
      <AllArticlesClient />
    </Suspense>
  );
}
