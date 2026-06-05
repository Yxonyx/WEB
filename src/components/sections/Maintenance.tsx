import { Container } from '../Container';
import { Section } from '../Section';
import { ShieldCheck, Zap, RefreshCw, CheckCircle2, type LucideIcon } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
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

const DashboardRow = ({
    icon: Icon,
    title,
    sub,
    tag,
    accent,
}: {
    icon: LucideIcon;
    title: string;
    sub: string;
    tag?: string;
    accent: 'blue' | 'purple' | 'green' | 'yellow';
}) => {
    const accentMap = {
        blue: { bg: 'bg-white/18', text: 'text-[#FFF2C6]', border: 'border-white/25' },
        purple: { bg: 'bg-white/18', text: 'text-[#FFF2C6]', border: 'border-white/25' },
        green: { bg: 'bg-emerald-400/10', text: 'text-emerald-400', border: 'border-emerald-400/15' },
        yellow: { bg: 'bg-amber-400/10', text: 'text-amber-400', border: 'border-amber-400/15' },
    };
    const a = accentMap[accent];

    return (
        <div className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.14] border border-white/[0.24]">
            <div className="flex items-center gap-3 min-w-0">
                <div className={`w-8 h-8 rounded-lg ${a.bg} ${a.text} flex items-center justify-center shrink-0`}>
                    <Icon size={15} />
                </div>
                <div className="min-w-0">
                    <div className="font-semibold text-white text-[14px] truncate">{title}</div>
                    <div className="text-[11px] text-white/45 truncate">{sub}</div>
                </div>
            </div>
            {tag && (
                <span
                    className={`text-[11px] ${a.text} font-mono ${a.bg} px-2 py-0.5 rounded-md border ${a.border} shrink-0 ml-2`}
                >
                    {tag}
                </span>
            )}
        </div>
    );
};

export const Maintenance = () => {
    const { t } = useLanguage();

    return (
        <Section id="karbantartas" className="relative overflow-hidden">
            <Container>
                <motion.div
                    className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants} className="order-2 lg:order-1">
                        <Card>
                            <div className="space-y-2.5">
                                <DashboardRow
                                    icon={RefreshCw}
                                    title={t('maintenance_sec.dashboard.updates.title') as string}
                                    sub={t('maintenance_sec.dashboard.updates.sub') as string}
                                    tag={t('maintenance_sec.dashboard.updates.tag') as string}
                                    accent="blue"
                                />
                                <DashboardRow
                                    icon={ShieldCheck}
                                    title={t('maintenance_sec.dashboard.security.title') as string}
                                    sub={t('maintenance_sec.dashboard.security.sub') as string}
                                    tag={t('maintenance_sec.dashboard.security.tag') as string}
                                    accent="purple"
                                />
                                <DashboardRow
                                    icon={CheckCircle2}
                                    title={t('maintenance_sec.dashboard.backup.title') as string}
                                    sub={t('maintenance_sec.dashboard.backup.sub') as string}
                                    tag={t('maintenance_sec.dashboard.backup.tag') as string}
                                    accent="green"
                                />
                                <div className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.14] border border-white/[0.24]">
                                    <div className="flex items-center gap-3 min-w-0">
                                        <div className="w-8 h-8 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                                            <Zap size={15} />
                                        </div>
                                        <div className="min-w-0">
                                            <div className="font-semibold text-white text-[14px] truncate">
                                                {t('maintenance_sec.dashboard.speed.title')}
                                            </div>
                                            <div className="text-[11px] text-white/45 truncate">
                                                {t('maintenance_sec.dashboard.speed.sub')}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 shrink-0 ml-2">
                                        <div className="h-1 w-12 bg-white/8 rounded-full overflow-hidden">
                                            <div className="h-full bg-amber-400 w-[95%]" />
                                        </div>
                                        <span className="text-[11px] text-amber-400 font-mono">98/100</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div variants={itemVariants} className="order-1 lg:order-2">
                        <SectionHeader
                            number="03"
                            eyebrow="Karbantartás"
                            title={t('maintenance_sec.content.title') as string}
                            subtitle={undefined}
                        />
                        <p
                            className="text-white/88 text-base lg:text-[17px] mb-7 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: t('maintenance_sec.content.desc') as string }}
                        />
                        <div className="mb-3 text-xs font-mono font-semibold text-white/78 uppercase tracking-[0.18em]">
                            {t('maintenance_sec.content.benefits_title')}
                        </div>
                        <ul className="space-y-2.5">
                            {(t('maintenance_sec.content.benefits') as unknown as string[]).map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white/80 text-[15px]">
                                    <CheckCircle2 className="w-4 h-4 text-[#FFF2C6] shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>
            </Container>
        </Section>
    );
};
