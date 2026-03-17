import { useLanguage } from '../../context/LanguageContext';

export function TrustBar() {
    const { t } = useLanguage();

    return (
        <div className="w-full bg-bg border-y border-neonBlue/10 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent font-display font-light">
                        {t('trustbar.text_prefix')} <span className="text-neonBlue">{t('trustbar.highlight')}</span>{t('trustbar.text_suffix')}
                    </p>
                </div>
            </div>
        </div>
    );
}


