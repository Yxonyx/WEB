import { Container } from '../Container';
import { Section } from '../Section';
import { Laptop, BarChart3, CheckCircle2 } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { BracketFrame } from '../ui/BracketFrame';
import { WebDevGraphic } from '../ui/WebDevGraphic';
import { useLanguage } from '../../context/LanguageContext';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

export const Services = () => {
    const { t } = useLanguage();

    return (
        <Section id="szolgaltatasok" className="section-bg-cyan py-16 lg:py-24 pt-8 relative z-20" withMeshGradient withOrbs disableOrbAnimation>

            <Container>
                {/* Header */}
                <motion.div
                    className="flex flex-col items-center max-w-3xl mx-auto mb-12 lg:mb-20"
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    {/* Tagline */}
                    <span className="text-neonBlue font-mono text-sm tracking-widest uppercase mb-4 block">
                        Hogyan segítünk cégednek?
                    </span>

                    {/* "Szolgáltatások" Heading with Underline */}
                    <div className="relative inline-block mb-6 text-center">
                        <h2 className="text-4xl sm:text-6xl font-bold font-display text-white relative z-10">{t('services.title')}</h2>
                    </div>

                    <p className="text-xl text-center text-white/80 font-medium">
                        {t('services.subtitle')}
                    </p>
                </motion.div>

                <div className="space-y-16 lg:space-y-24">
                    {/* Service 1: Egyedi weboldal (Text Left, Visual Right) */}
                    <motion.article
                        className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        {/* Content */}
                        <motion.div variants={itemVariants}>
                            <div className="w-12 h-12 rounded-xl bg-neonBlue/10 flex items-center justify-center mb-6 text-neonBlue">
                                <Laptop size={24} />
                            </div>
                            <h3 className="text-2xl sm:text-4xl font-bold text-white mb-4 font-display">{t('services.webdev.title')}</h3>
                            <div className="text-neonBlue font-mono text-sm mb-6 tracking-wide">{t('services.webdev.tagline')}</div>
                            <p className="text-white/80 text-lg mb-8 leading-relaxed font-medium">
                                {t('services.webdev.desc')}
                            </p>

                            <h4 className="mb-4 text-base font-bold text-white uppercase tracking-wider">{t('services.webdev.benefits_title')}</h4>
                            <ul className="space-y-3">
                                {(t('services.webdev.benefits') as unknown as string[]).map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/80">
                                        <CheckCircle2 className="w-4 h-4 text-neonBlue shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Visual */}
                        <motion.div variants={itemVariants} className="relative flex items-center justify-center min-h-[400px]">
                            <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-neonBlue/10 rounded-full blur-[100px] pointer-events-none" />
                            {/* Abstract Isometric Graphic */}
                            <div className="w-full max-w-[650px] aspect-[4/3] relative z-10 flex items-center justify-center">
                                <WebDevGraphic />
                            </div>
                        </motion.div>
                    </motion.article>

                    {/* Service 2: Keresőbarát beállítások (Text Right, Visual Left) */}
                    <motion.article
                        className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        {/* Visual */}
                        <motion.div variants={itemVariants} className="order-2 lg:order-1 relative">
                            <BracketFrame className="bg-surface/30 p-8 min-h-[300px] flex items-center justify-center">
                                <div className="absolute top-0 left-0 p-32 bg-neonPurple/5 rounded-full blur-3xl pointer-events-none" />

                                {/* Flow Visual */}
                                <div className="flex flex-col gap-6 w-full max-w-sm relative z-10">
                                    {(t('services.seo.flow') as unknown as any[]).map((step, i) => (
                                        <div key={i}>
                                            <div className="flex items-center gap-4">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${i === 2 ? 'bg-neonPurple text-black' : 'bg-surface2 border border-white/10 text-white'}`}>
                                                    {step.id}
                                                </div>
                                                <div className={`flex-1 p-3 rounded-lg border text-base ${i === 2 ? 'bg-neonPurple/10 border-neonPurple/20 text-white' : 'bg-surface2 border-white/5'}`}>
                                                    {step.title} <span className="text-neonPurple text-sm block">{step.sub}</span>
                                                </div>
                                            </div>
                                            {i < 2 && <div className="h-6 w-0.5 bg-white/10 ml-5 mt-6 mb-0" />}
                                        </div>
                                    ))}
                                </div>
                            </BracketFrame>
                        </motion.div>

                        {/* Content */}
                        <motion.div variants={itemVariants} className="order-1 lg:order-2">
                            <div className="w-12 h-12 rounded-xl bg-neonPurple/10 flex items-center justify-center mb-6 text-neonPurple">
                                <BarChart3 size={24} />
                            </div>
                            <h3 className="text-2xl sm:text-4xl font-bold text-white mb-6 font-display">{t('services.seo.title')}</h3>
                            <p className="text-muted text-lg mb-8 leading-relaxed">
                                {t('services.seo.desc')}
                            </p>

                            <h4 className="mb-4 text-base font-bold text-white uppercase tracking-wider">{t('services.seo.benefits_title')}</h4>
                            <p className="text-muted leading-relaxed">
                                {t('services.seo.why')}
                            </p>
                        </motion.div>
                    </motion.article>
                </div>
            </Container>
        </Section>
    );
};


