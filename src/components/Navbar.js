import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => { 
   return (
        <nav className='f3 pa3 flex justify-end bg-near-black'>
               <AnchorLink href="#about" className='f3 pa2 link hover-red white pointer'>About</AnchorLink>
               <AnchorLink href="#projects" className='f3 pa2 link hover-red white pointer'>Projects</AnchorLink>
               <AnchorLink href="#resume" className='f3 pa2 link hover-red white pointer'>Resume</AnchorLink>
        </nav>
    );
}

export default Navbar;