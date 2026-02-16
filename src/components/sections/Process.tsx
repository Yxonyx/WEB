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
    hidden: { opacity: 0, x: 0 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

// Per-step color tints: blue → blended → purple progression
const stepTints = [
    // Step 1: Blue tint
    {
        bg: 'bg-gradient-to-br from-[#0F1730]/90 via-[#111B35]/80 to-[#0D1428]/85',
        borderL: 'border-l-neonBlue/60',
        borderRest: 'border-neonBlue/15',
        hoverBorder: 'hover:border-neonBlue/30 hover:border-l-neonBlue',
        shadow: 'hover:shadow-[0_0_20px_rgba(79,138,255,0.08)]',
        nodeDefault: 'bg-surface border-neonBlue/40 text-neonBlue group-hover:bg-neonBlue group-hover:text-black group-hover:border-neonBlue group-hover:shadow-[0_0_15px_rgba(79,138,255,0.3)]',
    },
    // Step 2: Blue-Purple blend
    {
        bg: 'bg-gradient-to-br from-[#12183A]/90 via-[#151D40]/80 to-[#10152E]/85',
        borderL: 'border-l-accent1/60',
        borderRest: 'border-accent1/15',
        hoverBorder: 'hover:border-accent1/30 hover:border-l-neonPurple',
        shadow: 'hover:shadow-[0_0_20px_rgba(123,128,184,0.08)]',
        nodeDefault: 'bg-surface border-accent1/40 text-accent1 group-hover:bg-accent1 group-hover:text-black group-hover:border-accent1 group-hover:shadow-[0_0_15px_rgba(123,128,184,0.3)]',
    },
    // Step 3: Purple tint (highlight)
    {
        bg: 'bg-gradient-to-br from-[#16143A]/90 via-[#1A1840]/80 to-[#12102E]/85',
        borderL: 'border-l-neonPurple/60',
        borderRest: 'border-neonPurple/20',
        hoverBorder: 'hover:border-neonPurple/30 hover:border-l-neonPurple',
        shadow: 'hover:shadow-[0_0_20px_rgba(155,114,255,0.08)]',
        nodeDefault: 'bg-surface border-neonPurple/40 text-neonPurple group-hover:bg-neonPurple group-hover:text-black group-hover:border-neonPurple group-hover:shadow-[0_0_15px_rgba(155,114,255,0.3)]',
    },
    // Step 4+: cycle back  
    {
        bg: 'bg-gradient-to-br from-[#0F1730]/90 via-[#131A38]/80 to-[#0E1530]/85',
        borderL: 'border-l-neonBlue/50',
        borderRest: 'border-white/10',
        hoverBorder: 'hover:border-neonBlue/30 hover:border-l-neonBlue',
        shadow: 'hover:shadow-[0_0_20px_rgba(79,138,255,0.06)]',
        nodeDefault: 'bg-surface border-neonBlue/40 text-neonBlue group-hover:bg-neonBlue group-hover:text-black group-hover:border-neonBlue group-hover:shadow-[0_0_15px_rgba(79,138,255,0.3)]',
    },
];

export const Process = () => {
    const { t } = useLanguage();

    const steps = (t('process.steps') as unknown as any[]).map((step, i) => ({
        ...step,
        highlight: i === 2
    }));

    return (
        <Section id="folyamat" className="section-bg-mixed bg-surface3/20 relative overflow-hidden" withOrbs withMeshGradient>
            {/* Background decoration - desktop only for performance */}
            <div className="hidden lg:block absolute top-0 right-0 w-[500px] h-[500px] bg-neonBlue/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="hidden lg:block absolute bottom-0 left-0 w-[400px] h-[400px] bg-neonPurple/5 rounded-full blur-[80px] pointer-events-none" />

            <Container>
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                    {/* Left Column: Info & Stats */}
                    <div className="lg:col-span-5">
                        <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">{t('process.title').split(' ').slice(0, -1).join(' ')} <span className="text-transparent bg-clip-text bg-accent-gradient">{t('process.title').split(' ').slice(-1)}</span></h2>
                        <p className="text-base text-white font-semibold mb-8 leading-relaxed">
                            {t('process.desc')}
                        </p>

                        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0E1428]/90 via-[#111830]/85 to-[#0C1225]/90 border border-neonBlue/20 shadow-2xl backdrop-blur-sm">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-accent-gradient rounded-full"></span>
                                {t('process.card.title')}
                            </h3>
                            <div className="space-y-4 text-base text-white/80">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-white font-medium">{t('process.card.landing')}</span>
                                        <span className="text-neonBlue font-mono">5–7 munkanap</span>
                                    </div>
                                    <div className="h-1.5 bg-surface/60 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-neonBlue to-neonBlue/70 rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "30%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-white font-medium">{t('process.card.corporate')}</span>
                                        <span className="text-accent1 font-mono">7–14 munkanap</span>
                                    </div>
                                    <div className="h-1.5 bg-surface/60 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-neonBlue to-neonPurple/70 rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "60%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-white font-medium">{t('process.card.webshop')}</span>
                                        <span className="text-neonPurple font-mono">14–28 munkanap</span>
                                    </div>
                                    <div className="h-1.5 bg-surface/60 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-neonBlue via-accent1 to-neonPurple rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "90%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                                        />
                                    </div>
                                </div>
                                <div className="pt-3 text-sm text-muted2 italic border-t border-white/5 flex items-start gap-2">
                                    <div className="shrink-0 w-3.5 h-3.5 rounded-full bg-highlight/20 flex items-center justify-center mt-0.5 text-[10px] font-bold text-highlight">!</div>
                                    {t('process.card.urgent')}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Steps Timeline */}
                    <div className="lg:col-span-7">
                        <motion.div
                            className="relative pl-8 sm:pl-10 space-y-12"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={containerVariants}
                        >
                            {/* Connecting Line - gradient through all 3 step colors */}
                            {/* Mobile: 14px aligns with pl-8 offset. Desktop: 9px aligns with pl-10 offset */}
                            <div className="absolute left-[14px] sm:left-[9px] top-5 bottom-28 w-[2px] bg-gradient-to-b from-neonBlue via-accent1 via-60% to-neonPurple/50" />

                            {steps.map((step, i) => {
                                const tint = stepTints[Math.min(i, stepTints.length - 1)];
                                return (
                                    <motion.div
                                        key={i}
                                        variants={itemVariants}
                                        className="relative group"
                                    >
                                        {/* Number Node */}
                                        <div className={`absolute -left-[38px] sm:-left-[50px] w-10 h-10 rounded-full border-[3px] flex items-center justify-center z-10 transition-all duration-300 ${step.highlight
                                            ? 'bg-neonPurple text-white border-neonPurple shadow-[0_0_20px_rgba(155,114,255,0.5)]'
                                            : tint.nodeDefault
                                            }`}>
                                            <span className="font-mono font-bold text-base">{i + 1}</span>
                                        </div>

                                        {/* Content Card - each step has a unique color tint */}
                                        <div className={`p-5 rounded-xl border-l-[3px] border transition-all duration-300 ${step.highlight
                                            ? `${tint.bg} border-l-neonPurple border-neonPurple/25 shadow-[0_0_25px_rgba(155,114,255,0.1)]`
                                            : `${tint.bg} ${tint.borderL} ${tint.borderRest} ${tint.hoverBorder} ${tint.shadow} hover:bg-black/80`
                                            }`}>
                                            <h4 className={`text-lg font-bold mb-1 ${step.highlight ? 'text-neonPurple' : 'text-white'}`}>
                                                {step.title}
                                            </h4>
                                            <p className="text-base text-muted leading-relaxed">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};


