import { Container } from '../Container';
import { Section } from '../Section';
import { Check, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';

export const QuoteSection = () => {
    const { t } = useLanguage();

    return (
        <Section className="relative overflow-hidden">
            <Container>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 1, x: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >


                        <h2 className="mb-5 max-w-xl bg-none font-hero text-xl font-extrabold leading-[1.18] text-white drop-shadow-[0_6px_18px_rgba(0,93,180,0.22)] sm:text-2xl lg:text-[1.875rem]">
                            <span className="text-white/50">"</span>{t('quote.title.prefix')}
                            <span className="text-[#FFF2C6]">{t('quote.title.highlight')}</span>
                            {t('quote.title.suffix')}<span className="text-white/50">"</span>
                        </h2>

                        <p className="text-[15px] sm:text-base text-white/90 mb-6 leading-relaxed max-w-lg">
                            {t('quote.subtitle')}
                        </p>

                        <div className="relative mb-7 max-w-lg overflow-hidden rounded-2xl border border-white/40 bg-[linear-gradient(145deg,rgba(4,10,20,0.90)_0%,rgba(5,42,86,0.86)_58%,rgba(8,100,180,0.66)_100%)] p-5 shadow-[0_22px_58px_-28px_rgba(0,24,64,0.74),inset_0_1px_0_rgba(255,255,255,0.34),inset_0_0_34px_rgba(83,189,255,0.08)]">
                            <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
                            <h3 className="text-white/90 text-sm font-semibold mb-3.5 flex items-center gap-2">
                                <Layers size={16} className="text-[#FFF2C6]" />
                                {t('quote.benefits_title')}
                            </h3>
                            <ul className="space-y-2.5">
                                {(t('quote.benefits') as unknown as string[]).map((item, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-[14px] text-white/85">
                                        <div className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-[#FFD66A]/30 flex items-center justify-center">
                                            <Check size={10} className="text-[#06437D]" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center max-w-xs sm:max-w-none">
                            <Button href="#kapcsolat" variant="primary" className="w-full sm:w-auto">
                                {t('quote.cta.trial')}
                            </Button>
                            <Button href="#arazas" variant="secondary" className="w-full sm:w-auto">
                                {t('quote.cta.pricing')}
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Column: Visuals */}
                    <div className="relative hidden h-[520px] lg:block">
                        <div className="absolute inset-y-8 left-8 right-0 overflow-hidden rounded-[2rem] border border-white/[0.28] bg-[linear-gradient(145deg,rgba(3,8,18,0.72)_0%,rgba(6,48,96,0.50)_60%,rgba(4,18,42,0.76)_100%)] shadow-[0_28px_86px_-38px_rgba(0,20,56,0.82)]">
                            <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(90deg,rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.20)_1px,transparent_1px)] bg-[size:76px_76px]" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_10%,rgba(255,246,219,0.18),transparent_28%),radial-gradient(circle_at_18%_78%,rgba(83,189,255,0.13),transparent_34%)]" />
                        </div>

                        <svg className="absolute inset-0 h-full w-full pointer-events-none" aria-hidden="true">
                            <motion.path
                                d="M105 155 C190 240 260 282 344 286 C430 290 488 336 560 420"
                                fill="none"
                                stroke="#7FE7FF"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeDasharray="8 10"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 1.4, delay: 0.3 }}
                                opacity="0.62"
                            />
                        </svg>

                        <motion.div
                            initial={{ opacity: 1, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="absolute left-0 top-8 z-10 w-72 overflow-hidden rounded-2xl border border-white/40 bg-[linear-gradient(145deg,rgba(4,10,20,0.94)_0%,rgba(5,42,86,0.90)_58%,rgba(7,90,168,0.72)_100%)] p-4 shadow-[0_24px_68px_-30px_rgba(0,20,58,0.82),inset_0_1px_0_rgba(255,255,255,0.34),inset_0_0_32px_rgba(83,189,255,0.08)]"
                        >
                            <span className="pointer-events-none absolute right-4 top-4 h-7 w-7 border-r border-t border-white/40" />
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/35 bg-[#063F84] text-sm font-bold text-[#FFE28B] shadow-[inset_0_0_18px_rgba(83,189,255,0.16)]">
                                    01
                                </div>
                                <span className="text-sm font-semibold text-white/95">{t('quote.cards.req.title')}</span>
                            </div>

                            <div className="space-y-3">
                                <div className="rounded-xl border border-white/[0.22] bg-[#031326]/[0.72] p-3">
                                    <div className="mb-2 h-2.5 w-full rounded-full bg-white/[0.32]" />
                                    <div className="mb-2 h-2.5 w-4/5 rounded-full bg-white/[0.24]" />
                                    <div className="h-2.5 w-3/5 rounded-full bg-[#FFE28B]/[0.76]" />
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    {['Cél', 'SEO', 'UX'].map((label) => (
                                        <div key={label} className="rounded-lg border border-white/24 bg-[#063F84]/70 py-2 text-center text-[10px] font-mono uppercase tracking-wider text-white/90">
                                            {label}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 1, scale: 1 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            className="absolute left-[190px] top-[128px] z-20 w-[368px] overflow-hidden rounded-[1.75rem] border border-white/60 bg-[linear-gradient(145deg,rgba(3,8,18,0.98)_0%,rgba(5,34,72,0.96)_48%,rgba(7,90,168,0.84)_100%)] shadow-[0_34px_88px_-34px_rgba(0,18,54,0.92),inset_0_1px_0_rgba(255,255,255,0.46),inset_0_0_48px_rgba(83,189,255,0.12)]"
                        >
                            <div className="flex items-center justify-between border-b border-white/24 bg-[#052B5C]/[0.88] px-5 py-4">
                                <div className="font-mono text-[17px] text-white">{t('quote.cards.demo.title')}</div>
                                <div className="flex gap-1.5">
                                    <div className="h-2.5 w-2.5 rounded-full bg-white/35" />
                                    <div className="h-2.5 w-2.5 rounded-full bg-[#FFE28B]" />
                                    <div className="h-2.5 w-2.5 rounded-full bg-cyan-200" />
                                </div>
                            </div>

                            <div className="space-y-4 p-5">
                                <div className="flex items-center justify-between border-b border-white/[0.16] pb-3">
                                    <div className="h-2.5 w-20 rounded-full bg-[#FFE28B]" />
                                    <div className="flex gap-2">
                                        <div className="h-2 w-10 rounded-full bg-white/[0.36]" />
                                        <div className="h-2 w-10 rounded-full bg-white/[0.24]" />
                                        <div className="h-2 w-10 rounded-full bg-white/[0.24]" />
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-white/24 bg-[#062B59]/[0.78] p-4">
                                    <div className="mb-2 h-3 w-4/5 rounded-full bg-white/70" />
                                    <div className="mb-2 h-2.5 w-3/5 rounded-full bg-white/[0.44]" />
                                    <div className="h-2.5 w-full rounded-full bg-white/[0.24]" />
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-300 text-[#075197] shadow-[0_10px_24px_-12px_rgba(0,0,0,0.45)]">
                                        <Check size={18} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="mb-2 h-2.5 w-24 rounded-full bg-white/[0.44]" />
                                        <div className="h-2.5 w-40 rounded-full bg-white/[0.24]" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-3">
                                    {['Design', 'SEO', 'Mobil'].map((label, i) => (
                                    <div key={label} className="rounded-xl border border-white/24 bg-[#031326]/[0.76] p-3">
                                            <div className={`mb-3 h-7 w-7 rounded-lg ${i === 1 ? 'bg-[#FFE28B]' : 'bg-cyan-200'}`} />
                                            <div className="h-2 w-full rounded-full bg-white/30" />
                                            <div className="mt-2 h-2 w-2/3 rounded-full bg-white/20" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center justify-between border-t border-white/24 bg-[#031326]/[0.88] px-5 py-4">
                                <div className="flex items-center gap-2">
                                    <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-300" />
                                    <span className="text-sm font-medium text-white/90">{t('quote.cards.demo.status')}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-mono text-sm font-bold text-[#FFE28B]">98%</span>
                                    <span className="text-sm text-white/80">{t('quote.cards.demo.match')}</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 1, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            className="absolute bottom-10 right-2 z-10 w-72 rounded-2xl border border-white/40 bg-[linear-gradient(145deg,rgba(4,10,20,0.94)_0%,rgba(5,42,86,0.90)_58%,rgba(7,90,168,0.72)_100%)] p-4 shadow-[0_24px_68px_-30px_rgba(0,20,58,0.82),inset_0_1px_0_rgba(255,255,255,0.34),inset_0_0_32px_rgba(83,189,255,0.08)]"
                        >
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-300 text-[#075197]">
                                    <Check size={18} />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-white">{t('quote.cards.feedback.accepted')}</div>
                                    <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#FFE28B]">{t('quote.cards.feedback.launch')}</div>
                                </div>
                            </div>
                            <div className="h-2 overflow-hidden rounded-full bg-white/[0.18]">
                                <div className="h-full w-[92%] rounded-full bg-[#FFE28B]" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Container>

            {/* Ambient background glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-neonBlue/5 rounded-full blur-[80px] pointer-events-none" />
        </Section>
    );
};
