import { Container } from '../Container';
import { Section } from '../Section';
import { SignaturePanel } from '../ui/SignaturePanel';
import { BracketFrame } from '../ui/BracketFrame';
import { Button } from '../ui/Button';
import { Check } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        }
    }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
    }
};

export const Pricing = () => {
    return (
        <Section id="arazas">
            <Container>
                <motion.div
                    className="text-center max-w-2xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Árazás</h2>
                    <p className="text-muted text-lg">
                        Minden projekt egyedi, de az irányárak segítenek a tervezésben.
                    </p>
                </motion.div>

                <motion.div
                    className="grid lg:grid-cols-3 gap-8 items-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                >
                    {/* Plan 1 - Basic (Bracket Frame) */}
                    <motion.div variants={cardVariants}>
                        <BracketFrame className="h-full">
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-white">Landing Page</h3>
                                <div className="mt-4 flex items-baseline gap-1">
                                    <span className="text-2xl font-bold text-neonBlue">150 000 Ft</span>
                                    <span className="text-sm text-muted">-tól</span>
                                </div>
                            </div>
                            <ul className="space-y-3 mb-8">
                                {["Reszponzív design", "SEO alapok", "Kapcsolat űrlap", "Gyors betöltés"].map((feat, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-muted">
                                        <Check className="w-4 h-4 text-neonBlue shrink-0" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <Button href="#kapcsolat" variant="secondary" className="w-full">
                                Érdekel
                            </Button>
                        </BracketFrame>
                    </motion.div>

                    {/* Plan 2 - Featured (Signature Panel) */}
                    <motion.div
                        className="lg:col-span-1 lg:-mt-8"
                        variants={cardVariants}
                    >
                        <SignaturePanel label="Legnépszerűbb" highlight={true} className="bg-surface/80">
                            <div className="mb-2 inline-block px-3 py-1 rounded-full bg-neonPurple/20 text-neonPurple text-xs font-bold uppercase tracking-wider">
                                Népszerű
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Céges weboldal</h3>
                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">
                                    300 000 Ft
                                </span>
                                <span className="text-sm text-muted">-tól</span>
                            </div>

                            <ul className="space-y-4 mb-10">
                                {["Minden a Landing csomagból", "Egyedi design tervezés", "SEO + GEO alap struktúra", "Admin felület", "Blog modul"].map((feat, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white">
                                        <div className="w-5 h-5 rounded-full bg-neonBlue/20 flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3 text-neonBlue" />
                                        </div>
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <Button href="#kapcsolat" variant="primary" className="w-full">
                                Ajánlatot kérek
                            </Button>
                        </SignaturePanel>
                    </motion.div>

                    {/* Plan 3 - Pro (Bracket Frame) */}
                    <motion.div variants={cardVariants}>
                        <BracketFrame className="h-full">
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-white">Webshop</h3>
                                <div className="mt-4 flex items-baseline gap-1">
                                    <span className="text-2xl font-bold text-neonBlue">500 000 Ft</span>
                                    <span className="text-sm text-muted">-tól</span>
                                </div>
                            </div>
                            <ul className="space-y-3 mb-8">
                                {["E-commerce funkciók", "Termékkatalógus", "Fizetési integrációk", "Szállítói kapcsolatok"].map((feat, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-muted">
                                        <Check className="w-4 h-4 text-neonBlue shrink-0" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <Button href="#kapcsolat" variant="secondary" className="w-full">
                                Érdekel
                            </Button>
                        </BracketFrame>
                    </motion.div>
                </motion.div>

                {/* --- AI CHATBOT PRICING --- */}
                <motion.div
                    className="mt-20 lg:mt-32"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">AI Chatbot Csomagok</h3>
                        <p className="text-muted">Weboldalra integrált, értékesítést segítő intelligens asszisztens.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6">
                        {[
                            {
                                name: "Start",
                                desc: "FAQ + Lead",
                                price: "99 000 Ft",
                                sub: "+ 15 000 Ft / hó",
                                feats: ["Alap információadás", "Lead bekérés (név, email)", "Ajánlatkérés terelés"]
                            },
                            {
                                name: "Standard",
                                desc: "Tudás + Terelés",
                                price: "249 000 Ft",
                                sub: "+ 29 000 Ft / hó",
                                feats: ["Bővített tudásbázis", "Döntéstámogató kérdések", "Alap analitika"],
                                highlight: true
                            },
                            {
                                name: "Pro",
                                desc: "Integrációk",
                                price: "Egyedi árazás",
                                sub: "+ 59 000 Ft / hó",
                                feats: ["CRM / Email integráció", "Fejlett kvalifikáció", "Prioritásos finomhangolás"]
                            }
                        ].map((plan, i) => (
                            <div key={i} className={`p-6 rounded-xl border ${plan.highlight ? 'bg-surface/80 border-neonBlue/30 shadow-lg shadow-neonBlue/10' : 'bg-surface/30 border-white/5'} flex flex-col`}>
                                <div className="mb-4">
                                    <h4 className="text-xl font-bold text-white">{plan.name}</h4>
                                    <div className="text-sm text-neonBlue font-medium">{plan.desc}</div>
                                </div>
                                <div className="mb-6">
                                    <div className="text-2xl font-bold text-white">{plan.price}</div>
                                    <div className="text-sm text-muted">-tól {plan.sub}</div>
                                </div>
                                <ul className="space-y-3 mb-6 flex-1">
                                    {plan.feats.map((feat, fi) => (
                                        <li key={fi} className="flex items-start gap-2 text-sm text-muted">
                                            <Check className="w-4 h-4 text-neonBlue mt-0.5 shrink-0" />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button href="#kapcsolat" variant={plan.highlight ? 'primary' : 'secondary'} size="sm" className="w-full">
                                    Érdekel
                                </Button>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-xs text-muted2 mt-6 max-w-2xl mx-auto">
                        AI használati díj: forgalomfüggő (jellemzően pár ezer – pár tízezer Ft/hó). A pontos árat az igények alapján egyeztetjük.
                    </p>
                </motion.div>

                {/* --- MAINTENANCE PRICING --- */}
                <motion.div
                    className="mt-20 lg:mt-32"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Karbantartás & Stabilitás</h3>
                        <p className="text-muted">Hogy weboldalad hosszú távon is gyors és biztonságos maradjon.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            {
                                name: "Basic",
                                price: "15 000 Ft",
                                per: "/ hó",
                                feats: ["Biztonsági frissítések", "Rendszeres mentések", "Működésellenőrzés", "Kisebb hibajavítások (szükség esetén)"]
                            },
                            {
                                name: "Pro",
                                price: "35 000 Ft",
                                per: "/ hó",
                                feats: ["Minden a Basic-ből", "Havi tartalmi módosítások (szükség esetén)", "Sebesség finomhangolás", "Technikai SEO ellenőrzés"],
                                highlight: true
                            },
                            {
                                name: "Priority",
                                price: "65 000 Ft",
                                per: "/ hó",
                                feats: ["Minden a Pro-ból", "Prioritásos support", "Konverzió optimalizálás", "Rendszeres audit & javaslatok"]
                            }
                        ].map((plan, i) => (
                            <div key={i} className={`p-6 rounded-xl border ${plan.highlight ? 'bg-surface/80 border-neonPurple/30 relative overflow-hidden' : 'bg-surface/30 border-white/5'} flex flex-col`}>
                                {plan.highlight && (
                                    <div className="absolute top-0 right-0 bg-neonPurple text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">
                                        Ajánlott
                                    </div>
                                )}
                                <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-2xl font-bold text-white">{plan.price}</span>
                                    <span className="text-sm text-muted">{plan.per}</span>
                                </div>
                                <ul className="space-y-3 mb-6 flex-1">
                                    {plan.feats.map((feat, fi) => (
                                        <li key={fi} className="flex items-start gap-2 text-sm text-muted">
                                            <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? 'text-neonPurple' : 'text-zinc-500'}`} />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button href="#kapcsolat" variant="secondary" size="sm" className="w-full">
                                    Kiválasztom
                                </Button>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.p
                    className="text-center text-muted2 text-sm mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                >
                    Az árak az ÁFA-t nem tartalmazzák. Egyedi igény esetén kérj egyedi ajánlatot.
                </motion.p>
            </Container>
        </Section>
    );
};
