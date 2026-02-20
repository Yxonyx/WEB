import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { nichePages } from '../../data/nichePages';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { Container } from '../Container';
import {
    Shield, Search, Clock, Lock, Scissors, Calendar, MapPin, Star,
    Hammer, FileText, TrendingUp, Award, Heart, BookOpen, Wrench,
    Phone, Home, Users, Smartphone, Sparkles, Camera, Gift, Zap,
    Pill, AlertCircle, Ruler, Calculator, BarChart3, Target, Layers,
    ShoppingCart, CreditCard, Truck, ShoppingBag, Video, Cake,
    ChevronDown
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { ProIcon } from '../icons/ProIcon';
// Dumbbell & PawPrint aren't in all lucide versions, use fallback
const Dumbbell = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M17.5 4.5 15 7m-6 6-2.5 2.5M14 17l1.5 1.5M7 10 5.5 8.5M17 7l2-2m-2 2h-4l-6 6h4l6-6ZM5 17l2 2" />
    </svg>
);
const PawPrint = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="11" cy="4" r="2" /><circle cx="18" cy="8" r="2" /><circle cx="4" cy="8" r="2" />
        <path d="M8.65 14.4c.81-1.42 2.34-2.4 4.1-2.4 1.76 0 3.29.98 4.1 2.4.63 1.1.3 2.6-.8 3.2a4.68 4.68 0 0 1-6.6 0c-1.1-.6-1.43-2.1-.8-3.2Z" />
    </svg>
);
const Bed = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" />
    </svg>
);
const Globe = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
    </svg>
);
const UtensilsCrossed = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" /><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c1.7 1.7 4.3 1.7 6 0" /><path d="m2 22 10-10" />
    </svg>
);

const iconMap: Record<string, LucideIcon | React.FC> = {
    Shield, Search, Clock, Lock, Scissors, Calendar, MapPin, Star,
    Hammer, FileText, TrendingUp, Award, Heart, BookOpen, Wrench,
    Phone, Home, Users, Smartphone, Sparkles, Camera, Gift, Zap,
    Pill, AlertCircle, Ruler, Calculator, BarChart3, Target, Layers,
    ShoppingCart, CreditCard, Truck, ShoppingBag, Video, Cake,
    ChevronDown, Dumbbell, PawPrint, Bed, Globe, UtensilsCrossed,
};

export const NicheLanding = () => {
    const { nicheSlug } = useParams<{ nicheSlug: string }>();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const niche = nichePages.find(n => n.slug === nicheSlug);

    if (!niche) {
        return <Navigate to="/hu/" replace />;
    }

    const canonicalUrl = `https://cyberlabsweb.com/hu/weboldal-keszites/${niche.slug}`;

    const schemaJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": niche.title,
        "description": niche.metaDescription,
        "url": canonicalUrl,
        "provider": {
            "@type": "ProfessionalService",
            "name": "CyberLabs Web",
            "url": "https://cyberlabsweb.com",
            "telephone": "+36703304445",
            "email": "contact@cyberlabsweb.com",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "HU",
                "addressLocality": "Budapest"
            }
        },
        "areaServed": {
            "@type": "Country",
            "name": "Hungary"
        },
        "serviceType": `Weboldal készítés - ${niche.profession}`
    };

    const faqSchemaJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": niche.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <div className="min-h-screen bg-bgDeep text-white selection:bg-neonBlue/30 noise-overlay relative">
            <Helmet>
                <title>{niche.title}</title>
                <meta name="description" content={niche.metaDescription} />
                <link rel="canonical" href={canonicalUrl} />
                <html lang="hu" />
                <meta property="og:title" content={niche.title} />
                <meta property="og:description" content={niche.metaDescription} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="hu_HU" />
                <meta property="og:site_name" content="CyberLabs Web" />
                <meta property="og:image" content="https://cyberlabsweb.com/og/cyberlabs-main-og.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={niche.title} />
                <meta name="twitter:description" content={niche.metaDescription} />
                <script type="application/ld+json">{JSON.stringify(schemaJsonLd)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchemaJsonLd)}</script>
            </Helmet>

            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neonBlue/5 rounded-full blur-[120px] pointer-events-none" />

                <Container className="relative z-10 text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neonBlue/20 bg-neonBlue/5 mb-8">
                        <div className="w-1.5 h-1.5 rounded-full bg-neonBlue animate-pulse" />
                        <span className="text-xs font-mono text-neonBlue tracking-wider uppercase">
                            Weboldal készítés {niche.profession.toLowerCase()}
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6 max-w-4xl mx-auto">
                        Weboldal Készítés{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-[#a855f7]">
                            {niche.profession}
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
                        {niche.heroSubtitle}
                    </p>

                    <a
                        href="/#contact"
                        className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neonBlue to-[#a855f7] rounded-lg font-semibold text-white text-lg hover:shadow-[0_0_30px_rgba(79,138,255,0.3)] transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Ingyenes Konzultáció
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                </Container>
            </section>

            {/* Benefits Section */}
            <section className="py-20 md:py-28 relative">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-4">
                            Miért van szükséged <span className="text-neonBlue">professzionális weboldalra</span>?
                        </h2>
                        <p className="text-muted max-w-xl mx-auto">
                            4 kulcs előny, ami megkülönböztet a versenytársaidtól
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {niche.benefits.map((benefit, i) => {
                            const IconComponent = iconMap[benefit.icon] || Shield;
                            return (
                                <div
                                    key={i}
                                    className="group relative p-6 rounded-xl border border-white/5 bg-surface2/30 backdrop-blur-sm hover:border-neonBlue/30 hover:bg-neonBlue/5 transition-all duration-500"
                                >
                                    {/* Corner accents */}
                                    <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-transparent group-hover:border-neonBlue/50 transition-colors duration-500 rounded-tl-xl" />
                                    <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-transparent group-hover:border-neonBlue/50 transition-colors duration-500 rounded-br-xl" />

                                    <div className="flex items-start gap-4">
                                        <ProIcon icon={IconComponent} color="neonBlue" size={48} />
                                        <div>
                                            <h3 className="font-bold text-lg mb-2 group-hover:text-neonBlue transition-colors">{benefit.title}</h3>
                                            <p className="text-muted text-sm leading-relaxed">{benefit.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </section>

            {/* CTA Mid Section */}
            <section className="py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-neonBlue/5 via-transparent to-[#a855f7]/5" />
                <Container className="relative z-10 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold font-display mb-4">
                        Készen állsz az <span className="text-neonBlue">online sikerre</span>?
                    </h2>
                    <p className="text-muted max-w-lg mx-auto mb-8">
                        Kérj ingyenes konzultációt, és 48 órán belül személyre szabott ajánlatot küldünk.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="/#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neonBlue to-[#a855f7] rounded-lg font-semibold text-white hover:shadow-[0_0_30px_rgba(79,138,255,0.3)] transition-all duration-300 hover:-translate-y-0.5"
                        >
                            Ajánlatot Kérek
                        </a>
                        <a
                            href="tel:+36703304445"
                            className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 rounded-lg font-semibold text-white hover:border-neonBlue/50 hover:bg-neonBlue/5 transition-all duration-300"
                        >
                            <Phone className="w-4 h-4" />
                            +36 70 330 4445
                        </a>
                    </div>
                </Container>
            </section>

            {/* FAQ Section */}
            <section className="py-20 md:py-28">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-4">
                            Gyakran Ismételt <span className="text-neonBlue">Kérdések</span>
                        </h2>
                    </div>

                    <div className="max-w-2xl mx-auto space-y-3">
                        {niche.faqs.map((faq, i) => (
                            <div
                                key={i}
                                className="border border-white/5 rounded-xl overflow-hidden bg-surface2/20 hover:border-white/10 transition-colors"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                                >
                                    <span className="font-semibold text-sm sm:text-base">{faq.question}</span>
                                    <ChevronDown className={`w-5 h-5 flex-shrink-0 text-muted transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                                    <p className="px-5 text-muted text-sm leading-relaxed">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-neonBlue/5 to-transparent" />
                <Container className="relative z-10 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-4">
                        Kezdjünk bele!
                    </h2>
                    <p className="text-muted max-w-lg mx-auto mb-8">
                        Az első lépés egy ingyenes, kötelezettségmentes konzultáció. Beszéljük meg az igényeidet!
                    </p>
                    <a
                        href="/#contact"
                        className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-neonBlue to-[#a855f7] rounded-lg font-bold text-lg text-white hover:shadow-[0_0_40px_rgba(79,138,255,0.4)] transition-all duration-300 hover:-translate-y-1"
                    >
                        Ingyenes Konzultáció
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                </Container>
            </section>

            <Footer />
        </div>
    );
};
