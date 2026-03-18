import { Cpu } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C#', 'Python', 'C++', 'Java', 'JavaScript', 'SQL', 'HTML/CSS'],
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['ASP.NET Core', 'Entity Framework', 'FastAPI', 'Node.js', 'Express.js', 'React', 'PyTorch'],
    },
    {
      title: 'Game Development',
      skills: ['Unreal Engine', 'Unity'],
    },
    {
      title: 'Databases & Cloud',
      skills: ['MySQL', 'PostgreSQL', 'Redis', 'AWS', 'Firebase', 'Docker'],
    },
    {
      title: 'Tools & Concepts',
      skills: ['Git', 'GitHub', 'WebSockets', 'AI Integrations', 'OOP', 'Clean Code'],
    },
    {
      title: 'Languages (Spoken)',
      skills: ['Turkish (Native)', 'English (Proficient)'],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">
              Skills
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="bg-card border border-border rounded-lg p-6 card-hover"
              >
                <h3 className="text-lg font-semibold text-primary mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary group-hover:shadow-[0_0_8px_hsl(var(--primary))] transition-all" />
                      <span className="text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
