import React, { forwardRef } from 'react'

import saint1 from '../assets/saint-cookin-1.jpg'
import saint2 from '../assets/saint-cookin-3.jpg'

function About(props, ref) {
   return (
      <div ref={ref} id={'about'} className={'section about--me'}>

            <h2 className={'section--title about--title'}>Who I am</h2>
            <p className={'section--subtitle about--subtitle'}>Developer based out of ATL</p>
            
            <div className={'about--story-case'}>
               <p className={'section--description about--story'}>
                 
               </p>
               <p className={'section--description about--story'}>
                  
               </p>
            </div>
            
            <div className={'about--img-case'}>
               <img className={'about--img1'} src={saint2} alt='saint and I cooking in the studio' />
               <img className={'about--img2'} src={saint1} alt='saint and I cooking in the studio' />
            </div>
         
         </div>
   )
}

export default forwardRef(About)