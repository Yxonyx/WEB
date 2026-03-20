"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { GeoNotification } from "@/components/ui/GeoNotification";
import { MotionProvider } from "@/components/MotionProvider";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MotionProvider>
      <div className="min-h-screen bg-bgDeep text-white selection:bg-neonBlue/30 noise-overlay relative">
        <CookieBanner />
        <GeoNotification />
        <Navbar />
        {children}
        <Footer />
      </div>
    </MotionProvider>
  );
}

