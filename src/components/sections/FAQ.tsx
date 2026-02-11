import { useState } from 'react';
import { Container } from '../Container';
import { Section } from '../Section';
import { Button } from '../ui/Button';
import { Plus, Minus, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../context/LanguageContext';

const FAQItem = ({ q, a, defaultOpen = false, index }: { q: string, a: string, defaultOpen?: boolean, index: number }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <motion.div
            className="border-b border-white/10 last:border-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-4 flex items-center justify-between text-left group"
                aria-expanded={isOpen}
            >
                <span className="text-lg font-medium text-white group-hover:text-neonBlue transition-colors">{q}</span>
                <motion.span
                    className="shrink-0 ml-4 text-muted2"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </motion.span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-4 text-muted leading-relaxed">
                            {a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
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
        <Section id="gyik" className="section-bg-purple" withOrbs withMeshGradient>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>
            <Container>
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* FAQ List - First on mobile, right on desktop */}
                    <motion.div
                        className="lg:col-span-7 lg:order-2"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-8">{t('faq.title')}</h2>
                        <div className="bg-surface/30 rounded-2xl border border-white/5 p-6 sm:p-8">
                            {questions.map((faq, i) => (
                                <FAQItem key={i} {...faq} index={i} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Premium Guarantee Card */}
                    <motion.div
                        className="lg:col-span-5 lg:order-1"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="lg:sticky lg:top-32">
                            {/* Outer glow */}
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-neonBlue/20 via-neonPurple/20 to-neonBlue/20 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

                                {/* Card */}
                                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-surface2 via-[#0a0b12] to-surface border border-white/10 p-8 shadow-2xl">

                                    {/* Corner decorations */}
                                    <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-neonBlue/40" />
                                    <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-neonBlue/40" />
                                    <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-neonBlue/40" />
                                    <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-neonBlue/40" />

                                    {/* Icon with glow */}
                                    <div className="flex justify-center mb-6">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-neonBlue/30 blur-2xl rounded-full scale-150" />
                                            <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-neonBlue/20 to-neonPurple/20 border border-white/10 flex items-center justify-center">
                                                <ShieldCheck className="w-10 h-10 text-neonBlue" strokeWidth={1.5} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 text-white font-display">
                                        {t('faq.guarantee.title')}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-center text-muted text-lg mb-8 leading-relaxed">
                                        {t('faq.guarantee.desc')}
                                    </p>

                                    {/* CTA Button */}
                                    <Button
                                        href="#kapcsolat"
                                        variant="primary"
                                        className="w-full"
                                    >
                                        {t('faq.guarantee.cta')}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
};


