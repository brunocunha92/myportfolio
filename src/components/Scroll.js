import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Scroll = () => {

const scrollToTop = () => {
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };

return (
        <div class="tc ph4 pa4">
            <button class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-near-black hover-red ba b--white-05" 
             onClick={scrollToTop}> <FontAwesomeIcon icon={faArrowUp} />
            </button>
        </div>
    );
}

export default Scroll;