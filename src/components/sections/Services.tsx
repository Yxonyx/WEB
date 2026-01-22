import { Container } from '../Container';
import { Section } from '../Section';
import { SignaturePanel, SignatureItem } from '../ui/SignaturePanel';
import { Check } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

// Stagger container animation variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
    }
};

export const Services = () => {
    return (
        <Section id="szolgaltatasok" className="bg-gradient-to-b from-bg to-surface/50">
            <Container>
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* Left Content */}
                    <motion.div
                        className="lg:col-span-5 flex flex-col justify-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
                            <div className="w-12 h-[1px] bg-neonBlue" />
                            <span className="uppercase tracking-widest text-xs font-mono text-neonBlue">Miért mi?</span>
                        </motion.div>

                        <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Miért válassz minket?
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-muted text-lg leading-relaxed mb-8">
                            A weboldalad nem dizájn, hanem döntési felület. Mi úgy építjük meg, hogy megtalálják, megértsék, és válasszanak.
                        </motion.p>

                        <motion.ul variants={containerVariants} className="space-y-4 mb-8">
                            {[
                                "Modern, gyors, reszponzív kivitelezés",
                                "SEO: technikai alapok + tartalmi struktúra",
                                "GEO: AI-találhatóság (ChatGPT, Gemini)"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-start gap-3"
                                    variants={itemVariants}
                                >
                                    <div className="shrink-0 w-6 h-6 rounded-full bg-neonBlue/10 flex items-center justify-center mt-1">
                                        <Check className="w-4 h-4 text-neonBlue" />
                                    </div>
                                    <span className="text-white/90">{item}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    {/* Right Panel - Signature Highlight Panel */}
                    <motion.div
                        className="lg:col-span-7"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <SignaturePanel
                            label="Szolgáltatásaink"
                            highlight={true}
                            className="h-full bg-surface2/40"
                        >
                            <motion.div
                                className="flex flex-col gap-6"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={containerVariants}
                            >
                                <motion.div variants={itemVariants}>
                                    <SignatureItem index="01" title="Webfejlesztés">
                                        SaaS-szintű UI/UX, villámgyors betöltés, stabil karbantartás. React és Next.js alapokon.
                                    </SignatureItem>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <SignatureItem index="02" title="SEO">
                                        Google-élmezőnyre tervezett struktúra: technika + tartalom + mérhetőség.
                                    </SignatureItem>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <SignatureItem index="03" title="GEO-optimalizálás">
                                        AI-válaszokban való megjelenéshez: szemantikus háló + idézhető blokkok.
                                    </SignatureItem>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <SignatureItem index="04" title="Support & Stabilitás">
                                        Frissítés, biztonság, folyamatos finomítás hosszú távra.
                                    </SignatureItem>
                                </motion.div>
                            </motion.div>
                        </SignaturePanel>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
};
