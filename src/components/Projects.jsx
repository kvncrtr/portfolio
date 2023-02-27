import React, { forwardRef } from 'react'

import quote from '../assets/thumbnails/quote-thumb.jpg'
import drum from '../assets/thumbnails/drum-thumb.jpg'
import markdown from '../assets/thumbnails/markdown-thumb.jpg'

function Projects(props, ref) {
   let quoteLink = {
      project:'https://kvncrtr.github.io/random-quote-machine/',
      repo: 'https://github.com/kvncrtr/random-quote-machine'
   }

   let markdownLink = {
      project:'https://kvncrtr.github.io/markdown-previewer/',
      repo: 'https://github.com/kvncrtr/markdown-previewer'
   }

   let drumLink = {
      project:'https://kvncrtr.github.io/drum-machine/',
      repo: 'https://github.com/kvncrtr/drum-machine'
   }

   return (
      <section ref={ref} id={'projects'} className={'section'}>
         <h1 className={'section--title project--title'}>Projects</h1>

         <div className={'project--container'}>
            
            {/* Random Quote Machine */}

            <div className={'project--card'}>
               
               <a className={'project--image-case'} href={quoteLink.project} target={'_blank'}>
                  <img className={'project--image'} src={quote} alt={`a 
                  image of a project that i've built called random 
                  quote machine`} 
                  />
               </a>

               <div className={'project--specs'}>              
                  <h3>Random Quote Machine</h3>
                  <p className={'project--role'}>
                     <span className={'bold'}>Role:</span> Front-End Developer
                  </p>
                  <span className={'bold'}>Stack:</span>
                  <ul className={'project--stack'}>
                     <li>React</li>
                     <li>SCSS</li>
                     <li>JavaScript</li>
                     <li>HTML</li>
                     <li>CSS</li>

                  </ul>
               </div>
               <div className={'project--description'}>
                  <p className={'bold'}>Description:</p>
                  <p className={'project--summary'}>
                     This motivational quote generator delivers inspiring 
                     quotes from influential individuals, with the ability to 
                     cycle through and share on Twitter. The sleek interface 
                     displays both the quote and author, and changes to a 
                     random color for each new quote. Designed to inspire and 
                     motivate, the application offers an enjoyable and visually 
                     appealing experience for anyone looking to improve their 
                     daily routine.
                  </p>
               </div>
               
               <div className={'project--button-container'}>
                  <div className={'project--button-case'}>
                     <a className={'project--button'} href={quoteLink.project} target={'_blank'}>View Project</a>
                  </div>
                  <div className={'project--button-case'}>
                     <a className={'project--repo-button'} href={quoteLink.repo} target={'_blank'}>View Repository</a>
                  </div>
               </div>
                  
            </div>

            {/* Markdown Previewer */}
            
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
                  
            </div>

            {/* Drum Machine */}

            <div className={'project--card'}>
               
               <a className={'project--image-case'} href={quoteLink.project} target={'_blank'}>
                  <img className={'project--image'} src={quote} alt={`a 
                  image of a project that i've built called random 
                  quote machine`} 
                  />
               </a>

               <div className={'project--specs'}>              
                  <h3>Random Quote Machine</h3>
                  <p className={'project--role'}>
                     <span className={'bold'}>Role:</span> Front-End Developer
                  </p>
                  <span className={'bold'}>Stack:</span>
                  <ul className={'project--stack'}>
                     <li>React</li>
                     <li>SCSS</li>
                     <li>JavaScript</li>
                     <li>HTML</li>
                     <li>CSS</li>

                  </ul>
               </div>
               <div className={'project--description'}>
                  <p className={'bold'}>Description:</p>
                  <p className={'project--summary'}>
                     This motivational quote generator delivers inspiring 
                     quotes from influential individuals, with the ability to 
                     cycle through and share on Twitter. The sleek interface 
                     displays both the quote and author, and changes to a 
                     random color for each new quote. Designed to inspire and 
                     motivate, the application offers an enjoyable and visually 
                     appealing experience for anyone looking to improve their 
                     daily routine.
                  </p>
               </div>
               
               <div className={'project--button-container'}>
                  <div className={'project--button-case'}>
                     <a className={'project--button'} href={quoteLink.project} target={'_blank'}>View Project</a>
                  </div>
                  <div className={'project--button-case'}>
                     <a className={'project--repo-button'} href={quoteLink.repo} target={'_blank'}>View Repository</a>
                  </div>
               </div>
                  
            </div>
         
         </div>
      </section>
   )
}

export default forwardRef(Projects)