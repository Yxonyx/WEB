import { Container } from '../Container';
import { Section } from '../Section';
import { Laptop, BarChart3, CheckCircle2 } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { BracketFrame } from '../ui/BracketFrame';
import { useLanguage } from '../../context/LanguageContext';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

export const Services = () => {
    const { t } = useLanguage();

    return (
        <Section id="szolgaltatasok" className="section-bg-cyan" withMeshGradient withOrbs>

            <Container>
                {/* Header */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-20 md:mb-32"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-neonBlue/10 border border-neonBlue/20">
                        <span className="text-sm font-bold text-neonBlue uppercase tracking-wider">{t('services.tag')}</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">{t('services.title')}</h2>
                    <p className="text-xl text-white/80 font-medium">
                        {t('services.subtitle')}
                    </p>
                </motion.div>

                <div className="space-y-32">
                    {/* Service 1: Egyedi weboldal (Text Left, Visual Right) */}
                    <motion.div
                        className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        {/* Content */}
                        <motion.div variants={itemVariants}>
                            <div className="w-12 h-12 rounded-xl bg-neonBlue/10 flex items-center justify-center mb-6 text-neonBlue">
                                <Laptop size={24} />
                            </div>
                            <h3 className="text-2xl sm:text-4xl font-bold text-white mb-4">{t('services.webdev.title')}</h3>
                            <div className="text-neonBlue font-mono text-sm mb-6 tracking-wide">{t('services.webdev.tagline')}</div>
                            <p className="text-white/80 text-lg mb-8 leading-relaxed font-medium">
                                {t('services.webdev.desc')}
                            </p>

                            <div className="mb-4 text-base font-bold text-white uppercase tracking-wider">{t('services.webdev.benefits_title')}</div>
                            <ul className="space-y-3">
                                {(t('services.webdev.benefits') as unknown as string[]).map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/80">
                                        <CheckCircle2 className="w-4 h-4 text-neonBlue shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Visual */}
                        <motion.div variants={itemVariants} className="relative">
                            <BracketFrame className="bg-surface/30 p-8 min-h-[300px] flex items-center justify-center">
                                <div className="absolute top-0 right-0 p-32 bg-neonBlue/5 rounded-full blur-3xl pointer-events-none" />
                                {/* Mini Browser Visual */}
                                <div className="space-y-4 w-full relative z-10">
                                    <div className="bg-[#0b0b14] border border-white/10 rounded-xl overflow-hidden shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                                        {/* Browser Toolbar */}
                                        <div className="bg-[#151520] px-3 py-2.5 flex items-center gap-2 border-b border-white/5">
                                            <div className="flex gap-1.5">
                                                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                                                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                                                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                                            </div>
                                            <div className="ml-4 flex-1 h-5 bg-[#050510] rounded border border-white/5 flex items-center px-2">
                                                <div className="w-3 h-3 rounded-full bg-white/10" />
                                                <div className="ml-2 w-20 h-1 bg-white/5 rounded-full" />
                                            </div>
                                        </div>

                                        {/* Website Mockup Content */}
                                        <div className="p-4 space-y-4 bg-surface2/20">
                                            {/* Mock Nav */}
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-xs font-bold text-white/80">{t('services.mock.nav.name')}</span>
                                                <div className="flex gap-3 text-[9px] text-white/40">
                                                    <span>{t('services.mock.nav.about')}</span>
                                                    <span>{t('services.mock.nav.services')}</span>
                                                    <span className="text-neonBlue">{t('services.mock.nav.book')}</span>
                                                </div>
                                            </div>

                                            {/* Mock Hero */}
                                            <div className="w-full h-28 bg-gradient-to-br from-neonBlue/10 to-neonPurple/5 rounded-lg border border-white/5 flex items-center p-4 relative overflow-hidden">
                                                <div className="relative z-10 w-2/3 space-y-1.5">
                                                    <div className="text-[11px] font-bold text-white leading-tight">{t('services.mock.hero.title')}</div>
                                                    <div className="text-[11px] text-neonBlue font-bold leading-tight">{t('services.mock.hero.loc')}</div>
                                                    <div className="text-[8px] text-white/50 mt-1">{t('services.mock.hero.desc')}</div>
                                                    <div className="mt-2 px-2 py-1 text-[8px] bg-neonBlue/20 rounded border border-neonBlue/30 text-neonBlue inline-block">{t('services.mock.hero.cta')}</div>
                                                </div>
                                                {/* Decorative elements */}
                                                <div className="absolute right-0 bottom-0 w-20 h-20 bg-neonBlue/10 rounded-full blur-xl transform translate-x-1/2 translate-y-1/2" />
                                            </div>

                                            {/* Mock Cards */}
                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="h-20 bg-[#151520] rounded-lg border border-white/5 p-2.5 flex flex-col gap-1.5">
                                                    <div className="w-5 h-5 rounded bg-neonBlue/20 flex items-center justify-center text-[8px] text-neonBlue">🩺</div>
                                                    <div className="text-[10px] font-bold text-white/80">{t('services.mock.cards.c1')}</div>
                                                    <div className="text-[8px] text-white/40">{t('services.mock.cards.c1s')}</div>
                                                </div>
                                                <div className="h-20 bg-[#151520] rounded-lg border border-white/5 p-2.5 flex flex-col gap-1.5">
                                                    <div className="w-5 h-5 rounded bg-neonPurple/20 flex items-center justify-center text-[8px] text-neonPurple">📅</div>
                                                    <div className="text-[10px] font-bold text-white/80">{t('services.mock.cards.c2')}</div>
                                                    <div className="text-[8px] text-white/40">{t('services.mock.cards.c2s')}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </BracketFrame>
                        </motion.div>
                    </motion.div>

                    {/* Service 2: Keresőbarát beállítások (Text Right, Visual Left) */}
                    <motion.div
                        className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        {/* Visual */}
                        <motion.div variants={itemVariants} className="order-2 lg:order-1 relative">
                            <BracketFrame className="bg-surface/30 p-8 min-h-[300px] flex items-center justify-center">
                                <div className="absolute top-0 left-0 p-32 bg-neonPurple/5 rounded-full blur-3xl pointer-events-none" />

                                {/* Flow Visual */}
                                <div className="flex flex-col gap-6 w-full max-w-sm relative z-10">
                                    {(t('services.seo.flow') as unknown as any[]).map((step, i) => (
                                        <div key={i}>
                                            <div className="flex items-center gap-4">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${i === 2 ? 'bg-neonPurple text-black' : 'bg-surface2 border border-white/10 text-white'}`}>
                                                    {step.id}
                                                </div>
                                                <div className={`flex-1 p-3 rounded-lg border text-base ${i === 2 ? 'bg-neonPurple/10 border-neonPurple/20 text-white' : 'bg-surface2 border-white/5'}`}>
                                                    {step.title} <span className="text-neonPurple text-sm block">{step.sub}</span>
                                                </div>
                                            </div>
                                            {i < 2 && <div className="h-6 w-0.5 bg-white/10 ml-5 mt-6 mb-0" />}
                                        </div>
                                    ))}
                                </div>
                            </BracketFrame>
                        </motion.div>

                        {/* Content */}
                        <motion.div variants={itemVariants} className="order-1 lg:order-2">
                            <div className="w-12 h-12 rounded-xl bg-neonPurple/10 flex items-center justify-center mb-6 text-neonPurple">
                                <BarChart3 size={24} />
                            </div>
                            <h3 className="text-2xl sm:text-4xl font-bold text-white mb-6">{t('services.seo.title')}</h3>
                            <p className="text-muted text-lg mb-8 leading-relaxed">
                                {t('services.seo.desc')}
                            </p>

                            <div className="mb-4 text-base font-bold text-white uppercase tracking-wider">{t('services.seo.benefits_title')}</div>
                            <p className="text-muted leading-relaxed">
                                {t('services.seo.why')}
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
};


