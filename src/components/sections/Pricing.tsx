import { Container } from '../Container';
import { Section } from '../Section';
import { BracketFrame } from '../ui/BracketFrame';
import { Button } from '../ui/Button';
import { Check } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05,
        }
    }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export const Pricing = () => {
    const { t } = useLanguage();

    return (
        <Section id="arazas" className="section-bg-mixed" withMeshGradient withOrbs>
            <Container>
                <motion.div
                    className="text-center max-w-2xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-4">{t('pricing.title')}</h2>
                    <p className="text-white/80 text-lg font-medium">
                        {t('pricing.subtitle')}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* Plan 1 - Landing (Bracket Frame) */}
                    <div>
                        <BracketFrame className="h-full p-6 sm:p-8 flex flex-col hover:border-neonPurple/50 transition-colors duration-300">
                            <div className="mb-6">
                                <span className="inline-block py-1 px-2 mb-2 rounded bg-white/10 text-sm font-bold text-white uppercase tracking-wider">
                                    {t('pricing.landing.tag')}
                                </span>
                                <h3 className="text-xl font-bold text-white">{t('pricing.landing.title')}</h3>
                                <div className="mt-4 flex items-baseline gap-1">
                                    <span className="text-2xl font-bold text-neonBlue">{t('pricing.landing.price')}</span>
                                    <span className="text-base text-muted">-tól</span>
                                </div>
                            </div>
                            <ul className="space-y-3 mb-8">
                                {(t('pricing.landing.features') as unknown as string[]).map((feat, i) => (
                                    <li key={i} className="flex items-center gap-3 text-base text-white/80">
                                        <Check className="w-4 h-4 text-neonBlue shrink-0" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto">
                                <Button href="#kapcsolat" variant="secondary" className="w-full">
                                    {t('pricing.landing.cta')}
                                </Button>
                            </div>
                        </BracketFrame>
                    </div>

                    {/* Plan 2 - Corporate (Signature Panel) */}
                    <div className="lg:col-span-1 lg:-mt-8">
                        <div className="relative rounded-3xl overflow-hidden group/card bg-gradient-to-br from-surface/90 via-surface/70 to-surface/80 border border-white/10 shadow-[0_0_60px_-20px_rgba(0,240,255,0.25),0_0_40px_-15px_rgba(189,0,255,0.2)] hover:shadow-[0_0_80px_-15px_rgba(0,240,255,0.35),0_0_60px_-10px_rgba(189,0,255,0.3)] transition-all duration-500">
                            {/* Animated gradient border glow */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-neonBlue via-neonPurple to-neonBlue opacity-[0.15] blur-sm" />

                            {/* Inner glow effect */}
                            <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-bg/95 via-surface/95 to-bg/90" />

                            {/* Subtle background glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-neonBlue/5 via-transparent to-neonPurple/5 opacity-50 group-hover/card:opacity-80 transition-opacity duration-700" />

                            {/* Corner accent glow */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-neonPurple/20 rounded-full blur-[80px] pointer-events-none" />
                            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-neonBlue/15 rounded-full blur-[60px] pointer-events-none" />

                            <div className="relative z-10 p-8 sm:p-10">
                                {/* Badge */}
                                <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-neonBlue/20 to-neonPurple/20 border border-neonPurple/40 backdrop-blur-sm">
                                    <span className="w-2 h-2 rounded-full bg-neonPurple animate-pulse" />
                                    <span className="text-xs font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">
                                        {t('pricing.corporate.tag')}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3">{t('pricing.corporate.title')}</h3>
                                <div className="flex items-baseline gap-2 mb-8">
                                    <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neonBlue via-white to-neonPurple animate-gradient-shift" style={{ backgroundSize: '200% auto' }}>
                                        {t('pricing.corporate.price')}
                                    </span>
                                </div>

                                <ul className="space-y-4 mb-10">
                                    {(t('pricing.corporate.features') as unknown as string[]).map((feat, i) => (
                                        <li key={i} className="flex items-start gap-3 text-white group/item">
                                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-neonBlue/30 to-neonPurple/20 border border-neonBlue/40 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:border-neonBlue/60 transition-colors duration-300">
                                                <Check className="w-3.5 h-3.5 text-neonBlue" />
                                            </div>
                                            <span className="text-base text-white/90 group-hover/item:text-white transition-colors duration-300">{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button href="#kapcsolat" variant="primary" className="w-full shadow-lg shadow-neonBlue/20">
                                    {t('pricing.corporate.cta')}
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Plan 3 - Webshop (Bracket Frame) */}
                    <div>
                        <BracketFrame className="h-full p-6 sm:p-8 flex flex-col hover:border-neonBlue/50 transition-colors duration-300">
                            <div className="mb-6">
                                <span className="inline-block py-1 px-2 mb-2 rounded bg-white/10 text-sm font-bold text-white uppercase tracking-wider">
                                    {t('pricing.webshop.tag')}
                                </span>
                                <h3 className="text-xl font-bold text-white">{t('pricing.webshop.title')}</h3>
                                <div className="mt-4 flex items-baseline gap-1">
                                    <span className="text-2xl font-bold text-neonBlue">{t('pricing.webshop.price')}</span>
                                    <span className="text-base text-muted">-tól</span>
                                </div>
                            </div>

                            {/* "Pills" for highlighted features as requested */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-2 py-1 rounded bg-neonBlue/10 text-neonBlue text-sm font-medium">{t('pricing.webshop.pills.payment')}</span>
                                <span className="px-2 py-1 rounded bg-neonBlue/10 text-neonBlue text-sm font-medium">{t('pricing.webshop.pills.shipping')}</span>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {(t('pricing.webshop.features') as unknown as string[]).map((feat, i) => (
                                    <li key={i} className="flex items-center gap-3 text-base text-muted">
                                        <Check className="w-4 h-4 text-neonBlue shrink-0" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto">
                                <Button href="#kapcsolat" variant="secondary" className="w-full">
                                    {t('pricing.webshop.cta')}
                                </Button>
                            </div>
                        </BracketFrame>
                    </div>
                </div>

                {/* --- AI CHATBOT PRICING --- */}
                <motion.div
                    className="mt-20 lg:mt-32"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.div variants={cardVariants} className="text-center max-w-2xl mx-auto mb-12">
                        <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">{t('pricing.chatbot.title')}</h3>
                        <p className="text-muted">{t('pricing.chatbot.subtitle')}</p>
                    </motion.div>

                    <motion.div
                        className="grid lg:grid-cols-3 gap-6"
                        variants={containerVariants}
                    >
                        {(t('pricing.chatbot.plans') as unknown as any[]).map((plan, i) => (
                            <motion.div
                                key={i}
                                variants={cardVariants}
                                className={`p-6 rounded-3xl border ${i === 1 ? 'bg-surface/80 border-neonBlue/30 shadow-lg shadow-neonBlue/10 relative overflow-hidden' : 'bg-surface/20 backdrop-blur-md border-white/5'} flex flex-col`}
                            >
                                {i === 1 && (
                                    <div className="absolute top-0 right-0 bg-neonBlue text-black text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">
                                        {t('pricing.chatbot.tag_recommended')}
                                    </div>
                                )}
                                <div className="mb-4">
                                    <h4 className="text-xl font-bold text-white">{plan.name}</h4>
                                </div>
                                <div className="mb-6">
                                    <div className="text-2xl font-bold text-white">{plan.price}</div>
                                    {/* Csak akkor írjuk ki a "-tól"-t, ha nem "Egyedi árazás" (User kérés) */}
                                    {!plan.price.toLowerCase().includes('egyedi') && !plan.price.toLowerCase().includes('custom') && (
                                        <div className="text-base text-muted">-tól</div>
                                    )}
                                </div>
                                <ul className="space-y-3 mb-6 flex-1">
                                    {plan.features.map((feat: string, fi: number) => (
                                        <li key={fi} className="flex items-start gap-2 text-base text-muted">
                                            <Check className="w-4 h-4 text-neonBlue mt-0.5 shrink-0" />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button href="#kapcsolat" variant={i === 1 ? 'primary' : 'secondary'} size="sm" className="w-full">
                                    {t('pricing.chatbot.cta')}
                                </Button>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.p variants={cardVariants} className="text-center text-sm text-muted2 mt-6 max-w-2xl mx-auto">
                        {t('pricing.chatbot.note')}
                    </motion.p>
                </motion.div>


                <motion.p
                    className="text-center text-muted2 text-base mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                >
                    {t('pricing.vat_note')}
                </motion.p>
            </Container>
        </Section>
    );
};


