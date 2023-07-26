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
                    <h2>Software Engineer, NYC</h2>
                    <hr></hr>
                    <div className="homeAboutText">
                        <p>
                            Hi, I'm Larson, a web developer based in New York City.<br></br><br></br>
                            You can find demos of <a onClick={() => navigate("projects")} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}><b>applications</b></a> I've built as well as examples of my <a onClick={() => navigate("cartoons")} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}><b>art</b></a>, <a onClick={() => navigate("design")} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}><b>designs</b></a>, and <a onClick={() => navigate("animations")} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}><b>animations</b></a> here.<br></br><br></br>
                            Feel free to reach out through the links provided on the <a onClick={() => navigate("about")} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}><b>about</b></a> page!
                        </p>
                    </div>
                </div>
                    <a className="scrollDownATag" onClick={() => smoothScroll(box2)}>
                        <CaretDownOutlined className="scrollArrow" />
                    </a>
            </div>
            <div id="box2" className="mobileHomeBox">
                <div className="mobileHomeBlock">
                    <h1><small><em>Featured Project:</em></small></h1>
                    <img className="mobileHomePageDemo" src="https://github.com/larswan/larswan.github.io/blob/main/public/siteImages/guessdamateCompressedGif.gif?raw=true" />
                    <h1>GuessDaMate</h1>
                    <a href="https://www.loom.com/embed/f6f3ce52544f457da8ba9673a6336c6f?sid=231f2dcd-1663-4260-93b8-bf2df82c4b98"><h2 id="demoButton">Watch Demo</h2></a>
                    <p>
                        GuessDaMate, a web-based take on the classic board game Guess Who?, allows users to play against friends using their Google account in a mobile first application.
                    </p>
                </div>
                    <a className="scrollDownATag" onClick={() => smoothScroll(box3)}>
                        <CaretDownOutlined className="scrollArrow" />
                    </a>
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
                    <div className="mobileHomeArtBlock" onClick={() => navigate("design")}>
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