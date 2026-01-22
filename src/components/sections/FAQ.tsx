import { useState } from 'react';
import { Container } from '../Container';
import { Section } from '../Section';
import { Button } from '../ui/Button';
import { Plus, Minus, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ q, a, index }: { q: string, a: string, index: number }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            className="border-b border-white/10 last:border-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-4 flex items-center justify-between text-left group"
                aria-expanded={isOpen}
            >
                <span className="text-lg font-medium text-white group-hover:text-neonBlue transition-colors">{q}</span>
                <motion.span
                    className="shrink-0 ml-4 text-muted2"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </motion.span>
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
                        <p className="pb-4 text-muted leading-relaxed">
                            {a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export const FAQ = () => {
    const questions = [
        {
            q: "Mobilbarát és SEO-alapú lesz a weboldal?",
            a: "Igen. Minden weboldal reszponzív (mobilra optimalizált) és SEO-alapokra épül, így könnyen megtalálható és eredményes lesz."
        },
        {
            q: "Mennyi idő alatt készül el egy weboldal?",
            a: "Átlagosan 2–6 hét a projekt, a komplexitástól függően. Már az elején kapsz egy ütemtervet, amely pontosan megmutatja, mikor mire számíthatsz."
        },
        {
            q: "Tudom később én is szerkeszteni a weboldalt?",
            a: "Igen. Olyan megoldást adunk át, amit könnyen tudsz kezelni, és a projekt átadása során megmutatjuk a fontos lépéseket."
        },
        {
            q: "Vállaltok karbantartást és frissítést?",
            a: "Igen. Igény szerint biztosítunk karbantartást és frissítést, hogy a weboldalad gyors, biztonságos és naprakész maradjon."
        },
        {
            q: "Hogyan indul az együttműködés folyamata?",
            a: "Egy rövid egyeztetéssel kezdünk, ahol tisztázzuk a célokat, majd stratégia → tervezés → kivitelezés lépéseken keresztül haladunk."
        }
    ];

    return (
        <Section id="gyik">
            <Container>
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Guarantee Block */}
                    <motion.div
                        className="lg:col-span-5"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-surface2/50 border border-white/5 rounded-2xl p-8 sticky top-32">
                            <motion.div
                                className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center mb-6"
                                initial={{ scale: 0, rotate: -180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <ShieldCheck className="w-6 h-6 text-highlight" />
                            </motion.div>
                            <h3 className="text-2xl font-bold text-white mb-4">Minőségi garancia</h3>
                            <p className="text-muted text-lg mb-8 leading-relaxed">
                                Ha nem vagy elégedett a végeredménnyel, addig finomítunk, amíg tökéletes nem lesz. Célunk a 100%-os ügyfélelégedettség.
                            </p>
                            <Button href="#kapcsolat" variant="primary" className="w-full">
                                Biztosra megyek
                            </Button>
                        </div>
                    </motion.div>

                    {/* FAQ List */}
                    <motion.div
                        className="lg:col-span-7"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-8">Gyakori kérdések</h2>
                        <div className="bg-surface/30 backdrop-blur-sm rounded-2xl border border-white/5 p-6 sm:p-8">
                            {questions.map((faq, i) => (
                                <FAQItem key={i} {...faq} index={i} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
};
