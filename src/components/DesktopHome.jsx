import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
// import Fade from 'react-reveal/Fade';

const DesktopHome = () => {

    const navigate = useNavigate()
    
    return (
        <div className="homeContainer">
            <div className="homePageContainer">
                <div className="homePageBlock">

                    <img className="svg colored" src="/svgs/bush.svg" />

                    {/* <Fade bottom distance='5%'> */}
                    <img className="homeHeadshot" src="/siteImages/headshot.jpg" alt="Headshot" />
                    {/* <img className="homeHeadshot" src="https://github.com/larswan/larswan.github.io/blob/main/public/siteImages/headshot.jpg?raw=true"/> */}
                    {/* </Fade> */}
                </div>
                <div className="homePageBlock">
                    {/* <Fade bottom distance='5%'> */}
                        <div className="homeTextBlocks">
                            <h1>Frontend<br></br>Developer.</h1>
                            <p>I like to build beautiful interfaces with user experience as a priority</p>
                        </div>
                        <a className='homePageButton browseProjects' onClick={() => navigate("projects")}>Browse Projects</a>
                    {/* </Fade> */}
                </div>
            </div>
            <div className="homePageContainer">
                <div className="homePageBlock">
                    {/* <Fade bottom distance='5%'> */}
                        <div className="homeTextBlocks">
                            <h1>Featured<br></br>Project.</h1>
                            <p>Guess Da Mate is a web-based take on the classic board game Guess Who.<br></br><br></br>Users can login using their Google account and play against friends in a mobile first interface</p>
                        </div>
                        <a className='homePageButton watchDemo' href="https://www.loom.com/embed/f6f3ce52544f457da8ba9673a6336c6f?sid=231f2dcd-1663-4260-93b8-bf2df82c4b98">Watch Demo</a>
                    {/* </Fade> */}
                </div>
                <div className="homePageBlock">
                    {/* <Fade bottom distance='5%'> */}
                        <img className="homePageDemo" src="https://github.com/larswan/larswan.github.io/blob/main/public/siteImages/guessdamateCompressedGif.gif?raw=true" />
                    {/* </Fade> */}
                </div>
            </div>
            <div className="homePageContainer">
                <div className="homePageBlock">
                    {/* <Fade bottom distance='5%'> */}
                        <div onClick={() => navigate("cartoons")} className="desktopArtBlock">
                            <img className="desktopArtImg" src="https://github.com/larswan/larswan.github.io/blob/main/public/cartoons/REPTILES%20NEW%20BOX.png?raw=true" />
                        </div>
                        <div onClick={() => navigate("animations")} className="desktopArtBlock">
                            <img className="desktopArtImg" src="https://github.com/larswan/larswan.github.io/blob/main/public/animations/Mothers%20Day%202020%20card.GIF?raw=true" />
                        </div>
                        <div className="desktopArtBlock" onClick={() => navigate("design")}>
                            <img className="desktopArtImg" src="https://github.com/larswan/larswan.github.io/blob/main/public/graphics/pure%20genius%204.18.22%20final%20B.png?raw=true" style={{ backgroundColor: 'white' }} />
                        </div>
                    {/* </Fade> */}
                </div>
                <div className="homePageBlock">
                    {/* <Fade bottom distance='5%'> */}
                        <div className="homeTextBlocks">
                            <h1>Art.</h1>
                            <p>I also enjoy drawing and making animations, designs and music<br></br><br></br>
                            You can find examples of my work as well as some random sketches here
                            </p>
                        </div>
                        <a className='homePageButton artButton' onClick={()=>{navigate("cartoons")}}>Browse Art</a>
                    {/* </Fade> */}
                </div>
            </div>
        </div>
    )
};

export default DesktopHome;
