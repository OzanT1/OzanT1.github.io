import type { ProjectVisual } from '@/data/projects';
import { useLanguage } from '@/i18n/LanguageContext';

// Explanatory illustrations, not screenshots of the applications.
export default function ProjectArtwork({ kind }: { kind: ProjectVisual }) {
  const { copy: { artwork: copy } } = useLanguage();
  if (kind === 'commerce') return (
    <div className="artwork artwork-commerce" aria-label={copy.commerce.alt} role="img">
      <span className="artwork-label">{copy.commerce.label}</span>
      <div className="system-flow"><span>API</span><i>→</i><span className="outlined-node">{copy.queue}</span><i>→</i><span>{copy.worker}</span></div>
      <div className="system-branches"><span>PostgreSQL</span><span>Redis</span><span>{copy.email}</span></div>
      <span className="artwork-caption">{copy.commerce.caption}</span>
    </div>
  );
  if (kind === 'outreach') return (
    <div className="artwork artwork-outreach" aria-label={copy.outreach.alt} role="img">
      <span className="artwork-label">{copy.outreach.label}</span>
      <div className="outreach-steps">{copy.discover} <span>↘</span><br /><span className="step-indent">{copy.connect} <span>↘</span></span><br /><span className="step-indent-double">{copy.follow}</span></div>
      <span className="artwork-caption">{copy.outreach.caption}</span>
    </div>
  );
  if (kind === 'spline') return (
    <div className="artwork artwork-spline" role="img" aria-label={copy.spline.alt}>
      <span className="artwork-label">{copy.spline.label}</span>
      <svg viewBox="0 0 360 170" aria-hidden="true">
        <defs><pattern id="spline-grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="currentColor" strokeWidth="0.4" opacity=".25" /></pattern></defs>
        <rect width="360" height="170" fill="url(#spline-grid)" />
        <path d="M25 130C120 -40 210 225 335 35L335 60C210 250 120 -15 25 155Z" fill="currentColor" opacity=".12" />
        <path d="M25 130C120 -40 210 225 335 35M25 155C120 -15 210 250 335 60" className="road-line" />
        <path d="M25 130 120 0M210 170 335 35" className="control-line" />
        {[[25,130], [120,0], [210,170], [335,35]].map(([x,y]) => <circle key={x} cx={x} cy={y} r="5" fill="currentColor" />)}
        <path d="m60 100 0 25m50 -22 0 25m50 1 0 25m50 2 0 25m50 -27 0 25m50 -62 0 25" className="mesh-lines" />
      </svg>
      <span className="artwork-caption">{copy.spline.caption}</span>
    </div>
  );
  if (kind === 'valet') return (
    <div className="artwork artwork-valet" role="img" aria-label={copy.valet.alt}>
      <span className="artwork-label">{copy.valet.label}</span>
      <div className="valet-map"><span>{copy.staff}</span><span>{copy.cars}</span><strong>ValetOps</strong><span>{copy.tickets}</span><span>{copy.parking}</span></div>
      <span className="artwork-caption">{copy.valet.caption}</span>
    </div>
  );
  if (kind === 'workshop') return (
    <div className="artwork artwork-workshop" role="img" aria-label={copy.workshop.alt}>
      <span className="artwork-label">{copy.workshop.label}</span>
      <div className="workshop-players"><span>01</span><span>02</span><span>03</span><span>04</span></div>
      <div className="workshop-shared">{copy.workshopSteps}</div>
      <span className="artwork-caption">{copy.workshop.caption}</span>
    </div>
  );
  if (kind === 'compression') return (
    <div className="artwork artwork-compression" role="img" aria-label={copy.compression.alt}>
      <span className="artwork-label">{copy.compression.label}</span>
      <div className="compression-equation"><span>ABAB<br />ABAB</span><i>→</i><strong>LZW</strong></div>
      <span className="artwork-caption">{copy.compression.caption}</span>
    </div>
  );
  if (kind === 'assembly') return (
    <div className="artwork artwork-assembly" role="img" aria-label={copy.assembly.alt}>
      <span className="artwork-label">{copy.assembly.label}</span>
      <div className="assembly-board">{Array.from({length:25}, (_,i) => <span key={i}>{[0,6,12,18,24].includes(i) ? '×' : [2,8,16].includes(i) ? 'o' : ''}</span>)}</div>
      <span className="artwork-caption">{copy.assembly.caption}</span>
    </div>
  );
  if (kind === 'circles') return (
    <div className="artwork artwork-circles" role="img" aria-label={copy.circles.alt}>
      <span className="artwork-label">{copy.circles.label}</span>
      <svg viewBox="0 0 340 160" aria-hidden="true">{[[42,80,32],[107,46,25],[110,118,35],[187,76,39],[257,35,20],[270,110,36],[324,59,13],[168,145,12],[23,145,13],[42,20,12]].map(([cx,cy,r]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill="none" stroke="currentColor" strokeWidth="2" />)}</svg>
      <span className="artwork-caption">{copy.circles.caption}</span>
    </div>
  );
  return (
    <div className="artwork artwork-arcade" role="img" aria-label={copy.arcade.alt}>
      <span className="artwork-label">{copy.arcade.label}</span>
      <div className="arcade-symbol" aria-hidden="true">↗</div>
      <span className="artwork-caption">{copy.arcade.caption}</span>
    </div>
  );
}
