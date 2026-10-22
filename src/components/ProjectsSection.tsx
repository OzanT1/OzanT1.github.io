import { ArrowUpRight, Play, Trophy } from 'lucide-react';
import { projects, type Project } from '@/data/projects';
import { useLanguage } from '@/i18n/LanguageContext';
import ProjectArtwork from './ProjectArtwork';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { language, copy: { work: copy } } = useLanguage();
  const content = language === 'tr' ? project.tr : project;
  const label = (template: string) => template.replace('{title}', content.title);
  return (
    <article className={`project project-${project.id}`} id={project.id}>
      <div className={`project-visual ${project.imageFit === 'contain' ? 'visual-contained' : ''}`}>
        {project.image ? <img src={project.image} alt={content.imageAlt} loading="lazy" decoding="async" width="720" height="420" /> : project.visual ? <ProjectArtwork kind={project.visual} /> : null}
        {content.award && <span className="award-note"><Trophy size={13} aria-hidden="true" />{content.award}</span>}
      </div>
      <div className="project-meta"><span className="project-number">{String(index + 1).padStart(2, '0')}</span><span>{content.context}</span></div>
      <h3>{content.title}</h3>
      <p>{content.description}</p>
      <ul className="project-tech" aria-label={label(copy.technologies)}>{content.tech.map(tech => <li key={tech}>{tech}</li>)}</ul>
      <div className="project-links">
        {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={label(copy.githubLabel)}>{copy.details}<ArrowUpRight size={15} aria-hidden="true" /></a>}
        {project.video && <a href={project.video} target="_blank" rel="noopener noreferrer" aria-label={label(copy.videoLabel)}>{copy.gameplay}<Play size={13} aria-hidden="true" /></a>}
        {project.website && <a href={project.website} target="_blank" rel="noopener noreferrer" aria-label={label(copy.storyLabel)}>{copy.story}<ArrowUpRight size={15} aria-hidden="true" /></a>}
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  const { copy: { work: copy } } = useLanguage();
  return (
    <section className="projects-section page-width" id="projects" aria-labelledby="work-heading">
      <div className="section-kicker eyebrow"><span>{copy.kicker}</span><span>{projects.length} {copy.count}</span></div>
      <div className="section-intro">
        <h2 id="work-heading">{copy.firstLine}<br />{copy.lead}<em>{copy.emphasis}</em></h2>
        <p>{copy.introFirst}<br className="desktop-break" /> {copy.introSecond}</p>
      </div>
      <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
      <a className="text-link all-code" href="https://github.com/OzanT1?tab=repositories" target="_blank" rel="noopener noreferrer">{copy.more}<ArrowUpRight size={18} aria-hidden="true" /></a>
    </section>
  );
}
