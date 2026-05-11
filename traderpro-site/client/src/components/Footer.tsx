import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--dark-1)', borderTop: '0.5px solid var(--border)' }} className="px-6 py-16 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {/* Brand */}
          <div>
            <div className="serif text-2xl text-stone-100 mb-3">TraderPro</div>
            <div className="text-xs uppercase tracking-[0.4em] text-stone-400/50">Structure. Execution. Edge.</div>
          </div>
          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 md:justify-center">
            {[['About','/about'],['Programs','/programs'],['Pricing','/pricing'],['Privacy Policy','#'],['Terms','#'],['Refund Policy','#']].map(([label,href])=>(
              <Link key={label} href={href}>
                <a className="text-xs uppercase tracking-[0.25em] text-stone-400/55 hover:text-stone-200 transition-colors">{label}</a>
              </Link>
            ))}
          </div>
          {/* Socials */}
          <div className="flex gap-3 md:justify-end items-start">
            {['X','IG','LI','YT'].map(s=>(
              <div key={s} className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[10px] uppercase tracking-wide text-stone-400/50 hover:border-white/25 hover:text-stone-300 transition-all cursor-pointer">{s}</div>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '0.5px solid var(--border)' }} className="mt-12 pt-6 text-center text-[10px] uppercase tracking-[0.3em] text-stone-500/40">
          © 2026 TradePro Education Ltd. Registered in Cyprus.
        </div>
      </div>
    </footer>
  );
}
