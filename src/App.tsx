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
const BlogPost = lazy(() => import('./components/pages/BlogPost').then(module => ({ default: module.BlogPost })));
const AllArticles = lazy(() => import('./components/pages/AllArticles').then(module => ({ default: module.AllArticles })));
const NotFound = lazy(() => import('./components/pages/NotFound').then(module => ({ default: module.NotFound })));
import { WealthHero } from './components/experiments/WealthHero';

import { CookieBanner } from './components/ui/CookieBanner';
import { ParticleNetwork } from './components/ui/ParticleNetwork';
import { Helmet } from 'react-helmet-async';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

// Loading fallback component
const SectionLoader = () => <div className="w-full h-[10vh] animate-pulse bg-transparent"></div>;

const MainContent = () => {
  const { t, language } = useLanguage();
  const currentLang = language || 'hu';
  const metaTitle = ((t('meta.title') as string) || "CyberLabs Web");
  const metaDesc = ((t('meta.description') as string) || "Custom websites.");
  const currentUrl = `https://cyberlabsweb.hu/${currentLang}/`;

  return (
    <div className="min-h-screen bg-bgDeep text-white selection:bg-neonBlue/30 noise-overlay relative">
      <Helmet>
        {/* Basic SEO */}
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={currentUrl} />
        <html lang={currentLang} />

        {/* Open Graph */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:locale" content={currentLang === 'hu' ? 'hu_HU' : 'en_US'} />
        <meta property="og:site_name" content="CyberLabs Web" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cyberlabsweb.hu/og/cyberlabs-og.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDesc} />
        <meta name="twitter:image" content="https://cyberlabsweb.hu/og/cyberlabs-og.png" />

        {/* Hreflang alternates */}
        <link rel="alternate" hrefLang="hu" href="https://cyberlabsweb.hu/hu/" />
        <link rel="alternate" hrefLang="en" href="https://cyberlabsweb.hu/en/" />
        <link rel="alternate" hrefLang="x-default" href="https://cyberlabsweb.hu/hu/" />
      </Helmet>

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
      {/* Blog Routes */}
      <Route path="/:lang/blog/all" element={
        <LanguageProvider>
          <Suspense fallback={<SectionLoader />}>
            <AllArticles />
          </Suspense>
        </LanguageProvider>
      } />

      {/* Specific Blog Post - Must come AFTER /blog/all if using vague matching, but explicit path above handles it */}
      <Route path="/:lang/blog/:id" element={
        <LanguageProvider>
          <Suspense fallback={<SectionLoader />}>
            <BlogPost />
          </Suspense>
        </LanguageProvider>
      } />

      {/* Redirect root to /hu/ */}
      <Route path="/" element={<Navigate to="/hu/" replace />} />

      {/* Language routes - Catch all */}
      <Route path="/wealth-demo" element={<WealthHero />} />

      <Route path="/:lang/*" element={
        <LanguageProvider>
          <MainContent />
        </LanguageProvider>
      } />

      {/* 404 Catch-all */}
      <Route path="*" element={
        <LanguageProvider>
          <Suspense fallback={<SectionLoader />}>
            <NotFound />
          </Suspense>
        </LanguageProvider>
      } />
    </Routes>
  );
}

export default App;
