"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { MotionProvider } from "@/components/MotionProvider";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MotionProvider>
      <div className="min-h-screen bg-[#2DA8EA] text-white selection:bg-white/30 selection:text-[#06437D] noise-overlay relative">
        <CookieBanner />
        <Navbar />
        {children}
        <Footer />
      </div>
    </MotionProvider>
  );
}
