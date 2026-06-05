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
      <div className="min-h-screen bg-[#0E7CDC] text-white selection:bg-white/30 selection:text-[#06437D] noise-overlay relative overflow-x-clip">
        <CookieBanner />
        <Navbar />
        {children}
        <Footer />
      </div>
    </MotionProvider>
  );
}
