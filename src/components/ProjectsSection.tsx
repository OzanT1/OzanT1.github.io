import { ArrowUpRight, Play, Trophy } from 'lucide-react';
import { projects, type Project } from '@/data/projects';
import ProjectArtwork from './ProjectArtwork';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`project project-${project.id}`} id={project.id}>
      <div className={`project-visual ${project.imageFit === 'contain' ? 'visual-contained' : ''}`}>
        {project.image ? <img src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" width="720" height="420" /> : project.visual ? <ProjectArtwork kind={project.visual} /> : null}
        {project.award && <span className="award-note"><Trophy size={13} aria-hidden="true" />{project.award}</span>}
      </div>
      <div className="project-meta"><span className="project-number">{String(index + 1).padStart(2, '0')}</span><span>{project.context}</span></div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="project-tech" aria-label={`${project.title} technologies`}>{project.tech.map(tech => <li key={tech}>{tech}</li>)}</ul>
      <div className="project-links">
        {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`}>Code & details <ArrowUpRight size={15} aria-hidden="true" /></a>}
        {project.video && <a href={project.video} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${project.title} gameplay`}>Gameplay <Play size={13} aria-hidden="true" /></a>}
        {project.website && <a href={project.website} target="_blank" rel="noopener noreferrer" aria-label={`Read the ${project.title} project story`}>Project story <ArrowUpRight size={15} aria-hidden="true" /></a>}
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section className="projects-section page-width" id="projects" aria-labelledby="work-heading">
      <div className="section-kicker eyebrow"><span>01 / The work</span><span>{projects.length} projects & counting</span></div>
      <div className="section-intro">
        <h2 id="work-heading">Some of the things<br />I’ve <em>built.</em></h2>
        <p>Useful tools, shared worlds, small experiments.<br className="desktop-break" /> Each one started with something I wanted to figure out.</p>
      </div>
      <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
      <a className="text-link all-code" href="https://github.com/OzanT1?tab=repositories" target="_blank" rel="noopener noreferrer">There’s more behind the code <ArrowUpRight size={18} aria-hidden="true" /></a>
    </section>
  );
}
