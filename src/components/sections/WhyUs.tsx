import { Zap, Search, Bot, Database, Shield } from 'lucide-react';
import { BracketFrame } from '../ui/BracketFrame';
import { useLanguage } from '../../context/LanguageContext';

export function WhyUs() {
    const { t } = useLanguage();

    // Icon mapping to match the translation array order
    const icons = [Zap, Search, Bot, Database, Shield];

    return (
        <section id="miert-minket" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        {t('whyus.title_prefix')} <span className="text-neonBlue">{t('whyus.title_highlight')}</span> {t('whyus.title_suffix')}
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto font-display font-light">
                        {t('whyus.subtitle_1')} <span className="text-white font-bold decoration-neonBlue underline underline-offset-4">{t('whyus.subtitle_highlight')}</span>{t('whyus.subtitle_2')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(t('whyus.features') as unknown as any[]).map((feature, index) => {
                        const Icon = icons[index];
                        return (
                            <div key={index} className="h-full">
                                <BracketFrame className="h-full p-8 hover:bg-neonBlue/5 transition-colors group">
                                    <div className="w-12 h-12 rounded-lg bg-neonBlue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-6 h-6 text-neonBlue" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-white">
                                        {feature.title}
                                        {feature.sub && <span className="text-sm font-normal text-gray-400 ml-2">{feature.sub}</span>}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </BracketFrame>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}


