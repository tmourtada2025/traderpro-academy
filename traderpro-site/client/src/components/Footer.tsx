import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--dark-1)', borderTop: '0.5px solid var(--border)' }} className="px-8 py-16 md:px-14">
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-12 md:grid-cols-3">
        <div>
          <div className="font-serif text-2xl text-stone-100 mb-3">TraderPro</div>
          <div className="text-[10px] uppercase tracking-[0.4em]" style={{ color: 'var(--stone-dim)' }}>Structure. Execution. Edge.</div>
          <p className="mt-4 text-xs leading-6" style={{ color: 'var(--stone-dim)', maxWidth: 260 }}>
            TradePro Education Ltd<br/>Arch. Makariou III, 41 — Nicosia, Cyprus<br/>contact@traderpro.academy
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-[9px] uppercase tracking-[0.4em] mb-1" style={{ color: 'var(--gold)' }}>Programs</div>
          {[['FX Starter Pack','/programs/fx/starter'],['FX Skill Builder','/programs/fx/skillbuilder'],['FX Mastery','/programs/fx/mastery'],['Crypto Program','/programs/crypto']].map(([l,h])=>(
            <Link key={h} href={h}><a className="text-xs uppercase tracking-[0.22em] transition hover:text-stone-100" style={{ color: 'var(--stone-dim)' }}>{l}</a></Link>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-[9px] uppercase tracking-[0.4em] mb-1" style={{ color: 'var(--gold)' }}>Legal</div>
          {[['Disclaimer','/policies/disclaimer'],['Privacy Policy','/policies/privacy'],['Refund Policy','/policies/refund'],['Terms & Conditions','/policies/terms'],['Cookies Policy','/policies/cookies']].map(([l,h])=>(
            <Link key={h} href={h}><a className="text-xs uppercase tracking-[0.22em] transition hover:text-stone-100" style={{ color: 'var(--stone-dim)' }}>{l}</a></Link>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-12 pt-6 text-center text-[10px] uppercase tracking-[0.3em]" style={{ borderTop: '0.5px solid var(--border)', color: 'rgba(200,192,175,0.25)' }}>
        © 2026 TradePro Education Ltd. "TraderPro Academy" is a registered trademark. All rights reserved. Registered in Cyprus.
      </div>
    </footer>
  );
}
