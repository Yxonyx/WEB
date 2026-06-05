import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { Button } from '../ui/Button';
import { Container } from '../Container';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
    const { t, language, setLanguage } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const pathname = usePathname();

    const isHomePage = pathname === `/${language}` || pathname === `/${language}/`;

    const getLink = (hash: string) => {
        if (hash.startsWith('http')) return hash;
        return isHomePage ? hash : `/${language}/${hash}`;
    };

    const handleMobileNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        const resolvedHref = getLink(href);
        // Only handle hash links on same page
        if (resolvedHref.startsWith('#')) {
            e.preventDefault();
            setIsMobileOpen(false);
            const targetId = resolvedHref.slice(1);
            // Wait for menu close animation to finish before scrolling
            setTimeout(() => {
                const target = document.getElementById(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 350);
        } else {
            setIsMobileOpen(false);
        }
    };

    // Handle scroll to hash when navigating from another page
    useEffect(() => {
        if ((typeof window !== 'undefined' ? window.location.hash : '')) {
            const element = document.getElementById((typeof window !== 'undefined' ? window.location.hash : '').substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const serviceDropdown = [
        { label: t('nav.dropdown.webdev'), href: '#arazas' },
        { label: t('nav.dropdown.webshop'), href: '#arazas' },
        { label: t('nav.dropdown.seo'), href: '#szolgaltatasok' },
        { label: t('nav.dropdown.geo'), href: '#geo' },
        { label: t('nav.dropdown.maintenance'), href: '#karbantartas' },
        { label: t('nav.dropdown.chatbot'), href: '#chatbot-intro' },
    ];

    const navLinks = [
        { label: t('nav.pricing'), href: '#arazas' },
        { label: t('nav.references'), href: '#referenciak' },
        { label: t('nav.insights'), href: '#insights' },
        { label: t('nav.contact'), href: '#kapcsolat' },
    ];

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "border-b border-white/20 bg-[#0B7FD3]/55 py-3 shadow-[0_12px_36px_rgba(0,79,154,0.18)] backdrop-blur-xl"
                    : "bg-transparent py-5"
            )}
        >
            <Container className="flex items-center justify-between lg:grid lg:grid-cols-[auto_1fr_auto]">
                {/* Logo - Column 1 */}
                <a href={`/${language}/`} className="group flex items-center">
                    <div className="inline-flex flex-col items-stretch">
                        <span className="flex items-baseline font-hero text-2xl font-bold leading-none text-white drop-shadow-[0_3px_12px_rgba(0,82,166,0.34)] transition-all duration-300 group-hover:drop-shadow-[0_5px_18px_rgba(255,255,255,0.28)] lg:text-[1.65rem] xl:text-3xl">
                            <span>Cyber</span><span className="text-white/85">Labs</span>
                        </span>
                        <span className="mt-1 block w-full text-left font-mono text-[9px] uppercase tracking-[0.22em] text-white/75 transition-colors duration-300 group-hover:text-white sm:text-[10px] lg:text-[10px] xl:text-[11px]">
                            WEB DEVELOPMENT
                        </span>
                    </div>
                </a>

                {/* Desktop Nav - Column 2 (Centered) */}
                <nav className="hidden lg:flex items-center justify-center gap-8 xl:gap-10">
                    {/* Services Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                    >
                        <button
                            className="group/nav flex items-center gap-1.5 text-[16px] font-semibold tracking-wide text-white/82 drop-shadow-[0_2px_8px_rgba(0,82,166,0.2)] transition-all duration-300 hover:text-white"
                        >
                            <span className="font-mono text-xs text-white/34 transition-colors group-hover/nav:text-white/75">&lt;</span><span className="group-hover/nav:drop-shadow-[0_0_10px_rgba(255,255,255,0.28)]">{t('nav.services')}</span><span className="font-mono text-xs text-white/34 transition-colors group-hover/nav:text-white/75">&gt;</span>
                            <ChevronDown className={clsx("w-4 h-4 transition-transform duration-200", isServicesOpen && "rotate-180")} />
                        </button>

                        <AnimatePresence>
                            {isServicesOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2, ease: 'easeOut' }}
                                    className="absolute top-full left-0 mt-4 w-72 overflow-hidden rounded-2xl border border-white/30 bg-[#147FD0]/45 shadow-[0_18px_42px_rgba(0,81,160,0.22)] backdrop-blur-xl"
                                >
                                    {/* Terminal header bar */}
                                    <div className="flex items-center gap-2 border-b border-white/15 bg-white/[0.10] px-4 py-2.5">
                                        <div className="flex gap-1.5">
                                            <div className="h-2.5 w-2.5 rounded-full bg-white/35" />
                                            <div className="h-2.5 w-2.5 rounded-full bg-white/55" />
                                            <div className="h-2.5 w-2.5 rounded-full bg-white/80" />
                                        </div>
                                        <span className="ml-2 text-[10px] font-mono uppercase tracking-wider text-white/60">services.sh</span>
                                    </div>

                                    {/* Terminal body */}
                                    <div className="py-1.5">
                                        {serviceDropdown.map((item, index) => (
                                            <a
                                                key={index}
                                                href={getLink(item.href)}
                                                className="group flex items-center gap-3 px-4 py-2.5 font-mono text-sm text-white/78 transition-all duration-200 hover:bg-white/[0.12] hover:text-white"
                                            >
                                                <span className="text-xs text-white/45 transition-colors group-hover:text-white">{'>'}_</span>
                                                <span className="tracking-wide">{item.label}</span>
                                                <span className="ml-auto text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">↵</span>
                                            </a>
                                        ))}
                                    </div>

                                    {/* Bottom status bar */}
                                    <div className="flex items-center justify-between border-t border-white/[0.10] bg-white/[0.06] px-4 py-1.5">
                                        <span className="font-mono text-[9px] tracking-wider text-white/42">{serviceDropdown.length} items</span>
                                        <span className="flex items-center gap-1 font-mono text-[9px] tracking-wider text-emerald-100/75">
                                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-200/80" />
                                            READY
                                        </span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={getLink(link.href)}
                            className="group/link relative text-[15px] font-semibold tracking-wide text-white/78 drop-shadow-[0_2px_8px_rgba(0,82,166,0.16)] transition-all duration-300 hover:text-white"
                        >
                            <span className="font-mono text-xs text-white/30 transition-colors group-hover/link:text-white/70">&lt;</span>
                            <span className="group-hover/link:drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]">{link.label}</span>
                            <span className="font-mono text-xs text-white/30 transition-colors group-hover/link:text-white/70">&gt;</span>
                            <span className="absolute -bottom-2 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/80 to-transparent transition-all duration-300 group-hover/link:w-full" />
                        </a>
                    ))}
                </nav>

                {/* Right side: Language + CTA - Column 3 */}
                <div className="hidden lg:flex items-center gap-4 justify-end">
                    {/* Language Selector */}
                    <div className="flex items-center gap-3 border-r border-white/25 pr-4">
                        <button
                            onClick={() => setLanguage('hu')}
                            aria-label="Váltás magyar nyelvre"
                            className={clsx(
                                "relative h-4 w-6 overflow-hidden rounded-[2px] shadow-[0_2px_8px_rgba(0,70,150,0.18)] transition-transform hover:scale-110",
                                language === 'hu' ? "opacity-100 ring-2 ring-white/70" : "opacity-60 hover:opacity-100 grayscale hover:grayscale-0"
                            )}
                        >
                            <svg viewBox="0 0 64 32" className="w-full h-full">
                                <rect fill="#fff" width="64" height="32" />
                                <rect fill="#CE1126" width="64" height="10.666" />
                                <rect fill="#008751" y="21.333" width="64" height="10.666" />
                            </svg>
                        </button>
                        <button
                            onClick={() => setLanguage('en')}
                            aria-label="Switch to English"
                            className={clsx(
                                "relative h-4 w-6 overflow-hidden rounded-[2px] shadow-[0_2px_8px_rgba(0,70,150,0.18)] transition-transform hover:scale-110",
                                language === 'en' ? "opacity-100 ring-2 ring-white/70" : "opacity-60 hover:opacity-100 grayscale hover:grayscale-0"
                            )}
                        >
                            <svg viewBox="0 0 60 30" className="w-full h-full">
                                <rect fill="#012169" width="60" height="30" />
                                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
                                <path d="M30,0 L30,30 M0,15 L60,15" stroke="#fff" strokeWidth="10" />
                                <path d="M30,0 L30,30 M0,15 L60,15" stroke="#C8102E" strokeWidth="6" />
                            </svg>
                        </button>
                    </div>

                    <Button
                        href={getLink('#kapcsolat')}
                        variant="primary"
                        className="rounded-full border border-white/65 bg-[#FFD66A] px-6 py-2.5 font-hero text-sm font-bold text-[#06437D] shadow-[0_12px_24px_rgba(255,203,85,0.24),inset_0_1px_0_rgba(255,255,255,0.75)] hover:bg-[#FFE18A] hover:text-[#06437D]"
                    >
                        {t('nav.cta')}
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    aria-label={isMobileOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMobileOpen}
                >
                    {isMobileOpen ? <X /> : <Menu />}
                </button>
            </Container>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="lg:hidden overflow-hidden border-b border-white/25 bg-[#147FD0]/70 backdrop-blur-xl"
                    >
                        <Container className="py-8 flex flex-col gap-4">
                            {/* Services Section */}
                            <div className="border-b border-white/10 pb-4">
                                    <span className="text-xs font-mono text-white/75 uppercase tracking-widest mb-3 block flex items-center gap-2">
                                    <span className="text-white/50">$</span> {t('nav.services')}
                                </span>
                                <div className="flex flex-col gap-1">
                                    {serviceDropdown.map((item, index) => (
                                        <a
                                            key={index}
                                            href={getLink(item.href)}
                                            onClick={(e) => handleMobileNav(e, item.href)}
                                            className="group flex items-center gap-3 text-base font-mono text-white/82 hover:text-white pl-3 py-1.5 transition-all"
                                        >
                                            <span className="text-white/45 group-hover:text-white text-xs transition-colors">{'>'}_</span>
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={getLink(link.href)}
                                    onClick={(e) => handleMobileNav(e, link.href)}
                                    className="text-lg font-medium text-white/88 hover:text-white"
                                >
                                    <span className="font-mono text-white/50">&lt;</span>
                                    <span className="mx-1">{link.label}</span>
                                    <span className="font-mono text-white/50">&gt;</span>
                                </a>
                            ))}

                            {/* Language Selector - Mobile */}
                            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                <span className="text-xs font-mono text-white/40 uppercase tracking-widest">{t('nav.language')}</span>
                                <button
                                    onClick={() => setLanguage('hu')}
                                    className={clsx(
                                        "flex items-center gap-1.5 px-2 py-1 rounded border text-sm font-medium transition-colors",
                                        language === 'hu' ? "bg-white/18 border-white/45 text-white" : "bg-white/10 border-white/20 text-white/65 hover:text-white"
                                    )}
                                >
                                    🇭🇺 HU
                                </button>
                                <button
                                    onClick={() => setLanguage('en')}
                                    className={clsx(
                                        "flex items-center gap-1.5 px-2 py-1 rounded border text-sm font-medium transition-colors",
                                        language === 'en' ? "bg-white/18 border-white/45 text-white" : "bg-white/10 border-white/20 text-white/65 hover:text-white"
                                    )}
                                >
                                    🇬🇧 EN
                                </button>
                            </div>

                            <a
                                href={getLink('#kapcsolat')}
                                onClick={(e) => handleMobileNav(e, '#kapcsolat')}
                                className="relative inline-flex items-center justify-center font-hero font-bold tracking-wider transition-all duration-300 group bg-[#FFD66A] text-[#06437D] hover:bg-white px-8 py-3 text-sm w-full justify-center mt-4 rounded-full border border-white/60"
                            >
                                <span className="mr-2 text-black/60 group-hover:text-black/80 transition-colors">&lt;</span>
                                <span className="relative z-10 flex items-center">{t('nav.cta')}</span>
                                <span className="ml-2 text-black/60 group-hover:text-black/80 transition-colors">&gt;</span>
                            </a>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
