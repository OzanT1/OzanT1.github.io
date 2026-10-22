import { useLanguage } from '@/i18n/LanguageContext';

export default function AboutSection() {
  const { copy: { about: copy } } = useLanguage();
  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <div className="page-width">
        <div className="section-kicker eyebrow"><span>{copy.kicker}</span><span>Ozan Utku Yılmaz</span></div>
        <div className="about-layout">
          <div className="about-copy">
            <h2 id="about-heading">{copy.firstLine}<br />{copy.lead}<em>{copy.emphasis}</em></h2>
            <p className="about-lead">{copy.intro}</p>
            <p>{copy.firstParagraph}</p>
            <p>{copy.secondParagraph}</p>
            <div className="education-note">
              <span className="small-cross" aria-hidden="true">✳</span>
              <p><strong>{copy.degree}</strong><br />{copy.university}<br /><span>{copy.honors}</span></p>
            </div>
          </div>
          <div className="experience-list">
            <p className="eyebrow experience-label">{copy.experience}</p>
            {copy.jobs.map(item => (
              <div className="experience-item" key={item.company}>
                <div><h3>{item.company}</h3><span>{item.date}</span></div>
                <p>{item.text}</p>
              </div>
            ))}
            <a className="text-link" href="https://www.linkedin.com/in/ozan-utku-y%C4%B1lmaz" target="_blank" rel="noopener noreferrer">{copy.linkedin}<span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
