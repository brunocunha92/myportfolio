import React from "react";
import logo from './logo2.png';

const Intro = () => {
    return(
        <div className="tc ph4 pa4">
          <h1 className="b f-headline-ns tc i"> 
             <span className="red">my</span>Portfolio( ) 
          </h1>
          <article class="mw5 center bg-near-black br3 pa3 pa4-ns mv3 ba b--white-05">
            <div class="tc">
              <img src={logo} class="br-100 h4 w4 dib ba b--white-05 pa2" alt='avatar' />
              <h1 class="f3 mb2">Bruno Cunha</h1>
              <h2 class="f5 fw4 gray mt0">Front-End Developer</h2>
            </div>
          </article>
          <div class="bb bw3 pa4 w5 center near-black"> </div>
        </div>
    )
}

export default Intro;