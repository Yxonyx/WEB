import { Container } from '../Container';
import { Section } from '../Section';
import { BracketFrame } from '../ui/BracketFrame';
import { Button } from '../ui/Button';
import { Check } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        }
    }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }
    }
};

export const Pricing = () => {
    return (
        <Section id="arazas" withMeshGradient>
            <Container>
                <motion.div
                    className="text-center max-w-2xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Árazás</h2>
                    <p className="text-white/80 text-lg font-medium">
                        Minden projekt egyedi, de az alábbi irányárak segítenek tervezni. A döntéshez alapvázat adunk így biztosan tudni fogod, mire számíts.
                    </p>
                </motion.div>

                <motion.div
                    className="grid lg:grid-cols-3 gap-8 items-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                >
                    {/* Plan 1 - Landing (Bracket Frame) */}
                    <motion.div variants={cardVariants}>
                        <BracketFrame className="h-full">
                            <div className="mb-6">
                                <span className="inline-block py-1 px-2 mb-2 rounded bg-white/10 text-sm font-bold text-white uppercase tracking-wider">
                                    Kezdő
                                </span>
                                <h3 className="text-xl font-bold text-white">Landing oldal</h3>
                                <div className="mt-4 flex items-baseline gap-1">
                                    <span className="text-2xl font-bold text-neonBlue">150 000 Ft</span>
                                    <span className="text-base text-muted">-tól</span>
                                </div>
                            </div>
                            <ul className="space-y-3 mb-8">
                                {["reszponzív webdizájn", "mobilbarát és gyors", "kapcsolat űrlap", "keresőbarát alapok"].map((feat, i) => (
                                    <li key={i} className="flex items-center gap-3 text-base text-white/80">
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

                    {/* Plan 2 - Corporate (Signature Panel) */}
                    <motion.div
                        className="lg:col-span-1 lg:-mt-8"
                        variants={cardVariants}
                    >
                        <div className="relative rounded-2xl overflow-hidden group/card bg-gradient-to-br from-surface/90 via-surface/70 to-surface/80 border border-white/10 shadow-[0_0_60px_-20px_rgba(0,240,255,0.25),0_0_40px_-15px_rgba(189,0,255,0.2)] hover:shadow-[0_0_80px_-15px_rgba(0,240,255,0.35),0_0_60px_-10px_rgba(189,0,255,0.3)] transition-all duration-500">
                            {/* Animated gradient border glow */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neonBlue via-neonPurple to-neonBlue opacity-[0.15] blur-sm" />

                            {/* Inner glow effect */}
                            <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-bg/95 via-surface/95 to-bg/90" />

                            {/* Animated Background Beam */}
                            <div className="absolute -inset-[100%] animate-[spin_12s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00F0FF_0%,#BD00FF_50%,#00F0FF_100%)] opacity-[0.04] group-hover/card:opacity-[0.08] transition-opacity duration-700" />

                            {/* Corner accent glow */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-neonPurple/20 rounded-full blur-[80px] pointer-events-none" />
                            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-neonBlue/15 rounded-full blur-[60px] pointer-events-none" />

                            <div className="relative z-10 p-8 sm:p-10">
                                {/* Badge */}
                                <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-neonBlue/20 to-neonPurple/20 border border-neonPurple/40 backdrop-blur-sm">
                                    <span className="w-2 h-2 rounded-full bg-neonPurple animate-pulse" />
                                    <span className="text-xs font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">
                                        Legnépszerűbb
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3">Céges weboldal</h3>
                                <div className="flex items-baseline gap-2 mb-8">
                                    <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neonBlue via-white to-neonPurple animate-gradient-shift" style={{ backgroundSize: '200% auto' }}>
                                        300 000 Ft
                                    </span>
                                    <span className="text-base text-muted">-tól</span>
                                </div>

                                <ul className="space-y-4 mb-10">
                                    {["reszponzív webdizájn", "mobilbarát és gyors kivitelezés", "AI-találhatóság", "admin felület (ha kéred)", "blog modul a növekedéshez"].map((feat, i) => (
                                        <li key={i} className="flex items-start gap-3 text-white group/item">
                                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-neonBlue/30 to-neonPurple/20 border border-neonBlue/40 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:border-neonBlue/60 transition-colors duration-300">
                                                <Check className="w-3.5 h-3.5 text-neonBlue" />
                                            </div>
                                            <span className="text-base text-white/90 group-hover/item:text-white transition-colors duration-300">{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button href="#kapcsolat" variant="primary" className="w-full shadow-lg shadow-neonBlue/20">
                                    Ajánlatot kérek
                                </Button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Plan 3 - Webshop (Bracket Frame) */}
                    <motion.div variants={cardVariants}>
                        <BracketFrame className="h-full">
                            <div className="mb-6">
                                <span className="inline-block py-1 px-2 mb-2 rounded bg-white/10 text-sm font-bold text-white uppercase tracking-wider">
                                    E-Commerce
                                </span>
                                <h3 className="text-xl font-bold text-white">Webshop</h3>
                                <div className="mt-4 flex items-baseline gap-1">
                                    <span className="text-2xl font-bold text-neonBlue">500 000 Ft</span>
                                    <span className="text-base text-muted">-tól</span>
                                </div>
                            </div>

                            {/* "Pills" for highlighted features as requested */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-2 py-1 rounded bg-neonBlue/10 text-neonBlue text-sm font-medium">Fizetés</span>
                                <span className="px-2 py-1 rounded bg-neonBlue/10 text-neonBlue text-sm font-medium">Szállítás</span>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {["termékek kezelése", "fizetés beállítása", "szállítási megoldások", "bővíthető felépítés"].map((feat, i) => (
                                    <li key={i} className="flex items-center gap-3 text-base text-muted">
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
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.div variants={cardVariants} className="text-center max-w-2xl mx-auto mb-12">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">AI Chatbot Csomagok</h3>
                        <p className="text-muted">Weboldalba integrált, értékesítést segítő asszisztens.</p>
                    </motion.div>

                    <motion.div
                        className="grid lg:grid-cols-3 gap-6"
                        variants={containerVariants}
                    >
                        {[
                            {
                                name: "Start",
                                desc: "Alapok",
                                price: "99 000 Ft",
                                feats: ["alap tájékoztatás", "név + email bekérése", "ajánlatkérés felé terelés"]
                            },
                            {
                                name: "Standard",
                                desc: "Bővített",
                                price: "249 000 Ft",
                                feats: ["bővített tudás", "döntést segítő kérdések", "alap statisztika"],
                                highlight: true
                            },
                            {
                                name: "Pro",
                                desc: "Full Custom",
                                price: "Egyedi árazás",
                                feats: ["rendszerek összekötése (pl. CRM)", "fejlettebb érdeklődő-szűrés", "prioritásos finomhangolás"]
                            }
                        ].map((plan, i) => (
                            <motion.div
                                key={i}
                                variants={cardVariants}
                                className={`p-6 rounded-xl border ${plan.highlight ? 'bg-surface/80 border-neonBlue/30 shadow-lg shadow-neonBlue/10 relative overflow-hidden' : 'bg-surface/30 border-white/5'} flex flex-col`}
                            >
                                {plan.highlight && (
                                    <div className="absolute top-0 right-0 bg-neonBlue text-black text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">
                                        Ajánlott
                                    </div>
                                )}
                                <div className="mb-4">
                                    <h4 className="text-xl font-bold text-white">{plan.name}</h4>
                                </div>
                                <div className="mb-6">
                                    <div className="text-2xl font-bold text-white">{plan.price}</div>
                                    <div className="text-base text-muted">-tól</div>
                                </div>
                                <ul className="space-y-3 mb-6 flex-1">
                                    {plan.feats.map((feat, fi) => (
                                        <li key={fi} className="flex items-start gap-2 text-base text-muted">
                                            <Check className="w-4 h-4 text-neonBlue mt-0.5 shrink-0" />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button href="#kapcsolat" variant={plan.highlight ? 'primary' : 'secondary'} size="sm" className="w-full">
                                    Érdekel
                                </Button>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.p variants={cardVariants} className="text-center text-sm text-muted2 mt-6 max-w-2xl mx-auto">
                        *A csomagárak a kivitelezési díjat jelölik. A chatbot működésének havi fenntartási és AI használati díja van, amelyet az igények alapján egyeztetünk.
                    </motion.p>
                </motion.div>

                {/* --- MAINTENANCE PRICING --- */}
                <motion.div
                    className="mt-20 lg:mt-32"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.div variants={cardVariants} className="text-center max-w-2xl mx-auto mb-12">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Karbantartás & Stabilitás</h3>
                        <p className="text-muted">Hogy weboldalad hosszú távon is gyors és biztonságos maradjon.</p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
                        variants={containerVariants}
                    >
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
                            <motion.div
                                key={i}
                                variants={cardVariants}
                                className={`p-6 rounded-xl border ${plan.highlight ? 'bg-surface/80 border-neonPurple/30 relative overflow-hidden' : 'bg-surface/30 border-white/5'} flex flex-col`}
                            >
                                {plan.highlight && (
                                    <div className="absolute top-0 right-0 bg-neonPurple text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">
                                        Ajánlott
                                    </div>
                                )}
                                <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-2xl font-bold text-white">{plan.price}</span>
                                    <span className="text-base text-muted">{plan.per}</span>
                                </div>
                                <ul className="space-y-3 mb-6 flex-1">
                                    {plan.feats.map((feat, fi) => (
                                        <li key={fi} className="flex items-start gap-2 text-base text-muted">
                                            <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? 'text-neonPurple' : 'text-zinc-500'}`} />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button href="#kapcsolat" variant="secondary" size="sm" className="w-full">
                                    Kiválasztom
                                </Button>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.p
                    className="text-center text-muted2 text-base mt-12"
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


