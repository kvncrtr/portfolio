import React from 'react'
import headshot from '../assets/headshot.jpg'

export default function Hero() {
   return (
      <div className={'hero--container'}>
         <div className={'hero--landing'}>
            <img className={'hero--headshot'} src={headshot} alt="headshot" />
            <div className={'hero--img-shape'}></div>
            
            <p></p>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <div className={'hero--bottom-shape'}></div>
         </div>
      </div>
   )
} 