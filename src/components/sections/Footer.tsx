
import { Container } from '../Container';
import { Instagram, Facebook, Linkedin, QrCode, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import Link from 'next/link';

// Custom TikTok icon since lucide doesn't have it
const TikTokIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

export const Footer = () => {
    const { t, language } = useLanguage();
    const currentLang = language || 'hu';

    const socialLinks = [
        { icon: Instagram, href: "https://www.instagram.com/cyberlabsweb/", label: "Instagram" },
        { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61586980628114", label: "Facebook" },
        { icon: Linkedin, href: "https://www.linkedin.com/company/cyberlabs-web", label: "LinkedIn" },
        { icon: TikTokIcon, href: "https://tiktok.com/@cyberlabsweb", label: "TikTok" },
    ];

    return (
        <footer className="relative -mt-px overflow-hidden pb-5 pt-8 sm:pb-8 sm:pt-12">
            {/* High quality image layer, kept in the same rendering mode as the hero */}
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
                        className="h-full w-full scale-[1.09] object-cover object-center"
                    />
                </picture>
            </div>
            <div className="pointer-events-none absolute inset-0 z-[1] bg-[#0E7CDC]/30" />
            <div className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(42,154,232,0.10)_38%,rgba(14,124,220,0.30)_100%)]" />
            {/* Top hairline + soft top fade to blend with the page above */}
            <div className="pointer-events-none absolute inset-x-0 -top-px z-[3] h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="pointer-events-none absolute top-0 left-0 right-0 z-[3] h-24 bg-gradient-to-b from-[#0E7CDC]/55 to-transparent" />
            <div className="pointer-events-none absolute inset-0 z-[4] bg-[radial-gradient(circle_at_6%_2%,rgba(255,246,219,0.34),transparent_24%),radial-gradient(circle_at_88%_28%,rgba(255,255,255,0.26),transparent_18%)]" />

            <Container className="relative z-10">
                {/* Top row: brand + tagline + socials */}
                <div className="mb-5 flex flex-col items-center text-center sm:mb-8">
                    <span className="mb-2 flex items-baseline font-hero text-xl font-extrabold leading-none tracking-tight drop-shadow-[0_4px_16px_rgba(0,82,166,0.34)] sm:mb-3 sm:text-3xl">
                        <span className="text-white">Cyber</span>
                        <span className="text-white/85">Labs</span>
                        <span className="text-white ml-1.5">Web</span>
                    </span>

                    <p className="mb-4 max-w-2xl text-xs font-semibold leading-relaxed text-white/90 sm:mb-5 sm:text-base">
                        Modern weboldalak és AI-vezérelt megoldások a Te vállalkozásodnak.
                    </p>

                    <div className="flex items-center justify-center gap-2.5 sm:gap-3">
                        {socialLinks.map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="group flex h-9 w-9 items-center justify-center rounded-xl border-2 border-white/50 bg-white/[0.18] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/80 hover:bg-white/[0.28] sm:h-10 sm:w-10"
                            >
                                <social.icon className="h-3.5 w-3.5 text-white/90 transition-colors duration-300 group-hover:text-white sm:h-4 sm:w-4" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Tools row — pill chips */}
                <div className="mb-5 flex flex-wrap items-center justify-center gap-2 sm:mb-8 sm:gap-3">
                    <Link
                        href={`/${currentLang}/tools/qr`}
                        className="group inline-flex items-center gap-2 rounded-full border-2 border-white/50 bg-white/[0.18] px-3.5 py-2 text-white/90 transition-all duration-300 hover:border-white/80 hover:bg-white/[0.28] hover:text-white sm:gap-2.5 sm:px-5 sm:py-3"
                    >
                        <QrCode className="h-4 w-4 opacity-90 group-hover:opacity-100 sm:h-5 sm:w-5" />
                        <span className="text-xs font-bold sm:text-sm">Ingyenes QR generátor</span>
                    </Link>
                    <Link
                        href={`/${currentLang}/tools/image-compressor`}
                        className="group inline-flex items-center gap-2 rounded-full border-2 border-white/50 bg-white/[0.18] px-3.5 py-2 text-white/90 transition-all duration-300 hover:border-white/80 hover:bg-white/[0.28] hover:text-white sm:gap-2.5 sm:px-5 sm:py-3"
                    >
                        <ImageIcon className="h-4 w-4 opacity-90 group-hover:opacity-100 sm:h-5 sm:w-5" />
                        <span className="text-xs font-bold sm:text-sm">Ingyenes képtömörítés</span>
                    </Link>
                </div>

                {/* Divider with center label */}
                <div className="relative mb-5 sm:mb-8">
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    <div className="relative flex justify-center">
                        <span className="rounded-full border border-white/35 bg-white/[0.16] px-5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-white/90 backdrop-blur-sm">
                            Kapcsolat
                        </span>
                    </div>
                </div>

                {/* Contact row */}
                <div className="mb-6 flex flex-col items-center justify-center gap-2 text-center sm:mb-12 sm:flex-row sm:gap-8">
                    <span className="text-sm font-semibold text-white/90 sm:text-base">{t('footer.call')}</span>
                    <a
                        href="tel:+36703304445"
                        className="font-mono text-sm font-bold text-white transition-colors hover:text-[#FFF2C6] sm:text-base"
                    >
                        +36 70 330 4445
                    </a>
                    <span className="hidden sm:inline text-white/15">•</span>
                    <a
                        href="mailto:contact@cyberlabsweb.com"
                        className="font-mono text-sm font-bold text-white transition-colors hover:text-[#FFF2C6] sm:text-base"
                    >
                        contact@cyberlabsweb.com
                    </a>
                </div>

                {/* Bottom row */}
                <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.18] pt-5 text-xs font-semibold sm:flex-row sm:gap-4 sm:pt-7 sm:text-sm">
                    <div className="text-white/82">
                        &copy; {new Date().getFullYear()} CyberLabs Web. {t('footer.rights')}
                    </div>
                    <div className="flex items-center gap-4 text-white/86">
                        <a href="/aszf.html" className="transition-colors hover:text-[#FFF2C6]">
                            {t('footer.terms')}
                        </a>
                        <span className="text-white/15">•</span>
                        <a href="/adatvedelem.html" className="transition-colors hover:text-[#FFF2C6]">
                            {t('footer.privacy')}
                        </a>
                    </div>
                </div>

                {/* SEO city list — subtle */}
                <div className="mt-5 hidden text-[10px] text-white/42 text-center font-mono leading-relaxed max-w-4xl mx-auto select-none sm:mt-8 sm:block">
                    <span className="block mb-1.5 opacity-70 tracking-[0.2em] uppercase">Kiemelt területek</span>
                    Budapest • Pest megye • Debrecen • Szeged • Miskolc • Pécs • Győr • Nyíregyháza • Kecskemét • Székesfehérvár • Szombathely • Érd • Szolnok • Tatabánya • Sopron • Kaposvár • Veszprém • Békéscsaba • Zalaegerszeg • Eger • Nagykanizsa
                </div>
            </Container>
        </footer>
    );
};
