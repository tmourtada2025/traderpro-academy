import { motion } from 'framer-motion';
import { Grain, AmbientMarketLines, HeroParallax, OrbParallax, MagneticButton, FadeUp } from '@/components/Shared';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const instructors = [
  { initials: 'TM', name: 'T. Mourtada', title: 'Lead Instructor', bio: '15+ years in institutional FX and financial markets education. Architect of the TradePro curriculum.' },
  { initials: 'AH', name: 'A. Hassan', title: 'Market Strategist', bio: '12 years in quantitative trading and risk management. MENA markets specialist with live trading experience.' },
  { initials: 'SL', name: 'S. Lopez', title: 'Psychology Coach', bio: '10 years coaching traders through volatility. Behavioral finance and execution discipline expert.' },
];

export default function About() {
  return (
    <div style={{ background: 'var(--dark-1)', color: 'var(--stone)' }} className="min-h-screen">
      <Grain />
      <Navigation />

      {/* ── HERO ── */}
      <section className="relative min-h-[120vh] overflow-hidden" style={{ background: 'var(--dark-1)' }}>
        <AmbientMarketLines />
        <OrbParallax style={{ right: '-12rem', top: '-6rem', width: '44rem', height: '44rem', background: 'radial-gradient(circle at 35% 35%, rgba(184,134,11,0.14), rgba(42,72,102,0.10) 40%, transparent 70%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 0%, var(--dark-1) 80%)' }} />
        <HeroParallax>
          <motion.p initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1 }}
            className="mb-5 text-xs uppercase tracking-[0.45em]" style={{ color: 'rgba(200,192,175,0.55)' }}>
            Who we are
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.12 }}
            className="serif text-[14vw] leading-[0.78] tracking-[-0.09em] md:text-[10vw] max-w-[16ch]">
            Built by traders.
            <span className="block translate-x-[6vw] italic" style={{ color: 'rgba(235,228,210,0.7)' }}>For traders.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.45 }}
            className="mt-10 text-lg leading-relaxed md:ml-[42vw] md:max-w-lg md:text-xl" style={{ color: 'rgba(200,192,175,0.68)' }}>
            TradePro Academy was built on a single conviction: real traders need real education, not motivational rhetoric.
          </motion.p>
        </HeroParallax>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="px-8 py-32 md:px-20 md:py-40 divider" style={{ background: 'var(--dark-1)' }}>
        <FadeUp>
          <p className="mb-8 text-xs uppercase tracking-[0.5em]" style={{ color: 'rgba(200,192,175,0.45)' }}>Who we are</p>
          <h2 className="serif text-[10vw] leading-[0.86] tracking-[-0.07em] md:text-[6vw]">
            More than educators.
            <span className="block translate-x-[8vw]" style={{ color: 'rgba(200,192,175,0.5)' }}>We are market practitioners.</span>
          </h2>
        </FadeUp>
        <FadeUp delay={200} className="mt-16 grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-start max-w-7xl">
          <p className="text-2xl leading-tight serif md:text-3xl" style={{ color: 'rgba(200,192,175,0.82)' }}>
            TradePro Academy is a dynamic team of financial experts, seasoned educators, and market practitioners united by a shared vision.
          </p>
          <div className="space-y-5 text-base leading-8" style={{ color: 'rgba(200,192,175,0.55)' }}>
            <p>With decades of combined experience spanning Forex, crypto, market analysis, and pedagogy, we bring expertise and commitment to every module we produce.</p>
            <p>We are mentors, dedicated to guiding traders at every stage — from beginners laying their first foundations to professionals refining execution. Our approach integrates real-world market applications with cutting-edge insights across all three levels of our curriculum.</p>
            <p>Our environment is designed to empower students not just to learn, but to execute — with the confidence and skills to thrive in fast-moving financial markets.</p>
          </div>
        </FadeUp>
      </section>

      {/* ── VISION / MISSION ── */}
      <section className="px-8 py-32 md:px-20 md:py-40 divider" style={{ background: 'var(--dark-2)' }}>
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-24 md:grid-cols-2">
          <FadeUp>
            <p className="mb-6 text-xs uppercase tracking-[0.45em]" style={{ color: 'var(--gold)' }}>Our Vision</p>
            <h3 className="serif text-[8vw] leading-[0.88] tracking-[-0.06em] mb-8 md:text-[4vw]">
              Redefining the standards of trading education globally.
            </h3>
            <p className="text-base leading-8" style={{ color: 'rgba(200,192,175,0.55)' }}>
              We aspire to be the premier destination for individuals seeking to master financial markets — cultivating a community of empowered, skilled, and principled traders who approach the financial ecosystem with integrity and a commitment to excellence.
            </p>
          </FadeUp>
          <FadeUp delay={150}>
            <p className="mb-6 text-xs uppercase tracking-[0.45em]" style={{ color: 'var(--gold)' }}>Our Mission</p>
            <h3 className="serif text-[8vw] leading-[0.88] tracking-[-0.06em] mb-8 md:text-[4vw]">
              Making world-class trading education accessible and impactful.
            </h3>
            <p className="text-base leading-8" style={{ color: 'rgba(200,192,175,0.55)' }}>
              By blending cutting-edge resources, expert-led instruction, and a commitment to practical application, we provide traders with the knowledge, strategies, and tools to excel. We transform ambitious learners into informed, competent traders who adapt and thrive.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── WHAT WE OFFER ── */}
      <section className="px-8 py-32 md:px-20 md:py-40 divider" style={{ background: 'var(--dark-1)' }}>
        <FadeUp>
          <p className="mb-8 text-xs uppercase tracking-[0.5em]" style={{ color: 'rgba(200,192,175,0.45)' }}>Beyond the curriculum</p>
          <h2 className="serif text-[10vw] leading-[0.86] tracking-[-0.07em] md:text-[6vw] max-w-[16ch]">
            Education that goes beyond the screen.
          </h2>
        </FadeUp>
        <div className="mt-16 max-w-7xl grid grid-cols-1 gap-0 md:grid-cols-2">
          {[
            { title: 'Remote & Online Learning', text: 'Structured online modules and real-time interactions with instructors and peers — learn wherever you are, at your own pace.' },
            { title: 'Live Webinars', text: 'Regular webinars hosted by seasoned traders covering current market trends, advanced techniques, and practical insights with live Q&A.' },
            { title: 'Global Seminars', text: 'Large-scale events in major cities worldwide — meet fellow traders, network with industry professionals, and gain exclusive insights from top speakers.' },
            { title: 'One-on-One Coaching', text: 'Schedule personal sessions with expert course coaches. Whether you need help with a specific concept or strategic guidance, our coaches are with you.' },
          ].map((item, i) => (
            <FadeUp key={item.title} delay={i * 80}>
              <div className="p-8" style={{ borderTop: '0.5px solid var(--border)', borderRight: i % 2 === 0 ? '0.5px solid var(--border)' : 'none' }}>
                <h4 className="serif text-2xl tracking-[-0.03em] mb-4" style={{ color: 'var(--stone)' }}>{item.title}</h4>
                <p className="text-sm leading-7" style={{ color: 'rgba(200,192,175,0.55)' }}>{item.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="px-8 py-32 md:px-20 divider" style={{ background: 'var(--dark-2)' }}>
        <FadeUp>
          <p className="mb-4 text-xs uppercase tracking-[0.5em]" style={{ color: 'rgba(200,192,175,0.45)' }}>The team</p>
          <h2 className="serif text-[10vw] leading-[0.86] tracking-[-0.07em] mb-16 md:text-[6vw]">
            Built by <span className="italic" style={{ color: 'var(--gold-bright)' }}>practitioners.</span>
          </h2>
        </FadeUp>
        <div className="grid grid-cols-1 gap-px md:grid-cols-3 max-w-6xl" style={{ background: 'var(--border)' }}>
          {instructors.map((inst, i) => (
            <FadeUp key={inst.name} delay={i * 100}>
              <div className="p-8" style={{ background: 'var(--dark-2)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center serif text-xl font-bold mb-6" style={{ background: 'rgba(184,134,11,0.1)', color: 'var(--gold-bright)' }}>{inst.initials}</div>
                <div className="serif text-xl mb-1" style={{ letterSpacing: '-0.02em' }}>{inst.name}</div>
                <div className="text-[9px] uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--gold)' }}>{inst.title}</div>
                <p className="text-sm leading-7" style={{ color: 'rgba(200,192,175,0.55)' }}>{inst.bio}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden px-8 py-32 md:px-20 md:py-36 divider" style={{ background: 'var(--dark-1)' }}>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <FadeUp>
          <div className="mx-auto flex max-w-7xl flex-col gap-12 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-4xl serif text-[12vw] leading-[0.82] tracking-[-0.09em] md:text-[7vw]">
              Ready to build your edge?
            </h2>
            <div className="max-w-md space-y-8">
              <p className="text-lg leading-8" style={{ color: 'rgba(200,192,175,0.55)' }}>Seven days free. Three languages. Zero excuses.</p>
              <MagneticButton href="/pricing">Start 7-day free trial</MagneticButton>
            </div>
          </div>
        </FadeUp>
      </section>

      <Footer />
    </div>
  );
}
