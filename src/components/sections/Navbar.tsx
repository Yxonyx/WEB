import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { Button } from '../ui/Button';
import { Container } from '../Container';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const serviceDropdown = [
    { label: 'Weboldal készítés', href: '#arazas' },
    { label: 'Webshop készítés', href: '#arazas' },
    { label: 'SEO optimalizálás', href: '#szolgaltatasok' },
    { label: 'AI-találhatóság (GEO)', href: '#geo' },
    { label: 'Weboldal karbantartás', href: '#karbantartas' },
    { label: 'AI Chatbot', href: '#chatbot-intro' },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'árazás', href: '#arazas' },
        { label: 'referenciák', href: '#referenciak' },
        { label: 'cikkek', href: '#insights' },
        { label: 'kapcsolat', href: '#kapcsolat' },
    ];

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-bg/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
            )}
        >
            <Container className="flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group">
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
                            <span className="text-neonBlue/60">&lt;</span>szolgáltatások<span className="text-neonBlue/60">&gt;</span>
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
                                            href={item.href}
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
                            href={link.href}
                            className="text-sm font-semibold font-mono text-white/80 hover:text-neonBlue transition-all duration-200 lowercase tracking-widest antialiased"
                            style={{ textRendering: 'geometricPrecision' }}
                        >
                            <span className="text-neonBlue/60">&lt;</span>{link.label}<span className="text-neonBlue/60">&gt;</span>
                        </a>
                    ))}

                    {/* Language Selector */}
                    <div className="flex items-center gap-3 pl-4 border-l border-white/10">
                        <button className="relative w-6 h-4 overflow-hidden rounded-[2px] transition-transform hover:scale-110 opacity-100 ring-2 ring-neonBlue/50">
                            <svg viewBox="0 0 64 32" className="w-full h-full">
                                <rect fill="#fff" width="64" height="32" />
                                <rect fill="#CE1126" width="64" height="10.666" />
                                <rect fill="#008751" y="21.333" width="64" height="10.666" />
                            </svg>
                        </button>
                        <button className="relative w-6 h-4 overflow-hidden rounded-[2px] transition-transform hover:scale-110 opacity-50 hover:opacity-100 grayscale hover:grayscale-0">
                            <svg viewBox="0 0 60 30" className="w-full h-full">
                                <rect fill="#012169" width="60" height="30" />
                                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
                                <path d="M30,0 L30,30 M0,15 L60,15" stroke="#fff" strokeWidth="10" />
                                <path d="M30,0 L30,30 M0,15 L60,15" stroke="#C8102E" strokeWidth="6" />
                            </svg>
                        </button>
                    </div>

                    <Button href="#kapcsolat" variant="primary" className="ml-4 py-2 px-5 text-base">
                        Beszéljünk
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
                                    Szolgáltatások
                                </span>
                                <div className="flex flex-col gap-2">
                                    {serviceDropdown.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.href}
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
                                    href={link.href}
                                    onClick={() => setIsMobileOpen(false)}
                                    className="text-lg font-medium text-white hover:text-neonBlue capitalize"
                                >
                                    <span className="font-mono text-neonBlue/50 mr-2">&lt;</span>
                                    {link.label}
                                    <span className="font-mono text-neonBlue/50 ml-2">&gt;</span>
                                </a>
                            ))}

                            {/* Language Selector - Mobile */}
                            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Nyelv:</span>
                                <button className="flex items-center gap-1.5 px-2 py-1 rounded bg-neonBlue/10 border border-neonBlue/30 text-white text-sm font-medium">
                                    🇭🇺 HU
                                </button>
                                <button className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 border border-white/10 text-white/50 text-sm hover:text-white hover:border-white/20 transition-colors">
                                    🇬🇧 EN
                                </button>
                            </div>

                            <Button href="#kapcsolat" variant="primary" className="w-full justify-center mt-4">
                                Beszéljünk
                            </Button>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};


