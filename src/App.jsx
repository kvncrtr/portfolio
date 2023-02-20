import React, { useState, forwardRef } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skill from './components/Skill'
import Languages from './components/Languages'
import About from './components/About'

import './styles/app.css'

function App() {

  return (
    <div id={'home'} className={'app--container'}>
      <Navbar />
      <Hero />
      <Skill />
      {/*<Languages />*/}
      <About />

      <section className={'section'}>
        <div className={'project--container'}>

          <div className={'project--card'}>

            <img src='' alt='' />

            <div className={'project--specs'}>              
              <p>Front-End Developer</p>
              <h3>Random Quote Machine</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>SCSS</li>
              </ul>
            </div>
            <div className={'project--description'}>
              <p>Description</p>
              <p>And I will bring the third part 
                through the fire, and will refine 
                them as silver is refined, and 
                will try them as gold is tried: 
                they shall call on my name, and I 
                will hear them: I will say, It is 
                my people: and they shall say, The 
                LORD is my God.</p>
            </div>
          </div>

          <div className={'project--card'}>

            <img src='' alt='' />

            <div className={'project--specs'}>              
              <p>Front-End Developer</p>
              <h3>Random Quote Machine</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>SCSS</li>
              </ul>
            </div>
            <div className={'project--description'}>
              <p>Description</p>
              <p>And I will bring the third part 
                through the fire, and will refine 
                them as silver is refined, and 
                will try them as gold is tried: 
                they shall call on my name, and I 
                will hear them: I will say, It is 
                my people: and they shall say, The 
                LORD is my God.</p>
            </div>
          </div>

          <div className={'project--card'}>

            <img src='' alt='' />

            <div className={'project--specs'}>              
              <p>Front-End Developer</p>
              <h3>Random Quote Machine</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>SCSS</li>
              </ul>
            </div>
            <div className={'project--description'}>
              <p>Description</p>
              <p>And I will bring the third part 
                through the fire, and will refine 
                them as silver is refined, and 
                will try them as gold is tried: 
                they shall call on my name, and I 
                will hear them: I will say, It is 
                my people: and they shall say, The 
                LORD is my God.</p>
            </div>
          </div>
        </div>
      </section>

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