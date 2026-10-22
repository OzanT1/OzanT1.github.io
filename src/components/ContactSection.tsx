import { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';

export default function ContactSection() {
  const [copyStatus, setCopyStatus] = useState('');
  const email = 'ozanutkuyilmaz@gmail.com';

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus('Email copied.');
    } catch {
      setCopyStatus('Select the email address to copy it, or click it to open your email app.');
    }
  }

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="page-width">
        <div className="section-kicker eyebrow"><span>03 / What’s next?</span><span>Let’s make something useful.</span></div>
        <div className="contact-layout">
          <h2 id="contact-heading">Have something<br /><em>in mind?</em></h2>
          <div className="contact-copy"><p>A problem to solve, an idea to explore, or a team to build with. I’d love to hear about it.</p><a className="contact-cta" href={`mailto:${email}`}>Let’s talk <ArrowUpRight size={26} aria-hidden="true" /></a></div>
        </div>
        <div className="contact-bottom"><a className="email-address" href={`mailto:${email}`}>{email}</a><button className="copy-email" onClick={copyEmail} aria-label="Copy email address">{copyStatus === 'Email copied.' ? <Check size={17} /> : <Copy size={17} />}<span>{copyStatus === 'Email copied.' ? 'Copied' : 'Copy email'}</span></button><span className="copy-status" role="status">{copyStatus}</span></div>
      </div>
    </section>
  );
}
