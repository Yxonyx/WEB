export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://cyberlabsweb.com/#organization",
        name: "CyberLabs Web",
        legalName: "KYSO DIGITAL CONSULTING ZRT.",
        alternateName: "CyberLabs Web Digital Studio",
        url: "https://cyberlabsweb.com/",
        logo: {
          "@type": "ImageObject",
          "@id": "https://cyberlabsweb.com/#logo",
          url: "https://cyberlabsweb.com/og/cyberlabs-main-og.png",
          contentUrl: "https://cyberlabsweb.com/og/cyberlabs-main-og.png",
          caption: "CyberLabs Web - Webfejlesztés és SEO Magyarország",
        },
        image: { "@id": "https://cyberlabsweb.com/#logo" },
        description:
          "Modern, villámgyors céges weboldal fejlesztés és karbantartás. Technikai SEO + GEO.",
        taxID: "32797518-2-13",
        identifier: "13 10 042740",
        email: "contact@cyberlabsweb.com",
        telephone: "+36703304445",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Barackos út 155.",
          postalCode: "2000",
          addressLocality: "Szentendre",
          addressCountry: "HU",
        },
        areaServed: { "@type": "Country", name: "Hungary" },
        sameAs: [
          "https://www.instagram.com/cyberlabsweb/",
          "https://www.facebook.com/profile.php?id=61586980628114",
          "https://linkedin.com/company/cyberlabsweb",
          "https://tiktok.com/@cyberlabsweb",
          "https://share.google/XmycjQhY3yK7y2R1p",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://cyberlabsweb.com/#website",
        url: "https://cyberlabsweb.com/",
        name: "CyberLabs Web",
        description:
          "Céges weboldal készítés, SEO és GEO optimalizálás magyar KKV-knak",
        publisher: { "@id": "https://cyberlabsweb.com/#organization" },
        inLanguage: "hu-HU",
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://cyberlabsweb.com/#business",
        name: "CyberLabs Web",
        alternateName: "CyberLabs Web Digital Studio",
        description:
          "Modern, villámgyors céges weboldal fejlesztés és karbantartás. Technikai SEO + GEO, hogy Google-ben és AI-találatokban is megtaláljanak.",
        url: "https://cyberlabsweb.com/",
        logo: { "@id": "https://cyberlabsweb.com/#logo" },
        image: { "@id": "https://cyberlabsweb.com/#logo" },
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressCountry: "HU",
        },
        areaServed: [
          { "@type": "Country", name: "Hungary" },
          { "@type": "AdministrativeArea", name: "Pest megye" },
          { "@type": "AdministrativeArea", name: "Fejér megye" },
          { "@type": "AdministrativeArea", name: "Komárom-Esztergom megye" },
          { "@type": "City", name: "Budapest" },
          { "@type": "City", name: "Debrecen" },
          { "@type": "City", name: "Győr" },
          { "@type": "City", name: "Szeged" },
          { "@type": "City", name: "Pécs" },
        ],
        serviceType: [
          "Weboldal fejlesztés",
          "SEO optimalizálás",
          "GEO pozicionálás",
          "Weboldal karbantartás",
        ],
        email: "contact@cyberlabsweb.com",
        telephone: "+36703304445",
        sameAs: [
          "https://www.instagram.com/cyberlabsweb/",
          "https://www.facebook.com/profile.php?id=61586980628114",
          "https://linkedin.com/company/cyberlabsweb",
          "https://tiktok.com/@cyberlabsweb",
          "https://share.google/XmycjQhY3yK7y2R1p",
        ],
      },
      {
        "@type": "Service",
        name: "Egyedi weboldal készítés",
        provider: { "@id": "https://cyberlabsweb.com/#business" },
        description:
          "Reszponzív webdizájn, mobilbarát és gyors weboldalak fejlesztése üzleti célokra.",
        image: "https://cyberlabsweb.com/og/cyberlabs-main-og.png",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
