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
            className="min-h-screen flex items-center overflow-hidden py-20 lg:py-24"
            fullHeight
            background={
                <>
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <picture>
                            <source media="(max-width: 767px)" srcSet="/images/hero-bg-mobile.webp" />
                            <img
                                src="/images/hero-bg-desktop.webp"
                                alt="CyberLabs Web - Professzionális weboldal készítés háttér"
                                width={1774}
                                height={887}
                                decoding="async"
                                fetchPriority="high"
                                className="w-full h-full object-cover object-center"
                            />
                        </picture>
                        <div className="absolute inset-0 z-10 bg-sky-500/10" />
                        <div className="absolute inset-0 z-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(42,154,232,0.05)_38%,rgba(8,81,152,0.14)_100%)]" />
                    </div>

                    <div className="pointer-events-none absolute inset-0 z-[4] bg-[radial-gradient(circle_at_6%_2%,rgba(255,246,219,0.46),transparent_24%),radial-gradient(circle_at_88%_28%,rgba(255,255,255,0.34),transparent_18%),linear-gradient(180deg,rgba(11,101,180,0)_0%,rgba(8,83,155,0.18)_100%)]" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-1/3 bg-gradient-to-t from-[#66BDEC]/20 to-transparent" />
                </>
            }
        >

            <Container className="relative z-10">
                {/* Desktop: own widescreen composition */}
                <div className="hidden min-h-[calc(100vh-7rem)] grid-cols-[minmax(0,1fr)_minmax(420px,0.82fr)] items-center gap-10 pt-10 lg:grid">
                    <div className="max-w-3xl text-left">
                        <div className="mb-6 font-mono text-base font-medium uppercase text-white drop-shadow-[0_2px_10px_rgba(0,93,180,0.35)]">
                            &lt; Web + SEO + GEO &gt;
                        </div>

                        <h1 className="mb-6 max-w-4xl bg-none font-hero text-[4.25rem] font-extrabold leading-[1.02] text-white drop-shadow-[0_7px_20px_rgba(0,93,180,0.28)] xl:text-[5.15rem]">
                            <span>{t('hero.title_prefix_1')}</span>
                            <span>{t('hero.title_prefix_2')}</span>
                            <br />
                            <span>{t('hero.title_gradient')}</span>
                            <span> &</span>
                            <br />
                            <span>{t('hero.title_suffix')}</span>
                        </h1>

                        <p className="mb-4 max-w-2xl text-2xl font-medium leading-snug text-white drop-shadow-[0_3px_12px_rgba(0,86,170,0.28)] xl:text-3xl">
                            <span>{t('hero.subtitle_1')}</span>{' '}
                            <span>{t('hero.subtitle_highlight')}</span>
                        </p>
                        <p className="mb-8 max-w-2xl text-lg font-medium leading-relaxed text-white/95 drop-shadow-[0_2px_10px_rgba(0,70,150,0.25)] xl:text-xl">
                            {t('hero.subtitle_desc_1')}
                            <strong className="font-bold text-white">{t('hero.subtitle_google')}</strong>
                            {t('hero.subtitle_desc_2')}
                            <strong className="font-bold text-white">{t('hero.subtitle_ai')}</strong>.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button
                                href="#kapcsolat"
                                variant="primary"
                                className="min-h-14 min-w-[190px] rounded-full border border-white/70 bg-[#FFD66A] px-8 py-3 font-hero text-base font-bold text-[#06437D] shadow-[0_14px_30px_rgba(255,203,85,0.28),inset_0_1px_0_rgba(255,255,255,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFE18A] hover:text-[#06437D] hover:shadow-[0_18px_40px_rgba(255,203,85,0.38)]"
                            >
                                {t('hero.cta_primary')}
                            </Button>
                            <Button
                                href="#arazas"
                                variant="secondary"
                                className="min-h-14 min-w-[250px] rounded-full border-2 border-white/85 bg-white/10 px-8 py-3 font-hero text-base font-bold text-white shadow-[0_12px_28px_rgba(0,91,174,0.18),inset_0_1px_0_rgba(255,255,255,0.3)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/20 hover:text-white"
                            >
                                {t('hero.cta_secondary')}
                            </Button>
                        </div>
                    </div>

                    <div className="relative h-[600px] xl:h-[660px]">
                        <div className="absolute bottom-8 left-1/2 top-8 w-[78%] -translate-x-1/2 rounded-[2.35rem] border border-white/60 bg-white/[0.07] shadow-[0_0_0_1px_rgba(255,255,255,0.18),0_24px_70px_rgba(0,106,190,0.24),inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-[2px]" />
                        <div className="absolute bottom-16 left-1/2 top-16 w-[64%] -translate-x-1/2 rounded-[1.9rem] border border-white/35" />
                        <div className="absolute inset-0 z-10">
                            <SplineScene
                                scene="/robot-scene.splinecode"
                                className="h-full w-full"
                            />
                        </div>
                        <div className="pointer-events-none absolute inset-x-24 bottom-12 z-20 h-24 rounded-[50%] bg-white/20 blur-2xl" />
                    </div>
                </div>

                {/* Mobile: own vertical poster composition */}
                <div className="flex min-h-[calc(100vh-5.5rem)] flex-col items-center justify-center pt-8 text-center lg:hidden">
                    <div className="mb-5 font-mono text-sm font-medium uppercase text-white drop-shadow-[0_2px_10px_rgba(0,93,180,0.35)] sm:text-base md:text-lg">
                        &lt; Web + SEO + GEO &gt;
                    </div>

                    <h1 className="mb-5 max-w-5xl bg-none font-hero text-[2.35rem] font-extrabold leading-[1.03] text-white drop-shadow-[0_6px_18px_rgba(0,93,180,0.26)] sm:text-[4.4rem] lg:text-[5.7rem] xl:text-[6.5rem]">
                        <span>{t('hero.title_prefix_1')}</span>
                        <br className="sm:hidden" />
                        <span>{t('hero.title_prefix_2')}</span>
                        <br />
                        <span>{t('hero.title_gradient')}</span>
                        <span> &</span>
                        <br />
                        <span>{t('hero.title_suffix')}</span>
                    </h1>

                    <p className="mb-3 max-w-3xl text-xl font-medium leading-relaxed text-white drop-shadow-[0_3px_12px_rgba(0,86,170,0.28)] sm:text-2xl md:text-3xl">
                        <span>{t('hero.subtitle_1')}</span>{' '}
                        <span>{t('hero.subtitle_highlight')}</span>
                    </p>
                    <p className="mb-7 max-w-2xl text-base font-medium leading-relaxed text-white/95 drop-shadow-[0_2px_10px_rgba(0,70,150,0.25)] sm:text-lg md:text-xl">
                        {t('hero.subtitle_desc_1')}
                        <strong className="font-bold text-white">{t('hero.subtitle_google')}</strong>
                        {t('hero.subtitle_desc_2')}
                        <strong className="font-bold text-white">{t('hero.subtitle_ai')}</strong>.
                    </p>

                    <div className="mb-8 flex w-full max-w-xl flex-col gap-4 sm:flex-row sm:justify-center">
                        <Button
                            href="#kapcsolat"
                            variant="primary"
                            className="min-h-14 rounded-full border border-white/70 bg-[#FFD66A] px-8 py-3 font-hero text-base font-bold text-[#06437D] shadow-[0_14px_30px_rgba(255,203,85,0.28),inset_0_1px_0_rgba(255,255,255,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFE18A] hover:text-[#06437D] hover:shadow-[0_18px_40px_rgba(255,203,85,0.38)]"
                        >
                            {t('hero.cta_primary')}
                        </Button>
                        <Button
                            href="#arazas"
                            variant="secondary"
                            className="min-h-14 rounded-full border-2 border-white/85 bg-white/10 px-8 py-3 font-hero text-base font-bold text-white shadow-[0_12px_28px_rgba(0,91,174,0.18),inset_0_1px_0_rgba(255,255,255,0.3)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/20 hover:text-white"
                        >
                            {t('hero.cta_secondary')}
                        </Button>
                    </div>

                    {/* Visual Content - 3D Spline Robot */}
                    <div className="relative h-[340px] w-full max-w-[560px] sm:h-[410px]">
                        <div className="absolute inset-x-8 bottom-4 top-2 rounded-[2rem] border border-white/65 bg-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.18),0_18px_60px_rgba(0,106,190,0.24),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-[2px] sm:inset-x-12" />
                        <div className="absolute inset-x-11 bottom-7 top-5 rounded-[1.7rem] border border-white/35 sm:inset-x-16" />
                        <div className="absolute inset-0 z-10">
                            <SplineScene
                                scene="/robot-scene.splinecode"
                                className="h-full w-full"
                            />
                        </div>
                        <div className="pointer-events-none absolute inset-x-16 bottom-5 z-20 h-20 rounded-[50%] bg-white/20 blur-2xl sm:inset-x-24" />
                    </div>
                </div>
            </Container>
        </Section>
    );
};
