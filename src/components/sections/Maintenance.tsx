import { Container } from '../Container';
import { Section } from '../Section';
import { ShieldCheck, Zap, RefreshCw, CheckCircle2 } from 'lucide-react';
import { ProIcon } from '../icons/ProIcon';
import { motion, type Variants } from 'framer-motion';
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

export const Maintenance = () => {
    const { t } = useLanguage();

    return (
        <Section id="karbantartas" className="section-bg-purple relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-neonPurple/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2" />

            <Container>
                <motion.div
                    className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {/* Visual - Left Side (Unified Dashboard) */}
                    <motion.div variants={itemVariants} className="order-2 lg:order-1 relative">
                        <div className="absolute inset-0 bg-neonPurple/5 rounded-3xl blur-xl" />
                        <div className="relative h-full bg-surface/20 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-center shadow-2xl">

                            {/* Dashboard Content */}
                            <div className="space-y-3">
                                {/* Item 1: Frissítések */}
                                <div className="flex items-center justify-between p-3 rounded-2xl bg-surface2/50 border border-white/5 group hover:border-neonBlue/30 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-neonBlue/10 flex items-center justify-center text-neonBlue group-hover:text-white group-hover:bg-neonBlue transition-colors">
                                            <RefreshCw size={16} />
                                        </div>
                                        <div className="hidden sm:block">
                                            <div className="font-bold text-white text-base">{t('maintenance_sec.dashboard.updates.title')}</div>
                                            <div className="text-[10px] text-muted">{t('maintenance_sec.dashboard.updates.sub')}</div>
                                        </div>
                                        <div className="sm:hidden font-bold text-white text-base">{t('maintenance_sec.dashboard.updates.sub')}</div>
                                    </div>
                                    <span className="text-sm text-neonBlue font-mono bg-neonBlue/5 px-2 py-1 rounded border border-neonBlue/10">{t('maintenance_sec.dashboard.updates.tag')}</span>
                                </div>

                                {/* Item 2: Biztonság */}
                                <div className="flex items-center justify-between p-3 rounded-2xl bg-surface2/50 border border-white/5 group hover:border-neonPurple/30 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <ProIcon icon={ShieldCheck} color="neonPurple" size={24} />
                                        <div className="hidden sm:block">
                                            <div className="font-bold text-white text-base">{t('maintenance_sec.dashboard.security.title')}</div>
                                            <div className="text-[10px] text-muted">{t('maintenance_sec.dashboard.security.sub')}</div>
                                        </div>
                                        <div className="sm:hidden font-bold text-white text-base">{t('maintenance_sec.dashboard.security.sub')}</div>
                                    </div>
                                    <span className="text-sm text-neonPurple font-mono bg-neonPurple/5 px-2 py-1 rounded border border-neonPurple/10">{t('maintenance_sec.dashboard.security.tag')}</span>
                                </div>

                                {/* Item 3: Mentések */}
                                <div className="flex items-center justify-between p-3 rounded-2xl bg-surface2/50 border border-white/5 group hover:border-green-500/30 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 group-hover:text-white group-hover:bg-green-500 transition-colors">
                                            <CheckCircle2 size={16} />
                                        </div>
                                        <div className="hidden sm:block">
                                            <div className="font-bold text-white text-base">{t('maintenance_sec.dashboard.backup.title')}</div>
                                            <div className="text-[10px] text-muted">{t('maintenance_sec.dashboard.backup.sub')}</div>
                                        </div>
                                        <div className="sm:hidden font-bold text-white text-base">{t('maintenance_sec.dashboard.backup.sub')}</div>
                                    </div>
                                    <span className="text-sm text-green-500 font-mono bg-green-500/5 px-2 py-1 rounded border border-green-500/10">{t('maintenance_sec.dashboard.backup.tag')}</span>
                                </div>

                                {/* Item 4: Sebesség */}
                                <div className="flex items-center justify-between p-3 rounded-2xl bg-surface2/50 border border-white/5 group hover:border-yellow-500/30 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <ProIcon icon={Zap} color="yellow" size={24} />
                                        <div className="hidden sm:block">
                                            <div className="font-bold text-white text-base">{t('maintenance_sec.dashboard.speed.title')}</div>
                                            <div className="text-[10px] text-muted">{t('maintenance_sec.dashboard.speed.sub')}</div>
                                        </div>
                                        <div className="sm:hidden font-bold text-white text-base">{t('maintenance_sec.dashboard.speed.sub')}</div>
                                    </div>
                                    <div className="flex items-center gap-3 shrink-0 ml-4">
                                        <div className="h-1.5 w-16 bg-surface rounded-full overflow-hidden">
                                            <div className="h-full bg-yellow-500 w-[95%]" />
                                        </div>
                                        <span className="text-sm text-yellow-500 font-mono whitespace-nowrap">98/100</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content - Right Side */}
                    <motion.div variants={itemVariants} className="order-1 lg:order-2">
                        <ProIcon icon={ShieldCheck} color="neonPurple" size={32} containerClassName="mb-6" />
                        <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">{t('maintenance_sec.content.title').split(' ').slice(0, -1).join(' ')} <span className="text-transparent bg-clip-text bg-accent-gradient-reverse">{t('maintenance_sec.content.title').split(' ').slice(-1)}</span></h2>
                        <p className="text-white/80 text-lg mb-8 leading-relaxed font-medium">
                            {t('maintenance_sec.content.desc')}
                        </p>

                        <div className="mb-4 text-base font-bold text-white uppercase tracking-wider">{t('maintenance_sec.content.benefits_title')}</div>
                        <ul className="space-y-3">
                            {(t('maintenance_sec.content.benefits') as unknown as string[]).map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white/80">
                                    <CheckCircle2 className="w-4 h-4 text-neonPurple shrink-0" />
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


