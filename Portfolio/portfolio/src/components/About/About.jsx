import "./About.css";
import about from "../../assets/about.png";

export default function About() {
    return (
        <div className="about">
            <div className="img">
                <img src={about} className="aboutimg" />
            </div>

            <div className="aboutsection">
                <div className="headingabout">
                    <h1>ABOUT</h1>
                </div>
                <div className="headingh3about">
                    <h3>I am professional web developer & designer having 1 year experience.</h3>
                </div>
                <div className="paraabout">
                    <p>I am a full stack developer with 1 year of experience in building dynamics and responsice web application. My skills include proficiency in HTML, CSS, Javascript, React, Node-js, and various other tools and frameworks.</p>
                </div>
                <br/>
                <div className="para2about">
                    <p>I have strong understanding of front-end and back-end development, allowing me to create comprehensive solution that meet user needs and business goals. I am passionate learning about coding continuosly learing new technology and eager to contribute to innovative projects.</p>
                </div>
                <div className="btnabout">
                    <button className="btnabout1">Download cv</button>
                </div>
            </div>
        </div>
    );
}