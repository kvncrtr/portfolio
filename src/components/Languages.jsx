import React from 'react'

import html from '../assets/logos/html-logo.png'
import css from '../assets/logos/css-logo.png'
import javascript from '../assets/logos/javascript-logo.png'
import react from '../assets/logos/react-logo.png'
import redux from '../assets/logos/redux-logo.png'
import bootstrap from '../assets/logos/bootstrap-logo.png'
import jquery from '../assets/logos/jquery-logo.png'
import sass from '../assets/logos/sass-logo.png'

export default function Languages() {
   return (
      <div className={'lang--container'}>

         <div className={'lang--logo-case'}>
            <img className={'lang--logo'} src={html} alt="html logo" />
            <img className={'lang--logo'} src={css} alt="css logo" />
            <img className={'lang--logo'} src={javascript} alt="javascript logo" />
            <img className={'lang--logo'} src={react} alt="react logo" />
            <img className={'lang--logo'} src={redux} alt="redux logo" />
            <img className={'lang--logo'} src={bootstrap} alt="bootstrap logo" />
            <img className={'lang--logo'} src={jquery} alt="jquery logo" />
            <img className={'lang--logo'} src={sass} alt="sass logo" />
         </div>

      </div>
   )
}