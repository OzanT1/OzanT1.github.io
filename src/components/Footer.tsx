const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">{'<'}</span>
            Built with passion
            <span className="text-primary">{' />'}</span>
          </p>
          <p className="font-mono text-xs text-muted-foreground/60 mt-2">
            © {new Date().getFullYear()} Ozan Utku Yilmaz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
