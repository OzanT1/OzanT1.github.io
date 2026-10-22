import { createContext, useContext, useLayoutEffect, useState, type ReactNode } from 'react';
import { getInitialLanguage, saveLanguagePreference, type Language } from '@/lib/language';
import { messages } from './messages';

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  copy: typeof messages.en;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, updateLanguage] = useState<Language>(() =>
    getInitialLanguage(typeof window === 'undefined' ? undefined : window),
  );
  const copy = messages[language];

  useLayoutEffect(() => {
    document.documentElement.lang = language;
    document.title = copy.meta.title;
    const metadata = [
      ['meta[name="description"]', copy.meta.description],
      ['meta[property="og:title"]', copy.meta.title],
      ['meta[property="og:description"]', copy.meta.description],
      ['meta[property="og:locale"]', copy.meta.locale],
      ['meta[property="og:image:alt"]', copy.meta.title],
      ['meta[name="twitter:title"]', copy.meta.title],
      ['meta[name="twitter:description"]', copy.meta.description],
    ];
    metadata.forEach(([selector, content]) => {
      document.querySelector(selector)?.setAttribute('content', content);
    });
  }, [language, copy]);

  function setLanguage(next: Language) {
    updateLanguage(next);
    // Only a deliberate selection is saved; first visits follow browser preferences.
    saveLanguagePreference(next, window);
  }

  return <LanguageContext.Provider value={{ language, setLanguage, copy }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error('useLanguage must be used within LanguageProvider');
  return value;
}
