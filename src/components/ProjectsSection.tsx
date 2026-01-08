import { FolderGit2, ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Multiplayer Game Server',
      description: 'High-performance game server handling 10k+ concurrent players with real-time state synchronization and lag compensation.',
      tech: ['Rust', 'WebSocket', 'Redis', 'Docker'],
      github: '#',
      live: '#',
      featured: true,
    },
    {
      title: 'Cloud API Gateway',
      description: 'Scalable API gateway with rate limiting, authentication, and request routing for microservices architecture.',
      tech: ['Go', 'gRPC', 'PostgreSQL', 'Kubernetes'],
      github: '#',
      live: '#',
      featured: true,
    },
    {
      title: '2D Platformer Engine',
      description: 'Custom game engine with physics, particle systems, and level editor built from scratch.',
      tech: ['C++', 'OpenGL', 'ImGui', 'Box2D'],
      github: '#',
      featured: false,
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Live monitoring dashboard for game server metrics with alerting and historical analysis.',
      tech: ['TypeScript', 'React', 'InfluxDB', 'Grafana'],
      github: '#',
      live: '#',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <FolderGit2 className="text-primary" size={28} />
            <h2 className="font-mono text-3xl font-bold">
              <span className="text-primary">03.</span> Projects
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Featured projects */}
          <div className="space-y-8 mb-16">
            {projects.filter(p => p.featured).map((project, index) => (
              <div
                key={project.title}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Project image placeholder */}
                <div className="aspect-video bg-card border-glow rounded-lg overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-muted-foreground">[ Project Preview ]</span>
                  </div>
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Project info */}
                <div className={index % 2 === 1 ? 'md:text-left' : 'md:text-right'}>
                  <p className="font-mono text-sm text-primary mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="bg-card border border-border rounded-lg p-6 mb-4">
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                  <div className={`flex flex-wrap gap-3 mb-6 ${index % 2 === 1 ? 'justify-start' : 'md:justify-end'}`}>
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={`flex gap-4 ${index % 2 === 1 ? 'justify-start' : 'md:justify-end'}`}>
                    <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                      <Github size={20} />
                    </a>
                    {project.live && (
                      <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other projects grid */}
          <h3 className="font-mono text-xl text-center mb-8">
            <span className="text-primary">//</span> Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project) => (
              <div
                key={project.title}
                className="bg-card border border-border rounded-lg p-6 card-hover group"
              >
                <div className="flex items-start justify-between mb-4">
                  <FolderGit2 className="text-primary" size={32} />
                  <div className="flex gap-3">
                    <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                      <Github size={18} />
                    </a>
                    {project.live && (
                      <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="font-mono text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
