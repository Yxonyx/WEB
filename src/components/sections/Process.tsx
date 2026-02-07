import { Container } from '../Container';
import { motion, type Variants } from 'framer-motion';
import { Section } from '../Section';
import { useLanguage } from '../../context/LanguageContext';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

export const Process = () => {
    const { t } = useLanguage();

    // Fallback/Structure for steps is handled via translation mapping
    // We assume the translation returns an array of objects
    const steps = (t('process.steps') as unknown as any[]).map((step, i) => ({
        ...step,
        highlight: i === 2 // Keep the highlight logic (3rd item, index 2)
    }));

    return (
        <Section id="folyamat" className="section-bg-mixed bg-surface3 relative overflow-hidden">
            {/* Background decoration - desktop only for performance */}
            <div className="hidden lg:block absolute top-0 right-0 w-[500px] h-[500px] bg-neonBlue/5 rounded-full blur-[80px] pointer-events-none" />

            <Container>
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                    {/* Left Column: Info & Stats */}
                    <motion.div
                        className="lg:col-span-5"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{t('process.title')}</h2>
                        <p className="text-base text-white font-semibold mb-8 leading-relaxed">
                            {t('process.desc')}
                        </p>

                        <div className="p-6 rounded-2xl bg-black/60 border border-neonBlue/20 shadow-2xl">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-neonBlue rounded-full"></span>
                                {t('process.card.title')}
                            </h3>
                            <div className="space-y-4 text-base text-white/80">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-white font-medium">{t('process.card.landing')}</span>
                                        <span className="text-neonBlue font-mono">5–7 munkanap</span>
                                    </div>
                                    <div className="h-1 bg-surface rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-neonBlue"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "30%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-white font-medium">{t('process.card.corporate')}</span>
                                        <span className="text-neonBlue font-mono">7–14 munkanap</span>
                                    </div>
                                    <div className="h-1 bg-surface rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-neonBlue"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "60%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-white font-medium">{t('process.card.webshop')}</span>
                                        <span className="text-neonBlue font-mono">14–28 munkanap</span>
                                    </div>
                                    <div className="h-1 bg-surface rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-neonBlue"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "90%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                                        />
                                    </div>
                                </div>
                                <div className="pt-3 text-sm text-muted2 italic border-t border-white/5 flex items-start gap-2">
                                    <div className="shrink-0 w-3.5 h-3.5 rounded-full bg-highlight/20 flex items-center justify-center mt-0.5 text-[10px] font-bold text-highlight">!</div>
                                    {t('process.card.urgent')}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Steps Timeline */}
                    <div className="lg:col-span-7">
                        <motion.div
                            className="relative pl-8 sm:pl-10 space-y-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={containerVariants}
                        >
                            {/* Connecting Line */}
                            <div className="absolute left-[14px] top-5 bottom-28 w-[1px] bg-gradient-to-b from-neonBlue/50 via-white/10 to-transparent" />

                            {steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    className="relative group"
                                >
                                    {/* Number Node */}
                                    <div className={`absolute -left-[38px] sm:-left-[50px] w-10 h-10 rounded-full border-[3px] border-surface2 flex items-center justify-center z-10 transition-colors duration-300 ${step.highlight ? 'bg-highlight text-bg shadow-[0_0_15px_rgba(255,107,107,0.4)]' : 'bg-surface text-neonBlue group-hover:bg-neonBlue group-hover:text-bg'}`}>
                                        <span className="font-mono font-bold text-base">{i + 1}</span>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`p-5 rounded-xl border transition-all duration-300 ${step.highlight ? 'bg-highlight/5 border-highlight/20' : 'bg-surface/30 border-white/5 hover:border-white/10 hover:bg-surface/50'}`}>
                                        <h4 className={`text-lg font-bold mb-1 ${step.highlight ? 'text-highlight' : 'text-white'}`}>
                                            {step.title}
                                        </h4>
                                        <p className="text-base text-muted leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};


