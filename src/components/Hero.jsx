import React from 'react'
import headshot from '../assets/headshot.jpg'

export default function Hero() {
   return (
      <div className={'hero--container'}>

         <div className={'hero--landing'}>
            <img className={'hero--headshot'} src={headshot} alt="headshot" />
            <div className={'hero--img-shape'}></div>

            <p className={'hero--intro'}>Hello, my name is</p>
            <h1 className={'hero--name'}>Kevin Carter</h1>
            <h1 className={'hero--skill'}>Front-End Developer</h1>
            <h1 className={'hero--location'}>Atlanta, Ga</h1>
            <div className={'hero--bottom-shape'}></div>
         </div>

      </div>
   )
} 