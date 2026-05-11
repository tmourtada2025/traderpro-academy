import { useEffect, useRef, useState, ReactNode } from 'react';

export function Grain() {
  return (
    <div className="grain" aria-hidden="true" />
  );
}

export function Orb({ style }: { style: React.CSSProperties }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        ...style,
      }}
    />
  );
}

interface MagButtonProps {
  children: ReactNode;
  subtle?: boolean;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export function MagButton({ children, subtle = false, onClick, href, className = '' }: MagButtonProps) {
  const base = `btn-shimmer group relative overflow-hidden rounded-full px-6 py-3 text-[10px] uppercase tracking-[0.32em] transition-all duration-200 inline-flex items-center gap-3 cursor-pointer`;
  const styles = subtle
    ? `${base} border border-white/15 text-stone-200 hover:border-white/30`
    : `${base} text-[#08090c] font-medium ${className}`;

  const bg = subtle ? {} : { background: '#e8e4d8', boxShadow: '0 0 40px rgba(230,220,190,0.12)' };

  const Arrow = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M9 7h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  if (href) {
    return (
      <a href={href} className={styles} style={bg}>
        {!subtle && <span className="shimmer-inner absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent" />}
        <span className="relative z-10 flex items-center gap-3">{children}<Arrow /></span>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles} style={bg}>
      {!subtle && <span className="shimmer-inner absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent" />}
      <span className="relative z-10 flex items-center gap-3">{children}<Arrow /></span>
    </button>
  );
}

export function FadeUp({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect(); }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`fade-up ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function StatItem({ value, suffix = '', label }: { value: number | null; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!value) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let n = 0;
        const step = Math.ceil(value / 45);
        const id = setInterval(() => {
          n += step;
          if (n >= value) { setCount(value); clearInterval(id); }
          else setCount(n);
        }, 28);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-3 text-center">
      {value !== null
        ? <span className="serif font-bold" style={{ fontSize: 'clamp(56px,9vw,96px)', lineHeight: 1, letterSpacing: '-0.05em', color: 'rgba(180,140,20,0.72)' }}>{count}{suffix}</span>
        : <span className="serif font-bold whitespace-nowrap" style={{ fontSize: 'clamp(22px,3vw,36px)', lineHeight: 1, letterSpacing: '-0.02em', color: 'rgba(180,140,20,0.72)' }}>MENA · LATAM · SEA</span>
      }
      <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400/45">{label}</span>
    </div>
  );
}

export function AmbientLines() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {Array.from({ length: 20 }, (_, i) => (
        <div
          key={i}
          className="absolute h-px"
          style={{
            top: `${10 + Math.sin(i * 1.3) * 40 + 30}%`,
            left: `${(i * 5.1) % 100}%`,
            width: `${80 + (i * 17) % 220}px`,
            background: 'linear-gradient(to right, transparent, rgba(200,192,175,0.06), transparent)',
            opacity: 0.4 + (i % 4) * 0.15,
          }}
        />
      ))}
      <div className="absolute rounded-full border border-white/[0.04]" style={{ left: '55%', top: '15%', width: '500px', height: '500px', transform: 'rotate(0deg)', animation: 'spin 90s linear infinite' }} />
    </div>
  );
}
