import { Container } from '../Container';
import { Section } from '../Section';
import { Network, Cpu, Sparkles, ArrowRight, UserCheck } from 'lucide-react';
import { ProIcon } from '../icons/ProIcon';
import { motion } from 'framer-motion';
import { lazy, Suspense, useEffect, useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { MountOnVisible } from '../ui/MountOnVisible';
import { useLanguage } from '../../context/LanguageContext';
const Robot3D = lazy(() => import('../ui/Robot3D').then(module => ({ default: module.Robot3D })));

export const GEO = () => {
    const { t } = useLanguage();
    const [isCapable, setIsCapable] = useState(true);
    useEffect(() => {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const dm = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
        const lowMem = dm !== undefined && dm < 3;
        setIsCapable(!reduced && !lowMem);
    }, []);

    // Subtle soft glow only — no visible ring/circle border
    const robotGlow = (
        <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(99,168,255,0.22),transparent_70%)] blur-md" />
    );

    return (
        <Section id="geo" className="relative overflow-hidden">
            <Container>
                <SectionHeader
                    number="02"
                    eyebrow="GEO"
                    title={t('geo.header.title') as string}
                    align="center"
                    className="mb-10 lg:mb-16"
                />
                <p
                    className="text-white/88 text-base lg:text-[17px] text-center max-w-3xl mx-auto mb-16 lg:mb-20 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: t('geo.header.desc') as string }}
                />

                {/* Main Content Grid */}
                <div className="space-y-32">

                    {/* 1. The Shift (Problem/Solution) */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 1, x: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-hero bg-none">{t('geo.shift.title')}</h3>
                            <p className="text-lg text-white/80 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: t('geo.shift.desc') as string }} />
                        </motion.div>

                        <motion.div
                            className="relative"
                            initial={{ opacity: 1, x: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="absolute inset-0 bg-white/16 blur-3xl rounded-full" />
                            <div className="relative flex items-center gap-6">
                                {/* Robot 3D floating on left */}
                                <div className="relative flex-shrink-0 w-[120px] h-[120px] sm:w-[180px] sm:h-[180px]">
                                    {/* Permanent halo glow behind robot — no flash when 3D mounts/unmounts */}
                                    {robotGlow}
                                    {isCapable && (
                                        <MountOnVisible
                                            className="absolute inset-0 flex items-center justify-center"
                                            rootMargin="200px"
                                        >
                                            <Suspense fallback={null}>
                                                <Robot3D size={180} />
                                            </Suspense>
                                        </MountOnVisible>
                                    )}
                                </div>
                                {/* Search Interface card on right */}
                                <div className="flex-1 bg-white/[0.18] border border-white/35 rounded-2xl p-6 shadow-[0_16px_45px_-22px_rgba(0,74,153,0.45)] backdrop-blur-md">
                                    <div className="text-sm font-mono text-[#FFF2C6] mb-2">{t('geo.shift.visual_search')}</div>
                                    <div className="text-base text-white italic mb-4">{t('geo.shift.visual_query')}</div>
                                    {/* AI Thinking Visual */}
                                    <div className="flex gap-2 mb-2">
                                        <div className="w-full h-2 bg-gradient-to-r from-white/65 via-[#FFD66A]/55 to-transparent rounded animate-pulse" />
                                    </div>
                                    <div className="flex gap-2 w-3/4">
                                        <div className="w-full h-2 bg-white/18 rounded" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* 2. Where (Channels) */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center lg:flex-row-reverse">
                        <motion.div
                            className="lg:order-2"
                            initial={{ opacity: 1, x: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <ProIcon icon={Network} color="neonPurple" size={32} />
                                <h3 className="text-2xl sm:text-3xl font-bold text-white font-hero bg-none">{t('geo.where.title')}</h3>
                            </div>
                            <p className="text-lg text-white/80 leading-relaxed font-medium mb-6">
                                {t('geo.where.desc')}
                            </p>
                            <ul className="space-y-4">
                                {(t('geo.where.list') as unknown as string[]).map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/90 font-medium">
                                        <div className="w-2 h-2 rounded-full bg-[#FFD66A]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            className="lg:order-1 relative"
                            initial={{ opacity: 1, x: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="active-card p-6 rounded-2xl border border-white/35 bg-white/[0.18] relative z-10 backdrop-blur-md shadow-[0_16px_45px_-22px_rgba(0,74,153,0.45)]">
                                {/* Chat UI Mockup */}
                                <div className="space-y-4">
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs">U</div>
                                        <div className="flex-1 bg-white/14 p-3 rounded-lg rounded-tl-none border border-white/20">
                                            <div className="text-xs text-white/65 mb-1">{t('geo.where.dialog.q1.label')}</div>
                                            <div className="text-sm text-white">{t('geo.where.dialog.q1.text')}</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 flex-row-reverse">
                                        <div className="w-8 h-8 rounded-full bg-[#FFD66A]/30 flex items-center justify-center text-xs text-[#06437D]">AI</div>
                                        <div className="flex-1 bg-[#FFD66A]/16 p-3 rounded-lg rounded-tr-none border border-white/25">
                                            <div className="text-xs text-[#FFF2C6] mb-1">{t('geo.where.dialog.a1.label')}</div>
                                            <div className="text-sm text-white">
                                                {t('geo.where.dialog.a1.text_prefix')}<span className="text-[#FFF2C6] font-bold underline decoration-white/60 underline-offset-4">{t('geo.where.dialog.a1.text_highlight')}</span>{t('geo.where.dialog.a1.text_suffix')}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs">U</div>
                                        <div className="flex-1 bg-white/14 p-3 rounded-lg rounded-tl-none border border-white/20">
                                            <div className="text-xs text-white/65 mb-1">{t('geo.where.dialog.q2.label')}</div>
                                            <div className="text-sm text-white">{t('geo.where.dialog.q2.text')}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* 3. Metrics (Trust & Quality) */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 1, x: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <ProIcon icon={Cpu} color="green" size={32} />
                                <h3 className="text-2xl sm:text-3xl font-bold text-white font-hero bg-none">{t('geo.what.title')}</h3>
                            </div>
                            <p className="text-lg text-white/80 leading-relaxed font-medium mb-8" dangerouslySetInnerHTML={{ __html: t('geo.what.desc') as string }} />

                            {/* Metrics mockup */}
                            <div className="bg-white/[0.18] border border-white/35 rounded-2xl p-4 space-y-4 backdrop-blur-md shadow-[0_16px_45px_-22px_rgba(0,74,153,0.45)]">
                                <div>
                                    <div className="flex justify-between text-sm text-white/72 mb-1">
                                        <span>{t('geo.what.metrics.content')}</span>
                                        <span className="text-[#FFF2C6]">98%</span>
                                    </div>
                                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-[#FFD66A]"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "98%" }}
                                            viewport={{ once: true, amount: 0.2 }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm text-white/72 mb-1">
                                        <span>{t('geo.what.metrics.trust')}</span>
                                        <span className="text-green-500">{t('geo.what.metrics.trust_value')}</span>
                                    </div>
                                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-green-500"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "95%" }}
                                            viewport={{ once: true, amount: 0.2 }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative"
                            initial={{ opacity: 1, x: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Vertical Flow Steps */}
                            <div className="space-y-4 relative">
                                <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                                {(t('geo.what.steps') as unknown as { label: string, sub: string }[]).map((step, i) => (
                                    <div key={i} className="flex items-center gap-4 relative z-10">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${i === 4 ? 'bg-[#FFD66A] border-white/70 text-[#06437D]' :
                                            i === 2 ? 'bg-[#FFD66A]/20 border-[#FFD66A] text-[#FFF2C6]' :
                                                'bg-white/15 border-white/30 text-white/70'
                                            }`}>
                                            {i === 4 ? <UserCheck size={18} /> :
                                                i === 2 ? <Sparkles size={18} /> :
                                                    <div className="text-sm font-bold">{i + 1}</div>}
                                        </div>
                                        <div className={i === 4 ? "text-[#FFF2C6] font-bold" : i === 2 ? "text-white" : "text-white/70"}>
                                            <div className="font-bold">{step.label}</div>
                                            <div className="text-xs opacity-70">{step.sub}</div>
                                        </div>

                                        {i < 4 && <div className="ml-auto opacity-20"><ArrowRight size={16} className="rotate-90 sm:rotate-0" /></div>}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};
