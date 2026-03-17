"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { GeoNotification } from "@/components/ui/GeoNotification";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-bgDeep text-white selection:bg-neonBlue/30 noise-overlay relative">
      <CookieBanner />
      <GeoNotification />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

