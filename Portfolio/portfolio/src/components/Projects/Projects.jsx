import "./Projects.css";
import portfolio from "../../assets/portfolio.png";
import weather from "../../assets/weather.png";
import ecommerce from "../../assets/e-commerce.png";

export default function Project() {
    return (
        <div className="projects">
            <div className="headingprojects">
                <h1>My Projects</h1>
            </div>
            
            <div className="projects1">
                <div className="box1">
                    <div className="headingportfolio">
                        <h4>Portfolio</h4>
                        <img src={portfolio} className="portfolioimg" />
                    </div>
                </div>
                <div className="box1">
                    <div className="headingweatherapp">
                        <h4>Weather App</h4>
                        <img src={weather} className="weatherimg"/>
                    </div>
                </div>
                <div className="box1">
                    <div className="headingecommece">
                        <h4>E-Commerce</h4>
                        <img src={ecommerce} className="ecommerceimg" />
                    </div>
                </div>
            </div>
        </div>
    );
}