import { graphicPaths } from "./paths"

const GridTest = () => {

    return(
        <div className="gridContainer">
            <div className="box" style={{ '--background-color': 'blue', backgroundColor: 'var(--background-color)' }}>
                <h1>ABOUT</h1>
                <p>Hi, I'm Larson Collier a front-end developer based in New York. This site is my portfolio.</p>
            </div>
            
            <div className="box" style={{ '--background-color': 'white', backgroundColor: 'var(--background-color)' }}>
                <h1>Projects</h1>
                {/* <img src={graphicPaths[0]}/> */}
            </div>
            
            <div className="box" style={{ '--background-color': 'grey', backgroundColor: 'var(--background-color)' }}>
                <h1>3</h1>
            </div>
            
            <div className="box" style={{ '--background-color': 'teal', backgroundColor: 'var(--background-color)' }}>
                <h1>4</h1>
            
            </div>
            <div className="box" style={{ '--background-color': 'green', backgroundColor: 'var(--background-color)' }}>
                <h1>5</h1>
            </div>
            
            {/* <div className="box" style={{ '--background-color': 'pink', backgroundColor: 'var(--background-color)' }}>
                <h1>6</h1>
            </div> */}
        </div>
    )
}
export default GridTest