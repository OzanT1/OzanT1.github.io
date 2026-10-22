import { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function ContactSection() {
  const { copy: { contact: copy } } = useLanguage();
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'failed'>('idle');
  const email = 'ozanutkuyilmaz@gmail.com';

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('failed');
    }
  }

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="page-width">
        <div className="section-kicker eyebrow"><span>{copy.kicker}</span><span>{copy.note}</span></div>
        <div className="contact-layout">
          <h2 id="contact-heading">{copy.firstLine}<br /><em>{copy.emphasis}</em></h2>
          <div className="contact-copy"><p>{copy.intro}</p><a className="contact-cta" href={`mailto:${email}`}>{copy.talk}<ArrowUpRight size={26} aria-hidden="true" /></a></div>
        </div>
        <div className="contact-bottom">
          <a className="email-address" href={`mailto:${email}`}>{email}</a>
          <button className="copy-email" type="button" onClick={copyEmail} aria-label={copy.copyLabel}>
            {copyStatus === 'copied' ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
            <span>{copyStatus === 'copied' ? copy.copied : copy.copy}</span>
          </button>
          <span className="copy-status" role="status">{copyStatus === 'copied' ? copy.success : copyStatus === 'failed' ? copy.failure : ''}</span>
        </div>
      </div>
    </section>
  );
}
