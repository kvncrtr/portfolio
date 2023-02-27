import React, { forwardRef } from 'react'

import quote from '../assets/thumbnails/quote-thumb.jpg'
import drum from '../assets/thumbnails/drum-thumb.jpg'
import markdown from '../assets/thumbnails/markdown-thumb.jpg'

function Projects(props, ref) {
   let quoteLink = {
      project:'https://kvncrtr.github.io/random-quote-machine/',
      repo: 'https://github.com/kvncrtr/random-quote-machine'
   }
   let markdownLink = 'https://facebook.com'
   let drumLink = 'https://linkedin.com'

   return (
      <section ref={ref} id={'projects'} className={'section'}>
         <h1 className={'section--title project--title'}>Projects</h1>

         <div className={'project--container'}>
            
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
            
            <div className={'project--card'}>
               
               <a className={'project--image-case'} href={markdownLink} target={'_blank'}>
                  <img className={'project--image'} src={markdown} alt={`a image of a project that i've built called random quote machine`} />
               </a>

               <div className={'project--specs'}>              
                  <h3>Markdown Previewer</h3>
                  <p className={'project--role'}><span className={'bold'}>Role:</span> Front-End Developer</p>
                  <span className={'bold'}>Stack:</span>
                  <ul className={'project--stack'}>
                     <li>HTML</li>
                     <li>CSS</li>
                     <li>JavaScript</li>
                     <li>React</li>
                     <li>SCSS</li>
                  </ul>
               </div>
               <div className={'project--description'}>
                  <p className={'bold'}>Description:</p>
                  <p>And I will bring the third part 
                  through the fire, and will refine 
                  them as silver is refined, and 
                  will try them as gold is tried: 
                  they shall call on my name, and I 
                  will hear them: I will say, It is 
                  my people: and they shall say, The 
                  LORD is my God.</p>
               </div>
               
               <div className={'project--button-case'}>
                  <a className={'project--button'} href={markdownLink} target={'_blank'}>View Project</a>
               </div>
                  
            </div>
            
            <div className={'project--card'}>
               
               <a className={'project--image-case'} href={drumLink} target={'_blank'}>
                  <img className={'project--image'} src={drum} alt={`a image of a project that i've built called random quote machine`} />
               </a>

               <div className={'project--specs'}>              
                  <h3>Drum Machine</h3>
                  <p className={'project--role'}><span className={'bold'}>Role:</span> Front-End Developer</p>
                  <span className={'bold'}>Stack:</span>
                  <ul className={'project--stack'}>
                     <li>HTML</li>
                     <li>CSS</li>
                     <li>JavaScript</li>
                     <li>React</li>
                     <li>SCSS</li>
                  </ul>
               </div>
               <div className={'project--description'}>
                  <p className={'bold'}>Description:</p>
                  <p>And I will bring the third part 
                  through the fire, and will refine 
                  them as silver is refined, and 
                  will try them as gold is tried: 
                  they shall call on my name, and I 
                  will hear them: I will say, It is 
                  my people: and they shall say, The 
                  LORD is my God.</p>
               </div>
               
               <div className={'project--button-case'}>
                  <a className={'project--button'} href={drumLink} target={'_blank'}>View Project</a>
               </div>
                  
            </div>
            
         </div>
      </section>
   )
}

export default forwardRef(Projects)