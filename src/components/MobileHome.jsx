import { useNavigate } from 'react-router-dom';
import { CaretRightOutlined, CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';

const MobileHome = () => {
    const navigate = useNavigate()
    const boxColors = [
        "#B0AFA8",
        "#C3C1BA",
        "#D5D3CC",
    ]

    function smoothScroll (id) {
            id.scrollIntoView({ behavior: "smooth" });
        }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className="mobileHomeContainer">
            <div id="box1" className="mobileHomeBox">
                <div className="mobileHomeBlock">
                    <img onClick={() => navigate("about")} className="mobileHomeProfPic" src="https://github.com/larswan/larswan.github.io/blob/main/public/siteImages/headshot.jpg?raw=true" />
                    <h1>Larson Collier</h1>
                    <h2>Software Engineer NYC</h2>
                    <div className="homeAboutText">
                        <p>
                            Hi, I'm Larson, a web developer based in New York City.<br></br><br></br> You can find demos of applications I've built as well as examples of my art, design, and animation here. You can contact my through the links provided on the about page.
                        </p>
                    </div>
                    <a className="scrollDownATag" onClick={() => smoothScroll(box2)}>
                        <CaretDownOutlined className="scrollArrow" />
                    </a>
                </div>
            </div>
            <div id="box2" className="mobileHomeBox">
                <div className="mobileHomeBlock">
                    <img className="mobileHomePageDemo" src="https://github.com/larswan/larswan.github.io/blob/main/public/siteImages/guessdamateCompressedGif.gif?raw=true" />
                    <h1><small><em>Featured Project:</em></small> GuessDaMate</h1>
                    <a href="https://www.loom.com/embed/f6f3ce52544f457da8ba9673a6336c6f?sid=231f2dcd-1663-4260-93b8-bf2df82c4b98"><h2>Watch Full Demo</h2></a>
                    <p>
                        GuessDaMate, web based take on the classic board game 'Guess Who?', allows users to play against friends using their Google account in a mobile first designed interface.'
                    </p>
                    <a className="scrollDownATag" onClick={() => smoothScroll(box3)}>
                        <CaretDownOutlined className="scrollArrow" />
                    </a>
                </div>
            </div>
            <div id="box3" className="mobileHomeBox">
                {/* <div className="mobileHomeBlock"> */}
                    <div onClick={() => navigate("cartoons")} className="mobileHomeArtBlock">
                        <img className="mobileHomeArtImg" src="https://github.com/larswan/larswan.github.io/blob/main/public/cartoons/REPTILES%20NEW%20BOX.png?raw=true" />
                        <h1 className="mobileHomeArtTitle">ART</h1>
                        <CaretRightOutlined className="mobileHomeArrow" />
                    </div>
                    <div onClick={() => navigate("animations")} className="mobileHomeArtBlock">
                        <img className="mobileHomeArtImg" src="https://github.com/larswan/larswan.github.io/blob/main/public/animations/Mothers%20Day%202020%20card.GIF?raw=true" />
                        <h1 className="mobileHomeArtTitle">ANIMATION</h1>
                        <CaretRightOutlined className="mobileHomeArrow" />
                    </div>
                    <div className="mobileHomeArtBlock" onClick={() => navigate("designs")}>
                        <img className="mobileHomeArtImg" src="https://github.com/larswan/larswan.github.io/blob/main/public/graphics/pure%20genius%204.18.22%20final%20B.png?raw=true" style={{ backgroundColor: 'white' }} />
                        <h1 className="mobileHomeArtTitle">DESIGN</h1>
                        <CaretRightOutlined className="mobileHomeArrow" />
                    </div>

                {/* </div> */}
            </div>           
                    {/* <a onClick={() => scrollToTop()} >
                        <CaretUpOutlined className="scrollArrow" />
                    </a> */}
        </div>
    )
}

export default MobileHome