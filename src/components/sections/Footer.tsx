
import { Container } from '../Container';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

// Custom TikTok icon since lucide doesn't have it
const TikTokIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

export const Footer = () => {
    const socialLinks = [
        { icon: Instagram, href: "https://www.instagram.com/cyberlabsweb?igsh=bjB3bmRtaHhqa250", label: "Instagram" },
        { icon: Facebook, href: "https://facebook.com/cyberlabs", label: "Facebook" },
        { icon: Linkedin, href: "https://linkedin.com/company/cyberlabs", label: "LinkedIn" },
        { icon: TikTokIcon, href: "https://tiktok.com/@cyberlabs", label: "TikTok" },
    ];

    return (
        <footer className="py-12 border-t border-white/5 bg-black">
            <Container className="text-center">
                <div className="flex items-center justify-center gap-2 mb-6 opacity-80">
                    <div className="font-mono font-bold text-white text-xl">CyberLabs</div>
                </div>

                {/* Social Media Icons */}
                <div className="flex items-center justify-center gap-4 mb-8">
                    {socialLinks.map((social, i) => (
                        <a
                            key={i}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="group relative p-3 rounded-lg border border-white/10 bg-surface2/50 hover:border-neonBlue/50 hover:bg-neonBlue/10 transition-all duration-300"
                        >
                            {/* Corner brackets on hover */}
                            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-transparent group-hover:border-neonBlue transition-colors duration-300" />
                            <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-transparent group-hover:border-neonBlue transition-colors duration-300" />

                            <social.icon className="w-5 h-5 text-muted group-hover:text-neonBlue transition-colors duration-300" />
                        </a>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-muted mb-8 text-base">
                    <span>Inkább hívnál?</span>
                    <a href="tel:+36703304445" className="text-white hover:text-neonBlue transition-colors font-mono">
                        +36 70 330 4445
                    </a>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-muted2 mb-6">
                    <a href="/aszf.html" className="hover:text-neonBlue transition-colors">ÁSZF</a>
                    <span className="opacity-30">|</span>
                    <a href="/adatvedelem.html" className="hover:text-neonBlue transition-colors">Adatvédelem</a>
                </div>

                <div className="text-sm text-muted2">
                    &copy; {new Date().getFullYear()} CyberLabs Studio. Minden jog fenntartva.
                </div>
            </Container>
        </footer>
    );
};
