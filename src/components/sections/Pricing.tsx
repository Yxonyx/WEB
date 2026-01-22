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
