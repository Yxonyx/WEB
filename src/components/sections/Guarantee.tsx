import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export function Guarantee() {
    const { t } = useLanguage();

    return (
        <section className="py-24 px-4 relative overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neonBlue/10 rounded-full blur-[100px] -z-10" />

            <div className="max-w-4xl mx-auto">
                <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/30 backdrop-blur-sm p-8 md:p-12">
                        {/* Ambient Background Light */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-neonBlue/5 blur-[80px] pointer-events-none" />

                        {/* Icon Container */}
                        <div className="inline-flex items-center justify-center mb-8 relative">
                            <div className="absolute inset-0 bg-neonBlue/20 blur-2xl rounded-full" />
                            <ShieldCheck className="w-16 h-16 md:w-20 md:h-20 text-neonBlue relative z-10 drop-shadow-[0_0_15px_rgba(79,138,255,0.5)]" />
                        </div>

                        <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white font-display tracking-tight">
                            {t('guarantee.title')}
                        </h3>

                        <p className="text-base md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                            {t('guarantee.desc')}
                        </p>

                        <a
                            href="#kapcsolat"
                            className="inline-flex items-center justify-center px-8 py-4 bg-neonBlue text-black font-bold text-lg rounded-full hover:shadow-[0_0_20px_rgba(79,138,255,0.4)] hover:scale-105 transition-all duration-300"
                        >
                            {t('guarantee.cta')}
                        </a>
                </div>
            </div>
        </section>
    );
}


