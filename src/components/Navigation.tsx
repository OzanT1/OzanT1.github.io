import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';

export default function Navigation() {
  return (
    <header className="site-header">
      <nav className="page-width navigation" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Ozan Utku Yılmaz, back to top">
          <span className="monogram" aria-hidden="true">o<span>.</span></span>
          <span>Ozan Utku Yılmaz</span>
        </a>
        <div className="nav-links">
          <a href="#projects">Work <sup>{projects.length}</sup></a>
          <a href="#about">About</a>
          <a className="nav-contact" href="#contact">Say hello <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </nav>
    </header>
  );
}
