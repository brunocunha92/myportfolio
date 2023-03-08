import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Socials = () => {
    return(
        <div>
           <footer class="bg-near-black white-80 pv5 pv6-l ph4">
             <p class="f6"><span class="dib mr4 mr5-ns">©2023 Bruno Cunha</span>
                <a class="link white-80 hover-red"
                 href="https://www.linkedin.com/in/bruno-cunha-458888200/" 
                 target="_blank" 
                 rel="noopener noreferrer"> <FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a> / 
                <a class="link white-80 hover-red" 
                 href="https://github.com/brunocunha92" 
                 target="_blank" 
                 rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} /> GitHub </a> /  
                <a class="link white-80 hover-red" 
                 href="https://www.instagram.com/skincunha/" 
                 target="_blank" 
                 rel="noopener noreferrer"> <FontAwesomeIcon icon={faInstagram} /> Instagram </a> / 
                <button class="bg-near-black ba b--near-black white hover-red"> <FontAwesomeIcon icon={faEnvelope} /> brunocunha92@gmail.com </button>
             </p>
           </footer>
        </div>    
    );
}

export default Socials;