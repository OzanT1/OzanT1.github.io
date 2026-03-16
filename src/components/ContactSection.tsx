import { Mail, Github, Linkedin, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section header */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <h2 className="text-3xl font-bold">
              Get In Touch
            </h2>
          </div>

          <p className="text-muted-foreground text-lg mb-8">
            I'm currently open to new opportunities and collaborations. 
            Whether you have a question, want to discuss a project, or just want to say hi, 
            my inbox is always open!
          </p>

          {/* Contact card */}
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <div className="space-y-4 mb-8 text-left">
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground w-24">Email:</span>
                <span className="text-foreground">ozanutkuyilmaz@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground w-24">Location:</span>
                <span className="text-foreground">Turkey</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground w-24">Status:</span>
                <span className="text-primary">Open to opportunities</span>
              </div>
            </div>

            <a
              href="mailto:ozanutkuyilmaz@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors glow-box"
            >
              <Send size={18} />
              Send Message
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/OzanT1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all card-hover"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ozan-utku-yılmaz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all card-hover"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ozanutkuyilmaz@gmail.com"
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
