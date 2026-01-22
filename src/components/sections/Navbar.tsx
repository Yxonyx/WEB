import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { Button } from '../ui/Button';
import { Container } from '../Container';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'szolgáltatások', href: '#szolgaltatasok' },
        { label: 'árazás', href: '#arazas' },
        { label: 'referenciák', href: '#referenciak' },
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
                    <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-neonBlue to-neonPurple text-black font-bold font-mono text-lg leading-none transition-transform group-hover:scale-105">
                        <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-white/60" />
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-white/60" />
                        CL
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white group-hover:text-neonBlue transition-colors">
                        CyberLabs
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm font-bold font-mono text-muted hover:text-neonBlue transition-colors lowercase tracking-wide"
                        >
                            &lt;{link.label}&gt;
                        </a>
                    ))}
                    <Button href="#kapcsolat" variant="primary" className="ml-4 py-2 px-5 text-sm">
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
                        <Container className="py-8 flex flex-col gap-6">
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
                            <Button href="#kapcsolat" variant="primary" className="w-full justify-center">
                                Beszéljünk
                            </Button>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
