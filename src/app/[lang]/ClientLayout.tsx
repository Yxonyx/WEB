"use client";

import { Suspense, lazy } from "react";

const Navbar = lazy(() =>
  import("@/components/sections/Navbar").then((m) => ({ default: m.Navbar }))
);
const Footer = lazy(() =>
  import("@/components/sections/Footer").then((m) => ({ default: m.Footer }))
);
const CookieBanner = lazy(() =>
  import("@/components/ui/CookieBanner").then((m) => ({
    default: m.CookieBanner,
  }))
);
const GeoNotification = lazy(() =>
  import("@/components/ui/GeoNotification").then((m) => ({
    default: m.GeoNotification,
  }))
);

const SectionLoader = () => <div className="w-full min-h-[60vh]"></div>;

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-bgDeep text-white selection:bg-neonBlue/30 noise-overlay relative">
      <Suspense fallback={null}>
        <CookieBanner />
      </Suspense>
      <Suspense fallback={null}>
        <GeoNotification />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Navbar />
      </Suspense>
      {children}
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
}
