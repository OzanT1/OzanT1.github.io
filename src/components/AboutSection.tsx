import { Gamepad2, Server, Code2 } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Building scalable APIs, server-side solutions, and distributed systems using modern .NET ecosystem'
  },
  {
    icon: Gamepad2,
    title: 'Game Development',
    description: 'Creating immersive experiences using Unreal Engine 5 and Unity'
  },
  {
    icon: Code2,
    title: 'Clean Architecture',
    description: 'Writing maintainable, testable, and performant code'
  }];


  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">
              About Me
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Text content */}
            <div className="space-y-6">
              <div className="space-y-2 text-muted-foreground">
                <p className="text-foreground leading-relaxed text-lg">
                  I'm a software engineer with a deep passion for both game development and backend development. I love the challenge of building systems that are both performant and maintainable.
                

                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                My journey in software development started with a curiosity about how games work. 
                This led me down the path of understanding low-level systems, which naturally 
                evolved into a love for backend architecture.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Today, I combine these passions by building efficient server-side solutions 
                and creating engaging game experiences. Whether it's optimizing database queries 
                or implementing game physics, I approach every problem with the same dedication 
                to excellence.
              </p>
            </div>

            {/* Highlight cards */}
            <div className="space-y-4">
              {highlights.map((item, index) =>
              <div
                key={item.title}
                className="group bg-card border border-border rounded-lg p-6 card-hover"
                style={{ animationDelay: `${index * 100}ms` }}>
                
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default AboutSection;