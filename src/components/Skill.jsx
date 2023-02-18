import React from 'react'

import skillPicture from '../assets/skillset-bkgrnd.jpg' 
import skillPicture2 from '../assets/mobile-image-pexels-pew-nguyen-15372903.jpg' 

export default function Skill() {
   return (
      <div id={'skill'} className={'skill--container'}>

            <h1 className={'section--title skill--header'}>What I do</h1>
            
            <div className={'skill--case'}>
               <div className={'skill--responsive skill'}>
                  <h3 className={'section--subtitle skill--card-title'}>RESPONSIVE</h3>
                  <p className={'skill--description'}>
                     There is therefore now no condemnation for those who are in Christ Jesus.[a] 2 For the law of the Spirit of life has set you[b] free in Christ Jesus from the law of sin and death. 3 For God has done what the law, weakened by the flesh, could not do. By sending his own Son in the likeness of sinful flesh and for sin,[c] he condemned sin in the flesh, 4 in order that the righteous requirement of the law might be fulfilled in us, who walk not according to the flesh but according to the Spirit.
                  </p>
               </div>

               <div className={'skill--function skill'}>
                  <h3 className={'section--subtitle skill--card-title'}>FUNCTIONALITY</h3>
                  <p className={'skill--description'}>
                     There is therefore now no condemnation for those who are in Christ Jesus.[a] 2 For the law of the Spirit of life has set you[b] free in Christ Jesus from the law of sin and death. 3 For God has done what the law, weakened by the flesh, could not do. By sending his own Son in the likeness of sinful flesh and for sin,[c] he condemned sin in the flesh, 4 in order that the righteous requirement of the law might be fulfilled in us, who walk not according to the flesh but according to the Spirit.
                  </p>
               </div>
            </div>

         <img className={'skill--img img'} src={skillPicture} alt={'picture of vs code'} />
         <img className={'skill--img2 img'} src={skillPicture2} alt={'picture of vs code'} />

         <a href={'/#projects'} className={'button'}>My Work</a>
        
      </div>
   )
}