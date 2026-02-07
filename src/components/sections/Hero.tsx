import { Button } from '../ui/Button';
import { Container } from '../Container';
import { Section } from '../Section';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

import { CssComputer } from '../ui/CssComputer';

export const Hero = () => {
    const { t } = useLanguage();
    const [isDesktop, setIsDesktop] = useState(() => typeof window !== 'undefined' ? window.innerWidth >= 1024 : false);

    useEffect(() => {
        const checkMobile = () => {
            setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
        };

        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <Section id="hero" className="min-h-[100dvh] flex items-center py-20" fullHeight withOrbs>
            {/* Mesh gradient background */}
            <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />

            {/* Elegant aurora gradient orbs */}
            <div
                className="absolute -top-1/4 -right-1/4 w-[80vw] h-[80vh] pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(0,240,255,0.25) 0%, rgba(0,240,255,0.05) 40%, transparent 70%)',
                    filter: 'blur(60px)'
                }}
            />
            <div
                className="absolute -bottom-1/4 -left-1/4 w-[80vw] h-[80vh] pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(189,0,255,0.25) 0%, rgba(189,0,255,0.05) 40%, transparent 70%)',
                    filter: 'blur(60px)'
                }}
            />
            {/* Center subtle mix */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] pointer-events-none opacity-30"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.3) 0%, transparent 60%)',
                    filter: 'blur(80px)'
                }}
            />

            {/* Additional decorative orb - Desktop ONLY */}{/* 
            {isDesktop && (
                <motion.div
                    className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full pointer-events-none opacity-30"
                    style={{
                        background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)',
                        filter: 'blur(50px)'
                    }}
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -80, 0],
                    }}
                    transition={{
                        duration: 20,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                />
            )}
             */}

            <Container className="relative z-10 h-full flex flex-col justify-center">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-2xl text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 mb-6 justify-center lg:justify-start">
                            <span className="text-sm font-mono text-neonBlue uppercase tracking-widest">{t('hero.tag')}</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
                            <span className="text-white">{t('hero.title_prefix')}</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple animate-gradient-shift">
                                {t('hero.title_gradient')}
                            </span><span className="text-white"> &</span>
                            <br />
                            <span className="text-white">{t('hero.title_suffix')}</span>
                        </h1>

                        <p className="text-xl sm:text-2xl mb-6 leading-relaxed">
                            <span className="text-neonPurple italic">{t('hero.subtitle_1')}</span>
                            <span className="text-white font-medium">{t('hero.subtitle_highlight')}</span>
                        </p>
                        <p className="text-lg sm:text-xl text-muted mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
                            {t('hero.subtitle_desc_1')}
                            <span className="text-neonBlue">{t('hero.subtitle_google')}</span>
                            {t('hero.subtitle_desc_2')}
                            <span className="text-neonPurple">{t('hero.subtitle_ai')}</span>.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <Button href="#kapcsolat" variant="primary">
                                {t('hero.cta_primary')}
                            </Button>
                            <Button href="#arazas" variant="secondary">
                                {t('hero.cta_secondary')}
                            </Button>
                        </div>
                    </motion.div>

                    {/* Visual Content - Geometric Composition */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative hidden lg:block h-[500px]"
                    >
                        {/* CSS Computer - Monitor & Cable */}
                        <div className="absolute top-10 left-10 right-10 bottom-10 z-10 flex items-center justify-center">
                            <CssComputer />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-neonBlue rounded-tr-3xl opacity-50" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-neonPurple rounded-bl-3xl opacity-50" />

                        {/* Floating Crosses */}
                        <div className="absolute top-1/4 -left-8 text-neonBlue/30 text-4xl font-mono animate-bounce">+</div>
                        <div className="absolute bottom-1/4 -right-8 text-neonPurple/30 text-4xl font-mono animate-bounce delay-700">+</div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
};


