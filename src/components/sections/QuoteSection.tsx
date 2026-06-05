import { Container } from '../Container';
import { Section } from '../Section';
import { Check, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';

export const QuoteSection = () => {
    const { t } = useLanguage();

    return (
        <Section
            id="probaverzio"
            className="section-quote-deep relative overflow-hidden !bg-transparent py-16 sm:py-20 lg:min-h-[780px] lg:py-24"
            background={
                <>
                    <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_56%_34%_at_84%_10%,rgba(255,255,255,0.20),transparent_64%),radial-gradient(ellipse_42%_28%_at_14%_70%,rgba(255,226,139,0.10),transparent_68%)]" />
                </>
            }
        >
            <Container>
                <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(620px,1.08fr)] lg:gap-14">
                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 1, x: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.20em] text-white drop-shadow-[0_2px_10px_rgba(0,80,160,0.35)] sm:text-sm">
                            &lt; Gyorskezdés &gt;
                        </div>

                        <h2 className="mb-5 max-w-2xl bg-none font-hero text-[1.85rem] font-extrabold leading-[1.1] text-white drop-shadow-[0_8px_24px_rgba(0,70,150,0.30)] sm:text-[2.45rem] lg:text-[2.95rem] xl:text-[3.25rem]">
                            {t('quote.title.prefix')}
                            <span className="text-[#FFF2C6]">{t('quote.title.highlight')}</span>
                            {t('quote.title.suffix')}
                        </h2>

                        <p className="mb-7 max-w-2xl text-base font-medium leading-relaxed text-white drop-shadow-[0_3px_12px_rgba(0,70,150,0.26)] sm:text-lg lg:text-xl">
                            {t('quote.subtitle')}
                        </p>

                        <div className="quote-panel-solid relative mb-7 max-w-2xl overflow-hidden rounded-2xl p-5 sm:p-6">
                            <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-white" />
                            <h3 className="text-white text-sm font-semibold mb-4 flex items-center gap-2 sm:text-base">
                                <Layers size={16} className="text-white" />
                                {t('quote.benefits_title')}
                            </h3>
                            <ul className="space-y-3">
                                {(t('quote.benefits') as unknown as string[]).map((item, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-[15px] text-white">
                                        <Check size={16} className="mt-0.5 shrink-0 text-[#FFE28B] lg:hidden" />
                                        <div className="mt-0.5 hidden h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white lg:flex">
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
                    <div className="relative hidden h-[600px] lg:block">
                        <div className="pointer-events-none absolute bottom-6 left-[110px] right-[20px] h-28 rounded-[50%] border border-white/20 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.16),transparent_72%)]" />
                        <div className="quote-visual-backdrop absolute bottom-[100px] left-[120px] top-[58px] w-[440px] overflow-hidden rounded-[2rem] border" />

                        {/* Connector: brief → mockup → approved output */}
                        <svg
                            className="quote-connect-line absolute inset-0 z-[6] h-full w-full pointer-events-none"
                            aria-hidden="true"
                            viewBox="0 0 660 600"
                            preserveAspectRatio="none"
                        >
                            <motion.path
                                d="M 514 184 C 472 190 450 204 424 230"
                                fill="none"
                                stroke="#F7FBFF"
                                strokeWidth="3"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1.1, delay: 0.15 }}
                            />
                            <motion.path
                                d="M 426 368 C 466 390 498 430 516 492"
                                fill="none"
                                stroke="#FFE28B"
                                strokeWidth="3"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1.15, delay: 0.45 }}
                            />
                            <circle cx="424" cy="230" r="5" fill="#F7FBFF" />
                            <circle cx="516" cy="492" r="6" fill="#FFE28B" />
                        </svg>

                        <motion.div
                            initial={{ opacity: 1, y: 0, rotate: -4 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="quote-panel-solid absolute right-0 top-[98px] z-30 w-[286px] origin-bottom-left overflow-hidden rounded-2xl p-4"
                        >
                            <span className="pointer-events-none absolute right-4 top-4 h-7 w-7 border-r border-t border-white/50" />
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/40 bg-[#FFE28B] text-sm font-bold text-[#06437D]">
                                    01
                                </div>
                                <span className="text-sm font-semibold text-white">{t('quote.cards.req.title')}</span>
                            </div>

                            <div className="space-y-3">
                                <div className="quote-panel-inner rounded-xl p-3">
                                    <div className="mb-2 h-2.5 w-full rounded-full bg-white/50" />
                                    <div className="mb-2 h-2.5 w-4/5 rounded-full bg-white/35" />
                                    <div className="h-2.5 w-3/5 rounded-full bg-[#FFE28B]" />
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    {['Cél', 'SEO', 'UX'].map((label) => (
                                        <div key={label} className="quote-panel-chip rounded-lg py-2 text-center text-[10px] font-mono uppercase tracking-wider text-white">
                                            {label}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 1, scale: 1, rotate: 2.5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            className="quote-panel-solid-main absolute left-[88px] top-[82px] z-20 w-[430px] origin-center overflow-hidden rounded-[1.75rem]"
                        >
                            <div className="flex items-center justify-between border-b border-[#0E7CDC]/20 bg-[#FFD66A] px-5 py-4">
                                <div className="font-mono text-[17px] text-white">{t('quote.cards.demo.title')}</div>
                                <div className="flex gap-1.5">
                                    <div className="h-2.5 w-2.5 rounded-full bg-white" />
                                    <div className="h-2.5 w-2.5 rounded-full bg-[#0E7CDC]" />
                                    <div className="h-2.5 w-2.5 rounded-full bg-white" />
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

                                <div className="quote-panel-inner rounded-2xl p-4">
                                    <div className="mb-2 h-3 w-4/5 rounded-full bg-white/75" />
                                    <div className="mb-2 h-2.5 w-3/5 rounded-full bg-white/45" />
                                    <div className="h-2.5 w-full rounded-full bg-white/30" />
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-300 text-[#075197] shadow-[0_10px_24px_-12px_rgba(0,70,140,0.35)]">
                                        <Check size={18} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="mb-2 h-2.5 w-24 rounded-full bg-white/45" />
                                        <div className="h-2.5 w-40 rounded-full bg-white/28" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-3">
                                    {['Design', 'SEO', 'Mobil'].map((label, i) => (
                                    <div key={label} className="quote-panel-chip rounded-xl p-3">
                                            <div className={`mb-3 h-7 w-7 rounded-lg ${i === 1 ? 'bg-[#FFE28B]' : 'bg-cyan-200'}`} />
                                            <div className="h-2 w-full rounded-full bg-white/40" />
                                            <div className="mt-2 h-2 w-2/3 rounded-full bg-white/25" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center justify-between border-t border-[#0E7CDC]/20 bg-[#FFD66A] px-5 py-4">
                                <div className="flex items-center gap-2">
                                    <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-white" />
                                    <span className="text-sm font-medium text-white">{t('quote.cards.demo.status')}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-mono text-sm font-bold text-[#FFE28B]">98%</span>
                                    <span className="text-sm text-white">{t('quote.cards.demo.match')}</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 1, y: 16, rotate: 4 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 5 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
                            className="quote-panel-solid absolute bottom-[34px] right-[34px] z-30 w-[316px] origin-top-left overflow-hidden rounded-2xl p-4"
                        >
                            <div className="mb-3 flex items-center justify-between">
                                <span className="quote-flow-label rounded-full px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-[0.18em]">
                                    output
                                </span>
                                <span className="font-mono text-xs text-white">03</span>
                            </div>
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-white bg-white text-[#06437D]">
                                    <Check size={20} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="text-sm font-semibold text-white">{t('quote.cards.feedback.accepted')}</div>
                                    <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-white">{t('quote.cards.feedback.launch')}</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-[1fr_auto] items-center gap-3">
                                <div className="h-2 overflow-hidden rounded-full bg-white/25">
                                    <div className="h-full w-[92%] rounded-full bg-white" />
                                </div>
                                <span className="font-mono text-xs font-bold text-white">ready</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Container>

        </Section>
    );
};
