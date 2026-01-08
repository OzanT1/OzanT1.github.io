import { useState, useEffect } from 'react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : ''
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="font-mono text-xl font-bold text-primary glow-text">
            {'<Dev />'}
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-mono text-sm text-muted-foreground link-underline hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="px-4 py-2 font-mono text-sm border-glow rounded-md text-primary hover:bg-primary/10 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
