import { Container } from '../Container';
import { motion, type Variants } from 'framer-motion';
import { Section } from '../Section';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';

const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 1, x: 0 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export const Process = () => {
    const { t } = useLanguage();

    const steps = (t('process.steps') as unknown as any[]).map((step, i) => ({
        ...step,
        highlight: i === 2,
    }));

    return (
        <Section id="folyamat" className="relative overflow-hidden" withOrbs withMeshGradient>
            <Container>
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                    {/* Left Column */}
                    <div className="lg:col-span-5">
                        <SectionHeader
                            number="04"
                            eyebrow="Munkafolyamat"
                            title={t('process.title') as string}
                            subtitle={t('process.desc') as string}
                        />

                        <Card className="mt-4">
                            <h3 className="text-base font-semibold mb-5 flex items-center gap-2 text-white/90">
                                <span className="w-1 h-5 bg-neonBlue rounded-full" />
                                {t('process.card.title')}
                            </h3>
                            <div className="space-y-5">
                                <ProgressRow
                                    label={t('process.card.landing') as string}
                                    time="5–7 munkanap"
                                    width="30%"
                                    gradient="from-neonBlue to-neonBlue/70"
                                    accent="text-neonBlue"
                                    delay={0.2}
                                />
                                <ProgressRow
                                    label={t('process.card.corporate') as string}
                                    time="7–14 munkanap"
                                    width="60%"
                                    gradient="from-neonBlue via-[#8FA6FF] to-neonPurple/70"
                                    accent="text-[#A8B6FF]"
                                    delay={0.4}
                                />
                                <ProgressRow
                                    label={t('process.card.webshop') as string}
                                    time="14–28 munkanap"
                                    width="90%"
                                    gradient="from-neonBlue via-[#A097FF] to-neonPurple"
                                    accent="text-neonPurple"
                                    delay={0.6}
                                />

                                <div className="pt-4 text-sm text-white/55 italic border-t border-white/[0.07] flex items-start gap-2">
                                    <div className="shrink-0 w-3.5 h-3.5 rounded-full bg-neonHarvest/20 flex items-center justify-center mt-0.5 text-[10px] font-semibold text-neonHarvest">
                                        !
                                    </div>
                                    {t('process.card.urgent')}
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Right Column: Steps Timeline */}
                    <div className="lg:col-span-7">
                        <motion.div
                            className="relative pl-12 sm:pl-10 space-y-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                            variants={containerVariants}
                        >
                            <div className="absolute left-[27px] sm:left-[9px] top-5 bottom-10 w-px bg-gradient-to-b from-neonBlue/60 via-[#8FA6FF]/40 to-neonPurple/30" />

                            {steps.map((step, i) => (
                                <motion.div key={i} variants={itemVariants} className="relative group">
                                    <div
                                        className={`absolute -left-[48px] sm:-left-[50px] w-9 h-9 rounded-full border-2 flex items-center justify-center z-10 transition-all duration-300 ${
                                            step.highlight
                                                ? 'bg-neonBlue text-white border-neonBlue shadow-[0_4px_16px_-4px_rgba(77,148,255,0.6)]'
                                                : 'bg-bgDeep border-white/15 text-white/70 group-hover:border-neonBlue/40 group-hover:text-neonBlue'
                                        }`}
                                    >
                                        <span className="font-mono font-semibold text-sm">{String(i + 1).padStart(2, '0')}</span>
                                    </div>

                                    <Card variant={step.highlight ? 'feature' : 'default'} className="!p-5">
                                        <h4
                                            className={`text-lg font-semibold mb-1.5 ${
                                                step.highlight ? 'text-white' : 'text-white/90'
                                            }`}
                                        >
                                            {step.title}
                                        </h4>
                                        <p className="text-[15px] text-white/65 leading-relaxed">{step.desc}</p>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

function ProgressRow({
    label,
    time,
    width,
    gradient,
    accent,
    delay,
}: {
    label: string;
    time: string;
    width: string;
    gradient: string;
    accent: string;
    delay: number;
}) {
    return (
        <div>
            <div className="flex justify-between mb-1.5">
                <span className="text-white/85 font-medium text-[15px]">{label}</span>
                <span className={`font-mono text-xs ${accent}`}>{time}</span>
            </div>
            <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                <motion.div
                    className={`h-full bg-gradient-to-r ${gradient} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut', delay }}
                />
            </div>
        </div>
    );
}
