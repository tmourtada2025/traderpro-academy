import { Switch, Route } from 'wouter';
import Home from '@/pages/Home';
import About from '@/pages/About';
import { StarterPage, SkillBuilderPage, MasteryPage } from '@/pages/FXProgram';
import CryptoProgram from '@/pages/CryptoProgram';
import Pricing from '@/pages/Pricing';
import { DisclaimerPage, PrivacyPage, RefundPage, TermsPage, CookiesPage } from '@/pages/Policies';
import './index.css';

function NotFound() {
  return (
    <div style={{ background: 'var(--dark-1)', color: 'var(--stone)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="text-center">
        <div className="serif" style={{ fontSize: '7rem', color: 'var(--gold)', opacity: 0.25, lineHeight: 1 }}>404</div>
        <p className="mt-4 text-sm uppercase tracking-[0.3em]" style={{ color: 'rgba(200,192,175,0.4)' }}>Page not found</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/programs/fx/starter" component={StarterPage} />
      <Route path="/programs/fx/skillbuilder" component={SkillBuilderPage} />
      <Route path="/programs/fx/mastery" component={MasteryPage} />
      <Route path="/programs/crypto" component={CryptoProgram} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/policies/disclaimer" component={DisclaimerPage} />
      <Route path="/policies/privacy" component={PrivacyPage} />
      <Route path="/policies/refund" component={RefundPage} />
      <Route path="/policies/terms" component={TermsPage} />
      <Route path="/policies/cookies" component={CookiesPage} />
      <Route component={NotFound} />
    </Switch>
  );
}
