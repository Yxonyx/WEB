import { Container } from '../Container';
import { Section } from '../Section';
import { Check, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';
import { ParticleNetwork } from '../ui/ParticleNetwork';

export const QuoteSection = () => {
    const { t } = useLanguage();

    return (
        <Section
            className="bg-[#050510]/20 relative overflow-hidden"
            background={
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <ParticleNetwork />
                </div>
            }
        >
            <Container>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >


                        {/* Heading */}
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight font-display">
                            "{t('quote.title.prefix')}<span className="text-neonBlue">{t('quote.title.highlight')}</span>{t('quote.title.suffix')}"
                        </h2>

                        <p className="text-lg text-white/80 font-medium mb-6 leading-relaxed">
                            {t('quote.subtitle')}
                        </p>

                        {/* Benefits List */}
                        <div className="bg-surface2/30 rounded-xl p-6 border border-white/5 mb-8">
                            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                                <Layers size={18} className="text-neonPurple" />
                                {t('quote.benefits_title')}
                            </h3>
                            <ul className="space-y-3">
                                {(t('quote.benefits') as unknown as string[]).map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-base text-white/80">
                                        <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-neonBlue/10 flex items-center justify-center">
                                            <Check size={12} className="text-neonBlue" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <Button href="#kapcsolat" variant="primary">
                                {t('quote.cta.trial')}
                            </Button>
                            <Button href="#arazas" variant="secondary">
                                {t('quote.cta.pricing')}
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Column: Visuals */}
                    <div className="relative h-[500px] hidden lg:block">
                        {/* Abstract animated cards representing the process */}

                        {/* Card 1: Requirement - Enhanced */}
                        {/* Card 1: Requirement - Enhanced */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="absolute top-0 left-10 w-72 bg-[#0A0A15] border border-white/10 rounded-xl shadow-2xl z-10 overflow-hidden hidden lg:block" // Moved up by 10% (top-10 -> top-0)
                        >
                            {/* Header */}
                            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5">
                                <div className="w-8 h-8 rounded-full bg-neonPurple/20 flex items-center justify-center">
                                    <span className="text-neonPurple font-bold text-sm">01</span>
                                </div>
                                <span className="text-sm text-white/60 font-medium">{t('quote.cards.req.title')}</span>
                            </div>

                            {/* Content - Form-like */}
                            <div className="p-4 space-y-3">
                                {/* Input fields */}
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-neonPurple/40" />
                                        <div className="h-2 flex-1 bg-white/10 rounded" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-neonBlue/40" />
                                        <div className="h-2 w-3/4 bg-white/10 rounded" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500/40" />
                                        <div className="h-2 w-1/2 bg-white/10 rounded" />
                                    </div>
                                </div>

                                {/* Textarea mock */}
                                <div className="h-10 w-full bg-white/5 rounded-lg border border-white/5 p-2">
                                    <div className="h-1.5 w-full bg-white/10 rounded mb-1" />
                                    <div className="h-1.5 w-2/3 bg-white/10 rounded" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2: Demo Build (Central) - Enhanced Web Page Mock */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 bg-[#0E0E1A] border border-neonBlue/30 rounded-2xl shadow-neonBlue/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] z-20 overflow-hidden hidden lg:block" // Moved up by 10%
                        >
                            {/* Title Bar */}
                            <div className="flex justify-between items-center px-4 py-3 border-b border-white/10 bg-[#0A0A15]">
                                <div className="text-base font-mono text-neonBlue">{t('quote.cards.demo.title')}</div>
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                                </div>
                            </div>

                            {/* Browser Content - Mini Website */}
                            <div className="p-4 space-y-3">
                                {/* Mini Navbar */}
                                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                                    <div className="w-16 h-2 bg-gradient-to-r from-neonBlue to-neonPurple rounded" />
                                    <div className="flex gap-2">
                                        <div className="w-8 h-1.5 bg-white/20 rounded" />
                                        <div className="w-8 h-1.5 bg-white/10 rounded" />
                                        <div className="w-8 h-1.5 bg-white/10 rounded" />
                                    </div>
                                </div>

                                {/* Mini Hero Section */}
                                <div className="py-2">
                                    <div className="h-2.5 w-3/4 bg-white/20 rounded mb-1" />
                                    <div className="h-2 w-1/2 bg-gradient-to-r from-neonBlue/40 to-neonPurple/40 rounded mb-2" />
                                    <div className="h-1.5 w-full bg-white/5 rounded mb-1" />
                                    <div className="h-1.5 w-2/3 bg-white/5 rounded" />
                                </div>

                                {/* Mini CTA Button */}
                                <div className="flex gap-2">
                                    <div className="h-5 w-16 bg-gradient-to-r from-neonBlue to-neonPurple rounded-md" />
                                    <div className="h-5 w-14 bg-white/10 rounded-md border border-white/10" />
                                </div>

                                {/* Mini Cards Section */}
                                <div className="flex gap-2 pt-2">
                                    <div className="flex-1 p-2 bg-white/5 rounded-lg border border-white/5">
                                        <div className="w-4 h-4 bg-neonBlue/20 rounded mb-1" />
                                        <div className="h-1.5 w-full bg-white/10 rounded" />
                                    </div>
                                    <div className="flex-1 p-2 bg-white/5 rounded-lg border border-white/5">
                                        <div className="w-4 h-4 bg-neonPurple/20 rounded mb-1" />
                                        <div className="h-1.5 w-full bg-white/10 rounded" />
                                    </div>
                                    <div className="flex-1 p-2 bg-white/5 rounded-lg border border-white/5">
                                        <div className="w-4 h-4 bg-green-500/20 rounded mb-1" />
                                        <div className="h-1.5 w-full bg-white/10 rounded" />
                                    </div>
                                </div>

                                {/* Mini Image Placeholder */}
                                <div className="h-16 w-full bg-gradient-to-br from-neonBlue/10 via-transparent to-neonPurple/10 rounded-lg border border-white/5 flex items-center justify-center">
                                    <div className="w-8 h-8 rounded-full border-2 border-dashed border-white/20" />
                                </div>
                            </div>

                            {/* Status Bar */}
                            <div className="flex items-center justify-between px-4 py-3 border-t border-white/10 bg-[#0A0A15]">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-sm text-muted">{t('quote.cards.demo.status')}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-green-400 font-mono font-bold">98%</span>
                                    <span className="text-sm text-muted">{t('quote.cards.demo.match')}</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 3: Feedback (Bottom) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            className="absolute bottom-10 right-10 w-64 p-5 bg-[#0A0A15] border border-white/10 rounded-xl shadow-2xl z-10 hidden lg:block"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <Check size={14} className="text-green-500" />
                                </div>
                                <div className="h-2 w-24 bg-white/10 rounded-full" />
                            </div>
                            <div className="flex gap-2">
                                <div className="px-2 py-1 rounded bg-white/5 text-[10px] text-muted">{t('quote.cards.feedback.accepted')}</div>
                                <div className="px-2 py-1 rounded bg-neonBlue/10 text-[10px] text-neonBlue">{t('quote.cards.feedback.launch')}</div>
                            </div>
                        </motion.div>

                        {/* Connecting Lines (SVG) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ zIndex: 0 }}>
                            <motion.path
                                d="M100,100 Q200,250 350,250 T600,400"
                                fill="none"
                                stroke="#00f0ff"
                                strokeWidth="2"
                                strokeDasharray="5,5"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                            />
                        </svg>
                    </div>
                </div>
            </Container>

            {/* Ambient background glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-neonBlue/5 rounded-full blur-[80px] pointer-events-none" />
        </Section>
    );
};


