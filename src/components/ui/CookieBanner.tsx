import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="fixed bottom-4 left-4 right-4 z-50"
                >
                    <div className="max-w-2xl mx-auto relative">
                        {/* Corner Brackets */}
                        <div className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-neonPurple" />
                        <div className="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-neonPurple" />
                        <div className="absolute -bottom-px -left-px w-4 h-4 border-b-2 border-l-2 border-neonPurple" />
                        <div className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-neonPurple" />

                        <div className="bg-surface/95 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden">
                            {/* Terminal Header */}
                            <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-black/40">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-neonPurple animate-pulse" />
                                    <span className="font-mono text-sm tracking-widest text-muted2 uppercase">COOKIE_CONSENT.exe</span>
                                </div>
                                <span className="font-mono text-neonBlue/80 text-base group-hover/item:text-neonBlue transition-colors duration-300">[v1.0]</span>
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <p className="text-muted leading-relaxed text-base sm:text-lg">
                                    <span className="text-neonBlue">&gt;</span> Ez a weboldal sütiket használ a működéshez.
                                </p>
                                <div className="font-mono text-sm text-muted2 mb-4">
                                    <span className="text-neonPurple/70">//</span> További info: <a href="/adatvedelem.html" className="text-neonBlue hover:underline">adatvedelem.html</a>
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-3 font-mono text-base">
                                    <button
                                        onClick={handleDecline}
                                        className="px-4 py-2 text-muted hover:text-white border border-white/10 hover:border-white/30 rounded transition-colors"
                                    >
                                        [ESC] Elutasít
                                    </button>
                                    <button
                                        onClick={handleAccept}
                                        className="px-4 py-2 text-black font-medium bg-neonBlue hover:bg-neonBlue/90 rounded transition-colors"
                                    >
                                        [ENTER] Elfogad
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
