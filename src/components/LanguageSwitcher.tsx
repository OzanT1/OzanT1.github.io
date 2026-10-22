import { useLanguage } from '@/i18n/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage, copy } = useLanguage();

  return (
    <div className="language-switcher" role="group" aria-label={copy.nav.language}>
      <button type="button" lang="en" aria-label={copy.nav.english} aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>EN</button>
      <span aria-hidden="true">/</span>
      <button type="button" lang="tr" aria-label={copy.nav.turkish} aria-pressed={language === 'tr'} onClick={() => setLanguage('tr')}>TR</button>
    </div>
  );
}
