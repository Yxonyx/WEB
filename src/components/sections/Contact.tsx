import { Container } from '../Container';
import { Section } from '../Section';
import { Button } from '../ui/Button';
import { BracketFrame } from '../ui/BracketFrame';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }
    }
};

export const Contact = () => {
    return (
        <Section id="kapcsolat">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            className="inline-block px-3 py-1 mb-6 rounded-full bg-neonPurple/10 border border-neonPurple/20"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        >
                            <span className="text-sm font-mono text-neonPurple uppercase tracking-widest">Kapcsolat</span>
                        </motion.div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                            Van egy projekt ötleted? <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">
                                Kérj ajánlatot!
                            </span>
                        </h2>
                        <p className="text-xl text-muted mb-12">
                            Egyeztessünk egy rövid hívást, majd küldünk ajánlatot.
                        </p>

                        <motion.div
                            className="relative max-w-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-neonBlue to-neonPurple rounded-2xl opacity-20 blur-lg" />
                            <BracketFrame className="bg-surface h-auto">
                                <div className="flex items-center gap-4">
                                    <div className="relative w-12 h-12 shrink-0 flex items-center justify-center bg-gradient-to-br from-neonBlue to-neonPurple text-black font-bold font-mono text-xl leading-none">
                                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/60" />
                                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/60" />
                                        CL
                                    </div>
                                    <div>
                                        <div className="text-white font-bold">CyberLabs Studio</div>
                                        <div className="text-sm text-neonBlue">Web & GEO Optimalizálás</div>
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
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <motion.form
                            className="bg-surface2/20 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 shadow-[0_0_50px_-12px_rgba(0,240,255,0.1)] space-y-8 relative overflow-hidden"
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
                                    <label className="text-base font-medium text-muted">Teljes név *</label>
                                    <input type="text" name="name" required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonBlue focus:ring-1 focus:ring-neonBlue transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-base font-medium text-muted">Cégnév</label>
                                    <input type="text" name="company" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonBlue focus:ring-1 focus:ring-neonBlue transition-colors" />
                                </div>
                            </motion.div>

                            <motion.div className="space-y-2" variants={itemVariants}>
                                <label className="text-base font-medium text-muted">Email cím *</label>
                                <input type="email" name="email" required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonBlue focus:ring-1 focus:ring-neonBlue transition-colors" />
                            </motion.div>

                            <motion.div className="grid sm:grid-cols-2 gap-6" variants={itemVariants}>
                                <div className="space-y-2 group">
                                    <label className="text-base font-medium text-muted group-focus-within:text-neonBlue transition-colors">Szolgáltatás</label>
                                    <div className="relative">
                                        <select name="service" className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonBlue focus:ring-1 focus:ring-neonBlue transition-all appearance-none cursor-pointer hover:bg-black/80">
                                            <option className="bg-[#0A0A1F] text-white">Webfejlesztés</option>
                                            <option className="bg-[#0A0A1F] text-white">Webshop</option>
                                            <option className="bg-[#0A0A1F] text-white">SEO</option>
                                            <option className="bg-[#0A0A1F] text-white">AI Chatbot</option>
                                            <option className="bg-[#0A0A1F] text-white">GEO-optimalizálás</option>
                                            <option className="bg-[#0A0A1F] text-white">Web + SEO + GEO (komplett)</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2 group">
                                    <label className="text-base font-medium text-muted group-focus-within:text-neonBlue transition-colors">Költségkeret</label>
                                    <div className="relative">
                                        <select name="budget" className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonBlue focus:ring-1 focus:ring-neonBlue transition-all appearance-none cursor-pointer hover:bg-black/80">
                                            <option className="bg-[#0A0A1F] text-white">150k – 300k</option>
                                            <option className="bg-[#0A0A1F] text-white">300k – 500k</option>
                                            <option className="bg-[#0A0A1F] text-white">500k – 1M+</option>
                                            <option className="bg-[#0A0A1F] text-white">Egyedi</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div className="space-y-2" variants={itemVariants}>
                                <label className="text-base font-medium text-muted">Projekt részletek *</label>
                                <textarea name="message" required rows={4} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonBlue focus:ring-1 focus:ring-neonBlue transition-colors resize-none"></textarea>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Button type="submit" variant="primary" className="w-full py-4 text-lg">
                                    Ajánlatot kérek
                                </Button>
                            </motion.div>
                        </motion.form>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
};
