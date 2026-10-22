import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { useLanguage } from '@/i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const { copy } = useLanguage();
  return (
    <header className="site-header">
      <nav className="page-width navigation" aria-label={copy.nav.label}>
        <a className="wordmark" href="#top" aria-label={copy.nav.top}>
          <span className="monogram" aria-hidden="true">o<span>.</span></span>
          <span>Ozan Utku Yılmaz</span>
        </a>
        <div className="navigation-actions">
          <div className="nav-links">
            <a href="#projects">{copy.nav.work} <sup>{projects.length}</sup></a>
            <a href="#about">{copy.nav.about}</a>
            <a className="nav-contact" href="#contact">{copy.nav.contact} <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
