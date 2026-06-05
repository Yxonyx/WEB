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
    const visualCardClass =
        'min-h-[300px] flex items-center justify-center relative overflow-hidden bg-[linear-gradient(145deg,rgba(4,10,20,0.94)_0%,rgba(5,42,86,0.90)_58%,rgba(7,90,168,0.72)_100%)] !border-white/[0.42] shadow-[0_26px_74px_-30px_rgba(0,20,58,0.82),inset_0_1px_0_rgba(255,255,255,0.36),inset_0_0_38px_rgba(83,189,255,0.10)] hover:!border-white/75';

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
                            <div className="w-11 h-11 rounded-2xl bg-white/[0.18] border border-white/35 flex items-center justify-center mb-5 text-[#FFF2C6] shadow-[0_10px_26px_rgba(0,74,153,0.16)]">
                                <Laptop size={22} />
                            </div>
                            <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-bold mb-3 font-hero bg-none leading-tight text-white">
                                {t('services.webdev.title')}
                            </h3>
                            <div className="text-[#FFF2C6] font-mono text-xs mb-5 tracking-wide uppercase">
                                {t('services.webdev.tagline')}
                            </div>
                            <p
                                className="text-white/90 text-base lg:text-[17px] mb-7 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: t('services.webdev.desc') as string }}
                            />

                            <h4 className="mb-3 text-xs font-mono font-semibold text-white/80 uppercase tracking-[0.18em]">
                                {t('services.webdev.benefits_title')}
                            </h4>
                            <ul className="space-y-2.5">
                                {(t('services.webdev.benefits') as unknown as string[]).map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/80 text-[15px]">
                                        <CheckCircle2 className="w-4 h-4 text-[#FFF2C6] shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Card className={visualCardClass}>
                                <span className="pointer-events-none absolute left-6 top-6 h-9 w-9 border-l border-t border-white/45" />
                                <span className="pointer-events-none absolute right-6 top-6 h-9 w-9 border-r border-t border-white/45" />
                                <span className="pointer-events-none absolute bottom-6 left-6 h-9 w-9 border-b border-l border-white/35" />
                                <span className="pointer-events-none absolute bottom-6 right-6 h-9 w-9 border-b border-r border-white/35" />
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
                            <Card className={visualCardClass}>
                                <span className="pointer-events-none absolute left-6 top-6 h-9 w-9 border-l border-t border-white/45" />
                                <span className="pointer-events-none absolute right-6 top-6 h-9 w-9 border-r border-t border-white/45" />
                                <span className="pointer-events-none absolute bottom-6 left-6 h-9 w-9 border-b border-l border-white/35" />
                                <span className="pointer-events-none absolute bottom-6 right-6 h-9 w-9 border-b border-r border-white/35" />
                                <div className="flex flex-col gap-5 w-full max-w-sm relative z-10">
                                    {(t('services.seo.flow') as unknown as Array<{ id: string | number; title: string; sub: string }>).map((step, i) => (
                                        <div key={i}>
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${
                                                        i === 2
                                                            ? 'bg-[#FFD66A] text-[#06437D] shadow-[0_4px_16px_-4px_rgba(255,203,85,0.6)]'
                                                            : 'bg-[#063F84]/[0.82] border border-white/30 text-white/95'
                                                    }`}
                                                >
                                                    {step.id}
                                                </div>
                                                <div
                                                    className={`flex-1 p-3 rounded-xl border text-[15px] ${
                                                        i === 2
                                                            ? 'bg-[#FFD66A]/[0.24] border-white/45 text-white'
                                                            : 'bg-[#031326]/[0.72] border-white/[0.26] text-white/95'
                                                    }`}
                                                >
                                                    {step.title}
                                                    <span className="text-[#FFF2C6] text-xs block mt-0.5">
                                                        {step.sub}
                                                    </span>
                                                </div>
                                            </div>
                                            {i < 2 && <div className="h-5 w-px bg-white/30 ml-[18px] mt-3 mb-0" />}
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>

                        <motion.div variants={itemVariants} className="order-1 lg:order-2">
                            <div className="w-11 h-11 rounded-2xl bg-white/[0.18] border border-white/35 flex items-center justify-center mb-5 text-[#FFF2C6] shadow-[0_10px_26px_rgba(0,74,153,0.16)]">
                                <BarChart3 size={22} />
                            </div>
                            <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-bold mb-5 font-hero bg-none leading-tight text-white">
                                {t('services.seo.title')}
                            </h3>
                            <p
                                className="text-white/90 text-base lg:text-[17px] mb-7 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: t('services.seo.desc') as string }}
                            />

                            <h4 className="mb-3 text-xs font-mono font-semibold text-white/80 uppercase tracking-[0.18em]">
                                {t('services.seo.benefits_title')}
                            </h4>
                            <p className="text-white/90 leading-relaxed text-[15px]">{t('services.seo.why')}</p>
                        </motion.div>
                    </motion.article>
                </div>
            </Container>
        </Section>
    );
};
