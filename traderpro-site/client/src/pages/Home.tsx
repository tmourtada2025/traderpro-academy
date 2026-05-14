import { motion } from 'framer-motion';
import { Grain, AmbientMarketLines, HeroParallax, OrbParallax, MagneticButton, FadeUp, StatsStrip, MarketStrip } from '@/components/Shared';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const testimonials = [
  { name: 'Ahmad K.', country: 'UAE', quote: 'Went from losing consistently to understanding my edge within 8 weeks. The market structure modules changed how I read price entirely.' },
  { name: 'Carlos M.', country: 'Mexico', quote: 'The risk management module alone changed how I size positions. I stopped revenge trading after week three.' },
  { name: 'Sarah T.', country: 'UK', quote: 'Finally a structured approach that speaks the language of real markets. No fluff, no motivation speeches — just edge.' },
];

const programs = [
  { num: '01', title: 'FX Starter Pack', sub: '$29.99/mo', text: 'Your foundation. Currency pairs, market mechanics, chart reading, and your first trade executed with clarity and precision.', href: '/programs/fx/starter' },
  { num: '02', title: 'FX Skill Builder', sub: '$49.99/mo', text: 'Technical and fundamental analysis, personalized strategies, risk management as a discipline — not a checkbox.', href: '/programs/fx/skillbuilder' },
  { num: '03', title: 'FX Mastery', sub: '$79.99/mo', text: 'Algorithmic thinking, intermarket analysis, Ichimoku and Volume Profile, professional-level execution and scalability.', href: '/programs/fx/mastery' },
];


export default function Home() {
  return (
    <div style={{ background: 'var(--dark-1)', color: 'var(--stone)' }} className="min-h-screen">
      <Grain />
      <Navigation />

      {/* ── HERO ── */}
      <section className="relative min-h-[140vh] overflow-hidden" style={{ background: 'var(--dark-1)' }}>
        <AmbientMarketLines />
        <OrbParallax style={{ right: '-16rem', top: '-8rem', width: '48rem', height: '48rem', background: 'radial-gradient(circle at 35% 35%, rgba(222,205,155,0.22), rgba(42,72,102,0.18) 36%, transparent 70%)' }} />
        <div className="absolute" style={{ left: '-18rem', top: '24rem', height: '38rem', width: '38rem', borderRadius: '50%', background: 'radial-gradient(circle, rgba(61,91,122,0.28), transparent 68%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 0%, var(--dark-1) 78%)' }} />

        <HeroParallax>
          <div className="absolute left-4 top-32 hidden rotate-90 text-[10px] uppercase tracking-[0.7em] md:block" style={{ color: 'rgba(200,192,175,0.4)' }}>
            academy / execution / discipline
          </div>
          <motion.p initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1 }}
            className="mb-5 max-w-xl text-xs uppercase tracking-[0.45em]" style={{ color: 'rgba(200,192,175,0.6)' }}>
            Professional trading education — 400+ hours across three levels
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.12 }}
            className="hero-title relative max-w-[15ch] serif leading-[0.76] tracking-[-0.09em]">
            Trade
            <span className="hero-title-shift block italic" style={{ color: 'rgba(235,228,210,0.9)' }}>with</span>
            <span className="hero-title-pull block">conviction.</span>
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.45 }}
            className="hero-copy flex flex-col gap-5">
            <p className="text-lg leading-relaxed md:text-xl" style={{ color: 'rgba(200,192,175,0.75)' }}>
              From market foundations to professional execution — TradePro delivers structured Forex and Crypto education in English, Arabic, and Spanish.
            </p>
            <div className="flex flex-wrap gap-3 pt-3">
              <MagneticButton href="/programs/fx/starter">Start learning</MagneticButton>
              <MagneticButton href="/pricing" subtle>View pricing</MagneticButton>
            </div>
          </motion.div>
        </HeroParallax>

        {/* Stats strip — anchored bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <StatsStrip />
        </div>
      </section>

      {/* ── MARKET STRIP ── */}
      <MarketStrip />

      {/* ── FLOW STATEMENT ── */}
      <section className="relative divider" style={{ background: 'var(--dark-1)', padding: '9rem 0' }}>
        <div className="section-content">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.5em] text-center" style={{ color: 'rgba(200,192,175,0.45)', marginBottom: '2.5rem' }}>The approach</p>
            <h2 className="serif leading-[0.86] tracking-[-0.075em] text-center" style={{ fontSize: 'clamp(3rem, 13vw, 8rem)' }}>
              Less theory.
              <span className="block" style={{ paddingLeft: '9%', color: 'rgba(200,192,175,0.55)' }}>More market.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <div className="mt-20 grid gap-16 md:grid-cols-[1fr_1.1fr] md:items-end">
              <p className="serif leading-tight" style={{ fontSize: 'clamp(1.4rem, 2.2vw, 2rem)', color: 'rgba(200,192,175,0.82)' }}>
                Over 400 hours built on what actually happens in live markets — not what textbooks say should happen.
              </p>
              <p className="text-base leading-9" style={{ color: 'rgba(200,192,175,0.55)' }}>
                Every module at TradePro is grounded in real market structure. Trading psychology is woven through all three levels — because discipline is the edge that separates profitable traders from the rest. We teach Forex and Crypto in English, Arabic, and Spanish.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="relative divider" style={{ background: 'var(--dark-2)', padding: '9rem 0' }}>
        <div className="absolute right-[-20vw] top-[10%] serif font-black uppercase leading-none tracking-[-0.12em]" style={{ fontSize: '28vw', color: 'rgba(255,255,255,0.018)', pointerEvents: 'none' }}>EDGE</div>
        <div className="section-content">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.5em] text-center mb-16" style={{ color: 'rgba(200,192,175,0.45)' }}>FX Programs</p>
          </FadeUp>
          {programs.map(({ num, title, sub, text, href }, i) => (
            <FadeUp key={title} delay={i * 80}>
              <div
                className={`program-row relative flex flex-col gap-6 py-14 md:grid md:grid-cols-[0.35fr_1fr_0.75fr] md:items-center ${i === 1 ? 'program-row--right' : i === 2 ? 'program-row--left' : ''}`}
                style={{ borderTop: '0.5px solid rgba(255,255,255,0.07)' }}
              >
                <span className="serif text-7xl italic" style={{ color: 'rgba(200,192,175,0.3)' }}>{num}</span>
                <div>
                  <h3 className="serif tracking-[-0.05em]" style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)' }}>{title}</h3>
                  <div className="mt-3 text-sm uppercase tracking-[0.25em]" style={{ color: 'var(--gold)' }}>{sub}</div>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="text-lg leading-8" style={{ color: 'rgba(200,192,175,0.55)', maxWidth: '28rem' }}>{text}</p>
                  <MagneticButton href={href} subtle>Explore program</MagneticButton>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── PROOF ── */}
      <section className="relative divider" style={{ background: 'var(--dark-1)', padding: '9rem 0' }}>
        <div className="absolute left-1/2 top-1/2 h-[55rem] w-[55rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(210,190,145,0.07), rgba(40,68,95,0.06) 38%, transparent 70%)' }} />
        <div className="section-content">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.55em] text-center" style={{ color: 'rgba(200,192,175,0.45)', marginBottom: '3rem' }}>Traders who made the shift</p>
            <h2 className="serif text-center leading-[0.8] tracking-[-0.09em]" style={{ fontSize: 'clamp(3rem, 14vw, 9rem)' }}>
              Proof in<span className="block" style={{ color: 'rgba(200,192,175,0.55)' }}>execution.</span>
            </h2>
          </FadeUp>
          <div className="mt-20 grid grid-cols-1 gap-px md:grid-cols-3" style={{ background: 'var(--border)' }}>
            {testimonials.map((t, i) => (
              <FadeUp key={t.name} delay={i * 100}>
                <div className="p-12 h-full" style={{ background: 'var(--dark-1)' }}>
                  <div className="serif text-5xl leading-none mb-6" style={{ color: 'var(--gold)', opacity: 0.5 }}>"</div>
                  <p className="text-base leading-7 italic mb-8" style={{ color: 'rgba(200,192,175,0.72)' }}>"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center serif font-bold flex-shrink-0" style={{ background: 'rgba(184,134,11,0.12)', color: 'var(--gold-bright)' }}>{t.name[0]}</div>
                    <div>
                      <div className="text-sm font-medium text-stone-200">{t.name}</div>
                      <div className="text-xs" style={{ color: 'var(--stone-dim)' }}>{t.country}</div>
                    </div>
                    <div className="ml-auto text-xs flex-shrink-0" style={{ color: 'var(--gold)' }}>★★★★★</div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative divider" style={{ background: 'var(--dark-2)', padding: '9rem 0' }}>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="section-content">
          <FadeUp>
            <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.5em]" style={{ color: 'rgba(200,192,175,0.45)', marginBottom: '2rem' }}>Begin</p>
                <h2 className="serif leading-[0.82] tracking-[-0.09em]" style={{ fontSize: 'clamp(2.5rem, 12vw, 8rem)', maxWidth: '12ch' }}>
                  Your edge starts here.
                </h2>
              </div>
              <div style={{ maxWidth: '28rem' }}>
                <p className="text-lg leading-8 mb-8" style={{ color: 'rgba(200,192,175,0.55)' }}>
                  Join traders across MENA, LATAM, and Southeast Asia. Start with 7 days free — no credit card required.
                </p>
                <MagneticButton href="/pricing">Start 7-day free trial</MagneticButton>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
