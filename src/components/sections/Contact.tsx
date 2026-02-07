import { Container } from '../Container';
import { Section } from '../Section';
import { Button } from '../ui/Button';
import { BracketFrame } from '../ui/BracketFrame';
import { motion, type Variants } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }
    }
};

export const Contact = () => {
    const { t } = useLanguage();

    const services = t('contact.services') as unknown as string[];
    const budgets = t('contact.budgets') as unknown as string[];

    return (
        <Section id="kapcsolat" className="section-bg-cyan" withOrbs>
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <motion.div
                            className="inline-block px-3 py-1 mb-6 rounded-full bg-neonPurple/10 border border-neonPurple/20"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        >
                            <span className="text-sm font-mono text-neonPurple uppercase tracking-widest">{t('contact.tag')}</span>
                        </motion.div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                            {t('contact.title_line1')} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">
                                {t('contact.title_gradient')}
                            </span>
                        </h2>
                        <p className="text-xl text-muted mb-6">
                            {t('contact.description')}
                        </p>

                        <div className="flex flex-col gap-3 mb-12">
                            <a href="mailto:contact@cyberlabsweb.com" className="flex items-center gap-3 text-white hover:text-neonBlue transition-colors group w-fit">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-neonBlue/10 transition-colors border border-white/10 group-hover:border-neonBlue/30">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <span className="text-lg font-mono">contact@cyberlabsweb.com</span>
                            </a>
                            <a href="tel:+36703304445" className="flex items-center gap-3 text-white hover:text-neonBlue transition-colors group w-fit">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-neonBlue/10 transition-colors border border-white/10 group-hover:border-neonBlue/30">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <span className="text-lg font-mono">+36 70 330 4445</span>
                            </a>
                        </div>

                        <motion.div
                            className="relative max-w-sm"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-neonBlue to-neonPurple rounded-2xl opacity-20 blur-lg" />
                            <BracketFrame className="bg-surface h-auto">
                                <div className="flex items-center gap-4">
                                    <div className="relative w-12 h-12 shrink-0 flex items-center justify-center bg-gradient-to-br from-white to-neonBlue text-black font-bold font-mono text-xl leading-none">
                                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-black/20" />
                                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-black/20" />
                                        CL
                                    </div>
                                    <div>
                                        <div className="text-white font-bold">CyberLabs Web</div>
                                        <div className="text-sm text-neonBlue">{t('contact.card_subtitle')}</div>
                                    </div>
                                </div>
                            </BracketFrame>
                        </motion.div>
                    </motion.div>

                    {/* Right Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <motion.form
                            className="bg-surface2/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 border border-white/10 shadow-[0_0_50px_-12px_rgba(0,240,255,0.1)] space-y-6 sm:space-y-8 relative overflow-hidden"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            name="contact"
                            method="POST"
                            data-netlify="true"
                        >
                            <input type="hidden" name="form-name" value="contact" />

                            <motion.div className="grid sm:grid-cols-2 gap-6" variants={itemVariants}>
                                <div className="space-y-2">
                                    <label className="text-base font-medium text-white/70">{t('contact.form.name')}</label>
                                    <input type="text" name="name" required className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-neonBlue focus:ring-1 focus:ring-neonBlue focus:bg-white/10 transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-base font-medium text-white/70">{t('contact.form.company')}</label>
                                    <input type="text" name="company" className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-neonBlue focus:ring-1 focus:ring-neonBlue focus:bg-white/10 transition-colors" />
                                </div>
                            </motion.div>

                            <motion.div className="space-y-2" variants={itemVariants}>
                                <label className="text-base font-medium text-white/70">{t('contact.form.email')}</label>
                                <input type="email" name="email" required className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-neonBlue focus:ring-1 focus:ring-neonBlue focus:bg-white/10 transition-colors" />
                            </motion.div>

                            <motion.div className="grid sm:grid-cols-2 gap-6" variants={itemVariants}>
                                <div className="space-y-2 group">
                                    <label className="text-base font-medium text-white/70 group-focus-within:text-neonBlue transition-colors">{t('contact.form.service')}</label>
                                    <div className="relative">
                                        <select name="service" className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonBlue focus:ring-1 focus:ring-neonBlue focus:bg-white/10 transition-all appearance-none cursor-pointer hover:bg-white/10">
                                            {services.map((service, i) => (
                                                <option key={i} className="bg-[#0A0A1F] text-white">{service}</option>
                                            ))}
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2 group">
                                    <label className="text-base font-medium text-white/70 group-focus-within:text-neonBlue transition-colors">{t('contact.form.budget')}</label>
                                    <div className="relative">
                                        <select name="budget" className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonBlue focus:ring-1 focus:ring-neonBlue focus:bg-white/10 transition-all appearance-none cursor-pointer hover:bg-white/10">
                                            {budgets.map((budget, i) => (
                                                <option key={i} className="bg-[#0A0A1F] text-white">{budget}</option>
                                            ))}
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div className="space-y-2" variants={itemVariants}>
                                <label className="text-base font-medium text-white/70">{t('contact.form.message')}</label>
                                <textarea name="message" required rows={4} className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-neonBlue focus:ring-1 focus:ring-neonBlue focus:bg-white/10 transition-colors resize-none"></textarea>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Button type="submit" variant="primary" className="w-full py-4 text-lg">
                                    {t('contact.form.submit')}
                                </Button>
                            </motion.div>
                        </motion.form>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
};


