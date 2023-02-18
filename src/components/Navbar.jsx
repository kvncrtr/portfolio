import { useRef } from "react"
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
   const navRef = useRef(null)

   const showNavbar = () => {
      navRef.current.classList.toggle('responsive--nav')
   }

   return (
      <header id={'nav'} className={'navbar--container'}>
         <h3>Kevin Carter</h3>

         <nav ref={navRef}>
            <a href='/#nav' onClick={showNavbar}>Home</a>
            <a href='/#skill' onClick={showNavbar}>Services</a>
            <a href='/#about' onClick={showNavbar}>About</a>
            <a href='/#projects' onClick={showNavbar}>Projects</a>
            <a href='/#contact' onClick={showNavbar}>Contact</a>
            <button className={'nav--button nav--close-button'} onClick={showNavbar}>
               <FaTimes />
            </button>
         </nav>
         
         <button className={'nav--button'} onClick={showNavbar}>
            <FaBars />
         </button>
      </header>
   )
}