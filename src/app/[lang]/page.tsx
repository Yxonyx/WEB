"use client";

import { Hero } from "@/components/sections/Hero";

import { QuoteSection } from "@/components/sections/QuoteSection";
import { Services } from "@/components/sections/Services";
import { GEO } from "@/components/sections/GEO";
import { Maintenance } from "@/components/sections/Maintenance";
import { ChatbotIntro } from "@/components/sections/ChatbotIntro";
import { Pricing } from "@/components/sections/Pricing";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Insights } from "@/components/sections/Insights";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />

      <QuoteSection />
      <Services />
      <GEO />
      <Maintenance />
      <ChatbotIntro />
      <Pricing />
      <Portfolio />
      <Process />
      <TechStack />
      <Testimonials />
      <FAQ />
      <Insights />
      <Contact />
      <Team />
    </>
  );
}
