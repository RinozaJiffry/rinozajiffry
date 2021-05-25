import React from 'react';
import about from '../img/3.jpeg';


function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Rinoza Jiffry</span></h4>
                <p className="about-text">
                I have completed the Higher Certification and the second year in Software Engineering offered 
                by the University of Westminster, UK. Currently, I am looking for frontend development, 
                backend development or data science job roles. I am interested in working on 
                machine learning researches.
                    

                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Degree Program</p>
                    </div>
                    <div className="right-section">
                        <p>: Mohamed Jiffry Fathima Rinoza</p>
                        <p>: 22</p>
                        <p>: SriLankan</p>
                        <p>: English , Tamil , Sinhala</p>
                        <p>: Collingwood place, Colombo 6, SriLanka</p>
                        <p>: BEng(Hons) in Software Engineering</p>
                    </div>
                </div>
                <button className="btn">
                <a className = "btn"
                href="https://drive.google.com/file/d/1kX__f8zNcl9PW5CelqzHN6aaYmRqDyNu/view?usp=sharing" 
                download>
                    Download Cv </a></button>
            </div>
        </div>
    )
}

export default ImageSection;
