import { Container } from '../Container';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }
    }
};

export const Process = () => {
    const steps = [
        { title: "Megismerjük", desc: "Célközönség, versenytársak, pozícionálás." },
        { title: "Tervezés", desc: "Digitális jelenlét felépítése (web, SEO, GEO)." },
        { title: "Kivitelezés", desc: "Gyors átfutás, csak a 'tökéletes' számít." },
        { title: "Support", desc: "Friss, biztonságos, villámgyors weboldal." }
    ];

    return (
        <motion.section
            className="py-20 relative bg-surface2 border-y border-white/5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <Container>
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <motion.div
                        className="lg:col-span-4"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Hogyan dolgozunk?</h2>
                        <p className="text-muted">
                            Átlátható process, dedikált kapcsolattartás és folyamatos visszajelzés.
                        </p>
                    </motion.div>
                    <div className="lg:col-span-8">
                        <motion.div
                            className="grid sm:grid-cols-2 gap-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={containerVariants}
                        >
                            {steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                                    variants={itemVariants}
                                >
                                    <motion.div
                                        className="shrink-0 w-10 h-10 rounded-lg bg-surface border border-white/10 flex items-center justify-center font-mono text-neonBlue font-bold"
                                        initial={{ scale: 0, rotate: -180 }}
                                        whileInView={{ scale: 1, rotate: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                                    >
                                        {i + 1}
                                    </motion.div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">{step.title}</h4>
                                        <p className="text-sm text-muted">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </Container>
        </motion.section>
    );
};
