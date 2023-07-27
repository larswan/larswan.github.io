import { useNavigate } from 'react-router-dom';
import { CaretRightOutlined } from '@ant-design/icons';
import { Scrollbar } from 'react-scrollbars-custom';

const DesktopHome = () => {
    const navigate = useNavigate()

    const boxColors = [
        "#B0AFA8",
        "#C3C1BA",
        "#D5D3CC",
    ]

    const greyRange = [
        "#FAF7EF", //eggshell outline color
        "#E8E5DD",
        "#D5D3CC",
        "#C3C1BA",
        "#B0AFA8",
        "#9E9D97",
        "#8C8A85",
        "#797873",
        "#676661",
        "#545450",
        "#42423E", //light dark
    ]

    return(
        <div className="gridContainer">
            <div onClick={() => navigate("about")} 
                className="box" 
            style={{ '--background-color': '#181307', backgroundColor: 'var(--background-color)' }}>
                <div className="homeAboutContainer">
                    <img className="homeProfPic" src="https://github.com/larswan/larswan.github.io/blob/main/public/siteImages/headshot.jpg?raw=true" />
                    <div className="boxTitleContainer">
                        <h1>Larson Collier: Software Engineer NYC</h1>
                        <CaretRightOutlined className="homeArrowIcon" style={{color: "white"}} />
                    </div>
                    <div className="ScrollbarsCustom native trackYVisible trackXVisible">

                        <div className="homeAboutText">
                            <p>
                                Hi, I'm Larson, a web developer based in New York City.<br></br><br></br>
                                You can find demos of some of the <a onClick={() => navigate("projects")} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}><b>web-applications</b></a> I've built as well as examples of my <a onClick={() => navigate("cartoons")} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}><b>art</b></a>, <a onClick={() => navigate("design")} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}><b>designs</b></a>, and <a onClick={() => navigate("animations")} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}><b>animations</b></a> here.<br></br><br></br>
                                I'm currently building a project using LangChain, Tiktoken, and ChromaDB to enable question answering over user uploaded documents.<br></br><br></br>
                                Feel free to reach out through the links provided on the <a onClick={() => navigate("about")} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}><b>about</b></a> page!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div  
                className="box" 
                style={{ '--background-color': 'white', backgroundColor: 'var(--background-color)' }}>
                
                <div className="boxTitleContainer" onClick={() => navigate("projects")}>
                    <h1 className="homePageProjectsTitle">View All Projects</h1>
                    <CaretRightOutlined className="homeArrowIcon" />
                </div>
                <div className="homePageProjectContents">    
                    <img className="homePageDemo" src="https://github.com/larswan/larswan.github.io/blob/main/public/siteImages/guessdamateCompressedGif.gif?raw=true" />
                    <div className="homeProjectDesciption">
                        <h3>Featured Project:</h3>
                        <h3>GuessDaMate</h3>
                        <a href="https://www.loom.com/embed/f6f3ce52544f457da8ba9673a6336c6f?sid=231f2dcd-1663-4260-93b8-bf2df82c4b98"><h2 id="desktopDemoButton">Watch Demo</h2></a>
                        <p>
                            GuessDaMate is my web-based take on the classic board game Guess Who?<br></br><br></br>
                            Users sign in and add friends using their Google accounts. They then select a set of famous people and take turns trying to guess the other player's card.<br></br><br></br>
                            This project helped strengthen my skills in mobile-first design as well as handling game logic.
                        </p>
                    </div>
                </div>

            </div>
            
            <div onClick={()=>navigate("cartoons")} 
                className="box" 
                style={{ '--background-color': boxColors[0], backgroundColor: 'var(--background-color)' }}>
                <div className="boxTitleContainer">
                    <h1>Art</h1>
                    <CaretRightOutlined className="homeArrowIcon"/>
                </div>
                <img src="https://github.com/larswan/larswan.github.io/blob/main/public/cartoons/REPTILES%20NEW%20BOX.png?raw=true" />
            </div>
            
            <div onClick={()=>navigate("animations")} 
                className="box" 
                style={{ '--background-color': boxColors[1], backgroundColor: 'var(--background-color)' }}>
                <div className="boxTitleContainer">
                    <h1>Animation</h1>
                    <CaretRightOutlined className="homeArrowIcon" />
                </div>
                <img src="https://github.com/larswan/larswan.github.io/blob/main/public/animations/Mothers%20Day%202020%20card.GIF?raw=true" />
            </div>
            <div onClick={() => navigate("designs")} 
                className="box" 
                style={{ '--background-color': boxColors[2], backgroundColor: 'var(--background-color)' }}>
                <div className="boxTitleContainer">
                    <h1>Design</h1>
                    <CaretRightOutlined className="homeArrowIcon" />
                </div>
                <img src="https://github.com/larswan/larswan.github.io/blob/main/public/graphics/pure%20genius%204.18.22%20final%20B.png?raw=true" style={{ backgroundColor: 'white' }} />
            </div>
            
            {/* <div className="box" 
                style={{ '--background-color': 'grey', backgroundColor: 'var(--background-color)' }}>
                <h1>SOCIALS</h1>
            </div> */}
        </div>
    )
}
export default DesktopHome