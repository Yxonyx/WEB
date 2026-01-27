import { Container } from '../Container';
import { Section } from '../Section';
import { BracketFrame } from '../ui/BracketFrame';
import { Robot3D } from '../ui/Robot3D';
import { motion, type Variants } from 'framer-motion';
import { Search, MessageSquare, Database, ArrowRight, User } from 'lucide-react';

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
    return (
        <Section id="geo">
            <Container>
                {/* Header */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-highlight/10 border border-highlight/20">
                        <span className="text-xs font-bold text-highlight uppercase tracking-wider">Új korszak</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">AI-találhatóság, egyszerűen</h2>
                    <p className="text-xl text-muted">
                        Régen elég volt kulcsszavazni. Ma az számít, hogy a tartalom érthető, bizonyítható és jól felépített legyen.
                    </p>
                </motion.div>

                <div className="space-y-32">
                    {/* Row 1: A Váltás (Robot Visual) */}
                    <motion.div
                        className="grid md:grid-cols-2 gap-12 items-center"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">A Váltás</h3>
                            <p className="text-muted text-lg leading-relaxed border-l-2 border-neonBlue/20 pl-6">
                                AI-vezérelt tartalom: a klasszikus SEO önmagában már nem elég. Az algoritmusok már nem kulcsszavakat keresnek, hanem összefüggéseket.
                            </p>
                        </div>
                        <div className="relative h-[300px] flex items-center justify-center overflow-hidden">
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
                    </motion.div>


                    {/* Row 2: Hol kell megjelenned (Q&A Boxes) */}
                    <motion.div
                        className="grid md:grid-cols-2 gap-12 items-center"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            className="md:order-2"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Hol kell megjelenned?</h3>
                            <p className="text-muted text-lg leading-relaxed border-l-2 border-neonBlue/20 pl-6 mb-8">
                                Nemcsak a Google listában, hanem az AI-válaszokban is, ahol az emberek konkrét kérdéseket tesznek fel.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-neonBlue/10 flex items-center justify-center text-neonBlue shrink-0">
                                        <Search size={14} />
                                    </div>
                                    <span className="text-base text-white/80">Google keresési találatok</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-neonPurple/10 flex items-center justify-center text-neonPurple shrink-0">
                                        <MessageSquare size={14} />
                                    </div>
                                    <span className="text-base text-white/80">ChatGPT / Gemini válaszok</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            className="space-y-4 md:order-1"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div variants={itemVariants} className="bg-surface/50 border border-white/5 p-4 rounded-xl">
                                <div className="text-xs font-bold text-neonBlue mb-1 uppercase">Kérdés</div>
                                <p className="text-sm text-white italic">"Melyik a legjobb kivitelező X városban?"</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="bg-surface/50 border border-white/5 p-4 rounded-xl ml-8 border-l-neonPurple/50">
                                <div className="text-xs font-bold text-neonPurple mb-1 uppercase">AI Válasz</div>
                                <p className="text-sm text-muted">"A vélemények és referenciák alapján a <strong className="text-white">Te Cégedet</strong> ajánlom, mert..."</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="bg-surface/50 border border-white/5 p-4 rounded-xl">
                                <div className="text-xs font-bold text-neonBlue mb-1 uppercase">Kérdés</div>
                                <p className="text-sm text-white italic">"Mennyibe kerül egy ilyen szolgáltatás?"</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Row 3: Mi mit csinálunk (Infographic) */}
                    <motion.div
                        className="grid md:grid-cols-2 gap-12 items-center"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Mi mit csinálunk?</h3>
                            <p className="text-muted text-lg leading-relaxed border-l-2 border-neonBlue/20 pl-6">
                                Úgy építjük fel a szöveget és az oldalt, hogy a keresők és az AI-rendszerek is könnyen feldolgozzák, hiteles forrásként kezeljék.
                            </p>

                            {/* Progress Bars - Moved here */}
                            <div className="mt-8 flex flex-col gap-6 pl-6">
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between text-xs text-muted">
                                        <span>Tartalom Minősége</span>
                                        <span className="text-neonBlue">98%</span>
                                    </div>
                                    <div className="w-full bg-surface2 h-1.5 rounded-full overflow-hidden">
                                        <motion.div
                                            className="bg-neonBlue h-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "98%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between text-xs text-muted">
                                        <span>Online Megbízhatóság</span>
                                        <span className="text-neonPurple">Magas</span>
                                    </div>
                                    <div className="w-full bg-surface2 h-1.5 rounded-full overflow-hidden">
                                        <motion.div
                                            className="bg-neonPurple h-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "90%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.4 }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <BracketFrame className="bg-surface/30 p-8">
                                <div className="flex flex-col gap-6 relative">
                                    {/* Line connecting items */}
                                    <div className="absolute left-[19px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-neonBlue/0 via-neonBlue/30 to-neonBlue/0" />

                                    {[
                                        { icon: <Search size={18} />, label: "Keresés", sub: "User keres vagy kérdez" },
                                        { icon: <Database size={18} />, label: "AI Feldolgozás", sub: "Weboldal elemzése" },
                                        { icon: <MessageSquare size={18} />, label: "AI Válasz", sub: "Összegzett ajánlás" },
                                        { icon: <ArrowRight size={18} />, label: "Forrás ajánlás", sub: "Link a te oldaladra" },
                                        { icon: <User size={18} />, label: "Te", sub: "Új ügyfél érkezik", highlight: true }
                                    ].map((step, i) => (
                                        <div key={i} className="flex items-center gap-4 relative z-10">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${step.highlight ? 'bg-neonBlue text-black border-neonBlue' : 'bg-[#050510] border-white/10 text-white'}`}>
                                                {step.icon}
                                            </div>
                                            <div>
                                                <div className={`text-sm font-bold ${step.highlight ? 'text-neonBlue' : 'text-white'}`}>{step.label}</div>
                                                <div className="text-xs text-muted">{step.sub}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </BracketFrame>
                        </motion.div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
};
