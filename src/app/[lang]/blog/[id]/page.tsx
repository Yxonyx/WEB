import { Suspense } from "react";
import BlogPostClient from "./BlogPostClient";
import { blogPosts } from "@/data/blogPosts";
import { locales } from "@/lib/i18n";
import type { Metadata } from "next";

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    blogPosts.map((post: any) => ({
      lang,
      id: post.id,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}): Promise<Metadata> {
  const { lang, id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return {
      title: "Cikk nem található | CyberLabs Web",
    };
  }

  const canonicalUrl = `https://cyberlabsweb.com/${lang}/blog/${post.id}`;
  const ogImage = `https://cyberlabsweb.com${post.image}`;

  return {
    title: `${post.title} | CyberLabs Web`,
    description: post.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: canonicalUrl,
      siteName: "CyberLabs Web",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: lang === "hu" ? "hu_HU" : "en_US",
      type: "article",
      publishedTime: post.dateISO,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  const jsonLd = post
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.metaDescription,
        image: `https://cyberlabsweb.com${post.image}`,
        datePublished: post.dateISO,
        dateModified: post.dateISO,
        author: {
          "@type": "Organization",
          name: post.author,
          url: "https://cyberlabsweb.com/",
        },
        publisher: {
          "@type": "Organization",
          name: "CyberLabs Web",
          logo: {
            "@type": "ImageObject",
            url: "https://cyberlabsweb.com/og/cyberlabs-og.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://cyberlabsweb.com/${lang}/blog/${post.id}`,
        },
        articleSection: post.category,
        inLanguage: lang === "hu" ? "hu-HU" : "en-US",
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <Suspense fallback={<div className="w-full min-h-screen" />}>
        <BlogPostClient />
      </Suspense>
    </>
  );
}
