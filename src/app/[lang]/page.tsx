"use client";

import { Suspense, lazy } from "react";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { QuoteSection } from "@/components/sections/QuoteSection";

// Lazy load below-the-fold components
const Services = lazy(() =>
  import("@/components/sections/Services").then((m) => ({
    default: m.Services,
  }))
);
const Maintenance = lazy(() =>
  import("@/components/sections/Maintenance").then((m) => ({
    default: m.Maintenance,
  }))
);
const ChatbotIntro = lazy(() =>
  import("@/components/sections/ChatbotIntro").then((m) => ({
    default: m.ChatbotIntro,
  }))
);
const Pricing = lazy(() =>
  import("@/components/sections/Pricing").then((m) => ({
    default: m.Pricing,
  }))
);
const GEO = lazy(() =>
  import("@/components/sections/GEO").then((m) => ({ default: m.GEO }))
);
const Portfolio = lazy(() =>
  import("@/components/sections/Portfolio").then((m) => ({
    default: m.Portfolio,
  }))
);
const Process = lazy(() =>
  import("@/components/sections/Process").then((m) => ({
    default: m.Process,
  }))
);
const Testimonials = lazy(() =>
  import("@/components/sections/Testimonials").then((m) => ({
    default: m.Testimonials,
  }))
);
const FAQ = lazy(() =>
  import("@/components/sections/FAQ").then((m) => ({ default: m.FAQ }))
);
const Insights = lazy(() =>
  import("@/components/sections/Insights").then((m) => ({
    default: m.Insights,
  }))
);
const Team = lazy(() =>
  import("@/components/sections/Team").then((m) => ({ default: m.Team }))
);
const Contact = lazy(() =>
  import("@/components/sections/Contact").then((m) => ({
    default: m.Contact,
  }))
);

const SectionLoader = () => <div className="w-full min-h-[60vh]"></div>;

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <QuoteSection />
      <Suspense fallback={<SectionLoader />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <GEO />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Maintenance />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ChatbotIntro />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Pricing />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Process />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Insights />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Team />
      </Suspense>
    </>
  );
}
