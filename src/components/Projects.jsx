import React, { forwardRef } from 'react'

import vendex from '../assets/thumbnails/vendex-thumb.jpg'
import drum from '../assets/thumbnails/drum-thumb.jpg'
import markdown from '../assets/thumbnails/markdown-thumb.jpg'

function Projects(props, ref) {
   // let quoteLink = {
   //    project:'https://kvncrtr.github.io/random-quote-machine/',
   //    repo: 'https://github.com/kvncrtr/random-quote-machine'
   // }

   // let markdownLink = {
   //    project:'https://kvncrtr.github.io/markdown-previewer/',
   //    repo: 'https://github.com/kvncrtr/markdown-previewer'
   // }

   // let drumLink = {
   //    project:'https://kvncrtr.github.io/drum-machine/',
   //    repo: 'https://github.com/kvncrtr/drum-machine'
   // }

   return (
      <section ref={ref} id={'projects'} className={'section'}>
         <h1 className={'section--title project--title'}>Projects</h1>

         <div className={'project--container'}>
            
            {/* Random Quote Machine */}

            <div className={'project--card'}>
               
               <a className={'project--image-case'} href={""} target={'_blank'}>
                  <img className={'project--image'} src={vendex} alt={`An 
                     image of a inventory manager called vendex`} 
                  />
               </a>

               <div className={'project--specs'}>              
                  <h3>Vendex</h3>
                  <p className={'project--role'}>
                     <span className={'bold'}>Role:</span> Full-Stack Engineer
                  </p>
                  <span className={'bold'}>Stack:</span>
                  <ul className={'project--stack'}>
                     <li>React</li>
                     <li>SCSS</li>
                     <li>Golang</li>
                     <li>PostgreSQL</li>
                     <li>JavaScript</li>
                     <li>HTML</li>
                     <li>CSS</li>
                  </ul>
               </div>
               <div className={'project--description'}>
                  <p className={'bold'}>Description:</p>
                  <p className={'project--summary'}>
                     
                  </p>
               </div>
               
               <div className={'project--button-container'}>
                  <div className={'project--button-case'}>
                     <a className={'project--button'} href={""} target={'_blank'}>View Project</a>
                  </div>
                  <div className={'project--button-case'}>
                     <a className={'project--repo-button'} href={""} target={'_blank'}>View Repository</a>
                  </div>
               </div>
                  
            </div>

            {/* Markdown Previewer
            
            <div className={'project--card'}>
               
               <a className={'project--image-case'} href={markdownLink.project} target={'_blank'}>
                  <img className={'project--image'} src={markdown} alt={`a image of a project that 
                  i've built called mark down previewer`} 
                  />
               </a>

               <div className={'project--specs'}>              
                  <h3>Mark Down Previewer</h3>
                  <p className={'project--role'}>
                     <span className={'bold'}>Role:</span> Front-End Developer
                  </p>
                  <span className={'bold'}>Stack:</span>
                  <ul className={'project--stack'}>
                     <li>React</li>
                     <li>Bootstrap</li>
                     <li>JavaScript</li>
                     <li>HTML</li>
                     <li>CSS</li>

                  </ul>
               </div>
               <div className={'project--description'}>
                  <p className={'bold'}>Description:</p>
                  <p className={'project--summary'}>
                     A Markdown Previewer is an indispensable tool for 
                     writers and developers alike, allowing them to 
                     visualize text formatting and structure before 
                     publishing, resulting in more efficient and accurate 
                     editing and revisions. The app offers a user-friendly 
                     interface, featuring a text editor and a preview 
                     window, where HTML elements can be constructed and 
                     displayed in real-time. The app's split-screen design 
                     enables users to view the changes instantly, and the 
                     app's responsive design allows for accelerated coding, 
                     writing README.md files, and composing commit messages 
                     within version control systems.
                  </p>
               </div>
               
               <div className={'project--button-container'}>
                  <div className={'project--button-case'}>
                     <a className={'project--button'} href={markdownLink.project} target={'_blank'}>View Project</a>
                  </div>
                  <div className={'project--button-case'}>
                     <a className={'project--repo-button'} href={markdownLink.repo} target={'_blank'}>View Repository</a>
                  </div>
               </div>
                  
            </div> */}

            {/* Drum Machine 

            <div className={'project--card'}>
               
               <a className={'project--image-case'} href={drumLink.project} target={'_blank'}>
                  <img className={'project--image'} src={drum} alt={`a 
                  image of a project that i've built called drum machine`} 
                  />
               </a>

               <div className={'project--specs'}>              
                  <h3>Drum Machine</h3>
                  <p className={'project--role'}>
                     <span className={'bold'}>Role:</span> Front-End Developer
                  </p>
                  <span className={'bold'}>Stack:</span>
                  <ul className={'project--stack'}>
                     <li>Bootstrap</li>
                     <li>jQuery</li>
                     <li>JavaScript</li>
                     <li>HTML</li>
                     <li>CSS</li>

                  </ul>
               </div>
               <div className={'project--description'}>
                  <p className={'bold'}>Description:</p>
                  <p className={'project--summary'}>
                     Drum machines are essential for creating music as 
                     they provide a rhythmic backbone that simplifies the 
                     creative process and enhances flexibility. This app 
                     enables users to play a variety of drum sounds using 
                     either the provided buttons or keyboard keys. The 
                     app also features sliders that allow users to adjust 
                     the volume of the sounds played. Moreover, the app 
                     displays the name of the sound currently playing in 
                     a text box. The interface of this app is modeled 
                     after the Akai MPC 3000.
                  </p>
               </div>
               
               <div className={'project--button-container'}>
                  <div className={'project--button-case'}>
                     <a className={'project--button'} href={drumLink.project} target={'_blank'}>View Project</a>
                  </div>
                  <div className={'project--button-case'}>
                     <a className={'project--repo-button'} href={drumLink.repo} target={'_blank'}>View Repository</a>
                  </div>
               </div>
                  
            </div>*/}
         
         </div>
      </section>
   )
}

export default forwardRef(Projects)