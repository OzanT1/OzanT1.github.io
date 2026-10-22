import { ArrowDown, ArrowUpRight } from 'lucide-react';
import maintenanceImage from '@/assets/projects/Maintenance_Protocol_Image.webp';

export default function HeroSection() {
  return (
    <section className="hero page-width" aria-labelledby="intro-heading">
      <div className="hero-eyebrow eyebrow"><span className="small-cross" aria-hidden="true">✳</span> Software engineer <span className="eyebrow-location">Istanbul, Türkiye</span></div>
      <div className="hero-layout">
        <div className="hero-copy">
          <h1 id="intro-heading">Always curious.<br />Always <em>building.</em></h1>
          <p>I’m Ozan. I love making software, figuring out unfamiliar problems, and learning whatever it takes to turn an idea into something that works.</p>
          <a className="text-link hero-cta" href="#projects">Take a look at the work <ArrowDown size={18} aria-hidden="true" /></a>
        </div>
        <div className="work-collage" aria-label="A few things from my workbench">
          <span className="collage-note">A few things from<br />my workbench.</span>
          <a href="#creator-outreach" className="collage-sheet collage-automation">
            <span className="mini-eyebrow">A business problem, solved.</span>
            <span className="mini-flow"><span>Find</span><span aria-hidden="true">→</span><span>Connect</span><span aria-hidden="true">→</span><span>Track</span></span>
            <span className="sheet-caption">Creator outreach, on autopilot <ArrowUpRight size={14} aria-hidden="true" /></span>
          </a>
          <a href="#maintenance-protocol" className="collage-sheet collage-world">
            <img src={maintenanceImage} alt="Maintenance Protocol’s industrial multiplayer world" width="480" height="270" />
            <span className="sheet-caption">A world to build together <ArrowUpRight size={14} aria-hidden="true" /></span>
          </a>
          <a href="#bezier-editor" className="collage-sheet collage-curve">
            <span className="mini-eyebrow">An idea, given shape.</span>
            <svg viewBox="0 0 240 100" aria-hidden="true"><path className="curve-handles" d="M20 80 70 0M170 100 220 20" /><path className="curve-line" d="M20 80C70 0 170 100 220 20" /><circle cx="20" cy="80" r="4" /><circle cx="220" cy="20" r="4" /><rect x="66" y="0" width="8" height="8" /><rect x="166" y="92" width="8" height="8" /></svg>
            <span className="sheet-caption">Bézier Road Editor <ArrowUpRight size={14} aria-hidden="true" /></span>
          </a>
          <span className="collage-star" aria-hidden="true">✳</span>
        </div>
      </div>
      <div className="hero-footnote"><span>Different problems. The same drive to figure them out.</span><a href="https://github.com/OzanT1" target="_blank" rel="noopener noreferrer">The code is on GitHub <ArrowUpRight size={15} aria-hidden="true" /></a></div>
    </section>
  );
}
