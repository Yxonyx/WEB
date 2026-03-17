"use client";

import React, { createContext, useContext, useCallback, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";
import { translations } from "@/translations";

export type Language = "hu" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{
  lang: Language;
  children: React.ReactNode;
}> = ({ lang, children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const language: Language = lang === "en" || lang === "hu" ? lang : "hu";

  const handleSetLanguage = useCallback(
    (newLang: Language) => {
      const pathParts = pathname.split("/").filter(Boolean);
      // Remove current language prefix if exists
      if (pathParts[0] === "hu" || pathParts[0] === "en") {
        pathParts.shift();
      }
      const newPath = `/${newLang}/${pathParts.join("/")}`;
      router.push(newPath);
    },
    [pathname, router]
  );

  const t = useCallback(
    (path: string) => {
      const keys = path.split(".");
      let current: any = translations[language];
      for (const key of keys) {
        if (current === undefined || current[key] === undefined) {
          console.warn(
            `Translation missing for key: ${path} in language: ${language}`
          );
          return path;
        }
        current = current[key];
      }
      return current;
    },
    [language]
  );

  const value = useMemo(
    () => ({ language, setLanguage: handleSetLanguage, t }),
    [language, handleSetLanguage, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
