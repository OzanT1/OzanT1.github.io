import { ExternalLink, Github, Trophy, Gamepad2, Server, Youtube, LucideIcon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import tankGameImage from '@/assets/Tank_Game_Prototype_Image.png';
import deadCenterImage from '@/assets/Dead_Center_Image.png';
import thirdPersonShooterImage from '@/assets/Third-Person_Shooter_Game_Image.png';
import stockPredictionImage from '@/assets/Stock-Price-Prediction-Image.png';
import hackathonImage from '@/assets/2nd_Place_—_HorizonAI_Global_Hackathon_2025_Image.png';
import maintenanceProtocolImage from '@/assets/Maintenance_Protocol_Image.png';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  youtube?: string;
  live?: string;
  inDev?: boolean;
  award?: boolean;
  image?: string;
}

interface Category {
  id: string;
  label: string;
  icon: LucideIcon;
  projects: Project[];
}

const ProjectLink = ({ href, icon: Icon, label, variant = 'primary' }: { href: string; icon: LucideIcon; label: string; variant?: 'primary' | 'accent' }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg border transition-all duration-300 ${
      variant === 'accent'
        ? 'border-accent/40 text-accent hover:bg-accent/20 hover:border-accent'
        : 'border-primary/40 text-primary hover:bg-primary/20 hover:border-primary'
    }`}
  >
    <Icon size={18} />
    {label}
  </a>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <div className={`bg-card border rounded-lg overflow-hidden card-hover group ${project.award ? 'border-accent/50' : 'border-border'}`}>
    {/* Image placeholder */}
    <div className="aspect-video bg-card relative overflow-hidden">
      {project.image ? (
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-muted-foreground text-sm text-center px-4">{project.title}</span>
          </div>
        </>
      )}
      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>

    <div className="p-6">
      {/* Badges */}
      <div className="flex items-center gap-2 mb-2">
        {project.award && (
          <span className="text-xs px-2 py-0.5 bg-accent/20 text-accent rounded-full border border-accent/30">
            🏆 Award
          </span>
        )}
        {project.inDev && (
          <span className="text-xs px-2 py-0.5 bg-accent/20 text-accent rounded-full border border-accent/30">
            In Development
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
        {project.title}
      </h3>

      {/* Links - prominent, right after title */}
      <div className="flex flex-wrap gap-3 mb-4">
        {project.github && <ProjectLink href={project.github} icon={Github} label="GitHub" />}
        {project.youtube && <ProjectLink href={project.youtube} icon={Youtube} label="YouTube" variant="accent" />}
        {project.live && <ProjectLink href={project.live} icon={ExternalLink} label="Website" />}
      </div>

      {/* Description */}
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span key={tech} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

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
      },
      {
        title: 'ValetOps Backend System',
        description: 'Designed the relational database and developed the backend for a car, valet, and ticket management system. Implemented JWT auth, Firebase Cloud Messaging, paginated queries, password hashing, Pydantic validation, and REST API design.',
        tech: ['Python', 'FastAPI', 'REST API', 'MySQL', 'SQLAlchemy', 'JWT', 'Firebase'],
        github: 'https://github.com/OzanT1/ValetOps',
      },
    ],
  },
  {
    id: 'gamedev',
    label: 'Game Development',
    icon: Gamepad2,
    projects: [
      {
        title: 'Maintenance Protocol',
        description: 'Developing an online multiplayer game using a server-authoritative networking architecture. Implemented fully replicated gameplay systems with bandwidth-conscious state synchronization. Designed latency-aware interaction systems for deterministic multiplayer behavior. Focused on runtime performance in a real-time environment.',
        tech: ['C++', 'Unreal Engine 5', 'Multiplayer', 'Behavior Trees', 'AI'],
        youtube: 'https://www.youtube.com/watch?v=PClBa2uX1Bw',
        inDev: true,
        image: maintenanceProtocolImage,
      },
      {
        title: 'Third-Person Shooter Game',
        description: 'Built a fully playable third-person shooter game featuring core combat mechanics with Behavior Tree–driven enemy AI using Unreal Engine 5.',
        tech: ['C++', 'Unreal Engine 5', 'Behavior Trees', 'AI'],
        github: 'https://github.com/OzanT1/THIRD-PERSON-SHOOTER-GAME-USING-UNREAL-ENGINE-5',
        image: thirdPersonShooterImage,
      },
      {
        title: 'Dead Center',
        description: 'Developed an endless third-person survival shooter with arena-based combat, infinite enemy spawning systems, user interfaces, and AI enemies that continuously pursue the player within a confined arena.',
        tech: ['Unreal Engine 4', 'Blueprints', 'PC'],
        youtube: 'https://www.youtube.com/watch?v=VdiY_CpLYj8',
        image: deadCenterImage,
      },
      {
        title: 'Tank Game Prototype',
        description: 'Developed a 3D tank game prototype implementing shooting mechanics, player health systems, and basic enemy AI using Unreal Engine 5 and C++.',
        tech: ['C++', 'Unreal Engine 5'],
        github: 'https://github.com/OzanT1/ToonTanks--A-Tank-Game-Prototype',
        image: tankGameImage,
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
        image: stockPredictionImage,
      },
      {
        title: '2nd Place — HorizonAI Global Hackathon 2025',
        description: 'Won 2nd place at the University of Miami HorizonAI Global Hackathon by developing an AI-powered mobile solution in a collaborative team environment.',
        tech: ['Python', 'Flutter', 'AI'],
        live: 'https://devpost.com/software/survivor-ai',
        award: true,
        image: hackathonImage,
      },
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">
              Projects
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <Tabs defaultValue="backend" className="w-full">
            <TabsList className="w-full justify-start bg-card border border-border mb-8 h-auto flex-wrap">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="text-sm data-[state=active]:bg-primary/20 data-[state=active]:text-primary gap-2"
                >
                  <cat.icon size={16} />
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id}>
                <div className="grid md:grid-cols-2 gap-6">
                  {cat.projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
