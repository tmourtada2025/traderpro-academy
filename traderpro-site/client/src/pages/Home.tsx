import { Grain, Orb, MagButton, FadeUp, StatItem, AmbientLines } from '@/components/Shared';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

const programs = [
  {
    tier: 'FX Starter Pack',
    price: '$29.99',
    desc: 'Market foundations, chart reading, risk basics',
    bullets: ['Candlestick fundamentals', 'Support & resistance levels', 'Position sizing 101', 'Risk management intro'],
    badge: null,
    primary: false,
  },
  {
    tier: 'FX Skill Builder',
    price: '$49.99',
    desc: 'Technical analysis, trade execution, psychology',
    bullets: ['Advanced chart patterns', 'Entry & exit strategies', 'Trading psychology', 'Live market application'],
    badge: 'Most Popular',
    primary: true,
  },
  {
    tier: 'FX Mastery',
    price: '$79.99',
    desc: 'Advanced strategies, full edge development',
    bullets: ['Proprietary trading systems', 'Risk management mastery', 'Live trading sessions', '1-on-1 mentorship'],
    badge: 'Elite',
    primary: true,
  },
];

const testimonials = [
  { name: 'Ahmad K.', country: 'UAE', quote: 'Went from losing consistently to understanding my edge within 8 weeks.' },
  { name: 'Carlos M.', country: 'Mexico', quote: 'The risk management module alone changed how I size positions.' },
  { name: 'Sarah T.', country: 'UK', quote: 'Finally a structured approach that speaks the language of real markets.' },
];

export default function Home() {
  return (
    <div style={{ background: 'var(--dark-1)' }} className="min-h-screen text-stone-100">
      <Grain />
      <Navigation />

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] overflow-hidden flex items-center" style={{ background: 'var(--dark-1)' }}>
        <AmbientLines />
        <Orb style={{ right: '-160px', top: '-60px', width: '520px', height: '520px', background: 'radial-gradient(circle at 35% 35%, rgba(222,205,155,0.18), rgba(42,72,102,0.14) 40%, transparent 70%)' }} />
        <Orb style={{ left: '-140px', top: '260px', width: '380px', height: '380px', background: 'radial-gradient(circle, rgba(61,91,122,0.22), transparent 68%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 0%, var(--dark-1) 90%)' }} />

        <div className="relative z-10 px-6 pt-8 md:px-12 w-full">
          <div className="text-[10px] uppercase tracking-[0.55em] text-stone-400/50 mb-6">A cinematic trading education experience</div>
          <h1 className="display-xl text-stone-100 max-w-[14ch]">
            Trade
            <span className="block italic text-stone-200/90" style={{ paddingLeft: '8%' }}>without</span>
            <span className="block">noise.</span>
          </h1>
          <div className="mt-10 md:ml-[42%] md:mt-[-1rem] max-w-md">
            <p className="text-lg leading-relaxed text-stone-300/75 mb-6">
              A premium academy for traders who want structure, execution, and market clarity — without the generic noise.
            </p>
            <div className="flex flex-wrap gap-3">
              <MagButton href="/pricing">Enter the academy</MagButton>
              <MagButton href="/programs" subtle>View programs</MagButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <div style={{ borderTop: '0.5px solid var(--border)', borderBottom: '0.5px solid var(--border)', background: 'var(--dark-2)' }} className="py-14 px-6 overflow-hidden">
        <div className="mx-auto max-w-6xl grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-4">
          {[
            { value: 400, suffix: '+', label: 'Hours of Content' },
            { value: 3,   suffix: '',  label: 'Languages' },
            { value: 3,   suffix: '',  label: 'Program Tiers' },
            { value: null, suffix: '', label: 'Global Reach' },
          ].map((s, i) => (
            <div key={i} className={`flex justify-center ${i < 3 ? 'md:border-r md:border-white/[0.06]' : ''}`}>
              <StatItem {...s} />
            </div>
          ))}
        </div>
      </div>

      {/* ── FLOW STATEMENT ── */}
      <section className="px-6 py-24 md:px-12 md:py-36 section-border">
        <FadeUp>
          <div className="text-[10px] uppercase tracking-[0.5em] text-stone-400/45 mb-8">The process</div>
          <h2 className="display-lg text-stone-100">
            Less template.
            <span className="block text-stone-400/60" style={{ paddingLeft: '10%' }}>More signal.</span>
          </h2>
        </FadeUp>
        <FadeUp delay={200} className="mt-16 grid gap-10 md:grid-cols-2 md:items-end max-w-6xl">
          <p className="text-2xl leading-tight text-stone-300/80 md:text-3xl serif">
            Education built on market structure. Every strategy tested in live conditions.
          </p>
          <p className="text-base leading-8 text-stone-400 max-w-md">
            No classroom model. No motivational rhetoric. Just traders teaching traders how to read price, manage risk, and execute with conviction. The market doesn't care about your credentials. It cares about your edge. We build that edge.
          </p>
        </FadeUp>
      </section>

      {/* ── PROGRAM CARDS ── */}
      <section className="px-6 py-24 md:px-12 md:py-36 section-border" style={{ background: 'var(--dark-2)' }}>
        <FadeUp>
          <div className="text-[10px] uppercase tracking-[0.5em] text-stone-400/45 mb-4">Choose your edge</div>
          <h2 className="display-md text-stone-100 mb-16">Three tiers.<span className="italic text-stone-400/60"> One direction.</span></h2>
        </FadeUp>
        <div className="grid grid-cols-1 gap-0 md:grid-cols-3 max-w-6xl mx-auto">
          {programs.map((p, i) => (
            <FadeUp key={p.tier} delay={i * 100}>
              <div
                className="relative p-8 h-full transition-all duration-300 group"
                style={{
                  borderTop: '0.5px solid var(--border)',
                  borderRight: i < 2 ? '0.5px solid var(--border)' : 'none',
                  borderLeft: 'none',
                  borderBottom: 'none',
                  cursor: 'default',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderLeftColor = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.borderLeftColor = 'transparent')}
              >
                {p.badge && (
                  <div className="text-[9px] uppercase tracking-[0.3em] mb-4 px-3 py-1 inline-block border" style={{ borderColor: 'var(--gold)', color: 'var(--gold-light)' }}>
                    {p.badge}
                  </div>
                )}
                <h3 className="serif text-2xl text-stone-100 mb-2" style={{ letterSpacing: '-0.03em' }}>{p.tier}</h3>
                <div className="serif text-3xl mb-2" style={{ color: 'var(--gold-light)', letterSpacing: '-0.04em' }}>
                  {p.price}<span className="text-sm text-stone-400">/mo</span>
                </div>
                <p className="text-sm text-stone-400 mb-6">{p.desc}</p>
                <ul className="space-y-2 mb-8">
                  {p.bullets.map(b => (
                    <li key={b} className="text-sm text-stone-300 flex items-start gap-2">
                      <span style={{ color: 'var(--gold)' }} className="mt-0.5">▸</span>{b}
                    </li>
                  ))}
                </ul>
                <Link href="/pricing">
                  <a className={`w-full block text-center py-3 text-[10px] uppercase tracking-[0.28em] transition-all ${
                    p.primary
                      ? 'font-medium'
                      : 'border text-stone-300 hover:text-stone-100'
                  }`}
                  style={p.primary ? { background: 'var(--gold)', color: '#08090c' } : { borderColor: 'rgba(255,255,255,0.15)' }}
                  >
                    {p.primary ? 'Start Free Trial' : 'Get Started'}
                  </a>
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── PROOF / TESTIMONIALS ── */}
      <section className="px-6 py-24 md:px-12 md:py-36 section-border">
        <FadeUp>
          <div className="text-[10px] uppercase tracking-[0.5em] text-stone-400/45 mb-4">Proof</div>
          <h2 className="display-md text-stone-100 mb-16">Trader <span className="italic" style={{ color: 'var(--gold-light)' }}>stories.</span></h2>
        </FadeUp>
        <div className="grid grid-cols-1 gap-px md:grid-cols-3 max-w-6xl mx-auto" style={{ background: 'var(--border)' }}>
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 120}>
              <div className="p-8 h-full" style={{ background: 'var(--dark-1)' }}>
                <div className="serif text-5xl leading-none mb-4" style={{ color: 'var(--gold)', opacity: 0.4 }}>"</div>
                <p className="text-base leading-7 text-stone-300/80 italic mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center serif font-bold" style={{ background: 'var(--gold-dim)', color: 'var(--gold-light)' }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-stone-200">{t.name}</div>
                    <div className="text-xs text-stone-400">{t.country}</div>
                  </div>
                  <div className="ml-auto text-xs" style={{ color: 'var(--gold)' }}>★★★★★</div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="px-6 py-24 md:px-12 md:py-36 section-border" style={{ background: 'var(--dark-2)' }}>
        <FadeUp className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-12">
          <h2 className="display-lg text-stone-100 max-w-[12ch]">
            Ready to trade with
            <span className="block italic" style={{ color: 'var(--gold-light)' }}>conviction?</span>
          </h2>
          <div className="max-w-sm">
            <p className="text-base leading-8 text-stone-400 mb-8">
              Join traders across MENA, LATAM, and Southeast Asia building real market edge. Start your free 30-day trial today.
            </p>
            <MagButton href="/pricing">Enter the academy</MagButton>
          </div>
        </FadeUp>
      </section>

      <Footer />
    </div>
  );
}
