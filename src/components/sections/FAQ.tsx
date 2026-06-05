import { useState } from 'react';
import { Container } from '../Container';
import { Section } from '../Section';
import { Plus, Minus, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';

const FAQItem = ({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border-b border-white/[0.07] last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-4 flex items-center justify-between text-left group select-none gap-4"
                aria-expanded={isOpen}
            >
                <span
                    className={`text-[15px] sm:text-base transition-colors ${
                        isOpen ? 'text-white font-semibold' : 'text-white/85 font-medium group-hover:text-white'
                    }`}
                >
                    {q}
                </span>
                <span
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                        isOpen
                            ? 'bg-[#FFD66A]/25 text-[#FFF2C6] border border-white/40'
                            : 'bg-white/[0.14] text-white/70 border border-white/25 group-hover:border-white/50'
                    }`}
                >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </span>
            </button>

            {isOpen && (
                <div className="pb-4 text-white/70 leading-relaxed text-[15px]">
                    {a}
                </div>
            )}
        </div>
    );
};

export const FAQ = () => {
    const { t } = useLanguage();

    const rawQuestions = t('faq.questions') as unknown as Array<{ q: string; a: string }>;
    const questions = rawQuestions.map((q, i) => ({ ...q, defaultOpen: i === 0 }));

    return (
        <Section id="gyik" className="z-10 relative overflow-hidden">
            <Container>
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    <div className="lg:col-span-7 lg:order-2">
                        <SectionHeader
                            number="08"
                            eyebrow="Gyakori kérdések"
                            title={t('faq.title') as string}
                            className="mb-6 sm:mb-8"
                        />
                        <Card>
                            {questions.map((faq, i) => (
                                <FAQItem key={i} {...faq} />
                            ))}
                        </Card>
                    </div>

                    {/* Guarantee Card */}
                    <div className="lg:col-span-5 lg:order-1">
                        <div className="lg:sticky lg:top-32">
                            <Card variant="feature" className="text-center">
                                <div className="flex justify-center mb-5">
                                    <div className="w-14 h-14 rounded-2xl bg-[#FFD66A]/25 border border-white/45 flex items-center justify-center text-[#FFF2C6] shadow-[0_0_24px_-8px_rgba(255,203,85,0.5)]">
                                        <ShieldCheck className="w-7 h-7" />
                                    </div>
                                </div>

                                <h3 className="text-xl sm:text-2xl font-semibold mb-3 font-display tracking-tight">
                                    {t('faq.guarantee.title')}
                                </h3>

                                <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-4" />

                                <p className="text-white/82 text-[15px] mb-6 leading-relaxed">
                                    {t('faq.guarantee.desc')}
                                </p>

                                <Button href="#kapcsolat" variant="primary" className="w-full">
                                    {t('faq.guarantee.cta')}
                                </Button>
                            </Card>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};
