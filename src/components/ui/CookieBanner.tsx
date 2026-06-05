import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const CookieBanner = () => {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const frame = requestAnimationFrame(() => {
            const consent = localStorage.getItem('cookieConsent');
            if (!consent) {
                setIsVisible(true);
            }
        });

        return () => cancelAnimationFrame(frame);
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
                    initial={{ y: 28, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 28, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                    className="fixed inset-x-3 bottom-3 z-50 sm:inset-x-5 sm:bottom-5 lg:left-auto lg:right-6 lg:w-[560px]"
                >
                    <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/45 bg-[#0B7FD3]/72 shadow-[0_18px_55px_rgba(0,74,153,0.28)] backdrop-blur-2xl lg:max-w-none">
                        <div className="flex flex-col gap-3 p-3.5 sm:flex-row sm:items-center sm:gap-4 sm:p-4">
                            <div className="min-w-0 flex-1">
                                <div className="mb-1 flex items-center gap-2 font-hero text-sm font-bold uppercase tracking-[0.14em] text-white">
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/45 bg-white/18 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]">
                                        <Cookie className="h-4 w-4" aria-hidden="true" />
                                    </span>
                                    <ShieldCheck className="h-4 w-4 text-[#FFD66A]" aria-hidden="true" />
                                    Cookie beállítások
                                </div>
                                <p className="text-sm leading-relaxed text-white/88 sm:text-[15px]">
                                    {t('cookie.text')}
                                </p>
                                <a href="/adatvedelem.html" className="mt-1 inline-flex text-xs font-semibold tracking-wide text-[#FFD66A] underline-offset-4 hover:underline">
                                    {t('cookie.more')} adatvedelem.html
                                </a>
                            </div>

                            <div className="grid grid-cols-2 gap-2 sm:flex sm:shrink-0 sm:flex-col">
                                <button
                                    onClick={handleAccept}
                                    className="inline-flex min-h-10 items-center justify-center rounded-full border border-white/70 bg-[#FFD66A] px-5 py-2 font-hero text-sm font-bold text-[#06437D] shadow-[0_10px_24px_rgba(255,203,85,0.22),inset_0_1px_0_rgba(255,255,255,0.78)] transition-colors hover:bg-[#FFE18A]"
                                >
                                    {t('cookie.accept')}
                                </button>
                                <button
                                    onClick={handleDecline}
                                    className="inline-flex min-h-10 items-center justify-center rounded-full border border-white/35 bg-white/12 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                                >
                                    {t('cookie.decline')}
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
