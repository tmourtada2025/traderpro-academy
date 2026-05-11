import { Grain, Orb, FadeUp, MagButton } from '@/components/Shared';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const tiers = [
  {
    id: 'starter',
    tier: 'FX Starter Pack',
    price: '$29.99',
    period: '/mo',
    tagline: 'Traders new to financial markets with zero to basic knowledge.',
    intensity: 'clean',
    bullets: [
      'Understanding market structure',
      'Reading candlestick charts',
      'Support and resistance levels',
      'Basic position sizing',
      'Introduction to risk management',
      'Developing a trading routine',
    ],
    modules: ['Market Foundations', 'Chart Reading Essentials', 'Risk Basics', 'Your First Trade Plan'],
  },
  {
    id: 'skillbuilder',
    tier: 'FX Skill Builder',
    price: '$49.99',
    period: '/mo',
    tagline: 'Traders with basic knowledge ready to build a systematic edge.',
    intensity: 'sharp',
    bullets: [
      'Advanced technical analysis',
      'Multi-timeframe analysis',
      'Trade entry and exit strategies',
      'Trading psychology and discipline',
      'Backtesting a strategy',
      'Managing drawdown',
    ],
    modules: ['Advanced Chart Patterns', 'Execution Framework', 'Psychology of Trading', 'Building Your System'],
  },
  {
    id: 'mastery',
    tier: 'FX Mastery',
    price: '$79.99',
    period: '/mo',
    tagline: 'Serious traders committed to professional-level execution.',
    intensity: 'elite',
    bullets: [
      'Proprietary trading systems',
      'Institutional order flow',
      'Advanced risk frameworks',
      'Live market application',
      'Portfolio-level thinking',
      'Mentorship and accountability',
    ],
    modules: ['Order Flow & Liquidity', 'Proprietary Systems', 'Advanced Risk', 'Live Trading Lab'],
  },
];

const intensityStyles = {
  clean: { bg: 'var(--dark-1)', accent: 'rgba(184,134,11,0.3)', glow: 'none' },
  sharp: { bg: '#0a0d11', accent: 'var(--gold)', glow: 'none' },
  elite: { bg: '#07080b', accent: 'var(--gold)', glow: '0 0 120px rgba(184,134,11,0.08)' },
};

export default function Programs() {
  return (
    <div style={{ background: 'var(--dark-1)' }} className="min-h-screen text-stone-100">
      <Grain />
      <Navigation />

      {/* Page hero */}
      <section className="px-6 py-20 md:px-12 section-border relative overflow-hidden">
        <Orb style={{ right: '-80px', top: '-60px', width: '400px', height: '400px', background: 'radial-gradient(circle at 35% 35%, rgba(184,134,11,0.12), transparent 70%)' }} />
        <FadeUp>
          <div className="text-[10px] uppercase tracking-[0.5em] text-stone-400/45 mb-6">Programs</div>
          <h1 className="display-lg text-stone-100">
            Three tiers.
            <span className="block italic" style={{ color: 'var(--gold-light)', paddingLeft: '6%' }}>One direction.</span>
          </h1>
        </FadeUp>
      </section>

      {/* Tier sections */}
      {tiers.map((tier, idx) => {
        const s = intensityStyles[tier.intensity as keyof typeof intensityStyles];
        return (
          <section
            key={tier.id}
            id={tier.id}
            className="section-border relative overflow-hidden"
            style={{ background: s.bg, boxShadow: s.glow }}
          >
            {tier.intensity === 'elite' && (
              <Orb style={{ left: '-100px', top: '50%', width: '400px', height: '400px', transform: 'translateY(-50%)', background: 'radial-gradient(circle, rgba(184,134,11,0.1), transparent 70%)' }} />
            )}
            <div className="px-6 py-20 md:px-12 md:py-32">
              <div className="max-w-6xl mx-auto grid grid-cols-1 gap-16 md:grid-cols-2 md:items-start">
                {/* Left */}
                <FadeUp>
                  <div className="text-[10px] uppercase tracking-[0.45em] mb-4 text-stone-400/45">
                    {String(idx + 1).padStart(2, '0')} / 03
                  </div>
                  <h2 className="display-md text-stone-100 mb-4">{tier.tier}</h2>
                  <div className="serif mb-4" style={{ fontSize: 'clamp(36px,6vw,60px)', color: 'var(--gold-light)', letterSpacing: '-0.04em', lineHeight: 1 }}>
                    {tier.price}<span className="text-base text-stone-400">{tier.period}</span>
                  </div>
                  <p className="text-base text-stone-400 leading-7 mb-8 max-w-sm">{tier.tagline}</p>
                  <MagButton href="/pricing">
                    {tier.intensity === 'clean' ? 'Get Started' : 'Start Free Trial'}
                  </MagButton>
                </FadeUp>
                {/* Right */}
                <FadeUp delay={150}>
                  <div className="space-y-0">
                    <div className="text-[10px] uppercase tracking-[0.4em] text-stone-400/45 mb-4">What you'll learn</div>
                    {tier.bullets.map((b, i) => (
                      <div key={b} className="flex items-start gap-4 py-3" style={{ borderBottom: '0.5px solid var(--border)' }}>
                        <span className="text-xs mt-0.5" style={{ color: s.accent }}>▸</span>
                        <span className="text-sm text-stone-300">{b}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10">
                    <div className="text-[10px] uppercase tracking-[0.4em] text-stone-400/45 mb-4">Sample modules</div>
                    <div className="grid grid-cols-2 gap-3">
                      {tier.modules.map((m, i) => (
                        <div key={m} className="py-3 px-4 text-xs text-stone-300" style={{ border: '0.5px solid var(--border)', borderLeftColor: i === 0 ? 'var(--gold)' : 'var(--border)' }}>
                          {m}
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeUp>
              </div>
            </div>
          </section>
        );
      })}

      <Footer />
    </div>
  );
}
