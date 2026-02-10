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
                <a href={`/${language}/`} className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-white to-neonBlue text-black font-bold font-mono text-lg leading-none transition-transform group-hover:scale-105">
                        <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-black/20" />
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-black/20" />
                        CL
                    </div>
                    <span className="text-xl font-bold tracking-tight group-hover:text-neonBlue transition-colors flex items-baseline">
                        <span className="text-white">Cyber</span><span className="text-neonBlue">labs</span><span className="text-sm text-white/40 ml-1 font-normal lowercase">web</span>
                    </span>
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
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-0 mt-2 w-64 py-3 bg-surface/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
                                >
                                    {/* Gradient accent line at top */}
                                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neonBlue via-neonPurple to-neonBlue" />

                                    {serviceDropdown.map((item, index) => (
                                        <a
                                            key={index}
                                            href={getLink(item.href)}
                                            className="block px-5 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-all duration-150 border-l-2 border-transparent hover:border-neonBlue"
                                        >
                                            {item.label}
                                        </a>
                                    ))}
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
                                <span className="text-xs font-mono text-neonBlue/60 uppercase tracking-widest mb-3 block">
                                    {t('nav.services')}
                                </span>
                                <div className="flex flex-col gap-2">
                                    {serviceDropdown.map((item, index) => (
                                        <a
                                            key={index}
                                            href={getLink(item.href)}
                                            onClick={() => setIsMobileOpen(false)}
                                            className="text-base text-white/80 hover:text-neonBlue pl-3 border-l-2 border-white/10 hover:border-neonBlue transition-all"
                                        >
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


