import { Button } from '../ui/Button';
import { Container } from '../Container';
import { Section } from '../Section';


import { useLanguage } from '../../context/LanguageContext';

import { CssComputer } from '../ui/CssComputer';

export const Hero = () => {
    const { t } = useLanguage();


    return (
        <Section
            id="hero"
            className="min-h-[100dvh] flex items-center py-20"
            fullHeight
            withOrbs
            background={
                <>
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <picture>
                            <source media="(max-width: 768px)" srcSet="/images/hero-bg-v5.webp" />
                            <img
                                src="/images/hero-bg-v5.avif"
                                alt=""
                                width={1920}
                                height={1080}
                                fetchPriority="high"
                                className="w-full h-full object-cover"
                            />
                        </picture>
                        <div className="absolute inset-0 bg-black/60 z-10" />
                    </div>



                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-hero-gradient pointer-events-none z-[5]" />

                    {/* Complex Orbs - Desktop Only */}
                    <div className="hidden lg:block absolute inset-0 z-[6] overflow-hidden pointer-events-none">
                        <div
                            className="absolute -top-1/4 -right-1/4 w-[80vw] h-[80vh]"
                            style={{
                                background: 'radial-gradient(ellipse at center, rgba(0,240,255,0.25) 0%, rgba(0,240,255,0.05) 40%, transparent 70%)',
                                filter: 'blur(60px)'
                            }}
                        />
                        <div
                            className="absolute -bottom-1/4 -left-1/4 w-[80vw] h-[80vh]"
                            style={{
                                background: 'radial-gradient(ellipse at center, rgba(189,0,255,0.25) 0%, rgba(189,0,255,0.05) 40%, transparent 70%)',
                                filter: 'blur(60px)'
                            }}
                        />
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] opacity-30"
                            style={{
                                background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.3) 0%, transparent 60%)',
                                filter: 'blur(80px)'
                            }}
                        />
                    </div>

                    {/* Mobile Simplified Background */}
                    <div className="lg:hidden absolute inset-0 z-[6] pointer-events-none overflow-hidden">
                        <div
                            className="absolute top-[-20%] right-[-20%] w-[100%] h-[60%]"
                            style={{
                                background: 'radial-gradient(circle, rgba(0,240,255,0.1) 0%, transparent 70%)',
                                filter: 'blur(60px)',
                                transform: 'translateZ(0)'
                            }}
                        />
                        <div
                            className="absolute bottom-[-10%] left-[-20%] w-[100%] h-[60%]"
                            style={{
                                background: 'radial-gradient(circle, rgba(189,0,255,0.1) 0%, transparent 70%)',
                                filter: 'blur(60px)',
                                transform: 'translateZ(0)'
                            }}
                        />
                    </div>
                </>
            }
        >

            <Container className="relative z-10 h-full flex flex-col justify-center">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Text Content */}
                    <div className="max-w-2xl text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 mb-6 justify-center lg:justify-start">
                            <span className="text-sm font-mono text-neonBlue uppercase tracking-widest">{t('hero.tag')}</span>
                        </div>

                        <h1 className="text-[3.15rem] sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
                            <span className="text-white">{t('hero.title_prefix_1')}</span>
                            <br className="sm:hidden" />
                            <span className="text-white">{t('hero.title_prefix_2')}</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple animate-gradient-shift">
                                {t('hero.title_gradient')}
                            </span><span className="text-white"> &</span>
                            <br />
                            <span className="text-white">{t('hero.title_suffix')}</span>
                        </h1>

                        <p className="text-lg sm:text-2xl mb-6 leading-relaxed">
                            <span className="text-neonBlue italic block sm:inline">{t('hero.subtitle_1')}</span>
                            <span className="text-white font-medium block sm:inline">{t('hero.subtitle_highlight')}</span>
                        </p>
                        <p className="text-base sm:text-xl text-muted mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
                            {t('hero.subtitle_desc_1')}
                            <span className="text-neonBlue">{t('hero.subtitle_google')}</span>
                            <br className="sm:hidden" />
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
                    </div>

                    {/* Visual Content - Geometric Composition */}
                    <div className="relative hidden lg:block h-[500px]">
                        {/* CSS Computer - Monitor & Cable */}
                        <div className="absolute top-10 left-10 right-10 bottom-10 z-10 flex items-center justify-center">
                            <CssComputer />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-neonBlue rounded-tr-3xl opacity-50" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-neonPurple rounded-bl-3xl opacity-50" />


                    </div>
                </div>
            </Container>
        </Section>
    );
};


