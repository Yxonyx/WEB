export function JsonLd() {
  const faqItems = [
    {
      q: "Csak akkor fizetek, ha tetszik a próbaverzió?",
      a: "Igen, a kockázat a miénk. Készítünk egy működő próbaverziót az igényeid alapján. Ha tetszik az irány, akkor szerződünk és folytatjuk a munkát. Ha nem, semmilyen kötelezettséged nincs.",
    },
    {
      q: "Mennyi idő alatt készül el egy weboldal?",
      a: "Landing Page: kb. 5–7 munkanap, céges weboldal: 7–14 munkanap, webshop: 14–28 munkanap. A pontos ütemezés a projekt terjedelmétől és az anyagok rendelkezésre állásától függ.",
    },
    {
      q: "WordPress vagy egyedi fejlesztés? Melyiket válasszam?",
      a: "Ha gyors piacra lépés a cél és webshop kell, a WordPress + WooCommerce az ideális. Ha egyedi funkciók, maximális teljesítmény és skálázhatóság kell, egyedi fejlesztést javaslunk React/Next.js alapon. Mindkettőt fejlesztői szinten építjük.",
    },
    {
      q: "Készítetek WooCommerce vagy Shopify webshopot?",
      a: "Igen. WordPress WooCommerce és Shopify alapú webáruházakat fejlesztői megközelítéssel építünk, saját tárhelyen. Nem összekattintott sablonok, hanem karbantartható, skálázható architektúra egyedi Liquid sablonokkal és üzleti logikára szabott integrációkkal.",
    },
    {
      q: "Lehet sürgősen kérni?",
      a: "Igen. Felár ellenében, egyedi megbeszélés alapján gyorsítjuk a kivitelezést — jellemzően több fejlesztő párhuzamos ráállításával.",
    },
    {
      q: "Tudom később én is szerkeszteni a weboldalt?",
      a: "Igen. Igény esetén admin felületet / blog modult adunk, és átadjuk a szerkesztés alapjait.",
    },
    {
      q: "Vállaltok karbantartást és frissítést?",
      a: "Igen. Havi karbantartási csomagokkal biztosítjuk, hogy a reszponzív webdizájn mellett az oldal mobilbarát és gyors maradjon hosszú távon is.",
    },
    {
      q: "Készítetek AI chatbotot is?",
      a: "Igen. Weboldalba integrált, értékesítést segítő chatbotot implementálunk, ami a weboldal tartalma alapján informál, kérdez és ajánlatkérésig terel.",
    },
  ];

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
          "Egyedi weboldal és webshop fejlesztés: WordPress, WooCommerce, Shopify és modern egyedi stack. Technikai SEO, GEO optimalizálás és karbantartás.",
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
          "https://share.google/VUhJxAjhKRxQ02AzP",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://cyberlabsweb.com/#website",
        url: "https://cyberlabsweb.com/",
        name: "CyberLabs Web",
        description:
          "Céges weboldal és webshop készítés, SEO és GEO optimalizálás magyar KKV-knak",
        publisher: { "@id": "https://cyberlabsweb.com/#organization" },
        inLanguage: "hu-HU",
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://cyberlabsweb.com/#business",
        name: "CyberLabs Web",
        alternateName: "CyberLabs Web Digital Studio",
        description:
          "Egyedi weboldal és webshop fejlesztés WordPress, WooCommerce, Shopify és modern egyedi stack alapon. Technikai SEO + GEO, hogy Google-ben és AI-találatokban is megtaláljanak.",
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
          "Egyedi weboldal készítés vállalkozásnak",
          "Webshop készítés",
          "Webshop készítés utánvéttel",
          "WordPress weboldal készítés",
          "WordPress webshop javítás",
          "WordPress sebesség optimalizálás",
          "WooCommerce webáruház fejlesztés",
          "Shopify webáruház készítés",
          "Shopify fejlesztő Budapest",
          "Shopify egyedi téma fejlesztés",
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
          "https://share.google/VUhJxAjhKRxQ02AzP",
        ],
      },
      {
        "@type": "Service",
        "@id": "https://cyberlabsweb.com/#service-custom",
        name: "Egyedi weboldal készítés vállalkozásnak",
        provider: { "@id": "https://cyberlabsweb.com/#business" },
        description:
          "Egyedi weboldal készítés vállalkozásnak: reszponzív webdizájn, mobilbarát és villámgyors weboldalak fejlesztése React, Next.js és TypeScript alapon.",
        image: "https://cyberlabsweb.com/og/cyberlabs-main-og.png",
        serviceType: "Egyedi weboldal készítés vállalkozásnak",
      },
      {
        "@type": "Service",
        "@id": "https://cyberlabsweb.com/#service-wordpress",
        name: "WordPress weboldal készítés",
        provider: { "@id": "https://cyberlabsweb.com/#business" },
        description:
          "WordPress alapú céges weboldalak fejlesztése, WordPress webshop javítás, WordPress sebesség optimalizálás és WooCommerce webáruházak építése saját tárhelyen.",
        serviceType: "WordPress weboldal készítés",
      },
      {
        "@type": "Service",
        "@id": "https://cyberlabsweb.com/#service-woocommerce",
        name: "WooCommerce webáruház fejlesztés",
        provider: { "@id": "https://cyberlabsweb.com/#business" },
        description:
          "WooCommerce webshop készítés utánvéttel, Barion és SimplePay integrációval. Egyedi sablonnal, magyar szállítási megoldásokkal (GLS, Foxpost, DPD).",
        serviceType: "Webshop készítés utánvéttel",
      },
      {
        "@type": "Service",
        "@id": "https://cyberlabsweb.com/#service-shopify",
        name: "Shopify fejlesztő Budapest",
        provider: { "@id": "https://cyberlabsweb.com/#business" },
        description:
          "Shopify fejlesztő Budapest: Shopify egyedi téma fejlesztés Liquid sablonokkal, üzleti logikára szabott integrációkkal és skálázható e-commerce architektúrával.",
        serviceType: "Shopify egyedi téma fejlesztés",
      },
      {
        "@type": "FAQPage",
        "@id": "https://cyberlabsweb.com/#faq",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
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
