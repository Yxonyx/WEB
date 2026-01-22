import { Button } from '../ui/Button';
import { Container } from '../Container';
import { Section } from '../Section';
import { motion } from 'framer-motion';
import { RetroTerminal3D } from '../ui/RetroTerminal3D';

export const Hero = () => {
    return (
        <Section id="hero" className="pt-32 pb-20 min-h-screen flex items-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neonBlue/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neonPurple/10 rounded-full blur-[100px] pointer-events-none" />

            <Container className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center lg:text-left"
                >
                    <div className="mb-6">
                        <span className="text-sm font-bold font-mono text-neonBlue uppercase tracking-wider">
                            &lt; Web + SEO + GEO &gt;<span className="animate-pulse">_</span>
                        </span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
                        Egyedi weboldal <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">
                            fejlesztés
                        </span> & karbantartás
                    </h1>

                    <p className="text-lg text-muted mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0">
                        Weboldalad ott jelenik meg, ahol a döntések születnek: a Google keresésekben és az AI-alapú találatokban.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <Button href="#kapcsolat" variant="primary">
                            Beszéljünk
                        </Button>
                        <Button href="#szolgaltatasok" variant="secondary">
                            Szolgáltatások
                        </Button>
                    </div>
                </motion.div>

                {/* Visual Content - Geometric Composition */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="relative hidden lg:block h-[500px]"
                >
                    {/* 3D Retro Terminal - No Frame */}
                    <div className="absolute top-10 left-10 right-10 bottom-10 z-10">
                        <RetroTerminal3D />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-neonBlue rounded-tr-3xl opacity-50" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-neonPurple rounded-bl-3xl opacity-50" />

                    {/* Floating Crosses */}
                    <div className="absolute top-1/4 -left-8 text-neonBlue/30 text-4xl font-mono animate-bounce">+</div>
                    <div className="absolute bottom-1/4 -right-8 text-neonPurple/30 text-4xl font-mono animate-bounce delay-700">+</div>
                </motion.div>
            </Container>
        </Section>
    );
};
