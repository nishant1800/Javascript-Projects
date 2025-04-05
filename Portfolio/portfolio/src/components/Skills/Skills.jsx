import "./Skills.css"
import react from "../../assets/react.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import bootstrap from "../../assets/bootstrap.png";
import materialUI from "../../assets/materialUI.png";


export default function Skills() {
    return (
        <div className="skills">
            <div className="headingskills">
                <h1>My Skills</h1>
            </div>
            <div className="skills1">
                
                <div className="react">
                    <div className="reacting">
                        <img src={react} className="reactimg2"></img>
                    </div>
                </div>
                <div className="html">
                    <img src={html} className="htmlimg1"></img>
                </div>
                <div className="css">
                    <img src={css} className="cssimg2"></img>
                </div>
                <div className="javascript">
                    <img src={javascript} className="javascriptimg3"></img>
                </div>
                <div className="bootstrap">
                    <img src={bootstrap} className="bootstrapimg4"></img>
                </div>
                <div className="materialUI">
                    <img src={materialUI} className="materialUIimg5"></img>
                </div>
            </div>
        </div>
    );
}