import React, { useEffect, lazy, Suspense } from 'react';
import './App.scss';
import Header from './components/Header';
import Profile from './components/Profile';
import NameDisplay from './components/NameDisplay';
import About from './components/About';
import Availability from './components/Availability';
import './components/BentoGrid.scss'; // Import BentoGrid styles
import { useTheme } from './context/ThemeContext';

const Work = lazy(() => import('./components/Work/Work'));
const ClientWork = lazy(() => import('./components/ClientWork/ClientWork'));
const Experience = lazy(() => import('./components/Experience'));
const LatestWorkSection = lazy(() => import('./components/LatestWorkSection'));
const Footer = lazy(() => import('./components/Footer'));
const FloatingDock = lazy(() => import('./components/FloatingDock').then(module => ({ default: module.FloatingDock })));

const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div className="app">
      <div className="container">
        <header className="hero-section">
          <Header />
          <Profile />
          <NameDisplay />
        </header>
        <main>
          <About />
          <Availability />
          <div className="work-section-header">
            <h2 className="work-heading">Client Work</h2>
            <p className="work-subheading">Here are some of the landing pages and websites I've designed and built for clients.</p>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <ClientWork />
          </Suspense>
          <div className="work-section-header">
            <h2 className="work-heading">My Projects</h2>
            <p className="work-subheading">I build MVPs and SaaS products, from simple sites to complex apps. Here are a few favorites.</p>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Work />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Experience />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <LatestWorkSection />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <FloatingDock/>
          </Suspense>
        </main>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;