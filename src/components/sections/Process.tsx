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

    const steps = (t('process.steps') as unknown as Array<{ title: string; desc: string }>).map((step, i) => ({
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
                                <span className="w-1 h-5 bg-[#FFD66A] rounded-full" />
                                {t('process.card.title')}
                            </h3>
                            <div className="space-y-5">
                                <ProgressRow
                                    label={t('process.card.landing') as string}
                                    time="5–7 munkanap"
                                    width="30%"
                                    gradient="from-white to-[#FFD66A]/80"
                                    accent="text-[#FFF2C6]"
                                    delay={0.2}
                                />
                                <ProgressRow
                                    label={t('process.card.corporate') as string}
                                    time="7–14 munkanap"
                                    width="60%"
                                    gradient="from-white via-[#FFF2C6] to-[#FFD66A]/70"
                                    accent="text-[#FFF2C6]"
                                    delay={0.4}
                                />
                                <ProgressRow
                                    label={t('process.card.webshop') as string}
                                    time="14–28 munkanap"
                                    width="90%"
                                    gradient="from-white via-[#FFF2C6] to-[#FFD66A]"
                                    accent="text-[#FFF2C6]"
                                    delay={0.6}
                                />

                                <div className="pt-4 text-sm text-white/55 italic border-t border-white/[0.07] flex items-start gap-2">
                                    <div className="shrink-0 w-3.5 h-3.5 rounded-full bg-[#FFD66A]/25 flex items-center justify-center mt-0.5 text-[10px] font-semibold text-[#FFF2C6]">
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
                            <div className="absolute left-[27px] sm:left-[9px] top-5 bottom-10 w-px bg-gradient-to-b from-white/70 via-[#FFF2C6]/50 to-white/20" />

                            {steps.map((step, i) => (
                                <motion.div key={i} variants={itemVariants} className="relative group">
                                    <div
                                        className={`absolute -left-[48px] sm:-left-[50px] w-9 h-9 rounded-full border-2 flex items-center justify-center z-10 transition-all duration-300 ${
                                            step.highlight
                                                ? 'bg-[#FFD66A] text-[#06437D] border-white/70 shadow-[0_4px_16px_-4px_rgba(255,203,85,0.6)]'
                                                : 'bg-white/15 border-white/30 text-white/75 group-hover:border-white/60 group-hover:text-white'
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
            <div className="h-1 bg-white/[0.18] rounded-full overflow-hidden">
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
