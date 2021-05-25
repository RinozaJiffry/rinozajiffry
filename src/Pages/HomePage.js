import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Rinoza Jiffry.</span>
                </h1>
                <p className = "h-sub-text"><b>Frontend Web Developer | DataScience Enthusiast | Blogger</b></p>
                <br/>
                <p className="h-sub-text">
                An enthusiastic, self-motivational person with the ability to grasp the
                latest concepts, principles and trends in my studies, in order to build up my
                experience in every aspect. I could work well because of my abilities such
                as understanding, patience and memorizing skills and looking for a
                responsible position to gain practical experience.
                I wish to develop my knowledge and experience in the field which I am in.
                </p>
                <div className="icons">
                    <a href = 'https://www.linkedin.com/in/rinoza-jiffry-3277671a4/' className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon li" /> </a>    
                
                    <a href='https://github.com/RinozaJiffry' className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a href='https://www.facebook.com/rinoza.jiffry.9' className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </a>
                    <a href='https://www.instagram.com/rinoza_1999/' className="icon-holder">
                        <FontAwesomeIcon icon={faInstagram} className="icon in" />
                    </a>
                    <a href='https://twitter.com/Rinoza_Jiffry' className="icon-holder">
                        <FontAwesomeIcon icon={faTwitter} className="icon tw" />
                    </a>
                   
                </div>
            </header>
        </div>
    )
}

export default HomePage;
