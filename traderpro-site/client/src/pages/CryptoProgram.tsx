import { motion } from 'framer-motion';
import { Grain, AmbientMarketLines, HeroParallax, OrbParallax, MagneticButton } from '@/components/Shared';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function CryptoProgram() {
  return (
    <div style={{ background: 'var(--dark-1)', color: 'var(--stone)' }} className="min-h-screen">
      <Grain />
      <Navigation />

      <section className="relative min-h-screen overflow-hidden" style={{ background: '#07080c' }}>
        <AmbientMarketLines />
        <OrbParallax style={{ right: '-14rem', top: '-8rem', width: '46rem', height: '46rem', background: 'radial-gradient(circle at 35% 35%, rgba(100,180,220,0.08), rgba(42,72,102,0.12) 40%, transparent 70%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 0%, #07080c 80%)' }} />

        <HeroParallax>
          <motion.p initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1 }}
            className="mb-5 text-xs uppercase tracking-[0.45em]" style={{ color: 'rgba(100,180,220,0.5)' }}>
            Crypto Program — Coming Soon
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.12 }}
            className="serif text-[16vw] leading-[0.76] tracking-[-0.09em] md:text-[12vw] max-w-[12ch]">
            Crypto.
            <span className="block translate-x-[8vw] italic" style={{ color: 'rgba(200,192,175,0.4)' }}>On the horizon.</span>
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.45 }}
            className="mt-10 md:ml-[46vw] md:max-w-lg">
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(200,192,175,0.6)' }}>
              The same structured, professional-grade education that powers our FX program — applied to crypto markets. Bitcoin, Ethereum, DeFi, and beyond. Coming soon.
            </p>
            <p className="text-xs uppercase tracking-[0.35em] mb-6" style={{ color: 'rgba(200,192,175,0.35)' }}>
              In the meantime, start with our FX program
            </p>
            <MagneticButton href="/programs/fx/starter">Explore FX Program</MagneticButton>
          </motion.div>
        </HeroParallax>
      </section>

      <Footer />
    </div>
  );
}
