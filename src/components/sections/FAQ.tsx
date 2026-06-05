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
                className="group flex w-full items-start justify-between gap-3 py-3 text-left select-none sm:items-center sm:gap-4 sm:py-4"
                aria-expanded={isOpen}
            >
                <span
                    className={`min-w-0 flex-1 text-[14px] leading-snug transition-colors sm:text-base sm:leading-normal ${
                        isOpen ? 'font-bold text-white' : 'font-semibold text-white/90 group-hover:text-white'
                    }`}
                >
                    {q}
                </span>
                <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all ${
                        isOpen
                            ? 'border border-white/40 bg-[#FFD66A]/25 text-[#FFF2C6]'
                            : 'border border-white/25 bg-white/[0.14] text-white/70 group-hover:border-white/50'
                    }`}
                >
                    {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                </span>
            </button>

            {isOpen && (
                <div className="pb-3 text-[13px] font-medium leading-snug text-white/82 sm:pb-4 sm:text-[15px] sm:leading-relaxed">
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
                <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-12">
                    <div className="-mx-4 px-4 lg:order-2 lg:col-span-7 lg:mx-0 lg:px-0">
                        <SectionHeader
                            number="08"
                            eyebrow="Gyakori kérdések"
                            title={t('faq.title') as string}
                            className="mb-4 sm:mb-8"
                        />
                        <Card className="!p-3 sm:!p-7 lg:!p-8">
                            {questions.map((faq, i) => (
                                <FAQItem key={i} {...faq} />
                            ))}
                        </Card>
                    </div>

                    {/* Guarantee Card */}
                    <div className="-mx-4 px-4 lg:order-1 lg:col-span-5 lg:mx-0 lg:px-0">
                        <div className="lg:sticky lg:top-32">
                            <Card variant="feature" className="!p-4 sm:!p-7 lg:!p-8">
                                <div className="mb-4 flex items-start gap-3 sm:mb-5 sm:flex-col sm:items-center sm:text-center">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/45 bg-[#FFD66A]/25 text-[#FFF2C6] shadow-[0_0_24px_-8px_rgba(255,203,85,0.5)] sm:h-14 sm:w-14 sm:rounded-2xl">
                                        <ShieldCheck className="h-5 w-5 sm:h-7 sm:w-7" />
                                    </div>

                                    <div className="min-w-0 flex-1 sm:flex-none">
                                        <h3 className="font-display text-lg font-semibold leading-tight tracking-tight sm:text-2xl">
                                            {t('faq.guarantee.title')}
                                        </h3>
                                        <div className="mt-2 hidden h-px w-12 bg-gradient-to-r from-transparent via-white/60 to-transparent sm:mx-auto sm:block" />
                                    </div>
                                </div>

                                <p className="mb-5 text-[14px] leading-snug text-white/82 sm:mb-6 sm:text-center sm:text-[15px] sm:leading-relaxed">
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
