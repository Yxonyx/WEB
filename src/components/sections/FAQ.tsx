import { useState } from 'react';
import { Container } from '../Container';
import { Section } from '../Section';
import { Plus, Minus, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../context/LanguageContext';

const FAQItem = ({ q, a, defaultOpen = false }: { q: string, a: string, defaultOpen?: boolean }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border-b border-white/10 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-4 flex items-center justify-between text-left group select-none"
                aria-expanded={isOpen}
            >
                {/* Kontraszt javítása: text-white/80 helyett tiszta text-white */}
                <span className={`text-lg transition-colors ${isOpen ? 'text-white font-bold' : 'text-white font-medium group-hover:text-neonBlue'}`}>
                    {q}
                </span>
                <span className="shrink-0 ml-4 text-muted2 group-hover:text-white transition-colors">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
            </button>

            {/* Közvetlen renderelés animáció nélkül a maximális sebességért */}
            {isOpen && (
                <div className="pb-4 text-gray-200 leading-relaxed font-light text-base md:text-lg">
                    {a}
                </div>
            )}
        </div>
    );
};

export const FAQ = () => {
    const { t } = useLanguage();

    const rawQuestions = (t('faq.questions') as unknown as any[]);

    const questions = rawQuestions.map((q, i) => ({
        ...q,
        defaultOpen: i === 0
    }));

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": rawQuestions.map((q: any) => ({
            "@type": "Question",
            "name": q.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": q.a
            }
        }))
    };

    return (
        // Háttér cseréje section-bg-mixed-re a Testimonials mintájára (User kérés)
        <Section id="gyik" className="section-bg-mixed z-10 relative overflow-hidden">
            {/* Background decoration - Same as Testimonials */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-neonBlue/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neonPurple/10 rounded-full blur-[80px] pointer-events-none" />

            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>
            <Container>
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* FAQ List */}
                    <motion.div
                        className="lg:col-span-7 lg:order-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <h2 className="text-3xl font-bold font-display text-white mb-8">{t('faq.title')}</h2>
                        {/* Designer update: Átlátszóbb üveg, hogy a szekció színe átüssön (User kérés) */}
                        <div className="bg-overlay/40 backdrop-blur-md rounded-2xl border border-white/10 p-6 sm:p-8 shadow-2xl">
                            {questions.map((faq, i) => (
                                <FAQItem key={i} {...faq} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Premium Guarantee Card - Statikusabb verzió */}
                    <div className="lg:col-span-5 lg:order-1">
                        <div className="lg:sticky lg:top-32">
                            <div className="relative group">
                                {/* Háttér glow - Statikus */}
                                <div className="absolute -inset-[1px] bg-gradient-to-br from-neonBlue/30 to-transparent rounded-2xl opacity-20 blur-sm" />

                                <div className="relative overflow-hidden rounded-2xl bg-[#0a0b14]/95 backdrop-blur-xl border border-white/10 p-6 md:p-8 shadow-2xl">

                                    {/* Ambient Light */}
                                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-neonBlue/5 to-transparent pointer-events-none" />

                                    {/* Ikon - Kompakt és statikus */}
                                    <div className="flex justify-center mb-6 relative z-10">
                                        <div className="relative w-16 h-16 flex items-center justify-center bg-neonBlue/10 rounded-2xl border border-neonBlue/20 shadow-[0_0_15px_rgba(79,138,255,0.08)]">
                                            <ShieldCheck className="w-8 h-8 text-neonBlue" strokeWidth={2} />
                                        </div>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-extrabold text-center mb-3 text-white font-display tracking-tight uppercase relative z-10">
                                        {t('faq.guarantee.title')}
                                    </h3>

                                    {/* Díszítő vonal a jobb elválasztásért */}
                                    <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-neonBlue/50 to-transparent mx-auto mb-5 relative z-10"></div>

                                    <p className="text-center text-gray-300 text-base md:text-lg mb-6 leading-relaxed relative z-10 px-2">
                                        {t('faq.guarantee.desc')}
                                    </p>

                                    <div className="relative z-10">
                                        <Button
                                            href="#kapcsolat"
                                            variant="primary"
                                            className="w-full py-3.5 text-base font-bold tracking-wide shadow-lg shadow-neonBlue/20 hover:shadow-neonBlue/40 transition-shadow"
                                        >
                                            {t('faq.guarantee.cta')}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};
