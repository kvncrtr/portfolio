import React from 'react'
import headshot from '../assets/headshot.jpg'

export default function Hero() {
   return (
      <div className={'hero--container'}>
         <img className={'hero--headshot'} src={headshot} alt="headshot" />
      </div>
   )
} 