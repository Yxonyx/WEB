"use client";

import { lazy, Suspense } from "react";
import { Hero } from "@/components/sections/Hero";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { LazySection } from "@/components/LazySection";

// Lazy load all below-the-fold sections
const Services = lazy(() => import("@/components/sections/Services").then(m => ({ default: m.Services })));
const GEO = lazy(() => import("@/components/sections/GEO").then(m => ({ default: m.GEO })));
const Maintenance = lazy(() => import("@/components/sections/Maintenance").then(m => ({ default: m.Maintenance })));
const ChatbotIntro = lazy(() => import("@/components/sections/ChatbotIntro").then(m => ({ default: m.ChatbotIntro })));
const Pricing = lazy(() => import("@/components/sections/Pricing").then(m => ({ default: m.Pricing })));
const Portfolio = lazy(() => import("@/components/sections/Portfolio").then(m => ({ default: m.Portfolio })));
const Process = lazy(() => import("@/components/sections/Process").then(m => ({ default: m.Process })));
const TechStack = lazy(() => import("@/components/sections/TechStack").then(m => ({ default: m.TechStack })));
const Testimonials = lazy(() => import("@/components/sections/Testimonials").then(m => ({ default: m.Testimonials })));
const FAQ = lazy(() => import("@/components/sections/FAQ").then(m => ({ default: m.FAQ })));
const Insights = lazy(() => import("@/components/sections/Insights").then(m => ({ default: m.Insights })));
const Contact = lazy(() => import("@/components/sections/Contact").then(m => ({ default: m.Contact })));
const Team = lazy(() => import("@/components/sections/Team").then(m => ({ default: m.Team })));

const SectionFallback = () => <div style={{ minHeight: '100vh' }} />;

export default function HomePage() {
  return (
    <>
      {/* Above the fold — eagerly loaded */}
      <Hero />
      <QuoteSection />

      {/* Below the fold — lazy loaded via IntersectionObserver */}
      <LazySection>
        <Suspense fallback={<SectionFallback />}>
          <Services />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionFallback />}>
          <GEO />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionFallback />}>
          <Maintenance />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionFallback />}>
          <ChatbotIntro />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionFallback />}>
          <Pricing />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionFallback />}>
          <Portfolio />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionFallback />}>
          <Process />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionFallback />}>
          <TechStack />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionFallback />}>
          <FAQ />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionFallback />}>
          <Insights />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionFallback />}>
          <Team />
        </Suspense>
      </LazySection>
    </>
  );
}
