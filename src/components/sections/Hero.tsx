import { Button } from '../ui/Button';
import { Container } from '../Container';
import { Section } from '../Section';


import { useLanguage } from '../../context/LanguageContext';

import { SplineScene } from '../ui/splite';

export const Hero = () => {
    const { t } = useLanguage();


    return (
        <Section
            id="hero"
            className="min-h-screen flex items-center py-20"
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
                                alt="CyberLabs Web - Professzionális weboldal készítés háttér"
                                width={1880}
                                height={914}
                                decoding="async"
                                fetchPriority="high"
                                className="w-full h-full object-cover"
                            />
                        </picture>
                        <div className="absolute inset-0 bg-bgDeep/30 z-10" />
                    </div>



                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-hero-gradient pointer-events-none z-[5]" />

                    {/* Complex Orbs - Desktop Only */}
                    <div className="hidden lg:block absolute inset-0 z-[6] overflow-hidden pointer-events-none" style={{ contain: 'layout style' }}>
                        <div
                            className="absolute -top-1/4 -right-1/4 w-[80vw] h-[80vh] will-change-transform"
                            style={{
                                background: 'radial-gradient(ellipse at center, rgba(79,138,255,0.08) 0%, rgba(79,138,255,0.02) 30%, transparent 60%)',
                                transform: 'translateZ(0)',
                            }}
                        />
                        <div
                            className="absolute -bottom-1/4 -left-1/4 w-[80vw] h-[80vh] will-change-transform"
                            style={{
                                background: 'radial-gradient(ellipse at center, rgba(155,114,255,0.18) 0%, rgba(155,114,255,0.04) 30%, transparent 60%)',
                                transform: 'translateZ(0)',
                            }}
                        />
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] opacity-30 will-change-transform"
                            style={{
                                background: 'radial-gradient(ellipse at center, rgba(155,114,255,0.2) 0%, transparent 50%)',
                                transform: 'translateZ(0)',
                            }}
                        />
                    </div>

                    {/* Mobile Simplified Background */}
                    <div className="lg:hidden absolute inset-0 z-[6] pointer-events-none overflow-hidden">
                        <div
                            className="absolute top-[-20%] right-[-20%] w-[100%] h-[60%] will-change-transform"
                            style={{
                                background: 'radial-gradient(circle, rgba(79,138,255,0.04) 0%, transparent 60%)',
                                transform: 'translateZ(0)',
                            }}
                        />
                        <div
                            className="absolute bottom-[-10%] left-[-20%] w-[100%] h-[60%] will-change-transform"
                            style={{
                                background: 'radial-gradient(circle, rgba(155,114,255,0.1) 0%, transparent 60%)',
                                transform: 'translateZ(0)',
                            }}
                        />
                    </div>
                </>
            }
        >

            <Container className="relative z-10 h-full flex flex-col justify-center">
                {/* === MOBILE HERO LAYOUT === */}
                <div className="flex flex-col lg:hidden gap-6 pt-0">
                    {/* Mobile Text */}
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 mb-4 justify-center">
                            <span className="text-xs font-mono text-neonBlue uppercase tracking-widest">{t('hero.tag')}</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl font-bold leading-[1.1] mb-4 tracking-tight font-display">
                            <span>{t('hero.title_prefix_1')}</span>
                            <br className="sm:hidden" />
                            <span>{t('hero.title_prefix_2')}</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue via-neonBlueDark to-neonHarvest animate-gradient-shift">
                                {t('hero.title_gradient')}
                            </span><span> &</span>
                            <br />
                            <span>{t('hero.title_suffix')}</span>
                        </h1>

                        <p className="text-base sm:text-lg mb-3 leading-relaxed font-display">
                            <span className="text-neonBlue italic">{t('hero.subtitle_1')}</span>{' '}
                            <span className="text-white font-medium">{t('hero.subtitle_highlight')}</span>
                        </p>
                        <p className="text-sm sm:text-base text-muted mb-6 leading-relaxed max-w-md mx-auto">
                            {t('hero.subtitle_desc_1')}
                            <span className="text-neonBlue">{t('hero.subtitle_google')}</span>
                            {t('hero.subtitle_desc_2')}
                            <span className="text-neonPurple">{t('hero.subtitle_ai')}</span>.
                        </p>

                        <div className="flex flex-wrap gap-3 justify-center">
                            <Button href="#kapcsolat" variant="primary">
                                {t('hero.cta_primary')}
                            </Button>
                            <Button href="#arazas" variant="secondary">
                                {t('hero.cta_secondary')}
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Robot */}
                    <div className="relative w-full h-[350px] sm:h-[420px] -mb-20">
                        {/* Robot */}
                        <div className="absolute inset-0 z-10">
                            <SplineScene
                                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                                className="w-full h-full"
                            />
                        </div>
                        {/* Portal frame */}
                        <div className="absolute top-6 bottom-0 left-1/2 -translate-x-1/2 w-[55%] z-20 pointer-events-none">
                            <div className="w-full h-full rounded-t-2xl border-[2px] border-b-0"
                                style={{
                                    borderImage: 'linear-gradient(180deg, rgba(77,148,255,0.8), rgba(59,130,246,0.5)) 1',
                                    borderImageSlice: 1,
                                    boxShadow: '0 0 30px rgba(77,148,255,0.2), 0 0 60px rgba(59,130,246,0.1)'
                                }} />
                        </div>
                    </div>
                </div>

                {/* === DESKTOP HERO LAYOUT === */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-center">
                    {/* Text Content */}
                    <div className="max-w-2xl text-left">
                        <div className="inline-flex items-center gap-2 mb-6 justify-start">
                            <span className="text-sm font-mono text-neonBlue uppercase tracking-widest">{t('hero.tag')}</span>
                        </div>

                        <h1 className="text-7xl font-bold leading-[1.1] mb-6 tracking-tight font-display">
                            <span>{t('hero.title_prefix_1')}</span>
                            <span>{t('hero.title_prefix_2')}</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue via-neonBlueDark to-neonHarvest animate-gradient-shift">
                                {t('hero.title_gradient')}
                            </span><span> &</span>
                            <br />
                            <span>{t('hero.title_suffix')}</span>
                        </h1>

                        <p className="text-2xl mb-6 leading-relaxed font-display">
                            <span className="text-neonBlue italic">{t('hero.subtitle_1')}</span>{' '}
                            <span className="text-white font-medium">{t('hero.subtitle_highlight')}</span>
                        </p>
                        <p className="text-xl text-muted mb-10 leading-relaxed max-w-lg">
                            {t('hero.subtitle_desc_1')}
                            <span className="text-neonBlue">{t('hero.subtitle_google')}</span>
                            {t('hero.subtitle_desc_2')}
                            <span className="text-neonPurple">{t('hero.subtitle_ai')}</span>.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-start">
                            <Button href="#kapcsolat" variant="primary">
                                {t('hero.cta_primary')}
                            </Button>
                            <Button href="#arazas" variant="secondary">
                                {t('hero.cta_secondary')}
                            </Button>
                        </div>
                    </div>

                    {/* Visual Content - 3D Spline Robot */}
                    <div className="relative h-[500px]">
                        {/* Robot layer */}
                        <div className="absolute inset-0 z-10">
                            <SplineScene
                                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                                className="w-full h-full"
                            />
                        </div>
                        {/* Portal frame - ON TOP of robot, transparent inside */}
                        <div className="absolute top-10 bottom-0 left-1/2 -translate-x-1/2 w-[50%] z-20 pointer-events-none">
                            <div className="w-full h-full rounded-t-2xl border-[3px] border-b-0 animate-pulse-glow"
                                style={{
                                    borderImage: 'linear-gradient(180deg, rgba(77,148,255,0.8), rgba(59,130,246,0.5)) 1',
                                    borderImageSlice: 1,
                                    boxShadow: '0 0 40px rgba(77,148,255,0.3), 0 0 80px rgba(59,130,246,0.15), inset 0 0 40px rgba(77,148,255,0.08)'
                                }} />
                        </div>
                        {/* Light beam from top-right */}
                        <div className="absolute -top-20 -right-20 w-[500px] h-[800px] z-30 pointer-events-none"
                            style={{
                                background: 'linear-gradient(220deg, rgba(77,148,255,0.3) 0%, rgba(77,148,255,0.08) 15%, transparent 40%)',
                                transform: 'rotate(-10deg)',
                            }} />
                    </div>
                </div>
            </Container>
        </Section>
    );
};


