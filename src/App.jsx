import React, { useState, forwardRef } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skill from './components/Skill'
import Languages from './components/Languages'
import About from './components/About'
import Projects from './components/Projects'

import './styles/app.css'

function App() {

  return (
    <div id={'home'} className={'app--container'}>
      <Navbar />
      <Hero />
      <Skill />
      {/*<Languages />*/}
      <About />
      <Projects />

      <section className={'section'}>

        <div className={'contact--container'}>

          <h1 className={'section--title'}>Let's Work</h1>
          <button className={'contact--email'}>Email</button>

          <div className={'contact--shape-case'}>
            <div className={'contact--square'}></div>
            <div className={'contact--cylinder'}></div>
            <div className={'contact--rectangle'}></div>
            <div className={'contact--circle'}></div>
            <div className={'contact--triangle'}></div>
          </div>

        </div>
      </section>

      <footer className={'section'}>
        <div className={'footer--icon-container'}>
          Socials Go Here
        </div>
        <p>created by Kevin Carter</p>
      </footer>
    </div>
  )
}

export default App