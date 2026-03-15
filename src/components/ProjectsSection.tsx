import { FolderGit2, ExternalLink, Github, Trophy, Gamepad2, Server, Youtube, LucideIcon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  youtube?: string;
  live?: string;
  featured?: boolean;
  inDev?: boolean;
  award?: boolean;
}

interface Category {
  id: string;
  label: string;
  icon: LucideIcon;
  projects: Project[];
}

const ProjectsSection = () => {
  const categories: Category[] = [
    {
      id: 'backend',
      label: 'Backend',
      icon: Server,
      projects: [
        {
          title: 'E-Commerce Backend System',
          description: 'A multi-container backend system for e-commerce applications built using ASP.NET Core 9.0, RabbitMQ, Redis, and PostgreSQL. All services are containerized using Docker (Docker Compose) for easy deployment.',
          tech: ['C#', 'ASP.NET Core', 'REST API', 'RabbitMQ', 'Redis', 'PostgreSQL', 'Docker'],
          github: 'https://github.com/OzanT1/ECommerce-Backend-System',
          featured: true,
        },
        {
          title: 'ValetOps Backend System',
          description: 'Designed the relational database and developed the backend for a car, valet, and ticket management system. Implemented JWT auth, Firebase Cloud Messaging, paginated queries, password hashing, Pydantic validation, and REST API design.',
          tech: ['Python', 'FastAPI', 'REST API', 'MySQL', 'SQLAlchemy', 'JWT', 'Firebase'],
          github: 'https://github.com/OzanT1/ValetOps',
          featured: true,
        },
      ],
    },
    {
      id: 'gamedev',
      label: 'Game Dev',
      icon: Gamepad2,
      projects: [
        {
          title: 'Maintenance: Abandoned Station',
          description: 'Developing a multiplayer co-op horror game using a server-authoritative listen-server networking model. Implemented fully replicated interaction and task systems, AI enemies using Behavior Trees and AI Perception (sight and hearing), and a character locomotion system designed for multiplayer gameplay.',
          tech: ['C++', 'Unreal Engine 5', 'Multiplayer', 'Behavior Trees', 'AI'],
          youtube: 'https://www.youtube.com/watch?v=PClBa2uX1Bw',
          featured: true,
          inDev: true,
        },
        {
          title: 'Third-Person Shooter Game',
          description: 'Built a fully playable third-person shooter game featuring core combat mechanics with Behavior Tree–driven enemy AI using Unreal Engine 5.',
          tech: ['C++', 'Unreal Engine 5', 'Behavior Trees', 'AI'],
          github: 'https://github.com/OzanT1/THIRD-PERSON-SHOOTER-GAME-USING-UNREAL-ENGINE-5',
          featured: true,
        },
        {
          title: 'Dead Center',
          description: 'Developed an endless third-person survival shooter with arena-based combat, infinite enemy spawning systems, user interfaces, and AI enemies that continuously pursue the player within a confined arena.',
          tech: ['Unreal Engine 4', 'Blueprints', 'PC'],
          youtube: 'https://www.youtube.com/watch?v=VdiY_CpLYj8',
        },
        {
          title: 'Tank Game Prototype',
          description: 'Developed a 3D tank game prototype implementing shooting mechanics, player health systems, and basic enemy AI using Unreal Engine 5 and C++.',
          tech: ['C++', 'Unreal Engine 5'],
          github: 'https://github.com/OzanT1/ToonTanks--A-Tank-Game-Prototype',
        },
      ],
    },
    {
      id: 'other',
      label: 'AI & Awards',
      icon: Trophy,
      projects: [
        {
          title: 'Stock Price Prediction',
          description: 'Implemented LSTM and GRU models to forecast stock prices, including data preprocessing, visualization, and model evaluation.',
          tech: ['Python', 'PyTorch', 'Deep Learning', 'LSTM', 'GRU'],
          github: 'https://github.com/OzanT1/Stock-Price-Prediction',
        },
        {
          title: '🏆 2nd Place — HorizonAI Global Hackathon 2025',
          description: 'Won 2nd place at the University of Miami HorizonAI Global Hackathon by developing an AI-powered mobile solution in a collaborative team environment.',
          tech: ['Python', 'Flutter', 'AI'],
          live: 'https://devpost.com/software/survivor-ai',
          award: true,
        },
      ],
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

          <Tabs defaultValue="backend" className="w-full">
            <TabsList className="w-full justify-start bg-card border border-border mb-8 h-auto flex-wrap">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="font-mono text-sm data-[state=active]:bg-primary/20 data-[state=active]:text-primary gap-2"
                >
                  <cat.icon size={16} />
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id}>
                {/* Featured projects */}
                {cat.projects.filter(p => p.featured).length > 0 && (
                  <div className="space-y-8 mb-12">
                    {cat.projects.filter(p => p.featured).map((project, index) => (
                      <div
                        key={project.title}
                        className="grid md:grid-cols-2 gap-8 items-center"
                      >
                        <div className={`order-1 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                          <div className="aspect-video bg-card border-glow rounded-lg overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="font-mono text-muted-foreground text-sm text-center px-4">[ {project.title} ]</span>
                            </div>
                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>

                        <div className={`order-2 ${index % 2 === 1 ? 'md:order-1 md:text-left' : 'md:order-2 md:text-right'}`}>
                          <div className="flex items-center gap-2 mb-2" style={{ justifyContent: index % 2 === 1 ? 'flex-start' : undefined }}>
                            <p className="font-mono text-sm text-primary">Featured Project</p>
                            {project.inDev && (
                              <span className="font-mono text-xs px-2 py-0.5 bg-accent/20 text-accent rounded-full border border-accent/30">
                                In Development
                              </span>
                            )}
                          </div>
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
                            {project.youtube && (
                              <a href={project.youtube} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-red-500 transition-colors">
                                <Youtube size={20} />
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
                )}

                {/* Non-featured projects grid */}
                {cat.projects.filter(p => !p.featured).length > 0 && (
                  <div className="grid md:grid-cols-2 gap-6">
                    {cat.projects.filter(p => !p.featured).map((project) => (
                      <div
                        key={project.title}
                        className={`bg-card border rounded-lg p-6 card-hover group ${project.award ? 'border-accent/50' : 'border-border'}`}
                      >
                        <div className="flex items-start justify-between mb-4">
                          {project.award ? (
                            <Trophy className="text-accent" size={32} />
                          ) : (
                            <Gamepad2 className="text-primary" size={32} />
                          )}
                          <div className="flex gap-3">
                            {project.github && (
                              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github size={18} />
                              </a>
                            )}
                            {project.youtube && (
                              <a href={project.youtube} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-red-500 transition-colors">
                                <Youtube size={18} />
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
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
