import React from 'react'
import headshot from '../assets/headshot.jpg'

export default function Hero() {
   return (
      <div id={'hero'} className={'hero--container'}>

            <img className={'hero--headshot'} src={headshot} alt="headshot" />
            <div className={'hero--img-shape'}></div>

            <p className={'section--title hero--intro'}>
               Hello, I am
            </p>
            <h1 className={'section--title hero--name'}>
               Kevin Carter
            </h1>
            <h1 className={'hero--skill'}>
               Full-Stack Engineer
            </h1>
            <h1 className={'hero--location'}>
               Atlanta, Ga
            </h1>

            <div className={'hero--bottom-shape'}></div>

      </div>
   )
} 