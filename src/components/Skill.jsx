import React from 'react'

import skillPicture from '../assets/skillset-bkgrnd.jpg' 

export default function Skill() {
   return (
      <div className={'skill--container'}>
         <img className={'skill--img'} src={skillPicture} alt={'picture of vs code'}>
         
         </img>
      </div>
   )
}