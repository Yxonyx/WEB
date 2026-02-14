import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './Button';
import { useLocation } from 'react-router-dom';

export const GeoNotification = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const location = useLocation();

    // Only show on main pages, not on GEO pages themselves
    const shouldShow = !location.pathname.includes('/geo-tudasanyag');

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // Show after a delay
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const mobileVariants = {
        initial: { opacity: 0, x: "-50%", y: "-40%", scale: 0.95 },
        animate: { opacity: 1, x: "-50%", y: "-50%", scale: 1 },
        exit: { opacity: 0, x: "-50%", y: "-40%", scale: 0.95 }
    };

    const desktopVariants = {
        initial: { opacity: 0, y: 20, scale: 0.95, x: 0 },
        animate: { opacity: 1, y: 0, scale: 1, x: 0 },
        exit: { opacity: 0, y: 20, scale: 0.95, x: 0 }
    };

    if (!shouldShow) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    variants={isMobile ? mobileVariants : desktopVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className={isMobile
                        ? "fixed top-1/2 left-1/2 z-50 w-[calc(100%-2rem)] max-w-sm"
                        : "fixed bottom-8 right-8 z-50 w-auto max-w-sm"
                    }
                >
                    {/* Glassmorphism Container with Gradient Border */}
                    <div className="relative overflow-hidden rounded-2xl p-[1px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] group">

                        {/* Animated Gradient Border Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-neonBlue/50 via-purple-500/50 to-neonBlue/50 opacity-100" />

                        {/* Inner Content Container */}
                        <div className="relative bg-[#0a0a12]/90 backdrop-blur-xl rounded-[15px] p-4 md:p-5 h-full">

                            {/* Close Button */}
                            <button
                                onClick={() => setIsVisible(false)}
                                className="absolute top-2 right-2 p-1.5 text-white/40 hover:text-white transition-colors rounded-full hover:bg-white/10 z-20"
                            >
                                <X size={14} />
                            </button>

                            <div className="flex gap-4">
                                {/* Icon Side */}
                                <div className="hidden sm:flex flex-col items-center justify-start pt-1">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neonBlue/20 to-purple-500/20 flex items-center justify-center text-neonBlue border border-white/5 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
                                        <Sparkles size={20} />
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="sm:hidden text-neonBlue"><Sparkles size={16} /></span>
                                        <h3 className="text-white font-bold text-sm md:text-base leading-tight">
                                            AI-kompatibilis a weboldalad?
                                        </h3>
                                    </div>

                                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 font-medium">
                                        Töltsd le ingyenes GEO útmutatónkat és kerülj az AI válaszok élére.
                                    </p>

                                    <Button
                                        href="/geo-tudasanyag"
                                        variant="primary"
                                        size="sm"
                                        className="w-full justify-center text-xs md:text-sm py-2 px-4 shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-shadow"
                                    >
                                        <span className="flex items-center gap-2 font-bold tracking-wide">
                                            Ingyenes Letöltés <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                                        </span>
                                    </Button>
                                </div>
                            </div>

                            {/* Decorative Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-neonBlue/10 rounded-full blur-[40px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[40px] pointer-events-none translate-y-1/2 -translate-x-1/2" />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
