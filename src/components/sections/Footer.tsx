
import { Container } from '../Container';
import { Instagram, Facebook, Linkedin, QrCode, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import Link from 'next/link';

// Custom TikTok icon since lucide doesn't have it
const TikTokIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className ?? 'h-6 w-6'}>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

export const Footer = () => {
    const { t, language } = useLanguage();
    const currentLang = language || 'hu';

    const socialLinks = [
        { icon: Instagram, href: "https://www.instagram.com/cyberlabsweb/", label: "Instagram", brandClass: "hover:text-[#F77737]" },
        { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61586980628114", label: "Facebook", brandClass: "hover:text-[#1877F2]" },
        { icon: Linkedin, href: "https://www.linkedin.com/company/cyberlabs-web", label: "LinkedIn", brandClass: "hover:text-[#0A66C2]" },
        { icon: TikTokIcon, href: "https://tiktok.com/@cyberlabsweb", label: "TikTok", brandClass: "hover:text-[#EE1D52]" },
    ];

    return (
        <footer className="footer-sky relative overflow-hidden -mt-px pt-8 sm:pt-10">
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <picture>
                    <source media="(max-width: 767px)" srcSet="/images/hero-bg-mobile-soft.webp" />
                    <img
                        src="/images/hero-footer-bg-soft.webp"
                        alt=""
                        width={1774}
                        height={887}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-[center_20%] brightness-[0.82] saturate-[0.95]"
                    />
                </picture>
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-10 bg-gradient-to-b from-[#06437D]/85 to-transparent sm:h-14" />
            <div className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(180deg,rgba(6,67,125,0.58)_0%,rgba(6,67,125,0.42)_18%,rgba(6,67,125,0.32)_100%)]" />
            <div className="pointer-events-none absolute inset-0 z-[3] bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(14,124,220,0.08)_38%,rgba(6,67,125,0.28)_100%)]" />
            <div className="pointer-events-none absolute inset-0 z-[4] bg-[radial-gradient(circle_at_6%_8%,rgba(255,246,219,0.14),transparent_26%),radial-gradient(circle_at_88%_22%,rgba(255,255,255,0.10),transparent_20%)]" />

            <Container className="relative z-10">
                {/* Brand + tagline + socials */}
                <div className="mb-6 flex flex-col items-center text-center sm:mb-10">
                    <div className="mb-2.5 inline-flex flex-col items-center sm:mb-3">
                        <span className="flex items-baseline font-hero text-2xl font-extrabold leading-none tracking-tight drop-shadow-[0_4px_16px_rgba(0,82,166,0.34)] sm:text-4xl">
                            <span className="text-white">Cyber</span>
                            <span className="text-white/88">Labs</span>
                            <span className="ml-1.5 text-white">Web</span>
                        </span>
                        <span className="mt-1 text-center font-mono text-[9px] uppercase tracking-[0.22em] text-white/72 sm:text-[10px]">
                            WEB DEVELOPMENT
                        </span>
                    </div>

                    <p className="mb-5 max-w-2xl text-sm font-semibold leading-relaxed text-white/92 sm:mb-6 sm:text-base">
                        {t('footer.tagline')}
                    </p>

                    <div className="flex items-center justify-center">
                        {socialLinks.map((social, i) => (
                            <span key={social.label} className="flex items-center">
                                {i > 0 && <div className="mx-5 h-4 w-px bg-white/55 sm:mx-6 sm:h-5" />}
                                <a
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className={`text-white transition-all duration-300 hover:-translate-y-0.5 ${social.brandClass}`}
                                >
                                    <social.icon className="h-7 w-7 sm:h-8 sm:w-8" />
                                </a>
                            </span>
                        ))}
                    </div>
                </div>

                {/* Tools */}
                <div className="mb-7 flex flex-col items-center gap-3 sm:mb-10 sm:gap-3.5">
                    <Link
                        href={`/${currentLang}/tools/qr`}
                        className="inline-flex items-center gap-2.5 text-sm font-bold text-white transition-colors hover:text-[#FFF2C6] sm:text-base"
                    >
                        <QrCode className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
                        <span>{t('footer.qr_link')}</span>
                    </Link>
                    <div className="h-px w-10 bg-white/55" />
                    <Link
                        href={`/${currentLang}/tools/image-compressor`}
                        className="inline-flex items-center gap-2.5 text-sm font-bold text-white transition-colors hover:text-[#FFF2C6] sm:text-base"
                    >
                        <ImageIcon className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
                        <span>{t('footer.compressor_link')}</span>
                    </Link>
                </div>

                {/* Kapcsolat divider */}
                <div className="relative mb-6 sm:mb-8">
                    <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                    <div className="relative flex justify-center">
                        <span className="rounded-full border border-white/40 bg-white/[0.14] px-5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-white/92 backdrop-blur-md sm:text-[11px]">
                            {t('contact.tag')}
                        </span>
                    </div>
                </div>

                {/* Contact */}
                <div className="mb-8 flex flex-col items-center gap-3 text-center sm:mb-10 sm:gap-3.5">
                    <a
                        href="tel:+36703304445"
                        className="font-mono text-sm font-extrabold text-white transition-colors hover:text-[#FFF2C6] sm:text-base"
                    >
                        +36 70 330 4445
                    </a>
                    <a
                        href="mailto:contact@cyberlabsweb.com"
                        className="font-mono text-sm font-extrabold text-white transition-colors hover:text-[#FFF2C6] sm:text-base"
                    >
                        contact@cyberlabsweb.com
                    </a>
                </div>

                {/* SEO city list — desktop only */}
                <div className="mx-auto mb-8 hidden max-w-4xl select-none text-center font-mono text-[10px] leading-relaxed text-white/42 sm:mb-10 sm:block">
                    <span className="mb-1.5 block tracking-[0.2em] uppercase opacity-70">{t('footer.areas_label')}</span>
                    Budapest • Pest megye • Debrecen • Szeged • Miskolc • Pécs • Győr • Nyíregyháza • Kecskemét • Székesfehérvár • Szombathely • Érd • Szolnok • Tatabánya • Sopron • Kaposvár • Veszprém • Békéscsaba • Zalaegerszeg • Eger • Nagykanizsa
                </div>
            </Container>

            {/* Bottom bar — full width, darker strip */}
            <div className="relative z-10 border-t border-white/20 bg-[#06437D]/72 py-5 backdrop-blur-sm sm:py-6">
                <Container>
                    <div className="flex flex-col items-center gap-2.5 text-center text-xs font-semibold sm:text-sm">
                        <div className="text-white/88">
                            &copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> CyberLabs Web. {t('footer.rights')}
                        </div>
                        <div className="flex items-center gap-4 text-white/90">
                            <a href="/aszf.html" className="transition-colors hover:text-[#FFF2C6]">
                                {t('footer.terms')}
                            </a>
                            <span className="text-white/25">•</span>
                            <a href="/adatvedelem.html" className="transition-colors hover:text-[#FFF2C6]">
                                {t('footer.privacy')}
                            </a>
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    );
};
