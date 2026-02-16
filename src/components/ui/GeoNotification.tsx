import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { useLocation } from 'react-router-dom';

export const GeoNotification = () => {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    // Only show on main pages, not on GEO pages themselves
    const shouldShow = !location.pathname.includes('/geo-tudasanyag');

    useEffect(() => {
        // Show after a delay
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    const variants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.8 }
    };

    if (!shouldShow) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
                    className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) setIsVisible(false);
                    }}
                >
                    {/* Gradient Border Wrapper */}
                    <div className="relative w-full max-w-sm p-[2px] rounded-2xl bg-gradient-to-r from-neonBlue via-purple-500 to-neonBlue shadow-2xl shadow-neonBlue/30">
                        {/* Inner Content */}
                        <div className="relative bg-[#0f0f16] rounded-2xl p-6 overflow-hidden">

                            {/* Background Effects */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-neonBlue/20 rounded-full blur-[50px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/20 rounded-full blur-[50px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

                            {/* Close Button */}
                            <button
                                onClick={() => setIsVisible(false)}
                                className="absolute top-3 right-3 p-2 text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/10 z-20"
                            >
                                <X size={20} />
                            </button>

                            <div className="flex flex-col gap-4 relative z-10 text-center items-center">
                                {/* Question Mark Icon */}
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neonBlue/20 to-purple-500/20 flex items-center justify-center border border-white/10 shadow-[0_0_20px_rgba(79,138,255,0.2)] mb-2">
                                    <span className="font-display font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-br from-neonBlue to-purple-400">?</span>
                                </div>

                                {/* Text Content */}
                                <div className="flex-1">
                                    <h3 className="text-white font-bold text-2xl leading-tight mb-3 font-display">
                                        AI-kompatibilis a weboldalad?
                                    </h3>

                                    <p className="text-gray-300 text-base leading-relaxed mb-6 font-medium">
                                        Ne maradj le a versenyben! Töltsd le ingyenes GEO útmutatónkat és kerülj az élre.
                                    </p>

                                    <Button
                                        href="/geo-tudasanyag"
                                        variant="primary"
                                        size="lg"
                                        className="w-full justify-center text-base py-3 shadow-[0_0_25px_rgba(79,138,255,0.25)] hover:shadow-[0_0_40px_rgba(79,138,255,0.4)] transition-shadow font-bold tracking-wide"
                                    >
                                        Ingyenes Letöltés <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
