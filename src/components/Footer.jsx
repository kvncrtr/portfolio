import React from 'react'

export default function Footer() {
let email = 'mailto:console.logkevin@gmail.com'

let github = 'https://github.com/kvncrtr'
let linkedin = 'https://www.linkedin.com/in/kevin-carter-4a4886105/'
let instagram = 'https://www.instagram.com/kvncrtr/'
let twitter = 'https://twitter.com/kvncrtrr'
let facebook = 'https://www.facebook.com/profile.php?id=100081612963330'
let discord = 'https://discordapp.com/users/1043157398354940034'
let pinterest = 'https://www.pinterest.com/repaygod/'

   return (
   <footer className={'section footer--section'}>
      <a href={email} alt='email'>console.logkevin@gmail.com</a>

      <div className={'footer--icon-container'}>

         <a className={'footer--icon'} href={github} alt='github' target='_blank'>
            <i className={'fa-brands fa-github'}></i>
         </a>

         <a className={'footer--icon'} href={linkedin} alt='linkedin' target='_blank'>
            <i className={'fa-brands fa-linkedin'}></i>
         </a>

         <a className={'footer--icon'} href={instagram} alt='instagram' target='_blank'>
            <i className={'fa-brands fa-instagram'}></i>
         </a>

         <a className={'footer--icon'} href={twitter} alt='twitter' target='_blank'>
            <i className={'fa-brands fa-twitter'}></i>
         </a>

         <a className={'footer--icon'} href={facebook} alt='facebook' target='_blank'>
            <i className={'fa-brands fa-facebook'}></i>
         </a>

         <a className={'footer--icon'} href={discord} alt='discord' target='_blank'>
            <i className={'fa-brands fa-discord'}></i>
         </a>

         <a className={'footer--icon'} href={pinterest} alt='pinterest' target='_blank'>
            <i className={'fa-brands fa-pinterest'}></i>
         </a>

      </div>

      <p>created by Kevin Carter</p>

   </footer>
 )
}