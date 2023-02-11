import { useRef } from "react"
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
   const navRef = useRef()

   const showNavbar = () => {
      navRef.current.classList.toggle('responsive_nav')
   }

   return (
      <div className='navbar--container'>
         <h3>Kevin Carter</h3>
         <nav ref={navRef}>
            <a href='Home'>Home</a>
            <a href='Skills'>Skills</a>
            <a href='Languages'>Languages</a>
            <a href='Projects'>Projects</a>
            <a href='Contact'>Contact</a>
            <button onClick={showNavbar}>
               <FaTimes />
            </button>
         </nav>
         <button onClick={showNavbar}>
            <FaBars />
         </button>
      </div>
   )
}