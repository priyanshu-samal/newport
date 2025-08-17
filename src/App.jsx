import React, { useEffect } from 'react';
import './App.scss';
import Header from './components/Header';
import Profile from './components/Profile';
import { FloatingDock } from './components/FloatingDock';
import NameDisplay from './components/NameDisplay';
import About from './components/About';
import Availability from './components/Availability';
import Work from './components/Work/Work';
import { useTheme } from './context/ThemeContext';

const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div className="app">
      <div className="container">
        <div className="hero-section">
          <Header />
          <Profile />
          <NameDisplay />
        </div>
        <About />
        <Availability />
        <div className="work-section-header">
          <h2 className="work-heading">My Projects</h2>
          <p className="work-subheading">I build MVPs and SaaS products, from simple sites to complex apps. Here are a few favorites.</p>
        </div>
        <Work />
        <FloatingDock/>
      </div>
    </div>
  );
};

export default App;