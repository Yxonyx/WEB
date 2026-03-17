import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://cyberlabsweb.com";

const blogPosts = [
  { id: "keptomorites-ingyen-korlatlanul", date: "2026-02-25" },
  { id: "qr-kod-generalo-ingyenes", date: "2026-02-18" },
  { id: "egyedi-weboldal-vs-sablon", date: "2026-01-28" },
  { id: "keresooptimalizalas-2026", date: "2026-01-15" },
  { id: "ai-korszak-geo-optimalizalas", date: "2026-01-05" },
  { id: "weboldal-keszites-arak-2026", date: "2026-02-12" },
  { id: "weboldal-keszites-kockazat-nelkul", date: "2026-02-15" },
  { id: "ai-chatbot-asszisztensek", date: "2026-02-20" },
  { id: "weboldal-2026-ban-csak-jelen-lenni", date: "2026-02-25" },
  { id: "ai-chatbot-latogatobol-erdeklodo", date: "2026-03-02" },
  { id: "weboldalt-keresel-2026-ban-kerdesek", date: "2026-03-10" },
  { id: "egyedi-webdizajn-2026-ban", date: "2026-03-18" },
  { id: "fogyasztoi-ut-a-weboldalon", date: "2026-03-25" },
];

const nicheSlugs = [
  "ugyvedeknek", "fodraszoknak", "kivitelezoknek", "orvosoknak",
  "ettermeknek", "autoszereloknek", "ingatlanosoknak", "kozmetikusoknak",
  "villanyszereloknek", "szallodaknak", "gyogyszereszeknek", "epiteszeknek",
  "konyvveloknek", "pszichologusoknak", "marketing-ugynoksegeknek",
  "edzo-es-fitness", "fotografusoknak", "allatorvosoknak", "webshopoknak",
  "peksegeknek",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split("T")[0];

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/hu/`, lastModified: today, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/en/`, lastModified: today, changeFrequency: "daily", priority: 1.0 },
  ];

  // Blog posts (HU & EN)
  const blogPages: MetadataRoute.Sitemap = blogPosts.flatMap((post) => [
    { url: `${baseUrl}/hu/blog/${post.id}`, lastModified: post.date, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/en/blog/${post.id}`, lastModified: post.date, changeFrequency: "monthly" as const, priority: 0.8 },
  ]);

  // Niche pages
  const nichePages: MetadataRoute.Sitemap = nicheSlugs.map((slug) => ({
    url: `${baseUrl}/hu/weboldal-keszites/${slug}`,
    lastModified: today,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Tool pages
  const toolPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/hu/tools/qr`, lastModified: today, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/en/tools/qr`, lastModified: today, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/hu/tools/image-compressor`, lastModified: today, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/en/tools/image-compressor`, lastModified: today, changeFrequency: "monthly" as const, priority: 0.9 },
  ];

  return [...staticPages, ...blogPages, ...nichePages, ...toolPages];
}
