import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--dark-1)', borderTop: '0.5px solid var(--border)' }}>
      <div className="footer-inner">
        <div className="section-content">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '3rem' }} className="md:grid-cols-3">
            <div>
              <div className="font-serif" style={{ fontSize: '1.5rem', color: 'var(--stone)', marginBottom: '0.75rem' }}>TraderPro</div>
              <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.4em', color: 'var(--stone-dim)' }}>Structure. Execution. Edge.</div>
              <p style={{ marginTop: '1rem', fontSize: '0.75rem', lineHeight: 1.8, color: 'var(--stone-dim)', maxWidth: 260 }}>
                TradePro Education Ltd<br/>Arch. Makariou III, 41 — Nicosia, Cyprus<br/>contact@traderpro.academy
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.4em', color: 'var(--gold)', marginBottom: '0.25rem' }}>Programs</div>
              {[['FX Starter Pack','/programs/fx/starter'],['FX Skill Builder','/programs/fx/skillbuilder'],['FX Mastery','/programs/fx/mastery'],['Crypto Program','/programs/crypto']].map(([l,h])=>(
                <Link key={h} href={h}><a style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.22em', color: 'var(--stone-dim)', textDecoration: 'none' }}>{l}</a></Link>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.4em', color: 'var(--gold)', marginBottom: '0.25rem' }}>Legal</div>
              {[['Disclaimer','/policies/disclaimer'],['Privacy Policy','/policies/privacy'],['Refund Policy','/policies/refund'],['Terms & Conditions','/policies/terms'],['Cookies Policy','/policies/cookies']].map(([l,h])=>(
                <Link key={h} href={h}><a style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.22em', color: 'var(--stone-dim)', textDecoration: 'none' }}>{l}</a></Link>
              ))}
            </div>
          </div>
          <div style={{ borderTop: '0.5px solid var(--border)', marginTop: '3rem', paddingTop: '1.5rem', textAlign: 'center', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'rgba(200,192,175,0.25)' }}>
            © 2026 TradePro Education Ltd. "TraderPro Academy" is a registered trademark. Registered in Cyprus.
          </div>
        </div>
      </div>
    </footer>
  );
}
