import { Mail, Github, Linkedin, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section header */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Mail className="text-primary" size={28} />
            <h2 className="font-mono text-3xl font-bold">
              <span className="text-primary">04.</span> Get In Touch
            </h2>
          </div>

          <p className="text-muted-foreground text-lg mb-8">
            I'm currently open to new opportunities and collaborations. 
            Whether you have a question, want to discuss a project, or just want to say hi, 
            my inbox is always open!
          </p>

          {/* Contact card */}
          <div className="terminal-bg border-glow rounded-lg p-8 mb-8">
            <div className="font-mono text-sm text-left space-y-2 mb-6">
              <p className="text-muted-foreground">
                <span className="text-primary">const</span>{' '}
                <span className="text-accent">contact</span> = {'{'}
              </p>
              <p className="pl-4">
                <span className="text-foreground">email</span>:{' '}
                <span className="text-terminal-green">"your@email.com"</span>,
              </p>
              <p className="pl-4">
                <span className="text-foreground">location</span>:{' '}
                <span className="text-terminal-green">"Your City, Country"</span>,
              </p>
              <p className="pl-4">
                <span className="text-foreground">availability</span>:{' '}
                <span className="text-terminal-green">"Open to opportunities"</span>
              </p>
              <p className="text-muted-foreground">{'}'}</p>
            </div>

            <a
              href="mailto:your@email.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded-md hover:bg-primary/90 transition-colors glow-box"
            >
              <Send size={18} />
              Say Hello
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all card-hover"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all card-hover"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:your@email.com"
              className="p-4 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all card-hover"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
