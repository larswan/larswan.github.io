import { useNavigate } from 'react-router-dom';
import { RightCircleOutlined, CaretRightOutlined, ArrowRightOutlined, AppleOutlined, LinkedinFilled, GithubFilled, MailFilled, CodeFilled } from '@ant-design/icons';

const GridTest = () => {
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
        "#",
        "#",
    ]
    
    const boxColors1 = [
        "#25241F", //darkest 
        "#393934", 
        "#42423E", //lightdark
    ]

    return(
        <div className="gridContainer">
            <div onClick={() => navigate("about")} 
                className="box" 
            style={{ '--background-color': '#181307', backgroundColor: 'var(--background-color)' }}>
                <div className="homeAboutContainer">
                    <img id="aboutProfPic" src="public/siteImages/headshot.jpg" />
                    <div className="boxTitleContainer">
                        <h1>ABOUT</h1>
                        <CaretRightOutlined className="homeArrowIcon" style={{color: "white"}} />
                    </div>
                    <p>Hi, I'm Larson Collier a front-end developer based in New York. This site is my portfolio.</p>
                </div>
            </div>
            
            <div onClick={() => navigate("projects")} 
                className="box" 
                style={{ '--background-color': 'white', backgroundColor: 'var(--background-color)' }}>
                
                <div className="boxTitleContainer">
                    <h1 className="homePageProjectsTitle">Projects</h1>
                    <CaretRightOutlined className="homeArrowIcon" />
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
export default GridTest