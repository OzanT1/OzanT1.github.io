import { ArrowUpRight, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer"><div className="page-width footer-inner">
      <span>© {new Date().getFullYear()} Ozan Utku Yılmaz</span>
      <div className="footer-links"><a href="https://github.com/OzanT1" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} aria-hidden="true" /></a><a href="https://www.linkedin.com/in/ozan-utku-y%C4%B1lmaz" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a><a href="#top">Back to top <ArrowUp size={14} aria-hidden="true" /></a></div>
    </div></footer>
  );
}
