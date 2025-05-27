import React, { forwardRef } from 'react'

import vendex from '../assets/thumbnails/vendex-thumb.jpg';
import lblc from '../assets/thumbnails/little-brook-learning-center-web-app-cover.png';
import markdown from '../assets/thumbnails/markdown-thumb.jpg';

function Projects(props, ref) {
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

            {/* LBLC */}

            <div className="project--card">
               <a className={'project--image-case'} href={"https://vendex-production.up.railway.app/"} target={'_blank'}>
                  <img className={'project--image'} src={lblc} alt={`An 
                     image of a inventory manager called vendex`} 
                  />
               </a>

               <div className={'project--specs'}>              
                  <h3>LBLC (In Progress)</h3>
                  <p className={'project--role'}>
                     <span className={'bold'}>Role:</span> Full-Stack Engineer
                  </p>
                  <span className={'bold'}>Stack:</span>
                  <ul className={'project--stack'}>
                     <li>React</li>
                     <li>SCSS</li>
                     <li>PostgreSQL</li>
                     <li>Go</li>
                     <li>Git</li>
                     <li>JavaScript</li>
                     <li>Vercel</li>
                     <li>Render</li>
                  </ul>
               </div>
               
               <div className={'project--description'}>
                  <p className={'bold'}>Description:</p>
                  <p className={'project--summary'}>
                     Little Brook Learning Center is a start-up childcare 
                     center. We designed this web app to be the main 
                     entry point for our potential new parents. We used a 
                     combination of Next.js rich SEO integration and our
                     relational friendly database Postgres to scale our
                     customer base. We are still rolling out features and
                     our MVP will be done in July 2025. Since we are more
                     inclined to an agile methodlogy we are more focused 
                     on working iterations. You can find all of the code
                     attached here.
                  </p>
               </div>
               
               <div className={'project--button-container'}>
                  <div className={'project--button-case'}>
                     <a className={'project--button'} href={"https://littlebrooklc.com"} target={'_blank'}>View Project</a>
                  </div>
                  <div className={'project--button-case'}>
                     <a className={'project--repo-button'} href={"https://github.com/kvncrtr/lblc-frontend"} target={'_blank'}>View Repository</a>
                  </div>
               </div>
            </div>
            
            {/* Vendex */}

            <div className={'project--card'}>
               
               <a className={'project--image-case'} href={"https://vendex-production.up.railway.app/"} target={'_blank'}>
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
                     Vendex is a small business level enterprise application
                     that helps every team member stay up to date on inventory
                     levels. The application will allow you to see reports on 
                     sales, transactions, top products and more. Please use 
                     the demo profile to utilize and view the application.
                  </p>
               </div>
               
               <div className={'project--button-container'}>
                  <div className={'project--button-case'}>
                     <a className={'project--button'} href={"https://vendex-production.up.railway.app/"} target={'_blank'}>View Project</a>
                  </div>
                  <div className={'project--button-case'}>
                     <a className={'project--repo-button'} href={"https://github.com/kvncrtr/vendex"} target={'_blank'}>View Repository</a>
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
         
         </div>
      </section>
   )
}

export default forwardRef(Projects)