import React from 'react'

import skillPicture from '../assets/skillset-bkgrnd.jpg' 

export default function Skill() {
   return (
      <div className={'skill--container'}>

         <img className={'skill--img'} src={skillPicture} alt={'picture of vs code'} />
         <div className={'skill--text-container'}>

            <div className={'skill--responsive'}>
               <h3 className={'skill--card-title'}>RESPONSIVE</h3>
               <p className={'skill--description'}>
                  There is therefore now no condemnation for those who are in Christ Jesus.[a] 2 For the law of the Spirit of life has set you[b] free in Christ Jesus from the law of sin and death. 3 For God has done what the law, weakened by the flesh, could not do. By sending his own Son in the likeness of sinful flesh and for sin,[c] he condemned sin in the flesh, 4 in order that the righteous requirement of the law might be fulfilled in us, who walk not according to the flesh but according to the Spirit.
               </p>
            </div>

            <div className={'skill--function'}>
               <h3 className={'skill--card-title'}>FUNCTIONALITY</h3>
               <p className={'skill--description'}>
                  There is therefore now no condemnation for those who are in Christ Jesus.[a] 2 For the law of the Spirit of life has set you[b] free in Christ Jesus from the law of sin and death. 3 For God has done what the law, weakened by the flesh, could not do. By sending his own Son in the likeness of sinful flesh and for sin,[c] he condemned sin in the flesh, 4 in order that the righteous requirement of the law might be fulfilled in us, who walk not according to the flesh but according to the Spirit.
               </p>
            </div>

            <div className={'skill--framework'}>
               <h3 className={'skill--card-title'}>FRONT-END</h3>
               <p className={'skill--description'}>
                  There is therefore now no condemnation for those who are in Christ Jesus.[a] 2 For the law of the Spirit of life has set you[b] free in Christ Jesus from the law of sin and death. 3 For God has done what the law, weakened by the flesh, could not do. By sending his own Son in the likeness of sinful flesh and for sin,[c] he condemned sin in the flesh, 4 in order that the righteous requirement of the law might be fulfilled in us, who walk not according to the flesh but according to the Spirit.
               </p>
            </div>

         </div>

      </div>
   )
}