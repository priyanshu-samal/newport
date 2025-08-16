import React from 'react'
import './App.scss'
import Header from './components/Header'
import Profile from './components/Profile'
import { FloatingDock } from './components/FloatingDock'

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <div className="hero-section">
          <Header />
          <Profile />
        </div>
        <FloatingDock/>
      </div>
    </div>
  )
}

export default App