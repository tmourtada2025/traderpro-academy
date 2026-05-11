import { Switch, Route } from 'wouter';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Programs from '@/pages/Programs';
import Pricing from '@/pages/Pricing';
import './index.css';

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/programs" component={Programs} />
      <Route path="/pricing" component={Pricing} />
      <Route>
        <div style={{ background: 'var(--dark-1)', color: 'var(--stone)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="text-center">
            <div className="serif" style={{ fontSize: '6rem', color: 'var(--gold)', opacity: 0.3 }}>404</div>
            <p className="text-stone-400 mt-4">This page doesn't exist.</p>
          </div>
        </div>
      </Route>
    </Switch>
  );
}
