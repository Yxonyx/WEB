import { Container } from '../Container';
import { Section } from '../Section';
import { Bot, CheckCircle2 } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { BracketFrame } from '../ui/BracketFrame';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export const ChatbotIntro = () => {
    return (
        <Section id="chatbot-intro" className="relative overflow-hidden">
            <Container>
                <motion.div
                    className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {/* Content - Left Side */}
                    <motion.div variants={itemVariants}>
                        <div className="w-12 h-12 rounded-xl bg-neonBlue/10 flex items-center justify-center mb-6 text-neonBlue">
                            <Bot size={24} />
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">AI Chatbot Asszisztens</h2>
                        <p className="text-muted text-lg mb-8 leading-relaxed">
                            Weboldalba integrált, értékesítést segítő intelligens asszisztens. Nem alszik, nem megy szabadságra, és azonnal válaszol a látogatóid kérdéseire.
                        </p>

                        <div className="mb-4 text-sm font-bold text-white uppercase tracking-wider">Mit ad a vállalkozásodnak?</div>
                        <ul className="space-y-3">
                            {[
                                "Azonnali válaszok 0-24 órában",
                                "Tehermentesíti az ügyfélszolgálatot",
                                "Automatikusan gyűjti az érdeklődők adatait (Lead generálás)",
                                "Ajánlatkérés felé tereli a látogatót"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-muted">
                                    <CheckCircle2 className="w-4 h-4 text-neonBlue shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Visual - Right Side */}
                    <motion.div variants={itemVariants} className="relative">
                        <BracketFrame className="bg-surface/30 p-8 h-full min-h-[400px] flex flex-col">
                            {/* Chatbot Header */}
                            <div className="mb-6 pb-4 border-b border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neonBlue to-neonPurple flex items-center justify-center shadow-lg shadow-neonBlue/20">
                                        <Bot size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold">CyberLabs AI</div>
                                        <div className="text-xs text-neonBlue">Mindig elérhető asszisztens</div>
                                    </div>
                                </div>
                            </div>

                            {/* Chat Interface Mockup */}
                            <div className="space-y-4 flex-1 flex flex-col justify-end">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <span className="text-xs font-bold text-white">U</span>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-3 text-sm text-white max-w-[80%]">
                                        Mikor vagytok nyitva? És mennyi idő egy weboldal?
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 flex-row-reverse">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neonBlue to-neonPurple flex items-center justify-center shrink-0 shadow-lg shadow-neonBlue/20">
                                        <Bot size={16} className="text-white" />
                                    </div>
                                    <div className="bg-surface2 border border-neonBlue/20 rounded-2xl rounded-tr-none p-4 text-sm text-white max-w-[90%] shadow-lg">
                                        <p className="mb-2">Hétköznap 9-17 óráig vagyunk elérhetőek.</p>
                                        <p>Egy landing page jellemzően 5-7 munkanap, komplett weboldal 2 hét alatt készül el. <span className="text-neonBlue font-bold">Kérsz egy ingyenes demót?</span></p>

                                        <div className="mt-3 flex gap-2">
                                            <button className="px-3 py-1.5 rounded-lg bg-neonBlue/10 text-neonBlue text-xs font-bold hover:bg-neonBlue/20 transition-colors">Igen, érdekel!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute top-0 right-0 p-32 bg-neonBlue/5 rounded-full blur-3xl pointer-events-none" />
                        </BracketFrame>
                    </motion.div>
                </motion.div>
            </Container>
        </Section>
    );
};
