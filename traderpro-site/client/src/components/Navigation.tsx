import { useState } from 'react';
import { Link, useLocation } from 'wouter';

function MenuIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
}
function CloseIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
}

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  const active = (path: string) =>
    location === path || location.startsWith(path + '/');

  const linkCls = (path: string) =>
    `text-[11px] uppercase tracking-[0.28em] transition hover:text-white ${active(path) ? 'text-white' : 'text-stone-300/75'}`;

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-5 py-5 md:px-9">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="font-serif text-xl tracking-wide text-stone-100 hover:opacity-80 transition">TraderPro</a>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">

          {/* Programs dropdown */}
          <div className="dropdown">
            <span className={`${linkCls('/programs')} cursor-default flex items-center gap-1`}>
              Programs
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.5, marginTop: 1 }}>
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <div className="dropdown-menu">
              <div className="section-label">FX Program</div>
              <Link href="/programs/fx/starter"><a>FX Starter Pack</a></Link>
              <Link href="/programs/fx/skillbuilder"><a>FX Skill Builder</a></Link>
              <Link href="/programs/fx/mastery"><a>FX Mastery</a></Link>
              <div className="section-label">Crypto Program</div>
              <Link href="/programs/crypto"><a>Coming Soon</a></Link>
            </div>
          </div>

          <Link href="/pricing"><a className={linkCls('/pricing')}>Pricing</a></Link>
          <Link href="/about"><a className={linkCls('/about')}>About</a></Link>

          {/* Policies dropdown */}
          <div className="dropdown">
            <span className="text-[11px] uppercase tracking-[0.28em] text-stone-300/75 hover:text-white transition cursor-default flex items-center gap-1">
              Policies
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.5, marginTop: 1 }}>
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <div className="dropdown-menu">
              <Link href="/policies/disclaimer"><a>Disclaimer</a></Link>
              <Link href="/policies/privacy"><a>Privacy Policy</a></Link>
              <Link href="/policies/refund"><a>Refund Policy</a></Link>
              <Link href="/policies/terms"><a>Terms & Conditions</a></Link>
              <Link href="/policies/cookies"><a>Cookies Policy</a></Link>
            </div>
          </div>
        </nav>

        {/* CTA */}
        <Link href="/pricing">
          <a className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-[10px] uppercase tracking-[0.28em] text-stone-200 hover:border-white/35 transition">
            Start Free Trial
          </a>
        </Link>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="rounded-full border border-white/10 p-3 text-white backdrop-blur md:hidden">
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mt-4 rounded-3xl border border-white/10 bg-black/80 p-6 backdrop-blur-xl md:hidden">
          <div className="mb-2 text-[9px] uppercase tracking-[0.45em]" style={{ color: 'var(--gold)' }}>FX Program</div>
          {[['FX Starter Pack','/programs/fx/starter'],['FX Skill Builder','/programs/fx/skillbuilder'],['FX Mastery','/programs/fx/mastery']].map(([l,h])=>(
            <Link key={h} href={h}><a onClick={()=>setOpen(false)} className="block py-2.5 text-sm uppercase tracking-[0.22em] text-stone-300">{l}</a></Link>
          ))}
          <div className="mt-3 mb-2 text-[9px] uppercase tracking-[0.45em]" style={{ color: 'var(--gold)' }}>Crypto Program</div>
          <Link href="/programs/crypto"><a onClick={()=>setOpen(false)} className="block py-2.5 text-sm uppercase tracking-[0.22em] text-stone-300">Coming Soon</a></Link>
          <div className="mt-4 border-t border-white/10 pt-4">
            {[['Pricing','/pricing'],['About','/about']].map(([l,h])=>(
              <Link key={h} href={h}><a onClick={()=>setOpen(false)} className="block py-2.5 text-sm uppercase tracking-[0.22em] text-stone-100">{l}</a></Link>
            ))}
          </div>
          <div className="mt-4 border-t border-white/10 pt-4">
            <div className="mb-2 text-[9px] uppercase tracking-[0.45em]" style={{ color: 'var(--stone-dim)' }}>Policies</div>
            {[['Disclaimer','/policies/disclaimer'],['Privacy Policy','/policies/privacy'],['Refund Policy','/policies/refund'],['Terms & Conditions','/policies/terms'],['Cookies Policy','/policies/cookies']].map(([l,h])=>(
              <Link key={h} href={h}><a onClick={()=>setOpen(false)} className="block py-2 text-xs uppercase tracking-[0.22em]" style={{ color: 'var(--stone-dim)' }}>{l}</a></Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
