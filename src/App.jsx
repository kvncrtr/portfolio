import React, { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skill from './components/Skill'
import './styles/app.css'

function App() {
  return (
    <div className={'app--container'}>
      <Navbar />
      <Hero />
      <Skill />
    </div>
  )
}

export default App