import React, { useState, useRef } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skill from './components/Skill'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './styles/app.css'

function App() {
  const navRef = useRef(null)
  const appRef = useRef(null)
  const skillRef = useRef(null)
  const projectRef = useRef(null)

  const handleClick = () => {    
    navRef.current.classList.toggle('responsive--nav')
    appRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive--nav')
  }
  
  const skillScroll = () => {
    navRef.current.classList.toggle('responsive--nav')
    skillRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  
  const projectScroll = () => {
    navRef.current.classList.toggle('responsive--nav')
    projectRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  
  const showProjects = () => {
    navRef.current.classList.toggle('responsive--nav')
  }

  return (
    <div ref={appRef} id={'home'} className={'app--container'}>
      <Navbar 
        handleClick={handleClick} 
        showNavbar={showNavbar} 
        skillScroll={skillScroll}
        projectScroll={projectScroll}
        ref={navRef} />
      <Hero />
      <Skill ref={skillRef} showProjects={showProjects} />
      <About />
      <Projects ref={projectRef} />
      <Contact />
      <Footer />

    </div>
  )
}

export default App