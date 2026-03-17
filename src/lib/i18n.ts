import { translations, Language } from "@/translations";

export function getDictionary(lang: string) {
  const validLang: Language =
    lang === "en" || lang === "hu" ? lang : "hu";
  return translations[validLang];
}

export function t(lang: string, path: string): string {
  const keys = path.split(".");
  let current: any = getDictionary(lang);
  for (const key of keys) {
    if (current === undefined || current[key] === undefined) {
      console.warn(
        `Translation missing for key: ${path} in language: ${lang}`
      );
      return path;
    }
    current = current[key];
  }
  return current;
}

export const locales = ["hu", "en"] as const;
export const defaultLocale = "hu";
