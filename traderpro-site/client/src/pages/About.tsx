import { Grain, Orb, FadeUp, AmbientLines } from '@/components/Shared';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const instructors = [
  { initials: 'TM', name: 'T. Mourtada', title: 'Lead Instructor', bio: '15+ years in institutional FX and financial markets education. Architect of the TradePro curriculum.' },
  { initials: 'AH', name: 'A. Hassan',   title: 'Market Strategist', bio: '12 years in quantitative trading and risk management. MENA markets specialist.' },
  { initials: 'SL', name: 'S. Lopez',    title: 'Psychology Coach', bio: '10 years coaching traders through volatility. Behavioral finance and execution expert.' },
];

export default function About() {
  return (
    <div style={{ background: 'var(--dark-1)' }} className="min-h-screen text-stone-100">
      <Grain />
      <Navigation />

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] overflow-hidden flex items-center px-6 md:px-12" style={{ background: 'var(--dark-1)' }}>
        <AmbientLines />
        <Orb style={{ right: '-100px', top: '-80px', width: '480px', height: '480px', background: 'radial-gradient(circle at 35% 35%, rgba(184,134,11,0.14), rgba(42,72,102,0.10) 40%, transparent 70%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 0%, var(--dark-1) 85%)' }} />
        <div className="relative z-10 pt-8">
          <FadeUp>
            <div className="text-[10px] uppercase tracking-[0.5em] text-stone-400/45 mb-6">About</div>
            <h1 className="display-xl text-stone-100 max-w-[16ch]">
              We exist to close the gap between
              <span className="block italic" style={{ color: 'var(--gold-light)', paddingLeft: '6%' }}>knowledge</span>
              and execution.
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="px-6 py-24 md:px-12 md:py-36 section-border">
        <FadeUp>
          <div className="text-[10px] uppercase tracking-[0.5em] text-stone-400/45 mb-8">Our philosophy</div>
        </FadeUp>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 max-w-6xl">
          <FadeUp delay={100}>
            <p className="text-2xl leading-tight text-stone-200/85 serif" style={{ letterSpacing: '-0.02em' }}>
              Education built around real market conditions — structure, discipline, edge — not theory.
            </p>
          </FadeUp>
          <FadeUp delay={200}>
            <div className="space-y-5 text-base leading-8 text-stone-400">
              <p>We reject the classroom model entirely. No motivational rhetoric. No generic trading-site templates. Just traders teaching traders how to read price, manage risk, and execute with conviction.</p>
              <p>Every module is built on market structure. Every strategy is tested in live conditions. Every lesson assumes you're serious about making money, not collecting certificates.</p>
              <p>TradePro exists because the market doesn't care about your credentials. It only cares about your edge. We build that edge.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── INSTRUCTORS ── */}
      <section className="px-6 py-24 md:px-12 section-border" style={{ background: 'var(--dark-2)' }}>
        <FadeUp>
          <div className="text-[10px] uppercase tracking-[0.5em] text-stone-400/45 mb-4">The team</div>
          <h2 className="display-md text-stone-100 mb-16">Built by <span className="italic" style={{ color: 'var(--gold-light)' }}>traders.</span></h2>
        </FadeUp>
        <div className="grid grid-cols-1 gap-px md:grid-cols-3 max-w-5xl" style={{ background: 'var(--border)' }}>
          {instructors.map((inst, i) => (
            <FadeUp key={inst.name} delay={i * 100}>
              <div className="p-8" style={{ background: 'var(--dark-2)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center serif text-xl font-bold mb-6" style={{ background: 'var(--gold-dim)', color: 'var(--gold-light)' }}>
                  {inst.initials}
                </div>
                <div className="serif text-xl text-stone-100 mb-1" style={{ letterSpacing: '-0.02em' }}>{inst.name}</div>
                <div className="text-xs uppercase tracking-[0.25em] mb-4" style={{ color: 'var(--gold)' }}>{inst.title}</div>
                <p className="text-sm leading-7 text-stone-400">{inst.bio}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="px-6 py-16 section-border">
        <div className="mx-auto max-w-5xl grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 text-center">
          {[
            { value: '400+', label: 'Hours of Content' },
            { value: '3',    label: 'Languages' },
            { value: '3',    label: 'Program Tiers' },
            { value: 'Global', label: 'MENA · LATAM · SEA' },
          ].map((s, i) => (
            <div key={i} className={`flex flex-col items-center gap-2 ${i < 3 ? 'md:border-r md:border-white/[0.07]' : ''}`}>
              <span className="serif font-bold text-[var(--gold-light)]" style={{ fontSize: 'clamp(36px,5vw,56px)', lineHeight: 1, letterSpacing: '-0.04em' }}>{s.value}</span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400/55">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
