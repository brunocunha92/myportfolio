import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

const Resume = () => {
    return(
        <div>
            <h2 id="resume" className="f3 f2-m f1-l fw2 mv3 tc pa4 b">Resume</h2>
            <div className="tc pa4">
                <h2 className="b i">The Complete Web Developer in 2023: Zero to Mastery</h2>
                <p className="red">Udemy</p>
                <p className="">- HTML5, CSS3, JavaScript, DOM Manipulation, React, Git, NodeJS, ExpressJS, PostgresSQL</p>
                <p className="">February 2023</p>
                <a href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-fb577866-8e72-4d8e-963d-1bdea3ac739f.pdf" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="link white hover-red"> <FontAwesomeIcon icon={faCaretRight} /> Certificate of completion</a>
            </div>
            <div class="bb bw1 pa4 w5 center near-black"> </div>
            <div className="tc pa4">
                <h2 className="b i">The Web Developer BootCamp 2023</h2>
                <p className="red">Udemy</p>
                <p className="">- HTML5, CSS3, JavaScript, DOM Manipulation, NodeJS, ExpressJS, MongoDB</p>
                <p className="">December 2022</p>
                <a href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-12deb0a3-3247-4700-9dd3-bc057042ba67.pdf" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="link white hover-red"> <FontAwesomeIcon icon={faCaretRight} /> Certificate of completion</a>
            </div>
            <div class="bb bw3 pa4 w5 center near-black"> </div>
        </div>
    );
}

export default Resume;