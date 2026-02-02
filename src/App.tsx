import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { Services } from './components/sections/Services';
import { Maintenance } from './components/sections/Maintenance';
import { ChatbotIntro } from './components/sections/ChatbotIntro';
import { Pricing } from './components/sections/Pricing';
import { GEO } from './components/sections/GEO';
import { Portfolio } from './components/sections/Portfolio';
import { Process } from './components/sections/Process';
import { FAQ } from './components/sections/FAQ';
import { Insights } from './components/sections/Insights';
import { Team } from './components/sections/Team';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

import { QuoteSection } from './components/sections/QuoteSection';

import { ParticleNetwork } from './components/ui/ParticleNetwork';
import { CookieBanner } from './components/ui/CookieBanner';

function App() {
  return (
    <div className="min-h-screen bg-bgDeep text-white selection:bg-neonBlue/30 noise-overlay relative">
      <ParticleNetwork />
      <CookieBanner />
      <Navbar />
      <Hero />
      <Stats />
      <QuoteSection />
      <Services />
      <GEO />
      <Maintenance />
      <ChatbotIntro />
      <Pricing />
      <Portfolio />
      <Process />
      <FAQ />
      <Insights />
      <Contact />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
