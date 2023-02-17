import React, { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skill from './components/Skill'
import Languages from './components/Languages'
import About from './components/About'

import './styles/app.css'

function App() {
  return (
    <div className={'app--container'}>
      <Navbar />
      <Hero />
      {/*<Skill />*/}
      {/*<Languages />*/}
      <About />
    </div>
  )
}

export default App