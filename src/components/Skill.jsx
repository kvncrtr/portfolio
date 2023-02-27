import React, { forwardRef } from 'react'

function Skill({showProjects}, ref) {
   return (
      <div ref={ref} id={'skill'} className={'skill--container'}>

            <h1 className={'section--title skill--header'}>What I do</h1>
            
            <div className={'skill--case'}>
               <div className={'skill--responsive skill'}>
                  <h3 className={'section--subtitle skill--card-title'}>RESPONSIVE</h3>
                  <p className={'skill--description'}>
                     I expound on a responsive website design that is 
                     optimized for all devices and screen sizes. This 
                     will include designing and developing webpages that 
                     are optimized for all devices, including mobile, 
                     tablet, and desktop. I utilize the latest HTML5, 
                     CSS3, and JavaScript techniques to ensure a smooth 
                     and consistent experience across all devices. All 
                     designs and development processes also includes 
                     optimizing content for maximum readability and 
                     usability on all devices
                  </p>
               </div>

               <div className={'skill--function skill'}>
                  <h3 className={'section--subtitle skill--card-title'}>FUNCTIONALITY</h3>
                  <p className={'skill--description'}>
                     As a React developer, I have a skill for creating 
                     front-end web applications in React. I utilize the 
                     latest technology and design principles to create a 
                     modern and feature-rich experience. I have the 
                     capability to develop websites that are optimized 
                     for speed and performance, as well as for scalability 
                     and security that align with industry best practices. 
                     My applications are advanced solutions for creating 
                     sophisticated codebases that can handle large volumes 
                     of traffic and data. With my expertise in React, I 
                     can help create a visually appealing and responsive 
                     web user interface to deliver a tailored solution 
                     that aligns with your business goals and objectives.
                  </p>
               </div>
            </div>

         <button className={'skill--button button'} onClick={showProjects} >My Work</button>
        
      </div>
   )
}

export default forwardRef(Skill)