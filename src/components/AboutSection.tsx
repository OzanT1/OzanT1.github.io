const experience = [
  { company: 'PEILABS', date: 'Part-time · Nov 2024–Oct 2025', text: 'Built multiplayer systems in C# and Unity while finishing university. Replaced polling with an event-driven AI architecture, improving AI system performance by 30%.' },
  { company: 'Omni Factors', date: 'Internship · Aug–Sep 2024', text: 'Built full-stack features and CRM automations with Node.js and Zendesk APIs. Resolved an API rate-limiting issue affecting system stability.' },
  { company: 'Microsoft', date: 'Internship · Jul–Aug 2024', text: 'Worked on time-series models in Python and PyTorch: preparing data, training LSTM and GRU models, and evaluating the results.' },
];

export default function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <div className="page-width">
        <div className="section-kicker eyebrow"><span>02 / A little about me</span><span>Ozan Utku Yılmaz</span></div>
        <div className="about-layout">
          <div className="about-copy">
            <h2 id="about-heading">I like the part where<br />something <em>clicks.</em></h2>
            <p className="about-lead">An unfamiliar problem is a good reason to learn something new.</p>
            <p>I’m a software engineer based in Istanbul. I like understanding how things work, asking useful questions, and staying with a problem until there’s something real on the other side.</p>
            <p>Sometimes that means building a tool from scratch for a business owner. Sometimes it means making a team’s systems work better. I care about understanding what’s needed, choosing the right tools, and following through.</p>
            <div className="education-note"><span className="small-cross" aria-hidden="true">✳</span><p><strong>BSc, Computer Engineering</strong><br />MEF University · 2021–2025<br /><span>Honors · GPA 3.22 / 4.00</span></p></div>
          </div>
          <div className="experience-list">
            <p className="eyebrow experience-label">A few places I’ve contributed</p>
            {experience.map(item => <div className="experience-item" key={item.company}><div><h3>{item.company}</h3><span>{item.date}</span></div><p>{item.text}</p></div>)}
            <a className="text-link" href="https://www.linkedin.com/in/ozan-utku-y%C4%B1lmaz" target="_blank" rel="noopener noreferrer">More of the story on LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
