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
      title: 'Game Dev',
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
            <Cpu className="text-primary" size={28} />
            <h2 className="font-mono text-3xl font-bold">
              <span className="text-primary">02.</span> Skills
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="bg-card border border-border rounded-lg p-6 card-hover"
              >
                <h3 className="font-mono text-lg font-semibold text-primary mb-4">
                  {'{'}  {category.title}  {'}'}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary group-hover:shadow-[0_0_8px_hsl(var(--primary))] transition-all" />
                      <span className="font-mono text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Experience bar visualization */}
          <div className="mt-16 terminal-bg border-glow rounded-lg p-8">
            <h3 className="font-mono text-lg mb-6 text-center">
              <span className="text-primary">//</span> Proficiency Levels
            </h3>
            <div className="space-y-4 max-w-2xl mx-auto">
              {[
                { skill: 'Backend Architecture', level: 90 },
                { skill: 'Game Development', level: 85 },
                { skill: 'System Design', level: 88 },
                { skill: 'DevOps', level: 75 },
              ].map((item) => (
                <div key={item.skill} className="space-y-2">
                  <div className="flex justify-between text-sm font-mono">
                    <span className="text-foreground">{item.skill}</span>
                    <span className="text-primary">{item.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
