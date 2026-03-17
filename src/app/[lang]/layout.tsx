import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, locales } from "@/lib/i18n";
import { LanguageProvider, Language } from "@/context/LanguageContext";
import ClientLayout from "./ClientLayout";
import { JsonLd } from "@/components/JsonLd";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang);

  const currentUrl = `https://cyberlabsweb.com/${lang}/`;

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: currentUrl,
      languages: {
        hu: "https://cyberlabsweb.com/hu/",
        en: "https://cyberlabsweb.com/en/",
        "x-default": "https://cyberlabsweb.com/hu/",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: currentUrl,
      siteName: "CyberLabs Web",
      type: "website",
      locale: lang === "hu" ? "hu_HU" : "en_US",
      images: [
        {
          url: "https://cyberlabsweb.com/og/cyberlabs-main-og.png",
          alt: "CyberLabs Web",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["https://cyberlabsweb.com/og/cyberlabs-main-og.png"],
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large" as any,
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    other: {
      "geo.region": "HU",
      "geo.placename": "Hungary",
      "geo.position": "47.1625;19.5033",
      ICBM: "47.1625, 19.5033",
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!locales.includes(lang as any)) {
    notFound();
  }

  return (
    <LanguageProvider lang={lang as Language}>
      <ClientLayout>{children}</ClientLayout>
    </LanguageProvider>
  );
}
