import { useNavigate } from 'react-router-dom';

const GridTest = () => {
    const navigate = useNavigate()

    const boxColors = [
        "#25241F", 
        "#393934", 
        "#42423E",
    ]


    return(
        <div className="gridContainer">
            <div onClick={() => navigate("about")} 
                className="box" 
            style={{ '--background-color': '#181307', backgroundColor: 'var(--background-color)' }}>
                <div className="homeAboutContainer">
                    <h1>ABOUT</h1>
                    <img id="aboutProfPic" src="public/siteImages/headshot.jpg" />
                    <p>Hi, I'm Larson Collier a front-end developer based in New York. This site is my portfolio.</p>
                </div>
            </div>
            
            <div onClick={() => navigate("projects")} 
                className="box" 
                style={{ '--background-color': 'white', backgroundColor: 'var(--background-color)' }}>
                <h1 className="homePageProjectsTitle">Projects</h1>
                {/* <img src={graphicPaths[0]}/> */}
            </div>
            
            <div onClick={()=>navigate("cartoons")} 
                className="box" 
                style={{ '--background-color': boxColors[0], backgroundColor: 'var(--background-color)' }}>
                <h1>Art</h1>
                <img src="https://github.com/larswan/larswan.github.io/blob/main/public/cartoons/REPTILES%20NEW%20BOX.png?raw=true" />
            </div>
            
            <div onClick={()=>navigate("animations")} 
                className="box" 
                style={{ '--background-color': boxColors[1], backgroundColor: 'var(--background-color)' }}>
                <h1>Animations</h1>
                <img src="https://github.com/larswan/larswan.github.io/blob/main/public/animations/Mothers%20Day%202020%20card.GIF?raw=true" />
            </div>
            <div onClick={() => navigate("graphics")} 
                className="box" 
                style={{ '--background-color': boxColors[2], backgroundColor: 'var(--background-color)' }}>
                <h1>Graphics</h1>
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