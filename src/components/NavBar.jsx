import { useNavigate } from 'react-router-dom';
import HeaderSubBox from './HeaderSubBox';
import Dropdown from './Dropdown';
import { useState } from 'react';


const NavBar = () => {
    const navigate= useNavigate()
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="navBar">            
            <div 
            onClick={() => navigate("/")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`siteTitle ${isHovered ? 'hovered' : ''}`}>
                <h3 >SWAN THE GOOSE</h3>
            </div>


            <div className="rightNav">
                <HeaderSubBox name="Projects" link="projects" />
                <Dropdown name="Art" dropdownItems={[
                    {name: "Animations",
                    link: "animations"
                },
                    {name: "Drawing",
                        link: "drawings"
                },
                    {name: "Graphics",
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