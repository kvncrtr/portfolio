import React, { useState, forwardRef } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skill from './components/Skill'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './styles/app.css'

function App() {

  return (
    <div id={'home'} className={'app--container'}>
      <Navbar />
      <Hero />
      <Skill />
      <About />
      <Projects />
      {/* Conflict */}
      <Contact />
      <Footer />

    </div>
  )
}

export default App