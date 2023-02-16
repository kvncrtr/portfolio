import React from 'react'

import html from '../assets/logos/html-logo.png'
import css from '../assets/logos/css-logo.png'
import javascript from '../assets/logos/javascript-logo.png'
import react from '../assets/logos/react-logo.png'
import redux from '../assets/logos/redux-logo.png'
import bootstrap from '../assets/logos/bootstrap-logo.png'
import jquery from '../assets/logos/jquery-logo.png'
import sass from '../assets/logos/sass-logo.png'

import image from '../assets/pexels-steve-johnson-1843717.jpg'

export default function Languages() {
   return (
      <div className={'lang--container'}>

         <h1 className={'lang--header'}>Tech I've Used</h1>
         <img className={'lang--bkrnd'} src={image} alt="white texture" />

         <div className={'lang--logo-case'}>
            <div className={'lang--logo-box'}>
               <h3>HTML</h3>
               <img className={'lang--logo'} src={html} alt="html logo" />
            </div>

            <div className={'lang--logo-box'}>
               <h3>CSS</h3>
               <img className={'lang--logo'} src={css} alt="css logo" />
            </div>

            <div className={'lang--logo-box'}>
               <h3>JavaScript</h3>
               <img className={'lang--logo'} src={javascript} alt="javascript logo" />
            </div>

            <div className={'lang--logo-box'}>
               <h3>React</h3>
               <img className={'lang--logo'} src={react} alt="react logo" />
            </div>

            <div className={'lang--logo-box'}>
               <h3>Redux</h3>
               <img className={'lang--logo'} src={redux} alt="redux logo" />
            </div>

            <div className={'lang--logo-box'}>
               <h3>BootStrap</h3>
               <img className={'lang--logo'} src={bootstrap} alt="bootstrap logo" />
            </div>

            <div className={'lang--logo-box'}>
               <h3>jQuery</h3>
               <img className={'lang--logo'} src={jquery} alt="jquery logo" />
            </div>

            <div className={'lang--logo-box'}>
               <h3>SASS</h3>
               <img className={'lang--logo'} src={sass} alt="sass logo" />
            </div>
         </div>

      </div>
   )
}