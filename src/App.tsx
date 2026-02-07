import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { Suspense, lazy } from 'react';

// Lazy load below-the-fold components
const Services = lazy(() => import('./components/sections/Services').then(module => ({ default: module.Services })));
const Maintenance = lazy(() => import('./components/sections/Maintenance').then(module => ({ default: module.Maintenance })));
const ChatbotIntro = lazy(() => import('./components/sections/ChatbotIntro').then(module => ({ default: module.ChatbotIntro })));
const Pricing = lazy(() => import('./components/sections/Pricing').then(module => ({ default: module.Pricing })));
const GEO = lazy(() => import('./components/sections/GEO').then(module => ({ default: module.GEO })));
const Portfolio = lazy(() => import('./components/sections/Portfolio').then(module => ({ default: module.Portfolio })));
const Process = lazy(() => import('./components/sections/Process').then(module => ({ default: module.Process })));
const Testimonials = lazy(() => import('./components/sections/Testimonials').then(module => ({ default: module.Testimonials })));
const FAQ = lazy(() => import('./components/sections/FAQ').then(module => ({ default: module.FAQ })));
const Insights = lazy(() => import('./components/sections/Insights').then(module => ({ default: module.Insights })));
const Team = lazy(() => import('./components/sections/Team').then(module => ({ default: module.Team })));
const Contact = lazy(() => import('./components/sections/Contact').then(module => ({ default: module.Contact })));
const Footer = lazy(() => import('./components/sections/Footer').then(module => ({ default: module.Footer })));
const QuoteSection = lazy(() => import('./components/sections/QuoteSection').then(module => ({ default: module.QuoteSection })));

import { CookieBanner } from './components/ui/CookieBanner';
import { ParticleNetwork } from './components/ui/ParticleNetwork';
import { LanguageProvider } from './context/LanguageContext';

// Loading fallback component
const SectionLoader = () => <div className="w-full h-[50vh] flex items-center justify-center text-muted/30">Loading...</div>;

const MainContent = () => {
  return (
    <div className="min-h-screen bg-bgDeep text-white selection:bg-neonBlue/30 noise-overlay relative">
      <ParticleNetwork />
      <CookieBanner />
      <Navbar />
      <Hero />
      <Stats />

      <Suspense fallback={<SectionLoader />}>
        <QuoteSection />
        <Services />
        <GEO />
        <Maintenance />
        <ChatbotIntro />
        <Pricing />
        <Portfolio />
        <Process />
        <Testimonials />
        <FAQ />
        <Insights />
        <Contact />
        <Team />
        <Footer />
      </Suspense>
    </div>
  );
};

function App() {
  return (
    <Routes>
      {/* Redirect root to /hu/ */}
      <Route path="/" element={<Navigate to="/hu/" replace />} />

      {/* Language routes */}
      <Route path="/:lang/*" element={
        <LanguageProvider>
          <MainContent />
        </LanguageProvider>
      } />
    </Routes>
  );
}

export default App;
