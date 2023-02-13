import React, { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './styles/app.css'

function App() {
  return (
    <div className={'app--container'}>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
