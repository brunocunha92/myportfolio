import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'


const Projects = () => {
    return(
      <div className="tc ph4 pa4">
        <h2 id="projects" className="f3 f2-m f1-l fw2 mv3 pa4 b">Projects</h2>
        <div class="flex justify-around pa4">
          <div class="w-25 pa3 mr2">
            <article class="bg-near-black b--white-05 hover grow">
              <img src="https://robohash.org/87.196.23.208.png?size=600x300" 
              class="db w-100 br2 br--top" 
              alt="robot" />
                <div class="pa2 ph3-ns pb3-ns">
                  <div class="dt w-100 mt1">
                    <div class="dtc">
                      <h1 class="f5 f4-ns mv0">RoboFriends</h1>
                    </div>
                      </div>
                        <p class="f6 lh-copy measure mt2 white tj">
                          A simple React.JS App with the use of RoboHash API to generate and display robots data, 
                          like unique avatars, names and emails.
                        </p>
                        <a href="https://brunocunha92.github.io/RoboFriends/" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="link white hover-red"> <FontAwesomeIcon icon={faCaretRight} /> Visit
                        </a>
                     </div>
             </article>
          </div>
           <div class="w-25 pa3 mr2">
             <article class="bg-near-black b--white-05 hover grow">
               <img src="https://miro.medium.com/max/1200/1*xzCZaJmvMBtqjuBi-kvZwA.png?size=600x300" 
               class="db w-100 br2 br--top" 
               alt="" />
                <div class="pa2 ph3-ns pb3-ns">
                  <div class="dt w-100 mt1">
                    <div class="dtc">
                      <h1 class="f5 f4-ns mv0">Yelp Camp</h1>
                    </div>
                  </div>
                  <p class="f6 lh-copy measure mt2 white tj">
                   Backend features like a database. 
                   Users can create, edit and delete campgrounds, comments and reviews. 
                   Also uses Mapbox API.
                  </p>
                 <a href="https://yelp-camp2.herokuapp.com/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="link white-80 hover-red"> <FontAwesomeIcon icon={faCaretRight} /> Visit
                  </a>
               </div>
             </article>
          </div>
          <div class="w-25 pa3 mr2">
          <article class="bg-near-black b--white-05 hover grow">
            <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1644683284831/x33CjXocE.png?w=600&h=300&fit=crop&crop=entropy&auto=compress,format&format=webp" 
             class="db w-100 br2 br--top" 
             alt="" />
              <div class="pa2 ph3-ns pb3-ns">
                <div class="dt w-100 mt1">
                  <div class="dtc">
                    <h1 class="f5 f4-ns mv0">FaceRecognition App</h1>
                  </div>
                </div>
                <p class="f6 lh-copy measure mt2 white tj">
                 App buildt in React.JS and the face recognition Clarifai API.
                 Some backend features like a database to remember users activities.
                </p>
                <a href="https://github.com/brunocunha92/FaceRecognition" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="link white-80 hover-red"> <FontAwesomeIcon icon={faCaretRight} /> Visit</a>
             </div>
           </article>
          </div>
        </div>
          <div class="bb bw3 pa4 w5 center near-black"> </div>
        </div>
    );
}

export default Projects;