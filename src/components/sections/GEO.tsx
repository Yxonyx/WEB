import { Container } from '../Container';
import { Section } from '../Section';
import { Network, Cpu, Sparkles, ArrowRight, UserCheck, Search, Bot } from 'lucide-react';
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
    const aiAnswer = t('geo.where.dialog.a1') as unknown as { label: string; text_prefix: string; text_highlight: string; text_suffix: string };
    const channels = t('geo.where.list') as unknown as string[];
    useEffect(() => {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const dm = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
        const lowMem = dm !== undefined && dm < 3;
        setIsCapable(!reduced && !lowMem);
    }, []);

    // Subtle soft glow only — no visible ring/circle border
    const robotGlow = (
        <div className="pointer-events-none absolute inset-[-18%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.30)_0%,rgba(255,226,139,0.14)_38%,rgba(99,168,255,0.20)_58%,transparent_76%)] blur-md" />
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
                            <div className="relative min-h-[300px]">
                                {/* Robot 3D floating on left */}
                                <div className="pointer-events-none absolute left-0 top-1/2 z-20 h-[150px] w-[150px] -translate-y-1/2 sm:h-[205px] sm:w-[205px] lg:-left-5">
                                    {/* Permanent halo glow behind robot — no flash when 3D mounts/unmounts */}
                                    {robotGlow}
                                    {isCapable && (
                                        <MountOnVisible
                                            className="absolute inset-0 flex items-center justify-center brightness-[1.22] saturate-[1.18] drop-shadow-[0_18px_30px_rgba(255,246,219,0.22)]"
                                            rootMargin="200px"
                                        >
                                            <Suspense fallback={null}>
                                                <Robot3D size={205} />
                                            </Suspense>
                                        </MountOnVisible>
                                    )}
                                </div>
                                {/* Search Interface card on right */}
                                <div className="geo-solid-panel ml-[96px] rounded-[1.65rem] p-5 pl-[76px] sm:ml-[132px] sm:p-6 sm:pl-[88px]">
                                    <div className="mb-4 flex items-center justify-between gap-3">
                                        <div className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#FFF2C6]">
                                            {t('geo.shift.visual_search')}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
                                            <span className="h-2.5 w-2.5 rounded-full bg-[#FFD66A]" />
                                            <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
                                        </div>
                                    </div>

                                    <div className="geo-message-panel mb-4 flex items-center gap-3 rounded-2xl px-4 py-3">
                                        <Search className="h-4 w-4 shrink-0 text-[#FFF2C6]" />
                                        <div className="min-w-0 flex-1 truncate text-sm italic text-white sm:text-base">
                                            {t('geo.shift.visual_query')}
                                        </div>
                                    </div>

                                    <div className="grid gap-3">
                                        <div className="geo-message-panel rounded-2xl p-4">
                                            <div className="mb-2 flex items-center gap-2">
                                                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-[12px] font-bold text-[#0E7CDC]">G</span>
                                                <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/88">{channels[0]}</span>
                                            </div>
                                            <div className="mb-1 text-[15px] font-bold text-white">
                                                {aiAnswer.text_highlight} - CyberLabs Web
                                            </div>
                                            <div className="h-2 w-full rounded-full bg-white/55" />
                                            <div className="mt-2 h-2 w-3/4 rounded-full bg-[#FFD66A]" />
                                        </div>

                                        <div className="geo-message-panel geo-message-panel-accent rounded-2xl p-4">
                                            <div className="mb-2 flex items-center gap-2">
                                                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#FFD66A] text-[#06437D]">
                                                    <Bot size={13} />
                                                </span>
                                                <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/90">{aiAnswer.label}</span>
                                            </div>
                                            <div className="text-sm leading-relaxed text-white/95">
                                                {aiAnswer.text_prefix}
                                                <span className="font-bold text-[#FFF2C6] underline decoration-white/60 underline-offset-4">
                                                    {aiAnswer.text_highlight}
                                                </span>
                                                {aiAnswer.text_suffix}
                                            </div>
                                        </div>
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
                            <div className="active-card geo-solid-panel relative z-10 rounded-2xl p-6">
                                {/* Chat UI Mockup */}
                                <div className="space-y-4">
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs">U</div>
                                        <div className="geo-message-panel flex-1 rounded-lg rounded-tl-none p-3">
                                            <div className="text-xs text-white/65 mb-1">{t('geo.where.dialog.q1.label')}</div>
                                            <div className="text-sm text-white">{t('geo.where.dialog.q1.text')}</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 flex-row-reverse">
                                        <div className="w-8 h-8 rounded-full bg-[#FFD66A]/30 flex items-center justify-center text-xs text-[#06437D]">AI</div>
                                        <div className="geo-message-panel geo-message-panel-accent flex-1 rounded-lg rounded-tr-none p-3">
                                            <div className="text-xs text-[#FFF2C6] mb-1">{t('geo.where.dialog.a1.label')}</div>
                                            <div className="text-sm text-white">
                                                {t('geo.where.dialog.a1.text_prefix')}<span className="text-[#FFF2C6] font-bold underline decoration-white/60 underline-offset-4">{t('geo.where.dialog.a1.text_highlight')}</span>{t('geo.where.dialog.a1.text_suffix')}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs">U</div>
                                        <div className="geo-message-panel flex-1 rounded-lg rounded-tl-none p-3">
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
                            <div className="geo-solid-panel rounded-2xl p-4 space-y-4">
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
