import { useNavigate } from 'react-router-dom';
import HeaderSubBox from './HeaderSubBox';

const NavBar = () => {
    const navigate= useNavigate()
    
    return (
        <div className="navBar">
            <h3 onClick={()=>navigate("/")} className="siteTitle">SWAN THE GOOSE</h3>
            {/* <HeaderSubBox className="siteTitle" name="SWAN THE GOOSE" link="" /> */}
            <div className="rightNav">
                <HeaderSubBox name="Websites" link="websites" />
                <HeaderSubBox name="Art" dropdown={[
                    {title: "Animations",
                    link: "animation"
                },
                    {title: "Drawing",
                        link: "drawings"
                },
                    {title: "Graphics",
                    link: "graphics"
                },
                //     {title: "Animations",
                //     link: "animation"
                // },
                    , "drawings", "graphics", "music"]}/>
                <HeaderSubBox name="Swanify" link="swantogoose"/>
                <HeaderSubBox name="About" link="about"  />
            </div>
        </div>
    )
}

export default NavBar