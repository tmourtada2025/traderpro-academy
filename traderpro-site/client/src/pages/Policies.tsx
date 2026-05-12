import { motion } from 'framer-motion';
import { Grain, AmbientMarketLines, HeroParallax, FadeUp } from '@/components/Shared';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const policies = {
  disclaimer: {
    title: 'Disclaimer',
    sub: 'Important information about the use of TradePro Academy content.',
    body: `TradePro Academy provides educational content for informational purposes only. Nothing on this platform constitutes financial advice, investment advice, trading advice, or any other sort of advice.

Trading financial markets, including Forex and cryptocurrency, involves substantial risk of loss and is not suitable for every investor. Past performance is not indicative of future results. You should never invest money that you cannot afford to lose.

TradePro Academy, its instructors, and its affiliates are not responsible for any losses incurred as a result of the application of information provided through our educational programs, webinars, or any other content.

All content on TradePro Academy is for educational purposes only. You should consult with a licensed financial advisor before making any investment decisions.`,
  },
  privacy: {
    title: 'Privacy Policy',
    sub: 'How we collect, use, and protect your personal information.',
    body: `[PLACEHOLDER — To be written by TradePro Education Ltd]

This Privacy Policy will describe how TradePro Education Ltd ("we," "us," or "our") collects, uses, and shares information about you when you use our services.

Sections to include:
• Information we collect
• How we use your information
• Information sharing and disclosure
• Data retention
• Your rights and choices
• Cookies and tracking technologies
• Security
• Changes to this policy
• Contact information

TradePro Education Ltd — Arch. Makariou III, 41, Nicosia, Cyprus
contact@traderpro.academy`,
  },
  refund: {
    title: 'Refund Policy',
    sub: 'Our commitment to your satisfaction.',
    body: `[PLACEHOLDER — To be written by TradePro Education Ltd]

This Refund Policy will outline the conditions under which refunds are issued for TradePro Academy subscriptions and one-time purchases.

Sections to include:
• Subscription cancellation and refund eligibility
• Free trial terms
• One-time purchase refunds
• How to request a refund
• Processing time
• Exceptions

TradePro Education Ltd — Arch. Makariou III, 41, Nicosia, Cyprus
contact@traderpro.academy`,
  },
  terms: {
    title: 'Terms & Conditions',
    sub: 'The terms governing your use of TradePro Academy.',
    body: `[PLACEHOLDER — To be written by TradePro Education Ltd]

These Terms & Conditions govern your access to and use of TradePro Academy's platform, content, and services.

Sections to include:
• Acceptance of terms
• Description of service
• User accounts and registration
• Subscription and payment terms
• Intellectual property
• User conduct
• Disclaimers and limitation of liability
• Termination
• Governing law (Republic of Cyprus)
• Contact information

TradePro Education Ltd — Arch. Makariou III, 41, Nicosia, Cyprus
contact@traderpro.academy`,
  },
  cookies: {
    title: 'Cookies Policy',
    sub: 'How we use cookies and similar technologies.',
    body: `[PLACEHOLDER — To be written by TradePro Education Ltd]

This Cookies Policy explains how TradePro Academy uses cookies and similar tracking technologies when you visit our platform.

Sections to include:
• What are cookies
• Types of cookies we use (essential, analytics, marketing)
• Third-party cookies
• Managing your cookie preferences
• Changes to this policy
• Contact information

TradePro Education Ltd — Arch. Makariou III, 41, Nicosia, Cyprus
contact@traderpro.academy`,
  },
};

type PolicyKey = keyof typeof policies;

function PolicyPage({ slug }: { slug: PolicyKey }) {
  const p = policies[slug];
  return (
    <div style={{ background: 'var(--dark-1)', color: 'var(--stone)' }} className="min-h-screen">
      <Grain />
      <Navigation />

      <section className="relative min-h-[60vh] overflow-hidden" style={{ background: 'var(--dark-1)' }}>
        <AmbientMarketLines />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 0%, var(--dark-1) 80%)' }} />
        <HeroParallax>
          <motion.p initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1 }}
            className="mb-5 text-xs uppercase tracking-[0.45em]" style={{ color: 'rgba(200,192,175,0.45)' }}>
            Legal — Policies
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.12 }}
            className="serif text-[12vw] leading-[0.82] tracking-[-0.08em] md:text-[8vw] max-w-[16ch]">
            {p.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.45 }}
            className="mt-6 text-base max-w-lg" style={{ color: 'rgba(200,192,175,0.55)' }}>
            {p.sub}
          </motion.p>
        </HeroParallax>
      </section>

      <section className="px-8 py-32 md:px-20 divider">
        <FadeUp>
          <div className="max-w-4xl mx-auto">
            <div className="text-base leading-9 whitespace-pre-line" style={{ color: 'rgba(200,192,175,0.65)' }}>
              {p.body}
            </div>
          </div>
        </FadeUp>
      </section>

      <Footer />
    </div>
  );
}

export function DisclaimerPage() { return <PolicyPage slug="disclaimer" />; }
export function PrivacyPage() { return <PolicyPage slug="privacy" />; }
export function RefundPage() { return <PolicyPage slug="refund" />; }
export function TermsPage() { return <PolicyPage slug="terms" />; }
export function CookiesPage() { return <PolicyPage slug="cookies" />; }
