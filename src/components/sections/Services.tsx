import { Container } from '../Container';
import { Section } from '../Section';
import { Laptop, BarChart3, CheckCircle2 } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';
import { WebDevGraphic } from '../ui/WebDevGraphic';
import { useLanguage } from '../../context/LanguageContext';

const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export const Services = () => {
    const { t } = useLanguage();

    return (
        <Section id="szolgaltatasok" className="relative z-20" withMeshGradient withOrbs disableOrbAnimation>
            <Container>
                <SectionHeader
                    number="01"
                    eyebrow={t('services.title') as string}
                    title={t('services.subtitle') as string}
                    align="center"
                    className="mb-10 sm:mb-14"
                />

                <div className="space-y-10 sm:space-y-14 lg:space-y-20">
                    {/* Service 1: Egyedi weboldal */}
                    <motion.article
                        className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants}>
                            <div className="w-11 h-11 rounded-2xl bg-neonBlue/10 border border-neonBlue/20 flex items-center justify-center mb-5 text-neonBlue">
                                <Laptop size={22} />
                            </div>
                            <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-semibold mb-3 font-display leading-tight">
                                {t('services.webdev.title')}
                            </h3>
                            <div className="text-neonBlue/80 font-mono text-xs mb-5 tracking-wide uppercase">
                                {t('services.webdev.tagline')}
                            </div>
                            <p
                                className="text-white/70 text-base lg:text-[17px] mb-7 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: t('services.webdev.desc') as string }}
                            />

                            <h4 className="mb-3 text-xs font-mono font-semibold text-white/55 uppercase tracking-[0.18em]">
                                {t('services.webdev.benefits_title')}
                            </h4>
                            <ul className="space-y-2.5">
                                {(t('services.webdev.benefits') as unknown as string[]).map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/80 text-[15px]">
                                        <CheckCircle2 className="w-4 h-4 text-neonBlue shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Card className="min-h-[280px] flex items-center justify-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-neonBlue/8 rounded-full blur-3xl pointer-events-none" />
                                <div className="w-full relative z-10 flex items-center justify-center">
                                    <WebDevGraphic />
                                </div>
                            </Card>
                        </motion.div>
                    </motion.article>

                    {/* Service 2: SEO */}
                    <motion.article
                        className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants} className="order-2 lg:order-1">
                            <Card className="min-h-[280px] flex items-center justify-center relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-64 h-64 bg-neonPurple/8 rounded-full blur-3xl pointer-events-none" />
                                <div className="flex flex-col gap-5 w-full max-w-sm relative z-10">
                                    {(t('services.seo.flow') as unknown as any[]).map((step, i) => (
                                        <div key={i}>
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${
                                                        i === 2
                                                            ? 'bg-neonBlue text-white shadow-[0_4px_16px_-4px_rgba(77,148,255,0.6)]'
                                                            : 'bg-white/5 border border-white/10 text-white/80'
                                                    }`}
                                                >
                                                    {step.id}
                                                </div>
                                                <div
                                                    className={`flex-1 p-3 rounded-xl border text-[15px] ${
                                                        i === 2
                                                            ? 'bg-neonBlue/10 border-neonBlue/25 text-white'
                                                            : 'bg-white/[0.03] border-white/8 text-white/85'
                                                    }`}
                                                >
                                                    {step.title}
                                                    <span className="text-neonBlue/70 text-xs block mt-0.5">
                                                        {step.sub}
                                                    </span>
                                                </div>
                                            </div>
                                            {i < 2 && <div className="h-5 w-px bg-white/10 ml-[18px] mt-3 mb-0" />}
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>

                        <motion.div variants={itemVariants} className="order-1 lg:order-2">
                            <div className="w-11 h-11 rounded-2xl bg-neonPurple/10 border border-neonPurple/20 flex items-center justify-center mb-5 text-neonPurple">
                                <BarChart3 size={22} />
                            </div>
                            <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-semibold mb-5 font-display leading-tight">
                                {t('services.seo.title')}
                            </h3>
                            <p
                                className="text-white/70 text-base lg:text-[17px] mb-7 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: t('services.seo.desc') as string }}
                            />

                            <h4 className="mb-3 text-xs font-mono font-semibold text-white/55 uppercase tracking-[0.18em]">
                                {t('services.seo.benefits_title')}
                            </h4>
                            <p className="text-white/70 leading-relaxed text-[15px]">{t('services.seo.why')}</p>
                        </motion.div>
                    </motion.article>
                </div>
            </Container>
        </Section>
    );
};
