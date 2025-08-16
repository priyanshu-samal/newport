import React from 'react'
import './App.scss'
import Header from './components/Header'
import Profile from './components/Profile'
import { FloatingDock } from './components/FloatingDock'
import NameDisplay from './components/NameDisplay'
import About from './components/About'
import Availability from './components/Availability'

const App = () => {


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
        <FloatingDock/>
      </div>
    </div>
  )
}

export default App