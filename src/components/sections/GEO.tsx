import { Container } from '../Container';
import { Section } from '../Section';
import { BracketFrame } from '../ui/BracketFrame';
import { Robot3D } from '../ui/Robot3D';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
    }
};

export const GEO = () => {
    const rows = [
        {
            title: "A Váltás",
            desc: "AI-vezérelt tartalom: a klasszikus SEO önmagában már nem elég. Az algoritmusok már nem kulcsszavakat keresnek, hanem összefüggéseket.",
            visual: (
                <div className="relative h-full min-h-[300px] flex items-center justify-center overflow-hidden">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-neonBlue/10 to-transparent rounded-2xl" />

                    {/* Side-by-side layout for both mobile and desktop */}
                    <div className="relative w-full h-full flex flex-row items-center justify-center gap-4 -translate-x-[10%]">
                        {/* Robot - on left */}
                        <motion.div
                            className="relative z-10 flex-shrink-0 -mt-10"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <Robot3D size={280} />
                        </motion.div>

                        {/* Card - on right */}
                        <div className="relative z-0 p-4 md:p-6 border border-neonBlue/30 bg-surface/80 backdrop-blur rounded-xl max-w-[180px] md:max-w-xs -ml-8">
                            <div className="text-xs font-mono text-neonBlue mb-2">KERESÉS:</div>
                            <div className="text-sm text-white italic">"Hogyan működnek a modern keresők?"</div>
                            <div className="mt-4 h-1 w-full bg-neonBlue/20 rounded" />
                            <div className="mt-2 h-1 w-2/3 bg-neonBlue/20 rounded" />
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Hol kell megjelenned",
            desc: "Google AI, ChatGPT, Perplexity, Gemini: az új digitális frontvonal. Ott kell lenned, ahol a gépek válaszolnak.",
            visual: (
                <div className="relative h-full min-h-[300px] flex items-center justify-center">
                    <motion.div
                        className="grid grid-cols-2 gap-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {['Google AI', 'ChatGPT', 'Perplexity', 'Gemini'].map((name, i) => (
                            <motion.div
                                key={i}
                                className="p-4 rounded-lg bg-surface2 border border-white/5 flex items-center justify-center text-sm font-bold text-muted hover:text-white hover:border-neonPurple/50 transition-colors"
                                variants={itemVariants}
                            >
                                {name}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            )
        },
        {
            title: "A Mi Megoldásunk",
            desc: "Olyan tartalmat készítünk, amit a Google és a ChatGPT is megért és ajánl. Így te leszel az első, akit az emberek megtalálnak.",
            visual: (
                <div className="relative h-full min-h-[300px] flex items-center justify-center">
                    <BracketFrame className="w-full max-w-xs bg-surface/50">
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between text-xs text-muted">
                                <span>Tartalom Minősége</span>
                                <span className="text-neonBlue">98%</span>
                            </div>
                            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                                <motion.div
                                    className="bg-neonBlue h-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "98%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.3 }}
                                />
                            </div>

                            <div className="flex justify-between text-xs text-muted mt-2">
                                <span>Online Megbízhatóság</span>
                                <span className="text-neonPurple">Magas</span>
                            </div>
                            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                                <motion.div
                                    className="bg-neonPurple h-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "90%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                />
                            </div>
                        </div>
                    </BracketFrame>
                </div>
            )
        }
    ];

    return (
        <Section id="geo">
            <Container>
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-highlight/10 border border-highlight/20">
                        <span className="text-xs font-bold text-highlight uppercase tracking-wider">Jövőbiztos</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">GEO-optimalizálás</h2>
                    <p className="text-xl text-muted">
                        A keresőoptimalizálás új korszaka: Generative Engine Optimization
                    </p>
                </motion.div>

                <div className="space-y-24">
                    {rows.map((row, index) => (
                        <motion.div
                            key={index}
                            className="grid md:grid-cols-2 gap-12 items-center"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div className={index % 2 === 1 ? "md:order-2" : ""}>
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{row.title}</h3>
                                <p className="text-muted text-lg leading-relaxed border-l-2 border-neonBlue/20 pl-6">
                                    {row.desc}
                                </p>
                            </div>
                            <div className={index % 2 === 1 ? "md:order-1" : ""}>
                                {row.visual}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};
