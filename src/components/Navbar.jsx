import { useRef } from "react"
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
   const navRef = useRef(null)

   const showNavbar = () => {
      navRef.current.classList.toggle('responsive--nav')
   }

   return (
      <header className='navbar--container'>
         <h3>Kevin Carter</h3>

         <nav ref={navRef}>
            <a href='/#'>Home</a>
            <a href='/#'>Services</a>
            <a href='/#'>About</a>
            <a href='/#'>Projects</a>
            <a href='/#'>Contact</a>
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