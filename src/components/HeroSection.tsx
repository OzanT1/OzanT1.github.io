import { ArrowDown, ArrowUpRight } from 'lucide-react';
import maintenanceImage from '@/assets/projects/Maintenance_Protocol_Image.webp';
import { useLanguage } from '@/i18n/LanguageContext';

export default function HeroSection() {
  const { copy: { hero: copy } } = useLanguage();
  return (
    <section className="hero page-width" aria-labelledby="intro-heading">
      <div className="hero-eyebrow eyebrow">
        <span className="small-cross" aria-hidden="true">✳</span>
        {copy.role}<span className="eyebrow-location">{copy.location}</span>
      </div>
      <div className="hero-layout">
        <div className="hero-copy">
          <h1 id="intro-heading">{copy.firstLine}<br />{copy.lead}<em>{copy.emphasis}</em></h1>
          <p>{copy.intro}</p>
          <a className="text-link hero-cta" href="#projects">{copy.work}<ArrowDown size={18} aria-hidden="true" /></a>
        </div>
        <div className="work-collage" aria-label={copy.collageLabel}>
          <span className="collage-note">{copy.noteFirst}<br />{copy.noteSecond}</span>
          <a href="#creator-outreach" className="collage-sheet collage-automation">
            <span className="mini-eyebrow">{copy.automation}</span>
            <span className="mini-flow"><span>{copy.find}</span><span aria-hidden="true">→</span><span>{copy.connect}</span><span aria-hidden="true">→</span><span>{copy.track}</span></span>
            <span className="sheet-caption">{copy.outreach}<ArrowUpRight size={14} aria-hidden="true" /></span>
          </a>
          <a href="#maintenance-protocol" className="collage-sheet collage-world">
            <img src={maintenanceImage} alt={copy.worldAlt} width="480" height="270" />
            <span className="sheet-caption">{copy.world}<ArrowUpRight size={14} aria-hidden="true" /></span>
          </a>
          <a href="#bezier-editor" className="collage-sheet collage-curve">
            <span className="mini-eyebrow">{copy.idea}</span>
            <svg viewBox="0 0 240 100" aria-hidden="true"><path className="curve-handles" d="M20 80 70 0M170 100 220 20" /><path className="curve-line" d="M20 80C70 0 170 100 220 20" /><circle cx="20" cy="80" r="4" /><circle cx="220" cy="20" r="4" /><rect x="66" y="0" width="8" height="8" /><rect x="166" y="92" width="8" height="8" /></svg>
            <span className="sheet-caption">{copy.curve}<ArrowUpRight size={14} aria-hidden="true" /></span>
          </a>
          <span className="collage-star" aria-hidden="true">✳</span>
        </div>
      </div>
      <div className="hero-footnote">
        <span>{copy.footnote}</span>
        <a href="https://github.com/OzanT1" target="_blank" rel="noopener noreferrer">{copy.github}<ArrowUpRight size={15} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
