import { useEffect, useRef, useState, ReactNode, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Grain() {
  return <div className="grain" aria-hidden="true" />;
}

export function ArrowIcon({ size = 15, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M9 7h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

interface MagProps { children: ReactNode; subtle?: boolean; href?: string; onClick?: () => void; }
export function MagneticButton({ children, subtle = false, href, onClick }: MagProps) {
  const cls = `group relative inline-flex w-fit items-center justify-center overflow-hidden rounded-full px-6 py-3 text-xs uppercase tracking-[0.32em] transition cursor-pointer ${
    subtle
      ? 'border border-white/15 text-stone-200 hover:border-white/35'
      : 'bg-stone-100 text-black shadow-[0_0_50px_rgba(230,220,190,0.18)]'
  }`;
  const inner = (
    <>
      <span className="relative z-10 flex items-center justify-center gap-3 whitespace-nowrap">
        {children}
        <ArrowIcon size={15} className="transition group-hover:translate-x-1 group-hover:-translate-y-1"/>
      </span>
      {!subtle && (
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition duration-700 group-hover:translate-x-full"/>
      )}
    </>
  );
  if (href) return (
    <motion.a href={href} whileHover={{ scale: 1.035, y: -2 }} whileTap={{ scale: 0.98 }} className={cls}>{inner}</motion.a>
  );
  return (
    <motion.button onClick={onClick} whileHover={{ scale: 1.035, y: -2 }} whileTap={{ scale: 0.98 }} className={cls}>{inner}</motion.button>
  );
}

export function AmbientMarketLines() {
  const lines = useMemo(() =>
    Array.from({ length: 28 }, (_, i) => ({
      top: `${8 + Math.random() * 80}%`,
      left: `${Math.random() * 100}%`,
      width: `${60 + Math.random() * 280}px`,
      delay: Math.random() * 5,
      opacity: 0.04 + Math.random() * 0.11,
    })), []
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 80, opacity: line.opacity }}
          transition={{ duration: 8 + i * 0.25, delay: line.delay, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="absolute h-px bg-gradient-to-r from-transparent via-slate-200/50 to-transparent"
          style={{ top: line.top, left: line.left, width: line.width }}
        />
      ))}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        className="absolute left-[58%] top-[18%] h-[46rem] w-[46rem] rounded-full border border-white/[0.045]"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 110, repeat: Infinity, ease: 'linear' }}
        className="absolute left-[54%] top-[10%] h-[62rem] w-[62rem] rounded-full border border-slate-300/[0.035]"
      />
    </div>
  );
}

export function HeroParallax({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.35], [0, -180]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.3]);
  return (
    <motion.div style={{ y, opacity }} className="hero-shell relative z-10 flex min-h-screen flex-col justify-center pt-24">
      {children}
    </motion.div>
  );
}

export function OrbParallax({ style }: { style: React.CSSProperties }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.35], [0, 260]);
  return (
    <motion.div style={{ ...style, y, position: 'absolute', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />
  );
}

export function FadeUp({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); obs.disconnect(); } }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} className={`fade-up ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

// ── STATS STRIP — single scrolling line with diamonds ─────────────────────
export function StatsStrip() {
  const stats = [
    { value: '400+', label: 'Hours of Content' },
    { value: '3', label: 'Languages' },
    { value: '3', label: 'Program Tiers' },
    { value: 'MENA · LATAM · SEA', label: 'Global Reach' },
  ];

  return (
    <div className="stats-strip">
      <div className="stats-grid">
        {stats.map((s) => (
          <div key={s.label} className="stat-cell">
            <span className="serif stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── STAT ITEM (kept for compatibility) ───────────────────────────────────
export function StatItem({ value, suffix = '', label }: { value: number | null; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!value) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let n = 0;
        const step = Math.ceil(value / 45);
        const id = setInterval(() => { n += step; if (n >= value) { setCount(value); clearInterval(id); } else setCount(n); }, 28);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);
  return (
    <div ref={ref} className="flex flex-col items-center gap-3 text-center">
      {value !== null
        ? <span className="serif font-bold" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1, letterSpacing: '-0.05em', color: 'rgba(235,228,210,0.95)' }}>{count}{suffix}</span>
        : <span className="serif font-bold whitespace-nowrap" style={{ fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', lineHeight: 1, letterSpacing: '-0.02em', color: 'rgba(235,228,210,0.95)' }}>MENA · LATAM · SEA</span>
      }
      <span className="text-[10px] uppercase tracking-[0.4em]" style={{ color: 'rgba(200,192,175,0.4)' }}>{label}</span>
    </div>
  );
}

// ── MARKET TICKER ────────────────────────────────────────────────────────
interface TickerItem { symbol: string; price: number; dir: 'up' | 'down'; }
const BASE_TICKERS: TickerItem[] = [
  { symbol: 'EUR/USD', price: 1.0842, dir: 'up' },
  { symbol: 'GBP/USD', price: 1.2631, dir: 'down' },
  { symbol: 'XAU/USD', price: 2345.60, dir: 'up' },
  { symbol: 'BTC/USD', price: 63240, dir: 'up' },
  { symbol: 'USD/JPY', price: 153.42, dir: 'down' },
  { symbol: 'WTI Crude', price: 82.14, dir: 'down' },
  { symbol: 'S&P 500', price: 5204, dir: 'up' },
  { symbol: 'ETH/USD', price: 3412, dir: 'up' },
  { symbol: 'USD/CHF', price: 0.9021, dir: 'down' },
  { symbol: 'AUD/USD', price: 0.6542, dir: 'up' },
];
const HEADLINES = [
  'Fed holds rates steady amid inflation uncertainty',
  'Gold hits 6-month high on safe-haven demand',
  'EUR/USD consolidates ahead of ECB decision',
  'Bitcoin breaks $63K resistance on institutional inflows',
  'Oil slides on demand outlook revision',
  'Dollar strengthens as labour market remains resilient',
];
function fmt(p: number) { return p > 1000 ? p.toFixed(0) : p > 10 ? p.toFixed(2) : p.toFixed(4); }

export function MarketStrip() {
  const [tickers, setTickers] = useState<TickerItem[]>(BASE_TICKERS);
  useEffect(() => {
    const id = setInterval(() => {
      setTickers(prev => prev.map(t => {
        const d = (Math.random() - 0.49) * 0.002;
        return { ...t, price: t.price * (1 + d), dir: d >= 0 ? 'up' : 'down' };
      }));
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const tickerRow = tickers.map((t, i) => (
    <span key={i} className="inline-flex items-center gap-2 px-5 whitespace-nowrap">
      <span className="mono text-[11px]" style={{ color: 'rgba(200,192,175,0.45)' }}>{t.symbol}</span>
      <span className="mono text-[11px] font-medium" style={{ color: 'rgba(220,210,190,0.75)' }}>{fmt(t.price)}</span>
      <span className="mono text-[10px] font-bold" style={{ color: t.dir === 'up' ? '#1E7A4A' : '#C0392B' }}>
        {t.dir === 'up' ? '▲' : '▼'}
      </span>
    </span>
  ));

  const newsRow = HEADLINES.map((h, i) => (
    <span key={i} className="inline-flex items-center gap-5 px-8 whitespace-nowrap">
      <span className="mono text-[9px]" style={{ color: 'rgba(180,140,20,0.35)' }}>◆</span>
      <span className="mono text-[10px]" style={{ color: 'rgba(200,192,175,0.4)' }}>{h}</span>
    </span>
  ));

  return (
    <div style={{ background: '#060709', borderBottom: '0.5px solid rgba(180,140,20,0.15)' }}>
      <div style={{ overflow: 'hidden', borderBottom: '0.5px solid rgba(255,255,255,0.04)', padding: '6px 0' }}>
        <div className="ticker-fast" style={{ whiteSpace: 'nowrap', minWidth: 'max-content' }}>
          <span className="inline-flex">{tickerRow}</span>
          <span className="inline-flex">{tickerRow}</span>
        </div>
      </div>
      <div style={{ overflow: 'hidden', padding: '6px 0' }}>
        <div className="ticker-slow" style={{ whiteSpace: 'nowrap', minWidth: 'max-content' }}>
          <span className="inline-flex">{newsRow}</span>
          <span className="inline-flex">{newsRow}</span>
        </div>
      </div>
    </div>
  );
}
