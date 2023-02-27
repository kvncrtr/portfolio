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
                  Be ye therefore followers of God, as dear children;
                  2and walk in love, as Christ also hath loved us, and 
                  hath given himself for us an offering and a 
                  sacrifice to God for a sweetsmelling savour. But 
                  fornication, and all uncleanness, or covetousness, 
                  let it not be once named among you, as becometh 
                  saints;
               </p>
               <p className={'section--description about--story'}>
                  neither filthiness, nor foolish talking, nor jesting, 
                  which are not convenient: but rather giving of thanks. 
                  For this ye know, that no whoremonger, nor unclean 
                  person, nor covetous man, who is an idolater, hath any
                  inheritance in the kingdom of Christ and of God.
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