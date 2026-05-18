import { Container } from '../Container';
import { Section } from '../Section';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { Check } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const cardVariants: Variants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

interface PlanProps {
    tag: string;
    title: string;
    price: string;
    features: string[];
    cta: string;
    featured?: boolean;
    pills?: string[];
}

const PlanCard = ({ tag, title, price, features, cta, featured, pills }: PlanProps) => (
    <Card variant={featured ? 'feature' : 'default'} className="h-full flex flex-col">
        <div className="mb-5">
            <span
                className={`inline-block py-1 px-2.5 mb-3 rounded-md text-[11px] font-mono font-semibold uppercase tracking-[0.15em] ${
                    featured
                        ? 'bg-neonBlue/20 text-neonBlue border border-neonBlue/30'
                        : 'bg-white/[0.06] text-white/70 border border-white/10'
                }`}
            >
                {tag}
            </span>
            <h3 className="text-xl font-semibold font-display">{title}</h3>
            <div className="mt-3 flex items-baseline gap-1.5">
                <span className={`text-2xl font-semibold ${featured ? 'text-white' : 'text-neonBlue/90'}`}>
                    {price}
                </span>
                <span className="text-sm text-white/50">-tól</span>
            </div>
        </div>

        {pills && pills.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-5">
                {pills.map((p, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-md bg-neonBlue/10 text-neonBlue/90 text-xs font-medium">
                        {p}
                    </span>
                ))}
            </div>
        )}

        <ul className="space-y-2.5 mb-7">
            {features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[15px] text-white/80">
                    <Check className="w-4 h-4 text-neonBlue shrink-0 mt-0.5" />
                    <span>{feat}</span>
                </li>
            ))}
        </ul>

        <div className="mt-auto">
            <Button href="#kapcsolat" variant={featured ? 'primary' : 'secondary'} className="w-full">
                {cta}
            </Button>
        </div>
    </Card>
);

export const Pricing = () => {
    const { t } = useLanguage();

    return (
        <Section id="arazas" withMeshGradient withOrbs>
            <Container>
                <SectionHeader
                    number="02"
                    eyebrow={t('pricing.subtitle') as string}
                    title={t('pricing.title') as string}
                    align="center"
                    className="mb-10 sm:mb-14"
                />

                <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
                    <PlanCard
                        tag={t('pricing.landing.tag') as string}
                        title={t('pricing.landing.title') as string}
                        price={t('pricing.landing.price') as string}
                        features={t('pricing.landing.features') as unknown as string[]}
                        cta={t('pricing.landing.cta') as string}
                    />

                    <PlanCard
                        tag={t('pricing.corporate.tag') as string}
                        title={t('pricing.corporate.title') as string}
                        price={t('pricing.corporate.price') as string}
                        features={t('pricing.corporate.features') as unknown as string[]}
                        cta={t('pricing.corporate.cta') as string}
                        featured
                    />

                    <PlanCard
                        tag={t('pricing.webshop.tag') as string}
                        title={t('pricing.webshop.title') as string}
                        price={t('pricing.webshop.price') as string}
                        features={t('pricing.webshop.features') as unknown as string[]}
                        cta={t('pricing.webshop.cta') as string}
                        pills={[
                            t('pricing.webshop.pills.payment') as string,
                            t('pricing.webshop.pills.shipping') as string,
                        ]}
                    />
                </div>

                {/* AI CHATBOT PRICING */}
                <motion.div
                    className="mt-16 lg:mt-24"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={containerVariants}
                >
                    <motion.div variants={cardVariants} className="text-center max-w-2xl mx-auto mb-10">
                        <h3 className="text-2xl sm:text-3xl font-semibold font-display mb-3">
                            {t('pricing.chatbot.title')}
                        </h3>
                        <p className="text-white/65">{t('pricing.chatbot.subtitle')}</p>
                    </motion.div>

                    <motion.div className="grid lg:grid-cols-3 gap-5" variants={containerVariants}>
                        {(t('pricing.chatbot.plans') as unknown as any[]).map((plan, i) => (
                            <motion.div key={i} variants={cardVariants}>
                                <Card variant={i === 1 ? 'feature' : 'default'} className="h-full flex flex-col">
                                    {i === 1 && (
                                        <div className="absolute top-4 right-4 bg-neonBlue text-white text-[10px] font-semibold px-2 py-1 rounded-md uppercase tracking-wider">
                                            {t('pricing.chatbot.tag_recommended')}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <h4 className="text-lg font-semibold">{plan.name}</h4>
                                    </div>
                                    <div className="mb-5">
                                        <div className="text-2xl font-semibold">{plan.price}</div>
                                        {!plan.price.toLowerCase().includes('egyedi') &&
                                            !plan.price.toLowerCase().includes('custom') && (
                                                <div className="text-sm text-white/50">-tól</div>
                                            )}
                                    </div>
                                    <ul className="space-y-2.5 mb-5 flex-1">
                                        {plan.features.map((feat: string, fi: number) => (
                                            <li
                                                key={fi}
                                                className="flex items-start gap-2.5 text-[15px] text-white/75"
                                            >
                                                <Check className="w-4 h-4 text-neonBlue mt-0.5 shrink-0" />
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        href="#kapcsolat"
                                        variant={i === 1 ? 'primary' : 'secondary'}
                                        size="sm"
                                        className="w-full"
                                    >
                                        {t('pricing.chatbot.cta')}
                                    </Button>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.p
                        variants={cardVariants}
                        className="text-center text-sm text-white/45 mt-5 max-w-2xl mx-auto"
                    >
                        {t('pricing.chatbot.note')}
                    </motion.p>
                </motion.div>

                <p className="text-center text-white/45 text-sm mt-10">{t('pricing.vat_note')}</p>
            </Container>
        </Section>
    );
};
