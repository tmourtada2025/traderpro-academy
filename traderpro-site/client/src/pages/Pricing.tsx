import { useState } from 'react';
import { motion } from 'framer-motion';
import { Grain, AmbientMarketLines, HeroParallax, OrbParallax, MagneticButton, FadeUp } from '@/components/Shared';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const tiers = [
  {
    name: 'FX Starter Pack',
    mo: 29.99,
    tagline: 'For beginners starting their trading journey.',
    trial: '7 days free',
    features: [true, false, false, false, false, false, true, false],
    bullets: ['Limited access to beginner courses', 'Selected webinars and articles', 'Basic community access', 'No downloadable material'],
    primary: false,
  },
  {
    name: 'FX Skill Builder',
    mo: 49.99,
    tagline: 'For traders ready to advance their skills.',
    trial: null,
    badge: 'Most Popular',
    features: [true, true, true, false, false, false, true, true],
    bullets: ['Full beginner course access', 'Limited intermediate access', 'Monthly live Q&A sessions', 'Downloadable resources and tools'],
    primary: true,
  },
  {
    name: 'FX Mastery',
    mo: 79.99,
    tagline: 'For serious traders aiming for professional results.',
    trial: null,
    features: [true, true, true, true, true, true, true, true],
    bullets: ['Full access — all levels', 'Weekly live webinars & mentorship', 'Priority support', 'Doubled reward points'],
    primary: true,
  },
];

const featureRows = ['Beginner Courses', 'Intermediate Courses', 'Advanced Courses', 'Live Webinars', 'Mentorship Sessions', '1-on-1 Coaching', 'Community Access', 'Downloadable Material'];
const psps = ['Stripe', 'PayPal', 'Tether (USDT)', 'Google Pay', 'Apple Pay', 'Amazon Pay', 'Visa', 'Mastercard'];
const faqs = [
  ['Can I cancel anytime?', 'Yes. Cancel before your next billing date and you will not be charged again. No lock-in, no questions asked.'],
  ['What does the 7-day free trial include?', 'The free trial applies to the FX Starter Pack. You get full access to all beginner tier content for 7 days at no cost. No credit card required.'],
  ['Which languages are available?', 'All programs are delivered in English, Arabic, and Spanish.'],
  ['How do I access the courses after purchase?', 'Immediately after purchase you receive login credentials for the learning platform. Access is instant.'],
  ['Can I upgrade my plan?', 'Yes. Upgrade at any time and pay only the difference for the remainder of your billing period.'],
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const price = (mo: number) => annual ? (mo * 12 * 0.8).toFixed(2) : mo.toFixed(2);

  return (
    <div style={{ background: 'var(--dark-1)', color: 'var(--stone)' }} className="min-h-screen">
      <Grain />
      <Navigation />

      {/* ── HERO ── */}
      <section className="relative min-h-[80vh] overflow-hidden" style={{ background: 'var(--dark-1)' }}>
        <AmbientMarketLines />
        <OrbParallax style={{ right: '-8rem', top: '-4rem', width: '38rem', height: '38rem', background: 'radial-gradient(circle at 35% 35%, rgba(184,134,11,0.12), transparent 70%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 0%, var(--dark-1) 82%)' }} />
        <HeroParallax>
          <motion.p initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1 }}
            className="mb-5 text-xs uppercase tracking-[0.45em]" style={{ color: 'rgba(200,192,175,0.5)' }}>
            Transparent pricing
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.12 }}
            className="serif text-[16vw] leading-[0.76] tracking-[-0.09em] md:text-[12vw] max-w-[12ch]">
            No noise.
            <span className="block translate-x-[6vw] italic" style={{ color: 'rgba(200,192,175,0.5)' }}>No hidden fees.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.45 }}
            className="mt-8 text-base md:ml-[42vw] md:max-w-sm" style={{ color: 'rgba(200,192,175,0.6)' }}>
            Choose the plan that fits your learning stage. Cancel anytime.
          </motion.p>
        </HeroParallax>
      </section>

      {/* ── TOGGLE ── */}
      <section className="px-5 py-8 md:px-12 divider">
        <div className="flex items-center gap-8">
          <button onClick={() => setAnnual(false)} className={`text-[11px] uppercase tracking-[0.3em] pb-1 transition-all ${!annual ? 'text-stone-100 border-b border-[var(--gold-solid)]' : 'text-stone-400 hover:text-stone-200'}`}>
            Monthly
          </button>
          <button onClick={() => setAnnual(true)} className={`relative text-[11px] uppercase tracking-[0.3em] pb-1 transition-all ${annual ? 'text-stone-100 border-b border-[var(--gold-solid)]' : 'text-stone-400 hover:text-stone-200'}`}>
            Annual
            {annual && <span className="absolute -top-5 right-0 text-[8px] uppercase tracking-[0.2em] px-2 py-0.5 font-semibold" style={{ background: 'var(--gold-solid)', color: '#08090c' }}>Save 20%</span>}
          </button>
        </div>
      </section>

      {/* ── TIERS ── */}
      <section className="px-5 pb-20 md:px-12 divider">
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl" style={{ borderTop: '0.5px solid var(--border)' }}>
          {tiers.map((t, i) => (
            <FadeUp key={t.name} delay={i * 80}>
              <div className="p-8 h-full" style={{
                borderRight: i < 2 ? '0.5px solid var(--border)' : 'none',
                borderLeft: t.primary ? '2px solid var(--gold-solid)' : 'none',
                background: t.primary ? '#0a0c10' : 'var(--dark-1)',
              }}>
                {t.badge && (
                  <div className="text-[9px] uppercase tracking-[0.3em] mb-4 inline-block px-3 py-1" style={{ border: '0.5px solid var(--gold-solid)', color: 'var(--gold-bright)' }}>{t.badge}</div>
                )}
                <h3 className="serif text-2xl mb-2" style={{ letterSpacing: '-0.03em' }}>{t.name}</h3>
                <div className="serif mb-1" style={{ fontSize: 'clamp(32px,5vw,48px)', color: 'var(--gold-bright)', letterSpacing: '-0.04em', lineHeight: 1 }}>
                  ${price(t.mo)}<span className="text-sm" style={{ color: 'var(--stone-dim)' }}>{annual ? '/yr' : '/mo'}</span>
                </div>
                {t.trial && <div className="text-xs mb-3 uppercase tracking-[0.25em]" style={{ color: 'var(--gold)', opacity: 0.7 }}>{t.trial}</div>}
                <p className="text-sm mb-6" style={{ color: 'var(--stone-dim)' }}>{t.tagline}</p>
                <ul className="space-y-2 mb-8">
                  {t.bullets.map(b => (
                    <li key={b} className="text-sm flex items-start gap-2" style={{ color: 'rgba(200,192,175,0.65)' }}>
                      <span style={{ color: 'var(--gold)', marginTop: 2 }}>▸</span>{b}
                    </li>
                  ))}
                </ul>
                <MagneticButton href="/pricing" subtle={!t.primary}>
                  {t.trial ? 'Start 7-day free trial' : 'Enroll now'}
                </MagneticButton>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── FEATURE TABLE ── */}
      <section className="px-5 py-20 md:px-12 divider" style={{ background: 'var(--dark-2)' }}>
        <FadeUp>
          <p className="mb-8 text-xs uppercase tracking-[0.5em]" style={{ color: 'rgba(200,192,175,0.4)' }}>What's included</p>
        </FadeUp>
        <div className="max-w-5xl overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: '0.5px solid var(--border)' }}>
                <th className="text-left py-3 w-2/5 text-xs font-normal uppercase tracking-[0.25em]" style={{ color: 'rgba(200,192,175,0.35)' }}>Feature</th>
                {tiers.map(t => <th key={t.name} className="py-3 text-center text-xs font-normal uppercase tracking-[0.2em]" style={{ color: 'rgba(200,192,175,0.6)' }}>{t.name.split(' ').slice(1).join(' ')}</th>)}
              </tr>
            </thead>
            <tbody>
              {featureRows.map((row, ri) => (
                <tr key={row} style={{ borderBottom: '0.5px solid var(--border)' }}>
                  <td className="py-3 text-sm" style={{ color: 'rgba(200,192,175,0.55)' }}>{row}</td>
                  {tiers.map((t, ti) => (
                    <td key={ti} className="py-3 text-center text-sm">
                      {t.features[ri] ? <span style={{ color: 'var(--gold-bright)' }} className="serif">✓</span> : <span style={{ color: 'rgba(200,192,175,0.2)' }}>—</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── PAYMENT METHODS ── */}
      <section className="px-5 py-12 md:px-12 divider" style={{ background: 'var(--dark-1)' }}>
        <div className="text-center">
          <div className="text-[10px] uppercase tracking-[0.45em] mb-5" style={{ color: 'rgba(200,192,175,0.35)' }}>Accepted payment methods</div>
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
            {psps.map((p, i) => (
              <span key={p} className="flex items-center gap-2 mono text-xs" style={{ color: 'rgba(200,192,175,0.45)' }}>
                {i > 0 && <span style={{ color: 'var(--gold)', opacity: 0.3 }}>·</span>}
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-5 py-24 md:px-12 divider" style={{ background: 'var(--dark-2)' }}>
        <FadeUp>
          <p className="mb-4 text-xs uppercase tracking-[0.5em]" style={{ color: 'rgba(200,192,175,0.4)' }}>FAQ</p>
          <h2 className="serif text-[10vw] leading-[0.86] tracking-[-0.07em] mb-12 md:text-[5vw]">
            Common <span className="italic" style={{ color: 'var(--gold-bright)' }}>questions.</span>
          </h2>
        </FadeUp>
        <div className="max-w-2xl">
          {faqs.map(([q, a], i) => (
            <div key={i} style={{ borderTop: '0.5px solid var(--border)' }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between py-5 text-left group">
                <span className="text-base group-hover:text-stone-100 transition-colors" style={{ color: 'rgba(200,192,175,0.82)' }}>{q}</span>
                <span className="text-lg ml-4 flex-shrink-0" style={{ color: 'var(--stone-dim)' }}>{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && <div className="pb-5 text-sm leading-7" style={{ color: 'rgba(200,192,175,0.55)' }}>{a}</div>}
            </div>
          ))}
          <div style={{ borderTop: '0.5px solid var(--border)' }} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
