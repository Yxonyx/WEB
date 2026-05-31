import { translations, Language } from "@/translations";

export function getDictionary(lang: string) {
  const validLang: Language =
    lang === "en" || lang === "hu" ? lang : "hu";
  return translations[validLang];
}

export function t(lang: string, path: string): string {
  const keys = path.split(".");
  let current: unknown = getDictionary(lang);
  for (const key of keys) {
    if (
      current == null ||
      (current as Record<string, unknown>)[key] === undefined
    ) {
      console.warn(
        `Translation missing for key: ${path} in language: ${lang}`
      );
      return path;
    }
    current = (current as Record<string, unknown>)[key];
  }
  return current as string;
}

export const locales = ["hu", "en"] as const;
export const defaultLocale = "hu";
