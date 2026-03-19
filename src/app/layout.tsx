import type { Metadata } from "next";
import Script from "next/script";
import "../index.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cyberlabsweb.com"),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  other: {
    "theme-color": "#050508",
    "color-scheme": "dark light",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7GNQRPBCFQ"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7GNQRPBCFQ');
          `}
        </Script>

        {/* Hero BG preload for faster LCP */}
        <link
          rel="preload"
          href="/images/hero-bg-v5.avif"
          as="image"
          type="image/avif"
        />

        {/* Fonts - non-render-blocking */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <Script
          id="google-fonts"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var link = document.createElement('link');
              link.rel = 'stylesheet';
              link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap';
              document.head.appendChild(link);
            `,
          }}
        />

      </head>
      <body className="bg-bg text-white font-sans antialiased selection:bg-neonBlue/20 selection:text-white text-base sm:text-lg leading-relaxed">
        {children}
      </body>
    </html>
  );
}
