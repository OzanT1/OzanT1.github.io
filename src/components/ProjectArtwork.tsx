import type { ProjectVisual } from '@/data/projects';

// Explanatory illustrations, not screenshots of the applications.
export default function ProjectArtwork({ kind }: { kind: ProjectVisual }) {
  if (kind === 'commerce') return (
    <div className="artwork artwork-commerce" aria-label="Architecture illustration: API, queue, worker, database, and cache" role="img">
      <span className="artwork-label">ONE ORDER. SEVERAL MOVING PARTS.</span>
      <div className="system-flow"><span>API</span><i>→</i><span className="outlined-node">QUEUE</span><i>→</i><span>WORKER</span></div>
      <div className="system-branches"><span>PostgreSQL</span><span>Redis</span><span>Email</span></div>
      <span className="artwork-caption">A small map of the architecture ↗</span>
    </div>
  );
  if (kind === 'outreach') return (
    <div className="artwork artwork-outreach" aria-label="Workflow illustration: discover creators, deduplicate leads, send outreach, track follow-ups" role="img">
      <span className="artwork-label">FROM REPETITIVE TASK TO WORKFLOW</span>
      <div className="outreach-steps">Discover <span>↘</span><br /><span className="step-indent">Connect <span>↘</span></span><br /><span className="step-indent-double">Follow through.</span></div>
      <span className="artwork-caption">YouTube → Apps Script → Google Sheets</span>
    </div>
  );
  if (kind === 'spline') return (
    <div className="artwork artwork-spline" role="img" aria-label="Illustration of two Bézier splines with control points and a generated road mesh">
      <span className="artwork-label">A LITTLE MATH. A ROAD TO ANYWHERE.</span>
      <svg viewBox="0 0 360 170" aria-hidden="true">
        <defs><pattern id="spline-grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="currentColor" strokeWidth="0.4" opacity=".25" /></pattern></defs>
        <rect width="360" height="170" fill="url(#spline-grid)" />
        <path d="M25 130C120 -40 210 225 335 35L335 60C210 250 120 -15 25 155Z" fill="currentColor" opacity=".12" />
        <path d="M25 130C120 -40 210 225 335 35M25 155C120 -15 210 250 335 60" className="road-line" />
        <path d="M25 130 120 0M210 170 335 35" className="control-line" />
        {[[25,130], [120,0], [210,170], [335,35]].map(([x,y]) => <circle key={x} cx={x} cy={y} r="5" fill="currentColor" />)}
        <path d="m60 100 0 25m50 -22 0 25m50 1 0 25m50 2 0 25m50 -27 0 25m50 -62 0 25" className="mesh-lines" />
      </svg>
      <span className="artwork-caption">Control points → curves → mesh</span>
    </div>
  );
  if (kind === 'valet') return (
    <div className="artwork artwork-valet" role="img" aria-label="Illustration of ValetOps data relationships between staff, tickets, cars, and parking">
      <span className="artwork-label">PUTTING THE OPERATION IN ORDER</span>
      <div className="valet-map"><span>Staff</span><span>Cars</span><strong>ValetOps</strong><span>Tickets</span><span>Parking</span></div>
      <span className="artwork-caption">One operation. Connected data.</span>
    </div>
  );
  if (kind === 'workshop') return (
    <div className="artwork artwork-workshop" role="img" aria-label="Illustration of four players connected to one shared multiplayer workshop">
      <span className="artwork-label">FOUR PLAYERS. ONE SHARED WORKSHOP.</span>
      <div className="workshop-players"><span>01</span><span>02</span><span>03</span><span>04</span></div>
      <div className="workshop-shared">Make. Paint. Deliver.</div>
      <span className="artwork-caption">Shared orders / shared state / shared budget</span>
    </div>
  );
  if (kind === 'compression') return (
    <div className="artwork artwork-compression" role="img" aria-label="Conceptual illustration of repeated data becoming dictionary codes with LZW">
      <span className="artwork-label">SAME INFORMATION. LESS SPACE.</span>
      <div className="compression-equation"><span>ABAB<br />ABAB</span><i>→</i><strong>LZW</strong></div>
      <span className="artwork-caption">Text & bitmap compression / LZW</span>
    </div>
  );
  if (kind === 'assembly') return (
    <div className="artwork artwork-assembly" role="img" aria-label="A five-by-five tic-tac-toe board illustrating the configurable MIPS assembly game">
      <span className="artwork-label">THINK OUTSIDE THE 3 × 3.</span>
      <div className="assembly-board">{Array.from({length:25}, (_,i) => <span key={i}>{[0,6,12,18,24].includes(i) ? '×' : [2,8,16].includes(i) ? 'o' : ''}</span>)}</div>
      <span className="artwork-caption">A familiar game, a little closer to the metal.</span>
    </div>
  );
  if (kind === 'circles') return (
    <div className="artwork artwork-circles" role="img" aria-label="Illustration of circles packed without overlapping">
      <span className="artwork-label">A PLACE FOR EVERY CIRCLE.</span>
      <svg viewBox="0 0 340 160" aria-hidden="true">{[[42,80,32],[107,46,25],[110,118,35],[187,76,39],[257,35,20],[270,110,36],[324,59,13],[168,145,12],[23,145,13],[42,20,12]].map(([cx,cy,r]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill="none" stroke="currentColor" strokeWidth="2" />)}</svg>
      <span className="artwork-caption">An exercise in geometry & constraints.</span>
    </div>
  );
  return (
    <div className="artwork artwork-arcade" role="img" aria-label="Illustration for a mobile idle arcade prototype; see the gameplay video for the actual game">
      <span className="artwork-label">A SMALL BUILD. BEST SEEN IN MOTION.</span>
      <div className="arcade-symbol" aria-hidden="true">↗</div>
      <span className="artwork-caption">Unity / mobile prototype / gameplay ↗</span>
    </div>
  );
}
