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
                  Let me introduce myself, I'm Kevin Carter. I'm 26 years 
                  old, born and raised in Baltimore, Maryland. I've been a 
                  Front-End Software Developer for 9 months. As a 
                  professional, I've been able to receive Manager of the 
                  Year twice, Team Member of the Quarter once, 100+ 
                  positive surveys from customers, and a gross revenue 
                  increase of $429,000 for fiscal year 2017. I have 
                  achieved these due to my passion and skill for loving 
                  people no matter what, creative problem-solving, 
                  communication, emotional intelligence, leadership, 
                  self-motivation, critical thinking, patience, 
                  organization, time management, resourcefulness, and 
                  accountability.
               </p>
               <p className={'section--description about--story'}>
                  When I am not leading a team, I enjoy making music, 
                  reading, working out, thrifting, visiting unique 
                  restaurants that serve Italian, Mexican, Japanese, or 
                  Greek food, and shopping. I also like to do DIY projects 
                  and improve my financial literacy. Reading brings me a 
                  lot of joy, as I love uncovering new information and 
                  learning things that I didn't know or didn't retain 
                  before. Reading is a catalyst for many of my other 
                  interests and greatly influences my experience in those 
                  areas.
               </p>
               <p className={'section--description about--story'}>
                  I have many goals that are dear to me, but one that 
                  stands out the most is to be in a position where I can 
                  impact millions of people in spiritual, financial, 
                  motivational, emotional, and entrepreneurial ways. The 
                  first step towards achieving this is by doing so in 
                  Christ Jesus, and as a software developer. 
               </p>
               <p className={'section--description about--story'}>
                  My values are deeply rooted in Christ, as I grew up in a 
                  Christian household. There are four major values that 
                  are dear to me. First, treat people the way you want to 
                  be treated. Second, work as though God is watching you, 
                  because He is. Third, patience must be modeled and not 
                  just spoken. Lastly, always do the right thing.
               </p>
               <p className={'section--description about--story'}>
                  I have several mentors in my life, and I am a reflection 
                  of their influence. Their support has helped guide me in 
                  a positive direction. My mentors hold me accountable and 
                  encourage me to keep climbing. I am grateful for their 
                  guidance and thank them for teaching me how to be a 
                  leader, mentor, self-motivator, communicator, loving, 
                  and efficient in time management.
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