import { Container } from '../Container';
import { motion, type Variants } from 'framer-motion';
import { Section } from '../Section';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

export const Process = () => {
    const steps = [
        {
            title: "Megismerés",
            desc: "Célok, célközönség, példák. Feltérképezzük, pontosan mire van szükséged.",
            highlight: false
        },
        {
            title: "Tervezés",
            desc: "Felépítés, tartalom, ajánlatkérés útvonala. A digitális stratégiád alapkövei.",
            highlight: false
        },
        {
            title: "Próbaverzió 1 héten belül",
            desc: "Első működő verzió. Nem statikus terv, hanem kattintható valóság.",
            highlight: true
        },
        {
            title: "Finomítás & átadás",
            desc: "Addig csiszoljuk, amíg késznek érzed. 100% elégedettségi garancia.",
            highlight: false
        }
    ];

    return (
        <Section id="folyamat" className="pt-8 pb-10 sm:pt-10 sm:pb-12 lg:pt-12 lg:pb-16 bg-surface2 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neonBlue/5 rounded-full blur-[120px] pointer-events-none" />

            <Container>
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                    {/* Left Column: Info & Stats */}
                    <motion.div
                        className="lg:col-span-5"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Hogyan dolgozunk?</h2>
                        <p className="text-base text-muted mb-8 leading-relaxed">
                            Átlátható process, dedikált kapcsolattartás és folyamatos visszajelzés.
                            Nem tűnünk el, és tartjuk a határidőket.
                        </p>

                        <div className="p-6 rounded-2xl bg-surface/40 border border-white/5 backdrop-blur-md shadow-2xl">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-neonBlue rounded-full"></span>
                                Határidők & Gyorsítás
                            </h3>
                            <div className="space-y-4 text-base text-muted">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-white font-medium">Landing Page</span>
                                        <span className="text-neonBlue font-mono">5–7 munkanap</span>
                                    </div>
                                    <div className="h-1 bg-surface rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-neonBlue shadow-[0_0_10px_rgba(56,189,248,0.5)]"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "30%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-white font-medium">Céges weboldal</span>
                                        <span className="text-neonBlue font-mono">7–14 munkanap</span>
                                    </div>
                                    <div className="h-1 bg-surface rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-neonBlue shadow-[0_0_10px_rgba(56,189,248,0.5)]"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "60%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.4 }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-white font-medium">Webshop</span>
                                        <span className="text-neonBlue font-mono">14–28 munkanap</span>
                                    </div>
                                    <div className="h-1 bg-surface rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-neonBlue shadow-[0_0_10px_rgba(56,189,248,0.5)]"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "90%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.6 }}
                                        />
                                    </div>
                                </div>
                                <div className="pt-3 text-sm text-muted2 italic border-t border-white/5 flex items-start gap-2">
                                    <div className="shrink-0 w-3.5 h-3.5 rounded-full bg-highlight/20 flex items-center justify-center mt-0.5 text-[10px] font-bold text-highlight">!</div>
                                    Sürgős kivitelezés felár ellenében kérhető.
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Steps Timeline */}
                    <div className="lg:col-span-7">
                        <motion.div
                            className="relative pl-8 sm:pl-10 space-y-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={containerVariants}
                        >
                            {/* Connecting Line */}
                            <div className="absolute left-[14px] top-5 bottom-44 w-[1px] bg-gradient-to-b from-neonBlue/50 via-white/10 to-transparent" />

                            {steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    className="relative group"
                                >
                                    {/* Number Node */}
                                    <div className={`absolute -left-[38px] sm:-left-[50px] w-10 h-10 rounded-full border-[3px] border-surface2 flex items-center justify-center z-10 transition-colors duration-300 ${step.highlight ? 'bg-highlight text-bg shadow-[0_0_15px_rgba(255,107,107,0.4)]' : 'bg-surface text-neonBlue group-hover:bg-neonBlue group-hover:text-bg'}`}>
                                        <span className="font-mono font-bold text-base">{i + 1}</span>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`p-5 rounded-xl border transition-all duration-300 ${step.highlight ? 'bg-highlight/5 border-highlight/20' : 'bg-surface/30 border-white/5 hover:border-white/10 hover:bg-surface/50'}`}>
                                        <h4 className={`text-lg font-bold mb-1 ${step.highlight ? 'text-highlight' : 'text-white'}`}>
                                            {step.title}
                                        </h4>
                                        <p className="text-base text-muted leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};


