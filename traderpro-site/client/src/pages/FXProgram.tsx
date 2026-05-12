import { motion } from 'framer-motion';
import { Grain, AmbientMarketLines, HeroParallax, OrbParallax, MagneticButton, FadeUp } from '@/components/Shared';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const W = "mx-auto w-full max-w-6xl px-8 md:px-20";

const tiers = {
  starter: {
    num: '01',
    title: 'FX Starter Pack',
    sub: 'Beginner Level',
    price: '$29.99/mo',
    trial: '7 days free',
    tagline: 'Your foundation for understanding the Forex market.',
    color: 'rgba(180,140,20,0.45)',
    description: 'The Starter Pack is where your trading journey begins. We simplify complex concepts and focus on the essentials — currency pairs, trading platforms, and market mechanics. Every module is designed so you grasp the fundamentals and execute your first trades with clarity and precision. This level transforms curiosity into actionable skills.',
    bullets: [
      'Understanding currency pairs and market structure',
      'Trading platforms — navigation, orders, and execution',
      'Candlestick fundamentals and chart reading basics',
      'Support and resistance — the foundations of price action',
      'Basic position sizing and capital allocation',
      'Introduction to risk management',
      'Developing a daily trading routine',
      'Trading psychology — patience and process',
    ],
    modules: ['Market Foundations', 'Chart Reading Essentials', 'Risk Basics', 'Your First Trade Plan', 'Forex Platform Mastery', 'Introduction to Technical Analysis'],
    href: '/programs/fx/starter',
  },
  skillbuilder: {
    num: '02',
    title: 'FX Skill Builder',
    sub: 'Intermediate Level',
    price: '$49.99/mo',
    trial: null,
    tagline: 'Level up. Develop a systematic edge and execute with intention.',
    color: 'rgba(180,140,20,0.65)',
    description: 'The Skill Builder level is where you transition from learning to trading. You delve into the art and science of technical and fundamental analysis — interpreting market data, identifying opportunities, and developing personalized strategies. Risk management becomes second nature as you refine your decision-making. You leave this level as a strategic trader.',
    bullets: [
      'Advanced technical analysis — patterns and indicators',
      'Multi-timeframe analysis and confluence',
      'Fundamental analysis and market drivers',
      'Trade entry and exit frameworks',
      'Risk management as a system — not a feeling',
      'Trading psychology and emotional discipline',
      'Backtesting a strategy with historical data',
      'Managing drawdown and losing streaks',
    ],
    modules: ['Advanced Chart Patterns', 'Execution Framework', 'Psychology of Trading', 'Building Your System', 'Fundamental Analysis', 'Live Market Application'],
    href: '/programs/fx/skillbuilder',
  },
  mastery: {
    num: '03',
    title: 'FX Mastery',
    sub: 'Advanced Level',
    price: '$79.99/mo',
    trial: null,
    tagline: 'Trading becomes an art. Professional-level execution and scalability.',
    color: 'rgba(212,175,55,0.85)',
    description: 'FX Mastery is where trading becomes a craft. This level unlocks the tools and techniques used by professional traders — algorithmic thinking, intermarket analysis, advanced charting tools like Ichimoku Cloud and Volume Profile. You will learn to adapt to dynamic market conditions, optimize performance, and execute strategies at a professional level. This is not just trading. This is mastering the market.',
    bullets: [
      'Algorithmic trading concepts and automation thinking',
      'Intermarket analysis — correlations and macro drivers',
      'Ichimoku Cloud — complete system mastery',
      'Volume Profile and market auction theory',
      'Institutional order flow and liquidity zones',
      'Advanced risk frameworks and portfolio thinking',
      'Live trading sessions with real-time coaching',
      'Mentorship and accountability structure',
    ],
    modules: ['Order Flow & Liquidity', 'Proprietary Systems', 'Advanced Risk Management', 'Live Trading Lab', 'Ichimoku & Volume Profile', 'Professional Execution'],
    href: '/programs/fx/mastery',
  },
};

type TierKey = keyof typeof tiers;

export function FXTierPage({ tier }: { tier: TierKey }) {
  const t = tiers[tier];
  const isElite = tier === 'mastery';

  return (
    <div style={{ background: 'var(--dark-1)', color: 'var(--stone)' }} className="min-h-screen">
      <Grain />
      <Navigation />

      {/* ── HERO ── */}
      <section className="relative min-h-[120vh] overflow-hidden" style={{ background: isElite ? '#07080b' : 'var(--dark-1)' }}>
        <AmbientMarketLines />
        <OrbParallax style={{ right: '-10rem', top: '-6rem', width: '42rem', height: '42rem', background: `radial-gradient(circle at 35% 35%, ${t.color.replace('0.', '0.1')}, transparent 70%)` }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 0%, ${isElite ? '#07080b' : 'var(--dark-1)'} 78%)` }} />
        {isElite && <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 200px rgba(184,134,11,0.04)' }} />}

        <HeroParallax>
          <div className="absolute left-4 top-32 hidden rotate-90 text-[10px] uppercase tracking-[0.7em] md:block" style={{ color: 'rgba(200,192,175,0.35)' }}>
            fx program / {t.sub.toLowerCase()}
          </div>
          <motion.p initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1 }}
            className="mb-3 text-xs uppercase tracking-[0.45em]" style={{ color: t.color }}>
            {t.num} / 03 — {t.sub}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.12 }}
            className="serif text-[14vw] leading-[0.78] tracking-[-0.09em] md:text-[11vw] max-w-[14ch]">
            {t.title.split(' ').slice(0, 2).join(' ')}
            <span className="block translate-x-[5vw] italic" style={{ color: t.color }}>{t.title.split(' ').slice(2).join(' ')}</span>
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.45 }}
            className="mt-10 md:ml-[44vw] md:max-w-lg">
            <div className="serif text-3xl mb-3" style={{ color: t.color, letterSpacing: '-0.04em' }}>
              {t.price}{t.trial && <span className="text-sm ml-2" style={{ color: 'rgba(200,192,175,0.5)' }}>({t.trial})</span>}
            </div>
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'rgba(200,192,175,0.68)' }}>{t.tagline}</p>
            <div className="flex flex-wrap gap-3">
              <MagneticButton href="/pricing">
                {t.trial ? 'Start free trial' : 'Enroll now'}
              </MagneticButton>
              <MagneticButton href="/pricing" subtle>View all plans</MagneticButton>
            </div>
          </motion.div>
        </HeroParallax>
      </section>

      {/* ── DESCRIPTION ── */}
      <section className="py-36 md:py-40 divider" style={{ background: isElite ? '#07080b' : 'var(--dark-1)' }}>
        <FadeUp>
          <p className="mb-8 text-xs uppercase tracking-[0.5em]" style={{ color: t.color }}>About this program</p>
          <div className="mx-auto px-8 md:px-20 grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-start max-w-7xl">
            <h2 className="serif text-[8vw] leading-[0.88] tracking-[-0.06em] md:text-[4vw]">
              What you will learn — and how you will trade.
            </h2>
            <p className="text-base leading-8" style={{ color: 'rgba(200,192,175,0.6)' }}>{t.description}</p>
          </div>
        </FadeUp>
      </section>

      {/* ── CURRICULUM ── */}
      <section className="py-36 md:py-40 divider" style={{ background: isElite ? '#090a0e' : 'var(--dark-2)' }}>
        <FadeUp>
          <p className="mb-8 text-xs uppercase tracking-[0.5em]" style={{ color: 'rgba(200,192,175,0.4)' }}>Curriculum</p>
          <h2 className="serif text-[8vw] leading-[0.88] tracking-[-0.06em] mb-16 md:text-[5vw]">
            What's covered.
          </h2>
        </FadeUp>
        <div className="mx-auto px-8 md:px-20 grid grid-cols-1 gap-0 md:grid-cols-2 max-w-6xl">
          {t.bullets.map((b, i) => (
            <FadeUp key={b} delay={i * 60}>
              <div className="flex items-start gap-4 py-4" style={{ borderBottom: '0.5px solid var(--border)' }}>
                <span className="text-xs mt-0.5 flex-shrink-0" style={{ color: t.color }}>▸</span>
                <span className="text-sm leading-6" style={{ color: 'rgba(200,192,175,0.75)' }}>{b}</span>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── MODULES ── */}
      <section className="py-36 divider" style={{ background: isElite ? '#07080b' : 'var(--dark-1)' }}>
        <FadeUp>
          <p className="mb-8 text-xs uppercase tracking-[0.5em]" style={{ color: 'rgba(200,192,175,0.4)' }}>Sample modules</p>
          <h2 className="serif text-[8vw] leading-[0.88] tracking-[-0.06em] mb-12 md:text-[5vw]">
            Inside the program.
          </h2>
        </FadeUp>
        <div className="mx-auto px-8 md:px-20 grid grid-cols-1 gap-3 md:grid-cols-3 max-w-4xl">
          {t.modules.map((m, i) => (
            <FadeUp key={m} delay={i * 70}>
              <div className="py-4 px-5 text-sm" style={{ border: '0.5px solid var(--border)', borderLeftColor: i === 0 ? 'var(--gold-solid)' : 'var(--border)', color: 'rgba(200,192,175,0.72)' }}>
                {m}
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-36 divider" style={{ background: isElite ? '#090a0e' : 'var(--dark-2)' }}>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <FadeUp>
          <div className="mx-auto px-8 md:px-20 flex max-w-7xl flex-col gap-12 md:flex-row md:items-end md:justify-between">
            <h2 className="serif text-[12vw] leading-[0.82] tracking-[-0.09em] md:text-[7vw] max-w-[12ch]">
              {tier === 'starter' ? 'Start here.\nStart now.' : tier === 'skillbuilder' ? 'Build your edge.' : 'Master the market.'}
            </h2>
            <div className="max-w-md space-y-6">
              <div className="serif text-4xl" style={{ color: t.color, letterSpacing: '-0.04em' }}>{t.price}</div>
              {t.trial && <p className="text-sm" style={{ color: 'rgba(200,192,175,0.5)' }}>{t.trial} — no credit card required.</p>}
              <MagneticButton href="/pricing">
                {t.trial ? 'Start 7-day free trial' : 'Enroll now'}
              </MagneticButton>
            </div>
          </div>
        </FadeUp>
      </section>

      <Footer />
    </div>
  );
}

export function StarterPage() { return <FXTierPage tier="starter" />; }
export function SkillBuilderPage() { return <FXTierPage tier="skillbuilder" />; }
export function MasteryPage() { return <FXTierPage tier="mastery" />; }
