import { useState } from 'react';
import { Container } from '../Container';
import { Section } from '../Section';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ q, a, defaultOpen = false, index }: { q: string, a: string, defaultOpen?: boolean, index: number }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="mb-4"
        >
            <div
                className={`transition-all duration-300 rounded-xl border ${isOpen ? 'bg-surface2/40 border-highlight/30' : 'bg-surface/20 border-white/5 hover:border-white/10'}`}
            >
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                    aria-expanded={isOpen}
                >
                    <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-white' : 'text-muted hover:text-white'}`}>
                        {q}
                    </span>
                    <span className={`shrink-0 ml-4 transition-colors ${isOpen ? 'text-highlight' : 'text-muted2'}`}>
                        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </span>
                </button>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="px-6 pb-6 text-muted leading-relaxed border-t border-white/5 mt-[-8px] pt-4">
                                {a}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export const FAQ_Alternate = () => {
    const questions = [
        {
            q: "Csak akkor fizetek, ha tetszik a próbaverzió?",
            a: "Igen, a kockázat a miénk. Készítünk egy működő próbaverziót az igényeid alapján. Ha tetszik az irány, akkor szerződünk és folytatjuk a munkát. Ha nem, semmilyen kötelezettséged nincs.",
            defaultOpen: true
        },
        {
            q: "Mennyi idő alatt készül el egy weboldal?",
            a: "Landing Page: kb. 5–7 munkanap, céges weboldal: 7–14 munkanap, webshop: 14–28 munkanap. A pontos ütemezés a projekt terjedelmétől és az anyagok rendelkezésre állásától függ."
        },
        {
            q: "Lehet sürgősen kérni?",
            a: "Igen. Felár ellenében, egyedi megbeszélés alapján gyorsítjuk a kivitelezést — jellemzően több fejlesztő párhuzamos ráállításával."
        },
        {
            q: "Tudom később én is szerkeszteni a weboldalt?",
            a: "Igen. Igény esetén admin felületet / blog modult adunk, és átadjuk a szerkesztés alapjait."
        },
        {
            q: "Vállaltok karbantartást és frissítést?",
            a: "Igen. Havi karbantartási csomagokkal biztosítjuk, hogy a reszponzív webdizájn mellett az oldal mobilbarát és gyors maradjon hosszú távon is."
        },
        {
            q: "Készítetek AI chatbotot is?",
            a: "Igen. Weboldalba integrált, értékesítést segítő chatbotot implementálunk, ami a weboldal tartalma alapján informál, kérdez és ajánlatkérésig terel."
        }
    ];

    return (
        <Section id="gyik" className="relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-neonBlue/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-highlight/5 rounded-full blur-[100px] pointer-events-none" />

            <Container>
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Gyakori kérdések</h2>
                        <p className="text-xl text-muted">A legfontosabb válaszok, őszintén.</p>
                    </motion.div>

                    <div className="space-y-2">
                        {questions.map((faq, i) => (
                            <FAQItem key={i} {...faq} index={i} />
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
};


