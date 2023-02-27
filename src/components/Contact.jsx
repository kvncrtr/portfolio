import React, { forwardRef } from 'react'

function Contact(props, ref) {
let email = 'mailto:console.logkevin@gmail.com'

   return (
      <section ref={ref} id={'contact'} className={'section contact--section'}>

         <div className={'contact--container'}>

            <h1 className={'section--title contact--title'}>Let's Work</h1>
            <a href={email} className={'contact--email'}>Email</a>

            <div className={'contact--shape-case'}>
               <div className={'contact--square'}></div>
               <div className={'contact--cylinder'}>
                  <div className={'rectangle'}>
                     <div className={'oval top--oval'}></div>
                     <div className={'oval bottom--oval'}></div>
                  </div>
               </div>
               <div className={'contact--rectangle'}></div>
               <div className={'contact--circle'}></div>
               <div className={'contact--triangle'}></div>
            </div>

         </div>
      </section>
   )
}

export default forwardRef(Contact)