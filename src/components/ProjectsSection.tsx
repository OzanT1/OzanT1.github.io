import { FolderGit2, ExternalLink, Github, Trophy } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Backend System',
      description: 'A multi-container backend system for e-commerce applications built using ASP.NET Core 9.0, RabbitMQ, Redis, and PostgreSQL. All services are containerized using Docker (Docker Compose) for easy deployment.',
      tech: ['C#', 'ASP.NET Core', 'REST API', 'RabbitMQ', 'Redis', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/OzanT1/ECommerce-Backend-System',
      featured: true,
    },
    {
      title: "ValetOps Backend System",
      description: 'Designed the relational database and developed the backend for a car, valet, and ticket management system. Implemented JWT auth, Firebase Cloud Messaging, paginated queries, password hashing, Pydantic validation, and REST API design.',
      tech: ['Python', 'FastAPI', 'REST API', 'MySQL', 'SQLAlchemy', 'JWT', 'Firebase'],
      github: 'https://github.com/OzanT1/ValetOps',
      featured: true,
    },
    {
      title: 'Third-Person Shooter Game',
      description: 'Built a fully playable third-person shooter game featuring core combat mechanics with Behavior Tree–driven enemy AI using Unreal Engine 5.',
      tech: ['C++', 'Unreal Engine 5', 'Behavior Trees', 'AI'],
      github: 'https://github.com/OzanT1/THIRD-PERSON-SHOOTER-GAME-USING-UNREAL-ENGINE-5',
      featured: true,
    },
    {
      title: 'Stock Price Prediction',
      description: 'Implemented LSTM and GRU models to forecast stock prices, including data preprocessing, visualization, and model evaluation.',
      tech: ['Python', 'PyTorch', 'Deep Learning', 'LSTM', 'GRU'],
      github: 'https://github.com/OzanT1/Stock-Price-Prediction',
      featured: false,
    },
    {
      title: '🏆 2nd Place — HorizonAI Global Hackathon 2025',
      description: 'Won 2nd place at the University of Miami HorizonAI Global Hackathon by developing an AI-powered mobile solution in a collaborative team environment.',
      tech: ['Python', 'Flutter', 'AI'],
      live: 'https://devpost.com/software/survivor-ai',
      featured: false,
      award: true,
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
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
                <div className="aspect-video bg-card border-glow rounded-lg overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-muted-foreground text-sm text-center px-4">[ {project.title} ]</span>
                  </div>
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

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
                      <span key={tech} className="font-mono text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={`flex gap-4 ${index % 2 === 1 ? 'justify-start' : 'md:justify-end'}`}>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
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
            <span className="text-primary">//</span> Other Notable Projects & Awards
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project) => (
              <div
                key={project.title}
                className={`bg-card border rounded-lg p-6 card-hover group ${project.award ? 'border-accent/50' : 'border-border'}`}
              >
                <div className="flex items-start justify-between mb-4">
                  {project.award ? (
                    <Trophy className="text-accent" size={32} />
                  ) : (
                    <FolderGit2 className="text-primary" size={32} />
                  )}
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
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
