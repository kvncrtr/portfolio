import { forwardRef } from "react"
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar({handleClick, showNavbar, skillScroll, projectScroll}, navRef) {
   
   return (
      <header className={'navbar--container'}>
         <h3>Kevin Carter</h3>

         <nav ref={navRef}>
            <span className={'nav--links'} onClick={handleClick}>Home</span>
            <span className={'nav--links'} onClick={skillScroll}>Services</span>
            <span className={'nav--links'} onClick={handleClick}>About</span>
            <span className={'nav--links'} onClick={projectScroll}>Projects</span>
            <span className={'nav--links'} onClick={handleClick}>Contact</span>
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

export default forwardRef(Navbar)