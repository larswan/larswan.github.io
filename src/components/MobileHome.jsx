import { useNavigate } from 'react-router-dom';
import { CaretRightOutlined } from '@ant-design/icons';

const MobileHome = () => {
    const navigate = useNavigate()
    const boxColors = [
        "#B0AFA8",
        "#C3C1BA",
        "#D5D3CC",
    ]

    return (
        <div className="mobileHomeContainer">
            <div onClick={() => navigate("about")}
                className="mobileHomeBlock"
                // style={{ '--background-color': '#181307', backgroundColor: 'var(--background-color)' }}
                >
                <div className="mobileHomeBlock">
                    <img className="mobileHomeProfPic" src="https://github.com/larswan/larswan.github.io/blob/main/public/siteImages/headshot.jpg?raw=true" />
                    <h1>Larson Collier</h1>
                    <h2>Software Engineer NYC</h2>
                    <div className="ScrollbarsCustom native trackYVisible trackXVisible">
                        <div className="homeAboutText">
                            <p>
                                I'm Larson Collier, a developer based in New York.
                                <br></br><br></br>
                                You can find examples of my previous applications as well as my art animations and design work. design. I strive to incorporate my background in art, animation, and design into the applications I build to create engaging and fun sites.
                                <br></br><br></br>
                                Currently I'm building a web based application that takes in an artist name and uses goolg api to source interviews from the artsit. These docuemtns are then passed to an LLM to generate a list of recommendations fbased on the artsits inspirations
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div onClick={() => navigate("projects")}
                className="mobileHomeBlock"
                style={{ '--background-color': 'white', backgroundColor: 'var(--background-color)' }}>

                <div className="boxTitleContainer">
                    <h1 className="homePageProjectsTitle">Featured Project</h1>
                    <CaretRightOutlined className="homeArrowIcon" />
                </div>
                <div className="homePageProjectContents">
                    <img className="homePageDemo" src="https://github.com/larswan/larswan.github.io/blob/main/public/siteImages/guessdamateCompressedGif.gif?raw=true" />
                    <div className="homeProjectDesciption">
                        <h3>GuessDaMate</h3>
                        <p>
                            I thoroughly enjoyed the process of building the project "GuessDamate" from scratch, and I'd like to share my experience in the first person. My goal was to create an online version of the classic game Guess Who? that enables users to play with their friends using various sets of cards. To accomplish this, I harnessed the power of React JS to design and develop a user-friendly interface. With each phase of the game carefully considered, I ensured that players could navigate seamlessly through the entire experience. <br></br><br></br>
                            One of the key elements in building "GuessDamate" was implementing the Design Thinking methodology. By adopting this approach, I was able to focus on the user's needs and preferences, resulting in an intuitive UI and an immersive UX design strategy. The game became a delightful experience as players effortlessly interacted with the application, thanks to the thoughtful user interface. Additionally, I utilized a combination of useEffect and a switch statement to create a dynamic routing system based on fetched data. This allowed the game to smoothly transition between different game phases, ensuring a seamless and engaging experience for players throughout their GuessDamate journey.
                        </p>
                    </div>
                </div>

            </div>

            <div onClick={() => navigate("cartoons")}
                className="mobileHomeBlock"
                style={{ '--background-color': boxColors[0], backgroundColor: 'var(--background-color)' }}>
                <div className="boxTitleContainer">
                    <h1>Art</h1>
                    <CaretRightOutlined className="homeArrowIcon" />
                </div>
                <img src="https://github.com/larswan/larswan.github.io/blob/main/public/cartoons/REPTILES%20NEW%20BOX.png?raw=true" />
            </div>

            <div onClick={() => navigate("animations")}
                className="mobileHomeBlock"
                style={{ '--background-color': boxColors[1], backgroundColor: 'var(--background-color)' }}>
                <div className="boxTitleContainer">
                    <h1>Animation</h1>
                    <CaretRightOutlined className="homeArrowIcon" />
                </div>
                <img src="https://github.com/larswan/larswan.github.io/blob/main/public/animations/Mothers%20Day%202020%20card.GIF?raw=true" />
            </div>
            <div onClick={() => navigate("designs")}
                className="mobileHomeBlock"
                style={{ '--background-color': boxColors[2], backgroundColor: 'var(--background-color)' }}>
                <div className="boxTitleContainer">
                    <h1>Design</h1>
                    <CaretRightOutlined className="homeArrowIcon" />
                </div>
                <img src="https://github.com/larswan/larswan.github.io/blob/main/public/graphics/pure%20genius%204.18.22%20final%20B.png?raw=true" style={{ backgroundColor: 'white' }} />
            </div>
        </div>
    )
}

export default MobileHome