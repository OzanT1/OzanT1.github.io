export type Language = 'en' | 'tr';

export const LANGUAGE_STORAGE_KEY = 'ozan-portfolio-language';

interface LanguageEnvironment {
  localStorage: Pick<Storage, 'getItem' | 'setItem'>;
  navigator: Pick<Navigator, 'languages' | 'language'>;
}

export function resolveLanguage(saved: unknown, browserLanguages: readonly string[]): Language {
  if (saved === 'en' || saved === 'tr') return saved;

  for (const locale of browserLanguages) {
    const language = locale.toLowerCase().split(/[-_]/)[0];
    if (language === 'en' || language === 'tr') return language;
  }

  return 'en';
}

export function getInitialLanguage(environment?: LanguageEnvironment): Language {
  if (!environment) return 'en';

  let saved: string | null = null;
  try {
    saved = environment.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  } catch {
    // Storage can be unavailable in private or restricted browser contexts.
  }

  const { languages, language } = environment.navigator;
  return resolveLanguage(saved, languages.length ? languages : [language]);
}

export function saveLanguagePreference(language: Language, environment?: Pick<LanguageEnvironment, 'localStorage'>): boolean {
  try {
    if (!environment) return false;
    environment.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    return true;
  } catch {
    // Changing language must still work when persistence is unavailable.
    return false;
  }
}
