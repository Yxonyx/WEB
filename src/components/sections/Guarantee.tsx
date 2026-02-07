import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export function Guarantee() {
    const { t } = useLanguage();

    return (
        <section className="py-24 px-4 relative overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neonGreen/10 rounded-full blur-[100px] -z-10" />

            <div className="max-w-4xl mx-auto">
                <div className="relative overflow-hidden rounded-3xl bg-white/5 p-8 md:p-12 backdrop-blur-md border border-white/10 shadow-2xl text-center group hover:border-white/20 transition-colors duration-500">

                    {/* Icon Container */}
                    <div className="inline-flex items-center justify-center mb-8 relative">
                        <div className="absolute inset-0 bg-neonGreen/20 blur-xl rounded-full animate-pulse" />
                        <ShieldCheck className="w-20 h-20 text-neonGreen relative z-10" />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-display">
                        {t('guarantee.title')}
                    </h2>

                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        {t('guarantee.desc')}
                    </p>

                    <a
                        href="#kapcsolat"
                        className="inline-block px-10 py-5 bg-neonGreen text-black font-bold text-lg rounded-xl hover:shadow-[0_0_30px_rgba(57,255,20,0.6)] hover:bg-white transition-all duration-300 transform hover:scale-105"
                    >
                        {t('guarantee.cta')}
                    </a>
                </div>
            </div>
        </section>
    );
}


