
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
        <footer className="relative pt-16 pb-10 overflow-hidden">
            {/* Photo background — restored, with darkening overlay so the modern layout still reads */}
            <div
                className="pointer-events-none absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/philosophy-bg.webp')" }}
            />
            <div className="pointer-events-none absolute inset-0 bg-[#070B1C]/75" />
            {/* Top hairline + soft top fade to blend with the page above */}
            <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-neonBlue/30 to-transparent" />
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#070B1C] to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(99,168,255,0.10),transparent_60%)]" />
            <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[80%] h-[300px] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(143,125,255,0.10),transparent_60%)] blur-2xl" />

            <Container className="relative z-10">
                {/* Top row: brand + tagline + socials */}
                <div className="flex flex-col items-center text-center mb-10">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="relative w-10 h-10 shrink-0 flex items-center justify-center bg-black/30 lg:backdrop-blur-sm border border-neonBlue/40 rounded-md">
                            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-neonBlue/80" />
                            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-neonBlue/80" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-neonBlue/80" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-neonBlue/80" />
                            <div className="relative z-10 font-bold font-mono text-[17px] tracking-tight leading-none text-white drop-shadow-[0_0_6px_rgba(77,148,255,0.45)]">CL</div>
                        </div>
                        <span className="text-xl font-bold tracking-tight leading-none flex items-baseline">
                            <span className="text-white">Cyber</span>
                            <span className="text-neonBlue">Labs</span>
                            <span className="text-white ml-1.5">Web</span>
                        </span>
                    </div>

                    <p className="text-sm text-white/55 max-w-md mb-6">
                        Modern weboldalak és AI-vezérelt megoldások a Te vállalkozásodnak.
                    </p>

                    <div className="flex items-center justify-center gap-2.5">
                        {socialLinks.map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="group w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] hover:bg-neonBlue/15 hover:border-neonBlue/45 hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <social.icon className="w-[18px] h-[18px] text-white/65 group-hover:text-neonBlue transition-colors duration-300" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Tools row — pill chips */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
                    <Link
                        href={`/${currentLang}/tools/qr`}
                        className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] hover:bg-neonBlue/10 hover:border-neonBlue/40 text-white/75 hover:text-neonBlue transition-all duration-300"
                    >
                        <QrCode className="w-4 h-4 opacity-80 group-hover:opacity-100" />
                        <span className="font-medium text-[13px]">Ingyenes QR generátor</span>
                    </Link>
                    <Link
                        href={`/${currentLang}/tools/image-compressor`}
                        className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] hover:bg-neonBlue/10 hover:border-neonBlue/40 text-white/75 hover:text-neonBlue transition-all duration-300"
                    >
                        <ImageIcon className="w-4 h-4 opacity-80 group-hover:opacity-100" />
                        <span className="font-medium text-[13px]">Ingyenes képtömörítés</span>
                    </Link>
                </div>

                {/* Divider with center label */}
                <div className="relative mb-8">
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <div className="relative flex justify-center">
                        <span className="px-4 text-[10px] font-mono uppercase tracking-[0.3em] text-white/55 bg-white/[0.02] backdrop-blur-sm rounded-full py-1">
                            Kapcsolat
                        </span>
                    </div>
                </div>

                {/* Contact row */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 mb-10 text-center">
                    <span className="text-sm text-white/55">{t('footer.call')}</span>
                    <a
                        href="tel:+36703304445"
                        className="font-mono text-[15px] text-white hover:text-neonBlue transition-colors"
                    >
                        +36 70 330 4445
                    </a>
                    <span className="hidden sm:inline text-white/15">•</span>
                    <a
                        href="mailto:contact@cyberlabsweb.com"
                        className="font-mono text-[15px] text-white hover:text-neonBlue transition-colors"
                    >
                        contact@cyberlabsweb.com
                    </a>
                </div>

                {/* Bottom row */}
                <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
                    <div className="text-white/45">
                        &copy; {new Date().getFullYear()} CyberLabs Web. {t('footer.rights')}
                    </div>
                    <div className="flex items-center gap-4 text-white/55">
                        <a href="/aszf.html" className="hover:text-neonBlue transition-colors">
                            {t('footer.terms')}
                        </a>
                        <span className="text-white/15">•</span>
                        <a href="/adatvedelem.html" className="hover:text-neonBlue transition-colors">
                            {t('footer.privacy')}
                        </a>
                    </div>
                </div>

                {/* SEO city list — subtle */}
                <div className="mt-8 text-[10px] text-white/15 text-center font-mono leading-relaxed max-w-4xl mx-auto select-none">
                    <span className="block mb-1.5 opacity-70 tracking-[0.2em] uppercase">Kiemelt területek</span>
                    Budapest • Pest megye • Debrecen • Szeged • Miskolc • Pécs • Győr • Nyíregyháza • Kecskemét • Székesfehérvár • Szombathely • Érd • Szolnok • Tatabánya • Sopron • Kaposvár • Veszprém • Békéscsaba • Zalaegerszeg • Eger • Nagykanizsa
                </div>
            </Container>
        </footer>
    );
};


