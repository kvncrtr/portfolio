import React, { forwardRef } from 'react'

import saint1 from '../assets/saint-cookin-1.jpg'
import saint3 from '../assets/saint-cookin-3.jpg'

function About(props, ref) {
   return (
      <div ref={ref} id={'about'} className={'section about--me'}>

            <h2 className={'section--title about--title'}>Who I am</h2>
            <p className={'section--subtitle about--subtitle'}>Developer based out of ATL</p>
            
            <div className={'about--story-case'}>
               <p className={"section--description about--story"}>
                  Throughout my career, I’ve had the privilege of 
                  working with both great software and terrible software. 
                  In my last role, the company's software simply didn’t 
                  align with its mission to exceed customer expectations. 
                  When I checked out customers, searched for inventory, 
                  or selected items by size, the system would glitch. 
                  This made me reflect on my own customer service and 
                  realize that these technologies weren’t helping me 
                  provide the best experience. It was then that I decided 
                  to learn how to write better code to fix these systems, 
                  ensuring my customers could enjoy the best possible 
                  experience.
               </p>
            </div>
            
            <div className={'about--img-case'}>
               <img className={'about--img1'} src={saint1} alt='saint and I cooking in the studio' />
               <img className={'about--img3'} src={saint3} alt='saint and I cooking in the studio' />
            </div>
         
         </div>
   )
}

export default forwardRef(About)