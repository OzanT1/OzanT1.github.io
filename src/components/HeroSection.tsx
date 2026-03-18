import { Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative scanline">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px] animate-float animation-delay-200" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="inline-block mb-6 opacity-0 animate-fade-in-up">
            <span className="text-sm text-muted-foreground uppercase tracking-wider">
              Hello, I'm
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fade-in-up animation-delay-200">
            <span className="text-gradient">Ozan Utku Yılmaz</span>
          </h1>

          {/* Role */}
          <div className="h-12 mb-8 opacity-0 animate-fade-in-up animation-delay-400">
            <span className="text-2xl md:text-3xl text-primary glow-text font-medium">
              Software Engineer
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in-up animation-delay-600">
            Passionate about crafting immersive game experiences and building robust backend systems. Turning complex problems into elegant solutions.
          
          </p>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6 opacity-0 animate-fade-in-up animation-delay-600">
            <a href="https://github.com/OzanT1" target="_blank" rel="noopener noreferrer" className="p-3 border-glow rounded-full text-muted-foreground hover:text-primary hover:border-primary/60 transition-all">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ozan-utku-yılmaz" target="_blank" rel="noopener noreferrer" className="p-3 border-glow rounded-full text-muted-foreground hover:text-primary hover:border-primary/60 transition-all">
              <Linkedin size={24} />
            </a>
            <a href="mailto:ozanutkuyilmaz@gmail.com" className="p-3 border-glow rounded-full text-muted-foreground hover:text-primary hover:border-primary/60 transition-all">
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;