import "./HeroSection.css";
import myimage from "../../assets/myimage.png";

export default function HeroSection() {
    return (
        <div className="herosection">
            <div className="left">
                <div className="para">
                    <p>Web developer</p>
                </div>

                <div className="herosectionh1">
                    <h1> I am <span>Nishant</span></h1>
                </div>
                <div className="stack">
                    <h1>Full Stack developer</h1>
                </div>
                <div className="para2">
                    <p>Hii, I am Nishant Ranjan, a full stack developer with expertise in both front-end and
                    backend technologies and also have experience with Java language.
                    </p>
                </div>
            </div>

            <div className="right">
                <img src={myimage} alt="image" className="myimage" />
            </div>
        </div>
    );
}