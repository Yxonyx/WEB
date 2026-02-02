import { Button } from '../ui/Button';
import { Container } from '../Container';
import { Section } from '../Section';
import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Lazy load the 3D component to improve initial page load speed
const RetroTerminal3D = lazy(() => import('../ui/RetroTerminal3D').then(module => ({ default: module.RetroTerminal3D })));

export const Hero = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    return (
        <Section id="hero" className="pt-32 pb-20 min-h-screen flex items-center relative overflow-hidden">
            {/* Background Elements - radial gradients for iOS performance (no blur filter needed) */}
            <div
                className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-30"
                style={{
                    background: 'radial-gradient(circle, rgba(0,240,255,0.4) 0%, rgba(0,240,255,0.1) 40%, transparent 70%)'
                }}
            />
            <div
                className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none opacity-30"
                style={{
                    background: 'radial-gradient(circle, rgba(189,0,255,0.4) 0%, rgba(189,0,255,0.1) 40%, transparent 70%)'
                }}
            />

            <Container className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center lg:text-left"
                >
                    <div className="mb-6">
                        <span className="text-base font-bold font-mono text-neonBlue uppercase tracking-wider">
                            &lt; Web + SEO + GEO &gt;<span className="animate-pulse">_</span>
                        </span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
                        Egyedi weboldal <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">
                            fejlesztés
                        </span> & karbantartás
                    </h1>

                    <div className="text-lg md:text-xl text-muted mb-10 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-display font-light">
                        <p className="mb-4">
                            <span className="text-neonPurple">Modern, mesterséges intelligencia</span> alapú megoldások.
                        </p>
                        <p className="text-white">
                            Weboldalad ott jelenik meg, ahol a döntések születnek: a <span className="text-neonBlue">Google keresésekben</span> és az <span className="text-neonPurple">AI-alapú találatokban</span>.
                        </p>
                    </div>

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
                        {isDesktop && (
                            <Suspense fallback={
                                <div className="w-full h-full rounded-xl bg-white/5 animate-pulse border border-white/10 flex items-center justify-center">
                                    <span className="text-neonBlue font-mono text-sm">System Initializing...</span>
                                </div>
                            }>
                                <RetroTerminal3D />
                            </Suspense>
                        )}
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
