import React from 'react'

import quote from '../assets/thumbnails/quote-thumb.jpg'
import drum from '../assets/thumbnails/drum-thumb.jpg'
import markdown from '../assets/thumbnails/markdown-thumb.jpg'

export default function Projects() {
   return (
      <section className={'section'}>
         <div className={'project--container'}>

            <div className={'project--card'}>

               <img src={quote} alt='' />

               <div className={'project--specs'}>              
                  <h3>Random Quote Machine</h3>
                  <p className={'project--role'}><span className={'bold'}>Role:</span> Front-End Developer</p>
                  <span className={'bold'}>Stack:</span>
                  <ul className={'project--stack'}>
                     <li>HTML</li>
                     <li>CSS</li>
                     <li>JavaScript</li>
                     <li>React</li>
                     <li>SCSS</li>
                  </ul>
                  <button className={'project--view'}>View Project</button>
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
   )
}