import React, { createContext, useContext, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { translations } from '../translations';

// Define Language type locally to avoid module export issues
export type Language = 'hu' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { lang } = useParams<{ lang: string }>();
    const navigate = useNavigate();
    const location = useLocation();

    // Determine language from URL, default to 'hu'
    const language: Language = (lang === 'en' || lang === 'hu') ? lang : 'hu';

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const handleSetLanguage = (newLang: Language) => {
        // Get current path without the language prefix
        const pathParts = location.pathname.split('/').filter(Boolean);
        // Remove current language prefix if exists
        if (pathParts[0] === 'hu' || pathParts[0] === 'en') {
            pathParts.shift();
        }
        // Navigate to new language path
        const newPath = `/${newLang}/${pathParts.join('/')}${location.hash}`;
        navigate(newPath);
    };

    const t = (path: string) => {
        const keys = path.split('.');
        let current: any = translations[language];
        for (const key of keys) {
            if (current === undefined || current[key] === undefined) {
                console.warn(`Translation missing for key: ${path} in language: ${language}`);
                return path;
            }
            current = current[key];
        }
        return current;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
