import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

const links = [
  { label: 'Home',     href: '/' },
  { label: 'About',    href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Pricing',  href: '/pricing' },
];

interface TickerItem { symbol: string; price: number; dir: 'up'|'down'; change: number; }

const initialTickers: TickerItem[] = [
  { symbol: 'EUR/USD', price: 1.0842, dir: 'up',   change: 0.15 },
  { symbol: 'GBP/USD', price: 1.2631, dir: 'down', change: 0.08 },
  { symbol: 'XAU/USD', price: 2345.60,dir: 'up',   change: 0.32 },
  { symbol: 'BTC/USD', price: 63240,  dir: 'up',   change: 1.24 },
  { symbol: 'USD/JPY', price: 153.42, dir: 'down', change: 0.12 },
  { symbol: 'WTI',     price: 82.14,  dir: 'down', change: 0.45 },
  { symbol: 'S&P 500', price: 5204,   dir: 'up',   change: 0.67 },
  { symbol: 'ETH/USD', price: 3412,   dir: 'up',   change: 0.89 },
];

const headlines = [
  'Fed holds rates steady amid inflation uncertainty',
  'Gold hits 6-month high on safe-haven demand',
  'EUR/USD consolidates ahead of ECB decision',
  'Bitcoin breaks $63K resistance on institutional inflows',
  'Oil slides on demand outlook revision',
];

export default function Navigation() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [tickers, setTickers] = useState<TickerItem[]>(initialTickers);

  useEffect(() => {
    const id = setInterval(() => {
      setTickers(prev => prev.map(t => {
        const delta = (Math.random() - 0.5) * 0.002;
        const newPrice = t.price * (1 + delta);
        return { ...t, price: newPrice, dir: delta >= 0 ? 'up' : 'down', change: Math.abs(delta * 100) };
      }));
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const fmt = (p: number) => p > 1000 ? p.toFixed(0) : p > 10 ? p.toFixed(2) : p.toFixed(4);

  const tickerContent = tickers.map((t, i) => (
    <span key={i} className="inline-flex items-center gap-2 px-5 whitespace-nowrap">
      <span className="mono text-xs text-stone-400">{t.symbol}</span>
      <span className="mono text-xs font-medium text-stone-200">{fmt(t.price)}</span>
      <span className="mono text-xs font-bold" style={{ color: t.dir === 'up' ? 'var(--gain)' : 'var(--loss)' }}>
        {t.dir === 'up' ? '▲' : '▼'} {t.change.toFixed(2)}%
      </span>
    </span>
  ));

  const newsContent = headlines.map((h, i) => (
    <span key={i} className="inline-flex items-center gap-6 px-6 whitespace-nowrap mono text-xs text-stone-400">
      <span className="text-[var(--gold)] opacity-60">◆</span>
      {h}
    </span>
  ));

  return (
    <>
      {/* Main nav */}
      <header className="fixed left-0 right-0 top-0 z-50 px-6 py-5 md:px-10">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="serif text-xl tracking-wide text-stone-100 hover:text-[var(--gold-light)] transition-colors">
              TraderPro
            </a>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <Link key={l.href} href={l.href}>
                <a className={`text-[10px] uppercase tracking-[0.3em] transition-colors ${
                  location === l.href ? 'text-[var(--gold-light)]' : 'text-stone-300/65 hover:text-stone-100'
                }`}>{l.label}</a>
              </Link>
            ))}
          </nav>
          <Link href="/pricing">
            <a className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-[10px] uppercase tracking-[0.28em] text-stone-200 hover:border-white/30 transition-all">
              Start Free Trial
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><path d="M9 7h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </Link>
          <button onClick={() => setOpen(!open)} className="md:hidden rounded-full border border-white/10 p-3 text-white">
            {open
              ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              : <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
            }
          </button>
        </div>
        {open && (
          <div className="mt-4 rounded-2xl border border-white/10 bg-black/80 p-6 backdrop-blur-xl md:hidden">
            {links.map(l => (
              <Link key={l.href} href={l.href}>
                <a onClick={() => setOpen(false)} className="block py-3 text-sm uppercase tracking-[0.26em] text-stone-100">{l.label}</a>
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Ticker strip — sits below nav, sticky */}
      <div className="fixed left-0 right-0 z-40 overflow-hidden" style={{ top: '72px', background: '#0a0b0e', borderBottom: '0.5px solid var(--gold)', borderTop: '0.5px solid var(--border)' }}>
        <div className="flex whitespace-nowrap ticker-track py-2">
          <div className="flex">{tickerContent}</div>
          <div className="flex">{tickerContent}</div>
        </div>
      </div>

      {/* News banner */}
      <div className="fixed left-0 right-0 z-40 overflow-hidden" style={{ top: '108px', background: 'var(--dark-1)', borderBottom: '0.5px solid var(--border)' }}>
        <div className="flex whitespace-nowrap ticker-track-slow py-2">
          <div className="flex">{newsContent}</div>
          <div className="flex">{newsContent}</div>
        </div>
      </div>

      {/* Spacer so content doesn't hide behind fixed bars */}
      <div style={{ height: '148px' }} />
    </>
  );
}
