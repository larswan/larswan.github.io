import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';


const DesktopHome = () => {

    const navigate = useNavigate()
    
    return (
        <div className="homeContainer">
            <div className="homePageContainer">
                <div className="homePageBlock">
                    <img className="homeHeadshot" src="public/siteImages/headshot.jpg"/>
                </div>
                <div className="homePageBlock">
                    <div className="homeTextBlocks">
                        <h1>Frontend<br></br>Developer.</h1>
                        <p>I like to build beautiful interfaces with user experience as a priority</p>
                    </div>
                    <a className='homePageButton browseProjects' onClick={() => navigate("projects")}>Browse Projects</a>
                </div>
            </div>
            <div className="homePageContainer">
                <div className="homePageBlock">
                    <div className="homeTextBlocks">
                        <h1>Featured<br></br>Project.</h1>
                        <p>Guess Da Mate is a web-based take on the classic board game Guess Who. Users can login using their Google account and play against friends in a mobile first interface</p>
                    </div>
                    <a className='homePageButton watchDemo' href="https://www.loom.com/embed/f6f3ce52544f457da8ba9673a6336c6f?sid=231f2dcd-1663-4260-93b8-bf2df82c4b98">Watch Demo</a>
                </div>
                <div className="homePageBlock">
                    <img className="homePageDemo" src="https://github.com/larswan/larswan.github.io/blob/main/public/siteImages/guessdamateCompressedGif.gif?raw=true" />
                </div>
            </div>
            <div className="homePageContainer">
                <div className="homePageBlock">
                    
                </div>
                <div className="homePageBlock">

                </div>
            </div>
        </div>
    )
};

export default DesktopHome;
