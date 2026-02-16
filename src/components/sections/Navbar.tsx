import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { Button } from '../ui/Button';
import { Container } from '../Container';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useLocation } from 'react-router-dom';

export const Navbar = () => {
    const { t, language, setLanguage } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const location = useLocation();

    const isHomePage = location.pathname === `/${language}` || location.pathname === `/${language}/`;

    const getLink = (hash: string) => {
        if (hash.startsWith('http')) return hash;
        return isHomePage ? hash : `/${language}/${hash}`;
    };

    // Handle scroll to hash when navigating from another page
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

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
                isScrolled ? "bg-[#0a0b10] shadow-md py-3" : "bg-transparent py-4"
            )}
        >
            <Container className="flex items-center justify-between">
                {/* Logo */}
                {/* Logo */}
                <a href={`/${language}/`} className="flex items-center gap-3 group">
                    {/* Custom Tech Logo - Engineered Feel & Symmetrical */}
                    <div className="relative w-11 h-11 flex items-center justify-center bg-black/20 backdrop-blur-sm border border-white/5 rounded-sm -translate-y-[2px] transition-all duration-300 group-hover:border-neonBlue/30 group-hover:shadow-[0_0_20px_-10px_var(--neon-blue)]">

                        {/* 1. Neon Grid Background (Subtle) */}
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(79,138,255,0.05)_50%)] bg-[length:4px_100%] pointer-events-none" />

                        {/* 2. Symmetrical Tech Brackets (4 Corners) */}
                        {/* Top Left */}
                        <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-neonBlue/50 transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:border-neonBlue group-hover:opacity-100 group-hover:rounded-sm" />
                        {/* Top Right */}
                        <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-neonBlue/50 transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:border-neonBlue group-hover:opacity-100 group-hover:rounded-sm" />
                        {/* Bottom Left */}
                        <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-neonPurple/50 transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:border-neonPurple group-hover:opacity-100 group-hover:rounded-sm" />
                        {/* Bottom Right */}
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-neonPurple/50 transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:border-neonPurple group-hover:opacity-100 group-hover:rounded-sm" />

                        {/* 3. Glitch Effect Container - Perfectly Centered */}
                        <div className="relative z-10 font-bold font-mono text-xl tracking-tight leading-none text-white mix-blend-overlay group-hover:mix-blend-normal transition-all">
                            <span className="relative inline-flex items-center justify-center">
                                <span className="absolute text-neonBlue opacity-0 group-hover:opacity-70 group-hover:animate-pulse blur-[1px]">CL</span>
                                <span className="absolute text-neonPurple opacity-0 group-hover:opacity-70 group-hover:animate-pulse blur-[1px]" style={{ animationDelay: '0.1s' }}>CL</span>
                                <span className="relative z-10 group-hover:text-white drop-shadow-md">CL</span>
                            </span>
                        </div>


                    </div>

                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-tight leading-none group-hover:text-neonBlue transition-colors flex items-baseline">
                            <span className="text-white">Cyber</span><span className="text-neonBlue">Labs</span>
                        </span>
                        <span className="text-[10px] font-mono tracking-[0.2em] text-white/40 group-hover:text-neonPurple transition-colors duration-300 uppercase">
                            WEB DEVELOPMENT
                        </span>
                    </div>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {/* Services Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                    >
                        <button
                            className="text-sm font-semibold font-mono text-white/80 hover:text-neonBlue transition-all duration-200 lowercase tracking-widest antialiased flex items-center gap-1"
                            style={{ textRendering: 'geometricPrecision' }}
                        >
                            <span className="text-neonBlue/60">&lt;</span>{t('nav.services')}<span className="text-neonBlue/60">&gt;</span>
                            <ChevronDown className={clsx("w-4 h-4 transition-transform duration-200", isServicesOpen && "rotate-180")} />
                        </button>

                        <AnimatePresence>
                            {isServicesOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2, ease: 'easeOut' }}
                                    className="absolute top-full left-0 mt-3 w-72 bg-[#0a1628]/98 backdrop-blur-2xl border border-neonBlue/20 rounded-lg shadow-2xl shadow-neonBlue/10 overflow-hidden"
                                >
                                    {/* Terminal header bar */}
                                    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-white/[0.03]">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-neonBlue/30" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-neonPurple/50" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-neonBlue/70" />
                                        </div>
                                        <span className="ml-2 text-[10px] font-mono text-white/30 tracking-wider uppercase">services.sh</span>
                                    </div>

                                    {/* Terminal body */}
                                    <div className="py-1.5">
                                        {serviceDropdown.map((item, index) => (
                                            <a
                                                key={index}
                                                href={getLink(item.href)}
                                                className="group flex items-center gap-3 px-4 py-2.5 text-sm font-mono text-white/70 hover:text-neonBlue hover:bg-neonBlue/[0.06] transition-all duration-200"
                                            >
                                                <span className="text-neonBlue/40 group-hover:text-neonBlue transition-colors text-xs">{'>'}_</span>
                                                <span className="tracking-wide">{item.label}</span>
                                                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-neonBlue text-xs">↵</span>
                                            </a>
                                        ))}
                                    </div>

                                    {/* Bottom status bar */}
                                    <div className="px-4 py-1.5 border-t border-white/[0.06] bg-white/[0.02] flex items-center justify-between">
                                        <span className="text-[9px] font-mono text-white/20 tracking-wider">{serviceDropdown.length} items</span>
                                        <span className="text-[9px] font-mono text-green-500/50 tracking-wider flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500/60 animate-pulse" />
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
                            className="text-sm font-semibold font-mono text-white/80 hover:text-neonBlue transition-all duration-200 lowercase tracking-widest antialiased"
                            style={{ textRendering: 'geometricPrecision' }}
                        >
                            <span className="text-neonBlue/60">&lt;</span>{link.label}<span className="text-neonBlue/60">&gt;</span>
                        </a>
                    ))}

                    {/* Language Selector */}
                    <div className="flex items-center gap-3 pl-4 border-l border-white/10">
                        <button
                            onClick={() => setLanguage('hu')}
                            aria-label="Váltás magyar nyelvre"
                            className={clsx(
                                "relative w-6 h-4 overflow-hidden rounded-[2px] transition-transform hover:scale-110",
                                language === 'hu' ? "opacity-100 ring-2 ring-neonBlue/50" : "opacity-50 hover:opacity-100 grayscale hover:grayscale-0"
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
                                "relative w-6 h-4 overflow-hidden rounded-[2px] transition-transform hover:scale-110",
                                language === 'en' ? "opacity-100 ring-2 ring-neonBlue/50" : "opacity-50 hover:opacity-100 grayscale hover:grayscale-0"
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

                    <Button href={getLink('#kapcsolat')} variant="primary" className="ml-4 py-2 px-5 text-base">
                        {t('nav.cta')}
                    </Button>
                </nav>

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
                        className="lg:hidden bg-surface overflow-hidden border-b border-white/10"
                    >
                        <Container className="py-8 flex flex-col gap-4">
                            {/* Services Section */}
                            <div className="border-b border-white/10 pb-4">
                                <span className="text-xs font-mono text-neonBlue/60 uppercase tracking-widest mb-3 block flex items-center gap-2">
                                    <span className="text-neonBlue/40">$</span> {t('nav.services')}
                                </span>
                                <div className="flex flex-col gap-1">
                                    {serviceDropdown.map((item, index) => (
                                        <a
                                            key={index}
                                            href={getLink(item.href)}
                                            onClick={() => setIsMobileOpen(false)}
                                            className="group flex items-center gap-3 text-base font-mono text-white/70 hover:text-neonBlue pl-3 py-1.5 transition-all"
                                        >
                                            <span className="text-neonBlue/30 group-hover:text-neonBlue text-xs transition-colors">{'>'}_</span>
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={getLink(link.href)}
                                    onClick={() => setIsMobileOpen(false)}
                                    className="text-lg font-medium text-white hover:text-neonBlue"
                                >
                                    <span className="font-mono text-neonBlue/50">&lt;</span>
                                    <span className="mx-1">{link.label}</span>
                                    <span className="font-mono text-neonBlue/50">&gt;</span>
                                </a>
                            ))}

                            {/* Language Selector - Mobile */}
                            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                <span className="text-xs font-mono text-white/40 uppercase tracking-widest">{t('nav.language')}</span>
                                <button
                                    onClick={() => setLanguage('hu')}
                                    className={clsx(
                                        "flex items-center gap-1.5 px-2 py-1 rounded border text-sm font-medium transition-colors",
                                        language === 'hu' ? "bg-neonBlue/10 border-neonBlue/30 text-white" : "bg-white/5 border-white/10 text-white/50 hover:text-white"
                                    )}
                                >
                                    🇭🇺 HU
                                </button>
                                <button
                                    onClick={() => setLanguage('en')}
                                    className={clsx(
                                        "flex items-center gap-1.5 px-2 py-1 rounded border text-sm font-medium transition-colors",
                                        language === 'en' ? "bg-neonBlue/10 border-neonBlue/30 text-white" : "bg-white/5 border-white/10 text-white/50 hover:text-white"
                                    )}
                                >
                                    🇬🇧 EN
                                </button>
                            </div>

                            <Button href={getLink('#kapcsolat')} variant="primary" className="w-full justify-center mt-4">
                                {t('nav.cta')}
                            </Button>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};


