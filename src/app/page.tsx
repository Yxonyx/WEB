import type { Metadata } from "next";

const title = "Céges Weboldal & Webshop Készítés | WordPress, Shopify | CyberLabs Web";
const description = "Egyedi weboldal és webshop fejlesztés WordPress, WooCommerce és Shopify alapon. SEO + GEO optimalizált, villámgyors, modern megoldások garanciával.";
const canonicalUrl = "https://cyberlabsweb.com/hu/";
const socialImage = "https://cyberlabsweb.com/og/cyberlabs-main-og.png";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title,
    description,
    url: canonicalUrl,
    siteName: "CyberLabs Web",
    type: "website",
    locale: "hu_HU",
    images: [
      {
        url: socialImage,
        secureUrl: socialImage,
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "CyberLabs Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
};

export default function RootPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/hu/" />
      <main className="min-h-screen bg-[#040812] flex items-center justify-center text-white">
        <script dangerouslySetInnerHTML={{ __html: "window.location.replace('/hu/')" }} />
        <div className="w-8 h-8 rounded-full border-2 border-[#4F8AFF] border-t-transparent animate-spin" />
      </main>
    </>
  );
}
