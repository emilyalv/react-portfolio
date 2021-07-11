import React from "react";
import ProfilePicture from '../assets/emilyalvarado_circle_headshot.png'
const About= () => {
    return (
        <div className="aboutMe">   
            <div>
            <img className="profile-pic" src={ProfilePicture} alt={"Emily Alvarado img"}/>
                <div className="about-content">
                <p><b>Based In:</b> Chicago, IL</p>
                <p><b>Coding Languages:</b> JavaScript, HTML, CSS</p>
                <p><b>Experienced In:</b> Front-end & back-end development using technnologies such as:
                <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>React.js</li>
                </ul>                
                </p>
                <p><b>Related Industry Experience:</b>
                <ul>
                    <li>Agile Methodology</li>
                    <li>Software Development Lifecycle</li>
                </ul>                
                </p>
                </div>
                
            </div>    
            
        </div>

    )}

    export default About;