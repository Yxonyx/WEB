import { useLocation, Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { QuoteSection } from './components/sections/QuoteSection';
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

const NotFound = lazy(() => import('./components/pages/NotFound').then(module => ({ default: module.NotFound })));
const WealthHero = lazy(() => import('./components/experiments/WealthHero').then(module => ({ default: module.WealthHero })));

import { BlogPost } from './components/pages/BlogPost';
import { AllArticles } from './components/pages/AllArticles';
import { GeoLanding } from './components/pages/GeoLanding';
import { GeoThankYou } from './components/pages/GeoThankYou';
import { GeoPDF } from './components/pages/GeoPDF';

import { CookieBanner } from './components/ui/CookieBanner';
import { GeoNotification } from './components/ui/GeoNotification';
import { Helmet } from 'react-helmet-async';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

// Loading fallback component — tall enough to prevent layout shift
const SectionLoader = () => <div className="w-full min-h-[60vh]"></div>;

const MainContent = () => {
  const { t, language } = useLanguage();
  const location = useLocation();

  const currentLang = language || 'hu';
  const metaTitle = ((t('meta.title') as string) || "CyberLabs Web");
  const metaDesc = ((t('meta.description') as string) || "Custom websites.");

  // Construct current URL for canonical/og:url
  // Ensure we handle the base URL correctly - in production it should be the full domain
  const baseUrl = 'https://cyberlabsweb.com';
  const currentPath = location.pathname === '/' ? `/${currentLang}/` : location.pathname;
  const currentUrl = `${baseUrl}${currentPath}`;

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
        <meta property="og:image" content="https://cyberlabsweb.com/og/cyberlabs-main-og.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDesc} />
        <meta name="twitter:image" content="https://cyberlabsweb.com/og/cyberlabs-main-og.png" />

        {/* Hreflang alternates */}
        <link rel="alternate" hrefLang="hu" href="https://cyberlabsweb.com/hu/" />
        <link rel="alternate" hrefLang="en" href="https://cyberlabsweb.com/en/" />
        <link rel="alternate" hrefLang="x-default" href="https://cyberlabsweb.com/hu/" />
      </Helmet>


      <CookieBanner />
      <GeoNotification />
      <Navbar />
      <Hero />
      <Stats />

      <QuoteSection />
      <Suspense fallback={<SectionLoader />}><Services /></Suspense>
      <Suspense fallback={<SectionLoader />}><GEO /></Suspense>
      <Suspense fallback={<SectionLoader />}><Maintenance /></Suspense>
      <Suspense fallback={<SectionLoader />}><ChatbotIntro /></Suspense>
      <Suspense fallback={<SectionLoader />}><Pricing /></Suspense>
      <Suspense fallback={<SectionLoader />}><Portfolio /></Suspense>
      <Suspense fallback={<SectionLoader />}><Process /></Suspense>
      <Suspense fallback={<SectionLoader />}><Testimonials /></Suspense>
      <Suspense fallback={<SectionLoader />}><FAQ /></Suspense>
      <Suspense fallback={<SectionLoader />}><Insights /></Suspense>
      <Suspense fallback={<SectionLoader />}><Contact /></Suspense>
      <Suspense fallback={<SectionLoader />}><Team /></Suspense>
      <Suspense fallback={<SectionLoader />}><Footer /></Suspense>
    </div>
  );
};

function App() {
  return (
    <Routes>
      {/* GEO Campaign Routes - Prioritized */}
      <Route path="/geo-tudasanyag" element={<GeoLanding />} />
      <Route path="/geo-tudasanyag/koszonjuk" element={<GeoThankYou />} />
      <Route path="/geo-tudasanyag/pdf" element={<GeoPDF />} />

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
      <Route path="/wealth-demo" element={
        <Suspense fallback={<SectionLoader />}>
          <WealthHero />
        </Suspense>
      } />



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
