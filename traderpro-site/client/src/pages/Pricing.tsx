import { useState } from 'react';
import { Grain, FadeUp, MagButton } from '@/components/Shared';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const tiers = [
  {
    name: 'Starter Pack',
    mo: 29.99,
    desc: 'The foundation. Market structure, chart reading, and the discipline to build on.',
    features: [true, false, false, false, false, false, true, true],
    cta: 'Get Started',
    primary: false,
  },
  {
    name: 'Skill Builder',
    mo: 49.99,
    desc: 'For traders ready to build a systematic edge and execute with intention.',
    features: [true, true, true, true, false, false, true, true],
    badge: 'Most Popular',
    cta: 'Start Free Trial',
    primary: true,
  },
  {
    name: 'Mastery',
    mo: 79.99,
    desc: 'Professional-level execution. Proprietary systems, live sessions, mentorship.',
    features: [true, true, true, true, true, true, true, true],
    badge: 'Elite',
    cta: 'Start Free Trial',
    primary: true,
  },
];

const featureRows = [
  'Video Modules',
  'Live Q&A Sessions',
  'Trading Psychology',
  'Live Market Execution',
  'Proprietary Systems',
  '1-on-1 Mentorship',
  'Community Access',
  'Certificate',
];

const faqs = [
  ['Can I cancel anytime?', 'Yes. Cancel before your next billing date and you will not be charged again. No lock-in.'],
  ['Which languages are available?', 'All programs are delivered in English, Arabic, and Spanish.'],
  ['How do I access the courses?', 'Immediately after purchase you receive login credentials for the learning platform. Access is instant.'],
  ['Is there a free trial?', 'Yes. Start with a 30-day free trial on any tier. No credit card required.'],
  ['Can I upgrade my plan?', 'Yes. Upgrade at any time and pay only the difference for the remainder of your billing period.'],
];

const psps = ['Stripe', 'PayPal', 'Tether (USDT)', 'Google Pay', 'Apple Pay', 'Amazon Pay', 'Visa', 'Mastercard'];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const price = (mo: number) => annual ? (mo * 12 * 0.8).toFixed(2) : mo.toFixed(2);
  const period = annual ? '/yr' : '/mo';

  return (
    <div style={{ background: 'var(--dark-1)' }} className="min-h-screen text-stone-100">
      <Grain />
      <Navigation />

      {/* Hero */}
      <section className="px-6 py-20 md:px-12 section-border">
        <FadeUp>
          <div className="text-[10px] uppercase tracking-[0.5em] text-stone-400/45 mb-6">Pricing</div>
          <h1 className="display-lg text-stone-100">
            Transparent.
            <span className="block italic" style={{ color: 'var(--gold-light)', paddingLeft: '8%' }}>No noise.</span>
          </h1>
          <p className="mt-6 text-base text-stone-400 max-w-md">Choose your tier. Cancel anytime. No hidden fees.</p>
        </FadeUp>
      </section>

      {/* Toggle */}
      <section className="px-6 py-8 md:px-12">
        <div className="flex items-center gap-6">
          <button
            onClick={() => setAnnual(false)}
            className={`text-[11px] uppercase tracking-[0.3em] pb-1 transition-all ${!annual ? 'text-stone-100 border-b border-[var(--gold)]' : 'text-stone-400 hover:text-stone-200'}`}
          >Monthly</button>
          <button
            onClick={() => setAnnual(true)}
            className={`text-[11px] uppercase tracking-[0.3em] pb-1 transition-all relative ${annual ? 'text-stone-100 border-b border-[var(--gold)]' : 'text-stone-400 hover:text-stone-200'}`}
          >
            Annual
            {annual && <span className="absolute -top-5 right-0 text-[8px] uppercase tracking-[0.2em] px-2 py-0.5" style={{ background: 'var(--gold)', color: '#08090c', fontWeight: 600 }}>Save 20%</span>}
          </button>
        </div>
      </section>

      {/* Tier columns */}
      <section className="px-6 pb-24 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl" style={{ borderTop: '0.5px solid var(--border)' }}>
          {tiers.map((t, i) => (
            <FadeUp key={t.name} delay={i * 80}>
              <div
                className="p-8 h-full"
                style={{
                  borderRight: i < 2 ? '0.5px solid var(--border)' : 'none',
                  borderLeft: t.primary ? `2px solid var(--gold)` : 'none',
                  background: t.primary ? '#0a0c10' : 'var(--dark-1)',
                }}
              >
                {t.badge && (
                  <div className="text-[9px] uppercase tracking-[0.3em] mb-4 inline-block px-3 py-1" style={{ border: '0.5px solid var(--gold)', color: 'var(--gold-light)' }}>
                    {t.badge}
                  </div>
                )}
                <h3 className="serif text-2xl text-stone-100 mb-2" style={{ letterSpacing: '-0.03em' }}>{t.name}</h3>
                <div className="serif mb-3" style={{ fontSize: 'clamp(32px,5vw,48px)', color: 'var(--gold-light)', letterSpacing: '-0.04em', lineHeight: 1 }}>
                  ${price(t.mo)}<span className="text-sm text-stone-400">{period}</span>
                </div>
                <p className="text-sm text-stone-400 leading-6 mb-6">{t.desc}</p>
                <MagButton href="#" className={t.primary ? '' : 'opacity-80'}>
                  {t.cta}
                </MagButton>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Feature comparison */}
      <section className="px-6 pb-24 md:px-12 section-border">
        <FadeUp>
          <div className="text-[10px] uppercase tracking-[0.5em] text-stone-400/45 mb-8">What's included</div>
        </FadeUp>
        <div className="max-w-6xl overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: '0.5px solid var(--border)' }}>
                <th className="text-left py-3 text-xs text-stone-400/45 font-normal uppercase tracking-[0.25em] w-1/3">Feature</th>
                {tiers.map(t => (
                  <th key={t.name} className="py-3 text-center text-xs text-stone-300 font-normal uppercase tracking-[0.2em]">{t.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureRows.map((row, ri) => (
                <tr key={row} style={{ borderBottom: '0.5px solid var(--border)' }}>
                  <td className="py-3 text-sm text-stone-400">{row}</td>
                  {tiers.map((t, ti) => (
                    <td key={ti} className="py-3 text-center text-sm">
                      {t.features[ri]
                        ? <span style={{ color: 'var(--gold-light)' }} className="serif">✓</span>
                        : <span className="text-stone-600">—</span>
                      }
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Payment methods */}
      <section className="px-6 py-12 md:px-12 section-border" style={{ background: 'var(--dark-2)' }}>
        <div className="text-center">
          <div className="text-[10px] uppercase tracking-[0.45em] text-stone-400/45 mb-5">Accepted payment methods</div>
          <div className="flex flex-wrap justify-center gap-3">
            {psps.map((p, i) => (
              <span key={p} className="flex items-center gap-2 mono text-xs text-stone-400">
                {i > 0 && <span style={{ color: 'var(--gold)', opacity: 0.4 }}>·</span>}
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 md:px-12 section-border">
        <FadeUp>
          <div className="text-[10px] uppercase tracking-[0.5em] text-stone-400/45 mb-4">FAQ</div>
          <h2 className="display-md text-stone-100 mb-12">Common <span className="italic" style={{ color: 'var(--gold-light)' }}>questions.</span></h2>
        </FadeUp>
        <div className="max-w-2xl">
          {faqs.map(([q, a], i) => (
            <div key={i} style={{ borderTop: '0.5px solid var(--border)' }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="text-base text-stone-200 group-hover:text-stone-100 transition-colors">{q}</span>
                <span className="text-stone-500 text-lg ml-4">{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && (
                <div className="pb-5 text-sm leading-7 text-stone-400">{a}</div>
              )}
            </div>
          ))}
          <div style={{ borderTop: '0.5px solid var(--border)' }} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
