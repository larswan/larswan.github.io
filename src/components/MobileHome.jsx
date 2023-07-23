import { useNavigate } from 'react-router-dom';
import { CaretRightOutlined, CaretDownOutlined } from '@ant-design/icons';

const MobileHome = () => {
    const navigate = useNavigate()
    const boxColors = [
        "#B0AFA8",
        "#C3C1BA",
        "#D5D3CC",
    ]

    return (
        <div className="mobileHomeContainer">
            <div className="mobileHomeBox">
                <div className="mobileHomeBlock">
                    <img onClick={() => navigate("about")} className="mobileHomeProfPic" src="https://github.com/larswan/larswan.github.io/blob/main/public/siteImages/headshot.jpg?raw=true" />
                    <h1>Larson Collier</h1>
                    <h2>Software Engineer NYC</h2>
                    <CaretDownOutlined className="scrolldownDownArrow"/>
                    <div className="homeAboutText">
                        <p>
                            Hi, I'm Larson, a web developer based in New York City.<br></br><br></br> You can find demos of applications I've built as well as examples of my art, design, and animation here. You can contact my through the links provided on the about page.
                        </p>
                    </div>
                </div>
            </div>
            <div onClick={() => navigate("projects")} className="mobileHomeBox">
                <div className="mobileHomeBlock">
                    
                </div>
            </div>
            <div onClick={() => navigate("about")} className="mobileHomeBox">
                <div className="mobileHomeBlock">

                </div>
            </div>
            <div onClick={() => navigate("about")} className="mobileHomeBox">
                <div className="mobileHomeBlock">

                </div>
            </div>

            
        </div>
    )
}

export default MobileHome