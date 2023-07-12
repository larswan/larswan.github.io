import { useNavigate } from 'react-router-dom';

const GridTest = () => {
    const navigate = useNavigate()


    return(
        <div className="gridContainer">
            <div onClick={()=>navigate("about")} className="box" style={{ '--background-color': 'blue', backgroundColor: 'var(--background-color)' }}>
                <div className="homeAboutContainer">
                    <h1>ABOUT</h1>
                    <p>Hi, I'm Larson Collier a front-end developer based in New York. This site is my portfolio.</p>
                </div>
            </div>
            
            <div onClick={() => navigate("about")} className="box" style={{ '--background-color': 'white', backgroundColor: 'var(--background-color)' }}>
                <h1>Projects</h1>
                {/* <img src={graphicPaths[0]}/> */}
            </div>
            
            <div onClick={()=>navigate("cartoons")} className="box" style={{ '--background-color': 'grey', backgroundColor: 'var(--background-color)' }}>
                <h1>Art</h1>
            </div>
            
            <div onClick={()=>navigate("animations")} className="box" style={{ '--background-color': 'teal', backgroundColor: 'var(--background-color)' }}>
                <h1>Animations</h1>
                <img src="https://github.com/larswan/larswan.github.io/blob/main/public/animations/headbounce%20cropped%20gif.gif?raw=true" />
            </div>
            <div onClick={()=>navigate("graphics")} className="box" style={{ '--background-color': 'green', backgroundColor: 'var(--background-color)' }}>
                <h1>Graphics</h1>
            </div>
            
            <div className="box" style={{ '--background-color': 'pink', backgroundColor: 'var(--background-color)' }}>
                <h1>SOCIALS</h1>
            </div>
        </div>
    )
}
export default GridTest