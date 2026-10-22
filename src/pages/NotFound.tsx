import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/i18n/LanguageContext';

export default function NotFound() {
  const { copy } = useLanguage();
  return (
    <main className="not-found">
      <LanguageSwitcher />
      <h1>404</h1>
      <p>{copy.common.notFound}</p>
      <a className="text-link" href="/">{copy.common.home}<span aria-hidden="true">↗</span></a>
    </main>
  );
}
